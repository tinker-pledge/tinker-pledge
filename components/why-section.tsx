import { Clock, HeartHandshake, Sprout } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Time, given back",
    body: "The boring parts of a day — drafting, summarizing, planning, untangling — quietly add up. The right tools hand those hours back, so people spend more of their day on the work only they can do.",
  },
  {
    icon: Sprout,
    title: "Room to grow",
    body: "When people are free to experiment with AI on their own terms, they learn faster and bring those skills back to the team. Curiosity becomes a habit, not a training module.",
  },
  {
    icon: HeartHandshake,
    title: "A signal of trust",
    body: "A no-strings stipend says something simple and warm: we trust you to choose what helps you do your best work. That trust is felt long after the money is spent.",
  },
]

export function WhySection() {
  return (
    <section id="why" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Why it matters</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
            It&apos;s less about the tools. It&apos;s about the people using them.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A $200 monthly stipend is small on a spreadsheet and enormous in a workday. Here&apos;s what it really buys.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-8 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(120,80,50,0.4)]"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <r.icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-serif text-xl text-foreground">{r.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
