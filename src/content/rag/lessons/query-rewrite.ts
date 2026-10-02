import type { Lesson } from '../../../lib/types';

export const QueryRewriteLesson: Lesson = {
  slug: 'query-rewrite',
  tech: 'rag',
  title: {
    en: 'Query Rewrite',
    bn: 'কুয়েরি রিরাইট — বহু-কুয়েরি অন্বেষণ ও রিকল বৃদ্ধি',
  },
  summary: {
    en: 'A single user query accesses only one semantic neighborhood: rewriting 1 query into 3 diverse probes expands initial hits {A,B} into a 5-document union {A,B,C,D,E}, driving recall from 2 to 5. Paraphrased probes explore distant clusters while set unions combine candidate evidence.',
    bn: 'ব্যবহারকারীর একক কুয়েরি কেবল একটি নির্দিষ্ট সেমান্টিক অঞ্চলে অনুসন্ধান করে: ১টি কুয়েরিকে ৩টি বৈচিত্র্যময় প্রব-এ রূপান্তরিত করলে প্রাথমিক {A,B} থেকে ৫টি নথির সমন্বিত ইউনিয়ন {A,B,C,D,E} পাওয়া যায়, যা রিকল ২ থেকে ৫ এ উন্নীত করে। বৈচিত্র্যময় প্রবগুলো দূরবর্তী ক্লাস্টার অন্বেষণ করে এবং সেট ইউনিয়ন সব প্রমাণ একত্রিত করে।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Ask thrice, retrieve wide', bn: 'WHAT — বহুমুখী অনুসন্ধান এবং রিকল বৃদ্ধি' },
    },
    {
      type: 'para',
      text: {
        en: 'In production retrieval, users often state queries using brief, incomplete phrases that miss vital documentation. Query rewriting uses a lightweight language model to generate diverse paraphrases of the original question, executing parallel searches with each variation. While the original query “refund policy?” finds only 2 documents {A, B}, 3 rewritten probes return {A, B, C}, {B, D}, and {C, E}. Taking the union yields {A, B, C, D, E}, boosting candidate recall from 2 to 5 unique documents.',
        bn: 'বাস্তব রিট্রিভাল সিস্টেমে, ব্যবহারকারীরা প্রায়ই সংক্ষিপ্ত বা অসম্পূর্ণ ভাষায় প্রশ্ন করেন যার ফলে প্রয়োজনীয় নথিপত্র অনুসন্ধান থেকে বাদ পড়ে যায়। কুয়েরি রিরাইটিং একটি হালকা ল্যাঙ্গুয়েজ মডেল ব্যবহার করে মূল প্রশ্নের একাধিক বৈচিত্র্যময় রূপ তৈরি করে এবং প্রতিটি রূপ দিয়ে সমান্তরাল অনুসন্ধান চালায়। যেখানে মূল কুয়েরি “রিফান্ড পলিসি?” কেবল ২টি নথি {A, B} খুঁজে পায়, সেখানে ৩টি ভিন্ন প্রব যথাক্রমে {A, B, C}, {B, D}, এবং {C, E} খুঁজে আনে। এদের ইউনিয়ন করলে {A, B, C, D, E} মোট ৫টি অনন্য নথি পাওয়া যায়, যা রিকল ২ থেকে ৫ এ উন্নীত করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Three probes, five hits', bn: 'তিনটি প্রব এবং পাঁচটি সমন্বিত নথি' },
      svg: `<svg viewBox="0 0 640 260" font-family="system-ui, sans-serif" role="img" aria-label="Query rewrite union">
<rect x="220" y="20" width="200" height="34" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="320" y="42" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">“refund policy?” → 2 hits</text>
<g font-size="12" font-weight="700" fill="currentColor">
<rect x="40" y="90" width="160" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="120" y="112" text-anchor="middle">probe 1: reimburse?</text>
<text x="120" y="132" text-anchor="middle" font-weight="600">{A, B, C}</text>
<rect x="240" y="90" width="160" height="60" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="320" y="112" text-anchor="middle">probe 2: returns?</text>
<text x="320" y="132" text-anchor="middle" font-weight="600">{B, D}</text>
<rect x="440" y="90" width="160" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="520" y="112" text-anchor="middle">probe 3: money back?</text>
<text x="520" y="132" text-anchor="middle" font-weight="600">{C, E}</text>
</g>
<line x1="280" y1="54" x2="140" y2="90" stroke="currentColor" stroke-width="1.5"/>
<line x1="320" y1="54" x2="320" y2="90" stroke="currentColor" stroke-width="1.5"/>
<line x1="360" y1="54" x2="500" y2="90" stroke="currentColor" stroke-width="1.5"/>
<rect x="180" y="185" width="280" height="44" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="320" y="212" text-anchor="middle" font-size="14" font-weight="800" fill="currentColor">UNION {A,B,C,D,E} = 5 ✓</text>
<line x1="120" y1="150" x2="260" y2="185" stroke="currentColor" stroke-width="1.5"/>
<line x1="320" y1="150" x2="320" y2="185" stroke="currentColor" stroke-width="1.5"/>
<line x1="520" y1="150" x2="380" y2="185" stroke="currentColor" stroke-width="1.5"/>
</svg>`,
      caption: {
        en: 'A single query accesses two hits, while three diversified probes return five unique documents. Set unions collect evidence that individual queries miss.',
        bn: 'একক কুয়েরি মাত্র দুটি নথি উদ্ধার করে, যেখানে তিনটি বৈচিত্র্যময় প্রব পাঁচটি অনন্য নথি ফেরত আনে। সেট ইউনিয়ন এমন প্রমাণ একত্রিত করে যা একক কুয়েরি মিস করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Query rewriting probe',
          def: {
            en: 'An automatically generated alternative phrasing of a user question engineered to explore distinct semantic regions and vocabulary variations in the index.',
            bn: 'ব্যবহারকারীর প্রশ্নের একটি স্বয়ংক্রিয়ভাবে তৈরি বিকল্প রূপ যা ইনডেক্সের বিভিন্ন সেমান্টিক অঞ্চল এবং ভিন্ন ভিন্ন শব্দভাণ্ডার অন্বেষণ করতে সাহায্য করে।',
          },
        },
        {
          term: 'Candidate set union',
          def: {
            en: 'The mathematical aggregation of all unique document IDs returned across multiple rewritten probe searches (such as {A,B,C,D,E} = 5).',
            bn: 'একাধিক প্রব অনুসন্ধান থেকে প্রাপ্ত সমস্ত অনন্য ডকুমেন্ট আইডির গাণিতিক সমন্বয় (যেমন {A,B,C,D,E} = ৫)।',
          },
        },
        {
          term: 'Recall lift',
          def: {
            en: 'The measurable increase in retrieved relevant documents achieved by multi-query probing compared to single-shot user queries (such as 2 → 5).',
            bn: 'একক কুয়েরির তুলনায় একাধিক প্রব ব্যবহারের ফলে উদ্ধারকৃত প্রাসঙ্গিক নথির দৃশ্যমান বৃদ্ধি (যেমন ২ → ৫)।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Users under-ask', bn: 'কেন — ব্যবহারকারীর সংক্ষিপ্ত প্রশ্নের সীমাবদ্ধতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Users phrase queries narrowly: asking “refund policy?” fails to retrieve passages discussing reimbursement, returns, or money-back guarantees.', bn: 'ব্যবহারকারীরা প্রায়ই সীমাবদ্ধ শব্দে প্রশ্ন করেন: কেবল “রিফান্ড পলিসি” লিখলে ক্ষতিপূরণ বা পণ্য ফেরতের অনুচ্ছেদগুলো অনুসন্ধান থেকে বাদ পড়ে যায়।' },
        { en: 'Recall drives downstream accuracy: context you never retrieved cannot be cited by the model, causing artificial generation failures.', bn: 'রিকল সম্পূর্ণ পাইপলাইনের নির্ভুলতা নির্ধারণ করে: যে তথ্য কখনোই রিট্রিভ করা হয়নি তা মডেল উদ্ধৃত করতে পারে না, ফলে উত্তর অপূর্ণ থেকে যায়।' },
        { en: 'Multi-query probing provides cheap recall insurance: running 3 lightweight probes vastly improves document coverage compared to blind single searches.', bn: 'মাল্টি-কুয়েরি প্রবিং সাশ্রয়ী সুরক্ষা যোগায়: ৩টি ছোট প্রব পরিচালনা করলে একক অনুসন্ধানের তুলনায় তথ্যের পরিধি বহুগুণ বৃদ্ধি পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Rewrite in 4 steps', bn: 'HOW — ৪টি ধাপে কুয়েরি রিরাইট' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Generate paraphrases', bn: '১. বিকল্প রূপ তৈরি' }, text: { en: 'Convert 1 user query into 3 distinct search probes.', bn: 'ব্যবহারকারীর ১টি কুয়েরি থেকে ৩টি ভিন্ন অনুসন্ধানী প্রব তৈরি করুন।' } },
        { title: { en: '2. Execute parallel searches', bn: '২. সমান্তরাল অনুসন্ধান' }, text: { en: 'Retrieve candidate documents for each probe independently.', bn: 'প্রতিটি প্রবের জন্য আলাদাভাবে প্রাসঙ্গিক নথি সংগ্রহ করুন।' } },
        { title: { en: '3. Deduplicate union', bn: '৩. ডুপ্লিকেটহীন ইউনিয়ন' }, text: { en: 'Merge hits into a unified candidate set ({A,B,C,D,E} = 5).', bn: 'প্রাপ্ত ফলাফলগুলোকে একটি অভিন্ন সেটে একত্র করুন ({A,B,C,D,E} = ৫)।' } },
        { title: { en: '4. Rerank survivors', bn: '৪. সেরা নথি নির্বাচন' }, text: { en: 'Pass the 5 deduplicated documents to context budget rankers.', bn: '৫টি অনন্য নথিকে পরবর্তী কনটেক্সট বাজেট বা রি-র‍্যাংকারে পাঠান।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'query_rewrite_sim.py',
      code: `def evaluate_query_probes(original_hits, probe_hits_list):
    union_set = set(original_hits)
    for hits in probe_hits_list:
        union_set = union_set.union(set(hits))
    
    orig_recall = len(set(original_hits))
    union_recall = len(union_set)
    lift = union_recall - orig_recall
    return sorted(list(union_set)), orig_recall, union_recall, lift

# Original query vs 3 rewritten probes
original = ["A", "B"]
probes = [["A", "B", "C"], ["B", "D"], ["C", "E"]]

docs, orig_c, union_c, lift = evaluate_query_probes(original, probes)
print("Query Rewrite Recall Evaluation:")
print(f"Original query hits: {original} (count: {orig_c})")
for i, p in enumerate(probes, start=1):
    print(f"Probe {i} hits: {p}")
print(f"Candidate union: {docs} (count: {union_c})")
print(f"Recall lift: {orig_c} -> {union_c} (+{lift} documents)")

# Adding probe 4 with new hits [E, F]
docs_4, _, union_4, _ = evaluate_query_probes(original, probes + [["E", "F"]])
print(f"\\nAdding Probe 4: union count grows to {union_4} {docs_4} (at cost of 1 extra search latency)")

# Output:
# Query Rewrite Recall Evaluation:
# Original query hits: ['A', 'B'] (count: 2)
# Probe 1 hits: ['A', 'B', 'C']
# Probe 2 hits: ['B', 'D']
# Probe 3 hits: ['C', 'E']
# Candidate union: ['A', 'B', 'C', 'D', 'E'] (count: 5)
# Recall lift: 2 -> 5 (+3 documents)
#
# Adding Probe 4: union count grows to 6 ['A', 'B', 'C', 'D', 'E', 'F'] (at cost of 1 extra search latency)`,
      caption: {
        en: 'The Python simulation measures query expansion recall. The original query retrieves 2 documents while 3 probes yield 5 deduplicated candidates ({A,B,C,D,E}), delivering a +3 recall lift.',
        bn: 'পাইথন সিমুলেশন কুয়েরি সম্প্রসারণের রিকল পরিমাপ করে। মূল কুয়েরি ২টি নথি উদ্ধার করে যেখানে ৩টি প্রব ৫টি অনন্য প্রার্থী ({A,B,C,D,E}) যোগায়, যা +৩ রিকল লিফট দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive rewrite simulator', bn: 'INSIDE — জীবন্ত কুয়েরি রিরাইট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator unions candidate hits across probes [A,B,C], [B,D], and [C,E] against original results [A,B], lifting recall from 2 to 5 items. If you add a fourth probe [E,F], the union expands to 6 documents. Each additional probe purchases recall at the expense of extra retrieval round trips.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি মূল [A,B] ফলাফলের বিপরীতে [A,B,C], [B,D], এবং [C,E] প্রবের ফলাফল একত্রিত করে রিকল ২ থেকে ৫টি নথিতে উন্নীত করে। চতুর্থ প্রব [E,F] যোগ করলে মোট নথি সংখ্যা ৬ এ পৌঁছায়। প্রতিটি অতিরিক্ত প্রব বাড়তি রাউন্ড-ট্রিপ ল্যাটেন্সির বিনিময়ে রিকল বৃদ্ধি করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Rewrite lab (add a probe, press Run)', bn: 'Rewrite lab (প্রোব যোগ, Run)' },
      html: '<h3>Union the probes</h3>\n<pre id="out"></pre>\n<p>Console lists each probe.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdf4; border: 1px solid #16a34a; border-radius: 8px; padding: 10px; }',
      js: 'const orig = ["A","B"];\nconst probes = [["A","B","C"], ["B","D"], ["C","E"]]; // ← add ["E","F"]!\nprobes.forEach((p, i) => console.log("probe " + (i+1) + ": " + p.join(",")));\nconst u = new Set(probes.flat());\ndocument.getElementById("out").textContent = "orig " + orig.length + " → union " + u.size + " {" + [...u].sort().join(",") + "} 🔎";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Rewrite instincts', bn: 'ফলাফল — কুয়েরি রিরাইটের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Proven recall expansion: 3 diversified probes unioned together elevate candidate discovery from 2 to 5 unique hits.', bn: 'প্রমাণিত রিকল সম্প্রসারণ: ৩টি বৈচিত্র্যময় প্রব একত্রিত হয়ে প্রার্থী নথির সংখ্যা ২ থেকে ৫টিতে উন্নীত করে।' },
        { en: 'Latency economics: multi-query probes exchange search round-trip time for document recall, requiring budgeted probe caps.', bn: 'ল্যাটেন্সির হিসাব: মাল্টি-কুয়েরি প্রবিং সময়ের বিনিময়ে নথির প্রাপ্যতা বৃদ্ধি করে, যার জন্য প্রবের সংখ্যা নির্দিষ্ট রাখা জরুরি।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Rewrite traps', bn: 'ডিবাগ — কুয়েরি রিরাইটের ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Drift (the wandering probe)', bn: 'দিকভ্রান্ত কুয়েরির ফাঁদ (Drift)' },
      text: {
        en: 'Unconstrained query rewrites can drift into unrelated topics: for example, expanding “refund policy?” into “company founders and history”. Symptoms: candidate sets swell with irrelevant text while context precision collapses. Cure: enforce strict prompt rules that mandate semantic preservation of user intent.',
        bn: 'অনিয়ন্ত্রিত কুয়েরি রিরাইট মূল বিষয় থেকে সরে যেতে পারে: যেমন “রিফান্ড পলিসি” থেকে “কোম্পানির প্রতিষ্ঠাতার ইতিহাস” এ চলে যাওয়া। লক্ষণ: অপ্রাসঙ্গিক নথিতে কনটেক্সট ভরে যাওয়া এবং প্রিসিশন ধ্বংস হওয়া। প্রতিকার: প্রম্পটে কঠোর নিয়ম দিন যাতে মূল উদ্দেশ্য পুরোপুরি সংরক্ষিত থাকে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'HyDE (answer first, retrieve after)', bn: 'হাইপোথেটিক্যাল উত্তরের মাধ্যমে অনুসন্ধান (HyDE)' },
      text: {
        en: 'Hypothetical Document Embeddings (HyDE) instructs the model to draft a hypothetical answer first, then uses that synthetic text as the retrieval vector. Symptoms of omitting: domain-specific queries fail to find expert jargon. Cure: deploy HyDE when querying dense technical and scientific databases.',
        bn: 'HyDE কৌশলে মডেলকে প্রথমে একটি কাল্পনিক উত্তর খসড়া করতে বলা হয়, তারপর সেই টেক্সটকে ভেক্টর বানিয়ে আসল নথি খোঁজা হয়। লক্ষণ: প্রযুক্তিগত জটিল পরিভাষা একক প্রশ্নে খুঁজে না পাওয়া। প্রতিকার: জটিল বৈজ্ঞানিক বা প্রযুক্তিগত ডেটাসেটে HyDE প্রয়োগ করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems', bn: 'বাস্তব ক্ষেত্র — বাণিজ্যিক সার্চে কুয়েরি রিরাইট' },
    },
    {
      type: 'list',
      items: [
        { en: 'Bing and Google Search: silently expand user search strings into dozens of multi-term parallel retrieval sub-queries.', bn: 'Bing এবং Google সার্চ: ব্যবহারকারীর প্রশ্নকে স্বয়ংক্রিয়ভাবে ডজনখানেক সমান্তরাল সাব-কুয়েরিতে রূপান্তর করে।' },
        { en: 'Perplexity AI: generates follow-up exploratory probes to resolve ambiguities in complex research questions.', bn: 'Perplexity AI: জটিল গবেষণামূলক প্রশ্নের অস্পষ্টতা দূর করতে অনুসন্ধানকারী প্রব তৈরি করে।' },
        { en: 'Enterprise IT support copilots: translate casual employee problem descriptions into formal system error codes before database lookup.', bn: 'আইটি সাপোর্ট বট: কর্মীদের সাধারণ সমস্যাগুলোর বিবরণকে ডেটাবেজে খোঁজার আগে অফিসিয়াল এরর কোডে রূপান্তর করে নেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — RAG Evals', bn: 'পরবর্তী পাঠ — RAG মূল্যায়ন মেট্রিক্স' },
    },
    {
      type: 'para',
      text: {
        en: 'With query rewriting elevating recall, Lesson 7 integrates the complete evaluation suite: balancing faithfulness (0.83) and context precision (0.80) to gate production deployments.',
        bn: 'কুয়েরি রিরাইটের মাধ্যমে রিকল বৃদ্ধির পর, পাঠ ৭ সামগ্রিক মূল্যায়ন ব্যবস্থা আলোচনা করবে: যেখানে বিশ্বস্ততা (০.৮৩) এবং কনটেক্সট প্রিসিশন (০.৮০) সমন্বয় করে প্রোডাকশন রিলিজের সিদ্ধান্ত নেওয়া হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'qex-ex-1',
      kind: 'mcq',
      topic: 'union-compute',
      question: {
        en: 'When three rewritten query probes return hit sets [A,B,C], [B,D], and [C,E], what is the total size of their deduplicated union?',
        bn: 'যখন ৩টি কুয়েরি প্রব যথাক্রমে [A,B,C], [B,D] এবং [C,E] হিট সেট ফেরত দেয়, তখন তাদের ডুপ্লিকেটহীন মোট ইউনিয়নের আকার কত হয়?',
      },
      options: [
        { en: '{A,B,C,D,E} = 5 unique documents', bn: '{A,B,C,D,E} = ৫টি অনন্য নথি' },
        { en: '{A,B} = 2 documents', bn: '{A,B} = ২টি নথি' },
        { en: '{B,C} = 2 documents', bn: '{B,C} = ২টি নথি' },
        { en: '8 documents including duplicate copies', bn: 'ডুপ্লিকেট কপিসহ সর্বমোট ৮টি নথি' },
      ],
      answer: 0,
      hint: { en: 'Combine all unique letters: A, B, C, D, E.', bn: 'সবগুলো অনন্য অক্ষর একত্রিত করুন: A, B, C, D, E।' },
      explanation: {
        en: 'The set union of {A,B,C}, {B,D}, and {C,E} contains exactly 5 unique documents: A, B, C, D, and E.',
        bn: '{A,B,C}, {B,D}, এবং {C,E} এর সেট ইউনিয়নে ঠিক ৫টি অনন্য নথি রয়েছে: A, B, C, D, এবং E।',
      },
    },
    {
      id: 'qex-ex-2',
      kind: 'mcq',
      topic: 'lift-why',
      question: {
        en: 'Why does rewriting a single query into three semantic probes generate a recall lift from 2 to 5 documents?',
        bn: 'একটিমাত্র কুয়েরিকে ৩টি সেমান্টিক প্রব-এ রূপান্তর করলে কেন রিকল ২ থেকে ৫টি নথিতে উন্নীত হয়?',
      },
      options: [
        {
          en: 'Paraphrased variations explore different semantic neighborhoods that single-term queries cannot reach',
          bn: 'বিকল্প রূপগুলো বিভিন্ন সেমান্টিক এলাকা অন্বেষণ করে যেখানে একক শব্দের প্রশ্ন পৌঁছাতে পারে না',
        },
        {
          en: 'The original search query was inherently incorrect and discarded',
          bn: 'মূল সার্চ কুয়েরিটি ভুল ছিল এবং বাতিল করে দেওয়া হয়েছিল',
        },
        {
          en: 'The underlying database forcibly duplicated document records',
          bn: 'ডেটাবেজ জোরপূর্বক একই নথির একাধিক কপি তৈরি করেছিল',
        },
        {
          en: 'Set union operations delete documents from index storage',
          bn: 'সেট ইউনিয়ন প্রক্রিয়া ইনডেক্স থেকে নথি মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'Distinct wordings locate passages indexed under alternative vocabulary.', bn: 'ভিন্ন ভিন্ন শব্দ চয়ন বিকল্প শব্দভাণ্ডারের অধীনে থাকা অনুচ্ছেদগুলো খুঁজে আনে।' },
      explanation: {
        en: 'Terms like “reimburse”, “returns”, and “money back” uncover passages that lacked the exact word “refund”, multiplying discovery.',
        bn: '“রিইমবার্স”, “রিটার্নস” বা “মানি ব্যাক” এর মতো শব্দগুলো এমন অনুচ্ছেদ বের করে যাতে “রিফান্ড” শব্দটি ছিল না।',
      },
    },
    {
      id: 'qex-ex-3',
      kind: 'mcq',
      topic: 'probe-cost',
      question: {
        en: 'If an engineering team adds a fourth probe returning [E,F], what is the primary architectural trade-off incurred for gaining document F?',
        bn: 'যদি কোনো ইঞ্জিনিয়ারিং টিম [E,F] ফেরত পাওয়া চতুর্থ একটি প্রব যুক্ত করে, তবে নথি F পাওয়ার জন্য মূল কোন আর্কিটেকচারাল আপস করতে হয়?',
      },
      options: [
        {
          en: 'Additional retrieval latency and token inference costs in exchange for +1 candidate recall',
          bn: 'অতিরিক্ত +১ রিকল পাওয়ার বিনিময়ে বাড়তি অনুসন্ধান ল্যাটেন্সি এবং টোকেন ইনফারেন্স খরচ বহন করা',
        },
        {
          en: 'Zero cost — adding retrieval probes is completely free and instant',
          bn: 'কোনো খরচ নেই — অনুসন্ধান প্রব যুক্ত করা সম্পূর্ণ বিনামূল্যে এবং তাৎক্ষণিক',
        },
        {
          en: 'Downstream generation precision automatically drops to zero',
          bn: 'পরবর্তী জেনারেশনের নির্ভুলতা স্বয়ংক্রিয়ভাবে শূন্যে নেমে আসে',
        },
        {
          en: 'The candidate set union shrinks in overall size',
          bn: 'প্রার্থী নথির সেটের মোট আকার ছোট হয়ে যায়',
        },
      ],
      answer: 0,
      hint: { en: 'Every additional search round-trip adds network and embedding latency.', bn: 'প্রতিটি বাড়তি অনুসন্ধান নেটওয়ার্ক এবং এমবেডিং ল্যাটেন্সি বৃদ্ধি করে।' },
      explanation: {
        en: 'Expanding the union to 6 documents requires another embedding generation and vector lookup, trading latency for recall.',
        bn: 'ইউনিয়নে ৬টি নথি পেতে আরেকটি এমবেডিং তৈরি ও ভেক্টর অনুসন্ধানের প্রয়োজন হয়, যা ল্যাটেন্সির বিনিময়ে রিকল বাড়ায়।',
      },
    },
    {
      id: 'qex-ex-4',
      kind: 'predict',
      topic: 'drift-fix',
      question: {
        en: 'When rewritten query probes drift from “refund policy” into unrelated topics like “company history”, what failure occurred and how is it resolved?',
        bn: 'যখন রিরাইট করা প্রবগুলো “রিফান্ড পলিসি” থেকে পথভ্রষ্ট হয়ে “কোম্পানির ইতিহাস” এর মতো অপ্রাসঙ্গিক বিষয়ে চলে যায়, তখন কোন ত্রুটি ঘটে এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Constrain rewrites to intent: paraphrase doors, not detour topics.',
      accept: ['constrain', 'intent', 'door', 'detour', 'drift', 'paraphrase', 'limit'],
      hint: { en: 'State constraining rewrites to intent as paraphrase doors rather than detour topics.', bn: 'অন্য বিষয়ে পথভ্রষ্ট না হয়ে কেবল মূল উদ্দেশ্যে বিকল্প রূপ হিসেবে সীমাবদ্ধ করার কথা বলুন।' },
      explanation: {
        en: 'Unconstrained rewriting causes semantic drift. Constraining generation prompts strictly to user intent preserves relevance.',
        bn: 'অনিয়ন্ত্রিত রিরাইট সেমান্টিক বিচ্যুতির জন্ম দেয়। প্রম্পটকে কেবল ব্যবহারকারীর মূল উদ্দেশ্যে সীমাবদ্ধ রাখলে প্রাসঙ্গিকতা বজায় থাকে।',
      },
    },
  ],
  quiz: {
    id: 'query-rewrite-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'qexq1',
        kind: 'mcq',
        topic: 'rewrite-mean',
        question: {
          en: 'What sequence of operations defines the query rewriting technique in production RAG systems?',
          bn: 'প্রোডাকশন RAG সিস্টেমে কুয়েরি রিরাইটিং কৌশলটিকে কোন কার্যপ্রণালীটি সঠিকভাবে সংজ্ঞায়িত করে?',
        },
        options: [
          {
            en: 'Generate multiple intent-aligned paraphrases, execute parallel searches, and union candidate hits',
            bn: 'মূল উদ্দেশ্যের সাথে সামঞ্জস্যপূর্ণ একাধিক বিকল্প প্রশ্ন তৈরি করা, সমান্তরাল সার্চ চালানো এবং প্রাপ্ত ফলাফল একত্র করা',
          },
          {
            en: 'Automatically fix spelling typos without modifying query semantics',
            bn: 'কুয়েরির অর্থ পরিবর্তন না করে কেবল বানান ভুল সংশোধন করা',
          },
          {
            en: 'Strip all grammar words to leave an unstructured bag of terms',
            bn: 'সব ব্যাকরণগত শব্দ মুছে কেবল অসংগঠিত শব্দের স্তূপ তৈরি করা',
          },
          {
            en: 'Translate the query into fifty foreign languages simultaneously',
            bn: 'একসাথে পঞ্চাশটি বিদেশি ভাষায় কুয়েরি অনুবাদ করা',
          },
        ],
        answer: 0,
        hint: { en: 'Generate variations, search concurrently, and combine unique hits.', bn: 'বিকল্প প্রশ্ন তৈরি করুন, একসাথে অনুসন্ধান করুন এবং ফলাফল একত্র করুন।' },
        explanation: {
          en: 'Query rewriting generates multiple complementary probes, searches with each, and merges unique results to maximize recall.',
          bn: 'কুয়েরি রিরাইট একাধিক বিকল্প প্রব তৈরি করে, প্রতিটির মাধ্যমে অনুসন্ধান করে এবং রিকল বাড়াতে ফলাফল একত্রিত করে।',
        },
      },
      {
        id: 'qexq2',
        kind: 'mcq',
        topic: 'hyde-mean',
        question: {
          en: 'How does Hypothetical Document Embeddings (HyDE) improve retrieval for technical domain corpora?',
          bn: 'হাইপোথেটিক্যাল ডকুমেন্ট এমবেডিংস (HyDE) কীভাবে প্রযুক্তিগত ডেটাসেটের জন্য অনুসন্ধান প্রক্রিয়া উন্নত করে?',
        },
        options: [
          {
            en: 'It prompts an LLM to generate a hypothetical answer whose vocabulary mirrors target document passages, then embeds that text',
            bn: 'এটি একটি কাল্পনিক উত্তর তৈরি করে যার শব্দভাণ্ডার আসল নথির সাথে মিলে যায়, তারপর সেই টেক্সটকে ভেক্টরে রূপান্তর করে অনুসন্ধান করে',
          },
          {
            en: 'It encrypts database documents to prevent unauthorized vector access',
            bn: 'এটি ডেটাবেজের নথি এনক্রিপ্ট করে অননুমোদিত ভেক্টর প্রবেশ বন্ধ করে',
          },
          {
            en: 'It deletes ungrounded model answers prior to displaying them',
            bn: 'এটি প্রদর্শনের পূর্বেই ভিত্তিহীন মডেল উত্তরগুলো মুছে ফেলে',
          },
          {
            en: 'It reduces transformer context window sizes to save memory',
            bn: 'এটি মেমরি বাঁচাতে ট্রান্সফর্মারের কনটেক্সট উইন্ডোর আকার কমিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'HyDE drafts a hypothetical answer to bridge question-to-document vocabulary gaps.', bn: 'HyDE প্রশ্ন ও নথির শব্দভাণ্ডারের ফারাক কমাতে কাল্পনিক উত্তর খসড়া করে।' },
        explanation: {
          en: 'HyDE generates a synthetic answer containing domain terminology, creating an embedding closer to authoritative documents.',
          bn: 'HyDE টেকনিক্যাল পরিভাষা সমৃদ্ধ কৃত্রিম উত্তর তৈরি করে, যার এমবেডিং আসল বিশেষজ্ঞ নথির অনেক কাছাকাছি থাকে।',
        },
      },
      {
        id: 'qexq3',
        kind: 'mcq',
        topic: 'underask-why',
        question: {
          en: 'Why do end-user queries typically require automated rewriting before hitting vector databases?',
          bn: 'ভেক্টর ডেটাবেজে পাঠানোর পূর্বে ব্যবহারকারীর কুয়েরিগুলোকে সাধারণত কেন স্বয়ংক্রিয়ভাবে রিরাইট করার প্রয়োজন হয়?',
        },
        options: [
          {
            en: 'Users routinely under-specify questions with single phrases that explore only one narrow cluster neighborhood',
            bn: 'ব্যবহারকারীরা প্রায়ই সংক্ষিপ্ত ভাষায় প্রশ্ন করেন যা কেবল একটিমাত্র সংকীর্ণ ক্লাস্টার অন্বেষণ করতে পারে',
          },
          {
            en: 'Users type faster than database query engines can process',
            bn: 'ব্যবহারকারীরা ডেটাবেজ ইঞ্জিনের চেয়ে দ্রুত গতিতে টাইপ করেন',
          },
          {
            en: 'Direct user questions are legally prohibited from entering vector databases',
            bn: 'ভেক্টর ডেটাবেজে ব্যবহারকারীর সরাসরি প্রশ্ন প্রবেশ করানো আইনিভাবে নিষিদ্ধ',
          },
          {
            en: 'Rewriting is purely an ornamental cosmetic layer with no effect on recall',
            bn: 'রিরাইটিং নিছক একটি অলংকারিক স্তর যার রিকলের ওপর কোনো প্রভাব নেই',
          },
        ],
        answer: 0,
        hint: { en: 'Single phrasing accesses only one cluster in embedding space.', bn: 'একক বাক্য এমবেডিং স্পেসের কেবল একটি ক্লাস্টারে প্রবেশ করতে পারে।' },
        explanation: {
          en: 'Users under-ask, limiting search to a narrow cluster. Generating paraphrases tours neighboring semantic areas to capture missing documents.',
          bn: 'ব্যবহারকারীদের সংক্ষিপ্ত প্রশ্ন কেবল একটি ক্লাস্টারে সীমাবদ্ধ থাকে। বিকল্প বাক্য তৈরি করলে পার্শ্ববর্তী সেমান্টিক এলাকাগুলোও খুঁজে দেখা সম্ভব হয়।',
        },
      },
      {
        id: 'qexq4',
        kind: 'predict',
        topic: 'rewrite-recite',
        question: {
          en: 'What four benchmark metrics summarize the query rewriting pipeline examined in this lesson?',
          bn: 'এই পাঠে আলোচিত কুয়েরি রিরাইটিং পাইপলাইনকে সংক্ষেপে প্রকাশ করে এমন চারটি মূল পরিমাপ কী কী?',
        },
        answer: '3 probes · hits ABC/BD/CE · union 5 · 2→5.',
        accept: ['3', '5', 'union', 'probe', '2', 'ABC', 'recall'],
        hint: { en: 'Mention 3 probes, hit sets ABC/BD/CE, union 5, and recall lift 2 to 5.', bn: '৩টি প্রব, হিট সেট ABC/BD/CE, ৫টি ইউনিয়ন এবং রিকল ২ থেকে ৫ এ বৃদ্ধির কথা বলুন।' },
        explanation: {
          en: 'The query rewrite benchmark: 3 probes, hit sets {A,B,C}, {B,D}, and {C,E}, combined into a 5-document union, lifting recall from 2 to 5.',
          bn: 'কুয়েরি রিরাইটের মূল মানদণ্ড: ৩টি প্রব, হিট সেট {A,B,C}, {B,D}, এবং {C,E}, ৫টি নথির ইউনিয়ন এবং রিকল ২ থেকে ৫ এ উত্তোলন।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'evals-rag',
    title: { en: 'RAG Evals', bn: 'RAG Evals' },
  },
};
