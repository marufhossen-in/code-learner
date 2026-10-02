import type { Hub } from '../../lib/types';
import { MeetOwaspLesson } from './lessons/meet-owasp';
import { InjectionAttacksLesson } from './lessons/injection-attacks';
import { BrokenAccessLesson } from './lessons/broken-access';
import { XssOwaspLesson } from './lessons/xss-owasp';
import { SecurityMisconfigLesson } from './lessons/security-misconfig';
import { VulnerableComponentsLesson } from './lessons/vulnerable-components';
import { AuthFailuresLesson } from './lessons/auth-failures';
import { OwaspCapstoneLesson } from './lessons/owasp-capstone';

export const owaspHub: Hub = {
  slug: 'owasp',
  name: 'OWASP',
  icon: '🛡️',
  tagline: {
    en: 'Master the OWASP Top 10: Defend web applications against injection, broken access control, authentication failures, and supply chain threats.',
    bn: 'ওওয়াস্প (OWASP) টপ ১০ আয়ত্ত করুন: ইনজেকশন, ব্রোকেন অ্যাক্সেস কন্ট্রোল, প্রমাণীকরণ ত্রুটি এবং সাপ্লাই চেইনের ঝুঁকি থেকে ওয়েব অ্যাপ্লিকেশন সুরক্ষিত করুন।',
  },
  intro: {
    en: 'The Open Worldwide Application Security Project (OWASP) Top 10 provides the globally recognized standard awareness document for developers and security professionals. This hub teaches you the underlying architectural mechanics of modern web vulnerabilities and defensive countermeasures. You will explore injection mitigation with parameterized queries, eliminate Insecure Direct Object References (IDOR), neutralize Cross-Site Scripting (XSS) with Content Security Policy, secure cloud and server configurations, audit third-party dependency supply chains, enforce multi-factor authentication, and execute an enterprise-grade defense audit.',
    bn: 'ওপেন ওয়ার্ল্ডওয়াইড অ্যাপ্লিকেশন সিকিউরিটি প্রজেক্ট (OWASP) টপ ১০ হলো বিশ্বব্যাপী স্বীকৃত ওয়েব অ্যাপ্লিকেশন নিরাপত্তার মানদণ্ড। এই হাবে আপনি আধুনিক ওয়েব দুর্বলতাগুলোর অভ্যন্তরীণ কার্যপদ্ধতি এবং সেগুলোর বিরুদ্ধে কার্যকর প্রতিরক্ষামূলক কোডিং কৌশল শিখবেন। প্যারামিটারাইজড কোয়েরির মাধ্যমে এসকিউএল ইনজেকশন প্রতিরোধ, আইডিওআর (IDOR) দুর্বলতা দূরীকরণ, কনটেন্ট সিকিউরিটি পলিসি (CSP) দিয়ে ক্রস-সাইট স্ক্রিপ্টিং (XSS) প্রতিহতকরণ, ক্লাউড ও সার্ভার কনফিগারেশন সুরক্ষা, ডিপেন্ডেন্সি সাপ্লাই চেইন অডিট, মাল্টি-ফ্যাক্টর অথেনটিকেশন বাস্তবায়ন এবং একটি সম্পূর্ণ এন্টারপ্রাইজ অডিট পরিচালনা করা শিখবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — OWASP Taxonomy & Injection Defense (Lessons 1–2)',
        bn: 'ধাপ ১ — ওওয়াস্প পরিচিতি ও ইনজেকশন প্রতিরোধ (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Meet OWASP: The Top 10 vulnerability taxonomy and root causes of enterprise breaches',
          bn: 'ওওয়াস্প পরিচিতি: টপ ১০ দুর্বলতার শ্রেণিবিন্যাস এবং প্রাতিষ্ঠানিক হ্যাকিংয়ের মূল কারণসমূহ'
        },
        {
          en: 'Injection Attacks: SQL injection, OS command injection, and parameterized prepared statements',
          bn: 'ইনজেকশন আক্রমণ: এসকিউএল ইনজেকশন, কমান্ড ইনজেকশন এবং প্যারামিটারাইজড স্টেটমেন্ট'
        },
        {
          en: 'Milestone: Eliminate string concatenation in database queries and separate data from code',
          bn: 'মাইলফলক: ডাটাবেজ কোয়েরিতে স্ট্রিং কনক্যাটেনেশন বাতিল করে কোড ও ডাটা সম্পূর্ণ পৃথক করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Access Control & Client-Side Flaws (Lessons 3–4)',
        bn: 'ধাপ ২ — অ্যাক্সেস কন্ট্রোল ও ক্লায়েন্ট-সাইড ত্রুটি (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Broken Access Control: Defeating IDOR, privilege escalation, and missing authorization checks',
          bn: 'ব্রোকেন অ্যাক্সেস কন্ট্রোল: আইডিওআর (IDOR), প্রিভিলেজ এস্কেলেশন এবং অনুমোদন ত্রুটি দূরীকরণ'
        },
        {
          en: 'Cross-Site Scripting (XSS): Reflected, Stored, and DOM-based attacks neutralized with CSP and encoding',
          bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): রিফ্লেক্টেড, স্টোরড ও ডম-ভিত্তিক আক্রমণ প্রতিহতে সিএসপি ও এনকোডিং'
        },
        {
          en: 'Milestone: Enforce server-side authorization matrices and contextual output encoding',
          bn: 'মাইলফলক: সার্ভার-সাইড অনুমোদন মেট্রিক্স এবং প্রাসঙ্গিক আউটপুট এনকোডিং কার্যকর করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Configuration & Supply Chain Security (Lessons 5–6)',
        bn: 'ধাপ ৩ — কনফিগারেশন ও সাপ্লাই চেইন নিরাপত্তা (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Security Misconfiguration: Hardening default credentials, disabling verbose stack traces, and cloud headers',
          bn: 'সিকিউরিটি মিসকনফিগারেশন: ডিফল্ট পাসওয়ার্ড পরিবর্তন, স্ট্যাক ট্রেস গোপন রাখা এবং ক্লাউড হেডার'
        },
        {
          en: 'Vulnerable & Outdated Components: Software Bill of Materials (SBOM), CVE tracking, and dependency supply chains',
          bn: 'অরক্ষিত ও পুরানো প্যাকেজ: সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM), সিভিই ট্র্যাকিং ও সাপ্লাই চেইন'
        },
        {
          en: 'Milestone: Establish automated dependency vulnerability scanning and hardened deployment baselines',
          bn: 'মাইলফলক: স্বয়ংক্রিয় প্যাকেজ স্ক্যানিং এবং সুরক্ষিত ডিপ্লয়মেন্ট বেসলাইন তৈরি করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Authentication & Enterprise Capstone (Lessons 7–8)',
        bn: 'ধাপ ৪ — প্রমাণীকরণ ও এন্টারপ্রাইজ ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Identification & Authentication Failures: Brute force defense, bcrypt hashing, and session management',
          bn: 'প্রমাণীকরণ ত্রুটি: ব্রুট ফোর্স প্রতিরোধ, bcrypt পাসওয়ার্ড হ্যাশিং এবং সেশন ম্যানেজমেন্ট'
        },
        {
          en: 'OWASP Capstone: Complete enterprise vulnerability assessment, automated scanner validation, and remediation',
          bn: 'ওওয়াস্প ক্যাপস্টোন: পূর্ণাঙ্গ এন্টারপ্রাইজ সিকিউরিটি নিরীক্ষা, স্ক্যানার যাচাই এবং দুর্বলতা সমাধান'
        },
        {
          en: 'Milestone: Build a production-ready application passing OWASP ZAP automated audits with 0 high alerts',
          bn: 'মাইলফলক: ওওয়াস্প জ্যাপ (ZAP) অডিটে ০ টি হাই অ্যালার্ট পেয়ে উত্তীর্ণ হওয়া নিরাপদ অ্যাপ তৈরি'
        },
      ],
    },
  ],
  lessons: [
    MeetOwaspLesson,
    InjectionAttacksLesson,
    BrokenAccessLesson,
    XssOwaspLesson,
    SecurityMisconfigLesson,
    VulnerableComponentsLesson,
    AuthFailuresLesson,
    OwaspCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Zero-Vulnerability E-Commerce API',
        bn: 'প্রজেক্ট ১ — দুর্বলতামুক্ত ই-কমার্স ব্যাকএন্ড এপিআই'
      },
      brief: {
        en: 'Architect a secure Node.js and Express REST API featuring strictly parameterized database queries, strict JWT cookie security (SameSite=Strict, HttpOnly), rate-limited login endpoints, and automated OWASP ZAP scanning with 0 high or medium vulnerabilities. Deliverable: production API codebase accompanied by an automated dynamic security testing report.',
        bn: 'Node.js এবং Express দিয়ে একটি নিরাপদ রেস্ট এপিআই তৈরি করুন যেখানে থাকবে প্যারামিটারাইজড ডাটাবেজ কোয়েরি, নিরাপদ কুকি (SameSite=Strict, HttpOnly), রেট-লিমিটেড লগইন গেটওয়ে এবং ওওয়াস্প জ্যাপ (ZAP) ডাইনামিক স্ক্যানিং রিপোর্ট যাতে কোনো হাই বা মিডিয়াম ত্রুটি থাকবে না। ডেলিভারেবল: মূল কোডবেজ এবং স্বয়ংক্রিয় সিকিউরিটি টেস্ট রিপোর্ট।',
      },
    },
    {
      title: {
        en: 'Project 2 — Automated SBOM & Dependency Vulnerability Pipeline',
        bn: 'প্রজেক্ট ২ — স্বয়ংক্রিয় SBOM ও প্যাকেজ দুর্বলতা নিরীক্ষা পাইপলাইন'
      },
      brief: {
        en: 'Construct a continuous integration CI/CD pipeline using npm audit, Syft, and Grype to generate a Software Bill of Materials (SBOM) on every commit. Configure automated pull-request blocking when any direct or transitive dependency introduces a known CVE with a CVSS score greater than 7.0. Deliverable: pipeline configuration script and vulnerability triage playbook.',
        bn: 'npm audit, Syft এবং Grype ব্যবহার করে একটি স্বয়ংক্রিয় সিআই/সিডি (CI/CD) পাইপলাইন তৈরি করুন যা প্রতিটি কমিটে সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM) তৈরি করবে। কোনো প্যাকেজে ৭.০ এর বেশি সিভিএসএস (CVSS) স্কোরের পরিচিত দুর্বলতা বা CVE পাওয়া গেলে স্বয়ংক্রিয়ভাবে বিল্ড বাতিল করার ব্যবস্থা রাখুন। ডেলিভারেবল: পাইপলাইন কনফিগারেশন এবং সমাধান গাইড।',
      },
    },
    {
      title: {
        en: 'Project 3 — Enterprise RBAC & Multi-Tenant IDOR Guard Engine',
        bn: 'প্রজেক্ট ৩ — এন্টারপ্রাইজ RBAC ও মাল্টি-টেন্যান্ট আইডিওআর সুরক্ষা ইঞ্জিন'
      },
      brief: {
        en: 'Build a reusable Express middleware authorization engine enforcing attribute-based and role-based access control (ABAC/RBAC). Implement automated cross-tenant UUID isolation to prevent Insecure Direct Object Reference (IDOR) attacks, verified with a comprehensive suite of negative unit tests simulating malicious tenant cross-access. Deliverable: tested authorization middleware module and fuzzing harness.',
        bn: 'একটি পুনঃব্যবহারযোগ্য Express অথরাইজেশন মিডলওয়্যার তৈরি করুন যা অ্যাট্রিবিউট ও রোল ভিত্তিক অ্যাক্সেস কন্ট্রোল (ABAC/RBAC) নিশ্চিত করবে। মাল্টি-টেন্যান্ট ডেটায় আইডিওআর (IDOR) আক্রমণ ঠেকাতে ইউইউআইডি (UUID) এবং টেন্যান্ট আইসোলেশন প্রয়োগ করুন, যা ভুয়া টেন্যান্ট এক্সেস সিমুলেশন টেস্টের মাধ্যমে প্রমাণিত হবে। ডেলিভারেবল: পরীক্ষিত মিডলওয়্যার প্যাকেজ এবং টেস্ট হারনেস।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always use parameterized prepared statements or trusted ORMs; never concatenate raw user input into SQL or shell commands.',
      bn: 'সর্বদা প্যারামিটারাইজড স্টেটমেন্ট বা বিশ্বস্ত ওআরএম ব্যবহার করুন; কখনোই সরাসরি ব্যবহারকারীর ইনপুট এসকিউএল বা শেল কমান্ডে যুক্ত করবেন না।',
    },
    {
      en: 'Enforce access control checks on every server endpoint; never assume an unguessable UUID or hidden UI button provides security.',
      bn: 'সার্ভারের প্রতিটি এন্ডপয়েন্টে অ্যাক্সেস কন্ট্রোল যাচাই করুন; শুধুমাত্র জটিল ইউইউআইডি বা লুকানো বাটনের ওপর কখনো নির্ভর করবেন না।',
    },
    {
      en: 'Sanitize contextual output to neutralize XSS, and deploy a strict Content Security Policy (CSP) header to disable inline scripts.',
      bn: 'এক্সএসএস ঠেকাতে আউটপুট প্রাসঙ্গিকভাবে এনকোড করুন এবং ইনলাইন স্ক্রিপ্ট বন্ধ করতে কঠোর কনটেন্ট সিকিউরিটি পলিসি (CSP) হেডার প্রয়োগ করুন।',
    },
    {
      en: 'Maintain an automated Software Bill of Materials (SBOM) and alert on newly disclosed CVEs across production dependencies.',
      bn: 'সবসময় একটি স্বয়ংক্রিয় সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM) বজায় রাখুন এবং প্রোডাকশনের প্যাকেজে নতুন CVE প্রকাশ হওয়া মাত্রই অ্যালার্ট নিশ্চিত করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'How does a SQL injection attack operate at the protocol level, and why does parameterized querying completely prevent it?',
        bn: 'প্রোটোকল স্তরে একটি এসকিউএল ইনজেকশন আক্রমণ কীভাবে কাজ করে এবং কেন প্যারামিটারাইজড কোয়েরি এটিকে সম্পূর্ণভাবে প্রতিরোধ করে?'
      },
      a: {
        en: 'SQL injection occurs when user input is concatenated directly into a query string, tricking the SQL parser into interpreting data as executable syntax (e.g. "OR 1=1"). Parameterized queries (prepared statements) send the query template and user values in two separate database network packets. The database compiles the SQL abstract syntax tree before receiving the parameter values, ensuring the parser treats the input purely as literal data regardless of quotes or operators.',
        bn: 'এসকিউএল ইনজেকশন ঘটে যখন ব্যবহারকারীর ইনপুট সরাসরি কোয়েরি স্ট্রিংয়ে যোগ করা হয়, যার ফলে ডাটাবেজ পার্সার ডাটাকে কোড হিসেবে ভুল ব্যাখ্যা করে। প্যারামিটারাইজড কোয়েরিতে কোয়েরির কাঠামো এবং ব্যবহারকারীর মান দুটি আলাদা নেটওয়ার্ক প্যাকেটে পাঠানো হয়। ডাটাবেজ ইনপুট পাওয়ার আগেই কোয়েরি কম্পাইল করে নেয়, ফলে কোট বা এসকিউএল কমান্ড থাকলেও পার্সার তাকে কেবল সাধারণ ডাটা হিসেবে গণ্য করে।'
      },
    },
    {
      q: {
        en: 'What is an Insecure Direct Object Reference (IDOR), and what is the proper architectural defense against it?',
        bn: 'ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) কী এবং এর বিরুদ্ধে সঠিক আর্কিটেকচারাল প্রতিরক্ষা কোনটি?'
      },
      a: {
        en: 'IDOR occurs when an application exposes a direct reference to an internal database record (such as /api/invoices/4912) without validating that the authenticated caller owns or has permissions to view that specific record. The proper defense is server-side authorization: never trust client-supplied IDs alone; query using the authenticated user identity (e.g. SELECT * FROM invoices WHERE id = ? AND tenant_id = current_user.tenant_id).',
        bn: 'আইডিওআর (IDOR) ঘটে যখন কোনো অ্যাপ্লিকেশন সরাসরি ডাটাবেজ রেকর্ডের আইডি (যেমন /api/invoices/4912) ইউআরএলে উন্মুক্ত করে দেয় কিন্তু ব্যবহারকারীর সেই রেকর্ড দেখার অনুমতি আছে কিনা তা সার্ভারে যাচাই করে না। এর সঠিক সমাধান হলো সার্ভার-সাইড অনুমোদন: ডাটাবেজ কোয়েরিতে সর্বদা লগইন করা ব্যবহারকারীর টেন্যান্ট আইডি যুক্ত রাখুন (যেমন WHERE id = ? AND tenant_id = current_user.tenant_id)।'
      },
    },
    {
      q: {
        en: 'What is the difference between Stored XSS, Reflected XSS, and DOM-based XSS?',
        bn: 'স্টোরড এক্সএসএস, রিফ্লেক্টেড এক্সএসএস এবং ডম-ভিত্তিক (DOM) এক্সএসএসের মধ্যকার মূল পার্থক্য কী?'
      },
      a: {
        en: 'Stored XSS permanently saves malicious JavaScript into the backend database (e.g. in a comment or profile field), executing on every user who loads the page. Reflected XSS bounces a malicious payload from an immediate request (e.g. search query parameters or error messages) into the HTTP response. DOM-based XSS executes purely inside client-side JavaScript without ever hitting the server, typically when unsafe sinks like element.innerHTML read from client sources like location.hash.',
        bn: 'স্টোরড এক্সএসএস ক্ষতিকর জাভাস্ক্রিপ্ট কোডকে স্থায়ীভাবে ডাটাবেজে সংরক্ষণ করে রাখে (যেমন কমেন্ট বক্সে), ফলে যে ব্যবহারকারীই পাতাটি খোলে তার ব্রাউজারে কোডটি চলে। রিফ্লেক্টেড এক্সএসএস ইউআরএল প্যারামিটার থেকে আসা ক্ষতিকর কোডকে সরাসরি ফিরতি রেসপন্সে প্রদর্শন করে। আর ডম-ভিত্তিক এক্সএসএস সার্ভারে না গিয়ে সম্পূর্ণ ব্রাউজারের ভেতর ঘটে, যখন ফ্রন্টএন্ড কোডে innerHTML-এর মতো অনিরাপদ ফাংশনে সরাসরি location.hash বা ইউআরএল ডাটা বসানো হয়।'
      },
    },
    {
      q: {
        en: 'How do you defend against Software Supply Chain vulnerabilities like Log4Shell (CVE-2021-44228) before an official patch is released?',
        bn: 'লগফোরশেল (Log4Shell - CVE-2021-44228) এর মতো সাপ্লাই চেইন দুর্বলতার ক্ষেত্রে অফিশিয়াল প্যাচ আসার আগেই কীভাবে প্রতিরক্ষা নিশ্চিত করা যায়?'
      },
      a: {
        en: 'Defense requires defense-in-depth: 1) Generate a live Software Bill of Materials (SBOM) to pinpoint every affected microservice within minutes; 2) Apply runtime mitigations such as JVM flags (-Dlog4j2.formatMsgNoLookups=true) or stripping the JndiLookup class from jar archives; 3) Enforce strict egress firewall rules dropping outbound LDAP and RMI traffic from application clusters to break attacker reverse shell callbacks.',
        bn: 'এর জন্য ডিফেন্স-ইন-ডেপথ পদ্ধতি প্রয়োজন: ১) কয়েক মিনিটের মধ্যে আক্রান্ত সার্ভিস চিহ্নিত করতে সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM) ব্যবহার করা; ২) সার্ভারের জেভিএম ফ্ল্যাগ (-Dlog4j2.formatMsgNoLookups=true) পরিবর্তন করে রানটাইম প্রতিরোধ গড়ে তোলা; ৩) কঠোর ইগ্রেস ফায়ারওয়াল রুল প্রয়োগ করে সার্ভার থেকে বাইরের এলডিএপি (LDAP) ও আরএমআই (RMI) সংযোগ বন্ধ রাখা যাতে হ্যাকার রিভার্স শেল না পেতে পারে।'
      },
    },
  ],
  realWorld: [
    {
      en: 'Equifax Data Breach (CVE-2017-5638): An unpatched Apache Struts parser vulnerability led to the compromise of 147 million records, highlighting the critical necessity of dependency vulnerability management.',
      bn: 'ইকুইফ্যাক্স ডাটা লঙ্ঘন (CVE-2017-5638): অ্যাপাচি স্ট্রাটস ফ্রেমওয়ার্কের একটি পরিচিত দুর্বলতা প্যাচ না করায় ১৪ কোটি ৭০ লাখ মানুষের সংবেদনশীল তথ্য চুরি হয়, যা প্যাকেজ ব্যবস্থাপনার গুরুত্ব প্রমাণ করে।'
    },
    {
      en: 'Capital One SSRF (CVE-2019-14287): A Server-Side Request Forgery vulnerability in a web application firewall allowed an attacker to query AWS metadata service and steal IAM role credentials for 100 million customer accounts.',
      bn: 'ক্যাপিটাল ওয়ান এসএসআরএফ (CVE-2019-14287): ফায়ারওয়ালের একটি সার্ভার-সাইড রিকোয়েস্ট ফোরজারি দুর্বলতা ব্যবহার করে হ্যাকার ক্লাউড মেটাডাটা থেকে আইএএম (IAM) রোল কি চুরি করে ১০ কোটি গ্রাহকের তথ্য হাতিয়ে নেয়।'
    },
    {
      en: 'Log4Shell (CVE-2021-44228): A zero-day remote code execution flaw in the ubiquitous Java logging library Log4j forced the entire global software industry to audit transitively bundled dependencies.',
      bn: 'লগফোরশেল (CVE-2021-44228): জাভার বহুল ব্যবহৃত Log4j লাইব্রেরির একটি জিরো-ডে রিমোট কোড এক্সিকিউশন দুর্বলতা পুরো বিশ্বব্যাপী প্রযুক্তি প্রতিষ্ঠানগুলোকে তাদের ডিপেন্ডেন্সি চেইন অডিট করতে বাধ্য করে।'
    },
    {
      en: 'SolarWinds Orion Supply Chain Breach: Attackers compromised the vendor build pipeline to inject the SUNBURST backdoor into digitally signed updates, demonstrating why build infrastructure itself must enforce Zero Trust.',
      bn: 'সোলারউইন্ডস সাপ্লাই চেইন আক্রমণ: আক্রমণকারীরা সফটওয়্যার তৈরির বিল্ড পাইপলাইনে ঢুকে সফটওয়্যার আপডেটের ভেতরে ম্যালওয়্যার যুক্ত করে দেয়, যা প্রমাণ করে যে সফটওয়্যার তৈরির পরিবেশেও জিরো ট্রাস্ট অপরিহার্য।'
    },
  ],
};
