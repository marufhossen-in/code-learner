import type { Lesson } from '../../../lib/types';

export const BranchPredictionLesson: Lesson = {
  slug: 'branch-prediction',
  tech: 'cpu',
  title: {
    en: 'Branch Prediction & Speculative Execution',
    bn: 'ব্রাঞ্চ প্রেডিকশন এবং স্পেকুলেটিভ এক্সিকিউশন'
  },
  summary: {
    en: 'Uncover how modern microprocessors predict the future to sustain pipeline velocity. Understand Static vs Dynamic Branch Prediction, 2-bit saturating counter finite state machines, Branch Target Buffers (BTB), the massive penalty of pipeline flushes (15 to 20 wasted cycles), and how speculative execution opened hardware side-channel vulnerabilities like Spectre.',
    bn: 'পাইপলাইনের গতি বজায় রাখতে আধুনিক মাইক্রোপ্রসেসর কীভাবে ভবিষ্যৎ অনুমান করে তা আবিষ্কার করুন। স্ট্যাটিক বনাম ডায়নামিক ব্রাঞ্চ প্রেডিকশন, ২-বিট স্যাচুরেটিং কাউন্টার স্টেট মেশিন, ব্রাঞ্চ টার্গেট বাফার (BTB), পাইপলাইন ফ্লাশের ক্ষতি ( ১৫ থেকে ২০ সাইকেল অপচয় ) এবং কীভাবে স্পেকুলেটিভ এক্সিকিউশন স্পেকটারের (Spectre) মতো নিরাপত্তা ত্রুটি সৃষ্টি করেছে তা জানুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'branch-dilemma-speculation',
      text: {
        en: 'The Branch Dilemma: Stalling versus Speculating',
        bn: 'ব্রাঞ্চ দ্বিধা: স্থবিরতা বনাম আগাম অনুমান'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In typical software codebases, conditional branches (such as if/else statements, for/while loops, and function switches) occur approximately every 5 instructions. In a deep modern processor pipeline consisting of 14 to 19 stages, the actual evaluation of a conditional branch condition does not resolve until the Execute (EX) stage, many clock cycles after the instruction was first fetched.',
        bn: 'সাধারণ সফটওয়্যারের ক্ষেত্রে প্রতি ৫ টি নির্দেশের মধ্যে প্রায় ১ টি কন্ডিশনাল ব্রাঞ্চ ( যেমন if/else শর্ত, for/while লুপ বা সুইচ স্টেটমেন্ট ) থাকে। ১৪ থেকে ১৯ ধাপবিশিষ্ট আধুনিক গভীর পাইপলাইনে কোনো কন্ডিশনাল ব্রাঞ্চের শর্ত সত্যি না মিথ্যা তা এক্সিকিউট (EX) ধাপের আগে জানা যায় না, যা নির্দেশ ফেচ করার বহু সাইকেল পরে ঘটে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'If the processor stalled and waited for the branch condition to settle on every single decision, pipeline throughput would collapse by over 60 percent. To maintain maximum velocity, microprocessor architects implement Speculative Execution guided by Branch Prediction. The hardware guesses whether the branch will be Taken or Not Taken, immediately fetching and executing instructions along the guessed trajectory before the condition is mathematically verified.',
        bn: 'প্রতিটি সিদ্ধান্তের জন্য প্রসেসর যদি থেমে গিয়ে ব্রাঞ্চ শর্তের ফলের জন্য অপেক্ষা করত, তবে পাইপলাইন থ্রুপুট ৬০ শতাংশেরও বেশি কমে যেত। সর্বোচ্চ গতি বজায় রাখতে প্রসেসর ডিজাইনাররা ব্রাঞ্চ প্রেডিকশন চালিত স্পেকুলেটিভ এক্সিকিউশন ব্যবহার করেন। হার্ডওয়্যার অনুমান করে ব্রাঞ্চটি গৃহীত ( Taken ) হবে নাকি অগ্রাহ্য ( Not Taken ) হবে এবং শর্ত যাচাই হওয়ার আগেই অনুমিত পথ ধরে নির্দেশ কার্যকর করতে শুরু করে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: '2-Bit Saturating Counter State Machine & Branch Flush Penalty',
        bn: '২-বিট স্যাচুরেটিং কাউন্টার স্টেট মেশিন এবং ব্রাঞ্চ ফ্লাশ ক্ষতি'
      },
      svg: `<svg viewBox="0 0 820 400" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Two bit branch prediction state machine and pipeline flush penalty diagram">
  <rect width="820" height="400" fill="#0f172a" rx="12"/>
  
  <text x="410" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">2-BIT SATURATING COUNTER FINITE STATE MACHINE</text>
  
  <!-- State 00: Strongly Not Taken -->
  <g transform="translate(60, 65)">
    <circle cx="65" cy="65" r="55" fill="#1e293b" stroke="#ef4444" stroke-width="3"/>
    <text x="65" y="55" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">00</text>
    <text x="65" y="75" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Strongly</text>
    <text x="65" y="90" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Not Taken</text>
    <text x="65" y="140" fill="#94a3b8" font-size="10" text-anchor="middle">Predict: NO</text>
  </g>
  
  <!-- Arrow 00 <-> 01 -->
  <path d="M 175,100 Q 215,75 250,100" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="250,100 240,95 242,105" fill="#f59e0b"/>
  <text x="215" y="75" fill="#f59e0b" font-size="9" text-anchor="middle">Taken</text>
  
  <path d="M 250,135 Q 215,160 175,135" fill="none" stroke="#ef4444" stroke-width="2"/>
  <polygon points="175,135 185,140 183,130" fill="#ef4444"/>
  <text x="215" y="165" fill="#ef4444" font-size="9" text-anchor="middle">Not Taken</text>
  
  <!-- State 01: Weakly Not Taken -->
  <g transform="translate(255, 65)">
    <circle cx="65" cy="65" r="55" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
    <text x="65" y="55" fill="#f59e0b" font-size="14" font-weight="bold" text-anchor="middle">01</text>
    <text x="65" y="75" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Weakly</text>
    <text x="65" y="90" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Not Taken</text>
    <text x="65" y="140" fill="#94a3b8" font-size="10" text-anchor="middle">Predict: NO</text>
  </g>
  
  <!-- Arrow 01 <-> 10 -->
  <path d="M 370,100 Q 410,75 445,100" fill="none" stroke="#10b981" stroke-width="2"/>
  <polygon points="445,100 435,95 437,105" fill="#10b981"/>
  <text x="410" y="75" fill="#10b981" font-size="9" text-anchor="middle">Taken</text>
  
  <path d="M 445,135 Q 410,160 370,135" fill="none" stroke="#ef4444" stroke-width="2"/>
  <polygon points="370,135 380,140 378,130" fill="#ef4444"/>
  <text x="410" y="165" fill="#ef4444" font-size="9" text-anchor="middle">Not Taken</text>
  
  <!-- State 10: Weakly Taken -->
  <g transform="translate(450, 65)">
    <circle cx="65" cy="65" r="55" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
    <text x="65" y="55" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">10</text>
    <text x="65" y="75" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Weakly</text>
    <text x="65" y="90" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Taken</text>
    <text x="65" y="140" fill="#94a3b8" font-size="10" text-anchor="middle">Predict: YES</text>
  </g>
  
  <!-- Arrow 10 <-> 11 -->
  <path d="M 565,100 Q 605,75 640,100" fill="none" stroke="#10b981" stroke-width="2"/>
  <polygon points="640,100 630,95 632,105" fill="#10b981"/>
  <text x="605" y="75" fill="#10b981" font-size="9" text-anchor="middle">Taken</text>
  
  <path d="M 640,135 Q 605,160 565,135" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="565,135 575,140 573,130" fill="#f59e0b"/>
  <text x="605" y="165" fill="#f59e0b" font-size="9" text-anchor="middle">Not Taken</text>
  
  <!-- State 11: Strongly Taken -->
  <g transform="translate(645, 65)">
    <circle cx="65" cy="65" r="55" fill="#1e293b" stroke="#10b981" stroke-width="3"/>
    <text x="65" y="55" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">11</text>
    <text x="65" y="75" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Strongly</text>
    <text x="65" y="90" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Taken</text>
    <text x="65" y="140" fill="#94a3b8" font-size="10" text-anchor="middle">Predict: YES</text>
  </g>
  
  <!-- Speculative Execution & Penalty Box -->
  <g transform="translate(40, 235)">
    <rect width="740" height="135" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="370" y="28" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">SPECULATIVE EXECUTION OUTCOMES &amp; HARDWARE PENALTY</text>
    
    <rect x="25" y="45" width="335" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="192" y="70" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">CORRECT PREDICTION (95%+ of cases)</text>
    <text x="192" y="92" fill="#cbd5e1" font-size="11" text-anchor="middle">Zero Pipeline Stalls • Perfect Continuous Flow</text>
    
    <rect x="380" y="45" width="335" height="70" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="547" y="70" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">MISPREDICTION (Pipeline Flush)</text>
    <text x="547" y="92" fill="#cbd5e1" font-size="11" text-anchor="middle">Discard 15-20 Cycles of In-Flight Instructions!</text>
  </g>
</svg>`,
      caption: {
        en: 'The 2-bit saturating counter requires 2 consecutive mispredictions to flip states; misprediction triggers a costly 15 to 20 cycle pipeline flush.',
        bn: '২-বিট স্যাচুরেটিং কাউন্টারে সিদ্ধান্ত উল্টাতে টানা ২ বার ভুল অনুমানের প্রয়োজন হয়; ভুল অনুমানে ১৫ থেকে ২০ সাইকেলের ব্যয়বহুল পাইপলাইন ফ্লাশ ঘটে।'
      },
    },
    {
      type: 'heading',
      id: 'advanced-predictors-spectre',
      text: {
        en: 'Branch Target Buffers (BTB) & Hardware Side-Channel Leaks',
        bn: 'ব্রাঞ্চ টার্গেট বাফার (BTB) এবং হার্ডওয়্যার সাইড-চ্যানেল নিরাপত্তা ফাঁক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Predicting whether a branch is taken is only half the battle: the CPU must also know where the branch will jump. The Branch Target Buffer (BTB) is a specialized on-chip associative cache that stores target memory addresses alongside historical branch instructions. When the Program Counter matches an entry in the BTB, the fetch stage instantly redirects the PC to the target destination without waiting for address calculation.',
        bn: 'ব্রাঞ্চ গৃহীত হবে কিনা তা অনুমান করাই যথেষ্ট নয়: ব্রাঞ্চটি মেমোরির কোথায় লাফ দেবে তাও সিপিইউকে জানতে হয়। ব্রাঞ্চ টার্গেট বাফার (BTB) হলো একটি অন-চিপ ক্যাশ যা পূর্ববর্তী নির্দেশের গন্তব্য মেমোরি ঠিকানা সংরক্ষণ করে। প্রোগ্রাম কাউন্টার যখন বিটিবিতে কোনো এন্ট্রির সাথে মিলে যায়, তখন ঠিকানা গণনার অপেক্ষা না করেই ফেচ ইউনিট তাৎক্ষণিকভাবে নতুন গন্তব্যে লাফ দেয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'However, speculative execution introduced one of the most critical hardware vulnerabilities in computing history: Spectre (CVE-2017-5753). In Spectre attacks, malicious code trains the branch predictor to speculatively read out-of-bounds private memory. Although the CPU flushes the pipeline and discards the register results once the bounds check fails, the speculatively loaded memory leaves residual timing traces inside the L1 CPU cache. By measuring nanosecond memory access times, attackers reconstruct secret cryptographic keys and passwords across isolation boundaries.',
        bn: 'তবে স্পেকুলেটিভ এক্সিকিউশন কম্পিউটিং ইতিহাসের অন্যতম মারাত্মক হার্ডওয়্যার নিরাপত্তা ত্রুটির জন্ম দিয়েছে: স্পেকটার (Spectre)। স্পেকটার আক্রমণে আক্রমণকারী কোড ব্রাঞ্চ প্রেডিক্টরকে এমনভাবে পরিচালনা করে যাতে প্রসেসর আগাম অনুমানের ভিত্তিতে সীমার বাইরের গোপন মেমোরি পড়ে ফেলে। সীমা লঙ্ঘন ধরা পড়ার পর সিপিইউ পাইপলাইন ফ্লাশ করে ফলাফল বাতিল করলেও গোপন ডাটাটি L1 ক্যাশে সময়ের চিহ্ন রেখে যায়। ন্যানোসেকেন্ড মেমোরি অ্যাক্সেস সময় মেপে আক্রমণকারীরা ক্রিপ্টোগ্রাফিক কি এবং পাসওয়ার্ড চুরি করতে সক্ষম হয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'branch-predictor-sim.js',
      code: `// Deterministic 2-Bit Saturating Branch Predictor Simulation
class TwoBitBranchPredictor {
  constructor() {
    // States: 0 = Strongly Not Taken, 1 = Weakly Not Taken,
    //         2 = Weakly Taken,     3 = Strongly Taken
    this.state = 2; // Default to Weakly Taken
    this.predictionsCorrect = 0;
    this.predictionsIncorrect = 0;
  }

  // Predict: True (Taken) if state >= 2, False otherwise
  predict() {
    return this.state >= 2;
  }

  // Update predictor with actual branch outcome
  recordOutcome(actuallyTaken) {
    const predicted = this.predict();

    if (predicted === actuallyTaken) {
      this.predictionsCorrect++;
    } else {
      this.predictionsIncorrect++;
    }

    // Saturating transition: clamp between 0 and 3
    if (actuallyTaken) {
      if (this.state < 3) this.state++;
    } else {
      if (this.state > 0) this.state--;
    }
  }

  get accuracy() {
    const total = this.predictionsCorrect + this.predictionsIncorrect;
    return total === 0 ? '0.0%' : ((this.predictionsCorrect / total) * 100).toFixed(1) + '%';
  }
}

// Benchmark 1: Loop executing 9 times taken and 1 time exiting (repeated 3 runs)
const predictor = new TwoBitBranchPredictor();
const loopPattern = [true, true, true, true, true, true, true, true, true, false];

console.log('--- Simulating 3 Loop Executions (30 total iterations) ---');
for (let run = 1; run <= 3; run++) {
  for (const outcome of loopPattern) {
    predictor.recordOutcome(outcome);
  }
}

console.log('Results:');
console.log('  Correct Predictions =', predictor.predictionsCorrect);
console.log('  Mispredictions      =', predictor.predictionsIncorrect);
console.log('  Accuracy Rate       =', predictor.accuracy);
console.log('Notice: 2-bit counter mispredicts only once per loop exit without losing taken bias!');`,
      caption: {
        en: '2-bit saturating counter achieves 90 percent accuracy across loop runs by tolerating loop exit anomalies.',
        bn: 'লুপ থেকে বের হওয়ার ব্যতিক্রম সহ্য করে ২-বিট স্যাচুরেটিং কাউন্টার লুপে ৯০ শতাংশ নির্ভুলতা অর্জন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'Why Sorting an Array Accelerates Conditional Loops by 6x',
        bn: 'অ্যারে সাজালে কেন কন্ডিশনাল লুপের গতি ৬ গুণ বৃদ্ধি পায়'
      },
      text: {
        en: 'In an unsorted array of random numbers, evaluating if (data[i] >= 128) yields an unpredictable 50 percent pattern resembling coin flips. The branch predictor mispredicts roughly half the time, repeatedly incurring 15 to 20 cycle pipeline flushes that devastate execution speed. If the array is sorted first, the condition is continuously false for the first half and continuously true for the second half, allowing the predictor to achieve 99 percent accuracy with zero stalls.',
        bn: 'এলোমেলো সংখ্যার একটি অনির্ধারিত অ্যারেতে if (data[i] >= 128) শর্ত পরীক্ষা করলে মুদ্রা নিক্ষেপের মতো ৫০ শতাংশ অপ্রত্যাশিত ফলাফল পাওয়া যায়। ব্রাঞ্চ প্রেডিক্টর প্রায় অর্ধেক সময় ভুল অনুমান করে এবং প্রতিবার ১৫ থেকে ২০ সাইকেল পাইপলাইন ফ্লাশ ঘটায়। অ্যারেকে আগে সাজিয়ে (sort) নিলে শর্তটি প্রথমার্ধে একটানা false এবং দ্বিতীয়ার্ধে একটানা true হয়, ফলে প্রেডিক্টর ৯৯ শতাংশ নির্ভুলতা পায় এবং কোনো স্টল ছাড়াই কোডের গতি বহুগুণ বৃদ্ধি পায়।'
      },
    },
  ],
  exercises: [
    {
      id: 'cpu-br-ex-1',
      kind: 'predict',
      question: {
        en: 'How many distinct internal state conditions exist in a standard 2-bit saturating branch prediction counter? (2^2 = 4). Type the single digit.',
        bn: 'একটি সাধারণ ২-বিট স্যাচুরেটিং ব্রাঞ্চ প্রেডিকশন কাউন্টারে কয়টি পৃথক অভ্যন্তরীণ অবস্থা বিদ্যমান থাকে? ( ২^২ = ৪ )। একক সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Two binary bits yield 2^2 = 4 unique states: 00, 01, 10, and 11.',
        bn: 'দুটি বাইনারি বিট ২^২ = ৪ টি অনন্য অবস্থা তৈরি করে: ০০, ০১, ১০ এবং ১১।'
      },
      explanation: {
        en: 'A 2-bit counter has 4 states: Strongly Not Taken (00), Weakly Not Taken (01), Weakly Taken (10), and Strongly Taken (11).',
        bn: '২-বিট কাউন্টারে ৪ টি অবস্থা থাকে: স্ট্রংলি নট টেকেন ( ০০ ), উইকলি নট টেকেন ( ০১ ), উইকলি টেকেন ( ১০ ) এবং স্ট্রংলি টেকেন ( ১১ )।',
      },
    },
    {
      id: 'cpu-br-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why is a 2-bit saturating counter significantly superior to a simple 1-bit predictor for nested program loops?',
        bn: 'নেস্টেড প্রোগ্রাম লুপের ক্ষেত্রে একটি সাধারণ ১-বিট প্রেডিক্টরের চেয়ে ২-বিট স্যাচুরেটিং কাউন্টার কেন বহুগুণ উন্নত?'
      },
      options: [
        {
          en: 'A 1-bit predictor flips its prediction immediately on a single loop exit anomaly, causing 2 mispredictions per loop; a 2-bit counter requires two consecutive mispredictions to flip, preserving loop bias',
          bn: '১-বিট প্রেডিক্টর লুপ শেষের একটিমাত্র ঘটনাতেই অনুমান উল্টে দেয় যা প্রতি লুপে ২ বার ভুল ঘটায়; ২-বিট কাউন্টার টানা ২ বার ভুল না হলে পরিবর্তন হয় না',
        },
        {
          en: 'A 2-bit counter doubles the physical width of the CPU data bus',
          bn: '২-বিট কাউন্টার সিপিইউ ডাটা বাসের শারীরিক প্রস্থ দ্বিগুণ করে',
        },
        {
          en: 'A 1-bit predictor consumes 100 times more electrical power',
          bn: '১-বিট প্রেডিক্টর ১০০ গুণ বেশি বিদ্যুৎ খরচ করে',
        },
        {
          en: 'A 2-bit counter converts machine code into JavaScript automatically',
          bn: '২-বিট কাউন্টার মেশিন কোডকে স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্টে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'A single loop termination should not erase the historical bias that the loop repeats.',
        bn: 'লুপের একবার সমাপ্তি যেন লুপ বারবার চলার পূর্ববর্তী প্রবণতাকে মুছে না ফেলে।',
      },
      explanation: {
        en: 'When a loop finishes, a 2-bit counter drops from Strongly Taken to Weakly Taken, mispredicting only once upon exit rather than twice across loop invocations.',
        bn: 'লুপ শেষ হলে ২-বিট কাউন্টার স্ট্রংলি টেকেন থেকে উইকলি টেকেনে নামে, ফলে লুপ থেকে বের হওয়ার সময় কেবল ১ বার ভুল অনুমান ঘটে।'
      },
    },
    {
      id: 'cpu-br-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which notorious microprocessor security vulnerability exploited speculative execution and CPU cache timing differences to extract confidential data?',
        bn: 'কোন কুখ্যাত মাইক্রোপ্রসেসর নিরাপত্তা ত্রুটি স্পেকুলেটিভ এক্সিকিউশন এবং সিপিইউ ক্যাশ টাইমিংয়ের সুযোগ নিয়ে গোপনীয় ডাটা চুরি করত?'
      },
      options: [
        {
          en: 'Spectre (CVE-2017-5753)',
          bn: 'স্পেকটার (Spectre - CVE-2017-5753)',
        },
        {
          en: 'Ethernet Cable Static Noise',
          bn: 'ইথারনেট কেবল স্ট্যাটিক নয়েজ',
        },
        {
          en: 'Monitor Backlight Flicker',
          bn: 'মনিটর ব্যাকলাইট ফ্লিকার',
        },
        {
          en: 'Printer Ink Level Depletion',
          bn: 'প্রিন্টার কালি নিঃশেষ ত্রুটি',
        },
      ],
      answer: 0,
      hint: {
        en: 'The hardware side-channel flaw revealed in 2018 alongside Meltdown.',
        bn: '২০১৮ সালে মেল্টডাউনের সাথে প্রকাশিত হার্ডওয়্যার সাইড-চ্যানেল নিরাপত্তা ত্রুটি।',
      },
      explanation: {
        en: 'Spectre exploited branch prediction to speculatively read unauthorized memory, measuring L1 cache access latency to leak secrets across process boundaries.',
        bn: 'স্পেকটার ব্রাঞ্চ প্রেডিকশনের সুযোগ নিয়ে অনুমতিহীন মেমোরি আগাম পড়ে ফেলে এবং L1 ক্যাশের রিড টাইমিং বিশ্লেষণ করে গোপন ডাটা ফাঁস করত।'
      },
    },
    {
      id: 'cpu-br-ex-4',
      kind: 'predict',
      question: {
        en: 'If a branch predictor achieves a 95 percent accuracy across 100 conditional branches, how many branch misprediction pipeline flushes occur? (100 - 95 = 5). Type the digit.',
        bn: 'যদি একটি ব্রাঞ্চ প্রেডিক্টর ১০০ টি কন্ডিশনাল ব্রাঞ্চের মধ্যে ৯৫ শতাংশ নির্ভুলতা অর্জন করে, তবে কতবার পাইপলাইন ফ্লাশ ঘটবে? ( ১০০ - ৯৫ = ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'Subtract 95 correct predictions from 100 total branches.',
        bn: '১০০ টি মোট ব্রাঞ্চ থেকে ৯৫ টি সঠিক অনুমান বিয়োগ করুন।'
      },
      explanation: {
        en: 'Out of 100 branches with a 95 percent success rate, exactly 5 branches are mispredicted, each triggering a pipeline flush.',
        bn: '৯৫ শতাংশ সফলতার হারে ১০০ টি ব্রাঞ্চের মধ্যে ঠিক ৫ টি ভুল অনুমান হয়, যা প্রতিটিতে পাইপলাইন ফ্লাশ ঘটায়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Branch Prediction & Speculative Execution Quiz',
      bn: 'ব্রাঞ্চ প্রেডিকশন এবং স্পেকুলেটিভ এক্সিকিউশন কুইজ'
    },
    questions: [
      {
        id: 'cpu-br-qz-1',
        kind: 'mcq',
        topic: 'branch-prediction-purpose',
        question: {
          en: 'Why do modern high-performance microprocessors perform speculative branch prediction instead of stalling the pipeline?',
          bn: 'আধুনিক উচ্চক্ষমতাসম্পন্ন মাইক্রোপ্রসেসরগুলো কেন পাইপলাইন থামিয়ে রাখার বদলে স্পেকুলেটিভ ব্রাঞ্চ প্রেডিকশন পরিচালনা করে?'
        },
        options: [
          {
            en: 'Waiting for branch conditions to evaluate in deep pipelines would stall the CPU on every conditional statement, wasting over 60 percent of processing cycles',
            bn: 'গভীর পাইপলাইনে ব্রাঞ্চ শর্ত মূল্যায়নের জন্য অপেক্ষা করলে প্রতি শর্তে সিপিইউ আটকে থাকত এবং ৬০ শতাংশেরও বেশি সাইকেল অপচয় হতো',
          },
          {
            en: 'Branch prediction eliminates the need for software code entirely',
            bn: 'ব্রাঞ্চ প্রেডিকশন সফটওয়্যার কোডের প্রয়োজনীয়তা সম্পূর্ণ দূর করে দেয়',
          },
          {
            en: 'It doubles the electrical output of the computer power supply',
            bn: 'এটি কম্পিউটার পাওয়ার সাপ্লাইয়ের বৈদ্যুতিক আউটপুট দ্বিগুণ করে তোলে',
          },
          {
            en: 'Because computer hardware cannot calculate whether numbers are equal',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার সংখ্যা সমান কিনা তা হিসাব করতে পারে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Stalling on every branch destroys pipelined execution velocity.',
          bn: 'প্রতিটি ব্রাঞ্চে পাইপলাইন থমকে গেলে কাজের গতি মারাত্মকভাবে হ্রাস পায়।',
        },
        explanation: {
          en: 'With conditional branches occurring every few instructions, stalling would cripple execution throughput. Predicting the path allows instructions to keep flowing uninterrupted.',
          bn: 'ঘনঘন ব্রাঞ্চ আসার কারণে প্রতিবার অপেক্ষা করলে গতি ভেঙে পড়ত। অনুমানের মাধ্যমে কাজ এগিয়ে রাখলে নির্দেশের অবিচ্ছিন্ন প্রবাহ বজায় থাকে।'
        },
      },
      {
        id: 'cpu-br-qz-2',
        kind: 'mcq',
        topic: 'branch-target-buffer-btb-role',
        question: {
          en: 'What is the operational function of the Branch Target Buffer (BTB) in microprocessor front-ends?',
          bn: 'মাইক্রোপ্রসেসর ফ্রন্ট-এন্ডে ব্রাঞ্চ টার্গেট বাফারের (BTB) কাজের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It caches the target jump memory addresses of previously seen branches, allowing the fetch unit to immediately redirect the Program Counter without waiting for address calculation',
            bn: 'এটি পূর্ববর্তী ব্রাঞ্চের গন্তব্য মেমোরি ঠিকানা সংরক্ষণ করে, যা ঠিকানা গণনার অপেক্ষা না করেই তাৎক্ষণিকভাবে প্রোগ্রাম কাউন্টারকে নতুন গন্তব্যে পাঠায়',
          },
          {
            en: 'It stores sound recordings of the computer keyboard clicks',
            bn: 'এটি কম্পিউটার কিবোর্ড ক্লিকের শব্দ রেকর্ডিং সংরক্ষণ করে',
          },
          {
            en: 'It increases the physical resolution of the graphics card monitor',
            bn: 'এটি গ্রাফিক্স কার্ড মনিটরের শারীরিক রেজোলিউশন বৃদ্ধি করে',
          },
          {
            en: 'It converts analog audio signals into optical mouse movements',
            bn: 'এটি অ্যানালগ অডিও সংকেতকে অপটিক্যাল মাউসের নড়াচড়ায় রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'An on-chip cache storing branch target addresses to accelerate the fetch stage.',
          bn: 'ফেচ ধাপকে দ্রুত করতে ব্রাঞ্চের গন্তব্য মেমোরি ঠিকানা ধারণকারী অন-চিপ ক্যাশ।',
        },
        explanation: {
          en: 'The BTB stores predicted target addresses alongside branch instructions, enabling the instruction fetch unit to jump immediately to the target in the next cycle.',
          bn: 'বিটিবি ব্রাঞ্চের ভবিষ্যৎ গন্তব্যের ঠিকানা ক্যাশে রাখে, যার ফলে পরবর্তী সাইকেলেই ফেচ ইউনিট কোনো বিলম্ব ছাড়া নতুন ঠিকানায় যেতে পারে।'
        },
      },
      {
        id: 'cpu-br-qz-3',
        kind: 'mcq',
        topic: 'pipeline-flush-penalty',
        question: {
          en: 'What occurs during a pipeline flush when the CPU discovers that a branch was mispredicted?',
          bn: 'সিপিইউ যখন জানতে পারে যে একটি ব্রাঞ্চের অনুমান ভুল ছিল, তখন পাইপলাইন ফ্লাশের সময় কী ঘটে?'
        },
        options: [
          {
            en: 'All speculatively fetched and partially executed instructions along the incorrect path are discarded, and execution restarts from the correct address after a 15 to 20 cycle penalty',
            bn: 'ভুল পথে আগাম ফেচ করা সমস্ত আংশিক নির্দেশ বাতিল করা হয় এবং ১৫ থেকে ২০ সাইকেল ক্ষতির পর সঠিক ঠিকানা থেকে কাজ পুনরায় শুরু হয়',
          },
          {
            en: 'The CPU permanently short-circuits and powers down immediately',
            bn: 'সিপিইউ স্থায়ীভাবে শর্ট-সার্কিট হয়ে তাৎক্ষণিকভাবে বন্ধ হয়ে যায়',
          },
          {
            en: 'All data in permanent hard disk storage is reformatted to zero',
            bn: 'স্থায়ী হার্ড ডিস্কের সমস্ত ডাটা মুছে শূন্য করে দেওয়া হয়',
          },
          {
            en: 'The computer cooling fan spins backwards to generate cold electricity',
            bn: 'কম্পিউটার কুলিং ফ্যান উল্টো ঘুরে ঠান্ডা বিদ্যুৎ উৎপাদন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Invalid instructions down the wrong path must be squashed and execution restarted.',
          bn: 'ভুল পথের সমস্ত অবৈধ নির্দেশ বাতিল করে পুনরায় কাজ শুরু করতে হয়।',
        },
        explanation: {
          en: 'Pipeline flushes convert in-flight speculative instructions into bubbles (NOPs) and redirect the PC to the correct target, paying a multi-cycle penalty.',
          bn: 'পাইপলাইন ফ্লাশ ভুল নির্দেশগুলোকে ফাঁকা নির্দেশে রূপান্তর করে বাতিল করে দেয় এবং সঠিক পথে পিসি ঘুরিয়ে দিয়ে বহু সাইকেলের অপচয় ঘটায়।'
        },
      },
      {
        id: 'cpu-br-qz-4',
        kind: 'mcq',
        topic: 'sorting-array-branch-optimization',
        question: {
          en: 'Why does sorting an array of numerical data before executing a conditional filtering loop produce a dramatic acceleration in runtime?',
          bn: 'কন্ডিশনাল ফিল্টারিং লুপ চালানোর আগে সংখ্যার অ্যারেকে সাজিয়ে (sort) নিলে কেন কার্যকাল নাটকীয়ভাবে কমে যায়?'
        },
        options: [
          {
            en: 'A sorted array transforms an unpredictable 50 percent branch pattern into long continuous runs of identical outcomes, allowing the branch predictor to achieve near 100 percent accuracy with zero stalls',
            bn: 'সাজানো অ্যারে অপ্রত্যাশিত ৫০ শতাংশ ব্রাঞ্চ প্যাটার্নকে দীর্ঘ ধারাবাহিক একমুখী ফলাফলে রূপান্তর করে, যা ব্রাঞ্চ প্রেডিক্টরকে প্রায় ১০০ শতাংশ নির্ভুলতা দেয়',
          },
          {
            en: 'Sorting numbers physically doubles the clock speed of the CPU from 2 GHz to 4 GHz',
            bn: 'সংখ্যা সাজালে সিপিইউর ক্লক গতি শারীরিকভাবে ২ গিগাহার্টজ থেকে ৪ গিগাহার্টজে দ্বিগুণ হয়ে যায়',
          },
          {
            en: 'Because computer hardware can only calculate numbers that end in zero',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার কেবল শূন্য দিয়ে শেষ হওয়া সংখ্যা গণনা করতে পারে',
          },
          {
            en: 'Sorting arrays eliminates the need for RAM chips on the motherboard',
            bn: 'অ্যারে সাজালে মাদারবোর্ডে কোনো র‍্যাম চিপের প্রয়োজন পড়ে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Continuous runs of identical true or false outcomes allow branch predictors to achieve near-perfect accuracy.',
          bn: 'টানা একই ধরনের true বা false ফলাফল আসলে ব্রাঞ্চ প্রেডিক্টরের পক্ষে নির্ভুল অনুমান করা সহজ হয়।',
        },
        explanation: {
          en: 'In a sorted array, the branch evaluates false continuously and then true continuously, eliminating random branch transitions and virtually eradicating misprediction flushes.',
          bn: 'সাজানো অ্যারেতে ব্রাঞ্চটি ধারাবাহিকভাবে false এবং পরে ধারাবাহিকভাবে true হয়, ফলে এলোমেলো ওঠানামা থাকে না এবং মিসপ্রেডিকশন ফ্লাশ পুরোপুরি দূর হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'multicore',
    title: {
      en: 'Multi-Core Processors & Cache Coherency',
      bn: 'মাল্টি-কোর প্রসেসর এবং ক্যাশ কোহেরেন্সি'
    },
  },
};
