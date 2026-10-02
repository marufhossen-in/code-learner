# CodeShikhon — Honest Audit & Rebuild Plan (2026-09-25)

## 1. Audit verdict

| Group | Hubs | Lessons | State |
|---|---|---|---|
| Real content (gen-1 + early gen-2: html, css, javascript, git, react, sql, networking, security-fundamentals, docker, kubernetes, typescript, python, sorting, hash-tables, linked-lists, stacks, queues, trees, heaps, graphs, graph-algorithms, searching, system-design, caching, distributed-systems, http, rest, graphql, node, nextjs, vue, angular, tanstack-query, tailwind, web-apis, dom, canvas, svg, accessibility, …) | ~46 | ~370 | GOOD — real bilingual teaching, visual labs, keep + polish later |
| Template gibberish, full hubs (`THE X XING ALREADY Y`, `-and-the-` slugs, every word repeated, Bengali = word salad) | ~57 | ~445 | BROKEN — full rewrite required |
| Template gibberish, partial hubs (php, jquery, sass, responsive-design, bootstrap, flask, django, web-components) | ~8 | ~20 | BROKEN — rewrite bad lessons |
| Planned, not built (generative-ai, llms, prompt-engineering, ai-apis, embeddings, vector-databases, rag, web-security, authentication, authorization, encryption, hashing, owasp, network-security, secure-coding, operating-systems, computer-architecture, memory, cpu, processes, threads, dns, tcpip, linux-sys + 1) | 24 topics | 0 | Build fresh to the new standard |

Fully-broken hub list (rewrite queue): ai-fundamentals, machine-learning, deep-learning, arrays, recursion,
dynamic-programming, greedy, github, cicd, linux, nginx, reverse-proxy, load-balancing, monitoring, logging,
iac, aws, azure, gcp, cloud-fundamentals, object-storage, compute, cloud-networking, serverless, containers,
db-design, normalization, transactions, indexes, query-optimization, db-fundamentals, sqlite, mysql,
postgresql, mongodb, redis, c, cpp, csharp, dotnet, java, spring, go, rust, ruby, dart, kotlin, scala, r,
swift, php(partial), laravel, lang-csharp, lang-java, lang-python, lang-javascript, lang-typescript,
lang-go, lang-rust, lang-ruby, lang-php.

## 2. w3schools anatomy (researched 2026-09-25, https://www.w3schools.com/)

- Track = many small pages; EVERY page: short concept → Example box → **Try it Yourself** (runs in
  browser) → notes/caveats → per-topic Exercises → track Quiz → full Reference section.
- HTML track ≈ 40+ pages (Elements → Attributes → … → Forms → Semantics → Entities …).
- AI track = ML-first with JavaScript: ML Intro / ML+AI / ML Languages / ML JavaScript / ML Examples /
  Linear Graphs / Scatter Plots / Perceptrons / Recognition / Training / Testing / Learning /
  Terminology / Data / Clustering / Regressions / Deep Learning / Brain.js / TensorFlow.js / JS Graphics
  / History / Mathematics / Statistics.
- What we keep from w3schools: small steps, runnable examples, exercises+quiz per unit, references.
- Where we beat w3schools: (1) full Bengali + English, (2) Try-it embedded IN the lesson (no tab
  switching), (3) diagrams + interactive labs inline, (4) honest beginner→expert ladder per hub
  (w3schools stays beginner-level), (5) senior-dev depth: mistakes, trade-offs, interview thinking.

## 3. The new content standard (applies to every rewrite + new hub)

1. **Every sentence teaches something true.** Zero repetitive filler. If a sentence can be deleted
   without losing meaning, delete it.
2. **Bengali is real Bengali** (dhaka-dialect-neutral, সাধু নয় চলিত): short sentences, technical
   keywords stay English (`model`, `loss`, `weight`), no transliteration salad.
3. **Lesson skeleton (contract):** `what → why → how → internal → result → debug → realworld → next`
   heading ids (tests enforce this), blocks > 5, exercises ≥ 3, quiz ≥ 3, MCQ answers valid.
4. **Lesson anatomy:** hook (why care) → concept in plain words → real code example → **tryit or
   diagram or visual** → common mistakes (callout/compare) → keyterms → exercises → quiz.
5. **Beginner→expert ladder inside each hub:** L1–L2 beginner (zero jargon unexplained), L3–L5
   intermediate (hands-on), L6–L7 advanced (internals, trade-offs), L8 capstone (build + exit).
6. **w3schools topic parity+:** every hub covers the w3schools equivalent track's topics, then goes
   deeper (internals, mistakes, production notes, interview depth).
7. **No fake Bengali verbs**, no `THE X XING` patterns, no repeated-word paragraphs — ever again.
8. **Visual-first:** every lesson has ≥1 of: tryit runner / diagram (SVG) / visual lab / table / compare.

## 4. Rebuild order (highest learning-value first)

1. AI track: ai-fundamentals → machine-learning → deep-learning → (new) generative-ai, llms,
   prompt-engineering, ai-apis, embeddings, vector-databases, rag.
2. DSA: arrays, recursion, dynamic-programming, greedy.
3. Languages A→Z: c, cpp, csharp, java, go, rust, ruby, dart, kotlin, scala, r, swift, php, laravel
   (+ lang-* duplicates resolved: keep ONE hub per language, retire dupes).
4. Databases: db-fundamentals, sqlite, mysql, postgresql, mongodb, redis, db-design,
   normalization, transactions, indexes, query-optimization.
5. DevOps + Cloud + security + systems + remaining planned topics, then partial-hub repairs.

## 5. Honest estimate

~465 broken lessons + ~192 new lessons ≈ 650 lessons of real bilingual content. At a sustained
quality pace this is many sessions of work — but every hub shipped from now on meets this standard,
starting with ai-fundamentals (this session, below). Progress is reported after every hub.
