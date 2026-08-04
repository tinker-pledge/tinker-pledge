import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const questions = [
  "What became useful only after you tried it more than once?",
  "Where did the tool fail you?",
  "What changed in the way you work or live?",
]

export function HomePodcastSection() {
  return (
    <section
      id="podcast"
      className="surface-dark surface-podcast scroll-mt-20 bg-[var(--palette-night-water)] text-[var(--palette-night-paper)]"
    >
      <div className="tinker-container tinker-route-immersive">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="tinker-eyebrow text-[var(--route-podcast-accessory)]">Podcast</p>
            <h2 className="mt-9 max-w-4xl text-balance text-[clamp(3rem,6.5vw,6.5rem)] font-light leading-[0.92] tracking-[-0.05em]">
              What did you try? What happened next?
            </h2>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--palette-night-muted)] sm:text-xl">
              You already have the story. Someone still at the point where you started is listening for it. We want
              to hear what you doubted, what surprised you, and what you&apos;d change if you started over.
            </p>
          </div>

          <aside className="tinker-card overflow-hidden border border-border-card bg-[var(--palette-night-card)] lg:col-span-5">
            <div className="flex items-center justify-between border-b border-border-card px-6 py-4">
              <p className="tinker-meta-label text-[var(--palette-night-quiet)]">
                Production note 00
              </p>
              <span className="tinker-badge tinker-badge--progress">
                <span aria-hidden="true" className="tinker-badge__dot" />
                Under production
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
                  Format
                </dt>
                <dd className="text-sm leading-relaxed text-[var(--palette-night-muted)]">
                  Unhurried conversations with people trying, building, teaching, and questioning.
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

        <div className="mt-16 grid border-t border-[var(--palette-night-border)] pt-10 lg:mt-24 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <p className="tinker-eyebrow text-[var(--palette-night-quiet)] lg:col-span-3 lg:flex lg:h-12 lg:items-center lg:self-start">
            Questions worth sharing
          </p>
          <ol className="mt-8 divide-y divide-[var(--palette-night-border)] border-y border-[var(--palette-night-border)] lg:col-span-6 lg:mt-0">
            {questions.map((question, index) => (
              <li key={question} className="grid grid-cols-[2rem_1fr] gap-4 py-6">
                <span className="tinker-sequence text-[var(--palette-night-quiet)]">0{index + 1}</span>
                <p className="text-lg leading-snug tracking-[-0.015em] text-[var(--palette-night-paper)]">
                  {question}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col items-start lg:col-span-3 lg:mt-0 lg:pl-6">
            <Button
              render={<a href="/podcast" />}
              nativeButton={false}
              variant="paper"
              size="lg"
              className="h-12 rounded-full px-7"
            >
              About the podcast
              <ArrowRight className="size-4" />
            </Button>
            <a
              href="/contact#podcast"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--palette-night-muted)] underline decoration-[var(--palette-night-border)] underline-offset-4 hover:text-[var(--palette-night-paper)]"
            >
              Talk with us about the podcast
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
