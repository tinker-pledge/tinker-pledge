# Palette Notes

The Tinker Pledge palette should feel warm, grounded, and humane. It should not read like generic AI productivity software, a cold enterprise dashboard, or a decorative sunset theme. The colors come from sunset references, but they are assigned by product role.

## Core Direction

The current direction is **Ember field** from the Orbit sunset palette study. It is the smallest change from the original site: keep the warmth, remove the pink cast, and move the full-bleed dark surfaces toward warm black instead of plum.

The light theme uses cream paper, warm-black ink, a rust action color, and a peach section wash. Workshop owns the dark Golden Hour theme: brown-black ground, lifted warm-black cards, cream text, and gold actions. Podcast moves one step deeper into violet-black, with its own card, body, metadata, and border tones. Orange behaves as light rather than furniture: it appears in the Workshop horizon, orb, and sun-fill action rather than as a generic flat button.

The Workshop is the only route with the full sunset apparatus. Its destination page and homepage preview both stay inside the dark Golden Hour scope. The destination hero may contain one orb, one three-pixel horizon rule, and one sun-fill action above the fold. The Pledge borrows one quieter device: a single three-pixel daylight horizon at the top of both its document surface and homepage preview, with no orb. The Podcast uses rose as punctuation and a paper action on its deeper dark ground. The Pledge uses a warm-black `ink` primary on its document surfaces; other paper routes keep the ordinary rust action.

## Route Theme Invariant

The route association travels with the route wherever it appears, including its social share image. Workshop is dark Golden Hour, Pledge is paper in Full Daylight, Podcast is violet-black After Dark, and Blog is paper with a reading-violet Next Morning marker. A homepage preview must use the same ground, text ladder, action family, and route punctuation as its destination. Navigation and compact route indexes repeat the association with one accessible marker rather than reproducing the full surface.

## Route Chrome

The header and footer are the same warm black on every route. The logotype and geometry do not change; this constant frame is what allows the content surfaces to vary without making the site feel fragmented.

The active primary-navigation item has two cues: a brighter paper label and a two-pixel accessory rule. Workshop uses Golden Hour gold, Pledge uses daylight gold, Podcast uses rose, and Blog uses reading violet. On paper surfaces, Golden Hour ink is the darker Workshop text color and ochre is the darker member of the Pledge gold family. The accessory color confirms the active state but never carries it by itself. Proposal and How It Works belong to the Pledge route family and repeat it through the opening eyebrow and one short accessory hairline. Workplace belongs to Workshop and uses the complete dark Golden Hour surface.

Each primary route uses its accessory in exactly three roles: the opening eyebrow, one rule attached to that eyebrow or hero, and the active navigation marker. On the Pledge, that rule is the daylight horizon at the top of the route. Status dots use semantic status tokens; list numbers, links, and buttons use neutral or action tokens. Even when two tokens share a palette primitive, components consume the token for their job rather than borrowing a route accessory. This keeps route color from becoming decorative wallpaper.

The homepage repeats each route association without changing the page structure. The Workshop preview uses the full dark Golden Hour scope. The Pledge preview repeats its daylight horizon and gold eyebrow. The Podcast preview uses rose on its after-dark surface. The compact route index uses only the accessible member of each family on its sequence number.

The persistent action in the dark header uses a neutral outline. It stays visibly actionable without competing with the route-owned primary below it. Paper-filled actions remain available inside ordinary dark content, and sun-fill remains reserved for the Workshop hero.

Use `surface-podcast` together with `surface-dark` on every content section of the Podcast route. It rebinds the shared night primitives inside that section, so the existing card, copy, border, focus, and interaction roles move together. Separate sections may keep their own dividers and spacing, but the route does not turn back to paper. The homepage uses the same scope only for its Podcast preview. This treatment does not add an orb or player. Those devices belong to a real published episode, not a coming-soon page.

Use `surface-workshop` together with `surface-dark` around the complete Workshop destinations, `/workshops` and `/workplace`, and the homepage preview. It rebinds the shared dark primitives to Golden Hour and changes the semantic primary action to gold, so cards, dividers, buttons, labels, and focus offsets stay in the same world without component-level color fixes. Links to the Workplace route also use Golden Hour so the private format does not lose its Workshop identity in compact contexts.

## Typography Invariant

Every route uses the same type system. Geist carries the complete visual hierarchy: display headings use weight 300, smaller editorial headings use weight 400, and body copy, navigation, labels, and controls use their appropriate Geist weights. Geist Mono carries dates, sequence numbers, ratios, and other figures.

