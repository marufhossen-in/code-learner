/** Pure step-generator for the Graph Algorithms lab — four machines, three worlds:
 *  kruskal: sort-and-weld on the seven-citizen weighted world (union-find guards families)
 *  prim:    one wall of citizens, grown by the trays hub’s throne through cheapest crossing edge
 *  bellman: honest ledger on a directed world with a negative toll — V−1 rounds, early exit
 *  floyd:   every pair prices itself by democratic mediation on the same directed world
 *
 *  chosen/rejected are undirected weld records; dist & matrix serve the pricing scenes. */

import type { GN } from './graphSim';

export interface WEdge { u: string; v: string; w: number }
export interface GAStep {
  nodes: GN[];
  edges: WEdge[];
  directed: boolean;
  chosen: [string, string][];        // accepted welds so far (mst scenes)
  rejected?: [string, string];       // the edge kruskal just refused (cycle)
  hot?: string;                      // node in focus
  hotEdge?: [string, string];        // edge in focus
  newest?: [string, string];         // the weld just accepted (accent flash)
  tray: string[];                    // prim: candidate crossings “w·u—v”
  comps?: number;                    // union-find family count
  dist?: Record<string, number>;     // bellman: price labels
  parentOf?: Record<string, string>; // bellman: path-tree pointers
  matrix?: { ids: string[]; d: (number | null)[][]; k?: string; hi?: [number, number] };
  msg: string;
  note: { en: string; bn: string };
}
export type GAKind = 'kruskal' | 'prim' | 'bellman' | 'floyd';

const MST_POS: GN[] = [
  { id: 'A', x: 0, y: 0.65 }, { id: 'B', x: 1.15, y: 0 }, { id: 'C', x: 1.15, y: 1.3 },
  { id: 'F', x: 2.3, y: 0.65 }, { id: 'D', x: 3.45, y: 0 }, { id: 'E', x: 4.6, y: 1.3 },
  { id: 'G', x: 2.3, y: 1.55 },
];
const MST_EDGES: WEdge[] = [
  { u: 'B', v: 'C', w: 1 }, { u: 'A', v: 'B', w: 2 }, { u: 'D', v: 'F', w: 2 }, { u: 'F', v: 'G', w: 2 },
  { u: 'C', v: 'F', w: 3 }, { u: 'A', v: 'C', w: 4 }, { u: 'E', v: 'F', w: 4 },
  { u: 'B', v: 'D', w: 5 }, { u: 'D', v: 'E', w: 6 }, { u: 'C', v: 'D', w: 8 }, { u: 'D', v: 'G', w: 9 },
];

const DP_POS: GN[] = [
  { id: 'S', x: 0, y: 0.65 }, { id: 'A', x: 1.3, y: 0 }, { id: 'B', x: 1.3, y: 1.3 },
  { id: 'C', x: 2.6, y: 0.65 }, { id: 'T', x: 3.9, y: 0.65 },
];
const DP_EDGES: WEdge[] = [
  { u: 'S', v: 'A', w: 4 }, { u: 'S', v: 'B', w: 5 }, { u: 'A', v: 'B', w: -3 },
  { u: 'A', v: 'C', w: 6 }, { u: 'B', v: 'C', w: 4 }, { u: 'B', v: 'T', w: 8 }, { u: 'C', v: 'T', w: 2 },
];
const DP_IDS = ['S', 'A', 'B', 'C', 'T'];

