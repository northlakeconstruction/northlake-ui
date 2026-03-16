import { services } from "@/content/services"
import { featuredProjects } from "@/content/projects"

/**
 * Top-level navigation structure.
 *
 * The Services submenu is derived automatically from content/services/index.ts —
 * adding or removing a service there will update the nav without any changes here.
 *
 * Featured Projects is hidden automatically when featuredProjects is empty.
 */
export const sitemap = [
  {
    name: "Services",
    link: "/services",
    subCategory: services.map(s => ({
      name: s.title,
      link: `/services/${s.slug}`,
    })),
  },
  ...(featuredProjects.length > 0 ? [{
    name: "Featured Projects",
    link: "/projects",
    subCategory: featuredProjects.map(p => ({
      name: p.byline.split("—")[0].trim(),
      link: p.detailLink,
    })),
  }] : []),
  {
    name: "About",
    link: "/about",
    subCategory: [
      {
        name: "Our Founder",
        link: "/about/team/ricky",
      },
      {
        name: "Our Certifications",
        link: "/about/certifications",
      },
      {
        name: "Where We Work",
        link: "/about/territory",
      },
    ],
  },
]
