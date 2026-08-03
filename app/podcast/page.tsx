import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Podcast — Coming Soon | The Tinker Pledge",
  description:
    "A forthcoming podcast hosted by Eva about how people are actually living, learning, and working with AI.",
  path: "/podcast",
})

const questions = [
  "What did you try before you knew whether it would work?",
  "What became useful only after repetition?",
  "Where did the tool make the work worse?",
  "What do you understand now that you could not get from a demo?",
]

export default function PodcastPage() {
  return (
    <main>
      <section className="surface-dark surface-podcast bg-[var(--palette-night-water)] text-[var(--palette-night-paper)]">
        <div className="tinker-container tinker-route-immersive">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="tinker-sequence text-[var(--palette-night-quiet)]">03</span>
                <span className="h-0.5 w-10 bg-[var(--route-podcast-accessory)]" />
                <p className="tinker-eyebrow text-[var(--route-podcast-accessory)]">Podcast</p>
              </div>
              <h1 className="mt-9 max-w-5xl text-balance text-[clamp(3.5rem,7.5vw,7.2rem)] font-light leading-[0.89] tracking-[-0.055em]">
                Conversations after the first try.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--palette-night-muted)] sm:text-xl">
                Each episode, Eva will talk with someone outside tech who tried AI in their own life. Some kept going,
                some went back to doing it by hand. Listen to their journey and see what you can bring to your own.
              </p>
            </div>

            <aside className="tinker-card overflow-hidden border border-border-card bg-[var(--palette-night-card)] lg:col-span-5">
              <div className="flex items-center justify-between border-b border-border-card px-6 py-4">
                <p className="tinker-meta-label text-[var(--palette-night-quiet)]">
                  Production brief
                </p>
                <span className="tinker-badge tinker-badge--progress">
                  <span aria-hidden="true" className="tinker-badge__dot" />
                  Under Production
                </span>
              </div>
              <dl className="divide-y divide-border-card px-6">
                <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                  <dt className="tinker-meta-label text-[var(--palette-night-quiet)]">
                    Host
                  </dt>
                  <dd className="text-sm leading-relaxed text-[var(--palette-night-muted)]">Eva</dd>
                </div>
                <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                  <dt className="tinker-meta-label text-[var(--palette-night-quiet)]">
                    Subject
                  </dt>
                  <dd className="text-sm leading-relaxed text-[var(--palette-night-muted)]">
                    The lived experience of trying AI, not another tour of the launch cycle.
                  </dd>
                </div>
                <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                  <dt className="tinker-meta-label text-[var(--palette-night-quiet)]">
                    Release
                  </dt>
                  <dd className="text-sm leading-relaxed text-[var(--palette-night-muted)]">
                    After the first conversations have been recorded and are ready to share.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="mt-20 border-t border-[var(--palette-night-border)] pt-10 lg:mt-28">
            <p className="tinker-eyebrow text-[var(--palette-night-quiet)]">
              The working question list
            </p>
            <ol className="mt-8 divide-y divide-[var(--palette-night-border)] border-y border-[var(--palette-night-border)]">
              {questions.map((question, index) => (
                <li key={question} className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr] sm:items-start">
                  <span className="tinker-sequence text-[var(--palette-night-quiet)]">0{index + 1}</span>
                  <p className="max-w-4xl text-balance text-2xl leading-snug tracking-[-0.025em] text-[var(--palette-night-paper)] sm:text-3xl">
                    {question}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="surface-dark surface-podcast border-t border-[var(--palette-night-border)] bg-[var(--palette-night-water)] text-[var(--palette-night-paper)]">
        <div className="tinker-container tinker-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="tinker-eyebrow text-[var(--palette-night-quiet)]">Hosted by Eva</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="max-w-3xl text-balance text-3xl font-light leading-tight tracking-[-0.035em] text-[var(--palette-night-paper)] sm:text-4xl">
              A host who started with the same questions you have.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--palette-night-muted)]">
              Eva went to her first hackathon in high school without knowing how to code. She kept showing up, started
              a media and technology company, and built a career around helping people meet technology that&apos;s new
              to them. On this show, she&apos;s keen to learn about your journey: what you doubted, what surprised you,
              and what you&apos;d change if you started over.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                render={<a href="/contact#podcast" />}
                nativeButton={false}
                size="lg"
                variant="paper"
                className="h-12 rounded-full px-7"
              >
                Talk with us about the podcast
                <ArrowRight className="size-4" />
              </Button>
              <a
                href="/about#eva"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--palette-night-muted)] underline decoration-[var(--palette-night-border)] underline-offset-4 hover:text-[var(--palette-night-paper)]"
              >
                About Eva
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
