import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const chain = [
  {
    file: 'the-residence-vow.ts',
    next: {
      slug: 'the-invalidation-discipline',
      tech: 'caching',
      title: {
        en: 'Cache Invalidation, TTL Strategies & Jitter Mechanics',
        bn: 'ক্যাশ ইনভ্যালিডেশন, টিটিএল কৌশল ও জিটার মেকানিক্স'
      }
    }
  },
  {
    file: 'the-invalidation-discipline.ts',
    next: {
      slug: 'the-tower-of-layers',
      tech: 'caching',
      title: {
        en: 'Multi-Tier Caching Architecture, Key Normalization & The Vary Header',
        bn: 'মাল্টি-টিয়ার ক্যাশিং আর্কিটেকচার, কি নরমালাইজেশন ও ভ্যারি হেডার'
      }
    }
  },
  {
    file: 'the-tower-of-layers.ts',
    next: {
      slug: 'the-miss-clerks',
      tech: 'caching',
      title: {
        en: 'Cache Access Patterns, Write-Behind & Negative Caching',
        bn: 'ক্যাশ অ্যাক্সেস প্যাটার্ন, রাইট-বিহাইন্ড ও নেগেটিভ ক্যাশিং'
      }
    }
  },
  {
    file: 'the-miss-clerks.ts',
    next: {
      slug: 'the-eviction-court',
      tech: 'caching',
      title: {
        en: 'Cache Eviction Policies, O(1) LRU Data Structures & Belady Anomaly',
        bn: 'ক্যাশ ইভিকশন পলিসি, O(1) LRU ডেটা স্ট্রাকচার ও বেলাডি অ্যানোমালি'
      }
    }
  },
  {
    file: 'the-eviction-court.ts',
    next: {
      slug: 'the-stampede-wall',
      tech: 'caching',
      title: {
        en: 'Cache Stampede, Thundering Herd & Mutex Coalescing',
        bn: 'ক্যাশ স্ট্যাম্পিড, থান্ডারিং হার্ড ও মিউটেক্স কোয়ালেসিং'
      }
    }
  },
  {
    file: 'the-stampede-wall.ts',
    next: {
      slug: 'the-redis-district',
      tech: 'caching',
      title: {
        en: 'Redis In-Memory Architecture, Data Structures & Memory Overhead',
        bn: 'রেডিস ইন-মেমোরি আর্কিটেকচার, ডেটা স্ট্রাকচার ও মেমোরি ওভারহেড'
      }
    }
  },
  {
    file: 'the-redis-district.ts',
    next: {
      slug: 'the-replication-accords',
      tech: 'caching',
      title: {
        en: 'Redis High Availability, Sentinel Failover & Cluster Sharding',
        bn: 'রেডিস হাই অ্যাভেইল্যাবিলিটি, সেন্টিনেল ফেইলওভার ও ক্লাস্টার শার্ডিং'
      }
    }
  },
  {
    file: 'the-replication-accords.ts',
    next: {
      slug: 'the-capstone-tribunal',
      tech: 'caching',
      title: {
        en: 'Production Distributed Caching Architecture — Enterprise Capstone',
        bn: 'প্রোডাকশন ডিস্ট্রিবিউটেড ক্যাশিং আর্কিটেকচার — এন্টারপ্রাইজ ক্যাপস্টোন'
      }
    }
  }
];

for (const item of chain) {
  const p = resolve('src/content/caching/lessons', item.file);
  let s = readFileSync(p, 'utf8').trim();
  if (s.endsWith('};')) {
    s = s.slice(0, -2).trim();
    if (s.endsWith(',')) s = s.slice(0, -1).trim();
    const nextStr = `,\n  nextLesson: {\n    slug: '${item.next.slug}',\n    tech: '${item.next.tech}',\n    title: {\n      en: '${item.next.title.en}',\n      bn: '${item.next.title.bn}'\n    }\n  }\n};`;
    s = s + nextStr;
    writeFileSync(p, s, 'utf8');
    console.log('Appended nextLesson to', item.file);
  } else {
    console.error('File does not end with };', item.file);
  }
}
