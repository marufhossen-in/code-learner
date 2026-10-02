import type { Lesson } from '../../../lib/types';

export const ListsAndTheFactorLesson: Lesson = {
  slug: 'lists-and-the-factor',
  tech: 'r',
  title: {
    en: 'R Lists & Factors: Heterogeneous Trees, Levels & Contrasts',
    bn: 'R লিস্ট এবং ফ্যাক্টর: হেটেরোজিনিয়াস ট্রি, লেভেলস ও কনট্রাস্ট'
  },
  summary: {
    en: 'Master R recursive lists and categorical factors: single vs double bracket indexing, categorical encoding with factor levels, ordered factors, and dummy variable contrasts.',
    bn: 'R এর রিকার্সিভ লিস্ট ও ক্যাটাগরিক্যাল ফ্যাক্টরে দক্ষতা: একক বনাম ডাবল ব্র্যাকেট ইনডেক্সিং, ফ্যাক্টর লেভেল দিয়ে ক্যাটাগরি এনকোডিং, অর্ডারড ফ্যাক্টর এবং ডামি ভেরিয়েবল কনট্রাস্ট।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'lists-intro',
      text: {
        en: '1. Recursive Lists: Heterogeneous Trees in R',
        bn: '১. রিকার্সিভ লিস্ট: R এ হেটেরোজিনিয়াস ট্রি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you work with complex datasets in R, atomic vectors are often too rigid. An R list (`list()`) is a generic vector that can store heterogeneous data. Each element in a list can be of a different type, different length, or even another nested list or statistical model object.',
        bn: 'যখন আপনি R এ জটিল ডাটা সেট নিয়ে কাজ করেন, কেবল অ্যাটমিক ভেক্টর দিয়ে কাজ করা কঠিন হতে পারে। R এর লিস্ট (`list()`) হলো একটি জেনেরিক ভেক্টর যা বিভিন্ন টাইপের ডাটা ধারণ করতে পারে। লিস্টের প্রতিটি উপাদান ভিন্ন টাইপ, ভিন্ন দৈর্ঘ্য বা এমনকি আরেকটি নেস্টেড লিস্ট কিংবা স্ট্যাটিস্টিক্যাল মডেল অবজেক্টও হতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In R, a list is instantiated using the list() constructor. For example, a single list can contain a numeric vector of patient IDs, a character string patient name, a nested boolean status vector, and a 2D matrix of blood pressure readings.',
        bn: 'R এ list() কনস্ট্রাক্টর দিয়ে লিস্ট তৈরি করা হয়। উদাহরণস্বরূপ, একটি একক লিস্টের মধ্যে রোগীর আইডির সংখ্যাসূচক ভেক্টর, নামযুক্ত টেক্সট স্ট্রিং, নেস্টেড বুলিয়ান স্ট্যাটাস এবং রক্তচাপের দ্বি-মাত্রিক ম্যাট্রিক্স একসাথে রাখা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'indexing-bracket-difference',
      text: {
        en: '2. The Critical Indexing Distinction: [ vs [[ vs $',
        bn: '২. ইনডেক্সিংয়ের গুরুত্বপূর্ণ পার্থক্য: [ বনাম [[ বনাম $'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding list subsetting in R requires distinguishing between selecting a sub-list versus extracting the underlying contents:',
        bn: 'R এ লিস্ট সাবসেট বোঝার জন্য সাব-লিস্ট নির্বাচন করা এবং ভেতরের প্রকৃত উপাদান বের করার মধ্যে পার্থক্য বুঝতে হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Single Bracket [i]: Returns a new list containing the element at index i (a 1-element container). It preserves list structure.',
          bn: '১. একক ব্র্যাকেট [i]: i নম্বর ইনডেক্সের উপাদানটি নিয়ে একটি নতুন সাব-লিস্ট ফেরত দেয় (১ টি উপাদান বিশিষ্ট ধারক)। এটি লিস্টের কাঠামো বজায় রাখে।'
        },
        {
          en: '2. Double Bracket [[i]]: Unboxes the container and extracts the naked object stored inside index i.',
          bn: '২. ডাবল ব্র্যাকেট [[i]]: ধারক বা বক্স খুলে i নম্বর ইনডেক্সে রাখা আসল মান বা অবজেক্টটিকে সরাসরি বের করে আনে।'
        },
        {
          en: '3. Dollar Operator $name: Syntactic sugar for [[ "name" ]] to extract a named element directly.',
          bn: '৩. ডলার অপারেটর $name: নামযুক্ত কোনো উপাদানকে সরাসরি বের করার জন্য [[ "name" ]] এর সহজ রূপ।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'list-and-factor-diagram',
      title: {
        en: 'List Indexing Metaphor & Factor Level Storage',
        bn: 'লিস্ট ইনডেক্সিং রূপক এবং ফ্যাক্টর লেভেল স্টোরেজ'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">R Lists: Single vs Double Bracket &amp; Factor Storage</text>' +
          '<!-- Column 1: Single Bracket [1] -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="110" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. SINGLE BRACKET: x[1]</text>' +
            '<rect x="15" y="50" width="190" height="120" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-dasharray="4"/>' +
            '<text x="105" y="75" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Outer Container (List)</text>' +
            '<rect x="35" y="90" width="150" height="60" rx="4" fill="#1e293b" stroke="#38bdf8"/>' +
            '<text x="110" y="115" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">c(10, 20, 30)</text>' +
            '<text x="110" y="135" fill="#cbd5e1" font-size="9" text-anchor="middle">Type: list (Length 1)</text>' +
            '<rect x="15" y="190" width="190" height="110" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="215" fill="#cbd5e1" font-size="10">&#x2022; Preserves container</text>' +
            '<text x="25" y="235" fill="#cbd5e1" font-size="10">&#x2022; Returns a sub-list</text>' +
            '<text x="25" y="255" fill="#cbd5e1" font-size="10">&#x2022; Safe for slicing x[1:2]</text>' +
            '<text x="25" y="275" fill="#38bdf8" font-size="10">&#x2022; Cannot compute mean(x[1])</text>' +
          '</g>' +
          '<!-- Column 2: Double Bracket [[1]] -->' +
          '<g transform="translate(290, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="110" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. DOUBLE BRACKET: x[[1]]</text>' +
            '<rect x="25" y="50" width="170" height="120" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2"/>' +
            '<text x="110" y="80" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Direct Naked Payload</text>' +
            '<text x="110" y="110" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">c(10, 20, 30)</text>' +
            '<text x="110" y="135" fill="#cbd5e1" font-size="9" text-anchor="middle">Type: numeric vector</text>' +
            '<rect x="15" y="190" width="190" height="110" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="215" fill="#cbd5e1" font-size="10">&#x2022; Unboxes payload</text>' +
            '<text x="25" y="235" fill="#cbd5e1" font-size="10">&#x2022; Returns naked object</text>' +
            '<text x="25" y="255" fill="#cbd5e1" font-size="10">&#x2022; Identical to x$name</text>' +
            '<text x="25" y="275" fill="#34d399" font-size="10">&#x2022; mean(x[[1]]) &#x2192; 20 (Works!)</text>' +
          '</g>' +
          '<!-- Column 3: Factor Storage -->' +
          '<g transform="translate(550, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<text x="110" y="26" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">3. FACTOR DATA TYPE</text>' +
            '<rect x="15" y="50" width="190" height="120" rx="6" fill="#0f172a"/>' +
            '<text x="105" y="72" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Integer Array: c(1, 2, 1, 3)</text>' +
            '<line x1="25" y1="82" x2="185" y2="82" stroke="#64748b" stroke-width="1"/>' +
            '<text x="25" y="102" fill="#cbd5e1" font-size="9">Level 1 &#x2192; "Low"</text>' +
            '<text x="25" y="122" fill="#cbd5e1" font-size="9">Level 2 &#x2192; "Medium"</text>' +
            '<text x="25" y="142" fill="#cbd5e1" font-size="9">Level 3 &#x2192; "High"</text>' +
            '<rect x="15" y="190" width="190" height="110" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="215" fill="#cbd5e1" font-size="10">&#x2022; Memory: compact integers</text>' +
            '<text x="25" y="235" fill="#cbd5e1" font-size="10">&#x2022; Categorical fixed domain</text>' +
            '<text x="25" y="255" fill="#cbd5e1" font-size="10">&#x2022; Ordered: Low &lt; Med &lt; High</text>' +
            '<text x="25" y="275" fill="#fbbf24" font-size="10">&#x2022; lm() dummy coding ready</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'factors-intro',
      text: {
        en: '3. Factors: Categorical Encodings & Levels',
        bn: '৩. ফ্যাক্টর: ক্যাটাগরিক্যাল এনকোডিং ও লেভেলস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A factor in R represents categorical variables. Behind the scenes, R does not store repeated character strings. Instead, it stores a compact integer vector pointing to an attribute called levels (a character array of unique categories).',
        bn: 'R এ ক্যাটাগরিক্যাল ভেরিয়েবল বোঝাতে ফ্যাক্টর ব্যবহৃত হয়। নেপথ্যে R বারবার স্ট্রিং সংরক্ষণ করে না; বরং এটি একটি কম্প্যাক্ট ইন্টিজার ভেক্টর রাখে যা levels নামক অ্যাট্রিবিউটে থাকা ইউনিক ক্যাটাগরিগুলোকে নির্দেশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Factors provide 3 major advantages in data science:',
        bn: 'ডাটা সায়েন্সে ফ্যাক্টরের ৩ টি প্রধান সুবিধা রয়েছে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Memory Efficiency: Replacing 1,000,000 occurrences of "versicolor" with integer 2 saves substantial RAM.',
          bn: '১. মেমরি সাশ্রয়: ১,০০০,০০০ বার "versicolor" লেখার বদলে ইন্টিজার ২ সংরক্ষণ করায় বিপুল র‍্যাম সাশ্রয় হয়।'
        },
        {
          en: '2. Fixed Category Domain: table() counts all levels even if a category has 0 occurrences in a specific sample.',
          bn: '২. নির্দিষ্ট ক্যাটাগরি ডোমেন: কোনো নির্দিষ্ট নমুনায় কোনো ক্যাটাগরির মান ০ বার থাকলেও table() সব লেভেল দেখায়।'
        },
        {
          en: '3. Automatic Contrast Matrices: When passed to regression models (e.g. lm()), R automatically generates dummy indicator variables.',
          bn: '৩. স্বয়ংক্রিয় কনট্রাস্ট ম্যাট্রিক্স: রিগ্রেশন মডেলে দিলে R নিজে থেকেই ডামি ভেরিয়েবল তৈরি করে নেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Heterogeneous List & Factor Engine in TypeScript',
        bn: '৪. TypeScript এ হেটেরোজিনিয়াস লিস্ট ও ফ্যাক্টর ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models R recursive lists with single vs double bracket indexing, and implements categorical factors with integer indices and level mappings:',
        bn: 'নিচের TypeScript প্রোগ্রামটি একক বনাম ডাবল ব্র্যাকেট ইনডেক্সিং সহ R রিকার্সিভ লিস্ট মডেল করে এবং ইন্টিজার ইনডেক্স ও লেভেল ম্যাপিং সহ ফ্যাক্টর বাস্তবায়ন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of R recursive lists ([ vs [[) and categorical factors with level indexing.',
        bn: 'R রিকার্সিভ লিস্ট ([ বনাম [[) এবং লেভেল ইনডেক্সিং সহ ক্যাটাগরিক্যাল ফ্যাক্টরের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of R Recursive Lists and Categorical Factors

// 1. R Recursive List implementation
class RList {
  private items: Map<string | number, unknown> = new Map();

  constructor(elements: Record<string, unknown> | unknown[]) {
    if (Array.isArray(elements)) {
      elements.forEach((val, idx) => {
        // R uses 1-based indexing for numerical positions
        this.items.set(idx + 1, val);
      });
    } else {
      Object.entries(elements).forEach(([k, v], idx) => {
        this.items.set(k, v);
        this.items.set(idx + 1, v);
      });
    }
  }

  // Single bracket [i]: returns a sub-list (container preserved)
  sliceSingle(key: string | number): RList {
    const val = this.items.get(key);
    if (typeof key === 'string') {
      return new RList({ [key]: val });
    }
    return new RList([val]);
  }

  // Double bracket [[i]]: extracts naked content inside
  extractDouble<T>(key: string | number): T {
    return this.items.get(key) as T;
  }
}

// 2. R Categorical Factor implementation
class RFactor {
  public levels: string[];
  public integerCodes: number[]; // 1-based integer vector

  constructor(rawValues: string[], explicitLevels?: string[]) {
    // Unique levels preserving order or sorted
    if (explicitLevels) {
      this.levels = [...explicitLevels];
    } else {
      this.levels = Array.from(new Set(rawValues)).sort();
    }

    // Map each string to its 1-based level index
    this.integerCodes = rawValues.map((val) => {
      const idx = this.levels.indexOf(val);
      if (idx === -1) {
        throw new Error('Value ' + val + ' not found in defined factor levels');
      }
      return idx + 1; // 1-based
    });
  }

  // Frequency table equivalent to R table()
  table(): Record<string, number> {
    const freq: Record<string, number> = {};
    for (const lvl of this.levels) {
      freq[lvl] = 0;
    }
    for (const code of this.integerCodes) {
      const lvl = this.levels[code - 1];
      freq[lvl]++;
    }
    return freq;
  }
}

// Demonstration
// 1. Heterogeneous list demo
const myList = new RList({
  id: 101,
  scores: [85, 90, 92],
  status: 'passed'
});

// Single bracket returns a container (RList)
const sub = myList.sliceSingle('scores');
console.log('Single bracket returns RList instance: ' + (sub instanceof RList)); // -> true

// Double bracket extracts naked array
const rawScores = myList.extractDouble<number[]>('scores');
console.log('Double bracket extracted length: ' + rawScores.length); // -> 3
console.log('First score: ' + rawScores[0]); // -> 85

// 2. Factor demo
const categories = ['Low', 'High', 'Low', 'Medium', 'High'];
const factorObj = new RFactor(categories, ['Low', 'Medium', 'High']);

console.log('Factor levels count: ' + factorObj.levels.length); // -> 3
console.log('Underlying integer codes: ' + factorObj.integerCodes.join(', ')); // -> 1, 3, 1, 2, 3

const counts = factorObj.table();
console.log('Count for Low: ' + counts['Low']); // -> 2
console.log('Count for Medium: ' + counts['Medium']); // -> 1
console.log('Count for High: ' + counts['High']); // -> 2`
    }
  ],
  exercises: [
    {
      id: 'list-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the primary difference between single bracket x[1] and double bracket x[[1]] when indexing an R list?',
        bn: 'R এ লিস্ট ইনডেক্সিংয়ের সময় একক ব্র্যাকেট x[1] এবং ডাবল ব্র্যাকেট x[[1]] এর মধ্যে প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'x[1] returns a 1-element sub-list; x[[1]] extracts the actual naked object inside',
          bn: 'x[1] একটি ১-উপাদানের সাব-লিস্ট দেয়; x[[1]] ভেতরের আসল মানটিকে বের করে আনে'
        },
        {
          en: 'x[1] is 0-based indexing; x[[1]] is 1-based indexing',
          bn: 'x[1] হলো ০-ভিত্তিক ইনডেক্সিং; x[[1]] হলো ১-ভিত্তিক ইনডেক্সিং'
        },
        {
          en: 'x[1] deletes the element; x[[1]] copies the element',
          bn: 'x[1] উপাদানটিকে মুছে ফেলে; x[[1]] উপাদানটিকে কপি করে'
        },
        {
          en: 'x[1] only works on strings; x[[1]] only works on numbers',
          bn: 'x[1] কেবল স্ট্রিংয়ে কাজ করে; x[[1]] কেবল সংখ্যায় কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember the train metaphor: x[1] gives the train car; x[[1]] gives what is inside the car.',
        bn: 'ট্রেন বগির কথা ভাবুন: x[1] পুরো বগিটি দেয়; x[[1]] বগির ভেতরের মালপত্র বের করে দেয়।'
      },
      explanation: {
        en: 'Single bracket [ preserves the list container (returning a sub-list of length 1), while double bracket [[ extracts the naked content stored within that slot.',
        bn: 'একক ব্র্যাকেট [ লিস্টের কাঠামো অক্ষুণ্ণ রেখে সাব-লিস্ট প্রদান করে, আর ডাবল ব্র্যাকেট [[ সরাসরি ভেতরের মান বের করে আনে।'
      }
    },
    {
      id: 'list-ex-2',
      kind: 'mcq',
      question: {
        en: 'How does R internally store categorical data when represented as a factor?',
        bn: 'ফ্যাক্টর হিসেবে উপস্থাপনের সময় R অভ্যন্তরীণভাবে ক্যাটাগরিক্যাল ডাটা কীভাবে সংরক্ষণ করে?'
      },
      options: [
        {
          en: 'As an integer vector with an attached "levels" character vector attribute',
          bn: 'একটি ইন্টিজার ভেক্টর এবং তার সাথে যুক্ত "levels" ক্যারেক্টার ভেক্টর অ্যাট্রিবিউট হিসেবে'
        },
        {
          en: 'As raw ASCII text duplicated across every single row',
          bn: 'প্রতিটি সারিতে বারবার কপি করা কাঁচা ASCII টেক্সট হিসেবে'
        },
        {
          en: 'As a 64-bit floating point binary tree',
          bn: 'একটি ৬৪-বিট ফ্লোটিং পয়েন্ট বাইনারি ট্রি হিসেবে'
        },
        {
          en: 'As an encrypted JSON blob in heap memory',
          bn: 'হিপ মেমরিতে একটি এনক্রিপ্ট করা JSON ব্লক হিসেবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Factors optimize memory by replacing repeated text with compact numbers mapped to levels.',
        bn: 'ফ্যাক্টর টেক্সটের বদলে সংখ্যা ব্যবহার করে মেমরি সাশ্রয় করে।'
      },
      explanation: {
        en: 'R factors store integer codes (1, 2, 3...) that map into the levels character vector, optimizing RAM usage and categorical contrasts.',
        bn: 'R ফ্যাক্টর অভ্যন্তরীণভাবে ইন্টিজার কোড (১, ২, ৩...) রাখে যা লেভেল নামের ক্যারেক্টার ভেক্টরকে নির্দেশ করে।'
      }
    },
    {
      id: 'list-ex-3',
      kind: 'mcq',
      question: {
        en: 'What occurs if you attempt to assign a string to a factor element that is not listed in its predefined levels?',
        bn: 'কোনো ফ্যাক্টরের পূর্বনির্ধারিত লেভেলে নেই এমন একটি স্ট্রিং যদি তার উপাদানে অ্যাসাইন করার চেষ্টা করেন তবে কী ঘটবে?'
      },
      options: [
        {
          en: 'R converts the value to <NA> (missing) and issues a warning',
          bn: 'R মানটিকে <NA> (মিসিং) তে রূপান্তর করে এবং একটি ওয়ার্নিং প্রদর্শন করে'
        },
        {
          en: 'R automatically adds the new word to levels without warning',
          bn: 'R কোনো ওয়ার্নিং ছাড়াই স্বয়ংক্রিয়ভাবে নতুন শব্দটি লেভেলে যুক্ত করে'
        },
        {
          en: 'The entire computer system reboots immediately',
          bn: 'পুরো কম্পিউটার সিস্টেমটি সাথে সাথে রিবুট হয়'
        },
        {
          en: 'The factor is converted into a logical TRUE/FALSE vector',
          bn: 'ফ্যাক্টরটি একটি লজিক্যাল TRUE/FALSE ভেক্টরে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Factors protect category integrity: unlisted categories become NA.',
        bn: 'ফ্যাক্টর ডোমেন রক্ষা করে: অননুমোদিত ক্যাটাগরি NA হয়ে যায়।'
      },
      explanation: {
        en: 'If a value is not in the factor\'s defined levels, R assigns NA and warns "invalid factor level, NA generated".',
        bn: 'ফ্যাক্টরের লেভেলে অনুপস্থিত মান ঢোকালে R সেটিকে NA বানায় এবং সতর্কবার্তা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-lists-and-the-factor',
    title: {
      en: 'R Lists and Factors Quiz',
      bn: 'R লিস্ট এবং ফ্যাক্টর কুইজ'
    },
    questions: [
      {
        id: 'list-q1',
        kind: 'mcq',
        question: {
          en: 'What happens if you run mean(myList[1]) where myList[[1]] is a numeric vector c(10, 20)?',
          bn: 'myList[[1]] একটি সংখ্যাসূচক ভেক্টর c(10, 20) হলে mean(myList[1]) চালালে কী ঘটবে?'
        },
        options: [
          {
            en: 'It throws a warning or returns NA because myList[1] is a list, not a numeric vector',
            bn: 'এটি একটি ওয়ার্নিং দেবে বা NA ফেরত দেবে কারণ myList[1] একটি লিস্ট, সংখ্যাসূচক ভেক্টর নয়'
          },
          {
            en: 'It correctly returns the average 15 without issue',
            bn: 'এটি সঠিকভাবে কোনো সমস্যা ছাড়াই গড় ১৫ ফেরত দেবে'
          },
          {
            en: 'It converts the list to a string "15"',
            bn: 'এটি লিস্টটিকে স্ট্রিং "15" এ রূপান্তরিত করবে'
          },
          {
            en: 'It deletes the list from the global environment',
            bn: 'এটি গ্লোবাল এনভায়রনমেন্ট থেকে লিস্টটিকে মুছে ফেলবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mathematical functions require atomic numeric vectors, not list containers.',
          bn: 'গাণিতিক ফাংশনে লিস্ট কনটেইনার নয়, সরাসরি নিউমেরিক ভেক্টর দিতে হয়।'
        },
        explanation: {
          en: 'Single bracket myList[1] produces a list container of length 1. Mathematical functions like mean() require atomic numeric vectors, accessible via myList[[1]].',
          bn: 'একক ব্র্যাকেট myList[1] ১ দৈর্ঘ্যের একটি লিস্ট দেয়। গড় বের করতে ডাবল ব্র্যাকেট myList[[1]] দিয়ে ভেতরের ভেক্টর বের করতে হয়।'
        }
      },
      {
        id: 'list-q2',
        kind: 'mcq',
        question: {
          en: 'How can you inspect all unique valid categories configured on an R factor variable?',
          bn: 'একটি R ফ্যাক্টর ভেরিয়েবলে কনফিগার করা সমস্ত বৈধ ক্যাটাগরি কীভাবে দেখা যায়?'
        },
        options: [
          {
            en: 'levels(f)',
            bn: 'levels(f)'
          },
          {
            en: 'get_categories(f)',
            bn: 'get_categories(f)'
          },
          {
            en: 'f.keys()',
            bn: 'f.keys()'
          },
          {
            en: 'list_names(f)',
            bn: 'list_names(f)'
          }
        ],
        answer: 0,
        hint: {
          en: 'The built-in function shares the name of the attribute.',
          bn: 'বিল্ট-ইন ফাংশনটির নাম অ্যাট্রিবিউটের নামের সমান।'
        },
        explanation: {
          en: 'The levels() function returns or sets the character vector of valid categories for a factor.',
          bn: 'levels() ফাংশন দিয়ে ফ্যাক্টরের বৈধ ক্যাটাগরিগুলোর ক্যারেক্টার ভেক্টর পাওয়া যায়।'
        }
      },
      {
        id: 'list-q3',
        kind: 'mcq',
        question: {
          en: 'Which argument must be set to TRUE in factor() to designate an ordinal factor (e.g. Low < Medium < High)?',
          bn: 'অর্ডিনাল বা ক্রমবাচক ফ্যাক্টর তৈরি করতে factor() ফাংশনে কোন আর্গুমেন্টটি TRUE করতে হয়?'
        },
        options: [
          {
            en: 'ordered = TRUE',
            bn: 'ordered = TRUE'
          },
          {
            en: 'sort = TRUE',
            bn: 'sort = TRUE'
          },
          {
            en: 'ranked = TRUE',
            bn: 'ranked = TRUE'
          },
          {
            en: 'hierarchy = TRUE',
            bn: 'hierarchy = TRUE'
          }
        ],
        answer: 0,
        hint: {
          en: 'The argument name indicates the factor elements are ordered.',
          bn: 'আর্গুমেন্টের নাম নির্দেশ করে যে উপাদানগুলো ক্রমযুক্ত।'
        },
        explanation: {
          en: 'Passing ordered = TRUE creates an ordered factor (class c("ordered", "factor")), enabling inequality comparisons (< and >).',
          bn: 'ordered = TRUE পাস করলে একটি অর্ডারড ফ্যাক্টর তৈরি হয় যা তুলনা (< এবং >) সমর্থন করে।'
        }
      },
      {
        id: 'list-q4',
        kind: 'mcq',
        question: {
          en: 'Which function flattens an R list into a single atomic vector when all items can be coerced to a shared type?',
          bn: 'সমস্ত উপাদানকে একই টাইপে রূপান্তর করা সম্ভব হলে কোন ফাংশনটি একটি R লিস্টকে ভেঙে একটি সাধারণ অ্যাটমিক ভেক্টরে রূপান্তর করে?'
        },
        options: [
          {
            en: 'unlist()',
            bn: 'unlist()'
          },
          {
            en: 'flatten_tree()',
            bn: 'flatten_tree()'
          },
          {
            en: 'collapse()',
            bn: 'collapse()'
          },
          {
            en: 'to_vector()',
            bn: 'to_vector()'
          }
        ],
        answer: 0,
        hint: {
          en: 'The opposite of creating a list.',
          bn: 'লিস্ট তৈরির বিপরীত ক্রিয়া।'
        },
        explanation: {
          en: 'The unlist() function simplifies a list into an atomic vector by applying standard R coercion rules.',
          bn: 'unlist() ফাংশন একটি লিস্টের সমস্ত উপাদানকে একত্রিত করে একটি সমজাতীয় অ্যাটমিক ভেক্টরে রূপান্তর করে।'
        }
      },
      {
        id: 'list-q5',
        kind: 'mcq',
        question: {
          en: 'What does the dollar operator (e.g. my_list$patient_name) evaluate to in R?',
          bn: 'R এ ডলার অপারেটর (যেমন my_list$patient_name) কীসের সমতুল্য হিসেবে কাজ করে?'
        },
        options: [
          {
            en: 'my_list[["patient_name"]] (direct extraction of the named object)',
            bn: 'my_list[["patient_name"]] (নামযুক্ত অবজেক্টটির সরাসরি নিষ্কাশন)'
          },
          {
            en: 'my_list["patient_name"] (sub-list container)',
            bn: 'my_list["patient_name"] (সাব-লিস্ট ধারক)'
          },
          {
            en: 'A pointer memory address in C',
            bn: 'C এর একটি পয়েন্টার মেমরি অ্যাড্রেস'
          },
          {
            en: 'A boolean indicating if the field exists',
            bn: 'ফিল্ডটি উপস্থিত আছে কিনা তা নির্দেশকারী বুলিয়ান'
          }
        ],
        answer: 0,
        hint: {
          en: '$ extracts the raw payload directly, just like double brackets.',
          bn: '$ অপারেটর ডাবল ব্র্যাকেটের মতো সরাসরি উপাদান বের করে দেয়।'
        },
        explanation: {
          en: 'The $ operator extracts a named element directly from a list or data frame, equivalent to double bracket [[ "name" ]].',
          bn: '$ অপারেটর সরাসরি নামযুক্ত মান বের করে আনে, যা [[ "name" ]] এর হুবহু সমতুল্য।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'verbs-and-the-pipe',
    title: {
      en: 'Data Manipulation with dplyr: The Native Pipe & Core Verbs',
      bn: 'dplyr দিয়ে ডাটা ম্যানিপুলেশন: নেটিভ পাইপ ও কোর ভার্বস'
    }
  }
};
