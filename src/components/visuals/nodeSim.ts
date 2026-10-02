import type { LText } from '../../lib/types';

/** Node lab engine — "The Loop Docket": one fixed 8-beat traffic docket walked by four
 * runtime disciplines. Same routes, same fixed numbers (bcrypt 90ms, 2MB JSON ≈ 8ms
 * serialize, 400ms aggregate, 50MB PDF, 50-client burst); only the runtime discipline
 * changes — and the ledger counts loop-stall ms, worst latency, hung requests, swallowed
 * errors, error-handler hits, peak memory and sustained throughput. */

export type NodeLaw = 'blocker' | 'careless' | 'chained' | 'streamed';

export const NODE_LAWS: { id: NodeLaw; name: LText; brief: LText }[] = [
  { id: 'blocker', name: { en: 'The Blocker', bn: 'অবরোধকারী' }, brief: { en: 'sync-everything school: bcrypt.compareSync, JSON.parse on 2MB, readFileSync per download. The loop is a cashier forced to do the cooking.', bn: 'সব-সিঙ্ক শিক্ষা: bcrypt.compareSync, 2MB-এর উপর JSON.parse, প্রতি ডাউনলোডে readFileSync। লুপ হলো এমন রওকদার, যাকে রাঁধতেও বসানো হয়।' } },
  { id: 'careless', name: { en: 'The Careless', bn: 'উদাসীন' }, brief: { en: 'fire-and-forget school: promises exist but next(err) is forgotten, rejections fall into the void, sockets hang to timeout. Async habit, zero contract.', bn: 'ফেলে-রাখা শিক্ষা: প্রতিশ্রুতি আছে কিন্তু next(err) ভোলা যায়, রিজেকশন পড়ে শূন্যে, সকেট ঝুলে টাইমআউট পর্যন্ত। async অভ্যাস, শূন্য চুক্তি।' } },
  { id: 'chained', name: { en: 'The Chain-Keeper', bn: 'শৃঙ্খল-রক্ষী' }, brief: { en: 'middleware-vow school: ordered chain, wrapped async handlers, next(err) discipline, one 4-arg error home. Survival guaranteed; speed NOT promised.', bn: 'মিডলওয়্যার-শপথ শিক্ষা: সাজানো চেইন, আবৃত async হ্যান্ডলার, next(err) শৃঙ্খলা, এক 4-আর্গ ত্রুটি-বাসা। বেঁচে থাকা নিশ্চিত; গতি প্রতিশ্রুত নয়।' } },
  { id: 'streamed', name: { en: 'The Streamer', bn: 'স্রোতধারী' }, brief: { en: 'chain-keeper plus pacing: pipeline with backpressure, worker pool for CPU, queue ceiling with honest 503. Flat memory, shed load, full throughput.', bn: 'শৃঙ্খল-রক্ষী সঙ্গে গতিনিয়ন্ত্রণ: ব্যাকপ্রেশারসহ pipeline, CPU-র জন্য ওয়ার্কার-পুল, সৎ 503-সহ সারি-সিলিং। সমতল স্মৃতি, ফেলা-চাপ, পূর্ণ থ্রুপুট।' } },
];

export interface NodeBeat {
  i: number;
  op: LText;
  route: string; // the request as the lab prints it
}

export const NODE_BEATS: NodeBeat[] = [
  { i: 1, op: { en: 'load balancer liveness probe', bn: 'লোড-ব্যালান্সারের বাঁচা-পরীক্ষা' }, route: 'GET /health → { ok: true }' },
  { i: 2, op: { en: 'login: password compare, 90ms CPU', bn: 'লগইন: পাসওয়ার্ড-তুলনা, 90ms CPU' }, route: 'POST /login → bcrypt.compare' },
  { i: 3, op: { en: 'orders page: 2MB JSON payload', bn: 'অর্ডার-পাতা: 2MB JSON পেলোড' }, route: 'GET /orders → res.json(2MB)' },
  { i: 4, op: { en: 'report: 400ms CPU aggregation', bn: 'রিপোর্ট: 400ms CPU-সংহতকরণ' }, route: 'GET /report → aggregate(events)' },
  { i: 5, op: { en: 'receipt download: 50MB PDF', bn: 'রশিদ-ডাউনলোড: 50MB PDF' }, route: 'GET /receipts/9/download' },
  { i: 6, op: { en: 'order placed — one item price-tampered', bn: 'অর্ডার জমা — একটি আইটেমের দাম বিকৃত' }, route: 'POST /orders → validate(items) ✗' },
  { i: 7, op: { en: 'bug repro: a promise chain throws', bn: 'বাগ-পুনরুত্পাদন: প্রতিশ্রুতি-শৃঙ্খলে ছোড়া ত্রুটি' }, route: 'GET /debug/async-throw' },
  { i: 8, op: { en: 'marketing blast: 50 clients hit /report at once', bn: 'মার্কেটিং-বিস্ফোরণ: 50 ক্লায়েন্ট একসঙ্গে /report-এ' }, route: 'GET /report × 50 concurrent' },
];

