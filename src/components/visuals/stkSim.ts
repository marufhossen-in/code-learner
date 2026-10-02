/** Stack Lab engine: pure step generation for the six canonical stack scenes.
 *  A stack here is a plain array (index 0 = BOTTOM, last = TOP) — steps are
 *  deterministic snapshots plus the operation that produced them, so the UI
 *  can render plates, bracket scripts, RPN tapes, and call frames from one type.
 */

export interface StkStep {
  stack: string[];             // bottom → top
  pushed?: string;
  popped?: string[];           // one for pop(), two for RPN operators
  ret?: string;                // a value handed back to the caller (call-stack scenes)
  tokens?: string[];           // script being consumed (brackets / rpn scenes)
  cursor?: number;             // index into tokens currently being read
  error?: 'underflow' | 'mismatch' | 'overflow';
  note: { en: string; bn: string };
}

export type StkKind = 'plates' | 'brackets-ok' | 'brackets-bad' | 'rpn' | 'callstack' | 'overflow';

interface B {
  stack: string[];
  steps: StkStep[];
  tokens?: string[];
}

function snap(b: B, s: Omit<StkStep, 'stack' | 'tokens'> & { stack?: string[] }): void {
  b.steps.push({
    stack: [...(s.stack ?? b.stack)],
    tokens: b.tokens,
    pushed: s.pushed,
    popped: s.popped,
    ret: s.ret,
    cursor: s.cursor,
    error: s.error,
    note: s.note,
  });
}

type StkPayload = { en: string; bn: string } | { note: { en: string; bn: string }; ret?: string; cursor?: number };

function push(b: B, v: string, payload: StkPayload, extra?: { ret?: string; cursor?: number }): void {
  const note = 'note' in payload ? payload.note : payload;
  const wrapped = 'note' in payload ? { ret: payload.ret, cursor: payload.cursor } : {};
  b.stack.push(v);
  snap(b, { pushed: v, note, ...wrapped, ...extra });
}

function pop(b: B, payload: StkPayload, extra?: { ret?: string; cursor?: number }): void {
  const note = 'note' in payload ? payload.note : payload;
  const wrapped = 'note' in payload ? { ret: payload.ret, cursor: payload.cursor } : {};
  const v = b.stack.pop()!;
  snap(b, { popped: [v], note, ...wrapped, ...extra });
}

const OPENERS = new Set(['(', '[', '{']);

function plates(): StkStep[] {
  const b: B = { stack: [], steps: [] };
  snap(b, {
    note: {
      en: 'An empty stack: a spring-loaded tray with zero plates. Only one end of this datastructure is open for business — the top.',
      bn: 'খালি স্ট্যাক: স্প্রিং-যুক্ত বন্দনী, শূন্য থালা। এই ডেটা-কাঠামোর মাত্র এক মুখ খোলা — সার্ভিসের জন্য কেবল উপরের মাথাটা।',
    },
  });
  const menu = ['mango', 'guava', 'lychee', 'papaya'];
  for (const v of menu) {
    push(b, v, {
      en: `push(${v}) — the new plate presses the old ones down one notch. Nobody else’s position changed; only “top” moved.`,
      bn: `push(${v}) — নতুন থালা পুরনোগুলোকে এক ধাপ নিচে চাপে দিল। আর কারও জায়গা বদলাল না; সরাল কেবল “top” আঙুলটি।`,
    });
  }
  pop(b, {
    en: 'pop() removes papaya — the LAST arrival leaves FIRST. That is the entire law of the stack, in one frame.',
    bn: 'pop() তুলে নিল papaya — শেষে যে এসেছে সে-ই আগে যায়। পুরো স্ট্যাক-বিধান এই এক ফ্রেমে।',
  });
  pop(b, { en: 'pop() again: lychee leaves. The tray remembers nothing but order — no search, no index, no questions.', bn: 'আবার pop(): lychee চলে গেল। বন্দনী কিছুই মনে রাখে না, কেবল ক্রম — খোঁজ নেই, ইনডেক্স নেই, প্রশ্ন নেই।' });
  pop(b, { en: 'pop(): guava. Whatever you stacked is coming back in exact mirror order — LIFO is reversal with manners.', bn: 'pop(): guava। যা-ই সাজিয়েছিলেন, ফিরছে হুবহু আয়না-ক্রমে — LIFO হলো শিষ্টাচার-সম্পন্ন উল্টে-দেওয়া।' });
  pop(b, { en: 'pop(): mango, the first plate placed is the last plate served. The tray is empty again.', bn: 'pop(): mango — প্রথমে রাখা থালাই শেষে উঠল। বন্দনী আবার খালি।' });
  snap(b, {
    error: 'underflow',
    note: {
      en: 'pop() on an empty tray — UNDERFLOW. There is no plate to authorise, and in real code this is the crash you only meet in demos. peek/pop must always answer: “is there anything here?” first.',
      bn: 'খালি বন্দনীতে pop() — আন্ডারফ্লো। অনুমোদনের মতো কোনো থালাই নেই, আর আসল কোডে এই ক্র্যাশই শুধু ডেমোতেই দেখা দেয়। peek/pop-এর প্রথম উত্তর সবসময়: “এখানে কিছু আছে তো?”',
    },
  });
  return b.steps;
}

