# Google Slides Generator — How To Use

This folder contains a Google Apps Script to generate the Customer Discovery deck.

## What You Get
- A Slides deck with the 10–12 slide outline pre‑created:
  - Title & media‑bubble evidence (drop‑zone)
  - Condensed competitor table
  - Content audit highlights
  - Gap → Opportunity
  - Brand brief snapshot
  - Persona (PCOS/IR)
  - Journey (TOFU→MOFU→BOFU→Post)
  - KPIs 30/60/90
  - Closing takeaway
  - Optional: Risks & Mitigations, Experiment Backlog
  - Sources

## Steps
1) Open Google Drive → New → More → Google Apps Script
2) Copy the contents of docs/discovery-output/gslides/create_deck.gs into the editor (replace any starter code)
3) File → Save (name it e.g. DiscoveryDeckGenerator)
4) Run ▶ createDiscoveryDeck
   - Approve permissions when prompted (Slides access)
5) Check the execution logs for the deck URL, or open Slides → Recent

## Customization
- Edit the content in getDeckContent() inside create_deck.gs to adjust titles, bullets, table rows.
- Replace placeholders with your competitor set and add links/screenshots.
- The title slide includes a drop‑zone rectangle; drag images there.

## Tips
- After generating, switch theme in Slides to match your brand.
- Keep the deck in sync with the source docs in docs/discovery-output/.

## Auto‑Fill From Repo (Recommended)
1) Generate content JSON locally:
   - Run: Wrote docs/discovery-output/gslides/content.json with 12 slides
   - Output: docs/discovery-output/gslides/content.json
2) Push the repo to GitHub (public or accessible)
3) In create_deck.gs,  is pre-set to:
   - 
   - If your default branch is not , change  to your branch.
4) Re‑run  — it will fetch and use the JSON for slides

Fallback: If not public yet, open , copy its JSON, and replace the return of  with that object.
