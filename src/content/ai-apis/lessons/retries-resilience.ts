import type { Lesson } from '../../../lib/types';

export const RetriesResilienceLesson: Lesson = {
  slug: 'retries-resilience',
  tech: 'ai-apis',
  title: {
    en: 'Fault Tolerance: Retries, Exponential Backoff & Circuit Breakers',
    bn: 'ত্রুটি সহনশীলতা: রিট্রাই, এক্সপোনেনশিয়াল ব্যাকঅফ এবং সার্কিট ব্রেকার'
  },
  summary: {
    en: 'Engineer robust AI network integrations: distinguish transient HTTP 429 and 503 errors from permanent failures, implement Exponential Backoff with Full Jitter across 1s to 15s intervals, and configure 3-state Circuit Breakers to maintain system stability.',
    bn: 'শক্তিশালী এআই নেটওয়ার্ক ক্লায়েন্ট তৈরি করুন: স্থায়ী ত্রুটি থেকে সাময়িক HTTP ৪২৯ ও ৫০৩ ত্রুটি পৃথকীকরণ, ১ থেকে ১৫ সেকেন্ডের ব্যবধানে ফুল জিটার সহ এক্সপোনেনশিয়াল ব্যাকঅফ বাস্তবায়ন এবং ৩টি অবস্থার সার্কিট ব্রেকার কনফিগারেশন।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'transient-vs-permanent-heading',
      text: {
        en: 'Transient Outages vs Permanent Bugs: The Retry Decision Matrix',
        bn: 'সাময়িক বিপর্যয় বনাম স্থায়ী ত্রুটি: রিট্রাই সিদ্ধান্তের ছক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Network software engineering requires strictly categorizing HTTP response codes before attempting retries. Permanent 4xx client errors (such as 400 Bad Request or 401 Unauthorized) mean the payload or API key is invalid; repeating the request will never succeed and wastes money. Conversely, transient errors like 429 Too Many Requests, 500 Internal Error, and 503 Service Unavailable signify temporary server load or upstream capacity bottlenecks that clear within seconds.',
        bn: 'নেটওয়ার্ক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে পুনরায় অনুরোধ পাঠানোর আগে HTTP রেসপন্স কোডগুলো সঠিকভাবে শ্রেণিবদ্ধ করা আবশ্যক। স্থায়ী ৪xx ক্লায়েন্ট ত্রুটি (যেমন ৪০০ ব্যাড রিকোয়েস্ট বা ৪০১ আনঅথরাইজড) নির্দেশ করে যে পেলোড বা এপিআই চাবি ভুল; বারবার একই অনুরোধ পাঠালে তা কখনোই সফল হবে না বরং অর্থ অপচয় করবে। পক্ষান্তরে, ৪২৯ টু মেনি রিকোয়েস্ট, ৫০০ ইন্টারনাল এরর এবং ৫০৩ সার্ভিস আনঅ্যাভেইলেবলের মতো সাময়িক ত্রুটিগুলো সার্ভারের সাময়িক অতিরিক্ত চাপ নির্দেশ করে যা কয়েক সেকেন্ডের মধ্যে স্বাভাবিক হয়ে যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Exponential backoff with jitter and the 3 operational states of a circuit breaker.',
        bn: 'চিত্র ১: জিটার সহ এক্সপোনেনশিয়াল ব্যাকঅফ এবং সার্কিট ব্রেকারের ৩টি কার্যক্ষম অবস্থা।'
      },
      svg: `<svg viewBox="0 0 840 350" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="350" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">FAULT TOLERANCE & CIRCUIT BREAKER ARCHITECTURE</text>
  
  <!-- Backoff Progression -->
  <g transform="translate(30, 60)">
    <rect width="360" height="260" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#0284c7" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Exponential Backoff with Full Jitter ⏱️</text>
    
    <text x="20" y="65" fill="#38bdf8" font-size="10" font-family="monospace">Wait = random(0, min(15, base * 2^attempt))</text>
    
    <rect x="15" y="75" width="330" height="36" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="98" fill="#cbd5e1" font-size="10" font-family="monospace">Attempt 1 (base 1s): 0s to 1s random</text>
    
    <rect x="15" y="118" width="330" height="36" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="141" fill="#cbd5e1" font-size="10" font-family="monospace">Attempt 2 (base 2s): 0s to 2s random</text>
    
    <rect x="15" y="161" width="330" height="36" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="184" fill="#cbd5e1" font-size="10" font-family="monospace">Attempt 3 (base 4s): 0s to 4s random</text>
    
    <rect x="15" y="204" width="330" height="40" rx="5" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="228" fill="#4ade80" font-size="10" font-family="sans-serif" font-weight="bold">Max Ceiling: 15s cap prevents infinite wait</text>
  </g>

  <!-- Circuit Breaker States -->
  <g transform="translate(450, 60)">
    <rect width="360" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#059669" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">3 Circuit Breaker States 🛡️</text>
    
    <!-- State 1: CLOSED -->
    <rect x="15" y="55" width="330" height="55" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="76" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">1. CLOSED (Normal Operation)</text>
    <text x="25" y="96" fill="#94a3b8" font-size="10" font-family="monospace">Requests pass through. Counter = 0</text>
    
    <!-- State 2: OPEN -->
    <rect x="15" y="118" width="330" height="55" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="139" fill="#f87171" font-size="11" font-family="sans-serif" font-weight="bold">2. OPEN (5 Consecutive Failures)</text>
    <text x="25" y="159" fill="#94a3b8" font-size="10" font-family="monospace">Fails fast without network call. 30s pause</text>
    
    <!-- State 3: HALF-OPEN -->
    <rect x="15" y="181" width="330" height="60" rx="6" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="202" fill="#fbbf24" font-size="11" font-family="sans-serif" font-weight="bold">3. HALF-OPEN (Trial Probe)</text>
    <text x="25" y="222" fill="#94a3b8" font-size="10" font-family="monospace">Sends 1 probe. Success -&gt; CLOSED; Fail -&gt; OPEN</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'jitter-and-thundering-herd-heading',
      text: {
        en: 'The Thundering Herd Trap: Why Full Jitter is Essential',
        bn: 'থান্ডারিং হার্ডের ফাঁদ: ফুল জিটার কেন অপরিহার্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a major AI provider experiences a momentary network hiccup, thousands of client requests fail simultaneously with HTTP 429. If all clients retry after fixed intervals like exactly 1, 2, or 4 seconds, they generate massive synchronized traffic spikes that crash the recovering server anew. Full Jitter decorrelates client retry timings by picking a uniform random duration between 0 and the current exponential backoff ceiling, ensuring smooth and distributed traffic flow.',
        bn: 'যখন কোনো শীর্ষ এআই প্রোভাইডারের সার্ভারে ক্ষণিকের জন্য জটিলতা দেখা দেয়, তখন হাজার হাজার ক্লায়েন্ট রিকোয়েস্ট একসাথে HTTP ৪২৯ কোড পায়। সব ক্লায়েন্ট যদি ঠিক ১, ২ বা ৪ সেকেন্ডের মতো নির্দিষ্ট ব্যবধানে পুনরায় অনুরোধ পাঠায়, তবে সার্ভারে প্রচণ্ড ধাক্কা লাগে এবং তা আবার ডাউন হয়ে যায়। ফুল জিটার ০ থেকে বর্তমান এক্সপোনেনশিয়াল সীমার মধ্যে একটি এলোমেলো সময় বাছাই করে ক্লায়েন্টদের রিট্রাই সময় আলাদা করে দেয়, যার ফলে ট্রাফিক সুষমভাবে ছড়িয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation of exponential backoff with full jitter and status code filtering.',
        bn: 'ফুল জিটার এবং স্ট্যাটাস কোড ফিল্টারিং সহ এক্সপোনেনশিয়াল ব্যাকঅফের TypeScript কোড।'
      },
      code: `interface RetryConfig {
  maxRetries: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

export function calculateJitterDelay(attempt: number, config: RetryConfig): number {
  // Exponential growth: base * 2^attempt
  const exponentialCap = Math.min(config.maxDelayMs, config.baseDelayMs * Math.pow(2, attempt));
  // Full Jitter: uniform random value between 0 and exponentialCap
  return Math.floor(Math.random() * (exponentialCap + 1));
}

export async function executeResilientCall<T>(
  apiFn: () => Promise<{ status: number; data?: T }>,
  config: RetryConfig = { maxRetries: 3, baseDelayMs: 1000, maxDelayMs: 15000 }
): Promise<{ success: boolean; data?: T; attemptsUsed: number }> {
  let attempts = 0;

  while (attempts <= config.maxRetries) {
    attempts++;
    const response = await apiFn();

    // Success HTTP 200
    if (response.status === 200 && response.data) {
      return { success: true, data: response.data, attemptsUsed: attempts };
    }

    // Permanent Client Errors (400, 401, 404): Do NOT retry
    if (response.status === 400 || response.status === 401 || response.status === 404) {
      return { success: false, attemptsUsed: attempts };
    }

    // Transient Errors (429, 500, 503): Calculate jittered wait and retry
    if (response.status === 429 || response.status === 500 || response.status === 503) {
      if (attempts > config.maxRetries) break;
      const waitTime = calculateJitterDelay(attempts - 1, config);
      console.log('Transient status ' + response.status + '; backing off for ' + waitTime + 'ms');
    }
  }

  return { success: false, attemptsUsed: attempts };
}

// Simulated mock execution: attempt 1 returns 429, attempt 2 returns 200
let callCount = 0;
const mockProvider = async () => {
  callCount++;
  if (callCount === 1) return { status: 429 };
  return { status: 200, data: { answer: 'Fault tolerance verified!' } };
};

executeResilientCall(mockProvider).then((res) => {
  console.log('Call Succeeded:', res.success);       // true
  console.log('Total Attempts Made:', res.attemptsUsed); // 2
});`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Exponential Backoff',
          def: {
            en: 'Algorithm that exponentially doubles wait times between consecutive failed requests to relieve server congestion.',
            bn: 'অ্যালগরিদম যা পর্যায়ক্রমিক ব্যর্থ অনুরোধগুলোর মধ্যকার অপেক্ষার সময় দ্বিগুণ করে সার্ভারের চাপ কমায়।'
          }
        },
        {
          term: 'Full Jitter',
          def: {
            en: 'Randomizing wait intervals across a uniform distribution [0, backoff] to desynchronize concurrent client retries.',
            bn: 'অপেক্ষার সময়কে ০ থেকে সর্বোচ্চ সীমার মধ্যে এলোমেলোভাবে নির্ধারণ করে ক্লায়েন্টদের রিট্রাই সময় আলাদা করার পদ্ধতি।'
          }
        },
        {
          term: 'Circuit Breaker',
          def: {
            en: 'Stability pattern that tracks failure rates and temporarily halts all network traffic to a failing upstream service.',
            bn: 'সফটওয়্যার প্যাটার্ন যা ব্যর্থতার হার পর্যবেক্ষণ করে এবং ব্যর্থ সার্ভারে অতিরিক্ত ট্রাফিক যাওয়া সাময়িকভাবে বন্ধ রাখে।'
          }
        },
        {
          term: 'Fallback Model Cascading',
          def: {
            en: 'Routing requests to a secondary backup AI provider when the primary provider returns persistent 429 or 503 errors.',
            bn: 'প্রাথমিক এআই প্রোভাইডার ব্যর্থ হলে স্বয়ংক্রিয়ভাবে দ্বিতীয় কোনো বিকল্প প্রোভাইডারে ট্রাফিক পাঠানোর ব্যবস্থা।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'transient-vs-permanent-ex1',
      kind: 'mcq',
      topic: 'http-status-code-retryability',
      question: {
        en: 'For which of the following HTTP response status codes should an AI client NEVER automatically retry?',
        bn: 'নিচের কোন HTTP স্ট্যাটাস কোড পেলে একটি এআই ক্লায়েন্টের কখনো স্বয়ংক্রিয়ভাবে পুনরায় চেষ্টা করা উচিত নয়?'
      },
      options: [
        { en: 'HTTP 401 Unauthorized (Invalid or revoked API key)', bn: 'HTTP ৪০১ আনঅথরাইজড (অবৈধ বা বাতিল এপিআই চাবি)' },
        { en: 'HTTP 429 Too Many Requests (Rate limit reached)', bn: 'HTTP ৪২৯ টু মেনি রিকোয়েস্ট (রেট লিমিট শেষ)' },
        { en: 'HTTP 503 Service Unavailable (Overloaded server)', bn: 'HTTP ৫০৩ সার্ভিস আনঅ্যাভেইলেবল (সার্ভারে অতিরিক্ত চাপ)' },
        { en: 'HTTP 500 Internal Server Error (Transient backend glitch)', bn: 'HTTP ৫০০ ইন্টারনাল সার্ভার এরর (সাময়িক ব্যাকএন্ড সমস্যা)' }
      ],
      answer: 0,
      hint: {
        en: 'Client authentication bugs cannot resolve themselves without human code updates.',
        bn: 'মানুষ নিজে এপিআই চাবি ঠিক না করা পর্যন্ত প্রমাণীকরণ ত্রুটি নিজে নিজে সমাধান হয় না।'
      },
      explanation: {
        en: 'HTTP 401 signifies permanent authentication failure; retrying repeatedly is futile and wastes network bandwidth.',
        bn: 'HTTP ৪০১ হলো একটি স্থায়ী ত্রুটি; বারবার ভুল চাবি দিয়ে অনুরোধ পাঠালে কেবল সময় ও ব্যান্ডউইথ নষ্ট হয়।'
      }
    },
    {
      id: 'full-jitter-purpose-ex2',
      kind: 'mcq',
      topic: 'full-jitter-thundering-herd-prevention',
      question: {
        en: 'What is the primary benefit of introducing Full Jitter into an exponential backoff retry schedule?',
        bn: 'এক্সপোনেনশিয়াল ব্যাকঅফ শিডিউলে ফুল জিটার যুক্ত করার প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'It breaks synchronization across competing clients, preventing thundering herds from repeatedly crashing a recovering server',
          bn: 'এটি ক্লায়েন্টদের মধ্যকার সময়গত মিল ভেঙে দেয়, ফলে সুস্থ হতে থাকা সার্ভারে পুনরায় অতিরিক্ত চাপ তৈরি হতে পারে না'
        },
        {
          en: 'It lowers the price per token by 50 percent',
          bn: 'এটি প্রতি টোকেনের মূল্য ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'It deletes all error logs from the server hard drive',
          bn: 'এটি সার্ভারের হার্ডড্রাইভ থেকে সব ভুলের রেকর্ড মুছে ফেলে'
        },
        {
          en: 'It accelerates GPU matrix multiplications on client hardware',
          bn: 'এটি ক্লায়েন্টের কম্পিউটারে জিপিইউ গুণনের গতি বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Spreading requests evenly over time prevents artificial synchronized traffic waves.',
        bn: 'অনুরোধগুলোকে সময়ের সাথে সুষমভাবে ছড়িয়ে দিলে ট্রাফিকের হঠাৎ ঢেউ তৈরি হয় না।'
      },
      explanation: {
        en: 'Jitter smooths out aggregate request rates, allowing overloaded providers to recover without being hit by synchronized waves.',
        bn: 'জিটার ট্রাফিকের প্রবাহকে মসৃণ রাখে, যার ফলে অতিরিক্ত চাপে থাকা সার্ভার স্বস্তিতে স্বাভাবিক অবস্থায় ফিরতে পারে।'
      }
    },
    {
      id: 'circuit-breaker-states-ex3',
      kind: 'mcq',
      topic: 'circuit-breaker-state-transitions',
      question: {
        en: 'In our 3-state Circuit Breaker architecture, what occurs when 5 consecutive requests fail?',
        bn: 'আমাদের ৩টি অবস্থার সার্কিট ব্রেকার আর্কিটেকচারে, যখন পরপর ৫টি অনুরোধ ব্যর্থ হয় তখন কী ঘটে?'
      },
      options: [
        {
          en: 'The breaker transitions from CLOSED to OPEN, immediately failing all subsequent requests locally without hitting the network for 30 seconds',
          bn: 'ব্রেকারটি CLOSED থেকে OPEN অবস্থায় চলে যায় এবং ৩০ সেকেন্ড পর্যন্ত নেটওয়ার্কে কোনো কল না পাঠিয়ে স্থানীয়ভাবেই ব্যর্থ দেখায়'
        },
        {
          en: 'The operating system kernel crashes with a blue screen',
          bn: 'অপারেটিং সিস্টেম কার্নেল ক্র্যাশ করে ব্লু স্ক্রিন দেখায়'
        },
        {
          en: 'All API keys are permanently deleted from disk',
          bn: 'ডিস্ক থেকে সমস্ত এপিআই চাবি স্থায়ীভাবে মুছে যায়'
        },
        {
          en: 'The client switches to sending SMS text messages instead',
          bn: 'ক্লায়েন্ট ইন্টারনেটের বদলে এসএমএস পাঠানো শুরু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'An open breaker protects the downstream system by shedding load immediately.',
        bn: 'ওপেন ব্রেকার তাৎক্ষণিকভাবে ট্রাফিক বন্ধ করে মূল সিস্টেমকে বিশ্রাম দেয়।'
      },
      explanation: {
        en: 'Tripping to OPEN prevents failing requests from overwhelming a damaged upstream service while protecting client resources.',
        bn: 'OPEN অবস্থা ক্লায়েন্টের সময় বাঁচায় এবং অসুস্থ সার্ভারের ওপর অতিরিক্ত চাপ ফেলা বন্ধ রাখে।'
      }
    },
    {
      id: 'backoff-ceiling-ex4',
      kind: 'mcq',
      topic: 'exponential-backoff-maximum-ceiling',
      question: {
        en: 'Why must exponential backoff algorithms enforce a hard maximum ceiling (such as 15 seconds)?',
        bn: 'এক্সপোনেনশিয়াল ব্যাকঅফ অ্যালগরিদমে কেন একটি নির্দিষ্ট সর্বোচ্চ সীমা (যেমন ১৫ সেকেন্ড) রাখা আবশ্যক?'
      },
      options: [
        {
          en: 'Uncapped exponential growth (2^attempt) would quickly produce wait times of hours or days, causing callers to hang indefinitely',
          bn: 'সীমাহীন বৃদ্ধি (২^attempt) দ্রুত ঘণ্টার পর ঘণ্টা বা দিনের সমান অপেক্ষার সৃষ্টি করবে, যার ফলে কলকারী সম্পূর্ণ আটকে থাকবে'
        },
        {
          en: 'Because network cables overheat if delay exceeds 15 seconds',
          bn: 'কারণ ১৫ সেকেন্ডের বেশি অপেক্ষা করলে নেটওয়ার্কের তার অতিরিক্ত গরম হয়ে যায়'
        },
        {
          en: 'To force the computer to reboot every 15 seconds',
          bn: 'প্রতি ১৫ সেকেন্ড পর পর কম্পিউটার রিবুট করতে বাধ্য করার জন্য'
        },
        {
          en: 'It is strictly forbidden by HTTP 2.0 specifications',
          bn: 'এটি HTTP ২.০ স্পেসিফিকেশনে কঠোরভাবে নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: '2^10 is 1024 seconds (over 17 minutes); bounds are needed to maintain responsiveness.',
        bn: '২^১০ মানে ১০২৪ সেকেন্ড (১৭ মিনিটের বেশি); সিস্টেম সচল রাখতে একটি যুক্তিসঙ্গত সীমা থাকা জরুরি।'
      },
      explanation: {
        en: 'Capping maximum backoff at a reasonable ceiling guarantees requests fail within sensible application timeout windows.',
        bn: 'সর্বোচ্চ সীমা নির্ধারণ নিশ্চিত করে যে ব্যর্থ অনুরোধগুলো একটি বাস্তবসম্মত সময়ের মধ্যেই সমাপ্তি পায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-retries-resilience',
    title: {
      en: 'Retries, Resilience, and Fault Tolerance Quiz',
      bn: 'রিট্রাই, স্থিতিস্থাপকতা এবং ত্রুটি সহনশীলতা কুইজ'
    },
    questions: [
      {
        id: 'quiz-retry-after-header',
        kind: 'mcq',
        topic: 'retry-after-header-respect',
        question: {
          en: 'When an upstream AI API responds with HTTP 429 and includes a "Retry-After: 6" header, what should the client do?',
          bn: 'যখন কোনো এআই এপিআই HTTP ৪২৯ রেসপন্সের সাথে "Retry-After: 6" হেডার পাঠায়, তখন ক্লায়েন্টের কী করা উচিত?'
        },
        options: [
          {
            en: 'Respect the server directive and pause execution for at least 6 seconds before attempting the retry',
            bn: 'সার্ভারের নির্দেশ মেনে অন্তত ৬ সেকেন্ড অপেক্ষা করার পর পুনরায় অনুরোধ পাঠানোর চেষ্টা করা'
          },
          {
            en: 'Ignore the header and retry immediately within 1 millisecond',
            bn: 'হেডার উপেক্ষা করে ১ মিলিসেকেন্ডের মধ্যেই সাথে সাথে পুনরায় চেষ্টা করা'
          },
          {
            en: 'Delete the user account from the database',
            bn: 'ডেটাবেস থেকে ব্যবহারকারীর অ্যাকাউন্টটি মুছে ফেলা'
          },
          {
            en: 'Send 6 simultaneous duplicate requests',
            bn: 'একসাথে ৬টি নকল অনুরোধ পাঠানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Retry-After header informs the client of the exact rate limit reset window.',
          bn: 'Retry-After হেডার জানায় কত সেকেন্ড পর রেট লিমিট পুনরায় স্বাভাবিক হবে।'
        },
        explanation: {
          en: 'Honoring Retry-After headers prevents immediate repeated 429 rejections and respects provider backpressure.',
          bn: 'Retry-After হেডার অনুসরণ করলে পুনরায় ৪২৯ ত্রুটিতে পড়ার ঝুঁকি থাকে না।'
        }
      },
      {
        id: 'quiz-half-open-probe-purpose',
        kind: 'mcq',
        topic: 'half-open-circuit-breaker-probe',
        question: {
          en: 'What is the specific duty of the HALF-OPEN state in a circuit breaker?',
          bn: 'একটি সার্কিট ব্রেকারে HALF-OPEN অবস্থার সুনির্দিষ্ট দায়িত্ব কী?'
        },
        options: [
          {
            en: 'To send a single trial request to test if the upstream service has recovered; if successful, it resets to CLOSED',
            bn: 'সার্ভার সুস্থ হয়েছে কিনা তা দেখতে একটি পরীক্ষামূলক অনুরোধ পাঠানো; সফল হলে ব্রেকারটি আবার CLOSED অবস্থায় ফিরে যায়'
          },
          {
            en: 'To run memory diagnostics on local hard drives',
            bn: 'হার্ডড্রাইভের মেমোরি পরীক্ষা করা'
          },
          {
            en: 'To cut network bandwidth by exactly 50 percent',
            bn: 'নেটওয়ার্ক ব্যান্ডউইথ ঠিক ৫০ শতাংশ কমিয়ে দেওয়া'
          },
          {
            en: 'To encrypt all chat messages with a public key',
            bn: 'সমস্ত চ্যাট মেসেজকে পাবলিক কী দিয়ে এনক্রিপ্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'It cautiously tests the waters before resuming full operational traffic.',
          bn: 'সম্পূর্ণ ট্রাফিক ছাড়ার আগে এটি সাবধানে পরিস্থিতি পরীক্ষা করে নেয়।'
        },
        explanation: {
          en: 'The HALF-OPEN probe verifies service recovery without exposing the provider to a full blast of pending traffic.',
          bn: 'HALF-OPEN অবস্থা সব ট্রাফিক একসাথে না পাঠিয়ে একটি মাত্র কলের মাধ্যমে সার্ভারের সুস্থতা যাচাই করে।'
        }
      },
      {
        id: 'quiz-cascading-fallback-selection',
        kind: 'mcq',
        topic: 'fallback-cascading-architecture',
        question: {
          en: 'In an enterprise multi-model cascade, how should fallback models be prioritized?',
          bn: 'একটি এন্টারপ্রাইজ মাল্টি-মডেল ক্যাসকেডে বিকল্প মডেলগুলোকে কীভাবে অগ্রাধিকার দেওয়া উচিত?'
        },
        options: [
          {
            en: 'Route to an equivalent-tier model from an independent cloud provider or a fast lightweight model with lower latency',
            bn: 'একটি সম্পূর্ণ ভিন্ন ক্লাউড প্রোভাইডারের সমমানের মডেলে অথবা দ্রুত সাড়া দেওয়া সাশ্রয়ী কোনো মডেলে ট্রাফিক পাঠানো'
          },
          {
            en: 'Route to a model that has been completely shut down for 5 years',
            bn: 'এমন কোনো মডেলে পাঠানো যা ৫ বছর আগেই বন্ধ হয়ে গেছে'
          },
          {
            en: 'Route to a local printer connected via USB cable',
            bn: 'ইউএসবি তার দিয়ে যুক্ত একটি প্রিন্টারে ট্রাফিক পাঠানো'
          },
          {
            en: 'Route all traffic directly to random spam email addresses',
            bn: 'সমস্ত ট্রাফিক সরাসরি স্প্যাম ইমেইল ঠিকানায় পাঠানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'The backup provider must be structurally independent of the failing provider.',
          bn: 'বিকল্প প্রোভাইডারকে মূল প্রোভাইডারের অবকাঠামোর ওপর সম্পূর্ণ স্বাধীন হতে হবে।'
        },
        explanation: {
          en: 'Multi-provider redundancy ensures business continuity even during catastrophic outages at a primary AI vendor.',
          bn: 'একাধিক প্রোভাইডারের ব্যবস্থা থাকলে একটি বড় কোম্পানি ডাউন হলেও গ্রাহকের কাজ নিরবচ্ছিন্নভাবে চলতে থাকে।'
        }
      },
      {
        id: 'quiz-idempotency-keys',
        kind: 'mcq',
        topic: 'idempotent-retries-keys',
        question: {
          en: 'Why do modern financial and transactional AI endpoints require Idempotency-Key headers during retries?',
          bn: 'আধুনিক আর্থিক এবং লেনদেন সংক্রান্ত এআই এন্ডপয়েন্টে পুনরায় অনুরোধের সময় কেন Idempotency-Key হেডার থাকা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'To prevent duplicate executions (such as double-charging a credit card) if a network drop occurred after the server executed the action',
            bn: 'সার্ভারে কাজ শেষ হওয়ার পর নেটওয়ার্ক বিচ্ছিন্ন হলে যাতে পুনরায় একই কাজের ডুপ্লিকেট না ঘটে (যেমন দুবার টাকা কাটা)'
          },
          {
            en: 'To make the response text appear in bold letters',
            bn: 'উত্তরের টেক্সটকে গাঢ় বা বোল্ড অক্ষরে দেখানোর জন্য'
          },
          {
            en: 'To decrease the physical temperature of the server room',
            bn: 'সার্ভার রুমের তাপমাত্রা কমানোর উদ্দেশ্যে'
          },
          {
            en: 'It is required to allocate GPU video memory',
            bn: 'জিপিইউ ভিডিও মেমোরি বরাদ্দের জন্য এটি থাকা আবশ্যক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Idempotency guarantees that executing the same operation 5 times produces the exact same result as executing it once.',
          bn: 'আইডেমপোটেন্সি নিশ্চিত করে যে একটি কাজ ৫ বার চালালেও ফলাফল ঠিক ১ বার চালানোর মতোই হবে।'
        },
        explanation: {
          en: 'Idempotency keys deduplicate retried API calls, ensuring safety in financial transactions and state modifications.',
          bn: 'আইডেমপোটেন্সি চাবি বারবার আসা অনুরোধের মধ্যে পার্থক্য বুঝে একাধিকবার টাকা কাটা বা ভুল পুনরাবৃত্তি রোধ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'cost-budgets',
    title: {
      en: 'Cost Optimization, Prompt Caching & Model Routing',
      bn: 'ব্যয় অপ্টিমাইজেশন, প্রম্পট ক্যাশিং এবং মডেল রাউটিং'
    }
  }
};
