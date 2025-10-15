# RangeFit: Marketing Tech Stack & KPI Tracking Plan

**Last Updated:** 2025-10-10
**Owner:** Jay Singh
**Stage:** Pre-Launch / MVP
**Budget Assumption:** <$200/month total

---

## Philosophy: Simple, Integrated, Actionable

As a solopreneur, you need tools that:
1. **Work out of the box** (minimal setup)
2. **Integrate easily** (no custom code)
3. **Scale with you** (free → paid tiers)
4. **Give you data** (track KPIs without manual work)

---

## Recommended Tech Stack

### 1. Landing Pages & Website
**Tool:** **Carrd** or **Beehiiv** (for content + email)

**Why:**
- **Carrd:** $19/year for 3 sites, super simple, beautiful templates
  - Perfect for: Lead magnet landing page, waitlist, simple homepage
  - No code needed, mobile responsive
  - Integrates with Mailchimp, Zapier, payment processors
- **Beehiiv:** Free tier, built-in email + landing pages
  - If you want blog content + email in one place
  - Great analytics, referral program built-in

**Alternative (more robust):** Webflow (free tier) or Framer (free tier)
- Use if you need more customization
- Steeper learning curve

**Recommendation:** Start with Carrd ($19/year) - you can build your lead magnet landing page in 30 minutes.

---

### 2. Email Marketing & Automation
**Tool:** **Mailchimp** (Free tier) or **ConvertKit** (Free tier)

**Why Mailchimp:**
- Free up to 500 contacts
- Easy automation (your 7-day nurture sequence)
- Landing page builder included
- Integrates with everything via Zapier
- Familiar, tons of tutorials

**Why ConvertKit (Better Option IMO):**
- Free up to 1,000 subscribers
- Built for creators (better for your use case)
- Visual automation builder (easier than Mailchimp)
- Tag-based (more flexible than Mailchimp lists)
- Built-in landing pages and forms
- Better deliverability

**Recommendation:** **ConvertKit Free** - it's designed for creators like you, and the free tier is generous.

**Setup:**
- Create 7-day email sequence (from customer journey doc)
- Tag subscribers by source (TikTok, Instagram, Reddit)
- Automate trial offer on Day 6

---

### 3. Automation (Glue Layer)
**Tool:** **Zapier** (Free tier) or **Make** (formerly Integromat)

**Why Zapier:**
- Free tier: 100 tasks/month
- Connects everything (ConvertKit → Google Sheets → Stripe)
- No code, visual builder
- Tons of pre-built "Zaps"

**Why Make (Better for Budget):**
- Free tier: 1,000 operations/month (10x more than Zapier)
- More powerful, slightly steeper learning curve
- Cheaper paid tiers if you scale

**Recommendation:** Start with **Zapier Free** (easier), switch to Make if you hit limits.

**Key Automations You Need:**
1. **New lead → Add to ConvertKit + Google Sheet**
   - Track lead source (TikTok, IG, Reddit)
2. **Trial signup → Send to Stripe + Tag in ConvertKit**
3. **Payment success → Send welcome email + Add to Discord**
4. **Trial ending → Trigger conversion email sequence**

---

### 4. Analytics & KPI Tracking
**Tool:** **Google Sheets** + **Plausible Analytics** (website) + **Metricool** (social media)

**Why This Combo:**
- **Google Sheets (Free):** Your KPI dashboard
  - Create a simple weekly tracking sheet
  - Pull data manually (takes 10 mins/week)
  - Formulas for calculations (conversion rates, etc.)
- **Plausible Analytics ($9/mo or self-host free):** Website analytics
  - Privacy-friendly (no cookie banner needed)
  - Simple, clean dashboard
  - Tracks: page views, conversions, referrers
  - Alternative: Google Analytics (free, but overkill)
- **Metricool (Free tier):** Social media analytics
  - Track TikTok, Instagram, YouTube performance
  - Schedule posts (bonus)
  - See engagement rates, best posting times
  - Free tier is generous

**Alternative (All-in-One):** Notion + Zapier to auto-populate KPIs
- More setup, but very powerful once running

**Recommendation:** Start with **Google Sheets + Metricool Free** - you can set this up in an hour.

---

### 5. Social Media Content Creation & Scheduling
**Tool:** **CapCut** (editing) + **Metricool** (scheduling)

