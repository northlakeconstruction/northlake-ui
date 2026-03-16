import { Service as SchemaService, WithContext } from "schema-dts";
import { company } from "@/content/company";
import { type Service } from "@/content/services/service";
import { areaServed } from "./localbusiness";

export function buildServiceSchema(service: Service): WithContext<SchemaService> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.summary,
        url: service.url,
        serviceType: service.serviceType,
        image: `${company.url}${service.detail.hero.src}`,
        provider: {
            '@type': 'LocalBusiness',
            name: company.name,
            url: company.url,
            telephone: company.contact.phoneSchema,
            address: {
                '@type': 'PostalAddress',
                streetAddress: company.address.street,
                addressLocality: company.address.city,
                addressRegion: company.address.state,
                postalCode: company.address.zip,
                addressCountry: 'US',
            },
        },
        areaServed,
    }
}
