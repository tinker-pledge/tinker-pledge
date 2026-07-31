"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { buildLinkedInShareUrl, buildPledgeShareText, buildXShareUrl, SHARE_URL } from "@/lib/pledge-share"

export function PledgeSection() {
  const [name, setName] = useState("")
  const [copied, setCopied] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  const firstName = name.trim().split(/\s+/)[0] || ""

  const shareText = useMemo(() => buildPledgeShareText(firstName), [firstName])

  async function handleNativeShare() {
    try {
      await navigator.share({
        title: "The Tinker Pledge",
        text: shareText,
        url: SHARE_URL,
      })
    } catch {
      // user dismissed — no-op
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(`${shareText} ${SHARE_URL}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const xHref = buildXShareUrl(shareText)
  const liHref = buildLinkedInShareUrl()

  return (
    <section id="pledge" className="bg-secondary/45">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Add your voice</p>
            <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
              Take the Tinker Pledge.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              There is no registry to join. Add your first name if you want the share text to sound like you, then pass
              the idea to someone who can make the benefit real.
            </p>

            <div className="mt-7 max-w-sm">
              <label htmlFor="pledge-name" className="mb-1.5 block text-sm font-medium text-foreground">
                Your first name <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input
                id="pledge-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan"
                className="h-12 w-full border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>

          <div className="border-t-4 border-primary bg-background p-7 sm:p-10 lg:col-span-7 lg:col-start-6">
            <div className="flex items-center gap-3">
              <span className="grid size-7 grid-cols-2 gap-[3px]" aria-hidden="true">
                <span className="bg-primary" />
                <span className="border border-foreground/35" />
                <span className="border border-foreground/35" />
                <span className="bg-foreground" />
              </span>
              <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">Tinker Pledge</span>
            </div>

            <p className="mt-8 text-balance text-2xl font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-3xl">
              {firstName ? (
                <>
                  <span className="text-primary">{firstName}</span> believes people build AI fluency when they have the
                  freedom to practice on problems that matter to them.
                </>
              ) : (
                <>
                  I believe people build AI fluency when they have the freedom to practice on{" "}
                  <span className="text-primary">problems that matter to them.</span>
                </>
              )}
            </p>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {canNativeShare && (
                <Button type="button" className="h-10 rounded-full px-5" onClick={handleNativeShare}>
                  Share the pledge
                </Button>
              )}
              <Button
                render={<a href={xHref} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant={canNativeShare ? "outline" : "default"}
                className="h-10 rounded-full px-5"
              >
                Post on X
              </Button>
              <Button
                render={<a href={liHref} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                className="h-10 rounded-full px-5"
              >
                Share on LinkedIn
              </Button>
              <Button type="button" variant="outline" className="h-10 rounded-full px-5" onClick={handleCopy}>
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Want to make it practical?{" "}
              <a href="/proposal" className="text-primary underline-offset-4 hover:underline">
                Draft a proposal for your team.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
