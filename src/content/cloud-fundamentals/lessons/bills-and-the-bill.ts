import type { Lesson } from '../../../lib/types';

export const BillsAndTheBillLesson: Lesson = {
  slug: 'bills-and-the-bill',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Cloud Economics, FinOps, and Cost Optimization',
    bn: 'ক্লাউড অর্থনীতি, ফিনঅপস ও খরচ অপ্টিমাইজেশন',
  },
  summary: {
    en: 'Master cloud financial operations and FinOps cost optimization strategies. Benchmark 100 enterprise compute instances across pricing tiers. Pure on-demand billing totals 7200 dollars per month. Implementing Savings Plans and Spot pricing reduces monthly spend to 2664 dollars, saving 4536 dollars with 63 percent financial savings. Learn rightsizing, allocation tagging, and spot interruption handling.',
    bn: 'ক্লাউড ফিনান্সিয়াল অপারেশনস এবং ফিনঅপস খরচ অপ্টিমাইজেশন কৌশল আয়ত্ত করুন। বিভিন্ন মূল্য স্তরে ১০০টি এন্টারপ্রাইজ কম্পিউট ইনস্ট্যান্সের বেঞ্চমার্ক। বিশুদ্ধ অন-ডিমান্ড বিলিংয়ে প্রতি মাসে মোট ৭২০০ ডলার খরচ হয়। সেভিংস প্ল্যান এবং স্পট মূল্যের সমন্বয় মাসিক খরচ ২৬৬৪ ডলারে নামিয়ে এনে ৪৫৩৬ ডলার ও ৬৩ শতাংশ আর্থিক সাশ্রয় করে। রাইটসাইজিং, ট্যাগিং এবং স্পট ইন্টারাপশন হ্যান্ডলিং কৌশল জানুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Cloud financial operations, pricing tiers, and eliminating bill shock', bn: 'WHAT — ক্লাউড অর্থনৈতিক পরিচালনা, মূল্যের স্তরবিন্যাস এবং অপ্রত্যাশিত বিল দূরীকরণ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you migrate your applications to the cloud, the ease of provisioning virtual infrastructure can quickly lead to unexpected bill shock. Developers can launch dozens of virtual machines with a single script, leaving idle instances to consume budget. Engineering teams adopt FinOps to bring financial accountability to variable cloud spend. We combine On-Demand, Savings Plans, and Spot pricing to maximize performance while slashing monthly infrastructure invoices.',
        bn: 'ক্লাউডে আপনার অ্যাপ্লিকেশন স্থানান্তরের সময় সহজে পরিকাঠামো তৈরির সুযোগটি অসতর্ক হলে অপ্রত্যাশিত ক্লাউড বিলের কারণ হতে পারে। মাত্র একটি স্ক্রিপ্টের মাধ্যমে ডেভেলপাররা সার্ভার চালু করতে পারেন, যার ফলে অলস পড়ে থাকা ইনস্ট্যান্স বাজেট নষ্ট করে। পরিবর্তনশীল ক্লাউড খরচে আর্থিক জবাবদিহিতা নিশ্চিত করতে ইঞ্জিনিয়ারিং টিম ফিনঅপস পদ্ধতি অনুসরণ করে। আমরা অন-ডিমান্ড, সেভিংস প্ল্যান এবং স্পট মূল্যের সমন্বয় ঘটিয়ে পারফরম্যান্স অক্ষুণ্ণ রেখে মাসিক বিল উল্লেখযোগ্যভাবে কমিয়ে আনি।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'FinOps Cost Reduction Benchmark: 100 enterprise instances optimized', bn: 'ফিনঅপস খরচ কমানোর বেঞ্চমার্ক: ১০০টি এন্টারপ্রাইজ ইনস্ট্যান্স অপ্টিমাইজেশন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="FinOps pricing model comparison">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">100 Instances</text>
<text x="85" y="62" text-anchor="middle" font-size="7" fill="#475569">Enterprise Workload</text>

<rect x="30" y="80" width="110" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="95" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">50 Baseline Core</text>
<text x="85" y="107" text-anchor="middle" font-size="6" fill="#475569">Always-on 24/7 DB & API</text>

<rect x="30" y="125" width="110" height="34" rx="3" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="140" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">30 Batch Workers</text>
<text x="85" y="152" text-anchor="middle" font-size="6" fill="#475569">Fault-tolerant tasks</text>

<rect x="30" y="170" width="110" height="34" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
<text x="85" y="185" text-anchor="middle" font-size="7" font-weight="700" fill="#b45309">20 Bursty Web</text>
<text x="85" y="197" text-anchor="middle" font-size="6" fill="#475569">Dynamic peak demand</text>

<line x1="150" y1="97" x2="190" y2="70" stroke="#dc2626" stroke-width="2"/>
<polygon points="190,66 200,70 190,74" fill="#dc2626"/>

<line x1="150" y1="142" x2="190" y2="165" stroke="#16a34a" stroke-width="2"/>
<polygon points="190,161 200,165 190,169" fill="#16a34a"/>

<rect x="200" y="25" width="200" height="90" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<text x="300" y="44" text-anchor="middle" font-size="9" font-weight="800" fill="#991b1b">Unoptimized: 100% On-Demand</text>
<text x="300" y="58" text-anchor="middle" font-size="7" fill="#dc2626">100 instances @ $0.10/hour continuously</text>
<text x="300" y="74" text-anchor="middle" font-size="9" font-weight="800" fill="#b91c1c">Monthly Spend: $7200 / month</text>
<text x="300" y="88" text-anchor="middle" font-size="6" fill="#475569">Zero discounts; pays full retail for steady baseline</text>

<rect x="200" y="125" width="200" height="95" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="144" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">FinOps Optimized Portfolio</text>
<text x="300" y="158" text-anchor="middle" font-size="7" fill="#15803d">50 Savings Plan ($1008) + 30 Spot ($216) + 20 On-Demand ($1440)</text>
<text x="300" y="174" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Optimized Spend: $2664 / month</text>
<text x="300" y="190" text-anchor="middle" font-size="7" font-weight="700" fill="#15803d">Saves $4536 / month (63% Savings!)</text>

<line x1="400" y1="70" x2="440" y2="70" stroke="#dc2626" stroke-width="2"/>
<polygon points="440,66 450,70 440,74" fill="#dc2626"/>

<line x1="400" y1="172" x2="440" y2="172" stroke="#16a34a" stroke-width="2"/>
<polygon points="440,168 450,172 440,176" fill="#16a34a"/>

<rect x="450" y="25" width="170" height="90" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="44" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Pricing Breakdown</text>
<text x="535" y="60" text-anchor="middle" font-size="7" fill="#dc2626">On-Demand: 100% cost</text>
<text x="535" y="74" text-anchor="middle" font-size="7" fill="#d97706">Reserved: up to 72% off</text>
<text x="535" y="88" text-anchor="middle" font-size="7" fill="#166534">Spot: up to 90% off</text>

<rect x="450" y="125" width="170" height="95" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="144" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">FinOps Core Phases</text>
<text x="535" y="160" text-anchor="middle" font-size="7" fill="#2563eb">1. Inform (Tagging & costs)</text>
<text x="535" y="174" text-anchor="middle" font-size="7" fill="#16a34a">2. Optimize (Rightsizing)</text>
<text x="535" y="188" text-anchor="middle" font-size="7" fill="#d97706">3. Operate (Budgets & alerts)</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">On-demand provides flexibility; Savings Plans and Spot slash ongoing infrastructure spend</text>
</svg>`,
      caption: {
        en: 'FinOps cost optimization benchmark across 100 enterprise instances. An unoptimized On-Demand fleet costs 7200 dollars per month. We allocate 50 baseline instances to 3 year Savings Plans and 30 workers to Spot pricing. Retaining 20 bursty web nodes on On-Demand lowers spend to 2664 dollars, saving 4536 dollars with 63 percent savings.',
        bn: '১০০টি এন্টারপ্রাইজ ইনস্ট্যান্সে ফিনঅপস খরচ অপ্টিমাইজেশন বেঞ্চমার্ক। অন-ডিমান্ড বিলিংয়ে প্রতি মাসে ৭২০০ ডলার খরচ হয়। আমরা ৫০টি বেসলাইন ইনস্ট্যান্সে ৩ বছরের সেভিংস প্ল্যান এবং ৩০টি কর্মী সার্ভারে স্পট মূল্য বরাদ্দ করি। অন-ডিমান্ডে ২০টি ওয়েব নোড রেখে মাসিক খরচ ২৬৬৪ ডলারে নামিয়ে আনা হয়, যা ৪৫৩৬ ডলার ও ৬৩ শতাংশ খরচ সাশ্রয় করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'FinOps (Cloud Financial Operations)',
          def: {
            en: 'An evolving cloud financial management practice that enables engineering, finance, and business teams to collaborate on data-driven spending.',
            bn: 'একটি আধুনিক ক্লাউড অর্থনৈতিক ব্যবস্থাপনা কৌশল যা ইঞ্জিনিয়ার ও ফিন্যান্স দলকে ডেটা বিশ্লেষণের মাধ্যমে খরচ নিয়ন্ত্রণে সাহায্য করে।',
          },
        },
        {
          term: 'On-Demand Pricing',
          def: {
            en: 'Pay-as-you-go pricing without long-term commitments; highest per-hour rate but offers maximum flexibility for volatile workloads.',
            bn: 'কোনো দীর্ঘমেয়াদি চুক্তি ছাড়া ব্যবহৃত সময়ের ভিত্তিতে বিল; নমনীয়তা সবচেয়ে বেশি হলেও প্রতি ঘণ্টার খরচ সর্বোচ্চ।',
          },
        },
        {
          term: 'Savings Plans & Reserved Instances',
          def: {
            en: 'Commitment to a consistent compute usage for a 1-year or 3-year term in exchange for steep discounts of up to 72 percent.',
            bn: '১ বা ৩ বছরের জন্য নির্দিষ্ট পরিমাণ ক্লাউড ব্যবহারের চুক্তির বিনিময়ে সর্বোচ্চ ৭২ শতাংশ পর্যন্ত বিশেষ মূল্যছাড়ের সুবিধা।',
          },
        },
        {
          term: 'Spot Instances (Preemptible)',
          def: {
            en: 'Purchasing spare unused cloud provider datacenter capacity at up to 90 percent discounts, with a 2-minute interruption notice.',
            bn: 'ক্লাউড ডেটা সেন্টারের অবিক্রিত অতিরিক্ত ধারণক্ষমতা ৯০ শতাংশ পর্যন্ত কম মূল্যে ব্যবহার করা, যা ২ মিনিটের নোটিশে বন্ধ হতে পারে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript FinOps infrastructure portfolio and billing simulator', bn: 'HOW — টাইপস্ক্রিপ্ট ফিনঅপস পরিকাঠামো পোর্টফোলিও ও বিলিং সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how combining On-Demand, Savings Plans, and Spot instances optimizes monthly cloud spend across 100 enterprise servers, examine this runnable TypeScript simulator:',
        bn: 'অন-ডিমান্ড, সেভিংস প্ল্যান এবং স্পট ইনস্ট্যান্সের সমন্বয়ে ১০০টি সার্ভারের মাসিক খরচ কীভাবে নাটকীয়ভাবে কমানো যায় তা দেখতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'finops-cost-optimizer.ts',
      code: `interface InstanceFleet {
  totalInstances: number;
  hourlyOnDemandRatePerUnit: number;
}

interface FinOpsReport {
  unoptimizedMonthlyCost: number;
  optimizedMonthlyCost: number;
  monthlySavingsDollars: number;
  savingsPercentage: number;
  portfolioBreakdown: {
    savingsPlanInstances: number;
    savingsPlanMonthlyCost: number;
    spotInstances: number;
    spotMonthlyCost: number;
    onDemandInstances: number;
    onDemandMonthlyCost: number;
  };
}

function calculateFinOpsPortfolio(fleet: InstanceFleet): FinOpsReport {
  const hoursPerMonth = 720; // 30 days * 24 hours
  const baseRate = fleet.hourlyOnDemandRatePerUnit; // $0.10/hour

  // Unoptimized: All 100 instances on On-Demand (100 * 0.10 * 720) = $7200
  const unoptimizedCost = fleet.totalInstances * baseRate * hoursPerMonth;

  // Optimized FinOps Allocation:
  // 50 Baseline instances on 3-year Savings Plan (72% discount -> $0.028/hr)
  const spInstances = 50;
  const spRate = baseRate * 0.28;
  const spCost = spInstances * spRate * hoursPerMonth; // $1008

  // 30 Batch processing instances on Spot (90% discount -> $0.01/hr)
  const spotInstances = 30;
  const spotRate = baseRate * 0.10;
  const spotCost = spotInstances * spotRate * hoursPerMonth; // $216

  // 20 Bursty web instances retained on On-Demand ($0.10/hr)
  const odInstances = 20;
  const odCost = odInstances * baseRate * hoursPerMonth; // $1440

  const optimizedCost = spCost + spotCost + odCost; // $2664
  const savingsDollars = unoptimizedCost - optimizedCost; // $4536
  const savingsPct = (savingsDollars / unoptimizedCost) * 100; // 63%

  return {
    unoptimizedMonthlyCost: unoptimizedCost,
    optimizedMonthlyCost: optimizedCost,
    monthlySavingsDollars: savingsDollars,
    savingsPercentage: Math.round(savingsPct),
    portfolioBreakdown: {
      savingsPlanInstances: spInstances,
      savingsPlanMonthlyCost: spCost,
      spotInstances: spotInstances,
      spotMonthlyCost: spotCost,
      onDemandInstances: odInstances,
      onDemandMonthlyCost: odCost,
    },
  };
}

const fleet: InstanceFleet = {
  totalInstances: 100,
  hourlyOnDemandRatePerUnit: 0.10,
};

const report = calculateFinOpsPortfolio(fleet);

console.log(\`Unoptimized On-Demand Monthly Cost: $\${report.unoptimizedMonthlyCost}\`);
// Unoptimized On-Demand Monthly Cost: $7200
console.log(\`FinOps Optimized Portfolio Monthly Cost: $\${report.optimizedMonthlyCost}\`);
// FinOps Optimized Portfolio Monthly Cost: $2664
console.log(\`Net Monthly Savings: $\${report.monthlySavingsDollars}\`);
// Net Monthly Savings: $4536
console.log(\`Financial Savings Percentage: \${report.savingsPercentage}%\`);
// Financial Savings Percentage: 63%
console.log(\`Savings Plans Instances (50 units): $\${report.portfolioBreakdown.savingsPlanMonthlyCost}\`);
// Savings Plans Instances (50 units): $1008
console.log(\`Spot Fleet Instances (30 units): $\${report.portfolioBreakdown.spotMonthlyCost}\`);
// Spot Fleet Instances (30 units): $216
console.log(\`On-Demand Dynamic Instances (20 units): $\${report.portfolioBreakdown.onDemandMonthlyCost}\`);
// On-Demand Dynamic Instances (20 units): $1440`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Spot Interruption Notice and Graceful Draining', bn: 'স্পট ইন্টারাপশন নোটিশ এবং সেফ ড্রেনিং' },
      text: {
        en: 'Cloud providers deliver a 2-minute warning via Amazon EventBridge and instance metadata before terminating a reclaimed Spot instance. Resilient applications listen for this termination notification, immediately deregister from load balancers, save in-memory task checkpoints to Amazon S3 or DynamoDB, and gracefully shut down active connections before the hardware is repossessed.',
        bn: 'ক্লাউড কোম্পানিগুলো একটি স্পট ইনস্ট্যান্স ফেরত নেওয়ার আগে ইনস্ট্যান্স মেটাডাটা ও ইভেন্টব্রিজের মাধ্যমে ২ মিনিটের নোটিশ পাঠায়। স্থিতিশীল অ্যাপ্লিকেশন এই সংকেত শোনামাত্র লোড ব্যালেন্সার থেকে সংযোগ সরিয়ে নেয়, মেমরির চলমান কাজ দ্রুত এস৩ বা ডেটাবেজে সংরক্ষণ করে এবং হার্ডওয়্যার বন্ধ হওয়ার আগেই সুষ্ঠুভাবে প্রসেস সমাপ্ত করে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'On-Demand vs Savings Plans vs Spot Pricing', bn: 'অন-ডিমান্ড বনাম সেভিংস প্ল্যান বনাম স্পট মূল্য' },
      left: {
        title: { en: 'On-Demand Pricing', bn: 'অন-ডিমান্ড মূল্য' },
        points: [
          { en: 'Maximum operational flexibility; instances can be launched and destroyed anytime without commitment', bn: 'সর্বোচ্চ পরিচালন নমনীয়তা; কোনো বাধ্যবাধকতা ছাড়াই যেকোনো সময় সার্ভার চালু বা বন্ধ করা যায়' },
          { en: 'Billed strictly by the second with zero penalty for termination', bn: 'কোনো জরিমানা ছাড়াই নিখুঁত সেকেন্ডের হিসেবে বিল পরিশোধ করা হয়' },
          { en: 'Highest hourly unit cost; paying on-demand for steady baseline servers wastes significant budget', bn: 'প্রতি ঘণ্টার একক খরচ সর্বোচ্চ; স্থায়ী সার্ভারে অন-ডিমান্ড বিল দিলে বিপুল অর্থের অপচয় হয়' },
          { en: 'Best suited for short-lived development experiments, testing pipelines, and unpredictable traffic surges', bn: 'টেস্টিং পরিবেশ, নতুন প্রজেক্টের পরীক্ষা এবং আকস্মিক ট্রাফিকের জন্য সর্বোত্তম' },
        ],
      },
      right: {
        title: { en: 'Savings Plans & Spot Instances', bn: 'সেভিংস প্ল্যান ও স্পট ইনস্ট্যান্স' },
        points: [
          { en: 'Savings Plans offer up to 72% discounts in exchange for 1-year or 3-year hourly usage commitments', bn: '১ বা ৩ বছরের ব্যবহারের প্রতিশ্রুতি দিয়ে সেভিংস প্ল্যানে সর্বোচ্চ ৭২% পর্যন্ত খরচ কমানো যায়' },
          { en: 'Spot instances slash hourly costs by up to 90% by tapping unused provider datacenter capacity', bn: 'ডেটা সেন্টারের অতিরিক্ত অবিক্রিত ক্ষমতা কাজে লাগিয়ে স্পটে সর্বোচ্চ ৯০% পর্যন্ত সাশ্রয় সম্ভব' },
          { en: 'Spot requires fault-tolerant stateless architectures capable of handling 2-minute termination notices', bn: 'স্পট ব্যবহারের জন্য এমন স্টেটলেস কোড প্রয়োজন যা ২ মিনিটের নোটিশে কাজ গুছিয়ে নিতে পারে' },
          { en: 'Ideal for predictable core database baselines (Savings Plans) and heavy batch processing (Spot)', bn: 'মূল ডেটাবেজের জন্য সেভিংস প্ল্যান এবং ভিডিও রেন্ডারিং বা ব্যাচ প্রসেসিংয়ের জন্য স্পট সেরা' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Pricing Model', bn: 'মূল্য নির্ধারণ মডেল' },
        { en: 'Discount Level', bn: 'মূল্যছাড়ের মাত্রা' },
        { en: 'Commitment Required', bn: 'চুক্তির শর্ত' },
        { en: 'Workload Suitability', bn: 'উপযুক্ত কাজের ধরন' },
      ],
      rows: [
        [
          { en: 'On-Demand', bn: 'অন-ডিমান্ড' },
          { en: '0% (Base retail rate)', bn: '০% (খুচরা রেট)' },
          { en: 'None (Per-second)', bn: 'কোনো চুক্তি নেই' },
          { en: 'Unpredictable, dev, test', bn: 'অপ্রত্যাশিত ট্রাফিক, টেস্টিং' },
        ],
        [
          { en: 'Savings Plans', bn: 'সেভিংস প্ল্যান' },
          { en: 'Up to 72% discount', bn: '৭২% পর্যন্ত সাশ্রয়' },
          { en: '1 or 3 year commitment', bn: '১ বা ৩ বছরের প্রতিশ্রুতি' },
          { en: 'Steady-state core workloads', bn: 'সার্বক্ষণিক চালু মূল ডেটাবেজ' },
        ],
        [
          { en: 'Spot Instances', bn: 'স্পট ইনস্ট্যান্স' },
          { en: 'Up to 90% discount', bn: '৯০% পর্যন্ত সাশ্রয়' },
          { en: 'None (Subject to reclaim)', bn: 'যে কোনো সময় রিক্লেইম' },
          { en: 'Fault-tolerant batch jobs, CI/CD', bn: 'ব্যাচ কাজ, সিআই/সিডি পাইপলাইন' },
        ],
        [
          { en: 'Dedicated Hosts', bn: 'ডেডিকেটেড হোস্ট' },
          { en: 'Varies by configuration', bn: 'কনফিগারেশন ভেদে ভিন্ন' },
          { en: 'Physical socket reservation', bn: 'শারীরিক সকেট বরাদ্দ' },
          { en: 'BYOL licensing compliance', bn: 'নিজস্ব লাইসেন্স বা আইনগত শর্ত' },
        ],
      ],
      caption: {
        en: 'Comparative assessment of major cloud compute pricing models and discount mechanisms.',
        bn: 'প্রধান ক্লাউড কম্পিউট মূল্য মডেল এবং মূল্যছাড়ের সুযোগের তুলনামূলক ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Mandate Comprehensive Cost Allocation Tags', bn: 'ধাপ ১ — বাধ্যতামূলক খরচ বরাদ্দ ট্যাগ প্রয়োগ' },
          text: {
            en: 'Enforce tags (Owner, Environment, CostCenter, Application) across all resources using organizational policies.',
            bn: 'কোন টিম কোন সার্ভার ব্যবহার করছে তা ট্র্যাকিং করতে প্রতিটি রিসোর্সে বাধ্যতামূলক ট্যাগ যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Identify and Rightsize Idle Compute Instances', bn: 'ধাপ ২ — অলস সার্ভার শনাক্ত ও আকার সমন্বয়' },
          text: {
            en: 'Review CloudWatch metrics to locate instances running below 10 percent CPU and downsize them to appropriate instance families.',
            bn: '১০ শতাংশের কম ব্যবহৃত হওয়া অতিরিক্ত বড় সার্ভারগুলোকে ছোট সাইজের ইনস্ট্যান্সে পরিবর্তন করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Purchase Compute Savings Plans for Steady Baseline', bn: 'ধাপ ৩ — স্থায়ী কাজের জন্য সেভিংস প্ল্যান ক্রয়' },
          text: {
            en: 'Commit to 1-year or 3-year Savings Plans covering continuous baseline compute usage to lock in up to 72 percent discounts.',
            bn: 'সার্বক্ষণিক চলা কোর সার্ভারগুলোর জন্য সেভিংস প্ল্যান গ্রহণ করে ৭২ শতাংশ পর্যন্ত খরচ কমিয়ে নিন।',
          },
        },
        {
          title: { en: 'Step 4 — Architect Batch Workers to Run on Spot Fleets', bn: 'ধাপ ৪ — ব্যাচ কাজের জন্য স্পট ফ্লিট কনফিগার' },
          text: {
            en: 'Deploy stateless containers, video processors, and CI/CD agents across diversified Spot instances for 90 percent savings.',
            bn: 'ভিডিও প্রসেসিং ও টেস্টিং কাজের মতো অস্থায়ী সার্ভিসগুলোকে স্পট ইনস্ট্যান্সে চালিয়ে ৯০ শতাংশ পর্যন্ত সাশ্রয় নিশ্চিত করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'fin-ex-1',
      kind: 'mcq',
      topic: 'spot-instance-characteristic',
      question: {
        en: 'What is the defining operational characteristic of Spot Instances compared to On-Demand instances?',
        bn: 'অন-ডিমান্ড ইনস্ট্যান্সের তুলনায় স্পট ইনস্ট্যান্সের প্রধান পরিচালনগত বৈশিষ্ট্য কী?',
      },
      options: [
        { en: 'Spot instances offer massive discounts up to 90 percent off retail prices, but the cloud provider can reclaim the instance with a 2-minute notice when spare capacity is needed', bn: 'স্পট ইনস্ট্যান্স সর্বোচ্চ ৯০ শতাংশ পর্যন্ত মূল্যছাড় দেয়, কিন্তু ক্লাউড কোম্পানির অতিরিক্ত ক্ষমতার প্রয়োজন হলে ২ মিনিটের নোটিশে সার্ভারটি ফেরত নিতে পারে' },
        { en: 'Spot instances can only be powered on during solar eclipses', bn: 'স্পট ইনস্ট্যান্স কেবল সূর্যগ্রহণের সময় চালু করা সম্ভব' },
        { en: 'Spot instances require manual hand-cranking by datacenter engineers', bn: 'স্পট ইনস্ট্যান্স চালাতে ডেটা সেন্টারের কর্মীদের হাত দিয়ে হ্যান্ডেল ঘোরাতে হয়' },
        { en: 'Spot instances permanently scramble all data into encrypted hieroglyphics', bn: 'স্পট ইনস্ট্যান্স সমস্ত ডেটাকে চিরতরে দুর্বোধ্য সাংকেতিক লিপিতে রূপান্তর করে' },
      ],
      answer: 0,
      hint: { en: 'Up to 90% discount with a 2-minute interruption notice.', bn: '৯০% পর্যন্ত সাশ্রয় এবং ২ মিনিটের নোটিশে ফেরত নেওয়ার শর্ত।' },
      explanation: {
        en: 'Spot instances monetize unused datacenter capacity at extreme discounts, trading reliability for substantial cost reduction.',
        bn: 'স্পট ইনস্ট্যান্স অবিক্রিত পরিকাঠামোকে বিশাল মূল্যছাড়ে ব্যবহারের সুযোগ দেয় যা ফল্ট-টলারেন্ট কাজের জন্য অত্যন্ত সাশ্রয়ী।',
      },
    },
    {
      id: 'fin-ex-2',
      kind: 'mcq',
      topic: 'savings-plans-benefit',
      question: {
        en: 'How do Compute Savings Plans help organizations reduce infrastructure spend on steady-state production services?',
        bn: 'কম্পিউট সেভিংস প্ল্যান কীভাবে সার্বক্ষণিক চালু প্রোডাকশন সার্ভিসের খরচ উল্লেখযোগ্যভাবে কমাতে সাহায্য করে?',
      },
      options: [
        { en: 'By committing to a consistent hourly compute spend for a 1-year or 3-year term, companies receive automatic discounts of up to 72 percent across instance types', bn: '১ বা ৩ বছরের জন্য নির্দিষ্ট পরিমাণ ব্যবহারের অঙ্গীকার করে কোম্পানিগুলো বিভিন্ন ইনস্ট্যান্স জুড়ে স্বয়ংক্রিয়ভাবে ৭২ শতাংশ পর্যন্ত মূল্যছাড় পায়' },
        { en: 'Savings Plans force all employees to take mandatory unpaid vacations', bn: 'সেভিংস প্ল্যান সমস্ত কর্মীকে বাধ্যতামূলক অবৈতনিক ছুটিতে যেতে বাধ্য করে' },
        { en: 'Savings Plans make the cloud provider pay for the company office rent', bn: 'সেভিংস প্ল্যানের মাধ্যমে ক্লাউড কোম্পানি অফিসের মাসিক ভাড়া পরিশোধ করে দেয়' },
        { en: 'Savings Plans replace all computer keyboards with touchscreen tablets', bn: 'সেভিংস প্ল্যান সমস্ত কিবোর্ডকে টাচস্ক্রিন ট্যাবলেটে রূপান্তর করে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'Hourly spend commitment for 1 or 3 years earns up to 72% discount.', bn: '১ বা ৩ বছরের প্রতিশ্রুতির বিনিময়ে ৭২% পর্যন্ত সাশ্রয়।' },
      explanation: {
        en: 'Savings Plans deliver predictable baseline cost reductions without locking the architecture to a single rigid instance size.',
        bn: 'সেভিংস প্ল্যান কোনো নির্দিষ্ট সাইজে সীমাবদ্ধ না রেখেই সার্বিক কম্পিউট খরচে বিশাল ছাড় নিশ্চিত করে।',
      },
    },
    {
      id: 'fin-ex-3',
      kind: 'predict',
      topic: 'monthly-savings-benchmark-dollars',
      question: {
        en: 'In our FinOps benchmark of 100 instances, how many dollars were saved per month by combining Savings Plans and Spot pricing (e.g. 4536 )?',
        bn: '১০০টি ইনস্ট্যান্সের ফিনঅপস বেঞ্চমার্কে সেভিংস প্ল্যান ও স্পট মূল্যের সমন্বয় করে প্রতি মাসে কত ডলার সাশ্রয় হয়েছিল (যেমন 4536 )?',
      },
      answer: '4536',
      accept: ['4536', '4536 dollars', '$4536', '4,536'],
      hint: { en: '4536', bn: '4536' },
      explanation: {
        en: 'Optimizing the 100-instance fleet reduced monthly infrastructure costs from $7200 to $2664, saving $4536 every month.',
        bn: '১০০টি ইনস্ট্যান্সের বহর অপ্টিমাইজ করার ফলে মাসিক খরচ ৭২০০ ডলার থেকে কমে ২৬৬৪ ডলারে নেমে আসে এবং ৪৫৩৬ ডলার সাশ্রয় হয়।',
      },
    },
    {
      id: 'fin-ex-4',
      kind: 'predict',
      topic: 'spot-interruption-notice-minutes',
      question: {
        en: 'How many minutes of advance notice does AWS provide before reclaiming an interrupted Spot instance (e.g. 2 )?',
        bn: 'একটি স্পট ইনস্ট্যান্স বন্ধ বা প্রত্যাহার করার আগে এডাব্লিউএস কত মিনিট পূর্বে নোটিশ প্রদান করে (যেমন 2 )?',
      },
      answer: '2',
      accept: ['2', '2 minutes', 'two'],
      hint: { en: '2', bn: '2' },
      explanation: {
        en: 'Cloud providers emit a 2-minute warning notification allowing graceful connection draining before reclaiming Spot instances.',
        bn: 'স্পট ইনস্ট্যান্স প্রত্যাহার করার আগে ক্লাউড প্রদানকারীরা কাজ গুছিয়ে নেওয়ার জন্য ২ মিনিটের নোটিশ সংকেত দেয়।',
      },
    },
  ],
  quiz: {
    id: 'bills-and-the-bill-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'fin-qz-1',
        kind: 'mcq',
        topic: 'rightsizing-definition',
        question: {
          en: 'What is the FinOps practice of Rightsizing in cloud cost optimization?',
          bn: 'ক্লাউড খরচ অপ্টিমাইজেশনের ক্ষেত্রে ফিনঅপস রাইটসাইজিং (Rightsizing) পদ্ধতি বলতে কী বোঝায়?',
        },
        options: [
          { en: 'Analyzing actual performance metrics (CPU, memory, disk I/O) and adjusting instance types to match real workload needs rather than overpaying for idle capacity', bn: 'প্রকৃত ব্যবহার (সিপিইউ, মেমোরি, ডিস্ক আই/ও) বিশ্লেষণ করে অলস অতিরিক্ত ক্ষমতার জন্য অপচয় না করে কাজের সাথে সামঞ্জস্যপূর্ণ ইনস্ট্যান্স নির্বাচন করা' },
          { en: 'Physically measuring server racks using a wooden measuring tape', bn: 'কাঠের ফিতা দিয়ে মেপে ডেটা সেন্টারের সার্ভার র্যাকের দৈর্ঘ্য ও প্রস্থ যাচাই করা' },
          { en: 'Reducing computer screen font sizes so less text is displayed', bn: 'কম্পিউটার স্ক্রিনের ফন্ট ছোট করে যাতে কম লেখা দেখা যায় তা নিশ্চিত করা' },
          { en: 'Deleting half of all customer records to save disk space', bn: 'ডিস্কে জায়গা বাঁচাতে অর্ধেক গ্রাহকের তথ্য চিরতরে মুছে ফেলা' },
        ],
        answer: 0,
        hint: { en: 'Adjusting instance sizes based on real performance metrics.', bn: 'প্রকৃত ব্যবহারের তথ্যের ওপর ভিত্তি করে সঠিক সাইজের সার্ভার নির্বাচন করা।' },
        explanation: {
          en: 'Rightsizing eliminates wasted spend by aligning provisioned cloud resources directly with measured application demand.',
          bn: 'রাইটসাইজিং অতিরিক্ত বরাদ্দের অপচয় রোধ করে অ্যাপ্লিকেশনের প্রকৃত চাহিদামাফিক সঠিক ক্ষমতার সার্ভার নিশ্চিত করে।',
        },
      },
      {
        id: 'fin-qz-2',
        kind: 'mcq',
        topic: 'cost-allocation-tags-purpose',
        question: {
          en: 'Why is enforcing Cost Allocation Tags across all cloud resources foundational to successful FinOps governance?',
          bn: 'সফল ফিনঅপস সুশাসনের জন্য সমস্ত ক্লাউড রিসোর্সে কস্ট অ্যালোকেশন ট্যাগ বাধ্যতামূলক করা কেন অপরিহার্য?',
        },
        options: [
          { en: 'Tags attribute cloud expenses directly to specific business units, engineering teams, environments, and projects, creating spending transparency and accountability', bn: 'ট্যাগ প্রতিটি ক্লাউড খরচকে সুনির্দিষ্ট বিভাগ, ইঞ্জিনিয়ারিং টিম এবং প্রজেক্টের সাথে যুক্ত করে খরচের স্বচ্ছতা ও আর্থিক জবাবদিহিতা নিশ্চিত করে' },
          { en: 'Tags make physical stickers appear on server hardware', bn: 'ট্যাগ লাগালে শারীরিক সার্ভারের গায়ে নিজে থেকে স্টিকার তৈরি হয়' },
          { en: 'Tags increase the download speed of video files by ten times', bn: 'ট্যাগ ভিডিও ফাইলের ডাউনলোড গতি দশ গুণ বাড়িয়ে দেয়' },
          { en: 'Tags prevent computer cooling fans from producing noise', bn: 'ট্যাগ সার্ভার ফ্যানের শব্দ হওয়া সম্পূর্ণ বন্ধ করে দেয়' },
        ],
        answer: 0,
        hint: { en: 'Attributes expenses to specific teams, environments, and projects.', bn: 'নির্দিষ্ট টিম, পরিবেশ এবং প্রজেক্টের সাথে খরচ চিহ্নিত করে স্বচ্ছতা আনে।' },
        explanation: {
          en: 'Without tags, enterprise cloud invoices appear as an undifferentiated aggregate bill, making cost optimization impossible.',
          bn: 'ট্যাগ না থাকলে পুরো ক্লাউড বিল একটি ঢালাও খরচ হিসেবে আসে, যা কোন টিম কত খরচ করছে তা বোঝা অসম্ভব করে তোলে।',
        },
      },
      {
        id: 'fin-qz-3',
        kind: 'mcq',
        topic: 'unattached-ebs-storage-waste',
        question: {
          en: 'What hidden cloud cost occurs when a virtual compute instance is terminated without cleaning up attached block storage volumes?',
          bn: 'একটি ভার্চুয়াল সার্ভার ডিলিট করার পর যুক্ত থাকা ব্লক স্টোরেজ ভলিউম পরিষ্কার না করলে কোন গোপন খরচটি চলতে থাকে?',
        },
        options: [
          { en: 'Unattached storage volumes continue to incur full monthly provisioned gigabyte storage fees indefinitely until explicitly deleted', bn: 'সার্ভার বন্ধ হলেও বিচ্ছিন্ন স্টোরেজ ভলিউমগুলো মুছে না ফেলা পর্যন্ত প্রতি মাসে সম্পূর্ণ বরাদ্দের বিল তৈরি করতে থাকে' },
          { en: 'The cloud provider sends a security guard to inspect the office', bn: 'ক্লাউড কোম্পানি অফিস পরিদর্শনের জন্য একজন সিকিউরিটি গার্ড পাঠায়' },
          { en: 'The computer operating system forgets the company name', bn: 'কম্পিউটারের অপারেটিং সিস্টেম কোম্পানির নাম ভুলে যায়' },
          { en: 'All remaining virtual machines are automatically turned off at midnight', bn: 'বাকি সমস্ত ভার্চুয়াল মেশিন মধ্যরাতে স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যায়' },
        ],
        answer: 0,
        hint: { en: 'Unattached volumes continue incurring provisioned storage fees.', bn: 'সার্ভার না থাকলেও বিচ্ছিন্ন স্টোরেজের বিল অনির্দিষ্টকাল চলতে থাকে।' },
        explanation: {
          en: 'Provisioned storage is billed continuously regardless of whether an active virtual machine is currently attached to it.',
          bn: 'স্টোরেজ ভলিউম কোনো সার্ভারে যুক্ত থাকুক বা না থাকুক, বরাদ্দকৃত মেমরির জন্য সার্বক্ষণিক বিল হতে থাকে।',
        },
      },
      {
        id: 'fin-qz-4',
        kind: 'predict',
        topic: 'optimized-finops-monthly-cost',
        question: {
          en: 'In our benchmark, what was the total monthly cloud bill in dollars for the optimized FinOps architecture (e.g. 2664 )?',
          bn: 'আমাদের বেঞ্চমার্কে অপ্টিমাইজড ফিনঅপস আর্কিটেকচারে প্রতি মাসে মোট কত ডলার ক্লাউড বিল হয়েছিল (যেমন 2664 )?',
        },
        answer: '2664',
        accept: ['2664', '2664 dollars', '$2664', '2,664'],
        hint: { en: '2664', bn: '2664' },
        explanation: {
          en: 'The optimized portfolio of Savings Plans, Spot instances, and On-Demand nodes brought total monthly spend down to $2664.',
          bn: 'সেভিংস প্ল্যান, স্পট এবং অন-ডিমান্ডের সমন্বয়ে অপ্টিমাইজড আর্কিটেকচার মোট মাসিক বিল ২৬৬৪ ডলারে নামিয়ে এনেছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'latches-and-the-latch',
    title: {
      en: 'Cloud Security Fundamentals and the Shared Responsibility Model',
      bn: 'ক্লাউড নিরাপত্তা ও যৌথ দায়িত্ব মডেল',
    },
  },
};
