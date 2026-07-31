import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AuthorByline } from '@/components/blog/author-byline'
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
      url: absoluteUrl(`/authors/${a.id}`),
    })),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
    keywords: post.tags.length > 0 ? post.tags.join(', ') : undefined,
  }

  return (
    <main id="main-content">
      {/* Native <script>, not next/script — JSON-LD is data, not executable code. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <article className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Blog</p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <AuthorByline
            authors={post.authors}
            publishedAt={post.publishedAt}
            updatedAt={post.updatedAt}
            className="mt-6"
          />
          <div className="prose-tinker mt-12" dangerouslySetInnerHTML={{ __html: post.html }} />
          <p className="mt-16 border-t border-border/60 pt-8 text-sm">
            <a
              href="/blog"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              &larr; All posts
            </a>
          </p>
        </div>
      </article>
    </main>
  )
}
