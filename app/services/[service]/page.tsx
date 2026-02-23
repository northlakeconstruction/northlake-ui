import { notFound } from "next/navigation"
import type { ServicePageProps } from "../service"
import Services from "../../../content/services"

export default async function ServicePage({ params }: ServicePageProps) {
    const { service } = await params
    
    const pageContent = Services[service]
    if(!pageContent){
        notFound()
    }
    const {title, Page} = pageContent

    return (
    <>
        <Page />
    </>
    )
}