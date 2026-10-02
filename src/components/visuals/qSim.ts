/** Queue Lab engine: pure step generation for the four canonical queue scenes
 *  (fair line, ring buffer, two-stack queue, priority bargain).
 *  One step type, scenes fill the fields they own:
 *    line      → queue (front→back), label chips
 *    ring      → slots + head/tail (+ wrapped flag), queue kept as logical mirror
 *    twostack  → inbox/outbox (+ pour moves), queue kept as logical mirror
 *    priority  → queue of "name pri=n" labels, dequeues pick max pri
 */

export interface QStep {
  queue: string[];                 // logical FIFO order: front at index 0
  enqueued?: string;
  dequeued?: string;
  slots?: (string | null)[];       // ring scene only
  head?: number;
  tail?: number;
  wrapped?: boolean;               // ring: tail jumped from end back to 0
  inbox?: string[];                // twostack scene (bottom→top)
  outbox?: string[];
  pourFrom?: string;               // twostack: value being poured this step
  error?: 'underflow' | 'overflow';
  note: { en: string; bn: string };
}

export type QKind = 'line' | 'ring' | 'twostack' | 'priority';

interface B {
  steps: QStep[];
  push: (s: Omit<QStep, 'queue'> & { queue?: string[] }) => void;
}

function mkB(): B & { q: string[] } {
  const b = {
    q: [] as string[],
    steps: [] as QStep[],
  };
  return {
    q: b.q,
    steps: b.steps,
    push(s) {
      b.steps.push({ queue: [...b.q], ...s });
    },
  };
}

function line(): QStep[] {
  const b = mkB();
  b.push({
    note: {
      en: 'An empty queue: two doors, one strictly marked IN, one OUT — and a line between them held together by nothing but fairness.',
      bn: 'খালি কিউ: দুই দরজা, একটি কঠোরভাবে চিহ্নিত প্রবেশ, আরেক বহির্গমন — আর মাঝের সারিটি টিকে আছে কেবল ন্যায়বিচারের লাগামে।',
    },
  });
  const names = ['mango', 'guava', 'lychee', 'papaya'];
  const enqNotes = [
    { en: 'enqueue(mango) — first through the IN door, first in line. Nobody skips; the queue remembers order as law.', bn: 'enqueue(mango) — প্রবেশ দরজা দিয়ে প্রথম, সারিতেও প্রথম। টান বা চাপ কেউ মানে না; কিউ মনে রাখে ক্রমকে আইন মনে।' },
    { en: 'enqueue(guava) joins BEHIND mango — arrivals always enter at the back, no matter how important they feel.', bn: 'enqueue(guava) দাঁড়াল mango-এর পেছনে — আগমন সবসময় ঢোকে সারির পেছন দিয়ে, নিজেকে যতই গুরুত্বপূর্ণ মনে করুক।' },
    { en: 'enqueue(lychee). The line is a promise now: “serve us in the order we suffered the wait.”', bn: 'enqueue(lychee)। সারিটা এখন প্রতিশ্রুতি: “যে ক্রমে আমরা অপেক্ষা সইছি, সে ক্রমেই পরিবেশন।”' },
    { en: 'enqueue(papaya). Four in line, one door in front. The FIFO dialect is fully spoken.', bn: 'enqueue(papaya)। সারিতে চারজন, সামনে এক দরজা। FIFO উপভাষা পুরোদমে রটল।' },
  ];
  names.forEach((v) => {
    b.q.push(v);
    b.push({ enqueued: v, note: enqNotes[names.indexOf(v)] });
  });
  for (const v of names) {
    b.q.shift();
    const i = names.indexOf(v);
    b.push({
      dequeued: v,
      note: i === 0
        ? { en: 'dequeue() serves mango — FIRST in, FIRST out. Compare the stack scene: same four plates, opposite destiny.', bn: 'dequeue() পরিবেশন করল mango — প্রথমে এলো, প্রথমে গেল। স্ট্যাক-দৃশ্যের সঙ্গে তুলনা করুন: সেই একই চার থালা, বিপরীত ভাগ্য।' }
        : i === names.length - 1
          ? { en: 'dequeue(): papaya — the longest waiter finally leaves. The queue kept its word with zero data loss.', bn: 'dequeue(): papaya — সবচেয়ে বেশি অপেক্ষাকারী অবশেষে চলে গেল। কিউ তার কথা রাখল, শূন্য তথ্য-ক্ষতিতে।' }
          : { en: `dequeue(): ${v}. The front moves forward; nobody physically shifts — only pointers walk in a real implementation.`, bn: `dequeue(): ${v}। সারির মাথা এগোল; কেউ শারীরিক সড়ে না — আসল বাস্তবায়নে চলে কেবল পয়েন্টার।` },
    });
  }
  b.push({
    error: 'underflow',
    note: {
      en: 'dequeue() on an empty line — UNDERFLOW, the queue twin of the stack’s plague: nobody is waiting, nobody can be served. isEmpty first, always.',
      bn: 'খালি সারিতে dequeue() — আন্ডারফ্লো, স্ট্যাকের সঙ্কটের কিউ-যমজ: অপেক্ষাকারী নেই, পরিবেশনযোগ্যও নেই। আগে isEmpty, সবসময়।',
    },
  });
  return b.steps;
}

