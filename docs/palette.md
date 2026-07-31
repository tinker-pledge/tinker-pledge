# Palette Notes

The Tinker Pledge palette should feel warm, grounded, and humane. It should not read like generic AI productivity software, a cold enterprise dashboard, or a decorative sunset theme. The colors come from sunset references, but they are assigned by product role.

## Core Direction

The light theme is built around a quiet peach page ground, a clay action color, a soft dusk section wash, a pale sage accent, and dark water ink for text. The effect should be practical and personal: generous enough for a people-centered benefit, restrained enough for a credible workplace proposal.

The dark theme draws from the later blue-hour reference: deep water, low shoreline contrast, and ember light. It should be used as depth and contrast, not as the main brand impression.

## Source Tokens

Palette primitives live in [app/globals.css](/Users/abe/tinker-pledge/app/globals.css) and are mapped into standard semantic tokens.

- `--palette-sun-paper`: quiet peach light from the references. Used as the global page ground.
- `--palette-warm-paper`: a warmer sheet for cards and content panels.
- `--palette-lake-shadow`: dark shoreline ink for primary text.
- `--palette-fired-clay`: the main action color. Use for buttons, selected states, brand marks, and active emphasis.
- `--palette-dusk-mist`: lavender-pink evening wash for large sections and soft proposal surfaces.
- `--palette-oat-rest`: warm muted neutral for low-priority surfaces.
- `--palette-weathered-ink`: supporting text color.
- `--palette-sage-straw`: grounded accent for badges, icon wells, and humane signals.
- `--palette-sage-ink`: text on sage accents.
- `--palette-clay-border`: structural lines with warmth instead of gray.
- `--palette-ember-rose`, `--palette-water-blue`, `--palette-golden-hour`: chart and comparison colors.

Dark-mode primitives:

- `--palette-night-water`: dark canvas inspired by blue-hour water.
- `--palette-night-card`: warm dark card surface.
- `--palette-night-paper`: soft text on dark backgrounds.
- `--palette-ember-clay`: dark-mode primary action.
- `--palette-ember-ink`: text on dark-mode primary action.
- `--palette-dusk-plum`: dark-mode section surface.
- `--palette-oat-dark`, `--palette-oat-muted`: muted dark surfaces and copy.
- `--palette-sage-shadow`: dark-mode accent.
- `--palette-night-border`: dark structural lines.

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

The bright sunset references provide the brand warmth:

- peach and coral light for the page atmosphere,
- fired clay for action,
- dusty pink/lavender for section separation,
- sage/straw for earthiness.

The blue-hour water image is useful, but it should not dominate the light theme. It contributes:

- deep water and blue-black for dark mode,
- blue-hour water for chart contrast,
- ember horizon tones for secondary comparison colors,
- mauve haze for quiet supporting surfaces.

Do not turn the homepage or primary flows into a dark cinematic interface. Tinker Pledge should still feel approachable, practical, and human.

## Palette Testing Page

Use `/palette` during design work:

- source palette swatches show primitive meaning,
- semantic swatches show how the app consumes color,
- contrast cards show common foreground/background pairings,
- component samples show real controls and panels,
- chart bars show data colors,
- the dark preview checks whether the blue-hour tones work after sunset.

Run the local app and open:

```bash
pnpm dev
```

[http://localhost:3000/palette](http://localhost:3000/palette)

## Change Rules

When adjusting the palette:

- Keep `primary` clay-like and action-oriented.
- Keep the light theme warm enough to feel humane.
- Use sage or oat for grounded rest, not more orange.
- Use blue-hour colors for depth, charts, and dark mode rather than for main action.
- Check `/palette` at mobile and desktop widths.
- Re-check contrast for button text, body text, muted text, and icon wells.
- Avoid one-note palettes dominated by a single hue family.

## Verification

The core light-theme pairs were checked against the WCAG contrast formula:

| Pair | Contrast |
| --- | ---: |
| Foreground on background | 14.20:1 |
| Muted foreground on background | 6.79:1 |
| Primary text on background | 5.04:1 |
| Primary foreground on primary | 5.27:1 |
| Accent foreground on accent | 10.64:1 |
| Secondary foreground on secondary | 10.30:1 |

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
