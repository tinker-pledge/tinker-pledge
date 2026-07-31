import type { MetadataRoute } from 'next'
import { authorIds } from '@/content/authors'
import { getAllPosts, getPostsByAuthor } from '@/lib/blog/posts'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const latest = posts[0]?.updatedAt ?? posts[0]?.publishedAt

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/how-it-works'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/manifesto'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/proposal'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/blog'), lastModified: latest, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const authorRoutes: MetadataRoute.Sitemap = authorIds.map((id) => {
    const theirs = getPostsByAuthor(id)
    return {
      url: absoluteUrl(`/authors/${id}`),
      lastModified: theirs[0]?.updatedAt ?? theirs[0]?.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  })

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...authorRoutes, ...postRoutes]
}
