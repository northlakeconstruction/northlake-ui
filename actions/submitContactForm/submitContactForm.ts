"use server"

import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"
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

const sns = new SNSClient({ region: env.SNS_REGION })

const mailer = async(messageData: submitContactFormProps): Promise<boolean> => {

    const message = [
    `You've received a new lead from the website.`,
    ``,
    `${messageData.name} writes:`,
    `${messageData.desc}`,
    ``,
    `Their return contact info is:`,
    `tel: ${messageData.tel}`,
    `email: ${messageData.email}`
    ]

    try {
        await sns.send(new PublishCommand({
            TopicArn: env.NEW_LEAD_TOPIC_ARN,
            Message: message.join('\n'),
            Subject: SUBJECT,
        }))
        return true
    } catch (e) {
        console.log((e as Error).toString())
        return false
    }
}