import { Service, WithContext } from "schema-dts";

const serviceTemplate: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Northlake Construction',
    },
    areaServed: {
        "@type": "Place",
        name: "Chicago, IL"
    }
}

export default serviceTemplate