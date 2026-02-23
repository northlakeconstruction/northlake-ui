import { LocalBusiness, WithContext } from "schema-dts";

const localbusiness: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Northlake Construction',
    url: 'https://northlake-construction.com',
    logo: 'https://northlake-construction.com/logo.png',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '1950 West 43rd Street',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60609',
        addressCountry: 'US'
    }

}

export default localbusiness