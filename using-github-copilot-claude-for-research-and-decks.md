# From Research to Presentation in Minutes: Using GitHub Copilot + Claude for Your Daily Work

> **TL;DR** — GitHub Copilot is no longer just an autocomplete tool for developers. With Claude as its model and the right skills installed, it can research industry topics across Reddit, X, news sources, and analyst reports — then turn that research into a polished PowerPoint deck. This walkthrough uses AI in the insurance industry as a real example.

I recently turned GitHub Copilot into a research agent — and this article is the proof. With two skills installed, I asked Copilot to research AI in insurance, then generate a 9-slide PowerPoint deck from the findings, then write this article explaining how it all worked. One session. Here is how to do the same.

---

## Why This Changes Your Daily Workflow

Most knowledge workers spend a significant chunk of their day on two tasks that feel separate but are deeply linked:

1. **Research** — scanning news, social media, analyst reports, and community discussion to understand what's happening in a space
2. **Communication** — turning that understanding into slides, documents, or briefs that others can act on

GitHub Copilot, powered by Claude, can now handle both — not as independent steps, but as a connected workflow where the research directly informs the output. The result: what used to take half a day can now take fifteen minutes.

This isn't about replacing judgment. It's about eliminating the busywork between having an insight and being able to share it.

---

## Prerequisites

### 1. GitHub Copilot with Claude

Make sure you have GitHub Copilot enabled in VS Code with the Claude model selected. In the Copilot chat panel, confirm you're using **Claude Sonnet** or **Claude Opus** (the model appears in the chat header).

### 2. Install the Skills

Skills extend Copilot's capabilities with specialised tools. You need two for this workflow:

**Step 1 — Add the Anthropic skills marketplace:**

```
plugin marketplace add anthropics/skills
```

This adds the official `anthropic-agent-skills` marketplace containing document and research tools.

**Step 2 — Install the document skills bundle** (includes the pptx skill):

```
plugin install document-skills@anthropic-agent-skills
```

**Step 3 — Install the last30days research skill:**

```
plugin install last30days
```

> **Note:** Restart GitHub Copilot after installing skills for them to load.

Once installed, these skills activate automatically based on context — you don't need to invoke them manually.

---

## Step 1: Research the Topic with `/last30days`

The `last30days` skill turns Copilot into a real-time research assistant. It searches Reddit, X/Twitter, YouTube, Hacker News, Polymarket, and the web — then synthesises findings into a grounded report with actual citations from real posts and discussions.

### How to trigger it

In the Copilot chat, type:

```
/last30days AI in the insurance industry
```

Copilot will confirm it understood your intent, then run the research across all sources. This typically takes 2–5 minutes.

### What it does under the hood

- Searches Reddit across relevant subreddits (e.g. `r/InsuranceSoftwareHub`, `r/FutureInsurance`)
- Pulls recent X/Twitter posts with engagement signals (likes, reposts)
- Searches Hacker News discussions
- Supplements with web sources (analyst reports, news, blogs)
- Weighs sources by engagement — Reddit upvotes and X likes surface the most-discussed signals, not just the loudest headlines
- Synthesises everything into a structured briefing

### Sample output (abridged)

Here's the kind of synthesised insight you get back — grounded in what people are *actually saying*, not just what press releases claim:

---

**The Adoption Divide** — Insurance is splitting into two camps in 2026: AI-first carriers scaling proven use cases vs. laggards still in "pilot mania." Per *Insurance Business Magazine*, the gap may become permanent.

**Job Cuts Are No Longer a Prediction** — Munich Re's subsidiary announced 1,000 job cuts by 2030 attributing them to AI automation, per `@CommonSens82925` on X. `@NotSriousPeople` put it plainly: *"The industry just doesn't need so many people. Insurance, at the end of the day, is not rocket science."*

**Data Governance is the Real Bottleneck** — `@JacobGorAI`: *"Insurance companies being told to get their data in order before deploying AI feels like the most honest advice in the industry right now. Everyone wants the magic output but nobody wants to do the boring work."*

**Underwriting Will Transform** — AI adoption among senior underwriters is projected to jump from 14% today to 70% within 3 years (Accenture, March 2026). 40% of a typical underwriter's time currently goes to non-core tasks AI can absorb.

**Regulatory Divergence** — The EU (EIOPA) has published AI Governance Principles for the insurance sector. The US (NAIC) is still developing its AI Systems Evaluation Tool, with the 2023 Model Bulletin as the current governing standard.

**AI as Shield AND Sword** — AI-assisted cargo theft has reached $6.6B in losses (GPS spoofing, fraud at scale). Insurers must simultaneously deploy AI for efficiency *and* defend against it as an adversarial weapon.

---

**Stats from this research run:**
- 46 Reddit threads, ~11,200 upvotes
- 30 X posts
- 15 web sources (Accenture, NAIC, Insurance Business Magazine)
- Top voices: `@JacobGorAI`, `@CommonSens82925`, `@IFAMInsurance`, `@Catchingtides`

---

## Step 2: Turn the Research into a Deck

With the research fresh in context, the pptx skill activates automatically when you ask for a presentation. Copilot already knows the content — it just needs to know the format.

### How to trigger it

Immediately after the research, say:

```
Use the pptx skill to create a deck about what you just learned
```

