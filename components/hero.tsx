import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 pb-0 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary">
              A community project about learning by doing
            </p>
            <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.5rem,8vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.065em] text-foreground">
              Start with the work in front of you.
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The tools keep changing. Practice is what sticks. We help people begin, keep going, and compare notes.
            </p>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
              Led by{" "}
              <a
                href="https://shrekoverflow.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
              >
                Abhi
              </a>
              {", who worked on AI agent identity and security as a product architect at Auth0, and "}
              <a
                href="https://evadora.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
              >
                Eva
              </a>
              {", who works in developer relations at Vapi."}
            </p>
          </div>
        </div>

        <nav aria-label="Explore the project" className="mt-16 border-t border-border sm:mt-24 lg:mt-28">
          <div className="grid md:grid-cols-3">
            <a
              href="#workshop"
              className="group grid min-h-32 grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-border py-6 transition-colors hover:bg-card md:min-h-40 md:grid-cols-[2.5rem_1fr] md:border-b-0 md:border-r md:px-6 md:first:pl-0"
            >
              <span className="font-mono text-xs text-primary">01</span>
              <span>
                <span className="block text-lg font-medium tracking-tight text-foreground">Workshop</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Bring one real problem.
                </span>
              </span>
              <ArrowDown className="mt-1 size-4 text-muted-foreground transition-transform group-hover:translate-y-1 md:hidden" />
            </a>
            <a
              href="#pledge"
              className="group grid min-h-32 grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-border py-6 transition-colors hover:bg-card md:min-h-40 md:grid-cols-[2.5rem_1fr] md:border-b-0 md:border-r md:px-6"
            >
              <span className="font-mono text-xs text-primary">02</span>
              <span>
                <span className="block text-lg font-medium tracking-tight text-foreground">The pledge</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Keep the tools in reach.
                </span>
              </span>
              <ArrowDown className="mt-1 size-4 text-muted-foreground transition-transform group-hover:translate-y-1 md:hidden" />
            </a>
            <a
              href="#podcast"
              className="group grid min-h-32 grid-cols-[2.5rem_1fr_auto] items-start gap-3 py-6 transition-colors hover:bg-card md:min-h-40 md:grid-cols-[2.5rem_1fr] md:px-6 md:last:pr-0"
            >
              <span className="font-mono text-xs text-primary">03</span>
              <span>
                <span className="block text-lg font-medium tracking-tight text-foreground">Podcast</span>
                <span className="mt-2 block max-w-52 text-sm leading-relaxed text-muted-foreground">
                  Hear how other people are learning.
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
