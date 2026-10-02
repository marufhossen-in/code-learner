import type { Lesson } from '../../../lib/types';

export const CargoAndTheModuleLesson: Lesson = {
  slug: 'cargo-and-the-module',
  tech: 'lang-rust',
  title: {
    en: 'Cargo, Modules & The Crate Ecosystem',
    bn: 'কার্গো, মডিউল এবং ক্রেট ইকোসিস্টেম'
  },
  summary: {
    en: 'Get started with the Rust packaging, module, and build architecture. Learn beginner Cargo setup, structure binaries and libraries with Cargo.toml, organize visibility across the module tree using pub, manage workspace monorepos, and configure compiler release profiles with LTO optimization.',
    bn: 'Rust-এর প্যাকেজিং, মডিউল এবং বিল্ড আর্কিটেকচার দিয়ে শুরু করুন। নতুনদের জন্য কার্গো সেটআপ, Cargo.toml দিয়ে বাইনারি ও লাইব্রেরি তৈরি, pub কি-ওয়ার্ড দিয়ে মডিউল ট্রির ভিজিবিলিটি নিয়ন্ত্রণ, ওয়ার্কস্পেস মনোরেপো পরিচালনা এবং LTO অপটিমাইজেশন সহ কম্পাইলার রিলিজ প্রোফাইল কনফিগারেশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'cargo-and-manifest-architecture-heading',
      text: {
        en: 'The Cargo Build Tool, Package Manifests, and Crates',
        bn: 'কার্গো বিল্ড টুল, প্যাকেজ ম্যানিফেস্ট এবং ক্রেটস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C and C++, managing third-party libraries requires complex build orchestrators like Make or CMake. In Rust (the memory-safe systems programming language), the official package manager and build orchestrator is Cargo. Cargo automates compiling source code, downloading dependencies from crates.io, executing automated unit tests, and producing release binaries. A project is configured via two files: "Cargo.toml" (the human-authored manifest declaring packages and dependencies) and "Cargo.lock" (the deterministic build lockfile pinning exact cryptographic dependency versions). A crate is the fundamental unit of compilation in Rust, taking the form of either an executable binary crate (rooted at "main.rs" inside src) or a reusable library crate (rooted at "lib.rs" inside src).',
        bn: 'C এবং C++ ভাষায় লাইব্রেরি সংযোগ করতে Make বা CMake-এর মতো জটিল বিল্ড কনফিগারেশনের প্রয়োজন হয়। কিন্তু Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা)-এ অফিশিয়াল প্যাকেজ ম্যানেজার এবং বিল্ড সিস্টেম হলো কার্গো (Cargo)। কার্গো নিজে থেকেই সোর্স কোড কম্পাইল করে, crates.io থেকে ডিপেন্ডেন্সি ডাউনলোড করে, ইউনিট টেস্ট চালায় এবং প্রোডাকশন বাইনারি তৈরি করে। একটি প্রজেক্ট দুটি ফাইলের ওপর দাঁড়ায়: "Cargo.toml" (প্যাকেজ এবং ডিপেন্ডেন্সি ঘোষণার মানব-পাঠ্য ম্যানিফেস্ট) এবং "Cargo.lock" (ডিপেন্ডেন্সির নিখুঁত সংস্করণ লক করে রাখা ফাইল)। Rust-এ কম্পাইলেশনের মূল একক হলো ক্রেট (crate), যা src ফোল্ডারে "main.rs" দিয়ে একটি এক্সিকিউটেবল বাইনারি অথবা src ফোল্ডারে "lib.rs" দিয়ে একটি পুনর্ব্যবহারযোগ্য লাইব্রেরি হতে পারে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Module visibility tree: Granular privacy boundaries enforced by pub, pub(crate), and pub(super) across hierarchical namespaces.',
        bn: 'চিত্র ১: মডিউল ভিজিবিলিটি ট্রি: pub, pub(crate) এবং pub(super) দ্বারা হায়ারার্কিকাল নেমস্পেসে নিয়ন্ত্রিত সূক্ষ্ম প্রাইভেসি সীমানা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST MODULE PRIVACY TREE &amp; SCOPE QUALIFIERS</text>

  <!-- Root Crate Node -->
  <g transform="translate(320, 55)">
    <rect width="200" height="45" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
    <text x="100" y="22" fill="#ffffff" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">crate root (src/lib.rs)</text>
    <text x="100" y="38" fill="#e0f2fe" font-size="9" font-family="sans-serif" text-anchor="middle">Top-level namespace boundary</text>
  </g>

  <!-- Left Branch: Public Network Module -->
  <g transform="translate(60, 135)">
    <rect width="320" height="165" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="320" height="30" rx="8" fill="#059669" />
    <text x="160" y="20" fill="#ffffff" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">pub mod network</text>

    <!-- Public Function -->
    <rect x="15" y="42" width="290" height="45" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="62" fill="#34d399" font-size="10" font-family="monospace">pub fn connect()</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Visible to external crates and apps</text>

    <!-- Private Function -->
    <rect x="15" y="100" width="290" height="45" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="120" fill="#f87171" font-size="10" font-family="monospace">fn perform_handshake() [private]</text>
    <text x="25" y="136" fill="#94a3b8" font-size="9" font-family="sans-serif">Hidden inside 'network' module only</text>
  </g>

  <!-- Right Branch: Crate-Internal Storage Module -->
  <g transform="translate(460, 135)">
    <rect width="320" height="165" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="320" height="30" rx="8" fill="#d97706" />
    <text x="160" y="20" fill="#ffffff" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">pub(crate) mod storage</text>

    <!-- pub(crate) Item -->
    <rect x="15" y="42" width="290" height="45" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="62" fill="#fbbf24" font-size="10" font-family="monospace">pub(crate) fn commit_block()</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Visible anywhere inside this crate; hidden outside</text>

    <!-- pub(super) Item -->
    <rect x="15" y="100" width="290" height="45" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="120" fill="#38bdf8" font-size="10" font-family="monospace">pub(super) fn flush_page()</text>
    <text x="25" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Visible only to direct parent module</text>
  </g>

  <!-- Connecting Lines -->
  <path d="M 370 100 L 220 135" stroke="#38bdf8" stroke-width="2" />
  <path d="M 470 100 L 620 135" stroke="#38bdf8" stroke-width="2" />
</svg>`
    },
    {
      type: 'heading',
      id: 'module-visibility-and-release-profiles-heading',
      text: {
        en: 'Module Privacy Qualifiers and Compiler Release Profiles',
        bn: 'মডিউল প্রাইভেসি কোয়ালিফায়ার এবং কম্পাইলার রিলিজ প্রোফাইল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Rust, all items (functions, structs, and enums) are strictly private to their declaring module by default. To expose items outward, developers apply targeted visibility qualifiers. While "pub" exposes an item globally as part of the public API, "pub(crate)" restricts visibility strictly to the current crate, protecting internal architectures from external consumers. Similarly, "pub(super)" makes an item visible solely to the direct parent module. When building for production, Cargo provides release profiles configured in Cargo.toml. Developers specify "opt-level = 3", "lto = true" (Link-Time Optimization), and "codegen-units = 1" to enable whole-program optimization, shrinking binary footprints and generating peak runtime throughput.',
        bn: 'Rust-এ যেকোনো উপাদান (ফাংশন, স্ট্রাক্ট ও এনাম) ডিফল্টভাবে তার মূল মডিউলের ভেতরে সম্পূর্ণ প্রাইভেট থাকে। কোনো কিছু বাইরে উন্মুক্ত করতে সুনির্দিষ্ট ভিজিবিলিটি কোয়ালিফায়ার প্রয়োগ করতে হয়। "pub" কি-ওয়ার্ড কোনো উপাদানকে পাবলিক এপিআই হিসেবে সবার জন্য উন্মুক্ত করে। অপরদিকে "pub(crate)" কেবল বর্তমান ক্রেটের ভেতরের কোডে দৃশ্যমান রাখে, যা অভ্যন্তরীণ স্থাপত্য সুরক্ষিত রাখে। একইভাবে "pub(super)" কেবল সরাসরি প্যারেন্ট মডিউলের কাছে দৃশ্যমান করে। প্রোডাকশন বিল্ডের ক্ষেত্রে Cargo.toml ফাইলে রিলিজ প্রোফাইল কনফিগার করা যায়। ডেভেলপাররা "opt-level = 3", "lto = true" (লিঙ্ক-টাইম অপটিমাইজেশন) এবং "codegen-units = 1" সেট করে পুরো প্রোগ্রামের গভীর অপটিমাইজেশন নিশ্চিত করেন, যা বাইনারির আকার কমিয়ে সর্বোচ্চ গতি এনে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Cargo dependency resolution and module visibility boundary enforcement.',
        bn: 'কার্গো ডিপেন্ডেন্সি সমাধান এবং মডিউল প্রাইভেসি সীমানা নিয়ন্ত্রণের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Cargo Dependency Resolution and Module Tree Visibility Checking

export interface ModuleItem {
  name: string;
  visibility: 'private' | 'pub' | 'pub_crate' | 'pub_super';
  declaringModule: string;
}

export class ModulePrivacyGuard {
  public static canAccess(
    item: ModuleItem,
    callerModule: string,
    isExternalCrate: boolean
  ): boolean {
    if (isExternalCrate) {
      // External crates can only ever access globally public items
      return item.visibility === 'pub';
    }

    switch (item.visibility) {
      case 'pub':
        return true;
      case 'pub_crate':
        // Accessible from any module inside the same crate
        return true;
      case 'pub_super': {
        // Accessible by sibling modules or parent module
        const parentOfItem = item.declaringModule.split('::').slice(0, -1).join('::');
        return callerModule === parentOfItem || callerModule.startsWith(parentOfItem);
      }
      case 'private':
      default:
        // Accessible only within the exact same declaring module
        return callerModule === item.declaringModule;
    }
  }
}

// Module Tree Items
const items: ModuleItem[] = [
  { name: 'connect', visibility: 'pub', declaringModule: 'crate::network' },
  { name: 'handshake', visibility: 'private', declaringModule: 'crate::network' },
  { name: 'commit_block', visibility: 'pub_crate', declaringModule: 'crate::storage' },
  { name: 'flush_page', visibility: 'pub_super', declaringModule: 'crate::storage::engine' }
];

// Case 1: External crate attempting to access public and crate-internal items
console.log('External access to connect():', ModulePrivacyGuard.canAccess(items[0], 'app', true)); // true
console.log('External access to commit_block():', ModulePrivacyGuard.canAccess(items[2], 'app', true)); // false

// Case 2: Internal module (crate::network) accessing crate-internal items
console.log('Internal crate access to commit_block():', ModulePrivacyGuard.canAccess(items[2], 'crate::network', false)); // true

// Case 3: Sibling module trying to call private handshake()
console.log('Storage access to private handshake():', ModulePrivacyGuard.canAccess(items[1], 'crate::storage', false)); // false`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cargo Manifest',
          def: {
            en: 'The Cargo.toml configuration file defining project metadata, dependencies, build profiles, and workspace settings.',
            bn: 'Cargo.toml ফাইল যাতে প্রজেক্ট মেটাডেটা, ডিপেন্ডেন্সি, বিল্ড প্রোফাইল এবং ওয়ার্কস্পেস সেটিংস নির্ধারিত থাকে।'
          }
        },
        {
          term: 'Crate',
          def: {
            en: 'The primary compilation unit in Rust, produced either as an executable binary crate or a reusable library crate.',
            bn: 'Rust-এ কম্পাইলেশনের মূল একক, যা এক্সিকিউটেবল বাইনারি ক্রেট অথবা পুনর্ব্যবহারযোগ্য লাইব্রেরি ক্রেট হতে পারে।'
          }
        },
        {
          term: 'Module Privacy',
          def: {
            en: 'Default-private scoping model restricting access unless explicitly marked with pub, pub(crate), or pub(super).',
            bn: 'ডিফল্ট প্রাইভেট মডেল যা pub, pub(crate) বা pub(super) না লেখা পর্যন্ত অন্য মডিউলের অ্যাক্সেস নিষিদ্ধ রাখে।'
          }
        },
        {
          term: 'Link-Time Optimization (LTO)',
          def: {
            en: 'Compiler stage that analyzes and optimizes cross-crate code across object boundaries during final executable linking.',
            bn: 'কম্পাইলারের বিশেষ ধাপ যা চূড়ান্ত লিঙ্কিংয়ের সময় বিভিন্ন ক্রেটের মধ্যে কোড বিশ্লেষণ করে গতি বৃদ্ধি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cargo-lockfile-purpose-ex1',
      kind: 'mcq',
      topic: 'cargo-lock-deterministic-reproducible-builds',
      question: {
        en: 'What critical role does the "Cargo.lock" file perform in a Rust project repository?',
        bn: 'একটি Rust প্রজেক্ট রিপোজিটরিতে "Cargo.lock" ফাইলটি কোন গুরুত্বপূর্ণ ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It pins exact, deterministic cryptographic versions of all direct and transitive dependencies to ensure 100 percent reproducible builds across different machines',
          bn: 'এটি সমস্ত সরাসরি এবং পরোক্ষ ডিপেন্ডেন্সির নিখুঁত সংস্করণ ক্রিপ্টোগ্রাফিকভাবে লক করে রাখে যাতে যেকোনো মেশিনে ১০০ ভাগ একই বিল্ড তৈরি হয়'
        },
        {
          en: 'It locks the project directory with an AES-256 disk password',
          bn: 'এটি AES-256 ডিস্ক পাসওয়ার্ড দিয়ে প্রজেক্ট ডিরেক্টরিটি লক করে'
        },
        {
          en: 'It converts Rust source files into Python bytecode',
          bn: 'এটি Rust সোর্স ফাইলগুলোকে পাইথন বাইটকোডে রূপান্তর করে'
        },
        {
          en: 'Cargo.lock is an optional log file generated only when builds crash',
          bn: 'Cargo.lock হলো একটি ঐচ্ছিক লগ ফাইল যা কেবল বিল্ড ক্র্যাশ করলে তৈরি হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Cargo.lock ensures builds are fully reproducible across development and production.',
        bn: 'ডিপেন্ডেন্সির ভার্সন লক রাখার মাধ্যমে ভিন্ন মেশিনে একই বিল্ড নিশ্চিত হয়।'
      },
      explanation: {
        en: 'While Cargo.toml specifies permitted version ranges, Cargo.lock records the exact resolved package tree so subsequent builds on any machine are identical.',
        bn: 'ফলে টিমের সবার মেশিনে ও সিআই/সিডি সার্ভারে হুবহু একই কোড রান হয়।'
      }
    },
    {
      id: 'pub-crate-visibility-scope-ex2',
      kind: 'mcq',
      topic: 'pub-crate-visibility-qualifier-boundary',
      question: {
        en: 'What access permissions does the "pub(crate)" visibility qualifier grant to a struct or function in Rust?',
        bn: 'Rust-এ "pub(crate)" ভিজিবিলিটি কোয়ালিফায়ার একটি স্ট্রাক্ট বা ফাংশনে কী ধরনের অ্যাক্সেস সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'The item is accessible from any module within the current crate, but remains completely hidden and private to external crates or downstream users',
          bn: 'উপাদানটি বর্তমান ক্রেটের যেকোনো মডিউল থেকে অ্যাক্সেস করা যায়, কিন্তু বাইরের কোনো ক্রেট বা ব্যবহারকারীর কাছে সম্পূর্ণ লুকানো ও প্রাইভেট থাকে'
        },
        {
          en: 'The item is public only when compiled on Linux servers',
          bn: 'উপাদানটি কেবল লিনাক্স সার্ভারে কম্পাইল করার সময় পাবলিক থাকে'
        },
        {
          en: 'The item can be accessed by any website on the internet',
          bn: 'ইন্টারনেটের যেকোনো ওয়েবসাইট থেকে উপাদানটি সরাসরি কল করা যায়'
        },
        {
          en: 'pub(crate) was deprecated in Rust 2018',
          bn: 'Rust ২০১৮ সংস্করণে pub(crate) বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'pub(crate) limits exposure to the boundary of the current crate.',
        bn: 'এটি নিজের প্রজেক্টের সব ফাইলে কাজ করলেও লাইব্রেরির বাইরের কারো কাছে দৃশ্যমান হয় না।'
      },
      explanation: {
        en: 'pub(crate) enables rich modularity across internal packages without polluting the public API contract exposed to external consumers.',
        bn: 'এর মাধ্যমে লাইব্রেরির পাবলিক ইন্টারফেস একদম পরিচ্ছন্ন ও সুরক্ষিত রাখা যায়।'
      }
    },
    {
      id: 'release-profile-lto-opt-level-ex3',
      kind: 'mcq',
      topic: 'compiler-release-profile-lto-optimization',
      question: {
        en: 'Which Cargo.toml release profile settings are configured for maximum runtime execution speed and minimal binary footprint?',
        bn: 'সর্বোচ্চ রানটাইম গতি এবং ক্ষুদ্রতম বাইনারি সাইজ অর্জনের জন্য Cargo.toml-এ কোন রিলিজ প্রোফাইল কনফিগার করা হয়?'
      },
      options: [
        {
          en: 'opt-level = 3 with lto = true (Link-Time Optimization) and codegen-units = 1',
          bn: 'opt-level = 3 এর সাথে lto = true (লিঙ্ক-টাইম অপটিমাইজেশন) এবং codegen-units = 1'
        },
        {
          en: 'opt-level = 0 with debug symbols enabled',
          bn: 'opt-level = 0 এর সাথে ডিবাগ সিম্বল চালু রাখা'
        },
        {
          en: 'panic = "abort" while disabling the CPU cache registers',
          bn: 'panic = "abort" এর সাথে সিপিইউ ক্যাশ রেজিস্টার বন্ধ রাখা'
        },
        {
          en: 'Cargo does not support compiler profile customization',
          bn: 'কার্গো কোনো কম্পাইলার প্রোফাইল কাস্টমাইজেশন সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'opt-level = 3 enables maximum optimizations; lto optimizes across crate boundaries.',
        bn: '৩য় স্তরের অপটিমাইজেশন এবং LTO মিলিয়ে কম্পাইলার পুরো প্রোগ্রামের সেরা কোড তৈরি করে।'
      },
      explanation: {
        en: 'Setting codegen-units = 1 allows LLVM to perform aggressive cross-crate optimizations via Link-Time Optimization (LTO) at the cost of longer compilation times.',
        bn: 'কম্পাইলেশনে কিছুটা বাড়তি সময় লাগলেও তৈরি হওয়া অ্যাপটি অবিশ্বাস্য দ্রুত গতিতে চলে।'
      }
    },
    {
      id: 'cargo-workspace-monorepo-ex4',
      kind: 'mcq',
      topic: 'cargo-workspaces-shared-target-monorepos',
      question: {
        en: 'What architectural efficiency do Cargo Workspaces provide when developing large multi-crate microservices or monorepos?',
        bn: 'বড় মাল্টি-ক্রেট মাইক্রোসার্ভিস বা মনোরেপো তৈরির সময় কার্গো ওয়ার্কস্পেস কোন স্থাপত্যিক সুবিধা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'All member crates share a single unified "target" output directory and one shared "Cargo.lock" file, preventing duplicate compilation of shared dependencies',
          bn: 'সমস্ত সদস্য ক্রেট একটি একক "target" আউটপুট ডিরেক্টরি এবং একটি শেয়ার্ড "Cargo.lock" ব্যবহার করে, যা শেয়ার্ড ডিপেন্ডেন্সির পুনরাবৃত্তিমূলক কম্পাইলেশন বন্ধ করে'
        },
        {
          en: 'Workspaces automatically convert Rust code into web pages',
          bn: 'ওয়ার্কস্পেস স্বয়ংক্রিয়ভাবে Rust কোডকে ওয়েব পেজে রূপান্তর করে'
        },
        {
          en: 'Workspaces disable automated test suites to speed up builds',
          bn: 'বিল্ড দ্রুত করতে ওয়ার্কস্পেস অটোমেটেড টেস্ট বন্ধ করে দেয়'
        },
        {
          en: 'Workspaces limit the project to a maximum of 2 crates',
          bn: 'ওয়ার্কস্পেস প্রজেক্টের সাইজ সর্বোচ্চ ২ টি ক্রেটের মধ্যে সীমাবদ্ধ রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Workspaces share a common target directory and Cargo.lock across all sibling crates.',
        bn: 'একটি কমন আউটপুট ডিরেক্টরি শেয়ার করে ডিস্কের জায়গা এবং কম্পাইল সময় দুটোই বাঁচায়।'
      },
      explanation: {
        en: 'Without workspaces, compiling 5 sibling crates would compile common dependencies 5 separate times. Workspaces unify compilation into a shared target cache.',
        bn: 'ফলে বিশাল প্রজেক্টেও বারবার একই লাইব্রেরি কম্পাইল করার অপচয় রোধ হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-cargo-and-the-module',
    title: {
      en: 'Rust Cargo & Module Architecture Quiz',
      bn: 'Rust কার্গো এবং মডিউল আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-cargo-feature-flags-conditional-compilation',
        kind: 'mcq',
        topic: 'cargo-feature-flags-conditional-compilation',
        question: {
          en: 'How do Cargo "feature flags" enable efficient modular library distribution in the Rust ecosystem?',
          bn: 'কার্গো "ফিচার ফ্ল্যাগস" কীভাবে Rust ইকোসিস্টেমে দক্ষ মডুলার লাইব্রেরি বিতরণে সাহায্য করে?'
        },
        options: [
          {
            en: 'They allow downstream users to conditionally compile only the modules and dependencies they actually need, keeping final binary sizes lean',
            bn: 'তারা ব্যবহারকারীদের কেবল তাদের প্রয়োজনীয় মডিউল এবং ডিপেন্ডেন্সিগুলো শর্তসাপেক্ষে কম্পাইল করার সুযোগ দেয়, যা ফাইনাল বাইনারির সাইজ ছোট রাখে'
          },
          {
            en: 'Feature flags require payment per compile to the Rust foundation',
            bn: 'ফিচার ফ্ল্যাগ ব্যবহার করতে প্রতি কম্পাইলে ফি দিতে হয়'
          },
          {
            en: 'Feature flags disable the memory allocator',
            bn: 'ফিচার ফ্ল্যাগ মেমোরি অ্যালোকেটর নিষ্ক্রিয় করে দেয়'
          },
          {
            en: 'Feature flags were replaced by C macros in 2020',
            bn: '২০২০ সালে ফিচার ফ্ল্যাগ বাদ দিয়ে C ম্যাক্রো আনা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Features enable additive, conditional compilation of crate capabilities.',
          bn: 'প্রয়োজনীয় ফিচার অন করে এবং অপ্রয়োজনীয় লাইব্রেরি বাদ দিয়ে বাইনারি হালকা রাখা যায়।'
        },
        explanation: {
          en: 'Feature flags are additive compilation toggles. Consumers enable only what they need (e.g. "serde" support), avoiding compilation overhead for unused code.',
          bn: 'এর ফলে লাইব্রেরিতে শত সুবিধা থাকলেও আপনার অ্যাপে শুধু কাজের কোডটুকুই কম্পাইল হয়।'
        }
      },
      {
        id: 'quiz-cargo-clippy-linter-guarantees',
        kind: 'mcq',
        topic: 'cargo-clippy-static-analysis-idiomatic-rust',
        question: {
          en: 'What distinct purpose does "cargo clippy" serve compared to the standard "cargo check" command?',
          bn: 'সাধারণ "cargo check" কমান্ডের তুলনায় "cargo clippy" কোন স্বতন্ত্র উদ্দেশ্যে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'Clippy acts as an advanced static analysis linter, flagging non-idiomatic patterns, subtle algorithmic bugs, performance pitfalls, and unnecessary allocations',
            bn: 'ক্লিপ্পি একটি উন্নত স্ট্যাটিক অ্যানালাইসিস লিন্টার হিসেবে কাজ করে, যা অস্বভাবিক কোড প্যাটার্ন, সূক্ষ্ম অ্যালগরিদমিক বাগ, পারফরম্যান্স ঘাটতি এবং অপ্রয়োজনীয় মেমোরি খরচ চিহ্নিত করে'
          },
          {
            en: 'Clippy formats source files using tabs instead of spaces',
            bn: 'ক্লিপ্পি স্পেসের বদলে ট্যাব দিয়ে সোর্স কোড ফরম্যাট করে'
          },
          {
            en: 'Clippy compiles Rust code directly into x86 machine instructions',
            bn: 'ক্লিপ্পি Rust কোডকে সরাসরি x86 মেশিন কোডে রূপান্তর করে'
          },
          {
            en: 'cargo check was replaced by clippy in Rust 1.0',
            bn: 'Rust ১.০ সংস্করণে cargo check বাদ দিয়ে ক্লিপ্পি যুক্ত করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'cargo clippy provides comprehensive linter warnings for idiomatic, performant Rust.',
          bn: 'কোড কম্পাইল হলেও তা সেরা মানের কিনা তা নিশ্চিত করতে ক্লিপ্পি পরামর্শ দেয়।'
        },
        explanation: {
          en: 'While cargo check only verifies that code compiles without type errors, clippy analyzes code quality, detecting over 400 common anti-patterns and performance drains.',
          bn: '৪০০ টিরও বেশি সেরা নিয়মের আলোকে কোডকে নিখুঁত করার নির্দেশ দেয় ক্লিপ্পি।'
        }
      },
      {
        id: 'quiz-build-rs-script-capabilities',
        kind: 'mcq',
        topic: 'custom-build-scripts-build-rs-native-c-libraries',
        question: {
          en: 'What architectural power does a custom "build.rs" script provide to a Rust package before main compilation begins?',
          bn: 'মূল কম্পাইলেশন শুরু হওয়ার আগে একটি কাস্টম "build.rs" স্ক্রিপ্ট একটি Rust প্যাকেজে কোন স্থাপত্যিক ক্ষমতা প্রদান করে?'
        },
        options: [
          {
            en: 'It compiles native C/C++ dependencies, generates dynamic Rust source files (e.g. from protobuf or SQL schemas), and configures custom linker flags',
            bn: 'এটি নেটিভ C/C++ লাইব্রেরি কম্পাইল করে, ডায়নামিক Rust সোর্স ফাইল (যেমন protobuf বা SQL স্কিমা) তৈরি করে এবং কাস্টম লিঙ্কার ফ্ল্যাগ কনফিগার করে'
          },
          {
            en: 'It installs a new operating system onto the computer',
            bn: 'এটি কম্পিউটারে একটি নতুন অপারেটিং সিস্টেম ইনস্টল করে'
          },
          {
            en: 'It encrypts all hard drive sectors with a random hash',
            bn: 'এটি হার্ড ড্রাইভের সব সেক্টর এলোমেলো হ্যাশ দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'build.rs is executed exclusively inside web browsers',
            bn: 'build.rs কেবল ওয়েব ব্রাউজারের ভেতরে রান করানো যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'build.rs is a pre-build hook for native compilation and code generation.',
          bn: 'বিল্ড শুরুর আগে প্রয়োজনীয় অন্য ভাষার কোড কম্পাইল বা সোর্স তৈরির জন্য এটি ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Cargo runs build.rs as a build step before compiling the crate. This enables seamless bridging with legacy C codebases and automated code generation.',
          bn: 'ফলে অন্যান্য প্রাচীন সি লাইব্রেরি বা প্রোটোবাফ ফাইলের সাথে সরাসরি সংযোগ স্থাপন সহজ হয়।'
        }
      },
      {
        id: 'quiz-cargo-tree-dependency-inspection',
        kind: 'mcq',
        topic: 'cargo-tree-transitive-dependency-graph',
        question: {
          en: 'Why do systems engineers utilize "cargo tree" when auditing application security and dependency weight?',
          bn: 'অ্যাপ্লিকেশনের নিরাপত্তা এবং ডিপেন্ডেন্সির ওজন অডিট করার সময় সিস্টেম ইঞ্জিনিয়াররা কেন "cargo tree" ব্যবহার করেন?'
        },
        options: [
          {
            en: 'It displays a hierarchical visualization of all direct and transitive dependencies, revealing duplicate crate versions, security vulnerabilities, and bloat',
            bn: 'এটি সমস্ত সরাসরি এবং পরোক্ষ ডিপেন্ডেন্সির একটি স্তরভিত্তিক গ্রাফ উপস্থাপন করে, যার ফলে ডুপ্লিকেট ক্রেট ভার্সন, নিরাপত্তা দুর্বলতা ও ভারী কোড সহজেই চিহ্নিত হয়'
          },
          {
            en: 'It plants digital trees to offset server carbon emissions',
            bn: 'সার্ভারের কার্বন নিঃসরণ কমাতে এটি ডিজিটাল গাছ রোপণ করে'
          },
          {
            en: 'It converts crate source code into binary tree data structures',
            bn: 'এটি ক্রেটের সোর্স কোডকে বাইনারি ট্রি ডেটা স্ট্রাকচারে রূপান্তর করে'
          },
          {
            en: 'cargo tree was deprecated in Rust 2015',
            bn: 'Rust ২০১৫ সংস্করণে cargo tree বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'cargo tree shows the full transitive dependency graph.',
          bn: 'কোন লাইব্রেরি কীভাবে অন্য লাইব্রেরির ওপর নির্ভর করছে তা গ্রাফ আকারে দেখার কমান্ড।'
        },
        explanation: {
          en: 'cargo tree enables developers to identify multiple incompatible versions of the same library pulling in duplicate code or hidden security vulnerabilities.',
          bn: 'এর মাধ্যমে অবাঞ্ছিত ডুপ্লিকেট লাইব্রেরি খুঁজে বের করে অ্যাপ হালকা করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'moves-and-the-owner',
    title: {
      en: 'Ownership, Moves & Deterministic Drop',
      bn: 'ওনারশিপ, মুভ এবং নির্ধারিত ড্রপ'
    }
  }
};
