import type { Hub } from '../../lib/types';
import { MeetLlmsLesson } from './lessons/meet-llms';
import { ContextEngineeringLesson } from './lessons/context-engineering';
import { PretrainingDataLesson } from './lessons/pretraining-data';
import { ReasoningCotLesson } from './lessons/reasoning-cot';
import { AgentsToolsLesson } from './lessons/agents-tools';
import { EvalsBenchmarksLesson } from './lessons/evals-benchmarks';
import { ServingDeployLesson } from './lessons/serving-deploy';
import { LlmCapstoneLesson } from './lessons/llm-capstone';

export const llmsHub: Hub = {
  slug: 'llms',
  name: 'LLMs',
  icon: '💬',
  tagline: {
    en: 'Spark ladders, packed desks, data refineries, rented thinking, gated hands, honest metrics, fitted cards — then a mini support agent ships: route → retrieve → reason → answer → judge.',
    bn: 'স্ফুলিঙ্গ-মই, pack-ডেস্ক, ডেটা-শোধনাগার, ভাড়া-চিন্তা, gate-হাত, সৎ-metric, খাপ-card — তারপর mini support agent চালে: route → retrieve → reason → answer → judge।',
  },
  intro: {
    en: 'LESSON 1 meets the spark ladder: same next-token objective from 1M to 10B params, loss 2.50 → 1.24, base vs chat manners. LESSON 2 packs the 8k desk: roles, retrieval over stuffing, the U-curve, a live budget (7,700 spent, 300 left). LESSON 3 refines trillions: crawl → clean → dedupe → mix, BPE merges, Chinchilla pricing (7B = 140B tokens, 5.88e+21 FLOP). LESSON 4 rents thinking: CoT steps, self-consistency votes (42 wins 3/5), test-time compute. LESSON 5 grants hands: function calling, the ReAct loop, schema gates (3/4 = 0.75), least privilege. LESSON 6 measures: pass@k combinatorics (0.40 → 0.98), benchmarks, judges, harnesses. LESSON 7 serves: prefill/decode, batching, quantization (7B: 14.0 → 7.0 → 3.5 GB), SLOs. LESSON 8 launches the mini-agent — the whole hub running as one loop. Graduate with 8 owned skills and keys to hubs #114–#118.',
    bn: 'পাঠ ১ স্ফুলিঙ্গ-মই চেনে: ১M থেকে ১০B param একই next-token লক্ষ্য, loss ২.৫০ → ১.২৪, base বনাম chat ভদ্রতা। পাঠ ২ ৮k ডেস্ক-pack করে: ভূমিকা, stuffing-ওপর retrieval, U-curve, live বাজেট (৭,৭০০ খরচ, ৩০০ বাকি)। পাঠ ৩ trillion-শোধন করে: crawl → clean → dedupe → mix, BPE merge, Chinchilla-দাম (৭B = ১৪০B token, ৫.৮৮e+২১ FLOP)। পাঠ ৪ চিন্তা-ভাড়া করে: CoT ধাপ, self-consistency ভোট (৪২ জেতে ৩/৫), test-time compute। পাঠ ৫ হাত-দেয়: function calling, ReAct loop, schema gate (৩/৪ = ০.৭৫), least privilege। পাঠ ৬ মাপে: pass@k combinatorics (০.৪০ → ০.৯৮), benchmark, বিচারক, harness। পাঠ ৭ serve করে: prefill/decode, batching, quantization (৭B: ১৪.০ → ৭.০ → ৩.৫ GB), SLO। পাঠ ৮ mini-agent চালু করে — এক-loop চলমান পুরো-hub। ৮ অর্জিত দক্ষতা আর hub #১১৪–#১১৮ চাবি নিয়ে গ্র্যাজুয়েট হোন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Scale and memory (L1–L2)', bn: 'ধাপ ১ — Scale আর স্মৃতি (পাঠ ১–২)' },
      items: [
        { en: 'Meet LLMs: spark ladder, scaling law live, base vs chat', bn: 'Meet LLM: স্ফুলিঙ্গ-মই, live scaling law, base বনাম chat' },
        { en: 'Context Engineering: roles, budgets, U-curve, KV cache', bn: 'Context Engineering: ভূমিকা, বাজেট, U-curve, KV cache' },
        { en: 'Exit ticket: read any model card, pack any 8k desk', bn: 'বিদায়-টিকিট: যেকোনো model card পড়া, যেকোনো ৮k ডেস্ক-pack' },
      ],
    },
    {
      title: { en: 'Stage 2 — Data, thought, hands (L3–L5)', bn: 'ধাপ ২ — ডেটা, চিন্তা, হাত (পাঠ ৩–৫)' },
      items: [
        { en: 'Pretraining and Data: refinery, BPE, Chinchilla pricing', bn: 'Pretraining আর Data: শোধনাগার, BPE, Chinchilla-দাম' },
        { en: 'Reasoning and CoT: steps, votes, test-time compute', bn: 'Reasoning আর CoT: ধাপ, ভোট, test-time compute' },
        { en: 'Agents and Tools: function calling, ReAct, schema gates', bn: 'Agent আর Tool: function calling, ReAct, schema gate' },
        { en: 'Exit ticket: route any problem to recall/reason/tool', bn: 'বিদায়-টিকিট: যেকোনো সমস্যা recall/reason/tool-route' },
      ],
    },
    {
      title: { en: 'Stage 3 — Measure, serve, launch (L6–L8)', bn: 'ধাপ ৩ — মাপা, serve, চালু (পাঠ ৬–৮)' },
      items: [
        { en: 'Evals and Benchmarks: pass@k, judges, goldens, harness', bn: 'Eval আর Benchmark: pass@k, বিচারক, golden, harness' },
        { en: 'Serving and Deploy: quantize, batch, cache, SLO-gate', bn: 'Serving আর Deploy: quantize, batch, cache, SLO-gate' },
        { en: 'LLM Capstone: route → retrieve → reason → answer → judge', bn: 'LLM Capstone: route → retrieve → reason → answer → judge' },
        { en: 'Graduation: extend the loop with your docs and defend the judge', bn: 'গ্র্যাজুয়েশন: নিজ-নথিতে loop বাড়িয়ে judge-সমর্থন' },
      ],
    },
  ],
  lessons: [
    MeetLlmsLesson,
    ContextEngineeringLesson,
    PretrainingDataLesson,
    ReasoningCotLesson,
    AgentsToolsLesson,
    EvalsBenchmarksLesson,
    ServingDeployLesson,
    LlmCapstoneLesson,
  ],
  projects: [
    {
      title: { en: 'Project 1 — The think-vs-recall router', bn: 'প্রজেক্ট ১ — Think-vs-recall router' },
      brief: {
        en: 'Build a 3-way router over 30 questions (facts → direct, math → tool, debugging → CoT+vote): measure accuracy + cost per route vs one-size CoT. Deliverable: one page with the confusion table, the $/solve numbers, and a one-paragraph routing law.',
        bn: '৩০ প্রশ্নে ৩-পথ router বানান (তথ্য → সরাসরি, গণিত → tool, debugging → CoT+vote): one-size CoT বনাম প্রতি-route নির্ভুলতা + খরচ মাপুন। ডেলিভারেবল: confusion টেবিল, $/solve সংখ্যা, এক-অনুচ্ছেদ routing আইন — এক পেজ।',
      },
    },
    {
      title: { en: 'Project 2 — Golden-gated support loop', bn: 'প্রজেক্ট ২ — Golden-gate support loop' },
      brief: {
        en: 'Extend the capstone: 20 golden Q/A from your own domain, schema-gated tools with a spend cap, judge threshold tuned to 0 missed goldens. Deliverable: the running page + a short note on which goldens failed first and what fixed them.',
        bn: 'Capstone বাড়ান: নিজ-domain ২০ golden Q/A, খরচ-সীমা schema-gate tool, ০-miss golden judge threshold-ঠিক। ডেলিভারেবল: চলন্ত পেজ + কোন golden আগে-ফেল করল কী-ঠিক করল — ছোট নোট।',
      },
    },
  ],
  bestPractices: [
    { en: 'Balance before bigness: D ≈ 20N or money burns.', bn: 'বড়ত্ব-আগে ভারসাম্য: D ≈ ২০N নয়তো টাকা-পোড়ে।' },
    { en: 'Budget every prompt: roles + retrieval + reserve.', bn: 'প্রতি prompt-বাজেট: ভূমিকা + retrieval + reserve।' },
    { en: 'Reason for multi-step, recall for facts, tools for math.', bn: 'Multi-step-যুক্তি, তথ্য-স্মরণ, গণিত-tool।' },
    { en: 'Gate everything executable; cap every loop.', bn: 'চালানো-সব gate; প্রতি-loop সীমা।' },
    { en: 'Goldens gate launches; judges need evals too.', bn: 'Golden-চালু gate করে; বিচারক-eval দরকার।' },
  ],
  interview: [
    {
      q: { en: 'pass@1 = 0.40 but pass@5 = 0.98. What do you ship?', bn: 'pass@১ = ০.৪০ কিন্তু pass@৫ = ০.৯৮। কী চালাবেন?' },
      a: { en: 'Neither raw number: ship sampling + voting to harvest the ceiling (self-consistency over 5 paths), gate with verifies — and price the 5× tokens into $/solve before promising UX.', bn: 'কাঁচা-সংখ্যা কোনোটা নয়: ceiling-ফসল voting + sampling চালান (৫-পথ self-consistency), যাচাই-gate — আর UX-প্রতিশ্রুতি আগে ৫× token-$/solve দাম করুন।' },
    },
    {
      q: { en: '70B fp16 needs 140GB but you own 2×80GB. Serve it.', bn: '৭০B fp16 ১৪০GB চায় কিন্তু ২×৮০GB আছে। Serve করুন।' },
      a: { en: 'int8 → 70GB weights, leaving 90GB for KV cache + batches; re-run goldens to confirm reasoning survived, then continuous-batch with context×batch caps. Quantization picks the fleet.', bn: 'int8 → ৭০GB ওজন, KV cache + batch-৯০GB রাখে; যুক্তি-টিকে golden আবার-চালিয়ে নিশ্চিত, context×batch সীমা continuous-batch। Quantization-বহর বাছে।' },
    },
    {
      q: { en: 'Agent answers shipping questions from refund policy. Fix in order.', bn: 'Agent shipping-প্রশ্ন refund-policy উত্তর দেয়। ক্রমে ঠিক করুন।' },
      a: { en: 'Misroute cascade. Order: route-confidence floor + clarify fallback (free), judge penalty on route mismatch (cheap), better intent examples/embeddings (real work) — then golden-gate the pair.', bn: 'Misroute cascade। ক্রম: route-আত্মবিশ্বাস floor + স্পষ্ট-fallback (ফ্রি), route-mismatch বিচারক-দণ্ড (সস্তা), ভালো-অভিপ্রায় উদাহরণ/embedding (আসল-কাজ) — তারপর জোড়া golden-gate।' },
    },
    {
      q: {
        en: 'What is the KV cache and why is it essential for efficient autoregressive token generation?',
        bn: 'কেভি ক্যাশ (KV cache) কী এবং অটোরিগ্রেসিভ টোকেন তৈরির ক্ষেত্রে এটি কেন অপরিহার্য?'
      },
      a: {
        en: 'In autoregressive generation, each new token requires attention over all previous tokens. Without caching, prior keys and values must be recomputed from scratch at quadratic compute cost. Caching past Key and Value matrices turns per-token decode step cost from quadratic into linear.',
        bn: 'অটোরিগ্রেসিভ জেনারেশনে প্রতিটি নতুন টোকেনের পূর্ববর্তী সব টোকেনের ওপর অ্যাটেনশন হিসাব করতে হয়। ক্যাশিং না থাকলে আগের কি (Key) ও ভ্যালু (Value) বারবার পুনরায় হিসাব করতে হতো। পূর্ববর্তী Key ও Value সংরক্ষণ করে প্রতি পদক্ষেপে ডিকোড খরচকে দ্বিঘাত থেকে সরলরৈখিকে নামিয়ে আনা হয়।'
      },
    },
  ],
  realWorld: [
    { en: 'Support deflection: routed + grounded + judged loops auto-resolving 40%.', bn: 'Support deflection: route + ground + judge loop ৪০%-auto সমাধান।' },
    { en: 'API fleets: vLLM batching thousands of decodes per GPU.', bn: 'API বহর: GPU-প্রতি হাজার-decode batching vLLM।' },
    { en: 'On-device chat: int4 3B models answering offline.', bn: 'On-device chat: offline-উত্তর int4 ৩B মডেল।' },
  ],
};