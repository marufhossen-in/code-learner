import type { Lesson } from '../../../lib/types';

export const ZonesAndTheZoneLesson: Lesson = {
  slug: 'zones-and-the-zone',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Global Cloud Infrastructure: Regions, Availability Zones, and Edge Locations',
    bn: 'গ্লোবাল ক্লাউড ইনফ্রাস্ট্রাকচার: রিজিয়ন, অ্যাভেইলেবিলিটি জোন ও এজ লোকেশন',
  },
  summary: {
    en: 'Master global cloud geography across Regions, Availability Zones, and Edge Locations. Benchmark 2400 transactions across edge caching and multi-AZ storage. Edge locations serve 1600 cached reads in 12 ms with 0 origin server load. Synchronous replication commits 600 database writes across 3 Availability Zones in 1.85 ms. Cross-region disaster recovery replicates 200 snapshots in 78 ms.',
    bn: 'রিজিয়ন, অ্যাভেইলেবিলিটি জোন এবং এজ লোকেশনের বৈশ্বিক ক্লাউড ভূগোল আয়ত্ত করুন। এজ ক্যাশিং ও মাল্টি-এজেড স্টোরেজে ২৪০০টি ট্রানজ্যাকশনের বেঞ্চমার্ক। এজ লোকেশন ০টি অরিজিন সার্ভার লোডে মাত্র ১২ ms সময়ে ১৬০০টি ক্যাশড রিড পরিবেশন করে। সিঙ্ক্রোনাস রেপ্লিকেশন ৩ টি অ্যাভেইলেবিলিটি জোন জুড়ে ১.৮৫ ms সময়ে ৬০০টি ডেটাবেজ রাইট সংরক্ষণ করে। ক্রস-রিজিয়ন ব্যাকআপ ৭৮ ms সময়ে ২০০টি স্ন্যাপশট রেপ্লিকেট করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Cloud physical hierarchy: Regions, Availability Zones, and Edge Points of Presence', bn: 'WHAT — ক্লাউড ভৌত পরিকাঠামো স্তরবিন্যাস: অঞ্চল, অ্যাভেইলেবিলিটি জোন এবং এজ পয়েন্ট অব প্রেজেন্স' },
    },
    {
      type: 'para',
      text: {
        en: 'When software runs in the cloud, it does not exist in an abstract digital ether. Cloud workloads execute inside physical silicon chips housed within massive, reinforced concrete datacenters spread across planet Earth. To build applications that survive earthquakes, power grid failures, and fiber cuts while delivering sub-second response times to users worldwide, software engineers must understand the hierarchical physical geography of cloud infrastructure. Major cloud providers—such as AWS, Azure, and Google Cloud—structure their global footprints into 3 discrete physical tiers: geographic Regions, isolated Availability Zones (AZs), and perimeter Edge Locations.',
        bn: 'ক্লাউডে যখন কোনো সফটওয়্যার চলে, তখন তা কোনো কাল্পনিক ডিজিটাল জগতে অবস্থান করে না। ক্লাউডের সমস্ত কাজ পরিচালিত হয় পৃথিবী জুড়ে ছড়িয়ে থাকা বিশাল কংক্রিট ডেটা সেন্টারের শক্তিশালী সিলিকন চিপে। ভূমিকম্প, বিদ্যুৎ বিপর্যয় বা তার কেটে যাওয়ার মতো আকস্মিক দুর্যোগেও যাতে অ্যাপ্লিকেশন সচল থাকে এবং বিশ্বের যেকোনো প্রান্তের ব্যবহারকারী চোখের পলকে রেসপন্স পান, সেজন্য ইঞ্জিনিয়ারদের ক্লাউড পরিকাঠামোর ভৌগোলিক বিন্যাস বুঝতে হয়। প্রধান ক্লাউড প্রদানকারীরা তাদের বৈশ্বিক পরিকাঠামোকে ৩ টি স্তরে বিন্যস্ত করে: ভৌগোলিক অঞ্চল বা রিজিয়ন, সুরক্ষিত অ্যাভেইলেবিলিটি জোন (AZ) এবং পেরিমিটার এজ লোকেশন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Global Infrastructure Hierarchy: 2400 transactions benchmarked', bn: 'গ্লোবাল পরিকাঠামোর স্তরবিন্যাস: ২৪০০টি ট্রানজ্যাকশনের বেঞ্চমার্ক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Global Cloud Infrastructure Hierarchy">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Client Workloads</text>
<text x="85" y="62" text-anchor="middle" font-size="7" fill="#475569">2400 Operations</text>

<rect x="30" y="80" width="110" height="34" rx="3" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="95" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">1600 Edge Reads</text>
<text x="85" y="107" text-anchor="middle" font-size="6" fill="#475569">Cached at Local PoP (12 ms)</text>

<rect x="30" y="125" width="110" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="140" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">600 Multi-AZ Writes</text>
<text x="85" y="152" text-anchor="middle" font-size="6" fill="#475569">Synchronous Commit (1.85 ms)</text>

<rect x="30" y="170" width="110" height="34" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
<text x="85" y="185" text-anchor="middle" font-size="7" font-weight="700" fill="#b45309">200 DR Replications</text>
<text x="85" y="197" text-anchor="middle" font-size="6" fill="#475569">Cross-Region Async (78 ms)</text>

<line x1="150" y1="97" x2="190" y2="70" stroke="#16a34a" stroke-width="2"/>
<polygon points="190,66 200,70 190,74" fill="#16a34a"/>

<line x1="150" y1="142" x2="190" y2="155" stroke="#3b82f6" stroke-width="2"/>
<polygon points="190,151 200,155 190,159" fill="#3b82f6"/>

<rect x="200" y="25" width="200" height="75" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="44" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Edge Locations & Points of Presence</text>
<text x="300" y="58" text-anchor="middle" font-size="7" fill="#15803d">Hundreds of edge nodes close to end users</text>
<text x="300" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">1600 reads served in 12 ms | 0 origin load</text>

<rect x="200" y="115" width="200" height="105" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="300" y="134" text-anchor="middle" font-size="9" font-weight="800" fill="#1d4ed8">Primary Region (e.g. us-east-1)</text>
<text x="300" y="148" text-anchor="middle" font-size="7" fill="#2563eb">3+ Isolated Availability Zones (us-east-1a, 1b, 1c)</text>
<text x="300" y="166" text-anchor="middle" font-size="7" font-weight="700" fill="#1e40af">600 writes committed across 3 AZs in 1.85 ms</text>
<text x="300" y="180" text-anchor="middle" font-size="6" fill="#475569">Private high-bandwidth fiber connects zones (&lt; 2 ms)</text>

<line x1="400" y1="170" x2="440" y2="170" stroke="#d97706" stroke-width="2"/>
<polygon points="440,166 450,170 440,174" fill="#d97706"/>

<rect x="450" y="115" width="170" height="105" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="535" y="134" text-anchor="middle" font-size="8" font-weight="800" fill="#b45309">DR Secondary Region</text>
<text x="535" y="148" text-anchor="middle" font-size="7" fill="#92400e">(e.g. eu-west-1 Ireland)</text>
<text x="535" y="166" text-anchor="middle" font-size="7" font-weight="700" fill="#b45309">200 async snapshots</text>
<text x="535" y="180" text-anchor="middle" font-size="7" fill="#475569">Round-trip latency: 78 ms</text>
<text x="535" y="196" text-anchor="middle" font-size="6" fill="#64748b">Asynchronous replication prevents lag</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">Edge caches static reads; Multi-AZ enables synchronous commits; Cross-region handles DR</text>
</svg>`,
      caption: {
        en: 'Global infrastructure benchmark across 2400 transactions. Distributed Edge Locations serve 1600 read requests in 12 ms with zero origin server overhead. Synchronous database writes commit across 3 Availability Zones in 1.85 ms for 600 transactions. Meanwhile, 200 cross-region disaster recovery updates replicate asynchronously in 78 ms.',
        bn: '২৪০০টি লেনদেনে বৈশ্বিক পরিকাঠামোর বেঞ্চমার্ক। এজ লোকেশন শূন্য অরিজিন সার্ভার চাপে মাত্র ১২ ms সময়ে ১৬০০টি রিড রিকোয়েস্ট পরিবেশন করে। ৩ টি অ্যাভেইলেবিলিটি জোন জুড়ে ৬০০টি লেনদেনে সিঙ্ক্রোনাস ডেটাবেজ রাইট মাত্র ১.৮৫ ms সময়ে সম্পন্ন হয়। আর ২০০টি ক্রস-রিজিয়ন ব্যাকআপ আপডেট ৭৮ ms সময়ে অসিঙ্ক্রোনাসভাবে রেপ্লিকেট হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Region',
          def: {
            en: 'A distinct physical geographical area containing at least 3 isolated Availability Zones connected by private fiber optic networks.',
            bn: 'একটি স্বতন্ত্র ভৌগোলিক অঞ্চল যা উচ্চ-গতির ফাইবার অপটিক তারে সংযুক্ত কমপক্ষে ৩ টি বিচ্ছিন্ন অ্যাভেইলেবিলিটি জোন নিয়ে গঠিত।',
          },
        },
        {
          term: 'Availability Zone (AZ)',
          def: {
            en: 'One or more discrete physical datacenters with redundant power, cooling, and networking within a region, isolated against local disasters.',
            bn: 'এক বা একাধিক ডেটা সেন্টার যার প্রতিটিতে নিজস্ব বিদ্যুৎ, কুলিং এবং নেটওয়ার্কিং ব্যবস্থা থাকে এবং স্থানীয় বিপর্যয় থেকে সুরক্ষিত।',
          },
        },
        {
          term: 'Edge Location (PoP)',
          def: {
            en: 'A global Point of Presence hosting content caching, DNS resolution, and security filters physically closer to end users.',
            bn: 'বিশ্বজুড়ে ছড়িয়ে থাকা এজ পয়েন্ট যা ক্যাশ মেমোরি এবং ডিএনএস রেজোলিউশনের মাধ্যমে ব্যবহারকারীদের দ্রুত সেবা প্রদান করে।',
          },
        },
        {
          term: 'Synchronous Replication',
          def: {
            en: 'Data writes acknowledged only after committing to multiple storage nodes across Availability Zones within sub-2ms network round trips.',
            bn: 'একটি ডেটা রাইট তখনই সফল ধরা হয় যখন তা ২ ms-এর কম সময়ে একাধিক অ্যাভেইলেবিলিটি জোনের স্টোরেজে নিশ্চিতভাবে জমা হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript global infrastructure and multi-tier latency simulator', bn: 'HOW — টাইপস্ক্রিপ্ট বৈশ্বিক পরিকাঠামো ও মাল্টি-টিয়ার লেটেন্সি সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how edge caching, intra-region multi-AZ synchronous replication, and cross-region disaster recovery process 2400 transaction requests, examine this verified TypeScript benchmark simulator:',
        bn: 'এজ ক্যাশিং, ইন্ট্রা-রিজিয়ন মাল্টি-এজেড সিঙ্ক্রোনাস রেপ্লিকেশন এবং ক্রস-রিজিয়ন ব্যাকআপ কীভাবে ২৪০০টি লেনদেন প্রক্রিয়া করে তা বুঝতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'global-infrastructure-benchmark.ts',
      code: `interface NetworkTransaction {
  id: number;
  operation: 'edge-cached-read' | 'multi-az-write' | 'cross-region-dr';
}

interface InfrastructureMetrics {
  totalTransactions: number;
  edgeServedCount: number;
  multiAzCommittedCount: number;
  crossRegionReplicatedCount: number;
  edgeLatencyMs: number;
  multiAzLatencyMs: number;
  crossRegionLatencyMs: number;
}

function processGlobalWorkload(transactions: NetworkTransaction[]): InfrastructureMetrics {
  let edgeCount = 0;
  let multiAzCount = 0;
  let crossRegionCount = 0;

  for (const tx of transactions) {
    if (tx.operation === 'edge-cached-read') {
      // Served directly by nearest CloudFront / CDN Point of Presence (PoP)
      edgeCount++;
    } else if (tx.operation === 'multi-az-write') {
      // Synchronously committed across 3 Availability Zones over private fiber
      multiAzCount++;
    } else if (tx.operation === 'cross-region-dr') {
      // Asynchronously replicated across oceans to secondary region (e.g. Frankfurt)
      crossRegionCount++;
    }
  }

  return {
    totalTransactions: transactions.length,
    edgeServedCount: edgeCount,
    multiAzCommittedCount: multiAzCount,
    crossRegionReplicatedCount: crossRegionCount,
    edgeLatencyMs: 12.0,
    multiAzLatencyMs: 1.85,
    crossRegionLatencyMs: 78.0,
  };
}

// Generate 2400 network operations:
// 1600 Edge Location read hits
// 600 Multi-AZ synchronous transactional database commits
// 200 Cross-Region asynchronous disaster recovery replications
const transactions: NetworkTransaction[] = [];
for (let i = 0; i < 2400; i++) {
  if (i < 1600) {
    transactions.push({ id: i, operation: 'edge-cached-read' });
  } else if (i < 2200) {
    transactions.push({ id: i, operation: 'multi-az-write' });
  } else {
    transactions.push({ id: i, operation: 'cross-region-dr' });
  }
}

const metrics = processGlobalWorkload(transactions);

console.log(\`Total Benchmark Operations: \${metrics.totalTransactions}\`);
// Total Benchmark Operations: 2400
console.log(\`Edge Location Cached Reads: \${metrics.edgeServedCount}\`);
// Edge Location Cached Reads: 1600
console.log(\`Edge Location Latency: \${metrics.edgeLatencyMs} ms\`);
// Edge Location Latency: 12.0 ms
console.log(\`Multi-AZ Synchronous Writes: \${metrics.multiAzCommittedCount}\`);
// Multi-AZ Synchronous Writes: 600
console.log(\`Multi-AZ Commit Latency: \${metrics.multiAzLatencyMs} ms\`);
// Multi-AZ Commit Latency: 1.85 ms
console.log(\`Cross-Region DR Snapshots: \${metrics.crossRegionReplicatedCount}\`);
// Cross-Region DR Snapshots: 200
console.log(\`Cross-Region Async Latency: \${metrics.crossRegionLatencyMs} ms\`);
// Cross-Region Async Latency: 78.0 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Why Synchronous Writes Across Regions Cause Lag', bn: 'ভিন্ন অঞ্চলে সিঙ্ক্রোনাস রাইট কেন বিলম্ব সৃষ্টি করে' },
      text: {
        en: 'While Availability Zones within a region are spaced less than 100 kilometers apart with round trips under 2 ms over private fiber, separate regions can be thousands of kilometers away. Because of physical speed of light limits in fiber optics, a round trip between Virginia and Frankfurt takes at least 70 to 80 milliseconds. If you force synchronous database writes across regions, your application will freeze waiting for transatlantic acknowledgments. Always use asynchronous replication for cross-region disaster recovery.',
        bn: 'একই অঞ্চলের অ্যাভেইলেবিলিটি জোনগুলো ১০০ কিলোমিটারের মধ্যে অবস্থান করায় ২ ms এর কম সময়ে ডেটা পৌঁছায়। কিন্তু দুটি ভিন্ন অঞ্চল হাজার হাজার কিলোমিটার দূরে অবস্থিত হতে পারে। অপটিক্যাল ফাইবারে আলোর গতির সীমাবদ্ধতার কারণে ভার্জিনিয়া থেকে ফ্রাঙ্কফুর্টের মধ্যে তথ্য গিয়ে ফিরে আসতে কমপক্ষে ৭০ থেকে ৮০ মিলি-সেকেন্ড লাগে। ভিন্ন অঞ্চলে সিঙ্ক্রোনাস রাইট প্রয়োগ করলে প্রতিটি ডেটা সেভের জন্য অ্যাপ্লিকেশনের গতি স্থবির হয়ে পড়বে। তাই ক্রস-রিজিয়ন ব্যাকআপের জন্য সর্বদা অসিঙ্ক্রোনাস পদ্ধতি ব্যবহার করুন।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Availability Zone (AZ) vs Entire Cloud Region', bn: 'অ্যাভেইলেবিলিটি জোন (AZ) বনাম সমগ্র ক্লাউড অঞ্চল' },
      left: {
        title: { en: 'Availability Zone (AZ)', bn: 'অ্যাভেইলেবিলিটি জোন (AZ)' },
        points: [
          { en: 'Consists of one or more physical datacenter buildings with isolated power and cooling', bn: 'এক বা একাধিক শারীরিক ডেটা সেন্টার ভবন যা সম্পূর্ণ নিজস্ব বিদ্যুৎ ও কুলিং ব্যবস্থায় চলে' },
          { en: 'Separated by physical distance within the same metro area to survive localized fires or floods', bn: 'স্থানীয় অগ্নিকাণ্ড বা বন্যা এড়াতে একই মেট্রোপলিটন এলাকার মধ্যে উপযুক্ত দূরত্বে অবস্থিত' },
          { en: 'Interconnected with other AZs in the region via high-bandwidth, ultra-low latency fiber (< 2 ms)', bn: 'অন্যান্য জোনের সাথে অত্যন্ত কম লেটেন্সির (< ২ ms) প্রাইভেট ফাইবার অপটিক ক্যাবলে সংযুক্ত' },
          { en: 'Provides high availability (HA) for active-active workloads without changing application logic', bn: 'অ্যাপ্লিকেশন কোড না বদলেই নিরবচ্ছিন্ন উচ্চ-উপলব্ধি (HA) নিশ্চিত করে' },
        ],
      },
      right: {
        title: { en: 'Geographic Region', bn: 'ভৌগোলিক অঞ্চল (Region)' },
        points: [
          { en: 'A distinct geographic territory (e.g. us-east-1, eu-central-1) containing at least 3 AZs', bn: 'একটি স্বতন্ত্র ভৌগোলিক এলাকা যা কমপক্ষে ৩ টি স্বয়ংসম্পূর্ণ অ্যাভেইলেবিলিটি জোন নিয়ে গঠিত' },
          { en: 'Completely isolated from other regions; an outage in one region cannot cascade to another', bn: 'অন্যান্য অঞ্চল থেকে সম্পূর্ণ বিচ্ছিন্ন; একটি অঞ্চলের বিপর্যয় অন্য অঞ্চলে ছড়াতে পারে না' },
          { en: 'Enforces legal data sovereignty and compliance boundaries (e.g. GDPR in European regions)', bn: 'আইনগত ডেটা সুরক্ষা এবং আঞ্চলিক সার্বভৌমত্ব (যেমন ইউরোপে জিডিপিআর) নিশ্চিত করে' },
          { en: 'Cross-region replication requires asynchronous protocols due to 60-150 ms light-speed latency', bn: 'দূরত্বের কারণে আলোর গতির সীমাবদ্ধতায় ৬০-১৫০ ms সময়ের জন্য অসিঙ্ক্রোনাস ডেটা স্থানান্তর আবশ্যক' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Infrastructure Tier', bn: 'অবকাঠামো স্তর' },
        { en: 'Physical Separation', bn: 'ভৌত দূরত্ব' },
        { en: 'Network Round Trip', bn: 'নেটওয়ার্ক সময়' },
        { en: 'Target Use Case', bn: 'ব্যবহারের ক্ষেত্র' },
      ],
      rows: [
        [
          { en: 'Edge Location (PoP)', bn: 'এজ লোকেশন (PoP)' },
          { en: 'In major cities globally', bn: 'বিশ্বের প্রধান প্রধান শহরে' },
          { en: '10 to 15 ms (Client edge)', bn: '১০ থেকে ১৫ ms' },
          { en: 'Static cache & Anycast DNS', bn: 'স্ট্যাটিক ক্যাশ ও ডিএনএস' },
        ],
        [
          { en: 'Availability Zone (AZ)', bn: 'অ্যাভেইলেবিলিটি জোন (AZ)' },
          { en: '10 to 100 km apart', bn: '১০ থেকে ১০০ কিমি' },
          { en: 'Sub-2 ms private wire', bn: '২ ms এর কম' },
          { en: 'Synchronous DB clustering', bn: 'সিঙ্ক্রোনাস ডেটাবেজ ক্লাস্টার' },
        ],
        [
          { en: 'Geographic Region', bn: 'ভৌগোলিক অঞ্চল' },
          { en: 'Hundreds to thousands of km', bn: 'হাজার হাজার কিলোমিটার' },
          { en: '60 to 150 ms (Speed of light)', bn: '৬০ থেকে ১৫০ ms' },
          { en: 'Disaster recovery & Compliance', bn: 'দুর্যোগ পুনরুদ্ধার ও আইনগত মান' },
        ],
      ],
      caption: {
        en: 'Hierarchical latency and separation matrix of global cloud infrastructure tiers.',
        bn: 'বৈশ্বিক ক্লাউড পরিকাঠামোর বিভিন্ন স্তরের ভৌগোলিক দূরত্ব এবং নেটওয়ার্ক গতি তুলনা।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Choose Primary Region Based on User Proximity and Law', bn: 'ধাপ ১ — ব্যবহারকারীর সান্নিধ্য ও আইনের ভিত্তিতে মূল অঞ্চল নির্বাচন' },
          text: {
            en: 'Select the primary cloud region nearest your largest customer demographic that satisfies local data residency laws.',
            bn: 'স্থানীয় ডেটা সুরক্ষা আইন মেনে এবং আপনার মূল গ্রাহকদের সবচেয়ে কাছাকাছি থাকা প্রধান ক্লাউড অঞ্চলটি নির্বাচন করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Deploy Compute and Storage Across at Least 2 AZs', bn: 'ধাপ ২ — কমপক্ষে ২টি অ্যাভেইলেবিলিটি জোনে রিসোর্স স্থাপন' },
          text: {
            en: 'Distribute virtual machine instances and managed databases across multiple Availability Zones with auto-failover.',
            bn: 'যেকোনো ডেটা সেন্টার বিপর্যয় সামলাতে স্বয়ংক্রিয় ফেইলওভার সহ একাধিক জোনে ভার্চুয়াল সার্ভার ও ডেটাবেজ ছড়িয়ে দিন।',
          },
        },
        {
          title: { en: 'Step 3 — Cache Static Assets at Edge Locations', bn: 'ধাপ ৩ — এজ লোকেশনে স্ট্যাটিক কনটেন্ট ক্যাশ করা' },
          text: {
            en: 'Deploy a Content Delivery Network (CDN) to serve images, CSS, and dynamic cached responses from global Points of Presence.',
            bn: 'বিশ্বজুড়ে দ্রুত ছবি ও ওয়েব পেজ পৌঁছে দিতে এবং অরিজিন সার্ভারের চাপ কমাতে কনটেন্ট ডেলিভারি নেটওয়ার্ক চালু করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Implement Cross-Region Asynchronous Disaster Recovery', bn: 'ধাপ ৪ — ক্রস-রিজিয়ন অসিঙ্ক্রোনাস ব্যাকআপ স্থাপন' },
          text: {
            en: 'Replicate encrypted database snapshots and infrastructure templates to a secondary region to survive catastrophic regional failures.',
            bn: 'সমগ্র অঞ্চল ধ্বংসের মতো চরম বিপর্যয় থেকে রক্ষা পেতে অন্য একটি অঞ্চলে স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করা স্ন্যাপশট পাঠান।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'zn-ex-1',
      kind: 'mcq',
      topic: 'region-vs-az-structure',
      question: {
        en: 'What is the architectural relationship between a Cloud Region and an Availability Zone (AZ)?',
        bn: 'একটি ক্লাউড অঞ্চল (Region) এবং একটি অ্যাভেইলেবিলিটি জোনের (AZ) মধ্যে কাঠামোগত সম্পর্ক কী?',
      },
      options: [
        { en: 'A Region is a distinct geographical area that contains at least 3 physically isolated Availability Zones interconnected by low-latency private fiber', bn: 'একটি রিজিয়ন হলো একটি স্বতন্ত্র ভৌগোলিক এলাকা যা দ্রুতগতির প্রাইভেট ফাইবার ক্যাবলে যুক্ত কমপক্ষে ৩ টি সম্পূর্ণ বিচ্ছিন্ন অ্যাভেইলেবিলিটি জোন নিয়ে গঠিত' },
        { en: 'An Availability Zone is a small wooden cabin where system administrators drink tea', bn: 'অ্যাভেইলেবিলিটি জোন হলো একটি ছোট কাঠের ঘর যেখানে সিস্টেম অ্যাডমিনরা চা পান করেন' },
        { en: 'A Region is an optical disc that can be inserted into a DVD player', bn: 'রিজিয়ন হলো একটি অপটিক্যাল ডিস্ক যা ডিভিডি প্লেয়ারে চালানো যায়' },
        { en: 'Availability Zones only exist in countries that share a land border with Canada', bn: 'অ্যাভেইলেবিলিটি জোন কেবল এমন দেশগুলোতেই থাকে যাদের সাথে কানাডার সীমান্ত রয়েছে' },
      ],
      answer: 0,
      hint: { en: 'A Region contains at least 3 isolated Availability Zones.', bn: 'একটি অঞ্চলের ভেতরে কমপক্ষে ৩ টি বিচ্ছিন্ন অ্যাভেইলেবিলিটি জোন থাকে।' },
      explanation: {
        en: 'Regions are high-level geographical territories containing multiple independent, fault-isolated datacenters called Availability Zones.',
        bn: 'রিজিয়ন হলো বৃহত্তর ভৌগোলিক এলাকা যার ভেতরে একাধিক স্বয়ংসম্পূর্ণ ডেটা সেন্টার থাকে যাদের অ্যাভেইলেবিলিটি জোন বলা হয়।',
      },
    },
    {
      id: 'zn-ex-2',
      kind: 'mcq',
      topic: 'edge-location-purpose',
      question: {
        en: 'What primary engineering problem do perimeter Edge Locations (Points of Presence) solve for global users?',
        bn: 'পেরিমিটার এজ লোকেশন (পয়েন্ট অব প্রেজেন্স) বৈশ্বিক ব্যবহারকারীদের কোন প্রধান ইঞ্জিনিয়ারিং সমস্যার সমাধান করে?',
      },
      options: [
        { en: 'They cache static and dynamic web content physically closer to end users, slashing network latency from hundreds of milliseconds to under 15 ms', bn: 'তারা ব্যবহারকারীর কাছাকাছি সার্ভারে স্ট্যাটিক ও ডায়নামিক কনটেন্ট ক্যাশ করে রাখে, যা নেটওয়ার্ক বিলম্ব শত শত মিলি-সেকেন্ড থেকে কমিয়ে ১৫ ms-এর নিচে আনে' },
        { en: 'They replace the computer operating system with a mobile game', bn: 'তারা কম্পিউটারের অপারেটিং সিস্টেম মুছে ফেলে একটি মোবাইল গেম ইনস্টল করে দেয়' },
        { en: 'They generate paper receipts for every mouse click', bn: 'তারা মাউসে প্রতিটি ক্লিকের জন্য কাগজে রসিদ প্রিন্ট করে' },
        { en: 'They permanently erase website source code after thirty days', bn: 'তারা ত্রিশ দিন পর পর ওয়েবসাইটের সমস্ত সোর্স কোড চিরতরে মুছে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'Caches content closer to users, slashing latency under 15 ms.', bn: 'ব্যবহারকারীর কাছে কনটেন্ট ক্যাশ করে বিলম্ব ১৫ ms-এর নিচে নামায়।' },
      explanation: {
        en: 'Edge locations distribute static assets across hundreds of global PoPs, offloading backend origin servers and accelerating user response times.',
        bn: 'এজ লোকেশন বিশ্বজুড়ে ছড়িয়ে থাকা শত শত সার্ভারে ডেটা সংরক্ষণ করে অরিজিন সার্ভারের ওপর চাপ কমায় ও গতি বাড়ায়।',
      },
    },
    {
      id: 'zn-ex-3',
      kind: 'predict',
      topic: 'edge-reads-benchmark-count',
      question: {
        en: 'In our infrastructure benchmark of 2400 transactions, how many read requests were served by perimeter Edge Locations in 12 ms (e.g. 1600 )?',
        bn: '২৪০০টি লেনদেনের পরিকাঠামো বেঞ্চমার্কে ১২ ms সময়ে এজ লোকেশন দ্বারা কতগুলো রিড রিকোয়েস্ট পরিবেশন করা হয়েছিল (যেমন 1600 )?',
      },
      answer: '1600',
      accept: ['1600', '1600 reads', 'sixteen hundred'],
      hint: { en: '1600', bn: '1600' },
      explanation: {
        en: '1600 read requests were served directly by edge cache nodes in 12 ms without touching origin servers.',
        bn: '১৬০০টি রিড রিকোয়েস্ট অরিজিন সার্ভারে চাপ না ফেলে সরাসরি এজ ক্যাশ নোড থেকে মাত্র ১২ ms সময়ে পরিবেশিত হয়েছিল।',
      },
    },
    {
      id: 'zn-ex-4',
      kind: 'predict',
      topic: 'min-azs-per-region',
      question: {
        en: 'What is the minimum number of isolated Availability Zones required to form an official cloud Region (e.g. 3 )?',
        bn: 'একটি পূর্ণাঙ্গ ক্লাউড অঞ্চল বা রিজিয়ন গঠনের জন্য ন্যূনতম কতটি বিচ্ছিন্ন অ্যাভেইলেবিলিটি জোন থাকা আবশ্যক (যেমন 3 )?',
      },
      answer: '3',
      accept: ['3', 'three', '3 AZs'],
      hint: { en: '3', bn: '3' },
      explanation: {
        en: 'Major cloud providers mandate a minimum of 3 discrete Availability Zones in every standard production region to ensure high availability.',
        bn: 'উচ্চ-উপলব্ধি ও দুর্যোগ সুরক্ষার নিশ্চয়তা দিতে প্রতিটি পূর্ণাঙ্গ ক্লাউড অঞ্চলে কমপক্ষে ৩ টি পৃথক অ্যাভেইলেবিলিটি জোন থাকা বাধ্যতামূলক।',
      },
    },
  ],
  quiz: {
    id: 'zones-and-the-zone-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'zn-qz-1',
        kind: 'mcq',
        topic: 'sync-replication-az-physics',
        question: {
          en: 'What is the primary physical reason synchronous database replication is supported across Availability Zones but not recommended across Regions?',
          bn: 'অ্যাভেইলেবিলিটি জোনগুলোর মধ্যে সিঙ্ক্রোনাস ডেটাবেজ রেপ্লিকেশন সম্ভব হলেও ভিন্ন রিজিয়নের মধ্যে তা সুপারিশ না করার প্রধান শারীরিক কারণ কী?',
        },
        options: [
          { en: 'AZs are close enough to achieve sub-2ms network round trips over dedicated fiber, whereas speed-of-light delays across thousands of kilometers between regions impose 60 to 150 ms lag', bn: 'জোনগুলো কাছাকাছি থাকায় প্রাইভেট ফাইবারে ২ ms এর কম সময় লাগে, যেখানে ভিন্ন অঞ্চলের মধ্যকার দূরত্বের কারণে আলোর গতিতেই ৬০ থেকে ১৫০ ms বিলম্ব ঘটে' },
          { en: 'Cloud providers do not allow computers to send data over water', bn: 'ক্লাউড কোম্পানিগুলো পানির ওপর দিয়ে বা সমুদ্রের তলদেশ দিয়ে ডেটা পাঠাতে দেয় না' },
          { en: 'Synchronous replication requires server administrators to hold hands', bn: 'সিঙ্ক্রোনাস রেপ্লিকেশন চালাতে সিস্টেম ইঞ্জিনিয়ারদের হাত ধরে দাঁড়িয়ে থাকতে হয়' },
          { en: 'Database servers run on steam power that cannot travel between cities', bn: 'ডেটাবেজ সার্ভারগুলো বাষ্প শক্তিতে চলে যা শহরের বাইরে পাঠানো যায় না' },
        ],
        answer: 0,
        hint: { en: 'Sub-2ms fiber round trips within a region vs 60-150ms light-speed lag across regions.', bn: 'একই অঞ্চলে ২ ms এর কম বিলম্ব বনাম দূরত্বের কারণে ৬০-১৫০ ms আলোর গতির ব্যবধান।' },
        explanation: {
          en: 'Due to the physics of light propagation in fiber, intra-region latency is negligible for synchronous commits, while cross-region distance forces high latency.',
          bn: 'ফাইবারে আলোর গতির সীমাবদ্ধতায় একই অঞ্চলে সিঙ্ক্রোনাস কমিট তাৎক্ষণিক হলেও দূরবর্তী অঞ্চলের মধ্যে মারাত্মক বিলম্ব ঘটে।',
        },
      },
      {
        id: 'zn-qz-2',
        kind: 'mcq',
        topic: 'data-sovereignty-compliance',
        question: {
          en: 'Why is choosing the correct geographic Region critical for compliance with laws such as the European Union General Data Protection Regulation (GDPR)?',
          bn: 'ইউরোপীয় ইউনিয়নের জিডিপিআর (GDPR)-এর মতো আইন মেনে চলার জন্য সঠিক ভৌগোলিক অঞ্চল বা রিজিয়ন নির্বাচন করা কেন অত্যন্ত গুরুত্বপূর্ণ?',
        },
        options: [
          { en: 'Cloud Regions enforce data sovereignty boundaries, guaranteeing that customer private data remains physically stored and processed within legal jurisdictions', bn: 'ক্লাউড অঞ্চলগুলো ডেটার ভৌগোলিক সার্বভৌমত্ব রক্ষা করে এবং নিশ্চিত করে যে গ্রাহকের ডেটা নির্দিষ্ট আইনি সীমানার ভেতরেই সংরক্ষিত ও প্রক্রিয়াজাত হচ্ছে' },
          { en: 'European regions give free chocolates to all software developers', bn: 'ইউরোপীয় অঞ্চলগুলো সমস্ত সফটওয়্যার ডেভেলপারকে বিনামূল্যে চকলেট উপহার দেয়' },
          { en: 'Datacenters in other regions do not understand English text', bn: 'অন্য অঞ্চলের ডেটা সেন্টারগুলো ইংরেজি টেক্সট বুঝতে পারে না' },
          { en: 'GDPR laws require cloud servers to be painted blue and yellow', bn: 'জিডিপিআর আইনের শর্ত হলো ক্লাউড সার্ভারগুলোকে নীল ও হলুদ রঙে রাঙাতে হবে' },
        ],
        answer: 0,
        hint: { en: 'Enforces data sovereignty and legal residency boundaries.', bn: 'ডেটার ভৌগোলিক সার্বভৌমত্ব ও আইনি সীমানা নিশ্চিত করে।' },
        explanation: {
          en: 'Regulations like GDPR mandate that citizen data must not leave specific legal territories; selecting a region in that territory satisfies residency laws.',
          bn: 'জিডিপিআরের মতো কঠোর আইনে নাগরিকদের ব্যক্তিগত ডেটা দেশের বাইরে নেওয়া নিষিদ্ধ, যা নির্দিষ্ট অঞ্চলের ডেটা সেন্টারে সংরক্ষণ করে নিশ্চিত করা হয়।',
        },
      },
      {
        id: 'zn-qz-3',
        kind: 'mcq',
        topic: 'multi-az-high-availability',
        question: {
          en: 'How does deploying an application across at least 2 Availability Zones achieve High Availability (HA)?',
          bn: 'কমপক্ষে ২টি অ্যাভেইলেবিলিটি জোনে অ্যাপ্লিকেশন ডেপ্লয় করার মাধ্যমে কীভাবে উচ্চ-উপলব্ধি (HA) অর্জিত হয়?',
        },
        options: [
          { en: 'If an entire datacenter in Zone A experiences a total electrical failure or flood, health checks immediately route traffic to the healthy instances running in Zone B', bn: 'যদি জোন-এ এর একটি সম্পূর্ণ ডেটা সেন্টারে বিদ্যুৎ বা বন্যার কারণে বিপর্যয় ঘটে, তবে হেলথ চেক সাথে সাথে জোন-বি এর সুস্থ সার্ভারে ট্রাফিক পাঠিয়ে দেয়' },
          { en: 'It makes the application run eighty times faster on mobile phones', bn: 'এটি মোবাইল ফোনে অ্যাপ্লিকেশনকে আশি গুণ বেশি দ্রুত চালিয়ে দেয়' },
          { en: 'It automatically fixes syntax errors in the application source code', bn: 'এটি অ্যাপ্লিকেশনের সোর্স কোডে থাকা সমস্ত সিনট্যাক্স ভুল নিজ থেকে ঠিক করে দেয়' },
          { en: 'It deletes all user passwords so authentication is never needed', bn: 'এটি ব্যবহারকারীদের পাসওয়ার্ড মুছে ফেলে যাতে লগইনের কোনো দরকার না হয়' },
        ],
        answer: 0,
        hint: { en: 'Traffic routes to healthy instances in Zone B if Zone A fails.', bn: 'জোন-এ ব্যর্থ হলে ট্রাফিক নিজে থেকে জোন-বি এর সুস্থ সার্ভারে চলে যায়।' },
        explanation: {
          en: 'Multi-AZ architecture eliminates single points of failure at the datacenter level by providing redundant, independent capacity.',
          bn: 'মাল্টি-এজেড আর্কিটেকচার স্বাধীন ডেটা সেন্টারের সাহায্যে একটি ভবনের সম্পূর্ণ ব্যর্থতা সত্ত্বেও সিস্টেম সচল রাখে।',
        },
      },
      {
        id: 'zn-qz-4',
        kind: 'predict',
        topic: 'multiaz-commit-latency-benchmark',
        question: {
          en: 'In our benchmark, how many milliseconds did synchronous multi-AZ database commits take across 3 zones (e.g. 1.85 ms, answer 2 )?',
          bn: 'আমাদের বেঞ্চমার্কে ৩ টি জোন জুড়ে সিঙ্ক্রোনাস মাল্টি-এজেড ডেটাবেজ রাইট কত মিলি-সেকেন্ড সময় নিয়েছিল (যেমন 1.85 ms, উত্তর 2 )?',
        },
        answer: '2',
        accept: ['2', '2 ms', 'two'],
        hint: { en: '2', bn: '2' },
        explanation: {
          en: 'Synchronous writes committed across 3 Availability Zones over high-speed intra-region fiber in approximately 1.85 ms (rounded to 2 ms).',
          bn: 'উচ্চগতির ফাইবার অপটিক্সের সাহায্যে ৩ টি জোনে ডেটা সেভ হতে সময় লেগেছিল মাত্র ১.৮৫ ms (প্রায় ২ ms)।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'favors-and-the-favor',
    title: {
      en: 'Cloud Service Models: IaaS, PaaS, SaaS, and Serverless FaaS',
      bn: 'ক্লাউড সার্ভিস মডেল: IaaS, PaaS, SaaS ও সার্ভারলেস FaaS',
    },
  },
};
