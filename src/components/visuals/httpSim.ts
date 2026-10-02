/**
 * The Envelope Ledger engine (http).
 *
 * One fixed conversation — twelve beats of a browser talking to an origin —
 * walked by four client laws, each answering the same protocol questions
 * differently:
 *
 *   naive       — the absent-minded browser: never stores, never revalidates,
 *                 rewrites POSTs after 302 like legacy user agents always did.
 *   conditional — the validator: keeps every ETag, revalidates every time,
 *                 pays one origin trip to buy "unchanged" certainty.
 *   layered     — the proxy clerk: honors freshness (max-age), revalidates only
 *                 when stale, rewrites on 302 (browser-reality).
 *   strict      — the method purist: same freshness discipline as layered, but
 *                 never rewrites a method on a redirect (reads 302 as 307).
 *
 * Counter-truth table (derived from the world below, pinned by tests):
 *   naive:       origin 12 hits · 122,300 origin bytes · 0 cache hits · 0×304 · 1 rewrite
 *   conditional: origin 12 · 69,300 · 0 · 2×304 · 1 rewrite
 *   layered:     origin 11 · 69,300 · 1 cache hit · 1×304 · 1 rewrite
 *   strict:      origin 11 · 69,300 · 1 cache hit · 1×304 · 0 rewrites
 */

export type HttpScene = 'naive' | 'conditional' | 'layered' | 'strict';

export type HttpVerdict =
  | 'fresh-fetch'      // first contact with a resource
  | 'refetch'          // full bytes re-taken for want of a validator/store
  | 'not-modified'     // validator honored: 304, zero body bytes
  | 'cache-hit'        // served from a fresh local/proxy seat, origin untouched
  | 'redirect'         // 3xx envelope: Location tells the next address
  | 'method-rewritten' // POST demoted to GET after 302 (legacy UA behavior)
  | 'method-kept'      // 302 read as 307 should read: same method marches on
  | 'challenge'        // 401: WWW-Authenticate names the arena
  | 'retried'          // same target, credentials now attached, 200
  | 'served';          // any routine 200 whose lesson is elsewhere

export interface HttpBeat {
  i: number;
  method: string;
  url: string;
  /** body size in bytes when a request carries one (POST etc.), else 0 */
  reqBytes: number;
  /** deterministic origin answer when the origin answers at all */
  status: number;
  bodyBytes: number;             // response body bytes (0 for 3xx-with-tiny-note, 304…)
  noteBytes?: number;            // response envelope bytes for 301/302/401 notes
  headers: { k: string; v: string }[];
  storable: boolean;
  etag?: string;                 // ETag minted when first fetched
  maxAge?: number;               // seconds the seat stays fresh
  location?: string;             // Location for redirects
  challenge?: string;            // WWW-Authenticate value
  followTo?: string;             // URL the client takes after 301/302/401 dance
}

/** The fixed 12-beat conversation. World-clock: beats 1..∞ pass enough time
 *  that the 60s style.css lease is DEAD by beat 5; the one-day logo lease is alive at beat 12. */
