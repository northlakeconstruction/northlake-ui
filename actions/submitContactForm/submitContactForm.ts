"use server"

export async function submitContactForm(data: submitContactFormProps) {
    console.log("submitContactForm")
    console.log(JSON.stringify(data))
    return { success: true }
}