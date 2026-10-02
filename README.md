# CodeShikhon — Bilingual Developer Learning Platform

কোডশিখন — একটি দ্বিভাষিক (English · বাংলা) ডেভেলপার লার্নিং ইকোসিস্টেম।
A complete bilingual (English · বাংলা) developer learning ecosystem: tutorials, deep
visual explanations, a code playground, exercises, quizzes and interactive computer-science
labs — all local-first and self-hostable.

## Technology baseline (Frontend Project Parameter Specification v2.0)

| Layer | Technology |
| --- | --- |
| Runtime / bundler | **Vite 8** |
| UI | **React 19** |
| Logic & types | **TypeScript** (strict, `noUnusedLocals`, `noFallthroughCasesInSwitch`) |
| Styling | **Tailwind CSS v4** with a full CSS design-token system (8 themes) |
| Routing | **React Router DOM v7** (nested layouts, route-level code splitting) |
| Testing | **Vitest** (17 content-integrity + engine tests) |
| Animation | **GSAP Core** (hero) + CSS animations for diagrams |

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
npx vitest run   # test suite
```

No external services are required. All progress is stored privately in the browser
(`localStorage`), matching the "private/internal learning" requirement.

## What exists in this vertical slice

- **App shell** — responsive sidebar + header, skip-link, keyboard navigation,
  `Ctrl+K` global search (technologies, lessons, glossary, pages).
- **Bilingual engine** — EN | বাংলা switch, auto-detect on first visit, persisted choice.
  Content is hand-written in both languages (never machine-translated); technical keywords
  stay in English inside Bengali explanations (Section 36).
- **Design tokens** — `light · dark · system · midnight · ocean · forest · solarized ·
  high-contrast`, all driven by CSS variables (Section 30).
- **Technology registry** — all 10 categories and 134 technologies from Section 2,
  data-driven, searchable, with difficulty, status and prerequisites (Section 40).
- **Twenty-nine complete hubs** — JavaScript, HTML, CSS, Git, React, SQL, Networking,
  Security, Docker, TypeScript, Python, Sorting (DSA), Hash Tables, Linked Lists,
  Stacks, Queues, Trees, Heaps, Graphs, Graph Algorithms, Searching, System
  Design, Caching, Distributed Systems, HTTP, REST, GraphQL, Node.js & Express and
  Kubernetes, each following Section 3:
  Overview, Roadmap, Tutorials, Exercises, Quiz, Projects, Reference, Debugging,
  Best Practices, Interview Prep, Real World. One hundred and thirty-four deep lessons total
  (HTML now walks its full nine-lesson ladder: skeleton → text palette → linked
  world → table archive → media wardrobe → landmark layer → DOM → forms →
  modern shelf, exiting into the CSS hub — which itself now walks its own full
  nine-lesson ladder: cascade court → paint ledger → box model → position maps →
  flexbox → grid → responsive estate → motion hall → the architecture, exiting
  into the JavaScript hub — which walks its own full nine-lesson ladder: the
  syntax mint → operator court → repetition mill → shelf works → registry of
  shapes → public square → clocktower → closures → event loop, exiting into TypeScript's own
  ladder: type-thinking → narrowing & generics → the type foundry → the
  tightening bench — finally exiting into the React hub: thinking-in-react → the re-render
  engine → the effect ward → the state vault → the suspense gallery → the form press → the composition mill → the server foundry → the grand archive, while
  the SQL hub walks its own nine-station ladder: sql-thinking → query economics →
  the join hall → the census ledger → the window gallery → the transaction vault →
  the migration docket → the ORM shadow → the grand warehouse, and the Git hub
  walks its own nine-lesson ladder: git basics → branching → the snapshot
  archive → the branch atelier → the conflict court → the remote tides → the
  history atelier → the team chronicle → the grand timeline, and the Python hub
  walks its own nine-lesson ladder: python-thinking → mutation & binding → the
  sequence mill → the mapping vault → the function foundry → the class court →
  the generator garden → the error court → the import archive), and the DSA hub (Sorting & Big-O)
  walks its own nine-lesson ladder: big-o thinking → sorting physics → the
  accidental quadratic → the amortized ledger → the recursion atelier → the
  halving vein → the counting territory → the pointer workshop → the grand
  measure), and the Searching hub walks its own nine-lesson ladder: the
  halving promise → beyond halving → the bound atelier → the parametric vein →
  the unimodal atelier → the text mill → the skip parade → the grid stair →
  the search panorama, and the Stacks hub walks its own nine-lesson ladder:
  lifo thinking → stack machines → the bracket court → the monotone pier →
  the minimum cartel → the infix treaty → the undo fortress → the backtrack
  expedition → the tray panorama)
  (…plus Spanning Worlds, Every Price, Every Pair, The Halving Promise, Beyond
  Halving, The Envelope Discipline, The Last Single Point, The Residence Vow,
  The Invalidation Discipline, The Partition Ledger, The Consensus Choir, The
  Verb Ledger, The Freshness Exchange, The Resource Grammar and The Payload
  Economy) — all built on the
  WHAT→WHY→HOW→INTERNAL→VISUAL→CODE→RUN→RESULT→DEBUG→REAL→NEXT structure
  (Section 5) with full bilingual content and cross-hub lesson chaining.
- **Visualization engine** — 
  - *Re-render Lab*: fire setState on a live component tree, shield subtrees with
    memo checkboxes, and watch per-node render counters — a hands-on feel for the
    render/commit split, keys, and shallow-equality contracts (Section 11).
  - *Code Execution Visualizer*: step through code with line highlight, memory table,
    call stack, heap and output (Sections 7, 38).
  - *Event Loop Lab*: animated call stack / Web APIs / microtask / macrotask queues
    with PLAY, step and speed control.
  - *Browser Pipeline*: URL → DNS → TCP → TLS → … → Screen, text–diagram synchronized
    (Sections 8, 37).
  - *Box Model Lab*: drag margin/border/padding/width, flip `box-sizing`, watch totals.
  - *Flexbox Lab*: direction, justify-content, align-items and gap — live, with the
    two-axis mental model.
  - *Grid Lab*: tracks, `fr` distribution, `minmax`, spanning and item alignment.
  - *DOM Tree Lab*: type HTML, watch the live object tree with element/text/depth stats.
  - *Form Validation Lab*: native constraints (required, minlength, email, min/max)
    blocking submissions — zero JavaScript.
  - *Git Visualizer*: a full four-zone simulator (Working Dir → Staging → Local →
    Remote) driven by a pure, unit-tested reducer — init/add/commit/branch/switch/
    merge/push/pull with a live commit graph and terminal.
  - *Docker Visualizer*: Dockerfile editor → build → layer stack with real cache
    semantics (first changed line busts everything below) → containers with
    start/stop/rm protection, ports, volumes and a bridge-network view.
  - *Network Simulator*: type a URL and watch one request travel Browser → DNS →
    TCP/TLS handshake → CDN edge → Load Balancer → App Server → Database, with
    per-step latency, cache hits, keep-alive speedups and 404 paths.
  - *Database Lab*: a tiny real query engine — SELECT parsing → EXPLAIN planning →
    page-by-page SEQ SCAN vs 3-page B-tree INDEX SCAN, with rows-examined counters
    and CREATE INDEX toggles that visibly shrink the work.
  - *Load Balancing Lab*: live traffic (trickle→flood) across a server pool with
    round-robin / least-connections / random algorithms, kill/restart failover and
    drop statistics — all on a seeded, unit-tested tick engine.
  - *Security Lab*: real cryptography in the browser — a hand-written SHA-256 +
    HMAC verified against RFC vectors, so the JWT the lab signs is byte-identical
    to jwt.io's canonical token. Sign, verify, tamper, and run the alg:none attack;
    then a password-hashing demo with salts and slow-KDF round sliders.
  - *Hash Lab*: FNV-1a doors fill in real time — chaining mode resizes and rehashes
    the whole table before load factor ever crosses 0.75 (watch the red line),
    while open-addressing mode walks linear probe paths through a 16-door hall.
  - *Linked List Lab*: boxes and arrows with floating pointer-hands (head/p/prev/
    cur/tmp/fresh/victim) — traverse by the hop, insert with the two law-governed
    stitches, delete with the pointer-vault over the victim, and freeze the reverse
    dance frame by frame, including the walk-past-the-end TypeError trap.
  - *Stack Lab*: six scenes on one spring tray — push/pop plates with the
    underflow refusal, bracket validation as IOU debts (valid AND broken tapes),
    postfix RPN arithmetic with zero grammar, call frames piling up for
    factorial, and the overflow free-fall when nothing ever pops.
  - *Queue Lab*: four scenes on two doors — the fair line mirrors the plates
    scene fruit-for-fruit, the ring buffer freezes its wrap frame exactly once
    (plus the full/empty head==tail riddle and bounded overflow), the two-tray
    machine pours only when dry, and the priority bargain serves the loudest first.
  - *Tree Lab*: four scenes on one vow — grow the BST by comparison hops,
    chase the hit and the honest ∅ miss, watch inorder print the hidden sorted
    array, and spin the rotations that collapse an RR staircase and unravel an
    LR knee into a balanced three.
  - *Heap Lab*: the complete tree living in an array, shown as machine and
    ghost at once — sift-up climbs the parent chain, the throne serves in the
    queues hub's exact priority order, heapify ambushes with the Σ k/2ᵏ⁺¹
    ledger, and a size-3 min-heap gatekeeper seals top-3 from a nine-deep stream.
  - *Graph Lab*: four walks on two worlds — BFS sweeps the demo in waves with
    the shortest-hop law, DFS plunges corridor-first, the three-color hunt
    photographs its back edge (B — D — F — E — B), and Kahn's zero-debt tray
    serves the curriculum DAG, every arrow pointing forward.
  - *Graph Algorithms Lab*: two welders and two auditors — Kruskal's clan-ledger
    welds, Prim's growing wall, Bellman-Ford's honest rounds on a biting world,
    and Floyd's democratic table landing row S at [0, 4, 1, 5, 7].
  - *Search Lab*: four machines on one seat question — linear's branch-free march
    to an early 39, binary's 16 → 8 → 3 → 1 window halving, boundary collapsing
    at lo === hi for the first seat ≥ 30, and interpolation landing 49 in three
    proportion guesses on the squares strip.
  - *System Design Lab*: the envelope ledger — 10M DAUs walked through the
    86,400-second gate, a ×3 breathing halo and a ×2 headroom covenant to ≈14
    boxes; plus storage (≈7 disks, 5 mirrored years), bandwidth (≈111 Mbps after
    the CDN's 80% lift) and memory (one 8 GB Redis node for the 80/20 hot slice).
  - *Cache Lab*: the vault tribunal — eleven references knock on a three-seat
    residence under four eviction laws: LRU (2 hits, final vault E D C), FIFO
    (1 hit — it executes A one reference before A hits), LFU (A goes immortal at
    ×3) and the TTL undertaker (five free grave reclaims, one living execution:
    A@10, no graves, no room). Counters, outcome chips and a hit-rate ledger
    included.
  - *DistSys Lab*: the fate-line choir — three replicas (Asha, Bala, Cara) walk
    one fixed 19-beat destiny (6 writes, 8 reads, walls at i4/i16, heals at
    i9/i17) under four consistency laws: naive LWW buries k1=2@7 in silence
    (lost=1, errors=0), sloppy quorum lodges one ⌑ hint, strict majority
    refuses twice for a duel-free heal, and the single leader strands its own
    crown — lease expires, succession exam moves it B→C, and the i19 betrayed
    lamp serves yesterday from a deposed throne.
  - *HTTP Lab*: the envelope exchange — one fixed 12-beat conversation (two
    fetches, a login, a personal read, a dead 60s lease, a permanent
    emigration, a 302 at the border, a 401 duel, the second logo knock)
    walked by four client laws: the absent-minded pays 122,300 origin bytes
    across 12 knocks (one POST→GET rewrite, one blind 401 retry); the
    validator buys the bytes back with 2×304 (69,300) but still knocks 12
    times; the clerk adds the only cache hit (11 knocks); the purist pays the
    clerk's bill and refuses the rewrite (rewrites=0).
  - *REST Lab*: the endpoint docket — one fixed 10-beat workload (list, read,
    create, blind retry, replace, patch, delete, filter, expand) priced under
    four API-design laws: the messenger smuggles 10 verbs through POST
    /api/do (32 KB overfetch, 1 duplicated order, 5 caches cremated); the
    improviser arms a GET with side effects and owes an 11th call; the
    grammarian closes every counter at zero; the cartographer pays double
    and leaves with 10 discoverable links.
  - *GraphQL Lab*: the question docket — one fixed 8-beat workload (two cards,
    a product grid, an orders list, a 510-query depth bomb, a partial-failure
    mutation, a named operation, a rerun) priced under four query laws: the
    forager pays 537 DB queries behind a blind gate; the batcher cremates the
    N+1 with DataLoader (23) but the bomb still executes and the wire still
    pays 1,350 bytes; the gatekeeper rejects the bomb at parse time (15
    queries, 160 bytes); the librarian adds gateway shelf memory (9 queries,
    2 cache hits).
  - *Node Lab*: the loop docket — one fixed 8-beat traffic burst (health,
    bcrypt login, 2MB JSON, 400ms aggregate, 50MB download, tampered order,
    async crash, 50-client blast) priced under four runtime disciplines: the
    Blocker pays 898ms of hostage loop then dies to one async throw (51
    starved, 0 rps); the Careless hangs 2 sockets and swallows 2 truths; the
    Chain-Keeper walks errors home but pays the 20s tail; the Streamer paces
    bytes and sheds load — 8ms stall, 42MB flat, 19 rps.
- **Roadmaps (Section 25)** — `/roadmaps`: four career paths (Frontend, Backend,
  Full Stack, Data) with dependency-ordered stages, honest duration estimates,
  a concrete goal per stage, and LIVE progress bars/green chips fed by your
  completed lessons; planned techs are clearly marked.
- **Glossary (Section 24)** — `/glossary`: 77 hand-written bilingual terms in 9
  categories (Web/CSS, JS, Browser, Network, Backend, Database, DevOps & Git,
  Security, CS/DSA) with simple + technical definitions, live search, category
  chips, and deep links into the exact lab or lesson that teaches each term.
- **Debug Labs (Section 14)** — `/debug`: evidence-first bug hunting. Six broken
  programs (JS, HTML, CSS) with observed symptoms, three plausible diagnoses each,
  fixed code and post-mortems; points decay per wrong guess and persist locally.
- **Code Playground** — HTML/CSS/JS tabs, syntax-highlighting editor with line numbers,
  live sandboxed preview, console capture, run/reset/copy/download/fullscreen (Section 13).
- **Exercise engine** — MCQ / fill-in-blank / predict-output with hint, submit, result,
  explanation, solution and progress tracking (Section 14).
- **Quiz engine** — score, accuracy bar, per-topic weakness detection, retry (Section 15).
- **Glossary** — 29 core developer terms with simple + technical explanations in both
  languages, examples and related-term links (Section 24).
- **Roadmaps** — Frontend / Backend / Full-Stack / Data Analyst paths with
  beginner→professional dependency stages (Section 25).
- **Progress system** — lessons, exercises, quiz scores, streak, recently learned,
  continue-learning and recommended-next on the homepage (Section 26).

## Project structure

```
src/
  lib/        i18n engine, theme system, progress store, content types, UI strings (EN+BN)
  data/       technology registry (134), glossary, roadmaps
  content/    hubs → javascript/ (lessons, reference, projects…) — the content engine
  components/ CodeBlock highlighter, Blocks renderer, EditorLite playground,
              ExerciseCard, QuizPanel, SearchPalette, Layout, visuals/ (labs)
  pages/      Home, Explore, TechHub, Lesson, Labs, Playground, Roadmaps, Glossary
```

## Content conventions

Every educational string is an `LText` pair `{ en, bn }`. A lesson is a typed array of
blocks (`heading | para | code | list | callout | keyterms | steps | table | visual`) —
the same schema the future admin CMS (Sections 28–29) will write into. New hubs register
in `src/content/index.ts` without touching any routing or navigation code.

## Phase status (Section 47)

Done: **1–9, 11** (foundations → visualizations) and first slices of **14–16, 22, 24–26**.
Next: 12 (reference depth), 13 (more projects), 17 (admin CMS on this schema), 18
(full-text search index), 19–21 (architecture/security/performance labs), 23–24.

---
*EN · বাংলা · Vite · React · TypeScript · Tailwind CSS · Vitest · GSAP*
