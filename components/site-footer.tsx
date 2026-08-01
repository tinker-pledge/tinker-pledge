import { primaryNavigation } from "@/lib/navigation"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-[oklch(0.205_0.028_330)] text-white print:hidden">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <a href="/" className="flex items-center gap-3" aria-label="The Tinker Pledge home">
              <span className="grid size-7 grid-cols-2 gap-[3px]" aria-hidden="true">
                <span className="bg-[oklch(0.74_0.13_31)]" />
                <span className="border border-white/35" />
                <span className="border border-white/35" />
                <span className="bg-white" />
              </span>
              <span className="text-[0.95rem] font-semibold tracking-[-0.02em]">Tinker Pledge</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              The tools keep changing. Practice is what sticks.
            </p>
          </div>

          <nav aria-label="Project navigation" className="md:col-span-2 md:col-start-7">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/35">The project</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              {primaryNavigation.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label="Ways to work with us" className="md:col-span-3 md:col-start-10">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/35">Work with us</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <a href="/workplace" className="transition-colors hover:text-white">
                Bring the workshop to your team
              </a>
              <a href="/how-it-works" className="transition-colors hover:text-white">
                Practical pledge guide
              </a>
              <a href="/contact" className="transition-colors hover:text-white">
                Contact the team
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs leading-relaxed text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {"Made by "}
            <a
              href="https://evadora.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline-offset-4 transition-colors hover:underline"
            >
              Eva
            </a>
            {" and "}
            <a
              href="https://shrekoverflow.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline-offset-4 transition-colors hover:underline"
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
              className="font-medium text-white underline-offset-4 transition-colors hover:underline"
            >
              Open source
            </a>
            {"."}
          </p>
        </div>
      </div>
    </footer>
  )
}
