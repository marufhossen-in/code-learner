import type { Lesson } from '../../../lib/types';

export const AgentsToolsLesson: Lesson = {
  slug: 'agents-tools',
  tech: 'llms',
  title: {
    en: 'Agents and Tools',
    bn: 'মস্তিষ্ক-হাত: function calling, ReAct loop, planner, স্মৃতি — LLMs'
  },
  summary: {
    en: 'Hands for the brain: function calling, the ReAct loop, planners, and memory — plus the validator that keeps every call honest (3/4 pass at 0.75). You will trace thought→act→observe, run the schema gate live, and learn least-privilege agency.',
    bn: 'মস্তিষ্ক-হাত: function calling, ReAct loop, planner, স্মৃতি — সাথে প্রতি-call সৎ-রাখা validator (৩/৪ পাস ০.৭৫)। চিন্তা→কাজ→পর্যবেক্ষণ আঁকবেন, schema gate live চালাবেন, least-privilege agency শিখবেন।',
  },
  minutes: 17,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Thinking that touches the world', bn: 'WHAT — বিশ্ব-স্পর্শ চিন্তা' },
    },
    {
      type: 'para',
      text: {
        en: 'When you equip a model with function calling, you enable it to emit structured JSON commands instead of unstructured conversational text. The ReAct pattern alternates between reasoning through thoughts, invoking external tools, and observing real-world returns. Planners break overarching objectives down into discrete, manageable subtasks. Memory systems maintain state across turns, utilizing the immediate context window for short-term working state and vector databases for persistent knowledge. An autonomous agent combines a neural reasoning core with specialized tools, iterative execution loops, and safety guardrails.',
        bn: 'যখন আপনি একটি মডেলকে ফাংশন কলিং দিয়ে সজ্জিত করেন, তখন এটি সাধারণ টেক্সটের বদলে কাঠামোগত JSON কমান্ড তৈরি করতে পারে। রিঅ্যাক্ট (ReAct) প্যাটার্নে মডেল পর্যায়ক্রমে চিন্তা করে, বাহ্যিক টুল ব্যবহার করে এবং বাস্তব ফলাফল পর্যবেক্ষণ করে। প্ল্যানাররা সামগ্রিক লক্ষ্যকে ছোট ছোট কার্যকর ধাপে বিভক্ত করে। মেমোরি সিস্টেম স্বল্পমেয়াদে কনটেক্সট উইন্ডো এবং দীর্ঘমেয়াদে ভেক্টর ডেটাবেজ ব্যবহার করে কথোপকথনের অবস্থা সংরক্ষণ করে। মূলত একটি শক্তিশালী রিজনিং কোর, বিশেষায়িত টুল, পুনরাবৃত্তিমূলক লুপ এবং নিরাপত্তা বেষ্টনীর সমন্বয়েই একটি কার্যকর এজেন্ট গড়ে ওঠে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The ReAct loop — plus the gate every call passes', bn: 'ReAct loop — সাথে প্রতি-call পার-gate' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Thought act observe loop with schema validator gate">
<g font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">
<ellipse cx="170" cy="90" rx="90" ry="32" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="170" y="94">💭 THOUGHT</text>
<ellipse cx="470" cy="90" rx="90" ry="32" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
<text x="470" y="94">🔧 ACT (call)</text>
<ellipse cx="320" cy="175" rx="90" ry="32" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="179">👁️ OBSERVE</text>
</g>
<path d="M260,90 L380,90" stroke="currentColor" stroke-width="2" marker-end="url(#ah2)"/>
<path d="M440,118 L360,155" stroke="currentColor" stroke-width="2" marker-end="url(#ah2)"/>
<path d="M280,155 L200,118" stroke="currentColor" stroke-width="2" marker-end="url(#ah2)"/>
<defs><marker id="ah2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"/></marker></defs>
<rect x="150" y="28" width="340" height="30" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
<text x="320" y="48" text-anchor="middle" font-size="11" font-weight="800" fill="currentColor">🛡️ schema gate: 3/4 calls valid = 0.75</text>
<text x="320" y="228" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Loop until DONE — every ACT through the gate, every OBSERVE into memory.</text>
</svg>`,
      caption: {
        en: 'Thought aims, act touches, observe teaches. The gate stands between act and world.',
        bn: 'চিন্তা-লক্ষ্য করে, কাজ-স্পর্শ করে, পর্যবেক্ষণ-শেখায়। Gate কাজ-বিশ্ব মাঝে-দাঁড়ায়।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'tool_schema_gate.py',
      code: `def validate_get_price(args):
    # Schema specification: 'product' is a required non-empty string
    if not isinstance(args, dict) or "product" not in args or not isinstance(args["product"], str):
        return False, "rejected: missing required 'product' string"
    return True, "valid"

calls = [
    {"product": "rice"},
    {"product": "oil"},
    {},
    {"product": "tea", "qty": 2}
]

valid_count = 0
for i, args in enumerate(calls, 1):
    ok, reason = validate_get_price(args)
    if ok:
        valid_count += 1
        print(f"Call {i} {args} -> VALID")
    else:
        print(f"Call {i} {args} -> {reason}")

total = len(calls)
pass_rate = valid_count / total
print(f"Schema gate verdict: {valid_count}/{total} valid calls (pass rate: {pass_rate:.2f})")

# Output:
# Call 1 {'product': 'rice'} -> VALID
# Call 2 {'product': 'oil'} -> VALID
# Call 3 {} -> rejected: missing required 'product' string
# Call 4 {'product': 'tea', 'qty': 2} -> VALID
# Schema gate verdict: 3/4 valid calls (pass rate: 0.75)`,
      caption: {
        en: 'Deterministic schema validation gate filtering tool invocations in Python, approving 3 out of 4 calls for a pass rate of 0.75.',
        bn: 'পাইথনে টুল ইনভোকেশন যাচাইয়ের স্কিমা গেট, যা ৪টির মধ্যে ৩টি কল অনুমোদন করে ০.৭৫ পাসের হার নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Function calling', def: { en: 'The structured emission of tool names and parsed argument schemas by an LLM instead of free-form natural language text.', bn: 'মুক্ত টেক্সটের পরিবর্তে মডেল কর্তৃক নির্দিষ্ট টুলের নাম ও যাচাইকৃত আর্গুমেন্টের কাঠামোগত আউটপুট তৈরি।' } },
        { term: 'ReAct loop', def: { en: 'An iterative control cycle that coordinates reasoning steps, tool invocation actions, and sensory observation returns.', bn: 'একটি পুনরাবৃত্তিমূলক নিয়ন্ত্রণ চক্র যা যুক্তির ধাপ, টুল ব্যবহারের পদক্ষেপ এবং ফলাফলের পর্যবেক্ষণকে সমন্বয় করে।' } },
        { term: 'Planner', def: { en: 'An architectural module or prompt strategy that breaks complex, high-level objectives into ordered execution steps.', bn: 'একটি কৌশল যা জটিল উচ্চস্তরের লক্ষ্যকে ক্রমানুসারে সম্পাদনযোগ্য ছোট ছোট ধাপে বিভক্ত করে।' } },
        { term: 'Schema gate', def: { en: 'A validation barrier that parses and verifies tool parameters against strict type definitions before running any execution.', bn: 'একটি নিরাপত্তা যাচাইকরণ ব্যবস্থা যা কোনো টুল চালানোর পূর্বে তার প্যারামিটারগুলো টাইপ স্কিমার সাথে মিলিয়ে দেখে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Answers become outcomes', bn: 'WHY — উত্তর-ফলাফল হয়' },
    },
    {
      type: 'list',
      items: [
        { en: 'Chat advises; agents EXECUTE — bookings, tickets, deploys, refunds.', bn: 'Chat-পরামর্শ দেয়; agent-চালায় — booking, টিকিট, deploy, refund।' },
        { en: 'Tools ground models: calculators end math hallucinations, APIs end stale facts.', bn: 'Tool মডেলকে ground করে: ক্যালকুলেটর গণিত বিভ্রম দূর করে, API বাসি তথ্য দূর করে।' },
        { en: 'Agency is billable autonomy: supervised loops sell outcomes, not tokens.', bn: 'Agency হলো বিলযোগ্য স্বায়ত্তশাসন: তত্ত্বাবধানে চলা লুপ বা loop ফলাফল বিক্রি করে, কেবল টোকেন নয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Grant hands in 4 steps', bn: 'HOW — হাত-দিন ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Define tools', bn: '১. Tool-সংজ্ঞা' }, text: { en: 'Name + JSON schema + description each.', bn: 'প্রতিটি নাম + JSON schema + বর্ণনা।' } },
        { title: { en: '2. Gate args', bn: '২. Arg-gate' }, text: { en: 'Schema-validate; reject + explain invalid.', bn: 'Schema-যাচাই; invalid-বাতিল + ব্যাখ্যা।' } },
        { title: { en: '3. Loop capped', bn: '৩. Loop-সীমিত' }, text: { en: 'Max 8–12 steps, timeouts, spend caps.', bn: 'সর্বোচ্চ ৮–১২ ধাপ, timeout, খরচ-সীমা।' } },
        { title: { en: '4. Approve danger', bn: '৪. বিপদ-অনুমোদন' }, text: { en: 'Human confirms writes, money, sends.', bn: 'মানুষ লেখা, টাকা, পাঠানো-নিশ্চিত করে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The gate holds at 0.75', bn: 'INSIDE — Gate ০.৭৫-ধরে' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit schema-gates four get_price calls: rice ✓, oil ✓, {} ✗ (missing product), tea+qty ✓ — 3/4 = 0.75 pass, one rejected with reason. Real agents loop the reject back as feedback (“product required”) so the model self-repairs. Break another call and watch the pass rate — and the agent’s patience — drain.',
        bn: 'এই tryit চার get_price call schema-gate করে: rice ✓, oil ✓, {} ✗ (product-নেই), tea+qty ✓ — ৩/৪ = ০.৭৫ পাস, একটা কারণ-সহ বাতিল। আসল-agent বাতিল-feedback loop করে (“product-প্রয়োজন”) যাতে মডেল-স্বয়ং মেরামত করে। আরেক-call ভেঙে পাস-হার — আর agent-ধৈর্য — শুকানো দেখুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Schema gate live (break a call, press Run)', bn: 'Schema gate live (call ভেঙে Run)' },
      html: '<h3>Invalid calls never execute</h3>\n<pre id="out"></pre>\n<p>Console rules on each call.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fefce8; border: 1px solid #facc15; border-radius: 8px; padding: 10px; }',
      js: 'const CALLS = [{ product: "rice" }, { product: "oil" }, {}, { product: "tea", qty: 2 }]; // ← delete a product!\nconst ok = (c) => typeof c.product === "string"; // schema: product required\nCALLS.forEach((c, i) => console.log("call " + (i+1) + " " + JSON.stringify(c) + " → " + (ok(c) ? "VALID ✓" : "REJECT: product required ✗")));\nconst v = CALLS.filter(ok).length;\ndocument.getElementById("out").textContent = "valid " + v + "/" + CALLS.length + " = " + (v / CALLS.length).toFixed(2) + (v === CALLS.length ? " → all execute ✓" : " → rejects loop back 🔁");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Agency instincts', bn: 'RESULT — Agency-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Gate everything executable: schema first, side effects never unvalidated.', bn: 'চালানো-সব gate: আগে-schema, side effect কখনো-যাচাই ছাড়া নয়।' },
        { en: 'Cap every loop: steps, seconds, spend — autonomy with a leash.', bn: 'প্রতিটি লুপ বা loop-এ সীমা দিন: ধাপ, সেকেন্ড, খরচ — নিয়ন্ত্রণে রাখা স্বায়ত্তশাসন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Agency accidents', bn: 'DEBUG — Agency-দুর্ঘটনা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Runaway loops (the agent that wouldn’t stop)', bn: 'অনিয়ন্ত্রিত loops (যে এজেন্ট কখনো থামে না)' },
      text: {
        en: 'Uncapped loops retry forever: observe → thought → same failed act. Symptoms: 400 tool calls, $60 bills, 3 AM pages. Cure: step caps, same-call circuit breakers, spend alarms.',
        bn: 'সীমাহীন লুপ চিরতরে পুনঃচেষ্টা করতে থাকে: পর্যবেক্ষণ → চিন্তা → একই ব্যর্থ পদক্ষেপ। লক্ষণ: ৪০০ বার টুল কল, $৬০ বিল, গভীর রাতে নোটিফিকেশন। সমাধান: পদক্ষেপের সর্বোচ্চ সীমা, একই কলের জন্য সার্কিট ব্রেকার এবং খরচ অ্যালার্ম।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'God-mode tools (read AND delete in one)', bn: 'God-mode tool (এক-পড়া ও মোছা)' },
      text: {
        en: 'Overpowered tools turn prompt injections into incidents: one “clean up” deletes prod. Symptoms: broad scopes, no approvals. Cure: least privilege — read tools free, write tools approved, delete tools human-only.',
        bn: 'অতিরিক্ত ক্ষমতাসম্পন্ন টুল প্রম্পট ইনজেকশনের মাধ্যমে বিপদ ডেকে আনতে পারে: একটি নির্দেশে প্রোডাকশন ডেটা মুছে যেতে পারে। লক্ষণ: প্রশস্ত পরিধি (scope) ও অনুমোদনের অভাব। প্রতিকার: সর্বনিম্ন অধিকার (least privilege) — তথ্য পড়ার টুল উন্মুক্ত, লেখার টুল অনুমোদিত, এবং ডেটা মোছার টুল কেবল মানুষের সম্মতিক্রমে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Agents earning', bn: 'REAL WORLD — উপার্জন-agent' },
    },
    {
      type: 'list',
      items: [
        { en: 'Travel agents: search → compare → book, human approves payment.', bn: 'ভ্রমণ-agent: search → তুলনা → book, মানুষ-পেমেন্ট অনুমোদন।' },
        { en: 'DevOps bots: read logs → propose fix → PR, human merges.', bn: 'DevOps bot: log-পড়া → ঠিক-প্রস্তাব → PR, মানুষ-merge।' },
        { en: 'Research aides: search → fetch → cite — briefs with receipts.', bn: 'Research aide: search → আনা → cite — রসিদ-সহ brief।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Evals and Benchmarks', bn: 'পরবর্তী পাঠ — Evals এবং Benchmarks' },
    },
    {
      type: 'para',
      text: {
        en: 'Hands granted. Lesson 6 MEASURES: pass@k, benchmarks, LLM judges, and the harness habit.',
        bn: 'হাত অর্জিত। পাঠ ৬ মূল্যায়ন শেখায়: pass@k, বেঞ্চমার্ক, এলএলএম বিচারক এবং টেস্ট হারনেস কৌশল।',
      },
    },
  ],
  exercises: [
    {
      id: 'agt-ex-1',
      kind: 'mcq',
      topic: 'react-order',
      question: {
        en: 'What is the standard execution sequence followed during each cycle of the ReAct agent framework?',
        bn: 'রিঅ্যাক্ট (ReAct) এজেন্ট ফ্রেমওয়ার্কের প্রতিটি চক্রে কোন ধারাবাহিক ক্রমটি অনুসরণ করা হয়?'
      },
      options: [
        { en: 'Thought → act → observe → repeat', bn: 'চিন্তা → কাজ → পর্যবেক্ষণ → পুনরাবৃত্তি' },
        { en: 'Act → act → act', bn: 'কাজ → কাজ → কাজ' },
        { en: 'Observe → done', bn: 'পর্যবেক্ষণ → সমাপ্তি' },
        { en: 'Thought → done', bn: 'চিন্তা → সমাপ্তি' },
      ],
      answer: 0,
      hint: { en: 'The loop diagram.', bn: 'লুপের চিত্রটি স্মরণ করুন।' },
      explanation: {
        en: 'Think (plan the call), act (execute gated), observe (read results) — each orbit smarter than the last, until DONE.',
        bn: 'ভাবুন (কল পরিকল্পনা), কাজ করুন (অনুমোদিত টুল চালান), পর্যবেক্ষণ করুন (ফলাফল দেখুন) — লক্ষ্য পূরণ না হওয়া পর্যন্ত এই চক্র চলতে থাকে।'
      },
    },
    {
      id: 'agt-ex-2',
      kind: 'mcq',
      topic: 'gate-math',
      question: { en: '4 calls, 1 missing required arg. Pass rate?', bn: '৪টি কলের মধ্যে ১টিতে প্রয়োজনীয় আর্গুমেন্ট অনুপস্থিত থাকলে পাসের হার কত?' },
      options: [
        { en: '0.75 — reject loops back as feedback', bn: '০.৭৫ — বাতিলকৃত কলটি কারণসহ প্রতিক্রিয়া হিসেবে ফিরে যায়' },
        { en: '1.00 — execute anyway', bn: '১.০০ — তবুও সবগুলো চালু হয়' },
        { en: '0.00 — abort all', bn: '০.০০ — সবগুলো বাতিল হয়' },
        { en: '0.25', bn: '০.২৫' },
      ],
      answer: 0,
      hint: { en: 'INSIDE’s tally.', bn: 'অভ্যন্তরীণ গণনা লক্ষ্য করুন।' },
      explanation: {
        en: '3/4 = 0.75: valids execute, the reject returns WITH its reason so the model repairs and retries — gates teach.',
        bn: '৩/৪ = ০.৭৫: বৈধ কলগুলো চলে, এবং বাতিল কলটি ত্রুটির বিবরণসহ মডেলে ফেরত যায় যাতে মডেল নিজেকে সংশোধন করতে পারে।'
      },
    },
    {
      id: 'agt-ex-3',
      kind: 'mcq',
      topic: 'privilege-pick',
      question: { en: 'Refund tool design?', bn: 'রিফান্ড টুলের নিরাপদ নকশা কেমন হওয়া উচিত?' },
      options: [
        { en: 'Read free, refund proposed → human approves', bn: 'পড়ার অনুমতি উন্মুক্ত, রিফান্ড প্রস্তাব খসড়া → মানুষ অনুমোদন করবে' },
        { en: 'Auto-refund anything', bn: 'যেকোনো অনুরোধে স্বয়ংক্রিয়ভাবে রিফান্ড প্রদান' },
        { en: 'No tools at all', bn: 'কোনো টুল ব্যবহার না করা' },
        { en: 'Delete + refund combined', bn: 'ডেটা মোছা এবং রিফান্ড এক টুলে রাখা' },
      ],
      answer: 0,
      hint: { en: 'DEBUG tip: least privilege.', bn: 'সর্বনিম্ন অধিকারের নীতি স্মরণ করুন।' },
      explanation: {
        en: 'Money moves need human eyes: agents draft, humans sign. Least privilege turns injections into declined drafts.',
        bn: 'অর্থ লেনদেনের ক্ষেত্রে মানুষের নজরদারি আবশ্যক: এজেন্ট খসড়া তৈরি করবে এবং মানুষ তা অনুমোদন করবে।'
      },
    },
    {
      id: 'agt-ex-4',
      kind: 'predict',
      topic: 'loop-rescue',
      question: { en: 'Agent retries the same failing call 50×. Name the disease + two circuit breakers.', bn: 'এজেন্ট একই ব্যর্থ কল ৫০ বার পুনরাবৃত্তি করতে থাকলে সমস্যার নাম এবং দুটি সার্কিট ব্রেকারের নাম কী?' },
      answer: 'Runaway loop: step cap + same-call breaker (halt after 3 identical acts).',
      accept: ['runaway', 'loop', 'cap', 'breaker', 'step', 'halt', 'identical', 'limit'],
      hint: { en: 'DEBUG warn.', bn: 'সতর্কতা নোটটি দেখুন।' },
      explanation: {
        en: 'No termination insight: cap total steps AND break repeated identical acts — different failures need different fuses.',
        bn: 'সমাপ্তির শর্ত না থাকলে মোট পদক্ষেপ সীমিত করতে হবে এবং একই ব্যর্থ কাজের পুনরাবৃত্তি রোধে সার্কিট ব্রেকার ব্যবহার করতে হবে।'
      },
    },
  ],
  quiz: {
    id: 'agents-tools-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'agtq1',
        kind: 'mcq',
        topic: 'tool-message',
        question: { en: 'Tool results return as…', bn: 'টুল ব্যবহারের ফলাফল কোন ধরনের বার্তা হিসেবে ফেরত আসে?' },
        options: [
          { en: 'TOOL messages — data lanes, never orders', bn: 'TOOL বার্তা — তথ্যের লেন, কখনো সরাসরি আদেশ নয়' },
          { en: 'USER orders', bn: 'ব্যবহারকারীর সরাসরি আদেশ' },
          { en: 'SYSTEM overrides', bn: 'সিস্টেম ওভাররাইড বার্তা' },
          { en: 'They don’t return', bn: 'ফলাফল ফেরত আসে না' },
        ],
        answer: 0,
        hint: { en: 'Roles are access control.', bn: 'রোল হলো অ্যাক্সেস কন্ট্রোল।' },
        explanation: {
          en: 'TOOL role = evidence, not authority: results inform the next thought but command nothing — injection armor.',
          bn: 'টুল রোল হলো প্রমাণের মতো, কর্তৃত্ব নয়: এটি পরবর্তী চিন্তা নির্ধারণের তথ্য দেয় কিন্তু কোনো নির্দেশ দেয় না।'
        },
      },
      {
        id: 'agtq2',
        kind: 'mcq',
        topic: 'memory-split',
        question: { en: 'Short vs long memory?', bn: 'স্বল্পমেয়াদি বনাম দীর্ঘমেয়াদি মেমোরির পার্থক্য কী?' },
        options: [
          { en: 'Short = context window; long = vector stores', bn: 'স্বল্পমেয়াদি = কনটেক্সট উইন্ডো; দীর্ঘমেয়াদি = ভেক্টর স্টোর' },
          { en: 'Both are RAM', bn: 'উভয়ই সাধারণ র‍্যাম' },
          { en: 'Agents need neither', bn: 'এজেন্টের কোনো মেমোরি প্রয়োজন নেই' },
          { en: 'Long = longer prompts', bn: 'দীর্ঘমেয়াদি মানে আরও বড় প্রম্পট' },
        ],
        answer: 0,
        hint: { en: 'WHAT’s last lines.', bn: 'বর্ণনার শেষ লাইন দেখুন।' },
        explanation: {
          en: 'Context holds the live loop; vectors persist facts across sessions — desk vs filing cabinet.',
          bn: 'কনটেক্সট চলমান লুপের অবস্থা ধরে রাখে, আর ভেক্টর ডেটাবেজ বিভিন্ন সেশনের তথ্য স্থায়ীভাবে সংরক্ষণ করে।'
        },
      },
      {
        id: 'agtq3',
        kind: 'mcq',
        topic: 'planner-role',
        question: {
          en: 'In modular autonomous AI systems, what primary engineering duty is assigned to the planner?',
          bn: 'স্বায়ত্তশাসিত এআই সিস্টেমে প্ল্যানার (planner) মডিউলের মূল ইঞ্জিনিয়ারিং দায়িত্ব কী?'
        },
        options: [
          { en: 'Decompose high-level goals into gated execution steps', bn: 'জটিল লক্ষ্যকে যাচাইযোগ্য সুনির্দিষ্ট ধাপে বিভক্ত করা' },
          { en: 'Directly execute low-level network socket requests', bn: 'সরাসরি নেটওয়ার্ক সকেট রিকোয়েস্ট পরিচালনা করা' },
          { en: 'Replace the underlying language model entirely', bn: 'মূল ল্যাঙ্গুয়েজ মডেলকে পুরোপুরি প্রতিস্থাপন করা' },
          { en: 'Format output strings into poetic verse', bn: 'আউটপুট টেক্সটকে ছন্দবদ্ধ কবিতায় রূপান্তর করা' },
        ],
        answer: 0,
        hint: { en: 'Goals → steps.', bn: 'লক্ষ্য থেকে ধাপ।' },
        explanation: {
          en: '“Book my trip” → search, compare, propose, await approval: planning turns wishes into checkable steps.',
          bn: '“ভ্রমণ বুক করো” → অনুসন্ধান, তুলনা, প্রস্তাব, অনুমোদন অপেক্ষা: পরিকল্পনা ইচ্ছাকে সুনির্দিষ্ট ধাপে রূপান্তর করে।'
        },
      },
      {
        id: 'agtq4',
        kind: 'predict',
        topic: 'scope-split',
        question: { en: 'Split “manage_orders” god-tool into safe pieces. Name three.', bn: '“manage_orders” গড-টুলকে তিনটি নিরাপদ উপ-টুলে বিভক্ত করুন।' },
        answer: 'read_orders (free), propose_refund (draft), approve_refund (human-only).',
        accept: ['read', 'propose', 'draft', 'approve', 'human', 'refund', 'order'],
        hint: { en: 'Read/draft/sign.', bn: 'পড়া / খসড়া / অনুমোদন।' },
        explanation: {
          en: 'Privilege ladder: reads flow, writes draft, money signs human. Three tools, three blast radii — injections fizzle at read.',
          bn: 'অনুমোদনের সিঁড়ি: পড়ার কাজ উন্মুক্ত, লেখার কাজ খসড়া, আর অর্থ লেনদেনে মানুষের অনুমোদন — যা নিরাপত্তা নিশ্চিত করে।'
        },
      },
    ],
  },
  nextLesson: {
    slug: 'evals-benchmarks',
    title: { en: 'Evals and Benchmarks', bn: 'Evals এবং Benchmarks' },
  },
};