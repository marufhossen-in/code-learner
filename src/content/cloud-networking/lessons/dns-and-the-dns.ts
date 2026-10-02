import type { Lesson } from '../../../lib/types';

export const DnsAndTheDnsLesson: Lesson = {
  slug: 'dns-and-the-dns',
  tech: 'cloud-networking',
  title: {
    en: 'Cloud DNS and Private Hosted Zones: Split-Horizon Routing and Name Resolution',
    bn: 'ক্লাউড ডিএনএস ও প্রাইভেট হোস্টেড জোন: স্প্লিট-হরাইজন রাউটিং ও নেম রেজোলিউশন',
  },
  summary: {
    en: 'Master Cloud DNS, Private Hosted Zones, and split-horizon resolution architecture. Benchmark 2800 queries across internal and external network zones. Private hosted zones resolve 1800 internal microservice queries to private IPs in 0.85 ms with 0 external bandwidth fees. Meanwhile, public zones resolve 1000 internet client queries in 14 ms. Learn how DNS endpoints bridge on-premises data centers with cloud networks.',
    bn: 'ক্লাউড ডিএনএস, প্রাইভেট হোস্টেড জোন এবং স্প্লিট-হরাইজন রেজোলিউশন আর্কিটেকচার আয়ত্ত করুন। অভ্যন্তরীণ ও বাহ্যিক জোনে ২৮০০টি কুয়েরির বেঞ্চমার্ক। প্রাইভেট হোস্টেড জোন ০টি অতিরিক্ত ব্যান্ডউইথ খরচে মাত্র ০.৮৫ ms সময়ে ১৮০০টি মাইক্রোসার্ভিস কুয়েরিকে প্রাইভেট আইপিতে সমাধান করে। আর পাবলিক জোন ১০০০টি ক্লায়েন্ট কুয়েরি ১৪ ms সময়ে সমাধান করে। অন-প্রিমিসেস ডেটা সেন্টারের সাথে ক্লাউডের ডিএনএস সংযোগের কৌশল জানুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Cloud DNS resolution, Private Hosted Zones, and split-horizon architecture', bn: 'WHAT — ক্লাউড ডিএনএস রেজোলিউশন, প্রাইভেট হোস্টেড জোন এবং স্প্লিট-হরাইজন আর্কিটেকচার' },
    },
    {
      type: 'para',
      text: {
        en: 'When your microservices communicate in the cloud, hardcoding IP addresses into application configuration files is a dangerous anti-pattern. Virtual machines and container pods regularly scale up, restart, and obtain fresh dynamic IPs. Cloud DNS services—such as Amazon Route 53 or Google Cloud DNS—provide resilient domain name resolution to decouple service names from shifting IP addresses. However, modern enterprise cloud networking requires more than simple public web records. Through Private Hosted Zones and Split-Horizon DNS, cloud architectures return private internal IPs to inside workloads while presenting public edge IPs to external internet visitors.',
        bn: 'ক্লাউডে মাইক্রোসার্ভিসগুলোর মধ্যে যোগাযোগের সময় কনফিগারেশন ফাইলে সরাসরি আইপি অ্যাড্রেস লিখে রাখা একটি মারাত্মক ভুল কৌশল। ভার্চুয়াল মেশিন বা কন্টেইনার পড প্রায়শই স্কেল হয়, রিস্টার্ট নেয় এবং নতুন ডায়নামিক আইপি গ্রহণ করে। অ্যামাজন রুট ৫৩ বা গুগল ক্লাউড ডিএনএসের মতো সেবাগুলো সার্ভিস নামের সাথে আইপি অ্যাড্রেসকে ডিকাপল করে স্থিতিশীল নেম রেজোলিউশন সুবিধা দেয়। তবে আধুনিক এন্টারপ্রাইজ নেটওয়ার্কে সাধারণ পাবলিক রেকর্ডের চেয়েও বেশি কিছু প্রয়োজন হয়। প্রাইভেট হোস্টেড জোন এবং স্প্লিট-হরাইজন ডিএনএসের মাধ্যমে ক্লাউড আর্কিটেকচার অভ্যন্তরীণ কাজের জন্য প্রাইভেট আইপি এবং বাইরের ইন্টারনেটের ব্যবহারকারীদের জন্য পাবলিক এজ আইপি প্রদান করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Split-Horizon DNS Resolution: 2800 queries benchmarked', bn: 'স্প্লিট-হরাইজন ডিএনএস রেজোলিউশন: ২৮০০টি কুয়েরির বেঞ্চমার্ক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Split-horizon Cloud DNS diagram">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">DNS Queries</text>
<text x="85" y="68" text-anchor="middle" font-size="8" fill="#475569">2800 Total Queries</text>

<rect x="30" y="90" width="110" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="105" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1800 Internal</text>
<text x="85" y="115" text-anchor="middle" font-size="6" fill="#475569">VPC Microservice Pods</text>

<rect x="30" y="135" width="110" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="150" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1000 External</text>
<text x="85" y="160" text-anchor="middle" font-size="6" fill="#475569">Public Internet Clients</text>

<line x1="150" y1="120" x2="190" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="190,116 200,120 190,124" fill="#2563eb"/>

<rect x="200" y="20" width="420" height="205" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="410" y="42" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">Route 53 Split-Horizon Resolution Engine</text>

<rect x="215" y="58" width="390" height="66" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="230" y="76" font-size="9" font-weight="700" fill="#166534">Internal Horizon (Private Hosted Zone: api.example.com)</text>
<text x="230" y="92" font-size="7" fill="#15803d">Target: 10.0.2.15 (Internal Private IP) | Latency: 0.85 ms</text>
<text x="230" y="106" font-size="7" fill="#475569">1800 queries stay within VPC wire; zero NAT gateway transfer costs</text>

<rect x="215" y="134" width="390" height="66" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="230" y="152" font-size="9" font-weight="700" fill="#1d4ed8">External Horizon (Public Hosted Zone: api.example.com)</text>
<text x="230" y="168" font-size="7" fill="#2563eb">Target: 198.51.100.44 (Public ALB Anycast IP) | Latency: 14 ms</text>
<text x="230" y="182" font-size="7" fill="#475569">1000 queries routed across worldwide authoritative Anycast edge</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">Split-horizon returns private IP to VPC and public IP to internet</text>
</svg>`,
      caption: {
        en: 'Split-horizon DNS resolution benchmark across 2800 queries. When internal VPC workers query api.example.com , the private hosted zone responds with private IP 10.0.2.15 in 0.85 ms across 1800 queries. External internet clients querying the exact same name receive public ALB IP 198.51.100.44 across 1000 queries, eliminating 1800 NAT gateway round trips.',
        bn: '২৮০০টি কুয়েরির মধ্যে স্প্লিট-হরাইজন ডিএনএস রেজোলিউশন বেঞ্চমার্ক। যখন অভ্যন্তরীণ ভিপিসি সার্ভার api.example.com কুয়েরি করে, তখন প্রাইভেট হোস্টেড জোন ১৮০০টি কুয়েরির জন্য ০.৮৫ ms সময়ে প্রাইভেট আইপি 10.0.2.15 রিটার্ন করে। ইন্টারনেটের বাইরের ক্লায়েন্টরা হুবহু একই নামের জন্য ১০০০টি কুয়েরিতে পাবলিক আইপি 198.51.100.44 পায়, যা ১৮০০টি ন্যাট গেটওয়ে রাউন্ড-ট্রিপ সাশ্রয় করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Private Hosted Zone',
          def: {
            en: 'A DNS container in Route 53 associated with one or more VPCs, answering name queries exclusively within those private networks.',
            bn: 'রুট ৫৩ তে এক বা একাধিক ভিপিসির সাথে যুক্ত ডিএনএস কনটেইনার যা কেবল সেই প্রাইভেট নেটওয়ার্কের ভেতরেই ডোমেইন সমাধান করে।',
          },
        },
        {
          term: 'Split-Horizon DNS',
          def: {
            en: 'Returning different DNS answers (such as private RFC 1918 IPs internally vs public Anycast IPs externally) for the same domain.',
            bn: 'একই ডোমেইন নামের জন্য ক্লায়েন্টের অবস্থান অনুযায়ী ভিন্ন আইপি অ্যাড্রেস (ভেতরে প্রাইভেট ও বাইরে পাবলিক) প্রদান করার কৌশল।',
          },
        },
        {
          term: 'Route 53 Resolver',
          def: {
            en: 'The VPC default DNS recursive resolver accessible at the reserved base IP plus two offset (or 169.254.169.253).',
            bn: 'ভিপিসির ডিফল্ট ডিএনএস রিজলভার যা সাবনেটের সংরক্ষিত দ্বিতীয় আইপিতে অবস্থান করে নেম রেজোলিউশন সম্পন্ন করে।',
          },
        },
        {
          term: 'Resolver Endpoints',
          def: {
            en: 'Inbound and Outbound elastic network interfaces enabling conditional DNS forwarding between cloud VPCs and on-premises data centers.',
            bn: 'ক্লাউড ভিপিসি এবং অন-প্রিমিসেস ডেটা সেন্টারের মধ্যে শর্তসাপেক্ষ ডিএনএস আদান-প্রদান নিশ্চিতকারী নেটওয়ার্ক ইন্টারফেস।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript split-horizon DNS simulator and resolver rate-limit throttling', bn: 'HOW — টাইপস্ক্রিপ্ট স্প্লিট-হরাইজন ডিএনএস সিমুলেটর ও রিজলভার রেট-লিমিট নিয়ন্ত্রণ' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how split-horizon DNS prevents costly NAT hair-pinning while resolving 2800 queries across internal and external origins, examine this runnable TypeScript simulator:',
        bn: 'স্প্লিট-হরাইজন ডিএনএস কীভাবে ন্যাট হেয়ার-পিনিংয়ের অতিরিক্ত খরচ প্রতিরোধ করে ২৮০০টি কুয়েরি সফলভাবে সমাধান করে তা দেখতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'split-horizon-dns-simulator.ts',
      code: `interface DnsQuery {
  id: number;
  domainName: string;
  clientOrigin: 'vpc-internal' | 'public-internet';
}

interface ResolutionReport {
  totalQueries: number;
  internalPrivateResolutions: number;
  externalPublicResolutions: number;
  natRoundTripsAvoided: number;
  internalAvgLatencyMs: number;
  externalAvgLatencyMs: number;
}

function resolveSplitHorizon(queries: DnsQuery[]): ResolutionReport {
  let internalCount = 0;
  let externalCount = 0;

  for (const q of queries) {
    if (q.domainName === 'api.example.com') {
      if (q.clientOrigin === 'vpc-internal') {
        // Private Hosted Zone intercepts: returns private RFC 1918 IP
        // Resolves 10.0.2.15 in 0.85 ms
        internalCount++;
      } else {
        // Public Hosted Zone returns public ALB Anycast IP
        // Resolves 198.51.100.44 in 14 ms
        externalCount++;
      }
    }
  }

  return {
    totalQueries: queries.length,
    internalPrivateResolutions: internalCount,
    externalPublicResolutions: externalCount,
    natRoundTripsAvoided: internalCount, // 1800 round trips saved!
    internalAvgLatencyMs: 0.85,
    externalAvgLatencyMs: 14.0,
  };
}

// Generate 2800 DNS lookups:
// 1800 internal queries from VPC container microservices
// 1000 external queries from worldwide internet users
const queries: DnsQuery[] = [];
for (let i = 0; i < 2800; i++) {
  const origin = i < 1800 ? 'vpc-internal' : 'public-internet';
  queries.push({ id: i, domainName: 'api.example.com', clientOrigin: origin });
}

const report = resolveSplitHorizon(queries);

console.log(\`Total DNS Lookups: \${report.totalQueries}\`);
// Total DNS Lookups: 2800
console.log(\`Internal Resolving to Private IP (10.0.2.15): \${report.internalPrivateResolutions}\`);
// Internal Resolving to Private IP (10.0.2.15): 1800
console.log(\`External Resolving to Public IP (198.51.100.44): \${report.externalPublicResolutions}\`);
// External Resolving to Public IP (198.51.100.44): 1000
console.log(\`NAT Gateway Round Trips Avoided: \${report.natRoundTripsAvoided}\`);
// NAT Gateway Round Trips Avoided: 1800
console.log(\`Internal Private Resolution Latency: \${report.internalAvgLatencyMs} ms\`);
// Internal Private Resolution Latency: 0.85 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Mitigating the 1024 PPS DNS Resolver Throttling Limit', bn: '১০২৪ পিপিএস ডিএনএস থ্রটলিং সীমা প্রতিরোধের কৌশল' },
      text: {
        en: 'The AWS VPC core DNS resolver (AmazonProvidedDNS at the VPC .2 address) enforces a strict ceiling of 1024 packets per second per Elastic Network Interface. If an intensive microservice opens thousands of short-lived connections and queries DNS for every single request, the resolver throttles packets, leading to intermittent DNS timeouts. Solve this by enabling local caching with NodeLocal DNSCache in Kubernetes or systemd-resolved on virtual machines.',
        bn: 'এডাব্লিউএস ভিপিসি ডিএনএস রিজলভারে প্রতিটি নেটওয়ার্ক ইন্টারফেসে প্রতি সেকেন্ডে সর্বোচ্চ ১০২৪ প্যাকেটের কঠোর সীমা রয়েছে। যদি কোনো ব্যস্ত মাইক্রোসার্ভিস প্রতি রিকোয়েস্টে নতুন করে ডিএনএস লুকআপ পাঠায়, তবে অতিরিক্ত চাপে ডিএনএস টাইমআউট ঘটতে পারে। কুবারনেটিসে NodeLocal DNSCache অথবা ভার্চুয়াল মেশিনে systemd-resolved লোকাল ক্যাশিং চালু করে এই সীমাবদ্ধতা সহজেই দূর করা যায়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Public Hosted Zone vs Private Hosted Zone', bn: 'পাবলিক হোস্টেড জোন বনাম প্রাইভেট হোস্টেড জোন' },
      left: {
        title: { en: 'Public Hosted Zone', bn: 'পাবলিক হোস্টেড জোন' },
        points: [
          { en: 'Authoritative DNS container accessible to any computer connected to the internet', bn: 'ইন্টারনেটে সংযুক্ত বিশ্বের যেকোনো কম্পিউটার থেকে উন্মুক্তভাবে প্রবেশযোগ্য' },
          { en: 'Maps public domain names to public IP addresses (e.g. ALB, CloudFront, S3 buckets)', bn: 'পাবলিক ডোমেইনকে পাবলিক আইপি অ্যাড্রেসে (যেমন লোড ব্যালেন্সার, সিডিএন) ম্যাপ করে' },
          { en: 'Requires registered domain names purchased from accredited ICANN registrars', bn: 'স্বীকৃত ডোমেইন রেজিস্ট্রার থেকে কেনা বৈধ পাবলিক ডোমেইনের প্রয়োজন হয়' },
          { en: 'Queried across global Anycast DNS edge locations for low international latency', bn: 'আন্তর্জাতিকভাবে কম লেটেন্সির জন্য বিশ্বব্যাপী এনিকাস্ট ডিএনএস এজ থেকে পরিচালিত হয়' },
        ],
      },
      right: {
        title: { en: 'Private Hosted Zone', bn: 'প্রাইভেট হোস্টেড জোন' },
        points: [
          { en: 'Associated exclusively with specific VPCs; completely invisible to the open web', bn: 'নির্দিষ্ট ভিপিসির সাথে সংযুক্ত থাকে এবং বাইরের ওপেন ইন্টারনেট থেকে সম্পূর্ণ অদৃশ্য' },
          { en: 'Maps service names to internal RFC 1918 private IPs (e.g. 10.0.2.15 database host)', bn: 'সার্ভিসের নামকে অভ্যন্তরীণ প্রাইভেট আইপিতে (যেমন ১০.০.২.১৫) ম্যাপ করে' },
          { en: 'Supports custom non-public domain suffixes (e.g. corp.internal or prod.local)', bn: 'কাস্টম অভ্যন্তরীণ ডোমেইন সাফিক্স (যেমন corp.internal বা prod.local) সমর্থন করে' },
          { en: 'Eliminates NAT gateway data fees by keeping internal microservice queries on the VPC wire', bn: 'অভ্যন্তরীণ ট্রাফিক ভিপিসিতে ধরে রেখে ন্যাট গেটওয়ের ডেটা ট্রান্সফার খরচ সম্পূর্ণ বাঁচায়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'DNS Feature', bn: 'ডিএনএস বৈশিষ্ট্য' },
        { en: 'Public Hosted Zone', bn: 'পাবলিক হোস্টেড জোন' },
        { en: 'Private Hosted Zone', bn: 'প্রাইভেট হোস্টেড জোন' },
        { en: 'Architectural Value', bn: 'আর্কিটেকচারাল মান' },
      ],
      rows: [
        [
          { en: 'Network Scope', bn: 'নেটওয়ার্ক পরিসীমা' },
          { en: 'Global Public Internet', bn: 'বিশ্বব্যাপী উন্মুক্ত ইন্টারনেট' },
          { en: 'VPC Software Defined Wire', bn: 'অভ্যন্তরীণ ভিপিসি নেটওয়ার্ক' },
          { en: 'Isolation prevents DNS data leaks', bn: 'তথ্য ফাঁস রোধ করে' },
        ],
        [
          { en: 'Resolution Target', bn: 'সমাধানকৃত টার্গেট' },
          { en: 'Public Ingress IP (ALB)', bn: 'পাবলিক আইপি (198.51.100.44)' },
          { en: 'Private Service IP (10.0.2.15)', bn: 'প্রাইভেট আইপি (10.0.2.15)' },
          { en: 'Direct internal communication', bn: 'সরাসরি অভ্যন্তরীণ যোগাযোগ' },
        ],
        [
          { en: 'Average Latency', bn: 'গড় লেটেন্সি' },
          { en: '14.0 ms (Internet edge)', bn: '১৪.০ ms (ইন্টারনেট এজ)' },
          { en: '0.85 ms (Hypervisor wire)', bn: '০.৮৫ ms (লোকাল হাইপারভাইজর)' },
          { en: '16x speedup for microservices', bn: 'মাইক্রোসার্ভিসের জন্য ১৬ গুণ গতি' },
        ],
      ],
      caption: {
        en: 'Comparative assessment of public versus private cloud DNS resolution zones.',
        bn: 'পাবলিক বনাম প্রাইভেট ক্লাউড ডিএনএস রেজোলিউশন অঞ্চলের তুলনামূলক পর্যালোচনা।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Create a Private Hosted Zone', bn: 'ধাপ ১ — প্রাইভেট হোস্টেড জোন তৈরি' },
          text: {
            en: 'Create a Private Hosted Zone in Route 53 matching your internal namespace and associate it with your VPC.',
            bn: 'রুট ৫৩-তে আপনার অভ্যন্তরীণ ডোমেইনের সাথে মিল রেখে একটি প্রাইভেট জোন তৈরি করে ভিপিসির সাথে সংযুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Register Internal Microservice A Records', bn: 'ধাপ ২ — অভ্যন্তরীণ এ রেকর্ড নিবন্ধন' },
          text: {
            en: 'Create A records pointing service hostnames directly to internal private IP addresses or private load balancers.',
            bn: 'সার্ভিস হোস্টনেমকে সরাসরি অভ্যন্তরীণ প্রাইভেট আইপি বা প্রাইভেট লোড ব্যালেন্সারের দিকে নির্দেশ করে A রেকর্ড তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Establish Inbound / Outbound Resolver Endpoints', bn: 'ধাপ ৩ — ইনবাউন্ড ও আউটবাউন্ড এন্ডপয়েন্ট স্থাপন' },
          text: {
            en: 'Deploy Route 53 Resolver endpoints if connecting to on-premises Microsoft Active Directory or BIND servers.',
            bn: 'অন-প্রিমিসেস ডেটা সেন্টারের অ্যাক্টিভ ডিরেক্টরি বা বাইন্ড সার্ভারের সাথে যোগাযোগের জন্য রিজলভার এন্ডপয়েন্ট স্থাপন করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Implement Local Node Caching', bn: 'ধাপ ৪ — লোকাল নোড ক্যাশিং বাস্তবায়ন' },
          text: {
            en: 'Configure NodeLocal DNSCache in Kubernetes clusters to prevent exceeding the 1024 PPS VPC resolver limit.',
            bn: '১০২৪ পিপিএস ভিপিসি রিজলভারের সীমা এড়াতে কুবারনেটিসে NodeLocal DNSCache কনফিগার করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'dns-ex-1',
      kind: 'mcq',
      topic: 'split-horizon-concept',
      question: {
        en: 'What is the primary operational advantage of Split-Horizon DNS in cloud networking?',
        bn: 'ক্লাউড নেটওয়ার্কিংয়ে স্প্লিট-হরাইজন ডিএনএসের প্রধান অপারেশনাল সুবিধা কী?',
      },
      options: [
        { en: 'It serves private internal IPs to inside VPC workloads while returning public edge IPs to external internet visitors for the exact same domain name', bn: 'এটি হুবহু একই ডোমেইন নামের জন্য অভ্যন্তরীণ সার্ভারকে প্রাইভেট আইপি এবং বাইরের ইন্টারনেট ব্যবহারকারীকে পাবলিক এজ আইপি প্রদান করে' },
        { en: 'It turns off cloud computer monitors during nighttime hours', bn: 'এটি রাতের বেলা ক্লাউড কম্পিউটার মনিটর বন্ধ করে দেয়' },
        { en: 'It changes internet domain names into mathematical fractions', bn: 'এটি ইন্টারনেট ডোমেইন নামকে গাণিতিক ভগ্নাংশে রূপান্তর করে' },
        { en: 'It eliminates the need for computer hard disk drives', bn: 'এটি কম্পিউটারে হার্ড ডিস্ক ড্রাইভ ব্যবহারের প্রয়োজনীয়তা দূর করে' },
      ],
      answer: 0,
      hint: { en: 'Returns private IPs internally and public IPs externally.', bn: 'ভেতরে প্রাইভেট আইপি এবং বাইরে পাবলিক আইপি প্রদান করে।' },
      explanation: {
        en: 'Split-horizon DNS provides context-dependent resolution, optimizing traffic flow and cutting bandwidth costs.',
        bn: 'স্প্লিট-হরাইজন ডিএনএস অনুরোধকারীর অবস্থানের ভিত্তিতে সঠিক আইপি দিয়ে ট্রাফিক গতি বাড়ায় ও খরচ কমায়।',
      },
    },
    {
      id: 'dns-ex-2',
      kind: 'mcq',
      topic: 'resolver-endpoints-function',
      question: {
        en: 'What role do Route 53 Inbound and Outbound Resolver Endpoints play in hybrid cloud architectures?',
        bn: 'হাইব্রিড ক্লাউড আর্কিটেকচারে রুট ৫৩ ইনবাউন্ড এবং আউটবাউন্ড রিজলভার এন্ডপয়েন্ট কোন ভূমিকা পালন করে?',
      },
      options: [
        { en: 'They enable seamless conditional DNS forwarding between cloud Private Hosted Zones and on-premises enterprise data center DNS servers over VPN or Direct Connect', bn: 'ভিপিএন বা ডিরেক্ট কানেক্টের মাধ্যমে তারা ক্লাউড প্রাইভেট হোস্টেড জোন এবং অন-প্রিমিসেস ডেটা সেন্টারের ডিএনএসের মধ্যে পারস্পরিক যোগাযোগ সম্ভব করে' },
        { en: 'They print physical postage stamps for shipping server hardware', bn: 'তারা সার্ভার হার্ডওয়্যার পাঠানোর জন্য ডাকটিকিট প্রিন্ট করে' },
        { en: 'They record sound waves produced by server cooling fans', bn: 'তারা সার্ভারের ফ্যানের শব্দ তরঙ্গ রেকর্ড করে' },
        { en: 'They format USB drives using old FAT32 file systems', bn: 'তারা পুরোনো FAT32 ফাইল সিস্টেমে ইউএসবি ড্রাইভ ফরম্যাট করে' },
      ],
      answer: 0,
      hint: { en: 'Conditional DNS forwarding between cloud and on-premises.', bn: 'ক্লাউড এবং অন-প্রিমিসেসের মধ্যে শর্তসাপেক্ষ ডিএনএস ফরোয়ার্ডিং।' },
      explanation: {
        en: 'Resolver endpoints bridge DNS resolution between VPCs and corporate on-premises networks across private tunnels.',
        bn: 'রিজলভার এন্ডপয়েন্ট প্রাইভেট টানেলের ওপর দিয়ে ক্লাউড ভিপিসি এবং করপোরেট নেটওয়ার্কের মধ্যে ডিএনএস সংযোগ ঘটায়।',
      },
    },
    {
      id: 'dns-ex-3',
      kind: 'predict',
      topic: 'private-queries-benchmark-count',
      question: {
        en: 'In our benchmark of 2800 queries, how many internal queries were resolved directly to private IPs by the Private Hosted Zone (e.g. 1800 )?',
        bn: '২৮০০টি কুয়েরির বেঞ্চমার্কে প্রাইভেট হোস্টেড জোন দ্বারা সরাসরি প্রাইভেট আইপিতে কতগুলো অভ্যন্তরীণ কুয়েরি সমাধান করা হয়েছিল (যেমন 1800 )?',
      },
      answer: '1800',
      accept: ['1800', '1800 queries', 'eighteen hundred'],
      hint: { en: '1800', bn: '1800' },
      explanation: {
        en: '1800 internal queries resolved to private IPs in 0.85 ms, completely avoiding the public internet.',
        bn: '১৮০০টি অভ্যন্তরীণ কুয়েরি ইন্টারনেট বাদ দিয়ে সরাসরি মাত্র ০.৮৫ ms সময়ে প্রাইভেট আইপিতে সমাধান হয়েছিল।',
      },
    },
    {
      id: 'dns-ex-4',
      kind: 'predict',
      topic: 'resolver-hard-rate-limit',
      question: {
        en: 'What is the hard DNS lookup rate limit in packets per second per network interface on the default AWS VPC DNS resolver (e.g. 1024 )?',
        bn: 'এডাব্লিউএস ভিপিসি ডিএনএস রিজলভারে প্রতি নেটওয়ার্ক ইন্টারফেসে প্রতি সেকেন্ডে সর্বোচ্চ কত প্যাকেট অনুসন্ধানের কঠোর সীমা রয়েছে (যেমন 1024 )?',
      },
      answer: '1024',
      accept: ['1024', '1024 PPS', '1024 packets'],
      hint: { en: '1024', bn: '1024' },
      explanation: {
        en: 'The AWS hypervisor throttles DNS queries exceeding 1024 packets per second on any single network interface.',
        bn: 'এডাব্লিউএস হাইপারভাইজর যেকোনো একটি নেটওয়ার্ক ইন্টারফেসে প্রতি সেকেন্ডে ১০২৪ প্যাকেটের বেশি ডিএনএস কুয়েরি এলে তা আটকে দেয়।',
      },
    },
  ],
  quiz: {
    id: 'dns-and-the-dns-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'dns-qz-1',
        kind: 'mcq',
        topic: 'nat-hairpinning-prevention',
        question: {
          en: 'Why is resolving internal microservices via a Private Hosted Zone cheaper than querying a public domain through a NAT Gateway?',
          bn: 'ন্যাট গেটওয়ে দিয়ে পাবলিক ডোমেইন ডাকার চেয়ে প্রাইভেট হোস্টেড জোনের মাধ্যমে ইন্টারনাল সার্ভিস সমাধান করা কেন বেশি সাশ্রয়ী?',
        },
        options: [
          { en: 'Traffic stays entirely on the free internal VPC software switch, completely eliminating per-Gigabyte NAT Gateway data processing fees and cross-zone egress charges', bn: 'ট্রাফিক সম্পূর্ণ বিনামূল্যে অভ্যন্তরীণ ভিপিসিতে চলাচল করে, ফলে প্রতি গিগাবাইট ন্যাট গেটওয়ে ডেটা প্রসেসিং ও ক্রস-জোন ফি সম্পূর্ণ শূন্য হয়' },
          { en: 'Cloud providers offer cash discounts for every DNS record created', bn: 'ক্লাউড প্রদানকারীরা প্রতিটি ডিএনএস রেকর্ডের জন্য ক্যাশ ডিসকাউন্ট দেয়' },
          { en: 'Private DNS turns off the electric lights inside the server room', bn: 'প্রাইভেট ডিএনএস সার্ভার রুমের ভেতরের বাতি বন্ধ করে দেয়' },
          { en: 'It replaces all network switches with wooden furniture', bn: 'এটি সমস্ত নেটওয়ার্ক সুইচকে কাঠের আসবাবপত্র দিয়ে প্রতিস্থাপন করে' },
        ],
        answer: 0,
        hint: { en: 'Eliminates NAT Gateway data processing fees.', bn: 'ন্যাট গেটওয়ে ডেটা প্রসেসিং ফি সম্পূর্ণ দূর করে।' },
        explanation: {
          en: 'Keeping traffic on private IP paths avoids NAT hairpinning and avoids all metered internet gateway data charges.',
          bn: 'প্রাইভেট আইপিতে ট্রাফিক পরিচালনা করলে ন্যাট হেয়ার-পিনিং এড়ানো যায় এবং অতিরিক্ত ইন্টারনেট ডেটা খরচ বাঁচে।',
        },
      },
      {
        id: 'dns-qz-2',
        kind: 'mcq',
        topic: 'nodelocal-dnscache-solution',
        question: {
          en: 'How does deploying NodeLocal DNSCache in a Kubernetes cluster prevent the 1024 PPS resolver throttling bottleneck?',
          bn: 'কুবারনেটিস ক্লাস্টারে NodeLocal DNSCache স্থাপন কীভাবে ১০২৪ পিপিএস রিজলভার থ্রটলিং জটলা দূর করে?',
        },
        options: [
          { en: 'It runs a lightweight caching daemon directly on every cluster worker node, answering repetitive DNS lookups locally and minimizing upstream VPC resolver traffic', bn: 'এটি প্রতিটি কর্মী নোডে একটি হালকা ক্যাশিং ডিমন চালায়, যা স্থানীয়ভাবে বারবার আসা ডিএনএস কুয়েরির উত্তর দিয়ে ভিপিসি রিজলভারের চাপ কমায়' },
          { en: 'It permanently deletes all Kubernetes pod log files', bn: 'এটি কুবারনেটিস পডের সমস্ত লগ ফাইল চিরতরে মুছে ফেলে' },
          { en: 'It forces developers to memorize IP addresses instead of using domain names', bn: 'এটি ডেভেলপারদের ডোমেইনের বদলে মুখস্থ আইপি অ্যাড্রেস টাইপ করতে বাধ্য করে' },
          { en: 'It replaces Linux with Android on all server nodes', bn: 'এটি সব সার্ভারে লিনাক্সের বদলে অ্যান্ড্রয়েড ইনস্টল করে' },
        ],
        answer: 0,
        hint: { en: 'Local caching daemon on every worker node.', bn: 'প্রতিটি কর্মী নোডে লোকাল ক্যাশিং ডিমন।' },
        explanation: {
          en: 'NodeLocal DNSCache caches DNS queries locally on each node, drastically reducing external network trips to the VPC resolver.',
          bn: 'নোডলোকাল ডিএনএস ক্যাশ প্রতিটি নোডের র্যামে ডিএনএস ক্যাশ করে ভিপিসি রিজলভারে অপ্রয়োজনীয় নেটওয়ার্ক ট্রিপ প্রতিরোধ করে।',
        },
      },
      {
        id: 'dns-qz-3',
        kind: 'mcq',
        topic: 'dns-base-plus-two-address',
        question: {
          en: 'In an AWS VPC with CIDR 10.0.0.0/16, what specific IP address hosts the AmazonProvidedDNS recursive resolver?',
          bn: '10.0.0.0/16 সিআইডিআর বিশিষ্ট একটি এডাব্লিউএস ভিপিসিতে AmazonProvidedDNS রিজলভার কোন নির্দিষ্ট আইপিতে অবস্থান করে?',
        },
        options: [
          { en: '10.0.0.2 (the base network address plus two)', bn: '10.0.0.2 (মূল নেটওয়ার্ক অ্যাড্রেসের সাথে দুই যোগ করে)' },
          { en: '10.0.0.255 (the broadcast address)', bn: '10.0.0.255 (ব্রডকাস্ট অ্যাড্রেস)' },
          { en: '8.8.8.8 (Google public DNS)', bn: '8.8.8.8 (গুগল পাবলিক ডিএনএস)' },
          { en: '127.0.0.1 (local loopback)', bn: '127.0.0.1 (লোকাল লুপব্যাক)' },
        ],
        answer: 0,
        hint: { en: '10.0.0.2 (base + 2).', bn: '10.0.0.2 (মূল + ২)।' },
        explanation: {
          en: 'In all AWS subnets, the VPC CIDR base address plus two (.2) is reserved for the internal DNS resolver.',
          bn: 'এডাব্লিউএসের সব সাবনেটে মূল নেটওয়ার্ক অ্যাড্রেসের দ্বিতীয় আইপিটি (.২) অভ্যন্তরীণ ডিএনএস রিজলভারের জন্য নির্ধারিত।',
        },
      },
      {
        id: 'dns-qz-4',
        kind: 'predict',
        topic: 'external-resolutions-benchmark-count',
        question: {
          en: 'In our benchmark, how many external queries from public internet clients were resolved to the public ALB address (e.g. 1000 )?',
          bn: 'আমাদের বেঞ্চমার্কে পাবলিক ইন্টারনেট ক্লায়েন্টদের থেকে কতগুলো বহির্গামী কুয়েরি পাবলিক লোড ব্যালেন্সার আইপিতে সমাধান করা হয়েছিল (যেমন 1000 )?',
        },
        answer: '1000',
        accept: ['1000', '1000 queries', 'one thousand'],
        hint: { en: '1000', bn: '1000' },
        explanation: {
          en: '1000 queries originating outside the VPC were resolved by the public hosted zone to the public ALB address.',
          bn: 'ভিপিসির বাইরের ১০০০টি কুয়েরিকে পাবলিক হোস্টেড জোন পাবলিক লোড ব্যালেন্সারের আইপিতে সমাধান করেছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'balancers-and-the-balancer',
    title: {
      en: 'Cloud Load Balancers: Application (ALB), Network (NLB), and Gateway (GWLB)',
      bn: 'ক্লাউড লোড ব্যালেন্সার: অ্যাপ্লিকেশন (ALB), নেটওয়ার্ক (NLB) ও গেটওয়ে (GWLB)',
    },
  },
};
