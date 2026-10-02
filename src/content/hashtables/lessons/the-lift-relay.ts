import type { Lesson } from '../../../lib/types';

export const theLiftRelayLesson: Lesson = {
  slug: 'the-lift-relay',
  tech: 'hash-tables',
  title: {
    en: 'Dynamic Resizing and Incremental Rehashing: The Amortized O(1) Architecture',
    bn: 'ডায়নামিক রিসাইজিং ও ইনক্রিমেন্টাল রিহ্যাশিং: অ্যামরটাইজড O(1) আর্কিটেকচার'
  },
  summary: {
    en: 'A comprehensive systems engineering analysis of hash table dynamic resizing, geometric capacity scaling, and incremental migration. As element count grows, fixed-capacity tables degrade: chaining degenerates into linear search, while open addressing hits a hard ceiling at load factor 1.0. We examine geometric doubling where capacity doubles when load factor reaches 0.75, proving amortized O(1) insertion time via Tarjan potential method. We analyze the catastrophic stop-the-world latency spike in naive synchronous resizing, where migrating millions of keys freezes event loops for seconds. Finally, we dissect the Redis dict.c incremental rehashing architecture, which maintains two concurrent tables (ht0 and ht1) and migrates buckets incrementally across incoming queries to preserve sub-millisecond p99 latencies.',
    bn: 'হ্যাশ টেবিলের ডায়নামিক রিসাইজিং, জ্যামিতিক ধারণক্ষমতা বৃদ্ধি এবং ইনক্রিমেন্টাল স্থানান্তরের একটি পূর্ণাঙ্গ সিস্টেম ইঞ্জিনিয়ারিং বিশ্লেষণ। উপাদানের সংখ্যা বাড়ার সাথে সাথে স্থির ধারণক্ষমতার টেবিল দুর্বল হয়ে পড়ে: চেইনিং রৈখিক অনুসন্ধানে পরিণত হয় এবং ওপেন অ্যাড্রেসিং লোড ফ্যাক্টর ১.০ এ পৌঁছালে সম্পূর্ণ অকেজো হয়ে যায়। আমরা ধারণক্ষমতা দ্বিগুণ করার কৌশল পরীক্ষা করেছি যেখানে লোড ফ্যাক্টর ০.৭৫ এ পৌঁছালে টেবিল দ্বিগুণ করা হয় এবং টারজানের পটেনশিয়াল মেথড দিয়ে প্রমাণ করা হয় যে প্রতিটি সন্নিবেশের গড় খরচ ধ্রুব O(1)। আমরা সাধারণ সিনক্রোনাস রিসাইজিংয়ের মারাত্মক স্টপ-দ্য-ওয়ার্ল্ড লেটেন্সি বিপর্যয় বিশ্লেষণ করেছি, যেখানে লক্ষ লক্ষ উপাদান একবারে সরাতে গিয়ে ইভেন্ট লুপ কয়েক সেকেন্ড হিমায়িত হয়ে যায়। সবশেষে রেডিসের ডুয়াল-টেবিল ইনক্রিমেন্টাল রিহ্যাশিং আর্কিটেকচার ব্যবচ্ছেদ করা হয়েছে, যা দুটি সমান্তরাল টেবিল (ht0 এবং ht1) বজায় রেখে প্রতি কুয়েরিতে অল্প অল্প করে বাকেট স্থানান্তর করে সাব-মিলিমিটার p99 লেটেন্সি নিশ্চিত করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Scaling Wall: Why Static Hash Tables Collapse',
        bn: 'স্কেলিং দেয়াল: কেন স্থির হ্যাশ টেবিল ভেঙে পড়ে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we explore dynamic resizing, the mechanism that allows hash tables to maintain O(1) lookups as datasets scale. A static hash table with fixed capacity M cannot survive continuous insertions. In separate chaining, average bucket chain length equals the load factor alpha = N / M. As N grows far larger than M, search degrades from O(1) to O(N), converting the hash table into an expensive linked list. In open addressing, N can never exceed M; once the table is full, insertion crashes or enters an infinite loop. To preserve constant-time access, the table must expand dynamically.',
        bn: 'এই পাঠে আমরা ডায়নামিক রিসাইজিং অন্বেষণ করব, যে প্রক্রিয়ার মাধ্যমে ডেটাসেট বড় হলেও হ্যাশ টেবিল তার ধ্রুব O(1) গতি বজায় রাখতে পারে। একটি স্থির ধারণক্ষমতা M এর টেবিল একটানা ডেটা সন্নিবেশ সহ্য করতে পারে না। সেপারেট চেইনিংয়ে বাকেট চেইনের গড় দৈর্ঘ্য হলো লোড ফ্যাক্টর alpha = N / M। যখন N এর মান M এর চেয়ে অনেক বড় হয়ে যায়, তখন অনুসন্ধানের গতি O(1) থেকে নেমে O(N) এ চলে যায় এবং হ্যাশ টেবিলটি একটি ধীরগতির লিঙ্কড লিস্টে পরিণত হয়। ওপেন অ্যাড্রেসিংয়ে N কখনোই M কে ছাড়াতে পারে না; ফলে টেবিল পূর্ণ হয়ে গেলে সন্নিবেশ ব্যর্থ হয় বা অসীম লুপে আটকে যায়। তাই গতি ধরে রাখতে টেবিলকে ডায়নামিকভাবে বড় হতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'geometric doubling',
          def: {
            en: 'Allocating a new table array of size 2 * M whenever the load factor exceeds a threshold (typically 0.70 to 0.75), guaranteeing amortized O(1) insertion time across all inserts.',
            bn: 'লোড ফ্যাক্টর নির্দিষ্ট সীমা (সাধারণত ০.৭০ থেকে ০.৭৫) অতিক্রম করলেই ২ * M আকারের একটি নতুন টেবিল অ্যারে বরাদ্দ করা, যা প্রতিটি সন্নিবেশের গড় সময় ধ্রুব O(1) নিশ্চিত করে।'
          }
        },
        {
          term: 'stop-the-world rehash',
          def: {
            en: 'A naive resizing strategy that synchronously copies every element from the old table to the new table in a single blocking pass, inducing severe multi-second tail latency spikes.',
            bn: 'একটি সরল রিসাইজিং পদ্ধতি যা পুরানো টেবিল থেকে নতুন টেবিলে সমস্ত উপাদান একবারে ব্লক করে স্থানান্তর করে, ফলে কয়েক সেকেন্ড পর্যন্ত মারাত্মক লেটেন্সি স্পাইক ঘটে।'
          }
        },
        {
          term: 'incremental rehashing',
          def: {
            en: 'The dual-table resizing architecture used by Redis, which splits element migration into micro-steps executed alongside regular read and write queries, bounding latency.',
            bn: 'রেডিসের ব্যবহৃত ডুয়াল-টেবিল রিসাইজিং পদ্ধতি, যা উপাদান স্থানান্তরকে ছোট ছোট ভাগে ভাগ করে সাধারণ রিড ও রাইট কুয়েরির সাথে সম্পন্ন করে লেটেন্সি নিয়ন্ত্রণে রাখে।'
          }
        },
        {
          term: 'shrink hysteresis',
          def: {
            en: 'Maintaining a deliberate gap between growth and shrink thresholds (such as grow at 0.75 and shrink at 0.10) to prevent alternating inserts and deletes from triggering endless resize thrashing.',
            bn: 'বৃদ্ধি এবং সংকোচনের সীমার মধ্যে একটি সুস্পষ্ট ব্যবধান (যেমন ০.৭৫ এ বৃদ্ধি এবং ০.১০ এ সংকোচন) বজায় রাখা, যাতে উপাদানের সামান্য ওঠানামায় বারবার টেবিল রিসাইজ করার অপচয় না ঘটে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'amortized',
      text: {
        en: 'Amortized Analysis: The Accounting and Potential Proofs',
        bn: 'অ্যামরটাইজড বিশ্লেষণ: অ্যাকাউন্টিং এবং পটেনশিয়াল প্রমাণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Why must hash table expansion be geometric (doubling 2 * M) rather than arithmetic (+K slots)? Suppose an empty table grows by a fixed constant K on each expansion. Across N insertions, the table resizes N / K times. The total elements copied during these resizes equals K + 2K + 3K + ... + N = O(N^2) operations. Dividing by N yields an amortized cost of O(N) per insertion, which completely destroys the O(1) guarantee!',
        bn: 'হ্যাশ টেবিলের বৃদ্ধি কেন সমান্তর (+K স্লট) না হয়ে জ্যামিতিক (দ্বিগুণ ২ * M) হতে হবে? ধরা যাক একটি খালি টেবিল প্রতিবার নির্দিষ্ট K সংখ্যক স্লট বাড়ে। N সংখ্যক সন্নিবেশের মধ্যে টেবিলটি N / K বার রিসাইজ হবে। এই রিসাইজগুলোর সময় মোট উপাদান সরানোর সংখ্যা দাঁড়াবে K + ২K + ৩K + ... + N = O(N^২)। একে N দিয়ে ভাগ করলে প্রতিটি সন্নিবেশের গড় খরচ হবে O(N), যা হ্যাশ টেবিলের ধ্রুব O(1) গতির নিশ্চয়তা পুরোপুরি ধ্বংস করে!'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Under geometric doubling, the table resizes only log2(N) times. The total elements copied during all resizes is 1 + 2 + 4 + 8 + ... + N / 2 < N. Adding the N initial insertions gives fewer than 2N total operations for N inserts, resulting in an amortized cost strictly bounded by 2 credits per insert: O(1). In Tarjan potential method, we define the potential function Phi = 2N - M when the table is at least half full. When N = M / 2, Phi = 0. Right before doubling when N = M, Phi = M, perfectly paying for the M copy operations with zero leftover debt.',
        bn: 'কিন্তু জ্যামিতিক দ্বিগুণ পদ্ধতিতে টেবিলটি মাত্র log2(N) বার রিসাইজ হয়। সমস্ত রিসাইজে স্থানান্তরিত মোট উপাদানের সংখ্যা হলো ১ + ২ + ৪ + ৮ + ... + N / ২ < N। N সংখ্যক প্রাথমিক সন্নিবেশ যোগ করলে N টি উপাদানের জন্য মোট কাজের সংখ্যা ২N এর কম থাকে, যার ফলে প্রতিটি সন্নিবেশে গড় খরচ ধ্রুব O(1) থাকে। টারজানের পটেনশিয়াল মেথড অনুসারে, টেবিল অর্ধেক পূর্ণ হলে পটেনশিয়াল ফাংশন Phi = ২N - M ধরা হয়। যখন N = M / ২ তখন Phi = ০। দ্বিগুণ হওয়ার ঠিক আগে যখন N = M হয়, তখন সঞ্চিত পটেনশিয়াল Phi = M হয়, যা M সংখ্যক ডেটা সরানোর বাস্তব খরচ একাই পরিশোধ করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'redis',
      text: {
        en: 'The Stop-the-World Latency Spike and Redis dict.c Incremental Rehashing',
        bn: 'স্টপ-দ্য-ওয়ার্ল্ড লেটেন্সি সংকট এবং রেডিসের ইনক্রিমেন্টাল রিহ্যাশিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While amortized analysis proves that table doubling costs O(1) on average, that average hides catastrophic latency spikes for individual requests. In standard runtimes like Java HashMap or Python dict, table resizing is synchronous and monolithic. When a table holding 10000000 entries hits load factor 0.75, a single thread must allocate an array of 20000000 slots and rehash all 10000000 entries before returning. This stop-the-world pause freezes execution for 1 to 5 seconds, causing timeouts across microservices and violating strict p99 service level agreements.',
        bn: 'যদিও অ্যামরটাইজড বিশ্লেষণ প্রমাণ করে যে টেবিল দ্বিগুণ করার গড় খরচ O(1), এই গড় মানটি একটি একক অনুরোধের চরম বিলম্ব ঢেকে রাখে। জাভা হ্যাশম্যাপ বা পাইথন ডিকশনারির মতো সাধারণ সিস্টেমে টেবিল রিসাইজিং সম্পূর্ণ সিনক্রোনাস ও একক পদক্ষেপে ঘটে। যখন ১০০০০০০০ উপাদানের একটি টেবিল ০.৭৫ লোড ফ্যাক্টরে পৌঁছায়, তখন একটি থ্রেডকে ২০০০০০০০ স্লটের নতুন অ্যারে বরাদ্দ করে ১০০০০০০০ উপাদানই নতুন করে সাজাতে হয়। এই স্টপ-দ্য-ওয়ার্ল্ড বিরতির কারণে সার্ভার ১ থেকে ৫ সেকেন্ড পর্যন্ত থমকে যায়, যার ফলে মাইক্রোসার্ভিসে টাইমআউট ঘটে এবং p99 চুক্তি লঙ্ঘিত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To eliminate stop-the-world freezes, Redis implements incremental rehashing inside dict.c. The hash table structure maintains two internal tables: ht0 (the current primary table) and ht1 (the newly allocated larger or smaller table). A migration cursor rehashidx tracks progress. When not rehashing, rehashidx is -1. When resizing triggers, Redis allocates ht1 and sets rehashidx to 0. Instead of moving all elements at once, Redis moves small batches of buckets during every query, interleaving migration work with production traffic.',
        bn: 'এই স্টপ-দ্য-ওয়ার্ল্ড বিরতি দূর করতে রেডিস তার dict.c ফাইলে ইনক্রিমেন্টাল রিহ্যাশিং বাস্তবায়ন করেছে। হ্যাশ টেবিল কাঠামোটি ভেতরে দুটি টেবিল সংরক্ষণ করে: ht0 (বর্তমান মূল টেবিল) এবং ht1 (নতুন বরাদ্দকৃত বড় বা ছোট টেবিল)। স্থানান্তরের অগ্রগতি পরিমাপ করতে একটি কার্সর rehashidx ব্যবহার করা হয়। যখন রিহ্যাশ চলে না, তখন rehashidx এর মান থাকে -১। রিসাইজিং শুরু হলে রেডিস ht1 বরাদ্দ করে এবং rehashidx কে ০ তে সেট করে। সব উপাদান একবারে সরানোর বদলে প্রতিটি কুয়েরির সময় রেডিস অল্প কয়েকটি করে বাকেট স্থানান্তর করে, ফলে সার্ভারের নিয়মিত কাজের মাঝে কোনো বিঘ্ন ঘটে না।'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Step 1: Allocation and Cursor Initialization',
            bn: 'ধাপ ১: বরাদ্দ এবং কার্সর চালু'
          },
          text: {
            en: 'When ht0 reaches load factor 0.75, allocate ht1 with capacity 2 * ht0.length and set rehashidx = 0.',
            bn: 'যখন ht0 টেবিলটি ০.৭৫ লোড ফ্যাক্টরে পৌঁছায়, তখন ২ * ht0.length ধারণক্ষমতার ht1 বরাদ্দ করুন এবং rehashidx = ০ সেট করুন।'
          }
        },
        {
          title: {
            en: 'Step 2: Dual-Table Insert Law',
            bn: 'ধাপ ২: ডুয়াল-টেবিল সন্নিবেশ নীতি'
          },
          text: {
            en: 'During an active rehash, all new insertions are written directly to ht1. This guarantees ht0 never grows.',
            bn: 'রিহ্যাশ চলাকালীন সমস্ত নতুন ডেটা সরাসরি নতুন ht1 টেবিলে লেখা হয়। এটি নিশ্চিত করে যে পুরানো ht0 কখনো আর বড় হবে না।'
          }
        },
        {
          title: {
            en: 'Step 3: Two-Phase Lookup and Amortized Step',
            bn: 'ধাপ ৩: দ্বি-পর্যায়ের অনুসন্ধান এবং ধাপ স্থানান্তর'
          },
          text: {
            en: 'Every read or write migrates bucket at rehashidx from ht0 to ht1, then increments rehashidx. Reads check ht0, then ht1.',
            bn: 'প্রতিটি রিড বা রাইট অপারেশনের সময় rehashidx ইনডেক্সের বাকেটটিকে ht0 থেকে ht1 এ সরানো হয় এবং rehashidx এক বাড়ানো হয়। অনুসন্ধানে প্রথমে ht0 এবং পরে ht1 দেখা হয়।'
          }
        },
        {
          title: {
            en: 'Step 4: Table Swap and Finalization',
            bn: 'ধাপ ৪: টেবিল বদল এবং সমাপ্তি'
          },
          text: {
            en: 'When rehashidx reaches the end of ht0, free ht0 memory, set ht0 = ht1, reset ht1 = null, and set rehashidx = -1.',
            bn: 'যখন rehashidx পুরানো ht0 এর শেষ প্রান্তে পৌঁছায়, তখন ht0 এর মেমরি মুক্ত করে ht0 = ht1 করা হয়, ht1 = null করা হয় এবং rehashidx = -১ সেট করে রিহ্যাশ সমাপ্ত হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'code',
      text: {
        en: 'Empirical Verification: Redis-Style Incremental Rehashing in Action',
        bn: 'বাস্তব যাচাই: রেডিস শৈলীর ইনক্রিমেন্টাল রিহ্যাশিং বাস্তবায়ন'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Concrete implementation of Redis dict.c incremental rehashing
type Entry<K, V> = { key: K; val: V };

class IncrementalHashTable<K, V> {
  // ht0 is primary table, ht1 is active migration target
  tables: [Entry<K, V>[][], Entry<K, V>[][] | null];
  rehashidx = -1; // -1 indicates no rehash in progress
  totalKeys = 0;

  constructor(initialCapacity = 4) {
    this.tables = [
      new Array(initialCapacity).fill(null).map(() => []),
      null
    ];
  }

  isRehashing(): boolean {
    return this.rehashidx !== -1;
  }

  hash(key: string, capacity: number): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = (h * 31 + key.charCodeAt(i)) >>> 0;
    }
    return h % capacity;
  }

  // Migrate exactly one non-empty bucket per call
  stepRehash(): void {
    if (!this.isRehashing()) return;
    const oldTable = this.tables[0];
    const newTable = this.tables[1]!;

    while (this.rehashidx < oldTable.length && oldTable[this.rehashidx].length === 0) {
      this.rehashidx++;
    }

    if (this.rehashidx >= oldTable.length) {
      // Finalize rehash: swap ht1 into ht0
      this.tables[0] = newTable;
      this.tables[1] = null;
      this.rehashidx = -1;
      return;
    }

    // Move entries in current bucket
    const bucket = oldTable[this.rehashidx];
    for (const entry of bucket) {
      const idx = this.hash(entry.key as unknown as string, newTable.length);
      newTable[idx].push(entry);
    }
    oldTable[this.rehashidx] = [];
    this.rehashidx++;

    if (this.rehashidx >= oldTable.length) {
      this.tables[0] = newTable;
      this.tables[1] = null;
      this.rehashidx = -1;
    }
  }

  insert(key: string, val: V): void {
    if (this.isRehashing()) this.stepRehash();

    const load = this.totalKeys / this.tables[0].length;
    if (!this.isRehashing() && load >= 0.75) {
      // Trigger incremental resize
      const newCap = this.tables[0].length * 2;
      this.tables[1] = new Array(newCap).fill(null).map(() => []);
      this.rehashidx = 0;
    }

    // Law: Always insert into ht1 during rehash
    const target = this.isRehashing() ? this.tables[1]! : this.tables[0];
    const idx = this.hash(key, target.length);
    target[idx].push({ key: key as unknown as K, val });
    this.totalKeys++;
  }

  get(key: string): V | undefined {
    if (this.isRehashing()) this.stepRehash();

    // Check ht0 first, then ht1
    for (let t = 0; t <= 1; t++) {
      const tbl = this.tables[t];
      if (!tbl) continue;
      const idx = this.hash(key, tbl.length);
      for (const entry of tbl[idx]) {
        if (entry.key === (key as unknown as K)) return entry.val;
      }
      if (!this.isRehashing()) break;
    }
    return undefined;
  }
}

// Verification trace
const ht = new IncrementalHashTable<string, number>(4);
ht.insert('k1', 10);
ht.insert('k2', 20);
ht.insert('k3', 30);
console.log(\`Initial: keys=\${ht.totalKeys}, cap=\${ht.tables[0].length}, rehashing=\${ht.isRehashing()}\`);
// Initial: keys=3, cap=4, rehashing=false

ht.insert('k4', 40); // load 4/4 >= 0.75 -> triggers rehash to cap 8
console.log(\`Triggered: rehashing=\${ht.isRehashing()}, ht0=\${ht.tables[0].length}, ht1=\${ht.tables[1]!.length}, cursor=\${ht.rehashidx}\`);
// Triggered: rehashing=true, ht0=4, ht1=8, cursor=0

ht.get('k1'); // Steps rehash
console.log(\`After query 1: cursor=\${ht.rehashidx}, rehashing=\${ht.isRehashing()}\`);
// After query 1: cursor=1, rehashing=true

ht.get('k2'); // Steps rehash
console.log(\`After query 2: cursor=\${ht.rehashidx}, rehashing=\${ht.isRehashing()}\`);
// After query 2: cursor=3, rehashing=true

ht.get('k3'); // Steps rehash
console.log(\`After query 3: cursor=\${ht.rehashidx}, rehashing=\${ht.isRehashing()}\`);
// After query 3: cursor=-1, rehashing=false

console.log(\`Finalized: new capacity=\${ht.tables[0].length}, ht1=\${ht.tables[1]}\`);
// Finalized: new capacity=8, ht1=null`,
      caption: {
        en: 'Redis dict.c incremental rehashing lifecycle: migrating buckets step-by-step across queries to eliminate stop-the-world tail latency.',
        bn: 'রেডিসের ইনক্রিমেন্টাল রিহ্যাশিং চক্র: কুয়েরির ফাঁকে ফাঁকে বাকেট স্থানান্তর করে স্টপ-দ্য-ওয়ার্ল্ড লেটেন্সি দূর করার বাস্তব প্রমাণ।'
      }
    },
    {
      type: 'heading',
      id: 'table',
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'matrix',
      text: {
        en: 'Architecture Comparison: Resizing Strategies and Production Trade-Offs',
        bn: 'আর্কিটেকচার তুলনা: রিসাইজিং কৌশল এবং প্রোডাকশন বিবেচনা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Resizing Metric', bn: 'রিসাইজিং মেট্রিক' },
        { en: 'Naive Synchronous Rehash', bn: 'সাধারণ সিনক্রোনাস রিহ্যাশ' },
        { en: 'Incremental Rehashing (Redis)', bn: 'ইনক্রিমেন্টাল রিহ্যাশিং (রেডিস)' },
        { en: 'Dynamic Chaining (No Resize)', bn: 'ডায়নামিক চেইনিং (রিসাইজহীন)' }
      ],
      rows: [
        [
          { en: 'p99 Tail Latency', bn: 'p99 লেটেন্সি স্পাইক' },
          { en: 'Catastrophic (multi-second freeze)', bn: 'মারাত্মক (কয়েক সেকেন্ড স্থগিত)' },
          { en: 'Deterministic (< 1 millisecond)', bn: 'ধ্রুবক (< ১ মিলিমিটার)' },
          { en: 'Degrades continuously to O(N)', bn: 'ধীরে ধীরে O(N) এ নেমে যায়' }
        ],
        [
          { en: 'Peak Memory Footprint', bn: 'সর্বোচ্চ মেমরি পদচিহ্ন' },
          { en: '3 * M during allocation', bn: 'বরাদ্দের সময় ৩ * M' },
          { en: '3 * M for migration window duration', bn: 'স্থানান্তর চলাকালীন ৩ * M' },
          { en: '1 * M (fixed bucket array)', bn: '১ * M (নির্দিষ্ট বাকেট অ্যারে)' }
        ],
        [
          { en: 'Amortized Cost per Insert', bn: 'প্রতি সন্নিবেশে গড় খরচ' },
          { en: 'O(1) amortized', bn: 'O(1) অ্যামরটাইজড' },
          { en: 'O(1) amortized', bn: 'O(1) অ্যামরটাইজড' },
          { en: 'O(N) worst-case search', bn: 'সবচেয়ে খারাপ ক্ষেত্রে O(N)' }
        ],
        [
          { en: 'Lookup Path Complexity', bn: 'অনুসন্ধানের জটিলতা' },
          { en: 'Single array lookup', bn: 'একটি অ্যারেতে অনুসন্ধান' },
          { en: 'Dual table check (ht0 then ht1)', bn: 'দুটি টেবিলে অনুসন্ধান (ht0 তারপর ht1)' },
          { en: 'Deep linked list traversal', bn: 'গভীর লিঙ্কড লিস্ট পরিদর্শন' }
        ],
        [
          { en: 'Implementation Complexity', bn: 'বাস্তবায়ন জটিলতা' },
          { en: 'Low (simple loop)', bn: 'সহজ (একটি সাধারণ লুপ)' },
          { en: 'High (cursor state machine)', bn: 'জটিল (কার্সর স্টেট মেশিন)' },
          { en: 'Minimal', bn: 'সবচেয়ে কম' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'lr-ex1',
      kind: 'mcq',
      topic: 'geometric doubling capacity',
      question: {
        en: 'When a hash table with capacity 4 holding 3 elements reaches load factor 0.75, what is the new capacity allocated for resizing?',
        bn: '৪ ধারণক্ষমতার একটি হ্যাশ টেবিল ৩ টি উপাদান ধারণ করে ০.৭৫ লোড ফ্যাক্টরে পৌঁছালে রিসাইজিংয়ের জন্য নতুন কত ধারণক্ষমতা বরাদ্দ করা হয়?'
      },
      options: [
        {
          en: '8 because geometric scaling doubles the current capacity (4 * 2 = 8)',
          bn: '৮ কারণ জ্যামিতিক স্কেলিংয়ে বর্তমান ধারণক্ষমতা দ্বিগুণ করা হয় (৪ * ২ = ৮)'
        },
        {
          en: '5 because tables expand by a fixed constant of 1',
          bn: '৫ কারণ টেবিল নির্দিষ্ট ধ্রুবক ১ করে বৃদ্ধি পায়'
        },
        {
          en: '16 because tables scale quadratically',
          bn: '১৬ কারণ টেবিল দ্বিঘাত হারে বৃদ্ধি পায়'
        },
        {
          en: '2 because tables shrink upon reaching capacity',
          bn: '২ কারণ ধারণক্ষমতায় পৌঁছালে টেবিল সংকুচিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Geometric doubling multiplies capacity by 2.',
        bn: 'জ্যামিতিক দ্বিগুণ পদ্ধতিতে ধারণক্ষমতাকে ২ দিয়ে গুণ করা হয়।'
      },
      explanation: {
        en: 'Doubling capacity from 4 to 8 halves the load factor back down to 3 / 8 = 0.375, providing room for subsequent insertions while ensuring amortized O(1) operations.',
        bn: 'ধারণক্ষমতা ৪ থেকে ৮ এ দ্বিগুণ করলে লোড ফ্যাক্টর কমে ৩ / ৮ = ০.৩৭৫ এ নেমে আসে, যা পরবর্তী সন্নিবেশের জায়গা তৈরি করে এবং গড় O(1) গতি বজায় রাখে।'
      }
    },
    {
      id: 'lr-ex2',
      kind: 'mcq',
      topic: 'Tarjan potential balance',
      question: {
        en: 'In Tarjan potential method with Phi = 2N - M for an expanding table, what is the stored potential balance when capacity M is 16 and key count N is 16?',
        bn: 'টারজানের পটেনশিয়াল মেথডে Phi = ২N - M সূত্রে ধারণক্ষমতা M = ১৬ এবং চাবির সংখ্যা N = ১৬ হলে সঞ্চিত পটেনশিয়ালের মান কত?'
      },
      options: [
        {
          en: '16 because Phi = 2 * 16 - 16 = 32 - 16 = 16, which perfectly pays for copying 16 elements during doubling',
          bn: '১৬ কারণ Phi = ২ * ১৬ - ১৬ = ৩২ - ১৬ = ১৬, যা দ্বিগুণ করার সময় ১৬ টি উপাদান স্থানান্তরের খরচ পুরোপুরি পরিশোধ করে'
        },
        {
          en: '0 because potential is always zero at full capacity',
          bn: '০ কারণ পূর্ণ ধারণক্ষমতায় পটেনশিয়াল সর্বদা শূন্য থাকে'
        },
        {
          en: '32 because potential multiplies key count by 2',
          bn: '৩২ কারণ পটেনশিয়াল চাবির সংখ্যাকে ২ দিয়ে গুণ করে'
        },
        {
          en: '4 because potential scales logarithmically',
          bn: '৪ কারণ পটেনশিয়াল লগারিদমিক হারে বাড়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate 2 * N - M with N = 16 and M = 16.',
        bn: 'N = ১৬ এবং M = ১৬ বসিয়ে ২ * N - M হিসাব করুন।'
      },
      explanation: {
        en: 'Right before the table doubles, N = M = 16. The potential Phi = 2(16) - 16 = 16 credits. When doubling occurs, reallocating and moving 16 elements costs 16 units of work, paid entirely by the 16 stored credits.',
        bn: 'দ্বিগুণ হওয়ার ঠিক আগে N = M = ১৬ হয়। সঞ্চিত পটেনশিয়াল Phi = ২(১৬) - ১৬ = ১৬ ক্রেডিট। দ্বিগুণ করার সময় ১৬টি উপাদান সরাতে ১৬ একক কাজ লাগে, যা এই সঞ্চিত ১৬ ক্রেডিট দিয়ে পুরোপুরি পরিশোধ হয়।'
      }
    },
    {
      id: 'lr-ex3',
      kind: 'mcq',
      topic: 'incremental rehashing step',
      question: {
        en: 'During Redis incremental rehashing, what happens to bucket ht0[rehashidx] when it is migrated?',
        bn: 'রেডিসের ইনক্রিমেন্টাল রিহ্যাশিং চলাকালীন ht0[rehashidx] বাকেটটি স্থানান্তরিত হলে কী ঘটে?'
      },
      options: [
        {
          en: 'All entries in ht0[rehashidx] are re-hashed into ht1, the old bucket is cleared, and rehashidx increments to the next index',
          bn: 'ht0[rehashidx] এর সমস্ত উপাদান পুনরায় হ্যাশ করে ht1 এ স্থানান্তর করা হয়, পুরানো বাকেটটি খালি করা হয় এবং rehashidx পরবর্তী ইনডেক্সে এগিয়ে যায়'
        },
        {
          en: 'The entire operating system freezes until all buckets migrate',
          bn: 'সমস্ত বাকেট স্থানান্তর না হওয়া পর্যন্ত সম্পূর্ণ অপারেটিং সিস্টেম থেমে থাকে'
        },
        {
          en: 'The elements are deleted permanently from memory',
          bn: 'উপাদানগুলো মেমরি থেকে চিরতরে মুছে ফেলা হয়'
        },
        {
          en: 'The keys are written to an external tape drive',
          bn: 'চাবিগুলো একটি বাহ্যিক টেপ ড্রাইভে লেখা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Recall the micro-step migration: move one bucket and advance cursor.',
        bn: 'মাইক্রো-ধাপ স্থানান্তর স্মরণ করুন: একটি বাকেট সরানো এবং কার্সর সামনে এগিয়ে নেওয়া।'
      },
      explanation: {
        en: 'Redis migrates elements bucket by bucket. Migrating a single bucket costs O(1) on average, completely avoiding monolithic multi-second latency freezes.',
        bn: 'রেডিস বাকেট ধরে ধরে ডেটা স্থানান্তর করে। একটিমাত্র বাকেট সরাতে গড়ে O(1) সময় লাগে, যার ফলে কয়েক সেকেন্ডের স্টপ-দ্য-ওয়ার্ল্ড বিরতি পুরোপুরি এড়ানো যায়।'
      }
    },
    {
      id: 'lr-ex4',
      kind: 'mcq',
      topic: 'shrink hysteresis gap',
      question: {
        en: 'Why does a hash table configure its shrink threshold at 0.10 rather than 0.50 when its growth threshold is 0.75?',
        bn: 'একটি হ্যাশ টেবিলের বৃদ্ধির সীমা ০.৭৫ হলে সংকোচনের সীমা ০.৫০ এর বদলে ০.১০ এ কেন নির্ধারণ করা হয়?'
      },
      options: [
        {
          en: 'To provide a wide hysteresis gap that prevents alternating inserts and deletes from triggering endless resize thrashing',
          bn: 'একটি প্রশস্ত হিস্টেরেসিস ব্যবধান তৈরি করতে যাতে পরপর ডেটা সন্নিবেশ ও মোছনের কারণে অবিরাম রিসাইজ থ্র্যাশিং তৈরি না হয়'
        },
        {
          en: 'Because tables cannot shrink once allocated',
          bn: 'কারণ একবার বরাদ্দ করার পর টেবিল সংকুচিত হতে পারে না'
        },
        {
          en: 'To comply with POSIX thread synchronization standards',
          bn: 'পসিক্স থ্রেড সিঙ্ক্রোনাইজেশন মান পূরণ করতে'
        },
        {
          en: 'Because memory addresses cannot be divided by 2',
          bn: 'কারণ মেমরি ঠিকানাকে ২ দিয়ে ভাগ করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'If shrink threshold is too close to growth threshold, crossing the boundary back and forth reallocates memory constantly.',
        bn: 'সংকোচনের সীমা বৃদ্ধির সীমার কাছাকাছি হলে সামান্য ওঠানামায় বারবার মেমরি বরাদ্দ হতে থাকে।'
      },
      explanation: {
        en: 'If a table doubled at 0.75 and shrank at 0.50, inserting and deleting a single element around the boundary would repeatedly trigger expensive O(N) rehashes. A wide gap (0.75 vs 0.10) prevents this thrashing.',
        bn: 'টেবিল ০.৭৫ এ দ্বিগুণ এবং ০.৫০ এ অর্ধেক হলে সীমানার কাছে একটি করে উপাদান যোগ বা মুছলেই বারবার ব্যয়বহুল O(N) রিহ্যাশ ঘটবে। ০.৭৫ বনাম ০.১০ এর ব্যবধান এই ক্ষতিকর দোদুল্যমানতা রোধ করে।'
      }
    }
  ],
  quiz: {
    id: 'lift-relay-quiz',
    title: {
      en: 'Dynamic Resizing and Incremental Rehashing Quiz',
      bn: 'ডায়নামিক রিসাইজিং এবং ইনক্রিমেন্টাল রিহ্যাশিং কুইজ'
    },
    questions: [
      {
        id: 'lr-q1',
        kind: 'mcq',
        topic: 'amortization',
        question: {
          en: 'Why does arithmetic table expansion (+K slots) fail to deliver O(1) amortized insertion time?',
          bn: 'সমান্তর টেবিল বৃদ্ধি (+K স্লট) কেন ধ্রুব O(1) অ্যামরটাইজড সন্নিবেশ সময় দিতে ব্যর্থ হয়?'
        },
        options: [
          {
            en: 'Expanding by fixed K requires O(N) resizes across N inserts, causing total copy work to scale as O(N^2) and amortized cost to degrade to O(N)',
            bn: 'নির্দিষ্ট K বাড়ালে N সন্নিবেশে মোট O(N) বার রিসাইজ লাগে, ফলে মোট স্থানান্তর কাজ O(N^২) হয়ে প্রতি সন্নিবেশের গড় খরচ O(N) এ নেমে যায়'
          },
          {
            en: 'Arithmetic addition causes immediate floating-point rounding errors in CPU registers',
            bn: 'সমান্তর যোগের ফলে সিপিইউ রেজিস্টারে তাৎক্ষণিক ফ্লোটিং-পয়েন্ট রাউন্ডিং ত্রুটি তৈরি হয়'
          },
          {
            en: 'Operating systems prohibit memory allocations that are not powers of two',
            bn: 'অপারেটিং সিস্টেম দুইয়ের ঘাত নয় এমন মেমরি বরাদ্দ সম্পূর্ণ নিষিদ্ধ করে'
          },
          {
            en: 'It forces keys to be re-encrypted using DES on every insertion step',
            bn: 'প্রতিটি সন্নিবেশের সময় এটি চাবিগুলোকে নতুন করে ডিইএস দিয়ে এনক্রিপ্ট করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sum the arithmetic series K + 2K + 3K + ... + N. What is the total sum divided by N?',
          bn: 'সমান্তর ধারা K + ২K + ৩K + ... + N যোগ করুন। সেই যোগফলকে N দিয়ে ভাগ করলে কী দাঁড়ায়?'
        },
        explanation: {
          en: 'Resizing by a fixed constant K means copying elements at each step. Summing this progression yields O(N^2) total work for N insertions. Dividing by N gives an amortized cost of O(N) per operation. Geometric doubling fixes this by limiting total resize copies to 2N.',
          bn: 'নির্দিষ্ট K স্লট করে বাড়ালে প্রতি ধাপে উপাদান কপি করতে হয়। এই ধারার মোট যোগফল হলো O(N^২)। একে N দিয়ে ভাগ করলে প্রতি সন্নিবেশের খরচ হয় O(N)। জ্যামিতিক দ্বিগুণ পদ্ধতিতে সমস্ত রিসাইজের মোট স্থানান্তর ২N এর মধ্যে সীমাবদ্ধ থাকে, যা O(1) নিশ্চিত করে।'
        }
      },
      {
        id: 'lr-q2',
        kind: 'mcq',
        topic: 'latency',
        question: {
          en: 'What causes the stop-the-world latency spike in naive synchronous table resizing?',
          bn: 'সাধারণ সিনক্রোনাস টেবিল রিসাইজিংয়ে স্টপ-দ্য-ওয়ার্ল্ড লেটেন্সি বিপর্যয়ের মূল কারণ কী?'
        },
        options: [
          {
            en: 'A single user request must synchronously allocate the new table and rehash all N elements before completing, freezing the thread for seconds',
            bn: 'একটি একক ব্যবহারকারীর অনুরোধকে নতুন টেবিল বরাদ্দ করে সমস্ত N উপাদান সিনক্রোনাসলি স্থানান্তর করতে হয়, যা থ্রেডকে কয়েক সেকেন্ডের জন্য হিমায়িত করে'
          },
          {
            en: 'The Linux kernel halts all processor cores whenever an array length exceeds 1024',
            bn: 'অ্যারের দৈর্ঘ্য ১০২৪ ছাড়িয়ে গেলেই লিনাক্স কার্নেল সমস্ত প্রসেসর কোর থামিয়ে দেয়'
          },
          {
            en: 'CPU L1 cache memory is permanently wiped during dynamic allocation',
            bn: 'ডায়নামিক বরাদ্দের সময় সিপিইউ L1 ক্যাশ মেমরি স্থায়ীভাবে মুছে যায়'
          },
          {
            en: 'TCP connections automatically disconnect whenever hash collisions occur',
            bn: 'হ্যাশ সংঘর্ষ দেখা দিলেই টিসিপি সংযোগ স্বয়ংক্রিয়ভাবে বিচ্ছিন্ন হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about who does the work when the 10-millionth element trips the load factor threshold in Java HashMap.',
          bn: 'জাভা হ্যাশম্যাপে ১ কোটি নম্বর উপাদানটি লোড ফ্যাক্টর সীমা অতিক্রম করলে কার ওপর পুরো চাপ পড়ে তা ভাবুন।'
        },
        explanation: {
          en: 'In naive implementations, resizing is executed inline on the calling thread. For tables holding millions of entries, re-evaluating hashes, allocating memory, and re-inserting millions of nodes blocks the calling thread for seconds, blowing p99 SLAs.',
          bn: 'সাধারণ সিস্টেমে যে থ্রেডটি ইনসার্ট কল করে, তাকেই পুরো রিসাইজের কাজ একাই করতে হয়। কোটি কোটি উপাদানের হ্যাশ পুনরায় বের করে নতুন অ্যারেতে সাজাতে গিয়ে কয়েক সেকেন্ড সময় লাগে, যা p99 লেটেন্সি চুক্তি ভেঙে দেয়।'
        }
      },
      {
        id: 'lr-q3',
        kind: 'mcq',
        topic: 'redis-dict',
        question: {
          en: 'In Redis incremental rehashing (dict.c), what is the insertion invariant during an active migration?',
          bn: 'রেডিসের ইনক্রিমেন্টাল রিহ্যাশিং (dict.c) চলাকালীন নতুন উপাদান সন্নিবেশের প্রধান নিয়মটি কী?'
        },
        options: [
          {
            en: 'All new keys are inserted strictly into the new table ht1, guaranteeing ht0 never receives new elements and will eventually reach zero',
            bn: 'সমস্ত নতুন চাবি কঠোরভাবে নতুন টেবিল ht1 এ ঢোকানো হয়, যা নিশ্চিত করে পুরানো ht0 তে কোনো নতুন উপাদান ঢুকবে না এবং তা একসময় খালি হবে'
          },
          {
            en: 'Insertions are banned until rehashing completes',
            bn: 'রিহ্যাশ শেষ না হওয়া পর্যন্ত সমস্ত নতুন সন্নিবেশ নিষিদ্ধ করা হয়'
          },
          {
            en: 'Keys are written to disk instead of RAM',
            bn: 'চাবিগুলো র‍্যামের বদলে সরাসরি হার্ডডিস্কে লেখা হয়'
          },
          {
            en: 'Both ht0 and ht1 receive duplicate copies of every inserted key',
            bn: 'প্রতিটি নতুন চাবি ht0 এবং ht1 উভয় টেবিলেই নকল করে রাখা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you keep adding new items to ht0 while migrating out of ht0, can the migration cursor ever reach the finish line?',
          bn: 'পুরানো ht0 থেকে খালি করার পাশাপাশি যদি তাতে নতুন ডেটা ঢোকানো হয়, তবে কার্সর কি কখনো শেষ প্রান্তে পৌঁছাতে পারবে?'
        },
        explanation: {
          en: 'By inserting exclusively into ht1 during migration, ht0 only loses elements as rehashidx advances. This ensures monotonic forward progress toward emptying ht0 completely.',
          bn: 'রিহ্যাশ চলাকালীন কেবল ht1 এ ডেটা ঢোকালে পুরানো ht0 তে উপাদান কেবল কমতেই থাকে। এটি নিশ্চিত করে যে rehashidx কার্সরটি ধারাবাহিকভাবে এগিয়ে একসময় ht0 কে পুরোপুরি খালি করতে পারবে।'
        }
      },
      {
        id: 'lr-q4',
        kind: 'mcq',
        topic: 'memory',
        question: {
          en: 'What is the temporary peak memory footprint of a hash table undergoing dynamic resizing?',
          bn: 'ডায়নামিক রিসাইজিং চলাকালীন একটি হ্যাশ টেবিলের সাময়িক সর্বোচ্চ মেমরি ব্যবহার কত হয়?'
        },
        options: [
          {
            en: 'Approximately 3 * M (the original table of size M plus the new table of size 2 * M coexist in memory)',
            bn: 'প্রায় ৩ * M (আসল M আকারের টেবিল এবং নতুন ২ * M আকারের টেবিল একই সাথে মেমরিতে থাকে)'
          },
          {
            en: 'Exactly 0 bytes extra due to hardware pointer virtualization',
            bn: 'হার্ডওয়্যার পয়েন্টার ভার্চুয়ালাইজেশনের কারণে অতিরিক্ত ঠিক ০ বাইট'
          },
          {
            en: '100 times M due to operating system page table multiplication',
            bn: 'অপারেটিং সিস্টেম পেজ টেবিলের কারণে M এর ১০০ গুণ'
          },
          {
            en: 'Memory consumption drops to half because tombstones compress in RAM',
            bn: 'টুম্বস্টোন মেমরিতে সংকুচিত হয়ে যাওয়ায় মোট মেমরি ব্যবহার অর্ধেকে নেমে আসে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Add the size of the old array (capacity M) to the newly allocated array (capacity 2 * M).',
          bn: 'পুরানো অ্যারের ধারণক্ষমতা M এবং নতুন অ্যারের ধারণক্ষমতা ২ * M যোগ করুন।'
        },
        explanation: {
          en: 'During the migration window, both the old table (size M) and the newly allocated table (size 2 * M) must exist simultaneously in memory until all elements are migrated. Systems must provision sufficient RAM to accommodate this 3 * M peak.',
          bn: 'স্থানান্তরের সময় পুরানো টেবিল (আকার M) এবং নতুন বরাদ্দকৃত টেবিল (আকার ২ * M) উভয়কেই মেমরিতে রাখতে হয় যতক্ষণ না সব ডেটা সরানো শেষ হয়। তাই সিস্টেম ডিজাইনারদের অবশ্যই ৩ * M মেমরির পর্যাপ্ত জায়গা রাখতে হয়।'
        }
      },
      {
        id: 'lr-q5',
        kind: 'mcq',
        topic: 'hysteresis',
        question: {
          en: 'Why must hash tables maintain a wide hysteresis gap between growth threshold (e.g. 0.75) and shrink threshold (e.g. 0.10)?',
          bn: 'হ্যাশ টেবিলে বৃদ্ধির সীমা (যেমন ০.৭৫) এবং সংকোচনের সীমার (যেমন ০.১০) মাঝে বড় হিস্টেরেসিস ব্যবধান রাখা কেন আবশ্যক?'
        },
        options: [
          {
            en: 'To prevent thrashing: if grow is 0.75 and shrink is 0.70, alternating inserts and deletes at the boundary will trigger endless expensive table resizes',
            bn: 'থ্র্যাশিং রোধ করতে: বৃদ্ধির সীমা ০.৭৫ এবং সংকোচনের সীমা ০.৭০ হলে সীমানায় সামান্য ওঠানামায় বারবার ব্যয়বহুল রিসাইজ হতে থাকবে'
          },
          {
            en: 'Because binary search trees crash if load factor drops below 0.50',
            bn: 'কারণ লোড ফ্যাক্টর ০.৫০ এর নিচে নামলে বাইনারি সার্চ ট্রি ক্র্যাশ করে'
          },
          {
            en: 'Memory allocations smaller than 100 bytes are rejected by Linux',
            bn: 'লিনাক্স ১০০ বাইটের চেয়ে ছোট মেমরি বরাদ্দ প্রত্যাখ্যান করে'
          },
          {
            en: 'It is a mathematical requirement of cryptographic hashing',
            bn: 'এটি ক্রিপ্টোগ্রাফিক হ্যাশিংয়ের একটি বাধ্যতামূলক গাণিতিক শর্ত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Imagine inserting one key to trigger doubling, deleting one key to trigger halving, and repeating in a loop.',
          bn: 'একটি চাবি ঢুকিয়ে টেবিল দ্বিগুণ করা এবং পরক্ষণেই একটি মুছে টেবিল অর্ধেক করার পুনরাবৃত্তির কথা ভাবুন।'
        },
        explanation: {
          en: 'Without a wide hysteresis gap, alternating insertions and deletions right at the threshold trigger rapid consecutive table expansions and contractions (thrashing), generating massive O(N) reallocation overhead on every single operation.',
          bn: 'পর্যাপ্ত হিস্টেরেসিস ব্যবধান না থাকলে সীমানার কাছে একটি চাবি ঢোকালে টেবিল দ্বিগুণ হবে এবং একটি মুছলেই অর্ধেক হবে। এই ধরনের দোদুল্যমান অবস্থা (থ্র্যাশিং) প্রতিটি অপারেশনে অযথা বিপুল মেমরি স্থানান্তরের অপচয় তৈরি করে।'
        }
      },
      {
        id: 'lr-q6',
        kind: 'mcq',
        topic: 'redis-dict',
        question: {
          en: 'During Redis incremental rehashing, how does a GET lookup query find its key?',
          bn: 'রেডিসের ইনক্রিমেন্টাল রিহ্যাশিং চলাকালীন একটি GET অনুসন্ধান কুয়েরি কীভাবে তার চাবি খুঁজে পায়?'
        },
        options: [
          {
            en: 'It inspects ht0 first; if not found, it inspects ht1, ensuring keys migrated or newly inserted are found seamlessly',
            bn: 'এটি প্রথমে ht0 পরীক্ষা করে; সেখানে না পেলে ht1 পরীক্ষা করে, যা স্থানান্তরিত বা নতুন সব চাবি খুঁজে পাওয়া নিশ্চিত করে'
          },
          {
            en: 'It only inspects ht0 and returns null if the key has already migrated to ht1',
            bn: 'এটি কেবল ht0 দেখে এবং চাবিটি ht1 এ চলে গেলে সরাসরি null প্রদান করে'
          },
          {
            en: 'It triggers a full stop-the-world table compaction before returning',
            bn: 'ফলাফল দেওয়ার আগে এটি পুরো টেবিলের স্টপ-দ্য-ওয়ার্ল্ড কম্প্যাকশন চালু করে দেয়'
          },
          {
            en: 'It issues an asynchronous DNS query to locate the bucket',
            bn: 'বাকেটের অবস্থান বের করতে এটি একটি অ্যাসিঙ্ক্রোনাস ডিএনএস কুয়েরি পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Remember that during migration, some keys are still in ht0 while others are already in ht1.',
          bn: 'মনে রাখবেন স্থানান্তরের সময় কিছু উপাদান পুরানো ht0 তে থাকে এবং কিছু ইতিমধ্যেই নতুন ht1 এ চলে যায়।'
        },
        explanation: {
          en: 'Because elements exist in both tables during migration, a lookup must check ht0 first. If the key was already migrated to ht1 or was inserted after migration started, it is found in ht1. This maintains 100 percent query correctness.',
          bn: 'যেহেতু স্থানান্তরের সময় ডেটা দুটি টেবিলেই ছড়ানো থাকে, তাই অনুসন্ধান প্রথমে ht0 তে এবং পরে ht1 এ খোঁজে। এর ফলে স্থানান্তরিত কিংবা নতুন সন্নিবেশিত সব উপাত্ত ১০০ শতাংশ নির্ভুলভাবে পাওয়া যায়।'
        }
      }
    ]
  },
  next: {
    slug: 'the-hash-panorama',
    title: {
      en: 'The Hash Panorama: Swiss Tables and Modern Cache Engineering',
      bn: 'হ্যাশ প্যানোরামা: সুইস টেবিল ও আধুনিক ক্যাশ প্রকৌশল'
    }
  }
};
