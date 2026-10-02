/** DSA Lab engine: count the work, don't guess it — probes, comparisons, growth. */

export interface ProbeRun {
  kind: 'linear' | 'binary';
  probes: number[]; // index sequence, in order
}

/** Linear search from the left until target index is hit. */
export function linearProbes(n: number, target: number): ProbeRun {
  const probes: number[] = [];
  for (let i = 0; i <= Math.min(target, n - 1); i++) probes.push(i);
  return { kind: 'linear', probes };
}

/** Classic binary search: lo..hi inclusive, floor mid. */
export function binaryProbes(n: number, target: number): ProbeRun {
  const probes: number[] = [];
  let lo = 0;
  let hi = n - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    probes.push(mid);
    if (mid === target) break;
    if (mid < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return { kind: 'binary', probes };
}

/** Painful worst case: reversed input, plain nested-loop bubble sort. */
export function bubbleOps(n: number): { comparisons: number; swaps: number } {
  const a = Array.from({ length: n }, (_, i) => n - i); // n, n-1, …, 1
  let comparisons = 0;
  let swaps = 0;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      comparisons++;
      if (a[j] > a[j + 1]) {
        const t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
        swaps++;
      }
    }
  }
  return { comparisons, swaps };
}

/** Deterministic PRNG so every visitor (and every test) sees the same shuffle. */
export function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Real merge sort instrumented: comparisons + element writes, reproducible input. */
export function mergeRun(n: number, seed = 42): { comparisons: number; writes: number; sorted: number[] } {
  const rnd = mulberry32(seed);
  const src = Array.from({ length: n }, () => Math.floor(rnd() * 1000));
  const buf = new Array(n).fill(0);
  let comparisons = 0;
  let writes = 0;

  function sort(lo: number, hi: number) {
    if (hi - lo <= 1) return;
    const mid = (lo + hi) >> 1;
    sort(lo, mid);
    sort(mid, hi);
    let i = lo;
    let j = mid;
    let k = lo;
    while (i < mid && j < hi) {
      comparisons++;
      if (src[i] <= src[j]) buf[k++] = src[i++]; // <= keeps it stable
      else buf[k++] = src[j++];
      writes++;
    }
    while (i < mid) { buf[k++] = src[i++]; writes++; }
    while (j < hi) { buf[k++] = src[j++]; writes++; }
    for (let p = lo; p < hi; p++) {
      src[p] = buf[p];
      writes++;
    }
  }
  sort(0, n);
  return { comparisons, writes, sorted: src };
}

/** Textbook merge bound for evenly split work: n·⌈log2 n⌉ comparisons. */
export function mergeUpperBound(n: number): number {
  return n * Math.max(1, Math.ceil(Math.log2(Math.max(n, 1))));
}

export interface GrowthRow {
  n: number;
  constant: number; // O(1): one array index
  log: number; // O(log n): binary search probes
  linear: number; // O(n): full scan
  nlogn: number; // O(n log n): good sort
  quadratic: number; // O(n²): all pairs
}

export function growthRow(n: number): GrowthRow {
  return {
    n,
    constant: 1,
    log: Math.max(1, Math.ceil(Math.log2(n))),
    linear: n,
    nlogn: n * Math.max(1, Math.ceil(Math.log2(n))),
    quadratic: n * n,
  };
}

export function growthTable(ns: number[]): GrowthRow[] {
  return ns.map(growthRow);
}

/** The families the lab compares, in the order beginners meet them. */
export const GROWTH_FAMILIES: { id: string; en: string; bn: string }[] = [
  { id: 'constant', en: 'O(1) — one array index', bn: 'O(1) — একটি অ্যারে-ইনডেক্স' },
  { id: 'log', en: 'O(log n) — halving search', bn: 'O(log n) — অর্ধেক-করা সার্চ' },
  { id: 'linear', en: 'O(n) — one honest pass', bn: 'O(n) — একটি সৎ পাস' },
  { id: 'nlogn', en: 'O(n log n) — divide & merge', bn: 'O(n log n) — ভাগ ও মার্জ' },
  { id: 'quadratic', en: 'O(n²) — every pair shakes hands', bn: 'O(n²) — প্রতি জোড়া করমর্দন' },
];
