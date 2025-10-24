# Technical Assumptions

## Repository Structure: Monorepo

**Decision:** Single repository containing the Shopify theme and any custom scripts/integrations.

**Rationale:**
- Shopify themes follow a specific directory structure (layout/, sections/, snippets/, assets/, etc.)
- Solo founder benefits from single codebase for easier management
- All customizations (CSS porting, Liquid templates, JavaScript) live together
- Can use Shopify CLI for local development and deployment

**Structure:**
```
rangefit-shopify/
├── layout/           # Theme layouts (theme.liquid)
├── sections/         # Reusable sections (hero, testimonials, FAQ)
├── snippets/         # Reusable components (buttons, cards)
├── assets/           # CSS, JS, images (styles.css → theme.css.liquid)
├── templates/        # Page templates (index.json, product.json)
├── config/           # Theme settings
└── locales/          # Translations (en.default.json)
```

## Service Architecture: Hybrid - Shopify Hub + External SaaS Microservices

**Architecture Diagram (Conceptual):**

```
User → Shopify Site (Landing Page, Checkout, Member Dashboard)
         ↓
         ├→ Shopify Payments/Stripe (Subscriptions)
         ├→ ConvertKit (Email nurture, workout reminders)
         ├→ Zapier (Automation orchestration)
         ├→ Discord (Community)
         └→ Google Sheets (Analytics backup)
```

**Decision Rationale:**

1. **Shopify as Central Hub:**
   - Hosts landing pages (replaces Carrd, saves $19/year)
   - Manages subscriptions ($4.99 trial → $14.99/mo recurring)
   - Delivers 50% of workout content via member-only pages/blog posts
   - Handles payment processing (PCI compliant, no custom backend needed)

2. **ConvertKit for Email Delivery:**
   - Free tier up to 1,000 subscribers (fits $50 budget)
   - 7-day nurture sequence automation
   - Daily workout reminder emails with links back to Shopify
   - Form integrations for lead capture

3. **Zapier for Integration Glue:**
   - Free tier: 100 tasks/month (monitor closely, upgrade to $19.99 if needed)
   - Workflows:
     - New lead form submission → ConvertKit tag → Google Sheets log
     - Trial signup (Shopify order) → ConvertKit tag + Discord invite email
     - Subscription conversion → Update Google Sheets KPI dashboard
   - Manual backup process documented for failures

4. **Discord for Community:**
   - Free (critical for $50 budget)
   - Familiar to target audience (Sarah persona, 29, active online)
   - Auto-invite via Zapier webhook or email with invite link

5. **Google Sheets for Analytics:**
   - Free
   - Acts as backup data warehouse for KPIs
   - Solo founder can create charts/dashboards without BI tools
   - Zapier writes funnel events for weekly review

**Failure Isolation:**
- If Zapier fails: Manual Google Sheets updates + manual Discord invites (documented procedure)
- If ConvertKit fails: Shopify email notifications as fallback
- Each service owns its domain independently

## Testing Requirements: Manual Testing + User Acceptance

**Decision:** No automated testing for MVP. Weekly manual end-to-end testing with documented test plan.

**Rationale:**
- **Solo founder, no coding experience:** Writing automated tests requires technical skills and time
- **No-code stack:** Shopify themes, Zapier, ConvertKit don't easily support unit/integration testing
- **Scale appropriate:** At 50 members, manual testing is sustainable
- **Focus on speed:** MVP needs to launch in 5 weeks, automated testing would delay

**Testing Approach:**

1. **Weekly End-to-End Test (Manual Checklist):**
   - Load landing page on mobile (iPhone Safari, Android Chrome) - verify <3 sec load time
   - Submit lead capture form → Verify PDF delivery + ConvertKit email
   - Complete trial signup flow → Verify Shopify order + payment success
   - Check Discord invite email arrives within 5 minutes
   - Log into member dashboard → Verify workout pages accessible
   - Test subscription cancellation flow
   - Verify Google Sheets KPI log updated

2. **Beta User Acceptance Testing (Week 4):**
   - Recruit 5-10 beta users (friends, r/PCOS community members)
   - Provide test accounts (free trial)
   - Collect feedback via Typeform survey
   - Fix critical bugs before Week 5 public launch

3. **Cross-Browser Testing:**
   - **Mobile:** iOS Safari, Chrome Android (primary - 60% of traffic)
   - **Desktop:** Chrome, Safari (secondary)
   - **Not tested:** IE11, older browsers (not required per UI goals)

4. **A/B Testing (Post-MVP):**
   - ConvertKit: Test email subject lines (Week 6+)
   - Shopify: Test landing page headlines via manual variant creation
   - No sophisticated A/B testing tools (e.g., Optimizely) due to cost

**When to Add Automated Testing:**
- **Trigger:** When manual testing takes >2 hours/week (likely at 200+ members)
- **Recommendation:** Hire QA contractor or use low-code testing tool (e.g., Testim, Ghost Inspector ~$100/mo)

## Additional Technical Assumptions and Requests

**1. Shopify Plan Selection:**
- **Chosen Plan:** Shopify Basic ($39/mo after $1 trial)
- **Rationale:** Includes subscriptions app, custom domains, abandoned cart recovery
- **Alternative Considered:** Shopify Lite ($9/mo) - but lacks full website hosting, only buy buttons
- **Budget Impact:** $39/mo consumes most of $50 budget, leaves ~$10 for overages

