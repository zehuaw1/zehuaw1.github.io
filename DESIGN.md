---
name: Zehua Wang Portfolio
description: A quiet atelier for academic work — cream paper, a single warm-clay accent, Newsreader serif throughout.
colors:
  cream-paper: "#faf9f7"
  warm-vellum: "#f5f3f0"
  document-white: "#ffffff"
  soft-pencil: "#e5e5e5"
  whisper-rule: "#f0f0f0"
  type-black: "#111111"
  body-ink: "#333333"
  annotation-gray: "#777777"
  warm-clay: "#da7756"
  deep-clay: "#c4613f"
  clay-wash: "#fdf2ee"
typography:
  display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 8vw, 5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-large:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
  cjk-display:
    fontFamily: "STFangsong, FangSong, FangSong_GB2312, serif"
    fontWeight: 400
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  xxl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.warm-clay}"
    textColor: "{colors.document-white}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.deep-clay}"
    textColor: "{colors.document-white}"
  card:
    backgroundColor: "{colors.document-white}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  card-tag-button:
    backgroundColor: "transparent"
    textColor: "{colors.annotation-gray}"
    rounded: "{rounded.xs}"
    padding: "0.25rem 0.6rem"
  card-tag-button-hover:
    textColor: "{colors.warm-clay}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.annotation-gray}"
    padding: "0.35rem 0.7rem"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.type-black}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.annotation-gray}"
---

# Design System: Zehua Wang Portfolio

## 1. Overview

**Creative North Star: "The Quiet Atelier"**

A craftsman's studio for academic work. The page reads as taste-as-credential: every detail is chosen, nothing is decorative, and a single warm signature runs through it like the artisan's mark on the bottom of a piece. The dominant note is restraint; warmth is what keeps the restraint from going cold. Cream paper instead of clinical white, Newsreader serif instead of system sans, one accent (Warm Clay) instead of a palette, generous whitespace instead of cards stacked for density.

The atelier metaphor sets two rules at once. **Confidence without pageantry**: the credentials (IPhO Gold, MIT, advisors, papers) are real, so they are set well and left to speak. No badge walls, no animated counters, no SaaS hero-metric blocks. **The page is a worldview, not a CV**: editorial typography, the opinionated tagline highlight ("AI the way a physicist would"), the Chinese name 王泽华 set in serif, and the personal cityscape avatar carry the thinking, not just the résumé.

This system explicitly rejects the stiff CS-faculty template (Times New Roman, blue underlined links, .edu-1998 hierarchy), the over-designed agency portfolio (custom cursors, scroll-jacking, autoplay reels), the SaaS-cream + magenta-accent template (gradient mesh hero, glassmorphic stat cards, hero-metric blocks), and the generic Astro-academic-starter look (template-shaped, no fingerprint).

**Key Characteristics:**
- Light-only, cream paper background with three barely-visible radial color blooms (warm orange, blue, pink, all <40% alpha) for atmosphere.
- Single warm accent (Warm Clay) used on ≤10% of any screen.
- Newsreader serif throughout, including buttons and nav. The site has *no* dependence on a sans-serif body type.
- Atmospheric, never structural elevation: shadows suggest paper sitting on paper, not floating above it.
- Generous spacing (sections at 4rem/6rem padding, hero at 100vh) with mono accents on dates as the only break in the serif rhythm.

## 2. Colors: The Atelier Palette

A warm-neutral foundation in three steps of cream, type-blacks anchored on near-black, and a single signature accent. Eleven tokens total. No secondary accent, no tertiary; the singularity of Warm Clay is the point.

### Primary

- **Warm Clay** (`#da7756`, ≈ `oklch(66% 0.13 35)`): the signature accent. Used as the navbar CTA fill, the highlighted phrase in the hero tagline, the underline color on prose links, the selection background (at 100% wash), and project-card hover borders. Never used for body type, never used as a section background. Its rarity is what gives it weight.
- **Deep Clay** (`#c4613f`, ≈ `oklch(58% 0.13 35)`): the hover-state of Warm Clay. Used only on the navbar CTA hover; nowhere else.
- **Clay Wash** (`#fdf2ee`, ≈ `oklch(97% 0.015 35)`): the 8% tint used for `::selection` and the very rare warm-tint background. This is the only color-tinted background in the system.

### Neutral

