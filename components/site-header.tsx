"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VIRTUAL_WORKSHOP } from "@/data/workshops"
import { isCurrentNavigationPath, primaryNavigation } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const navigationAccentClasses = {
  "/workshops": "after:bg-[var(--route-workshop-accessory)]",
  "/pledge": "after:bg-[var(--route-pledge-accessory)]",
  "/podcast": "after:bg-[var(--route-podcast-accessory)]",
  "/blog": "after:bg-[var(--route-blog-accessory)]",
} as const

const paperFocusClasses =
  "focus-visible:ring-[var(--palette-night-paper)] focus-visible:ring-offset-[3px] focus-visible:ring-offset-[var(--palette-night-water)]"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isWorkshopsPage = pathname === "/workshops"

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <header
      className={cn(
        "surface-dark sticky top-0 z-50 border-b border-[var(--palette-night-border)] text-[var(--palette-night-paper)] print:hidden",
        isWorkshopsPage
          ? "bg-[var(--palette-night-water)]/90 backdrop-blur-xl"
          : "bg-[var(--palette-night-water)]",
      )}
    >
      <div className="tinker-container flex h-[4.5rem] items-center justify-between">
        <a
          href="/"
          className={cn("group flex items-center gap-3 rounded-sm", paperFocusClasses)}
          aria-label="The Tinker Pledge home"
        >
          <span className="grid size-7 grid-cols-2 gap-[3px]" aria-hidden="true">
            <span className="bg-[var(--palette-golden-hour)]" />
            <span className="border border-[var(--palette-night-paper)]/35" />
            <span className="border border-[var(--palette-night-paper)]/35" />
            <span className="bg-[var(--palette-night-paper)]" />
          </span>
          <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[var(--palette-night-paper)] max-[380px]:hidden">
            Tinker Pledge
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((link) => {
            const isCurrent = isCurrentNavigationPath(pathname, link.href)

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "tinker-nav-state relative rounded-sm py-2 text-sm text-[var(--palette-night-quiet)] hover:text-[var(--palette-night-paper)] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5",
                  paperFocusClasses,
                  isCurrent && ["text-[var(--palette-night-paper)]", navigationAccentClasses[link.href]],
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={
              <a
                href={VIRTUAL_WORKSHOP.href}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            variant="darkOutline"
            className="h-10 rounded-full px-5"
          >
            Virtual workshop · {VIRTUAL_WORKSHOP.compactDate}
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "tinker-state-surface flex size-10 items-center justify-center rounded-xl text-[var(--palette-night-paper)] lg:hidden",
            paperFocusClasses,
          )}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--palette-night-border)] bg-[var(--palette-night-water)] px-6 py-5 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {primaryNavigation.map((link) => {
              const isCurrent = isCurrentNavigationPath(pathname, link.href)

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "tinker-state-surface relative flex min-h-12 items-center border-b border-[var(--palette-night-border)] text-base text-[var(--palette-night-quiet)] hover:text-[var(--palette-night-paper)] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5",
                    paperFocusClasses,
                    isCurrent && ["text-[var(--palette-night-paper)]", navigationAccentClasses[link.href]],
                  )}
                >
                  {link.label}
                </a>
              )
            })}
            <Button
              render={
                <a
                  href={VIRTUAL_WORKSHOP.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                />
              }
              nativeButton={false}
              variant="darkOutline"
              className="mt-5 h-12 rounded-full"
            >
              Virtual workshop · {VIRTUAL_WORKSHOP.compactDate}
              <ArrowUpRight className="size-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
