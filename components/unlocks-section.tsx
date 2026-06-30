import { BookOpen, Compass, Languages, PenLine, Receipt, Sparkles } from "lucide-react"

const unlocks = [
  {
    icon: Languages,
    title: "Learn the language before the trip",
    body: "Practice conversations at the kitchen table, no class, no pressure — just a patient tutor that never gets tired of the same question.",
  },
  {
    icon: Receipt,
    title: "Finally understand the taxes",
    body: "Ask the dumb questions out loud. Get plain answers. Walk into the year feeling a little more in control of the boring, important stuff.",
  },
  {
    icon: PenLine,
    title: "Write the hard message",
    body: "The condolence note, the tricky email, the toast for a friend's wedding. A gentle second pair of eyes when the words won't come.",
  },
  {
    icon: BookOpen,
    title: "Help with the homework",
    body: "Explain fractions a third way. Turn a history chapter into a quiz. Be the study partner a parent wishes they had time to be.",
  },
  {
    icon: Compass,
    title: "Plan the weekend",
    body: "Meals for the week, a road trip route, a budget that actually holds. The small logistics of a life, made lighter.",
  },
  {
    icon: Sparkles,
    title: "Chase a random curiosity",
    body: "How do plants drink? What's a good cheap telescope? The questions that have no work value at all — and build fluency anyway.",
  },
]

export function UnlocksSection() {
  return (
    <section id="unlocks">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">What it unlocks</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
            Forget work for a second. Look at what it does for a life.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Give people room to use AI for the things they actually care about, and something quiet happens: they get
            good at it. Not because anyone told them to — because it was useful to them first.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {unlocks.map((u) => (
            <div
              key={u.title}
              className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-8 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(63,38,36,0.38)]"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <u.icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-serif text-xl text-foreground">{u.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