- **Cream Paper** (`#faf9f7`): the dominant page background. Layered with three radial gradient blooms at <40% alpha (warm orange in the upper-left, soft blue mid-right, faint pink at the bottom) that together read as ambient warmth, not as a "gradient hero."
- **Warm Vellum** (`#f5f3f0`): a one-step-warmer cream reserved for secondary surfaces. Currently used sparingly.
- **Document White** (`#ffffff`): the card surface. The one place pure white exists in the system. It works because the cream paper around it makes it read as "a fresh sheet on the desk," not as clinical UI white.
- **Soft Pencil** (`#e5e5e5`): the standard 1px border on cards, navbar, and section dividers.
- **Whisper Rule** (`#f0f0f0`): a quieter divider for inline rules between news items and inside cards. Always 1px.
- **Type Black** (`#111111`): primary text and active nav. The site does not use pure `#000`.
- **Body Ink** (`#333333`): body prose. Slightly softer than primary; reads as reading-temperature, not as headline-temperature.
- **Annotation Gray** (`#777777`): metadata, dates, tags, default nav links, hover targets. The "marginal pencil" color.

### Named Rules

**The One-Voice Rule.** The accent appears on no more than ~10% of any given screen. One CTA, one highlighted phrase, one underline color, one hover border. If a second use is being considered, it earns its place by displacing one of the existing four — never by adding to them.

**The Cream-First Rule.** The page is cream, not white. New surfaces default to `cream-paper` or `warm-vellum`. `document-white` is a *card* color, not a *page* color. If a new surface wants to be white, it has to be a card or it has to be reconsidered.

**The Single-Hue Rule.** No second accent. No status colors (green for "shipped", red for "broken"). When the system needs to communicate state, it uses weight, position, type, or annotation gray — not a new hue.

## 3. Typography

**Display Font:** Newsreader (with Georgia, Times New Roman fallback)
**Body Font:** Newsreader (same family — the site is serif end-to-end)
**Label Font:** Newsreader, small caps via uppercase + letter-spacing
**Mono Font:** JetBrains Mono (with Fira Code, ui-monospace fallback) — used only for dates and the "last updated" timestamp.
**CJK Display:** STFangsong / FangSong — used only for the Chinese name 王泽华 in the bio. Its presence is part of the page's signature.

**Character:** A single editorial serif carries every weight class. Newsreader is the rare contemporary serif that holds at hero scale (800 weight, -0.04em tracking) *and* at body scale (400 weight, 1.1rem). Setting nav and buttons in serif is the unusual move; it's what keeps the page from reading as a sans-serif app shell with serif headlines pasted in.

### Hierarchy

- **Display** (Newsreader 800, `clamp(3rem, 8vw, 5rem)`, line 1, tracking -0.04em): hero name only. One use per page.
- **Headline** (Newsreader 700, ~1.875rem, line 1.2, tracking -0.02em): section titles via `<SectionHeading>`. About / Featured Projects / News / project detail title.
- **Title** (Newsreader 700, ~1.2rem, line 1.35, tracking -0.02em): card titles, subsection headings.
- **Body** (Newsreader 400, 1.1rem, line 1.6): default body type, navbar links, hero tagline, card descriptions.
- **Body-Large** (Newsreader 400, 1.2rem, line 1.75): the `.prose-content` class. Used on the bio and project detail prose. Cap line length around 65–75ch when used; the current bio uses `max-width: 48rem` which is close.
- **Label** (Newsreader 600, 0.78rem, tracking 0.08em, uppercased): the `.subsection-title` treatment ("Research Interests", "Beyond Research"). Annotation Gray. Functions as a small-caps mark.
- **Mono** (JetBrains Mono 500, 0.78rem): dates only. News dates, card years, "Last updated" footer. Mono carries the data layer; serif carries the prose layer.

### Named Rules

**The Serif-End-to-End Rule.** Every readable surface inherits Newsreader by default. Buttons, nav links, breadcrumbs, tags — all serif. The `--font-sans` token is declared in the theme but unreached in any selector; do not start using it. Reaching for Inter sans by reflex is the most common way to break the atelier voice.

**The Mono-for-Data Rule.** JetBrains Mono is the only break in the serif rhythm, and it appears only on dates and timestamps. Mono is *not* used for code-feel decoration, technical labels, or project tags. The signal "this is a piece of indexable data" is the entire reason mono exists in this system.

**The Marginal Annotation Rule.** Labels (uppercased small Newsreader 600 in Annotation Gray) function as marginalia: subsection markers, "TECHNOLOGIES & TOPICS" lead-ins, "BEYOND RESEARCH" headings. They mark, they don't shout. Never use Display or Headline weights to do a Label's job.

## 4. Elevation

