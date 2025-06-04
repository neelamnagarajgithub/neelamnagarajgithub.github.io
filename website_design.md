# 📐 Website Cloning&Content-Replacement Specification(Linear.app→Nagaraj – Backend Developer Portfolio)

---

##0. Global Design Language (Cloned from Reference)

###0.1 Brand & Art Direction Overview• Ultra-minimal, high-contrast dark UI with large white type, ample negative space, and card-based content blocks.• Subtle glass-like translucent cards, blurred glow highlights, rounded16px radii, fine1px hair-line borders (#1E1E1F).• Motion: micro-interactions (hover scale+fade-in), section fade-up on scroll,250ms ease-out.• For Nagaraj, copy remains identical in tone/length but speaks to a personal developer brand.• Accent tones switch from Linear’s neon hues to soft pastels (mint, lavender, peach) while preserving the exact placement/frequency of accents.

###0.2 Color Palette (Exact tokens/usage cloned; only hues swapped to pastels)| Token | HEX | Usage | Notes |
|-------|-----|-------|-------|
| --bg-primary | #0E0F10 | Page background |100% same as ref. |
| --bg-elevated | #151619 | Card/section bg | Same opacity levels. |
| --border-hairline | #1E1F21 |1px borders |10% white overlay on dark. |
| --text-primary | #FFFFFF | Headlines | Same contrast ratio. |
| --text-secondary | #B9BBBE | Body copy | Same as ref. |
| --accent-1 | #B4F0E0 | Mint pastel | Replaces Linear green/yellow. |
| --accent-2 | #D9C8FF | Lavender pastel | Replaces Linear blue. |
| --accent-3 | #FFD7C2 | Peach pastel | Replaces Linear yellow. |

###0.3 Typography Scale (clone)• Family: Inter (same as Linear).• H1/64px700, H2/48px700, H3/32px600, body-lg/18px400, body-sm/16px400, caption/14px400.• Line heights and letter-spacing identical.

###0.4 Spacing & Layout Grid•12-column fluid grid,72px max content width padding desktop,24px mobile.• Section vertical rhythm:160px desktop,96px tablet,64px mobile.• Card gap:24px; card internal padding40px desktop,24px mobile.

###0.5 Visual Effects & Treatments• Cards cast a082440 rgba(0,0,0,0.65) shadow + inset0001px hairline (#1E1F21).• Accent strokes (1px) appear on selected tabs.• Glow rings on hover (radial-gradient using accent token).• Section dividers: faint1px #1E1F21.

###0.6 Component Styles (exact clones)• Top nav bar (sticky transparent,64px height) with logo left, links center, CTA right.• Hero two-column: text left, large angled device/mockup right (will show Nagaraj portrait).•3-card Highlights row (Carousel on mobile).• Feature split-layout (left list, right screenshot).•4-slide carousel inside viewport with pagination dots.• Icon-grid spotlight section with central emblem.• Stacked scroll-cards (tall landscape cards).• Footer with columned links and final CTA.

---

##1. Project SummaryA single-page portfolio showcasing Nagaraj, a Backend Developer. The site mirrors Linear.app’s sleek dark aesthetic but tells Nagaraj’s story: hero tagline, about, skills matrix, featured projects, client testimonials, and a contact form. Built mobile-first, React/Next.js + TailwindCSS (classes will map1-to-1 with the spec).

---

##2. Main Page Overview (`/`)Reference design order ➜ New content mapping:

1. Sticky Nav → Personal logo & section anchors.2. Hero → Nagaraj’s portrait + tagline & CTA.3. “Made for modern product teams” cards →3 About-me highlights.4. Split Feature → Skills Breakdown list + code snippet image.5. Carousel (“Collaborate across…”) → Projects slider (4 projects).6. Icon-Grid Spotlight → Testimonials headline + emblem.7. Stacked Cards List → Contact CTA + embedded form card.8. Footer → Social links, CV download, copyright.

---

##3. Section-by-Section Specifications###3.1 Header (NavBar)

1. Visual Clone • Full-width transparent bar,64px height, blur backdrop (same).2. Content Replacement • Original: “Linear” logo, product links, “Openapp”. • New: Minimal monogram “N.” as logo, nav links: About, Skills, Projects, Testimonials, Contact. CTA button: “DownloadCV”.3. Layout & Structure Identical.4. Component Cloning • Logo, menu links, right-aligned button.5. Asset Replacements • Logo: simple white circular glyph “N.” in Inter Bold.6. Interaction Patterns • On-scroll darken bg8% same as reference.

---

###3.2 Hero Section – “Linear is a purpose-built…” → “Backend brilliance for modern products”

