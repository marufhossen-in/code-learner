import type { LText } from '../../lib/types';

/** GraphQL lab engine — "The Query Docket": one fixed 8-beat session walked by four
 * resolution laws. Same client needs, same dataset (user → 5 orders → 4 items each,
 * friends fan-out 2); only the resolution discipline changes — and the ledger counts
 * database queries, wire bytes, cache hits, rejected bombs and named operations. */

export type GqlLaw = 'naive' | 'batched' | 'budgeted' | 'cached';

export const GQL_LAWS: { id: GqlLaw; name: LText; brief: LText }[] = [
  { id: 'naive', name: { en: 'The Forager', bn: 'তৃণভোজী' }, brief: { en: 'resolver-per-field school: every field fetches its own rows, queries ride full text, no depth rules. Honest resolvers, blind gate.', bn: 'ক্ষেত্রপ্রতি-রিসলভার শিক্ষা: প্রতি ক্ষেত্র নিজে সারি আনে, কোয়েরি চলে পূর্ণ-পাঠ্যে, গভীরতা-নিয়ম নেই। সৎ রিসলভার, অন্ধ ফাটক।' } },
  { id: 'batched', name: { en: 'The Batcher', bn: 'ব্যাচকারী' }, brief: { en: 'DataLoader school: per-request memoization + key batching — the N+1 cascade collapses, but the gate is still blind and bytes still burn.', bn: 'DataLoader শিক্ষা: অনুরোধপ্রতি-মেমো + কী-ব্যাচিং — N+1 ক্যাসকেড ভেঙে পড়ে, তবে ফাটক তবু অন্ধ আর বাইট তবু পোড়ে।' } },
  { id: 'budgeted', name: { en: 'The Gatekeeper', bn: 'প্রহরী' }, brief: { en: 'trust-budget school: persisted operation IDs, depth/complexity ceilings, named operations. The depth bomb dies at the gate; observability arrives free.', bn: 'বিশ্বাস-বাজেট শিক্ষা: পারসিস্টেড-অপারেশন-ID, গভীরতা/জটিলতা-সিলিং, নামকৃত-অপারেশন। গভীরতা-বোমা মরে ফাটকেই; পর্যবেক্ষণ আসে বিনামূল্যে।' } },
  { id: 'cached', name: { en: 'The Librarian', bn: 'গ্রন্থাগারিক' }, brief: { en: 'the gatekeeper plus response cache: repeat questions answered by the shelf — same question, zero database.', bn: 'প্রহরী সঙ্গে প্রতিক্রিয়া-ক্যাশ: পুনরাবৃত-প্রশ্নের উত্তর আসে তাক থেকে — একই প্রশ্ন, শূন্য ডেটাবেস।' } },
];

export interface GqlBeat {
  i: number;
  op: LText;
  query: string; // the operation as the lab prints it
}

export const GQL_BEATS: GqlBeat[] = [
  { i: 1, op: { en: 'dashboard header: user name + avatar', bn: 'ড্যাশবোর্ড-শিরোপট্টি: ব্যবহারকারীর নাম + অবতার' }, query: '{ user { name avatar } }' },
  { i: 2, op: { en: 'order list: ids and totals', bn: 'অর্ডার-তালিকা: id আর মোট' }, query: '{ user { orders { id total } } }' },
  { i: 3, op: { en: 'order cards with every item name + price', bn: 'অর্ডার-কার্ড, প্রতি আইটেমের নাম+দামসহ' }, query: '{ user { orders { items { name price } } } }' },
  { i: 4, op: { en: 'same cards again (route back / re-render)', bn: 'একই কার্ড আবার (পথ-ফেরা / রি-রেন্ডার)' }, query: '{ user { orders { items { name price } } } }' },
  { i: 5, op: { en: 'anonymous curiosity: friends-of-friends, depth 8', bn: 'নামহীন-কৌতূহল: বন্ধুতন্ত্র, গভীরতা ৮' }, query: '{ user { friends { friends { friends { friends { friends { friends { friends { name } } } } } } } } }' },
  { i: 6, op: { en: 'mutation: place order — one item out of stock', bn: 'মিউটেশন: অর্ডার দাও — একটি আইটেম স্টকশূন্য' }, query: 'mutation { placeOrder(items: [A,B]) { order { id } } }' },
  { i: 7, op: { en: 'observe production: history panel', bn: 'উৎপাদন-পর্যবেক্ষণ: ইতিহাস-প্যানেল' }, query: 'query GetOrderHistory { user { orders { id } } }' },
  { i: 8, op: { en: 're-run the order cards (persisted id where trusted)', bn: 'অর্ডার-কার্ড পুনরায় (বিশ্বস্ত জায়গায় পারসিস্টেড-id)' }, query: '{ user { orders { items { name price } } } }' },
];

