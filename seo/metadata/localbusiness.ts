import { LocalBusiness, WithContext } from "schema-dts";

const localbusiness: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Northlake Construction',
    url: 'https://northlake-construction.com',
    logo: '/header-logo.png',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '3119 N Karlov Ave',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60641',
        addressCountry: 'US'
    }

}

export default localbusiness