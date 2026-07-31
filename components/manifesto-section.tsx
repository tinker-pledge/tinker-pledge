"use client"

import { Button } from "@/components/ui/button"

const principles = [
  {
    title: "Practice is where fluency comes from",
    body: "A demo can show what a tool does. Repeated use on real tasks teaches judgement: what to ask, what to doubt, and when to stop.",
  },
  {
    title: "Personal problems are a useful starting point",
    body: "A language class, travel plan, household project, or side interest creates a reason to come back without involving company data.",
  },
  {
    title: "Access makes repetition possible",
    body: "A modest reimbursement keeps the tools close enough for people to try again after the first workshop.",
  },
  {
    title: "The boundary stays clear",
    body: "Personal tools are for personal practice. Company, customer, and other confidential information stays out unless an employer explicitly approves the tool and the use.",
  },
]

export function ManifestoSection() {
  function handlePrint() {
    window.print()
  }

  return (
    <section id="manifesto" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary">02</span>
              <span className="h-px w-10 bg-border" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The pledge</p>
            </div>
            <p className="mt-8 max-w-xs text-pretty text-lg leading-relaxed text-muted-foreground">
              The workshop creates a first try. This is the case for keeping the tools in reach afterward.
            </p>
          </div>

          <div className="lg:col-span-8">
            <h1 className="max-w-4xl text-balance text-[clamp(3.2rem,6.5vw,6.4rem)] font-medium leading-[0.93] tracking-[-0.06em] text-foreground">
              Give people enough room to try again.
            </h1>
          </div>
        </div>

        <article className="mt-16 border-y border-border bg-card sm:mt-24">
          <header className="grid gap-8 border-b border-border p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-3">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">A pledge to tinker</p>
            </div>
            <p className="max-w-4xl text-balance text-2xl font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-3xl lg:col-span-8">
              We give our people a personal AI budget for tools they use in their own lives, so they can build fluency
              through repeated, low-stakes practice.
            </p>
          </header>

          <div className="divide-y divide-border">
            {principles.map((principle, index) => (
              <div key={principle.title} className="grid gap-5 p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
                <span className="font-mono text-xs text-primary lg:col-span-1">0{index + 1}</span>
                <h2 className="text-xl font-medium tracking-[-0.02em] text-foreground lg:col-span-4">
                  {principle.title}
                </h2>
                <p className="max-w-2xl leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>

          <footer className="border-t border-border px-7 py-6 sm:px-10 lg:px-12">
            <p className="text-sm text-muted-foreground">
              Give people a reason to try, and enough access to try again.
            </p>
          </footer>
        </article>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row print:hidden">
          <Button type="button" size="lg" className="h-12 rounded-full px-7" onClick={handlePrint}>
            Print or save as PDF
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="h-12 rounded-full px-7"
            render={<a href="/how-it-works" />}
            nativeButton={false}
          >
            See the practical guide
          </Button>
        </div>
      </div>
    </section>
  )
}
