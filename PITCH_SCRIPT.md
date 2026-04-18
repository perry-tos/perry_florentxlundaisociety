# Perry — Pitch Script

## 0:00–1:00 — The problem

SPEAKER 1

Earlier this year, Stripe — the company that handles payments for most tech startups — quietly brought in two new partners to help process your customers' data. Overnight, your users' information started flowing through two companies you'd never heard of.

The change was public. It was announced. It was on Stripe's legal terms page.

Which no engineer at a fifteen-person B2B SaaS has any reason to visit. The API didn't change. The integration didn't change. The code kept running. And months later, the privacy contract you signed with your own customers is still broken — and you have no idea.

This isn't one bad vendor. A small company today runs on ten-plus third-party APIs — OpenAI, Stripe, AWS, Plaid, Twilio, Shopify, GitHub — and every one of them publishes policy updates on legal surfaces that engineers structurally do not monitor.

**The information isn't hidden. It just never reaches you.**

A small team can't possibly read every page, every week, for every vendor. And doing it by hand burns the engineering hours you actually need to ship product.

**"47% of engineering teams only discover a ToS violation once it's already in production. The median notice period before providers enforce new clauses is 14 days."**

One silent edit on a page nobody reads can cost you two million dollars and a weekend.

---

## 1:00–1:30 — What Perry is

SPEAKER 1

That's why we built **Perry**.

Perry closes the gap between where vendors publish policy changes and where engineers actually live.

**Your vendors write ToS updates for lawyers. Perry writes them for you.**

Four things matter:

- **Translation.** We read the legalese so your engineers don't have to. Every advisory is plain language with a recommendation.
- **Targeting.** We only alert on changes that affect code you've actually shipped. Perry checks your package manifests locally and stays quiet on everything else.
- **Addressability.** Advisories arrive where engineers already live — as a GitHub Issue in your own repo. Not another dashboard, not another email.
- **No barrier to adopt.** Perry never sees your code. No source code, dependency graph, or architecture details leave your environment. No security review, no DPA, no vendor onboarding.

Installing Perry is a free call option. If nothing happens, you lose nothing. If a vendor changes terms under you, you catch it early. The ask isn't *"agree this is acute"* — it's *"install a thing that costs you nothing and insures you against problems you aren't sure you have."*

Perry is built for the CTO of a five-to-fifty engineer B2B SaaS or AI-native company — the teams without dedicated legal or compliance staff, running on the most third-party APIs, with the least margin for a surprise clause.

---

## 1:30–3:00 — Demo walkthrough

SPEAKER 2

So imagine we're that fifteen-person AI startup. We use OpenAI for our product, Stripe for payments, AWS for everything else. Let's see what happens the moment OpenAI quietly edits a clause.

- Open the Perry dashboard
- Click **Start Demo Mode** — "God Mode"
- Watch the pipeline light up, step by step:
  1. **Crawler** snapshots the OpenAI usage policies page. The SHA-256 hash no longer matches the last snapshot — a change just happened.
  2. **Brain** pulls the diff, runs it through GPT-4o with a structured Instructor schema, and produces a typed advisory in plain language: *"Usage policy now prohibits automated high-stakes decisions in legal, medical, and financial workflows without human review. Affects any code path using OpenAI for autonomous decisioning."*
  3. **Dispatcher** signs an RS256 JWT, mints a scoped GitHub installation token for our org, and broadcasts — only to customers whose manifest actually lists OpenAI.
  4. **Edge Bot** — running inside our own GitHub Action — scans the manifest, finds the affected files, and opens an Issue in our repo.
- Switch to the customer's GitHub tab. The Issue is already there. Plain-language summary, affected files, suggested remediation.

End-to-end: under ten seconds. Zero code left our servers. The engineer on call knows before the enforcement window even begins — from the one place they already open every day.

That's Perry.
