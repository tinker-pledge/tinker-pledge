export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <a href="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="font-serif text-lg leading-none">T</span>
          </span>
          <span className="font-serif text-lg tracking-tight text-foreground">The Tinker Pledge</span>
        </a>
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <p className="text-pretty text-center text-sm text-muted-foreground sm:text-right">
            A people-first approach to building AI fluency. &copy; {new Date().getFullYear()} The Tinker Pledge.
          </p>
          <p className="text-pretty text-center text-sm text-muted-foreground sm:text-right">
            {"Made by "}
            <a
              href="https://x.com/evadoraz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Eva
            </a>
            {" & "}
            <a
              href="https://x.com/ShrekOverflow"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Shrek
            </a>
          </p>
          <p className="text-pretty text-center text-sm text-muted-foreground sm:text-right">
            {"Follow the project at "}
            <a
              href="https://x.com/tinkerpledge"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              @tinkerpledge
            </a>
            {"."}
          </p>
        </div>
      </div>
    </footer>
  )
}
