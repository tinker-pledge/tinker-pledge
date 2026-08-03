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
      <div className="tinker-container tinker-section">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="tinker-eyebrow">Add your voice</p>
            <h2 className="mt-5 text-balance text-3xl font-light leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
              Take the Tinker Pledge.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              There is no registry to join. Add your first name if you want the share text to sound like you, then pass
              the idea to someone who can make the benefit real.
            </p>

            <div className="mt-7 max-w-sm">
              <label htmlFor="pledge-name" className="tinker-label">
                Your first name <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input
                id="pledge-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan"
                className="tinker-field bg-background"
              />
            </div>
          </div>

          <div className="tinker-card border border-border-card bg-background p-7 sm:p-10 lg:col-span-7 lg:col-start-6">
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
                <Button type="button" variant="ink" className="h-10 rounded-full px-5" onClick={handleNativeShare}>
                  Share the pledge
                </Button>
              )}
              <Button
                render={<a href={xHref} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant={canNativeShare ? "outline" : "ink"}
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
              <Button
                type="button"
                variant="outline"
                data-status={copied ? "success" : undefined}
                aria-live="polite"
                className="h-10 rounded-full px-5"
                onClick={handleCopy}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Want to make it practical?{" "}
              <a href="/proposal" className="text-primary underline-offset-4 hover:underline">
                Create a short proposal for your team.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
