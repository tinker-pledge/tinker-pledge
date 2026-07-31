"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type Tone = "warm" | "direct"

const sizeOptions = ["Pilot or small team", "Fewer than 50", "50–250", "250–1,000", "1,000+"]

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
  const enteredBudget = budget
    .trim()
    .replace(/\s*(?:\/\s*(?:mo|month)|per\s+month|monthly)\.?$/i, "")
  const monthlyCap = enteredBudget
    ? `${enteredBudget} per person each month`
    : "a monthly amount we set per person"
  const budgetCap = enteredBudget
    ? `A monthly per-person cap of ${enteredBudget}.`
    : "A monthly per-person cap that fits our budget."
  const locationNote = locality.trim() ? `, calibrated for ${locality.trim()}` : ""
  const scale =
    size === sizeOptions[0]
      ? "A small pilot would let us test the reimbursement process, clarify questions, and improve the policy before a broader launch."
      : `For a team of ${size.toLowerCase()}, a fixed per-person cap would keep the budget predictable while giving everyone the same starting point.`

  const opener =
    tone === "warm"
      ? "I'd like to propose a small, practical benefit that could help more people here build confidence and judgment with AI."
      : "I'd like to propose a personal AI budget: a bounded, practical learning benefit for employees."

  return `Subject: Proposal: a personal AI budget

Hi team,

${opener}

The idea is simple: reimburse employees at ${who} for personal AI tools they choose and use in their own lives, up to ${monthlyCap}${locationNote}. We would begin with a curated starter list, use a lightweight reimbursement process, and provide a clear path for requesting other tools.

Why consider it:

Home computers gave people room to learn by using them: writing a letter, planning a trip, making a budget, or following a curiosity. AI fluency develops similarly. Formal training can introduce the tools; repeated, low-stakes practice helps people learn what to ask, when to question an answer, and where a tool is useful.

Suggested guardrails:
• Personal tools are for personal practice and public information.
• Company, customer, and other confidential data stay out unless a tool is explicitly approved for that use.
• No prompt reviews or individual usage monitoring.
• Finance or payroll confirms the appropriate reimbursement and tax treatment before launch.

Suggested starting point:
• ${budgetCap}
• Reimbursement against a curated starter list.
• A named owner and a clear process for tool requests.
• A quarterly review of participation, questions, and policy gaps.

${scale}

If this seems worth exploring, I'm happy to help shape a pilot and draft the initial policy for review.

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
    "h-11 w-full rounded-xl border border-border bg-card px-4 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
  const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

  return (
    <section id="proposal" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Proposal generator</p>
          <h1 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            Draft a clear internal proposal.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Enter a few details to generate an editable note for your manager, People team, finance partner, or security
            reviewer. Your entries stay in this browser.
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
                    Monthly amount per person
                  </label>
                  <input
                    id="pg-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. $30"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="pg-locality" className={labelClass}>
                    Location or region <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="pg-locality"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="e.g. United Kingdom"
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
              </fieldset>
            </div>
          </div>

          {/* Preview */}
          <div className="flex flex-col rounded-2xl border border-border/70 bg-background p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Proposal draft</span>
              <div className="flex gap-2">
                <Button type="button" size="sm" variant="outline" className="rounded-full" onClick={handleCopy}>
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button type="button" size="sm" className="rounded-full" onClick={handleDownload}>
                  Download .txt
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
