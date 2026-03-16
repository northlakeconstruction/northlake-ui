import { LocalBusiness, WithContext } from "schema-dts";
import { company } from "@/content/company";
import { services } from "@/content/services";

export const areaServed = [
    { '@type': 'City', name: 'Chicago', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Naperville', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Schaumburg', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Wheaton', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Tinley Park', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Northbrook', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'AdministrativeArea', name: 'Cook County, Illinois' },
    { '@type': 'AdministrativeArea', name: 'DuPage County, Illinois' },
    { '@type': 'City', name: 'Oak Park', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Des Plaines', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Skokie', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Palos Hills', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Blue Island', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'City', name: 'Chicago Heights', containedInPlace: { '@type': 'State', name: 'Illinois' } },
    { '@type': 'AdministrativeArea', name: 'Chicagoland' },
    { '@type': 'AdministrativeArea', name: 'Chicago Metropolitan Area' },
] as const

const localbusiness: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    url: company.url,
    logo: `${company.url}${company.logo.white}`,
    telephone: company.contact.phoneSchema,
    openingHours: company.openingHours,
    address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: 'US',
    },
    areaServed,
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Asphalt Paving and Sitework Services',
        itemListElement: services.map(s => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title },
        })),
    },
}

export default localbusiness
