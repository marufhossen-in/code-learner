import type { Lesson } from '../../../lib/types';

export const LlmCapstoneLesson: Lesson = {
  slug: 'llm-capstone',
  tech: 'llms',
  title: {
    en: 'LLM Capstone',
    bn: 'মিনি সাপোর্ট এজেন্ট — LLM ক্যাপস্টোন',
  },
  summary: {
    en: 'Ship the semester: a mini support agent — route the query, retrieve evidence (document R wins at 0.996 similarity), vote the action (approve 2/3 = 0.67 margin), and judge-gate the answer (score 0.93 ≥ 0.80 threshold to SHIP). Eight lessons converge in one launchable loop.',
    bn: 'মিনি সাপোর্ট এজেন্ট তৈরি করুন: প্রশ্ন রাউট করা, প্রমাণ সংগ্রহ (পলিসি R জেতে ০.৯৯৬ মিল নিয়ে), সংখ্যাগরিষ্ঠ ভোট (অনুমোদন ২/৩ = ০.৬৭ মার্জিন) এবং বিচারকের মান যাচাই (০.৯৩ ≥ ০.৮০ থ্রেশহোল্ড অতিক্রম করে রিলিজ)। আটটি পাঠ একত্রিত হয়ে একটি কার্যকর প্রোডাকশন লুপ গঠন করে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The launchable loop', bn: 'WHAT — চালু করার মতো লুপ (Launchable Loop)' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build an end-to-end language model application, every earlier lesson converges into a single production pipeline. Scaling laws pick model size, context engineering budgets tokens, curated pretraining data sets capabilities, reasoning prompts navigate complex steps, external tools ground facts, systematic evaluations guard quality, and optimized serving fits memory. The capstone wires five steps: routing by intent, retrieving evidence, reasoning via majority voting, drafting cited answers, and automated judging. For example, a refund query routes with 1 hit, retrieves policy R at 0.996 similarity, and votes approve with 2/3 agreement (0.67 margin). The judge scores 0.93 above the 0.80 threshold to safely ship.',
        bn: 'যখন আপনি একটি পূর্ণাঙ্গ এলএলএম অ্যাপ্লিকেশন তৈরি করেন, তখন আগের প্রতিটি পাঠ একটি সমন্বিত প্রোডাকশন পাইপলাইনে যুক্ত হয়। স্কেলিং সূত্র মডেলের আকার নির্ধারণ করে, কনটেক্সট ইঞ্জিনিয়ারিং টোকেনের বাজেট সামলায়, বাছাইকৃত প্রি-ট্রেইনিং ডেটা সক্ষমতা তৈরি করে, রিজনিং প্রম্পট জটিল ধাপগুলো পার করে, বাহ্যিক টুল বাস্তব তথ্যের নিশ্চয়তা দেয়, পদ্ধতিগত মূল্যায়ন মান নিয়ন্ত্রণ করে এবং অপটিমাইজড সার্ভিং হার্ডওয়্যারে জায়গা করে নেয়। এই ক্যাপস্টোন পাঁচটি ধাপকে সংযুক্ত করে: অভিপ্রায় নির্ধারণ (routing), প্রাসঙ্গিক প্রমাণ সংগ্রহ (retrieval), সংখ্যাগরিষ্ঠ ভোটে সিদ্ধান্ত (reasoning), রেফারেন্সসহ উত্তর লেখা এবং স্বয়ংক্রিয় বিচারক দিয়ে মান যাচাই। যেমন, একটি রিফান্ড অনুরোধ ১টি কিওয়ার্ডে রুট হয়, ০.৯৯৬ মিল থাকা পলিসি R সংগ্রহ করে এবং ২/৩ ভোটে অনুমোদন পায় (০.৬৭ মার্জিন)। এরপর বিচারক ০.৯৩ স্কোর দিয়ে ০.৮০ থ্রেশহোল্ড অতিক্রম করে নিরাপদ রিলিজ নিশ্চিত করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Five stages, one verdict', bn: 'পাঁচ ধাপ, এক-রায়' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Route retrieve reason answer judge pipeline">
<g font-size="10" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="10" y="80" width="108" height="60" rx="10" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="64" y="104">ROUTE 🧭</text>
<text x="64" y="120" font-size="9">refund 1 hit</text>
<text x="126" y="114" font-size="14">→</text>
<rect x="138" y="80" width="108" height="60" rx="10" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
<text x="192" y="104">RETRIEVE 🔍</text>
<text x="192" y="120" font-size="9">R 0.996</text>
<text x="254" y="114" font-size="14">→</text>
<rect x="266" y="80" width="108" height="60" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
<text x="320" y="104">REASON 🗳️</text>
<text x="320" y="120" font-size="9">approve 0.67</text>
<text x="382" y="114" font-size="14">→</text>
<rect x="394" y="80" width="108" height="60" rx="10" fill="#64748b" opacity="0.15" stroke="#64748b" stroke-width="2"/>
<text x="448" y="104">ANSWER ✍️</text>
<text x="448" y="120" font-size="9">cited [R]</text>
<text x="510" y="114" font-size="14">→</text>
<rect x="522" y="80" width="108" height="60" rx="10" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="576" y="104">JUDGE ⚖️</text>
<text x="576" y="120" font-size="9">0.93 SHIP</text>
</g>
<text x="320" y="50" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">“Where is my refund?” → routed, grounded, voted, judged</text>
<rect x="190" y="165" width="260" height="34" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="187" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">judge 0.93 ≥ 0.80 → SHIP ✓</text>
<text x="320" y="220" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">L1 scale · L2 desk · L3 data · L4 vote · L5 tools · L6 judge · L7 card</text>
</svg>`,
      caption: {
        en: 'Queries enter left, verdicts exit right. Every stage auditable, every number readable.',
        bn: 'Query-বামে ঢোকে, রায়-ডানে বেরোয়। প্রতি ধাপ-নিরীক্ষাযোগ্য, প্রতি সংখ্যা-পড়া যায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Query router',
          def: {
            en: 'A classifier or keyword matcher that directs incoming user queries to dedicated specialized prompts or tools.',
            bn: 'একটি ক্লাসিফায়ার বা কিওয়ার্ড ম্যাচিং মেকানিজম যা আগত প্রশ্নকে নির্দিষ্ট বিশেষায়িত প্রম্পট বা টুলে পাঠায়।',
          },
        },
        {
          term: 'Evidence retrieval',
          def: {
            en: 'A vector similarity or keyword search that fetches ground-truth policy documents from a knowledge base.',
            bn: 'ভেক্টর মিল বা কিওয়ার্ড সার্চের মাধ্যমে ডেটাবেজ থেকে আসল পলিসি ডকুমেন্ট বা নির্ভরযোগ্য তথ্য সংগ্রহ।',
          },
        },
        {
          term: 'Majority voting',
          def: {
            en: 'A self-consistency consensus technique where multiple independent reasoning paths vote on the final action.',
            bn: 'একটি সেলফ-কনসিস্টেন্সি টেকনিক যেখানে একাধিক স্বাধীন যুক্তিপথ আলোচনা করে সংখ্যাগরিষ্ঠ ভোটে চূড়ান্ত সিদ্ধান্ত নেয়।',
          },
        },
        {
          term: 'Automated judge gate',
          def: {
            en: 'A scoring model that evaluates combined output quality and citation grounding against a strict threshold.',
            bn: 'একটি স্কোরিং মডেল যা লেখার গুণমান এবং রেফারেন্সের নির্ভরযোগ্যতা একটি কঠোর থ্রেশহোল্ডের সাথে মেপে অনুমোদন দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Integration is the product', bn: 'কেন — একীকরণই হলো আসল পণ্য' },
    },
    {
      type: 'list',
      items: [
        { en: 'Models are rented; loops are owned — routing, grounding, and voting form your proprietary moat.', bn: 'মডেল ভাড়া পাওয়া যায়; লুপের মালিক আপনি — রাউটিং, প্রমাণ সংগ্রহ এবং ভোটিং আপনার নিজস্ব মূল শক্তি।' },
        { en: 'Every stage bills separately: route cheap, retrieve cached, reason voted, judge sampled.', bn: 'প্রতিটি ধাপের খরচ আলাদা: রাউটিং সস্তায় করুন, ক্যাশ থেকে রিট্রিভ করুন, ভোটে সিদ্ধান্ত নিন আর নমুনা ধরে বিচারক চালান।' },
        { en: 'Auditable beats magical: numbers at every stage debug themselves without black-box confusion.', bn: 'অস্পষ্ট জাদুর চেয়ে নিরীক্ষাযোগ্য ব্যবস্থা অনেক ভালো: প্রতিটি ধাপের সংখ্যা নিজেই সমস্যা চিহ্নিত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Run the loop in 5 steps', bn: 'HOW — ৫টি ধাপে লুপ পরিচালনা করুন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Route', bn: '১. রাউট (Route)' }, text: { en: 'Keyword-score intents: refund query wins 1–0 over shipping.', bn: 'কিওয়ার্ডের ভিত্তিতে স্কোর: রিফান্ড কুয়েরি শিপিংয়ের বিরুদ্ধে ১–০ স্কোরে এগিয়ে যায়।' } },
        { title: { en: '2. Retrieve', bn: '২. রিট্রিভ (Retrieve)' }, text: { en: 'Cosine-rank policies: document R achieves 0.996 similarity.', bn: 'কোসাইন মিল অনুসারে সাজানো: পলিসি ডকুমেন্ট R ০.৯৯৬ মিল নিয়ে শীর্ষে থাকে।' } },
        { title: { en: '3. Reason', bn: '৩. রিজন (Reason)' }, text: { en: 'Vote action: approve wins 2/3 = 0.67 margin across paths.', bn: 'সিদ্ধান্তে ভোট: স্বতন্ত্র যুক্তিপথগুলোর মধ্যে approve ২/৩ = ০.৬৭ মার্জিনে জয়ী হয়।' } },
        { title: { en: '4. Answer', bn: '৪. উত্তর (Answer)' }, text: { en: 'Cite evidence: draft response tethered strictly to policy document [R].', bn: 'প্রমাণ উদ্ধৃত করা: পলিসি ডকুমেন্ট [R] এর ওপর ভিত্তি করে স্পষ্ট উত্তর তৈরি করা।' } },
        { title: { en: '5. Judge', bn: '৫. বিচারক (Judge)' }, text: { en: 'Score quality and citations: 0.93 ≥ 0.80 threshold allows safe SHIP.', bn: 'মান ও তথ্যের স্কোর: ০.৯৩ ≥ ০.৮০ থ্রেশহোল্ড অতিক্রম করে নিরাপদ রিলিজ (SHIP) দেয়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'mini_support_agent.py',
      code: `import math

def cosine_similarity(v1, v2):
    dot = sum(a * b for a, b in zip(v1, v2))
    mag1 = math.sqrt(sum(a * a for a in v1))
    mag2 = math.sqrt(sum(b * b for b in v2))
    return dot / (mag1 * mag2)

def route_intent(query):
    refund_words = ["refund", "return", "charge", "money"]
    shipping_words = ["shipping", "tracking", "delivery", "carrier"]
    q = query.lower()
    r_score = sum(1 for w in refund_words if w in q)
    s_score = sum(1 for w in shipping_words if w in q)
    return ("refund" if r_score >= s_score else "shipping"), r_score, s_score

docs = {
    "doc_refund_policy": [0.90, 0.10, 0.20],
    "doc_shipping_faq": [0.10, 0.85, 0.25],
    "doc_warranty_terms": [0.20, 0.20, 0.90]
}
query_emb = [0.85, 0.15, 0.25]

query = "where is my refund for order 402"
intent, r_hits, s_hits = route_intent(query)
print(f"1. ROUTE: intent={intent} (refund={r_hits}, shipping={s_hits})")

scores = {name: cosine_similarity(query_emb, emb) for name, emb in docs.items()}
ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)
top_doc, top_score = ranked[0]
print(f"2. RETRIEVE: top={top_doc} similarity={top_score:.3f}")

votes = ["approve", "approve", "escalate"]
majority = max(set(votes), key=votes.count)
margin = votes.count(majority) / len(votes)
print(f"3. REASON: decision={majority} vote={votes.count(majority)}/{len(votes)} ({margin:.2f})")

answer = f"Refund approved per {top_doc}: processing within 3 business days."
print(f"4. ANSWER: {answer}")

quality_score = 0.90
citation_score = 1.00
judge_score = 0.70 * quality_score + 0.30 * citation_score
verdict = "SHIP" if judge_score >= 0.80 else "HOLD"
print(f"5. JUDGE: score={judge_score:.2f} threshold=0.80 verdict={verdict}")

# Output:
# 1. ROUTE: intent=refund (refund=1, shipping=0)
# 2. RETRIEVE: top=doc_refund_policy similarity=0.996
# 3. REASON: decision=approve vote=2/3 (0.67)
# 4. ANSWER: Refund approved per doc_refund_policy: processing within 3 business days.
# 5. JUDGE: score=0.93 threshold=0.80 verdict=SHIP`,
      caption: {
        en: 'The Python pipeline prints all five stages: refund routed 1-0, policy R retrieved at 0.996, approve voted 2/3 = 0.67, and judge score 0.93 ≥ 0.80 ships.',
        bn: 'পাইথন পাইপলাইন পাঁচটি ধাপই প্রিন্ট করে: রিফান্ড ১-০ স্কোরে রুট হয়, পলিসি R ০.৯৯৬ মিলসহ রিট্রিভ হয়, approve ২/৩ = ০.৬৭ ভোটে অনুমোদিত হয় এবং বিচারকের ০.৯৩ ≥ ০.৮০ স্কোরে রিলিজ পায়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The whole hub, launching', bn: 'INSIDE — পুরো পাইপলাইনের জীবন্ত রূপ' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulation executes all five stages sequentially. The router scores refund at 1 versus shipping at 0, while cosine retrieval ranks policy document R highest at 0.996 similarity. The reasoning stage votes approve with 2/3 agreement (0.67 margin), generating a cited response. Finally, the automated judge computes a weighted score of 0.70 · 0.90 + 0.30 · 1.00 = 0.93, clearing the 0.80 deployment threshold. When you change the query to shipping, the router flips dynamically while the downstream pipeline maintains its structure.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনটি ক্রমানুসারে পাঁচটি ধাপই সম্পন্ন করে। রাউটার শিপিংয়ের ০ এর বিপরীতে রিফান্ডকে ১ স্কোর দেয়, আর কোসাইন রিট্রিভাল পলিসি ডকুমেন্ট R কে সর্বোচ্চ ০.৯৯৬ মিলের ভিত্তিতে নির্বাচন করে। রিজনিং ধাপ ২/৩ সংখ্যাগরিষ্ঠ ভোটে (০.৬৭ মার্জিন) অনুমোদন দিয়ে উদ্ধৃতিসহ উত্তর তৈরি করে। অবশেষে স্বয়ংক্রিয় বিচারক ০.৭০ · ০.৯০ + ০.৩০ · ১.০০ = ০.৯৩ স্কোর হিসাব করে, যা ০.৮০ রিলিজ থ্রেশহোল্ড অতিক্রম করে। আপনি যখন প্রশ্ন পরিবর্তন করে শিপিং দেন, তখন রাউটার নিজে থেকেই পরিবর্তিত হয় অথচ পুরো পাইপলাইনের কাঠামো অপরিবর্তিত থাকে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Mini-agent live (change QUERY, press Run)', bn: 'Mini-agent live (QUERY বদলে Run)' },
      html: '<h3>Five stages, one verdict</h3>\n<pre id="out"></pre>\n<p>Console narrates every stage.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdfa; border: 1px solid #5eead4; border-radius: 8px; padding: 10px; }',
      js: 'const QUERY = "where is my refund"; // ← try "where is my shipment"\nconst INTENTS = { refund: ["refund", "return", "money back"], shipping: ["ship", "track", "deliver"] };\nconst route = Object.entries(INTENTS).map(([k, ws]) => [k, ws.filter((w) => QUERY.includes(w)).length]).sort((a, b) => b[1] - a[1]);\nconsole.log("route: " + route.map(([k, s]) => k + " " + s).join(" vs "));\nconst KB = { R: [0.9,0.1,0.2], S: [0.1,0.9,0.2], W: [0.2,0.2,0.9] };\nconst QV = [0.85, 0.15, 0.25];\nconst cos = (a, b) => a.reduce((t, v, i) => t + v * b[i], 0) / (Math.hypot(...a) * Math.hypot(...b));\nconst ranked = Object.entries(KB).map(([k, v]) => [k, cos(QV, v)]).sort((a, b) => b[1] - a[1]);\nconsole.log("retrieve: " + ranked.map(([k, s]) => k + " " + s.toFixed(3)).join(" / "));\nconst VOTES = ["approve", "approve", "escalate"];\nconst n = VOTES.filter((x) => x === "approve").length;\nconsole.log("reason: approve " + n + "/" + VOTES.length);\nconst judge = 0.7 * 0.9 + 0.3 * 1.0; // quality 0.9, cited 1.0\nconsole.log("judge: " + judge.toFixed(2));\ndocument.getElementById("out").textContent = "route: " + route[0][0] + " (" + route[0][1] + ")\\nretrieve: " + ranked[0][0] + " (" + ranked[0][1].toFixed(3) + ")\\nreason: approve " + n + "/" + VOTES.length + " = " + (n/VOTES.length).toFixed(2) + "\\njudge: " + judge.toFixed(2) + " → " + (judge >= 0.8 ? "SHIP ✓" : "HOLD ✗");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Graduate instincts', bn: 'ফলাফল — দক্ষ ইঞ্জিনিয়ারের দৃষ্টিভঙ্গি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Recite the loop: route → retrieve → reason → answer → judge — the timeless agent skeleton.', bn: 'লুপটি মনে রাখুন: route → retrieve → reason → answer → judge — এটিই এজেন্ট আর্কিটেকচারের মূল কঙ্কাল।' },
        { en: 'Extend it: real intents, your docs in vector store, LLM votes, and sampled judges for production.', bn: 'সম্প্রসারণ করুন: বাস্তব অভিপ্রায়, ভেক্টর ডেটাবেজে নিজস্ব নথি, মডেলের ভোট এবং নিরীক্ষার জন্য বিচারক যোগ করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Loop failures', bn: 'DEBUG — লুপের সম্ভাব্য ত্রুটি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Misroute cascade (wrong door, wrong everything)', bn: 'ভুল রাউটিংয়ের ক্ষতিকর প্রভাব (Misroute cascade)' },
      text: {
        en: 'Bad routing poisons downstream stages: refund evidence answers a shipping question with misplaced confidence. Symptoms: fluent off-topic answers and misleadingly high judge scores. Cure: set a routing confidence floor, add an unclear-fallback handler, and penalize route mismatch.',
        bn: 'শুরুতে ভুল রাউটিং পরবর্তী সব ধাপকে নষ্ট করে দেয়: যেমন শিপিংয়ের প্রশ্নে অতি-আত্মবিশ্বাসের সাথে রিফান্ড পলিসি থেকে উত্তর তৈরি হওয়া। লক্ষণ: সাবলীল হলেও অপ্রাসঙ্গিক উত্তর এবং অসঙ্গতিপূর্ণ উচ্চ স্কোর। প্রতিকার: রাউটিংয়ে সর্বনিম্ন কনফিডেন্স সীমা নির্ধারণ, অস্পষ্ট প্রশ্নের জন্য ক্ল্যারিফিকেশন হ্যান্ডলার রাখা এবং মিসম্যাচে পেনাল্টি দেওয়া।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Judge drift (the gate learns leniency)', bn: 'বিচারকের নমনীয়তা বা শিথিলতা (Judge drift)' },
      text: {
        en: 'Static evaluation models grow stale over time: outdated thresholds pass faulty outputs that human goldens would fail. Symptoms: rising release rates accompanied by increasing customer complaints. Cure: recalibrate judge prompts on fresh golden sets monthly, and audit 5% of releases with humans.',
        bn: 'স্থির বিচারক মডেল সময়ের সাথে অকার্যকর হতে পারে: পুরনো থ্রেশহোল্ড এমন উত্তরকে অনুমোদন দিয়ে দেয় যা গোল্ডেন টেস্টে আটকে যেত। লক্ষণ: সিস্টেমে রিলিজ বাড়লেও ব্যবহারকারীদের অভিযোগের সংখ্যা বাড়া। সমাধান: প্রতি মাসে নতুন গোল্ডেন ডেটাসেট দিয়ে বিচারক টিউন করা এবং ৫% রিলিজ মানুষের মাধ্যমে ম্যানুয়ালি যাচাই করা।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Loops launching', bn: 'বাস্তব ক্ষেত্র — উৎপাদনে ব্যবহৃত লুপ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Customer support deflection: routed, grounded, and judged loops auto-resolve 40% of tier-1 support tickets.', bn: 'কাস্টমার সাপোর্ট অটোমেশন: রাউট, প্রমাণ সংগ্রহ এবং মূল্যায়নের মাধ্যমে ৪০% সাধারণ টিকিট স্বয়ংক্রিয়ভাবে সমাধান হয়।' },
        { en: 'Sales triage: intent routes, evidence drafts, humans close.', bn: 'Sales triage: অভিপ্রায় শনাক্ত বা routes করে প্রমাণ সংগ্রহ হয়, আর মানুষ চুক্তি সম্পন্ন করে।' },
        { en: 'Production operations: autonomous votes propose infrastructure actions while automated judges gate execution.', bn: 'অপারেশনস কোপাইলট: এজেন্ট স্বয়ংক্রিয়ভাবে পদক্ষেপ প্রস্তাব করে আর সেফটি গেট তা যাচাই করে অনুমোদন দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Prompt Engineering awaits', bn: 'পরবর্তী ধাপ — প্রম্পট ইঞ্জিনিয়ারিংয়ের অপেক্ষা' },
    },
    {
      type: 'para',
      text: {
        en: 'You have mastered the foundational mechanics of large language models end-to-end. The next track sharpens prompt craft: few-shot formats, structured system directives, and defense against adversarial injection attacks. Carry this five-stage loop forward: it underpins every advanced LLM system you will build.',
        bn: 'আপনি শুরু থেকে শেষ পর্যন্ত লার্জ ল্যাঙ্গুয়েজ মডেলের মূল ভিত্তিগুলো আয়ত্ত করেছেন। পরবর্তী ট্র্যাক আপনার প্রম্পট তৈরির দক্ষতা আরও শাণিত করবে: ফিউ-শট ফরম্যাট, কাঠামোগত সিস্টেম ডিরেক্টিভ এবং ইনজেকশন আক্রমণ প্রতিরোধের কৌশল। এই পাঁচ ধাপের লুপটি মনে রাখুন: এটি আপনার তৈরি প্রতিটি উন্নত এলএলএম সিস্টেমের ভিত্তি হিসেবে কাজ করবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'lmc-ex-1',
      kind: 'mcq',
      topic: 'loop-order',
      question: {
        en: 'What is the correct sequential order of the 5 stages in the production agent loop?',
        bn: 'প্রোডাকশন এজেন্ট লুপের ৫টি ধাপের সঠিক পর্যায়ক্রমিক ক্রম কোনটি?',
      },
      options: [
        {
          en: 'Route → Retrieve → Reason → Answer → Judge',
          bn: 'রাউট (Route) → রিট্রিভ (Retrieve) → রিজন (Reason) → উত্তর (Answer) → বিচারক (Judge)',
        },
        {
          en: 'Judge → Answer → Reason → Retrieve → Route',
          bn: 'বিচারক (Judge) → উত্তর (Answer) → রিজন (Reason) → রিট্রিভ (Retrieve) → রাউট (Route)',
        },
        {
          en: 'Answer → Judge → Route → Retrieve → Reason',
          bn: 'উত্তর (Answer) → বিচারক (Judge) → রাউট (Route) → রিট্রিভ (Retrieve) → রিজন (Reason)',
        },
        {
          en: 'Retrieve → Judge → Ship → Reason → Answer',
          bn: 'রিট্রিভ (Retrieve) → বিচারক (Judge) → রিলিজ (Ship) → রিজন (Reason) → উত্তর (Answer)',
        },
      ],
      answer: 0,
      hint: { en: 'Determine query intent before fetching evidence.', bn: 'প্রমাণ সংগ্রহের আগেই ব্যবহারকারীর মূল অভিপ্রায় জেনে নিন।' },
      explanation: {
        en: 'Routing classifies user intent, retrieval grounds evidence, reasoning votes on decisions, answering drafts the reply, and the judge gates production release.',
        bn: 'রাউটিং অভিপ্রায় বাছাই করে, রিট্রিভাল প্রমাণ সংগ্রহ করে, রিজনিং যুক্তির মাধ্যমে সিদ্ধান্ত নেয়, অ্যানসারিং উত্তর লেখে এবং বিচারক তা যাচাই করে রিলিজ দেয়।',
      },
    },
    {
      id: 'lmc-ex-2',
      kind: 'mcq',
      topic: 'route-flip',
      question: {
        en: 'When the query changes to "where is my shipment", how does the routing stage evaluate it?',
        bn: 'যখন ব্যবহারকারীর প্রশ্ন পরিবর্তন হয়ে "where is my shipment" হয়, তখন রাউটিং ধাপ কীভাবে মূল্যায়ন করে?',
      },
      options: [
        {
          en: 'Shipping scores 1 versus refund 0 — the loop continues seamlessly while evidence swaps',
          bn: 'শিপিং ১ স্কোর পায় এবং রিফান্ড ০ — লুপের কাঠামো ঠিক থাকে শুধু সংগ্রহ করা নথিপত্র বদলে যায়',
        },
        {
          en: 'Refund still wins because of alphabetical sorting priority',
          bn: 'বর্ণমালার অগ্রাধিকারের কারণে রিফান্ডই জিতে যায়',
        },
        {
          en: 'The execution pipeline crashes due to intent mismatch',
          bn: 'অভিপ্রায় না মেলার কারণে পুরো পাইপলাইন ক্র্যাশ করে',
        },
        {
          en: 'The judge immediately vetoes without checking keywords',
          bn: 'বিচারক কিওয়ার্ড পরীক্ষা না করেই সরাসরি বাতিল করে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'Observe the keyword count in the simulation.', bn: 'সিমুলেশনে কিওয়ার্ডের সংখ্যা পরিবর্তনের দিকে খেয়াল করুন।' },
      explanation: {
        en: 'The word "ship" matches the shipping keyword list once while refund scores zero: the pipeline architecture stays unchanged while the data context updates.',
        bn: '“ship” শব্দটি শিপিং কিওয়ার্ড তালিকায় একবার মেলে কিন্তু রিফান্ডে শূন্য: ফলে আর্কিটেকচার একই রেখে শুধু ডেটা কনটেক্সট আপডেট হয়।',
      },
    },
    {
      id: 'lmc-ex-3',
      kind: 'mcq',
      topic: 'judge-math',
      question: {
        en: 'If the judge formula is 0.70 · quality + 0.30 · cited, what is the score and verdict for an uncited answer where cited=0 and quality=0.90?',
        bn: 'যদি বিচারকের সূত্র হয় ০.৭০ · quality + ০.৩০ · cited, তবে cited=০ এবং quality=০.৯০ হলে উত্তরটির স্কোর এবং সিদ্ধান্ত কী হবে?',
      },
      options: [
        {
          en: '0.63 → HOLD — missing citations fail the 0.80 deployment threshold',
          bn: '০.৬৩ → আটকে রাখা (HOLD) — সাইটেশন না থাকায় ০.৮০ থ্রেশহোল্ডে আটকে যায়',
        },
        {
          en: '0.93 → SHIP — fluent prose bypasses citations',
          bn: '০.৯৩ → রিলিজ (SHIP) — সাবলীল লেখার কারণে সাইটেশন বাদ যায়',
        },
        {
          en: '1.00 → PERFECT — complete answer',
          bn: '১.০০ → নিখুঁত — সম্পূর্ণ উত্তর',
        },
        {
          en: '0.00 → REJECT — zero score',
          bn: '০.০০ → বাতিল — শূন্য স্কোর',
        },
      ],
      answer: 0,
      hint: { en: 'Compute 0.70 · 0.90 + 0.30 · 0.00.', bn: '০.৭০ · ০.৯০ + ০.৩০ · ০.০০ হিসাব করুন।' },
      explanation: {
        en: '0.70 · 0.90 + 0.30 · 0.00 = 0.63. Because 0.63 is below the 0.80 threshold, the output is held. Citations prevent ungrounded hallucinations from shipping.',
        bn: '০.৭০ · ০.৯০ + ০.৩০ · ০.০০ = ০.৬৩। যেহেতু ০.৬৩ হলো ০.৮০ থ্রেশহোল্ডের নিচে, তাই এটি রিলিজ পায় না। সাইটেশন ভিত্তিহীন মনগড়া কথা ছড়ানো আটকায়।',
      },
    },
    {
      id: 'lmc-ex-4',
      kind: 'predict',
      topic: 'cascade-fix',
      question: {
        en: 'When a shipping question is incorrectly answered using the refund policy and the judge scores 0.88 to SHIP, what failure happened and how is it fixed?',
        bn: 'যখন একটি শিপিং প্রশ্নের উত্তর ভুলবশত রিফান্ড পলিসি ব্যবহার করে দেওয়া হয় এবং বিচারক ০.৮৮ স্কোরে রিলিজ দেয়, তখন কোন ব্যর্থতা ঘটে এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Misroute cascade: route-confidence floor + judge penalizes route mismatch.',
      accept: ['misroute', 'cascade', 'route', 'confidence', 'floor', 'mismatch', 'penal'],
      hint: { en: 'Review the misroute cascade section in the debug callout.', bn: 'ডিবাগ সতর্কতার মিসরাউট ক্যাসকেড অংশটি দেখুন।' },
      explanation: {
        en: 'A misroute cascade occurs when an early routing error supplies wrong evidence downstream. Establishing a confidence floor and penalizing route mismatch prevents this.',
        bn: 'ভুল রাউটিংয়ের কারণে ভুল প্রমাণ পরবর্তী ধাপে পৌঁছালে মিসরাউট ক্যাসকেড ঘটে। সর্বনিম্ন কনফিডেন্স সীমা এবং মিসম্যাচ পেনাল্টি দিয়ে এটি প্রতিরোধ করা যায়।',
      },
    },
  ],
  quiz: {
    id: 'llm-capstone-quiz',
    title: { en: 'Capstone exam', bn: 'ক্যাপস্টোন মূল্যায়ন পরীক্ষা' },
    questions: [
      {
        id: 'lmcq1',
        kind: 'mcq',
        topic: 'loop-ownership',
        question: {
          en: 'What is the key engineering insight behind the principle "Models are rented, loops are owned"?',
          bn: '“মডেল ভাড়া নেওয়া হয় কিন্তু লুপ নিজের মালিকানাধীন থাকে” — এই নীতির পেছনের মূল ইঞ্জিনিয়ারিং উপলব্ধি কী?',
        },
        options: [
          {
            en: 'Your proprietary routing, retrieval grounding, and voting logic define your product moat, not public model APIs',
            bn: 'আপনার নিজস্ব রাউটিং, রিট্রিভাল এবং ভোটিং ব্যবস্থাপনাই আপনার আসল শক্তি, বাইরের কোনো সাধারণ মডেল API নয়',
          },
          {
            en: 'Engineering teams must never invoke commercial foundation model APIs',
            bn: 'প্রকৌশলীদের কখনোই কোনো বাণিজ্যিক এআই মডেলের API ব্যবহার করা উচিত নয়',
          },
          {
            en: 'Every software startup must manufacture physical GPU server hardware',
            bn: 'প্রতিটি নতুন স্টার্টআপকে নিজেদের ফিজিক্যাল জিপিইউ সার্ভার তৈরি করতে হবে',
          },
          {
            en: 'Software application loops consume zero computational resources',
            bn: 'সফটওয়্যারের অ্যাপ লুপ চালাতে কোনো কম্পিউটেশনাল রিসোর্স লাগে না',
          },
        ],
        answer: 0,
        hint: { en: 'Think about competitive differentiation.', bn: 'প্রতিযোগিতায় আলাদা অবস্থান তৈরি করার কথা ভাবুন।' },
        explanation: {
          en: 'Anyone can call an API endpoint. Your competitive advantage comes from your system architecture: curated data, prompt routing, tool validation, and quality gates.',
          bn: 'যে কেউ একটি API কল করতে পারে। আপনার প্রতিযোগিতা সক্ষমতা আসে আপনার সিস্টেমের আর্কিটেকচার থেকে: পরিমার্জিত ডেটা, রাউটিং, টুল ভ্যালিডেশন এবং কোয়ালিটি গেট।',
        },
      },
      {
        id: 'lmcq2',
        kind: 'mcq',
        topic: 'margin-read',
        question: {
          en: 'When majority voting lands at 2/3 = 0.67 instead of unanimous 3/3 = 1.00, what action should the agent pipeline take?',
          bn: 'যখন মেজরিটি ভোটিং সর্বসম্মত ৩/৩ = ১.০০ এর বদলে ২/৩ = ০.৬৭ হয়, তখন এজেন্ট পাইপলাইনের কী পদক্ষেপ নেওয়া উচিত?',
        },
        options: [
          {
            en: 'Subject the 0.67 margin response to strict judge scrutiny while unanimous votes fast-track',
            bn: '০.৬৭ মার্জিনের উত্তরকে বিচারকের কড়া পরীক্ষায় পাঠানো এবং সর্বসম্মত ৩/৩ ভোটকে সরাসরি দ্রুত পাস করানো',
          },
          {
            en: 'Treat both consensus outcomes as completely identical without distinction',
            bn: 'উভয় পরিস্থিতিকে পুরোপুরি এক হিসেবে বিবেচনা করা',
          },
          {
            en: 'Automatically ship every 2/3 majority vote without running evaluation gates',
            bn: 'মূল্যায়ন পরীক্ষা ছাড়াই প্রতিটি ২/৩ ভোট সরাসরি রিলিজ করা',
          },
          {
            en: 'Escalate unanimous 3/3 agreements to human support managers',
            bn: 'সর্বসম্মত ৩/৩ ভোটকে মানুষের কাছে পর্যালোচনার জন্য পাঠিয়ে দেওয়া',
          },
        ],
        answer: 0,
        hint: { en: 'Slim consensus margins warrant higher verification.', bn: 'কম ব্যবধানের ভোটে বেশি সতর্কতামূলক পরীক্ষা প্রয়োজন।' },
        explanation: {
          en: 'A narrow majority (0.67 margin) indicates uncertainty across reasoning paths, so the automated judge applies full scrutiny before release.',
          bn: 'কম ব্যবধানের সংখ্যাগরিষ্ঠতা (০.৬৭ মার্জিন) যুক্তিতে সন্দেহের ইঙ্গিত দেয়, তাই রিলিজের আগে বিচারক কঠোরভাবে তা নিরীক্ষা করে।',
        },
      },
      {
        id: 'lmcq3',
        kind: 'mcq',
        topic: 'drift-cure',
        question: {
          en: 'If automated deployments rise while user complaint rates also rise, what failure is occurring and how is it resolved?',
          bn: 'যদি স্বয়ংক্রিয় রিলিজের সংখ্যা বাড়ার সাথে সাথে ব্যবহারকারীদের অভিযোগের হারও বাড়ে, তবে কী সমস্যা হচ্ছে এবং তার সমাধান কী?',
        },
        options: [
          {
            en: 'Judge drift — recalibrate evaluation models on fresh golden test sets and run human audits',
            bn: 'বিচারকের নমনীয়তা বা Judge drift — নতুন গোল্ডেন টেস্ট সেটে পুনরায় মান নির্ণয় করা এবং মানুষের মাধ্যমে অডিট চালানো',
          },
          {
            en: 'Great system success — no configuration changes required',
            bn: 'সিস্টেমের দারুণ সাফল্য — কোনো পরিবর্তনের প্রয়োজন নেই',
          },
          {
            en: 'Users are mistaken — tighten complaint reporting filters',
            bn: 'ব্যবহারকারীরা ভুল করছেন — অভিযোগ গ্রহণের নিয়ম আরও কঠোর করা',
          },
          {
            en: 'Lower the bar — reduce threshold from 0.80 down to 0.50',
            bn: 'মান নামিয়ে দেওয়া — ০.৮০ থ্রেশহোল্ড কমিয়ে ০.৫০ করা',
          },
        ],
        answer: 0,
        hint: { en: 'Leniency in the evaluation gate requires recalibration.', bn: 'মূল্যায়ন গেটের শিথিলতা দূর করতে নতুন ডেটাসেট প্রয়োজন।' },
        explanation: {
          en: 'Judge drift occurs when stale evaluation gates become overly lenient. Periodically recalibrating on updated golden datasets and inspecting 5% of outputs preserves quality.',
          bn: 'পুরনো মূল্যায়ন গেট মাত্রাতিরিক্ত শিথিল হয়ে পড়লে এই সমস্যা হয়। নিয়মিত নতুন গোল্ডেন ডেটাসেটে টিউনিং এবং ৫% আউটপুট নিরীক্ষা মান বজায় রাখে।',
        },
      },
      {
        id: 'lmcq4',
        kind: 'predict',
        topic: 'v1-ship',
        question: {
          en: 'When transitioning this capstone prototype to production v1 next week, what three main components must you swap in?',
          bn: 'পরের সপ্তাহে এই ক্যাপস্টোন প্রোটোটাইপটিকে প্রোডাকশন v1 এ রূপান্তর করতে কোন তিনটি প্রধান অংশ পরিবর্তন করতে হবে?',
        },
        answer: 'Real intents + your docs in KB, LLM votes, sampled judge + logging.',
        accept: ['intent', 'doc', 'kb', 'llm', 'vote', 'judge', 'log'],
        hint: { en: 'Replace the toy mock objects with production infrastructure.', bn: 'নকল মক অবজেক্টগুলোর জায়গায় বাস্তব অবকাঠামো যুক্ত করার কথা ভাবুন।' },
        explanation: {
          en: 'To make the prototype production-ready, replace mock dictionaries with real intent routers and company documents, connect foundation models for voting, and implement audit logging.',
          bn: 'প্রোটোটাইপটিকে প্রোডাকশনে নিতে মক ডিকশনারির বদলে আসল কিওয়ার্ড ও নথি যুক্ত করুন, মডেল দিয়ে ভোটিং করান এবং অডিট লগিং চালু করুন।',
        },
      },
    ],
  },
};
