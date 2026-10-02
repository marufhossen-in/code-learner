import type { LText } from '../../lib/types';

/** REST lab engine — "The Endpoint Docket": one fixed 10-beat workload walked by four
 * API-design laws. Law IS the contract: same operations, different protocol grammar,
 * and the ledger counts the price of every dialect. */

export type RestLaw = 'rpc' | 'naive' | 'pure' | 'hyper';

export const REST_LAWS: { id: RestLaw; name: LText; brief: LText }[] = [
  { id: 'rpc', name: { en: 'The Messenger', bn: 'বার্তাবাহক' }, brief: { en: 'RPC-envelope school: every op rides POST /api/do with an action field. Zero verbs, one URI, 200 forever.', bn: 'RPC-খাম-শিক্ষা: প্রতি কাজ চলে POST /api/do-তে action-ক্ষেত্র নিয়ে। ক্রিয়া শূন্য, URI একটি, 200 চিরকাল।' } },
  { id: 'naive', name: { en: 'The Improviser', bn: 'উদ্ভাবক' }, brief: { en: 'naive-CRUD school: noun-ish URIs when convenient, verbs when lazy, GET with side effects, 200 for every answer.', bn: 'অপরিণত-CRUD শিক্ষা: সুবিধামতো বিশেষ্য-URI, অলসতায় ক্রিয়া, পার্শ্বপ্রতিক্রিয়াসহ GET, প্রতি উত্তরে 200।' } },
  { id: 'pure', name: { en: 'The Grammarian', bn: 'ব্যাকরণবিদ' }, brief: { en: 'pure-REST school: resources as nouns, methods as contracts, honest statuses, idempotency keys on retries.', bn: 'খাঁটি-REST শিক্ষা: বিশেষ্য হিসেবে রিসোর্স, চুক্তি হিসেবে পদ্ধতি, সৎ স্ট্যাটাস, রিট্রাইতে আইডেমপোটেন্সি-কী।' } },
  { id: 'hyper', name: { en: 'The Cartographer', bn: 'মানচিত্রকার' }, brief: { en: 'hypermedia school: the grammarian’s bill plus links on every answer — the API names its own next steps.', bn: 'হাইপারমিডিয়া-শিক্ষা: ব্যাকরণবিদের বিল, সঙ্গে প্রতি উত্তরে লিংক — API-ই নাম দেয় নিজের পরের পা।' } },
];

export interface RestBeat {
  i: number;
  op: LText;                              // what the client wants
  ideal: string;                          // the grammar-school envelope (for teaching)
  cacheable: boolean;                     // would a pure law make this cacheable
}

export const REST_BEATS: RestBeat[] = [
  { i: 1, op: { en: 'list 20 products, first page', bn: '২০টি প্রোডাক্ট তালিকা, প্রথম পাতা' }, ideal: 'GET /products?limit=20', cacheable: true },
  { i: 2, op: { en: 'read product 42', bn: 'প্রোডাক্ট 42 পড়া' }, ideal: 'GET /products/42', cacheable: true },
  { i: 3, op: { en: 'create an order', bn: 'একটি অর্ডার তৈরি' }, ideal: 'POST /orders → 201 + Location', cacheable: false },
  { i: 4, op: { en: 'read order 7', bn: 'অর্ডার 7 পড়া' }, ideal: 'GET /orders/7', cacheable: true },
  { i: 5, op: { en: 'replace order 7 (full)', bn: 'অর্ডার 7 (পূর্ণ) প্রতিস্থাপন' }, ideal: 'PUT /orders/7 → 200', cacheable: false },
  { i: 6, op: { en: 'patch order 7 (status only)', bn: 'অর্ডার 7 প্যাচ (শুধু স্ট্যাটাস)' }, ideal: 'PATCH /orders/7 → 200', cacheable: false },
  { i: 7, op: { en: 'delete order 7', bn: 'অর্ডার 7 মুছে ফেলা' }, ideal: 'DELETE /orders/7 → 204', cacheable: false },
  { i: 8, op: { en: 'retry the create (timeout at beat 3)', bn: 'তৈরি-রিট্রাই (৩ ছন্দে টাইমআউট)' }, ideal: 'POST /orders + Idempotency-Key → original 201', cacheable: false },
  { i: 9, op: { en: 'shipped items of order 7, newest first, 5 per page', bn: 'অর্ডার 7-এর পাঠানো আইটেম, নতুন আগে, পাতায় ৫' }, ideal: 'GET /orders/7/items?status=shipped&sort=-date&limit=5', cacheable: true },
  { i: 10, op: { en: 'user 3’s orders with item summaries inline', bn: 'ব্যবহারকারী 3-এর অর্ডার, ইনলাইন আইটেম-সারাংশসহ' }, ideal: 'GET /users/3/orders?expand=items.summary', cacheable: true },
];

export type RestVerdict =
  | 'clean'          // grammar correct, status honest, no waste
  | 'rpc-envelope'   // verb smuggled in the body, URI silent
  | 'verbed'         // verb inside a GET-ish URI
  | 'status-lie'     // 200 where the outcome deserves a grammar
  | 'wrong-method'   // POST where PUT/DELETE belongs
  | 'semantics-bent' // PUT with a partial body
  | 'unsafe-get'     // GET with side effects
  | 'overfetch'      // whole trees fetched for a filtered question
  | 'underfetch'     // answer too thin; a second call is owed
  | 'dup-write'      // blind retry created a second order
  | 'deduped';       // idempotency key caught the retry