export type NodeVerdict =
  | 'served'            // clean response
  | 'blocked'           // the event loop stalled on this beat
  | 'buffered'          // whole payload held in RAM
  | 'streamed'          // pipe + backpressure: flat memory, paced by the client
  | 'worker-offloaded'  // CPU job ran on the worker pool, loop untouched
  | 'error-propagated'  // next(err) carried it to the one 4-arg home
  | 'hung'              // client waited out the full 30s timeout
  | 'swallowed'         // the error fell into the void un-caught
  | 'crashed'           // the process exited mid-request
  | 'refused'           // ECONNREFUSED — nobody home
  | 'queued'            // burst absorbed on the loop, last client pays the full sum
  | 'load-shed';        // 503 + Retry-After under an honest queue ceiling

interface NodeBeatRow {
  verdict: NodeVerdict;
  blockedMs: number;  // loop stall this beat
  latencyMs: number;  // this request's end-to-end wait
  hung: number;       // clients left waiting past timeout this beat
  swallowed: number;  // errors lost this beat
  ehHits: number;     // 4-arg error middleware hits this beat
  memMB: number;      // RSS watermark observed this beat
}

/** The law table: verdict + per-beat arithmetic for the 8 beats. */
const TABLE: Record<NodeLaw, NodeBeatRow[]> = {
  blocker: [
    { verdict: 'served', blockedMs: 0, latencyMs: 2, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 90, latencyMs: 90, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 8, latencyMs: 10, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 400, latencyMs: 400, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'buffered', blockedMs: 400, latencyMs: 420, hung: 0, swallowed: 0, ehHits: 0, memMB: 90 },
    { verdict: 'error-propagated', blockedMs: 0, latencyMs: 2, hung: 0, swallowed: 0, ehHits: 1, memMB: 40 },
    { verdict: 'crashed', blockedMs: 0, latencyMs: 30000, hung: 1, swallowed: 1, ehHits: 0, memMB: 40 },
    { verdict: 'refused', blockedMs: 0, latencyMs: 0, hung: 50, swallowed: 0, ehHits: 0, memMB: 0 },
  ],
  careless: [
    { verdict: 'served', blockedMs: 0, latencyMs: 2, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'served', blockedMs: 0, latencyMs: 100, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 8, latencyMs: 10, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 400, latencyMs: 400, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'buffered', blockedMs: 0, latencyMs: 450, hung: 0, swallowed: 0, ehHits: 0, memMB: 90 },
    { verdict: 'hung', blockedMs: 0, latencyMs: 30000, hung: 1, swallowed: 1, ehHits: 0, memMB: 40 },
    { verdict: 'swallowed', blockedMs: 0, latencyMs: 30000, hung: 1, swallowed: 1, ehHits: 0, memMB: 40 },
    { verdict: 'queued', blockedMs: 20000, latencyMs: 20000, hung: 0, swallowed: 0, ehHits: 0, memMB: 90 },
  ],
  chained: [
    { verdict: 'served', blockedMs: 0, latencyMs: 2, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'served', blockedMs: 0, latencyMs: 100, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 8, latencyMs: 10, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 400, latencyMs: 400, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'buffered', blockedMs: 0, latencyMs: 450, hung: 0, swallowed: 0, ehHits: 0, memMB: 90 },
    { verdict: 'error-propagated', blockedMs: 0, latencyMs: 2, hung: 0, swallowed: 0, ehHits: 1, memMB: 40 },
    { verdict: 'error-propagated', blockedMs: 0, latencyMs: 3, hung: 0, swallowed: 0, ehHits: 1, memMB: 40 },
    { verdict: 'queued', blockedMs: 20000, latencyMs: 20000, hung: 0, swallowed: 0, ehHits: 0, memMB: 90 },
  ],
  streamed: [
    { verdict: 'served', blockedMs: 0, latencyMs: 2, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'served', blockedMs: 0, latencyMs: 100, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'blocked', blockedMs: 8, latencyMs: 10, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'worker-offloaded', blockedMs: 0, latencyMs: 425, hung: 0, swallowed: 0, ehHits: 0, memMB: 40 },
    { verdict: 'streamed', blockedMs: 0, latencyMs: 880, hung: 0, swallowed: 0, ehHits: 0, memMB: 42 },
    { verdict: 'error-propagated', blockedMs: 0, latencyMs: 2, hung: 0, swallowed: 0, ehHits: 1, memMB: 42 },
    { verdict: 'error-propagated', blockedMs: 0, latencyMs: 3, hung: 0, swallowed: 0, ehHits: 1, memMB: 42 },
    { verdict: 'load-shed', blockedMs: 0, latencyMs: 1600, hung: 0, swallowed: 0, ehHits: 0, memMB: 42 },
  ],
};

