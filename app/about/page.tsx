import Link from "next/link"

export const metadata = {
  title: "About — Northlake Construction",
}

const sections = [
  { label: "Our Founder", href: "/about/founder" },
  { label: "Our Certifications", href: "/about/certifications" },
  { label: "Where We Work", href: "/about/territory" },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-[oswald] uppercase tracking-wide mb-10">About Northlake</h1>
      <ul className="flex flex-col gap-4">
        {sections.map(s => (
          <li key={s.href}>
            <Link href={s.href} className="text-2xl font-[oswald] uppercase tracking-wide text-primary-fg hover:underline">
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
