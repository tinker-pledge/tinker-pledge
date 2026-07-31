import { Clock, GraduationCap, Magnet, ShieldCheck } from "lucide-react"

const points = [
  {
    icon: Clock,
    stat: "More opportunities to practice",
    label: "A personal budget supports repeated, voluntary use — something a one-time workshop cannot provide on its own.",
  },
  {
    icon: GraduationCap,
    stat: "Broader AI fluency",
    label: "The benefit reaches every function, not only employees whose roles already include approved AI tools.",
  },
  {
    icon: Magnet,
    stat: "A people-first signal",
    label: "The policy shows that the company invests in people as learners, not only in the tools assigned to their jobs.",
  },
  {
    icon: ShieldCheck,
    stat: "Predictable spend",
    label: "A per-person cap and curated starter list keep costs and boundaries clear. Review the program quarterly and adjust as needed.",
  },
]

export function BusinessCaseSection() {
  return (
    <section id="case">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">The business case</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
            A practical case for a modest investment.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            This is a learning bet, not a guaranteed return-on-investment calculation. The case is straightforward:
            give more people more opportunities to practice, keep the cost bounded, and learn from what they use.
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
            The first goal is not an instant productivity metric. It is sustained, voluntary practice — and the
            judgment people develop by using the tools for themselves.
          </p>
        </div>
      </div>
    </section>
  )
}
