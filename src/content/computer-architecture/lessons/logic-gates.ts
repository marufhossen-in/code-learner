import type { Lesson } from '../../../lib/types';

export const LogicGatesLesson: Lesson = {
  slug: 'logic-gates',
  tech: 'computer-architecture',
  title: {
    en: 'Transistors, CMOS Logic & Universal NAND/NOR Gates',
    bn: 'ট্রানজিস্টর, সিএমওএস লজিক এবং সার্বজনীন NAND/NOR গেট',
  },
  summary: {
    en: 'Trace the physical transition from silicon MOSFET transistors to boolean logic gates. Understand NMOS pull-down and PMOS pull-up networks in CMOS inverter design, truth tables for AND, OR, NOT, XOR, De Morgan\'s laws, NAND universality, and combinational multiplexers (MUX).',
    bn: 'সিলিকন মসফেট ট্রানজিস্টর থেকে বুলিয়ান লজিক গেটের বাস্তব রূপান্তর বিশ্লেষণ করুন। সিএমওএস ইনভার্টারে এনমস পুল-ডাউন ও পিমস পুল-আপ নেটওয়ার্ক, AND, OR, NOT, XOR-এর ট্রুথ টেবিল, ডি মরগানের সূত্র, NAND গেটের সার্বজনীনতা এবং কম্বিনেশনাল মাল্টিপ্লেক্সার (MUX) বিস্তারিত জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'cmos-transistor-networks',
      text: {
        en: 'CMOS Transistor Physics: Pull-Up & Pull-Down Networks',
        bn: 'সিএমওএস ট্রানজিস্টর পদার্থবিজ্ঞান: পুল-আপ এবং পুল-ডাউন নেটওয়ার্ক',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Modern computer processors construct all digital logic using Complementary Metal-Oxide-Semiconductor (CMOS) field-effect transistors. Inside a CMOS circuit, designers utilize two distinct transistor polarities: p-type (PMOS) devices that conduct when the input gate voltage is Low (0), and n-type (NMOS) devices that conduct when the gate voltage is High (1). In a standard NOT gate inverter, 2 complementary switches wire together: the upper p-channel pulls output high to positive voltage, while the lower n-channel drains charge to electrical ground.',
        bn: 'আধুনিক কম্পিউটার প্রসেসরগুলো কমপ্লিমেন্টারি মেটাল-অক্সাইড-সেমিকন্ডাক্টর (CMOS) ফিল্ড-ইফেক্ট ট্রানজিস্টর ব্যবহার করে ডিজিটাল লজিক তৈরি করে। সিএমওএস সার্কিটে ডিজাইনাররা দুটি ভিন্ন পোলারিটির ট্রানজিস্টর ব্যবহার করেন: পি-টাইপ (PMOS) ডিভাইস যা ইনপুট গেট ভোল্টেজ লো ( ০ ) থাকলে বিদ্যুৎ পরিবাহী হয়, এবং এন-টাইপ (NMOS) যা গেট ভোল্টেজ হাই ( ১ ) থাকলে পরিবাহী হয়। একটি স্ট্যান্ডার্ড NOT গেট ইনভার্টারে ঠিক ২ টি পরিপূরক সুইচ যুক্ত থাকে: ওপরের পি-চ্যানেল আউটপুটকে পজিটিভ ভোল্টেজে টেনে নেয়, আর নিচের এন-চ্যানেল চার্জ গ্রাউন্ডে নিষ্কাশন করে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'CMOS Inverter Transistors, Universal NAND & 2-to-1 Multiplexer',
        bn: 'সিএমওএস ইনভার্টার ট্রানজিস্টর, সার্বজনীন NAND এবং ২-টু-১ মাল্টিপ্লেক্সার',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="cmosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="nandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="muxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="gateArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Left: CMOS Inverter Circuit -->
  <rect x="25" y="30" width="235" height="370" rx="10" fill="url(#cmosGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="40" y="60" font-size="14" font-weight="700" fill="#0369a1">CMOS INVERTER (NOT)</text>
  <text x="40" y="80" font-size="11" fill="#64748b">2 Physical Transistors</text>

  <rect x="40" y="100" width="205" height="130" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="50" y="125" font-size="12" font-weight="700" fill="#047857">Supply VDD (+1.2V)</text>
  <text x="50" y="145" font-size="11" fill="#334155">PMOS Transistor (Pull-Up)</text>
  <text x="50" y="165" font-size="11" fill="#0284c7">Output Pin (Q)</text>
  <text x="50" y="185" font-size="11" fill="#334155">NMOS Transistor (Pull-Down)</text>
  <text x="50" y="205" font-size="12" font-weight="700" fill="#dc2626">Ground GND (0.0V)</text>

  <rect x="40" y="245" width="205" height="140" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="50" y="270" font-size="12" font-weight="700" fill="#0f172a">Switching Behavior:</text>
  <text x="50" y="295" font-size="11" fill="#475569">Input = 0 -&gt; PMOS ON -&gt; Q = 1</text>
  <text x="50" y="320" font-size="11" fill="#475569">Input = 1 -&gt; NMOS ON -&gt; Q = 0</text>
  <text x="50" y="345" font-size="11" fill="#16a34a">Zero Static DC Leakage</text>
  <text x="50" y="365" font-size="10" fill="#64748b">Power consumed only on flip</text>

  <!-- Middle: Universal NAND Synthesis -->
  <rect x="280" y="30" width="250" height="370" rx="10" fill="url(#nandGrad)" stroke="#7e22ce" stroke-width="2"/>
  <text x="295" y="60" font-size="14" font-weight="700" fill="#6b21a8">UNIVERSAL NAND GATE</text>
  <text x="295" y="80" font-size="11" fill="#64748b">Build Any Boolean Circuit</text>

  <rect x="295" y="100" width="220" height="110" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="305" y="125" font-size="12" font-weight="700" fill="#581c87">NAND Truth Table</text>
  <text x="305" y="145" font-size="11" font-family="monospace" fill="#334155">A=0, B=0 -&gt; Out = 1</text>
  <text x="305" y="165" font-size="11" font-family="monospace" fill="#334155">A=0, B=1 -&gt; Out = 1</text>
  <text x="305" y="185" font-size="11" font-family="monospace" fill="#334155">A=1, B=0 -&gt; Out = 1</text>
  <text x="305" y="202" font-size="11" font-family="monospace" fill="#dc2626">A=1, B=1 -&gt; Out = 0</text>

  <rect x="295" y="225" width="220" height="160" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="305" y="250" font-size="12" font-weight="700" fill="#581c87">De Morgan Synthesis:</text>
  <text x="305" y="275" font-size="11" fill="#0f172a">NOT(A) = A NAND A</text>
  <text x="305" y="300" font-size="11" fill="#0f172a">AND(A,B) = NOT(A NAND B)</text>
  <text x="305" y="325" font-size="11" fill="#0f172a">OR(A,B) = NOT(A) NAND NOT(B)</text>
  <text x="305" y="350" font-size="11" fill="#047857">XOR(A,B) = 4 NAND Gates</text>
  <text x="305" y="370" font-size="10" fill="#64748b">Universal functional completeness</text>

  <!-- Right: 2-to-1 Multiplexer (MUX) -->
  <rect x="550" y="30" width="245" height="370" rx="10" fill="url(#muxGrad)" stroke="#047857" stroke-width="2"/>
  <text x="565" y="60" font-size="14" font-weight="700" fill="#065f46">2-TO-1 MULTIPLEXER (MUX)</text>
  <text x="565" y="80" font-size="11" fill="#64748b">Digital Steering Switch</text>

  <rect x="565" y="105" width="215" height="135" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="575" y="130" font-size="12" font-weight="700" fill="#0f172a">Inputs &amp; Control Select:</text>
  <text x="575" y="152" font-size="11" fill="#0284c7">Data 0 (D0) wire</text>
  <text x="575" y="172" font-size="11" fill="#0284c7">Data 1 (D1) wire</text>
  <text x="575" y="195" font-size="11" font-weight="700" fill="#b45309">Select Pin (S = 0 or 1)</text>
  <text x="575" y="220" font-size="11" fill="#047857">Output = (D0 &amp; ~S) | (D1 &amp; S)</text>

  <rect x="565" y="255" width="215" height="130" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="575" y="280" font-size="12" font-weight="700" fill="#0f172a">Routing Truth:</text>
  <text x="575" y="305" font-size="11" fill="#475569">If S = 0: Output emits D0</text>
  <text x="575" y="330" font-size="11" fill="#475569">If S = 1: Output emits D1</text>
  <text x="575" y="355" font-size="11" fill="#047857">Directs datapath operands in CPU</text>
</svg>`,
      caption: {
        en: 'Silicon digital logic layers: a 2-transistor CMOS inverter; the universal NAND gate synthesizing all boolean functions; and a 2-to-1 multiplexer steering datapath values.',
        bn: 'সিলিকন ডিজিটাল লজিকের স্তরগুলো: ২ টি ট্রানজিস্টরের সিএমওএস ইনভার্টার; সকল বুলিয়ান ফাংশন তৈরিকারী সার্বজনীন NAND গেট এবং ডেটাপাথ নিয়ন্ত্রণকারী ২-টু-১ মাল্টিপ্লেক্সার।',
      },
    },
    {
      type: 'heading',
      id: 'nand-universality-and-multiplexers',
      text: {
        en: 'NAND Universality & Digital Multiplexing',
        bn: 'NAND গেটের সার্বজনীনতা এবং ডিজিটাল মাল্টিপ্লেক্সিং',
      },
    },
    {
      type: 'para',
      text: {
        en: 'A logic gate family is functionally complete if any boolean expression can be synthesized entirely from that single gate type. NAND and NOR gates are universal: by combining NAND primitives according to De Morgan\'s algebraic transformations, engineers can implement NOT, AND, OR, and Exclusive-OR (XOR) gates. Building on these combinational foundations, processors use Multiplexers (MUX) as digital data switches. Controlled by 1 selection bit, a 2-to-1 MUX routes either input D0 or input D1 to the shared processor datapath.',
        bn: 'একটি লজিক গেট পরিবারকে কার্যকরভাবে সম্পূর্ণ বলা হয় যদি কেবল সেই একক গেট ব্যবহার করে যেকোনো জটিল বুলিয়ান সমীকরণ তৈরি করা যায়। NAND এবং NOR গেট উভয়ই সার্বজনীন: ডি মরগানের বীজগণিতীয় সূত্রের সাহায্যে কেবল NAND গেট সংযুক্ত করে NOT, AND, OR এবং এক্সক্লুসিভ-অর (XOR) গেট তৈরি করা সম্ভব। এই মৌলিক ভিত্তির ওপর নির্ভর করে প্রসেসরে ডিজিটাল সুইচ হিসেবে মাল্টিপ্লেক্সার (MUX) ব্যবহার করা হয়। ১ টি সিলেকশন বিটের মাধ্যমে একটি ২-টু-১ মাল্টিপ্লেক্সার D0 অথবা D1 ইনপুটের যেকোনো একটিকে মূল প্রসেসর ডেটাপাথে পাঠিয়ে দেয়।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic Boolean Logic Gate Synthesis & 2-to-1 Multiplexer Engine
// 1. Universal NAND Primitive Gate
function nandGate(a, b) {
  return (~(a & b)) & 1;
}

// 2. Synthesize NOT from NAND: NOT(A) = A NAND A
function notGate(a) {
  return nandGate(a, a);
}

// 3. Synthesize AND from NAND: AND(A, B) = NOT(A NAND B)
function andGate(a, b) {
  return notGate(nandGate(a, b));
}

// 4. Synthesize OR from NAND: OR(A, B) = NOT(A) NAND NOT(B)
function orGate(a, b) {
  return nandGate(notGate(a), notGate(b));
}

// 5. Synthesize XOR using exactly 4 NAND Gates
function xorGate(a, b) {
  const n1 = nandGate(a, b);
  const n2 = nandGate(a, n1);
  const n3 = nandGate(b, n1);
  return nandGate(n2, n3);
}

// 6. 2-to-1 Combinational Multiplexer: Out = S ? D1 : D0
function mux2to1(d0, d1, select) {
  const sNot = notGate(select);
  const path0 = andGate(d0, sNot);
  const path1 = andGate(d1, select);
  return orGate(path0, path1);
}

// Truth Table Verification for Synthesized XOR
console.log('Synthesized XOR Truth Table (Built from 4 NANDs):');
console.log('  XOR(0, 0) =', xorGate(0, 0));
console.log('  XOR(0, 1) =', xorGate(0, 1));
console.log('  XOR(1, 0) =', xorGate(1, 0));
console.log('  XOR(1, 1) =', xorGate(1, 1));

// Multiplexer Routing Test
const testD0 = 1;
const testD1 = 0;
console.log('\\nMultiplexer Test (D0 = 1, D1 = 0):');
console.log('  Select = 0 routes D0 -> Output:', mux2to1(testD0, testD1, 0));
console.log('  Select = 1 routes D1 -> Output:', mux2to1(testD0, testD1, 1));`,
      caption: {
        en: 'A verified simulation proving NAND universality by synthesizing NOT, AND, OR, and XOR gates, and driving a 2-to-1 digital multiplexer.',
        bn: 'NOT, AND, OR এবং XOR গেট তৈরি করে NAND গেটের সার্বজনীনতা প্রমাণ এবং একটি ২-টু-১ ডিজিটাল মাল্টিপ্লেক্সার পরিচালনার বাস্তব সিমুলেশন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'CMOS Logic',
          def: {
            en: 'The dominant integrated circuit technology pairing p-channel (PMOS) and n-channel (NMOS) field-effect transistors to achieve near-zero static power consumption.',
            bn: 'সর্বাধিক ব্যবহৃত সেমিকন্ডাক্টর সার্কিট প্রযুক্তি যা পি-চ্যানেল ও এন-চ্যানেল ট্রানজিস্টর জোড়া ব্যবহার করে প্রায় শূন্য বিদ্যুৎ অপচয়ে লজিক পরিচালনা করে।',
          },
        },
        {
          term: 'NAND Universality',
          def: {
            en: 'The mathematical theorem demonstrating that every boolean operation (AND, OR, NOT, XOR) can be constructed exclusively using interconnected NAND gates.',
            bn: 'গাণিতিক উপপাদ্য যা প্রমাণ করে যে কেবল NAND গেট পরস্পর যুক্ত করে যেকোনো বুলিয়ান লজিক অপারেশন তৈরি করা সম্ভব।',
          },
        },
        {
          term: 'De Morgan\'s Laws',
          def: {
            en: 'Dual boolean equivalence theorems: negating a conjunction equals the disjunction of its negations (~(A & B) = ~A | ~B), and negating a disjunction equals the conjunction of its negations (~(A | B) = ~A & ~B).',
            bn: 'বুলিয়ান বীজগণিতের দুটি মৌলিক সমতা সূত্র: সংযোগের বিপরীত মান পৃথক বিয়োজনের সমান (~(A & B) = ~A | ~B), এবং বিয়োজনের বিপরীত মান পৃথক সংযোগের সমান (~(A | B) = ~A & ~B)।',
          },
        },
        {
          term: 'Multiplexer (MUX)',
          def: {
            en: 'A combinational digital switch that selects one of several data input lines and directs it onto a single shared output line based on digital selection control pins.',
            bn: 'একটি কম্বিনেশনাল ডিজিটাল সুইচ যা একাধিক ইনপুট থেকে নির্বাচন সংকেতের ভিত্তিতে নির্দিষ্ট একটি ডেটাকে আউটপুট লাইনে পাঠিয়ে দেয়।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'Every logic gate introduces a finite propagation delay (typically 5 to 20 picoseconds) as silicon capacitances charge and discharge. The longest continuous chain of combinational gates between two clock registers forms the Critical Path, directly establishing the maximum operating clock frequency of the processor.',
        bn: 'সিলিকন ক্যাপাসিট্যান্স চার্জ ও ডিসচার্জ হওয়ার কারণে প্রতিটি লজিক গেটে সামান্য সময় বা প্রপাগেশন ডিলে ( সাধারণত ৫ থেকে ২০ পিকোসেকেন্ড ) লাগে। ২ টি রেজিস্টারের মধ্যকার দীর্ঘতম লজিক গেটের চেইনকে ক্রিটিক্যাল পাথ বলে, যা প্রসেসরের সর্বোচ্চ নিরাপদ ক্লক ফ্রিকোয়েন্সি নির্ধারণ করে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ca-gates-ex-1',
      kind: 'predict',
      question: {
        en: 'What is the binary digital output of a standard 2-input NAND logic gate when both inputs A and B are set to binary 1?',
        bn: 'একটি স্ট্যান্ডার্ড ২-ইনপুট NAND লজিক গেটের ইনপুট A এবং B উভয়ই বাইনারি ১ হলে আউটপুট কত হবে?'
      },
      answer: '0',
      hint: {
        en: 'A NAND gate is an inverted AND gate: AND(1, 1) = 1, so NOT(1) = 0.',
        bn: 'NAND গেট হলো AND গেটের বিপরীত: AND( ১ , ১ ) = ১ , তাই NOT( ১ ) = ০।',
      },
      explanation: {
        en: 'By definition, a NAND gate produces an output of 0 if and only if all of its inputs are 1. In all other input configurations, it outputs 1.',
        bn: 'সংজ্ঞা অনুযায়ী কেবল সবকটি ইনপুট ১ হলেই NAND গেটের আউটপুট ০ হয়। অন্য সকল ক্ষেত্রে এর আউটপুট ১ থাকে।',
      },
    },
    {
      id: 'ca-gates-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why are NAND and NOR logic gates designated as "universal gates" in digital computer architecture?',
        bn: 'ডিজিটাল কম্পিউটার আর্কিটেকচারে কেন NAND এবং NOR লজিক গেটকে "সার্বজনীন গেট" হিসেবে আখ্যায়িত করা হয়?'
      },
      options: [
        {
          en: 'Any conceivable boolean function and digital processor circuit (including NOT, AND, OR, and XOR) can be constructed exclusively using only interconnected NAND or NOR gates',
          bn: 'যেকোনো ডিজিটাল বুলিয়ান ফাংশন ও প্রসেসর সার্কিট ( যেমন NOT, AND, OR এবং XOR ) শুধুমাত্র NAND অথবা NOR গেট পরস্পর যুক্ত করে তৈরি করা সম্ভব',
        },
        {
          en: 'They operate on universal radio frequencies without needing physical copper wires',
          bn: 'সেগুলো কোনো তার ছাড়াই বেতার তরঙ্গের মাধ্যমে সরাসরি কাজ করতে পারে',
        },
        {
          en: 'They can only be purchased from international satellite space agencies',
          bn: 'সেগুলো কেবল আন্তর্জাতিক মহাকাশ গবেষণা সংস্থা থেকে কেনা সম্ভব হয়',
        },
        {
          en: 'They reduce the weight of silicon microchips by exactly 90%',
          bn: 'সেগুলো সিলিকন মাইক্রোচিপের ওজন ঠিক ৯০% কমিয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'A single gate type is functionally complete if it can synthesize all other boolean logic operations.',
        bn: 'একটিমাত্র গেট দিয়ে যদি অন্য সব লজিক গেট তৈরি করা যায় তবে তাকে কার্যকরভাবে সম্পূর্ণ বা সার্বজনীন বলা হয়।',
      },
      explanation: {
        en: 'Because NAND gates can synthesize inverters, AND gates, and OR gates via De Morgan\'s laws, entire microprocessors can be fabricated using exclusively NAND standard cells.',
        bn: 'ডি মরগানের সূত্রের সাহায্যে NAND দিয়ে NOT, AND ও OR তৈরি করা যায় বলে সম্পূর্ণ প্রসেসর শুধুমাত্র NAND গেট দিয়েই তৈরি করা সম্ভব।',
      },
    },
    {
      id: 'ca-gates-ex-3',
      kind: 'mcq',
      question: {
        en: 'What critical operational function does a 2-to-1 digital multiplexer (MUX) execute inside a central processing unit datapath?',
        bn: 'সেন্ট্রাল প্রসেসিং ইউনিট ডেটাপাথের ভেতরে একটি ২-টু-১ ডিজিটাল মাল্টিপ্লেক্সার (MUX) কোন গুরুত্বপূর্ণ পরিচালনা কাজ সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It acts as a digital steering switch, routing one of two data operand inputs onto a shared datapath bus based on a 1-bit control selection signal',
          bn: 'এটি একটি ডিজিটাল দিক-নিয়ন্ত্রণ সুইচ হিসেবে কাজ করে, যা ১-বিট কন্ট্রোল সংকেতের ওপর ভিত্তি করে দুটি ইনপুটের একটিকে মূল বাসে পাঠায়',
        },
        {
          en: 'It doubles the electrical voltage coming from the wall power outlet',
          bn: 'এটি দেয়ালের সকেট থেকে আসা বিদ্যুতের ভোল্টেজ দ্বিগুণ করে দেয়',
        },
        {
          en: 'It converts analog audio microphone sounds into printed paper documents',
          bn: 'এটি মাইক্রোফোনের অডিও শব্দকে সরাসরি কাগজে প্রিন্ট করে দেয়',
        },
        {
          en: 'It prevents computer keyboards from typing accidental duplicate letters',
          bn: 'এটি কিবোর্ডে ভুলবশত একই বর্ণ বারবার টাইপ হওয়া রোধ করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Think of a multiplexer as a train track switch directing traffic between multiple tracks onto a single track.',
        bn: 'মাল্টিপ্লেক্সারকে রেললাইনের পয়েন্টারের মতো চিন্তা করুন যা একাধিক লাইনের ট্রাফিককে একটি একক লাইনে পরিচালিত করে।',
      },
      explanation: {
        en: 'CPUs use multiplexers extensively to steer operands: for example, choosing whether an ALU input receives a register value or an immediate constant from an instruction.',
        bn: 'সিপিইউ অপারেন্ড নির্বাচনে প্রচুর মাল্টিপ্লেক্সার ব্যবহার করে: যেমন ALU ইনপুটে কোনো রেজিস্টার মান যাবে নাকি সরাসরি কোনো সংখ্যা যাবে তা নির্ধারণ করতে।',
      },
    },
    {
      id: 'ca-gates-ex-4',
      kind: 'predict',
      question: {
        en: 'How many physical MOSFET transistors (pairing PMOS pull-up and NMOS pull-down) are required to build a single standard CMOS inverter (NOT gate)?',
        bn: 'একটি আদর্শ সিএমওএস ইনভার্টার ( NOT গেট ) তৈরি করতে PMOS পুল-আপ এবং NMOS পুল-ডাউন মিলিয়ে মোট কতটি ফিজিক্যাল ট্রানজিস্টর প্রয়োজন হয়?'
      },
      answer: '2',
      hint: {
        en: 'Exactly one PMOS transistor connected to VDD and one NMOS transistor connected to Ground.',
        bn: 'VDD এর সাথে ঠিক একটি PMOS এবং গ্রাউন্ডের সাথে ঠিক একটি NMOS ট্রানজিস্টর।',
      },
      explanation: {
        en: 'A CMOS inverter requires exactly 2 transistors: a PMOS pull-up and an NMOS pull-down, minimizing silicon footprint and static power consumption.',
        bn: 'একটি সিএমওএস ইনভার্টারে ঠিক ২ টি ট্রানজিস্টর লাগে: একটি PMOS পুল-আপ এবং একটি NMOS পুল-ডাউন, যা সিলিকনের জায়গা ও বিদ্যুৎ অপচয় কমায়।',
      },
    },
  ],
  quiz: {
    title: {
      en: 'Transistors & Digital Logic Gates Knowledge Check',
      bn: 'ট্রানজিস্টর এবং ডিজিটাল লজিক গেট জ্ঞান যাচাই',
    },
    questions: [
      {
        id: 'ca-gates-qz-1',
        kind: 'mcq',
        topic: 'cmos-low-power',
        question: {
          en: 'Why did Complementary Metal-Oxide-Semiconductor (CMOS) technology replace older NMOS and bipolar logic in microprocessors?',
          bn: 'মাইক্রোপ্রসেসরে কেন সিএমওএস (CMOS) প্রযুক্তি প্রাচীন NMOS এবং বাইপোলার লজিককে প্রতিস্থাপন করে শীর্ষস্থান দখল করেছে?'
        },
        options: [
          {
            en: 'CMOS circuits draw virtually zero static electrical current when in a steady state, dissipating energy only dynamically during the brief moment when logic levels switch',
            bn: 'সিএমওএস সার্কিট স্থিতিশীল অবস্থায় প্রায় শূন্য বিদ্যুৎ খরচ করে, কেবল লজিক লেভেল পরিবর্তনের সংক্ষিপ্ত মুহূর্তেই বিদ্যুৎ ব্যয় হয়',
          },
          {
            en: 'CMOS transistors are made entirely of recycled ocean plastics rather than silicon',
            bn: 'সিএমওএস ট্রানজিস্টর সিলিকনের বদলে সমুদ্রের রিসাইকেল করা প্লাস্টিক দিয়ে তৈরি',
          },
          {
            en: 'CMOS chips operate without needing any ground electrical reference',
            bn: 'সিএমওএস চিপে কোনো গ্রাউন্ড সংযোগের প্রয়োজন হয় না',
          },
          {
            en: 'CMOS technology allows computers to display 3D holograms in open air',
            bn: 'সিএমওএস প্রযুক্তি বাতাসে থ্রিডি হলোগ্রাম প্রদর্শন করতে পারে',
          },
        ],
        answer: 0,
        hint: {
          en: 'In steady state, one transistor in the complementary pair is always OFF, breaking direct current from VDD to Ground.',
          bn: 'স্থিতিশীল অবস্থায় জোড়ার যেকোনো একটি ট্রানজিস্টর বন্ধ থাকে, ফলে VDD থেকে গ্রাউন্ডে সরাসরি বিদ্যুৎ প্রবাহিত হতে পারে না।',
        },
        explanation: {
          en: 'Because either the PMOS or NMOS is off during steady state 0 or 1, CMOS dissipates almost zero static power, allowing billions of transistors on a single microchip without melting.',
          bn: 'যেহেতু 0 বা 1 অবস্থায় সর্বদা একটি ট্রানজিস্টর বন্ধ থাকে, তাই সিএমওএসে স্ট্যাটিক পাওয়ার অপচয় প্রায় শূন্য থাকে যা বিলিয়ন ট্রানজিস্টর চিপে রাখা সম্ভব করে।',
        },
      },
      {
        id: 'ca-gates-qz-2',
        kind: 'mcq',
        topic: 'demorgan-or-synthesis',
        question: {
          en: 'According to De Morgan\'s laws in boolean algebra, how can an OR gate operation (A OR B) be synthesized entirely using NAND gates?',
          bn: 'বুলিয়ান বীজগণিতে ডি মরগানের সূত্রানুসারে শুধুমাত্র NAND গেট ব্যবহার করে কীভাবে একটি OR গেট অপারেশন ( A OR B ) তৈরি করা যায়?'
        },
        options: [
          {
            en: 'Invert input A using a NAND gate, invert input B using a NAND gate, and route both inverted signals into a third NAND gate: NOT(A) NAND NOT(B)',
            bn: 'NAND দিয়ে A উল্টে দিন, NAND দিয়ে B উল্টে দিন এবং উভয় উল্টানো সিগন্যালকে তৃতীয় একটি NAND গেটে প্রবেশ করান: NOT(A) NAND NOT(B)',
          },
          {
            en: 'Connect the outputs of 100 NAND gates to an external audio speaker',
            bn: '১০০ টি NAND গেটের আউটপুট একটি বাহ্যিক স্পিকারের সাথে যুক্ত করে',
          },
          {
            en: 'Multiply the voltage of input A by the square root of input B',
            bn: 'ইনপুট A এর ভোল্টেজকে ইনপুট B এর বর্গমূল দিয়ে গুণ করে',
          },
          {
            en: 'Disconnect all electrical power to the logic breadboard',
            bn: 'সার্কিট বোর্ডের সমস্ত বৈদ্যুতিক সংযোগ সম্পূর্ণ বিচ্ছিন্ন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'De Morgan\'s theorem states: A OR B = NOT(NOT(A) AND NOT(B)). Since NAND is NOT-AND, feeding inverted inputs produces OR.',
          bn: 'ডি মরগানের সূত্র: A OR B = NOT(NOT(A) AND NOT(B))। উল্টানো ইনপুটগুলো NAND গেটে দিলে তা OR গেটের কাজ করে।',
        },
        explanation: {
          en: 'By De Morgan\'s equivalence, NOT(A) NAND NOT(B) equals NOT(NOT(A) AND NOT(B)), which simplifies directly to A OR B.',
          bn: 'ডি মরগানের সমতানুসারে NOT(A) NAND NOT(B) সমীকরণটি সরলীকরণ করলে সরাসরি A OR B পাওয়া যায়।',
        },
      },
      {
        id: 'ca-gates-qz-3',
        kind: 'mcq',
        topic: 'propagation-delay-critical-path',
        question: {
          en: 'What fundamental physical constraint prevents engineers from arbitrarily increasing microprocessor clock frequencies beyond 5 GHz or 6 GHz?',
          bn: 'কোন মৌলিক ভৌত সীমাবদ্ধতা ইঞ্জিনিয়ারদের মাইক্রোপ্রসেসরের ক্লক গতি ৫ গিগাহার্টজ বা ৬ গিগাহার্টজের উপরে অবাধে বৃদ্ধি করতে বাধা দেয়?'
        },
        options: [
          {
            en: 'Transistor propagation delay and RC interconnect parasitics along the Critical Path, combined with thermal power dissipation scaling exponentially with frequency',
            bn: 'ক্রিটিক্যাল পাথে ট্রানজিস্টরের প্রপাগেশন ডিলে ও রোধ-ক্যাপাসিট্যান্স বিলম্ব এবং ফ্রিকোয়েন্সি বৃদ্ধির সাথে তাপ ও বিদ্যুৎ অপচয়ের তীব্র বৃদ্ধি',
          },
          {
            en: 'International clock treaties forbidding computers from exceeding 1000 cycles per second',
            bn: 'আন্তর্জাতিক চুক্তি যা কম্পিউটারকে প্রতি সেকেন্ডে ১০০০ সাইকেলের বেশি চলতে নিষেধ করে',
          },
          {
            en: 'Computer monitors losing color reproduction if clock rates exceed 1 gigahertz',
            bn: 'ক্লক গতি ১ গিগাহার্টজ ছাড়ালে মনিটরের রঙের গুণমান নষ্ট হয়ে যাওয়া',
          },
          {
            en: 'Motherboard circuit boards physically expanding and cracking from clock vibrations',
            bn: 'ক্লকের কম্পনে মাদারবোর্ডের সার্কিট বোর্ড ফেটে ভেঙে যাওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Electricity takes time to propagate through gates; if the clock ticks before signals settle, data corrupts.',
          bn: 'গেটের মধ্য দিয়ে সংকেত যেতে সময় লাগে; সিগন্যাল স্থির হওয়ার আগেই ক্লক টিক করলে ডেটা নষ্ট হয়ে যায়।',
        },
        explanation: {
          en: 'Clock cycle time must exceed the critical path propagation delay plus register setup times. Pushing frequencies higher produces timing errors and catastrophic heat generation.',
          bn: 'ক্লক সাইকেলের সময় অবশ্যই ক্রিটিক্যাল পাথের প্রপাগেশন ডিলের চেয়ে বেশি হতে হয়। অতিরিক্ত গতি দিলে টাইমিং ভুল হয় এবং মারাত্মক তাপ তৈরি হয়।',
        },
      },
      {
        id: 'ca-gates-qz-4',
        kind: 'mcq',
        topic: '4-to-1-multiplexer',
        question: {
          en: 'How many binary digital selection control lines are required to steer among 4 independent data inputs onto a single output line in a 4-to-1 multiplexer?',
          bn: 'একটি ৪-টু-১ মাল্টিপ্লেক্সারে ৪ টি স্বাধীন ইনপুট থেকে আউটপুটে পরিচালনা করতে কতটি বাইনারি সিলেকশন কন্ট্রোল লাইনের প্রয়োজন হয়?'
        },
        options: [
          {
            en: '2 selection control lines (since 2^2 = 4 combinations: 00, 01, 10, 11)',
            bn: '২ টি সিলেকশন কন্ট্রোল লাইন ( যেহেতু ২^২ = ৪ টি বিন্যাস: ০০, ০১, ১০, ১১ )',
          },
          {
            en: '16 separate high-voltage cables',
            bn: '১৬ টি পৃথক উচ্চ-ভোল্টেজ কেবল',
          },
          {
            en: '0 control lines because multiplexers read minds automatically',
            bn: '০ টি কন্ট্রোল লাইন কারণ মাল্টিপ্লেক্সার স্বয়ংক্রিয়ভাবে মন পড়তে পারে',
          },
          {
            en: '100 selection lines connected in parallel',
            bn: '১০০ টি সিলেকশন লাইন সমান্তরালে যুক্ত',
          },
        ],
        answer: 0,
        hint: {
          en: 'To select among N inputs, a multiplexer requires log2(N) control lines.',
          bn: 'N সংখ্যক ইনপুট থেকে বেছে নিতে log2(N) সংখ্যক কন্ট্রোল লাইনের প্রয়োজন হয়।',
        },
        explanation: {
          en: 'Two binary bits provide 4 distinct states: 00 selects input 0, 01 selects input 1, 10 selects input 2, and 11 selects input 3.',
          bn: 'দুটি বাইনারি বিট ৪ টি পৃথক অবস্থা তৈরি করে: ০০ ইনপুট ০ নির্বাচন করে, ০১ ইনপুট ১, ১০ ইনপুট ২ এবং ১১ ইনপুট ৩ নির্বাচন করে।',
        },
      },
    ],
  },
  next: {
    slug: 'alu-intro',
    title: {
      en: 'Arithmetic Logic Unit (ALU), Binary Adders & Status Flags',
      bn: 'অ্যারিথমেটিক লজিক ইউনিট (ALU), বাইনারি অ্যাডার এবং স্ট্যাটাস ফ্ল্যাগ',
    },
  },
};
