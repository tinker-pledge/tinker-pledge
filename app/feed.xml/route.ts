import { getAllPosts } from '@/lib/blog/posts'
import { SITE_NAME, absoluteUrl } from '@/lib/site'

export const dynamic = 'force-static'

const FEED_DESCRIPTION =
  'Writing about personal AI budgets, building fluency through low-stakes use, and what changes when people are free to experiment.'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function rfc822(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toUTCString()
}

export function GET() {
  const posts = getAllPosts()
  const self = absoluteUrl('/feed.xml')

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`)
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${rfc822(post.publishedAt)}</pubDate>
      <description>${escapeXml(post.description)}</description>
${post.authors.map((a) => `      <dc:creator>${escapeXml(a.name)}</dc:creator>`).join('\n')}
${post.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join('\n')}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${escapeXml(absoluteUrl('/blog'))}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="${escapeXml(self)}" rel="self" type="application/rss+xml" />
${posts[0] ? `    <lastBuildDate>${rfc822(posts[0].updatedAt ?? posts[0].publishedAt)}</lastBuildDate>` : ''}
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
