import type { Lesson } from '../../../lib/types';

export const MeetAiApisLesson: Lesson = {
  slug: 'meet-ai-apis',
  tech: 'ai-apis',
  title: {
    en: 'Your First AI API Call: Chat Completions Protocol & Token Mechanics',
    bn: 'আপনার প্রথম এআই এপিআই কল: চ্যাট কমপ্লিশন প্রোটোকল এবং টোকেন মেকানিক্স'
  },
  summary: {
    en: 'Take your first steps into enterprise AI engineering: construct Chat Completions REST payloads, manage Bearer authentication headers, understand message roles, and master token consumption heuristics with 4 characters per token.',
    bn: 'এন্টারপ্রাইজ এআই ইঞ্জিনিয়ারিংয়ে আপনার প্রথম পদক্ষেপ নিন: চ্যাট কমপ্লিশন REST পেলোড তৈরি, বিয়ারার প্রমাণীকরণ হেডার পরিচালনা, মেসেজ রোল অনুধাবন এবং প্রতি টোকেনে ৪ অক্ষরের সূত্রে টোকেন ব্যবহার হিসাব।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'chat-completions-protocol-heading',
      text: {
        en: 'The Universal Chat Completions REST Specification',
        bn: 'সার্বজনীন চ্যাট কমপ্লিশন REST স্পেসিফিকেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern foundation models from OpenAI, Anthropic, and open-weight providers communicate over a standardized HTTP POST (the request method for sending data) protocol at endpoints like /v1/chat/completions. Every request requires an Authorization header with a secret Bearer token and a JSON payload defining the target model and an array of message objects. The server responds with an HTTP 200 payload containing the generated response choices and detailed usage token telemetry.',
        bn: 'ওপেনএআই, অ্যানথ্রপিক এবং অন্যান্য প্রোভাইডারের আধুনিক ফাউন্ডেশন মডেলগুলো /v1/chat/completions-এর মতো এন্ডপয়েন্টে একটি প্রমিত HTTP POST (সার্ভারে ডেটা পাঠানোর মেথড) প্রোটোকলের মাধ্যমে যোগাযোগ করে। প্রতিটি অনুরোধে গোপন বিয়ারার টোকেন সম্বলিত Authorization হেডার এবং মডেলের নাম ও মেসেজ অবজেক্টের অ্যারে সহ একটি JSON পেলোড পাঠাতে হয়। সার্ভার সফলভাবে HTTP ২০০ রেসপন্স পাঠায় যাতে মডেলের তৈরি উত্তর এবং টোকেন ব্যবহারের সম্পূর্ণ বিবরণ অন্তর্ভুক্ত থাকে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Complete request and response lifecycle of the Chat Completions REST protocol.',
        bn: 'চিত্র ১: চ্যাট কমপ্লিশন REST প্রোটোকলের পূর্ণাঙ্গ রিকোয়েস্ট এবং রেসপন্স চক্র।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">CHAT COMPLETIONS REST PROTOCOL LIFECYCLE</text>
  
  <!-- Client Request -->
  <g transform="translate(30, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#0284c7" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Client HTTP POST Request 📤</text>
    
    <rect x="15" y="50" width="330" height="45" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="68" fill="#38bdf8" font-size="10" font-family="monospace">Headers:</text>
    <text x="25" y="84" fill="#cbd5e1" font-size="10" font-family="monospace">Authorization: Bearer sk-proj-***</text>
    
    <rect x="15" y="105" width="330" height="120" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="125" fill="#818cf8" font-size="10" font-family="monospace">JSON Payload Body:</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="10" font-family="monospace">{ "model": "gpt-4o-mini",</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="10" font-family="monospace">  "messages": [</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="10" font-family="monospace">    {"role": "system", "content": "..."},</text>
    <text x="25" y="205" fill="#cbd5e1" font-size="10" font-family="monospace">    {"role": "user", "content": "..."} ],</text>
    <text x="25" y="220" fill="#cbd5e1" font-size="10" font-family="monospace">  "max_tokens": 150 }</text>
  </g>

  <!-- Server Response -->
  <g transform="translate(450, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#059669" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. AI Gateway HTTP 200 Response 📥</text>
    
    <rect x="15" y="50" width="330" height="85" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="70" fill="#10b981" font-size="10" font-family="monospace">Generated Output Choice:</text>
    <text x="25" y="90" fill="#cbd5e1" font-size="10" font-family="monospace">choices[0].message.content</text>
    <text x="25" y="110" fill="#e2e8f0" font-size="10" font-family="sans-serif">"Active voice boosts user clarity."</text>
    <text x="25" y="125" fill="#94a3b8" font-size="9" font-family="monospace">finish_reason: "stop"</text>
    
    <rect x="15" y="145" width="330" height="80" rx="5" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="165" fill="#4ade80" font-size="10" font-family="sans-serif" font-weight="bold">Usage Telemetry Ledger:</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="10" font-family="monospace">prompt_tokens: 28 (Input)</text>
    <text x="25" y="202" fill="#cbd5e1" font-size="10" font-family="monospace">completion_tokens: 14 (Output)</text>
    <text x="25" y="218" fill="#4ade80" font-size="10" font-family="monospace" font-weight="bold">total_tokens: 42</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'token-mechanics-heading',
      text: {
        en: 'Token Mechanics: How Language Models Measure Computation',
        bn: 'টোকেন মেকানিক্স: ল্যাঙ্গুয়েজ মডেল কীভাবে কম্পিউটেশন পরিমাপ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike traditional web APIs that bill by request count or bandwidth bytes, AI APIs bill strictly by token volume. Foundation models do not process raw strings; a byte-pair encoding (BPE) parser slices incoming text into sub-word units. In English prose, 1 unit averages roughly 4 characters or 0.75 words. A 28-token prompt generating 14 completion items consumes 42 units in total. Understanding this numeric ratio is crucial because generated output costs 3 to 4 times more than prompt input.',
        bn: 'অনুরোধের সংখ্যা বা ব্যান্ডউইথের ওপর ভিত্তি করে বিল করা সাধারণ ওয়েব এপিআই-এর বিপরীতে এআই এপিআই সম্পূর্ণভাবে টোকেনের পরিমাণের ওপর বিল করে। ফাউন্ডেশন মডেলগুলো সরাসরি টেক্সট পড়ে না; বাইট-পেয়ার এনকোডিং (BPE) পার্সার লেখাকে কতগুলো সাব-ওয়ার্ড ইউনিটে ভাগ করে। ইংরেজি লেখায় ১টি ইউনিট গড়ে প্রায় ৪টি অক্ষর বা ০.৭৫টি শব্দের সমান। একটি ২৮ টোকেনের প্রম্পট থেকে ১৪টি আউটপুট আইটেম তৈরি হলে মোট ৪২টি ইউনিট ব্যয় হয়। এই সংখ্যাগত অনুপাত জানা অত্যন্ত জরুরি কারণ জেনারেট করা আউটপুটের খরচ ইনপুটের চেয়ে ৩ থেকে ৪ গুণ বেশি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation of a production Chat Completions payload constructor and token cost estimator.',
        bn: 'চ্যাট কমপ্লিশন পেলোড তৈরি এবং টোকেন খরচ পরিমাপের TypeScript কোড।'
      },
      code: `interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature: number;
  max_tokens: number;
}

export function constructChatPayload(
  modelName: string,
  systemInstructions: string,
  userQuery: string,
  maxOutputTokens: number
): {
  requestBody: ChatCompletionRequest;
  estimatedPromptTokens: number;
  maxTotalBudget: number;
} {
  const messages: ChatMessage[] = [
    { role: 'system', content: systemInstructions },
    { role: 'user', content: userQuery }
  ];

  // English token heuristic: ~4 characters per token
  const totalPromptChars = messages.reduce((acc, m) => acc + m.content.length, 0);
  const estimatedPromptTokens = Math.ceil(totalPromptChars / 4);

  const requestBody: ChatCompletionRequest = {
    model: modelName,
    messages,
    temperature: 0, // Deterministic greedy decoding
    max_tokens: maxOutputTokens
  };

  return {
    requestBody,
    estimatedPromptTokens,
    maxTotalBudget: estimatedPromptTokens + maxOutputTokens
  };
}

// Concrete execution example
const systemPrompt = 'You are an API technical documentation assistant. Answer concisely.';
const userMessage = 'What HTTP header transmits the secret API key in Chat Completions?';

const payload = constructChatPayload(
  'gpt-4o-mini',
  systemPrompt,
  userMessage,
  150
);

console.log('Target Model:', payload.requestBody.model);
console.log('Estimated Prompt Tokens:', payload.estimatedPromptTokens); // 36
console.log('Max Total Token Ceiling:', payload.maxTotalBudget);         // 186`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Chat Completions API',
          def: {
            en: 'Standardized HTTP POST REST interface for submitting multi-turn message arrays and receiving generated text completions.',
            bn: 'বহুধাপের মেসেজ অ্যারে পাঠিয়ে মডেলের তৈরি উত্তর গ্রহণের জন্য আদর্শ HTTP POST REST ইন্টারফেস।'
          }
        },
        {
          term: 'Bearer Token',
          def: {
            en: 'Cryptographic secret key passed in HTTP Authorization headers to authenticate and meter API client requests.',
            bn: 'গোপন নিরাপত্তা চাবি যা ক্লায়েন্টের অনুরোধ প্রমাণীকরণ ও ব্যবহারের হিসাব রাখতে HTTP Authorization হেডারে পাঠানো হয়।'
          }
        },
        {
          term: 'Tokenization',
          def: {
            en: 'The algorithmic process of segmenting raw text strings into discrete numerical tokens using byte-pair encoding.',
            bn: 'বাইট-পেয়ার এনকোডিং ব্যবহার করে সাধারণ লেখাকে কতগুলো পৃথক গাণিতিক টোকেনে বিভক্ত করার অ্যালগরিদম প্রক্রিয়া।'
          }
        },
        {
          term: 'Usage Telemetry',
          def: {
            en: 'The server response metadata reporting exact counts of prompt_tokens, completion_tokens, and total_tokens consumed.',
            bn: 'সার্ভার রেসপন্সের মেটাডাটা যা ইনপুট টোকেন, আউটপুট টোকেন এবং মোট ব্যয়ের সঠিক হিসাব জানিয়ে দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bearer-header-auth-ex1',
      kind: 'mcq',
      topic: 'http-authorization-bearer-header',
      question: {
        en: 'Which HTTP header is universally used to transmit secret API credentials to foundation model endpoints?',
        bn: 'ফাউন্ডেশন মডেল এন্ডপয়েন্টে গোপন এপিআই চাবি পাঠাতে সার্বজনীনভাবে কোন HTTP হেডারটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'Authorization: Bearer sk-...', bn: 'Authorization: Bearer sk-...' },
        { en: 'Cookie: session_id=123', bn: 'Cookie: session_id=123' },
        { en: 'Content-Type: text/plain', bn: 'Content-Type: text/plain' },
        { en: 'Accept-Encoding: gzip', bn: 'Accept-Encoding: gzip' }
      ],
      answer: 0,
      hint: {
        en: 'The standard Bearer authentication scheme transmits API keys securely.',
        bn: 'আদর্শ বিয়ারার প্রমাণীকরণ পদ্ধতি এপিআই চাবি নিরাপদে পাঠাতে সাহায্য করে।'
      },
      explanation: {
        en: 'RFC 6750 specifies the Authorization: Bearer token pattern for authenticating stateless REST API calls.',
        bn: 'RFC ৬৭৫০ স্পেসিফিকেশন অনুযায়ী স্টেটলেস REST কলে বিয়ারার টোকেন ব্যবহার করে প্রমাণীকরণ নিশ্চিত করা হয়।'
      }
    },
    {
      id: 'token-estimation-math-ex2',
      kind: 'mcq',
      topic: 'token-character-estimation-ratio',
      question: {
        en: 'Using the standard 4-character English token heuristic, how many prompt tokens are estimated for a 120-character input?',
        bn: 'প্রতি টোকেনে ৪ অক্ষরের সাধারণ ইংরেজি সূত্র অনুযায়ী, ১২০ অক্ষরের ইনপুটের জন্য প্রায় কতটি প্রম্পট টোকেন প্রয়োজন হবে?'
      },
      options: [
        { en: '30 tokens', bn: '৩০ টোকেন' },
        { en: '120 tokens', bn: '১২০ টোকেন' },
        { en: '480 tokens', bn: '৪৮০ টোকেন' },
        { en: '4 tokens', bn: '৪ টোকেন' }
      ],
      answer: 0,
      hint: {
        en: 'Divide 120 characters by 4 characters per token.',
        bn: '১২০ অক্ষরকে প্রতি টোকেনের ৪ অক্ষর দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: '120 characters divided by 4 yields approximately 30 tokens, providing a fast offline budget estimate.',
        bn: '১২০ কে ৪ দিয়ে ভাগ করলে প্রায় ৩০ টোকেন পাওয়া যায়, যা দ্রুত বাজেট নির্ধারণে সহায়তা করে।'
      }
    },
    {
      id: 'output-vs-input-cost-ex3',
      kind: 'mcq',
      topic: 'token-pricing-asymmetry',
      question: {
        en: 'Why do AI API providers price completion (output) tokens 3 to 4 times higher than prompt (input) tokens?',
        bn: 'এআই এপিআই প্রোভাইডাররা প্রম্পট (ইনপুট) টোকেনের চেয়ে কমপ্লিশন (আউটপুট) টোকেনের দাম কেন ৩ থেকে ৪ গুণ বেশি নির্ধারণ করে?'
      },
      options: [
        {
          en: 'Input tokens are processed in parallel matrix multiplications, whereas output tokens must be generated sequentially one by one',
          bn: 'ইনপুট টোকেনগুলো সমান্তরালভাবে প্রসেস করা যায়, অথচ প্রতিটি আউটপুট টোকেন একের পর এক ক্রমানুসারে তৈরি করতে হয়'
        },
        {
          en: 'Output tokens are permanently stored in physical copper cables',
          bn: 'আউটপুট টোকেন তামার তারের ভেতরে স্থায়ীভাবে সংরক্ষণ করা হয়'
        },
        {
          en: 'Output tokens require liquid cooling on the client computer',
          bn: 'আউটপুট টোকেনের জন্য ক্লায়েন্ট কম্পিউটারে তরল কুলিং সিস্টেমের প্রয়োজন হয়'
        },
        {
          en: 'Input tokens do not consume GPU compute cycles',
          bn: 'ইনপুট টোকেন প্রসেস করতে জিপিইউ-এর কোনো কম্পিউটেশনের প্রয়োজন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Autoregressive generation cannot be parallelized across the time dimension.',
        bn: 'পরবর্তী টোকেন তৈরির ক্ষেত্রে আগের টোকেন তৈরি হওয়া পর্যন্ত অপেক্ষা করতে হয়, ফলে এটি সমান্তরাল করা যায় না।'
      },
      explanation: {
        en: 'Sequential generation ties up GPU memory bandwidth for every single token, making generation computationally expensive.',
        bn: 'ক্রমানুসারে টোকেন তৈরির কারণে প্রতিটি পদক্ষেপে জিপিইউ মেমোরি ব্যস্ত থাকে, যা আউটপুটকে ব্যয়বহুল করে তোলে।'
      }
    },
    {
      id: 'message-roles-trio-ex4',
      kind: 'mcq',
      topic: 'chat-completions-roles-architecture',
      question: {
        en: 'Which 3 primary message roles form the conversation array in the Chat Completions specification?',
        bn: 'চ্যাট কমপ্লিশন স্পেসিফিকেশনে কথোপকথনের অ্যারেটি মূলত কোন ৩টি মেসেজ রোলের সমন্বয়ে গঠিত?'
      },
      options: [
        { en: 'system, user, and assistant', bn: 'system, user এবং assistant' },
        { en: 'admin, guest, and root', bn: 'admin, guest এবং root' },
        { en: 'sender, receiver, and carrier', bn: 'sender, receiver এবং carrier' },
        { en: 'client, router, and server', bn: 'client, router এবং server' }
      ],
      answer: 0,
      hint: {
        en: 'One establishes rules, one provides user queries, and one logs previous model completions.',
        bn: 'একটি নিয়ম তৈরি করে, একটি প্রশ্ন পাঠায় এবং অন্যটি মডেলের পূর্ববর্তী উত্তর সংরক্ষণ করে।'
      },
      explanation: {
        en: 'The standard protocol structures multi-turn dialogue into system rules, user inputs, and assistant outputs.',
        bn: 'আদর্শ প্রোটোকলটি সিস্টেম নির্দেশ, ব্যবহারকারী ইনপুট এবং অ্যাসিস্ট্যান্ট উত্তরের সমন্বয়ে কথোপকথন তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-meet-ai-apis',
    title: {
      en: 'Chat Completions Protocol and Token Mechanics Quiz',
      bn: 'চ্যাট কমপ্লিশন প্রোটোকল এবং টোকেন মেকানিক্স কুইজ'
    },
    questions: [
      {
        id: 'quiz-max-tokens-importance',
        kind: 'mcq',
        topic: 'max-tokens-parameter-protection',
        question: {
          en: 'Why is defining an explicit max_tokens limit essential for every production API request?',
          bn: 'প্রতিটি প্রোডাকশন এপিআই অনুরোধে সুনির্দিষ্ট max_tokens সীমা নির্ধারণ করা কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'To prevent runaway generation loops from exhausting the monthly budget or exceeding application timeout limits',
            bn: 'অনিয়ন্ত্রিত উত্তরের লুপ যাতে মাসিক বাজেট শেষ না করে এবং অ্যাপ্লিকেশনের টাইমআউট সীমা অতিক্রম না করে তা নিশ্চিত করতে'
          },
          {
            en: 'Because without max_tokens the request is rejected with HTTP 404',
            bn: 'কারণ max_tokens ছাড়া অনুরোধ পাঠালে সার্ভার HTTP ৪০৪ দিয়ে বাতিল করে দেয়'
          },
          {
            en: 'To reduce the physical weight of the server hard drive',
            bn: 'সার্ভারের হার্ডড্রাইভের শারীরিক ওজন কমানোর জন্য'
          },
          {
            en: 'To convert all numbers into lowercase roman letters',
            bn: 'সমস্ত সংখ্যাকে রোমান হরফে রূপান্তর করার উদ্দেশ্যে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Uncapped output generations introduce severe latency and financial risks.',
          bn: 'সীমাহীন উত্তর তৈরি অতিরিক্ত সময়ক্ষেপণ এবং বিশাল আর্থিক ক্ষতির ঝুঁকি তৈরি করে।'
        },
        explanation: {
          en: 'Setting max_tokens places a hard ceiling on completion length, capping financial costs and execution latency.',
          bn: 'max_tokens নির্ধারণ উত্তরের সর্বোচ্চ দৈর্ঘ্যের ওপর সীমা আরোপ করে আর্থিক খরচ এবং সময়ের অপচয় রোধ করে।'
        }
      },
      {
        id: 'quiz-stateless-api-memory',
        kind: 'mcq',
        topic: 'stateless-api-context-transmission',
        question: {
          en: 'How do stateless Chat Completion APIs maintain conversational context across multiple user questions?',
          bn: 'স্টেটলেস চ্যাট কমপ্লিশন এপিআই কীভাবে একাধিক প্রশ্নের মধ্যে আগের কথোপকথনের প্রেক্ষাপট মনে রাখে?'
        },
        options: [
          {
            en: 'The client application must transmit the entire accumulated array of previous messages on every single request',
            bn: 'ক্লায়েন্ট অ্যাপ্লিকেশনকে প্রতিটি নতুন অনুরোধের সাথে পূর্ববর্তী সমস্ত মেসেজের সম্পূর্ণ অ্যারে পুনরায় পাঠাতে হয়'
          },
          {
            en: 'The server permanently remembers user IP addresses in GPU memory',
            bn: 'সার্ভার তার জিপিইউ মেমোরিতে ব্যবহারকারীর আইপি ঠিকানা স্থায়ীভাবে মনে রাখে'
          },
          {
            en: 'Context is stored on physical optical laser discs',
            bn: 'প্রেক্ষাপট অপটিক্যাল সিডি বা ডিভিডির মাধ্যমে সংরক্ষণ করা হয়'
          },
          {
            en: 'Language models telepathically link to the client database',
            bn: 'ল্যাঙ্গুয়েজ মডেল ক্লায়েন্টের ডেটাবেসের সাথে অদৃশ্য টেলিপ্যাথিক সংযোগ তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The API server does not retain memory of past connections.',
          bn: 'এপিআই সার্ভার অতীতের কোনো অনুরোধের তথ্য নিজের কাছে জমা রাখে না।'
        },
        explanation: {
          en: 'Because APIs are stateless, the client is responsible for storing dialogue history and resubmitting it with every call.',
          bn: 'এপিআই স্টেটলেস হওয়ায় কথোপকথন মনে রাখার দায়িত্ব ক্লায়েন্টের, যাকে প্রতি কলে পূর্বের ইতিহাস পাঠাতে হয়।'
        }
      },
      {
        id: 'quiz-http-status-codes-ai',
        kind: 'mcq',
        topic: 'common-http-error-codes-ai',
        question: {
          en: 'Which HTTP status code indicates that an API key is invalid, revoked, or missing?',
          bn: 'কোন HTTP স্ট্যাটাস কোডটি নির্দেশ করে যে এপিআই চাবি অবৈধ, বাতিল বা অনুপস্থিত?'
        },
        options: [
          { en: 'HTTP 401 Unauthorized', bn: 'HTTP ৪০১ আনঅথরাইজড' },
          { en: 'HTTP 200 OK', bn: 'HTTP ২০০ ওকে' },
          { en: 'HTTP 429 Too Many Requests', bn: 'HTTP ৪২৯ টু মেনি রিকোয়েস্ট' },
          { en: 'HTTP 503 Service Unavailable', bn: 'HTTP ৫০৩ সার্ভিস আনঅ্যাভেইলেবল' }
        ],
        answer: 0,
        hint: {
          en: 'Authentication failures trigger the standard 401 response.',
          bn: 'প্রমাণীকরণের ব্যর্থতায় আদর্শ ৪০১ কোড প্রদর্শিত হয়।'
        },
        explanation: {
          en: 'HTTP 401 signals an authentication failure, requiring developers to inspect their API key configuration.',
          bn: 'HTTP ৪০১ কোড প্রমাণীকরণ ব্যর্থতার সংকেত দেয়, যা দেখলে এপিআই কী যাচাই করা প্রয়োজন।'
        }
      },
      {
        id: 'quiz-finish-reason-inspection',
        kind: 'mcq',
        topic: 'response-finish-reason-semantics',
        question: {
          en: 'What does a response finish_reason of "length" signify in a Chat Completions response?',
          bn: 'চ্যাট কমপ্লিশন রেসপন্সে finish_reason হিসেবে "length" আসার অর্থ কী?'
        },
        options: [
          {
            en: 'The model reached the configured max_tokens ceiling before it could finish its complete thought',
            bn: 'সম্পূর্ণ বক্তব্য শেষ করার আগেই মডেলটি নির্ধারিত max_tokens সীমাতে পৌঁছে যাওয়ায় লেখা কেটে গেছে'
          },
          {
            en: 'The response was successfully completed with zero errors',
            bn: 'উত্তরটি কোনো ত্রুটি ছাড়া সফলভাবে সম্পূর্ণ হয়েছে'
          },
          {
            en: 'The user query was longer than 1000000 words',
            bn: 'ব্যবহারকারীর প্রশ্নটি ১০০০০০০ শব্দের চেয়ে বড় ছিল'
          },
          {
            en: 'The network router encountered a physical cable disconnect',
            bn: 'নেটওয়ার্ক রাউটারের তার শারীরিকভাবে বিচ্ছিন্ন হয়ে গেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A natural finish returns "stop", whereas truncation returns "length".',
          bn: 'স্বাভাবিকভাবে শেষ হলে "stop" আসে, কিন্তু সীমা শেষ হলে "length" আসে।'
        },
        explanation: {
          en: 'A finish_reason of "length" alerts developers that output was truncated due to token budget exhaustion.',
          bn: 'finish_reason হিসেবে "length" আসলে বুঝতে হবে টোকেন শেষ হয়ে যাওয়ায় উত্তরটি অসম্পূর্ণ থেকে গেছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'streaming-realtime',
    title: {
      en: 'Streaming & Real-Time Server-Sent Events (SSE)',
      bn: 'স্ট্রিমিং এবং রিয়েল-টাইম সার্ভার-সেন্ট ইভেন্টস (SSE)'
    }
  }
};
