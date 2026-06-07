# The Tinker Pledge

The Tinker Pledge is an open-source project for making personal AI fluency a workplace benefit.

The core idea: employers can reimburse a small personal AI budget so people build confidence through low-stakes use in their own lives. The work benefit follows from the fluency.

Live site: [tinkerpledge.org](https://tinkerpledge.org)

## Project Status

This is being built in the open. The current site includes:

- A short homepage explaining the pledge.
- A practical "how it works" guide.
- A starter AI tools list.
- A proposal generator for bringing the idea to a workplace.
- A manifesto and sharing flow.

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
- `app/how-it-works/page.tsx`: implementation guide and starter tools section.
- `app/proposal/page.tsx`: proposal generator.
- `app/manifesto/page.tsx`: manifesto and pledge sharing.
- `data/starter-tools.json`: starter tool catalog.
- `components/tools-section.tsx` and `components/tools-browser.tsx`: tools list UI.
- `AGENTS.md`: project guidance for AI coding agents and contributors.

## Contributing Notes

Keep the project credible and transparent:

- Do not invent testimonials, customer quotes, adoption metrics, or ROI claims.
- Keep tool entries compact and familiar.
- Avoid exact pricing, plan names, or privacy claims unless they were just verified from primary sources.
- Keep guardrails clear: personal tools are for personal practice unless a company explicitly approves them for company data.
- Prefer issues for discussion before broad product or copy changes.