The heading family is enforced centrally in `app/globals.css`; component classes control size and the 300/400 weight distinction. Routes must not introduce their own display face.

## Editorial Labels

Editorial phrases and data labels have separate jobs. Route names, section eyebrows, and short framing phrases use `tinker-eyebrow`: 14px Geist Sans, regular weight, uppercase, with 0.2em tracking. It is warm editorial navigation, not machine output.

Geist Mono is reserved for information that behaves like data. Use `tinker-step-label` for a numbered section title, `tinker-sequence` for a bare sequence number, and `tinker-meta-label` for compact dates, status, or production metadata. This keeps the mono face meaningful instead of turning every uppercase phrase into interface chrome.

Use the shared classes rather than rebuilding their font, size, case, and tracking with utilities. Route accessory colors may override a label's default color, but the type treatment stays invariant.

## Badges And Icon Wells

Sage straw is the quiet grounding color for badges and icon wells. Use `tinker-icon-well` with an explicit square size: 40px with a 20px icon for compact framing, or 48px with a 24px icon for a card-level feature. The shared class supplies the 22.4px control radius, accent surface, primary icon color, centering, and fixed flex behavior. Lucide icons stay at 1.75 stroke weight.

Use `tinker-badge` for a category, compact metric, or actual status—not for an eyebrow or a button. It is a 28px pill with 12px Geist Sans, 14px inline padding, and an eight-pixel internal gap. `tinker-badge__dot` adds the optional six-pixel status cue. Semantic background and foreground utilities may override the sage default when the badge has a different role; route accessory colors should not become generic badge fills.

## Semantic Status

Only two Orbit status families correspond to states the site currently has. Success uses moss for open registration and temporary copy confirmation. Progress uses a restrained rose wash for the Podcast while it is still in development. The badge text and six-pixel dot always name the state; color is never the only cue.

Use `tinker-badge--success` and `tinker-badge--progress` for persistent status chips. A shared Button may set `data-status="success"` after a clipboard action completes, while its text changes to “Copied.” A flat status fill stays inside a 28px chip or control state. It never grows into a card, section, or decorative band.

Orbit also defines information and warning families, but the current site has no UI states that need them. Do not add those tokens until a real state exists. The active status pairs clear AA: success is 11.66:1 on paper, and Podcast progress is 11.71:1 on its dark surface. The light progress pair also clears at 8.38:1 if that state later appears on paper.

## Geometry And Elevation

The Orbit geometry is generous but deliberate. Fields and icon wells use the 22.4px control radius (`rounded-xl` / `--radius-xl`), standard cards use 28.8px (`tinker-card` / `--radius-2xl`), and repeated feature cards use 35.2px (`tinker-feature-card` / `--radius-3xl`). Shared geometry helpers must resolve through those tokens rather than copying their rem values. Buttons, compact filters, and segmented choices are pills. Borders stay at one pixel.

Hero and feature photography uses a 32px frame (`tinker-hero-frame`) with `--elevation-4`. Keep captions outside the frame so attribution remains editorial rather than becoming part of the image treatment. `tinker-photo` replaces blunt grayscale with a very light warm tone; it should support naturally warm photography, not rescue an image that fights the palette.

Not every bordered surface is a card. Timelines, tables, article frames, and divided row lists remain square so the page keeps its editorial structure. Apply a card radius when the surface is a self-contained object that could move as one unit.

Card shadows should feel like warm ambient light, not lifted software panels. Use the shared `--elevation-*` tokens: they combine a wide blur with a negative spread and automatically switch to a near-black tint on dark surfaces. The Workshop orb and sun-fill action keep their own light-source shadows because they are part of the route's sunset apparatus.

## Motion Invariant

Motion is quiet and decelerating: color changes take 150ms, shadow changes take 240ms, and controls move down by one pixel when pressed. Nothing bounces, springs, scales on hover, or sends arrows sliding sideways. The Workshop orb is the only ambient loop; it breathes over 4.2 seconds, never scales beyond 1.035, and stops under `prefers-reduced-motion`.

Use the shared duration, easing, and named-transition tokens in `app/globals.css`. Avoid `transition-all`, because it can animate layout properties accidentally. New interactions should normally change color or shadow; movement needs a functional reason.

## Interaction States

Quiet controls and navigational surfaces use the Orbit state layers rather than inventing a new gray or changing opacity. `--state-hover` is a light warm wash, `--state-press` is a slightly deeper clay wash, and `--state-selected` is a straw-tinted resting state. Dark surfaces override the same semantic tokens with low-light equivalents, so components do not carry separate color literals.

