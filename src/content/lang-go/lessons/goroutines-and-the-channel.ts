import type { Lesson } from '../../../lib/types';

export const GoroutinesAndTheChannelLesson: Lesson = {
  slug: 'goroutines-and-the-channel',
  tech: 'lang-go',
  title: {
    en: 'Goroutines and Channels — CSP Concurrency and Message Passing',
    bn: 'গোরুটিন ও চ্যানেল — সিএসপি কনকারেন্সি ও মেসেজ পাসিং',
  },
  summary: {
    en: 'Master Go concurrency fundamentals: launch lightweight goroutines with go, establish typed message channels (chan T), compare unbuffered rendezvous with buffered queues, coordinate goroutines using sync.WaitGroup, and eliminate data races.',
    bn: 'গো কনকারেন্সির মূল ভিত্তি আয়ত্ত করুন: go দিয়ে হালকা গোরুটিন চালু করা, টাইপড মেসেজ চ্যানেল (chan T) তৈরি, আনবাফার্ড ও বাফার্ড চ্যানেলের তুলনা, sync.WaitGroup দিয়ে গোরুটিন সমন্বয় এবং ডেটা রেস প্রতিরোধ করা।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — CSP concurrency, green threads, and message channels', bn: 'WHAT — সিএসপি কনকারেন্সি, গ্রিন থ্রেড ও মেসেজ চ্যানেল' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build high-throughput network services in Go, its channel-based message concurrency model provides exceptional scalability with minimal memory footprint. A Go goroutine starts with a tiny 2-kilobyte stack and is multiplexed across operating system threads by the runtime scheduler. Rather than synchronizing shared state through mutex locks, Go encourages passing data across typed channels. The core design rule is simple: do not communicate by sharing memory; instead, share memory by communicating.',
        bn: 'যখন আপনি গো-তে উচ্চ-গতির নেটওয়ার্ক সার্ভিস তৈরি করেন, তখন চ্যানেল-ভিত্তিক মেসেজ কনকারেন্সি মডেল অত্যন্ত কম মেমরি খরচে অসাধারণ স্কেলেবিলিটি দেয়। সাধারণ ওএস থ্রেডের বদলে একটি গো গোরুটিন মাত্র ২-কিলোবাইট স্ট্যাক নিয়ে শুরু হয় এবং গো রানটাইম শিডিউলার দ্বারা পরিচালিত হয়। জটিল মিউটেক্স লক দিয়ে মেমরি পাহারা দেওয়ার বদলে গো আপনাকে টাইপড চ্যানেলের মাধ্যমে ডেটার আদান-প্রদান করতে উৎসাহিত করে। এর মূল দর্শন হলো: মেমরি শেয়ার করে যোগাযোগ করবেন না; বরং যোগাযোগের মাধ্যমে মেমরি শেয়ার করুন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Concurrent worker pipeline coordinating through typed channels', bn: 'টাইপড চ্যানেলের মাধ্যমে সমন্বিত কনকারেন্ট ওয়ার্কার পাইপলাইন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go goroutine and channel pipeline diagram">
<rect x="20" y="30" width="160" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="100" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">TASK QUEUE</text>
<text x="35" y="80" font-family="monospace" font-size="10" fill="currentColor">tasks := make(chan int, 3)</text>
<g font-family="monospace" font-size="10">
  <rect x="35" y="95" width="35" height="25" fill="#dbeafe" stroke="#2563eb"/>
  <text x="52" y="112" text-anchor="middle" fill="#1e40af">10</text>
  <rect x="75" y="95" width="35" height="25" fill="#dbeafe" stroke="#2563eb"/>
  <text x="92" y="112" text-anchor="middle" fill="#1e40af">20</text>
  <rect x="115" y="95" width="35" height="25" fill="#dbeafe" stroke="#2563eb"/>
  <text x="132" y="112" text-anchor="middle" fill="#1e40af">30</text>
</g>
<text x="100" y="150" text-anchor="middle" font-size="10" fill="#2563eb">Buffered Capacity: 3</text>

<line x1="180" y1="105" x2="260" y2="105" stroke="#4f46e5" stroke-width="2"/>
<polygon points="260,100 275,105 260,110" fill="#4f46e5"/>

<rect x="275" y="55" width="130" height="100" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="340" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">GOROUTINE</text>
<text x="340" y="105" text-anchor="middle" font-family="monospace" font-size="10" fill="currentColor">go worker()</text>
<text x="340" y="125" text-anchor="middle" font-size="10" fill="#854d0e">~2 KB Stack</text>
<text x="340" y="140" text-anchor="middle" font-size="9" fill="#854d0e">Double value (t*2)</text>

<line x1="405" y1="105" x2="480" y2="105" stroke="#16a34a" stroke-width="2"/>
<polygon points="480,100 495,105 480,110" fill="#16a34a"/>

<rect x="495" y="30" width="130" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="560" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">RESULTS CHAN</text>
<text x="510" y="85" font-family="monospace" font-size="10" fill="#166534">res &lt;- 20</text>
<text x="510" y="110" font-family="monospace" font-size="10" fill="#166534">res &lt;- 40</text>
<text x="510" y="135" font-family="monospace" font-size="10" fill="#166534">res &lt;- 60</text>
<text x="560" y="160" text-anchor="middle" font-size="10" fill="#166534">Sum = 120 ✓</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Channels transfer data ownership without mutex contention</text>
</svg>`,
      caption: {
        en: 'The channel pipeline transmits 3 tasks (10, 20, 30) into the worker goroutine, which doubles each value into results (20, 40, 60), yielding total sum 120.',
        bn: 'চ্যানেল পাইপলাইনটি ওয়ার্কার গোরুটিনে ৩টি টাস্ক (১০, ২০, ৩০) পাঠায়, যা প্রতিটি মান দ্বিগুণ করে রেজাল্ট চ্যানেলে (২০, ৪০, ৬০) পাঠায় এবং মোট যোগফল ১২০ হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Goroutine',
          def: {
            en: 'A lightweight thread of execution managed concurrently by the Go runtime scheduler, starting with only ~2 KB of stack memory.',
            bn: 'গো রানটাইম শিডিউলার দ্বারা পরিচালিত একটি হালকা এক্সিকিউশন থ্রেড, যা মাত্র প্রায় ২ কিলোবাইট স্ট্যাক মেমরি নিয়ে শুরু হয়।',
          },
        },
        {
          term: 'Channel',
          def: {
            en: 'A typed synchronization conduit that allows concurrent goroutines to send and receive values without explicit memory locks.',
            bn: 'একটি টাইপড সিঙ্ক্রোনাইজেশন মাধ্যম যার সাহায্যে কনকারেন্ট গোরুটিনগুলো কোনো ম্যানুয়াল লক ছাড়াই নিরাপদে ডেটা আদান-প্রদান করে।',
          },
        },
        {
          term: 'Buffered channel',
          def: {
            en: 'A channel initialized with a capacity buffer (make(chan T, cap)) allowing sends to complete non-blockingly until the buffer fills.',
            bn: 'ক্যাপাসিটি বাফারযুক্ত চ্যানেল (make(chan T, cap)) যেখানে বাফার পূর্ণ না হওয়া পর্যন্ত ডেটা পাঠানো ব্লক হয় না।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Extreme concurrency scalability and race-free architecture', bn: 'কেন — চরম কনকারেন্সি স্কেলেবিলিটি ও রেস-মুক্ত আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Tiny memory footprint: launching 50,000 goroutines consumes only ~100 MB of RAM, compared to gigabytes required by operating system threads.', bn: 'ন্যূনতম মেমরি খরচ: ৫০,০০০ গোরুটিন চালাতে মাত্র প্রায় ১০০ মেগাবাইট র‍্যাম লাগে, যা ওএস থ্রেডের গিগাবাইট খরচের তুলনায় অত্যন্ত কম।' },
        { en: 'Eliminate race conditions: passing values through channels enforces clear data ownership transfer without locking shared memory.', bn: 'রেস কন্ডিশন দূর করা: চ্যানেলের মাধ্যমে মান আদান-প্রদান স্পষ্ট মালিকানা বদল নিশ্চিত করে এবং শেয়ার্ড মেমরি লকিংয়ের ঝামেলা এড়ায়।' },
        { en: 'Built-in dead-lock detection: the Go runtime immediately detects and reports when all goroutines are permanently blocked waiting for input.', bn: 'অন্তর্নির্মিত ডেডলক শনাক্তকরণ: সমস্ত গোরুটিন কোনো ইনপুটের অপেক্ষায় চিরতরে আটকে গেলে গো রানটাইম তাৎক্ষণিক ডেডলক শনাক্ত করে রিপোর্ট দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Launching goroutines and channels in 4 steps', bn: 'HOW — ৪টি ধাপে গোরুটিন ও চ্যানেল পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create channel', bn: '১. চ্যানেল তৈরি' }, text: { en: 'Use make(chan Type, capacity) to establish a typed communication conduit.', bn: 'make(chan Type, capacity) দিয়ে একটি টাইপড যোগাযোগের চ্যানেল তৈরি করুন।' } },
        { title: { en: '2. Launch goroutine', bn: '২. গোরুটিন চালু' }, text: { en: 'Prefix function calls with the go keyword (e.g. go worker(ch)).', bn: 'ফাংশন কলের পূর্বে go কিওয়ার্ড যুক্ত করুন (যেমন go worker(ch))।' } },
        { title: { en: '3. Send and receive', bn: '৩. ডেটা পাঠানো ও গ্রহণ' }, text: { en: 'Send with ch <- data and receive with val := <-ch.', bn: 'ডেটা পাঠাতে ch <- data এবং গ্রহণ করতে val := <-ch ব্যবহার করুন।' } },
        { title: { en: '4. Close channel', bn: '৪. চ্যানেল বন্ধকরণ' }, text: { en: 'Call close(ch) from the sender side to signal completion to receivers.', bn: 'কাজ শেষ বোঝাতে প্রেরকের দিক থেকে close(ch) কল করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'channel_pipeline_sim.go',
      code: `package main

import "fmt"

func worker(id int, tasks <-chan int, results chan<- int) {
	for t := range tasks {
		// Double the task value
		results <- t * 2
	}
}

func main() {
	taskCount := 3
	tasks := make(chan int, taskCount)
	results := make(chan int, taskCount)

	// 1. Enqueue 3 tasks: 10, 20, 30
	tasks <- 10
	tasks <- 20
	tasks <- 30
	close(tasks)

	// 2. Process tasks using worker
	worker(1, tasks, results)
	close(results)

	// 3. Aggregate results
	totalProcessedSum := 0
	for res := range results {
		totalProcessedSum += res
	}

	fmt.Println("Goroutine Channel Pipeline:")
	fmt.Printf("Tasks processed: %d items\\n", taskCount)
	fmt.Printf("Total processed results sum: %d\\n", totalProcessedSum)
}

// Output:
// Goroutine Channel Pipeline:
// Tasks processed: 3 items
// Total processed results sum: 120`,
      caption: {
        en: 'The simulation processes 3 tasks (10, 20, 30) through worker 1. Doubling each task produces 20, 40, and 60 in the results channel, summing to 120.',
        bn: 'সিমুলেশনটি ওয়ার্কার ১ এর মাধ্যমে ৩টি টাস্ক (১০, ২০, ৩০) প্রসেস করে। প্রতিটি মান দ্বিগুণ হয়ে রেজাল্ট চ্যানেলে ২০, ৪০ এবং ৬০ দেয়, যার মোট যোগফল ১২০।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive goroutine channel lab', bn: 'INSIDE — জীবন্ত গোরুটিন ও চ্যানেল ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Observe message passing across buffered channels. Three tasks [10, 20, 30] are enqueued into a buffered channel of capacity 3. The worker consumes each task, multiplies it by 2, and pushes the values [20, 40, 60] into the results channel, producing total aggregated sum 120. Modifying task inputs demonstrates how channels decouple computation stages.',
        bn: 'বাফার্ড চ্যানেলের মাধ্যমে মেসেজ পাসিং পর্যবেক্ষণ করুন। ৩টি টাস্ক [১০, ২০, ৩০] ক্যাপাসিটি ৩ বিশিষ্ট একটি বাফার্ড চ্যানেলে রাখা হয়। ওয়ার্কার প্রতিটি টাস্ক গ্রহণ করে ২ দিয়ে গুণ করে এবং [২০, ৪০, ৬০] মানগুলো রেজাল্ট চ্যানেলে পাঠায়, যার মোট যোগফল ১২০। টাস্ক ইনপুট পরিবর্তন করে চ্যানেলের ডিকপলিং ক্ষমতা পরখ করুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Channel lab (modify tasks, press Run)', bn: 'Channel lab (টাস্ক পরিবর্তন করুন, Run)' },
      html: '<h3>Go Channel Worker Simulation</h3>\n<pre id="out"></pre>\n<p>Buffered channel worker throughput.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const tasks = [10, 20, 30];\nconst doubled = tasks.map(x => x * 2);\nconst sum = doubled.reduce((a, b) => a + b, 0);\nconsole.log("total: " + sum);\ndocument.getElementById("out").textContent = "Tasks: " + tasks.length + " · Doubled: [" + doubled.join(", ") + "] · Total Sum: " + sum + " ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Concurrency design principles', bn: 'ফলাফল — কনকারেন্সি ডিজাইনের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Channels transfer ownership: once data is sent on a channel, the sender goroutine must not read or mutate that data anymore.', bn: 'চ্যানেল মালিকানা হস্তান্তর করে: চ্যানেলে ডেটা পাঠানোর পর প্রেরক গোরুটিনের আর সেই ডেটা পড়া বা পরিবর্তন করা উচিত নয়।' },
        { en: 'Only the sender closes a channel: receivers must never close a channel, because sending to a closed channel causes an immediate runtime panic.', bn: 'কেবল প্রেরকই চ্যানেল বন্ধ করবে: প্রাপক কখনো চ্যানেল ক্লোজ করবে না, কারণ বন্ধ চ্যানেলে ডেটা পাঠালে সাথে সাথে প্যানিক ঘটে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common concurrency traps', bn: 'ডিবাগ — কনকারেন্সির সাধারণ ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Goroutine leaks from unread channels', bn: 'অপঠিত চ্যানেলের কারণে গোরুটিন মেমরি লিক' },
      text: {
        en: 'If a goroutine sends on an unbuffered channel and no receiver ever reads from it, the goroutine blocks forever and is never garbage collected! This is a goroutine leak. Cure: ensure every channel send has a guaranteed receiver or use buffered channels and context timeouts.',
        bn: 'কোনো গোরুটিন যদি আনবাফার্ড চ্যানেলে ডেটা পাঠায় এবং কোনো প্রাপক তা গ্রহণ না করে, তবে গোরুটিনটি চিরতরে আটকে থাকে এবং গার্বেজ কালেক্ট হয় না! এটি গোরুটিন লিক। প্রতিকার: প্রতিটি চ্যানেলে নিশ্চিত প্রাপক রাখুন অথবা বাফার্ড চ্যানেল ও কনটেক্সট টাইমআউট ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Passing directional channel types', bn: 'ডিরেকশনাল চ্যানেল টাইপ ব্যবহার' },
      text: {
        en: 'Restrict function arguments using directional channels: tasks <-chan int allows only receiving, and results chan<- int allows only sending. This lets the compiler catch improper send/receive directions at build time.',
        bn: 'ফাংশন আর্গুমেন্টে ডিরেকশনাল চ্যানেল ব্যবহার করুন: tasks <-chan int কেবল রিসিভ করার অনুমতি দেয় এবং results chan<- int কেবল সেন্ড করার অনুমতি দেয়। ফলে ভুল অপারেশন কম্পাইল-টাইমেই ধরা পড়ে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production concurrency systems', bn: 'বাস্তব ক্ষেত্র — আধুনিক কনকারেন্ট সিস্টেম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Worker pool job processors: queuing background image resizing, email dispatching, and PDF generation across fixed pools of worker goroutines.', bn: 'ওয়ার্কার পুল জব প্রসেসর: নির্দিষ্ট সংখ্যক ওয়ার্কার গোরুটিন দিয়ে ব্যাকগ্রাউন্ড ইমেজ রিসাইজিং, ইমেইল পাঠানো এবং পিডিএফ তৈরি করা।' },
        { en: 'Streaming financial telemetry: ingest real-time stock and cryptocurrency order books through buffered channels without thread locking.', bn: 'আর্থিক তথ্য স্ট্রিমিং: থ্রেড লকিং ছাড়াই বাফার্ড চ্যানেলের মাধ্যমে রিয়েল-টাইম স্টক ও ক্রিপ্টোকারেন্সির ট্রেড ডেটা প্রসেস করা।' },
        { en: 'High-speed load balancers (Traefik, Envoy Go): distributing incoming HTTP requests across backend target pools via concurrent channel pipelines.', bn: 'হাই-স্পিড লোড ব্যালেন্সার: কনকারেন্ট চ্যানেল পাইপলাইনের মাধ্যমে আগত এইচটিটিপি রিকোয়েস্ট ব্যাকএন্ড সার্ভারে বিতরণ করা।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Select and Context', bn: 'পরবর্তী পাঠ — সিলেক্ট ও কনটেক্সট' },
    },
    {
      type: 'para',
      text: {
        en: 'With goroutines and channels mastered, Lesson 7 explores multiplexing channels with the select statement, non-blocking operations, and context.Context for graceful timeout cancellations across distributed microservices.',
        bn: 'গোরুটিন ও চ্যানেল আয়ত্ত করার পর, পাঠ ৭ select স্টেটমেন্ট দিয়ে চ্যানেল মাল্টিপ্লেক্সিং, নন-ব্লকিং অপারেশন এবং মাইক্রোসার্ভিসে টাইমআউট ক্যান্সেলেশনের জন্য context.Context এর ব্যবহার শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'go-gor-ex-1',
      kind: 'mcq',
      topic: 'goroutine-launch',
      question: {
        en: 'Which Go keyword is used to launch a function execution concurrently as a lightweight goroutine?',
        bn: 'কোন গো কিওয়ার্ডটি ব্যবহার করে কোনো ফাংশনকে কনকারেন্টভাবে একটি হালকা গোরুটিন হিসেবে চালু করা হয়?',
      },
      options: [
        { en: 'go', bn: 'go' },
        { en: 'async', bn: 'async' },
        { en: 'thread', bn: 'thread' },
        { en: 'spawn', bn: 'spawn' },
      ],
      answer: 0,
      hint: { en: 'The 2-letter keyword matching the language name.', bn: 'ভাষার নামের সাথে হুবহু মিল থাকা ২ অক্ষরের কিওয়ার্ড।' },
      explanation: {
        en: 'The go keyword launches a function in a new goroutine managed concurrently by the Go runtime.',
        bn: 'go কিওয়ার্ডটি গো রানটাইম দ্বারা পরিচালিত একটি নতুন গোরুটিনে সমান্তরালভাবে ফাংশন চালু করে।',
      },
    },
    {
      id: 'go-gor-ex-2',
      kind: 'mcq',
      topic: 'pipeline-results-calc',
      question: {
        en: 'In our code simulation, what was the total sum of the results after worker 1 doubled the 3 task values (10, 20, 30)?',
        bn: 'আমাদের কোড সিমুলেশনে ওয়ার্কার ১ কর্তৃক ৩টি টাস্কের মান (১০, ২০, ৩০) দ্বিগুণ করার পর ফলাফলের মোট যোগফল কত ছিল?',
      },
      options: [
        { en: 'Total processed results sum = 120 across 3 items', bn: '৩টি উপাদানের ফলাফলের মোট যোগফল = ১২০' },
        { en: 'Total processed results sum = 60 across 3 items', bn: '৩টি উপাদানের ফলাফলের মোট যোগফল = ৬০' },
        { en: 'Total processed results sum = 300 across 5 items', bn: '৫টি উপাদানের ফলাফলের মোট যোগফল = ৩০০' },
        { en: 'Total processed results sum = 0 across 0 items', bn: '০টি উপাদানের ফলাফলের মোট যোগফল = ০' },
      ],
      answer: 0,
      hint: { en: '(10*2) + (20*2) + (30*2) = 20 + 40 + 60 = 120.', bn: '(১০*২) + (২০*২) + (৩০*২) = ২০ + ৪০ + ৬০ = ১২০।' },
      explanation: {
        en: 'Doubling 10, 20, and 30 produces 20, 40, and 60; summing them yields 120.',
        bn: '১০, ২০ ও ৩০ কে দ্বিগুণ করলে ২০, ৪০ ও ৬০ পাওয়া যায়; এদের যোগফল ১২০।',
      },
    },
    {
      id: 'go-gor-ex-3',
      kind: 'mcq',
      topic: 'buffered-channel-behavior',
      question: {
        en: 'When does a send operation on a buffered channel (make(chan int, 3)) block?',
        bn: 'একটি বাফার্ড চ্যানেলে (make(chan int, 3)) ডেটা পাঠানো কখন আটকে (block) যায়?',
      },
      options: [
        {
          en: 'Only when the channel buffer is completely full of unread elements',
          bn: 'কেবল তখনই যখন চ্যানেলের বাফারটি অপঠিত উপাদানে পুরোপুরি পূর্ণ থাকে',
        },
        {
          en: 'On every single send operation regardless of buffer size',
          bn: 'বাফারের আকার যাই হোক না কেন প্রতিটি সেন্ড অপারেশনের সময়',
        },
        {
          en: 'Only when the computer network cable is disconnected',
          bn: 'কেবল কম্পিউটার নেটওয়ার্কের তার খুলে ফেলা হলে',
        },
        {
          en: 'Sends never block under any circumstance',
          bn: 'কোনো অবস্থাতেই সেন্ড অপারেশন ব্লক হয় না',
        },
      ],
      answer: 0,
      hint: { en: 'Buffered channels allow sends until capacity is full.', bn: 'বাফার্ড চ্যানেল ধারণক্ষমতা পূর্ণ না হওয়া পর্যন্ত পাঠানোর অনুমতি দেয়।' },
      explanation: {
        en: 'A buffered channel only blocks senders when its internal ring buffer reaches maximum capacity.',
        bn: 'একটি বাফার্ড চ্যানেল কেবল তখনই সেন্ডারকে আটকে দেয় যখন এর রিং বাফার সর্বোচ্চ ধারণক্ষমতায় পৌঁছায়।',
      },
    },
    {
      id: 'go-gor-ex-4',
      kind: 'predict',
      topic: 'close-builtin-recite',
      question: {
        en: 'Which Go built-in function is called on a channel to signal to receivers that no more values will be sent?',
        bn: 'গ্রাহকদের আর কোনো মান পাঠানো হবে না তা জানাতে চ্যানেলের ওপর কোন গো বিল্ট-ইন ফাংশন ডাকা হয়?',
      },
      answer: 'close',
      accept: ['close', 'close()'],
      hint: { en: 'A 5-letter word meaning to shut or complete.', bn: 'বন্ধ বা সম্পন্ন করা বোঝায় এমন ৫ অক্ষরের একটি ইংরেজি শব্দ।' },
      explanation: {
        en: 'close(ch) signals that no further values will be sent on the channel.',
        bn: 'close(ch) নির্দেশ করে যে চ্যানেলে আর কোনো নতুন মান পাঠানো হবে না।',
      },
    },
  ],
  quiz: {
    id: 'goroutines-channel-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'go-gor-q1',
        kind: 'mcq',
        topic: 'goroutine-memory-size',
        question: {
          en: 'Approximately how much initial stack memory does a newly launched Go goroutine consume?',
          bn: 'নতুন চালু হওয়া একটি গো গোরুটিন প্রাথমিকভাবে আনুমানিক কতটুকু স্ট্যাক মেমরি খরচ করে?',
        },
        options: [
          {
            en: 'Approximately 2 kilobytes (~2 KB), growing dynamically as needed',
            bn: 'আনুমানিক প্রায় ২ কিলোবাইট (~২ KB), যা প্রয়োজন অনুসারে গতিশীলভাবে বৃদ্ধি পায়',
          },
          {
            en: 'Exactly 16 megabytes fixed memory',
            bn: 'নির্দিষ্টভাবে ঠিক ১৬ মেগাবাইট মেমরি',
          },
          {
            en: 'Zero bytes because it runs purely in CPU registers',
            bn: 'শূন্য বাইট কারণ এটি সম্পূর্ণ সিপিইউ রেজিস্টারে চলে',
          },
          {
            en: '1 gigabyte allocated per thread',
            bn: 'প্রতিটি থ্রেডের জন্য ১ গিগাবাইট মেমরি বরাদ্দ হয়',
          },
        ],
        answer: 0,
        hint: { en: 'Goroutines start tiny, at ~2 KB.', bn: 'গোরুটিন অত্যন্ত কম মেমরি নিয়ে শুরু হয়, প্রায় ২ কিলোবাইট।' },
        explanation: {
          en: 'A goroutine starts with only ~2 KB of stack, enabling applications to run tens of thousands of concurrent goroutines.',
          bn: 'একটি গোরুটিন মাত্র প্রায় ২ কিলোবাইট স্ট্যাক নিয়ে শুরু হয়, ফলে অ্যাপ্লিকেশন হাজার হাজার গোরুটিন একসাথে চালাতে পারে।',
        },
      },
      {
        id: 'go-gor-q2',
        kind: 'mcq',
        topic: 'task-count-ref',
        question: {
          en: 'In our code walkthrough, how many total integer tasks were enqueued into the tasks channel?',
          bn: 'আমাদের কোড আলোচনায় tasks চ্যানেলে মোট কয়টি ইন্টিজার টাস্ক রাখা হয়েছিল?',
        },
        options: [
          { en: 'Exactly 3 tasks (10, 20, 30)', bn: 'ঠিক ৩টি টাস্ক (১০, ২০, ৩০)' },
          { en: 'Exactly 50 tasks', bn: 'ঠিক ৫০টি টাস্ক' },
          { en: 'Only 1 task', bn: 'কেবল ১টি টাস্ক' },
          { en: 'Zero tasks', bn: '০টি টাস্ক' },
        ],
        answer: 0,
        hint: { en: 'taskCount := 3.', bn: 'taskCount := ৩।' },
        explanation: {
          en: 'The simulation explicitly enqueued 3 tasks: 10, 20, and 30.',
          bn: 'সিমুলেশনটিতে স্পষ্টভাবেই ৩টি টাস্ক (১০, ২০ এবং ৩০) কিউতে দেওয়া হয়েছিল।',
        },
      },
      {
        id: 'go-gor-q3',
        kind: 'mcq',
        topic: 'closed-channel-send',
        question: {
          en: 'What occurs at runtime if a goroutine attempts to send a value on an already closed channel (close(ch); ch <- 1)?',
          bn: 'ইতিমধ্যে বন্ধ করা কোনো চ্যানেলে মান পাঠাতে গেলে (close(ch); ch <- 1) রানটাইমে কী ঘটে?',
        },
        options: [
          {
            en: 'The Go runtime triggers an immediate fatal runtime panic: send on closed channel',
            bn: 'গো রানটাইম সাথে সাথে একটি মারাত্মক রানটাইম প্যানিক তৈরি করে: send on closed channel',
          },
          {
            en: 'The value is automatically redirected to the operating system null device',
            bn: 'মানটি স্বয়ংক্রিয়ভাবে অপারেটিং সিস্টেমের নাল ডিভাইসে চলে যায়',
          },
          {
            en: 'The channel automatically reopens itself',
            bn: 'চ্যানেলটি স্বয়ংক্রিয়ভাবে পুনরায় খুলে যায়',
          },
          {
            en: 'The operating system restarts the computer network interface',
            bn: 'অপারেটিং সিস্টেম কম্পিউটারের নেটওয়ার্ক ইন্টারফেস রিস্টার্ট করে',
          },
        ],
        answer: 0,
        hint: { en: 'Sending on a closed channel panics immediately.', bn: 'বন্ধ চ্যানেলে পাঠাতে গেলে তাৎক্ষণিক প্যানিক হয়।' },
        explanation: {
          en: 'Sending to a closed channel is a fatal programming bug that causes an immediate runtime panic in Go.',
          bn: 'বন্ধ চ্যানেলে কোনো মান পাঠানো একটি মারাত্মক ভুল যা গো-তে তাৎক্ষণিক রানটাইম প্যানিক তৈরি করে।',
        },
      },
      {
        id: 'go-gor-q4',
        kind: 'predict',
        topic: 'channel-operator-token',
        question: {
          en: 'Which two-character operator is used to send or receive values through a Go channel (e.g. ch ... 10 or val := ...ch)?',
          bn: 'গো চ্যানেলের মাধ্যমে মান পাঠাতে বা গ্রহণ করতে কোন দুই ক্যারেক্টারের অপারেটর ব্যবহৃত হয় (যেমন ch ... 10 বা val := ...ch)?',
        },
        answer: '<-',
        accept: ['<-'],
        hint: { en: 'A less-than sign followed by a hyphen representing an arrow.', bn: 'একটি তীরচিহ্ন নির্দেশকারী লেস-দ্যান এবং হাইফেন।' },
        explanation: {
          en: 'The arrow operator <- specifies direction for sending to or receiving from channels.',
          bn: '<- তীর অপারেটরটি চ্যানেলে পাঠানো বা চ্যানেল থেকে গ্রহণের দিক নির্দেশ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'selects-and-the-context',
    title: { en: 'Select and Context', bn: 'সিলেক্ট ও কনটেক্সট' },
  },
};
