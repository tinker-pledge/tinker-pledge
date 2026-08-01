"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ANN_ARBOR_WORKSHOP } from "@/data/workshops"

const navLinks = [
  { label: "Workshop", href: "/#workshop" },
  { label: "Pledge", href: "/#pledge" },
  { label: "Podcast", href: "/#podcast" },
  { label: "Blog", href: "/blog" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/94 backdrop-blur-lg print:hidden">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="/" className="group flex items-center gap-3" aria-label="The Tinker Pledge home">
          <span className="grid size-7 grid-cols-2 gap-[3px]" aria-hidden="true">
            <span className="bg-primary" />
            <span className="border border-foreground/35" />
            <span className="border border-foreground/35" />
            <span className="bg-foreground" />
          </span>
          <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-foreground max-[380px]:hidden">
            Tinker Pledge
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={
              <a
                href={ANN_ARBOR_WORKSHOP.href}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            className="h-10 rounded-full px-5"
          >
            Ann Arbor · {ANN_ARBOR_WORKSHOP.compactDate}
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center text-foreground transition-colors hover:bg-muted lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-background px-5 py-5 sm:px-8 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="flex min-h-12 items-center border-b border-border text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={
                <a
                  href={ANN_ARBOR_WORKSHOP.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                />
              }
              nativeButton={false}
              className="mt-5 h-12 rounded-full"
            >
              Ann Arbor · {ANN_ARBOR_WORKSHOP.monthDay}
              <ArrowUpRight className="size-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
