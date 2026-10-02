/** Pure step-generator for the Graph lab — four scenes, two worlds:
 *  bfs:   wavefront walk on the six-citizen demo world (borrows the queues hub’s machine)
 *  dfs:   stack plunge on the SAME world (borrows the stacks hub’s machine)
 *  cycle: three-color DFS exposing one back edge — the proof of a cycle
 *  topo:  Kahn’s ordering on the curriculum-shaped DAG (edges are prerequisites)
 *
 *  Tree edges are remembered as (parent → child) discovery pairs; visited is
 *  strict discovery order; frontier is the live queue/stack/Kahn tray. */

export interface GN { id: string; x: number; y: number }
export interface GStep {
  nodes: GN[];
  edges: [string, string][];
  directed: boolean;
  visited: string[];                 // strict discovery order
  frontier: string[];                // bfs: queue left→right | dfs: stack left=bottom | topo: Kahn tray | cycle: planned next dives (descent itself shows via treeEdges+visited)
  treeEdges: [string, string][];
  hot?: string;                      // node being processed right now
  wave?: number;                     // depth of the node just visited (bfs)
  backEdge?: [string, string];       // the smoking gun of the cycle scene
  msg: string;
  note: { en: string; bn: string };
}
export type GraphKind = 'bfs' | 'dfs' | 'cycle' | 'topo';

