# Product

## Register

brand

## Users

**Primary:** researchers and frontier-lab recruiters — PIs and lab leads at places like DeepMind and OpenAI, professors at MIT/Stanford/Tsinghua-tier labs, senior research engineers sourcing interns or future PhD admits. They arrive with one question: *is this someone we should track, intern, or admit?* They will give the page 30–60 seconds before deciding whether to open the CV, click into a project, or close the tab. They have read a hundred student pages this month; they recognize templates instantly.

**Secondary:** PhD admissions committees skimming applicant materials, and academic peers who land via the IPhO community, paper citations, or a referral. Same skim pattern, different vocabulary.

The job to be done is judgment, not entertainment. The reader is trying to form an opinion of a person, fast.

## Product Purpose

A personal academic portfolio for Zehua Wang — an MIT undergrad working at the intersection of physics and AI/RL — that establishes him as a serious researcher worth tracking, while letting his perspective ("AI the way a physicist would") show through the design itself.

Success looks like:

- A research lab emails him about an internship or RA slot.
- A PI flags him for next year's intake.
- A recruiter forwards the link internally with "look at this one."
- An academic peer keeps the tab open long enough to read a project page.

The site competes against a sea of stiff faculty pages and over-designed portfolios. Its job is to land in the small set that reads as both *serious* and *distinctive* — the way Vincent Sitzmann's site or a distill.pub article does.

## Brand Personality

**Quiet. Precise. Warm.**

The voice is first-person and unornamented. Confidence without pageantry — the credentials are real, so they don't need theatrics. The page should feel like a well-set physics monograph that happens to belong to a real person: cream paper, one warm accent, generous whitespace, the Chinese name 王泽华 set in serif as a visible piece of identity rather than decoration.

Reference triangle: Vincent Sitzmann's academic page (warm minimal, serif identity, photo as feature), distill.pub-era research writing (editorial typographic confidence), Linus Lee's personal sites (hand-built, not templated). The current homepage already sits in this lane and should stay there.

The emotional register a reader should leave with: *"this person is rigorous, and they think differently."* Not *"slick portfolio,"* not *"safe academic site."*

## Anti-references

- **Stiff CS-faculty pages.** Times New Roman, blue underlined links, photo-on-the-left tables, header-then-bullet-list rhythm, no hierarchy. The 1998 .edu look. Even when the content is good, the form signals "I don't care about presentation," which reads as either arrogance or carelessness — neither is the goal.
- **Over-designed agency portfolios.** Custom cursors, scroll-jacking, autoplay reels, oversized type that does nothing, decorative motion. Design-as-performance. A research reader will close the tab.
- **SaaS-cream + magenta-accent template.** Gradient mesh heroes, glassmorphic stat cards, hero-metric blocks ("4 years · 12 papers · 1 medal"), big rounded CTA buttons. We are not a startup.
- **Generic "academic theme" Astro/Hugo starter look.** If a reader can guess "this is the Academic Folio template" in 5 seconds, the work hasn't been done.

## Design Principles

1. **Confidence without pageantry.** The credentials (IPhO gold, MIT GPA, advisors, papers) speak for themselves. Set them well and step out of the way. No badge walls, no animated counters, no "as featured in" rows.

2. **The page is a worldview, not a CV.** Visitors should leave with a sense of *how* the author thinks, not just *what* he's done. Editorial typography, the opinionated tagline highlight ("AI the way a physicist would"), the Chinese name in serif, and the personal cityscape avatar carry the worldview. Lean into these; don't sand them off.

3. **Warm restraint.** Cream paper instead of clinical white; one warm accent instead of a palette; whitespace instead of cards. Restraint is the dominant note — warmth is what keeps it from feeling cold or institutional. If something feels too austere, add warmth (a personal aside, a hand-set detail), not decoration.

4. **Density only where density earns it.** Publications and CV pages can be dense and reference-like — readers there *want* the details. The homepage and project detail pages stay airy. Don't apply one rhythm to both surfaces.

5. **Hand-built over templated.** Every choice should feel deliberately picked, not inherited. The Chinese serif treatment, the warm-orange highlight, the news-feed rhythm, the single-accent navbar — these are the page's fingerprint. New work should add fingerprints, not strip them.

## Accessibility & Inclusion

- **WCAG AA** baseline. Body text contrast ≥ 4.5:1 against both cream and dark backgrounds; large display type ≥ 3:1.
- **Light-only** is the current state. The dark-mode token block exists in `src/styles/global.css` but is commented out; the site does not respond to `prefers-color-scheme: dark`. Don't add a manual theme toggle. If dark mode is revived later, do it by uncommenting the staged block and producing a paired dark palette in DESIGN.md, not by retrofitting a toggle UI.
- **Keyboard navigation** and visible focus rings on every interactive element (nav, CV button, project cards, social icons, BibTeX buttons).
- **Color is never the sole signal.** The warm-orange accent carries emphasis but never meaning — anything important must also have weight, position, or text to communicate it.
- **Reduced motion.** New Framer Motion work should gate non-essential animation behind `prefers-reduced-motion: reduce`. The hero animation and scroll fades are acceptable defaults; don't add motion that moves on a timer or autoplay.
- No requirement for AAA contrast or captioned video at this stage.
