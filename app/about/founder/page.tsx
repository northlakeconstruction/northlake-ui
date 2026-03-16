import Image from "next/image"
import { about } from "@/content/about"

export const metadata = {
  title: "Our Founder — Northlake Construction",
  description: "A message from Ricky Byrdsong Jr., founder and owner of Northlake LLC.",
}

export default function FounderPage() {
  const { founder } = about

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
        <div className="w-full md:w-auto md:shrink-0">
          <Image
            src={founder.image.src}
            alt={founder.image.alt}
            width={320}
            height={400}
            className="object-cover w-full md:w-80"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-[oswald] uppercase tracking-wide">{founder.name}</h1>
          <p className="text-lg text-primary-fg/60 font-[oswald] uppercase tracking-widest">{founder.title}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-md uppercase tracking-widest text-primary-fg/50">Founder's Message</h2>
        {founder.message.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed indent-8" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
        <div className="mt-4">
          <p className="font-bold text-lg">{founder.name}</p>
          <p className="text-primary-fg/60">{founder.title}, Northlake LLC</p>
        </div>
      </div>
    </article>
  )
}
