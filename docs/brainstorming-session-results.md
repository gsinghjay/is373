# Brainstorming Session Results

**Session Date:** 2025-10-15
**Facilitator:** Business Analyst Mary 📊
**Participant:** Jay Singh

---

## Executive Summary

**Topic:** All possible steps and tools needed to ultimately get paid using the RangeFit funnel

**Session Goals:** Broad exploration of the complete customer journey from cold traffic to payment, identifying every tool, integration, touchpoint, and decision point required

**Techniques Used:**
- Reverse Engineering (45 minutes) - Started at payment endpoint and worked backwards
- First Principles Thinking (15 minutes) - Broke down fundamental systems and dependencies

**Total Ideas Generated:** 100+ touchpoints, tools, and integrations mapped

**Key Themes Identified:**
1. **Automation is Critical** - Zapier/integration layer connects everything
2. **Multiple Touchpoints** - Email, Discord, WhatsApp, Static Site all reinforce conversion
3. **Trial Model Complexity** - $4.99 trial with auto-renewal requires careful orchestration
4. **Data Tracking** - Need redundancy (Google Sheets backup even if analytics fails)
5. **Failure Points** - Must plan for webhook failures, payment declines, role assignment issues

---

## Technique Sessions

### Reverse Engineering - 45 minutes

**Description:** Started at "Customer pays $14.99/mo" and worked backwards through every prerequisite step, tool, and integration needed to make payment happen.

**Ideas Generated:**

#### Phase 5: Payment & Fulfillment
1. Shopify processes $14.99/mo recurring charge
2. Zapier catches subscription activation webhook
3. Discord role upgraded from Trial → Premium
4. ConvertKit sends Welcome to Premium email
5. WhatsApp sends premium confirmation message
6. Google Sheets updates MRR tracker
7. GA4/Matomo fires conversion event
8. Slack/email notification sent to Jay
9. Static site grants full member access
10. Customer receives payment receipt

#### Phase 4: Trial Period (7 Days)
11. Day 1: Shopify charges $4.99 trial fee
12. Zapier triggers trial onboarding flow
13. Discord assigns Trial Member role
14. Discord sends welcome DM with community intro
15. ConvertKit sends Welcome email with Day 1 workout
16. WhatsApp sends trial welcome message
17. Static site account created with login credentials
18. Google Sheets logs trial start
19. GA4 fires trial_start event
20. Jay receives new trial notification
21. Day 2: ConvertKit sends Sarah's testimonial email
22. Day 3: ConvertKit sends educational email (3 mistakes)
23. Day 3: WhatsApp check-in message
24. Day 4: ConvertKit sends community spotlight email
25. Discord bot sends workout reminder
26. Day 5: ConvertKit explains AI personalization
27. Day 5: WhatsApp motivation message
28. Static site shows "X days left in trial" banner
29. Day 6: Silent day - let customer engage
30. Day 7: ConvertKit sends renewal reminder email
31. Day 7: Discord DM with trial summary
32. Day 7: WhatsApp renewal notification
33. Day 7: Static site pop-up about renewal

#### Phase 3: Trial Signup (BOFU Conversion)
34. Customer lands on trial conversion page
35. Page shows headline: "Start Your $4.99 Trial"
36. Features list displayed (AI workouts, community, tracking)
37. Social proof: 3 testimonials visible
38. Comparison table: RangeFit vs Signos vs Fitbod
39. FAQ section addresses objections
40. Trust badges: "Cancel anytime" "30-day guarantee"
41. CTA button: "Start My $4.99 Trial"
42. Button links to Shopify checkout
43. Customer enters email, name, payment info
44. Customer agrees to auto-renewal terms
45. Shopify creates customer profile
46. Shopify creates subscription record
47. Redirect to thank you page: "Check your email"

**Entry points to trial page:**
48. Email Day 6 CTA from nurture sequence
49. Landing page CTA after free plan download
50. Discord pinned message in #welcome
51. Static site homepage hero button
52. Static site pricing page
53. Retargeting ads (future)

