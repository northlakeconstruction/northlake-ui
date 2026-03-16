export interface ServiceImage {
  src: string
  alt: string
}

export interface ServiceSection {
  heading: string
  body: string
}

export interface Service {
  /** URL path segment — must match the route /services/[slug] */
  slug: string
  title: string
  /** Short description shown on the homepage summary card */
  summary: string
  /** Service type label used in schema.org structured data */
  serviceType: string
  /** Canonical URL */
  url: string
  card: {
    image: ServiceImage
  }
  detail: {
    hero: ServiceImage
    sections: ServiceSection[]
    /** Work photos shown in the gallery at the bottom of the detail page */
    gallery: ServiceImage[]
  }
}
