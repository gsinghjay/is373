### **Phase 1: Configuration & Content**

This phase involves swapping out all the "Legs on the Ground" data with your RangeFit content.

#### **Step 1: Update the Main Configuration**

First, let's update the core site information.

*   **File to Edit:** `content/config.yaml`

Replace the entire contents of this file with your RangeFit information:

```yaml
# Site Configuration for RangeFit
site:
  title: "RangeFit"
  tagline: "AI Glucose Fitness for Everyday People"
  description: "Affordable, adaptive AI-powered fitness coaching for people with diabetes, pre-diabetes, or PCOS. Feel more energized, confident, and in control of your health. Start with our free 7-day plan."
  url: "https://your-domain.com" # Replace with your actual domain when you have one
  author: "Jay Singh"
  language: "en"

  # Contact Information
  phone: "" # Add your business phone if you have one
  phone_raw: ""
  email: "jay@rangefit.com" # Replace with your actual contact email
  whatsapp: "" # Add your WhatsApp number if you use it

  # Social Media (fill these in with your actual URLs)
  social:
    facebook: ""
    instagram: ""
    linkedin: ""
    twitter: ""
    tiktok: "https://tiktok.com/@your-rangefit-handle" # Important for your strategy

  # SEO Keywords for RangeFit
  keywords:
    - "glucose-aware fitness"
    - "AI fitness coaching"
    - "PCOS workout"
    - "diabetes exercise"
    - "pre-diabetes fitness"
    - "insulin resistance workout"
    - "affordable CGM alternative"
    - "RangeFit"

# Build Configuration (No changes needed here)
build:
  output_dir: "docs"
  static_dir: "static"
  template_dir: "templates"

# Feature Flags
features:
  show_blog: false
  show_testimonials: true
  show_whatsapp_float: true # Keep this if you use WhatsApp
  show_pricing: true
  enable_analytics: false
```

#### **Step 2: Update the Navigation**

The current navigation is for a multi-section page. We will adapt it for RangeFit's key sections.

*   **File to Edit:** `content/data/navigation.yaml`

Replace the contents with:

```yaml
# RangeFit Navigation Configuration
main_nav:
  - title: "How It Works"
    url: "#how-it-works"
    id: "how-it-works"
  - title: "Pricing"
    url: "#pricing"
    id: "pricing"
  - title: "Testimonials"
    url: "#testimonials"
    id: "testimonials"
  - title: "Community"
    url: "#community"
    id: "community"
  - title: "Get Your Free Plan"
    url: "#free-plan"
    id: "free-plan"
    highlight: true # This will style it as a primary button

footer_nav:
  company:
    title: "Quick Links"
    links:
      - title: "How It Works"
        url: "#how-it-works"
      - title: "Pricing"
        url: "#pricing"
      - title: "Testimonials"
        url: "#testimonials"
      - title: "Get Your Free Plan"
        url: "#free-plan"```

#### **Step 3: Replace Services with Your Offers**

We'll repurpose the "Services" section to display your pricing tiers.

*   **File to Edit:** `content/data/services.yaml`

Replace the contents with your core offers. We'll start with the Free Plan and Premium Plan.

```yaml
# RangeFit Offers / Pricing Tiers
services:
  - id: free-plan
    title: "Free 7-Day Plan"
    icon: "fa-leaf" # Represents a gentle start
    price: "Free"
    price_period: "PDF Download"
    badge: "Start Here"
    order: 1
    description: |
      Get a feel for glucose-friendly fitness with our 7-day introductory plan. 
      No commitment, no app required.
    features:
      - "3 glucose-stabilizing workouts"
      - "Exercise timing guide for stable energy"
      - "Simple energy tracking sheet"
      - "Delivered instantly as a PDF"
      - "The perfect first step"
      
  - id: premium-plan
    title: "RangeFit Premium"
    icon: "fa-robot" # Represents the AI
    price: "$14.99"
    price_period: "per month"
    badge: "Full Power"
    order: 2
    description: |
      Unlock the full power of our adaptive AI, personalized coaching, and supportive 
      community.
    features:
      - "AI-Personalized Workouts"
      - "Full Workout Library Access"
      - "Progress & Glucose Pattern Tracking"
      - "Private Community Access (Discord)"
      - "Direct Support & Motivation"

  - id: pro-plan
    title: "RangeFit Pro"
    icon: "fa-chart-line" # Represents advanced analytics
    price: "$24.99"
    price_period: "per month"
    badge: null
    order: 3
    description: |
      For those who want advanced analytics, live coaching, and priority support to 
      accelerate their results.
    features:
      - "Everything in Premium, plus:"
      - "Advanced Analytics Dashboard"
      - "Monthly Live Group Coaching Calls"
      - "Priority Support Queue"
      - "Beta Access to New Features"
```

