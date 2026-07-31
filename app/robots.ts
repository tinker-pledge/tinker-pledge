import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/palette",
    },
    sitemap: "https://tinkerpledge.org/sitemap.xml",
  }
}
