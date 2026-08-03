import Image from "next/image"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ANN_ARBOR_WORKSHOP } from "@/data/workshops"

const roomNotes = [
  {
    title: "Start from your real work",
    body: "Bring one thing: a vendor email, a messy CSV, an interview rubric, a weekly report, family chores scheduling, a task you still do by hand.",
  },
  {
    title: "Work side by side",
    body: "We help you choose an approach, ask better questions, check the result, and change course when it fails.",
  },
  {
    title: "Leave with it running",
    body: "Your files, your agents, your skills. Open your laptop at home and feel confident about tackling a bigger, more complex task.",
  },
]

export function WorkshopSection() {
  return (
    <section
      id="workshop"
      className="surface-dark surface-workshop relative scroll-mt-20 border-b border-border bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-[image:var(--gradient-workshop-horizon)]"
      />
      <div className="tinker-container py-20 sm:py-28 lg:py-32">
        <div className="mb-16 border-y border-foreground/20 py-7 sm:mb-24 sm:py-9">
          <h2 className="max-w-3xl text-3xl font-light tracking-[-0.035em] sm:text-4xl">
            The next workshop is in Ann Arbor.
          </h2>
          <p className="mt-4 max-w-3xl text-2xl font-medium tracking-[-0.025em]">
            {ANN_ARBOR_WORKSHOP.title}
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-foreground/75">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" strokeWidth={1.8} />
              {ANN_ARBOR_WORKSHOP.city}, {ANN_ARBOR_WORKSHOP.region}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" strokeWidth={1.8} />
              {ANN_ARBOR_WORKSHOP.date}
            </span>
          </div>
          <Button
            render={
              <a href={ANN_ARBOR_WORKSHOP.href} target="_blank" rel="noopener noreferrer" />
            }
            nativeButton={false}
            size="lg"
            className="mt-7 h-12 rounded-full px-7"
          >
            Register on Luma
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="tinker-eyebrow text-[var(--route-workshop-accessory)]">Workshop</p>
            <h2 className="mt-8 text-[clamp(3.5rem,7vw,6.5rem)] font-light leading-[0.9] tracking-[-0.05em]">
              Bring the task you keep doing by hand.
            </h2>
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
            <div className="tinker-hero-frame relative aspect-[4/3] overflow-hidden bg-background/10">
              <Image
                src="/images/workshop-tinkering-photo.jpg"
                alt="A person working at a laptop with handwritten notes spread across the table"
                width={1200}
                height={1800}
                sizes="(min-width: 1024px) 58vw, 100vw"
                loading="eager"
                className="tinker-photo h-full w-full object-cover object-[center_52%]"
              />
              <div className="tinker-meta-label absolute bottom-0 left-0 bg-primary px-4 py-3 text-primary-foreground sm:px-5">
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

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
          <div>
            <p className="tinker-eyebrow text-foreground/50">In the room</p>
            <a
              href="/workshops"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              Full workshop details
              <ArrowRight className="size-4" />
            </a>
          </div>
          <ul className="grid border-t border-foreground/20 md:grid-cols-3">
            {roomNotes.map((note) => (
              <li
                key={note.title}
                className="border-b border-foreground/20 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <h3 className="text-xl font-normal tracking-[-0.02em]">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{note.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
