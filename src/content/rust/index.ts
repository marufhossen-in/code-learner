import type { Hub } from '../../lib/types';
import { OwnershipAndTheMoveLesson } from './lessons/ownership-and-the-move';
import { BorrowingAndTheBorrowLesson } from './lessons/borrowing-and-the-borrow';
import { LifetimesAndTheTickLesson } from './lessons/lifetimes-and-the-tick';
import { TraitsAndTheBoundLesson } from './lessons/traits-and-the-bound';
import { EnumsAndTheMatchLesson } from './lessons/enums-and-the-match';
import { CargoAndTheCrateLesson } from './lessons/cargo-and-the-crate';
import { FuturesAndTheAwaitLesson } from './lessons/futures-and-the-await';
import { TheCrateServeLesson } from './lessons/the-crate-serve';

export const rustHub: Hub = {
  slug: 'rust',
  name: 'Rust Systems Programming',
  icon: '🦀',
  tagline: {
    en: 'Master memory safety without garbage collection in Rust, from ownership, borrowing, and lifetimes to traits, algebraic enums, async futures, and production shipping.',
    bn: 'গার্বেজ কালেকশন ছাড়াই মেমোরি নিরাপত্তা অর্জন করুন: মালিকানা, বরোয়িং এবং লাইফটাইম থেকে শুরু করে ট্রেইট, অ্যালজেব্রাইক এনাম, অ্যাসিঙ্ক ফিউচার এবং প্রোডাকশন শিপিং সহ সম্পূর্ণ Rust আয়ত্ত করুন।'
  },
  intro: {
    en: 'Rust has redefined systems programming by delivering memory safety, thread safety, and blazing native performance without requiring a runtime garbage collector. At the foundation of the language sits the compile-time ownership model: every value has exactly 1 owner, moves transfer ownership deterministically, and the borrow checker enforces either multiple shared references (&T) or exactly 1 exclusive mutable reference (&mut T) at any given instant. As systems scale, lifetime annotations guarantee that references never outlive the data they borrow. Coupled with zero-cost abstractions through traits and algebraic pattern matching with Option and Result, Rust equips engineers to build rock-solid operating systems, cloud microservices, and high-frequency engines.',
    bn: 'কোনো রানটাইম গার্বেজ কালেক্টর ছাড়াই শতভাগ মেমোরি নিরাপত্তা, থ্রেড নিরাপত্তা এবং অভাবনীয় নেটিভ গতি নিশ্চিত করে Rust আধুনিক সিস্টেম প্রোগ্রামিংয়ে বিপ্লব ঘটিয়েছে। ভাষাটির ভিত্তিমূলে রয়েছে কম্পাইল-টাইম ওনারশিপ বা মালিকানা মডেল: প্রতিটি মানের ঠিক ১ জন মালিক থাকে, মুভ (move) অপারেশনে মালিকানা হস্তান্তর ঘটে এবং বরো চেকার যেকোনো মুহূর্তে হয় একাধিক রিড রেফারেন্স (&T) অথবা সর্বোচ্চ ১ টি মিউটেবল রাইট রেফারেন্স (&mut T) নিশ্চিত করে। সিস্টেমের পরিধি বাড়লে লাইফটাইম অ্যানোটেশন নিশ্চয়তা দেয় যে কোনো রেফারেন্সই মূল তথ্যের চেয়ে বেশি সময় টিকে থাকবে না। ট্রেইটের মাধ্যমে জিরো-কস্ট অ্যাবস্ট্রাকশন এবং Option ও Result দিয়ে নিখুঁত প্যাটার্ন ম্যাচিংয়ের সমন্বয়ে Rust প্রকৌশলীদের বিশ্বমানের অপারেটিং সিস্টেম, ক্লাউড মাইক্রোসার্ভিস এবং উচ্চগতির ট্রেডিং ইঞ্জিন তৈরিতে সক্ষম করে তোলে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Memory Safety & Ownership Foundations',
        bn: 'ধাপ ১ — মেমোরি নিরাপত্তা এবং ওনারশিপ ভিত্তি'
      },
      items: [
        {
          en: 'Ownership rules, stack versus heap memory layout, and RAII deterministic cleanup via the Drop trait',
          bn: 'ওনারশিপ বা মালিকানার নিয়ম, স্ট্যাক বনাম হিপ মেমোরি বিন্যাস এবং Drop ট্রেইটের মাধ্যমে স্বয়ংক্রিয় মেমোরি রিলিজ'
        },
        {
          en: 'Move semantics, shallow copy pointer transfer, and deep cloning with the Clone trait',
          bn: 'মুভ সিম্যান্টিকস, পয়েন্টার হস্তান্তর এবং Clone ট্রেইট দিয়ে ডিপ ক্লোনিং'
        },
        {
          en: 'Borrowing rules, immutable shared references (&), and exclusive mutable references (&mut)',
          bn: 'বরোয়িং বা ঋণ নেওয়ার নিয়ম, ইমিউটেবল শেয়ার্ড রেফারেন্স (&) এবং এক্সক্লুসিভ মিউটেবল রেফারেন্স (&mut)'
        },
        {
          en: 'Lifetime annotations (\'a), the borrow checker, lifetime elision rules, and \'static duration',
          bn: 'লাইফটাইম অ্যানোটেশন (\'a), বরো চেকার, লাইফটাইম এলিশন নিয়ম এবং \'static স্থায়িত্ব'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Abstraction, Types & The Cargo Ecosystem',
        bn: 'ধাপ ২ — অ্যাবস্ট্রাকশন, টাইপ সিস্টেম এবং কার্গো ইকোসিস্টেম'
      },
      items: [
        {
          en: 'Traits, generic trait bounds, associated types, and static dispatch via monomorphization',
          bn: 'ট্রেইট, জেনেরিক ট্রেইট বাউন্ডস, অ্যাসোসিয়েটেড টাইপস এবং মনোমর্ফাইজেশনের মাধ্যমে স্ট্যাটিক ডিসপ্যাচ'
        },
        {
          en: 'Dynamic dispatch with trait objects (dyn Trait) and vtable memory overhead trade-offs',
          bn: 'ট্রেইট অবজেক্ট (dyn Trait) দিয়ে ডায়নামিক ডিসপ্যাচ এবং ভিটেবল (vtable) মেমোরি বিশ্লেষণ'
        },
        {
          en: 'Algebraic Data Types, Option<T>, Result<T, E>, exhaustive match arms, and match guards',
          bn: 'অ্যালজেব্রাইক ডেটা টাইপ, Option<T>, Result<T, E>, সুসংহত match এক্সপ্রেশন এবং ম্যাচ গার্ডস'
        },
        {
          en: 'Cargo package manager, Cargo.toml configuration, multi-crate workspaces, and feature flags',
          bn: 'কার্গো প্যাকেজ ম্যানেজার, Cargo.toml কনফিগারেশন, মাল্টি-ক্রেট ওয়ার্কস্পেস এবং ফিচার ফ্ল্যাগ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Async Concurrency & Production Release',
        bn: 'ধাপ ৩ — অ্যাসিঙ্ক কনকারেন্সি এবং প্রোডাকশন রিলিজ'
      },
      items: [
        {
          en: 'Asynchronous Rust, the Future trait, poll mechanics, Pin<P>, and contextual Wakers',
          bn: 'অ্যাসিঙ্ক্রোনাস Rust, Future ট্রেইট, poll মেকানিজম, Pin<P> এবং কন্টেক্সচুয়াল ওয়েকার'
        },
        {
          en: 'The Tokio runtime, task spawning, asynchronous I/O channels, and select! multiplexing',
          bn: 'টোকিও (Tokio) রানটাইম, টাস্ক স্পনিং, অ্যাসিঙ্ক আই/ও চ্যানেল এবং select! মাল্টিপ্লেক্সিং'
        },
        {
          en: 'Production release optimization flags, Link-Time Optimization (LTO), and cargo-audit security',
          bn: 'প্রোডাকশন রিলিজ অপটিমাইজেশন, Link-Time Optimization (LTO) এবং cargo-audit নিরাপত্তা'
        },
        {
          en: 'Cross-compiling static musl Linux binaries for ultra-lightweight Docker deployment',
          bn: 'অতি হালকা ডকার ডেপ্লয়মেন্টের জন্য স্ট্যাটিক musl লিনাক্স বাইনারি ক্রস-কম্পাইলেশন'
        }
      ]
    }
  ],
  lessons: [
    OwnershipAndTheMoveLesson,
    BorrowingAndTheBorrowLesson,
    LifetimesAndTheTickLesson,
    TraitsAndTheBoundLesson,
    EnumsAndTheMatchLesson,
    CargoAndTheCrateLesson,
    FuturesAndTheAwaitLesson,
    TheCrateServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'High-Throughput In-Memory Key-Value Cache with Tokio & Sharded RwLock',
        bn: 'Tokio এবং Sharded RwLock দিয়ে উচ্চগতির ইন-মেমোরি কি-ভ্যালু ক্যাশ'
      },
      brief: {
        en: 'Engineer a thread-safe, concurrent in-memory key-value storage engine in Rust. Implement concurrent TCP socket handling using Tokio, use sharded Arc<RwLock<HashMap<String, Bytes>>> to eliminate lock contention, and enforce TTL cache expiration through background timer tasks.',
        bn: 'Rust দিয়ে একটি থ্রেড-নিরাপদ ও উচ্চগতির ইন-মেমোরি কি-ভ্যালু স্টোরেজ ইঞ্জিন তৈরি করুন। Tokio দিয়ে কনকারেন্ট টিসিপি সকেট হ্যান্ডলিং, লক সমস্যা দূর করতে sharded Arc<RwLock<HashMap<String, Bytes>>> এবং ব্যাকগ্রাউন্ড টাইমারে TTL এক্সপায়ারেশন কার্যকর করুন।'
      }
    },
    {
      title: {
        en: 'Zero-Copy Fast CLI Log Parser with Memory Mapping & String Slices',
        bn: 'মেমোরি ম্যাপিং ও স্ট্রিং স্লাইস দিয়ে শূন্য-কপির উচ্চগতির CLI লগ পার্সার'
      },
      brief: {
        en: 'Build a blazing-fast command-line audit log parsing tool. Use the memmap2 crate to map gigabyte-sized log files directly into virtual memory, slice string tokens using lifetime-parameterized ReadOnly string slices (&str), and extract error metrics without copying bytes or allocating on the heap.',
        bn: 'একটি অতি দ্রুতগতির কমান্ড-লাইন অডিট লগ পার্সিং টুল তৈরি করুন। memmap2 ক্রেট দিয়ে গিগাবাইট ফাইল মেমোরিতে ম্যাপ করুন, লাইফটাইম যুক্ত স্ট্রিং স্লাইস (&str) দিয়ে কোনো মেমোরি কপি ছাড়া টোকেন আলাদা করুন এবং হিপ খরচ শূন্যে রেখে দ্রুত মেট্রিক্স বের করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Embrace ownership transfer instead of defensively calling .clone(), keeping heap allocations minimal and memory access blazing fast.',
      bn: 'অকারণে বারবার .clone() না ডেকে মালিকানা হস্তান্তরের (ownership transfer) সুবিধা গ্রহণ করুন, যা হিপ মেমোরি খরচ বাঁচিয়ে সর্বোচ্চ গতি নিশ্চিত করে।'
    },
    {
      en: 'Follow the aliasing XOR mutability rule: maintain either any number of immutable references (&T) or exactly 1 mutable reference (&mut T).',
      bn: 'এলিয়াসিং বনাম মিউটেবিলিটি নিয়ম মানুন: যেকোনো মুহূর্তে হয় একাধিক রিড রেফারেন্স (&T) অথবা ঠিক ১ টি রাইট রেফারেন্স (&mut T) বজায় রাখুন।'
    },
    {
      en: 'Prefer static dispatch with generic trait bounds (impl Trait) over dynamic dispatch (dyn Trait) to enable compiler inlining and monomorphization.',
      bn: 'কম্পাইলার ইনলাইনিং ও মনোমর্ফাইজেশনের সুবিধা পেতে dyn Trait-এর বদলে জেনেরিক ট্রেইট বাউন্ডস (impl Trait) ব্যবহার করুন।'
    },
    {
      en: 'Handle recoverable errors comprehensively using Result<T, E> and the "?" operator rather than calling .unwrap() or .expect() in production code.',
      bn: 'প্রোডাকশন কোডে .unwrap() বা .expect() ডেকে ক্র্যাশ না ঘটিয়ে Result<T, E> এবং "?" অপারেটরের মাধ্যমে নিয়মমাফিক এরর হ্যান্ডেল করুন।'
    },
    {
      en: 'Never perform blocking synchronous disk or CPU computations inside an async Tokio task without delegating to tokio::task::spawn_blocking.',
      bn: 'অ্যাসিঙ্ক টোকিও টাস্কের ভেতর ব্লকিং কোনো কাজ না চালিয়ে ভারী কাজগুলোকে tokio::task::spawn_blocking-এ পাঠিয়ে দিন।'
    },
    {
      en: 'Enable Link-Time Optimization (lto = "fat") and binary stripping (strip = true) in Cargo.toml release profiles to shrink artifacts by 70 percent.',
      bn: 'Cargo.toml রিলিজ ফাইলে Link-Time Optimization (lto = "fat") এবং স্ট্রিপিং সক্রিয় করে বাইনারির আকার ৭০ শতাংশ পর্যন্ত কমিয়ে আনুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What are the 3 core rules of ownership in Rust, and how does the compiler enforce them without a garbage collector?',
        bn: 'Rust-এ ওনারশিপ বা মালিকানার ৩ টি মূল নিয়ম কী কী, এবং কোনো গার্বেজ কালেক্টর ছাড়াই কম্পাইলার কীভাবে এগুলো বাস্তবায়ন করে?'
      },
      a: {
        en: 'The 3 core ownership rules are: 1. Each value in Rust has an owner variable. 2. There can only be 1 owner at any given time. 3. When the owner goes out of scope, the value is dropped and its memory is immediately deallocated. The compiler enforces these rules at compile time using static analysis. When a variable is assigned to another or passed to a method, ownership moves, rendering the previous variable uninitialized. When a scope exits, the compiler injects calls to the Drop trait automatically, guaranteeing zero memory leaks without runtime GC pauses.',
        bn: 'মালিকানার ৩ টি মূল নিয়ম হলো: ১. Rust-এ প্রতিটি মানের একজন মালিক ভেরিয়েবল থাকে। ২. যেকোনো মুহূর্তে একটি মানের কেবলমাত্র ১ জন মালিক থাকতে পারে। ৩. মালিক স্কোপের বাইরে চলে গেলে মানটি স্বয়ংক্রিয়ভাবে ড্রপ হয় এবং মেমোরি অবিলম্বে মুক্ত হয়। কম্পাইলার স্ট্যাটিক বিশ্লেষণের মাধ্যমে কম্পাইল-টাইমেই এই নিয়মগুলো প্রয়োগ করে। মান অন্য ভেরিয়েবলে দিলে মালিকানা হস্তান্তরিত (move) হয় এবং পূর্বের ভেরিয়েবলটি বাতিল হয়ে যায়। স্কোপ শেষ হলে কম্পাইলার নিজে থেকেই Drop ট্রেইট কল করে মেমোরি পরিষ্কার করে দেয়, ফলে কোনো রানটাইম জিসি পজ ছাড়াই মেমোরি নিরাপদ থাকে।'
      }
    },
    {
      q: {
        en: 'What is the difference between static dispatch and dynamic dispatch in Rust traits, and what are their performance implications?',
        bn: 'Rust ট্রেইটে স্ট্যাটিক ডিসপ্যাচ এবং ডায়নামিক ডিসপ্যাচের মধ্যে পার্থক্য কী, এবং এদের পারফরম্যান্স প্রভাব কেমন?'
      },
      a: {
        en: 'Static dispatch occurs when using generics with trait bounds (e.g. fn process<T: Trait>(item: T)). The compiler executes monomorphization, generating dedicated machine code for each concrete type used, enabling aggressive method inlining and zero runtime overhead. Dynamic dispatch occurs when using trait objects (e.g. &dyn Trait or Box<dyn Trait>). The compiler creates a fat pointer consisting of the data address and a pointer to a vtable (virtual method table). At runtime, method calls are resolved via vtable lookup, which disables inlining and introduces pointer indirection latency.',
        bn: 'স্ট্যাটিক ডিসপ্যাচ ঘটে যখন ট্রেইট বাউন্ড যুক্ত জেনেরিক ব্যবহৃত হয় (যেমন fn process<T: Trait>(item: T))। কম্পাইলার মনোমর্ফাইজেশনের মাধ্যমে প্রতিটি কনক্রিট টাইপের জন্য আলাদা মেশিন কোড তৈরি করে, যা মেথড ইনলাইনিং এবং শূন্য রানটাইম ওভারহেড নিশ্চিত করে। অপরদিকে ডায়নামিক ডিসপ্যাচ ঘটে যখন ট্রেইট অবজেক্ট ব্যবহৃত হয় (যেমন &dyn Trait বা Box<dyn Trait>)। কম্পাইলার একটি ফ্যাট পয়েন্টার তৈরি করে যার একপাশে ডেটার ঠিকানা এবং অন্যপাশে ভার্চুয়াল মেথড টেবিলের (vtable) পয়েন্টার থাকে। রানটাইমে ভিটেবল থেকে মেথডের ঠিকানা খুঁজতে হয় বলে এতে ইনলাইনিং বন্ধ থাকে এবং সামান্য বিলম্ব ঘটে।'
      }
    },
    {
      q: {
        en: 'Why does Rust require lifetime annotations (\'a), and what does the borrow checker actually verify using them?',
        bn: 'Rust-এ কেন লাইফটাইম অ্যানোটেশন (\'a) প্রয়োজন হয়, এবং বরো চেকার এগুলো দিয়ে আসলে কী যাচাই করে?'
      },
      a: {
        en: 'Lifetime annotations do not alter how long a value lives at runtime; rather, they describe the relationship between the lifetimes of multiple references to the compiler borrow checker. When a function accepts references and returns a reference, the compiler cannot deduce which input reference the output is derived from. Specifying "fn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str" proves that the returned reference will be valid for the intersection (the shorter) of the two input lifetimes, preventing dangling references to deallocated stack frames.',
        bn: 'লাইফটাইম অ্যানোটেশন কোনো ভ্যালুর আয়ু পরিবর্তন করে না; বরং এটি কম্পাইলার বরো চেকারকে একাধিক রেফারেন্সের পারস্পরিক সম্পর্ক স্পষ্টভাবে জানিয়ে দেয়। যখন একটি ফাংশন একাধিক রেফারেন্স গ্রহণ করে একটি রেফারেন্স ফেরত দেয়, তখন কম্পাইলার একা সিদ্ধান্ত নিতে পারে না যে ফেরত দেওয়া রেফারেন্সটি কার ওপর নির্ভরশীল। "fn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str" লিখে ডেভেলপার প্রমাণ করেন যে আউটপুট রেফারেন্সটি উভয় ইনপুটের সংক্ষিপ্ততম আয়ু পর্যন্ত বৈধ থাকবে, ফলে মেমোরি থেকে মুছে যাওয়া তথ্যের ঝুলন্ত পয়েন্টার (dangling pointer) তৈরি হওয়া রোধ হয়।'
      }
    },
    {
      q: {
        en: 'How does asynchronous execution work in Rust, and why are Rust Futures described as "pull-based" or "lazy"?',
        bn: 'Rust-এ অ্যাসিঙ্ক্রোনাস এক্সিকিউশন কীভাবে কাজ করে, এবং কেন Rust ফিউচারকে "পুল-ভিত্তিক" (pull-based) বা "লেজি" বলা হয়?'
      },
      a: {
        en: 'Unlike JavaScript Promises or C# Tasks that start executing in the background immediately upon creation (push-based), Rust Futures are completely lazy (pull-based). Calling an async function creates a state machine that executes zero instructions until it is explicitly polled. The runtime executor calls "Future::poll(Pin<&mut Self>, &mut Context)". If the asynchronous I/O is ready, it returns Poll::Ready(value); if still waiting, it registers the Context\'s Waker with the operating system reactor and returns Poll::Pending. Only when the OS notifies the Waker does the runtime schedule the task to be polled again.',
        bn: 'জাভাস্ক্রিপ্ট প্রমিজ বা C# টাস্কের মতো তাৎক্ষণিকভাবে ব্যাকগ্রাউন্ডে শুরু হওয়ার বদলে Rust ফিউচার পুরোপুরি লেজি (lazy) বা পুল-ভিত্তিক। একটি অ্যাসিঙ্ক ফাংশন কল করলে একটি স্টেট মেশিন তৈরি হয় যা কোনো কোড রান করে না যতক্ষণ না কেউ তাকে পোল (poll) করে। রানটাইম এক্সিকিউটর "Future::poll(Pin<&mut Self>, &mut Context)" কল করে। যদি ডেটা প্রস্তুত থাকে তবে Poll::Ready(value) ফেরত আসে; আর প্রস্তুত না থাকলে ওএস রিঅ্যাক্টরের কাছে ওয়েকার (Waker) নিবন্ধন করে Poll::Pending ফেরত দেয়। পরবর্তীতে অপারেটিং সিস্টেম ওয়েকারকে সিগন্যাল দিলে রানটাইম পুনরায় সেই ফিউচারটিকে পোল করে এগিয়ে নেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Cloudflare running global edge proxies powered by Rust, processing millions of concurrent HTTPS requests with zero garbage collection spikes.',
      bn: 'ক্লাউডফ্লেয়ার Rust দিয়ে গ্লোবাল এজ প্রক্সি পরিচালনা করে, যা কোনো গার্বেজ কালেকশন ল্যাগ ছাড়া প্রতি সেকেন্ডে লক্ষ লক্ষ এইচটিটিপিএস রিকোয়েস্ট প্রসেস করে।'
    },
    {
      en: 'Discord migrating core read-heavy chat services from Go to Rust, eliminating periodic 2-second garbage collection spikes to achieve flat 20-millisecond latency.',
      bn: 'ডিসকর্ড তাদের চ্যাট ইঞ্জিন Go থেকে Rust-এ স্থানান্তর করে ২-সেকেন্ডের নিয়মিত জিসি পজ দূর করে এবং ল্যাটেন্সিকে ফ্ল্যাট ২০ মিলিসেকেন্ডে নামিয়ে আনে।'
    },
    {
      en: 'The Linux Kernel adopting Rust as the second official implementation language for writing memory-safe device drivers and kernel modules.',
      bn: 'লিনাক্স কার্নেল মেমোরি-নিরাপদ ডিভাইস ড্রাইভার এবং কার্নেল মডিউল তৈরির জন্য Rust-কে দ্বিতীয় আনুষ্ঠানিক ভাষা হিসেবে গ্রহণ করেছে।'
    },
    {
      en: 'High-frequency trading firms deploying Rust execution gateways where sub-microsecond determinism and zero-allocation memory layouts are critical.',
      bn: 'উচ্চগতির ট্রেডিং ফার্মগুলো Rust গেটওয়ে ব্যবহার করে যেখানে সাব-মাইক্রোসেকেন্ড নিশ্চয়তা এবং শূন্য-অ্যালোকেশন মেমোরি অত্যন্ত গুরুত্বপূর্ণ।'
    }
  ]
};
