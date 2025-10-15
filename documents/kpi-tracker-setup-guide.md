# RangeFit KPI Tracker Setup Guide

**File:** `rangefit-kpi-tracker.csv`
**Last Updated:** 2025-10-10

---

## Quick Start (5 Minutes)

### Step 1: Import to Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **File → Import**
3. Upload `rangefit-kpi-tracker.csv` from your computer
4. Choose **Replace spreadsheet** or **Insert new sheet**
5. Click **Import data**

### Step 2: Set Up Formulas (They Don't Import Perfectly)

The CSV has formula text, but you need to apply them properly. Here's what to do:

#### Column D: Download Rate %
**Formula for D2:** `=IF(B2="","",C2/B2*100)`
- This calculates: (Free Downloads ÷ Landing Page Views) × 100
- Copy this formula down to D13

#### Column G: Trial Rate %
**Formula for G2:** `=IF(C2="","",F2/C2*100)`
- This calculates: (Trial Signups ÷ Free Downloads) × 100
- Copy down to G13

#### Column J: Paid Rate %
**Formula for J2:** `=IF(F9="","",I2/F9*100)`
- This calculates: (Paid Conversions ÷ Trial Signups from 7 days ago) × 100
- **Note:** This looks 7 rows back because trials are 7 days long
- For row 2, it references F9 (7 days in the future)
- For row 3, it references F10, etc.
- **Important:** Adjust this formula for each row:
  - Row 2: `=IF(F9="","",I2/F9*100)`
  - Row 3: `=IF(F10="","",I3/F10*100)`
  - Row 4: `=IF(F11="","",I4/F11*100)`
  - And so on...

#### Column M: D30 Retention %
**Formula for M2:** `=IF(L6="","",L2/L6*100)`
- This calculates: (Active Members now ÷ Active Members 30 days ago) × 100
- **Note:** This looks 4 rows back (roughly 30 days if weekly tracking)
- **Adjust for each row:**
  - Row 2: `=IF(L6="","",L2/L6*100)` (compares to 4 weeks ago)
  - Row 3: `=IF(L7="","",L3/L7*100)`
  - Row 4: `=IF(L8="","",L4/L8*100)`
  - And so on...

#### Column O: MRR (Monthly Recurring Revenue)
**Formula for O2:** `=IF(L2="","",L2*14.99)`
- This calculates: Active Members × $14.99
- Copy down to O13

### Step 3: Format for Readability

1. **Freeze the header row:**
   - Click on row 2
   - Go to **View → Freeze → 1 row**

2. **Format percentage columns:**
   - Select columns D, G, J, M
   - Click **Format → Number → Percent**
   - OR manually add "%" after each number (formulas already do this)

3. **Format currency column (MRR):**
   - Select column O
   - Click **Format → Number → Currency**

4. **Add conditional formatting (Color-coding):**

   **For Download Rate (Column D):**
   - Select D2:D13
   - Click **Format → Conditional formatting**
   - Set rules:
     - If >= 20%, make green
     - If >= 15% and < 20%, make yellow
     - If < 15%, make red

   **For Trial Rate (Column G):**
   - Select G2:G13
   - Same rules as above (>= 15% green, 10-15% yellow, < 10% red)

   **For Paid Rate (Column J):**
   - Select J2:J13
   - Same rules (>= 15% green, 10-15% yellow, < 10% red)

   **For D30 Retention (Column M):**
   - Select M2:M13
   - Rules:
     - If >= 18%, make green
     - If >= 12% and < 18%, make yellow
     - If < 12%, make red

---

## How to Use the Tracker (Every Monday Morning)

### Your 10-Minute Weekly Routine

**Step 1: Gather Data from Your Tools**

Open these tabs in your browser:
1. **Plausible Analytics** (or Google Analytics) - for landing page views
2. **ConvertKit** - for free downloads and email list
3. **Stripe Dashboard** - for trial signups, paid conversions, active members

**Step 2: Fill in the Current Week Row**

Find today's week starting date (e.g., Oct 14, Oct 21, etc.) and fill in:

| Column | Data Source | What to Enter |
|--------|-------------|---------------|
| **B: Landing Page Views** | Plausible Analytics → Total Unique Visitors (last 7 days) | Number (e.g., 500) |
| **C: Free Downloads** | ConvertKit → Form Submissions → "Free Plan" form (last 7 days) | Number (e.g., 100) |
| **D: Download Rate** | *Auto-calculates* | Should show ~20-30% if on target |
| **F: Trial Signups** | Stripe → Customers → Filter by "Trial" status (last 7 days) | Number (e.g., 15) |
| **G: Trial Rate** | *Auto-calculates* | Should show ~15-20% if on target |
| **I: Paid Conversions** | Stripe → Customers → Filter "Active" subscriptions (this week) | Number (e.g., 3) |
| **J: Paid Rate** | *Auto-calculates* (compares to trials from 7 days ago) | Should show ~15-20% if on target |
| **L: Active Members** | Stripe → Subscriptions → Active count (total, not just this week) | Number (e.g., 25) |
| **M: D30 Retention** | *Auto-calculates* (compares to 4 weeks ago) | Should show ~18-24% if on target |
| **O: MRR** | *Auto-calculates* (Active Members × $14.99) | Should show revenue (e.g., $374.75) |
| **P: Notes** | You! | Any observations (e.g., "TikTok video went viral", "Changed email subject line") |