#### Phase 2: MOFU Nurture (Email Sequence)
54. Customer downloads free 7-day workout plan
55. Form submission triggers Zapier
56. ConvertKit receives new subscriber
57. ConvertKit tags: "Free Plan Downloaded"
58. ConvertKit sends Day 1 email immediately (PDF delivery)
59. Google Sheets logs lead with source
60. GA4 fires lead conversion event
61. Optional: WhatsApp opt-in prompt
62. Day 1 email: Deliver PDF + build rapport
63. Day 2 email: Sarah's story (social proof)
64. Day 3 email: 3 workout mistakes (education)
65. Day 4 email: Community invite (Unity)
66. Discord invite link for free preview access
67. Day 5 email: How AI works (authority)
68. Day 6 email: $4.99 trial offer (MAIN CONVERSION)
69. Day 7 email: Last chance urgency
70. Parallel: Discord community engagement (lurker access)
71. Parallel: WhatsApp tips (if opted in)
72. Parallel: Static site blog content for SEO

#### Phase 1: TOFU Lead Capture
73. TikTok video posted with hook
74. Video includes CTA: "Link in bio"
75. Bio link goes to landing page
76. Landing page headline: "Get Energy That Lasts All Day"
77. Landing page shows problem/solution sections
78. Landing page includes testimonials
79. Landing page form: Name + Email fields
80. CTA button: "Get My Free Plan"
81. Form submission captured by static site
82. Form triggers Zapier webhook
83. ConvertKit receives new subscriber
84. ConvertKit sends PDF via email
85. Google Sheets logs lead
86. GA4 fires lead event

**Traffic sources:**
87. TikTok (10 videos from scripts)
88. Instagram Reels (repurposed content)
89. YouTube Shorts (same content)
90. Pinterest infographic pins
91. Reddit organic posts (r/PCOS, r/diabetes)
92. SEO blog articles on static site
93. Future: TikTok/Instagram paid ads

**Insights Discovered:**
- Trial period requires 15+ touchpoints across 4 channels (email, Discord, WhatsApp, static site)
- Payment success triggers 8+ system updates simultaneously
- Every phase has backup mechanisms (if Zapier fails, email still goes out)
- Customer needs clear next steps at EVERY transition point
- Analytics must track 5 key events: lead, trial_start, trial_active, conversion, churn

**Notable Connections:**
- Discord serves triple purpose: community, support, AND conversion touchpoint
- Google Sheets acts as backup data warehouse if analytics fails
- WhatsApp adds personal touch but is optional (can start without it)
- Static site is central hub: landing pages, member portal, content delivery

---

## Idea Categorization

### Immediate Opportunities
*Ideas ready to implement now*

1. **Set up core infrastructure**
   - Description: Static site + Shopify + ConvertKit + Discord + Zapier
   - Why immediate: Foundation for everything else
   - Resources needed: 1 week setup time, $50-100/mo budget

2. **Create lead magnet funnel (Phase 1)**
   - Description: Landing page + form + 7-day email sequence
   - Why immediate: Can validate demand before building trial
   - Resources needed: Landing page copy (done), email sequence (done), PDF creation, 2-3 days

3. **Film and schedule 10 TikTok videos**
   - Description: Batch create TOFU content from scripts
   - Why immediate: Need traffic to test funnel
   - Resources needed: 3-4 hours filming, CapCut editing, Metricool scheduling

4. **Build trial conversion page**
   - Description: BOFU landing page with Shopify Buy Button
   - Why immediate: Can't sell trial without this page
   - Resources needed: Copy from docs, design/build on static site, 1 day

5. **Set up 3 critical Zaps**
   - Description: Lead capture, Trial start, Trial conversion
   - Why immediate: Automation prevents manual work at scale
   - Resources needed: 2-3 hours Zapier configuration, testing

### Future Innovations
*Ideas requiring development/research*

6. **WhatsApp automation**
   - Description: Automated messages for trial check-ins and renewals
   - Development needed: WhatsApp Business API setup, message template approval
   - Timeline estimate: Week 4-6, after first 20 trials

