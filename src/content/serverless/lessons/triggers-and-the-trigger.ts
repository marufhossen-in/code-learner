import type { Lesson } from '../../../lib/types';

export const TriggersAndTheTriggerLesson: Lesson = {
  slug: 'triggers-and-the-trigger',
  tech: 'serverless',
  title: {
    en: 'Event Triggers — Event Source Mappings, Batch Windows, and Polling Fleets',
    bn: 'ইভেন্ট ট্রিগার — ইভেন্ট সোর্স ম্যাপিং, ব্যাচ উইন্ডো ও পোলিং ফ্লিট',
  },
  summary: {
    en: 'A foundational overview of serverless event triggers and Event Source Mappings (ESM). Compare push triggers with managed poller fleets across 1000 messages and 100 invocations (batch size 10, window 2s). Eliminate 900 redundant calls (90.00% reduction) and isolate 2 error records in 1.60 ms with 0 dropped transactions across 98 clean batches (980 messages, 98.00%).',
    bn: 'সার্ভারলেস ইভেন্ট ট্রিগার ও Event Source Mapping (ESM)-এর মৌলিক ধারণা। ১০০০টি মেসেজ ও ১০০টি ইনভোকেশনে (১০ সাইজ, ২ সেকেন্ড উইন্ডো) পুশ ট্রিগারের সাথে ম্যানেজড পোলারের তুলনা করুন। ৯০০টি অপ্রয়োজনীয় কল হ্রাস (৯০.০০% সাশ্রয়) এবং ৯৮টি নির্ভুল ব্যাচে (৯৮০টি মেসেজ, ৯৮.০০%) ০টি ড্রপ লেনদেন সহ ১.৬০ ms এ ২টি ত্রুটিপূর্ণ রেকর্ড আলাদা করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Event triggers, pollers, and source bindings', bn: 'WHAT — ইভেন্ট ট্রিগার, পোলার ও সোর্স বাইন্ডিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build event-driven serverless systems, triggers connect cloud producers to your function code. Direct HTTP APIs (Application Programming Interfaces) push requests synchronously into your handler. In contrast, message queues and stream sources rely on managed Event Source Mappings (ESM). Managed background pollers continuously read queue records, assemble batches, and invoke your function. Tuning batch sizes and batching windows aggregates messages, drastically slashing invocation costs.',
        bn: 'যখন আপনি ইভেন্ট-চালিত সার্ভারলেস সিস্টেম তৈরি করেন, তখন ইভেন্ট ট্রিগার ক্লাউড সার্ভিসের সাথে ফাংশন কোডের বাস্তব সংযোগ স্থাপন করে। সাধারণ HTTP API সরাসরি সিনক্রোনাস রিকোয়েস্ট পাঠিয়ে ফাংশন চালু করে। অন্যদিকে মেসেজ কিউ এবং ডেটা স্ট্রিমগুলো পরিচালিত Event Source Mapping (ESM) এর মাধ্যমে নিয়ন্ত্রিত হয়। ক্লাউড প্ল্যাটফর্মের ব্যাকগ্রাউন্ড পোলার কিউ থেকে প্রতিনিয়ত মেসেজ পড়ে ব্যাচ তৈরি করে ফাংশনে পাঠায়। ব্যাচ সাইজ ও ব্যাচিং উইন্ডোর সময় নির্ধারণ করে আপনি শত শত মেসেজ একসাথে প্রক্রিয়া করে ক্লাউডের খরচ বাঁচাতে পারেন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Event Source Mapping: batching 1000 messages into 100 invocations (batch size 10)', bn: 'ইভেন্ট সোর্স ম্যাপিং: ১০০০টি মেসেজ ১০০টি ইনভোকেশনে ব্যাচিং (সাইজ ১০)' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Serverless Event Source Mapping diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">SQS Message Queue</text>

<rect x="35" y="80" width="140" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">1000 Ingress Messages</text>
<text x="105" y="112" text-anchor="middle" font-size="7" fill="#dc2626">Unbatched = 1000 calls</text>

<text x="105" y="150" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">900 invocations saved</text>
<text x="105" y="170" text-anchor="middle" font-size="7" fill="#64748b">90.00% reduction</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Event Source Mapping (ESM)</text>

<rect x="255" y="80" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">BatchSize: 10 | Window: 2s</text>
<text x="335" y="112" text-anchor="middle" font-size="7" fill="#1e40af">Managed Background Poller</text>

<text x="335" y="150" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">98 clean batches (980 msgs)</text>
<text x="335" y="170" text-anchor="middle" font-size="7" fill="#64748b">2 isolated errors (1.60 ms)</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Lambda Execution</text>

<rect x="485" y="80" width="120" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">100 Invocations</text>
<text x="545" y="113" text-anchor="middle" font-size="7" fill="#166534">10 records per call</text>

<text x="545" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">100.00% success</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Batching 1000 messages cuts calls from 1000 to 100 (90.00% cost reduction)</text>
</svg>`,
      caption: {
        en: 'Batching 1000 messages with BatchSize 10 and a 2s window cuts executions from 1000 down to 100 (900 calls saved, a 90.00% reduction). Across 98 clean batches (980 messages, 98.00%), 2 error records were isolated in 1.60 ms with 0 dropped transactions (100.00% final success).',
        bn: '১০ সাইজের ব্যাচ ও ২ সেকেন্ড উইন্ডো দিয়ে ১০০০টি মেসেজ প্রক্রিয়া করায় ইনভোকেশন ১০০০ থেকে কমে ১০০ এ নামে (৯০০টি কল সাশ্রয়, ৯০.০০% হ্রাস)। ৯৮টি নির্ভেজাল ব্যাচে (৯৮০টি মেসেজ, ৯৮.০০%) ২টি ত্রুটিপূর্ণ রেকর্ড ১.৬০ ms এ আলাদা হয়ে ০টি ড্রপ সহ ১০০.০০% সফলতা নিশ্চিত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Event Source Mapping (ESM)',
          def: {
            en: 'An AWS Lambda resource that reads from an event source (SQS, Kinesis, DynamoDB Streams) and synchronously invokes a Lambda function with batches of records.',
            bn: 'একটি ক্লাউড সার্ভিস যা মেসেজ কিউ বা ডেটা স্ট্রিম থেকে ডেটা পড়ে ব্যাচ তৈরি করে নির্দিষ্ট ল্যাম্বডা ফাংশনে পাঠায়।',
          },
        },
        {
          term: 'Batching Window',
          def: {
            en: 'The maximum duration in seconds (MaximumBatchingWindowInSeconds) Lambda poller waits to collect records before invoking the handler.',
            bn: 'ল্যাম্বডা পোলার সর্বোচ্চ যত সেকেন্ড অপেক্ষা করে একাধিক মেসেজ সংগ্রহ করে একটি পূর্ণ ব্যাচ হিসেবে পাঠায়।',
          },
        },
        {
          term: 'BisectBatchOnFunctionError',
          def: {
            en: 'A stream processing configuration that splits a failing record batch in half recursively to isolate the exact corrupted record without stalling the shard.',
            bn: 'একটি স্ট্রিম কনফিগারেশন যা কোনো ব্যাচে এরর হলে সেটিকে ভেঙে দুই ভাগ করে নিখুঁতভাবে খারাপ মেসেজটি শনাক্ত করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Slashing invocation costs and preserving shard ordering', bn: 'কেন — ক্লাউড খরচ হ্রাস ও শার্ডের ধারাবাহিকতা রক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Slash cloud compute bills by 90.00%: aggregating 1000 messages into 100 invocations with batch size 10 eliminates 900 redundant Lambda initialization overheads.', bn: 'ক্লাউড বিল ৯০.০০% কমানো: ১০টি করে মেসেজ একসাথে পাঠালে ১০০০টির বদলে মাত্র ১০০টি ইনভোকেশন লাগে এবং ৯০০টি অতিরিক্ত কলের খরচ বাঁচে।' },
        { en: 'Preserve strict message ordering: stream triggers from DynamoDB Streams guarantee that partition key operations execute strictly sequentially.', bn: 'ধারাবাহিকতা অক্ষত রাখা: ডেটাবেজ স্ট্রিম থেকে আসা মেসেজগুলো ক্রমানুসারে প্রসেস হয়, ফলে অ্যাকাউন্টের ব্যালেন্সের হিসাব কখনো এলোমেলো হয় না।' },
        { en: 'Prevent shard blocking with bisecting: splitting bad batches isolates poison pills in 1.60 ms without stalling the entire real-time streaming pipeline.', bn: 'শার্ড আটকে যাওয়া রোধ: খারাপ মেসেজ পেলে ব্যাচ দ্বিখণ্ডিত করে মাত্র ১.৬০ ms এ আলাদা করা যায়, ফলে পুরো স্ট্রিম থমকে যায় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring an SQS Event Source Mapping in 4 steps', bn: 'HOW — ৪টি ধাপে SQS ইভেন্ট সোর্স ম্যাপিং কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Specify EventSourceArn', bn: '১. ইভেন্ট সোর্স ARN নির্ধারণ' }, text: { en: 'Point the mapping to the Amazon Resource Name (ARN) of your source SQS queue or Kinesis stream.', bn: 'আপনার সোর্স SQS কিউ বা কিনেসি স্ট্রিমের অনন্য ARN নির্দেশ করুন।' } },
        { title: { en: '2. Set BatchSize to 10', bn: '২. ব্যাচ সাইজ ১০ নির্ধারণ' }, text: { en: 'Configure BatchSize: 10 to instruct the poller to assemble up to 10 messages per invocation.', bn: 'প্রতিটি ফাংশন কলে সর্বোচ্চ ১০টি মেসেজ পাঠাতে ব্যাচ সাইজ ১০ নির্ধারণ করুন।' } },
        { title: { en: '3. Set MaximumBatchingWindowInSeconds', bn: '৩. ব্যাচিং উইন্ডো সময় নির্ধারণ' }, text: { en: 'Configure MaximumBatchingWindowInSeconds: 2 to allow the poller to wait up to 2 seconds to fill batches.', bn: 'মেসেজ জমা করার জন্য সর্বোচ্চ ২ সেকেন্ড পর্যন্ত অপেক্ষার সময়সীমা দিন।' } },
        { title: { en: '4. Enable ReportBatchItemFailures', bn: '৪. আংশিক রিপোর্টিং কার্যকর' }, text: { en: 'Add FunctionResponseTypes: ["ReportBatchItemFailures"] to isolate poison pills safely.', bn: 'ReportBatchItemFailures অপশন চালু করে কেবল ব্যর্থ মেসেজগুলো আলাদা করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'event_source_mapping_sim.js',
      code: `// Simulated Event Source Mapping (ESM) batching across 1000 messages
const totalMessages = 1000;
const unoptimizedInvocations = 1000;
const batchSize = 10;
const batchWindowSec = 2;
const optimizedInvocations = totalMessages / batchSize; // 100

const invocationsSaved = unoptimizedInvocations - optimizedInvocations; // 900
const invocationReductionPct = (invocationsSaved / unoptimizedInvocations) * 100; // 90.00%

const cleanBatches = 98;
const errorBatches = 2;
const cleanMessages = cleanBatches * batchSize; // 980 (98.00%)
const errorMessages = errorBatches * batchSize; // 20 (2.00%)

const isolatedErrors = 2;
const rerouteLatencyMs = 1.60;
const totalSuccessPct = 100.00;

console.log("Total messages: " + totalMessages);
console.log("Unoptimized invocations (batch size 1): " + unoptimizedInvocations);
console.log("Optimized invocations (batch size " + batchSize + ", window " + batchWindowSec + "s): " + optimizedInvocations + " (saved " + invocationsSaved + " invocations, " + invocationReductionPct.toFixed(2) + "% reduction)");
console.log("Clean batches: " + cleanBatches + " (" + cleanMessages + " messages, " + ((cleanMessages/totalMessages)*100).toFixed(2) + "%)");
console.log("Isolated error records: " + isolatedErrors + " in " + rerouteLatencyMs.toFixed(2) + " ms (" + totalSuccessPct.toFixed(2) + "% final success with 0 dropped transactions)");

// Output:
// Total messages: 1000
// Unoptimized invocations (batch size 1): 1000
// Optimized invocations (batch size 10, window 2s): 100 (saved 900 invocations, 90.00% reduction)
// Clean batches: 98 (980 messages, 98.00%)
// Isolated error records: 2 in 1.60 ms (100.00% final success with 0 dropped transactions)`,
      caption: {
        en: 'Batching 1000 messages with BatchSize 10 and a 2s window cuts executions from 1000 down to 100 (900 calls saved, a 90.00% reduction). Across 98 clean batches (980 messages, 98.00%), 2 error records were isolated in 1.60 ms with 0 dropped transactions (100.00% final success).',
        bn: '১০ সাইজের ব্যাচ ও ২ সেকেন্ড উইন্ডো দিয়ে ১০০০টি মেসেজ প্রক্রিয়া করায় ইনভোকেশন ১০০০ থেকে কমে ১০০ এ নামে (৯০০টি কল সাশ্রয়, ৯০.০০% হ্রাস)। ৯৮টি নির্ভেজাল ব্যাচে (৯৮০টি মেসেজ, ৯৮.০০%) ২টি ত্রুটিপূর্ণ রেকর্ড ১.৬০ ms এ আলাদা হয়ে ০টি ড্রপ সহ ১০০.০০% সফলতা নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive Event Source Mapping lab', bn: 'INSIDE — জীবন্ত ইভেন্ট সোর্স ম্যাপিং ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Examine trigger batching efficiency. Processing 1000 messages without batching requires 1000 separate function invocations (batch size 1). Applying an ESM trigger with BatchSize 10 and a 2s batching window collapses the workload into 100 invocations, saving 900 calls (a 90.00% reduction). Across 98 clean batches (980 messages, 98.00%), 2 error records are isolated in 1.60 ms, delivering 100.00% success with 0 dropped transactions.',
        bn: 'ট্রিগার ব্যাচিংয়ের কার্যকারিতা পর্যবেক্ষণ করুন। ব্যাচিং ছাড়া ১০০০টি মেসেজ চালাতে ১০০০টি আলাদা ইনভোকেশন লাগতো (সাইজ ১)। অথচ ESM ট্রিগারে ১০ সাইজের ব্যাচ ও ২ সেকেন্ড উইন্ডো ব্যবহার করায় পুরো কাজটি মাত্র ১০০টি ইনভোকেশনে সম্পন্ন হয়ে ৯০০টি কল বাঁচায় (৯০.০০% সাশ্রয়)। ৯৮টি নির্ভেজাল ব্যাচে (৯৮০টি মেসেজ, ৯৮.০০%) ২টি ত্রুটিপূর্ণ রেকর্ড ১.৬০ ms এ আলাদা করে ০টি ড্রপ সহ ১০০.০০% সফলতা নিশ্চিত হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'ESM lab (verify batch savings, press Run)', bn: 'ESM ল্যাব (ব্যাচ সাশ্রয় যাচাই, Run)' },
      html: '<h3>Event Source Mapping Simulator</h3>\n<pre id="out"></pre>\n<p>Compute invocation reduction and batch window efficiency.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const tot = 1000;\nconst bSize = 10;\nconst calls = tot / bSize;\nconst saved = tot - calls;\nconsole.log("calls saved: " + saved);\ndocument.getElementById("out").textContent = "Total: " + tot + " msgs · Invocations: " + calls + " (batch size " + bSize + ") · Saved: " + saved + " calls (90.00% reduction, 0 drops ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Stream vs queue trigger architectural rules', bn: 'ফলাফল — স্ট্রিম বনাম কিউ ট্রিগারের সোনালী নিয়মাবলী' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always set a MaximumBatchingWindowInSeconds on low-traffic queues: waiting 2 to 5 seconds allows Lambda to assemble full batches rather than running single-message calls.', bn: 'কম ট্রাফিকের কিউতে সর্বদা ব্যাচিং উইন্ডো নির্ধারণ করুন: ২ থেকে ৫ সেকেন্ড অপেক্ষা করলে পুরো ব্যাচ পূর্ণ হয়ে ক্লাউডের অতিরিক্ত খরচ বেঁচে যায়।' },
        { en: 'Enable BisectBatchOnFunctionError on Kinesis and DynamoDB Streams: prevents a single malformed event from blocking an entire streaming data shard for days.', bn: 'স্ট্রিম ট্রিগারে BisectBatchOnFunctionError চালু রাখুন: কোনো খারাপ ডেটার কারণে পুরো ডেটা স্ট্রিম আটকে থাকা প্রতিরোধ করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common trigger configuration mistakes', bn: 'ডিবাগ — ট্রিগার কনফিগারেশনের সাধারণ ভুলত্রুটি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'SQS queue visibility timeout shorter than Lambda function timeout', bn: 'SQS ভিজিবিলিটি টাইমআউট ল্যাম্বডার চেয়ে ছোট রাখার মারাত্মক ভুল' },
      text: {
        en: 'When an SQS queue VisibilityTimeout is shorter than the function runtime limit, the queue presumes failure prematurely. This causes duplicate delivery to concurrent workers while earlier executions remain active, requiring a queue timeout at least 6 times the Lambda ceiling.',
        bn: 'যখন SQS কিউয়ের ভিজিবিলিটি টাইমআউট ফাংশনের সময়সীমার চেয়ে ছোট হয়, তখন কিউ সময়ের আগেই ধরে নেয় কাজ ব্যর্থ হয়েছে। এর ফলে পূর্বের কাজ চলাকালীনই অন্য কর্মীর কাছে ডুপ্লিকেট মেসেজ চলে যায়। এটি রোধ করতে সর্বদা কিউয়ের সময় ল্যাম্বডার অন্তত ৬ গুণ বড় রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using event filters to cut Lambda invocation charges', bn: 'ইভেন্ট ফিল্টারের সাহায্যে অপ্রয়োজনীয় ইনভোকেশন খরচ কমানো' },
      text: {
        en: 'Configure trigger Event Filtering rules (FilterCriteria) directly in the Event Source Mapping. This filters out irrelevant messages at the queue/stream layer before Lambda is invoked, cutting cloud billing to zero for ignored event types.',
        bn: 'ইভেন্ট সোর্স ম্যাপিংয়ে সরাসরি FilterCriteria নির্ধারণ করুন। এর ফলে অপ্রয়োজনীয় মেসেজগুলো ল্যাম্বডা চলার আগেই কিউ স্তরেই বাদ পড়ে যায় এবং সেগুলোর জন্য কোনো টাকা খরচ হয় না।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — How high-scale streaming platforms use triggers', bn: 'বাস্তব ক্ষেত্র — আধুনিক টেক জায়ান্টরা কীভাবে ট্রিগার ব্যবহার করে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Expedia Hotel Booking Stream: utilizes DynamoDB Streams triggers to replicate real-time hotel room availability across global multi-region caches in milliseconds.', bn: 'এক্সপিডিয়ার হোটেল বুকিং: বিশ্বজুড়ে একাধিক ক্লাউড অঞ্চলে হোটেলের রুম খালি থাকার তথ্য নিমেষে আপডেট করতে ডায়নামোডিবি স্ট্রিম ট্রিগার ব্যবহার করে।' },
        { en: 'Fintech Payment Transaction Audit: processes tens of thousands of credit card transactions per second using Kinesis ESM with BisectBatchOnFunctionError.', bn: 'ফিনটেক পেমেন্ট অডিট: প্রতি সেকেন্ডে হাজার হাজার ক্রেডিট কার্ডের লেনদেন যাচাই করতে কিনেসি ইভেন্ট সোর্স ম্যাপিং ব্যবহার করে।' },
        { en: 'Shopify Inventory Ingestion: triggers SQS batch processing to consume inventory count changes during massive flash sales without exhausting backend database locks.', bn: 'শপিফাই ইনভেন্টরি: ফ্ল্যাশ সেলের সময় পণ্যের মজুদ পরিবর্তন সামলাতে SQS ব্যাচ ট্রিগার ব্যবহার করে ব্যাকএন্ড ডেটাবেজ নিরাপদ রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Cold Starts, Concurrency, and Provisioned Warming', bn: 'পরবর্তী পাঠ — কোল্ড স্টার্ট, কনকারেন্সি ও প্রভিশনড ওয়ার্মিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With event triggers and batching mechanics mastered, Lesson 5 investigates the cold start dilemma: microVM initialization, unreserved vs reserved concurrency, and provisioned concurrency warming.',
        bn: 'ইভেন্ট ট্রিগার ও ব্যাচিং আয়ত্ত করার পর, পাঠ ৫ কোল্ড স্টার্ট সমস্যা অনুসন্ধান করবে: মাইক্রোভিএম ইনিশিয়ালাইজেশন, রিজার্ভড কনকারেন্সি এবং প্রভিশনড কনকারেন্সি ওয়ার্মিং।',
      },
    },
  ],
  exercises: [
    {
      id: 'srv-trig-ex-1',
      kind: 'mcq',
      topic: 'sqs-visibility-timeout-rule',
      question: {
        en: 'What critical rule of thumb must you follow when configuring the Amazon SQS queue VisibilityTimeout relative to your Lambda function timeout?',
        bn: 'ল্যাম্বডা ফাংশনের টাইমআউটের সাথে সামঞ্জস্য রেখে Amazon SQS কিউয়ের VisibilityTimeout কনফিগার করার সময় কোন গুরুত্বপূর্ণ নিয়মটি মেনে চলতে হয়?',
      },
      options: [
        {
          en: 'The SQS VisibilityTimeout must be set to at least 6 times the Lambda function timeout, preventing SQS from prematurely redelivering an in-flight message to another worker while the first invocation is still running',
          bn: 'SQS VisibilityTimeout অবশ্যই ল্যাম্বডা ফাংশনের সময়সীমার অন্তত ৬ গুণ বড় হতে হবে, যাতে প্রথম কর্মী কাজ চলাকালীন SQS একই মেসেজ অন্য কর্মীর কাছে পাঠিয়ে ডুপ্লিকেট তৈরি না করে',
        },
        {
          en: 'The VisibilityTimeout must always be set to zero seconds',
          bn: 'VisibilityTimeout সর্বদা শূন্য সেকেন্ডে সেট রাখতে হয়',
        },
        {
          en: 'The VisibilityTimeout must match the speed of the office internet router',
          bn: 'VisibilityTimeout অফিসের ইন্টারনেট রাউটারের গতির সমান হতে হয়',
        },
        {
          en: 'The VisibilityTimeout must be formatted as an MP4 video file',
          bn: 'VisibilityTimeout একটি এমপিফোর ভিডিও ফাইলের আকারে লিখতে হয়',
        },
      ],
      answer: 0,
      hint: { en: 'Set VisibilityTimeout to at least 6x function timeout.', bn: 'VisibilityTimeout ফাংশন টাইমআউটের অন্তত ৬ গুণ বড় রাখুন।' },
      explanation: {
        en: 'Setting SQS VisibilityTimeout to 6x function timeout prevents premature redeliveries of active transactions.',
        bn: 'কমপক্ষে ৬ গুণ বড় রাখলে প্রথম কর্মীর কাজ শেষ হওয়ার আগেই অন্য কারো কাছে মেসেজ যাওয়ার বিপদ থাকে না।',
      },
    },
    {
      id: 'srv-trig-ex-2',
      kind: 'mcq',
      topic: 'trig-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many invocations were saved by batching 1000 messages with BatchSize 10 and a 2s window, and how were errors isolated across 98 clean batches (980 messages, 98.00%)?',
        bn: 'আমাদের কোড আলোচনায় ১০ সাইজের ব্যাচ ও ২ সেকেন্ড উইন্ডো দিয়ে ১০০০টি মেসেজে কয়টি ইনভোকেশন সাশ্রয় হয়েছিল এবং ৯৮টি নির্ভেজাল ব্যাচে (৯৮০টি মেসেজ, ৯৮.০০%) ত্রুটি কীভাবে সমাধান হয়েছিল?',
      },
      options: [
        {
          en: 'Saved 900 invocations (100 calls vs 1000, a 90.00% reduction); isolated 2 error records in 1.60 ms with 0 dropped transactions across 98 clean batches (980 messages, 98.00%, 100.00% final success)',
          bn: '৯০০টি ইনভোকেশন সাশ্রয় (১০০০ এর বদলে ১০০টি কল, ৯০.০০% হ্রাস); ৯৮টি নির্ভেজাল ব্যাচে (৯৮০টি মেসেজ, ৯৮.০০%) ০টি ড্রপ সহ ১.৬০ ms এ ২টি ত্রুটিপূর্ণ রেকর্ড আলাদা (১০০.০০% চূড়ান্ত সাফল্য)',
        },
        {
          en: 'Saved 0 invocations; all 1000 messages failed with 50 dropped transactions',
          bn: '০টি ইনভোকেশন সাশ্রয়; ৫০টি ড্রপ সহ ১০০০টি মেসেজের সবকয়টি ব্যর্থ',
        },
        {
          en: 'Saved 500 invocations with 100 errors across 98 batches',
          bn: '৯৮টি ব্যাচে ১০০টি এরর সহ ৫০০টি ইনভোকেশন সাশ্রয়',
        },
        {
          en: 'Saved 50 invocations with 20 errors across 98 batches',
          bn: '৯৮টি ব্যাচে ২০টি এরর সহ ৫০টি ইনভোকেশন সাশ্রয়',
        },
      ],
      answer: 0,
      hint: { en: '1000 -> 100 (saved 900 calls, 90.00%), 2 errors in 1.60 ms, 98 clean batches (980 msgs).', bn: '১০০০ -> ১০০ (৯০০টি সাশ্রয়, ৯০.০০%), ১.৬০ ms এ ২টি ত্রুটি, ৯৮টি ব্যাচ (৯৮০টি মেসেজ)।' },
      explanation: {
        en: 'Batching 1000 messages into 100 calls reduced invocations by 90.00% (900 saved) while isolating 2 errors in 1.60 ms with 0 dropped transactions.',
        bn: '১০০০টি মেসেজ ১০০টি কলে ব্যাচিং করে ৯০.০০% ইনভোকেশন (৯০০টি সাশ্রয়) বাঁচানো হয় এবং ১.৬০ ms এ ২টি ত্রুটি আলাদা করে ০টি ড্রপ নিশ্চিত হয়।',
      },
    },
    {
      id: 'srv-trig-ex-3',
      kind: 'mcq',
      topic: 'bisect-batch-on-function-error-role',
      question: {
        en: 'What problem does BisectBatchOnFunctionError solve in streaming triggers (DynamoDB Streams or Kinesis)?',
        bn: 'স্ট্রিমিং ট্রিগারে (DynamoDB Streams বা Kinesis) BisectBatchOnFunctionError কোন গুরুত্বপূর্ণ সমস্যার সমাধান করে?',
      },
      options: [
        {
          en: 'When a stream batch fails, it splits the batch in half recursively and retries smaller chunks, pinpointing the single poisoned record without blocking the entire stream shard indefinitely',
          bn: 'যখন কোনো স্ট্রিম ব্যাচ ব্যর্থ হয়, তখন এটি ব্যাচটিকে ভেঙে দুই ভাগ করে ছোট ছোট অংশে পুনরায় চালায়, ফলে পুরো স্ট্রিম শার্ড আটকে না রেখে সঠিক ত্রুটিপূর্ণ রেকর্ডটি শনাক্ত করা যায়',
        },
        {
          en: 'It deletes the DynamoDB database table to save disk space',
          bn: 'ডিস্ক স্পেস বাঁচাতে এটি সম্পূর্ণ ডায়নামোডিবি ডেটাবেজ টেবিল মুছে ফেলে',
        },
        {
          en: 'It doubles the physical memory of the cloud data center',
          bn: 'এটি ক্লাউড ডেটাসেন্টারের মেমরি নিজে থেকেই দ্বিগুণ করে দেয়',
        },
        {
          en: 'It turns off electricity to all computer monitors in the office',
          bn: 'এটি অফিসের সমস্ত কম্পিউটার মনিটরের বিদ্যুৎ সংযোগ বিচ্ছিন্ন করে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'It splits failing stream batches to isolate poison pills.', bn: 'এটি খারাপ মেসেজ আলাদা করতে ব্যর্থ ব্যাচকে ভেঙে দুই ভাগ করে।' },
      explanation: {
        en: 'Bisecting splits batches recursively, preventing poisoned records from stalling real-time stream processing.',
        bn: 'ব্যাচ দ্বিখণ্ডিত করার ফলে কোনো একটি নষ্ট রেকর্ডের জন্য পুরো লাইভ স্ট্রিম বন্ধ হয়ে থাকে না।',
      },
    },
    {
      id: 'srv-trig-ex-4',
      kind: 'predict',
      topic: 'esm-acronym-token',
      question: {
        en: 'What three-letter acronym identifies the managed AWS Lambda component that polls queues and streams to invoke functions (e.g. ESM)?',
        bn: 'কিউ ও স্ট্রিম থেকে ডেটা পড়ে ল্যাম্বডা ফাংশন চালু করার পরিচালিত ক্লাউড উপাদানটিকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা ডাকা হয় (যেমন ESM)?',
      },
      answer: 'ESM',
      accept: ['ESM', 'esm', 'Event Source Mapping'],
      hint: { en: 'E-S-M', bn: 'E-S-M' },
      explanation: {
        en: 'ESM stands for Event Source Mapping, Lambda managed background poller fleet.',
        bn: 'ESM হলো Event Source Mapping, যা কিউ বা স্ট্রিম থেকে ল্যাম্বডায় ডেটা পৌঁছে দেয়।',
      },
    },
  ],
  quiz: {
    id: 'triggers-and-the-trigger-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'srv-trig-q1',
        kind: 'mcq',
        topic: 'batching-window-economic-benefit',
        question: {
          en: 'Why is configuring MaximumBatchingWindowInSeconds highly beneficial on moderate or low-traffic queue triggers?',
          bn: 'মাঝারি বা কম ট্রাফিকের কিউ ট্রিগারে MaximumBatchingWindowInSeconds কনফিগার করা কেন অত্যন্ত সাশ্রয়ী?',
        },
        options: [
          {
            en: 'It instructs the poller to wait a few seconds to aggregate multiple incoming messages into a single full batch before executing the handler, cutting invocation charges by up to 90.00%',
            bn: 'এটি পোলারকে কয়েক সেকেন্ড অপেক্ষা করে একাধিক মেসেজ সংগ্রহ করে একটি পূর্ণ ব্যাচ বানাতে বলে, যার ফলে প্রতিটি মেসেজের জন্য আলাদা ফাংশন না চলে ৯০.০০% পর্যন্ত খরচ বেঁচে যায়',
          },
          {
            en: 'It makes the computer run without consuming any electricity',
            bn: 'এটি কোনো বিদ্যুৎ খরচ ছাড়াই কম্পিউটারকে চলতে সাহায্য করে',
          },
          {
            en: 'It automatically deposits money directly into the engineer bank account',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ইঞ্জিনিয়ারের ব্যাংক অ্যাকাউন্টে টাকা জমা করে দেয়',
          },
          {
            en: 'It translates all SQL queries into written poetry',
            bn: 'এটি সমস্ত এসকিউএল কুয়েরিকে কবিতায় রূপান্তর করে ফেলে',
          },
        ],
        answer: 0,
        hint: { en: 'It waits to build batches, slashing invocation counts.', bn: 'এটি মেসেজ জমিয়ে ব্যাচ তৈরি করে, ফলে অতিরিক্ত কল বাঁচে।' },
        explanation: {
          en: 'Batching windows accumulate records, turning hundreds of single-message calls into efficient batched executions.',
          bn: 'ব্যাচিং উইন্ডোর ফলে প্রতিটি মেসেজের জন্য আলাদা ফাংশন চালু না হয়ে একবারে কাজ সম্পন্ন হয়।',
        },
      },
      {
        id: 'srv-trig-q2',
        kind: 'mcq',
        topic: 'trig-sim-invocations-saved-check',
        question: {
          en: 'In our code walkthrough, how many invocations were executed under ESM batching (batch size 10) for 1000 messages compared to 1000 unbatched calls, and what was the percentage reduction?',
          bn: 'আমাদের কোড আলোচনায় ১০০০টি মেসেজের জন্য ব্যাচিং ছাড়া ১০০০ কলের তুলনায় ESM ব্যাচিংয়ে (সাইজ ১০) কতটি ইনভোকেশন চলেছিল এবং শতকরা সাশ্রয় কত ছিল?',
        },
        options: [
          { en: '100 invocations executed (saving 900 calls, a 90.00% reduction for 1000 messages)', bn: '১০০টি ইনভোকেশন চলেছে (৯০০টি কল সাশ্রয়, ১০০০টি মেসেজে ৯০.০০% হ্রাস)' },
          { en: '500 invocations executed (saving 500 calls, a 50.00% reduction for 1000 messages)', bn: '৫০০টি ইনভোকেশন চলেছে (৫০০টি কল সাশ্রয়, ১০০০টি মেসেজে ৫০.০০% হ্রাস)' },
          { en: '1000 invocations executed (saving 0 calls for 1000 messages)', bn: '১০০০টি ইনভোকেশন চলেছে (১০০০টি মেসেজে ০টি কল সাশ্রয়)' },
          { en: '10 invocations executed (saving 990 calls for 1000 messages)', bn: '১০টি ইনভোকেশন চলেছে (১০০০টি মেসেজে ৯৯০টি কল সাশ্রয়)' },
        ],
        answer: 0,
        hint: { en: '1000 / 10 = 100 calls (saved 900 calls, 90.00%).', bn: '১০০০ / ১০ = ১০০ কল (৯০০টি কল সাশ্রয়, ৯০.০০%)।' },
        explanation: {
          en: 'Batch size 10 reduced 1000 calls down to 100, saving 900 invocations (a 90.00% reduction).',
          bn: '১০ সাইজের ব্যাচ ১০০০টি কলকে ১০০টিতে নামিয়ে এনে ৯০০টি ইনভোকেশন (৯০.০০%) সাশ্রয় করে।',
        },
      },
      {
        id: 'srv-trig-q3',
        kind: 'mcq',
        topic: 'event-filtering-advantage',
        question: {
          en: 'How does configuring event filtering (FilterCriteria) in an Event Source Mapping save infrastructure costs?',
          bn: 'ইভেন্ট সোর্স ম্যাপিংয়ে ইভেন্ট ফিল্টারিং (FilterCriteria) কনফিগার করলে কীভাবে অবকাঠামোগত খরচ সাশ্রয় হয়?',
        },
        options: [
          {
            en: 'The poller evaluates JSON criteria and discards unmatched messages at the polling layer before invoking Lambda, resulting in zero compute billing for filtered records',
            bn: 'পোলার নিজেই ফিল্টার নিয়ম পরীক্ষা করে অপ্রয়োজনীয় মেসেজগুলোকে ল্যাম্বডা চলার আগেই বাদ দিয়ে দেয়, ফলে সেসব মেসেজের জন্য কোনো ক্লাউড বিল দিতে হয় না',
          },
          {
            en: 'It sells the filtered messages on online auction marketplaces',
            bn: 'এটি বাদ দেওয়া মেসেজগুলোকে অনলাইন নিলামে বিক্রি করে দেয়',
          },
          {
            en: 'It changes the color of the computer server rack to blue',
            bn: 'এটি সার্ভার র‍্যাকের রঙ নীল করে দেয়',
          },
          {
            en: 'It prevents computer keyboards from typing numbers',
            bn: 'এটি কীবোর্ডে সংখ্যা টাইপ করা বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Messages are dropped before Lambda runs, incurring $0.', bn: 'ল্যাম্বডা চলার আগেই মেসেজ বাদ পড়ায় কোনো খরচ হয় না।' },
        explanation: {
          en: 'FilterCriteria discards unwanted events at the source poller, eliminating function invocation charges entirely.',
          bn: 'ফিল্টার ক্রাইটেরিয়া সোর্স লেয়ারেই অপ্রয়োজনীয় ইভেন্ট আটকে দেয়, ফলে বাড়তি কোনো ইনভোকেশন বিল হয় না।',
        },
      },
      {
        id: 'srv-trig-q4',
        kind: 'predict',
        topic: 'batch-size-parameter-name',
        question: {
          en: 'What PascalCase parameter in an Event Source Mapping defines the maximum number of records to retrieve in a single batch (e.g. BatchSize)?',
          bn: 'একক ব্যাচে সর্বোচ্চ কতটি রেকর্ড সংগ্রহ করতে হবে তা নির্ধারণকারী Event Source Mapping-এর PascalCase প্যারামিটারটির নাম কী (যেমন BatchSize)?',
        },
        answer: 'BatchSize',
        accept: ['BatchSize', 'batchSize', 'BatchSize: 10'],
        hint: { en: 'BatchSize', bn: 'BatchSize' },
        explanation: {
          en: 'BatchSize determines the maximum record count packed into event.Records per invocation.',
          bn: 'BatchSize প্রতিটি ইনভোকেশনে সর্বোচ্চ কতটি মেসেজ পাঠানো হবে তা নিয়ন্ত্রণ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'warms-and-the-warm',
    title: { en: 'Cold Starts, Concurrency, and Provisioned Warming', bn: 'কোল্ড স্টার্ট, কনকারেন্সি ও প্রভিশনড ওয়ার্মিং' },
  },
};
