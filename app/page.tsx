import { Hero } from "@/components/hero"
import { WorkshopSection } from "@/components/workshop-section"
import { HomePledgeSection } from "@/components/home-pledge-section"
import { HomePodcastSection } from "@/components/home-podcast-section"

export default function Page() {
  return (
    <main>
      <Hero />
      <WorkshopSection />
      <HomePledgeSection />
      <HomePodcastSection />
    </main>
  )
}
