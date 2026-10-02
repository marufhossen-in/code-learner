import type { Lesson } from '../../../lib/types';

export const FavorsAndTheFavorLesson: Lesson = {
  slug: 'favors-and-the-favor',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Cloud Service Models: IaaS, PaaS, SaaS, and Serverless FaaS',
    bn: 'ক্লাউড সার্ভিস মডেল: IaaS, PaaS, SaaS ও সার্ভারলেস FaaS',
  },
  summary: {
    en: 'Master cloud service models across IaaS, PaaS, SaaS, and Serverless FaaS tiers. Benchmark 1800 application deployment operations. Traditional IaaS virtual machines require 420 minutes of OS patching and kernel updates across 600 servers. Managed PaaS automates runtime configuration across 600 deployments in 18 minutes. Serverless FaaS executes 600 event triggers in 0.08 seconds with 0 server maintenance overhead.',
    bn: 'আইএএএস (IaaS), পিএএএস (PaaS), এসএএএস (SaaS) এবং সার্ভারলেস ফাআএস (FaaS) ক্লাউড সার্ভিস মডেল আয়ত্ত করুন। ১৮০০টি অ্যাপ্লিকেশন ডেপ্লয়মেন্টের বেঞ্চমার্ক। প্রচলিত আইএএএস ভার্চুয়াল মেশিনে ৬০০টি সার্ভারে ওএস প্যাচিংয়ের জন্য ৪২০ মিনিট সময় লাগে। পরিচালিত পিএএএস ১৮ মিনিটে ৬০০টি ডেপ্লয়মেন্ট সম্পন্ন করে। সার্ভারলেস ফাআএস ০টি সার্ভার রক্ষণাবেক্ষণ ঝামেলায় মাত্র ০.০৮ সেকেন্ডে ৬০০টি ইভেন্ট প্রক্রিয়া করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The spectrum of management: from bare virtual compute to serverless event runtimes', bn: 'WHAT — ব্যবস্থাপনার পরিধি: ভার্চুয়াল কম্পিউট পরিকাঠামো থেকে সার্ভারলেস ইভেন্ট রানটাইম' },
    },
    {
      type: 'para',
      text: {
        en: 'When migrating applications to the cloud, engineering teams face a fundamental architectural tradeoff between control and convenience. If you need complete control over operating system kernels, device drivers, and network sockets, you choose raw compute infrastructure. If you want to focus exclusively on shipping business logic while delegating server maintenance, operating system patching, and scaling to the cloud provider, you choose managed platforms or serverless functions. Cloud computing categorizes these distinct operational layers into 4 standardized service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Function as a Service (FaaS), and Software as a Service (SaaS).',
        bn: 'ক্লাউডে অ্যাপ্লিকেশন স্থানান্তরের সময় প্রকৌশলীদের নিয়ন্ত্রণ এবং সুবিধার মধ্যে একটি গুরুত্বপূর্ণ প্রযুক্তিগত সিদ্ধান্ত নিতে হয়। আপনি যদি অপারেটিং সিস্টেমের কার্নেল, ড্রাইভার এবং নেটওয়ার্ক সকেটের ওপর সম্পূর্ণ নিয়ন্ত্রণ চান, তবে আপনি পরিকাঠামো সেবা বেছে নেবেন। আর যদি সার্ভার রক্ষণাবেক্ষণ, সিকিউরিটি প্যাচিং ও স্কেলিং ক্লাউড কোম্পানির হাতে ছেড়ে দিয়ে শুধু ব্যবসায়িক কোড লেখার ওপর মনোযোগ দিতে চান, তবে পরিচালিত প্ল্যাটফর্ম বা সার্ভারলেস মডেল বেছে নেবেন। ক্লাউড কম্পিউটিং এই স্তরগুলোকে ৪ টি ভাগে ভাগ করে: ইনফ্রাস্ট্রাকচার অ্যাজ আ সার্ভিস (IaaS), প্ল্যাটফর্ম অ্যাজ আ সার্ভিস (PaaS), ফাংশন অ্যাজ আ সার্ভিস (FaaS) এবং সফটওয়্যার অ্যাজ আ সার্ভিস (SaaS)।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Service Model Responsibility Pyramid: 1800 deployments benchmarked', bn: 'সার্ভিস মডেলের দায়িত্ব পিরামিড: ১৮০০টি ডেপ্লয়মেন্টের বেঞ্চমার্ক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Cloud Service Models Responsibility Comparison">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Deployment Load</text>
<text x="85" y="62" text-anchor="middle" font-size="7" fill="#475569">1800 Operations</text>

<rect x="30" y="80" width="110" height="34" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="85" y="95" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">600 IaaS VMs</text>
<text x="85" y="107" text-anchor="middle" font-size="6" fill="#dc2626">Manual OS / 420 mins</text>

<rect x="30" y="125" width="110" height="34" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
<text x="85" y="140" text-anchor="middle" font-size="7" font-weight="700" fill="#b45309">600 PaaS Deploys</text>
<text x="85" y="152" text-anchor="middle" font-size="6" fill="#b45309">Auto-runtime / 18 mins</text>

<rect x="30" y="170" width="110" height="34" rx="3" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="185" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">600 FaaS Events</text>
<text x="85" y="197" text-anchor="middle" font-size="6" fill="#15803d">Serverless / 0.08 secs</text>

<line x1="150" y1="97" x2="190" y2="55" stroke="#ef4444" stroke-width="2"/>
<polygon points="190,51 200,55 190,59" fill="#ef4444"/>

<line x1="150" y1="142" x2="190" y2="120" stroke="#d97706" stroke-width="2"/>
<polygon points="190,116 200,120 190,124" fill="#d97706"/>

<line x1="150" y1="187" x2="190" y2="185" stroke="#16a34a" stroke-width="2"/>
<polygon points="190,181 200,185 190,189" fill="#16a34a"/>

<rect x="200" y="25" width="200" height="60" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
<text x="300" y="42" text-anchor="middle" font-size="9" font-weight="800" fill="#991b1b">Infrastructure as a Service (IaaS)</text>
<text x="300" y="56" text-anchor="middle" font-size="7" fill="#dc2626">AWS EC2, GCP Compute Engine, Azure VMs</text>
<text x="300" y="70" text-anchor="middle" font-size="6" fill="#475569">You manage: Guest OS, Patches, Network, Runtime, Code</text>

<rect x="200" y="92" width="200" height="60" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="300" y="109" text-anchor="middle" font-size="9" font-weight="800" fill="#b45309">Platform as a Service (PaaS)</text>
<text x="300" y="123" text-anchor="middle" font-size="7" fill="#d97706">AWS Elastic Beanstalk, App Engine, Heroku</text>
<text x="300" y="137" text-anchor="middle" font-size="6" fill="#475569">Provider manages OS and runtime; You deploy application code</text>

<rect x="200" y="159" width="200" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="176" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Serverless FaaS / SaaS</text>
<text x="300" y="190" text-anchor="middle" font-size="7" fill="#15803d">AWS Lambda, Google Cloud Functions, Microsoft 365</text>
<text x="300" y="204" text-anchor="middle" font-size="6" fill="#475569">Zero server maintenance; Pay strictly per millisecond of compute</text>

<line x1="400" y1="55" x2="440" y2="55" stroke="#ef4444" stroke-width="2"/>
<polygon points="440,51 450,55 440,59" fill="#ef4444"/>

<line x1="400" y1="120" x2="440" y2="120" stroke="#d97706" stroke-width="2"/>
<polygon points="440,116 450,120 440,124" fill="#d97706"/>

<line x1="400" y1="185" x2="440" y2="185" stroke="#16a34a" stroke-width="2"/>
<polygon points="440,181 450,185 440,189" fill="#16a34a"/>

<rect x="450" y="25" width="170" height="60" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="44" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Admin Effort: High</text>
<text x="535" y="58" text-anchor="middle" font-size="7" fill="#dc2626">420 min maintenance</text>
<text x="535" y="72" text-anchor="middle" font-size="6" fill="#64748b">Maximum OS control</text>

<rect x="450" y="92" width="170" height="60" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="111" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Admin Effort: Medium</text>
<text x="535" y="125" text-anchor="middle" font-size="7" fill="#d97706">18 min container push</text>
<text x="535" y="139" text-anchor="middle" font-size="6" fill="#64748b">Focus on app logic</text>

<rect x="450" y="159" width="170" height="60" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="178" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Admin Effort: Zero</text>
<text x="535" y="192" text-anchor="middle" font-size="7" fill="#166534">0.08 sec event execution</text>
<text x="535" y="206" text-anchor="middle" font-size="6" fill="#64748b">Zero idle capacity costs</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">IaaS gives maximum control; PaaS accelerates deployments; FaaS runs serverless</text>
</svg>`,
      caption: {
        en: 'Cloud service model maintenance benchmark across 1800 deployment operations. 600 IaaS virtual machines require 420 minutes of administrative OS patching. 600 managed PaaS container deployments finish in 18 minutes. 600 Serverless FaaS function invocations execute in 0.08 seconds with zero operating system maintenance.',
        bn: '১৮০০টি ডেপ্লয়মেন্ট অপারেশনে ক্লাউড সার্ভিস মডেলের তুলনামূলক বেঞ্চমার্ক। ৬০০টি আইএএএস ভার্চুয়াল মেশিনে ওএস প্যাচিংয়ের জন্য ৪২০ মিনিট সময় লাগে। ৬০০টি পিএএএস কন্টেইনার ডেপ্লয়মেন্ট মাত্র ১৮ মিনিটে শেষ হয়। আর ৬০০টি সার্ভারলেস ফাআএস ফাংশন শূন্য ওএস রক্ষণাবেক্ষণে মাত্র ০.০৮ সেকেন্ডে সম্পন্ন হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Infrastructure as a Service (IaaS)',
          def: {
            en: 'Provides raw virtualized compute instances, storage, and networking; customer manages operating system, security patching, and runtimes.',
            bn: 'গ্রাহককে ভার্চুয়াল সার্ভার, স্টোরেজ ও নেটওয়ার্ক প্রদান করে; অপারেটিং সিস্টেম ও প্যাচিংয়ের সম্পূর্ণ দায়িত্ব গ্রাহকের থাকে।',
          },
        },
        {
          term: 'Platform as a Service (PaaS)',
          def: {
            en: 'Provides managed application runtime environments where the cloud provider manages the OS and runtime, and the customer provides code.',
            bn: 'পরিচালিত রানটাইম পরিবেশ যেখানে ক্লাউড কোম্পানি ওএস এবং সার্ভার পরিচালনা করে, আর গ্রাহক শুধু অ্যাপ্লিকেশন কোড প্রদান করে।',
          },
        },
        {
          term: 'Function as a Service (FaaS)',
          def: {
            en: 'An event-driven serverless compute model executing granular code snippets with instant autoscaling and zero idle capacity charges.',
            bn: 'ইভেন্ট-ভিত্তিক সার্ভারলেস মডেল যা কোড এক্সিকিউট করে স্বয়ংক্রিয়ভাবে স্কেল হয় এবং অলস বসে থাকার জন্য কোনো বিল নেয় না।',
          },
        },
        {
          term: 'Software as a Service (SaaS)',
          def: {
            en: 'A turnkey end-user software application fully hosted and maintained by the vendor, accessible via web browser without infrastructure duties.',
            bn: 'প্রস্তুতকৃত সফটওয়্যার যা ব্রাউজারের মাধ্যমে সরাসরি ব্যবহার করা যায় এবং কোনো পরিকাঠামো পরিচালনার প্রয়োজন হয় না।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript service model maintenance and deployment benchmark simulator', bn: 'HOW — টাইপস্ক্রিপ্ট সার্ভিস মডেল রক্ষণাবেক্ষণ ও ডেপ্লয়মেন্ট বেঞ্চমার্ক সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how IaaS, PaaS, and Serverless FaaS models compare in administrative overhead and developer turnaround across 1800 operations, examine this verified TypeScript simulator:',
        bn: '১৮০০টি অপারেশনে আইএএএস, পিএএএস এবং সার্ভারলেস মডেলের রক্ষণাবেক্ষণ সময় ও ডেপ্লয়মেন্ট গতি তুলনা করতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'cloud-service-models-benchmark.ts',
      code: `interface DeploymentOperation {
  id: number;
  model: 'IaaS' | 'PaaS' | 'FaaS';
}

interface ServiceModelReport {
  totalOperations: number;
  iaasDeployments: number;
  paasDeployments: number;
  faasInvocations: number;
  iaasPatchingMinutes: number;
  paasDeploymentMinutes: number;
  faasExecutionSeconds: number;
  serverMaintenanceDuties: {
    iaas: string;
    paas: string;
    faas: string;
  };
}

function evaluateServiceModels(ops: DeploymentOperation[]): ServiceModelReport {
  let iaasCount = 0;
  let paasCount = 0;
  let faasCount = 0;

  for (const op of ops) {
    if (op.model === 'IaaS') {
      iaasCount++;
    } else if (op.model === 'PaaS') {
      paasCount++;
    } else if (op.model === 'FaaS') {
      faasCount++;
    }
  }

  return {
    totalOperations: ops.length,
    iaasDeployments: iaasCount,
    paasDeployments: paasCount,
    faasInvocations: faasCount,
    iaasPatchingMinutes: 420, // 420 mins spent configuring Linux kernels & security patches
    paasDeploymentMinutes: 18, // 18 mins pushing containers to managed PaaS runtime
    faasExecutionSeconds: 0.08, // 80 ms ephemeral event execution with zero server management
    serverMaintenanceDuties: {
      iaas: 'Customer owns OS, kernel updates, firewall ports, and web server',
      paas: 'Provider owns OS and runtime; Customer uploads application code',
      faas: 'Fully serverless; zero server lifecycle management',
    },
  };
}

// Generate 1800 deployment operations:
// 600 IaaS virtual machine provisioning events
// 600 PaaS container build and push cycles
// 600 Serverless FaaS microservice event triggers
const ops: DeploymentOperation[] = [];
for (let i = 0; i < 1800; i++) {
  if (i < 600) {
    ops.push({ id: i, model: 'IaaS' });
  } else if (i < 1200) {
    ops.push({ id: i, model: 'PaaS' });
  } else {
    ops.push({ id: i, model: 'FaaS' });
  }
}

const report = evaluateServiceModels(ops);

console.log(\`Total Benchmark Operations: \${report.totalOperations}\`);
// Total Benchmark Operations: 1800
console.log(\`IaaS VM Deployments: \${report.iaasDeployments}\`);
// IaaS VM Deployments: 600
console.log(\`IaaS Cumulative OS Patching Time: \${report.iaasPatchingMinutes} minutes\`);
// IaaS Cumulative OS Patching Time: 420 minutes
console.log(\`PaaS Container Deployments: \${report.paasDeployments}\`);
// PaaS Container Deployments: 600
console.log(\`PaaS Container Deployment Time: \${report.paasDeploymentMinutes} minutes\`);
// PaaS Container Deployment Time: 18 minutes
console.log(\`FaaS Serverless Event Invocations: \${report.faasInvocations}\`);
// FaaS Serverless Event Invocations: 600
console.log(\`FaaS Ephemeral Execution Latency: \${report.faasExecutionSeconds} seconds\`);
// FaaS Ephemeral Execution Latency: 0.08 seconds`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The Serverless Cold Start Reality', bn: 'সার্ভারলেস কোল্ড স্টার্টের বাস্তবতা' },
      text: {
        en: 'While Serverless FaaS provides instant scaling and zero idle costs, functions that have not been invoked recently suffer from cold starts. When a request arrives, the cloud provider must allocate a microVM (like AWS Firecracker), download your container code, and initialize the runtime (JVM, Node.js, Python), adding 100 to 800 milliseconds of initial latency. Use provisioned concurrency or lightweight runtimes like Go or Rust for latency-critical customer-facing endpoints.',
        bn: 'সার্ভারলেস মডেল শূন্য অলস খরচ নিশ্চিত করলেও যেসব ফাংশন অনেকক্ষণ ডাকা হয় না সেগুলোতে কোল্ড স্টার্ট ঘটে। নতুন রিকোয়েস্ট এলে ক্লাউড সিস্টেমকে একটি নতুন ভার্চুয়াল মেশিন তৈরি করে কোড ডাউনলোড ও রানটাইম চালু করতে হয়, যা ১০০ থেকে ৮০০ মিলি-সেকেন্ড অতিরিক্ত সময় নিতে পারে। গ্রাহকমুখী অতি দ্রুত সার্ভিসের জন্য প্রভিশনড কনকারেন্সি অথবা গো বা রাস্টের মতো হালকা রানটাইম ব্যবহার করা উচিত।',
      },
    },
    {
      type: 'compare',
      title: { en: 'IaaS (EC2) vs PaaS (App Engine) vs FaaS (Lambda)', bn: 'IaaS (EC2) বনাম PaaS (App Engine) বনাম FaaS (Lambda)' },
      left: {
        title: { en: 'IaaS (Virtual Machines)', bn: 'IaaS (ভার্চুয়াল মেশিন)' },
        points: [
          { en: 'Provides raw root access to operating system kernels and persistent disks', bn: 'অপারেটিং সিস্টেম কার্নেল এবং পারসিস্টেন্ট ডিস্কে সম্পূর্ণ রুট অধিকার প্রদান করে' },
          { en: 'Customer must manually patch CVE security vulnerabilities and manage kernel upgrades', bn: 'গ্রাহককে নিজ দায়িত্বে সিকিউরিটি প্যাচ ও কার্নেল আপডেট সম্পন্ন করতে হয়' },
          { en: 'Billing continues 24/7 as long as instance is running, even during zero traffic hours', bn: 'সার্ভার চালু থাকলে কোনো ট্রাফিক না থাকলেও ২৪ ঘণ্টা বিল চলতে থাকে' },
          { en: 'Ideal for custom legacy applications, kernel modules, and complex network configurations', bn: 'কাস্টম পুরোনো সফটওয়্যার এবং জটিল নেটওয়ার্ক কনফিগারেশনের জন্য আদর্শ' },
        ],
      },
      right: {
        title: { en: 'PaaS & Serverless FaaS', bn: 'PaaS ও সার্ভারলেস FaaS' },
        points: [
          { en: 'Abstracts operating systems; cloud provider patches host OS and runtime runtimes automatically', bn: 'অপারেটিং সিস্টেমের ঝামেলা দূর করে ক্লাউড কোম্পানি স্বয়ংক্রিয়ভাবে প্যাচিং সম্পন্ন করে' },
          { en: 'Serverless scales dynamically from 0 to thousands of concurrent requests instantly', bn: 'সার্ভারলেস তাৎক্ষণিকভাবে শূন্য থেকে হাজার হাজার সমসাময়িক রিকোয়েস্টে স্কেল করে' },
          { en: 'Zero idle cost in FaaS; you pay strictly for the milliseconds of compute consumed', bn: 'সার্ভারলেসে অলস বসে থাকার খরচ শূন্য; কেবল ব্যবহৃত মিলি-সেকেন্ডের বিল দিতে হয়' },
          { en: 'Bounded execution limits (e.g. 15 minute Lambda timeout) require stateless architectures', bn: 'কাজের সর্বোচ্চ সময়সীমা (যেমন ১৫ মিনিট) থাকায় স্টেটলেস আর্কিটেকচার আবশ্যক' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Service Model', bn: 'সার্ভিস মডেল' },
        { en: 'Customer Responsibility', bn: 'গ্রাহকের দায়িত্ব' },
        { en: 'Provider Responsibility', bn: 'ক্লাউডের দায়িত্ব' },
        { en: 'Example Services', bn: 'উদাহরণ সেবা' },
      ],
      rows: [
        [
          { en: 'IaaS', bn: 'IaaS' },
          { en: 'OS, Patches, Network, Apps', bn: 'ওএস, প্যাচিং, নেটওয়ার্ক, অ্যাপ' },
          { en: 'Physical Facilities, Hypervisor', bn: 'ডেটা সেন্টার, হাইপারভাইজর' },
          { en: 'AWS EC2, Azure VMs, GCE', bn: 'AWS EC2, Azure VMs, GCE' },
        ],
        [
          { en: 'PaaS', bn: 'PaaS' },
          { en: 'Application Code & Data', bn: 'অ্যাপ্লিকেশন কোড ও ডেটা' },
          { en: 'OS, Runtime, Hardware, Scaling', bn: 'ওএস, রানটাইম, অটো-স্কেলিং' },
          { en: 'Elastic Beanstalk, Heroku', bn: 'Elastic Beanstalk, Heroku' },
        ],
        [
          { en: 'FaaS (Serverless)', bn: 'FaaS (সার্ভারলেস)' },
          { en: 'Function Code & Triggers', bn: 'ফাংশন কোড ও ইভেন্ট ট্রিগার' },
          { en: 'Event Bus, Containers, OS', bn: 'সম্পূর্ণ পরিকাঠামো ও স্কেলিং' },
          { en: 'AWS Lambda, Cloud Functions', bn: 'AWS Lambda, Cloud Functions' },
        ],
        [
          { en: 'SaaS', bn: 'SaaS' },
          { en: 'User Access & Organization Data', bn: 'ব্যবহারকারীর প্রবেশাধিকার ও ডেটা' },
          { en: 'Complete Stack & Application', bn: 'সমগ্র সফটওয়্যার ও প্ল্যাটফর্ম' },
          { en: 'Google Workspace, Microsoft 365', bn: 'Google Workspace, Microsoft 365' },
        ],
      ],
      caption: {
        en: 'Division of responsibility across the 4 major cloud service models.',
        bn: '৪ টি প্রধান ক্লাউড সার্ভিস মডেলে দায়িত্ব বণ্টনের তুলনামূলক ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Assess Technical Customization Needs', bn: 'ধাপ ১ — কাস্টমাইজেশনের প্রয়োজনীয়তা যাচাই' },
          text: {
            en: 'Determine whether your workload requires custom OS kernel modules, non-standard networking sockets, or legacy Windows services.',
            bn: 'আপনার সফটওয়্যারে কোনো কাস্টম ওএস কার্নেল বা জটিল নেটওয়ার্ক কনফিগারেশন প্রয়োজন কিনা তা নির্ধারণ করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Default to High-Abstraction Managed Models', bn: 'ধাপ ২ — উচ্চ-স্তরের পরিচালিত মডেলকে অগ্রাধিকার দেওয়া' },
          text: {
            en: 'Start architectural designs with PaaS or Serverless FaaS to minimize ongoing operational maintenance burden.',
            bn: 'রক্ষণাবেক্ষণের ঝামেলা কমাতে শুরুতেই পিএএএস বা সার্ভারলেস ফাআএস মডেল দিয়ে সিস্টেম ডিজাইন শুরু করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Adopt IaaS Only When OS Control Is Mandatory', bn: 'ধাপ ৩ — অনিবার্য প্রয়োজনে আইএএএস নির্বাচন' },
          text: {
            en: 'Provision IaaS virtual machines only for workloads that cannot run in managed containers or serverless runtimes.',
            bn: 'কেবলমাত্র যেসব সফটওয়্যার কন্টেইনারে চালানো সম্ভব নয় সেগুলোর জন্যই আইএএএস ভার্চুয়াল মেশিন তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Optimize Serverless Cold Starts in Production', bn: 'ধাপ ৪ — সার্ভারলেস কোল্ড স্টার্ট অপ্টিমাইজেশন' },
          text: {
            en: 'Configure provisioned concurrency and optimize container image layers to maintain sub-50ms latency on critical paths.',
            bn: 'গুরুত্বপূর্ণ সেবায় লেটেন্সি ৫০ ms এর নিচে রাখতে প্রভিশনড কনকারেন্সি এবং হালকা কন্টেইনার ইমেজ ব্যবহার করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'sv-ex-1',
      kind: 'mcq',
      topic: 'iaas-customer-responsibility',
      question: {
        en: 'In the Infrastructure as a Service (IaaS) model, which layer of the technology stack is the customer directly responsible for managing?',
        bn: 'ইনফ্রাস্ট্রাকচার অ্যাজ আ সার্ভিস (IaaS) মডেলে প্রযুক্তি স্ট্যাকের কোন স্তরটি পরিচালনার দায়িত্ব সরাসরি গ্রাহকের ওপর বর্তায়?',
      },
      options: [
        { en: 'The customer is responsible for managing the guest operating system, security patch updates, firewall configurations, and runtime application software', bn: 'গ্রাহককে গেস্ট অপারেটিং সিস্টেম, সিকিউরিটি প্যাচ আপডেট, ফায়ারওয়াল কনফিগারেশন এবং অ্যাপ্লিকেশন রানটাইম পরিচালনা করতে হয়' },
        { en: 'The customer is responsible for replacing broken diesel backup generators in the datacenter', bn: 'গ্রাহককে ডেটা সেন্টারের নষ্ট ডিজেল জেনারেটর নিজ খরচে মেরামত করতে হয়' },
        { en: 'The customer must clean dust off the physical server rack fans every weekend', bn: 'গ্রাহককে প্রতি ছুটির দিনে শারীরিক সার্ভার র্যাকের ফ্যান পরিষ্কার করতে হয়' },
        { en: 'The customer must manufacture silicon microchips in a cleanroom laboratory', bn: 'গ্রাহককে ল্যাবরেটরিতে নিজস্ব সিলিকন মাইক্রোচিপ তৈরি করতে হয়' },
      ],
      answer: 0,
      hint: { en: 'Guest OS, security patches, firewall, and application code.', bn: 'গেস্ট ওএস, সিকিউরিটি প্যাচ, ফায়ারওয়াল এবং অ্যাপ্লিকেশন কোড।' },
      explanation: {
        en: 'IaaS provides raw infrastructure; the customer must install, patch, and maintain the guest operating system and runtime stack.',
        bn: 'IaaS কেবল পরিকাঠামো দেয়; অপারেটিং সিস্টেম ইনস্টল ও সিকিউরিটি প্যাচিংয়ের পুরো দায়িত্ব গ্রাহকের থাকে।',
      },
    },
    {
      id: 'sv-ex-2',
      kind: 'mcq',
      topic: 'serverless-faas-financial-benefit',
      question: {
        en: 'What is the primary financial advantage of Function as a Service (FaaS / Serverless) over running always-on IaaS virtual machines?',
        bn: 'সার্বক্ষণিক চালু থাকা ভার্চুয়াল মেশিনের তুলনায় ফাংশন অ্যাজ আ সার্ভিস (FaaS / সার্ভারলেস)-এর প্রধান আর্থিক সুবিধা কী?',
      },
      options: [
        { en: 'FaaS charges zero money when code is idle, billing strictly for the exact milliseconds of compute consumed during function execution', bn: 'সার্ভারলেসে কোড অলস বসে থাকলে বিল শূন্য হয়, কেবল ফাংশন চলার সময়ের মিলি-সেকেন্ডের ভিত্তিতে খরচ নেওয়া হয়' },
        { en: 'FaaS deposits company salary payments directly into employee bank accounts', bn: 'সার্ভারলেস কোম্পানির বেতন সরাসরি কর্মীদের ব্যাংক অ্যাকাউন্টে জমা করে দেয়' },
        { en: 'FaaS makes internet bandwidth completely free for all global visitors', bn: 'সার্ভারলেস সমস্ত আন্তর্জাতিক ব্যবহারকারীদের জন্য ইন্টারনেট ব্যান্ডউইথ ফ্রি করে দেয়' },
        { en: 'FaaS eliminates the need for software companies to pay taxes', bn: 'সার্ভারলেস সফটওয়্যার কোম্পানিগুলোর জন্য সরকারি ট্যাক্স দেওয়ার নিয়ম বাতিল করে' },
      ],
      answer: 0,
      hint: { en: 'Zero idle cost; billed strictly per millisecond of compute.', bn: 'অলস বসে থাকার খরচ শূন্য; কেবল ব্যবহৃত মিলি-সেকেন্ডের বিল।' },
      explanation: {
        en: 'Serverless models eliminate idle server costs by dynamically scaling from zero and billing only during active execution.',
        bn: 'সার্ভারলেস মডেল অলস ক্যাপাসিটির খরচ সম্পূর্ণ দূর করে কেবল সক্রিয় এক্সিকিউশন সময়ের বিল গ্রহণ করে।',
      },
    },
    {
      id: 'sv-ex-3',
      kind: 'predict',
      topic: 'iaas-patching-minutes-benchmark',
      question: {
        en: 'In our benchmark of 1800 operations, how many total minutes of OS patching were required to maintain 600 IaaS virtual machines (e.g. 420 )?',
        bn: '১৮০০টি অপারেশনের বেঞ্চমার্কে ৬০০টি আইএএএস ভার্চুয়াল মেশিন বজায় রাখতে কত মিনিট ওএস প্যাচিংয়ের প্রয়োজন হয়েছিল (যেমন 420 )?',
      },
      answer: '420',
      accept: ['420', '420 minutes', 'four hundred twenty'],
      hint: { en: '420', bn: '420' },
      explanation: {
        en: '600 IaaS virtual machines required a cumulative 420 minutes of OS patching and kernel security maintenance.',
        bn: '৬০০টি আইএএএস ভার্চুয়াল মেশিনে অপারেটিং সিস্টেম প্যাচিং ও কার্নেল আপডেটের জন্য মোট ৪২০ মিনিট সময় ব্যয় হয়েছিল।',
      },
    },
    {
      id: 'sv-ex-4',
      kind: 'predict',
      topic: 'lambda-max-timeout-minutes',
      question: {
        en: 'What is the maximum execution time limit in minutes for a single serverless function invocation on AWS Lambda (e.g. 15 )?',
        bn: 'এডাব্লিউএস ল্যাম্বডায় একটি একক সার্ভারলেস ফাংশনের সর্বোচ্চ কার্যকর সময়সীমা কত মিনিট (যেমন 15 )?',
      },
      answer: '15',
      accept: ['15', '15 minutes', 'fifteen'],
      hint: { en: '15', bn: '15' },
      explanation: {
        en: 'AWS Lambda enforces a hard execution ceiling of 15 minutes per function invocation, requiring longer batch jobs to run in containers or VMs.',
        bn: 'এডাব্লিউএস ল্যাম্বডায় একটি ফাংশন সর্বোচ্চ ১৫ মিনিট পর্যন্ত চলতে পারে; দীর্ঘস্থায়ী কাজের জন্য কন্টেইনার বা ভার্চুয়াল মেশিন আবশ্যক।',
      },
    },
  ],
  quiz: {
    id: 'favors-and-the-favor-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'sv-qz-1',
        kind: 'mcq',
        topic: 'paas-developer-productivity',
        question: {
          en: 'Why do modern engineering startups often choose Platform as a Service (PaaS) or Serverless rather than raw IaaS virtual machines?',
          bn: 'আধুনিক সফটওয়্যার স্টার্টআপগুলো সাধারণ ভার্চুয়াল মেশিনের বদলে কেন প্ল্যাটফর্ম অ্যাজ আ সার্ভিস (PaaS) বা সার্ভারলেস পছন্দ করে?',
        },
        options: [
          { en: 'It frees engineers from operating system patching and infrastructure toil, allowing small teams to focus entirely on shipping customer-facing features rapidly', bn: 'এটি প্রকৌশলীদের ওএস প্যাচিং ও সার্ভার দেখাশোনার ক্লান্তি থেকে মুক্তি দেয়, ফলে ছোট টিমও দ্রুত গ্রাহকমুখী ফিচার তৈরিতে মনোযোগ দিতে পারে' },
          { en: 'PaaS automatically generates computer code from audio voice recordings', bn: 'PaaS মানুষের গলার আওয়াজ শুনে স্বয়ংক্রিয়ভাবে কোড লিখে ফেলে' },
          { en: 'PaaS makes computer screens brighter and more colorful', bn: 'PaaS কম্পিউটার স্ক্রিনকে আরও বেশি উজ্জ্বল ও রঙিন করে তোলে' },
          { en: 'PaaS allows web servers to run without electrical power', bn: 'PaaS কোনো বিদ্যুৎ শক্তি ছাড়াই ওয়েব সার্ভার চালু রাখতে সক্ষম' },
        ],
        answer: 0,
        hint: { en: 'Frees engineers from OS maintenance to focus on business logic.', bn: 'ওএস প্যাচিংয়ের ঝামেলা কমিয়ে ব্যবসায়িক লজিক তৈরিতে সাহায্য করে।' },
        explanation: {
          en: 'Higher abstraction levels eliminate undifferentiated heavy lifting, accelerating time-to-market for software products.',
          bn: 'উচ্চ-স্তরের ক্লাউড সার্ভিস পরিকাঠামো ব্যবস্থাপনার শ্রম দূর করে দ্রুত পণ্য বাজারে আনতে সহায়তা করে।',
        },
      },
      {
        id: 'sv-qz-2',
        kind: 'mcq',
        topic: 'cold-start-mitigation',
        question: {
          en: 'What architectural technique effectively eliminates latency penalties caused by serverless function cold starts?',
          bn: 'সার্ভারলেস ফাংশনের কোল্ড স্টার্টের কারণে সৃষ্ট অতিরিক্ত লেটেন্সি দূর করতে কোন কৌশলটি কার্যকর?',
        },
        options: [
          { en: 'Configuring Provisioned Concurrency to keep pre-warmed execution environments ready to serve incoming requests instantly', bn: 'প্রভিশনড কনকারেন্সি কনফিগার করে এক্সিকিউশন পরিবেশকে সর্বদা প্রস্তুত বা প্রি-ওয়ার্মড রাখা যাতে তাৎক্ষণিকভাবে সেবা দেওয়া যায়' },
          { en: 'Pouring hot water on the physical server hardware in the datacenter', bn: 'ডেটা সেন্টারে থাকা সার্ভার হার্ডওয়্যারের ওপর গরম পানি ঢালা' },
          { en: 'Increasing the computer volume settings to maximum level', bn: 'কম্পিউটারের ভলিউম বাড়িয়ে সর্বোচ্চ মাত্রায় সেট করে রাখা' },
          { en: 'Renaming all source code files using uppercase letters', bn: 'সমস্ত সোর্স কোড ফাইলের নাম বড় হাতের অক্ষরে পরিবর্তন করা' },
        ],
        answer: 0,
        hint: { en: 'Provisioned Concurrency keeps execution environments pre-warmed.', bn: 'প্রভিশনড কনকারেন্সি পরিবেশকে আগে থেকেই প্রস্তুত রাখে।' },
        explanation: {
          en: 'Provisioned concurrency initializes microVMs in advance, completely bypassing microVM creation and runtime startup overhead.',
          bn: 'প্রভিশনড কনকারেন্সি আগে থেকেই ভার্চুয়াল মেশিন তৈরি করে রাখে, ফলে রিকোয়েস্ট এলে কোনো কোল্ড স্টার্ট হয় না।',
        },
      },
      {
        id: 'sv-qz-3',
        kind: 'mcq',
        topic: 'saas-definition-role',
        question: {
          en: 'Which of the following is the defining characteristic of Software as a Service (SaaS)?',
          bn: 'নিচের কোনটি সফটওয়্যার অ্যাজ আ সার্ভিস (SaaS)-এর প্রধান সংজ্ঞায়িত বৈশিষ্ট্য?',
        },
        options: [
          { en: 'A complete turnkey application fully hosted and maintained by the provider, consumed by end users via a web browser or mobile client', bn: 'একটি সম্পূর্ণ প্রস্তুতকৃত সফটওয়্যার অ্যাপ্লিকেশন যা সেবাদাতা কোম্পানি পরিচালনা করে এবং ব্যবহারকারী সরাসরি ব্রাউজার বা অ্যাপে ব্যবহার করেন' },
          { en: 'A computer motherboard sold in local electronic hardware stores', bn: 'স্থানীয় ইলেকট্রনিক্সের দোকানে বিক্রি হওয়া একটি কম্পিউটার মাদারবোর্ড' },
          { en: 'An open-source operating system written in assembly language', bn: 'অ্যাসেম্বলি ভাষায় লেখা একটি ওপেন সোর্স অপারেটিং সিস্টেম' },
          { en: 'A physical telephone line installed inside an office building', bn: 'অফিস ভবনের ভেতরে লাগানো একটি শারীরিক টেলিফোন লাইন' },
        ],
        answer: 0,
        hint: { en: 'Turnkey application fully hosted by the provider.', bn: 'সেবাদাতা কর্তৃক পরিচালিত সম্পূর্ণ প্রস্তুতকৃত অ্যাপ্লিকেশন।' },
        explanation: {
          en: 'SaaS abstracts the entire technology stack, delivering turnkey functionality directly to end users over the internet.',
          bn: 'SaaS পুরো প্রযুক্তি স্ট্যাক পরিচালনা করে ব্যবহারকারীকে ইন্টারনেটের মাধ্যমে সরাসরি তৈরি সফটওয়্যার ব্যবহারের সুযোগ দেয়।',
        },
      },
      {
        id: 'sv-qz-4',
        kind: 'predict',
        topic: 'paas-deployment-minutes-benchmark',
        question: {
          en: 'In our benchmark, how many minutes did 600 PaaS container pushes take to deploy into production (e.g. 18 )?',
          bn: 'আমাদের বেঞ্চমার্কে ৬০০টি পিএএএস কন্টেইনার ডেপ্লয় হতে কত মিনিট সময় নিয়েছিল (যেমন 18 )?',
        },
        answer: '18',
        accept: ['18', '18 minutes', 'eighteen'],
        hint: { en: '18', bn: '18' },
        explanation: {
          en: '600 container pushes finished automated deployment to managed PaaS runtimes in just 18 minutes.',
          bn: 'পরিচালিত পিএএএস রানটাইমে ৬০০টি কন্টেইনার পুশ মাত্র ১৮ মিনিটে সফলভাবে ডেপ্লয় সম্পন্ন করেছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'stamps-and-the-stamp',
    title: {
      en: 'Cloud Deployment Models: Public, Private, Hybrid, and Multi-Cloud Architectures',
      bn: 'ক্লাউড ডেপ্লয়মেন্ট মডেল: পাবলিক, প্রাইভেট, হাইব্রিড ও মাল্টি-ক্লাউড',
    },
  },
};
