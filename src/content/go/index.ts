import type { Hub } from '../../lib/types';
import { HelloGoAndToolchainLesson } from './lessons/hello-go-and-toolchain';
import { VariablesTypesAndCastingLesson } from './lessons/variables-types-and-casting';
import { ControlFlowOneLoopLesson } from './lessons/control-flow-one-loop';
import { FunctionsDeferAndMethodsLesson } from './lessons/functions-defer-and-methods';
import { SlicesArraysAndStringsLesson } from './lessons/slices-arrays-and-strings';
import { StructsMapsAndInterfacesLesson } from './lessons/structs-maps-and-interfaces';
import { ErrorsAndPanicsLesson } from './lessons/errors-and-panics';
import { GoroutinesAndChannelsLesson } from './lessons/goroutines-and-channels';
import { TestingGenericsAndModulesLesson } from './lessons/testing-generics-and-modules';
import { MeasuringAndTheGarbageCollectorLesson } from './lessons/measuring-and-the-garbage-collector';

export const goHub: Hub = {
  slug: 'go',
  name: 'Go',
  icon: '🐹',
  tagline: { en: 'One loop, one error idiom, real concurrency: goroutines, channels, slices with capacity, and a compiler that refuses unused variables.', bn: 'একটাই loop, একটাই error-রিতি, আসল concurrency: goroutine, channel, capacity-সহ slice, আর unused variable না-মানা compiler।' },
  intro: { en: 'Go is a small language on purpose: about 25 keywords, one loop, no inheritance, no exceptions. Everything you meet in the first week — var, if, for, func, slice, struct, map — is a thin wrapper over how the machine actually stores and passes data, which is why Go code written by strangers reads almost the same. This hub walks from go run hello.go to a worker pool with channels, and every lesson ends with code you run and questions you grade yourself.', bn: 'Go ইচ্ছাকৃতভাবে ছোট ভাষা: আনুমানিক ২৫টি keyword, একটি মাত্র loop, inheritance নেই, exception নেই। প্রথম সপ্তাহে যা-ই দেখেন — var, if, for, func, slice, struct, map — সবই machine তথ্য যেভাবে রাখে-পাঠায় তার সরীসৃপ-পুরুষ আবরণ। এজন্যই অচেনার লেখা Go কোড প্রায় একই রকম পড়া যায়। এই হাব go run hello.go থেকে channel-এর worker pool পর্যন্ত নেয়, আর প্রতিটি পাঠ শেষ হয় চালাবার কোড আর নিজে-যাচাই করার প্রশ্নে।' },
  roadmap: [
    {
      title: { en: 'Stage 1 — First principles', bn: 'ধাপ ১ — ভিত্তি' },
      items: [
        {
          en: 'Your First Go Program — package main, func main, fmt.Println — and the three commands you will live in: go run, go build, go vet.',
          bn: 'প্রথম Go প্রোগ্রাম — package main, func main, fmt.Println — আর যে তিনটি কমান্ডেই দিন কাটবে: go run, go build, go vet।',
        },
        {
          en: 'Variables, Types and Casting — var vs :=, sized integers, strings that are byte slices you cannot index into by character, and conversions that are always explicit.',
          bn: 'variable, type আর casting — var বনাম :=, মাপ-ঠিক করা integer, string যেটা byte-এর slice — অক্ষর ধরে index করা যায় না, আর conversion সবসময় খোলাখুলি।',
        },
        {
          en: 'Control Flow: One Loop to Rule Them All — if with an initialiser, switch with no fall-through, and the four faces of for — condition, three-part, infinite and range.',
          bn: 'নিয়ন্ত্রণ: একটাই loop — init-সহ if, fall-through-ছাড়া switch, আর for-এর চার মুখ — condition, তিন-অংশ, অনন্ত আর range।',
        },
        {
          en: 'Functions, defer and Methods — Multiple return values, named results, variadic arguments, first-class functions, defer for cleanup, and methods with a receiver instead of this.',
          bn: 'function, defer আর method — একাধিক ফেরত, নাম- দেওয়া result, variadic argument, first-class function, পরিষ্কারের জন্য defer, আর this-এর বদলে receiver-ওয়ালা method।',
        },
      ],
    },
    {
      title: { en: 'Stage 2 — Working set', bn: 'ধাপ ২ — কাজের অংশ' },
      items: [
        {
          en: 'Slices, Arrays and Strings — The header (pointer, len, cap) explains everything: why append sometimes copies, why a sub-slice shares memory, and why a string is an immutable byte run.',
          bn: 'slice, array আর string — হেডার (pointer, len, cap) সব ব্যাখ্যা করে: append কেন কখনও কপি করে, sub-slice কেন memory শেয়ার করে, আর string কেন অ-বদলানো byte-এর সারি।',
        },
        {
          en: 'Structs, Maps and Interfaces — Compose behaviour with structs and embedding, look things up with maps and the comma-ok idiom, and let interfaces be satisfied implicitly.',
          bn: 'struct, map আর interface — struct আর embedding দিয়ে আচরণ গড়ুন, map আর comma-ok দিয়ে খুঁজুন, আর interface যেন নিজে-থেকেই পূরণ হয়।',
        },
        {
          en: 'Errors, Wrapping and Panic — error is an interface, so build your own with Unwrap; check with errors.Is and errors.As; keep panic for bugs.',
          bn: 'error, wrapping আর panic — error একটি interface, তাই Unwrap দিয়ে নিজের বানান; errors.Is ও errors.',
        },
      ],
    },
    {
      title: { en: 'Stage 3 — Professional edge', bn: 'ধাপ ৩ — পেশাদার স্তর' },
      items: [
        {
          en: 'Goroutines and Channels — go f() costs a few kilobytes; channels move ownership.',
          bn: 'goroutine আর channel — go f()-এর খরচ কয়েক KB; channel মালিকানা হাতবদল করে।',
        },
        {
          en: 'Tests, Generics and Modules — Table-driven tests with -race, generics with constraints, and a module graph that pins versions — the three professional habits that make Go code maintainable.',
          bn: 'test, generics আর module — -race সহ table-driven test, constraint সহ generics, আর সংস্করণ-আটকানো module graph — Go কোড রক্ষণাবেক্ষণ-যোগ্য করার তিনটি পেশাদার অভ্যাস।',
        },
        {
          en: 'Measuring, Allocation and the Collector — Go decides where a value lives and when it may be freed. Both decisions cost time.',
          bn: 'মাপা, বরাদ্দ আর garbage collector — কোথায় মান থাকবে আর কখন ছাড়া হবে — দুটোই Go ঠিক করে, দুটিরই সময় লাগে।',
        },
      ],
    },
  ],
  lessons: [HelloGoAndToolchainLesson, VariablesTypesAndCastingLesson, ControlFlowOneLoopLesson, FunctionsDeferAndMethodsLesson, SlicesArraysAndStringsLesson, StructsMapsAndInterfacesLesson, ErrorsAndPanicsLesson, GoroutinesAndChannelsLesson, TestingGenericsAndModulesLesson, MeasuringAndTheGarbageCollectorLesson],
  projects: [
    {
      title: { en: 'Go drill', bn: 'Go অনুশীলন' },
      difficulty: 'beginner',
      brief: { en: 'Rebuild the worked examples from memory, then change one input and predict the new output before running it.', bn: 'উদাহরণগুলো মুখস্থ না দেখে লিখুন, তারপর একটি ইনপুট বদালিয়ে আউটপুট আগেই ভাবুন, পরে চালাুন।' },
    },
    {
      title: { en: 'Go in a real page', bn: 'সত্যিকারের পেজে Go' },
      difficulty: 'beginner',
      brief: { en: 'Wire the concept into a small page you already own, and write one paragraph on what broke first.', bn: 'নিজের একটি ছোট পেজে ধারণাটি বসান, আর প্রথমে কী ভেঙেছিল সেটা নিয়ে একটি অনুচ্ছেদ লিখুন।' },
    },
  ],
  bestPractices: [
    {
      en: 'Handle every error once, at the place that can do something about it: if err != nil { return fmt.Errorf("load config: %w", err) }.',
      bn: 'error একবারই handle করুন, যেখানে তার সমাধান সম্ভব সেখানে: if err != nil { return fmt.Errorf("load config: %w", err) }।',
    },
    {
      en: 'Take the smallest interface that works: accept io.Reader, return a concrete struct. “The bigger the interface, the weaker the abstraction.”',
      bn: 'যেটুকু দরকার তার সবচেয়ে ছোট interface নিন: io.Reader গ্রহণ করুন, concrete struct ফেরত দিন। “interface যত বড়, abstraction তত দুর্বল।”',
    },
    {
      en: 'Do not copy a struct that contains a sync.Mutex or sync.WaitGroup; pass a pointer and keep one owner.',
      bn: 'যে struct-এ sync.Mutex বা sync.WaitGroup আছে তাকে কপি করবেন না; pointer পাঠান, একজনই মালিক থাকুক।',
    },
    {
      en: 'Let the compiler help: gofmt, go vet and staticcheck run on save; errors.New and panic are not the same tool.',
      bn: 'compiler-কে সাহায্যে লাগান: save-এর সময় gofmt, go vet আর staticcheck; errors.New ও panic এক জিনিস নয়।',
    },
    {
      en: 'Give goroutines an owner and a stop signal (context.Context); a goroutine with neither is a leak waiting to happen.',
      bn: 'প্রতিটি goroutine-এর একজন মালিক আর থামানোর সংকেত (context.Context) দিন; দুটোই না-থাকা goroutine মানে ফাঁকা leak-এর অপেক্ষা।',
    },
  ],
  interview: [
    {
      q: { en: 'What is the difference between an array and a slice in Go?', bn: 'Go-তে array আর slice-এর তফাত কী?' },
      a: { en: 'An array’s length is part of its type: [3]int and [4]int are different types and assignment copies all elements. A slice is a small header — pointer, length, capacity — over shared backing memory, so passing it copies only the header, and append may or may not allocate depending on capacity.', bn: 'array-র দৈর্ঘ্য তার type-এর অংশ: [3]int আর [4]int আলাদা type, অ্যাসাইনমেন্টে সব উপাদান কপি হয়। slice হলো shared backing memory-এর উপর একটা ছোট হেডার — pointer, length, capacity — তাই পাঠালে শুধু হেডার কপি হয়, আর capacity-র উপর নির্ভর করে append কখনও allocate করে কখনও না।' },
    },
    {
      q: { en: 'When must a method use a pointer receiver?', bn: 'কখন method-এ pointer receiver লাগবে?' },
      a: { en: 'Three reasons: the method must mutate the receiver, the struct is too big to copy, or you need to satisfy an interface through the pointer. Mixing receiver kinds in one type is a smell — pick one and keep it.', bn: 'তিনটি কারণ: method receiver বদলাবে, struct কপি করার জন্য বড়, অথবা interface pointer-এর মাধ্যমে satisfy করতে হবে। একই type-এ দুই রকম receiver মেশানো গন্ধ — একটি বেছে নিয়ে সেটাই রাখুন।' },
    },
    {
      q: { en: 'Why does a nil map read fine but panic on write, while a nil slice appends fine?', bn: 'খালি (nil) map পড়লে ঠিক, লিখলে panic, অথচ nil slice-এ append চলে — কেন?' },
      a: { en: 'A nil map has no backing store to insert into, and the runtime does not guess one for you; reading is defined to return the zero value. A nil slice behaves like a zero-length slice, and append allocates a backing array the first time it needs capacity.', bn: 'nil map-এর backing store নেই, ঢোকার জায়গা runtime নিজে থেকে বানায় না; পড়া শূন্য-মান দেবে বলেই সংজ্ঞায়িত। nil slice আচরণে দৈর্ঘ্য-শূন্য slice-এর মতো, আর append প্রথমবার capacity দরকার হলে backing array allocate করে।' },
    },
    {
      q: { en: 'What happens when you send on an unbuffered channel with no receiver?', bn: 'unbuffered channel-এ গ্রহীতা ছাড়া পাঠালে কী হয়?' },
      a: { en: 'The send blocks until a receiver takes the value — that is the synchronisation, not a bug. Close the loop the other way too: a send on a closed channel panics, a receive from a closed channel yields the zero value with ok == false.', bn: 'গ্রহীতা মান না-নেওয়া পর্যন্ত send আটকে থাকে — এটাই synchronisation, bug নয়। উল্টো দিকও মনে রাখুন: বন্ধ channel-এ send panic করে, বন্ধ channel থেকে receive zero value দেয় with ok == false।' },
    },
    {
      q: { en: 'Explain a data race and how you would find one.', bn: 'data race বলতে কী বোঝান, কীভাবে খুঁজবেন?' },
      a: { en: 'Two goroutines touch the same memory, at least one writes, with no happens-before order. Find it with go test -race / go run -race, fix it with a channel, a mutex, or by giving each value one owning goroutine.', bn: 'দুটি goroutine একই memory ছোঁয়, অন্তত একটি লেখে, আর কোনো happens-before ক্রম নেই। খুঁজে বের করুন go test -race / go run -race দিয়ে, ঠিক করুন channel, mutex, বা প্রতিটি মানকে একজন মালিক-গোরুটিন দিয়ে।' },
    },
  ],
  realWorld: [
    {
      en: 'The Go toolchain itself, Docker’s daemon (moby), Kubernetes, Terraform, Prometheus, etcd, Caddy and most of the cloud-native ecosystem are Go — the language was born at Google to build servers at scale.',
      bn: 'Go-র নিজের toolchain, Docker-এর daemon (moby), Kubernetes, Terraform, Prometheus, etcd, Caddy আর প্রায় পুরো cloud-native ইকোসিস্টেম Go — ভাষাটা Google-এই বড় সার্ভার বানানোর জন্যই জন্মেছে।',
    },
    {
      en: 'A single static binary that starts in milliseconds and needs no runtime is why Go wins for CLIs, sidecars and serverless functions.',
      bn: 'একটি static binary, millisecond-এ ওঠে, আলাদা runtime লাগে না — এইজন্যই CLI, sidecar আর serverless function-এ Go জেতে।',
    },
    {
      en: 'gofmt means arguments about brace style never happen in Go code review — a real, measurable gain on teams.',
      bn: 'gofmt থাকায় Go-র code review-এ বন্ধনী-স্টাইলের তর্ক হয় না — দলের জন্য মাপা যাওয়া লাভ।',
    },
    {
      en: 'Concurrency, not parallelism, is Go’s pitch: channels move ownership of data instead of sharing it behind a lock.',
      bn: 'Go-র মূল কথা concurrency, parallelism নয়: channel data-র মালিকানা হাতবদল করে, লক-এর আড়ালে শেয়ার করে না।',
    },
  ],
  references: [
    {
      group: { en: 'Declarations and flow', bn: 'ঘোষণা আর প্রবাহ' },
      items: [
        {
          term: 'var / :=',
          def: { en: 'var x int declares with a zero value; x := 3 declares and infers. := is only legal inside a function.', bn: 'var x int শূন্য-মানসহ ঘোষণা; x := 3 ঘোষণা-সহ type নিজে নেয়। := শুধু function-এর ভিতরে চলে।' },
        },
        {
          term: 'const / iota',
          def: { en: 'Compile-time values; iota counts per ConstSpec line — the usual way to make enums.', bn: 'compile-সময়ের মান; iota প্রতি ConstSpec লাইনে বেড়ে যায় — enum বানানোর রীতি।' },
        },
        {
          term: 'for',
          def: { en: 'The only loop: for cond {}, for i := 0; i < n; i {}, for {} (infinite), and range forms.', bn: 'একমাত্র loop: for cond {}, for i := 0; i < n; i {}, for {} (অসীম), আর range রূপ।' },
        },
        {
          term: 'switch',
          def: { en: 'Cases do not fall through; fallthrough is explicit. switch with no tag reads as an if-chain.', bn: 'case নিচে পড়ে না; fallthrough স্পষ্টভাবে দিতে হয়। tag-ছাড়া switch পড়লে if-শৃঙ্খল।' },
        },
        {
          term: 'defer',
          def: { en: 'Runs at function exit, last-in-first-out, arguments captured at the defer statement.', bn: 'function শেষ হওয়ার আগে চলে, last-in-first-out, argument defer-লিখার সময়েই ধরা হয়।' },
        },
      ],
    },
    {
      group: { en: 'Data and concurrency', bn: 'তথ্য আর concurrency' },
      items: [
        {
          term: 'make([]T, len, cap)',
          def: { en: 'Builds slice/map/channel with its backing store. new(T) instead gives you a *T to zeroed memory.', bn: 'backing store-সহ slice/map/channel বানায়। বদলে new(T) শূন্য memory-র *T দেয়।' },
        },
        {
          term: 'append(s, v)',
          def: { en: 'Returns the (possibly new) slice; always write s = append(s, v).', bn: '(সম্ভাব্য নতুন) slice ফেরত দেয়; সবসময় s = append(s, v) লিখুন।' },
        },
        {
          term: 'struct / method',
          def: { en: 'Fields grouped under one name; a method is a function with a receiver: func (u *User) Name() string.', bn: 'এক নামে field-এর গোছা; method হলো receiver-ওয়ালা function: func (u *User) Name() string।' },
        },
        {
          term: 'go f()',
          def: { en: 'Starts f in a goroutine — cheap (a few KB of stack), scheduled by the runtime onto OS threads.', bn: 'f-কে goroutine-এ চালান — সস্তা (কয়েক KB স্ট্যাক), runtime সেগুলোকে OS thread-এ বসায়।' },
        },
        {
          term: 'ch := make(chan T)',
          def: { en: 'Unbuffered: send blocks until someone receives. make(chan T, n) buffers n values.', bn: 'unbuffered: কেউ না-নেওয়া পর্যন্ত send আটকে থাকে। make(chan T, n) n মান ধরে।' },
        },
        {
          term: 'select',
          def: { en: 'Waits on several channel operations; a default clause makes it non-blocking.', bn: 'একাধিক channel অপারেশনের অপেক্ষা করে; default থাকলে আটকায় না।' },
        },
      ],
    },
  ]
};
