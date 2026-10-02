/** Pure step-generator for the Heap lab — four scenes:
 *  build:   sift-up — the queue hub's priority values finally get their machine
 *  serve:   pop the throne, last citizen takes the crown, sift down to repair
 *  heapify: bottom-up construction — O(n) because most nodes fall short distances
 *  topk:    the interview machine — a size-3 MIN-heap interrogates a whole stream
 *
 *  The heap is a complete binary tree LIVING IN AN ARRAY:
 *  parent(i) = (i−1)>>1   left(i) = 2i+1   right(i) = 2i+2
 *  Vow (max-mode): every parent outranks its children. Partial order only —
 *  the throne knows the loudest alive; nobody else is sorted about anything. */

export interface HStep {
  arr: number[];
  n: number;                    // heap occupies arr[0..n−1]; beyond is already-served territory
  mode: 'max' | 'min';
  hot?: number;                 // index under examination
  hot2?: number;                // the compared partner (parent/child)
  swapped?: [number, number];   // indices that just exchanged chairs
  out?: number[];               // served sequence so far
  sift?: 'up' | 'down';
  settled?: boolean;            // the vow provably holds for arr[0..n−1] right now
  msg: string;
  note: { en: string; bn: string };
}
export type HeapKind = 'build' | 'serve' | 'heapify' | 'topk';

/** In max-mode a outranks b iff a > b; flipped in min-mode. */
const beats = (mode: 'max' | 'min', a: number, b: number) => (mode === 'max' ? a > b : a < b);