const DEMO_POS: GN[] = [
  { id: 'A', x: 0, y: 0 }, { id: 'B', x: 1, y: 0 },
  { id: 'C', x: 0, y: 1.2 }, { id: 'E', x: 1, y: 1.2 },
  { id: 'D', x: 2, y: 0 }, { id: 'F', x: 2, y: 1.2 },
];
const DEMO_EDGES: [string, string][] = [
  ['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'E'], ['D', 'F'], ['E', 'F'],
];
const DEMO_ADJ: Record<string, string[]> = {
  A: ['B', 'C'], B: ['A', 'D', 'E'], C: ['A', 'E'], D: ['B', 'F'], E: ['B', 'C', 'F'], F: ['D', 'E'],
};

const TOPO_POS: GN[] = [
  { id: 'arrays', x: 0, y: 0 }, { id: 'pointers', x: 0, y: 1.3 },
  { id: 'lists', x: 1.15, y: 0.65 }, { id: 'trees', x: 2.3, y: 0.65 },
  { id: 'heaps', x: 3.45, y: 0 }, { id: 'graphs', x: 3.45, y: 1.3 },
];
const TOPO_EDGES: [string, string][] = [
  ['arrays', 'lists'], ['pointers', 'lists'], ['lists', 'trees'],
  ['trees', 'heaps'], ['trees', 'graphs'], ['heaps', 'graphs'],
];

const NOTE_BFS = {
  en: 'Breadth-first borrows the queues hub machine directly: a FIFO tray guarantees every citizen is discovered at its SHORTEST hop-count from the source — wave 0, then wave 1, then wave 2 — never a shortcut missed, never a citizen seen twice (the mark-on-push is the bouncer’s stamp). On an unweighted world, the BFS tree IS the shortest-path tree.',
  bn: 'ব্রেডথ-ফার্স্ট সরাসরি কিউ-হাবের যন্ত্র ধার করে: FIFO ট্রে গ্যারান্টি দেয় প্রতি নাগরিক উৎস থেকে তার স্বল্পতম লাফ-সংখ্যাতেই আবিষ্কৃত হবে — তরঙ্গ ০, তারপর ১, তারপর ২ — কোনো শর্টকাট হারায় না, কোনো নাগরিক দুইবার দেখা হয় না (পুশের-সময়-দাগ হলো দুয়ারির স্ট্যাম্প)। অভারহীন জগতে BFS-গাছ-ই স্বল্পতম-পথ-গাছ।',
};
const NOTE_DFS = {
  en: 'Depth-first borrows the stacks hub machine: push the undiscovered neighbors, plunge into whoever stands on top, backtrack when the corridor dies. Where BFS sweeps the world in waves, DFS dives one corridor to its end first — the constitution of backtracking, deadlock hunts and every “which rooms connect to this room?” question ever asked.',
  bn: 'ডেপথ-ফার্স্ট স্ট্যাক-হাবের যন্ত্র ধার করে: অনাবিষ্কৃত প্রতিবেশীদের পুশ করো, যে উপরে দাঁড়িয়ে তাকেই আঁকড়ে ডুব দাও, করিডর মরে গেলে ব্যাকট্র্যাক। BFS জগৎ ঝাড়ু দেয় তরঙ্গে, DFS ডুব দেয় একটি করিডর শেষে আগে — ব্যাকট্র্যাকিং, ডেডলক-শিকার আর প্রতিটি “এই ঘরের সঙ্গে কোন ঘরগুলো যুক্ত?” প্রশ্নের সংবিধান এই হাঁটা।',
};
const NOTE_CYCLE = {
  en: 'Three colors tell cycle from corridor: WHITE never met, GRAY currently on my descent path (unclosed business), BLACK fully settled. Meeting gray-who-is-not-my-parent while plunging is a BACK EDGE — walk my descent chain down to it and the cycle stands there, photographed. The gray set is the stacks hub’s frame notion, legalized.',
  bn: 'তিন রঙ চেনায় চক্র আর করিডর: সাদা কখনো দেখা হয়নি, ধূসর আমার অবতরণ-পথে এখনো জীবিত (অসমাপ্ত ব্যবসা), কালো পুরো নিষ্পত্তি। ডুবের মাঝে অ-অভিভাবক-ধূসরের দেখা মানে ব্যাক ধার — অবতরণ-শিকল বরাবর তার কাছে নামলেই চক্র দাঁড়িয়ে আছে, আলোকচিত্র। ধূসর-সেট হলো স্ট্যাক-হাবের ফ্রেম-ধারণা, বৈধকৃত।',
};
const NOTE_TOPO = {
  en: 'Kahn’s algorithm is queue-powered bookkeeping: count every node’s in-degree, serve whoever owes nothing, and forgive their followers’ debts one by one. Every served citizen lands BEFORE its dependents — the only legal build order for courses, compilers, packages and pipelines. If the tray empties while citizens remain, what remains is a cycle: no order exists, and the graph just proved it constructively.',
  bn: 'Kahn-এর অ্যালগরিদম হলো কিউ-চালিত হিসাবরক্ষণ: প্রতি নোডের ইন-ডিগ্রি গুনুন, পরিবেশন করুন যার পাওনা শূন্য, আর মওকুফ করুন তার অনুসারীদের ঋণ একে একে। প্রতি পরিবেশিত নাগরিক বসে তার আশ্রিতদের আগে — কোর্স, কম্পাইলার, প্যাকেজ ও পাইপলাইনের একমাত্র বৈধ নির্মাণ-ক্রম। ট্রে ফাঁকা হলে অথচ নাগরিক থেকে গেলে, যা থেকে যায় তা চক্র: কোনো ক্রম নেই, আর গ্রাফ সেটুকুই রচনাগত প্রমাণ করল।',
};

export function graphSteps(kind: GraphKind): GStep[] {
  const steps: GStep[] = [];

  const push = (
    scene: { nodes: GN[]; edges: [string, string][]; directed: boolean },
    extra: Partial<GStep>,
  ): void => {
    steps.push({
      nodes: scene.nodes, edges: scene.edges, directed: scene.directed,
      visited: [], frontier: [], treeEdges: [], msg: extra.msg ?? '',
      note: extra.note ?? NOTE_BFS, ...extra,
    });
  };

  const DEMO = { nodes: DEMO_POS, edges: DEMO_EDGES, directed: false };
  const TOPO = { nodes: TOPO_POS, edges: TOPO_EDGES, directed: true };

  if (kind === 'bfs') {
    const visited: string[] = [];
    const tree: [string, string][] = [];
    const depth: Record<string, number> = { A: 0 };
    const marked = new Set(['A']);
    const q: string[] = ['A'];
    push(DEMO, { frontier: [...q], msg: 'source A stamped and queued — wave 0 begins', note: NOTE_BFS });
    while (q.length) {
      const cur = q.shift()!;
      visited.push(cur);
      push(DEMO, {
        visited: [...visited], frontier: [...q], treeEdges: tree.map((e) => [...e] as [string, string]),
        hot: cur, wave: depth[cur],
        msg: `⊚ ${cur} opens for business · wave ${depth[cur]}`,
        note: NOTE_BFS,
      });
      for (const nb of DEMO_ADJ[cur]) {
        if (marked.has(nb)) continue;
        marked.add(nb);
        depth[nb] = depth[cur] + 1;
        tree.push([cur, nb]);
        q.push(nb);
        push(DEMO, {
          visited: [...visited], frontier: [...q], treeEdges: tree.map((e) => [...e] as [string, string]),
          hot: nb, wave: depth[nb],
          msg: `＋ discover ${nb} via ${cur} · stamped for wave ${depth[nb]}`,
          note: NOTE_BFS,
        });
      }
    }
    push(DEMO, {
      visited: [...visited], frontier: [], treeEdges: tree.map((e) => [...e] as [string, string]),
      msg: 'frontier empty — every citizen discovered at shortest hop-count; the discovery tree IS the shortest-path tree',
      note: NOTE_BFS,
    });
  }

  if (kind === 'dfs') {
    const visited: string[] = [];
    const tree: [string, string][] = [];
    const marked = new Set(['A']);
    const st: string[] = ['A'];
    push(DEMO, { frontier: [...st], msg: 'source A on the stack — plunge discipline armed', note: NOTE_DFS });
    while (st.length) {
      const cur = st.pop()!;
      visited.push(cur);
      push(DEMO, {
        visited: [...visited], frontier: [...st], treeEdges: tree.map((e) => [...e] as [string, string]),
        hot: cur, msg: `⊚ ${cur} popped and opened — corridor continues`,
        note: NOTE_DFS,
      });
      for (const nb of DEMO_ADJ[cur]) {
        if (marked.has(nb)) continue;
        marked.add(nb);
        tree.push([cur, nb]);
        st.push(nb);
        push(DEMO, {
          visited: [...visited], frontier: [...st], treeEdges: tree.map((e) => [...e] as [string, string]),
          hot: nb, msg: `＋ push ${nb} (found from ${cur}) — the stack decides who dives next`,
          note: NOTE_DFS,
        });
      }
    }
    push(DEMO, {
      visited: [...visited], frontier: [], treeEdges: tree.map((e) => [...e] as [string, string]),
      msg: 'stack empty — the whole reachable world was plumbed corridor by corridor, and the marks kept every citizen to one visit',
      note: NOTE_DFS,
    });
  }

  if (kind === 'cycle') {
    const visited: string[] = [];
    const tree: [string, string][] = [];
    const color: Record<string, 'white' | 'gray' | 'black'> = {};
    for (const n of DEMO_POS) color[n.id] = 'white';
    // hand-guided DFS plunge: A→B→D→F→E, mirrors the recursion with an explicit frontier
    const chain = ['A', 'B', 'D', 'F', 'E'];
    let parent: Record<string, string> = {};
    for (let s = 0; s < chain.length; s++) {
      const cur = chain[s];
      color[cur] = 'gray';
      visited.push(cur);
      if (s > 0) {
        tree.push([chain[s - 1], cur]);
        parent[cur] = chain[s - 1];
      }
      push(DEMO, {
        visited: [...visited], frontier: chain.slice(s + 1), treeEdges: tree.map((e) => [...e] as [string, string]),
        hot: cur, msg: `⚪→⛬ gray ${cur} — unclosed business on my descent path`,
        note: NOTE_CYCLE,
      });
      // the smoking gun: E meets gray B, who is not its parent
      if (cur === 'E') {
        const gun = 'B';
        push(DEMO, {
          visited: [...visited], frontier: chain.slice(s + 1), treeEdges: tree.map((e) => [...e] as [string, string]),
          hot: 'E', backEdge: ['E', gun],
          msg: `⚠ ${cur} sees ${gun}: GRAY and not my parent → BACK EDGE`,
          note: NOTE_CYCLE,
        });
        // rebuild the cycle: walk descent chain from E down to B, then close with the back edge
        const cyc: string[] = [cur];
        let w = cur;
        while (w !== gun) {
          w = parent[w];
          cyc.unshift(w);
        }
        push(DEMO, {
          visited: [...visited], frontier: [], treeEdges: tree.map((e) => [...e] as [string, string]),
          backEdge: ['E', gun],
          msg: `cycle found: ${cyc.join(' — ')} — ${gun} closes the ring · no port de départ, no innocent line`,
          note: NOTE_CYCLE,
        });
        return steps;
      }
    }
  }

  if (kind === 'topo') {
    const ids = TOPO_POS.map((n) => n.id);
    const indeg: Record<string, number> = Object.fromEntries(ids.map((i) => [i, 0]));
    for (const [, v] of TOPO_EDGES) indeg[v]++;
    const visited: string[] = [];
    const tray: string[] = ids.filter((i) => indeg[i] === 0);
    push(TOPO, {
      visited: [], frontier: [...tray],
      msg: `in-degrees counted · zero-debt tray: {${tray.join(', ')}} — serve anyone owing nothing`, note: NOTE_TOPO,
    });
    const tree: [string, string][] = [];
    while (tray.length) {
      const cur = tray.shift()!;
      visited.push(cur);
      push(TOPO, {
        visited: [...visited], frontier: [...tray], treeEdges: tree.map((e) => [...e] as [string, string]),
        hot: cur, msg: `⊚ serve ${cur} · position ${visited.length} — every dependent may now relax`,
        note: NOTE_TOPO,
      });
      for (const [u, v] of TOPO_EDGES) {
        if (u !== cur) continue;
        indeg[v]--;
        if (indeg[v] === 0) {
          tray.push(v);
          tree.push([u, v]);
          push(TOPO, {
            visited: [...visited], frontier: [...tray], treeEdges: tree.map((e) => [...e] as [string, string]),
            hot: v, msg: `＋ ${v}’s last debt forgiven by ${cur} — joins the zero-debt tray`,
            note: NOTE_TOPO,
          });
        } else {
          push(TOPO, {
            visited: [...visited], frontier: [...tray], treeEdges: tree.map((e) => [...e] as [string, string]),
            hot: v, msg: `… ${v} still owes ${indeg[v]} prerequisite${indeg[v] > 1 ? 's' : ''} — waits`,
            note: NOTE_TOPO,
          });
        }
      }
    }
    push(TOPO, {
      visited: [...visited], frontier: [], treeEdges: tree.map((e) => [...e] as [string, string]),
      msg: `build order sealed: ${visited.join(' → ')} · every edge points forward, which is the whole law`,
      note: NOTE_TOPO,
    });
  }

  return steps;
}
