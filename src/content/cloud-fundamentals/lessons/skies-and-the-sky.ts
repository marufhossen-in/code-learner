import type { Lesson } from '../../../lib/types';

export const SkiesAndTheSkyLesson: Lesson = {
  slug: 'skies-and-the-sky',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Beginner Introduction to Cloud Computing: The NIST Definition and Elastic Infrastructure',
    bn: 'ক্লাউড কম্পিউটিংয়ের প্রাথমিক পাঠ: এনআইএসটি সংজ্ঞা ও ইলাস্টিক পরিকাঠামো',
  },
  summary: {
    en: 'Master the foundations of cloud computing from physical datacenters to programmable infrastructure. Explore the NIST 5 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. Benchmark 1200 compute requests comparing upfront CapEx servers with pay-as-you-go OpEx cloud instances. Provision 800 cloud virtual machines in 45 seconds.',
    bn: 'শারীরিক ডেটা সেন্টার থেকে প্রোগ্রামেবল অবকাঠামো পর্যন্ত ক্লাউড কম্পিউটিংয়ের মৌলিক নীতি আয়ত্ত করুন। এনআইএসটি সংজ্ঞায়িত ৫ টি অপরিহার্য বৈশিষ্ট্য জানুন: অন-ডিমান্ড সেলফ-সার্ভিস, ব্রড নেটওয়ার্ক এক্সেস, রিসোর্স পুলিং, র্যাপিড ইলাস্টিসিটি এবং মেজার্ড সার্ভিস। বিশাল মূলধনী খরচের সার্ভারের সাথে পে-অ্যাজ-ইউ-গো ক্লাউড ইনস্ট্যান্সের তুলনা করে ১২০০টি কম্পিউট রিকোয়েস্টের বেঞ্চমার্ক। মাত্র ৪৫ সেকেন্ডে ৮০০টি ক্লাউড ভার্চুয়াল মেশিন তৈরি করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Programmable infrastructure, the NIST definition, and CapEx versus OpEx', bn: 'WHAT — প্রোগ্রামেবল অবকাঠামো, এনআইএসটি সংজ্ঞা এবং CapEx বনাম OpEx' },
    },
    {
      type: 'para',
      text: {
        en: 'For decades, deploying enterprise software required purchasing physical rack servers, leasing cooled datacenter floors, and provisioning redundant electrical grids months before writing code. Cloud computing inverted this economic and technical model by replacing fixed physical hardware with programmable, automated virtual resources. Through software-defined application programming interfaces (APIs), engineering teams provision compute instances, scalable storage, and global networks in seconds. According to the National Institute of Standards and Technology (NIST), true cloud systems are defined by 5 foundational capabilities: on-demand self-service, broad network access, multi-tenant resource pooling, rapid elasticity, and pay-as-you-go measured service.',
        bn: 'কয়েক দশক ধরে এন্টারপ্রাইজ সফটওয়্যার ডেপ্লয় করার জন্য শারীরিক সার্ভার কেনা, শীতাতপ নিয়ন্ত্রিত ডেটা সেন্টার ভাড়া নেওয়া এবং কোড লেখার কয়েক মাস আগে থেকেই বিদ্যুৎ সরবরাহ নিশ্চিত করতে হতো। ক্লাউড কম্পিউটিং অপরিবর্তনশীল হার্ডওয়্যারকে প্রোগ্রামেবল এবং স্বয়ংক্রিয় ভার্চুয়াল সম্পদে রূপান্তর করে এই অর্থনৈতিক ও প্রযুক্তিগত মডেলকে বদলে দিয়েছে। সফটওয়্যার অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেসের (API) মাধ্যমে প্রকৌশলীরা মাত্র কয়েক সেকেন্ডে কম্পিউট ইনস্ট্যান্স, স্কেলযোগ্য স্টোরেজ এবং বৈশ্বিক নেটওয়ার্ক তৈরি করতে পারেন। ন্যাশনাল ইনস্টিটিউট অব স্ট্যান্ডার্ডস অ্যান্ড টেকনোলজির (NIST) মতে ক্লাউডের ৫ টি প্রধান বৈশিষ্ট্য হলো: অন-ডিমান্ড সেলফ-সার্ভিস, ব্রড নেটওয়ার্ক এক্সেস, মাল্টি-টেন্যান্ট রিসোর্স পুলিং, র্যাপিড ইলাস্টিসিটি এবং মেজার্ড সার্ভিস।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'On-Premises CapEx vs Cloud OpEx: 1200 compute requests benchmarked', bn: 'অন-প্রিমিসেস CapEx বনাম ক্লাউড OpEx: ১২০০টি কম্পিউট রিকোয়েস্টের বেঞ্চমার্ক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="On-premises fixed capacity versus cloud elasticity">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Workload Spike</text>
<text x="85" y="62" text-anchor="middle" font-size="7" fill="#475569">Peak Traffic Event</text>
<text x="85" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">1200 Demands</text>

<rect x="30" y="95" width="110" height="34" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="85" y="110" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">800 Overflow</text>
<text x="85" y="122" text-anchor="middle" font-size="6" fill="#dc2626">Unplanned surge traffic</text>

<rect x="30" y="145" width="110" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="160" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">400 Baseline</text>
<text x="85" y="172" text-anchor="middle" font-size="6" fill="#475569">Normal daily requests</text>

<line x1="150" y1="105" x2="190" y2="70" stroke="#dc2626" stroke-width="2"/>
<polygon points="190,66 200,70 190,74" fill="#dc2626"/>

<line x1="150" y1="155" x2="190" y2="165" stroke="#16a34a" stroke-width="2"/>
<polygon points="190,161 200,165 190,169" fill="#16a34a"/>

<rect x="200" y="25" width="200" height="90" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="300" y="44" text-anchor="middle" font-size="9" font-weight="800" fill="#991b1b">Fixed Datacenter (CapEx Model)</text>
<text x="300" y="58" text-anchor="middle" font-size="7" fill="#dc2626">Hard Capacity Ceiling: 400 Server Slots</text>
<text x="300" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">800 Requests Dropped (Capacity Outage)</text>
<text x="300" y="88" text-anchor="middle" font-size="6" fill="#475569">Procurement lead time: 6 to 12 weeks to buy servers</text>

<rect x="200" y="130" width="200" height="90" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="149" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Elastic Cloud (OpEx Model)</text>
<text x="300" y="163" text-anchor="middle" font-size="7" fill="#15803d">Automated Autoscaling Group</text>
<text x="300" y="179" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Scaled 400 to 1200 Instances in 45 Seconds</text>
<text x="300" y="193" text-anchor="middle" font-size="6" fill="#475569">0 requests dropped; pay only for seconds used</text>

<line x1="400" y1="70" x2="440" y2="70" stroke="#dc2626" stroke-width="2"/>
<polygon points="440,66 450,70 440,74" fill="#dc2626"/>

<line x1="400" y1="175" x2="440" y2="175" stroke="#16a34a" stroke-width="2"/>
<polygon points="440,171 450,175 440,179" fill="#16a34a"/>

<rect x="450" y="25" width="170" height="90" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="44" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Business Outcome (CapEx)</text>
<text x="535" y="62" text-anchor="middle" font-size="7" fill="#b91c1c">Service degradation</text>
<text x="535" y="76" text-anchor="middle" font-size="7" fill="#dc2626">Lost customer revenue</text>
<text x="535" y="92" text-anchor="middle" font-size="6" fill="#64748b">Idle servers waste power off-peak</text>

<rect x="450" y="130" width="170" height="90" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="149" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Business Outcome (OpEx)</text>
<text x="535" y="167" text-anchor="middle" font-size="7" fill="#166534">100% Request Success</text>
<text x="535" y="181" text-anchor="middle" font-size="7" fill="#15803d">Zero upfront capital spent</text>
<text x="535" y="197" text-anchor="middle" font-size="6" fill="#64748b">Instances terminate when surge ends</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">On-premises hits hard physical ceilings; cloud elasticity scales instantly on demand</text>
</svg>`,
      caption: {
        en: 'Workload provisioning benchmark across 1200 compute requests. Fixed on-premises servers hit a hard ceiling at 400 slots, dropping 800 requests due to capacity exhaustion. In contrast, elastic cloud infrastructure automatically scales out from 400 to 1200 instances in 45 seconds, handling all incoming traffic with zero dropped requests.',
        bn: '১২০০টি কম্পিউট রিকোয়েস্টে পরিকাঠামো পরিমাপের বেঞ্চমার্ক। অন-প্রিমিসেস সার্ভার ৪০০ স্লটে সীমাবদ্ধ থাকায় ধারণক্ষমতার অভাবে ৮০০টি রিকোয়েস্ট ড্রপ করে। বিপরীতে, ইলাস্টিক ক্লাউড অবকাঠামো মাত্র ৪৫ সেকেন্ডে স্বয়ংক্রিয়ভাবে ৪০০ থেকে ১২০০ ইনস্ট্যান্সে স্কেল করে শূন্য রিকোয়েস্ট ড্রপ করে সমস্ত ট্রাফিক পরিচালনা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'NIST Cloud Definition',
          def: {
            en: 'The industry-standard definition by NIST (SP 800-145) establishing 5 essential characteristics, 3 service models, and 4 deployment models.',
            bn: 'এনআইএসটি নির্দেশিত আন্তর্জাতিক মান যা ক্লাউড কম্পিউটিংয়ের ৫ টি অপরিহার্য বৈশিষ্ট্য, ৩ টি সার্ভিস ও ৪ টি ডেপ্লয়মেন্ট মডেল নির্ধারণ করে।',
          },
        },
        {
          term: 'On-Demand Self-Service',
          def: {
            en: 'The capability for a consumer to unilaterally provision computing capabilities (such as server time and storage) without human interaction.',
            bn: 'কোনো মানব প্রতিনিধির সাহায্য ছাড়াই স্বয়ংক্রিয়ভাবে এপিআই বা কনসোলের মাধ্যমে নিজস্ব কম্পিউট বা স্টোরেজ সুবিধা চালু করার ক্ষমতা।',
          },
        },
        {
          term: 'Capital Expenditure (CapEx)',
          def: {
            en: 'Upfront major financial investment to purchase fixed physical assets (servers, datacenter buildings, generators) depreciated over years.',
            bn: 'শারীরিক পরিকাঠামো বা সার্ভার কেনার জন্য পূর্বে এককালীন বিশাল আর্থিক বিনিয়োগ যা কয়েক বছর ধরে অবচয় ধরা হয়।',
          },
        },
        {
          term: 'Operational Expenditure (OpEx)',
          def: {
            en: 'Ongoing day-to-day operational expenses where computing resources are rented on-demand with pay-as-you-go per-second billing.',
            bn: 'নিয়মিত কার্যক্রম পরিচালনার খরচ যেখানে কম্পিউট সেবা অন-ডিমান্ড ভাড়া নেওয়া হয় এবং ব্যবহৃত সেকেন্ডের ভিত্তিতে বিল দেওয়া হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript workload capacity simulator: fixed CapEx versus elastic OpEx', bn: 'HOW — টাইপস্ক্রিপ্ট ধারণক্ষমতা সিমুলেটর: অপরিবর্তনীয় CapEx বনাম ইলাস্টিক OpEx' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how fixed on-premises hardware compares with elastic cloud provisioning when processing 1200 incoming requests during a traffic surge, examine this runnable TypeScript benchmark simulator:',
        bn: 'একটি ট্রাফিক বৃদ্ধির সময় অন-প্রিমিসেস হার্ডওয়্যারের তুলনায় ইলাস্টিক ক্লাউড কীভাবে ১২০০টি রিকোয়েস্ট সফলভাবে পরিচালনা করে তা দেখতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'cloud-elasticity-benchmark.ts',
      code: `interface WorkloadSurge {
  totalIncomingRequests: number;
  fixedDatacenterCapacity: number;
}

interface CapacityComparisonReport {
  totalRequests: number;
  onPremDroppedRequests: number;
  onPremFulfilledRequests: number;
  cloudScaledInstances: number;
  cloudDroppedRequests: number;
  cloudScaleOutTimeSeconds: number;
}

function simulateWorkloadProvisioning(surge: WorkloadSurge): CapacityComparisonReport {
  // On-Premises CapEx: Rigid ceiling fixed at physical server count
  const onPremFulfilled = Math.min(surge.totalIncomingRequests, surge.fixedDatacenterCapacity);
  const onPremDropped = Math.max(0, surge.totalIncomingRequests - surge.fixedDatacenterCapacity);

  // Cloud OpEx: Rapid Elasticity scales out 800 additional instances in 45 seconds
  const cloudInstancesNeeded = surge.totalIncomingRequests;
  const cloudDropped = 0; // Elastic pool automatically accommodates 100% of demand

  return {
    totalRequests: surge.totalIncomingRequests,
    onPremDroppedRequests: onPremDropped,
    onPremFulfilledRequests: onPremFulfilled,
    cloudScaledInstances: cloudInstancesNeeded,
    cloudDroppedRequests: cloudDropped,
    cloudScaleOutTimeSeconds: 45,
  };
}

// Benchmark 1200 incoming compute requests:
// Baseline datacenter capacity is fixed at 400 slots
const report = simulateWorkloadProvisioning({
  totalIncomingRequests: 1200,
  fixedDatacenterCapacity: 400,
});

console.log(\`Total Incoming Workload Requests: \${report.totalRequests}\`);
// Total Incoming Workload Requests: 1200
console.log(\`On-Premises Fulfilled Requests: \${report.onPremFulfilledRequests}\`);
// On-Premises Fulfilled Requests: 400
console.log(\`On-Premises Dropped Requests (Outage): \${report.onPremDroppedRequests}\`);
// On-Premises Dropped Requests (Outage): 800
console.log(\`Cloud Scaled Total Instances: \${report.cloudScaledInstances}\`);
// Cloud Scaled Total Instances: 1200
console.log(\`Cloud Dropped Requests: \${report.cloudDroppedRequests}\`);
// Cloud Dropped Requests: 0
console.log(\`Cloud Autoscaling Duration: \${report.cloudScaleOutTimeSeconds} seconds\`);
// Cloud Autoscaling Duration: 45 seconds`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The Five NIST Cloud Pillars in Production', bn: 'প্রোডাকশনে এনআইএসটি ক্লাউডের ৫ টি মূল স্তম্ভ' },
      text: {
        en: 'A system is not truly cloud computing simply because it runs virtual machines. If provisioning a new server requires submitting a helpdesk ticket and waiting 3 days for a system administrator to approve it manually, the architecture violates the On-Demand Self-Service principle. True cloud infrastructure exposes programmable software APIs that allow automation scripts and autoscalers to provision, configure, and destroy resources without human gatekeepers.',
        bn: 'ভার্চুয়াল মেশিন চালালেই কোনো সিস্টেমকে ক্লাউড বলা যায় না। যদি একটি নতুন সার্ভার চালুর জন্য টিকিট খুলে কোনো সিস্টেম অ্যাডমিনের ম্যানুয়াল অনুমোদনের জন্য ৩ দিন অপেক্ষা করতে হয়, তবে তা অন-ডিমান্ড সেলফ-সার্ভিসের মূল নীতি লঙ্ঘন করে। প্রকৃত ক্লাউড অবকাঠামো এমন প্রোগ্রামেবল এপিআই উন্মুক্ত করে যার মাধ্যমে অটোমেশন স্ক্রিপ্ট মানুষের হস্তক্ষেপ ছাড়াই যেকোনো মুহূর্তে রিসোর্স তৈরি বা মুছে ফেলতে পারে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Capital Expenditure (CapEx) vs Operational Expenditure (OpEx)', bn: 'ক্যাপিটাল এক্সপেন্ডিচার (CapEx) বনাম অপারেশনাল এক্সপেন্ডিচার (OpEx)' },
      left: {
        title: { en: 'On-Premises CapEx Model', bn: 'অন-প্রিমিসেস CapEx মডেল' },
        points: [
          { en: 'Requires massive upfront capital investment in physical server racks, switches, and cooling systems', bn: 'সার্ভার র্যাক, নেটওয়ার্ক সুইচ এবং কুলিং সিস্টেম কেনার জন্য শুরুতে বিশাল বিনিয়োগের প্রয়োজন হয়' },
          { en: 'Hardware procurement and installation takes 6 to 12 weeks of lead time before production', bn: 'হার্ডওয়্যার কেনা ও ইনস্টলেশন সম্পন্ন করতে উৎপাদনের আগে ৬ থেকে ১২ সপ্তাহ সময় নষ্ট হয়' },
          { en: 'Capacity is rigid; unpredicted traffic surges cause catastrophic service outages and dropped packets', bn: 'ধারণক্ষমতা সীমাবদ্ধ; অপ্রত্যাশিত ট্রাফিক বৃদ্ধির কারণে সিস্টেম সম্পূর্ণ ধসে পড়ে' },
          { en: 'Off-peak compute capacity sits completely idle, wasting electricity, real estate, and money', bn: 'পিক সময়ের বাইরে কেনা অতিরিক্ত সার্ভারগুলো অলস বসে থেকে বিদ্যুৎ ও অর্থ অপচয় করে' },
        ],
      },
      right: {
        title: { en: 'Cloud OpEx Model', bn: 'ক্লাউড OpEx মডেল' },
        points: [
          { en: 'Zero upfront hardware investment; infrastructure costs are paid pay-as-you-go by the second', bn: 'কোনো প্রাথমিক হার্ডওয়্যার বিনিয়োগ নেই; ব্যবহৃত সেকেন্ডের ভিত্তিতে পরিকাঠামো খরচ প্রদান করা হয়' },
          { en: 'Compute resources are provisioned via programmable APIs in seconds without procurement delays', bn: 'কোনো বিলম্ব ছাড়াই মাত্র কয়েক সেকেন্ডে এপিআই-এর মাধ্যমে কম্পিউট রিসোর্স তৈরি করা যায়' },
          { en: 'Rapid elasticity enables automatic scale-out during demand surges and scale-in when traffic subsides', bn: 'ইলাস্টিসিটির সাহায্যে ট্রাফিক বাড়লে নিজে থেকে স্কেল-আউট হয় এবং চাপ কমলে নিজে থেকে বন্ধ হয়ে যায়' },
          { en: 'Capital is preserved for core business innovation rather than maintaining datacenter real estate', bn: 'ডেটা সেন্টার রক্ষণাবেক্ষণের বদলে মূল ব্যবসায়িক উদ্ভাবনে মূলধন ব্যয় করা সম্ভব হয়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'NIST Cloud Characteristic', bn: 'এনআইএসটি ক্লাউড বৈশিষ্ট্য' },
        { en: 'Technical Implementation', bn: 'প্রযুক্তিগত বাস্তবায়ন' },
        { en: 'Engineering Impact', bn: 'ইঞ্জিনিয়ারিং প্রভাব' },
        { en: 'CapEx vs OpEx Factor', bn: 'খরচের ধরন' },
      ],
      rows: [
        [
          { en: 'On-Demand Self-Service', bn: 'অন-ডিমান্ড সেলফ-সার্ভিস' },
          { en: 'Programmable REST APIs & Console', bn: 'প্রোগ্রামেবল এপিআই ও কনসোল' },
          { en: 'Zero human admin ticket delays', bn: 'ম্যানুয়াল অনুমোদনের অপেক্ষা নেই' },
          { en: 'Instant OpEx provisioning', bn: 'তাত্ক্ষণিক পরিচালনা খরচ' },
        ],
        [
          { en: 'Broad Network Access', bn: 'ব্রড নেটওয়ার্ক এক্সেস' },
          { en: 'HTTPS, VPC endpoints, Anycast', bn: 'HTTPS, ভিপিসি এন্ডপয়েন্ট' },
          { en: 'Accessible from any device globally', bn: 'বিশ্বের যেকোনো প্রান্ত থেকে প্রবেশযোগ্য' },
          { en: 'Standardized access protocols', bn: 'স্ট্যান্ডার্ড নেটওয়ার্ক প্রোটোকল' },
        ],
        [
          { en: 'Resource Pooling', bn: 'রিসোর্স পুলিং' },
          { en: 'Multi-tenant Type 1 hypervisors', bn: 'মাল্টি-টেন্যান্ট টাইপ ১ হাইপারভাইজর' },
          { en: 'High physical hardware efficiency', bn: 'হার্ডওয়্যারের সর্বোচ্চ ব্যবহার' },
          { en: 'Economy of global scale', bn: 'ব্যাপক পরিসরে খরচ সাশ্রয়' },
        ],
        [
          { en: 'Rapid Elasticity', bn: 'র্যাপিড ইলাস্টিসিটি' },
          { en: 'Dynamic Autoscaling Groups', bn: 'ডায়নামিক অটো-স্কেলিং গ্রুপ' },
          { en: 'Instant scale matching real demand', bn: 'প্রয়োজনে তাত্ক্ষণিক স্কেলিং' },
          { en: 'Eliminates overprovisioning waste', bn: 'অপ্রয়োজনীয় পরিকাঠামো খরচ রোধ' },
        ],
        [
          { en: 'Measured Service', bn: 'মেজার্ড সার্ভিস' },
          { en: 'Per-second metric telemetry', bn: 'প্রতি সেকেন্ডে ব্যবহারের পরিমাপ' },
          { en: 'Transparent consumption billing', bn: 'স্বচ্ছ ব্যবহারভিত্তিক বিলিং' },
          { en: 'Pure pay-as-you-go model', bn: 'বিশুদ্ধ পে-অ্যাজ-ইউ-গো ব্যবস্থা' },
        ],
      ],
      caption: {
        en: 'The 5 NIST essential characteristics of cloud computing mapped to enterprise engineering benefits.',
        bn: 'এনআইএসটি ক্লাউড কম্পিউটিংয়ের ৫ টি মূল বৈশিষ্ট্যের সাথে এন্টারপ্রাইজ ইঞ্জিনিয়ারিং সুবিধার তুলনামূলক ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Evaluate Workload Volatility', bn: 'ধাপ ১ — কাজের চাহিদার ওঠানামা মূল্যায়ন' },
          text: {
            en: 'Analyze request patterns to determine whether workloads have predictable steady baselines or volatile seasonal surges.',
            bn: 'কাজের ট্রাফিক বিশ্লেষণ করে নির্ধারণ করুন যে চাহিদা কি সারা বছর সমান থাকে নাকি হঠাৎ বৃদ্ধি পায়।',
          },
        },
        {
          title: { en: 'Step 2 — Model CapEx versus OpEx Total Cost', bn: 'ধাপ ২ — সামগ্রিক খরচের তুলনামূলক মডেলিং' },
          text: {
            en: 'Calculate total cost of ownership including power, hardware lifecycle refresh, and facility real estate versus on-demand billing.',
            bn: 'বিদ্যুৎ, হার্ডওয়্যার প্রতিস্থাপন ও ডেটা সেন্টার রক্ষণাবেক্ষণের খরচের সাথে ক্লাউড পে-অ্যাজ-ইউ-গোর তুলনা করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Eliminate Manual Gatekeepers with Self-Service APIs', bn: 'ধাপ ৩ — সেলফ-সার্ভিস এপিআই দিয়ে ম্যানুয়াল বিলম্ব দূরীকরণ' },
          text: {
            en: 'Replace internal administrative request tickets with Infrastructure as Code pipelines and automated provisioning scripts.',
            bn: 'ম্যানুয়াল রিকোয়েস্ট টিকিটের বদলে ইনফ্রাস্ট্রাকচার অ্যাজ কোড এবং স্বয়ংক্রিয় প্রোভিশনিং স্ক্রিপ্ট ব্যবহার করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Configure Dynamic Horizontal Elasticity', bn: 'ধাপ ৪ — ডায়নামিক অনুভূমিক ইলাস্টিসিটি কনফিগার' },
          text: {
            en: 'Set up autoscaling metrics tracking CPU and request count to add instances during traffic peaks and destroy them off-peak.',
            bn: 'সিপিইউ এবং রিকোয়েস্টের সংখ্যা পর্যবেক্ষণ করে ট্রাফিকের চাপে নতুন সার্ভার যুক্ত করার স্বয়ংক্রিয় নিয়ম চালু করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'cf-ex-1',
      kind: 'mcq',
      topic: 'on-demand-self-service-definition',
      question: {
        en: 'What does the NIST essential characteristic On-Demand Self-Service mean in practical engineering terms?',
        bn: 'ব্যবহারিক ইঞ্জিনিয়ারিংয়ের ক্ষেত্রে এনআইএসটি অপরিহার্য বৈশিষ্ট্য অন-ডিমান্ড সেলফ-সার্ভিস বলতে কী বোঝায়?',
      },
      options: [
        { en: 'Engineering teams can provision compute, storage, and networking unilaterally through software APIs or consoles without human administrator approval', bn: 'প্রকৌশলীরা সিস্টেম অ্যাডমিনের ম্যানুয়াল অনুমোদন ছাড়াই এপিআই বা কনসোলের মাধ্যমে তাৎক্ষণিকভাবে যেকোনো রিসোর্স তৈরি করতে পারেন' },
        { en: 'Computers repair their own broken silicon chips using magic lasers', bn: 'কম্পিউটার তাদের নষ্ট সিলিকন চিপগুলো জাদুকরী লেজার দিয়ে নিজ থেকে মেরামত করে' },
        { en: 'All company employees receive free internet at their private homes', bn: 'কোম্পানির সমস্ত কর্মী তাদের ব্যক্তিগত বাসায় বিনামূল্যে ইন্টারনেট সুবিধা পান' },
        { en: 'Servers are powered exclusively by solar panels installed on office roofs', bn: 'সার্ভারগুলো কেবল অফিসের ছাদে লাগানো সোলার প্যানেলের বিদ্যুৎ দিয়ে পরিচালিত হয়' },
      ],
      answer: 0,
      hint: { en: 'Provisioning without human administrator intervention.', bn: 'কোনো মানব প্রতিনিধির ম্যানুয়াল অনুমোদন ছাড়াই স্বয়ংক্রিয় ব্যবস্থা।' },
      explanation: {
        en: 'On-demand self-service eliminates operational ticketing bottlenecks by automating infrastructure provisioning via APIs.',
        bn: 'অন-ডিমান্ড সেলফ-সার্ভিস এপিআই অটোমেশনের মাধ্যমে টিকিট খুলে অ্যাডমিনের জন্য অপেক্ষার সময় সম্পূর্ণ দূর করে।',
      },
    },
    {
      id: 'cf-ex-2',
      kind: 'mcq',
      topic: 'capex-vs-opex-core-difference',
      question: {
        en: 'What is the primary financial advantage of Operational Expenditure (OpEx) over Capital Expenditure (CapEx)?',
        bn: 'ক্যাপিটাল এক্সপেন্ডিচার (CapEx)-এর তুলনায় অপারেশনাল এক্সপেন্ডিচার (OpEx)-এর প্রধান আর্থিক সুবিধা কোনটি?',
      },
      options: [
        { en: 'OpEx eliminates large upfront capital investments in physical hardware, allowing organizations to pay strictly for the compute capacity consumed by the second', bn: 'OpEx হার্ডওয়্যারে বিপুল এককালীন মূলধনী বিনিয়োগের ঝুঁকি দূর করে এবং প্রতিষ্ঠানকে কেবল ব্যবহৃত সেকেন্ডের ভিত্তিতে বিল পরিশোধের সুবিধা দেয়' },
        { en: 'OpEx makes all software applications completely free of any cost forever', bn: 'OpEx সমস্ত সফটওয়্যার অ্যাপ্লিকেশনকে আজীবনের জন্য সম্পূর্ণ বিনামূল্যে ব্যবহার করতে দেয়' },
        { en: 'OpEx guarantees that computers will never encounter a software bug', bn: 'OpEx নিশ্চয়তা দেয় যে সফটওয়্যারে কোনোদিন কোনো বাগ বা ত্রুটি ঘটবে না' },
        { en: 'OpEx eliminates the need for software developers to write code', bn: 'OpEx সফটওয়্যার ডেভেলপারদের কোড লেখার প্রয়োজনীয়তা বাতিল করে দেয়' },
      ],
      answer: 0,
      hint: { en: 'Zero upfront investment; pay-as-you-go billing.', bn: 'কোনো প্রাথমিক মূলধনী বিনিয়োগ নেই; ব্যবহারভিত্তিক বিলিং।' },
      explanation: {
        en: 'OpEx converts fixed physical asset purchases into flexible operational costs that track actual business demand directly.',
        bn: 'OpEx শারীরিক পরিকাঠামোর এককালীন খরচকে ব্যবসায়িক চাহিদার সাথে মানানসই নমনীয় খরচে রূপান্তর করে।',
      },
    },
    {
      id: 'cf-ex-3',
      kind: 'predict',
      topic: 'onprem-dropped-requests-benchmark',
      question: {
        en: 'In our provisioning benchmark of 1200 requests, how many compute requests were dropped by the fixed on-premises datacenter (e.g. 800 )?',
        bn: '১২০০টি রিকোয়েস্টের প্রোভিশনিং বেঞ্চমার্কে নির্দিষ্ট অন-প্রিমিসেস ডেটা সেন্টার কতগুলো কম্পিউট রিকোয়েস্ট ড্রপ করেছিল (যেমন 800 )?',
      },
      answer: '800',
      accept: ['800', '800 requests', 'eight hundred'],
      hint: { en: '800', bn: '800' },
      explanation: {
        en: 'Because the on-premises facility had a rigid ceiling of 400 slots, 800 requests were rejected due to capacity exhaustion.',
        bn: 'অন-প্রিমিসেস পরিকাঠামো ৪০০ স্লটে সীমাবদ্ধ থাকায় ধারণক্ষমতার অভাবে ৮০০টি অতিরিক্ত রিকোয়েস্ট সরাসরি বাতিল হয়েছিল।',
      },
    },
    {
      id: 'cf-ex-4',
      kind: 'predict',
      topic: 'nist-essential-characteristics-count',
      question: {
        en: 'According to the official NIST SP 800-145 definition, how many essential characteristics define true cloud computing (e.g. 5 )?',
        bn: 'অফিসিয়াল এনআইএসটি এসপি ৮০০-১৪৫ সংজ্ঞা অনুসারে কতটি অপরিহার্য বৈশিষ্ট্য একটি বাস্তব ক্লাউড কম্পিউটিংকে সংজ্ঞায়িত করে (যেমন 5 )?',
      },
      answer: '5',
      accept: ['5', 'five', '5 characteristics'],
      hint: { en: '5', bn: '5' },
      explanation: {
        en: 'NIST defines exactly 5 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.',
        bn: 'এনআইএসটি সুনির্দিষ্টভাবে ৫ টি মূল বৈশিষ্ট্য নির্ধারণ করেছে: অন-ডিমান্ড সেলফ-সার্ভিস, ব্রড নেটওয়ার্ক এক্সেস, রিসোর্স পুলিং, র্যাপিড ইলাস্টিসিটি এবং মেজার্ড সার্ভিস।',
      },
    },
  ],
  quiz: {
    id: 'skies-and-the-sky-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'cf-qz-1',
        kind: 'mcq',
        topic: 'rapid-elasticity-mechanism',
        question: {
          en: 'How does Rapid Elasticity protect web services during sudden viral traffic surges compared to physical datacenters?',
          bn: 'শারীরিক ডেটা সেন্টারের তুলনায় আকস্মিক ভাইরাল ট্রাফিকের সময় র্যাপিড ইলাস্টিসিটি কীভাবে ওয়েব সার্ভিসকে সচল রাখে?',
        },
        options: [
          { en: 'Autoscaling groups dynamically spawn additional virtual compute instances within seconds to match load and automatically terminate them when demand drops', bn: 'অটো-স্কেলিং গ্রুপ মাত্র কয়েক সেকেন্ডে ট্রাফিকের সাথে পাল্লা দিয়ে নতুন ভার্চুয়াল মেশিন তৈরি করে এবং চাপ কমলে সেগুলো স্বয়ংক্রিয়ভাবে বন্ধ করে দেয়' },
          { en: 'It permanently slows down the internet connection of visiting clients', bn: 'এটি ওয়েবসাইটে আসা ব্যবহারকারীদের ইন্টারনেট গতি চিরতরে কমিয়ে দেয়' },
          { en: 'It turns all website images into black and white sketches', bn: 'এটি ওয়েবসাইটের সমস্ত রঙিন ছবিকে সাদা-কালো স্কেচে রূপান্তর করে' },
          { en: 'It sends text messages to the police department to report high traffic', bn: 'এটি অতিরিক্ত ট্রাফিকের কথা জানিয়ে পুলিশ বিভাগের কাছে বার্তা পাঠায়' },
        ],
        answer: 0,
        hint: { en: 'Dynamically spawns instances in seconds and terminates them off-peak.', bn: 'কয়েক সেকেন্ডে নতুন ইনস্ট্যান্স তৈরি করে এবং চাহিদা কমলে বন্ধ করে দেয়।' },
        explanation: {
          en: 'Rapid elasticity enables instantaneous horizontal scaling, ensuring high availability during unpredicted traffic spikes.',
          bn: 'র্যাপিড ইলাস্টিসিটি তাত্ক্ষণিক অনুভূমিক স্কেলিং নিশ্চিত করে আকস্মিক ট্রাফিকের চাপেও সার্ভার সচল রাখে।',
        },
      },
      {
        id: 'cf-qz-2',
        kind: 'mcq',
        topic: 'resource-pooling-multi-tenancy',
        question: {
          en: 'What architectural technique allows cloud providers to deliver high resource efficiency through Resource Pooling?',
          bn: 'রিসোর্স পুলিংয়ের মাধ্যমে ক্লাউড প্রদানকারীরা কোন কৌশলের সাহায্যে হার্ডওয়্যারের সর্বোচ্চ ব্যবহার নিশ্চিত করে?',
        },
        options: [
          { en: 'Multi-tenant Type 1 hypervisors dynamically allocate slices of shared physical CPU, memory, and networking to separate customers with cryptographic isolation', bn: 'মাল্টি-টেন্যান্ট টাইপ ১ হাইপারভাইজর শক্তিশালী ক্রিপ্টোগ্রাফিক নিরাপত্তার মাধ্যমে ভিন্ন গ্রাহকদের মধ্যে শেয়ার্ড হার্ডওয়্যার রিসোর্স গতিশীলভাবে বণ্টন করে' },
          { en: 'Multiple companies physically share the exact same computer keyboard', bn: 'একাধিক কোম্পানি শারীরিকভাবে একই কিবোর্ড পালা করে ব্যবহার করে' },
          { en: 'Datacenter servers are transported across the city on flatbed trucks', bn: 'ডেটা সেন্টারের সার্ভারগুলোকে ট্রাকে করে শহরের বিভিন্ন স্থানে ঘোরানো হয়' },
          { en: 'Computers are submerged in municipal swimming pools for water cooling', bn: 'কম্পিউটারগুলোকে ঠান্ডা রাখার জন্য শহরের সুইমিং পুলে ডুবিয়ে রাখা হয়' },
        ],
        answer: 0,
        hint: { en: 'Multi-tenant hypervisors dynamically allocating isolated slices of hardware.', bn: 'মাল্টি-টেন্যান্ট হাইপারভাইজর সুরক্ষিতভাবে শেয়ার্ড হার্ডওয়্যার বণ্টন করে।' },
        explanation: {
          en: 'Resource pooling leverages multi-tenant virtualization to maximize physical hardware utilization across thousands of workloads.',
          bn: 'রিসোর্স পুলিং মাল্টি-টেন্যান্ট ভার্চুয়ালাইজেশনের মাধ্যমে হাজার হাজার গ্রাহকের মধ্যে হার্ডওয়্যারের সর্বোচ্চ ব্যবহার নিশ্চিত করে।',
        },
      },
      {
        id: 'cf-qz-3',
        kind: 'mcq',
        topic: 'capex-procurement-latency',
        question: {
          en: 'Why does traditional CapEx datacenter expansion often fail to meet rapid business growth demands?',
          bn: 'ব্যবসায়ের দ্রুত বৃদ্ধির সময় ঐতিহ্যবাহী CapEx ডেটা সেন্টার সম্প্রসারণ কেন প্রায়ই ব্যর্থ হয়?',
        },
        options: [
          { en: 'Procuring, shipping, racking, cabling, and configuring physical enterprise servers introduces 6 to 12 weeks of procurement lead time', bn: 'শারীরিক সার্ভার কেনা, শিপিং, র্যাকিং, ক্যাবলিং ও কনফিগার করতে ৬ থেকে ১২ সপ্তাহ সময় অপচয় হয়' },
          { en: 'Physical computer servers can only be purchased with solid gold bars', bn: 'শারীরিক সার্ভার কেবল খাঁটি সোনার বার দিয়ে কেনা সম্ভব' },
          { en: 'Datacenter buildings can only be constructed during winter months', bn: 'ডেটা সেন্টার ভবন কেবল শীতকালের মাসগুলোতে তৈরি করা সম্ভব' },
          { en: 'Operating systems refuse to boot on physical server hardware', bn: 'শারীরিক সার্ভার হার্ডওয়্যারে অপারেটিং সিস্টেম বুট হতে অস্বীকৃতি জানায়' },
        ],
        answer: 0,
        hint: { en: 'Procurement lead time takes 6 to 12 weeks.', bn: 'হার্ডওয়্যার সংগ্রহ ও স্থাপনে ৬ থেকে ১২ সপ্তাহ সময় লাগে।' },
        explanation: {
          en: 'Physical hardware procurement lead times are measured in months, making it impossible to respond quickly to sudden demand surges.',
          bn: 'শারীরিক হার্ডওয়্যার সংগ্রহ করতে কয়েক মাস সময় লাগে, যা আকস্মিক ব্যবসায়িক বৃদ্ধির চাহিদা পূরণে অক্ষম।',
        },
      },
      {
        id: 'cf-qz-4',
        kind: 'predict',
        topic: 'cloud-scaleout-seconds-benchmark',
        question: {
          en: 'In our benchmark, how many seconds did the elastic cloud infrastructure take to scale out 800 additional virtual machines (e.g. 45 )?',
          bn: 'আমাদের বেঞ্চমার্কে ইলাস্টিক ক্লাউড অবকাঠামো অতিরিক্ত ৮০০টি ভার্চুয়াল মেশিন তৈরি করতে কত সেকেন্ড সময় নিয়েছিল (যেমন 45 )?',
        },
        answer: '45',
        accept: ['45', '45 seconds', 'forty five'],
        hint: { en: '45', bn: '45' },
        explanation: {
          en: 'Cloud autoscalers provisioned and booted 800 additional virtual instances in 45 seconds to absorb the traffic spike.',
          bn: 'ইলাস্টিক ক্লাউড অটো-স্কেলার মাত্র ৪৫ সেকেন্ডে অতিরিক্ত ৮০০টি ভার্চুয়াল মেশিন প্রস্তুত করে ট্রাফিকের চাপ সামলেছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'zones-and-the-zone',
    title: {
      en: 'Global Cloud Infrastructure: Regions, Availability Zones, and Edge Locations',
      bn: 'গ্লোবাল ক্লাউড ইনফ্রাস্ট্রাকচার: রিজিয়ন, অ্যাভেইলেবিলিটি জোন ও এজ লোকেশন',
    },
  },
};
