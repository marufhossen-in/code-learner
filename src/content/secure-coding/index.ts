import type { Hub } from '../../lib/types';
import { MeetSecureCodeLesson } from './lessons/meet-secure-code';
import { InputValidationLesson } from './lessons/input-validation';
import { OutputEncodingLesson } from './lessons/output-encoding';
import { SecretsHandlingLesson } from './lessons/secrets-handling';
import { SecureErrorsLesson } from './lessons/secure-errors';
import { SafeDependenciesLesson } from './lessons/safe-dependencies';
import { CryptoPitfallsLesson } from './lessons/crypto-pitfalls';
import { SecureCodeCapstoneLesson } from './lessons/secure-code-capstone';

export const secureCodingHub: Hub = {
  slug: 'secure-coding',
  name: 'Secure Coding',
  icon: '🔐',
  tagline: {
    en: 'Master defensive programming: input validation allowlists, contextual output encoding, secret zero-leakage vaults, dependency auditing, and cryptography defenses.',
    bn: 'ডিফেন্সিভ প্রোগ্রামিং আয়ত্ত করুন: ইনপুট ভ্যালিডেশন অ্যালাউলিস্ট, কনটেক্সচুয়াল আউটপুট এনকোডিং, সিক্রেট ব্যবস্থাপনা, ডিপেন্ডেন্সি অডিট এবং ক্রিপ্টোগ্রাফি সুরক্ষা।'
  },
  intro: {
    en: 'Secure coding is the engineering discipline of designing and writing software resistant to vulnerabilities, exploits, and unauthorized manipulation. In modern web and distributed applications, security cannot be retrofitted as an afterthought. Every untrusted input is a potential attack vector from SQL injections and Cross-Site Scripting (XSS) to prototype pollution and secret token leaks. This hub guides developers across the defensive lifecycle: constructing strict input allowlists, contextual output sanitization, cryptographic hygiene, secure error masking, and software supply chain defenses.',
    bn: 'সিকিউর কোডিং হলো এমন একটি প্রকৌশল পদ্ধতি যা সফটওয়্যারকে সাইবার আক্রমণ, নিরাপত্তা দুর্বলতা এবং অননুমোদিত হস্তক্ষেপের বিরুদ্ধে অত্যন্ত শক্তিশালী করে গড়ে তোলে। আধুনিক ওয়েব ও ডিস্ট্রিবিউটেড অ্যাপ্লিকেশনে নিরাপত্তাকে পরে যুক্ত করার সুযোগ নেই। প্রতিটি ব্যবহারকারী ইনপুট একটি সম্ভাব্য আক্রমণ মাধ্যম হতে পারে—তা সে এসকিউএল ইনজেকশন বা ক্রস-সাইট স্ক্রিপ্টিং (XSS) হোক কিংবা মেমোরি লিক ও গোপন টোকেন ফাঁস। এই হাবে ইনপুট অ্যালাউলিস্ট, কনটেক্সচুয়াল আউটপুট স্যানিটাইজেশন, ক্রিপ্টোগ্রাফিক সুরক্ষা, নিরাপদ এরর হ্যান্ডলিং এবং সফটওয়্যার সাপ্লাই চেইন সুরক্ষার সম্পূর্ণ গাইড প্রদান করা হয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Defensive Foundations & Input Validation (L1–L2)',
        bn: 'ধাপ ১ — ডিফেন্সিভ ভিত্তি ও ইনপুট ভ্যালিডেশন (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Meet Secure Coding: The mindset of zero-trust, defense-in-depth, and attack surface reduction',
          bn: 'সিকিউর কোডিং পরিচিতি: জিরো-ট্রাস্ট দৃষ্টিভঙ্গি, ডিফেন্স-ইন-ডেপথ এবং অ্যাটাক সারফেস হ্রাস'
        },
        {
          en: 'Input Validation: Schema allowlisting, boundary checking, and prototype pollution defenses',
          bn: 'ইনপুট ভ্যালিডেশন: স্কিমা অ্যালাউলিস্ট, বাউন্ডারি যাচাই এবং প্রোটোটাইপ পলিউশন প্রতিরোধ'
        },
        {
          en: 'Milestone: Build a strict input validator that rejects malicious SQL and script payloads',
          bn: 'মাইলফলক: একটি কঠোর ইনপুট ভ্যালিডেটর তৈরি যা ক্ষতিকর এসকিউএল ও স্ক্রিপ্ট প্রত্যাখ্যান করে'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Output Encoding & Secrets Vaults (L3–L4)',
        bn: 'ধাপ ২ — আউটপুট এনকোডিং ও সিক্রেট ব্যবস্থাপনা (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Output Encoding: Contextual escaping across HTML, attributes, JavaScript, and URLs to eliminate XSS',
          bn: 'আউটপুট এনকোডিং: XSS প্রতিরোধে এইচটিএমএল, অ্যাট্রিবিউট, জাভাস্ক্রিপ্ট ও ইউআরএল এস্কেপিং'
        },
        {
          en: 'Secrets Handling: Environment variables, vault patterns, and git credential leak prevention',
          bn: 'সিক্রেট হ্যান্ডলিং: এনভায়রনমেন্ট ভেরিয়েবল, ভল্ট প্যাটার্ন এবং গিট ক্রেডেনশিয়াল ফাঁস রোধ'
        },
        {
          en: 'Milestone: Construct a zero-leakage secret loader with runtime memory masking and audit logs',
          bn: 'মাইলফলক: মেমোরি মাস্কিং ও অডিট লগসহ একটি নিরাপদ সিক্রেট লোডার তৈরি'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Error Masking & Supply Chain Security (L5–L6)',
        bn: 'ধাপ ৩ — এরর মাস্কিং ও সাপ্লাই চেইন নিরাপত্তা (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Secure Errors: Stack trace suppression, opaque error identifiers, and safe production telemetry',
          bn: 'নিরাপদ এরর হ্যান্ডলিং: স্ট্যাক ট্রেস গোপন রাখা, অপেক এরর আইডি এবং নিরাপদ টেলিমেট্রি'
        },
        {
          en: 'Safe Dependencies: Software Bill of Materials (SBOM), lockfile integrity, and npm audit defense',
          bn: 'নিরাপদ ডিপেন্ডেন্সি: সফটওয়্যার বিল অফ মেটেরিয়ালস (SBOM), লকফাইল অখণ্ডতা ও অডিট'
        },
        {
          en: 'Milestone: Scan project dependencies for known CVEs and reject packages with unverified hashes',
          bn: 'মাইলফলক: ডিপেন্ডেন্সির পরিচিত নিরাপত্তা ত্রুটি শনাক্ত করা এবং অনিরাপদ প্যাকেজ বাতিল করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Cryptographic Hygiene & Production Defense Capstone (L7–L8)',
        bn: 'ধাপ ৪ — ক্রিপ্টোগ্রাফি ও প্রোডাকশন ডিফেন্স ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Crypto Pitfalls: Constant-time comparisons, salted argon2/bcrypt password hashing, and IV reuse risks',
          bn: 'ক্রিপ্টোগ্রাফিক ফাঁদ: কনস্ট্যান্ট-টাইম তুলনা, সল্টযুক্ত পাসওয়ার্ড হ্যাশিং এবং IV পুনঃব্যবহার ঝুঁকি'
        },
        {
          en: 'Secure Coding Capstone: End-to-end production hardened microservice implementing defense-in-depth',
          bn: 'সিকিউর কোডিং ক্যাপস্টোন: ডিফেন্স-ইন-ডেপথ সমৃদ্ধ সম্পূর্ণ প্রোডাকশন সুরক্ষিত মাইক্রোসার্ভিস'
        },
        {
          en: 'Milestone: Conduct automated penetration attack suites against the hardened capstone endpoint',
          bn: 'মাইলফলক: সুরক্ষিত ক্যাপস্টোন এন্ডপয়েন্টের বিরুদ্ধে স্বয়ংক্রিয় সাইবার আক্রমণ পরীক্ষা'
        },
      ],
    },
  ],
  projects: [
    {
      title: {
        en: 'Secure API Gateway with Schema-Driven Input Validation',
        bn: 'স্কিমা-চালিত ইনপুট ভ্যালিডেশনযুক্ত সিকিউর এপিআই গেটওয়ে'
      },
      brief: {
        en: 'Implements strict JSON Schema allowlists with type coercion defense, payload size limits, and parameter pollution blocking.',
        bn: 'টাইপ যাচাই, পেলোড সাইজ সীমা এবং প্যারামিটার পলিউশন প্রতিরোধ সংবলিত কঠোর JSON স্কিমা ভ্যালিডেশন গেটওয়ে তৈরি করুন।'
      },
      difficulty: 'intermediate',
    },
    {
      title: {
        en: 'Contextual XSS Sanitizer & Content Security Policy Engine',
        bn: 'কনটেক্সচুয়াল XSS স্যানিটাইজার ও কনটেন্ট সিকিউরিটি পলিসি ইঞ্জিন'
      },
      brief: {
        en: 'Builds an output encoding library that defends against DOM-based, reflected, and stored XSS using context-aware escape rules.',
        bn: 'এইচটিএমএল, অ্যাট্রিবিউট ও ইউআরএল এস্কেপ নিয়মের মাধ্যমে বিভিন্ন প্রকার XSS আক্রমণ প্রতিরোধকারী এনকোডিং ইঞ্জিন বাস্তবায়ন করুন।'
      },
      difficulty: 'advanced',
    },
    {
      title: {
        en: 'Automated SBOM Scanner & Dependency Vulnerability Auditor',
        bn: 'স্বয়ংক্রিয় SBOM স্ক্যানার ও ডিপেন্ডেন্সি অডিটর'
      },
      brief: {
        en: 'Evaluates production dependencies, scans for known CVE vulnerabilities using OSV databases, and enforces package hash integrity.',
        bn: 'প্রোডাকশন প্যাকেজের নিরাপত্তা ত্রুটি যাচাই, পরিচিত CVE শনাক্তকরণ এবং ক্রিপ্টোগ্রাফিক হ্যাশ অখণ্ডতা নিশ্চিতকারী স্ক্যানার তৈরি করুন।'
      },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    {
      en: 'Never trust raw user input: always enforce strict allowlists with explicit schema types, regex boundaries, and length constraints rather than relying on flawed denylists.',
      bn: 'ব্যবহারকারীর ইনপুটকে কখনোই বিশ্বাস করবেন না: ত্রুটিপূর্ণ ডিনাইলিস্টের ওপর নির্ভর না করে সর্বদা কঠোর অ্যালাউলিস্ট, ডাটা টাইপ ও সাইজ সীমা প্রয়োগ করুন।'
    },
    {
      en: 'Contextual output encoding is mandatory: encode data according to where it is rendered (HTML body, attributes, JavaScript contexts, or URLs) to neutralize XSS payloads.',
      bn: 'কনটেক্সচুয়াল আউটপুট এনকোডিং বাধ্যতামূলক: ডেটা কোথায় প্রদর্শিত হচ্ছে ( এইচটিএমএল, অ্যাট্রিবিউট বা ইউআরএল ) তার ওপর ভিত্তি করে উপযুক্ত এনকোডিং ব্যবহার করুন।'
    },
    {
      en: 'Keep secrets out of source code: use environment variables injected from secure vaults and never commit tokens or private keys to git version control.',
      bn: 'সোর্স কোড থেকে সিক্রেট দূরে রাখুন: সিকিউর ভল্ট থেকে এনভায়রনমেন্ট ভেরিয়েবল ব্যবহার করুন এবং কখনোই গিট রিপোজিটরিতে কোনো গোপন টোকেন বা চাবি রাখবেন না।'
    },
    {
      en: 'Mask internal error stack traces from production clients: return generic error identifiers and log detailed diagnostic context exclusively to secure backend monitoring.',
      bn: 'প্রোডাকশনে অভ্যন্তরীণ এরর স্ট্যাক ট্রেস গোপন রাখুন: ক্লায়েন্টকে সাধারণ এরর আইডি দিন এবং বিস্তারিত তথ্য কেবল নিরাপদ ব্যাকএন্ড লগে সংরক্ষণ করুন।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental security difference between an Allowlist (positive security) and a Denylist (negative security)?',
        bn: 'অ্যালাউলিস্ট (পজিটিভ সিকিউরিটি) এবং ডিনাইলিস্টের (নেগেটিভ সিকিউরিটি) মধ্যে মৌলিক নিরাপত্তা পার্থক্য কী?'
      },
      a: {
        en: 'An allowlist defines exactly what is permitted (valid characters, types, length boundaries) and rejects everything else by default. A denylist attempts to enumerate all forbidden patterns (like script or select). Denylists fail consistently because attackers invent alternative encodings, uppercase variations, or unicode homoglyphs that bypass the blacklist filters.',
        bn: 'অ্যালাউলিস্ট সুনির্দিষ্টভাবে নির্ধারণ করে কী কী অনুমোদিত ( সঠিক ক্যারেক্টার, ডাটা টাইপ, সাইজ সীমা ) এবং বাকি সবকিছু ডিফল্টভাবে প্রত্যাখ্যান করে। অন্যদিকে ডিনাইলিস্ট কেবল নিষিদ্ধ শব্দ বা প্যাটার্ন খোঁজার চেষ্টা করে। আক্রমণকারীরা বিভিন্ন এনকোডিং বা বিকল্প পদ্ধতি ব্যবহার করে সহজেই ডিনাইলিস্টকে ফাঁকি দিতে পারে, তাই অ্যালাউলিস্ট অনেক বেশি নিরাপদ।'
      },
    },
    {
      q: {
        en: 'How does Contextual Output Encoding eliminate Cross-Site Scripting (XSS) vulnerabilities?',
        bn: 'কনটেক্সচুয়াল আউটপুট এনকোডিং কীভাবে ক্রস-সাইট স্ক্রিপ্টিং (XSS) দুর্বলতা দূর করে?'
      },
      a: {
        en: 'Web browsers parse data differently depending on the context: HTML body, HTML attributes, JavaScript blocks, CSS, or URLs. Contextual output encoding converts dangerous characters (like <, >, quotes, or ampersands) into benign character entity references specific to that rendering context, guaranteeing the browser treats the data strictly as display text rather than executable script.',
        bn: 'ওয়েব ব্রাউজার বিভিন্ন কনটেক্সটে ভিন্নভাবে ডাটা পার্স করে: এইচটিএমএল বডি, অ্যাট্রিবিউট, জাভাস্ক্রিপ্ট ব্লক বা ইউআরএল। কনটেক্সচুয়াল আউটপুট এনকোডিং ক্ষতিকর ক্যারেক্টারগুলোকে ( যেমন <, >, কোটেশন বা অ্যামপারস্যান্ড ) নিরীহ টেক্সট এনটিটিতে রূপান্তর করে, যার ফলে ব্রাউজার ডাটাকে কেবল সাধারণ লেখা হিসেবে প্রদর্শন করে এবং কোনো কোড চালাতে পারে না।'
      },
    },
    {
      q: {
        en: 'What is the difference between Hashing, Encryption, and Encoding in cryptographic engineering?',
        bn: 'ক্রিপ্টোগ্রাফিক ইঞ্জিনিয়ারিংয়ে হ্যাশিং, এনক্রিপশন এবং এনকোডিংয়ের মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'Encoding is a reversible data transformation for transport (like Base64 or UTF-8) requiring no key. Encryption is a two-way confidentiality transformation using cryptographic keys (like AES-GCM) that can only be decrypted by key holders. Hashing is a one-way mathematical function (like SHA-256 or bcrypt) that turns arbitrary data into a fixed digest that cannot be reversed back to original plaintext.',
        bn: 'এনকোডিং হলো ডাটা পরিবহনের জন্য একটি রূপান্তর ( যেমন Base64 বা UTF-8 ) যাতে কোনো চাবির প্রয়োজন হয় না এবং সহজে আগের রূপে ফেরানো যায়। এনক্রিপশন হলো চাবি নির্ভর একটি দ্বি-মুখী গোপন প্রক্রিয়া ( যেমন AES ) যা কেবল চাবির মালিক ডিক্রিপ্ট করতে পারে। আর হ্যাশিং হলো একটি এক-মুখী গাণিতিক ফাংশন ( যেমন SHA-256 বা bcrypt ) যা ডাটাকে নির্দিষ্ট ডাইজেস্টে রূপান্তর করে এবং এটি কখনোই পূর্বের লেখায় ফিরিয়ে নেওয়া যায় না।'
      },
    },
    {
      q: {
        en: 'How do Parameterized Queries (Prepared Statements) prevent SQL Injection attacks?',
        bn: 'প্যারামিটারাইজড কুয়েরি (Prepared Statements) কীভাবে এসকিউএল ইনজেকশন আক্রমণ প্রতিরোধ করে?'
      },
      a: {
        en: 'In parameterized queries, the SQL query structure and the untrusted user parameters are sent to the database engine across two separate channels. The database compiles and optimizes the SQL execution plan before binding the parameter values. Even if a parameter contains malicious SQL syntax, the database engine treats it strictly as literal string or numeric data, never as executable SQL commands.',
        bn: 'প্যারামিটারাইজড কুয়েরিতে এসকিউএল কোডের গঠন এবং ব্যবহারকারীর ইনপুট দুটি সম্পূর্ণ পৃথক চ্যানেলে ডাটাবেজ ইঞ্জিনে পাঠানো হয়। ডাটাবেজ ইনপুট যুক্ত করার আগেই এসকিউএল কমান্ড কম্পাইল করে ফেলে। ফলে ইনপুটের ভেতর কোনো ক্ষতিকর এসকিউএল কোড থাকলেও ডাটাবেজ সেটিকে কেবল সাধারণ টেক্সট ডাটা হিসেবে গণ্য করে এবং কখনোই কমান্ড হিসেবে চালায় না।'
      },
    },
  ],
  realWorld: [
    {
      en: 'OWASP Top 10 & ASVS: The globally recognized gold-standard security frameworks defining the most critical web application vulnerabilities and technical verification standards.',
      bn: 'OWASP Top ১০ এবং ASVS: বিশ্বব্যাপী স্বীকৃত শীর্ষস্থানীয় নিরাপত্তা ফ্রেমওয়ার্ক যা সবচেয়ে গুরুত্বপূর্ণ ওয়েব দুর্বলতা এবং যাচাইকরণ মানদণ্ড নির্ধারণ করে।'
    },
    {
      en: 'Snyk & npm audit: Continuous developer-first security scanners that detect known CVE vulnerabilities and malicious supply chain packages in open-source dependencies.',
      bn: 'Snyk এবং npm audit: ওপেন-সোর্স ডিপেন্ডেন্সিতে পরিচিত নিরাপত্তা ত্রুটি (CVE) এবং ক্ষতিকর প্যাকেজ শনাক্ত করার আধুনিক সিকিউরিটি স্ক্যানার।'
    },
    {
      en: 'DOMPurify: Ultra-fast, battle-tested XSS sanitizer for HTML, MathML, and SVG that strips dangerous executable code while preserving safe formatting markup.',
      bn: 'DOMPurify: এইচটিএমএল এবং এসভিজির জন্য উচ্চগতির নির্ভরযোগ্য স্যানিটাইজার যা নিরাপদ ফরম্যাটিং অক্ষত রেখে সমস্ত ক্ষতিকর স্ক্রিপ্ট মুছে ফেলে।'
    },
    {
      en: 'HashiCorp Vault: Production enterprise secrets engine providing dynamic on-demand credential generation, hardware encryption, policy access control, and detailed audit trails.',
      bn: 'HashiCorp Vault: এন্টারপ্রাইজ গ্রেডের সিক্রেট ম্যানেজমেন্ট প্ল্যাটফর্ম যা ডায়নামিক ক্রেডেনশিয়াল তৈরি, এনক্রিপশন এবং নিরাপদ এক্সেস কন্ট্রোল প্রদান করে।'
    },
  ],
  lessons: [
    MeetSecureCodeLesson,
    InputValidationLesson,
    OutputEncodingLesson,
    SecretsHandlingLesson,
    SecureErrorsLesson,
    SafeDependenciesLesson,
    CryptoPitfallsLesson,
    SecureCodeCapstoneLesson,
  ],
};
