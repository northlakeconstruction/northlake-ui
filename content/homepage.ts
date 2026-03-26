/**
 * Homepage content — hero section and service area listing.
 */
export const hero = {
  heading: "Northlake Construction",
  subheading: "A Chicago-based asphalt paving and sitework contractor.",
  image: {
    src: "/lpaving.webp",
    alt: "A paving crew in front of the Chicago skyline.",
  },
  ctaLabel: "Get a Quote!",
}

export const serviceAreaSection = {
  heading: "Serving Chicago, Cook & DuPage Counties",
  /** Cities displayed in the service area list */
  cities: [
    "Chicago",
    "Evanston",
    "Naperville",
    "Chicago Heights",
  ],
}

/**
 * Project type cards — shown between Our Services and Service Areas on the homepage.
 * Each entry represents a category of work Northlake prefers to take on.
 *
 * To link a card to a portfolio page once images are available,
 * set `link` to the destination path (e.g. "/portfolio/public-row").
 * Leave `link` undefined to render the card as non-clickable.
 */
export const projectTypes = [
  {
    title: "Municipalities and Governments",
    description: "We are permitted to work in the public right-of-way in Chicago and various municipalities in Cook County under NAICS codes 237310, 238990.",
    image: {
      src: "/rightofway.webp",
      alt: "A compactor passes over fresh asphalt on a residential street in Chicago.",
    },
    link: undefined,
  },
  {
    title: "Commercial and Residential",
    description: "Full-service site work including earthworks, paving, milling, restoration, and flatwork for schools, parks, retail, commercial, and residential properties.",
    image: {
      src: "/parkinglot.webp",
      alt: "A freshly paved and striped parking lot with the Sears Tower in the background.",
    },
    link: undefined,
  },
  {
    title: "Specialty Concrete, Paving, and Earthwork",
    description: "We install concrete specialities such as seat wall planters and trash enclosures as well as athletic fields and recreational paths.",
    image: {
      src: "/parkinglot.webp",
      alt: "A freshly paved and striped parking lot with the Sears Tower in the background.",
    },
    link: undefined,
  },
  // {
  //   title: "Residential",
  //   description: "Asphalt and portland cement concrete driveways, sidewalks, drainage, and utility repair for residential customers.",
  //   image: {
  //     src: "/residentialdriveway.jpg",
  //     alt: "A freshly paved, blacktop, single-lane driveway.",
  //   },
  //   link: undefined,
  // },
]

export const territoryPage = {
  /**
   * Introductory paragraph shown at the top of the Where We Work page.
   * Describe the region you serve and any relevant context.
   */
  intro: `We mobilize to locations in Chicagoland, especially City of Chicago, Cook and DuPage counties.`,

  /**
   * Shown below the city list — use this to note any areas
   * not explicitly listed, or to invite inquiries from other locations.
   */
  footnote: `And your community.`,
}
