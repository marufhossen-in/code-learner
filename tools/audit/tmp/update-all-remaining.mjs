import fs from 'fs';

// --- Lesson 7: the-collision-engineering.ts ---
{
  const p = 'src/content/hashtables/lessons/the-collision-engineering.ts';
  let s = fs.readFileSync(p, 'utf8');

  // Add visual block
  if (!s.includes("type: 'visual'")) {
    s = s.replace(
      "id: 'table',",
      "id: 'table',\n    },\n    {\n      type: 'visual',\n      id: 'ht'\n    },\n    {\n      type: 'heading',\n      id: 'matrix',"
    );
  }

  // Fix table head
  s = s.replace(
    /headers:\s*\{\s*en:\s*\[([\s\S]*?)\],\s*bn:\s*\[([\s\S]*?)\]\s*\},/,
    `head: [
        { en: 'Probing Strategy', bn: 'প্রোবিং কৌশল' },
        { en: 'Formula (Step i)', bn: 'সূত্র (ধাপ i)' },
        { en: 'Cache Locality', bn: 'ক্যাশ লোকালিটি' },
        { en: 'Primary Clustering', bn: 'প্রাইমারি ক্লাস্টারিং' },
        { en: 'Secondary Clustering', bn: 'সেকেন্ডারি ক্লাস্টারিং' },
        { en: 'Cycle Guarantee Condition', bn: 'সাইকেল নিশ্চয়তার শর্ত' }
      ],`
  );

  // Fix nextLesson
  s = s.replace(
    /next:\s*\{[\s\S]*?\}\s*\},/,
    `nextLesson: {
    slug: 'the-lift-relay',
    tech: 'hashtables',
    title: {
      en: 'The Lift-Relay: Dynamic Resizing and Incremental Rehashing',
      bn: 'উত্তোলন-রিলে: ডায়নামিক আকার এবং ক্রমান্বয়ে স্থানান্তর'
    }
  },`
  );

  // Replace exercises
  const ex7 = `  exercises: [
    {
      id: 'ce-ex1',
      kind: 'mcq',
      topic: 'quadratic probe offsets',
      question: {
        en: 'In a 16-slot table using quadratic probing formula (start + i^2) mod 16 with start = 7, what are the first 4 visited slot indices?',
        bn: '১৬ স্লটের টেবিলে কোয়াড্রেটিক প্রোবিং সূত্র (start + i^২) mod ১৬ ব্যবহার করলে start = ৭ এর জন্য প্রথম ৪ টি পরিদর্শিত স্লট ইনডেক্স কোনগুলো হবে?'
      },
      options: [
        {
          en: '[7, 8, 11, 0] because offsets are 0, 1, 4, 9',
          bn: '[৭, ৮, ১১, ০] কারণ অফসেটগুলো হলো ০, ১, ৪, ৯'
        },
        {
          en: '[7, 8, 9, 10]',
          bn: '[৭, ৮, ৯, ১০]'
        },
        {
          en: '[7, 9, 11, 13]',
          bn: '[৭, ৯, ১১, ১৩]'
        },
        {
          en: '[7, 14, 5, 12]',
          bn: '[৭, ১৪, ৫, ১২]'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate (7 + 0) % 16, (7 + 1) % 16, (7 + 4) % 16, and (7 + 9) % 16.',
        bn: '(৭ + ০) % ১৬, (৭ + ১) % ১৬, (৭ + ৪) % ১৬ এবং (৭ + ৯) % ১৬ হিসাব করুন।'
      },
      explanation: {
        en: 'For step 0, (7 + 0) = 7. For step 1, (7 + 1) = 8. For step 2, (7 + 4) = 11. For step 3, (7 + 9) = 16 % 16 = 0. The trajectory is 7, 8, 11, 0.',
        bn: 'ধাপ ০ এ (৭ + ০) = ৭। ধাপ ১ এ (৭ + ১) = ৮। ধাপ ২ এ (৭ + ৪) = ১১। ধাপ ৩ এ (৭ + ৯) = ১৬ % ১৬ = ০। ফলে প্রোব পথ হয় ৭, ৮, ১১, ০।'
      }
    },
    {
      id: 'ce-ex2',
      kind: 'mcq',
      topic: 'coprimality in double hashing',
      question: {
        en: 'Why does a double hashing stride of 4 fail in a hash table of size 16?',
        bn: '১৬ আকারের হ্যাশ টেবিলে ডাবল হ্যাশিংয়ের পদক্ষেপ ৪ হলে তা কেন ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'gcd(4, 16) = 4 > 1, so the probe sequence can only visit 16 / 4 = 4 unique slots, ignoring 12 empty slots',
          bn: 'gcd(৪, ১৬) = ৪ > ১, ফলে অনুসন্ধানটি মাত্র ১৬ / ৪ = ৪ টি অনন্য স্লট পরিদর্শন করতে পারে এবং বাকি ১২ টি খালি স্লট দেখতেই পায় না'
        },
        {
          en: '4 is a prime number that causes floating-point overflow',
          bn: '৪ একটি মৌলিক সংখ্যা যা ফ্লোটিং-পয়েন্ট ওভারফ্লো তৈরি করে'
        },
        {
          en: 'Step sizes must always be powers of two',
          bn: 'পদক্ষেপের মান সর্বদা দুইয়ের ঘাত হতে হয়'
        },
        {
          en: 'Tables of size 16 only support linear probing',
          bn: '১৬ আকারের টেবিল কেবল লিনিয়ার প্রোবিং সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate greatest common divisor of stride 4 and capacity 16.',
        bn: 'পদক্ষেপ ৪ এবং ধারণক্ষমতা ১৬ এর গরিষ্ঠ সাধারণ গুণনীয়ক (গসাগু) হিসাব করুন।'
      },
      explanation: {
        en: 'When stride and capacity share a factor of 4, the sequence loops indefinitely through slots 0, 4, 8, 12 without ever reaching the remaining 12 slots, risking infinite loops.',
        bn: 'পদক্ষেপ ও ধারণক্ষমতার মাঝে ৪ সাধারণ গুণনীয়ক থাকায় ক্রমটি কেবল ০, ৪, ৮, ১২ স্লটের মধ্যে ঘুরপাক খায় এবং বাকি ১২টি স্লটে পৌঁছাতে পারে না, ফলে অসীম লুপের ঝুঁকি তৈরি হয়।'
      }
    },
    {
      id: 'ce-ex3',
      kind: 'mcq',
      topic: 'secondary clustering',
      question: {
        en: 'What is the defining symptom of secondary clustering in quadratic probing?',
        bn: 'কোয়াড্রেটিক প্রোবিংয়ে সেকেন্ডারি ক্লাস্টারিংয়ের প্রধান লক্ষণ কোনটি?'
      },
      options: [
        {
          en: 'All distinct keys that hash to the same initial index follow the exact same jump trajectory throughout the table',
          bn: 'একই প্রাথমিক ইনডেক্সে পড়া সব ভিন্ন ভিন্ন চাবি টেবিল জুড়ে হুবহু একই লাফানোর পথ অনুসরণ করে'
        },
        {
          en: 'Contiguous blocks of adjacent slots merge into single monolithic clusters',
          bn: 'পাশাপাশি থাকা স্লটগুলো মিলে একক বিশাল ক্লাস্টার তৈরি করে'
        },
        {
          en: 'The table memory is wiped whenever a collision occurs',
          bn: 'সংঘর্ষ ঘটলেই টেবিল মেমরি সম্পূর্ণ মুছে যায়'
        },
        {
          en: 'Lookup speed degrades to O(N^3)',
          bn: 'অনুসন্ধানের গতি O(N^৩) এ নেমে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Secondary clustering locks colliding keys into identical probe paths because stride does not depend on the key.',
        bn: 'সেকেন্ডারি ক্লাস্টারিং সংঘর্ষ হওয়া চাবিগুলোকে একই পথে আটকে রাখে কারণ পদক্ষেপ চাবির ওপর নির্ভর করে না।'
      },
      explanation: {
        en: 'Unlike primary clustering where neighboring clusters merge, secondary clustering means identical initial hashes trace identical jump sequences. Double hashing breaks this by using a key-specific second hash.',
        bn: 'প্রাইমারি ক্লাস্টারিংয়ের মতো আশেপাশের গুচ্ছ না মিললেও সেকেন্ডারি ক্লাস্টারিংয়ে একই প্রাথমিক হ্যাশের চাবিগুলো একই পথে চলে। ডাবল হ্যাশিং দ্বিতীয় হ্যাশ ফাংশন দিয়ে প্রতি চাবির জন্য আলাদা পদক্ষেপ তৈরি করে এটি ভেঙে দেয়।'
      }
    },
    {
      id: 'ce-ex4',
      kind: 'mcq',
      topic: 'triangular permutation cycles',
      question: {
        en: 'Why are triangular number offsets (i * (i + 1)) / 2 mod M favored for power-of-two table capacities?',
        bn: 'দুইয়ের ঘাত টেবিল ধারণক্ষমতার জন্য ট্রায়াঙ্গুলার অফসেট (i * (i + ১)) / ২ mod M কেন বেশি সুবিধাজনক?'
      },
      options: [
        {
          en: 'They mathematically guarantee a complete permutation cycle, visiting 100 percent of slots in power-of-two tables without premature loops',
          bn: 'এগুলো গাণিতিকভাবে সম্পূর্ণ পারমিউটেশন চক্র নিশ্চিত করে, ফলে দুইয়ের ঘাত টেবিলে অকালে না আটকে ১০০ শতাংশ স্লট পরিদর্শন করা যায়'
        },
        {
          en: 'They convert the hash table into a balanced binary search tree',
          bn: 'এগুলো হ্যাশ টেবিলটিকে একটি ভারসাম্যপূর্ণ বাইনারি সার্চ ট্রিতে রূপান্তর করে'
        },
        {
          en: 'They run on graphics GPUs without needing a CPU',
          bn: 'এগুলো সিপিইউ ছাড়াই জিপিইউতে চলতে পারে'
        },
        {
          en: 'They eliminate the need for key comparisons during lookups',
          bn: 'এগুলো অনুসন্ধানের সময় চাবি তুলনার প্রয়োজনীয়তা দূর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember our 100 percent coverage simulation across sizes 4, 8, 16, 32, and 64.',
        bn: '৪, ৮, ১৬, ৩২ এবং ৬৪ আকারের টেবিলে আমাদের ১০০ শতাংশ কাভারেজ সিমুলেশনের কথা মনে করুন।'
      },
      explanation: {
        en: 'Triangular numbers generate a complete permutation modulo any power of two. The sequence visits every index from 0 to M - 1 exactly once in its first M steps, providing 100 percent table coverage.',
        bn: 'ট্রায়াঙ্গুলার সংখ্যাগুলো যেকোনো দুইয়ের ঘাতের মডিউলোতে একটি সম্পূর্ণ পারমিউটেশন তৈরি করে। এই ধারা প্রথম M ধাপে ০ থেকে M - ১ পর্যন্ত প্রতিটি ইনডেক্স ঠিক একবার স্পর্শ করে ১০০ শতাংশ কাভারেজ দেয়।'
      }
    }
  ],`;

  s = s.replace(/  exercises:\s*\[[\s\S]*?\],\n  quiz:/, ex7 + '\n  quiz:');
  fs.writeFileSync(p, s, 'utf8');
  console.log('Updated the-collision-engineering.ts');
}