This system uses subtle, atmospheric shadows. Cards do not float; they sit on cream paper with a hint of soft contact shadow underneath, the way a fresh sheet of paper would on a wooden desk. Shadows lift slightly on hover (`translateY(-1px)` plus a softer-but-larger shadow), suggesting the page picking up the sheet, not launching it into the air.

There is no structural shadow vocabulary (no "elevation 1, 2, 3"). Depth is conveyed by paper-on-paper layering and by the absolute restraint of a single soft shadow recipe.

### Shadow Vocabulary

- **Card rest** (`box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`): the default contact shadow. Almost-not-there. The page feels flat at first glance; the shadow is what you notice on second look.
- **Card hover** (`box-shadow: 0 8px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.06)`): the softer-but-larger lift. Pairs with `transform: translateY(-1px)` and a 0.2s ease transition.
- **Avatar rest** (`box-shadow: 0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)`): the only place a "structural" shadow earns its keep — the round profile photo against cream paper. The 3px white border + 1px outline create the magazine-portrait halo.
- **Avatar hover** (`box-shadow: 0 16px 40px rgba(0,0,0,0.16), 0 6px 16px rgba(0,0,0,0.08)`, `translateY(-6px)`): the largest motion in the system. Reserved for the avatar specifically.

### Named Rules

**The Atmospheric-Never-Structural Rule.** Shadows are diffuse, low-contrast, and short. They suggest *contact* with paper, not *elevation* above paper. If a new component needs a shadow that reads as "this is floating two stories above the page," it doesn't belong here — the answer is a border, a tint, or nothing.

**The Hover-Doubles-Down Rule.** Every shadow has exactly one variation: a softer-but-larger hover state. No three-step elevation systems. If a state change needs more contrast than that, use Warm Clay on the border or change the typography weight.

## 5. Components

Components are **refined and quiet**. They recede so the content can speak. Hairline borders, restrained type, hover effects measured in opacity and 1px-2px lift rather than color floods. The cards have edges, not frames.

### Buttons

- **Shape:** small rounded rectangles (`rounded.sm` = 6px) for the primary CTA; smaller still (`rounded.xs` = 4px) for in-card link buttons. No fully-pilled buttons; no zero-radius brutalist buttons.
- **Primary** (the navbar `Download CV`): Warm Clay fill, Document White text, 0.4rem × 1rem padding, font-weight 500, 0.85rem size. Hover transitions to Deep Clay at 0.15s. This is the *only* solid-fill button in the system.
- **Card-tag button** (project card link buttons, project-detail link buttons): transparent background, 1px Soft Pencil border, Annotation Gray text, 4px radius, small (~0.75rem). Hover: text and border both transition to Warm Clay. The hover is the moment the button declares itself.
- **Hero text-link** (the "About me →" / "CV" pair under the hero tagline): no background, no border, Body Ink color, 0.9rem, font-weight 500. Hover lifts to Type Black. This is the dominant button pattern outside the CTA — text with intent, not chrome.

### Cards

- **Corner Style:** 8px (`rounded.md`). Gentle, never sharp.
- **Background:** Document White on cream paper. The contrast does the work; no border tint is needed.
- **Border:** 1px Soft Pencil. The border is structural — without it, the white card would dissolve into the cream.
- **Shadow:** Card rest at all times; card hover on `:hover`. See Elevation.
- **Internal Padding:** 1.5rem on all sides (`spacing.md`). Tight enough that small project cards stay compact, generous enough that prose can breathe.
- **Hover:** `translateY(-1px)` + shadow grows. No color shift on the card body itself.

### Tags

- **Style:** Pure typographic. No background, no border, no pill. Annotation Gray, 0.72–0.75rem, font-weight 400, optionally with `font-feature-settings` left default. The site treats tags like printed marginalia, not like database chips.
- **States:** none. Tags do not hover, do not select. Project filtering is handled by a separate `<ProjectFilter>` island, where the filter pills are buttons with affordance — but read-only tags inside cards stay flat.

### Inputs

The current site has no text inputs (no contact form, no search). When inputs are introduced, follow the card pattern: 1px Soft Pencil border, Document White background, 6px radius, focus ring = 2px Type Black at 2px offset (the global focus-visible rule), no glow, no accent fill. The input should look like a card you can type into.

### Navigation

- **Style:** Sticky top, full-bleed background = Cream Paper, 1px Soft Pencil bottom border, 60px height, max-width 72rem inner.
- **Logo / wordmark:** "Zehua Wang" in Newsreader 600 at 0.95rem, tracking -0.02em, Type Black. Hover drops opacity to 0.7.
- **Links:** Newsreader 400, 0.875rem, Annotation Gray, padding 0.35 × 0.7rem, gap 0.25rem. No underlines.
  - **Hover:** color → Type Black, no underline, no background.
  - **Active:** color → Type Black, font-weight → 600. The active state uses *weight*, not color or underline.
