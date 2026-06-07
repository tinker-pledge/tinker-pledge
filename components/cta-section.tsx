import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="cta" className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h2 className="text-balance font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
          Make the Tinker Pledge.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
          Be the person who brings it up. Generate a ready-to-send proposal, or share the one-page manifesto with the
          people who can say yes.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="h-12 rounded-full px-7 text-secondary-foreground"
            render={<a href="#proposal" />}
            nativeButton={false}
          >
            Generate your proposal
          </Button>
          <Button
            size="lg"
            className="h-12 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 text-primary-foreground hover:bg-primary-foreground/20"
            render={<a href="#manifesto" />}
            nativeButton={false}
          >
            Share the manifesto
          </Button>
        </div>

        <p className="mt-4 text-sm text-primary-foreground/70">
          No sign-up. Everything you need to start the conversation today.
        </p>
      </div>
    </section>
  )
}
