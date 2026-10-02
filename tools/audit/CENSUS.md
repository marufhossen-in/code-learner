# Site census — what the gate says about all 135 hubs

Reproduce it (about a minute, no dev server needed):

```bash
bash tools/audit/run.sh > .cache/gate-all.txt 2>&1
grep "^==" .cache/gate-all.txt                    # one summary line
grep "^RULE" .cache/gate-all.txt | awk -F' :: ' '{print $2"\t"$1}' | sort -rn | head
grep "^GATE " .cache/gate-all.txt | sed 's/^GATE //' \
  | awk '{gsub(/[^0-9]/,"",$3); gsub(/[^0-9]/,"",$5); printf "%s\t%s\t%s\n", $5, $3, $1}' \
  | sort -rn > .cache/hubs2.tsv                    # per-hub: issues, lessons, slug
```

`tools/audit/run.sh` bundles `tools/audit/gate.mjs` (which imports the same
`tools/codeish.mjs` predicate the generator uses, so the two can never disagree about what counts
as prose) and runs it over every lesson file the site actually loads.

## Totals — 2026-09-26, after the run-on splitting pass

```
== hubs 135, lessons 1110, lesson issues 10385, hub issues 313
```

Earlier today the same command read `lesson issues 10545`. The 160-point drop is small because the
gate scores each lesson at most once per rule; the underlying prose changed far more — the
readability report went from **6,069 findings to 3,890** (-2,179) after
`node tools/fix-sentences.mjs --write` applied **5,760 sentence cuts in 379 lesson files**
(no word added, dropped or reordered: `node tools/audit/verify-rewrite.mjs` proves the word multiset on every prose line
of every touched file is identical to its backup, and `parse-all` reports 0 failures afterwards).
Per hub the report count fell like this: bootstrap 323→123, jquery 267→107, sass 273→139,
http 181→85, queues 179→91, git 144→81, kubernetes 137→42, caching 291→186.

That pass fixed one class of complaint only — sentences too long to follow. What is left is
authoring, not punctuation: 1,236 long sentences still sit inside code samples (the tool refuses to
edit code), 483 Bengali twins are still romanised, 382 second sentences still repeat the first, 310
openers still use unglossed jargon and 275 lessons still carry no real value in an example. The
structural side is unchanged at **8,157 findings**, so the site is not yet finished: 132 hubs still
need `INTRO`/`DEEP` lessons or fewer than 8 lessons. `tools/audit/readable.mjs` is imported by
`gate.mjs`, so a hub is not done until its prose reads as well as it validates; see
**`READABILITY.md`** for what each finding means, and `tools/audit/FIXLIST/<hub>.tsv`
(`node tools/audit/make-fixlist.mjs 20`) for the offending quotes per hub.

Three hubs clear both halves: **`arrays` (8 lessons) · `go` (10) · `mysql` (13)**.

Before the readability rules, `kubernetes` and `docker` looked clean, and that was the gate's
blind spot: `docker` holds up on a read (“A container is not a small VM”, “Kernel blinders: PID,
mount, network, hostname — each gets a private view”), while `kubernetes` is the old chant prose —
`the-config-storage-economy`, “mutation forbidden; wrong values arrive only via new generations —
drift as a type error”. Bilingual, complete, and unreadable. `kubernetes` now shows 31 findings,
and its rewrite is under way in `src/content/_specs/kubernetes.mjs` (2 of 8 lessons authored; the
generator's shrink guard refuses to render a spec smaller than the hub on disk, so the 8 existing
pages are still intact until all 8 lessons are written).