export interface RestStep {
  beat: RestBeat;
  verdict: RestVerdict;
  request: string;         // rendered envelope (method + target)
  status: number;          // status the law chose
  honestStatus: number;    // status the outcome deserved
  note: string;            // one-line commentary (lab narration)
  // cumulative ledger AT this beat:
  calls: number;
  overBytes: number;       // KB fetched beyond the question
  verbed: number;          // URIs containing verbs
  wrongStatuses: number;   // statuses lying about outcomes
  dups: number;            // duplicate writes accepted
  cacheForfeits: number;   // cacheable beats made uncacheable
  links: number;           // hypermedia links served
}

export interface RestSummary extends Omit<RestStep, 'beat' | 'verdict' | 'request' | 'status' | 'honestStatus' | 'note'> { law: RestLaw }

const VERBED_RPC = (beat: RestBeat) => `POST /api/do {"action":"${['getProducts', 'getProduct', 'createOrder', 'getOrder', 'replaceOrder', 'updateOrder', 'deleteOrder', 'createOrder', 'getOrderItems', 'getUserOrders'][beat.i - 1]}"}`;

export function restSteps(law: RestLaw): RestStep[] {
  let calls = 0, overBytes = 0, verbed = 0, wrongStatuses = 0, dups = 0, cacheForfeits = 0, links = 0;
  const steps: RestStep[] = [];

  for (const beat of REST_BEATS) {
    let verdict: RestVerdict = 'clean';
    let request = beat.ideal.split(' →')[0];
    let status = 200;
    let note = 'clean envelope';
    const honestStatus = beat.i === 3 ? 201 : beat.i === 7 ? 204 : beat.i === 8 ? 201 : 200;

    calls += 1;

    if (law === 'rpc') {
      request = VERBED_RPC(beat);
      status = 200;
      verbed += 1;
      if (beat.cacheable) cacheForfeits += 1;
      if (beat.i <= 7) {
        verdict = 'rpc-envelope';
        note = 'verb smuggled in the body; the URI says nothing; 200 forever';
      } else if (beat.i === 8) {
        verdict = 'dup-write';
        dups += 1;
        note = 'blind retry at /api/do — a second order is created silently';
      } else {
        verdict = 'overfetch';
        overBytes += beat.i === 9 ? 8 : 24;
        note = beat.i === 9 ? 'no query grammar — fetch every item, filter in the client' : 'no expand grammar — full item trees for every order';
      }
      if (status !== honestStatus) wrongStatuses += 1;
    } else if (law === 'naive') {
      switch (beat.i) {
        case 1: request = 'GET /getAllProducts?limit=20'; verdict = 'verbed'; verbed += 1; note = 'verb in the URI — the noun lost custody of the resource'; break;
        case 2: request = 'GET /products/get/42'; verdict = 'verbed'; verbed += 1; note = 'verb in the URI — a second, rival grammar for the same product'; break;
        case 3: request = 'POST /orders'; verdict = 'status-lie'; note = 'created, but the status swears “nothing special happened” — no Location either'; break;
        case 4: request = 'GET /orders/7'; verdict = 'clean'; note = 'the one beat the improviser plays in tune'; break;
        case 5: request = 'POST /orders/7'; verdict = 'wrong-method'; note = 'POST on an item — idempotency forfeited, semantics negotiated privately'; break;
        case 6: request = 'PUT /orders/7 {"status":"shipped"}'; verdict = 'semantics-bent'; note = 'PUT with a partial body: the fields you omitted are now undefined-by-accident'; break;
        case 7: request = 'GET /orders/7/delete'; verdict = 'unsafe-get'; verbed += 1; note = 'a GET with side effects — every prefetch, crawler and proxy is armed'; cacheForfeits += 1; break;
        case 8: request = 'POST /orders'; verdict = 'dup-write'; dups += 1; note = 'no idempotency key — the timeout is replayed as a second order'; break;
        case 9: request = 'GET /orders/7/items'; verdict = 'overfetch'; overBytes += 8; note = 'no filter/sort grammar — fetch all, sort on the client, waste 8 KB'; break;
        case 10: request = 'GET /users/3/orders'; verdict = 'underfetch'; calls += 1; note = 'no expand grammar — one more call owed for the summaries (+1 call)'; break;
      }
      status = 200;
      if (status !== honestStatus) wrongStatuses += 1;
    } else {
      // pure & hyper: grammar correct everywhere; hyper adds links
      switch (beat.i) {
        case 3: status = 201; verdict = 'clean'; note = '201 + Location: /orders/7 — the name of the newborn, printed on the envelope'; break;
        case 7: status = 204; verdict = 'clean'; note = '204 No Content — deletion admitted, no body invented for the empty answer'; break;
        case 8: status = 201; verdict = 'deduped'; note = 'Idempotency-Key seen before: the original 201 returned; order count stays 1'; break;
        default: status = 200; verdict = 'clean'; note = beat.i === 9 ? 'filter/sort/limit as URI grammar — the server answers exactly the question' : beat.i === 10 ? 'expand as URI grammar — one call, exactly the summaries' : 'clean envelope, method as contract';
      }
      if (status !== honestStatus) wrongStatuses += 1;
      if (law === 'hyper') links += 1;
    }

    steps.push({ beat, verdict, request, status, honestStatus, note, calls, overBytes, verbed, wrongStatuses, dups, cacheForfeits, links });
  }
  return steps;
}

export function restSummary(law: RestLaw): RestSummary {
  const s = restSteps(law);
  const last = s[s.length - 1];
  return { law, calls: last.calls, overBytes: last.overBytes, verbed: last.verbed, wrongStatuses: last.wrongStatuses, dups: last.dups, cacheForfeits: last.cacheForfeits, links: last.links };
}
