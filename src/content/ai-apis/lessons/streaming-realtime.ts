import type { Lesson } from '../../../lib/types';

export const StreamingRealtimeLesson: Lesson = {
  slug: 'streaming-realtime',
  tech: 'ai-apis',
  title: {
    en: 'Streaming & Real-Time Server-Sent Events (SSE)',
    bn: 'স্ট্রিমিং এবং রিয়েল-টাইম সার্ভার-সেন্ট ইভেন্টস (SSE)'
  },
  summary: {
    en: 'Elevate user experience with Server-Sent Events (SSE): consume token deltas over HTTP chunked streams, slash Time to First Token (TTFT) from 5 seconds to 300 milliseconds, parse data frames, and cancel active streams using AbortController.',
    bn: 'সার্ভার-সেন্ট ইভেন্টস (SSE) দিয়ে ব্যবহারকারীর অভিজ্ঞতা উন্নত করুন: HTTP চাঙ্কড স্ট্রিমের মাধ্যমে টোকেন ডেল্টা গ্রহণ, টাইম টু ফার্স্ট টোকেন (TTFT) ৫ সেকেন্ড থেকে ৩০০ মিলিসেকেন্ডে নামিয়ে আনা, ফ্রেম পার্সিং এবং AbortController দিয়ে স্ট্রিম বাতিল।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'streaming-perception-heading',
      text: {
        en: 'The Human Perception Problem: Why Synchronous Waiting Fails',
        bn: 'ব্যবহারকারীর উপলব্ধির সমস্যা: সাধারণ অপেক্ষার সীমাবদ্ধতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Generating an exhaustive 250-token response takes roughly 5 seconds on modern transformer clusters. In a non-streaming HTTP connection, the client browser sits idle during these 5 seconds, displaying a motionless spinner that users often assume has frozen or crashed. Streaming replaces this blocking wait with Server-Sent Events (SSE), transmitting individual token deltas as they leave the GPU matrix kernel and slashing Time to First Token (TTFT) from 5 seconds to just 300 milliseconds.',
        bn: 'আধুনিক ট্রান্সফরমার সার্ভারে ২৫০ টোকেনের একটি পূর্ণাঙ্গ উত্তর তৈরি করতে প্রায় ৫ সেকেন্ড সময় লাগে। নন-স্ট্রিমিং HTTP সংযোগে ক্লায়েন্ট ব্রাউজারকে এই পুরো ৫ সেকেন্ড অলস বসে অপেক্ষা করতে হয়, ফলে ব্যবহারকারীরা প্রায়ই ভাবেন সাইটটি হ্যাং হয়ে গেছে। স্ট্রিমিং এই দীর্ঘ অপেক্ষাকে সার্ভার-সেন্ট ইভেন্টস (SSE) দিয়ে প্রতিস্থাপন করে, যেখানে জিপিইউ-তে প্রতিটি টোকেন তৈরির সাথে সাথে তা ব্রাউজারে পৌঁছে যায় এবং প্রথম টোকেন দেখার সময় ৫ সেকেন্ড থেকে মাত্র ৩০০ মিলিসেকেন্ডে নেমে আসে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Non-streaming 5-second wait versus real-time Server-Sent Events (SSE) streaming.',
        bn: 'চিত্র ১: নন-স্ট্রিমিং ৫ সেকেন্ডের দীর্ঘ অপেক্ষা বনাম রিয়েল-টাইম সার্ভার-সেন্ট ইভেন্টস (SSE) স্ট্রিমিং।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">BLOCKING NON-STREAMING VS SERVER-SENT EVENTS (SSE)</text>
  
  <!-- Non-Streaming -->
  <g transform="translate(30, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#b91c1c" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Non-Streaming (stream: false)</text>
    
    <text x="20" y="65" fill="#f87171" font-size="11" font-family="monospace">Perceived Latency: High</text>
    <rect x="15" y="75" width="330" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="25" y="96" fill="#94a3b8" font-size="10" font-family="monospace">0s to 5s: Frozen blank screen</text>
    <text x="25" y="112" fill="#ef4444" font-size="10" font-family="sans-serif">User assumes application crashed</text>
    
    <rect x="15" y="140" width="330" height="85" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="165" fill="#f87171" font-size="10" font-family="monospace">5.0s: Entire blob arrives at once</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="10" font-family="sans-serif">"React uses a virtual DOM to optimize"</text>
    <text x="25" y="205" fill="#cbd5e1" font-size="10" font-family="sans-serif">"UI tree re-renders across nodes."</text>
  </g>

  <!-- SSE Streaming -->
  <g transform="translate(450, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#059669" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Real-Time SSE (stream: true)</text>
    
    <text x="20" y="65" fill="#10b981" font-size="11" font-family="monospace">Perceived Latency: Instant (~300ms)</text>
    
    <rect x="15" y="75" width="330" height="150" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="96" fill="#38bdf8" font-size="10" font-family="monospace">300ms: data: {"delta":{"content":"React"}}</text>
    <text x="25" y="116" fill="#38bdf8" font-size="10" font-family="monospace">350ms: data: {"delta":{"content":" uses"}}</text>
    <text x="25" y="136" fill="#38bdf8" font-size="10" font-family="monospace">400ms: data: {"delta":{"content":" virtual"}}</text>
    <text x="25" y="156" fill="#38bdf8" font-size="10" font-family="monospace">450ms: data: {"delta":{"content":" DOM"}}</text>
    <text x="25" y="176" fill="#4ade80" font-size="10" font-family="monospace">500ms: data: [DONE]</text>
    <text x="25" y="205" fill="#facc15" font-size="10" font-family="sans-serif">Immediate interactive feedback</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'sse-protocol-mechanics-heading',
      text: {
        en: 'The Server-Sent Events Wire Format and Stream Termination',
        bn: 'সার্ভার-সেন্ট ইভেন্টস ওয়্যার ফরম্যাট এবং স্ট্রিম সমাপ্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When an API client specifies stream: true, the server sets Content-Type to text/event-stream and leaves the HTTP connection open. Data packets arrive framed by the prefix "data: " and separated by double newline characters. The client runtime accumulates incoming binary byte chunks through a text decoder, emits the delta characters into the user interface, and listens for the terminal string "data: [DONE]" to close the stream. If the user navigates away, an AbortController cancels the connection immediately.',
        bn: 'যখন ক্লায়েন্ট stream: true নির্দিষ্ট করে, তখন সার্ভার Content-Type হিসেবে text/event-stream নির্ধারণ করে HTTP সংযোগটি খোলা রাখে। প্রতিটি ডেটা প্যাকেট "data: " প্রিফিক্স দিয়ে শুরু হয় এবং দুটি নতুন লাইন দ্বারা আলাদা থাকে। ক্লায়েন্ট টেক্সট ডিকোডার দিয়ে আগত বাইটগুলো পড়ে স্ক্রিনে নতুন অক্ষরগুলো প্রদর্শন করে এবং স্ট্রিম বন্ধের বিশেষ সংকেত "data: [DONE]" পাওয়ার সাথে সাথে কাজ শেষ করে। ব্যবহারকারী যদি মাঝপথে পাতা পরিবর্তন করেন, তবে একটি AbortController তাৎক্ষণিকভাবে সংযোগটি কেটে দিয়ে অপ্রয়োজনীয় খরচ রোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation of a production Server-Sent Events stream chunk parser.',
        bn: 'সার্ভার-সেন্ট ইভেন্টস স্ট্রিম চাঙ্ক পার্স করার প্রোডাকশন TypeScript কোড।'
      },
      code: `export interface StreamChunk {
  contentDelta: string;
  isDone: boolean;
}

export function parseSSELine(line: string): StreamChunk | null {
  const trimmed = line.trim();

  // Ignore keep-alive comments or empty frames
  if (!trimmed || trimmed.startsWith(':')) {
    return null;
  }

  if (trimmed === 'data: [DONE]') {
    return { contentDelta: '', isDone: true };
  }

  if (trimmed.startsWith('data: ')) {
    const jsonStr = trimmed.slice(6);
    try {
      const parsed = JSON.parse(jsonStr);
      const delta = parsed.choices?.[0]?.delta?.content || '';
      return { contentDelta: delta, isDone: false };
    } catch {
      return null;
    }
  }

  return null;
}

// Simulated stream of 5 incoming chunks delivering 13 characters
const mockSSEFrames = [
  'data: {"choices":[{"delta":{"content":"Hello"}}]}',
  'data: {"choices":[{"delta":{"content":" "}}]}',
  'data: {"choices":[{"delta":{"content":"world"}}]}',
  'data: {"choices":[{"delta":{"content":"!"}}]}',
  'data: [DONE]'
];

let accumulatedText = '';
let streamClosed = false;

for (const frame of mockSSEFrames) {
  const chunk = parseSSELine(frame);
  if (chunk) {
    if (chunk.isDone) {
      streamClosed = true;
    } else {
      accumulatedText += chunk.contentDelta;
    }
  }
}

console.log('Stream Closed Properly:', streamClosed);      // true
console.log('Total Accumulated Text:', accumulatedText);    // "Hello world!"
console.log('Accumulated Character Count:', accumulatedText.length); // 12`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Server-Sent Events',
          def: {
            en: 'One-way HTTP streaming protocol enabling servers to push realtime text frames to clients over a persistent connection.',
            bn: 'একমুখী HTTP স্ট্রিমিং প্রোটোকল যার মাধ্যমে সার্ভার একটি স্থায়ী সংযোগ দিয়ে ক্লায়েন্টকে রিয়েল-টাইমে টেক্সট পাঠাতে পারে।'
          }
        },
        {
          term: 'Time to First Token',
          def: {
            en: 'Latency metric measuring the duration from sending the HTTP request until the very first generated token is received.',
            bn: 'লেটেন্সি পরিমাপক যা অনুরোধ পাঠানোর মুহূর্ত থেকে প্রথম তৈরি টোকেনটি পৌঁছানো পর্যন্ত অতিক্রান্ত সময় নির্দেশ করে।'
          }
        },
        {
          term: 'Chunk Delta',
          def: {
            en: 'The incremental fragment of text generated in a single step, transmitted inside a streaming event payload.',
            bn: 'একটি একক পদক্ষেপে উৎপন্ন লেখার ক্ষুদ্র বর্ধিতাংশ যা স্ট্রিমিং ইভেন্ট পেলোডের মাধ্যমে পাঠানো হয়।'
          }
        },
        {
          term: 'AbortController',
          def: {
            en: 'Browser and Node.js interface used to abort active fetch requests and terminate ongoing streaming connections.',
            bn: 'ব্রাউজার এবং Node.js-এর একটি ইন্টারফেস যা চলমান fetch অনুরোধ বা স্ট্রিমিং সংযোগ তাৎক্ষণিকভাবে বাতিল করতে ব্যবহৃত হয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ttft-streaming-benefit-ex1',
      kind: 'mcq',
      topic: 'ttft-latency-reduction',
      question: {
        en: 'How does Server-Sent Events streaming reduce Time to First Token (TTFT) compared to blocking requests?',
        bn: 'ব্লকিং অনুরোধের তুলনায় সার্ভার-সেন্ট ইভেন্টস স্ট্রিমিং কীভাবে টাইম টু ফার্স্ট টোকেন (TTFT) উল্লেখযোগ্যভাবে কমায়?'
      },
      options: [
        {
          en: 'It transmits tokens immediately as they are generated by the model (~300ms) rather than waiting 5 seconds for the entire response to finish',
          bn: 'সম্পূর্ণ উত্তরের জন্য ৫ সেকেন্ড অপেক্ষা না করে প্রতিটি টোকেন তৈরির সাথে সাথে (~৩০০ মিলিসেকেন্ড) তা পাঠিয়ে দেয়'
        },
        {
          en: 'It increases physical fiber optic cable propagation velocity',
          bn: 'এটি অপটিক্যাল ফাইবার তারের ভেতরের আলোর গতি বাড়িয়ে দেয়'
        },
        {
          en: 'It deletes half of the words in the answer',
          bn: 'এটি উত্তরের অর্ধেক শব্দ মুছে ফেলে'
        },
        {
          en: 'It runs the query on local client CPU registers',
          bn: 'এটি ক্লায়েন্টের সিপিইউ রেজিস্টারে কোড চালায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The client does not have to wait for the complete completion to finish before seeing the beginning.',
        bn: 'শুরুর অংশ দেখতে ক্লায়েন্টকে পুরো লেখা শেষ হওয়া পর্যন্ত অপেক্ষা করতে হয় না।'
      },
      explanation: {
        en: 'Streaming delivers each token incrementally, delivering immediate visual progress and cutting perceived latency.',
        bn: 'স্ট্রিমিং প্রতিটি টোকেন আলাদাভাবে পাঠায়, ফলে ব্যবহারকারী চোখের সামনে লেখা তৈরি হতে দেখতে পান।'
      }
    },
    {
      id: 'done-marker-semantics-ex2',
      kind: 'mcq',
      topic: 'sse-terminal-done-marker',
      question: {
        en: 'Which special token payload indicates that the AI provider has completed text generation and is closing the stream?',
        bn: 'কোন বিশেষ টোকেন পেলোডটি নির্দেশ করে যে এআই প্রোভাইডারের লেখা শেষ হয়েছে এবং এটি স্ট্রিমটি বন্ধ করছে?'
      },
      options: [
        { en: 'data: [DONE]', bn: 'data: [DONE]' },
        { en: 'data: {status: "closed"}', bn: 'data: {status: "closed"}' },
        { en: 'END_OF_FILE', bn: 'END_OF_FILE' },
        { en: 'HTTP 404 NOT FOUND', bn: 'HTTP 404 NOT FOUND' }
      ],
      answer: 0,
      hint: {
        en: 'OpenAI and standard SSE implementations emit [DONE] in brackets.',
        bn: 'ওপেনএআই এবং আদর্শ SSE ব্যবস্থায় বন্ধনীতে [DONE] পাঠানো হয়।'
      },
      explanation: {
        en: 'The standardized SSE stream terminator is the string "data: [DONE]", signaling parsers to close the connection.',
        bn: 'আদর্শ টার্মিনেটর হলো "data: [DONE]", যা পেলে পার্সার সংযোগ বন্ধ করে দেয়।'
      }
    },
    {
      id: 'abort-controller-cleanup-ex3',
      kind: 'mcq',
      topic: 'abort-controller-resource-savings',
      question: {
        en: 'Why should front-end web applications wire an AbortController signal to active AI streaming requests?',
        bn: 'ফ্রন্ট-এন্ড ওয়েব অ্যাপ্লিকেশনে চলমান এআই স্ট্রিমিং অনুরোধের সাথে কেন একটি AbortController যুক্ত করা উচিত?'
      },
      options: [
        {
          en: 'To cancel ongoing generation when a user clicks "Stop" or navigates away, preventing wasted token billing and GPU compute',
          bn: 'ব্যবহারকারী "থামুন" চাপলে বা পাতা পরিবর্তন করলে যাতে জেনারেটর বন্ধ হয় এবং অনর্থক টোকেন বিল ও কম্পিউটেশন খরচ না হয়'
        },
        {
          en: 'To restart the user local operating system',
          bn: 'ব্যবহারকারীর অপারেটিং সিস্টেম রিস্টার্ট করার জন্য'
        },
        {
          en: 'To convert the response text into a PDF file',
          bn: 'উত্তরের টেক্সটকে পিডিএফ ফাইলে রূপান্তর করার জন্য'
        },
        {
          en: 'It is required by HTML5 video playback standards',
          bn: 'এটি এইচটিএমএল৫ ভিডিও স্ট্যান্ডার্ডের জন্য বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stopping generation early conserves cloud tokens and frees server capacity.',
        bn: 'আগেভাগে জেনারেশন বন্ধ করলে ক্লাউড টোকেন সাশ্রয় হয় এবং সার্ভার ফাঁকা হয়।'
      },
      explanation: {
        en: 'Calling abort() severs the HTTP connection, signaling upstream providers to halt generation and stop billing.',
        bn: 'abort() কল করলে সংযোগ কেটে যায় এবং ক্লাউড প্রোভাইডার তৎক্ষণাৎ টোকেন তৈরি বন্ধ করে বিলিং থামিয়ে দেয়।'
      }
    },
    {
      id: 'tcp-frame-buffering-ex4',
      kind: 'mcq',
      topic: 'streaming-buffer-boundary-splits',
      question: {
        en: 'Why must production SSE stream parsers maintain an internal buffer across incoming network chunks?',
        bn: 'প্রোডাকশন SSE স্ট্রিম পার্সারগুলোতে আগত নেটওয়ার্ক চাঙ্কের মাঝে কেন একটি অভ্যন্তরীণ বাফার বজায় রাখতে হয়?'
      },
      options: [
        {
          en: 'TCP network packets can split arbitrary JSON frames mid-sentence across two network chunks, requiring reassembly before JSON parsing',
          bn: 'টিসিপি নেটওয়ার্ক প্যাকেট যেকোনো JSON ফ্রেমকে মাঝপথে দুটি চাঙ্কে ভাগ করে দিতে পারে, যা পার্স করার আগে বাফারে জোড়া লাগাতে হয়'
        },
        {
          en: 'Because browsers can only allocate 10 bytes of memory per hour',
          bn: 'কারণ ব্রাউজার প্রতি ঘণ্টায় কেবল ১০ বাইট মেমোরি বরাদ্দ করতে পারে'
        },
        {
          en: 'To encrypt all packets with a secret DES algorithm',
          bn: 'সব প্যাকেটকে গোপন ডিইএস অ্যালগরিদম দিয়ে এনক্রিপ্ট করার জন্য'
        },
        {
          en: 'To sort all incoming letters alphabetically',
          bn: 'আগত সমস্ত অক্ষরকে বর্ণানুক্রমিকভাবে সাজিয়ে নেওয়ার উদ্দেশ্যে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Network transmission does not respect JSON string boundaries.',
        bn: 'নেটওয়ার্ক ডেটা পাঠানোর সময় JSON-এর দ্বিতীয় বন্ধনী বা কাঠামোর তোয়াক্কা করে না।'
      },
      explanation: {
        en: 'Buffering lines until complete \\n\\n delimiters appear prevents JSON.parse exceptions on fragmented frames.',
        bn: 'সম্পূর্ণ লাইন না পাওয়া পর্যন্ত বাফারে তথ্য জমা রাখলে অসম্পূর্ণ ডেটা পার্সিংয়ের কারণে ক্র্যাশ এড়ানো যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-streaming-realtime',
    title: {
      en: 'Streaming & Real-Time Server-Sent Events Quiz',
      bn: 'স্ট্রিমিং এবং রিয়েল-টাইম সার্ভার-সেন্ট ইভেন্টস কুইজ'
    },
    questions: [
      {
        id: 'quiz-content-type-sse',
        kind: 'mcq',
        topic: 'sse-mime-type-header',
        question: {
          en: 'What MIME Content-Type header must the server return when establishing an SSE stream?',
          bn: 'একটি SSE স্ট্রিম সংযোগ স্থাপনের সময় সার্ভারকে কোন MIME Content-Type হেডারটি পাঠাতে হয়?'
        },
        options: [
          { en: 'text/event-stream', bn: 'text/event-stream' },
          { en: 'application/json', bn: 'application/json' },
          { en: 'multipart/form-data', bn: 'multipart/form-data' },
          { en: 'text/html', bn: 'text/html' }
        ],
        answer: 0,
        hint: {
          en: 'The standard W3C specification for Server-Sent Events defines this media type.',
          bn: 'সার্ভার-সেন্ট ইভেন্টসের আদর্শ W3C স্পেসিফিকেশনে এই মিডিয়া টাইপ নির্ধারিত আছে।'
        },
        explanation: {
          en: 'text/event-stream informs clients to keep the TCP socket open and parse incoming data as event messages.',
          bn: 'text/event-stream হেডার ক্লায়েন্টকে সংযোগ খোলা রাখতে এবং ডেটাকে ইভেন্ট মেসেজ হিসেবে পড়তে বলে।'
        }
      },
      {
        id: 'quiz-streaming-cost-implication',
        kind: 'mcq',
        topic: 'streaming-vs-non-streaming-costs',
        question: {
          en: 'Does enabling Server-Sent Events streaming change the total token cost of an API completion?',
          bn: 'সার্ভার-সেন্ট ইভেন্টস স্ট্রিমিং সক্রিয় করলে কি একটি এপিআই কমপ্লিশনের মোট টোকেন খরচে কোনো পরিবর্তন আসে?'
        },
        options: [
          {
            en: 'No, the token pricing remains identical; streaming alters only delivery mechanics and perceived latency',
            bn: 'না, টোকেন মূল্য হুবহু একই থাকে; স্ট্রিমিং কেবল তথ্য পৌঁছানোর পদ্ধতি এবং অপেক্ষার সময় পরিবর্তন করে'
          },
          {
            en: 'Yes, streaming costs 10 times more per token',
            bn: 'হ্যাঁ, স্ট্রিমিংয়ে প্রতি টোকেনের খরচ ১০ গুণ বেশি হয়'
          },
          {
            en: 'Yes, streaming makes all output tokens 100 percent free',
            bn: 'হ্যাঁ, স্ট্রিমিং করলে সমস্ত আউটপুট টোকেন সম্পূর্ণ বিনামূল্যে পাওয়া যায়'
          },
          {
            en: 'Streaming only charges for input characters',
            bn: 'স্ট্রিমিংয়ে কেবল ইনপুট অক্ষরের জন্য চার্জ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The model generates the same number of tokens regardless of how they are delivered.',
          bn: 'টোকেন যেভাবে পাঠানোই হোক না কেন, মডেল একই সংখ্যক টোকেন তৈরি করে।'
        },
        explanation: {
          en: 'Token consumption is identical; providers do not charge extra bandwidth premiums for SSE streaming.',
          bn: 'টোকেন খরচ সম্পূর্ণ এক থাকে; প্রোভাইডাররা স্ট্রিমিংয়ের জন্য কোনো অতিরিক্ত ফি নেয় না।'
        }
      },
      {
        id: 'quiz-stream-backpressure-client',
        kind: 'mcq',
        topic: 'client-side-rendering-backpressure',
        question: {
          en: 'What UI problem can arise on mobile devices if a fast model streams 80 tokens per second directly into the DOM?',
          bn: 'একটি দ্রুতগতির মডেল যদি প্রতি সেকেন্ডে ৮০টি টোকেন সরাসরি ডমে (DOM) রেন্ডার করে, তবে মোবাইলে কোন সমস্যাটি হতে পারে?'
        },
        options: [
          {
            en: 'Frequent DOM reflows can cause layout thrashing and choppy animations, requiring requestAnimationFrame throttling',
            bn: 'ঘন ঘন ডম পরিবর্তন ব্রাউজারের লেআউট আটকে দিতে পারে এবং ফ্রেম রেট নষ্ট করে, যার জন্য অ্যানিমেশন ফ্রেমের মাধ্যমে গতি নিয়ন্ত্রণ প্রয়োজন'
          },
          {
            en: 'The smartphone battery will physically rupture',
            bn: 'মোবাইলের ব্যাটারি শারীরিকভাবে ক্ষতিগ্রস্ত হবে'
          },
          {
            en: 'The mobile cellular modem switches to 2G frequencies',
            bn: 'মোবাইলের নেটওয়ার্ক টু-জি গতিতে নেমে যাবে'
          },
          {
            en: 'The operating system deletes the web browser app',
            bn: 'অপারেটিং সিস্টেম ব্রাউজার অ্যাপটি মুছে ফেলবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Updating the DOM on every single character overwhelms the browser layout engine.',
          bn: 'প্রতিটি একক অক্ষরের জন্য ব্রাউজারের ডম রি-রেন্ডার করলে তা প্রসেসরে চাপ ফেলে।'
        },
        explanation: {
          en: 'Batching DOM updates using requestAnimationFrame ensures silky 60fps rendering even during high token velocity.',
          bn: 'requestAnimationFrame ব্যবহার করে একসাথে কয়েকটি টোকেন রেন্ডার করলে মসৃণ অ্যানিমেশন বজায় থাকে।'
        }
      },
      {
        id: 'quiz-error-handling-mid-stream',
        kind: 'mcq',
        topic: 'mid-stream-failure-handling',
        question: {
          en: 'How should an enterprise application handle an unexpected network drop in the middle of a streaming completion?',
          bn: 'একটি এন্টারপ্রাইজ অ্যাপ্লিকেশনে স্ট্রিমিং চলাকালীন মাঝপথে হঠাৎ নেটওয়ার্ক বিচ্ছিন্ন হলে কীভাবে তা পরিচালনা করা উচিত?'
        },
        options: [
          {
            en: 'Retain the already-received partial text, display an inline retry button, and avoid blindly repeating the full request automatically',
            bn: 'আগে প্রাপ্ত আংশিক টেক্সটটি অক্ষত রেখে একটি রিট্রাই বোতাম দেখানো এবং সম্পূর্ণ অনুরোধটি অন্ধের মতো স্বয়ংক্রিয়ভাবে পুনরায় না চালানো'
          },
          {
            en: 'Instantly clear the screen and show an empty white page',
            bn: 'সাথে সাথে পুরো স্ক্রিন খালি করে একটি সাদা পাতা দেখানো'
          },
          {
            en: 'Charge the customer double penalty fees',
            bn: 'গ্রাহকের ওপর দ্বিগুণ জরিমানা ধার্য করা'
          },
          {
            en: 'Permanently lock the user account',
            bn: 'ব্যবহারকারীর অ্যাকাউন্টটি স্থায়ীভাবে বাতিল করে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preserve user progress rather than erasing already-streamed content.',
          bn: 'ইতিমধ্যে পাওয়া তথ্য মুছে না ফেলে তা সংরক্ষণ করে রাখা বাঞ্ছনীয়।'
        },
        explanation: {
          en: 'Preserving partial stream output provides a graceful degraded state and prevents jarring layout resets.',
          bn: 'আংশিক লেখা সংরক্ষণ করলে ব্যবহারকারীর অভিজ্ঞতা বিঘ্নিত হয় না এবং তারা সুবিধাজনকভাবে পুনরায় চেষ্টা করতে পারেন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'retries-resilience',
    title: {
      en: 'Fault Tolerance: Retries, Exponential Backoff & Circuit Breakers',
      bn: 'ত্রুটি সহনশীলতা: রিট্রাই, এক্সপোনেনশিয়াল ব্যাকঅফ এবং সার্কিট ব্রেকার'
    }
  }
};