export type GqlVerdict =
  | 'resolved'              // clean field-by-field resolution
  | 'n-plus-one'            // parent loop: 1 + 1 + 5 queries for beat 3
  | 'batched'               // DataLoader collapsed the level
  | 'cache-hit'             // shelf answered, zero database
  | 'depth-bomb-executed'   // the 510/8-query monster ran at the door
  | 'rejected'              // budget said no before a single resolver ran
  | 'partial-error'         // data + errors[] — GraphQL's honest failure mode
  | 'anonymous-op'          // operation unnamed: invisible in observability
  | 'named-op'              // named operation: traceable at the gate
  | 'persisted';            // persisted id on the wire: hash, not text

interface GqlBeatRow { q: number; verdict: GqlVerdict; bytes: number }

/** The law table: db queries / verdict / query-text bytes for the 8 beats. */
const TABLE: Record<GqlLaw, GqlBeatRow[]> = {
  naive: [
    { q: 1, verdict: 'resolved', bytes: 60 },
    { q: 2, verdict: 'resolved', bytes: 80 },
    { q: 7, verdict: 'n-plus-one', bytes: 140 },
    { q: 7, verdict: 'n-plus-one', bytes: 140 },
    { q: 510, verdict: 'depth-bomb-executed', bytes: 560 },
    { q: 2, verdict: 'partial-error', bytes: 90 },
    { q: 1, verdict: 'anonymous-op', bytes: 140 },
    { q: 7, verdict: 'n-plus-one', bytes: 140 },
  ],
  batched: [
    { q: 1, verdict: 'resolved', bytes: 60 },
    { q: 2, verdict: 'resolved', bytes: 80 },
    { q: 3, verdict: 'batched', bytes: 140 },
    { q: 3, verdict: 'batched', bytes: 140 },
    { q: 8, verdict: 'depth-bomb-executed', bytes: 560 },
    { q: 2, verdict: 'partial-error', bytes: 90 },
    { q: 1, verdict: 'anonymous-op', bytes: 140 },
    { q: 3, verdict: 'batched', bytes: 140 },
  ],
  budgeted: [
    { q: 1, verdict: 'resolved', bytes: 20 },
    { q: 2, verdict: 'resolved', bytes: 20 },
    { q: 3, verdict: 'batched', bytes: 20 },
    { q: 3, verdict: 'batched', bytes: 20 },
    { q: 0, verdict: 'rejected', bytes: 20 },
    { q: 2, verdict: 'partial-error', bytes: 20 },
    { q: 1, verdict: 'named-op', bytes: 20 },
    { q: 3, verdict: 'persisted', bytes: 20 },
  ],
  cached: [
    { q: 1, verdict: 'resolved', bytes: 20 },
    { q: 2, verdict: 'resolved', bytes: 20 },
    { q: 3, verdict: 'batched', bytes: 20 },
    { q: 0, verdict: 'cache-hit', bytes: 20 },
    { q: 0, verdict: 'rejected', bytes: 20 },
    { q: 2, verdict: 'partial-error', bytes: 20 },
    { q: 1, verdict: 'named-op', bytes: 20 },
    { q: 0, verdict: 'cache-hit', bytes: 20 },
  ],
};