Use `tinker-state-surface` for full-row links and route tiles, `tinker-choice-state` for unselected filter or segmented controls, and `tinker-nav-state` for desktop navigation. Selected filter pills remain solid primary—the stronger state is useful when the control changes visible content—while current navigation keeps its route-color rule and adds the quiet selected wash as a second cue.

Do not place a focusable row flush against an `overflow-hidden` ancestor. The shared focus treatment extends four pixels beyond the control edge (a two-pixel gap plus a two-pixel ring), so a containing surface must either preserve that clearance or allow visible overflow. The homepage explorer allows visible overflow so its bottom-edge links retain the complete keyboard ring. Scrollports always clip at their scrolling edge; give a focusable first or last child four pixels of internal clearance there. The starter-tools filter strip and results list use `py-1` for that purpose. Inside a clipped card, outer grid cells keep the normal card inset—28px on small screens and 36px on large ones—rather than placing text or controls against the rounded edge.

Primary buttons still use the action color, and outlined or ghost buttons consume the quiet state washes. The Pledge is the deliberate exception: its `ink` action uses warm-black ink as the fill so the page reads like an authored document rather than a marketing surface. `darkOutline` is the persistent header treatment: a transparent pill with the quiet-paper boundary and a low-light hover wash. Its boundary clears 6.40:1 against the warm-black header. Paper buttons on dark content stay paper on hover and gain a 20% ember glow; this keeps orange behaving like light. Pressed buttons move down by one pixel. All focus treatments retain a visible offset from the control edge, with paper rings on dark ground and clay rings on paper.

## Controls And Fields

Control heights are semantic tokens rather than one-off measurements: 24px extra-small, 28px small, 32px default, 36px large, 44px fields, 36px filter pills, and 48px calls to action. The shared `Button` sizes resolve through these tokens; a component should override them only when it is explicitly a field-aligned action or a full CTA.

Inputs and selects use `tinker-field`: 44px tall, a 22.4px radius, the stronger input border, 16px horizontal padding, and a card surface. Placeholder text uses the full muted foreground because it is content and must clear normal-text contrast. Focus changes the border to clay and retains the global offset focus ring. `tinker-search` applies the same height and radius to a compound search control while keeping the keyboard focus treatment on its outer boundary.

Use `tinker-filter-pill` for 36px filtering controls and `tinker-segmented-control` for 40px either/or choices. Both remain fully rounded at their height. Labels use `tinker-label` so spacing and weight remain consistent across forms.

## Border Hierarchy

Every line is one pixel, but its color reflects its job. `border` is the full structural line used between page sections and around editorial lists. `--border-card` is a 70% mix used around contained cards, filter pills, preview surfaces, and their internal rows. `--border-soft` is a 60% mix for low-priority separators and decorative boundaries. Fields and outlined buttons continue to use the stronger `input` border so their affordance clears 3:1 against paper.

Use the Tailwind mappings `border-border-card`, `divide-border-card`, and `border-border-soft` instead of inventing opacity modifiers. Dark surfaces override the same semantic line tokens from the warm-black border primitive, so a component can keep its role when it moves between paper and dark ground.

## Interactive Rows

Use `tinker-list-row` for a whole-row link in an editorial list or contained browser. It follows Orbit's row primitive: a 12px internal gap, 20px default vertical padding, one card-strength bottom hairline, and no card radius or shadow. The last row drops its border. Larger editorial rows may override the vertical padding while retaining the structure.

Use `tinker-list-row__arrow` for the row's directional cue. It rests in muted ink and changes to the action color on hover. Make the whole row the link when its contents contain no other interactive elements; this gives the reader one clear target without nesting links.

## Accessibility Audit

Orbit's non-text contrast audit is a build rule, not only palette documentation:

- Outlined actions use `input`, not a decorative hairline. The boundary is 3.10:1 against paper.
- Fields use that same input boundary. Placeholder text uses `muted-foreground`, clearing 6.65:1 on the page ground and 6.99:1 on the card surface.
- Focus rings use a solid clay ring outside a two-pixel paper gap on light surfaces. `surface-dark` changes the semantic ring to paper and the gap to warm black, so ordinary links as well as buttons stay visible without route-specific fixes.
- The Workshop sun-fill action keeps its dedicated three-pixel paper outline outside a three-pixel ground-color gap. A ring touching the gradient would fail against at least one stop.
- Dark body, muted, and quiet copy clear 16.31:1, 11.26:1, and 6.40:1 respectively against the warm-black ground. Do not replace the muted copy with pure white; the lower contrast is intentional and remains well above AA.
- There is no audio player or progress track in the current product. If one is added, its progress extent must use a six-pixel track, a visible thumb or head mark, and a textual time value; rose fill alone cannot carry the state.

