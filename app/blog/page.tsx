import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { AuthorByline } from '@/components/blog/author-byline'
import { NewsletterSignup } from '@/components/blog/newsletter-signup'
import { getAllPosts } from '@/lib/blog/posts'
import { DEFAULT_OG_IMAGE } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Blog | The Tinker Pledge',
  description:
    'Writing about personal AI budgets, building fluency through low-stakes use, and what changes when people are free to experiment.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    siteName: 'The Tinker Pledge',
    url: '/blog',
    title: 'Blog | The Tinker Pledge',
    description:
      'Writing about personal AI budgets, building fluency through low-stakes use, and what changes when people are free to experiment.',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | The Tinker Pledge',
    description: 'Writing about personal AI budgets and building fluency through low-stakes use.',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="tinker-container tinker-section">
          <header className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <span className="h-0.5 w-10 bg-[var(--route-blog-accessory)]" />
                <p className="tinker-eyebrow text-[var(--route-blog-accessory)]">
                  Field notes · Next morning
                </p>
              </div>
              <p className="mt-8 max-w-xs text-pretty text-lg leading-relaxed text-muted-foreground">
                What we are learning about practice, access, and the people trying these tools for themselves.
              </p>
            </div>

            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-balance text-[clamp(3.2rem,6.5vw,6.4rem)] font-light leading-[0.93] tracking-[-0.05em] text-foreground">
                Notes from the pledge.
              </h1>
            </div>
          </header>

          {posts.length === 0 ? (
            <p className="mt-16 border-y border-border py-8 leading-relaxed text-muted-foreground">
              Nothing published yet. The first post is on its way.
            </p>
          ) : (
            <ul className="mt-16 border-y border-border sm:mt-24">
              {posts.map((post) => (
                <li key={post.slug}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="tinker-list-row group gap-5 py-8 sm:py-10 lg:grid-cols-12 lg:gap-8"
                  >
                    <div className="lg:col-span-7">
                      <h2 className="flex items-start gap-3 text-2xl font-light tracking-[-0.025em] text-foreground sm:text-3xl">
                        <span>
                          {post.title}
                        </span>
                        <ArrowRight className="tinker-list-row__arrow mt-1.5 size-4 shrink-0" strokeWidth={1.75} />
                      </h2>
                      <AuthorByline authors={post.authors} publishedAt={post.publishedAt} className="mt-3" />
                    </div>
                    <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9">
                      {post.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <NewsletterSignup className="mt-16" />

          <p className="mt-12 text-sm text-muted-foreground">
            {'Prefer a reader? '}
            <a
              href="/feed.xml"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Subscribe via RSS
            </a>
            {'.'}
          </p>
        </div>
      </section>
    </main>
  )
}
