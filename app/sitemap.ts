import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog/posts"
import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const latest = posts[0]?.updatedAt ?? posts[0]?.publishedAt

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/workshops"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/workplace"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/pledge"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/podcast"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/how-it-works"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/proposal"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: latest, changeFrequency: "weekly", priority: 0.9 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "yearly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}
