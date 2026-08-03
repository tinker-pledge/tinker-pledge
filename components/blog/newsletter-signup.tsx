import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// TODO(human-input): confirm the Buttondown username before this ships.
const BUTTONDOWN_ACTION = 'https://buttondown.com/api/emails/embed-subscribe/tinkerpledge'

export function NewsletterSignup({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className={cn('tinker-card border border-border-card bg-card p-7 sm:p-10', className)}
    >
      <p className="tinker-eyebrow">Stay in the loop</p>
      <h2 id="newsletter-heading" className="mt-4 text-2xl font-normal tracking-[-0.025em] text-foreground">
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
        <div className="flex flex-1 flex-col">
          <label htmlFor="newsletter-email" className="tinker-label">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="tinker-field bg-background text-sm"
          />
        </div>
        <Button type="submit" size="lg" className="h-[var(--control-h-field)] rounded-full px-5">
          Subscribe
        </Button>
      </form>

      <p className="mt-3 text-sm text-muted-foreground">
        We use your address only to send new posts. Unsubscribe any time. Read our{' '}
        <a
          href="/privacy"
          className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-primary"
        >
          privacy policy
        </a>
        .
      </p>
    </section>
  )
}
