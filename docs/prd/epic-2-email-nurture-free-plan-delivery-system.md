# Epic 2: Email Nurture & Free Plan Delivery System

**Epic Goal:** Implement ConvertKit integration, create the free 7-day workout plan PDF, build automated 7-day email nurture sequence, and enable instant PDF delivery to convert leads into trial signups.

**Success Criteria:**
- Lead form submission triggers ConvertKit tag and email sequence within 2 minutes (NFR3)
- Free 7-day workout plan PDF is delivered instantly via email
- 7-day nurture sequence is operational with proper sequencing and links
- 15-20% of leads who complete nurture sequence sign up for trial (tracked in Google Sheets)

---

## Story 2.1: ConvertKit Account Setup and Configuration

**As a** solo founder,
**I want** a properly configured ConvertKit account with forms and automation ready,
**so that** I can capture leads and send automated email sequences.

**Acceptance Criteria:**

1. ConvertKit free account created (supports up to 1,000 subscribers)
2. Account configured with:
   - Sender email: jay@rangefit.com (or custom domain email)
   - Sender name: "Jay from RangeFit" or "RangeFit Team"
   - Reply-to email configured and tested
   - Email footer with unsubscribe link (required by CAN-SPAM)
3. ConvertKit form created for lead capture:
   - Form name: "Free 7-Day Plan Lead Capture"
   - Fields: First Name, Email Address
   - Success message: "Check your inbox! Your free plan is waiting."
4. Two ConvertKit tags created:
   - Tag 1: "Free Plan Downloaded" (applied on form submit)
   - Tag 2: "Trial Signup" (applied when user purchases trial - for Epic 3)
5. ConvertKit sequence created:
   - Sequence name: "7-Day Nurture - Free Plan to Trial"
   - Trigger: Tag "Free Plan Downloaded"
   - 7 emails configured (content in Story 2.4)
6. API key generated for integrations (Zapier, custom forms)
7. Test subscriber added to verify email delivery works

---

## Story 2.2: Create Free 7-Day Workout Plan PDF

**As a** lead,
**I want** to receive a high-quality, actionable 7-day workout plan PDF,
**so that** I can experience RangeFit's value and feel motivated to upgrade to trial.

**Acceptance Criteria:**

1. PDF created with professional design (Canva, Google Docs, or similar):
   - Title page: "Your Free 7-Day Glucose-Friendly Workout Plan"
   - RangeFit branding (logo, colors matching Legs on the Ground theme)
   - 8-10 pages total (concise, not overwhelming)
2. PDF content includes:
   - **Welcome message:** Intro to glucose-aware fitness (1/2 page)
   - **How to use this plan:** Instructions for the 7 days (1/2 page)
   - **3 Workouts:** Full instructions for each workout (2-3 pages)
     - Workout 1: "Morning Energy Boost" (low-impact, 20 min)
     - Workout 2: "Afternoon Stability Flow" (moderate, 25 min)
     - Workout 3: "Evening Wind-Down" (gentle, 15 min)
   - **Exercise timing guide:** When to work out for stable energy (1 page)
   - **Energy tracking sheet:** Simple table to log pre/post-workout energy (1 page)
   - **Blood sugar basics:** Quick education on glucose and exercise (1 page)
   - **Next steps:** CTA to try the $4.99 trial with link to Shopify (1/2 page)
3. Each workout includes:
   - Exercise names and descriptions
   - Rep/time guidance (e.g., "10 squats", "30 sec plank")
   - Glucose-awareness tips (e.g., "Best for stable energy", "Avoid if low blood sugar")
   - No equipment required (bodyweight only)
4. PDF is optimized:
   - File size <5MB for fast email delivery
   - Mobile-readable (text size appropriate for phone viewing)
   - High-contrast for accessibility
5. PDF uploaded to ConvertKit file hosting OR Shopify files OR Google Drive with public link
6. PDF tested on desktop and mobile (opens correctly, readable)

---

## Story 2.3: Integrate Shopify Lead Capture Form with ConvertKit

**As a** developer,
**I want** the Shopify contact form to submit leads directly to ConvertKit,
**so that** form submissions trigger automated emails without manual work.

**Acceptance Criteria:**

1. Shopify contact form (from Epic 1 Story 1.8) is connected to ConvertKit via one of:
   - **Option A:** ConvertKit embed form (replace Shopify form with ConvertKit JavaScript embed)
   - **Option B:** Zapier integration (Shopify form → Zapier → ConvertKit)
   - **Option C:** Custom form POST to ConvertKit API endpoint
2. Form submission flow:
   - User enters First Name + Email on Shopify page
   - Form submits to ConvertKit
   - ConvertKit applies tag "Free Plan Downloaded"
   - User sees success message on Shopify page
   - Redirect to thank-you page (optional) or show inline success message
3. Form validation works:
   - Required fields enforced
   - Email format validated
   - Error messages display if submission fails
4. ConvertKit receives correct data:
   - First Name maps to ConvertKit "First Name" field
   - Email maps to ConvertKit "Email" field
   - Tag "Free Plan Downloaded" is applied automatically
