const steps = [
  {
    number: "01",
    title: "Set a budget that fits your company",
    body: "Pick an amount that makes sense for your size and locality, then add it quietly alongside payroll or as a simple reimbursement. No approvals, no chasing receipts for a small subscription.",
  },
  {
    number: "02",
    title: "They choose what actually helps",
    body: "A writing assistant, a research tool, a coding copilot, a tool for learning a language at night. The same tools they'd pick for themselves.",
  },
  {
    number: "03",
    title: "The benefit follows the human",
    body: "It works for the developer, the designer, the recruiter, and the parent planning dinner after a long day. Everyone, not just the technical few.",
  },
]

export function HowSection() {
  return (
    <section id="how">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">How it works</p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
              Simple enough to launch this quarter.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              No new platform to buy. No long rollout. Just a small, trusting gesture that people will feel right away.
            </p>
          </div>

          <ol className="flex flex-col gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-6 bg-card p-8">
                <span className="font-serif text-2xl text-primary">{step.number}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
