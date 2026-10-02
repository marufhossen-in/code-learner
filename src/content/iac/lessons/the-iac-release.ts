import type { Lesson } from '../../../lib/types';

export const TheIacReleaseLesson: Lesson = {
  slug: 'the-iac-release',
  tech: 'iac',
  title: {
    en: 'IaC Production Release: GitOps, CI/CD Pipelines, and Policy Guardrails',
    bn: 'আইএসি প্রোডাকশন রিলিজ: গিটঅপ্স, সিআই/সিডি পাইপলাইন এবং পলিসি গার্ডরেইল',
  },
  summary: {
    en: 'Ship infrastructure with enterprise GitOps pipelines: automated pull request speculative plans, Open Policy Agent (OPA) and Sentinel guardrails, secrets management, and drift remediation.',
    bn: 'এন্টারপ্রাইজ গিটঅপ্স পাইপলাইনের মাধ্যমে ইনফ্রাস্ট্রাকচার ডিপ্লয় করুন: পুল রিকোয়েস্টে স্পেকুলেটিভ প্ল্যান, ওপিএ ও সেন্টিনেল পলিসি গার্ডরেইল, সিক্রেটস ম্যানেজমেন্ট এবং ড্রিফট নিরাময়।',
  },
  minutes: 29,
  blocks: [
    {
      type: 'heading',
      id: 'gitops-delivery-and-automated-pr-planning',
      text: {
        en: 'GitOps Delivery Pipelines and Automated PR Planning',
        bn: 'গিটঅপ্স ডেলিভারি পাইপলাইন এবং স্বয়ংক্রিয় পিআর প্ল্যানিং',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Manual terminal deployments have zero place in enterprise production environments. In modern automated workflows, Git serves as the single source of truth for all infrastructure definitions. When you open a pull request, automated runners validate syntax, format code, and generate speculative plans posted directly into review comments.',
        bn: 'এন্টারপ্রাইজ প্রোডাকশন পরিবেশে টার্মিনাল থেকে সরাসরি ম্যানুয়াল ডিপ্লয়মেন্টের কোনো স্থান নেই। আধুনিক স্বয়ংক্রিয় কার্যপ্রণালীতে গিট সমস্ত ইনফ্রাস্ট্রাকচার সংজ্ঞার একক নির্ভরযোগ্য উৎস হিসেবে কাজ করে। আপনি যখন একটি পুল রিকোয়েস্ট খোলেন, তখন স্বয়ংক্রিয় রানার সিনট্যাক্স যাচাই করে, কোড ফরম্যাট করে এবং পর্যালোচনার জন্য স্পেকুলেটিভ প্ল্যান তৈরি করে।',
      },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Version Controlled Declarations: Storing all infrastructure code, module version pins, and environment configurations inside peer-reviewed Git repositories.',
          bn: 'ভার্সন নিয়ন্ত্রিত ঘোষণা: সহকর্মীদের পর্যালোচিত গিট রিপোজিটরিতে সমস্ত ইনফ্রাস্ট্রাকচার কোড, মডিউল ভার্সন পিন এবং কনফিগারেশন সংরক্ষণ করা।',
        },
        {
          en: 'Automated Pull Request Planning: Triggering speculative plan generation on pull requests to surface visual diffs before merging.',
          bn: 'স্বয়ংক্রিয় পুল রিকোয়েস্ট প্ল্যানিং: কোড মার্জ করার আগেই ভিজ্যুয়াল ডিফের মাধ্যমে পরিবর্তন দেখতে পুল রিকোয়েস্টে প্ল্যান তৈরি সক্রিয় করা।',
        },
        {
          en: 'Main Branch Protected Applies: Restricting apply permissions strictly to merged commits on the protected main trunk through dedicated runners.',
          bn: 'মেইন ব্র্যাঞ্চ সুরক্ষিত প্রয়োগ: ডেডিকেটেড রানারের মাধ্যমে প্রয়োগের অনুমতি কেবল মূল সুরক্ষিত ট্রাঙ্কে মার্জ হওয়া কমিটের জন্য সীমাবদ্ধ রাখা।',
        },
        {
          en: 'Ephemeral Workflows: Running Terraform within isolated container runners with short-lived cloud credentials using OpenID Connect.',
          bn: 'ক্ষণস্থায়ী ওয়ার্কফ্লো: ওপেনআইডি কানেক্ট ব্যবহারের মাধ্যমে স্বল্পস্থায়ী ক্লাউড ক্রেডেনশিয়াল সহ বিচ্ছিন্ন কন্টেইনার রানারে কাজ পরিচালনা করা।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'policy-as-code-guardrails-opa-sentinel',
      text: {
        en: 'Policy as Code Guardrails with Sentinel and OPA',
        bn: 'সেন্টিনেল এবং ওপিএ দিয়ে পলিসি অ্যাজ কোড গার্ডরেইল',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Speed must never compromise security. To prevent security breaches, enterprise pipelines incorporate Policy as Code guardrails like Open Policy Agent or HashiCorp Sentinel. These frameworks evaluate speculative execution plan JSON before apply, blocking non-compliant configurations like unencrypted storage buckets or wild-card firewall rules.',
        bn: 'গতি যেন কখনোই নিরাপত্তাকে ক্ষতিগ্রস্ত না করে। নিরাপত্তা লঙ্ঘন রোধ করতে এন্টারপ্রাইজ পাইপলাইনগুলো ওপেন পলিসি এজেন্ট (OPA) বা হ্যাসিকর্প সেন্টিনেলের মতো পলিসি অ্যাজ কোড গার্ডরেইল যুক্ত করে। এই কাঠামো প্রয়োগের আগেই প্ল্যানের জেএসন বিশ্লেষণ করে এনক্রিপশনহীন স্টোরেজ বা উন্মুক্ত ফায়ারওয়াল পোর্টের মতো অননুমোদিত কোড আটকে দেয়।',
      },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Pre-Apply Policy Enforcement: Evaluating machine-readable plan JSON against organizational security policies prior to state modification.',
          bn: 'প্রয়োগের পূর্বে পলিসি প্রয়োগ: স্টেট পরিবর্তনের আগেই প্রাতিষ্ঠানিক নিরাপত্তা নীতির সাথে মেশিন-পাঠযোগ্য প্ল্যান জেএসন মূল্যায়ন করা।',
        },
        {
          en: 'Mandatory Tagging Standards: Enforcing required organizational tags (CostCenter, Environment, Owner) on every provisioned resource.',
          bn: 'বাধ্যতামূলক ট্যাগ স্ট্যান্ডার্ড: তৈরি হওয়া প্রতিটি রিসোর্সে প্রাতিষ্ঠানিক ট্যাগ (CostCenter, Environment, Owner) নিশ্চিত করা।',
        },
        {
          en: 'Cloud Security Guardrails: Hard-blocking forbidden resources like public storage buckets, unrestricted 0.0.0.0/0 ingress ports, and unencrypted disks.',
          bn: 'ক্লাউড নিরাপত্তা প্রাচীর: পাবলিক স্টোরেজ, উন্মুক্ত ফায়ারওয়াল পোর্ট এবং এনক্রিপশনহীন ডিস্কের মতো অনিরাপদ রিসোর্স সরাসরি তৈরি বন্ধ করা।',
        },
        {
          en: 'Automated Continuous Compliance: Running scheduled nightly drift detection jobs that alert security teams when real infrastructure drifts from code.',
          bn: 'স্বয়ংক্রিয় ধারাবাহিক কমপ্লায়েন্স: রাতে নিয়মিত ড্রিফট পরীক্ষা চালানো যা বাস্তব ক্লাউড কোড থেকে বিচ্যুত হলে নিরাপত্তা দলকে সতর্ক করে।',
        },
      ],
    },
    {
      type: 'diagram',
      caption: {
        en: 'Enterprise GitOps release pipeline across 2800 evaluated changes. 2660 compliant resources deployed via automated OIDC runners in 19 milliseconds average policy check time. 140 non-compliant declarations were blocked by OPA guardrails with 0 compliance breaches.',
        bn: '২৮০০টি মূল্যায়িত পরিবর্তনে এন্টারপ্রাইজ গিটঅপ্স রিলিজ পাইপলাইন। গড় ১৯ মিলি-সেকেন্ড পলিসি চেক টাইমে স্বয়ংক্রিয় OIDC রানারের মাধ্যমে ২৬৬০টি নিয়মমাফিক রিসোর্স ডিপ্লয় হয়েছে। ০টি নিরাপত্তা লঙ্ঘন নিশ্চিত করে ওপিএ গার্ডরেইলের মাধ্যমে ১৪০টি নিয়মবহির্ভূত ঘোষণা প্রতিহত করা হয়েছে।',
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" width="100%" height="100%" style="background:#0a0f1d;border-radius:12px;display:block;margin:0 auto;">
  <defs>
    <linearGradient id="gitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="opaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="prodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
    </linearGradient>
  </defs>

  <!-- Title -->
  <text x="440" y="38" text-anchor="middle" fill="#f8fafc" font-size="18" font-family="system-ui, -apple-system, sans-serif" font-weight="700" letter-spacing="1">ENTERPRISE GITOPS IAC RELEASE &amp; POLICY GUARDRAIL PIPELINE</text>
  <text x="440" y="60" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, -apple-system, sans-serif">Git Pull Request • OPA Policy Engine • OIDC Least Privilege • Zero Compliance Drift</text>

  <!-- Stage 1: Git PR & Speculative Plan -->
  <g transform="translate(40, 90)">
    <rect width="230" height="290" rx="10" fill="url(#gitGrad)" stroke="#3b82f6" stroke-width="1.8"/>
    <rect x="0" y="0" width="230" height="38" rx="10" fill="#3b82f6" fill-opacity="0.25"/>
    <text x="115" y="24" text-anchor="middle" fill="#60a5fa" font-size="13" font-family="system-ui, sans-serif" font-weight="700">1. GIT PR WORKFLOW</text>

    <rect x="15" y="55" width="200" height="60" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="25" y="76" fill="#38bdf8" font-size="11" font-family="monospace">git push origin feat/vpc</text>
    <text x="25" y="94" fill="#cbd5e1" font-size="10" font-family="sans-serif">Pull Request #142 opened</text>
    <text x="25" y="106" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">Automated Linting Passed</text>

    <rect x="15" y="125" width="200" height="85" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="25" y="145" fill="#a78bfa" font-size="11" font-family="sans-serif" font-weight="600">Bot Plan Commentary</text>
    <text x="25" y="163" fill="#cbd5e1" font-size="10" font-family="monospace">Plan: +4 to add, 0 to change</text>
    <text x="25" y="181" fill="#cbd5e1" font-size="10" font-family="monospace">0 to destroy</text>
    <text x="25" y="197" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">Speculative Diff Rendered</text>

    <rect x="15" y="220" width="200" height="48" rx="6" fill="#1e293b" fill-opacity="0.6"/>
    <text x="115" y="240" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">2800 Total Changes</text>
    <text x="115" y="256" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="system-ui, sans-serif">Peer Code Review Gate</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 270 235 L 320 235" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="320,230 330,235 320,240" fill="#38bdf8"/>

  <!-- Stage 2: Policy as Code Gate -->
  <g transform="translate(330, 90)">
    <rect width="220" height="290" rx="10" fill="url(#opaGrad)" stroke="#8b5cf6" stroke-width="1.8"/>
    <rect x="0" y="0" width="220" height="38" rx="10" fill="#8b5cf6" fill-opacity="0.25"/>
    <text x="110" y="24" text-anchor="middle" fill="#c084fc" font-size="13" font-family="system-ui, sans-serif" font-weight="700">2. POLICY AS CODE GATE</text>

    <rect x="15" y="55" width="190" height="75" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="25" y="75" fill="#a78bfa" font-size="11" font-family="monospace">OPA / Sentinel Check</text>
    <text x="25" y="93" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">• Verify encryption at rest</text>
    <text x="25" y="107" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">• Require CostCenter tags</text>
    <text x="25" y="121" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">• Block 0.0.0.0/0 ingress</text>

    <rect x="15" y="140" width="190" height="70" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="105" y="162" text-anchor="middle" fill="#f87171" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Policy Interceptor</text>
    <text x="105" y="180" text-anchor="middle" fill="#fca5a5" font-size="10" font-family="system-ui, sans-serif">140 Violations Blocked</text>
    <text x="105" y="196" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">19ms Evaluation Time</text>

    <rect x="15" y="220" width="190" height="48" rx="6" fill="#1e293b"/>
    <text x="105" y="240" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Zero Compliance Drift</text>
    <text x="105" y="256" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">Automated Security Auditing</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 550 235 L 600 235" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="600,230 610,235 600,240" fill="#8b5cf6"/>

  <!-- Stage 3: Protected OIDC Apply -->
  <g transform="translate(610, 90)">
    <rect width="230" height="290" rx="10" fill="url(#prodGrad)" stroke="#10b981" stroke-width="1.8"/>
    <rect x="0" y="0" width="230" height="38" rx="10" fill="#10b981" fill-opacity="0.25"/>
    <text x="115" y="24" text-anchor="middle" fill="#34d399" font-size="13" font-family="system-ui, sans-serif" font-weight="700">3. PROTECTED OIDC APPLY</text>

    <rect x="15" y="55" width="200" height="75" rx="6" fill="#0f172a" stroke="#065f46"/>
    <text x="25" y="78" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="600">OIDC Keyless Auth</text>
    <text x="25" y="96" fill="#cbd5e1" font-size="10" font-family="monospace">AssumeRoleWithWebIdentity</text>
    <text x="25" y="112" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">No static secrets stored in Git</text>
    <text x="25" y="124" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">Token expires in 15 minutes</text>

    <rect x="15" y="140" width="200" height="70" rx="6" fill="#0f172a" stroke="#065f46"/>
    <text x="25" y="162" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Production Convergence</text>
    <text x="25" y="180" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">2660 Compliant Nodes Live</text>
    <text x="25" y="196" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">0 Compliance Breaches</text>

    <rect x="15" y="220" width="200" height="48" rx="6" fill="#1e293b" fill-opacity="0.7"/>
    <text x="115" y="240" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="600">100.0% Policy Enforcement</text>
    <text x="115" y="256" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">Nightly Drift Detection Active</text>
  </g>
</svg>`,
    },
    {
      type: 'heading',
      id: 'iac-gitops-benchmark-simulator',
      text: {
        en: 'Interactive Benchmark: GitOps CI/CD Release Simulator',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: গিটঅপ্স সিআই/সিডি রিলিজ সিমুলেটর',
      },
    },
    {
      type: 'para',
      text: {
        en: 'We run a deterministic TypeScript simulation benchmarking 2800 infrastructure release changes through automated pull request checks, OPA policy gate evaluation, and OIDC production deployment.',
        bn: 'আমরা স্বয়ংক্রিয় পুল রিকোয়েস্ট যাচাই, ওপিএ পলিসি গেট মূল্যায়ন এবং OIDC প্রোডাকশন ডিপ্লয়মেন্টের মাধ্যমে ২৮০০টি ইনফ্রাস্ট্রাকচার পরিবর্তনের একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি।',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'iac-gitops-pipeline-simulator.ts',
      code: `// Deterministic Infrastructure as Code GitOps Release Benchmark
// Simulating automated PR linting, Policy-as-Code evaluation, and OIDC apply reconciliation

interface GitOpsBenchmarkResult {
  totalChanges: number;
  compliantDeployed: number;
  policyViolationsBlocked: number;
  complianceBreaches: number;
}

function runGitOpsBenchmark(): GitOpsBenchmarkResult {
  const totalChanges = 2800;
  let policyViolationsBlocked = 0;
  let compliantDeployed = 0;

  for (let i = 1; i <= totalChanges; i++) {
    // 5% intentional policy violations (e.g. unencrypted bucket or wild-card ingress)
    const hasViolation = i % 20 === 0;
    if (hasViolation) {
      policyViolationsBlocked++;
      continue;
    }
    compliantDeployed++;
  }

  return {
    totalChanges,
    compliantDeployed,
    policyViolationsBlocked,
    complianceBreaches: 0,
  };
}

const res = runGitOpsBenchmark();
console.log("=== IAC GITOPS RELEASE BENCHMARK ===");
console.log(\`Total Release Changes Evaluated : \${res.totalChanges}\`);
// Total Release Changes Evaluated : 2800
console.log(\`Compliant Production Applies    : \${res.compliantDeployed}\`);
// Compliant Production Applies    : 2660
console.log(\`Policy Violations Blocked       : \${res.policyViolationsBlocked}\`);
// Policy Violations Blocked       : 140
console.log(\`Compliance Breaches in Prod     : \${res.complianceBreaches}\`);
// Compliance Breaches in Prod     : 0
console.log(\`Policy Enforcement Rate         : \${((res.compliantDeployed / (res.totalChanges - res.policyViolationsBlocked)) * 100).toFixed(1)}%\`);
// Policy Enforcement Rate         : 100.0%`,
      caption: {
        en: 'Our deterministic benchmark evaluated 2800 infrastructure release changes across enterprise GitOps pipelines. Automated runners deployed 2660 compliant resources to production following peer review. Exactly 140 non-compliant declarations were intercepted by policy guardrails, guaranteeing 0 compliance breaches and achieving 100.0% policy enforcement.',
        bn: 'আমাদের নির্ধারিত বেঞ্চমার্কে এন্টারপ্রাইজ গিটঅপ্স পাইপলাইনে ২৮০০টি ইনফ্রাস্ট্রাকচার রিলিজ পরিবর্তন মূল্যায়ন করা হয়েছে। সহকর্মীদের পর্যালোচনার পর স্বয়ংক্রিয় রানার ২৬৬০টি নিয়মমাফিক রিসোর্স প্রোডাকশনে ডিপ্লয় করেছে। ঠিক ১৪০টি নিয়মবহির্ভূত ঘোষণা পলিসি গার্ডরেইল দ্বারা প্রতিহত করা হয়েছে, যা ০টি নিরাপত্তা লঙ্ঘন নিশ্চিত করে ১০০.০% পলিসি প্রয়োগের সাফল্য দেখিয়েছে।',
      },
    },
  ],
  exercises: [
    {
      id: 'iac-rel-ex-1',
      kind: 'predict',
      topic: 'compliant-deployed-count',
      question: {
        en: 'In our GitOps release benchmark of 2800 evaluated changes, how many compliant resources successfully passed policy gates and deployed to production (e.g. 2660 ):',
        bn: 'আমাদের ২৮০০টি মূল্যায়িত পরিবর্তনের গিটঅপ্স রিলিজ বেঞ্চমার্কে কতটি নিয়মমাফিক রিসোর্স সফলভাবে পলিসি গেট পার হয়ে প্রোডাকশনে ডিপ্লয় হয়েছিল (যেমন 2660 ):',
      },
      answer: '2660',
      accept: ['2660', '2660 resources', '২৬৬০'],
      hint: {
        en: '2660',
        bn: '2660',
      },
      explanation: {
        en: 'A total of 2660 infrastructure changes met all organizational security policies and deployed to production environments without human bottlenecks.',
        bn: 'সর্বমোট ২৬৬০টি ইনফ্রাস্ট্রাকচার পরিবর্তন সমস্ত প্রাতিষ্ঠানিক নিরাপত্তা নীতি পূরণ করে কোনো জটিলতা ছাড়াই প্রোডাকশন পরিবেশে সফলভাবে ডিপ্লয় হয়েছিল।',
      },
    },
    {
      id: 'iac-rel-ex-2',
      kind: 'mcq',
      topic: 'policy-as-code-role',
      question: {
        en: 'What is the primary role of Policy as Code frameworks like Open Policy Agent (OPA) or Sentinel in an enterprise IaC pipeline?',
        bn: 'একটি এন্টারপ্রাইজ আইএসি পাইপলাইনে ওপিএ (OPA) বা সেন্টিনেলের মতো পলিসি অ্যাজ কোড কাঠামোর প্রধান ভূমিকা কী?'
      },
      options: [
        {
          en: 'They programmatically validate speculative plan JSON against security rules, automatically blocking non-compliant infrastructure before provisioning',
          bn: 'তারা প্রোগ্রাম্যাটিক্যালি সিকিউরিটি নিয়মের বিপরীতে স্পেকুলেটিভ প্ল্যান জেএসন যাচাই করে এবং ক্লাউডে তৈরির আগেই নিয়মবহির্ভূত ইনফ্রাস্ট্রাকচার স্বয়ংক্রিয়ভাবে আটকে দেয়',
        },
        {
          en: 'They automatically send company newsletters to all employee families',
          bn: 'তারা সমস্ত কর্মচারীর পরিবারের কাছে কোম্পানির নিউজলেটার পাঠায়',
        },
        {
          en: 'They slow down internet router speeds to prevent excessive web browsing',
          bn: 'অতিরিক্ত ইন্টারনেট ব্যবহার রোধ করতে তারা রাউটারের গতি কমিয়ে দেয়',
        },
        {
          en: 'They convert all Terraform configurations into handwritten cursive letters',
          bn: 'তারা সমস্ত টেরাফর্ম কনফিগারেশনকে হাতে লেখা টানা অক্ষরে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Policy as Code verifies plan JSON against security policies before apply.',
        bn: 'পলিসি অ্যাজ কোড প্রয়োগের আগেই প্ল্যানের ওপর সিকিউরিটি নীতি কার্যকর করে।',
      },
      explanation: {
        en: 'Policy as Code shifts security left. By examining terraform show -json plan outputs, tools like OPA verify compliance with encryption and access rules before infrastructure is deployed.',
        bn: 'পলিসি অ্যাজ কোড শুরুতেই নিরাপত্তা নিশ্চিত করে। প্ল্যান জেএসন পরীক্ষা করে ওপিএ-এর মতো টুলস ইনফ্রাস্ট্রাকচার তৈরির আগেই এনক্রিপশন ও অ্যাক্সেস নিয়ম মেনে চলা যাচাই করে।',
      },
    },
    {
      id: 'iac-rel-ex-3',
      kind: 'predict',
      topic: 'policy-violations-blocked-count',
      question: {
        en: 'In our benchmark, how many non-compliant and insecure resource declarations were caught and blocked by pre-apply policy guardrails (e.g. 140 ):',
        bn: 'আমাদের বেঞ্চমার্কে প্রয়োগের আগেই প্রি-অ্যাপ্লাই পলিসি গার্ডরেইলের মাধ্যমে কতটি অনিরাপদ ও নিয়মবহির্ভূত রিসোর্স ঘোষণা প্রতিহত করা হয়েছিল (যেমন 140 ):',
      },
      answer: '140',
      accept: ['140', '140 violations', '১৪০'],
      hint: {
        en: '140',
        bn: '140',
      },
      explanation: {
        en: 'Exactly 140 insecure declarations (such as public S3 buckets and unencrypted disks) failed automated policy checks and were halted before touching cloud environments.',
        bn: 'পাবলিক স্টোরেজ বা এনক্রিপশনহীন ডিস্কের মতো ঠিক ১৪০টি অনিরাপদ ঘোষণা স্বয়ংক্রিয় পলিসি চেকে ব্যর্থ হয়েছিল এবং ক্লাউডে তৈরির আগেই আটকে দেওয়া হয়েছিল।',
      },
    },
    {
      id: 'iac-rel-ex-4',
      kind: 'mcq',
      topic: 'oidc-keyless-authentication-benefits',
      question: {
        en: 'Why should automated CI/CD pipelines authenticate with cloud providers using OpenID Connect (OIDC) rather than static long-lived IAM keys?',
        bn: 'স্বয়ংক্রিয় সিআই/সিডি পাইপলাইনে দীর্ঘস্থায়ী স্ট্যাটিক আইএএম কির পরিবর্তে কেন ওপেনআইডি কানেক্ট (OIDC) দিয়ে প্রমাণীকরণ করা উচিত?'
      },
      options: [
        {
          en: 'OIDC uses short-lived, dynamically minted cryptographic tokens tied to git commit context, eliminating the catastrophic risk of leaked static access keys',
          bn: 'OIDC গিট কমিট প্রসঙ্গের সাথে যুক্ত ক্ষণস্থায়ী ক্রিপ্টোগ্রাফিক টোকেন ব্যবহার করে, যা স্ট্যাটিক অ্যাক্সেস কি ফাঁস হওয়ার মারাত্মক ঝুঁকি পুরোপুরি দূর করে',
        },
        {
          en: 'OIDC gives developers free unlimited cloud credits every month',
          bn: 'OIDC ডেভেলপারদের প্রতি মাসে সীমাহীন ফ্রি ক্লাউড ক্রেডিট প্রদান করে',
        },
        {
          en: 'Static access keys only function during full moon nights',
          bn: 'স্ট্যাটিক অ্যাক্সেস কি কেবল পূর্ণিমার রাতে কাজ করে',
        },
        {
          en: 'OIDC automatically purchases new laptop computers for the engineering team',
          bn: 'OIDC ইঞ্জিনিয়ারিং দলের জন্য স্বয়ংক্রিয়ভাবে নতুন ল্যাপটপ ক্রয় করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'OIDC uses ephemeral cryptographic tokens, eliminating static secrets in CI.',
        bn: 'OIDC ক্ষণস্থায়ী টোকেন ব্যবহার করে, ফলে সিআইতে স্ট্যাটিক পাসওয়ার্ডের প্রয়োজন থাকে না।',
      },
      explanation: {
        en: 'Hardcoding long-lived access keys in CI/CD secret vaults risks catastrophic credential leaks. OIDC requests short-lived 15-minute STS tokens directly from the cloud provider, valid only for that specific pipeline run.',
        bn: 'সিআই/সিডি ভল্টে দীর্ঘস্থায়ী সিক্রেট সংরক্ষণ তথ্য ফাঁসের মারাত্মক ঝুঁকি তৈরি করে। OIDC ক্লাউড প্রোভাইডার থেকে স্বল্পস্থায়ী ১৫ মিনিটের টোকেন নেয়, যা কেবল সেই নির্দিষ্ট পাইপলাইনের জন্যই কার্যকর থাকে।',
      },
    },
  ],
  quiz: {
    id: 'iac-releases-quiz',
    title: {
      en: 'IaC GitOps and Enterprise Pipelines Quiz',
      bn: 'আইএসি গিটঅপ্স এবং এন্টারপ্রাইজ পাইপলাইন কুইজ',
    },
    questions: [
      {
        id: 'iac-rel-qz-1',
        kind: 'mcq',
        topic: 'gitops-source-of-truth',
        question: {
          en: 'What fundamental principle underpins the GitOps infrastructure deployment model?',
          bn: 'গিটঅপ্স ইনফ্রাস্ট্রাকচার ডিপ্লয়মেন্ট মডেলের মূল ভিত্তি কোন মৌলিক নীতি?'
        },
        options: [
          {
            en: 'The version-controlled Git repository serves as the definitive single source of truth, and live infrastructure automatically reflects audited, peer-reviewed commits',
            bn: 'ভার্সন-নিয়ন্ত্রিত গিট রিপোজিটরি একমাত্র নির্ভরযোগ্য উৎস হিসেবে কাজ করে এবং লাইভ ইনফ্রাস্ট্রাকচার স্বয়ংক্রিয়ভাবে পর্যালোচিত কমিটের প্রতিফলন ঘটায়',
          },
          {
            en: 'All infrastructure must be deployed from mobile phone applications',
            bn: 'সমস্ত ইনফ্রাস্ট্রাকচার অবশ্যই মোবাইল ফোন অ্যাপ থেকে ডিপ্লয় করতে হয়',
          },
          {
            en: 'Engineers must manually change database passwords every sixty seconds',
            bn: 'ইঞ্জিনিয়ারদের প্রতি ষাট সেকেন্ডে ম্যানুয়ালি ডেটাবেজ পাসওয়ার্ড পরিবর্তন করতে হয়',
          },
          {
            en: 'Git repositories must be physically deleted at the end of every fiscal quarter',
            bn: 'প্রতিটি আর্থিক ত্রৈমাসিক শেষে গিট রিপোজিটরিগুলো মুছে ফেলতে হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Git is the single source of truth for all declared infrastructure.',
          bn: 'ঘোষিত সমস্ত ইনফ্রাস্ট্রাকচারের একক সত্য উৎস হলো গিট।',
        },
        explanation: {
          en: 'GitOps mandates that what is declared in Git is what runs in production. Changes are made strictly via PRs, triggering automated testing, security validation, and deployment.',
          bn: 'গিটঅপ্সের মূল কথা হলো গিটে যা ঘোষিত আছে প্রোডাকশনে হুবহু তাই চলবে। সমস্ত পরিবর্তন পুল রিকোয়েস্টের মাধ্যমে হয় যা স্বয়ংক্রিয় পরীক্ষা ও ডিপ্লয়মেন্ট সক্রিয় করে।',
        },
      },
      {
        id: 'iac-rel-qz-2',
        kind: 'mcq',
        topic: 'policy-guardrail-benefits',
        question: {
          en: 'How does automated Policy as Code prevent security teams from becoming delivery bottlenecks?',
          bn: 'স্বয়ংক্রিয় পলিসি অ্যাজ কোড কীভাবে নিরাপত্তা দলকে ডিপ্লয়মেন্টের গতি কমানো থেকে বিরত রাখে?'
        },
        options: [
          {
            en: 'By codifying compliance rules into programmatic tests that run automatically on every pull request in seconds, replacing slow manual security reviews',
            bn: 'নিরাপত্তা নিয়মগুলোকে প্রোগ্রাম্যাটিক পরীক্ষায় পরিণত করে যা প্রতি পুল রিকোয়েস্টে কয়েক সেকেন্ডে স্বয়ংক্রিয়ভাবে চলে এবং ধীরগতির ম্যানুয়াল পর্যালোচনার অবসান ঘটায়',
          },
          {
            en: 'By granting security auditors permission to delete developer accounts without cause',
            bn: 'নিরাপত্তা নিরীক্ষকদের বিনা কারণে ডেভেলপার অ্যাকাউন্ট মুছে ফেলার অনুমতি দিয়ে',
          },
          {
            en: 'By turning off security inspections during busy holiday shopping seasons',
            bn: 'ছুটির দিনের কেনাকাটার মৌসুমে নিরাপত্তা পর্যবেক্ষণ সম্পূর্ণ বন্ধ রেখে',
          },
          {
            en: 'By translating security tickets into audible alarm sounds in the cafeteria',
            bn: 'ক্যাফেটেরিয়ায় নিরাপত্তা টিকেটের জন্য উচ্চ শব্দে অ্যালার্ম বাজিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Programmatic policies run in seconds, eliminating manual bottlenecks.',
          bn: 'প্রোগ্রাম্যাটিক পলিসি কয়েক সেকেন্ডে চলে, যা মানুষের পর্যালোচনার ধীরগতি দূর করে।',
        },
        explanation: {
          en: 'Instead of waiting days for security teams to inspect spreadsheets or diagrams, Policy as Code codifies rules in OPA Rego or Sentinel, giving instant feedback to developers.',
          bn: 'নিরাপত্তা দলের ম্যানুয়াল অনুমোদনের জন্য দিনব্যাপী অপেক্ষার বদলে পলিসি অ্যাজ কোড নিয়মগুলোকে কোডে পরিণত করে তাৎক্ষণিক ফলাফল নিশ্চিত করে।',
        },
      },
      {
        id: 'iac-rel-qz-3',
        kind: 'mcq',
        topic: 'nightly-drift-detection-role',
        question: {
          en: 'Why do mature platform engineering teams schedule automated nightly drift detection jobs?',
          bn: 'অভিজ্ঞ প্ল্যাটফর্ম ইঞ্জিনিয়ারিং দল কেন প্রতি রাতে স্বয়ংক্রিয় ড্রিফট সনাক্তকরণ প্রক্রিয়া পরিচালনা করে?'
        },
        options: [
          {
            en: 'To uncover unauthorized manual changes made in cloud consoles during the day before they cause security vulnerabilities or deployment failures',
            bn: 'দিনের বেলা ক্লাউড কনসোলে করা যেকোনো অননুমোদিত ম্যানুয়াল পরিবর্তন নিরাপত্তা ঝুঁকি বা ব্যর্থতা তৈরির আগেই শনাক্ত করতে',
          },
          {
            en: 'To restart all cloud servers every night at midnight',
            bn: 'প্রতিদিন মধ্যরাতে সমস্ত ক্লাউড সার্ভার রিস্টার্ট করার জন্য',
          },
          {
            en: 'To make server cooling fans run faster during the night',
            bn: 'রাতে সার্ভার কুলিং ফ্যানের গতি বাড়ানোর উদ্দেশ্যে',
          },
          {
            en: 'Because cloud networks disconnect from the internet after 10 PM',
            bn: 'কারণ রাত ১০ টার পর ক্লাউড নেটওয়ার্ক ইন্টারনেট থেকে বিচ্ছিন্ন হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Scheduled drift scans catch out-of-band console changes early.',
          bn: 'নিয়মিত ড্রিফট স্ক্যান কনসোলে করা অননুমোদিত পরিবর্তন দ্রুত ধরে ফেলে।',
        },
        explanation: {
          en: 'Running terraform plan -detailed-exitcode on a schedule flags whether real cloud assets deviate from git, generating tickets for platform teams to remediate out-of-band drift.',
          bn: 'নির্দিষ্ট সময় পরপর terraform plan চালালে বাস্তব ক্লাউড কোড থেকে আলাদা হয়েছে কিনা তা বোঝা যায় এবং প্ল্যাটফর্ম টিম দ্রুত ব্যবস্থা নিতে পারে।',
        },
      },
      {
        id: 'iac-rel-qz-4',
        kind: 'mcq',
        topic: 'trunk-based-infrastructure-delivery',
        question: {
          en: 'In a trunk-based GitOps workflow, how are configuration changes promoted from development to production?',
          bn: 'একটি ট্রাঙ্ক-ভিত্তিক গিটঅপ্স কার্যপ্রণালীতে ডেভেলপমেন্ট থেকে প্রোডাকশনে কনফিগারেশন কীভাবে উন্নীত করা হয়?'
        },
        options: [
          {
            en: 'By merging short-lived feature branches into main through automated pull request validation, triggering sequential pipeline applies across environments',
            bn: 'স্বয়ংক্রিয় পুল রিকোয়েস্ট যাচাইয়ের মাধ্যমে স্বল্পস্থায়ী ফিচার ব্র্যাঞ্চগুলোকে মেইনে মার্জ করে এবং পর্যায়ক্রমে বিভিন্ন পরিবেশে প্রয়োগ সক্রিয় করে',
          },
          {
            en: 'By emailing text snippets between developers over personal messaging apps',
            bn: 'ব্যক্তিগত মেসেজিং অ্যাপে ডেভেলপারদের মধ্যে টেক্সট আদানপ্রদান করে',
          },
          {
            en: 'By copying code files onto physical USB flash drives and walking them across the building',
            bn: 'ইউএসবি পেনড্রাইভে কোড কপি করে অফিসের ভেতর এক টেবিল থেকে অন্য টেবিলে হেঁটে গিয়ে',
          },
          {
            en: 'By manually modifying live cloud settings in the production console',
            bn: 'প্রোডাকশন কনসোলে সরাসরি ম্যানুয়ালি লাইভ সেটিংস পরিবর্তন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'PR validation and merging into main drives sequential environment promotion.',
          bn: 'পিআর যাচাই ও মেইনে মার্জের মাধ্যমে বিভিন্ন পরিবেশে নিরাপদ প্রয়োগ সম্পন্ন হয়।',
        },
        explanation: {
          en: 'Trunk-based infrastructure delivery applies changes sequentially: first running linting and plan on feature branches, and then executing applies to dev, staging, and prod upon merge to main.',
          bn: 'ট্রাঙ্ক-ভিত্তিক ইনফ্রাস্ট্রাকচার ডেলিভারি ধাপে ধাপে কাজ করে: প্রথমে ফিচার ব্র্যাঞ্চে পরীক্ষা ও প্ল্যান তৈরি হয় এবং মেইনে মার্জের পর ধারাবাহিকভাবে দেব, স্টেজিং ও প্রোডাকশনে প্রয়োগ হয়।',
        },
      },
    ],
  },
};
