import { footerProjectNavigation } from "@/lib/navigation"
import { DISCORD_INVITE_URL } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="surface-dark border-t border-[var(--palette-night-border)] bg-[var(--palette-night-water)] text-[var(--palette-night-paper)] print:hidden">
      <div className="tinker-container py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <a href="/" className="flex items-center gap-3" aria-label="The Tinker Pledge home">
              <span className="grid size-7 grid-cols-2 gap-[3px]" aria-hidden="true">
                <span className="bg-[var(--palette-golden-hour)]" />
                <span className="border border-[var(--palette-night-paper)]/35" />
                <span className="border border-[var(--palette-night-paper)]/35" />
                <span className="bg-[var(--palette-night-paper)]" />
              </span>
              <span className="text-[0.95rem] font-semibold tracking-[-0.02em]">Tinker Pledge</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--palette-night-quiet)]">
              The tools keep changing. Practice is what sticks.
            </p>
          </div>

          <nav aria-label="Project navigation" className="md:col-span-2 md:col-start-7">
            <p className="tinker-meta-label text-[var(--palette-night-quiet)]">The project</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--palette-night-muted)]">
              {footerProjectNavigation.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-[var(--palette-night-paper)]">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label="Ways to work with us" className="md:col-span-3 md:col-start-10">
            <p className="tinker-meta-label text-[var(--palette-night-quiet)]">Work with us</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--palette-night-muted)]">
              <a
                href="/workplace"
                className="text-[var(--palette-golden-hour)] transition-colors hover:text-[var(--palette-night-paper)]"
              >
                Bring the workshop to your team
              </a>
              <a href="/how-it-works" className="transition-colors hover:text-[var(--palette-night-paper)]">
                Practical pledge guide
              </a>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--palette-night-paper)]"
              >
                Join Discord
              </a>
              <a href="/contact" className="transition-colors hover:text-[var(--palette-night-paper)]">
                Contact the team
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--palette-night-border)] pt-6 text-xs leading-relaxed text-[var(--palette-night-quiet)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            {"Made by "}
            <a
              href="https://evadora.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--palette-night-paper)] underline-offset-4 transition-colors hover:underline"
            >
              Eva
            </a>
            {" and "}
            <a
              href="https://shrekoverflow.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--palette-night-paper)] underline-offset-4 transition-colors hover:underline"
            >
              Abhi
            </a>
            {"."}
          </p>
          <p>
            &copy; {new Date().getFullYear()} The Tinker Pledge.{" "}
            <a
              href="https://github.com/tinker-pledge/tinker-pledge"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--palette-night-paper)] underline-offset-4 transition-colors hover:underline"
            >
              Open source
            </a>
            {". "}
            <a
              href="/privacy"
              className="font-medium text-[var(--palette-night-paper)] underline-offset-4 transition-colors hover:underline"
            >
              Privacy
            </a>
            {"."}
          </p>
        </div>
      </div>
    </footer>
  )
}