function ring(): QStep[] {
  const CAP = 5;
  const slots: (string | null)[] = Array(CAP).fill(null);
  let head = 0;
  let tail = 0;
  const b = mkB();
  const snap = (extra: Partial<QStep>, note: { en: string; bn: string }) =>
    b.push({ slots: [...slots], head, tail, note, ...extra });
  snap(
    {},
    {
      en: 'A RING buffer: five fixed slots laid in a circle. head marks the oldest citizen; tail marks the next free chair. Memory never grows — citizens rotate.',
      bn: 'একটি রিং-বাফার: পাঁচটি স্থির চেয়ার বৃত্তাকারে। head চিহ্নিত করে প্রবীণতম নাগরিক; tail পরের খালি চেয়ার। মেমরি কখনো বাড়ে না — ঘোরে নাগরিকরা।',
    },
  );
  const enq = (v: string, note: { en: string; bn: string }) => {
    b.q.push(v);
    const wrapped = tail === 0 && slots[CAP - 1] !== null && slots.some(Boolean);
    const w0 = b.q.length > 1 && tail === 0;
    slots[tail] = v;
    tail = (tail + 1) % CAP;
    snap({ enqueued: v, wrapped: w0 || wrapped }, note);
  };
  const deq = (note: { en: string; bn: string }) => {
    const v = b.q.shift()!;
    slots[head] = null;
    head = (head + 1) % CAP;
    snap({ dequeued: v }, note);
  };
  enq('A', { en: 'enqueue(A) at slot 0, tail hops to 1. The ring is open for business.', bn: 'slot 0-এ enqueue(A), tail লাফ দিল 1-এ। রিং ব্যবসা খুলল।' });
  enq('B', { en: 'enqueue(B) at slot 1. Two citizens, head still anchored at the oldest.', bn: 'slot 1-এ enqueue(B)। দুই নাগরিক, head অটল প্রবীণতমের ওপর।' });
  enq('C', { en: 'enqueue(C) at slot 2. tail = 3, head = 0: the gap IS the occupancy.', bn: 'slot 2-এ enqueue(C)। tail = 3, head = 0: ফাঁকটাই উপস্থিতি-গণনা।' });
  deq({ en: 'dequeue() → A from slot 0, head walks to 1. The chair falls vacant but nothing slides — rotation tax is paid in pointers only.', bn: 'dequeue() → A, slot 0 থেকে, head চলে 1-এ। চেয়ার খালি হলো কিন্তু কিছুই সড়ে না — ঘূর্ণন-কর পরিশোধ হয় কেবল পয়েন্টারে।' });
  deq({ en: 'dequeue() → B from slot 1, head = 2. C is now the eldest; slots 0 and 1 wait to be born again.', bn: 'dequeue() → B, slot 1 থেকে, head = 2। C এখন জ্যেষ্ঠ; slot 0 আর 1 পুনর্জন্মের অপেক্ষায়।' });
  enq('D', { en: 'enqueue(D) at slot 3. The line now bends across slots 2–3, and the circle begins to feel like a circle.', bn: 'slot 3-এ enqueue(D)। সারি এখন বেঁকে গেছে slot 2–3 জুড়ে, বৃত্তের অনুভূতি জাগতে শুরু করেছে।' });
  enq('E', { en: 'enqueue(E) at slot 4 — the last geometrical chair. tail’s next hop crosses the edge of the world…', bn: 'slot 4-এ enqueue(E) — জ্যামিতিক শেষ চেয়ার। tail-এর পরের লাফ জগতের প্রান্ত পাড়ি দেবে…' });
  enq('F', { en: 'enqueue(F) lands at slot 0 — WRAP! tail that had walked off the edge simply resumed at the start: x % capacity is the whole dark art.', bn: 'enqueue(F) বসে গেল slot 0-এ — ভাঁজ! প্রান্ত পেরিয়ে যাওয়া tail ফিরে এলো শুরুতে: x % capacity-ই পুরো গোপন বিদ্যে।' });
  enq('G', { en: 'enqueue(G) at slot 1 — all five chairs now speak. head == tail == 2, and this is the ring’s famous riddle: FULL and EMPTY wear the same face.', bn: 'slot 1-এ enqueue(G) — পাঁচটি চেয়ারই এখন কথাবলা। head == tail == 2, আর এটাই রিংয়ের বিখ্যাত ধাঁধা: পূর্ণ আর খালি পরে একই মুখ।' });
  snap(
    { error: 'overflow' },
    {
      en: 'enqueue(H) → REJECTED: every chair speaks and a bounded ring does not lie about capacity. Boundedness is courage: the producer hears “wait or lose it” — back-pressure, in one syllable.',
      bn: 'enqueue(H) → প্রত্যাখ্যাত: প্রতি চেয়ার কথাবলা আর সীমাবদ্ধ রিং ধারণার সঙ্গে মিথ্যে বলে না। সীমাবদ্ধতা হলো সাহস: উৎপাদক শুনে “অপেক্ষা নয় হারানো” — ব্যাক-প্রেশার, এক শব্দে।',
    },
  );
  return b.steps;
}

