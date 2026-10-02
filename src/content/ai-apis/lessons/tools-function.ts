import type { Lesson } from '../../../lib/types';

export const ToolsFunctionLesson: Lesson = {
  slug: 'tools-function',
  tech: 'ai-apis',
  title: {
    en: 'Function Calling & Tool Use Architecture',
    bn: 'ফাংশন কলিং এবং টুল ব্যবহারের আর্কিটেকচার'
  },
  summary: {
    en: 'Connect AI models to external systems: define precise JSON Schema tool signatures, inspect finish_reason tool_calls, safely execute local application handlers, and return observation messages in a structured 4-step conversation loop.',
    bn: 'বাহ্যিক সিস্টেমের সাথে এআই মডেল যুক্ত করুন: সুনির্দিষ্ট JSON স্কিমা টুল সিগনেচার তৈরি, finish_reason tool_calls পরীক্ষা, নিরাপদ লোকাল হ্যান্ডলার চালানো এবং ৪টি ধাপের লুপে অবজারভেশন মেসেজ পাঠানো।'
  },
  minutes: 29,
  blocks: [
    {
      type: 'heading',
      id: 'tool-use-lifecycle-heading',
      text: {
        en: 'The Core Truth: Models Do Not Execute Code Themselves',
        bn: 'মৌলিক সত্য: মডেল নিজে কখনোই সরাসরি কোড চালায় না'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A foundational misconception in AI engineering is assuming the neural network reaches out to external databases or executes shell scripts directly. In reality, modern models act as structured argument generators. When provided with a tool specification, the model inspects user intent, halts normal text generation with finish_reason: "tool_calls", and emits a JSON payload containing the function name and arguments. Your application backend executes the actual function safely in a controlled runtime.',
        bn: 'এআই ইঞ্জিনিয়ারিংয়ের একটি সাধারণ ভুল ধারণা হলো মডেলটি নিজে ডেটাবেসে অনুসন্ধান চালায় বা সরাসরি কোনো স্ক্রিপ্ট এক্সিকিউট করে। প্রকৃতপক্ষে মডেলটি কেবল একটি সুনির্দিষ্ট আর্গুমেন্ট জেনারেটর হিসেবে কাজ করে। যখন মডেলকে কোনো টুলের বিবরণ দেওয়া হয়, তখন সে ব্যবহারকারীর উদ্দেশ্য বুঝে স্বাভাবিক লেখা থামিয়ে finish_reason: "tool_calls" পাঠায় এবং একটি JSON অবজেক্ট প্রদান করে। আপনার নিজস্ব অ্যাপ্লিকেশন ব্যাকএন্ড সেই JSON পড়ে নিরাপদ পরিবেশে মূল ফাংশনটি চালায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-step round-trip tool execution lifecycle between client and LLM.',
        bn: 'চিত্র ১: ক্লায়েন্ট এবং ল্যাঙ্গুয়েজ মডেলের মধ্যকার ৪টি ধাপের টুল ব্যবহারের কার্যপ্রণালী।'
      },
      svg: `<svg viewBox="0 0 840 350" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="350" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">THE 4-STEP FUNCTION CALLING LIFECYCLE</text>
  
  <!-- Step 1 -->
  <g transform="translate(30, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#0284c7" />
    <text x="90" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Prompt &amp; Schema</text>
    
    <text x="15" y="60" fill="#94a3b8" font-size="10" font-family="monospace">Client -&gt; Model</text>
    <rect x="10" y="70" width="160" height="80" rx="5" fill="#0f172a" />
    <text x="15" y="90" fill="#cbd5e1" font-size="9" font-family="sans-serif">User: "Weather in"</text>
    <text x="15" y="105" fill="#cbd5e1" font-size="9" font-family="sans-serif">"Dhaka city?"</text>
    <text x="15" y="125" fill="#38bdf8" font-size="9" font-family="monospace">+ tools: [fetchWeather]</text>
    <text x="15" y="140" fill="#94a3b8" font-size="8" font-family="monospace">strict: true schema</text>
    
    <text x="15" y="180" fill="#38bdf8" font-size="10" font-family="sans-serif">Model understands</text>
    <text x="15" y="195" fill="#cbd5e1" font-size="9" font-family="sans-serif">tool signature rules</text>
  </g>

  <!-- Step 2 -->
  <g transform="translate(230, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#d97706" />
    <text x="90" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Tool Call Payload</text>
    
    <text x="15" y="60" fill="#94a3b8" font-size="10" font-family="monospace">Model -&gt; Client</text>
    <rect x="10" y="70" width="160" height="110" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="90" fill="#facc15" font-size="9" font-family="monospace">finish_reason: "tool_calls"</text>
    <text x="15" y="110" fill="#cbd5e1" font-size="9" font-family="monospace">id: "call_abc123"</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">name: "fetchWeather"</text>
    <text x="15" y="150" fill="#4ade80" font-size="9" font-family="monospace">args: {"city":"Dhaka"}</text>
    <text x="15" y="170" fill="#94a3b8" font-size="8" font-family="sans-serif">Zero text emitted yet</text>
  </g>

  <!-- Step 3 -->
  <g transform="translate(430, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#7e22ce" />
    <text x="90" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Client Execution</text>
    
    <text x="15" y="60" fill="#94a3b8" font-size="10" font-family="monospace">Local Backend</text>
    <rect x="10" y="70" width="160" height="95" rx="5" fill="#0f172a" />
    <text x="15" y="90" fill="#c084fc" font-size="9" font-family="monospace">fetchWeather("Dhaka")</text>
    <text x="15" y="110" fill="#cbd5e1" font-size="9" font-family="sans-serif">Hits SQL or REST API</text>
    <text x="15" y="130" fill="#38bdf8" font-size="9" font-family="monospace">Result: {tempC: 28}</text>
    <text x="15" y="150" fill="#94a3b8" font-size="8" font-family="sans-serif">Sandboxed safe run</text>
    
    <text x="15" y="190" fill="#cbd5e1" font-size="9" font-family="sans-serif">Wraps as role: 'tool'</text>
    <text x="15" y="205" fill="#a855f7" font-size="9" font-family="monospace">tool_call_id matched</text>
  </g>

  <!-- Step 4 -->
  <g transform="translate(630, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#059669" />
    <text x="90" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Final Answer</text>
    
    <text x="15" y="60" fill="#94a3b8" font-size="10" font-family="monospace">Model -&gt; User</text>
    <rect x="10" y="70" width="160" height="85" rx="5" fill="#0f172a" stroke="#22c55e" />
    <text x="15" y="90" fill="#4ade80" font-size="9" font-family="monospace">finish_reason: "stop"</text>
    <text x="15" y="110" fill="#cbd5e1" font-size="9" font-family="sans-serif">"The temperature in"</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="9" font-family="sans-serif">"Dhaka is currently"</text>
    <text x="15" y="140" fill="#facc15" font-size="9" font-family="sans-serif">"28 degrees Celsius."</text>
    
    <text x="15" y="180" fill="#4ade80" font-size="10" font-family="sans-serif">Grounded synthesis</text>
    <text x="15" y="195" fill="#94a3b8" font-size="9" font-family="sans-serif">Zero hallucination</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'schema-security-heading',
      text: {
        en: 'Strict Schema Conformance and Security Defenses',
        bn: 'কঠোর স্কিমা মেনে চলা এবং নিরাপত্তা ব্যবস্থা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Enabling strict: true in your tool schema forces the LLM constrained decoding sampler to follow your JSON Schema without omitting properties or hallucinating invalid types. From a security standpoint, never pass model arguments directly into eval(), SQL raw strings, or shell exec calls. Treat tool parameters as untrusted user input, validating them against schemas before executing application logic.',
        bn: 'টুল স্কিমায় strict: true চালু করলে মডেলটি কোনো ফিল্ড বাদ দেওয়া বা ভুল ডেটা টাইপ তৈরি না করে শতভাগ নিয়ম মেনে চলে। নিরাপত্তার ক্ষেত্রে মনে রাখতে হবে, মডেলের পাঠানো প্যারামিটারকে কখনোই সরাসরি eval(), এসকিউএল কোয়েরি বা শেল কমান্ডে পাঠানো যাবে না। টুলের আর্গুমেন্টকে যেকোনো সাধারণ ব্যবহারকারীর অপরীক্ষিত ইনপুটের মতো বিবেচনা করে যথাযথ যাচাইয়ের পরেই কার্যকর করা উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript dispatch engine executing local handlers and returning role "tool" responses.',
        bn: 'লোকাল হ্যান্ডলার এক্সিকিউট করে role "tool" রেসপন্স পাঠানোর TypeScript ডিসপ্যাচ কোড।'
      },
      code: `interface ToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
}

interface ToolDefinition {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: Record<string, unknown>;
    strict?: boolean;
  };
}

// 1. Tool Declaration matching standard OpenAI/Anthropic spec
export const stockTool: ToolDefinition = {
  type: 'function',
  function: {
    name: 'checkStockPrice',
    description: 'Retrieves current equity valuation for a given ticker symbol',
    parameters: {
      type: 'object',
      properties: {
        symbol: { type: 'string', description: 'Stock ticker e.g. AAPL' }
      },
      required: ['symbol'],
      additionalProperties: false
    },
    strict: true
  }
};

// 2. Safe local execution registry
const localRegistry: Record<string, (args: any) => Promise<any>> = {
  checkStockPrice: async (args: { symbol: string }) => {
    // In production, execute verified database or API call
    return { symbol: args.symbol.toUpperCase(), currentPrice: 230, currency: 'USD' };
  }
};

// 3. Dispatch handler
export async function executeModelToolCall(toolCall: ToolCall) {
  const handler = localRegistry[toolCall.function.name];
  if (!handler) {
    throw new Error('Unknown tool requested: ' + toolCall.function.name);
  }

  const parsedArgs = JSON.parse(toolCall.function.arguments);
  const result = await handler(parsedArgs);

  // Return formatted observation for next conversation turn
  return {
    role: 'tool' as const,
    tool_call_id: toolCall.id,
    content: JSON.stringify(result)
  };
}

// Simulated model output for 1 incoming request
const mockToolCall: ToolCall = {
  id: 'call_987abc',
  type: 'function',
  function: {
    name: 'checkStockPrice',
    arguments: '{"symbol":"AAPL"}'
  }
};

executeModelToolCall(mockToolCall).then((observation) => {
  console.log('Tool Message Role:', observation.role);           // "tool"
  console.log('Tool Call ID Matching:', observation.tool_call_id); // "call_987abc"
  console.log('Observation Payload:', observation.content);      // "{"symbol":"AAPL","currentPrice":230,"currency":"USD"}"
});`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Function Calling',
          def: {
            en: 'Capability where the LLM emits structured JSON parameters to invoke external tools instead of conversational text.',
            bn: 'মডেলের বিশেষ ক্ষমতা যার মাধ্যমে সাধারণ টেক্সট না লিখে বাহ্যিক টুল ব্যবহারের জন্য সুনির্দিষ্ট JSON তৈরি করে।'
          }
        },
        {
          term: 'Tool Call ID',
          def: {
            en: 'Unique opaque string generated by the provider linking a tool execution request to its subsequent observation message.',
            bn: 'প্রোভাইডারের তৈরি করা একটি অনন্য স্ট্রিং যা টুলের অনুরোধের সাথে পরবর্তী ফলাফলের সংযোগ স্থাপন করে।'
          }
        },
        {
          term: 'JSON Schema Strict Mode',
          def: {
            en: 'Constrained sampling parameter enforcing 100% adherence to required fields and parameter types without hallucination.',
            bn: 'কঠোর স্যামপ্লিং নিয়ম যা মডেলকে কোনো ক্ষেত্র বাদ না দিয়ে হুবহু JSON স্কিমা মেনে চলতে বাধ্য করে।'
          }
        },
        {
          term: 'Observation Message',
          def: {
            en: 'Chat message with role "tool" carrying execution results back to the LLM to synthesize final user answers.',
            bn: 'role "tool" সংবলিত মেসেজ যা ফাংশন চালানোর ফলাফল পুনরায় মডেলে পাঠিয়ে চূড়ান্ত উত্তর তৈরির সুযোগ দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tool-execution-responsibility-ex1',
      kind: 'mcq',
      topic: 'who-executes-tool-functions',
      question: {
        en: 'Who actually executes the external database query or API call during a function calling turn?',
        bn: 'ফাংশন কলিং প্রক্রিয়ায় ডেটাবেস কোয়েরি বা এপিআই কলটি আসলে কে চালায়?'
      },
      options: [
        {
          en: 'The developer local application server; the model merely emits the structured arguments',
          bn: 'ডেভেলপারের নিজস্ব অ্যাপ্লিকেশন সার্ভার; মডেলটি কেবল সুনির্দিষ্ট আর্গুমেন্টগুলো তৈরি করে দেয়'
        },
        {
          en: 'The neural network GPU kernel directly executes the SQL database connection',
          bn: 'নিউরাল নেটওয়ার্কের জিপিইউ নিজে সরাসরি এসকিউএল ডেটাবেসের সাথে যুক্ত হয়ে কোড চালায়'
        },
        {
          en: 'The user web browser runs the query inside CSS stylesheets',
          bn: 'ব্যবহারকারীর ওয়েব ব্রাউজার সিএসএস ফাইলের ভেতর কোয়েরি চালায়'
        },
        {
          en: 'The physical undersea internet cables execute the query',
          bn: 'সমুদ্রের তলদেশের অপটিক্যাল ফাইবার তারগুলো কোয়েরি চালায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The language model has no network access to your internal database.',
        bn: 'আপনার ব্যক্তিগত ডেটাবেসে ল্যাঙ্গুয়েজ মডেলের কোনো সরাসরি নেটওয়ার্ক অ্যাক্সেস নেই।'
      },
      explanation: {
        en: 'Models generate arguments as text; developers validate and execute the actual functions in their own infrastructure.',
        bn: 'মডেল কেবল টেক্সট হিসেবে আর্গুমেন্ট পাঠায়; ডেভেলপার নিজে তা যাচাই করে নিজের সার্ভারে চালায়।'
      }
    },
    {
      id: 'finish-reason-tool-calls-ex2',
      kind: 'mcq',
      topic: 'finish-reason-detection',
      question: {
        en: 'Which API response property indicates that the model has requested a tool execution instead of ending the conversation?',
        bn: 'এপিআই রেসপন্সের কোন প্রোপার্টিটি নির্দেশ করে যে মডেল উত্তর শেষ না করে একটি টুল চালানোর অনুরোধ করেছে?'
      },
      options: [
        { en: 'finish_reason: "tool_calls"', bn: 'finish_reason: "tool_calls"' },
        { en: 'status: "reboot_machine"', bn: 'status: "reboot_machine"' },
        { en: 'error_code: 500', bn: 'error_code: 500' },
        { en: 'content: "DONE_FOREVER"', bn: 'content: "DONE_FOREVER"' }
      ],
      answer: 0,
      hint: {
        en: 'Look for the finish_reason attribute in the completion choice object.',
        bn: 'কমপ্লিশনের চয়েস অবজেক্টের finish_reason ফিল্ডটি লক্ষ্য করুন।'
      },
      explanation: {
        en: 'finish_reason: "tool_calls" signals your application loop to inspect tool_calls and invoke local handlers.',
        bn: 'finish_reason: "tool_calls" নির্দেশ পাওয়া মাত্র অ্যাপ্লিকেশন স্থানীয় ফাংশন চালানোর প্রস্তুতি নেয়।'
      }
    },
    {
      id: 'tool-call-id-matching-ex3',
      kind: 'mcq',
      topic: 'tool-call-id-integrity',
      question: {
        en: 'Why is it mandatory to pass tool_call_id back inside the role "tool" observation message?',
        bn: 'role "tool" সমৃদ্ধ মেসেজে tool_call_id ফেরত পাঠানো কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'It enables the model to pair the observation result with the specific pending function call when multiple parallel tools run',
          bn: 'একসাথে একাধিক টুল চললে কোন ফলাফলের জন্য কোন ফাংশনটি কল করা হয়েছিল তা মডেলকে নির্ভুলভাবে মেলাতে সাহায্য করে'
        },
        {
          en: 'It is required to change font sizes on mobile devices',
          bn: 'মোবাইলে লেখার ফ্রন্ট সাইজ পরিবর্তনের জন্য এটি প্রয়োজন'
        },
        {
          en: 'To wipe the server temporary memory cache',
          bn: 'সার্ভারের ক্যাশ মুছে ফেলার জন্য'
        },
        {
          en: 'To restart the client router automatically',
          bn: 'ক্লায়েন্টের রাউটার রিস্টার্ট করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'When parallel tool calls occur, the ID prevents result misattribution.',
        bn: 'একসাথে একাধিক টুল কল হলে এই আইডির মাধ্যমে সঠিক ফলাফল সঠিক টুলে যুক্ত হয়।'
      },
      explanation: {
        en: 'tool_call_id matches function requests to responses, maintaining conversational state integrity.',
        bn: 'tool_call_id অনুরোধ ও ফলাফলের মধ্যে সেতুবন্ধন তৈরি করে কথোপকথনের ধারাবাহিকতা বজায় রাখে।'
      }
    },
    {
      id: 'strict-mode-benefit-ex4',
      kind: 'mcq',
      topic: 'strict-mode-constrained-decoding',
      question: {
        en: 'What is the concrete advantage of setting strict: true in modern OpenAI-compatible tool specifications?',
        bn: 'আধুনিক এআই টুল স্পেসিফিকেশনে strict: true ব্যবহারের সুনির্দিষ্ট সুবিধা কী?'
      },
      options: [
        {
          en: 'It guarantees 100% adherence to defined parameter types, eliminating hallucinated fields and schema parsing errors',
          bn: 'এটি সংজ্ঞায়িত ডেটা টাইপ শতভাগ নিশ্চিত করে, ফলে মনগড়া ফিল্ড বা ফরম্যাটিং ত্রুটি পুরোপুরি দূর হয়'
        },
        {
          en: 'It speeds up fiber optic transmission by 50 percent',
          bn: 'এটি অপটিক্যাল ফাইবার কেবলের গতি ৫০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It makes the model respond exclusively in hexadecimal format',
          bn: 'এটি মডেলকে কেবল হেক্সাডেসিমেল সংখ্যায় উত্তর দিতে বাধ্য করে'
        },
        {
          en: 'It compresses user images into zip files',
          bn: 'এটি ব্যবহারকারীর ছবিগুলোকে জিপ ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Constrained sampling masks out illegal tokens during generation.',
        bn: 'কঠোর স্যামপ্লিং নিয়ম মেনে চলার ফলে মডেল ভুল টোকেন তৈরি করতে পারে না।'
      },
      explanation: {
        en: 'Strict mode uses grammar-guided decoding so the model cannot emit fields outside the schema.',
        bn: 'স্ট্রিক্ট মোড ব্যাকরণ মেনে কোড তৈরি করায় স্কিমার বাইরের কোনো কিছু তৈরি হওয়ার সুযোগ থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tools-function',
    title: {
      en: 'Function Calling & Tool Use Architecture Quiz',
      bn: 'ফাংশন কলিং এবং টুল ব্যবহার কুইজ'
    },
    questions: [
      {
        id: 'quiz-destructive-action-confirmation',
        kind: 'mcq',
        topic: 'human-in-the-loop-destructive-actions',
        question: {
          en: 'How should an enterprise application handle tool calls that perform destructive actions (such as deleting a user account or transferring funds)?',
          bn: 'মুছে ফেলা বা টাকা পাঠানোর মতো ঝুঁকিপূর্ণ কাজের জন্য তৈরি টুলগুলোর ক্ষেত্রে অ্যাপ্লিকেশনের কী করা উচিত?'
        },
        options: [
          {
            en: 'Require explicit human-in-the-loop confirmation in the UI before calling the local execution handler',
            bn: 'লোকাল ফাংশনটি চালানোর আগে স্ক্রিনে ব্যবহারকারীর কাছ থেকে স্পষ্ট সম্মতি বা অনুমোদন গ্রহণ করা'
          },
          {
            en: 'Run the function immediately without asking anyone',
            bn: 'কাউকে কিছু না জানিয়ে সাথে সাথে ফাংশনটি চালিয়ে ফেলা'
          },
          {
            en: 'Delete the entire database backup immediately',
            bn: 'সাথে সাথে ডেটাবেসের সমস্ত ব্যাকআপ মুছে ফেলা'
          },
          {
            en: 'Print the user bank password in server terminal logs',
            bn: 'সার্ভার টার্মিনালে ব্যবহারকারীর পাসওয়ার্ড প্রিন্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Irreversible state modifications should always require human authorization.',
          bn: 'যা আর ফিরিয়ে আনা সম্ভব নয়, এমন কাজের আগে মানুষের অনুমোদন থাকা আবশ্যক।'
        },
        explanation: {
          en: 'Human-in-the-loop confirmation prevents accidental catastrophic mutations caused by prompt injection or misinterpretation.',
          bn: 'মানুষের সম্মতি গ্রহণের নিয়ম থাকলে অসাবধানতাবশত কোনো বড় ক্ষতি হওয়া থেকে সিস্টেম নিরাপদ থাকে।'
        }
      },
      {
        id: 'quiz-parallel-tool-calls',
        kind: 'mcq',
        topic: 'parallel-tool-calling-concurrency',
        question: {
          en: 'When a model emits 3 parallel tool calls in a single turn, how should the application backend execute them?',
          bn: 'একটি অনুরোধে মডেল যদি একসাথে ৩টি টুল চালানোর নির্দেশ দেয়, তবে ব্যাকএন্ডের কীভাবে তা চালানো উচিত?'
        },
        options: [
          {
            en: 'Execute them concurrently via Promise.all and append all 3 role "tool" responses before initiating the next LLM call',
            bn: 'Promise.all ব্যবহার করে সমান্তরালভাবে ৩টি কাজ সম্পন্ন করা এবং সবগুলো ফলাফল যুক্ত করে পরবর্তী এআই কল পাঠানো'
          },
          {
            en: 'Execute only the first tool and discard the remaining 2 calls forever',
            bn: 'কেবল প্রথমটি চালিয়ে বাকি ২টি কল চিরতরে বাদ দিয়ে দেওয়া'
          },
          {
            en: 'Crash the server with an unhandled exception',
            bn: 'সার্ভার ক্র্যাশ করিয়ে বন্ধ করে দেওয়া'
          },
          {
            en: 'Wait 24 hours between executing each tool',
            bn: 'প্রতিটি টুল চালানোর মাঝে ২৪ ঘণ্টা করে অপেক্ষা করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Running independent tool calls in parallel minimizes total round-trip latency.',
          bn: 'স্বাধীন কাজগুলো একসাথে চালালে অ্যাপ্লিকেশনের গতি বহুগুণ বৃদ্ধি পায়।'
        },
        explanation: {
          en: 'Concurrent execution resolves all pending tool calls efficiently, providing complete observations to the model in one turn.',
          bn: 'সমান্তরালভাবে কাজগুলো সম্পন্ন করলে একবারে সবগুলো তথ্য মডেলে পাঠিয়ে দ্রুত চূড়ান্ত উত্তর তৈরি করা যায়।'
        }
      },
      {
        id: 'quiz-prompt-injection-tool-defense',
        kind: 'mcq',
        topic: 'indirect-prompt-injection-via-tools',
        question: {
          en: 'What is an "Indirect Prompt Injection" attack in the context of tool use?',
          bn: 'টুল ব্যবহারের ক্ষেত্রে "ইনডাইরেক্ট প্রম্পট ইনজেকশন" আক্রমণ বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'Untrusted external content fetched by a tool contains malicious instructions that hijack the model subsequent behavior',
            bn: 'টুলের মাধ্যমে আনা কোনো ওয়েবপেজ বা ফাইলে ক্ষতিকর নির্দেশ লুকিয়ে থাকা যা মডেলের পরবর্তী আচরণকে বিপথগামী করে'
          },
          {
            en: 'A hardware flaw in Intel CPU chips',
            bn: 'ইনটেল সিপিইউ চিপের একটি হার্ডওয়্যার ত্রুটি'
          },
          {
            en: 'An SQL database lacking foreign key constraints',
            bn: 'ফরেন কি না থাকা একটি সাধারণ এসকিউএল ডেটাবেস'
          },
          {
            en: 'A user typing an invalid email format into an input field',
            bn: 'ইনপুট ফিল্ডে ভুল ফরম্যাটের ইমেইল টাইপ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Data retrieved from outside can contain instructions disguised as content.',
          bn: 'বাইরের আনা ডেটার মধ্যে ছদ্মবেশী ক্ষতিকর প্রম্পট থাকতে পারে।'
        },
        explanation: {
          en: 'Indirect prompt injection occurs when external web or email data instructs the model to violate constraints or exfiltrate secrets.',
          bn: 'বাইরের অপরীক্ষিত লেখার ভেতর থাকা নির্দেশাবলী মডেলকে বিভ্রান্ত করে অনাকাঙ্ক্ষিত কাজ করাতে পারে।'
        }
      },
      {
        id: 'quiz-tool-choice-forcing',
        kind: 'mcq',
        topic: 'tool-choice-parameter-control',
        question: {
          en: 'How can an application force the model to invoke a specific tool named "generateChart" rather than writing conversational prose?',
          bn: 'সাধারণ লেখার বদলে মডেলকে নির্দিষ্টভাবে "generateChart" টুলটি ব্যবহারে বাধ্য করতে কোন প্যারামিটার ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Set tool_choice: { type: "function", function: { name: "generateChart" } } in the API payload',
            bn: 'এপিআই পেলোডে tool_choice: { type: "function", function: { name: "generateChart" } } নির্ধারণ করে'
          },
          {
            en: 'Type "PLEASE RUN CHART" in all-caps 50 times in the prompt',
            bn: 'প্রম্পটের ভেতর ৫০ বার বড় হাতের অক্ষরে "PLEASE RUN CHART" লিখে'
          },
          {
            en: 'Disconnect the computer keyboard during transmission',
            bn: 'ডেটা পাঠানোর সময় কীবোর্ডের তার খুলে ফেলে'
          },
          {
            en: 'Delete the CSS styles from the application frontend',
            bn: 'অ্যাপ্লিকেশন থেকে সিএসএস স্টাইল মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use the tool_choice configuration parameter provided by the API specification.',
          bn: 'এপিআই স্পেসিফিকেশনে দেওয়া tool_choice প্যারামিটারটি ব্যবহার করুন।'
        },
        explanation: {
          en: 'Explicit tool_choice constraints guarantee deterministic execution of the specified tool without conversational deviation.',
          bn: 'tool_choice সুনির্দিষ্ট করে দিলে মডেল কোনো গল্প না লিখে সরাসরি সেই নির্দিষ্ট ফাংশনটি কল করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'evals-prod',
    title: {
      en: 'Production LLM Evaluation, Guardrails & Quality Metrics',
      bn: 'প্রোডাকশন এলএলএম মূল্যায়ন, গার্ডরেল এবং গুণমান মেট্রিক্স'
    }
  }
};
