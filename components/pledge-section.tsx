"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

const SHARE_URL = "https://thetinkerpledge.com"
const PLEDGE_LINE = "the freedom to tinker is how people get fluent — so the breakthroughs take care of themselves."

export function PledgeSection() {
  const [name, setName] = useState("")
  const [copied, setCopied] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)

  // Detect native share support on the client without fetching in an effect.
  if (typeof window !== "undefined" && !canNativeShare && typeof navigator !== "undefined" && !!navigator.share) {
    setCanNativeShare(true)
  }

  const firstName = name.trim().split(/\s+/)[0] || ""

  const shareText = useMemo(() => {
    const who = firstName ? `I'm ${firstName}, and I'm taking the Tinker Pledge: ` : "I'm taking the Tinker Pledge: "
    return `${who}${PLEDGE_LINE}`
  }, [firstName])

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

  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(
    SHARE_URL,
  )}`
  const liHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`

  return (
    <section id="pledge" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: invitation */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Add your voice</p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
              Take the Tinker Pledge.
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              No sign-ups, no inbox, no fine print. Just say it out loud: you believe people should have the freedom to
              tinker. Then pass it to the person who can make it real.
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
                className="h-11 w-full rounded-xl border border-border bg-card px-4 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>

          {/* Right: pledge card + share */}
          <div className="rounded-3xl border border-border/70 bg-secondary/40 p-8 sm:p-10">
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-sm leading-none">T</span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">The Tinker Pledge</span>
            </div>

            <p className="mt-6 text-balance font-serif text-2xl font-light leading-snug text-foreground sm:text-[1.75rem]">
              {firstName ? (
                <>
                  <span className="text-primary">{firstName}</span> believes the freedom to tinker is how people get
                  fluent — so the breakthroughs take care of themselves.
                </>
              ) : (
                <>
                  I believe the freedom to tinker is how people get fluent — so the{" "}
                  <span className="text-primary">breakthroughs take care of themselves.</span>
                </>
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {canNativeShare && (
                <Button type="button" className="rounded-full" onClick={handleNativeShare}>
                  Share the pledge
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
                Share on LinkedIn
              </Button>
              <Button type="button" variant="outline" className="rounded-full" onClick={handleCopy}>
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Signed it in your heart? <a href="#proposal" className="text-primary underline-offset-4 hover:underline">Now bring it to your team.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
