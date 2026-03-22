# From Research to Boardroom Deck in Minutes: Using GitHub Copilot + Claude for Daily Work

> **TL;DR** — In one GitHub Copilot session, I researched what the insurance industry is saying about AI *right now* across Reddit, X, Accenture, and the NAIC, then turned those findings into a polished 9-slide PowerPoint deck — without leaving my IDE.

---

## Why This Changes Daily Work

Most knowledge workers spend hours on tasks like "get up to speed on an industry trend" or "turn this research into a slide deck." These tasks are repetitive and low-creativity, but they eat entire mornings.

GitHub Copilot now supports Claude, it can leverage a **skills ecosystem** that can handle both ends of this workflow:

- **Research** real-time signals from the web, Reddit, X, and industry publications
- **Create** production-quality documents (PPTX, DOCX, PDF, XLSX) from those findings

The example below walks through exactly what I did — researching AI in the insurance industry and producing a ready-to-present deck — step by step.

---

## What You'll Need

1. **GitHub Copilot** with Claude enabled in your IDE VSCode
2. **Two skills installed:**
   - `last30days` — real-time research across 10+ sources
   - `pptx` — PowerPoint generation from scratch

Install the skills from the Anthropic skills marketplace:

```
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
```

The `last30days` skill is available separately:

```
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days
```

---

## Step 1: Research with `/last30days`

Start with a single prompt in Copilot Chat:

```
use last30days skills to research using ai in insurance industry
```

That's it. The skill automatically fans out across:

| Source | What it captures |
|--------|-----------------|
| 🟠 Reddit | Community threads, upvoted discussions, top comments |
| 🔵 X/Twitter | Hot takes, practitioner posts, industry announcements |
| 📰 Web | Accenture, NAIC, Insurance Business Magazine, industry blogs |
| 🟡 Hacker News | Developer and tech-adjacent perspectives |
| 📊 Polymarket | Prediction market odds on related outcomes |

In about 3 minutes, you get a grounded briefing — not hallucinated summaries, but synthesised findings from **real posts and publications** with citations to specific handles and subreddits.

### What came back (March 2026)

The research surfaced five clear themes:

**1. The Adoption Divide is Hardening**
Insurers are splitting into two camps: AI-first carriers scaling proven use cases vs. laggards still stuck in "pilot mania." Per *Insurance Business Magazine*, analysts warn this gap may become permanent and unrecoverable.

**2. Job Cuts Are Already Happening — Not a Future Threat**
Munich Re's subsidiary announced **1,000 job cuts by 2030**, citing AI automation of traditional tasks. @NotSriousPeople on X was blunt: *"The industry just doesn't need so many people. Insurance, at the end of the day, is not rocket science."*

**3. Data Governance is the Real Bottleneck**
@JacobGorAI captured the practitioner reality exactly:
> *"Insurance companies being told to get their data in order before deploying AI feels like the most honest advice in the industry right now. Everyone wants the magic output but nobody wants to do the boring work."*

**4. Underwriting Will Transform Within 3 Years**
Accenture's March 2026 report projects AI adoption among senior underwriters jumping from **14% today to 70% within three years**. 40% of underwriter time is currently spent on non-core tasks AI can absorb. Aviva, Skyward Specialty, and Axon MGA are already deploying.

**5. AI is Both the Tool and the Threat**
Insurers must simultaneously use AI for efficiency AND defend against AI-powered adversaries. AI-assisted cargo theft via GPS spoofing has driven losses to **$6.6 billion**. The industry is pricing risk it is also creating.

### The stats block (from the research output)

```
✅ All agents reported back!
├─ 🟠 Reddit: 46 threads │ ~11,200 upvotes │ ~750 comments
├─ 🔵 X: 30 posts │ ~35 likes │ ~8 reposts
├─ 🌐 Web: 15 pages — Insurance Business Magazine, Accenture,
│          NAIC, Skyward Specialty, Broadspire
└─ 🗣️ Top voices: @JacobGorAI, @CommonSens82925, @IFAMInsurance
```

---

## Step 2: Turn Research into a Deck with `/pptx`

With the research in context, ask Copilot to build the deck:

```
Use the pptx skill to create a deck about the insurance research from last30days
```

The `pptx` skill reads the full research context and:

1. **Plans the slide structure** — 9 slides covering the key themes
2. **Chooses a design** — Ocean/teal palette fitting the insurance/finance domain; Trebuchet MS + Calibri type pairing; dark-light "sandwich" layout
3. **Writes a `build-deck.js` script** using `pptxgenjs` to generate the file
4. **Runs QA** — extracts text to verify all content, checks layout bounds, identifies overlapping elements
5. **Fixes layout issues** before final output

### The slide structure that was generated