1. Visual Clone Instructions • Two-column, left text (max-width540px), right angled screenshot container (70% width, overlap shadow).2. Content Replacement • Headline (same line length): “Crafting reliable backends for ambitious products” • Sub-copy: “I’m Nagaraj — a backend developer turning complex challenges into scalable solutions.” • Primary button: “View projects” (accent-1 bg), Secondary link: “Get in touch →”.3. Layout & Structure Exact.4. Components • Buttons styled same.5. Assets • Replace UI screenshot with high-res portrait of Nagaraj,3/4 profile, soft mint rim-lighting, dark backdrop. • Creative prompt: “Photorealistic portrait of a confident Indian male software engineer, soft mint rim light, dark studio background,3/4 angle,4K”.6. Interactions • Hover lift on image, buttons scale1.02.

---

###3.3 About Highlights Cards Row (“Made for modern product teams”)

1. Visual Clone •3 equal cards, rounded16px, subtle border.2. Content Replacement • Card1 title: “Passion for clean architecture” – Short desc2lines. • Card2 title: “Designing for scale & speed” – Desc. • Card3 title: “Collaborative & communicative” – Desc. • Small arrow icon on each matches ref.3. Layout & Structure Same.4. Components • Card caption + arrow overlay.5. Assets • Replace ref isometric graphics with abstract3D cubes in pastel accents. • Prompts: “Minimal3D stack of pastel mint server blocks on dark background, soft lighting.” (repeat per card with lavender/peach).6. Interactions • Hover: glow ring matching card accent, slide-in arrow identical.

---

###3.4 Skills Split Section (“Ideate and specify…”)

1. Visual Clone • Two-column split, left bulleted list, right code editor mock screenshot.2. Content Replacement • Section headline: “Expertise that powers your product”. • Bullet list (same3 items): – Micro-services & Domain-Driven Design – Cloud-native deployments (AWS, Docker, k8s) – Performance monitoring & observability • Sub-points remain hidden until click identical.3. Layout Same.4. Component Clone • Checkmark icon leaves accent-2 pastel.5. Asset Replacement • Screenshot: VSCode-style editor with highlighted Go code snippet, mint caret. • Prompt: “Dark code editor window, Go code, pastel mint syntax highlight,16:9 aspect, angled.”6. Interaction • Bullet hover accent line identical.

---

###3.5 Projects Carousel (“Collaborate across tools and teams”)

1. Visual Clone •4 slide cards inside horizontal carousel with pagination dots.2. Content • Headline: “Featured projects”. • Side paragraph: “A glimpse of products I have engineered.” • Each card: • Project name, brief1-line, arrow icon. • Projects list:1. “FinTrack” – Real-time finance API.2. “FoodieHub” – Scalable delivery backend.3. “HealthSync” – HIPAA-compliant data pipeline.4. “DevDash” – Developer analytics platform.3. Layout Same.4. Components • Card content overlay, arrow button identical.5. Assets • Replace mobile screenshot with product dashboard mockups themed to each project (mint/lavender hues). • Prompts: “Dark UI dashboard of financial API metrics, isometric view, pastel lavender accent.” etc.6. Interactions • Same drag/scroll, arrow hover.

---

###3.6 Testimonials Spotlight (Icon-grid center emblem section)

1. Visual Clone • Central circular emblem icon floating above blurred grid of icons, headline centered.2. Content • Heading: “Clients say it best”. • Sub-copy2 lines: “Feedback from teams I’ve partnered with.”3. Icon Grid • Replace Linear’s icons with avatars/initials plates of12 client brands (grey squares).4. Emblem • Soft mint quote icon.5. Asset Prompts • “Minimal quote symbol, mint glow,3D glass effect.”6. Interaction • Icons fade-in on scroll same as ref.

---

###3.7 Stacked Cards List (“Set the product direction…” section) ➜ Contact Section1. Visual Clone • Vertically stacked tall cards (2 shown) with rounded corners.2. Content Replacement • Card1 (top) – Callout: “Let’s build something remarkable”. Short body, arrow link “Send a message”. • Card2 – Inline contact form (name, email, message, submit button).3. Layout • Keep the exact card proportions and spacing.4. Components • Inputs styled transparent,1px border, focus accent-1 glow.5. Interactions • Card hover subtle elevate; submit button same scale-hover.

---

###3.8 Footer1. Visual Clone • Four-column layout + bottom mini-bar.2. Content • Column1: Logo + tagline “Backend Developer”. • Column2: Quick links (About, Skills, Projects, Contact). • Column3: Socials (GitHub, LinkedIn, Twitter). • Column4: Download CV button. • Bottom bar: “©2024 Nagaraj. Crafted with Next.js.” Centered small text.3. Assets • Social icons line style white24px.

---

## ✅ Clone Fidelity Checklist✓ Dark minimal layout, identical grids, card radii, shadows, typography.✓ All copy fully replaced to Nagaraj-focused content, equal length.✓ Pastel accents integrated in identical accent positions.✓ Every image specified with creative prompt matching style & dimensions.✓ Interaction speeds, easing, hover, and scroll animations untouched.