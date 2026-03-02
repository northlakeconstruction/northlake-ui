import type { AboutPageProps } from "../section"

export function generateStaticParams() {
    return [{section: 'paving'}]
}

export default async function ServicePage({ params }: AboutPageProps) {
    const { section } = await params
    return <div>{section}</div>
}