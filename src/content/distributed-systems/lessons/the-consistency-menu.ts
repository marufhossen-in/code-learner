import type { Lesson } from '../../../lib/types';

export const consistencyMenuLesson: Lesson = {
  slug: 'the-consistency-menu',
  tech: 'distributed-systems',
  title: {
    en: 'The Consistency Menu — Linearizability to Eventual Consistency',
    bn: 'ধারাবাহিকতার তালিকা: লিনিয়ারাইজ্যাবিলিটি থেকে ইভেনচুয়াল ধারাবাহিকতা'
  },
  summary: {
    en: 'In distributed systems, consistency is not a binary choice but a spectrum of formal trade-offs. Linearizability promises that every read returns the most recent write in real wall-clock time, making the entire distributed cluster appear as a single atomic register. Sequential consistency preserves the program order of each process while relaxing real-time constraints. Causal consistency guarantees that causally related events are observed in identical order everywhere, representing the strongest model achievable during network partitions. Finally, eventual consistency maximizes availability and throughput by allowing replicas to converge asynchronously over time.',
    bn: 'বিতরণকৃত সিস্টেমে ধারাবাহিকতা কোনো একক হ্যাঁ-না সিদ্ধান্ত নয়, বরং বিভিন্ন গাণিতিক বৈশিষ্ট্যের একটি বিস্তৃত তালিকা। লিনিয়ারাইজ্যাবিলিটি নিশ্চিত করে যে প্রতিটি রিড অপারেশন বাস্তব ঘড়ির সময়ে সর্বশেষ রাইটের মান প্রদান করবে, ফলে পুরো ক্লাস্টারটিকে একটি একক মেমরি রেজিস্টার বলে মনে হয়। সিকোয়েনশিয়াল ধারাবাহিকতা প্রতিটি প্রসেসের অভ্যন্তরীণ ক্রম বজায় রেখে রিয়েল-টাইম বাধ্যবাধকতা শিথিল করে। কজাল ধারাবাহিকতা নিশ্চিত করে যে সম্পর্কযুক্ত ঘটনাগুলো সব নোডে একই ক্রমে দেখা যাবে, যা নেটওয়ার্ক বিভাজনের সময়ও কাজ করে। সর্বশেষে, ইভেনচুয়াল ধারাবাহিকতা দীর্ঘমেয়াদে নোডগুলোকে মিলে যাওয়ার সুযোগ দিয়ে প্রাপ্যতা ও গতি সর্বাধিক করে।'
  },
  minutes: 29,
  nextLesson: {
    slug: 'time-without-clocks',
    tech: 'distributed-systems',
    title: {
      en: 'Time Without Clocks — Lamport and Vector Timestamps',
      bn: 'ঘড়িহীন সময়: ল্যাম্পোর্ট এবং ভেক্টর টাইমস্ট্যাম্প'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'consistency-spectrum-overview',
      text: {
        en: 'The Spectrum of Distributed Consistency Models',
        bn: 'বিতরণকৃত ধারাবাহিকতা মডেলের রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design a distributed data store, you quickly discover that different features require different consistency guarantees. A bank account balance transferring money between accounts requires strict real-time guarantees, while an analytics dashboard counting page views can tolerate minor delays.',
        bn: 'যখন আপনি একটি বিতরণকৃত ডেটা স্টোর তৈরি করেন, তখন দেখতে পাবেন যে বিভিন্ন ফিচারের জন্য ভিন্ন ভিন্ন ধারাবাহিকতার প্রয়োজন হয়। এক অ্যাকাউন্ট থেকে অন্য অ্যাকাউন্টে টাকা পাঠানোর জন্য রিয়েল-টাইম নিরাপত্তার দরকার হয়, কিন্তু ওয়েবসাইটের ভিজিটর গণনায় সামান্য বিলম্ব কোনো ক্ষতি করে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consistency models define the precise rules governing what values a read operation is allowed to return. At the top of the hierarchy sits Linearizability, providing the illusion of a single centralized memory location. At the base sits Eventual Consistency, prioritizing low latency and network partition resilience.',
        bn: 'ধারাবাহিকতা মডেলগুলো নির্দিষ্ট নিয়ম তৈরি করে যে একটি রিড অপারেশনে কোন মানটি ফেরত আসতে পারবে। এই তালিকার শীর্ষে রয়েছে লিনিয়ারাইজ্যাবিলিটি, যা একাধিক নোডের ক্লাস্টারকে একটি একক সেন্ট্রাল মেমরির মতো উপস্থাপন করে। আর এর ভিত্তিতে রয়েছে ইভেনচুয়াল ধারাবাহিকতা, যা কম লেটেন্সি এবং নেটওয়ার্ক বিভাজন সহ্য করার ক্ষমতাকে অগ্রাধিকার দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'linearizability',
          def: {
            en: 'The strongest single-object consistency model, guaranteeing that every read reflects the latest committed write in real wall-clock time.',
            bn: 'সর্বোচ্চ ধারাবাহিকতা মডেল, যা বাস্তব ঘড়ির সময়ে প্রতিটি রিডে সর্বশেষ সফল রাইট পাওয়ার নিশ্চয়তা দেয়।'
          }
        },
        {
          term: 'sequential-consistency',
          def: {
            en: 'A consistency model requiring all operations to appear in a single global sequence consistent with each process’s local order.',
            bn: 'এমন একটি মডেল যেখানে সমস্ত অপারেশন এমন একটি বৈশ্বিক ক্রমে ঘটে যা প্রতিটি প্রসেসের নিজস্ব ক্রমকে সমর্থন করে।'
          }
        },
        {
          term: 'causal-consistency',
          def: {
            en: 'A model ensuring that causally dependent operations are seen in the same order by all nodes, while concurrent operations may differ.',
            bn: 'এমন একটি মডেল যা সম্পর্কযুক্ত অপারেশনগুলোকে সব নোডে একই ক্রমে দেখায়, কিন্তু সমান্তরাল অপারেশনের ক্ষেত্রে ভিন্ন ক্রম অনুমোদন করে।'
          }
        },
        {
          term: 'eventual-consistency',
          def: {
            en: 'A weak consistency model guaranteeing that all replicas will eventually converge to identical values if no new updates are made.',
            bn: 'এমন একটি শিথিল মডেল যা নতুন কোনো পরিবর্তন না এলে সময়ের সাথে সাথে সমস্ত রেপ্লিকার ডাটা হুবহু মিলে যাওয়ার নিশ্চয়তা দেয়।'
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
      id: 'consistency-models-comparison-table',
      text: {
        en: 'The Distributed Consistency Hierarchy Matrix',
        bn: 'ধারাবাহিকতা মডেলের ক্রমবিন্যাস ও তুলনা ম্যাট্রিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding where each consistency model sits in the hierarchy allows engineers to select the optimal balance between system performance and data correctness.',
        bn: 'ধারাবাহিকতার স্তরবিন্যাসে প্রতিটি মডেলের অবস্থান বুঝলে ইঞ্জিনিয়াররা সিস্টেমের গতি এবং তথ্যের নির্ভুলতার সঠিক ভারসাম্য নির্বাচন করতে পারেন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Consistency Model', bn: 'ধারাবাহিকতা মডেল' },
        { en: 'Real-Time Wall Clock Recency', bn: 'বাস্তব ঘড়ির সময়ের বাধ্যবাধকতা' },
        { en: 'Partition Tolerant (AP)', bn: 'নেটওয়ার্ক বিভাজনে সচল (AP)' },
        { en: 'Operational Complexity', bn: 'বাস্তবায়নের জটিলতা' }
      ],
      rows: [
        [
          { en: 'Linearizability', bn: 'লিনিয়ারাইজ্যাবিলিটি' },
          { en: 'Strict real-time global ordering', bn: 'কঠোর রিয়েল-টাইম বৈশ্বিক ক্রম' },
          { en: 'No (must block writes during partition)', bn: 'না (বিভাজনে রাইট আটকে দেয়)' },
          { en: 'High: requires consensus coordination', bn: 'উচ্চ: কনসেনসাস সমন্বয় প্রয়োজন' }
        ],
        [
          { en: 'Sequential Consistency', bn: 'সিকোয়েনশিয়াল ধারাবাহিকতা' },
          { en: 'Logical sequence only (no clock binding)', bn: 'কেবল যৌক্তিক ক্রম (ঘড়ির সাথে আবদ্ধ নয়)' },
          { en: 'No (requires total ordering coordination)', bn: 'না (সার্বিক ক্রম সমন্বয় প্রয়োজন)' },
          { en: 'Medium: multi-process interleaving', bn: 'মাঝারি: একাধিক প্রসেসের ইন্টারলিভিং' }
        ],
        [
          { en: 'Causal Consistency', bn: 'কজাল ধারাবাহিকতা' },
          { en: 'Preserves cause-and-effect ordering', bn: 'কার্যকারণ সম্পর্কের ক্রম বজায় রাখে' },
          { en: 'Yes (strongest model available under partition)', bn: 'হ্যাঁ (বিভাজনে সম্ভব সর্বোচ্চ মডেল)' },
          { en: 'Medium: tracks version vectors', bn: 'মাঝারি: ভার্সন ভেক্টর ট্র্যাক করে' }
        ],
        [
          { en: 'Eventual Consistency', bn: 'ইভেনচুয়াল ধারাবাহিকতা' },
          { en: 'None (replicas converge over time)', bn: 'নেই (সময়ের সাথে সাথে মিলে যায়)' },
          { en: 'Yes (fully available under partitions)', bn: 'হ্যাঁ (বিভাজনে পুরোপুরি সচল থাকে)' },
          { en: 'Low: background anti-entropy sync', bn: 'কম: ব্যাকগ্রাউন্ডে অ্যান্টি-এনট্রপি সিঙ্ক' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-consistency-code',
      text: {
        en: 'Executable Linearizability Trace Validator',
        bn: 'লিনিয়ারাইজ্যাবিলিটি যাচাইকরণ ও ট্রেস ভ্যালিডেশনের বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program validates an execution history to verify whether client reads obey Linearizability. In this test, a write for value A completes at time 10, followed by a valid read at time 12. Then a write for value B completes at time 15, and the subsequent read at time 18 correctly observes B.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি এক্সিকিউশন ইতিহাস পরীক্ষা করে যাচাই করে যে ক্লায়েন্টের রিডগুলো লিনিয়ারাইজ্যাবিলিটি মেনে চলছে কি না। এই পরীক্ষায় ১০ সময়ে মান A লেখা সম্পন্ন হয় এবং ১২ সময়ে রিড করে A পাওয়া যায়। এরপর ১৫ সময়ে B লেখা সম্পন্ন হলে ১৮ সময়ের পরবর্তী রিড নির্ভুলভাবে B দেখতে পায়।'
      }
    },
    {
      type: 'code',
      code: `function verifyLinearizability(events) {
  let lastCommitted = null;
  let lastCommitTime = 0;

  for (const ev of events) {
    if (ev.type === 'write_commit') {
      lastCommitted = ev.val;
      lastCommitTime = ev.time;
    } else if (ev.type === 'read_result') {
      // If a read completes after a write has committed, it must see that write or later
      if (ev.time >= lastCommitTime && ev.val !== lastCommitted) {
        return {
          linearizable: false,
          violation: 'Read at time ' + ev.time + ' saw ' + ev.val + ', expected ' + lastCommitted
        };
      }
    }
  }
  return { linearizable: true };
}

const trace = [
  { type: 'write_commit', val: 'A', time: 10 },
  { type: 'read_result', val: 'A', time: 12 },
  { type: 'write_commit', val: 'B', time: 15 },
  { type: 'read_result', val: 'B', time: 18 }
];

const result = verifyLinearizability(trace);
console.log('Trace linearizable:', result.linearizable);
// Output: Trace linearizable: true`
    },
    {
      type: 'heading',
      id: 'pacelc-theorem-and-production',
      text: {
        en: 'The PACELC Theorem: Beyond Simple CAP Trade-Offs',
        bn: 'প্যাসেলক (PACELC) উপপাদ্য: বাস্তব সিস্টেমে প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 2012, computer scientist Daniel Abadi formulated the PACELC Theorem to address the limitation of the classic CAP theorem. While CAP only describes behavior during rare network Partitions, PACELC explains normal operations as well. If there is a Partition (P), choose between Availability (A) and Consistency (C). Else (E), when normal, trade off Latency (L) versus Consistency (C). This explains why systems like DynamoDB choose PA/EL (low latency), whereas Google Spanner chooses PC/EC (strict consistency).',
        bn: '২০১২ সালে কম্পিউটার বিজ্ঞানী ড্যানিয়েল আবাদি ক্লাসিক ক্যাপ উপপাদ্যের সীমাবদ্ধতা দূর করতে প্যাসেলক (PACELC) উপপাদ্য তৈরি করেন। ক্যাপ উপপাদ্য কেবল নেটওয়ার্ক বিভাজনের সময়ের আচরণ বলে, কিন্তু প্যাসেলক স্বাভাবিক সময়ের আচরণও ব্যাখ্যা করে। যদি পার্টিশন (P) হয়, তবে প্রাপ্যতা (A) ও ধারাবাহিকতার (C) মধ্যে বেছে নিন। অন্যথায় (E) স্বাভাবিক অবস্থায় লেটেন্সি (L) বনাম ধারাবাহিকতার (C) মধ্যে সমঝোতা করুন। এটি ব্যাখ্যা করে কেন ডায়নামোডিবি PA/EL (দ্রুত গতি) বেছে নেয় এবং গুগল স্প্যানার PC/EC (কঠোর ধারাবাহিকতা) বেছে নেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Consistency spectrum: Models range from strict real-time Linearizability down to asynchronous Eventual Consistency.',
          bn: 'ধারাবাহিকতার রূপরেখা: কঠোর রিয়েল-টাইম লিনিয়ারাইজ্যাবিলিটি থেকে শুরু করে অ্যাসিঙ্ক্রোনাস ইভেনচুয়াল পর্যন্ত বিভিন্ন মডেল বিদ্যমান।'
        },
        {
          en: 'Linearizability vs Serializability: Linearizability governs real-time single-object recency; Serializability governs multi-object transaction isolation.',
          bn: 'লিনিয়ারাইজ্যাবিলিটি বনাম সিরিয়ালাইজ্যাবিলিটি: প্রথমটি একক অবজেক্টের রিয়েল-টাইম মান ঠিক করে, দ্বিতীয়টি বহু-অবজেক্ট ট্রানজ্যাকশনের আইসোলেশন নিশ্চিত করে।'
        },
        {
          en: 'Causal consistency partition resilience: Causal consistency is the strongest model that can remain fully available during network cuts.',
          bn: 'কজাল মডেলের বিভাজন প্রতিরোধ: নেটওয়ার্ক বিভাজনের মাঝেও সম্পূর্ণ সচল থাকতে পারে এমন সবচেয়ে শক্তিশালী মডেল হলো কজাল ধারাবাহিকতা।'
        },
        {
          en: 'PACELC captures latency trade-offs: Even when networks are healthy, architects must trade between low read latency and strong consistency.',
          bn: 'প্যাসেলকের লেটেন্সি বিবেচনা: নেটওয়ার্ক পুরোপুরি সুস্থ থাকলেও কম লেটেন্সি নাকি কঠোর ধারাবাহিকতা কোনটি দরকার তা বেছে নিতে হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cm-ex1',
      kind: 'mcq',
      topic: 'linearizability-definition',
      question: {
        en: 'What unique guarantee does Linearizability provide that distinguishes it from all weaker consistency models?',
        bn: 'লিনিয়ারাইজ্যাবিলিটি কোন অনন্য নিশ্চয়তা প্রদান করে যা এটিকে অন্যান্য সমস্ত দুর্বল ধারাবাহিকতা মডেল থেকে আলাদা করে?'
      },
      options: [
        {
          en: 'Once a write operation completes in real wall-clock time, all subsequent reads anywhere in the world must return that value or a newer one',
          bn: 'বাস্তব ঘড়ির সময়ে একটি রাইট শেষ হওয়ার পর বিশ্বের যেকোনো প্রান্ত থেকে পরবর্তী সমস্ত রিড অবশ্যই সেই মান বা তার চেয়ে নতুন মান দেখতে পাবে'
        },
        {
          en: 'All read queries run in 0 microseconds',
          bn: 'সমস্ত রিড কুয়েরি ০ মাইক্রোসেকেন্ডে সম্পন্ন হয়'
        },
        {
          en: 'The database deletes data older than 24 hours',
          bn: 'ডেটাবেস ২৪ ঘণ্টার পুরনো ডাটা মুছে ফেলে'
        },
        {
          en: 'It requires zero network connections',
          bn: 'এটির কোনো নেটওয়ার্ক সংযোগের প্রয়োজন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Linearizability connects logical operations strictly to global wall-clock physical time.',
        bn: 'লিনিয়ারাইজ্যাবিলিটি যৌক্তিক অপারেশনগুলোকে বৈশ্বিক বাস্তব ঘড়ির সময়ের সাথে কঠোরভাবে সংযুক্ত করে।'
      },
      explanation: {
        en: 'Linearizability enforces real-time recency: if write W finishes at 12:00:01, any read starting after 12:00:01 must see W.',
        bn: 'লিনিয়ারাইজ্যাবিলিটি বাস্তব সময়ের নিশ্চয়তা দেয়: ১২:০০:০১ এ রাইট সম্পন্ন হলে তার পরে শুরু হওয়া যেকোনো রিড সেই মান দেখতে বাধ্য।'
      }
    },
    {
      id: 'cm-ex2',
      kind: 'mcq',
      topic: 'linearizability-vs-serializability',
      question: {
        en: 'What is the fundamental difference between Linearizability and Serializability?',
        bn: 'লিনিয়ারাইজ্যাবিলিটি এবং সিরিয়ালাইজ্যাবিলিটির মধ্যে মৌলিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Linearizability is a real-time recency guarantee on single operations; Serializability is a multi-operation transaction isolation guarantee',
          bn: 'লিনিয়ারাইজ্যাবিলিটি একক অপারেশনের রিয়েল-টাইম মানের নিশ্চয়তা; সিরিয়ালাইজ্যাবিলিটি বহু-অপারেশনের ট্রানজ্যাকশন আইসোলেশনের নিশ্চয়তা'
        },
        {
          en: 'They are identical concepts with different spellings',
          bn: 'তারা বানানের পার্থক্য ছাড়া সম্পূর্ণ একই ধারণা'
        },
        {
          en: 'Serializability is only used in hardware CPUs',
          bn: 'সিরিয়ালাইজ্যাবিলিটি কেবল হার্ডওয়্যার সিপিইউতে ব্যবহৃত হয়'
        },
        {
          en: 'Linearizability only works on graphs with 2 vertices',
          bn: 'লিনিয়ারাইজ্যাবিলিটি কেবল ২টি নোডের গ্রাফে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think ACID transactions (multi-object isolation) vs distributed memory registers (single-object real-time recency).',
        bn: 'ACID ট্রানজ্যাকশন বনাম বিতরণকৃত মেমরি রেজিস্টারের বাস্তব সময়ের পার্থক্যের কথা ভাবুন।'
      },
      explanation: {
        en: 'Serializability ensures transactions execute equivalent to some serial order. Linearizability adds the constraint of real wall-clock time.',
        bn: 'সিরিয়ালাইজ্যাবিলিটি নিশ্চিত করে ট্রানজ্যাকশনগুলো কোনো ধারাবাহিক ক্রমে চলেছে। লিনিয়ারাইজ্যাবিলিটি এর সাথে বাস্তব সময়ের বাধ্যবাধকতা যোগ করে।'
      }
    },
    {
      id: 'cm-ex3',
      kind: 'mcq',
      topic: 'causal-consistency-strength',
      question: {
        en: 'Why is Causal Consistency considered uniquely important in distributed systems architecture?',
        bn: 'বিতরণকৃত সিস্টেমের আর্কিটেকচারে কজাল ধারাবাহিকতাকে কেন অনন্যভাবে গুরুত্বপূর্ণ বিবেচনা করা হয়?'
      },
      options: [
        {
          en: 'It is mathematically proven to be the strongest consistency model that remains completely available during network partitions',
          bn: 'এটি গাণিতিকভাবে প্রমাণিত সবচেয়ে শক্তিশালী ধারাবাহিকতা মডেল যা নেটওয়ার্ক বিভাজনের মাঝেও সম্পূর্ণ সচল বা অ্যাভেইলেবল থাকে'
        },
        {
          en: 'It completely eliminates the need for computer RAM',
          bn: 'এটি কম্পিউটার র‍্যামের প্রয়োজনীয়তা পুরোপুরি দূর করে'
        },
        {
          en: 'It converts SQL databases into NoSQL databases automatically',
          bn: 'এটি এসকিউএল ডেটাবেসকে স্বয়ংক্রিয়ভাবে নো-এসকিউএলে রূপান্তর করে'
        },
        {
          en: 'It only supports integers and rejects text strings',
          bn: 'এটি কেবল পূর্ণসংখ্যা সমর্থন করে এবং টেক্সট বর্জন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Under a network partition, Linearizability blocks. Can Causal Consistency proceed without waiting for the other side?',
        bn: 'নেটওয়ার্ক বিভাজনে লিনিয়ারাইজ্যাবিলিটি আটকে যায়। কজাল ধারাবাহিকতা কি অন্য পাশের জন্য অপেক্ষা না করে কাজ চালিয়ে যেতে পারে?'
      },
      explanation: {
        en: 'Mahajan et al. proved that causal consistency is the ceiling of consistency achievable in a totally partition-tolerant (AP) system.',
        bn: 'গবেষণায় প্রমাণিত হয়েছে যে সম্পূর্ণ বিভাজন-সহনশীল (AP) সিস্টেমে কজাল ধারাবাহিকতাই হলো সর্বোচ্চ অর্জনযোগ্য স্তর।'
      }
    }
  ],
  quiz: {
    id: 'the-consistency-menu-quiz',
    title: {
      en: 'Distributed Consistency Models Quiz',
      bn: 'বিতরণকৃত ধারাবাহিকতা মডেল কুইজ'
    },
    questions: [
      {
        id: 'cm-q1',
        kind: 'mcq',
        topic: 'pacelc-normal-tradeoff',
        question: {
          en: 'According to the PACELC theorem, what trade-off must a distributed system make when the network is functioning normally (no partitions)?',
          bn: 'প্যাসেলক (PACELC) উপপাদ্য অনুসারে যখন নেটওয়ার্ক সম্পূর্ণ স্বাভাবিক থাকে, তখন সিস্টেমকে কোন দুটি বিষয়ের মধ্যে সমঝোতা করতে হয়?'
        },
        options: [
          {
            en: 'Latency (L) versus Consistency (C): returning fast local reads versus waiting for cross-node replication to ensure strong consistency',
            bn: 'লেটেন্সি (L) বনাম ধারাবাহিকতা (C): স্থানীয়ভাবে দ্রুত ডাটা পড়া নাকি অন্যান্য নোডে রেপ্লিকেশনের অপেক্ষা করে কঠোর ধারাবাহিকতা নিশ্চিত করা'
          },
          {
            en: 'CPU clock speed versus RAM size',
            bn: 'সিপিইউ ক্লক স্পিড বনাম র‍্যামের আকার'
          },
          {
            en: 'Display resolution versus audio bitrate',
            bn: 'ডিসপ্লে রেজোলিউশন বনাম অডিও বিটরেট'
          },
          {
            en: 'Server temperature versus cooling water flow',
            bn: 'সার্ভারের তাপমাত্রা বনাম পানির প্রবাহ'
          }
        ],
        answer: 0,
        hint: {
          en: 'In PACELC, the "ELC" part stands for: Else (no partition), choose between Latency (L) and Consistency (C).',
          bn: 'PACELC এ "ELC" অংশের অর্থ: অন্যথায় (বিভাজনহীন অবস্থায়) লেটেন্সি (L) এবং ধারাবাহিকতার (C) মাঝে বেছে নিন।'
        },
        explanation: {
          en: 'Even in healthy networks, achieving strong consistency requires cross-node round-trip communication, inevitably adding latency.',
          bn: 'সুস্থ নেটওয়ার্কেও কঠোর ধারাবাহিকতার জন্য একাধিক নোডের সাথে যোগাযোগ করতে হয়, যা অবধারিতভাবে লেটেন্সি বাড়িয়ে দেয়।'
        }
      },
      {
        id: 'cm-q2',
        kind: 'mcq',
        topic: 'eventual-consistency-convergence',
        question: {
          en: 'Under what specific condition does Eventual Consistency guarantee that all replicas will display identical data?',
          bn: 'কোন নির্দিষ্ট শর্ত পূরণ হলে ইভেনচুয়াল ধারাবাহিকতা নিশ্চিত করে যে সমস্ত রেপ্লিকায় হুবহু একই ডাটা প্রদর্শিত হবে?'
        },
        options: [
          {
            en: 'If no new write operations are submitted to the system for a sufficient duration of time',
            bn: 'যদি একটি নির্দিষ্ট সময় পর্যন্ত সিস্টেমে নতুন কোনো লেখার (রাইট) অপারেশন জমা না হয়'
          },
          {
            en: 'Only on the 1st day of every month',
            bn: 'কেবল প্রতি মাসের ১ম দিনে'
          },
          {
            en: 'When the storage disk becomes 100 percent full',
            bn: 'যখন স্টোরেজ ডিস্ক ১০০ শতাংশ পূর্ণ হয়ে যায়'
          },
          {
            en: 'If all servers are powered down',
            bn: 'যদি সমস্ত সার্ভারের বিদ্যুৎ বন্ধ করে দেওয়া হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Eventual consistency guarantees convergence in the absence of new updates ("quiescence").',
          bn: 'নতুন কোনো পরিবর্তন না থাকলে ইভেনচুয়াল ধারাবাহিকতায় সমস্ত নোডের তথ্য সমান হয়ে যায়।'
        },
        explanation: {
          en: 'Given a period of quiescence where no new writes occur, asynchronous background replication synchronizes all replicas.',
          bn: 'নতুন কোনো রাইট না এলে ব্যাকগ্রাউন্ড রেপ্লিকেশনের মাধ্যমে সমস্ত নোড সময়ের সাথে সাথে সমন্বিত হয়ে যায়।'
        }
      },
      {
        id: 'cm-q3',
        kind: 'mcq',
        topic: 'causal-order-chat-application',
        question: {
          en: 'In a group messaging application, which anomaly is prevented by enforcing Causal Consistency?',
          bn: 'একটি গ্রুপ মেসেজিং অ্যাপ্লিকেশনে কজাল ধারাবাহিকতা প্রয়োগের মাধ্যমে কোন অসঙ্গতি বা ত্রুটি প্রতিহত করা হয়?'
        },
        options: [
          {
            en: 'A user observing an answer to a question before seeing the original question that caused it',
            bn: 'কোনো ব্যবহারকারী মূল প্রশ্নটি দেখার আগেই তার উত্তরের বার্তাটি আগে দেখতে পাওয়া'
          },
          {
            en: 'The battery running out on the user’s smartphone',
            bn: 'ব্যবহারকারীর স্মার্টফোনের ব্যাটারি শেষ হয়ে যাওয়া'
          },
          {
            en: 'Typing mistakes in the user’s message',
            bn: 'ব্যবহারকারীর পাঠানো বার্তায় বানান ভুল হওয়া'
          },
          {
            en: 'The mobile network switching from 5G to 4G',
            bn: 'মোবাইল নেটওয়ার্ক 5G থেকে 4G তে পরিবর্তিত হওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'The answer is causally dependent on the question. Can effect precede cause in a causally consistent system?',
          bn: 'উত্তরটি প্রশ্নের ওপর নির্ভরশীল। কজাল সিস্টেমে কি কারণের আগেই ফলাফল দেখা যেতে পারে?'
        },
        explanation: {
          en: 'Causal consistency guarantees that causally related events (like Question -> Answer) preserve their strict ordering across all clients.',
          bn: 'কজাল ধারাবাহিকতা নিশ্চিত করে যে কারণ ও ফলাফলের সম্পর্কযুক্ত বার্তাগুলো সমস্ত ক্লায়েন্টে সঠিক ধারাবাহিকতায় প্রদর্শিত হবে।'
        }
      },
      {
        id: 'cm-q4',
        kind: 'mcq',
        topic: 'strict-serializability-concept',
        question: {
          en: 'What does the term "Strict Serializability" (or External Consistency) signify in modern distributed databases like Google Spanner?',
          bn: 'গুগল স্প্যানারের মতো আধুনিক বিতরণকৃত ডেটাবেসে "স্ট্রিক্ট সিরিয়ালাইজ্যাবিলিটি" (বা এক্সটার্নাল ধারাবাহিকতা) কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The combination of multi-object Serializability with real-time Linearizability across global transactions',
            bn: 'বৈশ্বিক ট্রানজ্যাকশনে বহু-অবজেক্ট সিরিয়ালাইজ্যাবিলিটি এবং রিয়েল-টাইম লিনিয়ারাইজ্যাবিলিটির নিখুঁত সমন্বয়'
          },
          {
            en: 'That database tables can only have 1 single column',
            bn: 'ডেটাবেস টেবিলে কেবল ১টি একক কলাম থাকতে পারবে'
          },
          {
            en: 'All transactions must be executed on a single thread',
            bn: 'সমস্ত ট্রানজ্যাকশন অবশ্যই একটি একক থ্রেডে চলতে হবে'
          },
          {
            en: 'The database rejects all queries during weekends',
            bn: 'সপ্তাহের ছুটির দিনে ডেটাবেস সমস্ত কুয়েরি প্রত্যাখ্যান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It combines the strongest transaction isolation with the strongest real-time recency guarantee.',
          bn: 'এটি ট্রানজ্যাকশনের সর্বোচ্চ আইসোলেশন এবং রিয়েল-টাইম সময়ের সর্বোচ্চ নিশ্চয়তাকে একত্রিত করে।'
        },
        explanation: {
          en: 'Strict Serializability guarantees that transactions appear to execute serially and in an order consistent with real wall-clock time.',
          bn: 'স্ট্রিক্ট সিরিয়ালাইজ্যাবিলিটি নিশ্চিত করে যে ট্রানজ্যাকশনগুলো বাস্তব ঘড়ির সময়ের সাথে সংগতি রেখে একটি নির্ভুল ক্রমানুসারে কার্যকর হয়েছে।'
        }
      }
    ]
  }
};
