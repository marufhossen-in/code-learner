import type { Lesson } from '../../../lib/types';

export const TransformersGptLesson: Lesson = {
  slug: 'transformers-gpt',
  tech: 'generative-ai',
  title: {
    en: 'Transformers and GPT — Self-Attention, Positional Encoding, and Feed-Forward Networks',
    bn: 'ট্রান্সফরমার এবং জিপিটি: সেলফ-অ্যাটেনশন, পজিশনাল এনকোডিং ও ফিড-ফরওয়ার্ড নেটওয়ার্ক'
  },
  summary: {
    en: 'The Transformer architecture revolutionized artificial intelligence by replacing sequential recurrence with parallelized self-attention. Generative Pretrained Transformers (GPT) employ a decoder-only configuration, passing token and position embeddings through stacked layers of masked multi-head self-attention and position-wise feed-forward networks. In this lesson, you will master the scaled dot-product attention formula, understand how causal masking preserves the autoregressive property by preventing future token peeking, and implement a self-attention calculation in TypeScript.',
    bn: 'ট্রান্সফরমার আর্কিটেকচার রিকারেন্ট নিউরাল নেটওয়ার্কের ধীরগতির প্রক্রিয়াকে সেলফ-অ্যাটেনশন মেকানিজম দ্বারা প্রতিস্থাপন করে এআই বিপ্লবের সূচনা করেছে। জেনারেটিভ প্রিট্রেইন্ড ট্রান্সফরমার (জিপিটি) একটি ডিকোডার-অনলি কাঠামো ব্যবহার করে, যেখানে টোকেন ও পজিশনাল এমবেডিং পর্যায়ক্রমে মাস্কড মাল্টি-হেড সেলফ-অ্যাটেনশন ও ফিড-ফরওয়ার্ড স্তরের মধ্য দিয়ে প্রবাহিত হয়। এই পাঠে স্কেলড ডট-প্রোডাক্ট অ্যাটেনশনের গাণিতিক সূত্র, কজাল মাস্কিংয়ের মাধ্যমে ভবিষ্যৎ তথ্য গোপন রাখার নিয়ম এবং সেলফ-অ্যাটেনশন স্কোরের বাস্তব টাইপস্ক্রিপ্ট বাস্তবায়ন বিস্তারিতভাবে তুলে ধরা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'diffusion-images',
    tech: 'generative-ai',
    title: {
      en: 'Diffusion Models and Image Generation — Noise Schedules, U-Net, and Latent Economics',
      bn: 'ডিফিউশন মডেল ও ইমেজ জেনারেশন: নয়েজ শিডিউল, ইউ-নেট ও ল্যাটেন্ট স্পেস'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'transformer-architecture-overview',
      text: {
        en: 'The Core Transformer Architecture: Attention Over Recurrence',
        bn: 'ট্রান্সফরমারের মূল স্থাপত্য: রিকারেন্সের বিপরীতে সেলফ-অ্যাটেনশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When researchers introduced the Transformer in 2017, they solved the primary computational bottleneck of sequential recurrent networks. Instead of processing text word-by-word through time, Transformers process all tokens simultaneously using self-attention.',
        bn: '২০১৭ সালে যখন গবেষকরা ট্রান্সফরমার আর্কিটেকচার উদ্ভাবন করেন, তখন তারা রিকারেন্ট নিউরাল নেটওয়ার্কের ধীরগতির সমস্যার সমাধান করেন। ধাপে ধাপে একটি করে শব্দ প্রক্রিয়াকরণের বদলে ট্রান্সফরমার সেলফ-অ্যাটেনশনের মাধ্যমে সিকোয়েন্সের সমস্ত শব্দকে একসাথে সমান্তরালভাবে বিশ্লেষণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In recurrent neural networks, gradient signals degraded across long distances, making it difficult for models to connect related words separated by many paragraphs. Self-attention removes this limitation by connecting every token directly to every other token in a single mathematical operation, capturing long-range contextual dependencies across thousands of tokens.',
        bn: 'পূর্ববর্তী রিকারেন্ট নিউরাল নেটওয়ার্কে দীর্ঘ দূরত্বের বাক্যে তথ্য হারিয়ে যেত, ফলে অনেক দূরে থাকা সম্পর্কিত শব্দের সংযোগ বোঝা কঠিন ছিল। সেলফ-অ্যাটেনশন একটি একক গাণিতিক অপারেশনের মাধ্যমে প্রতিটি শব্দকে বাকি সমস্ত শব্দের সাথে সরাসরি সংযুক্ত করে, যার ফলে হাজার হাজার শব্দের প্রেক্ষাপট নির্ভুলভাবে ধরে রাখা সম্ভব হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'self-attention',
          def: {
            en: 'A mathematical mechanism that calculates dynamic weights between all tokens in a sequence, allowing each token to attend to relevant context.',
            bn: 'একটি গাণিতিক পদ্ধতি যা সিকোয়েন্সের প্রতিটি শব্দের মাঝে পারস্পরিক প্রাসঙ্গিকতার স্কোর গণনা করে পূর্ণাঙ্গ প্রেক্ষাপট বোঝার সুযোগ দেয়।'
          }
        },
        {
          term: 'causal-masking',
          def: {
            en: 'An upper-triangular attention mask that zeroes out future tokens, ensuring each position can only attend to previous tokens.',
            bn: 'একটি বিশেষ ট্রায়াঙ্গুলার মাস্ক যা ভবিষ্যৎ শব্দের স্কোর শূন্য করে দেয় যাতে মডেল কেবল পূর্ববর্তী শব্দের ভিত্তিতে পরবর্তী শব্দ অনুমান করতে পারে।'
          }
        },
        {
          term: 'positional-encoding',
          def: {
            en: 'Vector representations added to token embeddings to inject sequence order information into permutation-invariant attention layers.',
            bn: 'টোকেন এমবেডিংয়ের সাথে যুক্ত ভেক্টর যা অর্ডারিং বা বাক্যে শব্দের সঠিক অবস্থান নির্দেশ করে।'
          }
        },
        {
          term: 'multi-head-attention',
          def: {
            en: 'Running the scaled dot-product attention in parallel across multiple subspace projections to capture diverse semantic relationships.',
            bn: 'একাধিক স্বাধীন প্রজেকশন স্পেসে সমান্তরালভাবে অ্যাটেনশন গণনা করা যাতে ব্যাকরণগত ও বিষয়ভিত্তিক বহুমুখী সম্পর্ক শনাক্ত করা যায়।'
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
      id: 'attention-vectors-table',
      text: {
        en: 'The Mechanics of Scaled Dot-Product Attention: Q, K, and V',
        bn: 'স্কেলড ডট-প্রোডাক্ট অ্যাটেনশনের কার্যপদ্ধতি: কুয়েরি, কি এবং ভ্যালু'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every self-attention layer projects input embeddings into three distinct representation matrices: Queries (Q), Keys (K), and Values (V). Computing dot products between Queries and Keys yields attention affinity scores.',
        bn: 'প্রতিটি সেলফ-অ্যাটেনশন স্তর ইনপুট এমবেডিংকে তিনটি পৃথক ম্যাট্রিক্সে রূপান্তর করে: কুয়েরি (Q), কি (K) এবং ভ্যালু (V)। কুয়েরি এবং কি-এর মধ্যকার ডট প্রোডাক্ট প্রাসঙ্গিকতার অ্যাটেনশন স্কোর নির্ধারণ করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Vector / Component', bn: 'ভেক্টর / উপাদান' },
        { en: 'Information Role', bn: 'তথ্যের ভূমিকা' },
        { en: 'Mathematical Operation', bn: 'গাণিতিক অপারেশন' },
        { en: 'Intuitive Analogy', bn: 'সহজ উপমা' }
      ],
      rows: [
        [
          { en: 'Query (Q)', bn: 'কুয়েরি (Q)' },
          { en: 'Represents the current token seeking relevant context', bn: 'বর্তমান টোকেন যা প্রাসঙ্গিক তথ্যের সন্ধান করছে' },
          { en: 'Linear projection of token embedding via weight matrix WQ', bn: 'টোকেন এমবেডিংকে WQ ম্যাট্রিক্স দিয়ে গুণ করে তৈরি হয়' },
          { en: 'Search bar query in a library database', bn: 'লাইব্রেরি ডেটাবেসের সার্চ বক্সে লেখা কুয়েরি' }
        ],
        [
          { en: 'Key (K)', bn: 'কি (K)' },
          { en: 'Represents candidate tokens offering contextual clues', bn: 'সিকোয়েন্সের অন্যান্য শব্দ যা প্রাসঙ্গিক ক্লু প্রদান করে' },
          { en: 'Linear projection of token embedding via weight matrix WK', bn: 'টোকেন এমবেডিংকে WK ম্যাট্রিক্স দিয়ে গুণ করে তৈরি হয়' },
          { en: 'Catalog index tags and book metadata', bn: 'বইয়ের ক্যাটালগ ইনডেক্স ও মেটাডেটা ট্যাগ' }
        ],
        [
          { en: 'Scaled Dot Product', bn: 'স্কেলড ডট প্রোডাক্ট' },
          { en: 'Measures semantic compatibility between Query and Key', bn: 'কুয়েরি এবং কি-এর মাঝে অর্থের সামঞ্জস্য পরিমাপ করে' },
          { en: 'Matrix dot product divided by square root of key dimension', bn: 'ডট প্রোডাক্টকে কি-ডাইমেনশনের বর্গমূল দিয়ে ভাগ করা হয়' },
          { en: 'Search engine relevance percentage score', bn: 'সার্চ ইঞ্জিনের ফলাফল প্রাসঙ্গিকতার স্কোর' }
        ],
        [
          { en: 'Value (V)', bn: 'ভ্যালু (V)' },
          { en: 'The substantive semantic payload extracted from the token', bn: 'শব্দটির মূল অর্থবহ তথ্য যা একত্রিত করা হবে' },
          { en: 'Weighted sum of Value vectors based on attention weights', bn: 'অ্যাটেনশন ওজনের ভিত্তিতে ভ্যালু ভেক্টরের যোগফল' },
          { en: 'The actual text contents of the retrieved book', bn: 'উদ্ধৃত বইটির মূল পৃষ্ঠার বাস্তব কনটেন্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-attention-code',
      text: {
        en: 'Executable Scaled Dot-Product Attention Simulation',
        bn: 'স্কেলড ডট-প্রোডাক্ট অ্যাটেনশনের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates attention scores for the ambiguous word "bank" in the phrase "bank of river". Notice how the token "river" receives the highest attention weight (47.8%), resolving linguistic context.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি "bank of river" বাক্যাংশে "bank" শব্দের অ্যাটেনশন স্কোর হিসাব করে। লক্ষ্য করুন কীভাবে "river" শব্দটি সর্বোচ্চ অ্যাটেনশন (৪৭.৮%) পেয়ে "bank" শব্দের নদী-তীর অর্থটিকে স্পষ্ট করে তুলেছে।'
      }
    },
    {
      type: 'code',
      code: `// Scaled Dot-Product Attention simulation for 3 tokens
const tokenLabels = ['bank', 'of', 'river'];

// Simplified 2-dimensional Query and Key embeddings
const queries: number[][] = [
  [1.0, 0.5], // Token 0: "bank"
  [0.2, 1.2], // Token 1: "of"
  [1.5, 0.8]  // Token 2: "river"
];

const keys: number[][] = [
  [1.0, 0.5],
  [0.2, 1.2],
  [1.5, 0.8]
];

const dimensionKey = 2;
const scaleFactor = Math.sqrt(dimensionKey);

// Compute dot products for Token 0 ("bank") against all candidate keys
const dotProducts = keys.map(keyVec => {
  const dot = queries[0][0] * keyVec[0] + queries[0][1] * keyVec[1];
  return dot / scaleFactor;
});

// Softmax calculation to derive final attention distribution
const maxScore = Math.max(...dotProducts);
const exponentials = dotProducts.map(score => Math.exp(score - maxScore));
const sumExp = exponentials.reduce((acc, curr) => acc + curr, 0);
const attentionWeights = exponentials.map(e => Number(((e / sumExp) * 100).toFixed(1)));

console.log('Tokens:', tokenLabels.join(', '));
console.log('Scaled Dot Products:', dotProducts.map(d => d.toFixed(2)).join(', '));
console.log('Attention Weights:', attentionWeights.map(w => w + '%').join(', '));

// prints: Tokens: bank, of, river
// prints: Scaled Dot Products: 0.88, 0.57, 1.34
// prints: Attention Weights: 30.2%, 22.0%, 47.8%`
    },
    {
      type: 'heading',
      id: 'causal-masking-and-gpt',
      text: {
        en: 'Causal Masking and the Decoder-Only Stack',
        bn: 'কজাল মাস্কিং এবং ডিকোডার-অনলি ট্রান্সফরমার স্ট্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike bidirectional encoders like BERT that inspect both preceding and following tokens simultaneously, Generative Pretrained Transformers (GPT) employ a decoder-only architecture with causal masking. The causal mask places negative infinity values over all future positions in the attention matrix before Softmax, ensuring position i can never attend to tokens at position i+1 or beyond. This preserves the strict autoregressive invariant: each token is predicted purely from historical context, enabling real-time generation during production inference.',
        bn: 'দ্বি-মুখী এনকোডার (যেমন বিইআরটি বা BERT) যেখানে একসাথে পূর্ববর্তী ও পরবর্তী উভয় শব্দ বিশ্লেষণ করতে পারে, সেখানে জেনারেটিভ প্রিট্রেইন্ড ট্রান্সফরমার (জিপিটি) কজাল মাস্কসহ ডিকোডার-অনলি কাঠামো ব্যবহার করে। কজাল মাস্ক সফটম্যাক্স অপারেশনের পূর্বে ভবিষ্যৎ অবস্থানের সমস্ত ঘরে ঋণাত্মক অসীম মান বসিয়ে দেয়, যাতে i-তম টোকেন কখনোই i+1 বা পরবর্তী শব্দের তথ্য দেখতে না পারে। এই কৌশলটি অটোরিগ্রেসিভ নীতি অক্ষুণ্ণ রাখে: প্রতিটি নতুন শব্দ কেবল অতীতের প্রেক্ষাপটের ভিত্তিতে অনুমান করা হয়, যা প্রোডাকশনে লাইভ টেক্সট তৈরির সুযোগ সৃষ্টি করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Attention over recurrence: Transformers process full contexts in parallel, solving vanishing gradients in RNNs.',
          bn: 'রিকারেন্সের বদলে অ্যাটেনশন: ট্রান্সফরমার সমান্তরালভাবে সম্পূর্ণ প্রেক্ষাপট বিশ্লেষণ করে তথ্যের অপচয় রোধ করে।'
        },
        {
          en: 'Q, K, V mechanism: Queries search against Keys to compute attention scores that aggregate Value vectors.',
          bn: 'Q, K, V মেকানিজম: কুয়েরি ও কি-এর ডট প্রোডাক্টের মাধ্যমে প্রাপ্ত ওজনের ভিত্তিতে ভ্যালু ভেক্টরগুলো একত্রিত হয়।'
        },
        {
          en: 'Causal masking enforces honesty: Masking future tokens ensures autoregressive prediction without cheating.',
          bn: 'কজাল মাস্কিং ভবিষ্যৎ গোপন রাখে: ভবিষ্যৎ শব্দের পথ বন্ধ করে এটি নিখুঁত অটোরিগ্রেসিভ প্রেডিকশন নিশ্চিত করে।'
        },
        {
          en: 'Scale drives emergent abilities: Expanding parameter counts and training tokens unlocks complex reasoning behaviors.',
          bn: 'স্কেলিংয়ে নতুন সক্ষমতা: মডেলের প্যারামিটার ও ডেটার পরিমাণ বৃদ্ধির সাথে সাথে জটিল যৌক্তিক ক্ষমতা তৈরি হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tr-gpt-ex1',
      kind: 'mcq',
      topic: 'transformer-parallelism-advantage',
      question: {
        en: 'What fundamental computational advantage allowed Transformers to replace Recurrent Neural Networks (RNNs) for training frontier language models?',
        bn: 'কোন মৌলিক গাণিতিক সুবিধার কারণে ট্রান্সফরমার রিকারেন্ট নিউরাল নেটওয়ার্ককে (RNN) প্রতিস্থাপন করে আধুনিক লার্জ ল্যাঙ্গুয়েজ মডেলের প্রধান ভিত্তি হয়ে উঠেছে?'
      },
      options: [
        {
          en: 'Self-attention processes all tokens in a sequence simultaneously in parallel on GPUs, eliminating sequential step-by-step training bottlenecks',
          bn: 'সেলফ-অ্যাটেনশন সিকোয়েন্সের সমস্ত শব্দকে গ্রাফিক্স কার্ডে (GPU) একসাথে সমান্তরালভাবে প্রসেস করে, ফলে ধাপে ধাপে অপেক্ষা করার দীর্ঘসূত্রিতা দূর হয়'
        },
        {
          en: 'Transformers eliminate the need for matrix multiplication entirely',
          bn: 'ট্রান্সফরমার আর্কিটেকচারে কোনো ম্যাট্রিক্স গুণের প্রয়োজন হয় না'
        },
        {
          en: 'Transformers can only be programmed using the HTML stylesheet language',
          bn: 'ট্রান্সফরমার কেবল এইচটিএমএল স্টাইলশীট দিয়ে তৈরি করা সম্ভব'
        },
        {
          en: 'Transformers do not consume any computer memory or electrical power',
          bn: 'ট্রান্সফরমার চালাতে কোনো কম্পিউটার মেমরি বা বিদ্যুৎ খরচ হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'RNNs must process token 1 before token 2, preventing GPU parallelization. Transformers process all tokens at once.',
        bn: 'RNN-এ ১ নং শব্দ শেষ না করে ২ নং শব্দে যাওয়া যেত না, যা সমান্তরাল প্রসেসিং ব্যাহত করত; ট্রান্সফরমার সব শব্দ একসাথে সমান্তরালভাবে প্রসেস করতে পারে।'
      },
      explanation: {
        en: 'Parallelization across sequence lengths enabled training on trillions of tokens, unlocking massive modern model scales.',
        bn: 'একসাথে সমান্তরাল প্রশিক্ষণের সুবিধার কারণে ট্রিলিয়ন ট্রিলিয়ন টোকেনের বিশাল ডেটাসেটে মডেল ট্রেনিং করা সম্ভব হয়েছে।'
      }
    },
    {
      id: 'tr-gpt-ex2',
      kind: 'mcq',
      topic: 'causal-masking-purpose',
      question: {
        en: 'In decoder-only autoregressive architectures like GPT, what is the critical purpose of applying a causal attention mask?',
        bn: 'জিপিটি (GPT) এর মতো ডিকোডার-অনলি মডেলে কজাল অ্যাটেনশন মাস্ক ব্যবহারের প্রধান উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To prevent tokens from attending to subsequent future tokens during training, forcing each token to predict the next word using only prior context',
          bn: 'প্রশিক্ষণ চলাকালীন কোনো শব্দ যেন পরবর্তী ভবিষ্যৎ শব্দের তথ্য দেখতে না পারে তা নিশ্চিত করা, যাতে কেবল পূর্ববর্তী প্রেক্ষাপটের ভিত্তিতেই পরবর্তী শব্দ অনুমান করা হয়'
        },
        {
          en: 'To permanently encrypt the model weights with a password',
          bn: 'পাসওয়ার্ড দিয়ে মডেলের সমস্ত ওয়েটস চিরতরে এনক্রিপ্ট করে রাখা'
        },
        {
          en: 'To reduce the physical screen brightness of the user computer monitor',
          bn: 'ব্যবহারকারীর মনিটরের উজ্জ্বলতা স্বয়ংক্রিয়ভাবে কমিয়ে দেওয়া'
        },
        {
          en: 'To convert English text into Latin before saving to a file',
          bn: 'ফাইলে সংরক্ষণের পূর্বে ইংরেজি টেক্সটকে ল্যাটিনে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'If token 2 could see token 3 during training, next-token prediction would be trivial cheating.',
        bn: 'প্রশিক্ষণে ২ নং টোকেন যদি ৩ নং টোকেন আগেই দেখে ফেলতে পারত, তবে অনুমান করার পরীক্ষাটি সম্পূর্ণ অর্থহীন হয়ে যাবে।'
      },
      explanation: {
        en: 'Causal masking preserves the unidirectional causal structure required for autoregressive next-token generation.',
        bn: 'কজাল মাস্ক ভবিষ্যৎ তথ্য আড়াল করে খাঁটি অটোরিগ্রেসিভ নিয়মে পরবর্তী শব্দ অনুমানের সক্ষমতা নিশ্চিত করে।'
      }
    },
    {
      id: 'tr-gpt-ex3',
      kind: 'mcq',
      topic: 'scaled-dot-product-division-sqrt-dk',
      question: {
        en: 'In the scaled dot-product attention formula, why are dot products divided by the square root of the key dimension (sqrt(dk)) before applying Softmax?',
        bn: 'স্কেলড ডট-প্রোডাক্ট অ্যাটেনশনের সূত্রে সফটম্যাক্স প্রয়োগের পূর্বে কেন ডট প্রোডাক্টকে কি-ডাইমেনশনের বর্গমূল (sqrt(dk)) দিয়ে ভাগ করা হয়?'
      },
      options: [
        {
          en: 'To prevent large vector dimensions from driving dot product magnitudes excessively high, which would push Softmax into regions with extremely small gradients',
          bn: 'বড় ডাইমেনশনের কারণে ডট প্রোডাক্টের মান যেন অতিরিক্ত বৃদ্ধি না পায়, যা সফটম্যাক্সকে অতি ক্ষুদ্র গ্রেডিয়েন্ট অঞ্চলে ঠেলে দিয়ে ব্যাকপ্রোপাগেশন ব্যাহত করে'
        },
        {
          en: 'To calculate the geographical distance between the client and server',
          bn: 'ক্লায়েন্ট এবং সার্ভারের মধ্যকার ভৌগোলিক দূরত্ব হিসাব করার জন্য'
        },
        {
          en: 'Because square roots are required by international copyright treaties',
          bn: 'কারণ আন্তর্জাতিক কপিরাইট আইনের নিয়ম অনুসারে বর্গমূল করা বাধ্যতামূলক'
        },
        {
          en: 'To force all neural weights to become negative numbers',
          bn: 'সমস্ত নিউরাল ওয়েটসকে ঋণাত্মক সংখ্যায় রূপান্তর করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'As dimension dk grows, the variance of dot products scales with dk. Large values saturate Softmax, causing vanishing gradients.',
        bn: 'ডাইমেনশন বাড়লে ডট প্রোডাক্ট অনেক বড় হয়ে যায় এবং সফটম্যাক্স স্যাচুরেট হয়ে গ্রেডিয়েন্ট শূন্যের কাছাকাছি নেমে যায়।'
      },
      explanation: {
        en: 'Scaling by 1/sqrt(dk) stabilizes variance around 1, maintaining healthy gradient flow during backpropagation.',
        bn: '1/sqrt(dk) দিয়ে স্কেলিং করলে ভ্যারিয়্যান্স ১ এর কাছাকাছি নিয়ন্ত্রণে থাকে এবং মডেল প্রশিক্ষণে গ্রেডিয়েন্ট প্রবাহ স্বাভাবিক থাকে।'
      }
    },
    {
      id: 'tr-gpt-ex4',
      kind: 'mcq',
      topic: 'positional-encoding-necessity',
      question: {
        en: 'Why do Transformers require explicit Positional Encodings added to token embeddings, whereas Recurrent Neural Networks did not need them?',
        bn: 'ট্রান্সফরমার মডেলে কেন টোকেন এমবেডিংয়ের সাথে পজিশনাল এনকোডিং যুক্ত করা বাধ্যতামূলক, যা রিকারেন্ট নিউরাল নেটওয়ার্কে প্রয়োজন হতো না?'
      },
      options: [
        {
          en: 'Because self-attention is permutation-invariant and treats input sequences as unordered sets of words unless positional vectors are added to distinguish word order',
          bn: 'কারণ সেলফ-অ্যাটেনশন সমস্ত শব্দকে একসাথে দেখে এবং পজিশনাল ভেক্টর ছাড়া বাক্যের শব্দের ক্রমানুসারে সাজানোর তথ্য বুঝতে পারে না'
        },
        {
          en: 'Because Positional Encodings contain the user credit card details',
          bn: 'কারণ পজিশনাল এনকোডিংয়ে ব্যবহারকারীর ক্রেডিট কার্ডের তথ্য জমা থাকে'
        },
        {
          en: 'Because without Positional Encodings, the computer hard drive cannot save text',
          bn: 'কারণ পজিশনাল এনকোডিং না থাকলে হার্ড ড্রাইভে কোনো টেক্সট সেভ করা যায় না'
        },
        {
          en: 'Because Positional Encodings reduce the physical weight of computer cables',
          bn: 'কারণ পজিশনাল এনকোডিং নেটওয়ার্ক তারের ওজন কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '"Cat eats fish" and "Fish eats cat" have identical words. Without position codes, self-attention cannot tell them apart.',
        bn: 'শব্দের অবস্থান নির্দেশ না করলে "বিড়াল মাছ খায়" আর "মাছ বিড়াল খায়" এর তফাত ট্রান্সফরমার বুঝতে পারবে না।'
      },
      explanation: {
        en: 'Self-attention possesses no inherent notion of sequence order; positional encodings inject sequence topology into the embeddings.',
        bn: 'সেলফ-অ্যাটেনশনে নিজস্ব কোনো শব্দের ক্রম থাকে না; পজিশনাল এনকোডিং প্রতিটি শব্দের সঠিক অবস্থান নির্দেশ করে।'
      }
    }
  ],
  quiz: {
    id: 'transformers-gpt-quiz',
    title: {
      en: 'Transformer Architecture and GPT Quiz',
      bn: 'ট্রান্সফরমার আর্কিটেকচার এবং জিপিটি কুইজ'
    },
    questions: [
      {
        id: 'trg-q1',
        kind: 'mcq',
        topic: 'kv-cache-inference-optimization',
        question: {
          en: 'In production LLM serving systems, what is the primary benefit of maintaining a Key-Value (KV) Cache during autoregressive generation?',
          bn: 'প্রোডাকশনে এলএলএম পরিবেশনের সময় অটোরিগ্রেসিভ জেনারেশনে কি-ভ্যালু (KV) ক্যাশ সংরক্ষণের প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'It stores previously computed Key and Value vectors for historical tokens, eliminating redundant matrix calculations and speeding up generation of each new token',
            bn: 'এটি পূর্ববর্তী টোকেনগুলোর কি (Key) এবং ভ্যালু (Value) ভেক্টর মেমরিতে ক্যাশ করে রাখে, যার ফলে অপ্রয়োজনীয় পুনরাবৃত্তি হিসাব বন্ধ হয়ে নতুন টোকেন দ্রুত উৎপন্ন হয়'
          },
          {
            en: 'It automatically translates English responses into Spanish',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ইংরেজি উত্তরকে স্প্যানিশ ভাষায় অনুবাদ করে'
          },
          {
            en: 'It reduces the cost of electricity by 99 percent in data centers',
            bn: 'এটি ডাটা সেন্টারে বিদ্যুতের খরচ ৯৯ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It connects the server directly to commercial television satellites',
            bn: 'এটি সার্ভারকে সরাসরি স্যাটেলাইটের সাথে সংযুক্ত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without KV caching, generating token 100 requires recomputing Keys and Values for tokens 1 through 99 from scratch.',
          bn: 'কেভি ক্যাশ না থাকলে ১০০তম টোকেন তৈরির সময় আগের ১ থেকে ৯৯টি টোকেনের হিসাব নতুন করে আবার করতে হতো।'
        },
        explanation: {
          en: 'KV caching reduces per-step computational complexity from O(N^2) to O(N) by reusing already computed activations.',
          bn: 'কেভি ক্যাশ পূর্ববর্তী হিসাব সংরক্ষণ করে প্রতিটি নতুন শব্দ তৈরির সময় ও কম্পিউটেশন খরচ নাটকীয়ভাবে কমায়।'
        }
      },
      {
        id: 'trg-q2',
        kind: 'mcq',
        topic: 'multi-head-attention-semantic-diversity',
        question: {
          en: 'Why do modern Transformers employ Multi-Head Attention rather than a single large self-attention mechanism?',
          bn: 'আধুনিক ট্রান্সফরমার মডেলে একটি মাত্র বড় সেলফ-অ্যাটেনশনের বদলে কেন মাল্টি-হেড অ্যাটেনশন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'It allows the model to simultaneously attend to information from different representation subspaces, capturing diverse grammatical, factual, and stylistic relationships',
            bn: 'এটি মডেলকে একই সাথে বিভিন্ন সাবস্পেস থেকে তথ্যে মনোযোগ দেওয়ার সুযোগ দেয়, ফলে ব্যাকরণগত, তথ্যগত ও বাচনভঙ্গির বহুমুখী সম্পর্ক শনাক্ত করা যায়'
          },
          {
            en: 'Because multi-head attention can only be run on quantum supercomputers',
            bn: 'কারণ মাল্টি-হেড কেবল কোয়ান্টাম সুপারকম্পিউটারেই চালানো যায়'
          },
          {
            en: 'To make the neural network weights readable by human eye',
            bn: 'যাতে মানুষ খালি চোখে নিউরাল নেটওয়ার্কের মান পড়ে বুঝতে পারে'
          },
          {
            en: 'To prevent web browsers from running out of disk space',
            bn: 'যাতে ব্রাউজারের হার্ড ডিস্কে জায়গা শেষ না হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'One head might focus on subject-verb agreement, while another head tracks pronoun references across sentences.',
          bn: 'একটি হেড ক্রিয়াপদের সম্পর্ক বুঝতে পারে, আবার অন্য হেড সর্বনামের রেফারেন্স সহজে খুঁজে বের করে।'
        },
        explanation: {
          en: 'Multi-head projections endow the network with multiple parallel attention focus channels across disparate semantic features.',
          bn: 'একাধিক হেড সমান্তরালভাবে ভাষার বিভিন্ন ব্যাকরণ ও অর্থের মাত্রা বিশ্লেষণ করে মডেলের বোধগম্যতা বৃদ্ধি করে।'
        }
      },
      {
        id: 'trg-q3',
        kind: 'mcq',
        topic: 'feed-forward-network-role',
        question: {
          en: 'What critical functional role does the Position-wise Feed-Forward Network (FFN) play inside each Transformer block following the attention layer?',
          bn: 'ট্রান্সফরমার ব্লকে সেলফ-অ্যাটেনশন স্তরের পর পজিশন-ওয়াইজ ফিড-ফরওয়ার্ড নেটওয়ার্ক (FFN) কোন অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It provides non-linear feature transformation and acts as key-value associative memory, storing vast factual knowledge acquired during pretraining',
            bn: 'এটি নন-লিনিয়ার বৈশিষ্ট্য রূপান্তর প্রদান করে এবং অ্যাসোসিয়েটিভ মেমরি হিসেবে কাজ করে প্রি-ট্রেনিংয়ে অর্জিত বিপুল বাস্তব জ্ঞান সঞ্চয় করে রাখে'
          },
          {
            en: 'It deletes all punctuation marks from the generated paragraphs',
            bn: 'এটি উৎপাদিত প্যারাগ্রাফ থেকে সমস্ত বিরামচিহ্ন মুছে ফেলে'
          },
          {
            en: 'It converts the neural network into an optical telescope',
            bn: 'এটি নিউরাল নেটওয়ার্ককে একটি অপটিক্যাল টেলিস্কোপে রূপান্তর করে'
          },
          {
            en: 'It sends daily email summaries to the server system administrator',
            bn: 'এটি প্রতিদিন সিস্টেম অ্যাডমিনিস্ট্রেটরের কাছে ইমেইল পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Attention mixes information across tokens; the FFN deepens and transforms representations token by token.',
          bn: 'অ্যাটেনশন শব্দগুলোর তথ্য একসাথে মেশায়; আর এফএফএন প্রতিটি শব্দের ভেতরে গভীর জ্ঞান ও বৈশিষ্ট্য যোগ করে।'
        },
        explanation: {
          en: 'Feed-forward layers contribute the majority of Transformer parameters, functioning as factual knowledge storehouses.',
          bn: 'ফিড-ফরওয়ার্ড স্তরে মডেলের অধিকাংশ প্যারামিটার থাকে যা তথ্যগত জ্ঞান ধারণকারী স্মৃতি হিসেবে কাজ করে।'
        }
      },
      {
        id: 'trg-q4',
        kind: 'mcq',
        topic: 'scaling-laws-chinchilla',
        question: {
          en: 'What did the Chinchilla scaling laws discover regarding optimal resource allocation between model parameters and training dataset tokens?',
          bn: 'চিনচিলা (Chinchilla) স্কেলিং ল মডেলের প্যারামিটার সংখ্যা এবং ট্রেনিং টোকেন সংখ্যার মধ্যকার সঠিক ভারসাম্য নিয়ে কী আবিষ্কার করেছে?'
        },
        options: [
          {
            en: 'For compute-optimal training, model parameter size and the number of training tokens should be scaled in equal proportion (approximately 20 tokens per parameter)',
            bn: 'কম্পিউট ক্ষমতার সর্বোত্তম ব্যবহারের জন্য মডেল প্যারামিটার এবং ট্রেনিং টোকেনের সংখ্যা সমান অনুপাতে বৃদ্ধি করা উচিত (প্রতি প্যারামিটারে প্রায় ২০টি টোকেন)'
          },
          {
            en: 'That models should only have 100 parameters regardless of dataset size',
            bn: 'ডেটাসেট যাই হোক না কেন মডেলে কেবল ১০০টি প্যারামিটার থাকা উচিত'
          },
          {
            en: 'That language models can only be trained on data from social media websites',
            bn: 'ল্যাঙ্গুয়েজ মডেল কেবল সোশ্যাল মিডিয়া ডেটা দিয়েই প্রশিক্ষণ দেওয়া সম্ভব'
          },
          {
            en: 'That neural network training speed increases during winter months',
            bn: 'শীতকালে নিউরাল নেটওয়ার্কের প্রশিক্ষণের গতি নিজে থেকেই বেড়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Earlier models were undertrained (too many parameters, too few tokens). Chinchilla proved tokens matter just as much as parameters.',
          bn: 'আগে মডেল বড় কিন্তু ডেটা কম থাকত; চিনচিলা প্রমাণ করেছে ডেটার সংখ্যা প্যারামিটারের মতোই সমান গুরুত্বপূর্ণ।'
        },
        explanation: {
          en: 'Chinchilla scaling demonstrated that optimal performance requires balancing model capacity with sufficient token volume.',
          bn: 'চিনচিলা স্কেলিং প্রমাণ করেছে যে মডেলের আকারের সাথে পর্যাপ্ত পরিমাণ ডেটার ভারসাম্য বজায় রাখাই সাফল্যের চাবিকাঠি।'
        }
      }
    ]
  }
};
