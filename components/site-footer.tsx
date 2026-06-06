export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="font-serif text-lg leading-none">T</span>
          </span>
          <span className="font-serif text-lg tracking-tight text-foreground">The Tinker Pledge</span>
        </a>
        <p className="text-pretty text-center text-sm text-muted-foreground">
          A benefit for the humans behind the work. &copy; {new Date().getFullYear()} The Tinker Pledge.
        </p>
      </div>
    </footer>
  )
}
