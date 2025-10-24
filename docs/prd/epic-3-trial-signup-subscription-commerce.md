# Epic 3: Trial Signup & Subscription Commerce

**Epic Goal:** Build trial signup flow with Shopify subscriptions, enable $4.99 trial → $14.99/month recurring payment processing, automate trial conversion tracking, and integrate payment flows with ConvertKit and analytics.

**Success Criteria:**
- Users can successfully purchase $4.99 7-day trial via Shopify checkout
- Trials automatically convert to $14.99/month recurring subscription after 7 days
- 15-20% trial-to-paid conversion rate achieved (tracked in Google Sheets)
- Payment processing is PCI-compliant via Shopify Payments/Stripe (NFR8)
- All subscription events (trial start, conversion, churn) are logged for analytics

---

## Story 3.1: Configure Shopify Subscriptions and Payment Gateway

**As a** solo founder,
**I want** Shopify subscriptions enabled with payment processing configured,
**so that** I can sell recurring subscription products.

**Acceptance Criteria:**

1. **Shopify Subscriptions App Installed:**
   - Navigate to Shopify App Store
   - Install "Subscriptions" app (native Shopify app, included with Basic plan)
   - App permissions granted and activated

2. **Payment Gateway Configured:**
   - **Option A (Preferred):** Shopify Payments activated
     - Business information completed (legal name, address, tax ID if applicable)
     - Bank account connected for payouts
     - Test mode enabled initially
   - **Option B (Alternative):** Stripe payment gateway connected
     - Stripe account created and connected to Shopify
     - Webhooks configured for subscription events
   - Payment gateway tested with test credit card in sandbox mode

3. **Subscription Settings Configured:**
   - Billing cycle options enabled (weekly, monthly)
   - Trial period options enabled (7 days)
   - Dunning management configured (automatic retry for failed payments)
   - Customer notification emails enabled:
     - Subscription confirmation
     - Payment success
     - Payment failed
     - Trial ending reminder (2 days before conversion)

4. **Tax and Legal Settings:**
   - Sales tax collection configured (if required for US states)
   - Refund policy documented
   - Terms of service updated to include subscription terms
   - Cancellation policy clear ("cancel anytime, no fees")

5. **Test Transactions Completed:**
   - 3+ test purchases in sandbox mode (trial + recurring)
   - Verify funds flow correctly in test environment
   - Verify Shopify admin shows subscriptions correctly

---

## Story 3.2: Create Subscription Products (Trial, Premium, Pro)

**As a** customer,
**I want** to see and purchase subscription plans that match my needs,
**so that** I can access RangeFit services.

**Acceptance Criteria:**

1. **Product 1: RangeFit Trial (7-Day Trial)**
   - Product name: "RangeFit 7-Day Trial"
   - Price: $4.99 for 7 days, then $14.99/month recurring
   - Product type: Subscription (via Shopify Subscriptions app)
   - Trial duration: 7 days
   - Billing frequency: Monthly (after trial)
   - Product description:
     - "Try RangeFit risk-free for 7 days"
     - Lists Premium features (AI workouts, library access, Discord, tracking)
     - Clear disclosure: "Automatically converts to $14.99/month after 7 days. Cancel anytime."
   - Product image: RangeFit branded graphic (create in Canva)
   - SKU: RANGEFIT-TRIAL-001
   - Inventory: Digital product (unlimited stock)

2. **Product 2: RangeFit Premium (Direct Subscription)**
   - Product name: "RangeFit Premium"
   - Price: $14.99/month recurring (no trial)
   - Product type: Subscription
   - Billing frequency: Monthly
   - Product description: Same features as trial, but for users who skip trial
   - Product image: RangeFit branded graphic
   - SKU: RANGEFIT-PREMIUM-001
   - **Note:** Most users will use Trial product; this is for direct signups

3. **Product 3: RangeFit Pro**
   - Product name: "RangeFit Pro"
   - Price: $24.99/month recurring
   - Product type: Subscription
   - Billing frequency: Monthly
   - Product description:
     - "Everything in Premium, plus:"
     - Advanced analytics, live coaching calls, priority support, beta features
   - Product image: RangeFit branded graphic (premium styling)
   - SKU: RANGEFIT-PRO-001
   - **Note:** Not actively promoted in MVP; available for power users

