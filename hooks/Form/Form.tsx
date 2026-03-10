"use client"

import { useEffect } from "react"
import { FormProps } from "./FormProps"

function Form({formId, onSubmit: handleSubmit, children}: FormProps) {

    useEffect(() => {
        const form = document.querySelector(`#${formId}`) as HTMLFormElement
        form.addEventListener("submit", handleSubmit)
        // return () => { form.removeEventListener("submit", handleSubmit) }
    }, [])

    return (
        <form id={formId}>
            {children}
        </form>
    )
}

export { Form }