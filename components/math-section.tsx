export function MathSection() {
  return (
    <section id="math" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">The gentle math</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
            $2,400 a year. Easily the best-spent line in the budget.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            You don&apos;t need a heroic spreadsheet to justify this one. The numbers are kind on their own.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { stat: "$200", label: "per person, per month — small enough to say yes to" },
            { stat: "~5 hrs", label: "of routine work the right tools can quietly absorb each week" },
            { stat: "1 day", label: "to roll out, not a multi-quarter procurement cycle" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-3 rounded-3xl border border-border/70 bg-card p-8 text-center"
            >
              <p className="font-serif text-4xl font-light text-foreground">{item.stat}</p>
              <p className="text-pretty leading-relaxed text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border/70 bg-card p-8 text-center sm:p-10">
          <p className="text-pretty font-serif text-xl font-light leading-relaxed text-foreground sm:text-2xl">
            &ldquo;If even one of those hours each week goes back to meaningful work — or back home to someone&apos;s
            evening — the benefit has already paid for itself.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
