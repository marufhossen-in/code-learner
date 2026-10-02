import type { Lesson } from '../../../lib/types';

export const MethodsAndTheReceiverLesson: Lesson = {
  slug: 'methods-and-the-receiver',
  tech: 'lang-go',
  title: {
    en: 'Methods and Receivers — Value vs Pointer Receivers and Implicit Interfaces',
    bn: 'মেথড ও রিসিভার — ভ্যালু বনাম point-রিসিভার ও অন্তর্নিহিত ইন্টারফেস',
  },
  summary: {
    en: 'Master Go methods, receiver semantics, and implicit interfaces: distinguish value receivers (T) from mutating pointer receivers (*T), eliminate copying overhead, and satisfy interfaces without explicit implements declarations.',
    bn: 'গো মেথড, রিসিভার সিম্যান্টিকস এবং অন্তর্নিহিত ইন্টারফেস আয়ত্ত করুন: ভ্যালু রিসিভার (T) ও মিউটেটিং পয়েন্টার রিসিভারের (*T) পার্থক্য, মেমরি কপি খরচ দূরীকরণ এবং implements কিওয়ার্ড ছাড়াই ইন্টারফেস বাস্তবায়ন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Methods on types and receiver semantics', bn: 'WHAT — টাইপের ওপর মেথড ও রিসিভারের আচরণ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you attach behaviors to custom data types in Go, methods bridge raw state with domain operations. Instead of defining methods inside classes, Go declares functions with an explicit receiver parameter placed before the function name. A critical architectural decision you must make for every method is choosing between a value receiver (T) and a pointer receiver (*T). While value receivers operate on an isolated copy, pointer receivers allow in-place mutations and eliminate copying overhead for large structs. Furthermore, Go interfaces are satisfied implicitly: any type implementing the required method signatures automatically satisfies the interface contract.',
        bn: 'যখন আপনি গো-তে কাস্টম ডেটা টাইপের সাথে নির্দিষ্ট কার্যপ্রণালী যুক্ত করেন, তখন মেথড ডেটা ও অপারেশনের মধ্যে সংযোগ স্থাপন করে। ক্লাসের ভেতরে মেথড লেখার পরিবর্তে গো ফাংশনের নামের আগে একটি স্পষ্ট রিসিভার প্যারামিটার ঘোষণা করে। প্রতিটি মেথড লেখার সময় আপনাকে একটি অত্যন্ত গুরুত্বপূর্ণ সিদ্ধান্ত নিতে হয়: ভ্যালু রিসিভার (T) নাকি পয়েন্টার রিসিভার (*T)। ভ্যালু রিসিভার একটি পৃথক কপির ওপর কাজ করলেও পয়েন্টার রিসিভার মেমরিতে থাকা মূল ডেটা পরিবর্তন করতে পারে এবং বড় স্ট্রাক্টের ক্ষেত্রে কপি করার খরচ বাঁচায়। অধিকন্তু গো-এর ইন্টারফেসগুলো অন্তর্নিহিতভাবে সন্তুষ্ট হয়: কোনো টাইপ ইন্টারফেসে উল্লেখিত মেথডগুলো বাস্তবায়ন করলেই তা স্বয়ংক্রিয়ভাবে সেই ইন্টারফেসের শর্ত পূরণ করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Value receiver (isolated copy) vs Pointer receiver (in-place mutation)', bn: 'ভ্যালু রিসিভার (পৃথক কপি) বনাম পয়েন্টার রিসিভার (সরাসরি মেমরি পরিবর্তন)' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go value vs pointer receiver diagram">
<rect x="30" y="30" width="260" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="160" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">VALUE RECEIVER (u User)</text>
<text x="45" y="85" font-family="monospace" font-size="10" fill="currentColor">func (u User) GetName()</text>
<text x="45" y="110" font-size="10" fill="#2563eb">→ Copies entire 64-byte struct</text>
<text x="45" y="130" font-size="10" fill="#2563eb">→ Mutations affect ONLY copy</text>
<text x="45" y="150" font-size="10" fill="#16a34a">✓ Safe read-only inspection</text>

<rect x="350" y="30" width="260" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">POINTER RECEIVER (u *User)</text>
<text x="365" y="85" font-family="monospace" font-size="10" fill="currentColor">func (u *User) SetEmail()</text>
<text x="365" y="110" font-size="10" fill="#166534">→ Passes 8-byte pointer only</text>
<text x="365" y="130" font-size="10" fill="#166534">→ Mutations update original struct</text>
<text x="365" y="150" font-size="10" fill="#166534">✓ In-place mutation &amp; zero copy</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Use pointer receivers whenever a method modifies state or structs are large</text>
</svg>`,
      caption: {
        en: 'A value receiver creates a copy of the struct, preserving caller immutability. A pointer receiver passes an 8-byte memory address, allowing in-place field updates without copying.',
        bn: 'ভ্যালু রিসিভার স্ট্রাক্টের একটি কপি তৈরি করে কলারের অপরিবর্তনীয়তা রক্ষা করে। পয়েন্টার রিসিভার কেবল ৮-বাইটের মেমরি অ্যাড্রেস পাঠায়, যা কপি না করেই মূল ফিল্ড পরিবর্তনের সুবিধা দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Method receiver',
          def: {
            en: 'The parameter declared between the func keyword and the method name binding the function to a specific type.',
            bn: 'func কিওয়ার্ড এবং মেথডের নামের মাঝে ঘোষিত প্যারামিটার যা ফাংশনটিকে নির্দিষ্ট টাইপের সাথে যুক্ত করে।',
          },
        },
        {
          term: 'Pointer receiver (*T)',
          def: {
            en: 'A method receiver that accepts a memory pointer to the instance, enabling field mutations and avoiding struct copy costs.',
            bn: 'একটি মেথড রিসিভার যা ইনস্ট্যান্সের মেমরি পয়েন্টার গ্রহণ করে, ফলে ফিল্ড পরিবর্তন সম্ভব হয় এবং স্ট্রাক্ট কপি করার খরচ বাঁচে।',
          },
        },
        {
          term: 'Implicit interface',
          def: {
            en: 'Go design pattern where types satisfy an interface automatically by implementing its method signatures with no explicit declaration.',
            bn: 'গো-এর নকশা পদ্ধতি যেখানে কোনো টাইপ ইন্টারফেসের মেথডগুলো বাস্তবায়ন করলেই কোনো ঘোষণা ছাড়াই স্বয়ংক্রিয়ভাবে সেই ইন্টারফেস পূরণ করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Method ergonomics and decoupled interfaces', bn: 'কেন — মেথড সুবিধা ও সম্পর্কহীন ইন্টারফেসের প্রয়োজনীয়তা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Immutability safety: value receivers guarantee that helper inspection methods cannot accidentally mutate caller data structures.', bn: 'অপরিবর্তনীয়তার নিরাপত্তা: ভ্যালু রিসিভার নিশ্চিত করে যে সাধারণ রিড মেথড দুর্ঘটনাবশত কলারের ডেটা পরিবর্তন করতে পারবে না।' },
        { en: 'High performance state mutations: pointer receivers update internal struct fields in-place without triggering memory allocations.', bn: 'উচ্চ-গতির স্টেট পরিবর্তন: পয়েন্টার রিসিভার কোনো বাড়তি মেমরি বরাদ্দ ছাড়াই মূল স্ট্রাক্ট ফিল্ডে সরাসরি আপডেট পরিচালনা করে।' },
        { en: 'Decoupled package integration: implicit interfaces allow your packages to satisfy third-party contracts without importing vendor dependencies.', bn: 'স্বাধীন প্যাকেজ সংযোগ: অন্তর্নিহিত ইন্টারফেস আপনার প্যাকেজকে কোনো থার্ড-পার্টি লাইব্রেরি ইমপোর্ট না করেই তাদের চুক্তি পূরণের সুবিধা দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Writing methods and interfaces in 4 steps', bn: 'HOW — ৪টি ধাপে মেথড ও ইন্টারফেস তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Declare receiver', bn: '১. রিসিভার ঘোষণা' }, text: { en: 'Place (r Type) before the method name for read-only methods.', bn: 'রিড-অনলি মেথডের জন্য নামের পূর্বে (r Type) লিখুন।' } },
        { title: { en: '2. Declare pointer receiver', bn: '২. পয়েন্টার রিসিভার ঘোষণা' }, text: { en: 'Place (r *Type) before the method name when modifying fields.', bn: 'ফিল্ড পরিবর্তনের জন্য মেথড নামের পূর্বে (r *Type) লিখুন।' } },
        { title: { en: '3. Define interface contract', bn: '৩. ইন্টারফেস চুক্তি নির্ধারণ' }, text: { en: 'List method signatures inside type Name interface block.', bn: 'type Name interface ব্লকের ভেতরে মেথড সিগনেচার উল্লেখ করুন।' } },
        { title: { en: '4. Pass polymorphically', bn: '৪. বহুরূপী পাসিং' }, text: { en: 'Pass implementing struct instances into functions expecting the interface.', bn: 'ইন্টারফেস প্রত্যাশী ফাংশনে বাস্তবায়নকারী স্ট্রাক্ট ইনস্ট্যান্স পাঠান।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'method_receiver_sim.go',
      code: `package main

import "fmt"

type BankAccount struct {
	AccountID int
	Owner     string
	Balance   int
}

// 1. Value receiver: read-only inspection (copies struct)
func (a BankAccount) DisplaySummary() string {
	return fmt.Sprintf("Account %d (%s): Balance $%d", a.AccountID, a.Owner, a.Balance)
}

// 2. Pointer receiver: mutates balance in-place
func (a *BankAccount) Deposit(amount int) {
	a.Balance += amount
}

func main() {
	acc := BankAccount{
		AccountID: 101,
		Owner:     "Tariq",
		Balance:   150,
	}

	initialBalance := acc.Balance
	acc.Deposit(50)
	finalBalance := acc.Balance
	depositAmount := finalBalance - initialBalance

	fmt.Println("Bank Account Transaction:")
	fmt.Printf("Initial: $%d, Deposited: $%d, Final: $%d\\n", initialBalance, depositAmount, finalBalance)
	fmt.Println(acc.DisplaySummary())
}

// Output:
// Bank Account Transaction:
// Initial: $150, Deposited: $50, Final: $200
// Account 101 (Tariq): Balance $200`,
      caption: {
        en: 'The simulation demonstrates receiver semantics: account 101 starts with 150 dollars, receives a 50 dollar deposit via pointer receiver, reaching a final balance of 200 dollars.',
        bn: 'সিমুলেশনটি রিসিভারের কার্যপ্রণালী প্রদর্শন করে: ১০১ নম্বর অ্যাকাউন্টে ১৫০ ডলার ছিল, পয়েন্টার রিসিভার দিয়ে ৫০ ডলার জমা হওয়ায় চূড়ান্ত ব্যালেন্স ২০০ ডলারে পৌঁছায়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive method receiver lab', bn: 'INSIDE — জীবন্ত মেথড রিসিভার ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test how pointer receivers mutate struct fields. Starting with account 101 and an initial balance of 150 dollars, calling Deposit with 50 dollars modifies the balance in-place to 200 dollars. If you change Deposit to use a value receiver, the balance would remain 150 dollars because only the copy is mutated.',
        bn: 'পয়েন্টার রিসিভার কীভাবে মেমরি পরিবর্তন করে তা পরীক্ষা করুন। ১০১ নম্বর অ্যাকাউন্টের ১৫০ ডলার প্রাথমিক ব্যালেন্স নিয়ে ৫০ ডলার Deposit করলে সরাসরি ব্যালেন্স ২০০ ডলার হয়। ভ্যালু রিসিভার ব্যবহার করলে কেবল কপি পরিবর্তিত হতো এবং মূল ব্যালেন্স ১৫০ ডলারই থেকে যেত।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Receiver lab (modify deposit, press Run)', bn: 'Receiver lab (জমার পরিমাণ পরিবর্তন করুন, Run)' },
      html: '<h3>Go Receiver Mutation Simulator</h3>\n<pre id="out"></pre>\n<p>Pointer receiver updates balance in-place.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'let balance = 150;\nconst deposit = 50;\nbalance += deposit;\nconsole.log("final balance: " + balance);\ndocument.getElementById("out").textContent = "Account: 101 · Initial: $150 · Deposit: $" + deposit + " · Final: $" + balance + " (pointer receiver mutated ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Receiver design principles', bn: 'ফলাফল — রিসিভার ডিজাইনের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Consistency across method sets: if any method on a struct requires a pointer receiver, make all methods on that struct use pointer receivers.', bn: 'মেথড সেটে সামঞ্জস্য: কোনো স্ট্রাক্টের একটি মেথডে পয়েন্টার রিসিভার লাগলে সাধারণত সব মেথডেই পয়েন্টার রিসিভার ব্যবহার করা উচিত।' },
        { en: 'Implicit interfaces enforce modularity: consumers define the interfaces they need rather than producers forcing rigid inheritance.', bn: 'অন্তর্নিহিত ইন্টারফেস মডুলারিটি নিশ্চিত করে: লাইব্রেরি প্রডিউসার নয়, বরং কনজিউমার তার প্রয়োজনীয় ইন্টারফেস নিজে সংজ্ঞায়িত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common receiver mistakes', bn: 'ডিবাগ — রিসিভার ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Silent mutation failure with value receivers', bn: 'ভ্যালু রিসিভারে স্টেট পরিবর্তন ব্যর্থ হওয়া' },
      text: {
        en: 'Writing func (a BankAccount) Deposit(amount int) { a.Balance += amount } compiles without warning, but mutates an isolated stack copy! The caller balance remains completely unchanged. Cure: change receiver to (a *BankAccount).',
        bn: 'func (a BankAccount) Deposit(amount int) { a.Balance += amount } লিখলে কোনো সতর্কবার্তা ছাড়াই কোড চলে, কিন্তু তা কেবল একটি কপির ওপর কাজ করে! কলারের মূল ব্যালেন্স অপরিবর্তিত থাকে। প্রতিকার: রিসিভারকে (a *BankAccount) এ পরিবর্তন করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Sync.Mutex must always use pointer receivers', bn: 'sync.Mutex যুক্ত স্ট্রাক্টে সর্বদা পয়েন্টার রিসিভার ব্যবহার' },
      text: {
        en: 'If a struct contains a sync.Mutex or sync.RWMutex, all methods must use pointer receivers. Copying a mutex copies its internal locking state, causing fatal deadlocks or race conditions.',
        bn: 'স্ট্রাক্টে sync.Mutex থাকলে সব মেথডে অবশ্যই পয়েন্টার রিসিভার দিতে হবে। মিউটেক্স কপি করলে তার লকিং অবস্থা কপি হয়ে মারাত্মক ডেডলক বা রেস কন্ডিশন তৈরি করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Standard library interfaces', bn: 'বাস্তব ক্ষেত্র — স্ট্যান্ডার্ড লাইব্রেরির ইন্টারফেস' },
    },
    {
      type: 'list',
      items: [
        { en: 'io.Reader and io.Writer: simple single-method interfaces underpinning all network streaming, file systems, and HTTP protocols in Go.', bn: 'io.Reader ও io.Writer: একক মেথডযুক্ত ইন্টারফেস যা গো-এর সমস্ত নেটওয়ার্ক স্ট্রিমিং ও ফাইল আই/ও এর মূল ভিত্তি।' },
        { en: 'http.Handler interface: defines ServeHTTP(ResponseWriter, *Request), allowing any custom struct to act as an HTTP web controller.', bn: 'http.Handler: ServeHTTP মেথড সংজ্ঞায়িত করে, যার ফলে যেকোনো কাস্টম স্ট্রাক্ট সরাসরি ওয়েব কন্ট্রোলার হিসেবে কাজ করতে পারে।' },
        { en: 'Standard error interface: implementing Error() string satisfies the built-in error type for seamless exception reporting.', bn: 'স্ট্যান্ডার্ড error ইন্টারফেস: Error() string মেথড বাস্তবায়ন করলেই যেকোনো কাস্টম স্ট্রাক্ট বিল্ট-ইন এরর হিসেবে কাজ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Goroutines and Channels', bn: 'পরবর্তী পাঠ — গোরুটিন ও চ্যানেল' },
    },
    {
      type: 'para',
      text: {
        en: 'With methods and implicit interfaces mastered, Lesson 6 explores Go world-famous concurrency model: launching lightweight goroutines, communicating via typed channels, and coordinating tasks safely.',
        bn: 'মেথড ও ইন্টারফেস আয়ত্ত করার পর, পাঠ ৬ গো-এর বিশ্বখ্যাত কনকারেন্সি মডেল শেখাবে: হালকা গোরুটিন চালু করা, টাইপড চ্যানেলে যোগাযোগ এবং নিরাপদে কাজ সমন্বয় করা।',
      },
    },
  ],
  exercises: [
    {
      id: 'go-mth-ex-1',
      kind: 'mcq',
      topic: 'pointer-receiver-benefit',
      question: {
        en: 'Why would a developer choose a pointer receiver (*T) instead of a value receiver (T) for a struct method?',
        bn: 'কোনো স্ট্রাক্ট মেথডের জন্য একজন ডেভেলপার ভ্যালু রিসিভারের (T) বদলে পয়েন্টার রিসিভার (*T) কেন বেছে নেবেন?',
      },
      options: [
        {
          en: 'To allow the method to mutate the original struct fields and to avoid copying large structs on each call',
          bn: 'মেথডটিকে মূল স্ট্রাক্ট ফিল্ডের মান পরিবর্তন করার সুবিধা দিতে এবং প্রতি কলে বড় স্ট্রাক্ট কপি করার খরচ এড়াতে',
        },
        {
          en: 'To automatically encrypt all data sent over the internet',
          bn: 'ইন্টারনেটে প্রেরিত সমস্ত ডেটা স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করার জন্য',
        },
        {
          en: 'Because Go does not allow value receivers on structs',
          bn: 'কারণ গো স্ট্রাক্টের ওপর ভ্যালু রিসিভার ব্যবহারের অনুমতি দেয় না',
        },
        {
          en: 'To force the compiler to convert Go code into C++ source',
          bn: 'কম্পাইলারকে গো কোড সি++ সোর্সে রূপান্তর করতে বাধ্য করার জন্য',
        },
      ],
      answer: 0,
      hint: { en: 'Pointer receivers allow in-place mutation and eliminate copying.', bn: 'পয়েন্টার রিসিভার সরাসরি মেমরিতে পরিবর্তন করতে দেয় এবং কপি করার খরচ বাঁচায়।' },
      explanation: {
        en: 'Pointer receivers (*T) pass a pointer to the existing instance, enabling state modification and eliminating struct copy overhead.',
        bn: 'পয়েন্টার রিসিভার (*T) বিদ্যমান ইনস্ট্যান্সের পয়েন্টার গ্রহণ করে, যা স্টেট পরিবর্তন সম্ভব করে এবং কপি করার ওভারহেড দূর করে।',
      },
    },
    {
      id: 'go-mth-ex-2',
      kind: 'mcq',
      topic: 'balance-mutation-calc',
      question: {
        en: 'In our code simulation, what was the initial balance of account 101 and what was its final balance after depositing 50 dollars?',
        bn: 'আমাদের কোড সিমুলেশনে ১০১ নম্বর অ্যাকাউন্টের প্রাথমিক ব্যালেন্স কত ছিল এবং ৫০ ডলার জমা করার পর চূড়ান্ত ব্যালেন্স কত হয়েছিল?',
      },
      options: [
        { en: 'Initial balance: $150 -> Final balance: $200', bn: 'প্রাথমিক ব্যালেন্স: $১৫০ -> চূড়ান্ত ব্যালেন্স: $২০০' },
        { en: 'Initial balance: $50 -> Final balance: $100', bn: 'প্রাথমিক ব্যালেন্স: $৫০ -> চূড়ান্ত ব্যালেন্স: $১০০' },
        { en: 'Initial balance: $1000 -> Final balance: $1050', bn: 'প্রাথমিক ব্যালেন্স: $১০০০ -> চূড়ান্ত ব্যালেন্স: $১০৫০' },
        { en: 'Initial balance: $0 -> Final balance: $50', bn: 'প্রাথমিক ব্যালেন্স: $০ -> চূড়ান্ত ব্যালেন্স: $৫০' },
      ],
      answer: 0,
      hint: { en: '150 + 50 = 200 dollars.', bn: '১৫০ + ৫০ = ২০০ ডলার।' },
      explanation: {
        en: 'Starting with a balance of 150, depositing 50 dollars via pointer receiver updated the balance in-place to 200 dollars.',
        bn: '১৫০ ডলার দিয়ে শুরু করে পয়েন্টার রিসিভারের মাধ্যমে ৫০ ডলার জমা করায় চূড়ান্ত ব্যালেন্স ২০০ ডলার হয়েছিল।',
      },
    },
    {
      id: 'go-mth-ex-3',
      kind: 'mcq',
      topic: 'implicit-interface-satisfaction',
      question: {
        en: 'How does a Go struct declare that it implements a specific interface like io.Reader?',
        bn: 'একটি গো স্ট্রাক্ট কীভাবে ঘোষণা করে যে এটি io.Reader এর মতো কোনো নির্দিষ্ট ইন্টারফেস বাস্তবায়ন করেছে?',
      },
      options: [
        {
          en: 'It does not use any keyword; implementing the required method signatures satisfies the interface implicitly',
          bn: 'এটি কোনো কিওয়ার্ড ব্যবহার করে না; ইন্টারফেসের প্রয়োজনীয় মেথডগুলো বাস্তবায়ন করলেই তা স্বয়ংক্রিয়ভাবে পূরণ হয়',
        },
        {
          en: 'By using the implements keyword in the struct definition',
          bn: 'স্ট্রাক্ট সংজ্ঞায় implements কিওয়ার্ড ব্যবহারের মাধ্যমে',
        },
        {
          en: 'By registering the struct in a central XML configuration file',
          bn: 'একটি কেন্দ্রীয় এক্সএমএল কনফিগারেশন ফাইলে স্ট্রাক্ট নিবন্ধন করে',
        },
        {
          en: 'By inheriting from a base abstract interface class',
          bn: 'একটি বেস অ্যাবস্ট্রাক্ট ইন্টারফেস ক্লাস থেকে ইনহেরিট করার মাধ্যমে',
        },
      ],
      answer: 0,
      hint: { en: 'Go interfaces are satisfied implicitly without keywords.', bn: 'গো ইন্টারফেস কোনো কিওয়ার্ড ছাড়াই স্বয়ংক্রিয়ভাবে পূরণ হয়।' },
      explanation: {
        en: 'There is no implements keyword in Go: types satisfy interfaces implicitly simply by providing matching method signatures.',
        bn: 'গো-তে কোনো implements কিওয়ার্ড নেই: শুধু মেথডগুলো লিখে দিলেই টাইপটি স্বয়ংক্রিয়ভাবে ইন্টারফেসের শর্ত পূরণ করে।',
      },
    },
    {
      id: 'go-mth-ex-4',
      kind: 'predict',
      topic: 'receiver-character',
      question: {
        en: 'Which punctuation symbol precedes a type name in a method receiver to indicate a pointer receiver (e.g. func (u ...User))?',
        bn: 'পয়েন্টার রিসিভার নির্দেশ করতে মেথড রিসিভারের টাইপ নামের পূর্বে কোন বিরামচিহ্নটি বসে (যেমন func (u ...User))?',
      },
      answer: '*',
      accept: ['*', 'asterisk', 'star'],
      hint: { en: 'An asterisk symbol.', bn: 'একটি অ্যাস্টেরিস্ক বা তারকা প্রতীক।' },
      explanation: {
        en: 'An asterisk (*) denotes a pointer receiver, passing a memory pointer rather than a copy.',
        bn: 'একটি অ্যাস্টেরিস্ক (*) পয়েন্টার রিসিভার নির্দেশ করে, যা কপির পরিবর্তে মেমরি পয়েন্টার পাস করে।',
      },
    },
  ],
  quiz: {
    id: 'methods-receiver-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'go-mth-q1',
        kind: 'mcq',
        topic: 'mutex-receiver-rule',
        question: {
          en: 'Why must methods on structs containing a sync.Mutex always use pointer receivers (*T)?',
          bn: 'sync.Mutex ধারণকারী কোনো স্ট্রাক্টের মেথডে কেন সর্বদা পয়েন্টার রিসিভার (*T) ব্যবহার করা আবশ্যক?',
        },
        options: [
          {
            en: 'Because copying a mutex copies its internal lock state, leading to broken synchronization and deadlocks',
            bn: 'কারণ মিউটেক্স কপি করলে তার অভ্যন্তরীণ লক অবস্থা কপি হয়ে যায়, যা ভুল সিঙ্ক্রোনাইজেশন ও ডেডলক ঘটায়',
          },
          {
            en: 'Because value receivers run on separate GPU processors',
            bn: 'কারণ ভ্যালু রিসিভার আলাদা জিপিইউ প্রসেসরে চলে',
          },
          {
            en: 'Because the Go compiler refuses to compile structs with more than 2 fields',
            bn: 'কারণ গো কম্পাইলার ২টির বেশি ফিল্ডযুক্ত স্ট্রাক্ট কম্পাইল করতে অস্বীকার করে',
          },
          {
            en: 'Because pointers consume more RAM than value copies',
            bn: 'কারণ পয়েন্টার ভ্যালু কপির চেয়ে বেশি র‍্যাম খরচ করে',
          },
        ],
        answer: 0,
        hint: { en: 'Mutexes must never be copied.', bn: 'মিউটেক্স কখনোই কপি করা উচিত নয়।' },
        explanation: {
          en: 'sync.Mutex must never be copied. Value receivers copy the struct and its mutex, breaking synchronization.',
          bn: 'sync.Mutex কখনোই কপি করা যাবে না। ভ্যালু রিসিভার মিউটেক্স কপি করে ফেলে যার ফলে সিঙ্ক্রোনাইজেশন নষ্ট হয়।',
        },
      },
      {
        id: 'go-mth-q2',
        kind: 'mcq',
        topic: 'account-id-ref',
        question: {
          en: 'In our code walkthrough, what was the account ID of the BankAccount belonging to Tariq?',
          bn: 'আমাদের কোড আলোচনায় তারিকের BankAccount এর অ্যাকাউন্ট আইডি কত ছিল?',
        },
        options: [
          { en: 'Account ID 101', bn: 'অ্যাকাউন্ট আইডি ১০১' },
          { en: 'Account ID 500', bn: 'অ্যাকাউন্ট আইডি ৫০০' },
          { en: 'Account ID 1', bn: 'অ্যাকাউন্ট আইডি ১' },
          { en: 'Account ID 999', bn: 'অ্যাকাউন্ট আইডি ৯৯৯' },
        ],
        answer: 0,
        hint: { en: 'AccountID: 101.', bn: 'AccountID: ১০১।' },
        explanation: {
          en: 'The simulation explicitly initialized BankAccount with AccountID: 101.',
          bn: 'সিমুলেশনটিতে স্পষ্টভাবেই BankAccount এর AccountID: 101 দেওয়া হয়েছিল।',
        },
      },
      {
        id: 'go-mth-q3',
        kind: 'mcq',
        topic: 'error-interface-definition',
        question: {
          en: 'What single method signature must a Go type implement to satisfy the built-in error interface?',
          bn: 'বিল্ট-ইন error ইন্টারফেস পূরণ করতে একটি গো টাইপকে কোন একক মেথড সিগনেচারটি বাস্তবায়ন করতে হয়?',
        },
        options: [
          { en: 'Error() string', bn: 'Error() string' },
          { en: 'GetMessage() string', bn: 'GetMessage() string' },
          { en: 'ToString() string', bn: 'ToString() string' },
          { en: 'Print() void', bn: 'Print() void' },
        ],
        answer: 0,
        hint: { en: 'The error interface requires Error() string.', bn: 'error ইন্টারফেসের জন্য Error() string প্রয়োজন।' },
        explanation: {
          en: 'The built-in error interface is defined as type error interface { Error() string }.',
          bn: 'বিল্ট-ইন error ইন্টারফেসের সংজ্ঞা হলো type error interface { Error() string }।',
        },
      },
      {
        id: 'go-mth-q4',
        kind: 'predict',
        topic: 'empty-interface-keyword',
        question: {
          en: 'Which type alias introduced in Go 1.18 serves as an alias for the empty interface interface{}?',
          bn: 'গো ১.১৮ এ চালু হওয়া কোন টাইপ অ্যালিয়াসটি ফাঁকা ইন্টারফেস interface{} এর সমতুল্য হিসেবে ব্যবহৃত হয়?',
        },
        answer: 'any',
        accept: ['any', 'any keyword'],
        hint: { en: 'A 3-letter word meaning "every or whichever".', bn: '৩ অক্ষরের একটি ইংরেজি শব্দ যার অর্থ "যেকোনো"।' },
        explanation: {
          en: 'In Go 1.18+, any is a built-in alias for interface{}, representing a value of any type.',
          bn: 'গো ১.১৮+ এ any হলো interface{} এর একটি অন্তর্নির্মিত সমতুল্য রূপ যা যেকোনো টাইপের মান গ্রহণ করতে পারে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'goroutines-and-the-channel',
    title: { en: 'Goroutines and Channels', bn: 'গোরুটিন ও চ্যানেল' },
  },
};