function twostack(): QStep[] {
  const inbox: string[] = [];
  const outbox: string[] = [];
  const b = mkB();
  const snap = (extra: Partial<QStep>, note: { en: string; bn: string }) =>
    b.push({ inbox: [...inbox], outbox: [...outbox], note, ...extra });
  snap(
    {},
    {
      en: 'A queue built from TWO stacks: inbox receives (LIFO tray), outbox serves (LIFO tray). Two wrongs of direction make one right of order.',
      bn: 'দুই স্ট্যাক দিয়ে গড়া কিউ: inbox গ্রহণ করে (LIFO বন্দনী), outbox পরিবেশন করে (LIFO বন্দনী)। দুই উল্টোরূপ মিলে হয় সমোরূপ।',
    },
  );
  const enq = (v: string, note: { en: string; bn: string }) => {
    b.q.push(v);
    inbox.push(v);
    snap({ enqueued: v }, note);
  };
  const pourOrServe = (_v: string, note: { en: string; bn: string }) => {
    b.q.shift();
    if (!outbox.length) {
      while (inbox.length) {
        const mv = inbox.pop()!;
        outbox.push(mv);
        snap({ pourFrom: mv }, {
          en: `outbox is dry, so POUR: pop ${mv} from inbox, push it onto outbox — one reversal so far.`,
          bn: `outbox শুকিয়ে গেছে, তাই ঢালাই: inbox থেকে পপ ${mv}, outbox-এ পুশ — এ পর্যন্ত একটি উল্টো।`,
        });
      }
    }
    const served = outbox.pop()!;
    snap({ dequeued: served }, note);
  };
  enq('mango', { en: 'enqueue(mango) — straight onto the inbox tray, newest on top, exactly like the stack lab.', bn: 'enqueue(mango) — সোজা inbox বন্দনীতে, নতুনতম উপরে, স্ট্যাক-ল্যাবের মতোই।' });
  enq('guava', { en: 'enqueue(guava) — also inbox. Guava hides above mango; service injustice brewing…', bn: 'enqueue(guava) — সেটাও inbox-এ। guava বসে গেল mango-এর উপর; পরিবেশন-অন্যায় জমে উঠছে…' });
  pourOrServe('mango', {
    en: 'dequeue(): outbox.top is mango — FIRST in, FIRST out, performed by trays that only know LIFO. The pour paid the order tax once; every serve now costs nothing.',
    bn: 'dequeue(): outbox.top হলো mango — প্রথমে এলো প্রথমে গেল, এমন বন্দনী দিয়ে যা জানে কেবল LIFO। ঢালাই একবারে পরিশোধ করেছে ক্রম-কর; প্রতি পরিবেশন এখন মুক্ত খরচের।',
  });
  enq('lychee', { en: 'enqueue(lychee) — inbox again, and watch the law: outbox is NOT empty, so NO pour. Order is sacred as long as the serving tray speaks.', bn: 'enqueue(lychee) — আবার inbox, আর বিধানে দৃষ্টি: outbox খালি নয়, অতএব ঢালাই নেই। পরিবেশন-বন্দনী কথাবলা-অবধি ক্রম অক্ষত পুণ্য।' });
  pourOrServe('guava', {
    en: 'dequeue(): outbox still had guava on top — served with NO pour at all, because pouring while outbox speaks would twist the timeline.',
    bn: 'dequeue(): outbox-এ এখনো উপরে ছিল guava — একধরনের ঢালাইছাড়াই পরিবেশিত, কারণ outbox কথাবলা অবস্থায় ঢালাই মানে টাইমলাইন মোচড়ানো।',
  });
  pourOrServe('lychee', {
    en: 'dequeue(): outbox dry → pour lychee → serve. Every item crosses trays exactly twice in its life — that is the whole amortization ledger.',
    bn: 'dequeue(): outbox শুকনো → lychee ঢালাই → পরিবেশন। প্রতি উপাদান জীবনে বন্দনী পার হয় হুবহু দুইবার — পুরো অ্যামর্টাইজেশন-খাতা এইটুকু।',
  });
  snap(
    { error: 'underflow' },
    {
      en: 'dequeue() with both trays dry — the two-stack queue is empty exactly when BOTH speak of emptiness. Size questions go to the couple, never to an individual.',
      bn: 'দুই বন্দনীই শুকনো অবস্থায় dequeue() — দ্বি-স্ট্যাক কিউ খালি ঠিক তখনই যখন দুজনেই শূণ্যতার কথা বলে। আকার-প্রশ্ন যাবে দম্পতির কাছে, কখনো ব্যক্তির নয়।',
    },
  );
  return b.steps;
}

