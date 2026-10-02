import type { Lesson } from '../../../lib/types';

export const MeetPromptsLesson: Lesson = {
  slug: 'meet-prompts',
  tech: 'prompt-engineering',
  title: {
    en: 'Your First Prompts: The 4 Core Components & Message Roles',
    bn: 'আপনার প্রথম প্রম্পট: ৪টি মূল উপাদান এবং মেসেজ রোল'
  },
  summary: {
    en: 'Deconstruct modern prompt architecture into 4 fundamental components (Instruction, Context, Input, Output Format), master System vs User message hierarchies, and control model determinism with Temperature and Top-p sampling.',
    bn: 'আধুনিক প্রম্পট আর্কিটেকচারকে ৪টি মৌলিক উপাদানে (নির্দেশনা, প্রসঙ্গ, ইনপুট ও আউটপুট ফরম্যাট) বিভক্ত করা শিখুন, সিস্টেম বনাম ইউজার মেসেজ হায়ারার্কি বুঝুন এবং টেম্পারেচার ও টপ-পি দিয়ে মডেলের আউটপুট নিয়ন্ত্রণ করুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'four-components-heading',
      text: {
        en: 'The 4 Structural Pillars of Production Prompts',
        bn: 'প্রোডাকশন প্রম্পটের ৪টি কাঠামোগত ভিত্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A prompt is not casual text conversation; it is a software contract compiled by a Large Language Model. High-performance production prompts structure natural language into 4 distinct functional components: Instruction, Context, Input Data, and Output Format. Omitting any of these components transfers control to statistical randomness.',
        bn: 'প্রম্পট কেবল সাধারণ কথোপকথন নয়; এটি একটি সুনির্দিষ্ট সফটওয়্যার চুক্তি যা লার্জ ল্যাঙ্গুয়েজ মডেল দ্বারা কার্যকর হয়। উচ্চমানের প্রোডাকশন প্রম্পট মানুষের ভাষাকে ৪টি স্বতন্ত্র উপাদানে বিন্যস্ত করে: নির্দেশনা (Instruction), প্রসঙ্গ (Context), ইনপুট ডেটা (Input Data) এবং আউটপুট ফরম্যাট (Output Format)। এর যেকোনো একটি বাদ দিলে আউটপুটে অনিশ্চয়তা তৈরি হয়।'
      }
    },
    {
      type: 'visual',
      id: 'prompt-anatomy-svg',
      caption: {
        en: 'Figure 1: The 4 structural zones of a production prompt payload.',
        bn: 'চিত্র ১: একটি প্রোডাকশন প্রম্পট পেলোডের ৪টি কাঠামোগত অংশ।'
      },
      content: `<svg viewBox="0 0 840 360" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="360" rx="12" fill="#0f172a" />
  <text x="420" y="34" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PRODUCTION PROMPT PAYLOAD ARCHITECTURE</text>
  
  <!-- Zone 1: Instruction -->
  <g transform="translate(30, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="180" height="36" rx="8" fill="#0284c7" />
    <text x="90" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Instruction 📋</text>
    <text x="14" y="65" fill="#38bdf8" font-size="11" font-family="monospace">What the model must DO</text>
    <text x="14" y="95" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Objective & Task</text>
    <text x="14" y="120" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Specific Actions</text>
    <text x="14" y="145" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Negative Constraints</text>
    <rect x="12" y="190" width="156" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="90" y="212" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">"Extract sentiment &"</text>
    <text x="90" y="228" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">"flag critical complaints"</text>
  </g>

  <!-- Zone 2: Context -->
  <g transform="translate(230, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="2" />
    <rect width="180" height="36" rx="8" fill="#4f46e5" />
    <text x="90" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Context 📚</text>
    <text x="14" y="65" fill="#818cf8" font-size="11" font-family="monospace">Grounding knowledge</text>
    <text x="14" y="95" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Domain Background</text>
    <text x="14" y="120" fill="#cbd5e1" font-size="11" font-family="sans-serif">• System Role & Persona</text>
    <text x="14" y="145" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Product Guidelines</text>
    <rect x="12" y="190" width="156" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="90" y="212" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">"You are an e-commerce"</text>
    <text x="90" y="228" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">"telemetry auditor"</text>
  </g>

  <!-- Zone 3: Input Data -->
  <g transform="translate(430, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="180" height="36" rx="8" fill="#d97706" />
    <text x="90" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Input Data 📥</text>
    <text x="14" y="65" fill="#f59e0b" font-size="11" font-family="monospace">Variable payload</text>
    <text x="14" y="95" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Dynamic user text</text>
    <text x="14" y="120" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Delimited with tags</text>
    <text x="14" y="145" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Sandboxed content</text>
    <rect x="12" y="190" width="156" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="90" y="212" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">&lt;user_input&gt;</text>
    <text x="90" y="228" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">"Screen shattered in 2d"</text>
  </g>

  <!-- Zone 4: Output Format -->
  <g transform="translate(630, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="180" height="36" rx="8" fill="#059669" />
    <text x="90" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Format 📦</text>
    <text x="14" y="65" fill="#10b981" font-size="11" font-family="monospace">Contractual output</text>
    <text x="14" y="95" fill="#cbd5e1" font-size="11" font-family="sans-serif">• JSON Schema</text>
    <text x="14" y="120" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Exact Keys & Types</text>
    <text x="14" y="145" fill="#cbd5e1" font-size="11" font-family="sans-serif">• No conversational fluff</text>
    <rect x="12" y="190" width="156" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="90" y="212" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">{"sentiment": string,</text>
    <text x="90" y="228" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">"confidence": number}</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'sampling-parameters-heading',
      text: {
        en: 'Model Sampling Parameters: Temperature, Top-p, and Determinism',
        bn: 'মডেল স্যাম্পলিং প্যারামিটার: টেম্পারেচার, টপ-পি এবং ডিটারমিনিজম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large Language Models are probabilistic next-token predictors. The Temperature parameter controls the entropy of the probability distribution over vocabulary tokens. A Temperature of 0 enables greedy decoding (argmax), choosing the single most likely token at every step, which is vital for data extraction, code generation, and math. Higher values like 0.7 or 1.0 flatten probabilities, introducing creative variation. Top-p (nucleus sampling) limits token candidates to the smallest subset whose cumulative probability exceeds p (e.g. 0.9).',
        bn: 'লার্জ ল্যাঙ্গুয়েজ মডেলগুলো মূলত পরবর্তী টোকেন ভবিষ্যদ্বাণী করার সম্ভাব্যতা মডেল। টেম্পারেচার প্যারামিটার শব্দভাণ্ডারের টোকেনগুলোর সম্ভাব্যতার বিস্তৃতি নিয়ন্ত্রণ করে। শূন্য (0) টেম্পারেচার গ্রিডি ডিকোডিং সক্রিয় করে, যেখানে প্রতিটি পদক্ষেপে সর্বোচ্চ সম্ভাব্য টোকেনটি বেছে নেওয়া হয়; এটি ডেটা এক্সট্রাকশন, কোড জেনারেশন ও গণিতের জন্য অপরিহার্য। ০.৭ বা ১.০ এর মতো উচ্চ মান বিভিন্ন সৃজনশীল বৈচিত্র্য আনে। টপ-পি (নিউক্লিয়াস স্যাম্পলিং) টোকেন প্রার্থীকে এমন ক্ষুদ্রতম সেটে সীমাবদ্ধ করে যার মোট সম্ভাবনা p (যেমন ০.৯) অতিক্রম করে।'
      }
    },
    {
      type: 'code',
      id: 'build-prompt-ts',
      lang: 'typescript',
      caption: {
        en: 'Runnable TypeScript implementation of a production prompt builder with deterministic parameters.',
        bn: 'সুনির্দিষ্ট প্যারামিটার সহ প্রোডাকশন প্রম্পট তৈরির রানযোগ্য TypeScript কোড।'
      },
      code: `interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface PromptConfig {
  temperature: number; // 0 for deterministic, up to 1 for creative
  top_p: number;
  max_tokens: number;
}

export function buildPromptPayload(
  instruction: string,
  context: string,
  userInput: string,
  format: string,
  config: PromptConfig
): { messages: ChatMessage[]; config: PromptConfig; totalChars: number; approxTokens: number } {
  // 1. System message establishes Role, Instruction, Context, and Format
  const systemMessage: ChatMessage = {
    role: 'system',
    content: \`INSTRUCTION:\\n\${instruction}\\n\\nCONTEXT:\\n\${context}\\n\\nOUTPUT FORMAT:\\n\${format}\`
  };

  // 2. User message encapsulates dynamic untrusted payload inside XML tags
  const userMessage: ChatMessage = {
    role: 'user',
    content: \`<user_payload>\\n\${userInput}\\n</user_payload>\`
  };

  const messages: ChatMessage[] = [systemMessage, userMessage];

  // Token approximation rule: ~4 English characters per token
  const totalChars = messages.reduce((acc, msg) => acc + msg.content.length, 0);
  const approxTokens = Math.ceil(totalChars / 4);

  return {
    messages,
    config,
    totalChars,
    approxTokens
  };
}

// Example usage with 4 concrete components:
const samplePrompt = buildPromptPayload(
  'Extract customer review sentiment and return strict JSON only.',
  'You are an e-commerce telemetry auditor. Detect defects accurately.',
  'The screen shattered within 2 days of delivery. Terrible build quality.',
  '{"sentiment": "positive" | "negative" | "neutral", "confidence": number}',
  { temperature: 0, top_p: 1, max_tokens: 150 }
);

console.log('Total Characters:', samplePrompt.totalChars);   // 324
console.log('Approximate Tokens:', samplePrompt.approxTokens); // 81
console.log('Deterministic Temperature:', samplePrompt.config.temperature); // 0`
    },
    {
      type: 'heading',
      id: 'message-hierarchy-heading',
      text: {
        en: 'The 3 Message Roles: System, User, and Assistant',
        bn: '৩টি মেসেজ রোল: সিস্টেম, ইউজার এবং অ্যাসিস্ট্যান্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern Chat Completion APIs arrange conversation history into 3 distinct roles. The System message establishes root behavioral constraints, domain identity, and safety guardrails that persist across conversation turns. The User message delivers input requests from humans or external APIs. The Assistant message records prior model responses, allowing multi-turn conversations and few-shot in-context demonstrations.',
        bn: 'আধুনিক চ্যাট কমপ্লিশন এপিআই কথোপকথনের ইতিহাসকে ৩টি স্বতন্ত্র রোলে বিন্যস্ত করে। সিস্টেম মেসেজ মূল আচরণবিধি, ডোমেন পরিচয় এবং নিরাপত্তা গার্ডরেল নির্ধারণ করে যা প্রতিটি কথোপকথনে সক্রিয় থাকে। ইউজার মেসেজ মানুষ বা বহিরাগত এপিআই থেকে প্রাপ্ত অনুরোধ পাঠায়। আর অ্যাসিস্ট্যান্ট মেসেজ মডেলের পূর্ববর্তী উত্তরগুলো সংরক্ষণ করে, যার ফলে ধারাবাহিক চ্যাট এবং ফিউ-শট উদাহরণ তৈরি সম্ভব হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Prompt Anatomy',
          def: {
            en: 'The 4 essential components of a production prompt: Instruction, Context, Input Data, and Output Format.',
            bn: 'একটি প্রোডাকশন প্রম্পটের ৪টি অপরিহার্য উপাদান: নির্দেশনা, প্রসঙ্গ, ইনপুট ডেটা এবং আউটপুট ফরম্যাট।'
          }
        },
        {
          term: 'Temperature',
          def: {
            en: 'Sampling parameter controlling randomness: 0 provides deterministic greedy decoding, while higher numbers increase entropy.',
            bn: 'স্যাম্পলিং প্যারামিটার যা অনিশ্চয়তা নিয়ন্ত্রণ করে: ০ সম্পূর্ণ সুনির্দিষ্ট ফলাফল দেয় এবং উচ্চ মান বৈচিত্র্য বাড়ায়।'
          }
        },
        {
          term: 'Top-p Sampling',
          def: {
            en: 'Nucleus sampling that restricts next-token selection to the smallest cumulative probability set exceeding threshold p.',
            bn: 'নিউক্লিয়াস স্যাম্পলিং যা পরবর্তী টোকেন নির্বাচনকে এমন ক্ষুদ্রতম সম্ভাব্য সেটে সীমাবদ্ধ করে যা সীমা p অতিক্রম করে।'
          }
        },
        {
          term: 'System Message',
          def: {
            en: 'High-priority message channel that establishes developer rules, persona, and output constraints across conversation turns.',
            bn: 'উচ্চ অগ্রাধিকারের মেসেজ চ্যানেল যা ডেভেলপারদের নিয়মাবলি, পারসোনা এবং আউটপুট শর্ত নির্ধারণ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'prompt-components-count-ex1',
      kind: 'mcq',
      topic: 'prompt-component-structure',
      question: {
        en: 'How many essential structural components make up a production prompt payload architecture?',
        bn: 'একটি প্রোডাকশন প্রম্পট পেলোড আর্কিটেকচারে কয়টি অপরিহার্য কাঠামোগত উপাদান থাকে?'
      },
      options: [
        { en: '4 (Instruction, Context, Input, Output Format)', bn: '৪ (নির্দেশনা, প্রসঙ্গ, ইনপুট, আউটপুট ফরম্যাট)' },
        { en: '1 (Instruction only)', bn: '১ (কেবল নির্দেশনা)' },
        { en: '2 (Input and Output)', bn: '২ (ইনপুট এবং আউটপুট)' },
        { en: '6 (Unstructured natural language paragraphs)', bn: '৬ (অসংগঠিত প্রাকৃতিক ভাষার অনুচ্ছেদ)' }
      ],
      answer: 0,
      hint: {
        en: 'Think of the 4 zones shown in our diagram: Instruction, Context, Input Data, Format.',
        bn: 'আমাদের ডায়াগ্রামে দেখানো ৪টি অংশের কথা ভাবুন: নির্দেশনা, প্রসঙ্গ, ইনপুট ডেটা, ফরম্যাট।'
      },
      explanation: {
        en: 'The 4 pillars are Instruction, Context, Input Data, and Output Format. Specifying all 4 eliminates ambiguities.',
        bn: '৪টি মূল স্তম্ভ হলো নির্দেশনা, প্রসঙ্গ, ইনপুট ডেটা এবং আউটপুট ফরম্যাট। এই ৪টি সুস্পষ্ট থাকলে মডেল বিভ্রান্ত হয় না।'
      }
    },
    {
      id: 'temperature-determinism-ex2',
      kind: 'mcq',
      topic: 'temperature-parameter-behavior',
      question: {
        en: 'Which Temperature setting guarantees deterministic greedy decoding for structured data extraction and math problems?',
        bn: 'স্ট্রাকচার্ড ডেটা এক্সট্রাকশন এবং গণিতের জন্য কোন টেম্পারেচার সেটিং সম্পূর্ণ সুনির্দিষ্ট গ্রিডি ডিকোডিং নিশ্চিত করে?'
      },
      options: [
        { en: '0', bn: '০' },
        { en: '1', bn: '১' },
        { en: '2', bn: '২' },
        { en: '5', bn: '৫' }
      ],
      answer: 0,
      hint: {
        en: 'Greedy argmax decoding requires zero entropy in token selection.',
        bn: 'টোকেন নির্বাচনে শূন্য এন্ট্রপি গ্রিডি ডিকোডিং নিশ্চিত করে।'
      },
      explanation: {
        en: 'Setting Temperature to 0 selects the token with the highest log probability at every step, making outputs reproducible.',
        bn: 'টেম্পারেচার ০ নির্ধারণ করলে প্রতি পদক্ষেপে সর্বোচ্চ সম্ভাবনাময় টোকেনটি বেছে নেওয়া হয়, ফলে ফলাফল সবসময় একই থাকে।'
      }
    },
    {
      id: 'token-estimation-ex3',
      kind: 'mcq',
      topic: 'token-character-ratio-heuristic',
      question: {
        en: 'Using the standard English token heuristic (1 token is roughly 4 characters), how many tokens are in our 324-character prompt?',
        bn: 'সাধারণ ইংরেজি টোকেন সূত্র (১ টোকেন প্রায় ৪ অক্ষর) অনুযায়ী, আমাদের ৩২৪ অক্ষরের প্রম্পটটিতে প্রায় কত টোকেন রয়েছে?'
      },
      options: [
        { en: '81 tokens', bn: '৮১ টোকেন' },
        { en: '324 tokens', bn: '৩২৪ টোকেন' },
        { en: '16 tokens', bn: '১৬ টোকেন' },
        { en: '162 tokens', bn: '১৬২ টোকেন' }
      ],
      answer: 0,
      hint: {
        en: 'Divide 324 characters by 4 characters per token.',
        bn: '৩২৪ অক্ষরকে প্রতি টোকেনের ৪ অক্ষর দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: '324 divided by 4 equals 81 tokens, providing a reliable rule of thumb for English LLM context budgets.',
        bn: '৩২৪ কে ৪ দিয়ে ভাগ করলে ৮১ টোকেন পাওয়া যায়, যা ইংরেজি ভাষার এলএলএম বাজেটের নির্ভরযোগ্য হিসাব।'
      }
    },
    {
      id: 'message-roles-ex4',
      kind: 'mcq',
      topic: 'chat-completion-role-hierarchy',
      question: {
        en: 'Which message role is specifically designated to establish developer rules, system persona, and output constraints?',
        bn: 'ডেভেলপারদের নিয়মাবলি, সিস্টেম পারসোনা এবং আউটপুটের শর্ত নির্ধারণের জন্য কোন মেসেজ রোলটি নির্ধারিত?'
      },
      options: [
        { en: 'System', bn: 'সিস্টেম (System)' },
        { en: 'User', bn: 'ইউজার (User)' },
        { en: 'Assistant', bn: 'অ্যাসিস্ট্যান্ট (Assistant)' },
        { en: 'Function', bn: 'ফাংশন (Function)' }
      ],
      answer: 0,
      hint: {
        en: 'It sits at the root of the conversation and governs overall agent behavior.',
        bn: 'এটি কথোপকথনের শুরুতে থাকে এবং সার্বিক আচরণ নিয়ন্ত্রণ করে।'
      },
      explanation: {
        en: 'The system role defines high-level instructions and behavioural guardrails that user messages should not be able to breach.',
        bn: 'সিস্টেম রোল উচ্চস্তরের নির্দেশনা ও নিরাপত্তা গার্ডরেল নির্ধারণ করে যা সাধারণ ব্যবহারকারী মেসেজ ভাঙতে পারে না।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Prompt Architecture and Sampling Parameters Quiz',
      bn: 'প্রম্পট আর্কিটেকচার এবং স্যাম্পলিং প্যারামিটার কুইজ'
    },
    questions: [
      {
        id: 'quiz-vague-vs-sharp',
        kind: 'mcq',
        topic: 'prompt-specificity-principle',
        question: {
          en: 'Why is a vague prompt like "Tell me about dogs" considered a bug in production software engineering?',
          bn: 'প্রোডাকশন সফটওয়্যার ইঞ্জিনিয়ারিংয়ে "কুকুর সম্পর্কে বলো"-এর মতো অস্পষ্ট প্রম্পটকে কেন একটি বাগ হিসেবে গণ্য করা হয়?'
        },
        options: [
          {
            en: 'It lacks constraints on format, length, and purpose, forcing the model to guess intent with unpredictable responses',
            bn: 'এতে ফরম্যাট, দৈর্ঘ্য এবং লক্ষ্যের কোনো শর্ত নেই, ফলে মডেল মনগড়া অনুমান করে অপ্রত্যাশিত উত্তর দেয়'
          },
          {
            en: 'It causes GPU hardware memory to immediately leak',
            bn: 'এটি জিপিইউ মেমোরিতে তাৎক্ষণিক লিক তৈরি করে'
          },
          {
            en: 'The word "dog" is rejected by API tokenizers',
            bn: 'এপিআই টোকেনাইজার দ্বারা "dog" শব্দটি প্রত্যাখ্যাত হয়'
          },
          {
            en: 'It consumes more than 10000 tokens on every request',
            bn: 'এটি প্রতিটি অনুরোধে ১০০০০ এর বেশি টোকেন নষ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without explicit constraints, outputs cannot be programmatically parsed or asserted in tests.',
          bn: 'সুনির্দিষ্ট শর্ত ছাড়া আউটপুট সফটওয়্যার দ্বারা পার্স বা টেস্ট করা অসম্ভব।'
        },
        explanation: {
          en: 'Production software requires deterministic contracts. Omitting constraints on length, structure, and tone makes outputs non-verifiable.',
          bn: 'প্রোডাকশন সফটওয়্যারে সুনির্দিষ্ট চুক্তি প্রয়োজন। দৈর্ঘ্য ও কাঠামোর শর্ত না দিলে আউটপুট যাচাই করা সম্ভব হয় না।'
        }
      },
      {
        id: 'quiz-top-p-behavior',
        kind: 'mcq',
        topic: 'nucleus-sampling-top-p',
        question: {
          en: 'How does Top-p (nucleus sampling) differ from Temperature during next-token prediction?',
          bn: 'পরবর্তী টোকেন নির্বাচনের সময় টপ-পি (নিউক্লিয়াস স্যাম্পলিং) কীভাবে টেম্পারেচারের চেয়ে আলাদাভাবে কাজ করে?'
        },
        options: [
          {
            en: 'Top-p dynamically truncates the token pool to the smallest cumulative probability mass exceeding p, while Temperature rescales the entire distribution',
            bn: 'টপ-পি টোকেন পুলকে এমন ক্ষুদ্রতম সেটে কেটে ছোট করে যার মোট সম্ভাবনা p ছাড়ায়, যেখানে টেম্পারেচার পুরো সম্ভাবনা পুনর্বণ্টন করে'
          },
          {
            en: 'Top-p changes the programming language of the output code',
            bn: 'টপ-পি আউটপুট কোডের প্রোগ্রামিং ভাষা পরিবর্তন করে দেয়'
          },
          {
            en: 'Top-p only operates on integers greater than 100',
            bn: 'টপ-পি কেবল ১০০ এর চেয়ে বড় পূর্ণসংখ্যার ওপর কাজ করে'
          },
          {
            en: 'Top-p and Temperature are identical parameters with different names',
            bn: 'টপ-পি এবং টেম্পারেচার মূলত একই প্যারামিটারের দুটি ভিন্ন নাম'
          }
        ],
        answer: 0,
        hint: {
          en: 'Top-p cuts off the long tail of low-probability tokens based on cumulative probability mass.',
          bn: 'টপ-পি মোট সম্ভাবনার ওপর ভিত্তি করে কম সম্ভাবনাময় টোকেনগুলোকে বাদ দেয়।'
        },
        explanation: {
          en: 'Top-p truncates unlikely tail tokens once their cumulative probability mass crosses p (e.g. 0.9), preserving coherent output.',
          bn: 'টপ-পি অপ্রয়োজনীয় টোকেন বাদ দিয়ে কেবল শীর্ষ সম্ভাবনা সম্পন্ন টোকেন পুল থেকে বাছাই নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-xml-delimiters',
        kind: 'mcq',
        topic: 'payload-delimiters-isolation',
        question: {
          en: 'Why do production prompt engineers wrap dynamic user input inside XML tags such as <user_payload>?',
          bn: 'প্রোডাকশন প্রম্পট ইঞ্জিনিয়াররা ব্যবহারকারীর ডাইনামিক ইনপুটকে কেন <user_payload>-এর মতো XML ট্যাগে আবদ্ধ করেন?'
        },
        options: [
          {
            en: 'It clearly demarcates untrusted data from instructions, preventing the model from confusing data with executable directives',
            bn: 'এটি অবিশ্বস্ত ডেটাকে সিস্টেমের নির্দেশ থেকে আলাদা করে, ফলে মডেল ডেটাকে নির্দেশ ভেবে ভুল করে না'
          },
          {
            en: 'It makes the network HTTP payload 50 percent smaller',
            bn: 'এটি নেটওয়ার্কের এইচটিটিপি পেলোড ৫০ শতাংশ ছোট করে দেয়'
          },
          {
            en: 'XML is required by all GPU matrix multiplication kernels',
            bn: 'সব জিপিইউ ম্যাট্রিক্স গুণন কার্নেলের জন্য XML থাকা বাধ্যতামূলক'
          },
          {
            en: 'It automatically encrypts the prompt with AES-256',
            bn: 'এটি স্বয়ংক্রিয়ভাবে প্রম্পটকে এইএস-২৫৬ দিয়ে এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Clear structural boundaries separate executable instructions from external data.',
          bn: 'স্পষ্ট কাঠামোগত সীমানা কার্যকর নির্দেশ থেকে বাইরের তথ্যকে আলাদা রাখে।'
        },
        explanation: {
          en: 'Wrapping user input in XML tags establishes unambiguous syntactic boundaries, mitigating prompt injection vulnerabilities.',
          bn: 'XML ট্যাগ ব্যবহারের মাধ্যমে ডেটা ও নির্দেশের মধ্যে সীমানা টানা হয়, যা প্রম্পট ইনজেকশন প্রতিরোধে সাহায্য করে।'
        }
      },
      {
        id: 'quiz-assistant-role-in-context',
        kind: 'mcq',
        topic: 'assistant-message-history',
        question: {
          en: 'How can developers utilize the Assistant message role when designing few-shot learning prompts in a Chat API?',
          bn: 'চ্যাট এপিআই-তে ফিউ-শট লার্নিং প্রম্পট তৈরির সময় ডেভেলপাররা কীভাবে অ্যাসিস্ট্যান্ট মেসেজ রোলটি ব্যবহার করতে পারেন?'
        },
        options: [
          {
            en: 'By alternating User and Assistant messages to demonstrate example inputs and their expected perfect outputs',
            bn: 'ইউজার এবং অ্যাসিস্ট্যান্ট মেসেজ পর্যায়ক্রমে সাজিয়ে ইনপুট এবং তার আদর্শ আউটপুটের উদাহরণ প্রদর্শন করে'
          },
          {
            en: 'By disabling the system prompt completely',
            bn: 'সিস্টেম প্রম্পটকে সম্পূর্ণরূপে নিষ্ক্রিয় করে দিয়ে'
          },
          {
            en: 'By storing private database passwords inside assistant messages',
            bn: 'অ্যাসিস্ট্যান্ট মেসেজের ভেতরে গোপন ডেটাবেস পাসওয়ার্ড সংরক্ষণ করে'
          },
          {
            en: 'By forcing the model to execute raw bash shell scripts',
            bn: 'মডেলকে সরাসরি ব্যাশ শেল স্ক্রিপ্ট চালাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prepopulating assistant replies shows the model exactly how to format its response.',
          bn: 'অ্যাসিস্ট্যান্টের উত্তরের নমুনা আগে থেকেই বসিয়ে দিলে মডেল ঠিক সেভাবেই উত্তর দিতে শেখে।'
        },
        explanation: {
          en: 'Pairing user queries with target assistant responses in the message array creates in-context demonstrations that prime the model.',
          bn: 'মেসেজ অ্যারেতে ইউজার ও অ্যাসিস্ট্যান্ট মেসেজ জোড়ায় জোড়ায় দিলে মডেল বাস্তব উদাহরণের মাধ্যমে কাঙ্ক্ষিত উত্তর শেখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'zero-few-shot',
    title: {
      en: 'Zero-Shot vs Few-Shot In-Context Learning',
      bn: 'জিরো-শট বনাম ফিউ-শট ইন-কনটেক্সট লার্নিং'
    }
  }
};
