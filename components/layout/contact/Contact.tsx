"use client"

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/hooks/Form";
import { submitContactForm } from "@/actions/submitContactForm";
import env from "@/env"
import { useState } from "react";
import Script from "next/script";

const form_name = "CONTACT_FORM"

export function Contact(){
    const [token, setToken] = useState<string | null>(null)

    console.log(`Turnstile: ${env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}`)
    const handleSubmit = async(event: any) => {
        event.preventDefault()
        const form = event.target
        const fd = new FormData(form)
        let emailRequest: Record<string, any> = {}
        for(const entry of fd.entries()){
            const [k, v] = entry
            emailRequest[k] = v
        }
        console.log(JSON.stringify(emailRequest))
        const res = await submitContactForm(emailRequest as submitContactFormProps)
        console.log(res)
    }

    return (
        <div className="flex-col bg-white p-4">
                <div className="mx-auto max-w-90/100 md:max-w-75/100 lg:max-w-50/100">
                    <h2 className="py-4 text-center">Contact Northlake Construction</h2>
                    <Form
                        formId={form_name}
                        onSubmit={handleSubmit}
                    >
                        <Field className="py-2">
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input name="name" placeholder="your name" required/>
                        </Field>
                        <Field className="py-2">
                            <FieldLabel htmlFor="email">eMail</FieldLabel>
                            <Input name="email" placeholder="your email" type="email"/>
                        </Field>
                        <Field className="py-2">
                            <FieldLabel htmlFor="tel">Phone</FieldLabel>
                            <Input name="tel" placeholder="your 10 digit phone number" type="tel"/>
                        </Field>
                        <Field className="py-2">
                            <FieldLabel htmlFor="desc">Tell Us About Your Project</FieldLabel>
                            <Textarea name="desc" placeholder="Tell us about your project" />
                        </Field>
                        <Script 
                            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                            async
                            defer
                        />
                        <div className="flex justify-end gap-4">
                            <Button variant="secondary" type="reset">Clear</Button>
                            <Button type="submit">Submit</Button>
                        </div>
                        <div
                            className="cf-turnstile flex justify-end py-4"
                            data-sitekey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                        ></div>
                    </Form>
                </div>
            </div>
    )
}