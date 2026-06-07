import { Hero } from "@/components/hero"
import { HypothesisSection } from "@/components/hypothesis-section"
import { HowSection } from "@/components/how-section"
import { BusinessCaseSection } from "@/components/business-case-section"
import { SharePledgeSection } from "@/components/share-pledge-section"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <main>
      <Hero />
      <HypothesisSection />
      <HowSection />
      <BusinessCaseSection />
      <SharePledgeSection />
      <CtaSection />
    </main>
  )
}