4. **Product Collection Created:**
   - Collection name: "RangeFit Memberships"
   - Contains all 3 subscription products
   - Collection page has description explaining differences
   - Collection is linked from landing page #pricing section

5. **Product Visibility:**
   - Trial product featured on landing page (primary CTA)
   - Products visible on /collections/memberships page
   - Products searchable in Shopify site search

6. **Product Metafields (Optional for MVP):**
   - Badge label (e.g., "Most Popular" for Trial)
   - Features list (structured data for future use)

---

## Story 3.3: Build Trial Signup Landing Page / Product Page

**As a** prospective customer,
**I want** a clear, compelling page explaining the trial offer,
**so that** I feel confident purchasing.

**Acceptance Criteria:**

1. **Product page created for Trial product** (or custom Shopify page template):
   - URL: `/products/rangefit-trial` OR custom `/trial` page
   - Accessible from email nurture sequence Email 7 CTA link
   - Accessible from landing page hero CTA

2. **Page Content:**
   - **Hero Section:**
     - Headline: "Start Your 7-Day Trial for $4.99"
     - Subheadline: "Get full access to RangeFit Premium. Cancel anytime before Day 7 if it's not for you."
     - Primary CTA: "Start My Trial" (btn-primary, scrolls to checkout or adds to cart)
   - **What's Included:**
     - List of Premium features (same as landing page services section)
     - Icons + descriptions (AI workouts, library, Discord, tracking, support)
   - **How It Works:**
     - Step 1: Sign up for $4.99 trial today
     - Step 2: Get instant access to workouts and community
     - Step 3: Automatically continue at $14.99/month after 7 days (or cancel)
   - **Social Proof:**
     - 2-3 testimonials from landing page
     - "Join 2,000+ members" badge
   - **FAQ Section:**
     - "Can I cancel anytime?" - Yes, no fees
     - "What happens after 7 days?" - Auto-renews at $14.99/month
     - "Do I need a CGM?" - No (reference main FAQ)

3. **Trial Terms Disclosure:**
   - Clear statement above "Start My Trial" button:
     - "Your trial starts today for $4.99. After 7 days, you'll be charged $14.99/month. Cancel anytime in your account settings."
   - Checkbox (optional but recommended): "I understand the trial terms" (checked by default)
   - Link to full Terms of Service

4. **Add to Cart / Checkout Button:**
   - Button: "Start My Trial" (btn-primary btn-lg)
   - Click adds Trial product to cart and redirects to Shopify checkout
   - Or, if using buy button, opens checkout modal directly

5. **Mobile Responsiveness:**
   - Page is fully responsive (mobile-first design)
   - CTA buttons within thumb reach on mobile
   - Text readable without zooming

6. **SEO & Meta:**
   - Page title: "Try RangeFit Free for 7 Days | $4.99 Trial"
   - Meta description optimized for conversions
   - Canonical URL set

---

## Story 3.4: Customize Shopify Checkout Experience

**As a** customer,
**I want** a smooth, trustworthy checkout experience,
**so that** I feel safe completing my purchase.

**Acceptance Criteria:**

1. **Checkout Branding:**
   - Shopify checkout logo set to RangeFit logo
   - Checkout colors match brand (primary blue, accent green from Legs on the Ground)
   - Checkout background color: white or light gray
   - Button color: Coral/primary color from design system

2. **Checkout Fields:**
   - Email address (required, auto-populates if logged in)
   - Payment method (credit card via Shopify Payments/Stripe)
   - Billing address (required for payment processing)
   - **Optional:** Phone number (for order updates - make optional)
   - No unnecessary fields (minimize friction per NFR10)

3. **Subscription Disclosure in Checkout:**
   - Order summary clearly states:
     - "RangeFit 7-Day Trial: $4.99 today"
     - "Then $14.99/month starting [date]"
   - Subscription icon or badge visible in order summary

4. **Trust Signals:**
   - Secure payment badges (Shopify shows these by default)
   - "Powered by Shopify" or "Secured by Stripe" badge
   - Lock icon in browser (SSL from Epic 1)
   - Money-back guarantee or cancellation policy link

