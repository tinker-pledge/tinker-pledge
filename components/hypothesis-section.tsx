export function HypothesisSection() {
  return (
    <section id="hypothesis" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">The whole idea</p>
        <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
          The home computer taught us this already.
        </h2>

        <div className="mt-8 flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            Most of the amazing things people do with computers weren&apos;t taught in a training room. They started at
            home — on a slow machine, late at night, with nobody watching. People tinkered because it was theirs.
            Spreadsheets, email, the web: we got fluent by playing, and that fluency quietly walked into work with us.
          </p>
          <p>
            AI is at the same moment. The skill of using it well — knowing what to ask, when to trust it, how to catch
            it when it&apos;s wrong — isn&apos;t learned in a mandatory workshop. It&apos;s learned in thousands of small,
            low-stakes reps. Planning dinner. Settling a silly argument. Drafting a tough text.
          </p>
          <p className="font-serif text-2xl font-light leading-snug text-foreground">
            People who are empowered and free to experiment will experiment more. The breakthroughs aren&apos;t the
            plan — they&apos;re the side effect.
          </p>
          <p>
            So this isn&apos;t really &ldquo;give people AI so they get better at work.&rdquo; It&apos;s &ldquo;give
            people AI for their whole life, and let the work benefit take care of itself.&rdquo; That&apos;s the bet.
            It&apos;s a kind one, and history is on its side.
          </p>
        </div>
      </div>
    </section>
  )
}
