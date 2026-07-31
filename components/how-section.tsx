import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Choose a budget and a clear default",
    body: "Set an amount that fits your company and location, then reimburse personal subscriptions from a curated starter list.",
  },
  {
    number: "02",
    title: "People choose what fits their lives",
    body: "A writing assistant, a research tool, a coding copilot, or help learning a language. Start with familiar options, then expand the list as people find what works.",
  },
  {
    number: "03",
    title: "Make it available across the company",
    body: "Offer the same opportunity to developers, designers, recruiters, operators, and everyone else — not only the most technical teams.",
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
              A lightweight benefit with clear boundaries.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              No new platform or lengthy rollout. Start with a straightforward reimbursement policy, a curated tool
              list, and a clear rule for company data.
            </p>
            <Button
              render={<a href="/how-it-works" />}
              nativeButton={false}
              variant="outline"
              className="mt-7 rounded-full"
            >
              Explore the rollout guide
            </Button>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The guide includes a searchable starter list with familiar tools such as ChatGPT, Claude, Gemini,
              Perplexity, Cursor, GitHub Copilot, v0, and creative AI apps.
            </p>
            <a
              href="/how-it-works#tools"
              className="mt-3 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View starter tools
            </a>
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