| # | Slide | Design |
|---|-------|--------|
| 1 | **Title** — "AI IN INSURANCE" | Dark navy, left accent bar, cyan subtitle |
| 2 | **The Adoption Divide** | Two-column card: AI Leaders vs Laggards |
| 3 | **Job Cuts Are No Longer a Prediction** | Dark slide, 1,000 stat callout + @NotSriousPeople quote |
| 4 | **Underwriting Is Being Restructured** | 3 stat cards (14%→70%→40%) + bar chart + case examples |
| 5 | **Data Governance: The Real Bottleneck** | @JacobGorAI quote block + 3 challenge cards |
| 6 | **Regulatory Landscape: EU vs US** | EIOPA vs NAIC two-column comparison |
| 7 | **AI: Both the Shield and the Sword** | Dark slide, $6.6B callout, dual-risk framing |
| 8 | **The Trillion-Dollar Opportunity** | @Kushagrat15 quote + 3 opportunity cards |
| 9 | **Key Takeaways** | Dark conclusion, 5 numbered insights |

### The QA loop

The pptx skill doesn't just generate and hope — it runs a verification loop:

```bash
# Content QA: extract all text and check for placeholder remnants
python3 -m markitdown ai-in-insurance-2026.pptx | grep -iE "xxxx|lorem|ipsum"
# → No placeholder text found — clean

# Layout QA via subagent
# Identified: Slide 4 chart bottom (y:5.35) overlaps footer (y:5.20) → fix y to 3.30
# Identified: Slide 9 last row has 0.01" gap to footer → reduce spacing to 0.82"
# → Both fixed before final output
```

### The output

```
✅  ai-in-insurance-2026.pptx written successfully
```

A 210KB, 9-slide deck — fully formatted, colour-consistent, chart-inclusive — generated in one Copilot Chat session.

---

## The Full Workflow in One View

```
You (in Copilot Chat)
│
├──▶ /last30days AI in the insurance industry
│       ↓ ~3 min
│    Briefing: 5 themes, 46 Reddit threads, 30 X posts, 15 web sources
│
└──▶ Use the pptx skill to create a deck from the research
        ↓ ~5 min
     build-deck.js written + executed
        ↓
     ai-in-insurance-2026.pptx  ✅
     9 slides · polished design · QA verified
```

**Total time: under 10 minutes. Zero tab-switching. Zero manual formatting.**

---

## How to Use This in Your Daily Job

This workflow isn't a one-off demo — it's a repeatable pattern for any knowledge work task.

### Pattern 1: Industry Briefing Before a Client Call
```
/last30days [client's industry] trends 2026
```
Get a 5-minute briefing grounded in what practitioners are actually saying — not Wikipedia summaries.

### Pattern 2: Competitive Intelligence
```
/last30days [competitor name] product announcements
```
Surface recent moves, community reactions, and sentiment before your next strategy meeting.

### Pattern 3: Turn a Report into Slides
Have a long PDF or research doc? Extract the key findings and ask:
```
Read [document.pdf] and use the pptx skill to create an executive summary deck
```

### Pattern 4: Weekly Newsletter / Status Update
```
/last30days [your team's domain] news --days=7
```
Use the `--days=7` flag for a 7-day rolling window. Paste the findings into your weekly update.

### Pattern 5: Regulatory Landscape Snapshots
Compliance teams can run `/last30days [regulation area] 2026` before any review cycle to catch what's changed in the last 30 days.

---

## What Makes This Different from a Normal ChatGPT Query

| | Typical LLM Chat | GitHub Copilot + Claude Skills |
|---|---|---|
| **Data freshness** | Training cutoff (months/years old) | Live — last 30 days |
| **Citations** | Often hallucinated | Real @handles, subreddit names, publication titles |
| **Output format** | Markdown text only | Native `.pptx`, `.docx`, `.xlsx`, `.pdf` |
| **QA** | None | Automated layout and content checks |
| **Workflow** | Copy-paste to PowerPoint manually | End-to-end in one session |
| **IDE integration** | Separate tab | Right in your editor |

---

## Tips for Getting the Most Out of This

1. **Ask follow-up questions in the same session** — After `/last30days`, Copilot stays in "expert mode" on the topic. Ask it to go deeper on any finding before generating the deck.

2. **The research flows into the deck automatically** — You don't need to copy-paste findings. The pptx skill reads the full conversation context.

3. **Request specific slide structures** — e.g., *"Focus the deck on regulatory risk and workforce transformation — skip the opportunity slides"*

4. **Use `--days=7` for weekly cadence** — The default is 30 days but `--days=7` gives you a Monday morning briefing workflow.

5. **Chain skills** — Research with `last30days`, build slides with `pptx`, export a PDF summary with `pdf`, and send via your communication tool — all in one session.

---

## Resources

- **GitHub Copilot documentation:** [docs.github.com/copilot](https://docs.github.com/en/copilot)
- **last30days skill:** Covers Reddit, X, YouTube, TikTok, HN, Polymarket, Bluesky, and web
- **pptx skill:** Full PowerPoint generation, editing, and QA toolkit

---

*Generated with GitHub Copilot + Claude · Research: last30days skill (46 Reddit threads, 30 X posts, 15 web sources) · Deck: pptx skill (9 slides, QA verified) · March 2026*
