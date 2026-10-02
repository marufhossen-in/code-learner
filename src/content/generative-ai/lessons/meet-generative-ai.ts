import type { Lesson } from '../../../lib/types';

export const MeetGenerativeAiLesson: Lesson = {
  slug: 'meet-generative-ai',
  tech: 'generative-ai',
  title: {
    en: 'Meet Generative AI — Overview, Core Concepts, and Probability Distributions',
    bn: 'জেনারেটিভ এআই পরিচিতি: সাধারণ রূপরেখা, মূল ধারণা ও সম্ভাব্যতা বিন্যাস'
  },
  summary: {
    en: 'Generative Artificial Intelligence marks a profound shift from predictive models that classify existing data to generative architectures that synthesize novel text, images, audio, and code. While discriminative models calculate conditional probabilities to assign labels, generative systems model underlying multi-dimensional probability distributions to sample brand new artifacts. In this lesson, you will master the foundational divide between discriminative and generative paradigms, explore the statistical mechanics of probabilistic sampling, and trace how modern neural networks transform raw user prompts into coherent creative outputs.',
    bn: 'জেনারেটিভ কৃত্রিম বুদ্ধিমত্তা পূর্ববর্তী প্রেডিক্টিভ ও ক্লাসিফিকেশন মডেলের গণ্ডি ছাড়িয়ে সম্পূর্ণ নতুন টেক্সট, ছবি, অডিও এবং কোড তৈরি করার এক যুগান্তকারী প্রযুক্তি। ডিসক্রিমিনেটিভ মডেল যেখানে বিদ্যমান ডেটার ওপর ভিত্তি করে সঠিক লেবেল শনাক্ত করে, সেখানে জেনারেটিভ সিস্টেম ডেটার অভ্যন্তরীণ সম্ভাব্যতা বিন্যাস (Probability Distribution) শিখে সম্পূর্ণ নতুন কনটেন্ট তৈরি করতে পারে। এই পাঠে ডিসক্রিমিনেটিভ ও জেনারেটিভ মডেলের মূল পার্থক্য, সম্ভাব্যতাভিত্তিক স্যাম্পলিংয়ের গাণিতিক নিয়ম এবং আধুনিক নিউরাল নেটওয়ার্ক কীভাবে প্রম্পট থেকে অর্থবহ আউটপুট তৈরি করে তা বিস্তারিতভাবে আলোচনা করা হয়েছে।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'tokens-sampling',
    tech: 'generative-ai',
    title: {
      en: 'Tokens and Sampling — Vocabulary, Logits, Temperature, and Top-p',
      bn: 'টোকেন এবং স্যাম্পলিং: ভোকাবুলারি, লজিটস, টেম্পারেচার এবং টপ-পি'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'discriminative-vs-generative-overview',
      text: {
        en: 'The Paradigm Shift: Discriminative vs Generative Models',
        bn: 'মডেলের মৌলিক পরিবর্তন: ডিসক্রিমিনেটিভ বনাম জেনারেটিভ আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern artificial intelligence includes two distinct design philosophies. You encounter models that classify existing information, and models that create entirely new artifacts.',
        bn: 'আধুনিক কৃত্রিম বুদ্ধিমত্তা মূলত দুটি ভিন্ন স্থাপত্য দর্শনের ওপর গড়ে উঠেছে। এখানে আপনি এমন মডেল পাবেন যা তথ্য শ্রেণিবদ্ধ করে, এবং এমন মডেল যা সম্পূর্ণ নতুন কনটেন্ট সৃষ্টি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Discriminative models compute decision boundaries between classes, calculating the probability of a label given an input observation. In contrast, generative models estimate the entire joint probability distribution of the data space. By learning the statistical structure of human language or visual imagery, generative models can sample new, previously unseen combinations that follow authentic training patterns.',
        bn: 'ডিসক্রিমিনেটিভ মডেল বিভিন্ন ক্লাসের মাঝে সীমানা তৈরি করে ইনপুট পর্যবেক্ষণের সাপেক্ষে নির্দিষ্ট লেবেলের সম্ভাবনা হিসাব করে। অন্যদিকে, জেনারেটিভ মডেল ডেটাসেটের সামগ্রিক যৌথ সম্ভাব্যতা বিন্যাস নিরূপণ করে। মানব ভাষা বা ছবির অন্তর্নিহিত পরিসংখ্যানিক কাঠামো আয়ত্ত করে জেনারেটিভ মডেল সম্পূর্ণ নতুন ও বাস্তবসম্মত নিদর্শন তৈরি করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'discriminative-models',
          def: {
            en: 'Machine learning architectures that evaluate features to predict a categorical label or numerical value.',
            bn: 'মেশিন লার্নিং আর্কিটেকচার যা বিদ্যমান বৈশিষ্ট্য বিচার করে একটি সুনির্দিষ্ট ক্যাটাগরি বা লেবেল নির্ধারণ করে।'
          }
        },
        {
          term: 'generative-models',
          def: {
            en: 'Architectures that learn data distributions to generate brand new data instances resembling training examples.',
            bn: 'এমন সিস্টেম যা ডেটার বিন্যাস শিখে বাস্তব ডেটাসেটের অনুরূপ সম্পূর্ণ নতুন কনটেন্ট তৈরি করতে পারে।'
          }
        },
        {
          term: 'probability-distribution',
          def: {
            en: 'The mathematical mapping representing the likelihood of occurrence for every possible token or pixel.',
            bn: 'একটি গাণিতিক মানচিত্র যা সম্ভাব্য প্রতিটি শব্দ বা পিক্সেল ঘটার আপেক্ষিক সম্ভাবনা নির্দেশ করে।'
          }
        },
        {
          term: 'probabilistic-sampling',
          def: {
            en: 'The technique of selecting output values according to their calculated probability distribution rather than always picking the highest score.',
            bn: 'সর্বদা সর্বোচ্চ স্কোরের মান না বেছে সম্ভাবনার অনুপাত অনুযায়ী আউটপুট নির্বাচন করার কৌশল।'
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
      id: 'architectural-comparison-table',
      text: {
        en: 'Architectural Comparison: Classification vs Generation',
        bn: 'তুলনামূলক বিশ্লেষণ: ক্লাসিফিকেশন বনাম জেনারেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The distinction between discriminative and generative paradigms affects model architecture, training objectives, and real-world deployment complexity.',
        bn: 'ডিসক্রিমিনেটিভ এবং জেনারেটিভ মডেলের পার্থক্য এদের প্রশিক্ষণ লক্ষ্য, প্যারামিটার সংখ্যা এবং প্রয়োগক্ষেত্রের ওপর সরাসরি প্রভাব ফেলে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্যিক মাত্রা' },
        { en: 'Discriminative Models', bn: 'ডিসক্রিমিনেটিভ মডেল' },
        { en: 'Generative Models', bn: 'জেনারেটিভ মডেল' },
        { en: 'Engineering Tradeoffs', bn: 'প্রকৌশলগত ভারসাম্য' }
      ],
      rows: [
        [
          { en: 'Mathematical Formulation', bn: 'গাণিতিক সূত্র' },
          { en: 'Calculates conditional probability of a label', bn: 'ইনপুটের সাপেক্ষে লেবেলের সম্ভাবনা হিসাব করে' },
          { en: 'Models high-dimensional probability distributions', bn: 'বহু-মাত্রিক সম্ভাব্যতা বিন্যাসের মডেল তৈরি করে' },
          { en: 'Generative models require vastly more parameters and compute', bn: 'জেনারেটিভ মডেলে বহুগুণ বেশি মেমরি ও সিপিইউ প্রয়োজন হয়' }
        ],
        [
          { en: 'Core Output Type', bn: 'মূল আউটপুটের ধরন' },
          { en: 'Discrete class label, bounding box, or numeric score', bn: 'সুনির্দিষ্ট ক্লাস লেবেল, বাউন্ডিং বক্স বা সংখ্যা' },
          { en: 'Continuous text stream, high-resolution image, or audio', bn: 'ধারাবাহিক টেক্সট স্ট্রিম, উচ্চমানের ছবি বা অডিও' },
          { en: 'Generative outputs are probabilistic and require validation', bn: 'জেনারেটিভ আউটপুট সম্ভাব্য হওয়ায় ফলাফল যাচাইয়ের প্রয়োজন হয়' }
        ],
        [
          { en: 'Primary Use Cases', bn: 'প্রধান ব্যবহার ক্ষেত্র' },
          { en: 'Spam filtering, fraud detection, sentiment analysis', bn: 'স্প্যাম ফিল্টারিং, জালিয়াতি শনাক্তকরণ, অনুভূতি বিশ্লেষণ' },
          { en: 'Interactive chatbots, code generation, creative artwork', bn: 'ইন্টারেক্টিভ চ্যাটবট, কোড জেনারেশন, ডিজিটাল আর্ট' },
          { en: 'Discriminative excels at rapid, low-latency decisions', bn: 'ডিসক্রিমিনেটিভ মডেল অতি দ্রুত সিদ্ধান্ত গ্রহণে পারদর্শী' }
        ],
        [
          { en: 'Evaluation Metrics', bn: 'মূল্যায়ন পদ্ধতি' },
          { en: 'Accuracy, Precision, Recall, F1-Score, ROC-AUC', bn: 'অ্যাকিউরেসি, প্রিসিশন, রিকল, F1-স্কোর, ROC-AUC' },
          { en: 'Perplexity, BLEU/ROUGE scores, human evaluation', bn: 'পারপ্লেক্সিটি, ব্লু/রুজ স্কোর, ব্যবহারকারী মূল্যায়ন' },
          { en: 'Generative quality is multi-faceted and subjective', bn: 'জেনারেটিভ আউটপুটের মান বহুমুখী ও মানব-নির্ভর' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-sampling-simulation',
      text: {
        en: 'Executable Probability Distribution Sampling Simulation',
        bn: 'সম্ভাব্যতা বিন্যাস স্যাম্পলিংয়ের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements a seeded pseudorandom sampler that draws 100 discrete tokens from a defined probability distribution, demonstrating how statistical noise produces authentic generation.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি সিডেড র্যান্ডম স্যাম্পলারের মাধ্যমে ১০০টি টোকেন নির্বাচন করে প্রদর্শন করে কীভাবে সম্ভাব্যতা বিন্যাস থেকে বাস্তবসম্মত বিভিন্ন আউটপুট উৎপন্ন হয়।'
      }
    },
    {
      type: 'code',
      code: `// Seeded Pseudo-Random Number Generator for deterministic execution
function createSeededRng(seed: number) {
  let s = seed;
  return function(): number {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

interface TokenChoice {
  token: string;
  probability: number;
}

// Learned output probability distribution
const distribution: TokenChoice[] = [
  { token: 'cat', probability: 0.50 },
  { token: 'dog', probability: 0.30 },
  { token: 'bird', probability: 0.20 }
];

function sampleFromDistribution(dist: TokenChoice[], randVal: number): string {
  let cumulative = 0;
  for (const item of dist) {
    cumulative += item.probability;
    if (randVal < cumulative) {
      return item.token;
    }
  }
  return dist[dist.length - 1].token;
}

const rng = createSeededRng(42);
const counts: Record<string, number> = { cat: 0, dog: 0, bird: 0 };
const totalTrials = 100;

for (let i = 0; i < totalTrials; i++) {
  const chosen = sampleFromDistribution(distribution, rng());
  counts[chosen]++;
}

console.log('Total Samples:', totalTrials);
console.log('Cat count:', counts.cat, '(' + counts.cat + '%)');
console.log('Dog count:', counts.dog, '(' + counts.dog + '%)');
console.log('Bird count:', counts.bird, '(' + counts.bird + '%)');

// prints: Total Samples: 100
// prints: Cat count: 50 (50%)
// prints: Dog count: 31 (31%)
// prints: Bird count: 19 (19%)`
    },
    {
      type: 'heading',
      id: 'generative-inference-pipeline',
      text: {
        en: 'The Generative Inference Pipeline: Prompt to Output',
        bn: 'জেনারেটিভ ইনফারেন্স পাইপলাইন: প্রম্পট থেকে আউটপুট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Generative models execute inference through 4 structured phases: (1) Prompt Tokenization converts raw characters into numerical vectors. (2) The model performs a forward pass through neural layers, computing unnormalized logits across its entire vocabulary. (3) Softmax transforms logits into a valid probability distribution, and a sampling strategy selects the next token. (4) The newly sampled token is appended back into the input sequence, repeating iteratively until reaching an End-Of-Sequence delimiter.',
        bn: 'জেনারেটিভ মডেল মূলত ৪টি সুনির্দিষ্ট ধাপে ইনফারেন্স সম্পন্ন করে: (১) প্রম্পট টোকেনাইজেশন টেক্সট ক্যারেক্টারকে সাংখ্যিক ভেক্টরে রূপান্তর করে। (২) নিউরাল নেটওয়ার্কের মধ্য দিয়ে ফরওয়ার্ড পাসের মাধ্যমে সম্পূর্ণ ভোকাবুলারির ওপর লজিটস হিসাব করা হয়। (৩) সফটম্যাক্স ফাংশন লজিটসকে সম্ভাব্যতা বিন্যাসে রূপান্তর করে এবং স্যাম্পলিং কৌশলের মাধ্যমে পরবর্তী টোকেন বেছে নেওয়া হয়। (৪) নির্বাচিত নতুন টোকেনটি পুনরায় ইনপুটে যুক্ত হয় এবং এন্ড-অব-সিকোয়েন্স টোকেন না পাওয়া পর্যন্ত পুনরাবৃত্তি চলতে থাকে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Discriminative vs Generative: Classifiers draw decision boundaries; generators model joint distributions to synthesize new data.',
          bn: 'ডিসক্রিমিনেটিভ বনাম জেনারেটিভ: ক্লাসিফায়ার সীমানা চিহ্নিত করে; আর জেনারেটর সম্পূর্ণ নতুন তথ্য সৃষ্টি করে।'
        },
        {
          en: 'Sampling balances creativity: Drawing from probability distributions produces diverse outputs rather than rigid repetitions.',
          bn: 'স্যাম্পলিংয়ে সৃজনশীলতার ভারসাম্য: সম্ভাবনার ভিত্তিতে টোকেন বেছে নিলে পুনরাবৃত্তি এড়িয়ে বৈচিত্র্যময় আউটপুট পাওয়া যায়।'
        },
        {
          en: 'Autoregressive generation: Modern language models produce text token by token, continually appending previous outputs.',
          bn: 'অটোরিগ্রেসিভ উৎপাদন: আধুনিক মডেলগুলো ধাপে ধাপে একটি করে টোকেন তৈরি করে পূর্ববর্তী আউটপুটের সাথে যোগ করতে থাকে।'
        },
        {
          en: 'Verification is mandatory: Fluency does not guarantee factual correctness; enterprise systems must validate generated claims.',
          bn: 'যাচাইকরণ অপরিহার্য: প্রাঞ্জলতার অর্থ নির্ভুলতা নয়; তাই এন্টারপ্রাইজ সিস্টেমে উৎপাদিত তথ্য যাচাই করা অত্যন্ত জরুরি।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'mtg-ex1',
      kind: 'mcq',
      topic: 'discriminative-vs-generative-core-task',
      question: {
        en: 'Which of the following scenarios describes the operation of a discriminative machine learning model rather than a generative model?',
        bn: 'নিচের কোন পরিস্থিতিটি জেনারেটিভ মডেলের পরিবর্তে একটি ডিসক্রিমিনেটিভ মেশিন লার্নিং মডেলের কাজকে নির্দেশ করে?'
      },
      options: [
        {
          en: 'An email classification system that reads incoming messages and assigns an existing binary label of spam or not-spam',
          bn: 'একটি ইমেইল ফিল্টারিং সিস্টেম যা ইনকামিং মেসেজ পড়ে স্প্যাম বা নট-স্প্যাম নামক বিদ্যমান বাইনারি লেবেল প্রদান করে'
        },
        {
          en: 'A conversational assistant generating a 500-word fantasy short story from a single prompt',
          bn: 'একটি চ্যাটবট যা একটি প্রম্পট থেকে ৫০০ শব্দের একটি কাল্পনিক ছোটগল্প তৈরি করে'
        },
        {
          en: 'An image diffusion model synthesizing a photo of an astronaut on a distant planet',
          bn: 'একটি ডিফিউশন মডেল যা মহাকাশে দূরবর্তী গ্রহের ওপর নভোচারীর নতুন ছবি তৈরি করে'
        },
        {
          en: 'A music generation system creating a multi-track jazz melody from text instructions',
          bn: 'একটি মিউজিক সিস্টেম যা টেক্সট নির্দেশনা থেকে সম্পূর্ণ নতুন জ্যাজ সুর রচনা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Discriminative models categorize or label existing data; generative models synthesize new data.',
        bn: 'ডিসক্রিমিনেটিভ মডেল বিদ্যমান ডেটার ওপর লেবেল দেয়; জেনারেটিভ মডেল সম্পূর্ণ নতুন ডাটা বানায়।'
      },
      explanation: {
        en: 'Spam classification maps an input to a predefined label, representing a classic discriminative problem.',
        bn: 'ইমেইল স্প্যাম শনাক্তকরণ একটি পূর্বনির্ধারিত লেবেল নির্ধারণ করে, যা ডিসক্রিমিনেটিভ মডেলের প্রকৃষ্ট উদাহরণ।'
      }
    },
    {
      id: 'mtg-ex2',
      kind: 'mcq',
      topic: 'probabilistic-sampling-variance',
      question: {
        en: 'When drawing 100 samples from a distribution with 50 percent probability for a specific token, why does the observed count land near 50 (such as 48 or 52) rather than exactly 50 every single time?',
        bn: 'নির্দিষ্ট একটি টোকেনের ৫০ শতাংশ সম্ভাবনা থাকা সত্ত্বেও ১০০ বার নমুনা টানলে কেন প্রতিবার ঠিক ৫০ না হয়ে ৪৮ বা ৫২ এর কাছাকাছি মান আসে?'
      },
      options: [
        {
          en: 'Because finite stochastic sampling exhibits natural statistical variance around the theoretical expected value, governed by the law of large numbers',
          bn: 'কারণ সীমিত সংখ্যার দৈব স্যাম্পলিংয়ে প্রাকৃতিক পরিসংখ্যানিক বৈচিত্র্য দেখা যায়, যা বৃহৎ সংখ্যার নীতি দ্বারা পরিচালিত'
        },
        {
          en: 'Because the computer microprocessor has hardware defects',
          bn: 'কারণ কম্পিউটারের মাইক্রোপ্রসেসরে হার্ডওয়্যার ত্রুটি রয়েছে'
        },
        {
          en: 'Because the Python interpreter cannot count beyond 40',
          bn: 'কারণ পাইথন ইন্টারপ্রেটার ৪০ এর বেশি গণনা করতে পারে না'
        },
        {
          en: 'Because probability distributions are prohibited by federal law',
          bn: 'কারণ আইন অনুযায়ী সম্ভাব্যতা বিন্যাস ব্যবহার করা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flipping a fair coin 100 times does not always yield exactly 50 heads; it clusters naturally around 50.',
        bn: 'মুদ্রা ১০০ বার টস করলে সর্বদা ঠিক ৫০ বার হেড পড়ে না, বরং ৫০ এর কাছাকাছি থাকে।'
      },
      explanation: {
        en: 'Sampling noise is an inherent mathematical property of stochastic systems; larger sample sizes converge closer to theoretical expectations.',
        bn: 'দৈব স্যাম্পলিংয়ে কিছুটা ওঠানামা স্বাভাবিক; নমুনা সংখ্যা বৃদ্ধি করলে তা তাত্ত্বিক অনুপাতের আরও কাছাকাছি পৌঁছায়।'
      }
    },
    {
      id: 'mtg-ex3',
      kind: 'mcq',
      topic: 'generative-novelty-vs-memorization',
      question: {
        en: 'Why do modern generative image and text models produce novel artifacts rather than merely retrieving exact copies of training data?',
        bn: 'আধুনিক জেনারেটিভ ছবি ও টেক্সট মডেলগুলো কেন কেবল প্রশিক্ষণ ডেটার হুবহু কপি না করে সম্পূর্ণ নতুন কনটেন্ট সৃষ্টি করে?'
      },
      options: [
        {
          en: 'They learn compressed high-dimensional feature distributions and sample novel statistical combinations across latent concepts that never appeared together in training',
          bn: 'তারা ডেটার উচ্চ-মাত্রিক বৈশিষ্ট্য বিন্যাস শেখে এবং সুপ্ত ধারণার মাঝে এমন নতুন পরিসংখ্যানিক সমন্বয় তৈরি করে যা প্রশিক্ষণে কখনোই একসাথে ছিল না'
        },
        {
          en: 'Because generative models store every web page as an encrypted zip file on disk',
          bn: 'কারণ জেনারেটিভ মডেল সমস্ত ওয়েব পেজ জিপ ফাইল হিসেবে ডিস্কে জমা রাখে'
        },
        {
          en: 'Because copyright laws physically disable models from saving duplicate files',
          bn: 'কারণ কপিরাইট আইনের কারণে মডেল ডুপ্লিকেট ফাইল সেভ করতে পারে না'
        },
        {
          en: 'Because text models only know words that were invented after the year 2024',
          bn: 'কারণ টেক্সট মডেলগুলো কেবল ২০২৪ সালের পরে আবিষ্কৃত শব্দগুলো জানে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Generators model relationships between concepts rather than indexing verbatim copies of individual files.',
        bn: 'জেনারেটর ফাইল কপি করে রাখে না, বরং বিভিন্ন ধারণার মাঝে গাণিতিক সম্পর্ক তৈরি করে।'
      },
      explanation: {
        en: 'Generative models generalize underlying conceptual structures, enabling the synthesis of unprecedented permutations.',
        bn: 'জেনারেটিভ মডেল বিভিন্ন বৈশিষ্ট্যের সাধারণ রূপ আয়ত্ত করে অভূতপূর্ব নতুন সমন্বয় তৈরি করার সক্ষমতা অর্জন করে।'
      }
    },
    {
      id: 'mtg-ex4',
      kind: 'mcq',
      topic: 'hallucination-verification-need',
      question: {
        en: 'Why is it critical for software engineers to implement automated verification and citation layers when building systems around generative models?',
        bn: 'জেনারেটিভ মডেল নিয়ে সফটওয়্যার সিস্টেম তৈরির সময় প্রকৌশলীদের কেন স্বয়ংক্রিয় তথ্য যাচাই এবং সূত্র উদ্ধৃতি ব্যবস্থা রাখা অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'Because generative models optimize for linguistic plausibility and statistical fluency rather than absolute factual correctness, making confident hallucinations possible',
          bn: 'কারণ জেনারেটিভ মডেল বাস্তব সত্যতার চেয়ে ভাষার প্রাঞ্জলতা ও সম্ভাব্যতার ওপর জোর দেয়, যার ফলে অত্যন্ত আত্মবিশ্বাসের সাথে কাল্পনিক ভুল তথ্য তৈরি হতে পারে'
        },
        {
          en: 'Because generative text models erase all hard drives when an error occurs',
          bn: 'কারণ ভুল হলে জেনারেটিভ মডেল কম্পিউটারের সমস্ত ড্রাইভ মুছে ফেলে'
        },
        {
          en: 'Because neural network models can only run when connected to a physical printer',
          bn: 'কারণ নিউরাল নেটওয়ার্ক কেবল ফিজিক্যাল প্রিন্টারের সাথে যুক্ত থাকলেই চলতে পারে'
        },
        {
          en: 'Because verification is required by standard HTML web protocols',
          bn: 'কারণ সাধারণ এইচটিএমএল ওয়েব প্রোটোকলের নিয়মে তথ্য যাচাই বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'A sentence can be grammatically flawless and completely persuasive while being factually untrue.',
        bn: 'একটি বাক্য ব্যাকরণগতভাবে নিখুঁত ও প্রাঞ্জল হলেও তথ্যের দিক থেকে সম্পূর্ণ অসত্য হতে পারে।'
      },
      explanation: {
        en: 'Fluency does not equal truth. Generative systems require grounding and deterministic guardrails to ensure factual integrity.',
        bn: 'ভাষার সাবলীলতা সত্যের নিশ্চয়তা দেয় না। তাই নির্ভরযোগ্য ফলাফল পেতে সিস্টেমের সাথে যাচাই ব্যবস্থা থাকা আবশ্যক।'
      }
    }
  ],
  quiz: {
    id: 'meet-generative-ai-quiz',
    title: {
      en: 'Generative AI Foundations Quiz',
      bn: 'জেনারেটিভ এআই মূল ধারণা কুইজ'
    },
    questions: [
      {
        id: 'mtg-q1',
        kind: 'mcq',
        topic: 'conditional-vs-joint-probabilities',
        question: {
          en: 'In mathematical terms, how does the objective of a discriminative classifier differ from the objective of an explicit generative model?',
          bn: 'গাণিতিক দিক থেকে একটি ডিসক্রিমিনেটিভ ক্লাসিফায়ারের লক্ষ্য কীভাবে জেনারেটিভ মডেলের লক্ষ্য থেকে আলাদা হয়?'
        },
        options: [
          {
            en: 'Discriminative models estimate the conditional probability P(Y|X) of a class given inputs, while generative models learn the joint probability P(X, Y) or data distribution P(X)',
            bn: 'ডিসক্রিমিনেটিভ মডেল ইনপুটের সাপেক্ষে লেবেলের শর্তাধীন সম্ভাবনা P(Y|X) নির্ণয় করে, আর জেনারেটিভ মডেল সামগ্রিক যৌথ সম্ভাবনা P(X, Y) বা ডেটা বিন্যাস P(X) শেখে'
          },
          {
            en: 'Discriminative models only use addition, while generative models only use subtraction',
            bn: 'ডিসক্রিমিনেটিভ মডেল কেবল যোগ করে, আর জেনারেটিভ মডেল কেবল বিয়োগ করে'
          },
          {
            en: 'Generative models require input text to be written in reverse alphabetical order',
            bn: 'জেনারেটিভ মডেলে ইনপুট টেক্সট উল্টো বর্ণানুক্রমে লিখতে হয়'
          },
          {
            en: 'Discriminative models cannot run on modern graphics processing units (GPUs)',
            bn: 'ডিসক্রিমিনেটিভ মডেল আধুনিক গ্রাফিক্স কার্ডে (GPU) চালানো সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Classifiers ask: given this image X, what is class Y? Generators ask: what is the overall shape and distribution of X?',
          bn: 'ক্লাসিফায়ার দেখে ইনপুট X হলে লেবেল Y কী হবে; আর জেনারেটর দেখে পুরো X এর সামগ্রিক কাঠামো কেমন।'
        },
        explanation: {
          en: 'Modeling the data distribution allows generative models to sample new instances, whereas conditional models only discriminate between fixed classes.',
          bn: 'ডেটার সামগ্রিক বিন্যাস শেখার কারণে জেনারেটিভ মডেল নতুন ডাটা তৈরি করতে পারে, যা কেবল ক্লাসিফাই করার চেয়ে অনেক বড় কাজ।'
        }
      },
      {
        id: 'mtg-q2',
        kind: 'mcq',
        topic: 'reproducibility-random-seed',
        question: {
          en: 'Why do production demonstrations of generative models often freeze the random number generator seed (e.g. seed=42) during client presentations?',
          bn: 'ক্লায়েন্ট প্রেজেন্টেশনের সময় জেনারেটিভ মডেলের প্রদর্শনীতে কেন প্রায়শই র্যান্ডম সিড (যেমন seed=42) নির্দিষ্ট করে দেওয়া হয়?'
        },
        options: [
          {
            en: 'To enforce deterministic pseudorandom sampling so the model produces the exact same verified output during the demonstration without unexpected variations',
            bn: 'নিয়ন্ত্রিত স্যাম্পলিং নিশ্চিত করতে যাতে প্রদর্শনী চলাকালীন মডেল কোনো অনাকাঙ্ক্ষিত পরিবর্তন ছাড়া পূর্বে পরীক্ষিত হুবহু ফলাফল তৈরি করে'
          },
          {
            en: 'To make the internet connection run at maximum speed',
            bn: 'ইন্টারনেট সংযোগ সর্বোচ্চ গতিতে চালানোর জন্য'
          },
          {
            en: 'Because unseeded models delete their weights after 5 minutes',
            bn: 'কারণ সিড ছাড়া মডেল ৫ মিনিট পর নিজের ওয়েটস মুছে ফেলে'
          },
          {
            en: 'Because setting a seed reduces server electrical power usage to zero',
            bn: 'কারণ সিড নির্ধারণ করলে সার্ভারের বিদ্যুৎ খরচ শূন্যে নেমে আসে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A live demo with an unseeded sampler might produce an awkward or flawed completion when leadership is watching.',
          bn: 'সিড ছাড়া লাইভ প্রদর্শনীতে অপ্রত্যাশিত কোনো অসংলগ্ন উত্তর চলে আসতে পারে যা বিব্রতকর পরিস্থিতি তৈরি করে।'
        },
        explanation: {
          en: 'Setting an explicit seed guarantees identical pseudorandom draws, enabling deterministic test runs and predictable demonstrations.',
          bn: 'নির্দিষ্ট সিড নির্ধারণ করলে র্যান্ডম প্রক্রিয়া সম্পূর্ণ নিয়ন্ত্রিত থাকে এবং প্রতিবার একই নির্ভরযোগ্য আউটপুট নিশ্চিত হয়।'
        }
      },
      {
        id: 'mtg-q3',
        kind: 'mcq',
        topic: 'autoregressive-text-generation',
        question: {
          en: 'What does the term "autoregressive" mean in the context of modern generative large language models like GPT?',
          bn: 'জিপিটি (GPT) এর মতো আধুনিক লার্জ ল্যাঙ্গুয়েজ মডেলের ক্ষেত্রে "অটোরিগ্রেসিভ" (Autoregressive) শব্দের অর্থ কী?'
        },
        options: [
          {
            en: 'The model generates text sequentially one token at a time, feeding previously generated tokens back into the input sequence to predict the subsequent token',
            bn: 'মডেল ক্রমানুসারে একটি করে টোকেন তৈরি করে এবং পরবর্তী টোকেন অনুমানের জন্য পূর্বে উৎপন্ন টোকেনগুলোকে পুনরায় ইনপুটে যুক্ত করে'
          },
          {
            en: 'The model can only operate when mounted inside an electric automobile',
            bn: 'মডেলটি কেবল বৈদ্যুতিক গাড়ির ভেতরে ইনস্টল করলেই কাজ করতে পারে'
          },
          {
            en: 'The model generates entire encyclopedias in a single millisecond pass',
            bn: 'মডেলটি এক মিলি-সেকেন্ডের মধ্যে পুরো বিশ্বকোষ একবারে তৈরি করে ফেলে'
          },
          {
            en: 'The model relies on analog vacuum tubes instead of digital transistors',
            bn: 'মডেলটি ডিজিটাল ট্রানজিস্টরের বদলে প্রাচীন ভ্যাকুয়াম টিউবের ওপর নির্ভর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The output at step N becomes part of the input context for step N+1.',
          bn: 'বর্তমান ধাপের আউটপুট পরবর্তী ধাপের ইনপুট হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'Autoregressive models condition each new token prediction on all previously generated tokens in the sequence.',
          bn: 'অটোরিগ্রেসিভ মডেল প্রতিটি নতুন টোকেন অনুমানের জন্য ইতিপূর্বে উৎপন্ন সমস্ত টোকেনের তথ্য ব্যবহার করে।'
        }
      },
      {
        id: 'mtg-q4',
        kind: 'mcq',
        topic: 'enterprise-rag-justification',
        question: {
          en: 'Why do enterprise software architects combine generative language models with external knowledge retrieval systems (Retrieval-Augmented Generation / RAG)?',
          bn: 'এন্টারপ্রাইজ সফটওয়্যার আর্কিটেক্টরা কেন জেনারেটিভ ল্যাঙ্গুয়েজ মডেলকে বহিরাগত ডেটাবেস বা নলেজ বেসের সাথে যুক্ত করে (RAG)?'
        },
        options: [
          {
            en: 'To ground model answers in authoritative company documents, eliminating factual hallucinations and providing clear verifiable source citations',
            bn: 'কোম্পানির নিজস্ব প্রামাণ্য নথিপত্রের তথ্যের ওপর ভিত্তি করে উত্তর প্রদান করতে, যা ভুল তথ্য রোধ করে এবং সঠিক সূত্রের উদ্ধৃতি নিশ্চিত করে'
          },
          {
            en: 'Because RAG completely eliminates the need for computer graphics cards',
            bn: 'কারণ RAG ব্যবহারের ফলে সার্ভারে কোনো গ্রাফিক্স কার্ডের প্রয়োজন হয় না'
          },
          {
            en: 'To convert English text into binary machine code for older mainframe computers',
            bn: 'পুরনো মেইনফ্রেম কম্পিউটারের জন্য ইংরেজি টেক্সটকে সরাসরি বাইনারি কোডে রূপান্তর করতে'
          },
          {
            en: 'Because generative models refuse to answer questions without a paid subscription',
            bn: 'কারণ পেইড সাবস্ক্রিপশন ছাড়া জেনারেটিভ মডেল কোনো উত্তর দিতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pretrained models know general knowledge up to their cutoff date; RAG injects private, fresh enterprise facts into the prompt.',
          bn: 'মডেল কেবল প্রশিক্ষিত তথ্য জানে; RAG কোম্পানির সাম্প্রতিক ও গোপনীয় বাস্তব তথ্য সরাসরি প্রম্পটে যোগ করে।'
        },
        explanation: {
          en: 'RAG anchors generative synthesis in verified factual corpora, drastically reducing hallucinations in enterprise environments.',
          bn: 'RAG বাস্তব ও বিশ্বস্ত দলিলের ওপর মডেলকে আবদ্ধ রেখে ব্যবসায়িক ক্ষেত্রে নির্ভুল ও নির্ভরযোগ্য উত্তর প্রদান নিশ্চিত করে।'
        }
      }
    ]
  }
};
