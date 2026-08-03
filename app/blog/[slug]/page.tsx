import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AuthorByline } from '@/components/blog/author-byline'
import { NewsletterSignup } from '@/components/blog/newsletter-signup'
import { getPost, getPostSlugs } from '@/lib/blog/posts'
import { SITE_NAME, absoluteUrl } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

function getTableOfContents(html: string) {
  return [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map(([, id, contents]) => ({
    id,
    title: contents
      .replace(/<[^>]+>/g, '')
      .replace(/^#/, '')
      .replace(/&amp;/g, '&')
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>'),
  }))
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  const url = `/blog/${post.slug}`
  // Metadata merging is shallow — declaring openGraph replaces the root's object
  // entirely, so siteName and type have to be spelled out here.
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: SITE_NAME,
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.authors.map((a) => a.name),
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()
  const tableOfContents = getTableOfContents(post.html)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(`/blog/${post.slug}`) },
    image: [absoluteUrl(`/blog/${post.slug}/opengraph-image`)],
    author: post.authors.map((a) => ({
      '@type': 'Person',
      name: a.name,
    })),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
    keywords: post.tags.length > 0 ? post.tags.join(', ') : undefined,
  }

  return (
    <main>
      {/* Native <script>, not next/script — JSON-LD is data, not executable code. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <article className="border-b border-border bg-background">
        <header className="tinker-container tinker-section">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-10 bg-[var(--route-blog-accessory)]" />
            <a
              href="/blog"
              className="tinker-eyebrow text-[var(--route-blog-accessory)] transition-colors hover:text-foreground"
            >
              Blog
            </a>
          </div>
          <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.95] tracking-[-0.05em] text-foreground">
            {post.title}
          </h1>
          <AuthorByline
            authors={post.authors}
            publishedAt={post.publishedAt}
            updatedAt={post.updatedAt}
            className="mt-8"
          />
        </header>

        <div className="border-t border-border">
          <div className="tinker-container grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
            {tableOfContents.length > 0 && (
              <aside className="self-start lg:sticky lg:top-28 lg:col-span-3">
                <nav aria-label="Table of contents" className="border-l-2 border-[var(--route-blog-accessory)] pl-5">
                  <p className="tinker-meta-label text-[var(--route-blog-accessory)]">On this page</p>
                  <ol className="mt-5 space-y-3 text-sm leading-snug text-muted-foreground">
                    {tableOfContents.map((heading) => (
                      <li key={heading.id}>
                        <a className="transition-colors hover:text-foreground" href={`#${heading.id}`}>
                          {heading.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            )}
            <div className="lg:col-span-8 lg:col-start-5">
              <div
                className="prose-tinker tinker-blog-reading-measure"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div className="tinker-reading-measure">
                <NewsletterSignup className="mt-16" />
                <p className="mt-12 border-t border-border pt-8 text-sm">
                  <a
                    href="/blog"
                    className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    &larr; All posts
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