function brackets(src: string, ok: boolean): StkStep[] {
  const tokens = src.split('');
  const b: B = { stack: [], steps: [], tokens };
  snap(b, {
    cursor: 0,
    note: {
      en: `The validator’s tape: “${src}”. Rule: openers get stacked as IOUs; every closer must cash the IOU on top.`,
      bn: `ভ্যালিডেটরের ফিতা: “${src}”। নিয়ম: খোলা বন্ধনী জমা হয় প্রতিশ্রুতি হিসেবে; প্রতি বন্ধ-বন্ধনী তুলে নেয় top-এর প্রতিশ্রুতি।`,
    },
  });
  const mate: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (OPENERS.has(t)) {
      push(b, t, {
        cursor: i,
        note: {
          en: `read “${t}” — an opener owes a debt. push(): the stack now remembers who must be closed next.`,
          bn: `পড়া হলো “${t}” — খোলা বন্ধনী ঋণ রেখে গেল। push(): স্ট্যাক এখন মনে রাখে পরে কাকে বন্ধ করতে হবে।`,
        },
      });
    } else {
      const top = b.stack[b.stack.length - 1];
      if (top === mate[t]) {
        pop(b, {
          cursor: i,
          note: {
            en: `read “${t}” — and top is “${top}”, its exact partner. Debt honoured: pop, move on.`,
            bn: `পড়া হলো “${t}” — আর top “${top}”, হুবহু তার জুটি। ঋণ পরিশোধিত: pop, এগিয়ে যান।`,
          },
        });
      } else {
        snap(b, {
          cursor: i,
          error: 'mismatch',
          note: {
            en: `read “${t}” — but top is “${top ?? '∅'}”. The closer cashes the WRONG debt: nesting was broken somewhere upstream. Return false immediately; nothing below can repair this.`,
            bn: `পড়া হলো “${t}” — কিন্তু top “${top ?? '∅'}”। বন্ধ-বন্ধনী তুলতে গেল ভুল ঋণ: কোথাও ওপরে নেস্টিং ভেঙে গেছে। এখনই return false; নিচের কেউ এটা মেরামত করতে পারে না।`,
          },
        });
        return b.steps;
      }
   }
  }
  snap(b, {
    cursor: tokens.length,
    note: ok
      ? { en: 'Tape finished, tray empty: every debt was honoured in exact reverse order — valid. (An empty tray at the end is the second half of the proof.)', bn: 'ফিতা শেষ, বন্দনী খালি: প্রতি ঋণ হুবহু বিপরীত ক্রমে পরিশোধিত — বৈধ। (শেষে খালি বন্দনী-ই প্রমাণের দ্বিতীয় ভাগ।)' }
      : { en: 'unreachable', bn: 'অপ্রাপ্য' },
  });
  return b.steps;
}

