# Tinker Pledge Agent Notes

## Project Shape

- This is a Next.js App Router site using React, TypeScript, Tailwind CSS, lucide-react icons, and the local `Button` wrapper in `components/ui/button.tsx`.
- Shared chrome lives in `app/layout.tsx`: `SiteHeader`, page content, then `SiteFooter`.
- Main routes:
  - `/` connects the workshop, pledge, and podcast, with the workshop as the primary way into the project.
  - `/workshops` lists public workshops and upcoming registration.
  - `/workplace` explains the paid workshop format for teams.
  - `/how-it-works` is the practical guide to the optional employer-funded personal AI benefit, including the starter tools list.
  - `/proposal` hosts the proposal generator for advocating for that benefit at work.
  - `/pledge` hosts the manifesto and fuller pledge/share widget.
  - `/podcast` is the transparent holding page for the podcast in development.
  - `/blog` publishes field notes from the work.
  - `/contact` routes workshop, podcast, and general inquiries.
  - `/about` explains the project origin and introduces Eva and Abhi side by side.
  - `/privacy` documents the site's current data handling and third-party services.
- Creator presentation on `/about` comes from `content/authors.ts`; do not duplicate names, roles, bios, or profile links in the route.
- Individual public author profile routes are not part of the route model; keep blog attribution registry-backed without linking to `/authors/*`.
- Public share URLs should use `https://tinkerpledge.org`.
- The open-source repo is `https://github.com/tinker-pledge/tinker-pledge`.

## Product And Copy Direction

- The core offering is the hands-on workshop: people bring one real problem, work on it with support, and leave better able to keep building on their own.
- Public workshops are the primary way into the project. Paid workplace workshops are a secondary offering that helps support the public work.
- The Tinker Pledge is a complementary advocacy initiative, not the primary product. It asks employers to offer a small personal AI budget as an optional benefit so people can keep practicing through low-stakes use in their own lives after the workshop or independently.
- The podcast is a supporting editorial project about what people tried, questioned, kept, or changed after their first attempts with AI.
- Do not recast the site as pledge-first or lead the homepage with employer reimbursement. Connect the three projects through the broader idea that AI fluency grows through repeated, hands-on practice.
- Keep the tone warm, practical, and credible. Avoid sounding like generic AI productivity marketing.
- When discussing the pledge, use the current implementation framing: "simple reimbursement against a curated starter list", not payroll-first and not "no approvals for anything".
- Do not invent testimonials, customer quotes, adoption metrics, or ROI claims. The project is pre-launch/open-in-progress.
- If proof is needed, use transparent language such as "starter", "proposal", "default", "next", or "in progress".
- Do not re-add a full "What it unlocks" examples grid unless it becomes real testimonials or clearly labeled examples.
- Guardrail language matters: personal tools are for personal practice unless a company explicitly approves them for company data.

## Tools List

- Starter tools data lives in `data/starter-tools.json`.
- The browser UI is split between `components/tools-section.tsx` and `components/tools-browser.tsx`.
- Tool entries should stay compact:
  - `name`
  - `categoryId`
  - `href`
  - `use`
  - `tags`
- Prefer familiar starter tools over a giant directory.
- Do not add exact pricing, plan names, or privacy claims unless they have just been verified from current primary sources.
- Keep categories search-friendly and avoid duplicating categories unless the tool list is large enough to need it.

## Blog Content

- Posts are markdown files at `content/blog/<slug>.md`. The filename is the URL slug and must be lowercase kebab-case.
- Required frontmatter: `title`, `description`, `publishedAt` (YYYY-MM-DD), `authors` (array of ids from `content/authors.ts`).
- Optional frontmatter: `updatedAt`, `tags`, `draft`.
- Post bodies start at `##`. The `h1` is generated from `title` — never write one in the body.
- Raw HTML in markdown is dropped by the renderer. Markdown and GFM only.
- An unknown author id, a missing field, or a malformed date fails the build and names the file.
- Drafts (`draft: true`) are excluded from `/blog`, the sitemap, the feed, and static params, but still render at their URL in `next dev`.

## UI Conventions

- Match the existing restrained, warm design language.
- Use lucide-react icons where an icon is needed.
- Use the existing `Button` component and its `render={<a ... />}` pattern for styled links.
- Keep homepage flow tight and workshop-led: umbrella hero, three-part project index, public workshop, complementary pledge, then podcast.
- Keep public workshop registration as the primary homepage action. Employer proposal and pledge actions should remain clearly secondary.
- Keep action-heavy experiences on their own pages instead of stuffing everything into the homepage.
- Do not nest cards inside cards unless there is a clear repeated-item or tool-surface reason.

## Route Color Associations

- A route's color association travels with it everywhere it appears: destination page, homepage preview, active navigation marker, compact route index, and related routes. Do not give the same route a different visual identity in a different context.
- **Workshop — Golden Hour**
  - Dark warm-black ground, cream text, Golden Hour gold actions and markers, with ember used inside the horizon/orb/sun-fill apparatus.
  - Use `surface-dark surface-workshop` for the complete `/workshops` and `/workplace` pages and the homepage Workshop section. Do not switch later Workshop sections back to paper.
  - The `/workshops` and `/workplace` Open Graph images also use the dark Golden Hour system; do not fall back to the generic paper share card.
  - Links to `/workplace` use the Golden Hour action color so the private format remains visibly part of Workshop.
- **Pledge — Full Daylight**
  - Cream paper, warm-black ink, the daylight gold horizon, and accessible ochre labels. Primary document actions use the warm-black `ink` treatment.
  - Repeat the daylight horizon and gold eyebrow on `/pledge` and the homepage Pledge section.
  - `/how-it-works` and `/proposal` remain paper support routes and carry Pledge-family punctuation rather than a new theme.
- **Podcast — After Dark**
  - Violet-black ground, light paper text, rose punctuation, violet cards and borders, and paper primary actions.
  - Use `surface-dark surface-podcast` across every section of `/podcast` and on the homepage Podcast section. Do not revert the destination page to paper between sections.
- **Blog — Next Morning**
  - Paper reading surfaces with reading-violet punctuation. Apply the same marker to the Blog index, article headers, active navigation, and any future Blog preview.
  - Blog remains a reading surface; the violet association is punctuation, not a full-bleed violet background.
- The homepage umbrella hero stays on neutral paper. Its compact route index repeats only the accessible marker from each route family.
- The header and footer stay warm black on every route. Their constant frame should not inherit the current page's full surface theme.
- Route scopes and palette tokens live in `app/globals.css`; the implementation contract and contrast notes live in `docs/palette.md`. Extend those shared scopes instead of adding one-off page colors.

## Development Commands

- Install dependencies with `pnpm install --frozen-lockfile`.
- Run type checks with `pnpm exec tsc --noEmit`.
- `pnpm build` may need network access because `next/font` fetches Google Fonts.
- `pnpm lint` currently calls `eslint .`, but `eslint` is not declared in `package.json`; fix the lint setup before treating it as a reliable check.

## Editing Notes

- Preserve unrelated worktree changes. This repo is being edited live.
- Keep copy changes narrow and consistent across the homepage, workshops, workplace, podcast, proposal generator, Pledge, and how-it-works pages.
- When adding new public-facing claims about tools, pricing, policies, or tax/payroll handling, verify them first or keep the copy intentionally general.
