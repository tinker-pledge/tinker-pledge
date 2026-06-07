"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type Tone = "warm" | "direct"

const sizeOptions = ["Just me / a few of us", "Under 50", "50–250", "250–1,000", "1,000+"]

function buildProposal({
  name,
  company,
  size,
  budget,
  locality,
  tone,
}: {
  name: string
  company: string
  size: string
  budget: string
  locality: string
  tone: Tone
}) {
  const who = company.trim() || "our company"
  const signer = name.trim() || "[Your name]"
  const amount = budget.trim() ? `${budget.trim()}` : "a monthly amount we set"
  const place = locality.trim() ? ` (adjusted for ${locality.trim()})` : ""
  const scale = size && size !== sizeOptions[0] ? ` Across a team of ${size.toLowerCase()}, ` : " "

  const opener =
    tone === "warm"
      ? `I want to propose something small that I think could matter a lot to the people here.`
      : `I'd like to propose a low-cost, high-leverage benefit: a personal AI budget.`

  return `Subject: A proposal — The Tinker Pledge

Hi team,

${opener}

The idea: give every person at ${who} ${amount} each month${place} to spend on consumer AI tools they can use in their own lives. We can start with a curated list of trusted options, keep reimbursement lightweight, and avoid usage reports.

Why this, and why now:

The most valuable things people ever did with computers weren't taught in a training room. They were learned at home, by tinkering — and that fluency quietly walked into work with us. AI is at exactly that moment. People get good at it through thousands of small, low-stakes reps: planning a trip, drafting a hard message, settling a curious question. People who are free to experiment, experiment more.

So this isn't "buy a tool to make people more productive." It's "give people the freedom to get fluent in their own lives, and let the work benefit take care of itself."${scale}the cost is modest, the rollout takes a day, and the value scales with how much people actually use it — not with what we spend.

What I'm asking for:
• A per-person monthly budget (we choose the number that fits us).
• Added as a light reimbursement.
• A curated starter list, with room to add tools as people find what works.

I'm happy to own the rollout and keep it lightweight. I think it would say something real about how we see the people here: as whole people, not just job titles.

Thanks for considering it,
${signer}`
}

export function ProposalGenerator() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [size, setSize] = useState(sizeOptions[2])
  const [budget, setBudget] = useState("")
  const [locality, setLocality] = useState("")
  const [tone, setTone] = useState<Tone>("warm")
  const [copied, setCopied] = useState(false)

  const proposal = useMemo(
    () => buildProposal({ name, company, size, budget, locality, tone }),
    [name, company, size, budget, locality, tone],
  )

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(proposal)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  function handleDownload() {
    const blob = new Blob([proposal], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "the-tinker-pledge-proposal.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const inputClass =
    "h-11 w-full rounded-xl border border-border bg-card px-4 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary"
  const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

  return (
    <section id="proposal" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Make it real</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            Turn the idea into a proposal you can send today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Add a few details and we&apos;ll draft a warm, ready-to-send note for your People team. Nothing leaves your
            browser.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Form */}
          <div className="rounded-2xl border border-border/70 bg-background p-6 sm:p-8">
            <div className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="pg-name" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="pg-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Rivera"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="pg-company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="pg-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Northwind"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pg-size" className={labelClass}>
                  Team size
                </label>
                <select
                  id="pg-size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className={inputClass}
                >
                  {sizeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="pg-budget" className={labelClass}>
                    Monthly budget per person
                  </label>
                  <input
                    id="pg-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. $150/mo"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="pg-locality" className={labelClass}>
                    Locality <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="pg-locality"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="cost of living"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <span className={labelClass}>Tone</span>
                <div className="flex gap-2">
                  {(
                    [
                      { id: "warm", label: "Warm" },
                      { id: "direct", label: "Direct" },
                    ] as { id: Tone; label: string }[]
                  ).map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTone(t.id)}
                      aria-pressed={tone === t.id}
                      className={`h-10 flex-1 rounded-xl border text-sm font-medium transition-colors ${
                        tone === t.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="flex flex-col rounded-2xl border border-border/70 bg-background p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Your proposal</span>
              <div className="flex gap-2">
                <Button type="button" size="sm" variant="outline" className="rounded-full" onClick={handleCopy}>
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button type="button" size="sm" className="rounded-full" onClick={handleDownload}>
                  Download
                </Button>
              </div>
            </div>
            <pre className="flex-1 whitespace-pre-wrap rounded-xl bg-secondary/60 p-5 font-sans text-sm leading-relaxed text-foreground">
              {proposal}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
