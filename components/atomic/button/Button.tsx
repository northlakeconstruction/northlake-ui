import {ButtonProps} from './buttonProps'

const Button = (props: ButtonProps) => {
    const {
        variant, 
        children, 
        onClick: handleClick,
        className = "", 
        disabled = false
    } = props
    
    const variantCommon = "p-2 rounded-md font-semibold uppercase tracking-wide disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed"

    const variants: Record<string, string> = {
        primary: `bg-primary-fg text-primary-bg hover:bg-primary-fg-hover focus:ring-primary-fg-hover`,
        secondary: `bg-primary-bg text-primary-text b-primary-fg hover:bg-primary-bg-hover focus:ring-primary-bg-hover`,
    }

    return (
        <button 
            className={`${variantCommon} ${variants[variant]} ${className}`} 
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export { Button }