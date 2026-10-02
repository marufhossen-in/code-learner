# Can a beginner actually read this? — the readability rules

## Why this file exists

The content gate checked whether a lesson was *complete*: every string bilingual, a worked example,
a visual, an answer key that matches the code. A page could satisfy all of it and still teach
nothing, because the old generator wrote definitions as riddles:

> "A ledger is a ledger of generations." — mutation forbidden; wrong values arrive only via new
> generations — drift as a type error."

Nothing in that is untranslated or missing. It is *unreadable*: a word explained with the same word,
a mechanism replaced by a metaphor, a sentence 45 words long. `CENSUS.md` admitted the gate was
blind to this; this file is the part it was blind to, now measured as rules.

## What the measurement said (full site, 2026-09-26)

Run: `bash tools/audit/run.sh > .cache/gate-all.txt 2>&1` → `== hubs 135, lessons 1110, lesson
issues 10545, hub issues 313`. The readability rules added 2,388 lesson-level findings on top of
the structural 8,157:

| findings | rule | what it means for a reader |
|---|---|---|
| 386 | `sentence too long to follow` | one sentence over 38 words: the reader loses the subject |
| 310 | `jargon in the opener with no gloss` | the first paragraph leans on a term the page never explains |
| 275 | `no example with a real value on the page` | nothing was ever run, printed or counted |
| 263 | `the second sentence repeats the first` | 5+ content words shared — the prose is stalling, not advancing |
| 248 | `romanised Bengali left in the twin` | text like `কােj-reference` / `দেখতe-somo` — neither language |
| 230 | `opener is too dense to start from` | more than 6 sentences or 24 words per sentence before the first example |
| 180 | `keyterm definition too thin to learn from` | under 4 words, so it renames instead of explaining |
| 74 | `one word carries the whole paragraph` | a content word 5+ times at high density |
| 42 | `one phrase repeated instead of explained` | a phrase 6+ times |
| 35 | `Bengali twin written mostly in English` | the "Bengali" line is English with a Bengali suffix |
| 25 | `metaphor where the mechanism belongs` | ledger / parish / court / choir doing the explaining |
| 23 | `same Bengali word repeated` | 6+ times in one line |
| 21 | `opener speaks to nobody` | no reader, no code, no number in the first paragraph |
| 13 | `the same clause pasted twice` | an identical 6-word run appearing twice |

Per hub, the worst by readability findings: `bootstrap 323`, `caching 291`, `sass 273`,
`jquery 267`, `javascript 200`, `http 181`, `queues 179`, `security-fundamentals 173`,
`python 147`, `git 144`, `css 144`, `kubernetes 137`, `dom 125`, `html 115`.

## What is now enforced, not advised

* `tools/reauthor.mjs` **refuses to render** a lesson that does not open in plain words. Either the
  spec's first block is a `para`, or the lesson carries `lead: { en, bn }` — two or three sentences
  naming the situation the reader is in. Missing leads are listed in one batch:

  ```
  LEAD MISSING mysql: 11 lessons open with code, a table or a term list instead of plain words…
    - mysql/keys-and-constraints
  ```
* `tools/audit/readable.mjs` holds the rules above; `gate.mjs` imports it, so every readability
  finding counts as an issue and a hub is not done at 0 until its prose reads.
* Hub-level progression is a rule too: a hub needs a beginner entry lesson (intro / what is / your
  first), something past the basics (internals / tuning / production / concurrency / collector), and
  at least 8 lessons before it can claim a topic.
* Nothing here is a style linter guessing at taste. Each rule reports the quote that triggered it, so
  the fix is written against a sentence, not a score.

## Seeing the findings for one hub

```bash
bash tools/audit/read-report.sh kubernetes        # every quote, grouped by lesson
node tools/audit/spec-doctor.mjs kubernetes       # the same, against the spec before rendering
```

## How a hub gets fixed (the loop that worked on mysql, arrays and go)

1. `node tools/audit/read-report.sh <hub>` and read the first twenty quotes. Do not fix them one by
   one in the rendered files — the source is `src/content/_specs/<hub>.mjs`.
2. Author the lead paragraph for every lesson. This is the single biggest class: a beginner arrives
   at a page that opens with YAML and has nothing to hold.
