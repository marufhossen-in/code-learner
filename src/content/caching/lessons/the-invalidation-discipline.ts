import type { Lesson } from '../../../lib/types';

export const invalidationLesson: Lesson = {
  slug: 'the-invalidation-discipline',
  tech: 'caching',
  title: {
    en: 'Cache Invalidation, TTL Strategies & Jitter Mechanics',
    bn: 'ক্যাশ ইনভ্যালিডেশন, টিটিএল কৌশল ও জিটার মেকানিক্স'
  },
  summary: {
    en: 'Computer scientist Phil Karlton famously declared that cache invalidation is one of the two hardest problems in computer science. When data updates in the authoritative database, existing cache entries instantly become stale lies unless purged or updated. This lesson explores the engineering principles of robust cache invalidation. You will master Time-To-Live (TTL) strategies, discover why synchronized expirations cause catastrophic server outages, and implement mathematical TTL Jitter (spreading expirations across a bell curve). We compare Delete-on-Write against Update-in-Cache, analyze Delayed Double Deletion for concurrent safety, and leverage modern HTTP stale-while-revalidate directives.',
    bn: 'কম্পিউটার বিজ্ঞানী ফিল কার্লটনের বিখ্যাত উক্তি: কম্পিউটার সায়েন্সের সবচেয়ে কঠিন দুটি বিষয়ের একটি হলো ক্যাশ ইনভ্যালিডেশন। মূল ডাটাবেসে তথ্য পরিবর্তিত হওয়ার পর ক্যাশের পুরনো কপি মুছে না দিলে তা ভুল তথ্য পরিবেশন করে। এই পাঠে নিখুঁত ক্যাশ ইনভ্যালিডেশনের ইঞ্জিনিয়ারিং নীতিগুলো তুলে ধরা হয়েছে। আপনি টাইম-টু-লাইভ (টিটিএল) কৌশল শিখবেন, বুঝতে পারবেন কেন একসাথে হাজার হাজার কি-এর মেয়াদ শেষ হলে সার্ভার ক্র্যাশ করে এবং গাণিতিক টিটিএল জিটার প্রয়োগ করে মসৃণ মেয়াদ বণ্টন করবেন। আমরা ডেটা পরিবর্তনের সময় ডিলিট-অন-রাইট বনাম আপডেট-ইন-ক্যাশ বিশ্লেষণ করব এবং আধুনিক stale-while-revalidate এর ব্যবহার জানব।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Fundamental Problem: Maintaining Freshness Across Systems',
        bn: 'মৌলিক সমস্যা: বিভিন্ন সিস্টেমে তথ্যের সতেজতা রক্ষা করা'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'A cache stores an isolated copy of primary data. The moment a user updates their account balance, changes a password, or edits an article, the database updates immediately. If the cache is not notified, subsequent requests receive obsolete information. In distributed architectures, maintaining strict consistency between two separate data stores without sacrificing performance is a monumental engineering challenge.',
        bn: 'ক্যাশ মূলত মূল তথ্যের একটি পৃথক অনুলিপি ধারণ করে। কোনো ব্যবহারকারী যখন তার ব্যালেন্স আপডেট করেন, পাসওয়ার্ড পরিবর্তন করেন বা কোনো লেখা সম্পাদনা করেন, তখন ডাটাবেস নিমেষেই পরিবর্তিত হয়। কিন্তু ক্যাশ যদি এই পরিবর্তন সম্পর্কে না জানে, তবে পরবর্তী অনুরোধে পুরনো তথ্য পরিবেশন করে। ডিস্ট্রিবিউটেড আর্কিটেকচারে পারফরম্যান্স ঠিক রেখে দুটি আলাদা ডেটা স্টোরের মধ্যে তথ্যের সামঞ্জস্য রক্ষা করা একটি বড় চ্যালেঞ্জ।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cache Invalidation',
          def: {
            en: 'The process of purging, evicting, or overriding cached entries as soon as the underlying authoritative database data mutates',
            bn: 'মূল ডাটাবেসে তথ্য পরিবর্তন বা ডিলিট হওয়ার সাথে সাথে ক্যাশের পুরনো কপি মুছে ফেলা বা আপডেট করার প্রক্রিয়া'
          }
        },
        {
          term: 'Time-To-Live (TTL)',
          def: {
            en: 'A predefined duration (in seconds or milliseconds) after which a cached key automatically expires and is evicted from memory',
            bn: 'একটি পূর্বনির্ধারিত সময়কাল যার পর ক্যাশ কি স্বয়ংক্রিয়ভাবে মেমোরি থেকে মুছে গিয়ে নতুন তথ্য আনতে বাধ্য করে'
          }
        },
        {
          term: 'TTL Jitter (Skew)',
          def: {
            en: 'Adding pseudorandom variation to a base TTL so that thousands of cached keys do not expire at the exact same millisecond',
            bn: 'মূল টিটিএল সময়ের সাথে দৈবচয়নমূলক সামান্য সময় যোগ বা বিয়োগ করা যাতে একসাথে সব কি-এর মেয়াদ ফুরিয়ে সার্ভার ক্র্যাশ না করে'
          }
        },
        {
          term: 'Stale-While-Revalidate',
          def: {
            en: 'An HTTP cache directive that serves stale cached content immediately while asynchronously re-fetching fresh data in the background',
            bn: 'একটি আধুনিক নিয়ম যেখানে ব্যবহারকারীকে অপেক্ষায় না রেখে পুরনো ক্যাশ থেকে দ্রুত ডেটা দেওয়া হয় এবং ব্যাকগ্রাউন্ডে নতুন ডেটা লোড হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'delete-vs-update',
      text: {
        en: 'Mutation Strategy: Delete-on-Write vs Update-in-Cache',
        bn: 'পরিবর্তন কৌশল: ডিলিট-অন-রাইট বনাম আপডেট-ইন-ক্যাশ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When modifying database records, engineers must choose between updating the cache key or deleting it. Updating the cache (redis.set(key, newValue)) appears intuitive, but suffers from fatal concurrent race conditions. If Request A and Request B write concurrently, Request B may update the database last, but Request A may finish updating the cache last — leaving the cache out of sync with the database. Deleting the cache entry (redis.del(key)) is vastly superior: the next read simply incurs a single cache miss and safely reads the authoritative database truth.',
        bn: 'ডাটাবেসে কোনো তথ্য পরিবর্তনের সময় ইঞ্জিনিয়ারদের সিদ্ধান্ত নিতে হয় ক্যাশ কি আপডেট করবেন নাকি মুছে ফেলবেন। ক্যাশ আপডেট করা (redis.set) সহজ মনে হলেও এতে কনকারেন্ট রেস কন্ডিশনের মারাত্মক ঝুঁকি থাকে। দুটি অনুরোধ একসাথে এলে একটি হয়তো ডাটাবেসে আগে লেখে কিন্তু ক্যাশে পরে লেখে, যার ফলে ডাটাবেস ও ক্যাশের তথ্যে গরমিল ঘটে। এর চেয়ে ক্যাশ কি মুছে ফেলা (redis.del) বহুগুণ নিরাপদ: পরবর্তী রিডে একটি সাধারণ ক্যাশ মিস হবে এবং ডাটাবেস থেকে নির্ভুল সত্য তথ্য এসে জমা হবে।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Delete-on-Write vs Update-in-Cache Comparison',
        bn: 'ডিলিট-অন-রাইট বনাম আপডেট-ইন-ক্যাশ তুলনা'
      },
      head: [
        { en: 'Dimension', bn: 'বৈশিষ্ট্য' },
        { en: 'Delete-on-Write (Recommended)', bn: 'ডিলিট-অন-রাইট (পরামর্শকৃত)' },
        { en: 'Update-in-Cache (Risky)', bn: 'আপডেট-ইন-ক্যাশ (ঝুঁকিপূর্ণ)' }
      ],
      rows: [
        [
          { en: 'Race Condition Safety', bn: 'রেস কন্ডিশন নিরাপত্তা' },
          { en: 'Completely immune to out-of-order write overwrite bugs', bn: 'এলোমেলো কনকারেন্ট রাইটের ঝুঁকি থেকে সম্পূর্ণ নিরাপদ' },
          { en: 'Vulnerable to concurrent updates storing stale data', bn: 'কনকারেন্ট অনুরোধে পুরনো ডেটা রয়ে যাওয়ার ঝুঁকি থাকে' }
        ],
        [
          { en: 'Write Overhead', bn: 'লেখার গতি ও চাপ' },
          { en: 'Ultra-fast single DEL command on the cache store', bn: 'ক্যাশে অতি দ্রুতগতির একটিমাত্র DEL কমান্ড চালানো হয়' },
          { en: 'Requires serializing and transmitting complete payload', bn: 'সম্পূর্ণ ডেটা সিরিয়ালাইজ করে ক্যাশে পাঠাতে হয়' }
        ],
        [
          { en: 'Subsequent Read Penalty', bn: 'পরবর্তী রিডের সময়' },
          { en: 'Exactly one cold miss that refills cache safely', bn: 'পরের প্রথম রিডে একবার ডাটাবেসে গিয়ে ক্যাশ পূর্ণ হয়' },
          { en: 'Zero read penalty, but high risk of incorrect values', bn: 'রিড দ্রুত হলেও ভুল তথ্য দেখানোর সম্ভাবনা বেশি থাকে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'ttl-jitter-mechanics',
      text: {
        en: 'The Mass Expiration Problem & TTL Jitter Mathematics',
        bn: 'একযোগে মেয়াদোত্তীর্ণ সমস্যা ও টিটিএল জিটার গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When thousands of keys are written at midnight or populated during a bulk database import with an identical 1 hour TTL (3600 seconds), all 100000 keys expire at the exact same millisecond. Suddenly, thousands of concurrent requests miss simultaneously, inundating the origin database with queries and crashing the system. To solve this, apply TTL Jitter: calculate a pseudorandom factor (such as plus or minus 10%). A base TTL of 3600 seconds is smeared between 3240 seconds and 3960 seconds. This spreads key expirations across a 720 second (12 minute) window, maintaining smooth database load.',
        bn: 'যখন মধ্যরাতে বা কোনো বাল্ক ইমপোর্টের সময় ১ ঘণ্টার টিটিএল (৩৬০০ সেকেন্ড) দিয়ে ১০০০০০ কি তৈরি করা হয়, তখন ঠিক এক ঘণ্টা পর একই সেকেন্ডে সবগুলো কি মুছে যায়। ফলে সমস্ত রিড একসাথে ক্যাশ মিস হয়ে ডাটাবেসে আছড়ে পড়ে এবং পুরো সিস্টেম ক্র্যাশ করে। এই সমস্যা সমাধানে টিটিএল জিটার ব্যবহার করা হয়: মূল সময়ের সাথে যোগ বা বিয়োগ ১০% দৈবচয়নমূলক সময় যোগ করা হয়। ৩৬০০ সেকেন্ডের টিটিএল ৩২৪০ থেকে ৩৯৬০ সেকেন্ডের মধ্যে ছড়িয়ে পড়ে। এই ৭২০ সেকেন্ড বা ১২ মিনিটের ব্যাপ্তিতে এক্সপিরেশন ছড়িয়ে পড়ায় ডাটাবেসের ওপর চাপ থাকে অত্যন্ত স্বাভাবিক ও মসৃণ।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: TTL Jitter Dispersion Calculation',
        bn: 'চালনাযোগ্য সিমুলেশন: টিটিএল জিটার গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates TTL Jitter, demonstrating how a 10% random skew disperses key expirations across a 720-second safety window:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি টিটিএল জিটার হিসাব করে দেখায় কীভাবে ১০% জিটার ৩,৬০০ সেকেন্ডের টিটিএলকে ৭২০ সেকেন্ডের নিরাপদ পরিসরে ছড়িয়ে দেয়:'
      }
    },
    {
      type: 'code',
      id: 'caching-jitter-sim',
      lang: 'javascript',
      code: `// TTL Jitter & Expiration Dispersion Simulator
const baseTtl = 3600; // 1 hour base Time-To-Live in seconds
const jitterPercent = 0.10; // 10% random spread factor

// Minimum and maximum possible TTL boundaries
const minTtl = baseTtl * (1 - jitterPercent);
const maxTtl = baseTtl * (1 + jitterPercent);

// Total dispersion window across which expirations are distributed
const spreadSeconds = maxTtl - minTtl;

console.log('Nominal base TTL in seconds:', baseTtl);
// -> Nominal base TTL in seconds: 3600

console.log('Minimum jittered TTL boundary in seconds:', minTtl);
// -> Minimum jittered TTL boundary in seconds: 3240

console.log('Maximum jittered TTL boundary in seconds:', maxTtl);
// -> Maximum jittered TTL boundary in seconds: 3960

console.log('Total expiration dispersion window in seconds:', spreadSeconds);
// -> Total expiration dispersion window in seconds: 720`,
      caption: {
        en: 'Figure 2: A base 3600 second TTL with 10% jitter distributes expirations between 3240 and 3960 seconds, creating a 720 second buffer',
        bn: 'চিত্র ২: ১০% জিটারসহ ৩৬০০ সেকেন্ডের টিটিএল ৩২৪০ থেকে ৩৯৬০ সেকেন্ডে ছড়িয়ে ৭২০ সেকেন্ডের সুরক্ষিত বাফার তৈরি করে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Essential Invalidation Rules for Resilient Systems',
        bn: 'স্থিতিশীল সিস্টেমের জন্য ৪টি অপরিহার্য ইনভ্যালিডেশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Apply these 4 operational rules to guarantee data freshness and uptime:',
        bn: 'সিস্টেমে তথ্যের নির্ভুলতা ও স্থায়িত্ব নিশ্চিত করতে এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Add Jitter to Base TTLs',
          def: {
            en: 'Apply baseTTL with jitter whenever caching bulk items to prevent synchronized thundering herd expiration stampedes',
            bn: 'একসাথে তৈরি কি-গুলোতে টিটিএল জিটার যুক্ত করুন যাতে সব কি একই সেকেন্ডে মেয়াদোত্তীর্ণ হয়ে ডাটাবেসে সুনামি না আনে'
          }
        },
        {
          term: 'Rule 2: Prefer Delete-on-Write over Update',
          def: {
            en: 'Delete cache entries on mutation rather than updating them, completely eliminating concurrent overwrite race conditions',
            bn: 'ডাটাবেসে পরিবর্তনের পর ক্যাশ আপডেট না করে মুছে ফেলুন, এতে রেস কন্ডিশনের ভুল ডেটা সেভ হওয়ার ঝুঁকি থাকে না'
          }
        },
        {
          term: 'Rule 3: Use Delayed Double Deletion for Replication Lag',
          def: {
            en: 'In master-replica database architectures, delete the cache key, write to master, wait 500ms for replication, then delete cache again',
            bn: 'রিপ্লিকা ডাটাবেসে ল্যাগ থাকলে পরিবর্তনের পর ক্যাশ মুছুন এবং ৫০০ মিলিসেকেন্ড পর আরেকবার মুছে পূর্ণ সুরক্ষা নিন'
          }
        },
        {
          term: 'Rule 4: Leverage stale-while-revalidate for Non-Critical Reads',
          def: {
            en: 'Serve existing cached data immediately while asynchronously refreshing in the background to achieve zero user-facing latency',
            bn: 'ব্যবহারকারীকে অপেক্ষায় না রেখে পুরনো ক্যাশ থেকে দ্রুত সাড়া দিন এবং ব্যাকগ্রাউন্ডে নতুন তথ্য এনে ক্যাশ আপডেট করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-jitter-spread-ex',
      kind: 'mcq',
      topic: 'Calculating the spread of TTL jitter',
      question: {
        en: 'If a base TTL is 3600 seconds and a 10% jitter factor is applied, what is the total expiration spread window in seconds?',
        bn: 'মূল টিটিএল যদি ৩৬০০ সেকেন্ড হয় এবং ১০% জিটার প্রয়োগ করা হয়, তবে এক্সপিরেশন ছড়িয়ে পড়ার মোট উইন্ডো কত সেকেন্ড?'
      },
      options: [
        {
          en: '720 seconds (from 3240 to 3960 seconds)',
          bn: '৭২০ সেকেন্ড (৩২৪০ থেকে ৩৯৬০ সেকেন্ড পর্যন্ত)'
        },
        {
          en: '3600 seconds',
          bn: '৩৬০০ সেকেন্ড'
        },
        {
          en: '10 seconds',
          bn: '১০ সেকেন্ড'
        },
        {
          en: '0 seconds',
          bn: '০ সেকেন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Max TTL (3960) minus Min TTL (3240) = 720 seconds.',
        bn: 'সর্বোচ্চ টিটিএল (৩৯৬০) থেকে সর্বনিম্ন টিটিএল (৩২৪০) বিয়োগ করলে ৭২০ সেকেন্ড পাওয়া যায়।'
      },
      explanation: {
        en: '10% of 3600 is 360. Range is 3600 - 360 = 3240 to 3600 + 360 = 3960. Spread = 3960 - 3240 = 720 seconds.',
        bn: '৩৬০০ এর ১০% হলো ৩৬০। রেঞ্জ ৩২৪০ থেকে ৩৯৬০; ফলে মোট বিস্তার ৩৯৬০ - ৩২৪০ = ৭২০ সেকেন্ড।'
      }
    },
    {
      id: 'caching-del-vs-set-ex',
      kind: 'mcq',
      topic: 'Why Delete-on-Write prevents race conditions',
      question: {
        en: 'Why is deleting a cache key on database mutation safer than setting the new value directly in the cache?',
        bn: 'ডাটাবেস পরিবর্তনের পর ক্যাশে সরাসরি নতুন মান লেখার চেয়ে কি-টি মুছে ফেলা কেন বেশি নিরাপদ?'
      },
      options: [
        {
          en: 'Concurrent writes may resolve out of order, causing the cache to overwrite newer data with older data',
          bn: 'একসাথে একাধিক অনুরোধ এলে ক্যাশে আগে-পরের গরমিল হয়ে নতুন তথ্যের ওপর পুরনো তথ্য বসে যাওয়ার ঝুঁকি থাকে'
        },
        {
          en: 'Deleting a key costs more CPU than setting a key',
          bn: 'কি মুছলে বেশি সিপিইউ খরচ হয়'
        },
        {
          en: 'Redis does not support the SET command in production',
          bn: 'রেডিসে প্রোডাকশনে SET কমান্ড চালানো নিষেধ'
        },
        {
          en: 'Because databases automatically delete themselves',
          bn: 'কারণ ডাটাবেস নিজে থেকেই মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Out-of-order execution in concurrent writes.',
        bn: 'এলোমেলো কনকারেন্ট রাইটের ঝুঁকির কথা ভাবুন।'
      },
      explanation: {
        en: 'If Write A and Write B execute simultaneously, Write A might finish setting cache after Write B, creating permanent data divergence.',
        bn: 'দুটি রাইট একসাথে ঘটলে আগেরটি পরে এসে ক্যাশ আপডেট করে ফেলতে পারে, যার ফলে ডাটাবেস ও ক্যাশে স্থায়ী অমিল তৈরি হয়।'
      }
    },
    {
      id: 'caching-swr-ex',
      kind: 'mcq',
      topic: 'Behavior of stale-while-revalidate',
      question: {
        en: 'How does HTTP stale-while-revalidate optimize user experience during cache expiration?',
        bn: 'ক্যাশের মেয়াদ শেষের সময় HTTP stale-while-revalidate কীভাবে ব্যবহারকারীর অভিজ্ঞতা উন্নত করে?'
      },
      options: [
        {
          en: 'It serves the stale cached response immediately to the user while asynchronously fetching fresh data from the origin in the background',
          bn: 'এটি ব্যবহারকারীকে অপেক্ষায় না রেখে তাত্ক্ষণিক পুরনো ক্যাশ দেখায় এবং ব্যাকগ্রাউন্ডে মূল সার্ভার থেকে নতুন ডেটা এনে ক্যাশ আপডেট করে'
        },
        {
          en: 'It blocks the user browser for 60 seconds',
          bn: 'এটি ব্যবহারকারীর ব্রাউজার ৬০ সেকেন্ডের জন্য আটকে রাখে'
        },
        {
          en: 'It deletes all user cookies from disk',
          bn: 'এটি ডিস্ক থেকে সব ইউজার কুকিজ মুছে ফেলে'
        },
        {
          en: 'It redirects all incoming traffic to a blank page',
          bn: 'এটি সব ট্রাফিক খালি পেজে পাঠিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Instant response from cache plus asynchronous background refresh.',
        bn: 'তাৎক্ষণিক সাড়া এবং ব্যাকগ্রাউন্ডে নতুন তথ্য আনার কথা ভাবুন।'
      },
      explanation: {
        en: 'Users enjoy sub-millisecond responses while the cache seamlessly updates itself without blocking execution.',
        bn: 'ব্যবহারকারী কোনো দেরি ছাড়াই তাত্ক্ষণিক ফলাফল পায় এবং ব্যাকগ্রাউন্ডে ক্যাশ নিজে থেকেই সতেজ হয়ে ওঠে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-invalidation',
    title: {
      en: 'Cache Invalidation & TTL Architecture Quiz',
      bn: 'ক্যাশ ইনভ্যালিডেশন ও টিটিএল আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-caching-mass-expiration',
        kind: 'mcq',
        topic: 'Why synchronized TTLs cause outages',
        question: {
          en: 'What dangerous architectural phenomenon happens when 100000 keys are saved with an identical 1 hour TTL without jitter?',
          bn: '১০% জিটার ছাড়া হুবহু ১ ঘণ্টার টিটিএল দিয়ে ১০০০০০ কি সেভ করলে সিস্টেমে কোন বিপজ্জনক ঘটনা ঘটে?'
        },
        options: [
          {
            en: 'All 100000 keys expire at the exact same second, causing a simultaneous cache miss tsunami that overloads and crashes the database',
            bn: 'ঠিক এক ঘণ্টা পর একই সেকেন্ডে সবগুলো ১০০০০০ কি মুছে যায়, ফলে লক্ষ লক্ষ অনুরোধ একসাথে ডাটাবেসে গিয়ে সিস্টেম ক্র্যাশ করে'
          },
          {
            en: 'The cache server runs out of disk space instantly',
            bn: 'ক্যাশ সার্ভারের ডিস্ক নিমেষে ফুরিয়ে যায়'
          },
          {
            en: 'The network router shuts down permanently',
            bn: 'নেটওয়ার্ক রাউটার চিরতরে বন্ধ হয়ে যায়'
          },
          {
            en: 'The database encrypts all tables with a password',
            bn: 'ডাটাবেস সব টেবিলে পাসওয়ার্ড দিয়ে লক করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Simultaneous expiration tsunami on the origin database.',
          bn: 'একসাথে সব কি শেষ হয়ে ডাটাবেসে সুনামি আসার কথা ভাবুন।'
        },
        explanation: {
          en: 'This is the classic cache stampede: massive synchronized misses instantly swamp database connection pools.',
          bn: 'এটি ক্লাসিক ক্যাশ স্ট্যাম্পিড: লক্ষাধিক অনুরোধ একসাথে ডাটাবেসের কানেকশন পুল ফুল করে ক্র্যাশ ঘটায়।'
        }
      },
      {
        id: 'q-caching-delayed-double-del',
        kind: 'mcq',
        topic: 'Purpose of Delayed Double Deletion',
        question: {
          en: 'Why is Delayed Double Deletion recommended in database architectures with read replicas?',
          bn: 'রিড-রিপ্লিকা থাকা ডাটাবেস সিস্টেমে ডিলেড ডাবল ডিলিশন কেন সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'To purge stale data that may have been read from a lagging replica and re-cached during the write window',
            bn: 'রিপ্লিকা ডাটাবেসের দেরির কারণে পরিবর্তনের সময় পুরনো ডেটা যদি আবার ক্যাশে ঢুকে পড়ে, তবে দ্বিতীয়বার মুছে তা রোধ করার জন্য'
          },
          {
            en: 'To make the database write twice as slow on purpose',
            bn: 'ইচ্ছাকৃতভাবে ডাটাবেস রাইট দ্বিগুণ ধীর করার জন্য'
          },
          {
            en: 'To duplicate all customer records into two tables',
            bn: 'সব রেকর্ড দুটি টেবিলে ডুপ্লিকেট করার জন্য'
          },
          {
            en: 'Because Redis commands only work after 500 milliseconds',
            bn: 'কারণ রেডিস ৫০০ মিলিসেকেন্ড পরে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Handles replication lag between primary and replica.',
          bn: 'প্রাইমারি ও রিপ্লিকার মধ্যকার সময়ের পার্থক্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'A concurrent read might hit a slow replica, fetch old data, and populate the cache. The second delayed delete purges that ghost entry.',
          bn: 'দেরি করা রিপ্লিকা থেকে কেউ পুরনো তথ্য এনে ক্যাশে ঢুকিয়ে ফেললেও ৫০০ মিলিসেকেন্ড পরের দ্বিতীয় ডিলেটে তা মুছে সাফ হয়ে যায়।'
        }
      },
      {
        id: 'q-caching-sliding-ttl-risk',
        kind: 'mcq',
        topic: 'Risk of sliding TTL on frequently read data',
        question: {
          en: 'What is the primary risk of using a sliding TTL (resetting the timer on every read) on a continuously requested resource?',
          bn: 'ঘন ঘন পঠিত ডেটাতে স্লাইডিং টিটিএল (প্রতি রিডে সময় রিসেট) ব্যবহার করার প্রধান ঝুঁকি কী?'
        },
        options: [
          {
            en: 'If writes bypass direct invalidation, the key may stay alive in cache indefinitely, serving stale data for weeks',
            bn: 'সরাসরি ইনভ্যালিডেশনে ভুল হলে কি-টি ক্যাশে অনির্দিষ্টকালের জন্য বেঁচে থাকবে এবং সপ্তাহের পর সপ্তাহ বাসি তথ্য দেখাবে'
          },
          {
            en: 'It causes the server clock to run backwards',
            bn: 'এটি সার্ভারের ঘড়ি পেছনের দিকে চালায়'
          },
          {
            en: 'It increases the price of RAM on Amazon Web Services',
            bn: 'এটি ক্লাউডে র‍্যামের দাম বাড়িয়ে দেয়'
          },
          {
            en: 'It forces the database to restart every hour',
            bn: 'এটি প্রতি ঘণ্টায় ডাটাবেস রিস্টার্ট করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Continuous reads keep the key immortal without expiration.',
          bn: 'অনবরত পড়ার কারণে কি-টি কখনোই স্বাভাবিকভাবে না মরার কথা ভাবুন।'
        },
        explanation: {
          en: 'A key with sliding TTL never expires as long as traffic continues flowing, making it vulnerable to serving stale data.',
          bn: 'স্লাইডিং টিটিএল থাকলে ট্রাফিক চলা পর্যন্ত কি-টি কখনোই নিজে থেকে মুছে যায় না, ফলে তথ্যের গরমিল দীর্ঘস্থায়ী হয়।'
        }
      },
      {
        id: 'q-caching-cache-tags',
        kind: 'mcq',
        topic: 'How Cache-Tags (Surrogate Keys) function',
        question: {
          en: 'How do Cache-Tags (Surrogate Keys) enable granular cache invalidation in Content Delivery Networks (CDNs)?',
          bn: 'সিডিএনে (CDN) ক্যাশ-ট্যাগ বা সারোগেট কি কীভাবে নিখুঁত ক্যাশ ইনভ্যালিডেশন করতে সাহায্য করে?'
        },
        options: [
          {
            en: 'Responses are tagged with entity identifiers (e.g. tag: author-42), allowing one API call to instantly purge all related cached pages across the globe',
            bn: 'পেজে নির্দিষ্ট ট্যাগ (যেমন tag: author-42) যুক্ত থাকে, ফলে মাত্র একটি কমান্ডে বিশ্বজুড়ে ওই ট্যাগ সম্পর্কিত সব ক্যাশ পেজ নিমেষে মুছে ফেলা যায়'
          },
          {
            en: 'They add watermarks to customer images',
            bn: 'তারা ছবির ওপর ওয়াটারমার্ক বসায়'
          },
          {
            en: 'They compress HTML files into ZIP format',
            bn: 'তারা এইচটিএমএল ফাইল জিপ ফাইলে রূপান্তর করে'
          },
          {
            en: 'They turn HTTP into FTP protocols',
            bn: 'তারা এইচটিটিপিকে এফটিপিতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tagging multiple cached pages for group purging.',
          bn: 'একসাথে অনেকগুলো পেজে ট্যাগ দিয়ে এক ক্লিকে মুছার কথা ভাবুন।'
        },
        explanation: {
          en: 'Instead of purging millions of individual URLs, a single purge by tag invalidates every cached asset associated with that entity.',
          bn: 'লক্ষ লক্ষ ইউআরএল আলাদাভাবে ডিলিট করার বদলে একটিমাত্র ট্যাগের সাহায্যে সংশ্লিষ্ট সব পেজ এক নিমিষে মুছে ফেলা সম্ভব।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-tower-of-layers',
    tech: 'caching',
    title: {
      en: 'Multi-Tier Caching Architecture, Key Normalization & The Vary Header',
      bn: 'মাল্টি-টিয়ার ক্যাশিং আর্কিটেকচার, কি নরমালাইজেশন ও ভ্যারি হেডার'
    }
  }
};