function rpn(): StkStep[] {
  const tokens = ['2', '3', '4', '*', '+'];
  const b: B = { stack: [], steps: [], tokens };
  snap(b, {
    cursor: 0,
    note: {
      en: 'Postfix tape: 2 3 4 * +. No parentheses, no precedence table — the stack IS the grammar. Numbers push; operators eat the top two, push their verdict.',
      bn: 'পোস্টফিক্স-ফিতা: 2 3 4 * +। বন্ধনী নেই, অগ্রাধিকার-ছক নেই — স্ট্যাক-ই ব্যাকরণ। সংখ্যা পুশ; অপারেটর খায় উপরের দুটো, পুশ করে রায়।',
    },
  });
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (/^\d+$/.test(t)) {
      push(b, t, {
        cursor: i,
        note: { en: `read ${t} — a number: push. The tray is now a phrase waiting for its verb.`, bn: `পড়া হলো ${t} — সংখ্যা: push। বন্দনী এখন একটি বাক্যাংশ, ক্রিয়ার প্রতীক্ষায়।` },
      });
    } else {
      const rhs = b.stack.pop()!;
      const lhs = b.stack.pop()!;
      snap(b, {
        cursor: i,
        popped: [rhs, lhs],
        note: {
          en: `read “${t}” — an operator eats TWO plates: ${lhs} and ${rhs}. Order matters: the deeper one is the left operand.`,
          bn: `পড়া হলো “${t}” — অপারেটর খায় দুই থালা: ${lhs} আর ${rhs}। ক্রম মানে রাখে: গভীরতরটি-ই বাম অপারেন্ড।`,
        },
      });
      const val = t === '*' ? Number(lhs) * Number(rhs) : Number(lhs) + Number(rhs);
      push(b, String(val), {
        cursor: i,
        note: {
          en: `${lhs} ${t} ${rhs} = ${val} — the verdict goes back ON TOP as a plain number, ready to be eaten by the next operator.`,
          bn: `${lhs} ${t} ${rhs} = ${val} — রায় ফিরে গেল একদম উপরে সরল সংখ্যা হয়ে, পরের অপারেটরের ভক্ষ্যের জন্য প্রস্তুত।`,
        },
      });
    }
  }
  snap(b, {
    cursor: tokens.length,
    note: {
      en: 'Tape empty, exactly one plate left: 14 = 2 + (3 × 4). Postfix machines (JVM bytecode, Forth, printer languages) run entire civilizations on this discipline.',
      bn: 'ফিতা খালি, ঠিক একটি থালা বাকি: 14 = 2 + (3 × 4)। পোস্টফিক্স-মেশিন (JVM বাইটকোড, Forth, প্রিন্টার-ভাষা) এই শৃঙ্খলাতেই চালায় সভ্যতা।',
    },
  });
  return b.steps;
}