const BEAT_NOTES: Record<GqlLaw, string[]> = {
  naive: [
    'one resolver, one query — the only honest beat',
    'user then orders: two queries, still innocent',
    'items resolver fires per order: 1 + 1 + 5 = 7 queries for one screen',
    're-render replays the whole cascade — nothing learned between requests',
    'depth-8 fan-out-2 executes fully: 2+4+8+…+256 = 510 queries at the door',
    'one item out of stock: data carries the order, errors[] carries the truth — 200 either way',
    'an unnamed operation: the gateway log knows everything except what this was',
    'full query text again, full cascade again',
  ],
  batched: [
    'one resolver, one query — batching is invisible on a short beat',
    'two queries — nothing to batch yet',
    'DataLoader collapses five item-lookups into one keyed query: 3 total',
    'new request, new DataLoader: 3 again, honestly won',
    'batching tames the bomb to one query per level — 8 — but the gate never rejected it',
    'partial data + errors[] — the mutation shape survives every law',
    'batching buys speed, not observability: still anonymous',
    '3 queries again; the gate still burns 140 bytes of text per envelope',
  ],
  budgeted: [
    'persisted id on the wire: 20 bytes name the whole operation',
    'two queries, an id, and a gate that knows the operation by name',
    'DataLoader batching + named persisted op: 3 queries, fully observed',
    '3 queries again — response cache is NOT this law’s instrument (see the librarian)',
    'depth 8 exceeds the ceiling 5: rejected before one resolver ran — 0 queries',
    'partial data + errors[] — budget laws do not lie about failures either',
    'GetOrderHistory is a NAME: dashboards group latency by it, alerts page by it',
    'persisted rerun: same 3 batched queries, same 20 bytes — transport discipline held',
  ],
  cached: [
    'first time through the shelf: 1 query, then the shelf remembers',
    '2 queries; the librarian shelves every answer by persisted id',
    '3 batched queries the first time — and the shelf memorizes the answer',
    'SHELF HIT: the repeat question never touches the database (0 queries)',
    'rejected at the gate before the shelf was even asked',
    'partial data + errors[]; mutations invalidate the affected shelf rows',
    'named, persisted, observed — the librarian’s ledger stays boring',
    'SHELF HIT again: the librarian charges 0 for questions it already graded',
  ],
};

export interface GqlStep {
  beat: GqlBeat;
  verdict: GqlVerdict;
  note: string;
  dbQueriesThisBeat: number;
  bytesThisBeat: number;
  // cumulative ledger AT this beat:
  dbQueries: number;
  cacheHits: number;
  rejected: number;
  namedOps: number;
  partialErrors: number;
  bytesSent: number;
  maxDepth: number;
}

export interface GqlSummary extends Omit<GqlStep, 'beat' | 'verdict' | 'note' | 'dbQueriesThisBeat' | 'bytesThisBeat'> { law: GqlLaw }

export function gqlSteps(law: GqlLaw): GqlStep[] {
  let dbQueries = 0, cacheHits = 0, rejected = 0, namedOps = 0, partialErrors = 0, bytesSent = 0, maxDepth = 0;
  const depthOf = [1, 2, 3, 3, 8, 2, 2, 3];
  return GQL_BEATS.map((beat, k) => {
    const row = TABLE[law][k];
    dbQueries += row.q;
    bytesSent += row.bytes;
    if (row.verdict === 'cache-hit') cacheHits += 1;
    if (row.verdict === 'rejected') rejected += 1;
    if (row.verdict === 'named-op') namedOps += 1;
    if (row.verdict === 'partial-error') partialErrors += 1;
    if (row.verdict !== 'rejected') maxDepth = Math.max(maxDepth, depthOf[k]);
    return {
      beat, verdict: row.verdict, note: BEAT_NOTES[law][k],
      dbQueriesThisBeat: row.q, bytesThisBeat: row.bytes,
      dbQueries, cacheHits, rejected, namedOps, partialErrors, bytesSent, maxDepth,
    };
  });
}

export function gqlSummary(law: GqlLaw): GqlSummary {
  const s = gqlSteps(law);
  const last = s[s.length - 1];
  return {
    law, dbQueries: last.dbQueries, cacheHits: last.cacheHits, rejected: last.rejected,
    namedOps: last.namedOps, partialErrors: last.partialErrors, bytesSent: last.bytesSent, maxDepth: last.maxDepth,
  };
}
