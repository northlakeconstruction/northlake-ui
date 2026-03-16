import { ServiceAreaMap } from "@/components/layout/serviceAreaMap/ServiceAreaMap"
import { serviceAreaSection, territoryPage } from "@/content/homepage"

export const metadata = {
  title: "Service Areas — Northlake Construction",
  description:
    "Northlake Construction provides asphalt paving, milling, concrete flatwork, and site work " +
    "throughout Chicago, Cook County, and DuPage County — including Naperville, Tinley Park, " +
    "Northbrook, Schaumburg, Oak Park, Des Plaines, Skokie, and surrounding communities.",
}

export default function TerritoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-[oswald] uppercase tracking-wide mb-2">Where We Work</h1>
      <p className="text-lg text-primary-fg/60 mb-10">{serviceAreaSection.heading}</p>
      {territoryPage.intro && (
        <p className="text-lg leading-relaxed mb-10">{territoryPage.intro}</p>
      )}

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-3/5">
          <ServiceAreaMap />
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <h2 className="text-md uppercase tracking-widest text-primary-fg/50">Communities Served</h2>
          <ul className="flex flex-col gap-2">
            {serviceAreaSection.cities.map(city => (
              <li key={city} className="text-xl font-[oswald] uppercase tracking-wide">
                {city}
              </li>
            ))}
          </ul>
          {territoryPage.footnote && (
            <p className="text-sm text-primary-fg/60 mt-2">{territoryPage.footnote}</p>
          )}
        </div>
      </div>
    </div>
  )
}