// --- Lesson 8: the-lift-relay.ts ---
{
  const p = 'src/content/hashtables/lessons/the-lift-relay.ts';
  let s = fs.readFileSync(p, 'utf8');

  // Add visual block
  if (!s.includes("type: 'visual'")) {
    s = s.replace(
      "id: 'table',",
      "id: 'table',\n    },\n    {\n      type: 'visual',\n      id: 'ht'\n    },\n    {\n      type: 'heading',\n      id: 'matrix',"
    );
  }

  // Fix table head
  s = s.replace(
    /headers:\s*\{\s*en:\s*\[([\s\S]*?)\],\s*bn:\s*\[([\s\S]*?)\]\s*\},/,
    `head: [
        { en: 'Resizing Metric', bn: 'রিসাইজিং মেট্রিক' },
        { en: 'Naive Synchronous Rehash', bn: 'সাধারণ সিনক্রোনাস রিহ্যাশ' },
        { en: 'Incremental Rehashing (Redis)', bn: 'ইনক্রিমেন্টাল রিহ্যাশিং (রেডিস)' },
        { en: 'Dynamic Chaining (No Resize)', bn: 'ডায়নামিক চেইনিং (রিসাইজহীন)' }
      ],`
  );

  // Fix nextLesson
  s = s.replace(
    /next:\s*\{[\s\S]*?\}\s*\},/,
    `nextLesson: {
    slug: 'the-hash-panorama',
    tech: 'hashtables',
    title: {
      en: 'The Hash Panorama: Swiss Tables and Modern Cache Engineering',
      bn: 'হ্যাশ প্যানোরামা: সুইস টেবিল ও আধুনিক ক্যাশ প্রকৌশল'
    }
  },`
  );

  // Replace exercises
  const ex8 = `  exercises: [
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
  ],`;

  s = s.replace(/  exercises:\s*\[[\s\S]*?\],\n  quiz:/, ex8 + '\n  quiz:');
  fs.writeFileSync(p, s, 'utf8');
  console.log('Updated the-lift-relay.ts');
}

