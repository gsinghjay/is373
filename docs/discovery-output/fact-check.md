## Executive Summary

**Verdict: PASS with minor revisions.**
Top 3 reasons:

1. **Competitive gaps confirmed** — Fitbod, Freeletics, MySugr, Dexcom/Libre, and Supersapiens/Levels do not offer CGM-aware strength periodization.
2. **CGM adoption claims are accurate but need nuance** — 95% usage in the 2025 T1D Exchange Registry sample is correct, but the 2022 T1DX-QI EMR data shows lower adoption in adults (40–50%) vs. youth (\~60%), so text should stress *registry sample* vs. population.
3. **KPIs properly benchmarked** — Salesforce, Landingi, AppsFlyer benchmarks are correct; but targets above medians (e.g., D30 retention at 15%) should remain clearly marked “aspirational”.

---

## Claims Verification Table

| Claim                                                             | Evidence summary                                            | Sources (URLs)                                                                                                                                                                   | Confidence | Notes                         |
| ----------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------- |
| Fitbod = no glucose/IR context                                    | Official blog describes algorithm (no diabetes/CGM context) | [https://fitbod.me/blog/fitbod-algorithm/](https://fitbod.me/blog/fitbod-algorithm/)                                                                                             | 0.95       | Verified                      |
| Freeletics not diabetes-aware                                     | No mention of diabetes/CGM on official site                 | [https://www.freeletics.com/](https://www.freeletics.com/)                                                                                                                       | 0.95       | Verified                      |
| MySugr = logging, no prescriptive training                        | diaTribe review confirms                                    | [https://diatribe.org/diabetes-technology/8-apps-improve-your-time-range](https://diatribe.org/diabetes-technology/8-apps-improve-your-time-range)                               | 0.9        | Verified                      |
| Dexcom/Libre = data only, not prescriptive                        | Dexcom provides tips/alerts, no training plans              | [https://www.dexcom.com/en-us/all-access/managing-diabetes/exercise-tips-from-dietitian](https://www.dexcom.com/en-us/all-access/managing-diabetes/exercise-tips-from-dietitian) | 0.95       | Verified                      |
| Supersapiens/Levels = metabolic insights, not structured strength | Reviews confirm insights, no CGM-adaptive periodization     | [https://www.myprocoach.net/blog/supersapiens-review/](https://www.myprocoach.net/blog/supersapiens-review/)                                                                     | 0.9        | Verified                      |
| “No CGM-aware strength periodization” exists                      | No competitors identified with this feature                 | Above competitor evidence                                                                                                                                                        | 0.9        | Key differentiator stands     |
| CGM adoption in T1D Exchange Registry \~95% (2025)                | Report confirms 95% CGM use registry-wide                   | [https://t1dexchange.org/t1d-registry-technology-trends-2025/](https://t1dexchange.org/t1d-registry-technology-trends-2025/)                                                     | 0.95       | Must stress *registry* sample |
| 2022 T1DX-QI EMR data shows youth higher than adults              | Multicenter EMR study confirms 64% (youth) vs. 46% (adults) | [https://diabetesjournals.org/diabetes/article/72/Supplement\_1/1456-P/150825/](https://diabetesjournals.org/diabetes/article/72/Supplement_1/1456-P/150825/)                    | 0.9        | Verified                      |
| T2D CGM ~13% (2021), rising                                       | Mayberry 2023 JGIM: ~13% of adults with T2D used CGM in 2021; adoption rising | [https://link.springer.com/article/10.1007/s11606-023-08222-3](https://link.springer.com/article/10.1007/s11606-023-08222-3)                                                     | 0.9        | Verified                      |
| Email CTR \~2–5%                                                  | Salesforce benchmark report                                 | [https://www.salesforce.com/marketing/email/benchmarks/](https://www.salesforce.com/marketing/email/benchmarks/)                                                                 | 0.95       | Verified                      |
| LP conversion \~5–6%                                              | Landingi benchmark                                          | [https://landingi.com/landing-page/conversion-rate-a/](https://landingi.com/landing-page/conversion-rate-a/)                                                                     | 0.95       | Verified                      |
| App retention D30 \~3–6%                                          | AppsFlyer benchmark                                         | [https://sendbird.com/blog/app-retention-benchmarks-broken-down-by-industry](https://sendbird.com/blog/app-retention-benchmarks-broken-down-by-industry)                         | 0.9        | Verified                      |

---

## Gaps & Risks

| Issue                                                             | Impact | Likelihood | Why it matters                                       | Suggested action                                   |
| ----------------------------------------------------------------- | ------ | ---------- | ---------------------------------------------------- | -------------------------------------------------- |
| CGM adoption stat could be misread as “general population”        | High   | High       | 95% is registry sample, not national                 | Revise phrasing                                    |
| KPIs (D30 retention 15%, adherence 60%) may overstate feasibility | Medium | Medium     | Risks credibility if unachievable                    | Keep “aspirational” flag                           |
| PCOS/IR segment evidence sparse                                   | Medium | Medium     | Persona well-defined, but fewer quantitative sources | Add supporting prevalence/fitness engagement stats |
| Regulatory risk if “safety” language drifts into medical claims   | High   | Medium     | FDA has acted (Whoop letter 2025)                    | Retain disclaimers, audit messaging quarterly      |

---

## Recommended Revisions

* **Original (deck-outline.md, slide 5):**
  “CGM adoption (U.S. T1D Exchange registry \~95% CGM use in 2025; 2022 multicenter data show higher youth vs. lower adult CGM use)”

  **→ Revised:**
  “CGM adoption rising — *Registry data* show \~95% use among participants in 2025 (T1D Exchange Registry). EMR data from 26 U.S. centers (2022 T1DX-QI) confirm adoption disparities: \~64% in youth vs. \~46% in adults.”

* **Original (kpis-30-60-90.md):**
  “Retention (D1/D7/D30) — target near BRD (55/30/15) \[ambitious]”

  **→ Revised:**
  “Retention (D1/D7/D30) — target near BRD (55/30/15) \[ambitious; external benchmarks show median D30 at 3–6%].”

* **Persona docs (e.g., personas-pcos.md):**
  Add one sentence referencing prevalence: *“PCOS affects \~6–12% of U.S. women of reproductive age (CDC), many reporting struggles with weight, insulin resistance, and sustainable exercise.”*

* **Competitive landscape (deck-outline.md):**
  Add a footnote acknowledging niche offerings (e.g., GlucoseZone provides diabetes-focused exercise videos) while clarifying that none deliver CGM-adaptive strength periodization — our differentiator remains intact.

* **Email/LP KPI context (kpis-30-60-90.md):**
  Explicitly note benchmarks and aspiration: *“Benchmarks: average email CTR \~2–5% (Salesforce); landing page conversions \~5–6% (Landingi). Our targets (e.g., email CTR 8–12%, conversion 6–10%) are aspirational, aiming for top-tier performance.”*

* **Regulatory language (deck-outline.md, brand-brief.md):**
  Include general wellness disclaimer text: *“This product is not intended to diagnose, treat, cure, or prevent any disease.”* Clarify that adaptive features provide supportive wellness insights, not medical advice.

* **Roadmap — Non-CGM pathway:**
  Note that Phase 1 supports non-CGM users via manual glucose logging or proxies (e.g., meal timing, RPE) to ensure value without CGM access.

* **Community support:**
  Add “community challenges and coach Q&A” to personas/brand sections to support motivation and adherence, especially for PCOS and pre-diabetic users.

---

## Follow-Ups (Prioritized)

1. Add direct CDC/NIH prevalence citations for PCOS/IR to strengthen persona.
2. Insert explicit “registry sample” qualifier in all CGM adoption references.
3. Gather quantitative data on exercise participation among T2D adults to validate persona “Sam”.
4. Capture at least 2–3 engagement post examples for Fitbod, Freeletics, Supersapiens (content-audit.md TODOs).
5. Review FDA/FTC guidance quarterly to ensure messaging stays within “general wellness” safe harbor.

6. Add GlucoseZone footnote + source link in relevant slides/docs.
7. Place the T2D CGM \~13% (2021) stat in “Why Now” and ensure citation (Mayberry 2023 JGIM) is present.
8. Update roadmap/brand slides with non-CGM path and community support elements.

---

## Source Appendix

1. Fitbod algorithm, Fitbod blog, 2025 — [https://fitbod.me/blog/fitbod-algorithm/](https://fitbod.me/blog/fitbod-algorithm/) (company primary source).
2. Freeletics official site, 2025 — [https://www.freeletics.com/](https://www.freeletics.com/) (company site, no diabetes features).
3. mySugr overview, diaTribe — [https://diatribe.org/diabetes-technology/8-apps-improve-your-time-range](https://diatribe.org/diabetes-technology/8-apps-improve-your-time-range) (independent diabetes org).
4. Dexcom exercise tips — [https://www.dexcom.com/en-us/all-access/managing-diabetes/exercise-tips-from-dietitian](https://www.dexcom.com/en-us/all-access/managing-diabetes/exercise-tips-from-dietitian) (company site, confirms non-prescriptive).
5. Supersapiens review, MyProCoach — [https://www.myprocoach.net/blog/supersapiens-review/](https://www.myprocoach.net/blog/supersapiens-review/) (independent coach review).
6. T1D Exchange Registry 2025 — [https://t1dexchange.org/t1d-registry-technology-trends-2025/](https://t1dexchange.org/t1d-registry-technology-trends-2025/) (registry primary source).
7. T1DX-QI 2022 EMR data, *Diabetes* supplement — [https://diabetesjournals.org/diabetes/article/72/Supplement\_1/1456-P/150825/](https://diabetesjournals.org/diabetes/article/72/Supplement_1/1456-P/150825/) (peer-reviewed).
8. Mayberry 2023 CGM adoption in T2D, *JGIM* — [https://link.springer.com/article/10.1007/s11606-023-08222-3](https://link.springer.com/article/10.1007/s11606-023-08222-3) (peer-reviewed).
9. Salesforce Email Benchmarks — [https://www.salesforce.com/marketing/email/benchmarks/](https://www.salesforce.com/marketing/email/benchmarks/) (industry benchmark).
10. Landingi LP conversion benchmarks — [https://landingi.com/landing-page/conversion-rate-a/](https://landingi.com/landing-page/conversion-rate-a/) (industry benchmark).
11. AppsFlyer retention benchmarks via Sendbird — [https://sendbird.com/blog/app-retention-benchmarks-broken-down-by-industry](https://sendbird.com/blog/app-retention-benchmarks-broken-down-by-industry) (industry benchmark).
12. FDA enforcement example (Whoop letter, Arnold & Porter 2025) — [https://www.arnoldporter.com/en/perspectives/advisories/2025/09/fda-warning-letter-to-fitness-wearable-sponsor](https://www.arnoldporter.com/en/perspectives/advisories/2025/09/fda-warning-letter-to-fitness-wearable-sponsor) (legal advisory).

---

## Research Log

* Queries: “Fitbod algorithm glucose diabetes site\:fitbod.me”, “Freeletics diabetes CGM features”, “mySugr exercise prescriptive training”, “Dexcom exercise tips prescriptive”, “Supersapiens review strength”, “T1D Exchange registry 2025 CGM adoption”, “T1DX-QI 2022 multicenter CGM adoption”, “Mayberry 2023 CGM adoption T2D”, “Salesforce email CTR benchmark 2024”, “Landingi conversion benchmarks”, “AppsFlyer app retention benchmarks”.
* Outcomes: Confirmed competitive gaps, CGM adoption figures, KPI benchmarks; identified nuance required around registry vs. EMR data.
