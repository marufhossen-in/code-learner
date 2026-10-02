import type { Lesson } from '../../../lib/types';

export const BucketsAndTheBucketLesson: Lesson = {
  slug: 'buckets-and-the-bucket',
  tech: 'object-storage',
  title: {
    en: 'Buckets: Namespaces, Regions & Access Policies',
    bn: 'বাকেট: নেমস্পেস, রিজিয়ন এবং অ্যাক্সেস পলিসি'
  },
  summary: {
    en: 'Master S3 bucket architecture: globally unique DNS namespaces, regional data sovereignty, JSON resource policies, Block Public Access, and CORS rules.',
    bn: 'S3 বাকেট আর্কিটেকচার আয়ত্ত করুন: বিশ্বব্যাপী অনন্য DNS নেমস্পেস, আঞ্চলিক ডাটা সার্বভৌমত্ব, JSON রিসোর্স পলিসি, ব্লক পাবলিক অ্যাক্সেস এবং CORS রুল।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'bucket-fundamentals',
      text: {
        en: '1. What is an S3 Bucket?',
        bn: '১. S3 বাকেট কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you organize files in object storage, a bucket serves as the top-level root container for your objects. Every object stored in an S3-compatible service must reside inside exactly 1 bucket.',
        bn: 'যখন আপনি অবজেক্ট স্টোরেজে ফাইল গুছিয়ে রাখেন, একটি বাকেট আপনার সমস্ত অবজেক্টের শীর্ষস্থানীয় রুট কন্টেইনার হিসেবে কাজ করে। S3-সামঞ্জস্যপূর্ণ যেকোনো সেবায় প্রতিটি অবজেক্ট অবশ্যই ঠিক ১ টি নির্দিষ্ট বাকেটের ভেতর অবস্থান করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Buckets possess 2 non-negotiable architectural properties that every systems architect must consider during infrastructure setup:',
        bn: 'বাকেটের ক্ষেত্রে ২ টি অপরিহার্য আর্কিটেকচারাল বৈশিষ্ট্য রয়েছে যা অবকাঠামো তৈরির সময় অবশ্যই বিবেচনা করতে হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Globally Unique Namespace: Bucket names must be globally unique across all existing cloud accounts worldwide within a partition. Because bucket names form public DNS endpoints (e.g. "bucket-name.s3.us-east-1.amazonaws.com"), no 2 accounts can register the same name. Names must be between 3 and 63 characters long and contain only lowercase letters, numbers, and hyphens.',
          bn: '১. বিশ্বব্যাপী অনন্য নেমস্পেস: একটি বাকেটের নাম পুরো বিশ্বে বিদ্যমান সমস্ত ক্লাউড অ্যাকাউন্টের মাঝে অনন্য হতে হবে। বাকেটের নাম দিয়ে পাবলিক DNS এন্ডপয়েন্ট তৈরি হয় (যেমন "bucket-name.s3.us-east-1.amazonaws.com"), তাই কোনো ২ টি অ্যাকাউন্ট একই নাম ব্যবহার করতে পারে না। নামটি ৩ থেকে ৬৩ অক্ষরের হতে হবে এবং শুধু ছোট হাতের অক্ষর, সংখ্যা ও হাইফেন থাকতে হবে।'
        },
        {
          en: '2. Regional Data Residency: When creating a bucket, you select a specific cloud region (such as us-east-1 in Virginia or eu-central-1 in Frankfurt). Objects placed in that bucket never leave that geographical region unless you explicitly configure automated cross-region replication. This guarantees compliance with international data sovereignty laws like GDPR.',
          bn: '২. আঞ্চলিক ডাটা সংরক্ষণ: বাকেট তৈরির সময় একটি নির্দিষ্ট ক্লাউড অঞ্চল বা রিজিয়ন (যেমন ভার্জিনিয়ার us-east-1 অথবা ফ্রাঙ্কফুর্টের eu-central-1) নির্বাচন করতে হয়। আপনি নিজে থেকে ক্রস-রিজিয়ন রেপ্লিকেশন কনফিগার না করা পর্যন্ত অবজেক্ট কখনোই সেই ভৌগোলিক অঞ্চলের বাইরে যায় না, যা GDPR এর মতো ডাটা সার্বভৌমত্ব আইন মেনে চলা নিশ্চিত করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'bucket-security-diagram',
      title: {
        en: 'S3 Bucket Security & Access Evaluation Architecture',
        bn: 'S3 বাকেট নিরাপত্তা এবং অ্যাক্সেস যাচাই আর্কিটেকচার'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">S3 Bucket Access Control &amp; Security Pipeline</text>' +
          '<!-- Stage 1: Incoming Request -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="145" height="320" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="72" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. CLIENT REQUEST</text>' +
            '<rect x="10" y="45" width="125" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="18" y="68" fill="#38bdf8" font-size="10" font-weight="bold">HTTPS Request</text>' +
            '<text x="18" y="86" fill="#94a3b8" font-size="9">GET /data/file.csv</text>' +
            '<rect x="10" y="115" width="125" height="70" rx="6" fill="#0f172a"/>' +
            '<text x="18" y="136" fill="#facc15" font-size="10" font-weight="bold">Credentials</text>' +
            '<text x="18" y="154" fill="#cbd5e1" font-size="9">SigV4 signature OR</text>' +
            '<text x="18" y="170" fill="#cbd5e1" font-size="9">Anonymous public</text>' +
            '<text x="72" y="240" fill="#94a3b8" font-size="10" text-anchor="middle">Origin: Web Browser</text>' +
            '<text x="72" y="258" fill="#38bdf8" font-size="10" text-anchor="middle">or Backend Server</text>' +
          '</g>' +
          '<!-- Arrow 1 -->' +
          '<path d="M 185 200 L 210 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Stage 2: Block Public Access Gate -->' +
          '<g transform="translate(220, 60)">' +
            '<rect width="165" height="320" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>' +
            '<text x="82" y="26" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">2. BLOCK PUBLIC ACCESS</text>' +
            '<rect x="10" y="45" width="145" height="110" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>' +
            '<text x="18" y="68" fill="#ef4444" font-size="10" font-weight="bold">&#128737; 4 Global Toggles</text>' +
            '<text x="18" y="88" fill="#cbd5e1" font-size="8">&#x2714; BlockPublicAcls</text>' +
            '<text x="18" y="104" fill="#cbd5e1" font-size="8">&#x2714; IgnorePublicAcls</text>' +
            '<text x="18" y="120" fill="#cbd5e1" font-size="8">&#x2714; BlockPublicPolicy</text>' +
            '<text x="18" y="136" fill="#cbd5e1" font-size="8">&#x2714; RestrictPublicBuckets</text>' +
            '<text x="82" y="235" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Central Kill-Switch</text>' +
            '<text x="82" y="252" fill="#94a3b8" font-size="9" text-anchor="middle">Blocks accidental leaks</text>' +
          '</g>' +
          '<!-- Arrow 2 -->' +
          '<path d="M 395 200 L 420 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Stage 3: Policy Evaluation -->' +
          '<g transform="translate(430, 60)">' +
            '<rect width="175" height="320" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="87" y="26" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">3. POLICY EVALUATION</text>' +
            '<rect x="10" y="45" width="155" height="65" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="18" y="68" fill="#c084fc" font-size="10" font-weight="bold">Bucket Policy (JSON)</text>' +
            '<text x="18" y="86" fill="#94a3b8" font-size="9">Resource-based rules</text>' +
            '<text x="18" y="100" fill="#34d399" font-size="9">aws:SecureTransport</text>' +
            '<rect x="10" y="120" width="155" height="65" rx="6" fill="#0f172a"/>' +
            '<text x="18" y="142" fill="#facc15" font-size="10" font-weight="bold">IAM Policies</text>' +
            '<text x="18" y="160" fill="#94a3b8" font-size="9">Role / User permissions</text>' +
            '<text x="18" y="174" fill="#38bdf8" font-size="9">s3:GetObject allowed</text>' +
            '<text x="87" y="240" fill="#cbd5e1" font-size="10" text-anchor="middle">Explicit Deny wins</text>' +
            '<text x="87" y="258" fill="#34d399" font-size="10" text-anchor="middle">Default Deny</text>' +
          '</g>' +
          '<!-- Arrow 3 -->' +
          '<path d="M 615 200 L 640 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Stage 4: Bucket Storage -->' +
          '<g transform="translate(650, 60)">' +
            '<rect width="120" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="60" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">4. REGION</text>' +
            '<rect x="10" y="45" width="100" height="65" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="16" y="68" fill="#34d399" font-size="10" font-weight="bold">eu-central-1</text>' +
            '<text x="16" y="86" fill="#94a3b8" font-size="9">Frankfurt Cluster</text>' +
            '<text x="16" y="100" fill="#cbd5e1" font-size="8">Multi-AZ (3+)</text>' +
            '<text x="60" y="160" fill="#38bdf8" font-size="10" text-anchor="middle">CORS Enabled</text>' +
            '<text x="60" y="178" fill="#94a3b8" font-size="9" text-anchor="middle">Origin check &#x2714;</text>' +
            '<text x="60" y="250" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">200 OK</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'policies-and-security',
      text: {
        en: '2. Bucket Policies, Block Public Access, and CORS',
        bn: '২. বাকেট পলিসি, ব্লক পাবলিক অ্যাক্সেস এবং CORS'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Securing cloud storage requires combining 3 distinct security controls across the bucket:',
        bn: 'ক্লাউড স্টোরেজ সুরক্ষিত করতে বাকেটের ওপর ৩ টি স্বতন্ত্র নিরাপত্তা ব্যবস্থা সমন্বয় করতে হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bucket Policies: Resource-based JSON policy documents attached directly to the bucket. They grant or deny permissions to external AWS accounts, anonymous users, or IP address CIDR ranges. A mandatory best practice is enforcing HTTPS by adding an explicit Deny statement for requests where aws:SecureTransport is false.',
          bn: 'বাকেট পলিসি: সরাসরি বাকেটে যুক্ত করা রিসোর্স-ভিত্তিক JSON পলিসি ডকুমেন্ট। এটি বাইরের ক্লাউড অ্যাকাউন্ট, পাবলিক ইউজার বা আইপি রেঞ্জকে অনুমতি বা নিষেধাজ্ঞা দেয়। এর একটি আবশ্যকীয় নিরাপত্তা অনুশীলন হলো aws:SecureTransport ফলস হলে ডিনাই করে HTTPS বাধ্য করা।'
        },
        {
          en: 'Block Public Access (BPA): A centralized 4-toggle security switch that overrides all bucket policies and ACLs, guaranteeing that accidental configuration mistakes cannot expose private company data to the public internet.',
          bn: 'ব্লক পাবলিক অ্যাক্সেস (BPA): একটি ৪-টগল বিশিষ্ট কেন্দ্রীয় নিরাপত্তা সুইচ যা সমস্ত বাকেট পলিসি ও ACL-কে অগ্রাহ্য করে নিশ্চিত করে যে ভুলের কারণেও কোনো ডাটা ইন্টারনেটে ফাঁস হতে পারবে না।'
        },
        {
          en: 'Cross-Origin Resource Sharing (CORS): Defines rules allowing client-side web applications hosted on 1 domain (e.g. https://example.com) to load assets directly from the S3 bucket domain via HTTP GET or PUT requests.',
          bn: 'ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS): নিয়ম নির্ধারণ করে যার মাধ্যমে কোনো ১ টি ডোমেইনে (যেমন https://example.com) চলা ওয়েব অ্যাপ সরাসরি S3 বাকেট ডোমেইন থেকে ফাইল লোড বা আপলোড করতে পারে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'bucket-simulator',
      text: {
        en: '3. Bucket Policy Evaluator in TypeScript',
        bn: '৩. TypeScript এ বাকেট পলিসি মূল্যায়ন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an object storage access controller evaluates incoming HTTP requests against JSON bucket policy statements, enforcing HTTPS transport and CORS preflight verification:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি অবজেক্ট স্টোরেজ অ্যাক্সেস কন্ট্রোলার JSON বাকেট পলিসি দিয়ে আগত রিকোয়েস্ট যাচাই করে, HTTPS বাধ্য করে এবং CORS অনুমোদন পরিচালনা করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 bucket policy evaluation, HTTPS transport enforcement, and CORS preflight matching.',
        bn: 'S3 বাকেট পলিসি মূল্যায়ন, HTTPS বাধ্যবাধকতা এবং CORS যাচাইয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of S3 Bucket Policy Evaluation & CORS Preflight Rules
interface PolicyStatement {
  sid: string;
  effect: 'Allow' | 'Deny';
  principal: string; // '*' or specific account
  action: string[]; // e.g. ['s3:GetObject', 's3:PutObject']
  requireSecureTransport?: boolean;
}

interface CORSRule {
  allowedOrigins: string[];
  allowedMethods: string[];
  maxAgeSeconds: number;
}

class S3BucketManager {
  private blockPublicAccess: boolean = true;
  private policies: PolicyStatement[] = [];
  private corsRules: CORSRule[] = [];

  setBlockPublicAccess(enabled: boolean): void {
    this.blockPublicAccess = enabled;
  }

  addPolicy(statement: PolicyStatement): void {
    this.policies.push(statement);
  }

  setCORSRules(rules: CORSRule[]): void {
    this.corsRules = rules;
  }

  // Evaluates whether an HTTP request is permitted
  evaluateAccess(
    action: string,
    isHttps: boolean,
    isAnonymous: boolean
  ): { allowed: boolean; reason: string } {
    // 1. Check Block Public Access kill switch
    if (this.blockPublicAccess && isAnonymous) {
      return { allowed: false, reason: 'Denied by Block Public Access' };
    }

    // 2. Check explicit Deny rules (Explicit Deny always wins)
    for (const stmt of this.policies) {
      if (stmt.effect === 'Deny' && stmt.requireSecureTransport && !isHttps) {
        return { allowed: false, reason: 'Denied: Plaintext HTTP rejected by aws:SecureTransport' };
      }
    }

    // 3. Check Allow rules
    let hasExplicitAllow = false;
    for (const stmt of this.policies) {
      if (stmt.effect === 'Allow' && stmt.action.includes(action)) {
        hasExplicitAllow = true;
      }
    }

    if (hasExplicitAllow) {
      return { allowed: true, reason: 'Authorized by bucket policy' };
    }
    return { allowed: false, reason: 'Default Deny: No statement explicitly allows this action' };
  }

  // Evaluates browser CORS preflight check
  evaluateCORS(origin: string, method: string): boolean {
    for (const rule of this.corsRules) {
      const originMatch = rule.allowedOrigins.includes('*') || rule.allowedOrigins.includes(origin);
      const methodMatch = rule.allowedMethods.includes(method);
      if (originMatch && methodMatch) return true;
    }
    return false;
  }
}

// 1. Configure bucket with HTTPS enforcement policy
const bucket = new S3BucketManager();
bucket.addPolicy({
  sid: 'EnforceTLSRequestsOnly',
  effect: 'Deny',
  principal: '*',
  action: ['s3:*'],
  requireSecureTransport: true
});
bucket.addPolicy({
  sid: 'AllowRead',
  effect: 'Allow',
  principal: '*',
  action: ['s3:GetObject']
});

// Configure CORS for web portal
bucket.setCORSRules([
  {
    allowedOrigins: ['https://app.example.com'],
    allowedMethods: ['GET', 'PUT'],
    maxAgeSeconds: 3000
  }
]);

// 2. Test unencrypted plaintext HTTP request
const httpAttempt = bucket.evaluateAccess('s3:GetObject', false, false);
console.log('Plaintext HTTP Access Allowed?: ' + httpAttempt.allowed); // -> false
console.log('Denial Reason: ' + httpAttempt.reason);

// 3. Test encrypted HTTPS request
const httpsAttempt = bucket.evaluateAccess('s3:GetObject', true, false);
console.log('HTTPS Access Allowed?: ' + httpsAttempt.allowed); // -> true

// 4. Test CORS preflight from authorized domain
const corsAllowed = bucket.evaluateCORS('https://app.example.com', 'GET');
console.log('CORS Preflight Allowed?: ' + corsAllowed); // -> true

// 5. Test CORS preflight from malicious untrusted domain
const corsBlocked = bucket.evaluateCORS('https://malicious-site.org', 'GET');
console.log('Untrusted Domain CORS Allowed?: ' + corsBlocked); // -> false`
    }
  ],
  exercises: [
    {
      id: 'bkt-ex-1',
      kind: 'mcq',
      question: {
        en: 'What naming constraint applies to Amazon S3 bucket names across the entire cloud platform?',
        bn: 'পুরো ক্লাউড প্ল্যাটফর্মজুড়ে Amazon S3 বাকেটের নামের ক্ষেত্রে কোন নিয়মটি প্রযোজ্য?'
      },
      options: [
        {
          en: 'Bucket names must be globally unique across all AWS accounts worldwide',
          bn: 'বাকেটের নাম বিশ্বজুড়ে সমস্ত AWS অ্যাকাউন্টের মাঝে অনন্য হতে হবে'
        },
        {
          en: 'Bucket names are only unique within your own single AWS account',
          bn: 'বাকেটের নাম কেবল আপনার নিজস্ব একটি AWS অ্যাকাউন্টের ভেতর অনন্য হলেই চলে'
        },
        {
          en: 'Bucket names must begin with uppercase letters and end in underscores',
          bn: 'বাকেটের নাম বড় হাতের অক্ষরে শুরু এবং আন্ডারস্কোরে শেষ হতে হবে'
        },
        {
          en: 'Two accounts in different regions can share the exact same bucket name',
          bn: 'ভিন্ন রিজিয়নের দুটি অ্যাকাউন্ট একই বাকেট নাম ভাগাভাগি করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Because bucket names become public DNS records, no two customers can have the same name.',
        bn: 'বাকেটের নাম দিয়ে সরাসরি পাবলিক DNS রেকর্ড তৈরি হয়, তাই দুজন গ্রাহকের একই নাম থাকতে পারে না।'
      },
      explanation: {
        en: 'S3 bucket names share a globally unique namespace across all AWS accounts because they form DNS domain endpoints (e.g. bucket-name.s3.amazonaws.com).',
        bn: 'S3 বাকেটের নাম দিয়ে পাবলিক DNS ডোমেইন তৈরি হওয়ায় সমস্ত অ্যাকাউন্টের মাঝে বাকেটের নাম বৈশ্বিকভাবে অনন্য হতে হয়।'
      }
    },
    {
      id: 'bkt-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the primary function of S3 Block Public Access (BPA)?',
        bn: 'S3 ব্লক পাবলিক অ্যাক্সেস (BPA)-এর প্রধান কাজ কী?'
      },
      options: [
        {
          en: 'A centralized security control that overrides policies and ACLs to prevent accidental public data leaks',
          bn: 'একটি কেন্দ্রীয় নিরাপত্তা ব্যবস্থা যা পলিসি ও ACL অগ্রাহ্য করে অনিচ্ছাকৃত পাবলিক ডাটা ফাঁস রোধ করে'
        },
        {
          en: 'A tool that automatically deletes all buckets older than 30 days',
          bn: 'একটি টুল যা ৩০ দিনের পুরোনো সমস্ত বাকেট স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        },
        {
          en: 'A compression utility that reduces image sizes by 50 percent',
          bn: 'একটি কম্প্রেশন টুল যা ছবির আকার ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'A feature that forces all files to be downloaded as ZIP archives',
          bn: 'একটি সুবিধা যা সমস্ত ফাইলকে জিপ ফাইল হিসেবে ডাউনলোড করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'BPA acts as a master circuit breaker against public access.',
        bn: 'BPA পাবলিক অ্যাক্সেসের বিরুদ্ধে একটি মাস্টার সার্কিট ব্রেকার হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'Block Public Access provides a 4-point guardrail preventing buckets and objects from becoming publicly accessible through misconfigured ACLs or policies.',
        bn: 'ব্লক পাবলিক অ্যাক্সেস ভুল কনফিগারেশনের কারণে অসাবধানতাবশত বাকেটের ডাটা ইন্টারনেটে উন্মুক্ত হওয়া প্রতিহত করে।'
      }
    },
    {
      id: 'bkt-ex-3',
      kind: 'mcq',
      question: {
        en: 'How can an administrator enforce HTTPS and reject plaintext HTTP traffic in an S3 bucket policy?',
        bn: 'একজন অ্যাডমিনিস্ট্রেটর কীভাবে S3 বাকেট পলিসিতে HTTPS নিশ্চিত করে প্লেইনটেক্সট HTTP রিকোয়েস্ট বাতিল করতে পারেন?'
      },
      options: [
        {
          en: 'Add an explicit Deny statement conditioned on "aws:SecureTransport": "false"',
          bn: '"aws:SecureTransport": "false" শর্ত দিয়ে একটি স্পষ্ট Deny স্টেটমেন্ট যোগ করে'
        },
        {
          en: 'Rename the bucket so it starts with the prefix "https-"',
          bn: 'বাকেটের নামের শুরুতে "https-" প্রিফিক্স যুক্ত করে'
        },
        {
          en: 'Delete all IAM user accounts associated with the organization',
          bn: 'অর্গানাইজেশনের সাথে যুক্ত সমস্ত IAM ইউজার অ্যাকাউন্ট মুছে ফেলে'
        },
        {
          en: 'Set the maximum object size limit to 0 bytes',
          bn: 'অবজেক্টের সর্বোচ্চ সাইজ লিমিট ০ বাইট নির্ধারণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use the aws:SecureTransport condition key with an explicit Deny effect.',
        bn: 'একটি স্পষ্ট Deny ইফেক্ট সহ aws:SecureTransport কন্ডিশন কি ব্যবহার করুন।'
      },
      explanation: {
        en: 'An explicit Deny statement checking "aws:SecureTransport": "false" instructs S3 to reject any non-TLS plaintext HTTP connection immediately.',
        bn: '"aws:SecureTransport": "false" চেক করে Deny স্টেটমেন্ট দিলে S3 আন-এনক্রিপ্টেড প্লেইনটেক্সট HTTP কানেকশন অবিলম্বে প্রত্যাখ্যান করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-buckets-and-the-bucket',
    title: {
      en: 'S3 Buckets, Namespaces, and Access Security Quiz',
      bn: 'S3 বাকেট, নেমস্পেস এবং অ্যাক্সেস সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'bkt-q1',
        kind: 'mcq',
        question: {
          en: 'What character length boundaries apply to Amazon S3 bucket names?',
          bn: 'Amazon S3 বাকেটের নামের অক্ষরের দৈর্ঘ্য কত সীমার মধ্যে হতে হবে?'
        },
        options: [
          {
            en: 'Between 3 and 63 characters long',
            bn: '৩ থেকে ৬৩ অক্ষরের মধ্যে'
          },
          {
            en: 'Between 1 and 10 characters long',
            bn: '১ থেকে ১০ অক্ষরের মধ্যে'
          },
          {
            en: 'Exactly 256 characters long',
            bn: 'ঠিক ২৫৬ অক্ষরের সমান'
          },
          {
            en: 'Between 100 and 500 characters long',
            bn: '১০০ থেকে ৫০০ অক্ষরের মধ্যে'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 bucket names must be at least 3 characters and at most 63 characters long.',
          bn: 'S3 বাকেটের নাম কমপক্ষে ৩ অক্ষর এবং সর্বোচ্চ ৬৩ অক্ষরের হতে হয়।'
        },
        explanation: {
          en: 'DNS compliance standards require S3 bucket names to be between 3 and 63 characters in length, containing only lowercase characters, numbers, and hyphens.',
          bn: 'DNS মানদণ্ড অনুযায়ী S3 বাকেটের নাম ৩ থেকে ৬৩ অক্ষরের মধ্যে সীমাবদ্ধ থাকতে হয় এবং কেবল ছোট হাতের অক্ষর, সংখ্যা ও হাইফেন সমর্থন করে।'
        }
      },
      {
        id: 'bkt-q2',
        kind: 'mcq',
        question: {
          en: 'When a conflicting Allow and Deny statement both match an incoming request in S3, which effect takes precedence?',
          bn: 'S3-তে একটি রিকোয়েস্টের ক্ষেত্রে যখন পরস্পরবিরোধী Allow এবং Deny উভয় স্টেটমেন্ট প্রযোজ্য হয়, তখন কোনটি প্রাধান্য পায়?'
        },
        options: [
          {
            en: 'Explicit Deny always overrides any Allow',
            bn: 'স্পষ্ট Deny সর্বদা যেকোনো Allow-কে অগ্রাহ্য করে প্রাধান্য পায়'
          },
          {
            en: 'Explicit Allow overrides any Deny',
            bn: 'স্পষ্ট Allow সর্বদা যেকোনো Deny-কে অগ্রাহ্য করে'
          },
          {
            en: 'The statement created most recently takes precedence',
            bn: 'সবচেয়ে সম্প্রতি তৈরি করা স্টেটমেন্টটি কার্যকর হয়'
          },
          {
            en: 'AWS servers choose between Allow and Deny randomly',
            bn: 'AWS সার্ভার দৈবচয়ন পদ্ধতিতে সিদ্ধান্ত নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In AWS IAM and resource policy logic, an explicit Deny always wins.',
          bn: 'AWS পলিসির নিয়মানুযায়ী যেকোনো স্পষ্ট Deny সর্বদা জয়ী হয়।'
        },
        explanation: {
          en: 'In AWS policy evaluation, an explicit Deny always overrides any Allow statements, enforcing the principle of maximum security.',
          bn: 'AWS পলিসি মূল্যায়নে একটি স্পষ্ট Deny যেকোনো Allow স্টেটমেন্টকে বাতিল করে দেয়, যা সর্বোচ্চ নিরাপত্তা নিশ্চিত করে।'
        }
      },
      {
        id: 'bkt-q3',
        kind: 'mcq',
        question: {
          en: 'What web browser security mechanism requires configuring S3 CORS rules when uploading directly from client JavaScript?',
          bn: 'ক্লায়েন্ট জাভাস্ক্রিপ্ট থেকে সরাসরি আপলোডের সময় কোন ব্রাউজার নিরাপত্তা ব্যবস্থার কারণে S3 CORS রুল কনফিগার করতে হয়?'
        },
        options: [
          {
            en: 'Same-Origin Policy (SOP)',
            bn: 'Same-Origin Policy (SOP)'
          },
          {
            en: 'DNS Poisoning Protection',
            bn: 'DNS পয়জনিং প্রোটেকশন'
          },
          {
            en: 'BGP Routing Protocol',
            bn: 'BGP রাউটিং প্রোটোকল'
          },
          {
            en: 'TCP Window Sizing',
            bn: 'TCP উইন্ডো সাইজিং'
          }
        ],
        answer: 0,
        hint: {
          en: 'Browsers enforce the Same-Origin Policy to block cross-domain HTTP requests unless permitted by CORS.',
          bn: 'ব্রাউজার ক্রস-ডোমেইন রিকোয়েস্ট ঠেকাতে Same-Origin Policy প্রয়োগ করে যদি না CORS দিয়ে অনুমতি দেওয়া থাকে।'
        },
        explanation: {
          en: 'The browser Same-Origin Policy blocks scripts on 1 domain from accessing resources on another origin unless the server sends appropriate CORS headers.',
          bn: 'ব্রাউজারের Same-Origin Policy এক ডোমেইনের স্ক্রিপ্টকে অন্য ডোমেইনে কল করা আটকায়, যদি না S3 উপযুক্ত CORS হেডার প্রদান করে।'
        }
      },
      {
        id: 'bkt-q4',
        kind: 'mcq',
        question: {
          en: 'What happens to the geographical location of data stored in an S3 bucket over its lifetime?',
          bn: 'একটি S3 বাকেটে সংরক্ষিত ডাটার ভৌগোলিক অবস্থানের ক্ষেত্রে কী ঘটে?'
        },
        options: [
          {
            en: 'It remains strictly confined to the chosen region unless cross-region replication is explicitly configured',
            bn: 'ক্রস-রিজিয়ন রেপ্লিকেশন কনফিগার না করা পর্যন্ত এটি নির্বাচিত রিজিয়নেই সীমাবদ্ধ থাকে'
          },
          {
            en: 'Data is automatically moved between 10 random global datacenters every 24 hours',
            bn: 'প্রতি ২৪ ঘণ্টায় ডাটা ১০ টি এলোমেলো ডাটা সেন্টারের মাঝে স্বয়ংক্রিয়ভাবে স্থানান্তরিত হয়'
          },
          {
            en: 'Data is deleted after 7 days if the creator logs out of the console',
            bn: 'কনসোল থেকে লগআউট করলে ৭ দিন পর ডাটা মুছে ফেলা হয়'
          },
          {
            en: 'Objects are permanently mirrored to all 32 AWS regions for free',
            bn: 'বিনামূল্যে অবজেক্টগুলো সমস্ত ৩২ টি AWS রিজিয়নে কপি হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Regional residency guarantees that your data stays where you put it.',
          bn: 'আঞ্চলিক সংরক্ষণ নীতি নিশ্চয়তা দেয় যে আপনার ডাটা আপনার নির্ধারিত জায়গাতেই থাকবে।'
        },
        explanation: {
          en: 'S3 guarantees data residency: objects stored in a regional bucket stay in that region, satisfying strict sovereignty and compliance mandates.',
          bn: 'S3 ডাটার আঞ্চলিক স্থায়িত্ব নিশ্চিত করে: নির্দিষ্ট বাকেটের ডাটা সেই অঞ্চলের ভেতরেই সংরক্ষিত থাকে।'
        }
      },
      {
        id: 'bkt-q5',
        kind: 'mcq',
        question: {
          en: 'What is the modern AWS recommendation regarding the use of S3 Access Control Lists (ACLs)?',
          bn: 'S3 অ্যাক্সেস কন্ট্রোল লিস্ট (ACL) ব্যবহারের বিষয়ে আধুনিক AWS সুপারিশ কী?'
        },
        options: [
          {
            en: 'Disable ACLs completely using "Bucket owner enforced" and manage access exclusively with IAM and Bucket Policies',
            bn: '"Bucket owner enforced" দিয়ে ACL সম্পূর্ণ নিষ্ক্রিয় রাখা এবং কেবল IAM ও বাকেট পলিসি দিয়ে নিয়ন্ত্রণ করা'
          },
          {
            en: 'Use ACLs as the only security mechanism on all production buckets',
            bn: 'সমস্ত প্রোডাকশন বাকেটে একমাত্র নিরাপত্তা ব্যবস্থা হিসেবে ACL ব্যবহার করা'
          },
          {
            en: 'Assign full public write ACL permissions to all internet users',
            bn: 'ইন্টারনেটের সমস্ত ব্যবহারকারীদের জন্য সম্পূর্ণ পাবলিক রাইট ACL অনুমতি দেওয়া'
          },
          {
            en: 'ACLs must be rewritten in C language every 30 days',
            bn: 'প্রতি ৩০ দিনে সি ভাষায় নতুন করে ACL লিখতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'AWS recommends disabling legacy ACLs in favor of modern JSON bucket policies.',
          bn: 'AWS পুরোনো ACL বাদ দিয়ে আধুনিক JSON বাকেট পলিসি ব্যবহারের সুপারিশ করে।'
        },
        explanation: {
          en: 'AWS recommends enabling "Bucket owner enforced", which disables legacy ACLs and simplifies governance through centralized IAM and bucket policies.',
          bn: 'AWS "Bucket owner enforced" সক্রিয় করার পরামর্শ দেয় যা পুরোনো ACL বন্ধ করে কেন্দ্রীভূত IAM ও বাকেট পলিসির মাধ্যমে নিরাপত্তা সহজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'keys-and-the-key',
    title: {
      en: 'Object Keys: Hierarchical Prefixes & Presigned URLs',
      bn: 'অবজেক্ট কি: হায়ারারকিকাল প্রিফিক্স এবং প্রি-সাইনড URL'
    }
  }
};
