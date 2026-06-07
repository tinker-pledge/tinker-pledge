"use client"

import { useEffect, useMemo, useState } from "react"
import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buildLinkedInShareUrl, buildPledgeShareText, buildXShareUrl, SHARE_URL } from "@/lib/pledge-share"

export function SharePledgeSection() {
  const [copied, setCopied] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  const shareText = useMemo(() => buildPledgeShareText(), [])
  const xHref = buildXShareUrl(shareText)
  const liHref = buildLinkedInShareUrl()

  async function handleNativeShare() {
    try {
      await navigator.share({
        title: "The Tinker Pledge",
        text: shareText,
        url: SHARE_URL,
      })
    } catch {
      // User dismissed the native share sheet.
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

  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
              <Share2 className="size-5" strokeWidth={1.75} />
            </span>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Share the pledge</p>
          </div>
          <h2 className="mt-4 text-balance font-serif text-2xl font-light leading-tight text-foreground sm:text-3xl">
            Help the idea reach someone who can say yes.
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            The fastest path may be one person forwarding the belief before the proposal.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {canNativeShare && (
            <Button type="button" className="rounded-full" onClick={handleNativeShare}>
              Share
            </Button>
          )}
          <Button
            render={<a href={xHref} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            variant={canNativeShare ? "outline" : "default"}
            className="rounded-full"
          >
            Post on X
          </Button>
          <Button
            render={<a href={liHref} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            variant="outline"
            className="rounded-full"
          >
            LinkedIn
          </Button>
          <Button type="button" variant="outline" className="rounded-full" onClick={handleCopy}>
            {copied ? "Copied" : "Copy link"}
          </Button>
        </div>
      </div>
    </section>
  )
}
