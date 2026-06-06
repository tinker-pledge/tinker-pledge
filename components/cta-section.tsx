import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="cta" className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h2 className="text-balance font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
          Be the one who proposes it.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
          Bring a benefit your team will remember — one that says you see them as whole people, not just job titles.
          Start with a short, ready-to-send proposal.
        </p>

        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" action="#">
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/70"
          />
          <Button
            type="submit"
            size="lg"
            variant="secondary"
            className="h-12 rounded-full px-7 text-secondary-foreground"
          >
            Send me the proposal
          </Button>
        </form>

        <p className="mt-4 text-sm text-primary-foreground/70">
          A one-page template you can forward to your manager today.
        </p>
      </div>
    </section>
  )
}
