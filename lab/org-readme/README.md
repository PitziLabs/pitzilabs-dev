# org-readme — GitHub org-profile README

Exploration for the **PitziLabs GitHub organization profile** README — the card
that renders at `github.com/PitziLabs`.

> **Different deliverable.** This does **not** ship to the landing site. Its home
> is **`pitzi-labs/.github` → `profile/README.md`**. It lives in `lab/` because
> this is where Chris is running one design process for everything; promote it to
> the `.github` repo, don't wire it into `src/`.

Source: Claude Design project `acecb24c-d3f5-4db2-9410-ff21008091f2` ("Pitzi
Labs"), same project the landing site was designed in.

## Two chooser harnesses, six variants

Open either HTML locally to compare (`python3 -m http.server` from the repo root,
then browse to the file — they fetch the markdown at runtime):

| Harness | How it renders | Variants |
|---------|----------------|----------|
| `directions.html` | Plain CSS + `marked`, three columns, GitHub-dark. Uses the **live tokens** (`../../public/design-system/colors_and_type.css`). | `readme-variants/{terminal,badges,editorial}/README.md` |
| `github-readme.html` | React + Babel + a `DesignCanvas` pan/zoom framework (`design-canvas.jsx`). | `github/readme-{runbook,banner,dashboard}.md` (+ `github/assets/banner.svg`) |

The six candidate READMEs:

- **terminal** — ASCII wordmark, `<pl:>` console blocks, minimal.
- **badges** — centered, shields.io badge wall.
- **editorial** — prose + a "what I do" table.
- **runbook** — console `pl whoami` framing + an operate table.
- **banner** — custom navy `banner.svg` header + categorized badge groups. **← this variant is what's currently published as the org profile** (it matches the live `pitzi-labs/.github` profile/README.md).
- **dashboard** — status-board table + toolchain + pre-apply guardrails.

> Two harnesses × overlapping variants is more than will ship. Narrowing to one
> harness + one variant is the next step.

## Reconciliation status (vs the live site)

Brand **facts** have been corrected to match the live site (it's authoritative):

- ✅ Tagline `business → need` ("Production that shows up when the need does.")
- ✅ Founding `EST. 1999 → EST. 1997` (incl. `since-1999` badges, banner.svg)
- ✅ Email `christopher@pitzilabs.com → chris@pitzilabs.dev`

**Resolved — voice decided (2026-06-21):**

- ✅ **Voice — "we" (collective).** The org card speaks as a collective Labs
  ("**we** build / operate", "What we do"), *not* first-person singular.
  Rationale: "Pitzi Labs" is a placeholder and a full rebrand (swapping the
  "Pitzi" wordmark) is coming — the brand is heading to a collective identity.
  The published `pitzi-labs/.github` → `profile/README.md` was aligned to "we"
  (its hero line had drifted to first-person singular) and is the **source of
  truth**. ⚠️ The local variants here are now **stale** — e.g.
  `readme-banner.md` still carries the pre-rework "Twenty-five years / bridging
  into" copy and a `# PitziLabs` heading. Re-pull or retire them at the rebrand;
  don't treat them as current. The live landing site is the remaining
  first-person outlier — reconcile to "we" at the rebrand.

**Still open — a copy call for Chris (not auto-changed):**

- ⚠️ **Tenure phrasing.** Live pairs `EST. 1997` with "**25+ years** / Twenty-five
  years". The drafts say "Twenty-five years" — consistent with live, but worth a
  glance at the rebrand.

## Promote

When a variant + harness is chosen and the voice pass is done: copy the winning
`README.md` (and `banner.svg` if used) into the **`pitzi-labs/.github`** repo at
`profile/README.md`, and retire the others here.
