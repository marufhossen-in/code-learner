import type { Lesson } from '../../../lib/types';

export const BitsBinaryLesson: Lesson = {
  slug: 'bits-binary',
  tech: 'computer-architecture',
  title: {
    en: 'Binary Data Representation, Two\'s Complement & IEEE 754 Floating Point',
    bn: 'বাইনারি ডেটা রূপায়ন, টু-স কমপ্লিমেন্ট এবং IEEE 754 ফ্লোটিং পয়েন্ট',
  },
  summary: {
    en: 'Understand how computer hardware represents integers, fractions, and text in binary voltages. Master unsigned vs signed two\'s complement arithmetic, sign extension, arithmetic overflow, IEEE 754 single-precision (32-bit) floating point format, and Little-Endian vs Big-Endian byte orders.',
    bn: 'কম্পিউটার হার্ডওয়্যার কীভাবে বাইনারি ভোল্টেজ দিয়ে পূর্ণসংখ্যা, ভগ্নাংশ ও টেক্সট সংরক্ষণ করে তা বিশ্লেষণ করুন। আনসাইনড বনাম সাইনড টু-স কমপ্লিমেন্ট গাণিতিক নিয়ম, সাইন এক্সটেনশন, এরিথমেটিক ওভারফ্লো, IEEE 754 সিঙ্গেল-প্রিসিশন ( ৩২-বিট ) ফ্লোটিং পয়েন্ট ফরম্যাট এবং লিটল-এন্ডিয়ান বনাম বিগ-এন্ডিয়ান বাইট সিকোয়েন্স আয়ত্ত করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'voltage-domains-and-twos-complement',
      text: {
        en: 'Digital Voltage Levels & Two\'s Complement Integer Arithmetic',
        bn: 'ডিজিটাল ভোল্টেজ স্তর এবং ২ এর কমপ্লিমেন্ট ইন্টিজার অ্যারিথমেটিক',
      },
    },
    {
      type: 'para',
      text: {
        en: 'At the physical silicon layer, digital computers represent data using voltage differentials. A high voltage (such as 3.3 volts or 1.2 volts) represents a binary 1, while ground (0 volts) represents a binary 0. Unsigned integers map directly to positive quantities: an 8-bit byte represents numbers from 0 to 255. However, signed integer arithmetic requires a representation that handles negative values gracefully. Early computers experimented with sign-magnitude, but modern architectures universally standardized on Two\'s Complement encoding.',
        bn: 'ফিজিক্যাল সিলিকন স্তরে ডিজিটাল কম্পিউটারগুলো ভোল্টেজের তারতম্য ব্যবহার করে ডেটা প্রকাশ করে। একটি উচ্চ ভোল্টেজ ( যেমন ৩.৩ ভোল্ট বা ১.২ ভোল্ট ) বাইনারি ১ নির্দেশ করে, আর গ্রাউন্ড ( ০ ভোল্ট ) বাইনারি ০ নির্দেশ করে। আনসাইনড ইন্টিজার সরাসরি ধনাত্মক মান প্রকাশ করে: একটি ৮-বিট বাইট ০ থেকে ২৫৫ পর্যন্ত সংখ্যা ধারণ করতে পারে। কিন্তু সাইনড সংখ্যার ক্ষেত্রে ঋণাত্মক মান সংরক্ষণের জন্য উন্নত পদ্ধতির প্রয়োজন হয়। প্রাচীন কম্পিউটারগুলোতে সাইন-ম্যাগনিটিউড ব্যবহৃত হলেও আধুনিক আর্কিটেকচার সর্বজনীনভাবে ২ এর কমপ্লিমেন্ট পদ্ধতি গ্রহণ করেছে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Two\'s Complement Circle, IEEE 754 Layout & Endianness',
        bn: '২ এর কমপ্লিমেন্ট চক্র, IEEE 754 কাঠামো এবং এন্ডিয়াননেস',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="twosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="floatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="endianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
  </defs>

  <!-- Left: 8-Bit Two's Complement Range -->
  <rect x="25" y="30" width="240" height="370" rx="10" fill="url(#twosGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="40" y="60" font-size="14" font-weight="700" fill="#0369a1">8-BIT SIGNED INTEGER</text>
  <text x="40" y="80" font-size="11" fill="#64748b">Two's Complement Encoding</text>

  <rect x="40" y="100" width="210" height="60" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="50" y="125" font-size="12" font-weight="700" fill="#0f172a">Max Positive (+127)</text>
  <text x="50" y="145" font-size="11" fill="#047857">01111111 (Hex: 0x7F)</text>

  <rect x="40" y="170" width="210" height="60" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="50" y="195" font-size="12" font-weight="700" fill="#0f172a">Zero (0)</text>
  <text x="50" y="215" font-size="11" fill="#475569">00000000 (Single Zero!)</text>

  <rect x="40" y="240" width="210" height="60" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="50" y="265" font-size="12" font-weight="700" fill="#0f172a">Minus One (-1)</text>
  <text x="50" y="285" font-size="11" fill="#b45309">11111111 (Hex: 0xFF)</text>

  <rect x="40" y="310" width="210" height="70" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="50" y="335" font-size="12" font-weight="700" fill="#0f172a">Max Negative (-128)</text>
  <text x="50" y="355" font-size="11" fill="#dc2626">10000000 (Hex: 0x80)</text>
  <text x="50" y="370" font-size="10" fill="#dc2626">+127 + 1 wraps to -128!</text>

  <!-- Middle: IEEE 754 32-bit Float Format -->
  <rect x="280" y="30" width="260" height="370" rx="10" fill="url(#floatGrad)" stroke="#7e22ce" stroke-width="2"/>
  <text x="295" y="60" font-size="14" font-weight="700" fill="#6b21a8">IEEE 754 FLOAT (32-BIT)</text>
  <text x="295" y="80" font-size="11" fill="#64748b">Single-Precision Structure</text>

  <rect x="295" y="100" width="230" height="65" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="305" y="125" font-size="12" font-weight="700" fill="#581c87">Sign Bit: 1 Bit (Bit 31)</text>
  <text x="305" y="145" font-size="11" fill="#475569">0 = Positive (+) | 1 = Negative (-)</text>

  <rect x="295" y="175" width="230" height="75" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="305" y="200" font-size="12" font-weight="700" fill="#581c87">Exponent: 8 Bits (Bits 30-23)</text>
  <text x="305" y="220" font-size="11" fill="#475569">Biased by +127</text>
  <text x="305" y="238" font-size="11" fill="#475569">Actual Power = Exp - 127</text>

  <rect x="295" y="260" width="230" height="80" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="305" y="285" font-size="12" font-weight="700" fill="#581c87">Mantissa: 23 Bits (Bits 22-0)</text>
  <text x="305" y="305" font-size="11" fill="#475569">Implicit leading 1.fraction</text>
  <text x="305" y="325" font-size="11" fill="#047857">Value = (-1)^S * 1.M * 2^(E-127)</text>

  <rect x="295" y="348" width="230" height="35" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="410" y="370" font-size="11" font-weight="600" fill="#334155" text-anchor="middle">13.5 = 0x41580000</text>

  <!-- Right: Endianness Byte Ordering -->
  <rect x="555" y="30" width="240" height="370" rx="10" fill="url(#endianGrad)" stroke="#047857" stroke-width="2"/>
  <text x="570" y="60" font-size="14" font-weight="700" fill="#065f46">BYTE ENDIANNESS</text>
  <text x="570" y="80" font-size="11" fill="#64748b">Word: 0x12345678</text>

  <rect x="570" y="105" width="210" height="120" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="580" y="130" font-size="12" font-weight="700" fill="#0f172a">Little-Endian (x86, ARM)</text>
  <text x="580" y="150" font-size="10" fill="#475569">Lowest byte at lowest address:</text>
  <text x="580" y="175" font-size="13" font-family="monospace" font-weight="700" fill="#047857">Addr 0: 78 | Addr 1: 56</text>
  <text x="580" y="195" font-size="13" font-family="monospace" font-weight="700" fill="#047857">Addr 2: 34 | Addr 3: 12</text>
  <text x="580" y="215" font-size="10" fill="#64748b">LSB stored first</text>

  <rect x="570" y="240" width="210" height="120" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="580" y="265" font-size="12" font-weight="700" fill="#0f172a">Big-Endian (Network Order)</text>
  <text x="580" y="285" font-size="10" fill="#475569">Highest byte at lowest address:</text>
  <text x="580" y="310" font-size="13" font-family="monospace" font-weight="700" fill="#0369a1">Addr 0: 12 | Addr 1: 34</text>
  <text x="580" y="330" font-size="13" font-family="monospace" font-weight="700" fill="#0369a1">Addr 2: 56 | Addr 3: 78</text>
  <text x="580" y="350" font-size="10" fill="#64748b">MSB stored first</text>
</svg>`,
      caption: {
        en: 'The three foundational binary representations: Two\'s Complement signed integer range with single zero; IEEE 754 single-precision float with 8 exponent bits and 23 mantissa bits; Little-Endian vs Big-Endian byte orders.',
        bn: '৩ টি মৌলিক বাইনারি ডেটা রূপায়ন: একক ০ বিশিষ্ট ২ এর কমপ্লিমেন্ট সাইনড রেঞ্জ, ৮ টি এক্সপোনেন্ট ও ২৩ টি মেন্টিসা বিটযুক্ত IEEE 754 ফ্লোট এবং লিটল-এন্ডিয়ান বনাম বিগ-এন্ডিয়ান বাইট সিকোয়েন্স।',
      },
    },
    {
      type: 'heading',
      id: 'twos-complement-math-and-ieee754',
      text: {
        en: 'Two\'s Complement Arithmetic & The IEEE 754 Standard',
        bn: '২ এর কমপ্লিমেন্ট গাণিতিক নিয়ম এবং IEEE 754 মানদণ্ড',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Two\'s complement offers an enormous hardware engineering advantage: addition and subtraction utilize the exact same physical adder circuits. To subtract B from A, the CPU simply inverts all bits of B, adds 1 to form the two\'s complement, and routes it into the binary adder. There is no positive zero versus negative zero ambiguity. Meanwhile, real fractional numbers cannot be stored with fixed binary points without sacrificing vast numerical range. The IEEE 754 standard partitions 32 bits into 1 Sign bit, 8 Exponent bits (biased by 127), and 23 Mantissa bits.',
        bn: 'হার্ডওয়্যার প্রকৌশলে ২ এর কমপ্লিমেন্ট একটি বিশাল সুবিধা প্রদান করে: যোগ এবং বিয়োগ উভয় অপারেশনে একই ফিজিক্যাল অ্যাডার সার্কিট ব্যবহার করা যায়। A থেকে B বিয়োগ করতে সিপিইউ কেবল B এর সকল বিট উল্টে দিয়ে তার সাথে ১ যোগ করে এবং ফলাফলটি অ্যাডারে পাঠিয়ে দেয়। এখানে ধনাত্মক শূন্য ও ঋণাত্মক শূন্যের কোনো বিভ্রান্তি থাকে না। অন্যদিকে বাস্তব ভগ্নাংশ সংখ্যা সংরক্ষণে নির্দিষ্ট বাইনারি পয়েন্ট ব্যবহার করলে সংখ্যার পরিসর মারাত্মকভাবে কমে যায়। তাই IEEE 754 মানদণ্ড ৩২ বিটকে ১ টি সাইন বিট, ৮ টি এক্সপোনেন্ট বিট ( ১২৭ দ্বারা বায়াসড ) এবং ২৩ টি মেন্টিসা বিটে ভাগ করে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic Binary Arithmetic, Two's Complement Negation & Float32 Bit Parser
function negateTwosComplement8(value) {
  // Invert all bits and add 1, clamped to 8 bits (0xFF)
  return (~value + 1) & 0xFF;
}

function add8BitSigned(a, b) {
  const rawSum = (a + b) & 0xFF;
  // Signed overflow check: adding two numbers with matching signs yielding opposite sign
  const aSign = (a & 0x80) !== 0;
  const bSign = (b & 0x80) !== 0;
  const sumSign = (rawSum & 0x80) !== 0;
  const overflow = (aSign === bSign) && (aSign !== sumSign);
  const signedResult = rawSum > 127 ? rawSum - 256 : rawSum;

  return { rawSum, signedResult, overflow };
}

// Inspect IEEE 754 32-bit Single-Precision Float Bits
function parseIEEE754(numberValue) {
  const buffer = Buffer.alloc(4);
  buffer.writeFloatBE(numberValue, 0);
  const rawBits = buffer.readUInt32BE(0);

  const signBit = (rawBits >>> 31) & 1;
  const exponentBits = (rawBits >>> 23) & 0xFF;
  const mantissaBits = rawBits & 0x7FFFFF;
  const unbiasedExponent = exponentBits - 127;

  return {
    rawBits: '0x' + rawBits.toString(16).toUpperCase(),
    signBit,
    exponentBits,
    unbiasedExponent,
    mantissaBits,
  };
}

// 1. Two's complement negation of positive 5
const neg5 = negateTwosComplement8(5);
console.log('Two\\'s complement of 5 (8-bit):', neg5, '(Hex: 0x' + neg5.toString(16) + ')');

// 2. Arithmetic Overflow: Adding 1 to maximum positive signed 8-bit integer (127)
const overflowResult = add8BitSigned(127, 1);
console.log('127 + 1 result:', overflowResult.signedResult, '| Overflow occurred:', overflowResult.overflow);

// 3. Parse IEEE 754 floating point number 13.5
const floatParse = parseIEEE754(13.5);
console.log('Float 13.5 binary encoding:');
console.log('  Hex representation:', floatParse.rawBits);
console.log('  Sign bit:', floatParse.signBit, '(0 = positive)');
console.log('  Biased Exponent:', floatParse.exponentBits, '| Unbiased (2^x):', floatParse.unbiasedExponent);
console.log('  Mantissa fraction bits:', floatParse.mantissaBits);`,
      caption: {
        en: 'A verified simulation showing two\'s complement negation, arithmetic overflow detection upon wrapping, and IEEE 754 single-precision bitfield extraction.',
        bn: '২ এর কমপ্লিমেন্ট নেগেশন, ওভারফ্লো শনাক্তকরণ এবং IEEE 754 সিঙ্গেল-প্রিসিশন ফ্লোটের বিটফিল্ড বিশ্লেষণের বাস্তব সিমুলেশন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Two\'s Complement',
          def: {
            en: 'The universal binary encoding system for signed integers where a negative number is produced by inverting all bits and adding one (~x + 1).',
            bn: 'সাইনড সংখ্যার জন্য ব্যবহৃত সর্বজনীন বাইনারি এনকোডিং যেখানে সমস্ত বিট উল্টে দিয়ে ১ যোগ করে ঋণাত্মক সংখ্যা তৈরি করা হয়।',
          },
        },
        {
          term: 'Arithmetic Overflow',
          def: {
            en: 'A processor hardware condition where the mathematical calculation result exceeds the maximum representable bit capacity, corrupting the sign bit.',
            bn: 'প্রসেসরের একটি অবস্থা যেখানে গণনার ফলাফল রেজিস্টারের সর্বোচ্চ ধারণক্ষমতা অতিক্রম করে সাইন বিটকে বিকৃত করে ফেলে।',
          },
        },
        {
          term: 'IEEE 754 Standard',
          def: {
            en: 'The global technical standard for floating-point computation, structuring 32-bit floats into 1 sign bit, 8 biased exponent bits, and 23 mantissa bits.',
            bn: 'ফ্লোটিং-পয়েন্ট গণনার আন্তর্জাতিক মানদণ্ড যা ৩২-বিট ফ্লোটকে ১ টি সাইন বিট, ৮ টি এক্সপোনেন্ট বিট এবং ২৩ টি মেন্টিসা বিটে বিন্যস্ত করে।',
          },
        },
        {
          term: 'Little-Endian',
          def: {
            en: 'The memory byte ordering format where the least significant byte (LSB) of a multi-byte word is placed at the lowest physical memory address.',
            bn: 'মেমোরিতে বাইট সংরক্ষণের পদ্ধতি যেখানে কোনো সংখ্যার সর্বনিম্ন গুরুত্বপূর্ণ বাইটটি সর্বনিম্ন মেমোরি ঠিকানায় রাখা হয়।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'Integer overflow represents a critical security vulnerability in software engineering. If an application calculates memory buffer allocation using 32-bit signed integers, an arithmetic wrap around can allocate a tiny 10-byte buffer while copying gigabytes of user payload, causing disastrous heap buffer overflow exploits.',
        bn: 'ইন্টিজার ওভারফ্লো সফটওয়্যার ইঞ্জিনিয়ারিংয়ের একটি মারাত্মক নিরাপত্তা ঝুঁকি। যদি কোনো অ্যাপ্লিকেশন ৩২-বিট সাইনড ইন্টিজার দিয়ে মেমোরি বাফারের আকার নির্ধারণ করে, তবে ওভারফ্লো হয়ে মাত্র ১০ বাইটের বাফার তৈরি হতে পারে যার ভেতরে গিগাবাইট ডেটা কপি করতে গিয়ে বিপজ্জনক বাফার ওভারফ্লো আক্রমণ ঘটতে পারে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ca-bits-ex-1',
      kind: 'predict',
      question: {
        en: 'In an 8-bit signed binary system, what is the decimal equivalent of the bit pattern 11111111 (hexadecimal 0xFF)?',
        bn: '৮-বিট সাইনড বাইনারি সিস্টেমে 11111111 ( হেক্সাডেসিমেল 0xFF ) বিট প্যাটার্নের দশমিক মান কত?'
      },
      answer: '-1',
      hint: {
        en: 'Invert all bits (00000000) and add 1 (00000001), then prefix the negative sign.',
        bn: 'সব বিট উল্টে দিন ( ০০০০০০০০ ) এবং ১ যোগ করুন ( ০০০০০০০১ ), তারপর ঋণাত্মক চিহ্ন বসান।',
      },
      explanation: {
        en: 'In two\'s complement, all 1s represent -1. To confirm: -128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = -1.',
        bn: '২ এর কমপ্লিমেন্টে সব বিট ১ হলে তা -১ প্রকাশ করে। হিসাব: -১২৮ + ৬৪ + ৩২ + ১৬ + ৮ + ৪ + ২ + ১ = -১।',
      },
    },
    {
      id: 'ca-bits-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why do modern microprocessor arithmetic logic units (ALUs) utilize two\'s complement instead of sign-magnitude for signed integer operations?',
        bn: 'আধুনিক মাইক্রোপ্রসেসরের অ্যারিথমেটিক লজিক ইউনিট (ALU) কেন সাইন-ম্যাগনিটিউডের পরিবর্তে টু-স কমপ্লিমেন্ট পদ্ধতি ব্যবহার করে?'
      },
      options: [
        {
          en: 'It eliminates the redundant negative zero representation and allows addition and subtraction to execute through identical physical adder circuits',
          bn: 'এটি অপ্রয়োজনীয় ঋণাত্মক শূন্য দূর করে এবং যোগ ও বিয়োগ উভয় অপারেশনকে একই ফিজিক্যাল অ্যাডার সার্কিট দিয়ে চালাতে দেয়',
        },
        {
          en: 'It makes magnetic disk drives spin at double their factory rotation speed',
          bn: 'এটি ম্যাগনেটিক ডিস্কের ঘূর্ণন গতি কারখানার তৈরি গতির দ্বিগুণ করে দেয়',
        },
        {
          en: 'It prevents computer screens from displaying dark wallpaper colors',
          bn: 'এটি কম্পিউটার স্ক্রিনে কালো রঙের ওয়ালপেপার দেখানো বন্ধ করে দেয়',
        },
        {
          en: 'It eliminates the need for any electrical power in RAM chips',
          bn: 'এটি র‍্যাম চিপে কোনো বৈদ্যুতিক শক্তির প্রয়োজনীয়তা সম্পূর্ণরূপে দূর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Consider the silicon cost of building separate subtraction circuits versus reusing the binary adder.',
        bn: 'আলাদা বিয়োগ সার্কিট তৈরির খরচ বনাম একই অ্যাডার সার্কিট বারবার ব্যবহারের সুবিধা চিন্তা করুন।',
      },
      explanation: {
        en: 'Two\'s complement computes A - B as A + (~B + 1). The ALU reuses the same addition hardware without needing dedicated subtraction logic, saving silicon area.',
        bn: 'টু-স কমপ্লিমেন্টে A - B এর বদলে A + (~B + ১) করা হয়। ফলে নতুন বিয়োগ সার্কিট না বানিয়ে বিদ্যমান অ্যাডার দিয়েই কাজ চলে যা সিলিকন সাশ্রয় করে।',
      },
    },
    {
      id: 'ca-bits-ex-3',
      kind: 'mcq',
      question: {
        en: 'In an 8-bit signed integer register holding the maximum positive value 127, what occurs when the CPU executes an instruction adding 1?',
        bn: 'সর্বোচ্চ ধনাত্মক মান ১২৭ থাকা একটি ৮-বিট সাইনড ইন্টিজার রেজিস্টারে ১ যোগ করার নির্দেশ কার্যকর করলে কী ঘটবে?'
      },
      options: [
        {
          en: 'Arithmetic overflow occurs: the binary pattern wraps to 10000000, representing negative 128 (-128), and the hardware sets the Overflow Flag (V)',
          bn: 'এরিথমেটিক ওভারফ্লো ঘটবে: বাইনারি প্যাটার্নটি ১০০০০০০০ হয়ে যাবে যা ঋণাত্মক ১২৮ (-১২৮) প্রকাশ করে এবং হার্ডওয়্যার ওভারফ্লো ফ্ল্যাগ সেট করে',
        },
        {
          en: 'The computer immediately powers off and emits a siren sound',
          bn: 'কম্পিউটার তৎক্ষণাৎ বন্ধ হয়ে যায় এবং সাইরেন বাজানো শুরু করে',
        },
        {
          en: 'The value changes to positive 1000 and doubles available RAM',
          bn: 'মানটি ধনাত্মক ১০০০ এ পরিণত হয় এবং র‍্যামের পরিমাণ দ্বিগুণ করে দেয়',
        },
        {
          en: 'The operating system converts all user text files into PDF documents',
          bn: 'অপারেটিং সিস্টেম ব্যবহারকারীর সমস্ত ফাইলকে পিডিএফ ফাইলে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: '01111111 (+127) plus 1 becomes 10000000, which flips the sign bit to 1 (negative).',
        bn: '০১১১১১১১ (+১২৭) এর সাথে ১ যোগ করলে ১০০০০০০০ হয়, যা সাইন বিট ১ (ঋণাত্মক) করে দেয়।',
      },
      explanation: {
        en: 'In 8-bit two\'s complement, adding 1 to +127 overflows into the sign bit, wrapping to -128. The processor records this arithmetic fault in the status flags register.',
        bn: '৮-বিট ২ এর কমপ্লিমেন্টে +১২৭ এর সাথে ১ যোগ করলে তা সাইন বিটে উপচে পড়ে -১২৮ এ রূপ নেয়। প্রসেসর স্ট্যাটাস ফ্ল্যাগে এই ত্রুটি সংরক্ষণ করে।',
      },
    },
    {
      id: 'ca-bits-ex-4',
      kind: 'predict',
      question: {
        en: 'In the IEEE 754 standard for single-precision 32-bit floating point numbers, how many bits are allocated specifically for the biased exponent field?',
        bn: 'IEEE 754 স্ট্যান্ডার্ডের ৩২-বিট সিঙ্গেল-প্রিসিশন ফ্লোটিং পয়েন্টে শুধুমাত্র বায়াসড এক্সপোনেন্ট ফিল্ডের জন্য কতটি বিট বরাদ্দ থাকে?'
      },
      answer: '8',
      hint: {
        en: 'The 32 bits are divided as: 1 sign bit, a certain number of exponent bits, and 23 mantissa bits.',
        bn: '৩২ বিট এভাবে বিভক্ত: ১ টি সাইন বিট, নির্দিষ্ট সংখ্যক এক্সপোনেন্ট বিট এবং ২৩ টি মেন্টিসা বিট।',
      },
      explanation: {
        en: 'IEEE 754 single-precision allocates 1 bit for sign, 8 bits for exponent (biased by 127), and 23 bits for mantissa, totaling exactly 32 bits.',
        bn: 'IEEE 754 সিঙ্গেল প্রিসিশনে ১ টি সাইন বিট, ৮ টি এক্সপোনেন্ট বিট ( ১২৭ দিয়ে বায়াসড ) এবং ২৩ টি মেন্টিসা বিট থাকে, যা মোট ৩২ বিটের সমান।',
      },
    },
  ],
  quiz: {
    title: {
      en: 'Binary Representation & Floating Point Knowledge Check',
      bn: 'বাইনারি ডেটা রূপায়ন এবং ফ্লোটিং পয়েন্ট জ্ঞান যাচাই',
    },
    questions: [
      {
        id: 'ca-bits-qz-1',
        kind: 'mcq',
        topic: 'twos-complement-subtraction',
        question: {
          en: 'How does an Arithmetic Logic Unit perform the subtraction calculation (A - B) using two\'s complement arithmetic?',
          bn: 'টু-স কমপ্লিমেন্ট ব্যবহার করে একটি অ্যারিথমেটিক লজিক ইউনিট কীভাবে বিয়োগ অপারেশন ( A - B ) সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It inverts all bits of B, asserts a carry-in of 1 to compute (~B + 1), and feeds A and the inverted B directly into the standard hardware adder',
            bn: 'এটি B এর সকল বিট উল্টে দেয়, ক্যারি-ইন হিসেবে ১ দিয়ে (~B + ১) তৈরি করে এবং A ও রূপান্তরিত B কে সাধারণ অ্যাডার সার্কিটে যুক্ত করে',
          },
          {
            en: 'It sends the numbers over the internet to a cloud computing calculation API',
            bn: 'এটি সংখ্যাগুলোকে ক্লাউড এপিআই সার্ভারে পাঠিয়ে ফলাফল নিয়ে আসে',
          },
          {
            en: 'It converts both numbers into Roman numerals before subtracting them manually',
            bn: 'এটি বিয়োগ করার আগে উভয় সংখ্যাকে রোমান সংখ্যায় রূপান্তর করে',
          },
          {
            en: 'It halts the central processing unit clock until the operator enters the answer',
            bn: 'অপারেটর উত্তর না দেওয়া পর্যন্ত এটি সেন্ট্রাল প্রসেসিং ইউনিটের ক্লক বন্ধ রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Subtraction is mathematically implemented as addition of the negated operand.',
          bn: 'গাণিতিকভাবে বিয়োগ হলো ঋণাত্মক সংখ্যার সাধারণ যোগফল মাত্র।',
        },
        explanation: {
          en: 'By computing A + (~B + 1), the processor executes subtraction at the exact same speed and using the identical logic gates as addition.',
          bn: 'A + (~B + ১) হিসাবের মাধ্যমে প্রসেসর যোগের মতো একই গতিতে এবং একই লজিক গেট ব্যবহার করে বিয়োগ সম্পন্ন করে।',
        },
      },
      {
        id: 'ca-bits-qz-2',
        kind: 'mcq',
        topic: 'ieee754-bias-offset',
        question: {
          en: 'Why does the IEEE 754 floating-point standard store exponents using a bias offset (such as adding 127 in single-precision) rather than two\'s complement?',
          bn: 'IEEE 754 ফ্লোটিং-পয়েন্ট স্ট্যান্ডার্ড কেন ২ এর কমপ্লিমেন্টের বদলে বায়াস অফসেট ( যেমন সিঙ্গেল প্রিসিশনে ১২৭ যোগ করা ) ব্যবহার করে এক্সপোনেন্ট সংরক্ষণ করে?'
        },
        options: [
          {
            en: 'Biased exponents ensure all exponent bit patterns are non-negative unsigned numbers, allowing fast floating-point magnitude comparisons using simple integer comparator circuits',
            bn: 'বায়াসড এক্সপোনেন্ট নিশ্চিত করে যে এক্সপোনেন্ট সর্বদা অঋণাত্মক থাকে, যা সাধারণ ইন্টিজার কম্প্যারেটর দিয়েই ফ্লোটিং পয়েন্টের মান তুলনা করতে সাহায্য করে',
          },
          {
            en: 'Because negative numbers were banned by silicon manufacturing factories in 1985',
            bn: 'কারণ ১৯৮৫ সালে সেমিকন্ডাক্টর কারখানায় ঋণাত্মক সংখ্যা নিষিদ্ধ করা হয়েছিল',
          },
          {
            en: 'It prevents computer power cables from overheating during mathematical calculations',
            bn: 'এটি গাণিতিক কাজের সময় পাওয়ার ক্যাবল অতিরিক্ত গরম হওয়া রোধ করে',
          },
          {
            en: 'To make sure floating point numbers are always divisible by the number seven',
            bn: 'ফ্লোটিং পয়েন্ট সংখ্যাগুলো যাতে সর্বদা সাত দ্বারা বিভাজ্য হয় তা নিশ্চিত করতে',
          },
        ],
        answer: 0,
        hint: {
          en: 'If exponents are unsigned, comparing which float is larger requires only a standard integer comparison.',
          bn: 'এক্সপোনেন্ট যদি আনসাইনড হয়, তবে কোনটি বড় তা সাধারণ পূর্ণসংখ্যার মতো সহজেই তুলনা করা যায়।',
        },
        explanation: {
          en: 'With a bias of 127, an exponent of -10 is stored as 117 (01110101) and +10 is stored as 137 (10001001). Hardware can sort floating-point numbers as unsigned integers.',
          bn: '১২৭ বায়াসের কারণে -১০ সংরক্ষিত হয় ১১৭ হিসেবে এবং +১০ সংরক্ষিত হয় ১৩৭ হিসেবে। ফলে হার্ডওয়্যার সহজে এদের ক্রম সাজাতে পারে।',
        },
      },
      {
        id: 'ca-bits-qz-3',
        kind: 'mcq',
        topic: 'endianness-memory-layout',
        question: {
          en: 'On a Little-Endian architecture (such as x86_64), how is the 32-bit hexadecimal value 0x12345678 laid out across sequential memory bytes starting at address 0x00?',
          bn: 'একটি লিটল-এন্ডিয়ান আর্কিটেকচারে (যেমন x86_64) ৩২-বিট হেক্সাডেসিমেল মান 0x12345678 ঠিকানা 0x00 থেকে শুরু করে মেমোরিতে কীভাবে সাজানো থাকে?'
        },
        options: [
          {
            en: 'Address 0x00: 0x78 | Address 0x01: 0x56 | Address 0x02: 0x34 | Address 0x03: 0x12',
            bn: 'ঠিকানা 0x00: 0x78 | ঠিকানা 0x01: 0x56 | ঠিকানা 0x02: 0x34 | ঠিকানা 0x03: 0x12',
          },
          {
            en: 'Address 0x00: 0x12 | Address 0x01: 0x34 | Address 0x02: 0x56 | Address 0x03: 0x78',
            bn: 'ঠিকানা 0x00: 0x12 | ঠিকানা 0x01: 0x34 | ঠিকানা 0x02: 0x56 | ঠিকানা 0x03: 0x78',
          },
          {
            en: 'Address 0x00: 0x56 | Address 0x01: 0x78 | Address 0x02: 0x12 | Address 0x03: 0x34',
            bn: 'ঠিকানা 0x00: 0x56 | ঠিকানা 0x01: 0x78 | ঠিকানা 0x02: 0x12 | ঠিকানা 0x03: 0x34',
          },
          {
            en: 'Address 0x00: 0x34 | Address 0x01: 0x12 | Address 0x02: 0x78 | Address 0x03: 0x56',
            bn: 'ঠিকানা 0x00: 0x34 | ঠিকানা 0x01: 0x12 | ঠিকানা 0x02: 0x78 | ঠিকানা 0x03: 0x56',
          },
        ],
        answer: 0,
        hint: {
          en: 'Little-Endian places the "little end" (least significant byte, 0x78) at the lowest memory address.',
          bn: 'লিটল-এন্ডিয়ান পদ্ধতিতে সর্বনিম্ন গুরুত্বপূর্ণ বাইটটি ( 0x78 ) সর্বনিম্ন মেমোরি ঠিকানায় রাখা হয়।',
        },
        explanation: {
          en: 'Little-Endian stores the least significant byte first (0x78 at 0x00, followed by 0x56, 0x34, 0x12). Big-Endian stores the most significant byte first (0x12 at 0x00).',
          bn: 'লিটল-এন্ডিয়ানে সর্বনিম্ন বাইট আগে জমা হয় ( 0x00 এ 0x78, তারপর 0x56, 0x34, 0x12)। বিগ-এন্ডিয়ানে বিপরীতভাবে সর্বোচ্চ বাইটটি আগে বসে।',
        },
      },
      {
        id: 'ca-bits-qz-4',
        kind: 'mcq',
        topic: 'network-byte-order',
        question: {
          en: 'Why do Internet TCP/IP network protocols mandate that multi-byte integers (such as port numbers and IP addresses) be transmitted in Big-Endian order?',
          bn: 'ইন্টারনেট টিসিপি/আইপি নেটওয়ার্ক প্রোটোকলগুলো কেন একাধিক বাইটের সংখ্যা (যেমন পোর্ট নম্বর বা আইপি ঠিকানা) বিগ-এন্ডিয়ান ফরম্যাটে পাঠানো বাধ্যতামূলক করে?'
        },
        options: [
          {
            en: 'It establishes a uniform standard ("Network Byte Order") so that heterogeneous CPU architectures with different internal endianness can communicate without data corruption',
            bn: 'এটি একটি সর্বজনীন মান ("নেটওয়ার্ক বাইট অর্ডার") নির্ধারণ করে যাতে ভিন্ন ভিন্ন আর্কিটেকচারের সিপিইউ কোনো ডেটা বিকৃতি ছাড়াই পরস্পরের সাথে যোগাযোগ করতে পারে',
          },
          {
            en: 'Big-Endian signals travel through fiber optic cables twice as fast as Little-Endian signals',
            bn: 'বিগ-এন্ডিয়ান সংকেত ফাইবার অপটিক ক্যাবলের মধ্য দিয়ে লিটল-এন্ডিয়ানের চেয়ে দ্বিগুণ গতিতে চলে',
          },
          {
            en: 'Because Big-Endian format automatically encrypts all user credit card numbers',
            bn: 'কারণ বিগ-এন্ডিয়ান ফরম্যাট স্বয়ংক্রিয়ভাবে ব্যবহারকারীর ক্রেডিট কার্ড নম্বর এনক্রিপ্ট করে',
          },
          {
            en: 'To prevent computer routers from consuming more than 10 watts of electrical power',
            bn: 'কম্পিউটার রাউটারের বিদ্যুৎ খরচ ১০ ওয়াটের নিচে সীমাবদ্ধ রাখতে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Without a standard network convention, an x86 server and an ARM or SPARC router would misinterpret packet headers.',
          bn: 'নির্দিষ্ট নেটওয়ার্ক নিয়ম না থাকলে ভিন্ন আর্কিটেকচারের কম্পিউটারগুলো প্যাকেট হেডার ভুলভাবে পড়ে বিভ্রান্ত হতো।',
        },
        explanation: {
          en: 'Standardizing on Big-Endian ensures inter-operability. Operating systems provide conversion routines like htons() and ntohl() to translate between host and network endianness.',
          bn: 'বিগ-এন্ডিয়ান নিয়ম মেনে চলায় সর্বত্র সামঞ্জস্য বজায় থাকে। অপারেটিং সিস্টেমগুলো htons() ও ntohl() ফাংশন দিয়ে হোস্ট ও নেটওয়ার্ক এন্ডিয়াননেসের রূপান্তর ঘটায়।',
        },
      },
    ],
  },
  next: {
    slug: 'logic-gates',
    title: {
      en: 'Transistors, CMOS Logic & Universal NAND/NOR Gates',
      bn: 'ট্রানজিস্টর, সিএমওএস লজিক এবং সার্বজনীন NAND/NOR গেট',
    },
  },
};