export const BEATS: HttpBeat[] = [
  {
    i: 1, method: 'GET', url: '/index.html', reqBytes: 0,
    status: 200, bodyBytes: 12000, storable: false,
    headers: [{ k: 'Cache-Control', v: 'no-store' }],
  },
  {
    i: 2, method: 'GET', url: '/style.css', reqBytes: 0,
    status: 200, bodyBytes: 8000, storable: true, etag: '"css-v7"', maxAge: 60,
    headers: [{ k: 'Cache-Control', v: 'max-age=60' }, { k: 'ETag', v: '"css-v7"' }],
  },
  {
    i: 3, method: 'POST', url: '/session', reqBytes: 900,
    status: 200, bodyBytes: 600, storable: false,
    headers: [{ k: 'Set-Cookie', v: 'sid=9f2; HttpOnly; SameSite=Lax' }],
  },
  {
    i: 4, method: 'GET', url: '/api/cart', reqBytes: 0,
    status: 200, bodyBytes: 400, storable: false,
    headers: [{ k: 'Cache-Control', v: 'private, no-store' }],
  },
  {
    i: 5, method: 'GET', url: '/style.css', reqBytes: 0,
    status: 200, bodyBytes: 8000, storable: true, etag: '"css-v7"', maxAge: 60,
    headers: [{ k: 'Cache-Control', v: 'max-age=60' }, { k: 'ETag', v: '"css-v7"' }],
  },
  {
    i: 6, method: 'GET', url: '/logo.png', reqBytes: 0,
    status: 301, bodyBytes: 0, noteBytes: 300, storable: true,
    headers: [{ k: 'Location', v: '/assets/logo-v2.png' }],
    location: '/assets/logo-v2.png', followTo: '/assets/logo-v2.png',
  },
  {
    i: 7, method: 'GET', url: '/assets/logo-v2.png', reqBytes: 0,
    status: 200, bodyBytes: 45000, storable: true, etag: '"logo9"', maxAge: 86400,
    headers: [{ k: 'Cache-Control', v: 'max-age=86400, immutable' }, { k: 'ETag', v: '"logo9"' }],
  },
  {
    i: 8, method: 'POST', url: '/form', reqBytes: 1500,
    status: 302, bodyBytes: 0, noteBytes: 300, storable: false,
    headers: [{ k: 'Location', v: '/thanks' }],
    location: '/thanks', followTo: '/thanks',
  },
  {
    i: 9, method: 'GET', url: '/thanks', reqBytes: 0,
    status: 200, bodyBytes: 2000, storable: false,
    headers: [{ k: 'Cache-Control', v: 'no-store' }],
  },
  {
    i: 10, method: 'GET', url: '/api/profile', reqBytes: 0,
    status: 401, bodyBytes: 0, noteBytes: 200, storable: false,
    headers: [{ k: 'WWW-Authenticate', v: 'Bearer realm="app"' }],
    challenge: 'Bearer realm="app"',
  },
  {
    i: 11, method: 'GET', url: '/api/profile', reqBytes: 0,
    status: 200, bodyBytes: 500, storable: false,
    headers: [{ k: 'Cache-Control', v: 'private, no-store' }, { k: 'Vary', v: 'Authorization' }],
  },
  {
    i: 12, method: 'GET', url: '/assets/logo-v2.png', reqBytes: 0,
    status: 200, bodyBytes: 45000, storable: true, etag: '"logo9"', maxAge: 86400,
    headers: [{ k: 'Cache-Control', v: 'max-age=86400, immutable' }, { k: 'ETag', v: '"logo9"' }],
  },
];

export interface HttpLedger {
  requests: number;      // beats the client actually wrote (all scenes: 12)
  originHits: number;    // of those, how many physically reached the origin
  originBytes: number;   // response body+note bytes that traveled origin→client
  cacheHits: number;     // beats answered entirely off the origin
  revalidations: number; // If-None-Match envelopes sent
  notModified: number;   // 304 answers received
  challenges: number;    // 401s met
  rewrites: number;      // method rewrites after 3xx (legacy behavior)
  redirects: number;     // 3xx hops followed
}

export interface HttpStep extends HttpLedger {
  i: number;
  beat: HttpBeat;
  verdict: HttpVerdict;
  /** was the method preserved crossing a redirect (beat 8→9 narrative axis) */
  requestMethod: string; // method actually written on the wire for this beat
  /** request headers edit-summarized for the envelope card */
  askHeaders: { k: string; v: string }[];
  /** response status as actually experienced (200 for cache-hit reuse) */
  seenStatus: number;
  fromCache: boolean;
  revalidated: boolean;
  msg: { en: string; bn: string };
}

