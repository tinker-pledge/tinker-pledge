import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="tinker-container pb-0 pt-14 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 className="max-w-5xl text-balance text-[clamp(3.5rem,8vw,7.6rem)] font-light leading-[0.88] tracking-[-0.055em] text-foreground">
              Start with the work in front of you.
            </h1>
          </div>
        </div>

        <nav aria-label="Explore the project" className="mt-16 border-t border-border sm:mt-24 lg:mt-28">
          <div className="grid md:grid-cols-3">
            <a
              href="#workshop"
              className="tinker-state-surface group grid min-h-32 grid-cols-[1fr_auto] items-start gap-3 border-b border-border py-6 md:min-h-40 md:grid-cols-1 md:border-b-0 md:border-r md:px-6 md:first:pl-0"
            >
              <span>
                <span className="block text-lg font-medium tracking-tight text-[var(--route-workshop-accessory-ink)]">Workshop</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Bring one real task. Leave knowing how to build the thing that runs the next hundred.
                </span>
              </span>
              <ArrowRight className="mt-1 size-4 text-muted-foreground md:hidden" />
            </a>
            <a
              href="/pledge"
              className="tinker-state-surface group grid min-h-32 grid-cols-[1fr_auto] items-start gap-3 border-b border-border py-6 md:min-h-40 md:grid-cols-1 md:border-b-0 md:border-r md:px-6"
            >
              <span>
                <span className="block text-lg font-medium tracking-tight text-[var(--route-pledge-accessory-ink)]">The pledge</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Give everyone a budget to tinker with AI. We wrote the proposal for you.
                </span>
              </span>
              <ArrowRight className="mt-1 size-4 text-muted-foreground md:hidden" />
            </a>
            <a
              href="/podcast"
              className="tinker-state-surface group grid min-h-32 grid-cols-[1fr_auto] items-start gap-3 py-6 md:min-h-40 md:grid-cols-1 md:px-6 md:last:pr-0"
            >
              <span>
                <span className="block text-lg font-medium tracking-tight text-[var(--route-podcast-accessory-ink)]">Podcast</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  One person outside tech shares what they doubted, what surprised them, and what they&apos;d change.
                </span>
              </span>
              <ArrowRight className="mt-1 size-4 text-muted-foreground md:hidden" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  )
}
