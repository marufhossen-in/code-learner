import type { Lesson } from '../../../lib/types';

export const dependencyLedgerLesson: Lesson = {
  slug: 'the-dependency-ledger',
  tech: 'node',
  title: {
    en: 'npm Ecosystem, package.json, Semantic Versioning & Lockfile Mechanics',
    bn: 'npm ইকোসিস্টেম, package.json, সেমান্টিক ভার্সনিং ও লকফাইল মেকানিজম'
  },
  summary: {
    en: 'Master package management and supply chain architecture across 10 structured topics, from the npm registry to package.json. Learn Semantic Versioning, lockfile integrity hashes, npm ci workflows, and monorepo workspaces.',
    bn: 'npm রেজিস্ট্রি থেকে শুরু করে package.json ম্যানিফেস্ট পর্যন্ত 10 টি বিষয়ে প্যাকেজ ম্যানেজমেন্ট আর্কিটেকচার আয়ত্ত করুন। জানুন সেমান্টিক ভার্সনিং, লকফাইল ইন্টিগ্রিটি হ্যাশ, npm ci ওয়ার্কফ্লো এবং মনোরেপো ওয়ার্কস্পেস।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-evented-backbone',
    title: {
      en: 'The Evented Backbone: EventEmitter, Custom Events & Event-Driven Architecture',
      bn: 'ইভেন্টেড ব্যাকবোন: EventEmitter, কাস্টম ইভেন্টস ও ইভেন্ট-চালিত আর্কিটেকচার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The npm Ecosystem: Registry, CLI & Distribution', bn: '১. npm ইকোসিস্টেম: রেজিস্ট্রি, সিএলআই ও বিতরণ' } },
    {
      type: 'para',
      text: {
        en: 'npm (Node Package Manager) is the official package registry and command-line utility for the JavaScript runtime. With over 3 million published packages, npm allows developers to publish, install, and distribute reusable libraries and tools. Packages can be installed locally per project or globally across the operating system.',
        bn: 'npm (Node Package Manager) হলো জাভাস্ক্রিপ্ট রানটাইমের অফিশিয়াল প্যাকেজ রেজিস্ট্রি ও কমান্ড-লাইন টুল। 3 মিলিয়ন বা 30 লক্ষেরও বেশি প্যাকেজ নিয়ে এটি বিশ্বের বৃহত্তম সফটওয়্যার রেজিস্ট্রি। এর সাহায্যে ডেভেলপাররা সহজেই কোড লাইব্রেরি তৈরি, ইনস্টল এবং বিতরণ করতে পারেন। প্যাকেজগুলো লোকালি প্রজেক্টে অথবা গ্লোবালি অপারেটিং সিস্টেমে ইনস্টল করা যায়।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Initialize a new package.json file interactively:
npm init -y

# Install an external package locally into node_modules:
npm install express

# Install a developer tool globally:
npm install -g nodemon

# Inspect installed package version:
npm list --depth=0`,
      caption: {
        en: 'The npm CLI coordinates package installation and script orchestration across projects.',
        bn: 'npm সিএলআই প্রজেক্টে বিভিন্ন থার্ড-পার্টি লাইব্রেরি ও টুলস ইনস্টল ও পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Anatomy of package.json: Manifest Configuration', bn: '২. package.json-এর গঠন: ম্যানিফেস্ট কনফিগারেশন' } },
    {
      type: 'para',
      text: {
        en: 'The package.json file is the manifest defining the identity, dependencies, scripts, and runtime requirements of a project. Core fields include "name", "version", "type" ("module" or "commonjs"), "scripts" (custom command aliases), and "engines" (specifying supported Node.js versions).',
        bn: 'package.json হলো প্রজেক্টের কেন্দ্রীয় ম্যানিফেস্ট যা প্রজেক্টের নাম, ভার্সন, স্ক্রিপ্ট এবং রানটাইম কনফিগারেশন ধারণ করে। এর মূল ফিল্ডগুলো হলো: "name", "version", "type" ("module" বা "commonjs"), "scripts" (কাস্টম টার্মিনাল কমান্ড শর্টকাট) এবং "engines" (সাপোর্টেড Node.js ভার্সন লিমিট)।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "name": "codeshikhon-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "node --watch src/server.js",
    "test": "node --test"
  },
  "engines": {
    "node": ">=20.0.0"
  }
}`,
      caption: {
        en: 'package.json configures execution scripts, module types, and engine constraints.',
        bn: 'package.json স্ক্রিপ্ট কমান্ড, মডিউল টাইপ এবং প্রয়োজনীয় নোড ভার্সন নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Dependency Tiers: dependencies vs devDependencies', bn: '৩. ডিপেনডেন্সির শ্রেণিবিভাগ: dependencies বনাম devDependencies' } },
    {
      type: 'para',
      text: {
        en: 'Dependencies are categorized into distinct groups: 1) dependencies (--save): required for the application to run in production (e.g. express, pg); 2) devDependencies (--save-dev): only needed during development or building (e.g. vitest, typescript, eslint); 3) peerDependencies: libraries expected to be installed by the consuming host project.',
        bn: 'প্যাকেজ মূলত ৩ ভাগে বিভক্ত: ১) dependencies: যা প্রোডাকশনে লাইভ সাইট রান হতে সরাসরি দরকার (যেমন express, pg); ২) devDependencies: যা শুধুমাত্র ডেভেলপমেন্ট বা কোড বিল্ড করার সময় দরকার (যেমন typescript, eslint, vitest). ৩) peerDependencies: মূল প্লাগইন হিসেবে প্যারেন্ট প্রজেক্টে থাকা আবশ্যক এমন প্যাকেজ।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Save to production dependencies:
npm install express pg

# Save to development dependencies:
npm install -D typescript @types/node vitest

# In production Docker builds, install ONLY runtime dependencies:
# npm ci --omit=dev  (Saves 80% container image size!)`,
      caption: {
        en: 'Separating devDependencies allows lean production Docker images by omitting build tools.',
        bn: 'devDependencies আলাদা রাখলে প্রোডাকশন ডকার ইমেজ অনেক হালকা ও দ্রুতগতির হয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Semantic Versioning: MAJOR.MINOR.PATCH Mechanics', bn: '৪. সেমান্টিক ভার্সনিং: MAJOR.MINOR.PATCH মেকানিজম' } },
    {
      type: 'para',
      text: {
        en: 'Semantic Versioning (SemVer) standardizes version numbers using the format MAJOR.MINOR.PATCH (e.g. 2.4.1): 1) MAJOR increases when you make incompatible API-breaking changes; 2) MINOR increases when adding backwards-compatible functionality; 3) PATCH increases when releasing backwards-compatible bug fixes.',
        bn: 'সেমান্টিক ভার্সনিং (SemVer) ৩টি সংখ্যার মাধ্যমে ভার্সন নির্ধারণ করে MAJOR.MINOR.PATCH (যেমন ২.৪.১): ১) MAJOR: কোনো ব্রেকিং পরিবর্তন আনলে যা আগের কোড ভেঙে দিতে পারে; ২) MINOR: পেছনের ভার্সনের সাথে সামঞ্জস্য রেখে নতুন কোনো ফিচার আনলে. ৩) PATCH: পেছনের কোনো বাগ বা এরর ফিক্স করলে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// SemVer transition breakdown:
// 1.0.0 -> Initial stable release
// 1.0.1 -> Bug fix (PATCH: backwards-compatible)
// 1.1.0 -> Added new search API (MINOR: backwards-compatible)
// 2.0.0 -> Changed function signatures (MAJOR: BREAKING CHANGE!)

console.log("SemVer communicates breaking vs safe updates mathematically");
// Output: SemVer communicates breaking vs safe updates mathematically`,
      caption: {
        en: 'SemVer provides mathematical guarantees regarding breaking API compatibility.',
        bn: 'SemVer নিয়ম মেনে আপডেট করলে প্রজেক্টে ব্রেকিং চেঞ্জের ঝুঁকি সহজে বোঝা যায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Version Range Glyphs: Caret (^) vs Tilde (~) vs Exact', bn: '৫. ভার্সন রেঞ্জ গ্লিফ: Caret (^) বনাম Tilde (~) বনাম হুবহু ভার্সন' } },
    {
      type: 'para',
      text: {
        en: 'npm uses prefix glyphs to specify which future versions can be downloaded. Caret (^1.2.3) allows backwards-compatible MINOR and PATCH updates up to 2.0.0. Tilde (~1.2.3) allows only PATCH bug-fixes up to 1.3.0. Exact (1.2.3) locks installation strictly to that exact version without upgrades.',
        bn: 'npm ভার্সন নম্বরের আগে বিশেষ চিহ্ন ব্যবহার করে। ক্যারেট (^1.2.3) যেকোনো সামঞ্জস্যপূর্ণ MINOR এবং PATCH গ্রহণ করে 2.0.0 পর্যন্ত। টিল্ডে (~1.2.3) শুধুমাত্র PATCH বাগ ফিক্স গ্রহণ করে 1.3.0 পর্যন্ত। আর Exact (1.2.3) কোনো প্রকার অটো-আপডেট ছাড়া হুবহু এই ভার্সনটিকেই লক করে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "dependencies": {
    "loose-package": "^1.4.0",  // Accepts 1.4.1, 1.5.0, but NOT 2.0.0
    "strict-package": "~2.1.0", // Accepts 2.1.1, 2.1.2, but NOT 2.2.0
    "frozen-package": "3.0.2"   // Accepts ONLY exact 3.0.2
  }
}`,
      caption: {
        en: 'Caret allows minor/patch updates, tilde allows patches only, and exact locks versions.',
        bn: 'ক্যারেট মাইনর/প্যাচ সমর্থন করে, টিল্ডে কেবল প্যাচ নেয় এবং এক্সেক্ট সম্পূর্ণ অপরিবর্তিত রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Deterministic Builds: The Role of package-lock.json', bn: '৬. ডিটারমিনিস্টিক বিল্ড: package-lock.json-এর ভূমিকা' } },
    {
      type: 'para',
      text: {
        en: 'While package.json defines allowed version ranges, package-lock.json locks down the entire dependency tree with 100% determinism. It records the exact version of every nested package, its resolved tarball download URL, and a cryptographic SHA-512 integrity hash to guarantee that every developer and production server builds identical code.',
        bn: 'package.json শুধু ভার্সনের রেঞ্জ বলে দেয়, কিন্তু package-lock.json পুরো প্রজেক্টের প্রতিটি ডিপেনডেন্সির হুবহু ভার্সন, ডাউনলোড লিংক এবং SHA-512 ক্রিপ্টোগ্রাফিক হ্যাশ সিল করে রাখে। এর ফলে সব টিম মেম্বার এবং প্রোডাকশন সার্ভারে হুবহু একই কোড ডাউনলোড হওয়া নিশ্চিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `// Inside package-lock.json:
{
  "node_modules/express": {
    "version": "4.19.2",
    "resolved": "https://registry.npmjs.org/express/-/express-4.19.2.tgz",
    "integrity": "sha512-5gbiCr...=="
  }
}`,
      caption: {
        en: 'Integrity hashes and resolved URLs ensure tamper-proof, identical package installations.',
        bn: 'ইন্টিগ্রিটি হ্যাশ ও ইউআরএল অপরিবর্তিত ও নিরাপদ প্যাকেজ ডাউনলোড নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Clean-Room Installs: npm ci vs npm install in CI/CD', bn: '৭. ক্লিন-রুম ইনস্টলেশন: CI/CD-তে npm ci বনাম npm install' } },
    {
      type: 'para',
      text: {
        en: 'In continuous integration (CI) pipelines and production Dockerfiles, NEVER run "npm install". Running npm install can renegotiate dependency versions and mutate your lockfile. Always run "npm ci" (Clean Install), which deletes node_modules, reads package-lock.json strictly, and fails immediately if the lockfile is out of sync.',
        bn: 'সিআই/সিডি পাইপলাইন বা ডকার ফাইলে কখনো "npm install" চালানো উচিত নয়, কারণ এটি ভার্সন বদলে লকফাইল আপডেট করে দিতে পারে। সর্বদা "npm ci" (Clean Install) চালাতে হয়, যা আগের node_modules মুছে ফেলে কঠোরভাবে package-lock.json অনুযায়ী হুবহু ফাইল নামায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard production Docker build step:
# 1. Copy only lockfiles first (enables Docker layer caching):
# COPY package.json package-lock.json ./

# 2. Strict deterministic installation omitting dev tools:
npm ci --omit=dev

# Result: 2-3x faster installation, zero unexpected version drift!`,
      caption: {
        en: 'npm ci guarantees reproducible builds and prevents accidental dependency upgrades in production.',
        bn: 'npm ci নিশ্চিত করে কোনো অপ্রত্যাশিত ভার্সন পরিবর্তন ছাড়াই নিখুঁত প্রোডাকশন বিল্ড।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. node_modules Hoisting & Phantom Dependencies', bn: '৮. node_modules হোইস্টিং ও ফ্যান্টম ডিপেনডেন্সি' } },
    {
      type: 'para',
      text: {
        en: 'To prevent duplicate packages, npm hoists shared transitive dependencies to the root node_modules directory. This introduces the "Phantom Dependency" hazard: your code can accidentally require a package you never declared in package.json because a third-party dependency installed it. If that dependency drops the library, your production server crashes.',
        bn: 'ডুপ্লিকেট এড়াতে npm সব সাব-ডিপেনডেন্সিকে তুলে এনে রুট node_modules-এ রাখে (যাকে Hoisting বলে)। এতে ফ্যান্টম ডিপেনডেন্সি বিপদ ঘটে: আপনি package.json-এ ঘোষণা না করেও অন্য লাইব্রেরির আনা প্যাকেজ ভুলবশত নিজের ফাইলে ইমপোর্ট করে ফেলতে পারেন। পরে ওই লাইব্রেরি সরে গেলে আপনার অ্যাপ ক্র্যাশ করবে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ DANGEROUS PHANTOM DEPENDENCY:
// import lodash from 'lodash';
// If package.json does NOT list lodash in "dependencies",
// this import only works accidentally because another library installed it!

// ✅ SAFE PRACTICE:
// Always run: npm install lodash --save
// Explicitly list all imported dependencies in your manifest!

console.log("Explicitly declaring dependencies eliminates invisible phantom crashes");
// Output: Explicitly declaring dependencies eliminates invisible phantom crashes`,
      caption: {
        en: 'Always explicitly declare any package you import in your own codebase in package.json.',
        bn: 'কোডে ব্যবহৃত প্রতিটি লাইব্রেরি সর্বদা সরাসরি নিজের package.json-এ ঘোষণা করতে হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Supply Chain Security: npm audit & CVE Remediation', bn: '৯. সাপ্লাই চেইন সিকিউরিটি: npm audit ও নিরাপত্তা ফিক্স' } },
    {
      type: 'para',
      text: {
        en: 'Third-party packages introduce supply chain security risks. Running "npm audit" scans your entire dependency graph against known Common Vulnerabilities and Exposures (CVE) databases. Never run "npm audit fix --force" blindly as it can introduce major breaking changes. Instead, review advisories and update packages deliberately.',
        bn: 'থার্ড-পার্টি লাইব্রেরি ব্যবহারের সাথে নিরাপত্তা ঝুঁকি জড়িত। "npm audit" কমান্ড পুরো প্রজেক্ট স্ক্যান করে পরিচিত নিরাপত্তা ত্রুটি (CVE) শনাক্ত করে। না বুঝে অন্ধের মতো "npm audit fix --force" চালানো উচিত নয়, কারণ এতে বড় ধরনের ব্রেকিং পরিবর্তন এসে প্রজেক্ট নষ্ট হতে পারে। ধাপে ধাপে যাচাই করে আপডেট করাই নিরাপদ।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Scan for known supply chain vulnerabilities:
npm audit

# Check for outdated packages against registry:
npm outdated

# Update a specific package cleanly:
npm update express`,
      caption: {
        en: 'Routine audits and controlled version upgrades protect backend services from supply chain exploits.',
        bn: 'নিয়মিত অডিট ও পরিকল্পিত আপডেট ব্যাকএন্ডকে সাপ্লাই চেইন আক্রমণ থেকে সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Monorepos with npm Workspaces', bn: '১০. npm Workspaces দিয়ে মনোরেপো পরিচালনা' } },
    {
      type: 'para',
      text: {
        en: 'Modern architectures frequently manage multiple related packages (e.g. backend api, frontend web app, and shared types) inside a single monorepo. npm Workspaces links local packages together seamlessly with a shared root node_modules and unified lockfile, avoiding manual local symlinking.',
        bn: 'আধুনিক সফটওয়্যার আর্কিটেকচারে একাধিক প্রজেক্ট (যেমন ব্যাকএন্ড, ফ্রন্টএন্ড ও শেয়ার্ড টাইপস) একটিমাত্র রিপোজিটরিতে (Monorepo) রাখা হয়। npm Workspaces রুটের একটিমাত্র package-lock.json এবং শেয়ার্ড node_modules দিয়ে কোনো ঝামেলা ছাড়াই সবগুলো সাব-প্যাকেজের সংযোগ রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "name": "enterprise-monorepo",
  "private": true,
  "workspaces": [
    "packages/server",
    "packages/client",
    "packages/shared-types"
  ]
}`,
      caption: {
        en: 'npm workspaces manages multi-package architectures with a single root lockfile.',
        bn: 'npm workspaces একটিমাত্র রুট লকফাইল দিয়ে পুরো মনোরেপোর সব প্রজেক্ট পরিচালনা করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-dep-ex1',
      kind: 'predict',
      topic: 'node: clean install command',
      question: {
        en: 'Which npm command installs dependencies strictly from package-lock.json without modifying it, designed for automated CI/CD pipelines and Dockerfiles?',
        bn: 'কোন npm কমান্ডটি কোনো পরিবর্তন ছাড়াই কঠোরভাবে package-lock.json থেকে সব প্যাকেজ ইনস্টল করে এবং CI/CD ও ডকারের জন্য তৈরি?'
      },
      code: `/* Deterministic clean installation for CI/CD */
/* npm ____________ */`,
      answer: 'ci',
      accept: ['ci', 'npm ci'],
      hint: {
        en: 'Clean install command.',
        bn: 'ক্লিন ইনস্টল কমান্ড।'
      },
      explanation: {
        en: 'npm ci (Clean Install) performs a deterministic install using package-lock.json only, deleting node_modules first.',
        bn: 'npm ci শুধুমাত্র package-lock.json অনুসরণ করে শতভাগ অপরিবর্তিত ও নির্ভুল ইনস্টলেশন সম্পন্ন করে।'
      }
    },
    {
      id: 'nod-dep-ex2',
      kind: 'mcq',
      topic: 'node: caret version behavior',
      question: {
        en: 'If a dependency is specified as "^1.3.2" in package.json, which version could npm automatically install?',
        bn: 'package.json-এ কোনো প্যাকেজের ভার্সন "^১.৩.২" দেওয়া থাকলে npm স্বয়ংক্রিয়ভাবে কোন ভার্সনটি ইনস্টল করতে পারে?'
      },
      options: [
        { en: '1.4.0 (accepts MINOR and PATCH updates under 2.0.0)', bn: '১.৪.০ (২.০.০-এর নিচের যেকোনো MINOR ও PATCH গ্রহণ করে)' },
        { en: '2.0.0 (MAJOR breaking update)', bn: '২.০.০ (MAJOR ব্রেকিং আপডেট)' },
        { en: '3.1.0', bn: '৩.১.০' },
        { en: 'Only 1.3.2 and never any update', bn: 'কেবল ১.৩.২ এবং কোনো আপডেট নয়' }
      ],
      answer: 0,
      hint: {
        en: 'Caret allows minor and patch increments.',
        bn: 'ক্যারেট মাইনর ও প্যাচ আপডেট করতে দেয়।'
      },
      explanation: {
        en: 'The caret (^) allows updates that do not modify the left-most non-zero digit, meaning any 1.x.x version >= 1.3.2.',
        bn: 'ক্যারেট (^) চিহ্ন থাকলে প্রথম সংখ্যা ঠিক রেখে যেকোনো মাইনর বা প্যাচ আপডেট স্বয়ংক্রিয়ভাবে নেওয়া যায়।'
      }
    },
    {
      id: 'nod-dep-ex3',
      kind: 'mcq',
      topic: 'node: phantom dependency definition',
      question: {
        en: 'What is a "Phantom Dependency" in the Node.js ecosystem?',
        bn: 'Node.js ইকোসিস্টেমে "Phantom Dependency" বলতে কী বোঝায়?'
      },
      options: [
        { en: 'A package imported in code that is hoisted in node_modules by a transitive dependency but never declared in package.json', bn: 'কোডে ইমপোর্ট করা এমন কোনো প্যাকেজ যা অন্য লাইব্রেরির সাথে চলে এসেছে কিন্তু নিজস্ব package.json-এ ঘোষণা করা হয়নি' },
        { en: 'A deleted file that remains in memory', bn: 'মুছে ফেলা ফাইল যা মেমরিতে থেকে গেছে' },
        { en: 'A package with no author', bn: 'লেখকবিহীন কোনো প্যাকেজ' },
        { en: 'A corrupted npm download', bn: 'নষ্ট ডাউনলোড প্যাকেজ' }
      ],
      answer: 0,
      hint: {
        en: 'Undeclared transitive package imported directly.',
        bn: 'অঘোষিত সাব-প্যাকেজ যা সরাসরি ব্যবহার করা হয়েছে।'
      },
      explanation: {
        en: 'Phantom dependencies work locally due to hoisting, but will fail in clean environments or when parent dependencies update.',
        bn: 'হোইস্টিংয়ের কারণে ফ্যান্টম ডিপেনডেন্সি লোকাল পিসিতে চললেও প্রোডাকশনে বা ডকারে হঠাৎ ক্র্যাশ করে।'
      }
    }
  ],
  quiz: {
    id: 'nod-dep-quiz',
    title: { en: 'Node.js npm & Dependency Management Quiz', bn: 'Node.js npm ও ডিপেনডেন্সি ম্যানেজমেন্ট কুইজ' },
    questions: [
      {
        id: 'ndq1',
        kind: 'mcq',
        topic: 'node: purpose of package-lock.json',
        question: {
          en: 'Why should package-lock.json ALWAYS be committed to Git version control for applications?',
          bn: 'অ্যাপ্লিকেশনের ক্ষেত্রে package-lock.json কেন সর্বদা গিট ভার্সন কন্ট্রোলে কমিট করা উচিত?'
        },
        options: [
          { en: 'To ensure all developers and production environments install identical, byte-for-byte verified dependency versions', bn: 'যাতে সব ডেভেলপার এবং প্রোডাকশন সার্ভারে হুবহু একই ও হ্যাশ-যাচাইকৃত প্যাকেজ ইনস্টল হয়' },
          { en: 'To increase npm download speed by 100x', bn: 'ডাউনলোড গতি 100 গুণ বাড়াতে' },
          { en: 'Because GitHub refuses repositories without it', bn: 'কারণ এটি ছাড়া গিটহাবে পুশ করা যায় না' },
          { en: 'It contains the project database passwords', bn: 'এতে ডাটাবেসের পাসওয়ার্ড থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'Deterministic, reproducible builds.',
          bn: 'নিখুঁত ও অভিন্ন প্রজেক্ট বিল্ড।'
        },
        explanation: {
          en: 'Committing package-lock.json guarantees reproducible builds by fixing transitive dependency versions and checksums across machines.',
          bn: 'package-lock.json গিটে রাখলে সব মেশিনে সাব-ডিপেনডেন্সিসহ সব প্যাকেজ হুবহু একই ভার্সনে ইনস্টল হওয়া নিশ্চিত হয়।'
        }
      },
      {
        id: 'ndq2',
        kind: 'mcq',
        topic: 'node: devDependencies in production',
        question: {
          en: 'Why should build tools like TypeScript, ESLint, and test runners be placed in "devDependencies" rather than "dependencies"?',
          bn: 'TypeScript, ESLint এবং টেস্ট রানারের মতো টুলগুলো কেন "dependencies"-এর বদলে "devDependencies"-এ রাখা উচিত?'
        },
        options: [
          { en: 'To avoid bundling unnecessary development tools into production Docker images, reducing attack surface and container size', bn: 'প্রোডাকশন ডকার ইমেজে অপ্রয়োজনীয় ফাইল বাদ দিতে, যা সাইজ কমায় ও নিরাপত্তা ঝুঁকি হ্রাস করে' },
          { en: 'Because TypeScript will not compile in dependencies', bn: 'কারণ টাইপস্ক্রিপ্ট ডিপেনডেন্সে কাজ করে না' },
          { en: 'Because npm throws an error on build', bn: 'কারণ npm এরর দেয়' },
          { en: 'It makes JavaScript execute faster', bn: 'জাভাস্ক্রিপ্ট কোড দ্রুত চলে' }
        ],
        answer: 0,
        hint: {
          en: 'Reduces production container footprint and attack surface.',
          bn: 'প্রোডাকশন কন্টেইনারের সাইজ ও নিরাপত্তা ঝুঁকি কমায়।'
        },
        explanation: {
          en: 'Excluding devDependencies with "npm ci --omit=dev" in production Docker containers dramatically shrinks image size and eliminates development security holes.',
          bn: 'প্রোডাকশনে devDependencies বাদ দিলে ইমেজ সাইজ অনেক কমে যায় এবং অপ্রয়োজনীয় টুলের নিরাপত্তা দুর্বলতা দূর হয়।'
        }
      },
      {
        id: 'ndq3',
        kind: 'mcq',
        topic: 'node: npm ci vs npm install deterministic builds',
        question: {
          en: 'What is the primary architectural difference between "npm ci" and "npm install"?',
          bn: '"npm ci" এবং "npm install"-এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          { en: 'npm ci strictly installs exact versions matching package-lock.json and deletes existing node_modules, ensuring deterministic CI builds', bn: 'npm ci নিখুঁতভাবে package-lock.json অনুসরণ করে এবং আগের node_modules মুছে ফেলে হুবহু একই ডিপেনডেন্সি ইনস্টল করে' },
          { en: 'npm ci only works on personal local computers', bn: 'npm ci কেবল ব্যক্তিগত লোকাল কম্পিউটারে কাজ করে' },
          { en: 'npm ci updates all packages to their latest major versions', bn: 'npm ci সব প্যাকেজ সর্বশেষ ভার্সনে আপডেট করে' },
          { en: 'npm ci ignores all lockfiles completely', bn: 'npm ci লকফাইল সম্পূর্ণ উপেক্ষা করে' }
        ],
        answer: 0,
        hint: {
          en: 'Strict lockfile enforcement for CI pipelines.',
          bn: 'সিআই পাইপলাইনে কঠোর লকফাইল প্রয়োগ।'
        },
        explanation: {
          en: 'npm ci bypasses package.json resolution to guarantee byte-for-byte identical installations matching the lockfile in automated deployment pipelines.',
          bn: 'npm ci সরাসরি package-lock.json পড়ে হুবহু একই ফাইল নামায় এবং কোনো ফাইল পরিবর্তন করতে দেয় না।'
        }
      },
      {
        id: 'ndq4',
        kind: 'mcq',
        topic: 'node: semantic versioning major bump',
        question: {
          en: 'In Semantic Versioning (SemVer: MAJOR.MINOR.PATCH), when is a library author required to increment the MAJOR version digit?',
          bn: 'সেমান্টিক ভার্সনিংয়ে (SemVer: MAJOR.MINOR.PATCH) কখন লাইব্রেরি প্রস্তুতকারককে MAJOR সংখ্যা বাড়াতে হয়?'
        },
        options: [
          { en: 'When introducing breaking, backwards-incompatible API changes that require consuming applications to adapt their code', bn: 'যখন এমন পরিবর্তন আসে যা পুরনো কোডের সাথে খাপ খায় না এবং ব্যবহারকারীকে কোড বদলাতে হয় (ব্রেকিং চেঞ্জ)' },
          { en: 'When fixing a small typo in documentation', bn: 'যখন ডকুমেন্টে কোনো বানান সংশোধন করা হয়' },
          { en: 'When adding a backwards-compatible new helper function', bn: 'যখন কোনো নতুন ব্যাকওয়ার্ড কম্প্যাটিবল ফাংশন যোগ হয়' },
          { en: 'Every calendar year on January 1st', bn: 'প্রতি বছর ১ জানুয়ারি' }
        ],
        answer: 0,
        hint: {
          en: 'Breaking, backwards-incompatible contract changes.',
          bn: 'অসামঞ্জস্যপূর্ণ ব্রেকিং পরিবর্তন।'
        },
        explanation: {
          en: 'SemVer dictates that breaking changes warrant a MAJOR increment, backwards-compatible features increment MINOR, and bug fixes increment PATCH.',
          bn: 'ব্রেকিং পরিবর্তনে MAJOR, নতুন সমঞ্জস ফিচারে MINOR এবং বাগ ফিক্সে PATCH বাড়ে।'
        }
      }
    ]
  }
};
