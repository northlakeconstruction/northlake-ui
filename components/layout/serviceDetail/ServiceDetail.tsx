import Image from "next/image"
import { Service } from "@/content/services/service"
import { services } from "@/content/services"
import { SummaryCardArea } from "@/components/layout/summaryCardArea"

interface ServiceDetailProps {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const { detail, title } = service

  return (
    <article>
      {/* Hero */}
      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <Image
          src={detail.hero.src}
          alt={detail.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-white text-4xl md:text-5xl font-[oswald] uppercase tracking-wide">
            {title}
          </h1>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-10">
        {detail.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-[oswald] uppercase tracking-wide mb-3">
              {section.heading}
            </h2>
            <p className="text-lg leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>

      {/* Gallery */}
      {detail.gallery.length > 0 && (
        <div className="px-6 pb-16">
          <h2 className="text-md uppercase tracking-widest text-primary-fg/50 mb-6">
            Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detail.gallery.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Services */}
      <div className="bg-section py-12">
        <h2 className="text-md uppercase tracking-widest text-primary-fg/50 mb-6 px-6">
          Our Other Services
        </h2>
        <SummaryCardArea summaryCards={services.filter(s => s.slug !== service.slug).map(s => ({
          title: s.title,
          description: s.summary,
          detailLink: `/services/${s.slug}`,
          image: s.card.image,
        }))} />
      </div>
    </article>
  )
}