5. Submission triggers automation within 2 minutes (NFR3):
   - Email 1 (PDF delivery) sends immediately
   - Subscriber appears in ConvertKit dashboard
6. Testing completed:
   - 5+ test submissions from different devices (desktop, mobile)
   - All submissions appear in ConvertKit
   - No duplicate subscribers created
   - Unsubscribe link works correctly

---

## Story 2.4: Create 7-Day Email Nurture Sequence

**As a** lead,
**I want** to receive a series of helpful, educational emails over 7 days,
**so that** I learn about RangeFit and feel confident signing up for the trial.

**Acceptance Criteria:**

1. Seven emails created in ConvertKit sequence with following schedule:
   - **Day 0 (Immediate):** PDF delivery email
   - **Day 1:** Education email (why glucose-aware fitness matters)
   - **Day 2:** Social proof email (Sarah's PCOS success story)
   - **Day 3:** How-to email (getting started with workouts)
   - **Day 4:** Objection handling (FAQ / "Is this for me?")
   - **Day 5:** Unity email (community + belonging)
   - **Day 6:** Trial offer email (final push with urgency)

2. **Email 1 (Day 0) - PDF Delivery:**
   - Subject: "Your Free 7-Day Plan is Here! 📥"
   - Body includes:
     - Personalized greeting: "Hi {{first_name}}!"
     - Download button/link to PDF
     - Quick 3-step "What to do next"
     - Invite to reply with questions
   - CTA: Download PDF + "Start Workout 1 Today"
   - Sends immediately upon tag application

3. **Email 2 (Day 1) - Education:**
   - Subject: "Why your workouts might be making you crash"
   - Body: Explain glucose crashes, why generic fitness apps fail, RangeFit approach
   - CTA: "Learn more about the Premium plan"

4. **Email 3 (Day 2) - Social Proof:**
   - Subject: "How Sarah went from 3pm crashes to stable energy"
   - Body: Testimonial story from Sarah C. (teacher with PCOS)
   - CTA: "Join 2,000+ members"

5. **Email 4 (Day 3) - How-To:**
   - Subject: "Your first workout: What to expect"
   - Body: Tips for first workout, timing guidance, energy logging instructions
   - CTA: "Complete Workout 1 and tell us how you felt"

6. **Email 5 (Day 4) - Objections:**
   - Subject: "Do I really need this? (Honest answer inside)"
   - Body: Address common objections (cost, time, "will it work for me?")
   - CTA: "See full FAQ"

7. **Email 6 (Day 5) - Unity:**
   - Subject: "You're not alone in this"
   - Body: Community story, Discord preview, "people like us" positioning
   - CTA: "Sneak peek: Join the Discord community"

8. **Email 7 (Day 6) - Trial Offer:**
   - Subject: "Ready to feel like this every day? Try 7 days for $4.99"
   - Body: Recap value, low-risk trial offer, urgency (subtle, not aggressive)
   - CTA: "Start My $4.99 Trial Now" (link to Shopify trial product)

9. All emails include:
   - Personalization with {{first_name}}
   - Mobile-responsive design
   - Clear CTA button (not just text link)
   - Footer with unsubscribe link, address, CAN-SPAM compliance
   - Consistent "Jay from RangeFit" or "RangeFit Team" sender

10. Email copy follows brief guidelines:
    - Conversational, supportive tone (not clinical)
    - Unity persuasion (community, belonging)
    - Everyman positioning (relatable, not elite athlete)
    - Social proof where appropriate

11. Email sequence tested:
    - All 7 emails reviewed for typos, broken links, formatting
    - Test subscriber receives all 7 emails on schedule
    - Links work (PDF download, Shopify trial page, FAQ anchor)
    - Unsubscribe works (subscriber removed from sequence)

---

## Story 2.5: Set Up Zapier Workflow for Lead Tracking

**As a** solo founder,
**I want** all lead form submissions automatically logged to Google Sheets,
**so that** I can track funnel metrics without manually exporting data.

**Acceptance Criteria:**

1. Zapier account created (free tier, 100 tasks/month to start)
2. Google Sheet created: "RangeFit Funnel Metrics"
   - Sheet 1: "Leads" with columns:
     - Timestamp
     - First Name
     - Email
     - Source (all "Landing Page Form" for now)
     - Status (default: "Free Plan Downloaded")
3. Zapier workflow created: "ConvertKit → Google Sheets Lead Log"
   - Trigger: New subscriber added to ConvertKit with tag "Free Plan Downloaded"
   - Action: Add row to "Leads" sheet with subscriber data
   - Timestamp auto-populated
4. Workflow tested:
   - Submit 3 test leads via Shopify form
   - Verify all 3 appear in Google Sheet within 5 minutes
   - Data is accurate (name, email match submission)
5. Zapier task usage monitored:
   - Initial estimate: ~10 leads/day = 300 tasks/month (over free tier limit)
   - Document when to upgrade to paid plan ($19.99/mo)
6. Manual backup process documented:
   - If Zapier fails, export leads from ConvertKit weekly
   - Import CSV to Google Sheets
   - Process takes <30 min/week

---

## Story 2.6: End-to-End Lead Capture Flow Testing

**As a** QA tester,
**I want** to verify the complete lead capture and nurture flow works reliably,
**so that** we can confidently launch to public traffic.

**Acceptance Criteria:**

1. **Test Case 1: Desktop Submission (Chrome, Safari)**
   - Navigate to landing page on desktop browser
   - Fill out lead capture form with test email
   - Submit form
   - **Expected:** Success message displays, no errors
   - **Expected:** Email 1 (PDF delivery) arrives within 2 minutes (NFR3)
   - **Expected:** PDF link works, file opens correctly
   - **Expected:** Subscriber appears in ConvertKit with "Free Plan Downloaded" tag
   - **Expected:** Lead logged to Google Sheets within 5 minutes
   - **Result:** Pass/Fail documented

2. **Test Case 2: Mobile Submission (iOS Safari, Android Chrome)**
   - Repeat Test Case 1 on mobile devices
   - Verify form is easy to complete on mobile (no zoom issues)
   - Verify email is readable on mobile
   - PDF opens on mobile device
   - **Result:** Pass/Fail documented

3. **Test Case 3: Email Sequence Delivery**
   - Use test subscriber from Test Case 1
   - Fast-forward ConvertKit sequence (or wait 7 days)
   - Verify all 7 emails deliver on schedule
   - Verify personalization works ({{first_name}} populates)
   - Verify all links work (PDF, Shopify trial, FAQ anchors)
   - **Result:** Pass/Fail documented

4. **Test Case 4: Duplicate Email Handling**
   - Submit form with same email twice
   - **Expected:** ConvertKit does not create duplicate subscriber
   - **Expected:** Tag is reapplied (or no error occurs)
   - **Expected:** User does not receive duplicate emails
   - **Result:** Pass/Fail documented

5. **Test Case 5: Invalid Email Handling**
   - Submit form with invalid email (e.g., "test@test")
   - **Expected:** Form validation error displays
   - **Expected:** Form does not submit
   - **Result:** Pass/Fail documented

6. **Test Case 6: Unsubscribe Flow**
   - Receive Email 1 as test subscriber
   - Click unsubscribe link
   - **Expected:** ConvertKit unsubscribe page loads
   - **Expected:** Subscriber is removed from sequence
   - **Expected:** No further emails received
   - **Result:** Pass/Fail documented

7. **Test Case 7: Performance (NFR3)**
   - Submit lead form
   - Record timestamp
   - Check email inbox
   - **Expected:** Email 1 arrives within 2 minutes
   - **Actual:** Record delivery time
   - **Result:** Pass if <2 min, Fail if >2 min

8. **Test Case 8: Zapier Workflow**
   - Submit lead form
   - Wait 5 minutes
   - Check Google Sheets "Leads" tab
   - **Expected:** New row added with correct data
   - **Result:** Pass/Fail documented

9. All test results documented in test log:
   - Date tested
   - Test case #
   - Result (Pass/Fail)
   - Notes (any issues observed)
10. Critical bugs fixed before Epic 2 completion:
    - Email delivery failures
    - Form submission errors
    - Broken PDF links
    - Missing data in ConvertKit or Google Sheets

---

## Story 2.7: Optimize Email Deliverability and Spam Prevention

**As a** solo founder,
**I want** emails to land in recipients' inboxes (not spam),
**so that** leads actually receive the free plan and nurture sequence.

**Acceptance Criteria:**

1. **SPF/DKIM Records Configured:**
   - ConvertKit provides SPF/DKIM instructions for custom domain
   - DNS records added to domain registrar (Namecheap or similar)
   - ConvertKit verifies domain authentication
   - Test email sent, verify passes SPF/DKIM checks (use mail-tester.com)

2. **Sender Reputation Monitored:**
   - Use free email reputation checker (e.g., SenderScore, mail-tester.com)
   - Score >8/10 before launching to public
   - If score <8, investigate and fix issues (content, formatting, authentication)

3. **Email Content Optimized:**
   - Avoid spam trigger words (FREE, URGENT, $$, etc.) in subject lines
   - Balance text-to-image ratio (not all images)
   - Include plain text version of emails (ConvertKit auto-generates)
   - Unsubscribe link prominent in footer
   - Physical address in footer (ConvertKit requires)

4. **Test Deliverability Across Providers:**
   - Send test emails to:
     - Gmail account
     - Outlook/Hotmail account
     - Yahoo account
     - Apple iCloud account
   - Verify emails land in inbox (not spam/promotions tab)
   - **Acceptable:** Gmail promotions tab is OK, spam folder is NOT OK
   - If >50% land in spam, troubleshoot before launch

5. **Engagement Monitoring Setup:**
   - ConvertKit tracks open rates and click rates by default
   - Week 1 target: >30% open rate, >5% click rate (industry average)
   - If below targets, A/B test subject lines (Story for Epic 2 post-launch iteration)

6. **Bounce Handling:**
   - ConvertKit automatically removes hard bounces
   - Soft bounces retry automatically
   - No manual action needed, but monitor bounce rate (<5% acceptable)

---
