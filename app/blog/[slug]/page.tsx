import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AuthorByline } from '@/components/blog/author-byline'
import { NewsletterSignup } from '@/components/blog/newsletter-signup'
import { getPost, getPostSlugs } from '@/lib/blog/posts'
import { SITE_NAME, absoluteUrl } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

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
        <header className="tinker-container tinker-section grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="h-0.5 w-10 bg-[var(--route-blog-accessory)]" />
              <a
                href="/blog"
                className="tinker-eyebrow text-[var(--route-blog-accessory)] transition-colors hover:text-foreground"
              >
                04 / Field notes
              </a>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h1 className="max-w-5xl text-balance text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.95] tracking-[-0.05em] text-foreground">
              {post.title}
            </h1>
            <AuthorByline
              authors={post.authors}
              publishedAt={post.publishedAt}
              updatedAt={post.updatedAt}
              className="mt-8"
            />
          </div>
        </header>

        <div className="border-t border-border">
          <div className="tinker-container grid py-16 sm:py-20 lg:grid-cols-12">
            <div
              className="prose-tinker tinker-blog-reading-measure lg:col-span-8 lg:col-start-5"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="tinker-reading-measure lg:col-span-8 lg:col-start-5">
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
      </article>
    </main>
  )
}
