import Image from "next/image"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ANN_ARBOR_WORKSHOP, NYC_WORKSHOP } from "@/data/workshops"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Hands-on AI Workshops | The Tinker Pledge",
  description:
    "Bring a problem or workflow to a hands-on public AI workshop. No coding required.",
  path: "/workshops",
})

const workshopSteps = [
  {
    number: "01",
    title: "Show us the problem",
    body: "Open the real task on your own computer and explain where it gets difficult.",
  },
  {
    number: "02",
    title: "Try a few approaches",
    body: "Choose a tool, shape the ask, check the result, and change course when it is not working.",
  },
  {
    number: "03",
    title: "Keep what was useful",
    body: "Leave with the work you produced and a short record of what to repeat or try next.",
  },
]

export default function WorkshopsPage() {
  return (
    <main>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary">
                Workshop · Hands-on public session
              </p>
              <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.8rem,8vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                Bring one real problem.
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-pretty text-lg leading-relaxed text-background/70 sm:text-xl">
                Bring the task on your laptop. Abhi and Eva will work beside you and help you find out what today&apos;s
                tools can—and cannot—do with it.
              </p>
              <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-background/45">
                No coding required
              </p>
            </div>
          </div>

          <figure className="mt-16 sm:mt-24">
            <div className="overflow-hidden">
              <Image
                src="/images/workshop-tinkering-photo.jpg"
                alt="A person working at a laptop with handwritten notes spread across the table"
                width={1200}
                height={1800}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="aspect-[16/7] w-full object-cover object-[center_53%] grayscale-[12%]"
              />
            </div>
            <figcaption className="mt-2 text-right text-[0.68rem] text-background/40">
              Photo:{" "}
              <a
                href="https://www.pexels.com/photo/person-using-a-laptop-on-a-table-7429471/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-background"
              >
                cottonbro studio / Pexels
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary">Next</span>
            <span className="h-px w-10 bg-border" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Open registration</p>
          </div>

          <div className="mt-9 grid border-y border-border lg:grid-cols-12">
            <div className="border-b border-border py-7 lg:col-span-2 lg:border-b-0 lg:border-r lg:py-9">
              <p className="text-5xl font-medium tracking-[-0.055em] text-foreground">{ANN_ARBOR_WORKSHOP.day}</p>
              <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                {ANN_ARBOR_WORKSHOP.monthYear}
              </p>
            </div>
            <div className="border-b border-border py-7 lg:col-span-7 lg:border-b-0 lg:border-r lg:px-9 lg:py-9">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-primary" strokeWidth={1.8} />
                  {ANN_ARBOR_WORKSHOP.city}, {ANN_ARBOR_WORKSHOP.region}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" strokeWidth={1.8} />
                  {ANN_ARBOR_WORKSHOP.date}
                </span>
              </div>
              <h2 className="mt-8 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
                {ANN_ARBOR_WORKSHOP.title}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Sort the work already on your plate into the right AI bucket, run a real task, and build something
                reusable. Space stays limited so the room can stay hands-on.
              </p>
            </div>
            <div className="flex flex-col items-start justify-between py-7 lg:col-span-3 lg:py-9 lg:pl-9">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Bring your laptop and the thing you want to move forward.
              </p>
              <Button
                render={
                  <a href={ANN_ARBOR_WORKSHOP.href} target="_blank" rel="noopener noreferrer" />
                }
                nativeButton={false}
                size="lg"
                className="mt-8 h-12 rounded-full px-7 lg:w-full"
              >
                Register on Luma
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Inside the room</p>
              <h2 className="mt-5 max-w-xs text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground">
                Most of the session is yours.
              </h2>
            </div>
            <ol className="border-t border-border lg:col-span-9 lg:grid lg:grid-cols-3">
              {workshopSteps.map((step) => (
                <li
                  key={step.number}
                  className="border-b border-border py-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <span className="font-mono text-xs text-primary">{step.number}</span>
                  <h3 className="mt-10 text-xl font-medium tracking-[-0.02em] text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Where it started</p>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
              Our first room opened in {NYC_WORKSHOP.city}.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              On {NYC_WORKSHOP.date}, we worked with small business owners and operators alongside community partner{" "}
              {NYC_WORKSHOP.partner}. The next session builds from what we learned there.
            </p>
            <a
              href={NYC_WORKSHOP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
            >
              View the first event
              <ArrowRight className="size-4" />
            </a>
          </div>

          <aside className="border-t-4 border-primary bg-card p-7 sm:p-9 lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">For a private room</p>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-[-0.025em] text-foreground">
              Bring the workshop to your team.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We offer a small number of paid workshops for organizations. That work helps cover the cost of the public
              project.
            </p>
            <a
              href="/workplace"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
            >
              See the team format
              <ArrowRight className="size-4" />
            </a>
          </aside>
        </div>
      </section>
    </main>
  )
}
