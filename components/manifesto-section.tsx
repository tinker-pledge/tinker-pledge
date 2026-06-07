"use client"

import { Button } from "@/components/ui/button"

const principles = [
  {
    title: "Fluency is built, not trained",
    body: "Nobody got good at computers in a mandatory workshop. They tinkered at home, late at night, with nobody watching — and that fluency walked into work with them.",
  },
  {
    title: "Freedom is the active ingredient",
    body: "People who are free to experiment, experiment more. Give them trusted starting points, keep the policy lightweight, and let curiosity do the rest.",
  },
  {
    title: "The breakthroughs are a side effect",
    body: "We don't need to predict the killer use-case. We just need enough people doing enough small experiments that the good ideas surface on their own.",
  },
  {
    title: "See the whole person",
    body: "This is a benefit for someone's whole life — their language class, their taxes, their weekend plans. The work benefit takes care of itself.",
  },
]

export function ManifestoSection() {
  function handlePrint() {
    window.print()
  }

  return (
    <section id="manifesto" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Share the belief</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            The Tinker Pledge, on one page.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            People forward documents, not landing pages. Here&apos;s the whole argument, typeset to share or print.
          </p>
        </div>

        {/* The shareable page */}
        <article className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/70 bg-card p-8 shadow-sm sm:p-12">
          <header className="border-b border-border/60 pb-6 text-center">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary font-serif text-xl text-primary-foreground">
              T
            </span>
            <h3 className="mt-4 font-serif text-2xl font-light text-foreground sm:text-3xl">A Pledge to Tinker</h3>
            <p className="mt-2 text-pretty text-muted-foreground">
              We give our people the freedom to use AI in their own lives — and trust that fluency to follow them
              everywhere.
            </p>
          </header>

          <div className="mt-8 flex flex-col gap-7">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span className="font-serif text-2xl font-light leading-none text-primary">{`0${i + 1}`}</span>
                <div>
                  <h4 className="font-serif text-lg text-foreground">{p.title}</h4>
                  <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <footer className="mt-8 border-t border-border/60 pt-6 text-center">
            <p className="font-serif text-lg font-light italic text-foreground">
              &ldquo;People who are free to experiment, experiment more.&rdquo;
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">The Tinker Pledge</p>
          </footer>
        </article>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button type="button" size="lg" className="rounded-full px-7 print:hidden" onClick={handlePrint}>
            Print or save as PDF
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="rounded-full px-7 print:hidden"
            render={<a href="/proposal" />}
            nativeButton={false}
          >
            Generate a proposal instead
          </Button>
        </div>
      </div>
    </section>
  )
}
