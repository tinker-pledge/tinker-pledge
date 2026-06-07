import { Lightbulb, ShieldCheck, Sparkles, Users } from "lucide-react"
import { ToolsBrowser } from "@/components/tools-browser"

const principles = [
  {
    icon: Sparkles,
    title: "Familiar first",
    body: "Start with names people recognize.",
  },
  {
    icon: Users,
    title: "Employee-led additions",
    body: "Let usage show what belongs next.",
  },
  {
    icon: ShieldCheck,
    title: "Clear data boundary",
    body: "Personal tools stay for personal practice.",
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Starter tools</p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
              A browsable list, not a giant directory.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Keep the page compact and the policy flexible. The catalog is a launch default people can browse, search,
              and improve over time.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.title} className="flex gap-3 rounded-2xl border border-border/70 bg-background p-5">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <principle.icon className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{principle.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border/70 bg-background p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Lightbulb className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-medium text-foreground">Review quarterly</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    Keep the budget stable while the list evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ToolsBrowser />
          </div>
        </div>
      </div>
    </section>
  )
}