const NOTE_KRUSKAL = {
  en: 'Kruskal sorts every corridor by toll, then welds cheapest-first — but only across DIFFERENT families. The union-find ledger (each citizen born a family-of-one; find climbs to the clan elder, union marries the smaller clan into the larger with path compression) answers “same family?” in nearly O(1), and a YES answer is the new edge forming a cycle: refuse it. The cut property does the proving: the cheapest corridor crossing any fence must belong to SOME minimum spanning tree, so greedy welds are never a mistake.',
  bn: 'Kruskal সাজায় প্রতি করিডর টোলে, তারপর ঝালাই করে সস্তাতম-আগে — কিন্তু কেবল ভিন্ন পরিবারে। ইউনিয়ন-ফাইন্ড খাতা (প্রতি নাগরিকের জন্ম এক-জনের-পরিবারে; find আরোহণ করে গোষ্ঠীমোড়ের কাছে, union বিবাহ দেয় ছোট গোষ্ঠী বড়টিতে, পথ-সংকোচনসহ) উত্তর দেয় “একই পরিবার?” প্রায় O(1)-এ, আর হ্যাঁ-উত্তর মানে নতুন ধার চক্র গড়বে: ফিরিয়ে দিন। কাট-প্রপার্টি প্রমাণ করে: যে-কোনো বেড়া পেরোনো সস্তাতম করিডর কোনো-না-কোনো ন্যূনতম-স্প্যানিং-ট্রির অংশ — তাই লোভী ঝালাই কখনো ভুল নয়।',
};
const NOTE_PRIM = {
  en: 'Prim grows ONE wall from a seed: every crossing corridor is a candidate, the cheapest crosses next, the crossed citizen joins the wall and offers its own corridors. Candidates go stale the moment both endpoints live inside — so they are skipped at pop, the laziness Dijkstra taught. Start anywhere; the cut property guarantees every cheapest-crossing choice is safe. On dense worlds this lazy heap pays O((|V|+|E|)·log|V|); on sparse ones it matches Kruskal’s weld.',
  bn: 'Prim গড়ে একটি প্রাচীর বীজ থেকে: প্রতি বেড়া-পেরোনো করিডর প্রার্থী, সস্তাতমটি পরে পেরোয়, পেরোনো নাগরিক প্রাচীরে যোগ দিয়ে নিজের করিডর অর্পণ করে। প্রার্থী বাসি হয় যেই দুই প্রান্তই প্রাচীরে ঢুকে যায় — তাই পপে বাদ, Dijkstra-শেখা অলসতা। যেখান থেকেই শুরু করুন; কাট-প্রপার্টি গ্যারান্টি দেয় প্রতি সস্তাতম-পেরোনো নির্বাচন নিরাপদ। ঘন জগতে এই অলস হিপ দেয় O((|V|+|E|)·log|V|); বিরলে মিলে যায় Kruskal-এর ঝালাইয়ে।',
};
const NOTE_BELLMAN = {
  en: 'Bellman-Ford is the honest ledger for worlds where tolls may be NEGATIVE — Dijkstra’s wave law breaks there, because a later discount can undercut a settled price. So relax every edge, V−1 full rounds: after round k, every price using at most k hops is FINAL. If a round changes nothing, exit early — convergence proved. If round V STILL improves something, a negative cycle owns those citizens: no cheapest route exists, and the ledger says so out loud instead of printing a lie.',
  bn: 'Bellman-Ford হলো সৎ খাতা ঋণাত্মক-টোলের জগতের জন্য — Dijkstra-এর তরঙ্গ-বিধান সেখানে ভাঙে, কারণ পরের ছাড় নিষ্পত্ত মূল্যকে কাটাতে পারে। তাই শিথিল করুন প্রতি ধার, V−1 পূর্ণ রাউন্ড: রাউন্ড k পরে সর্বোচ্চ-k-লাফের প্রতি মূল্য চূড়ান্ত। রাউন্ডে কিছু না বদলালে আগেই বেরিয়ে যান — অভিসারিতা প্রমাণিত। রাউন্ড V-তেও উন্নতি হলে ঋণাত্মক চক্রের মালিকানায় নাগরিকগণ: কোনো সস্তাতম পথের অস্তিত্বই নেই, আর খাতা সেটুকুই জোরে বলে, মিথ্যা ছাপার বদলে।',
};
const NOTE_FLOYD = {
  en: 'Floyd-Warshall prices EVERY pair with one democratic question per triple: may citizen k mediate i→j cheaper than what i pays today? Loop k outermost (k is the expanding set of allowed mediators) and improve d[i][j] wherever d[i][k]+d[k][j] undercuts it. V³ strokes of the table price the whole world — every source at once. It is the dynamic-programming vow the heaps road was never asked to keep: no structure, just a matrix and an induction.',
  bn: 'Floyd-Warshall মূল্য দেয় প্রতি জোড়াকে, ত্রয়ীপ্রতি একটি গণতান্ত্রিক প্রশ্নে: নাগরিক k কি i→j মধ্যস্থতা করতে পারে, আজকের মূল্যের চেয়ে সস্তায়? k-চক্র থাকে সবচেয়ে বাইরে (k হলো অনুমোদিত মধ্যস্থের প্রসারমান সেট) আর উন্নত করুন d[i][j] যেখানেই d[i][k]+d[k][j] তাকে কাটে। টেবিলের V³ আঁচড়ে মূল্যায়িত হয় পুরো জগৎ — সব উৎস একসাথে। এটি ডাইনামিক-প্রোগ্রামিং শপথ, যা হিপ পথে কখনো রাখতে বলা হয়নি: কোনো কাঠামো নয়, শুধু একটি ম্যাট্রিক্স আর একটি অনুমান।',
};