7. **Advanced analytics dashboard**
   - Description: Real-time KPI dashboard pulling from Shopify + GA4 + Sheets
   - Development needed: Custom dashboard (Geckoboard, Databox) or Google Data Studio
   - Timeline estimate: Month 2-3, once baseline metrics established

8. **AI workout delivery system**
   - Description: Automated workout personalization based on logged energy/glucose
   - Development needed: Backend system, database, ML model (if real AI vs rule-based)
   - Timeline estimate: Month 3-6, start with rule-based then add ML

9. **Mobile app**
   - Description: Native or no-code app (Glide, Bubble) for better UX
   - Development needed: App design, build, app store submission
   - Timeline estimate: Month 6+, after 200+ paying members

10. **Referral program automation**
    - Description: "Give 1 month free, get 1 month free" with tracking
    - Development needed: Referral tracking system in Shopify or custom
    - Timeline estimate: Month 2-3, after hitting 50 members

### Moonshots
*Ambitious, transformative concepts*

11. **CGM Integration**
    - Description: Partner with Dexcom/Abbott for direct CGM data import
    - Transformative potential: Real glucose data = better AI personalization, stronger value prop
    - Challenges to overcome: API access, medical device regulations, user willingness to buy CGM

12. **B2B Corporate Wellness**
    - Description: Sell RangeFit to employers as diabetes prevention benefit
    - Transformative potential: 10-100x revenue per deal vs individual subscriptions
    - Challenges to overcome: Enterprise sales cycle, compliance, HR integrations

13. **Marketplace for Coaches**
    - Description: Let certified diabetes educators/trainers offer services through platform
    - Transformative potential: High-touch premium tier, recurring revenue from coaches
    - Challenges to overcome: Vetting coaches, liability, payment splits

14. **International Expansion**
    - Description: Localize for non-English markets (Spanish, Hindi, etc.)
    - Transformative potential: 10x addressable market
    - Challenges to overcome: Translation, cultural adaptation, payment methods, support

15. **Insurance Reimbursement**
    - Description: Get RangeFit covered by health insurance as diabetes prevention
    - Transformative potential: Massive scale, insurance pays vs individual
    - Challenges to overcome: Clinical trials needed, FDA clearance, insurance negotiations

### Insights & Learnings
*Key realizations from the session*

- **Automation reduces single points of failure**: If one channel (email) fails, customer still gets onboarded via Discord or WhatsApp
  - Implication: Invest in Zapier early, don't rely on single notification channel

- **Trial period is make-or-break**: 7 days to activate customer before they churn
  - Implication: Front-load value (first workout in welcome email), engage via community immediately

- **Payment info upfront = higher conversion**: $4.99 trial with auto-renew converts better than free trial
  - Implication: Friction at trial signup is worth it for qualified leads

- **Discord is underrated**: Not just community, but onboarding, support, and conversion tool
  - Implication: Invest time in Discord setup, bots, and engagement from Day 1

- **Google Sheets as safety net**: If analytics breaks or Zapier fails, manual data still captured
  - Implication: Always have backup data source, don't rely solely on automated analytics

- **Shopify webhooks are fragile**: Can fail silently, customer pays but systems don't update
  - Implication: Test webhooks religiously, have manual backup process, monitor daily

---

## Action Planning

### Top 3 Priority Ideas

#### #1 Priority: Set Up Core Infrastructure (Week 1)

**Rationale:**
- Can't test funnel without foundation in place
- Once set up, can iterate quickly on content/messaging
- Blocking everything else

**Next steps:**
1. Confirm static site CMS can embed forms + Shopify buttons
2. Set up Shopify store + create $4.99 trial product
3. Create ConvertKit account + build lead capture form
4. Create Discord server with roles/channels
5. Connect Zapier to all systems
6. Test end-to-end: form submission → email → Discord

**Resources needed:**
- 1 week focused setup time
- $50-100 for initial tool subscriptions
- Access to static site hosting

**Timeline:** Complete by end of Week 1

---

#### #2 Priority: Launch Lead Magnet Funnel (Week 2)

**Rationale:**
- Can validate demand BEFORE building complex trial system
- Proves people will opt in to your content
- Builds email list to sell trial to later
- Lower risk than launching paid product first

