import { notFound } from "next/navigation"
import type { ServicePageProps } from "../service"
import { services } from "@/content/services"
import serviceld from "@/seo/metadata/service"
import { ServiceDetail } from "@/components/layout/serviceDetail/ServiceDetail"

export async function generateMetadata({ params }: ServicePageProps) {
  const { service } = await params
  const pageContent = services.find(s => s.slug === service)

  if (!pageContent) notFound()

  const { title, summary, detail } = pageContent

  return {
    title,
    openGraph: {
      title,
      description: summary,
      image: detail.hero.src,
    }
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params
  const pageContent = services.find(s => s.slug === service)

  if (!pageContent) notFound()

  serviceld.serviceType = pageContent.serviceType
  serviceld.description = pageContent.summary

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceld) }}
      />
      <ServiceDetail service={pageContent} />
    </>
  )
}