**Why:**
- **CapCut (Free):** TikTok's editing app
  - Templates, effects, captions
  - Export for TikTok, Instagram Reels, YouTube Shorts
- **Metricool (Free tier):** Schedule posts in advance
  - TikTok, Instagram, YouTube all in one
  - See analytics in same place

**Alternative:** Later (free tier) or Buffer (free tier) - but Metricool is better value.

**Recommendation:** **CapCut + Metricool Free** - this is your content engine.

---

### 6. Community Platform
**Tool:** **Discord** (Free) or **Circle** ($39/mo)

**Why Discord:**
- Completely free
- Your audience likely already uses it
- Easy to set up channels (#wins, #questions, #pcos-crew)
- Voice/video for live coaching calls
- Bots for automation (welcome messages, role assignment)

**Why Circle:**
- More professional, less "gamer" vibe
- Better for paid communities
- Built-in courses, events, member directories
- $39/mo is worth it if you have 50+ paying members

**Recommendation:** Start with **Discord Free** - switch to Circle when you hit 50+ paying members.

**Discord Setup:**
- Channels: #welcome, #wins, #questions, #pcos-crew, #t2d-support, #workouts
- Roles: Free Member, Premium, Pro
- Welcome bot: Auto-message new members
- Integration: Zapier to auto-invite when they subscribe

---

### 7. Payment Processing
**Tool:** **Stripe** (2.9% + 30¢ per transaction)

**Why:**
- Industry standard, trusted
- Supports subscriptions (your $14.99/mo model)
- Trial periods built-in ($4.99 7-day trial)
- Customer portal (they can cancel/upgrade themselves)
- Integrates with everything via Zapier/webhooks

**Alternative:** Gumroad (simpler, but less flexible for subscriptions)

**Recommendation:** **Stripe** - it's what you'll use long-term anyway.

**Setup:**
- Create products: $4.99 Trial, $14.99 Premium, $24.99 Pro
- Set up trial period (7 days)
- Customer portal link (for self-service cancel/upgrade)

---

### 8. MVP App / Trial Delivery (Phase 2)
**Tool:** **Bubble.io** (No-code) or **Glide** (Spreadsheet-to-app)

**For right now (Pre-MVP):**
- You don't need an app yet!
- Deliver your 7-day trial via email + PDF + Google Form check-ins
- Example: "Day 1 workout" email with video link + "Log your workout" Google Form

**When you're ready for MVP app:**
- **Glide ($25/mo):** Turns Google Sheets into an app
  - Easiest option for non-technical
  - Users can log workouts, see progress
  - You update content in Google Sheets
- **Bubble.io (Free tier):** Full no-code app builder
  - More powerful, steeper learning curve
  - Can build full AI features eventually
  - Free tier sufficient for first 100 users

**Recommendation:** Start with **email + forms**, move to **Glide** when you have 20+ trial users.

---

### 9. Customer Research & Feedback
**Tool:** **Typeform** (Free tier) or **Google Forms** (Free)

**Why:**
- **Typeform:** Beautiful, conversational surveys
  - Free tier: 10 questions, 100 responses/month
  - Use for: Persona validation, trial exit surveys
- **Google Forms:** Unlimited, but less pretty
  - Use for: Quick check-ins, workout logging

**Recommendation:** **Typeform Free** for important surveys (persona validation, NPS), **Google Forms** for operational stuff (workout logs).

---

## Complete Tech Stack Summary

| Function | Tool | Cost | Why |
|----------|------|------|-----|
| Landing Pages | Carrd | $19/year | Fastest, simplest |
| Email Marketing | ConvertKit | Free (up to 1K) | Creator-focused, great automation |
| Automation | Zapier | Free (100 tasks) | Connects everything |
| Website Analytics | Plausible | $9/mo or free | Simple, privacy-friendly |
| Social Analytics | Metricool | Free | TikTok + IG + scheduling |
| Content Editing | CapCut | Free | TikTok's own tool |
| Community | Discord | Free | Your audience uses it |
| Payments | Stripe | 2.9% + 30¢ | Industry standard |
| Surveys | Typeform | Free (limited) | Beautiful forms |
| KPI Dashboard | Google Sheets | Free | Simple, flexible |
| **TOTAL MONTHLY COST** | | **~$30-50/mo** | Scales as you grow |

**Note:** You can start for <$30/month total. As you grow (50+ members), consider upgrading ConvertKit, adding Circle, and building an app.

---

## Your 4 Critical KPIs (Start Here)

You have 30+ metrics in your customer discovery doc, but as a solopreneur, **focus on these 4** initially. They tell you if your business is working.

### KPI #1: TOFU → MOFU Conversion (Lead Magnet Conversion)
**Metric:** % of landing page visitors who download free plan
**Formula:** (Free plan downloads ÷ Landing page visitors) × 100
**Target:** 20-30%
**Why it matters:** Tells you if your TOFU content (TikTok, IG) is attracting the right people
**How to track:** Plausible Analytics (page views) + ConvertKit (downloads)

**Weekly Check:**
- Landing page visitors: [X]
- Downloads: [Y]
- Conversion rate: [Y/X]%
- **Action if low (<20%):** Improve landing page copy, test different lead magnet hook

---

### KPI #2: MOFU → BOFU Conversion (Trial Conversion Rate)
**Metric:** % of free plan downloaders who start $4.99 trial
**Formula:** (Trial signups ÷ Free plan downloads) × 100
**Target:** 15-20%
**Why it matters:** Tells you if your email nurture sequence is working
**How to track:** ConvertKit (downloads) + Stripe (trial signups)

**Weekly Check:**
- Free plan downloads (this week): [X]
- Trial signups (from this cohort): [Y]
- Conversion rate: [Y/X]%
- **Action if low (<15%):** Improve email sequence, test trial offer price/duration

---

### KPI #3: BOFU → Revenue Conversion (Trial → Paid Conversion)
**Metric:** % of trial users who convert to $14.99/mo paid
**Formula:** (Paid subscriptions ÷ Trial starts) × 100
**Target:** 15-20%
**Why it matters:** This is your revenue engine - if this is broken, you have no business
**How to track:** Stripe dashboard (trial → paid conversion report)

**Weekly Check:**
- Trials started (7+ days ago): [X]
- Converted to paid: [Y]
- Conversion rate: [Y/X]%
- **Action if low (<15%):** Improve trial experience, add testimonials, extend trial to 14 days

---

### KPI #4: D30 Retention (Paid Member Retention)
**Metric:** % of paid members still active after 30 days
**Formula:** (Active at D30 ÷ Started paid subscription) × 100
**Target:** 18-24%
**Why it matters:** Tells you if people find value (and impacts LTV/profitability)
**How to track:** Stripe (churn report) or Google Sheet (manual tracking)

**Monthly Check:**
- New paid members (30 days ago): [X]
- Still active today: [Y]
- Retention rate: [Y/X]%
- **Action if low (<18%):** Improve onboarding, increase community engagement, add content

---

## Your KPI Tracking Sheet (Google Sheets Template)

### Simple Weekly KPI Dashboard

| Week | Landing Page Views | Free Downloads | Download Rate | Trial Signups | Trial Rate | Paid Conversions | Paid Rate | Active Members | MRR |
|------|-------------------|----------------|---------------|---------------|------------|------------------|-----------|----------------|-----|
| Oct 14 | 500 | 100 | 20% | 15 | 15% | 3 | 20% | 3 | $45 |
| Oct 21 | 750 | 150 | 20% | 25 | 17% | 5 | 20% | 8 | $120 |
| Oct 28 | ... | ... | ... | ... | ... | ... | ... | ... | ... |

**How to fill this out (takes 10 minutes every Monday):**
1. **Landing Page Views:** Plausible Analytics → Total visitors
2. **Free Downloads:** ConvertKit → Form submissions
3. **Download Rate:** Formula: =B2/A2 (auto-calculates)
4. **Trial Signups:** Stripe → Trial customers created
5. **Trial Rate:** Formula: =D2/B2
6. **Paid Conversions:** Stripe → Trial → Active subscriptions
7. **Paid Rate:** Formula: =F2/D2 (7 days ago)
8. **Active Members:** Stripe → Active subscriptions
9. **MRR:** Stripe → Monthly recurring revenue

**Color-code cells:**
- Green: Hitting target
- Yellow: Close but below target
- Red: Needs immediate attention

---

## Marketing Execution Plan (First 90 Days)

### Phase 1: Validation (Days 1-30)
**Goal:** Validate Sarah persona exists and will engage

**Marketing Tasks:**
- [ ] Create 10 TikTok videos (5 lifestyle, 5 educational)
- [ ] Post daily for 2 weeks, analyze engagement
- [ ] Survey r/PCOS, r/diabetes (50 responses)
- [ ] Build landing page (Carrd)
- [ ] Create lead magnet PDF (7-Day Workout Plan)
- [ ] Set up ConvertKit with email sequence
- [ ] Set up Metricool to schedule posts

**Tech Setup:**
- [ ] Carrd landing page + domain
- [ ] ConvertKit account + email sequence
- [ ] Zapier: Landing page → ConvertKit → Google Sheet
- [ ] Google Sheet KPI dashboard
- [ ] Metricool connected to TikTok + Instagram

**Success Criteria:**
- 100+ free plan downloads
- 10-20% TOFU → MOFU conversion
- TikTok videos average 5K+ views
- Survey validates: Sarah exists, $14.99 is acceptable

---

### Phase 2: MVP Trial (Days 31-60)
**Goal:** Test trial → paid conversion with first 50 leads

**Marketing Tasks:**
- [ ] Launch $4.99 trial offer (via email day 6)
- [ ] Deliver trial via email + Google Form check-ins
- [ ] Create Discord community, invite trial users
- [ ] Collect testimonials from successful trial users
- [ ] Iterate TikTok content based on Phase 1 data
- [ ] A/B test email subject lines, trial offer copy

**Tech Setup:**
- [ ] Stripe account + products ($4.99 trial, $14.99 paid)
- [ ] Zapier: Stripe payment → ConvertKit tag → Discord invite
- [ ] Discord server with channels
- [ ] Typeform trial exit survey
- [ ] Google Form workout check-ins

**Success Criteria:**
- 50+ trial signups
- 15-20% trial → paid conversion (7-10 paid members)
- 3-5 testimonials collected
- Discord has 20+ active members

---

### Phase 3: First 50 Paid Members (Days 61-90)
**Goal:** Reach 50 paying members, refine funnel

**Marketing Tasks:**
- [ ] Scale TikTok production (2-3 posts/day)
- [ ] Start YouTube Shorts (repurpose TikTok)
- [ ] Launch referral program ("Give 1 month, get 1 month")
- [ ] Create user-generated content campaign
- [ ] Host first live community coaching call
- [ ] Test paid ads (TikTok/Instagram) with $10-20/day budget
- [ ] Launch Pro tier ($24.99/mo) to top 10 engaged users

**Tech Setup:**
- [ ] Consider Glide app if email delivery is clunky
- [ ] Upgrade ConvertKit if needed (>1K subscribers)
- [ ] Plausible Analytics on website
- [ ] Stripe referral tracking (or manual)

**Success Criteria:**
- 50+ active paid members
- $750+ MRR
- 18-24% D30 retention
- 5-10% referral rate
- 3-5 users upgrade to Pro

---

## Weekly Marketing Routine (Once You're Running)

### Monday (Planning & Metrics - 1 hour)
- [ ] Update KPI dashboard in Google Sheet
- [ ] Review Metricool analytics (what worked last week)
- [ ] Plan content for the week (5-7 TikTok videos)
- [ ] Check Discord for community questions/wins

### Tuesday-Thursday (Content Creation - 2 hours/day)
- [ ] Batch film TikTok videos (2-3 per day)
- [ ] Edit in CapCut
- [ ] Schedule in Metricool
- [ ] Respond to comments on previous posts

### Friday (Nurture & Community - 1 hour)
- [ ] Write weekly email to members
- [ ] Host office hours in Discord (30 mins)
- [ ] Reach out to trial users who are ending soon
- [ ] Collect testimonials from wins

### Weekend (Strategic - 1-2 hours)
- [ ] Research competitor content
- [ ] Test new content formats
- [ ] Plan next week's experiments
- [ ] Personal fitness/recharge

---

## When to Upgrade Tools

### At 100 Subscribers:
- Consider upgrading ConvertKit for advanced features
- Add Plausible Analytics ($9/mo) if not already

### At 50 Paid Members ($750 MRR):
- Switch from Discord to Circle ($39/mo) - more professional
- Upgrade to Glide ($25/mo) or start building Bubble app
- Consider hiring VA for content scheduling ($100-200/mo)

### At 200 Paid Members ($3K MRR):
- Build proper mobile app (Bubble or hire developer)
- Hire community manager ($500-1000/mo)
- Upgrade Metricool to Pro for better analytics
- Consider custom analytics dashboard (Geckoboard, Databox)

---

## Tool Setup Checklist (Do This Week 1)

### Day 1: Landing Page & Email
- [ ] Buy domain (Namecheap ~$10/year)
- [ ] Set up Carrd, create landing page
- [ ] Sign up for ConvertKit Free
- [ ] Create lead magnet form
- [ ] Connect Carrd form to ConvertKit

### Day 2: Automation & Analytics
- [ ] Sign up for Zapier Free
- [ ] Create Zap: Carrd → ConvertKit → Google Sheet
- [ ] Create Google Sheet KPI dashboard (use template above)
- [ ] Sign up for Metricool Free
- [ ] Connect TikTok + Instagram accounts

### Day 3: Email Sequence
- [ ] Write 7-day email sequence in ConvertKit
- [ ] Set up automation: New subscriber → Sequence
- [ ] Test sequence (send to yourself)

### Day 4: Trial Offer
- [ ] Sign up for Stripe
- [ ] Create products: $4.99 Trial (7 days), $14.99 Premium
- [ ] Test payment flow
- [ ] Create Zap: Stripe payment → ConvertKit tag

### Day 5: Community
- [ ] Create Discord server
- [ ] Set up channels (#welcome, #wins, #questions)
- [ ] Create welcome message
- [ ] Test Discord invite flow

**Total setup time: ~10-15 hours over 5 days**

---

## Budget Breakdown (Monthly)

| Tool | Tier | Cost | When to Upgrade |
|------|------|------|-----------------|
| Carrd | Pro | $1.58/mo ($19/year) | Never (unless need more sites) |
| ConvertKit | Free → Creator | $0 → $29/mo | At 1,000 subscribers |
| Zapier | Free → Starter | $0 → $29/mo | At 100 tasks/month |
| Metricool | Free → Pro | $0 → $9/mo | At 10K followers |
| Plausible | Essential | $9/mo | Optional at start |
| Discord | Free | $0 | Never (or switch to Circle at $750 MRR) |
| Stripe | Pay as you go | 2.9% + 30¢ | Never (it's % based) |
| Typeform | Free → Basic | $0 → $25/mo | At 100 responses/month |
| Domain | Annual | $10/year | Never |
| **TOTAL (Start)** | | **~$10-20/mo** | |
| **TOTAL (At 50 members)** | | **~$70-90/mo** | |

**Note:** Your biggest cost will be Stripe fees (2.9% of revenue). At $750 MRR, that's ~$22/month in fees.

---

## Questions & Troubleshooting

### "Can I use free alternatives for everything?"
**Yes!** Replace:
- Carrd → Google Sites (free, but clunkier)
- Plausible → Google Analytics (free, but complex)
- Zapier → Make (free tier is 10x bigger)

**But:** The $10-20/month you spend on quality tools will save you 10+ hours/month. Your time is worth more.

### "What if I hit Zapier's 100 task limit?"
**Solution 1:** Upgrade to Make.com (free tier is 1,000 operations)
**Solution 2:** Manually update Google Sheet once/week (not ideal but works)
**Solution 3:** Pay for Zapier Starter ($29/mo) once you have revenue

### "Do I really need Plausible or can I use Google Analytics?"
**Start without it.** Use ConvertKit form analytics and Metricool for social. Add Plausible once you're driving more traffic and need better data.

### "Should I use Notion instead of Google Sheets for KPIs?"
**Sure!** Notion is great for all-in-one workspace. You can embed Notion databases in Zapier. Use what feels better to you - the data is what matters, not the tool.

---

**End of Document**

You now have a complete, actionable tech stack that costs <$20/month to start and gives you everything you need to execute your customer discovery funnel and track the KPIs that matter.

**Next Step:** Set up Carrd + ConvertKit + Google Sheet this week. You can have your full funnel running in 5 days.
