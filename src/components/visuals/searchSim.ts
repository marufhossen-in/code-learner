/** Pure step-generator for the Search lab — four lenses on one question, "where does this value live?":
 *  linear:   the door-to-door scan with early exit — honest O(n), works on ANY row
 *  binary:   the halving machine on the sorted strip — each probe retires half the suspects
 *  boundary: lower_bound discipline — first cell ≥ x; half-open window [lo, hi) and mid rounding
 *            choose which half dies, never letting an off-by-one sign the warrant
 *  interp:   interpolation on the squares strip — guess by value proportion, fall like a stone
 *
 *  lo/hi define the LIVE window; linear keeps lo = -1 (whole strip lives until found).
 *  probes record index + outcome; found seals the seat. */

export type ProbeOut = 'low' | 'high' | 'hit' | 'boundary';
export interface SStep {
  arr: number[];
  lo: number;                       // live window start (linear: -1)
  hi: number;                       // live window end, INCLUSIVE except boundary scene (exclusive)
  mid?: number;                     // probe seat this step
  out?: ProbeOut;
  found?: number;                   // sealed answer index
  target: number;
  comparisons: number;
  msg: string;
  note: { en: string; bn: string };
}
export type SearchKind = 'linear' | 'binary' | 'boundary' | 'interp';

const STRIP = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63];
const SQUARES = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

const NOTE_LINEAR = {
  en: 'The door-to-door scan needs no vow from the world: any row, any order, any duplicates — walk seats 0, 1, 2 until the value answers or the row ends. One early exit honors thrift (found ⇒ stop), nothing else is claimed. O(n) worst, O(n/2) average, O(1) if luck sits at chair zero. When rows are tiny or unsorted-in-place, this is not the fallback; this is the machine.',
  bn: 'দুয়ারে-দুয়ারে-যাওয়া স্ক্যান জগতের কাছে কোনো শপথ চায় না: যে-কোনো সারি, যে-কোনো ক্রম, ডুপ্লিকেটসহ — চেয়ার ০, ১, ২ হেঁটে যান যতক্ষণ না মান জবাব দেয় বা সারি শেষ হয়। একটি আগে-প্রস্থান মিতব্যয়তা মানে (পাওয়া গেলে ⇒ থামুন), বাকি কিছু দাবি করা হয় না। খারাপতম O(n), গড়ে O(n/2), চেয়ার-শূন্যে ভাগ্য থাকলে O(1)। সারি ক্ষুদ্র হলে বা অসজ্জিত থাকলে, এটা বিকল্প নয়; এটাই যন্ত্র।',
};
const NOTE_BINARY = {
  en: 'The sorted vow buys the halving license: probe the middle seat — smaller target → the whole right half is dead law (every seat there is ≥ mid’s value), bigger target → the whole left half dies. One comparison retires half the suspects, so log₂(n) probes price a row that linear scans at n. The invariant IS the algorithm: target-if-present lives inside [lo, hi], always; and the window shrinking by ≥1 per probe guarantees the loop dies. Sortedness is not a courtesy — it is the entire physics.',
  bn: 'সাজানো-শপথ কিনে দেয় অর্ধেক-করণ লাইসেন্স: মাঝের চেয়ারে প্রোব — লক্ষ্য ছোটো ⇒ পুরো ডান-অর্ধ আইনত মৃত (সেখানকার প্রতি চেয়ার ≥ মাঝের মান), লক্ষ্য বড় ⇒ পুরো বাম-অর্ধ মরে। একটি তুলনা অবসর দেয় অর্ধেক সন্দেহভাজনকে, তাই log₂(n) প্রোব মূল্য দেয় এমন সারির, যেটা লিনিয়ার স্ক্যান করে n-এ। অপরিবর্তনীয়টিই অ্যালগরিদম: লক্ষ্য-উপস্থিত-হলে বাস করে [lo, hi]-এর ভেতর, সবসময়; আর জানালা প্রতি-প্রোবে ≥1 সংকুচিত হওয়াই লুপের মৃত্যুর গ্যারান্টি। সাজানো-ভাব শিষ্টাচার নয় — এটা পুরো পদার্থবিদ্যা।',
};
const NOTE_BOUNDARY = {
  en: 'lower_bound answers “the FIRST seat whose value ≥ x” — the question insertion points, dedup checks and rank queries all secretly ask. The discipline: half-open window [lo, hi), and mid rounding decides which half dies. v < x ⇒ mid and everything left of it can never host the boundary: lo = mid+1. v ≥ x ⇒ mid IS a candidate, but seats right of it might hide an earlier one: hi = mid. lo === hi is the boundary, found without any “found!” flag at all — the window collapsing to a point IS the answer. Round mid down and the law still holds; the variants only trade which seat answers ties.',
  bn: 'lower_bound উত্তর দেয় “প্রথম এমন চেয়ার যার মান ≥ x” — যে প্রশ্ন সন্নিবেশ-স্থান, নকল-যাচাই ও পদমর্যাদা-কোয়েরি গোপনে জিজ্ঞেস করে। শৃঙ্খলা: অর্ধ-খোলা জানালা [lo, hi), আর mid-র গোলাকরণ স্থির করে কোন অর্ধ মরে। v < x ⇒ mid আর তার বামের সবাই কখনো সীমানা আশ্রয় দেয় না: lo = mid+1। v ≥ x ⇒ mid প্রার্থীই, কিন্তু তার ডানে আগের কেউ লুকাতে পারে: hi = mid। lo === hi-ই সীমানা, কোনো “পেলাম!” পতাকা ছাড়াই — জানালার বিন্দুতে সংকুচন-ই উত্তর। mid নিচে গোল করলেও বিধান টিকে; প্রকারভেদ কেবল টাই-এ কোন চেয়ার জবাব দেয়, সেটুকু বদলায়।',
};
const NOTE_INTERP = {
  en: 'Interpolation halving skips counting and guesses by PROPORTION: if values spread uniformly, the target sits near (x − a[lo])/(a[hi] − a[lo])·(hi − lo) seats from lo — phonebook physics (open “S” near the end, not the middle). On the squares strip below, the guesser falls like a stone: three probes where binary needs nearly as many. But clustered keys expose the invoice: one pathological cluster (a phonebook of every surname “Smith”) degrades proportion-guessing to O(n) — the vow this machine signs is distributional, not structural, and the worst case is honest about it.',
  bn: 'ইন্টারপোলেশন অর্ধেক গুনে না, অনুমান করে অনুপাতে: মান সমানভাবে ছড়ালে লক্ষ্য বসে lo থেকে (x − a[lo])/(a[hi] − a[lo])·(hi − lo) চেয়ার দূরে — ফোনবই-পদার্থবিদ্যা (“S” খুলুন শেষের কাছে, মাঝখানে নয়)। নিচের বর্গ-সারিতে অনুমানকারী পড়ে পাথরের মতো: তিন প্রোবে যেখানে বাইনারিরও প্রায় তত লাগে। কিন্তু গুচ্ছীকৃত চাবি চালান টের পাই: একটি প্যাথোলজিক্যাল গুচ্ছ (সবাই-পদবি-“স্মিথ” ফোনবই) অনুপাত-অনুমানকে নামিয়ে দেয় O(n)-এ — এই যন্ত্র যে শপথ সই করে তা বণ্টনগত, কাঠামোগত নয়, আর খারাপতম ক্ষেত্র সেটুকুতে সৎ।',
};

