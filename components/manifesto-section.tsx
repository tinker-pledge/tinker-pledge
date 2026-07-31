"use client"

import { Button } from "@/components/ui/button"

const principles = [
  {
    title: "Fluency grows through practice",
    body: "People learned to use computers through repeated everyday use, not formal training alone. Personal experimentation built context, judgment, and confidence they could bring to work.",
  },
  {
    title: "Freedom makes practice possible",
    body: "Give people familiar starting points, keep the policy lightweight, and let them explore uses that matter in their own lives.",
  },
  {
    title: "Useful ideas emerge through repetition",
    body: "No one needs to predict the perfect use case in advance. Repeated, low-stakes experiments help people discover where the tools are useful — and where they are not.",
  },
  {
    title: "Support the whole person",
    body: "The budget is for personal learning and everyday life. Employees choose what matters to them and can bring the judgment they develop back to work.",
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
          <p className="text-sm uppercase tracking-[0.2em] text-primary">The manifesto</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            The Tinker Pledge on one page.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Use this concise version to introduce the idea, share it with a colleague, or save it as a PDF.
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
              We give our people a personal AI budget to use in their own lives — and the freedom to build fluency on
              their own terms.
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
              &ldquo;Fluency grows through practice, not mandates.&rdquo;
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
            Draft a proposal
          </Button>
        </div>
      </div>
    </section>
  )
}