export function heapSteps(kind: HeapKind): HStep[] {
  const steps: HStep[] = [];

  const NOTE_BUILD = {
    en: 'Newcomers land at the first free chair (the array’s tail keeps the tree complete), then sift UP: compare with the parent — outrank and swap, or stand down. At most height-many comparisons: O(log n) per citizen, and the father formula (i−1)>>1 is the whole escalator.',
    bn: 'নবাগত বসে প্রথম খালি চেয়ারে (অ্যারের লেজ গাছকে সম্পূর্ণ রাখে), তারপর ঊর্ধ্ব-ছাঁকাই: অভিভাবকের সঙ্গে তুলনা — জোরালো হলে অদল, নইলে অবস্থানে থামো। সর্বোচ্চ উচ্চতা-সংখ্যক তুলনা: নাগরিকপ্রতি O(log n), আর (i−1)>>1 পিতৃ-সূত্রই পুরো এস্কেলেটর।',
  };
  const NOTE_SERVE = {
    en: 'Serving is throne eviction + repair: the most-urgent leaves, the LAST citizen is promoted to the throne (strictly temporary, by contiguity not merit), then sifts DOWN — always exchanging with the strongest child, because promoting the weaker one would commit the very crime we are repairing. Root answers in O(1); each repair pays O(log n).',
    bn: 'পরিবেশন হলো সিংহাসন-উচ্ছেদ + মেরামত: জরুরিতম বিদায় নেয়, শেষ নাগরিক সিংহাসনে উন্নীত হয় (কঠোরভাবে সাময়িক — যোগ্যতায় নয়, সংলগ্নতায়), তারপর নিম্ন-ছাঁকাই — সর্বদা শক্তিশালী-তম সন্তানের সঙ্গে অদল, কারণ দুর্বলটিকে তুললে সেই অপরাধই হতো, যা মেরামত চলছে। মূল উত্তর দেয় O(1)-এ; প্রতি মেরামত দেয় O(log n)।',
  };
  const NOTE_HEAPIFY = {
    en: 'The algebraic ambush: skip the insert-n-times ritual. Freeze the RAW array, then sift down every parent bottom-up (all leaves are free — no children to outrank). Most nodes live near the floor and fall only a step or two; the sum of falls is ≈ 2n. Heapify costs O(n) — cheaper than n sift-ups at O(n log n), and the proof is one sentence: tall trees have few residents.',
    bn: 'বীজগাণিতিক অ্যামবুশ: n-বার-সন্নিবেশ অনুষ্ঠান বাদ দিন। কাঁচা অ্যারে হিমায়িত করুন, তারপর নীচ থেকে প্রতি অভিভাবক নিম্ন-ছাঁকাই (সব পাতা ফ্রি — জোরালোপনার সন্তান নেই)। বেশিরভাগ নোড বাস করে মেঝের কাছে, পড়ে মাত্র এক-দুই ধাপ; পতন-সমষ্টি ≈ 2n। Heapify খরচ করে O(n) — n ছাঁকাইয়ের O(n log n)-এর চেয়ে সস্তা, আর প্রমাণ এক বাক্য: লম্বা গাছে বাসিন্দা কম।',
  };
  const NOTE_TOPK = {
    en: 'The interview machine: a size-3 MIN-heap with the rule “only enter if you storm the throne.” Small fry drown at the door in O(1); replacers pay one sift-down of O(log k). Nine citizens, three chairs, entire stream interrogated for the top-3 — with memory shaped like a thermos, not a warehouse.',
    bn: 'সাক্ষাৎকার-যন্ত্র: আকার-৩ MIN-হিপ, বিধান “কেবল সিংহাসন দখল করলে প্রবেশ।” ছোটমাছ ডুবে যায় দরজায় O(1)-এ; দখলদার দেয় একটি নিম্ন-ছাঁকাই O(log k)। নয় নাগরিক, তিন চেয়ার, পুরো ধারা জিজ্ঞাসিত top-3-এর জন্য — এমন মেমরিতে যা থার্মসের আকৃতির, গুদামের নয়।',
  };

  const push = (
    arr: number[],
    n: number,
    mode: 'max' | 'min',
    extra: Partial<HStep>,
  ): void => {
    steps.push({ arr: [...arr], n, mode, msg: extra.msg ?? '', note: extra.note ?? NOTE_BUILD, ...extra });
  };

  /** Shared sift-down walker: pushes one snapshot per comparison decision / swap. */
  const siftDown = (
    arr: number[],
    n: number,
    mode: 'max' | 'min',
    i0: number,
    note: { en: string; bn: string },
    settleMsg: (i: number) => string,
    markSettled = true,
  ): void => {
    let i = i0;
    for (;;) {
      const l = 2 * i + 1;
      const r = l + 1;
      if (l >= n) {
        push(arr, n, mode, { settled: markSettled || undefined, msg: settleMsg(i), note });
        return;
      }
      const c = r < n && beats(mode, arr[r], arr[l]) ? r : l;
      if (beats(mode, arr[c], arr[i])) {
        const a = arr[i];
        const b = arr[c];
        [arr[i], arr[c]] = [arr[c], arr[i]];
        push(arr, n, mode, {
          hot: c, hot2: i, swapped: [c, i], sift: 'down',
          msg: `${b} outranks ${a} — swap ⇅ (strongest child rises)`, note,
        });
        i = c;
      } else {
        push(arr, n, mode, { hot: i, hot2: c, settled: markSettled || undefined, msg: `${arr[i]} already outranks the floor below — stop`, note });
        return;
      }
    }
  };

  /** Shared sift-up walker. */
  const siftUp = (
    arr: number[],
    mode: 'max' | 'min',
    i0: number,
    note: { en: string; bn: string },
  ): void => {
    let i = i0;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (beats(mode, arr[i], arr[p])) {
        const a = arr[i];
        const b = arr[p];
        [arr[i], arr[p]] = [arr[p], arr[i]];
        push(arr, arr.length, mode, {
          hot: i, hot2: p, swapped: [i, p], sift: 'up',
          msg: `${b} outranks ${a} — swap ⇅ toward the throne`, note,
        });
        i = p;
      } else {
        push(arr, arr.length, mode, { hot: i, hot2: p, settled: true, msg: `vow holds at [${i}]: parent already outranks — stand down`, note });
        return;
      }
    }
    push(arr, arr.length, mode, { hot: 0, settled: true, msg: `reached the throne itself — nothing above to outrank`, note });
  };

  if (kind === 'build') {
    // the queues hub values, at last given their machine: 1,2,5 then the sirens 9 and boss 8
    const arr: number[] = [];
    for (const v of [1, 2, 5, 9, 8]) {
      arr.push(v);
      push(arr, arr.length, 'max', { hot: arr.length - 1, msg: `⤵ ${v} lands at index ${arr.length - 1}`, note: NOTE_BUILD });
      siftUp(arr, 'max', arr.length - 1, NOTE_BUILD);
    }
  }

  if (kind === 'serve') {
    const hp = [9, 8, 2, 1, 5]; // exactly the build scene's final shape
    let n = hp.length;
    const out: number[] = [];
    push(hp, n, 'max', { settled: true, msg: 'throne answers in O(1) — but every eviction owes a repair', note: NOTE_SERVE });
    while (n > 0) {
      const top = hp[0];
      [hp[0], hp[n - 1]] = [hp[n - 1], hp[0]];
      out.push(top);
      n--;
      push(hp, n, 'max', {
        hot: n, out: [...out],
        msg: n > 0 ? `⇠ serve ${top} · last citizen promoted to the throne (temporary!)` : `⇠ serve ${top} · the hall stands empty`,
        note: NOTE_SERVE,
      });
      if (n > 0) {
        siftDown(hp, n, 'max', 0, NOTE_SERVE, (i) => `index ${i} has no children below — the vow is quiet again`);
      }
    }
  }

  if (kind === 'heapify') {
    const arr = [3, 9, 2, 1, 4, 5, 8];
    const n = arr.length;
    push(arr, n, 'max', { msg: 'a scattered world — vowless, build it bottom-up', note: NOTE_HEAPIFY });
    push(arr, n, 'max', {
      hot: 3,
      msg: `leaves ⌊n/2⌋..n−1 = indices 3,4,5,6 sit FREE: no children to outrank — skip half the array instantly`,
      note: NOTE_HEAPIFY,
    });
    for (let i = (n >> 1) - 1; i >= 0; i--) {
      push(arr, n, 'max', { hot: i, msg: `sift down from index ${i} (value ${arr[i]})`, note: NOTE_HEAPIFY });
      // intermediate settle claims cover only this subtree — do NOT brand them `settled`
      siftDown(arr, n, 'max', i, NOTE_HEAPIFY, () => `subtree rooted at ${i} is heap-honest now`, false);
    }
    push(arr, n, 'max', { settled: true, msg: 'whole array heap-honest · falls summed to ≈ 2n, not n·log n', note: NOTE_HEAPIFY });
  }

  if (kind === 'topk') {
    const K = 3;
    const heap: number[] = [];
    push(heap, 0, 'min', { msg: `size-${K} MIN-heap · rule: enter only by storming the throne`, note: NOTE_TOPK });
    for (const v of [4, 1, 7, 2, 9, 3, 8, 5, 6]) {
      if (heap.length < K) {
        heap.push(v);
        push(heap, heap.length, 'min', { hot: heap.length - 1, msg: `⤵ ${v} fills chair ${heap.length - 1}`, note: NOTE_TOPK });
        siftUp(heap, 'min', heap.length - 1, NOTE_TOPK);
      } else if (v <= heap[0]) {
        // gate logic: only a LARGER citizen storms the min-heap throne
        push(heap, heap.length, 'min', { hot: 0, msg: `${v} vs throne ${heap[0]}: drowned at the door · O(1) verdict`, note: NOTE_TOPK });
      } else {
        const evicted = heap[0];
        heap[0] = v;
        push(heap, heap.length, 'min', {
          hot: 0, msg: `${v} storms the throne — ${evicted} evicted, repair downward`, note: NOTE_TOPK,
        });
        siftDown(heap, heap.length, 'min', 0, NOTE_TOPK, () => 'the gatekeepers stand honest again');
      }
    }
    const sealed = [...heap].sort((a, b) => b - a).join(', ');
    push(heap, heap.length, 'min', { settled: true, msg: `top-${K} sealed = {${sealed}} · three chairs interrogated a nine-deep stream`, note: NOTE_TOPK });
  }

  return steps;
}
