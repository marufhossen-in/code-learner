import type { Lesson } from '../../../lib/types';

export const FuncsAndTheApplyLesson: Lesson = {
  slug: 'funcs-and-the-apply',
  tech: 'r',
  title: {
    en: 'Functional Programming in R: The apply Family, purrr & Closures',
    bn: 'R এ ফাংশনাল প্রোগ্রামিং: apply ফ্যামিলি, purrr ও ক্লোজার্স'
  },
  summary: {
    en: 'Master functional programming idioms in R: first-class functions, lexical scoping, closures, the apply family (apply, lapply, sapply, vapply), and type-stable mapping with purrr::map.',
    bn: 'R এ ফাংশনাল প্রোগ্রামিংয়ের কলাকৌশল: ফার্স্ট-ক্লাস ফাংশন, লেক্সিক্যাল স্কোপিং, ক্লোজার্স, apply পরিবার (apply, lapply, sapply, vapply) এবং purrr::map দিয়ে টাইপ-স্টেবল ম্যাপিং।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'functional-r',
      text: {
        en: '1. First-Class Functions, Closures & Lexical Scoping',
        bn: '১. ফার্স্ট-ক্লাস ফাংশন, ক্লোজার্স এবং লেক্সিক্যাল স্কোপিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you write idiomatic R code, you treat functions as first-class values (`function()`). In R, functions can be assigned to variables, passed as arguments to other routines, and returned dynamically from enclosing lexical environments.',
        bn: 'যখন আপনি মানসম্মত R কোড লেখেন, আপনি ফাংশনগুলোকে ফার্স্ট-ক্লাস মান (`function()`) হিসেবে বিবেচনা করেন। R এ ফাংশনগুলো ভেরিয়েবলে রাখা যায়, অন্য রুটিনে আর্গুমেন্ট হিসেবে পাঠানো যায় এবং কোনো এনভায়রনমেন্টের ভেতর থেকে রিটার্ন করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'R resolves free variables through lexical scoping: a routine looks up identifiers in the environment where it was originally defined, rather than where caller code invokes it. This mechanism powers higher-order closures and factories (for instance, `make_power <- function(p) function(x) x^p`).',
        bn: 'R লেক্সিক্যাল স্কোপিংয়ের মাধ্যমে মুক্ত চলক সমাধান করে: কোনো রুটিন যে পরিবেশে তৈরি হয়েছে সেখান থেকেই চলকের মান খোঁজে, কল করার স্থানের ওপর নয়। এর ফলে উচ্চতর ক্লোজার এবং ফ্যাক্টরি তৈরি সহজ হয় (যেমন `make_power <- function(p) function(x) x^p`)।'
      }
    },
    {
      type: 'visual',
      id: 'apply-family-diagram',
      title: {
        en: 'The R Functional Iteration Landscape: apply vs lapply vs vapply vs purrr',
        bn: 'R ফাংশনাল ইটারেশন ল্যান্ডস্কেপ: apply বনাম lapply বনাম vapply বনাম purrr'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">R Functional Programming: Iteration &amp; Type Stability</text>' +
          '<!-- Box 1: apply() -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="165" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="82" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. apply()</text>' +
            '<rect x="10" y="45" width="145" height="120" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="70" fill="#38bdf8" font-size="10" font-weight="bold">Input: 2D Matrix</text>' +
            '<text x="20" y="90" fill="#cbd5e1" font-size="9">MARGIN = 1: Rows</text>' +
            '<text x="20" y="110" fill="#cbd5e1" font-size="9">MARGIN = 2: Cols</text>' +
            '<text x="20" y="135" fill="#facc15" font-size="9">apply(m, 1, mean)</text>' +
            '<rect x="10" y="180" width="145" height="130" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="205" fill="#cbd5e1" font-size="10">&#x2022; Slice 2D arrays</text>' +
            '<text x="20" y="228" fill="#cbd5e1" font-size="10">&#x2022; Row-wise math</text>' +
            '<text x="20" y="251" fill="#cbd5e1" font-size="10">&#x2022; Col-wise math</text>' +
            '<text x="20" y="274" fill="#60a5fa" font-size="10">&#x2022; Fast C loop</text>' +
          '</g>' +
          '<!-- Box 2: lapply() -->' +
          '<g transform="translate(220, 60)">' +
            '<rect width="165" height="330" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="82" y="26" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">2. lapply()</text>' +
            '<rect x="10" y="45" width="145" height="120" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="70" fill="#c084fc" font-size="10" font-weight="bold">Input: List / Vec</text>' +
            '<text x="20" y="90" fill="#cbd5e1" font-size="9">Output: ALWAYS</text>' +
            '<text x="20" y="110" fill="#facc15" font-size="9">a generic list</text>' +
            '<text x="20" y="135" fill="#cbd5e1" font-size="9">lapply(urls, read)</text>' +
            '<rect x="10" y="180" width="145" height="130" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="205" fill="#cbd5e1" font-size="10">&#x2022; Guaranteed list</text>' +
            '<text x="20" y="228" fill="#cbd5e1" font-size="10">&#x2022; Predictable</text>' +
            '<text x="20" y="251" fill="#cbd5e1" font-size="10">&#x2022; Base primitive</text>' +
            '<text x="20" y="274" fill="#c084fc" font-size="10">&#x2022; Zero guessing</text>' +
          '</g>' +
          '<!-- Box 3: vapply() -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="175" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="87" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3. vapply()</text>' +
            '<rect x="10" y="45" width="155" height="120" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="70" fill="#34d399" font-size="10" font-weight="bold">Type-Safe Vector</text>' +
            '<text x="20" y="90" fill="#cbd5e1" font-size="9">Requires explicit</text>' +
            '<text x="20" y="110" fill="#facc15" font-size="9">FUN.VALUE template</text>' +
            '<text x="20" y="135" fill="#cbd5e1" font-size="9">vapply(x, f, 1.0)</text>' +
            '<rect x="10" y="180" width="155" height="130" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="205" fill="#cbd5e1" font-size="10">&#x2022; Production safe</text>' +
            '<text x="20" y="228" fill="#cbd5e1" font-size="10">&#x2022; Throws on wrong</text>' +
            '<text x="20" y="251" fill="#cbd5e1" font-size="10">&#x2022; return types</text>' +
            '<text x="20" y="274" fill="#34d399" font-size="10">&#x2022; Faster than sapply</text>' +
          '</g>' +
          '<!-- Box 4: purrr::map_* -->' +
          '<g transform="translate(610, 60)">' +
            '<rect width="160" height="330" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<text x="80" y="26" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">4. purrr::map_*</text>' +
            '<rect x="10" y="45" width="140" height="120" rx="6" fill="#0f172a"/>' +
            '<text x="18" y="70" fill="#fbbf24" font-size="10" font-weight="bold">Modern Tidy</text>' +
            '<text x="18" y="90" fill="#cbd5e1" font-size="9">map_dbl() &#x2192; num</text>' +
            '<text x="18" y="110" fill="#cbd5e1" font-size="9">map_chr() &#x2192; str</text>' +
            '<text x="18" y="135" fill="#facc15" font-size="9">x |&gt; map_dbl(\(n) n^2)</text>' +
            '<rect x="10" y="180" width="140" height="130" rx="6" fill="#0f172a"/>' +
            '<text x="18" y="205" fill="#cbd5e1" font-size="10">&#x2022; Typed suffix</text>' +
            '<text x="18" y="228" fill="#cbd5e1" font-size="10">&#x2022; Lambda syntax</text>' +
            '<text x="18" y="251" fill="#cbd5e1" font-size="10">&#x2022; Consistent errors</text>' +
            '<text x="18" y="274" fill="#fbbf24" font-size="10">&#x2022; Pipe-ready |&gt;</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'apply-family-details',
      text: {
        en: '2. The apply Family: Choosing the Right Iteration Tool',
        bn: '২. apply পরিবার: সঠিক ইটারেশন টুল নির্বাচন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Instead of slow, imperative for loops, R leverages functional loop primitives executed in compiled C:',
        bn: 'ধীরগতির ফর (for) লুপের বদলে R কম্পাইল্ড C কোডে চলা ফাংশনাল লুপ প্রিমিটিভ ব্যবহার করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. apply(m, MARGIN, FUN): Iterates over dimensions of a matrix or array. MARGIN = 1 applies the function across rows; MARGIN = 2 applies it across columns.',
          bn: '১. apply(m, MARGIN, FUN): ম্যাট্রিক্স বা অ্যারের মাত্রায় কাজ করে। MARGIN = 1 প্রতিটি সারিতে এবং MARGIN = 2 প্রতিটি কলামে ফাংশন চালায়।'
        },
        {
          en: '2. lapply(x, FUN): Iterates over a vector or list and always returns a list. It is completely type-predictable and deterministic.',
          bn: '২. lapply(x, FUN): ভেক্টর বা লিস্টের ওপর ঘুরে সর্বদা একটি নতুন লিস্ট ফেরত দেয়। এর ফলাফল পুরোপুরি অনুমানযোগ্য ও নির্ভরযোগ্য।'
        },
        {
          en: '3. sapply(x, FUN): Convenience wrapper around lapply that attempts to simplify the output into a vector or matrix. Because the return type can unexpectedly change based on data dimensions, it is discouraged in production packages.',
          bn: '৩. sapply(x, FUN): lapply এর সহজ সংস্করণ যা আউটপুটকে ভেক্টর বা ম্যাট্রিক্সে রূপান্তর করতে চায়। তবে ডাটার আকারের ওপর ভিত্তি করে আউটপুট টাইপ বদলে যাওয়ার ঝুঁকি থাকায় প্রোডাকশনে এটি পরিহার করা হয়।'
        },
        {
          en: '4. vapply(x, FUN, FUN.VALUE): Strict, type-safe alternative to sapply. You supply a template value (e.g. numeric(1)), and R guarantees the returned vector matches or immediately aborts with an informative error.',
          bn: '৪. vapply(x, FUN, FUN.VALUE): sapply এর কঠোর এবং টাইপ-নিরাপদ বিকল্প। এখানে একটি রিটার্ন টেমপ্লেট (যেমন numeric(1)) দিতে হয়, ফলে টাইপ অমিল হলে প্রোগ্রাম তাৎক্ষণিকভাবে স্পষ্ট এরর প্রদর্শন করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'purrr-ecosystem',
      text: {
        en: '3. Type Stability with the purrr Package',
        bn: '৩. purrr প্যাকেজ দিয়ে টাইপ স্ট্যাবিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The modern Tidyverse solution to iteration is the purrr package. Instead of guessing the return shape, purrr provides explicit typed functions: map() returns a list, map_dbl() returns a numeric double vector, map_chr() returns a character vector, and map_lgl() returns a logical vector. When combined with the native pipe (|>), data transformation flows naturally.',
        bn: 'ইটারেশনের জন্য আধুনিক Tidyverse সমাধান হলো purrr প্যাকেজ। ফলাফলের আকার অনুমান না করে purrr সুনির্দিষ্ট টাইপযুক্ত ফাংশন প্রদান করে: map() একটি লিস্ট দেয়, map_dbl() ডাবল নিউমেরিক ভেক্টর দেয়, map_chr() ক্যারেক্টার ভেক্টর দেয় এবং map_lgl() লজিক্যাল ভেক্টর দেয়। নেটিভ পাইপের সাথে যুক্ত হলে কোড সাবলীল ও নির্ভুল হয়।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Functional Closures & Iteration Engine in TypeScript',
        bn: '৪. TypeScript এ ফাংশনাল ক্লোজার্স ও ইটারেশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript implementation demonstrates R-style function closures, 2D matrix margin applications (apply), and type-stable typed mapping (vapply / map_dbl):',
        bn: 'নিচের TypeScript প্রোগ্রামটি R স্টাইলের ফাংশন ক্লোজার্স, ম্যাট্রিক্স মার্জিন অপারেশন (apply) এবং টাইপ-নিরাপদ ম্যাপিং (vapply / map_dbl) প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of R closures, 2D matrix apply by row/column, and type-safe vapply mapping.',
        bn: 'R ক্লোজার্স, সারি/কলাম ভিত্তিক ম্যাট্রিক্স apply এবং টাইপ-নিরাপদ vapply ম্যাপিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of R Functional Programming: Closures, apply, and vapply

// 1. Lexical Scoping and Closures (Function Factory)
function makePower(exponent: number): (x: number) => number {
  // Free variable exponent is captured lexically
  return function (x: number): number {
    return Math.pow(x, exponent);
  };
}

// 2. 2D Matrix apply(matrix, MARGIN, FUN)
class RMatrix {
  private grid: number[][]; // rows x cols

  constructor(rows: number[][]) {
    this.grid = rows;
  }

  // MARGIN 1 = row-wise, MARGIN 2 = col-wise
  apply(margin: 1 | 2, fun: (slice: number[]) => number): number[] {
    if (margin === 1) {
      // Row-wise
      return this.grid.map((row) => fun(row));
    } else {
      // Column-wise
      const colCount = this.grid[0].length;
      const result: number[] = [];
      for (let c = 0; c < colCount; c++) {
        const colSlice = this.grid.map((r) => r[c]);
        result.push(fun(colSlice));
      }
      return result;
    }
  }
}

// 3. Type-Safe vapply / purrr::map_dbl implementation
function vapplyDbl<T>(list: T[], fun: (item: T) => number): number[] {
  return list.map((item, idx) => {
    const val = fun(item);
    if (typeof val !== 'number' || isNaN(val)) {
      throw new TypeError('vapply error: return value at index ' + (idx + 1) + ' is not numeric');
    }
    return val;
  });
}

// Demonstration
// 1. Closures
const square = makePower(2);
const cube = makePower(3);

console.log('Closure square of 4: ' + square(4)); // -> 16
console.log('Closure cube of 3: ' + cube(3)); // -> 27

// 2. 2D Matrix apply
const matrix = new RMatrix([
  [1, 2, 3], // Row 1 mean = 2
  [4, 5, 6]  // Row 2 mean = 5
]);

const meanFun = (nums: number[]) => nums.reduce((a, b) => a + b, 0) / nums.length;

const rowMeans = matrix.apply(1, meanFun);
console.log('Row means (MARGIN=1): ' + rowMeans.join(', ')); // -> 2, 5

const colMeans = matrix.apply(2, meanFun);
console.log('Col means (MARGIN=2): ' + colMeans.join(', ')); // -> 2.5, 3.5, 4.5

// 3. Type-Safe vapply mapping
const inputNumbers = [10, 20, 30, 40];
const halved = vapplyDbl(inputNumbers, (n) => n / 2);
console.log('Halved values via vapply: ' + halved.join(', ')); // -> 5, 10, 15, 20`
    }
  ],
  exercises: [
    {
      id: 'func-ex-1',
      kind: 'mcq',
      question: {
        en: 'In base R apply(m, MARGIN = 1, FUN = mean), what does MARGIN = 1 specify?',
        bn: 'বেস R এর apply(m, MARGIN = 1, FUN = mean) ফাংশনে MARGIN = 1 কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'It applies the function across rows (producing 1 result per row)',
          bn: 'এটি প্রতিটি সারির ওপর ফাংশনটি প্রয়োগ করে (প্রতি সারির জন্য ১ টি ফলাফল দেয়)'
        },
        {
          en: 'It applies the function across columns (producing 1 result per column)',
          bn: 'এটি প্রতিটি কলামের ওপর ফাংশনটি প্রয়োগ করে (প্রতি কলামের জন্য ১ টি ফলাফল দেয়)'
        },
        {
          en: 'It applies the function only to the very first cell [1, 1]',
          bn: 'এটি কেবল একদম প্রথম সেল [1, 1] এর ওপর ফাংশনটি প্রয়োগ করে'
        },
        {
          en: 'It sets the printer margin to 1 inch',
          bn: 'এটি প্রিন্টারের মার্জিন ১ ইঞ্চিতে সেট করে'
        }
      ],
      answer: 0,
      hint: {
        en: '1 refers to rows (first dimension), 2 refers to columns (second dimension).',
        bn: '১ মানে সারি (প্রথম মাত্রা), ২ মানে কলাম (দ্বিতীয় মাত্রা)।'
      },
      explanation: {
        en: 'In R matrix indexing [row, col], dimension 1 is rows and dimension 2 is columns. Thus MARGIN = 1 iterates over rows, while MARGIN = 2 iterates over columns.',
        bn: 'R ম্যাট্রিক্সে প্রথম মাত্রা হলো সারি এবং দ্বিতীয় মাত্রা কলাম। তাই MARGIN = 1 সারির ওপর এবং MARGIN = 2 কলামের ওপর কাজ করে।'
      }
    },
    {
      id: 'func-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why is vapply() strongly preferred over sapply() in production R packages and data scripts?',
        bn: 'প্রোডাকশন R প্যাকেজ এবং স্ক্রিপ্টে sapply() এর চেয়ে vapply() কেন বেশি গ্রহণযোগ্য?'
      },
      options: [
        {
          en: 'vapply enforces a strict return type template, preventing silent type mutations and unexpected list returns',
          bn: 'vapply একটি কঠোর রিটার্ন টাইপ টেমপ্লেট নিশ্চিত করে, ফলে অনাকাঙ্ক্ষিত টাইপ রূপান্তর বা অনিশ্চয়তা তৈরি হয় না'
        },
        {
          en: 'vapply uses graphical GPU acceleration while sapply uses slow CPU cores',
          bn: 'vapply জিপিইউ ব্যবহার করে আর sapply ধীরগতির সিপিইউ কোর ব্যবহার করে'
        },
        {
          en: 'sapply is an obsolete function that was removed in R 3.0',
          bn: 'sapply একটি সেকেলে ফাংশন যা R ৩.০ এ বাতিল করা হয়েছে'
        },
        {
          en: 'vapply automatically encrypts all outputs to disk',
          bn: 'vapply ডিস্কে تمام আউটপুট নিজে থেকেই এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'vapply provides guaranteed type stability.',
        bn: 'vapply রিটার্ন টাইপের নিশ্চয়তা বা টাইপ স্ট্যাবিলিটি দেয়।'
      },
      explanation: {
        en: 'sapply can return a vector, matrix, or list depending on the runtime inputs. vapply requires a FUN.VALUE signature, guaranteeing type stability and fast failure on unexpected types.',
        bn: 'sapply ইনপুটের ওপর ভিত্তি করে কখনো ভেক্টর, কখনো ম্যাট্রিক্স বা লিস্ট দিতে পারে। vapply নির্দিষ্ট টাইপ নিশ্চিত করে কোডকে সুরক্ষিত রাখে।'
      }
    },
    {
      id: 'func-ex-3',
      kind: 'mcq',
      question: {
        en: 'In functional programming terminology, what is a closure in R?',
        bn: 'ফাংশনাল প্রোগ্রামিংয়ের পরিভাষায় R এ একটি ক্লোজার (closure) কী?'
      },
      options: [
        {
          en: 'A function that retains access to variables in the environment where it was created, even when called elsewhere',
          bn: 'একটি ফাংশন যা তার তৈরি হওয়ার এনভায়রনমেন্টের ভেরিয়েবলগুলোর অ্যাক্সেস ধরে রাখে, এমনকি বাইরে থেকে কল করলেও'
        },
        {
          en: 'A command that closes the active RStudio window immediately',
          bn: 'একটি কমান্ড যা সক্রিয় RStudio উইন্ডো সাথে সাথে বন্ধ করে দেয়'
        },
        {
          en: 'A special file ending in .close that cannot be edited',
          bn: 'একটি বিশেষ ফাইল যার শেষে .close থাকে এবং সম্পাদনা করা যায় না'
        },
        {
          en: 'A database lock that prevents other users from inserting records',
          bn: 'একটি ডাটাবেজ লক যা অন্য ব্যবহারকারীদের রেকর্ড যোগ করতে বাধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Functions enclose their enclosing lexical environments.',
        bn: 'ফাংশন তার জন্মের পরিবেশের ভেরিয়েবলগুলোকে নিজের ভেতর বন্দি করে রাখে।'
      },
      explanation: {
        en: 'A closure is a function bundled together with its enclosing environment, allowing it to remember and access variables from its birthplace.',
        bn: 'ক্লোজার হলো এমন একটি ফাংশন যা তার জন্মের পরিবেশের ভেরিয়েবলগুলোকে মেমরিতে ধরে রাখে এবং পরে ব্যবহার করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-funcs-and-the-apply',
    title: {
      en: 'R Functional Programming and Iteration Quiz',
      bn: 'R ফাংশনাল প্রোগ্রামিং ও ইটারেশন কুইজ'
    },
    questions: [
      {
        id: 'func-q1',
        kind: 'mcq',
        question: {
          en: 'What data structure is ALWAYS returned by base R lapply()?',
          bn: 'বেস R এর lapply() সর্বদা কোন ডাটা স্ট্রাকচার ফেরত দেয়?'
        },
        options: [
          {
            en: 'A list (where each element corresponds to 1 processed input item)',
            bn: 'একটি লিস্ট (যেখানে প্রতিটি উপাদান ১ টি প্রক্রিয়াজাত ইনপুট আইটেমকে নির্দেশ করে)'
          },
          {
            en: 'An atomic numeric vector',
            bn: 'একটি সমজাতীয় সংখ্যাসূচক ভেক্টর'
          },
          {
            en: 'A 2D data frame',
            bn: 'একটি দ্বি-মাত্রিক ডাটা ফ্রেম'
          },
          {
            en: 'A character matrix',
            bn: 'একটি ক্যারেক্টার ম্যাট্রিক্স'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "l" in lapply stands for list.',
          bn: 'lapply এর "l" অক্ষরটি লিস্ট বোঝায়।'
        },
        explanation: {
          en: 'lapply always returns a list of identical length to the input, making it completely predictable and safe from type shape mutations.',
          bn: 'lapply সর্বদা ইনপুটের সমান দৈর্ঘ্যের একটি লিস্ট ফেরত দেয়, ফলে এর আউটপুট সুনির্দিষ্ট ও অনুমানযোগ্য থাকে।'
        }
      },
      {
        id: 'func-q2',
        kind: 'mcq',
        question: {
          en: 'Which purrr function guarantees returning an atomic numeric double vector?',
          bn: 'কোন purrr ফাংশনটি নিশ্চিতভাবে একটি অ্যাটমিক নিউমেরিক ডাবল ভেক্টর ফেরত দেয়?'
        },
        options: [
          {
            en: 'map_dbl()',
            bn: 'map_dbl()'
          },
          {
            en: 'map_chr()',
            bn: 'map_chr()'
          },
          {
            en: 'map_lgl()',
            bn: 'map_lgl()'
          },
          {
            en: 'map_dfc()',
            bn: 'map_dfc()'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "dbl" suffix stands for double-precision float.',
          bn: '"dbl" প্রত্যয়টি ডাবল-প্রিসিশন ফ্লোট নির্দেশ করে।'
        },
        explanation: {
          en: 'map_dbl() applies a function over a collection and strictly enforces that the return values form a double (numeric) atomic vector.',
          bn: 'map_dbl() কোনো কালেকশনের ওপর ফাংশন চালিয়ে সুনির্দিষ্টভাবে একটি ডাবল নিউমেরিক ভেক্টর তৈরি করে।'
        }
      },
      {
        id: 'func-q3',
        kind: 'mcq',
        question: {
          en: 'What is the syntax for creating a concise anonymous lambda function in modern R (version 4.1.0+)?',
          bn: 'আধুনিক R (সংস্করণ ৪.১.০+) এ সংক্ষিপ্ত বেনামী ল্যাম্বডা ফাংশন তৈরির সিনট্যাক্স কোনটি?'
        },
        options: [
          {
            en: '\\(x) x * 2',
            bn: '\\(x) x * 2'
          },
          {
            en: 'lambda x: x * 2',
            bn: 'lambda x: x * 2'
          },
          {
            en: 'def(x) -> x * 2',
            bn: 'def(x) -> x * 2'
          },
          {
            en: 'fn: x => x * 2',
            bn: 'fn: x => x * 2'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern R uses the backslash character to represent lambda.',
          bn: 'আধুনিক R এ ল্যাম্বডা বোঝাতে ব্যাকস্ল্যাশ অক্ষরটি ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'From R 4.1.0 onward, \\(x) expr is native shorthand for function(x) expr, providing concise inline lambda notation.',
          bn: 'R ৪.১.০ থেকে function(x) expr এর সংক্ষিপ্ত রূপ হিসেবে \\(x) expr ব্যবহার করা যায়।'
        }
      },
      {
        id: 'func-q4',
        kind: 'mcq',
        question: {
          en: 'Which apply family function applies a summary function over subsets of a vector grouped by factor categories (ragged arrays)?',
          bn: 'ফ্যাক্টর ক্যাটাগরি অনুযায়ী গঠিত ভেক্টরের বিভিন্ন অংশের ওপর সামারি ফাংশন চালাতে apply পরিবারের কোন ফাংশনটি ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'tapply() (table apply)',
            bn: 'tapply() (টেবিল অ্যাপ্লাই)'
          },
          {
            en: 'mapply()',
            bn: 'mapply()'
          },
          {
            en: 'rapply()',
            bn: 'rapply()'
          },
          {
            en: 'zapply()',
            bn: 'zapply()'
          }
        ],
        answer: 0,
        hint: {
          en: '"t" stands for table or ragged categories.',
          bn: '"t" মূলত টেবিল বা ক্যাটাগরিভিত্তিক গণনা বোঝায়।'
        },
        explanation: {
          en: 'tapply() applies a function over a vector partitioned into subsets by one or more grouping factors.',
          bn: 'tapply() এক বা একাধিক গ্রুপিং ফ্যাক্টরের ওপর ভিত্তি করে ভেক্টরকে ভাগ করে প্রতি ভাগে ফাংশন চালায়।'
        }
      },
      {
        id: 'func-q5',
        kind: 'mcq',
        question: {
          en: 'What happens in R if a function argument has a default value (e.g. f <- function(x = 10)) and the argument is not provided during the call?',
          bn: 'R এ কোনো ফাংশন আর্গুমেন্টে ডিফল্ট মান থাকলে (যেমন f <- function(x = 10)) এবং কল করার সময় তা না দিলে কী ঘটে?'
        },
        options: [
          {
            en: 'R uses lazy evaluation to evaluate the default value (10) only when x is accessed inside the function body',
            bn: 'R লেজি ইভ্যালুয়েশন ব্যবহার করে ফাংশনের ভেতর x ব্যবহৃত হলে তবেই ডিফল্ট মান (১০) মূল্যায়ন করে'
          },
          {
            en: 'R immediately raises an error for missing required arguments',
            bn: 'R অনুপস্থিত আর্গুমেন্টের জন্য তাৎক্ষণিকভাবে এরর প্রদর্শন করে'
          },
          {
            en: 'R fills the variable with NULL and skips the function',
            bn: 'R ভেরিয়েবলটিকে NULL বানায় এবং ফাংশনটি বাদ দিয়ে যায়'
          },
          {
            en: 'The computer prints an emergency alert to the terminal',
            bn: 'কম্পিউটার টার্মিনালে একটি জরুরি সতর্কতা বার্তা প্রিন্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'R uses lazy evaluation for function arguments.',
          bn: 'ফাংশন আর্গুমেন্টের জন্য R লেজি ইভ্যালুয়েশন (lazy evaluation) ব্যবহার করে।'
        },
        explanation: {
          en: 'Under R\'s lazy evaluation model, default argument expressions are promises evaluated only when the variable is first referenced inside the function body.',
          bn: 'R এর লেজি ইভ্যালুয়েশনের নিয়মে ডিফল্ট আর্গুমেন্ট কেবল তখনই কার্যকর হয় যখন ফাংশনের ভেতরে সেটিকে ব্যবহার করা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'tables-and-the-join',
    title: {
      en: 'Relational Joins & data.table: High-Performance In-Memory Analytics',
      bn: 'রিলেশনাল জয়েন ও data.table: উচ্চগতির ইন-মেমরি ডাটা অ্যানালিটিক্স'
    }
  }
};