// --- Lesson 9: the-hash-panorama.ts ---
{
  const p = 'src/content/hashtables/lessons/the-hash-panorama.ts';
  let s = fs.readFileSync(p, 'utf8');

  // Add visual block
  if (!s.includes("type: 'visual'")) {
    s = s.replace(
      "id: 'matrix',",
      "id: 'matrix',\n    },\n    {\n      type: 'visual',\n      id: 'ht'\n    },\n    {\n      type: 'heading',\n      id: 'matrix-table',"
    );
  }

  // Fix table head
  s = s.replace(
    /headers:\s*\{\s*en:\s*\[([\s\S]*?)\],\s*bn:\s*\[([\s\S]*?)\]\s*\},/,
    `head: [
        { en: 'Runtime Engine', bn: 'রানটাইম ইঞ্জিন' },
        { en: 'Primary Technique', bn: 'মূল প্রযুক্তি' },
        { en: 'Max Load Factor', bn: 'সর্বোচ্চ লোড ফ্যাক্টর' },
        { en: 'Cache Locality', bn: 'ক্যাশ লোকালিটি' },
        { en: 'Key Defense / Specialty', bn: 'প্রধান প্রতিরক্ষা / বৈশিষ্ট্য' }
      ],`
  );

  // Remove next / nextLesson if any
  s = s.replace(/  next:\s*\{[\s\S]*?\}\s*\},?/, '');
  s = s.replace(/  nextLesson:\s*\{[\s\S]*?\}\s*\},?/, '');

  // Replace exercises
  const ex9 = `  exercises: [
    {
      id: 'hp-ex1',
      kind: 'mcq',
      topic: 'extracting 7-bit H2 fingerprints',
      question: {
        en: 'In Google Swiss Tables, how is the 7-bit H2 fingerprint tag extracted from a 32-bit hash code?',
        bn: 'গুগল সুইস টেবিলে একটি ৩২-বিট হ্যাশ কোড থেকে কীভাবে ৭-বিট H2 ফিঙ্গারপ্রিন্ট ট্যাগ নিষ্কাশন করা হয়?'
      },
      options: [
        {
          en: 'By right-shifting the hash code by 25 bits and masking with 0x7F: (hash >>> 25) & 0x7F',
          bn: 'হ্যাশ কোডকে ২৫ বিট ডানে সরিয়ে 0x7F দিয়ে মাস্ক করে: (hash >>> ২৫) & 0x7F'
        },
        {
          en: 'By multiplying the hash code by 31 and taking modulo 128',
          bn: 'হ্যাশ কোডকে ৩১ দিয়ে গুণ করে ১২৮ দিয়ে মডিউলো করে'
        },
        {
          en: 'By converting the string to base64 and taking the first byte',
          bn: 'স্ট্রিংকে বেস৬৪ এ রূপান্তর করে প্রথম বাইট নিয়ে'
        },
        {
          en: 'By running AES-128 encryption on the key pointer',
          bn: 'কী পয়েন্টারের ওপর এইএস-১২৮ এনক্রিপশন চালিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A 32-bit integer shifted right by 25 leaves the top 7 bits in positions 0 through 6.',
        bn: 'একটি ৩২-বিট পূর্ণসংখ্যাকে ২৫ বিট ডানে সরালে ওপরের ৭টি বিট ০ থেকে ৬ অবস্থানে চলে আসে।'
      },
      explanation: {
        en: 'Right-shifting 32 bits by 25 isolates the 7 most significant bits. Masking with 0x7F (127 in decimal) ensures the result fits perfectly into a 7-bit fingerprint, stored in the 1-byte control tag.',
        bn: '৩২ বিটকে ২৫ বিট ডানে সরালে সবচেয়ে গুরুত্বপূর্ণ ৭টি বিট আলাদা হয়। 0x7F (দশমিকে ১২৭) দিয়ে মাস্ক করলে ফলাফলটি ৭-বিট ফিঙ্গারপ্রিন্টে পরিণত হয়, যা ১-বাইটের কন্ট্রোল ট্যাগে সংরক্ষিত থাকে।'
      }
    },
    {
      id: 'hp-ex2',
      kind: 'mcq',
      topic: 'SIMD 16-way vector comparison',
      question: {
        en: 'What is the false positive probability when testing a key against a single 7-bit H2 control tag in a Swiss Table?',
        bn: 'সুইস টেবিলে একটি একক ৭-বিট H2 কন্ট্রোল ট্যাগের বিরুদ্ধে চাবি পরীক্ষার সময় ফলস পজিটিভ কাকতালীয় মিলের সম্ভাবনা কত?'
      },
      options: [
        {
          en: '1 in 128 (less than 1 percent), ensuring over 99 percent of non-matching slots are discarded without dereferencing payload memory',
          bn: '১২৮ ভাগে ১ ভাগ (১ শতাংশেরও কম), যা নিশ্চিত করে ৯৯ শতাংশের বেশি অমিল স্লট পেলোড মেমরি স্পর্শ না করেই বাদ পড়ে যায়'
        },
        {
          en: '50 percent, requiring payload checks on half of all slots',
          bn: '৫০ শতাংশ, যার ফলে অর্ধেক স্লটেই মেমরি পরীক্ষা করতে হয়'
        },
        {
          en: 'Exactly 0 percent because hash collisions are mathematically impossible',
          bn: 'ঠিক ০ শতাংশ কারণ হ্যাশ সংঘর্ষ গাণিতিকভাবে অসম্ভব'
        },
        {
          en: '100 percent because control bytes do not store key characters',
          bn: '১০০ শতাংশ কারণ কন্ট্রোল বাইট কোনো অক্ষরের ডেটা রাখে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'A 7-bit integer can represent 2^7 = 128 distinct values.',
        bn: 'একটি ৭-বিট পূর্ণসংখ্যা ২^৭ = ১২৮ টি ভিন্ন মান প্রকাশ করতে পারে।'
      },
      explanation: {
        en: 'With 128 possible values (2^7), the probability of a random hash collision on the 7-bit tag is 1/128 (~0.78%). This allows SIMD vector filtering to eliminate 99.2% of candidate slots before touching main memory.',
        bn: '১২৮ টি সম্ভাব্য মানের (২^৭) কারণে ৭-বিট ট্যাগে কাকতালীয় সংঘর্ষের সম্ভাবনা মাত্র ১/১২৮ (~০.৭৮%)। এটি মূল মেমরি না ছুঁয়েই ৯৯.২% স্লটকে তাৎক্ষণিকভাবে বাদ দিতে সাহায্য করে।'
      }
    },
    {
      id: 'hp-ex3',
      kind: 'mcq',
      topic: 'Robin Hood early exit invariant',
      question: {
        en: 'In Robin Hood hashing, what invariant allows an unsuccessful search to terminate early without inspecting empty slots?',
        bn: 'রবিন হুড হ্যাশিংয়ে কোন নিয়মের কারণে ব্যর্থ অনুসন্ধান খালি স্লট না পেয়েও আগেই শেষ হতে পারে?'
      },
      options: [
        {
          en: 'When the current search probe distance strictly exceeds the DIB stored in the inspected slot (probe > slot.DIB), the key cannot exist further down the table',
          bn: 'বর্তমান অনুসন্ধানের দূরত্ব পরিদর্শিত স্লটের DIB এর চেয়ে বেশি হলে (probe > slot.DIB), চাবিটি টেবিলের আর সামনে থাকা অসম্ভব'
        },
        {
          en: 'When the hash function produces a negative value',
          bn: 'যখন হ্যাশ ফাংশন একটি ঋণাত্মক মান প্রদান করে'
        },
        {
          en: 'When the table load factor drops below 0.25',
          bn: 'যখন টেবিল লোড ফ্যাক্টর ০.২৫ এর নিচে নেমে যায়'
        },
        {
          en: 'When the operating system sends a SIGTERM interrupt',
          bn: 'যখন অপারেটিং সিস্টেম একটি সিগটার্ম ইন্টারাপ্ট পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Recall that Robin Hood sorts elements by non-decreasing DIB along collision probe sequences.',
        bn: 'মনে রাখবেন রবিন হুড সংঘর্ষের পথে উপাদানগুলোকে DIB এর ঊর্ধ্বক্রমে সাজিয়ে রাখে।'
      },
      explanation: {
        en: 'Because elements are ordered by probe distance along probe chains, if our search has traveled farther than the element currently sitting in the slot, our key would have stolen this slot upon insertion. Its absence here proves it is not in the table.',
        bn: 'যেহেতু উপাদানগুলো দূরত্বের ক্রমানুসারে সাজানো থাকে, তাই আমাদের অনুসন্ধান যদি স্লটের উপাদানের চেয়ে বেশি দূর হেঁটে এসে থাকে, তবে সন্নিবেশের সময় আমাদের চাবিটিই এই স্লট দখল করত। এখানে না পাওয়ার অর্থ এটি টেবিলে কখনোই ঢোকানো হয়নি।'
      }
    },
    {
      id: 'hp-ex4',
      kind: 'mcq',
      topic: 'Python compact dict memory layout',
      question: {
        en: 'How does Python 3.6+ compact dict architecture achieve a 30 percent memory reduction compared to legacy hash tables?',
        bn: 'পাইথন ৩.৬+ কমপ্যাক্ট ডিকশনারি আর্কিটেকচার আগের হ্যাশ টেবিলের তুলনায় কীভাবে ৩০ শতাংশ মেমরি সাশ্রয় করে?'
      },
      options: [
        {
          en: 'By using a sparse array of small 1-byte or 2-byte integer indices that point into a dense, sequentially packed array of (hash, key, value) entries',
          bn: 'ছোট ১ বা ২ বাইটের ইনডেক্স বিশিষ্ট একটি হালকা স্পার্স অ্যারে ব্যবহার করে যা ধারাবাহিকভাবে সাজানো ঘন (hash, key, value) পেলোড অ্যারের দিকে নির্দেশ করে'
        },
        {
          en: 'By discarding values and retaining only keys in memory',
          bn: 'মান সংরক্ষণ বাদ দিয়ে কেবল চাবিগুলো মেমরিতে রেখে'
        },
        {
          en: 'By compressing strings using zlib before every dictionary lookup',
          bn: 'প্রতিটি লুকআপের আগে জিলিব দিয়ে স্ট্রিং সংকুচিত করে'
        },
        {
          en: 'By limiting dictionary capacity to at most 64 keys',
          bn: 'ডিকশনারির সর্বোচ্চ ধারণক্ষমতা ৬৪ টি চাবিতে সীমাবদ্ধ রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sparse empty slots only hold 1-byte integers instead of 24-byte full entry structs.',
        bn: 'স্পার্স টেবিলের খালি স্লটগুলোতে ২৪-বাইটের বড় কাঠামোর বদলে মাত্র ১-বাইটের ছোট সংখ্যা থাকে।'
      },
      explanation: {
        en: 'Legacy tables stored 24-byte entry structs directly inside the sparse table, wasting 24 bytes per empty slot. The compact design keeps entries in a dense array (saving 30% RAM and preserving insertion order) while the sparse collision table uses tiny 1-byte or 2-byte indices.',
        bn: 'আগের টেবিলে সরাসরি স্পার্স অ্যারেতে ২৪-বাইটের এন্ট্রি রাখা হতো, ফলে প্রতি খালি স্লটে ২৪ বাইট নষ্ট হতো। কমপ্যাক্ট ডিজাইনে ঘন অ্যারেতে ডেটা রাখা হয় (৩০% মেমরি বাঁচে এবং ক্রম ঠিক থাকে) এবং স্পার্স টেবিলে কেবল ১ বা ২ বাইটের ছোট ইনডেক্স ব্যবহার করা হয়।'
      }
    }
  ],`;

  s = s.replace(/  exercises:\s*\[[\s\S]*?\],\n  quiz:/, ex9 + '\n  quiz:');
  fs.writeFileSync(p, s, 'utf8');
  console.log('Updated the-hash-panorama.ts');
}
