import { ImageResponse } from 'next/og'
import { getPost, getPostSlugs } from '@/lib/blog/posts'
import { formatPostDate } from '@/lib/site'
import { OG_COLORS, OG_SIZE, loadFraunces } from '@/lib/og'

export const alt = 'A post on The Tinker Pledge'
export const size = OG_SIZE
export const contentType = 'image/png'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

/**
 * Satori has no text-fitting, so a long title at a fixed size runs off the bottom
 * of the 630px frame. Step the size down by length instead. Thresholds are measured
 * against the frame at padding 80, where ~30 characters fill a line at 62px.
 */
function titleFontSize(title: string): number {
  if (title.length > 90) return 40
  if (title.length > 60) return 48
  if (title.length > 40) return 54
  return 62
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  const fraunces = await loadFraunces(300)

  const byline = post
    ? `${post.authors.map((a) => a.name).join(' & ')} · ${formatPostDate(post.publishedAt)}`
    : 'tinkerpledge.org'
  const title = post?.title ?? 'The Tinker Pledge'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: OG_COLORS.background,
          padding: 80,
          fontFamily: 'Fraunces',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, color: OG_COLORS.primary }}>
          THE TINKER PLEDGE
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: titleFontSize(title),
            lineHeight: 1.15,
            color: OG_COLORS.foreground,
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: OG_COLORS.muted }}>{byline}</div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Fraunces', data: fraunces, style: 'normal', weight: 300 }] },
  )
}
