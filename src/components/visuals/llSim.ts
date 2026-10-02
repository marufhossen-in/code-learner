/** Linked List Lab engine: pure step generation for traverse / insert / delete / reverse.
 *  Nodes live in a stable pool addressed by id; `head` is a pointer (id or null).
 *  Every step carries pointer labels (head, p, prev, cur, tmp, fresh…) so the UI can
 *  render the famous dances without ever mutating shared state.
 */

export interface LlNode {
  id: number;
  value: string;
  next: number | null;
}

export interface LlPtr {
  name: string;
  at: number | null;
}

export interface LlStep {
  nodes: LlNode[];          // full pool; freed nodes are REMOVED from the pool on their gc step
  head: number | null;
  ptrs: LlPtr[];            // labeled pointers (excluding head, which has its own field)
  focus: number | null;     // node receiving the spotlight this step
  freedRemoved?: number[];  // ids garbage-collected on exactly this step
  note: { en: string; bn: string };
}

export type LlOp =
  | { kind: 'traverse'; target: number }
  | { kind: 'insertAt'; index: number; value: string }
  | { kind: 'deleteAt'; index: number }
  | { kind: 'reverse' };

/** Follow the chain from head and return the ids in list order. */
export function collect(head: number | null, nodes: LlNode[]): number[] {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const out: number[] = [];
  const seen = new Set<number>();
  let cur = head;
  while (cur !== null) {
    if (seen.has(cur)) throw new Error('cycle detected');
    seen.add(cur);
    out.push(cur);
    const node = byId.get(cur);
    if (!node) throw new Error('dangling next → unknown id');
    cur = node.next;
  }
  return out;
}

interface Builder {
  pool: Map<number, LlNode>;
  order: number[];      // authoritative list order (ids)
  nextId: number;
  head: number | null;
  steps: LlStep[];
}

function init(initial: string[]): Builder {
  const pool = new Map<number, LlNode>();
  const order: number[] = [];
  initial.forEach((value, i) => {
    pool.set(i, { id: i, value, next: i + 1 < initial.length ? i + 1 : null });
    order.push(i);
  });
  return {
    pool,
    order,
    nextId: initial.length,
    head: initial.length ? 0 : null,
    steps: [],
  };
}

/** Apply `order` back onto next-links so pool and order can never disagree. */
function relink(b: Builder): void {
  b.order.forEach((id, i) => {
    const n = b.pool.get(id)!;
    n.next = i + 1 < b.order.length ? b.order[i + 1] : null;
  });
  b.head = b.order.length ? b.order[0] : null;
}

interface Snap {
  ptrs?: LlPtr[];
  focus?: number | null;
  gc?: number[];
  note: { en: string; bn: string };
}

function snap(b: Builder, s: Snap): void {
  const extra: LlNode[] = [];
  const pool = new Map(b.pool);
  if (s.gc) {
    for (const id of s.gc) {
      const n = pool.get(id);
      if (n) extra.push({ ...n }); // one last frame with the freed ghost still present
    }
  }
  b.steps.push({
    nodes: [...pool.values(), ...extra].map((n) => ({ ...n })),
    head: b.head,
    ptrs: (s.ptrs ?? []).map((p) => ({ ...p })),
    focus: s.focus ?? null,
    freedRemoved: s.gc,
    note: s.note,
  });
  if (s.gc) for (const id of s.gc) b.pool.delete(id);
}

function walk(b: Builder, targetIndex: number, ptrName: string, noteEn: string, noteBn: string): number | null {
  // emits one step per hop; returns the id at targetIndex (or null for past-the-end)
  for (let i = 0; i <= targetIndex; i++) {
    const id = b.order[i] ?? null;
    if (id === null) {
      snap(b, {
        ptrs: [{ name: ptrName, at: null }],
        focus: null,
        note: {
          en: `${ptrName} stepped past the last node — null. The chain has ended; there is no index ${targetIndex}.`,
          bn: `${ptrName} শেষ নোডের ওপারে পা রাখল — null। শিকল শেষ; ইনডেক্স ${targetIndex} বলে কিছু নেই।`,
        },
      });
      return null;
    }
    snap(b, {
      ptrs: [{ name: ptrName, at: id }],
      focus: id,
      note:
        i === 0
          ? { en: `${ptrName} starts at head. Not a search — a walk. Every address is earned by hopping.`, bn: `${ptrName} head থেকে যাত্রা শুরু। এটা খোঁজ নয়, হাঁটা। প্রতিটি ঠিকানা উপার্জন করতে হয় লাফে লাফে।` }
          : i === targetIndex
            ? { en: noteEn, bn: noteBn }
            : { en: `${ptrName} hops: node ${i} answers “next?” — the only question a linked list knows.`, bn: `${ptrName} লাফ: নোড ${i} উত্তর দেয় “পরেরটা কে?” — লিংকড-লিস্টের জানা একমাত্র প্রশ্ন।` },
    });
    void id;
  }
  return b.order[targetIndex] ?? null;
}

