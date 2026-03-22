// AI in Insurance 2026 — Deck Generator
// Based on last30days research: Reddit, X, Accenture, NAIC, Insurance Business Magazine

const pptxgen = require("/home/ythuang/.nvm/versions/node/v22.14.0/lib/node_modules/pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "AI in Insurance: What the Industry Is Saying Right Now";
pres.author = "last30days research, March 2026";

// ── Palette ──────────────────────────────────────────────────────────────────
const C_DARK      = "1E3A5F";   // deep navy   – title / conclusion bg
const C_TEAL      = "1C7293";   // teal        – accents, headers
const C_CYAN      = "0096B4";   // bright cyan – stats, callouts
const C_LIGHT_BG  = "EEF6FA";   // soft blue-white – content slides
const C_WHITE     = "FFFFFF";
const C_DARK_TEXT = "162B3E";   // near-black on light
const C_GOLD      = "E8972A";   // amber – big numbers
const C_MUTED     = "627B8A";   // muted caption text
const C_CARD_DARK = "122740";   // dark card bg (dark slides)

// Helper – shadow objects MUST be fresh each call (pptxgenjs mutates them)
const mkShadow = () => ({ type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.12 });
const mkShadowHeavy = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.28 });

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 1 – Title
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_DARK };

  // Left accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.2, h: 5.625, fill: { color: C_TEAL }, line: { color: C_TEAL } });

  // Main title
  s.addText("AI IN INSURANCE", {
    x: 0.5, y: 1.2, w: 9, h: 1.1,
    fontSize: 52, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "left", margin: 0, charSpacing: 4,
  });

  // Subtitle
  s.addText("What the Industry Is Saying Right Now", {
    x: 0.5, y: 2.4, w: 9, h: 0.65,
    fontSize: 24, fontFace: "Calibri",
    color: C_CYAN, align: "left", margin: 0,
  });

  // Cyan rule
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.2, w: 5.5, h: 0.04, fill: { color: C_CYAN }, line: { color: C_CYAN } });

  // Meta
  s.addText("Sources: Reddit  ·  X/Twitter  ·  Accenture  ·  NAIC  ·  Insurance Business Magazine  ·  March 2026", {
    x: 0.5, y: 3.35, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Calibri", italic: true,
    color: "7A9BB5", align: "left", margin: 0,
  });

  // Tagline bottom
  s.addText("Based on last30days research — 46 Reddit threads + 30 X posts + 15 web sources", {
    x: 0.5, y: 5.15, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true,
    color: "556C80", align: "left", margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 2 – The Adoption Divide
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_LIGHT_BG };

  s.addText("The Adoption Divide", {
    x: 0.5, y: 0.28, w: 9, h: 0.65,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true,
    color: C_DARK, align: "left", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.04, fill: { color: C_TEAL }, line: { color: C_TEAL } });

  // Leaders card
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 4.25, h: 3.85, fill: { color: C_WHITE }, line: { color: C_TEAL, width: 1.5 }, shadow: mkShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 4.25, h: 0.5, fill: { color: C_TEAL }, line: { color: C_TEAL } });
  s.addText("AI LEADERS", {
    x: 0.4, y: 1.15, w: 4.25, h: 0.5,
    fontSize: 16, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "center", valign: "middle", margin: 0,
  });
  s.addText([
    { text: "Deploying AI across the full insurance value chain", options: { bullet: true, breakLine: true } },
    { text: "Automated underwriting + intelligent claims triage", options: { bullet: true, breakLine: true } },
    { text: "\"Bionic underwriting\" — human judgment + AI data processing (Skyward Specialty)", options: { bullet: true, breakLine: true } },
    { text: "Real-time risk scoring and instant policy generation", options: { bullet: true, breakLine: true } },
    { text: "First-mover advantages are widening fast", options: { bullet: true } },
  ], {
    x: 0.6, y: 1.72, w: 3.88, h: 3.1,
    fontSize: 13.5, fontFace: "Calibri", color: C_DARK_TEXT, valign: "top",
  });

  // Laggards card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.05, y: 1.15, w: 4.25, h: 3.85, fill: { color: C_WHITE }, line: { color: "B85A2A", width: 1.5 }, shadow: mkShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.05, y: 1.15, w: 4.25, h: 0.5, fill: { color: "B85A2A" }, line: { color: "B85A2A" } });
  s.addText("LAGGARDS", {
    x: 5.05, y: 1.15, w: 4.25, h: 0.5,
    fontSize: 16, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "center", valign: "middle", margin: 0,
  });
  s.addText([
    { text: "Still reliant on spreadsheets and manual workflows", options: { bullet: true, breakLine: true } },
    { text: "Stuck in endless \"pilot mania\" — no scaled deployments", options: { bullet: true, breakLine: true } },
    { text: "Data not in order before AI deployment begins", options: { bullet: true, breakLine: true } },
    { text: "No internal AI governance standards in place", options: { bullet: true, breakLine: true } },
    { text: "Risk of falling permanently and irreversibly behind", options: { bullet: true } },
  ], {
    x: 5.25, y: 1.72, w: 3.88, h: 3.1,
    fontSize: 13.5, fontFace: "Calibri", color: C_DARK_TEXT, valign: "top",
  });

  s.addText("Source: Insurance Business Magazine 2026", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: C_MUTED, margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 3 – Job Cuts Are Already Happening
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_DARK };

  s.addText("Job Cuts Are No Longer a Prediction", {
    x: 0.5, y: 0.28, w: 9, h: 0.65,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "left", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.04, fill: { color: C_CYAN }, line: { color: C_CYAN } });

  // Big stat card
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 3.8, h: 3.75, fill: { color: C_CARD_DARK }, line: { color: C_TEAL, width: 1 }, shadow: mkShadowHeavy() });
  s.addText("1,000", {
    x: 0.4, y: 1.35, w: 3.8, h: 1.3,
    fontSize: 78, fontFace: "Trebuchet MS", bold: true,
    color: C_GOLD, align: "center", valign: "middle", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.7, w: 3.2, h: 0.03, fill: { color: C_TEAL }, line: { color: C_TEAL } });
  s.addText("Announced job cuts at Munich Re subsidiary by 2030 — reason cited: AI automating traditional insurance tasks", {
    x: 0.55, y: 2.8, w: 3.55, h: 1.0,
    fontSize: 13, fontFace: "Calibri", color: "A8C8DC", align: "center",
  });

  // Quote card
  s.addShape(pres.shapes.RECTANGLE, { x: 4.55, y: 1.15, w: 4.95, h: 2.0, fill: { color: C_CARD_DARK }, line: { color: C_TEAL, width: 1 }, shadow: mkShadowHeavy() });
  s.addShape(pres.shapes.RECTANGLE, { x: 4.55, y: 1.15, w: 0.1, h: 2.0, fill: { color: C_CYAN }, line: { color: C_CYAN } });
  s.addText("\u201CThe industry just doesn\u2019t need so many people. Insurance, at the end of the day, is not rocket science.\u201D", {
    x: 4.78, y: 1.28, w: 4.55, h: 1.55,
    fontSize: 15, fontFace: "Calibri", italic: true,
    color: "D4E8F0", valign: "middle",
  });
  s.addText("— @NotSriousPeople on X", {
    x: 4.78, y: 2.9, w: 4.55, h: 0.28,
    fontSize: 11, fontFace: "Calibri", color: C_CYAN, align: "right", margin: 0,
  });

  // Second stat card
  s.addShape(pres.shapes.RECTANGLE, { x: 4.55, y: 3.3, w: 2.3, h: 1.6, fill: { color: C_CARD_DARK }, line: { color: C_TEAL, width: 1 }, shadow: mkShadowHeavy() });
  s.addText("88%", {
    x: 4.55, y: 3.3, w: 2.3, h: 0.9,
    fontSize: 50, fontFace: "Trebuchet MS", bold: true,
    color: C_GOLD, align: "center", valign: "middle", margin: 0,
  });
  s.addText("of auto insurers using or exploring AI/ML", {
    x: 4.65, y: 4.2, w: 2.1, h: 0.65,
    fontSize: 12, fontFace: "Calibri", color: "A8C8DC", align: "center",
  });

  // Third stat card
  s.addShape(pres.shapes.RECTANGLE, { x: 7.1, y: 3.3, w: 2.4, h: 1.6, fill: { color: C_CARD_DARK }, line: { color: C_TEAL, width: 1 }, shadow: mkShadowHeavy() });
  s.addText("58%", {
    x: 7.1, y: 3.3, w: 2.4, h: 0.9,
    fontSize: 50, fontFace: "Trebuchet MS", bold: true,
    color: C_GOLD, align: "center", valign: "middle", margin: 0,
  });
  s.addText("of life insurers using or exploring AI/ML", {
    x: 7.2, y: 4.2, w: 2.2, h: 0.65,
    fontSize: 12, fontFace: "Calibri", color: "A8C8DC", align: "center",
  });

  s.addText("Sources: @CommonSens82925 on X  \u00B7  NAIC Center for Insurance Policy and Research, 2025-26", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: "556C80", margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 4 – Underwriting Transformation
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_LIGHT_BG };

  s.addText("Underwriting Is Being Restructured", {
    x: 0.5, y: 0.28, w: 9, h: 0.65,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true,
    color: C_DARK, align: "left", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.04, fill: { color: C_TEAL }, line: { color: C_TEAL } });

  // 3 stat cards
  const stats = [
    { val: "14%",  label: "Senior underwriters\nusing AI today", accent: C_TEAL },
    { val: "70%",  label: "Projected adoption\nwithin 3 years",  accent: "0D8A7A" },
    { val: "40%",  label: "Underwriter time on\nnon-core tasks AI\ncan absorb", accent: "1A6E8A" },
  ];
  stats.forEach((st, i) => {
    const x = 0.4 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.15, w: 2.85, h: 2.4, fill: { color: C_WHITE }, line: { color: st.accent, width: 1.5 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.15, w: 2.85, h: 0.07, fill: { color: st.accent }, line: { color: st.accent } });
    s.addText(st.val, {
      x, y: 1.22, w: 2.85, h: 1.15,
      fontSize: 60, fontFace: "Trebuchet MS", bold: true,
      color: st.accent, align: "center", valign: "middle", margin: 0,
    });
    s.addText(st.label, {
      x: x + 0.1, y: 2.42, w: 2.65, h: 1.0,
      fontSize: 13, fontFace: "Calibri", color: C_DARK_TEXT, align: "center", valign: "top",
    });
  });

  // Chart – adoption trajectory
  s.addChart(pres.charts.BAR, [
    {
      name: "AI Adoption %",
      labels: ["Today", "Yr 1", "Yr 2", "Yr 3"],
      values: [14, 32, 54, 70],
    },
  ], {
    x: 0.4, y: 3.30, w: 4.2, h: 1.7,
    barDir: "col",
    chartColors: [C_TEAL],
    chartArea: { fill: { color: C_WHITE }, roundedCorners: false },
    catAxisLabelColor: C_DARK_TEXT,
    valAxisLabelColor: C_MUTED,
    valGridLine: { color: "D0E8F0", size: 0.5 },
    catGridLine: { style: "none" },
    showValue: true,
    dataLabelColor: C_DARK_TEXT,
    showLegend: false,
    showTitle: true,
    title: "Projected AI Adoption — Senior Underwriters (%)",
    titleFontSize: 11,
    titleColor: C_DARK_TEXT,
    valAxisMaxVal: 80,
  });

  // Case examples
  s.addText([
    { text: "Aviva ", options: { bold: true, color: C_TEAL } },
    { text: "— AI underwriting summarisation for critical illness insurance (industry first)", options: { color: C_DARK_TEXT } },
    { text: "", options: { breakLine: true } },
    { text: "Skyward Specialty ", options: { bold: true, color: C_TEAL } },
    { text: "— \"Bionic underwriting\": human + AI data processing across the full cycle", options: { color: C_DARK_TEXT } },
    { text: "", options: { breakLine: true } },
    { text: "Axon MGA ", options: { bold: true, color: C_TEAL } },
    { text: "— Proprietary automation for submission intake, reducing broker friction significantly", options: { color: C_DARK_TEXT } },
  ], {
    x: 4.8, y: 3.30, w: 4.65, h: 1.7,
    fontSize: 12.5, fontFace: "Calibri", valign: "top",
  });

  s.addText("Source: Accenture Underwriting Report, March 2026  \u00B7  @IFAMInsurance on X", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: C_MUTED, margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 5 – Data Governance: The Real Bottleneck
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: "F5F9FC" };

  s.addText("Data Governance: The Real Bottleneck", {
    x: 0.5, y: 0.28, w: 9, h: 0.65,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true,
    color: C_DARK, align: "left", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.04, fill: { color: C_TEAL }, line: { color: C_TEAL } });

  // Quote block
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 9.2, h: 1.75, fill: { color: "E4F2F8" }, line: { color: C_TEAL, width: 1 }, shadow: mkShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 0.1, h: 1.75, fill: { color: C_CYAN }, line: { color: C_CYAN } });
  s.addText(
    "\u201CInsurance companies being told to get their data in order before deploying AI feels like the most honest advice in the industry right now.\nEveryone wants the magic output but nobody wants to do the boring work.\u201D",
    {
      x: 0.65, y: 1.25, w: 8.75, h: 1.4,
      fontSize: 15, fontFace: "Calibri", italic: true,
      color: C_DARK_TEXT, valign: "middle",
    }
  );
  s.addText("— @JacobGorAI on X, March 22 2026", {
    x: 0.65, y: 2.72, w: 8.75, h: 0.26,
    fontSize: 11, fontFace: "Calibri", color: C_TEAL, align: "right", margin: 0,
  });

  // 3 challenge cards
  const challenges = [
    {
      title: "Audit Trails",
      body: "Regulated insurers lack client-side audit trail infrastructure required for AI compliance in most jurisdictions",
    },
    {
      title: "Data Silos",
      body: "Legacy systems create fragmented data that undermines AI model training accuracy and generalisation",
    },
    {
      title: "Governance Gaps",
      body: "No standardised internal policies for AI model accountability, auditability, or explainability across divisions",
    },
  ];
  challenges.forEach((c, i) => {
    const x = 0.4 + i * 3.2;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.15, w: 3.0, h: 1.9, fill: { color: C_WHITE }, line: { color: "C0D8E4", width: 1 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.15, w: 3.0, h: 0.45, fill: { color: C_TEAL }, line: { color: C_TEAL } });
    s.addText(c.title, {
      x, y: 3.15, w: 3.0, h: 0.45,
      fontSize: 14, fontFace: "Trebuchet MS", bold: true,
      color: C_WHITE, align: "center", valign: "middle", margin: 0,
    });
    s.addText(c.body, {
      x: x + 0.1, y: 3.65, w: 2.8, h: 1.33,
      fontSize: 12.5, fontFace: "Calibri", color: C_DARK_TEXT, align: "left", valign: "top",
    });
  });

  s.addText("Sources: @JacobGorAI on X  \u00B7  @inababi on X", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: C_MUTED, margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 6 – Regulatory Landscape: EU vs US
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_LIGHT_BG };

  s.addText("Regulatory Landscape: EU vs US", {
    x: 0.5, y: 0.28, w: 9, h: 0.65,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true,
    color: C_DARK, align: "left", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.04, fill: { color: C_TEAL }, line: { color: C_TEAL } });

  // EU card
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 4.25, h: 4.05, fill: { color: C_WHITE }, line: { color: C_TEAL, width: 1.5 }, shadow: mkShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 4.25, h: 0.5, fill: { color: C_TEAL }, line: { color: C_TEAL } });
  s.addText("EU — EIOPA", {
    x: 0.4, y: 1.15, w: 4.25, h: 0.5,
    fontSize: 17, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "center", valign: "middle", margin: 0,
  });
  s.addText("Moving Faster", {
    x: 0.4, y: 1.72, w: 4.25, h: 0.38,
    fontSize: 13, fontFace: "Trebuchet MS", bold: true,
    color: "0D8A7A", align: "center",
  });
  s.addText([
    { text: "Published AI Governance Principles for European Insurance sector", options: { bullet: true, breakLine: true } },
    { text: "Framework covers ethical, trustworthy, and responsible AI requirements", options: { bullet: true, breakLine: true } },
    { text: "Enforceable standards emerging within EU AI Act framework", options: { bullet: true, breakLine: true } },
    { text: "Creates cross-border consistency for multinational insurers", options: { bullet: true, breakLine: true } },
    { text: "Hallucination risk in generative AI flagged as specific concern", options: { bullet: true } },
  ], {
    x: 0.6, y: 2.15, w: 3.9, h: 3.0,
    fontSize: 13, fontFace: "Calibri", color: C_DARK_TEXT, valign: "top",
  });

  // US card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.05, y: 1.15, w: 4.25, h: 4.05, fill: { color: C_WHITE }, line: { color: "B85A2A", width: 1.5 }, shadow: mkShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.05, y: 1.15, w: 4.25, h: 0.5, fill: { color: "B85A2A" }, line: { color: "B85A2A" } });
  s.addText("US — NAIC", {
    x: 5.05, y: 1.15, w: 4.25, h: 0.5,
    fontSize: 17, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "center", valign: "middle", margin: 0,
  });
  s.addText("Still Developing", {
    x: 5.05, y: 1.72, w: 4.25, h: 0.38,
    fontSize: 13, fontFace: "Trebuchet MS", bold: true,
    color: "B85A2A", align: "center",
  });
  s.addText([
    { text: "AI Systems Evaluation Tool in development (Feb–Mar 2026 working groups)", options: { bullet: true, breakLine: true } },
    { text: "2023 Model Bulletin still the primary governing standard today", options: { bullet: true, breakLine: true } },
    { text: "Formal enforceable AI regulation remains nascent", options: { bullet: true, breakLine: true } },
    { text: "State-level inconsistency creates compliance complexity for carriers", options: { bullet: true, breakLine: true } },
    { text: "Cybersecurity breach flagged as #1 AI-related concern in NAIC survey", options: { bullet: true } },
  ], {
    x: 5.25, y: 2.15, w: 3.9, h: 3.0,
    fontSize: 13, fontFace: "Calibri", color: C_DARK_TEXT, valign: "top",
  });

  s.addText("Sources: @Catchingtides on X (EIOPA)  \u00B7  NAIC Big Data and AI Working Group, March 2026", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: C_MUTED, margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 7 – AI: Shield AND Sword
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_DARK };

  s.addText("AI: Both the Shield and the Sword", {
    x: 0.5, y: 0.28, w: 9, h: 0.65,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "left", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.04, fill: { color: C_CYAN }, line: { color: C_CYAN } });

  // Shield (left)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 4.25, h: 3.85, fill: { color: C_CARD_DARK }, line: { color: "0D9488", width: 1 }, shadow: mkShadowHeavy() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 4.25, h: 0.5, fill: { color: "0D9488" }, line: { color: "0D9488" } });
  s.addText("AI AS EFFICIENCY TOOL", {
    x: 0.4, y: 1.15, w: 4.25, h: 0.5,
    fontSize: 15, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "center", valign: "middle", margin: 0,
  });
  s.addText([
    { text: "Automated underwriting & intelligent claims triage", options: { bullet: true, breakLine: true } },
    { text: "Instant risk scoring and frictionless policy generation", options: { bullet: true, breakLine: true } },
    { text: "AI call answering for insurance queries across verticals", options: { bullet: true, breakLine: true } },
    { text: "AI-driven yield insurance and autonomous underwriting agents", options: { bullet: true, breakLine: true } },
    { text: "CVS + Google launched AI health platform independent of insurance coverage", options: { bullet: true } },
  ], {
    x: 0.6, y: 1.72, w: 3.9, h: 3.1,
    fontSize: 13, fontFace: "Calibri", color: "A8D8E0", valign: "top",
  });

  // Sword (right)
  s.addShape(pres.shapes.RECTANGLE, { x: 5.05, y: 1.15, w: 4.25, h: 3.85, fill: { color: "1A0C08" }, line: { color: "B85A2A", width: 1 }, shadow: mkShadowHeavy() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.05, y: 1.15, w: 4.25, h: 0.5, fill: { color: "B85A2A" }, line: { color: "B85A2A" } });
  s.addText("AI AS ADVERSARIAL WEAPON", {
    x: 5.05, y: 1.15, w: 4.25, h: 0.5,
    fontSize: 15, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "center", valign: "middle", margin: 0,
  });
  s.addText("$6.6B", {
    x: 5.05, y: 1.72, w: 4.25, h: 1.0,
    fontSize: 56, fontFace: "Trebuchet MS", bold: true,
    color: C_GOLD, align: "center", valign: "middle", margin: 0,
  });
  s.addText("Cargo theft losses driven by AI-assisted GPS spoofing & fraud", {
    x: 5.2, y: 2.72, w: 3.95, h: 0.5,
    fontSize: 12, fontFace: "Calibri", color: "E8B0A0", align: "center",
  });
  s.addText([
    { text: "AI-enhanced cyber attacks targeting insurer infrastructure", options: { bullet: true, breakLine: true } },
    { text: "Generative AI powering insurance fraud at industrial scale", options: { bullet: true, breakLine: true } },
    { text: "New liability & coverage design challenges with no precedent", options: { bullet: true } },
  ], {
    x: 5.2, y: 3.35, w: 3.95, h: 1.5,
    fontSize: 13, fontFace: "Calibri", color: "E8B0A0", valign: "top",
  });

  s.addText("Source: Insurance Business Magazine, March 2026", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: "556C80", margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 8 – The Trillion-Dollar Opportunity
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_LIGHT_BG };

  s.addText("The Trillion-Dollar Opportunity", {
    x: 0.5, y: 0.28, w: 9, h: 0.65,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true,
    color: C_DARK, align: "left", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 0.04, fill: { color: C_TEAL }, line: { color: C_TEAL } });

  // Quote
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 9.2, h: 1.6, fill: { color: "E4F2F8" }, line: { color: C_TEAL, width: 1 }, shadow: mkShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.15, w: 0.1, h: 1.6, fill: { color: C_CYAN }, line: { color: C_CYAN } });
  s.addText(
    "\u201CThe next trillion-dollar company won\u2019t be an AI company. It\u2019ll be a company that uses AI better than everyone else in a boring industry. Logistics. Agriculture. Insurance. Boring + AI = big money.\u201D",
    {
      x: 0.65, y: 1.25, w: 8.75, h: 1.25,
      fontSize: 15, fontFace: "Calibri", italic: true,
      color: C_DARK_TEXT, valign: "middle",
    }
  );
  s.addText("— @Kushagrat15 on X", {
    x: 0.65, y: 2.6, w: 8.75, h: 0.25,
    fontSize: 11, fontFace: "Calibri", color: C_TEAL, align: "right", margin: 0,
  });

  // 3 opportunity cards
  const opps = [
    {
      title: "AI-First MGAs",
      body: "MGAs embedding AI across the full value chain gain structural advantages over legacy carriers who can't move as fast",
    },
    {
      title: "Health AI Platforms",
      body: "CVS + Google launched AI health platform accessible regardless of insurance — new distribution model disrupting brokers",
    },
    {
      title: "Capital Markets Convergence",
      body: "AI enabling new financial structures bridging insurance risk and investment capital; ILS markets being transformed",
    },
  ];
  opps.forEach((o, i) => {
    const x = 0.4 + i * 3.2;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.05, w: 3.0, h: 2.15, fill: { color: C_WHITE }, line: { color: C_TEAL, width: 1.5 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.05, w: 3.0, h: 0.47, fill: { color: C_TEAL }, line: { color: C_TEAL } });
    s.addText(o.title, {
      x, y: 3.05, w: 3.0, h: 0.47,
      fontSize: 13, fontFace: "Trebuchet MS", bold: true,
      color: C_WHITE, align: "center", valign: "middle", margin: 0,
    });
    s.addText(o.body, {
      x: x + 0.1, y: 3.57, w: 2.8, h: 1.55,
      fontSize: 12.5, fontFace: "Calibri", color: C_DARK_TEXT, align: "left", valign: "top",
    });
  });

  s.addText("Sources: @Kushagrat15 on X  \u00B7  r/InterstellarKinetics  \u00B7  r/FutureInsurance", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: C_MUTED, margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 9 – Key Takeaways (Conclusion)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C_DARK };

  // Left accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.2, h: 5.625, fill: { color: C_TEAL }, line: { color: C_TEAL } });

  s.addText("Key Takeaways", {
    x: 0.5, y: 0.22, w: 9, h: 0.65,
    fontSize: 38, fontFace: "Trebuchet MS", bold: true,
    color: C_WHITE, align: "left", margin: 0, charSpacing: 2,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.88, w: 9, h: 0.04, fill: { color: C_CYAN }, line: { color: C_CYAN } });

  const takeaways = [
    { n: "01", text: "The adoption divide is permanent — AI leaders are pulling ahead and the window for catching up is closing fast" },
    { n: "02", text: "Job displacement is already underway — Munich Re's 1,000 cuts signal the industry is past debate" },
    { n: "03", text: "Data governance comes before AI — clean, governed data is the unglamorous prerequisite every insurer needs" },
    { n: "04", text: "Underwriting will transform — 14% to 70% AI adoption among senior underwriters within 3 years (Accenture)" },
    { n: "05", text: "AI is the shield AND the sword — insurers must build efficiency AND defend against AI-powered adversaries simultaneously" },
  ];

  takeaways.forEach((t, i) => {
    const y = 1.05 + i * 0.82;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.62, h: 0.62, fill: { color: C_TEAL }, line: { color: C_TEAL } });
    s.addText(t.n, {
      x: 0.5, y, w: 0.62, h: 0.62,
      fontSize: 18, fontFace: "Trebuchet MS", bold: true,
      color: C_WHITE, align: "center", valign: "middle", margin: 0,
    });
    s.addText(t.text, {
      x: 1.28, y: y + 0.06, w: 8.15, h: 0.56,
      fontSize: 14, fontFace: "Calibri",
      color: "C8DCF0", align: "left", valign: "middle",
    });
  });

  s.addText("Research: last30days skill  \u00B7  Reddit  \u00B7  X  \u00B7  Accenture  \u00B7  NAIC  \u00B7  Insurance Business Magazine  \u00B7  March 2026", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", italic: true, color: "556C80", margin: 0,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Write
// ─────────────────────────────────────────────────────────────────────────────
const fs = require("fs");
pres.write("nodebuffer")
  .then((buf) => {
    fs.writeFileSync("/home/ythuang/workspace/copilot-skills/ai-in-insurance-2026.pptx", buf);
    process.stdout.write("\u2705  ai-in-insurance-2026.pptx written successfully\n");
    process.exit(0);
  })
  .catch((err) => {
    process.stderr.write("ERROR: " + err.message + "\n");
    process.exit(1);
  });