**Next steps:**
1. Design and write 7-day workout plan PDF
2. Build landing page using copy from docs
3. Set up 7-day email sequence in ConvertKit
4. Create 10 TikTok videos from scripts
5. Schedule posts via Metricool (3-5/week)
6. Track conversions in Google Sheets KPI tracker

**Resources needed:**
- PDF design (Canva, 2-3 hours)
- Landing page build (1 day)
- Video filming/editing (4 hours)
- Email copywriting (already done in docs)

**Timeline:** Complete by end of Week 2, run for 2 weeks to gather data

**Success metric:** 100+ free plan downloads, 20%+ landing page conversion rate

---

#### #3 Priority: Build and Test Trial Offer (Week 3-4)

**Rationale:**
- This is where money is made - critical to nail trial experience
- Must work perfectly before scaling traffic
- Need to prove 15-20% trial → paid conversion

**Next steps:**
1. Build trial conversion page with testimonials, FAQ, comparison table
2. Configure Shopify subscription: $4.99 trial → $14.99/mo auto-renew
3. Set up Zaps: Trial start → onboarding, Trial convert → payment fulfillment
4. Write 7-day trial email sequence (onboarding + renewal reminders)
5. Configure Discord bot for role assignment
6. Set up member portal on static site (or use Discord + email delivery)
7. Test with 5-10 beta users (friends/family/Reddit volunteers)
8. Fix bugs, optimize based on feedback
9. Launch to email list from Phase 1

**Resources needed:**
- Shopify subscription setup (2-3 hours)
- Zapier configuration (3-4 hours)
- Beta testing (1 week with volunteers)
- Buffer for bug fixes

**Timeline:** Week 3 = build, Week 4 = test, Week 5 = launch to list

**Success metric:** 15%+ trial → paid conversion, 60%+ trial activation (complete 2+ workouts)

---

## Reflection & Follow-up

### What Worked Well

- **Reverse engineering approach** - Starting at payment and working backwards ensured completeness
- **YOLO mode** - Jay's willingness to trust recommendations kept momentum high
- **Comprehensive docs** - Having RangeFit discovery docs provided clear context and constraints
- **Systems thinking** - Mapped dependencies between tools so nothing would be missed

### Areas for Further Exploration

- **WhatsApp vs Email-only**: Should WhatsApp be Phase 1 or delayed? Need to test email+Discord first to see if WhatsApp adds value
- **Static site CMS specifics**: What platform is Jay using? Need to confirm it supports all required integrations (forms, Shopify buttons, member gating)
- **Member portal vs email delivery**: Can delay member portal and deliver workouts via PDF email in Phase 1, add portal later when scaling
- **Analytics setup details**: GA4 vs Matomo decision, how to set up custom events via Zapier
- **Discord bot configuration**: Which bot (MEE6, Dyno, Carl-bot) vs custom Discord.js bot vs Zapier-only integration
- **Beta testing plan**: How to recruit 5-10 beta users for trial testing (Reddit? Friends? PCOS Facebook groups?)

### Recommended Follow-up Techniques

- **SCAMPER Method**: Once core funnel is live, use SCAMPER to optimize each stage (what can be eliminated, combined, reversed?)
- **Five Whys**: If conversion rates are low, dig into "why" customers drop off at each stage
- **Assumption Reversal**: Challenge assumptions (e.g., "What if we made trial FREE instead of $4.99?", "What if we started with paid first, no trial?")

### Questions That Emerged

- **What static site CMS are you using?** Need to confirm it supports all required integrations
- **Do you have video editing experience?** If not, CapCut has templates to make TikTok creation easier
- **How much time can you dedicate to content creation?** 10 videos = 3-4 hours, is this realistic per week?
- **Do you have any beta testers lined up?** Need 5-10 people to test trial before public launch
- **What's your comfort level with Zapier?** If new to it, budget extra time for learning curve
- **Do you already have a TikTok following?** Starting from 0 vs existing audience changes timeline
- **When do you want to launch?** 30 days? 60 days? 90 days? Affects which features to prioritize