#### **Step 4: Update Testimonials**

Use the persona-driven testimonials from your documentation.

*   **File to Edit:** `content/data/testimonials.yaml`

Replace the contents with:

```yaml
# RangeFit Testimonials
testimonials:
  - id: sarah-c
    name: "Sarah C."
    location: "Teacher with PCOS"
    rating: 5
    order: 1
    quote: |
      I've tried so many workout apps, but they always left me exhausted. This is the 
      first one that made me feel *more* energized, not less. I didn't crash at 3pm 
      for the first time in months.

  - id: maria-t
    name: "Maria T."
    location: "Pre-diabetic"
    rating: 5
    order: 2
    quote: |
      I wanted to try Signos but $130/month? No way. RangeFit does the same thing for 
      10x less. My fasting glucose dropped 12 points in the first three weeks. 
      My doctor was shocked.

  - id: jen-k
    name: "Jen K."
    location: "Managing Type 2 Diabetes"
    rating: 5
    order: 3
    quote: |
      The community alone is worth the price. It's so encouraging to talk to people 
      who just *get it*. I finally feel like I'm not doing this alone.
```

#### **Step 5: Update Value Propositions & "Why Choose Us"**

These sections map directly to your differentiators.

1.  **File to Edit:** `content/data/value-props.yaml`

    ```yaml
    # RangeFit Key Differentiators
    value_props:
      - id: adaptive-ai
        title: "Truly Adaptive AI"
        icon: "fa-robot"
        order: 1
        description: |
          Our AI learns from your glucose patterns and energy levels to create workouts 
          that work *with* your body, not against it.

      - id: affordable-pricing
        title: "10x More Affordable"
        icon: "fa-hand-holding-usd"
        order: 2
        description: |
          Get premium glucose-aware fitness coaching for the price of a few coffees, 
          not a car payment. Just $14.99/month.

      - id: community-focus
        title: "A Community That Gets It"
        icon: "fa-users"
        order: 3
        description: |
          Join thousands of people just like you. Share wins, ask questions, and get 
          support from a community on the same journey.
    ```

