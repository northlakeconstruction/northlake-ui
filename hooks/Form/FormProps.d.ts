import { PropsWithChildren } from "react"

interface FormProps extends PropsWithChildren {
    formId: string
    onSubmit: (event: any) => void
}

export { FormProps }