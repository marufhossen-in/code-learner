import type { Lesson } from '../../../lib/types';

export const TheGopherReleaseLesson: Lesson = {
  slug: 'the-gopher-release',
  tech: 'lang-go',
  title: {
    en: 'The Gopher Release — Modules, Cross-Compilation, and Production Tooling',
    bn: 'গোফার রিলিজ — মডিউল, ক্রস-কম্পাইলেশন ও প্রোডাকশন টুলিং',
  },
  summary: {
    en: 'Master extreme-expert production Go release pipelines: manage reproducible modules with go.mod, execute zero-dependency cross-compilation with GOOS and GOARCH, run micro-benchmarks with go test -bench, strip binary symbols with ldflags, and package minimal scratch container images.',
    bn: 'চরম-দক্ষ প্রোডাকশন গো রিলিজ পাইপলাইন আয়ত্ত করুন: go.mod দিয়ে নির্ভরযোগ্য মডিউল পরিচালনা, GOOS ও GOARCH দিয়ে ক্রস-কম্পাইলেশন, go test -bench দিয়ে বেঞ্চমার্ক টেস্টিং, ldflags দিয়ে বাইনারি সাইজ ছোট করা এবং মিনিমাল স্ক্র্যাচ কন্টেইনার প্যাকেজিং।',
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Static compilation, cross-platform builds, and modules', bn: 'WHAT — স্ট্যাটিক কম্পাইলেশন, ক্রস-প্ল্যাটফর্ম বিল্ড ও মডিউল' },
    },
    {
      type: 'para',
      text: {
        en: 'When you prepare a Go backend microservice or CLI tool for production release, the toolchain delivers an unparalleled compilation workflow. Go cross-compiles directly into a single self-contained binary for any target operating system. The module system locks reproducible dependency versions across team builds. Compiler flags like -ldflags="-s -w" strip debugging symbols to minimize executable footprint for micro-sized scratch Docker containers.',
        bn: 'যখন আপনি প্রোডাকশন রিলিজের জন্য কোনো গো ব্যাকএন্ড মাইক্রোসার্ভিস বা সিএলআই টুল প্রস্তুত করেন, তখন গো টুলচেইন অনন্য কম্পাইলেশন সুবিধা প্রদান করে। গো যেকোনো টার্গেট অপারেটিং সিস্টেমের জন্য সরাসরি একটি স্বয়ংসম্পূর্ণ একক বাইনারিতে ক্রস-কম্পাইল করে। এর মডিউল সিস্টেম দলগত বিল্ডজুড়ে বিশ্বস্ত ডিপেনডেন্সি লক করে রাখে। -ldflags="-s -w" এর মতো কম্পাইলার ফ্ল্যাগ ডিবাগিং সিম্বল মুছে ফেলে অতি ক্ষুদ্র স্ক্র্যাচ ডকার কন্টেইনারের জন্য বাইনারি সাইজ কমিয়ে আনে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Single source codebase cross-compiling to multiple native OS targets', bn: 'একক সোর্স কোড থেকে বিভিন্ন অপারেটিং সিস্টেমে ক্রস-কম্পাইলেশন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go cross-compilation release diagram">
<rect x="20" y="40" width="160" height="130" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="100" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">GO CODEBASE</text>
<text x="35" y="90" font-family="monospace" font-size="10" fill="currentColor">main.go</text>
<text x="35" y="110" font-family="monospace" font-size="10" fill="currentColor">go.mod</text>
<text x="35" y="130" font-family="monospace" font-size="10" fill="currentColor">go.sum</text>
<text x="100" y="155" text-anchor="middle" font-size="10" fill="#2563eb">Host: Developer Mac/PC</text>

<line x1="180" y1="105" x2="250" y2="105" stroke="#4f46e5" stroke-width="2"/>
<polygon points="250,100 265,105 250,110" fill="#4f46e5"/>

<rect x="265" y="75" width="100" height="60" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="315" y="100" text-anchor="middle" font-size="12" font-weight="800" fill="#854d0e">COMPILER</text>
<text x="315" y="120" text-anchor="middle" font-family="monospace" font-size="10" fill="#854d0e">go build -ldflags</text>

<line x1="365" y1="90" x2="430" y2="40" stroke="#16a34a" stroke-width="2"/>
<line x1="365" y1="105" x2="430" y2="105" stroke="#2563eb" stroke-width="2"/>
<line x1="365" y1="120" x2="430" y2="170" stroke="#9333ea" stroke-width="2"/>

<rect x="430" y="15" width="190" height="45" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="525" y="32" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#166534">linux/amd64 (15 MB)</text>
<text x="525" y="48" text-anchor="middle" font-size="9" fill="#166534">Cloud servers &amp; Docker</text>

<rect x="430" y="80" width="190" height="45" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="525" y="97" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#1e40af">darwin/arm64 (16 MB)</text>
<text x="525" y="113" text-anchor="middle" font-size="9" fill="#1e40af">Apple Silicon macOS</text>

<rect x="430" y="145" width="190" height="45" rx="6" fill="#faf5ff" stroke="#9333ea" stroke-width="1.5"/>
<text x="525" y="162" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#6b21a8">windows/amd64 (17 MB)</text>
<text x="525" y="178" text-anchor="middle" font-size="9" fill="#6b21a8">Windows enterprise PCs</text>

<text x="320" y="220" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Combined release payload: 48 MB across 3 platforms built in seconds</text>
</svg>`,
      caption: {
        en: 'The Go compiler cross-compiles to Linux (15 MB), macOS (16 MB), and Windows (17 MB) binaries totalling 48 MB, ready for scratch Docker deployment without installing runtimes.',
        bn: 'গো কম্পাইলার লিনাক্স (১৫ মেগাবাইট), ম্যাকওএস (১৬ মেগাবাইট) এবং উইন্ডোজ (১৭ মেগাবাইট) মোট ৪৮ মেগাবাইট বাইনারিতে ক্রস-কম্পাইল করে যা কোনো রানটাইম ইনস্টল ছাড়াই স্ক্র্যাচ ডকারে সরাসরি চলে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cross-compilation',
          def: {
            en: 'The compiler capability to generate executable binaries for a different operating system and CPU architecture without requiring virtual machines.',
            bn: 'ভার্চুয়াল মেশিন ছাড়াই সরাসরি বর্তমান মেশিন থেকে ভিন্ন অপারেটিং সিস্টেম ও সিপিইউ আর্কিটেকচারের জন্য এক্সিকিউটেবল বাইনারি তৈরি করার কম্পাইলার সক্ষমতা।',
          },
        },
        {
          term: 'go.mod',
          def: {
            en: 'The root Go module manifest file that declares the module path, minimum Go version, and required third-party dependency versions.',
            bn: 'গো মডিউলের মূল ম্যানিফেস্ট ফাইল যা মডিউল পাথ, ন্যূনতম গো ভার্সন এবং প্রয়োজনীয় ডিপেনডেন্সির সুনির্দিষ্ট ভার্সন ঘোষণা করে।',
          },
        },
        {
          term: 'Scratch container',
          def: {
            en: 'An empty, zero-byte base Docker image (FROM scratch) containing only the static Go binary, minimizing container attack surface.',
            bn: 'একটি সম্পূর্ণ ফাঁকা বেস ডকার ইমেজ (FROM scratch) যা কেবল স্ট্যাটিক গো বাইনারি ধারণ করে কন্টেইনারের সাইজ ও সিকিউরিটি ঝুঁকি কমিয়ে আনে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Extreme portability and hardened container security', bn: 'কেন — সর্বোচ্চ পোর্টেবিলিটি ও নিরাপদ কন্টেইনার আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Frictionless multi-platform releases: build Linux, macOS, and Windows executables simultaneously from a single developer laptop in seconds.', bn: 'সহজ বহু-প্ল্যাটফর্ম রিলিজ: মাত্র কয়েক সেকেন্ডে একজন ডেভেলপারের ল্যাপটপ থেকেই লিনাক্স, ম্যাক ও উইন্ডোজ এক্সিকিউটেবল তৈরি করা যায়।' },
        { en: 'Hardened production security: static binaries running in FROM scratch containers contain no shell, curl, or package managers for attackers to hijack.', bn: 'কঠোর প্রোডাকশন নিরাপত্তা: FROM scratch কন্টেইনারে কোনো শেল বা প্যাকেজ ম্যানেজার না থাকায় হ্যাকারদের আক্রমণের ঝুঁকি থাকে না।' },
        { en: 'Cryptographic dependency verification: go.sum verifies SHA-256 hashes of every imported module, preventing supply chain attacks.', bn: 'ক্রিপ্টোগ্রাফিক ডিপেনডেন্সি যাচাই: go.sum প্রতিটি ইমপোর্ট করা মডিউলের এসএইচএ-২৫৬ হ্যাশ যাচাই করে সাপ্লাই চেইন আক্রমণ প্রতিরোধ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Packaging a production Go release in 4 steps', bn: 'HOW — ৪টি ধাপে প্রোডাকশন গো রিলিজ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Initialize module', bn: '১. মডিউল শুরুকরণ' }, text: { en: 'Run go mod init github.com/user/project to declare project root.', bn: 'প্রজেক্ট রুট নির্ধারণ করতে go mod init github.com/user/project চালান।' } },
        { title: { en: '2. Run benchmarks', bn: '২. বেঞ্চমার্ক পরীক্ষা' }, text: { en: 'Run go test -bench=. -benchmem to audit memory allocations.', bn: 'মেমরি বরাদ্দ যাচাই করতে go test -bench=. -benchmem চালান।' } },
        { title: { en: '3. Cross-compile binary', bn: '৩. ক্রস-কম্পাইলেশন' }, text: { en: 'Set GOOS=linux GOARCH=amd64 go build to target cloud servers.', bn: 'ক্লাউড সার্ভারের জন্য GOOS=linux GOARCH=amd64 go build সেট করুন।' } },
        { title: { en: '4. Strip binary symbols', bn: '৪. সিম্বল অপসারণ' }, text: { en: 'Add -ldflags="-s -w" to shrink binary size by eliminating debug tables.', bn: 'ডিবাগ টেবিল মুছে সাইজ কমাতে -ldflags="-s -w" যোগ করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'release_metrics_sim.go',
      code: `package main

import "fmt"

type BinaryTarget struct {
	OS       string
	Arch     string
	SizeMB   int
	Stripped bool
}

func main() {
	// Targets built across platforms
	targets := []BinaryTarget{
		{OS: "linux", Arch: "amd64", SizeMB: 15, Stripped: true},
		{OS: "darwin", Arch: "arm64", SizeMB: 16, Stripped: true},
		{OS: "windows", Arch: "amd64", SizeMB: 17, Stripped: true},
	}

	totalPayloadMB := 0
	for _, t := range targets {
		totalPayloadMB += t.SizeMB
		fmt.Printf("Compiled target %s/%s: %d MB (stripped: %t)\\n", t.OS, t.Arch, t.SizeMB, t.Stripped)
	}

	fmt.Println("Production Release Summary:")
	fmt.Printf("Targets compiled: %d platforms, Combined artifact size: %d MB\\n", len(targets), totalPayloadMB)
}

// Output:
// Compiled target linux/amd64: 15 MB (stripped: true)
// Compiled target darwin/arm64: 16 MB (stripped: true)
// Compiled target windows/amd64: 17 MB (stripped: true)
// Production Release Summary:
// Targets compiled: 3 platforms, Combined artifact size: 48 MB`,
      caption: {
        en: 'The simulation traces cross-compilation across 3 platforms: linux (15 MB), darwin (16 MB), and windows (17 MB), producing 48 MB in combined release artifacts.',
        bn: 'সিমুলেশনটি ৩টি প্ল্যাটফর্মে ক্রস-কম্পাইলেশন প্রদর্শন করে: লিনাক্স (১৫ মেগাবাইট), ম্যাকওএস (১৬ মেগাবাইট) এবং উইন্ডোজ (১৭ মেগাবাইট), যার সম্মিলিত আকার ৪৮ মেগাবাইট।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive release artifact lab', bn: 'INSIDE — জীবন্ত রিলিজ আর্টিফ্যাক্ট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test the build metrics for compiling production Go binaries. Cross-compiling to Linux produces a 15 MB binary, macOS yields 16 MB, and Windows produces 17 MB across 3 platforms, totaling 48 MB. Stripping symbols with -ldflags="-s -w" keeps each executable lightweight and optimal for container deployment.',
        bn: 'প্রোডাকশন গো বাইনারি কম্পাইলেশন মেট্রিক্স পরীক্ষা করুন। ৩টি প্ল্যাটফর্মের মধ্যে লিনাক্সে ১৫ মেগাবাইট, ম্যাকওএসে ১৬ মেগাবাইট এবং উইন্ডোজে ১৭ মেগাবাইট বাইনারি তৈরি হয়, যার মোট পরিমাণ ৪৮ মেগাবাইট। -ldflags="-s -w" দিয়ে সিম্বল মুছে ফেলায় প্রতিটি এক্সিকিউটেবল হালকা ও কন্টেইনার ডিপ্লয়মেন্টের জন্য আদর্শ থাকে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Release lab (modify binary sizes, press Run)', bn: 'Release lab (বাইনারি সাইজ পরিবর্তন করুন, Run)' },
      html: '<h3>Go Multi-Platform Release Simulator</h3>\n<pre id="out"></pre>\n<p>Cross-compiled static binary artifacts.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const linux = 15;\nconst darwin = 16;\nconst windows = 17;\nconst total = linux + darwin + windows;\nconsole.log("total payload: " + total + " MB");\ndocument.getElementById("out").textContent = "Platforms: 3 · Linux: " + linux + " MB · Mac: " + darwin + " MB · Win: " + windows + " MB · Total: " + total + " MB ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Production release principles', bn: 'ফলাফল — প্রোডাকশন রিলিজের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Single static binaries eliminate environment drift between local dev machines and cloud production servers.', bn: 'একক স্ট্যাটিক বাইনারি লোকাল ডেভেলপমেন্ট মেশিন এবং ক্লাউড প্রোডাকশন সার্ভারের মধ্যকার পরিবেশগত অমিল দূর করে।' },
        { en: 'Minimal Docker images using scratch reduce deployment image transfer times to seconds and eliminate common CVE vulnerabilities.', bn: 'scratch ভিত্তিক মিনিমাল ডকার ইমেজ ডিপ্লয়মেন্ট টাইম কয়েক সেকেন্ডে নামিয়ে আনে এবং সাধারণ নিরাপত্তা ত্রুটিগুলো দূর করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common release pitfalls', bn: 'ডিবাগ — রিলিজ কনফিগারেশনের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'CGO_ENABLED=1 breaks static cross-compilation', bn: 'CGO_ENABLED=1 স্ট্যাটিক ক্রস-কম্পাইলেশনে বাধা দেওয়া' },
      text: {
        en: 'By default, Go might link against local C standard libraries (glibc) if cgo is enabled. When deploying to Alpine Linux or scratch images, this causes missing library errors like "file not found"! Cure: always set CGO_ENABLED=0 to build pure static Go binaries.',
        bn: 'cgo সক্রিয় থাকলে গো স্থানীয় সি লাইব্রেরির (glibc) সাথে ডায়নামিক লিংক করতে পারে। আলপাইন লিনাক্স বা স্ক্র্যাচ ইমেজে ডিপ্লয় করার সময় এটি "file not found" এরর দেয়! প্রতিকার: বিশুদ্ধ স্ট্যাটিক গো বাইনারি তৈরি করতে সর্বদা CGO_ENABLED=0 সেট করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Adding SSL certificates to scratch containers', bn: 'স্ক্র্যাচ কন্টেইনারে এসএসএল সার্টিফিকেট যুক্ত করা' },
      text: {
        en: 'Because FROM scratch is an empty filesystem, HTTPS requests made by your binary will fail with "x509: certificate signed by unknown authority". Copy /etc/ssl/certs/ca-certificates.crt from a builder stage into your scratch container.',
        bn: 'যেহেতু FROM scratch সম্পূর্ণ ফাঁকা থাকে, তাই এইচটিটিপিএস কল করলে "x509: certificate signed by unknown authority" এরর হতে পারে। বিল্ডার স্টেজ থেকে /etc/ssl/certs/ca-certificates.crt ফাইলটি স্ক্র্যাচ ইমেজে কপি করে নিন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production deployment architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক ডিপ্লয়মেন্ট আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'GitHub Actions multi-platform matrix: building native binaries for arm64 and amd64 architectures in parallel and publishing to GitHub Releases.', bn: 'গিটহাব অ্যাকশন ম্যাট্রিক্স: arm64 এবং amd64 আর্কিটেকচারের জন্য সমান্তরালভাবে বাইনারি তৈরি করে গিটহাব রিলিজে প্রকাশ করা।' },
        { en: 'HashiCorp tools (Terraform, Consul, Vault): distributed as single static Go binaries installed via simple curl or brew commands.', bn: 'হাশিকর্প টুলস (Terraform, Vault): কোনো ডিপেনডেন্সি ছাড়াই একক স্ট্যাটিক গো বাইনারি হিসেবে বিতরণ করা হয়।' },
        { en: 'Serverless cloud functions (AWS Lambda, Google Cloud Run): cold-start times under 10 milliseconds thanks to minimal stripped binary sizes.', bn: 'সার্ভারলেস ফাংশন (AWS Lambda): ছোট আকারের স্ট্রিপড বাইনারির কারণে ১০ মিলিসেকেন্ডের কম সময়ে কোল্ড-স্টার্ট সম্পন্ন হয়।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'go-rel-ex-1',
      kind: 'mcq',
      topic: 'cgo-static-build',
      question: {
        en: 'Why is CGO_ENABLED=0 recommended when cross-compiling Go binaries for scratch Docker containers?',
        bn: 'স্ক্র্যাচ ডকার কন্টেইনারের জন্য গো বাইনারি ক্রস-কম্পাইল করার সময় CGO_ENABLED=0 কেন সুপারিশ করা হয়?',
      },
      options: [
        {
          en: 'It disables C library dependencies, producing a 100% static binary that runs without glibc on empty filesystems',
          bn: 'এটি সি লাইব্রেরি ডিপেনডেন্সি নিষ্ক্রিয় করে সম্পূর্ণ ১০০% স্ট্যাটিক বাইনারি তৈরি করে যা glibc ছাড়াই ফাঁকা সিস্টেমে চলে',
        },
        {
          en: 'It converts the source code into Python scripts',
          bn: 'এটি সোর্স কোডকে পাইথন স্ক্রিপ্টে রূপান্তর করে',
        },
        {
          en: 'It speeds up network download speeds by 50 percent',
          bn: 'এটি নেটওয়ার্ক ডাউনলোড গতি ৫০ শতাংশ বৃদ্ধি করে',
        },
        {
          en: 'It automatically encrypts the binary with AES-256',
          bn: 'এটি এইএস-২৫৬ দিয়ে বাইনারিকে স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করে',
        },
      ],
      answer: 0,
      hint: { en: 'CGO_ENABLED=0 guarantees pure static compilation.', bn: 'CGO_ENABLED=0 বিশুদ্ধ স্ট্যাটিক কম্পাইলেশন নিশ্চিত করে।' },
      explanation: {
        en: 'Setting CGO_ENABLED=0 ensures the Go compiler links everything statically, allowing the binary to run on minimal scratch images.',
        bn: 'CGO_ENABLED=0 নিশ্চিত করে যে সবকিছু স্ট্যাটিকালি লিংক হবে, ফলে বাইনারিটি ফাঁকা স্ক্র্যাচ ইমেজে কোনো লাইব্রেরি ছাড়াই চলতে পারে।',
      },
    },
    {
      id: 'go-rel-ex-2',
      kind: 'mcq',
      topic: 'release-artifacts-calc',
      question: {
        en: 'In our code simulation, what was the combined artifact size across the 3 compiled platforms (Linux 15 MB, macOS 16 MB, Windows 17 MB)?',
        bn: 'আমাদের কোড সিমুলেশনে ৩টি কম্পাইল করা প্ল্যাটফর্মে (লিনাক্স ১৫ মেগাবাইট, ম্যাকওএস ১৬ মেগাবাইট, উইন্ডোজ ১৭ মেগাবাইট) সম্মিলিত ফাইলের আকার কত ছিল?',
      },
      options: [
        { en: 'Combined artifact size: 48 MB across 3 platforms', bn: '৩টি প্ল্যাটফর্মে সম্মিলিত ফাইলের আকার: ৪৮ মেগাবাইট' },
        { en: 'Combined artifact size: 100 MB across 5 platforms', bn: '৫টি প্ল্যাটফর্মে সম্মিলিত ফাইলের আকার: ১০০ মেগাবাইট' },
        { en: 'Combined artifact size: 20 MB across 1 platform', bn: '১টি প্ল্যাটফর্মে সম্মিলিত ফাইলের আকার: ২০ মেগাবাইট' },
        { en: 'Combined artifact size: 0 MB across 0 platforms', bn: '০টি প্ল্যাটফর্মে সম্মিলিত ফাইলের আকার: ০ মেগাবাইট' },
      ],
      answer: 0,
      hint: { en: '15 + 16 + 17 = 48 MB.', bn: '১৫ + ১৬ + ১৭ = ৪৮ মেগাবাইট।' },
      explanation: {
        en: 'Summing 15 MB (Linux), 16 MB (macOS), and 17 MB (Windows) yields exactly 48 MB.',
        bn: '১৫ মেগাবাইট (লিনাক্স), ১৬ মেগাবাইট (ম্যাকওএস) এবং ১৭ মেগাবাইট (উইন্ডোজ) যোগ করলে ঠিক ৪৮ মেগাবাইট হয়।',
      },
    },
    {
      id: 'go-rel-ex-3',
      kind: 'mcq',
      topic: 'ldflags-strip-purpose',
      question: {
        en: 'What is the purpose of passing -ldflags="-s -w" during go build?',
        bn: 'go build এর সময় -ldflags="-s -w" পাস করার উদ্দেশ্য কী?',
      },
      options: [
        {
          en: 'It strips symbol tables (-s) and DWARF debugging information (-w), reducing binary size significantly',
          bn: 'এটি সিম্বল টেবিল (-s) এবং DWARF ডিবাগিং তথ্য (-w) মুছে ফেলে বাইনারির আকার উল্লেখযোগ্যভাবে কমিয়ে দেয়',
        },
        {
          en: 'It forces the binary to run in 16-bit real mode',
          bn: 'এটি বাইনারিকে ১৬-বিট রিয়েল মোডে চলতে বাধ্য করে',
        },
        {
          en: 'It deletes all unit tests in the project',
          bn: 'এটি প্রজেক্টের সমস্ত ইউনিট টেস্ট মুছে ফেলে',
        },
        {
          en: 'It encrypts the source code to hide it from developers',
          bn: 'এটি ডেভেলপারদের কাছ থেকে সোর্স কোড লুকিয়ে রাখতে তা এনক্রিপ্ট করে',
        },
      ],
      answer: 0,
      hint: { en: '-s and -w strip debug info to make smaller binaries.', bn: '-s এবং -w ডিবাগ তথ্য সরিয়ে বাইনারি সাইজ ছোট করে।' },
      explanation: {
        en: 'Stripping debug information cuts binary size by 30-40% without affecting runtime execution speed.',
        bn: 'ডিবাগ তথ্য মুছে ফেললে রানটাইম গতি অক্ষুণ্ণ রেখেই বাইনারির আকার ৩০-৪০% পর্যন্ত ছোট হয়ে যায়।',
      },
    },
    {
      id: 'go-rel-ex-4',
      kind: 'predict',
      topic: 'environment-variable-os',
      question: {
        en: 'Which environment variable specifies the target operating system (e.g. linux, darwin, windows) when cross-compiling Go binaries?',
        bn: 'গো বাইনারি ক্রস-কম্পাইল করার সময় কোন এনভায়রনমেন্ট ভেরিয়েবলটি টার্গেট অপারেটিং সিস্টেম (যেমন linux, darwin, windows) নির্ধারণ করে?',
      },
      answer: 'GOOS',
      accept: ['GOOS'],
      hint: { en: '4 capital letters: GO + OS.', bn: '৪টি বড় হাতের অক্ষর: GO + OS।' },
      explanation: {
        en: 'GOOS sets the target operating system for compilation (e.g. GOOS=linux).',
        bn: 'GOOS ভেরিয়েবলটি কম্পাইলেশনের টার্গেট অপারেটিং সিস্টেম নির্ধারণ করে (যেমন GOOS=linux)।',
      },
    },
  ],
  quiz: {
    id: 'gopher-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'go-rel-q1',
        kind: 'mcq',
        topic: 'scratch-container-advantage',
        question: {
          en: 'What is the main security advantage of deploying a static Go binary into an empty FROM scratch Docker container?',
          bn: 'একটি ফাঁকা FROM scratch ডকার কন্টেইনারে স্ট্যাটিক গো বাইনারি ডিপ্লয় করার মূল নিরাপত্তা সুবিধা কী?',
        },
        options: [
          {
            en: 'There is no operating system shell, curl, or package manager available for attackers to exploit inside the container',
            bn: 'কন্টেইনারের ভেতরে কোনো অপারেটিং সিস্টেম শেল, কার্ল বা প্যাকেজ ম্যানেজার না থাকায় আক্রমণকারীদের অপব্যবহার করার সুযোগ থাকে না',
          },
          {
            en: 'The container cannot communicate over the internet',
            bn: 'কন্টেইনারটি ইন্টারনেটের মাধ্যমে যোগাযোগ করতে পারে না',
          },
          {
            en: 'The Linux kernel automatically increases CPU speed to 5 GHz',
            bn: 'লিনাক্স কার্নেল স্বয়ংক্রিয়ভাবে সিপিইউ গতি ৫ গিগাহার্টজে বাড়িয়ে দেয়',
          },
          {
            en: 'It deletes all user passwords from the host operating system',
            bn: 'এটি হোস্ট অপারেটিং সিস্টেম থেকে সমস্ত ব্যবহারকারী পাসওয়ার্ড মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: { en: 'scratch has no shell or attack tools.', bn: 'scratch ইমেজে কোনো শেল বা আক্রমণ টুল থাকে না।' },
        explanation: {
          en: 'A scratch image contains only the binary, minimizing attack surface to almost zero.',
          bn: 'স্ক্র্যাচ ইমেজে কেবল বাইনারিটি থাকে, ফলে আক্রমণকারীদের জন্য কোনো শেল বা ঝুঁকিপূর্ণ টুল বিদ্যমান থাকে না।',
        },
      },
      {
        id: 'go-rel-q2',
        kind: 'mcq',
        topic: 'linux-binary-size',
        question: {
          en: 'In our code walkthrough, what was the compiled binary size of the linux/amd64 target?',
          bn: 'আমাদের কোড আলোচনায় linux/amd64 টার্গেটের কম্পাইল করা বাইনারি সাইজ কত ছিল?',
        },
        options: [
          { en: '15 MB', bn: '১৫ মেগাবাইট' },
          { en: '100 MB', bn: '১০০ মেগাবাইট' },
          { en: '1 MB', bn: '১ মেগাবাইট' },
          { en: '500 MB', bn: '৫০০ মেগাবাইট' },
        ],
        answer: 0,
        hint: { en: 'Linux binary size was 15 MB.', bn: 'লিনাক্স বাইনারি সাইজ ছিল ১৫ মেগাবাইট।' },
        explanation: {
          en: 'The simulation explicitly initialized the linux/amd64 target with SizeMB: 15.',
          bn: 'সিমুলেশনটিতে স্পষ্টভাবেই linux/amd64 টার্গেটের SizeMB: 15 নির্ধারণ করা হয়েছিল।',
        },
      },
      {
        id: 'go-rel-q3',
        kind: 'mcq',
        topic: 'checksum-file-name',
        question: {
          en: 'Which file in a Go project cryptographically records the expected SHA-256 cryptographic hashes of all dependencies?',
          bn: 'গো প্রজেক্টের কোন ফাইলটি সমস্ত ডিপেনডেন্সির প্রত্যাশিত এসএইচএ-২৫৬ ক্রিপ্টোগ্রাফিক হ্যাশ সংরক্ষণ করে?',
        },
        options: [
          { en: 'go.sum', bn: 'go.sum' },
          { en: 'go.mod', bn: 'go.mod' },
          { en: 'package-lock.json', bn: 'package-lock.json' },
          { en: 'Cargo.lock', bn: 'Cargo.lock' },
        ],
        answer: 0,
        hint: { en: 'go.sum stores the dependency checksums.', bn: 'go.sum ডিপেনডেন্সির চেকসাম সংরক্ষণ করে।' },
        explanation: {
          en: 'go.sum contains the expected cryptographic checksums of each dependency to verify integrity.',
          bn: 'go.sum প্রতিটি ডিপেনডেন্সির সঠিক ক্রিপ্টোগ্রাফিক চেকসাম ধারণ করে অখণ্ডতা নিশ্চিত করে।',
        },
      },
      {
        id: 'go-rel-q4',
        kind: 'predict',
        topic: 'environment-variable-arch',
        question: {
          en: 'Which environment variable specifies the target CPU architecture (e.g. amd64, arm64) during Go cross-compilation?',
          bn: 'গো ক্রস-কম্পাইলেশনের সময় টার্গেট সিপিইউ আর্কিটেকচার (যেমন amd64, arm64) কোন এনভায়রনমেন্ট ভেরিয়েবল দ্বারা নির্ধারিত হয়?',
        },
        answer: 'GOARCH',
        accept: ['GOARCH'],
        hint: { en: '6 capital letters: GO + ARCH.', bn: '৬টি বড় হাতের অক্ষর: GO + ARCH।' },
        explanation: {
          en: 'GOARCH specifies the target CPU architecture for compilation (e.g. GOARCH=amd64).',
          bn: 'GOARCH ভেরিয়েবলটি কম্পাইলেশনের জন্য টার্গেট সিপিইউ আর্কিটেকচার নির্ধারণ করে (যেমন GOARCH=amd64)।',
        },
      },
    ],
  },
};
