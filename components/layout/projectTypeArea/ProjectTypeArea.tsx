import Link from "next/link"
import { HorizontalCard } from "@/components/ui/horizontal-card"

interface ProjectType {
  title: string
  description: string
  image: { src: string; alt: string }
  link?: string
}

interface ProjectTypeAreaProps {
  projectTypes: ProjectType[]
}

export function ProjectTypeArea({ projectTypes }: ProjectTypeAreaProps) {
  return (
    <div className="flex flex-col">
      {projectTypes.map((pt, i) => {
        const card = (
          <HorizontalCard key={pt.title} imageLeft={i % 2 === 0} image={pt.image.src} alt={pt.image.alt}>
            <div className="flex flex-col gap-3 p-4">
              <p className="text-2xl font-[oswald] uppercase tracking-wide">{pt.title}</p>
              <p className="text-lg leading-relaxed">{pt.description}</p>
            </div>
          </HorizontalCard>
        )

        return pt.link ? (
          <Link key={pt.title} href={pt.link} className="block no-underline">
            {card}
          </Link>
        ) : (
          <div key={pt.title}>{card}</div>
        )
      })}
    </div>
  )
}
