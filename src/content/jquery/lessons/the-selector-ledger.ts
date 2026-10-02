import type { Lesson } from '../../../lib/types';

export const TheSelectorLedgerLesson: Lesson = {
  slug: 'the-selector-ledger',
  tech: 'jquery',
  title: {
    en: 'jQuery Selectors, Sizzle Engine & DOM Traversal',
    bn: 'জেকোয়েরি সিলেক্টর, সিজল ইঞ্জিন ও ডম ট্রাভার্সাল'
  },
  summary: {
    en: 'Before querySelectorAll became universally adopted in web browsers, jQuery introduced the Sizzle selector engine to parse advanced CSS queries and custom positional filters. Developers query DOM trees using basic selectors, hierarchical relationships, attribute matchers, and form state filters. Beyond CSS queries, jQuery provides positional pseudo-selectors such as :even, :odd, and :eq(n). For instance, filtering 6 table rows with :even targets 3 rows (indices 0, 2, and 4), while :eq(2) targets the third row at index 2. In addition, jQuery provides tree traversal methods like .find(), .closest(), and .siblings() that walk parent, child, and sibling nodes efficiently. This lesson examines the Sizzle engine, selector families, positional filtering, and tree traversal algorithms.',
    bn: 'ব্রাউজারে querySelectorAll সার্বজনীন হওয়ার পূর্বে জেকোয়েরি সিজল (Sizzle) নামক একটি শক্তিশালী ইঞ্জিন চালু করেছিল। এটি ডম ট্রি থেকে সিএসএস সিলেক্টর, হায়ারার্কি, অ্যাট্রিবিউট এবং ফর্ম ফিল্টারের মাধ্যমে নোড খুঁজে বের করে। সাধারণ সিএসএসের বাইরেও জেকোয়েরিতে রয়েছে :even, :odd ও :eq(n)-এর মতো পজিশনাল ফিল্টার। যেমন ৬টি টেবিল রো-তে :even প্রয়োগ করলে ৩টি রো (ইনডেক্স ০, ২ ও ৪) সিলেক্ট হয় এবং :eq(২) দিয়ে ইনডেক্স ২ নম্বরের তৃতীয় রো পাওয়া যায়। এছাড়াও .find(), .closest() এবং .siblings() মেথড দিয়ে যেকোনো নোডের প্যারেন্ট বা চাইল্ড সহজে খুঁজে পাওয়া যায়। এই পাঠে সিজল ইঞ্জিন, সিলেক্টর গ্রুপ, পজিশনাল ফিল্টার এবং ট্রাভার্সাল অ্যালগরিদম বিশদভাবে উপস্থাপন করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Sizzle Engine & Selection Logic',
        bn: 'মূল ধারণা: সিজল ইঞ্জিন ও সিলেক্টর প্রযুক্তি'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you query elements, `jQuery` parses complex selectors from right to left. The engine uses native browser methods whenever available, and falls back to its built-in Sizzle algorithm for custom filters.',
        bn: 'আপনি যখন উপাদান খুঁজতে যান, জেকোয়েরি ডান থেকে বামে সিলেক্টর মূল্যায়ন করে। ইঞ্জিনটি ব্রাউজারের নিজস্ব দ্রুত মেথড ব্যবহার করে এবং কাস্টম ফিল্টারের ক্ষেত্রে নিজস্ব সিজল অ্যালগরিদমের সাহায্য নেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Sizzle Selector Engine',
          def: {
            en: 'The standalone CSS selector engine developed by jQuery that powers fast DOM querying across diverse browsers',
            bn: 'জেকোয়েরির নিজস্ব সিএসএস সিলেক্টর ইঞ্জিন যা সব ধরনের ব্রাউজারে দ্রুত উপাদান খুঁজতে সাহায্য করে'
          }
        },
        {
          term: 'Positional Pseudo-Filters',
          def: {
            en: 'jQuery-specific selector extensions like :first, :last, :even, :odd, and :eq(n) that select nodes based on index position',
            bn: 'ইনডেক্স নম্বরের ওপর ভিত্তি করে উপাদান খুঁজে নেওয়ার বিশেষ ফিল্টার যেমন :first, :last, :even, :odd ও :eq(n)'
          }
        },
        {
          term: 'DOM Tree Traversal',
          def: {
            en: 'Navigating upwards (ancestors), downwards (descendants), or sideways (siblings) relative to a given element',
            bn: 'কোনো নির্দিষ্ট উপাদানের সাপেক্ষে ওপরে প্যারেন্ট, নিচে চাইল্ড বা পাশে সিবলিং উপাদান খুঁজে বের করার প্রক্রিয়া'
          }
        },
        {
          term: '.closest() vs .parents()',
          def: {
            en: '.closest() ascends until it finds the first match; .parents() collects all matching ancestor nodes all the way up to the document root',
            bn: '.closest() ওপরের দিকে প্রথম মিল পাওয়া নোডটি দেয়; আর .parents() একদম রুট পর্যন্ত সব পূর্বপুরুষ নোড সংগ্রহ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'selector-categories-table',
      text: {
        en: 'Essential jQuery Selector Categories',
        bn: 'জেকোয়েরি সিলেক্টরের গুরুত্বপূর্ণ শ্রেণিবিভাগ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Selector Syntax and Matched Elements in jQuery',
        bn: 'জেকোয়েরি সিলেক্টর সিনট্যাক্স এবং তাদের ম্যাচিং আচরণ'
      },
      head: [
        { en: 'Selector Category', bn: 'সিলেক্টরের শ্রেণি' },
        { en: 'Syntax Pattern', bn: 'সিনট্যাক্স' },
        { en: 'Matched Elements', bn: 'যেসব উপাদান সিলেক্ট হয়' }
      ],
      rows: [
        [
          { en: 'Class & ID', bn: 'ক্লাস ও আইডি' },
          { en: '$(".card") / $("#nav")', bn: '$(".card") / $("#nav")' },
          { en: 'Elements matching specific CSS classes or unique identifier attributes', bn: 'নির্দিষ্ট ক্লাস বা অনন্য আইডি ধারণকারী উপাদানসমূহ' }
        ],
        [
          { en: 'Hierarchy Child', bn: 'হায়ারার্কি চাইল্ড' },
          { en: '$("ul > li")', bn: '$("ul > li")' },
          { en: 'Direct children only, excluding deeply nested descendants', bn: 'কেবল সরাসরি সন্তান উপাদান, গভীর নেস্টেড নোড বাদ দিয়ে' }
        ],
        [
          { en: 'Positional Filter', bn: 'পজিশনাল ফিল্টার' },
          { en: '$("tr:even")', bn: '$("tr:even")' },
          { en: 'Zero-indexed even elements (indices 0, 2, 4) in the current set', bn: 'শূন্য থেকে শুরু হওয়া জোড় ইনডেক্সের (যেমন ইনডেক্স ০, ২, ৪) উপাদানসমূহ' }
        ],
        [
          { en: 'Attribute Matcher', bn: 'অ্যাট্রিবিউট ফিল্টার' },
          { en: '$("input[type=\'text\']")', bn: '$("input[type=\'text\']")' },
          { en: 'Elements bearing specified attribute names and values', bn: 'নির্দিষ্ট নাম ও মানবিশিষ্ট অ্যাট্রিবিউটযুক্ত উপাদান' }
        ],
        [
          { en: 'Form State Filter', bn: 'ফর্ম স্টেট ফিল্টার' },
          { en: '$("input:checked")', bn: '$("input:checked")' },
          { en: 'Active checkboxes, radio buttons, or select options', bn: 'বর্তমানে টিকচিহ্ন বা সিলেক্ট করা ফর্মের ইনপুটসমূহ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Table Row Positional Filtering',
        bn: 'চালনাযোগ্য সিমুলেশন: টেবিল রো পজিশনাল ফিল্টারিং গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script demonstrates how jQuery filters 6 table rows using :even and index targeting, yielding 3 even rows and locating the row at index 2:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি দেখায় কীভাবে জেকোয়েরি ৬টি টেবিল রো-তে :even প্রয়োগ করে ৩টি জোড় রো পায় এবং ইনডেক্স ২ নম্বরের রো শনাক্ত করে:'
      }
    },
    {
      type: 'code',
      id: 'jquery-selectors-sim',
      lang: 'javascript',
      code: `// jQuery Positional Filtering Simulation
const rows = 6; // 6 table rows: indices 0, 1, 2, 3, 4, 5
const evenRows = Math.ceil(rows / 2); // 3 even rows at indices 0, 2, 4
const eqRowIndex = 2; // Selected row index (zero-based third row)

console.log('Total table rows in the DOM table structure:', rows);
// -> Total table rows in the DOM table structure: 6

console.log('Filtered even rows selected with tr:even selector:', evenRows);
// -> Filtered even rows selected with tr:even selector: 3

console.log('Specific target row index resolved by tr:eq(2):', eqRowIndex);
// -> Specific target row index resolved by tr:eq(2): 2`,
      caption: {
        en: 'Figure 1: Querying a table of 6 rows with :even produces 3 alternating rows, while :eq(2) targets index 2 precisely',
        bn: 'চিত্র ১: ৬টি রো-এর টেবিলে :even প্রয়োগ করলে ৩টি রো পাওয়া যায় এবং :eq(২) নির্দিষ্টভাবে ২ নম্বর ইনডেক্সকে টার্গেট করে'
      }
    },
    {
      type: 'heading',
      id: 'traversal-architecture-guide',
      text: {
        en: 'Tree Traversal: Parents, Children & Siblings',
        bn: 'ট্রি ট্রাভার্সাল: প্যারেন্ট, চাইল্ড ও সিবলিং বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While selectors query elements from the root document, traversal methods navigate relative to an existing jQuery collection. This is faster and avoids redundant DOM searches.',
        bn: 'সিলেক্টর যেখানে পুরো ডকুমেন্ট থেকে নোড খোঁজে, ট্রাভার্সাল সেখানে একটি নির্দিষ্ট উপাদানকে কেন্দ্র করে তার আশেপাশে খোঁজ চালায়। এটি অধিক দ্রুত এবং ডমের ওপর অতিরিক্ত চাপ রোধ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '$(elem).find(selector)',
          def: {
            en: 'Searches through all nested descendants of the current elements matching the specified selector',
            bn: 'বর্তমান উপাদানের ভেতরে থাকা সকল নেস্টেড সন্তান নোডের মধ্য থেকে নির্দিষ্ট সিলেক্টর খুঁজে আনে'
          }
        },
        {
          term: '$(elem).closest(selector)',
          def: {
            en: 'Travels up through DOM ancestors starting from the element itself to locate the nearest match',
            bn: 'বর্তমান উপাদান থেকে শুরু করে ওপরের দিকে সবচেয়ে কাছের প্যারেন্ট নোডটি শনাক্ত করে'
          }
        },
        {
          term: '$(elem).siblings()',
          def: {
            en: 'Retrieves all adjacent sibling elements at the same hierarchical level, excluding the current node',
            bn: 'একই স্তরে থাকা পাশের সমস্ত সহোদর বা সিবলিং উপাদান সংগ্রহ করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-even-filter-calc-ex',
      kind: 'mcq',
      topic: 'Count of matching rows with :even filter',
      question: {
        en: 'In our simulation of 6 table rows (indexed 0 to 5), how many rows match the selector $("tr:even")?',
        bn: 'আমাদের সিমুলেশনে ০ থেকে ৫ পর্যন্ত ইনডেক্সযুক্ত ৬টি টেবিল রো-তে $("tr:even") চালালে কয়টি রো পাওয়া যায়?'
      },
      options: [
        {
          en: '3 rows (indices 0, 2, and 4)',
          bn: '৩টি রো (ইনডেক্স ০, ২ ও ৪)'
        },
        {
          en: '6 rows',
          bn: '৬টি রো'
        },
        {
          en: '2 rows',
          bn: '২টি রো'
        },
        {
          en: '5 rows',
          bn: '৫টি রো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Indices 0, 2, and 4 are even, yielding 3 matched rows.',
        bn: 'ইনডেক্স ০, ২ ও ৪ জোড় সংখ্যা হওয়ায় ৩টি রো মেলার কথা ভাবুন।'
      },
      explanation: {
        en: 'Because jQuery indexes from 0, the :even pseudo-selector targets indices 0, 2, and 4, totaling 3 rows.',
        bn: 'জেকোয়েরিতে ০ থেকে ইনডেক্স গণনা শুরু হয়, তাই :even সিলেক্টর ০, ২ ও ৪ নম্বর ইনডেক্সের মোট ৩টি রো নির্বাচন করে।'
      }
    },
    {
      id: 'jquery-find-vs-children-ex',
      kind: 'mcq',
      topic: 'Difference between .find() and .children()',
      question: {
        en: 'What is the architectural difference between $(container).children() and $(container).find()?',
        bn: '$(container).children() এবং $(container).find()-এর মধ্যে কাঠামোগত পার্থক্য কী?'
      },
      options: [
        {
          en: '.children() only searches one level down among direct child nodes, whereas .find() traverses deeply across all descendant levels',
          bn: '.children() কেবল সরাসরি এক স্তর নিচের সন্তান নোড খোঁজে, কিন্তু .find() সব স্তরের গভীর নেস্টেড উপাদান খুঁজে আনে'
        },
        {
          en: '.children() removes elements from the screen',
          bn: '.children() উপাদানগুলো মুছে ফেলে'
        },
        {
          en: '.find() only works on table elements',
          bn: '.find() শুধু টেবিলে কাজ করে'
        },
        {
          en: 'There is no difference between them',
          bn: 'এদের মধ্যে কোনো তফাত নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'children() stays on the direct child tier; find() goes down the whole subtree.',
        bn: 'children সরাসরি সন্তান খোঁজে আর find পুরো নিচের ট্রি খোঁজে।'
      },
      explanation: {
        en: '.children() inspects direct child elements only. .find() recurses down the complete subtree hierarchy.',
        bn: '.children() শুধুমাত্র সরাসরি পরবর্তী স্তরের চাইল্ড নোড পায়, আর .find() পুরো নিচের বংশধরদের মধ্য থেকে উপাদান বের করে।'
      }
    },
    {
      id: 'jquery-closest-direction-ex',
      kind: 'mcq',
      topic: 'Traversal direction of .closest()',
      question: {
        en: 'In which direction does $(button).closest(".modal") traverse the DOM hierarchy?',
        bn: '$(button).closest(".modal") ডম ট্রির কোন দিকে অগ্রসর হয়ে উপাদান খোঁজে?'
      },
      options: [
        {
          en: 'Upwards through ancestor elements (parents, grandparents) until it finds the first match',
          bn: 'ওপরের দিকে প্যারেন্ট ও গ্র্যান্ডপ্যারেন্ট বরাবর গিয়ে প্রথম মিল পাওয়া উপাদানটি নির্বাচন করে'
        },
        {
          en: 'Downwards through child elements',
          bn: 'নিচের দিকে চাইল্ড উপাদানের ভেতর'
        },
        {
          en: 'Sideways across sibling elements only',
          bn: 'কেবল পাশের সিবলিং উপাদানের মধ্যে'
        },
        {
          en: 'It does not traverse the DOM',
          bn: 'এটি কোনো ট্রাভার্সাল করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Travels up the tree looking for the nearest ancestor.',
        bn: 'নিকটতম পূর্বপুরুষ নোড খুঁজতে ওপরের দিকে ওঠার কথা ভাবুন।'
      },
      explanation: {
        en: '.closest() begins at the current element and ascends up the ancestor chain, stopping at the first match.',
        bn: '.closest() বর্তমান নোড থেকে শুরু করে ওপরের দিকে উঠে প্রথম ম্যাচিং প্যারেন্ট উপাদানটি ফিরিয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-selector-ledger',
    title: {
      en: 'jQuery Selectors & Traversal Quiz',
      bn: 'জেকোয়েরি সিলেক্টর ও ট্রাভার্সাল কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-sizzle-evaluation',
        kind: 'mcq',
        topic: 'Direction of selector evaluation in Sizzle',
        question: {
          en: 'Why do complex selector engines like Sizzle evaluate descendant selectors like "div.container p.text" from right to left?',
          bn: 'সিজলের মতো সিলেক্টর ইঞ্জিন কেন "div.container p.text"-এর মতো সিলেক্টর ডান থেকে বাম দিকে মূল্যায়ন করে?'
        },
        options: [
          {
            en: 'Evaluating right-to-left identifies candidate leaf elements first, drastically cutting down the search space compared to evaluating wide parent containers',
            bn: 'ডান থেকে বামে খুঁজলে প্রথমে নির্দিষ্ট পাতার নোডগুলো চিহ্নিত হয়, যা প্যারেন্ট থেকে খোঁজার চেয়ে সার্চের পরিধি বহুলাংশে কমিয়ে দ্রুত ফলাফল দেয়'
          },
          {
            en: 'Browsers read CSS files from right to left',
            bn: 'ব্রাউজার সিএসএস ডান দিক থেকে পড়ে'
          },
          {
            en: 'It is a random design choice with no performance impact',
            bn: 'এর পেছনে কোনো কারণ বা পারফরম্যান্সের সম্পর্ক নেই'
          },
          {
            en: 'JavaScript requires all strings to be read in reverse',
            bn: 'জাভাস্ক্রিপ্ট সব স্ট্রিং উল্টো পড়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Finding leaf targets first discards non-matching subtrees faster.',
          bn: 'টার্গেট লিফ নোড আগে খুঁজে বের করে অপ্রয়োজনীয় শাখা বাদ দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Evaluating the rightmost selector matches candidate targets first; ascending their parents discards non-matches quickly.',
          bn: 'ডান পাশের লিফ নোড আগে ফিল্টার করলে অপ্রয়োজনীয় প্যারেন্ট চেক করার সময় বাঁচে এবং পারফরম্যান্স বাড়ে।'
        }
      },
      {
        id: 'q-jquery-filter-vs-find',
        kind: 'mcq',
        topic: 'Difference between .filter() and .find()',
        question: {
          en: 'How does $(collection).filter(".active") differ from $(collection).find(".active")?',
          bn: '$(collection).filter(".active") এবং $(collection).find(".active")-এর মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: '.filter() reduces the current collection by testing existing elements, while .find() searches inside the children of elements in the collection',
            bn: '.filter() বর্তমান কালেকশনের নিজস্ব নোডগুলোকে যাচাই করে ছাঁটাই করে, আর .find() সেই নোডগুলোর ভেতরের চাইল্ড উপাদান খোঁজে'
          },
          {
            en: '.filter() only works on numbers',
            bn: '.filter() শুধু সংখ্যায় চলে'
          },
          {
            en: '.find() deletes all non-matching elements from the DOM',
            bn: '.find() ডম থেকে উপাদান মুছে ফেলে'
          },
          {
            en: 'Both methods perform identical operations',
            bn: 'উভয় মেথড অবিকল একই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'filter tests the current set; find looks inside their descendants.',
          bn: 'filter বর্তমান সেটে পরীক্ষা করে আর find তাদের পেটের ভেতরের চাইল্ড খোঁজে।'
        },
        explanation: {
          en: '.filter() tests elements already in the collection. .find() queries down into child subtrees.',
          bn: '.filter() কালেকশনের বর্তমান উপাদানগুলোকে যাচাই করে, আর .find() তাদের ভেতরের বংশধর নোডগুলোকে খুঁজে আনে।'
        }
      },
      {
        id: 'q-jquery-has-selector',
        kind: 'mcq',
        topic: 'Function of the :has() pseudo-selector',
        question: {
          en: 'What does the selector $("div:has(p)") select in the DOM?',
          bn: 'ডমে $("div:has(p)") সিলেক্টরটি কোন উপাদানগুলোকে সিলেক্ট করে?'
        },
        options: [
          {
            en: 'All <div> elements that contain at least one nested <p> element inside them',
            bn: 'সেই সমস্ত <div> উপাদান যাদের পেটের ভেতরে অন্তত একটি <p> উপাদান রয়েছে'
          },
          {
            en: 'All <p> elements that are inside a div',
            bn: 'ডিভের ভেতরের <p> উপাদানগুলো'
          },
          {
            en: 'All divs that have no paragraph elements',
            bn: 'প্যারাগ্রাফহীন ডিভসমূহ'
          },
          {
            en: 'Only the first paragraph on the entire page',
            bn: 'পেজের শুধুমাত্র প্রথম প্যারাগ্রাফ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Selects the parent div if it contains a paragraph.',
          bn: 'প্যারেন্ট ডিভটি সিলেক্ট হবে যদি তার ভেতরে প্যারাগ্রাফ থাকে।'
        },
        explanation: {
          en: ':has(selector) filters parent elements based on whether descendants matching the selector exist inside them.',
          bn: ':has(selector) এমন প্যারেন্ট উপাদানকে নির্বাচন করে যার ভেতরে নির্দিষ্ট চাইল্ড উপাদান বর্তমান থাকে।'
        }
      },
      {
        id: 'q-jquery-prev-vs-next',
        kind: 'mcq',
        topic: 'Direction of .prev() and .next()',
        question: {
          en: 'What elements are returned by $(item).prev() and $(item).next()?',
          bn: '$(item).prev() এবং $(item).next() কোন উপাদানগুলো ফেরত দেয়?'
        },
        options: [
          {
            en: '.prev() returns the immediately preceding sibling element, while .next() returns the immediately following sibling element',
            bn: '.prev() ঠিক আগের সহোদর বা সিবলিং উপাদান দেয়, আর .next() ঠিক পরের সিবলিং উপাদান দেয়'
          },
          {
            en: '.prev() returns the parent; .next() returns the child',
            bn: '.prev() প্যারেন্ট দেয় আর .next() চাইল্ড দেয়'
          },
          {
            en: '.prev() scrolls backwards; .next() scrolls forwards',
            bn: '.prev() পেজ স্ক্রোল করে'
          },
          {
            en: 'Both return all elements on the page',
            bn: 'উভয়েই পেজের সব উপাদান দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Walks backwards or forwards among siblings on the same level.',
          bn: 'একই স্তরে থাকা আগের বা পরের সিবলিং খোঁজার কথা ভাবুন।'
        },
        explanation: {
          en: '.prev() targets the immediately preceding sibling node; .next() targets the next adjacent sibling node.',
          bn: '.prev() ঠিক আগের সহোদর নোডটি দেয় এবং .next() ঠিক পরের সহোদর নোডটি নির্বাচন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-dom-workshop',
    tech: 'jquery',
    title: {
      en: 'DOM Manipulation, HTML Insertion & Attributes',
      bn: 'ডম ম্যানিপুলেশন, এইচটিএমএল ইনসার্শন ও অ্যাট্রিবিউট'
    }
  }
};
