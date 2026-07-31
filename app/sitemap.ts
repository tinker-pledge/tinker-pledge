import type { MetadataRoute } from "next"

const publicRoutes = [
  "",
  "/manifesto",
  "/workshops",
  "/workplace",
  "/podcast",
  "/how-it-works",
  "/proposal",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: `https://tinkerpledge.org${path}`,
  }))
}