### Next Session Planning

- **Suggested topics:**
  1. Content creation workflow (batching TikTok videos efficiently)
  2. Zapier automation deep dive (step-by-step Zap configuration)
  3. Trial experience optimization (which emails, Discord messages, timing work best)
  4. Scaling strategy (what to do when you hit 50, 100, 200 members)

- **Recommended timeframe:**
  - 2 weeks from now (after Phase 1 infrastructure is set up)
  - Check-in on progress, troubleshoot blockers, plan Phase 2

- **Preparation needed:**
  - Jay completes infrastructure setup (static site, Shopify, ConvertKit, Discord, Zapier)
  - Creates lead magnet PDF
  - Films first 5 TikTok videos
  - Brings questions/blockers to next session

---

## Tools & Systems Master List

### Content Creation & Distribution
- **CapCut** - Video editing for TikTok/Reels/Shorts
- **Metricool** - Social media scheduling and analytics
- **TikTok, Instagram, YouTube** - Content distribution channels
- **Pinterest** - Infographic pins for traffic
- **Bit.ly or custom shortener** - Track "link in bio" clicks

### Lead Capture & Nurture
- **Static Site CMS** (your existing platform) - Host landing pages, blog, member portal
- **ConvertKit** - Email marketing and automation
- **Carrd** (alternative) - Simple landing page builder if needed
- **PDF editor** (Canva, Adobe, Google Docs) - Create lead magnet

### Payment & Subscriptions
- **Shopify** - Payment processing, subscription management, customer database
- **Shopify Subscriptions** or **Recharge** - Subscription app for recurring billing
- **Stripe** (via Shopify) - Underlying payment processor

### Automation & Integration
- **Zapier** - Connect all systems, trigger actions from webhooks
- **Make.com** (alternative) - More operations on free tier than Zapier
- **Shopify Webhooks** - Trigger Zapier when orders/subscriptions update

### Community & Support
- **Discord** - Community platform, member roles, channels, DMs
- **MEE6 / Dyno / Carl-bot** (Discord bots) - Welcome messages, role assignment, moderation
- **Discord API** (via Zapier) - Programmatic role updates and DMs

### Messaging
- **WhatsApp Business API** - Automated messages (via Twilio or official API)
- **Twilio** - WhatsApp API provider (if using WhatsApp)
- **ConvertKit email** - Primary messaging channel (backup if WhatsApp not used)

### Analytics & Tracking
- **Google Analytics 4 (GA4)** - Website analytics, conversion tracking
- **Matomo** (alternative) - Privacy-friendly analytics
- **Google Sheets** - KPI tracking dashboard, data warehouse backup
- **Google Tag Manager** (optional) - Manage analytics tags
- **Metricool** - Social media analytics

### Member Delivery
- **Static Site** - Member portal with gated content
- **MemberSpace** or similar (optional) - Membership plugin for static sites
- **Discord** - Alternative content delivery (post workouts in channels)
- **Email** - Deliver workouts as PDF attachments (simplest option for Phase 1)

### Notifications & Monitoring
- **Slack** or **Email** - Get notified of new trials, conversions, issues
- **Shopify notifications** - Backup email alerts for orders
- **Zapier error notifications** - Alert if Zaps fail

---

## Integration Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         COLD TRAFFIC                             │
│  TikTok │ Instagram │ YouTube │ Pinterest │ Reddit │ SEO Blog   │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ↓ Link in Bio
┌─────────────────────────────────────────────────────────────────┐
│                  LANDING PAGE (Static Site)                      │
│  • Headline: "Get Energy That Lasts All Day"                    │
│  • Free 7-Day Workout Plan offer                                │
│  • Form: Name + Email                                           │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ↓ Form Submit
┌─────────────────────────────────────────────────────────────────┐
│                         ZAPIER                                   │
│  Webhook catches form submission                                │
└─────┬───────┬───────┬───────┬───────────────────────────────────┘
      │       │       │       │
      ↓       ↓       ↓       ↓
