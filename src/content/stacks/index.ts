import type { Hub } from '../../lib/types';
import { lifoThinkingLesson } from './lessons/lifo-thinking';
import { stackMachinesLesson } from './lessons/stack-machines';
import { theBracketCourtLesson } from './lessons/the-bracket-court';
import { theMonotonePierLesson } from './lessons/the-monotone-pier';
import { theMinimumCartelLesson } from './lessons/the-minimum-cartel';
import { theInfixTreatyLesson } from './lessons/the-infix-treaty';
import { theUndoFortressLesson } from './lessons/the-undo-fortress';
import { theBacktrackExpeditionLesson } from './lessons/the-backtrack-expedition';
import { theTrayPanoramaLesson } from './lessons/the-tray-panorama';

export const stackHub: Hub = {
  slug: 'stacks',
  name: 'Stacks',
  icon: '🥞',
  tagline: {
    en: 'Three verbs, one open end: the discipline that powers undo, parsing, history and every function call your machine makes.',
    bn: 'তিন ক্রিয়া, এক খোলা মুখ: সেই শৃঙ্খলা যা চালায় আনডু, পার্সিং, ইতিহাস — এবং আপনার মেশিনের প্রতিটি ফাংশন-কল।',
  },
  about: {
    en: 'A stack is the smallest structure that still deserves the name — an access DISCIPLINE rather than a container: push, pop, peek, all at one end. That tiny vow buys reversal as a free feature, and reversal turns out to be the shape of undo, nesting, backtracking, history, and the single most executed machine on Earth: the call stack your program is standing on right now. Lesson one teaches the thinking: LIFO as order-dialect, O(1) verbs at both array-backed and chain-backed homes, the two lies of the tray metaphor (growth rescues and downward-growing hardware stacks), and the underflow/mismatch failure families with their ceremonial fixes. Lesson two promotes the tray to main character: postfix machines that evaluate with no grammar (the operand stacks JVM and WebAssembly bytecode literally execute on), the two-tray history protocol where a fresh visit murders the redo timeline on purpose, and the call frame opened at the chest — resumption addresses, frame budgets, and the missing-base-case autopsy every JS developer performs once per career. The Stack Lab’s six scenes — plates, good brackets, bad brackets, RPN, call frames, overflow free-fall — make every law watchable. From there the deep lanes open: the bracket court certifies nesting with a single match-at-pop ceremony; the monotone pier and minimum cartel price eviction and extremal queries at amortized O(1); the infix treaty audits operator altitudes through the shunting yard; the undo fortress militarizes timelines (journal-first, murder-theorem, mercy coalescing); the backtrack expedition proves search-memory is spine-sized and pruning is the only sustainable economics; and the tray panorama walks the whole wall — one grammar, eight dialects, three sealed debts. You leave with the portable literacy: wherever a new runtime appears, you ask where the tray is and what its verbs are, and the architecture answers itself.',
    bn: 'স্ট্যাক হলো ক্ষুদ্রতম কাঠামো যা নামটি যোগ্য — ধারক নয়, অ্যাক্সেস-শৃঙ্খলা: push, pop, peek, সবই এক মুখে। সেই ক্ষুদ্র শপথে পাওয়া যায় বিনামূল্যে উল্টোরূপ, আর উল্টোরূপ-ই বের হয় আনডু, নেস্টিং, ব্যাকট্র্যাকিং, ইতিহাস, এবং পৃথিবীর সবচেয়ে বেশি-চালিত মেশিনের আকৃতি: কল-স্ট্যাক, যার ওপর আপনার প্রোগ্রাম এখনই দাঁড়িয়ে। প্রথম লেসন শেখায় চিন্তা: ক্রম-উপভাষা হিসেবে LIFO, অ্যারে-ভিত্তিক ও শিকল-ভিত্তিক দুই বাসায়-ই O(1) ক্রিয়া, থালা-রূপকের দুই মিথ্যা (বৃদ্ধি-উদ্ধার আর নিচমুখী-বর্ধমান হার্ডওয়্যার স্ট্যাক), আর আন্ডারফ্লো/মিসম্যাচ ব্যর্থতা-পরিবার ও তাদের আচারমূলক প্রতিকার। দ্বিতীয় লেসনে বন্দনী পায় মূল ভূমিকা: পোস্টফিক্স-মেশিন যা ব্যাকরণ ছাড়াই মূল্যায়ন করে (অপারেন্ড-স্ট্যাক যেখানে JVM ও WebAssembly বাইটকোড আক্ষরিকভাবে চলে), দ্বি-বন্দনী ইতিহাস-প্রোটোকল যেখানে নতুন ভিজিট রিডু-টাইমলাইনকে ইচ্ছাকৃত হত্যা করে, আর বুক ফুঁড়ে-দেখা কল-ফ্রেম — পুনঃচালন-ঠিকানা, ফ্রেম-বাজেট, আর হারানো-বেস-কেস ময়নাতদন্ত যা প্রতি JS ডেভেলপার জীবদ্দশায় একবার করে। Stack Lab-এর ছয় দৃশ্য — থালা, ভালো বন্ধনী, ভাঙা বন্ধনী, RPN, কল-ফ্রেম, অভারফ্লো পতন — প্রতিটি বিধান দেখা-যায়। সেখান থেকেই খুলে যায় গভীর লেন: বন্ধনী-আদালত একক পপে-মিলানো-আচারে নেস্টিং প্রত্যয়ন করে; মনোটোন-ঘাট ও ন্যূনতম-চক্রান্ত উচ্ছেদ ও চরম-প্রশ্নের মূল্য দেয় অ্যামর্টাইজড O(1)-এ; ইনফিক্স-সন্ধি শান্টিং-ইয়ার্ডের মধ্য দিয়ে অপারেটর-উচ্চতা নিরীক্ষণ করে; আনডু-দুর্গ টাইমলাইন সামরিকীকৃত করে (জার্নাল-প্রথম, হত্যা-উপপাদ্য, দয়া-মিলন); ব্যাকট্র্যাক-অভিযান প্রমাণ করে অনুসন্ধান-স্মৃতি মেরুদণ্ড-মাপের আর ছাঁটাই-ই একমাত্র টেকসই অর্থনীতি; আর বন্দনী-দিগন্ত পুরো দেয়াল হেঁটে যায় — এক ব্যাকরণ, আট উপভাষা, তিন সিলকৃত ঋণ। ফিরে আসবেন পোর্টেবল সাক্ষরতা নিয়ে: নতুন রানটাইম দেখলেই প্রশ্ন করুন বন্দনী কোথায়, ক্রিয়া কী — স্থাপত্য নিজেই উত্তর দেবে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The discipline', bn: 'ধাপ ১ — শৃঙ্খলা' },
      items: [
        { en: 'Three verbs at one end; LIFO as order-dialect (lesson 1)', bn: 'একমুখে তিন ক্রিয়া; ক্রম-উপভাষা LIFO (লেসন ১)' },
        { en: 'Reversal as a free feature: undo, nesting, backtracking', bn: 'বিনামূল্যের ফিচার উল্টোরূপ: আনডু, নেস্টিং, ব্যাকট্র্যাকিং' },
        { en: 'Array-backed top=length vs chain-backed top=head', bn: 'অ্যারে-ভিত্তিক top=length বনাম শিকল-ভিত্তিক top=head' },
        { en: 'isEmpty ceremony before every peek/pop (lesson 1)', bn: 'প্রতি peek/pop-এর আগে isEmpty আচার (লেসন ১)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Failure physics', bn: 'ধাপ ২ — ব্যর্থতা-পদার্থবিদ্যা' },
      items: [
        { en: 'Underflow: the silent forgery family (undefined stamped valid)', bn: 'আন্ডারফ্লো: নীরব জালপরিবার (undefined বৈধ মুহুরে)' },
        { en: 'Mismatch: pop is a claim, partner comparison is the cross-exam', bn: 'মিসম্যাচ: পপ হলো দাবি, জুটি-তুলনাই জেরা' },
        { en: 'Overflow: budget exhaustion of a fixed region, not bad luck', bn: 'অভারফ্লো: নির্দিষ্ট অঞ্চলের বাজেট-সমাপ্তি, দুর্ভাগ্য নয়' },
        { en: 'Termination direction: name it or the machine speaks RangeError', bn: 'সমাপ্তি-দিক: নাম দিন, নইলে মেশিন বলবে RangeError' },
      ],
    },
    {
      title: { en: 'Stage 3 — Tray-run machines', bn: 'ধাপ ৩ — বন্দনী-চালিত মেশিন' },
      items: [
        { en: 'Postfix evaluation: tape + tray, zero grammar (lesson 2)', bn: 'পোস্টফিক্স-মূল্যায়ন: ফিতা + বন্দনী, শূন্য ব্যাকরণ (লেসন ২)' },
        { en: 'Shunting-yard: infix → postfix is itself one tray', bn: 'শান্টিং-ইয়ার্ড: ইনফিক্স → পোস্টফিক্স নিজেই এক বন্দনী' },
        { en: 'Two-tray history: visit murders the redo timeline (lesson 2)', bn: 'দ্বি-বন্দনী ইতিহাস: ভিজিট রিডু-টাইমলাইন খুন করে (লেসন ২)' },
        { en: 'Bracket validation: IOU trays with two-door ceremonies', bn: 'বন্ধনী-যাচাইকরণ: দ্বি-দরজা আচারের প্রতিশ্রুতি-বন্দনী' },
      ],
    },
    {
      title: { en: 'Stage 4 — The machine underneath', bn: 'ধাপ ৪ — তলানির মেশিন' },
      items: [
        { en: 'Frames = resumption contracts: locals + return addresses', bn: 'ফ্রেম = পুনঃচালন-চুক্তি: লোকাল + ফিরে-আসা ঠিকানা' },
        { en: 'call = push(PC)+jump, return = jump(pop) — read any trace', bn: 'কল = push(PC)+jump, return = jump(pop) — যেকোনো ট্রেস পড়ুন' },
        { en: 'Base-case autopsies: unreachable, wrong-sided, shadowed, mutual', bn: 'বেস-কেস ময়নাতদন্ত: অপ্রাপ্য, উল্টো-দিকে-ঘেরা, ছায়াচ্ছাদিত, মিউচুয়াল' },
        { en: 'Recursion → explicit loop over YOUR structure for deep inputs', bn: 'গভীর ইনপুটে রিকার্শন → আপনার কাঠামোর সুস্পষ্ট লুপ' },
      ],
    },
    {
      title: { en: 'Stage 5 — The deep lanes (lessons 3–6)', bn: 'ধাপ ৫ — গভীর লেন (লেসন ৩–৬)' },
      items: [
        { en: 'Bracket court: match-at-pop as the complete legality ceremony', bn: 'বন্ধনী-আদালত: পপে-মিলানো সম্পূর্ণ বৈধতা-আচার' },
        { en: 'Monotone pier: evict the dead, next-greater in O(1) amortized', bn: 'মনোটোন-ঘাট: মৃত উচ্ছেদ, O(1) অ্যামর্টাইজডে পরবর্তী-বৃহত্তর' },
        { en: 'Minimum cartel: paid aux-archives for constant-time extremes', bn: 'ন্যূনতম-চক্রান্ত: ধ্রুবক-সময়ের চরমে প্রদত্ত সহ-আর্কাইভ' },
        { en: 'Infix treaty: shunting-altitudes audited, associativity on lease', bn: 'ইনফিক্স-সন্ধি: শান্টিং-উচ্চতা নিরীক্ষিত, সাহচর্য ইজারায়' },
      ],
    },
    {
      title: { en: 'Stage 6 — Machines with memory-law (lessons 7–9)', bn: 'ধাপ ৬ — স্মৃতি-আইনবিশিষ্ট মেশিন (লেসন ৭–৯)' },
      items: [
        { en: 'Undo fortress: journal-first vow, murder-theorem, mercy coalescing', bn: 'আনডু-দুর্গ: জার্নাল-প্রথম-শপথ, হত্যা-উপপাদ্য, দয়া-মিলন' },
        { en: 'Backtrack expedition: spine minimal-memory, prune at the border', bn: 'ব্যাকট্র্যাক-অভিযান: মেরুদণ্ড-ন্যূনতম-স্মৃতি, সীমান্তে ছাঁটাই' },
        { en: 'Tray panorama: one grammar, eight dialects — walk any hub wall', bn: 'বন্দনী-দিগন্ত: এক ব্যাকরণ, আট উপভাষা — যেকোনো হাব-দেয়াল হাঁটুন' },
      ],
    },
  ],
  lessons: [lifoThinkingLesson, stackMachinesLesson, theBracketCourtLesson, theMonotonePierLesson, theMinimumCartelLesson, theInfixTreatyLesson, theUndoFortressLesson, theBacktrackExpeditionLesson, theTrayPanoramaLesson],
  reference: [
    {
      group: 'The three verbs',
      methods: [
        {
          name: 'push',
          signature: 'push(v) → top becomes v',
          params: { en: 'Lay a value on the only open end. Array home: a[length++] = v with an occasional doubling rescue nobody sees; chain home: insert-front, no rescues ever.', bn: 'মান রাখুন একমাত্র খোলা মুখে। অ্যারে-বাসায়: a[length++] = v, মাঝে মাঝে অদৃশ্য দ্বিগুণ-উদ্ধার; শিকল-বাসায়: সামনে-ইনসার্ট, উদ্ধার কখনো নয়।' },
          returns: { en: 'Amortized O(1) forever — one arithmetic hop, zero search.', bn: 'চিরকাল অ্যামর্টাইজড O(1) — এক পাটিগণিত-লাফ, শূন্য অনুসন্ধান।' },
          example: 's.push(x);',
        },
        {
          name: 'pop',
          signature: 'pop() → top value, removed',
          params: { en: 'Lift the topmost plate — the last arrival served first. MUST be preceded by the isEmpty courtesy, or the underflow family stamps forgeries as data.', bn: 'মাথার থালা তুলুন — শেষ আগমন, প্রথম পরিবেশন। আগে isEmpty আচার বাধ্যতামূলক, নইলে আন্ডারফ্লো-পরিবার জালকে ডেটা মুহুরে দেয়।' },
          returns: { en: 'The most recent un-consumed value, mirror-order guaranteed. O(1).', bn: 'সাম্প্রতিকতম অভোগ করা মান, আয়না-ক্রম গ্যারান্টিসহ। O(1)।' },
          example: 'if (s.length) { const top = s.pop(); }',
          mistake: { en: 'pop() on empty — null / undefined flows downstream and == comparisons rubber-stamp it valid. The signature failure of the entire stack canon.', bn: 'খালি বন্দনীতে pop() — null / undefined নিচে জোয়ার বইয়, আর == তুলনা তা বৈধ মুহুরে দেয়। সমগ্র স্ট্যাক-শাস্ত্রের স্বাক্ষরিত ব্যর্থতা।' },
        },
        {
          name: 'peek',
          signature: 'peek() → top value, kept',
          params: { en: 'Read the claim without releasing it — the only legal inspection this structure offers.', bn: 'ছাড়া না-দিয়ে দাবি পড়ুন — এই কাঠামোর আইনসম্মত একমাত্র পরিদর্শন।' },
          returns: { en: 'The top value with the stack unchanged. Same isEmpty courtesy required.', bn: 'স্ট্যাক অপরিবর্তিত রেখে মাথার মান। সেই একই isEmpty আচার বাধ্যতম।' },
          example: 'const top = s[s.length - 1];',
        },
      ],
    },
    {
      group: 'Machines on trays',
      methods: [
        {
          name: 'postfix evaluate',
          signature: 'number → push; op → pop rhs, pop lhs, push verdict',
          params: { en: 'Retirement: one-plate-left validates the whole expression; an empty tray at operators or plural plates at tape-end is malformed input.', bn: 'ভক্ষণ-পরীক্ষা: শেষে এক-থালা-থাকা সমগ্র রাশিকে বৈধ করে; অপারেটরে খালি বন্দনী বা ফিতা-শেষে বহু-থালা মানে ত্রুটিযুক্ত ইনপুট।' },
          returns: { en: 'The answer on the last remaining plate — grammar never once consulted.', bn: 'শেষ বাকি থালায় উত্তর — ব্যাকরণ একবারও দেখা হলো না।' },
          example: 'for (const t of tape) /\\d/.test(t) ? s.push(+t) : s.push(eval(`${s.pop()} ${t} ${s.pop()}`)) — read order right-hand first!',
        },
        {
          name: 'history (two trays)',
          signature: 'visit: back.push+forward.clear · back/forward: pop here, push there',
          params: { en: 'Three moves total. The forward tray is the graveyard that resurrection is built from; a fresh visit is its deliberate murder.', bn: 'মোট তিন ভঙ্গি। forward বন্দনী সেই সমাধিক্ষেত্র যেখান থেকে পুনরুত্থান গড়া; নতুন ভিজিট তার ইচ্ছাকৃত হত্যা।' },
          returns: { en: 'O(1) navigation in both directions of time — every browser, every editor, same machine.', bn: 'সময়ের দুই দিকেই O(1) নেভিগেশন — প্রতি ব্রাউজার, প্রতি এডিটর, একই মেশিন।' },
          example: 'const go = (url) => { back.push(cur); cur = url; fwd.length = 0; };',
        },
      ],
    },
    {
      group: 'The frame contract',
      methods: [
        {
          name: 'call',
          signature: 'push frame { params, locals, return-PC }; jump(callee)',
          params: { en: 'Caller pauses mid-expression; the frame guards the exact program-counter value where life resumes.', bn: 'কলার অর্ধ-রাশিতে বিরতি নেয়; ফ্রেম পাহারা দেয় ঠিক সেই প্রোগ্রাম-কাউন্টার-মান, যেখানে জীবন ফেরে।' },
          returns: { en: 'Any-function-calls-any-function on any machine — one invariant, all runtimes.', bn: 'যে-কোনো-ফাংশন-ডাকে-যে-কোনো-ফাংশন, যে-কোনো মেশিনে — এক অনবরত-সত্য, সব রানটাইম।' },
          example: 'fact(3) → ফ্রেম {n: 3, resume: caller-PC} পুশ → fact(2)-এ ঝাঁপ',
        },
        {
          name: 'return',
          signature: 'evaluate value; pop frame; jump(resumption address)',
          params: { en: 'The answers travel up exactly as the questions travelled down — reversed, orderly, inevitable.', bn: 'উত্তর চলে উপরে ঠিক যেভাবে প্রশ্ন নেমেছিল নিচে — উল্টো, সুশৃঙ্খল, অনিবার্য।' },
          returns: { en: 'Control handed to the guard’s address, books balanced push-for-pop by program’s end.', bn: 'নিয়ন্ত্রণ রক্ষীর ঠিকানায় হস্তান্তরিত, প্রোগ্রাম-শেষে খাতা পুশ-বনাম-পপ মিলে।' },
          example: 'return n * fact(n - 1); — গুণের অপেক্ষায় ফ্রেম, রায় এলে পপ',
          mistake: { en: 'A recursion with un-approaching arguments: skipping zero (n—2 from odd), guards placed downstream of the call, mutual ping-pong — the machine bills in RangeError.', bn: 'বেসের দিকে অগ্রসর-না-হওয়া আর্গুমেন্ট: শূন্য-লাফে-পার-হওয়া (বিজোড় থেকে n−2), কলের নিচপানে গার্ড, মিউচুয়াল পিং-পং — মেশিন RangeError-এ বিল দেয়।' },
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Postfix Calculator with a Ledger', bn: 'খাতাসহ পোস্টফিক্স ক্যালকুলেটর' },
      diff: 'beginner',
      desc: {
        en: 'Tokenizer → one-tray evaluator for + − * /, with the malformed-input verdicts (underflow mid-tape, plural plates at end) as first-class errors. Property tests: pushes equal pops before any operator, final depth exactly one, and the final plate numerically EQUALS an independent infix evaluator on a thousand random expressions.',
        bn: 'টোকেনাইজার → এক-বন্দনী মূল্যায়নকারী + − * /-এর জন্য, ত্রুটিপূর্ণ-ইনপুট রায় (মাঝপথে আন্ডারফ্লো, ফিতা-শেষে বহু থালা) প্রথম-শ্রেণির এরর হিসেবে। প্রপার্টি-টেস্ট: যেকোনো অপারেটরের আগে পুশ = পপ; শেষ গভীরতা ঠিক এক; আর চূড়ান্ত থালা হাজারটি এলোমেলো রাশিতে স্বাধীন ইনফিক্স-মূল্যায়নকারীর সঙ্গে সাংখ্যিক সমান।',
      },
    },
    {
      title: { en: 'Two-Tray Browser History', bn: 'দ্বি-বন্দনী ব্রাউজার-ইতিহাস' },
      diff: 'intermediate',
      desc: {
        en: 'visit/back/forward over two structures with the murder-on-visit law, plus a UI trace like the lab. Tests cover the graveyard: after back-visit, forward is provably empty forever; after back-forward-back, the trail answers in mirror order. Ship it as a tiny class with a max-size eviction policy you can argue for.',
        bn: 'দুই কাঠামোয় visit/back/forward, ভিজিটে-হত্যা বিধানসহ, ল্যাব-ধাঁচের UI ট্রেস। টেস্টে থাকবে সমাধিক্ষেত্র-প্রমাণ: back-visit-এর পর forward প্রমাণযোগ্যভাবে চিরকাল খালি; back-forward-back-এর পর পথ উত্তর দেয় আয়না-ক্রমে। ছোট ক্লাসে শিপ করুন, যুক্তিযুক্ত সর্বোচ্চ-আকার বিতাড়ন-নীতিসহ।',
      },
    },
    {
      title: { en: 'Explicit-Stack DFS vs Recursion', bn: 'রিকার্শন-বনাম সুস্পষ্ট-স্ট্যাক DFS' },
      diff: 'advanced',
      desc: {
        en: 'Implement directory-walking TWO ways — the recursive one-liner and your own explicit stack of path frames — and bench both at depth 50,000 (generated fixture). The recursive version must be allowed to die; your report names the exact frame budget killed it, then shows the explicit version finishing, with notes on which you would merge.',
        bn: 'ডিরেক্টরি-ভ্রমণ বানান দুইভাবে — রিকার্সিভ এক-লাইনি আর আপনার বানানো পাথ-ফ্রেমের সুস্পষ্ট স্ট্যাক — দুটোই গভীরতা ৫০,০০০-এ বেঞ্চ করুন (সৃষ্ট ফিক্সচারে)। রিকার্সিভ সংস্করণের মরতে-দেওয়া বাধ্যতামূলক; রিপোর্টে নাম থাকবে কোন ফ্রেম-বাজেট তাকে মেরেছে, তারপর সুস্পষ্ট সংস্করণ শেষ করবে — কোনটি মার্জ করবেন, তার টীকাসহ।',
      },
    },
  ],
  bestPractices: [
    { en: 'Name your order-dialect first: LIFO (stack), FIFO (queue), priority — the structure then names itself.', bn: 'আগে ক্রম-উপভাষার নাম: LIFO (স্ট্যাক), FIFO (কিউ), অগ্রাধিকার — তারপর কাঠামো নিজের নাম বলবে।' },
    { en: 'The isEmpty courtesy precedes EVERY peek/pop — no exceptions in reviews, ever.', bn: 'প্রতি peek/pop-এর আগে isEmpty আচার — রিভিউতে কোনো ব্যতিক্রম নেই, কখনোই না।' },
    { en: 'In validators: top is a claim; partner comparison is the cross-examination. Presence is never proof.', bn: 'ভ্যালিডেটরে: মাথা দাবি; জুটি-তুলনাই জেরা। উপস্থিতি কখনো প্রমাণ নয়।' },
    { en: 'Every recursion must name its termination direction — a quantity that strictly approaches base on every call.', bn: 'প্রতি রিকার্শনের সমাপ্তি-দিক নামকৃত থাকবে — কোনো রাশি প্রতি কলে কঠোরভাবে বেসের দিকে এগিয়ে যায়।' },
    { en: 'Deep inputs → explicit stacks over your own structure; heap budgets are yours, frame budgets are not.', bn: 'গভীর ইনপুট → নিজের কাঠামোর সুস্পষ্ট স্ট্যাক; হিপ-বাজেট আপনার, ফ্রেম-বাজেট নয়।' },
    { en: 'Two trays for two-way time: undos that must redo need the second tray AND the murder-on-write law.', bn: 'দ্বিমুখী সময়ে দুই বন্দনী: রিডুযোগ্য আনডুতে লাগে দ্বিতীয় বন্দনী এবং লেখায়-হত্যা বিধান।' },
  ],
  interview: [
    {
      q: { en: 'What is a stack and where is it actually used — beyond textbooks?', bn: 'স্ট্যাক কী আর পাঠ্যবই ছাড়িয়ে আসলে কোথায় ব্যবহৃত হয়?' },
      a: {
        en: 'A stack is an access discipline: three verbs, one end. That restriction buys LIFO — free reversal — and O(1) operations because touching an end is arithmetic, not search. The textbook uses are cornerstones: undo/redo (two trays), expression parsing and bracket validation (IOU trays), DFS and backtracking (the tray as memory of choices), call stacks (frames as resumption contracts). The answer that separates seniors: the machine YOU are running on is a stack machine — JVM bytecode and WebAssembly are specified on operand stacks, your browser history is a two-tray protocol, and every paused frame in your debugger is a resumption contract literally peekable from DevTools. I choose stacks whenever the problem speaks the most-recent-first dialect and name that dialect out loud before choosing.',
        bn: 'স্ট্যাক হলো অ্যাক্সেস-শৃঙ্খলা: তিন ক্রিয়া, এক মুখ। সেই বাধায় মেলে LIFO — বিনামূল্যের উল্টোরূপ — আর O(1) ক্রিয়া, কারণ মুখ-স্পর্শ পাটিগণিত, খোঁজ নয়। পাঠ্যবইয়ের ব্যবহার স্তম্ভস্তম্ভ: undo/redo (দুই বন্দনী), রাশি-পার্সিং ও বন্ধনী-যাচাই (প্রতিশ্রুতি-বন্দনী), DFS ও ব্যাকট্র্যাকিং (সিদ্ধান্ত-স্মৃতির বন্দনী), কল-স্ট্যাক (পুনঃচালন-চুক্তির ফ্রেম)। প্রবীণ-পৃথককারী উত্তর: যে মেশিনে আপনি চলছেন সে-ই স্ট্যাক-মেশিন — JVM বাইটকোড ও WebAssembly অপারেন্ড-স্ট্যাকে স্পেসিফাইড, ব্রাউজার-ইতিহাস দ্বি-বন্দনী প্রোটোকল, আর ডিবাগারের থামা প্রতি ফ্রেম DevTools থেকে আক্ষরিক peek-যোগ্য পুনঃচালন-চুক্তি। সাম্প্রতিকতম-আগে উপভাষা বললেই আমি স্ট্যাক বাছি — উপভাষার নাম জোরে বলেই।',
      },
    },
    {
      q: { en: 'Validate balanced brackets — walk me through it and its edge cases.', bn: 'সুষম বন্ধনী যাচাই করুন — পুরোটা প্রান্তিক-বাক্সসহ।' },
      a: {
        en: 'One tray of IOUs: openers push as debts; on each closer I perform the two ceremonies — isEmpty check (underflow door) and partner comparison via a mate table (mismatch door) — then pop the honoured debt. End of tape requires an EMPTY tray; leftovers are unclosed debts and fail the audit. Two controlled failures demonstrate the design: popping blindly accepts “{ url: )” (mismatch family: debts cashed by wrong closers) and popping unguarded lets a stray closer cash nothing and downstream truth suffer (underflow family). Complexity: O(n) time, O(depth) space — provably minimal, because the nesting depth itself must be remembered somewhere. Interviewer bonus points: name the step at which you would plug it into a real parser (token stream, before AST work — validation is a protocol, not a transformation).',
        bn: 'প্রতিশ্রুতির এক বন্দনী: খোলা বন্ধনী ঋণ হয়ে পুশ; প্রতি বন্ধে দুই আচার — isEmpty (আন্ডারফ্লো-দরজা) আর mate-ছকে জুটি-তুলনা (মিসম্যাচ-দরজা) — তারপর পরিশোধিত ঋণ পপ। ফিতা-শেষে চাই খালি বন্দনী; বাকি থাকলে অবন্ধ ঋণ, নিরীক্ষায় ফেল। দুই নিয়ন্ত্রিত ব্যর্থতা নকশা প্রদর্শন করে: অন্ধ-পপ মেনে নেয় “{ url: )” (মিসম্যাচ পরিবার: ভুল বন্ধরা ঋণ তুলেছে), আর বেরক্ষহীন পপ পরিত্যাতা বন্ধ-বন্ধনীকে শূন্য ঋণ পরিশোধ করিয়ে নিচে সত্য ধ্বংস করে (আন্ডারফ্লো পরিবার)। জটিলতা: সময় O(n), স্থান O(গভীরতা) — প্রমাণযোগ্য ন্যূনতম, কারণ নেস্টিং-গভীরতা কোথাও না কোথাও ধরেই রাখতে হবে। বোনাস: আসল পার্সারে কোন ধাপে যুক্ত করবেন (টোকেন-ধারায়, AST-কর্মের আগে — যাচাই হলো প্রোটোকল, রূপান্তর নয়)।',
      },
    },
    {
      q: { en: 'Explain stack overflow and how you would hunt one in production.', bn: 'স্ট্যাক অভারফ্লো ব্যাখ্যা করুন, আর প্রোডাকশনে কীভাবে শিকার করবেন।' },
      a: {
        en: 'Overflow is budget exhaustion, not bad luck: the runtime reserves a FIXED region for frames; each call rents bytes; a recursion whose termination direction is unnamed or unreachable never stops renting, and the ledger can only be balanced by the machine itself — loudly. Hunting it: first read the trace top-down — self-similar repeated frames are the signature; then ask the one question — “on every path, does some argument STRICTLY approach a checked base?” — and run the four autopsies: base never reached (argument does not shrink), base wrong-sided (step size skips the terminating value), base shadowed (guard placed after the call), mutual recursion (ping-pong past both guards). The fix is never “raise the limit”: either name-and-verify the termination direction, or convert to an explicit loop over YOUR datastructure, whose heap budget is yours to manage. I close with the system fact: on real hardware the stack grows DOWNWARD — knowing which way frames move is the difference between reading a core dump and staring at one.',
        bn: 'অভারফ্লো হলো বাজেট-সমাপ্তি, দুর্ভাগ্য নয়: রানটাইম ফ্রেমের জন্য নির্দিষ্ট অঞ্চল সংরক্ষণ করে; প্রতি কল ভাড়া নেয় বাইট; যে রিকার্শনের সমাপ্তি-দিক নামহীন বা অপ্রাপ্য সে ভাড়া-নেওয়া থামায় না, আর খাতা মেলাতে হয় মেশিনকেই — সশব্দে। শিকার: আগে ট্রেস পড়ুন উপরে-নিচে — আত্মসদৃশ পুনরাবৃত্ত ফ্রেমই স্বাক্ষর; তারপর এক প্রশ্ন — “প্রতি পথে কোনো আর্গুমেন্ট কঠোরভাবে যাচাইকৃত বেসের দিকে যাচ্ছে তো?” — চালান চার ময়নাতদন্ত: বেসে পৌঁছায় না (আর্গুমেন্ট কমে না), ভুল-দিকে ঘেরা বেস (ধাপ সমাপ্তি-মান লাফে পেরিয়ে যায়), ছায়াচ্ছাদিত বেস (গার্ড কলের পরে), মিউচুয়াল রিকার্শন (দুই গার্ড পেরিয়ে পিং-পং)। প্রতিকার কখনো “সীমা বাড়ানো” নয়: হয় নামকরণ-যাচাই করা সমাপ্তি-দিক, নয়তো আপনার কাঠামোর সুস্পষ্ট লুপ — হিপ-বাজেট যার আপনারই নিয়ন্ত্রণে। শেষে সিস্টেম-তথ্য: আসল হার্ডওয়্যারে স্ট্যাক বাড়ে নিচের দিকে — ফ্রেম কোন দিকে যায় জানাটাই কোর-ডাম্প পড়া আর একদৃষ্টে চেয়ে-থাকার মাঝের পার্থক্য।',
      },
    },
    {
      q: { en: 'Queue from two stacks — the classic. Why does it even work?', bn: 'দুই স্ট্যাকে কিউ — ক্লাসিক। কাজ করে-ই বা কেন?' },
      a: {
        en: 'Because two reversals compose to identity. Push into the inbox tray (LIFO); when the outbox tray is empty, pour inbox into outbox — the pour reverses the order, so outbox-pop serves oldest-first: LIFO ∘ LIFO = FIFO. The move is lazy ON PURPOSE: pouring happens only when outbox runs dry, so pouring costs are amortized across a crowd of cheap pushes and peeks — dequeues stay amortized O(1). The invariants you recite under pressure: outbox-empty ⇒ pour; outbox-nonempty ⇒ never pour (or order breaks); and the sum of both trays IS the queue, so size checks go to the couple, not the individual. It is also the readable proof-of-concept that disciplines compose: today’s stacks, tomorrow’s queues, all built from verbs you already trust.',
        bn: 'কারণ দুই উল্টোরূপের সংযোজন হলো অভেদ। inbox বন্দনীতে পুশ (LIFO); outbox বন্দনী খালি হলে inbox ঢেলে দিন outbox-এ — ঢালাই উল্টে দেয় ক্রম, তাই outbox-পপ পরিবেশন করে পুরনো-আগে: LIFO ∘ LIFO = FIFO। ঢালাই অলস ইচ্ছাকৃতভাবে: ঘটে কেবল outbox শুকিয়ে গেলে, তাই ঢালাই-খরচ অ্যামর্টাইজড হয় সস্তা-পুশ-পিক ভিড়ে — ডিকিউ থাকে অ্যামর্টাইজড O(1)। চাপে আবৃতি-যোগ্য অনবরত-সত্য: outbox খালি ⇒ ঢালাই; outbox অখালি ⇒ কখনোই ঢালাই নয় (নইলে ক্রম ভাঙে); আর দুই বন্দনীর সমষ্টি-ই কিউ, তাই আকার-প্রশ্ন যায় দম্পতির কাছে, ব্যক্তির নয়। পাঠযোগ্য ধারণা-প্রমাণও এটি: শৃঙ্খলা সংযুক্ত হয় — আজকের স্ট্যাক, আগামীকালের কিউ, সব নির্মিত বিশ্বস্ত ক্রিয়া দিয়ে।',
      },
    },
  ],
  realWorld: [
    { en: 'Open DevTools, pause on any breakpoint, expand the Call Stack panel: you are peeking at the machine’s own tray — frames are real objects to the runtime, not metaphors.', bn: 'DevTools খুলুন, যেকোনো ব্রেকপয়েন্টে থামুন, Call Stack প্যানেল খুলুন: আপনি মেশিনের নিজের বন্দনীতে peek করছেন — ফ্রেম রানটাইমের কাছে বাস্তব অবজেক্ট, রূপক নয়।' },
    { en: 'javap -c AnyClass.class prints bytecode like bipush 2; bipush 3; imul — postfix, operand-stack roles, since 1995. WebAssembly repeated the same architecture in 2017.', bn: 'javap -c AnyClass.class ছাপে bipush 2; bipush 3; imul — পোস্টফিক্স, অপারেন্ড-স্ট্যাক ভূমিকা, ১৯৯৫ থেকে। WebAssembly ২০১৭-এ সেই একই স্থাপত্য পুনরাবৃত্তি করেছে।' },
    { en: 'Every “unsend email within 30 seconds” feature is timer + tray: the send is delayed, the tray holds the abortable future, undo pops it before dispatch.', bn: 'প্রতি “৩০ সেকেন্ডের মধ্যে ইমেইল-আনডু” ফিচার হলো টাইমার + বন্দনী: প্রেরণ বিলম্বিত, বন্দনী ধরে প্রত্যাহারযোগ্য ভবিষ্যৎ, প্রেরণের আগে আনডু তা পপ করে।' },
    { en: 'Ctrl+Z history files in editors spill tray state to disk — the discipline survives reboots; your undo chain is more durable than most databases’ promises.', bn: 'এডিটরের Ctrl+Z ইতিহাস-ফাইল বন্দনী-অবস্থা ডিস্কে যায় — শৃঙ্খলা টিকে থাকে রিবুট-জুড়ে; আপনার আনডু-শিকল বেশিরভাগ ডেটাবেসের প্রতিশ্রুতির চেয়ে টেকসই।' },
  ],
};
