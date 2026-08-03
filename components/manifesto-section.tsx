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
    body: "Personal tools are for personal practice unless an employer explicitly approves them for company information.",
  },
]

export function ManifestoSection() {
  function handlePrint() {
    window.print()
  }

  return (
    <section id="manifesto" className="relative border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-[image:var(--gradient-pledge-horizon)]"
      />
      <div className="tinker-container tinker-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-12">
            <p className="tinker-eyebrow text-[var(--route-pledge-accessory-ink)]">
              The pledge
            </p>
            <h1 className="mt-8 text-balance text-[clamp(3.2rem,6.5vw,6.4rem)] font-light leading-[0.93] tracking-[-0.05em] text-foreground">
              Give people enough room to try again.
            </h1>
          </div>
        </div>

        <article className="tinker-card mt-16 overflow-hidden border border-border-card bg-card sm:mt-24">
          <header className="border-b border-border-card p-7 sm:p-10 lg:p-12">
            <p className="max-w-4xl text-balance text-2xl font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-3xl">
              Give your team access to AI at work and in their own life. Experimentation builds fluency.
            </p>
          </header>

          <div className="divide-y divide-border-card">
            {principles.map((principle, index) => (
              <div key={principle.title} className="grid gap-5 p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
                <span className="tinker-sequence lg:col-span-1">0{index + 1}</span>
                <h2 className="text-xl font-normal tracking-[-0.02em] text-foreground lg:col-span-4">
                  {principle.title}
                </h2>
                <p className="max-w-2xl leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>

          <footer className="border-t border-border-card px-7 py-6 sm:px-10 lg:px-12">
            <p className="text-sm text-muted-foreground">
              Give people a reason to try, and enough access to try again.
            </p>
          </footer>
        </article>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row print:hidden">
          <Button type="button" size="lg" variant="ink" className="h-12 rounded-full px-7" onClick={handlePrint}>
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