const SCENES: Record<HttpScene, {
  name: { en: string; bn: string };
  arc: { en: string; bn: string };
}> = {
  naive: {
    name: { en: 'The Absent-Minded Browser', bn: 'বিস্মৃত-ব্রাউজার' },
    arc: {
      en: 'No store, no validator, no memory. Every envelope is a stranger; the origin pays full postage for every reunion. One 302, and even the POST forgets what it was.',
      bn: 'স্টোর নেই, সনদ নেই, স্মৃতি নেই। প্রতিটি খামই অচেনা; প্রতি পুনর্মিলনে অরিজিন শোধ দেয় পূর্ণ ডাকভাড়া। একটি 302, এমনকি POST-ও ভুলে যায় সে কী ছিল।',
    },
  },
  conditional: {
    name: { en: 'The Validator', bn: 'সনদ-পরীক্ষক' },
    arc: {
      en: 'Every ETag kept like a notarized seal; every reunion begins with If-None-Match. The origin always answers — but twice it answers “not modified” and mails back nothing.',
      bn: 'প্রতিটি ETag রক্ষিত নোটারি-সিলের মতো; প্রতি পুনর্মিলন শুরু হয় If-None-Match দিয়ে। অরিজিন সবসময় উত্তর দেয় — কিন্তু দুইবার উত্তর “অপরিবর্তিত”, আর খামে বডি নেই।',
    },
  },
  layered: {
    name: { en: 'The Proxy Clerk', bn: 'প্রক্সি-কেরানি' },
    arc: {
      en: 'Freshness arithmetic honored to the second: max-age=86400 means the day-tick never rings the origin at all. One cache hit, one revalidation — the origin never felt beat twelve.',
      bn: 'সতেজতা-পাটিগণিত মানা সেকেন্ডে সেকেন্ডে: max-age=86400 মানে দিনের পরিবর্তন অরিজিনকেই ডাকে না। এক ক্যাশ-হিট, এক পুনঃযাচাই — দ্বাদশ ছন্দটি অরিজিন অনুভবই করেনি।',
    },
  },
  strict: {
    name: { en: 'The Method Purist', bn: 'পদ্ধতি-খাঁটি‌ইয়াল' },
    arc: {
      en: 'Same freshness discipline as the clerk — but a 302 never demotes a POST. Method semantics are not negotiable at redirect borders; what was written as POST marches on as POST.',
      bn: 'কেরানির মতোই সতেজতা-শৃঙ্খলা — কিন্তু 302 কখনোই POST-কে নামায় না। পুনর্নির্দেশ-সীমান্তে পদ্ধতি-অর্থ দর-কষাকষির বিষয় নয়; যা POST হয়ে রওনা হয়েছিল, POST-ই হয়ে এগিয়ে যায়।',
    },
  },
};

export const HTTP_SCENES: Record<HttpScene, { name: { en: string; bn: string }; arc: { en: string; bn: string } }> = SCENES;

interface CacheSeat { etag: string; maxAge: number; bornBeat: number }
/** the client-side store: url → seat. Naive never writes; conditional writes
 *  validators but never reads freshness; layered/strict honor both. */
type Store = Map<string, CacheSeat>;

/** The world-clock: one beat ≈ 30 wall-seconds, so the 60s style lease (stored at
 *  beat 2) is DEAD by beat 5, while the one-day logo lease (stored at beat 7)
 *  is still young at beat 12. Fresh = `(beat − storedBeat) × 30s ≤ maxAge`. */
const BEAT_SECONDS = 30;

function freshSeat(seat: CacheSeat, beat: number, from: number): boolean {
  return (beat - from) * BEAT_SECONDS <= seat.maxAge;
}

