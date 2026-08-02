import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Privacy Policy | The Tinker Pledge",
  description:
    "How Tinker Pledge handles newsletter signups, email, workshop registration, and website measurements.",
  path: "/privacy",
})

const externalLinkClass =
  "font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:text-foreground"

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary">Privacy</p>
            </div>
            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-balance text-[clamp(3.5rem,7.5vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-foreground">
                What this site collects, and why.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                This page explains what happens when you visit tinkerpledge.org, join the newsletter, email us, or
                register for a workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:px-10">
          <aside className="lg:col-span-3">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">Last updated</p>
            <p className="mt-3 text-sm text-muted-foreground">August 2, 2026</p>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tinker Pledge is an open community project run by Eva and Abhi. In this policy, “we” means the people
              running Tinker Pledge.
            </p>
          </aside>

          <article className="space-y-14 lg:col-span-7 lg:col-start-5">
            <section aria-labelledby="information-you-give-us">
              <h2
                id="information-you-give-us"
                className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Information you give us
              </h2>

              <div className="mt-7 space-y-8 text-pretty leading-relaxed text-muted-foreground">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">Newsletter</h3>
                  <p className="mt-3">
                    When you subscribe, the form sends your email address to Buttondown, the service we use to send new
                    posts. Buttondown also records the IP address and referrer-level information connected with a
                    subscription. Every newsletter includes an unsubscribe link.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">Email</h3>
                  <p className="mt-3">
                    When you email us, we receive your email address, the name attached to your account, and anything
                    you include in the message or its attachments. We use that information to reply and to follow up on
                    the conversation you started.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">Workshop registration</h3>
                  <p className="mt-3">
                    Workshop registration happens on Luma. Information you enter there is handled under Luma&apos;s
                    privacy policy. We may receive the registration details Luma makes available to event hosts so we
                    can run the workshop and send messages about that event.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">Tools that stay in your browser</h3>
                  <p className="mt-3">
                    The details you enter in the proposal generator and the optional name you add to the pledge share
                    card are processed in your browser. We do not receive those entries. If you copy, download, or share
                    the result, the destination you choose handles it from there.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="information-collected-automatically">
              <h2
                id="information-collected-automatically"
                className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Information collected when the site loads
              </h2>

              <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Vercel hosts this site and may process basic request and network information needed to deliver and
                  secure it.
                </p>
                <p>
                  In production, we use Vercel Web Analytics to see aggregate information such as pages viewed,
                  referrers, filtered query parameters, approximate location, browser, operating system, and device
                  type. Vercel says these measurements are anonymous, are not associated with an individual or IP
                  address, and do not use third-party cookies.
                </p>
                <p>
                  We also use Vercel Speed Insights. It measures page-load speed, responsiveness, and layout stability
                  so we can find parts of the site that are slow or difficult to use.
                </p>
                <p>
                  We do not run ads or use advertising cookies on tinkerpledge.org. Services you visit through an
                  external link may use their own cookies and measurement tools.
                </p>
              </div>
            </section>

            <section aria-labelledby="how-we-use-information">
              <h2
                id="how-we-use-information"
                className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                How we use information
              </h2>
              <ul className="mt-7 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
                <li>Send new posts to people who joined the newsletter.</li>
                <li>Reply to questions and workshop inquiries.</li>
                <li>Organize workshops and send event information to registered attendees.</li>
                <li>Understand which pages are visited and whether the site is working well.</li>
                <li>Protect and maintain the site.</li>
              </ul>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                We do not sell or rent personal information, and we do not use it for targeted advertising.
              </p>
            </section>

            <section aria-labelledby="services-we-use">
              <h2
                id="services-we-use"
                className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Services we use
              </h2>
              <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  <a
                    href="https://buttondown.com/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClass}
                  >
                    Buttondown
                  </a>{" "}
                  stores newsletter subscriptions and sends the newsletter.
                </p>
                <p>
                  <a
                    href="https://vercel.com/docs/analytics/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClass}
                  >
                    Vercel
                  </a>{" "}
                  hosts the site and provides anonymous traffic and performance measurements.
                </p>
                <p>
                  <a
                    href="https://lu.ma/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClass}
                  >
                    Luma
                  </a>{" "}
                  handles workshop registration.
                </p>
                <p>
                  These services process information under their own terms and privacy policies. Other websites linked
                  from Tinker Pledge do the same once you leave this site.
                </p>
              </div>
            </section>

            <section aria-labelledby="retention-and-choices">
              <h2
                id="retention-and-choices"
                className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Retention and your choices
              </h2>
              <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Buttondown keeps your newsletter subscription until you unsubscribe or ask for it to be removed.
                  Email and workshop correspondence is kept for as long as we need it to answer you, run the event, and
                  maintain ordinary project records. Vercel and Luma retain information according to their own
                  policies.
                </p>
                <p>
                  You can unsubscribe through the link in any newsletter. You can also ask what personal information we
                  have about you, ask us to correct it, or ask us to delete it by emailing{" "}
                  <a href="mailto:hello@tinkerpledge.org" className={externalLinkClass}>
                    hello@tinkerpledge.org
                  </a>
                  .
                </p>
              </div>
            </section>

            <section aria-labelledby="changes-to-this-policy">
              <h2
                id="changes-to-this-policy"
                className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Changes to this policy
              </h2>
              <p className="mt-7 text-pretty leading-relaxed text-muted-foreground">
                If the site starts collecting different information or uses a new service, we will update this page and
                change the date at the top.
              </p>
            </section>

            <section aria-labelledby="privacy-contact" className="border-t border-border pt-10">
              <h2
                id="privacy-contact"
                className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Questions about your information
              </h2>
              <p className="mt-7 text-pretty leading-relaxed text-muted-foreground">
                Email{" "}
                <a href="mailto:hello@tinkerpledge.org" className={externalLinkClass}>
                  hello@tinkerpledge.org
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}
