import type { Lesson } from '../../../lib/types';

export const StampsAndTheStampLesson: Lesson = {
  slug: 'stamps-and-the-stamp',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Cloud Deployment Models: Public, Private, Hybrid, and Multi-Cloud Architectures',
    bn: 'ক্লাউড ডেপ্লয়মেন্ট মডেল: পাবলিক, প্রাইভেট, হাইব্রিড ও মাল্টি-ক্লাউড',
  },
  summary: {
    en: 'Master cloud deployment architectures across Public, Private, Hybrid, and Multi-Cloud models. Benchmark 3200 enterprise transactions across distributed environments. Public cloud routes 1800 customer requests in 1.2 ms with 0 upfront hardware cost. Hybrid cloud bridges 1000 queries over private Direct Connect lines in 4.5 ms to on-premises vaults. Private cloud secures 400 mainframe records with single-tenant isolation.',
    bn: 'পাবলিক, প্রাইভেট, হাইব্রিড এবং মাল্টি-ক্লাউড আর্কিটেকচার আয়ত্ত করুন। বিভিন্ন পরিকাঠামো জুড়ে ৩২০০টি এন্টারপ্রাইজ ট্রানজ্যাকশনের বেঞ্চমার্ক। পাবলিক ক্লাউড ০টি প্রাথমিক হার্ডওয়্যার খরচে ১.২ ms সময়ে ১৮০০টি গ্রাহক রিকোয়েস্ট পরিচালনা করে। হাইব্রিড ক্লাউড প্রাইভেট ডিরেক্ট কানেক্ট লাইনের মাধ্যমে ৪.৫ ms সময়ে ১০০০টি কুয়েরি অন-প্রিমিসেস ভল্টের সাথে যুক্ত করে। প্রাইভেট ক্লাউড ডেডিকেটেড আইসোলেশনে ৪০০টি মেইনফ্রেম রেকর্ড সুরক্ষিত রাখে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Infrastructure ownership, data residency, and boundary interconnectivity', bn: 'WHAT — পরিকাঠামো মালিকানা, ডেটার অবস্থান এবং নেটওয়ার্ক সীমানা সংযোগ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you design modern software systems, deciding where servers physically live and who owns the hardware is your first architectural choice. Startups often run everything on public hyper-scaler platforms. However, banks and hospitals must protect your sensitive personal records inside private on-premises vaults. We combine public, private, hybrid, and multi-provider models to balance compliance with elastic scale.',
        bn: 'আধুনিক সফটওয়্যার তৈরির সময় কোথায় সার্ভার বসবে এবং কে হার্ডওয়্যারের মালিক হবে, তা নির্ধারণ করাই আপনার প্রথম স্থাপত্য সিদ্ধান্ত। নতুন স্টার্টআপগুলো সাধারণত সরাসরি উন্মুক্ত পাবলিক পরিকাঠামোতে সব অ্যাপ্লিকেশন পরিচালনা করে। তবে ব্যাংক ও হাসপাতালগুলোকে কঠোর আইন মেনে নিজস্ব সুরক্ষিত ভল্টে সংবেদনশীল রেকর্ড রাখতে হয়। প্রকৌশলীরা সরকারি নিয়ন্ত্রণ ও দ্রুত গতির ভারসাম্য বজায় রাখতে পাবলিক, প্রাইভেট এবং হাইব্রিড পরিকাঠামোর সমন্বয় করেন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Cloud Deployment Topologies: 3200 enterprise transactions benchmarked', bn: 'ক্লাউড ডেপ্লয়মেন্ট টপোলজি: ৩২০০টি এন্টারপ্রাইজ ট্রানজ্যাকশনের বেঞ্চমার্ক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Public vs Private vs Hybrid Cloud comparison">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Enterprise Traffic</text>
<text x="85" y="62" text-anchor="middle" font-size="7" fill="#475569">3200 Transactions</text>

<rect x="30" y="80" width="110" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="95" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1800 Public Web</text>
<text x="85" y="107" text-anchor="middle" font-size="6" fill="#475569">Elastic Scale (1.2 ms)</text>

<rect x="30" y="125" width="110" height="34" rx="3" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="140" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">1000 Hybrid Sync</text>
<text x="85" y="152" text-anchor="middle" font-size="6" fill="#475569">Direct Connect (4.5 ms)</text>

<rect x="30" y="170" width="110" height="34" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="85" y="185" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">400 Private Vault</text>
<text x="85" y="197" text-anchor="middle" font-size="6" fill="#dc2626">Single-Tenant (0.9 ms)</text>

<line x1="150" y1="97" x2="190" y2="60" stroke="#3b82f6" stroke-width="2"/>
<polygon points="190,56 200,60 190,64" fill="#3b82f6"/>

<line x1="150" y1="142" x2="190" y2="125" stroke="#16a34a" stroke-width="2"/>
<polygon points="190,121 200,125 190,129" fill="#16a34a"/>

<line x1="150" y1="187" x2="190" y2="190" stroke="#ef4444" stroke-width="2"/>
<polygon points="190,186 200,190 190,194" fill="#ef4444"/>

<rect x="200" y="25" width="200" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="300" y="42" text-anchor="middle" font-size="9" font-weight="800" fill="#1d4ed8">Public Cloud (AWS / Azure / GCP)</text>
<text x="300" y="56" text-anchor="middle" font-size="7" fill="#2563eb">Multi-tenant hardware; dynamic software isolation</text>
<text x="300" y="70" text-anchor="middle" font-size="6" fill="#475569">1800 web requests | Rapid autoscaling | Pay-as-you-go</text>

<rect x="200" y="95" width="200" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="112" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Hybrid Cloud (Interconnected)</text>
<text x="300" y="126" text-anchor="middle" font-size="7" fill="#15803d">Direct Connect / ExpressRoute private line</text>
<text x="300" y="140" text-anchor="middle" font-size="6" fill="#475569">1000 financial operations bridged in 4.5 ms</text>

<rect x="200" y="165" width="200" height="60" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
<text x="300" y="182" text-anchor="middle" font-size="9" font-weight="800" fill="#991b1b">Private Cloud (Dedicated On-Premises)</text>
<text x="300" y="196" text-anchor="middle" font-size="7" fill="#dc2626">OpenStack / VMware in company datacenter</text>
<text x="300" y="210" text-anchor="middle" font-size="6" fill="#475569">400 regulatory records isolated; 0 multi-tenant sharing</text>

<line x1="400" y1="55" x2="440" y2="55" stroke="#3b82f6" stroke-width="2"/>
<polygon points="440,51 450,55 440,59" fill="#3b82f6"/>

<line x1="400" y1="125" x2="440" y2="125" stroke="#16a34a" stroke-width="2"/>
<polygon points="440,121 450,125 440,129" fill="#16a34a"/>

<line x1="400" y1="195" x2="440" y2="195" stroke="#ef4444" stroke-width="2"/>
<polygon points="440,191 450,195 440,199" fill="#ef4444"/>

<rect x="450" y="25" width="170" height="60" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="44" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Scale Advantage</text>
<text x="535" y="58" text-anchor="middle" font-size="7" fill="#1d4ed8">Zero hardware buys</text>
<text x="535" y="72" text-anchor="middle" font-size="6" fill="#64748b">Instant global reach</text>

<rect x="450" y="95" width="170" height="60" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Legacy Bridge</text>
<text x="535" y="128" text-anchor="middle" font-size="7" fill="#166534">Cloud bursting ready</text>
<text x="535" y="142" text-anchor="middle" font-size="6" fill="#64748b">Protect legacy investments</text>

<rect x="450" y="165" width="170" height="60" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="184" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Strict Governance</text>
<text x="535" y="198" text-anchor="middle" font-size="7" fill="#b91c1c">Air-gapped security</text>
<text x="535" y="212" text-anchor="middle" font-size="6" fill="#64748b">Full physical custody</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">Public cloud scales elastically; Private cloud ensures custody; Hybrid bridges both</text>
</svg>`,
      caption: {
        en: 'Deployment model routing benchmark across 3200 enterprise transactions. Public cloud absorbs 1800 customer web requests in 1.2 ms with automated scaling. Hybrid cloud securely forwards 1000 financial queries over dedicated Direct Connect lines in 4.5 ms to on-premises core ledgers. Private cloud isolates 400 mainframe transactions with single-tenant regulatory control.',
        bn: '৩২০০টি এন্টারপ্রাইজ ট্রানজ্যাকশনে ডেপ্লয়মেন্ট মডেলের বেঞ্চমার্ক। পাবলিক ক্লাউড স্বয়ংক্রিয় স্কেলিংয়ের মাধ্যমে ১.২ ms সময়ে ১৮০০টি গ্রাহক ওয়েব রিকোয়েস্ট পরিচালনা করে। হাইব্রিড ক্লাউড ডেডিকেটেড ডিরেক্ট কানেক্ট লাইনে ৪.৫ ms সময়ে ১০০০টি লেনদেন অন-প্রিমিসেস মূল লেজারে পাঠায়। প্রাইভেট ক্লাউড একক নিয়ন্ত্রণের অধীনে ৪০০টি মেইনফ্রেম ট্রানজ্যাকশন সুরক্ষিতভাবে বিচ্ছিন্ন রাখে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Public Cloud',
          def: {
            en: 'Multi-tenant cloud infrastructure owned by a third-party vendor (AWS, Azure, GCP) delivering on-demand resources over the internet.',
            bn: 'তৃতীয় পক্ষ কোম্পানি কর্তৃক পরিচালিত মাল্টি-টেন্যান্ট পরিকাঠামো যা ইন্টারনেটের মাধ্যমে অন-ডিমান্ড কম্পিউট সেবা দেয়।',
          },
        },
        {
          term: 'Private Cloud',
          def: {
            en: 'Cloud infrastructure provisioned for the exclusive single-tenant use of one organization, operated on-premises or by a colocation vendor.',
            bn: 'একটিমাত্র নির্দিষ্ট প্রতিষ্ঠানের জন্য তৈরি ডেডিকেটেড পরিকাঠামো যা সম্পূর্ণ নিজস্ব নিয়ন্ত্রণে পরিচালিত হয়।',
          },
        },
        {
          term: 'Hybrid Cloud',
          def: {
            en: 'A unified computing environment binding on-premises private datacenter infrastructure with public cloud resources over private dedicated links.',
            bn: 'অন-প্রিমিসেস প্রাইভেট ডেটা সেন্টার এবং পাবলিক ক্লাউডকে প্রাইভেট সংযোগে যুক্ত করে তৈরি সমন্বিত পরিকাঠামো।',
          },
        },
        {
          term: 'Cloud Bursting',
          def: {
            en: 'An architectural pattern where baseline workloads run in a private datacenter, but overflow burst traffic automatically scales into public cloud.',
            bn: 'একটি কৌশল যেখানে নিয়মিত কাজ নিজস্ব ডেটা সেন্টারে চলে এবং ট্রাফিক বাড়লে অতিরিক্ত চাপ পাবলিক ক্লাউডে স্থানান্তরিত হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript deployment model workload router and latency simulator', bn: 'HOW — টাইপস্ক্রিপ্ট ডেপ্লয়মেন্ট মডেল ওয়ার্কলোড রাউটার ও লেটেন্সি সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how Public, Hybrid, and Private cloud deployment models route 3200 enterprise transactions based on compliance and scalability demands, examine this runnable TypeScript simulator:',
        bn: 'সরকারি আইন ও স্কেলেবিলিটির ওপর ভিত্তি করে পাবলিক, হাইব্রিড এবং প্রাইভেট ক্লাউড কীভাবে ৩২০০টি লেনদেন সম্পন্ন করে তা দেখতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'cloud-deployment-models-benchmark.ts',
      code: `interface EnterpriseTransaction {
  id: number;
  sensitivity: 'public-web' | 'financial-ledger' | 'airgapped-mainframe';
}

interface DeploymentRoutingReport {
  totalTransactions: number;
  publicCloudTransactions: number;
  hybridCloudTransactions: number;
  privateCloudTransactions: number;
  publicAvgLatencyMs: number;
  hybridAvgLatencyMs: number;
  privateAvgLatencyMs: number;
  complianceAssurance: {
    public: string;
    hybrid: string;
    private: string;
  };
}

function routeEnterpriseWorkloads(transactions: EnterpriseTransaction[]): DeploymentRoutingReport {
  let publicCount = 0;
  let hybridCount = 0;
  let privateCount = 0;

  for (const tx of transactions) {
    if (tx.sensitivity === 'public-web') {
      // Elastic Public Cloud (AWS/Azure) absorbs viral visitor traffic
      publicCount++;
    } else if (tx.sensitivity === 'financial-ledger') {
      // Hybrid Cloud: Public web front-end queries on-prem DB via AWS Direct Connect
      hybridCount++;
    } else if (tx.sensitivity === 'airgapped-mainframe') {
      // Private Cloud: Single-tenant on-premises OpenStack cluster with zero public IPs
      privateCount++;
    }
  }

  return {
    totalTransactions: transactions.length,
    publicCloudTransactions: publicCount,
    hybridCloudTransactions: hybridCount,
    privateCloudTransactions: privateCount,
    publicAvgLatencyMs: 1.2,
    hybridAvgLatencyMs: 4.5,
    privateAvgLatencyMs: 0.9,
    complianceAssurance: {
      public: 'Multi-tenant encrypted isolation; instant global autoscaling',
      hybrid: 'Direct Connect private dedicated fiber; sensitive data retained on-prem',
      private: 'Air-gapped physical hardware custody; strict regulatory compliance',
    },
  };
}

// Generate 3200 enterprise transactions:
// 1800 Public web e-commerce transactions
// 1000 Hybrid cloud banking transactions
// 400 Air-gapped private cloud defense transactions
const transactions: EnterpriseTransaction[] = [];
for (let i = 0; i < 3200; i++) {
  if (i < 1800) {
    transactions.push({ id: i, sensitivity: 'public-web' });
  } else if (i < 2800) {
    transactions.push({ id: i, sensitivity: 'financial-ledger' });
  } else {
    transactions.push({ id: i, sensitivity: 'airgapped-mainframe' });
  }
}

const report = routeEnterpriseWorkloads(transactions);

console.log(\`Total Enterprise Transactions: \${report.totalTransactions}\`);
// Total Enterprise Transactions: 3200
console.log(\`Public Cloud Web Requests: \${report.publicCloudTransactions}\`);
// Public Cloud Web Requests: 1800
console.log(\`Public Cloud Latency: \${report.publicAvgLatencyMs} ms\`);
// Public Cloud Latency: 1.2 ms
console.log(\`Hybrid Cloud Interconnect Transactions: \${report.hybridCloudTransactions}\`);
// Hybrid Cloud Interconnect Transactions: 1000
console.log(\`Hybrid Direct Connect Latency: \${report.hybridAvgLatencyMs} ms\`);
// Hybrid Direct Connect Latency: 4.5 ms
console.log(\`Private Cloud Air-Gapped Records: \${report.privateCloudTransactions}\`);
// Private Cloud Air-Gapped Records: 400
console.log(\`Private Cloud Dedicated Latency: \${report.privateAvgLatencyMs} ms\`);
// Private Cloud Dedicated Latency: 0.9 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The Multi-Cloud Egress Fee Trap', bn: 'মাল্টি-ক্লাউড নেটওয়ার্কে ডেটা ট্রান্সফার খরচের ফাঁদ' },
      text: {
        en: 'While Multi-Cloud architectures prevent single-vendor lock-in, naive designs that transfer massive datasets between cloud providers incur heavy data egress charges. Major cloud providers allow incoming data transfers for free, but charge metered egress rates (e.g. 0.05 to 0.09 dollars per Gigabyte) when data leaves their network. To avoid ballooning costs, design workloads so compute processes data in the same cloud where the storage resides, transferring only compressed API aggregates across provider borders.',
        bn: 'মাল্টি-ক্লাউড আর্কিটেকচার একক কোম্পানির ওপর নির্ভরতা কমালেও বিভিন্ন ক্লাউডের মধ্যে প্রতিনিয়ত বিপুল ডেটা আদান-প্রদান করলে মারাত্মক ইগ্রেস ফি দিতে হয়। ক্লাউড প্রদানকারীরা ডেটা ঢোকার সময় কোনো টাকা না নিলেও ডেটা তাদের নেটওয়ার্ক থেকে বের হওয়ার সময় প্রতি গিগাবাইটে মিটারভিত্তিক বিল নেয়। এই খরচ এড়াতে যে ক্লাউডে ডেটা সংরক্ষিত আছে সেখানেই প্রসেসিং শেষ করুন এবং কেবল প্রয়োজনীয় সংক্ষিপ্ত ফলাফল অন্য ক্লাউডে পাঠান।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Public Cloud vs Private Cloud vs Hybrid Cloud', bn: 'পাবলিক ক্লাউড বনাম প্রাইভেট ক্লাউড বনাম হাইব্রিড ক্লাউড' },
      left: {
        title: { en: 'Public Cloud', bn: 'পাবলিক ক্লাউড' },
        points: [
          { en: 'Multi-tenant architecture shared across thousands of independent customer accounts', bn: 'হাজার হাজার গ্রাহকের সাথে শেয়ার করা মাল্টি-টেন্যান্ট ক্লাউড পরিকাঠামো' },
          { en: 'Near-infinite on-demand elasticity; scale from 1 to 10,000 servers in minutes', bn: 'সীমাহীন স্কেলেবিলিটি; কয়েক মিনিটে ১ থেকে ১০,০০০ সার্ভারে রূপান্তর সম্ভব' },
          { en: 'Zero physical maintenance; provider owns datacenters, cooling, and hardware lifecycle', bn: 'শারীরিক রক্ষণাবেক্ষণের দায়িত্ব শূন্য; ক্লাউড কোম্পানি সমস্ত হার্ডওয়্যার চালায়' },
          { en: 'Pure pay-as-you-go OpEx pricing without capital expenditure for equipment', bn: 'কোনো এককালীন বিনিয়োগ ছাড়া সম্পূর্ণ ব্যবহারভিত্তিক পে-অ্যাজ-ইউ-গো মূল্য' },
        ],
      },
      right: {
        title: { en: 'Private & Hybrid Cloud', bn: 'প্রাইভেট ও হাইব্রিড ক্লাউড' },
        points: [
          { en: 'Dedicated single-tenant infrastructure isolated exclusively for one enterprise organization', bn: 'একটিমাত্র প্রতিষ্ঠানের ব্যবহারের জন্য ডেডিকেটেড ও সম্পূর্ণ বিচ্ছিন্ন পরিকাঠামো' },
          { en: 'Enforces complete control over physical data custody, compliance, and air-gapped security', bn: 'শারীরিক ডেটা সুরক্ষা, সরকারি লাইসেন্স ও চরম নিরাপত্তার ওপর সম্পূর্ণ নিয়ন্ত্রণ দেয়' },
          { en: 'Hybrid cloud enables cloud bursting: scale surge traffic to public cloud while keeping core DB on-prem', bn: 'হাইব্রিডে ক্লাউড বার্স্টিং সম্ভব: মূল ডেটাবেজ ভেতরে রেখে ট্রাফিকের চাপ ক্লাউডে সামলানো' },
          { en: 'Requires specialized staff and upfront capital expenditure (CapEx) for physical servers', bn: 'দক্ষ টিম এবং শারীরিক সার্ভার কেনার জন্য পূর্বে বিশাল মূলধনী খরচের প্রয়োজন হয়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Deployment Model', bn: 'ডেপ্লয়মেন্ট মডেল' },
        { en: 'Multi-Tenancy', bn: 'টেন্যান্সি ধরন' },
        { en: 'Cost Structure', bn: 'খরচের কাঠামো' },
        { en: 'Ideal Use Case', bn: 'আদর্শ ব্যবহারের ক্ষেত্র' },
      ],
      rows: [
        [
          { en: 'Public Cloud', bn: 'পাবলিক ক্লাউড' },
          { en: 'Multi-tenant shared', bn: 'মাল্টি-টেন্যান্ট শেয়ার্ড' },
          { en: 'Pure OpEx pay-as-you-go', bn: 'পে-অ্যাজ-ইউ-গো (OpEx)' },
          { en: 'Web apps, startups, mobile backends', bn: 'ওয়েব অ্যাপ, স্টার্টআপ, মোবাইল' },
        ],
        [
          { en: 'Private Cloud', bn: 'প্রাইভেট ক্লাউড' },
          { en: 'Single-tenant dedicated', bn: 'একক প্রতিষ্ঠান (ডেডিকেটেড)' },
          { en: 'Heavy CapEx + OpEx staff', bn: 'উচ্চ মূলধনী খরচ (CapEx)' },
          { en: 'Defense, banking vaults, health records', bn: 'প্রতিরক্ষা, ব্যাংক ভল্ট, স্বাস্থ্য' },
        ],
        [
          { en: 'Hybrid Cloud', bn: 'হাইব্রিড ক্লাউড' },
          { en: 'Mixed public & private', bn: 'মিশ্র (পাবলিক ও প্রাইভেট)' },
          { en: 'CapEx baseline + OpEx bursts', bn: 'মিশ্র খরচ কাঠামো' },
          { en: 'Cloud bursting, phased migration', bn: 'ক্লাউড বার্স্টিং, ধাপে ধাপে মাইগ্রেশন' },
        ],
        [
          { en: 'Multi-Cloud', bn: 'মাল্টি-ক্লাউড' },
          { en: 'Multiple public providers', bn: 'একাধিক পাবলিক কোম্পানি' },
          { en: 'OpEx + Egress transfer fees', bn: 'OpEx এবং ডেটা ইগ্রেস ফি' },
          { en: 'Disaster recovery, vendor independence', bn: 'দুর্যোগ পুনরুদ্ধার, বিকল্প স্বাধীনতা' },
        ],
      ],
      caption: {
        en: 'Comparative assessment of the 4 primary cloud deployment architectures.',
        bn: '৪ টি প্রধান ক্লাউড ডেপ্লয়মেন্ট আর্কিটেকচারের তুলনামূলক মূল্যায়ন ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Audit Regulatory and Data Residency Mandates', bn: 'ধাপ ১ — সরকারি আইন ও ডেটা সংরক্ষণের বাধ্যবাধকতা নিরীক্ষা' },
          text: {
            en: 'Identify whether specific customer datasets are legally restricted to on-premises vaults or single-tenant hardware.',
            bn: 'কোনো গ্রাহকের ডেটা নিজস্ব সার্ভার বা ডেডিকেটেড হার্ডওয়্যারে রাখা বাধ্যতামূলক কিনা তা পরীক্ষা করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Establish High-Speed Hybrid Connectivity', bn: 'ধাপ ২ — দ্রুতগতির হাইব্রিড নেটওয়ার্ক সংযোগ স্থাপন' },
          text: {
            en: 'Provision redundant AWS Direct Connect or Azure ExpressRoute dedicated fiber circuits to connect on-premises data centers to cloud VPCs.',
            bn: 'ক্লাউডের সাথে নিজস্ব ডেটা সেন্টারের নিরবচ্ছিন্ন সংযোগ নিশ্চিত করতে ডিরেক্ট কানেক্ট লাইন স্থাপন করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Implement Cloud Bursting for Stateless Tiers', bn: 'ধাপ ৩ — স্টেটলেস সার্ভারের জন্য ক্লাউড বার্স্টিং প্রয়োগ' },
          text: {
            en: 'Configure front-end web and worker instances to scale dynamically into public cloud when on-premises hardware capacity is exceeded.',
            bn: 'অন-প্রিমিসেস সার্ভারের ধারণক্ষমতা শেষ হলে অতিরিক্ত ট্রাফিক সামলাতে পাবলিক ক্লাউডে অটো-স্কেলিং চালু করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Architect Against Multi-Cloud Data Gravity', bn: 'ধাপ ৪ — মাল্টি-ক্লাউড ডেটা স্থানান্তরের খরচ নিয়ন্ত্রণ' },
          text: {
            en: 'Locate analytical processing alongside storage to prevent heavy inter-cloud data egress fees when using multiple providers.',
            bn: 'অতিরিক্ত নেটওয়ার্ক ফি এড়াতে যে ক্লাউডে ডেটা আছে সেখানেই প্রসেসিং সম্পন্ন করার ব্যবস্থা রাখুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'dep-ex-1',
      kind: 'mcq',
      topic: 'hybrid-cloud-definition',
      question: {
        en: 'What is the defining technical characteristic of a Hybrid Cloud deployment model?',
        bn: 'হাইব্রিড ক্লাউড ডেপ্লয়মেন্ট মডেলের প্রধান প্রযুক্তিগত বৈশিষ্ট্য কী?',
      },
      options: [
        { en: 'It binds on-premises private datacenter infrastructure with public cloud resources over high-speed private connections, enabling seamless data and application sharing', bn: 'এটি দ্রুতগতির প্রাইভেট সংযোগের মাধ্যমে অন-প্রিমিসেস ডেটা সেন্টার এবং পাবলিক ক্লাউডকে যুক্ত করে সমন্বিত ডেটা ও অ্যাপ্লিকেশন ব্যবহারের সুযোগ দেয়' },
        { en: 'It requires servers to run half on gasoline and half on electricity', bn: 'এটি চালাতে সার্ভারগুলোকে অর্ধেক পেট্রোল এবং অর্ধেক বিদ্যুতে চলতে হয়' },
        { en: 'It only allows computer monitors that display green text', bn: 'এটি কেবল এমন কম্পিউটার মনিটর সমর্থন করে যা সবুজ টেক্সট দেখায়' },
        { en: 'It forces developers to write code using two keyboards at the same time', bn: 'এটি ডেভেলপারদের একসাথে দুটি কিবোর্ডে কোড টাইপ করতে বাধ্য করে' },
      ],
      answer: 0,
      hint: { en: 'Binds on-premises infrastructure with public cloud resources.', bn: 'অন-প্রিমিসেস পরিকাঠামোর সাথে পাবলিক ক্লাউড রিসোর্স যুক্ত করে।' },
      explanation: {
        en: 'Hybrid cloud combines private and public clouds with technology allowing data and applications to be shared across them.',
        bn: 'হাইব্রিড ক্লাউড অন-প্রিমিসেস এবং পাবলিক ক্লাউডের সমন্বয় ঘটিয়ে উভয়ের মধ্যে তথ্য বিনিময়ের সুযোগ সৃষ্টি করে।',
      },
    },
    {
      id: 'dep-ex-2',
      kind: 'mcq',
      topic: 'cloud-bursting-benefit',
      question: {
        en: 'How does Cloud Bursting benefit an enterprise with fixed on-premises datacenters during sudden marketing campaigns?',
        bn: 'আকস্মিক মার্কেটিং প্রচারণার সময় নির্দিষ্ট ধারণক্ষমতার ডেটা সেন্টার থাকা প্রতিষ্ঠানের জন্য ক্লাউড বার্স্টিং কীভাবে সহায়ক হয়?',
      },
      options: [
        { en: 'Baseline traffic runs on cost-effective private servers, while surge demand automatically overflows into elastic public cloud instances without service interruption', bn: 'নিয়মিত ট্রাফিক নিজস্ব সার্ভারে সাশ্রয়ীভাবে চলে এবং অতিরিক্ত ট্রাফিক নিজে থেকেই পাবলিক ক্লাউডে ছড়িয়ে পড়ে নিরবচ্ছিন্ন সেবা দেয়' },
        { en: 'It creates physical fireworks inside the corporate headquarters', bn: 'এটি করপোরেট হেডকোয়ার্টারের ভেতরে শারীরিক আতশবাজি ফুটিয়ে আনন্দ দেয়' },
        { en: 'It makes all employee cell phones ring simultaneously', bn: 'এটি সমস্ত কর্মীর মোবাইল ফোন একসাথে বাজিয়ে সতর্ক করে দেয়' },
        { en: 'It deletes customer shopping carts to artificially reduce server load', bn: 'এটি সার্ভারের চাপ কমাতে গ্রাহকদের শপিং কার্ট মুছে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'Baseline on private servers; surge demand overflows into public cloud.', bn: 'স্বাভাবিক কাজ নিজস্ব সার্ভারে; বাড়তি চাপ পাবলিক ক্লাউডে।' },
      explanation: {
        en: 'Cloud bursting offloads peak traffic to public cloud compute without requiring permanent on-premises hardware purchases.',
        bn: 'ক্লাউড বার্স্টিং অতিরিক্ত হার্ডওয়্যার না কিনেও পিক ট্রাফিককে পাবলিক ক্লাউডে সামলে নেওয়ার সুযোগ দেয়।',
      },
    },
    {
      id: 'dep-ex-3',
      kind: 'predict',
      topic: 'public-cloud-requests-benchmark',
      question: {
        en: 'In our benchmark of 3200 transactions, how many customer web requests were handled elastically by the Public Cloud (e.g. 1800 )?',
        bn: '৩২০০টি ট্রানজ্যাকশনের বেঞ্চমার্কে পাবলিক ক্লাউড দ্বারা কতগুলো গ্রাহক ওয়েব রিকোয়েস্ট পরিচালিত হয়েছিল (যেমন 1800 )?',
      },
      answer: '1800',
      accept: ['1800', '1800 requests', 'eighteen hundred'],
      hint: { en: '1800', bn: '1800' },
      explanation: {
        en: '1800 public web transactions scaled elastically on public cloud infrastructure in 1.2 ms.',
        bn: '১৮০০টি পাবলিক ওয়েব ট্রানজ্যাকশন পাবলিক ক্লাউড অবকাঠামোয় মাত্র ১.২ ms সময়ে সফলভাবে সম্পন্ন হয়েছিল।',
      },
    },
    {
      id: 'dep-ex-4',
      kind: 'predict',
      topic: 'hybrid-direct-connect-latency',
      question: {
        en: 'In our benchmark, how many milliseconds did hybrid queries take to cross dedicated private lines between public cloud and on-premises vaults (e.g. 4.5 ms, answer 5 )?',
        bn: 'আমাদের বেঞ্চমার্কে পাবলিক ক্লাউড ও অন-প্রিমিসেস ভল্টের মধ্যকার প্রাইভেট লাইনে হাইব্রিড কুয়েরি কত মিলি-সেকেন্ড সময় নিয়েছিল (যেমন 4.5 ms, উত্তর 5 )?',
      },
      answer: '5',
      accept: ['5', '5 ms', 'five'],
      hint: { en: '5', bn: '5' },
      explanation: {
        en: 'Hybrid queries crossed dedicated AWS Direct Connect fiber circuits in 4.5 ms (rounded to 5 ms).',
        bn: 'হাইব্রিড কুয়েরি ডেডিকেটেড ডিরেক্ট কানেক্ট ফাইবারের ওপর দিয়ে মাত্র ৪.৫ ms (প্রায় ৫ ms) সময়ে সম্পন্ন হয়েছিল।',
      },
    },
  ],
  quiz: {
    id: 'stamps-and-the-stamp-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'dep-qz-1',
        kind: 'mcq',
        topic: 'multi-cloud-motivation',
        question: {
          en: 'Why do large enterprise organizations adopt Multi-Cloud architectures despite the added networking complexity?',
          bn: 'অতিরিক্ত নেটওয়ার্ক জটিলতা সত্ত্বেও বৃহৎ প্রতিষ্ঠানগুলো কেন মাল্টি-ক্লাউড আর্কিটেকচার গ্রহণ করে?',
        },
        options: [
          { en: 'To prevent vendor lock-in, satisfy disaster resilience across independent cloud operators, and leverage specialized proprietary capabilities from each vendor', bn: 'একক কোম্পানির ওপর নির্ভরশীলতা এড়াতে, সম্পূর্ণ স্বাধীন ভিন্ন কোম্পানির সাহায্যে দুর্যোগ প্রতিরোধ করতে এবং বিশেষায়িত সেবার সুবিধা নিতে' },
          { en: 'Because cloud providers only allow one user account per company', bn: 'কারণ ক্লাউড প্রদানকারীরা একটি কোম্পানির জন্য কেবল একটিমাত্র অ্যাকাউন্ট ব্যবহারের অনুমতি দেয়' },
          { en: 'To make computer code run on microwave ovens', bn: 'মাইক্রোওয়েভ ওভেনে যাতে কম্পিউটারের কোড চালানো যায় সেজন্য' },
          { en: 'Because multi-cloud guarantees that software never requires testing', bn: 'কারণ মাল্টি-ক্লাউড ব্যবহার করলে সফটওয়্যারে কখনো কোনো পরীক্ষার প্রয়োজন হয় না' },
        ],
        answer: 0,
        hint: { en: 'Prevents vendor lock-in and improves disaster resilience.', bn: 'একক নির্ভরতা রোধ করে এবং দুর্যোগ সহনশীলতা বৃদ্ধি করে।' },
        explanation: {
          en: 'Multi-cloud provides vendor independence, regulatory compliance risk mitigation, and access to best-of-breed platform features.',
          bn: 'মাল্টি-ক্লাউড একক প্রতিষ্ঠানের দাসত্ব থেকে মুক্তি দেয় এবং বিভিন্ন ক্লাউডের সেরা ফিচারগুলোকে একসাথে ব্যবহারের সুবিধা নিশ্চিত করে।',
        },
      },
      {
        id: 'dep-qz-2',
        kind: 'mcq',
        topic: 'private-cloud-tradeoff',
        question: {
          en: 'What is the primary drawback of building an internal on-premises Private Cloud compared to using a Public Cloud?',
          bn: 'পাবলিক ক্লাউড ব্যবহারের তুলনায় নিজস্ব অন-প্রিমিসেস প্রাইভেট ক্লাউড তৈরির প্রধান অসুবিধা কোনটি?',
        },
        options: [
          { en: 'High upfront capital expenditure (CapEx) for physical server hardware, continuous facility maintenance, and the requirement for specialized on-site engineering staff', bn: 'শারীরিক সার্ভার হার্ডওয়্যার কেনার উচ্চ মূলধনী খরচ, সার্বক্ষণিক ডেটা সেন্টার দেখাশোনা এবং দক্ষ প্রকৌশলী দলের সার্বক্ষণিক প্রয়োজনীয়তা' },
          { en: 'Private cloud servers can only store text files smaller than five kilobytes', bn: 'প্রাইভেট ক্লাউড সার্ভার কেবল পাঁচ কিলোবাইটের চেয়ে ছোট টেক্সট ফাইল সংরক্ষণ করতে পারে' },
          { en: 'Private cloud hardware becomes physically invisible when power is turned on', bn: 'বিদ্যুৎ চালু করলে প্রাইভেট ক্লাউড হার্ডওয়্যার শারীরিকভাবে অদৃশ্য হয়ে যায়' },
          { en: 'Private clouds do not support the English alphabet', bn: 'প্রাইভেট ক্লাউড ইংরেজি বর্ণমালা সমর্থন করে না' },
        ],
        answer: 0,
        hint: { en: 'High upfront CapEx and ongoing facility maintenance.', bn: 'উচ্চ মূলধনী খরচ এবং সার্বক্ষণিক পরিকাঠামো দেখাশোনার ঝামেলা।' },
        explanation: {
          en: 'Private clouds require substantial initial investment, hardware lifecycle management, and dedicated engineering resources.',
          bn: 'প্রাইভেট ক্লাউডে প্রচুর এককালীন মূলধন, ডেটা সেন্টার কুলিং এবং হার্ডওয়্যার বদলানোর সার্বক্ষণিক শ্রম প্রয়োজন হয়।',
        },
      },
      {
        id: 'dep-qz-3',
        kind: 'mcq',
        topic: 'direct-connect-security-benefit',
        question: {
          en: 'Why do financial institutions use dedicated private circuits (like AWS Direct Connect) for hybrid cloud connectivity rather than public internet VPNs?',
          bn: 'আর্থিক প্রতিষ্ঠানগুলো পাবলিক ইন্টারনেটের ভিপিএনের বদলে কেন ডেডিকেটেড প্রাইভেট সার্কিট (যেমন AWS Direct Connect) ব্যবহার করে?',
        },
        options: [
          { en: 'Dedicated circuits bypass the public internet entirely, delivering deterministic low latency, massive throughput, and private cryptographic isolation', bn: 'ডেডিকেটেড লাইন পাবলিক ইন্টারনেটকে সম্পূর্ণ বাইপাস করে অপরিবর্তনীয় দ্রুত গতি, বিশাল ব্যান্ডউইথ এবং নিখুঁত প্রাইভেট নিরাপত্তা নিশ্চিত করে' },
          { en: 'Direct Connect cables are made of pure solid silver metal', bn: 'ডিরেক্ট কানেক্ট ক্যাবলগুলো খাঁটি রুপা দিয়ে তৈরি করা হয়' },
          { en: 'Direct Connect makes all corporate bank accounts earn double interest', bn: 'ডিরেক্ট কানেক্ট কোম্পানির ব্যাংক অ্যাকাউন্টের সুদের হার দ্বিগুণ করে দেয়' },
          { en: 'Public internet VPNs only work when it rains outside', bn: 'পাবলিক ইন্টারনেট ভিপিএন কেবল বাইরে বৃষ্টি হলেই কাজ করতে পারে' },
        ],
        answer: 0,
        hint: { en: 'Bypasses the public internet with deterministic latency and high throughput.', bn: 'পাবলিক ইন্টারনেট বাইপাস করে নির্দিষ্ট লেটেন্সি ও উচ্চ ব্যান্ডউইথ দেয়।' },
        explanation: {
          en: 'Dedicated circuits provide consistent network performance and private physical routing away from the congested public internet.',
          bn: 'ডেডিকেটেড প্রাইভেট লাইন ওপেন ইন্টারনেটের যানজট ও ঝুঁকি এড়িয়ে নিশ্চিত নির্ভরযোগ্য সংযোগ প্রদান করে।',
        },
      },
      {
        id: 'dep-qz-4',
        kind: 'predict',
        topic: 'private-cloud-records-benchmark',
        question: {
          en: 'In our benchmark, how many mainframe transactions were isolated inside the dedicated Private Cloud (e.g. 400 )?',
          bn: 'আমাদের বেঞ্চমার্কে ডেডিকেটেড প্রাইভেট ক্লাউডের ভেতরে কতগুলো মেইনফ্রেম লেনদেন বিচ্ছিন্নভাবে সংরক্ষিত ছিল (যেমন 400 )?',
        },
        answer: '400',
        accept: ['400', '400 transactions', 'four hundred'],
        hint: { en: '400', bn: '400' },
        explanation: {
          en: '400 sensitive mainframe records were executed strictly inside the dedicated single-tenant private cloud.',
          bn: '৪০০টি অত্যন্ত সংবেদনশীল মেইনফ্রেম লেনদেন একক নিয়ন্ত্রণের অধীনে ডেডিকেটেড প্রাইভেট ক্লাউডে সম্পন্ন হয়েছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'ladders-and-the-ladder',
    title: {
      en: 'Cloud Elasticity, Scalability, and High Availability (HA)',
      bn: 'ক্লাউড ইলাস্টিসিটি, স্কেলেবিলিটি ও উচ্চ প্রাপ্যতা (HA)',
    },
  },
};
