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
    title: "Choose a clear monthly allowance",
    body: "Set a per-person cap that fits your budget and explain it plainly. The goal is repeated personal practice, not an attention-grabbing perk.",
  },
  {
    icon: Receipt,
    title: "Keep reimbursement lightweight",
    body: "Use a simple reimbursement process and make a curated starter list the default. Name an owner who can review requests for other tools.",
  },
  {
    icon: Users,
    title: "Offer the benefit broadly",
    body: "Make the benefit available to operations, recruiting, design, sales, support, and leadership — not only technical teams.",
  },
]

const guardrails = [
  {
    icon: LockKeyhole,
    title: "Keep company data out",
    body: "Personal tools are for personal practice and public information. Unless a tool is explicitly approved, employees should never enter company, customer, or other confidential data.",
  },
  {
    icon: ShieldCheck,
    title: "Protect employee privacy",
    body: "Do not require usage reports, review prompts, or score individual productivity. The company funds the benefit; employees keep their personal use private.",
  },
  {
    icon: Scale,
    title: "Confirm payroll and tax treatment",
    body: "Review the benefit with your finance or payroll partner before launch. Different companies and locations may need different handling.",
  },
]

const rollout = [
  {
    step: "01",
    title: "Choose the budget and owner",
    body: "Set the monthly allowance, assign responsibility for reimbursement and tool requests, and draft a concise policy.",
  },
  {
    step: "02",
    title: "Publish the tool list and boundaries",
    body: "Share what the budget covers, which tools are on the starter list, what data is off-limits, and where employees can ask questions.",
  },
  {
    step: "03",
    title: "Offer support without a mandate",
    body: "Provide examples and optional office hours, then let people begin with uses that matter to them. Voluntary practice is the point.",
  },
  {
    step: "04",
    title: "Review and refine quarterly",
    body: "Review participation, questions, and policy gaps without monitoring anyone's personal use. Adjust the budget or guidance as needed.",
  },
]

const audiences = [
  {
    title: "People teams",
    body: "Frame it as a trust-based learning benefit for the whole workforce, not a narrow productivity mandate.",
  },
  {
    title: "Finance",
    body: "Use a fixed per-person cap and review the program quarterly. The proposal does not require a company-wide platform commitment.",
  },
  {
    title: "Security",
    body: "Keep personal experimentation separate from company-data workflows. Explicit rules and a clear escalation path make that boundary easier to follow.",
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
              Launch a personal AI budget with clear, practical guardrails.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              The Tinker Pledge should be easy for employees to use and straightforward for reviewers to approve.
              Choose a budget, define the boundaries, and keep the process light enough for curiosity to do the work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button render={<a href="/proposal" />} nativeButton={false} size="lg" className="rounded-full px-7">
                Draft a proposal
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
                Design a benefit people can understand.
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                A clear policy answers three questions: what is covered, how reimbursement works, and which uses fall
                outside the policy.
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
              Protect privacy and company data.
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
                Launch with a clear default, then refine it.
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Do not turn the launch into a platform-selection project. Start with a clear budget, policy, and tool
                list, then adjust as participation and questions reveal what people need.
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
              Address each reviewer&apos;s priorities.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              A single proposal will prompt different questions. Make the budget, process, privacy boundary, and owner
              explicit so each reviewer can evaluate the details that matter to them.
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
            Ready to draft the internal proposal?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Use the proposal generator to create an editable draft for a manager, People lead, finance partner, or
            security reviewer.
          </p>
          <Button render={<a href="/proposal" />} nativeButton={false} size="lg" className="mt-8 rounded-full px-7">
            Draft a proposal
          </Button>
        </div>
      </section>
    </main>
  )
}