5. **Mobile Checkout Optimization:**
   - Shopify's mobile checkout is optimized by default
   - Test on iOS and Android devices
   - Apple Pay / Google Pay enabled (if supported by payment gateway)
   - Autofill works for credit card and address fields

6. **Post-Purchase Experience:**
   - Order confirmation page shows:
     - "Thank you! Your trial has started."
     - Next steps: "Check your email for access instructions"
     - Discord invite CTA (will be implemented in Epic 4, placeholder for now)
   - Shopify order confirmation email sent automatically

7. **Checkout Performance:**
   - Checkout page loads in <2 seconds (Shopify standard)
   - No errors during test purchases

---

## Story 3.5: Automate Trial Purchase → ConvertKit Tag & Welcome Email

**As a** system,
**I want** to automatically tag trial purchasers in ConvertKit and send a welcome email,
**so that** new members receive onboarding without manual work.

**Acceptance Criteria:**

1. **Zapier Workflow Created: "Shopify Order → ConvertKit Tag"**
   - Trigger: New order in Shopify for product "RangeFit Trial" OR any subscription product
   - Filter: Order financial status = "paid"
   - Action 1: Find or create subscriber in ConvertKit with order email
   - Action 2: Apply tag "Trial Signup" to subscriber
   - Action 3: Remove tag "Free Plan Downloaded" (if present - they converted!)

2. **ConvertKit Automation: Trial Welcome Sequence**
   - Sequence name: "Trial Welcome & Onboarding"
   - Trigger: Tag "Trial Signup" applied
   - **Email 1 (Immediate):** "Welcome to RangeFit! Here's How to Get Started"
     - Subject: "You're in! Welcome to RangeFit 🎉"
     - Body:
       - Confirm trial has started
       - Quick start guide: 3 steps to first workout
       - Link to member dashboard (Epic 4, placeholder: "Log in to Shopify account")
       - Discord invite link (Epic 4, placeholder)
       - Reminder: Trial converts to $14.99/month on Day 7
     - CTA: "Access My Workouts"
   - **Email 2 (Day 3):** Mid-trial check-in
     - Subject: "How's your first workout going?"
     - Body: Ask for feedback, offer support, share success tips
     - CTA: "Reply and tell us how you're feeling"
   - **Email 3 (Day 5):** Trial ending reminder
     - Subject: "Your trial converts in 2 days - here's what to expect"
     - Body: Explain conversion, share value of continuing, how to cancel if needed
     - CTA: "Manage My Subscription" (link to Shopify account)

3. **Workflow Testing:**
   - Complete test purchase of Trial product
   - Verify ConvertKit tag "Trial Signup" is applied within 5 minutes
   - Verify Email 1 (Welcome) sends immediately
   - Verify test subscriber is removed from "7-Day Nurture" sequence (avoid duplicate emails)

4. **Zapier Task Count Monitoring:**
   - Each trial purchase = 1 Zapier task
   - Estimated: 2 trials/day × 30 days = 60 tasks/month (within free tier)
   - Combined with Epic 2 lead capture: ~360 tasks/month total
   - **Action:** Upgrade Zapier to Starter plan ($19.99/mo) when approaching limit

5. **Error Handling:**
   - If Zapier fails, manual backup process:
     - Export Shopify orders daily
     - Manually tag subscribers in ConvertKit
     - Process documented in operations manual

---

## Story 3.6: Enable Subscription Management for Customers

**As a** paying customer,
**I want** to easily manage my subscription (view status, update payment, cancel),
**so that** I feel in control and not trapped.

**Acceptance Criteria:**

1. **Shopify Customer Account Pages:**
   - Customer account page accessible at `/account`
   - Customers must create account during checkout OR log in with email/password
   - Account page shows:
     - Current subscription status (Active, Trial, Cancelled)
     - Next billing date
     - Billing amount ($14.99/month or $24.99/month)
     - Payment method (last 4 digits of card)