## Space And Measure

Spacing follows a four-pixel base. Standard content sections use `tinker-section`: 80px on small screens and 112px from the first wide breakpoint. The paper support routes, the practical How It Works and Proposal surfaces, the Pledge surfaces, the Blog index and article header, and the ordinary sections inside the Workshop, Workplace, and Podcast route scopes share this role. Paper route introductions use `tinker-route-intro`: 80px, then 112px, then 128px on large screens. The extra 16px belongs to the route-opening pause, not ordinary body sections. Immersive route previews use `tinker-route-immersive`: the same 80px and 112px base, then 144px on large screens. This includes the daylight Pledge preview and the after-dark Podcast surfaces. All three roles resolve through the shared `--section-y*` tokens. Compact CTA strips use 64–80px, while asymmetric media heroes keep their spacing explicit. Inside an idea, keep the heading and its first paragraph close—normally 16px. Between major ideas, leave 80–112px. Whitespace carries more of the hierarchy than extra borders or decorative color.

Use 42rem for introductory prose, 48rem for general long-form reading, 56rem for wide display copy, and 64rem for form-heavy surfaces. The `tinker-reading-measure` helper enforces the 48rem column used by the privacy policy and supporting editorial blocks.

Published Blog markdown gets its own sustained-reading treatment: 18px body copy, 1.7 leading, and a 70ch maximum through `tinker-blog-reading-measure`. Mobile keeps the standard page gutter and naturally falls below that maximum. Headings, tables, code, and captions retain their own compact scales inside the prose layer.

The outer page frame is 72rem with a consistent 24px gutter at every breakpoint. Use `tinker-container` for normal route, header, and footer wrappers. Use the gutterless `tinker-frame` only when a full-width split panel supplies its own internal padding.

## Source Tokens

Palette primitives live in [app/globals.css](/Users/abe/tinker-pledge/app/globals.css) and are mapped into standard semantic tokens.

- `--palette-sun-paper`: cream paper used as the global page ground.
- `--palette-warm-paper`: a near-white sheet for cards on paper routes.
- `--palette-lake-shadow`: warm-black ink for primary text.
- `--palette-fired-clay`: the rust action color. Use for buttons, selected states, brand marks, and active emphasis.
- `--palette-dusk-mist`: peach wash for large sections and soft proposal surfaces.
- `--palette-oat-rest`: warm muted neutral for low-priority surfaces.
- `--palette-weathered-ink`: supporting text color.
- `--palette-sage-straw`: pale straw accent for badges, icon wells, and humane signals.
- `--palette-sage-ink`: text on sage accents.
- `--palette-moss-signal`: the success mark for an available or completed state.
- `--palette-moss-wash`: the low-chroma success surface used behind that mark.
- `--palette-clay-border`: structural lines with warmth instead of gray.
- `--palette-input-border`: the stronger field and outlined-control boundary; unlike decorative hairlines, it clears 3:1 against paper.
- `--palette-ember-rose`, `--palette-water-blue`, `--palette-golden-hour`: chart and comparison colors; Golden Hour also supplies the Workshop action and route marker.
- `--palette-golden-hour-ink`: the accessible Golden Hour marker used when the Workshop family appears on paper.
- `--palette-reading-violet`: the Blog's quiet route punctuation on paper.
- `--palette-daylight-gold`: the bright Pledge rule and active-navigation marker.
- `--palette-daylight-ochre`: the accessible Pledge eyebrow color on paper.

Dark-mode primitives:

- `--palette-night-water`: the shared warm-black canvas used by dark mode and the footer.
- `--palette-night-card`: lifted brown-black card surface.
- `--palette-night-paper`: cream text on dark backgrounds.
- `--palette-ember-clay`: ember-orange light used for small type, rules, glows, and gradient stops on dark ground.
- `--palette-ember-ink`: text on dark-mode primary action.
- `--palette-dusk-plum`: dark-mode section surface.
- `--palette-oat-dark`, `--palette-oat-muted`: muted dark surfaces and copy.
- `--palette-sage-shadow`: dark-mode accent.
- `--palette-night-border`: dark structural lines.
- `--palette-workshop-night`, `--palette-workshop-card`, `--palette-workshop-paper`, `--palette-workshop-muted`, `--palette-workshop-quiet`, and `--palette-workshop-border`: the complete Golden Hour ladder for Workshop surfaces.
- `--palette-podcast-night`: the deeper violet-black ground for Podcast sections.
- `--palette-podcast-card`: the low-light violet card surface inside that ground.
- `--palette-podcast-paper`, `--palette-podcast-muted`, `--palette-podcast-quiet`: the Podcast heading, body, and metadata ladder.
- `--palette-podcast-border`: the violet structural line used within Podcast sections.

