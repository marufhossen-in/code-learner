import type { Lesson } from '../../../lib/types';

export const VerbsAndThePipeLesson: Lesson = {
  slug: 'verbs-and-the-pipe',
  tech: 'r',
  title: {
    en: 'Data Manipulation with dplyr: The Native Pipe & Core Verbs',
    bn: 'dplyr দিয়ে ডাটা ম্যানিপুলেশন: নেটিভ পাইপ ও কোর ভার্বস'
  },
  summary: {
    en: 'Master fluent data manipulation in R using dplyr and the native pipe (|>): filter rows, select columns, mutate new features, summarize metrics, and execute group_by workflows.',
    bn: 'dplyr এবং নেটিভ পাইপ (|>) ব্যবহার করে R এ ফ্লুয়েন্ট ডাটা ম্যানিপুলেশন: সারি ফিল্টার, কলাম সিলেক্ট, নতুন ফিচার মিউটেট, মেট্রিক সামারাইজ এবং group_by ওয়ার্কফ্লো সম্পাদন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'pipe-philosophy',
      text: {
        en: '1. The Pipe Revolution: Native |> vs magrittr %>%',
        bn: '১. পাইপ বিপ্লব: নেটিভ |> বনাম magrittr %>%'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional programming, nested function calls are evaluated from the inside out: round(mean(filter_sales(dataset)), 2). Reading this requires jumping back and forth across nested parentheses. In modern R, the native pipe operator (|>) introduced in R 4.1.0 restructures code into a clean, left-to-right linear data pipeline.',
        bn: 'প্রথাগত প্রোগ্রামিংয়ে নেস্টেড ফাংশন ভেতর থেকে বাইরে রান হয়: round(mean(filter_sales(dataset)), 2)। এটি পড়তে অনেক বন্ধনীর মাঝে বারবার চোখ ঘোরাতে হয়। আধুনিক R ৪.১.০ সংস্করণে যুক্ত হওয়া নেটিভ পাইপ অপারেটর (|>) কোডকে বাম থেকে ডানে সহজ ও পরিষ্কার লিনিয়ার পাইপলাইনে রূপান্তর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The pipe operator takes the expression on its left-hand side and forwards it as the first argument to the function call on its right-hand side. The syntax dataset |> filter(...) |> mutate(...) |> summarize(...) reads like plain English sentences.',
        bn: 'পাইপ অপারেটর তার বাম পাশের মান বা ফলাফলকে ডান পাশের ফাংশনের প্রথম আর্গুমেন্ট হিসেবে পাঠিয়ে দেয়। ফলে dataset |> filter(...) |> mutate(...) |> summarize(...) সিনট্যাক্সটি সাধারণ ইংরেজি বাক্যের মতো সহজবোধ্য হয়।'
      }
    },
    {
      type: 'heading',
      id: 'five-verbs',
      text: {
        en: '2. The 5 Core dplyr Verbs',
        bn: '২. dplyr এর ৫ টি প্রধান ভার্ব (Verbs)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The dplyr package, part of the Tidyverse ecosystem, organizes virtually all tabular transformations around 5 declarative verbs:',
        bn: 'Tidyverse ইকোসিস্টেমের অন্তর্ভুক্ত dplyr প্যাকেজটি টেবিলের সমস্ত রূপান্তরকে ৫ টি ঘোষণামূলক ভার্ব বা ক্রিয়ার মাধ্যমে সাজায়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. filter(): Subsets rows satisfying boolean conditions (e.g. filter(age >= 21 & city == "Dhaka")).',
          bn: '১. filter(): শর্ত পূরণকারী সারিগুলোকে নির্বাচন করে (যেমন filter(age >= 21 & city == "Dhaka"))।'
        },
        {
          en: '2. select(): Picks specific columns by name or patterns (e.g. select(id, name, starts_with("score"))).',
          bn: '২. select(): নাম বা নির্দিষ্ট প্যাটার্নের মাধ্যমে কলাম বাছাই করে (যেমন select(id, name, starts_with("score")))।'
        },
        {
          en: '3. mutate(): Calculates and appends new columns or transforms existing ones while preserving original row count.',
          bn: '৩. mutate(): মূল সারির সংখ্যা ঠিক রেখে নতুন কলাম তৈরি করে বা বিদ্যমান কলাম রূপান্তর করে।'
        },
        {
          en: '4. arrange(): Orders rows by specified column values in ascending or descending order via desc().',
          bn: '৪. arrange(): নির্দিষ্ট কলামের মানের ভিত্তিতে সারিগুলোকে ছোট থেকে বড় কিংবা desc() দিয়ে বড় থেকে ছোট ক্রমে সাজায়।'
        },
        {
          en: '5. summarize(): Collapses multiple values across rows into a single aggregate metric (e.g. mean, median, sd).',
          bn: '৫. summarize(): সারির একাধিক মানকে সংকুচিত করে একক গড়, মধ্যক বা সমষ্টির মতো এগ্রিগেট মান তৈরি করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'dplyr-pipeline-diagram',
      title: {
        en: 'The dplyr Transformation Pipeline Data Flow',
        bn: 'dplyr ট্রান্সফরমেশন পাইপলাইনের ডাটা ফ্লো'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">dplyr Pipeline: Raw Data to Aggregated Insights</text>' +
          '<!-- Stage 1: Raw Data Frame -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="130" height="330" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>' +
            '<text x="65" y="26" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">1. RAW DATA</text>' +
            '<rect x="10" y="45" width="110" height="260" rx="6" fill="#0f172a"/>' +
            '<text x="65" y="80" fill="#cbd5e1" font-size="10" text-anchor="middle">1000 Rows</text>' +
            '<text x="65" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">12 Columns</text>' +
            '<text x="65" y="150" fill="#facc15" font-size="9" text-anchor="middle">All categories</text>' +
            '<text x="65" y="170" fill="#facc15" font-size="9" text-anchor="middle">&amp; messy data</text>' +
          '</g>' +
          '<!-- Pipe 1 -->' +
          '<g transform="translate(165, 210)">' +
            '<text x="12" y="-10" fill="#38bdf8" font-size="14" font-weight="bold">|&gt;</text>' +
            '<path d="M 0 0 L 25 0" stroke="#38bdf8" stroke-width="2"/>' +
          '</g>' +
          '<!-- Stage 2: filter() -->' +
          '<g transform="translate(195, 60)">' +
            '<rect width="125" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="62" y="26" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">2. filter()</text>' +
            '<rect x="10" y="45" width="105" height="260" rx="6" fill="#0f172a"/>' +
            '<text x="52" y="80" fill="#38bdf8" font-size="9">status == "OK"</text>' +
            '<text x="52" y="105" fill="#38bdf8" font-size="9">sales &gt; 500</text>' +
            '<line x1="15" y1="125" x2="110" y2="125" stroke="#334155"/>' +
            '<text x="52" y="155" fill="#cbd5e1" font-size="10">Rows: 240</text>' +
            '<text x="52" y="180" fill="#94a3b8" font-size="9">Row subsetting</text>' +
          '</g>' +
          '<!-- Pipe 2 -->' +
          '<g transform="translate(325, 210)">' +
            '<text x="12" y="-10" fill="#38bdf8" font-size="14" font-weight="bold">|&gt;</text>' +
            '<path d="M 0 0 L 25 0" stroke="#38bdf8" stroke-width="2"/>' +
          '</g>' +
          '<!-- Stage 3: select & mutate -->' +
          '<g transform="translate(355, 60)">' +
            '<rect width="130" height="330" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="65" y="26" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">3. mutate()</text>' +
            '<rect x="10" y="45" width="110" height="260" rx="6" fill="#0f172a"/>' +
            '<text x="55" y="80" fill="#c084fc" font-size="9">profit =</text>' +
            '<text x="55" y="100" fill="#c084fc" font-size="9">sales - cost</text>' +
            '<line x1="15" y1="125" x2="115" y2="125" stroke="#334155"/>' +
            '<text x="55" y="155" fill="#cbd5e1" font-size="10">Cols: 4 picked</text>' +
            '<text x="55" y="180" fill="#94a3b8" font-size="9">New feature</text>' +
          '</g>' +
          '<!-- Pipe 3 -->' +
          '<g transform="translate(490, 210)">' +
            '<text x="12" y="-10" fill="#38bdf8" font-size="14" font-weight="bold">|&gt;</text>' +
            '<path d="M 0 0 L 25 0" stroke="#38bdf8" stroke-width="2"/>' +
          '</g>' +
          '<!-- Stage 4: group_by & summarize -->' +
          '<g transform="translate(520, 60)">' +
            '<rect width="250" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="125" y="26" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">4. group_by() |&gt; summarize()</text>' +
            '<rect x="12" y="45" width="226" height="260" rx="6" fill="#0f172a"/>' +
            '<text x="22" y="75" fill="#34d399" font-size="10" font-weight="bold">group_by(region)</text>' +
            '<text x="22" y="95" fill="#cbd5e1" font-size="9">summarize(avg_profit = mean(profit))</text>' +
            '<line x1="20" y1="115" x2="230" y2="115" stroke="#334155"/>' +
            '<text x="22" y="145" fill="#facc15" font-size="10" font-weight="bold">Result (Tibble):</text>' +
            '<text x="22" y="170" fill="#cbd5e1" font-size="9">region    | avg_profit | count</text>' +
            '<text x="22" y="190" fill="#cbd5e1" font-size="9">"Asia"    | 1240.5     | 140</text>' +
            '<text x="22" y="210" fill="#cbd5e1" font-size="9">"Europe"  | 980.2      | 100</text>' +
            '<rect x="20" y="240" width="206" height="45" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="123" y="268" fill="#34d399" font-size="9" text-anchor="middle">Compact 2-row Summary Table</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'grouped-aggregations',
      text: {
        en: '3. Grouped Operations: The Split-Apply-Combine Pattern',
        bn: '৩. গ্রুপভিত্তিক অপারেশন: স্প্লিট-অ্যাপ্লাই-কম্বাইন প্যাটার্ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The combination of group_by() and summarize() implements the classic Split-Apply-Combine paradigm. When a data frame is grouped, subsequent dplyr operations are evaluated independently within each group. For instance, calculating mean(sales) inside a group produces separate averages for each distinct region.',
        bn: 'group_by() এবং summarize() এর যৌথ ব্যবহার বিখ্যাত স্প্লিট-অ্যাপ্লাই-কম্বাইন নকশাকে বাস্তবায়ন করে। যখন কোনো ডাটা ফ্রেম গ্রুপ করা হয়, পরবর্তী অপারেশনগুলো প্রতিটি গ্রুপের মধ্যে আলাদা আলাদাভাবে সম্পন্ন হয়। যেমন গ্রুপের ভেতর mean(sales) হিসাব করলে প্রতি অঞ্চলের জন্য ভিন্ন ভিন্ন গড় বের হয়।'
      }
    },
    {
      type: 'heading',
      id: 'pipeline-simulator',
      text: {
        en: '4. Fluent dplyr Pipeline Engine in TypeScript',
        bn: '৪. TypeScript এ ফ্লুয়েন্ট dplyr পাইপলাইন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript implementation demonstrates the chained pipelined execution of filter, mutate, select, group_by, and summarize on tabular data:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে পাইপলাইনের মাধ্যমে filter, mutate, select, group_by এবং summarize টেবিলের ওপর ধারাবাহিকভাবে কাজ করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of dplyr pipe operator, filter, mutate, and group_by summarization.',
        bn: 'dplyr পাইপ অপারেটর, filter, mutate এবং group_by সামারাইজেশনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of dplyr Piping and Core Verbs in TypeScript

interface SalesRecord {
  id: number;
  region: string;
  units: number;
  price: number;
  revenue?: number;
}

interface RegionSummary {
  region: string;
  totalRevenue: number;
  avgUnits: number;
  count: number;
}

class DplyrPipeline {
  private data: SalesRecord[];

  constructor(records: SalesRecord[]) {
    this.data = records.map((r) => ({ ...r }));
  }

  // 1. filter() verb
  filter(predicate: (row: SalesRecord) => boolean): DplyrPipeline {
    return new DplyrPipeline(this.data.filter(predicate));
  }

  // 2. mutate() verb
  mutate(transformer: (row: SalesRecord) => Partial<SalesRecord>): DplyrPipeline {
    const mutated = this.data.map((row) => ({
      ...row,
      ...transformer(row)
    }));
    return new DplyrPipeline(mutated);
  }

  // 3. group_by() |> summarize()
  groupBySummarize(): RegionSummary[] {
    const groups = new Map<string, SalesRecord[]>();
    for (const row of this.data) {
      if (!groups.has(row.region)) {
        groups.set(row.region, []);
      }
      groups.get(row.region)!.push(row);
    }

    const summaries: RegionSummary[] = [];
    for (const [reg, rows] of groups.entries()) {
      const totalRev = rows.reduce((acc, r) => acc + (r.revenue || 0), 0);
      const totalUnits = rows.reduce((acc, r) => acc + r.units, 0);
      summaries.push({
        region: reg,
        totalRevenue: Math.round(totalRev),
        avgUnits: Math.round(totalUnits / rows.length),
        count: rows.length
      });
    }
    return summaries;
  }

  count(): number {
    return this.data.length;
  }
}

// Sample dataset: 4 transactions
const rawTransactions: SalesRecord[] = [
  { id: 1, region: 'Asia', units: 50, price: 20 },
  { id: 2, region: 'Europe', units: 30, price: 25 },
  { id: 3, region: 'Asia', units: 100, price: 18 },
  { id: 4, region: 'Europe', units: 10, price: 15 }
];

// Execute pipeline: rawTransactions |> filter(units >= 20) |> mutate(revenue = units * price)
const pipeline = new DplyrPipeline(rawTransactions)
  .filter((r) => r.units >= 20)
  .mutate((r) => ({ revenue: r.units * r.price }));

console.log('Filtered transaction count: ' + pipeline.count()); // -> 3

// Group by region and summarize
const report = pipeline.groupBySummarize();
console.log('Number of summarized groups: ' + report.length); // -> 2

for (const group of report) {
  console.log('Region ' + group.region + ' revenue: ' + group.totalRevenue + ' (orders: ' + group.count + ')');
  // Asia: units 50*20 (1000) + 100*18 (1800) = 2800 (orders: 2)
  // Europe: units 30*25 = 750 (orders: 1)
}`
    }
  ],
  exercises: [
    {
      id: 'pipe-ex-1',
      kind: 'mcq',
      question: {
        en: 'What does the native pipe operator (|>) do in modern R code?',
        bn: 'আধুনিক R কোডে নেটিভ পাইপ অপারেটর (|>) কী ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It forwards the expression on its left as the first argument to the function on its right',
          bn: 'এটি তার বাম পাশের এক্সপ্রেশনটিকে ডান পাশের ফাংশনের প্রথম আর্গুমেন্ট হিসেবে পাঠিয়ে দেয়'
        },
        {
          en: 'It creates a background network socket for multiprocessing',
          bn: 'এটি মাল্টিপ্রসেসিংয়ের জন্য ব্যাকগ্রাউন্ড নেটওয়ার্ক সকেট তৈরি করে'
        },
        {
          en: 'It performs bitwise OR logic on 2 integers',
          bn: 'এটি ২টি পূর্ণসংখ্যার ওপর বিটওয়াইজ OR লজিক চালায়'
        },
        {
          en: 'It terminates the R script immediately if values are negative',
          bn: 'মানগুলো নেগেটিভ হলে এটি তাৎক্ষণিকভাবে R স্ক্রিপ্ট বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think: x |> f(y) is evaluated as f(x, y).',
        bn: 'ভাবুন: x |> f(y) মূলত f(x, y) হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'The native pipe operator (|>) pipes the result of the left-hand expression into the first argument of the right-hand function call, enabling clean left-to-right pipelines.',
        bn: 'নেটিভ পাইপ (|>) বাম পাশের ফলাফলকে ডান পাশের ফাংশনের প্রথম আর্গুমেন্ট হিসেবে যুক্ত করে কোডকে সহজপাঠ্য করে তোলে।'
      }
    },
    {
      id: 'pipe-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which dplyr verb is used to compute and append new columns while retaining existing rows?',
        bn: 'বিদ্যমান সারিগুলো ঠিক রেখে নতুন কলাম হিসাব করে যোগ করতে কোন dplyr ভার্বটি ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'mutate()',
          bn: 'mutate()'
        },
        {
          en: 'filter()',
          bn: 'filter()'
        },
        {
          en: 'select()',
          bn: 'select()'
        },
        {
          en: 'arrange()',
          bn: 'arrange()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The verb shares the root meaning "to alter or create properties".',
        bn: 'ভার্বটির অর্থ কোনো কিছুকে নতুন রূপ দেওয়া।'
      },
      explanation: {
        en: 'mutate() creates new variables or modifies existing variables as a function of existing columns.',
        bn: 'mutate() বিদ্যমান কলামগুলোর ওপর ভিত্তি করে নতুন কলাম তৈরি বা বিদ্যমান কলাম পরিবর্তন করে।'
      }
    },
    {
      id: 'pipe-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the primary function of group_by() when paired with summarize()?',
        bn: 'summarize() এর সাথে যুক্ত হলে group_by() এর প্রধান কাজ কী?'
      },
      options: [
        {
          en: 'It divides rows into groups so that summarize calculates independent aggregates for each group',
          bn: 'এটি সারিগুলোকে গ্রুপে ভাগ করে যাতে summarize প্রতিটি গ্রুপের জন্য আলাদা সমষ্টি বা গড় হিসাব করে'
        },
        {
          en: 'It sorts the table alphabetically and removes duplicated names',
          bn: 'এটি টেবিলটিকে বর্ণানুক্রমিকভাবে সাজায় এবং ডুপ্লিকেট নামগুলো মুছে দেয়'
        },
        {
          en: 'It permanently saves the dataset to an external SQL server',
          bn: 'এটি ডাটাবেজটিকে চিরতরে কোনো বাহ্যিক SQL সার্ভারে সংরক্ষণ করে'
        },
        {
          en: 'It converts all numbers into character strings',
          bn: 'এটি تمام সংখ্যাকে ক্যারেক্টার স্ট্রিংয়ে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It enables the split-apply-combine workflow.',
        bn: 'এটি স্প্লিট-অ্যাপ্লাই-কম্বাইন ওয়ার্কফ্লো সচল করে।'
      },
      explanation: {
        en: 'group_by() splits the dataset by unique values in categorical columns; summarize() then calculates summary statistics separately for each resulting group.',
        bn: 'group_by() ক্যাটাগরির ওপর ভিত্তি করে টেবিলকে উপ-গ্রুপে ভাগ করে এবং summarize() প্রতি গ্রুপের গড় বা সমষ্টি বের করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-verbs-and-the-pipe',
    title: {
      en: 'dplyr Verbs and Pipe Quiz',
      bn: 'dplyr ভার্বস ও পাইপ কুইজ'
    },
    questions: [
      {
        id: 'pipe-q1',
        kind: 'mcq',
        question: {
          en: 'Which dplyr verb subsets rows based on conditions evaluating to TRUE?',
          bn: 'শর্ত সত্য (TRUE) হওয়ার ওপর ভিত্তি করে কোন dplyr ভার্বটি সারি নির্বাচন বা ফিল্টার করে?'
        },
        options: [
          {
            en: 'filter()',
            bn: 'filter()'
          },
          {
            en: 'select()',
            bn: 'select()'
          },
          {
            en: 'slice_sample()',
            bn: 'slice_sample()'
          },
          {
            en: 'distinct()',
            bn: 'distinct()'
          }
        ],
        answer: 0,
        hint: {
          en: 'The verb used to filter out unwanted rows.',
          bn: 'অনাকাঙ্ক্ষিত সারি বাদ দিতে ব্যবহৃত ভার্ব।'
        },
        explanation: {
          en: 'filter() evaluates logical expressions and keeps only rows where the expression resolves to TRUE.',
          bn: 'filter() লজিক্যাল শর্ত পরীক্ষা করে সত্য হওয়া সারিগুলোকে রেখে বাকিগুলোকে বাদ দেয়।'
        }
      },
      {
        id: 'pipe-q2',
        kind: 'mcq',
        question: {
          en: 'Which dplyr verb chooses or reorders columns by column names?',
          bn: 'কলামের নাম উল্লেখ করে কোন কলামগুলো রাখা হবে তা নির্ধারণ করতে কোন dplyr ভার্ব ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'select()',
            bn: 'select()'
          },
          {
            en: 'filter()',
            bn: 'filter()'
          },
          {
            en: 'pull()',
            bn: 'pull()'
          },
          {
            en: 'arrange()',
            bn: 'arrange()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think: selecting columns vs filtering rows.',
          bn: 'ভাবুন: সারি ফিল্টার করা বনাম কলাম নির্বাচন করা।'
        },
        explanation: {
          en: 'select() subsets columns (variables), while filter() subsets rows (observations).',
          bn: 'select() কলাম বাছাই করে এবং filter() সারি বাছাই করে।'
        }
      },
      {
        id: 'pipe-q3',
        kind: 'mcq',
        question: {
          en: 'How do you arrange rows in descending order with dplyr arrange()?',
          bn: 'dplyr এর arrange() ব্যবহার করে বড় থেকে ছোট বা অবরোহী ক্রমে সারি সাজাবেন কীভাবে?'
        },
        options: [
          {
            en: 'arrange(desc(column_name))',
            bn: 'arrange(desc(column_name))'
          },
          {
            en: 'arrange(-column_name, reverse = TRUE)',
            bn: 'arrange(-column_name, reverse = TRUE)'
          },
          {
            en: 'arrange(column_name, order = "down")',
            bn: 'arrange(column_name, order = "down")'
          },
          {
            en: 'arrange(invert(column_name))',
            bn: 'arrange(invert(column_name))'
          }
        ],
        answer: 0,
        hint: {
          en: 'Wrap the column in desc().',
          bn: 'কলামের নামটিকে desc() এর ভেতর রাখুন।'
        },
        explanation: {
          en: 'Wrapping the column in desc() (descending) orders values from largest to smallest.',
          bn: 'desc() ফাংশনে কলামের নাম দিলে তা সর্বোচ্চ মান থেকে সর্বনিম্ন মান অনুসারে সারি সাজায়।'
        }
      },
      {
        id: 'pipe-q4',
        kind: 'mcq',
        question: {
          en: 'What is the return type of summarize() when executed on an ungrouped data frame?',
          bn: 'গ্রুপ ছাড়া সাধারণ ডাটা ফ্রেমে summarize() চালালে কী ধরনের ডাটা স্ট্রাকচার ফেরত আসে?'
        },
        options: [
          {
            en: 'A 1-row data frame / tibble containing the calculated summary columns',
            bn: 'হিসাবকৃত সামারি কলাম ধারণকারী ১-সারির একটি ডাটা ফ্রেম বা টিবল'
          },
          {
            en: 'A raw floating point scalar number',
            bn: 'একটি সাধারণ ফ্লোটিং পয়েন্ট স্কেলার সংখ্যা'
          },
          {
            en: 'An atomic character vector',
            bn: 'একটি সমজাতীয় ক্যারেক্টার ভেক্টর'
          },
          {
            en: 'A binary tree object',
            bn: 'একটি বাইনারি ট্রি অবজেক্ট'
          }
        ],
        answer: 0,
        hint: {
          en: 'dplyr verbs consistently return data frames / tibbles.',
          bn: 'dplyr এর সমস্ত ভার্ব সর্বদা ডাটা ফ্রেম বা টিবল ফেরত দেয়।'
        },
        explanation: {
          en: 'dplyr verbs maintain type stability: summarize() on an ungrouped frame returns a single-row tibble/data frame with the calculated summary metrics.',
          bn: 'dplyr এর নিয়ম অনুযায়ী summarize() সর্বদা ১ সারির একটি টিবল বা ডাটা ফ্রেম তৈরি করে।'
        }
      },
      {
        id: 'pipe-q5',
        kind: 'mcq',
        question: {
          en: 'Why is R 4.1.0\'s native pipe (|>) preferred over the external magrittr pipe (%>%) in modern high-performance R?',
          bn: 'আধুনিক দ্রুতগতির R কোডে কেন magrittr পাইপ (%>%) এর চেয়ে R ৪.১.০ এর নেটিভ পাইপ (|>) বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'It is built directly into the core R parser with zero external dependency overhead and faster execution',
            bn: 'এটি সরাসরি কোর R পার্সারে তৈরি হওয়ায় কোনো বাহ্যিক ডিপেন্ডেন্সি লাগে না এবং অনেক দ্রুত রান হয়'
          },
          {
            en: 'The magrittr pipe was completely removed from CRAN and banned',
            bn: 'magrittr পাইপ CRAN থেকে পুরোপুরি মুছে ফেলে নিষিদ্ধ করা হয়েছে'
          },
          {
            en: 'The native pipe only works with numbers whereas magrittr only works with text',
            bn: 'নেটিভ পাইপ কেবল সংখ্যায় কাজ করে এবং magrittr কেবল টেক্সটে কাজ করে'
          },
          {
            en: 'The native pipe encrypts all data in RAM using AES-256',
            bn: 'নেটিভ পাইপ মেমরির সমস্ত ডাটাকে AES-256 দিয়ে এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Native means built into the base language syntax without loading external packages.',
          bn: 'নেটিভ মানে মূল ভাষার ভেতরেই তৈরি, অতিরিক্ত প্যাকেজ লোড করতে হয় না।'
        },
        explanation: {
          en: 'The native pipe (|>) is part of base R from version 4.1.0 onward. It compiles into standard function calls at the syntax level without requiring the magrittr package.',
          bn: 'নেটিভ পাইপ (|>) বেস R এর অন্তর্ভুক্ত হওয়ায় কোনো অতিরিক্ত প্যাকেজ ছাড়াই দ্রুত ও দক্ষভাবে কাজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'plots-and-the-geom',
    title: {
      en: 'Grammar of Graphics with ggplot2: Geoms, Aesthetics & Facets',
      bn: 'ggplot2 এর সাথে গ্রামার অব গ্রাফিক্স: জিওম, অ্যাসথেটিক্স ও ফেসেটস'
    }
  }
};
