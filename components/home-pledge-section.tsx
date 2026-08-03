import { ArrowRight, LockKeyhole } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomePledgeSection() {
  return (
    <section id="pledge" className="relative scroll-mt-20 border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-[image:var(--gradient-pledge-horizon)]"
      />
      <div className="tinker-container tinker-route-immersive">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-12">
            <p className="tinker-eyebrow text-[var(--route-pledge-accessory-ink)]">Pledge</p>
          </div>

          <div className="lg:col-span-12">
            <h2 className="text-balance text-[clamp(2.8rem,6vw,5.8rem)] font-light leading-[0.95] tracking-[-0.05em] text-foreground">
              Give people a small personal AI budget. Let them learn what the tools are for.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid border-t border-border pt-10 lg:mt-24 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="lg:col-span-7">
            <p className="max-w-3xl text-pretty text-2xl leading-snug tracking-[-0.025em] text-foreground sm:text-3xl">
              People learned personal computers by using them in everyday life. AI fluency is built the same way.
            </p>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              The Tinker Pledge asks employers to reimburse the AI tools people use in their own life, the way
              they&apos;d reimburse a phone bill. People who are free to experiment, experiment more.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="/pledge" />}
                nativeButton={false}
                size="lg"
                variant="ink"
                className="h-12 rounded-full px-7"
              >
                Read the one-page pledge
                <ArrowRight className="size-4" />
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

          <aside className="tinker-card mt-12 border border-border-card bg-card p-6 sm:p-8 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <LockKeyhole className="size-6 text-primary" strokeWidth={1.7} />
            <p className="tinker-eyebrow mt-8">One clear boundary</p>
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
