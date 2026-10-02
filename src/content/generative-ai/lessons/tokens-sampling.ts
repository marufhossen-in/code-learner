import type { Lesson } from '../../../lib/types';

export const TokensSamplingLesson: Lesson = {
  slug: 'tokens-sampling',
  tech: 'generative-ai',
  title: {
    en: 'Tokens and Sampling Mechanics — Vocabulary, Logits, Temperature, and Top-p',
    bn: 'টোকেন এবং স্যাম্পলিং কৌশল: ভোকাবুলারি, লজিটস, টেম্পারেচার এবং টপ-পি'
  },
  summary: {
    en: 'Large language models do not process raw words directly; they manipulate numerical representations called tokens through a structured vocabulary. At each generative step, the neural network calculates raw unnormalized scores (logits) across tens of thousands of candidate tokens. These logits are transformed via Softmax and shaped using sampling parameters including Temperature, Top-k, and Top-p (Nucleus sampling). In this lesson, you will master subword tokenization (Byte-Pair Encoding), dissect how Temperature flattens or sharpens probability distributions, and implement mathematical filters that eliminate low-probability hallucinations.',
    bn: 'লার্জ ল্যাঙ্গুয়েজ মডেল সরাসরি সাধারণ শব্দ প্রক্রিয়া করে না; বরং তারা টেক্সটকে টোকেন নামক সাংখ্যিক পরিচয়ে রূপান্তর করে বিশ্লেষণ করে। প্রতিটি জেনারেশন ধাপে নিউরাল নেটওয়ার্ক হাজার হাজার শব্দের ওপর লজিটস (Logits) নামক প্রাথমিক স্কোর গণনা করে। এই স্কোরগুলো সফটম্যাক্স ফাংশন এবং টেম্পারেচার, টপ-কে ও টপ-পি (নিউক্লিয়াস) স্যাম্পলিং কৌশলের মাধ্যমে কাঙ্ক্ষিত বিন্যাসে রূপান্তরিত হয়। এই পাঠে সাবওয়ার্ড টোকেনাইজেশন (BPE), টেম্পারেচারের গাণিতিক প্রভাব এবং অপ্রাসঙ্গিক শব্দ ছাঁটাই করে নির্ভুল আউটপুট তৈরির ফিল্টারিং কৌশল গভীরভাবে আলোচনা করা হয়েছে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'transformers-gpt',
    tech: 'generative-ai',
    title: {
      en: 'Transformers and GPT — Self-Attention, Positional Encoding, and Feed-Forward Networks',
      bn: 'ট্রান্সফরমার এবং জিপিটি: সেলফ-অ্যাটেনশন, পজিশনাল এনকোডিং ও ফিড-ফরওয়ার্ড নেটওয়ার্ক'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'subword-tokenization-and-vocab',
      text: {
        en: 'Subword Tokenization and Vocabulary Mapping',
        bn: 'সাবওয়ার্ড টোকেনাইজেশন এবং ভোকাবুলারি ম্যাপিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before a neural language model can process your text, it converts human language into an ordered sequence of numerical identifiers called tokens. You can think of tokens as the foundational currency of modern generative transformers.',
        bn: 'একটি নিউরাল ল্যাঙ্গুয়েজ মডেল আপনার টেক্সট বিশ্লেষণ করার পূর্বে মানব ভাষাকে টোকেন নামক সুশৃঙ্খল সংখ্যায় রূপান্তর করে। আপনি টোকেনকে আধুনিক জেনারেটিভ ট্রান্সফরমারের মৌলিক ভিত্তি বা মুদ্রা হিসেবে বিবেচনা করতে পারেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rather than splitting by whole dictionary words or individual characters, contemporary systems use subword algorithms such as Byte-Pair Encoding (BPE). Common words like "the" form a single token, while rare or compound words are cleanly decomposed into frequent subword chunks (e.g. "un" + "happi" + "ness"). This architecture bounds the vocabulary size between 32000 and 128000 tokens while completely eliminating out-of-vocabulary failures.',
        bn: 'সম্পূর্ণ শব্দ বা একক অক্ষরের বদলে আধুনিক মডেলগুলো বাইট-পেয়ার এনকোডিং (BPE) এর মতো সাবওয়ার্ড অ্যালগরিদম ব্যবহার করে। বহুল ব্যবহৃত সাধারণ শব্দ একটি একক টোকেন গঠন করে, আর বিরল বা জটিল শব্দগুলো পরিচিত ক্ষুদ্র অংশে ভেঙে যায় (যেমন "un" + "happi" + "ness")। এই কৌশল ভোকাবুলারির আকার ৩২০০০ থেকে ১২৮০০০ টোকেনের মধ্যে সীমাবদ্ধ রাখে এবং শব্দ না চেনার সমস্যা দূর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'tokenization',
          def: {
            en: 'The process of segmenting text into discrete subword chunks mapped to unique integer IDs in a fixed vocabulary.',
            bn: 'টেক্সটকে ক্ষুদ্র সাবওয়ার্ড অংশে বিভক্ত করে নির্ধারিত ভোকাবুলারির ইউনিক সংখ্যায় রূপান্তর করার প্রক্রিয়া।'
          }
        },
        {
          term: 'logits',
          def: {
            en: 'Raw unnormalized numerical outputs produced by the final linear layer of a language model before probability conversion.',
            bn: 'সম্ভাবনায় রূপান্তর করার পূর্বে ল্যাঙ্গুয়েজ মডেলের শেষ স্তর থেকে প্রাপ্ত অপরিশোধিত সাংখ্যিক স্কোর।'
          }
        },
        {
          term: 'temperature',
          def: {
            en: 'A hyperparameter dividing logits before softmax that flattens or sharpens the resulting probability distribution.',
            bn: 'সফটম্যাক্সের পূর্বে লজিটসকে ভাগ করে সম্ভাবনার পার্থক্য সংকুচিত বা প্রসারিত করার নিয়ন্ত্রণকারী প্যারামিটার।'
          }
        },
        {
          term: 'top-p-sampling',
          def: {
            en: 'Nucleus sampling that restricts the candidate pool to the smallest set of high-probability tokens whose cumulative probability exceeds p.',
            bn: 'এমন একটি ফিল্টারিং কৌশল যা ক্রমান্বয়ে সাজানো সবচেয়ে সম্ভাব্য টোকেনগুলোর মোট যোগফল p অতিক্রম করা পর্যন্ত প্রার্থী হিসেবে বিবেচনা করে।'
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
      id: 'sampling-strategies-table',
      text: {
        en: 'Comparison Matrix: Sampling Strategies in Production',
        bn: 'তুলনামূলক ম্যাট্রিক্স: প্রোডাকশনে স্যাম্পলিং কৌশলের প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Selecting the appropriate sampling parameters determines whether a model generates deterministic code, balanced prose, or wild creative experiments.',
        bn: 'সঠিক স্যাম্পলিং প্যারামিটার নির্ধারণ করে মডেলটি কি সম্পূর্ণ নিশ্চিত কোড লিখবে, ভারসাম্যপূর্ণ প্রবন্ধ লিখবে নাকি সৃজনশীল ধারণা তৈরি করবে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Sampling Strategy', bn: 'স্যাম্পলিং কৌশল' },
        { en: 'Mathematical Configuration', bn: 'গাণিতিক বিন্যাস' },
        { en: 'Effect on Probability Distribution', bn: 'সম্ভাব্যতা বিন্যাসের ওপর প্রভাব' },
        { en: 'Production Use Case', bn: 'প্রোডাকশনের আদর্শ ব্যবহার' }
      ],
      rows: [
        [
          { en: 'Greedy Decoding (Argmax)', bn: 'গ্রিডি ডিকোডিং (Argmax)' },
          { en: 'Temperature approaches 0; always picks top token', bn: 'টেম্পারেচার ০ (শূন্যের) কাছাকাছি; সর্বদা সর্বোচ্চ স্কোরের টোকেন নেয়' },
          { en: 'Collapses distribution into a single deterministic choice', bn: 'সম্ভাব্যতাকে একক নিশ্চিত পছন্দে রূপান্তর করে' },
          { en: 'Deterministic code generation, math problems, SQL queries', bn: 'কোড জেনারেশন, গণিত সমাধান, এসকিউএল কুয়েরি' }
        ],
        [
          { en: 'Low Temperature (Focused)', bn: 'কম টেম্পারেচার (নিয়ন্ত্রিত)' },
          { en: 'Temperature between 0.2 and 0.5', bn: 'টেম্পারেচার ০.২ থেকে ০.৫ এর মধ্যে' },
          { en: 'Sharpens distribution; amplifies high-confidence tokens', bn: 'সম্ভাব্যতা তীক্ষ্ণ করে; শীর্ষ পছন্দের মান আরও বাড়িয়ে দেয়' },
          { en: 'Technical documentation, enterprise search, API summaries', bn: 'প্রযুক্তিগত নথি, তথ্য অনুসন্ধান, সারাংশ তৈরি' }
        ],
        [
          { en: 'Creative Temperature (Balanced)', bn: 'সৃজনশীল টেম্পারেচার (ভারসাম্যপূর্ণ)' },
          { en: 'Temperature between 0.7 and 1.0', bn: 'টেম্পারেচার ০.৭ থেকে ১.০ এর মধ্যে' },
          { en: 'Balanced distribution preserving natural diversity', bn: 'প্রাকৃতিক বৈচিত্র্য বজায় রেখে স্বাভাবিক বিন্যাস রক্ষা করে' },
          { en: 'Conversational chat, marketing copy, fictional writing', bn: 'কথোপকথন, বিজ্ঞাপনী লেখা, সৃজনশীল গল্প রচনা' }
        ],
        [
          { en: 'High Temperature (Randomized)', bn: 'উচ্চ টেম্পারেচার (অতিরিক্ত স্বাধীন)' },
          { en: 'Temperature greater than 1.2', bn: 'টেম্পারেচার ১.২ এর বেশি' },
          { en: 'Flattens distribution towards uniform chaos', bn: 'সম্ভাব্যতা সমতল করে সমস্ত শব্দের সম্ভাবনা প্রায় সমান করে' },
          { en: 'Experimental idea brainstorming, artistic poetry', bn: 'নতুন ভাবনার অন্বেষণ, নিরীক্ষামূলক কবিতা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-temperature-code',
      text: {
        en: 'Executable Temperature and Softmax Simulation',
        bn: 'টেম্পারেচার এবং সফটম্যাক্স রূপান্তরের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Temperature scaling transforms raw model logits, showing how lower temperatures sharpen probability around the top token while higher temperatures flatten the field.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি প্রদর্শন করে কীভাবে টেম্পারেচার স্কেলিং লজিটসকে রূপান্তরিত করে। কম টেম্পারেচারে শীর্ষ টোকেন প্রভাবশালী হয়ে ওঠে এবং বেশি টেম্পারেচারে অন্যান্য টোকেনের সম্ভাবনা বৃদ্ধি পায়।'
      }
    },
    {
      type: 'code',
      code: `// Temperature-scaled Softmax implementation
function computeSoftmax(logits: number[], temperature: number): number[] {
  // Scale raw logits by dividing by temperature
  const scaled = logits.map(val => val / temperature);
  
  // Numerical stability trick: subtract max value before exponentiation
  const maxVal = Math.max(...scaled);
  const exps = scaled.map(val => Math.exp(val - maxVal));
  const sumExps = exps.reduce((acc, curr) => acc + curr, 0);

  return exps.map(val => Number(((val / sumExps) * 100).toFixed(1)));
}

const candidateTokens = ['the', 'a', 'one', 'this'];
const rawLogits = [4.0, 3.0, 2.0, 1.0];

const probsT10 = computeSoftmax(rawLogits, 1.0);
const probsT05 = computeSoftmax(rawLogits, 0.5);
const probsT20 = computeSoftmax(rawLogits, 2.0);

console.log('Tokens:', candidateTokens.join(', '));
console.log('T=1.0 (Standard):', probsT10.map(p => p + '%').join(', '));
console.log('T=0.5 (Focused):', probsT05.map(p => p + '%').join(', '));
console.log('T=2.0 (Flattened):', probsT20.map(p => p + '%').join(', '));

// prints: Tokens: the, a, one, this
// prints: T=1.0 (Standard): 64.4%, 23.7%, 8.7%, 3.2%
// prints: T=0.5 (Focused): 86.5%, 11.7%, 1.6%, 0.2%
// prints: T=2.0 (Flattened): 45.5%, 27.6%, 16.7%, 10.2%`
    },
    {
      type: 'heading',
      id: 'top-k-and-top-p-filters',
      text: {
        en: 'Top-k and Top-p (Nucleus) Truncation Filters',
        bn: 'টপ-কে এবং টপ-পি ট্রাংকেশন ফিল্টারের ভূমিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Relying solely on Temperature leaves a dangerous vulnerability: improbable tail tokens (bizarre punctuation or nonsensical words) still carry small non-zero probabilities and can be sampled. Engineers apply Top-k and Top-p filters to truncate the tail before sampling. Top-k truncates candidates strictly by rank, retaining only the k highest-scoring tokens. Top-p (Nucleus sampling) dynamically selects the smallest subset of tokens whose cumulative probability reaches p (such as 0.90), allowing the candidate pool to expand during ambiguous contexts and contract during obvious completions.',
        bn: 'শুধুমাত্র টেম্পারেচারের ওপর নির্ভর করলে একটি ঝুঁকি থেকে যায়: অসম্ভব বা অপ্রাসঙ্গিক শব্দগুলোরও সামান্য সম্ভাবনা থাকে যা কখনো কখনো নির্বাচিত হয়ে অর্থহীন আউটপুট তৈরি করতে পারে। এই লেজ ছাঁটাই করার জন্য প্রকৌশলীরা টপ-কে এবং টপ-পি ফিল্টার ব্যবহার করেন। টপ-কে কঠোরভাবে র্যাঙ্ক অনুযায়ী শীর্ষ k সংখ্যক টোকেন রেখে বাকিগুলো বাদ দেয়। অন্যদিকে টপ-পি (নিউক্লিয়াস স্যাম্পলিং) গতিশীলভাবে সেইসব টোকেন বেছে নেয় যাদের মোট সম্ভাবনার যোগফল p (যেমন ০.৯০) অতিক্রম করে। ফলে স্পষ্ট বাক্যে প্রার্থীর সংখ্যা স্বয়ংক্রিয়ভাবে কমে আসে এবং উন্মুক্ত বাক্যে সৃজনশীলতার সুযোগ থাকে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'BPE solves vocabulary limits: Subwords eliminate out-of-vocabulary errors while keeping vocabulary tables compact.',
          bn: 'BPE ভোকাবুলারি সীমাবদ্ধতা দূর করে: সাবওয়ার্ড অপরিচিত শব্দের ত্রুটি ঠেকায় এবং মেমরি খরচ কম রাখে।'
        },
        {
          en: 'Temperature divides logits: T < 1.0 concentrates probability on top candidates; T > 1.0 flattens the distribution.',
          bn: 'টেম্পারেচার লজিটস ভাগ করে: T < ১.০ শীর্ষ শব্দকে প্রাধান্য দেয়; আর T > ১.০ সব শব্দের সম্ভাবনা প্রায় সমান করে।'
        },
        {
          en: 'Top-p adapts to context: Nucleus filtering expands or contracts candidate sets based on model confidence.',
          bn: 'টপ-পি প্রসঙ্গের সাথে খাপ খায়: মডেলের আত্মবিশ্বাসের ওপর ভিত্তি করে নিউক্লিয়াস ফিল্টার প্রার্থীর তালিকা কমায় বা বাড়ায়।'
        },
        {
          en: 'Greedy for code, sampling for prose: Use greedy decoding for determinism and nucleus sampling for natural text.',
          bn: 'কোডে গ্রিডি, টেক্সটে স্যাম্পলিং: সুনির্দিষ্ট কোডের জন্য গ্রিডি এবং স্বাভাবিক ভাষার জন্য নিউক্লিয়াস স্যাম্পলিং ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tks-ex1',
      kind: 'mcq',
      topic: 'temperature-scaling-mathematics',
      question: {
        en: 'Mathematically, what occurs to the output probability distribution when the temperature parameter T approaches 0 during Softmax evaluation?',
        bn: 'সফটম্যাক্স মূল্যায়নের সময় টেম্পারেচার প্যারামিটার T যখন ০ (শূন্যের) কাছাকাছি পৌঁছায়, তখন গাণিতিকভাবে সম্ভাব্যতা বিন্যাসে কী ঘটে?'
      },
      options: [
        {
          en: 'The probability of the single highest-scoring logit approaches 1.0 while all other token probabilities drop to 0, behaving identically to greedy argmax selection',
          bn: 'সর্বোচ্চ স্কোর থাকা একক লজিটের সম্ভাবনা ১.০ এর কাছাকাছি পৌঁছায় এবং বাকি সব টোকেনের সম্ভাবনা ০ (শূন্যে) নেমে আসে, যা গ্রিডি সিলেকশনের মতো কাজ করে'
        },
        {
          en: 'All token probabilities become perfectly equal regardless of their original logits',
          bn: 'মূল লজিটস যাই থাকুক না কেন সমস্ত টোকেনের সম্ভাবনা সম্পূর্ণ সমান হয়ে যায়'
        },
        {
          en: 'The neural network deletes its internal vocabulary file from memory',
          bn: 'নিউরাল নেটওয়ার্ক মেমরি থেকে নিজের ভোকাবুলারি ফাইল মুছে ফেলে'
        },
        {
          en: 'The model reverses the order of words in the sentence',
          bn: 'মডেলটি বাক্যের শব্দগুলোকে উল্টো ক্রমানুসারে সাজায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dividing differences by numbers near zero makes the gap between top logit and runner-up infinitely large.',
        bn: 'শূন্যের কাছের সংখ্যা দিয়ে ভাগ করলে শীর্ষ মান ও দ্বিতীয় মানের ব্যবধান অনেক বড় হয়ে যায়।'
      },
      explanation: {
        en: 'As T approaches 0, Softmax sharpens asymptotically into the argmax indicator function, producing purely deterministic output.',
        bn: 'T এর মান ০ (শূন্যের) কাছাকাছি গেলে সফটম্যাক্স ফাংশন নিশ্চিতভাবে কেবল সর্বোচ্চ স্কোরের টোকেনটিকেই নির্বাচন করে।'
      }
    },
    {
      id: 'tks-ex2',
      kind: 'mcq',
      topic: 'top-p-nucleus-sampling-mechanics',
      question: {
        en: 'How does Top-p (Nucleus) sampling dynamically adapt the number of candidate tokens compared to fixed Top-k filtering?',
        bn: 'নির্দিষ্ট টপ-কে ফিল্টারিংয়ের তুলনায় টপ-পি (নিউক্লিয়াস) স্যাম্পলিং কীভাবে প্রার্থীর সংখ্যা গতিশীলভাবে পরিবর্তন করে?'
      },
      options: [
        {
          en: 'It includes tokens in descending probability order until their cumulative sum reaches p, naturally selecting fewer tokens when confident and more tokens when uncertain',
          bn: 'এটি অবরোহী ক্রমানুসারে টোকেনগুলোকে যুক্ত করে যতক্ষণ না তাদের মোট যোগফল p তে পৌঁছায়, ফলে আত্মবিশ্বাসের সময় কম এবং অনিশ্চয়তার সময় বেশি টোকেন থাকে'
        },
        {
          en: 'It forces the model to generate exactly p tokens per second',
          bn: 'এটি মডেলকে প্রতি সেকেন্ডে ঠিক p সংখ্যক টোকেন তৈরিতে বাধ্য করে'
        },
        {
          en: 'It discards all vowels from the generated English words',
          bn: 'এটি উৎপাদিত ইংরেজি শব্দগুলো থেকে সমস্ত ভাওয়েল বা স্বরবর্ণ বাদ দেয়'
        },
        {
          en: 'It requires user credit card verification before each generation step',
          bn: 'এটি প্রতি ধাপে ব্যবহারকারীর পেমেন্ট ভেরিফিকেশন দাবি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If one word has 95% probability, Top-p=0.90 picks only that 1 word. If 10 words each have 9%, it keeps all 10.',
        bn: 'একটি শব্দের সম্ভাবনা ৯৫% হলে টপ-পি=০.৯০ কেবল সেই ১টি শব্দই নেয়। কিন্তু ১০টি শব্দের প্রতিটির ৯% সম্ভাবনা থাকলে এটি পুরো ১০টি শব্দকেই রাখে।'
      },
      explanation: {
        en: 'Nucleus sampling dynamically adjusts candidate pool size according to the entropy and confidence of the prediction.',
        bn: 'নিউক্লিয়াস স্যাম্পলিং মডেলের আত্মবিশ্বাস ও সম্ভাবনার ওপর ভিত্তি করে প্রার্থীর তালিকা বাস্তবসম্মতভাবে নির্ধারণ করে।'
      }
    },
    {
      id: 'tks-ex3',
      kind: 'mcq',
      topic: 'subword-tokenization-advantage',
      question: {
        en: 'What primary architectural advantage does subword tokenization (such as Byte-Pair Encoding) offer over whole-word dictionary tokenization?',
        bn: 'পুরো শব্দের ডিকশনারি টোকেনাইজেশনের তুলনায় সাবওয়ার্ড টোকেনাইজেশন (যেমন BPE) কোন প্রধান স্থাপত্যিক সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It keeps the vocabulary compact while representing unseen, rare, or misspelled words by decomposing them into familiar subword pieces, avoiding out-of-vocabulary tokens',
          bn: 'এটি ভোকাবুলারি ছোট রাখে এবং অপরিচিত বা ভুল বানানের শব্দকে পরিচিত ক্ষুদ্র অংশে ভেঙে অর্থ প্রকাশ করতে পারে, ফলে কোনো শব্দ অচেনা থাকে না'
        },
        {
          en: 'It translates all foreign languages into Latin without using neural weights',
          bn: 'এটি কোনো নিউরাল ওয়েটস ছাড়াই সমস্ত বিদেশি ভাষাকে ল্যাটিনে রূপান্তর করে'
        },
        {
          en: 'It increases GPU memory bandwidth by 500 percent',
          bn: 'এটি গ্রাফিক্স কার্ডের মেমরি ব্যান্ডউইথ ৫০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It prevents computer monitors from emitting blue light',
          bn: 'এটি মনিটর থেকে ক্ষতিকর নীল আলো নির্গমন পুরোপুরি বন্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A whole-word dictionary fails on new words like "unprompted". Subwords break it into "un" + "prompt" + "ed".',
        bn: 'নতুন শব্দ পেলে সাধারণ ডিকশনারি আটকে যায়; কিন্তু সাবওয়ার্ড তা পরিচিত অংশে ভেঙে চিনে ফেলে।'
      },
      explanation: {
        en: 'Subword algorithms balance vocabulary efficiency with open-vocabulary expressiveness across diverse natural languages.',
        bn: 'সাবওয়ার্ড কৌশল ভোকাবুলারির আকার সীমিত রেখে যেকোনো জটিল বা নতুন শব্দ সঠিকভাবে প্রক্রিয়াকরণের সুযোগ দেয়।'
      }
    },
    {
      id: 'tks-ex4',
      kind: 'mcq',
      topic: 'greedy-decoding-reproducibility-limit',
      question: {
        en: 'While setting Temperature to 0 (greedy decoding) ensures reproducible completions, why does it NOT guarantee factual truth?',
        bn: 'টেম্পারেচার ০ (গ্রিডি ডিকোডিং) নির্ধারণ করলে প্রতিবার একই ফলাফল পাওয়া গেলেও কেন এটি তথ্যের নির্ভুলতার নিশ্চয়তা দেয় না?'
      },
      options: [
        {
          en: 'Because greedy decoding deterministically selects the model highest-probability token, which may reflect a plausible misconception learned from biased or flawed training data',
          bn: 'কারণ গ্রিডি ডিকোডিং কেবল সর্বোচ্চ সম্ভাব্যতার টোকেনটি বেছে নেয়, যা প্রশিক্ষণ ডেটার ভুল বা ভ্রান্ত ধারণার কারণে ভুলও হতে পারে'
        },
        {
          en: 'Because setting Temperature to 0 causes physical CPU overheating',
          bn: 'কারণ টেম্পারেচার ০ করলে প্রসেসর অতিরিক্ত গরম হয়ে যায়'
        },
        {
          en: 'Because greedy decoding was invented before mathematics existed',
          bn: 'কারণ গণিত আবিষ্কারের পূর্বে গ্রিডি ডিকোডিং পদ্ধতি তৈরি হয়েছিল'
        },
        {
          en: 'Because numbers cannot represent factual information',
          bn: 'কারণ সংখ্যার মাধ্যমে কখনোই বাস্তব তথ্য প্রকাশ করা সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'A model trained on falsehoods will output those same falsehoods with 100% certainty when temperature is 0.',
        bn: 'ভুল তথ্যে প্রশিক্ষিত মডেল টেম্পারেচার ০ থাকলে ১০০% নিশ্চিত তথ্যের মতোই ভুল পুনরাবৃত্তি করবে।'
      },
      explanation: {
        en: 'Argmax guarantees consistency across runs, but cannot correct underlying errors or biases encoded within model parameters.',
        bn: 'গ্রিডি ডিকোডিং পুনরাবৃত্তি নিশ্চিত করে, কিন্তু মডেলের ভেতরের ভুল বা পক্ষপাতিত্ব দূর করতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'tokens-sampling-quiz',
    title: {
      en: 'Tokens and Sampling Mechanics Quiz',
      bn: 'টোকেন এবং স্যাম্পলিং মেকানিক্স কুইজ'
    },
    questions: [
      {
        id: 'tks-q1',
        kind: 'mcq',
        topic: 'generation-loop-phases',
        question: {
          en: 'What is the precise step-by-step sequence executed during each iteration of autoregressive text generation in modern LLMs?',
          bn: 'আধুনিক এলএলএম-এ অটোরিগ্রেসিভ টেক্সট তৈরির প্রতিটি ধাপে কোন সঠিক কার্যক্রমটি ক্রমানুসারে সম্পন্ন হয়?'
        },
        options: [
          {
            en: 'Forward pass computing logits -> Apply temperature scaling -> Compute Softmax probabilities -> Apply Top-k/Top-p filters -> Sample token -> Append token to context -> Repeat',
            bn: 'লজিটস গণনা -> টেম্পারেচার স্কেলিং প্রয়োগ -> সফটম্যাক্স সম্ভাবনা নির্ণয় -> টপ-কে/টপ-পি ফিল্টারিং -> টোকেন নির্বাচন -> ইনপুটে টোকেন যোগ -> পুনরাবৃত্তি'
          },
          {
            en: 'Delete input -> Format disk -> Download fonts -> Render graphics -> Stop',
            bn: 'ইনপুট মুছে ফেলা -> ড্রাইভ ফরম্যাট -> ফন্ট ডাউনলোড -> গ্রাফিক্স রেন্ডার -> সমাপ্তি'
          },
          {
            en: 'Send email -> Wait for response -> Compile C++ -> Power off server',
            bn: 'ইমেইল পাঠানো -> উত্তরের অপেক্ষা -> সি++ কম্পাইল -> সার্ভার বন্ধ করা'
          },
          {
            en: 'Compress file -> Encrypt password -> Print document -> Sleep for 1 hour',
            bn: 'ফাইল কমপ্রেস -> পাসওয়ার্ড এনক্রিপ্ট -> প্রিন্ট করা -> ১ ঘণ্টা ঘুমানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think: forward pass -> logits -> temperature -> softmax -> filtering -> sampling -> append.',
          bn: 'মনে রাখুন: ফরওয়ার্ড পাস -> লজিটস -> টেম্পারেচার -> সফটম্যাক্স -> ফিল্টারিং -> স্যাম্পলিং -> ইনপুটে যুক্ত।'
        },
        explanation: {
          en: 'Autoregressive generation executes a closed loop, repeatedly evaluating logits and appending newly sampled tokens.',
          bn: 'অটোরিগ্রেসিভ জেনারেশন একটি পুনরাবৃত্ত চক্রের মাধ্যমে ক্রমাগত নতুন টোকেন তৈরি করে ইনপুটে যোগ করতে থাকে।'
        }
      },
      {
        id: 'tks-q2',
        kind: 'mcq',
        topic: 'temperature-entropy-effect',
        question: {
          en: 'How does setting a very high temperature (such as T = 2.0) affect the statistical entropy of the token probability distribution?',
          bn: 'অতিরিক্ত উচ্চ টেম্পারেচার (যেমন T = ২.০) নির্ধারণ করলে টোকেন সম্ভাব্যতা বিন্যাসের এনট্রপির (Entropy) ওপর কী প্রভাব পড়ে?'
        },
        options: [
          {
            en: 'It increases entropy toward maximum randomness, pulling the probabilities of rare and common tokens closer together and increasing hallucination rates',
            bn: 'এটি এনট্রপি বা বিশৃঙ্খলা সর্বোচ্চ মাত্রায় বাড়িয়ে দেয়, সাধারণ ও বিরল শব্দের সম্ভাবনা কাছাকাছি এনে কাল্পনিক বা অসংলগ্ন উত্তরের ঝুঁকি বাড়ায়'
          },
          {
            en: 'It reduces entropy to zero, forcing the model to repeat the same word endlessly',
            bn: 'এটি এনট্রপি শূন্যে নামিয়ে আনে এবং মডেলকে বারবার একই শব্দ বলতে বাধ্য করে'
          },
          {
            en: 'It turns off the electrical current inside the GPU memory chips',
            bn: 'এটি গ্রাফিক্স কার্ডের মেমরি চিপসের সমস্ত বিদ্যুৎ প্রবাহ বন্ধ করে দেয়'
          },
          {
            en: 'It converts the text output into a compressed JPEG image file',
            bn: 'এটি টেক্সট আউটপুটকে একটি কমপ্রেসড জেপিজি ছবিতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'High temperature smooths out the peaks, making all choices almost equally likely.',
          bn: 'উচ্চ টেম্পারেচার সম্ভাবনার পার্থক্য কমিয়ে সব শব্দকে প্রায় সমান সুযোগ করে দেয়।'
        },
        explanation: {
          en: 'High temperatures elevate distribution entropy, causing improbable tokens to be selected frequently, degrading coherence.',
          bn: 'বেশি টেম্পারেচারে এনট্রপি বেড়ে যাওয়ায় অদ্ভুত বা অপ্রাসঙ্গিক শব্দ চলে আসে যা লেখার অর্থবোধকতা নষ্ট করে।'
        }
      },
      {
        id: 'tks-q3',
        kind: 'mcq',
        topic: 'context-window-token-budget',
        question: {
          en: 'When feeding a 200000-token enterprise document collection into an LLM with a 128000-token context window, what architectural solution should engineers deploy?',
          bn: '১২৮০০০ টোকেন ধারণক্ষমতার এলএলএম-এ ২০০০০০ টোকেনের একটি বড় নথি ব্যবহারের ক্ষেত্রে প্রকৌশলীদের কোন স্থাপত্য সমাধান প্রয়োগ করা উচিত?'
        },
        options: [
          {
            en: 'Implement semantic chunking, vector embedding indexing, and a retrieval pipeline (RAG) to inject only the most relevant document chunks into the prompt context',
            bn: 'নথিগুলোকে খণ্ডে বিভক্ত করে ভেক্টর ইনডেক্সিং এবং রিট্রিভাল পাইপলাইন (RAG) তৈরি করা যাতে প্রম্পটে কেবল সবচেয়ে প্রাসঙ্গিক অংশ যুক্ত হয়'
          },
          {
            en: 'Paste the entire document into the prompt and ignore truncation error messages',
            bn: 'পুরো নথি প্রম্পটে পেস্ট করে ট্রাংকেশন বা কেটে যাওয়ার এরর মেসেজ উপেক্ষা করা'
          },
          {
            en: 'Set Temperature to 10.0 so the model reads the document faster',
            bn: 'টেম্পারেচার ১০.০ নির্ধারণ করা যাতে মডেল দ্রুত পুরো ফাইল পড়তে পারে'
          },
          {
            en: 'Delete half of the characters in the document at random',
            bn: 'নথি থেকে এলোমেলোভাবে অর্ধেক অক্ষর মুছে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'You cannot exceed the physical context window; you must retrieve only the relevant pieces.',
          bn: 'কনটেক্সট উইন্ডোর বেশি ডাটা একবারে দেওয়া অসম্ভব; তাই শুধুমাত্র প্রয়োজনীয় অংশ খুঁজে এনে যুক্ত করতে হয়।'
        },
        explanation: {
          en: 'RAG circumvents context window boundaries by retrieving and injecting only the semantically pertinent chunks.',
          bn: 'RAG পদ্ধতি নথির প্রাসঙ্গিক অংশটুকু আলাদা করে প্রম্পটে এনে মেমরির সীমাবদ্ধতার চমৎকার সমাধান দেয়।'
        }
      },
      {
        id: 'tks-q4',
        kind: 'mcq',
        topic: 'top-k-filter-behavior',
        question: {
          en: 'Given four candidate tokens with probabilities [0.50, 0.30, 0.15, 0.05], what happens when a Top-k filter with k = 2 is applied prior to sampling?',
          bn: '৪টি (চারটি) সম্ভাব্য টোকেন [০.৫০, ০.৩০, ০.১৫, ০.০৫] এর ওপর k = ২ সহ টপ-কে ফিল্টার প্রয়োগ করলে স্যাম্পলিংয়ের পূর্বে কী ঘটে?'
        },
        options: [
          {
            en: 'The bottom two tokens (0.15 and 0.05) are completely eliminated, and the remaining top two tokens are renormalized to probabilities [0.625, 0.375]',
            bn: 'নিচের দুটি টোকেন (০.১৫ এবং ০.০৫) সম্পূর্ণরূপে বাতিল হয় এবং অবশিষ্ট শীর্ষ দুটি টোকেন পুনর্নির্ধারিত হয়ে [০.৬২৫, ০.৩৭৫] সম্ভাবনা লাভ করে'
          },
          {
            en: 'All four tokens are deleted and the model halts execution immediately',
            bn: 'চারটি টোকেনই মুছে যায় এবং মডেল সাথে সাথে কাজ বন্ধ করে দেয়'
          },
          {
            en: 'The probabilities are multiplied by 2 and converted into integers',
            bn: 'সম্ভাবনাগুলোকে ২ দিয়ে গুণ করে পূর্ণসংখ্যায় রূপান্তর করা হয়'
          },
          {
            en: 'The top token is duplicated two times in the generated sentence',
            bn: 'উৎপাদিত বাক্যে শীর্ষ টোকেনটি পরপর দুইবার লেখা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'k=2 preserves only the top 2 items: 0.50 and 0.30. Their sum is 0.80, so 0.50/0.80 = 0.625 and 0.30/0.80 = 0.375.',
          bn: 'k=২ মানে শীর্ষ ২টি থাকবে (০.৫০ ও ০.৩০)। এদের যোগফল ০.৮০ দিয়ে ভাগ করলে নতুন মান হয় ০.৬২৫ ও ০.৩৭৫।'
        },
        explanation: {
          en: 'Top-k restricts the distribution to the k highest-ranked elements, renormalizing remaining probabilities to sum to 1.0.',
          bn: 'টপ-কে ফিল্টার শীর্ষ k সংখ্যক টোকেন রেখে বাকিগুলো বাদ দেয় এবং টিকে থাকা টোকেনগুলোর যোগফল ১.০ করতে রিনরমালাইজ করে।'
        }
      }
    ]
  }
};
