/**
 * Core business information.
 * Edit this file to update contact details, branding, or hours.
 */
export const company = {
  name: "Northlake Construction",
  tagline: "A Minority Business Enterprise",
  url: "https://northlake-construction.com",

  contact: {
    /** Display format — used in footer and visible text */
    phone: "(773) 355-6374",
    /** Used in <a href="..."> telephone links */
    phoneHref: "tel:7733556374",
    /** E.164 format — used in schema.org structured data */
    phoneSchema: "+17733556374",
    email: "rbyrdsong@northlake-construction.com",
  },

  address: {
    street: "3119 N Karlov Ave.",
    city: "Chicago",
    state: "IL",
    zip: "60641",
  },

  logo: {
    /** Full-color logo — used in header and footer */
    color: "/images/header-logo-blue.png",
    /** Light/white variant */
    white: "/images/header-logo.png",
  },

  openingHours: "Mo-Fr 07:00-17:00",
}
