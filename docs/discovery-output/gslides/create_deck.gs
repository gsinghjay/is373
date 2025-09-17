/**
 * Customer Discovery — Google Slides Deck Generator
 * How to use: See docs/discovery-output/gslides/README.md
 */

var CONFIG = {
  // Auto-fill from repo content JSON. Update branch if not 'main'.
  // Set to your GitHub raw URL for content.json, e.g.:
  // 'https://raw.githubusercontent.com/<owner>/<repo>/<branch>/docs/discovery-output/gslides/content.json'
  contentUrl: 'https://raw.githubusercontent.com/gsinghjay/is373/main/docs/discovery-output/gslides/content.json'
};

function createDiscoveryDeck() {
  const cfg = resolveDeckContent();
  const pres = SlidesApp.create(cfg.deckTitle || 'Customer Discovery Deck');
  const url = pres.getUrl();

  // Slide 1 — Title
  const s1 = pres.getSlides()[0];
  setTitleAndSubtitle(
    s1,
    cfg.slides[0].title,
    cfg.slides[0].subtitle
  );
  // Optional drop-zone rectangle for screenshots
  insertDropzone(s1, 'Add 3–5 screenshots/links');

  // Create the rest of the slides
  for (let i = 1; i < cfg.slides.length; i++) {
    const spec = cfg.slides[i];
    let slide;
    switch (spec.type) {
      case 'table':
        slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_TWO_COLUMNS);
        setTitle(slide, spec.title);
        insertTable(slide, spec.headers, spec.rows);
        addNotes(slide, spec.notes || '');
        break;
      case 'bullets':
        slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
        setTitleAndBullets(slide, spec.title, spec.bullets);
        addNotes(slide, spec.notes || '');
        break;
      case 'statement':
        slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE);
        setTitle(slide, spec.title);
        insertTextBox(slide, spec.text);
        addNotes(slide, spec.notes || '');
        break;
      case 'sources':
        slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
        setTitleAndBullets(slide, spec.title, spec.bullets);
        break;
      default:
        slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
        setTitleAndBullets(slide, spec.title || 'Slide', spec.bullets || []);
        break;
    }
  }

  Logger.log('Deck created: ' + url);
  return url;
}

function insertDropzone(slide, label) {
  // Create a light grey rectangle to indicate where to add images
  // Note: Slides Service does not expose page width/height directly; use safe absolute
  // coordinates that work with default slide size.
  var x = 40;   // left
  var y = 300;  // top
  var w = 860;  // width
  var h = 180;  // height
  try {
    var shape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
    shape.getText().setText(label || 'Add assets here');
    shape.getText().getTextStyle().setBold(true);
    shape.getFill().setSolidFill('#EEEEEE');
    // Some methods like getLine()/DashStyle are not available in SlidesApp; skip border styling.
    return shape;
  } catch (e) {
    Logger.log('insertDropzone error: ' + e);
  }
}

function setTitle(slide, title) {
  const elements = slide.getPageElements();
  let titleSet = false;
  elements.forEach(el => {
    if (el.getPageElementType() === SlidesApp.PageElementType.SHAPE) {
      const sh = el.asShape();
      if (sh.getPlaceholderType() === SlidesApp.PlaceholderType.TITLE) {
        sh.getText().setText(title || '');
        titleSet = true;
      }
    }
  });
  if (!titleSet) {
    // Create a title textbox at the top
    insertTextBox(slide, title || '', 50, 40, 600, 60, 28, true);
  }
}

function setTitleAndSubtitle(slide, title, subtitle) {
  const elements = slide.getPageElements();
  let titleSet = false;
  let subtitleSet = false;
  elements.forEach(el => {
    if (el.getPageElementType() === SlidesApp.PageElementType.SHAPE) {
      const sh = el.asShape();
      const ph = sh.getPlaceholderType();
      if (ph === SlidesApp.PlaceholderType.TITLE) {
        sh.getText().setText(title || '');
        titleSet = true;
      } else if (ph === SlidesApp.PlaceholderType.SUBTITLE) {
        sh.getText().setText(subtitle || '');
        subtitleSet = true;
      }
    }
  });
  if (!titleSet) insertTextBox(slide, title || '', 50, 40, 600, 60, 28, true);
  if (!subtitleSet) insertTextBox(slide, subtitle || '', 50, 110, 600, 40, 14, false);
}

function setTitleAndBullets(slide, title, bullets) {
  setTitle(slide, title);
  // Find a BODY placeholder
  let bodyShape = null;
  slide.getPageElements().forEach(el => {
    if (el.getPageElementType() === SlidesApp.PageElementType.SHAPE) {
      const sh = el.asShape();
      if (sh.getPlaceholderType() === SlidesApp.PlaceholderType.BODY) bodyShape = sh;
    }
  });
  const lines = (bullets || []).filter(Boolean);
  if (bodyShape) {
    const t = bodyShape.getText();
    t.setText(lines.length ? lines.join('\n') : '');
    // Turn into bullet list
    if (lines.length) t.getListStyle().applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);
  } else {
    // Create a body textbox if not found
    const tb = insertTextBox(slide, lines.join('\n'), 50, 140, 600, 300, 14, false);
    if (lines.length) tb.getText().getListStyle().applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);
  }
}

