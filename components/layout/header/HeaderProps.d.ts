interface Link {
    display: string
    target: string
}

interface HeaderProps {
    categories: Record<string, Link>
}

export type {Link, HeaderProps}