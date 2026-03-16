import { LocalBusiness, WithContext } from "schema-dts";

const localbusiness: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Northlake Construction',
    url: 'https://northlake-construction.com',
    logo: '/header-logo.png',
    telephone: '+1-312-555-0100', // TODO: replace with actual phone number
    openingHours: 'Mo-Fr 07:00-17:00',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '3119 N Karlov Ave',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60641',
        addressCountry: 'US'
    },
    areaServed: [
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
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Asphalt Paving and Sitework Services',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asphalt Paving and Repairs' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Street Restoration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Milling' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stone Installation and Grading' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Demolition and Excavation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Flat Work' } },
        ]
    }
}

export default localbusiness