function insertTextBox(slide, text, x, y, w, h, fontSize, bold) {
  const shape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x || 50, y || 140, w || 600, h || 300);
  const style = shape.getText().getTextStyle();
  shape.getText().setText(text || '');
  if (fontSize) style.setFontSize(fontSize);
  if (bold) style.setBold(true);
  return shape;
}

function insertTable(slide, headers, rows) {
  const totalRows = (rows && rows.length ? rows.length : 0) + 1;
  const totalCols = headers && headers.length ? headers.length : 3;
  const table = slide.insertTable( totalRows, totalCols );
  // Header row
  headers = headers && headers.length ? headers : ['Col 1', 'Col 2', 'Col 3'];
  for (let c = 0; c < totalCols; c++) {
    table.getCell(0, c).getText().setText(headers[c] || '');
    table.getCell(0, c).getText().getTextStyle().setBold(true);
  }
  // Body rows
  for (let r = 0; r < (rows || []).length; r++) {
    const row = rows[r];
    for (let c = 0; c < totalCols; c++) {
      const val = row[c] != null ? String(row[c]) : '';
      table.getCell(r + 1, c).getText().setText(val);
    }
  }
  // Rely on default placement for the table in this layout.
  return table;
}

function addNotes(slide, notes) {
  if (!notes) return;
  slide.getNotesPage().getSpeakerNotesShape().getText().setText(notes);
}

