export function HypothesisSection() {
  return (
    <section id="hypothesis" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">The hypothesis</p>
        <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
          We learned to use computers by using them.
        </h2>

        <div className="mt-8 flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            Much of what people know about computers did not begin in a training room. It grew through everyday use:
            writing documents, sending email, exploring the web, and solving small problems at home. People had room
            to experiment, and the fluency they built came with them to work.
          </p>
          <p>
            AI fluency develops the same way. Knowing what to ask, when to trust an answer, and how to spot a mistake
            takes repeated, low-stakes practice: planning a meal, comparing options for a trip, or drafting a difficult
            message.
          </p>
          <p className="font-serif text-2xl font-light leading-snug text-foreground">
            When people are free to experiment, they practice more. Useful ideas emerge along the way, rather than on
            command.
          </p>
          <p>
            The proposal is not &ldquo;buy AI to make everyone more productive.&rdquo; It is &ldquo;support personal
            exploration, and let people bring the judgment they develop back to work.&rdquo; That is the bet — and it
            starts with trust.
          </p>
          <p>
            A personal AI budget belongs alongside learning budgets and other benefits that support the whole person.
            It is a modest, practical way to help employees engage with a consequential new technology on their own
            terms.
          </p>
        </div>
      </div>
    </section>
  )
}