export function httpSteps(scene: HttpScene): HttpStep[] {
  const steps: HttpStep[] = [];
  const store: Store = new Map();
  const seatBorn = new Map<string, number>(); // url → beat first stored
  const L: HttpLedger = {
    requests: 0, originHits: 0, originBytes: 0, cacheHits: 0,
    revalidations: 0, notModified: 0, challenges: 0, rewrites: 0, redirects: 0,
  };
  let authed = false;           // after beat 3 everyone carries the session cookie
  const rewriteScenes: HttpScene[] = ['naive', 'conditional', 'layered'];

  for (const beat of BEATS) {
    L.requests += 1;
    let verdict: HttpVerdict = 'served';
    let requestMethod = beat.method;
    let seenStatus = beat.status;
    let fromCache = false;
    let revalidated = false;
    let originHitIt = false;
    let bytes = 0;
    const ask: { k: string; v: string }[] = [];
    if (authed) ask.push({ k: 'Cookie', v: 'sid=9f2' });

    const prior = store.get(beat.url);
    const born = seatBorn.get(beat.url) ?? beat.i;

    if (beat.challenge) {
      // 401: the arena names itself; everyone hears it the same
      originHitIt = true;
      bytes = beat.noteBytes ?? 0;
      verdict = 'challenge';
      L.challenges += 1;
    } else if (prior && beat.etag) {
      // a second knock on a storable resource
      if (scene === 'conditional') {
        ask.push({ k: 'If-None-Match', v: prior.etag });
        originHitIt = true;
        revalidated = true;
        L.revalidations += 1;
        // world: unchanged → 304
        seenStatus = 304;
        bytes = 0;
        verdict = 'not-modified';
        L.notModified += 1;
      } else if (freshSeat(prior, beat.i, born)) {
        // fresh lease: origin never rings (layered/strict only reach here)
        fromCache = true;
        seenStatus = 200;
        bytes = 0;
        verdict = 'cache-hit';
        L.cacheHits += 1;
      } else {
        // stale lease: revalidate with the stored seal
        ask.push({ k: 'If-None-Match', v: prior.etag });
        originHitIt = true;
        revalidated = true;
        L.revalidations += 1;
        seenStatus = 304;
        bytes = 0;
        verdict = 'not-modified';
        L.notModified += 1;
      }
    }

    if (!originHitIt && !fromCache && !beat.challenge) {
      // the wire actually carries this beat to the origin
      originHitIt = true;
      if (beat.location) {
        bytes = beat.noteBytes ?? 0;
        L.redirects += 1;
        if (beat.status === 302 && rewriteScenes.includes(scene)) {
          verdict = 'method-rewritten';
          L.rewrites += 1;
          // the next beat's door is walked as GET by these clients; strict keeps POST
        } else {
          verdict = beat.status === 302 ? 'method-kept' : 'redirect';
        }
      } else if (prior === undefined && beat.etag && seenStatus !== 304) {
        bytes = beat.bodyBytes;
        verdict = beat.i === 12 || beat.i === 11 || beat.i === 7 ? 'served'
          : beat.i === 10 ? 'challenge'
          : 'fresh-fetch';
        if (scene === 'naive' && prior === undefined && beat.storable && beat.i > 2) {
          // naive memory: it has seen these bytes before and still takes them whole
          verdict = 'refetch';
        }
      } else if (seenStatus !== 304) {
        bytes = beat.bodyBytes;
        if (beat.i === 11) verdict = 'retried';
        else if (prior === undefined) verdict = 'fresh-fetch';
        else verdict = 'refetch';
      }
    }

    if (beat.status === 200 && beat.storable && scene !== 'naive' && !fromCache && originHitIt && seenStatus !== 304) {
      // everyone except the absent-minded one writes the seal; conditional rewrites it too
      store.set(beat.url, { etag: beat.etag!, maxAge: beat.maxAge ?? 0, bornBeat: beat.i });
      if (!seatBorn.has(beat.url)) seatBorn.set(beat.url, beat.i);
    }
    if (seenStatus === 304) {
      // 304 refreshes nothing but freshness; the seat stays
    }

    if (originHitIt) { L.originHits += 1; L.originBytes += bytes; }
    if (beat.i === 3) authed = true;

    // beat 8/9 narrative: strict never demotes; everyone else rewrites POST→GET
    if (beat.i === 8 && scene === 'strict') requestMethod = 'POST';
    if (beat.i === 8 && scene !== 'strict') requestMethod = 'POST · →GET on follow';
    if (beat.i === 9 && rewriteScenes.includes(scene)) requestMethod = 'GET (rewritten)';
    if (beat.i === 9 && scene === 'strict') requestMethod = 'POST (kept)';
    if (beat.i === 9 && scene === 'strict') {
      // purist re-POSTs; origin answers the same 200 for /thanks
      verdict = 'method-kept';
    }

    let msg: { en: string; bn: string };
    switch (verdict) {
      case 'fresh-fetch':
        msg = {
          en: `FIRST KNOCK — ${beat.method} ${beat.url}: 200 OK, ${beat.bodyBytes.toLocaleString()} bytes. ${beat.storable ? `The origin pins a seal (ETag ${beat.etag}) and a lease (max-age=${beat.maxAge}s) — laws that remember will cash them.` : 'Cache-Control: no-store — this answer may never be reseated; every future visit pays full postage again.'}`,
          bn: `প্রথম ধক — ${beat.method} ${beat.url}: 200 OK, ${beat.bodyBytes.toLocaleString()} বাইট। ${beat.storable ? `অরিজিন পিনে সিল (ETag ${beat.etag}) আর লিজ (max-age=${beat.maxAge}s) — যেসব বিধান মনে রাখে, সেগুলো তাদের নগদ করা হবে।` : 'Cache-Control: no-store — এই উত্তর কখনো পুনঃবসানো যাবে না; প্রতি ভবিষ্যৎ-দর্শন আবার পূর্ণ ডাকভাড়া দেয়।'}`,
        };
        break;
      case 'refetch':
        msg = {
          en: `REFETCH — ${beat.method} ${beat.url} again: ${beat.bodyBytes.toLocaleString()} bytes taken whole, although nothing on the wire changed. The absent-minded client owns no seal, so it cannot even ASK whether anything moved. Bandwidth is the tax on amnesia.`,
          bn: `পুনরায়ন — ${beat.method} ${beat.url} আবার: ${beat.bodyBytes.toLocaleString()} বাইট পুরোপুরি নেওয়া, অথচ ওয়্যারে কিছুই বদলায়নি। বিস্মৃত-ক্লায়েন্টের কোনো সিল নেই, তাই জিজ্ঞেসই করা যায় না কিছু নড়েছে কি না। ব্যান্ডউইথ হলো বিস্মৃতির কর।`,
        };
        break;
      case 'not-modified':
        msg = {
          en: `304 NOT MODIFIED — If-None-Match: ${beat.etag}. The origin compared the seal, answered with zero body bytes, and the client reuses its seat. One envelope, zero bandwidth — the cheapest truth in the protocol.`,
          bn: `304 অপরিবর্তিত — If-None-Match: ${beat.etag}। অরিজিন সিল মিলাল, শূন্য-বাইট-বডিসহ উত্তর দিল, আর ক্লায়েন্ট তার আসন পুনব্যবহার করে। একটি খাম, শূন্য ব্যান্ডউইথ — প্রোটোকলের সবচেয়ে সস্তা সত্য।`,
        };
        break;
      case 'cache-hit':
        msg = {
          en: `CACHE HIT — ${beat.method} ${beat.url} answered from the fresh seat (max-age=${beat.maxAge}s). The origin never felt this knock: it happened between two beats of the world-clock, well inside the lease. Latency collapses to local memory.`,
          bn: `ক্যাশ-হিট — ${beat.method} ${beat.url} উত্তরিত সতেজ আসন থেকে (max-age=${beat.maxAge}s)। এই ধকটি অরিজিন অনুভবই করেনি: ঘটল দুনিয়ার-ঘড়ির দুই ছন্দের ভেতর, লিজের ভাল অঞ্চলে। লেটেন্সি ধসে পড়ে স্থানীয়-মেমরিতে।`,
        };
        break;
      case 'redirect':
        msg = {
          en: `301 MOVED PERMANENTLY — ${beat.url} has emigrated: Location: ${beat.location}. GET survives relocation unmutilated (it has no body to lose); clients and caches may staple the new address over the old forever.`,
          bn: `301 স্থায়ী-স্থানান্তর — ${beat.url} উঠে গেছে: Location: ${beat.location}। GET অক্ষতই পুনর্স্থাপিত হয় (হারানোর মতো বডি নেই); ক্লায়েন্ট আর ক্যাশ নতুন ঠিকানাটা পুরনোটার ওপর চিরকালের জন্য চাপলে দিতে পারে।`,
        };
        break;
      case 'method-rewritten':
        msg = {
          en: `302 FOUND — Location: ${beat.location}. But watch the demotion: legacy user-agents (and this client) rewrite POST→GET across the follow. The form's body evaporated at the border; the server now sees a GET knock at /thanks. This is why 307/308 exist — 302 borrowed semantics it never repaid.`,
          bn: `302 পাওয়া গেল — Location: ${beat.location}। কিন্তু পদাবনতিটা দেখুন: পুরনো-দিনের ইউজার-এজেন্ট (আর এই ক্লায়েন্ট) ফলো-ক্রসিংয়ে POST→GET পুনর্লিখন করে। ফর্মের বডি সীমান্তেই বাষ্প; সার্ভার এখন /thanks-এ GET ধক দেখে। এই জন্যই 307/308 আছে — 302 এমন অর্থ ধার করেছিল, যা সে কখনো শোধ দেয়নি।`,
        };
        break;
      case 'method-kept':
        msg = {
          en: `302 FOUND — Location: ${beat.location}. ${beat.method === 'POST' ? 'The purist refuses the historical rewrite: the follow arrives as POST, semantics intact, body and intent uncrossed.' : 'The kept-method follow lands at /thanks and the purist walks out with semantics unbowed.'} On the ledger this costs nothing extra — it buys back correctness that the rewrite tax had silently been spending.`,
          bn: `302 পাওয়া গেল — Location: ${beat.location}। ${beat.method === 'POST' ? 'খাঁটিয়াল ঐতিহাসিক-পুনর্লিখন প্রত্যাখ্যান করে: ফলোটি পৌঁছায় POST হয়েই, অর্থ অক্ষত, বডি-আশা অঅদল-বদল।' : 'রক্ষিত-পদ্ধতি-ফলো এসে পড়ে /thanks-এ, আর খাঁটিয়াল বেরিয়ে যায় নত-না-হওয়া অর্থ নিয়ে।'} খাতা বলছে এর খরচ শূন্য — তবে কেনা হয় যথার্থতা, যা পুনর্লিখন-কর নীরবে খরচ করে দিচ্ছিল।`,
        };
        break;
      case 'challenge':
        msg = {
          en: `401 UNAUTHORIZED — not an error, a doorway: WWW-Authenticate: ${beat.challenge} names the arena and the credential dialect. The correct dance is NOT "try again blindly" but a fresh knock wearing the right credential — next beat.`,
          bn: `401 অননুমোদিত — ত্রুটি নয়, প্রবেশপথ: WWW-Authenticate: ${beat.challenge} নামায় রণাঙ্গন আর শংসাপত্র-ভাষাদল। সঠিক নাচ নয় "অন্ধভাবে আবার চেষ্টা", বরং সঠিক শংসাপত্র পরে নতুন ধক — পরের ছন্দ।`,
        };
        break;
      case 'retried':
        msg = {
          en: `RETRY with Authorization: Bearer — same door, right credential: 200 OK, ${beat.bodyBytes.toLocaleString()} bytes, private + no-store (and Vary: Authorization so no shared seat can ever hand this answer to another tenant). Two envelopes for one fact: the challenge protocol at its cleanest.`,
          bn: `Authorization: Bearer নিয়ে পুনঃচেষ্টা — একই দরজা, সঠিক শংসাপত্র: 200 OK, ${beat.bodyBytes.toLocaleString()} বাইট, private + no-store (আর Vary: Authorization, যাতে কোনো ভাগ-করা আসন এই উত্তর অন্য ভাড়াটিয়ার হাতে কখনো তুলে না দেয়)। একটি তথ্যের জন্য দুটি খাম: চ্যালেঞ্জ-প্রোটোকল তার পরিষ্কারতম মুহূর্তে।`,
        };
        break;
      default:
        msg = {
          en: `${requestMethod} ${beat.url}: ${seenStatus}. ${beat.i === 9 ? 'The redirect’s second door. Whether the form arrived as GET (rewritten) or POST (kept) is the whole moral of this hop.' : 'A routine answer whose lesson lives in the ledger.'}`,
          bn: `${requestMethod} ${beat.url}: ${seenStatus}। ${beat.i === 9 ? 'পুনর্নির্দেশের দ্বিতীয় দরজা। ফর্মটি GET হয়ে (পুনর্লিখিত) না POST হয়ে (রক্ষিত) এসেছে — এই লাফের পুরো নীতিকথা তাতেই।' : 'রুটিন-উত্তর, যার শিক্ষা বাস করে খাতায়।'}`,
        };
    }

    steps.push({
      i: beat.i, beat, verdict, requestMethod, askHeaders: ask, seenStatus,
      fromCache, revalidated, ...L, msg,
    });
  }
  return steps;
}
