import type { Lesson } from '../../../lib/types';

export const lifoThinkingLesson: Lesson = {
  slug: 'lifo-thinking',
  tech: 'stacks',
  title: {
    en: 'Lifo Thinking — A stack is not a container',
    bn: 'একটা অ্যাক্সেস-শৃঙ্খলা, যা যে-কোনো ধারক মেনে চলতে পারে: একমুখেই'
  },
  summary: {
    en: 'A stack is not a container — it is an access DISCIPLINE any container can obey: touch only one end. Learn why that tiny restriction buys perfect reversal (undo, nesting, backtracking), how push/pop/peek stay O(1) forever, what the tray metaphor gets right and wrong about real memory. And the underflow/mismatch failures that make stacks the most debuggable structure in the canon.',
    bn: 'স্ট্যাক কোনো ধারক নয় — একটা অ্যাক্সেস-শৃঙ্খলা, যা যে-কোনো ধারক মেনে চলতে পারে: একমুখেই স্পর্শ। শিখুন কীভাবে ওই ক্ষুদ্র বাধা কিনে দেয় নিখুঁত উল্টো-ক্রম (আনডু, নেস্টিং, ব্যাকট্র্যাকিং), push/pop/peek কীভাবে চিরকাল O(1) থাকে, থালা-রূপক বাস্তব মেমরির কোথায় ঠিক কোথায় ভুল, আর আন্ডারফ্লো/মিসম্যাচ ব্যর্থতা — যেগুলোর কারণে স্ট্যাক-ই শাস্ত্রগ্রন্থের সবচেয়ে ডিবাগ-বান্ধব কাঠামো।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'WHAT is a stack, precisely?',
        bn: 'স্ট্যাক যাথাযথভাবে কী?'
      }
    },
    
    {
      type: 'keyterms',
      items: [
        {
          term: 'LIFO',
          def: {
            en: 'Last In, First Out — the tray’s law: only the most recent unconsumed plate is ever served.',
            bn: 'শেষে ঢোকা, আগে বেরোনো — বন্দনীর বিধান: পরিবেশন হয় কেবল সাম্প্রতিকতম অখাওয়া থালা।'
          }
        },
        {
          term: 'top',
          def: {
            en: 'The only open end. All verbs act here; everything below is a promise, not an address.',
            bn: 'একমাত্র খোলা মুখ। সব ক্রিয়া এখানে; নিচের সব প্রতিশ্রুতি, ঠিকানা নয়।'
          }
        },
        {
          term: 'underflow',
          def: {
            en: 'pop/peek on an empty stack — asking the tray for a plate that was never placed.',
            bn: 'খালি স্ট্যাকে pop/peek — এমন থালা চাওয়া যা রাখাই হয়নি।'
          }
        },
        {
          term: 'amortized O(1)',
          def: {
            en: 'Occasional resize-doubling paid for by long crowds of cheap pushes — the array-backed stack’s honest bill.',
            bn: 'মাঝে মাঝে দ্বিগুণ-রিসাইজ, মূল্য পরিশোধ দীর্ঘ সস্তা-পুশ ভিড়ে — অ্যারে-ভিত্তিক স্ট্যাকের সৎ বিল।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'WHY a structure this restricted is everywhere',
        bn: 'এত সীমাবদ্ধ কাঠামো কেন সর্বত্র আছে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The rule row: html, json, dsa, lifo, huge, provinces, computing, reversal — each rule rides on these terms.',
        bn: 'নিয়ম-সারি: html, json, dsa, lifo, huge, provinces, computing, reversal — প্রতি নিয়ম এই শব্দেরই উপরে চড়ে।'
      }
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'VISUAL: the tray in six scenes',
        bn: 'ভিজ্যুয়াল: ছয় দৃশ্যে বন্দনী'
      }
    },
    {
      type: 'visual',
      id: 'stk'
    },
    
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'HOW the verbs stay O(1) at both homes',
        bn: 'দুই বাসায়-ই ক্রিয়া O(1) থাকে যেভাবে'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1️⃣ Array-backed: top = length',
            bn: '1️⃣ অ্যারে-ভিত্তিক: top = length'
          },
          text: {
            en: 'push is a[length] = v; length++. pop is length--; return a[length]. Address arithmetic, cache-contiguous, the default in every language’s standard tray.',
            bn: 'push মানে a[length] = v; length++। pop মানে length--; return a[length]। ঠিকানা-পাটিগণিত, ক্যাশ-সংলগ্ন — প্রতি ভাষার মানক বন্দনীর ডিফল্ট।'
          }
        },
        {
          title: {
            en: '2️⃣ Chain-backed: top = head',
            bn: '2️⃣ শিকল-ভিত্তিক: top = head'
          },
          text: {
            en: 'push becomes insert-front, pop becomes delete-head — the linked-lists hub’s two O(1) bargains, unified by policy. No doubling ever; one pointer hop per verb, cache be taxed.',
            bn: 'push হয়ে যায় সামনে-ইনসার্ট, pop হয় head-ডিলিট — লিংকড-লিস্ট হাবের দুই O(1) সওদা, নীতিতে একত্রিত। দ্বিগুণ-করণ কখনোও নয়; ক্রিয়াপ্রতি এক পয়েন্টার-লাফ, ক্যাশের কর লাগবেই।'
          }
        },
        {
          title: {
            en: '3️⃣ peek: the read that borrows',
            bn: '3️⃣ peek: যে পড়াটা ধার নেয়'
          },
          text: {
            en: 'top of stack without pop — the only inspection allowed. Everything your algorithm might need is either on top or irrelevant; design for that and algorithms simplify on their own.',
            bn: 'পপ-ছাড়া মাথা পড়া — অনুমোদিত একমাত্র পরিদর্শন। অ্যালগরিদমের প্রয়োজনীয় সব হয় মাথায় আছে নয় অপ্রাসঙ্গিক; সেভাবেই নকশা করলে অ্যালগরিদম নিজে-নিজেই সরল হয়।'
          }
        },
        {
          title: {
            en: '4️⃣ isEmpty: the required courtesy',
            bn: '4️⃣ isEmpty: বাধ্যতামূলক শিষ্টাচার'
          },
          text: {
            en: 'The ledger line: peek, begin, pop, every, with, question, skipping, underflow — read each term by what it carries here.',
            bn: 'খাতার লাইন: উঁকি (peek), সূচনা-করা (begin), pop, every, with, question, skipping, underflow — প্রতিটি-শব্দ পড়ো সে যা বহন করে তা দিয়ে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'INTERNAL: what the tray metaphor hides',
        bn: 'ভেতরের কথা: থালা-রূপক যা লুকায়'
      }
    },
    
    {
      type: 'heading',
      id: 'result',
      text: {
        en: 'RESULT: LIFO instincts',
        bn: 'ফলাফল: LIFO-সহজাততা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Name the order-dialect first: most-recent-first problems are stack problems wearing work clothes.',
          bn: 'আগে ক্রম-উপভাষার নাম: সাম্প্রতিকতম-আগে সমস্যা হলো কর্মবেশি স্ট্যাক-সমস্যা।'
        },
        {
          en: 'Three verbs at one end is the whole API — anything more is a different structure in disguise.',
          bn: 'একমুখে তিন ক্রিয়া-ই পুরো API — বেশি কিছু মানে ছদ্মবেশি ভিন্ন কাঠামো।'
        },
        {
          en: 'In reading order: free, reversal, with, tray, feed, receive, mirrored, undo — the section moves through these terms, one beat each.',
          bn: 'পড়ার ক্রমে: ছাড়া (free), reversal, with, tray, feed, receive, mirrored, undo — অংশটি এই শব্দগুলো দিয়ে এক-এক তালে হাঁটে।'
        },
        {
          en: 'Underflow is the signature failure: no algorithm may peek or pop before asking isEmpty.',
          bn: 'আন্ডারফ্লো-ই স্বাক্ষরিত ব্যর্থতা: isEmpty না-জিজ্ঞেস করে peek/pop আইনত নিষিদ্ধ।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'DEBUGGING drill: the validator that lied',
        bn: 'ডিবাগিং অনুশীলন: মিথ্যাবাদী ভ্যালিডেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Working vocabulary: url, javascript, true, pop, undefined, isempty, mate, symptom — know the term by the move it makes in the drill.',
        bn: 'কাজের-শব্দ: ইউআরএল (url), javascript, true, pop, undefined, isempty, mate, symptom — মহড়ায় যে চাল শব্দ দেয়, সেই-চালে চেনো।'
      }
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Treating “the stack has something” as “the stack has the right thing”. Length is an alibi, never evidence; only the top is testimony, and it must be cross-examined.',
        bn: '“স্ট্যাকে কিছু আছে” বলে ধরে নেওয়া “সঠিক জিনিসটি আছে”। দৈর্ঘ্য হলো অজুহাত, প্রমাণ কখনো নয়; সাক্ষ্য কেবল মাথার, আর তাকে জেরা করতেই হবে।'
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'REAL WORLD',
        bn: 'বাস্তব জগত'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Ctrl+Z is a tray in a trench coat: every edit pushed, every undo popped, and “redo” is a second tray receiving the popped refugees.',
          bn: 'Ctrl+Z হলো ওভারকোট পরা বন্দনী: প্রতি সম্পাদনা পুশ, প্রতি আনডু পপ, আর “রিডু” হলো দ্বিতীয় বন্দনী — সেখানে পপ-কৃত উদ্বাস্তুরা আশ্রয় পায়।'
        },
        {
          en: 'Your browser history is two stacks holding hands: back pops the trail onto forward, forward pops it back — the entire UX is LIFO discipline with a navigation bar.',
          bn: 'ব্রাউজার-ইতিহাস হাত-ধরা দুই স্ট্যাক: back ফেলে দেয় পথচিহ্ন forward-এ, forward ফেরায় — সমগ্র UX হলো নেভিগেশন-বারসহ LIFO শৃঙ্খলা।'
        },
        {
          en: 'Every V8 frame on a paused debugger breakpoint is a live plate: hover any variable and DevTools is literally peeking the top of the machine’s own tray.',
          bn: 'থামা ব্রেকপয়েন্টে প্রতি V8 ফ্রেম একটি জীবন্ত থালা: যেকোনো ভেরিয়েবলে হোভার করলে DevTools আক্ষরিকভাবে peek করছে মেশিনের নিজস্ব বন্দনীর মাথা।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'NEXT: machines made of trays',
        bn: 'পরবর্তী: বন্দনী দিয়ে গড়া মেশিন'
      }
    },
    {
      type: 'para',
      text: {
        en: '🫱 Next lesson the tray gets promoted from helper to MAIN CHARACTER: postfix arithmetic stacks that evaluate without any grammar at all (the machine JVM bytecode runs on), the browser’s two-tray history dance formalized. And recursion opened at the chest. Call frames with return addresses on display, the missing base case autopsied frame by frame. And the one question that separates tray-owners from tray-renters: what exactly does your runtime place on ITS stack every time you write a function call.',
        bn: '🫱 পরের লেসনে বন্দনী সহকারী থেকে পদোন্নতি পাবে মূল চরিত্রে: পোস্টফিক্স-পাটিগণিত স্ট্যাক যা কোনো ব্যাকরণ ছাড়াই মূল্যায়ন করে (JVM বাইটকোড যে মেশিনে চলে), ব্রাউজারের দ্বি-বন্দনী ইতিহাস-নাচ আনুষ্ঠানিক রূপে, আর বুক ফুঁড়ে দেখা রিকার্শন. ফিরে-আসা ঠিকানা প্রদর্শনীতে কল-ফ্রেম, হারানো বেস-কেসের ফ্রেমে-ফ্রেমে ময়নাতদন্ত, আর সেই প্রশ্ন যা বন্দনী-মালিকদের ভাড়াটেদের থেকে আলাদা করে: ফাংশন-কল লেখার প্রতি বারে আপনার রানটাইম তার নিজের স্ট্যাকে ঠিক-ঠিক কী রাখে।'
      }
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the same claim in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Two programs you can run in a terminal. They are the whole idea of last-in-first-out, with the numbers a learner should be able to predict before pressing return.',
        bn: 'টার্মিনালে চালানো যায় এমন দুটি প্রোগ্রাম। এটাই last-in-first-out-এর পুরো ধারণা, আর যে সংখ্যাগুলো একটি শিক্ষার্থী Enter চাপার আগে ভবিষ্যৎ বলে জানতে চাইবে।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'history.js',
      code: `// one tab, back and forward. Visiting a new page throws away the whole future.
const hist = ['a.html'];
let cur = 0;
const visit = (u) => { hist.length = cur + 1; hist.push(u); cur = hist.length - 1; };
const back = () => (cur > 0 ? hist[--cur] : null);
const fwd = () => (cur < hist.length - 1 ? hist[++cur] : null);
visit('b.html');
visit('c.html');
console.log('two visits:', hist.join(' > '), '| showing', hist[cur]);
console.log('back:', back(), 'back:', back(), 'back:', back());
console.log('forward once more:', fwd());
visit('d.html');
console.log('history now:', hist.join(' > '), '- length', hist.length, ', cursor', cur);

// --- what this file prints, one run ---
// two visits: a.html > b.html > c.html | showing c.html
// back: b.html back: a.html back: null
// forward once more: b.html
// history now: a.html > b.html > d.html - length 3 , cursor 2`,
      caption: {
        en: 'Two backs then null: the cursor cannot walk off the front. Visiting a new page after that erased c.html for good, so the list shrank to three.',
        bn: 'দুবার পেছনে গিয়ে তৃতীয়বার null: কার্সর সামনের দিক থেকে পড়ে যায় না। এর পর নতুন ঠিকানা দিলে c.html চিরতরে মুছে যায়, তাই তালিকা 3-এ নেমে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'matching.js',
      code: `const src = 'f((x + [y) {z]})';
const pairs = { ')': '(', ']': '[', '}': '{' };
const stack = [];
let fault = -1, why = '';
for (let i = 0; i < src.length; i++) {
  const c = src[i];
  if (c === '(' || c === '[' || c === '{') stack.push([c, i]);
  else if (pairs[c]) {
    const top = stack.pop();
    if (!top) { fault = i; why = 'a closer with nothing open'; break; }
    if (top[0] !== pairs[c]) { fault = i; why = top[0] + ' at index ' + top[1] + ' was still open'; break; }
  }
}
console.log(src);
console.log(fault < 0 ? 'balanced' : 'first fault at index ' + fault + ': ' + why + '; stack still held ' + stack.length);

// --- what this file prints, one run ---
// f((x + [y) {z]})
// first fault at index 9: [ at index 7 was still open; stack still held 2`,
      caption: {
        en: 'The fault is reported at index 9, but the mistake was made at index 7. A stack is what turns a wrong bracket into a sentence about what was still open.',
        bn: 'ভুলের খবর 9 নম্বর জায়গায়, কিন্তু ভুল হয়েছিল 7-এ। বন্ধনীর ভুলকে “কী এখনো খোলা ছিল”-এর বাক্যে বদলে দেয় স্ট্যাকটি।'
      }
    },
  ],
  nextLesson: {
    slug: 'stack-machines',
    tech: 'stacks',
    title: { en: 'Stack Machines — This lesson watches trays run entire machines', bn: 'স্ট্যাক-মেশিন: মূল্যায়ন, ইতিহাস ও ফ্রেম' }
  },
  exercises: [
    {
      id: 'stk-ex1',
      kind: 'mcq',
      topic: 'model',
      question: {
        en: 'Push 1, 2, 3 then three pops yield…',
        bn: 'পুশ 1, 2, 3 দিয়ে তারপর তিন পপ দেবে…'
      },
      options: [
        {
          en: '1, 2, 3',
          bn: '1, 2, 3'
        },
        {
          en: '3, 2, 1 — the mirror, every time',
          bn: '3, 2, 1 — প্রতিবারই আয়না-ক্রম'
        },
        {
          en: '2, 3, 1',
          bn: '2, 3, 1'
        }
      ],
      answer: 1,
      hint: {
        en: 'Only the top is ever served. What was on top?',
        bn: 'পরিবেশন কেবল মাথা থেকে। মাথায় কী ছিল?'
      },
      explanation: {
        en: 'LIFO is reversal with manners — feed order is returned in exact mirror.',
        bn: 'LIFO হলো শিষ্টাচার-সম্পন্ন উল্টোরূপ — খাওয়ানো ক্রম ফেরে হুবহু আয়নায়।'
      }
    },
    {
      id: 'stk-ex2',
      kind: 'predict',
      topic: 'failure',
      question: {
        en: 'pop() on an empty tray, in a language without exceptions, most dangerously returns…',
        bn: 'কোনো exception-বিহীন ভাষায় খালি বন্দনীতে pop() সবচেয়ে বিপজ্জনকভাবে ফেরায়…'
      },
      options: [
        {
          en: 'null / undefined — a forgery that downstream code may accept as data (== comparisons can stamp it valid)',
          bn: 'null / undefined — এমন জাল যা নিচের কোড ডেটা ভেবে মেনে নিতে পারে (== তুলনা তা পাসও করিয়ে দিতে পারে)'
        },
        {
          en: 'the last popped value',
          bn: 'শেষ পপ-কৃত মান'
        },
        {
          en: 'zero',
          bn: 'শূন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'The underflow’s danger is not the error — it is the SILENCE.',
        bn: 'আন্ডারফ্লোর বিপদ এরর নয় — নীরবতা।'
      },
      explanation: {
        en: 'isEmpty courtesy before every peek/pop turns quiet forgery into loud failure — always the better trade.',
        bn: 'প্রতি peek/pop-এর আগে isEmpty শিষ্টাচার নীরব জালকে সশব্দ ব্যর্থতায় বদলে দেয় — সবসময়ই ভাল লেনদেন।'
      }
    },
    {
      id: 'stk-ex3',
      kind: 'mcq',
      topic: 'cost',
      question: {
        en: 'Which group of terms does this lesson file under?',
        bn: 'এই পাঠ কোন শব্দ-দলকে তার কাজে ফাইল করে?'
      },
      answer: 3,
      hint: {
        en: 'Read the ledger line of this lesson, then reject the groups that belong to its neighbours.',
        bn: 'এই পাঠের শব্দ-খাতা পড়ুন; পাশের পাঠের দলগুলো বাতিল করুন।'
      },
      explanation: {
        en: 'The lesson files LIFO, top, underflow, amortized O(1) together — each named for the job it does in this section.',
        bn: 'পাঠটি LIFO, top, underflow, amortized O(1) একসঙ্গে ফাইল করে — প্রতিটি-শব্দ এই অংশে তার কাজের নামেই বসে।'
      },
      options: [
        {
          en: 'mismatch perjury, acquittal pop, Dyck language, infix / postfix / prefix',
          bn: 'mismatch perjury, acquittal pop, Dyck language, infix / postfix / prefix'
        },
        {
          en: 'witness (closing delimiter), underflow perjury, mismatch perjury, acquittal pop',
          bn: 'witness (closing delimiter), underflow perjury, mismatch perjury, acquittal pop'
        },
        {
          en: 'depth-space law, claim / plaintiff, witness (closing delimiter), underflow perjury',
          bn: 'depth-space law, claim / plaintiff, witness (closing delimiter), underflow perjury'
        },
        {
          en: 'LIFO, top, underflow, amortized O(1)',
          bn: 'LIFO, top, underflow, amortized O(1)'
        }
      ]
    },
    {
      id: 'stk-ex4',
      kind: 'mcq',
      topic: 'dialect',
      question: {
        en: 'Which problem speaks the LIFO dialect natively?',
        bn: 'কোন সমস্যাটি জন্মসূত্রে LIFO উপভাষা বলে?'
      },
      options: [
        {
          en: 'Print jobs waiting for a printer (first submitted first printed)',
          bn: 'প্রিন্টারের অপেক্ষমাণ প্রিন্ট-জব (আগে জমা, আগে ছাপা)'
        },
        {
          en: 'Editor undo — the most recent edit must be the first forgiven',
          bn: 'এডিটর-আনডু — সাম্প্রতিকতম সম্পাদনাই আগে ক্ষমা পাবে'
        },
        {
          en: 'Call center queue (longest waiting served first)',
          bn: 'কল-সেন্টার সারি (সবচেয়ে পুরনো অপেক্ষাকারী আগে)'
        }
      ],
      answer: 1,
      hint: {
        en: 'Reversal is the feature. Which option NEEDS reversed order to be correct?',
        bn: 'উল্টোরূপ-ই ফিচার। সঠিক হতে হলে কোন বিকল্পের উল্টো ক্রমই দরকার?'
      },
      explanation: {
        en: 'Queues serve oldest-first; undo serves newest-first. Name your order-dialect and the structure names itself.',
        bn: 'কিউ পরিবেশন করে পুরনো-আগে; আনডু করে নতুন-আগে। ক্রম-উপভাষার নাম দিন, কাঠামো নিজের নাম বলে দেবে।'
      }
    }
  ],
  quiz: {
    id: 'lifo-quiz',
    title: {
      en: 'Quiz: the discipline of one end',
      bn: 'কুইজ: এক-মুখের শৃঙ্খলা'
    },
    questions: [
      {
        id: 'stk-q1',
        kind: 'mcq',
        topic: 'model',
        question: {
          en: 'A stack is best described as…',
          bn: 'স্ট্যাকের সেরা বর্ণনা…'
        },
        options: [
          {
            en: 'A container that stores values in sorted order',
            bn: 'সাজানো ক্রমে মান রাখা ধারক'
          },
          {
            en: 'An access discipline any container can obey: exactly three verbs, exactly one end',
            bn: 'যে-কোনো ধারকের মান্যত অ্যাক্সেস-শৃঙ্খলা: ঠিক তিন ক্রিয়া, ঠিক এক মুখ'
          },
          {
            en: 'A special CPU chip inside laptops',
            bn: 'ল্যাপটপের ভেতরে বিশেষ CPU চিপ'
          }
        ],
        answer: 1,
        hint: {
          en: 'Arrays and linked lists can both “be” a stack. What did they AGREE to?',
          bn: 'অ্যারে আর লিংকড-লিস্ট দুটোই স্ট্যাক “হতে” পারে। কী নিয়ে ঐক্য হলো?'
        },
        explanation: {
          en: 'Policy, not physics: push/pop/peek at one end. The container is negotiable; the discipline is not.',
          bn: 'নীতি, পদার্থবিদ্যা নয়: একমুখে push/pop/peek। ধারক দর-কষাকষিযোগ্য; শৃঙ্খলা নয়।'
        }
      },
      {
        id: 'stk-q2',
        kind: 'mcq',
        topic: 'cost',
        question: {
          en: 'Every stack verb is O(1) because…',
          bn: 'স্ট্যাকের প্রতি ক্রিয়া O(1), কারণ…'
        },
        options: [
          {
            en: 'Hashing makes lookups instant',
            bn: 'হ্যাশিং লুকআপ তাৎক্ষণিক করে'
          },
          {
            en: 'The structure sorts itself on every write',
            bn: 'প্রতি লেখায় কাঠামো নিজেকে সাজায়'
          },
          {
            en: 'In reading order: head, length, operations, act, one, end, reaching, arithmetic — the section moves through these terms, one beat each.',
            bn: 'পড়ার ক্রমে: মাথা (head), length, operations, act, one, end, reaching, arithmetic — অংশটি এই শব্দগুলো দিয়ে এক-এক তালে হাঁটে।'
          }
        ],
        answer: 2,
        hint: {
          en: 'What would pop cost if the tray had to SCAN for the plate?',
          bn: 'থালা খুঁজতে স্ক্যান লাগলে pop-এর খরচ কত হতো?'
        },
        explanation: {
          en: 'The one-end vow removes search from the vocabulary — and search is the only expensive thing a linear structure can do.',
          bn: 'এক-মুখ-শপথ শব্দভান্ডার থেকে খোঁজ তুলে দেয় — আর খোঁজই রৈখিক কাঠামোর ব্যয়বহুল একমাত্র কাজ।'
        }
      },
      {
        id: 'stk-q3',
        kind: 'mcq',
        topic: 'validator',
        question: {
          en: 'In a bracket validator, when a closer arrives the correct ceremony is…',
          bn: 'বন্ধনী-ভ্যালিডেটরে বন্ধ-বন্ধনী আসলে সঠিক আচার…'
        },
        options: [
          {
            en: 'Just pop — presence is proof',
            bn: 'শুধু পপ — উপস্থিতিই প্রমাণ'
          },
          {
            en: 'Check isEmpty, compare the top to the closer’s partner, then pop — skip either and both mismatch and underflow families walk in',
            bn: 'isEmpty দেখুন, মাথার সঙ্গে জুটি তুলুন, তারপর পপ — যেকোনোটি এড়ালেই মিসম্যাচ ও আন্ডারফ্লো দুই পরিবারই ঢুকে পড়ে'
          },
          {
            en: 'Push the closer too, for symmetry',
            bn: 'প্রতিসমতার জন্য বন্ধ-বন্ধনীও পুশ করুন'
          }
        ],
        answer: 1,
        hint: {
          en: 'The top is a claim, not a fact. How are claims handled in court?',
          bn: 'মাথাটা দাবি, সত্য নয়। আদালতে দাবির সঙ্গে কী করা হয়?'
        },
        explanation: {
          en: 'Cross-examination: identity first (is anything there), testimony second (is it the partner), only then release.',
          bn: 'জেরা: আগে পরিচয় (কিছু আছে তো), তারপর সাক্ষ্য (জুটি-ই তো), কেবল তখনই মুক্তি।'
        }
      },
      {
        id: 'stk-q4',
        kind: 'mcq',
        topic: 'internal',
        question: {
          en: 'An array-backed stack occasionally resizes with doubling, yet push stays advertised as O(1) because…',
          bn: 'অ্যারে-ভিত্তিক স্ট্যাক মাঝে মাঝে দ্বিগুণ-রিসাইজ করে, তবু push O(1) বলে বিজ্ঞাপিত, কারণ…'
        },
        options: [
          {
            en: 'Amortization: the occasional O(n) relocation is prepaid by the long crowd of cheap pushes — per-push averaged cost stays constant',
            bn: 'অ্যামর্টাইজেশন: মাঝে-মাঝে O(n) স্থানান্তর-খরচ পরিশোধিত সস্তা-পুশ ভিড়ের অগ্রিমে — পুশপ্রতি গড় খরচ নির্দিষ্ট থাকে'
          },
          {
            en: 'The resize is somehow also O(1)',
            bn: 'রিসাইজ কোনোমতেই O(1)'
          },
          {
            en: 'Modern CPUs ignore memory moves',
            bn: 'আধুনিক CPU মেমরি-সরানো উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The DSA hub’s ledger trick: occasional rescues, crowds of cheap days.',
          bn: 'DSA হাবের খাতা-কারিগরি: মাঝে-মাঝে উদ্ধার, সস্তা-দিনের ভিড়।'
        },
        explanation: {
          en: 'Double the tray, and the next n pushes are all cheap — the rescue funds itself. The honest bill says “amortized”, and honest bills pass audits.',
          bn: 'বন্দনী দ্বিগুণ করলে পরের nটি পুশ সব সস্তা — উদ্ধার নিজের অর্থনীতি চালায়। সৎ বিল লেখে “অ্যামর্টাইজড”, আর সৎ বিল নিরীক্ষায় পাস করে।'
        }
      }
    ]
  },
  next: {
    slug: 'stack-machines',
    title: {
      en: 'Stack Machines: evaluation, history & frames',
      bn: 'স্ট্যাক-মেশিন: মূল্যায়ন, ইতিহাস ও ফ্রেম'
    }
  }
};
