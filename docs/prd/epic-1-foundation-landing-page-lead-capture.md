# Epic 1: Foundation, Landing Page & Lead Capture

**Epic Goal:** Establish Shopify infrastructure using Blank slate template, deploy public-facing landing page with Legs on the Ground v2.0 design system, and implement lead capture form to collect emails for free workout plan PDF delivery.

**Success Criteria:**
- Landing page loads in <3 seconds on mobile
- Lead capture form successfully submits and triggers email with PDF
- Design matches Legs on the Ground v2.0 specifications
- Shopify store is live on custom domain with SSL

---

## Story 1.1: Shopify Store Setup and Initial Configuration

**As a** solo founder,
**I want** a fully configured Shopify Basic store with Blank slate template and custom domain,
**so that** I have a foundation to build the RangeFit website.

**Acceptance Criteria:**

1. Shopify Basic plan ($1 trial, then $39/mo) is activated with RangeFit branding
2. Blank slate theme is installed and set as active theme
3. Custom domain (rangefit.com or chosen domain) is connected with SSL enabled
4. Store name, contact email (jay@rangefit.com), and business address configured
5. Shopify Payments or Stripe payment gateway is connected and tested in sandbox mode
6. Basic store settings configured:
   - Timezone set to US Eastern (or founder preference)
   - Currency set to USD
   - Tax settings configured (if applicable)
7. Git repository created and Shopify theme files pushed to version control
8. Shopify CLI installed locally for theme development
9. Development workflow documented (local dev → test → production deploy)

---

## Story 1.2: Port Legs on the Ground Design System to Shopify Theme

**As a** developer,
**I want** the complete Legs on the Ground v2.0 CSS design system ported to the Blank slate theme,
**so that** all pages match the established design specifications.

**Acceptance Criteria:**

1. All CSS variables from `docs/styles.css` (colors, spacing, typography, shadows) are ported to `assets/theme.css.liquid`
2. Typography system implemented:
   - "Plus Jakarta Sans" loaded via Google Fonts for headings
   - "Inter" loaded for body text
   - Type scale (--text-xs to --text-5xl) configured
3. Utility classes ported (flex, grid, spacing, colors, borders, shadows, transitions)
4. Component styles ported:
   - `.card` base class with hover effects
   - `.btn` variants (primary, secondary, outline, white)
   - `.hero` section styles with gradient overlay
   - `.icon-badge` component
5. Responsive breakpoints defined (mobile: 320-767px, tablet: 768-1023px, desktop: 1024px+)
6. Accessibility features implemented:
   - WCAG AA contrast ratios verified (4.5:1 minimum)
   - Focus states for keyboard navigation
   - Skip-to-content link
7. Mobile-first approach verified (CSS optimized for mobile performance)
8. CSS minified for production deployment

---

## Story 1.3: Create Landing Page Layout and Hero Section

**As a** visitor,
**I want** to see a compelling hero section when I land on the homepage,
**so that** I immediately understand RangeFit's value proposition.

**Acceptance Criteria:**

1. Hero section created in `sections/hero.liquid` with:
   - Background image (rangefit-hero.jpg or similar) with dark gradient overlay
   - Headline: "Get Energy That Lasts All Day" (h1, hero-title class)
   - Subtitle: "The free 7-day glucose-friendly workout plan..." (hero-subtitle class)
