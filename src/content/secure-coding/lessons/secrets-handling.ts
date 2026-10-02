import type { Lesson } from '../../../lib/types';

export const SecretsHandlingLesson: Lesson = {
  slug: 'secrets-handling',
  tech: 'secure-coding',
  title: {
    en: 'Secrets Handling: Vault Patterns & Zero-Leakage Architecture',
    bn: 'সিক্রেট হ্যান্ডলিং: ভল্ট প্যাটার্ন এবং তথ্য ফাঁসরোধ আর্কিটেকচার'
  },
  summary: {
    en: 'Protect API keys, database credentials, and cryptographic signing tokens from accidental leakage. Understand why hardcoded source code commits are permanently compromised within seconds by automated scrapers. Master twelve-factor environment configuration, secret management vaults like HashiCorp Vault and AWS Secrets Manager, safe memory handling, log scrubbing, and zero-downtime secret rotation.',
    bn: 'এপিআই কি, ডাটাবেজ পাসওয়ার্ড এবং ক্রিপ্টোগ্রাফিক টোকেন দুর্ঘটনাবশত ফাঁস হওয়া থেকে রক্ষা করুন। সোর্স কোডে লিখে রাখা পাসওয়ার্ড কেন স্বয়ংক্রিয় স্ক্র্যাপারদের দ্বারা কয়েক সেকেন্ডেই বেদখল হয়ে যায় তা বুঝুন। টুয়েলভ-ফ্যাক্টর এনভায়রনমেন্ট কনফিগারেশন, হাশিকর্প ভল্ট এবং এডব্লিউএস সিক্রেটস ম্যানেজারের মতো ডেডিকেটেড ভল্ট, মেমোরি সুরক্ষা, লগ স্ক্রাবিং এবং জিরো-ডাউনটাইম সিক্রেট রোটেশন পদ্ধতি আয়ত্ত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-hardcoded-secret-nightmare',
      text: {
        en: 'The Danger of Hardcoded Application Secrets',
        bn: 'অ্যাপ্লিকেশনে সরাসরি পাসওয়ার্ড লিখে রাখার মারাত্মক বিপদ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you hardcode credentials directly into source code, you introduce catastrophic security vulnerabilities. Once committed to a repository, automated bot scanners harvest your secrets within seconds.',
        bn: 'যখন আপনি সোর্স কোডের ভেতরে সরাসরি পাসওয়ার্ড বা সিক্রেট লিখে রাখেন, তখন আপনি মারাত্মক নিরাপত্তা ঝুঁকি তৈরি করেন। রিপোজিটরিতে কোড পুশ করার কয়েক সেকেন্ডের মধ্যেই স্বয়ংক্রিয় বট আপনার সেই চাবি চুরি করে নিতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Even if you quickly remove the key in a subsequent commit, the secret remains permanently visible in the Git commit history. Attackers leverage compromised credentials to drain databases, manipulate private user records, and launch illicit cloud computing workloads. A defensive secrets architecture enforces zero credentials inside source repositories at all times.',
        bn: 'এমনকি পরের কোনো কমিটে যদি আপনি সেই চাবি মুছেও ফেলেন, তবুও এটি গিট হিস্ট্রিতে চিরতরে সংরক্ষিত থেকে যায়। আক্রমণকারীরা এই ফাঁসের সুযোগ নিয়ে ডাটাবেজ চুরি করতে পারে, ব্যবহারকারীর ব্যক্তিগত তথ্য হাতিয়ে নিতে পারে এবং ক্লাউড সিস্টেমে অবৈধ কার্যক্রম চালাতে পারে। একটি সঠিক ডিফেন্সিভ আর্কিটেকচার সর্বদা সোর্স কোড থেকে সমস্ত সিক্রেট সম্পূর্ণ আলাদা রাখে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Environment Variable Decoupling',
            bn: '১. এনভায়রনমেন্ট ভেরিয়েবলের মাধ্যমে পৃথকীকরণ'
          },
          text: {
            en: 'Follow the twelve-factor application methodology. Never check production tokens into version control. Keep secrets in local environment files ignored by git, reading them via environment variables at runtime.',
            bn: 'টুয়েলভ-ফ্যাক্টর অ্যাপ মেথডোলজি অনুসরণ করুন। কখনোই প্রোডাকশনের চাবি গিটহাবে রাখবেন না। গিট উপেক্ষা করে এমন লোকাল ফাইলে সিক্রেট রাখুন এবং রানটাইমে তা পড়ুন।'
          },
        },
        {
          title: {
            en: '2. Dedicated Secret Stores and Vaults',
            bn: '২. ডেডিকেটেড সিক্রেট ভল্ট ব্যবহার'
          },
          text: {
            en: 'In production infrastructure, fetch credentials dynamically using secret vaults such as HashiCorp Vault, AWS Secrets Manager, or Google Secret Manager authenticated via identity roles.',
            bn: 'প্রোডাকশন সিস্টেমে হাশিকর্প ভল্ট বা এডব্লিউএস সিক্রেটস ম্যানেজারের মতো ডেডিকেটেড ক্লাউড ভল্ট থেকে আইডেন্টিটি রোলের মাধ্যমে সিক্রেট লোড করুন।'
          },
        },
        {
          title: {
            en: '3. Automated Log Scrubbing',
            bn: '৩. স্বয়ংক্রিয় লগ স্ক্রাবিং'
          },
          text: {
            en: 'Modern applications ship gigabytes of logs to aggregators. Install sanitization middleware that automatically redacts authorization headers, passwords, and sensitive keys with a placeholder.',
            bn: 'আধুনিক অ্যাপ্লিকেশন সার্ভার থেকে প্রচুর লগ ক্লাউডে পাঠায়। এমন ফিল্টার ব্যবহার করুন যা পাসওয়ার্ড, টোকেন এবং গোপন চাবি মুছে ফেলে নিরাপদ রূপ তৈরি করে।'
          },
        },
        {
          title: {
            en: '4. Zero-Downtime Secret Rotation',
            bn: '৪. ডাউনটাইমবিহীন সিক্রেট পরিবর্তন'
          },
          text: {
            en: 'Regularly rotate secrets on a scheduled interval (such as every 90 days). Support a grace window where both current and prior keys remain valid to eliminate deployment outages.',
            bn: 'নিয়মিত বিরতিতে ( যেমন প্রতি ৯০ দিনে ) সিক্রেট পরিবর্তন করুন। সিস্টেম বন্ধ হওয়া এড়াতে একটি নির্দিষ্ট সময় পর্যন্ত বর্তমান ও পূর্ববর্তী উভয় চাবি কার্যকর রাখুন।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Zero-Leakage Secrets Lifecycle: From Source Code to Secure Vault',
        bn: 'তথ্য ফাঁসরোধ সিক্রেট লাইফসাইকেল: সোর্স কোড থেকে সিক্রেট ভল্ট পর্যন্ত'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Zero-leakage secret lifecycle showing Git repo with no secrets, AWS/HashiCorp secret vault, runtime memory injection, and log scrubber">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ZERO-LEAKAGE SECRETS ARCHITECTURE &amp; SECURE ROTATION</text>
  
  <!-- Left Box: Git Repository -->
  <g transform="translate(30, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. SOURCE REPOSITORY</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="70" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="10" font-weight="bold">.gitignore PROTECTED</text>
      <text x="15" y="42" fill="#cbd5e1" font-size="9">.env</text>
      <text x="15" y="58" fill="#cbd5e1" font-size="9">.env.local</text>
      
      <rect y="85" width="200" height="110" rx="4" fill="#0f172a"/>
      <text x="15" y="105" fill="#f8fafc" font-size="9">config.js:</text>
      <text x="25" y="125" fill="#6ee7b7" font-size="8">const dbKey =</text>
      <text x="35" y="140" fill="#6ee7b7" font-size="8">process.env.DB_KEY;</text>
      <text x="15" y="165" fill="#10b981" font-size="8">✓ ZERO Plaintext Keys</text>
      <text x="15" y="180" fill="#10b981" font-size="8">✓ Git Scanners Find Nothing</text>
      
      <rect y="210" width="200" height="80" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="100" y="235" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">SECURITY RESULT</text>
      <text x="15" y="255" fill="#cbd5e1" font-size="8">• Immune to repo leaks</text>
      <text x="15" y="272" fill="#cbd5e1" font-size="8">• Public commit safe</text>
    </g>
  </g>
  
  <!-- Middle Box: Vault & Runtime -->
  <g transform="translate(285, 48)">
    <rect width="270" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="135" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2. CLOUD SECRETS VAULT</text>
    
    <g transform="translate(15, 40)">
      <rect width="240" height="85" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="22" fill="#f59e0b" font-size="10" font-weight="bold">VAULT (KMS / HashiCorp)</text>
      <text x="15" y="42" fill="#cbd5e1" font-size="9">• AES-256 Envelope Encryption</text>
      <text x="15" y="58" fill="#cbd5e1" font-size="9">• Role-based IAM Auth</text>
      <text x="15" y="74" fill="#6ee7b7" font-size="9">• Automatic Audit Access Logs</text>
      
      <rect y="100" width="240" height="95" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="122" fill="#38bdf8" font-size="10" font-weight="bold">RUN-TIME INJECTION</text>
      <text x="15" y="142" fill="#cbd5e1" font-size="9">App authenticates via IAM Role</text>
      <text x="15" y="158" fill="#cbd5e1" font-size="9">Loads secrets into RAM only</text>
      <text x="15" y="174" fill="#6ee7b7" font-size="8">Never written to container disk!</text>
      
      <rect y="210" width="240" height="80" rx="4" fill="#451a03" stroke="#f59e0b"/>
      <text x="120" y="235" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">AUTOMATIC ROTATION</text>
      <text x="15" y="255" fill="#cbd5e1" font-size="8">• Rotates keys every 90 days</text>
      <text x="15" y="272" fill="#cbd5e1" font-size="8">• Zero-downtime dual-key grace</text>
    </g>
  </g>
  
  <!-- Right Box: Observability & Log Scrubber -->
  <g transform="translate(580, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">3. LOG SANITIZER</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="120" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#ef4444" font-size="10" font-weight="bold">INCOMING LOG EVENT</text>
      <text x="15" y="42" fill="#fca5a5" font-size="8">user: "alice",</text>
      <text x="15" y="60" fill="#fca5a5" font-size="8">token: "sk_live_9998",</text>
      <text x="15" y="78" fill="#fca5a5" font-size="8">pass: "P@ss1234"</text>
      <text x="15" y="105" fill="#cbd5e1" font-size="8">Intercepted before output!</text>
      
      <rect y="135" width="200" height="155" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="158" fill="#10b981" font-size="10" font-weight="bold">SCRUBBED AUDIT LOG</text>
      <text x="15" y="180" fill="#6ee7b7" font-size="8">user: "alice",</text>
      <text x="15" y="198" fill="#6ee7b7" font-size="8">token: "[REDACTED]",</text>
      <text x="15" y="216" fill="#6ee7b7" font-size="8">pass: "[REDACTED]"</text>
      <text x="15" y="245" fill="#cbd5e1" font-size="8">✓ Shipped to Datadog / ELK</text>
      <text x="15" y="265" fill="#10b981" font-size="8">✓ Safe for developer viewing</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Zero-leakage architecture: keep secrets out of Git, fetch from vaults at runtime, and sanitize logs automatically</text>
</svg>`,
      caption: {
        en: 'The complete secrets lifecycle: isolated repositories, dynamic vault retrieval at boot, and automatic log scrubbing.',
        bn: 'সম্পূর্ণ সিক্রেট লাইফসাইকেল: রিপোজিটরি পৃথকীকরণ, বুটের সময় ভল্ট থেকে ডাটা আনা এবং লগে স্বয়ংক্রিয় তথ্য গোপনীয়তা নিশ্চিতকরণ।'
      },
    },
    {
      type: 'heading',
      id: 'secure-config-and-scrubber-code',
      text: {
        en: 'Building a Zero-Leakage Secrets Loader and Log Scrubber',
        bn: 'জিরো-লিকেজ সিক্রেট লোডার এবং লগ স্ক্রাবার তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how secure applications handle sensitive credentials without exposing them in console outputs or telemetry streams, inspect the following implementation. It validates required secrets at startup and scrubs sensitive fields from log objects.',
        bn: 'কনসোল আউটপুট বা সার্ভার লগে পাসওয়ার্ড ফাঁস না করে আধুনিক সিস্টেম কীভাবে নিরাপদে সিক্রেট পরিচালনা করে তা দেখতে নিচের কোডটি লক্ষ্য করুন। এটি শুরুতে সিক্রেট পরীক্ষা করে এবং লগের গোপন ডাটা স্বয়ংক্রিয়ভাবে আড়াল করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'secrets-manager-scrubber.js',
      code: `// Enterprise Secrets Manager and Log Scrubbing Engine

class SecureSecretsManager {
  constructor(environmentConfig) {
    this.secrets = new Map();
    this.requiredKeys = ['DATABASE_URL', 'STRIPE_API_KEY', 'JWT_SECRET'];
    this.loadAndValidate(environmentConfig);
  }

  loadAndValidate(env) {
    for (const key of this.requiredKeys) {
      const value = env[key];
      if (!value || typeof value !== 'string' || value.trim() === '') {
        throw new Error('CRITICAL FATAL ERROR: Missing required secret: ' + key);
      }
      this.secrets.set(key, value.trim());
    }
  }

  getSecret(key) {
    if (!this.secrets.has(key)) {
      throw new Error('Secret not found: ' + key);
    }
    return this.secrets.get(key);
  }
}

class LogScrubber {
  static SENSITIVE_PATTERN = /password|secret|token|apikey|authorization|bearer|cookie/i;

  static sanitize(data) {
    if (data === null || data === undefined) return data;
    if (typeof data !== 'object') return data;

    if (Array.isArray(data)) {
      return data.map(item => LogScrubber.sanitize(item));
    }

    const sanitizedObject = {};
    for (const [key, value] of Object.entries(data)) {
      if (LogScrubber.SENSITIVE_PATTERN.test(key)) {
        sanitizedObject[key] = '[REDACTED]';
      } else if (typeof value === 'object' && value !== null) {
        sanitizedObject[key] = LogScrubber.sanitize(value);
      } else {
        sanitizedObject[key] = value;
      }
    }
    return sanitizedObject;
  }
}

console.log('=== Step 1: Bootstrapping Secrets Safely ===');
const mockEnvironment = {
  DATABASE_URL: 'postgres://app:p@ssword_99@prod-db.internal:5432/main',
  STRIPE_API_KEY: 'sk_live_51abcdef1234567890',
  JWT_SECRET: 'super-secret-cryptographic-signing-key-256'
};

const secretsManager = new SecureSecretsManager(mockEnvironment);
console.log('Database URL loaded in memory (length):', secretsManager.getSecret('DATABASE_URL').length);

console.log('\\n=== Step 2: Logging Request with Sensitive Tokens ===');
const telemetryLog = {
  requestId: 'req-8821',
  user: { id: 42, username: 'alice' },
  request: {
    method: 'POST',
    path: '/api/v1/checkout',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    payload: {
      password: 'UserConfidentialPassword123!',
      amount: 49.99
    }
  }
};

console.log('Raw Dangerous Log Event (Contains Secrets):');
console.log(JSON.stringify(telemetryLog, null, 2));

console.log('\\n=== Step 3: Scrubbed Log Output (Zero Secrets Leaked) ===');
const safeLog = LogScrubber.sanitize(telemetryLog);
console.log(JSON.stringify(safeLog, null, 2));`,
      caption: {
        en: 'The secrets manager validates environment secrets at startup, while the log scrubber masks sensitive properties.',
        bn: 'সিক্রেটস ম্যানেজার শুরুতে সব সিক্রেট যাচাই করে এবং লগ স্ক্রাবার সংবেদনশীল সমস্ত মান আড়াল করে লগকে নিরাপদ রাখে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Memory Safety and Garbage Collection in High-Security Apps',
        bn: 'উচ্চ নিরাপত্তাযুক্ত সিস্টেমে মেমোরি সুরক্ষা এবং গার্বেজ কালেকশন'
      },
      text: {
        en: 'In high-level languages like JavaScript, strings are immutable. When an API key or password string is no longer needed, it remains inside heap memory until garbage collection runs, leaving it vulnerable to core dump inspection. In high-security native environments, developers allocate cryptographic secrets inside mutable memory buffers and explicitly overwrite the memory space with zeros immediately after cryptographic operations are completed.',
        bn: 'জাভাস্ক্রিপ্টের মতো উচ্চস্তরের ভাষায় স্ট্রিং অপরিবর্তনীয়। ফলে কোনো পাসওয়ার্ড বা এপিআই কি-এর কাজ শেষ হলেও এটি মেমোরির হিপে গার্বেজ কালেকশন না হওয়া পর্যন্ত থেকে যায়, যা মেমোরি ডাম্পের মাধ্যমে ফাঁস হতে পারে। অত্যন্ত সংবেদনশীল সিস্টেমে ডেভলপাররা মিউটেবল বাফার ব্যবহার করেন এবং কাজ শেষ হওয়ামাত্র মেমোরির সেই অংশ শূন্য দিয়ে মুছে ফেলে নিরাপত্তা নিশ্চিত করেন।'
      },
    },
  ],
  exercises: [
    {
      id: 'sec-hand-ex-1',
      kind: 'predict',
      topic: 'zero-leakage-pillars',
      question: {
        en: 'How many primary pillars (Environment Decoupling, Dedicated Vaults, Log Scrubbing, Graceful Rotation) form the zero-leakage architecture? (4). Type the number.',
        bn: 'তথ্য ফাঁসরোধ সিক্রেট আর্কিটেকচার গঠনের প্রধান ভিত্তি ( এনভায়রনমেন্ট পৃথকীকরণ, ডেডিকেটেড ভল্ট, লগ স্ক্রাবিং, গ্রেসফুল রোটেশন ) সর্বমোট কয়টি? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Count the 4 architectural pillars.',
        bn: '৪ টি প্রধান ভিত্তি গণনা করুন।'
      },
      explanation: {
        en: 'The 4 pillars ensure secrets remain protected from code creation through deployment and monitoring.',
        bn: 'এই ৪ টি ভিত্তি নিশ্চিত করে যে সিক্রেট তৈরি থেকে শুরু করে পর্যবেক্ষণ পর্যন্ত সর্বদা সুরক্ষিত থাকবে।'
      },
    },
    {
      id: 'sec-hand-ex-2',
      kind: 'mcq',
      topic: 'git-commit-history-hazard',
      question: {
        en: 'What happens when a database password is accidentally committed to a public Git repository, even if removed five minutes later?',
        bn: 'একটি ডাটাবেজ পাসওয়ার্ড যদি ভুলবশত পাবলিক গিট রিপোজিটরিতে পুশ করা হয় এবং ৫ মিনিট পর তা মুছে ফেলা হয়, তবে কী ঘটে?'
      },
      options: [
        {
          en: 'The secret remains permanently recorded in the immutable Git commit history, and automated bot scrapers harvest and exploit it within seconds of the initial push',
          bn: 'সিক্রেটটি গিটের স্থায়ী কমিট হিস্ট্রিতে থেকে যায় এবং প্রাথমিক পুশের কয়েক সেকেন্ডের মধ্যেই স্বয়ংক্রিয় রোবট স্ক্র্যাপার তা চুরি করে ফেলে',
        },
        {
          en: 'Git automatically teleports back in time and erases the commit from all computers',
          bn: 'গিট স্বয়ংক্রিয়ভাবে অতীতে ফিরে গিয়ে সমস্ত কম্পিউটার থেকে সেই কমিট মুছে ফেলে',
        },
        {
          en: 'The computer keyboard immediately sounds a loud physical police siren',
          bn: 'কম্পিউটারের কিবোর্ড থেকে সাথে সাথে তীব্র পুলিশ সাইরেন বাজতে শুরু করে',
        },
        {
          en: 'All internet network cables change color to prevent hackers from connecting',
          bn: 'হ্যাকারদের আক্রমণ ঠেকাতে সমস্ত ইন্টারনেট নেটওয়ার্ক তারের রঙ বদলে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Git commit history retains all committed data permanently.',
        bn: 'গিটের ইতিহাস সমস্ত কমিট করা ডাটাকে স্থায়ীভাবে ধরে রাখে।',
      },
      explanation: {
        en: 'Removing a secret in a newer commit does not erase it from history. Attackers monitor GitHub commit streams in real time. The key must be revoked immediately.',
        bn: 'নতুন কমিটে মুছলেও পুরানো হিস্ট্রিতে ডাটা থাকে। আক্রমণকারীরা রিয়েল-টাইমে গিটহাব পর্যবেক্ষণ করে, তাই চাবিটি সাথে সাথে বাতিল করতে হবে।'
      },
    },
    {
      id: 'sec-hand-ex-3',
      kind: 'mcq',
      topic: 'log-scrubber-mitigation',
      question: {
        en: 'How does automated log scrubbing protect microservices from accidental credential disclosure?',
        bn: 'স্বয়ংক্রিয় লগ স্ক্রাবিং কীভাবে মাইক্রোসার্ভিসগুলোকে দুর্ঘটনাবশত পাসওয়ার্ড ফাঁস হওয়া থেকে রক্ষা করে?'
      },
      options: [
        {
          en: 'It intercepts telemetry logs before transmission and replaces sensitive keys (passwords, tokens, authorization headers) with non-reversible redacted placeholders',
          bn: 'এটি লগ সার্ভারে পাঠানোর আগেই তা পরীক্ষা করে এবং পাসওয়ার্ড, টোকেন ও সিক্রেট কি-গুলোকে [REDACTED] দিয়ে আড়াল করে দেয়',
        },
        {
          en: 'It deletes all user accounts from the database every midnight',
          bn: 'এটি প্রতি মধ্যরাতে ডাটাবেজ থেকে সমস্ত ব্যবহারকারীর অ্যাকাউন্ট মুছে দেয়',
        },
        {
          en: 'It shuts down internet routers whenever someone visits the login page',
          bn: 'লগইন পেজে কেউ প্রবেশ করলেই এটি ইন্টারনেট রাউটার বন্ধ করে দেয়',
        },
        {
          en: 'It prints paper copies of all log messages and locks them in a metal safe',
          bn: 'এটি সমস্ত লগ কাগজের নথিতে প্রিন্ট করে লোহার সিন্দুকে তালাবদ্ধ করে রাখে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Log scrubbers mask sensitive properties with redacted markers.',
        bn: 'লগ স্ক্রাবার সংবেদনশীল মানগুলোকে আড়াল করে নিরাপদ রূপ দেয়।',
      },
      explanation: {
        en: 'Scrubbers redact passwords and bearer tokens before log events enter third-party observability platforms, preventing team-wide credential leakage.',
        bn: 'স্ক্রাবার ক্লাউড প্ল্যাটফর্মে লগ পাঠানোর আগেই পাসওয়ার্ড মুছে ফেলে দলের সবার কাছে চাবি ফাঁস হওয়া ঠেকায়।'
      },
    },
    {
      id: 'sec-hand-ex-4',
      kind: 'predict',
      topic: 'ninety-day-rotation-cycle',
      question: {
        en: 'If a company security policy mandates secret key rotation every 90 days, how many days is that rotation interval? (90). Type the number.',
        bn: 'একটি প্রতিষ্ঠানের নীতিমালায় যদি প্রতি ৯০ দিন পর পর সিক্রেট চাবি পরিবর্তনের নির্দেশ থাকে, তবে সেই রোটেশন বিরতি কত দিনের? ( ৯০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '90',
      hint: {
        en: 'The standard rotation cycle is 90 days.',
        bn: 'স্ট্যান্ডার্ড পরিবর্তন চক্র হলো ৯০ দিন।'
      },
      explanation: {
        en: 'A 90-day rotation policy limits the temporal window of exposure if a credential is leaked without detection.',
        bn: '৯০ দিনের রোটেশন নীতি কোনো চাবি অজান্তে ফাঁস হলেও ক্ষতির সম্ভাব্য সময়সীমাকে সীমাবদ্ধ করে।'
      },
    },
  ],
  quiz: {
    id: 'secrets-handling-quiz',
    title: {
      en: 'Secrets Handling & Vault Architecture Quiz',
      bn: 'সিক্রেট হ্যান্ডলিং ও ভল্ট আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'sec-hand-qz-1',
        kind: 'mcq',
        topic: 'twelve-factor-secrets',
        question: {
          en: 'Why does the Twelve-Factor Application methodology strictly mandate storing configuration credentials in the environment rather than configuration files?',
          bn: 'টুয়েলভ-ফ্যাক্টর অ্যাপ্লিকেশন মেথডোলজি কেন কনফিগারেশন ফাইলের বদলে এনভায়রনমেন্টে সিক্রেট রাখা বাধ্যতামূলক করেছে?'
        },
        options: [
          {
            en: 'Environment variables are decoupled from the codebase, allowing different credentials per environment (dev, staging, prod) without risking accidental Git commits',
            bn: 'এনভায়রনমেন্ট ভেরিয়েবল কোডবেস থেকে সম্পূর্ণ স্বাধীন থাকে, ফলে গিটহাবে পাসওয়ার্ড ফাঁসের ঝুঁকি ছাড়াই বিভিন্ন পরিবেশের (dev, prod) জন্য আলাদা চাবি ব্যবহার করা যায়',
          },
          {
            en: 'Because computer microchips only run code that uses environment variables',
            bn: 'কারণ কম্পিউটারের মাইক্রোচিপ কেবল এনভায়রনমেন্ট ভেরিয়েবলযুক্ত কোড চালাতে পারে',
          },
          {
            en: 'Because configuration files consume 100 times more hard drive power',
            bn: 'কারণ কনফিগারেশন ফাইল হার্ড ড্রাইভের ১০০ গুণ বেশি বিদ্যুৎ খরচ করে',
          },
          {
            en: 'Because environment variables make server screens display green text',
            bn: 'কারণ এনভায়রনমেন্ট ভেরিয়েবল সার্ভারের পর্দায় সবুজ লেখা প্রদর্শন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Environment variables prevent accidental repository commits across environments.',
          bn: 'এনভায়রনমেন্ট ভেরিয়েবল বিভিন্ন পরিবেশে কোড পুশের সময় পাসওয়ার্ড ফাঁস রোধ করে।',
        },
        explanation: {
          en: 'Decoupling secrets from files prevents accidental version control commits and allows dynamic deployment across diverse cloud targets.',
          bn: 'ফাইল থেকে সিক্রেট আলাদা রাখলে গিটহাবে তথ্য ফাঁসের ঝুঁকি থাকে না এবং নিরাপদে ক্লাউডে কোড চালানো যায়।'
        },
      },
      {
        id: 'sec-hand-qz-2',
        kind: 'mcq',
        topic: 'zero-downtime-rotation',
        question: {
          en: 'How does a dual-key grace window enable zero-downtime secret rotation across hundreds of microservices?',
          bn: 'একটি ডুয়াল-কি গ্রেস উইন্ডো কীভাবে শত শত মাইক্রোসার্ভিসে কোনো সিস্টেম বন্ধ না করেই (জিরো-ডাউনটাইম) সিক্রেট পরিবর্তনের সুযোগ দেয়?'
        },
        options: [
          {
            en: 'Services accept both the new key and the previous retiring key simultaneously during the rollout, preventing authentication failures while containers gradually restart',
            bn: 'রোলআউটের সময় সার্ভিসগুলো একই সাথে নতুন চাবি এবং পুরানো চাবি উভয়কেই গ্রহণ করে, ফলে ধীরে ধীরে কন্টেইনার রিস্টার্ট হলেও কোনো রিকোয়েস্টে এরর আসে না',
          },
          {
            en: 'By freezing all internet user traffic worldwide for thirty minutes',
            bn: 'সারাবিশ্বের সমস্ত ইন্টারনেট ব্যবহারকারীর রিকোয়েস্ট ৩০ মিনিটের জন্য জমিয়ে রেখে',
          },
          {
            en: 'By generating physical keys that developers must plug into server USB ports',
            bn: 'শারীরিক চাবি তৈরি করে যা ইঞ্জিনিয়ারদের সার্ভারের ইউএসবি পোর্টে লাগাতে হয়',
          },
          {
            en: 'By deleting the database and restoring from a backup tape each morning',
            bn: 'প্রতি সকালে ডাটাবেজ মুছে ফেলে পুরানো ব্যাকআপ থেকে নতুন করে ডাটা এনে',
          },
        ],
        answer: 0,
        hint: {
          en: 'A dual-key window validates both keys during rolling updates.',
          bn: 'ডুয়াল-কি উইন্ডো রোলিং আপডেটের সময় উভয় চাবিকেই বৈধ হিসেবে গ্রহণ করে।',
        },
        explanation: {
          en: 'During rolling deployments, some nodes have the old key while others have the new key. Dual-key validation ensures uninterrupted traffic.',
          bn: 'রোলিং আপডেটের সময় কিছু সার্ভারে পুরানো এবং কিছুতে নতুন চাবি থাকে। ডুয়াল-কি উভয়কেই সমর্থন দিয়ে নিরবচ্ছিন্ন সেবা দেয়।'
        },
      },
      {
        id: 'sec-hand-qz-3',
        kind: 'mcq',
        topic: 'iam-role-vault-authentication',
        question: {
          en: 'What major security advantage do cloud IAM roles provide when authenticating to secret vaults compared to static API tokens?',
          bn: 'স্ট্যাটিক এপিআই টোকেনের তুলনায় সিক্রেট ভল্টে লগইন করতে ক্লাউড IAM রোল ব্যবহার করার সবচেয়ে বড় নিরাপত্তা সুবিধা কী?'
        },
        options: [
          {
            en: 'IAM roles use short-lived temporary cryptographic tokens issued directly to the compute instance, eliminating long-lived bootstrap master keys that can be stolen',
            bn: 'IAM রোল স্বল্পস্থায়ী টোকেন ইস্যু করে সরাসরি সার্ভার ইনস্ট্যান্সে পাঠায়, ফলে চুরি হওয়ার মতো কোনো দীর্ঘস্থায়ী মাস্টার চাবি সংরক্ষণ করার প্রয়োজন হয় না',
          },
          {
            en: 'IAM roles prevent server hardware components from ever rusting or failing',
            bn: 'IAM রোল সার্ভারের কোনো হার্ডওয়্যারে মরিচা পড়া বা নষ্ট হওয়া চিরতরে রোধ করে',
          },
          {
            en: 'IAM roles make Wi-Fi router signals pass through metal vault walls',
            bn: 'IAM রোল ওয়াই-ফাই সিগন্যালকে ধাতব দেয়ালের ভেতর দিয়ে নির্বিঘ্নে যেতে সাহায্য করে',
          },
          {
            en: 'IAM roles speed up local broadband internet downloads by twenty times',
            bn: 'IAM রোল স্থানীয় ব্রডব্যান্ড ইন্টারনেটের গতি ২০ গুণ বৃদ্ধি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'IAM roles issue short-lived credentials, eliminating static master secrets.',
          bn: 'IAM রোল স্বল্পস্থায়ী চাবি দেয়, ফলে কোনো স্থায়ী মাস্টার সিক্রেট থাকে না।',
        },
        explanation: {
          en: 'Static tokens present a chicken-and-egg problem: how to store the token that accesses secrets? IAM roles solve this with identity-bound temporary STS tokens.',
          bn: 'স্থায়ী টোকেন রাখা নিজেই একটি ঝুঁকি। IAM রোল সার্ভারের পরিচয়ের ভিত্তিতে অস্থায়ী টোকেন দিয়ে এই সমস্যার চূড়ান্ত সমাধান করে।'
        },
      },
      {
        id: 'sec-hand-qz-4',
        kind: 'mcq',
        topic: 'git-leaks-remediation',
        question: {
          en: 'If an engineer accidentally pushes a private production Stripe key to GitHub, what is the single mandatory corrective action that must be taken immediately?',
          bn: 'কোনো প্রকৌশলী ভুলবশত গিটহাবে প্রোডাকশন স্ট্রাইপ এপিআই কি পুশ করে ফেললে তাৎক্ষণিকভাবে সবচেয়ে জরুরি কোন পদক্ষেপটি নেওয়া বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'Immediately revoke and invalidate the compromised key in the Stripe dashboard and generate a brand-new secret key',
            bn: 'তাৎক্ষণিকভাবে স্ট্রাইপ ড্যাশবোর্ডে গিয়ে ফাঁস হওয়া চাবিটি বাতিল (revoke) করতে হবে এবং সম্পূর্ণ নতুন একটি সিক্রেট তৈরি করতে হবে',
          },
          {
            en: 'Change the Git commit message to apologize to other team developers',
            bn: 'অন্যান্য ডেভেলপারদের কাছে ক্ষমা চেয়ে গিট কমিট মেসেজটি পরিবর্তন করা',
          },
          {
            en: 'Unplug the developer monitor from its electrical wall outlet for an hour',
            bn: 'এক ঘণ্টার জন্য ডেভেলপারের কম্পিউটারের মনিটরের বিদ্যুৎ সংযোগ বিচ্ছিন্ন রাখা',
          },
          {
            en: 'Rename the GitHub repository folder so hackers cannot find it',
            bn: 'গিটহাব ফোল্ডারের নাম বদলে দেওয়া যাতে হ্যাকাররা এটি সহজে খুঁজে না পায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Revoke the compromised secret immediately at the provider dashboard.',
          bn: 'সার্ভিস প্রোভাইডারের ড্যাশবোর্ড থেকে ফাঁস হওয়া চাবি সাথে সাথে বাতিল করুন।',
        },
        explanation: {
          en: 'Once leaked, a secret must be assumed captured. Deleting commits does not protect against automated scrapers. Immediate key revocation is mandatory.',
          bn: 'একবার ফাঁস হলে ধরে নিতে হবে চাবিটি চুরি হয়ে গেছে। গিট কমিট মুছলে লাভ নেই, সাথে সাথে চাবিটি বাতিল করতে হবে।'
        },
      },
    ],
  },
  next: {
    slug: 'secure-errors',
    title: {
      en: 'Secure Error Handling: Information Leakage & Stack Sanitization',
      bn: 'নিরাপদ এরর হ্যান্ডলিং: তথ্য ফাঁসরোধ এবং স্ট্যাক স্যানিটাইজেশন'
    },
  },
};