2. **Subscription Management Actions:**
   - **Update Payment Method:**
     - Link/button to update credit card
     - Opens Shopify payment update flow
     - Test: Update card, verify new card is charged on next billing
   - **Pause Subscription (Optional for MVP):**
     - If Shopify Subscriptions app supports pausing, enable it
     - Otherwise, defer to post-MVP
   - **Cancel Subscription:**
     - Clear "Cancel Subscription" button/link
     - Confirmation modal: "Are you sure? You'll lose access to workouts and community."
     - Cancellation takes effect at end of current billing period (no refunds for partial month)
     - Test: Cancel subscription, verify billing stops, access ends at period end

3. **Subscription Emails:**
   - Shopify sends automatic emails (no custom work needed):
     - Subscription renewed (monthly charge)
     - Payment failed (dunning email)
     - Subscription cancelled confirmation
   - Customize email templates (Shopify admin):
     - Use RangeFit branding (logo, colors)
     - Friendly, supportive tone (not corporate)
     - Include support email: jay@rangefit.com

4. **Cancellation Flow Optimization (Retention Hook):**
   - Before cancellation confirms, show one-time offer or survey:
     - "Before you go, can you tell us why?" (dropdown: Too expensive, Not seeing results, Don't have time, Other)
     - Collect feedback to improve retention
     - Optional: Offer "Pause 1 month" instead of cancel
   - Feedback logged to Google Sheets (Zapier workflow)

5. **Customer Support for Subscription Issues:**
   - FAQ page includes "How to cancel" instructions with screenshots
   - Support email (jay@rangefit.com) prominently displayed
   - Expected response time: <24 hours (manual founder response for MVP)

---

## Story 3.7: Build Subscription Analytics & Tracking Dashboard

**As a** solo founder,
**I want** real-time visibility into subscription metrics,
**so that** I can track progress toward MVP goals (50+ paying members, 15-20% conversion).

**Acceptance Criteria:**

1. **Google Sheet: "RangeFit Subscription Metrics"**
   - Sheet created with 3 tabs:
     - **Tab 1: "Trials"** - Log all trial signups
     - **Tab 2: "Conversions"** - Log trial→paid conversions
     - **Tab 3: "Churn"** - Log cancellations
   - Each tab includes columns:
     - Timestamp
     - Customer Email
     - Customer Name
     - Event Type (Trial Start, Conversion, Churn)
     - MRR Impact (e.g., +$14.99 for conversion, -$14.99 for churn)
     - Source (Landing Page, Email Campaign, etc. - for future attribution)

2. **Zapier Workflows for Metric Logging:**
   - **Workflow 1:** "Trial Start → Google Sheets"
     - Trigger: Shopify order for Trial product (financial status = paid)
     - Action: Add row to "Trials" tab
   - **Workflow 2:** "Trial → Paid Conversion → Google Sheets"
     - Trigger: Shopify subscription renewed (from trial to paid recurring)
     - Action: Add row to "Conversions" tab
     - **Challenge:** Shopify may not have direct trigger for this; may need webhook or manual tracking
     - **Alternative:** Track manually for MVP, automate post-MVP with custom app
   - **Workflow 3:** "Subscription Cancelled → Google Sheets"
     - Trigger: Shopify subscription cancelled
     - Action: Add row to "Churn" tab

3. **Google Sheet Formulas for KPIs:**
   - **MRR (Monthly Recurring Revenue):**
     - Formula: `=SUMIF(Conversions!E:E, ">0", Conversions!E:E) - SUMIF(Churn!E:E, "<0", Churn!E:E)`
     - Target: $750+ by Day 90 (50 members × $14.99)
   - **Trial → Paid Conversion Rate:**
     - Formula: `=COUNTIF(Conversions!A:A, ">0") / COUNTIF(Trials!A:A, ">0")`
     - Target: 15-20%
   - **Active Subscribers:**
     - Formula: Count of conversions minus count of churn
     - Target: 50+ by Day 90
   - **Churn Rate (Monthly):**
     - Formula: (Churn this month / Active subscribers start of month) × 100
     - Target: <6% per brief

4. **Dashboard Visualization:**
   - Use Google Sheets charting to create:
     - Line chart: MRR over time (weekly)
     - Funnel chart: Leads → Free Plan → Trial → Paid
     - Pie chart: Active subscribers by plan (Premium vs Pro)
   - Dashboard tab at top of sheet for at-a-glance view

5. **Weekly Review Process:**
   - Founder reviews dashboard every Monday
   - Checks: MRR growth, conversion rate, churn rate
   - Documents findings in separate "Weekly Notes" tab
   - Adjusts strategy based on data (e.g., if conversion <15%, improve trial onboarding)

6. **Shopify Native Analytics:**
   - Review Shopify Admin analytics weekly:
     - Total sales
     - Subscription count
     - Traffic sources
   - Compare with Google Sheets data for accuracy

---

## Story 3.8: End-to-End Trial Purchase & Conversion Flow Testing

**As a** QA tester,
**I want** to verify the complete trial purchase and conversion flow works reliably,
**so that** we can confidently sell subscriptions.

**Acceptance Criteria:**

1. **Test Case 1: Trial Purchase (Desktop)**
   - Navigate to `/trial` page (or trial product page)
   - Click "Start My Trial" CTA
   - Complete Shopify checkout with test credit card
   - **Expected:** Order confirmation page loads
   - **Expected:** Order confirmation email received
   - **Expected:** ConvertKit tag "Trial Signup" applied
   - **Expected:** Welcome email (Email 1) received within 2 minutes
   - **Expected:** Google Sheets "Trials" tab updated with new row
   - **Expected:** Shopify admin shows subscription as "Active - Trial"
   - **Result:** Pass/Fail documented

2. **Test Case 2: Trial Purchase (Mobile)**
   - Repeat Test Case 1 on iOS Safari and Android Chrome
   - Verify mobile checkout is smooth (Apple Pay/Google Pay work if available)
   - **Result:** Pass/Fail documented

3. **Test Case 3: Trial → Paid Conversion (Simulated)**
   - Create test trial subscription
   - Fast-forward 7 days (or manually trigger renewal in Shopify admin test mode)
   - **Expected:** Shopify charges $14.99 to test card
   - **Expected:** Subscription status changes to "Active - Recurring"
   - **Expected:** Google Sheets "Conversions" tab updated (if automation works)
   - **Expected:** Customer receives "Subscription Renewed" email
   - **Result:** Pass/Fail documented

4. **Test Case 4: Failed Payment Handling**
   - Create trial subscription with test card that will decline
   - Fast-forward to renewal date
   - **Expected:** Shopify sends "Payment Failed" dunning email
   - **Expected:** Shopify retries payment per dunning settings
   - **Expected:** After X failed retries, subscription marked "Expired"
   - **Result:** Pass/Fail documented

5. **Test Case 5: Customer Subscription Cancellation**
   - Log in to Shopify customer account
   - Navigate to subscription management
   - Click "Cancel Subscription"
   - Confirm cancellation
   - **Expected:** Subscription marked "Cancelled" effective at period end
   - **Expected:** Customer receives cancellation confirmation email
   - **Expected:** Google Sheets "Churn" tab updated
   - **Expected:** Access continues until end of billing period
   - **Result:** Pass/Fail documented

6. **Test Case 6: Duplicate Purchase Prevention**
   - Attempt to purchase Trial product twice with same email
   - **Expected:** Shopify allows it (separate orders) OR blocks duplicate subscription
   - **Note:** Shopify behavior depends on settings - document actual behavior
   - **Result:** Pass/Fail documented

7. **Test Case 7: Zapier Workflow Reliability**
   - Complete 5 trial purchases in succession
   - Verify all 5 trigger Zapier workflows correctly
   - Check for any delays or failures
   - **Expected:** 100% success rate (5/5 workflows execute)
   - **Result:** Pass/Fail documented

8. **Test Case 8: PCI Compliance (NFR8)**
   - Verify Shopify checkout uses HTTPS (SSL)
   - Verify credit card fields are Shopify/Stripe hosted (iframe, not custom HTML)
   - Verify no credit card data is stored in custom database
   - **Expected:** All PCI requirements met via Shopify Payments
   - **Result:** Pass/Fail documented

9. **All Critical Bugs Fixed:**
   - Payment processing failures
   - Zapier workflow failures
   - Missing confirmation emails
   - Broken subscription management features

---