**Step 3: Analyze What's Working**

Look at your calculated rates (columns D, G, J, M):
- **Green = Good** - Keep doing what you're doing
- **Yellow = Warning** - Test improvements this week
- **Red = Broken** - This is your top priority to fix

**Step 4: Decide on This Week's Focus**

Based on which KPI is red or yellow:
- **Download Rate low (<20%)?** → Improve TikTok hooks or landing page copy
- **Trial Rate low (<15%)?** → Improve email sequence or trial offer
- **Paid Rate low (<15%)?** → Improve trial experience or add testimonials
- **Retention low (<18%)?** → Improve onboarding or community engagement

---

## Understanding Each Metric

### KPI #1: Download Rate (TOFU → MOFU)
**What it measures:** Are the right people clicking your content?

**Formula:** (Free Downloads ÷ Landing Page Views) × 100

**Target:** 20-30%

**Example:**
- You get 500 landing page visitors from TikTok
- 100 people download your free plan
- Download Rate = 100 ÷ 500 × 100 = **20%** ✓

**If it's low:**
- Your TikTok content is attracting the wrong audience
- Your landing page copy isn't compelling
- Your lead magnet isn't valuable enough
- **Fix:** Test new TikTok hooks, improve landing page headline, or enhance lead magnet

---

### KPI #2: Trial Rate (MOFU → BOFU)
**What it measures:** Is your email sequence convincing people to try?

**Formula:** (Trial Signups ÷ Free Downloads) × 100

**Target:** 15-20%

**Example:**
- 100 people downloaded your free plan
- 15 people signed up for the $4.99 trial
- Trial Rate = 15 ÷ 100 × 100 = **15%** ✓

**If it's low:**
- Your email sequence isn't building trust
- The trial price ($4.99) feels too high
- The trial offer isn't clear or compelling
- **Fix:** Improve email copy, add testimonials to emails, reduce trial price to $0.99, or extend trial to 14 days

---

### KPI #3: Paid Rate (BOFU → Revenue)
**What it measures:** Is your trial experience good enough to convert?

**Formula:** (Paid Conversions ÷ Trial Signups from 7 days ago) × 100

**Target:** 15-20%

**Why 7 days ago?** Because your trial is 7 days long, so this week's paid conversions come from last week's trial signups.

**Example:**
- Last week (7 days ago): 20 people started trial
- This week: 4 people converted to paid ($14.99/mo)
- Paid Rate = 4 ÷ 20 × 100 = **20%** ✓

**If it's low:**
- Trial experience isn't delivering value
- In-trial emails aren't compelling
- Price ($14.99) feels too high
- Users aren't completing workouts (low activation)
- **Fix:** Improve onboarding, add more in-trial touchpoints, showcase testimonials, add money-back guarantee

---

### KPI #4: D30 Retention (Post-Purchase)
**What it measures:** Are people sticking around after 30 days?

**Formula:** (Active Members now ÷ Active Members 30 days ago) × 100

**Target:** 18-24% (this means 76-82% churn, which is normal for early-stage subscription apps)

**Note:** This is a cohort retention metric, not monthly churn. As you mature, this will improve.

**Example:**
- 4 weeks ago: 50 active members
- Today: 12 of those original 50 are still active
- D30 Retention = 12 ÷ 50 × 100 = **24%** ✓

**If it's low:**
- Users aren't forming a habit
- Community isn't engaging
- AI isn't personalizing well
- Users aren't seeing results
- **Fix:** Improve first-week onboarding, activate Discord community, send more motivational emails, showcase member wins

---

## Advanced: Adding More Metrics (Once You're Established)

Once you're comfortable with the 4 core KPIs, you can add these to track growth:

### Additional Columns to Add:

**Column Q: CAC (Customer Acquisition Cost)**
- Formula: `=Total Ad Spend / Paid Conversions`
- Track if you start running ads
- Target: <$30 per customer

**Column R: LTV (Lifetime Value)**
- Formula: `=ARPU / Monthly Churn Rate`
- ARPU = Average Revenue Per User ($14.99 + Pro upsells)
- Target: 3x your CAC

**Column S: Churn Rate**
- Formula: `=(Cancellations / Active Members) × 100`
- Target: <6% per month

**Column T: Referral Rate**
- Formula: `=(New signups from referrals / Active Members) × 100`
- Target: 5-12%

**Column U: Upsell Rate (Premium → Pro)**
- Formula: `=(Pro Members / Total Members) × 100`
- Target: 12-18%

