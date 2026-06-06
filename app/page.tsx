import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { UnlocksSection } from "@/components/unlocks-section"
import { HypothesisSection } from "@/components/hypothesis-section"
import { HowSection } from "@/components/how-section"
import { StoriesSection } from "@/components/stories-section"
import { BusinessCaseSection } from "@/components/business-case-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <HypothesisSection />
        <UnlocksSection />
        <HowSection />
        <StoriesSection />
        <BusinessCaseSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
