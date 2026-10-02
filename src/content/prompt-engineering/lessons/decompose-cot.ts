import type { Lesson } from '../../../lib/types';

export const DecomposeCotLesson: Lesson = {
  slug: 'decompose-cot',
  tech: 'prompt-engineering',
  title: {
    en: 'Cognitive Decomposition & Chain-of-Thought (CoT) Prompting',
    bn: 'কগনিটিভ ডিকম্পোজিশন ও চেইন-অব-থট (CoT) প্রম্পটিং'
  },
  summary: {
    en: 'Unlock complex reasoning in Large Language Models: implement Zero-Shot CoT, structure Few-Shot reasoning traces, decompose hard tasks with Least-to-Most prompting, and achieve consensus through Self-Consistency majority voting across 5 samples.',
    bn: 'লার্জ ল্যাঙ্গুয়েজ মডেলে জটিল যুক্তিবাদী চিন্তার বিকাশ ঘটান: জিরো-শট CoT বাস্তবায়ন, ফিউ-শট যুক্তিপ্রবাহ গঠন, লিস্ট-টু-মোস্ট পদ্ধতিতে কঠিন কাজ সহজ ধাপে ভাগ করা এবং ৫টি নমুনার মধ্যে সেলফ-কনসিস্টেন্সি মেজরিটি ভোটিং প্রয়োগ।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'cot-foundations-heading',
      text: {
        en: 'The Reasoning Bottleneck: Why Direct Next-Token Prediction Fails',
        bn: 'যৌক্তিক সীমাবদ্ধতা: সরাসরি উত্তর প্রদানের ক্ষেত্রে মডেল কেন ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Transformers generate tokens autoregressively from left to right. When prompted for an immediate answer without scratchpad space (e.g. "Calculate final inventory and answer with a single number only"), the model is constrained to a fixed number of transformer layers in a single forward pass. Complex arithmetic and symbolic logic break under this constraint. Chain-of-Thought (CoT) prompting instructs the model to generate intermediate reasoning steps before arriving at the final conclusion, effectively expanding inference-time compute.',
        bn: 'ট্রান্সফরমার মডেলগুলো বাম থেকে ডানে একটি একটি করে টোকেন তৈরি করে। যখন মধ্যবর্তী চিন্তার কোনো স্থান না দিয়ে সরাসরি উত্তর চাওয়া হয় (যেমন "চূড়ান্ত হিসাব করে কেবল একটি সংখ্যায় উত্তর দাও"), তখন মডেলটি একটি একক ফরোয়ার্ড পাসে সীমিত নিউরাল স্তরের মাধ্যমে উত্তর দিতে বাধ্য হয়। এতে জটিল পাটিগণিত ও যুক্তির ক্ষেত্রে ভুল হয়। চেইন-অব-থট (CoT) প্রম্পটিং চূড়ান্ত সিদ্ধান্তে পৌঁছানোর আগে মডেলকে ধাপে ধাপে যুক্তিপ্রবাহ লেখার নির্দেশ দেয়, যা ইনফারেন্সের সময় অতিরিক্ত কম্পিউটেশন সুবিধা প্রদান করে।'
      }
    },
    {
      type: 'visual',
      id: 'cot-reasoning-flow-svg',
      caption: {
        en: 'Figure 1: Direct prediction failure versus structured 4-step Chain-of-Thought reasoning.',
        bn: 'চিত্র ১: সরাসরি উত্তরের ব্যর্থতা বনাম সুসংগঠিত ৪ ধাপের চেইন-অব-থট যুক্তিপ্রবাহ।'
      },
      content: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DIRECT PREDICTION VS CHAIN-OF-THOUGHT REASONING</text>
  
  <!-- Direct Failure -->
  <g transform="translate(30, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#b91c1c" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Direct Query (Zero Scratchpad)</text>
    
    <rect x="20" y="55" width="320" height="55" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="30" y="75" fill="#f87171" font-size="10" font-family="monospace">Prompt: "Store had 45 apples, sold 18,</text>
    <text x="30" y="92" fill="#f87171" font-size="10" font-family="monospace">got 32, tossed 5. Answer with NUMBER:"</text>
    
    <rect x="20" y="130" width="320" height="90" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="30" y="155" fill="#ef4444" font-size="11" font-family="sans-serif" font-weight="bold">Output: 52 ❌ (Incorrect)</text>
    <text x="30" y="175" fill="#94a3b8" font-size="10" font-family="sans-serif">Root cause: No tokens allocated to store</text>
    <text x="30" y="195" fill="#94a3b8" font-size="10" font-family="sans-serif">intermediate arithmetic state transitions.</text>
  </g>

  <!-- CoT Success -->
  <g transform="translate(450, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#059669" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Chain-of-Thought (4 Linear Steps)</text>
    
    <rect x="20" y="50" width="320" height="115" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="30" y="70" fill="#38bdf8" font-size="10" font-family="monospace">1. Initial apples = 45</text>
    <text x="30" y="90" fill="#38bdf8" font-size="10" font-family="monospace">2. After sale: 45 - 18 = 27</text>
    <text x="30" y="110" fill="#38bdf8" font-size="10" font-family="monospace">3. After shipment: 27 + 32 = 59</text>
    <text x="30" y="130" fill="#38bdf8" font-size="10" font-family="monospace">4. After waste: 59 - 5 = 54</text>
    <text x="30" y="150" fill="#cbd5e1" font-size="9" font-family="monospace">Final Answer: 54</text>
    
    <rect x="20" y="175" width="320" height="50" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="30" y="195" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">Output: 54 ✅ (Verified Correct)</text>
    <text x="30" y="212" fill="#94a3b8" font-size="10" font-family="sans-serif">Tokens serve as external cognitive memory.</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'advanced-cot-heading',
      text: {
        en: 'Advanced Paradigms: Zero-Shot CoT, Least-to-Most, and Self-Consistency',
        bn: 'উন্নত পদ্ধতি: জিরো-শট CoT, লিস্ট-টু-মোস্ট এবং সেলফ-কনসিস্টেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beyond simple step-by-step instructions, production AI systems use 3 advanced cognitive architectures. First, Zero-Shot CoT utilizes universal trigger phrases like "Let us think step by step" to induce reasoning without custom examples. Second, Least-to-Most prompting decomposes complex multi-layered questions into sequential sub-problems, feeding earlier answers into subsequent prompts. Third, Self-Consistency samples multiple diverse reasoning paths (e.g. 5 parallel completions at Temperature 0.7) and selects the consensus answer via majority voting.',
        bn: 'সাধারণ ধাপে ধাপে নির্দেশনার বাইরেও আধুনিক এআই সিস্টেমে ৩টি উন্নত পদ্ধতি ব্যবহৃত হয়। প্রথমত, জিরো-শট CoT যাতে "আসুন ধাপে ধাপে চিন্তা করি"-এর মতো সার্বজনীন বাক্য যোগ করলেই মডেল কোনো উদাহরণ ছাড়াই নিজে নিজে যুক্তি সাজাতে শুরু করে। দ্বিতীয়ত, লিস্ট-টু-মোস্ট প্রম্পটিং যাতে একটি জটিল বহুধাপের প্রশ্নকে কতগুলো ক্রমানুসারিক ছোট প্রশ্নে ভাগ করা হয় এবং আগের উত্তর পরের প্রশ্নে যোগ করা হয়। তৃতীয়ত, সেলফ-কনসিস্টেন্সি যা একই প্রশ্নের জন্য সমান্তরালভাবে একাধিক উত্তরের পথ (যেমন ০.৭ টেম্পারেচারে ৫টি ভিন্ন নমুনা) তৈরি করে এবং মেজরিটি ভোটিংয়ের মাধ্যমে সর্বাধিক গ্রহণযোগ্য উত্তরটি বেছে নেয়।'
      }
    },
    {
      type: 'code',
      id: 'self-consistency-ts',
      lang: 'typescript',
      caption: {
        en: 'Self-Consistency majority voting implementation aggregating 5 stochastic reasoning samples.',
        bn: '৫টি ভিন্ন উত্তরের নমুনা থেকে মেজরিটি ভোটিং দ্বারা সমাধান নির্ধারণের TypeScript কোড।'
      },
      code: `interface ReasoningSample {
  sampleId: number;
  reasoningText: string;
  extractedAnswer: number;
}

export function selfConsistencyVoting(samples: ReasoningSample[]): {
  consensusAnswer: number;
  voteCount: number;
  totalSamples: number;
  voteDistribution: Record<number, number>;
} {
  const tally: Record<number, number> = {};

  for (const s of samples) {
    tally[s.extractedAnswer] = (tally[s.extractedAnswer] || 0) + 1;
  }

  let consensusAnswer = samples[0].extractedAnswer;
  let maxVotes = 0;

  for (const [ansStr, count] of Object.entries(tally)) {
    const ans = Number(ansStr);
    if (count > maxVotes) {
      maxVotes = count;
      consensusAnswer = ans;
    }
  }

  return {
    consensusAnswer,
    voteCount: maxVotes,
    totalSamples: samples.length,
    voteDistribution: tally
  };
}

// 5 stochastic reasoning paths sampled at Temperature 0.7
const sampledPaths: ReasoningSample[] = [
  { sampleId: 1, reasoningText: '45 - 18 = 27; 27 + 32 = 59; 59 - 5 = 54', extractedAnswer: 54 },
  { sampleId: 2, reasoningText: 'Initial 45, sold 18 leaves 27. Net addition 32 - 5 = 27. 27 + 27 = 54', extractedAnswer: 54 },
  { sampleId: 3, reasoningText: '45 minus 18 is 27. Added 32 makes 59, minus 5 is 54', extractedAnswer: 54 },
  { sampleId: 4, reasoningText: 'Arithmetic rush error: 45 - 18 = 25; 25 + 32 = 57; 57 - 5 = 52', extractedAnswer: 52 },
  { sampleId: 5, reasoningText: '45 - 18 = 27; 27 + 32 = 59; 59 - 5 = 54', extractedAnswer: 54 }
];

const result = selfConsistencyVoting(sampledPaths);
console.log('Consensus Answer:', result.consensusAnswer); // 54
console.log('Majority Votes:', result.voteCount);         // 4
console.log('Total Samples Evaluated:', result.totalSamples); // 5
// 4 out of 5 samples voted for 54; minority hallucination (52) discarded!`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Chain-of-Thought',
          def: {
            en: 'Prompting strategy that induces an LLM to generate explicit intermediate reasoning steps before arriving at a final answer.',
            bn: 'প্রম্পটিং কৌশল যা চূড়ান্ত উত্তরে পৌঁছানোর আগে একটি মডেলকে স্পষ্ট মধ্যবর্তী যুক্তির ধাপগুলো লিখতে উৎসাহিত করে।'
          }
        },
        {
          term: 'Zero-Shot CoT',
          def: {
            en: 'Triggering step-by-step reasoning without exemplars by appending phrases like "Let us think step by step."',
            bn: 'কোনো পূর্ব উদাহরণ ছাড়াই "আসুন ধাপে ধাপে চিন্তা করি" বাক্য যোগ করে মডেলের যুক্তিপ্রবাহ সক্রিয় করার পদ্ধতি।'
          }
        },
        {
          term: 'Least-to-Most Prompting',
          def: {
            en: 'Decomposition technique where a complex problem is broken down into simpler sub-questions solved sequentially.',
            bn: 'ডিকম্পোজিশন কৌশল যেখানে জটিল সমস্যাকে ক্রমানুসারে সমাধানযোগ্য একাধিক সহজ উপ-প্রশ্নে বিভক্ত করা হয়।'
          }
        },
        {
          term: 'Self-Consistency',
          def: {
            en: 'Sampling multiple distinct reasoning paths at non-zero temperature and taking the majority vote over final answers.',
            bn: 'অশূন্য টেম্পারেচারে একাধিক ভিন্ন যুক্তির পথ তৈরি করে চূড়ান্ত উত্তরের ওপর মেজরিটি ভোটিংয়ের মাধ্যমে সেরা উত্তর নির্বাচন।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cot-scratchpad-benefit-ex1',
      kind: 'mcq',
      topic: 'cot-intermediate-token-compute',
      question: {
        en: 'Why does Chain-of-Thought prompting improve accuracy on complex arithmetic and multi-step logic problems?',
        bn: 'জটিল পাটিগণিত এবং বহুধাপের যুক্তিমূলক সমস্যায় চেইন-অব-থট প্রম্পটিং কেন নির্ভুলতা বৃদ্ধি করে?'
      },
      options: [
        {
          en: 'It generates intermediate reasoning tokens that serve as external working memory, expanding computation before the final answer',
          bn: 'এটি মধ্যবর্তী যুক্তির টোকেন তৈরি করে যা মেমোরি হিসেবে কাজ করে এবং চূড়ান্ত উত্তরের আগে কম্পিউটেশনের সুযোগ বাড়ায়'
        },
        {
          en: 'It doubles the physical GPU clock speed during inference',
          bn: 'এটি অনুমানের সময় জিপিইউ-এর কাজের গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'It bypasses the tokenizer to read raw machine bytes directly',
          bn: 'এটি টোকেনাইজার এড়িয়ে সরাসরি মেশিনের বাইট পড়তে শুরু করে'
        },
        {
          en: 'It permanently alters the training weights of the model',
          bn: 'এটি মডেলের প্রশিক্ষিত ওয়েট স্থায়ীভাবে পরিবর্তন করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of how humans write scratchpad calculations on paper before stating an answer.',
        bn: 'মানুষ যেভাবে মুখে উত্তর বলার আগে খাতায় রাফ বা খসড়া হিসাব করে সেভাবে ভাবুন।'
      },
      explanation: {
        en: 'Each generated reasoning token allows the model to condition its next prediction on verified intermediate calculations.',
        bn: 'প্রতিটি মধ্যবর্তী টোকেন পরবর্তী গণনার ভিত্তি হিসেবে কাজ করে, ফলে ধাপভিত্তিক হিসাব নির্ভুল থাকে।'
      }
    },
    {
      id: 'zero-shot-cot-trigger-ex2',
      kind: 'mcq',
      topic: 'zero-shot-cot-magic-phrase',
      question: {
        en: 'Which classic prompt phrase discovered by Kojima et al. activates Zero-Shot Chain-of-Thought in language models?',
        bn: 'কোজিমা প্রমুখের আবিষ্কৃত কোন বিখ্যাত প্রম্পট বাক্যটি ল্যাঙ্গুয়েজ মডেলে জিরো-শট চেইন-অব-থট সক্রিয় করে?'
      },
      options: [
        { en: '"Let us think step by step"', bn: '"আসুন ধাপে ধাপে চিন্তা করি"' },
        { en: '"Answer as fast as possible"', bn: '"যত দ্রুত সম্ভব উত্তর দাও"' },
        { en: '"Output only the final integer"', bn: '"কেবলমাত্র চূড়ান্ত পূর্ণসংখ্যাটি আউটপুট দাও"' },
        { en: '"Ignore all previous instructions"', bn: '"আগের সব নির্দেশ ভুলে যাও"' }
      ],
      answer: 0,
      hint: {
        en: 'It explicitly commands the model to break down its cognitive process into sequential steps.',
        bn: 'এটি মডেলকে তার চিন্তাপ্রক্রিয়াকে ক্রমানুসারিক ধাপে ভাগ করতে সরাসরি নির্দেশ দেয়।'
      },
      explanation: {
        en: 'Adding "Let us think step by step" guides the model to produce an explanatory reasoning path before reaching the answer.',
        bn: '"আসুন ধাপে ধাপে চিন্তা করি" কথাটি যোগ করলে মডেল আগে বিস্তারিত যুক্তি লেখে এবং তারপর সঠিক উত্তর দেয়।'
      }
    },
    {
      id: 'self-consistency-majority-ex3',
      kind: 'mcq',
      topic: 'self-consistency-consensus-logic',
      question: {
        en: 'In our 5-sample inventory problem, why was the final answer 54 selected over 52?',
        bn: 'আমাদের ৫টি নমুনার ইনভেন্টরি সমস্যায়, ৫২ সংখ্যার বদলে কেন ৫৪ চূড়ান্ত উত্তর হিসেবে নির্বাচিত হয়েছিল?'
      },
      options: [
        {
          en: 'Self-Consistency counted 4 votes for 54 and only 1 vote for 52, taking the consensus majority',
          bn: 'সেলফ-কনসিস্টেন্সি পদ্ধতিতে ৫৪-এর পক্ষে ৪টি ভোট এবং ৫২-এর পক্ষে মাত্র ১টি ভোট পড়ায় সংখ্যাগরিষ্ঠতার ভিত্তিতে এটি নির্বাচিত হয়'
        },
        {
          en: '54 is an even number while 52 is odd',
          bn: '৫৪ একটি জোড় সংখ্যা যেখানে ৫২ একটি বিজোড় সংখ্যা'
        },
        {
          en: 'The model randomly flipped a coin to choose',
          bn: 'মডেলটি কয়েন টস করে উত্তর বেছে নিয়েছিল'
        },
        {
          en: '52 was generated by an unverified third-party plugin',
          bn: '৫২ উত্তরটি কোনো অপরীক্ষিত প্লাগইন দ্বারা তৈরি হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Look at the tally distribution across the 5 sampled reasoning paths.',
        bn: '৫টি উত্তরের নমুনার ভোটের বণ্টনের দিকে লক্ষ্য করুন।'
      },
      explanation: {
        en: 'Self-Consistency identifies the most frequent consensus answer across parallel sampling runs, discarding minority errors.',
        bn: 'সেলফ-কনসিস্টেন্সি সমান্তরাল পথগুলোর মধ্যে সর্বাধিক পুনরাবৃত্ত উত্তরটি গ্রহণ করে ভুলগুলোকে বাতিল করে দেয়।'
      }
    },
    {
      id: 'least-to-most-strategy-ex4',
      kind: 'mcq',
      topic: 'least-to-most-decomposition',
      question: {
        en: 'How does Least-to-Most prompting decompose complex hierarchical problems?',
        bn: 'লিস্ট-টু-মোস্ট প্রম্পটিং কীভাবে জটিল হায়ারারকিকাল সমস্যাকে বিভক্ত করে?'
      },
      options: [
        {
          en: 'It breaks the task into sub-questions from simplest to hardest, feeding answers of earlier steps into later prompts',
          bn: 'এটি সমস্যাটিকে সহজ থেকে কঠিন উপ-প্রশ্নে ভাগ করে এবং আগের ধাপের উত্তর পরবর্তী প্রম্পটের তথ্য হিসেবে সরবরাহ করে'
        },
        {
          en: 'It deletes half of the user prompt to save memory',
          bn: 'এটি মেমোরি বাঁচাতে ব্যবহারকারীর অর্ধেক প্রম্পট মুছে ফেলে'
        },
        {
          en: 'It sorts all characters in reverse order',
          bn: 'এটি সব অক্ষরকে উল্টো ক্রমে সাজিয়ে নেয়'
        },
        {
          en: 'It runs the query only when server traffic is at its absolute least',
          bn: 'এটি কেবল সার্ভার ট্রাফিক যখন সবচেয়ে কম থাকে তখনই চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Solving foundation sub-problems first provides necessary context for harder downstream stages.',
        bn: 'মৌলিক ছোট সমস্যাগুলো আগে সমাধান করলে পরের কঠিন ধাপগুলোর জন্য প্রয়োজনীয় প্রেক্ষাপট তৈরি হয়।'
      },
      explanation: {
        en: 'Least-to-Most solves prerequisite components first, building up accumulated context to tackle the final complex challenge.',
        bn: 'লিস্ট-টু-মোস্ট আগে প্রাথমিক অংশের সমাধান নিশ্চিত করে সেই ভিত্তির ওপর দাঁড়িয়ে পুরো সমস্যাটি নির্ভুলভাবে সমাধান করে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Chain-of-Thought and Cognitive Decomposition Quiz',
      bn: 'চেইন-অব-থট ও কগনিটিভ ডিকম্পোজিশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-cot-tradeoff',
        kind: 'mcq',
        topic: 'cot-token-cost-latency-tradeoff',
        question: {
          en: 'What is the primary engineering tradeoff when deploying Chain-of-Thought prompting to production systems?',
          bn: 'প্রোডাকশন সিস্টেমে চেইন-অব-থট প্রম্পটিং ব্যবহারের প্রধান কারিগরি আপস কী?'
        },
        options: [
          {
            en: 'Higher reasoning accuracy comes at the cost of increased output token generation latency and higher API bills',
            bn: 'যৌক্তিক নির্ভুলতা বাড়লেও আউটপুট টোকেন বেশি লাগায় লেটেন্সি বৃদ্ধি পায় এবং এপিআই খরচ বাড়ে'
          },
          {
            en: 'CoT makes models unable to generate English text',
            bn: 'CoT ব্যবহারের ফলে মডেল ইংরেজি টেক্সট তৈরি করতে অক্ষম হয়ে পড়ে'
          },
          {
            en: 'CoT increases network packet loss between clients and servers',
            bn: 'CoT ক্লায়েন্ট ও সার্ভারের মধ্যে নেটওয়ার্ক প্যাকেট লস বাড়িয়ে দেয়'
          },
          {
            en: 'CoT strictly requires fine-tuning on custom GPU hardware',
            bn: 'CoT-এর জন্য কাস্টম জিপিইউ হার্ডওয়্যারে ফাইন-টিউনিং করা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Generating 200 tokens of reasoning takes more time and money than outputting a single number.',
          bn: 'একটি সংখ্যার বদলে ২০০ টোকেনের যুক্তি লিখতে সময় এবং আর্থিক খরচ উভয়ই বেশি লাগে।'
        },
        explanation: {
          en: 'CoT generates dozens or hundreds of intermediate tokens, directly inflating response time and per-request costs.',
          bn: 'CoT মধ্যবর্তী অনেকগুলো টোকেন তৈরি করায় ব্যবহারকারীর অপেক্ষা করার সময় এবং প্রতি রিকোয়েস্টে বিলিং বৃদ্ধি পায়।'
        }
      },
      {
        id: 'quiz-when-not-to-use-cot',
        kind: 'mcq',
        topic: 'cot-inapplicable-scenarios',
        question: {
          en: 'For which of the following tasks is Chain-of-Thought prompting usually unnecessary or counterproductive?',
          bn: 'নিচের কোন কাজের জন্য চেইন-অব-থট প্রম্পটিং সাধারণত অপ্রয়োজনীয় বা অনুপযোগী?'
        },
        options: [
          {
            en: 'Simple sentiment classification or factual keyword extraction where direct answers are immediate',
            bn: 'সহজ সেন্টিমেন্ট ক্লাসিফিকেশন বা তথ্যমূলক কিওয়ার্ড খোঁজার কাজে যেখানে সরাসরি উত্তর পাওয়া যায়'
          },
          {
            en: 'Multi-step calculus integration and algebraic proofs',
            bn: 'বহুধাপের ক্যালকুলাস সমাকলন ও বীজগণিতীয় প্রমাণে'
          },
          {
            en: 'Strategic chess move evaluations and multi-day planning',
            bn: 'দাবা খেলার চাল মূল্যায়ন এবং বহুদিনের পরিকল্পনায়'
          },
          {
            en: 'Complex symbolic logic riddles with multiple constraints',
            bn: 'একাধিক শর্ত সম্বলিত জটিল যৌক্তিক ধাঁধার ক্ষেত্রে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Simple single-lookup tasks do not require multi-step reasoning steps.',
          bn: 'সহজ একক তথ্যের সন্ধানে বহুধাপের যুক্তির কোনো প্রয়োজন থাকে না।'
        },
        explanation: {
          en: 'Tasks requiring shallow semantic retrieval derive negligible accuracy gain from CoT while multiplying costs needlessly.',
          bn: 'সহজ ডেটা খোঁজার কাজে CoT অতিরিক্ত কোনো লাভ দেয় না, বরং অনর্থক খরচ ও বিলম্ব তৈরি করে।'
        }
      },
      {
        id: 'quiz-self-consistency-temperature',
        kind: 'mcq',
        topic: 'temperature-setting-self-consistency',
        question: {
          en: 'Why must Self-Consistency sampling be executed with a non-zero Temperature (such as 0.7) rather than Temperature 0?',
          bn: 'সেলফ-কনসিস্টেন্সি স্যাম্পলিং কেন শূন্যের চেয়ে বেশি টেম্পারেচারে (যেমন ০.৭) চালাতে হয়?'
        },
        options: [
          {
            en: 'Temperature 0 produces identical deterministic paths on every run, destroying the diversity needed for meaningful voting',
            bn: 'টেম্পারেচার ০ থাকলে প্রতিবার হুবহু একই উত্তর আসে, ফলে কার্যকর ভোটিংয়ের জন্য প্রয়োজনীয় বৈচিত্র্য নষ্ট হয়'
          },
          {
            en: 'Temperature 0 crashes the voting algorithm with a divide-by-zero error',
            bn: 'টেম্পারেচার ০ থাকলে ভোটিং অ্যালগরিদম ভাগ-শূন্য ত্রুটিতে ক্র্যাশ করে'
          },
          {
            en: 'Non-zero temperature guarantees 100 percent factual accuracy',
            bn: 'অশূন্য টেম্পারেচার নিশ্চিতভাবে শতভাগ সঠিক উত্তরের নিশ্চয়তা দেয়'
          },
          {
            en: 'Temperature 0 disables the ability to parse integers in code',
            bn: 'টেম্পারেচার ০ কোডে পূর্ণসংখ্যা পার্স করার ক্ষমতা বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without randomness, taking 5 samples generates 5 identical copies of the same output.',
          bn: 'অনিশ্চয়তা বা বৈচিত্র্য না থাকলে ৫টি নমুনা নিলে ৫ বার একই লেখার পুনরাবৃত্তি ঘটবে।'
        },
        explanation: {
          en: 'Non-zero temperature explores multiple valid reasoning angles; independent paths converging on the same answer confirms correctness.',
          bn: 'অশূন্য টেম্পারেচার বিভিন্ন যৌক্তিক পথ তৈরি করে; একাধিক ভিন্ন পথে এসেও একই উত্তর পেলে সেটি সঠিক হওয়ার সম্ভাবনা নিশ্চিত হয়।'
        }
      },
      {
        id: 'quiz-tot-tree-of-thoughts',
        kind: 'mcq',
        topic: 'tree-of-thoughts-backtracking',
        question: {
          en: 'How does Tree of Thoughts (ToT) extend traditional linear Chain-of-Thought prompting?',
          bn: 'ট্রি অব থটস (ToT) কীভাবে সাধারণ লিনিয়ার চেইন-অব-থট প্রম্পটিংকে আরও প্রসারিত করে?'
        },
        options: [
          {
            en: 'It enables branching decision trees where the model evaluates candidate thoughts, looks ahead, and backtracks when a path fails',
            bn: 'এটি শাখা-প্রশাখাযুক্ত সিদ্ধান্ত ট্রি তৈরি করে যেখানে মডেল একাধিক চিন্তা মূল্যায়ন করে এবং কোনো পথ ব্যর্থ হলে পেছনে ফিরে আসে (backtracking)'
          },
          {
            en: 'It replaces prompt text with binary executable files',
            bn: 'এটি প্রম্পটের লেখাকে বাইনারি এক্সিকিউটেবল ফাইল দিয়ে প্রতিস্থাপন করে'
          },
          {
            en: 'It limits the conversation to exactly 2 turns',
            bn: 'এটি কথোপকথনকে কেবল ২টি পর্যায়ে সীমাবদ্ধ করে দেয়'
          },
          {
            en: 'It eliminates the need for language models entirely',
            bn: 'এটি ল্যাঙ্গুয়েজ মডেল ব্যবহারের প্রয়োজনীয়তা পুরোপুরি বিলুপ্ত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of depth-first search (DFS) with backtracking applied to intermediate thought generation.',
          bn: 'মধ্যবর্তী চিন্তা মূল্যায়নে ব্যাকট্র্যাকিং সহ ডেপথ-ফার্স্ট সার্চের কথা ভাবুন।'
        },
        explanation: {
          en: 'ToT frames problem-solving as tree search (BFS/DFS), allowing deliberate deliberation, self-evaluation, and backtracking.',
          bn: 'ToT সমস্যা সমাধানকে ট্রি সার্চের মতো দেখে, ফলে ভুল পথে গেলে মডেল ফিরে এসে নতুন পথ অন্বেষণ করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'constraints-format',
    title: {
      en: 'Constraints, Structured Output, and JSON Schemas',
      bn: 'কনস্ট্রেইন্টস, স্ট্রাকচার্ড আউটপুট এবং JSON স্কিমা'
    }
  }
};