- **CTA:** Primary button, see above. Visible from `≥768px`; collapses into the mobile menu below that.
- **Mobile:** hamburger reveals a vertical list with the same link styling, separated from the navbar by a 1px Soft Pencil rule.

### Signature: The Hero Avatar

The round profile photo on the homepage is the system's most-elevated single element. 360px diameter, `border-radius: 50%`, `object-fit: cover`, with a 3px Cream Paper inner border + 1px Soft Pencil outline + Avatar rest shadow. The triple-stroke creates a magazine-portrait halo against the cream page. On hover, it lifts 6px and the shadow doubles in size. This is the one place in the system where motion is "warm" rather than "atmospheric"; it is intentional and should not be replicated on other components.

### Signature: The Highlighted Phrase

The hero tagline contains a phrase wrapped in `<span class="hero-highlight">` (driven by `siteConfig.highlightWords`). Warm Clay color, font-weight 500, no background, no underline. This is the page's editorial gesture — a single phrase given color the way a published essay would italicize a key term. It is the second-most-distinctive element after the avatar.

### Signature: The Chinese Name in Fangsong

The bio paragraph wraps `王泽华` in `<span class="zh-serif">`, which switches the font stack to STFangsong / FangSong. This is identity, not decoration. Do not generalize the `zh-serif` class to any other CJK content; it is reserved for the name.

## 6. Do's and Don'ts

### Do:

- **Do** keep the page cream, not white. New surfaces default to `cream-paper` (`#faf9f7`); `document-white` is for cards, not for backgrounds.
- **Do** keep Warm Clay (`#da7756`) under ~10% of any screen. One CTA, one highlighted phrase, one underline color, one hover border. The rarity is the point.
- **Do** set every readable surface in Newsreader serif by default — including buttons, nav, and tags. The serif-end-to-end voice is the atelier's signature.
- **Do** use JetBrains Mono only for dates and timestamps. Mono is the data layer.
- **Do** lean on typographic weight and position for hierarchy. Active nav goes from font-weight 400 to 600; active section uses Type Black instead of Annotation Gray. No underline indicators, no background fills.
- **Do** keep shadows atmospheric: the card-rest and card-hover recipes are the entire shadow vocabulary. Anything more dramatic belongs to the avatar and only the avatar.
- **Do** use `accent-light` (Clay Wash) for `::selection`. The cream paper highlights what you've selected.

### Don't:

- **Don't** introduce a second accent color. No green for "shipped," no blue for "info," no red for "error." State is communicated through weight, position, type, or Annotation Gray. *(See PRODUCT.md: "Stiff CS-faculty pages" use blue underlined links. We don't.)*
- **Don't** wrap content in cards by reflex. Cards are reserved for project listings and interest tiles. The bio, news feed, and prose pages use rules and whitespace, not card chrome. *(Nested cards are always wrong, per the shared design laws.)*
- **Don't** reach for Inter sans. The `--font-sans` token is declared but unused; switching nav, buttons, or labels to Inter immediately breaks the atelier voice and produces a generic Astro-academic-starter look.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on news items, callouts, or list rows. *(Side-stripe borders are an absolute ban — see PRODUCT.md, the shared design laws.)*
- **Don't** use gradient text (`background-clip: text` over a gradient). The single solid Warm Clay on the hero highlight is the entire emphasis vocabulary.
- **Don't** add glassmorphism (backdrop-filter, frosted overlays) anywhere. It reads as 2024 SaaS landing-page cliché — directly anti-PRODUCT.md.
- **Don't** add a hero-metric block ("4 years · 12 papers · 1 medal"). PRODUCT.md names this template explicitly as an anti-reference.
- **Don't** add scroll-jacking, custom cursors, autoplay video, or oversized type that does nothing. *(See PRODUCT.md: "over-designed agency portfolio" is an anti-reference.)*
- **Don't** widen the highlight phrase from one to many. Adding a second highlighted span on the homepage breaks The One-Voice Rule.
- **Don't** generalize `.zh-serif` past the Chinese name. The Fangsong stack is identity, not a CJK utility class.
- **Don't** tighten card padding below 1.5rem to fit more content. Density on the homepage is the wrong tradeoff; the homepage is airy by design. (See PRODUCT.md design principle 4: density is for CV/Publications, not the homepage.)
- **Don't** add new top-level nav items casually. The nav is Home / About / Projects / CV, plus the CTA. Each addition costs the atelier's restraint.
