/** Pure step-generator for the Tree lab — four scenes:
 *  build: BST insertion with the comparison walk spelled out
 *  search: guided hit for 7, guided miss for 5
 *  traverse: inorder / preorder / postorder on the same fixed tree
 *  rotate: RR left-rotation and the LR double rotation
 *  Layout: x = inorder rank, y = depth (parents always center over their subtree). */

export interface TNode { id: number; v: number; x: number; y: number }
export interface TEdge { a: number; b: number }
export interface TStep {
  nodes: TNode[];
  edges: TEdge[];
  hot?: number;            // node under examination this step
  hit?: number;            // found / freshly inserted node
  out?: number[];          // traversal output accumulated so far
  order?: 'in' | 'pre' | 'post';
  rotated?: 'L' | 'R';
  msg: string;             // short comparison flash (symbol language)
  note: { en: string; bn: string };
}
export type TreeKind = 'build' | 'search' | 'traverse' | 'rotate';

interface N { id: number; v: number; l: N | null; r: N | null }

const SEED = [8, 3, 10, 1, 6, 14, 4, 7, 13];

function layout(root: N | null): { nodes: TNode[]; edges: TEdge[] } {
  const nodes: TNode[] = [];
  const edges: TEdge[] = [];
  let rank = 0;
  const walk = (n: N | null, d: number): void => {
    if (!n) return;
    walk(n.l, d + 1);
    nodes.push({ id: n.id, v: n.v, x: rank++, y: d });
    walk(n.r, d + 1);
  };
  const wire = (n: N | null): void => {
    if (!n) return;
    if (n.l) edges.push({ a: n.id, b: n.l.id });
    if (n.r) edges.push({ a: n.id, b: n.r.id });
    wire(n.l);
    wire(n.r);
  };
  walk(root, 0);
  wire(root);
  return { nodes, edges };
}

/** Insert v into the BST rooted at `root` (may allocate a new root when null).
 *  Returns the root and invokes onHop for every comparison and onLand for the placement. */
function insertLive(
  root: N | null,
  v: number,
  nid: () => number,
  onHop: (cur: N, goLeft: boolean, dup: boolean) => void,
  onLand: (placed: N) => void,
): N {
  if (!root) {
    const nn: N = { id: nid(), v, l: null, r: null };
    onLand(nn);
    return nn;
  }
  let cur = root;
  for (;;) {
    if (v === cur.v) {
      onHop(cur, true, true);
      return root; // duplicates refused — the BST of this hub is a set
    }
    const goLeft = v < cur.v;
    onHop(cur, goLeft, false);
    const nxt = goLeft ? cur.l : cur.r;
    if (!nxt) {
      const nn: N = { id: nid(), v, l: null, r: null };
      if (goLeft) cur.l = nn;
      else cur.r = nn;
      onLand(nn);
      return root;
    }
    cur = nxt;
  }
}