┌──────────┐ ┌───────┐ ┌──────────┐ ┌──────────────┐
│ConvertKit│ │Sheets │ │ GA4/     │ │ WhatsApp     │
│ +Tag     │ │Log    │ │ Matomo   │ │ (Optional)   │
│ +Sequence│ │Lead   │ │Event     │ │              │
└────┬─────┘ └───────┘ └──────────┘ └──────────────┘
     │
     ↓ 7-Day Email Sequence
┌─────────────────────────────────────────────────────────────────┐
│               EMAIL NURTURE (ConvertKit)                         │
│  Day 1: Deliver PDF + intro                                     │
│  Day 2: Testimonial (Sarah)                                     │
│  Day 3: Education (3 mistakes)                                  │
│  Day 4: Community invite                                        │
│  Day 5: AI explanation                                          │
│  Day 6: ★ $4.99 TRIAL OFFER ★                                  │
│  Day 7: Last chance urgency                                     │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ↓ Clicks Trial CTA
┌─────────────────────────────────────────────────────────────────┐
│            TRIAL CONVERSION PAGE (Static Site)                   │
│  • Testimonials, FAQ, Comparison Table                          │
│  • CTA: "Start $4.99 Trial"                                     │
│  • Shopify Buy Button embedded                                  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ↓ Enters Payment Info
┌─────────────────────────────────────────────────────────────────┐
│                    SHOPIFY CHECKOUT                              │
│  • Charges $4.99 trial                                          │
│  • Creates subscription (renews at $14.99/mo in 7 days)         │
│  • Fires webhook: order/create                                  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ↓ Webhook
┌─────────────────────────────────────────────────────────────────┐
│                      ZAPIER (Trial Start)                        │
└─┬────┬────┬────┬────┬────┬────┬────────────────────────────────┘
  │    │    │    │    │    │    │
  ↓    ↓    ↓    ↓    ↓    ↓    ↓
┌───┐┌───┐┌───┐┌───┐┌────┐┌───┐┌─────┐
│CK ││Dis││WA ││Sit││Shts││GA4││Slack│
│Tag││Rol││Msg││Acc││Log ││Evn││Notf │
└─┬─┘└─┬─┘└───┘└───┘└────┘└───┘└─────┘
  │    │
  ↓    ↓
┌────────────────────────────────────────┐
│      7-DAY TRIAL EXPERIENCE            │
│  • Daily emails (CK)                   │
│  • Community engagement (Discord)      │
│  • Check-ins (WhatsApp - optional)     │
│  • Countdown banner (Static Site)      │
│  • Day 7: Renewal reminders (all)     │
└────────────────┬───────────────────────┘
                 │
                 ↓ Day 7: Auto-charge
┌─────────────────────────────────────────────────────────────────┐
│               SHOPIFY (Subscription Renew)                       │
│  • Charges $14.99/mo                                            │
│  • Fires webhook: subscription/create                           │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ↓ Webhook
┌─────────────────────────────────────────────────────────────────┐
│                  ZAPIER (Trial → Paid)                          │
└─┬────┬────┬────┬────┬────┬────────────────────────────────────┘
  │    │    │    │    │    │
  ↓    ↓    ↓    ↓    ↓    ↓
┌───┐┌───┐┌───┐┌────┐┌───┐┌─────┐
│CK ││Dis││WA ││Shts││GA4││Slack│
│Upg││Upg││Wel││MRR ││Cnv││Notf │
│Tag││Rol││Msg││Log ││Evn││     │
└───┘└───┘└───┘└────┘└───┘└─────┘
                 │
                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                 ONGOING MEMBERSHIP                               │
│  • Weekly newsletter (ConvertKit)                               │
│  • Community engagement (Discord)                               │
│  • Monthly recurring payment (Shopify)                          │
│  • Progress tracking (Static Site + Sheets)                     │
│  • Support (Discord + Email)                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Critical Path: Week-by-Week Implementation Plan

