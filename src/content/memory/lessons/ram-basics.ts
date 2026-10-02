import type { Lesson } from '../../../lib/types';

export const RamBasicsLesson: Lesson = {
  slug: 'ram-basics',
  tech: 'memory',
  title: {
    en: 'Physical RAM Architecture: DRAM Cells, Capacitors, Memory Controllers & Bus Speeds',
    bn: 'ফিজিক্যাল র‍্যাম আর্কিটেকচার: DRAM সেল, ক্যাপাসিটর, মেমোরি কন্ট্রোলার এবং বাস স্পিড'
  },
  summary: {
    en: 'Explore the physical reality of Random Access Memory (RAM). Learn how Dynamic RAM stores individual bits inside tiny capacitors requiring periodic refresh cycles every 64 milliseconds. Compare DRAM latency against ultra-fast Static RAM CPU caches. Trace how modern memory controllers interface across multi-channel 64-bit DDR4 and DDR5 buses, and understand Rowhammer vulnerabilities and Error-Correcting Code (ECC) protection.',
    bn: 'র‍্যান্ডম অ্যাক্সেস মেমোরির (RAM) বাস্তব হার্ডওয়্যার ব্যবস্থা উন্মোচন করুন। কীভাবে ডায়নামিক র‍্যাম ক্ষুদ্র ক্যাপাসিটরে বিট সংরক্ষণ করে এবং প্রতি ৬৪ মিলিসেকেন্ডে রিফ্রেশ সাইকেলের প্রয়োজন হয় তা বুঝুন। DRAM লেটেন্সিকে অতি দ্রুত স্ট্যাটিক র‍্যাম ক্যাশের সাথে তুলনা করুন। মেমোরি কন্ট্রোলার কীভাবে মাল্টি-চ্যানেল ৬৪-বিট DDR4 ও DDR5 বাসের সাথে কাজ করে তা জানুন এবং রো-হ্যামার দুর্বলতা ও ECC সুরক্ষা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'silicon-reality-sram-vs-dram',
      text: {
        en: 'The Silicon Reality of Volatile Memory: DRAM versus SRAM',
        bn: 'ভোলাটাইল মেমোরির সিলিকন বাস্তবতা: DRAM বনাম SRAM'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In computer hardware, Random Access Memory provides temporary high-speed working storage that loses its contents when electrical power is switched off. At the silicon circuit level, engineers balance two competing technologies: Static RAM (SRAM) and Dynamic RAM (DRAM).',
        bn: 'কম্পিউটার হার্ডওয়্যারে র‍্যান্ডম অ্যাক্সেস মেমোরি একটি উচ্চগতির অস্থায়ী স্টোরেজ হিসেবে কাজ করে, যা বিদ্যুৎ সংযোগ বিচ্ছিন্ন হলে সমস্ত ডাটা হারিয়ে ফেলে। সিলিকন সার্কিটের স্তরে ইঞ্জিনিয়াররা মূলত দুটি ভিন্ন প্রযুক্তি ব্যবহার করেন: স্ট্যাটিক র‍্যাম (SRAM) এবং ডায়নামিক র‍্যাম (DRAM)।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Static RAM uses 6 transistors per memory cell arranged in a flip-flop circuit. SRAM achieves sub-nanosecond access speeds and requires zero periodic electrical refreshing. However, because each cell requires 6 transistors, SRAM is bulky, consumes heavy power, and costs up to 100 times more per gigabyte than DRAM, restricting its usage to on-die CPU L1, L2, and L3 caches.',
        bn: 'স্ট্যাটিক র‍্যাম প্রতি মেমোরি সেলে ৬ টি করে ট্রানজিস্টর ব্যবহার করে ফ্লিপ-ফ্লপ সার্কিট তৈরি করে। SRAM ১ ন্যানোসেকেন্ডেরও কম গতিতে কাজ করে এবং এতে কোনো রিফ্রেশ সাইকেলের প্রয়োজন হয় না। তবে প্রতিটি সেলে ৬ টি ট্রানজিস্টর লাগায় এটি আকারে বড়, প্রচুর বিদ্যুৎ খরচ করে এবং DRAM-এর তুলনায় গিগাবাইট প্রতি প্রায় ১০০ গুণ বেশি ব্যয়বহুল, যার ফলে এটি কেবল সিপিইউর L1, L2 এবং L3 ক্যাশ মেমোরিতে ব্যবহৃত হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Dynamic RAM achieves astronomical density by stripping each memory cell down to just 1 transistor and 1 microscopic capacitor (1T-1C architecture). A charged capacitor represents a binary 1, while a discharged capacitor represents a binary 0. By utilizing single-transistor cells, manufacturers can pack 16 gigabytes of memory onto a silicon stick no larger than a chocolate bar.',
        bn: 'ডায়নামিক র‍্যাম প্রতিটি মেমোরি সেলে মাত্র ১ টি ট্রানজিস্টর এবং ১ টি ক্ষুদ্র ক্যাপাসিটর (1T-1C আর্কিটেকচার) ব্যবহার করে বিপুল পরিমাণ মেমোরি ধারণক্ষমতা অর্জন করে। চার্জযুক্ত ক্যাপাসিটর বাইনারি ১ প্রকাশ করে এবং চার্জহীন ক্যাপাসিটর বাইনারি ০ নির্দেশ করে। মাত্র একটি ট্রানজিস্টর ব্যবহারের কারণে নির্মাতারা চকলেটের সমান একটি র‍্যাম স্টিকে ১৬ গিগাবাইট পর্যন্ত ডাটা সংরক্ষণ করতে পারেন।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Microscopic Capacitor Leakage',
            bn: '১. আণুবীক্ষণিক ক্যাপাসিটরের চার্জ ক্ষরণ'
          },
          text: {
            en: 'Because DRAM capacitors are microscopic (storing only about 30 femtofarads of charge), their electrical voltage leaks away rapidly into the silicon substrate. Within a fraction of a second, stored data fades into random electrical noise.',
            bn: 'যেহেতু DRAM ক্যাপাসিটরগুলো আণুবীক্ষণিক ( মাত্র প্রায় ৩০ ফেমটোফ্যারাড চার্জ ধরে রাখে ), তাই তাদের বিদ্যুৎ দ্রুত সিলিকন স্তরে ক্ষরণ হয়ে যায়। এক সেকেন্ডের ভগ্নাংশের মধ্যেই সংরক্ষিত ডাটা নষ্ট হয়ে যেতে পারে।'
          },
        },
        {
          title: {
            en: '2. The 64 Millisecond Refresh Mandate',
            bn: '২. প্রতি ৬৪ মিলিসেকেন্ডে রিফ্রেশ সাইকেল'
          },
          text: {
            en: 'To prevent data corruption, standard JEDEC memory specifications mandate that every single row of DRAM cells must be electrically recharged once every 64 milliseconds (64 ms). An automated hardware refresh counter cycles through memory rows continuously in the background.',
            bn: 'ডাটা নষ্ট হওয়া ঠেকাতে JEDEC মেমোরি মানদণ্ড অনুযায়ী DRAM সেলের প্রতিটি সারিকে প্রতি ৬৪ মিলিসেকেন্ডে ( ৬৪ ms ) একবার রিফ্রেশ বা চার্জ করতে হয়। একটি স্বয়ংক্রিয় রিফ্রেশ কাউন্টার ব্যাকগ্রাউন্ডে প্রতিনিয়ত মেমোরি সারিগুলো চার্জ করতে থাকে।'
          },
        },
        {
          title: {
            en: '3. Sense Amplifiers & Destructive Reads',
            bn: '৩. সেন্স অ্যামপ্লিফায়ার এবং ডেস্ট্রাকটিভ রিড'
          },
          text: {
            en: 'Reading a DRAM cell is destructive: the capacitor discharges its tiny electrical charge onto a bitline wire to be read. Highly sensitive Sense Amplifiers detect the microscopic voltage shift, latch the digital 1 or 0 value, and immediately recharge the capacitor back to its original state.',
            bn: 'DRAM সেল থেকে ডাটা পড়ার প্রক্রিয়াটি ডেস্ট্রাকটিভ: ক্যাপাসিটর তার চার্জ বিটলাইনে ছেড়ে দেয়। অত্যন্ত সংবেদনশীল সেন্স অ্যামপ্লিফায়ার সেই ভোল্টেজ পরিবর্তন শনাক্ত করে ডিজিটাল ১ বা ০ নির্ধারণ করে এবং সাথে সাথেই ক্যাপাসিটরটিকে আবার আগের মতো চার্জ করে দেয়।'
          },
        },
        {
          title: {
            en: '4. Dual-Channel 64-Bit Bus Bandwidth',
            bn: '৪. ডুয়াল-চ্যানেল ৬৪-বিট বাস ব্যান্ডউইথ'
          },
          text: {
            en: 'CPUs interface with system RAM across a memory bus. A standard desktop memory channel transmits 64 bits of data per transfer. Installing two matched memory modules unlocks a dual-channel 128-bit bus, doubling peak bandwidth from 25.6 GB/s to over 50 GB/s.',
            bn: 'সিপিইউ মেমোরি বাসের মাধ্যমে সিস্টেম র‍্যামের সাথে যোগাযোগ করে। সাধারণ ডেস্কটপ মেমোরি চ্যানেল প্রতি ট্রান্সফারে ৬৪ বিট ডাটা আদান-প্রদান করে। দুটি রিবন স্লটে র‍্যাম বসালে ১২৮-বিট ডুয়াল চ্যানেল সক্রিয় হয়, যা মেমোরির গতি ২৫.৬ গিগাবাইট/সেকেন্ড থেকে দ্বিগুণ করে ৫০ গিগাবাইট/সেকেন্ডের উপরে নিয়ে যায়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Physical DRAM Silicon Cell, Sense Amplifier & Dual-Channel Memory Controller Bus',
        bn: 'ফিজিক্যাল DRAM সেল, সেন্স অ্যামপ্লিফায়ার এবং ডুয়াল-চ্যানেল মেমোরি কন্ট্রোলার বাস'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Physical DRAM architecture diagram showing 1T-1C cell with capacitor, sense amplifier, refresh controller, and multi-channel memory bus">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PHYSICAL DRAM SILICON ARCHITECTURE &amp; CONTROLLER BUS</text>
  
  <!-- Left Box: Single 1T-1C Memory Cell -->
  <g transform="translate(30, 50)">
    <rect width="240" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="120" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1T-1C DRAM CELL (1 BIT)</text>
    
    <!-- Wordline -->
    <line x1="30" y1="70" x2="210" y2="70" stroke="#f59e0b" stroke-width="3"/>
    <text x="120" y="60" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Wordline (Row Select)</text>
    
    <!-- MOSFET Transistor Symbol -->
    <rect x="90" y="90" width="60" height="50" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="120" y="120" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">NMOS</text>
    <line x1="120" y1="70" x2="120" y2="90" stroke="#f59e0b" stroke-width="2"/>
    
    <!-- Capacitor Symbol -->
    <circle cx="120" cy="190" r="26" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
    <text x="120" y="194" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">30 fF</text>
    <text x="120" y="235" fill="#cbd5e1" font-size="10" text-anchor="middle">Capacitor (Bit State)</text>
    <line x1="120" y1="140" x2="120" y2="164" stroke="#10b981" stroke-width="2"/>
    <line x1="120" y1="216" x2="120" y2="245" stroke="#64748b" stroke-width="2"/>
    <text x="120" y="260" fill="#64748b" font-size="9" text-anchor="middle">GND Ground</text>
    
    <!-- Bitline -->
    <line x1="60" y1="90" x2="60" y2="310" stroke="#06b6d4" stroke-width="3"/>
    <text x="60" y="325" fill="#06b6d4" font-size="10" font-weight="bold" text-anchor="middle">Bitline (Data)</text>
    <line x1="60" y1="115" x2="90" y2="115" stroke="#06b6d4" stroke-width="2"/>
  </g>
  
  <!-- Middle Box: Sense Amplifier & Refresh Engine -->
  <g transform="translate(300, 50)">
    <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="125" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">DRAM MATRIX &amp; REFRESH</text>
    
    <rect x="20" y="45" width="210" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="125" y="70" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Sense Amplifiers</text>
    <text x="125" y="90" fill="#cbd5e1" font-size="9" text-anchor="middle">Detects 30 fF charge, latches</text>
    <text x="125" y="105" fill="#cbd5e1" font-size="9" text-anchor="middle">digital bit &amp; restores capacitor</text>
    
    <rect x="20" y="130" width="210" height="70" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="125" y="155" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">64ms Auto-Refresh Timer</text>
    <text x="125" y="175" fill="#cbd5e1" font-size="9" text-anchor="middle">Recharges all 8192 rows</text>
    <text x="125" y="190" fill="#cbd5e1" font-size="9" text-anchor="middle">before charge drops below 50%</text>
    
    <rect x="20" y="215" width="210" height="60" rx="6" fill="#0f172a" stroke="#a855f7"/>
    <text x="125" y="240" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">Row / Column Decoders</text>
    <text x="125" y="260" fill="#cbd5e1" font-size="9" text-anchor="middle">RAS &amp; CAS strobes access 2D grid</text>
    
    <rect x="20" y="290" width="210" height="40" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="125" y="315" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">ECC Chip (Detects Bit Flips)</text>
  </g>
  
  <!-- Right Box: CPU Memory Controller (IMC) -->
  <g transform="translate(580, 50)">
    <rect width="230" height="340" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="115" y="26" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">CPU IMC (CONTROLLER)</text>
    
    <rect x="20" y="50" width="190" height="50" rx="4" fill="#0f172a" stroke="#38bdf8"/>
    <text x="115" y="73" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Channel A (64-bit)</text>
    <text x="115" y="90" fill="#94a3b8" font-size="9" text-anchor="middle">DDR4 / DDR5 Sub-channel 0</text>
    
    <rect x="20" y="115" width="190" height="50" rx="4" fill="#0f172a" stroke="#38bdf8"/>
    <text x="115" y="138" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Channel B (64-bit)</text>
    <text x="115" y="155" fill="#94a3b8" font-size="9" text-anchor="middle">DDR4 / DDR5 Sub-channel 1</text>
    
    <rect x="20" y="180" width="190" height="70" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="115" y="205" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Dual-Channel Bus</text>
    <text x="115" y="223" fill="#cbd5e1" font-size="10" text-anchor="middle">128-bit total width</text>
    <text x="115" y="238" fill="#cbd5e1" font-size="10" text-anchor="middle">Bandwidth: 51.2 GB/s</text>
    
    <rect x="20" y="265" width="190" height="60" rx="4" fill="#0f172a" stroke="#a855f7"/>
    <text x="115" y="290" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">L3 SRAM Cache (On-Die)</text>
    <text x="115" y="310" fill="#94a3b8" font-size="9" text-anchor="middle">&lt; 1 ns Latency (6T Flip-Flops)</text>
  </g>
  
  <!-- Connections -->
  <line x1="270" y1="210" x2="300" y2="210" stroke="#38bdf8" stroke-width="2"/>
  <line x1="550" y1="210" x2="580" y2="210" stroke="#f59e0b" stroke-width="2"/>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Every DRAM cell holds charge for only 64ms before refresh circuit restores it</text>
</svg>`,
      caption: {
        en: 'A DRAM cell stores one bit in a 30 femtofarad capacitor, requiring Sense Amplifiers to restore drained charge and periodic 64ms refresh cycles.',
        bn: '১ টি DRAM সেল ৩০ ফেমটোফ্যারাড ক্যাপাসিটরে ১ বিট ডাটা রাখে, যার ক্ষয়প্রাপ্ত চার্জ পুনরুদ্ধার করতে সেন্স অ্যামপ্লিফায়ার এবং প্রতি ৬৪ মিলিসেকেন্ডে রিফ্রেশ সাইকেল আবশ্যক।'
      },
    },
    {
      type: 'heading',
      id: 'dram-timings-latency-math',
      text: {
        en: 'Memory Timings, CAS Latency & True Nanosecond Performance',
        bn: 'মেমোরি টাইমিং, CAS লেটেন্সি এবং আসল ন্যানোসেকেন্ড গতি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Retail memory packages list timing figures like DDR4-3200 CL16 or DDR5-6000 CL30. The CAS Latency (CL) denotes how many memory clock cycles pass between the controller issuing a Column Address Strobe and receiving the requested data. Because clock frequency increases across memory generations, higher CL numbers do not necessarily mean slower response times. True nanosecond latency equals: CAS Cycles divided by (Megatransfers per second / 2) multiplied by 1000.',
        bn: 'দোকানের র‍্যাম প্যাকেজে DDR4-3200 CL16 বা DDR5-6000 CL30 এর মতো টাইমিং লেখা থাকে। CAS লেটেন্সি (CL) নির্দেশ করে মেমোরি কন্ট্রোলার কলাম অ্যাড্রেস পাঠানোর পর ডাটা পেতে কয়টি ক্লক সাইকেল অপেক্ষা করতে হয়। মেমোরির প্রজন্ম পরিবর্তনের সাথে ক্লক ফ্রিকোয়েন্সি বৃদ্ধি পাওয়ায় উচ্চতর CL মানেই যে মেমোরি ধীরগতির তা নয়। আসল ন্যানোসেকেন্ড লেটেন্সির সূত্র হলো: CAS সাইকেলকে ( প্রতি সেকেন্ডে মেগাট্রান্সফার / ২ ) দিয়ে ভাগ করে ১০০০ দিয়ে গুণ করতে হয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'dram-controller-benchmark.js',
      code: `// Deterministic Memory Timing & True Latency Benchmark
// Calculates true nanosecond latency for DDR4-3200 vs DDR5-6000

function calculateTrueLatency(mtPerSecond, casLatency) {
  // DDR (Double Data Rate) transfers data twice per clock cycle
  const clockFrequencyMHz = mtPerSecond / 2;
  const cycleTimeNs = 1000 / clockFrequencyMHz;
  const trueLatencyNs = casLatency * cycleTimeNs;
  
  // 64-bit bus = 8 bytes per transfer
  const singleChannelBandwidthMBps = mtPerSecond * 8;
  const dualChannelBandwidthGBps = (singleChannelBandwidthMBps * 2) / 1000;

  return {
    transferRate: mtPerSecond + ' MT/s',
    clockMHz: clockFrequencyMHz + ' MHz',
    cycleDurationNs: cycleTimeNs.toFixed(3) + ' ns',
    casLatencyCycles: casLatency,
    trueFirstWordLatencyNs: Number(trueLatencyNs.toFixed(2)),
    dualChannelBandwidthGBps: Number(dualChannelBandwidthGBps.toFixed(1))
  };
}

console.log('=== Memory Generation Comparison ===');
const ddr4 = calculateTrueLatency(3200, 16); // DDR4-3200 CL16
const ddr5 = calculateTrueLatency(6000, 30); // DDR5-6000 CL30

console.log('DDR4-3200 CL16:');
console.log('  Clock Speed     :', ddr4.clockMHz);
console.log('  Cycle Duration  :', ddr4.cycleDurationNs);
console.log('  True Latency    :', ddr4.trueFirstWordLatencyNs, 'ns');
console.log('  Dual Bandwidth  :', ddr4.dualChannelBandwidthGBps, 'GB/s');

console.log('\\nDDR5-6000 CL30:');
console.log('  Clock Speed     :', ddr5.clockMHz);
console.log('  Cycle Duration  :', ddr5.cycleDurationNs);
console.log('  True Latency    :', ddr5.trueFirstWordLatencyNs, 'ns');
console.log('  Dual Bandwidth  :', ddr5.dualChannelBandwidthGBps, 'GB/s');

console.log('\\nHardware Fact: Both DDR4-3200 CL16 and DDR5-6000 CL30 have identical 10 ns true latency, but DDR5 nearly doubles bus throughput (51.2 vs 96 GB/s)!');`,
      caption: {
        en: 'The benchmark proves both DDR4-3200 CL16 and DDR5-6000 CL30 achieve 10 ns latency, with DDR5 delivering double the bandwidth.',
        bn: 'বেঞ্চমার্কটি প্রমাণ করে DDR4-3200 CL16 এবং DDR5-6000 CL30 উভয়েরই লেটেন্সি ঠিক ১০ ন্যানোসেকেন্ড, তবে DDR5 দ্বিগুণ ব্যান্ডউইথ দেয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'Rowhammer Attacks & ECC Memory Protection',
        bn: 'রো-হ্যামার আক্রমণ এবং ECC মেমোরি সুরক্ষা'
      },
      text: {
        en: 'Because modern DRAM cells are crammed mere nanometers apart, repeatedly accessing a memory row at high frequency causes electrical charge leakage into adjacent victim rows. This alters neighboring bits without write authorization. To protect servers and financial databases from Rowhammer exploits, enterprise motherboards require Error-Correcting Code (ECC) RAM. ECC modules store 8 extra parity bits per 64-bit word to detect and repair single-bit errors in real time.',
        bn: 'যেহেতু আধুনিক DRAM সেলগুলো একে অপরের অত্যন্ত কাছে কয়েক ন্যানোমিটার দূরত্বে থাকে, তাই উচ্চ ফ্রিকোয়েন্সিতে বারবার একটি মেমোরি সারি অ্যাক্সেস করলে পাশের সারিতে চার্জ ক্ষরণ হয়। এর ফলে অনুমোদিত রাইট অ্যাক্সেস ছাড়াই পাশের বিটের মান পরিবর্তিত হয়ে যায়। সার্ভার ও আর্থিক ডাটাবেজকে এই ক্ষতিকর রো-হ্যামার আক্রমণ থেকে রক্ষা করতে এন্টারপ্রাইজ মাদারবোর্ডে ECC র‍্যাম বাধ্যতামূলক করা হয়। ECC মডিউলগুলো প্রতি ৬৪-বিট শব্দের সাথে ৮ টি অতিরিক্ত প্যারিটি বিট যুক্ত করে তাৎক্ষণিকভাবে একক-বিট ত্রুটি শনাক্ত ও সংশোধন করে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-ram-ex-1',
      kind: 'predict',
      question: {
        en: 'According to JEDEC hardware specifications, how many milliseconds is the maximum refresh interval before DRAM capacitors lose their electrical charge? (64). Type the number.',
        bn: 'JEDEC হার্ডওয়্যার মানদণ্ড অনুসারে, DRAM ক্যাপাসিটরের চার্জ হারানোর পূর্বে সর্বোচ্চ কত মিলিসেকেন্ডের মধ্যে রিফ্রেশ সম্পন্ন করতে হয়? ( ৬৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '64',
      hint: {
        en: 'Standard DRAM refresh period is 64 milliseconds.',
        bn: 'স্ট্যান্ডার্ড DRAM রিফ্রেশ পিরিয়ড হলো ৬৪ মিলিসেকেন্ড।'
      },
      explanation: {
        en: 'All rows in a standard DRAM chip must be refreshed within 64 milliseconds to prevent data loss from capacitor leakage.',
        bn: 'ক্যাপাসিটর লিকেজ থেকে ডাটা সুরক্ষিত রাখতে প্রতি ৬৪ মিলিসেকেন্ডে সব সারি রিফ্রেশ করা আবশ্যক।'
      },
    },
    {
      id: 'mem-ram-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why is Static RAM (SRAM) used for CPU L1 and L2 caches instead of Dynamic RAM (DRAM)?',
        bn: 'ডায়নামিক র‍্যামের (DRAM) বদলে সিপিইউর L1 ও L2 ক্যাশের জন্য কেন স্ট্যাটিক র‍্যাম (SRAM) ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'SRAM uses 6-transistor flip-flop circuits that operate at sub-nanosecond speeds without requiring periodic electrical refresh cycles',
          bn: 'SRAM ৬ টি ট্রানজিস্টরের ফ্লিপ-ফ্লপ সার্কিট ব্যবহার করে যা কোনো রিফ্রেশ সাইকেল ছাড়াই ১ ন্যানোসেকেন্ডেরও কম গতিতে কাজ করে',
        },
        {
          en: 'Because DRAM chips can only store numbers divisible by 10',
          bn: 'কারণ DRAM চিপ কেবল ১০ দিয়ে বিভাজ্য সংখ্যা সংরক্ষণ করতে পারে',
        },
        {
          en: 'Because SRAM is made from recycled plastic instead of silicon',
          bn: 'কারণ SRAM সিলিকনের বদলে রিসাইকেল করা প্লাস্টিক দিয়ে তৈরি হয়',
        },
        {
          en: 'To make the CPU heavier so it does not float inside the case',
          bn: 'সিপিইউকে ভারী করার জন্য যাতে এটি কম্পিউটারের কেসিংয়ে ভেসে না ওঠে',
        },
      ],
      answer: 0,
      hint: {
        en: '6-transistor flip-flops provide ultra-fast access without capacitor refresh delays.',
        bn: '৬ টি ট্রানজিস্টরের সার্কিট রিফ্রেশ ঝামেলা ছাড়াই অতি দ্রুত কাজ করে।',
      },
      explanation: {
        en: 'SRAM flip-flop circuits are extremely fast and do not leak charge, making them ideal for high-speed processor caches.',
        bn: 'SRAM সার্কিট অত্যন্ত দ্রুত এবং এতে চার্জ ক্ষরণ হয় না, যা একে সিপিইউ ক্যাশের জন্য সেরা পছন্দ করে তোলে।'
      },
    },
    {
      id: 'mem-ram-ex-3',
      kind: 'mcq',
      question: {
        en: 'What critical operation does a Sense Amplifier perform when reading a bit from a DRAM cell?',
        bn: 'একটি DRAM সেল থেকে বিট পড়ার সময় সেন্স অ্যামপ্লিফায়ার কোন গুরুত্বপূর্ণ কাজটি সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It senses the microscopic charge released onto the bitline, amplifies it to digital 1 or 0, and immediately recharges the capacitor back to its original state',
          bn: 'এটি বিটলাইনে আসা সামান্য চার্জ শনাক্ত করে ডিজিটাল ১ বা ০ নির্ধারণ করে এবং সাথে সাথেই ক্যাপাসিটরটিকে পুনরায় চার্জ করে দেয়',
        },
        {
          en: 'It turns on the RGB lights inside the computer case',
          bn: 'এটি কম্পিউটার কেসিংয়ের ভেতরের রঙিন বাতি জ্বালিয়ে দেয়',
        },
        {
          en: 'It sends a push notification message to the user smartphone',
          bn: 'এটি ব্যবহারকারীর স্মার্টফোনে একটি নোটিফিকেশন পাঠায়',
        },
        {
          en: 'It converts digital audio signals into analog FM radio waves',
          bn: 'এটি ডিজিটাল অডিও সিগন্যালকে এনালগ এফএম রেডিও তরঙ্গে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Detecting tiny charge shifts and restoring the capacitor charge drained by the read.',
        bn: 'সামান্য চার্জের পরিবর্তন শনাক্ত করা এবং পড়ার ফলে নষ্ট হওয়া চার্জ ফেরত দেওয়া।',
      },
      explanation: {
        en: 'Because reading a DRAM capacitor drains its charge, the Sense Amplifier latches the value and immediately rewrites it back into the cell.',
        bn: 'ক্যাপাসিটর থেকে ডাটা পড়লে তার চার্জ শেষ হয়ে যায়, তাই সেন্স অ্যামপ্লিফায়ার ডাটা পড়ে সাথে সাথে আবার ক্যাপাসিটরটি চার্জ করে।'
      },
    },
    {
      id: 'mem-ram-ex-4',
      kind: 'predict',
      question: {
        en: 'How many bits of data are transferred in parallel across a standard single DDR4 or DDR5 desktop memory bus channel? (64). Type the number.',
        bn: 'একটি সাধারণ সিঙ্গেল চ্যানেল DDR4 বা DDR5 ডেস্কটপ মেমোরি বাসে প্যারালালে কত বিট ডাটা স্থানান্তরিত হয়? ( ৬৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '64',
      hint: {
        en: 'A standard desktop memory bus channel is 64 bits wide.',
        bn: 'একটি সাধারণ ডেস্কটপ মেমোরি বাস চ্যানেল ৬৪ বিট প্রশস্ত।'
      },
      explanation: {
        en: 'Standard desktop memory architecture uses a 64-bit wide data bus per memory channel.',
        bn: 'সাধারণ ডেস্কটপ মেমোরি আর্কিটেকচারে প্রতি চ্যানেলে একটি ৬৪-বিট প্রশস্ত ডাটা বাস ব্যবহৃত হয়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Physical RAM Architecture Quiz',
      bn: 'ফিজিক্যাল র‍্যাম আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'mem-ram-qz-1',
        kind: 'mcq',
        topic: 'dram-capacitor-volatility',
        question: {
          en: 'Why does Dynamic RAM require continuous refresh cycles to retain stored data?',
          bn: 'ডায়নামিক র‍্যামে সংরক্ষিত ডাটা ধরে রাখতে কেন নিরবচ্ছিন্ন রিফ্রেশ সাইকেলের প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'Each memory cell stores its bit as an electrical charge in a microscopic capacitor that naturally leaks current over tens of milliseconds',
            bn: 'প্রতিটি মেমোরি সেল একটি ক্ষুদ্র ক্যাপাসিটরে চার্জ হিসেবে বিট জমা রাখে, যা কয়েক মিলিসেকেন্ডের মধ্যেই প্রাকৃতিকভাবে ক্ষরণ হয়ে যায়',
          },
          {
            en: 'Because software code deletes all numbers if not reminded every minute',
            bn: 'কারণ সফটওয়্যার কোড প্রতি মিনিটে মনে করিয়ে না দিলে সব সংখ্যা মুছে ফেলে',
          },
          {
            en: 'Because computer power supplies only output alternating magnetic fields',
            bn: 'কারণ কম্পিউটার পাওয়ার সাপ্লাই কেবল অল্টারনেটিং চৌম্বক ক্ষেত্র তৈরি করে',
          },
          {
            en: 'To prevent computer screen pixels from burning into the monitor',
            bn: 'কম্পিউটার মনিটরের পিক্সেলে ছবি স্থায়ীভাবে বসে যাওয়া ঠেকাতে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Tiny 30 femtofarad capacitors leak electrical charge into the silicon.',
          bn: 'ক্ষুদ্র ৩০ ফেমটোফ্যারাড ক্যাপাসিটর থেকে বিদ্যুৎ সিলিকনে ক্ষরণ হয়ে যায়।',
        },
        explanation: {
          en: 'DRAM cells rely on capacitive charge storage. Without periodic refreshes every 64ms, the charge drains away and data is lost.',
          bn: 'DRAM সেল ক্যাপাসিটরের চার্জের ওপর নির্ভরশীল। প্রতি ৬৪ মিলিসেকেন্ডে রিফ্রেশ না করলে চার্জ শেষ হয়ে ডাটা মুছে যায়।'
        },
      },
      {
        id: 'mem-ram-qz-2',
        kind: 'mcq',
        topic: 'cas-latency-meaning',
        question: {
          en: 'What does the CAS Latency (CL) specification describe in modern RAM modules?',
          bn: 'আধুনিক র‍্যাম মডিউলে CAS লেটেন্সি (CL) স্পেসিফিকেশনটি কী প্রকাশ করে?'
        },
        options: [
          {
            en: 'The number of clock cycles that elapse between the memory controller requesting a column of data and the RAM outputting that data onto the bus',
            bn: 'মেমোরি কন্ট্রোলার কলাম অ্যাড্রেস অনুরোধ করার পর র‍্যাম বাসে ডাটা পাঠাতে যে কয়টি ক্লক সাইকেল সময় নেয় সেই সাইকেল সংখ্যা',
          },
          {
            en: 'The number of cooling fans required inside the computer chassis',
            bn: 'কম্পিউটার চেসিসের ভেতরে প্রয়োজনীয় কুলিং ফ্যানের মোট সংখ্যা',
          },
          {
            en: 'The retail price discount percentage offered by the manufacturer',
            bn: 'নির্মাতা প্রতিষ্ঠানের দেওয়া খুচরা মূল্যের ছাড়ের শতকরা হার',
          },
          {
            en: 'The length of the RAM stick measured in centimeters',
            bn: 'সেন্টিমিটারে পরিমাপ করা র‍্যাম স্টিকের মোট দৈর্ঘ্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'The delay in clock cycles between column command and data output.',
          bn: 'কলাম কমান্ড প্রদান এবং ডাটা আউটপুটের মধ্যকার ক্লক সাইকেলের ব্যবধান।',
        },
        explanation: {
          en: 'CAS Latency measures the delay in clock cycles from Column Address Strobe until the requested data appears on the data pins.',
          bn: 'CAS লেটেন্সি কলাম অ্যাড্রেস পাঠানোর পর ডাটা পিনে কাঙ্ক্ষিত ডাটা পৌঁছাতে প্রয়োজনীয় ক্লক সাইকেল পরিমাপ করে।'
        },
      },
      {
        id: 'mem-ram-qz-3',
        kind: 'mcq',
        topic: 'rowhammer-bit-flip-mechanism',
        question: {
          en: 'How does a Rowhammer exploit successfully flip bits in adjacent physical memory rows?',
          bn: 'একটি রো-হ্যামার আক্রমণ কীভাবে পাশের ফিজিক্যাল মেমোরি সারিতে সফলভাবে বিট ফ্লিপ ঘটায়?'
        },
        options: [
          {
            en: 'By rapidly activating a memory row millions of times per second, causing electrical charge leakage across densely packed silicon cells into neighbor rows',
            bn: 'প্রতি সেকেন্ডে লাখ লাখ বার একটি নির্দিষ্ট সারি সক্রিয় করে, যা অত্যন্ত ঘন সিলিকন সেলের মধ্য দিয়ে পাশের সারিতে চার্জ ক্ষরণ ঘটায়',
          },
          {
            en: 'By hitting the physical computer case with a steel mechanic hammer',
            bn: 'একটি লোহার হাতুড়ি দিয়ে কম্পিউটারের কেসিংয়ে জোরে আঘাত করার মাধ্যমে',
          },
          {
            en: 'By sending email spam messages with malicious attachments',
            bn: 'ক্ষতিকর ফাইল যুক্ত স্প্যাম ইমেইল বার্তা পাঠানোর মাধ্যমে',
          },
          {
            en: 'By running two web browsers on the desktop screen side by side',
            bn: 'ডেস্কটপ স্ক্রিনে পাশাপাশি দুটি ওয়েব ব্রাউজার চালু করে রাখার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Rapid voltage switching induces electrical interference in tightly packed neighboring cells.',
          bn: 'ঘন সেলের দ্রুত ভোল্টেজ পরিবর্তন পাশের সারিতে চার্জ ক্ষরণ ও বিট পরিবর্তন ঘটায়।',
        },
        explanation: {
          en: 'Rowhammer exploits physical proximity in modern sub-20nm DRAM cells, causing capacitive cross-talk that flips bits in adjacent rows.',
          bn: 'আধুনিক ক্ষুদ্র ড্রাম সেলে অতিরিক্ত অ্যাক্টিভেশনের কারণে পাশের সারিতে ভোল্টেজ লিক করে বিটের মান উল্টে যায়।'
        },
      },
      {
        id: 'mem-ram-qz-4',
        kind: 'mcq',
        topic: 'ecc-memory-protection-role',
        question: {
          en: 'Why do cloud data centers and enterprise mission-critical servers mandate ECC (Error-Correcting Code) memory?',
          bn: 'ক্লাউড ডাটা সেন্টার এবং এন্টারপ্রাইজের গুরুত্বপূর্ণ সার্ভারগুলোতে কেন ECC (Error-Correcting Code) মেমোরি বাধ্যতামূলক করা হয়?'
        },
        options: [
          {
            en: 'ECC memory includes extra parity bits allowing the memory controller to automatically detect and correct single-bit errors caused by cosmic rays or electrical noise without system crashes',
            bn: 'ECC মেমোরিতে অতিরিক্ত প্যারিটি বিট থাকে যার সাহায্যে মেমোরি কন্ট্রোলার সিস্টেম ক্র্যাশ ছাড়াই মহাজাগতিক রশ্মি বা নয়েজের কারণে ঘটা একক-বিট ত্রুটি স্বয়ংক্রিয়ভাবে ঠিক করতে পারে',
          },
          {
            en: 'ECC memory reduces the electricity bill of the building to zero dollars',
            bn: 'ECC মেমোরি ভবনের বিদ্যুৎ বিল সম্পূর্ণ শূন্য ডলারে নামিয়ে আনে',
          },
          {
            en: 'ECC memory allows typing in keyboards without any spelling mistakes',
            bn: 'ECC মেমোরি কিবোর্ডে কোনো বানান ভুল ছাড়াই টাইপ করার সুবিধা দেয়',
          },
          {
            en: 'ECC memory generates wireless Wi-Fi signals directly from the RAM stick',
            bn: 'ECC মেমোরি র‍্যাম স্টিক থেকেই সরাসরি ওয়াই-ফাই সংকেত তৈরি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Parity bits detect and correct single-bit errors in real time, preventing server downtime.',
          bn: 'প্যারিটি বিট তাৎক্ষণিকভাবে একক-বিট ত্রুটি শুধরে সার্ভার ডাউন হওয়া প্রতিরোধ করে।',
        },
        explanation: {
          en: 'ECC memory utilizes Hamming codes to detect and correct single-bit errors transparently, preventing data corruption and blue screen server crashes.',
          bn: 'ECC মেমোরি হ্যামিং কোড ব্যবহার করে একক-বিট ত্রুটি সাথে সাথে সংশোধন করে সার্ভার ও ডাটাবেজ সুরক্ষিত রাখে।'
        },
      },
    ],
  },
  next: {
    slug: 'stack-heap',
    title: {
      en: 'Stack vs Heap: Memory Allocation Internals',
      bn: 'স্ট্যাক বনাম হিপ: মেমোরি অ্যালোকেশন মেকানিজম'
    },
  },
};
