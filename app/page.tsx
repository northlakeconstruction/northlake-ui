import { SummaryCardArea } from "@/components/layout/summaryCardArea";
import Image from "next/image"
const services = [
  {
    title: "Parking Lots",
    description: "From city streets to stadium parking lots we lay all the asphalt.",
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Driveways",
    description: "From city streets to stadium parking lots we lay all the asphalt.",
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Patching",
    description: "From city streets to stadium parking lots we lay all the asphalt.",
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Flat Work",
    description: "From city streets to stadium parking lots we lay all the asphalt.",
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
]

const featuredProjects = [
  {
    title: "City Park Parking Lot",
    description: "From city streets to stadium parking lots we lay all the asphalt.",
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Street Patching with Plumbers 911",
    description: "From city streets to stadium parking lots we lay all the asphalt.",
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
]

import { Hero } from "@/components/layout/hero/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="py-6">
        <Hero 
          img="/paver.png" 
          alt="A paving crew in front of the Chicago skyline."
        >
          <div className="flex flex-col gap-10 items-start max-w-md">
            <h1 className="text-4xl md:text-5xl max-w-2xl">Northlake Construction</h1>
            <h2 className="text-2xl md:text-3xl">A Chicago-based asphalt paving and sitework contractor.</h2>
            <Button>Get a Quote!</Button>
          </div>
        </Hero>
      </section>
      {/* <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 mt-4">
        <h1 className="text-center lg:text-right justify-items-end w-150">
          A Minority Business Enterprise
        </h1>
        
        <Image
          width={596}
          height={598}
          alt="A compactor paves a road with the city skyline in the background."
          src="/log-transparent.png"
          className="shrink-0 w-auto max-w-[300px] h-auto block"
        />
      
        <h1 className="text-center lg:text-left justify-items-start w-150">
          Paving The Future of Chicago
        </h1>
      </div> */}
      {/* Services */}
      <section className="py-6">
        <SummaryCardArea summaryCards={services} />
      </section>

      <section className="py-6 bg-gray-200">
        <SummaryCardArea summaryCards={featuredProjects} />
      </section>
      
      <section className="py-6">
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
      <h2 className="py-4">Who We Are</h2>
      {/* Contact */}
      <h2 className="py-4">Contact Us</h2>
    </main>
  );
}