Because Copilot retains the research in its context window, it generates slides directly from the data — real quotes, real statistics, real source attributions — not generic boilerplate.

### What it generates

The skill uses **pptxgenjs** to produce a native `.pptx` file. For this insurance AI research, it produced a 9-slide deck:

| Slide | Content |
|-------|---------|
| 1 | Title — *AI In Insurance: What the Industry Is Saying Right Now* |
| 2 | The Adoption Divide — AI Leaders vs. Laggards (two-column comparison) |
| 3 | Job Cuts Are No Longer a Prediction — Munich Re 1,000 cuts, NAIC survey stats |
| 4 | Underwriting Is Being Restructured — stat cards + bar chart + real deployments |
| 5 | Data Governance: The Real Bottleneck — `@JacobGorAI` quote + 3 challenge cards |
| 6 | Regulatory Landscape: EU vs US — EIOPA vs NAIC comparison |
| 7 | AI: Both the Shield and the Sword — dual-use risks, $6.6B cargo theft |
| 8 | The Trillion-Dollar Opportunity — `@Kushagrat15` quote + opportunity cards |
| 9 | Key Takeaways — 5 numbered conclusions |

The skill:
- Picks a colour palette suited to the topic (teal/navy for financial services)
- Varies layouts across slides (stat cards, two-column, quote blocks, bar charts)
- Cites actual sources (`@JacobGorAI on X`, `Accenture March 2026`, `NAIC`) in footnotes
- Runs a QA pass to catch layout issues (overlapping elements, text overflow, spacing problems) and fixes them automatically

### The generated file

```
ai-in-insurance-2026.pptx  (210 KB, 9 slides)
```

Ready to open in PowerPoint, Google Slides, or Keynote.

---

## The Full Workflow at a Glance

```
/last30days AI in the insurance industry
    ↓  (2-5 min — research across Reddit, X, web)
Research briefing with citations, stats, key voices
    ↓
Use the pptx skill to create a deck from this research
    ↓  (1-2 min — generates JavaScript, runs it, QAs layout)
ai-in-insurance-2026.pptx  ✅
```

**Total time: under 10 minutes.**

---

## What This Means for Daily Work

This workflow isn't only useful for insurance research. The same pattern applies to any situation where you need to quickly understand a topic and present findings:

| Use Case | `/last30days` query | Output |
|----------|---------------------|--------|
| Competitive landscape update | `competitor X product launch` | Deck for leadership |
| Industry trend briefing | `generative AI in healthcare` | Slides for a client meeting |
| Market signals before a pitch | `Series B fintech funding 2026` | Investor-ready summary |
| Regulatory monitoring | `EU AI Act enforcement updates` | Compliance briefing |
| Weekly team roundup | `our product category --days=7` | Internal update deck |

### What Copilot handles

- Finding what people are actually discussing (not just what's in press releases)
- Surfacing high-signal voices with evidence (engagement counts, source diversity)
- Structuring information into a narrative arc
- Generating a visually consistent, well-laid-out presentation
- Running visual QA to catch and fix layout bugs

### What you still bring

- Knowing which topic is worth researching
- Judging whether the research reflects your audience's needs
- Editing the deck for your specific context and voice
- The actual meeting or decision the deck is meant to support

---

## Tips for Getting the Best Results

**Be specific with your research query.** `AI in the insurance industry` is good. `AI underwriting automation InsurTech 2026` is better if you have a narrower need.

**Use `--days=7` for breaking news.** The skill defaults to 30 days. For fast-moving situations, add `--days=7` to focus on the latest week only.

**Let the research finish before asking for the deck.** The pptx skill draws directly on the research that's in Copilot's context. Asking for the deck before the research completes means weaker slide content.

**Ask follow-up questions before generating slides.** After the research briefing, you can ask "what's the story on Munich Re's job cuts?" or "explain the EIOPA vs NAIC difference" — Copilot answers from the research without doing new searches. Use this to refine your understanding before committing to a slide structure.

**Iterate on the deck.** If a slide isn't right, describe the change: "Make slide 4 a two-column comparison instead of stat cards" or "Add a slide comparing Aviva and Skyward Specialty." The pptx skill will regenerate that section.

---

## Installing the Skills (Quick Reference)

```bash
# Add the Anthropic marketplace
plugin marketplace add anthropics/skills

# Install the document skills (pptx, docx, xlsx, pdf)
plugin install document-skills@anthropic-agent-skills

# Install the research skill
plugin install last30days

# Restart GitHub Copilot to load new skills
```

After restart, verify in Copilot chat:
- `/last30days` should auto-complete as a command
- Mentioning "slide deck" or ".pptx" should trigger the pptx skill automatically

---

## Conclusion

GitHub Copilot has crossed a threshold. It's no longer a developer-only tool — it's a daily work assistant that can research, synthesise, and produce professional outputs across the knowledge worker's core tasks.

The research-to-deck workflow demonstrated here is one example. The underlying capability — skills that chain together, share context, and produce files you can actually use — applies to writing, analysis, documentation, and communication at large.

The question isn't whether AI can do this work. It's whether you're using it.

---

*Deck generated: `ai-in-insurance-2026.pptx` — 9 slides, March 2026*
*Research sources: 46 Reddit threads · 30 X posts · 15 web sources*
*Tools: GitHub Copilot + Claude, last30days skill v2.9.5, document-skills pptx*