**2. Shopify Theme Choice:**
- **Selected Theme:** Shopify Blank slate template
- **Rationale:** Minimal styling allows clean implementation of Legs on the Ground v2.0 design system without overriding existing CSS
- **Alternative Rejected:** Dawn (free, modern, fast) - but requires overriding more default styles
- **Alternative Rejected:** Premium theme like Impulse ($350 one-time) - upfront cost, still requires porting custom styles

**3. Workout Content Delivery (50% Shopify Implementation):**
- **Approach:** Use Shopify **Blog** feature to create "workout posts"
  - Each workout = blog post with: title, instructions, video embed (YouTube?), duration, intensity tags
  - Blog posts tagged for filtering (e.g., "beginner", "PCOS", "20-min")
  - Members access via Shopify customer account login (gated content)
- **Alternative:** Use Shopify **Pages** with metafields for structured workout data
  - **Pros:** More structured, better for future API
  - **Cons:** Requires metafield setup, more complex
- **Question for Architect:** Blog vs. Pages for workout library?

**4. Member Dashboard Implementation:**
- **Approach:** Custom Shopify **customer account page** showing:
  - Current subscription status (via Shopify subscription API)
  - Link to workout library (blog or pages)
  - Discord community button
  - Progress tracking (if feasible - may need app)
- **Challenge:** Shopify customer accounts have limited customization out-of-box
- **Solution:** Use customer account 2.0 (if available) or custom app for richer dashboard
- **Fallback:** Simple "My Account" page with links, no advanced tracking (add post-MVP)

**5. Energy Logging Implementation (FR10):**
- **MVP Approach:** Google Forms embedded in Shopify workout pages
  - User logs energy before/after workout
  - Form data goes to Google Sheets
  - Solo founder reviews manually for patterns
- **Post-MVP:** Shopify app for in-site logging with database storage
- **Rationale:** Google Forms is free, fast to implement, meets MVP needs

**6. Progress Tracking (FR9):**
- **MVP Approach:** Manual tracking via Google Sheets or simple checklist in Discord
- **Post-MVP:** Custom Shopify app or third-party progress tracker integration
- **Rationale:** Building custom progress tracking is complex, defer until after 50+ members validate need

**7. API Integrations:**
- **Shopify Admin API:** Used by Zapier for order events, customer tagging
- **ConvertKit API:** For tagging subscribers based on Shopify actions
- **Discord Webhook:** For sending auto-invites (or email with link if webhook fails)
- **Google Sheets API:** Via Zapier for logging funnel events

**8. Version Control & Deployment:**
- **Tool:** Git + GitHub repository (free)
- **Deployment:** Shopify CLI (`shopify theme push`) or Shopify GitHub integration
- **Workflow:** Develop locally → test on Shopify dev store → push to production theme

**9. Domain & SSL:**
- **Domain Registrar:** Namecheap (~$10/year for .com)
- **SSL:** Included free with Shopify
- **Email:** Use free Gmail or custom domain email via Zoho Mail (free tier, 5GB)

**10. Analytics & Monitoring:**
- **Shopify Analytics:** Built-in (traffic, conversion, sales)
- **Google Analytics 4:** Free, add tracking code to theme.liquid
- **Uptime Monitoring:** UptimeRobot (free tier, checks site every 5 min)
- **Error Monitoring:** None for MVP (manual bug reports from users)

**11. Performance Optimization:**
- **Images:** Use Shopify CDN, compress images before upload (TinyPNG)
- **CSS:** Minify theme.css.liquid in production
- **JavaScript:** Minimize custom JS, use Shopify's built-in scripts where possible
- **Lazy Loading:** Use native `loading="lazy"` attribute for images
- **Target:** <3 sec mobile load time (per NFR1)

**12. Accessibility:**
- **Standard:** WCAG AA (per UI Design Goals)
- **Implementation:** Use semantic HTML, aria labels, keyboard navigation
- **Testing:** Manual testing with keyboard, screen reader (NVDA/VoiceOver)
- **Shopify Benefit:** Blank slate theme has minimal styling, easy to implement accessible patterns

**13. Localization:**
- **MVP:** English only (US market)
- **Post-MVP:** Spanish translation (if market demand from brief's mentions of Latino community)
- **Shopify Support:** Built-in multi-language via theme locales

**14. Security & Compliance:**
- **PCI Compliance:** Handled by Shopify Payments/Stripe (never store credit cards)
- **GDPR:** ConvertKit handles email consent, Shopify privacy policy required
- **HIPAA:** Not pursuing HIPAA compliance (too complex/expensive for MVP)
- **Disclaimers:** "Not medical advice" on all workout content (per NFR14)
- **Terms of Service:** Use Shopify's template, customize for fitness/health context

**15. Backup & Disaster Recovery:**
- **Shopify Data:** Shopify maintains backups
- **Theme Code:** Git repository serves as backup
- **Customer Data:** Export CSV from Shopify weekly, store in Google Drive
- **Email List:** ConvertKit maintains backups
- **Recovery Time Objective (RTO):** 24 hours for theme restoration, 1 week for full data recovery

---
