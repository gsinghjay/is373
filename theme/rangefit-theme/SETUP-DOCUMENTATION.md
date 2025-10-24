# RangeFit Shopify Theme - Complete Setup Documentation

**Date Created:** October 24, 2025
**Theme ID:** #182405005605
**Store:** rangefit-dev.myshopify.com
**Developer:** James (Dev Agent)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Initial Setup](#initial-setup)
3. [Theme Structure](#theme-structure)
4. [Design Integration](#design-integration)
5. [Sections Created](#sections-created)
6. [Issues & Solutions](#issues--solutions)
7. [Configuration](#configuration)
8. [Development Workflow](#development-workflow)
9. [Next Steps](#next-steps)

---

## Project Overview

### Objective
Convert the RangeFit static site (AI-powered glucose fitness platform) into a fully functional Shopify theme with custom sections and RangeFit branding.

### Key Features
- **Product:** AI glucose-aware fitness coaching
- **Target Audience:** People with PCOS, pre-diabetes, insulin resistance
- **Pricing Tiers:** Free 7-day plan, Premium ($14.99/mo), Pro ($24.99/mo)
- **Design:** Modern, friendly blue/green color scheme with professional typography

---

## Initial Setup

### 1. Shopify CLI Installation

**Command:**
```bash
npm install -g @shopify/cli @shopify/theme
```

**Verification:**
```bash
shopify version
# Output: 3.86.1
```

### 2. Authentication

**Command:**
```bash
shopify auth login
```

**Result:**
- Account: js426@njit.edu
- Store: rangefit-dev.myshopify.com

### 3. Theme Initialization

**Location:** `/home/jay/github/is373/theme/rangefit-theme/`

**Command:**
```bash
mkdir -p theme
cd theme
shopify theme init rangefit-theme
```

**Result:**
- Created skeleton theme from https://github.com/Shopify/skeleton-theme.git
- Theme structure with all required directories

---

## Theme Structure

```
rangefit-theme/
├── assets/
│   ├── rangefit-theme.css (96KB) - Main stylesheet
│   ├── rangefit-theme.js (17KB) - Main JavaScript
│   └── critical.css (2.4KB) - Skeleton theme CSS
├── blocks/
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid - Main layout template
├── locales/
├── sections/
│   ├── header.liquid - Custom RangeFit header
│   ├── footer.liquid - Custom RangeFit footer
│   ├── hero.liquid - Hero section with CTA
│   ├── value-props.liquid - Value propositions
│   └── pricing.liquid - Pricing tiers
├── snippets/
└── templates/
    ├── index.json - Homepage template
    ├── product.json
    ├── collection.json
    └── ... (other Shopify templates)
```

---

## Design Integration

### 1. CSS Migration

**Source:** `/home/jay/github/is373/static/css/styles.css`
**Destination:** `/home/jay/github/is373/theme/rangefit-theme/assets/rangefit-theme.css`

**Command:**
```bash
cp /home/jay/github/is373/static/css/styles.css \
   /home/jay/github/is373/theme/rangefit-theme/assets/rangefit-theme.css
```

**Design System:**
- **Primary Color:** Blue (#38B2FF) - Trust, Calm
- **Accent Color:** Green (#38A169) - Health, Action
- **Typography:**
  - Body: Inter
  - Headings: Plus Jakarta Sans
- **Grid:** 8pt spacing system
- **Icons:** Font Awesome 6.4.0

### 2. JavaScript Migration

**Source:** `/home/jay/github/is373/docs_site/main.js`
**Destination:** `/home/jay/github/is373/theme/rangefit-theme/assets/rangefit-theme.js`

**Features:**
- Mobile menu toggle
- Scroll-to-top button
- FAQ accordion
- Smooth scrolling

### 3. Layout Template Updates

**File:** `layout/theme.liquid`

**Key Changes:**
```liquid
{%- # RangeFit Fonts -%}
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

{%- # Font Awesome for Icons -%}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

{%- # RangeFit Theme Styles -%}
{{ 'rangefit-theme.css' | asset_url | stylesheet_tag }}

{%- # RangeFit Theme Scripts -%}
{{ 'rangefit-theme.js' | asset_url | script_tag }}
```

---

## Sections Created

### 1. Hero Section (`sections/hero.liquid`)

**Purpose:** Main call-to-action with trust bar

**Features:**
- Background image support
- Customizable title and subtitle
- Primary & secondary CTA buttons
- Trust bar with 5 customizable items (icons + text)

**Schema Settings:**
- `hero_image` (image_picker) - Background image
- `hero_title` (text) - Main heading
- `hero_subtitle` (textarea) - Subheading
- `primary_button_text` (text) - CTA text
- `primary_button_link` (url) - CTA destination
- `secondary_button_text` (text) - Secondary CTA text
- `secondary_button_link` (url) - Secondary CTA destination

**Blocks:**
- `trust_item` - Repeatable trust bar items with icon and text

**Default Content:**
```
Title: "Get Energy That Lasts All Day"
Subtitle: "The free 7-day glucose-friendly workout plan..."
Trust Items: Beginner Friendly, AI-Powered, Science-Backed, 2,000+ Members, 100% Free Plan
```

---

### 2. Value Propositions (`sections/value-props.liquid`)

**Purpose:** Showcase 3 key value propositions

**Features:**
- Icon display (Font Awesome)
- Title
- Description text
- Responsive 3-column grid

**Blocks:**
- `value_prop` - Repeatable value proposition cards

**Default Content:**
1. **Truly Adaptive AI** - AI learns from glucose patterns
2. **10x More Affordable** - $14.99/month pricing
3. **A Community That Gets It** - Support community

---

### 3. Pricing Section (`sections/pricing.liquid`)

**Purpose:** Display service tiers with features

**Features:**
- Optional badge (e.g., "Start Here", "Full Power")
- Icon display
- Title, price, description
- Feature list (separated by `|` character)
- CTA button

**Schema Settings:**
- `section_title` (text) - Section heading
- `section_subtitle` (text) - Optional subtitle

**Blocks:**
- `pricing_tier` - Repeatable pricing cards

**Default Tiers:**
1. **Free 7-Day Plan** - $0
   - 3 glucose-stabilizing workouts
   - Exercise timing guide
   - Energy tracking sheet
   - Instant PDF delivery

2. **RangeFit Premium** - $14.99/mo
   - AI-Personalized Workouts
   - Full Workout Library
   - Progress Tracking
   - Private Discord Community
   - Direct Support

3. **RangeFit Pro** - $24.99/mo
   - Everything in Premium
   - Advanced Analytics Dashboard
   - Monthly Live Coaching Calls
   - Priority Support
   - Beta Access

---

### 4. Header Section (`sections/header.liquid`)

**Purpose:** Site navigation and branding

**Features:**
- Logo image support (falls back to shop name)
- Main navigation menu (linked to Shopify menu)
- CTA button
- Shopping cart icon with item count
- Mobile menu toggle button

**Schema Settings:**
- `logo` (image_picker) - Logo image
- `menu` (link_list) - Navigation menu (default: "main-menu")
- `cta_text` (text) - CTA button text
- `cta_link` (url) - CTA button link

---

### 5. Footer Section (`sections/footer.liquid`)

**Purpose:** Site footer with links and contact info

**Features:**
- Company description
- Contact information (phone, email, location)
- Quick links menu
- Copyright notice
- Back to top link

**Schema Settings:**
- `footer_description` (textarea) - Company tagline
- `phone` (text) - Phone number
- `email` (text) - Email address (default: hello@rangefit.com)
- `location` (text) - Location text (default: "United States, Online")
- `menu` (link_list) - Footer menu (default: "footer")

---

## Issues & Solutions

### Issue 1: Theme Upload Errors

**Problem:**
```
sections/header.liquid.tmp.32484.1761279020588 contains illegal characters
templates/index.json.tmp.32484.1761279060217 Must have a .liquid file extension
```

**Root Cause:** Shopify CLI temporary file handling during live sync

**Solution:**
- These are normal warnings from the dev server
- Files synced successfully despite errors
- Used `shopify theme push --force` to ensure clean upload

---

### Issue 2: CSS Not Loading (404 Error)

**Problem:**
```
https://rangefit-dev.myshopify.com/cdn/shop/t/6/assets/rangefit-theme.css
Status: 404 Not Found
```

**Diagnosis:**
- CSS file existed locally but wasn't uploaded to Shopify CDN
- Verified with: `shopify theme pull`

**Solution:**
```bash
shopify theme push --store=rangefit-dev.myshopify.com \
                   --theme=182405005605 \
                   --only="assets/rangefit-theme.css"
```

---

### Issue 3: CSS Minification Failed (Critical)

**Problem:**
```
Shopify CDN: Minification failed
Line 3462:0 Expected "*/" to terminate multi-line comment
```

**Root Cause:**
Line 3455-3456 had an unclosed CSS comment:
```css
/* ======================
   END OF STYLESHEET
```

**Diagnosis Process:**
1. Checked DevTools Network tab
2. Found CSS file loading with error message
3. Inspected end of CSS file: `tail -20 assets/rangefit-theme.css`
4. Located unclosed comment at line 3455

**Solution:**
Added closing comment marker:
```css
/* ======================
   END OF STYLESHEET
   ====================== */
```

**Fix Command:**
```bash
# Edit file to close comment
shopify theme push --store=rangefit-dev.myshopify.com \
                   --theme=182405005605 \
                   --only="assets/rangefit-theme.css"
```

**Result:** ✅ CSS now loads successfully with all styles applied

---

## Configuration

### Homepage Template (`templates/index.json`)

**Sections Used:**
1. `hero` - Main hero section
2. `value-props` - Value propositions
3. `pricing` - Service tiers

**JSON Structure:**
```json
{
  "sections": {
    "hero": {
      "type": "hero",
      "settings": { ... },
      "blocks": { ... }
    },
    "value_props": {
      "type": "value-props",
      "blocks": { ... }
    },
    "pricing": {
      "type": "pricing",
      "blocks": { ... }
    }
  },
  "order": ["hero", "value_props", "pricing"]
}
```

---

## Development Workflow

### Local Development with Live Preview

**Start Dev Server:**
```bash
cd /home/jay/github/is373/theme/rangefit-theme
shopify theme dev --store=rangefit-dev.myshopify.com
```

**Preview URLs:**
- Local: http://127.0.0.1:9292
- Shopify: https://rangefit-dev.myshopify.com/?preview_theme_id=182405005605

**Features:**
- ✅ Hot reload - changes sync automatically
- ✅ Live preview
- ✅ Local development server

---

### Push Changes to Shopify

**Push All Files:**
```bash
shopify theme push --store=rangefit-dev.myshopify.com \
                   --theme=182405005605
```

**Push Specific Files:**
```bash
shopify theme push --store=rangefit-dev.myshopify.com \
                   --theme=182405005605 \
                   --only="assets/rangefit-theme.css"
```

**Force Push (Override Everything):**
```bash
shopify theme push --store=rangefit-dev.myshopify.com \
                   --theme=182405005605 \
                   --force
```

---

### Pull Changes from Shopify

**Pull All Files:**
```bash
shopify theme pull --store=rangefit-dev.myshopify.com \
                   --theme=182405005605
```

**Pull Specific Files:**
```bash
shopify theme pull --store=rangefit-dev.myshopify.com \
                   --theme=182405005605 \
                   --only="templates/index.json"
```

---

### Theme Validation

**Run Theme Check:**
```bash
cd /home/jay/github/is373/theme/rangefit-theme
shopify theme check
```

**Current Status:**
- 42 files inspected
- 5 errors (mostly missing assets - favicons, translation keys)
- 6 warnings (performance suggestions - remote assets)

**Notable Warnings:**
- Missing favicon files (can add later)
- Remote assets (Google Fonts, Font Awesome) - acceptable for this use case
- Deprecated `img_url` filter (use `image_url` instead) - minor

---

## Theme Customization

### Via Shopify Admin

**Theme Editor URL:**
https://rangefit-dev.myshopify.com/admin/themes/182405005605/editor

**What You Can Customize:**
1. **Hero Section**
   - Upload background image
   - Change title/subtitle text
   - Modify button text and links
   - Edit trust bar items

2. **Value Props**
   - Change icons (Font Awesome classes)
   - Update titles and descriptions
   - Add/remove cards

3. **Pricing**
   - Update prices and descriptions
   - Modify feature lists
   - Change CTA buttons

4. **Header**
   - Upload logo
   - Configure navigation menu
   - Set CTA button

5. **Footer**
   - Update contact information
   - Configure footer menu
   - Change company description

---

## Next Steps

### Immediate (Required)

1. **Upload Hero Background Image**
   - Go to Theme Editor → Hero Section
   - Click "Background Image"
   - Upload hero image from `/home/jay/github/is373/docs_site/images/hero/rangefit-hero.jpg`

2. **Upload Logo**
   - Go to Theme Editor → Header
   - Click "Logo Image"
   - Upload logo from `/home/jay/github/is373/docs_site/images/logos/logo-horizontal_small.png`

3. **Create Navigation Menus**
   - Admin → Online Store → Navigation
   - Create "main-menu" with links:
     - How It Works (#how-it-works)
     - Pricing (#services)
     - Testimonials (#testimonials)
     - Community (#community)

4. **Create Footer Menu**
   - Admin → Online Store → Navigation
   - Create "footer" menu with key links

---

### Recommended (Enhance)

5. **Add Testimonials Section**
   - Create `sections/testimonials.liquid`
   - Display customer reviews with star ratings
   - Add to homepage template

6. **Add FAQ Section**
   - Create `sections/faq.liquid`
   - Accordion-style Q&A
   - Add to homepage template

7. **Add Contact Form Section**
   - Create `sections/contact-form.liquid`
   - Email capture for free plan
   - Integration with Shopify customer data

8. **Add Why Choose Us Section**
   - Create `sections/why-choose.liquid`
   - 3 image + text cards
   - Highlight unique selling points

9. **Upload Favicon**
   - Add favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
   - Place in `assets/` folder
   - Remove errors from theme check

10. **Create Product Templates**
    - Set up products for:
      - Free 7-Day Plan
      - RangeFit Premium Subscription
      - RangeFit Pro Subscription
    - Configure Shopify subscriptions app

---

### Advanced (Optional)

11. **Add Collection Page**
    - Create custom collection template
    - Display workout plans/products

12. **Add Blog Section**
    - Customize blog template
    - Share fitness tips and success stories

13. **Integrate with Apps**
    - **Subscriptions:** Shopify Subscriptions or Recharge
    - **Email Marketing:** Klaviyo or Shopify Email
    - **Analytics:** Google Analytics 4
    - **Customer Reviews:** Judge.me or Loox

14. **Improve Performance**
    - Host Google Fonts locally
    - Host Font Awesome locally
    - Optimize images (WebP format)
    - Implement lazy loading

15. **Add Localization**
    - Create translation files for Spanish (es_PR)
    - Support bilingual audience

16. **SEO Optimization**
    - Add meta descriptions
    - Optimize image alt text
    - Create XML sitemap
    - Submit to Google Search Console

---

## Technical Reference

### File Locations

| File Type | Location | Purpose |
|-----------|----------|---------|
| Static Site CSS | `/home/jay/github/is373/static/css/styles.css` | Original source |
| Theme CSS | `/home/jay/github/is373/theme/rangefit-theme/assets/rangefit-theme.css` | Active theme CSS |
| Static Site JS | `/home/jay/github/is373/docs_site/main.js` | Original source |
| Theme JS | `/home/jay/github/is373/theme/rangefit-theme/assets/rangefit-theme.js` | Active theme JS |
| Static Site HTML | `/home/jay/github/is373/docs_site/index.html` | Original source |
| Theme Layout | `/home/jay/github/is373/theme/rangefit-theme/layout/theme.liquid` | Active layout |

---

### Important Links

- **Store Admin:** https://rangefit-dev.myshopify.com/admin
- **Theme Preview:** https://rangefit-dev.myshopify.com/?preview_theme_id=182405005605
- **Theme Editor:** https://rangefit-dev.myshopify.com/admin/themes/182405005605/editor
- **Local Dev:** http://127.0.0.1:9292

---

### Shopify CLI Commands Quick Reference

```bash
# Authentication
shopify auth login

# List themes
shopify theme list --store=rangefit-dev.myshopify.com

# Development server
shopify theme dev --store=rangefit-dev.myshopify.com

# Push theme
shopify theme push --store=rangefit-dev.myshopify.com --theme=182405005605

# Pull theme
shopify theme pull --store=rangefit-dev.myshopify.com --theme=182405005605

# Validate theme
shopify theme check

# Publish theme
shopify theme publish --theme=182405005605 --store=rangefit-dev.myshopify.com
```

---

## Design Tokens

### Colors

```css
/* Primary - Blue */
--blue-500: #38B2FF;     /* Primary blue */
--blue-600: #0099FF;     /* Hover state */
--blue-700: #0088E6;     /* Active state */

/* Accent - Green */
--green-500: #38A169;    /* Primary green */
--green-600: #2F855A;    /* Hover state */
--green-700: #276749;    /* Active state */

/* Neutrals */
--gray-500: #718096;     /* Body text */
--gray-700: #2D3748;     /* Headings */
--gray-900: #171923;     /* Darkest text */
```

### Typography

```css
/* Fonts */
--font-display: "Plus Jakarta Sans", "Inter", -apple-system, sans-serif;
--font-body: "Inter", -apple-system, sans-serif;

/* Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
```

### Spacing (8pt Grid)

```css
--space-xs: 0.25rem;     /* 4px */
--space-sm: 0.5rem;      /* 8px */
--space-base: 1rem;      /* 16px */
--space-lg: 1.5rem;      /* 24px */
--space-xl: 2rem;        /* 32px */
--space-2xl: 2.5rem;     /* 40px */
--space-3xl: 3rem;       /* 48px */
--space-4xl: 4rem;       /* 64px */
--space-5xl: 5rem;       /* 80px */
```

---

## Troubleshooting

### CSS Not Loading

**Symptoms:**
- Theme looks unstyled
- Basic HTML only
- Missing colors, fonts, spacing

**Check:**
1. Browser DevTools → Network tab
2. Look for `rangefit-theme.css`
3. Check HTTP status code

**Solutions:**
- **404:** Re-push CSS file
- **Minification error:** Check CSS syntax (unclosed comments, brackets)
- **Cached:** Hard refresh (Ctrl+Shift+R)

---

### Sections Not Appearing

**Symptoms:**
- Homepage is blank
- Sections missing

**Check:**
1. Theme Editor → Customize
2. Check if sections are added to template

**Solutions:**
- Add sections via Theme Editor
- Check `templates/index.json` for section configuration
- Verify section files exist in `sections/` folder

---

### Images Not Displaying

**Symptoms:**
- Broken image icons
- Missing hero background

**Check:**
1. Theme Editor → Section settings
2. Verify image is uploaded

**Solutions:**
- Upload images via Theme Editor
- Use Shopify CDN URLs
- Check image file paths

---

## Success Metrics

### What Works ✅

- ✅ Shopify CLI installed and authenticated
- ✅ Custom theme created from skeleton
- ✅ RangeFit CSS/JS integrated
- ✅ Custom sections built (Hero, Value Props, Pricing, Header, Footer)
- ✅ Homepage template configured
- ✅ CSS syntax error fixed
- ✅ Theme deployed to Shopify
- ✅ Live preview functional
- ✅ Styles loading correctly
- ✅ Font Awesome icons working
- ✅ Custom fonts (Inter, Plus Jakarta Sans) loaded
- ✅ Responsive design maintained

### What's Next 📋

- ⏳ Upload hero background image
- ⏳ Upload logo
- ⏳ Create navigation menus
- ⏳ Add testimonials section
- ⏳ Add FAQ section
- ⏳ Add contact form
- ⏳ Create products
- ⏳ Test checkout flow

---

## Support & Resources

### Shopify Documentation
- **Theme Development:** https://shopify.dev/docs/themes
- **Liquid Reference:** https://shopify.dev/docs/api/liquid
- **CLI Reference:** https://shopify.dev/docs/themes/tools/cli

### RangeFit Resources
- **Static Site:** `/home/jay/github/is373/docs_site/`
- **Design System:** `/home/jay/github/is373/static/css/styles.css`
- **Theme Location:** `/home/jay/github/is373/theme/rangefit-theme/`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Oct 24, 2025 | Initial theme creation and deployment |
| 1.1 | Oct 24, 2025 | CSS syntax fix (unclosed comment) |

---

## Credits

**Developer:** James (Dev Agent)
**Client:** Jay Singh (js426@njit.edu)
**Project:** RangeFit Shopify Theme Migration
**Framework:** Shopify Theme (Liquid)
**Base:** Shopify Skeleton Theme

---

**End of Documentation**

*Last Updated: October 24, 2025*
