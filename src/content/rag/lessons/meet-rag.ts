import type { Lesson } from '../../../lib/types';

export const MeetRagLesson: Lesson = {
  slug: 'meet-rag',
  tech: 'rag',
  title: {
    en: 'Meet RAG',
    bn: 'মিট RAG — রিট্রিভাল-অগমেন্টেড জেনারেশন পরিচিতি',
  },
  summary: {
    en: 'A beginner introduction to Retrieval-Augmented Generation (RAG): retrieve the top-3 document chunks (600 characters of total context), populate the prompt, and generate answers with verifiable citations so that all 3 claims remain 3/3 grounded.',
    bn: 'রিট্রিভাল-অগমেন্টেড জেনারেশন (RAG)-এর প্রাথমিক পরিচিতি: সেরা ৩টি প্রাসঙ্গিক ডকুমেন্ট চাঙ্ক (সর্বমোট ৬০০ অক্ষরের কনটেক্সট) রিট্রিভ করা, প্রম্পটে যুক্ত করা এবং যাচাইযোগ্য উদ্ধৃতিসহ উত্তর তৈরি করা যাতে ৩টি দাবির ৩টিই (৩/৩) তথ্যের ওপর ভিত্তিপ্রাপ্ত থাকে।',
  },
  minutes: 14,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Read, then speak', bn: 'WHAT — পড়ার পর উত্তর প্রদান' },
    },
    {
      type: 'para',
      text: {
        en: 'When language models answer domain-specific questions, Retrieval-Augmented Generation grounds statements in your actual database documents rather than relying on frozen model memory. A search query first retrieves the top-3 relevant chunks (totaling 3 × 200 = 600 characters). Next, your prompt bundles both the user query and retrieved context before asking the model to generate claims. Each synthesized sentence cites its supporting chunk index directly, ensuring 3 of 3 claims remain fully grounded.',
        bn: 'যখন ল্যাঙ্গুয়েজ মডেল কোনো বিশেষ বিষয়ের প্রশ্নের উত্তর দেয়, তখন রিট্রিভাল-অগমেন্টেড জেনারেশন মডেলের পুরনো মেমরির ওপর নির্ভর না করে আপনার ডেটাবেজের প্রকৃত নথির ওপর ভিত্তি করে উত্তর তৈরি করে। একটি সার্চ কুয়েরি প্রথমে সেরা ৩টি প্রাসঙ্গিক চাঙ্ক সংগ্রহ করে (মোট ৩ × ২০০ = ৬০০ অক্ষর)। এরপর প্রম্পটটি কুয়েরি এবং এই কনটেক্সট একত্রিত করে মডেলের কাছে উত্তর প্রেরণের অনুরোধ জানায়। মডেলের প্রতিটি বাক্য তার প্রমাণ হিসেবে চাঙ্ক ইনডেক্স উল্লেখ করে, যা নিশ্চিত করে ৩টি দাবির ৩টিই (৩/৩) বিশ্বস্ত তথ্যের ওপর প্রতিষ্ঠিত।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Three chunks in, three cites out', bn: 'তিনটি চাঙ্ক প্রবেশ এবং তিনটি উদ্ধৃতি নির্গমন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="RAG pipeline from query to cited answer">
<rect x="20" y="95" width="110" height="50" rx="8" fill="#4f46e5" opacity="0.85"/>
<text x="75" y="115" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">QUERY</text>
<text x="75" y="132" text-anchor="middle" font-size="11" fill="#fff">refund?</text>
<text x="140" y="125" font-size="14" font-weight="800" fill="currentColor">→</text>
<g font-size="10" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="160" y="40" width="120" height="44" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="220" y="58">C1 0.91</text><text x="220" y="73">200ch</text>
<rect x="160" y="95" width="120" height="44" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="220" y="113">C2 0.83</text><text x="220" y="128">200ch</text>
<rect x="160" y="150" width="120" height="44" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="220" y="168">C3 0.77</text><text x="220" y="183">200ch</text>
</g>
<text x="290" y="125" font-size="14" font-weight="800" fill="currentColor">→</text>
<rect x="310" y="85" width="130" height="70" rx="8" fill="#fefce8" stroke="#f59e0b" stroke-width="2"/>
<text x="375" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="currentColor">PROMPT</text>
<text x="375" y="124" text-anchor="middle" font-size="11" fill="currentColor">query + 600ch</text>
<text x="375" y="140" text-anchor="middle" font-size="11" fill="currentColor">+ cite!</text>
<text x="450" y="125" font-size="14" font-weight="800" fill="currentColor">→</text>
<rect x="470" y="85" width="150" height="70" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="currentColor">ANSWER ✓</text>
<text x="545" y="124" text-anchor="middle" font-size="11" fill="currentColor">3 claims</text>
<text x="545" y="140" text-anchor="middle" font-size="11" fill="currentColor">[1][2][3] cited</text>
<text x="320" y="225" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">retrieve → stuff → generate → cite</text>
</svg>`,
      caption: {
        en: 'The language model reads relevant chunks before it drafts claims: 3 chunks enter the prompt, producing 3 cited, verifiable answers.',
        bn: 'দাবি খসড়া করার আগে ল্যাঙ্গুয়েজ মডেল প্রাসঙ্গিক চাঙ্ক পড়ে: প্রম্পটে ৩টি চাঙ্ক প্রবেশ করে ৩টি যাচাইযোগ্য উদ্ধৃতিযুক্ত উত্তর দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Retrieval-Augmented Generation',
          def: {
            en: 'An AI architecture that retrieves relevant documents from an external corpus to augment a language model prompt before generating grounded text.',
            bn: 'একটি কৃত্রিম বুদ্ধিমত্তা আর্কিটেকচার যা বহিরাগত ডেটাসেট থেকে প্রাসঙ্গিক নথি অনুসন্ধান করে ল্যাঙ্গুয়েজ মডেলের প্রম্পটে যুক্ত করে বিশ্বস্ত উত্তর উৎপাদন করে।',
          },
        },
        {
          term: 'Grounded claim',
          def: {
            en: 'A specific assertion in the generated output that is directly supported by evidence present in the retrieved context chunks.',
            bn: 'উত্তরে উল্লেখিত একটি সুনির্দিষ্ট দাবি যা রিট্রিভ করা তথ্যের খণ্ডে উপস্থিত নির্ভরযোগ্য প্রমাণের সাথে সরাসরি সামঞ্জস্যপূর্ণ।',
          },
        },
        {
          term: 'Citation pointer',
          def: {
            en: 'An explicit reference link (such as [1], [2], or [3]) connecting an individual statement to its originating source passage.',
            bn: 'একটি সুনির্দিষ্ট রেফারেন্স লিংক (যেমন [১], [২], বা [৩]) যা উত্তরের প্রতিটি বাক্যকে তার মূল তথ্যসূত্রের সাথে সংযুক্ত করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Memory lies, corpora don’t', bn: 'কেন — মডেল মেমরির চেয়ে ডেটাবেজের তথ্য নির্ভরযোগ্য' },
    },
    {
      type: 'list',
      items: [
        { en: 'Pre-trained models hallucinate private facts: public training runs never had access to your proprietary enterprise databases.', bn: 'প্রি-ট্রেইন্ড মডেল অভ্যন্তরীণ তথ্যে বিভ্রান্তি তৈরি করে: ওপেন ট্রেইনিংয়ে আপনার প্রতিষ্ঠানের নিজস্ব ডেটা কখনোই ছিল না।' },
        { en: 'Real-time retrieval reflects fresh data: answers track today’s live documents rather than obsolete weights frozen in past years.', bn: 'রিয়েল-টাইম অনুসন্ধান সর্বদা হালনাগাদ তথ্য প্রদান করে: উত্তরগুলো অতীতের পুরনো ওয়েটের বদলে বর্তমানের সক্রিয় নথি প্রতিফলিত করে।' },
        { en: 'Auditable citations enforce accountability: every statement explicitly directs users and reviewers to supporting document paragraphs.', bn: 'নিরীক্ষাযোগ্য উদ্ধৃতি জবাবদিহিতা নিশ্চিত করে: প্রতিটি বাক্য ব্যবহারকারীকে তার মূল সহায়ক অনুচ্ছেদের দিকে সরাসরি নির্দেশ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — RAG in 4 steps', bn: 'HOW — ৪টি ধাপে RAG পাইপলাইন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Retrieve chunks', bn: '১. চাঙ্ক অনুসন্ধান' }, text: { en: 'Fetch top-3 chunks by similarity scores (0.91, 0.83, 0.77).', bn: 'সাদৃশ্য স্কোর অনুযায়ী সেরা ৩টি চাঙ্ক সংগ্রহ করুন (০.৯১, ০.৮৩, ০.৭৭)।' } },
        { title: { en: '2. Assemble prompt', bn: '২. প্রম্পট তৈরি' }, text: { en: 'Combine user query with 3 × 200 = 600 characters of context.', bn: 'ব্যবহারকারীর কুয়েরির সাথে ৩ × ২০০ = ৬০০ অক্ষরের কনটেক্সট যুক্ত করুন।' } },
        { title: { en: '3. Generate answer', bn: '৩. উত্তর তৈরি' }, text: { en: 'Instruct the model to draft 3 factual statements using the context.', bn: 'কনটেক্সট ব্যবহার করে ৩টি তথ্যভিত্তিক বাক্য খসড়া করতে মডেলকে নির্দেশ দিন।' } },
        { title: { en: '4. Attach citations', bn: '৪. উদ্ধৃতি সংযুক্তি' }, text: { en: 'Ensure all 3/3 claims cite chunks [1], [2], and [3] respectively.', bn: 'নিশ্চিত করুন ৩/৩টি দাবি যথাক্রমে [১], [২], এবং [৩] চাঙ্ক উদ্ধৃত করে।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'rag_pipeline_sim.py',
      code: `def run_toy_rag(chunks, claims_count):
    context_chars = sum(chunks)
    grounded_claims = min(claims_count, len(chunks))
    grounding_rate = grounded_claims / claims_count
    return context_chars, grounded_claims, grounding_rate

# Standard RAG: 3 chunks of 200 chars each, 3 claims
ctx_len, grounded, rate = run_toy_rag([200, 200, 200], 3)
print("Standard RAG pipeline:")
print(f"Chunks retrieved: 3 chunks (total {ctx_len} chars context)")
print(f"Grounded claims: {grounded}/3 ({rate * 100:.1f}%)")

# Dropped chunk: only 2 chunks retrieved
ctx_len2, grounded2, rate2 = run_toy_rag([200, 200], 3)
print("\\nDropped chunk (missing evidence):")
print(f"Chunks retrieved: 2 chunks (total {ctx_len2} chars context)")
print(f"Grounded claims: {grounded2}/3 ({rate2 * 100:.1f}%) -> 1 orphaned claim")

# Output:
# Standard RAG pipeline:
# Chunks retrieved: 3 chunks (total 600 chars context)
# Grounded claims: 3/3 (100.0%)
#
# Dropped chunk (missing evidence):
# Chunks retrieved: 2 chunks (total 400 chars context)
# Grounded claims: 2/3 (66.7%) -> 1 orphaned claim`,
      caption: {
        en: 'The Python simulation measures prompt grounding: 3 chunks of 200 characters provide 600 context characters, supporting 3/3 claims (100.0%); dropping one chunk cuts context to 400 characters, stranding one claim (2/3 grounded).',
        bn: 'পাইথন সিমুলেশন প্রম্পট গ্রাউন্ডিং পরিমাপ করে: ২০০ অক্ষরের ৩টি চাঙ্ক ৬০০ অক্ষরের কনটেক্সট যোগায়, যা ৩/৩টি দাবিকে সমর্থন করে (১০০.০%); একটি চাঙ্ক বাদ দিলে কনটেক্সট ৪০০ অক্ষরে নেমে আসে এবং একটি দাবি প্রমাণহীন হয়ে পড়ে (২/৩ ভিত্তিপ্রাপ্ত)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive RAG simulation', bn: 'INSIDE — জীবন্ত RAG কনটেক্সট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator models the retrieval-to-generation handover. Three 200-character chunks create a 600-character context window that allows the generator to ground all 3 claims. If you edit the code to omit the third chunk (leaving [200, 200]), total context drops to 400 characters, leaving one claim unsupported. Every missing chunk creates orphaned claims.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি রিট্রিভাল থেকে জেনারেশন পর্যন্ত তথ্য প্রবাহ প্রদর্শন করে। তিনটি ২০০ অক্ষরের চাঙ্ক একটি ৬০০ অক্ষরের কনটেক্সট উইন্ডো তৈরি করে যা ৩টি দাবির সবকটিকে সমর্থন দিতে পারে। কোডে তৃতীয় চাঙ্কটি বাদ দিলে (কেবল [২০০, ২০০] রাখলে), মোট কনটেক্সট ৪০০ অক্ষরে নেমে আসে এবং একটি দাবি প্রমাণহীন থেকে যায়। তথ্যের অনুপস্থিতি অমীমাংসিত দাবির জন্ম দেয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'RAG toy (drop C3, press Run)', bn: 'RAG toy (C3 ফেলুন, Run)' },
      html: '<h3>Read, then speak</h3>\n<pre id="out"></pre>\n<p>Console grounds every claim.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const chunks = [200, 200, 200]; // ← try [200, 200] (drop C3)!\nconst ctx = chunks.reduce((a, b) => a + b, 0);\nconsole.log(chunks.length + " chunks → " + ctx + "ch context");\nconst claims = 3;\nconst grounded = Math.min(claims, chunks.length);\nconsole.log(claims + " claims · " + grounded + "/" + claims + " grounded");\ndocument.getElementById("out").textContent = ctx + "ch context · " + grounded + "/" + claims + " grounded 📚";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — RAG instincts', bn: 'ফলাফল — RAG আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Balanced feeding: 3 chunks provide 600 characters of evidence, ensuring 3/3 claims remain strictly grounded in facts.', bn: 'সুষম তথ্য সরবরাহ: ৩টি চাঙ্ক ৬০০ অক্ষরের প্রমাণ যোগায়, যা নিশ্চিত করে ৩/৩টি দাবিই তথ্যের ওপর শক্তভাবে প্রতিষ্ঠিত।' },
        { en: 'Context dictates coverage: dropping a chunk shrinks context to 400 characters, immediately reducing grounding to 2/3.', bn: 'কনটেক্সট পরিধি নির্ধারণ করে: একটি চাঙ্ক বাদ দিলে কনটেক্সট কমে ৪০০ অক্ষর হয় এবং গ্রাউন্ডিং সাথে সাথে ২/৩ এ নেমে আসে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — RAG traps', bn: 'ডিবাগ — RAG বাস্তবায়নের ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Naked generation (the uncited answer)', bn: 'তথ্যসূত্রহীন অনুমানের ফাঁদ (Naked generation)' },
      text: {
        en: 'Generating responses about proprietary data without retrieving context chunks leads to fluent, confident hallucinations. Symptoms: eloquent prose that states plausible-sounding falsehoods. Cure: enforce a strict refusal fallback when zero relevant chunks meet similarity thresholds.',
        bn: 'প্রাসঙ্গিক কনটেক্সট রিট্রিভ না করে অভ্যন্তরীণ তথ্যের উত্তর দিলে সাবলীল অথচ সম্পূর্ণ কাল্পনিক তথ্যের সৃষ্টি হয়। লক্ষণ: সুন্দর বাক্যে আত্মবিশ্বাসী ভুল তথ্য পরিবেশন করা। প্রতিকার: উপযুক্ত চাঙ্ক না পাওয়া গেলে মডেলকে সরাসরি অক্ষমতা প্রকাশ করতে বাধ্য করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Citation theater (the pointed nowhere)', bn: 'ভিত্তিহীন সাইটেশনের সাজসজ্জা (Citation theater)' },
      text: {
        en: 'Appending brackets like [1] or [2] to statements that are not logically entailed by the referenced chunk creates false trust. Symptoms: automated audits fail because chunk text contradicts the claim. Cure: implement natural language inference checks to verify that chunks logically entail their cited claims.',
        bn: 'চাঙ্কের ভেতরে প্রমাণ না থাকা সত্ত্বেও বাক্যের শেষে [১] বা [২] যুক্ত করলে ব্যবহারকারীর কাছে ভুয়া বিশ্বাস তৈরি হয়। লক্ষণ: স্বয়ংক্রিয় অডিটে উদ্ধৃত তথ্যের সাথে বক্তব্যের গরমিল ধরা পড়ে। প্রতিকার: ন্যাচারাল ল্যাঙ্গুয়েজ ইনফারেন্স দিয়ে নিশ্চিত করুন প্রতিটি বক্তব্য তার চাঙ্ক দ্বারা যৌক্তিকভাবে প্রমাণিত।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems', bn: 'বাস্তব ক্ষেত্র — আধুনিক RAG প্রয়োগ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Customer support assistants: query helpdesk documentation to draft step-by-step guides with direct article citations.', bn: 'গ্রাহক সহায়তা অ্যাসিস্ট্যান্ট: হেল্পডেস্কের নথি অনুসন্ধান করে সরাসরি নিবন্ধের লিঙ্কসহ সমাধান তৈরি করে।' },
        { en: 'Legal contract review bots: analyze uploaded clauses and highlight precise contract pages to substantiate legal findings.', bn: 'আইনি চুক্তি নিরীক্ষা বট: আপলোড করা চুক্তিপত্র বিশ্লেষণ করে সুনির্দিষ্ট পাতার উদ্ধৃতিসহ মতামত প্রদান করে।' },
        { en: 'Enterprise search engines: synthesize internal wikis and code repositories into cited summaries for engineering teams.', bn: 'এন্টারপ্রাইজ সার্চ ইঞ্জিন: প্রতিষ্ঠানের ইন্টারনাল উইকি এবং কোড রিপোজিটরি থেকে সারসংক্ষেপ প্রস্তুত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Context Budget', bn: 'পরবর্তী পাঠ — কনটেক্সট বাজেট ব্যবস্থাপনা' },
    },
    {
      type: 'para',
      text: {
        en: 'Now that basic RAG is clear, Lesson 2 examines token budgets: managing an 8,000-token window, reserving room for system instructions and queries, and allocating 6,000 tokens of retrieved context without causing buffer overflow.',
        bn: 'প্রাথমিক RAG আয়ত্ত করার পর, পাঠ ২ টোকেন বাজেট ব্যবস্থাপনা শেখাবে: ৮,০০০ টোকেনের উইন্ডো সামলানো, সিস্টেম ইন্সট্রাকশন ও কুয়েরির জন্য জায়গা রাখা এবং ওভারফ্লো না ঘটিয়ে ৬,০০০ টোকেনের প্রাসঙ্গিক কনটেক্সট বিন্যস্ত করা।',
      },
    },
  ],
  exercises: [
    {
      id: 'rag-ex-1',
      kind: 'mcq',
      topic: 'ctx-size',
      question: {
        en: 'When a system retrieves 3 document chunks of 200 characters each, what is the total prompt context size?',
        bn: 'যখন একটি সিস্টেম প্রতিটিতে ২০০ অক্ষরবিশিষ্ট ৩টি ডকুমেন্ট চাঙ্ক সংগ্রহ করে, তখন প্রম্পটের মোট কনটেক্সট আকার কত হয়?',
      },
      options: [
        { en: '600 characters (3 chunks × 200 characters)', bn: '৬০০ অক্ষর (৩টি চাঙ্ক × ২০০ অক্ষর)' },
        { en: '200 characters total', bn: 'সর্বমোট ২০০ অক্ষর' },
        { en: '900 characters total', bn: 'সর্বমোট ৯০০ অক্ষর' },
        { en: '60 characters total', bn: 'সর্বমোট ৬০ অক্ষর' },
      ],
      answer: 0,
      hint: { en: 'Multiply the number of chunks (3) by character length (200).', bn: 'চাঙ্কের সংখ্যা (৩) কে অক্ষরের দৈর্ঘ্য (২০০) দিয়ে গুণ করুন।' },
      explanation: {
        en: '3 chunks × 200 characters = 600 characters. Context sizing is additive and dictates downstream prompt token usage.',
        bn: '৩টি চাঙ্ক × ২০০ অক্ষর = ৬০০ অক্ষর। কনটেক্সট আকার যোগ পদ্ধতিতে নির্ধারিত হয় এবং প্রম্পটের মোট টোকেন খরচ নিয়ন্ত্রণ করে।',
      },
    },
    {
      id: 'rag-ex-2',
      kind: 'mcq',
      topic: 'ground-rate',
      question: {
        en: 'If an AI response generates 3 distinct factual claims and all 3 cite supporting chunks, what is the grounding rate?',
        bn: 'যদি একটি এআই উত্তর ৩টি স্বতন্ত্র তথ্যভিত্তিক দাবি তৈরি করে এবং ৩টি দাবিই তথ্যসূত্রের চাঙ্ক উল্লেখ করে, তবে গ্রাউন্ডিং হার কত?',
      },
      options: [
        { en: '3/3 = 1.00 (100% grounded)', bn: '৩/৩ = ১.০০ (১০০% ভিত্তিপ্রাপ্ত)' },
        { en: '2/3 = 0.67 grounded', bn: '২/৩ = ০.৬৭ ভিত্তিপ্রাপ্ত' },
        { en: '1/3 = 0.33 grounded', bn: '১/৩ = ০.৩৩ ভিত্তিপ্রাপ্ত' },
        { en: '0/3 = 0.00 ungrounded', bn: '০/৩ = ০.০০ ভিত্তিহীন' },
      ],
      answer: 0,
      hint: { en: 'Divide the number of supported claims (3) by total claims (3).', bn: 'সমর্থিত দাবির সংখ্যা (৩) কে মোট দাবি (৩) দিয়ে ভাগ করুন।' },
      explanation: {
        en: '3 supported claims divided by 3 total claims yields 1.00 (100%). Every generated assertion possesses a verifiable citation link.',
        bn: '৩টি সমর্থিত দাবিকে ৩টি মোট দাবি দিয়ে ভাগ করলে ১.০০ (১০০%) পাওয়া যায়। প্রতিটি দাবির পেছনেই যাচাইযোগ্য রেফারেন্স রয়েছে।',
      },
    },
    {
      id: 'rag-ex-3',
      kind: 'mcq',
      topic: 'drop-c3',
      question: {
        en: 'If chunk C3 is dropped from the context leaving only 2 chunks for 3 claims, what is the resulting grounding score?',
        bn: 'যদি কনটেক্সট থেকে চাঙ্ক C৩ বাদ দেওয়া হয় এবং ৩টি দাবির বিপরীতে মাত্র ২টি চাঙ্ক থাকে, তবে গ্রাউন্ডিং স্কোর কত হবে?',
      },
      options: [
        { en: '2/3 grounded — one claim is left orphaned without evidence', bn: '২/৩ ভিত্তিপ্রাপ্ত — একটি দাবি প্রমাণ ছাড়া অনাথ হয়ে পড়ে' },
        { en: '3/3 grounded — claims can invent their own evidence', bn: '৩/৩ ভিত্তিপ্রাপ্ত — দাবিগুলো নিজে নিজেই প্রমাণ বানিয়ে নিতে পারে' },
        { en: '0/3 grounded — total collapse', bn: '০/৩ ভিত্তিপ্রাপ্ত — সম্পূর্ণ ব্যর্থ' },
        { en: '3/2 — mathematical impossibility', bn: '৩/২ — গাণিতিকভাবে অসম্ভব' },
      ],
      answer: 0,
      hint: { en: 'Only 2 claims can be mapped to the 2 remaining chunks.', bn: 'অবশিষ্ট ২টি চাঙ্কের সাথে কেবল ২টি দাবি মেলানো সম্ভব।' },
      explanation: {
        en: 'min(3 claims, 2 chunks) = 2 grounded claims. Dropping evidence immediately leaves downstream assertions ungrounded.',
        bn: 'min(৩টি দাবি, ২টি চাঙ্ক) = ২টি সমর্থিত দাবি। প্রয়োজনীয় তথ্য বাদ দিলে বক্তব্যের কিছু অংশ ভিত্তিহীন থেকে যায়।',
      },
    },
    {
      id: 'rag-ex-4',
      kind: 'predict',
      topic: 'naked-fix',
      question: {
        en: 'When an AI system answers questions about proprietary data without retrieving any context chunks, what failure occurred and how is it resolved?',
        bn: 'যখন একটি এআই সিস্টেম কোনো কনটেক্সট চাঙ্ক রিট্রিভ না করেই গোপন তথ্যের উত্তর দেয়, তখন কোন ত্রুটি ঘটে এবং তা কীভাবে সংশোধন করা হয়?',
      },
      answer: 'Naked fiction: retrieve or refuse — no chunks, no claims.',
      accept: ['retrieve', 'refuse', 'fiction', 'naked', 'chunks', 'hallucinat', 'ground'],
      hint: { en: 'State naked fiction and the retrieve or refuse rule.', bn: 'নেকেড ফিকশন এবং রিট্রিভ অথবা রিফিউজ করার নিয়মের কথা বলুন।' },
      explanation: {
        en: 'Zero retrieved chunks results in hallucinated fiction. The pipeline must either retrieve valid chunks or explicitly refuse to answer.',
        bn: 'কোনো চাঙ্ক রিট্রিভ না হলে কাল্পনিক তথ্যের জন্ম হয়। পাইপলাইনকে অবশ্যই সঠিক চাঙ্ক রিট্রিভ করতে হবে অথবা উত্তর দিতে অস্বীকৃতি জানাতে হবে।',
      },
    },
  ],
  quiz: {
    id: 'meet-rag-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'ragq1',
        kind: 'mcq',
        topic: 'rag-mean',
        question: {
          en: 'What sequence of operations defines the core Retrieval-Augmented Generation architectural flow?',
          bn: 'কোন কার্যপ্রণালীটি রিট্রিভাল-অগমেন্টেড জেনারেশনের মূল আর্কিটেকচারাল প্রবাহকে সংজ্ঞায়িত করে?',
        },
        options: [
          {
            en: 'Retrieve relevant chunks → Populate prompt with context → Generate answer → Attach verifiable citations',
            bn: 'প্রাসঙ্গিক চাঙ্ক অনুসন্ধান → কনটেক্সট দিয়ে প্রম্পট পূরণ → উত্তর তৈরি → যাচাইযোগ্য উদ্ধৃতি সংযুক্তি',
          },
          {
            en: 'Generate text first → Search random web pages → Refuse response',
            bn: 'প্রথমে টেক্সট তৈরি → এলোমেলো ওয়েব অনুসন্ধান → উত্তর প্রত্যাখ্যান',
          },
          {
            en: 'Read frozen model memory → Ignore user query → Output raw tokens',
            bn: 'মডেলের পুরনো মেমরি পাঠ → কুয়েরি উপেক্ষা → কাঁচা টোকেন আউটপুট',
          },
          {
            en: 'Retrain entire transformer model from scratch on every user query',
            bn: 'প্রতিটি ব্যবহারকারীর কুয়েরির জন্য সম্পূর্ণ মডেল নতুন করে ট্রেইন করা',
          },
        ],
        answer: 0,
        hint: { en: 'Retrieve evidence before generating text, then cite sources.', bn: 'টেক্সট তৈরির আগে প্রমাণ রিট্রিভ করুন, তারপর উৎস উদ্ধৃত করুন।' },
        explanation: {
          en: 'RAG retrieves external evidence first, injects it into the prompt context, generates the answer, and adds citations.',
          bn: 'RAG প্রথমে বহিরাগত তথ্য রিট্রিভ করে, তা প্রম্পটে যুক্ত করে, উত্তর তৈরি করে এবং সাথে উদ্ধৃতি প্রদান করে।',
        },
      },
      {
        id: 'ragq2',
        kind: 'mcq',
        topic: 'why-live',
        question: {
          en: 'Why does grounding generative responses in retrieved external documents outperform frozen model weights?',
          bn: 'রিট্রিভ করা বাহ্যিক ডকুমেন্টের ওপর ভিত্তি করে উত্তর তৈরি করা কেন মডেলের নিজস্ব মেমরির চেয়ে উন্নত?',
        },
        options: [
          {
            en: 'It references today’s live documents with auditable citations rather than relying on stale training weights',
            bn: 'এটি পুরনো মডেল ওয়েটের ওপর নির্ভর না করে আজকের সক্রিয় তথ্য এবং নিরীক্ষাযোগ্য উদ্ধৃতির ওপর ভিত্তি করে',
          },
          {
            en: 'It increases parameter sizes inside the foundation model',
            bn: 'এটি মূল মডেলের প্যারামিটার সংখ্যা বৃদ্ধি করে',
          },
          {
            en: 'It eliminates the need for database storage systems',
            bn: 'এটি ডেটাবেজ স্টোরেজ সিস্টেমের প্রয়োজনীয়তা পুরোপুরি দূর করে',
          },
          {
            en: 'It replaces GPU tensor calculations with simple regex parsing',
            bn: 'এটি জিপিইউ টেনসর গণনাকে সাধারণ রেজেক্স পার্সিং দিয়ে প্রতিস্থাপন করে',
          },
        ],
        answer: 0,
        hint: { en: 'Live data updates instantly without model retraining.', bn: 'মডেল পুনরায় ট্রেইন না করেই সক্রিয় ডেটা তাত্ক্ষণিকভাবে আপডেট হয়।' },
        explanation: {
          en: 'External retrieval provides current facts and private data without the expense of model retraining, accompanied by audit trails.',
          bn: 'বহিরাগত রিট্রিভাল পুনরায় মডেল ট্রেইন না করেই হালনাগাদ তথ্য ও গোপন নথি ব্যবহারের সুযোগ এবং নির্ভরযোগ্য অডিট ট্রেইল দেয়।',
        },
      },
      {
        id: 'ragq3',
        kind: 'mcq',
        topic: 'theater-cure',
        question: {
          en: 'What architectural remedy eliminates citation theater where brackets like [1] appear without actual textual support?',
          bn: 'প্রকৃত তথ্যভিত্তিক প্রমাণ ছাড়া সাজানো উদ্ধৃতি বা সাইটেশন থিয়েটার দূর করতে কোন স্থাপত্য সমাধান গ্রহণ করা হয়?',
        },
        options: [
          {
            en: 'Verify that each cited chunk logically entails the generated claim before outputting',
            bn: 'আউটপুট দেওয়ার পূর্বে নিশ্চিত করুন যে প্রতিটি উদ্ধৃত চাঙ্ক সংশ্লিষ্ট দাবিকে যৌক্তিকভাবে প্রমাণ করে',
          },
          {
            en: 'Append more brackets to make citations look persuasive',
            bn: 'উদ্ধৃতিগুলোকে দেখতে বিশ্বাসযোগ্য করতে আরও বেশি ব্র্যাকেট যুক্ত করা',
          },
          {
            en: 'Remove all reference citations from the user interface completely',
            bn: 'ইউজার ইন্টারফেস থেকে সব ধরনের উদ্ধৃতি সম্পূর্ণভাবে মুছে ফেলা',
          },
          {
            en: 'Double the font size of citation badges',
            bn: 'উদ্ধৃতি ব্যাজের ফন্ট সাইজ দ্বিগুণ করা',
          },
        ],
        answer: 0,
        hint: { en: 'Entailment verification tests whether evidence supports claims.', bn: 'এনটেইলমেন্ট যাচাইকরণ পরীক্ষা করে প্রমাণ বক্তব্যকে সমর্থন করে কিনা।' },
        explanation: {
          en: 'Entailment verification inspects whether the referenced passage actually supports the claim, preventing misleading citation theater.',
          bn: 'এনটেইলমেন্ট যাচাই নিশ্চিত করে যে উল্লেখিত অনুচ্ছেদটি প্রকৃতপক্ষে দাবিটিকে প্রমাণ করে, যা বিভ্রান্তিকর সাইটেশন থিয়েটার বন্ধ করে।',
        },
      },
      {
        id: 'ragq4',
        kind: 'predict',
        topic: 'pipe-recite',
        question: {
          en: 'What four benchmark figures summarize the standard toy RAG pipeline examined in this lesson?',
          bn: 'এই পাঠে আলোচিত স্ট্যান্ডার্ড খেলনা RAG পাইপলাইনটিকে সংক্ষেপে প্রকাশ করে এমন চারটি মূল সংখ্যা কী কী?',
        },
        answer: '3 chunks · 600ch · 3 claims · 3/3 grounded.',
        accept: ['3', '600', 'claims', 'grounded', 'chunks'],
        hint: { en: 'State chunk count, character size, claim count, and grounded fraction.', bn: 'চাঙ্ক সংখ্যা, ক্যারেক্টার সাইজ, দাবির সংখ্যা এবং গ্রাউন্ডেড ভগ্নাংশ উল্লেখ করুন।' },
        explanation: {
          en: 'The pipeline consists of 3 chunks, 600 characters of context, 3 generated claims, and a 3/3 fully grounded outcome.',
          bn: 'পাইপলাইনে ৩টি চাঙ্ক, ৬০০ অক্ষরের কনটেক্সট, ৩টি তৈরি করা দাবি এবং ৩/৩ সম্পূর্ণ ভিত্তিপ্রাপ্ত ফলাফল রয়েছে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'context-budget',
    title: { en: 'Context Budget', bn: 'Context বাজেট' },
  },
};