export function searchSteps(kind: SearchKind): SStep[] {
  const steps: SStep[] = [];
  const base = (arr: number[], target: number, extra: Partial<SStep>): void => {
    steps.push({ arr, lo: 0, hi: arr.length - 1, comparisons: 0, target, msg: '', note: NOTE_LINEAR, ...extra });
  };

  if (kind === 'linear') {
    const target = 39;
    const n = STRIP.length;
    base(STRIP, target, {
      lo: -1, msg: `target ${target} · no vow needed — walk the seats in order, stop on answer`, note: NOTE_LINEAR,
    });
    let comps = 0;
    for (let i = 0; i < n; i++) {
      comps++;
      if (STRIP[i] === target) {
        base(STRIP, target, {
          lo: -1, mid: i, out: 'hit', found: i, comparisons: comps,
          msg: `seat ${i} answers: ${target} === ${target} — EARLY EXIT, seats ${i + 1}…${n - 1} never questioned · ${comps} comparisons`,
          note: NOTE_LINEAR,
        });
        break;
      }
      base(STRIP, target, {
        lo: -1, mid: i, out: STRIP[i] < target ? 'low' : 'high', comparisons: comps,
        msg: `seat ${i}: ${STRIP[i]} ≠ ${target} — onward (no law exploited, none needed)`,
        note: NOTE_LINEAR,
      });
    }
  }

  if (kind === 'binary') {
    const target = 43;
    let lo = 0, hi = STRIP.length - 1, comps = 0;
    base(STRIP, target, {
      lo, hi, msg: `target ${target} · the sorted strip signs the vow — the halving machine may enter`, note: NOTE_BINARY,
    });
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      comps++;
      const v = STRIP[mid];
      if (v === target) {
        base(STRIP, target, {
          lo, hi, mid, out: 'hit', found: mid, comparisons: comps,
          msg: `probe seat ${mid}: ${v} === ${target} — HIT · ${comps} comparisons priced a ${STRIP.length}-seat row (log₂16 = 4 kept its promise)`,
          note: NOTE_BINARY,
        });
        break;
      } else if (v < target) {
        base(STRIP, target, {
          lo, hi, mid, out: 'low', comparisons: comps,
          msg: `probe seat ${mid}: ${v} < ${target} → left half retires by law [${lo}…${mid}] · window [${mid + 1}…${hi}]`,
          note: NOTE_BINARY,
        });
        lo = mid + 1;
      } else {
        base(STRIP, target, {
          lo, hi, mid, out: 'high', comparisons: comps,
          msg: `probe seat ${mid}: ${v} > ${target} → right half retires by law [${mid}…${hi}] · window [${lo}…${mid - 1}]`,
          note: NOTE_BINARY,
        });
        hi = mid - 1;
      }
    }
  }

  if (kind === 'boundary') {
    const x = 30;
    let lo = 0, hi = STRIP.length; // half-open [lo, hi)
    let comps = 0;
    base(STRIP, x, {
      lo, hi, msg: `boundary question: FIRST seat with value ≥ ${x} · half-open window [0, 16) armed`, note: NOTE_BOUNDARY,
    });
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      comps++;
      const v = STRIP[mid];
      if (v < x) {
        base(STRIP, x, {
          lo, hi, mid, out: 'low', comparisons: comps,
          msg: `seat ${mid}: ${v} < ${x} — mid and its left can never host the boundary · lo = ${mid + 1}`,
          note: NOTE_BOUNDARY,
        });
        lo = mid + 1;
      } else {
        base(STRIP, x, {
          lo, hi, mid, out: 'boundary', comparisons: comps,
          msg: `seat ${mid}: ${v} ≥ ${x} — mid is a CANDIDATE, but earlier seats may hide an older boundary · hi = ${mid}`,
          note: NOTE_BOUNDARY,
        });
        hi = mid;
      }
    }
    base(STRIP, x, {
      lo, hi, found: lo, comparisons: comps,
      msg: `lo === hi === ${lo} — the window collapsed onto the FIRST seat ≥ ${x}: value ${STRIP[lo]} (and seat ${lo - 1}: ${STRIP[lo - 1]} < ${x}, so the warrant is airtight)`,
      note: NOTE_BOUNDARY,
    });
  }

  if (kind === 'interp') {
    const target = 49;
    let lo = 0, hi = SQUARES.length - 1, comps = 0;
    base(SQUARES, target, {
      lo, hi, msg: `target ${target} on the squares strip · guess by proportion, not by half — the phonebook lens`, note: NOTE_INTERP,
    });
    while (lo <= hi && SQUARES[lo] <= target && target <= SQUARES[hi]) {
      const span = SQUARES[hi] - SQUARES[lo];
      const pos = span === 0 ? lo : lo + Math.floor(((target - SQUARES[lo]) / span) * (hi - lo));
      comps++;
      const v = SQUARES[pos];
      if (v === target) {
        base(SQUARES, target, {
          lo, hi, mid: pos, out: 'hit', found: pos, comparisons: comps,
          msg: `guess seat ${pos}: ${v} === ${target} — HIT in ${comps} probes (the proportion compass landed like a stone)`,
          note: NOTE_INTERP,
        });
        break;
      } else if (v < target) {
        base(SQUARES, target, {
          lo, hi, mid: pos, out: 'low', comparisons: comps,
          msg: `guess seat ${pos}: ${v} < ${target} → retire [${lo}…${pos}] · window [${pos + 1}…${hi}], re-proportion`,
          note: NOTE_INTERP,
        });
        lo = pos + 1;
      } else {
        base(SQUARES, target, {
          lo, hi, mid: pos, out: 'high', comparisons: comps,
          msg: `guess seat ${pos}: ${v} > ${target} → retire [${pos}…${hi}] · window [${lo}…${pos - 1}], re-proportion`,
          note: NOTE_INTERP,
        });
        hi = pos - 1;
      }
    }
  }

  return steps;
}
