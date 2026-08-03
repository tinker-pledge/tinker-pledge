# The Tinker Pledge

The Tinker Pledge is an open-source community project for helping more people build real AI fluency through practice.

The work starts with a public hands-on workshop: bring a real problem or workflow and work on it alongside
Abhi and Eva. The employer pledge extends that practice by helping people keep experimenting with AI in their
personal lives. A podcast about how people are actually living with AI is in development.

Live site: [tinkerpledge.org](https://tinkerpledge.org)

## Project Status

This is being built in the open. The current site includes:

- A short homepage connecting the three projects.
- An About page explaining the project's origin and introducing its co-creators.
- A workshops page with upcoming and past events.
- A page for bringing a workshop to a small or midsize business.
- A transparent holding page for the podcast in development.
- A practical "how it works" guide.
- A starter AI tools list.
- A proposal generator for bringing the idea to a workplace.
- A one-page pledge and sharing flow.

The curated tool list and starter policy examples are still evolving.

## Join The Conversation

Please use [GitHub Issues](https://github.com/tinker-pledge/tinker-pledge/issues) for:

- Tool suggestions for the starter list.
- Policy examples and reimbursement ideas.
- Copy feedback.
- Design or accessibility issues.
- Bug reports.
- Questions about how to adapt the pledge at a real company.

If you are not sure whether something belongs in the repo, open an issue first. That keeps the discussion public and easier for others to build on.

## Local Development

Install dependencies:

```bash
pnpm install --frozen-lockfile
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Run a TypeScript check:

```bash
pnpm exec tsc --noEmit
```

Note: `pnpm build` may need network access because the app uses `next/font` with Google Fonts.

## Project Structure

- `app/page.tsx`: homepage flow.
- `app/about/page.tsx`: project origin and registry-backed co-creator introductions.
- `app/workshops/page.tsx`: public workshops and event details.
- `app/workplace/page.tsx`: paid workplace workshop format.
- `app/podcast/page.tsx`: podcast direction and host context.
- `app/how-it-works/page.tsx`: implementation guide and starter tools section.
- `app/proposal/page.tsx`: proposal generator.
- `app/pledge/page.tsx`: one-page pledge and sharing.
- `app/palette/page.tsx`: palette testing page for color roles, pairings, and UI samples.
- `data/workshops.ts`: shared workshop dates, locations, and event links.
- `data/starter-tools.json`: starter tool catalog.
- `components/tools-section.tsx` and `components/tools-browser.tsx`: tools list UI.
- `docs/palette.md`: palette rationale, token roles, reference guidance, and verification notes.
- `docs/site-direction.md`: the three-chapter landing-page concept and the reference principles behind it.
- `AGENTS.md`: project guidance for AI coding agents and contributors.

## Contributing Notes

Keep the project credible and transparent:

- Do not invent testimonials, customer quotes, adoption metrics, or ROI claims.
- Keep tool entries compact and familiar.
- Avoid exact pricing, plan names, or privacy claims unless they were just verified from primary sources.
- Keep guardrails clear: personal tools are for personal practice unless a company explicitly approves them for company data.
- Prefer issues for discussion before broad product or copy changes.
