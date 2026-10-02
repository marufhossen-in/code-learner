import type { Lesson } from '../../../lib/types';

export const MapsAndTheRangeLesson: Lesson = {
  slug: 'maps-and-the-range',
  tech: 'lang-go',
  title: {
    en: 'Maps and Range — Hash Tables, Comma-OK Idiom, and Iteration',
    bn: 'ম্যাপ ও রেঞ্জ — হ্যাশ টেবিল, Comma-OK ইডিয়ম ও ইটারেশন',
  },
  summary: {
    en: 'Master Go hash maps and range iteration: initialize maps with make, safely verify key existence using the comma-ok idiom (val, ok := m[k]), delete entries, understand reference semantics, and iterate collections idiomatically with for...range.',
    bn: 'গো হ্যাশ ম্যাপ ও range ইটারেশন আয়ত্ত করুন: make দিয়ে ম্যাপ তৈরি, comma-ok ইডিয়ম (val, ok := m[k]) দিয়ে নিরাপদে কী উপস্থিতি যাচাই, উপাদান অপসারণ, রেফারেন্স সিম্যান্টিকস এবং for...range দিয়ে আদর্শ ইটারেশন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Unordered hash maps and the comma-ok lookup pattern', bn: 'WHAT — ক্রমহীন হ্যাশ ম্যাপ ও comma-ok লুকআপ প্যাটার্ন' },
    },
    {
      type: 'para',
      text: {
        en: 'When your Go application requires fast key-based lookups, hash maps provide average O(1) retrieval across large datasets. In Go, maps are unordered reference types constructed using make(map[KeyType]ValueType) or map literals. Accessing a nonexistent key returns the type zero value without throwing an exception. Go provides the canonical comma-ok idiom: checking val, ok := m[key] lets you distinguish between a missing key and a present key storing zero. Iterating with for k, v := range m traverses entries in randomized order to prevent order dependency bugs.',
        bn: 'যখন আপনার গো অ্যাপ্লিকেশনে দ্রুত কী-ভিত্তিক ডেটা খোঁজার প্রয়োজন হয়, তখন হ্যাশ ম্যাপ বিশাল ডেটাসেটেও গড়ে O(1) সময়ে ডেটা খুঁজে দেয়। গো-তে ম্যাপ হলো ক্রমহীন রেফারেন্স টাইপ যা make(map[KeyType]ValueType) বা ম্যাপ লিটারেল দিয়ে তৈরি করা হয়। কোনো অনুপস্থিত কী পড়তে গেলে এক্সেপশন না দিয়ে গো ডিফল্ট জিরো মান ফেরত দেয়। কোনো কী অনুপস্থিত নাকি তার মান সত্যিই শূন্য তা নির্ভুলভাবে আলাদা করতে গো-এর বহুল প্রচলিত comma-ok ইডিয়ম (val, ok := m[key]) ব্যবহার করা হয়। for k, v := range m দিয়ে ইটারেশন করার সময় গো রানটাইম দৈবচয়ন ভিত্তিতে ক্রম পরিবর্তন করে যাতে প্রোগ্রামাররা ভুলবশত নির্দিষ্ট অর্ডারের ওপর নির্ভরশীল না হন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Map key lookup with the comma-ok presence verification', bn: 'comma-ok উপস্থিতি যাচাইসহ ম্যাপ কী লুকআপ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go map comma-ok lookup diagram">
<rect x="30" y="30" width="220" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="140" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">HASH MAP (hmap)</text>
<text x="45" y="85" font-family="monospace" font-size="11" fill="currentColor">"us-east"    → 24 nodes</text>
<text x="45" y="115" font-family="monospace" font-size="11" fill="currentColor">"eu-central" → 12 nodes</text>
<text x="45" y="145" font-family="monospace" font-size="11" fill="currentColor">"ap-south"   → 8 nodes</text>

<line x1="250" y1="85" x2="360" y2="60" stroke="#16a34a" stroke-width="2"/>
<polygon points="360,55 375,60 360,65" fill="#16a34a"/>

<rect x="375" y="30" width="235" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="492" y="52" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#166534">v, ok := m["us-east"]</text>
<text x="492" y="72" text-anchor="middle" font-size="11" fill="#166534">v = 24, ok = true ✓</text>

<line x1="250" y1="130" x2="360" y2="150" stroke="#dc2626" stroke-width="2"/>
<polygon points="360,145 375,150 360,155" fill="#dc2626"/>

<rect x="375" y="125" width="235" height="60" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="492" y="147" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#991b1b">v, ok := m["us-west"]</text>
<text x="492" y="167" text-anchor="middle" font-size="11" fill="#991b1b">v = 0 (zero val), ok = false ✗</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Checking ok avoids mistaking zero values for genuine present keys</text>
</svg>`,
      caption: {
        en: 'The comma-ok idiom inspects map keys: looking up an existing cluster returns value 24 and ok true; looking up a deleted key returns zero value 0 and ok false.',
        bn: 'comma-ok ইডিয়ম ম্যাপের কী পরীক্ষা করে: বিদ্যমান ক্লাস্টার খুঁজলে মান ২৪ ও ok true পাওয়া যায়; আর মুছে ফেলা কী খুঁজলে জিরো মান ০ এবং ok false পাওয়া যায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Hash map',
          def: {
            en: 'An unordered key-value collection providing average O(1) time complexity for insertions, lookups, and deletions.',
            bn: 'একটি ক্রমহীন কী-ভ্যালু সংগ্রহ যা গড়ে O(1) সময়ে উপাদান যোগ, খোঁজা এবং মুছে ফেলার সুবিধা দেয়।',
          },
        },
        {
          term: 'Comma-ok idiom',
          def: {
            en: 'The standard Go pattern (val, ok := m[k]) that returns a boolean ok indicating whether a key was genuinely present in the map.',
            bn: 'গো-এর আদর্শ প্যাটার্ন (val, ok := m[k]) যা একটি বুলিয়ান ok ফেরত দিয়ে নিশ্চিত করে যে কী-টি সত্যি ম্যাপে উপস্থিত ছিল কিনা।',
          },
        },
        {
          term: 'range loop',
          def: {
            en: 'A Go control-flow construct that iterates sequentially over slices or in randomized order over maps, yielding index/key and value pairs.',
            bn: 'গো-এর একটি কন্ট্রোল-ফ্লো কাঠামো যা স্লাইসের ওপর ধারাবাহিকভাবে এবং ম্যাপের ওপর দৈবচয়ন ক্রমে ইটারেশন চালিয়ে কী/ইনডেক্স ও ভ্যালু প্রদান করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Safe lookups and zero-copy reference passing', bn: 'কেন — নিরাপদ লুকআপ ও জিরো-কপি রেফারেন্স পাসিং' },
    },
    {
      type: 'list',
      items: [
        { en: 'Safe zero-value reads: reading missing keys never causes null pointer crashes, and comma-ok distinguishes absent keys from zero values.', bn: 'নিরাপদ জিরো-ভ্যালু রিড: অনুপস্থিত কী পড়তে গেলে নাল পয়েন্টার ক্র্যাশ হয় না এবং comma-ok অনুপস্থিত কী ও জিরো মানের পার্থক্য নিশ্চিত করে।' },
        { en: 'Zero-copy function passing: maps are reference pointers under the hood, allowing functions to mutate map contents without copying.', bn: 'কপি ছাড়া ফাংশন পাসিং: অভ্যন্তরীণভাবে ম্যাপ রেফারেন্স পয়েন্টার হওয়ায় কোনো মেমরি কপি না করেই ফাংশনে ম্যাপের মান পরিবর্তন করা যায়।' },
        { en: 'Randomized iteration prevents bugs: Go intentionally varies map iteration orders across executions so code never assumes sorted ordering.', bn: 'দৈবচয়ন ইটারেশন বাগ দূর করে: রানটাইমে ম্যাপের ক্রম পরিবর্তন হওয়ায় কোড কখনোই অনির্ভরযোগ্য সর্টেড অর্ডারের ওপর ভিত্তি করে ভুল করে না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Working with Go maps in 4 steps', bn: 'HOW — ৪টি ধাপে গো ম্যাপের ব্যবহার' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Initialize map', bn: '১. ম্যাপ তৈরি' }, text: { en: 'Use make(map[K]V) or a map literal to allocate the underlying hash table.', bn: 'make(map[K]V) বা ম্যাপ লিটারেল দিয়ে হ্যাশ টেবিল বরাদ্দ করুন।' } },
        { title: { en: '2. Store and delete', bn: '২. মান যোগ ও অপসারণ' }, text: { en: 'Assign with m[k] = v and remove keys using delete(m, k).', bn: 'm[k] = v দিয়ে মান নির্ধারণ এবং delete(m, k) দিয়ে মুছে ফেলুন।' } },
        { title: { en: '3. Verify with comma-ok', bn: '৩. comma-ok দিয়ে পরীক্ষা' }, text: { en: 'Check if val, ok := m[k]; ok before using optional values.', bn: 'ঐচ্ছিক মান ব্যবহারের আগে if val, ok := m[k]; ok দিয়ে যাচাই করুন।' } },
        { title: { en: '4. Iterate with range', bn: '৪. range দিয়ে লুপ' }, text: { en: 'Traverse entries using for k, v := range m without assuming order.', bn: 'ক্রমের অনুমান না করে for k, v := range m দিয়ে সমস্ত এন্ট্রি ব্রাউজ করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'maps_range_sim.go',
      code: `package main

import "fmt"

func main() {
	// 1. Initialize server node resource map
	serverClusters := map[string]int{
		"us-east":    24,
		"us-west":    16,
		"eu-central": 12,
	}

	// 2. Add and delete entries
	serverClusters["ap-south"] = 8
	delete(serverClusters, "us-west")

	// 3. Comma-ok idiom check for existing and non-existing keys
	valEast, okEast := serverClusters["us-east"]
	valWest, okWest := serverClusters["us-west"]

	// 4. Calculate total nodes across remaining clusters
	totalNodes := 0
	for _, count := range serverClusters {
		totalNodes += count
	}

	fmt.Println("Cluster Nodes Allocation:")
	fmt.Printf("us-east: nodes=%d, found=%t\\n", valEast, okEast)
	fmt.Printf("us-west: nodes=%d, found=%t\\n", valWest, okWest)
	fmt.Printf("Active clusters: %d, Total nodes: %d\\n", len(serverClusters), totalNodes)
}

// Output:
// Cluster Nodes Allocation:
// us-east: nodes=24, found=true
// us-west: nodes=0, found=false
// Active clusters: 3, Total nodes: 44`,
      caption: {
        en: 'The program manages server nodes: us-east has 24 nodes (found=true), deleted us-west returns 0 (found=false), leaving 3 active clusters totaling 44 nodes.',
        bn: 'প্রোগ্রামটি সার্ভার নোড পরিচালনা করে: us-east এ ২৪টি নোড রয়েছে (found=true), মুছে ফেলা us-west ০ ফেরত দেয় (found=false), ফলে ৩টি সক্রিয় ক্লাস্টারে মোট ৪৪টি নোড অবশিষ্ট থাকে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive map and comma-ok lab', bn: 'INSIDE — জীবন্ত ম্যাপ ও comma-ok ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test map operations in the browser. After deleting us-west and adding ap-south (8 nodes), 3 active clusters remain: us-east (24), eu-central (12), and ap-south (8). The comma-ok check confirms us-east is present (true) with 24 nodes and us-west is absent (false) with 0 nodes. Total nodes equal 44.',
        bn: 'ব্রাউজারে ম্যাপ অপারেশন পরীক্ষা করুন। us-west মুছে ap-south (৮ নোড) যোগ করার পর ৩টি সক্রিয় ক্লাস্টার থাকে: us-east (২৪), eu-central (১২) এবং ap-south (৮)। comma-ok নিশ্চিত করে ২৪টি নোডসহ us-east উপস্থিত (true) এবং ০টি নোডসহ us-west অনুপস্থিত (false)। মোট নোডের সংখ্যা দাঁড়ায় ৪৪।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Map lab (modify cluster counts, press Run)', bn: 'Map lab (ক্লাস্টার সংখ্যা পরিবর্তন করুন, Run)' },
      html: '<h3>Go Map Comma-OK Simulator</h3>\n<pre id="out"></pre>\n<p>Evaluates key existence and cluster sums.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const clusters = { "us-east": 24, "eu-central": 12, "ap-south": 8 };\nconst total = Object.values(clusters).reduce((a, b) => a + b, 0);\nconst count = Object.keys(clusters).length;\nconsole.log("total nodes: " + total);\ndocument.getElementById("out").textContent = "Active clusters: " + count + " · Total nodes: " + total + " · us-east present: " + ("us-east" in clusters) + " ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Map architectural rules', bn: 'ফলাফল — ম্যাপ আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Never read a map without comma-ok if zero is a valid domain value: distinguishing zero from absent prevents critical logic bugs.', bn: 'ডোমেনে শূন্য একটি বৈধ মান হলে comma-ok ছাড়া কখনোই ম্যাপ রিড করবেন না: শূন্য এবং অনুপস্থিতির পার্থক্য নিশ্চিত করা জরুরি।' },
        { en: 'Maps are not concurrency-safe: simultaneous goroutine reads and writes cause unrecoverable runtime crashes; use sync.RWMutex.', bn: 'ম্যাপ কনকারেন্সি-নিরাপদ নয়: একাধিক গোরুটিন একসাথে ম্যাপে রিড ও রাইট করলে প্রোগ্রাম ক্র্যাশ করে; এক্ষেত্রে sync.RWMutex ব্যবহার করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common map mistakes', bn: 'ডিবাগ — ম্যাপ ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Assignment to entry in nil map panic', bn: 'nil ম্যাপে অ্যাসাইন করার মারাত্মক প্যানিক' },
      text: {
        en: 'Declaring var m map[string]int creates a nil map. While reading from a nil map safely returns 0, writing m["key"] = 1 causes an immediate fatal runtime panic! Cure: always initialize with make(map[string]int) or a map literal before writing.',
        bn: 'var m map[string]int ঘোষণা করলে একটি nil ম্যাপ তৈরি হয়। nil ম্যাপ থেকে পড়লে নিরাপদে ০ পাওয়া গেলেও m["key"] = 1 লিখতে গেলে সাথে সাথে মারাত্মক রানটাইম প্যানিক ঘটে! প্রতিকার: লেখার আগে সর্বদা make(map[string]int) দিয়ে ম্যাপ তৈরি করে নিন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Deleting from a map is safe even if key is missing', bn: 'কী না থাকলেও ম্যাপ থেকে ডিলিট করা সম্পূর্ণ নিরাপদ' },
      text: {
        en: 'Calling delete(m, "missing_key") is a safe no-op in Go: it never throws an error or panics even if the key does not exist or if the map itself is nil.',
        bn: 'delete(m, "missing_key") কল করা গো-তে সম্পূর্ণ নিরাপদ: কী না থাকলেও বা ম্যাপটি nil হলেও এটি কখনো এরর বা প্যানিক তৈরি করে না।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production map applications', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল ম্যাপের প্রয়োগ' },
    },
    {
      type: 'list',
      items: [
        { en: 'In-memory caching layers: fast in-memory key-value lookups for session stores and DNS response caches guarded by sync.RWMutex.', bn: 'ইন-মেমরি ক্যাশিং লেয়ার: সেশন স্টোর ও ডিএনএস ক্যাশের জন্য sync.RWMutex সুরক্ষিত দ্রুত কী-ভ্যালু লুকআপ।' },
        { en: 'JSON request unmarshalling: unmarshalling dynamic, schema-less HTTP payloads into map[string]any for routing gateways.', bn: 'জেসন রিকোয়েস্ট আনমার্শালিং: স্কিমাবিহীন ডায়নামিক এইচটিটিপি পেলোডকে map[string]any তে রূপান্তর করে গেটওয়ে রাউটিং করা।' },
        { en: 'Frequency histograms: counting word frequencies and API route hit counters in O(N) linear time.', bn: 'ফ্রিকোয়েন্সি কাউন্টার: রৈখিক O(N) সময়ে এপিআই রুট হিট এবং শব্দ গণনার হিসাব রাখা।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Structs and Embedding', bn: 'পরবর্তী পাঠ — স্ট্রাক্ট ও এম্বেডিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With hash maps and range iteration mastered, Lesson 4 explores custom data modeling with structs, field tags for JSON serialization, and composition via struct embedding.',
        bn: 'হ্যাশ ম্যাপ ও range ইটারেশন আয়ত্ত করার পর, পাঠ ৪ স্ট্রাক্ট দিয়ে কাস্টম ডেটা মডেলিং, জেসনের জন্য ফিল্ড ট্যাগ এবং এম্বেডিংয়ের মাধ্যমে অবজেক্ট কম্পোজিশন শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'go-map-ex-1',
      kind: 'mcq',
      topic: 'comma-ok-purpose',
      question: {
        en: 'What is the primary purpose of the boolean ok in the Go comma-ok map idiom (val, ok := m[key])?',
        bn: 'গো-এর comma-ok ম্যাপ ইডিয়মে (val, ok := m[key]) বুলিয়ান ok এর মূল উদ্দেশ্য কী?',
      },
      options: [
        {
          en: 'It indicates whether the key actually existed in the map, distinguishing absent keys from keys storing zero values',
          bn: 'এটি নির্দেশ করে যে কী-টি সত্যি ম্যাপে বিদ্যমান ছিল কিনা, যা অনুপস্থিত কী এবং শূন্য মান ধারণকারী কী-এর পার্থক্য নিশ্চিত করে',
        },
        {
          en: 'It measures the physical ping latency to the database server in milliseconds',
          bn: 'এটি ডাটাবেস সার্ভারের সাথে পিং ল্যাটেন্সি মিলিসেকেন্ডে পরিমাপ করে',
        },
        {
          en: 'It encrypts the returned value using SHA-256',
          bn: 'এটি এসএইচএ-২৫৬ ব্যবহার করে ফেরত মানটি এনক্রিপ্ট করে',
        },
        {
          en: 'It forces the operating system to delete the key from disk',
          bn: 'এটি অপারেটিং সিস্টেমকে ডিস্ক থেকে কী-টি মুছে ফেলতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: { en: 'ok is true if key is present, false if key is absent.', bn: 'কী বিদ্যমান থাকলে ok true হয় এবং অনুপস্থিত থাকলে false হয়।' },
      explanation: {
        en: 'Because missing keys return zero values, ok allows developers to know for sure if a key was present or missing.',
        bn: 'অনুপস্থিত কী ডিফল্ট শূন্য মান ফেরত দেয় বলে কী-টি সত্যি ছিল নাকি অনুপস্থিত তা নিশ্চিতভাবে জানতে ok সাহায্য করে।',
      },
    },
    {
      id: 'go-map-ex-2',
      kind: 'mcq',
      topic: 'cluster-nodes-calc',
      question: {
        en: 'In our code simulation, what was the total count of nodes calculated across the 3 remaining active clusters (us-east 24, eu-central 12, ap-south 8)?',
        bn: 'আমাদের কোড সিমুলেশনে ৩টি সক্রিয় ক্লাস্টারে (us-east ২৪, eu-central ১২, ap-south ৮) মোট কতগুলো নোড হিসাব করা হয়েছিল?',
      },
      options: [
        { en: 'Total nodes = 44 across 3 active clusters', bn: '৩টি সক্রিয় ক্লাস্টারে মোট নোড = ৪৪' },
        { en: 'Total nodes = 100 across 4 clusters', bn: '৪টি ক্লাস্টারে মোট নোড = ১০০' },
        { en: 'Total nodes = 20 across 2 clusters', bn: '২টি ক্লাস্টারে মোট নোড = ২০' },
        { en: 'Total nodes = 0 across 0 clusters', bn: '০টি ক্লাস্টারে মোট নোড = ০' },
      ],
      answer: 0,
      hint: { en: '24 + 12 + 8 = 44 nodes.', bn: '২৪ + ১২ + ৮ = ৪৪টি নোড।' },
      explanation: {
        en: 'Adding 24 (us-east) + 12 (eu-central) + 8 (ap-south) yields a total of 44 nodes across 3 active clusters.',
        bn: '২৪ (us-east) + ১২ (eu-central) + ৮ (ap-south) যোগ করলে ৩টি সক্রিয় ক্লাস্টারে মোট ৪৪টি নোড হয়।',
      },
    },
    {
      id: 'go-map-ex-3',
      kind: 'mcq',
      topic: 'delete-builtin',
      question: {
        en: 'Which Go built-in function is used to remove a key-value entry from a hash map?',
        bn: 'হ্যাশ ম্যাপ থেকে কোনো কী-ভ্যালু এন্ট্রি অপসারণ করতে কোন গো বিল্ট-ইন ফাংশন ব্যবহৃত হয়?',
      },
      options: [
        { en: 'delete(m, key)', bn: 'delete(m, key)' },
        { en: 'remove(m, key)', bn: 'remove(m, key)' },
        { en: 'm.drop(key)', bn: 'm.drop(key)' },
        { en: 'm.clear(key)', bn: 'm.clear(key)' },
      ],
      answer: 0,
      hint: { en: 'The function name is delete.', bn: 'ফাংশনটির নাম হলো delete।' },
      explanation: {
        en: 'delete(map, key) is the built-in function to remove an entry from a map.',
        bn: 'delete(map, key) হলো ম্যাপ থেকে কোনো এন্ট্রি মুছে ফেলার বিল্ট-ইন ফাংশন।',
      },
    },
    {
      id: 'go-map-ex-4',
      kind: 'predict',
      topic: 'range-keyword-recite',
      question: {
        en: 'Which Go keyword is used with a for loop to iterate over elements in a slice or key-value pairs in a map?',
        bn: 'স্লাইসের উপাদান বা ম্যাপের কী-ভ্যালু জোড়ার ওপর লুপ চালাতে for লুপের সাথে কোন গো কিওয়ার্ড ব্যবহৃত হয়?',
      },
      answer: 'range',
      accept: ['range'],
      hint: { en: 'A 5-letter keyword starting with "r".', bn: '"r" দিয়ে শুরু হওয়া ৫ অক্ষরের একটি কিওয়ার্ড।' },
      explanation: {
        en: 'The range keyword iterates over collections, returning index/key and value pairs.',
        bn: 'range কিওয়ার্ড সংগ্রহের ওপর ইটারেশন চালিয়ে ইনডেক্স/কী এবং ভ্যালু জোড়া ফেরত দেয়।',
      },
    },
  ],
  quiz: {
    id: 'maps-range-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'go-map-q1',
        kind: 'mcq',
        topic: 'nil-map-write',
        question: {
          en: 'What occurs at runtime if a program attempts to write an entry into an uninitialized nil map (var m map[string]int; m["key"] = 1)?',
          bn: 'একটি অপ্রস্তুত nil ম্যাপে ডেটা লিখতে গেলে (var m map[string]int; m["key"] = 1) রানটাইমে কী ঘটে?',
        },
        options: [
          {
            en: 'The Go runtime throws an immediate fatal panic: assignment to entry in nil map',
            bn: 'গো রানটাইম সাথে সাথে একটি মারাত্মক প্যানিক সৃষ্টি করে: assignment to entry in nil map',
          },
          {
            en: 'The compiler silently ignores the write and continues execution',
            bn: 'কম্পাইলার কোনো সতর্কতা ছাড়াই লেখাটি উপেক্ষা করে চলতে থাকে',
          },
          {
            en: 'The variable is automatically converted into an integer array',
            bn: 'ভেরিয়েবলটি স্বয়ংক্রিয়ভাবে একটি ইন্টিজার অ্যারেতে রূপান্তরিত হয়',
          },
          {
            en: 'The system restarts the operating system network stack',
            bn: 'সিস্টেমটি অপারেটিং সিস্টেমের নেটওয়ার্ক স্ট্যাক রিস্টার্ট করে',
          },
        ],
        answer: 0,
        hint: { en: 'Writing to a nil map panics; it must be initialized with make.', bn: 'nil ম্যাপে লিখলে প্যানিক হয়; এটি make দিয়ে ইনিশিয়ালাইজ করতে হয়।' },
        explanation: {
          en: 'A nil map cannot hold keys; attempting to write to a nil map triggers a runtime panic.',
          bn: 'একটি nil ম্যাপ কোনো কী ধারণ করতে পারে না; এতে লিখতে গেলে রানটাইম প্যানিক ঘটে।',
        },
      },
      {
        id: 'go-map-q2',
        kind: 'mcq',
        topic: 'east-nodes-calc',
        question: {
          en: 'In our code walkthrough, how many nodes were allocated to the us-east cluster?',
          bn: 'আমাদের কোড আলোচনায় us-east ক্লাস্টারে কতগুলো নোড বরাদ্দ করা হয়েছিল?',
        },
        options: [
          { en: 'Exactly 24 nodes', bn: 'ঠিক ২৪টি নোড' },
          { en: 'Exactly 100 nodes', bn: 'ঠিক ১০০টি নোড' },
          { en: 'Only 1 node', bn: 'কেবল ১টি নোড' },
          { en: 'Zero nodes', bn: '০টি নোড' },
        ],
        answer: 0,
        hint: { en: '"us-east": 24.', bn: '"us-east": ২৪।' },
        explanation: {
          en: 'The us-east cluster was initialized with exactly 24 nodes.',
          bn: 'us-east ক্লাস্টারটিতে স্পষ্টভাবেই ঠিক ২৪টি নোড বরাদ্দ করা হয়েছিল।',
        },
      },
      {
        id: 'go-map-q3',
        kind: 'mcq',
        topic: 'map-iteration-order',
        question: {
          en: 'Why does Go intentionally randomize the order of key-value pairs when iterating over a map with range?',
          bn: 'range দিয়ে ম্যাপের ওপর ইটারেশন করার সময় গো কেন ইচ্ছাকৃতভাবে কী-ভ্যালু জোড়ার ক্রম দৈবচয়ন বা এলোমেলো করে দেয়?',
        },
        options: [
          {
            en: 'To prevent programs from accidentally relying on internal hash table implementation details or ordering assumptions',
            bn: 'যাতে প্রোগ্রামাররা দুর্ঘটনাবশত অভ্যন্তরীণ হ্যাশ টেবিলের নির্দিষ্ট ক্রমের ওপর নির্ভর করে ভুল কোড না লেখেন',
          },
          {
            en: 'Because random numbers generate faster than sequential numbers on x86 CPUs',
            bn: 'কারণ x86 সিপিইউতে র্যান্ডম সংখ্যা ক্রমানুসারিক সংখ্যার চেয়ে দ্রুত তৈরি হয়',
          },
          {
            en: 'To encrypt database data against unauthorized network sniffing',
            bn: 'অননুমোদিত নেটওয়ার্ক ট্র্যাকিং থেকে ডাটাবেস ডেটা এনক্রিপ্ট করার জন্য',
          },
          {
            en: 'To reduce RAM consumption by 50 percent',
            bn: 'র‍্যামের ব্যবহার ৫০ শতাংশ কমিয়ে আনার জন্য',
          },
        ],
        answer: 0,
        hint: { en: 'Go randomizes iteration order to enforce that maps are unordered collections.', bn: 'ম্যাপ যে একটি ক্রমহীন সংগ্রহ তা নিশ্চিত করতেই গো এই দৈবচয়ন পদ্ধতি ব্যবহার করে।' },
        explanation: {
          en: 'By randomizing iteration order, Go ensures developers sort keys explicitly if a consistent order is needed.',
          bn: 'ইটারেশনের ক্রম এলোমেলো করে গো নিশ্চিত করে যে সুনির্দিষ্ট ক্রমের প্রয়োজন হলে ডেভেলপার নিজে সর্ট করবেন।',
        },
      },
      {
        id: 'go-map-q4',
        kind: 'predict',
        topic: 'map-make-builtin',
        question: {
          en: 'Which Go built-in function is used to initialize an empty hash map (e.g. m := ...(map[string]int))?',
          bn: 'একটি খালি হ্যাশ ম্যাপ তৈরি করতে কোন গো বিল্ট-ইন ফাংশন ব্যবহৃত হয় (যেমন m := ...(map[string]int))?',
        },
        answer: 'make',
        accept: ['make', 'make()'],
        hint: { en: 'The same 4-letter built-in used for slices and channels.', bn: 'স্লাইস ও চ্যানেলের জন্য ব্যবহৃত ৪ অক্ষরের একই বিল্ট-ইন ফাংশন।' },
        explanation: {
          en: 'The make() built-in allocates and initializes maps, slices, and channels.',
          bn: 'make() বিল্ট-ইন ফাংশন ম্যাপ, স্লাইস এবং চ্যানেল তৈরি ও বরাদ্দ করতে ব্যবহৃত হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'structs-and-the-embed',
    title: { en: 'Structs and Embedding', bn: 'স্ট্রাক্ট ও এম্বেডিং' },
  },
};
