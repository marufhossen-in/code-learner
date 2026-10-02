import type { Lesson } from '../../../lib/types';

export const PackagesAndTheImportLesson: Lesson = {
  slug: 'packages-and-the-import',
  tech: 'lang-go',
  title: {
    en: 'Packages and Syntax — Program Structure, Variables, and Compilation',
    bn: 'প্যাকেজ ও সিনট্যাক্স — প্রোগ্রামের গঠন, ভেরিয়েবল ও কম্পাইলেশন',
  },
  summary: {
    en: 'A beginner introduction to Go programming fundamentals: package declarations (package main), standard library imports ("fmt"), explicit and short variable declarations (:=), zero values, and compiling standalone native binaries with zero external dependencies.',
    bn: 'গো প্রোগ্রামিংয়ের প্রাথমিক পরিচিতি: প্যাকেজ ঘোষণা (package main), স্ট্যান্ডার্ড লাইব্রেরি ইমপোর্ট ("fmt"), স্পষ্ট ও সংক্ষিপ্ত ভেরিয়েবল ঘোষণা (:=), জিরো ভ্যালু এবং বাহ্যিক ডিপেনডেন্সি ছাড়াই একক নেটিভ বাইনারি কম্পাইল করা।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The Go compilation model and source structure', bn: 'WHAT — গো কম্পাইলেশন মডেল ও সোর্স ফাইলের গঠন' },
    },
    {
      type: 'para',
      text: {
        en: 'When you start learning Go, every program begins with package organization and explicit module boundaries. Unlike interpreted languages that require a runtime virtual machine, Go compiles directly into a single self-contained native executable. Every Go source file starts with a package statement: files declaring package main compile into executables starting at func main(), while other names define reusable library packages. Go enforces clean dependency hygiene: importing a package without using it triggers an immediate compile-time error.',
        bn: 'যখন আপনি গো শেখা শুরু করেন, তখন প্রতিটি প্রোগ্রাম সুনির্দিষ্ট প্যাকেজ সংগঠন ও মডিউল সীমানা দিয়ে যাত্রা শুরু করে। ইন্টারপ্রেটেড ভাষার মতো কোনো ভার্চুয়াল মেশিনের প্রয়োজন ছাড়াই গো সরাসরি একটি স্বয়ংসম্পূর্ণ নেটিভ এক্সিকিউটেবলে কম্পাইল হয়। প্রতিটি গো সোর্স ফাইল একটি প্যাকেজ স্টেটমেন্ট দিয়ে শুরু হয়: package main ঘোষণা করা ফাইলগুলো func main() থেকে শুরু হওয়া এক্সিকিউটেবল বাইনারিতে পরিণত হয়, আর অন্যান্য নাম পুনর্ব্যবহারযোগ্য লাইব্রেরি প্যাকেজ তৈরি করে। গো পরিষ্কার ডিপেনডেন্সি নিশ্চিত করে: কোনো প্যাকেজ ইমপোর্ট করে তা ব্যবহার না করলে কম্পাইলার তাৎক্ষণিক এরর দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Go compilation pipeline to a standalone static binary', bn: 'একক স্ট্যাটিক বাইনারিতে গো কম্পাইলেশন পাইপলাইন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go compilation pipeline diagram">
<rect x="20" y="35" width="180" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="110" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">GO SOURCE CODE</text>
<text x="35" y="85" font-family="monospace" font-size="10" fill="currentColor">package main</text>
<text x="35" y="105" font-family="monospace" font-size="10" fill="currentColor">import "fmt"</text>
<text x="35" y="125" font-family="monospace" font-size="10" fill="currentColor">func main() {</text>
<text x="50" y="145" font-family="monospace" font-size="10" fill="currentColor">  fmt.Println("Hi")</text>
<text x="35" y="165" font-family="monospace" font-size="10" fill="currentColor">}</text>

<line x1="200" y1="110" x2="280" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="280,105 295,110 280,115" fill="#4f46e5"/>

<rect x="295" y="70" width="100" height="80" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="345" y="95" text-anchor="middle" font-size="12" font-weight="800" fill="#854d0e">GO TOOL</text>
<text x="345" y="115" text-anchor="middle" font-family="monospace" font-size="11" fill="#854d0e">go build</text>
<text x="345" y="135" text-anchor="middle" font-size="10" fill="#a16207">Compiler</text>

<line x1="395" y1="110" x2="445" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="445,105 460,110 445,115" fill="#4f46e5"/>

<rect x="460" y="35" width="160" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="540" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">NATIVE BINARY</text>
<text x="475" y="90" font-family="monospace" font-size="10" fill="currentColor">./server (ELF/Mach-O)</text>
<text x="475" y="115" font-size="10" fill="#16a34a">✓ Zero dependencies</text>
<text x="475" y="135" font-size="10" fill="#16a34a">✓ Fast startup (&lt;5ms)</text>
<text x="475" y="155" font-size="10" fill="#16a34a">✓ Native machine code</text>
<text x="320" y="218" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Go produces a single self-contained binary ready for bare-metal or scratch Docker containers</text>
</svg>`,
      caption: {
        en: 'The Go build tool compiles package main into a single self-contained native executable with zero external runtime dependencies.',
        bn: 'গো বিল্ড টুল package main কে কোনো বাহ্যিক রানটাইম ডিপেনডেন্সি ছাড়াই একটি স্বয়ংসম্পূর্ণ নেটিভ এক্সিকিউটেবলে রূপান্তর করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'package main',
          def: {
            en: 'The special Go package declaration that designates a file as an executable program entry point containing func main().',
            bn: 'গো-এর বিশেষ প্যাকেজ ঘোষণা যা কোনো ফাইলকে func main() যুক্ত একটি এক্সিকিউটেবল প্রোগ্রাম হিসেবে চিহ্নিত করে।',
          },
        },
        {
          term: 'Short variable declaration (:=)',
          def: {
            en: 'A shorthand syntax within functions that declares and initializes a variable simultaneously with automatic type inference.',
            bn: 'ফাংশনের ভেতরে ভেরিয়েবল ঘোষণা ও প্রাথমিক মান অ্যাসাইন করার সংক্ষিপ্ত সিনট্যাক্স যা স্বয়ংক্রিয়ভাবে টাইপ অনুমান করে নেয়।',
          },
        },
        {
          term: 'Zero value',
          def: {
            en: 'The default initialized value Go guarantees for unassigned variables: 0 for numeric types, false for booleans, and "" for strings.',
            bn: 'মান নির্ধারণ না করা ভেরিয়েবলের জন্য গো-এর ডিফল্ট মান: সংখ্যার জন্য ০, বুলিয়ানের জন্য false এবং স্ট্রিংয়ের জন্য ""।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Extreme developer velocity and deployment simplicity', bn: 'কেন — দ্রুততম ডেভেলপমেন্ট গতি ও সহজ ডিপ্লয়মেন্ট' },
    },
    {
      type: 'list',
      items: [
        { en: 'Single static executable: compile once and deploy anywhere without installing virtual machines, runtime interpreters, or shared libraries.', bn: 'একক স্ট্যাটিক এক্সিকিউটেবল: কোনো ভার্চুয়াল মেশিন বা ইন্টারপ্রেটার ইনস্টল ছাড়াই যেকোনো সার্ভারে সরাসরি চালানো যায়।' },
        { en: 'Instant compilation speeds: Go compiler processes tens of thousands of lines per second due to strict dependency graph management.', bn: 'তাৎক্ষণিক কম্পাইলেশন গতি: কঠোর ডিপেনডেন্সি গ্রাফ পরিচালনার কারণে গো কম্পাইলার প্রতি সেকেন্ডে হাজার হাজার লাইন কোড কম্পাইল করে।' },
        { en: 'Guaranteed zero values: uninitialized variables automatically receive predictable zero values, preventing uninitialized memory bugs.', bn: 'নিশ্চিত জিরো ভ্যালু: মান নির্ধারণ না করা ভেরিয়েবলগুলো পূর্বনির্ধারিত জিরো মান পায়, ফলে মেমরি সংক্রান্ত অনাকাঙ্ক্ষিত বাগ এড়ানো যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Core syntax and variables in 4 steps', bn: 'HOW — ৪টি ধাপে মূল সিনট্যাক্স ও ভেরিয়েবল' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Declare package', bn: '১. প্যাকেজ ঘোষণা' }, text: { en: 'Write package main at the top of the file to create an executable program.', bn: 'একটি এক্সিকিউটেবল প্রোগ্রাম তৈরি করতে ফাইলের শীর্ষে package main লিখুন।' } },
        { title: { en: '2. Import packages', bn: '২. লাইব্রেরি ইমপোর্ট' }, text: { en: 'Use import "fmt" to format and print text to standard console streams.', bn: 'কনসোলে টেক্সট ফরম্যাট ও প্রিন্ট করতে import "fmt" ব্যবহার করুন।' } },
        { title: { en: '3. Declare variables', bn: '৩. ভেরিয়েবল ডিক্লেয়ার' }, text: { en: 'Use := inside functions for fast declaration or var for package-level scope.', bn: 'ফাংশনের ভেতরে দ্রুত ঘোষণার জন্য := এবং প্যাকেজ স্কোপে var ব্যবহার করুন।' } },
        { title: { en: '4. Build and execute', bn: '৪. রান ও কম্পাইল' }, text: { en: 'Execute directly with go run main.go or compile with go build.', bn: 'go run main.go দিয়ে তাৎক্ষণিক চালান অথবা go build দিয়ে বাইনারি তৈরি করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'main.go',
      code: `package main

import (
	"fmt"
)

func main() {
	// 1. Explicit and inferred variable declarations
	var port int = 8080
	serviceName := "AuthService"
	isReady := true

	// 2. Metrics calculation
	requestCount := 150
	errorCount := 6
	successCount := requestCount - errorCount
	successRate := (successCount * 100) / requestCount

	fmt.Println("Go Server Initialization:")
	fmt.Printf("Service: %s on Port %d (Ready: %t)\\n", serviceName, port, isReady)
	fmt.Printf("Requests: %d total, %d success, %d errors\\n", requestCount, successCount, errorCount)
	fmt.Printf("Success rate: %d%%\\n", successRate)
}

// Output:
// Go Server Initialization:
// Service: AuthService on Port 8080 (Ready: true)
// Requests: 150 total, 144 success, 6 errors
// Success rate: 96%`,
      caption: {
        en: 'The Go program initializes a service on port 8080. Out of 150 total requests, 144 succeed and 6 fail, yielding an exact 96 percent success rate.',
        bn: 'গো প্রোগ্রামটি ৮০৮০ পোর্টে একটি সার্ভিস চালু করে। মোট ১৫০টি রিকোয়েস্টের মধ্যে ১৪৪টি সফল এবং ৬টি ব্যর্থ হয়, যার সাফল্যের হার ঠিক ৯৬ শতাংশ।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive Go syntax simulator', bn: 'INSIDE — জীবন্ত গো সিনট্যাক্স সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'Explore the arithmetic metrics evaluated by the Go program. Running on port 8080, the service processes 150 requests with 6 failures, achieving 144 successes and a 96 percent success rate. If you edit the error count to 0, notice that success rate climbs to 100 percent.',
        bn: 'গো প্রোগ্রামের হিসাবগুলো পরীক্ষা করুন। ৮০৮০ পোর্টে চলমান সার্ভিসটি ৬টি ব্যর্থতাসহ ১৫০টি রিকোয়েস্ট প্রসেস করে ১৪৪টি সাফল্য ও ৯৬ শতাংশ সাফল্যের হার অর্জন করে। ব্যর্থতার সংখ্যা ০ করলে সাফল্যের হার ১০০ শতাংশে পৌঁছায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Go syntax lab (modify request count, press Run)', bn: 'Go syntax lab (রিকোয়েস্ট সংখ্যা পরিবর্তন করুন, Run)' },
      html: '<h3>Go Server Execution Simulator</h3>\n<pre id="out"></pre>\n<p>Compiled output formatted via Printf.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const port = 8080;\nconst total = 150;\nconst err = 6;\nconst ok = total - err;\nconst rate = Math.round((ok * 100) / total);\nconsole.log("Port " + port + ": " + rate + "% success");\ndocument.getElementById("out").textContent = "Port: " + port + " · Total: " + total + " · Success: " + ok + " · Errors: " + err + " · Rate: " + rate + "% ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Go language design principles', bn: 'ফলাফল — গো ভাষার নকশার মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Simplicity over cleverness: Go deliberately limits language keywords (only 25 keywords) to keep codebases readable across engineering teams.', bn: 'জটিলতার চেয়ে সরলতা শ্রেয়: প্রকৌশল দলগুলোতে কোড সহজে পড়ার জন্য গো ইচ্ছাকৃতভাবেই কিওয়ার্ডের সংখ্যা মাত্র ২৫টিতে সীমাবদ্ধ রেখেছে।' },
        { en: 'Predictable zero values: every variable is initialized safely without garbage memory values or uninitialized pointers.', bn: 'পূর্বনির্ধারিত জিরো মান: প্রতিটি ভেরিয়েবল কোনো আবর্জনা মান বা খালি পয়েন্টার ছাড়াই নিরাপদে ইনিশিয়ালাইজ হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common beginner Go errors', bn: 'ডিবাগ — গো শেখার সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Unused import or variable compiler error', bn: 'অব্যবহৃত ইমপোর্ট বা ভেরিয়েবলের কম্পাইল এরর' },
      text: {
        en: 'Unlike most languages that emit warnings, the Go compiler treats any unused import or unused local variable as a fatal build error. Cure: delete the unused import or assign the variable to the blank identifier (_ = val) during debugging.',
        bn: 'অধিকাংশ ভাষার মতো কেবল সতর্কবার্তা না দিয়ে গো কম্পাইলার যেকোনো অব্যবহৃত ইমপোর্ট বা অব্যবহৃত লোকাল ভেরিয়েবলকে সরাসরি মারাত্মক বিল্ড এরর হিসেবে গণ্য করে। প্রতিকার: অব্যবহৃত ইমপোর্ট মুছে ফেলুন অথবা ডিবাগিংয়ের সময় ব্ল্যাঙ্ক আইডেন্টিফায়ারে (_ = val) অ্যাসাইন করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Exported vs unexported identifier capitalization', bn: 'এক্সপোর্টেড বনাম আন-এক্সপোর্টেড ক্যাপিটালাইজেশন' },
      text: {
        en: 'In Go, visibility is controlled entirely by capitalization. Identifiers beginning with a capital letter (such as Println or MaxCount) are public and exported outside the package, while lowercase names (port or calculate) are private.',
        bn: 'গো-তে ভিসিবিলিটি সম্পূর্ণভাবে ক্যাপিটালাইজেশন দ্বারা নিয়ন্ত্রিত হয়। বড় হাতের অক্ষর দিয়ে শুরু হওয়া নামগুলো (যেমন Println বা MaxCount) পাবলিক ও এক্সপোর্টেড হয়, আর ছোট হাতের নামগুলো (port বা calculate) প্যাকেজের ভেতরে প্রাইভেট থাকে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems built in Go', bn: 'বাস্তব ক্ষেত্র — গো দিয়ে তৈরি আধুনিক সিস্টেম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Docker container engine: written in Go to interact with Linux cgroups and namespaces with minimal memory footprint.', bn: 'ডকার কন্টেইনার ইঞ্জিন: ন্যূনতম মেমরি খরচে লিনাক্স সিগ্রুপ ও নেমস্পেস পরিচালনার জন্য গো-তে লেখা।' },
        { en: 'Kubernetes orchestration: manages millions of containers globally using high-throughput Go concurrent controllers.', bn: 'কুবারনেটিস ক্লাস্টার: গো-এর উচ্চ-ক্ষমতাসম্পন্ন কনকারেন্ট কন্ট্রোলার ব্যবহার করে বিশ্বব্যাপী লাখ লাখ কন্টেইনার পরিচালনা করে।' },
        { en: 'Prometheus monitoring: time-series database ingesting millions of metrics per second with low-latency Go garbage collection.', bn: 'প্রমিথিউস মনিটরিং: কম ল্যাটেন্সির গো গার্বেজ কালেকশন কাজে লাগিয়ে প্রতি সেকেন্ডে লাখ লাখ মেট্রিক্স প্রসেস করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Slices and Append', bn: 'পরবর্তী পাঠ — স্লাইস ও অ্যাপেন্ড' },
    },
    {
      type: 'para',
      text: {
        en: 'With Go packages, variables, and compilation understood, Lesson 2 explores slices, backing arrays, capacity growth algorithms, and the append built-in function.',
        bn: 'গো প্যাকেজ, ভেরিয়েবল ও কম্পাইলেশন আয়ত্ত করার পর, পাঠ ২ স্লাইস, ব্যাকিং অ্যারে, ক্যাপাসিটি বৃদ্ধির অ্যালগরিদম এবং append ফাংশন শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'go-pkg-ex-1',
      kind: 'mcq',
      topic: 'package-main',
      question: {
        en: 'Which package declaration must a Go file use if it contains the entrypoint function func main() to compile into an executable program?',
        bn: 'একটি এক্সিকিউটেবল প্রোগ্রামে কম্পাইল হতে func main() ধারণকারী কোনো গো ফাইলকে অবশ্যই কোন প্যাকেজ ঘোষণাটি ব্যবহার করতে হবে?',
      },
      options: [
        { en: 'package main', bn: 'package main' },
        { en: 'package app', bn: 'package app' },
        { en: 'package root', bn: 'package root' },
        { en: 'package entry', bn: 'package entry' },
      ],
      answer: 0,
      hint: { en: 'The required package name is "main".', bn: 'প্রয়োজনীয় প্যাকেজের নাম হলো "main"।' },
      explanation: {
        en: 'In Go, package main designates an executable program containing func main(), rather than a reusable shared library.',
        bn: 'গো-তে package main নির্দেশ করে যে ফাইলটি func main() যুক্ত একটি এক্সিকিউটেবল প্রোগ্রাম, কোনো পুনর্ব্যবহারযোগ্য লাইব্রেরি নয়।',
      },
    },
    {
      id: 'go-pkg-ex-2',
      kind: 'mcq',
      topic: 'syntax-metrics',
      question: {
        en: 'In our code simulation, what were the total requests and the success rate calculated for the service running on port 8080?',
        bn: 'আমাদের কোড সিমুলেশনে ৮০৮০ পোর্টে চলমান সার্ভিসটির জন্য মোট রিকোয়েস্ট এবং হিসাবকৃত সাফল্যের হার কত ছিল?',
      },
      options: [
        { en: '150 total requests with a 96% success rate (144 success, 6 errors)', bn: '১৫০টি মোট রিকোয়েস্ট যার সাফল্যের হার ৯৬% (১৪৪টি সফল, ৬টি এরর)' },
        { en: '100 total requests with a 50% success rate', bn: '১০০টি মোট রিকোয়েস্ট যার সাফল্যের হার ৫০%' },
        { en: '200 total requests with an 80% success rate', bn: '২০০টি মোট রিকোয়েস্ট যার সাফল্যের হার ৮০%' },
        { en: '50 total requests with a 10% success rate', bn: '৫০টি মোট রিকোয়েস্ট যার সাফল্যের হার ১০%' },
      ],
      answer: 0,
      hint: { en: '150 total, 6 errors = 144 successes; (144 * 100) / 150 = 96%.', bn: '১৫০ মোট, ৬টি এরর = ১৪৪টি সফল; (১৪৪ * ১০০) / ১৫০ = ৯৬%।' },
      explanation: {
        en: 'Out of 150 total requests with 6 errors, 144 succeeded, yielding exactly a 96% success rate.',
        bn: '৬টি এররসহ মোট ১৫০টি রিকোয়েস্টের মধ্যে ১৪৪টি সফল হয়, যার ফলে সাফল্যের হার ঠিক ৯৬% হয়।',
      },
    },
    {
      id: 'go-pkg-ex-3',
      kind: 'mcq',
      topic: 'short-declaration',
      question: {
        en: 'Which symbol represents the short variable declaration operator in Go (e.g. count := 10)?',
        bn: 'গো-তে শর্ট ভেরিয়েবল ডিক্লারেশন অপারেটর হিসেবে কোন প্রতীকটি ব্যবহৃত হয় (যেমন count := 10)?',
      },
      options: [
        { en: ':=', bn: ':=' },
        { en: '=', bn: '=' },
        { en: '==', bn: '==' },
        { en: '::', bn: '::' },
      ],
      answer: 0,
      hint: { en: 'A colon followed immediately by an equals sign.', bn: 'কোলনের ঠিক পরে একটি সমান চিহ্ন।' },
      explanation: {
        en: 'The := syntax declares and initializes a variable with inferred type inside functions.',
        bn: ':= সিনট্যাক্সটি ফাংশনের ভেতরে টাইপ অনুমান করে ভেরিয়েবল ঘোষণা ও প্রাথমিক মান অ্যাসাইন করে।',
      },
    },
    {
      id: 'go-pkg-ex-4',
      kind: 'predict',
      topic: 'zero-value-bool',
      question: {
        en: 'What is the default zero value of an uninitialized boolean variable in Go (var active bool)?',
        bn: 'গো-তে মান নির্ধারণ না করা কোনো বুলিয়ান ভেরিয়েবলের ডিফল্ট জিরো ভ্যালু কী হয় (var active bool)?',
      },
      answer: 'false',
      accept: ['false', 'False'],
      hint: { en: 'The opposite of true.', bn: 'true এর বিপরীত।' },
      explanation: {
        en: 'Go initializes unassigned boolean variables to false as their default zero value.',
        bn: 'মান নির্ধারণ না করা বুলিয়ান ভেরিয়েবলকে গো ডিফল্ট জিরো ভ্যালু হিসেবে false দিয়ে শুরু করে।',
      },
    },
  ],
  quiz: {
    id: 'packages-syntax-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'go-pkg-q1',
        kind: 'mcq',
        topic: 'unused-import-behavior',
        question: {
          en: 'What occurs when you compile a Go file that imports a package without using any of its functions or types?',
          bn: 'কোনো ফাংশন বা টাইপ ব্যবহার না করেই কোনো প্যাকেজ ইমপোর্ট করা হয়েছে এমন একটি গো ফাইল কম্পাইল করলে কী ঘটে?',
        },
        options: [
          {
            en: 'The Go compiler throws a compile-time error and halts the build process',
            bn: 'গো কম্পাইলার কম্পাইল-টাইম এরর দেয় এবং বিল্ড প্রক্রিয়া বন্ধ করে দেয়',
          },
          {
            en: 'The compiler emits a warning and runs the program anyway',
            bn: 'কম্পাইলার কেবল একটি সতর্কবার্তা দেয় এবং প্রোগ্রামটি চালিয়ে দেয়',
          },
          {
            en: 'The unused package is silently downloaded and executed as a daemon',
            bn: 'অব্যবহৃত প্যাকেজটি নীরবে ডাউনলোড হয়ে ডেমন হিসেবে চলতে থাকে',
          },
          {
            en: 'The operating system reallocates virtual memory automatically',
            bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে ভার্চুয়াল মেমরি পুনরায় বরাদ্দ করে',
          },
        ],
        answer: 0,
        hint: { en: 'Go strictly forbids unused imports at compile time.', bn: 'গো কম্পাইল-টাইমে অব্যবহৃত ইমপোর্ট কঠোরভাবে নিষিদ্ধ করে।' },
        explanation: {
          en: 'To keep dependencies clean and compilation fast, Go treats unused imports as fatal compilation errors.',
          bn: 'ডিপেনডেন্সি পরিচ্ছন্ন এবং কম্পাইলেশন দ্রুত রাখতে গো অব্যবহৃত ইমপোর্টকে সরাসরি কম্পাইল এরর হিসেবে দেখে।',
        },
      },
      {
        id: 'go-pkg-q2',
        kind: 'mcq',
        topic: 'port-number-calc',
        question: {
          en: 'In our code walkthrough, on which network port was the AuthService configured to run?',
          bn: 'আমাদের কোড আলোচনায় AuthService কোন নেটওয়ার্ক পোর্টে চলার জন্য কনফিগার করা হয়েছিল?',
        },
        options: [
          { en: 'Port 8080', bn: 'পোর্ট ৮০৮০' },
          { en: 'Port 3000', bn: 'পোর্ট ৩০০০' },
          { en: 'Port 80', bn: 'পোর্ট ৮০' },
          { en: 'Port 443', bn: 'পোর্ট ৪৪৩' },
        ],
        answer: 0,
        hint: { en: 'var port int = 8080.', bn: 'var port int = ৮০৮০।' },
        explanation: {
          en: 'The server initialized explicitly with var port int = 8080.',
          bn: 'সার্ভারটি স্পষ্টভাবেই var port int = 8080 দিয়ে শুরু হয়েছিল।',
        },
      },
      {
        id: 'go-pkg-q3',
        kind: 'mcq',
        topic: 'capitalization-export',
        question: {
          en: 'How does Go determine whether a function, struct, or variable is exported outside its package?',
          bn: 'কোনো ফাংশন, স্ট্রাক্ট বা ভেরিয়েবল তার প্যাকেজের বাইরে এক্সপোর্টেড কিনা তা গো কীভাবে নির্ধারণ করে?',
        },
        options: [
          {
            en: 'If the identifier begins with a capital letter (such as FormatDate), it is exported; if lowercase, it is unexported',
            bn: 'নামটি যদি বড় হাতের অক্ষর দিয়ে শুরু হয় (যেমন FormatDate) তবে তা এক্সপোর্টেড; আর ছোট হাতের হলে তা আন-এক্সপোর্টেড থাকে',
          },
          {
            en: 'By adding the export keyword before the declaration',
            bn: 'ঘোষণার পূর্বে export কিওয়ার্ড যুক্ত করার মাধ্যমে',
          },
          {
            en: 'By listing public function names in an external JSON configuration file',
            bn: 'একটি বাহ্যিক জেসন কনফিগারেশন ফাইলে পাবলিক ফাংশনের তালিকা দেওয়ার মাধ্যমে',
          },
          {
            en: 'All variables in Go are globally public across the internet',
            bn: 'গো-এর সমস্ত ভেরিয়েবল ইন্টারনেটে বিশ্বব্যাপী পাবলিক থাকে',
          },
        ],
        answer: 0,
        hint: { en: 'Capitalization alone sets visibility in Go.', bn: 'গো-তে কেবল ক্যাপিটালাইজেশনই ভিসিবিলিটি নির্ধারণ করে।' },
        explanation: {
          en: 'Go uses the case of the first letter: uppercase identifiers are public/exported, while lowercase ones are package-private.',
          bn: 'গো প্রথম অক্ষরের ওপর নির্ভর করে: বড় হাতের অক্ষর পাবলিক/এক্সপোর্টেড নির্দেশ করে এবং ছোট হাতের অক্ষর প্যাকেজ-প্রাইভেট নির্দেশ করে।',
        },
      },
      {
        id: 'go-pkg-q4',
        kind: 'predict',
        topic: 'compiler-command-recite',
        question: {
          en: 'Which Go CLI command compiles packages and dependencies into a standalone executable binary file without executing it?',
          bn: 'কোন গো সিএলআই কমান্ডটি প্যাকেজ ও ডিপেনডেন্সিগুলোকে না চালিয়ে একটি একক এক্সিকিউটেবল বাইনারি ফাইলে কম্পাইল করে?',
        },
        answer: 'go build',
        accept: ['go build', 'build'],
        hint: { en: 'Two words: "go" followed by the verb "build".', bn: 'দুই শব্দ: "go" এর পর "build" ক্রিয়া।' },
        explanation: {
          en: 'go build compiles source files into an executable binary without running it immediately.',
          bn: 'go build সোর্স ফাইলগুলোকে সরাসরি না চালিয়ে একটি এক্সিকিউটেবল বাইনারিতে কম্পাইল করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'slices-and-the-append',
    title: { en: 'Slices and Append', bn: 'স্লাইস ও অ্যাপেন্ড' },
  },
};