const BEAT_NOTES: Record<NodeLaw, string[]> = {
  blocker: [
    'a read of memory: 2ms — the only beat the sync school can afford',
    'bcrypt.compareSync cooks for 90ms with the register held hostage',
    'JSON.parse over 2MB: eight more ms nobody else can be served inside',
    'the aggregate loop burns 400ms — every queued socket rots with it',
    'readFileSync: 400ms of disk-plus-parse, whole 50MB held in one buffer — RSS 40 → 90',
    'a SYNC throw in the route: Express catches it itself — the only mercy the framework offers free',
    'a throw inside an async callback has no catch chain: the process exits with one client mid-request',
    'no process, no answer: 50 connections refused in 4ms',
  ],
  careless: [
    '2ms — indistinguishable from discipline on a cheap beat',
    'bcrypt async on the libuv pool: 100ms wall, 0ms stall — the one win this school pockets',
    'res.json serializing 2MB is still 8ms of loop: async habit ends at the serializer',
    'the 400ms loop is still sync — a promise around it changes nothing',
    'fs.readFile keeps the loop free but the RAM pays: whole 50MB buffered (RSS 90)',
    'a rejection inside an unwrapped async handler: no next(err), no error home — the client waits 30s and dies by timeout',
    'another unhandled rejection, logged as a warning: two errors, one burned client, and the void keeps quiet',
    'the burst still runs the 400ms loop on the one thread: 50 × 400 = 20s for the last socket — survived, not served',
  ],
  chained: [
    '2ms through a clean ordered chain: logger → auth → route → home',
    'bcrypt async + awaited properly: 100ms wall, loop free, error path armed',
    'the serialize tax is still 8ms — middleware discipline does not print CPU',
    '400 sync ms — the chain survives it but cannot spend it better: last-burst arithmetic is waiting',
    'readFile into memory is CORRECT but not CHEAP: RSS still climbs to 90',
    'wrapped handler: the tampered price throws asynchronously, the wrapper catches, next(err) walks to the one 4-arg home → 400 with a request id',
    'same wrapper, second catch → 500 with correlation — two beats, two clean landings, one home',
    'the honest bill still lands: 50 × 400 on one thread = 20s for the tail. The chain promises survival, not speed',
  ],
  streamed: [
    '2ms — discipline is invisible when it is cheap',
    '100ms wall, 0ms stall — pool discipline unchanged',
    '8ms serializer tax recorded honestly — nobody hid it',
    'the aggregate moves to the worker pool: 425ms wall for this client, 0ms stall for the rest',
    'pipeline(file, res): backpressure paces 50MB in 880ms and RSS holds at 42MB — memory flat by law',
    'same one-home error discipline as the chain: 400 with request id',
    'same one-home error discipline: 500 with correlation id',
    '12 jobs fit the worker queue (4 × 3 rounds ≈ 1.6s for the last), 38 get an honest 503 + Retry-After instead of a 20s queue',
  ],
};

export interface NodeStep {
  beat: NodeBeat;
  verdict: NodeVerdict;
  note: string;
  blockedMsThisBeat: number;
  latencyMsThisBeat: number;
  // cumulative ledger AT this beat:
  blockedMs: number;
  maxLatencyMs: number;
  hungRequests: number;
  swallowedErrors: number;
  errorHandlerHits: number;
  memoryPeakMB: number;
  throughputRps: number;
}

export interface NodeSummary extends Omit<NodeStep, 'beat' | 'verdict' | 'note' | 'blockedMsThisBeat' | 'latencyMsThisBeat'> { law: NodeLaw }

const TAIL_RPS: Record<NodeLaw, number> = { blocker: 0, careless: 3, chained: 3, streamed: 19 };

export function nodeSteps(law: NodeLaw): NodeStep[] {
  let blockedMs = 0, maxLatencyMs = 0, hungRequests = 0, swallowedErrors = 0, errorHandlerHits = 0, memoryPeakMB = 0;
  return NODE_BEATS.map((beat, k) => {
    const row = TABLE[law][k];
    blockedMs += row.blockedMs;
    hungRequests += row.hung;
    swallowedErrors += row.swallowed;
    errorHandlerHits += row.ehHits;
    maxLatencyMs = Math.max(maxLatencyMs, row.latencyMs);
    memoryPeakMB = Math.max(memoryPeakMB, row.memMB);
    return {
      beat, verdict: row.verdict, note: BEAT_NOTES[law][k],
      blockedMsThisBeat: row.blockedMs, latencyMsThisBeat: row.latencyMs,
      blockedMs, maxLatencyMs, hungRequests, swallowedErrors, errorHandlerHits,
      memoryPeakMB, throughputRps: TAIL_RPS[law],
    };
  });
}

export function nodeSummary(law: NodeLaw): NodeSummary {
  const s = nodeSteps(law);
  const last = s[s.length - 1];
  return {
    law, blockedMs: last.blockedMs, maxLatencyMs: last.maxLatencyMs, hungRequests: last.hungRequests,
    swallowedErrors: last.swallowedErrors, errorHandlerHits: last.errorHandlerHits,
    memoryPeakMB: last.memoryPeakMB, throughputRps: last.throughputRps,
  };
}
