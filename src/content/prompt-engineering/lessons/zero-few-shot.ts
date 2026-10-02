import type { Lesson } from '../../../lib/types';

export const ZeroFewShotLesson: Lesson = {
  slug: 'zero-few-shot',
  tech: 'prompt-engineering',
  title: {
    en: 'Zero-Shot vs Few-Shot In-Context Learning',
    bn: 'জিরো-শট বনাম ফিউ-শট ইন-কনটেক্সট লার্নিং'
  },
  summary: {
    en: 'Harness the power of In-Context Learning: transition from Zero-Shot instructions to balanced 3-shot and 5-shot exemplars, mitigate recency bias, and engineer diverse demonstration sets that boost accuracy from 52% to 88%.',
    bn: 'ইন-কনটেক্সট লার্নিংয়ের ক্ষমতা কাজে লাগান: জিরো-শট নির্দেশনা থেকে সুষম ৩-শট ও ৫-শট উদাহরণে উত্তরণ, রিসেন্সি বায়াস দূরীকরণ এবং নিখুঁত উদাহরণ নির্বাচনের মাধ্যমে নির্ভুলতা ৫২% থেকে ৮৮%-এ উন্নীতকরণ।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'zero-vs-few-shot-heading',
      text: {
        en: 'The In-Context Learning Spectrum: Zero-Shot to Few-Shot',
        bn: 'ইন-কনটেক্সট লার্নিংয়ের রূপরেখা: জিরো-শট থেকে ফিউ-শট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional machine learning, adapting a model to a new task requires fine-tuning millions of neural weights via gradient descent. Modern Large Language Models introduce In-Context Learning: conditioning on a few input-output demonstrations directly in the prompt context window without updating underlying model weights. While Zero-Shot relies entirely on pre-trained knowledge, adding 3 to 5 targeted exemplars often elevates categorization accuracy from 52% to over 88%.',
        bn: 'ঐতিহ্যবাহী মেশিন লার্নিংয়ে নতুন কাজের জন্য গ্রেডিয়েন্ট ডিসেন্টের মাধ্যমে লক্ষ লক্ষ নিউরাল ওয়েট আপডেট করতে হয়। তবে আধুনিক লার্জ ল্যাঙ্গুয়েজ মডেল ইন-কনটেক্সট লার্নিং সুবিধা দেয়: মডেলের কোনো ওয়েট পরিবর্তন না করেই প্রম্পটের ভেতরে কয়েকটি ইনপুট-আউটপুট উদাহরণ দিয়ে মডেলকে নতুন কাজ শেখানো যায়। যেখানে জিরো-শট প্রম্পটিং কেবল পূর্ব-প্রশিক্ষিত জ্ঞানের ওপর নির্ভর করে, সেখানে ৩ থেকে ৫টি সুনির্দিষ্ট উদাহরণ যোগ করলে নির্ভুলতা ৫২% থেকে বেড়ে ৮৮%-এর বেশি হতে পারে।'
      }
    },
    {
      type: 'visual',
      id: 'few-shot-comparison-svg',
      caption: {
        en: 'Figure 1: Structural comparison between Zero-Shot inference and balanced 3-shot In-Context Learning.',
        bn: 'চিত্র ১: জিরো-শট অনুমান এবং সুষম ৩-শট ইন-কনটেক্সট লার্নিংয়ের কাঠামোগত তুলনা।'
      },
      content: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ZERO-SHOT VS FEW-SHOT IN-CONTEXT LEARNING</text>
  
  <!-- Zero-Shot Container -->
  <g transform="translate(30, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#0284c7" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Zero-Shot (0 Demonstrations)</text>
    
    <rect x="20" y="55" width="320" height="45" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="30" y="75" fill="#38bdf8" font-size="10" font-family="monospace">System Instruction:</text>
    <text x="30" y="90" fill="#cbd5e1" font-size="10" font-family="monospace">"Classify sentiment as POS, NEG, or NEU."</text>
    
    <rect x="20" y="115" width="320" height="45" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="30" y="135" fill="#f59e0b" font-size="10" font-family="monospace">Target Input:</text>
    <text x="30" y="150" fill="#cbd5e1" font-size="10" font-family="monospace">"Battery life is acceptable."</text>
    
    <rect x="20" y="175" width="320" height="50" rx="6" fill="#0f172a" stroke="#eab308" />
    <text x="30" y="195" fill="#facc15" font-size="11" font-family="sans-serif" font-weight="bold">Baseline Accuracy: ~52%</text>
    <text x="30" y="212" fill="#94a3b8" font-size="10" font-family="sans-serif">High ambiguity on edge cases & formatting</text>
  </g>

  <!-- Few-Shot Container -->
  <g transform="translate(450, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#059669" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Few-Shot (3 Exemplars Balanced)</text>
    
    <rect x="20" y="50" width="320" height="85" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="30" y="68" fill="#10b981" font-size="10" font-family="monospace">Exemplar 1 (POS): "Amazing sound!" -&gt; POS</text>
    <text x="30" y="88" fill="#ef4444" font-size="10" font-family="monospace">Exemplar 2 (NEG): "Stopped working." -&gt; NEG</text>
    <text x="30" y="108" fill="#38bdf8" font-size="10" font-family="monospace">Exemplar 3 (NEU): "Average cord." -&gt; NEU</text>
    <text x="30" y="125" fill="#94a3b8" font-size="9" font-family="monospace">Target: "Battery life is acceptable."</text>
    
    <rect x="20" y="150" width="320" height="75" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="30" y="172" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">Optimized Accuracy: ~88%</text>
    <text x="30" y="190" fill="#cbd5e1" font-size="10" font-family="sans-serif">Exact class definitions + format imitation</text>
    <text x="30" y="208" fill="#38bdf8" font-size="10" font-family="sans-serif">Zero weight updates needed</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'biases-and-selection-heading',
      text: {
        en: 'Mitigating Few-Shot Pitfalls: Majority-Class Bias and Recency Ordering',
        bn: 'ফিউ-শটের ত্রুটি দূরীকরণ: মেজরিটি-ক্লাস বায়াস এবং রিসেন্সি অর্ডারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Few-shot prompting is not merely pasting random examples into a prompt. Empirical research shows models suffer from 2 major biases: Majority-Class Bias and Recency Bias. If 4 out of 5 exemplars represent positive sentiment, the model disproportionately defaults to positive predictions. Furthermore, models weight recent exemplars higher due to attention decay. Best practices mandate strictly balanced class representation (e.g. 1 positive, 1 negative, and 1 neutral) and placing complex boundary edge cases last.',
        bn: 'ফিউ-শট প্রম্পটিং মানে ইচ্ছামতো কিছু উদাহরণ প্রম্পটে বসিয়ে দেওয়া নয়। গবেষণায় দেখা গেছে মডেলগুলো মূলত ২টি বড় বায়াস বা পক্ষপাতে ভোগে: মেজরিটি-ক্লাস বায়াস এবং রিসেন্সি বায়াস। উদাহরণে যদি ৫টির মধ্যে ৪টিই ইতিবাচক হয়, তবে মডেল যেকোনো ইনপুটকেই ইতিবাচক ধরে নেওয়ার প্রবণতা দেখায়। তাছাড়া অ্যাটেনশন মেকানিজমের কারণে শেষের উদাহরণের প্রভাব সবচেয়ে বেশি থাকে। তাই প্রতিটি ক্লাসের সমান সংখ্যক উদাহরণ (যেমন ১টি পজিটিভ, ১টি নেগেটিভ এবং ১টি নিউট্রাল) রাখা এবং জটিল এজ-কেসগুলো শেষের দিকে বসানো সর্বোত্তম পদ্ধতি।'
      }
    },
    {
      type: 'code',
      id: 'few-shot-builder-ts',
      lang: 'typescript',
      caption: {
        en: 'Production-grade Few-Shot prompt assembler with balanced class validation.',
        bn: 'সুষম ক্লাস ভ্যালিডেশন সহ প্রোডাকশন-গ্রেড ফিউ-শট প্রম্পট তৈরির কোড।'
      },
      code: `interface Exemplar {
  input: string;
  output: string;
  category: 'POS' | 'NEG' | 'NEU';
}

export function buildFewShotPrompt(
  taskInstruction: string,
  exemplars: Exemplar[],
  targetInput: string
): { promptText: string; exemplarCount: number; isBalanced: boolean } {
  // Count frequency of each class to detect majority bias
  const counts: Record<string, number> = { POS: 0, NEG: 0, NEU: 0 };
  for (const ex of exemplars) {
    counts[ex.category] = (counts[ex.category] || 0) + 1;
  }

  // Check if every class has exactly 1 exemplar (balanced 3-shot set)
  const isBalanced = counts.POS === 1 && counts.NEG === 1 && counts.NEU === 1;

  let prompt = \`INSTRUCTION:\\n\${taskInstruction}\\n\\nDEMONSTRATIONS:\\n\`;
  for (let i = 0; i < exemplars.length; i++) {
    const ex = exemplars[i];
    prompt += \`Example \${i + 1}:\\nInput: "\${ex.input}"\\nOutput: \${ex.output}\\n\\n\`;
  }

  prompt += \`CURRENT TASK:\\nInput: "\${targetInput}"\\nOutput:\`;

  return {
    promptText: prompt,
    exemplarCount: exemplars.length,
    isBalanced
  };
}

// 3 balanced exemplars across 3 distinct sentiment classes
const demonstrations: Exemplar[] = [
  { input: 'Sound quality exceeded all expectations.', output: 'POS', category: 'POS' },
  { input: 'Earbuds died after 2 hours of use.', output: 'NEG', category: 'NEG' },
  { input: 'Shipped in a standard brown cardboard box.', output: 'NEU', category: 'NEU' }
];

const target = 'Volume buttons feel slightly loose but functional.';
const assembled = buildFewShotPrompt(
  'Classify product review sentiment into exactly one tag: POS, NEG, or NEU.',
  demonstrations,
  target
);

console.log('Exemplars Loaded:', assembled.exemplarCount); // 3
console.log('Is Class Balanced:', assembled.isBalanced);   // true
console.log('Sample Prompt Length:', assembled.promptText.length); // 402`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'In-Context Learning',
          def: {
            en: 'The ability of an LLM to learn new tasks at inference time solely from context examples without updating neural network weights.',
            bn: 'ইনফারেন্সের সময় নিউরাল নেটওয়ার্কের কোনো ওয়েট পরিবর্তন ছাড়াই কেবল প্রম্পটের উদাহরণের সাহায্যে নতুন কাজ শেখার এলএলএম ক্ষমতা।'
          }
        },
        {
          term: 'Zero-Shot Prompting',
          def: {
            en: 'Querying an LLM with task instructions only, providing 0 demonstrations of expected input-output pairs.',
            bn: 'প্রত্যাশিত ইনপুট-আউটপুট জোড়ার কোনো উদাহরণ (০টি ডেমোনস্ট্রেশন) না দিয়ে কেবল কাজের নির্দেশের মাধ্যমে মডেলকে প্রশ্ন করা।'
          }
        },
        {
          term: 'Recency Bias',
          def: {
            en: 'The cognitive tendency of transformer models to disproportionately imitate the pattern or class of the final demonstration.',
            bn: 'ট্রান্সফরমার মডেলের একটি প্রবণতা যেখানে এটি তালিকার সর্বশেষে প্রদর্শিত উদাহরণের প্যাটার্ন বা ক্লাসকে বেশি অনুকরণ করে।'
          }
        },
        {
          term: 'Majority-Class Bias',
          def: {
            en: 'Systematic prediction skew occurring when one category appears more frequently than others in the few-shot example set.',
            bn: 'ধারাবাহিক অনুমানের পক্ষপাত যা ঘটে যখন ফিউ-শট উদাহরণগুলোতে একটি নির্দিষ্ট ক্যাটাগরি অন্যগুলোর চেয়ে বেশি উপস্থিত থাকে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'zero-vs-few-shot-ex1',
      kind: 'mcq',
      topic: 'in-context-learning-weights',
      question: {
        en: 'How does Few-Shot In-Context Learning differ fundamentally from model fine-tuning?',
        bn: 'মডেল ফাইন-টিউনিংয়ের তুলনায় ফিউ-শট ইন-কনটেক্সট লার্নিং কীভাবে মৌলিকভাবে আলাদা?'
      },
      options: [
        {
          en: 'It steers predictions using prompt context without performing backpropagation or updating any model weights',
          bn: 'এটি ব্যাকপ্রোপাগেশন বা কোনো মডেল ওয়েট পরিবর্তন না করে কেবল প্রম্পটের উদাহরণের সাহায্যে উত্তর পরিচালনা করে'
        },
        {
          en: 'It retrains all transformer layers on every request',
          bn: 'এটি প্রতিটি অনুরোধে সব ট্রান্সফরমার লেয়ার পুনরায় প্রশিক্ষণ দেয়'
        },
        {
          en: 'It permanently deletes pre-trained model knowledge',
          bn: 'এটি মডেলের পূর্ব-প্রশিক্ষিত জ্ঞান স্থায়ীভাবে মুছে ফেলে'
        },
        {
          en: 'It requires compiling C++ GPU assembly drivers',
          bn: 'এর জন্য সি++ জিপিইউ ড্রাইভার কম্পাইল করা আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about whether model weights change during prompt evaluation.',
        bn: 'প্রম্পট চালানোর সময় মডেলের অভ্যন্তরীণ ওয়েট পরিবর্তিত হয় কিনা তা ভাবুন।'
      },
      explanation: {
        en: 'In-Context Learning occurs entirely in forward inference via attention activations; no gradient descent updates are applied.',
        bn: 'ইন-কনটেক্সট লার্নিং সম্পূর্ণভাবে ফরোয়ার্ড ইনফারেন্সে ঘটে; এতে কোনো গ্রেডিয়েন্ট ডিসেন্ট বা ওয়েট পরিবর্তন ঘটে না।'
      }
    },
    {
      id: 'few-shot-accuracy-gain-ex2',
      kind: 'mcq',
      topic: 'accuracy-benchmark-boost',
      question: {
        en: 'In our benchmark comparison, what happened to categorization accuracy when moving from Zero-Shot to a balanced 3-shot prompt?',
        bn: 'আমাদের বেঞ্চমার্ক তুলনায়, জিরো-শট থেকে সুষম ৩-শট প্রম্পটে যাওয়ার ফলে শ্রেণিবিন্যাসের নির্ভুলতায় কী পরিবর্তন ঘটেছিল?'
      },
      options: [
        { en: 'Accuracy increased from 52% to roughly 88%', bn: 'নির্ভুলতা ৫২% থেকে বেড়ে প্রায় ৮৮%-এ উন্নীত হয়েছিল' },
        { en: 'Accuracy dropped down to 10%', bn: 'নির্ভুলতা কমে ১০%-এ নেমে এসেছিল' },
        { en: 'Accuracy remained exactly identical at 50%', bn: 'নির্ভুলতা ৫০%-এ অপরিবর্তিত ছিল' },
        { en: 'The model crashed with an out-of-memory error', bn: 'মডেলটি আউট-অব-মেমোরি ত্রুটিতে ক্র্যাশ করেছিল' }
      ],
      answer: 0,
      hint: {
        en: 'Concrete demonstrations clarify formatting and resolve semantic edge cases.',
        bn: 'বাস্তব উদাহরণ ফরম্যাট স্পষ্ট করে এবং দ্ব্যর্থবোধক ক্ষেত্রগুলোর সমাধান দেয়।'
      },
      explanation: {
        en: 'Providing 3 balanced exemplars grounded the model on edge cases, boosting accuracy from 52% to roughly 88%.',
        bn: '৩টি সুষম উদাহরণ যোগ করায় জটিল ক্ষেত্রগুলোতে মডেলের বিভ্রান্তি কমে নির্ভুলতা ৫২% থেকে প্রায় ৮৮%-এ পৌঁছায়।'
      }
    },
    {
      id: 'majority-bias-ex3',
      kind: 'mcq',
      topic: 'majority-class-skew-mitigation',
      question: {
        en: 'If a 5-shot prompt contains 4 positive examples and only 1 negative example, what predictable defect emerges?',
        bn: 'যদি একটি ৫-শট প্রম্পটে ৪টি পজিটিভ উদাহরণ এবং মাত্র ১টি নেগেটিভ উদাহরণ থাকে, তবে কোন অনুমেয় ত্রুটি দেখা দেয়?'
      },
      options: [
        {
          en: 'The model develops Majority-Class Bias, disproportionately classifying ambiguous test cases as positive',
          bn: 'মডেলটিতে মেজরিটি-ক্লাস বায়াস তৈরি হয়, ফলে এটি অস্পষ্ট ক্ষেত্রগুলোকে অনর্থক পজিটিভ হিসেবে চিহ্নিত করে'
        },
        {
          en: 'The prompt text exceeds the 128k token context window',
          bn: 'প্রম্পটের টেক্সট ১২৮কে টোকেনের কনটেক্সট উইন্ডো অতিক্রম করে'
        },
        {
          en: 'The model switches to outputting French translations',
          bn: 'মডেলটি ফরাসি ভাষায় অনুবাদ দিতে শুরু করে'
        },
        {
          en: 'The API server rejects the request with HTTP 400',
          bn: 'এপিআই সার্ভার এইচটিটিপি ৪০০ দিয়ে অনুরোধ বাতিল করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Imbalanced training examples skew the prior probability distribution of the model.',
        bn: 'অসম উদাহরণ মডেলের সম্ভাব্যতা বণ্টনকে একদিকে ঝুঁকিয়ে দেয়।'
      },
      explanation: {
        en: 'LLMs inherit prior frequency from demonstrations; skewed exemplar ratios directly trigger classification bias.',
        bn: 'মডেল উদাহরণের পুনরাবৃত্তি থেকে প্রাধান্য নির্ধারণ করে; ফলে অসম অনুপাত সরাসরি শ্রেণিবিভাগে পক্ষপাতের জন্ম দেয়।'
      }
    },
    {
      id: 'recency-bias-ordering-ex4',
      kind: 'mcq',
      topic: 'exemplar-ordering-strategy',
      question: {
        en: 'Why is exemplar ordering strategically important when assembling a 3-shot prompt?',
        bn: 'একটি ৩-শট প্রম্পট তৈরির সময় উদাহরণের ক্রম সাজানো কেন কৌশলগতভাবে অত্যন্ত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'Due to Recency Bias, the final exemplar exerts the strongest influence, making it the ideal location for subtle boundary cases',
          bn: 'রিসেন্সি বায়াসের কারণে সর্বশেষ উদাহরণটির প্রভাব সবচেয়ে বেশি থাকে, যা সূক্ষ্ম এজ-কেস রাখার জন্য সবচেয়ে উপযুক্ত'
        },
        {
          en: 'Transformers can only read the first 10 characters of an input',
          bn: 'ট্রান্সফরমার কেবল ইনপুটের প্রথম ১০টি অক্ষর পড়তে সক্ষম'
        },
        {
          en: 'Alphabetical sorting of words is enforced by the GPU compiler',
          bn: 'জিপিইউ কম্পাইলার দ্বারা শব্দের বর্ণানুক্রমিক বিন্যাস বাধ্যতামূলক'
        },
        {
          en: 'Exemplar ordering has zero measurable impact on output quality',
          bn: 'আউটপুটের মানের ওপর উদাহরণের ক্রমের কোনো প্রভাব নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'The attention mechanism assigns high weight to immediately preceding context tokens.',
        bn: 'অ্যাটেনশন মেকানিজম ঠিক আগের টোকেনগুলোর ওপর অধিক মনোযোগ দেয়।'
      },
      explanation: {
        en: 'Models exhibit recency effects; placing representative or challenging boundary examples last anchors the decision boundary.',
        bn: 'মডেল শেষের উদাহরণের প্রতি সংবেদনশীল থাকে; তাই জটিল বা গুরুত্বপূর্ণ উদাহরণ শেষে রাখলে সিদ্ধান্ত গ্রহণ নিখুঁত হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Zero-Shot vs Few-Shot Learning Quiz',
      bn: 'জিরো-শট বনাম ফিউ-শট লার্নিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-when-to-use-zero-shot',
        kind: 'mcq',
        topic: 'zero-shot-use-cases',
        question: {
          en: 'In which scenario is Zero-Shot prompting preferred over Few-Shot prompting?',
          bn: 'কোন পরিস্থিতিতে ফিউ-শট প্রম্পটিংয়ের চেয়ে জিরো-শট প্রম্পটিং অধিক গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'For straightforward common tasks where minimizing input token latency and API cost outweighs marginal accuracy gains',
            bn: 'সহজ সাধারণ কাজের জন্য যেখানে ইনপুট টোকেন ও এপিআই খরচ কমানো সামান্য নির্ভুলতা বৃদ্ধির চেয়ে বেশি গুরুত্বপূর্ণ'
          },
          {
            en: 'When extracting complex nested JSON requiring strict enum adherence',
            bn: 'কঠোর এনাম মান সহ জটিল নেস্টেড JSON ডেটা নিষ্কাশনের ক্ষেত্রে'
          },
          {
            en: 'When classifying highly subjective domain-specific medical documents',
            bn: 'অত্যন্ত বিশেষায়িত ও সংবেদনশীল চিকিৎসা নথি বিশ্লেষণের ক্ষেত্রে'
          },
          {
            en: 'When token cost and latency are completely irrelevant',
            bn: 'যখন টোকেন খরচ এবং লেটেন্সি পুরোপুরি অপ্রাসঙ্গিক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the cost and latency overhead of packing 5 exemplars on high-volume endpoints.',
          bn: 'উচ্চ ট্রাফিকের এন্ডপয়েন্টে ৫টি উদাহরণ যোগ করার খরচ ও সময়ের কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'Zero-shot minimizes context size, slashing inference latency and token costs when base model performance is already satisfactory.',
          bn: 'জিরো-শট কনটেক্সটের আকার ছোট রাখে, যা সাধারণ কাজের ক্ষেত্রে খরচ ও সময় উভয়ই সাশ্রয় করে।'
        }
      },
      {
        id: 'quiz-exemplar-diversity',
        kind: 'mcq',
        topic: 'exemplar-diversity-principle',
        question: {
          en: 'What is the primary benefit of ensuring high diversity among few-shot demonstrations?',
          bn: 'ফিউ-শট উদাহরণগুলোর মধ্যে উচ্চ বৈচিত্র্য নিশ্চিত করার প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'It covers distinct sentence lengths, vocabularies, and edge cases, preventing the model from overfitting to one narrow phrasing pattern',
            bn: 'এটি বিভিন্ন বাক্যের দৈর্ঘ্য, শব্দভাণ্ডার ও এজ-কেস ধারণ করে, ফলে মডেল নির্দিষ্ট কোনো এক ধরনের বাক্য গঠনে আটকে থাকে না'
          },
          {
            en: 'It forces the model to switch its underlying tokenizer',
            bn: 'এটি মডেলকে তার টোকেনাইজার পরিবর্তনে বাধ্য করে'
          },
          {
            en: 'It decreases the total number of attention heads used in computation',
            bn: 'এটি গণনায় ব্যবহৃত মোট অ্যাটেনশন হেডের সংখ্যা কমিয়ে দেয়'
          },
          {
            en: 'It converts the language model into a relational database',
            bn: 'এটি ল্যাঙ্গুয়েজ মডেলকে রিলেশনাল ডেটাবেসে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Diverse examples teach the general rule rather than an accidental stylistic habit.',
          bn: 'বৈচিত্র্যময় উদাহরণ নির্দিষ্ট লেখার ঢং নয়, বরং সামগ্রিক নিয়মটি বুঝতে শেখায়।'
        },
        explanation: {
          en: 'Exemplar diversity prevents stylistic overfitting and equips the model to generalize across heterogeneous real-world inputs.',
          bn: 'উদাহরণের বৈচিত্র্য মডেলকে বাস্তব জীবনের ভিন্ন ভিন্ন ধরণের ইনপুটের সাথে সঠিকভাবে খাপ খাইয়ে নিতে সাহায্য করে।'
        }
      },
      {
        id: 'quiz-negative-exemplars',
        kind: 'mcq',
        topic: 'negative-examples-utility',
        question: {
          en: 'How can negative exemplars ("What NOT to do") be effectively used in few-shot prompt design?',
          bn: 'ফিউ-শট প্রম্পট ডিজাইনে নেগেটিভ উদাহরণ ("কী করা যাবে না") কীভাবে কার্যকরভাবে ব্যবহার করা যেতে পারে?'
        },
        options: [
          {
            en: 'By pairing common erroneous outputs with an explicit correction and explanation of why that output violated rules',
            bn: 'সাধারণ ভুল আউটপুটের সাথে সংশোধন এবং কেন সেটি নিয়ম লঙ্ঘন করেছে তার স্পষ্ট ব্যাখ্যা প্রদান করে'
          },
          {
            en: 'By filling the prompt entirely with offensive sentences',
            bn: 'প্রম্পটটিকে সম্পূর্ণভাবে আপত্তিকর বাক্য দিয়ে পূর্ণ করে'
          },
          {
            en: 'By confusing the model so it outputs random tokens',
            bn: 'মডেলকে বিভ্রান্ত করে এলোমেলো টোকেন আউটপুট দিতে বাধ্য করে'
          },
          {
            en: 'By setting temperature to negative 1',
            bn: 'টেম্পারেচার ঋণাত্মক ১ নির্ধারণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Showing the error alongside the corrected version establishes clear behavioral guardrails.',
          bn: 'ভুলের পাশাপাশি সঠিক রূপটি দেখালে মডেলের জন্য স্পষ্ট আচরণবিধি তৈরি হয়।'
        },
        explanation: {
          en: 'Annotated negative examples highlight subtle failure modes (e.g. conversational chatter around JSON), explicitly steering the model away.',
          bn: 'ব্যাখ্যাকৃত নেগেটিভ উদাহরণ সূক্ষ্ম ভুলগুলো (যেমন JSON-এর সাথে অতিরিক্ত কথা বলা) চিহ্নিত করে মডেলকে বিরত রাখে।'
        }
      },
      {
        id: 'quiz-few-shot-token-budget',
        kind: 'mcq',
        topic: 'few-shot-context-budget-tradeoff',
        question: {
          en: 'What architectural tradeoff must engineers consider when expanding from 3-shot to 10-shot in a high-throughput microservice?',
          bn: 'একটি উচ্চ-সক্ষমতার মাইক্রোসার্ভিসে ৩-শট থেকে ১০-শটে যাওয়ার সময় প্রকৌশলীদের কোন কারিগরি আপস বিবেচনা করতে হয়?'
        },
        options: [
          {
            en: 'Diminishing accuracy returns versus increased input token costs and elevated time-to-first-token (TTFT) latency',
            bn: 'নির্ভুলতা বৃদ্ধির ক্রমহ্রাসমান হারের বিপরীতে অতিরিক্ত ইনপুট টোকেন খরচ এবং টাইম-টু-ফার্স্ট-টোকেন (TTFT) লেটেন্সির বৃদ্ধি'
          },
          {
            en: 'The risk of permanent CPU clock frequency throttling',
            bn: 'সিপিইউ-এর কাজের গতি স্থায়ীভাবে কমে যাওয়ার ঝুঁকি'
          },
          {
            en: 'The database server shutting down unexpected network ports',
            bn: 'ডেটাবেস সার্ভারের অপ্রত্যাশিত নেটওয়ার্ক পোর্ট বন্ধ হয়ে যাওয়া'
          },
          {
            en: 'Loss of ability to use JSON formats completely',
            bn: 'JSON ফরম্যাট ব্যবহারের সক্ষমতা সম্পূর্ণরূপে হারিয়ে যাওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every additional exemplar adds input tokens that must be processed by transformer attention on every call.',
          bn: 'প্রতিটি অতিরিক্ত উদাহরণ ইনপুট টোকেন বাড়ায় যা প্রতিটি কলে প্রসেস করতে অতিরিক্ত সময় ও খরচ নেয়।'
        },
        explanation: {
          en: 'Beyond 3 to 5 exemplars, accuracy gains plateau while every call incurs higher token billing and latency overhead.',
          bn: '৩ থেকে ৫টি উদাহরণের পর নির্ভুলতা বৃদ্ধির হার কমে যায়, অথচ প্রতিটি কলে লেটেন্সি ও আর্থিক খরচ ক্রমাগত বাড়তে থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'decompose-cot',
    title: {
      en: 'Decomposition and Chain-of-Thought Reasoning',
      bn: 'ডিকম্পোজিশন এবং চেইন-অব-থট যুক্তিপ্রবাহ'
    }
  }
};
