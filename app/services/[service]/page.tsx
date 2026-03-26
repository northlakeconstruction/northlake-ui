import { notFound } from "next/navigation"
import type { ServicePageProps } from "../service"
import { services } from "@/content/services"
import { buildServiceSchema } from "@/seo/metadata/service"
import { ServiceDetail } from "@/components/layout/serviceDetail/ServiceDetail"

export async function generateStaticParams() {
  return services.map(service => ({
    service: service.slug,
  }))
}

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(pageContent)) }}
      />
      <ServiceDetail service={pageContent} />
    </>
  )
}
