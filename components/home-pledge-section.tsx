import { ArrowRight, LockKeyhole } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomePledgeSection() {
  return (
    <section id="pledge" className="scroll-mt-20 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary">02</span>
              <span className="h-px w-10 bg-border" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The pledge</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-balance text-[clamp(2.8rem,6vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-foreground">
              Give people a small personal AI budget. Let them learn what the tools are for.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid border-t border-border pt-10 lg:mt-24 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="lg:col-span-7">
            <p className="max-w-3xl text-pretty text-2xl leading-snug tracking-[-0.025em] text-foreground sm:text-3xl">
              The home computer arrived with no curriculum. People wrote letters they could fix without retyping the
              page, and budgets that redid themselves when one number changed. This ordinary access is how computer
              fluency spread.
            </p>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              The Tinker Pledge asks employers to reimburse the AI tools people use in their own life, the way
              they&apos;d reimburse a phone bill. People who are free to experiment, experiment more.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="/manifesto" />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-full px-7"
              >
                Read the one-page pledge
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
              <Button
                render={<a href="/proposal" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7"
              >
                Take it to your employer
              </Button>
            </div>
          </div>

          <aside className="mt-12 border-t-4 border-primary bg-card p-6 sm:p-8 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <LockKeyhole className="size-6 text-primary" strokeWidth={1.7} />
            <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">One clear boundary</p>
            <p className="mt-4 text-xl font-medium leading-snug tracking-[-0.02em] text-foreground">
              Personal tools are for personal practice.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Company data stays out of personal tools unless the company has explicitly approved those tools and
              that use.
            </p>
            <a
              href="/how-it-works"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
            >
              See the practical guide
              <ArrowRight className="size-4" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
