import type { Hub } from '../../lib/types';
import { MeetRagLesson } from './lessons/meet-rag';
import { ContextBudgetLesson } from './lessons/context-budget';
import { CitationsLesson } from './lessons/citations';
import { GroundingClaimsLesson } from './lessons/grounding-claims';
import { HybridSearchLesson } from './lessons/hybrid-search';
import { QueryRewriteLesson } from './lessons/query-rewrite';
import { EvalsRagLesson } from './lessons/evals-rag';
import { RagCapstoneLesson } from './lessons/rag-capstone';

export const ragHub: Hub = {
  slug: 'rag',
  name: 'RAG',
  icon: '📚',
  tagline: {
    en: 'Ground every answer in your data: chunks, budgets, receipts, floors, fusions, probes, dials — one launch verdict, end to end.',
    bn: 'প্রতি-উত্তর ডেটা-ভিত্তি: খণ্ড, বাজেট, রসিদ, মেঝে, fusion, প্রোব, dial — এক চালু-রায়, শুরু-শেষ।',
  },
  intro: {
    en: 'LESSON 1 retrieves: top-3 chunks, 600 chars, 3/3 grounded. LESSON 2 budgets: 8000-window wallet, 6000 context, 1700 reserve. LESSON 3 cites: 4/5 entailed, precision 0.80, phantom C9 caught. LESSON 4 grounds: 6 claims, S5 floats, faithfulness 0.83. LESSON 5 fuses: D7 0.03227 beats D1 0.03200, RRF rescues. LESSON 6 rewrites: 3 probes, union 5, recall 2 → 5. LESSON 7 gates: min(0.83, 0.80) SHIPs. LESSON 8 launches — one pipeline, one signature. Graduate with 8 owned skills and keys to hub #119+.',
    bn: 'পাঠ ১ retrieve করে: top-৩ খণ্ড, ৬০০-অক্ষর, ৩/৩ grounded। পাঠ ২ বাজেট: ৮০০০-window ওয়ালেট, ৬০০০-context, ১৭০০-রিজার্ভ। পাঠ ৩ উদ্ধৃত: ৪/৫ entail, নির্ভুলতা ০.৮০, ভূত-C৯ ধরা। পাঠ ৪ ground করে: ৬-দাবি, S৫ ভাসে, বিশ্বস্ততা ০.৮৩। পাঠ ৫ মেশায়: D৭ ০.০৩২২৭ D১ ০.০৩২০০-হারায়, RRF-উদ্ধার। পাঠ ৬ পুনর্লেখে: ৩-প্রোব, union ৫, recall ২ → ৫। পাঠ ৭ gate করে: min(০.৮৩, ০.৮০) SHIP। পাঠ ৮ চালু করে — এক-pipeline, এক-স্বাক্ষর। ৮ অর্জিত দক্ষতা আর hub #১১৯+ চাবি নিয়ে গ্র্যাজুয়েট হোন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Retrieve and budget (L1–L2)', bn: 'ধাপ ১ — Retrieve আর বাজেট (পাঠ ১–২)' },
      items: [
        { en: 'Meet RAG: 3 chunks, 600 chars, 3/3', bn: 'Meet RAG: ৩-খণ্ড, ৬০০-অক্ষর, ৩/৩' },
        { en: 'Budget: 6000 context, 1700 reserve', bn: 'বাজেট: ৬০০০-context, ১৭০০-রিজার্ভ' },
        { en: 'Exit ticket: stuff any context without overflow', bn: 'বিদায়-টিকিট: overflow-ছাড়া যেকোনো-context ভরুন' },
      ],
    },
    {
      title: { en: 'Stage 2 — Prove and ground (L3–L4)', bn: 'ধাপ ২ — প্রমাণ আর ভিত্তি (পাঠ ৩–৪)' },
      items: [
        { en: 'Citations: 4/5 entailed, 0.80', bn: 'উদ্ধৃতি: ৪/৫ entail, ০.৮০' },
        { en: 'Grounding: 5/6 floors, S5 floats', bn: 'Grounding: ৫/৬ মেঝে, S৫ ভাসে' },
        { en: 'Exit ticket: audit any answer claim by claim', bn: 'বিদায়-টিকিট: যেকোনো-উত্তর দাবি-প্রতি নিরীক্ষা' },
      ],
    },
    {
      title: { en: 'Stage 3 — Fuse and widen (L5–L6)', bn: 'ধাপ ৩ — মেশানো আর চওড়া (পাঠ ৫–৬)' },
      items: [
        { en: 'Hybrid: D7 0.03227 tops D1', bn: 'Hybrid: D৭ ০.০৩২২৭ D১-শীর্ষ' },
        { en: 'Rewrite: 3 probes, recall 2 → 5', bn: 'পুনর্লিখন: ৩-প্রোব, recall ২ → ৫' },
        { en: 'Exit ticket: rescue any buried hit', bn: 'বিদায়-টিকিট: যেকোনো-পোঁতা hit উদ্ধার' },
      ],
    },
    {
      title: { en: 'Stage 4 — Gate and launch (L7–L8)', bn: 'ধাপ ৪ — Gate আর চালু (পাঠ ৭–৮)' },
      items: [
        { en: 'Evals: min 0.80 SHIPs, 0.67 vetoes', bn: 'Eval: min ০.৮০ SHIP, ০.৬৭ veto' },
        { en: 'Capstone: 5 stages, one signature', bn: 'Capstone: ৫-ধাপ, এক-স্বাক্ষর' },
        { en: 'Exit ticket: gate every launch forever', bn: 'বিদায়-টিকিট: প্রতি-চালু gate করুন, চিরতরে' },
      ],
    },
  ],
  lessons: [
    MeetRagLesson,
    ContextBudgetLesson,
    CitationsLesson,
    GroundingClaimsLesson,
    HybridSearchLesson,
    QueryRewriteLesson,
    EvalsRagLesson,
    RagCapstoneLesson,
  ],
  projects: [
    {
      title: { en: 'Project 1 — The grounded support bot', bn: 'প্রজেক্ট ১ — Grounded support bot' },
      brief: {
        en: 'Build a docs bot over 200 help pages: rewrite 1→3, hybrid-fuse top-10, cite every claim, and gate deploys on 50 golden Q&As (min 0.80). Deliverable: the running bot page + a one-page launch report with both dials, the verdict, and your signature.',
        bn: '২০০-সহায়তা পেজ support bot-তৈরি: ১→৩ পুনর্লিখন, top-১০ hybrid-fuse, প্রতি-দাবি উদ্ধৃত, ৫০-golden Q&A deploy-gate (min ০.৮০)। ডেলিভারেবল: চলন্ত-bot পেজ + উভয়-dial, রায়, স্বাক্ষর — এক পেজ চালু-report।',
      },
    },
    {
      title: { en: 'Project 2 — The regression watchdog', bn: 'প্রজেক্ট ২ — Regression প্রহরী' },
      brief: {
        en: 'Corpus edits rot pipelines silently: build a nightly eval harness that reruns goldens, plots faithfulness × precision over 30 days, and pages when min dips below 0.80. Deliverable: the dashboard page + a short incident report from one caught regression.',
        bn: 'Corpus-সম্পাদনা pipeline-নীরবে পচায়: nightly eval-harness তৈরি — golden পুনরায়, ৩০-দিন বিশ্বস্ততা × নির্ভুলতা plot, min ০.৮০-নিচে page। ডেলিভারেবল: dashboard পেজ + ধরা-এক regression ছোট incident-report।',
      },
    },
  ],
  bestPractices: [
    { en: 'Budget context 75%; reserve never below 15%.', bn: 'Context ৭৫% বাজেট; রিজার্ভ-কখনো ১৫%-নিচে নয়।' },
    { en: 'Cite only retrieved IDs; split claims atomic.', bn: 'শুধু retrieve-ID উদ্ধৃত; দাবি-পারমাণবিক ভাগ।' },
    { en: 'Fuse ranks (RRF), never raw scores.', bn: 'Rank (RRF) মেশান, কাঁচা-score কখনো নয়।' },
    { en: 'Rewrite 1→3; union, then rerank.', bn: '১→৩ পুনর্লিখন; union, তারপর rerank।' },
    { en: 'Gate every deploy: min ≥ 0.80 on goldens.', bn: 'প্রতি-deploy gate: golden-min ≥ ০.৮০।' },
  ],
  interview: [
    {
      q: { en: 'Faithfulness 0.95 but users complain answers miss facts. Diagnose.', bn: 'বিশ্বস্ততা ০.৯৫ কিন্তু ব্যবহারকারী-অভিযোগ উত্তর-তথ্য মিস। রোগ বলুন।' },
      a: { en: 'Recall starvation: faithful to too little — widen rewrites (1→5), check context precision for junk crowding, then grow top-k. Truthful but thin: fetch more, then ground.', bn: 'Recall-অনাহার: অল্প-বিশ্বস্ত — পুনর্লিখন-চওড়া (১→৫), junk-ভিড় context-নির্ভুলতা দেখুন, তারপর top-k বাড়ান। সত্য কিন্তু পাতলা: বেশি-আনুন, তারপর ground।' },
    },
    {
      q: { en: 'Precision 1.00, faithfulness 0.40. Where is the bug?', bn: 'নির্ভুলতা ১.০০, বিশ্বস্ততা ০.৪০। Bug-কোথায়?' },
      a: { en: 'The writer, not retrieval: clean chunks, lying generator — tighten grounding prompts, split claims atomic, cite-or-drop. Retrieval innocent: put the generator on trial.', bn: 'Retrieval নয়, লেখক: পরিষ্কার-খণ্ড, মিথ্যা-generator — grounding prompt-আঁটুন, দাবি-পারমাণবিক ভাগ, উদ্ধৃত-বা-বাদ। Retrieval-নির্দোষ: generator-বিচার করুন।' },
    },
    {
      q: { en: 'Evals green at deploy, red a month later. What rotted?', bn: 'Deploy-eval সবুজ, মাস-পরে লাল। কী-পচলো?' },
      a: { en: 'Silent regression: corpus edits shifted retrieval — diff golden verdicts by week, find the losing chunks, re-gate. Launches expire: schedule goldens, page on dips.', bn: 'নীরব-regression: corpus-সম্পাদনা retrieval-সরালো — সপ্তাহ-golden রায় diff, হারা-খণ্ড খুঁজুন, পুনরায়-gate। চালু-মেয়াদোত্তীর্ণ: golden-নির্ধারণ, dip-page।' },
    },
    {
      q: {
        en: 'How do you choose between simple single-shot RAG and multi-hop agentic retrieval?',
        bn: 'সাধারণ সিঙ্গেল-শট RAG এবং মাল্টি-হপ এজেনটিক রিট্রিভালের মধ্যে কীভাবে সিদ্ধান্ত নেবেন?',
      },
      a: {
        en: 'Single-shot RAG suits direct fact-seeking where a single chunk contains the complete answer. Multi-hop retrieval is necessary when answers require synthesising multiple distant documents, resolving cross-chunk references, or executing iterative queries with intermediate verification.',
        bn: 'সিঙ্গেল-শট RAG সরাসরি তথ্য অনুসন্ধানের জন্য উপযুক্ত যেখানে একটি মাত্র খণ্ডে সম্পূর্ণ উত্তর থাকে। যখন একাধিক বিচ্ছিন্ন নথির তথ্য সংশ্লেষণ, বিভিন্ন খণ্ডের পারস্পরিক রেফারেন্স সমাধান বা অন্তর্বর্তী যাচাইসহ পুনরাবৃত্তিমূলক অনুসন্ধানের প্রয়োজন হয়, তখন মাল্টি-হপ রিট্রিভাল অপরিহার্য।',
      },
    },
  ],
  realWorld: [
    { en: 'Perplexity: rewrite → fuse → cite → gate.', bn: 'Perplexity: পুনর্লিখন → fuse → উদ্ধৃত → gate।' },
    { en: 'Support copilots: grounded or escalated.', bn: 'Support-copilot: grounded বা escalate।' },
    { en: 'Legal search: every claim receipted.', bn: 'Legal-search: প্রতি-দাবি রসিদ।' },
  ],
};