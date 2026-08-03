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
  const amount = budget.trim() || "a personal AI budget"
  const place = locality.trim() ? ` (adjusted for ${locality.trim()})` : ""
  const scale = size && size !== sizeOptions[0] ? ` Across a team of ${size.toLowerCase()}, ` : " "

  const opener =
    tone === "warm"
      ? `I want to propose something small that I think could matter a lot to the people here.`
      : `I'd like to propose a low-cost, high-leverage benefit: a personal AI budget.`

  return `Subject: A proposal — The Tinker Pledge

Hi team,

${opener}

The idea: give every person at ${who} ${amount}${place} to spend on consumer AI tools they can use in their own lives. We can start with a curated list of familiar options, keep reimbursement lightweight, and avoid usage reports.

Why this, and why now:

Home computers gave people room to learn by using them: writing a letter, planning a trip, making a budget, or following a curiosity. AI fluency develops the same way — through repeated use on problems that give someone a reason to come back.

So this isn't "buy a tool to make people more productive." It's "make continued, voluntary practice possible."${scale}the spend stays capped and the policy can stay lightweight. The point is access and repetition, not a large platform rollout.

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

  const inputClass = "tinker-field"
  const labelClass = "tinker-label"

  return (
    <section id="proposal" className="border-b border-border bg-secondary/45">
      <div className="tinker-container tinker-section">
        <div className="mb-8 flex items-center gap-4">
          <span className="tinker-sequence">01</span>
          <span className="h-px w-10 bg-border" />
          <p className="tinker-eyebrow text-muted-foreground">Build the draft</p>
        </div>

        <div className="tinker-card grid overflow-hidden border border-border-card bg-card lg:grid-cols-12">
          <div className="border-b border-border-card p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
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

              <fieldset>
                <legend className={labelClass}>Tone</legend>
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
                      className={`tinker-choice-state tinker-segmented-control flex-1 border text-sm font-medium ${
                        tone === t.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="tinker-meta-label text-muted-foreground">Your proposal</span>
              <div className="flex gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  data-status={copied ? "success" : undefined}
                  aria-live="polite"
                  className="rounded-full"
                  onClick={handleCopy}
                >
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button type="button" size="sm" className="rounded-full" onClick={handleDownload}>
                  Download
                </Button>
              </div>
            </div>
            <pre className="min-h-[28rem] flex-1 whitespace-pre-wrap rounded-xl border border-border-card bg-background p-5 font-sans text-sm leading-relaxed text-foreground sm:p-6">
              {proposal}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
