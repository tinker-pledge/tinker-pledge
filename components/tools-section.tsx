import { Lightbulb, ShieldCheck, Sparkles, Users } from "lucide-react"
import { ToolsBrowser } from "@/components/tools-browser"

const principles = [
  {
    icon: Sparkles,
    title: "Familiar tools first",
    body: "Give people an approachable place to begin.",
  },
  {
    icon: Users,
    title: "A path for requests",
    body: "Let employees suggest additions as needs emerge.",
  },
  {
    icon: ShieldCheck,
    title: "A firm data boundary",
    body: "Company data stays out unless a tool is explicitly approved.",
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
              Start with a focused, familiar set of tools.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              A curated list gives employees a clear starting point without turning the policy into a fixed catalog.
              Keep it searchable, invite requests, and review it over time.
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
                  <h3 className="font-medium text-foreground">Review regularly</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    Update the list as tools and needs change.
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
