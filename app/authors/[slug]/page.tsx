import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { authorIds, getAuthor, isAuthorId } from '@/content/authors'
import { getPostsByAuthor } from '@/lib/blog/posts'
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
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">{author.role}</p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            {author.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{author.bio}</p>

          {links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map(([key, href]) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {LINK_LABELS[key] ?? key}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <h2 className="mt-16 font-serif text-2xl font-light text-foreground">
            {posts.length === 1 ? '1 post' : `${posts.length} posts`}
          </h2>

          {posts.length === 0 ? (
            <p className="mt-4 leading-relaxed text-muted-foreground">Nothing published yet.</p>
          ) : (
            <ul className="mt-6 flex flex-col gap-7">
              {posts.map((post) => (
                <li key={post.slug} className="rounded-2xl border border-border/70 bg-card p-7">
                  <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <h3 className="mt-2 font-serif text-xl text-foreground">
                    <a
                      href={`/blog/${post.slug}`}
                      className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{post.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  )
}
