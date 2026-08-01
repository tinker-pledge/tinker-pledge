import Image from "next/image"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ANN_ARBOR_WORKSHOP } from "@/data/workshops"

const roomNotes = [
  {
    number: "01",
    title: "Start from your real work",
    body: "Bring one thing: a vendor email, a messy CSV, an interview rubric, a weekly report, family chores scheduling, a task you still do by hand.",
  },
  {
    number: "02",
    title: "Work side by side",
    body: "We help you choose an approach, ask better questions, check the result, and change course when it fails.",
  },
  {
    number: "03",
    title: "Leave with it running",
    body: "Your files, your agents, your skills. Open your laptop at home and feel confident about tackling a bigger, more complex task.",
  },
]

export function WorkshopSection() {
  return (
    <section id="workshop" className="scroll-mt-20 bg-[var(--palette-ember-rose)] text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary">01</span>
              <span className="h-px w-10 bg-foreground/25" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/65">
                Hands-on public workshop
              </p>
            </div>
            <h2 className="mt-8 text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Workshop
            </h2>
            <p className="mt-8 max-w-lg text-pretty text-2xl leading-snug tracking-[-0.02em] text-foreground/95 sm:text-3xl">
              Bring the task you keep doing by hand.
            </p>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-foreground/65">
              You already use AI. Some weeks that&apos;s a quick email, some weeks something bigger. It hands back a
              plan, and the doing still lands on you, so the same job is back on your desk next week, and the week
              after.
            </p>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-foreground/65">
              Whether you opened ChatGPT last week or already have a few automations running, you&apos;ll leave our
              workshops with an agent that works through the night without you checking on it. No coding experience
              needed.
            </p>
          </div>

          <figure className="lg:col-span-7 lg:pt-2">
            <div className="relative overflow-hidden bg-background/10">
              <Image
                src="/images/workshop-tinkering-photo.jpg"
                alt="A person working at a laptop with handwritten notes spread across the table"
                width={1200}
                height={1800}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="aspect-[4/3] w-full object-cover object-[center_52%] grayscale-[12%]"
              />
              <div className="absolute bottom-0 left-0 bg-primary px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary-foreground sm:px-5">
                Laptop open · task in front of you
              </div>
            </div>
            <figcaption className="mt-2 text-right text-[0.68rem] text-foreground/45">
              Photo:{" "}
              <a
                href="https://www.pexels.com/photo/person-using-a-laptop-on-a-table-7429471/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                cottonbro studio / Pexels
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 border-y border-foreground/20 lg:mt-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr_auto] lg:items-stretch">
            <div className="border-b border-foreground/20 py-7 lg:border-b-0 lg:border-r lg:py-8 lg:pr-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-foreground/50">Next room</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.025em]">{ANN_ARBOR_WORKSHOP.title}</p>
            </div>
            <div className="grid gap-3 border-b border-foreground/20 py-7 text-sm text-foreground/75 sm:grid-cols-2 lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" strokeWidth={1.8} />
                {ANN_ARBOR_WORKSHOP.city}, {ANN_ARBOR_WORKSHOP.region}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-primary" strokeWidth={1.8} />
                {ANN_ARBOR_WORKSHOP.date}
              </span>
            </div>
            <div className="flex items-center py-7 lg:pl-8">
              <Button
                render={
                  <a href={ANN_ARBOR_WORKSHOP.href} target="_blank" rel="noopener noreferrer" />
                }
                nativeButton={false}
                size="lg"
                className="h-12 w-full rounded-full px-7 lg:w-auto"
              >
                Register on Luma
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">In the room</p>
            <a
              href="/workshops"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              Full workshop details
              <ArrowRight className="size-4" />
            </a>
          </div>
          <ol className="grid border-t border-foreground/20 md:grid-cols-3">
            {roomNotes.map((note) => (
              <li
                key={note.number}
                className="border-b border-foreground/20 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="font-mono text-xs text-primary">{note.number}</span>
                <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{note.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
