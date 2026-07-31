import type { Metadata } from "next"
import { ProposalGenerator } from "@/components/proposal-generator"

export const metadata: Metadata = {
  title: "Draft a Proposal | The Tinker Pledge",
  description:
    "Generate an editable proposal for bringing a personal AI budget to your company.",
}

export default function ProposalPage() {
  return (
    <main>
      <ProposalGenerator />
    </main>
  )
}
