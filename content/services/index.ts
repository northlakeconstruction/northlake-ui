import { Service } from './service'

/**
 * All services offered by Northlake Construction.
 *
 * Each entry drives:
 *  - The summary card on the homepage
 *  - The /services/[slug] detail page
 *  - Schema.org structured data
 *
 * To add a service: copy an existing entry, give it a unique slug,
 * and add photos to /public before referencing them here.
 */
export const services: Service[] = [
  {
    slug: "paving",
    title: "Asphalt Paving",
    summary: `Asphalt remains the industry standard for paving throughout the United States,
      with more than 90% of parking lots constructed using this durable, cost-effective, and
      long-lasting material. Its proven reliability and ease of maintenance make it the preferred
      choice for commercial and municipal applications.`,
    serviceType: "Asphalt Paving",
    url: "https://northlake-construction.com/services/paving",
    card: {
      image: {
        src: "/images/paverrear.webp",
        alt: "A Northlake paving crew on a public road with the Chicago skyline in the background.",
      },
    },
    detail: {
      hero: {
        src: "/images/paverrear.webp",
        alt: "A Northlake paving crew on a public road with the Chicago skyline in the background.",
      },
      sections: [
        {
          heading: "Why Asphalt?",
          body: `Asphalt remains the industry standard with more than 90% of parking lots built
            from this durable, cost-effective material. It offers faster installation, lower
            upfront cost, and easier long-term maintenance than concrete alternatives.`,
        },
        {
          heading: "Our Process",
          body: `We mill, grade, and pave to specification — coordinating with municipalities
            for permits and traffic control when required. Every job is finished to match
            existing surfaces and meet applicable municipal standards.`,
        },
      ],
      gallery: [],
    },
  },
  {
    slug: "milling",
    title: "Milling",
    summary: `Utilizing precision equipment, we mill existing pavement to specified depths
      to create a clean, uniform surface ready for overlay. This process ensures proper
      grading, drainage, and long-term performance.`,
    serviceType: "Asphalt Milling",
    url: "https://northlake-construction.com/services/milling",
    card: {
      image: {
        src: "/images/milling.webp",
        alt: "A milling machine removing the surface layer of an asphalt road.",
      },
    },
    detail: {
      hero: {
        src: "/images/milling.webp",
        alt: "A milling machine removing the surface layer of an asphalt road.",
      },
      sections: [
        {
          heading: "Precision Milling",
          body: `Our equipment mills to exact depth specifications, producing a consistent
            profile that is ready for overlay without additional grading.`,
        },
        {
          heading: "Why Mill First?",
          body: `Milling removes deteriorated surface material while maintaining curb and
            gutter reveal. It improves drainage grades and extends the life of the new
            overlay significantly.`,
        },
      ],
      gallery: [],
    },
  },
  {
    slug: "specialties",
    title: "Speciality Services",
    summary: `Beyond traditional asphalt, we create custom concrete installations like seat wall planters, trash enclosures, and decorative stamped concrete. We also specialize in engineered civil work for parks and schools — including athletic fields, basketball and tennis courts, and recreational walking paths.`,
    serviceType: "Speciality Services",
    url: "https://northlake-construction.com/services/specialties",
    card: {
      image: {
        src: "/images/street-restoration.webp",
        alt: "A custom concrete specialty project.",
      },
    },
    detail: {
      hero: {
        src: "/images/street-restoration.webp",
        alt: "A custom concrete specialty project.",
      },
      sections: [
        {
          heading: "Custom Concrete Solutions",
          body: `We build landscape architectural concrete installations tailored to your site,
            from seat wall planters and trash enclosures to decorative stamped concrete that
            adds visual appeal and functionality to any project.`,
        },
        {
          heading: "Athletic & Recreation Facilities",
          body: `We handle engineered civil work for parks and schools, including properly drained
            athletic fields, basketball courts, tennis courts, and recreational walking paths.
            Each surface is built to withstand heavy use while maintaining proper drainage and safety standards.`,
        },
      ],
      gallery: [],
    },
  },
  
  {
    slug: "stone",
    title: "Stone Installation and Grading",
    summary: `We install and fine-grade aggregate base to specification, ensuring accurate
      elevations, proper drainage, and strong load-bearing support — giving our customers a
      reliable base built to minimize future failure.`,
    serviceType: "Stone Installation and Grading",
    url: "https://northlake-construction.com/services/stone",
    card: {
      image: {
        src: "/images/stonegrading.webp",
        alt: "Aggregate base being graded and compacted at a job site.",
      },
    },
    detail: {
      hero: {
        src: "/images/stonegrading.webp",
        alt: "Aggregate base being graded and compacted at a job site.",
      },
      sections: [
        {
          heading: "The Right Base",
          body: `A properly installed aggregate base is critical to pavement longevity.
            We fine-grade to specification, accounting for drainage, load requirements,
            and the final surface elevation.`,
        },
        {
          heading: "Minimizing Future Failure",
          body: `Cutting corners on base preparation is the leading cause of premature
            pavement failure. We build it right the first time so our customers don't
            pay for it twice.`,
        },
      ],
      gallery: [],
    },
  },
  {
    slug: "demolition",
    title: "Demolition and Excavation",
    summary: `We remove existing asphalt, concrete, and unsuitable subgrade materials
      while maintaining proper elevations and site integrity.`,
    serviceType: "Demolition and Excavation",
    url: "https://northlake-construction.com/services/demolition",
    card: {
      image: {
        src: "/images/demolition.webp",
        alt: "Excavation equipment breaking up an old concrete surface.",
      },
    },
    detail: {
      hero: {
        src: "/images/demolition.webp",
        alt: "Excavation equipment breaking up an old concrete surface.",
      },
      sections: [
        {
          heading: "Full Removal Services",
          body: `We remove asphalt, concrete, and unsuitable subgrade material — hauling
            everything off site and leaving a clean, stable surface ready for reconstruction.`,
        },
        {
          heading: "Site Integrity",
          body: `Our crews work carefully around utilities, drainage structures, and adjacent
            surfaces to maintain site elevations and avoid damage to surrounding infrastructure.`,
        },
      ],
      gallery: [],
    },
  },
  {
    slug: "concrete",
    title: "Concrete Flat Work",
    summary: `We specialize in sidewalks, curb and gutter, pads, and other site concrete
      installations. With a focus on durability, ADA compliance, and proper drainage, we
      provide customers with dependable long-term solutions.`,
    serviceType: "Concrete Flat Work",
    url: "https://northlake-construction.com/services/concrete",
    card: {
      image: {
        src: "/images/driveway.webp",
        alt: "Freshly poured concrete sidewalk with clean edging.",
      },
    },
    detail: {
      hero: {
        src: "/images/driveway.webp",
        alt: "Freshly poured concrete sidewalk with clean edging.",
      },
      sections: [
        {
          heading: "Sidewalks, Curbs, and Pads",
          body: `We pour and finish sidewalks, curb and gutter, equipment pads, and other
            site concrete to specification — with proper slope, jointing, and surface texture.`,
        },
        {
          heading: "ADA Compliance",
          body: `All pedestrian concrete work is installed to current ADA accessibility
            standards, including detectable warning surfaces at curb ramps.`,
        },
      ],
      gallery: [],
    },
  },
]
