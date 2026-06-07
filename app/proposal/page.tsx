import type { Metadata } from "next"
import { ProposalGenerator } from "@/components/proposal-generator"

export const metadata: Metadata = {
  title: "Generate a Proposal | The Tinker Pledge",
  description:
    "Create a ready-to-send proposal for bringing a personal AI budget to your company.",
}

export default function ProposalPage() {
  return (
    <main>
      <ProposalGenerator />
    </main>
  )
}
