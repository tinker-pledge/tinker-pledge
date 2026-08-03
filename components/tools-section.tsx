import { ToolsBrowser } from "@/components/tools-browser"

const principles = [
  {
    number: "01",
    title: "Familiar first",
    body: "Start with names people recognize.",
  },
  {
    number: "02",
    title: "Employee-led additions",
    body: "Let usage show what belongs next.",
  },
  {
    number: "03",
    title: "Clear data boundary",
    body: "Personal tools stay for personal practice.",
  },
  {
    number: "04",
    title: "Review quarterly",
    body: "Keep the budget stable while the list evolves.",
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="border-b border-border bg-background">
      <div className="tinker-container tinker-section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="tinker-step-label">03 · Starter tools</p>
            <p className="mt-4 max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">
              Keep the page compact and the policy flexible. The catalog is a launch default people can browse, search,
              and improve over time.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-3xl text-balance text-3xl font-light leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
              A browsable list, not a giant directory.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid border-t border-border md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article key={principle.title} className="border-b border-border py-8 md:border-r md:px-7 md:odd:pl-0 md:even:border-r-0 lg:border-b-0 lg:odd:pl-7 lg:even:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <span className="tinker-sequence">{principle.number}</span>
              <h3 className="mt-8 font-normal text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10 sm:mt-20 sm:pt-12">
          <ToolsBrowser />
        </div>
      </div>
    </section>
  )
}
