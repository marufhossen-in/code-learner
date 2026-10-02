import type { Lesson } from '../../../lib/types';

export const lastPointLesson: Lesson = {
  slug: 'the-last-single-point',
  tech: 'system-design',
  title: {
    en: 'High Availability & Single Points of Failure — Redundancy, Failover, and SLAs',
    bn: 'উচ্চ প্রাপ্যতা ও একক ব্যর্থতা বিন্দু: রিডানড্যান্সি, ফেইলওভার ও SLA'
  },
  summary: {
    en: 'A Single Point of Failure (SPOF) is any individual component whose failure halts the operation of the entire system. Designing for high availability requires eliminating SPOFs across every layer of the architecture: network load balancers, stateless application servers, in-memory caches, and persistent database storage. In this lesson, you will master the mathematical laws of serial versus parallel availability. You will compute Service Level Agreements (SLAs) and allowed downtime per year across the "nines", configure automated heartbeat health checks with circuit breakers, and implement an executable availability simulator in TypeScript.',
    bn: 'একটি সিঙ্গেল পয়েন্ট অব ফেইলিউর (SPOF) হলো সিস্টেমের এমন কোনো একক উপাদান যার ব্যর্থতায় পুরো সিস্টেমটি অচল হয়ে পড়ে। উচ্চ প্রাপ্যতা (High Availability) নিশ্চিত করতে আর্কিটেকচারের প্রতিটি স্তর থেকে SPOF দূর করতে হয়: নেটওয়ার্ক লোড ব্যালান্সার, স্টেটলেস অ্যাপ্লিকেশন সার্ভার, ইন-মেমরি ক্যাশ এবং মূল ডেটাবেস স্টোরেজ। এই পাঠে আপনি ধারাবাহিক বনাম সমান্তরাল প্রাপ্যতার গাণিতিক সূত্র শিখবেন। বিভিন্ন "নাইনস" অনুযায়ী বার্ষিক অনুমোদিত ডাউনটাইম ও SLA হিসাব, হার্টবিট ফেইলওভার ও সার্কিট ব্রেকার কনফিগারেশন এবং টাইপস্ক্রিপ্টে সরাসরি কার্যকর প্রাপ্যতা ক্যালকুলেটর বাস্তবায়ন পর্যালোচনা করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'anatomy-of-system-failure',
      text: {
        en: 'The Anatomy of System Failure: Identifying the Vulnerable Link',
        bn: 'সিস্টেম ব্যর্থতার ব্যবচ্ছেদ: দুর্বল সংযোগ চিহ্নিতকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design cloud infrastructure for mission-critical software, you must operate under the assumption that every server, disk, and network link will eventually fail.',
        bn: 'গুরুত্বপূর্ণ ক্লাউড সিস্টেম নকশা করার সময় আপনাকে ধরে নিতে হবে যে প্রতিটি সার্ভার, হার্ড ড্রাইভ ও নেটওয়ার্ক সংযোগ কোনো না কোনো সময় অবশ্যই অচল হবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Single Point of Failure (SPOF) is any non-redundant component in a request pipeline that, if compromised, causes an outage for the entire platform. To eliminate SPOFs, architects systematically trace the end-to-end user request path: from DNS lookups and load balancers to application servers, distributed caches, and persistent databases. If any component appears exactly once without an automated failover mirror, that component represents a catastrophic failure point. High availability transforms fragile serial systems into resilient parallel topologies where individual nodes are expendable.',
        bn: 'একটি সিঙ্গেল পয়েন্ট অব ফেইলিউর (SPOF) হলো রিকোয়েস্ট পাইপলাইনের এমন এক একক উপাদান যা ক্ষতিগ্রস্ত হলে পুরো প্ল্যাটফর্ম বন্ধ হয়ে যায়। সিস্টেম থেকে SPOF দূর করতে প্রকৌশলীরা শুরু থেকে শেষ পর্যন্ত পুরো ডেটা পাথ নিবিড়ভাবে পর্যবেক্ষণ করেন: ডিএনএস লুকআপ ও লোড ব্যালান্সার থেকে শুরু করে অ্যাপ্লিকেশন সার্ভার, ক্যাশ এবং মূল ডেটাবেস পর্যন্ত। কোনো উপাদান যদি বিকল্প স্ট্যান্ডবাই ছাড়া একা কাজ করে, তবে সেটিই সিস্টেমের চরম দুর্বলতা। উচ্চ প্রাপ্যতা কাঠামো একটি ভঙ্গুর ধারাবাহিক চেইনকে এমন এক সমান্তরাল ব্যবস্থায় বদলে দেয় যেখানে যেকোনো একটি সার্ভার নষ্ট হলেও সিস্টেম নির্বিঘ্নে চলতে থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'single-point-of-failure',
          def: {
            en: 'Any individual component whose breakdown brings down the entire system because no redundant backup exists.',
            bn: 'সিস্টেমের এমন কোনো একক উপাদান যার বিকল্প না থাকায় সেটি নষ্ট হলে পুরো সিস্টেম অচল হয়ে পড়ে।'
          }
        },
        {
          term: 'high-availability',
          def: {
            en: 'A system characteristic aiming to ensure an agreed operational uptime level (such as 99.9% or 99.99%) through redundancy and automatic failover.',
            bn: 'রিডানড্যান্সি ও স্বয়ংক্রিয় ফেইলওভারের মাধ্যমে সিস্টেমকে নিরবচ্ছিন্নভাবে সচল (যেমন ৯৯.৯% বা ৯৯.৯৯% সময়) রাখার কৌশল।'
          }
        },
        {
          term: 'active-passive-failover',
          def: {
            en: 'A redundancy configuration where a primary node handles all traffic while a standby replica synchronizes state, ready to take over if the primary dies.',
            bn: 'এমন এক বিকল্প ব্যবস্থা যেখানে একটি মূল সার্ভার সব কাজ সামলায় এবং একটি ব্যাকআপ সার্ভার প্রস্তুত থাকে যাতে মূল সার্ভার নষ্ট হলে সাথে সাথে দায়িত্ব নিতে পারে।'
          }
        },
        {
          term: 'circuit-breaker-pattern',
          def: {
            en: 'A protective software design pattern that immediately fails requests when a downstream service is struggling, preventing cascading system-wide crashes.',
            bn: 'একটি সফটওয়্যার ডিজাইন প্যাটার্ন যা পেছনের কোনো সার্ভিস নষ্ট হলে অতিরিক্ত জ্যাম তৈরি না করে সাথে সাথে নিরাপদ বার্তা দিয়ে সিস্টেমকে বাঁচায়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'mathematics-of-availability-table',
      text: {
        en: 'The Mathematics of Availability: Serial Chains vs Parallel Redundancy',
        bn: 'প্রাপ্যতার পাটিগণিত: ধারাবাহিক চেইন বনাম সমান্তরাল রিডানড্যান্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'System availability follows strict mathematical probability rules: dependent components in a serial chain multiply availability downward, while redundant components in parallel multiply availability upward.',
        bn: 'সিস্টেমের প্রাপ্যতা কঠোর সম্ভাব্যতা সূত্র মেনে চলে: ধারাবাহিকভাবে যুক্ত উপাদান প্রাপ্যতার হার নিচে নামিয়ে দেয়, আর সমান্তরাল বিকল্প উপাদান সামগ্রিক প্রাপ্যতা নাটকীয়ভাবে বাড়িয়ে তোলে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'SLA Availability Tier', bn: 'SLA প্রাপ্যতার স্তর' },
        { en: 'Availability Percentage', bn: 'প্রাপ্যতার শতকরা হার' },
        { en: 'Allowed Downtime per Year', bn: 'বছরে সর্বোচ্চ ডাউনটাইম' },
        { en: 'Allowed Downtime per Month', bn: 'মাসে সর্বোচ্চ ডাউনটাইম' }
      ],
      rows: [
        [
          { en: 'Two Nines', bn: 'টু নাইনস (২টি নয়)' },
          { en: '99.0%', bn: '৯৯.০%' },
          { en: '3 days, 15 hours, 36 minutes', bn: '৩ দিন, ১৫ ঘণ্টা, ৩৬ মিনিট' },
          { en: '7 hours, 18 minutes', bn: '৭ ঘণ্টা, ১৮ মিনিট' }
        ],
        [
          { en: 'Three Nines', bn: 'থ্রি নাইনস (৩টি নয়)' },
          { en: '99.9%', bn: '৯৯.৯%' },
          { en: '8 hours, 45 minutes, 57 seconds', bn: '৮ ঘণ্টা, ৪৫ মিনিট, ৫৭ সেকেন্ড' },
          { en: '43 minutes, 49 seconds', bn: '৪৩ মিনিট, ৪৯ সেকেন্ড' }
        ],
        [
          { en: 'Four Nines', bn: 'ফোর নাইনস (৪টি নয়)' },
          { en: '99.99%', bn: '৯৯.৯৯%' },
          { en: '52 minutes, 36 seconds', bn: '৫২ মিনিট, ৩৬ সেকেন্ড' },
          { en: '4 minutes, 23 seconds', bn: '৪ মিনিট, ২৩ সেকেন্ড' }
        ],
        [
          { en: 'Five Nines', bn: 'ফাইভ নাইনস (৫টি নয়)' },
          { en: '99.999%', bn: '৯৯.৯৯৯%' },
          { en: '5 minutes, 15 seconds', bn: '৫ মিনিট, ১৫ সেকেন্ড' },
          { en: '26 seconds', bn: '২৬ সেকেন্ড' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-availability-code',
      text: {
        en: 'Executable Availability Calculator and Redundancy Simulation',
        bn: 'প্রাপ্যতা ক্যালকুলেটরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates compound availability across serial dependent components versus parallel redundant nodes, computing annual downtime in minutes.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৩টি ধারাবাহিক উপাদানের সম্মিলিত প্রাপ্যতা এবং ২টি সমান্তরাল নোডের সম্মিলিত প্রাপ্যতা ও বার্ষিক ডাউনটাইম মিনিটের হিসাবে গণনা করে।'
      }
    },
    {
      type: 'code',
      code: `// Compound System Availability and SLA Downtime Calculator

interface AvailabilityMetrics {
  serialChainPercent: number;
  parallelPairPercent: number;
  annualDowntimeMinutes: number;
}

function computeSystemAvailability(): AvailabilityMetrics {
  const componentAvailability = 0.99; // 99% per component

  // 1. Serial Chain: 3 dependent components in series (A * B * C)
  // The system is only up if ALL three components are working
  const serialChain = Math.pow(componentAvailability, 3);
  const serialChainPercent = Number((serialChain * 100).toFixed(2));

  // 2. Parallel Redundancy: 2 identical servers in parallel
  // The system is up if AT LEAST ONE server is working: 1 - (1 - A)^2
  const parallelPair = 1 - Math.pow(1 - componentAvailability, 2);
  const parallelPairPercent = Number((parallelPair * 100).toFixed(2));

  // 3. Annual Downtime calculation for 4 Nines (99.99% SLA)
  // Total minutes in a standard 365-day year = 365 * 24 * 60 = 525,600 minutes
  const totalMinutesInYear = 365 * 24 * 60;
  const fourNinesUptime = 0.9999;
  const annualDowntimeMinutes = Number(
    ((1 - fourNinesUptime) * totalMinutesInYear).toFixed(1)
  );

  return {
    serialChainPercent,
    parallelPairPercent,
    annualDowntimeMinutes
  };
}

const stats = computeSystemAvailability();

console.log('Serial chain availability (3 nodes at 99%):', stats.serialChainPercent + '%');
console.log('Parallel pair availability (2 nodes at 99%):', stats.parallelPairPercent + '%');
console.log('Annual downtime for 99.99% SLA (minutes):', stats.annualDowntimeMinutes);

// prints: Serial chain availability (3 nodes at 99%): 97.03%
// prints: Parallel pair availability (2 nodes at 99%): 99.99%
// prints: Annual downtime for 99.99% SLA (minutes): 52.6`
    },
    {
      type: 'heading',
      id: 'split-brain-and-fencing-defense',
      text: {
        en: 'Split-Brain Syndrome and Fencing Mechanisms',
        bn: 'স্প্লিট-ব্রেইন সিন্ড্রোম এবং ফেন্সিং মেকানিজম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In active-passive failover systems, a critical hazard known as Split-Brain occurs when a network partition severs communication between the primary and standby nodes. If the standby falsely presumes the primary has crashed, it promotes itself to active leader while the original primary continues accepting writes. Because both nodes accept writes independently without synchronization, database records diverge catastrophically. Distributed systems prevent split-brain using Quorum consensus algorithms (requiring a strict majority vote across an odd number of nodes, such as 3 or 5) and automated Fencing tokens (ensuring stale leaders are stripped of write permissions).',
        bn: 'অ্যাক্টিভ-প্যাসিভ ফেইলওভার সিস্টেমে স্প্লিট-ব্রেইন (Split-Brain) নামক এক বিপজ্জনক সমস্যা দেখা দিতে পারে যখন নেটওয়ার্কের গোলযোগের কারণে মূল সার্ভার ও ব্যাকআপ সার্ভারের মধ্যকার যোগাযোগ বিচ্ছিন্ন হয়ে যায়। ব্যাকআপ সার্ভার যদি ভুল করে ধরে নেয় মূল সার্ভারটি নষ্ট হয়ে গেছে, তবে সে নিজেকে নতুন লিডার ঘোষণা করে; ওদিকে আগের মূল সার্ভারটিও চালু থেকে ডেটা লিখতে থাকে। এর ফলে উভয় সার্ভার আলাদাভাবে ডেটা গ্রহণ করায় ডেটাবেসে মারাত্মক অমিল তৈরি হয়। ডিস্ট্রিবিউটেড সিস্টেমে এই সংকট এড়াতে কোরাম কনসেনসাস অ্যালগরিদম (বিজোড় সংখ্যক সার্ভার, যেমন ৩ বা ৫টি নোডের সংখ্যাগরিষ্ঠ ভোট) এবং ফেন্সিং টোকেন ব্যবহার করা হয় যা পুরনো লিডারের ডেটা লেখার ক্ষমতা সাথে সাথে বাতিল করে দেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Eliminate every single point of failure: Ensure every architectural layer possesses automated redundant failover nodes.',
          bn: 'প্রতিটি একক দুর্বলতা দূর করুন: সিস্টেমের প্রতিটি স্তরে যেন স্বয়ংক্রিয় বিকল্প ব্যাকআপ নোড থাকে তা নিশ্চিত করুন।'
        },
        {
          en: 'Parallel redundancy multiplies availability upward: Two 99% nodes in parallel deliver 99.99% compound availability.',
          bn: 'সমান্তরাল বিকল্প প্রাপ্যতা বাড়ায়: ৯৯% প্রাপ্যতার ২টি নোড সমান্তরালে সাজালে মিলিত প্রাপ্যতা ৯৯.৯৯% এ উন্নীত হয়।'
        },
        {
          en: 'Serial dependencies degrade availability: A chain of three 99% dependencies drops overall system availability down to 97.03%.',
          bn: 'ধারাবাহিক নির্ভরতা প্রাপ্যতা কমায়: ৯৯% প্রাপ্যতার ৩টি নির্ভরশীল উপাদান একসাথে থাকলে সামগ্রিক প্রাপ্যতা কমে ৯৭.০৩% হয়ে যায়।'
        },
        {
          en: 'Prevent split-brain with odd quorums: Use majority quorums (3 or 5 nodes) and fencing tokens to prevent dual-leader data divergence.',
          bn: 'বিজোড় কোরাম দিয়ে স্প্লিট-ব্রেইন ঠেকান: ৩ বা ৫টি নোডের সংখ্যাগরিষ্ঠ কোরাম ও ফেন্সিং নিশ্চিত করে দুটি লিডার তৈরি হওয়া রোধ করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-storage-ledger',
    tech: 'system-design',
    title: {
      en: 'Storage Systems & Database Engines — SQL vs NoSQL, B-Trees, and LSM-Trees',
      bn: 'স্টোরেজ সিস্টেমস ও ডেটাবেস ইঞ্জিন: এসকিউএল বনাম নোএসকিউএল'
    }
  },
  exercises: [
    {
      id: 'point-ex1',
      kind: 'mcq',
      topic: 'spof-definition-and-identification',
      question: {
        en: 'In distributed system architecture, what defines a Single Point of Failure (SPOF)?',
        bn: 'ডিস্ট্রিবিউটেড সিস্টেম আর্কিটেকচারে সিঙ্গেল পয়েন্ট অব ফেইলিউর (SPOF) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'Any individual hardware or software component whose failure causes the entire system to stop functioning because no redundant standby exists',
          bn: 'সিস্টেমের এমন কোনো একক হার্ডওয়্যার বা সফটওয়্যার উপাদান যার বিকল্প না থাকায় সেটি নষ্ট হলে পুরো সিস্টেম অচল হয়ে পড়ে'
        },
        {
          en: 'A computer monitor that only displays black and white images',
          bn: 'এমন একটি মনিটর যা কেবল সাদাকালো ছবি প্রদর্শন করতে পারে'
        },
        {
          en: 'A software bug that makes web page buttons turn blue',
          bn: 'এমন একটি বাগ যার কারণে ওয়েবসাইটের বাটন নীল হয়ে যায়'
        },
        {
          en: 'SPOF refers to computers running on battery power',
          bn: 'SPOF বলতে ব্যাটারিতে চলা কম্পিউটারকে বোঝায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If component X dies, does the entire platform go offline? If yes, X is a SPOF.',
        bn: 'যদি অমুক সার্ভার নষ্ট হলে পুরো প্ল্যাটফর্ম বন্ধ হয়ে যায়, তবে সেটিই একটি SPOF।'
      },
      explanation: {
        en: 'SPOFs lack redundant backups; their failure brings down the entire service until manual or automated recovery occurs.',
        bn: 'SPOF-এর কোনো বিকল্প ব্যাকআপ থাকে না, ফলে সেটি বিকল হলে পুরো সার্ভিস অচল হয়ে পড়ে।'
      }
    },
    {
      id: 'point-ex2',
      kind: 'mcq',
      topic: 'stateless-application-tier-benefit',
      question: {
        en: 'Why is designing application web servers to be strictly "stateless" a fundamental requirement for high availability?',
        bn: 'উচ্চ প্রাপ্যতা নিশ্চিত করতে অ্যাপ্লিকেশন ওয়েব সার্ভারগুলোকে সম্পূর্ণ "স্টেটলেস" রাখা কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'Stateless servers hold no persistent local session data; if any server crashes, a load balancer can instantly route requests to any other server without session loss',
          bn: 'স্টেটলেস সার্ভারে কোনো স্থায়ী তথ্য জমা থাকে না; ফলে যেকোনো একটি সার্ভার ক্র্যাশ করলেও ব্যবহারকারীর ক্ষতি না করে লোড ব্যালান্সার অন্য সার্ভারে রিকোয়েস্ট পাঠিয়ে দিতে পারে'
        },
        {
          en: 'Stateless servers require zero electrical power to operate',
          bn: 'স্টেটলেস সার্ভার চালাতে কোনো বিদ্যুতের প্রয়োজন হয় না'
        },
        {
          en: 'Because stateless servers format their hard drives every 10 seconds',
          bn: 'কারণ স্টেটলেস সার্ভার প্রতি ১০ সেকেন্ড পরপর হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'Stateless servers were mandated by international labor treaties in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক আইনে স্টেটলেস সার্ভার বাধ্যতামূলক করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a server holds state in its local memory, losing that server loses user sessions. Statelessness makes servers expendable.',
        bn: 'সার্ভারে সেশন ডেটা না থাকলে যেকোনো সার্ভার নষ্ট হলেও ব্যবহারকারী কোনো পার্থক্য বুঝতে পারেন না।'
      },
      explanation: {
        en: 'Statelessness decouples application logic from user state (which lives in shared caches/databases), enabling seamless horizontal scaling and failover.',
        bn: 'স্টেটলেস পদ্ধতি সার্ভারকে সেশন থেকে মুক্ত করে লোড ব্যালান্সিং ও স্বয়ংক্রিয় ফেইলওভারকে অত্যন্ত সহজ করে তোলে।'
      }
    },
    {
      id: 'point-ex3',
      kind: 'mcq',
      topic: 'compound-availability-math',
      question: {
        en: 'If a web application depends on three sequential services (DNS at 99.0%, Web Server at 99.0%, Database at 99.0%), what is the compound availability of the serial chain?',
        bn: 'যদি একটি ওয়েব অ্যাপ্লিকেশন পরপর ৩টি সার্ভিসের ওপর ধারাবাহিকভাবে নির্ভরশীল হয় (ডিএনএস ৯৯.০%, সার্ভার ৯৯.০%, ডেটাবেস ৯৯.০%), তবে সামগ্রিক প্রাপ্যতা কত হবে?'
      },
      options: [
        {
          en: '97.03%, calculated as 0.99 × 0.99 × 0.99 (serial dependencies multiply availability downward)',
          bn: '৯৭.০৩%, যা ০.৯৯ × ০.৯৯ × ০.৯৯ সূত্র দিয়ে হিসাব করা হয় (ধারাবাহিক চেইনে প্রাপ্যতা কমে যায়)'
        },
        {
          en: '99.999%, because three nines always combine into five nines',
          bn: '৯৯.৯৯৯%, কারণ ৩টি নয় মিলে ৫টি নয় তৈরি করে'
        },
        {
          en: '100%, because servers always operate perfectly',
          bn: '১০০%, কারণ সার্ভার সবসময় নিখুঁতভাবে চলে'
        },
        {
          en: '33.3%, by dividing 99.0% by the three components',
          bn: '৩৩.৩%, ৯৯.০% কে ৩ দিয়ে ভাগ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Serial dependencies multiply together: 0.99 * 0.99 * 0.99 = 0.970299.',
        bn: 'ধারাবাহিক গুণ করুন: ০.৯৯ * ০.৯৯ * ০.৯৯ = ০.৯৭০২৯৯ বা ৯৭.০৩%।'
      },
      explanation: {
        en: 'Serial chains compound failure probabilities; each added dependency reduces overall system availability.',
        bn: 'ধারাবাহিক নির্ভরশীলতা সিস্টেমের সামগ্রিক প্রাপ্যতা কমিয়ে দেয়; প্রতি নতুন উপাদান সিস্টেমকে আরও দুর্বল করে।'
      }
    },
    {
      id: 'point-ex4',
      kind: 'mcq',
      topic: 'split-brain-syndrome-danger',
      question: {
        en: 'What dangerous data corruption problem occurs during "Split-Brain Syndrome" in a clustered active-passive database?',
        bn: 'একটি ক্লাস্টার্ড অ্যাক্টিভ-প্যাসিভ ডেটাবেসে "স্প্লিট-ব্রেইন সিন্ড্রোম" ঘটলে কোন মারাত্মক সমস্যা তৈরি হয়?'
      },
      options: [
        {
          en: 'A network partition causes both the primary and standby to believe they are the sole active leader; both accept conflicting writes simultaneously, corrupting data integrity',
          bn: 'নেটওয়ার্ক বিচ্ছিন্নতার কারণে মূল ও ব্যাকআপ উভয় সার্ভারই নিজেকে একমাত্র সক্রিয় লিডার মনে করে এবং একসাথে আলাদা আলাদা ডেটা লিখে ডেটাবেসের অখণ্ডতা নষ্ট করে'
        },
        {
          en: 'The computer processor splits physically in half down the middle',
          bn: 'কম্পিউটারের প্রসেসর মাঝখান থেকে ভেঙে দুই টুকরো হয়ে যায়'
        },
        {
          en: 'The database compresses all numbers to zero',
          bn: 'ডেটাবেসের সমস্ত সংখ্যা শূন্যে রূপান্তর হয়ে যায়'
        },
        {
          en: 'Because split-brain causes the server room lights to flash',
          bn: 'কারণ এতে সার্ভার রুমের লাইট জ্বলতে ও নিভতে থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Two leaders at the same time writing conflicting transactions into independent storage copies.',
        bn: 'একসাথে দুটি লিডার তৈরি হয়ে ভিন্ন ভিন্ন ডেটা লিখতে থাকলে ডেটাবেস সম্পূর্ণ এলোমেলো হয়ে যায়।'
      },
      explanation: {
        en: 'Split-brain produces divergent datasets across partitioned nodes, requiring quorum consensus to prevent unauthorized dual promotion.',
        bn: 'স্প্লিট-ব্রেইন তথ্যের অমিল তৈরি করে; কোরাম নীতি প্রয়োগ করে নিশ্চিত করতে হয় যেন কেবল একটি সার্ভারই লিডার হতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'last-single-point-quiz',
    title: {
      en: 'High Availability, Redundancy, and SLA Resilience Quiz',
      bn: 'উচ্চ প্রাপ্যতা, রিডানড্যান্সি ও SLA স্থিতিস্থাপকতা কুইজ'
    },
    questions: [
      {
        id: 'lsp-q1',
        kind: 'mcq',
        topic: 'four-nines-annual-downtime',
        question: {
          en: 'Under a "Four Nines" (99.99%) availability Service Level Agreement (SLA), what is the maximum allowed unplanned downtime per calendar year?',
          bn: '"ফোর নাইনস" (৯৯.৯৯%) প্রাপ্যতার SLA চুক্তিতে প্রতি বছর সর্বোচ্চ কতটুকু সময় ডাউনটাইম অনুমোদিত?'
        },
        options: [
          {
            en: 'Approximately 52.6 minutes per year (calculated as (1 - 0.9999) × 525600 minutes)',
            bn: 'বছরে প্রায় ৫২.৬ মিনিট (যা (১ - ০.৯৯৯৯) × ৫২৫৬০০ মিনিট সূত্র দিয়ে হিসাব করা হয়)'
          },
          {
            en: '30 full days per year',
            bn: 'বছরে পুরো ৩০ দিন'
          },
          {
            en: '10 hours per week',
            bn: 'প্রতি সপ্তাহে ১০ ঘণ্টা'
          },
          {
            en: 'Zero seconds; four nines permits zero downtime',
            bn: 'শূন্য সেকেন্ড; ফোর নাইনসে কোনো ডাউনটাইম অনুমোদিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In a year of 525600 minutes, 0.01% downtime equals 52.56 minutes.',
          bn: 'বছরের মোট ৫২৫৬০০ মিনিটের ০.০১% হলো প্রায় ৫২.৫৬ মিনিট।'
        },
        explanation: {
          en: 'A 99.99% SLA allows only 52.6 minutes of downtime per year, requiring automated sub-minute failovers rather than human intervention.',
          bn: '৯৯.৯৯% প্রাপ্যতা বজায় রাখতে বছরে মাত্র ৫২.৬ মিনিটের বেশি সিস্টেম বন্ধ রাখা যাবে না, ফলে স্বয়ংক্রিয় ফেইলওভার থাকা আবশ্যক।'
        }
      },
      {
        id: 'lsp-q2',
        kind: 'mcq',
        topic: 'circuit-breaker-state-transitions',
        question: {
          en: 'In distributed microservices, how does the Circuit Breaker pattern protect upstream services when a downstream database slows down?',
          bn: 'ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসে নিচের কোনো ডেটাবেস ধীরগতির হয়ে পড়লে সার্কিট ব্রেকার প্যাটার্ন কীভাবে ওপরের সার্ভিসগুলোকে রক্ষা করে?'
        },
        options: [
          {
            en: 'After a threshold of consecutive failures, the breaker trips to "Open" state, immediately rejecting subsequent calls with a fast fallback without exhausting server thread pools',
            bn: 'নির্দিষ্ট সংখ্যক ব্যর্থতার পর সার্কিটটি "ওপেন" হয়ে যায় এবং নতুন রিকোয়েস্টগুলোকে অপেক্ষা না করিয়ে সাথে সাথে দ্রুত ফলব্যাক দেয়, যাতে সার্ভারের মেমরি ও থ্রেড জ্যাম না হয়'
          },
          {
            en: 'The circuit breaker turns off the electrical circuit breaker in the building',
            bn: 'সার্কিট ব্রেকার অফিসের বিদ্যুৎ মেইন সুইচ বন্ধ করে দেয়'
          },
          {
            en: 'It accelerates downstream database queries by 1000 percent',
            bn: 'এটি নিচের ডেটাবেস কোয়েরির গতি ১০০০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'Because circuit breakers format server storage drives on every error',
            bn: 'কারণ সার্কিট ব্রেকার প্রতিটি এররে সার্ভার ড্রাইভ ফরম্যাট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Failing fast prevents thread pools from filling up with hanging requests.',
          bn: 'দ্রুত ব্যর্থতার বার্তা দিলে সার্ভার আটকে না থেকে অন্যান্য কাজ স্বাভাবিকভাবে চালিয়ে যেতে পারে।'
        },
        explanation: {
          en: 'Circuit breakers prevent cascading resource exhaustion by short-circuiting calls to degraded downstream dependencies.',
          bn: 'সার্কিট ব্রেকার অসুস্থ সার্ভিসে কল যাওয়া সাময়িকভাবে বন্ধ রেখে পুরো সিস্টেমের বিপর্যয় ঠেকায়।'
        }
      },
      {
        id: 'lsp-q3',
        kind: 'mcq',
        topic: 'quorum-majority-rule',
        question: {
          en: 'Why do distributed consensus clusters (such as Raft or ZooKeeper) deploy an odd number of voting nodes (e.g. 3, 5, or 7)?',
          bn: 'ডিস্ট্রিবিউটেড ক্লাস্টারে (যেমন Raft বা ZooKeeper) কেন সবসময় বিজোড় সংখ্যক ভোটিং নোড (যেমন ৩, ৫ বা ৭টি) রাখা হয়?'
        },
        options: [
          {
            en: 'An odd number guarantees that a strict majority (e.g. 2 of 3, or 3 of 5) can always be achieved without tie splits, preventing split-brain partitions from electing conflicting leaders',
            bn: 'বিজোড় সংখ্যা নিশ্চিত করে যে সবসময় একটি স্পষ্ট সংখ্যাগরিষ্ঠতা (যেমন ৩টির মধ্যে ২টি, বা ৫টির মধ্যে ৩টি) পাওয়া যাবে এবং কোনো টাই ছাড়াই একক লিডার নির্বাচন করা সম্ভব হবে'
          },
          {
            en: 'Odd numbers consume 50 percent less electrical current than even numbers',
            bn: 'বিজোড় সংখ্যায় জোড় সংখ্যার চেয়ে ৫০ শতাংশ কম বিদ্যুৎ খরচ হয়'
          },
          {
            en: 'Because even numbers of servers are not recognized by internet routers',
            bn: 'কারণ ইন্টারনেট রাউটার জোড় সংখ্যক সার্ভার চিনতে পারে না'
          },
          {
            en: 'Odd-node clustering was invented by the International Maritime Organization',
            bn: 'কারণ আন্তর্জাতিক নৌ সংস্থা বিজোড় ক্লাস্টার উদ্ভাবন করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'In an even cluster of 4 nodes, a partition can split into 2 vs 2. In an odd cluster of 5 nodes, the split is always 3 vs 2.',
          bn: '৪টি নোড সমান দুই ভাগে (২ বনাম ২) ভাগ হতে পারে; কিন্তু ৫টি নোড ভাগ হলে একপাশে অবশ্যই ৩টি থাকবে (সংখ্যাগরিষ্ঠ)।'
        },
        explanation: {
          en: 'Odd quorums prevent 50/50 split votes, guaranteeing that only one network partition can form a functioning majority.',
          bn: 'বিজোড় কোরাম সমান সমান ভোটের অচলাবস্থা দূর করে যেকোনো বিভাজনে একটিমাত্র সংখ্যাগরিষ্ঠ গ্রুপ তৈরি নিশ্চিত করে।'
        }
      },
      {
        id: 'lsp-q4',
        kind: 'mcq',
        topic: 'health-check-zombie-detection',
        question: {
          en: 'Why is a simple TCP connection ping or HTTP "/health" endpoint that merely returns "200 OK" considered dangerously inadequate for load balancer health checks?',
          bn: 'লোড ব্যালান্সারের হেলথ চেকে কেবল একটি সাধারণ টিসিপি পিং বা "/health" এ "200 OK" ফেরত দেওয়া কেন ঝুঁকিপূর্ণ ও অপর্যাপ্ত?'
        },
        options: [
          {
            en: 'The web framework process may respond with 200 OK even if internal database connection pools are completely exhausted, threads are deadlocked, or the disk is full',
            bn: 'সার্ভারের ওয়েব ফ্রেমওয়ার্ক ২০০ কোড দিতে পারে এমনকি যখন তার ভেতরের ডেটাবেস সংযোগ পুরোপুরি বিচ্ছিন্ন, থ্রেড জ্যাম বা ডিস্ক সম্পূর্ণ ভর্তি হয়ে গেছে'
          },
          {
            en: 'Health checks consume 100 percent of internet server bandwidth',
            bn: 'হেলথ চেক সার্ভারের ইন্টারনেটের ১০০ শতাংশ ব্যান্ডউইথ খরচ করে ফেলে'
          },
          {
            en: 'Because HTTP 200 was replaced by HTTP 500 in 2023',
            bn: 'কারণ ২০২৩ সালে ২০০ কোডের বদলে ৫০০ কোড ব্যবহার বাধ্যতামূলক করা হয়েছে'
          },
          {
            en: 'Health checks cause computer monitors to change screen resolution',
            bn: 'হেলথ চেক মনিটরের রেজোলিউশন বদলে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A zombie server has a heartbeat, but cannot do real work. Deep health checks must test database and dependency reachability.',
          bn: 'একটি অচল সার্ভারও পিং-এর উত্তর দিতে পারে; গভীর হেলথ চেকে ডেটাবেস ও অন্যান্য সংযোগ সচল আছে কি না তা পরখ করতে হয়।'
        },
        explanation: {
          en: 'Deep health checks verify critical subsystems (database connections, disk space) to prevent routing traffic to deadlocked zombie nodes.',
          bn: 'গভীর হেলথ চেক ডেটাবেস ও মেমরি পরীক্ষা করে নিশ্চিত করে যে সার্ভারটি কেবল বেঁচে নেই, সে বাস্তব কাজ করতেও সক্ষম।'
        }
      }
    ]
  }
};
