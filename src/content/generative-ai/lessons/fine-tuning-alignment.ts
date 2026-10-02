import type { Lesson } from '../../../lib/types';

export const FineTuningAlignmentLesson: Lesson = {
  slug: 'fine-tuning-alignment',
  tech: 'generative-ai',
  title: {
    en: 'Fine-Tuning and Alignment — LoRA Adapters, SFT, and RLHF Value Systems',
    bn: 'ফাইন-টিউনিং এবং অ্যালাইনমেন্ট: লোরা অ্যাডাপ্টার, এসএফটি ও আরএলএইচএফ'
  },
  summary: {
    en: 'Pretrained foundation models possess vast encyclopedic knowledge but lack conversational discipline, task-specific formatting, and human values. The post-training pipeline aligns raw models into helpful, harmless, and honest assistants through Supervised Fine-Tuning (SFT), Parameter-Efficient Fine-Tuning (PEFT / LoRA), and Reinforcement Learning from Human Feedback (RLHF / DPO). In this lesson, you will master low-rank matrix decomposition (A x B) that reduces trainable parameters by 99%, compare reward modeling and Direct Preference Optimization, and examine reward hacking defenses in production.',
    bn: 'প্রিট্রেইন্ড ফাউন্ডেশন মডেলগুলো বিপুল সাধারণ জ্ঞানের অধিকারী হলেও সরাসরি কোনো নির্দিষ্ট কাজ সম্পাদন, কথোপকথন পরিচালনা বা মানব মূল্যবোধ অনুসরণে দক্ষ থাকে না। পোস্ট-ট্রেনিং বা প্রশিক্ষণ-উত্তর প্রক্রিয়ার মাধ্যমে সুপারভাইজড ফাইন-টিউনিং (SFT), লো-র‌্যাংক অ্যাডাপটেশন (LoRA) এবং মানব প্রতিক্রিয়ার ওপর ভিত্তি করে রিইনফোর্সমেন্ট লার্নিং (RLHF) প্রয়োগ করে মডেলকে সুশৃঙ্খল করা হয়। এই পাঠে ৯৯% প্যারামিটার সাশ্রয়ী লোরা অ্যাডাপ্টার ম্যাট্রিক্স, রিওয়ার্ড মডেলিং এবং ডিরেক্ট প্রেফারেন্স অপ্টিমাইজেশন (DPO) এর বাস্তব কৌশল বিশদভাবে পর্যালোচনা করা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'limits-safety-gen',
    tech: 'generative-ai',
    title: {
      en: 'Limits, Bias, and Safety in Generative AI — Hallucinations, Red Teaming, and Guardrails',
      bn: 'জেনারেটিভ এআই-এর সীমাবদ্ধতা ও নিরাপত্তা: হ্যালুসিনেশন, রেড টিমিং ও গার্ডরেইল'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'post-training-journey-overview',
      text: {
        en: 'The Post-Training Journey: From Raw Web Text to Aligned Assistant',
        bn: 'প্রশিক্ষণ-উত্তর যাত্রা: সাধারণ টেক্সট থেকে মার্জিত এআই সহকারী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you download an unaligned base model, you quickly find that it acts like a document auto-completer rather than a helpful assistant. If you ask it a question, it might simply generate more related questions instead of answering.',
        bn: 'যখন আপনি একটি বেস মডেল ব্যবহার করেন, তখন আপনি দেখতে পাবেন যে এটি কোনো সহকারীর মতো আচরণ না করে কেবল ওয়েব ডকুমেন্টের অসম্পূর্ণ বাক্য শেষ করার চেষ্টা করে। আপনি কোনো প্রশ্ন করলে এটি উত্তর দেওয়ার বদলে আরও কয়েকটি নতুন প্রশ্ন তৈরি করতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Transforming a raw base model into a production assistant requires a disciplined two-stage post-training pipeline. First, Supervised Fine-Tuning (SFT) exposes the model to high-quality instruction-and-response demonstrations, teaching it formatting, tone, and prompt obedience. Second, Alignment via Reinforcement Learning from Human Feedback (RLHF) or Direct Preference Optimization (DPO) steers the model toward human preferences: being helpful, harmless, and honest across complex ethical edge cases.',
        bn: 'একটি সাধারণ বেস মডেলকে নির্ভরযোগ্য এআই সহকারীতে রূপান্তর করতে মূলত ২ (দুটি) ধারাবাহিক পোস্ট-ট্রেনিং ধাপ অনুসরণ করা হয়। প্রথম ধাপে, সুপারভাইজড ফাইন-টিউনিং (SFT) এর মাধ্যমে মডেলকে সুনির্দিষ্ট প্রশ্ন ও মানসম্পন্ন উত্তরের জোড়া দিয়ে কথোপকথনের রীতি ও আদেশ পালনের নিয়ম শেখানো হয়। দ্বিতীয় ধাপে, মানব প্রতিক্রিয়ার ওপর ভিত্তি করে রিইনফোর্সমেন্ট লার্নিং (RLHF) বা ডিরেক্ট প্রেফারেন্স অপ্টিমাইজেশন (DPO) প্রয়োগ করে মডেলকে মানব মূল্যবোধের সাথে সংগতিপূর্ণ করা হয়: যাতে জটিল পরিস্থিতিতেও মডেল সর্বদা সহায়ক, অহিংস ও সত্যবাদী আচরণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'supervised-fine-tuning',
          def: {
            en: 'Training a base model on curated instruction-response pairs to teach it dialogue format and command-following behaviors.',
            bn: 'নির্দেশনা ও উত্তরের নির্বাচিত ডেটাসেটে প্রশিক্ষণ দিয়ে মডেলকে আদেশ পালন ও কথোপকথনের নিয়ম শেখানো।'
          }
        },
        {
          term: 'lora-adapter',
          def: {
            en: 'Low-Rank Adaptation that freezes base weights and injects small trainable rank-decomposition matrices, cutting memory costs.',
            bn: 'মূল মডেলের প্যারামিটার অপরিবর্তিত রেখে ক্ষুদ্র দুটি ম্যাট্রিক্স প্রশিক্ষণের মাধ্যমে মেমরি সাশ্রয়ী ফাইন-টিউনিং কৌশল।'
          }
        },
        {
          term: 'rlhf',
          def: {
            en: 'Reinforcement Learning from Human Feedback, optimizing model behavior using a reward model trained on human preference rankings.',
            bn: 'মানুষের পছন্দের ক্রমানুসারে প্রশিক্ষিত রিওয়ার্ড মডেলের সাহায্যে এআই-এর আচরণ ও মূল্যবোধ উন্নত করার পদ্ধতি।'
          }
        },
        {
          term: 'reward-hacking',
          def: {
            en: 'An alignment pathology where a model exploits flaws in the reward function (e.g. extreme sycophancy or verbosity) to maximize scores without helping.',
            bn: 'রিওয়ার্ড ফাংশনের ত্রুটি কাজে লাগিয়ে অপ্রয়োজনীয় তোষামোদ বা দীর্ঘ উত্তরের মাধ্যমে কৃত্রিমভাবে স্কোর বাড়ানোর প্রবণতা।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'fine-tuning-strategies-table',
      text: {
        en: 'Comparison Matrix: Post-Training Adaptation Strategies',
        bn: 'তুলনামূলক ম্যাট্রিক্স: ফাইন-টিউনিং ও অ্যাডাপটেশন কৌশলের রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing between full fine-tuning and parameter-efficient methods like LoRA balances engineering flexibility, memory constraints, and multi-tenant serving costs.',
        bn: 'ফুল ফাইন-টিউনিং নাকি লোরা (LoRA) অ্যাডাপ্টার ব্যবহার করবেন তা নির্ভর করে কম্পিউটেশন বাজেট, মেমরির সীমাবদ্ধতা এবং পরিচালনার খরচের ওপর।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Adaptation Method', bn: 'অভিযোজন পদ্ধতি' },
        { en: 'Trainable Parameter Share', bn: 'প্রশিক্ষিত প্যারামিটারের অনুপাত' },
        { en: 'VRAM Hardware Footprint', bn: 'প্রয়োজনীয় জিপিউ মেমরি' },
        { en: 'Production Advantages', bn: 'প্রোডাকশনের প্রধান সুবিধা' }
      ],
      rows: [
        [
          { en: 'Full Fine-Tuning', bn: 'ফুল ফাইন-টিউনিং' },
          { en: '100% of all base model weights', bn: 'মডেলের সম্পূর্ণ ১০০% প্যারামিটার' },
          { en: 'Requires multi-GPU clusters (e.g. 8x 80GB VRAM)', bn: 'বিশাল মাল্টি-জিপিউ ক্লাস্টার (যেমন ৮x ৮০জিবি)' },
          { en: 'Maximizes fundamental knowledge acquisition in specialized domains', bn: 'চিকিৎসা বা আইনের মতো বিশেষায়িত ক্ষেত্রে সর্বোচ্চ পারদর্শিতা দেয়' }
        ],
        [
          { en: 'LoRA (Low-Rank Adaptation)', bn: 'লোরা (LoRA অ্যাডাপ্টার)' },
          { en: '0.1% to 1.0% of total weights', bn: 'মোট ওজনের মাত্র ০.১% থেকে ১.০%' },
          { en: 'Runs on a single workstation GPU (1x 24GB VRAM)', bn: 'একটি সাধারণ ২৪জিবি মেমরির গ্রাফিক্স কার্ডেই চলে' },
          { en: 'Small megabyte adapter files can be hot-swapped dynamically per tenant', bn: 'কয়েক মেগাবাইটের অ্যাডাপ্টার ফাইল লাইভ সার্ভারে সহজেই অদলবদল করা যায়' }
        ],
        [
          { en: 'QLoRA (4-bit Quantized)', bn: 'কিউ-লোরা (৪-বিট কোয়ান্টাইজড)' },
          { en: '0.1% weights (base frozen in 4-bit NormalFloat)', bn: '০.১% ওজন (মূল মডেল ৪-বিটে ফ্রোজেন থাকে)' },
          { en: 'Fine-tunes 70B models on commodity 24GB GPUs', bn: '২৪জিবি কার্ডেই ৭০ বিলিয়ন প্যারামিটারের মডেল ফাইন-টিউন করা যায়' },
          { en: 'Democratizes frontier LLM specialization for budget engineering teams', bn: 'সীমিত বাজেটের দলের জন্যও বৃহৎ মডেল ফাইন-টিউনিং সম্ভব করে তোলে' }
        ],
        [
          { en: 'Direct Preference Optimization (DPO)', bn: 'ডিরেক্ট প্রেফারেন্স অপ্টিমাইজেশন (DPO)' },
          { en: 'Same footprint as SFT or LoRA', bn: 'এসএফটি বা লোরার মতোই সাধারণ মেমরি খরচ' },
          { en: 'Standard SFT compute without separate reward model', bn: 'আলাদা রিওয়ার্ড মডেল বা পিটিও লুপের জটিলতা নেই' },
          { en: 'Mathematically stable preference alignment without RL instability', bn: 'কোনো অস্থিতিশীলতা ছাড়া সরাসরি গাণিতিক সূত্রে মানব পছন্দের প্রতিফলন ঘটায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-lora-simulation',
      text: {
        en: 'Executable LoRA Parameter Reduction Simulation',
        bn: 'লোরা প্যারামিটার হ্রাসের বাস্তব গাণিতিক কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates the dramatic parameter reduction achieved by Low-Rank Adaptation. Decomposing a 4096 x 4096 weight matrix into rank r = 8 matrices saves over 99.6 percent of trainable parameters.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি লো-র‌্যাংক অ্যাডাপটেশনের বিশাল মেমরি সাশ্রয় প্রদর্শন করে। একটি ৪০৯৬ x ৪০৯৬ ওজনকে r = ৮ র্যাঙ্কের দুটি ম্যাট্রিক্সে রূপান্তর করলে ৯৯.৬ শতাংশেরও বেশি প্যারামিটার সাশ্রয় হয়।'
      }
    },
    {
      type: 'code',
      code: `// Low-Rank Adaptation (LoRA) parameter arithmetic
const inputDimension = 4096;
const outputDimension = 4096;
const fullWeightParameters = inputDimension * outputDimension;

// LoRA decomposes ΔW into Matrix A (input x rank) and Matrix B (rank x output)
const loraRank = 8;
const matrixAParams = inputDimension * loraRank;
const matrixBParams = loraRank * outputDimension;
const totalLoraTrainableParams = matrixAParams + matrixBParams;

const parameterSavingsPct = (
  (1 - totalLoraTrainableParams / fullWeightParameters) * 100
).toFixed(2);

console.log('Full Weight Matrix Parameters:', fullWeightParameters);
console.log('LoRA Rank:', loraRank);
console.log('LoRA Trainable Parameters:', totalLoraTrainableParams);
console.log('Parameter Savings:', parameterSavingsPct + '%');

// prints: Full Weight Matrix Parameters: 16777216
// prints: LoRA Rank: 8
// prints: LoRA Trainable Parameters: 65536
// prints: Parameter Savings: 99.61%`
    },
    {
      type: 'heading',
      id: 'rlhf-and-dpo-mechanics',
      text: {
        en: 'RLHF and Direct Preference Optimization (DPO)',
        bn: 'আরএলএইচএফ এবং ডিরেক্ট প্রেফারেন্স অপ্টিমাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'After SFT establishes instruction-following skills, models undergo alignment. In traditional RLHF, human annotators rank pairs of completions to train a Reward Model. Proximal Policy Optimization (PPO) then tunes the language model to maximize reward scores while penalizing KL divergence drift from the original policy. Direct Preference Optimization (DPO) simplifies this pipeline by mathematically demonstrating that the optimal policy can be derived directly from preference data without training a separate reward model or executing unstable reinforcement learning loops.',
        bn: 'এসএফটি সম্পন্ন হওয়ার পর মডেলকে মানব পছন্দের সাথে সামঞ্জস্যপূর্ণ করার জন্য অ্যালাইনমেন্ট করা হয়। ঐতিহ্যবাহী আরএলএইচএফ (RLHF) পদ্ধতিতে মানুষ দুটি উত্তরের মাঝে ভালোটি বেছে নিয়ে একটি রিওয়ার্ড মডেলকে প্রশিক্ষণ দেয়। এরপর প্রক্সিমাল পলিসি অপ্টিমাইজেশন (PPO) এর মাধ্যমে মূল মডেলকে সর্বোচ্চ রিওয়ার্ড অর্জনে প্রশিক্ষিত করা হয় এবং কেএল পেনাল্টির মাধ্যমে নিয়ন্ত্রণ বজায় রাখা হয়। অন্যদিকে আধুনিক ডিরেক্ট প্রেফারেন্স অপ্টিমাইজেশন (DPO) কোনো আলাদা রিওয়ার্ড মডেল বা জটিল রিইনফোর্সমেন্ট লার্নিং ছাড়াই সরাসরি গাণিতিক লস ফাংশনের মাধ্যমে মডেলকে মানব পছন্দ শেখাতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'SFT teaches manners, RLHF teaches values: SFT establishes command following; RLHF aligns outputs with human ethical taste.',
          bn: 'এসএফটি আচরণ শেখায়, আরএলএইচএফ মূল্যবোধ শেখায়: এসএফটি ফরম্যাট ও আদেশ পালন শেখায়; আরএলএইচএফ নৈতিক বিচারবুদ্ধি যোগ করে।'
        },
        {
          en: 'LoRA freezes base weights: Decomposing weight updates into rank r matrices cuts trainable parameters by over 99 percent.',
          bn: 'লোরা মূল মডেল অক্ষত রাখে: র্যাংক r ম্যাট্রিক্সে রূপান্তর করে ৯৯ শতাংশের বেশি প্যারামিটার প্রশিক্ষণ বাদ দেওয়া যায়।'
        },
        {
          en: 'DPO eliminates RL complexity: Direct preference optimization bypasses unstable reward models with a closed-form loss.',
          bn: 'ডিপিও জটিলতা দূর করে: কোনো আলাদা রিওয়ার্ড মডেল ছাড়াই ডিরেক্ট প্রেফারেন্স অপ্টিমাইজেশন স্থিতিশীল প্রশিক্ষণ নিশ্চিত করে।'
        },
        {
          en: 'Watch for reward hacking: Without KL divergence penalty constraints, models game metrics through extreme sycophancy.',
          bn: 'রিওয়ার্ড হ্যাকিং থেকে সাবধান: কঠোর নিয়ন্ত্রণ না থাকলে মডেল অতিরিক্ত তেলমর্দন বা অপ্রয়োজনীয় লম্বা কথা বলে কৃত্রিম স্কোর বাড়ায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ft-align-ex1',
      kind: 'mcq',
      topic: 'lora-rank-decomposition-mechanics',
      question: {
        en: 'In Low-Rank Adaptation (LoRA), how does freezing base weights and training two low-rank matrices A and B achieve dramatic memory savings during fine-tuning?',
        bn: 'লো-র‌্যাংক অ্যাডাপটেশনে (LoRA) মূল মডেলকে অপরিবর্তিত রেখে A ও B নামক দুটি ক্ষুদ্র ম্যাট্রিক্স প্রশিক্ষণের মাধ্যমে কীভাবে মেমরি খরচ নাটকীয়ভাবে কমে আসে?'
      },
      options: [
        {
          en: 'By decomposing weight updates into A (d x r) and B (r x k) where rank r is tiny (e.g. r = 8), drastically reducing optimizer state memory from millions of parameters to tens of thousands',
          bn: 'ওজন পরিবর্তনকে ক্ষুদ্র r র্যাঙ্কের A ও B ম্যাট্রিক্সে রূপান্তর করার মাধ্যমে, যা অপ্টিমাইজার মেমরি খরচ কোটি প্যারামিটার থেকে কমিয়ে মাত্র কয়েক হাজারে নামিয়ে আনে'
        },
        {
          en: 'By deleting the entire model vocabulary from the graphics card',
          bn: 'গ্রাফিক্স কার্ড থেকে মডেলের সমস্ত ভোকাবুলারি স্থায়ীভাবে মুছে ফেলার মাধ্যমে'
        },
        {
          en: 'By converting all neural weights into plain English text files on disk',
          bn: 'সমস্ত নিউরাল ওজনকে সাধারণ টেক্সট ফাইলে রূপান্তর করার মাধ্যমে'
        },
        {
          en: 'Because LoRA is powered exclusively by solar panels in data centers',
          bn: 'কারণ লোরা ডাটা সেন্টারে কেবল সৌর বিদ্যুতের সাহায্যে পরিচালিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Adam optimizer stores 2 states per trainable parameter. Cutting trainable parameters from 16M to 65K eliminates gigabytes of VRAM.',
        bn: 'এডাম অপ্টিমাইজারে প্রতিটি প্যারামিটারের জন্য ২টি (দুটি) করে অতিরিক্ত মান রাখতে হয়; প্যারামিটার কমলে গিগাবাইট মেমরি বেঁচে যায়।'
      },
      explanation: {
        en: 'LoRA drastically shrinks optimizer state footprints by training only low-rank matrices while freezing heavy foundation weights.',
        bn: 'লোরা মূল মডেল অপরিবর্তিত রেখে কেবল ক্ষুদ্র ম্যাট্রিক্সের হিসাব রাখায় মেমরি খরচ নাটকীয়ভাবে কমে আসে।'
      }
    },
    {
      id: 'ft-align-ex2',
      kind: 'mcq',
      topic: 'reward-hacking-sycophancy-symptom',
      question: {
        en: 'What dangerous behavior known as "reward hacking" often emerges when language models are optimized against poorly constrained reward functions?',
        bn: 'দুর্বলভাবে নিয়ন্ত্রিত রিওয়ার্ড ফাংশনে ল্যাঙ্গুয়েজ মডেল প্রশিক্ষণ দিলে "রিওয়ার্ড হ্যাকিং" নামক কোন ক্ষতিকর আচরণ দেখা যায়?'
      },
      options: [
        {
          en: 'The model generates excessively verbose answers and flatters incorrect user premises (sycophancy) simply because human evaluators historically awarded higher scores to longer, polite replies',
          bn: 'মডেল অতিরিক্ত তোষামোদপূর্ণ ভাষা ব্যবহার করে ব্যবহারকারীর ভুল কথাতেও সায় দেয়, কারণ মানুষ সাধারণত লম্বা ও অতিরিক্ত বিনয়ী উত্তরে বেশি স্কোর দেয়'
        },
        {
          en: 'The model shuts down the computer hardware completely',
          bn: 'মডেলটি কম্পিউটারের সমস্ত হার্ডওয়্যার পুরোপুরি বন্ধ করে দেয়'
        },
        {
          en: 'The model begins sending spam emails to every employee in the company',
          bn: 'মডেলটি কোম্পানির সমস্ত কর্মচারীর কাছে স্প্যাম ইমেইল পাঠাতে শুরু করে'
        },
        {
          en: 'The model deletes all source code files from GitHub repositories',
          bn: 'মডেলটি গিটহাব থেকে সমস্ত সোর্স কোড ফাইল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A model will maximize the metric you gave it, not what you intended. Verbose flattery is a classic shortcut to high human scores.',
        bn: 'মডেল আপনার উদ্দেশ্যের চেয়ে আপনার দেওয়া স্কোরের শর্টকাট খোঁজে; ফলে লম্বা ও মিষ্টি কথা বলে নম্বর বাড়ানোর চেষ্টা করে।'
      },
      explanation: {
        en: 'Reward hacking occurs when policies exploit proxy reward metrics rather than genuinely solving user problems.',
        bn: 'রিওয়ার্ড হ্যাকিং হলো আসল সমস্যা সমাধানের বদলে স্কোর বাড়ানোর অসৎ কৌশল আয়ত্ত করা।'
      }
    },
    {
      id: 'ft-align-ex3',
      kind: 'mcq',
      topic: 'dpo-vs-rlhf-advantage',
      question: {
        en: 'What primary engineering advantage does Direct Preference Optimization (DPO) have over traditional RLHF with PPO?',
        bn: 'ঐতিহ্যবাহী আরএলএইচএফ (PPO) এর তুলনায় ডিরেক্ট প্রেফারেন্স অপ্টিমাইজেশনের (DPO) প্রধান প্রকৌশলগত সুবিধা কী?'
      },
      options: [
        {
          en: 'DPO aligns models directly on preference pairs using standard binary cross-entropy loss, eliminating the need to train a separate reward model or tune fragile reinforcement learning hyperparameters',
          bn: 'ডিপিও সাধারণ ক্রস-এনট্রপি লস ব্যবহার করে সরাসরি মডেলকে মানব পছন্দ শেখায়, ফলে আলাদা রিওয়ার্ড মডেল তৈরি বা অস্থিতিশীল রিইনফোর্সমেন্ট লার্নিংয়ের ঝামেলা থাকে না'
        },
        {
          en: 'DPO runs without using any computer memory or electrical power',
          bn: 'ডিপিও কোনো মেমরি বা বিদ্যুৎ খরচ না করেই চলতে পারে'
        },
        {
          en: 'DPO automatically writes code in the assembly language',
          bn: 'ডিপিও স্বয়ংক্রিয়ভাবে অ্যাসেম্বলি ল্যাঙ্গুয়েজে কোড লিখে ফেলে'
        },
        {
          en: 'DPO is legally required by international web standards',
          bn: 'আন্তর্জাতিক ওয়েব স্ট্যান্ডার্ড অনুযায়ী ডিপিও ব্যবহার করা বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Traditional RLHF requires 4 models in memory (actor, critic, reference, reward). DPO needs only 2 and avoids RL instability.',
        bn: 'আগের পদ্ধতিতে মেমরিতে ৪টি মডেল লাগত এবং ট্রেনিং ভেঙে যেত; ডিপিও মাত্র ২টি মডেলে স্থিতিশীলভাবে কাজ করে।'
      },
      explanation: {
        en: 'DPO re-parameterizes the reward function analytically, turning RL into a stable supervised classification objective.',
        bn: 'ডিপিও গাণিতিক সমীকরণের মাধ্যমে রিইনফোর্সমেন্ট লার্নিংয়ের জটিলতাকে একটি সহজ ও স্থিতিশীল সুপারভাইজড লার্নিংয়ে রূপান্তর করে।'
      }
    },
    {
      id: 'ft-align-ex4',
      kind: 'mcq',
      topic: 'kl-divergence-penalty-purpose',
      question: {
        en: 'In RLHF alignment, why is a Kullback-Leibler (KL) divergence penalty enforced between the active policy and the frozen reference model?',
        bn: 'আরএলএইচএফ অ্যালাইনমেন্টে প্রশিক্ষণাধীন মডেল এবং মূল রেফারেন্স মডেলের মাঝে কেন কেএল (KL) ডাইভারজেন্স জরিমানা আরোপ করা হয়?'
      },
      options: [
        {
          en: 'To prevent the model from drifting too far from its original pre-trained linguistic competence, ensuring it remains fluent while adopting human preferences',
          bn: 'মডেল যেন মূল প্রি-ট্রেইন্ড ভাষার দক্ষতা থেকে বেশি দূরে সরে না যায় তা নিশ্চিত করা, যাতে মানুষের পছন্দের সাথে মিল রাখতে গিয়ে ভাষার স্বাভাবিকতা নষ্ট না হয়'
        },
        {
          en: 'To permanently encrypt the user password with SHA-256',
          bn: 'পাসওয়ার্ডকে চিরতরে এসএইচএ-২৫৬ দিয়ে এনক্রিপ্ট করার জন্য'
        },
        {
          en: 'To turn off the graphics card fans when the temperature rises',
          bn: 'তাপমাত্রা বাড়লে গ্রাফিক্স কার্ডের ফ্যান বন্ধ করার জন্য'
        },
        {
          en: 'To delete all punctuation marks from the English language',
          bn: 'ইংরেজি ভাষা থেকে সমস্ত বিরামচিহ্ন চিরতরে মুছে ফেলার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without a penalty, the model will output gibberish that somehow tricks the reward model into giving high scores.',
        bn: 'জরিমানা না রাখলে মডেল অর্থহীন অদ্ভুত শব্দ বলে রিওয়ার্ড মডেলকে বোকা বানিয়ে নম্বর বাড়িয়ে নেবে।'
      },
      explanation: {
        en: 'The KL penalty prevents policy collapse, keeping the fine-tuned model grounded in the natural language distribution of the base model.',
        bn: 'কেএল জরিমানা মডেলকে তার স্বাভাবিক ভাষার গণ্ডির মধ্যে ধরে রাখে এবং অর্থহীন বিকৃতি রোধ করে।'
      }
    }
  ],
  quiz: {
    id: 'fine-tuning-alignment-quiz',
    title: {
      en: 'Fine-Tuning and Model Alignment Quiz',
      bn: 'ফাইন-টিউনিং এবং মডেল অ্যালাইনমেন্ট কুইজ'
    },
    questions: [
      {
        id: 'fta-q1',
        kind: 'mcq',
        topic: 'catastrophic-forgetting-phenomenon',
        question: {
          en: 'What dangerous failure mode known as "Catastrophic Forgetting" occurs when a general foundation model is aggressively fine-tuned on a narrow dataset?',
          bn: 'একটি সাধারণ ফাউন্ডেশন মডেলকে একটি অত্যন্ত সংকীর্ণ ডেটাসেটে অতিরিক্ত ফাইন-টিউন করলে "ক্যাটাস্ট্রফিক ফরগেটিং" নামক কোন ক্ষতিকর সমস্যা দেখা দেয়?'
        },
        options: [
          {
            en: 'The model becomes an expert in the narrow new domain but drastically loses its broad general reasoning, coding, and mathematical capabilities learned during pretraining',
            bn: 'মডেলটি নতুন সংকীর্ণ কাজে দক্ষ হলেও প্রি-ট্রেনিংয়ে অর্জিত বিস্তৃত সাধারণ জ্ঞান, যৌক্তিক ক্ষমতা, কোডিং ও গণিতের দক্ষতা সম্পূর্ণ হারিয়ে ফেলে'
          },
          {
            en: 'The physical graphics card hardware permanently stops working',
            bn: 'কম্পিউটারের ফিজিক্যাল গ্রাফিক্স কার্ড স্থায়ীভাবে নষ্ট হয়ে যায়'
          },
          {
            en: 'The model converts all output numbers into negative fractions',
            bn: 'মডেলটি সমস্ত আউটপুট সংখ্যাকে ঋণাত্মক ভগ্নাংশে রূপান্তর করে ফেলে'
          },
          {
            en: 'The model deletes the operating system kernel from disk',
            bn: 'মডেলটি ডিস্ক থেকে অপারেটিং সিস্টেম কার্নেল মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Overwriting weights for a medical chatbot might make it forget how to write basic Python code.',
          bn: 'একটি নতুন বিষয়ের ওপর অতিরিক্ত চাপ দিলে মডেলটি অতীতের অন্যান্য সাধারণ জ্ঞান ভুলে যেতে পারে।'
        },
        explanation: {
          en: 'Catastrophic forgetting occurs when gradient updates for new tasks overwrite weight configurations responsible for general capabilities.',
          bn: 'নতুন কাজের মাত্রাতিরিক্ত ওজনে পুরনো জ্ঞানের নেটওয়ার্ক পথগুলো নষ্ট হয়ে সাধারণ সক্ষমতা হারিয়ে যায়।'
        }
      },
      {
        id: 'fta-q2',
        kind: 'mcq',
        topic: 'qlora-double-quantization',
        question: {
          en: 'In QLoRA, how does 4-bit NormalFloat (NF4) quantization enable training large 70B parameter models on a single consumer GPU without substantial quality loss?',
          bn: 'কিউ-লোরা (QLoRA) পদ্ধতিতে ৪-বিট নরমালফ্লোট (NF4) কোয়ান্টাইজেশন কীভাবে মানের ক্ষতি ছাড়াই সাধারণ একটি গ্রাফিক্স কার্ডে ৭০ বিলিয়ন প্যারামিটারের মডেল প্রশিক্ষণ সম্ভব করে?'
        },
        options: [
          {
            en: 'It quantizes frozen base model weights into an information-theoretically optimal 4-bit distribution while performing adapter backpropagation in 16-bit Brain Float (BF16)',
            bn: 'এটি মূল মডেলের ওজনকে তথ্য-তাত্ত্বিকভাবে সর্বোত্তম ৪-বিট বিন্যাসে সংকুচিত করে রাখে এবং অ্যাডাপ্টারের ব্যাকপ্রোপাগেশন ১৬-বিট ফ্লোটে নির্ভুলভাবে পরিচালনা করে'
          },
          {
            en: 'It deletes 90 percent of the model neural layers completely',
            bn: 'এটি মডেলের ৯০ শতাংশ নিউরাল স্তর সম্পূর্ণ মুছে ফেলে'
          },
          {
            en: 'It compresses all text inputs into JPEG image format',
            bn: 'এটি সমস্ত টেক্সট ইনপুটকে জেপিজি ছবিতে রূপান্তর করে'
          },
          {
            en: 'It forces the GPU memory clock to double its physical frequency',
            bn: 'এটি গ্রাফিক্স কার্ডের ক্লক স্পিড দ্বিগুণ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'NF4 stores weights in 4 bits (saving 75% memory), but unquantizes on-the-fly to 16 bits during forward and backward passes.',
          bn: 'মেমরিতে ওজন ৪ বিট আকারে থাকে বলে ৭৫% মেমরি বাঁচে, কিন্তু হিসাবের সময় তা ১৬ বিট ফ্লোটে নিখুঁতভাবে চলে।'
        },
        explanation: {
          en: 'NF4 matches the normal distribution of pretrained weights, preserving accuracy while cutting model memory footprints by 4x.',
          bn: 'NF4 ওজন বিন্যাসের স্বাভাবিক রূপ ধরে রেখে মেমরি ৪ গুণ কমিয়ে সাধারণ হার্ডওয়্যারেই বিশাল মডেল প্রশিক্ষণের সুযোগ দেয়।'
        }
      },
      {
        id: 'fta-q3',
        kind: 'mcq',
        topic: 'multi-tenant-lora-serving',
        question: {
          en: 'In production enterprise architectures, why is deploying LoRA adapters far more cost-effective for multi-tenant SaaS applications than deploying fully fine-tuned models?',
          bn: 'এন্টারপ্রাইজ ক্লাউড সিস্টেমে মাল্টি-টেন্যান্ট SaaS সেবায় প্রতিটি গ্রাহকের জন্য আলাদা ফুল মডেলের চেয়ে লোরা অ্যাডাপ্টার চালানো কেন বহুগুণ সাশ্রয়ী?'
        },
        options: [
          {
            en: 'A single base model instance stays in GPU VRAM permanently, and individual 50MB tenant adapters are dynamically swapped into inference memory on a per-request basis',
            bn: 'একটি মাত্র বেস মডেল গ্রাফিক্স কার্ডের মেমরিতে স্থায়ীভাবে থাকে এবং প্রতিটি রিকোয়েস্টে গ্রাহকভেদে ৫০ মেগাবাইটের ক্ষুদ্র অ্যাডাপ্টার তাৎক্ষণিক যুক্ত করা হয়'
          },
          {
            en: 'Because LoRA adapters eliminate the need for an internet connection',
            bn: 'কারণ লোরা অ্যাডাপ্টার ব্যবহারে কোনো ইন্টারনেট সংযোগের প্রয়োজন হয় না'
          },
          {
            en: 'Because LoRA forces customers to write their own queries in HTML',
            bn: 'কারণ লোরা ব্যবহারকারীদের এইচটিএমএল ভাষায় কুয়েরি লিখতে বাধ্য করে'
          },
          {
            en: 'Because LoRA converts all output responses into audio files',
            bn: 'কারণ লোরা সমস্ত টেক্সট উত্তরকে অডিও ফাইলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hosting 100 separate 70B models requires 100 GPUs. Hosting 1 base model with 100 LoRA adapters needs only 1 GPU.',
          bn: '১০০টি আলাদা মডেল চালাতে ১০০টি গ্রাফিক্স কার্ড লাগত; কিন্তু ১টি মূল মডেলে ১০০টি লোরা অ্যাডাপ্টার চালালে মাত্র ১টি কার্ডেই হয়।'
        },
        explanation: {
          en: 'Multi-LoRA serving shares the heavy base model across all requests, reducing cluster hosting costs by orders of magnitude.',
          bn: 'একটি মূল মডেল শেয়ার করে ক্ষুদ্র অ্যাডাপ্টার বদলানোর এই পদ্ধতি ক্লাউড হোস্টিং খরচ বহুগুণ কমিয়ে দেয়।'
        }
      },
      {
        id: 'fta-q4',
        kind: 'mcq',
        topic: 'constitutional-ai-rlahf',
        question: {
          en: 'How does Constitutional AI (RLAIF) align generative language models without requiring hundreds of thousands of expensive human feedback labels?',
          bn: 'কনস্টিটিউশনাল এআই (RLAIF) কীভাবে হাজার হাজার ব্যয়বহুল মানব পর্যালোচক ছাড়া কৃত্রিম বুদ্ধিমত্তার আচরণকে মূল্যবোধের সাথে সংগতিপূর্ণ করে?'
        },
        options: [
          {
            en: 'It uses a written constitution of safety principles, prompting an advanced AI model to critique, revise, and rank its own completions according to those principles',
            bn: 'এটি লিখিত নীতিমালার একটি সনদ ব্যবহার করে এবং একটি উন্নত মডেলকে সেই নীতিমালার ভিত্তিতে নিজের উত্তরগুলো নিজেই সমালোচনা, সংশোধন ও মূল্যায়ন করতে বলে'
          },
          {
            en: 'By sending paper letters to the national parliament for approval',
            bn: 'অনুমোদনের জন্য জাতীয় সংসদে সরাসরি চিঠি পাঠিয়ে'
          },
          {
            en: 'By disabling all internet access during model training',
            bn: 'প্রশিক্ষণের সময় ইন্টারনেটের সমস্ত সংযোগ বিচ্ছিন্ন করে'
          },
          {
            en: 'By translating all model outputs into ancient Greek',
            bn: 'মডেলের সমস্ত আউটপুটকে প্রাচীন গ্রিক ভাষায় রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Replace human raters with AI raters guided by an explicit constitution of rules like "be harmless and objective".',
          bn: 'মানুষের বদলে উন্নত এআই নিজেই লিখিত সংবিধান বা নীতিমালার ভিত্তিতে নিজের ভুল সংশোধন ও মূল্যায়ন করে।'
        },
        explanation: {
          en: 'RLAIF scales alignment affordably by replacing human preference contractors with automated AI critique guided by written principles.',
          bn: 'কনস্টিটিউশনাল এআই লিখিত নীতিমালার আলোকে স্বয়ংক্রিয় পর্যালোচনার মাধ্যমে অত্যন্ত কম খরচে মডেলকে মার্জিত করে তোলে।'
        }
      }
    ]
  }
};