function priority(): QStep[] {
  const b = mkB();
  const pri = (label: string) => Number(label.split('pri=')[1]);
  b.push({
    note: {
      en: 'A PRIORITY queue: same doors, different law — the loudest citizen, not the earliest, gets served. FIFO from another world arrives as merely one special case (pri = arrival time).',
      bn: 'একটি অগ্রাধিকার-কিউ: সেই দরজা, ভিন্ন বিধান — প্রথমে আসা নয়, সবচেয়ে জোরালো নাগরিক-ই পরিবেশিত। অন্য জগতের FIFO আসে কেবল বিশেষ বাক্স হয়ে (pri = আগমন-সময়)।',
    },
  });
  const enq = (v: string, note: { en: string; bn: string }) => {
    b.q.push(v);
    b.push({ enqueued: v, note });
  };
  const serve = (note: { en: string; bn: string }) => {
    const idx = b.q.reduce((best, v, i2) => (pri(v) > pri(b.q[best]) ? i2 : best), 0);
    const served = b.q.splice(idx, 1)[0];
    b.push({ dequeued: served, note });
  };
  enq('newsletter pri=1', { en: 'enqueue newsletter (pri 1) — a whisper joins the line.', bn: 'enqueue newsletter (pri 1) — ফিসফিসে এসে দাঁড়াল সারিতে।' });
  enq('ad pri=2', { en: 'enqueue ad (pri 2). Louder than the newsletter, still leaves after any real conversation.', bn: 'enqueue ad (pri 2)। newsletter-এর চেয়ে জোরালো, তবু চলে যাবে যে-কোনো আসল কথোপকথনের পরে।' });
  enq('reply pri=5', { en: 'enqueue reply (pri 5) — a human waiting on an answer outranks every broadcast.', bn: 'enqueue reply (pri 5) — উত্তরের জন্য অপেক্ষমাণ মানুষ জেতে প্রতি সম্প্রচারকে।' });
  enq('alarm pri=9', { en: 'enqueue alarm (pri 9) — smoke in the server room outranks everyone, instantly, mid-line.', bn: 'enqueue alarm (pri 9) — সার্ভার-ঘরের ধোঁয়া জেতে সবাইকে, তাৎক্ষণিক, সারির মাঝ থেকে।' });
  serve(
    { en: 'dequeue() → alarm pri=9 — NOT newsletter, though newsletter waited longest. The law is importance now; patience is no longer currency.', bn: 'dequeue() → alarm pri=9 — newsletter নয়, যদিও সে সবচেয়ে বেশি অপেক্ষা করেছে। বিধান এখন গুরুত্ব; ধৈর্য আর মুদ্রা নয়।' },
  );
  enq('boss pri=8', { en: 'enqueue boss (pri 8) — enters quietly, jumps the whole line by title alone.', bn: 'enqueue boss (pri 8) — নিঃশব্দে ঢুকে পদবিই সারি টপকে যায়।' });
  serve({ en: 'dequeue() → boss pri=8 — above reply, below alarm. Every serve answers ONE question: “who matters most right now?”', bn: 'dequeue() → boss pri=8 — reply-র উপরে, alarm-এর নিচে। প্রতি পরিবেশন উত্তর দেয় এক প্রশ্নের: “এই মুহূর্তে সবচেয়ে মূল্যবান কে?”' });
  serve({ en: 'dequeue() → reply pri=5. Order so far: 9, 8, 5 — strictly descending importance, arrival order irrelevant.', bn: 'dequeue() → reply pri=5। এ পর্যন্ত ক্রম: 9, 8, 5 — কঠোর অধঃক্রমে গুরুত্ব, আগমন-ক্রম অপ্রাসঙ্গিক।' });
  serve({ en: 'dequeue() → ad pri=2. The newsletter still waits — the last citizen of the quietest kind.', bn: 'dequeue() → ad pri=2। newsletter তখনো অপেক্ষায় — সবচেয়ে নীরব জাতির শেষ নাগরিক।' });
  serve({ en: 'dequeue() → newsletter pri=1 last — the queue ended serving exactly by descending pri: 9, 8, 5, 2, 1.', bn: 'dequeue() → newsletter pri=1 সবশেষে — কিউ শেষ হলো হুবহু অধঃক্রমে পরিবেশন করে: 9, 8, 5, 2, 1।' });
  return b.steps;
}

/** Deterministic step list for one queue scene. */
export function queueSteps(kind: QKind): QStep[] {
  switch (kind) {
    case 'line': return line();
    case 'ring': return ring();
    case 'twostack': return twostack();
    case 'priority': return priority();
  }
}