### Week 1: Foundation Setup
- [ ] Day 1: Confirm static site capabilities, set up Shopify account
- [ ] Day 2: Create ConvertKit account, build forms, set up Discord server
- [ ] Day 3: Set up Zapier, create Zap 1 (Lead Capture)
- [ ] Day 4: Write 7-day email sequence in ConvertKit
- [ ] Day 5: Create lead magnet PDF (7-day workout plan)
- [ ] Day 6-7: Test end-to-end: form → email → tracking

### Week 2: Lead Magnet Launch
- [ ] Day 1: Build landing page on static site
- [ ] Day 2: Film 10 TikTok videos (batch session)
- [ ] Day 3: Edit videos in CapCut, add captions/text
- [ ] Day 4: Schedule videos in Metricool (2-3/week for month)
- [ ] Day 5: Launch landing page, post first TikTok
- [ ] Day 6-7: Monitor metrics, respond to comments, adjust

### Week 3: Trial System Build
- [ ] Day 1: Build trial conversion page copy + design
- [ ] Day 2: Configure Shopify subscription product ($4.99 → $14.99/mo)
- [ ] Day 3: Embed Shopify Buy Button on trial page
- [ ] Day 4: Set up Zaps 2 & 3 (Trial Start, Trial Convert)
- [ ] Day 5: Write trial onboarding email sequence (7 emails)
- [ ] Day 6-7: Configure Discord bot, test role assignment

### Week 4: Beta Testing
- [ ] Day 1-2: Recruit 5-10 beta testers (Reddit, friends, email list)
- [ ] Day 3: Beta testers go through trial flow
- [ ] Day 4-5: Collect feedback, identify bugs
- [ ] Day 6-7: Fix issues, optimize copy/flow

### Week 5: Public Launch
- [ ] Day 1: Send trial offer to email list (from Week 2 lead magnet)
- [ ] Day 2-3: Monitor conversions, fix any issues
- [ ] Day 4-5: Engage with trial members in Discord
- [ ] Day 6-7: Track Day 7 renewals, celebrate first paid members

### Week 6-8: Optimize & Scale
- [ ] Continue posting TikTok content (3-5/week)
- [ ] A/B test email subject lines, landing page copy
- [ ] Add testimonials from first members
- [ ] Track weekly KPIs in Google Sheets
- [ ] Iterate based on data (improve low-converting stages)
- [ ] Plan for 50+ members: Add WhatsApp, member portal, Pro tier

---

## Budget Breakdown

### Phase 1: Launch (Month 1)
| Tool | Cost | Notes |
|------|------|-------|
| Shopify | $39/mo | Basic plan sufficient for start |
| Static Site Hosting | $0-20/mo | Depends on platform |
| Domain | $1/mo | Annual cost amortized |
| ConvertKit | $0 | Free up to 1,000 subscribers |
| Discord | $0 | Free forever |
| Zapier | $0 | Free tier (100 tasks, may need upgrade) |
| Google Sheets | $0 | Free |
| GA4/Matomo | $0-9/mo | GA4 free, Matomo optional |
| Metricool | $0 | Free tier sufficient |
| CapCut | $0 | Free |
| WhatsApp API | $0 | Skip for Phase 1 |
| **TOTAL** | **$40-70/mo** | |

### Phase 2: Scale (Month 2-3, at 50+ members)
| Tool | Cost | Notes |
|------|------|-------|
| Shopify | $39/mo | Same |
| Static Site | $0-20/mo | Same |
| ConvertKit | $29/mo | Upgrade at 1K+ subscribers |
| Zapier | $29/mo | Upgrade for 750 tasks/month |
| WhatsApp API | $5-20/mo | Add for high-touch engagement |
| MemberSpace | $25/mo | Optional: member portal plugin |
| **TOTAL** | **$127-152/mo** | Still <$200/mo target |

### Revenue Projections
| Milestone | Members | MRR | Net (after costs) |
|-----------|---------|-----|-------------------|
| Week 5 | 5 paid | $75 | $5-35 |
| Week 8 | 20 paid | $300 | $230-260 |
| Month 3 | 50 paid | $750 | $598-623 |
| Month 6 | 100 paid | $1,500 | $1,348-1,373 |

---

*Session facilitated using the BMAD-METHOD™ brainstorming framework*
