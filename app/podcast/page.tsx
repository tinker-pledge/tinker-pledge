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
      <section className="bg-[oklch(0.205_0.028_330)] text-[oklch(0.96_0.014_60)]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[oklch(0.74_0.13_31)]">03</span>
                <span className="h-px w-10 bg-white/20" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">Podcast · In development</p>
              </div>
              <h1 className="mt-9 max-w-5xl text-balance text-[clamp(3.5rem,7.5vw,7.2rem)] font-medium leading-[0.89] tracking-[-0.065em]">
                Conversations after the first try.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/65 sm:text-xl">
                Eva will sit down with people who are teaching, adopting, questioning, and building with AI.
                The point is not to smooth out the uncertainty. It is to make it discussable.
              </p>
            </div>

            <aside className="border border-white/18 bg-white/[0.035] lg:col-span-5">
              <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/50">Production brief</p>
                <span className="inline-flex items-center gap-2 text-xs text-white/60">
                  <span className="size-2 rounded-full bg-[oklch(0.74_0.13_31)]" />
                  Early work
                </span>
              </div>
              <dl className="divide-y divide-white/15 px-6">
                <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/40">Host</dt>
                  <dd className="text-sm leading-relaxed text-white/80">Eva</dd>
                </div>
                <div className="grid grid-cols-[5rem_1fr] gap-5 py-5">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/40">Subject</dt>
                  <dd className="text-sm leading-relaxed text-white/80">
                    The lived experience of trying AI, not another tour of the launch cycle.
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

          <div className="mt-20 border-t border-white/18 pt-10 lg:mt-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">The working question list</p>
            <ol className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {questions.map((question, index) => (
                <li key={question} className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr] sm:items-start">
                  <span className="font-mono text-xs text-[oklch(0.74_0.13_31)]">0{index + 1}</span>
                  <p className="max-w-4xl text-balance text-2xl leading-snug tracking-[-0.025em] text-white/85 sm:text-3xl">
                    {question}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Hosted by Eva</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
              A community builder who knows how to keep the room open.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Eva is a community builder who brings people together around emerging technology. She will host the
              show and shape conversations about what people learn by trying AI in real life.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                render={<a href="/contact#podcast" />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-full px-7"
              >
                Talk with us about the podcast
                <ArrowRight className="size-4" />
              </Button>
              <a
                href="/about#eva"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
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
