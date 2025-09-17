## BUSINESS REQUIREMENTS DOCUMENT (BRD)

### 1) Problem Statement
People with diabetes (Type 1 & Type 2) want to train, lose fat, and gain muscle **safely**. Generic fitness apps ignore glucose trends, while many diabetes apps don’t translate data into actionable training and nutrition plans. Users need a **single place** that:
- Ingests CGM and activity data
- Interprets it in real time
- Produces **personalized** workouts, meals, and safety nudges

### 2) Goals
**Primary**
- Increase user time-in-range (TIR) during training days
- Improve workout adherence and consistency
- Deliver high-retention subscription revenue via AI coaching

**Secondary**
- Generate longitudinal insights (patterns across training, meals, sleep)
- Create a community loop for accountability and retention

### 3) Non‑Goals
- We are **not** a medical device. We do not diagnose, treat, or provide medical advice.  
- We will not replace clinicians or insulin dosing decisions.

### 4) Target Users & Personas
- **T1D Lifter “Alex” (Age 20–40):** Uses CGM/pump, trains 3–5x/week, wants body recomposition without hypos.
- **T2D Rebuilder “Sam” (Age 30–60):** Uses CGM or fingersticks; wants weight loss, cardio habit, and sustainable meals.
- **Pre‑diabetic “Jordan” (Age 25–55):** Wants to prevent progression; prefers habit coaching.
- **Coach “Riley”:** Wants dashboards for 5–50 clients (future B2B).

### 5) Value Proposition
- **Safety‑aware training**: AI adjusts intensity based on glucose trend & variability
- **Nutrition that fits the moment**: meals and timing that reflect real‑time glucose state
- **Daily clarity**: one plan per day, zero guesswork

### 6) Competitive Landscape (high level)
- Fitness planning apps (Fitbod, Freeletics, Centr): great workouts, **no glucose context**
- Diabetes loggers (Dexcom, LibreView, MySugr): rich data, **limited fitness coaching**
- General AI coaches: broad scope, **no CGM‑aware periodization**

### 7) Success Metrics (North Stars)
**Product**
- D1 retention ≥ 55%, D7 ≥ 30%, D30 ≥ 15%
- Weekly Active Users (WAU/MAU) ≥ 0.5
- Plan adherence (workout or meal task completed) ≥ 60% weekly
- Avg. push notification CTR ≥ 18%

**Health‑adjacent (non‑clinical)**
- Avg. training‑day TIR +5–10% vs. user baseline (self‑reported/connected data)
- ↓ symptomatic lows during/after workouts (self‑report)

**Business**
- Trial → paid conversion ≥ 7–12%
- Monthly churn ≤ 6–8%
- ARPU (paid) ≥ $14.99

### 8) Pricing & Packaging
- **Free**: basic plan generator (no device sync), community challenges
- **Premium $14.99/mo or $99/yr**: device sync via HealthKit/Google Fit, AI daily plan, macros, habit loops
- **Pro $24.99/mo or $159/yr**: direct CGM integrations (Dexcom/Libre when approved), advanced insights, coach chat, safety alerts

### 9) Risks & Mitigations
- **Regulatory ambiguity** (fitness vs. medical):
  - Strong disclaimers; position as **wellness/fitness guidance**
  - Avoid dosing instructions, diagnostic claims
  - If partnering with covered entities, pursue **BAA** and HIPAA controls
- **Data privacy/security**:
  - SOC2 path; HIPAA‑aligned controls where appropriate
  - Encryption at rest+in transit, least‑privilege, audit logs
- **Device API access**:
  - Start with **Apple HealthKit/Google Fit**; then apply for Dexcom/Abbott programs
- **User safety (hypos/hypers)**:
  - Clear thresholds, alerts, and “pause workout” recommendations

### 10) Go‑To‑Market
- Founder story (diabetes + fitness) via TikTok/Shorts/Twitter/Reddit
- Partnerships with diabetes creators & gyms
- Employer wellness pilots (phase 2)
- Community challenges (streaks, leaderboards)