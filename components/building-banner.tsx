import { Hammer } from "lucide-react"

export function BuildingBanner() {
  return (
    <div className="border-b border-primary/20 bg-primary text-primary-foreground print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3 sm:items-center">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 sm:mt-0">
            <Hammer className="size-4" strokeWidth={1.75} />
          </span>
          <p className="leading-relaxed text-primary-foreground/90">
            The Tinker Pledge is being built in the open. The starter tool list is live; policy examples are still in
            progress.
          </p>
        </div>
        <a
          href="https://github.com/tinker-pledge/tinker-pledge"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-medium text-primary-foreground underline-offset-4 hover:underline sm:pl-4"
        >
          Contribute on GitHub
        </a>
      </div>
    </div>
  )
}
