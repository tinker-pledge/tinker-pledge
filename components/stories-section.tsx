import Image from "next/image"

const stories = [
  {
    quote:
      "I used to dread Monday admin. Now a tool drafts the first pass and I get my mornings back for the work I actually care about.",
    name: "Maya Olsen",
    role: "Operations Lead",
    image: "/images/portrait-1.png",
  },
  {
    quote:
      "It didn't feel like a perk. It felt like my company saying, \u2018we trust you.\u2019 That landed more than any gift card ever has.",
    name: "Daniel Reyes",
    role: "Senior Engineer",
    image: "/images/portrait-2.png",
  },
]

export function StoriesSection() {
  return (
    <section id="stories">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">In their words</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
            The kind of benefit people actually talk about.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <figure
              key={s.name}
              className="flex flex-col gap-6 rounded-3xl border border-border/70 bg-card p-8 sm:p-10"
            >
              <blockquote className="text-pretty font-serif text-xl font-light leading-relaxed text-foreground">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4">
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt={`Portrait of ${s.name}`}
                  width={56}
                  height={56}
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
