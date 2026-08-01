import { ArrowRight, CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "AI Workshops for Teams | The Tinker Pledge",
  description:
    "Bring a practical hands-on AI workshop to your small or midsize business.",
  path: "/workplace",
})

const sessionPoints = [
  "A short orientation to the current tools and the limits worth knowing",
  "Hands-on time with a real problem or workflow from each participant",
  "Help choosing an approach, shaping the ask, and checking the result",
  "A shared conversation about useful guardrails and company-data boundaries",
  "A reusable workflow people can keep improving after the session",
]

const principles = [
  {
    number: "01",
    title: "Start with the work",
    body: "Participants arrive with something real to move forward, not a generic productivity exercise.",
  },
  {
    number: "02",
    title: "Practice safely",
    body: "The room begins with clear boundaries for company information and unapproved tools.",
  },
  {
    number: "03",
    title: "Keep the group small",
    body: "The format leaves enough time for people to work and get help when the process breaks down.",
  },
]

export default function WorkplacePage() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary">
                Workshop · Private sessions
              </p>
              <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.5rem,7.5vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-foreground">
                Shape the room around your team.
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Bring the problems already on your team&apos;s plate. We&apos;ll help people work through them with AI,
                side by side.
              </p>
              <Button
                render={<a href="/contact#workshops" />}
                nativeButton={false}
                size="lg"
                className="mt-8 h-12 w-fit rounded-full px-7"
              >
                Tell us about your team
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="border-b border-background/18 px-5 py-16 sm:px-8 sm:py-20 lg:border-b-0 lg:border-r lg:px-10 lg:py-24">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">What it is</p>
            <p className="mt-7 max-w-xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              A teaching engagement built around real work.
            </p>
            <p className="mt-6 max-w-lg leading-relaxed text-background/65">
              We listen to what people are trying to do, help them choose and use the tools, and make space to question
              the output.
            </p>
          </div>
          <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/45">What it is not</p>
            <p className="mt-7 max-w-xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-background/80 sm:text-4xl">
              A giant rollout, a tool mandate, or the pledge.
            </p>
            <p className="mt-6 max-w-lg leading-relaxed text-background/55">
              A team can book a workshop whether or not the employer adopts the Tinker Pledge. They are connected
              projects, not a package deal.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">A flexible starting point</p>
              <h2 className="mt-5 max-w-md text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                We set the agenda after we hear what the room needs.
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                A session can include the following, but the work participants bring determines the emphasis.
              </p>
            </div>

            <ul className="border-y border-border lg:col-span-7 lg:col-start-6">
              {sessionPoints.map((point) => (
                <li key={point} className="flex gap-4 border-b border-border py-5 last:border-b-0">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <span className="leading-relaxed text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">How we hold the room</p>
          <div className="mt-9 grid border-t border-border md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="font-mono text-xs text-primary">{principle.number}</span>
                <h2 className="mt-10 text-xl font-medium tracking-[-0.02em] text-foreground">{principle.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:items-end lg:px-10">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/65">
              Paid sessions help cover the public work
            </p>
            <h2 className="mt-5 max-w-4xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              Tell us who will be in the room and what they need to move forward.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button
              render={<a href="/contact#workshops" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="h-12 rounded-full px-7"
            >
              Ask about a team workshop
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
