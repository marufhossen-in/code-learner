import type { Lesson } from '../../../lib/types';

export const AluIntroLesson: Lesson = {
  slug: 'alu-intro',
  tech: 'computer-architecture',
  title: {
    en: 'Arithmetic Logic Unit (ALU), Binary Adders & Status Flags',
    bn: 'অ্যারিথমেটিক লজিক ইউনিট (ALU), বাইনারি অ্যাডার এবং স্ট্যাটাস ফ্ল্যাগ',
  },
  summary: {
    en: 'Explore the computational core of the microprocessor. Master Half Adders, Full Adders, Ripple-Carry Adders vs Carry-Lookahead Adders (CLA), Subtraction via Two\'s Complement Inversion, Bitwise Logic operations, and the four universal condition flags: Zero (Z), Carry (C), Negative/Sign (N), and Overflow (V).',
    bn: 'মাইক্রোপ্রসেসরের মূল কম্পিউটেশনাল ইঞ্জিন বিশ্লেষণ করুন। হাফ অ্যাডার, ফুল অ্যাডার, রিপল-ক্যারি বনাম দ্রুতগতির ক্যারি-লুকঅ্যাহেড অ্যাডার (CLA), ২ এর কমপ্লিমেন্ট দিয়ে বিয়োগ, বিটওয়াইজ লজিক অপারেশন এবং ৪ টি সার্বজনীন স্ট্যাটাস ফ্ল্যাগ: জিরো (Z), ক্যারি (C), নেগেটিভ/সাইন (N) এবং ওভারফ্লো (V) বিস্তারিত জানুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'binary-addition-and-full-adders',
      text: {
        en: 'Binary Addition Circuits: Half Adders to 1-Bit Full Adders',
        bn: 'বাইনারি অ্যাডার সার্কিট: হাফ অ্যাডার থেকে ১-বিট ফুল অ্যাডার',
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Arithmetic Logic Unit (ALU) is the mathematical calculation engine of the processor. At the silicon level, binary addition is the primitive operation from which subtraction, multiplication, and memory address calculations are derived. A Half Adder adds two 1-bit inputs (A and B) using an XOR (exclusive OR) gate for the Sum and an AND gate for the Carry. However, a half adder cannot accept a carry input from an earlier stage. A Full Adder solves this by accepting three 1-bit inputs: A, B, and Carry-In (Cin), computing both Sum and outgoing Carry-Out (Cout).',
        bn: 'অ্যারিথমেটিক লজিক ইউনিট (ALU) হলো প্রসেসরের মূল গাণিতিক হিসাব ইঞ্জিন। সিলিকন স্তরে বাইনারি যোগ হলো সেই প্রাথমিক ভিত্তি যা থেকে বিয়োগ, গুণ এবং মেমোরি ঠিকানার হিসাব তৈরি হয়। একটি হাফ অ্যাডার যোগফল বা Sum-এর জন্য XOR ( এক্সক্লুসিভ অর ) গেট এবং Carry-র জন্য AND গেট ব্যবহার করে দুটি ১-বিট ইনপুট ( A এবং B ) যোগ করে। কিন্তু হাফ অ্যাডার পূর্ববর্তী পর্যায় থেকে কোনো ক্যারি গ্রহণ করতে পারে না। ফুল অ্যাডার তিনটি ১-বিট ইনপুট: A, B এবং ক্যারি-ইন (Cin) গ্রহণ করে Sum এবং বহির্গামী ক্যারি-আউট (Cout) উভয়ই সফলভাবে গণনা করে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: '1-Bit Full Adder Gate Logic & 4-Bit ALU with Condition Flags',
        bn: '১-বিট ফুল অ্যাডার লজিক এবং ৪ টি স্ট্যাটাস ফ্ল্যাগ সহ ৪-বিট ALU',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="faGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="aluGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="aluArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Left: 1-Bit Full Adder Schematic -->
  <rect x="25" y="30" width="360" height="370" rx="10" fill="url(#faGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="45" y="60" font-size="14" font-weight="700" fill="#0369a1">1-BIT FULL ADDER CIRCUIT</text>
  <text x="45" y="80" font-size="11" fill="#64748b">Inputs: A, B, Carry-In (Cin)</text>

  <rect x="45" y="100" width="320" height="130" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="125" font-size="12" font-weight="700" fill="#0f172a">Boolean Gate Equations:</text>
  <text x="55" y="150" font-size="12" font-family="monospace" fill="#0369a1">Sum = A ⊕ B ⊕ Cin</text>
  <text x="55" y="175" font-size="12" font-family="monospace" fill="#047857">Cout = (A &amp; B) | (Cin &amp; (A ⊕ B))</text>
  <text x="55" y="200" font-size="11" fill="#475569">2 XOR gates, 2 AND gates, 1 OR gate</text>
  <text x="55" y="218" font-size="10" fill="#64748b">Total delay: 3 gate propagation levels</text>

  <rect x="45" y="245" width="320" height="140" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="270" font-size="12" font-weight="700" fill="#0f172a">Full Adder Truth Highlights:</text>
  <text x="55" y="295" font-size="11" font-family="monospace" fill="#334155">A=1, B=0, Cin=0 -&gt; Sum=1, Cout=0</text>
  <text x="55" y="320" font-size="11" font-family="monospace" fill="#334155">A=1, B=1, Cin=0 -&gt; Sum=0, Cout=1 (2)</text>
  <text x="55" y="345" font-size="11" font-family="monospace" fill="#047857">A=1, B=1, Cin=1 -&gt; Sum=1, Cout=1 (3)</text>
  <text x="55" y="370" font-size="10" fill="#64748b">Chained to form 4-bit, 32-bit, or 64-bit words</text>

  <!-- Right: 4-Bit ALU Architecture & Status Register -->
  <rect x="415" y="30" width="380" height="370" rx="10" fill="url(#aluGrad)" stroke="#047857" stroke-width="2"/>
  <text x="435" y="60" font-size="14" font-weight="700" fill="#065f46">4-BIT ALU &amp; STATUS FLAGS</text>
  <text x="435" y="80" font-size="11" fill="#64748b">Arithmetic &amp; Condition Register</text>

  <!-- ALU V-Shape Block -->
  <polygon points="445,100 595,100 560,170 480,170" fill="#ffffff" stroke="#047857" stroke-width="2"/>
  <text x="520" y="130" font-size="15" font-weight="800" fill="#047857" text-anchor="middle">ALU</text>
  <text x="520" y="150" font-size="10" fill="#475569" text-anchor="middle">Add / Sub / Logic</text>

  <!-- Inputs A and B -->
  <text x="465" y="90" font-size="11" font-weight="700" fill="#0284c7" text-anchor="middle">Input A</text>
  <text x="575" y="90" font-size="11" font-weight="700" fill="#0284c7" text-anchor="middle">Input B</text>

  <!-- Result Output -->
  <path d="M 520 170 L 520 205" stroke="#047857" stroke-width="2.5" marker-end="url(#aluArrow)"/>
  <text x="535" y="195" font-size="11" font-weight="700" fill="#047857">4-Bit Result</text>

  <!-- 4 Hardware Condition Flags -->
  <rect x="435" y="215" width="340" height="170" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="450" y="238" font-size="12" font-weight="700" fill="#0f172a">4 Universal Hardware Status Flags:</text>
  
  <text x="450" y="265" font-size="11" font-weight="700" fill="#0284c7">Z (Zero Flag):</text>
  <text x="545" y="265" font-size="11" fill="#334155">1 if all Result bits are 0 (Result == 0)</text>

  <text x="450" y="295" font-size="11" font-weight="700" fill="#16a34a">C (Carry Flag):</text>
  <text x="545" y="295" font-size="11" fill="#334155">1 if unsigned overflow produced carry out</text>

  <text x="450" y="325" font-size="11" font-weight="700" fill="#b45309">N (Negative Flag):</text>
  <text x="545" y="325" font-size="11" fill="#334155">Matches MSB sign bit (1 = negative)</text>

  <text x="450" y="355" font-size="11" font-weight="700" fill="#dc2626">V (Overflow Flag):</text>
  <text x="545" y="355" font-size="11" fill="#334155">1 if signed two's complement overflowed</text>

  <text x="450" y="375" font-size="10" fill="#64748b">Condition flags directly evaluate conditional branch jumps (JZ, JNE)</text>
</svg>`,
      caption: {
        en: 'The microprocessor arithmetic core: a 1-bit full adder combining sum and carry equations, and a 4-bit ALU producing outputs alongside four hardware status flags (Z, C, N, V).',
        bn: 'মাইক্রোপ্রসেসরের গাণিতিক কোর: ১-বিট ফুল অ্যাডার সার্কিট এবং ৪ টি হার্ডওয়্যার স্ট্যাটাস ফ্ল্যাগ ( Z, C, N, V ) সম্বলিত ৪-বিট ALU ইঞ্জিন।',
      },
    },
    {
      type: 'heading',
      id: 'subtraction-via-twos-complement-and-cla',
      text: {
        en: 'ALU Subtraction & Carry-Lookahead Acceleration',
        bn: 'ALU বিয়োগ অপারেশন এবং ক্যারি-লুকঅ্যাহেড গতিবর্ধন',
      },
    },
    {
      type: 'para',
      text: {
        en: 'An ALU performs subtraction without any specialized subtraction silicon by exploiting two\'s complement arithmetic. When a subtract instruction executes, the ALU asserts an internal Subtraction signal: input B is passed through XOR gates with 1 to invert all bits, while the first full adder is fed a Carry-In of 1. In a Ripple-Carry Adder (RCA), each bit must wait for the carry from the preceding bit, causing O(n) delay. Modern high-speed processors replace RCA with Carry-Lookahead Adders (CLA), which compute Generate (G = A AND B) and Propagate (P = A XOR B) terms to resolve all carries in parallel.',
        bn: 'কোনো পৃথক বিয়োগ সার্কিট ছাড়াই ALU ২ এর কমপ্লিমেন্ট ব্যবহার করে সরাসরি বিয়োগ সম্পন্ন করে। যখন বিয়োগ নির্দেশ কার্যকর হয়, তখন ALU অভ্যন্তরীণ সাবট্রাকশন সিগন্যাল সক্রিয় করে: ইনপুট B এর প্রতিটি বিট ১ এর সাথে XOR করে উল্টে দেওয়া হয় এবং প্রথম ফুল অ্যাডারের ক্যারি-ইন হিসেবে ১ সরবরাহ করা হয়। সাধারণ রিপল-ক্যারি অ্যাডারে প্রতি বিটকে পূর্ববর্তী বিটের ক্যারির জন্য অপেক্ষা করতে হয় যা ও(n) বিলম্ব সৃষ্টি করে। আধুনিক প্রসেসরগুলো এর পরিবর্তে ক্যারি-লুকঅ্যাহেড অ্যাডার (CLA) ব্যবহার করে যা প্যারালালে সমস্ত ক্যারি হিসাব করে দ্রুত যোগ সম্পন্ন করে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic 4-Bit ALU Simulator with Condition Flags (Z, C, N, V)
function fullAdder1Bit(a, b, cin) {
  const sum = (a ^ b ^ cin) & 1;
  const cout = ((a & b) | (cin & (a ^ b))) & 1;
  return { sum, cout };
}

function executeAlu4Bit(operandA, operandB, isSubtract = false) {
  // Clamp operands to 4 bits (0-15)
  const a = operandA & 0xF;
  // If subtracting: invert B bits (B XOR 1) and set initial carry-in to 1
  const bTransformed = isSubtract ? (~operandB & 0xF) : (operandB & 0xF);
  let carry = isSubtract ? 1 : 0;
  let result = 0;

  // 4-bit parallel full adder stage
  for (let bit = 0; bit < 4; bit++) {
    const aBit = (a >> bit) & 1;
    const bBit = (bTransformed >> bit) & 1;
    const fa = fullAdder1Bit(aBit, bBit, carry);

    result |= (fa.sum << bit);
    carry = fa.cout;
  }

  // 1. Zero Flag (Z): 1 if result is zero
  const zFlag = result === 0 ? 1 : 0;

  // 2. Carry Flag (C): final carry out of most significant bit
  const cFlag = carry;

  // 3. Negative Flag (N): matches sign bit (bit 3 in 4-bit word)
  const nFlag = (result >> 3) & 1;

  // 4. Overflow Flag (V): signed overflow check
  const aSign = (a >> 3) & 1;
  const bSign = (bTransformed >> 3) & 1;
  const vFlag = (aSign === bSign && aSign !== nFlag) ? 1 : 0;

  const signedDecimal = result > 7 ? result - 16 : result;

  return {
    rawBinary: result.toString(2).padStart(4, '0'),
    resultUnsigned: result,
    resultSigned: signedDecimal,
    flags: { Z: zFlag, C: cFlag, N: nFlag, V: vFlag },
  };
}

// Test 1: Standard Addition (5 + 2 = 7)
const testAdd = executeAlu4Bit(5, 2, false);
console.log('5 + 2 =', testAdd.resultUnsigned, '| Flags:', testAdd.flags);

// Test 2: Subtraction yielding Zero (7 - 7 = 0) -> Z Flag asserted
const testSubZero = executeAlu4Bit(7, 7, true);
console.log('7 - 7 =', testSubZero.resultUnsigned, '| Flags:', testSubZero.flags);

// Test 3: Signed Overflow in 4-bit (+7 + 1 = 8 unsigned, but -8 signed) -> V Flag asserted
const testOverflow = executeAlu4Bit(7, 1, false);
console.log('+7 + 1 =', testOverflow.resultSigned, '| Flags:', testOverflow.flags);`,
      caption: {
        en: 'A verified simulation of a 4-bit ALU performing binary addition and subtraction while computing hardware status flags (Z, C, N, V) used for conditional branching.',
        bn: '৪-বিট ALU-র বাস্তব সিমুলেশন যা বাইনারি যোগ ও বিয়োগ সম্পন্ন করার পাশাপাশি শর্তাধীন ব্রাঞ্চিংয়ে ব্যবহৃত ৪ টি হার্ডওয়্যার স্ট্যাটাস ফ্ল্যাগ গণনা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Half Adder',
          def: {
            en: 'A basic combinational circuit combining an XOR gate and an AND gate to add two 1-bit binary inputs, outputting Sum and Carry without a Carry-In input.',
            bn: 'একটি প্রাথমিক লজিক সার্কিট যা দুটি ১-বিট বাইনারি সংখ্যা যোগ করে Sum ও Carry তৈরি করে, তবে পূর্ববর্তী ক্যারি গ্রহণ করতে পারে না।',
          },
        },
        {
          term: 'Full Adder',
          def: {
            en: 'A complete digital adder combining three binary inputs (A, B, and Carry-In) to compute a single-bit Sum and an outgoing Carry-Out.',
            bn: 'একটি পূর্ণাঙ্গ ডিজিটাল সার্কিট যা তিনটি বাইনারি ইনপুট ( A, B এবং ক্যারি-ইন ) যোগ করে Sum এবং পরবর্তী পর্যায়ের জন্য Carry-Out তৈরি করে।',
          },
        },
        {
          term: 'Carry-Lookahead Adder (CLA)',
          def: {
            en: 'A high-speed adder that computes carry signals across all bit positions in parallel using generate and propagate equations, eliminating ripple delay.',
            bn: 'একটি দ্রুতগতির অ্যাডার যা জেনারেট ও প্রপাগেট সমীকরণ ব্যবহার করে সমান্তরালে সমস্ত ক্যারি গণনা করে ধীরগতির রিপল বিলম্ব দূর করে।',
          },
        },
        {
          term: 'Status Condition Flags',
          def: {
            en: 'Dedicated 1-bit hardware registers (Zero, Carry, Negative, Overflow) updated after every ALU calculation to govern conditional branch instructions.',
            bn: 'নির্দিষ্ট ১-বিট হার্ডওয়্যার রেজিস্টার ( জিরো, ক্যারি, নেগেটিভ, ওভারফ্লো ) যা প্রতিটি ALU গণনার পর হালনাগাদ হয়ে শর্তাধীন ব্রাঞ্চিং নিয়ন্ত্রণ করে।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'Machine conditional branch instructions never evaluate high-level programming logic directly. An assembly instruction like JZ (Jump if Zero) or JNE (Jump if Not Equal) simply tests whether the 1-bit Zero flag in the processor status register equals 1 or 0 after the preceding ALU arithmetic operation.',
        bn: 'মেশিনের শর্তাধীন ব্রাঞ্চ নির্দেশগুলো কখনো সরাসরি জটিল প্রোগ্রামিং লজিক পরীক্ষা করে না। জেজেড ( JZ - Jump if Zero ) বা জেএনই ( JNE ) এর মতো অ্যাসেম্বলি নির্দেশগুলো কেবল পূর্ববর্তী ALU অপারেশনের পর স্ট্যাটাস রেজিস্টারে থাকা ১-বিট জিরো ফ্ল্যাগের মান ১ নাকি ০ তা পরীক্ষা করে সিদ্ধান্ত নেয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'ca-alu-ex-1',
      kind: 'predict',
      question: {
        en: 'What is the binary Sum output of a 1-bit Full Adder when input A is 1, input B is 1, and the Carry-In (Cin) is 1?',
        bn: 'একটি ১-বিট ফুল অ্যাডারে ইনপুট A এর মান ১ , ইনপুট B এর মান ১ এবং ক্যারি-ইন (Cin) এর মান ১ হলে বাইনারি Sum আউটপুট কত হবে?'
      },
      answer: '1',
      hint: {
        en: 'Adding 1 + 1 + 1 equals decimal 3, which is binary 11 (Sum = 1, Carry-Out = 1).',
        bn: '১ + ১ + ১ যোগ করলে দশমিক ৩ হয়, যার বাইনারি হলো ১১ ( Sum = ১ এবং Carry-Out = ১ )।',
      },
      explanation: {
        en: 'Sum = A ⊕ B ⊕ Cin = 1 ⊕ 1 ⊕ 1 = 0 ⊕ 1 = 1. The Carry-Out is also 1, representing binary 11 (decimal 3).',
        bn: 'Sum = A ⊕ B ⊕ Cin = ১ ⊕ ১ ⊕ ১ = ০ ⊕ ১ = ১। ক্যারি-আউটও ১ হয়, যা বাইনারি ১১ (দশমিক ৩) প্রকাশ করে।',
      },
    },
    {
      id: 'ca-alu-ex-2',
      kind: 'mcq',
      question: {
        en: 'What architectural advantage does a Carry-Lookahead Adder (CLA) provide compared to a traditional Ripple-Carry Adder (RCA)?',
        bn: 'ঐতিহ্যবাহী রিপল-ক্যারি অ্যাডারের (RCA) তুলনায় ক্যারি-লুকঅ্যাহেড অ্যাডার (CLA) কোন আর্কিটেকচারাল সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It calculates all carry bits in parallel using generate and propagate logic equations, drastically reducing gate propagation delay from O(n) to O(log n)',
          bn: 'এটি জেনারেট ও প্রপাগেট লজিক সমীকরণ দিয়ে সমান্তরালে সমস্ত ক্যারি গণনা করে, যা প্রপাগেশন বিলম্বকে O(n) থেকে কমিয়ে O(log n) এ নামিয়ে আনে',
        },
        {
          en: 'It eliminates the need for any electricity by using permanent magnets',
          bn: 'এটি চুম্বক ব্যবহার করে বিদ্যুতের প্রয়োজনীয়তা সম্পূর্ণরূপে দূর করে',
        },
        {
          en: 'It triples the physical storage size of connected hard disk drives',
          bn: 'এটি সংযুক্ত হার্ড ড্রাইভের স্টোরেজ ধারণক্ষমতা তিনগুণ বৃদ্ধি করে',
        },
        {
          en: 'It restricts the CPU to executing only addition instructions forever',
          bn: 'এটি সিপিইউকে কেবল যোগ নির্দেশ চালানোর মধ্যে সীমাবদ্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'In RCA, bit 31 cannot produce its sum until the carry ripples through all preceding 30 bits.',
        bn: 'রিপল অ্যাডারে ৩১ নং বিট পূর্ববর্তী ৩০ টি বিটের ক্যারি না আসা পর্যন্ত যোগফল তৈরি করতে পারে না।',
      },
      explanation: {
        en: 'CLA circuits compute carry terms simultaneously for all bit stages, avoiding the sequential carry ripple delay that restricts maximum clock speeds in wide 64-bit adders.',
        bn: 'সিএলএ সার্কিট একযোগে সব বিটের ক্যারি হিসাব করে ফেলে, ফলে ৬৪-বিট অ্যাডারেও দীর্ঘ লাইনে অপেক্ষার অপচয় এড়ানো সম্ভব হয়।',
      },
    },
    {
      id: 'ca-alu-ex-3',
      kind: 'mcq',
      question: {
        en: 'When the Arithmetic Logic Unit subtracts two identical numbers (such as calculating 10 - 10 = 0), which status condition flag is asserted to 1 by the hardware?',
        bn: 'যখন অ্যারিথমেটিক লজিক ইউনিট ২ টি সমান সংখ্যা বিয়োগ করে ( যেমন ১০ - ১০ = ০ গণনা করা ), তখন হার্ডওয়্যার কোন স্ট্যাটাস ফ্ল্যাগটির মান ১ নির্ধারণ করে?'
      },
      options: [
        {
          en: 'Zero Flag (Z)',
          bn: 'জিরো ফ্ল্যাগ (Zero Flag - Z)',
        },
        {
          en: 'Keyboard Cable LED Flag',
          bn: 'কিবোর্ড ক্যাবল এলইডি ফ্ল্যাগ',
        },
        {
          en: 'Motherboard Speaker Volume Flag',
          bn: 'মাদারবোর্ড স্পিকার ভলিউম ফ্ল্যাগ',
        },
        {
          en: 'Screen Contrast Setting Flag',
          bn: 'স্ক্রিন কনট্রাস্ট সেটিং ফ্ল্যাগ',
        },
      ],
      answer: 0,
      hint: {
        en: 'The flag that signifies the calculation result produced exactly numerical zero.',
        bn: 'যে ফ্ল্যাগটি নির্দেশ করে গণনার ফলাফল হুবহু সংখ্যাসূচক শূন্য হয়েছে।',
      },
      explanation: {
        en: 'The Zero Flag (Z) is set to 1 whenever an ALU arithmetic or logical operation yields a result of all zero bits, allowing instructions like CMP and JZ to detect equality.',
        bn: 'যেকোনো ALU গণনার ফলাফল শূন্য হলে জিরো ফ্ল্যাগ (Z) মান ১ ধারণ করে, যার ওপর নির্ভর করে CMP এবং JZ নির্দেশগুলো সমতা পরীক্ষা করে।',
      },
    },
    {
      id: 'ca-alu-ex-4',
      kind: 'predict',
      question: {
        en: 'In an 8-bit unsigned addition 250 + 10 = 260, which 1-letter status flag signals that the result exceeded the 8-bit maximum capacity of 255?',
        bn: 'একটি ৮-বিট আনসাইনড যোগ ২৫০ + ১০ = ২৬০ এর ক্ষেত্রে কোন ১ অক্ষরের স্ট্যাটাস ফ্ল্যাগটি সংকেত দেয় যে ফলাফলটি ৮-বিটের সর্বোচ্চ সীমা ২৫৫ অতিক্রম করেছে?'
      },
      answer: 'C',
      hint: {
        en: 'It stands for Carry Flag, indicating an unsigned arithmetic carry out of the most significant bit.',
        bn: 'এটি Carry Flag এর সংক্ষিপ্ত রূপ, যা সর্বোচ্চ বিট থেকে ক্যারি বেরিয়ে আসা নির্দেশ করে।',
      },
      explanation: {
        en: 'The Carry Flag (C) captures unsigned overflow when a calculation exceeds the maximum integer capacity of the register word (such as 255 in an 8-bit byte).',
        bn: 'ক্যালকুলেশন যখন রেজিস্টারের সর্বোচ্চ ধারণক্ষমতা ( যেমন ৮-বিটে ২৫৫ ) অতিক্রম করে, তখন ক্যারি ফ্ল্যাগ (C) আনসাইনড ওভারফ্লো রেকর্ড করে।',
      },
    },
  ],
  quiz: {
    title: {
      en: 'Arithmetic Logic Unit & Status Flags Knowledge Check',
      bn: 'অ্যারিথমেটিক লজিক ইউনিট এবং স্ট্যাটাস ফ্ল্যাগ জ্ঞান যাচাই',
    },
    questions: [
      {
        id: 'ca-alu-qz-1',
        kind: 'mcq',
        topic: 'alu-subtraction-via-twos-complement',
        question: {
          en: 'How does an Arithmetic Logic Unit convert its existing binary adder hardware into a subtractor without building a separate subtraction circuit?',
          bn: 'কোনো পৃথক বিয়োগ সার্কিট তৈরি না করেই একটি অ্যারিথমেটিক লজিক ইউনিট কীভাবে তার বিদ্যমান বাইনারি অ্যাডার হার্ডওয়্যারকে বিয়োগের কাজে ব্যবহার করে?'
        },
        options: [
          {
            en: 'It routes operand B through XOR gates with a Subtraction control bit to invert all bits, while asserting a Carry-In of 1 to compute A + (~B + 1)',
            bn: 'এটি বিয়োগ কন্ট্রোল বিট ব্যবহার করে XOR গেটের মাধ্যমে B এর সব বিট উল্টে দেয় এবং ক্যারি-ইন ১ প্রদান করে A + (~B + ১) গণনা করে',
          },
          {
            en: 'It switches the CPU power supply to run backward in reverse polarity',
            bn: 'এটি সিপিইউ পাওয়ার সাপ্লাইকে বিপরীত দিকে চালাতে শুরু করে',
          },
          {
            en: 'It prints the numbers onto thermal paper and reads them upside down',
            bn: 'এটি সংখ্যাগুলোকে কাগজে প্রিন্ট করে উল্টোভাবে পড়ে নেয়',
          },
          {
            en: 'It halts all computer operations until midnight to perform the calculation',
            bn: 'এটি গণনা সম্পন্ন করতে মধ্যরাত পর্যন্ত কম্পিউটারের সব কাজ বন্ধ রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Two\'s complement negation requires inverting the bits and adding 1: ~B + 1.',
          bn: '২ এর কমপ্লিমেন্ট নেগেশনে বিট উল্টে দিয়ে ১ যোগ করতে হয়: ~B + ১।',
        },
        explanation: {
          en: 'By inverting operand B and supplying Cin = 1 to the least significant bit, the hardware performs subtraction A - B = A + (~B + 1) through the standard adder.',
          bn: 'B এর বিটগুলো উল্টে দিয়ে Cin = ১ দিলে সাধারণ অ্যাডারই A - B = A + (~B + ১) হিসাব সম্পন্ন করে বিয়োগের ফলাফল দেয়।',
        },
      },
      {
        id: 'ca-alu-qz-2',
        kind: 'mcq',
        topic: 'carry-vs-overflow-flag',
        question: {
          en: 'What is the critical operational distinction between the Carry Flag (C) and the Overflow Flag (V) in microprocessor architecture?',
          bn: 'মাইক্রোপ্রসেসর আর্কিটেকচারে ক্যারি ফ্ল্যাগ (C) এবং ওভারফ্লো ফ্ল্যাগ (V)-এর মধ্যে প্রধান কার্যগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'The Carry Flag indicates overflow in unsigned arithmetic (carry out of the MSB), whereas the Overflow Flag indicates overflow in signed two\'s complement arithmetic (corrupted sign bit)',
            bn: 'ক্যারি ফ্ল্যাগ আনসাইনড গাণিতিক হিসেবে অতিরিক্ত মান নির্দেশ করে, আর ওভারফ্লো ফ্ল্যাগ সাইনড ২ এর কমপ্লিমেন্টে সাইন বিট বিকৃত হওয়া নির্দেশ করে',
          },
          {
            en: 'The Carry Flag is used only for audio playback while the Overflow Flag controls screen brightness',
            bn: 'ক্যারি ফ্ল্যাগ শুধু অডিওতে লাগে আর ওভারফ্লো ফ্ল্যাগ স্ক্রিনের উজ্জ্বলতা নিয়ন্ত্রণ করে',
          },
          {
            en: 'There is no difference; both flags are identical duplicate silicon circuits',
            bn: 'এদের মধ্যে কোনো পার্থক্য নেই; উভয় ফ্ল্যাগ হুবহু একই সার্কিট',
          },
          {
            en: 'The Carry Flag operates only in 32-bit mode while the Overflow Flag operates only in 8-bit mode',
            bn: 'ক্যারি ফ্ল্যাগ শুধু ৩২-বিটে চলে আর ওভারফ্লো ফ্ল্যাগ শুধু ৮-বিটে চলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Unsigned numbers treat all bits as positive magnitude; signed numbers interpret the most significant bit as a negative sign.',
          bn: 'আনসাইনড সংখ্যায় সব বিট ধনাত্মক মান বহন করে; সাইনড সংখ্যায় সর্ববামের বিটটি ঋণাত্মক চিহ্ন বোঝায়।',
        },
        explanation: {
          en: 'Carry (C) detects when an unsigned sum exceeds register width. Overflow (V) detects when two signed numbers with the same sign produce a result with the opposite sign.',
          bn: 'ক্যারি (C) আনসাইনড হিসেবে সীমা পার হওয়া শনাক্ত করে। ওভারফ্লো (V) সাইনড হিসেবে দুটি একই চিহ্নের সংখ্যার যোগফল ভুল বিপরীত চিহ্ন দিলে তা নির্দেশ করে।',
        },
      },
      {
        id: 'ca-alu-qz-3',
        kind: 'mcq',
        topic: 'cla-generate-and-propagate',
        question: {
          en: 'In a Carry-Lookahead Adder (CLA), what do the Generate (G) and Propagate (P) terms represent for bit stage i?',
          bn: 'একটি ক্যারি-লুকঅ্যাহেড অ্যাডারে (CLA) বিট পর্যায় i এর জন্য জেনারেট (G) এবং প্রপাগেট (P) সমীকরণ দুটি কী প্রকাশ করে?'
        },
        options: [
          {
            en: 'Generate (Gi = Ai AND Bi) guarantees a carry is born at stage i; Propagate (Pi = Ai XOR Bi) passes an incoming carry through stage i to the next stage',
            bn: 'জেনারেট (Gi = Ai AND Bi) নিশ্চিত করে ঐ পর্যায়ে একটি ক্যারি তৈরি হবে; প্রপাগেট (Pi = Ai XOR Bi) পূর্ববর্তী ক্যারিকে পরবর্তী পর্যায়ে পাঠিয়ে দেয়',
          },
          {
            en: 'Generate creates electrical current from sunlight while Propagate broadcasts radio signals',
            bn: 'জেনারেট সৌরশক্তি থেকে বিদ্যুৎ তৈরি করে আর প্রপাগেট রেডিও সিগন্যাল প্রচার করে',
          },
          {
            en: 'They determine the physical fan rotation speed of the processor cooling system',
            bn: 'সেগুলো প্রসেসরের কুলিং ফ্যানের ঘূর্ণন গতি নির্ধারণ করে',
          },
          {
            en: 'Generate and Propagate are software variables used only in web browser CSS stylesheets',
            bn: 'জেনারেট ও প্রপাগেট কেবল ওয়েব ব্রাউজারের সিএসএস ফাইলে ব্যবহৃত সফটওয়্যার ভেরিয়েবল',
          },
        ],
        answer: 0,
        hint: {
          en: 'If both inputs are 1, a carry is always generated; if one input is 1, any incoming carry propagates forward.',
          bn: 'উভয় ইনপুট ১ হলে ক্যারি নিশ্চিত উৎপন্ন হয়; যেকোনো একটি ১ হলে পূর্বের ক্যারিটি সামনে এগিয়ে যায়।',
        },
        explanation: {
          en: 'Using Gi and Pi, the logic calculates carry signals Ci+1 = Gi OR (Pi AND Ci) in parallel, allowing all carries to be resolved in constant gate delay levels.',
          bn: 'Gi এবং Pi এর মাধ্যমে Ci+1 = Gi OR (Pi AND Ci) সমীকরণ ব্যবহার করে সমান্তরালে সব ক্যারি নির্ণয় করা হয় যা গতি বাড়ায়।',
        },
      },
      {
        id: 'ca-alu-qz-4',
        kind: 'mcq',
        topic: 'branching-flags-evaluation',
        question: {
          en: 'How do assembly language conditional branch instructions (such as JL - Jump if Less) make decisions based on ALU condition flags?',
          bn: 'অ্যাসেম্বলি ভাষার শর্তাধীন জাম্প নির্দেশগুলো (যেমন JL - Jump if Less) কীভাবে ALU স্ট্যাটাস ফ্ল্যাগের ওপর ভিত্তি করে সিদ্ধান্ত নেয়?'
        },
        options: [
          {
            en: 'They evaluate boolean expressions combining the Negative and Overflow flags: JL branches if (N XOR V) equals 1',
            bn: 'সেগুলো নেগেটিভ এবং ওভারফ্লো ফ্ল্যাগের সমন্বয়ে বুলিয়ান হিসাব করে: ( N XOR V ) এর মান ১ হলেই কেবল JL ব্রাঞ্চ কার্যকর হয়',
          },
          {
            en: 'They query the computer clock calendar to check the day of the week',
            bn: 'সেগুলো সপ্তাহের কোন দিন চলছে তা জানতে কম্পিউটারের ক্যালেন্ডার পরীক্ষা করে',
          },
          {
            en: 'They prompt the system administrator with a graphical pop-up dialog box',
            bn: 'সেগুলো সিস্টেম অ্যাডমিনিস্ট্রেটরের সামনে একটি গ্রাফিক্যাল উইন্ডো প্রদর্শন করে',
          },
          {
            en: 'They erase the entire hard disk drive if the condition is not satisfied',
            bn: 'শর্ত পূরণ না হলে সেগুলো সম্পূর্ণ হার্ড ড্রাইভ মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'When subtracting A - B, if result is negative without overflow, A < B. If overflow occurred, the sign bit inverted.',
          bn: 'A - B বিয়োগের পর ওভারফ্লো না হয়ে নেগেটিভ এলে A < B সত্য হয়। ওভারফ্লো হলে সাইন বিট উল্টে যায়।',
        },
        explanation: {
          en: 'Hardware evaluates signed comparisons using N XOR V. If N != V, the mathematical difference was strictly negative, proving that operand A was less than operand B.',
          bn: 'হার্ডওয়্যার N XOR V দিয়ে সাইনড তুলনা করে। N এবং V অসমান হলে প্রমাণিত হয় যে প্রথম সংখ্যাটি দ্বিতীয় সংখ্যার চেয়ে ছোট ছিল।',
        },
      },
    ],
  },
  next: {
    slug: 'registers-intro',
    title: {
      en: 'Sequential Logic, Flip-Flops & CPU Register Files',
      bn: 'সিকোয়েনশিয়াল লজিক, ফ্লিপ-ফ্লপ এবং সিপিইউ রেজিস্টার ফাইল',
    },
  },
};
