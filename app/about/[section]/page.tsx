import type { AboutPageProps } from "../section"

export default async function ServicePage({ params }: AboutPageProps) {
    const { section } = await params
    return <div>{section}</div>
}