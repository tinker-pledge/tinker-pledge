import {
  CalendarDays,
  CircleDollarSign,
  ClipboardCheck,
  LockKeyhole,
  Receipt,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react"
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
    icon: CircleDollarSign,
    title: "Pick a simple monthly amount",
    body: "Start with a number your company can explain in one sentence. It can be small; the point is repeated personal use, not a flashy perk.",
  },
  {
    icon: Receipt,
    title: "Use lightweight reimbursement",
    body: "Treat it like a recurring benefit with a simple reimbursement path and a curated starter list. Keep exceptions possible, but make the default easy.",
  },
  {
    icon: Users,
    title: "Offer it broadly",
    body: "AI fluency is not only for technical teams. The benefit is strongest when operations, recruiting, design, sales, support, and leadership all get reps.",
  },
]

const guardrails = [
  {
    icon: LockKeyhole,
    title: "Keep company data out",
    body: "Make the boundary explicit: personal tools are for personal use, public information, and low-risk experimentation unless a tool is approved for company data.",
  },
  {
    icon: ShieldCheck,
    title: "Do not turn it into surveillance",
    body: "No usage reports, prompt reviews, or productivity scorekeeping. The company funds fluency; people keep their private life private.",
  },
  {
    icon: Scale,
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
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">How it works</p>
            <h1 className="mt-4 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
              A personal AI budget, with enough structure to launch safely.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              The Tinker Pledge should feel simple to employees and legible to the people approving it. Set the budget,
              define the boundaries, and keep the policy light enough that curiosity still does the work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button render={<a href="/proposal" />} nativeButton={false} size="lg" className="rounded-full px-7">
                Generate your proposal
              </Button>
              <Button
                render={<a href="/manifesto" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full px-7"
              >
                Read the pledge
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Budget design</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
                Make the benefit easy to understand.
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                The best version is boring to administer and generous in spirit. People should know what they can spend,
                how they get reimbursed, and what is outside the line.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {budgetNotes.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/70 bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <item.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Guardrails</p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
              Give freedom without making the policy vague.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {guardrails.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/70 bg-background p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToolsSection />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Rollout</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
                Launch it in weeks, then improve it from signal.
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Avoid turning the launch into a platform selection project. Start with a clear budget and policy, then
                adjust once people show you what they actually use.
              </p>
            </div>

            <ol className="flex flex-col gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70">
              {rollout.map((item) => (
                <li key={item.step} className="flex gap-6 bg-card p-7">
                  <span className="font-serif text-2xl text-primary">{item.step}</span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/15">
              <ClipboardCheck className="size-6" strokeWidth={1.75} />
            </span>
            <h2 className="mt-5 text-balance font-serif text-3xl font-light leading-tight sm:text-4xl">
              Frame it differently for each reviewer.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              The same pledge has different approval questions. Answer those directly instead of making every reviewer
              infer the part they care about.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6"
              >
                <h3 className="font-serif text-xl text-primary-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <CalendarDays className="mx-auto size-9 text-primary" strokeWidth={1.75} />
          <h2 className="mt-5 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
            Ready to turn this into the first internal note?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Use the proposal generator to turn these choices into something a manager, People lead, or finance partner
            can react to.
          </p>
          <Button render={<a href="/proposal" />} nativeButton={false} size="lg" className="mt-8 rounded-full px-7">
            Generate your proposal
          </Button>
        </div>
      </section>
    </main>
  )
}
