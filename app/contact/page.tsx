import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact(){
    return (
        <main>
            <div className="flex-col">
                <div className="mx-auto max-w-90/100 md:max-w-75/100 lg:max-w-50/100">
                    <h2 className="py-4 text-center">Contact Northlake Construction</h2>
                    <form>
                        <Field className="py-2">
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input id="name" placeholder="your name" required/>
                        </Field>
                        <Field className="py-2">
                            <FieldLabel htmlFor="email">eMail</FieldLabel>
                            <Input id="email" placeholder="your email" type="email"/>
                        </Field>
                        <Field className="py-2">
                            <FieldLabel htmlFor="tel">Phone</FieldLabel>
                            <Input id="tel" placeholder="your 10 digit phone number" type="tel"/>
                        </Field>
                        <Field className="py-2">
                            <FieldLabel htmlFor="desc">Tell Us About Your Project</FieldLabel>
                            <Textarea id="desc" placeholder="Tell us about your project" type="text" />
                        </Field>
                        <div className="flex justify-end gap-4">
                            <Button variant="secondary">Clear</Button>
                            <Button>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}