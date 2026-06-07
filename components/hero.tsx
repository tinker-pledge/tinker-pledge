import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-2 md:pb-24 md:pt-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm text-accent-foreground">
            <span className="size-1.5 rounded-full bg-primary" />For the people, first
          </span>

          <h1 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Give your teams the freedom to <span className="text-primary">tinker.</span>
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Give every employee a personal AI budget to use in their own life. When people use these tools for what
            matters to them, they get more fluent.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="/proposal" />}
              nativeButton={false}
              size="lg"
              className="rounded-full px-7"
            >
              Generate your proposal
            </Button>
            <Button
              render={<a href="/how-it-works" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full px-7"
            >
              See how it works
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            People who are free to experiment, experiment more.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border/70 shadow-[0_30px_80px_-30px_rgba(120,80,50,0.35)]">
            <Image
              src="/images/hero-warm.png"
              alt="A person working calmly at a sunlit desk with a warm mug of tea"
              width={720}
              height={820}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-serif text-2xl text-foreground">No Mandates</p>
            <p className="text-sm text-muted-foreground">just curiosity</p>
          </div>
        </div>
      </div>
    </section>
  )
}
