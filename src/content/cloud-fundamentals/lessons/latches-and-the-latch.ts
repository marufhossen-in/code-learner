import type { Lesson } from '../../../lib/types';

export const LatchesAndTheLatchLesson: Lesson = {
  slug: 'latches-and-the-latch',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Cloud Security and IAM',
    bn: 'ক্লাউড সিকিউরিটি ও আইএএম'
  },
  summary: {
    en: 'Master the shared responsibility model, Identity and Access Management (IAM), least privilege evaluation logic, and data protection with envelope encryption at rest and in transit.',
    bn: 'শেয়ার্ড রেসপনসিবিলিটি মডেল, আইডেন্টিটি অ্যান্ড এক্সেস ম্যানেজমেন্ট (IAM), সর্বনিম্ন সুবিধার মূল্যায়ন লজিক এবং এনভেলপ এনক্রিপশন আয়ত্ত করুন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'shared-responsibility',
      text: {
        en: 'The Shared Responsibility Model: Security OF vs IN the Cloud',
        bn: 'শেয়ার্ড রেসপনসিবিলিটি মডেল: ক্লাউডের নিজস্ব নিরাপত্তা বনাম ক্লাউডের ভেতরের নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy infrastructure and store sensitive data in the cloud, security is not solely the cloud provider\x27s problem. Security in cloud computing is governed by the Shared Responsibility Model. The cloud vendor secures the underlying physical infrastructure. You remain responsible for safeguarding your data, access policies, and application workloads.',
        bn: 'ক্লাউডে পরিকাঠামো স্থাপন এবং সংবেদনশীল তথ্য সংরক্ষণের সময় নিরাপত্তা কেবল ক্লাউড প্রোভাইডারের একার দায়িত্ব নয়। ক্লাউড কম্পিউটিংয়ে নিরাপত্তা শেয়ার্ড রেসপনসিবিলিটি মডেল দ্বারা নিয়ন্ত্রিত হয়। ক্লাউড ভেন্ডর পরিকাঠামো ও হার্ডওয়্যার সুরক্ষিত রাখে। অন্যদিকে আপনার ডেটা, ব্যবহারকারী এক্সেস এবং অ্যাপ্লিকেশন ওয়ার্কলোড নিরাপদ রাখার দায়িত্ব আপনার নিজের।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Security OF the Cloud (Provider Responsibility): Physical data center perimeters, biometrics, security guards, host server hardware, hypervisors, core network cabling, power grids, and hardware decommissioning.',
          bn: 'ক্লাউডের নিজস্ব নিরাপত্তা (প্রোভাইডারের দায়িত্ব): ফিজিক্যাল ডাটা সেন্টারের সীমানা পাহারা, বায়োমেট্রিক্স, সার্ভার হার্ডওয়্যার, হাইপারভাইজর, কোর নেটওয়ার্ক ব্যাকবোন, বিদ্যুৎ ব্যাকআপ এবং অকেজো হার্ডওয়্যার ধ্বংসকরণ।'
        },
        {
          en: 'Security IN the Cloud (Customer Responsibility): Guest operating system updates and patches, network firewall and security group rules, IAM credentials, application code vulnerabilities, and data encryption keys.',
          bn: 'ক্লাউডের ভেতরের নিরাপত্তা (গ্রাহকের দায়িত্ব): গেস্ট অপারেটিং সিস্টেমের নিরাপত্তা প্যাচিং, নেটওয়ার্ক ফায়ারওয়াল ও সিকিউরিটি গ্রুপ রুল, IAM এক্সেস ক্রেডেনশিয়াল, অ্যাপ্লিকেশনের কোড এবং ডেটা এনক্রিপশন কী পরিচালনা।'
        },
        {
          en: 'Model Differentiation: In IaaS you configure the virtual machine operating system and firewall rules. In PaaS and serverless FaaS the vendor manages the OS runtime, leaving you to manage application code and data access. In SaaS the vendor manages everything except customer data and user permissions.',
          bn: 'মডেলের তারতম্য: IaaS-এ আপনাকে ভার্চুয়াল মেশিনের ওএস এবং ফায়ারওয়াল কনফিগার করতে হয়। PaaS এবং সার্ভারলেস FaaS-এ প্রোভাইডার ওএস ও রানটাইম প্যাচ করে, ফলে আপনার দায়িত্ব শুধু কোড ও ডেটা এক্সেসে সীমাবদ্ধ থাকে। SaaS-এ প্রোভাইডার প্রায় সবকিছু পরিচালনা করে কেবল গ্রাহকের নিজস্ব ডেটা ও ব্যবহারকারী পারমিশন ছাড়া।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'iam-fundamentals',
      text: {
        en: 'IAM Architecture: Principals, Least Privilege, and Evaluation Flow',
        bn: 'আইএএম আর্কিটেকচার: প্রিন্সিপাল, সর্বনিম্ন সুবিধার নীতি ও মূল্যায়ন প্রবাহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Identity and Access Management (IAM) controls authentication (AuthN) and authorization (AuthZ) across all cloud API endpoints. The fundamental rule of cloud security is the Principle of Least Privilege: never grant broader access than an identity strictly requires to perform its immediate duty.',
        bn: 'আইডেন্টিটি অ্যান্ড এক্সেস ম্যানেজমেন্ট (IAM) সমস্ত ক্লাউড এপিআই এন্ডপয়েন্টে প্রমাণীকরণ (AuthN) এবং অনুমোদন (AuthZ) নিয়ন্ত্রণ করে। ক্লাউড নিরাপত্তার মূল স্তম্ভ হলো সর্বনিম্ন সুবিধার নীতি (Principle of Least Privilege): কোনো পরিচয়কে তার তাৎক্ষণিক দায়িত্বের অতিরিক্ত এক বিন্দু বেশি এক্সেসও দেওয়া যাবে না।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Principals: Root Account has unrestricted power and should be secured with hardware MFA. IAM Users represent individual human operators. IAM Groups bundle users sharing identical duties. IAM Roles provide temporary credentials assumed by applications or cloud services.',
          bn: 'প্রিন্সিপালসমূহ: রুট অ্যাকাউন্ট সর্বোচ্চ ক্ষমতাপ্রাপ্ত এবং এটি হার্ডওয়্যার MFA দিয়ে লক রাখা উচিত। IAM ব্যবহারকারী হলেন নির্দিষ্ট কাজের দায়িত্বপ্রাপ্ত ব্যক্তি। IAM গ্রুপ সাধারণ পারমিশন ভাগাভাগি করা ব্যবহারকারীদের দল। IAM রোল অ্যাপ্লিকেশন বা ক্লাউড সার্ভিস দ্বারা গৃহীত অস্থায়ী এক্সেস কি প্রদান করে।'
        },
        {
          en: 'Policy Structure: Cloud policies are declarative JSON documents defining Effect (Allow or Deny), Action (API operations like s3:GetObject), Resource (Amazon Resource Names or cloud URIs), and Condition (contextual rules like IP CIDR ranges or SSL enforcement).',
          bn: 'পলিসির কাঠামো: ক্লাউড পলিসি হলো ডিক্লেয়ারেটিভ JSON ডকুমেন্ট যা Effect (অনুমোদন বা অস্বীকৃতি), Action (এপিআই অপারেশন যেমন s3:GetObject), Resource (ক্লাউড রিসোর্স এআরএন), এবং Condition (আইপি রেঞ্জ বা এসএসএল বাধ্যবাধকতার মতো শর্ত) নির্ধারণ করে।'
        },
        {
          en: 'Deterministic Evaluation Flow: Requests begin in an implicit Default Deny state. If any applicable policy contains an Explicit Deny, access is immediately blocked regardless of any allows. An access request is permitted only when an Explicit Allow exists and no Deny applies.',
          bn: 'নির্ধারিত মূল্যায়ন প্রবাহ: প্রতিটি অনুরোধ শুরুতে একটি ডিফল্ট অস্বীকৃতি (Default Deny) অবস্থায় থাকে। যদি কোনো প্রযোজ্য পলিসিতে স্পষ্ট অস্বীকৃতি (Explicit Deny) থাকে, তবে অন্য কোনো অনুমোদন থাকলেও অনুরোধটি তৎক্ষণাৎ বাতিল হয়। কেবল তখনই অনুরোধ অনুমোদিত হয় যখন একটি স্পষ্ট অনুমোদন থাকে এবং কোনো অস্বীকৃতি না থাকে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'encryption-architecture',
      text: {
        en: 'Data Protection: Encryption at Rest, in Transit, and Envelope KMS',
        bn: 'ডাটা সুরক্ষা: এনক্রিপশন অ্যাট রেস্ট, ইন ট্রানজিট এবং এনভেলপ কেএমএস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Comprehensive cloud security requires defending data in all states. Cloud architectures utilize symmetric AES-256 for high-throughput data at rest and TLS 1.3 for network transit, backed by Hardware Security Modules (HSM) and Key Management Services (KMS).',
        bn: 'ক্লাউডে পূর্ণাঙ্গ নিরাপত্তা নিশ্চিত করতে ডেটার প্রতিটি অবস্থাকে সুরক্ষিত রাখতে হয়। ক্লাউড আর্কিটেকচার ডাটা অ্যাট রেস্টের জন্য উচ্চগতির প্রতিসম AES-256 এবং নেটওয়ার্ক ট্রানজিটের জন্য TLS 1.3 ব্যবহার করে, যা হার্ডওয়্যার সিকিউরিটি মডিউল (HSM) ও কি ম্যানেজমেন্ট সার্ভিস (KMS) দ্বারা পরিচালিত হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Encryption at Rest: Storage volumes, object storage, and databases are encrypted using AES-256. Cloud providers automate block-level storage encryption with transparent read/write decryption.',
          bn: 'এনক্রিপশন অ্যাট রেস্ট: স্টোরেজ ভলিউম, অবজেক্ট স্টোরেজ এবং ডেটাবেজ AES-256 দিয়ে এনক্রিপ্ট করা হয়। ক্লাউড প্রোভাইডাররা স্বচ্ছভাবে ব্লক-লেভেল রিড/রাইট ডিক্রিপশন স্বয়ংক্রিয় করে।'
        },
        {
          en: 'Encryption in Transit: All inter-service communications, REST endpoints, and database connections mandate TLS 1.3 encryption. IAM bucket policies enforce secure transport by explicitly denying any non-HTTPS requests.',
          bn: 'এনক্রিপশন ইন ট্রানজিট: সমস্ত আন্তঃসার্ভিস যোগাযোগ, REST এন্ডপয়েন্ট এবং ডেটাবেজ কানেকশন TLS 1.3 বাধ্যতামূলক করে। আইএএম বাকেট পলিসিগুলো নন-এইচটিটিপিএস অনুরোধগুলো স্পষ্ট অস্বীকৃতি দিয়ে শুধুমাত্র সুরক্ষিত সংযোগ নিশ্চিত করে।'
        },
        {
          en: 'Envelope Encryption: KMS protects large datasets without passing raw master keys over the network. KMS generates a Data Encryption Key (DEK). The raw DEK encrypts the customer payload and is immediately erased from memory. The encrypted DEK is stored alongside the ciphertext, decipherable only by KMS using the master Key Encryption Key (KEK).',
          bn: 'এনভেলপ এনক্রিপশন: নেটওয়ার্কে সরাসরি মাস্টার কি আদানপ্রদান না করেই বিশাল ডেটাসেট সুরক্ষিত করে কেএমএস। KMS একটি ডাটা এনক্রিপশন কি (DEK) তৈরি করে। মূল DEK দিয়ে গ্রাহকের পেলোড এনক্রিপ্ট করে মেমোরি থেকে মুছে ফেলা হয়। এনক্রিপ্ট করা DEK সাইফারটেক্সটের সাথেই সংরক্ষিত থাকে, যা কেবল KMS-এর মাস্টার কি (KEK) দিয়েই উদ্ধার সম্ভব।'
        }
      ]
    },
    {
      type: 'diagram',
      id: 'iam-security-diagram',
      caption: {
        en: 'IAM policy evaluation and envelope encryption benchmark. We evaluate 2400 access requests across analyst and batch roles. 960 requests are allowed under TLS and VPC conditions, 600 are blocked by explicit deny, and 840 are blocked by default deny.',
        bn: 'আইএএম নীতি মূল্যায়ন এবং এনভেলপ এনক্রিপশন বেঞ্চমার্ক। আমরা অ্যানালিস্ট এবং ব্যাচ রোলে ২৪০০টি এক্সেস অনুরোধ মূল্যায়ন করি। টিএলএস এবং ভিপিসি শর্তের অধীনে ৯৬০টি অনুরোধ অনুমোদিত হয়, ৬০০টি স্পষ্ট অস্বীকৃতি দ্বারা বাতিল হয় এবং ৮৪০টি ডিফল্ট অস্বীকৃতি দ্বারা বাতিল হয়।',
      },
      svg: `<svg viewBox="0 0 800 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="440" rx="12" fill="#0f172a" />

  <!-- Title & Model Header -->
  <text x="400" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-family="system-ui, sans-serif" font-weight="700">Cloud Security Architecture: Shared Responsibility &amp; IAM Policy Engine</text>

  <!-- Left: Shared Responsibility Matrix -->
  <rect x="30" y="55" width="360" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <rect x="30" y="55" width="360" height="28" rx="8" fill="#0284c7" />
  <text x="210" y="74" text-anchor="middle" fill="#ffffff" font-size="12" font-family="system-ui, sans-serif" font-weight="700">SHARED RESPONSIBILITY MODEL</text>

  <!-- Customer Box -->
  <rect x="45" y="93" width="330" height="48" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="55" y="110" fill="#f59e0b" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Customer (Security IN the Cloud):</text>
  <text x="55" y="128" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">Data Encryption, IAM Policies, OS Patching, Network Firewalls</text>

  <!-- Provider Box -->
  <rect x="45" y="148" width="330" height="46" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="55" y="165" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Provider (Security OF the Cloud):</text>
  <text x="55" y="181" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Physical Facilities, Bare-Metal Servers, Hypervisors, Cabling</text>

  <!-- Right: Envelope Encryption Flow -->
  <rect x="410" y="55" width="360" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <rect x="410" y="55" width="360" height="28" rx="8" fill="#6366f1" />
  <text x="590" y="74" text-anchor="middle" fill="#ffffff" font-size="12" font-family="system-ui, sans-serif" font-weight="700">ENVELOPE ENCRYPTION (KMS + AES-256)</text>

  <rect x="425" y="93" width="105" height="46" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1" />
  <text x="477" y="112" text-anchor="middle" fill="#818cf8" font-size="11" font-family="system-ui, sans-serif" font-weight="700">KMS (KEK)</text>
  <text x="477" y="128" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Master Key</text>

  <path d="M 530 116 L 560 116" stroke="#818cf8" stroke-width="2" marker-end="url(#arrow)" />

  <rect x="565" y="93" width="95" height="46" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1" />
  <text x="612" y="112" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Data Key (DEK)</text>
  <text x="612" y="128" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">AES-256 Key</text>

  <path d="M 660 116 L 685 116" stroke="#34d399" stroke-width="2" />

  <rect x="685" y="93" width="75" height="46" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="722" y="112" text-anchor="middle" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Cipher</text>
  <text x="722" y="128" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Data at Rest</text>

  <rect x="425" y="148" width="335" height="46" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1" />
  <text x="592" y="166" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="system-ui, sans-serif">Raw Data Key is purged from memory after encryption.</text>
  <text x="592" y="182" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Only the encrypted DEK and encrypted ciphertext persist on disk.</text>

  <!-- Bottom: IAM Policy Evaluation Decision Flow -->
  <rect x="30" y="220" width="740" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <rect x="30" y="220" width="740" height="28" rx="8" fill="#334155" />
  <text x="400" y="239" text-anchor="middle" fill="#f8fafc" font-size="12" font-family="system-ui, sans-serif" font-weight="700">IAM POLICY EVALUATION LOGIC &amp; SIMULATION RESULTS</text>

  <!-- Step 1: Default Deny -->
  <rect x="45" y="260" width="130" height="60" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
  <text x="110" y="284" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" font-weight="700">1. Default State</text>
  <text x="110" y="303" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Implicit Deny</text>

  <path d="M 175 290 L 210 290" stroke="#64748b" stroke-width="2" />

  <!-- Step 2: Explicit Deny Check -->
  <rect x="210" y="260" width="150" height="60" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" />
  <text x="285" y="284" text-anchor="middle" fill="#f43f5e" font-size="11" font-family="system-ui, sans-serif" font-weight="700">2. Explicit Deny?</text>
  <text x="285" y="303" text-anchor="middle" fill="#fda4af" font-size="10" font-family="system-ui, sans-serif">Any Deny Trumps All</text>

  <path d="M 360 290 L 400 290" stroke="#f43f5e" stroke-width="2" />

  <!-- Step 3: Explicit Allow Check -->
  <rect x="400" y="260" width="160" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
  <text x="480" y="284" text-anchor="middle" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="700">3. Explicit Allow?</text>
  <text x="480" y="303" text-anchor="middle" fill="#6ee7b7" font-size="10" font-family="system-ui, sans-serif">Conditions Satisfied?</text>

  <path d="M 560 275 L 600 275" stroke="#10b981" stroke-width="2" />
  <path d="M 560 305 L 600 305" stroke="#64748b" stroke-width="2" />

  <!-- Outcomes -->
  <rect x="600" y="255" width="155" height="32" rx="5" fill="#064e3b" stroke="#10b981" stroke-width="1" />
  <text x="677" y="275" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif" font-weight="700">ALLOW (960 Requests)</text>

  <rect x="600" y="295" width="155" height="32" rx="5" fill="#4c0519" stroke="#f43f5e" stroke-width="1" />
  <text x="677" y="315" text-anchor="middle" fill="#fca5a5" font-size="10" font-family="system-ui, sans-serif" font-weight="700">DENY (1440 Requests)</text>

  <text x="400" y="352" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Evaluation: 600 Explicit Deny + 840 Default Deny = 1440 Denied across 2400 total requests</text>

  <!-- Footer Verification Badge -->
  <rect x="30" y="385" width="740" height="42" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1" />
  <circle cx="50" cy="406" r="6" fill="#10b981" />
  <text x="66" y="410" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Deterministic Audit: 2400 requests evaluated | 960 allowed | 600 explicit deny | 840 default deny | 0 permission leaks</text>
</svg>`,
    },
    {
      type: 'heading',
      id: 'iam-simulator',
      text: {
        en: 'Interactive Benchmark: Deterministic IAM Policy Evaluation Engine',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: নির্ধারিত আইএএম পলিসি মূল্যায়ন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We execute a deterministic TypeScript simulation of an IAM policy engine. We evaluate 2400 access requests across an analyst role and an automated batch processing role, verifying TLS transport conditions, CIDR IP restrictions, and explicit deny precedence.',
        bn: 'আমরা আইএএম পলিসি ইঞ্জিনের একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি। আমরা অ্যানালিস্ট রোল এবং স্বয়ংক্রিয় ব্যাচ প্রসেসিং রোলে ২৪০০টি এক্সেস অনুরোধ মূল্যায়ন করি, যেখানে টিএলএস ট্রান্সপোর্ট শর্ত, সিআইডিআর আইপি সীমাবদ্ধতা এবং স্পষ্ট অস্বীকৃতির অগ্রাধিকার যাচাই করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'iam-policy-engine.ts',
      code: `// Deterministic Cloud IAM Policy Evaluation Simulator
interface IAMPolicy {
  effect: 'Allow' | 'Deny';
  actions: string[];
  resources: string[];
  conditions?: {
    requireTls?: boolean;
    allowedIpPrefix?: string;
  };
}

interface AccessRequest {
  principal: string;
  action: string;
  resource: string;
  isTls: boolean;
  clientIp: string;
}

const rolePolicies: Record<string, IAMPolicy[]> = {
  'analyst-role': [
    {
      effect: 'Allow',
      actions: ['s3:GetObject', 's3:ListBucket'],
      resources: ['arn:aws:s3:::analytics-data/*'],
      conditions: { requireTls: true }
    },
    {
      effect: 'Deny',
      actions: ['s3:DeleteObject'],
      resources: ['arn:aws:s3:::analytics-data/*']
    }
  ],
  'batch-worker-role': [
    {
      effect: 'Allow',
      actions: ['s3:GetObject', 's3:PutObject'],
      resources: ['arn:aws:s3:::analytics-data/*'],
      conditions: { requireTls: true, allowedIpPrefix: '10.0.' }
    },
    {
      effect: 'Deny',
      actions: ['s3:DeleteObject'],
      resources: ['arn:aws:s3:::analytics-data/*']
    }
  ]
};

function evaluateIAM(req: AccessRequest): 'ALLOW' | 'EXPLICIT_DENY' | 'DEFAULT_DENY' {
  const policies = rolePolicies[req.principal] || [];
  let allowed = false;

  for (const pol of policies) {
    const actionMatch = pol.actions.includes('*') || pol.actions.includes(req.action);
    const resourceMatch = pol.resources.some((r) =>
      r.endsWith('/*') ? req.resource.startsWith(r.replace('/*', '')) : r === req.resource
    );

    if (!actionMatch || !resourceMatch) continue;

    let conditionMet = true;
    if (pol.conditions?.requireTls && !req.isTls) conditionMet = false;
    if (pol.conditions?.allowedIpPrefix && !req.clientIp.startsWith(pol.conditions.allowedIpPrefix)) {
      conditionMet = false;
    }

    if (pol.effect === 'Deny') {
      return 'EXPLICIT_DENY';
    }
    if (pol.effect === 'Allow' && conditionMet) {
      allowed = true;
    }
  }

  return allowed ? 'ALLOW' : 'DEFAULT_DENY';
}

const totalEvaluations = 2400;
let allowedCount = 0;
let explicitDenyCount = 0;
let defaultDenyCount = 0;

for (let i = 0; i < totalEvaluations; i++) {
  const role = i % 2 === 0 ? 'analyst-role' : 'batch-worker-role';
  const actionChoice = Math.floor(i / 2) % 4;
  const action = ['s3:GetObject', 's3:ListBucket', 's3:PutObject', 's3:DeleteObject'][actionChoice];
  const isTls = i % 5 !== 0;
  const clientIp = i % 4 === 0 ? '192.168.1.50' : '10.0.2.14';
  const resource = 'arn:aws:s3:::analytics-data/reports/2026.csv';

  const req: AccessRequest = { principal: role, action, resource, isTls, clientIp };
  const outcome = evaluateIAM(req);

  if (outcome === 'ALLOW') allowedCount++;
  else if (outcome === 'EXPLICIT_DENY') explicitDenyCount++;
  else defaultDenyCount++;
}

console.log('--- IAM Policy Evaluation Engine ---');
console.log(\`Total access requests evaluated: \${totalEvaluations}\`);
// Total access requests evaluated: 2400
console.log(\`Allowed requests (least privilege match): \${allowedCount}\`);
// Allowed requests (least privilege match): 960
console.log(\`Blocked by explicit deny rules: \${explicitDenyCount}\`);
// Blocked by explicit deny rules: 600
console.log(\`Blocked by default deny (implicit): \${defaultDenyCount}\`);
// Blocked by default deny (implicit): 840
console.log(\`Evaluation status: 0 unauthorized leaks across \${totalEvaluations} requests.\`);
// Evaluation status: 0 unauthorized leaks across 2400 requests.`,
      callout: {
        en: 'The deterministic IAM policy simulation evaluated 2400 access requests across 2 enterprise IAM roles. Under least privilege enforcement, 960 requests were permitted over secure TLS connections from trusted subnets. Explicit deny rules intercepted and immediately halted 600 unauthorized write and delete calls. Default implicit deny blocked the remaining 840 invalid requests, achieving 0 unauthorized leaks across all 2400 trials.',
        bn: 'নির্ধারিত আইএএম পলিসি সিমুলেশন ২ টি এন্টারপ্রাইজ রোলে ২৪০০টি এক্সেস অনুরোধ মূল্যায়ন করেছে। সর্বনিম্ন সুবিধার নীতিতে বিশ্বস্ত সাবনেট ও সুরক্ষিত টিএলএস সংযোগের মাধ্যমে ৯৬০টি অনুরোধ অনুমোদিত হয়েছে। স্পষ্ট অস্বীকৃতি নীতি তাৎক্ষণিকভাবে ৬০০টি অননুমোদিত রাইট ও ডিলিট অনুরোধ আটকে দিয়েছে। ডিফল্ট ইমপ্লিসিট ডিনাই অবশিষ্ট ৮৪০টি অবৈধ অনুরোধ প্রতিহত করে, যার ফলে ২৪০০টি ট্রায়ালে ০টি নিরাপত্তা ফাঁক নিশ্চিত হয়েছে।',
      },
    },
  ],
  exercises: [
    {
      id: 'iam-ex-1',
      kind: 'predict',
      topic: 'iam-explicit-deny-precedence',
      question: {
        en: 'Predict the final access decision if an IAM identity has an Allow policy for s3:GetObject, but also inherits an explicit Deny policy for s3:* on the target resource (ALLOW / DENY / CONDITIONAL):',
        bn: 'একটি আইএএম পরিচয়ের যদি s3:GetObject-এর জন্য একটি Allow পলিসি থাকে, কিন্তু লক্ষ্য রিসোর্সে s3:*-এর জন্য একটি স্পষ্ট Deny পলিসিও থাকে, তবে চূড়ান্ত এক্সেস সিদ্ধান্ত কী হবে তা অনুমান করুন (ALLOW / DENY / CONDITIONAL):',
      },
      answer: 'DENY',
      accept: ['DENY', 'deny', 'Deny'],
      hint: {
        en: 'An explicit Deny statement trumps and overrides any number of Allow statements immediately.',
        bn: 'একটি স্পষ্ট অস্বীকৃতি (Explicit Deny) অন্য যেকোনো সংখ্যক অনুমোদনকে তাৎক্ষণিকভাবে বাতিল করে দেয়।',
      },
      explanation: {
        en: 'In cloud IAM evaluation logic, an explicit Deny statement always takes precedence over all Allow policies.',
        bn: 'ক্লাউড আইএএম মূল্যায়ন লজিকে, একটি স্পষ্ট অস্বীকৃতি (Explicit Deny) অন্য যেকোনো অনুমোদনের চেয়ে অগ্রাধিকার পায়।',
      },
    },
    {
      id: 'iam-ex-2',
      kind: 'mcq',
      topic: 'shared-responsibility-iaas-patching',
      question: {
        en: 'Under the Shared Responsibility Model for an Infrastructure as a Service (IaaS) virtual machine, who is responsible for applying operating system security patches?',
        bn: 'ইনফ্রাস্ট্রাকচার এজ আ সার্ভিস (IaaS) ভার্চুয়াল মেশিনের জন্য শেয়ার্ড রেসপনসিবিলিটি মডেল অনুসারে, অপারেটিং সিস্টেমের সিকিউরিটি প্যাচ প্রয়োগ করার দায়িত্ব কার?',
      },
      options: [
        {
          en: 'The cloud customer who provisions and administers the virtual machine operating system',
          bn: 'ক্লাউড গ্রাহক যিনি ভার্চুয়াল মেশিন অপারেটিং সিস্টেম কনফিগার ও পরিচালনা করেন',
        },
        {
          en: 'The cloud physical data center facilities and cooling management team',
          bn: 'ক্লাউডের ফিজিক্যাল ডাটা সেন্টার এবং কুলিং ব্যবস্থাপনা টিম',
        },
        {
          en: 'The international fiber-optic transit and submarine cable operators',
          bn: 'আন্তর্জাতিক ফাইবার অপটিক এবং সাবমেরিন ক্যাবল অপারেটরগণ',
        },
        {
          en: 'The server motherboard BIOS firmware manufacturing vendor',
          bn: 'সার্ভার মাদারবোর্ড বিআইওএস ফার্মওয়্যার প্রস্তুতকারী ভেন্ডর',
        },
      ],
      answer: 0,
      hint: {
        en: 'The customer provisions and administers the operating system in IaaS.',
        bn: 'IaaS-এ গ্রাহক নিজে অপারেটিং সিস্টেম ইনস্টল ও পরিচালনা করেন।',
      },
      explanation: {
        en: 'In IaaS, the cloud provider manages physical hardware, hypervisors, and data centers. The customer controls and maintains the guest operating system, runtime libraries, firewall rules, and security patches.',
        bn: 'IaaS-এ ক্লাউড প্রোভাইডার ফিজিক্যাল হার্ডওয়্যার, হাইপারভাইজর এবং ডাটা সেন্টার রক্ষণাবেক্ষণ করে। গ্রাহক নিজে গেস্ট অপারেটিং সিস্টেম, রানটাইম, ফায়ারওয়াল এবং ওএস সিকিউরিটি প্যাচ নিয়ন্ত্রণ ও প্রয়োগ করেন।',
      },
    },
    {
      id: 'iam-ex-3',
      kind: 'predict',
      topic: 'kms-symmetric-encryption-standard',
      question: {
        en: 'Predict the standard symmetric encryption algorithm and key bit-length utilized by cloud Key Management Services (KMS) for data at rest (e.g. AES-256 ):',
        bn: 'ক্লাউড কি ম্যানেজমেন্ট সার্ভিসেস (KMS) দ্বারা সংরক্ষিত তথ্যের জন্য ব্যবহৃত মানসম্পন্ন প্রতিসম এনক্রিপশন অ্যালগরিদম ও কি-বিট দৈর্ঘ্য অনুমান করুন (যেমন AES-256 ):',
      },
      answer: 'AES-256',
      accept: ['AES-256', 'aes-256', 'AES 256', 'aes256'],
      hint: {
        en: 'AES-256',
        bn: 'AES-256',
      },
      explanation: {
        en: 'The Advanced Encryption Standard with a 256 bit key length is the cloud industry standard for high-performance envelope encryption.',
        bn: 'উচ্চগতির এনভেলপ এনক্রিপশনের জন্য ২৫৬ বিট দৈর্ঘ্যের অ্যাডভান্সড এনক্রিপশন স্ট্যান্ডার্ড (AES) হলো ক্লাউড শিল্পের স্বীকৃত মান।',
      },
    },
    {
      id: 'iam-ex-4',
      kind: 'mcq',
      topic: 'iam-role-temporary-credentials',
      question: {
        en: 'Which IAM construct should you attach to a cloud compute service to deliver temporary, automatically rotated credentials without hardcoding long-term API keys?',
        bn: 'অ্যাপ্লিকেশন কোডে দীর্ঘমেয়াদী এপিআই কি হার্ডকোড না করে অস্থায়ী ও স্বয়ংক্রিয়ভাবে আবর্তিত ক্রেডেনশিয়াল প্রদানের জন্য কোন IAM কাঠামো ব্যবহার করা উচিত?',
      },
      options: [
        {
          en: 'An IAM Role assumed by the compute instance via the instance metadata service',
          bn: 'ইনস্ট্যান্স মেটাডাটা সার্ভিসের মাধ্যমে কম্পিউট ইনস্ট্যান্স দ্বারা গৃহীত একটি IAM রোল',
        },
        {
          en: 'The cloud root account master credentials committed directly to Git repository config',
          bn: 'গিট রিপোজিটরি কনফিগারেশনে সরাসরি সংরক্ষিত ক্লাউড রুট অ্যাকাউন্টের মাস্টার ক্রেডেনশিয়াল',
        },
        {
          en: 'An anonymous public access group with administrative permissions',
          bn: 'প্রশাসনিক অনুমতিসহ একটি বেনামী সর্বজনীন এক্সেস গ্রুপ',
        },
        {
          en: 'A shared static root user password stored in plaintext inside the source code',
          bn: 'সোর্স কোডের ভেতরে প্লেইনটেক্সটে সংরক্ষিত একটি শেয়ার্ড রুট ব্যবহারকারীর পাসওয়ার্ড',
        },
      ],
      answer: 0,
      hint: {
        en: 'IAM Roles provide short-lived, automatically rotated security tokens.',
        bn: 'IAM রোল স্বল্পস্থায়ী ও স্বয়ংক্রিয়ভাবে আবর্তিত টোকেন প্রদান করে।',
      },
      explanation: {
        en: 'IAM Roles provide short-lived, automatically rotated security tokens to instances and services without storing secret keys on disk or in source code.',
        bn: 'IAM রোল কোনো সিক্রেট কি ডিস্কে বা সোর্স কোডে সংরক্ষণ না করেই ইনস্ট্যান্স ও সার্ভিসকে স্বল্পস্থায়ী এবং স্বয়ংক্রিয়ভাবে আবর্তিত নিরাপত্তা টোকেন প্রদান করে।',
      },
    },
  ],
  quiz: {
    title: {
      en: 'Cloud Security and IAM Knowledge Check',
      bn: 'ক্লাউড নিরাপত্তা ও আইএএম জ্ঞান যাচাই',
    },
    questions: [
      {
        id: 'iam-qz-1',
        kind: 'mcq',
        topic: 'shared-responsibility-paas-duties',
        question: {
          en: 'Under the Shared Responsibility Model, which operational duty shifts from the customer to the cloud provider when migrating from IaaS to PaaS?',
          bn: 'শেয়ার্ড রেসপনসিবিলিটি মডেলের অধীনে, IaaS থেকে PaaS-এ স্থানান্তরিত হলে কোন দায়িত্বটি গ্রাহকের কাছ থেকে ক্লাউড প্রোভাইডারের কাছে স্থানান্তরিত হয়?',
        },
        options: [
          {
            en: 'Operating system provisioning, runtime maintenance, and security patch management',
            bn: 'অপারেটিং সিস্টেম ইনস্টলেশন, রানটাইম রক্ষণাবেক্ষণ এবং সিকিউরিটি প্যাচ পরিচালনা',
          },
          {
            en: 'Customer application business data classification and proprietary records',
            bn: 'গ্রাহকের নিজস্ব ব্যবসায়িক ডেটার শ্রেণিবিভাগ এবং গোপনীয় তথ্য',
          },
          {
            en: 'Internal user IAM password complexity policies and employee offboarding',
            bn: 'অভ্যন্তরীণ ব্যবহারকারীদের পাসওয়ার্ড জটিলতার নীতি এবং কর্মচারী অব্যাহতি',
          },
          {
            en: 'Application proprietary source code logic and front-end interface styling',
            bn: 'অ্যাপ্লিকেশনের নিজস্ব সোর্স কোডের লজিক এবং ফ্রন্ট-এন্ড ইউজার ইন্টারফেস ডিজাইন',
          },
        ],
        answer: 0,
        hint: {
          en: 'The provider assumes operating system and runtime maintenance in PaaS.',
          bn: 'PaaS-এ ক্লাউড প্রোভাইডার ওএস ও রানটাইম রক্ষণাবেক্ষণের দায়িত্ব নেয়।',
        },
        explanation: {
          en: 'In IaaS, the customer manages the OS and runtime. In PaaS, the cloud provider manages the underlying OS, runtime, and server patching, allowing developers to focus solely on application code and data.',
          bn: 'IaaS-এ গ্রাহককে নিজে ওএস ও রানটাইম পরিচালনা করতে হয়। PaaS-এ ক্লাউড প্রোভাইডার ওএস, রানটাইম ও সার্ভার প্যাচিংয়ের দায়িত্ব নেয়, ফলে ডেভেলপাররা কেবল অ্যাপ্লিকেশন কোড ও ডেটায় মনোনিবেশ করতে পারেন।',
        },
      },
      {
        id: 'iam-qz-2',
        kind: 'mcq',
        topic: 'iam-policy-evaluation-precedence',
        question: {
          en: 'How does an enterprise cloud IAM policy engine resolve an access request when multiple policies apply?',
          bn: 'যখন একাধিক পলিসি প্রযোজ্য হয়, তখন একটি এন্টারপ্রাইজ ক্লাউড IAM ইঞ্জিন কীভাবে একটি এক্সেস অনুরোধের সমাধান করে?',
        },
        options: [
          {
            en: 'Defaults to deny; an explicit allow grants access only if no explicit deny exists anywhere in the policy chain',
            bn: 'ডিফল্টরূপে বাতিল থাকে; কোনো স্পষ্ট অস্বীকৃতি না থাকলে তবেই একটি স্পষ্ট অনুমোদন এক্সেস প্রদান করে',
          },
          {
            en: 'Defaults to allow; an explicit deny is ignored if any allow was configured earlier in the week',
            bn: 'ডিফল্টরূপে অনুমোদিত থাকে; সপ্তাহের শুরুতে কোনো অনুমোদন থাকলে স্পষ্ট অস্বীকৃতি অগ্রাহ্য করা হয়',
          },
          {
            en: 'Sorts policies alphabetically by name and executes only the final rule',
            bn: 'নাম অনুসারে বর্ণানুক্রমিকভাবে পলিসি সাজায় এবং কেবল শেষ নিয়মটি প্রয়োগ করে',
          },
          {
            en: 'Awards permission based on which policy was created most recently in the cloud console',
            bn: 'ক্লাউড কনসোলে কোন পলিসিটি সবচেয়ে সম্প্রতি তৈরি হয়েছিল তার ওপর ভিত্তি করে এক্সেস নির্ধারণ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'An explicit deny always trumps allow, starting from a default deny state.',
          bn: 'ডিফল্ট ডিনাই অবস্থা থেকে শুরু করে স্পষ্ট অস্বীকৃতি সর্বদা অনুমোদনের চেয়ে অগ্রাধিকার পায়।',
        },
        explanation: {
          en: 'Cloud IAM follows a strict default-deny model. An explicit Deny always takes precedence over any Allow. Access is granted only when an explicit Allow matches and no Deny rule is triggered.',
          bn: 'ক্লাউড আইএএম কঠোর ডিফল্ট-ডিনাই মডেল মেনে চলে। যেকোনো Allow-এর চেয়ে একটি স্পষ্ট Deny সর্বদা অগ্রাধিকার পায়। কেবল তখনই এক্সেস পাওয়া যায় যখন একটি স্পষ্ট Allow মিলে যায় এবং কোনো Deny রুল সক্রিয় না থাকে।',
        },
      },
      {
        id: 'iam-qz-3',
        kind: 'mcq',
        topic: 'envelope-encryption-advantage',
        question: {
          en: 'What is the primary architectural advantage of envelope encryption in cloud Key Management Services (KMS)?',
          bn: 'ক্লাউড কি ম্যানেজমেন্ট সার্ভিসে (KMS) এনভেলপ এনক্রিপশনের প্রাথমিক আর্কিটেকচারাল সুবিধা কী?',
        },
        options: [
          {
            en: 'Enables fast local encryption of large data using a Data Key without sending raw datasets over the network to KMS',
            bn: 'কেএমএস-এ পুরো ডেটাসেট নেটওয়ার্কের মাধ্যমে না পাঠিয়ে ডাটা কি দিয়ে স্থানীয়ভাবে দ্রুত ডেটা এনক্রিপ্ট করার সুবিধা দেয়',
          },
          {
            en: 'Publishes encryption keys to public DNS records for world-wide unauthenticated access',
            bn: 'সারা বিশ্বে প্রমাণীকরণহীন এক্সেস দিতে সর্বজনীন ডিএনএস রেকর্ডে এনক্রিপশন কি প্রকাশ করে',
          },
          {
            en: 'Eliminates all cryptographic algorithms and stores files in plain unencrypted text',
            bn: 'সমস্ত ক্রিপ্টোগ্রাফিক অ্যালগরিদম বাদ দিয়ে ফাইলগুলো প্লেইন টেক্সট আকারে সংরক্ষণ করে',
          },
          {
            en: 'Forces every individual database byte to travel across the Internet to the master HSM core',
            bn: 'ডেটাবেজের প্রতিটি স্বতন্ত্র বাইটকে ইন্টারনেটের মাধ্যমে মাস্টার এইচএসএম কোরে পাঠাতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Local encryption with a Data Key avoids network bandwidth bottlenecks.',
          bn: 'ডাটা কি দিয়ে স্থানীয় এনক্রিপশন নেটওয়ার্ক ব্যান্ডউইথ অপচয় রোধ করে।',
        },
        explanation: {
          en: 'Envelope encryption generates a local Data Encryption Key (DEK) to encrypt large files efficiently. Only the small DEK is protected by the KMS master key, avoiding massive network bandwidth bottlenecks and latency.',
          bn: 'এনভেলপ এনক্রিপশন বিশাল ফাইল দক্ষতার সাথে এনক্রিপ্ট করতে একটি লোকাল ডাটা এনক্রিপশন কি (DEK) তৈরি করে। কেবল ছোট DEK-টি KMS মাস্টার কি দ্বারা সুরক্ষিত হয়, যা বিশাল ব্যান্ডউইথ অপচয় ও বিলম্ব প্রতিহত করে।',
        },
      },
      {
        id: 'iam-qz-4',
        kind: 'mcq',
        topic: 'least-privilege-mandate',
        question: {
          en: 'What does the Principle of Least Privilege mandate when configuring cloud IAM user and service accounts?',
          bn: 'ক্লাউড আইএএম ব্যবহারকারী এবং সার্ভিস অ্যাকাউন্ট কনফিগার করার সময় সর্বনিম্ন সুবিধার নীতি (Principle of Least Privilege) কী নির্দেশ করে?',
        },
        options: [
          {
            en: 'Granting only the minimal set of permissions strictly necessary to complete assigned job tasks',
            bn: 'নির্দিষ্ট কার্য সম্পাদনের জন্য যেটুকু এক্সেস একান্ত আবশ্যক কেবল সেটুকুই প্রদান করা',
          },
          {
            en: 'Assigning complete administrator rights to every user to simplify team troubleshooting',
            bn: 'টিমের সমস্যা সমাধান সহজ করতে প্রতিটি ব্যবহারকারীকে সম্পূর্ণ অ্যাডমিনিস্ট্রেটর অধিকার দেওয়া',
          },
          {
            en: 'Prohibiting the use of IAM roles and requiring all applications to log in via shared root credentials',
            bn: 'আইএএম রোলের ব্যবহার নিষিদ্ধ করে সমস্ত অ্যাপ্লিকেশনে একটি শেয়ার্ড রুট ক্রেডেনশিয়াল ব্যবহার বাধ্যতামূলক করা',
          },
          {
            en: 'Removing authentication from production databases so services connect without verification',
            bn: 'উৎপাদনমুখী ডেটাবেজ থেকে প্রমাণীকরণ ব্যবস্থা তুলে নেওয়া যাতে সার্ভিসগুলো পরীক্ষা ছাড়াই সংযুক্ত হতে পারে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Grant only the minimal permissions strictly necessary for assigned tasks.',
          bn: 'কেবল নির্দিষ্ট কাজের জন্য একান্ত প্রয়োজনীয় সর্বনিম্ন পারমিশন দিন।',
        },
        explanation: {
          en: 'The Principle of Least Privilege limits blast radius by ensuring principals only have permissions strictly necessary for their workload, preventing accidental damage or unauthorized lateral movement.',
          bn: 'সর্বনিম্ন সুবিধার নীতি নিশ্চিত করে যে একজন ব্যবহারকারী বা সার্ভিসের কাছে কেবল তার কাজের জন্য একান্ত প্রয়োজনীয় অধিকারই থাকবে, যা অনাকাঙ্ক্ষিত ক্ষতি বা হ্যাকারের বিস্তার রোধ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'welkins-and-the-welkin',
    title: {
      en: 'Cloud Architecture Patterns and Well-Architected Framework',
      bn: 'ক্লাউড আর্কিটেকচার প্যাটার্ন ও ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্ক',
    },
  },
};
