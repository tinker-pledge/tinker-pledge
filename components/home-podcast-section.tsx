import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const questions = [
  "What became useful only after you tried it more than once?",
  "Where did the tool fail you?",
  "What changed in the way you work or live?",
]

export function HomePodcastSection() {
  return (
    <section id="podcast" className="scroll-mt-20 bg-[oklch(0.205_0.028_330)] text-[oklch(0.96_0.014_60)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[oklch(0.74_0.13_31)]">03</span>
              <span className="h-px w-10 bg-white/20" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">Share your lessons</p>
            </div>
            <h2 className="mt-9 max-w-4xl text-balance text-[clamp(3rem,6.5vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              What did you try—and what happened next?
            </h2>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/65 sm:text-xl">
              You already have the story. Someone still at the point where you started is listening for it. We want
              to hear what you doubted, what surprised you, and what you&apos;d change if you started over.
            </p>
          </div>

          <aside className="border border-white/18 bg-white/[0.035] lg:col-span-5">
            <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/50">Production note 00</p>
              <span className="inline-flex items-center gap-2 text-xs text-white/60">
                <span className="size-2 rounded-full bg-[oklch(0.74_0.13_31)]" />
                In development
              </span>
            </div>
            <dl className="divide-y divide-white/15 px-6">
              <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/40">Host</dt>
                <dd className="text-sm leading-relaxed text-white/80">Eva</dd>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/40">Format</dt>
                <dd className="text-sm leading-relaxed text-white/80">
                  Unhurried conversations with people trying, building, teaching, and questioning.
                </dd>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/40">Release</dt>
                <dd className="text-sm leading-relaxed text-white/80">
                  After the first conversations have been recorded and are ready to share.
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-16 grid border-t border-white/18 pt-10 lg:mt-24 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45 lg:col-span-3">
            Questions worth sharing
          </p>
          <ol className="mt-8 divide-y divide-white/15 border-y border-white/15 lg:col-span-6 lg:mt-0">
            {questions.map((question, index) => (
              <li key={question} className="grid grid-cols-[2rem_1fr] gap-4 py-6">
                <span className="font-mono text-xs text-[oklch(0.74_0.13_31)]">0{index + 1}</span>
                <p className="text-lg leading-snug tracking-[-0.015em] text-white/85">{question}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col items-start lg:col-span-3 lg:mt-0 lg:pl-6">
            <Button
              render={<a href="/podcast" />}
              nativeButton={false}
              size="lg"
              className="h-12 rounded-full bg-[oklch(0.74_0.13_31)] px-7 text-[oklch(0.205_0.028_330)] hover:bg-[oklch(0.8_0.1_31)]"
            >
              About the podcast
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </Button>
            <a
              href="/contact#podcast"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/65 underline decoration-white/25 underline-offset-4 hover:text-white"
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
