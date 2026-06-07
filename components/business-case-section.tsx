import { Clock, GraduationCap, Magnet, ShieldCheck } from "lucide-react"

const points = [
  {
    icon: Clock,
    stat: "Time back",
    label: "Routine drafting, summarizing, and research are the first places people find leverage — time redirected to work only your people can do.",
  },
  {
    icon: GraduationCap,
    stat: "Org-wide AI literacy",
    label: "Personal use builds the fluency no training budget can buy. The skills come back to the team for free.",
  },
  {
    icon: Magnet,
    stat: "Retention & hiring",
    label: "A benefit people actually feel every day. It signals a company that invests in its people, not just its tooling.",
  },
  {
    icon: ShieldCheck,
    stat: "A budget you control",
    label: "Set it to fit your size and locality, scale it up or down anytime, and roll it out in a day — no multi-quarter procurement cycle.",
  },
]

export function BusinessCaseSection() {
  return (
    <section id="case">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">For the spreadsheet</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
            And yes — the business case holds up too.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We led with people on purpose. But if you need to take this to finance, the logic holds up at any budget you
            choose — the value scales with how much people use it, not with what you spend.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.stat}
              className="flex gap-5 rounded-3xl border border-border/70 bg-card p-8"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary">
                <p.icon className="size-6" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-2xl font-light text-foreground">{p.stat}</p>
                <p className="leading-relaxed text-muted-foreground">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border/70 bg-secondary/50 p-8 text-center sm:p-10">
          <p className="text-pretty font-serif text-xl font-light leading-relaxed text-foreground sm:text-2xl">
            &ldquo;If even one hour each week goes back to meaningful work — or back home to someone&apos;s evening — the
            benefit has already paid for itself.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
