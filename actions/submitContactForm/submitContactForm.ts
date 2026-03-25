"use server"

import { Sha256 } from "@aws-crypto/sha256-browser"
import { SignatureV4 } from "@aws-sdk/signature-v4"
import env from "@/env"

export async function submitContactForm(data: submitContactFormProps) {
    console.log(JSON.stringify(data))
    const validationSuccess = await validateToken(data["cf-turnstile-response"])
    console.log(validationSuccess)
    if(!validationSuccess){
        return { success: false }
    }

    const success = await mailer(data)
    return { success: success }
}

const SUBJECT = "New Internet Lead"

const validateToken = async(token: string): Promise<boolean> => {
    const url = new URL(env.TURNSTILE_VALIDATION_ENDPOINT ?? "")
    const payload = {
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
    }
    
    try{
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        const result = await res.json()
        return result.success
    } catch (e) {
        console.log(JSON.stringify(e))
        return false
    }
}

const mailer = async(messageData: submitContactFormProps): Promise<boolean> => {

    const message = [
    `You've a received a new lead from the website. `,
    ``,
    `${messageData.name} writes: `,
    `${messageData.desc}`,
    ``,
    `Their return contact info is: `,
    `tel: ${messageData.tel}`,
    `email: ${messageData.email}`
    ]

    const signer = new SignatureV4({
        credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY
        },
        service: "sns",
        region: env.AWS_REGION,
        sha256: Sha256
    })

    const host = `sns.${env.AWS_REGION}.amazonaws.com`

    const headers = {
        host
    }

    try {
        const presignedRequest = await signer.presign({
            method: "GET",
            protocol: "https",
            hostname: host,
            path: '/',
            query: {
                Action: "Publish",
                TopicArn: env.NEW_LEAD_TOPIC_ARN,
                Message: message.join('\n'),
                Subject: SUBJECT,
                Version: "2010-03-31",
            },
            headers,
        })

        const url = new URL(`https://${host}/`)

        const queryParams = JSON.parse(JSON.stringify(presignedRequest.query)) as Record<string, string>
        Object.entries(queryParams).forEach(([k, v]) => {
            url.searchParams.append(k, v as string)
        })

        const response = await fetch(url, { headers: presignedRequest.headers })

        return response.ok
    } catch (e) {
        console.log((e as Error).toString())
        return false
    }
}