"use client"
import { SummaryCardArea } from "@/components/layout/summaryCardArea";
import Image from "next/image"
const services = [
  {
    title: "Asphalt Paving and Repairs",
    description: `Asphalt remains the industry standard for paving throughout the United States,
      with more than 90% of parking lots constructed using this durable, cost-effective, and long-
      lasting material. Its proven reliability and ease of maintenance make it the preferred choice 
      for commercial and municipal applications.`,
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Street Restoration",
    description: `We handle street restoration for utility contractors with full DOT permitting 
      compliance that includes saw cutting, chipping, sweeping, paving, and thermoplastic 
      markings to match existing surfaces and meet municipal standards.`,
    detailLink: "/services/restoration",
    image: {
      src: "/street-restoration.jpg",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Milling",
    description: `Utilizing precision equipment, we mill existing pavement to specified depths 
      to create a clean, uniform surface ready for overlay. This process ensures proper grading, 
      drainage, and long-term performance.`,
    detailLink: "/services/milling",
    image: {
      src: "/milling.jpg",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Stone Installation and Grading",
    description: `We install and fine-grade aggregate base to specification, ensuring accurate 
      elevations, proper drainage, and strong load-bearing support - giving our customers a 
      reliable base built to minimize future failure.`,
    detailLink: "/services/stone",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Demolition and Excavation",
    description: `We remove existing asphalt, concrete, and unsuitable subgrade materials while 
      maintaining proper elevations and site integrity. `,
    detailLink: "/services/demolition",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Concrete Flat Work",
    description: `We specialize in sidewalks, curb and gutter, pads, and other site concrete 
      installations. With a focus on durability, ADA compliance, and proper drainage, we 
      provide customers with dependable long-term solutions.`,
    detailLink: "/services/stone",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
]

const featuredProjects = [
  {
    quote: "Our lot always flooded and iced over, Northlake fixed the drainage and now we don't worry about slips and falls",
    byline: "Johnny Specials - HOA President",
    detailLink: "/projects/driveway",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    quote: "Ricky's crew showed up on short notice to open the street so we could make our emergency repair.",
    byline: "Patty O'Plumber - Foreman Celtic Plumbing",
    detailLink: "/projects/patching",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
]

import { Hero } from "@/components/layout/hero/Hero";
import { Button } from "@/components/ui/button";
import { HorizontalCard } from "@/components/ui/horizontal-card";
import { Testimonial } from "@/components/ui/testimonial";
import { Contact } from "@/components/layout/contact";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <div className="relative">
        <section>
          <Hero
            img="/paver.png"
            alt="A paving crew in front of the Chicago skyline."
          >
            <div className="flex flex-col gap-10 items-start max-w-md">
              <h1 className="text-4xl md:text-5xl max-w-2xl">Northlake Construction</h1>
              <h2 className="text-2xl md:text-3xl">A Chicago-based asphalt paving and sitework contractor.</h2>
              <Button onClick={() => {router.push("/contact")}}>Get a Quote!</Button>
            </div>
          </Hero>
        </section>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-section pointer-events-none" />
      </div>
      {/* Services */}
      <section className="bg-section">
        <SummaryCardArea summaryCards={services} />
      </section>

      {/* <section className="">
        {
          featuredProjects.map((fp, index) => {
            return (
              <HorizontalCard key={fp.detailLink} image={fp.image.src} alt={fp.image.alt} imageLeft={(index & 0x1) == 1}>
                <Testimonial quote={fp.quote} byline={fp.byline} detailLink={fp.detailLink} />
              </HorizontalCard>
            )
          })
        }
      </section> */}

      <section className="">
        <Hero img="/servicearea.png" alt="Map of the City of Chicago and Cook County">
          <div className="flex flex-col gap-10 items-start">
            <h2>Serving Chicago, Cook and Dupage Counties</h2>
            <ul className="text-black text-3xl">
              <li>Chicago</li>
              <li>Naperville</li>
              <li>Tinley Park</li>
              <li>Northbrook</li>
            </ul>
          </div>
        </Hero>
      </section>
      {/* About */}
      <section className="bg-section-alt p-4">
        <h2 className="text-white text-center p-4">About Us</h2>
        <div className="flex p-6 items-center gap-6 bg-white m-4">
          <Image 
            src="/ricky-portrait.png"
            height={1000}
            width={800}
            alt="Founder Ricky Byrdsong Jr"
            className="hidden md:block max-w-4/10"
          />
          <div className="flex flex-col bg-white p-4 gap-4">
            <h2 className="text-center">Ricky Byrdsong Jr.</h2>
            <i className="text-center">Founder</i>
            <p className="indent-4">
              My summer job as a construction laborer evolved into a lifelong profession. 
              Through direct, hands-on experience I advanced to be a foreman for one of 
              the largest paving subcontractors in Chicago. After <b>X</b> years leading projects I 
              developed the 4 discplines of successful projects: <b>detailed planning, operational discipline, 
              partnering with skilled labor, and following uncompromising safety and quality standards.</b>
            </p>
            <p className="indent-4">
              As a certified Minority Business Enterprise, we serve as a strategic partner 
              for organizations seeking to meet participation objectives without compromising 
              performance. We approach every engagement with a long-term mindset emphasizing 
              transparency, responsiveness, and disciplined execution. 
            </p>
          </div>
        </div>
        {/* Contact */}
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