Workshop gradient primitives:

- `--gradient-workshop-orb`: the complete gold-to-ember light source.
- `--gradient-workshop-orb-halo`: the orb's ambient bloom.
- `--gradient-workshop-horizon`: a three-pixel route marker, used once in the Workshop hero.
- `--gradient-pledge-horizon`: the paper-to-gold daylight rule used once at the top of the Pledge.
- `--gradient-sun-fill`: the orb flattened into a pill. It is reserved for a primary Workshop action at least 40px tall and always uses dark ink.

## Semantic Mapping

Use semantic tokens in components. Do not reach directly for palette primitives unless building a palette test surface.

- `background`: page canvas.
- `foreground`: primary text.
- `card`: contained surfaces and repeated items.
- `primary`: actions, selected controls, brand mark, important numeric emphasis.
- `secondary`: large quiet section bands and proposal surfaces.
- `muted`: resting/low-priority surfaces.
- `accent`: badge and icon-well backgrounds.
- `border` and `input`: structure and fields.
- `ring`: focus states.

## Reference Image Guidance

Ember field takes its cues from the last light after sunset: warm black under orange, gold, and rust. Paper sections stay close to white so the site remains approachable and practical. Dark ground belongs to the Workshop's Golden Hour identity, the Podcast's deeper after-dark chapter, and the constant site frame rather than becoming the whole interface.

Keep flat orange out of buttons, cards, and status dots. Large sections should use paper, peach wash, or warm black. Rose stays available for charts, the Podcast accessory, a 28px progress chip, and the bridge between rust and gold inside the Workshop gradients. It never becomes a full-bleed surface.

## Palette Testing Page

Use `/palette` during design work:

- source palette swatches show primitive meaning,
- semantic swatches show how the app consumes color,
- contrast cards show common foreground/background pairings,
- component samples show real controls and panels,
- chart bars show data colors,
- the dark preview checks whether the warm-black ground and ember actions hold together.

Run the local app and open:

```bash
pnpm dev
```

[http://localhost:3000/palette](http://localhost:3000/palette)

## Change Rules

When adjusting the palette:

- Keep `primary` rust-like and action-oriented.
- Reserve `sun` buttons for the Workshop on a dark ground; use paper buttons for ordinary work on dark surfaces.
- Keep the Workshop orb and Workshop horizon coupled to the sun-fill action. The Pledge horizon is its one documented exception and never brings an orb with it.
- Keep the light theme close to paper, not cream-heavy.
- Use straw or oat for grounded rest, not more orange.
- Use warm black for depth and dark mode rather than as the main page canvas.
- Check `/palette` at mobile and desktop widths.
- Re-check contrast for button text, body text, muted text, and icon wells.
- Avoid one-note palettes dominated by a single hue family.

## Verification

The core light-theme pairs were checked against the WCAG contrast formula:

| Pair | Contrast |
| --- | ---: |
| Foreground on background | 16.23:1 |
| Muted foreground on muted | 6.46:1 |
| Primary foreground on primary | 5.16:1 |
| Accent foreground on accent | 9.87:1 |
| Secondary foreground on secondary | 13.81:1 |
| Reading violet on page ground | 7.21:1 |
| Daylight ochre on page ground | 4.73:1 |
| Daylight gold on night chrome | 11.21:1 |
| Dark foreground on dark background | 16.31:1 |
| Dark primary foreground on dark primary | 16.31:1 |
| Podcast paper on after-dark ground | 16.35:1 |
| Podcast body on after-dark ground | 12.73:1 |
| Podcast metadata on after-dark ground | 7.33:1 |
| Ink on sun-fill, hottest stop | 6.66:1 |

These pairs clear WCAG 2.1 AA for normal text. Text on the primary clay surface should use at least 85% opacity;
lower opacity variants are reserved for borders and decoration.

For code-level checks:

```bash
pnpm exec tsc --noEmit
```

If `pnpm exec` tries to modify dependencies in a non-interactive shell, use the local TypeScript binary with a temporary build-info file:

```bash
./node_modules/.bin/tsc --noEmit --tsBuildInfoFile /private/tmp/tinker-pledge-tsbuildinfo
```
