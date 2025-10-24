# User Interface Design Goals

## Overall UX Vision

RangeFit's user experience must feel **approachable, supportive, and community-driven**—the antithesis of clinical, intimidating glucose apps like Levels or Signos. The visual language should evoke a friendly fitness coach, not a medical device. Every interaction should reinforce the "people like us" positioning through warm, relatable copy, encouraging micro-interactions (like logging energy levels with simple emoji selectors), and prominent community elements.

The UX prioritizes **reducing friction at every conversion point**: landing page to lead capture should feel effortless (single form field if possible), trial signup should feel low-risk ($4.99 with clear value), and workout selection should be simple ("What's my energy level today?" → recommended workout). The experience should feel **designed for busy people** (teachers, service workers) who want guidance without overwhelm—minimal clicks, clear next steps, and celebration of small wins.

## Key Interaction Paradigms

**1. Guided Discovery over Exploration:**
Users shouldn't face decision paralysis. The member dashboard presents "Your workout for today" based on simple inputs (energy level, time available) rather than forcing users to browse 21 workouts. Progressive disclosure—show less upfront, reveal more as users engage.

**2. Micro-Logging with Minimal Friction:**
Energy logging uses emoji/tap interactions (😓 Low / 😐 Medium / 😊 High) instead of long forms. Workout completion is a single tap. Build habit loops with immediate positive reinforcement ("Great job! 🎉 3-day streak!").

**3. Community-First Navigation:**
Discord community link is prominently featured on every member page (header nav, dashboard widget). Member count and recent wins are visible to reinforce Unity. Users should feel they're part of a movement, not isolated customers.

**4. Mobile-First, Thumb-Friendly Design:**
Primary actions (Start Workout, Log Energy, Join Discord) are within easy thumb reach on mobile screens. Minimize text input—use taps, swipes, and selections wherever possible.

## Core Screens and Views

**Public (Pre-Signup):**
1. **Landing Page** - Hero with headline, social proof (member count, testimonials), free workout plan CTA
2. **Free Plan Download Thank You** - Immediate PDF download + email confirmation + trial offer preview

**Trial/Member Experience:**
3. **Member Dashboard** - "Your workout for today" + progress stats (streak, workouts completed) + Discord community widget + energy check-in
4. **Workout Library** - Filterable grid of workouts (by intensity, duration, type) with clear glucose-awareness labels
5. **Workout Detail Page** - Video/instructions, duration, intensity, glucose guidance, "Start Workout" CTA, post-workout energy log
6. **Progress Tracker** - Simple visual (calendar heatmap or progress bar) showing completed workouts, streaks, energy trends
7. **Account/Subscription Management** - Shopify customer portal for payment, plan changes, cancellation

**Admin (Solo Founder):**
8. **Content Management** - Shopify admin for adding/editing workout content (WYSIWYG, no coding required)

## Accessibility: WCAG AA

**Requirements:**
- Minimum 4.5:1 contrast ratio for all text
- Keyboard navigation support for all interactive elements
- Alt text for all workout images/videos
- Clear focus indicators for form fields and buttons

**Rationale:** Target users may have diabetes-related vision impairment, mobile-first design requires clear tap targets (44x44px minimum), and form validation/error messages must be screen-reader friendly.

## Branding

**Design Direction:** Replicate the **"Legs on the Ground v2.0"** design system (found in `docs/styles.css` and `docs/index.html`)

**Extracted Design Specifications:**

**Color Palette:**
- **Primary Blue:** `#38B2FF` (trust, calm) - used for primary actions
- **Accent Green:** `#38A169` (health, success) - used for success states and icons
- **Neutrals:** Warm grays (`#718096` body text, `#2D3748` headings, `#F7FAFC` backgrounds)
- **Legacy mappings:** CSS variables support coral/navy/teal aliases that map to blue/green for compatibility

**Typography System:**
- **Display Font:** "Plus Jakarta Sans" (headings, hero titles)
- **Body Font:** "Inter" (paragraphs, UI text)
- **Type Scale:** Major Third ratio (1.25) - 16px base to 61px (h1)
- **Font Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

**Component Patterns:**
- **Cards:** White background, rounded-lg (12px), subtle shadow, hover lift effect (-6px transform)
- **Buttons:** Gradient backgrounds, semibold text, min-height 42px, rounded-lg
  - Primary: Coral gradient → Navy on hover
  - Outline: Transparent with border → Filled on hover
- **Hero Section:** Dark overlay gradient, compact padding, centered content, trust badges below CTA
- **FAQ Accordion:** Animated chevron toggle, gradient accent on active state, smooth max-height transition

**Spacing System:**
- 8pt grid system (`--space-base: 1rem / 16px`)
- Scale: xs(4px), sm(8px), md(12px), base(16px), lg(24px), xl(32px), 2xl(40px), up to 8xl(160px)

**Utility-First Approach:**
- Comprehensive utility classes (flex, grid, spacing, typography, colors)
- Similar to Tailwind CSS philosophy
- All components built with utility composition

**Shopify Implementation Notes:**
- This existing static site uses custom CSS - will need to adapt to Shopify Liquid theme structure
- Design system can be ported to Shopify theme's `assets/theme.css.liquid`
- Component patterns should map to Shopify sections (hero.liquid, product-grid.liquid, etc.)

## Target Device and Platforms: Web Responsive (Mobile-First)

**Primary:** Mobile web (iOS Safari, Chrome Android) - 60%+ of traffic from TikTok
**Secondary:** Desktop web (Chrome, Safari, Firefox, Edge - last 2 versions)
**Not Required:** Native mobile apps (deferred to post-MVP)

**Responsive Breakpoints:**
- Mobile: 320px - 767px (primary design target)
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Mobile-Specific Considerations:**
- Video content must be optimized for mobile bandwidth (low data usage)
- Forms auto-zoom on focus to prevent viewport issues
- Bottom navigation or sticky CTAs for thumb accessibility
- Fast page transitions (no heavy animations that lag on older devices)

---
