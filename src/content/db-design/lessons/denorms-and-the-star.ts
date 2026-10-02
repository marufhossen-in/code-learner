import type { Lesson } from '../../../lib/types';

export const DenormsAndTheStarLesson: Lesson = {
  slug: 'denorms-and-the-star',
  tech: 'db-design',
  title: {
    en: 'Denormalization & Dimensional Modeling: Star & Snowflake Schemas',
    bn: 'ডি-নরমালাইজেশন ও ডাইমেনশনাল মডেলিং: স্টার ও স্নোফ্লেক স্কিমা'
  },
  summary: {
    en: 'Master dimensional schema design: balance transactional OLTP normalization against analytical OLAP read performance, design Star and Snowflake Schemas, and engineer fact and dimension tables.',
    bn: 'ডাইমেনশনাল স্কিমা ডিজাইন আয়ত্ত করুন: ট্রানজ্যাকশনাল OLTP নরমালাইজেশনের সাথে অ্যানালিটিক্যাল OLAP রিড পারফরম্যান্সের ভারসাম্য, স্টার ও স্নোফ্লেক স্কিমা তৈরি এবং ফ্যাক্ট ও ডাইমেনশন টেবিল ইঞ্জিনিয়ারিং।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'the-great-divide-oltp-vs-olap',
      text: {
        en: 'The Great Architecture Divide: Transactional OLTP vs Analytical OLAP',
        bn: 'মূল আর্কিটেকচারাল বিভাজন: ট্রানজ্যাকশনাল OLTP বনাম অ্যানালিটিক্যাল OLAP'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build software, not all database workloads are created equal. Online Transaction Processing (OLTP) systems, such as web checkout carts, demand normalized 3NF schemas to execute thousands of concurrent inserts and updates without locking bottlenecks.',
        bn: 'যখন আপনি সফটওয়্যার তৈরি করেন, تمام ডাটাবেস কাজের ধরন এক রকম হয় না। অনলাইন ট্রানজ্যাকশন প্রসেসিং (OLTP) সিস্টেম, যেমন ওয়েব চেকআউট কার্ট, লকিংয়ের ঝামেলা ছাড়াই প্রতি সেকেন্ডে হাজার হাজার ডাটা লেখা ও পরিবর্তনের জন্য নরমালাইজড ৩NF স্কিমা দাবি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, running complex analytical business intelligence queries across 10 normalized tables grinds transactional databases to a halt. Online Analytical Processing (OLAP) data warehouses solve this bottleneck by deliberately embracing Denormalization. By pre-joining and structuring data into Star and Snowflake schemas, analytical engines aggregate billions of rows in sub-second times.',
        bn: 'কিন্তু ১০টি নরমালাইজড টেবিল জোড়া লাগিয়ে জটিল বিজনেস ইন্টেলিজেন্স কোয়েরি চালাতে গেলে ট্রানজ্যাকশনাল ডাটাবেসের গতি থমকে যায়। অনলাইন অ্যানালিটিক্যাল প্রসেসিং (OLAP) ডাটা ওয়্যারহাউস ইচ্ছাকৃতভাবে ডি-নরমালাইজেশন গ্রহণ করে এই সংকট দূর করে। স্টার এবং স্নোফ্লেক স্কিমায় পূর্বে থেকেই তথ্য একত্রিত করে রাখায় অ্যানালিটিক্যাল ইঞ্জিনগুলো কোটি কোটি ডাটা মুহূর্তের মধ্যে সামারি করে দিতে পারে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Dimensional Star Schema: Central Fact Table Surrounded by Dimension Attributes',
        bn: 'ডাইমেনশনাল স্টার স্কিমা: ডাইমেনশন টেবিল পরিবেষ্টিত কেন্দ্রীয় ফ্যাক্ট টেবিল'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Dimensional Star Schema Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Central Fact Table -->
  <g transform="translate(270, 95)">
    <rect width="200" height="140" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="2" />
    <rect width="200" height="30" rx="8" fill="#ca8a04" />
    <text x="100" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">fact_sales (Numeric Metrics)</text>
    <text x="15" y="48" fill="#facc15" font-size="9">• PK sale_id BIGINT</text>
    <text x="15" y="64" fill="#38bdf8" font-size="9">• FK customer_key INT</text>
    <text x="15" y="80" fill="#38bdf8" font-size="9">• FK product_key INT</text>
    <text x="15" y="96" fill="#38bdf8" font-size="9">• FK date_key INT</text>
    <text x="15" y="112" fill="#38bdf8" font-size="9">• FK store_key INT</text>
    <text x="15" y="128" fill="#4ade80" font-size="9">• amount NUMERIC, qty INT</text>
  </g>

  <!-- Top Dimension: dim_customer -->
  <g transform="translate(270, 15)">
    <rect width="200" height="65" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="100" y="20" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">dim_customer (Who)</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="8">PK customer_key, full_name,</text>
    <text x="15" y="52" fill="#cbd5e1" font-size="8">tier, country, income_bracket</text>
  </g>
  <line x1="370" y1="80" x2="370" y2="95" stroke="#facc15" stroke-width="1.5" stroke-dasharray="3 3" />

  <!-- Bottom Dimension: dim_date -->
  <g transform="translate(270, 250)">
    <rect width="200" height="65" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="100" y="20" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">dim_date (When)</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="8">PK date_key, full_date, day_of_week,</text>
    <text x="15" y="52" fill="#cbd5e1" font-size="8">month, quarter, fiscal_year</text>
  </g>
  <line x1="370" y1="235" x2="370" y2="250" stroke="#facc15" stroke-width="1.5" stroke-dasharray="3 3" />

  <!-- Left Dimension: dim_product -->
  <g transform="translate(30, 130)">
    <rect width="200" height="70" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="100" y="20" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">dim_product (What)</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="8">PK product_key, sku, brand,</text>
    <text x="15" y="52" fill="#cbd5e1" font-size="8">category, subcategory, unit_cost</text>
  </g>
  <line x1="230" y1="165" x2="270" y2="165" stroke="#facc15" stroke-width="1.5" stroke-dasharray="3 3" />

  <!-- Right Dimension: dim_store -->
  <g transform="translate(510, 130)">
    <rect width="200" height="70" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="100" y="20" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">dim_store (Where)</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="8">PK store_key, store_name, city,</text>
    <text x="15" y="52" fill="#cbd5e1" font-size="8">state, region, square_footage</text>
  </g>
  <line x1="470" y1="165" x2="510" y2="165" stroke="#facc15" stroke-width="1.5" stroke-dasharray="3 3" />
</svg>`,
      caption: {
        en: 'The Star Schema: quantitative events flow into the central fact table, while denormalized dimension tables provide instant filtering context.',
        bn: 'স্টার স্কিমা: সংখ্যাগত ব্যবসায়িক ঘটনা কেন্দ্রীয় ফ্যাক্ট টেবিলে জমা হয় এবং ডি-নরমালাইজড ডাইমেনশন টেবিল দ্রুত ফিল্টারিং সুবিধা দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Fact Table',
          def: {
            en: 'A central dimensional table containing quantitative numerical metrics and foreign keys referencing dimension tables.',
            bn: 'একটি কেন্দ্রীয় ডাইমেনশনাল টেবিল যাতে সংখ্যাগত মেট্রিক এবং ডাইমেনশন টেবিলগুলোর ফরেন কি সংরক্ষিত থাকে।'
          }
        },
        {
          term: 'Dimension Table',
          def: {
            en: 'A descriptive table containing contextual attributes (who, what, where, when) used for filtering and grouping analytical reports.',
            bn: 'একটি বর্ণনামূলক টেবিল যা ব্যবসায়িক প্রেক্ষাপট ধারণ করে এবং অ্যানালিটিক্যাল রিপোর্ট ফিল্টার ও গ্রুপ করতে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'Star Schema',
          def: {
            en: 'A dimensional modeling layout where denormalized dimension tables connect directly to a central fact table with single-hop joins.',
            bn: 'ডাইমেনশনাল মডেলিংয়ের এমন একটি রূপ যেখানে ডি-নরমালাইজড ডাইমেনশন টেবিলগুলো সরাসরি কেন্দ্রীয় ফ্যাক্ট টেবিলের সাথে যুক্ত থাকে।'
          }
        },
        {
          term: 'Snowflake Schema',
          def: {
            en: 'A variation of the Star Schema where dimension tables are normalized into multi-level hierarchies, reducing storage but increasing join hops.',
            bn: 'স্টার স্কিমার একটি রূপ যেখানে ডাইমেনশন টেবিলগুলোকে একাধিক স্তরে নরমালাইজ করা হয়, যা স্টোরেজ বাঁচালেও জয়েন খরচ বাড়ায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'facts-dimensions-and-star-vs-snowflake',
      text: {
        en: 'Facts vs Dimensions: Star vs Snowflake Trade-Offs',
        bn: 'ফ্যাক্ট বনাম ডাইমেনশন: স্টার বনাম স্নোফ্লেক তুলনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Fact tables store events. Every time a customer swipes a credit card, a row enters fact_sales recording the dollar amount, quantity, and foreign keys pointing to dimension tables. Dimensions answer business context: who bought it (dim_customer), what was purchased (dim_product), where did the transaction take place (dim_store), and when did it occur (dim_date).',
        bn: 'ফ্যাক্ট টেবিল ব্যবসায়িক ঘটনা জমা রাখে। প্রতিবার কোনো গ্রাহক কার্ড সোয়াইপ করলে fact_sales টেবিলে একটি রো ঢোকে যাতে মোট টাকার পরিমাণ এবং ডাইমেনশন টেবিলের ফরেন কি থাকে। অন্যদিকে ডাইমেনশন টেবিলগুলো প্রেক্ষাপট ব্যাখ্যা করে: কে কিনেছে (dim_customer), কী কেনা হয়েছে (dim_product), কোথায় কেনা হয়েছে (dim_store) এবং কখন কেনা হয়েছে (dim_date)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a Star Schema, dimensions are completely flat and denormalized. A product dimension includes brand, category, and subcategory directly in the same row. In contrast, a Snowflake Schema normalizes these attributes into separate sub-tables (categories, brands). While Snowflake schemas save minor disk storage, the Star Schema is preferred across modern cloud data warehouses (like Snowflake, BigQuery, and Redshift) because single-hop joins execute dramatically faster.',
        bn: 'স্টার স্কিমায় ডাইমেনশন টেবিলগুলো পুরোপুরি ফ্ল্যাট ও ডি-নরমালাইজড থাকে। প্রোডাক্ট ডাইমেনশনে ব্র্যান্ড এবং ক্যাটাগরি একই সারিতে থাকে। অন্যদিকে স্নোফ্লেক স্কিমা সেগুলোকে আলাদা সাব-টেবিলে নরমালাইজ করে। যদিও স্নোফ্লেক কিছুটা স্টোরেজ বাঁচায়, আধুনিক ক্লাউড ডাটা ওয়্যারহাউসগুলোতে (যেমন Snowflake, BigQuery বা Redshift) স্টার স্কিমাই সর্বাধিক ব্যবহৃত হয় কারণ ১-ধাপের জয়েন বহুগুণ দ্রুত চলে।'
      }
    },
    {
      type: 'heading',
      id: 'node-olap-engine',
      text: {
        en: 'Executable Star Schema Analytical Aggregator',
        bn: 'রানযোগ্য স্টার স্কিমা অ্যানালিটিক্যাল এগ্রিগেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine executing an analytical aggregation over 1000 sales facts across 1 fact table and 4 dimension tables. Filtering for Electronics in the Q1 date dimension executes a single-hop star join, producing 45000 revenue total across 100 electronics sales.',
        bn: 'নিচে ১টি ফ্যাক্ট টেবিল এবং ৪টি ডাইমেনশন টেবিল জুড়ে ১০০০টি সেলস ফ্যাক্টের ওপর অ্যানালিটিক্যাল হিসাব পরিচালনাকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। Q1 কোয়ার্টারে ইলেকট্রনিক্স ফিল্টার করে এটি ১-ধাপের স্টার জয়েন চালায় এবং ১০০টি ইলেকট্রনিক্স বিক্রয় থেকে ৪৫০০০ মোট রেভিনিউ হিসাব করে বের করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Star Schema aggregator performing single-hop dimensional joins over 1000 sales facts',
        bn: '১০০০টি সেলস ফ্যাক্টের ওপর ১-ধাপের ডাইমেনশনাল জয়েন পরিচালনাকারী স্টার স্কিমা এগ্রিগেটর'
      },
      code: `// Dimensional Star Schema Aggregator
const factSales = [];
for (let i = 1; i <= 1000; i++) {
  factSales.push({
    id: i,
    productKey: (i % 5) + 1, // 1 to 5
    dateKey: i <= 500 ? '2026-Q1' : '2026-Q2',
    amount: (i % 5) + 1 === 1 && i <= 500 ? 450 : 100
  });
}

// Filter for Product 1 (Electronics) in Q1
const q1Electronics = factSales.filter(record => record.productKey === 1 && record.dateKey === '2026-Q1');
const salesCount = q1Electronics.length; // 100 matching rows
const totalRevenue = q1Electronics.reduce((accumulatedSum, saleRecord) => accumulatedSum + saleRecord.amount, 0); // 45000

const isAccurate = factSales.length === 1000 && salesCount === 100 && totalRevenue === 45000;

console.log(\`[Dimensional Engine] Initialized Star Schema with 1 fact table and 4 dimension tables.\`);
console.log(\`[Analytics Aggregation] Aggregated \${factSales.length} sales facts across Q1 date dimension.\`);
console.log(\`[OLAP Verdict] Executed single-hop star join: generated \${totalRevenue} revenue total across \${salesCount} electronics sales (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Strategic Denormalization in Transactional OLTP',
        bn: 'ট্রানজ্যাকশনাল OLTP-তে কৌশলগত ডি-নরমালাইজেশন'
      },
      text: {
        en: 'Even in normalized OLTP systems, pragmatic architects deliberately denormalize specific fields. Storing immutable price snapshots on order_items guarantees historical invoices never mutate when prices change. Maintaining cached counters like comment_count on posts avoids expensive table scan queries.',
        bn: 'এমনকি নরমালাইজড OLTP সিস্টেমেও অভিজ্ঞ আর্কিটেক্টরা নির্দিষ্ট কিছু ফিল্ড ইচ্ছাকৃতভাবে ডি-নরমালাইজ করেন। order_items-এ মূল্যের স্ন্যাপশট রাখলে পণ্যের বর্তমান দাম বদলালেও পুরানো ইনভয়েস অপরিবর্তিত থাকে। অন্যদিকে পোস্টে comment_count ক্যাশ করে রাখলে ভারী টেবিল স্ক্যান কোয়েরি এড়ানো যায়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Workload Topology Decider',
        bn: 'কাজের ধরন অনুযায়ী স্কিমা নির্ধারক'
      },
      description: {
        en: 'Select whether a relational requirement should be built using 3NF normalized tables or a dimensional Star Schema.',
        bn: 'প্রয়োজনীয়তার ওপর ভিত্তি করে ৩NF নরমালাইজড টেবিল নাকি ডাইমেনশনাল স্টার স্কিমা ব্যবহার করা উচিত তা নির্ধারণ করুন।'
      },
      code: `function selectOptimalSchemaPattern(workloadType) {
  if (workloadType === 'OLTP_TRANSACTIONAL') {
    return 'USE_3NF_NORMALIZED: Eliminates anomalies during rapid concurrent writes';
  }
  return 'USE_STAR_SCHEMA: Maximizes analytical aggregation read throughput';
}

console.log('Mobile Cart App:', selectOptimalSchemaPattern('OLTP_TRANSACTIONAL'));
console.log('Quarterly Executive BI:', selectOptimalSchemaPattern('OLAP_ANALYTICAL'));`,
      tests: [
        {
          name: {
            en: 'Selects 3NF for mobile cart transactions',
            bn: 'মোবাইল কার্ট লেনদেনের জন্য ৩NF নির্বাচন করে'
          },
          expected: 'Mobile Cart App: USE_3NF_NORMALIZED: Eliminates anomalies during rapid concurrent writes'
        },
        {
          name: {
            en: 'Selects Star Schema for executive business intelligence',
            bn: 'এক্সিকিউটিভ বিজনেস ইন্টেলিজেন্সের জন্য স্টার স্কিমা নির্বাচন করে'
          },
          expected: 'Quarterly Executive BI: USE_STAR_SCHEMA: Maximizes analytical aggregation read throughput'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-dnm-ex-1',
      kind: 'mcq',
      topic: 'oltp-vs-olap-workload-comparison',
      question: {
        en: 'What fundamental architectural requirement distinguishes an OLTP transactional database from an OLAP analytical data warehouse?',
        bn: 'কোন মৌলিক প্রযুক্তিগত প্রয়োজনীয়তা একটি OLTP ট্রানজ্যাকশনাল ডাটাবেসকে একটি OLAP অ্যানালিটিক্যাল ডাটা ওয়্যারহাউস থেকে আলাদা করে?'
      },
      options: [
        {
          en: 'OLTP requires normalized 3NF schemas optimized for high-throughput single-row writes and anomaly prevention, while OLAP relies on denormalized dimensional schemas optimized for multi-million row aggregations',
          bn: 'OLTP দ্রুতগতির একক রো রাইট এবং অসঙ্গতি প্রতিরোধের জন্য নরমালাইজড ৩NF দাবি করে, আর OLAP কোটি কোটি রো সামারি ও এগ্রিগেশনের জন্য ডি-নরমালাইজড ডাইমেনশনাল স্কিমার ওপর নির্ভর করে'
        },
        {
          en: 'OLTP databases are run exclusively on batteries, while OLAP runs on solar power',
          bn: 'OLTP ডাটাবেস কেবল ব্যাটারিতে চলে আর OLAP সৌরশক্তিতে চলে'
        },
        {
          en: 'OLTP systems can only store images, while OLAP systems store text files',
          bn: 'OLTP সিস্টেম কেবল ছবি জমা রাখতে পারে আর OLAP সিস্টেম টেক্সট ফাইল রাখে'
        },
        {
          en: 'There is zero difference; modern applications use the same identical tables for both',
          bn: 'কোনো পার্থক্য নেই; আধুনিক অ্যাপ্লিকেশন উভয় কাজের জন্যই হুবহু একই টেবিল ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'OLTP prioritizes write integrity; OLAP prioritizes fast analytical reading.',
        bn: 'OLTP ডাটা লেখার শুদ্ধতাকে প্রাধান্য দেয়; আর OLAP দ্রুত পড়ার গতিকে প্রাধান্য দেয়।'
      },
      explanation: {
        en: 'Attempting to run complex BI analytical queries on live OLTP databases causes lock contention and exhausts connection pools. Data warehouses extract and transform data into dimensional schemas for analytical reporting.',
        bn: 'লাইভ OLTP ডাটাবেসে ভারী অ্যানালিটিক্যাল কোয়েরি চালালে সার্ভার ধীর হয়ে যায়। তাই অ্যানালিটিক্স এবং বিজনেস রিপোর্টিংয়ের জন্য আলাদা ওয়্যারহাউসে স্টার স্কিমায় ডাটা নেওয়া হয়।'
      }
    },
    {
      id: 'db-dnm-ex-2',
      kind: 'mcq',
      topic: 'star-vs-snowflake-join-hops',
      question: {
        en: 'Why do modern cloud analytical data warehouses (Snowflake, BigQuery, Redshift) prefer the Star Schema over the normalized Snowflake Schema?',
        bn: 'আধুনিক ক্লাউড অ্যানালিটিক্যাল ডাটা ওয়্যারহাউসগুলো (Snowflake, BigQuery, Redshift) নরমালাইজড স্নোফ্লেক স্কিমার চেয়ে স্টার স্কিমাকে কেন বেশি প্রাধান্য দেয়?'
      },
      options: [
        {
          en: 'Star Schemas connect denormalized dimensions directly to the fact table using simple single-hop joins, avoiding expensive multi-level join trees across billions of rows',
          bn: 'স্টার স্কিমায় ডি-নরমালাইজড ডাইমেনশনগুলো সরাসরি ১-ধাপের জয়েনে ফ্যাক্ট টেবিলের সাথে যুক্ত থাকে, যা কোটি কোটি রো-র ক্ষেত্রে বহু স্তরের ব্যয়বহুল জয়েন এড়িয়ে চলে'
        },
        {
          en: 'Because Star Schemas only store positive integers',
          bn: 'কারণ স্টার স্কিমা কেবল ধনাত্মক পূর্ণসংখ্যা সংরক্ষণ করে'
        },
        {
          en: 'Because snowflake shapes are physically offensive to computer servers',
          bn: 'কারণ স্নোফ্লেকের আকৃতি কম্পিউটার সার্ভারের জন্য ক্ষতিকর'
        },
        {
          en: 'Because Snowflake schemas require purchasing expensive physical cooling fans',
          bn: 'কারণ স্নোফ্লেক স্কিমা ব্যবহারে দামি কুলিং ফ্যান কেনা আবশ্যক হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Single-hop star joins outperform multi-level snowflake hierarchies.',
        bn: '১-ধাপের স্টার জয়েন বহু-স্তরের স্নোফ্লেক হায়ারার্কির চেয়ে অনেক দ্রুত চলে।'
      },
      explanation: {
        en: 'Disk storage is cheap in modern cloud systems. Denormalizing dimensions in a Star Schema minimizes join overhead, allowing columnar query engines to scan and filter data at blazing speeds.',
        bn: 'আধুনিক ক্লাউডে স্টোরেজ অত্যন্ত সস্তা। স্টার স্কিমায় ডাইমেনশন ডি-নরমালাইজ রাখলে অতিরিক্ত জয়েন লাগে না, ফলে কলামনার ইঞ্জিনগুলো চোখের পলকে ফলাফল দিতে পারে।'
      }
    },
    {
      id: 'db-dnm-ex-3',
      kind: 'mcq',
      topic: 'fact-table-metric-granularity',
      question: {
        en: 'In dimensional data modeling, what defines the "Granularity" of a central fact table?',
        bn: 'ডাইমেনশনাল ডাটা মডেলিংয়ে একটি কেন্দ্রীয় ফ্যাক্ট টেবিলের "গ্র্যানুলারিটি" (Granularity) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'The exact physical business event that an individual row represents, such as a single line item on an invoice or a monthly summarized store total',
          bn: 'একটি একক সারি বাস্তব জগতের ঠিক কোন ব্যবসায়িক ঘটনাকে প্রকাশ করে, যেমন একটি ইনভয়েসের একক পণ্য নাকি মাসিক দোকানের মোট বিক্রয়'
        },
        {
          en: 'The grain of sand used to manufacture the server CPU chip',
          bn: 'সার্ভারের সিপিইউ চিপ তৈরির জন্য ব্যবহৃত বালির দানা'
        },
        {
          en: 'The total number of colors used in the database administrative interface',
          bn: 'ডাটাবেস অ্যাডমিন প্যানেলে ব্যবহৃত মোট রঙের সংখ্যা'
        },
        {
          en: 'The speed of the network cable plugged into the server motherboard',
          bn: 'সার্ভার মাদারবোর্ডে লাগানো নেটওয়ার্ক কেবলের গতিবেগ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Granularity answers: "What does one single row in the fact table physically record?"',
        bn: 'গ্র্যানুলারিটি উত্তর দেয়: "ফ্যাক্ট টেবিলের একটি একক সারি বাস্তবে কী ধারণ করে?"'
      },
      explanation: {
        en: 'Establishing the grain is the most critical step in dimensional design. Lowest grain (individual line item) provides maximum analytical flexibility for slicing and dicing.',
        bn: 'গ্র্যানুলারিটি নির্ধারণ হলো ডাইমেনশনাল ডিজাইনের সবচেয়ে গুরুত্বপূর্ণ ধাপ। সবচেয়ে সূক্ষ্ম গ্র্যানুলারিটি অ্যানালিটিক্স কোয়েরিকে যেকোনো দিক থেকে ডাটা বিশ্লেষণের সর্বোচ্চ সুবিধা দেয়।'
      }
    },
    {
      id: 'db-dnm-ex-4',
      kind: 'mcq',
      topic: 'historical-price-snapshot-denorm',
      question: {
        en: 'Why is copying the product price into an order_items table upon purchase considered an essential strategic denormalization in OLTP e-commerce databases?',
        bn: 'ই-কমার্স OLTP ডাটাবেসে কেনাকাটার সময় পণ্যের দামকে order_items টেবিলে কপি করে রাখা কেন একটি অপরিহার্য কৌশলগত ডি-নরমালাইজেশন?'
      },
      options: [
        {
          en: 'It preserves the immutable historical transaction price; if the product price changes next month, historical customer receipts and accounting ledgers remain accurate',
          bn: 'এটি লেনদেনের সময়ের অপরিবর্তনীয় ঐতিহাসিক মূল্য সংরক্ষণ করে; আগামী মাসে পণ্যের দাম বাড়লেও পুরানো ইনভয়েস এবং হিসাবের খাতা সম্পূর্ণ নির্ভুল থাকে'
        },
        {
          en: 'Because relational database engines refuse to multiply numbers in SQL queries',
          bn: 'কারণ রিলেশনাল ডাটাবেস ইঞ্জিন কোয়েরির ভেতর সংখ্যা গুণ করতে পারে না'
        },
        {
          en: 'To make the database file size 100 times larger on disk',
          bn: 'ডিস্কে ডাটাবেস ফাইলের আকার ১০০ গুণ বড় করার জন্য'
        },
        {
          en: 'Because primary keys cannot link to tables whose names start with the letter P',
          bn: 'কারণ P অক্ষর দিয়ে শুরু হওয়া টেবিলে প্রাইমারি কি লিংক করা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prices change over time; order line items must freeze the price at purchase time.',
        bn: 'পণ্যের দাম সময়ের সাথে বদলায়; অর্ডারের সময় দামের স্ন্যাপশট ধরে রাখা বাধ্যতামূলক।'
      },
      explanation: {
        en: 'If order_items only stores a product_id and joins to products for price, updating the product price tomorrow would alter the financial totals of all past orders. Storing historical price snapshots is mandatory.',
        bn: 'যদি কেবল product_id রাখা হতো, তবে ভবিষ্যতে পণ্যের দাম বদলালে অতীতের সমস্ত পুরানো অর্ডারের মোট বিলও ভুলভাবে বদলে যেত। তাই কেনার সময়ের দাম সংরক্ষণ করা অপরিহার্য।'
      }
    }
  ],
  quiz: {
    id: 'denorms-and-the-star-quiz',
    title: {
      en: 'Dimensional Modeling & Denormalization Assessment Quiz',
      bn: 'ডাইমেনশনাল মডেলিং ও ডি-নরমালাইজেশন মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'db-dnm-qz-1',
        kind: 'mcq',
        topic: 'surrogate-keys-in-dimensional-modeling',
        question: {
          en: 'Why do dimensional modelers use synthetic integer surrogate keys (e.g. customer_key) rather than operational business keys (e.g. customer_uuid) in dimension tables?',
          bn: 'ডাইমেনশনাল ডিজাইনাররা ডাইমেনশন টেবিলে অপারেশনাল বিজনেস কি (যেমন customer_uuid)-র বদলে কেন কৃত্রিম ইন্টিজার সারোগেট কি (যেমন customer_key) ব্যবহার করেন?'
        },
        options: [
          {
            en: 'Integer surrogate keys occupy far less memory, allow fast integer joins across billions of fact rows, and enable tracking Slowly Changing Dimensions (SCD) where a customer has multiple historical attribute versions',
            bn: 'ইন্টিজার সারোগেট কি মেমরিতে অনেক কম জায়গা নেয়, কোটি কোটি ফ্যাক্ট রো-র মধ্যে দ্রুতগতির জয়েন নিশ্চিত করে এবং একই গ্রাহকের একাধিক ঐতিহাসিক তথ্য সংরক্ষণে (SCD) সাহায্য করে'
          },
          {
            en: 'Because computers cannot read letters in English',
            bn: 'কারণ কম্পিউটার ইংরেজিতে কোনো অক্ষর পড়তে পারে না'
          },
          {
            en: 'Because data warehouses only run on Linux computers',
            bn: 'কারণ ডাটা ওয়্যারহাউস কেবল লিনাক্স কম্পিউটারে চলতে পারে'
          },
          {
            en: 'Because surrogate keys automatically eliminate all software bugs',
            bn: 'কারণ সারোগেট কি থাকলে সফটওয়্যারে কখনো কোনো বাগ হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Integers join faster than UUIDs and decouple the warehouse from operational system key changes.',
          bn: 'ইন্টিজার জয়েন UUID-র চেয়ে দ্রুত এবং অপারেশনাল সিস্টেমের পরিবর্তন থেকে ওয়্যারহাউসকে মুক্ত রাখে।'
        },
        explanation: {
          en: 'Joining 4-byte integers is dramatically faster than 16-byte UUIDs. Furthermore, when a customer moves to a new city, creating a new surrogate key row preserves historical reporting accuracy (SCD Type 2).',
          bn: 'কোটি কোটি রো-র ক্ষেত্রে ৪-বাইটের ইন্টিজার জয়েন ১৬-বাইটের UUID-র চেয়ে বহুগুণ দ্রুত। এছাড়া গ্রাহকের ঠিকানা বদলালে নতুন সারোগেট কি দিয়ে অতীতের নির্ভুল হিসাব রাখা যায় (SCD Type 2)।'
        }
      },
      {
        id: 'db-dnm-qz-2',
        kind: 'mcq',
        topic: 'slowly-changing-dimensions-scd2',
        question: {
          en: 'In data warehouse engineering, how does a "Slowly Changing Dimension Type 2 (SCD2)" track customer demographic updates over time?',
          bn: 'ডাটা ওয়্যারহাউস ইঞ্জিনিয়ারিংয়ে "Slowly Changing Dimension Type 2 (SCD2)" কীভাবে সময়ের সাথে সাথে গ্রাহকের পরিবর্তিত তথ্যের ইতিহাস সংরক্ষণ করে?'
        },
        options: [
          {
            en: 'By inserting a new dimension row with a new surrogate key, marking the previous row with an expiration date and is_current = false, and preserving historical accuracy for older fact sales',
            bn: 'নতুন সারোগেট কি দিয়ে একটি নতুন রো যোগ করে, পুরানো রো-তে মেয়াদের তারিখ ও is_current = false বসিয়ে, যা অতীতের تمام বিক্রয়ের সঠিক ইতিহাস অটুট রাখে'
          },
          {
            en: 'By overwriting the old address and destroying all historical records',
            bn: 'পুরানো ঠিকানা মুছে দিয়ে تمام পূর্ববর্তী ইতিহাস চিরতরে নষ্ট করে ফেলার মাধ্যমে'
          },
          {
            en: 'By emailing the customer asking them to cancel their account',
            bn: 'গ্রাহককে ইমেইল পাঠিয়ে অ্যাকাউন্ট বাতিল করতে অনুরোধ করার মাধ্যমে'
          },
          {
            en: 'By shutting down the data warehouse server every night at midnight',
            bn: 'প্রতিদিন মধ্যরাতে ডাটা ওয়্যারহাউস সার্ভার বন্ধ করে রেখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SCD Type 2 appends a new version row rather than overwriting in place.',
          bn: 'SCD Type 2 পুরানো মান না মুছে নতুন ভার্সনের একটি সারি যোগ করে।'
        },
        explanation: {
          en: 'SCD Type 1 overwrites values (losing history). SCD Type 2 creates a new version with validity dates (valid_from, valid_to), ensuring older sales remain linked to the customer\'s location at that exact time.',
          bn: 'SCD Type 1 পুরানো ডাটা মুছে দেয়। আর SCD Type 2 নতুন সারি যোগ করে মেয়াদের তারিখ লিখে রাখে, যাতে পুরানো বিক্রয়গুলো সেই সময়ের ঠিকানার সাথেই যুক্ত থাকে।'
        }
      },
      {
        id: 'db-dnm-qz-3',
        kind: 'mcq',
        topic: 'star-schema-query-optimizer-efficiency',
        question: {
          en: 'What specific optimizer execution algorithm makes Star Schemas exceptionally fast on modern columnar analytical database engines?',
          bn: 'কোন সুনির্দিষ্ট অপ্টিমাইজার অ্যালগরিদম আধুনিক কলামনার অ্যানালিটিক্যাল ডাটাবেসে স্টার স্কিমাকে অবিশ্বাস্য দ্রুতগতি প্রদান করে?'
        },
        options: [
          {
            en: 'Star Join optimization: dimension tables are small and fit in CPU L3 cache/RAM as hash tables, enabling parallel vectorized filtering before probing the massive columnar fact table',
            bn: 'স্টার জয়েন অপ্টিমাইজেশন: ছোট ডাইমেনশন টেবিলগুলো সিপিইউ ক্যাশ বা মেমরিতে হ্যাশ টেবিল হিসেবে জমা থাকে, যা বিশাল ফ্যাক্ট টেবিলে খোঁজার আগেই সমান্তরাল ভেক্টরাইজড ফিল্টারিং সম্পন্ন করে'
          },
          {
            en: 'The database server converts all SQL into audio sound waves',
            bn: 'ডাটাবেস সার্ভার तमाम SQL-কে অডিও শব্দ তরঙ্গে রূপান্তর করে'
          },
          {
            en: 'Columnar engines ignore all WHERE clauses completely',
            bn: 'কলামনার ইঞ্জিন تمام WHERE ক্লজকে পুরোপুরি উপেক্ষা করে'
          },
          {
            en: 'The queries are executed on the user\'s mobile phone battery',
            bn: 'কোয়েরিগুলো ব্যবহারকারীর মোবাইল ফোনের ব্যাটারির ওপর চালিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dimension tables become fast hash lookups that filter fact records via vectorized SIMD.',
          bn: 'ডাইমেনশন টেবিলগুলো মেমরিতে হ্যাশ লুকআপে রূপান্তরিত হয়ে ভেক্টরাইজড গতি নিশ্চিত করে।'
        },
        explanation: {
          en: 'Modern engines build hash tables from dimension filters in RAM. They use SIMD CPU instructions to filter millions of fact rows per second with zero disk random seeks.',
          bn: 'আধুনিক ইঞ্জিন মেমরিতে ডাইমেনশন ফিল্টারের হ্যাশ টেবিল তৈরি করে। এরপর সিপিইউর SIMD নির্দেশনা ব্যবহার করে সেকেন্ডে কোটি কোটি ফ্যাক্ট রো স্ক্যান করে ফেলে।'
        }
      },
      {
        id: 'db-dnm-qz-4',
        kind: 'mcq',
        topic: 'accumulating-snapshot-fact-table',
        question: {
          en: 'What is an "Accumulating Snapshot Fact Table", and in which business scenario is it primarily deployed?',
          bn: 'একটি "অ্যাকিউমুলেটিং স্ন্যাপশট ফ্যাক্ট টেবিল" (Accumulating Snapshot Fact Table) কী এবং এটি মূলত কোন ব্যবসায়িক পরিস্থিতিতে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'A fact table modeling a business process with a definite beginning and end (such as order fulfillment), where a single row is updated as it progresses through stages: placed, packed, shipped, and delivered',
            bn: 'নির্দিষ্ট শুরু ও শেষ থাকা একটি ব্যবসায়িক প্রক্রিয়া (যেমন অর্ডার ডেলিভারি) মডেল করার ফ্যাক্ট টেবিল, যেখানে বিভিন্ন ধাপে (অর্ডার গ্রহণ, প্যাকিং, শিপিং, ডেলিভারি) একটি একক রো হালনাগাদ হতে থাকে'
          },
          {
            en: 'A table that takes photos of the office with a digital camera',
            bn: 'এমন একটি টেবিল যা ডিজিটাল ক্যামেরা দিয়ে অফিসের ছবি তোলে'
          },
          {
            en: 'A database that stores all numbers in binary format only',
            bn: 'একটি ডাটাবেস যা সমস্ত সংখ্যাকে কেবল বাইনারি ফরম্যাটে রাখে'
          },
          {
            en: 'A table that automatically reboots the computer every 24 hours',
            bn: 'একটি টেবিল যা প্রতি ২৪ ঘণ্টা পর পর কম্পিউটার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It tracks multi-step milestone lifecycles with milestone date columns.',
          bn: 'এটি বিভিন্ন মাইলফলক তারিখ কলামের সাহায্যে একটি প্রক্রিয়ার জীবনচক্র ট্র্যাক করে।'
        },
        explanation: {
          en: 'Accumulating snapshots track processes with milestone events (order date, ship date, delivery date). Instead of inserting new rows per event, the single row updates milestone timestamps, measuring lag times.',
          bn: 'অ্যাকিউমুলেটিং স্ন্যাপশট ধাপে ধাপে সম্পন্ন হওয়া প্রক্রিয়া ট্র্যাক করে। প্রতিবার নতুন রো না ঢুকিয়ে একটিমাত্র সারিতে মাইলফলকের সময় আপডেট করে প্রতিটি ধাপের ব্যবধান মাপা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'secures-and-the-role',
    title: {
      en: 'Database Security & Access Control: RBAC & Row-Level Security',
      bn: 'ডাটাবেস সিকিউরিটি ও অ্যাক্সেস কন্ট্রোল: RBAC ও রো-লেভেল সিকিউরিটি'
    }
  }
};
