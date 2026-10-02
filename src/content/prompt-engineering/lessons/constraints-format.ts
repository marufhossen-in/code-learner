import type { Lesson } from '../../../lib/types';

export const ConstraintsFormatLesson: Lesson = {
  slug: 'constraints-format',
  tech: 'prompt-engineering',
  title: {
    en: 'Structured Output: JSON Schemas, Validation & Repair Loops',
    bn: 'স্ট্রাকচার্ড আউটপুট: JSON স্কিমা, ভ্যালিডেশন এবং রিপেয়ার লুপ'
  },
  summary: {
    en: 'Transform non-deterministic LLM text into reliable API contracts: enforce JSON Schemas, understand grammar-guided constrained decoding, and implement automated self-healing repair loops that elevate parsing success from 85% to 100%.',
    bn: 'অনির্দিষ্ট এলএলএম টেক্সটকে নির্ভরযোগ্য এপিআই চুক্তিতে রূপান্তর করুন: JSON স্কিমা প্রয়োগ, গ্রামার-গাইডেড কনস্ট্রেইন্ড ডিকোডিং এবং স্বয়ংক্রিয় সেলফ-হিলিং রিপেয়ার লুপ বাস্তবায়ন যা পার্সিং সাফল্য ৮৫% থেকে ১০০%-এ উন্নীত করে।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'structured-output-problem-heading',
      text: {
        en: 'The Non-Determinism Trap: Why Naive Prompts Break Production Parsers',
        bn: 'অনির্দিষ্টতার ফাঁদ: সাধারণ প্রম্পট কেন প্রোডাকশন পার্সারকে ভেঙে ফেলে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In backend software engineering, services communicate via strict data structures like JSON. Because Large Language Models are conversational autoregressive text predictors, simple instructions like "Output JSON" fail frequently in production. Models introduce conversational preamble ("Here is your JSON:"), wrap responses in Markdown fences, leave trailing commas, or omit required fields. Naive prompt instructions achieve only roughly 85% parsing reliability on edge cases, which is completely unacceptable for mission-critical pipelines.',
        bn: 'ব্যাকএন্ড সফটওয়্যার ইঞ্জিনিয়ারিংয়ে বিভিন্ন সার্ভিস JSON-এর মতো কঠোর ডেটা কাঠামোর মাধ্যমে যোগাযোগ করে। লার্জ ল্যাঙ্গুয়েজ মডেল যেহেতু মূলত কথোপকথনধর্মী টেক্সট তৈরি করে, তাই "JSON আউটপুট দাও"-এর মতো সাধারণ নির্দেশ প্রোডাকশনে প্রায়ই ব্যর্থ হয়। মডেল প্রায়ই অতিরিক্ত ভূমিকা ("এখানে আপনার JSON দেওয়া হলো:"), মার্কডাউন কোড ব্লক, অতিরিক্ত কমা কিংবা প্রয়োজনীয় ফিল্ড বাদ দিয়ে ফেলে। সাধারণ প্রম্পট নির্দেশ জটিল ক্ষেত্রে মাত্র প্রায় ৮৫% পার্সিং সাফল্য দেয়, যা কোনো প্রোডাকশন সিস্টেমের জন্য গ্রহণযোগ্য নয়।'
      }
    },
    {
      type: 'visual',
      id: 'schema-validation-repair-svg',
      caption: {
        en: 'Figure 1: Production schema enforcement pipeline with automated self-healing repair loops.',
        bn: 'চিত্র ১: স্বয়ংক্রিয় সেলফ-হিলিং রিপেয়ার লুপ সম্বলিত প্রোডাকশন স্কিমা পাইপলাইন।'
      },
      content: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PRODUCTION STRUCTURED OUTPUT & REPAIR PIPELINE</text>
  
  <!-- Step 1: Prompt Generation -->
  <g transform="translate(30, 60)">
    <rect width="210" height="240" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="210" height="36" rx="8" fill="#0284c7" />
    <text x="105" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Schema Injection 📄</text>
    <text x="14" y="65" fill="#38bdf8" font-size="11" font-family="monospace">Prompt Payload:</text>
    <text x="14" y="90" fill="#cbd5e1" font-size="10" font-family="monospace">• Strict JSON Schema</text>
    <text x="14" y="112" fill="#cbd5e1" font-size="10" font-family="monospace">• Field types & required</text>
    <text x="14" y="134" fill="#cbd5e1" font-size="10" font-family="monospace">• Delimited payload</text>
    <rect x="12" y="160" width="186" height="55" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="105" y="182" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Grammar-Guided</text>
    <text x="105" y="200" fill="#4ade80" font-size="10" font-family="monospace" text-anchor="middle">Constrained Decoding</text>
  </g>

  <!-- Step 2: Parser & Validator -->
  <g transform="translate(280, 60)">
    <rect width="240" height="240" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="240" height="36" rx="8" fill="#d97706" />
    <text x="120" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Runtime Validator 🔍</text>
    <text x="14" y="65" fill="#f59e0b" font-size="11" font-family="monospace">Verification Gates:</text>
    <text x="14" y="90" fill="#cbd5e1" font-size="10" font-family="monospace">Gate 1: JSON.parse() syntax</text>
    <text x="14" y="112" fill="#cbd5e1" font-size="10" font-family="monospace">Gate 2: Key existence (4 fields)</text>
    <text x="14" y="134" fill="#cbd5e1" font-size="10" font-family="monospace">Gate 3: Primitive type check</text>
    
    <rect x="15" y="160" width="100" height="40" rx="5" fill="#0f172a" stroke="#22c55e" />
    <text x="65" y="185" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">PASS ✅</text>
    
    <rect x="125" y="160" width="100" height="40" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="175" y="185" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">FAIL ❌</text>
    
    <text x="120" y="225" fill="#94a3b8" font-size="10" text-anchor="middle">Branch to database vs repair</text>
  </g>

  <!-- Step 3: Outcomes -->
  <g transform="translate(560, 60)">
    <rect width="250" height="240" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="250" height="36" rx="8" fill="#059669" />
    <text x="125" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Repair & Delivery 🚀</text>
    
    <!-- Success path -->
    <rect x="15" y="55" width="220" height="70" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="78" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">Path A: Valid Object</text>
    <text x="25" y="98" fill="#cbd5e1" font-size="10" font-family="monospace">Write to PostgreSQL DB</text>
    <text x="25" y="115" fill="#94a3b8" font-size="9" font-family="monospace">100% deterministic type safety</text>
    
    <!-- Repair path -->
    <rect x="15" y="145" width="220" height="75" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="168" fill="#f87171" font-size="11" font-family="sans-serif" font-weight="bold">Path B: Self-Healing Loop</text>
    <text x="25" y="188" fill="#cbd5e1" font-size="10" font-family="monospace">Feed error back to LLM</text>
    <text x="25" y="205" fill="#f59e0b" font-size="9" font-family="monospace">1 targeted retry clears 99% bugs</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'constrained-decoding-heading',
      text: {
        en: 'Grammar-Guided Constrained Decoding and Self-Healing Repair',
        bn: 'গ্রামার-গাইডেড কনস্ট্রেইন্ড ডিকোডিং এবং সেলফ-হিলিং মেরামত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern AI runtimes guarantee structured output through 2 layers. At the engine layer, Grammar-Guided Constrained Decoding builds a Context-Free Grammar parser over the JSON Schema. During inference, tokens that violate the grammar receive a probability of 0, making syntactically invalid output impossible. At the application layer, if an API provider lacks constrained decoding, developers deploy an automated Self-Healing Repair Loop: when a parse failure occurs, the exact validator error is fed back into a second prompt turn for immediate correction.',
        bn: 'আধুনিক এআই রানটাইম ২টি স্তরের মাধ্যমে সুনির্দিষ্ট আউটপুটের নিশ্চয়তা দেয়। ইঞ্জিন স্তরে, গ্রামার-গাইডেড কনস্ট্রেইন্ড ডিকোডিং JSON স্কিমার ওপর ভিত্তি করে একটি ব্যাকরণ কাঠামো তৈরি করে। অনুমানের সময় ব্যাকরণ লঙ্ঘনকারী যেকোনো টোকেনের সম্ভাবনা ০ করে দেওয়া হয়, যার ফলে ভুল সিনট্যাক্স তৈরি হওয়া অসম্ভব হয়ে পড়ে। অ্যাপ্লিকেশন স্তরে, কোনো এপিআই-তে কনস্ট্রেইন্ড ডিকোডিং না থাকলে ডেভেলপাররা স্বয়ংক্রিয় সেলফ-হিলিং রিপেয়ার লুপ ব্যবহার করেন: কোনো পার্সিং ত্রুটি ঘটলে সেই সুনির্দিষ্ট ত্রুটিটি দ্বিতীয় প্রম্পটে পাঠিয়ে তাৎক্ষণিক সংশোধন করিয়ে নেওয়া হয়।'
      }
    },
    {
      type: 'code',
      id: 'schema-validator-repair-ts',
      lang: 'typescript',
      caption: {
        en: 'TypeScript schema validator and self-healing repair prompt generator.',
        bn: 'TypeScript স্কিমা ভ্যালিডেটর এবং সেলফ-হিলিং রিপেয়ার প্রম্পট জেনারেটর।'
      },
      code: `interface OrderExtraction {
  orderId: number;
  items: string[];
  totalAmount: number;
  isExpedited: boolean;
}

export function validateOrderPayload(rawText: string): {
  success: boolean;
  data?: OrderExtraction;
  error?: string;
} {
  // Strip optional markdown fences if emitted by conversational models
  const cleaned = rawText.replace(new RegExp('\\x60\\x60\\x60json', 'g'), '').replace(new RegExp('\\x60\\x60\\x60', 'g'), '').trim();

  try {
    const parsed = JSON.parse(cleaned);

    // Validate existence of all 4 required fields
    if (typeof parsed.orderId !== 'number') {
      return { success: false, error: 'Field "orderId" is missing or not a number' };
    }
    if (!Array.isArray(parsed.items)) {
      return { success: false, error: 'Field "items" is missing or not an array' };
    }
    if (typeof parsed.totalAmount !== 'number') {
      return { success: false, error: 'Field "totalAmount" is missing or not a number' };
    }
    if (typeof parsed.isExpedited !== 'boolean') {
      return { success: false, error: 'Field "isExpedited" is missing or not a boolean' };
    }

    return { success: true, data: parsed as OrderExtraction };
  } catch (err) {
    return { success: false, error: 'JSON Syntax Error: ' + (err as Error).message };
  }
}

export function createRepairPrompt(badPayload: string, validationError: string): string {
  return 'SYSTEM: Your previous output failed strict JSON schema validation.\\n' +
    'ERROR: ' + validationError + '\\n' +
    'FAILED OUTPUT:\\n' + badPayload + '\\n\\n' +
    'INSTRUCTION: Fix the syntax or schema error. Return RAW JSON ONLY with 4 fields: orderId (number), items (string array), totalAmount (number), isExpedited (boolean).';
}

// Simulated malformed output with markdown and a missing boolean field
const malformedOutput = '{\\n  "orderId": 1042,\\n  "items": ["USB-C Cable", "Power Adapter"],\\n  "totalAmount": 49.99\\n}';

const firstPass = validateOrderPayload(malformedOutput);
console.log('First Pass Valid:', firstPass.success); // false
console.log('Detected Issue:', firstPass.error);     // Field "isExpedited" is missing or not a boolean

// Generate repair prompt for 1 retry turn
const repairQuery = createRepairPrompt(malformedOutput, firstPass.error || '');
console.log('Repair Prompt Ready: Length', repairQuery.length); // 326`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'JSON Schema',
          def: {
            en: 'Declarative blueprint specifying allowed property names, primitive types, and required fields for structured data payloads.',
            bn: 'সুনির্দিষ্ট ডেটা পেলোডের জন্য অনুমোদিত প্রপার্টির নাম, ডেটা টাইপ এবং আবশ্যক ফিল্ড নির্ধারণকারী নকশা।'
          }
        },
        {
          term: 'Constrained Decoding',
          def: {
            en: 'Inference technique that masks next-token probabilities to 0 if they violate a formal grammar or JSON schema.',
            bn: 'ইনফারেন্স কৌশল যা আনুষ্ঠানিক ব্যাকরণ বা JSON স্কিমা লঙ্ঘনকারী টোকেনের সম্ভাবনা শূন্য করে দিয়ে ভুল আউটপুট রোধ করে।'
          }
        },
        {
          term: 'Self-Healing Repair Loop',
          def: {
            en: 'An architectural pattern that captures validation errors and automatically prompts the model to correct its failed output.',
            bn: 'একটি আর্কিটেকচারাল প্যাটার্ন যা ভ্যালিডেশন ত্রুটি শনাক্ত করে স্বয়ংক্রিয়ভাবে দ্বিতীয় প্রম্পটের মাধ্যমে ভুল সংশোধন করিয়ে নেয়।'
          }
        },
        {
          term: 'Conversational Fluff',
          def: {
            en: 'Unwanted pleasantries, preambles, or markdown formatting emitted by an LLM that disrupt programmatic JSON parsers.',
            bn: 'মডেলের অতিরিক্ত ভূমিকা, কুশল বিনিময় বা মার্কডাউন ফরম্যাট যা সফটওয়্যার প্রোগ্রাম দ্বারা ডেটা পার্সিংয়ে বাধা সৃষ্টি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'constrained-decoding-mechanism-ex1',
      kind: 'mcq',
      topic: 'constrained-decoding-token-masking',
      question: {
        en: 'How does Grammar-Guided Constrained Decoding prevent syntactically invalid JSON at the inference layer?',
        bn: 'গ্রামার-গাইডেড কনস্ট্রেইন্ড ডিকোডিং কীভাবে ইনফারেন্স স্তরে ভুল সিনট্যাক্সের JSON আউটপুট হওয়া প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'It calculates valid syntax tokens according to the grammar and sets the logits of all invalid tokens to negative infinity',
          bn: 'এটি ব্যাকরণ অনুযায়ী বৈধ টোকেন হিসাব করে এবং সব অবৈধ টোকেনের সম্ভাবনা বা লজিট শূন্যের নিচে নামিয়ে বাতিল করে'
        },
        {
          en: 'It converts the language model into an offline SQLite database',
          bn: 'এটি ল্যাঙ্গুয়েজ মডেলকে একটি অফলাইন এসকিউলাইট ডেটাবেসে রূপান্তর করে'
        },
        {
          en: 'It runs a spelling checker over the model weights',
          bn: 'এটি মডেলের অভ্যন্তরীণ ওয়েটের ওপর বানান পরীক্ষক চালায়'
        },
        {
          en: 'It drops network packets containing curly braces',
          bn: 'এটি দ্বিতীয় বন্ধনী সম্বলিত সব নেটওয়ার্ক প্যাকেট বাতিল করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'By masking invalid tokens during next-token prediction, the model cannot physically sample an illegal character.',
        bn: 'টোকেন নির্বাচনের সময় অবৈধ টোকেনগুলোকে বাদ দিলে মডেল কোনো ভুল অক্ষর বেছে নিতে পারে না।'
      },
      explanation: {
        en: 'Constrained decoding modifies the softmax distribution so only tokens matching the JSON grammar can be chosen.',
        bn: 'কনস্ট্রেইন্ড ডিকোডিং সফটম্যাক্স ফিল্টার করে যাতে কেবল ব্যাকরণ-সম্মত টোকেনগুলোই নির্বাচিত হতে পারে।'
      }
    },
    {
      id: 'repair-loop-behavior-ex2',
      kind: 'mcq',
      topic: 'self-healing-feedback-mechanism',
      question: {
        en: 'In an automated Self-Healing Repair Loop, what information is fed back to the model in the retry prompt?',
        bn: 'একটি স্বয়ংক্রিয় সেলফ-হিলিং রিপেয়ার লুপে, পুনরায় অনুরোধ করার সময় মডেলকে কোন তথ্যটি ফেরত দেওয়া হয়?'
      },
      options: [
        {
          en: 'The exact validation error message and the failed payload so the model understands precisely what to fix',
          bn: 'সুনির্দিষ্ট ভ্যালিডেশন ত্রুটির বার্তা এবং ব্যর্থ আউটপুট যাতে মডেল স্পষ্টভাবে বুঝতে পারে কোথায় ঠিক করতে হবে'
        },
        {
          en: 'A random Wikipedia article',
          bn: 'উইকিপিডিয়ার একটি এলোমেলো প্রবন্ধ'
        },
        {
          en: 'The full source code of the Linux operating system kernel',
          bn: 'লিনাক্স অপারেটিং সিস্টেম কার্নেলের সম্পূর্ণ সোর্স কোড'
        },
        {
          en: 'A blank prompt with no text',
          bn: 'কোনো লেখা ছাড়া সম্পূর্ণ খালি একটি প্রম্পট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Clear diagnostic feedback allows the model to act as its own editor.',
        bn: 'সুনির্দিষ্ট ত্রুটির তথ্য দিলে মডেল নিজের ভুল নিজে সংশোধন করতে পারে।'
      },
      explanation: {
        en: 'Providing the failed payload alongside the parser exception enables targeted error correction in 1 quick retry turn.',
        bn: 'ব্যর্থ ডেটা এবং পার্সার ত্রুটির বিবরণ দিলে মডেল তাৎক্ষণিকভাবে ভুল অংশটুকু চিহ্নিত করে ঠিক করে দেয়।'
      }
    },
    {
      id: 'required-fields-validation-ex3',
      kind: 'mcq',
      topic: 'schema-fields-completeness',
      question: {
        en: 'In our order extraction example with 4 required fields, why did the initial payload fail validation?',
        bn: 'আমাদের ৪টি আবশ্যক ফিল্ড বিশিষ্ট অর্ডার এক্সট্রাকশন উদাহরণে, প্রাথমিক পেলোডটি কেন ভ্যালিডেশনে ব্যর্থ হয়েছিল?'
      },
      options: [
        {
          en: 'The required boolean field "isExpedited" was completely missing from the JSON object',
          bn: 'আবশ্যক বুলিয়ান ফিল্ড "isExpedited" JSON অবজেক্টের ভেতরে সম্পূর্ণ অনুপস্থিত ছিল'
        },
        {
          en: 'The orderId was written in Roman numerals',
          bn: 'অর্ডার আইডি রোমান সংখ্যায় লেখা ছিল'
        },
        {
          en: 'The items array contained 1000 products',
          bn: 'আইটেম অ্যারেতে ১০০০টি পণ্য অন্তর্ভুক্ত ছিল'
        },
        {
          en: 'The JSON object had an unsupported dark mode theme',
          bn: 'JSON অবজেক্টটিতে কোনো অসমর্থিত ডার্ক মোড থিম ছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Review the console error logged by our validateOrderPayload function.',
        bn: 'আমাদের validateOrderPayload ফাংশনের কনসোল এররটি খেয়াল করুন।'
      },
      explanation: {
        en: 'The model omitted isExpedited; strict schema validation caught the missing key before invalid data could enter the database.',
        bn: 'মডেল isExpedited ফিল্ডটি বাদ দিয়েছিল; কঠোর ভ্যালিডেশন সেই ভুল ধরে ডেটাবেসে অসম্পূর্ণ ডেটা যাওয়া রোধ করেছে।'
      }
    },
    {
      id: 'markdown-stripping-ex4',
      kind: 'mcq',
      topic: 'markdown-fences-cleaning',
      question: {
        en: 'Why do production parsers strip markdown code fences before calling JSON.parse() on LLM outputs?',
        bn: 'এলএলএম আউটপুটে JSON.parse() চালানোর আগে প্রোডাকশন পার্সারগুলো কেন মার্কডাউন কোড ব্লক মুছে ফেলে?'
      },
      options: [
        {
          en: 'Standard JSON.parse() strictly rejects backticks and markdown strings as SyntaxErrors',
          bn: 'আদর্শ JSON.parse() ব্যাকটিক বা মার্কডাউন টেক্সটকে সিনট্যাক্স এরর (SyntaxError) হিসেবে সাথে সাথে বাতিল করে'
        },
        {
          en: 'Markdown causes CPU registers to permanently corrupt',
          bn: 'মার্কডাউন ব্যবহারের ফলে সিপিইউ রেজিস্টার নষ্ট হয়ে যায়'
        },
        {
          en: 'Backticks require unicode decompression algorithms',
          bn: 'ব্যাকটিক চিহ্নের জন্য ইউনিকোড ডিকম্প্রেশন অ্যালগরিদমের প্রয়োজন হয়'
        },
        {
          en: 'It converts the text to Python bytecode',
          bn: 'এটি লেখাকে পাইথন বাইটকোডে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Native JSON specifications do not permit backticks or language tags outside string values.',
        bn: 'আদর্শ JSON স্পেসিফিকেশনে স্ট্রিং মানের বাইরে ব্যাকটিক চিহ্নের কোনো অনুমতি নেই।'
      },
      explanation: {
        en: 'Models frequently wrap output in markdown blocks; cleaning these fences prevents avoidable JSON syntax exceptions.',
        bn: 'মডেল প্রায়ই লেখার বাইরে মার্কডাউন ট্যাগ যোগ করে; এগুলো পরিষ্কার করলে অনাকাঙ্ক্ষিত পার্সিং ত্রুটি এড়ানো যায়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Structured Output and JSON Schema Quiz',
      bn: 'স্ট্রাকচার্ড আউটপুট এবং JSON স্কিমা কুইজ'
    },
    questions: [
      {
        id: 'quiz-pydantic-zod-benefits',
        kind: 'mcq',
        topic: 'schema-library-integration',
        question: {
          en: 'What advantage do schema validation libraries like Zod (TypeScript) and Pydantic (Python) offer when engineering LLM pipelines?',
          bn: 'এলএলএম পাইপলাইন তৈরির সময় Zod (TypeScript) বা Pydantic (Python)-এর মতো স্কিমা লাইব্রেরি ব্যবহারের প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'They provide end-to-end type safety, auto-generate JSON Schema definitions for prompts, and perform strict runtime parsing',
            bn: 'তারা এন্ড-টু-এন্ড টাইপ সেফটি নিশ্চিত করে, প্রম্পটের জন্য স্বয়ংক্রিয় JSON স্কিমা তৈরি করে এবং কঠোর রানটাইম যাচাইকরণ চালায়'
          },
          {
            en: 'They eliminate the need for GPU compute hardware',
            bn: 'তারা জিপিইউ হার্ডওয়্যার ব্যবহারের প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'They convert non-English prompts into assembly code',
            bn: 'তারা যেকোনো প্রম্পটকে অ্যাসেম্বলি কোডে রূপান্তর করে দেয়'
          },
          {
            en: 'They guarantee 0 millisecond network latency',
            bn: 'তারা শূন্য মিলিসেকেন্ড নেটওয়ার্ক লেটেন্সির নিশ্চয়তা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A single schema definition can power both the prompt prompt template and downstream runtime verification.',
          bn: 'একটি একক স্কিমা সংজ্ঞা একই সাথে প্রম্পট নির্দেশনা এবং কোডের অভ্যন্তরীণ ভ্যালিডেশন উভয় ক্ষেত্রে কাজ করে।'
        },
        explanation: {
          en: 'Libraries like Zod and Pydantic synchronize prompt schemas with static compiler types and runtime data validators.',
          bn: 'Zod ও Pydantic-এর মতো টুলগুলো প্রম্পটের স্কিমা এবং কোডের টাইপ চেকিংকে সমন্বিত করে ত্রুটিমুক্ত সিস্টেম নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-negative-constraints-limits',
        kind: 'mcq',
        topic: 'negative-constraints-pink-elephant',
        question: {
          en: 'Why do negative prompt constraints like "Do not mention competitors" sometimes fail in language models?',
          bn: '"প্রতিযোগীদের নাম উল্লেখ করবে না"-এর মতো নেগেটিভ প্রম্পট শর্ত মাঝে মাঝে ল্যাঙ্গুয়েজ মডেলে কেন ব্যর্থ হয়?'
        },
        options: [
          {
            en: 'The Pink Elephant problem: mentioning the forbidden concept in the prompt activates those semantic tokens in the model attention heads',
            bn: 'পিঙ্ক এলিফ্যান্ট সমস্যা: প্রম্পটে নিষিদ্ধ বিষয়ের নাম উল্লেখ করায় মডেলের অ্যাটেনশনে সেই সংক্রান্ত টোকেনগুলো সক্রিয় হয়ে ওঠে'
          },
          {
            en: 'Models are programmed to disobey negative words',
            bn: 'মডেলগুলো নেতিবাচক শব্দ অমান্য করার জন্য প্রোগ্রাম করা থাকে'
          },
          {
            en: 'Negative constraints reduce network bandwidth by 90 percent',
            bn: 'নেতিবাচক শর্ত নেটওয়ার্ক ব্যান্ডউইথ ৯০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'Language models cannot comprehend the English word "not"',
            bn: 'ল্যাঙ্গুয়েজ মডেল ইংরেজি "not" শব্দের অর্থ বুঝতে অক্ষম'
          }
        ],
        answer: 0,
        hint: {
          en: 'Instructing someone "Do NOT think of a pink elephant" makes them visualize a pink elephant.',
          bn: 'কাউকে "গোলাপি হাতির কথা ভাববে না" বললে অবচেতনভাবেই সে গোলাপি হাতির কথা চিন্তা করে।'
        },
        explanation: {
          en: 'Positive framing (stating what TO do rather than what NOT to do) reliably focuses attention on intended output behaviors.',
          bn: 'কী করা যাবে না তা না বলে কী করা উচিত (পজিটিভ ফ্রেমিং) তা স্পষ্টভাবে নির্দেশ করলে মডেল অনেক বেশি নির্ভরযোগ্য আচরণ করে।'
        }
      },
      {
        id: 'quiz-repair-loop-retry-budget',
        kind: 'mcq',
        topic: 'repair-loop-circuit-breaker',
        question: {
          en: 'Why must a Self-Healing Repair Loop include a strict maximum retry limit (such as 2 or 3 retries)?',
          bn: 'একটি সেলফ-হিলিং রিপেয়ার লুপে কেন একটি নির্দিষ্ট রিট্রাই সীমা (যেমন ২ বা ৩ বার) থাকা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'To prevent infinite execution loops and runaway API billing when an unrecoverable edge case triggers repeated failures',
            bn: 'জটিল কোনো ক্ষেত্রে বারবার ব্যর্থ হলে যাতে অসীম লুপ তৈরি না হয় এবং অতিরিক্ত এপিআই খরচ না বাড়ে তা নিশ্চিত করতে'
          },
          {
            en: 'Because APIs automatically ban IP addresses after 4 retries',
            bn: 'কারণ ৪ বার চেষ্টার পর এপিআই স্বয়ংক্রিয়ভাবে আইপি অ্যাড্রেস ব্যান করে দেয়'
          },
          {
            en: 'Retrying more than 3 times causes local hard drives to overheat',
            bn: '৩ বারের বেশি চেষ্টা করলে কম্পিউটারের হার্ডড্রাইভ অতিরিক্ত গরম হয়ে যায়'
          },
          {
            en: 'Language models stop functioning after 5 retries',
            bn: '৫ বার চেষ্টার পর ল্যাঙ্গুয়েজ মডেল কাজ করা বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Circuit breakers prevent cascading failures and financial exhaustion.',
          bn: 'সার্কিট ব্রেকার প্যাটার্ন অসীম লুপ এবং আর্থিক অপচয় রোধ করে।'
        },
        explanation: {
          en: 'Setting a hard ceiling (e.g. 2 retries) acts as a circuit breaker, falling back to a safe quarantine handler if repair fails.',
          bn: 'নির্দিষ্ট সীমা নির্ধারণ সার্কিট ব্রেকার হিসেবে কাজ করে, যার ফলে সমস্যা ঠিক না হলে সিস্টেম নিরাপদ ফলব্যাকে চলে যেতে পারে।'
        }
      },
      {
        id: 'quiz-constrained-decoding-overhead',
        kind: 'mcq',
        topic: 'constrained-decoding-latency-tradeoff',
        question: {
          en: 'What is a known limitation of running Grammar-Guided Constrained Decoding on extremely complex recursive schemas?',
          bn: 'অত্যন্ত জটিল রিকার্সিভ স্কিমার ওপর গ্রামার-গাইডেড কনস্ট্রেইন্ড ডিকোডিং চালানোর একটি পরিচিত সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'Constructing and traversing the grammar state machine can introduce slight CPU latency overhead per generated token',
            bn: 'ব্যাকরণ স্টেট মেশিন তৈরি এবং প্রতিটি টোকেনে তা পরীক্ষা করতে সামান্য সিপিইউ লেটেন্সি ওভারহেড তৈরি হতে পারে'
          },
          {
            en: 'It requires deleting all JSON files from the host server',
            bn: 'এর জন্য হোস্ট সার্ভার থেকে সব JSON ফাইল মুছে ফেলতে হয়'
          },
          {
            en: 'The generated output is encrypted and unreadable by humans',
            bn: 'তৈরিকৃত আউটপুট এনক্রিপ্ট হয়ে যায় এবং মানুষের পক্ষে পড়া অসম্ভব হয়'
          },
          {
            en: 'It only works with numbers between 0 and 10',
            bn: 'এটি কেবল ০ থেকে ১০ এর মধ্যবর্তী সংখ্যার ওপর কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Validating token masks dynamically against a complex state machine consumes compute cycles.',
          bn: 'প্রতিটি টোকেন বের করার সময় জটিল স্টেট মেশিনের নিয়ম যাচাই করতে কম্পিউটারের কিছু অতিরিক্ত সময় লাগে।'
        },
        explanation: {
          en: 'Evaluating grammar masks at each token generation step adds computational overhead compared to unconstrained sampling.',
          bn: 'প্রতিটি পদক্ষেপে ব্যাকরণ মাস্ক যাচাইয়ের কারণে সাধারণ স্যাম্পলিংয়ের চেয়ে কিছুটা অতিরিক্ত কম্পিউটেশনাল সময় ব্যয় হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'personas-style',
    title: {
      en: 'Personas, System Prompts, and Stylistic Calibration',
      bn: 'পারসোনা, সিস্টেম প্রম্পট এবং স্টাইলিশ ক্যালিব্রেশন'
    }
  }
};
