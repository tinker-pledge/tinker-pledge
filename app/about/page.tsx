import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { authorIds, getAuthor, type AuthorLinks } from "@/content/authors"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "About | The Tinker Pledge",
  description: "Why Eva and Abhi built The Tinker Pledge.",
  path: "/about",
})

const creators = authorIds.map(getAuthor)

const externalProfileLabels = {
  website: "Website",
  x: "X",
  github: "GitHub",
  linkedin: "LinkedIn",
} satisfies Record<keyof AuthorLinks, string>

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="tinker-container tinker-route-intro">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="tinker-eyebrow">Why we built it</p>
            </div>

            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-balance text-[clamp(3.4rem,7vw,6.8rem)] font-light leading-[0.9] tracking-[-0.05em] text-foreground">
                AI makes more sense when it is in your hands.
              </h1>
              <div className="mt-9 max-w-3xl space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                <p>
                  The public story around AI can feel far removed from what the tools can actually do in people&apos;s
                  hands. Eva and Abhi started The Tinker Pledge to help close that distance through practical, shared
                  experimentation.
                </p>
                <p>
                  The first way we tried to close it was a hands-on workshop in New York. People brought real problems,
                  tried AI loops together, and showed us where the teaching held up and where it needed to change.
                </p>
              </div>
              <Button
                render={<a href="/blog/teaching-ai-loops-to-non-engineers" />}
                nativeButton={false}
                size="lg"
                className="mt-9 h-12 rounded-full px-7"
              >
                Read how it started
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/45">
        <div className="tinker-container tinker-section">
          <header className="grid gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-balance text-3xl font-light leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
                Built because we needed it.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Eva and Abhi co-created The Tinker Pledge. The introductions below and their published writing carry the
                fuller account of the work each brings to it.
              </p>
            </div>
          </header>

          <div className="mt-14 grid border-y border-border md:grid-cols-2 sm:mt-18">
            {creators.map((creator) => {
              const externalLinks = Object.entries(creator.links).filter(([, href]) => Boolean(href)) as [
                keyof AuthorLinks,
                string,
              ][]

              return (
                <article
                  key={creator.id}
                  id={creator.id}
                  className="scroll-mt-24 border-b border-border py-10 last:border-b-0 md:border-b-0 md:first:border-r md:first:pr-8 md:last:pl-8 lg:first:pr-12 lg:last:pl-12"
                >
                  <p className="tinker-meta-label text-primary">{creator.role}</p>
                  <h3 className="mt-6 text-4xl font-light tracking-[-0.04em] text-foreground sm:text-5xl">
                    {creator.name}
                  </h3>
                  <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{creator.bio}</p>

                  {externalLinks.length > 0 && (
                    <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      {externalLinks.map(([key, href]) => (
                        <li key={key}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${externalProfileLabels[key]} for ${creator.name} (opens in a new tab)`}
                            className="inline-flex items-center gap-1.5 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                          >
                            {externalProfileLabels[key]}
                            <ExternalLink className="size-3.5" aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