3. Break long sentences, gloss or drop jargon, replace metaphor with the mechanism (name the
   process, the port, the field, the number), give each keyterm a definition that teaches.
4. Give each page one example with real values in it — a `10.4.2.17`, a `137`, a `250m CPU` — because
   that is what a reader can test themselves against.
5. `node tools/reauthor.mjs <hub>` → `GATE_DETAIL=6 bash tools/audit/run.sh <hub>` must print
   `issues: 0`, and `node tools/audit/parse-all.mjs` must still print `parse failures 0`.

## Status

| hub | lessons | structure + readability issues |
|---|---|---|
| arrays | 8 | 0 |
| go | 10 | 0 (gained `measuring-and-the-garbage-collector` so it is not all basics) |
| mysql | 13 | 0 |
| kubernetes | 8 in place | 31; a rewrite from a spec is under way, 2 lessons authored so far |

23 opening paragraphs were newly written for arrays/go/mysql in this pass; the generator now makes
them mandatory for every hub rebuilt from here.

## Coverage, the w3schools bar

w3schools gives a track roughly 30–60 tutorial pages, each with an example, an exercise and a code
challenge. Our hubs were 7–8 lessons. The bar for a rebuilt hub is: **10–13 lessons, each carrying
three or four of their pages plus what they cannot do — the mechanism, the number, the failure
mode** — every lesson with 3 exercises and a 4-question quiz, in both languages. `mysql` went from
7 template lessons to 13 that include what is not in their tutorial at all (EXPLAIN plans, B+tree
mechanics, keyset pagination, isolation levels and gap locks, `mysqldump --single-transaction`).

When a hub is rebuilt, list its w3schools page titles and put each one into a lesson or say why it
is not needed; the `references` group in the hub's `meta` is where that map stays visible to the
reader.

## the punctuation pass: shortening 5,760 sentences without rewording

`sentence too long to follow` was the largest class on the site (386 lessons, 3,286 individual
sentences in the report). `node tools/fix-sentences.mjs --write` cut each one at its last safe
` ; ` / ` — ` / ` , and ` boundary, which changes punctuation and one capital letter and nothing
else. The tool refuses its own output unless:

* the lowercased word multiset of the string is **identical** before and after (`tokens()` guard) —
  so no word can be dropped, added or duplicated;
* the longest sentence got shorter (`longest()` guard) — so a cut that only moves the problem is not
  allowed in;
* no `[a-z][.!?][A-Za-z]` glue appeared — a period must own a space (`case.Low vision` was a real
  bug in the first version: 1,173 glued boundaries, caught by this check, all restored from backup
  and re-run);
* the string has no `{}`, `=>` or `\n` in it — code samples keep their semicolons.

`node tools/audit/verify-rewrite.mjs` re-derives the same guarantees for the whole tree against
`tools/audit/tmp/backup` and is what to run after any bulk prose edit. 3,821 candidates were
refused by these guards; those sentences sit inside code and need a human.

## both languages: what “no Bengali” actually means here

`node tools/audit/twin-queue.mjs` counts every `en:`/`bn:` pair whose twin is not Bengali:
**13,974 lines**, and they split into two very different problems.

* **12,176 are synonym-list options** — `back, pool, drain, spare`, `key, label, tag, prefix`. These
  are quiz *choices* generated from a thesaurus. Translating them would only make the padding
  bilingual, so the queue will not emit them; they die when the hub is rebuilt from a spec.
* **1,798 are prose labels** (recaps like `clip vs mask, SVG as DOM subtree, the four windows, the
  sealed <img> window`), 2,086 distinct strings. Author once, splice everywhere: write the twins in
  a TSV (`tools/audit/tmp/twins/top-filled.tsv`) and run
  `node tools/twin-fill.mjs <that.tsv>` — it fills only `bn` lines that hold no Bengali today, so a
  real twin is never overwritten. Batch 1 = 29 strings → 341 lines in 40 files, `svg` 93→84 issues.

`bn` values that are Bengali written in Latin letters (`দেখতe-somo`) are a third case, counted by the
gate as `romanised Bengali left in the twin` (483 findings); those need rewriting per sentence, not
translation.
