import { SummaryCardArea } from "@/components/layout/summaryCardArea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
    title: "Seal Coat",
    description: "From city streets to stadium parking lots we lay all the asphalt.",
    detailLink: "/services/paving",
    image: {
      src: "/paver.png",
      alt: "A Northlake paving crew on a public road witht he Chicago Skyline in the background."
    }
  },
  {
    title: "Striping",
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

export default function Home() {
  return (
    <div className="pt-16 p-8">
      <main>
        {/* Hero */}
        <h2 className="py-4">I Can Be Your Hero Baby</h2>
        {/* Services */}
        <h2 className="py-4">Services</h2>
        <SummaryCardArea summaryCards={services} />
        {/* Featured Projects */}
        <h2 className="py-4">Featured Projects</h2>
        <SummaryCardArea summaryCards={featuredProjects} />
        {/* About */}
        <h2 className="py-4">About</h2>
        {/* Contact */}
        <h2 className="py-4">Contact</h2>
      </main>
    </div>
  );
}
