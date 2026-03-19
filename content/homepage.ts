/**
 * Homepage content — hero section and service area listing.
 */
export const hero = {
  heading: "Northlake Construction",
  subheading: "A Chicago-based asphalt paving and sitework contractor.",
  image: {
    src: "/lpaving.jpg",
    alt: "A paving crew in front of the Chicago skyline.",
  },
  ctaLabel: "Get a Quote!",
}

export const serviceAreaSection = {
  heading: "Serving Chicago, Cook & DuPage Counties",
  /** Cities displayed in the service area list */
  cities: [
    "Chicago",
    "Naperville",
    "Tinley Park",
    "Northbrook",
    "Schaumburg",
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
    title: "Public Right of Way",
    description: "We are licensed to work in the right-of-way in Chicago and most municipalities in Cook and DuPage counties under NACS codes 237310, 238990.",
    image: {
      src: "/rightofway.jpg",
      alt: "A compactor passes over fresh asphalt on a residential street in Chicago.",
    },
    link: undefined,
  },
  {
    title: "Government, Commercial, and Residential Parking Lots",
    description: "Full-service paving, milling, and restoration for schools, parks, retail, commercial, and residential properties.",
    image: {
      src: "/parkinglot.jpg",
      alt: "A freshly paved and striped parking lot with the Sears Tower in the background.",
    },
    link: undefined,
  },
  {
    title: "Residential",
    description: "Asphalt and portland cement concrete driveways, sidewalks, drainage, and utility repair for residential customers.",
    image: {
      src: "/residentialdriveway.jpg",
      alt: "A freshly paved, blacktop, single-lane driveway.",
    },
    link: undefined,
  },
]

export const territoryPage = {
  /**
   * Introductory paragraph shown at the top of the Where We Work page.
   * Describe the region you serve and any relevant context.
   */
  intro: `We proudly travel to locations in Chicagoland, especially City of Chicago, Cook and DuPage counties.`,

  /**
   * Shown below the city list — use this to note any areas
   * not explicitly listed, or to invite inquiries from other locations.
   */
  footnote: `And your community.`,
}