export function galgSteps(kind: GAKind): GAStep[] {
  const steps: GAStep[] = [];
  const MST = { nodes: MST_POS, edges: MST_EDGES, directed: false };
  const DPW = { nodes: DP_POS, edges: DP_EDGES, directed: true };

  const push = (scene: typeof MST, extra: Partial<GAStep>): void => {
    steps.push({
      nodes: scene.nodes, edges: scene.edges, directed: scene.directed,
      chosen: [], tray: [], msg: '', note: NOTE_KRUSKAL, ...extra,
    });
  };

  if (kind === 'kruskal') {
    const sorted = [...MST_EDGES].sort((a, b) => a.w - b.w);
    const p: Record<string, string> = {}; const r: Record<string, number> = {};
    for (const n of MST_POS) { p[n.id] = n.id; r[n.id] = 0; }
    const find = (x: string): string => (p[x] === x ? x : (p[x] = find(p[x])));
    let comps = MST_POS.length;
    const chosen: [string, string][] = [];
    let total = 0;
    push(MST, {
      comps, msg: `ledger open: ${comps} families of one · corridors sorted by toll — weld cheapest-first across families only`,
      note: NOTE_KRUSKAL,
    });
    for (const e of sorted) {
      const ru = find(e.u); const rv = find(e.v);
      if (ru === rv) {
        push(MST, {
          chosen: chosen.map((c) => [...c] as [string, string]), rejected: [e.u, e.v],
          hotEdge: [e.u, e.v], comps,
          msg: `✕ ${e.u}—${e.v} (${e.w}): same clan «${ru}» — this weld would close a ring, refuse it`,
          note: NOTE_KRUSKAL,
        });
        continue;
      }
      if (r[ru] < r[rv]) { p[ru] = rv; } else { p[rv] = ru; if (r[ru] === r[rv]) r[ru]++; }
      comps--;
      chosen.push([e.u, e.v]);
      total += e.w;
      push(MST, {
        chosen: chosen.map((c) => [...c] as [string, string]),
        hotEdge: [e.u, e.v], newest: [e.u, e.v], comps,
        msg: `✓ weld ${e.u}—${e.v} (${e.w}): families intermarry → ${comps} remain · running total ${total}`,
        note: NOTE_KRUSKAL,
      });
      if (comps === 1) break;
    }
    push(MST, {
      chosen: chosen.map((c) => [...c] as [string, string]), comps,
      msg: `one family stands: ${chosen.length} welds, ${total} toll — the minimum cable that connects the whole world`,
      note: NOTE_KRUSKAL,
    });
  }

  if (kind === 'prim') {
    const marked = new Set<string>(['A']);
    const chosen: [string, string][] = [];
    let total = 0;
    const fmt = (e: WEdge) => `${e.w}·${e.u}—${e.v}`;
    // throne of candidates: lazily filtered min-heap implemented as sorted array (small world, honest order)
    let tray: WEdge[] = [...MST_EDGES.filter((e) => e.u === 'A' || e.v === 'A')].sort((a, b) => a.w - b.w);
    const adj = (id: string): WEdge[] => MST_EDGES.filter((e) => e.u === id || e.v === id);
    push(MST, {
      tray: tray.map(fmt), comps: 1,
      msg: 'seed A inside the wall · candidates = every corridor out of A · cheapest crosses next',
      note: NOTE_PRIM,
    });
    while (tray.length && marked.size < MST_POS.length) {
      const e = tray[0];
      const inU = marked.has(e.u); const inV = marked.has(e.v);
      if (inU && inV) {
        tray = tray.slice(1);
        push(MST, {
          chosen: chosen.map((c) => [...c] as [string, string]),
          rejected: [e.u, e.v], hotEdge: [e.u, e.v], tray: tray.map(fmt),
          msg: `✕ pop ${fmt(e)}: both citizens already inside — stale candidate, binned (lazy deletion)`,
          note: NOTE_PRIM,
        });
        continue;
      }
      const newcomer = inU ? e.v : e.u;
      tray = tray.slice(1);
      marked.add(newcomer);
      chosen.push([e.u, e.v]);
      total += e.w;
      const fresh = adj(newcomer).filter((x) => !marked.has(x.u === newcomer ? x.v : x.u));
      tray = [...tray, ...fresh].sort((a, b) => a.w - b.w);
      push(MST, {
        chosen: chosen.map((c) => [...c] as [string, string]),
        hot: newcomer, hotEdge: [e.u, e.v], newest: [e.u, e.v], tray: tray.map(fmt),
        msg: `✓ pop ${fmt(e)}: ${newcomer} crosses into the wall (${marked.size}/${MST_POS.length}) · offers its corridors · total ${total}`,
        note: NOTE_PRIM,
      });
    }
    push(MST, {
      chosen: chosen.map((c) => [...c] as [string, string]), tray: [],
      msg: `the wall contains everyone: ${chosen.length} welds, ${total} toll — same minimum cable, grown corridor by crossing corridor`,
      note: NOTE_PRIM,
    });
  }

  if (kind === 'bellman') {
    const dist: Record<string, number> = { S: 0 };
    for (const n of DP_IDS) if (n !== 'S') dist[n] = Infinity;
    const parent: Record<string, string> = {};
    const shown = (d: Record<string, number>) => Object.fromEntries(DP_IDS.map((i) => [i, d[i]]));
    push(DPW, {
      dist: shown(dist), parentOf: { ...parent }, tray: DP_EDGES.map((e) => `${e.u}→${e.v} ${e.w}`),
      msg: 'negative toll aboard (A→B −3): the wave law is suspended — relax EVERY corridor, V−1 honest rounds',
      note: NOTE_BELLMAN,
    });
    let changedGlobal = false;
    for (let round = 1; round <= DP_IDS.length - 1; round++) {
      let changed = false;
      for (const e of DP_EDGES) {
        const cand = dist[e.u] + e.w;
        if (dist[e.u] !== Infinity && cand < dist[e.v]) {
          dist[e.v] = cand;
          parent[e.v] = e.u;
          changed = true; changedGlobal = true;
          push(DPW, {
            dist: shown(dist), parentOf: { ...parent }, hot: e.v, hotEdge: [e.u, e.v],
            tray: DP_EDGES.slice(DP_EDGES.indexOf(e) + 1).map((x) => `${x.u}→${x.v} ${x.w}`),
            msg: `round ${round} · relax ${e.u}→${e.v}: ${e.u} pays ${dist[e.u]}, +${e.w} toll undercuts → ${e.v} now ${cand}`,
            note: NOTE_BELLMAN,
          });
        }
      }
      push(DPW, {
        dist: shown(dist), parentOf: { ...parent },
        msg: changed
          ? `round ${round} closed with improvements — every ≤${round}-hop price is now FINAL`
          : `round ${round} changed nothing — convergence proved, the ledger closes ${DP_IDS.length - 1 - round} round(s) early`,
        note: NOTE_BELLMAN,
      });
      if (!changed) break;
    }
    if (!changedGlobal) { /* unreachable on this world by construction */ }
    let negCycle = false;
    for (const e of DP_EDGES) {
      if (dist[e.u] !== Infinity && dist[e.u] + e.w < dist[e.v]) { negCycle = true; break; }
    }
    push(DPW, {
      dist: shown(dist), parentOf: { ...parent },
      msg: negCycle
        ? 'round V still improves: a negative cycle owns part of this world — no honest cheapest route exists'
        : `audit clean: a V-th round would improve nothing — no negative cycle; cheapest prices sealed S→B 1, S→C 5, S→T 7`,
      note: NOTE_BELLMAN,
    });
  }

  if (kind === 'floyd') {
    const d: (number | null)[][] = DP_IDS.map((a, ii) =>
      DP_IDS.map((b, jj) => (ii === jj ? 0 : (DP_EDGES.find((e) => e.u === a && e.v === b)?.w ?? null))));
    const mm = (k?: string, hi?: [number, number]) => ({ ids: DP_IDS, d: d.map((row) => [...row]), k, hi });
    push(DPW, {
      matrix: mm(), tray: DP_EDGES.map((e) => `${e.u}→${e.v} ${e.w}`),
      msg: 'the table opens: direct tolls written, blanks are unpriced pairs — every citizen will audition as mediator',
      note: NOTE_FLOYD,
    });
    let improves = 0;
    for (const k of DP_IDS) {
      push(DPW, {
        matrix: mm(k),
        msg: `mediator ${k} steps forward: may routing ANY pair through ${k} undercut today’s price?`,
        note: NOTE_FLOYD,
      });
      for (const i of DP_IDS) {
        for (const j of DP_IDS) {
          const dik = d[DP_IDS.indexOf(i)][DP_IDS.indexOf(k)];
          const dkj = d[DP_IDS.indexOf(k)][DP_IDS.indexOf(j)];
          const cur = d[DP_IDS.indexOf(i)][DP_IDS.indexOf(j)];
          if (dik === null || dkj === null) continue;
          const via = dik + dkj;
          if (cur === null || via < cur) {
            d[DP_IDS.indexOf(i)][DP_IDS.indexOf(j)] = via;
            improves++;
            push(DPW, {
              matrix: mm(k, [DP_IDS.indexOf(i), DP_IDS.indexOf(j)]),
              hot: i, hotEdge: [i, k],
              msg: `✓ ${i}→${j} reroutes through ${k}: ${dik} + ${dkj} = ${via}${cur === null ? ' (was unpriced)' : ` undercuts ${cur}`}`,
              note: NOTE_FLOYD,
            });
          }
        }
      }
    }
    push(DPW, {
      matrix: mm(),
      msg: `all pairs priced: ${improves} renegotiations · S-row reads the one-source truth [0, 4, 1, 5, 7] — Bellman-Ford’s ledger, unanimous`,
      note: NOTE_FLOYD,
    });
  }

  return steps;
}
