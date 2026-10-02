import type { Hub } from '../../lib/types';
import { CargoAndTheModuleLesson } from './lessons/cargo-and-the-module';
import { MovesAndTheOwnerLesson } from './lessons/moves-and-the-owner';
import { BorrowingAndTheReferenceLesson } from './lessons/borrowing-and-the-reference';
import { LifetimesAndTheElisionLesson } from './lessons/lifetimes-and-the-elision';
import { MatchesAndThePatternLesson } from './lessons/matches-and-the-pattern';
import { TraitsAndTheGenericLesson } from './lessons/traits-and-the-generic';
import { ResultsAndTheQuestionLesson } from './lessons/results-and-the-question';
import { TheRustReleaseLesson } from './lessons/the-rust-release';

export const langRustHub: Hub = {
  slug: 'lang-rust',
  name: 'Rust',
  icon: '🦀',
  tagline: {
    en: 'Master memory-safe systems programming with compile-time ownership, fearless concurrency, and zero-cost abstractions.',
    bn: 'কম্পাইল-টাইম ওনারশিপ, নির্ভীক কনকারেন্সি এবং জিরো-কস্ট অ্যাবস্ট্রাকশন সহ মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং আয়ত্ত করুন।'
  },
  intro: {
    en: 'Rust delivers bare-metal C and C++ execution speed alongside mathematically proven memory safety without a runtime garbage collector. Through its revolutionary ownership and borrowing model, strict lifetime contracts, and zero-cost abstractions, Rust guarantees compile-time elimination of data races, dangling pointers, and double-free vulnerabilities. This curriculum guides you from foundational Cargo tooling and move semantics through advanced lifetime bounds, polymorphic traits, exhaustive pattern matching, and production-ready release pipelines.',
    bn: 'রানটাইম গার্বেজ কালেক্টর ছাড়াই গাণিতিকভাবে প্রমাণিত মেমোরি সুরক্ষার পাশাপাশি C এবং C++ এর মতো আসল বেয়ার-মেটাল গতি প্রদান করে Rust। বৈপ্লবিক ওনারশিপ ও বরোয়িং মডেল, কঠোর লাইফটাইম চুক্তি এবং শূন্য-খরচের অ্যাবস্ট্রাকশনের সাহায্যে Rust কম্পাইল-টাইমেই ডেটা রেস, ঝুলন্ত পয়েন্টার এবং ডাবল-ফ্রি দুর্বলতা চিরতরে নির্মূল করে। এই পূর্ণাঙ্গ সিলেবাস আপনাকে মৌলিক কার্গো টুলিং ও মুভ সেমান্টিকস থেকে শুরু করে অ্যাডভান্সড লাইফটাইম বাউন্ড, পলিমরফিক ট্রেইট, নিখুঁত প্যাটার্ন ম্যাচিং এবং প্রোডাকশন রিলিজ পাইপলাইনের চরম দক্ষতা অর্জনে পরিচালিত করবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Tooling, Ownership & Memory Safety Foundations',
        bn: 'ধাপ ১: টুলিং, ওনারশিপ এবং মেমোরি নিরাপত্তার মূল ভিত্তি'
      },
      items: [
        {
          en: 'Initialize crates, navigate Cargo.toml manifests, and establish granular module visibility using pub, pub(crate), and pub(super).',
          bn: 'ক্রেট তৈরি, Cargo.toml ম্যানিফেস্ট পরিচালনা এবং pub, pub(crate) ও pub(super) দিয়ে সুনির্দিষ্ট মডিউল ভিজিবিলিটি প্রতিষ্ঠা।'
        },
        {
          en: 'Master the 3 cardinal ownership rules, 24-byte String stack layouts, move semantics, and RAII deallocation via Drop.',
          bn: '৩ টি মৌলিক ওনারশিপ নিয়ম, ২৪-বাইট String স্ট্যাক লেআউট, মুভ সেমান্টিকস এবং Drop-এর মাধ্যমে RAII মেমোরি মুক্তকরণ।'
        },
        {
          en: 'Enforce the Aliasing XOR Mutability invariant with shared (&T) and exclusive (&mut T) references across Non-Lexical Lifetimes.',
          bn: 'নন-লেক্সিক্যাল লাইফটাইমে শেয়ার্ড (&T) এবং এক্সক্লুসিভ (&mut T) রেফারেন্সের মাধ্যমে এলিয়াসিং বনাম মিউটেবিলিটি নিয়ম প্রয়োগ।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Lifetimes, Abstraction & Pattern Matching',
        bn: 'ধাপ ২: লাইফটাইম, অ্যাবস্ট্রাকশন এবং প্যাটার্ন ম্যাচিং'
      },
      items: [
        {
          en: 'Annotate reference relationships with generic lifetimes (\'a), decode the 3 compiler elision rules, and contrast with \'static.',
          bn: 'জেনেরিক লাইফটাইম (\'a) দিয়ে সম্পর্ক নির্ধারণ, কম্পাইলারের ৩ টি এলিশন নিয়ম বোঝা এবং \'static এর সাথে তুলনা।'
        },
        {
          en: 'Construct polymorphic trait contracts, compare static monomorphization against 16-byte dyn Trait fat pointers, and honor orphan rules.',
          bn: 'পলিমরফিক ট্রেইট চুক্তি তৈরি, স্ট্যাটিক মনোমর্ফাইজেশনের সাথে ১৬-বাইট dyn Trait ফ্যাট পয়েন্টারের তুলনা এবং অরফান রুলস মান্য করা।'
        },
        {
          en: 'Design algebraic data types with 1-byte discriminant tags, exploit pointer niche optimizations, and enforce compiler match exhaustiveness.',
          bn: '১-বাইট ডিসক্রিমিন্যান্ট ট্যাগ দিয়ে অ্যালজেব্রাইক ডেটা টাইপ তৈরি, পয়েন্টার নিচ অপটিমাইজেশন এবং পূর্ণাঙ্গ ম্যাচিং নিশ্চিতকরণ।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Robust Error Handling & Enterprise Deployment',
        bn: 'ধাপ ৩: নির্ভরযোগ্য এরর হ্যান্ডলিং এবং এন্টারপ্রাইজ ডিপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'Propagate errors ergonomically using Result<T, E> with the ? operator, design custom domain error types, and eliminate runtime panics.',
          bn: '? অপারেটর সহ Result<T, E> দিয়ে সহজে এরর পরিচালনা, কাস্টম এরর টাইপ তৈরি এবং রানটাইম প্যানিক প্রতিরোধ।'
        },
        {
          en: 'Tune release profiles with opt-level = 3, Link-Time Optimization (LTO), and assemble stripped static Docker binaries under 20 megabytes.',
          bn: 'opt-level = 3 ও LTO সহ রিলিজ প্রোফাইল কনফিগার করা এবং ২০ মেগাবাইটের নিচে ক্ষুদ্র স্ট্যাটিক ডকার বাইনারি তৈরি।'
        }
      ]
    }
  ],
  lessons: [
    CargoAndTheModuleLesson,
    MovesAndTheOwnerLesson,
    BorrowingAndTheReferenceLesson,
    LifetimesAndTheElisionLesson,
    MatchesAndThePatternLesson,
    TraitsAndTheGenericLesson,
    ResultsAndTheQuestionLesson,
    TheRustReleaseLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'High-Performance In-Memory Key-Value Store',
        bn: 'উচ্চ-গতির ইন-মেমোরি কি-ভ্যালু স্টোর'
      },
      brief: {
        en: 'Architect a thread-safe, concurrent in-memory caching engine utilizing Arc<RwLock<T>>, custom TTL eviction threads, and a durable write-ahead append log.',
        bn: 'Arc<RwLock<T>>, কাস্টম টিটিএল এভিকশন থ্রেড এবং একটি টেকসই রাইট-অ্যাহেড অ্যাপেন্ড লগ ব্যবহার করে একটি থ্রেড-সেফ ইন-মেমোরি ক্যাশিং ইঞ্জিন তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Asynchronous API Gateway & Rate Limiter',
        bn: 'অ্যাসিঙ্ক্রোনাস এপিআই গেটওয়ে এবং রেট লিমিটার'
      },
      brief: {
        en: 'Construct a resilient reverse proxy with token bucket rate limiting, structured tracing telemetry, and sub-millisecond request routing.',
        bn: 'টোকেন বাকেট রেট লিমিটিং, স্ট্রাকচার্ড ট্রেসিং টেলিমেট্রি এবং সাব-মিলিসেকেন্ড রিকোয়েস্ট রাউটিং সহ একটি টেকসই রিভার্স প্রক্সি তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Prefer passing borrowed slices (&str and &[T]) rather than owned collections (String and Vec<T>) to eliminate unnecessary heap allocation churn.',
      bn: 'অপ্রয়োজনীয় হিপ মেমোরি খরচ রোধ করতে ওনড কালেকশনের (String ও Vec<T>) বদলে ধার করা স্লাইস (&str ও &[T]) ব্যবহার করুন।'
    },
    {
      en: 'Design architectures around single-ownership hierarchies and clear borrowing contracts rather than wrapping everything in complex smart pointers.',
      bn: 'সবকিছুকে জটিল স্মার্ট পয়েন্টারে না মুড়িয়ে একক-মালিকানা হায়ারার্কি এবং পরিষ্কার বরোয়িং চুক্তির ওপর সিস্টেম ডিজাইন করুন।'
    },
    {
      en: 'Utilize the ? try operator with structured domain error enums to bubble errors predictably without resorting to unwrap() in production code.',
      bn: 'প্রোডাকশন কোডে unwrap() এড়িয়ে কাঠামোগত এরর এনামের সাথে ? অপারেটর ব্যবহার করে সুশৃঙ্খলভাবে এরর হ্যান্ডেল করুন।'
    },
    {
      en: 'Protect shared mutable state across threads with Arc<Mutex<T>> or Arc<RwLock<T>> rather than reaching for unsafe raw memory blocks.',
      bn: 'অনিরাপদ র মেমোরির ঝুঁকি না নিয়ে থ্রেড জুড়ে শেয়ার্ড মিউটেবল স্টেট সুরক্ষিত রাখতে Arc<Mutex<T>> বা Arc<RwLock<T>> ব্যবহার করুন।'
    },
    {
      en: 'Configure Link-Time Optimization (lto = true) and codegen-units = 1 in release profiles to unleash aggressive LLVM cross-crate optimizations.',
      bn: 'সর্বোচ্চ LLVM ক্রস-ক্রেট অপটিমাইজেশন পেতে রিলিজ প্রোফাইলে Link-Time Optimization (lto = true) এবং codegen-units = 1 সেট করুন।'
    },
    {
      en: 'Require strict match exhaustiveness without universal catch-all wildcards on domain enums so compiler errors flag unhandled state additions.',
      bn: 'ডোমেন এনামে ওয়াইল্ডকার্ড এড়িয়ে কঠোর পূর্ণাঙ্গ ম্যাচিং বাধ্যতামূলক করুন যাতে নতুন ভ্যারিয়েন্ট যোগ হলে কম্পাইলার নিজে থেকেই বাদ পড়া কোড ধরিয়ে দেয়।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What occurs physically in memory during a Move in Rust, and how does it prevent double-free vulnerabilities?',
        bn: 'Rust-এ একটি মুভ (Move) চলাকালীন মেমোরিতে শারীরিকভাবে কী ঘটে এবং কীভাবে এটি ডাবল-ফ্রি দুর্বলতা দূর করে?'
      },
      a: {
        en: 'A Move performs a shallow copy of the 24-byte stack header (pointer, length, capacity) to the new owner variable while the heap buffer stays untouched. Crucially, the compiler invalidates the source variable. When the function returns, only the single active owner executes Drop::drop(), completely eliminating double-free defects.',
        bn: 'মুভের সময় স্ট্যাকের ২৪-বাইট হেডারটি (পয়েন্টার, দৈর্ঘ্য, ক্যাপাসিটি) নতুন ভেরিয়েবলে অগভীর কপি হয় কিন্তু হিপ বাফার অক্ষত থাকে। কম্পাইলার তাৎক্ষণিকভাবে মূল ভেরিয়েবলকে নিষ্ক্রিয় করে দেয়। স্কোপ শেষ হলে কেবল বর্তমান সক্রিয় মালিকটি Drop মেথড চালায়, যা ডাবল-ফ্রি বাগ চিরতরে বন্ধ করে।'
      }
    },
    {
      q: {
        en: 'How does the cardinal "Aliasing XOR Mutability" invariant eliminate data races at compile time?',
        bn: 'মৌলিক "এলিয়াসিং বনাম মিউটেবিলিটি" নিয়ম কীভাবে কম্পাইল-টাইমেই ডেটা রেস চিরতরে নির্মূল করে?'
      },
      a: {
        en: 'A data race requires two threads accessing identical memory concurrently where at least one write occurs. By strictly dictating that data may either have any number of shared read references (&T) OR exactly 1 exclusive write reference (&mut T) but never both, concurrent conflicting writes become impossible.',
        bn: 'একই মেমোরিতে একাধিক থ্রেড একসাথে অ্যাক্সেস করলে এবং অন্তত একটি থ্রেড লেখার চেষ্টা করলে ডেটা রেস ঘটে। Rust কঠোরভাবে নিশ্চিত করে যে একটি ডেটায় হয় যেকোনো সংখ্যক রিড রেফারেন্স (&T) থাকবে অথবা ঠিক ১ টি এক্সক্লুসিভ রাইট রেফারেন্স (&mut T) থাকবে; ফলে সাংঘর্ষিক রাইট ঘটা কম্পাইল-টাইমেই অসম্ভব।'
      }
    },
    {
      q: {
        en: 'What is the performance and architectural difference between static dispatch with impl Trait and dynamic dispatch with dyn Trait?',
        bn: 'impl Trait যুক্ত স্ট্যাটিক ডিসপ্যাচ এবং dyn Trait যুক্ত ডায়নামিক ডিসপ্যাচের মধ্যে পারফরম্যান্স ও স্থাপত্যিক পার্থক্য কী?'
      },
      a: {
        en: 'Static dispatch uses monomorphization at compile time, duplicating function bodies for each concrete type to deliver direct CPU call instructions with 0 ns indirect lookup penalty and full inlining. Dynamic dispatch uses a 16-byte fat pointer (8 bytes data + 8 bytes vtable) to resolve methods at runtime, allowing heterogeneous collections.',
        bn: 'স্ট্যাটিক ডিসপ্যাচ কম্পাইল-টাইমে প্রতিটি টাইপের জন্য আলাদা ফাংশন কপি তৈরি করে, যা ০ ন্যানোসেকেন্ড ওভারহেডে সরাসরি কল এবং কোড ইনলাইনিং দেয়। আর ডায়নামিক ডিসপ্যাচ ১৬-বাইটের ফ্যাট পয়েন্টার (৮-বাইট ডেটা + ৮-বাইট ভি-টেবিল) দিয়ে রানটাইমে মেথড খুঁজে নেয়, যা ভিন্ন ভিন্ন টাইপের অবজেক্ট এক তালিকায় রাখার সুবিধা দেয়।'
      }
    },
    {
      q: {
        en: 'What is the difference between an immutable reference &\'static str and the trait bound T: \'static in generic programming?',
        bn: 'জেনেরিক প্রোগ্রামিংয়ে ইমিউটেবল রেফারেন্স &\'static str এবং ট্রেইট বাউন্ড T: \'static এর মধ্যে পার্থক্য কী?'
      },
      a: {
        en: '"&\'static str" is a borrowed pointer pointing to data guaranteed to survive for the entire lifetime of the program (such as baked binary string literals). In contrast, "T: \'static" means the type T contains NO non-static borrowed references, proving the type is capable of living indefinitely without dangling. An owned String satisfies T: \'static.',
        bn: '"&\'static str" হলো চিরস্থায়ী তথ্যের একটি ধার করা পয়েন্টার যা পুরো প্রোগ্রাম চলাকালে বাঁচে (যেমন বাইনারিতে খোদাই করা স্ট্রিং)। অপরদিকে "T: \'static" মানে হলো টাইপ T কোনো অস্থায়ী ধার করা পয়েন্টার রাখে না, ফলে এটি অনির্দিষ্টকাল বেঁচে থাকতে সক্ষম। নিজস্ব মেমোরিযুক্ত String টাইপ T: \'static পূরণ করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Cloudflare Workers proxy migration to Rust: cut p99 tail latencies by 70 percent and eliminated garbage collection pauses.',
      bn: 'ক্লাউডফ্লেয়ার ওয়ার্কার্স প্রক্সি Rust-এ মাইগ্রেশন: p99 টেল লেটেন্সি ৭০ শতাংশ কমিয়ে এনেছে এবং সমস্ত গার্বেজ কালেকশন বিরতি মুছে ফেলেছে।'
    },
    {
      en: 'Discord voice gateway transition from Go to Rust: solved 2-minute GC latency spikes by achieving deterministic memory reclamation.',
      bn: 'ডিসকর্ড ভয়েস গেটওয়ে Go থেকে Rust-এ রূপান্তর: সুনির্দিষ্ট মেমোরি পরিষ্কারের মাধ্যমে প্রতি ২ মিনিটের গার্বেজ কালেকশনজনিত স্পাইক নির্মূল করেছে।'
    },
    {
      en: 'Amazon Web Services Firecracker microVM: built a secure, serverless virtualization engine in Rust with sub-5 millisecond boot times.',
      bn: 'অ্যামাজন ওয়েব সার্ভিসেস ফায়ারক্র্যাকার মাইক্রোভিএম: Rust দিয়ে তৈরি একটি নিরাপদ সার্ভারলেস ভার্চুয়ালাইজেশন ইঞ্জিন যা ৫ মিলিসেকেন্ডের কম সময়ে বুট হয়।'
    },
    {
      en: 'Figma multiplayer synchronization engine: re-architected collaborative document syncing in Rust, slashing server memory usage by 80 percent.',
      bn: 'ফিগমা মাল্টিপ্লেয়ার সিঙ্ক ইঞ্জিন: কোলাবোরেটিভ ডকুমেন্ট সিঙ্কিং ইঞ্জিন Rust-এ পুনর্নির্মাণ করে সার্ভারের মেমোরি খরচ ৮০ শতাংশ কমিয়েছে।'
    }
  ]
};
