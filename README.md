# RangeFit — Customer Discovery and BRD

RangeFit explores an AI fitness coach for people with diabetes (T1D/T2D), pre-diabetics, and women with insulin resistance/PCOS. The product goal is safe, consistent training with daily clarity. This repo contains the BRD, customer-discovery templates, filled drafts, and a Google Slides generator for the presentation deck.

Important: This project is wellness/fitness guidance only. It does not diagnose, treat, or provide medical advice. No dosing instructions or clinical claims.

## What’s Inside
- BRD: docs/brd.md
- Customer-Discovery Guide + Templates: docs/customer-discovery-process.md, docs/templates/customer-discovery/*.md
- Discovery Outputs (drafts ready for evidence): docs/discovery-output/
  - Brand brief: docs/discovery-output/brand-brief.md
  - Personas: docs/discovery-output/personas-{t1d,t2d,pre,pcos}.md
  - Landscape & Content Audit: docs/discovery-output/{landscape,content-audit}.md
  - Gap → Opportunity: docs/discovery-output/gap-opportunity.md
  - Journey/Funnel: docs/discovery-output/journey.md
  - KPIs (30/60/90): docs/discovery-output/kpis-30-60-90.md
  - Deck outline: docs/discovery-output/deck-outline.md
  - Google Slides generator: docs/discovery-output/gslides/*
- Script to compile deck content JSON: scripts/generate-gslides-content.mjs

## Quick Start
- Read the BRD at docs/brd.md.
- Follow the discovery guide docs/customer-discovery-process.md and collect evidence (screenshots/links) for:
  - Media bubble examples (Slide 1)
  - 2–3 posts per competitor (Content Audit)
- Fill the discovery drafts under docs/discovery-output/ as you gather evidence.

## Generate the Google Slides Deck
Two options are supported.

- Option A — Auto-fill from repo (recommended)
  1. Generate content JSON locally
     - Run: node scripts/generate-gslides-content.mjs
     - Output: docs/discovery-output/gslides/content.json
  2. Push the repo to GitHub (public or accessible)
  3. Open docs/discovery-output/gslides/create_deck.gs and set:
     - CONFIG.contentUrl = https://raw.githubusercontent.com/<owner>/<repo>/<branch>/docs/discovery-output/gslides/content.json
  4. Create a new Apps Script project in Google Drive and paste create_deck.gs, then run createDiscoveryDeck

- Option B — Manual paste
  1. Open docs/discovery-output/gslides/content.json
  2. Copy its JSON and replace the object returned by getDeckContent() in create_deck.gs
  3. Run createDiscoveryDeck

See docs/discovery-output/gslides/README.md for detailed steps.

## Deep Research Verification Workflow
Use this checklist to validate and strengthen the discovery artifacts.
- Competitive Landscape
  - Verify competitor set relevance (T1D/T2D/pre-diabetic/PCOS/IR niches)
  - Capture 2–3 posts per competitor with hooks, CTA, engagement (Content Audit)
- Gap → Opportunity
  - Validate underserved segments and persuasion/funnel gaps with evidence links
- Brand Brief
  - Confirm archetype blend (Caregiver + Hero/Sage), value prop clarity, differentiators
- Personas
  - Confirm JTBD, pains/gains, objections, triggers with source links or quotes
- Journey & KPIs
  - Ensure 30/60/90 targets align with BRD north stars and are measurable

Document supporting evidence inline using links and brief notes. Prefer primary sources (product pages, official channels, creator accounts) and recent content.

## Disclaimers & Safety
- Not a medical device; no diagnosis/treatment; no dosing guidance
- Position as wellness/fitness guidance with clear disclaimers
- If integrating with covered entities in future: BAA + HIPAA-aligned controls
- Data privacy: encryption at rest/in transit, least privilege, audit logs

## Contributing
- Use the templates under docs/templates/customer-discovery/ when adding new analyses
- Keep drafts in docs/discovery-output/ up to date with evidence screenshots/links
- When editing slides content, update docs/discovery-output/deck-outline.md then regenerate content.json via:
  - node scripts/generate-gslides-content.mjs

## Project Structure
- docs/ — BRD, guide, templates, outputs
- docs/discovery-output/ — Working drafts and deck outline
- docs/discovery-output/gslides/ — Apps Script + JSON for deck generation
- scripts/ — Local utilities (e.g., generate-gslides-content.mjs)

## Roadmap
- Expand competitor cards with quantified engagement metrics
- Add research log and citations file (optional) under docs/research/
- Add optional Google Slides theme configuration

