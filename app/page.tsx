import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { WhySection } from "@/components/why-section"
import { HowSection } from "@/components/how-section"
import { MathSection } from "@/components/math-section"
import { StoriesSection } from "@/components/stories-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <WhySection />
        <HowSection />
        <MathSection />
        <StoriesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
