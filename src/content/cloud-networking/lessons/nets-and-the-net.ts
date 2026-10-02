import type { Lesson } from '../../../lib/types';

export const NetsAndTheNetLesson: Lesson = {
  slug: 'nets-and-the-net',
  tech: 'cloud-networking',
  title: {
    en: 'Beginner Introduction to Cloud Networking: Virtual Private Clouds (VPC) and CIDR Architecture',
    bn: 'ক্লাউড নেটওয়ার্কিংয়ের প্রাথমিক ধারণা: ভার্চুয়াল প্রাইভেট ক্লাউড (VPC) ও সিআইডিআর আর্কিটেকচার',
  },
  summary: {
    en: 'Beginner introduction to Cloud Networking and Virtual Private Clouds (VPC). Learn how software-defined networks carve isolated tenant environments out of public cloud data centers. Partition a 10.0.0.0/16 address block of 65536 IPs into 3 distinct subnets of 256 addresses each. Understand why cloud providers reserve 5 IP addresses per subnet, leaving 251 usable host addresses per zone.',
    bn: 'ক্লাউড নেটওয়ার্কিং এবং ভার্চুয়াল প্রাইভেট ক্লাউডের (VPC) প্রাথমিক ধারণা। জানুন কীভাবে সফটওয়্যার-ডিফাইন্ড নেটওয়ার্ক পাবলিক ক্লাউড ডেটা সেন্টার থেকে আলাদা পরিবেশ তৈরি করে। ৬৫৫৩৬টি আইপির একটি 10.0.0.0/16 অ্যাড্রেস ব্লককে প্রতিটিতে ২৫৬টি অ্যাড্রেস বিশিষ্ট ৩টি স্বতন্ত্র সাবনেটে ভাগ করুন। জানুন কেন ক্লাউড প্রোভাইডার প্রতিটি সাবনেটে ৫টি আইপি রিজার্ভ রাখে, যার ফলে জোন প্রতি ২৫১টি ব্যবহারযোগ্য আইপি অবশিষ্ট থাকে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Software-defined isolation and Virtual Private Clouds (VPC)', bn: 'WHAT — সফটওয়্যার-ডিফাইন্ড নেটওয়ার্ক আইসোলেশন ও ভার্চুয়াল প্রাইভেট ক্লাউড (VPC)' },
    },
    {
      type: 'para',
      text: {
        en: 'When you launch your first virtual machines or containers in a public cloud like AWS, Azure, or Google Cloud, you cannot connect them directly to an open physical switch. In shared infrastructure, multiple competing organizations run workloads on the exact same physical servers. Cloud providers solve this multi-tenant challenge through software-defined networking, creating a Virtual Private Cloud (VPC) dedicated solely to your account. A VPC acts as your digital data center in the cloud, giving you complete control over your private IP address ranges, subnets, routing tables, and network gateway boundaries.',
        bn: 'ক্লাউড প্রোভাইডার যেমন এডাব্লিউএস, অ্যাজিউর বা গুগল ক্লাউডে আপনার প্রথম ভার্চুয়াল মেশিন বা কন্টেইনার চালুর সময় আপনি সেগুলোকে সরাসরি কোনো উন্মুক্ত ফিজিক্যাল সুইচে যুক্ত করতে পারেন না। কারণ ক্লাউডের শেয়ার্ড অবকাঠামোতে একাধিক ভিন্ন প্রতিষ্ঠান একই ফিজিক্যাল সার্ভারে কাজ পরিচালনা করে। এই বহু-ব্যবহারকারী পরিবেশে নিরাপত্তা ও নিয়ন্ত্রণ নিশ্চিত করতে ক্লাউড প্রোভাইডাররা সফটওয়্যার-ডিফাইন্ড নেটওয়ার্কিংয়ের মাধ্যমে ভার্চুয়াল প্রাইভেট ক্লাউড (VPC) তৈরি করে। একটি ভিপিসি ক্লাউডে আপনার নিজস্ব ডিজিটাল ডেটা সেন্টার হিসেবে কাজ করে, যা আপনাকে প্রাইভেট আইপি রেঞ্জ, সাবনেট, রাউটিং টেবিল এবং গেটওয়ে সীমানার ওপর পূর্ণ নিয়ন্ত্রণ দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'VPC CIDR Address Partitioning across 3 Availability Zones', bn: '৩টি অ্যাভেইলাবিলিটি জোনে ভিপিসি সিআইডিআর অ্যাড্রেস বিভাজন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="VPC and Subnet CIDR Architecture diagram">
<rect x="20" y="25" width="600" height="205" rx="8" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="40" y="50" font-size="12" font-weight="800" fill="#1e40af">Virtual Private Cloud (VPC) — 10.0.0.0/16 (65536 Total IP Addresses)</text>
<text x="40" y="68" font-size="9" fill="#475569">Spans entire Cloud Region (e.g. us-east-1)</text>

<rect x="40" y="85" width="175" height="125" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="127" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">Subnet A (Zone 1)</text>
<text x="127" y="120" text-anchor="middle" font-size="9" fill="#2563eb">10.0.1.0/24 (256 IPs)</text>
<line x1="50" y1="130" x2="205" y2="130" stroke="#bfdbfe" stroke-width="1"/>
<text x="127" y="148" text-anchor="middle" font-size="8" fill="#dc2626">5 Reserved by Cloud</text>
<text x="127" y="162" text-anchor="middle" font-size="7" fill="#64748b">.0, .1, .2, .3, .255</text>
<text x="127" y="185" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">251 Usable Hosts</text>

<rect x="232" y="85" width="175" height="125" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="319" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">Subnet B (Zone 2)</text>
<text x="319" y="120" text-anchor="middle" font-size="9" fill="#2563eb">10.0.2.0/24 (256 IPs)</text>
<line x1="242" y1="130" x2="397" y2="130" stroke="#bfdbfe" stroke-width="1"/>
<text x="319" y="148" text-anchor="middle" font-size="8" fill="#dc2626">5 Reserved by Cloud</text>
<text x="319" y="162" text-anchor="middle" font-size="7" fill="#64748b">.0, .1, .2, .3, .255</text>
<text x="319" y="185" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">251 Usable Hosts</text>

<rect x="425" y="85" width="175" height="125" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="512" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">Subnet C (Zone 3)</text>
<text x="512" y="120" text-anchor="middle" font-size="9" fill="#2563eb">10.0.3.0/24 (256 IPs)</text>
<line x1="435" y1="130" x2="590" y2="130" stroke="#bfdbfe" stroke-width="1"/>
<text x="512" y="148" text-anchor="middle" font-size="8" fill="#dc2626">5 Reserved by Cloud</text>
<text x="512" y="162" text-anchor="middle" font-size="7" fill="#64748b">.0, .1, .2, .3, .255</text>
<text x="512" y="185" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">251 Usable Hosts</text>

<text x="320" y="222" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">Total Usable Host IPs: 753 | Cloud Reserved: 15 | Remaining in /16 pool: 64768 IPs</text>
</svg>`,
      caption: {
        en: 'Virtual Private Cloud (VPC) CIDR partitioning: An address block with 65536 total IPs is segmented into three /24 subnets of 256 addresses each. Infrastructure hypervisors reserve 5 specific IPs (.0, .1, .2, .3, and .255), leaving 251 usable host addresses per zone and 753 usable addresses across all 3 zones.',
        bn: 'ভার্চুয়াল প্রাইভেট ক্লাউড (VPC) সিআইডিআর বিভাজন: ৬৫৫৩৬টি মোট আইপি বিশিষ্ট একটি অ্যাড্রেস ব্লককে প্রতিটিতে ২৫৬টি অ্যাড্রেস যুক্ত তিনটি /২৪ সাবনেটে ভাগ করা হয়েছে। হাইপারভাইজর অবকাঠামো ৫টি নির্দিষ্ট আইপি (.0, .1, .2, .3 এবং .255) সংরক্ষণ করে, যার ফলে জোন প্রতি ২৫১টি এবং ৩টি জোনে সর্বমোট ৭৫৩টি ব্যবহারযোগ্য হোস্ট ঠিকানা পাওয়া যায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Private Cloud',
          def: {
            en: 'A logically isolated software-defined virtual network dedicated to your cloud account within a specific geographic region.',
            bn: 'একটি নির্দিষ্ট ক্লাউড অঞ্চলে আপনার অ্যাকাউন্টের জন্য বরাদ্দকৃত সম্পূর্ণ আলাদা ও নিয়ন্ত্রিত ভার্চুয়াল নেটওয়ার্ক।',
          },
        },
        {
          term: 'CIDR Notation',
          def: {
            en: 'Classless Inter-Domain Routing expressing an IP address block and its network mask prefix (e.g. 10.0.0.0/16).',
            bn: 'আইপি অ্যাড্রেসের পরিসর এবং নেটওয়ার্ক মাস্ক প্রকাশের আন্তর্জাতিক মানসম্মত পদ্ধতি (যেমন 10.0.0.0/16)।',
          },
        },
        {
          term: 'RFC 1918 Private Ranges',
          def: {
            en: 'Standard non-routable private IP address allocations: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.',
            bn: 'ইন্টারনেটে সরাসরি রাউট না হওয়া আন্তর্জাতিকভাবে নির্ধারিত প্রাইভেট আইপি অ্যাড্রেস রেঞ্জ।',
          },
        },
        {
          term: 'Subnet Reserved IPs',
          def: {
            en: 'Five specific IP addresses automatically reserved by the cloud platform in every subnet for routing, DNS, and broadcast.',
            bn: 'রাউটার, ক্লাউড ডিএনএস এবং নেটওয়ার্ক ব্যবস্থাপনার জন্য ক্লাউড প্রোভাইডার কর্তৃক সংরক্ষিত পাঁচটি নির্দিষ্ট আইপি।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript CIDR subnet calculator and address reservation engine', bn: 'HOW — টাইপস্ক্রিপ্ট সিআইডিআর সাবনেট ক্যালকুলেটর ও অ্যাড্রেস রিজার্ভেশন ইঞ্জিন' },
    },
    {
      type: 'para',
      text: {
        en: 'To calculate usable IP space when provisioning a VPC and partitioning it into Availability Zone subnets, run this verified TypeScript subnetting engine:',
        bn: 'একটি ভিপিসি তৈরি এবং বিভিন্ন জোনের সাবনেটে আইপি ভাগ করার সময় প্রকৃত ব্যবহারযোগ্য আইপি হিসাব করতে এই টাইপস্ক্রিপ্ট কোডটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'vpc-cidr-calculator.ts',
      code: `interface CloudSubnet {
  name: string;
  cidr: string;
  availabilityZone: string;
  totalIps: number;
  reservedIps: number;
  usableHostIps: number;
}

interface VpcAllocationPlan {
  vpcCidr: string;
  totalVpcIps: number;
  subnets: CloudSubnet[];
  totalUsableAcrossSubnets: number;
  totalReservedAcrossSubnets: number;
  remainingUnallocatedIps: number;
}

function calculateVpcCapacity(vpcCidr: string, prefixLength: number): VpcAllocationPlan {
  // 10.0.0.0/16 has 32 - 16 = 16 host bits -> 2^16 = 65536 total IPs
  const totalVpcIps = Math.pow(2, 32 - prefixLength);

  // Partition into 3 subnets with prefix /24 (256 IPs each)
  const subnetPrefix = 24;
  const totalSubnetIps = Math.pow(2, 32 - subnetPrefix); // 256
  const cloudReservedCount = 5; // .0 network, .1 router, .2 DNS, .3 future, .255 broadcast
  const usablePerSubnet = totalSubnetIps - cloudReservedCount; // 251

  const subnets: CloudSubnet[] = [
    {
      name: 'public-subnet-1a',
      cidr: '10.0.1.0/24',
      availabilityZone: 'us-east-1a',
      totalIps: totalSubnetIps,
      reservedIps: cloudReservedCount,
      usableHostIps: usablePerSubnet,
    },
    {
      name: 'public-subnet-1b',
      cidr: '10.0.2.0/24',
      availabilityZone: 'us-east-1b',
      totalIps: totalSubnetIps,
      reservedIps: cloudReservedCount,
      usableHostIps: usablePerSubnet,
    },
    {
      name: 'public-subnet-1c',
      cidr: '10.0.3.0/24',
      availabilityZone: 'us-east-1c',
      totalIps: totalSubnetIps,
      reservedIps: cloudReservedCount,
      usableHostIps: usablePerSubnet,
    },
  ];

  const totalUsable = usablePerSubnet * subnets.length; // 251 * 3 = 753
  const totalReserved = cloudReservedCount * subnets.length; // 5 * 3 = 15
  const allocatedTotal = totalSubnetIps * subnets.length; // 256 * 3 = 768
  const remainingIps = totalVpcIps - allocatedTotal; // 65536 - 768 = 64768

  return {
    vpcCidr,
    totalVpcIps,
    subnets,
    totalUsableAcrossSubnets: totalUsable,
    totalReservedAcrossSubnets: totalReserved,
    remainingUnallocatedIps: remainingIps,
  };
}

const plan = calculateVpcCapacity('10.0.0.0/16', 16);

console.log(\`Total VPC IPs: \${plan.totalVpcIps}\`);
// Total VPC IPs: 65536
console.log(\`Subnets Created: \${plan.subnets.length}\`);
// Subnets Created: 3
console.log(\`Usable IPs per Subnet: \${plan.subnets[0].usableHostIps}\`);
// Usable IPs per Subnet: 251
console.log(\`Total Usable Hosts across 3 Zones: \${plan.totalUsableAcrossSubnets}\`);
// Total Usable Hosts across 3 Zones: 753
console.log(\`Total Cloud Reserved IPs: \${plan.totalReservedAcrossSubnets}\`);
// Total Cloud Reserved IPs: 15
console.log(\`Remaining Available IPs in /16 pool: \${plan.remainingUnallocatedIps}\`);
// Remaining Available IPs in /16 pool: 64768`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The Five Reserved IP Addresses Explained', bn: 'পাঁচটি সংরক্ষিত আইপি অ্যাড্রেসের কার্যকারিতা' },
      text: {
        en: 'In an AWS subnet like 10.0.1.0/24, five addresses cannot be assigned to hosts. The .0 IP is the network identifier, while .1 represents the default virtual router. The .2 IP reaches AmazonProvidedDNS, and .3 is reserved for future infrastructure capabilities. Finally, .255 represents the network broadcast address.',
        bn: 'এডাব্লিউএসের যেকোনো সাবনেটে (যেমন 10.0.1.0/24) ৫টি আইপি কখনো সার্ভারকে বরাদ্দ দেওয়া যায় না। এর মধ্যে .0 হলো নেটওয়ার্ক শনাক্তকারী এবং .1 ভার্চুয়াল রাউটার নির্দেশ করে। .2 আইপি ক্লাউড ডিএনএস রিজলভারের জন্য বরাদ্দ থাকে এবং .3 ভবিষ্যতের সুবিধার জন্য সংরক্ষিত। পরিশেষে, .255 হলো ব্রডকাস্ট অ্যাড্রেস।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Physical On-Premise Networking vs Cloud VPC Networking', bn: 'ফিজিক্যাল অন-প্রিমিসেস নেটওয়ার্কিং বনাম ক্লাউড ভিপিসি নেটওয়ার্কিং' },
      left: {
        title: { en: 'Physical On-Premises Network', bn: 'ফিজিক্যাল অন-প্রিমিসেস নেটওয়ার্ক' },
        points: [
          { en: 'Requires manual physical cabling, hardware rack switches, and physical patch panels', bn: 'ম্যানুয়াল ফিজিক্যাল ক্যাবলিং, হার্ডওয়্যার সুইচ এবং প্যাচ প্যানেল সংযোগের প্রয়োজন হয়' },
          { en: 'Only reserves 2 IP addresses per subnet (.0 for network and .255 for broadcast)', bn: 'প্রতিটি সাবনেটে কেবল ২টি আইপি রিজার্ভ রাখে (.০ নেটওয়ার্ক ও .২৫৫ ব্রডকাস্টের জন্য)' },
          { en: 'Supports Layer 2 Ethernet broadcasts, ARP discovery, and promiscuous packet sniffing', bn: 'লেয়ার ২ ইথারনেট ব্রডকাস্ট, এআরপি ডিসকভারি এবং প্যাকেট স্নিফিং সমর্থন করে' },
          { en: 'Provisioning a new isolated VLAN requires network team tickets and hardware configuration', bn: 'নতুন ভিএলএএন তৈরি করতে নেটওয়ার্ক ইঞ্জিনিয়ারিং দল এবং হার্ডওয়্যারে পরিবর্তন লাগে' },
        ],
      },
      right: {
        title: { en: 'Software-Defined Cloud VPC', bn: 'সফটওয়্যার-ডিফাইন্ড ক্লাউড ভিপিসি' },
        points: [
          { en: 'Provisioned instantaneously via software APIs, Infrastructure as Code, or web console', bn: 'সফটওয়্যার এপিআই বা ইনফ্রাস্ট্রাকচার অ্যাজ কোড দিয়ে কয়েক সেকেন্ডে তৈরি করা যায়' },
          { en: 'Reserves 5 IP addresses in every subnet (.0, .1, .2, .3, and .255) for cloud hypervisor services', bn: 'ক্লাউড হাইপারভাইজরের জন্য প্রতিটি সাবনেটে ৫টি নির্দিষ্ট আইপি স্বয়ংক্রিয়ভাবে রিজার্ভ রাখে' },
          { en: 'Drops broadcast and multicast traffic completely, eliminating ARP flooding risks', bn: 'ব্রডকাস্ট ও মাল্টিকাস্ট সম্পূর্ণ ব্লক করে নেটওয়ার্ক ট্রাফিকের নিরাপত্তা নিশ্চিত করে' },
          { en: 'Enables programmatic creation of hundreds of isolated subnets with API calls', bn: 'এপিআই কলের মাধ্যমে শত শত বিচ্ছিন্ন সাবনেট মুহূর্তেই প্রোগ্রাম্যাটিক উপায়ে তৈরি করা যায়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'RFC 1918 Block', bn: 'প্রাইভেট ব্লক' },
        { en: 'Default CIDR', bn: 'ডিফল্ট সিআইডিআর' },
        { en: 'Total Address Count', bn: 'মোট আইপি সংখ্যা' },
        { en: 'Common Cloud Usage', bn: 'প্রচলিত ক্লাউড ব্যবহার' },
      ],
      rows: [
        [
          { en: '10.0.0.0/8', bn: '10.0.0.0/8' },
          { en: '10.0.0.0 to 10.255.255.255', bn: '10.0.0.0 থেকে 10.255.255.255' },
          { en: '16777216 IPs', bn: '১৬৭৭৭২১৬টি আইপি' },
          { en: 'Enterprise multi-VPC corporate networks', bn: 'বৃহৎ করপোরেট ক্লাউড নেটওয়ার্ক' },
        ],
        [
          { en: '172.16.0.0/12', bn: '172.16.0.0/12' },
          { en: '172.16.0.0 to 172.31.255.255', bn: '172.16.0.0 থেকে 172.31.255.255' },
          { en: '1048576 IPs', bn: '১০৪৮৫৭৬টি আইপি' },
          { en: 'Default AWS VPC in new accounts', bn: 'নতুন এডাব্লিউএস অ্যাকাউন্টের ডিফল্ট ভিপিসি' },
        ],
        [
          { en: '192.168.0.0/16', bn: '192.168.0.0/16' },
          { en: '192.168.0.0 to 192.168.255.255', bn: '192.168.0.0 থেকে 192.168.255.255' },
          { en: '65536 IPs', bn: '৬৫৫৩৬টি আইপি' },
          { en: 'Small lab and staging environments', bn: 'ছোট ল্যাব ও টেস্ট পরিবেশ' },
        ],
      ],
      caption: {
        en: 'RFC 1918 private IPv4 address allocations commonly used for cloud VPC architecture.',
        bn: 'ক্লাউড ভিপিসি আর্কিটেকচারে ব্যবহৃত RFC 1918 আন্তর্জাতিক প্রাইভেট আইপি রেঞ্জ।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Choose Primary VPC CIDR Block', bn: 'ধাপ ১ — মূল ভিপিসি সিআইডিআর নির্ধারণ' },
          text: {
            en: 'Select a non-overlapping private CIDR block such as 10.0.0.0/16 giving your cloud network 65536 total IPs.',
            bn: 'অন্য কোনো নেটওয়ার্কের সাথে না মিলে এমন একটি সিআইডিআর বেছে নিন যেমন 10.0.0.0/16 যা ৬৫৫৩৬টি আইপি দেয়।',
          },
        },
        {
          title: { en: 'Step 2 — Design Multi-AZ Subnet Layout', bn: 'ধাপ ২ — মাল্টি-এজেড সাবনেট লেআউট তৈরি' },
          text: {
            en: 'Carve out /24 subnets across at least 3 Availability Zones to ensure geographic fault tolerance.',
            bn: 'ভৌগোলিক সুরক্ষার জন্য কমপক্ষে ৩টি অ্যাভেইলাবিলিটি জোনে আলাদা /২৪ সাবনেট তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Factor In Cloud Reserved Addresses', bn: 'ধাপ ৩ — ক্লাউড সংরক্ষিত আইপি বিবেচনা' },
          text: {
            en: 'Subtract 5 addresses per subnet from capacity calculations (.0, .1, .2, .3, and .255).',
            bn: 'প্রতিটি সাবনেটে ক্লাউডের নিজস্ব ৫টি সংরক্ষিত আইপি বাদ দিয়ে ব্যবহারযোগ্য আইপির হিসাব করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Attach Base Route Tables', bn: 'ধাপ ৪ — বেস রাউট টেবিল সংযুক্তকরণ' },
          text: {
            en: 'Associate each subnet with an explicit route table to establish local intra-VPC communication.',
            bn: 'ভিপিসির ভেতরে সার্ভারগুলোর নিজেদের মধ্যে যোগাযোগের জন্য প্রতিটি সাবনেটে রাউট টেবিল যুক্ত করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'net-ex-1',
      kind: 'mcq',
      topic: 'vpc-definition',
      question: {
        en: 'What is a Virtual Private Cloud (VPC) in modern public cloud infrastructure?',
        bn: 'আধুনিক পাবলিক ক্লাউড অবকাঠামোতে ভার্চুয়াল প্রাইভেট ক্লাউড (VPC) কী?',
      },
      options: [
        { en: 'A logically isolated software-defined virtual network dedicated solely to your account within a cloud region', bn: 'একটি নির্দিষ্ট ক্লাউড অঞ্চলে আপনার অ্যাকাউন্টের জন্য সংরক্ষিত সম্পূর্ণ আলাদা ও নিয়ন্ত্রিত সফটওয়্যার-ডিফাইন্ড নেটওয়ার্ক' },
        { en: 'A physical server rack shipped to your personal office building', bn: 'আপনার ব্যক্তিগত অফিস ভবনে পাঠানো একটি ফিজিক্যাল সার্ভার র্যাক' },
        { en: 'A USB flash drive containing copies of website images', bn: 'ওয়েবসাইট ছবির কপি সংরক্ষিত থাকা একটি ইউএসবি ফ্ল্যাশ ড্রাইভ' },
        { en: 'An antivirus program installed on a desktop computer', bn: 'ডেস্কটপ কম্পিউটারে ইনস্টল করা একটি অ্যান্টিভাইরাস প্রোগ্রাম' },
      ],
      answer: 0,
      hint: { en: 'A logically isolated software-defined virtual network.', bn: 'একটি যুক্তিযুক্তভাবে বিচ্ছিন্ন সফটওয়্যার-ডিফাইন্ড নেটওয়ার্ক।' },
      explanation: {
        en: 'A VPC establishes isolated network boundaries in public cloud hypervisors, isolating your resources from other tenants.',
        bn: 'একটি ভিপিসি পাবলিক ক্লাউড হাইপারভাইজরে নিজস্ব নেটওয়ার্ক সীমানা তৈরি করে অন্যদের থেকে আপনার রিসোর্স আলাদা রাখে।',
      },
    },
    {
      id: 'net-ex-2',
      kind: 'mcq',
      topic: 'broadcast-in-cloud-vpcs',
      question: {
        en: 'How do public cloud VPCs handle Layer 2 broadcast and multicast network traffic?',
        bn: 'পাবলিক ক্লাউড ভিপিসি কীভাবে লেয়ার ২ ব্রডকাস্ট এবং মাল্টিকাস্ট ট্রাফিক পরিচালনা করে?',
      },
      options: [
        { en: 'They intentionally drop broadcast and multicast packets entirely at the software virtualization layer to eliminate ARP storms and noise', bn: 'এআরপি স্টর্ম এবং অনাকাঙ্ক্ষিত জটলা ঠেকাতে সফটওয়্যার ভার্চুয়ালাইজেশন স্তরে ব্রডকাস্ট ও মাল্টিকাস্ট প্যাকেট সম্পূর্ণ ড্রপ করা হয়' },
        { en: 'They amplify broadcast packets by ten times to reach all servers', bn: 'সব সার্ভারে পৌঁছাতে তারা ব্রডকাস্ট প্যাকেট দশ গুণ বাড়িয়ে দেয়' },
        { en: 'They write every broadcast packet to a printed paper log book', bn: 'তারা প্রতিটি ব্রডকাস্ট প্যাকেট কাগজে প্রিন্ট করে সংরক্ষণ করে' },
        { en: 'They shut down the electrical power to all neighboring servers', bn: 'তারা পাশের সব সার্ভারের বৈদ্যুতিক মেইন সুইচ বন্ধ করে দেয়' },
      ],
      answer: 0,
      hint: { en: 'Broadcast and multicast are dropped in cloud VPCs.', bn: 'ক্লাউড ভিপিসিতে ব্রডকাস্ট ও মাল্টিকাস্ট বন্ধ থাকে।' },
      explanation: {
        en: 'Cloud networks use software encapsulation (like Geneve or VXLAN), disabling Layer 2 broadcast loops.',
        bn: 'ক্লাউড নেটওয়ার্ক সফটওয়্যার এনক্যাপসুলেশন ব্যবহার করে লেয়ার ২ ব্রডকাস্টের ক্ষতিকর লুপ সম্পূর্ণ বন্ধ রাখে।',
      },
    },
    {
      id: 'net-ex-3',
      kind: 'predict',
      topic: 'reserved-ips-count',
      question: {
        en: 'In a standard AWS or GCP /24 subnet containing 256 total IP addresses, how many addresses are reserved by the cloud provider (e.g. 5 )?',
        bn: '২৫৬টি মোট আইপি অ্যাড্রেস বিশিষ্ট একটি সাধারণ এডাব্লিউএস বা জিসিপি /২৪ সাবনেটে ক্লাউড প্রদানকারী কতটি আইপি রিজার্ভ রাখে (যেমন 5 )?',
      },
      answer: '5',
      accept: ['5', 'five', '5 IPs'],
      hint: { en: '5', bn: '5' },
      explanation: {
        en: 'AWS reserves 5 addresses (.0, .1, .2, .3, and .255) for network, router, DNS, future use, and broadcast.',
        bn: 'এডাব্লিউএস প্রতিটি সাবনেটে ৫টি আইপি (.0, .1, .2, .3 এবং .255) নেটওয়ার্ক, রাউটার, ডিএনএস ও ব্রডকাস্টের জন্য সংরক্ষণ করে।',
      },
    },
    {
      id: 'net-ex-4',
      kind: 'predict',
      topic: 'usable-ips-in-slash-24',
      question: {
        en: 'In a /24 cloud subnet with 256 total addresses, how many usable host IP addresses remain after subtracting the 5 reserved addresses (e.g. 251 )?',
        bn: '২৫৬টি মোট অ্যাড্রেস বিশিষ্ট একটি /২৪ ক্লাউড সাবনেটে ৫টি রিজার্ভ করা অ্যাড্রেস বাদ দিলে কতটি ব্যবহারযোগ্য আইপি অবশিষ্ট থাকে (যেমন 251 )?',
      },
      answer: '251',
      accept: ['251', '251 IPs', 'two hundred fifty-one'],
      hint: { en: '251', bn: '251' },
      explanation: {
        en: '256 total addresses minus 5 reserved cloud addresses leaves 251 usable host IPs.',
        bn: '২৫৬টি মোট আইপি থেকে ক্লাউডের ৫টি সংরক্ষিত আইপি বাদ দিলে ২৫১টি ব্যবহারযোগ্য আইপি অবশিষ্ট থাকে।',
      },
    },
  ],
  quiz: {
    id: 'nets-and-the-net-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'net-qz-1',
        kind: 'mcq',
        topic: 'why-five-reserved-ips',
        question: {
          en: 'Why do cloud providers reserve 5 IP addresses in every subnet rather than just 2 addresses like traditional on-premises networks?',
          bn: 'ঐতিহ্যবাহী অন-প্রিমিসেস নেটওয়ার্কের মতো কেবল ২টি অ্যাড্রেসের বদলে ক্লাউড প্রোভাইডাররা কেন প্রতিটি সাবনেটে ৫টি আইপি রিজার্ভ রাখে?',
        },
        options: [
          { en: 'The cloud hypervisor reserves .1 for the default virtual router, .2 for the internal cloud DNS resolver, and .3 for future infrastructure capabilities', bn: 'ক্লাউড হাইপারভাইজর ডিফল্ট রাউটারের জন্য .১, অভ্যন্তরীণ ডিএনএস রিজলভারের জন্য .২ এবং ভবিষ্যতের সুবিধার জন্য .৩ রিজার্ভ রাখে' },
          { en: 'Because cloud computers require 5 power cords to turn on', bn: 'কারণ ক্লাউড কম্পিউটার চালু করতে ৫টি পাওয়ার তারের প্রয়োজন হয়' },
          { en: 'Because cloud networks only function when using 5 different languages', bn: 'কারণ ক্লাউড নেটওয়ার্ক কেবল ৫টি আলাদা ভাষায় কথা বললেই কাজ করে' },
          { en: 'Because cloud data centers operate in 5 different countries at once', bn: 'কারণ ক্লাউড ডেটা সেন্টার এক সাথে ৫টি আলাদা দেশে অবস্থান করে' },
        ],
        answer: 0,
        hint: { en: 'Router (.1), DNS (.2), and future use (.3).', bn: 'রাউটার (.১), ডিএনএস (.২) এবং ভবিষ্যৎ ব্যবহার (.৩)।' },
        explanation: {
          en: 'In addition to standard network (.0) and broadcast (.255), cloud platforms allocate .1 for the router, .2 for DNS, and .3 for future features.',
          bn: 'সাধারণ নেটওয়ার্ক (.০) ও ব্রডকাস্ট (.২৫৫) ছাড়াও ক্লাউড প্ল্যাটফর্ম রাউটারের জন্য .১, ডিএনএসের জন্য .২ ও ভবিষ্যতের জন্য .৩ বরাদ্দ রাখে।',
        },
      },
      {
        id: 'net-qz-2',
        kind: 'mcq',
        topic: 'az-subnet-relationship',
        question: {
          en: 'What is the architectural relationship between a Cloud Subnet and an Availability Zone (AZ)?',
          bn: 'একটি ক্লাউড সাবনেট এবং একটি অ্যাভেইলাবিলিটি জোনের (AZ) মধ্যে আর্কিটেকচারাল সম্পর্ক কী?',
        },
        options: [
          { en: 'A subnet must reside entirely within a single Availability Zone, while a VPC spans across all Availability Zones in the region', bn: 'একটি সাবনেট সর্বদা একটি একক অ্যাভেইলাবিলিটি জোনে সীমাবদ্ধ থাকে, তবে একটি ভিপিসি ওই অঞ্চলের সব জোনে বিস্তৃত হতে পারে' },
          { en: 'A single subnet spans across every continent in the world', bn: 'একটি একক সাবনেট বিশ্বের প্রতিটি মহাদেশে বিস্তৃত থাকে' },
          { en: 'Availability Zones can only contain one single computer', bn: 'একটি অ্যাভেইলাবিলিটি জোনে কেবল একটি মাত্র কম্পিউটার রাখা যায়' },
          { en: 'Subnets must be deleted and recreated every 24 hours', bn: 'প্রতি ২৪ ঘণ্টা পর পর সাবনেট মুছে পুনরায় তৈরি করতে হয়' },
        ],
        answer: 0,
        hint: { en: 'A subnet belongs to one AZ; a VPC spans the region.', bn: 'একটি সাবনেট একটি জোনে থাকে; ভিপিসি পুরো অঞ্চলে বিস্তৃত হয়।' },
        explanation: {
          en: 'Subnets provide failure isolation by binding strictly to a specific physical data center zone.',
          bn: 'একটি নির্দিষ্ট ডাটা সেন্টার জোনে আবদ্ধ থাকার মাধ্যমে সাবনেটগুলো একে অপরের থেকে নির্ভরযোগ্য বিচ্ছিন্নতা দেয়।',
        },
      },
      {
        id: 'net-qz-3',
        kind: 'mcq',
        topic: 'rfc1918-cidr-choice',
        question: {
          en: 'Why is 10.0.0.0/16 the most popular CIDR block choice for enterprise production VPCs?',
          bn: 'এন্টারপ্রাইজ প্রোডাকশন ভিপিসির জন্য 10.0.0.0/16 কেন সবচেয়ে জনপ্রিয় সিআইডিআর চয়েস?',
        },
        options: [
          { en: 'It provides 65536 IP addresses, offering ample room to carve out hundreds of public, private, and database subnets without running out of address space', bn: 'এটি ৬৫৫৩৬টি আইপি অ্যাড্রেস দেয়, যা আইপি সংকট ছাড়াই শত শত পাবলিক, প্রাইভেট ও ডাটাবেজ সাবনেট তৈরির অফুরন্ত সুযোগ দেয়' },
          { en: 'It makes all web applications load 100 times faster', bn: 'এটি সব ওয়েব অ্যাপ্লিকেশন ১০০ গুণ দ্রুত লোড করায়' },
          { en: 'It allows computers to communicate without needing network cards', bn: 'এটি নেটওয়ার্ক কার্ড ছাড়াই কম্পিউটারকে যোগাযোগের সুযোগ দেয়' },
          { en: 'It is the only IP address format permitted by the United Nations', bn: 'এটি জাতিসংঘ অনুমোদিত একমাত্র আইপি অ্যাড্রেস ফরম্যাট' },
        ],
        answer: 0,
        hint: { en: '65536 IPs provide plenty of space for multi-tier subnets.', bn: '৬৫৫৩৬টি আইপি মাল্টি-টিয়ার সাবনেট তৈরির পর্যাপ্ত সুযোগ দেয়।' },
        explanation: {
          en: 'A /16 network gives cloud engineers 65536 total addresses to easily segment large multi-tier clusters.',
          bn: 'একটি /১৬ নেটওয়ার্ক ক্লাউড ইঞ্জিনিয়ারদের ৬৫৫৩৬টি আইপি দেয় যা দিয়ে সহজে বড় ক্লাস্টার পরিচালনা করা যায়।',
        },
      },
      {
        id: 'net-qz-4',
        kind: 'predict',
        topic: 'total-usable-across-three-subnets',
        question: {
          en: 'How many total usable host IP addresses are available across 3 /24 subnets combined (e.g. 753 )?',
          bn: 'একত্রে ৩টি /২৪ সাবনেটে সর্বমোট কতটি ব্যবহারযোগ্য হোস্ট আইপি অ্যাড্রেস পাওয়া যায় (যেমন 753 )?',
        },
        answer: '753',
        accept: ['753', '753 hosts', 'seven hundred fifty-three'],
        hint: { en: '753', bn: '753' },
        explanation: {
          en: 'Three /24 subnets provide 251 usable host IPs each, totaling 753 usable addresses (251 * 3).',
          bn: 'প্রতিটি /২৪ সাবনেটে ২৫১টি করে ৩টি সাবনেটে সর্বমোট ২৫১ * ৩ = ৭৫৩টি ব্যবহারযোগ্য আইপি থাকে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'subnets-and-the-subnet',
    title: {
      en: 'Public and Private Subnets: Route Tables, Network Segmentation, and DMZ Architecture',
      bn: 'পাবলিক ও প্রাইভেট সাবনেট: রাউট টেবিল, নেটওয়ার্ক বিভাজন ও ডিএমজেড আর্কিটেকচার',
    },
  },
};