2. Two CTA buttons in hero:
   - Primary: "Get My Free Plan" (links to #free-plan anchor)
   - Outline: "See Pricing" (links to #pricing anchor)
3. Trust bar below CTAs with 5 trust badges:
   - Beginner Friendly (leaf icon)
   - AI-Powered (robot icon)
   - Science-Backed (heart icon)
   - 2,000+ Members (users icon)
   - 100% Free Plan (shield icon)
4. Hero section is fully responsive (mobile-first design, stacks vertically on mobile)
5. Hero text is readable over background image (proper contrast with overlay)
6. Font Awesome icons loaded and displaying correctly
7. Section follows Legs on the Ground hero styles (compact padding, centered content)

---

## Story 1.4: Build Value Propositions Section

**As a** visitor,
**I want** to understand RangeFit's key differentiators,
**so that** I know why it's different from other fitness apps.

**Acceptance Criteria:**

1. Value propositions section created in `sections/value-props.liquid` with 3 cards:
   - **Card 1:** "Truly Adaptive AI" (robot icon) - AI learns from glucose patterns
   - **Card 2:** "10x More Affordable" (hand-holding-usd icon) - $14.99/month vs competitors
   - **Card 3:** "A Community That Gets It" (users icon) - Join thousands on same journey
2. Cards use `.value-prop-card` component styling (if defined) or `.card` base class
3. Icons use `.value-prop-icon` styling with gradient backgrounds
4. Section uses `grid grid-auto-fit-lg gap-lg` for responsive 3-column layout (stacks on mobile)
5. Section includes `py-5xl` spacing (section-padding utility)
6. Text is centered within cards
7. Cards have hover effects (lift, shadow increase) per Legs on the Ground design

---

## Story 1.5: Build Services/Pricing Section

**As a** visitor,
**I want** to see the three pricing tiers (Free, Premium, Pro),
**so that** I understand my options and can choose the right plan.

**Acceptance Criteria:**

1. Services section created in `sections/services.liquid` with 3 pricing cards:
   - **Free 7-Day Plan:** $0, "Start Here" badge, lists 5 features
   - **RangeFit Premium:** $14.99/mo, "Full Power" badge, lists 5 features
   - **RangeFit Pro:** $24.99/mo, no badge, lists 5 features (includes "Everything in Premium, plus:")
2. Each card includes:
   - Service badge (if applicable) positioned top-right
   - Icon circle with gradient background
   - Title (h3)
   - Price (large, bold)
   - Description (1-2 sentences)
   - Feature list (ul with checkmark icons or plain list items)
   - CTA button ("Get Started" - outline style)
3. Cards use `grid grid-auto-fit-lg` responsive layout
4. Pricing is clearly displayed with `/mo` suffix for recurring plans
5. Section header includes title "Our Services" and optional subtitle
6. Cards have consistent height (equal regardless of content length)

---

## Story 1.6: Build Testimonials Section

**As a** visitor,
**I want** to read testimonials from real RangeFit users,
**so that** I can trust that this solution works for people like me.

**Acceptance Criteria:**

1. Testimonials section created in `sections/testimonials.liquid` with 3 testimonial cards:
   - **Sarah C.:** Teacher with PCOS - "first one that made me feel *more* energized"
   - **Maria T.:** Pre-diabetic - "fasting glucose dropped 12 points in three weeks"
   - **Jen K.:** Type 2 Diabetes - "community alone is worth the price"
2. Each testimonial card includes:
   - 5-star rating (Font Awesome star icons in `.testimonial-rating`)
   - Quote text in `<blockquote>` with `.testimonial-quote` class
   - Author name and condition/role (`.testimonial-author` with name and location)
3. Testimonials use `grid grid-auto-fit-lg gap-xl` responsive layout
4. Cards use `.testimonial-card` or `.card` base styling
5. Section header: "What Our Clients Say" with subtitle "Real stories from people just like you"
6. Star ratings are visually prominent (coral/gold color)
7. Quotes use proper typographic quotes (" ") not straight quotes

---

## Story 1.7: Build FAQ Accordion Section

**As a** visitor,
**I want** to find answers to common questions in an accordion format,
**so that** I can resolve concerns before signing up.

**Acceptance Criteria:**

1. FAQ section created in `sections/faq.liquid` with minimum 10 FAQ items:
   - Do I need a CGM?
   - I'm a complete beginner, is this for me?
   - Does this work for PCOS/Pre-diabetes/Type 2?
   - How is this different from MyFitnessPal/Peloton?
   - Will I lose weight?
   - How much time does it take?
   - What equipment do I need?
   - How does the AI personalize my plan?
   - Is my health data private?
   - What's included in the free plan?
   - (Plus 2-3 more from brief/requirements)
2. FAQ accordion uses `.faq-item` / `.accordion-item` styling from Legs on the Ground:
   - Question button (`.faq-question`) with chevron icon toggle
   - Answer content (`.faq-answer`) with smooth max-height transition
   - Active state shows gradient border/accent
3. JavaScript added to `assets/main.js` for accordion toggle functionality:
   - Click question to expand/collapse answer
   - Chevron rotates on expand
   - Only one FAQ open at a time (optional) OR multiple can be open
   - Proper ARIA attributes (`aria-expanded`, `aria-controls`)
4. Section header: "Frequently Asked Questions" with subtitle
5. FAQ container max-width: 900px, centered
6. Keyboard navigation supported (Enter/Space to toggle)

---

## Story 1.8: Build Lead Capture Form Section

**As a** visitor,
**I want** to submit my name and email to get the free 7-day workout plan,
**so that** I can try RangeFit without commitment.

**Acceptance Criteria:**

1. Contact form section created in `sections/contact-form.liquid` with:
   - Section header: "Get Your Free 7-Day Plan"
   - Subtitle: "Enter your name and email below, and we'll send it to you instantly"
2. Form includes 2 fields:
   - First Name (text input, required, placeholder: "Sarah")
   - Email Address (email input, required, placeholder: "sarah@example.com")
3. Submit button: "Send Me the Plan" with download icon (btn-primary btn-lg)
4. Form integrates with Shopify contact form OR Formspree/similar (to be integrated with ConvertKit in Epic 2)
5. Form validation:
   - Required fields marked with red asterisk
   - Email format validation
   - Error messages display clearly
6. Sidebar "What You'll Get" includes 6 benefit bullets:
   - 3 Glucose-Stabilizing Workouts
   - Exercise Timing Guide
   - Energy Tracking Sheet
   - Instant PDF Download
   - Blood Sugar Basics Guide
   - Weekly Tips & Motivation
7. Social proof below form: "Join 5,000+ people" + 4.8/5 star rating
8. Privacy guarantee: "100% Free • No Credit Card • Unsubscribe Anytime"
9. Form is mobile-responsive (stacks vertically on small screens)
10. Form submission shows success/error message (`.form-message` element)

---

## Story 1.9: Create Header Navigation and Footer

**As a** visitor,
**I want** clear navigation to jump to sections and find contact information,
**so that** I can easily explore the site.

**Acceptance Criteria:**

1. Header created in `layout/theme.liquid` with:
   - RangeFit logo (image or text logo) linking to homepage
   - Navigation menu with links:
     - How It Works (#how-it-works - add section in future or link to value-props)
     - Pricing (#services)
     - Testimonials (#testimonials)
     - Community (#community - placeholder for future)
     - "Get Your Free Plan" (btn-primary in nav)
   - Mobile hamburger menu toggle (3-line icon)
   - Sticky header on scroll (with shadow on `.header.scrolled`)
2. Header uses `.header` class from Legs on the Ground with:
   - White background, subtle shadow
   - Logo left, nav right (desktop)
   - Hamburger menu button visible on mobile only
3. Mobile menu functionality in `assets/main.js`:
   - Click hamburger to toggle nav visibility
   - Nav slides in/fades in (animation)
   - Proper ARIA labels (`aria-expanded`, `aria-label`)
4. Footer created in `sections/footer.liquid` with:
   - Company info: "RangeFit - AI Glucose Fitness for Everyday People"
   - Contact: Email (jay@rangefit.com), Location (United States, Online)
   - Quick Links: How It Works, Pricing, Testimonials, Get Your Free Plan
   - Copyright: © 2025 RangeFit. All rights reserved
   - "Back to Top" link
5. Footer uses `.footer` styling (dark background, white text, multi-column layout on desktop)
6. Footer is responsive (stacks columns on mobile)

---

## Story 1.10: Add Analytics, SEO, and Performance Optimizations

**As a** site owner,
**I want** analytics tracking, SEO metadata, and performance optimizations in place,
**so that** I can track traffic, rank in search, and load quickly.

**Acceptance Criteria:**

1. Google Analytics 4 tracking code added to `layout/theme.liquid` (GA ID: G-XXXXXXXXXX placeholder, founder will replace)
2. Shopify Analytics is enabled by default (no action needed, verify in Shopify admin)
3. SEO metadata added to homepage:
   - Page title: "RangeFit | AI Glucose Fitness for Everyday People"
   - Meta description: "Get stable energy all day with our free 7-day glucose-friendly workout plan. Affordable AI fitness for PCOS, pre-diabetes, and insulin resistance."
   - Meta keywords: "glucose-aware fitness, PCOS workout, diabetes exercise, affordable CGM alternative"
   - Open Graph tags (og:title, og:description, og:image)
   - Twitter Card tags
   - Canonical URL
4. Favicon files added:
   - 32x32 PNG
   - 16x16 PNG
   - 180x180 Apple touch icon
   - References in `<head>` section
5. Performance optimizations:
   - Images use `loading="lazy"` attribute
   - Hero background image optimized (compressed, appropriate size)
   - CSS minified for production
   - Font preloading for Google Fonts
   - DNS prefetch for external resources (fonts.googleapis.com, cdnjs.cloudflare.com)
6. Accessibility features:
   - Skip-to-content link implemented (`.skip-link` class)
   - All images have alt text
   - Semantic HTML (header, nav, main, section, footer)
7. Mobile performance verified:
   - Landing page loads in <3 seconds on 4G (NFR1)
   - Responsive at 320px viewport width (smallest mobile)

---