export function treeSteps(kind: TreeKind): TStep[] {
  const steps: TStep[] = [];
  let counter = 0;
  const nid = () => counter++;

  const NOTE_BUILD = {
    en: 'Insert walk: compare once per level — left when smaller, right when bigger — until the first empty chair. Nine values need at most three comparisons each on this tree; a linked list would have needed up to nine.',
    bn: 'সন্নিবেশ-হাঁটা: স্তরপ্রতি একটি তুলনা — ছোট হলে বামে, বড় হলে ডানে — প্রথম খালি চেয়ার পর্যন্ত। এই গাছে নয়টি মানের প্রতিটিই লাগে সর্বোচ্চ তিন তুলনায়; লিংকড-লিস্টে লাগত নয় পর্যন্ত।',
  };
  const NOTE_SEARCH = {
    en: 'Search is the insert walk read-only: each comparison erases half the remaining tree. Hit for 7 in three hops; miss for 5 stops at the empty right-of-4 — proof of absence with the same receipt as proof of presence.',
    bn: 'অনুসন্ধান হলো শুধু-পড়া সন্নিবেশ-হাঁটা: প্রতি তুলনায় বাকি গাছের অর্ধেক বাদ। 7 মিলল তিন লাফে; 5 থামল 4-এর ডান-খালিতে — উপস্থিতির সঙ্গে অনুপস্থিতিরও রসিদ একই।',
  };
  const NOTE_TRAVERSE = {
    en: 'Three visiting orders, one recursion. Inorder (left · root · right) prints the BST sorted — the sorted array was hiding inside the tree all along. Preorder writes a recipe to REBUILD the tree; postorder lets you clean up children before their parent.',
    bn: 'তিন পরিদর্শন-ক্রম, এক রিকার্শন। ইনঅর্ডার (বাম · মূল · ডান) ছাপায় BST সাজানো — সাজানো অ্যারে সারাক্ষণ গাছের ভেতরেই লুকিয়ে ছিল। প্রিঅর্ডার লিখে দেয় গাছ পুনর্নির্মাণের রেসিপি; পোস্টঅর্ডার অভিভাবকের আগে সন্তানদের সম্পত্তি গুটিয়ে দিতে দেয়।',
  };
  const NOTE_ROTATE = {
    en: 'Rotations are the humble O(1) pointer swaps that fix height crimes without breaking the search vow. Watch RR (right-heavy) collapse with one left rotation — then the LR sneak: left-then-right, because a single spin was facing the wrong way first.',
    bn: 'রোটেশন হলো নম্র O(1) পয়েন্টার-অদল — অনুসন্ধান-শপথ না-ভেঙে উচ্চতা-অপরাধের সাজা মাফ করে। দেখুন RR (ডান-ভারী) একটি বাম রোটেশনে ধসছে — তারপর LR ছদ্মবেশ: বাম-তারপর-ডান, কারণ এক ঘূর্ণনটি প্রথমে উল্টো দিকে মুখ করছিল।',
  };

  const snapOf = (root: N | null, extra: Partial<TStep>): void => {
    const { nodes, edges } = layout(root);
    steps.push({ nodes, edges, msg: extra.msg ?? '', note: extra.note ?? NOTE_BUILD, ...extra });
  };

  if (kind === 'build') {
    let root: N | null = null;
    for (const v of SEED) {
      if (!root) {
        root = { id: nid(), v, l: null, r: null };
        snapOf(root, { hit: root.id, msg: `⤵ ${v} roots the tree`, note: NOTE_BUILD });
        continue;
      }
      root = insertLive(
        root,
        v,
        nid,
        (cur, goLeft) => snapOf(root, { hot: cur.id, msg: `${v} ${goLeft ? '<' : '>'} ${cur.v} → ${goLeft ? 'left' : 'right'}`, note: NOTE_BUILD }),
        (placed) => snapOf(root, { hit: placed.id, msg: `⤵ ${v} lands`, note: NOTE_BUILD }),
      );
    }
  }

  if (kind === 'search') {
    // rebuild silently, same seed → same shape as the build scene
    let root: N | null = null;
    for (const v of SEED) {
      root = insertLive(root, v, nid, () => undefined, () => undefined);
    }
    snapOf(root, { msg: 'ready — find 7, then dare 5', note: NOTE_SEARCH });
    for (const target of [7, 5]) {
      let cur: N | null = root;
      let hops = 0;
      while (cur) {
        hops++;
        if (target === cur.v) {
          snapOf(root, { hit: cur.id, msg: `✓ ${target} found · ${hops} hops · ${hops} comparisons`, note: NOTE_SEARCH });
          break;
        }
        const goLeft = target < cur.v;
        const nxt: N | null = goLeft ? cur.l : cur.r;
        snapOf(root, {
          hot: cur.id,
          msg: nxt ? `${target} ${goLeft ? '<' : '>'} ${cur.v} → ${goLeft ? 'left' : 'right'}` : `${target} → ${goLeft ? 'left' : 'right'} of ${cur.v} is ∅ — nobody home`,
          note: NOTE_SEARCH,
        });
        cur = nxt;
      }
    }
  }

  if (kind === 'traverse') {
    let root: N | null = null;
    for (const v of SEED) {
      root = insertLive(root, v, nid, () => undefined, () => undefined);
    }
    const visit = (n: N | null, ord: 'in' | 'pre' | 'post', out: number[]): void => {
      if (!n) return;
      const emit = () => {
        out.push(n.v);
        snapOf(root, { hot: n.id, out: [...out], order: ord, msg: `${ord === 'in' ? 'in' : ord === 'pre' ? 'pre' : 'post'} ⟶ ${n.v}`, note: NOTE_TRAVERSE });
      };
      if (ord === 'pre') emit();
      visit(n.l, ord, out);
      if (ord === 'in') emit();
      visit(n.r, ord, out);
      if (ord === 'post') emit();
    };
    const orders: { ord: 'in' | 'pre' | 'post'; label: string }[] = [
      { ord: 'in', label: 'INORDER = left · root · right (the sorted ghost appears)' },
      { ord: 'pre', label: 'PREORDER = root · left · right (a rebuild recipe)' },
      { ord: 'post', label: 'POSTORDER = left · right · root (children first)' },
    ];
    for (const { ord, label } of orders) {
      snapOf(root, { out: [], order: ord, msg: label, note: NOTE_TRAVERSE });
      visit(root, ord, []);
    }
  }

  if (kind === 'rotate') {
    // phase 1 — RR imbalance: 1 → 2 → 3, one left rotation at the root fixes it
    let root: N | null = null;
    for (const v of [1, 2, 3]) {
      if (!root) {
        root = { id: nid(), v, l: null, r: null };
        snapOf(root, { hit: root.id, msg: `⤵ ${v}`, note: NOTE_ROTATE });
        continue;
      }
      root = insertLive(root, v, nid, () => undefined, (placed) => snapOf(root, { hit: placed.id, msg: `⤵ ${v}`, note: NOTE_ROTATE }));
    }
    // left rotation at root: pivot = root.r
    {
      const pivot = root!.r!;
      root!.r = pivot.l;
      pivot.l = root;
      root = pivot;
      snapOf(root, { rotated: 'L', hot: root.id, msg: '↺ LEFT rotation at 1 — three stairs become one chairlift', note: NOTE_ROTATE });
    }
    // phase 2 — LR imbalance: fresh tree 10, 5, 8
    let root2: N | null = null;
    for (const v of [10, 5, 8]) {
      if (!root2) {
        root2 = { id: nid(), v, l: null, r: null };
        snapOf(root2, { hit: root2.id, msg: `⤵ ${v} (fresh tree)`, note: NOTE_ROTATE });
        continue;
      }
      root2 = insertLive(root2, v, nid, () => undefined, (placed) => snapOf(root2, { hit: placed.id, msg: `⤵ ${v} (fresh tree)`, note: NOTE_ROTATE }));
    }
    // LR: left-rotate at the left child (5), then right-rotate at the root (10)
    {
      const child = root2!.l!;
      const pivotL = child.r!;
      child.r = pivotL.l;
      pivotL.l = child;
      root2!.l = pivotL;
      snapOf(root2, { rotated: 'L', hot: child.id, msg: '↺ step 1 of LR: LEFT rotation at 5 — turn the knee into an elbow', note: NOTE_ROTATE });
      const pivotR = root2!.l!;
      root2!.l = pivotR.r;
      pivotR.r = root2;
      root2 = pivotR;
      snapOf(root2, { rotated: 'R', hot: root2.id, msg: '↻ step 2 of LR: RIGHT rotation at 10 — 8 rules a balanced three', note: NOTE_ROTATE });
    }
  }

  return steps;
}