function getDeckContent() {
  return {
    deckTitle: 'Customer Discovery — RangeFit',
    slides: [
      { // 1 — Title & Topic
        type: 'title',
        title: 'RangeFit — Safety‑Aware AI Coaching for Diabetes & PCOS/IR',
        subtitle: 'Media bubble evidence: add 3–5 screenshots/links'
      },
      { // 2 — Competitive Landscape Table
        type: 'table',
        title: 'Competitive Landscape — Plans vs. Data (Gap: Safety‑Aware Training)',
        headers: ['Competitor', 'Niche', 'Primary Gap'],
        rows: [
          ['Fitbod', 'Strength planner', 'No glucose/IR context'],
          ['Freeletics', 'AI coach', 'Not diabetes‑aware'],
          ['MySugr', 'Diabetes logger', 'No prescriptive training'],
          ['Dexcom/LibreView', 'Device ecosystem', 'Not prescriptive'],
          ['Supersapiens/Levels', 'Metabolic insights', 'Limited prescriptive workouts']
        ],
        notes: 'Replace with your competitor set as needed.'
      },
      { // 3 — Content Audit Highlights
        type: 'bullets',
        title: 'Content Audit Highlights',
        bullets: [
          'Best examples (2–3): add links/screens',
          'What worked: clear transformations, simple checklists, authentic voice',
          'What didn’t: generic nutrition claims, dense charts without action',
          'Takeaway: short, specific, safety‑oriented tips > broad claims'
        ],
        notes: 'Add 2–3 Post Audits per competitor.'
      },
      { // 4 — Gap Analysis
        type: 'bullets',
        title: 'Gap Analysis — Underserved Segments + Weak Stages',
        bullets: [
          'Underserved: T1D lifters; T2D adults; pre‑diabetics; women with PCOS/IR',
          'Weak stages: MOFU (safety education); BOFU (use‑case proof); Post‑purchase (onboarding/community)',
          'Takeaway: Safety‑aware, PCOS/IR‑friendly strength wedge is open'
        ]
      },
      { // 5 — Opportunity Statement
        type: 'statement',
        title: 'Opportunity Statement',
        text: 'For active adults with diabetes or insulin resistance, we will provide safe, consistent progress by adapting workouts and low‑glycemic meals to daily glucose/metabolic context, unlike fitness apps that ignore glucose and tracking apps that stop at logging.',
        notes: 'Why now: CGM adoption rising — T1D Exchange Registry ~95% CGM use (2025, registry sample); 2022 Diabetes supplement (T1DX‑QI) shows higher youth vs lower adult CGM use; T2D CGM use growing (Mayberry 2023). Plus: short‑form fitness education + AI personalization expectations.'
      },
      { // 6 — Brand Brief (Visual)
        type: 'bullets',
        title: 'Brand Brief — Caregiver + Hero',
        bullets: [
          'Positioning: safety‑aware strength + IR‑friendly meals; one plan/day',
          'Persuasion: Authority, Consistency, Unity, Reciprocity, Social Proof, Liking',
          'Differentiators: CGM‑aware periodization; PCOS/IR defaults; adaptive nudges'
        ]
      },
      { // 7 — Persona
        type: 'bullets',
        title: 'Persona — PCOS/IR “Maya” (32)',
        bullets: [
          'Bio & JTBD: sustainable strength; stable energy',
          'Pains: energy dips; conflicting advice; fear of “bulking”',
          'Proof needed: simple rules; success stories; transparent method',
          'Ref: docs/discovery-output/personas-pcos.md'
        ]
      },
      { // 8 — Customer Journey Map
        type: 'bullets',
        title: 'Customer Journey — TOFU → MOFU → BOFU → Post',
        bullets: [
          'TOFU: Shorts with sugar‑safe/PCOS‑friendly tips → CTA: free 7‑day plan',
          'MOFU: Lead magnet + 5‑email explainer → CTA: 14‑day trial',
          'BOFU: Offer page with safety logic + testimonials → CTA: Start trial',
          'Post: Onboarding; community challenges; Pro upsell when eligible'
        ],
        notes: 'Disclaimers: general wellness positioning; no clinical claims or dosing guidance; encourage consultation with healthcare providers.'
      },
      { // 9 — KPIs 30/60/90
        type: 'bullets',
        title: 'Success Metrics & KPIs (30/60/90)',
        bullets: [
          'Awareness: CTR to LP 2% / 3% / 4%',
          'Consideration: Opt‑ins 25% / 30% / 35%; Email CTR 8% / 10% / 12%',
          'Conversion: LP CVR 6% / 8% / 10%; Trial→Paid 7% / 9% / 12%',
          'Post‑purchase: D1/D7/D30 ≈ 55/30/15 (ambitious); plan adherence ≥ 60% (aspirational)'
        ],
        notes: 'Benchmarks: email CTR ~2–5% (Salesforce); LP conversion ~5–6% (Landingi); D30 retention ~3–6% (AppsFlyer via Sendbird).'
      },
      { // 10 — Closing Takeaway
        type: 'bullets',
        title: 'Closing — Wedge First, Then Expand',
        bullets: [
          'Bet: Win T1D lifter & PCOS/IR wedges with safety‑aware strength',
          'Expand: broader segments as integrations mature',
          'Next: evidence capture, competitor cards, lead magnet, tracking plan'
        ]
      },
      { // 11 — Risks & Mitigations (optional)
        type: 'bullets',
        title: 'Risks & Mitigations (Optional)',
        bullets: [
          'Regulatory ambiguity → wellness positioning; disclaimers; no clinical claims (FDA/Whoop letter example)',
          'Device access → HealthKit/Google Fit first; apply to Dexcom/Abbott',
          'Privacy/security → SOC2 path; HIPAA‑aligned controls where appropriate'
        ]
      },
      { // 12 — Experiment Backlog (optional)
        type: 'bullets',
        title: 'Experiment Backlog (Optional)',
        bullets: [
          'LP A/B test (safety logic explainer prominence)',
          'Lead magnet variants (T1D vs. PCOS)',
          'Email sequence tests (order, proof density)',
          'TOFU hooks (checklist vs. transformation)'
        ]
      },
      { // 13 — Sources & Evidence Links
        type: 'sources',
        title: 'Sources & Evidence Links',
        bullets: [
          'Fitbod algorithm — https://fitbod.me/blog/fitbod-algorithm/',
          'Freeletics site (no diabetes/CGM features) — https://www.freeletics.com/',
          'mySugr scope (diaTribe) — https://diatribe.org/diabetes-technology/8-apps-improve-your-time-range',
          'Dexcom exercise tips — https://www.dexcom.com/en-us/all-access/managing-diabetes/exercise-tips-from-dietitian',
          'Supersapiens review — https://www.myprocoach.net/blog/supersapiens-review/',
          'GlucoseZone overview — https://diatribe.org/diabetes-technology/glucosezone-exercise-app-people-diabetes',
          'T1D CGM (T1D Exchange 2025) — https://t1dexchange.org/t1d-registry-technology-trends-2025/',
          'T1D CGM by age (Diabetes 2022 supplement) — https://diabetesjournals.org/diabetes/article/72/Supplement_1/1456-P/150825/',
          'T2D CGM (Mayberry 2023) — https://link.springer.com/article/10.1007/s11606-023-08222-3',
          'Benchmarks — CTR: Salesforce; CVR: Landingi; D30: AppsFlyer via Sendbird',
          'Internal: BRD/Journey/KPIs/Personas under docs/discovery-output/'
        ]
      }
    ]
  };
}

function resolveDeckContent() {
  // Try to fetch remote content.json when contentUrl is set, else fall back to default
  if (CONFIG && CONFIG.contentUrl && CONFIG.contentUrl.indexOf('http') === 0) {
    try {
      const resp = UrlFetchApp.fetch(CONFIG.contentUrl, { muteHttpExceptions: true });
      const code = resp.getResponseCode();
      if (code >= 200 && code < 300) {
        const json = JSON.parse(resp.getContentText());
        if (json && json.slides && json.slides.length) {
          return json;
        }
      } else {
        Logger.log('Fetch failed: ' + code + ' for ' + CONFIG.contentUrl);
      }
    } catch (e) {
      Logger.log('Error fetching contentUrl: ' + e);
    }
  }
  return getDeckContent();
}
