import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
    variant: 'primary' | 'secondary'
    onClick: MouseEventHandler<MouseEvent>
    disabled?: boolean
    className?: string
}

export { ButtonProps }