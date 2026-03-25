"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { SummaryCardArea } from "@/components/layout/summaryCardArea"
import { ProjectTypeArea } from "@/components/layout/projectTypeArea/ProjectTypeArea"
import { Hero } from "@/components/layout/hero/Hero"
import { Button } from "@/components/ui/button"
import { ServiceAreaMap } from "@/components/layout/serviceAreaMap/ServiceAreaMap"
import { services } from "@/content/services"
import { hero, serviceAreaSection, projectTypes } from "@/content/homepage"
import { about } from "@/content/about"

const summaryCards = services.map(s => ({
  title: s.title,
  description: s.summary,
  detailLink: `/services/${s.slug}`,
  image: s.card.image,
}))

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <div className="relative">
        <section>
          <Hero img={hero.image.src} alt={hero.image.alt}>
            <div className="flex flex-col gap-10 items-start max-w-md">
              <h1 className="text-4xl md:text-5xl max-w-2xl">{hero.heading}</h1>
              <h2 className="text-2xl md:text-3xl">{hero.subheading}</h2>
              <Button onClick={() => { router.push("/contact") }}>{hero.ctaLabel}</Button>
            </div>
          </Hero>
        </section>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-section pointer-events-none" />
      </div>

      {/* Services */}
      <section className="bg-section">
        <div className="flex justify-start py-6">
          <h2 className="text-md pl-6 uppercase tracking-widest text-primary-fg/50">Our Services</h2>
        </div>
        <SummaryCardArea summaryCards={summaryCards} />
      </section>

      {/* Project Types */}
      <section className="bg-section">
        <div className="flex justify-start py-6">
          <h2 className="text-md pl-6 uppercase tracking-widest text-primary-fg/50">Who We Serve</h2>
        </div>
        <ProjectTypeArea projectTypes={projectTypes} />
      </section>

      {/* Service Areas */}
      <section className="bg-section">
        <div className="flex justify-start py-6">
          <h2 className="text-md pl-6 uppercase tracking-widest text-primary-fg/50">Our Territory</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 px-6 pb-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <ServiceAreaMap />
          </div>
          <div className="sr-only md:not-sr-only md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl">{serviceAreaSection.heading}</h2>
            <ul className="flex flex-col gap-2 text-xl font-[oswald] uppercase tracking-wide text-primary-fg">
              {serviceAreaSection.cities.map(city => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-section-alt p-4">
        <div className="flex justify-start py-6">
          <h2 className="text-md pl-6 uppercase tracking-widest text-white/50">About Us</h2>
        </div>
        <div className="flex p-6 items-center gap-6 bg-white m-4">
          <Image
            src={about.founder.image.src}
            height={1000}
            width={800}
            alt={about.founder.image.alt}
            className="hidden md:block max-w-4/10"
            hidden
          />
          <div className="flex flex-col bg-white p-4 gap-4">
            <h2 className="text-center">{about.founder.name}</h2>
            <i className="text-center">{about.founder.title}</i>
            {about.founder.bio.map((paragraph, i) => (
              <p
                key={i}
                className="indent-4"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
