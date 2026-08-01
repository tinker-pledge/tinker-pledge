import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 pb-0 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 className="max-w-5xl text-balance text-[clamp(3.5rem,8vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.065em] text-foreground">
              Start with the work in front of you.
            </h1>
          </div>
        </div>

        <nav aria-label="Explore the project" className="mt-16 border-t border-border sm:mt-24 lg:mt-28">
          <div className="grid md:grid-cols-3">
            <a
              href="#workshop"
              className="group grid min-h-32 grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-border py-6 transition-colors hover:bg-card md:min-h-40 md:grid-cols-[2.5rem_1fr] md:border-b-0 md:border-r md:px-6 md:first:pl-0"
            >
              <span className="mt-1 font-mono text-xs text-primary">01</span>
              <span>
                <span className="block text-lg font-medium tracking-tight text-foreground">Workshop</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Bring one real task. Leave knowing how to build the thing that runs the next hundred.
                </span>
              </span>
              <ArrowDown className="mt-1 size-4 text-muted-foreground transition-transform group-hover:translate-y-1 md:hidden" />
            </a>
            <a
              href="#pledge"
              className="group grid min-h-32 grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-border py-6 transition-colors hover:bg-card md:min-h-40 md:grid-cols-[2.5rem_1fr] md:border-b-0 md:border-r md:px-6"
            >
              <span className="mt-1 font-mono text-xs text-primary">02</span>
              <span>
                <span className="block text-lg font-medium tracking-tight text-foreground">The pledge</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Give everyone a budget to tinker with AI. We wrote the proposal for you.
                </span>
              </span>
              <ArrowDown className="mt-1 size-4 text-muted-foreground transition-transform group-hover:translate-y-1 md:hidden" />
            </a>
            <a
              href="#podcast"
              className="group grid min-h-32 grid-cols-[2.5rem_1fr_auto] items-start gap-3 py-6 transition-colors hover:bg-card md:min-h-40 md:grid-cols-[2.5rem_1fr] md:px-6 md:last:pr-0"
            >
              <span className="mt-1 font-mono text-xs text-primary">03</span>
              <span>
                <span className="block text-lg font-medium tracking-tight text-foreground">Podcast</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Every episode, one person outside tech tells the whole story. What they doubted, what surprised them,
                  what they&apos;d change if they started over.
                </span>
              </span>
              <ArrowDown className="mt-1 size-4 text-muted-foreground transition-transform group-hover:translate-y-1 md:hidden" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  )
}
