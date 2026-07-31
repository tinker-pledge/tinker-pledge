import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// TODO(human-input): confirm the Buttondown username before this ships.
const BUTTONDOWN_ACTION = 'https://buttondown.com/api/emails/embed-subscribe/tinkerpledge'

export function NewsletterSignup({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className={cn('border-y border-border bg-card p-7 sm:p-10', className)}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Stay in the loop</p>
      <h2 id="newsletter-heading" className="mt-4 text-2xl font-medium tracking-[-0.025em] text-foreground">
        Get new posts by email
      </h2>
      <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
        Occasional writing about personal AI budgets and what people build with them. No more than one
        email per post.
      </p>

      <form
        action={BUTTONDOWN_ACTION}
        method="post"
        target="_blank"
        className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end"
      >
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="newsletter-email" className="text-sm text-foreground">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </div>
        <Button type="submit" size="lg" className="rounded-full">
          Subscribe
        </Button>
      </form>

      {/* TODO(human-input): this is the first place the site collects personal data and
          there is no privacy policy page. Confirm the wording, and whether a real policy
          and double opt-in are required, before this is public. */}
      <p className="mt-3 text-sm text-muted-foreground">
        We use your address only to send new posts. Unsubscribe any time.
      </p>
    </section>
  )
}