function callstack(): StkStep[] {
  const b: B = { stack: [], steps: [] };
  snap(b, {
    note: {
      en: 'The runtime’s own stack — the one your program is standing on right now. Every function call pushes a frame; every return pops it. Recursion is just this, with self-confidence.',
      bn: 'রানটাইমের নিজস্ব স্ট্যাক — যার ওপর আপনার প্রোগ্রাম এই মুহূর্তে দাঁড়িয়ে। প্রতি ফাংশন-কল পুশ করে ফ্রেম; প্রতি return পপ করে। রিকার্শন হলো এরই আত্মবিশ্বাসী রূপ।',
    },
  });
  push(b, 'fact(3): awaiting fact(2)', {
    en: 'call fact(3) → push a frame holding n=3 AND the resume address. The function pauses mid-sentence: “3 × …”.',
    bn: 'কল fact(3) → পুশ ফ্রেম, ভেতরে n=3 আর ফিরে-আসার ঠিকানা। ফাংশন বাক্যের মাঝেই থামল: “3 × …”।',
  });
  push(b, 'fact(2): awaiting fact(1)', {
    en: 'call fact(2) → another frame on top. The burp of unfinished business grows DOWNWARD, newest on top.',
    bn: 'কল fact(2) → আরেক ফ্রেম উপরে। অসমাপ্ত কাজের স্তূপ নিচের দিকে বাড়ে, নতুনতম উপরে।',
  });
  push(b, 'fact(1): base case!', {
    en: 'call fact(1) → BASE CASE reached: no more questions to ask. The frame that stops asking is the one that lets everyone go home.',
    bn: 'কল fact(1) → পৌঁছে গেল বেস-কেস: আর কোনো প্রশ্নই করার নেই। যে ফ্রেম প্রশ্ন করা বন্ধ করে, সে-ই সবাইকে ঘরে যেতে দেয়।',
  });
  pop(b, {
    en: 'fact(1) returns 1. Frame popped; life resumes exactly where the caller paused — that resume address in the frame below was its whole job.',
    bn: 'fact(1) ফেরত দিল 1। ফ্রেম পপ; জীবন শুরু হুবহু সেখানে যেখানে কলার থেমেছিল — নিচের ফ্রেমের ফিরে-আসা ঠিকানাটাই ছিল তার সারা পেশা।',
  }, { ret: '1' });
  pop(b, {
    en: 'fact(2) computes 2 × 1 = 2, returns, popped. The answers travel UP exactly as the questions travelled DOWN — reversed, orderly, inevitable.',
    bn: 'fact(2) হিসাব করে 2 × 1 = 2, ফেরত, পপ। উত্তর যায় উপরে তেমনভাবেই যেমন প্রশ্ন নেমেছিল নিচে — উল্টো, সুশৃঙ্খল, অনিবার্য।',
  }, { ret: '2' });
  pop(b, {
    en: 'fact(3) computes 3 × 2 = 6, returns, popped. The tray is empty and the program stands on solid ground again.',
    bn: 'fact(3) হিসাব করে 3 × 2 = 6, ফেরত, পপ। বন্দনী খালি, প্রোগ্রাম আবার শক্ত মাটিতে।',
  }, { ret: '6' });
  snap(b, {
    note: {
      en: 'Exactly as many pops as pushes — the runtime’s books always balance. The moment they can’t (a call with no base case), you get the overflow scene next door.',
      bn: 'পুশ যতটি, পপ হুবহু ততটি — রানটাইমের হিসাব সবসময় মেলে। যেদিন মেলে না (বেস-কেসহীন কল), পাশের দরজায় ফিলে অভারফ্লো-দৃশ্যটি।',
    },
  });
  return b.steps;
}

function overflow(): StkStep[] {
  const b: B = { stack: [], steps: [] };
  const CAP = 12;
  snap(b, {
    note: {
      en: 'function recurse() { recurse(); } — a question that asks itself forever. No base case, so nothing ever arrives to let a frame retire.',
      bn: 'function recurse() { recurse(); } — এমন প্রশ্ন যা নিজেকেই করে চিরদিন। বেস-কেস নেই, ফলে কোনো ফ্রেম অবসরের অনুমতি পাওয়ার আগে কিছুই পৌঁছায় না।',
    },
  });
  for (let d = 1; d <= CAP; d++) {
    push(b, `recurse() · depth ${d}`, {
      en: `push frame ${d} — a few bytes of frame (locals, return address) per call. Each looks cheap; the pile is the bill.`,
      bn: `ফ্রেম ${d} পুশ — কলপ্রতি কয়েক বাইট (লোকাল, ফিরে-আসা ঠিকানা)। প্রতিটা তুচ্ছ মনে হয়; স্তূপটাই আসল বিল।`,
    });
  }
  snap(b, {
    error: 'overflow',
    note: {
      en: `Depth ${CAP} and counting — the OS reserved a FIXED region for this pile, and the pile just outgrew its land. STACK OVERFLOW / RangeError: Maximum call stack size exceeded. The fix is never “bigger stack”: it’s a base case, or an explicit iterative loop.`,
      bn: `গভীরতা ${CAP}, গোনা চলছেই — OS এই স্তূপের জন্য নির্দিষ্ট জমি বরাদ্দ করে, আর স্তূপ ঠিক জমির বাইরে হলো। স্ট্যাক অভারফ্লো / RangeError: Maximum call stack size exceeded। প্রতিকার কখনোই “বড় স্ট্যাক” নয়: বেস-কেস, নয়তো সুস্পষ্ট ইটারেটিভ লুপ।`,
    },
  });
  return b.steps;
}

/** Deterministic step list for one stack scene. */
export function stackSteps(kind: StkKind): StkStep[] {
  switch (kind) {
    case 'plates': return plates();
    case 'brackets-ok': return brackets('({[]})', true);
    case 'brackets-bad': return brackets('({[}])', false);
    case 'rpn': return rpn();
    case 'callstack': return callstack();
    case 'overflow': return overflow();
  }
}
