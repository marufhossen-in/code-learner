import type { Hub } from '../../lib/types';
import { NetsAndTheNetLesson } from './lessons/nets-and-the-net';
import { SubnetsAndTheSubnetLesson } from './lessons/subnets-and-the-subnet';
import { GatewaysAndTheGatewayLesson } from './lessons/gateways-and-the-gateway';
import { FirewallsAndTheFirewallLesson } from './lessons/firewalls-and-the-firewall';
import { DnsAndTheDnsLesson } from './lessons/dns-and-the-dns';
import { BalancersAndTheBalancerLesson } from './lessons/balancers-and-the-balancer';
import { EnclavesAndTheEnclaveLesson } from './lessons/enclaves-and-the-enclave';
import { TheCloudNetworkingReleaseLesson } from './lessons/the-cloud-networking-release';

export const cloudNetworkingHub: Hub = {
  slug: 'cloud-networking',
  name: 'Cloud Networking',
  icon: '🕸️',
  tagline: {
    en: 'Architect enterprise cloud networks: VPCs, CIDR subnets, NAT gateways, security groups, and multi-region transit routing.',
    bn: 'এন্টারপ্রাইজ ক্লাউড নেটওয়ার্ক নকশা: ভিপিসি, সিআইডিআর সাবনেট, ন্যাট গেটওয়ে, সিকিউরিটি গ্রুপ ও মাল্টি-রিজিয়ন ট্রানজিট রাউটিং।',
  },
  intro: {
    en: 'Master foundational and advanced cloud networking. Learn how Virtual Private Clouds partition public cloud infrastructure into isolated, secure tenant enclaves. Build public and private subnets, configure Internet and NAT gateways for protected egress, enforce defense-in-depth with stateful Security Groups and stateless Network ACLs, and scale enterprise traffic through BGP Anycast, Transit Gateways, and PrivateLink connections.',
    bn: 'ক্লাউড নেটওয়ার্কিংয়ের মৌলিক ও উন্নত কৌশলগুলো আয়ত্ত করুন। জানুন কীভাবে ভার্চুয়াল প্রাইভেট ক্লাউড পাবলিক ক্লাউড অবকাঠামোকে সুরক্ষিত ও আলাদা এনক্লেভে বিভক্ত করে। পাবলিক ও প্রাইভেট সাবনেট তৈরি করুন, সুরক্ষিত বহির্গামী ট্রাফিকের জন্য ইন্টারনেট ও ন্যাট গেটওয়ে কনফিগার করুন, স্টেটফুল সিকিউরিটি গ্রুপ ও স্টেটলেস নেটওয়ার্ক এসিএল দিয়ে স্তরীভূত সুরক্ষা নিশ্চিত করুন এবং বিজিপি এনিকাস্ট, ট্রানজিট গেটওয়ে ও প্রাইভেটলিংকের মাধ্যমে এন্টারপ্রাইজ ট্রাফিক স্কেল করুন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — VPC Architecture & Subnet Segmentation', bn: 'ধাপ ১ — ভিপিসি আর্কিটেকচার ও সাবনেট বিভাজন' },
      items: [
        { en: 'Virtual Private Cloud (VPC) tenancy, RFC 1918 private IPv4 addressing, and IPv6 dual-stack CIDR allocation.', bn: 'ভার্চুয়াল প্রাইভেট ক্লাউড ভিপিসি ধারণা, RFC 1918 প্রাইভেট আইপি অ্যাড্রেসিং এবং ডুয়াল-স্ট্যাক সিআইডিআর ব্লক বরাদ্দ।' },
        { en: 'Public and private subnet division, Availability Zone mapping, and subnet-level broadcast isolation.', bn: 'পাবলিক ও প্রাইভেট সাবনেট বিভাজন, ক্লাউড অ্যাভেইলাবিলিটি জোন ম্যাপিং এবং সাবনেট স্তরে আইসোলেশন।' },
        { en: 'Custom Route Tables, local VPC peering targets, default internet routes, and packet forwarding rules.', bn: 'কাস্টম রাউট টেবিল, লোকাল ট্রাফিক রুল, ডিফল্ট ইন্টারনেট রাউট এবং প্যাকেট ফরোয়ার্ডিং নিয়মাবলী।' },
      ],
    },
    {
      title: { en: 'Stage 2 — Gateways, Routing & Edge Defense', bn: 'ধাপ ২ — গেটওয়ে, রাউটিং ও প্রান্তিক নিরাপত্তা' },
      items: [
        { en: 'Internet Gateways (IGW) for public endpoints and managed NAT Gateways for private subnet outbound egress.', bn: 'পাবলিক সার্ভিসের জন্য ইন্টারনেট গেটওয়ে (IGW) এবং প্রাইভেট সাবনেটের জন্য ম্যানেজড ন্যাট গেটওয়ে।' },
        { en: 'Stateful Security Groups (instance-level firewall) versus stateless Network ACLs (subnet-level packet filtering).', bn: 'ইনস্ট্যান্স স্তরের স্টেটফুল সিকিউরিটি গ্রুপ বনাম সাবনেট স্তরের স্টেটলেস নেটওয়ার্ক এসিএল (NACL)।' },
        { en: 'Cloud DNS, Route 53 private hosted zones, split-horizon resolution, and DNS resolver inbound/outbound endpoints.', bn: 'ক্লাউড ডিএনএস, প্রাইভেট হোস্টেড জোন, স্প্লিট-হরাইজন নেম রেজোলিউশন এবং ডিএনএস এন্ডপয়েন্ট আর্কিটেকচার।' },
        { en: 'Application and Network Load Balancers (ALB / NLB) deployed across multi-tier public DMZ architectures.', bn: 'মাল্টি-টিয়ার পাবলিক ডিএমজেড আর্কিটেকচারে অ্যাপ্লিকেশন ও নেটওয়ার্ক লোড ব্যালেন্সার স্থাপন।' },
      ],
    },
    {
      title: { en: 'Stage 3 — Enterprise Transit & Hybrid Interconnects', bn: 'ধাপ ৩ — এন্টারপ্রাইজ ট্রানজিট ও হাইব্রিড নেটওয়ার্ক' },
      items: [
        { en: 'VPC Peering limitations, non-transitive routing rules, and CIDR overlap conflict resolution.', bn: 'ভিপিসি পিয়ারিং সীমাবদ্ধতা, নন-ট্রানজিটিভ রাউটিং সমস্যা এবং ওভারল্যাপিং আইপি দ্বন্দ্ব নিরসন।' },
        { en: 'Hub-and-spoke Transit Gateways (TGW) connecting hundreds of multi-account VPCs and centralized firewalls.', bn: 'হাব-অ্যান্ড-স্পোক ট্রানজিট গেটওয়ে (TGW) দিয়ে শত শত অ্যাকাউন্ট ভিপিসি ও সেন্ট্রাল ফায়ারওয়াল সংযোগ।' },
        { en: 'AWS PrivateLink and VPC Endpoint Services for connecting microservices privately without internet exposure.', bn: 'ইন্টারনেট ছাড়াই মাইক্রোসার্ভিসগুলোর মধ্যে নিরাপদে যোগাযোগের জন্য এডাব্লিউএস প্রাইভেটলিংক ও ভিপিসি এন্ডপয়েন্ট।' },
        { en: 'Hybrid cloud connectivity using IPsec Site-to-Site VPN tunnels and dedicated AWS Direct Connect circuits.', bn: 'আইপিসেক সাইট-টু-সাইট ভিপিএন টানেল এবং ডেডিকেটেড ডিরেক্ট কানেক্ট সার্কিট দিয়ে হাইব্রিড ক্লাউড নেটওয়ার্ক।' },
      ],
    },
  ],
  lessons: [
    NetsAndTheNetLesson,
    SubnetsAndTheSubnetLesson,
    GatewaysAndTheGatewayLesson,
    FirewallsAndTheFirewallLesson,
    DnsAndTheDnsLesson,
    BalancersAndTheBalancerLesson,
    EnclavesAndTheEnclaveLesson,
    TheCloudNetworkingReleaseLesson,
  ],
  projects: [
    {
      title: { en: 'Production Multi-Tier VPC across 3 Availability Zones', bn: '৩টি অ্যাভেইলাবিলিটি জোনে প্রোডাকশন মাল্টি-টিয়ার ভিপিসি' },
      brief: {
        en: 'Design and deploy a highly available enterprise VPC with 3 public DMZ subnets holding Application Load Balancers, 3 private application tier subnets hosting container services, and 3 fully isolated database subnets without internet access.',
        bn: 'উচ্চ-প্রাপ্যতার এন্টারপ্রাইজ ভিপিসি তৈরি করুন যেখানে ৩টি পাবলিক ডিএমজেড সাবনেটে লোড ব্যালেন্সার, ৩টি প্রাইভেট সাবনেটে অ্যাপ্লিকেশন কন্টেইনার এবং ৩টি সম্পূর্ণ ইন্টারনেট-বিচ্ছিন্ন ডাটাবেজ সাবনেট থাকবে।',
      },
    },
    {
      title: { en: 'Enterprise Hub-and-Spoke Transit Network with Centralized Inspection', bn: 'সেন্ট্রালাইজড ট্রাফিক ইন্সপেকশন সহ এন্টারপ্রাইজ ট্রানজিট নেটওয়ার্ক' },
      brief: {
        en: 'Architect an AWS Transit Gateway mesh interconnecting development, staging, and production VPCs through a centralized inspection VPC running Next-Generation Firewalls, enforcing strict egress control and zero east-west trust.',
        bn: 'একটি কেন্দ্রীয় ইন্সপেকশন ভিপিসির মাধ্যমে ডেভেলপমেন্ট, স্টেজিং ও প্রোডাকশন ভিপিসিগুলোকে ট্রানজিট গেটওয়েতে যুক্ত করে পরবর্তী প্রজন্মের ফায়ারওয়াল ও জিরো-ট্রাস্ট নিরাপত্তা বলয় তৈরি করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always size your primary VPC CIDR conservatively (such as /16 or /20) to reserve ample IP space for future microservices, and never use overlapping ranges across accounts.',
      bn: 'ভবিষ্যতের মাইক্রোসার্ভিসের পর্যাপ্ত আইপি সংরক্ষণের জন্য সর্বদা ভিপিসি সিআইডিআর সতর্কতার সাথে বড় রাখুন (যেমন /১৬ বা /২০) এবং বিভিন্ন অ্যাকাউন্টে কখনোই ওভারল্যাপিং আইপি ব্যবহার করবেন না।',
    },
    {
      en: 'Never place databases or internal data stores in public subnets with direct internet gateways; isolate them in dedicated private subnets with strict security groups.',
      bn: 'ডেটাবেজ বা সংবেদনশীল স্টোরেজকে কখনোই পাবলিক সাবনেটে রাখবেন না; কঠোর সিকিউরিটি গ্রুপ সহ আলাদা সম্পূর্ণ প্রাইভেট সাবনেটে তাদের সংরক্ষণ করুন।',
    },
    {
      en: 'Deploy managed NAT Gateways per Availability Zone rather than sharing a single gateway across zones to eliminate cross-AZ data transfer fees and single-zone outage risks.',
      bn: 'একাধিক জোনে একটি মাত্র ন্যাট গেটওয়ে শেয়ার না করে প্রতি অ্যাভেইলাবিলিটি জোনে আলাদা ন্যাট গেটওয়ে ব্যবহার করুন যাতে ক্রস-জোন খরচ বাঁচে এবং জোন আউটেজের ঝুঁকি না থাকে।',
    },
    {
      en: 'Enforce defense-in-depth by pairing fine-grained stateful Security Groups at the network interface level with broad stateless Network ACL boundaries at the subnet perimeter.',
      bn: 'প্রতিটি নেটওয়ার্ক ইন্টারফেসে সূক্ষ্ম স্টেটফুল সিকিউরিটি গ্রুপ এবং সাবনেটের সীমানায় স্টেটলেস নেটওয়ার্ক এসিএল সমন্বয় করে বহুমাত্রিক সুরক্ষা নিশ্চিত করুন।',
    },
    {
      en: 'Use AWS PrivateLink and VPC Endpoint Services instead of NAT Gateways when connecting internal microservices to AWS services or third-party partner SaaS platforms.',
      bn: 'ক্লাউড সার্ভিস বা পার্টনার সফটওয়্যারের সাথে যোগাযোগের সময় পাবলিক ন্যাট গেটওয়ের পরিবর্তে এডাব্লিউএস প্রাইভেটলিংক ও ভিপিসি এন্ডপয়েন্ট ব্যবহার করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental operational difference between a Security Group and a Network Access Control List (NACL)?',
        bn: 'সিকিউরিটি গ্রুপ (Security Group) এবং নেটওয়ার্ক অ্যাক্সেস কন্ট্রোল লিস্টের (NACL) মধ্যে মৌলিক কার্যকরী পার্থক্য কী?',
      },
      a: {
        en: 'Security Groups operate at the virtual network interface (ENI) level and are stateful: if inbound traffic is permitted on a port, response outbound traffic is automatically allowed regardless of outbound rules. Network ACLs operate at the subnet boundary and are stateless: rules are evaluated in numbered sequence, and return traffic must be explicitly permitted through both inbound and outbound rules.',
        bn: 'সিকিউরিটি গ্রুপ ভার্চুয়াল নেটওয়ার্ক ইন্টারফেস (ENI) স্তরে কাজ করে এবং এটি স্টেটফুল: ইনবাউন্ড ট্রাফিক অনুমোদিত হলে তার রেসপন্স আউটবাউন্ড রুল নির্বিশেষে স্বয়ংক্রিয়ভাবে যেতে পারে। অপরদিকে নেটওয়ার্ক এসিএল সাবনেট সীমানায় কাজ করে এবং এটি স্টেটলেস: নিয়মগুলো ক্রমিক নম্বরে যাচাই হয় এবং ফিরতি ট্রাফিকের জন্য ইনবাউন্ড ও আউটবাউন্ড উভয় রুল আলাদাভাবে অনুমোদিত হতে হয়।',
      },
    },
    {
      q: {
        en: 'How does an Internet Gateway (IGW) differ from a NAT Gateway in terms of packet translation and instance reachability?',
        bn: 'প্যাকেট ট্রান্সলেশন ও ইনস্ট্যান্স প্রবেশযোগ্যতার দিক থেকে ইন্টারনেট গেটওয়ে (IGW) এবং ন্যাট গেটওয়ের (NAT Gateway) মধ্যে পার্থক্য কী?',
      },
      a: {
        en: 'An Internet Gateway performs 1-to-1 static NAT between a public IP and private IP, allowing both bi-directional ingress and egress connections for public subnet instances. A NAT Gateway performs 1-to-many Port Address Translation (PAT) for private subnet instances, allowing outbound internet access (e.g. software patches) while strictly preventing external internet clients from initiating incoming connections.',
        bn: 'ইন্টারনেট গেটওয়ে পাবলিক ও প্রাইভেট আইপির মধ্যে ১-টু-১ স্ট্যাটিক ন্যাট করে, ফলে পাবলিক সাবনেটের ইনস্ট্যান্সে ভেতর ও বাইরে উভয় দিক থেকে সরাসরি ট্রাফিক চলাচল করতে পারে। পক্ষান্তরে ন্যাট গেটওয়ে প্রাইভেট সাবনেটের জন্য ১-টু-মেনি পোর্ট অ্যাড্রেস ট্রান্সলেশন (PAT) করে, যার ফলে সার্ভার বাইরে থেকে প্যাচ নামাতে পারে কিন্তু ইন্টারনেটের কেউ ভেতরমুখী নতুন সংযোগ শুরু করতে পারে না।',
      },
    },
    {
      q: {
        en: 'Why do enterprise cloud architects choose AWS Transit Gateway over a complex mesh of VPC Peering connections?',
        bn: 'এন্টারপ্রাইজ ক্লাউড আর্কিটেক্টরা কেন জটিল ভিপিসি পিয়ারিং জালের পরিবর্তে এডাব্লিউএস ট্রানজিট গেটওয়ে বেছে নেন?',
      },
      a: {
        en: 'VPC Peering does not support transitive routing (if VPC A peers with B, and B peers with C, A cannot reach C). Connecting N VPCs requires N*(N-1)/2 individual peerings, causing combinatorial explosion at scale. AWS Transit Gateway acts as a centralized cloud router: all VPCs attach once to the central hub, supporting transitive routing, simplified routing tables, and centralized traffic inspection firewalls.',
        bn: 'ভিপিসি পিয়ারিং ট্রানজিটিভ রাউটিং সমর্থন করে না (A যদি B-এর সাথে এবং B যদি C-এর সাথে পিয়ার্ড হয়, তবে A সরাসরি C-তে পৌঁছাতে পারে না)। N সংখ্যক ভিপিসি জুড়তে N*(N-1)/2 সংখ্যক জটিল সংযোগ তৈরি করতে হয়। ট্রানজিট গেটওয়ে একটি কেন্দ্রীয় ক্লাউড রাউটার হিসেবে কাজ করে: সব ভিপিসি একবার এই হাবে যুক্ত হয় এবং সহজ রাউট টেবিল ও সেন্ট্রাল ফায়ারওয়াল ইন্সপেকশন সুবিধা দেয়।',
      },
    },
    {
      q: {
        en: 'How does AWS PrivateLink provide a more secure and cost-effective architecture than routing private service traffic over public NAT Gateways?',
        bn: 'পাবলিক ন্যাট গেটওয়ের ওপর দিয়ে ট্রাফিক পাঠানোর চেয়ে এডাব্লিউএস প্রাইভেটলিংক কীভাবে বেশি নিরাপদ ও সাশ্রয়ী আর্কিটেকচার নিশ্চিত করে?',
      },
      a: {
        en: 'PrivateLink establishes private Network Load Balancer endpoint services within the AWS software-defined network. Traffic between producer and consumer VPCs never transverses the public internet, eliminates NAT Gateway processing charges, prevents IP address exposure, and functions even when consumer and producer VPCs share overlapping CIDR address blocks.',
        bn: 'প্রাইভেটলিংক এডাব্লিউএস সফটওয়্যার-ডিফাইন্ড নেটওয়ার্কের ভেতরে সরাসরি প্রাইভেট নেটওয়ার্ক লোড ব্যালেন্সার এন্ডপয়েন্ট তৈরি করে। এর ফলে ট্রাফিক কখনোই পাবলিক ইন্টারনেটে যায় না, ন্যাট গেটওয়ের অতিরিক্ত ডাটা খরচ বাঁচে, আইপি উন্মুক্ত হয় না এবং দুটি ভিপিসির সিআইডিআর রেঞ্জ হুবহু এক হলেও নিরাপদে যোগাযোগ করা যায়।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Netflix Multi-Region Cloud Network: Uses Transit Gateways, BGP Anycast, and PrivateLink to orchestrate microservice communications across multi-account AWS regions with zero public internet traversal.',
      bn: 'নেটফ্লিক্স মাল্টি-রিজিয়ন ক্লাউড নেটওয়ার্ক: কোনো পাবলিক ইন্টারনেট ট্রাভার্সাল ছাড়াই বিভিন্ন রিজিয়ন ও অ্যাকাউন্টে যোগাযোগ বজায় রাখতে ট্রানজিট গেটওয়ে, বিজিপি এনিকাস্ট ও প্রাইভেটলিংক ব্যবহার করে।',
    },
    {
      en: 'Stripe Isolated Enclaves: Enforces strict tenant separation using dedicated private database VPCs, VPC peering with mutual authentication, and centralized AWS Network Firewalls for PCI-DSS compliance.',
      bn: 'স্ট্রাইপ আইসোলেটেড এনক্লেভ: পিসিআই-ডিএসএস নিরাপত্তা মানদণ্ড নিশ্চিত করতে ডেডিকেটেড ডাটাবেজ ভিপিসি, পারস্পরিক অথেন্টিকেশন সহ ভিপিসি পিয়ারিং এবং সেন্ট্রাল নেটওয়ার্ক ফায়ারওয়াল পরিচালনা করে।',
    },
    {
      en: 'Airbnb Service-Oriented Mesh: Connects thousands of Kubernetes microservices across hundreds of AWS accounts using hub-and-spoke Transit Gateways with automated Route 53 private DNS resolution.',
      bn: 'এয়ারবিএনবি সার্ভিস-ওরিয়েন্টেড মেশ: স্বয়ংক্রিয় রুট ৫৩ প্রাইভেট ডিএনএস ও হাব-অ্যান্ড-স্পোক ট্রানজিট গেটওয়ে দিয়ে শত শত এডাব্লিউএস অ্যাকাউন্টে হাজার হাজার কুবারনেটিস মাইক্রোসার্ভিস সংযুক্ত করে।',
    },
  ],
};
