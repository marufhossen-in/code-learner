import fs from 'fs';

// 1. Update the-tombstone-avenue.ts
{
  const p = 'src/content/hashtables/lessons/the-tombstone-avenue.ts';
  let s = fs.readFileSync(p, 'utf8');

  // Add visual block
  if (!s.includes("type: 'visual'")) {
    s = s.replace(
      "id: 'tombstones',",
      "id: 'tombstones',\n    },\n    {\n      type: 'visual',\n      id: 'ht'\n    },\n    {\n      type: 'heading',\n      id: 'tombstones-guide',"
    );
  }

  // Fix table head
  s = s.replace(
    /headers:\s*\{\s*en:\s*\[([\s\S]*?)\],\s*bn:\s*\[([\s\S]*?)\]\s*\},/,
    `head: [
        { en: 'Architecture Metric', bn: 'আর্কিটেকচার মেট্রিক' },
        { en: 'Separate Chaining', bn: 'সেপারেট চেইনিং' },
        { en: 'Linear Probing', bn: 'লিনিয়ার প্রোবিং' },
        { en: 'Backward-Shift Probing', bn: 'ব্যাকওয়ার্ড-শিফট প্রোবিং' }
      ],`
  );

  // Fix nextLesson
  s = s.replace(
    /next:\s*\{[\s\S]*?\}\s*\},/,
    `nextLesson: {
    slug: 'the-collision-engineering',
    tech: 'hashtables',
    title: {
      en: 'Collision Engineering: Quadratic Probing and Double Hashing Mechanics',
      bn: 'সংঘর্ষ প্রকৌশল: কোয়াড্রেটিক প্রোবিং এবং ডাবল হ্যাশিং কৌশল'
    }
  },`
  );

  // Replace exercises
  const ex = `  exercises: [
    {
      id: 'ta-ex1',
      kind: 'mcq',
      topic: 'probe index calculation',
      question: {
        en: 'In a 16-slot table using linear probing with recurrence (hash + i) mod 16, what are the first 4 indices inspected if the initial hash value is 14?',
        bn: '১৬ স্লটের টেবিলে লিনিয়ার প্রোবিং (hash + i) mod ১৬ ব্যবহার করলে প্রারম্ভিক হ্যাশ মান ১৪ হলে প্রথম ৪ টি পরিদর্শিত ইনডেক্স কোনগুলো হবে?'
      },
      options: [
        {
          en: '[14, 15, 0, 1] due to circular wrap-around at the end of the array',
          bn: '[১৪, ১৫, ০, ১] কারণ অ্যারের শেষে বৃত্তাকার পুনরাবৃত্তি ঘটে'
        },
        {
          en: '[14, 15, 16, 17]',
          bn: '[১৪, ১৫, ১৬, ১৭]'
        },
        {
          en: '[0, 1, 2, 3]',
          bn: '[০, ১, ২, ৩]'
        },
        {
          en: '[14, 13, 12, 11]',
          bn: '[১৪, ১৩, ১২, ১১]'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember that modulo 16 arithmetic wraps indices back to 0 once reaching capacity.',
        bn: 'মনে রাখবেন মডিউলো ১৬ গাণিতিক নিয়মে ধারণক্ষমতা অতিক্রম করলে ইনডেক্স ০ তে ফিরে আসে।'
      },
      explanation: {
        en: 'Probing starts at i = 0 yielding (14 + 0) % 16 = 14, then i = 1 yielding 15, i = 2 yielding (16 % 16) = 0, and i = 3 yielding 1. The wrap-around creates the sequence 14, 15, 0, 1.',
        bn: 'প্রোবিং i = ০ থেকে শুরু হয়ে (১৪ + ০) % ১৬ = ১৪, এরপর i = ১ এ ১৫, i = ২ এ (১৬ % ১৬) = ০ এবং i = ৩ এ ১ দেয়। বৃত্তাকার পরিবর্তনের কারণে ১৪, ১৫, ০, ১ অনুক্রমটি তৈরি হয়।'
      }
    },
    {
      id: 'ta-ex2',
      kind: 'mcq',
      topic: 'effective load factor',
      question: {
        en: 'A hash table with capacity 16 contains 5 live keys and 3 tombstones. What is its effective load factor governing search probe distances?',
        bn: '১৬ ধারণক্ষমতার একটি হ্যাশ টেবিলে ৫ টি সক্রিয় চাবি এবং ৩ টি টুম্বস্টোন রয়েছে। অনুসন্ধানের দূরত্ব নিয়ন্ত্রণকারী কার্যকর লোড ফ্যাক্টর কত?'
      },
      options: [
        {
          en: '0.50 because effective load factor equals (5 live + 3 tombstones) / 16 = 8 / 16',
          bn: '০.৫০ কারণ কার্যকর লোড ফ্যাক্টর হলো (৫ সক্রিয় + ৩ টুম্বস্টোন) / ১৬ = ৮ / ১৬'
        },
        {
          en: '0.31 because only live keys count toward load factor',
          bn: '০.৩১ কারণ কেবল সক্রিয় চাবি লোড ফ্যাক্টরে ভূমিকা রাখে'
        },
        {
          en: '1.0 because tombstones double table density',
          bn: '১.০ কারণ টুম্বস্টোন টেবিলের ঘনত্ব দ্বিগুণ করে'
        },
        {
          en: '0.18 because tombstones subtract from capacity',
          bn: '০.১৮ কারণ টুম্বস্টোন ধারণক্ষমতা থেকে বাদ যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unsuccessful searches must traverse both live keys and tombstones before hitting empty space.',
        bn: 'ব্যর্থ অনুসন্ধানে ফাঁকা জায়গা পাওয়ার আগে সক্রিয় চাবি এবং টুম্বস্টোন উভয়ই পার হতে হয়।'
      },
      explanation: {
        en: 'Search probe lengths depend on all non-empty slots. The effective load factor is (5 + 3) / 16 = 8 / 16 = 0.50, meaning search performance degrades as if the table were half full.',
        bn: 'অনুসন্ধানের দৈর্ঘ্য সমস্ত অপূর্ণ স্লটের ওপর নির্ভর করে। কার্যকর লোড ফ্যাক্টর হলো (৫ + ৩) / ১৬ = ৮ / ১৬ = ০.৫০, অর্থাৎ অনুসন্ধানের গতি টেবিল অর্ধেক পূর্ণ থাকার মতো হ্রাস পায়।'
      }
    },
    {
      id: 'ta-ex3',
      kind: 'mcq',
      topic: 'tombstone search invariant',
      question: {
        en: 'During a linear probing lookup for a target key, what action must the search loop take when encountering a TOMBSTONE marker?',
        bn: 'লিনিয়ার প্রোবিংয়ে কাঙ্ক্ষিত চাবি অনুসন্ধানের সময় একটি TOMBSTONE মার্কারের মুখোমুখি হলে সার্চ লুপের কী করা উচিত?'
      },
      options: [
        {
          en: 'Continue probing downstream to the next slot without terminating the search',
          bn: 'অনুসন্ধান মাঝপথে না থামিয়ে সামনের পরবর্তী স্লটগুলোর দিকে অনুসন্ধান চালিয়ে যাওয়া'
        },
        {
          en: 'Terminate the search immediately and report that the key does not exist',
          bn: 'তাৎক্ষণিকভাবে অনুসন্ধান থামিয়ে দেওয়া এবং চাবিটি নেই বলে জানানো'
        },
        {
          en: 'Delete all remaining keys in the table',
          bn: 'টেবিলের বাকি সমস্ত চাবি মুছে ফেলা'
        },
        {
          en: 'Reset the table capacity to zero',
          bn: 'টেবিলের ধারণক্ষমতা শূন্যে নামিয়ে আনা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tombstones preserve search continuity for items that collided past this slot.',
        bn: 'টুম্বস্টোন এই স্লটের পরে সংঘর্ষিত উপাদানগুলোর অনুসন্ধানের ধারাবাহিকতা সচল রাখে।'
      },
      explanation: {
        en: 'If search aborted upon encountering a tombstone, any element inserted downstream after a collision at this slot would become unreachable. Probing must continue until matching key or EMPTY is found.',
        bn: 'টুম্বস্টোন দেখে অনুসন্ধান থেমে গেলে এই স্লটের পরে সংঘর্ষ হয়ে বসা উপাদানগুলো খুঁজে পাওয়া অসম্ভব হতো। তাই মিল পাওয়া বা EMPTY স্লট না পাওয়া পর্যন্ত প্রোবিং চালিয়ে যেতে হয়।'
      }
    },
    {
      id: 'ta-ex4',
      kind: 'mcq',
      topic: 'table compaction',
      question: {
        en: 'How does table compaction restore optimal O(1) search performance in a hash table burdened by tombstone pollution?',
        bn: 'টুম্বস্টোন দ্বারা দূষিত হ্যাশ টেবিলে টেবিল কম্প্যাকশন কীভাবে পুনরায় সর্বোত্তম O(1) অনুসন্ধানের গতি ফিরিয়ে আনে?'
      },
      options: [
        {
          en: 'It rehashes only surviving live keys into a clean array, purging all tombstones and restoring probe chains',
          bn: 'এটি কেবল বেঁচে থাকা সক্রিয় চাবিগুলোকে একটি নতুন অ্যারেতে স্থানান্তর করে, সমস্ত টুম্বস্টোন মুছে ফেলে এবং অনুসন্ধান পথ পুনর্গঠন করে'
        },
        {
          en: 'It converts tombstones into negative integers',
          bn: 'এটি টুম্বস্টোনগুলোকে ঋণাত্মক পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'It disables the hash function and switches to binary search',
          bn: 'এটি হ্যাশ ফাংশন বন্ধ করে বাইনারি সার্চ চালু করে'
        },
        {
          en: 'It replaces the array with an external disk file',
          bn: 'এটি অ্যারের বদলে একটি বাহ্যিক ডিস্ক ফাইল বসিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about allocating a fresh table of the same size and copying only active elements.',
        bn: 'একই আকারের একটি নতুন টেবিল বরাদ্দ করে কেবল সক্রিয় উপাদানগুলো কপি করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Compaction iterates through the table and re-inserts only the live keys into a fresh array, leaving behind all tombstones. This drops effective load factor back to live load factor, restoring single-probe lookups.',
        bn: 'কম্প্যাকশন পুরো টেবিল ঘুরে কেবল সক্রিয় চাবিগুলোকে নতুন অ্যারেতে পুনরায় সন্নিবেশ করে এবং সব টুম্বস্টোন ফেলে দেয়। এর ফলে কার্যকর লোড ফ্যাক্টর কমে গিয়ে পুনরায় দ্রুত অনুসন্ধান ফিরে আসে।'
      }
    }
  ],`;

  s = s.replace(/  exercises:\s*\[[\s\S]*?\],\n  quiz:/, ex + '\n  quiz:');
  fs.writeFileSync(p, s, 'utf8');
  console.log('Updated the-tombstone-avenue.ts');
}
