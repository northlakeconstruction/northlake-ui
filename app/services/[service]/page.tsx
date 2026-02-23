import { notFound } from "next/navigation"
import type { ServicePageProps } from "../service"
import Services from "@/content/services"
import serviceld from "@/seo/metadata/service"

export async function generateMetadata({ params }: ServicePageProps) {

    const { service } = await params
    
    const pageContent = Services[service]
    if(!pageContent){
        notFound()
    }
    
    const { title, description, linkImg } = pageContent


    return {
        title,
        openGraph: {
            title,
            description,
            image: linkImg
        }
    }
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { service } = await params
    
    const pageContent = Services[service]
    if(!pageContent){
        notFound()
    }
    const {description, serviceType, Page} = pageContent
    serviceld.serviceType = serviceType
    serviceld.description = description
    return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(serviceld)}}
        />
        <Page />
    </>
    )
}