import type { Metadata } from 'next'
import { AuthorByline } from '@/components/blog/author-byline'
import { getAllPosts } from '@/lib/blog/posts'

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
    <main id="main-content">
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Blog</p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Notes from the pledge
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            What we&rsquo;re learning about giving people the freedom to tinker &mdash; budgets, guardrails,
            and the fluency that comes back to work.
          </p>

          {posts.length === 0 ? (
            <p className="mt-12 leading-relaxed text-muted-foreground">
              Nothing published yet. The first post is on its way.
            </p>
          ) : (
            <ul className="mt-12 flex flex-col gap-7">
              {posts.map((post) => (
                <li key={post.slug} className="rounded-2xl border border-border/70 bg-card p-7">
                  <h2 className="font-serif text-xl text-foreground">
                    <a
                      href={`/blog/${post.slug}`}
                      className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <AuthorByline authors={post.authors} publishedAt={post.publishedAt} className="mt-2" />
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{post.description}</p>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-12 text-sm text-muted-foreground">
            {'Prefer a reader? '}
            <a
              href="/feed.xml"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
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
