import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToolsSection } from "@/components/tools-section"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "How It Works | The Tinker Pledge",
  description:
    "Budget guidance, starter tools, rollout steps, and guardrails for launching a personal AI budget at work.",
  path: "/how-it-works",
})

const budgetNotes = [
  {
    title: "Pick a simple monthly amount",
    body: "Start with a number your company can explain in one sentence. It can be small; the point is repeated personal use, not a flashy perk.",
  },
  {
    title: "Use lightweight reimbursement",
    body: "Treat it like a recurring benefit with a simple reimbursement path and a curated starter list. Keep exceptions possible, but make the default easy.",
  },
  {
    title: "Offer it broadly",
    body: "AI fluency is not only for technical teams. The benefit is strongest when operations, recruiting, design, sales, support, and leadership all get reps.",
  },
]

const guardrails = [
  {
    title: "Keep company data out",
    body: "Make the boundary explicit: personal tools are for personal use, public information, and low-risk experimentation unless a tool is approved for company data.",
  },
  {
    title: "Do not turn it into surveillance",
    body: "No usage reports, prompt reviews, or productivity scorekeeping. The company funds fluency; people keep their private life private.",
  },
  {
    title: "Check payroll and tax treatment",
    body: "Review the benefit with your finance or payroll partner before launch. Different companies and locations may need different handling.",
  },
]

const rollout = [
  {
    step: "01",
    title: "Name the budget and owner",
    body: "Choose a monthly amount, decide who owns reimbursement, and write the one-paragraph policy.",
  },
  {
    step: "02",
    title: "Publish the tool list and boundaries",
    body: "Share the starter list, what the budget is for, what data is off-limits, and where to ask questions if someone wants to use something else.",
  },
  {
    step: "03",
    title: "Launch without a mandatory class",
    body: "Offer examples and optional office hours, but let people start with their own lives. That is where the reps come from.",
  },
  {
    step: "04",
    title: "Review the signal quarterly",
    body: "Look for adoption, stories, support needs, and policy confusion. Adjust the budget or guidance without adding bureaucracy.",
  },
]

const audiences = [
  {
    title: "People teams",
    body: "Position it as a trust-forward learning benefit that reaches the whole person, not a narrow productivity mandate.",
  },
  {
    title: "Finance",
    body: "Keep the spend capped per person and review it quarterly. The upside comes from voluntary use, not a large platform commitment.",
  },
  {
    title: "Security",
    body: "Separate personal experimentation from company-data workflows. Clear boundaries matter more than pretending people will not experiment.",
  },
]

export default function HowItWorksPage() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary">How it works</p>
              <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.5rem,7.5vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-foreground">
                A personal AI budget, with enough structure to launch safely.
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                The Tinker Pledge should feel simple to employees and legible to the people approving it. Set the budget,
                define the boundaries, and keep the policy light enough that curiosity still does the work.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:items-start">
                <Button render={<a href="/proposal" />} nativeButton={false} size="lg" className="rounded-full px-7">
                  Generate your proposal
                </Button>
                <Button render={<a href="/pledge" />} nativeButton={false} size="lg" variant="outline" className="rounded-full px-7">
                  Read the pledge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">01 · Budget design</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Make the benefit easy to understand.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                The best version is boring to administer and generous in spirit. People should know what they can spend,
                how they get reimbursed, and what is outside the line.
              </p>
            </div>
          </div>
          <div className="mt-9 grid border-t border-border md:grid-cols-3">
            {budgetNotes.map((item, index) => (
              <article key={item.title} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-medium tracking-[-0.02em] text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="border-b border-background/18 px-5 py-16 sm:px-8 sm:py-20 lg:border-b-0 lg:border-r lg:px-10 lg:py-24">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">02 · Guardrails</p>
            <h2 className="mt-7 max-w-xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              Give freedom without making the policy vague.
            </h2>
          </div>
          <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="divide-y divide-background/18 border-y border-background/18">
              {guardrails.map((item, index) => (
                <article key={item.title} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium text-background">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-background/65">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ToolsSection />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">04 · Rollout</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Launch it in weeks, then improve it from signal.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Avoid turning the launch into a platform selection project. Start with a clear budget and policy, then
                adjust once people show you what they actually use.
              </p>
            </div>
          </div>
          <ol className="mt-12 divide-y divide-border border-y border-border bg-card">
            {rollout.map((item) => (
              <li key={item.step} className="grid gap-5 p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
                <span className="font-mono text-xs text-primary lg:col-span-1">{item.step}</span>
                <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground lg:col-span-4">{item.title}</h3>
                <p className="max-w-2xl leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">05 · Reviewer guidance</p>
              <h2 className="mt-7 max-w-xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Frame it differently for each reviewer.
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                The same pledge has different approval questions. Answer those directly instead of making every reviewer
                infer the part they care about.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid border-t border-border md:grid-cols-3">
                {audiences.map((item, index) => (
                  <article key={item.title} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    <h3 className="mt-10 text-xl font-medium tracking-[-0.02em] text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:items-end lg:px-10">
          <div className="lg:col-span-8">
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              Ready to turn this into the first internal note?
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Use the proposal generator to turn these choices into something a manager, People lead, or finance partner
              can react to.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button render={<a href="/proposal" />} nativeButton={false} size="lg" variant="secondary" className="h-12 rounded-full px-7">
              Generate your proposal
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
