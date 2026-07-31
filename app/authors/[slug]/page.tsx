import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { authorIds, getAuthor, isAuthorId } from '@/content/authors'
import { getPostsByAuthor } from '@/lib/blog/posts'
import { DEFAULT_OG_IMAGE } from '@/lib/og'
import { SITE_NAME, absoluteUrl, formatPostDate } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

const LINK_LABELS: Record<string, string> = {
  x: 'X',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  website: 'Website',
}

export function generateStaticParams() {
  // Next 16 with cacheComponents requires at least one entry. The registry always has two.
  return authorIds.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!isAuthorId(slug)) return {}
  const author = getAuthor(slug)

  const title = `${author.name} | ${SITE_NAME}`
  const url = `/authors/${author.id}`
  return {
    title,
    description: `${author.name} — ${author.role}. Posts on The Tinker Pledge.`,
    alternates: { canonical: url },
    openGraph: {
      type: 'profile',
      siteName: SITE_NAME,
      url,
      title,
      description: `${author.name} — ${author.role}.`,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title, description: `${author.name} — ${author.role}.` },
  }
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params
  if (!isAuthorId(slug)) notFound()

  const author = getAuthor(slug)
  const posts = getPostsByAuthor(slug)
  const links = Object.entries(author.links).filter(([, href]) => Boolean(href)) as [string, string][]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: absoluteUrl(`/authors/${author.id}`),
    sameAs: links.map(([, href]) => href),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <header className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{author.role}</p>

              {links.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {links.map(([key, href]) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                      >
                        {LINK_LABELS[key] ?? key}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="lg:col-span-8">
              <h1 className="text-balance text-[clamp(3.2rem,6.5vw,6.4rem)] font-medium leading-[0.93] tracking-[-0.06em] text-foreground">
                {author.name}
              </h1>
              <p className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {author.bio}
              </p>
            </div>
          </header>

          <h2 className="mt-16 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:mt-24">
            {posts.length === 1 ? '1 post' : `${posts.length} posts`}
          </h2>

          {posts.length === 0 ? (
            <p className="mt-4 leading-relaxed text-muted-foreground">Nothing published yet.</p>
          ) : (
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {posts.map((post) => (
                <li key={post.slug} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-8">
                  <time dateTime={post.publishedAt} className="font-mono text-xs text-muted-foreground lg:col-span-3">
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <div className="lg:col-span-8">
                    <h3 className="text-2xl font-medium tracking-[-0.025em] text-foreground">
                      <a
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  )
}
