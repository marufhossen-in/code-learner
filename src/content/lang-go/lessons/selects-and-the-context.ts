import type { Lesson } from '../../../lib/types';

export const SelectsAndTheContextLesson: Lesson = {
  slug: 'selects-and-the-context',
  tech: 'lang-go',
  title: {
    en: 'Select and Context — Multiplexing, Deadlines, and Cancellation',
    bn: 'সিলেক্ট ও কনটেক্সট — মাল্টিপ্লেক্সিং, ডেডলাইন ও ক্যান্সেলেশন',
  },
  summary: {
    en: 'Master Go select statement multiplexing and context.Context cancellation: handle multi-channel operations, implement non-blocking channel polling with default cases, enforce network timeouts with context.WithTimeout, and prevent goroutine resource leaks across microservices.',
    bn: 'গো select স্টেটমেন্ট মাল্টিপ্লেক্সিং ও context.Context ক্যান্সেলেশন আয়ত্ত করুন: বহু-চ্যানেল পরিচালনা, default কেস দিয়ে নন-ব্লকিং পোলিং, context.WithTimeout দিয়ে নেটওয়ার্ক টাইমআউট প্রয়োগ এবং মাইক্রোসার্ভিসে গোরুটিন রিসোর্স লিক প্রতিরোধ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Multiplexing channel events and coordinating cancellation', bn: 'WHAT — চ্যানেল ইভেন্ট মাল্টিপ্লেক্সিং ও ক্যান্সেলেশন সমন্বয়' },
    },
    {
      type: 'para',
      text: {
        en: 'When your Go microservices interact with distributed databases and external HTTP endpoints, managing execution timeouts and graceful cancellation is critical to system resilience. The select statement allows a goroutine to wait on multiple channel operations simultaneously, proceeding on whichever channel becomes ready first. Combined with the standard library context.Context package, select enables propagating cancellation signals and strict deadlines across entire call graphs. Listening on the ctx.Done() channel ensures that when a client disconnects or an operation times out, orphaned worker goroutines terminate immediately.',
        bn: 'যখন আপনার গো মাইক্রোসার্ভিস ডিস্ট্রিবিউটেড ডাটাবেস বা বাহ্যিক এইচটিটিপি এন্ডপয়েন্টের সাথে যোগাযোগ করে, তখন এক্সিকিউশন টাইমআউট ও নির্ভরযোগ্য ক্যান্সেলেশন পরিচালনা সিস্টেমের স্থায়িত্বের জন্য অপরিহার্য। select স্টেটমেন্ট একটি গোরুটিনকে একসাথে একাধিক চ্যানেল অপারেশনের জন্য অপেক্ষা করতে দেয় এবং যে চ্যানেলটি প্রথমে প্রস্তুত হয় তার কাজ সম্পন্ন করে। স্ট্যান্ডার্ড লাইব্রেরির context.Context প্যাকেজের সাথে select সমন্বয় করে সম্পূর্ণ কল গ্রাফজুড়ে ক্যান্সেলেশন সিগন্যাল ও ডেডলাইন পাঠানো যায়। ctx.Done() চ্যানেলে লিসেন করলে ক্লায়েন্ট বিচ্ছিন্ন হলে বা টাইমআউট ঘটলে অকেজো গোরুটিনগুলো তাৎক্ষণিক বন্ধ হয়ে যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Select multiplexing across data channels and context timeouts', bn: 'ডেটা চ্যানেল ও কনটেক্সট টাইমআউটের মাঝে সিলেক্ট মাল্টিপ্লেক্সিং' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go select and context timeout diagram">
<rect x="30" y="30" width="180" height="60" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="120" y="52" text-anchor="middle" font-family="monospace" font-size="10" fill="#1e40af">case res := &lt;-primaryCh:</text>
<text x="120" y="72" text-anchor="middle" font-size="10" fill="#1e40af">Primary DC Data (32)</text>

<rect x="30" y="110" width="180" height="60" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="120" y="132" text-anchor="middle" font-family="monospace" font-size="10" fill="#1e40af">case res := &lt;-fallbackCh:</text>
<text x="120" y="152" text-anchor="middle" font-size="10" fill="#1e40af">Secondary DC Data (16)</text>

<line x1="210" y1="60" x2="310" y2="90" stroke="#4f46e5" stroke-width="2"/>
<line x1="210" y1="140" x2="310" y2="110" stroke="#4f46e5" stroke-width="2"/>

<polygon points="310,70 370,100 310,130" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="330" y="105" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">SELECT</text>

<line x1="370" y1="100" x2="450" y2="100" stroke="#16a34a" stroke-width="2"/>
<polygon points="450,95 465,100 450,105" fill="#16a34a"/>

<rect x="465" y="50" width="150" height="100" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="540" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">WINNING EVENT</text>
<text x="540" y="100" text-anchor="middle" font-size="10" fill="#166534">Total: 48 Nodes</text>
<text x="540" y="125" text-anchor="middle" font-size="10" fill="#166534">2 Clusters Queried ✓</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Select executes whichever channel is ready first without blocking other flows</text>
</svg>`,
      caption: {
        en: 'The select statement listens across both primary (32 nodes) and fallback (16 nodes) channels, multiplexing incoming responses into a total capacity of 48 nodes across 2 clusters.',
        bn: 'select স্টেটমেন্ট প্রাইমারি (৩২ নোড) এবং ফলব্যাক (১৬ নোড) উভয় চ্যানেলেই অপেক্ষা করে, ফলে ২টা ক্লাস্টার থেকে মোট ৪৮টি নোডের ক্যাপাসিটি সমন্বয় করা হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'select statement',
          def: {
            en: 'A Go control-flow structure that lets a goroutine wait on multiple channel communications simultaneously.',
            bn: 'গো-এর একটি কন্ট্রোল-ফ্লো কাঠামো যা একটি গোরুটিনকে একসাথে একাধিক চ্যানেল যোগাযোগের জন্য অপেক্ষা করতে দেয়।',
          },
        },
        {
          term: 'context.Context',
          def: {
            en: 'A standard library interface that carries deadlines, cancellation signals, and request-scoped values across API boundaries.',
            bn: 'স্ট্যান্ডার্ড লাইব্রেরির একটি ইন্টারফেস যা এপিআই সীমানাজুড়ে ডেডলাইন, ক্যান্সেলেশন সিগন্যাল এবং রিকোয়েস্ট মেটাডেটা বহন করে।',
          },
        },
        {
          term: 'ctx.Done() channel',
          def: {
            en: 'A read-only channel returned by context that closes when work should be canceled or when a timeout deadline expires.',
            bn: 'কনটেক্সট দ্বারা প্রদত্ত একটি রিড-অনলি চ্যানেল যা কাজ বাতিল হলে বা টাইমআউট শেষ হলে স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যায়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminate hanging queries and goroutine leaks', bn: 'কেন — আটকে থাকা কুয়েরি ও গোরুটিন লিক বন্ধ করা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent hanging requests: context.WithTimeout guarantees that slow backend network calls abort before exhausting client connections.', bn: 'রিকোয়েস্ট আটকে থাকা রোধ: context.WithTimeout নিশ্চিত করে যে ধীরগতির ব্যাকএন্ড কল ক্লায়েন্ট সংযোগ শেষ করার আগেই স্বয়ংক্রিয়ভাবে বাতিল হবে।' },
        { en: 'Stop wasted CPU execution: when an HTTP client disconnects, canceling the context immediately terminates downstream database queries.', bn: 'সিপিইউ অপচয় বন্ধ: এইচটিটিপি ক্লায়েন্ট সংযোগ বিচ্ছিন্ন করলে কনটেক্সট বাতিলের মাধ্যমে ডাটাবেসের অকেজো প্রসেসিং সাথে সাথে বন্ধ করা যায়।' },
        { en: 'Non-blocking channel polling: a default case inside select enables instant queue checks without waiting for incoming items.', bn: 'নন-ব্লকিং চ্যানেল পোলিং: select এর ভেতরে একটি default কেস দিলে কোনো অপেক্ষা না করেই তাৎক্ষণিক কিউ পরীক্ষা করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Context and select patterns in 4 steps', bn: 'HOW — ৪টি ধাপে কনটেক্সট ও সিলেক্ট পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create context', bn: '১. কনটেক্সট তৈরি' }, text: { en: 'Initialize ctx, cancel := context.WithTimeout(parent, duration).', bn: 'ctx, cancel := context.WithTimeout(parent, duration) দিয়ে টাইমআউট সেট করুন।' } },
        { title: { en: '2. Defer cancel', bn: '২. defer দিয়ে ক্লিনআপ' }, text: { en: 'Always defer cancel() immediately to release runtime timer resources.', bn: 'টাইমার মেমরি মুক্ত করতে সাথে সাথে defer cancel() ঘোষণা করুন।' } },
        { title: { en: '3. Multiplex with select', bn: '৩. select দিয়ে মাল্টিপ্লেক্স' }, text: { en: 'Wait on case val := <-dataCh and case <-ctx.Done().', bn: 'case val := <-dataCh এবং case <-ctx.Done() দিয়ে অপেক্ষা করুন।' } },
        { title: { en: '4. Check ctx.Err()', bn: '৪. এরর কারণ পরীক্ষা' }, text: { en: 'Inspect ctx.Err() to distinguish DeadlineExceeded from manual cancellation.', bn: 'টাইমআউট নাকি ম্যানুয়াল ক্যান্সেলেশন তা জানতে ctx.Err() পরীক্ষা করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'select_context_sim.go',
      code: `package main

import "fmt"

type ServiceResult struct {
	Source string
	Nodes  int
}

func simulateClusterQuery(ch chan<- ServiceResult, source string, nodes int) {
	ch <- ServiceResult{Source: source, Nodes: nodes}
}

func main() {
	primaryCh := make(chan ServiceResult, 1)
	fallbackCh := make(chan ServiceResult, 1)

	// Simulate data available on primary channel (32 nodes) and fallback (16 nodes)
	simulateClusterQuery(primaryCh, "Primary-DC", 32)
	simulateClusterQuery(fallbackCh, "Secondary-DC", 16)

	totalPolledNodes := 0
	clustersProcessed := 0

	// Multiplexing with select
	for i := 0; i < 2; i++ {
		select {
		case res := <-primaryCh:
			clustersProcessed++
			totalPolledNodes += res.Nodes
			fmt.Printf("Received from %s: %d nodes\\n", res.Source, res.Nodes)
		case res := <-fallbackCh:
			clustersProcessed++
			totalPolledNodes += res.Nodes
			fmt.Printf("Received from %s: %d nodes\\n", res.Source, res.Nodes)
		}
	}

	fmt.Printf("Summary: %d clusters queried, Total capacity: %d nodes\\n", clustersProcessed, totalPolledNodes)
}

// Output:
// Received from Primary-DC: 32 nodes
// Received from Secondary-DC: 16 nodes
// Summary: 2 clusters queried, Total capacity: 48 nodes`,
      caption: {
        en: 'The simulation queries 2 clusters via select: Primary-DC returns 32 nodes and Secondary-DC returns 16 nodes, aggregating to 48 total capacity nodes.',
        bn: 'সিমুলেশনটি select দিয়ে ২টি ক্লাস্টার কুয়েরি করে: Primary-DC ৩২টি নোড এবং Secondary-DC ১৬টি নোড ফেরত দেয়, যার মোট ক্যাপাসিটি ৪৮টি নোড।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive select multiplexer lab', bn: 'INSIDE — জীবন্ত সিলেক্ট মাল্টিপ্লেক্সার ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test how select multiplexes multi-channel responses. The primary channel returns 32 nodes and the fallback channel returns 16 nodes across 2 queried clusters, totalling 48 nodes. In production, adding a case <-ctx.Done() guarantees that if neither channel responds within the deadline, the select branch aborts cleanly.',
        bn: 'select কীভাবে বহু-চ্যানেল রেসপন্স পরিচালনা করে তা পরীক্ষা করুন। ২টি ক্লাস্টার থেকে প্রাইমারি চ্যানেল ৩২টি এবং ফলব্যাক চ্যানেল ১৬টি নোড ফেরত দেয়, যার মোট পরিমাণ ৪৮। প্রোডাকশনে case <-ctx.Done() যোগ করলে সময়মতো কোনো ডেটা না আসলে কোড নিরাপদে টাইমআউট হয়ে যায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Select lab (modify node counts, press Run)', bn: 'Select lab (নোড সংখ্যা পরিবর্তন করুন, Run)' },
      html: '<h3>Go Select Multiplexer Simulator</h3>\n<pre id="out"></pre>\n<p>Multiplexing across primary and fallback channels.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const primaryNodes = 32;\nconst fallbackNodes = 16;\nconst total = primaryNodes + fallbackNodes;\nconsole.log("total capacity: " + total);\ndocument.getElementById("out").textContent = "Primary: " + primaryNodes + " · Fallback: " + fallbackNodes + " · Total: " + total + " nodes (2 clusters queried ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Resilient multiplexing rules', bn: 'ফলাফল — নির্ভরযোগ্য মাল্টিপ্লেক্সিংয়ের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always defer cancel() immediately: failing to cancel a context with timeout leaks internal timer goroutines until the timer expires.', bn: 'সর্বদা সাথে সাথে defer cancel() লিখুন: টাইমআউটযুক্ত কনটেক্সট ক্যানসেল করতে ব্যর্থ হলে টাইমার শেষ না হওয়া পর্যন্ত মেমরি লিক হতে থাকে।' },
        { en: 'Pass context as the first argument: convention dictates func Query(ctx context.Context, id int) to preserve consistent propagation.', bn: 'প্রথম আর্গুমেন্ট হিসেবে কনটেক্সট পাস করুন: গো-এর নিয়ম অনুযায়ী ধারাবাহিকভাবে func Query(ctx context.Context, id int) সিনট্যাক্স মেনে চলা উচিত।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common context pitfalls', bn: 'ডিবাগ — কনটেক্সট ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Storing context inside a struct field', bn: 'স্ট্রাক্ট ফিল্ডের ভেতরে কনটেক্সট সংরক্ষণ করা' },
      text: {
        en: 'Never store a context.Context inside a struct! Contexts are designed to flow through function call stacks via the first parameter. Storing them in structs obscures lifetimes and causes race conditions. Pass ctx explicitly across function boundaries.',
        bn: 'কখনোই স্ট্রাক্টের ফিল্ডে context.Context সংরক্ষণ করবেন না! কনটেক্সট কেবল ফাংশন কল স্ট্যাকের প্রথম প্যারামিটার দিয়ে প্রবাহিত হওয়ার জন্য তৈরি। স্ট্রাক্টে রাখলে লাইফটাইম অস্পষ্ট হয় এবং রেস কন্ডিশন তৈরি হয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using context.WithoutCancel in Go 1.21+', bn: 'গো ১.২১+ এ context.WithoutCancel ব্যবহার' },
      text: {
        en: 'When a background audit log or telemetry task must continue executing even after the parent request context is canceled, use context.WithoutCancel(ctx) to preserve values while decoupling cancellation.',
        bn: 'প্যারেন্ট রিকোয়েস্ট ক্যানসেল হলেও ব্যাকগ্রাউন্ড অডিট লগ বা টেলিমেট্রি চালু রাখতে চাইলে context.WithoutCancel(ctx) ব্যবহার করুন যা মানগুলো অক্ষুণ্ণ রেখে ক্যান্সেলেশন আলাদা করে দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production context usage', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল কনটেক্সট ব্যবহারের ক্ষেত্র' },
    },
    {
      type: 'list',
      items: [
        { en: 'Database transaction timeouts: db.QueryContext(ctx, sqlQuery) automatically rolls back slow SQL queries when HTTP client timeouts fire.', bn: 'ডাটাবেস ট্রানজ্যাকশন টাইমআউট: db.QueryContext(ctx, sqlQuery) এইচটিটিপি ক্লায়েন্ট টাইমআউট হলে ধীরগতির এসকিউএল কুয়েরি স্বয়ংক্রিয়ভাবে রোলব্যাক করে।' },
        { en: 'gRPC microservice deadlines: gRPC propagates context deadlines over HTTP/2 headers across multi-tier microservice clusters.', bn: 'gRPC ডেডলাইন: gRPC এইচটিটিপি/২ হেডারের মাধ্যমে ডিস্ট্রিবিউটেড ক্লাস্টারের সব মাইক্রোসার্ভিসে কনটেক্সট ডেডলাইন ফরোয়ার্ড করে।' },
        { en: 'Graceful HTTP server shutdown: srv.Shutdown(ctx) waits for in-flight requests to complete during deployment container recycling.', bn: 'গ্রেসফুল সার্ভার শাটডাউন: নতুন ভার্সন ডিপ্লয় করার সময় srv.Shutdown(ctx) চলমান রিকোয়েস্টগুলো শেষ হওয়া পর্যন্ত অপেক্ষা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The Gopher Release and Tooling', bn: 'পরবর্তী পাঠ — গোফার রিলিজ ও টুলিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With concurrency, select, and context mastered, our capstone Lesson 8 covers the complete Go release pipeline: go.mod modules, cross-compilation with GOOS/GOARCH, benchmark testing, and shipping production binaries.',
        bn: 'কনকারেন্সি, সিলেক্ট ও কনটেক্সট আয়ত্ত করার পর, আমাদের চূড়ান্ত পাঠ ৮ সম্পূর্ণ গো রিলিজ পাইপলাইন শেখাবে: go.mod মডিউল, GOOS/GOARCH দিয়ে ক্রস-কম্পাইলেশন, বেঞ্চমার্ক টেস্টিং এবং প্রোডাকশন বাইনারি শিপিং।',
      },
    },
  ],
  exercises: [
    {
      id: 'go-sel-ex-1',
      kind: 'mcq',
      topic: 'select-purpose',
      question: {
        en: 'What is the primary role of the select statement in Go concurrency?',
        bn: 'গো কনকারেন্সিতে select স্টেটমেন্টের মূল ভূমিকা কী?',
      },
      options: [
        {
          en: 'It allows a goroutine to wait on multiple channel send or receive operations simultaneously without busy polling',
          bn: 'এটি একটি গোরুটিনকে কোনো অবিরাম পোলিং ছাড়াই একসাথে একাধিক চ্যানেল সেন্ড বা রিসিভ অপারেশনের জন্য অপেক্ষা করতে দেয়',
        },
        {
          en: 'It executes an SQL database query directly against PostgreSQL',
          bn: 'এটি সরাসরি PostgreSQL ডাটাবেসে এসকিউএল কুয়েরি চালায়',
        },
        {
          en: 'It converts HTML documents into PDF files',
          bn: 'এটি এইচটিএমএল ডকুমেন্টকে পিডিএফ ফাইলে রূপান্তর করে',
        },
        {
          en: 'It generates cryptographic private keys for blockchain wallets',
          bn: 'এটি ব্লকচেইন ওয়ালেটের জন্য ক্রিপ্টোগ্রাফিক প্রাইভেট কি তৈরি করে',
        },
      ],
      answer: 0,
      hint: { en: 'select waits on multiple channel cases.', bn: 'select একাধিক চ্যানেল কেসের জন্য অপেক্ষা করে।' },
      explanation: {
        en: 'select blocks until one of its channel communication cases can proceed, enabling multi-channel coordination.',
        bn: 'select এর যেকোনো একটি চ্যানেল যোগাযোগ প্রস্তুত না হওয়া পর্যন্ত অপেক্ষা করে, যা বহু-চ্যানেল সমন্বয় সম্ভব করে।',
      },
    },
    {
      id: 'go-sel-ex-2',
      kind: 'mcq',
      topic: 'polled-capacity-calc',
      question: {
        en: 'In our code simulation, what was the total capacity in nodes aggregated across the 2 queried clusters (Primary-DC 32 and Secondary-DC 16)?',
        bn: 'আমাদের কোড সিমুলেশনে ২টি কুয়েরি করা ক্লাস্টার (Primary-DC ৩২ এবং Secondary-DC ১৬) থেকে মোট কত নোড ক্যাপাসিটি হিসাব করা হয়েছিল?',
      },
      options: [
        { en: 'Total capacity = 48 nodes across 2 clusters queried', bn: '২টি ক্লাস্টার থেকে মোট ক্যাপাসিটি = ৪৮টি নোড' },
        { en: 'Total capacity = 100 nodes across 5 clusters', bn: '৫টি ক্লাস্টার থেকে মোট ক্যাপাসিটি = ১০০টি নোড' },
        { en: 'Total capacity = 20 nodes across 1 cluster', bn: '১টি ক্লাস্টার থেকে মোট ক্যাপাসিটি = ২০টি নোড' },
        { en: 'Total capacity = 0 nodes across 0 clusters', bn: '০টি ক্লাস্টার থেকে মোট ক্যাপাসিটি = ০টি নোড' },
      ],
      answer: 0,
      hint: { en: '32 + 16 = 48 nodes.', bn: '৩২ + ১৬ = ৪৮টি নোড।' },
      explanation: {
        en: 'Primary-DC provided 32 nodes and Secondary-DC provided 16 nodes, totaling 48 nodes across 2 clusters.',
        bn: 'Primary-DC ৩২টি এবং Secondary-DC ১৬টি নোড সরবরাহ করায় ২টি ক্লাস্টারে মোট ৪৮টি নোড হয়।',
      },
    },
    {
      id: 'go-sel-ex-3',
      kind: 'mcq',
      topic: 'defer-cancel-rule',
      question: {
        en: 'Why should you always write defer cancel() immediately after creating a context with timeout (ctx, cancel := context.WithTimeout(...))?',
        bn: 'টাইমআউটসহ কনটেক্সট তৈরির পর (ctx, cancel := context.WithTimeout(...)) কেন সাথে সাথে defer cancel() লেখা উচিত?',
      },
      options: [
        {
          en: 'To release internal timer resources and prevent memory leaks if the function returns before the timeout expires',
          bn: 'টাইমআউট শেষ হওয়ার আগেই ফাংশন সম্পন্ন হলে অভ্যন্তরীণ টাইমার রিসোর্স মুক্ত করতে এবং মেমরি লিক প্রতিরোধ করতে',
        },
        {
          en: 'Because without cancel() the operating system terminates the process with SIGKILL',
          bn: 'কারণ cancel() না লিখলে অপারেটিং সিস্টেম প্রসেসটিকে সিগকিল দিয়ে বন্ধ করে দেয়',
        },
        {
          en: 'To restart the network router automatically',
          bn: 'নেটওয়ার্ক রাউটার স্বয়ংক্রিয়ভাবে রিস্টার্ট করার জন্য',
        },
        {
          en: 'To convert the context into an integer timestamp',
          bn: 'কনটেক্সটকে ইন্টিজার টাইমস্ট্যাম্পে রূপান্তর করার জন্য',
        },
      ],
      answer: 0,
      hint: { en: 'defer cancel() stops the background timer and releases resources.', bn: 'defer cancel() ব্যাকগ্রাউন্ড টাইমার থামিয়ে মেমরি মুক্ত করে।' },
      explanation: {
        en: 'Calling cancel() releases timers associated with the context, preventing resource leaks when functions return early.',
        bn: 'cancel() কল করলে কনটেক্সটের সাথে যুক্ত টাইমারগুলো বন্ধ হয়ে যায়, ফলে ফাংশন দ্রুত শেষ হলেও কোনো রিসোর্স অপচয় হয় না।',
      },
    },
    {
      id: 'go-sel-ex-4',
      kind: 'predict',
      topic: 'done-channel-method',
      question: {
        en: 'Which method on context.Context returns a channel that closes when work should be canceled (e.g. <-ctx....)?',
        bn: 'context.Context এর কোন মেথডটি এমন একটি চ্যানেল ফেরত দেয় যা কাজ বাতিল হলে বন্ধ হয়ে যায় (যেমন <-ctx....)?',
      },
      answer: 'Done()',
      accept: ['Done()', 'Done', '.Done()'],
      hint: { en: 'A 4-letter word meaning finished, followed by parentheses.', bn: 'সম্পন্ন বোঝায় এমন ৪ অক্ষরের ইংরেজি শব্দ, সাথে প্রথম বন্ধনী।' },
      explanation: {
        en: 'ctx.Done() returns a channel that closes when the context is canceled or times out.',
        bn: 'ctx.Done() এমন একটি চ্যানেল ফেরত দেয় যা কনটেক্সট বাতিল বা টাইমআউট হলে বন্ধ হয়ে যায়।',
      },
    },
  ],
  quiz: {
    id: 'selects-context-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'go-sel-q1',
        kind: 'mcq',
        topic: 'select-default-case',
        question: {
          en: 'What behavior does a default: case provide inside a Go select block?',
          bn: 'গো select ব্লকের ভেতরে একটি default: কেস কোন আচরণ প্রদান করে?',
        },
        options: [
          {
            en: 'It executes immediately if none of the communication channel cases are ready, preventing the goroutine from blocking',
            bn: 'অন্য কোনো চ্যানেল প্রস্তুত না থাকলে এটি তাৎক্ষণিক চলে, ফলে গোরুটিনটি আটকে (block) না থেকে সামনে এগোতে পারে',
          },
          {
            en: 'It causes the computer screen to blink three times',
            bn: 'এটি কম্পিউটারের স্ক্রিনকে তিনবার জ্বলতে ও নিভতে বাধ্য করে',
          },
          {
            en: 'It deletes all files in the current folder',
            bn: 'এটি বর্তমান ফোল্ডারের সমস্ত ফাইল মুছে ফেলে',
          },
          {
            en: 'It increases channel buffer capacity by 100 elements',
            bn: 'এটি চ্যানেলের বাফার ক্যাপাসিটি ১০০ উপাদান বৃদ্ধি করে',
          },
        ],
        answer: 0,
        hint: { en: 'default makes select non-blocking.', bn: 'default সিলেক্টকে নন-ব্লকিং করে তোলে।' },
        explanation: {
          en: 'A default case in a select makes communication non-blocking: if no channel is ready, default runs immediately.',
          bn: 'select এ default কেস যোগাযোগকে নন-ব্লকিং করে: কোনো চ্যানেল প্রস্তুত না থাকলে default সাথে সাথে কার্যকর হয়।',
        },
      },
      {
        id: 'go-sel-q2',
        kind: 'mcq',
        topic: 'primary-dc-nodes',
        question: {
          en: 'In our code walkthrough, how many nodes were reported by the Primary-DC channel?',
          bn: 'আমাদের কোড আলোচনায় Primary-DC চ্যানেল থেকে কতগুলো নোড রিপোর্ট করা হয়েছিল?',
        },
        options: [
          { en: 'Exactly 32 nodes', bn: 'ঠিক ৩২টি নোড' },
          { en: 'Exactly 100 nodes', bn: 'ঠিক ১০০টি নোড' },
          { en: 'Only 1 node', bn: 'কেবল ১টি নোড' },
          { en: 'Zero nodes', bn: '০টি নোড' },
        ],
        answer: 0,
        hint: { en: 'simulateClusterQuery(primaryCh, "Primary-DC", 32).', bn: 'simulateClusterQuery(primaryCh, "Primary-DC", ৩২)।' },
        explanation: {
          en: 'The simulation explicitly sent 32 nodes from Primary-DC.',
          bn: 'সিমুলেশনটিতে স্পষ্টভাবেই Primary-DC থেকে ৩২টি নোড পাঠানো হয়েছিল।',
        },
      },
      {
        id: 'go-sel-q3',
        kind: 'mcq',
        topic: 'context-propagation-rule',
        question: {
          en: 'Where should context.Context parameters be placed in Go function signatures by standard convention?',
          bn: 'স্ট্যান্ডার্ড কনভেনশন অনুসারে গো ফাংশন সিগনেচারে context.Context প্যারামিটারটি কোথায় রাখা উচিত?',
        },
        options: [
          {
            en: 'As the very first parameter of the function (e.g. func DoWork(ctx context.Context, id int))',
            bn: 'ফাংশনের একদম প্রথম প্যারামিটার হিসেবে (যেমন func DoWork(ctx context.Context, id int))',
          },
          {
            en: 'As the final parameter at the end of the list',
            bn: 'প্যারামিটার তালিকার একদম শেষ প্যারামিটার হিসেবে',
          },
          {
            en: 'Inside a global environment variable only',
            bn: 'কেবল একটি গ্লোবাল এনভায়রনমেন্ট ভেরিয়েবলের ভেতরে',
          },
          {
            en: 'Inside a struct field hidden from caller functions',
            bn: 'কলার ফাংশন থেকে গোপন কোনো স্ট্রাক্ট ফিল্ডের ভেতরে',
          },
        ],
        answer: 0,
        hint: { en: 'ctx is always the first parameter by convention.', bn: 'কনভেনশন অনুযায়ী ctx সর্বদা প্রথম প্যারামিটার হয়।' },
        explanation: {
          en: 'Go conventions dictate that ctx context.Context should be the first parameter of any function accepting it.',
          bn: 'গো-এর নিয়ম অনুযায়ী ctx context.Context গ্রহণকারী যেকোনো ফাংশনে এটি প্রথম প্যারামিটার হওয়া আবশ্যক।',
        },
      },
      {
        id: 'go-sel-q4',
        kind: 'predict',
        topic: 'select-keyword-recite',
        question: {
          en: 'Which Go keyword multiplexes channel operations, waiting for the first ready communication event?',
          bn: 'কোন গো কিওয়ার্ডটি চ্যানেল অপারেশন মাল্টিপ্লেক্স করে প্রথম প্রস্তুত ইভেন্টের জন্য অপেক্ষা করে?',
        },
        answer: 'select',
        accept: ['select'],
        hint: { en: 'A 6-letter keyword starting with "s".', bn: '"s" দিয়ে শুরু হওয়া ৬ অক্ষরের একটি কিওয়ার্ড।' },
        explanation: {
          en: 'The select keyword waits on multiple channel operations, executing whichever case is ready first.',
          bn: 'select কিওয়ার্ড একাধিক চ্যানেল অপারেশনের জন্য অপেক্ষা করে এবং যে কেসটি প্রথমে প্রস্তুত হয় তা কার্যকর করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-gopher-release',
    title: { en: 'The Gopher Release and Tooling', bn: 'গোফার রিলিজ ও টুলিং' },
  },
};
