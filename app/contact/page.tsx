import { ArrowUpRight, Mail, Mic2, UsersRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Contact | The Tinker Pledge",
  description: "Get in touch about the podcast, public workshops, or bringing a workshop to your team.",
  path: "/contact",
})

const TEAM_EMAIL = "hello@tinkerpledge.org"

const contactHref = (subject: string) => `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(subject)}`

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary">Contact</p>
            </div>
            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-balance text-[clamp(3.5rem,7.5vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-foreground">
                Start with what you want to make possible.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Questions, invitations, and early ideas are welcome. Write to the Tinker Pledge team and we will make
                sure your note reaches the right person.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button
                  render={<a href={contactHref("Tinker Pledge inquiry")} />}
                  nativeButton={false}
                  size="lg"
                  className="h-12 rounded-full px-7"
                >
                  <Mail className="size-4" />
                  Start an email
                </Button>
                <a
                  href={contactHref("Tinker Pledge inquiry")}
                  className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
                >
                  {TEAM_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Choose a starting point</p>
              <h2 className="mt-5 max-w-sm text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                A little context helps us answer well.
              </h2>
            </div>

            <div className="border-y border-border lg:col-span-8">
              <article id="podcast" className="scroll-mt-20 py-9 sm:py-10">
                <div className="grid gap-6 sm:grid-cols-[3rem_1fr] sm:gap-8">
                  <span className="flex size-12 items-center justify-center border border-border bg-background text-primary">
                    <Mic2 className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Podcast</p>
                    <h3 className="mt-3 max-w-xl text-balance text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-3xl">
                      Share what happened after your first try.
                    </h3>
                    <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      Eva is looking for honest conversations about what worked, what failed, and what changed. You do
                      not need a polished success story.
                    </p>
                    <Button
                      render={<a href={contactHref("Tinker Pledge podcast")} />}
                      nativeButton={false}
                      size="lg"
                      variant="outline"
                      className="mt-7 h-11 rounded-full px-6"
                    >
                      Talk with us about the podcast
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </article>

              <article id="workshops" className="scroll-mt-20 border-t border-border py-9 sm:py-10">
                <div className="grid gap-6 sm:grid-cols-[3rem_1fr] sm:gap-8">
                  <span className="flex size-12 items-center justify-center border border-border bg-background text-primary">
                    <UsersRound className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Workshops</p>
                    <h3 className="mt-3 max-w-xl text-balance text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-3xl">
                      Shape a practical session around your team.
                    </h3>
                    <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      Tell us who will be in the room, what they are trying to move forward, and where they could use
                      hands-on support.
                    </p>
                    <Button
                      render={<a href={contactHref("Workshop for our team")} />}
                      nativeButton={false}
                      size="lg"
                      variant="outline"
                      className="mt-7 h-11 rounded-full px-6"
                    >
                      Ask about a team workshop
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