---

## Conditional Formatting Rules (Exact Setup)

If you want to set up color-coding precisely:

### For Download Rate (Column D):

1. Select cells D2:D13
2. **Format → Conditional formatting**
3. **Format rules:**
   - **Rule 1 (Green):** Custom formula is `=D2>=20`
     - Background color: Light green (#d9ead3)
   - **Rule 2 (Yellow):** Custom formula is `=AND(D2>=15, D2<20)`
     - Background color: Light yellow (#fff2cc)
   - **Rule 3 (Red):** Custom formula is `=D2<15`
     - Background color: Light red (#f4cccc)

### For Trial Rate (Column G):
- Same rules as Download Rate (>=15% green, 10-15% yellow, <10% red)

### For Paid Rate (Column J):
- Same rules as above

### For D30 Retention (Column M):
- **Green:** >=18%
- **Yellow:** 12-17%
- **Red:** <12%

---

## Troubleshooting

### "My formulas show #DIV/0! errors"
**Solution:** This means you're dividing by zero (no data yet). The formulas I provided include `IF(B2="","",...)` which should prevent this. Make sure you copied the formulas exactly.

### "Paid Rate looks wrong"
**Remember:** Paid Rate compares to trials from 7 days ago. In row 2, the formula references F9 (7 rows later). You need to adjust the row reference for each week. This is intentional because trials are 7 days long.

### "I don't have data for all columns yet"
**That's fine!** Fill in what you have:
- Week 1: You might only have Landing Page Views and Free Downloads
- Week 2: You might add Trial Signups
- Week 3+: You'll start seeing Paid Conversions

### "Can I track this daily instead of weekly?"
**Yes**, but it's noisier. Weekly tracking smooths out day-to-day fluctuations and is easier to manage as a solopreneur. If you want daily, just change the "Week Starting" column to dates and adjust formulas accordingly.

---

## Monthly Review Checklist

At the end of each month, do a deeper analysis:

- [ ] **Trend Analysis:** Are your KPIs improving week-over-week?
- [ ] **Funnel Analysis:** Where is the biggest drop-off? (TOFU → MOFU? MOFU → BOFU?)
- [ ] **Content Analysis:** Which TikTok videos drove the most downloads? (Check Metricool)
- [ ] **Email Analysis:** Which emails had highest open/click rates? (Check ConvertKit)
- [ ] **Revenue Analysis:** Are you on track to hit your MRR goals?
- [ ] **Cohort Analysis:** Is each week's cohort retaining better than the last?

**Document key learnings in the "Notes" column or in your customer discovery doc (Section 10: Validation & Iteration Log).**

---

## Sample Data (What Success Looks Like)

Here's what your tracker might look like after 8 weeks:

| Week | Views | Downloads | DL Rate | Trials | Trial Rate | Paid | Paid Rate | Active | Retention | MRR |
|------|-------|-----------|---------|--------|------------|------|-----------|--------|-----------|-----|
| Oct 14 | 500 | 100 | 20% | 15 | 15% | - | - | 0 | - | $0 |
| Oct 21 | 750 | 180 | 24% | 30 | 17% | 2 | 13% | 2 | - | $30 |
| Oct 28 | 1000 | 250 | 25% | 45 | 18% | 5 | 17% | 7 | - | $105 |
| Nov 4 | 1200 | 300 | 25% | 55 | 18% | 8 | 18% | 15 | - | $225 |
| Nov 11 | 1500 | 375 | 25% | 70 | 19% | 10 | 18% | 24 | 100%* | $360 |
| Nov 18 | 1800 | 450 | 25% | 85 | 19% | 13 | 19% | 35 | 88% | $525 |
| Nov 25 | 2000 | 520 | 26% | 95 | 18% | 15 | 19% | 48 | 86% | $719 |
| Dec 2 | 2200 | 550 | 25% | 100 | 18% | 17 | 19% | 60 | 80% | $899 |

*Note: Retention % may show >100% early on due to new signups, but stabilizes around 80-85% for healthy growth.

**Key Observations:**
- Consistent 25% download rate (good content-market fit)
- Improving trial rate (email sequence working)
- Consistent 17-19% paid rate (trial experience is solid)
- Growing from $0 → $899 MRR in 8 weeks
- On track to hit $1000+ MRR by week 10

---

## Next Steps

1. **Import the CSV to Google Sheets now** (takes 2 minutes)
2. **Set up formulas** (takes 5 minutes using this guide)
3. **Add conditional formatting** (takes 3 minutes)
4. **Bookmark the sheet** and commit to filling it out every Monday
5. **Set a calendar reminder** for "Monday 9am: Update KPI Tracker"

**That's it!** You now have a professional KPI tracking system that would cost $500+ if you hired an agency to build it.

---

## Questions?

If you need help with formulas or setup, just ask. Once you have data flowing, this sheet will become your most important business tool.