2.  **File to Edit:** `content/data/why-choose.yaml` (We'll re-purpose this to be about the "Everyman" approach).

    ```yaml
    # Why Choose RangeFit - The "Everyman" Approach
    why_choose:
      section_title: "Fitness That Feels Like It's Made For You"
      
      reasons:
        - id: for-real-people
          title: "For Real People, Not Elite Athletes"
          icon: "fa-user-friends"
          image: "images/about/rangefit-community.jpg" # You will need to add this image
          image_alt: "A diverse group of everyday people smiling and supporting each other"
          order: 1
          description: |
            We're not about 'crushing goals' or 'elite performance'. We're about feeling 
            good, having more energy, and building a sustainable, healthy habit. 
            Progress, not perfection.

        - id: simple-science
          title: "Simple Science, Not Clinical Jargon"
          icon: "fa-lightbulb"
          image: "images/about/rangefit-simple.jpg" # You will need to add this image
          image_alt: "A simple, clean interface on a phone showing an energy graph"
          order: 2
          description: |
            We handle the complex science of glucose and exercise so you don't have to. 
            Our app gives you simple, actionable guidance that's easy to understand 
            and follow.

        - id: unity-and-belonging
          title: "Unity and Belonging"
          icon: "fa-heart"
          image: "images/about/rangefit-support.jpg" # You will need to add this image
          image_alt: "Two friends encouraging each other during a home workout"
          order: 3
          description: |
            Unlike intimidating clinical apps, RangeFit is built on the principle of 
            unity. Join a community where you belong, feel understood, and get cheered on 
            every step of the way.
    ```

#### **Step 6: Update the Homepage Content & Hero**

This step injects your primary landing page copy.

*   **File to Edit:** `content/pages/home.md`

Replace the contents with:

```markdown
---
title: "RangeFit | AI Glucose Fitness for Everyday People"
description: "Get stable energy all day with our free 7-day glucose-friendly workout plan. Affordable AI fitness for PCOS, pre-diabetes, and insulin resistance."
layout: "home"
page_id: "home"

# Hero Section
hero:
  title: "Get Energy That Lasts All Day"
  subtitle: "The free 7-day glucose-friendly workout plan for people managing blood sugar. No expensive CGM, no gym, no one-size-fits-all advice."
  image: "images/hero/rangefit-hero.jpg" # You will need to add this image
  image_alt: "Relatable woman in workout clothes smiling while doing a simple exercise at home"
  cta_primary:
    text: "Get My Free Plan"
    url: "#free-plan"
    icon: "fa-download"
  cta_secondary:
    text: "See Pricing"
    url: "#pricing"
    icon: "fa-dollar-sign"

# CTA Section (at the bottom of the page)
cta:
  title: "Ready to Feel Energized All Day?"
  description: "Get your free 7-day plan in 30 seconds and take the first step towards stable energy and better health."
  background_image: "images/hero/rangefit-hero.jpg" # Use the same hero image
  buttons:
    - text: "Send Me the Free Plan"
      url: "#free-plan"
      icon: "fa-paper-plane"
      style: "primary"
  guarantee:
    icon: "fa-shield-alt"
    text: "100% Free • No Credit Card Required • Unsubscribe Anytime"
---
```

---

### **Phase 2: Branding & Styling**

Now we'll make the site *look* like RangeFit.

#### **Step 7: Update Colors and Fonts**

Your "Everyman" archetype calls for a friendly, encouraging, and trustworthy color palette. We'll replace the corporate navy/coral with a more energetic and welcoming theme.

*   **File to Edit:** `static/css/styles.css`

Find the `:root { ... }` section at the top of the file and replace the color variables with these. This new palette uses a friendly blue, a vibrant green for action, and a warm gray.

```css
/* RangeFit Color Palette - Friendly, Energetic, Trustworthy */

/* Primary - Friendly Blue (Trust, Calm) */
--blue-50: #EBF8FF;
--blue-100: #D1EEFF;
--blue-200: #B2E2FF;
--blue-300: #8FD5FF;
--blue-400: #66C5FF;
--blue-500: #38B2FF;     /* Primary blue */
--blue-600: #0099FF;     /* Hover state */
--blue-700: #0088E6;     /* Active state */
--blue-800: #0077CC;
--blue-900: #005FA3;

/* Accent - Energetic Green (Health, Action, Success) */
--green-50: #F0FFF4;
--green-100: #C6F6D5;
--green-200: #9AE6B4;
--green-300: #68D391;
--green-400: #48BB78;
--green-500: #38A169;     /* Primary green */
--green-600: #2F855A;     /* Hover state */
--green-700: #276749;     /* Active state */
--green-800: #22543D;
--green-900: #1C4532;

/* Neutrals - Warm & Approachable */
--gray-50: #F7FAFC;
--gray-100: #EDF2F7;
--gray-200: #E2E8F0;
--gray-300: #CBD5E0;
--gray-400: #A0AEC0;
--gray-500: #718096;     /* Body text */
--gray-600: #4A5568;
--gray-700: #2D3748;     /* Headings */
--gray-800: #1A202C;
--gray-900: #171923;

--white: #FFFFFF;
--black: #000000;
```

Next, search for these old variable names in `styles.css` and replace them:
*   `--coral-` should be replaced with `--green-` (for buttons and accents).
*   `--navy-` should be replaced with `--blue-` or `--gray-` (for text and backgrounds).
*   `--teal-` can also be replaced with `--green-` or `--blue-`.

This will instantly change the site's entire look and feel to be more aligned with a modern health app.

#### **Step 8: Update the Logo**

The logo text is hardcoded. Let's fix that.

*   **File to Edit:** `templates/components/header.html`

Find this line:
`<span class="logo-name">Legs on the Ground</span>`

And change it to use the site title from your config file:
`<span class="logo-name">{{ site.title }}</span>`

#### **Step 9: Replace All Images**

You will need to source your own images that match the RangeFit brand. Place them in the `static/images/` directory, creating subfolders as needed (e.g., `static/images/hero/`, `static/images/about/`).

Update the image paths you defined in the YAML files in **Step 5**. Here are the new images you need to add:
*   `static/images/hero/rangefit-hero.jpg`
*   `static/images/about/rangefit-community.jpg`
*   `static/images/about/rangefit-simple.jpg`
*   `static/images/about/rangefit-support.jpg`
*   And any other images for services, etc.

*   **Tip:** Use Unsplash or Pexels for high-quality, free stock photos. Search for terms like "home workout," "diverse fitness," "happy healthy," "women supporting women." Avoid generic, "perfect" fitness models.

---

### **Phase 3: Final Touches**

#### **Step 10: Update the Contact Form**

Your landing page's main goal is to get people to download the free plan, so the contact form should be re-purposed for that.

*   **File to Edit:** `templates/sections/contact-form.html`

1.  Change the section ID to match your navigation: `id="free-plan"`.
2.  Update the title and subtitle:
    *   `<h2>Get Your Free 7-Day Plan</h2>`
    *   `<p>Enter your name and email below, and we'll send it to you instantly.</p>`
3.  Simplify the form. You only need Name and Email. You can remove the phone, location, and service dropdown fields.
4.  Update the submit button text to `"Send Me the Plan"`.
5.  Update the sidebar to reinforce the benefits of the free plan.

#### **Step 11: Build and Preview**

You are now ready to see your customized site!

1.  Open your terminal or command prompt in the project directory.
2.  Run the build command:
    ```bash
    python build.py
    ```
3.  This will generate the complete website in the `docs/` folder.
4.  To preview it locally, run a simple web server:
    ```bash
    python -m http.server --directory docs 8000
    ```
5.  Open your web browser and go to `http://localhost:8000`.

You should now see a completely re-branded and re-contented website for RangeFit! Let me know when you're ready for the next steps or if you have any questions during this process.

---

## **IMPLEMENTATION COMPLETED**

**Date:** October 15, 2025
**Status:** ✅ All 11 steps completed successfully
**Developer:** James (Full Stack Developer Agent)

### **Completion Summary**

All phases of the RangeFit rebrand have been implemented and the site has been built successfully.

#### **Phase 1: Configuration & Content** ✅
- ✅ Step 1: Updated `content/config.yaml` with RangeFit branding
  - Added location data for template compatibility (Online service, US coordinates)
- ✅ Step 2: Updated `content/data/navigation.yaml` with new navigation structure
- ✅ Step 3: Replaced `content/data/services.yaml` with 3 pricing tiers
- ✅ Step 4: Updated `content/data/testimonials.yaml` with persona testimonials
- ✅ Step 5: Updated both `content/data/value-props.yaml` and `content/data/why-choose.yaml`
- ✅ Step 6: Replaced `content/pages/home.md` with RangeFit hero content
  - Added SEO metadata section for template compatibility

#### **Phase 2: Branding & Styling** ✅
- ✅ Step 7: Updated `static/css/styles.css` with new color palette
  - Implemented Blue (#38B2FF) and Green (#38A169) color scheme
  - Added legacy variable mappings for backward compatibility
- ✅ Step 8: Updated `templates/components/header.html` to use dynamic site title

#### **Phase 3: Final Touches** ✅
- ✅ Step 9: Created `IMAGE-REQUIREMENTS.md` with sourcing guide
  - Created image directories: `static/images/hero/` and `static/images/about/`
- ✅ Step 10: Completely rewrote `templates/sections/contact-form.html`
  - Changed section ID to `#free-plan`
  - Simplified form to Name + Email only
  - Updated sidebar with free plan benefits
- ✅ Step 11: Built site successfully using `python build.py`
  - Generated output to `docs/` directory
  - Local preview server running at `http://localhost:8000`

### **Technical Notes**

1. **Virtual Environment**: Created and configured Python venv with all dependencies
2. **Build Process**: Site builds in ~0.06s without errors
3. **Color System**: Legacy CSS variables (coral, navy, teal) mapped to new Blue/Green palette for compatibility

### **Outstanding Items**

#### **Images Required** (See `IMAGE-REQUIREMENTS.md`)
- `static/images/hero/rangefit-hero.jpg` - Hero section
- `static/images/about/rangefit-community.jpg` - Community section
- `static/images/about/rangefit-simple.jpg` - Simple interface section
- `static/images/about/rangefit-support.jpg` - Support section

#### **Configuration TODO**
- Replace domain placeholder in `content/config.yaml:6` with actual domain
- Set up Formspree account and update form action in `templates/sections/contact-form.html:10`
- Add social media URLs when available
- Add WhatsApp number if using that channel

### **Files Modified**
```
content/config.yaml
content/data/navigation.yaml
content/data/services.yaml
content/data/testimonials.yaml
content/data/value-props.yaml
content/data/why-choose.yaml
content/pages/home.md
static/css/styles.css
templates/components/header.html
templates/sections/contact-form.html
```

### **Files Created**
```
IMAGE-REQUIREMENTS.md
venv/ (Python virtual environment)
```

### **Preview & Deploy**
- Local preview: `http://localhost:8000` (currently running)
- To rebuild: `source venv/bin/activate && python build.py`
- Production ready: Site can be deployed from `docs/` directory to any static host