/** Generate the full deterministic step list for one operation on the initial list. */
export function llSteps(initial: string[], op: LlOp): LlStep[] {
  const b = init(initial);
  snap(b, {
    note: {
      en: 'The list as born: nodes scattered in memory, chained only by next-pointers. head holds the only door in.',
      bn: 'জন্মসূত্রে লিস্ট: নোড ছড়ানো স্মৃতিতে, শিকল কেবল next-পয়েন্টারে। ভেতরে ঢোকার একমাত্র দরজা head-এর হাতে।',
    },
  });

  switch (op.kind) {
    case 'traverse': {
      if (op.target < b.order.length) {
        walk(b, op.target, 'p',
          `Arrived: index ${op.target} in ${op.target + 1} hops. The bill is O(position) — position itself is the price.`,
          `পৌঁছে গেছি: ইনডেক্স ${op.target} — ${op.target + 1} লাফে। বিল হলো O(অবস্থান) — অবস্থান-ই মূল্য।`);
      } else {
        walk(b, op.target, 'p', '', '');
        snap(b, {
          note: {
            en: 'p is null: reading p.value now is the classic TypeError. Length checks are not ceremony out here — they are physics.',
            bn: 'p এখন null: এখন p.value পড়লে সেই চিরপরিচিত TypeError। এখানে দৈর্ঘ্য-চেক আনুষ্ঠানিকতা নয় — পদার্থবিদ্যা।',
          },
        });
      }
      break;
    }

    case 'insertAt': {
      const idx = Math.min(op.index, b.order.length);
      const fresh = b.nextId++;
      b.pool.set(fresh, { id: fresh, value: op.value, next: null });
      if (idx === 0) {
        snap(b, {
          ptrs: [{ name: 'fresh', at: fresh }],
          focus: fresh,
          note: { en: 'Insert at the FRONT — the list’s one true bargain: no walk at all.', bn: 'সামনে ইনসার্ট — লিস্টের একমাত্র সওদা: কোনো হাঁটাই লাগে না।' },
        });
        b.pool.get(fresh)!.next = b.head;
        snap(b, {
          ptrs: [{ name: 'fresh', at: fresh }],
          focus: fresh,
          note: { en: 'Stitch one: fresh.next = head — the newcomer takes the whole chain in hand FIRST.', bn: 'প্রথম সেলাই: fresh.next = head — নবাগত আগে পুরো শিকল হাতে নিচ্ছে।' },
        });
        b.order.unshift(fresh);
        relink(b);
        snap(b, {
          focus: fresh,
          note: { en: 'Stitch two: head = fresh. O(1), done. Arrays charge O(n) for this same sentence.', bn: 'দ্বিতীয় সেলাই: head = fresh। O(1), শেষ। একই বাক্যের জন্য অ্যারে O(n) নেয়।' },
        });
      } else {
        walk(b, idx - 1, 'p',
          `p holds the node at index ${idx - 1} — the insertion court. Surgery happens here.`,
          `p ধরে আছে ইনডেক্স ${idx - 1}-এর নোড — ইনসারশনের অস্ত্রোপচার-স্থল। এখানেই কাজ।`);
        snap(b, {
          ptrs: [{ name: 'p', at: b.order[idx - 1] }, { name: 'fresh', at: fresh }],
          focus: fresh,
          note: { en: 'fresh is born with an empty hand (next = null). It has claimed nothing yet.', bn: 'fresh জন্মাল খালি হাতে (next = null)। এখনো কিছুই দাবি করেনি।' },
        });
        const after = b.order[idx] ?? null;
        b.pool.get(fresh)!.next = after;
        snap(b, {
          ptrs: [{ name: 'p', at: b.order[idx - 1] }, { name: 'fresh', at: fresh }],
          focus: fresh,
          note: {
            en: 'Stitch ONE: fresh.next = p.next — grasp the rest of the chain BEFORE letting anything go. This order is the whole law.',
            bn: 'প্রথম সেলাই: fresh.next = p.next — কিছু ছাড়ার আগেই বাকি শিকল হাতে নিন। এই ক্রম-ই পুরো বিধান।',
          },
        });
        b.order.splice(idx, 0, fresh);
        relink(b);
        snap(b, {
          ptrs: [{ name: 'p', at: b.order[idx - 1] }, { name: 'fresh', at: fresh }],
          focus: fresh,
          note: {
            en: 'Stitch TWO: p.next = fresh — the court yields its pointer. New citizen, fully registered, and the rest of the list never noticed the surgery.',
            bn: 'দ্বিতীয় সেলাই: p.next = fresh — অস্ত্রোপচার-স্থল পয়েন্টার ছেড়ে দিল। নতুন নাগরিক, সম্পূর্ণ নিবন্ধিত; বাকি লিস্ট অস্ত্রোপচার টেরই পেল না।',
          },
        });
      }
      snap(b, {
        note: { en: `List length ${b.order.length}. The walk was O(${idx > 0 ? idx : 1}); the stitches were O(1). A list never shifts anyone.`, bn: `তালিকা ${b.order.length} লম্বা। হাঁটা ছিল O(${idx > 0 ? idx : 1}); সেলাই ছিল O(1)। লিস্ট কাউকে এক চুলও সরায় না।` },
      });
      break;
    }

    case 'deleteAt': {
      if (op.index >= b.order.length || b.order.length === 0) {
        snap(b, { note: { en: 'Nothing to delete — the chain is shorter than the warrant.', bn: 'ডিলিট করার কিছু নেই — পরোয়ানার চেয়ে শিকল ছোট।' } });
        break;
      }
      const victim = b.order[op.index];
      if (op.index === 0) {
        snap(b, {
          focus: victim,
          note: { en: 'Deleting head itself: point head at head.next and the old gatekeeper simply falls out of the world.', bn: 'head-ই ডিলিট: head-কে head.next-এ নিন — পুরনো দরুয়ান জগৎ থেকেই পড়ে গেল।' },
        });
        b.order.shift();
        relink(b);
        snap(b, {
          gc: [victim],
          note: { en: 'head moved on; the old head is unreachable. In JS/Python the garbage collector comes for it — reachability is life.', bn: 'head এগিয়ে গেছে; পুরনো head এখন অপৌঁছনীয়। JS/Python-এ গার্বেজ-কালেক্টর এসে নিয়ে যায় — পৌঁছানো-যাওয়াই জীবন।' },
        });
      } else {
        walk(b, op.index - 1, 'p',
          `p holds index ${op.index - 1} — the node BEFORE the victim. Deletes are performed from the court, never the victim.`,
          `p ধরে ইনডেক্স ${op.index - 1} — ভুক্তভোগীর আগের নোড। ডিলিট হয় অস্ত্রোপচার-স্থল থেকে, ভুক্তভোগী থেকে নয়।`);
        b.order.splice(op.index, 1);
        const pId = b.order[op.index - 1];
        b.pool.get(pId)!.next = b.order[op.index] ?? null; // unlink, victim still pointing at rest for one frame
        b.head = b.order[0];
        snap(b, {
          ptrs: [{ name: 'p', at: pId }, { name: 'victim', at: victim }],
          focus: victim,
          note: {
            en: 'p.next = victim.next — the pointer vaults clean over the victim. The chain no longer acknowledges it.',
            bn: 'p.next = victim.next — পয়েন্টার ভুক্তভোগীর মাথা উড়ে গেল। শিকল আর তাকে স্বীকৃতি দেয় না।',
          },
        });
        b.pool.get(victim)!.next = null;
        snap(b, {
          gc: [victim],
          ptrs: [{ name: 'p', at: pId }],
          note: {
            en: 'Unreachable means gone: collector reclaims the node. One hop to court, one stitch, zero shifting — that is the whole receipt.',
            bn: 'অপৌঁছনীয় মানেই অনুপস্থিত: কালেক্টর নোড নিয়ে গেল। অস্ত্রোপচার-স্থলে এক হাঁটা, এক সেলাই, সরানো শূন্য — রসিদ এইটুকুই।',
          },
        });
      }
      snap(b, {
        note: { en: `List length ${b.order.length}. Nothing below the court moved an inch — compare with the array’s mass eviction.`, bn: `তালিকা ${b.order.length} লম্বা। অস্ত্রোপচার-স্থলের নিচে কিছুই এক চুল নড়েনি — অ্যারের সামূহিক উচ্ছেদের সঙ্গে তুলনা করুন।` },
      });
      break;
    }

    case 'reverse': {
      let prev: number | null = null;
      let cur: number | null = b.head;
      if (cur === null) {
        snap(b, { note: { en: 'Empty list reversed is an empty list. The dance needs at least one dancer.', bn: 'খালি লিস্টের উল্টোও খালি লিস্ট। নাচে অন্তত এক নৃত্যশিল্পী লাগে।' } });
        break;
      }
      const newOrder = [...b.order].reverse();
      snap(b, {
        ptrs: [{ name: 'prev', at: prev }, { name: 'cur', at: cur }],
        focus: cur,
        note: {
          en: 'The three-pointer dance begins: prev=null behind, cur at head. Every arrow will be turned around, one node per refrain.',
          bn: 'তিন-আঙুলের নাচ শুরু: পেছনে prev=null, সামনে cur=head। প্রতিটি তীর ঘুরবে — প্রতি সুরেলায় একটি নোড।',
        },
      });
      let i = 0;
      while (cur !== null) {
        const nxt: number | null = b.pool.get(cur)!.next;
        snap(b, {
          ptrs: [{ name: 'prev', at: prev }, { name: 'cur', at: cur }, { name: 'tmp', at: nxt }],
          focus: cur,
          note: {
            en: 'tmp = cur.next — SAVE the rest of the chain in a hand before touching a single arrow. Forget this and the tail is lost in the dark.',
            bn: 'tmp = cur.next — কোনো তীর ছোঁয়ার আগে বাকি শিকল এক হাতে বাঁচিয়ে নিন। ভুললে লেজ অন্ধকারে হারিয়ে যাবে।',
          },
        });
        b.pool.get(cur)!.next = prev;
        snap(b, {
          ptrs: [{ name: 'prev', at: prev }, { name: 'cur', at: cur }, { name: 'tmp', at: nxt }],
          focus: cur,
          note: {
            en: 'cur.next = prev — the arrow FLIPS. The node now points backward, toward everything already reversed.',
            bn: 'cur.next = prev — তীর ঘুরে গেল। নোড এখন দেখে পেছনে, উল্টে-যাওয়া অংশের দিকে।',
          },
        });
        prev = cur;
        cur = nxt;
        i++;
        snap(b, {
          ptrs: [{ name: 'prev', at: prev }, { name: 'cur', at: cur }],
          focus: prev,
          note: {
            en: `prev and cur advance: ${i} of ${b.order.length} arrows turned. Invariant: everything behind prev is reversed, everything from cur onward is untouched.`,
            bn: `prev আর cur এগিয়ে গেল: ${b.order.length}-এর মধ্যে ${i}টি তীর ঘোরানো হলো। অনবরত-সত্য: prev-এর পেছনের সব উল্টানো শেষ, cur থেকে এগিয়ে সব অচূত।`,
          },
        });
      }
      b.order = newOrder;
      relink(b);
      snap(b, {
        focus: b.head,
        note: {
          en: 'cur is null — the dance is over. head = prev, the old tail now leads. No new nodes, no copies: same dancers, opposite conga line. O(n) time, O(1) extra memory.',
          bn: 'cur এখন null — নাচ শেষ। head = prev; পুরনো লেজ এখন নেতা। নতুন নোড নেই, কপি নেই: সেই নৃত্যশিল্পী, বিপরীত কংগা-লাইন। সময় O(n), অতিরিক্ত মেমরি O(1)।',
        },
      });
      break;
    }
  }
  return b.steps;
}

/** Convenience: the id-sequence the chain spells out, for tests and renderers. */
export function chainValues(step: LlStep): string[] {
  const byId = new Map(step.nodes.map((n) => [n.id, n]));
  const seen = new Set<number>();
  const out: string[] = [];
  let cur = step.head;
  while (cur !== null) {
    if (seen.has(cur)) break;
    seen.add(cur);
    const n = byId.get(cur);
    if (!n) break;
    out.push(n.value);
    cur = n.next;
  }
  return out;
}

export const LL_BASE = ['mango', 'guava', 'lychee', 'papaya', 'jackfruit'];
