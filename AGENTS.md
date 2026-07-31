# Tinker Pledge Agent Notes

## Project Shape

- This is a Next.js App Router site using React, TypeScript, Tailwind CSS, lucide-react icons, and the local `Button` wrapper in `components/ui/button.tsx`.
- Shared chrome lives in `app/layout.tsx`: `BuildingBanner`, `SiteHeader`, page content, then `SiteFooter`.
- Main routes:
  - `/` is the short persuasive homepage.
  - `/how-it-works` is the practical launch guide, including the starter tools list.
  - `/proposal` hosts the proposal generator.
  - `/manifesto` hosts the manifesto and fuller pledge/share widget.
- Public share URLs should use `https://tinkerpledge.org`.
- The open-source repo is `https://github.com/tinker-pledge/tinker-pledge`.

## Product And Copy Direction

- The core framing: employers reimburse a personal AI budget so people can build fluency through low-stakes use in their own lives.
- Keep the tone warm, practical, and credible. Avoid sounding like generic AI productivity marketing.
- Current implementation framing is "simple reimbursement against a curated starter list", not payroll-first and not "no approvals for anything".
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
- Keep homepage flow tight: hero, thesis, how it works, business case, share strip, CTA.
- Keep action-heavy experiences on their own pages instead of stuffing everything into the homepage.
- Do not nest cards inside cards unless there is a clear repeated-item or tool-surface reason.

## Development Commands

- Install dependencies with `pnpm install --frozen-lockfile`.
- Run type checks with `pnpm exec tsc --noEmit`.
- `pnpm build` may need network access because `next/font` fetches Google Fonts.
- `pnpm lint` currently calls `eslint .`, but `eslint` is not declared in `package.json`; fix the lint setup before treating it as a reliable check.

## Editing Notes

- Preserve unrelated worktree changes. This repo is being edited live.
- Keep copy changes narrow and consistent across homepage, proposal generator, manifesto, and how-it-works pages.
- When adding new public-facing claims about tools, pricing, policies, or tax/payroll handling, verify them first or keep the copy intentionally general.
