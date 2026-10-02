import type { Lesson } from '../../../lib/types';

export const ReasoningCotLesson: Lesson = {
  slug: 'reasoning-cot',
  tech: 'llms',
  title: {
    en: 'Reasoning and Chain-of-Thought',
    bn: 'চিন্তা-কেনা যায়: chain-of-thought ধাপ-খোলে, self-consistency ভোট'
  },
  summary: {
    en: 'Thinking is purchasable: chain-of-thought unrolls steps, self-consistency votes (42 wins 3/5 at 0.60), test-time compute trades tokens for truth. You will map the thinking ladder, run the vote live, and learn when reasoning beats recall.',
    bn: 'চিন্তা-কেনা যায়: chain-of-thought ধাপ-খোলে, self-consistency ভোট দেয় (৪২ জেতে ৩/৫ ০.৬০), test-time compute token-সত্য বদলায়। চিন্তা-মই ম্যাপ করবেন, ভোট live চালাবেন, reasoning-স্মরণ হারায় কখন শিখবেন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Tokens spent thinking', bn: 'WHAT — চিন্তায়-খরচ token' },
    },
    {
      type: 'para',
      text: {
        en: 'When you prompt a model with chain-of-thought reasoning, you encourage it to generate explicit intermediate steps before presenting a final answer. On complex mathematical and logical tasks, this step-by-step reasoning significantly improves accuracy without modifying underlying weights. Self-consistency samples multiple independent reasoning paths and selects the majority answer, filtering out random generation errors. Test-time compute trades additional inference tokens for correctness by verifying and refining hypotheses. Ultimately, reasoning represents a shift toward scaling compute during inference rather than solely during pretraining.',
        bn: 'যখন আপনি চেইন-অব-থট প্রম্পটিং ব্যবহার করেন, তখন মডেল চূড়ান্ত উত্তর দেওয়ার আগে মধ্যবর্তী যুক্তির ধাপগুলো স্পষ্টভাবে লিখে। জটিল গাণিতিক ও যৌক্তিক সমস্যায় এই ধাপে ধাপে চিন্তা মডেলের অভ্যন্তরীণ ওজন পরিবর্তন না করেই নির্ভুলতা বহুগুণ বাড়ায়। সেলফ-কনসিস্টেন্সি পদ্ধতিতে একাধিক যুক্তিপথের নমুনা তৈরি করে সংখ্যাগরিষ্ঠের গৃহীত উত্তরকে নির্বাচন করা হয়। টেস্ট-টাইম কম্পিউট অতিরিক্ত ইনফারেন্স টোকেন খরচ করে উত্তর যাচাই ও পরিমার্জন করে। এর মাধ্যমে কেবল প্রিটেইনিংয়ে নয়, বরং ইনফারেন্সে কম্পিউট স্কেলিং সম্ভব হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The thinking ladder — each rung spends tokens', bn: 'চিন্তা-মই — প্রতি ধাপ-token খরচ করে' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Four reasoning rungs from direct answer to self consistency vote">
<g font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="70" y="185" width="200" height="36" rx="8" fill="#64748b" opacity="0.18" stroke="#64748b" stroke-width="2"/>
<text x="170" y="207">direct: “42” ⚡ 1×</text>
<rect x="70" y="137" width="200" height="36" rx="8" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="170" y="159">CoT: steps… → 42 🪜 5×</text>
<rect x="370" y="137" width="200" height="36" rx="8" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
<text x="470" y="159">verify: check 42 ✓ 8×</text>
<rect x="370" y="89" width="200" height="36" rx="8" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="470" y="111">vote: 42×3 vs 41×2 🗳️ 25×</text>
</g>
<path d="M170,185 L170,173 M280,155 L360,155 M470,137 L470,125" stroke="currentColor" stroke-width="2"/>
<g font-size="10" font-weight="600" fill="currentColor" text-anchor="middle">
<text x="170" y="125">+steps</text>
<text x="320" y="147">+critic</text>
<text x="470" y="77">+5 paths</text>
</g>
<rect x="190" y="30" width="260" height="34" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="52" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">winner: 42 · 3/5 = 0.60 🏆</text>
<text x="320" y="236" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Same weights, more tokens: reasoning is rented intelligence.</text>
</svg>`,
      caption: {
        en: 'Up the ladder: cost multiplies, errors divide. The vote at top is democracy over dice.',
        bn: 'মই-ওপরে: খরচ-গুণে, ভুল-ভাগে। ওপরে-ভোট ছক্কা-ওপর গণতন্ত্র।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'self_consistency_voting.py',
      code: `from collections import Counter

# Sampled answers across 5 independent temperature=0.7 reasoning chains:
sampled_paths = [42, 41, 42, 42, 41]
total_samples = len(sampled_paths)

print(f"Sampled reasoning trajectory results: {sampled_paths}")

counts = Counter(sampled_paths)
ranked_votes = counts.most_common()

for answer, votes in ranked_votes:
    margin = votes / total_samples
    print(f"Answer {answer}: {votes}/{total_samples} ballots ({margin:.2f})")

winner, winner_votes = ranked_votes[0]
print(f"Elected majority output: {winner} with {winner_votes}/{total_samples} = {winner_votes/total_samples:.2f} confidence")

# Output:
# Sampled reasoning trajectory results: [42, 41, 42, 42, 41]
# Answer 42: 3/5 ballots (0.60)
# Answer 41: 2/5 ballots (0.40)
# Elected majority output: 42 with 3/5 = 0.60 confidence`,
      caption: {
        en: 'Self-consistency majority voting aggregation over 5 sampled paths, crowning answer 42 with 3/5 = 0.60 majority over answer 41.',
        bn: '৫টি নমুনা যুক্তিপথের ওপর সেলফ-কনসিস্টেন্সি সংখ্যাগরিষ্ঠ ভোটিং, যেখানে ৪২ উত্তরটি ৩/৫ = ০.৬০ সংখ্যাগরিষ্ঠতা নিয়ে নির্বাচিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Chain-of-thought', def: { en: 'A prompting technique directing language models to produce explicit intermediate reasoning steps before delivering an answer.', bn: 'একটি প্রম্পটিং কৌশল যা মডেলকে চূড়ান্ত সিদ্ধান্তের আগে মধ্যবর্তী যৌক্তিক ধাপগুলো ক্রমানুসারে প্রকাশ করতে নির্দেশ দেয়।' } },
        { term: 'Self-consistency', def: { en: 'An evaluation and inference strategy that samples multiple diverse reasoning trajectories and tallies a majority vote over final answers.', bn: 'একটি ইনফারেন্স কৌশল যা একাধিক ভিন্ন ভিন্ন যুক্তিপথ তৈরি করে এবং চূড়ান্ত উত্তরগুলোর মধ্যে সংখ্যাগরিষ্ঠের ভিত্তিতে সিদ্ধান্ত নেয়।' } },
        { term: 'Test-time compute', def: { en: 'The deliberate allocation of additional inference-time FLOPs and tokens to search, verify, and improve output quality.', bn: 'আউটপুটের গুণমান ও সত্যতা বাড়াতে ইনফারেন্সের সময় অতিরিক্ত টোকেন ও কম্পিউটেশনাল শক্তি বরাদ্দ করার কৌশল।' } },
        { term: 'ReAct', def: { en: 'An agent framework that synergistically interleaves internal reasoning traces with external tool executions and observations.', bn: 'একটি এজেন্ট ফ্রেমওয়ার্ক যা অভ্যন্তরীণ চিন্তার সাথে বাহ্যিক টুল ব্যবহার ও পর্যবেক্ষণের পারস্পরিক সমন্বয় ঘটায়।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Smarts without retraining', bn: 'WHY — Retrain-ছাড়া চতুরতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'CoT lifts math accuracy 20–40 points on the SAME model — prompting as architecture.', bn: 'CoT একই-মডেলে গণিত-নির্ভুলতা ২০–৪০ পয়েন্ট-তোলে — স্থাপত্য-হিসেবে prompting।' },
        { en: 'Votes convert flaky 60% into reliable 85%+: democracy over dice.', bn: 'ভোট অস্থির-৬০% নির্ভর-৮৫%+ করে — ছক্কা-ওপর গণতন্ত্র।' },
        { en: 'Test-time compute is the new scaling: OpenAI’s o-series thinks longer, not just larger.', bn: 'Test-time compute নতুন-scaling: o-series বড় নয়, দীর্ঘ-ভাবে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Think on demand in 4 steps', bn: 'HOW — চাহিদায়-ভাবুন ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Elicit steps', bn: '১. ধাপ-বের করুন' }, text: { en: '“Think step by step” + worked example.', bn: '“ধাপে-ধাপে ভাবো” + কাজ-করা উদাহরণ।' } },
        { title: { en: '2. Sample N', bn: '২. N-নমুনা' }, text: { en: '5–9 paths, temperature 0.7.', bn: '৫–৯ পথ, temperature ০.৭।' } },
        { title: { en: '3. Vote', bn: '৩. ভোট' }, text: { en: 'Majority answer wins; report margin.', bn: 'সংখ্যাগরিষ্ঠ-উত্তর জেতে; margin-report।' } },
        { title: { en: '4. Verify', bn: '৪. যাচাই' }, text: { en: 'Critic pass or tool-check the winner.', bn: 'Critic-pass বা tool-যাচাই বিজয়ী।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Democracy over dice', bn: 'INSIDE — ছক্কা-ওপর গণতন্ত্র' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit votes five sampled paths [42, 41, 42, 42, 41]: 42 takes 3/5 = 0.60 and ships. Single-sample accuracy here is 60%; the vote LOCKS the majority — add paths and watch the margin (never the answer) stabilize first. Flip two votes to 41 and the crown flips: margins are confidence you can read.',
        bn: 'এই tryit পাঁচ নমুনা-পথ [৪২, ৪১, ৪২, ৪২, ৪১] ভোট দেয়: ৪২ ৩/৫ = ০.৬০ নিয়ে চালে। এখানে এক-নমুনা নির্ভুলতা ৬০%; ভোট সংখ্যাগরিষ্ঠ-তালা করে — পথ-যোগ করে margin (উত্তর নয়) আগে-স্থির দেখুন। দুই ভোট ৪১-উল্টিয়ে মুকুট-উল্টানো দেখুন: margin-পড়া যায় আত্মবিশ্বাস।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Majority vote live (flip votes, press Run)', bn: 'Majority ভোট live (ভোট উল্টে Run)' },
      html: '<h3>Five paths, one crown</h3>\n<pre id="out"></pre>\n<p>Console tallies each ballot.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 10px; }',
      js: 'const VOTES = [42, 41, 42, 42, 41]; // ← sampled answers — flip two to 41!\nconst tally = {};\nVOTES.forEach((a) => { tally[a] = (tally[a] || 0) + 1; console.log("ballot: " + a); });\nconst ranked = Object.entries(tally).sort((a, b) => b[1] - a[1]);\nconst [w, n] = ranked[0];\nranked.forEach(([a, c]) => console.log(a + ": " + c + "/" + VOTES.length));\ndocument.getElementById("out").textContent = "winner " + w + " · " + n + "/" + VOTES.length + " = " + (n / VOTES.length).toFixed(2) + " 🏆";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Reasoning instincts', bn: 'RESULT — যুক্তি-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Elicit before scaling: steps + votes beat bigger models per dollar.', bn: 'Scale-আগে বের করুন: ধাপ + ভোট ডলারে বড়-মডেল হারায়।' },
        { en: 'Read margins: 5/5 ships, 3/5 verifies, ties escalate.', bn: 'Margin-পড়ুন: ৫/৫ চালে, ৩/৫ যাচাই, টাই-escalate।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Thinking failures', bn: 'DEBUG — চিন্তা-ব্যর্থতা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Confident wrong chains (fluent fallacies)', bn: 'আত্মবিশ্বাসী-ভুল শৃঙ্খল (সাবলীল-ভ্রান্তি)' },
      text: {
        en: 'CoT can rationalize errors beautifully: steps look rigorous, conclude wrong. Symptoms: unanimous wrong votes. Cure: tool-verify (calculator/code), diverse prompts, critic passes — never trust eloquence.',
        bn: 'CoT ভুল-সুন্দর যুক্তিযুক্ত করতে পারে: ধাপ-কঠোর দেখায়, ভুল-সিদ্ধান্তে। লক্ষণ: সর্বসম্মত-ভুল ভোট। ওষুধ: tool-যাচাই (calculator/code), বৈচিত্র্য-prompt, critic pass — সাবলীলতা-বিশ্বাস কখনো নয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Reasoning where recall rules (overthinking tax)', bn: 'স্মরণ-রাজত্বে যুক্তি (অতি-চিন্তা কর)' },
      text: {
        en: 'CoT on trivia/facts ADDS error paths: simple recall questions get worse thinking. Symptoms: “Paris… wait, maybe Lyon?” Cure: reason for multi-step problems only; direct-answer facts.',
        bn: 'Trivia/তথ্যে CoT ভুল-পথ যোগায়: সরল-স্মরণ প্রশ্ন-চিন্তায় খারাপ। লক্ষণ: “প্যারিস… দাঁড়ান, লিওঁ?” ওষুধ: শুধু multi-step-যুক্তি; তথ্য-সরাসরি উত্তর।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Thinking purchased', bn: 'REAL WORLD — কেনা-চিন্তা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Math tutors: CoT + verify loops grading student work.', bn: 'গণিত টিউটর: ছাত্রদের কাজ মূল্যায়নে CoT ও যাচাইকরণ লুপ।' },
        { en: 'Code agents: 9-path votes on tricky refactors.', bn: 'কোড এজেন্ট: জটিল কোড রিফ্যাক্টরিংয়ে ৯-পথের সংখ্যাগরিষ্ঠ ভোট।' },
        { en: 'o-series: test-time compute as the product headline.', bn: 'o-সিরিজ: টেস্ট-টাইম কম্পিউটকে প্রধান প্রযুক্তিগত শক্তি হিসেবে ব্যবহার।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Agents and Tools', bn: 'পরবর্তী পাঠ — Agents এবং Tools' },
    },
    {
      type: 'para',
      text: {
        en: 'Thinking bought. Lesson 5 gives HANDS: function calling, the ReAct loop, planning, and memory.',
        bn: 'যৌক্তিক চিন্তা অর্জিত। পাঠ ৫ হাত প্রদান করে: ফাংশন কলিং, রিঅ্যাক্ট (ReAct) লুপ, পরিকল্পনা এবং মেমোরি।',
      },
    },
  ],
  exercises: [
    {
      id: 'rsc-ex-1',
      kind: 'mcq',
      topic: 'cot-why',
      question: { en: 'CoT helps because…', bn: 'CoT কার্যকারিতা বৃদ্ধি করে কারণ…' },
      options: [
        { en: 'More compute per question: reasoning tokens before answers', bn: 'প্রতি প্রশ্নে বেশি কম্পিউট: উত্তরের আগে যুক্তিভিত্তিক টোকেন তৈরি করা' },
        { en: 'Bigger weights', bn: 'মডেলের ওজন বড় হওয়া' },
        { en: 'Longer training', bn: 'দীর্ঘ প্রিটেইনিং হওয়া' },
        { en: 'Magic words', bn: 'প্রম্পটের জাদু শব্দ' },
      ],
      answer: 0,
      hint: { en: 'Inference-time scaling.', bn: 'ইনফারেন্সের সময় কম্পিউট স্কেলিং।' },
      explanation: {
        en: 'Each reasoning token is a compute step: CoT spends FLOPs where the question is hard — thinking IS tokenized compute.',
        bn: 'প্রতিটি যুক্তির টোকেন এক একটি কম্পিউট ধাপ: কঠিন প্রশ্নের সমাধানে CoT অতিরিক্ত কম্পিউটেশনাল শক্তি ব্যয় করে।'
      },
    },
    {
      id: 'rsc-ex-2',
      kind: 'mcq',
      topic: 'vote-margin',
      question: {
        en: 'When analyzing self-consistency voting margins, what is the appropriate operational action for a 3/5 majority versus a 5/5 unanimous outcome?',
        bn: 'সেলফ-কনসিস্টেন্সি ভোটিং মার্জিন বিশ্লেষণের ক্ষেত্রে ৩/৫ সংখ্যাগরিষ্ঠতা বনাম ৫/৫ সর্বসম্মত ফলাফলের জন্য যথাযথ পদক্ষেপ কী?'
      },
      options: [
        { en: '3/5 → verify; 5/5 → ship', bn: '৩/৫ ফলাফল পেলে যাচাই করুন; ৫/৫ পেলে সরাসরি চালান' },
        { en: 'Both ship', bn: 'উভয় অবস্থাতেই সরাসরি চালান' },
        { en: 'Both escalate', bn: 'উভয় অবস্থাতেই ইঞ্জিনিয়ারের কাছে পাঠান' },
        { en: 'Margins don’t matter', bn: 'মার্জিনের কোনো মূল্য নেই' },
      ],
      answer: 0,
      hint: { en: 'RESULT’s margin law.', bn: 'মার্জিনের নিয়ম স্মরণ করুন।' },
      explanation: {
        en: 'Margins are readable confidence: unanimity ships, slim majorities earn a critic pass or tool-check before users see them.',
        bn: 'মার্জিন হলো নির্ভরযোগ্যতার পরিমাপ: সর্বসম্মত উত্তর সরাসরি গ্রাহকের কাছে পাঠানো যায়, কিন্তু অল্প ব্যবধানের জয় যাচাই করে নেওয়া উচিত।'
      },
    },
    {
      id: 'rsc-ex-3',
      kind: 'mcq',
      topic: 'recall-vs-reason',
      question: { en: '“Capital of France?” — CoT or direct?', bn: '“ফ্রান্সের রাজধানী কোনটি?” — এর জন্য CoT নাকি সরাসরি উত্তর?' },
      options: [
        { en: 'Direct — recall rules, reasoning adds error paths', bn: 'সরাসরি — স্মৃতির তথ্য সরাসরি বলা উচিত, যুক্তি অপ্রয়োজনীয় ভুল পথ তৈরি করে' },
        { en: 'CoT always', bn: 'সবসময় CoT ব্যবহার করা' },
        { en: '9-path vote always', bn: 'সবসময় ৯-পথের ভোট নেওয়া' },
        { en: 'Ask twice', bn: 'মডেলকে দুবার জিজ্ঞাসা করা' },
      ],
      answer: 0,
      hint: { en: 'DEBUG tip: overthinking tax.', bn: 'অতি-চিন্তার মাশুল এড়িয়ে চলুন।' },
      explanation: {
        en: 'One-hop facts need retrieval, not rumination: thinking taxes latency, cost, AND accuracy. Route by problem shape.',
        bn: 'সহজ তথ্যের ক্ষেত্রে সরাসরি তথ্য স্মরণ প্রয়োজন; এখানে বেশি চিন্তা সময়, খরচ এবং ভুলের সম্ভাবনা বাড়িয়ে দেয়।'
      },
    },
    {
      id: 'rsc-ex-4',
      kind: 'predict',
      topic: 'unanimous-wrong',
      question: { en: '5/5 vote says 41, calculator says 42. Name the failure + the fix.', bn: 'মডেলের ৫/৫ ভোট উত্তর দেয় ৪১, কিন্তু ক্যালকুলেটর বলে ৪২। এই ব্যর্থতার নাম ও প্রতিকার কী?' },
      answer: 'Confident wrong chain: tool-verify winners (calculator/code) before shipping.',
      accept: ['tool', 'verify', 'calculator', 'confident', 'wrong', 'chain', 'critic'],
      hint: { en: 'DEBUG warn.', bn: 'সতর্কতা টিপস দেখুন।' },
      explanation: {
        en: 'Unanimity ≠ truth when all paths share the flaw: ground winners in tools. Votes aggregate judgment; tools anchor facts.',
        bn: 'ভুল যুক্তির কারণে সব পথ একমত হলেও তা মিথ্যা হতে পারে: তাই গণিতের মতো সুনির্দিষ্ট তথ্যে ক্যালকুলেটর বা কোড টুলের ফলাফলকে অগ্রাধিকার দিন।'
      },
    },
  ],
  quiz: {
    id: 'reasoning-cot-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'rscq1',
        kind: 'mcq',
        topic: 'ttc-def',
        question: {
          en: 'In modern generative AI systems, what does the concept of test-time compute describe?',
          bn: 'আধুনিক জেনারেটিভ এআই সিস্টেমে টেস্ট-টাইম কম্পিউট (test-time compute) ধারণাটি কী নির্দেশ করে?'
        },
        options: [
          { en: 'Extra inference tokens (search/verify/refine) for harder questions', bn: 'কঠিন প্রশ্নে অতিরিক্ত ইনফারেন্স টোকেন (অনুসন্ধান/যাচাই/পরিমার্জন) বরাদ্দ করা' },
          { en: 'Longer pretraining', bn: 'মডেলের প্রিটেইনিং দীর্ঘায়িত করা' },
          { en: 'Bigger GPUs', bn: 'হার্ডওয়্যারে আরও বড় জিপিইউ ব্যবহার করা' },
          { en: 'More parameters', bn: 'মডেলের অভ্যন্তরীণ প্যারামিটার সংখ্যা বাড়ানো' },
        ],
        answer: 0,
        hint: { en: 'Tokens for truth.', bn: 'সত্যতার জন্য টোকেন ব্যয়।' },
        explanation: {
          en: 'Scale at the question, not the factory: spend tokens thinking instead of training larger — the o-series bet.',
          bn: 'মডেলকে আরও বড় করার চেয়ে কঠিন প্রশ্নের সময় অতিরিক্ত টোকেন দিয়ে চিন্তা করার সুযোগ দেওয়া বেশি কার্যকর।'
        },
      },
      {
        id: 'rscq2',
        kind: 'mcq',
        topic: 'temp-vote',
        question: { en: 'Self-consistency samples at temperature…', bn: 'সেলফ-কনসিস্টেন্সিতে নমুনা তৈরির জন্য উপযুক্ত তাপমাত্রা (temperature) কত?' },
        options: [
          { en: '~0.7: diverse paths worth voting over', bn: '~০.৭: বিভিন্ন যুক্তিপথ তৈরি যা ভোটিংয়ের জন্য উপযোগী' },
          { en: '0.0: identical paths', bn: '০.০: হুবহু একই পথ তৈরি করে' },
          { en: '5.0: chaos', bn: '৫.০: সম্পূর্ণ বিশৃঙ্খল ও অর্থহীন টেক্সট তৈরি করে' },
          { en: 'Temperature is irrelevant', bn: 'তাপমাত্রা কোনো ভূমিকা রাখে না' },
        ],
        answer: 0,
        hint: { en: 'HOW step 2.', bn: 'HOW ধাপ ২।' },
        explanation: {
          en: 'T=0 repeats one path (voting theater); T=0.7 diversifies reasoning while staying sane — votes need real alternatives.',
          bn: 'T=০ তে সব পথ একই উত্তর দেবে যা অর্থহীন; T=০.৭ যুক্তির বৈচিত্র্য তৈরি করে যা সঠিক ভোটিংয়ের সুযোগ দেয়।'
        },
      },
      {
        id: 'rscq3',
        kind: 'mcq',
        topic: 'react-def',
        question: {
          en: 'What core engineering mechanism defines the ReAct framework in LLM applications?',
          bn: 'লার্জ ল্যাঙ্গুয়েজ মডেল অ্যাপ্লিকেশনে রিঅ্যাক্ট (ReAct) ফ্রেমওয়ার্কের মূল ইঞ্জিনিয়ারিং বৈশিষ্ট্য কী?'
        },
        options: [
          { en: 'Thought + tool calls interleaved in one loop', bn: 'একই লুপের মধ্যে চিন্তা এবং বাহ্যিক টুলের ব্যবহার পর্যায়ক্রমে চালানো' },
          { en: 'A React.js web framework', bn: 'একটি বহুল ব্যবহৃত রিয়্যাক্ট জেএস ওয়েব ফ্রেমওয়ার্ক' },
          { en: 'Voting twice on identical outputs', bn: 'একই ফলাফলের ওপর দুবার ভোট গ্রহণ করা' },
          { en: 'Refusing to execute user actions', bn: 'ব্যবহারকারীর অনুরোধ সম্পন্ন করতে সরাসরি অস্বীকার করা' },
        ],
        answer: 0,
        hint: { en: 'L5’s fuel.', bn: 'পাঠ ৫ এর প্রস্তুতি।' },
        explanation: {
          en: 'Reason (“I need the price”) → Act (call price_tool) → Observe → repeat: thinking that touches the world.',
          bn: 'চিন্তা করা (“আমার দাম জানা প্রয়োজন”) → কাজ (টুল কল করা) → ফলাফল পর্যবেক্ষণ → পুনরাবৃত্তি: বাস্তবের সাথে চিন্তার সমন্বয়।'
        },
      },
      {
        id: 'rscq4',
        kind: 'predict',
        topic: 'route-design',
        question: { en: 'Route these: (a) 47×38 (b) “CEO of X?” (c) debug traceback. One line.', bn: 'এদের রাউট করুন: (a) ৪৭×৩৮ (b) “X এর প্রধান নির্বাহী কে?” (c) এরর ট্রেসব্যাক ডিবাগ। এক লাইনে লিখুন।' },
        answer: '(a) tool/calculator, (b) direct recall, (c) CoT + vote + verify.',
        accept: ['calculator', 'tool', 'direct', 'recall', 'cot', 'vote', 'verify'],
        hint: { en: 'Shape decides.', bn: 'সমস্যার ধরন অনুযায়ী সিদ্ধান্ত নিন।' },
        explanation: {
          en: 'Arithmetic → tools (exact), facts → direct (cheap), debugging → think + vote + verify (deep). Routing IS the architecture.',
          bn: 'পাটিগণিত → টুল (নির্ভুল), সহজ তথ্য → সরাসরি (সাশ্রয়ী), ডিবাগিং → ধাপে চিন্তা + ভোট + যাচাই। সঠিক রাউটিংই সফল আর্কিটেকচার।'
        },
      },
    ],
  },
  nextLesson: {
    slug: 'agents-tools',
    title: { en: 'Agents and Tools', bn: 'Agents এবং Tools' },
  },
};