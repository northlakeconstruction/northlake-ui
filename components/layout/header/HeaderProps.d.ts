interface Link {
    display: string
    target: string
}

interface Category {
    name: string
    link?: string
    subCategory?: Category[]
}

interface HeaderProps {
    categories: Category[]
}

export type {Link, HeaderProps}