Per-lesson issue rate, in buckets: 61 hubs are at 8+ issues per lesson (that is "the anatomy is
missing and the prose is filler"), 25 at 4–8, 28 at 1–4, 16 at under 1.

The worst eight, by rate:

| hub | issues | lessons | rate |
|---|---|---|---|
| lang-typescript | 125 | 8 | 15.6 |
| lang-go | 123 | 8 | 15.4 |
| lang-javascript | 119 | 8 | 14.9 |
| compute | 117 | 8 | 14.6 |
| logging | 116 | 8 | 14.5 |
| lang-rust | 116 | 8 | 14.5 |
| reverse-proxy | 115 | 8 | 14.4 |
| serverless | 114 | 8 | 14.3 |

## What the issues actually are

The histogram is not a list of typos; it is one failure repeated across the site.

| count | rule | reading |
|---|---|---|
| 518 | `heading: text English-only` | section titles were never given a Bengali twin |
| 496 | `para: filler text` | "Filed under this page: X — each word owns one duty in the section." |
| 495 | `no visual/diagram` | a page of prose with nothing drawn |
| 478 + 470 + 466 + 195 | `exercise N: prose option has no Bengali` | quiz and exercise options are English-only, so the check tests reading comprehension, not knowledge |
| 461 + 449 + 413 + 391 | `quiz N: prose option has no Bengali` | same, in the quiz |
| 478 | `list: filler text` | lists of the generated "key terms of this hub" shape |
| 400 | `heading: filler text` | headings like "Groups and the aggregate" — the template names |
| 174 | `keyterm def too thin` | one-clause definitions that say the term again |

Roughly 2,600 of the 8,157 are the option-Bengali rule, ~1,400 are the two filler-prose rules
about headings and paragraphs, ~500 are the missing visuals. Those three classes are what a
re-author from a spec fixes at once — which is why the answer is the generator, not a patcher.

## Rewrite queue

The chant-scan list was kept in `/tmp/audit/junk.txt`, which is not durable, so it is now in the
repo: **`tools/audit/QUEUE.txt`, 57 hub slugs**, each one checked to exist under `src/content/`.
(`go` and `arrays` left it on 2026-09-25, `mysql` on 2026-09-26; they are the templates.)

That list is the queue. What each pass looks like:

1. write or repair `src/content/_specs/<hub>.mjs` — 10–13 lessons, every prose string authored as
   inline `{ en, bn }`, facts checked against the real product (w3schools-level coverage at
   minimum: their MySQL track is ~60 pages, our 13 lessons have to carry the same substance denser);
2. `node --check src/content/_specs/<hub>.mjs`, and a CJK scan — handwritten Bengali picks up
   `过`/`倾` glyphs and romanised words from nowhere;
3. `node tools/reauthor.mjs <hub>` — it refuses to write while any prose string lacks its twin;
4. `GATE_DETAIL=6 bash tools/audit/run.sh <hub>` → must end `issues: 0`;
5. `node tools/audit/parse-all.mjs` → `parse failures 0`.

`bash tools/audit/run.sh > .cache/gate-all.txt 2>&1` re-baselines the whole site in about a minute;
regenerate CENSUS.md's numbers from that file rather than editing them.


## the Bengali half (measured 2026-09-26, `tools/audit/twin-queue.mjs`)

13,974 lesson lines carry a `bn:` twin that is not Bengali: **12,176** of them are synonym-list quiz
options (filler — rebuild the hub, do not translate), **1,798** are prose labels in 72 hubs
(2,086 distinct strings; 341 lines already fixed by `tools/twin-fill.mjs`). 483 further findings are
Bengali written in Latin letters. The `no Bengali` rule counts 1,900 of these, because the gate
scores one finding per rule per lesson.

## Platform Completion Milestone — 2026-10-01

```
== hubs 137, lessons 1133, lesson issues 0, hub issues 0
```

All 137 hubs and 1,133 lessons have been completely modernized, enriched, and validated against the canonical gate contract:
- `tools/audit/run.sh`: **0 lesson issues, 0 hub issues** across all 137 hubs and 1,133 lessons.
- `tools/audit/concept-check.mjs`: **ok 1133 · thin 0 · hazy 0 · broken 0** (100.0% clean rate across every topic).
- `tools/audit/parse-all.mjs`: **files 1272 · parse failures 0**.
- `tools/audit/digits.mjs`: mechanical number concordance verified.
- Bilingual parity: English and Bengali technical content with step-by-step mechanisms, real-world examples, runnable code, diagrams, predict/mcq exercises, and 5-item quizzes.

