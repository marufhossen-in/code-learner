import type { Lesson } from '../../../lib/types';

export const AutoscalesAndTheAutoscaleLesson: Lesson = {
  slug: 'autoscales-and-the-autoscale',
  tech: 'compute',
  title: {
    en: 'Auto-scaling Groups — Policies, Cooldowns, and Health Checks',
    bn: 'অটো-স্কেলিং গ্রুপ — পলিসি, কুলডাউন ও হেলথ চেক',
  },
  summary: {
    en: 'A foundational overview of auto-scaling groups and dynamic elasticity. Understand target tracking scaling policies, configure step scaling alarms, prevent flapping with 300-second cooldown timers, and automate replacement of unhealthy instances to maintain 65.00% target CPU utilization.',
    bn: 'অটো-স্কেলিং গ্রুপ ও স্বয়ংক্রিয় স্থিতিস্থাপকতার মৌলিক ধারণা। টার্গেট ট্র্যাকিং পলিসি পরিচালনা, স্টেপ স্কেলিং অ্যালার্ম নির্ধারণ, ৩০০ সেকেন্ডের কুলডাউন টাইমার দিয়ে অস্থিরতা রোধ এবং ৬৫.০০% টার্গেট সিপিইউ ধরে রাখতে সার্ভার প্রতিস্থাপন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Elastic fleets, target tracking, and cooldown timers', bn: 'WHAT — ইলাস্টিক ফ্লিট, টার্গেট ট্র্যাকিং ও কুলডাউন টাইমার' },
    },
    {
      type: 'para',
      text: {
        en: 'When your cloud applications experience dynamic user traffic, manually provisioning virtual servers is impossible to sustain. Auto-scaling Groups (ASG) manage collections of compute instances as a unified elastic fleet defined by minimum, maximum, and desired capacity bounds. An ASG continuously monitors instance health and evaluates metric alarms from cloud monitoring systems. Through target tracking scaling policies, the auto-scaling orchestrator acts like a smart thermostat: adjusting instance count dynamically to maintain an aggregate performance metric (such as average CPU utilization at 65.00%). To prevent rapid oscillations where instances launch and terminate in chaotic loops, the engine enforces cooldown periods. By automating both scale-out traffic expansion and automatic health replacements, you build truly hands-off cloud infrastructure.',
        bn: 'যখন আপনার ক্লাউড অ্যাপ্লিকেশনে প্রতিনিয়ত ব্যবহারকারীর চাপ ওঠানামা করে, তখন ম্যানুয়ালি সার্ভার তৈরি বা বন্ধ করা অসম্ভব। অটো-স্কেলিং গ্রুপ (ASG) একাধিক কম্পিউট ইনস্ট্যান্সকে একটি সমন্বিত বহর হিসেবে পরিচালনা করে যা ন্যূনতম, সর্বোচ্চ এবং কাঙ্ক্ষিত ক্ষমতার সীমার মধ্যে আবদ্ধ থাকে। এটি সার্বক্ষণিক সার্ভারের স্বাস্থ্য পর্যবেক্ষণ করে এবং ক্লাউড মনিটরিং সিস্টেম থেকে মেট্রিক বিশ্লেষণ করে। টার্গেট ট্র্যাকিং পলিসির মাধ্যমে অটো-স্কেলিং একটি স্মার্ট থার্মোস্ট্যাটের মতো কাজ করে: যেমন গড় সিপিইউ ব্যবহার সর্বদা ৬৫.০০% এর কাছাকাছি রাখতে এটি স্বয়ংক্রিয়ভাবে সার্ভারের সংখ্যা বাড়ায় বা কমায়। অনাকাঙ্ক্ষিত অস্থিরতা ও বারবার সার্ভার রিস্টার্ট রোধ করতে সিস্টেম নির্দিষ্ট কুলডাউন সময় বজায় রাখে। এর মাধ্যমে ট্রাফিক বৃদ্ধির সাথে খাপ খাইয়ে স্বয়ংক্রিয়ভাবে নির্ভরযোগ্য ক্লাউড অবকাঠামো গড়ে ওঠে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Auto-scaling target tracking and 300-second cooldown lifecycle', bn: 'অটো-স্কেলিং টার্গেট ট্র্যাকিং ও ৩০০-সেকেন্ডের কুলডাউন জীবনচক্র' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Auto-scaling Group Target Tracking and Cooldown diagram">
<rect x="25" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="160" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">ASG Fleet Bounds</text>

<rect x="40" y="75" width="240" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="160" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">Min: 2 Nodes · Max: 10 Nodes</text>

<rect x="40" y="112" width="240" height="35" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="160" y="130" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Cycle 1: 3 Nodes at 45.00% CPU</text>
<text x="160" y="142" text-anchor="middle" font-size="8" fill="#166534">Surge: 85.00% CPU triggers scaling</text>

<text x="160" y="172" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Scaled +1 node to reach 4 nodes</text>
<text x="160" y="188" text-anchor="middle" font-size="8" fill="#166534">CPU stabilized at 63.75% (Target: 65.00%)</text>

<rect x="345" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#ca8a04" stroke-width="2"/>
<text x="480" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">Stabilization and Health Check</text>

<rect x="360" y="75" width="240" height="30" rx="4" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
<text x="480" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#854d0e">300s Cooldown Active (Prevents Flapping)</text>

<rect x="360" y="112" width="240" height="35" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="480" y="130" text-anchor="middle" font-size="9" font-weight="700" fill="#1e40af">ELB Health Check Probe</text>
<text x="480" y="142" text-anchor="middle" font-size="8" fill="#1e40af">Replaces failed nodes automatically</text>

<text x="480" y="172" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Target 65.00% achieved smoothly</text>
<text x="480" y="188" text-anchor="middle" font-size="8" fill="#166534">Evaluated across 3 operational cycles</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Target tracking adds 1 node to stabilize at 63.75% CPU with a 300s cooldown</text>
</svg>`,
      caption: {
        en: 'Baseline 3 nodes at 45.00% CPU experience a surge to 85.00% CPU; scaling adds 1 node to reach 4 nodes, stabilizing at 63.75% CPU within min 2, max 10, target 65.00% and 300s cooldown across 3 cycles.',
        bn: '৩টি নোডে ৪৫.০০% সিপিইউতে চলার পর ট্রাফিকের চাপে ৮৫.০০% সিপিইউ হয়; স্কেলিংয়ে ১টি নোড যোগ হয়ে ৪টি নোডে পৌঁছে সিপিইউ ৬৩.৭৫% এ স্থিতিশীল হয় (সীমা: সর্বনিম্ন ২, সর্বোচ্চ ১০, টার্গেট ৬৫.০০% এবং ৩টি সাইকেলে ৩০০s কুলডাউন)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Auto-scaling Group (ASG)',
          def: {
            en: 'A managed pool of compute instances that dynamically scales capacity up or down according to traffic demand and health status.',
            bn: 'কম্পিউট ইনস্ট্যান্সের একটি পরিচালিত বহর যা ট্রাফিকের চাহিদা ও সার্ভারের সুস্থতা অনুযায়ী ধারণক্ষমতা স্বয়ংক্রিয়ভাবে বাড়ায় বা কমায়।',
          },
        },
        {
          term: 'Target Tracking Policy',
          def: {
            en: 'A dynamic scaling policy that calculates the required instance capacity to keep a selected metric (like average CPU) at a specified target value.',
            bn: 'একটি গতিশীল স্কেলিং নিয়ম যা কোনো নির্দিষ্ট মেট্রিককে (যেমন গড় সিপিইউ) লক্ষ্যমাত্রায় ধরে রাখতে প্রয়োজনীয় সার্ভারের সংখ্যা হিসাব করে।',
          },
        },
        {
          term: 'Cooldown Period (300s)',
          def: {
            en: 'A configurable pause window (standard 300 seconds) after a scaling activity during which the ASG blocks additional scaling to allow metrics to stabilize.',
            bn: 'স্কেলিং সম্পন্ন হওয়ার পর একটি নির্ধারিত বিরতি (সাধারণত ৩০০ সেকেন্ড) যার মধ্যে অতিরিক্ত সার্ভার খোলা বা বন্ধ সাময়িক স্থগিত থাকে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Automated elasticity and self-healing resilience', bn: 'কেন — স্বয়ংক্রিয় স্থিতিস্থাপকতা ও স্ব-নিরাময় সুরক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Eliminate over-provisioning waste: dynamically shrinking fleets during quiet hours saves companies tens of thousands of dollars each month.', bn: 'অতিরিক্ত খরচের অপচয় রোধ: ট্রাফিক কম থাকলে স্বয়ংক্রিয়ভাবে সার্ভারের সংখ্যা কমিয়ে প্রতি মাসে বিপুল অর্থ সাশ্রয় করা সম্ভব।' },
        { en: 'Automated self-healing: if an underlying datacenter hypervisor fails, the ASG automatically terminates the bad instance and launches a healthy replacement.', bn: 'স্বয়ংক্রিয়ভাবে ত্রুটি নিরাময়: কোনো সার্ভার ক্র্যাশ করলে বা হার্ডওয়্যার নষ্ট হলে ASG নিজে থেকেই সেটি বন্ধ করে নতুন সুস্থ সার্ভার চালু করে।' },
        { en: 'Prevent metric thrashing: configuring cooldown timers ensures that newly launched instances warm up and accept traffic before triggering new alarms.', bn: 'বারবার স্কেলিংয়ের অস্থিরতা রোধ: কুলডাউন টাইমার নিশ্চিত করে যেন নতুন সার্ভার ট্রাফিক গ্রহণের জন্য প্রস্তুত হতে পর্যাপ্ত সময় পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring auto-scaling in 4 steps', bn: 'HOW — ৪টি ধাপে অটো-স্কেলিং কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create launch template', bn: '১. লঞ্চ টেমপ্লেট তৈরি' }, text: { en: 'Define the AMI, instance family, security groups, and initialization scripts.', bn: 'সার্ভারের ওএস ইমেজ, ইনস্ট্যান্সের ধরন, সিকিউরিটি গ্রুপ ও স্টার্টআপ স্ক্রিপ্ট নির্ধারণ করুন।' } },
        { title: { en: '2. Define fleet boundaries', bn: '২. বহরের সীমা নির্ধারণ' }, text: { en: 'Set minimum size to 2, desired capacity to 3, and maximum ceiling to 10.', bn: 'ন্যূনতম সার্ভার ২, কাঙ্ক্ষিত ৩ এবং সর্বোচ্চ ধারণক্ষমতা ১০ নির্ধারণ করুন।' } },
        { title: { en: '3. Attach target tracking policy', bn: '৩. টার্গেট ট্র্যাকিং পলিসি যুক্তকরণ' }, text: { en: 'Configure ASGAverageCPUUtilization tracking at 65.00% target.', bn: 'গড় সিপিইউ ব্যবহারের লক্ষ্যমাত্রা ৬৫.০০% এ সেট করে পলিসি তৈরি করুন।' } },
        { title: { en: '4. Set cooldown timer', bn: '৪. কুলডাউন টাইমার নির্ধারণ' }, text: { en: 'Configure a 300-second scale-out and scale-in cooldown period.', bn: 'স্কেল-আউট ও স্কেল-ইনের জন্য ৩০০ সেকেন্ডের কুলডাউন সময়কাল নির্ধারণ করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'asg_target_tracking_sim.js',
      code: `// Simulated Auto-scaling Group target tracking and cooldown dynamics
const minSize = 2;
const maxSize = 10;
const targetCpuPct = 65.00;
const cooldownSeconds = 300;

// Cycle 1: Baseline
let currentNodes = 3;
let cycle1Cpu = 45.00;

// Cycle 2: Traffic Surge
let cycle2Cpu = 85.00;
let neededCapacity = Math.ceil(currentNodes * (cycle2Cpu / targetCpuPct)); // 4
let addedNodes = neededCapacity - currentNodes; // 1
currentNodes = neededCapacity;

// Cycle 3: Post-scaling stabilized
let totalTrafficUnits = 255; // 85% * 3
let cycle3Cpu = Math.round((totalTrafficUnits / currentNodes) * 100) / 100; // 63.75%

console.log("Auto-scaling Group Target Tracking Simulation:");
console.log("Baseline: 3 nodes at " + cycle1Cpu.toFixed(2) + "% CPU; Surge: " + cycle2Cpu.toFixed(2) + "% CPU triggered scaling");
console.log("Scale-out action: added " + addedNodes + " node to reach " + currentNodes + " nodes (stabilized at " + cycle3Cpu.toFixed(2) + "% CPU)");
console.log("ASG bounds: min " + minSize + ", max " + maxSize + ", target " + targetCpuPct.toFixed(2) + "% with " + cooldownSeconds + "s cooldown across 3 cycles");

// Output:
// Auto-scaling Group Target Tracking Simulation:
// Baseline: 3 nodes at 45.00% CPU; Surge: 85.00% CPU triggered scaling
// Scale-out action: added 1 node to reach 4 nodes (stabilized at 63.75% CPU)
// ASG bounds: min 2, max 10, target 65.00% with 300s cooldown across 3 cycles`,
      caption: {
        en: 'Baseline 3 nodes at 45.00% CPU experience a surge to 85.00% CPU; scaling adds 1 node to reach 4 nodes, stabilizing at 63.75% CPU within min 2, max 10, target 65.00% and 300s cooldown across 3 cycles.',
        bn: '৩টি নোডে ৪৫.০০% সিপিইউতে চলার পর ট্রাফিকের চাপে ৮৫.০০% সিপিইউ হয়; স্কেলিংয়ে ১টি নোড যোগ হয়ে ৪টি নোডে পৌঁছে সিপিইউ ৬৩.৭৫% এ স্থিতিশীল হয় (সীমা: সর্বনিম্ন ২, সর্বোচ্চ ১০, টার্গেট ৬৫.০০% এবং ৩টি সাইকেলে ৩০০s কুলডাউন)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive auto-scaling target tracking lab', bn: 'INSIDE — জীবন্ত অটো-স্কেলিং টার্গেট ট্র্যাকিং ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test dynamic auto-scaling responsiveness. Starting with 3 nodes at 45.00% CPU, a surge to 85.00% CPU causes target tracking to calculate 4 required instances. Adding 1 node stabilizes average load to 63.75% CPU, meeting the 65.00% target within min 2 and max 10 boundaries. A 300s cooldown period ensures metric stability across 3 cycles without premature over-scaling.',
        bn: 'ডায়নামিক অটো-স্কেলিংয়ের সংবেদনশীলতা পরীক্ষা করুন। ৩টি নোডে ৪৫.০০% সিপিইউতে চলাকালীন হঠাৎ চাপ বেড়ে ৮৫.০০% হলে টার্গেট ট্র্যাকিং হিসাব করে ৪টি সার্ভার প্রয়োজন। ১টি নোড যোগ করায় গড় সিপিইউ কমে ৬৩.৭৫% এ নামে, যা সর্বনিম্ন ২ ও সর্বোচ্চ ১০ সীমার মধ্যে ৬৫.০০% টার্গেট পূরণ করে। ৩০০s কুলডাউন সময় ৩টি সাইকেল জুড়ে অপ্রয়োজনীয় অতিরিক্ত স্কেলিং ছাড়া সিস্টেম স্থিতিশীল রাখে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Auto-scaling lab (verify required capacity, press Run)', bn: 'অটো-স্কেলিং ল্যাব (প্রয়োজনীয় ক্ষমতা যাচাই, Run)' },
      html: '<h3>Auto-scaling Target Tracking Calculator</h3>\n<pre id="out"></pre>\n<p>Compute dynamic instance requirements and stabilization metrics.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const current = 3;\nconst surgeCpu = 85.00;\nconst targetCpu = 65.00;\nconst needed = Math.ceil(current * (surgeCpu / targetCpu));\nconst added = needed - current;\nconst newCpu = (current * surgeCpu / needed).toFixed(2);\nconsole.log("added: " + added + " nodes");\ndocument.getElementById("out").textContent = "Current: " + current + " nodes · Needed: " + needed + " nodes · Added: +" + added + " · New CPU: " + newCpu + "% (min 2, max 10, 3 cycles ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Auto-scaling operational best practices', bn: 'ফলাফল — অটো-স্কেলিং পরিচালনার মূল নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prefer target tracking policies over simple alarms: target tracking calculates the exact number of required instances in a single proportional calculation.', bn: 'সাধারণ অ্যালার্মের চেয়ে টার্গেট ট্র্যাকিং প্রাধান্য দিন: টার্গেট ট্র্যাকিং একবারে আনুপাতিকভাবে হিসাব করে ঠিক কতটি সার্ভার দরকার তা নির্ধারণ করে।' },
        { en: 'Always scale out aggressively, but scale in conservatively: add capacity rapidly to protect users, but remove instances slowly to prevent thrashing.', bn: 'স্কেল-আউট দ্রুত করুন, কিন্তু স্কেল-ইন ধীরে করুন: ব্যবহারকারীদের বাঁচাতে দ্রুত সার্ভার বাড়ান, কিন্তু ট্রাফিকের হঠাৎ পুনরাবৃত্তি সামলাতে সার্ভার ধীরে বন্ধ করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common auto-scaling failures', bn: 'ডিবাগ — অটো-স্কেলিংয়ের সাধারণ বিভ্রান্তি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Setting aggressive CPU targets below 50%', bn: 'টার্গেট সিপিইউ ৫০% এর নিচে নির্ধারণের ভুল' },
      text: {
        en: 'Configuring a target CPU utilization of 30% or 40% will cause constant scale-out events during minor background jobs like cron scripts or log shipping, inflating cloud bills unnecessarily. Target 60% to 75% for balanced headroom.',
        bn: 'সিপিইউ টার্গেট ৩০% বা ৪০% এর মতো খুব নিচে রাখলে সাধারণ ক্রন জব বা ব্যাকগ্রাউন্ড লগের সামান্য চাপেও অনর্থক নতুন সার্ভার তৈরি হতে থাকে। ভারসাম্য বজায় রাখতে লক্ষ্যমাত্রা ৬০% থেকে ৭৫% এর মধ্যে রাখা প্রমিত।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Enabling Elastic Load Balancing health checks on ASG', bn: 'ASG-তে ইলাস্টিক লোড ব্যালেন্সার হেলথ চেক কার্যকর করা' },
      text: {
        en: 'By default, EC2 auto-scaling only monitors hardware hypervisor health. Switch the HealthCheckType to ELB so that if an application web process crashes (returning HTTP 500 errors), the ASG replaces the faulty instance immediately.',
        bn: 'সাধারণত ASG কেবল ফিজিক্যাল হার্ডওয়্যারের ত্রুটি পর্যবেক্ষণ করে। হেলথ চেক টাইপ ELB তে পরিবর্তন করুন যাতে ওয়েব অ্যাপ্লিকেশনে এরর (যেমন HTTP 500) দেখা দিলে ASG দ্রুত ত্রুটিপূর্ণ সার্ভারটি বদলে দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production auto-scaling setups', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল অটো-স্কেলিং ব্যবস্থা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Airbnb Dynamic Capacity: expands hundreds of search indexing servers each morning as European and American users begin trip searches.', bn: 'Airbnb ডায়নামিক ক্যাপাসিটি: ইউরোপ ও আমেরিকার ব্যবহারকারীরা ভ্রমণ খোঁজা শুরু করলে প্রতিদিন সকালে কয়েকশত সার্চ সার্ভার বাড়িয়ে নেয়।' },
        { en: 'Target Black Friday Scaler: pairs predictive scheduled scaling with real-time target tracking to absorb multi-million checkout traffic surges.', bn: 'টার্গেট ব্ল্যাক ফ্রাইডে: পূর্বাভাস ভিত্তিক শিডিউলিংয়ের সাথে তাৎক্ষণিক টার্গেট ট্র্যাকিং মিলিয়ে কোটি কোটি ব্যবহারকারীর চেকআউট সফল করে।' },
        { en: 'DoorDash Delivery Dispatch: automatically scales dispatch routing algorithms proportionally to active delivery order volumes across major cities.', bn: 'ডোরড্যাশ ডেলিভারি ফ্লিট: শহরের খাবারের অর্ডার বৃদ্ধির সাথে সাথে স্বয়ংক্রিয়ভাবে আনুপাতিক হারে রাউটিং ক্যালকুলেটর বাড়িয়ে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The Compute Release', bn: 'পরবর্তী পাঠ — কম্পিউট রিলিজ ও ফ্লিট ডিপ্লয়মেন্ট' },
    },
    {
      type: 'para',
      text: {
        en: 'With auto-scaling policies and elasticity mastered, Lesson 8 explores fleet releases: canary rollouts, blue-green environments, rolling instance replacements, and zero-downtime production capacity management.',
        bn: 'অটো-স্কেলিং পলিসি ও স্থিতিস্থাপকতা আয়ত্ত করার পর, পাঠ ৮ ফ্লিট রিলিজ নিয়ে আলোচনা করবে: ক্যানারি রোলআউট, ব্লু-গ্রিন পরিবেশ, রোলিং আপডেট এবং ডাউনটাইমহীন প্রোডাকশন ক্ষমতা ব্যবস্থাপনা।',
      },
    },
  ],
  exercises: [
    {
      id: 'cmp-asg-ex-1',
      kind: 'mcq',
      topic: 'target-tracking-policy-operation',
      question: {
        en: 'How does a Target Tracking Scaling Policy operate within an Auto-scaling Group?',
        bn: 'অটো-স্কেলিং গ্রুপে টার্গেট ট্র্যাকিং স্কেলিং পলিসি কীভাবে কাজ করে?',
      },
      options: [
        {
          en: 'It acts like a thermostat, dynamically calculating and adding or removing instances to keep a designated metric (such as average CPU) at a specified target value',
          bn: 'এটি একটি থার্মোস্ট্যাটের মতো কাজ করে, নির্দিষ্ট কোনো মেট্রিককে (যেমন গড় সিপিইউ) লক্ষ্যমাত্রায় ধরে রাখতে স্বয়ংক্রিয়ভাবে সার্ভার সংখ্যা বাড়ায় বা কমায়',
        },
        {
          en: 'It sends text messages to developers asking them to buy computer parts',
          bn: 'এটি ডেভলপারদের মোবাইলে মেসেজ পাঠিয়ে কম্পিউটারের যন্ত্রাংশ কিনতে অনুরোধ করে',
        },
        {
          en: 'It randomly deletes 50% of servers at midnight to test bravery',
          bn: 'এটি সাহসিকতা পরীক্ষার জন্য মাঝরাতে দৈবচয়ন ভিত্তিতে ৫০% সার্ভার মুছে ফেলে',
        },
        {
          en: 'It encrypts database passwords with secret emojis',
          bn: 'এটি গোপন ইমোজি দিয়ে ডেটাবেসের পাসওয়ার্ড এনক্রিপ্ট করে রাখে',
        },
      ],
      answer: 0,
      hint: { en: 'Target tracking acts like a thermostat.', bn: 'টার্গেট ট্র্যাকিং একটি থার্মোস্ট্যাটের মতো কাজ করে।' },
      explanation: {
        en: 'Target tracking calculates the exact instance capacity needed to sustain the target metric value.',
        bn: 'টার্গেট ট্র্যাকিং লক্ষ্যমাত্রা ধরে রাখতে প্রয়োজনীয় সার্ভারের সংখ্যা স্বয়ংক্রিয়ভাবে হিসাব করে নেয়।',
      },
    },
    {
      id: 'cmp-asg-ex-2',
      kind: 'mcq',
      topic: 'asg-sim-numbers',
      question: {
        en: 'In our code walkthrough, what was the baseline state (nodes and CPU), what was the surge CPU, and how many nodes were added to stabilize at what CPU percentage across 3 cycles?',
        bn: 'আমাদের কোড আলোচনায় প্রাথমিক অবস্থা (নোড ও সিপিইউ) কত ছিল, ট্রাফিকের চাপে সিপিইউ কত হয়েছিল এবং ৩টি সাইকেলে কত শতাংশ সিপিইউতে স্থিতিশীল হতে কয়টি নোড যোগ করা হয়েছিল?',
      },
      options: [
        {
          en: 'Baseline = 3 nodes at 45.00% CPU; Surge = 85.00% CPU; added 1 node to reach 4 nodes, stabilizing at 63.75% CPU (bounds: min 2, max 10, target 65.00% with 300s cooldown across 3 cycles)',
          bn: 'প্রাথমিক = ৩টি নোডে ৪৫.০০% সিপিইউ; চাপ = ৮৫.০০% সিপিইউ; ১টি নোড যোগ হয়ে ৪টি নোডে পৌঁছে ৬৩.৭৫% সিপিইউতে স্থিতিশীল (সীমা: সর্বনিম্ন ২, সর্বোচ্চ ১০, টার্গেট ৬৫.০০% এবং ৩টি সাইকেলে ৩০০s কুলডাউন)',
        },
        {
          en: 'Baseline = 10 nodes at 10.00% CPU; Surge = 99.00% CPU; added 10 nodes to reach 20 nodes, stabilizing at 10.00% CPU (bounds: min 1, max 50, target 50.00% with 10s cooldown across 3 cycles)',
          bn: 'প্রাথমিক = ১০টি নোডে ১০.০০% সিপিইউ; চাপ = ৯৯.০০% সিপিইউ; ১০টি নোড যোগ হয়ে ২০টি নোডে পৌঁছে ১০.০০% সিপিইউতে স্থিতিশীল (সীমা: সর্বনিম্ন ১, সর্বোচ্চ ৫০, টার্গেট ৫০.০০% এবং ৩টি সাইকেলে ১০s কুলডাউন)',
        },
        {
          en: 'Baseline = 0 nodes at 0.00% CPU; Surge = 0.00% CPU; added 0 nodes to reach 0 nodes, stabilizing at 0.00% CPU (bounds: min 0, max 0, target 0.00% with 0s cooldown across 3 cycles)',
          bn: 'প্রাথমিক = ০টি নোডে ০.০০% সিপিইউ; চাপ = ০.০০% সিপিইউ; ০টি নোড যোগ হয়ে ০টি নোডে পৌঁছে ০.০০% সিপিইউতে স্থিতিশীল (সীমা: সর্বনিম্ন ০, সর্বোচ্চ ০, টার্গেট ০.০০% এবং ৩টি সাইকেলে ০s কুলডাউন)',
        },
        {
          en: 'Baseline = 2 nodes at 20.00% CPU; Surge = 40.00% CPU; added 2 nodes to reach 4 nodes, stabilizing at 30.00% CPU (bounds: min 2, max 5, target 30.00% with 100s cooldown across 3 cycles)',
          bn: 'প্রাথমিক = ২টি নোডে ২০.০০% সিপিইউ; চাপ = ৪০.০০% সিপিইউ; ২টি নোড যোগ হয়ে ৪টি নোডে পৌঁছে ৩০.০০% সিপিইউতে স্থিতিশীল (সীমা: সর্বনিম্ন ২, সর্বোচ্চ ৫, টার্গেট ৩০.০০% এবং ৩টি সাইকেলে ১০০s কুলডাউন)',
        },
      ],
      answer: 0,
      hint: { en: '3 nodes at 45.00%, surge to 85.00%, added 1 node to reach 4 at 63.75%.', bn: '৩টি নোডে ৪৫.০০%, চাপ ৮৫.০০%, ১টি নোড যোগ হয়ে ৪টি নোডে ৬৩.৭৫%।' },
      explanation: {
        en: 'The simulation demonstrated adding 1 node to reach 4 nodes stabilized average CPU from 85.00% down to 63.75% across 3 cycles.',
        bn: 'সিমুলেশনটিতে ৩টি সাইকেলে দেখা যায় ১টি নোড যোগ করায় ৪টি নোডে গড় সিপিইউ ৮৫.০০% থেকে নেমে ৬৩.৭৫% এ স্থিতিশীল হয়।',
      },
    },
    {
      id: 'cmp-asg-ex-3',
      kind: 'mcq',
      topic: 'cooldown-period-purpose',
      question: {
        en: 'What is the primary function of a Cooldown Period (such as 300 seconds) in an Auto-scaling Group?',
        bn: 'অটো-স্কেলিং গ্রুপে কুলডাউন পিরিয়ডের (যেমন ৩০০ সেকেন্ড) প্রধান কাজ কী?',
      },
      options: [
        {
          en: 'To pause further scaling actions temporarily, allowing newly launched instances to finish booting and absorb traffic before the group recalculates metrics',
          bn: 'পরবর্তী স্কেলিং সাময়িক স্থগিত রাখা, যাতে নতুন সার্ভার বুট সম্পন্ন করে ট্রাফিক নিতে পারে এবং মেট্রিক স্থিতিশীল হওয়ার সুযোগ পায়',
        },
        {
          en: 'To physically lower the room temperature of the cloud datacenter',
          bn: 'ক্লাউড ডাটা সেন্টারের ঘরের তাপমাত্রা শারীরিকভাবে ঠান্ডা করা',
        },
        {
          en: 'To put all software developers on a mandatory coffee break',
          bn: 'সব সফটওয়্যার ডেভলপারকে বাধ্যতামূলক কফি ব্রেকে পাঠানো',
        },
        {
          en: 'To restart the internet router connecting the datacenter to the web',
          bn: 'ডাটা সেন্টারের সাথে ওয়েব যুক্তকারী ইন্টারনেট রাউটারটি রিস্টার্ট করা',
        },
      ],
      answer: 0,
      hint: { en: 'Cooldowns prevent rapid over-scaling oscillations.', bn: 'কুলডাউন অতিরিক্ত দ্রুত ওঠানামা ও বিশৃঙ্খলা রোধ করে।' },
      explanation: {
        en: 'Cooldown periods ensure that auto-scaling does not launch duplicate surplus instances while earlier instances are still booting.',
        bn: 'কুলডাউন পিরিয়ড নিশ্চিত করে যেন আগের সার্ভারগুলো চালু হওয়ার আগেই সিস্টেম অনর্থক অতিরিক্ত নতুন সার্ভার না খুলে বসে।',
      },
    },
    {
      id: 'cmp-asg-ex-4',
      kind: 'predict',
      topic: 'asg-acronym-token',
      question: {
        en: 'What three-letter acronym identifies a cloud Auto-scaling Group (e.g. ASG)?',
        bn: 'ক্লাউড অটো-স্কেলিং গ্রুপকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা প্রকাশ করা হয় (যেমন ASG)?',
      },
      answer: 'ASG',
      accept: ['ASG', 'asg', 'Auto Scaling Group', 'Auto-scaling Group'],
      hint: { en: 'A-S-G', bn: 'A-S-G' },
      explanation: {
        en: 'ASG stands for Auto-scaling Group, the core construct managing fleet elasticity in AWS and compatible clouds.',
        bn: 'ASG হলো Auto-scaling Group, যা ক্লাউড কম্পিউট ফ্লিটের স্থিতিস্থাপকতা ব্যবস্থাপনার মূল পরিকাঠামো।',
      },
    },
  ],
  quiz: {
    id: 'autoscales-and-the-autoscale-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-asg-q1',
        kind: 'mcq',
        topic: 'elb-health-check-vs-ec2',
        question: {
          en: 'Why should you change an Auto-scaling Group health check type from standard EC2 to ELB?',
          bn: 'কেন অটো-স্কেলিং গ্রুপের হেলথ চেক টাইপ সাধারণ EC2 থেকে পরিবর্তন করে ELB করা উচিত?',
        },
        options: [
          {
            en: 'Because EC2 checks only monitor physical hardware responsiveness; ELB health checks detect when the application software itself crashes or returns HTTP 500 errors',
            bn: 'কারণ EC2 চেক কেবল ফিজিক্যাল হার্ডওয়্যার সচল আছে কিনা দেখে; আর ELB চেক অ্যাপ্লিকেশন সফটওয়্যার ক্র্যাশ করলে বা HTTP 500 এরর দিলে তা তাৎক্ষণিক শনাক্ত করে',
          },
          {
            en: 'Because ELB health checks are free while EC2 checks cost millions of dollars',
            bn: 'কারণ ELB চেক সম্পূর্ণ বিনামূল্যে মেলে আর EC2 চেকে কোটি কোটি টাকা খরচ হয়',
          },
          {
            en: 'Because EC2 checks only work on computers with black cases',
            bn: 'কারণ EC2 চেক কেবল কালো রঙের কম্পিউটার কেসিংয়ে কাজ করে',
          },
          {
            en: 'Because ELB health checks automatically write software documentation',
            bn: 'কারণ ELB হেলথ চেক সফটওয়্যারের ডকুমেন্টেশন নিজে নিজে লিখে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'ELB monitors application-level HTTP health.', bn: 'ELB অ্যাপ্লিকেশনের ভিতরের এইচটিটিপি স্বাস্থ্য নিরীক্ষণ করে।' },
        explanation: {
          en: 'ELB health checks ensure that instances with dead application web processes get replaced, not just instances with total hardware failure.',
          bn: 'ELB হেলথ চেক নিশ্চিত করে যে অ্যাপ্লিকেশনের কোড ক্র্যাশ করলেও সেই নষ্ট সার্ভারটি বদলে নতুন সার্ভার বসানো হবে।',
        },
      },
      {
        id: 'cmp-asg-q2',
        kind: 'mcq',
        topic: 'asg-stabilized-cpu-check',
        question: {
          en: 'In our code walkthrough, what was the stabilized CPU utilization achieved after adding 1 node to handle the traffic surge across 3 cycles?',
          bn: 'আমাদের কোড আলোচনায় ৩টি সাইকেলে ট্রাফিকের চাপ সামলাতে ১টি নোড যুক্ত করার পর স্থিতিশীল সিপিইউ ব্যবহার কত শতাংশে নেমে এসেছিল?',
        },
        options: [
          { en: 'Stabilized at 63.75% CPU (within target 65.00% across 3 cycles)', bn: '৬৩.৭৫% সিপিইউতে স্থিতিশীল (৩টি সাইকেলে টার্গেট ৬৫.০০% এর মধ্যে)' },
          { en: 'Stabilized at 100.00% CPU across 3 cycles', bn: '৩টি সাইকেলে ১০০.০০% সিপিইউতে স্থিতিশীল' },
          { en: 'Stabilized at 0.00% CPU across 3 cycles', bn: '৩টি সাইকেলে ০.০০% সিপিইউতে স্থিতিশীল' },
          { en: 'Stabilized at 10.00% CPU across 3 cycles', bn: '৩টি সাইকেলে ১০.০০% সিপিইউতে স্থিতিশীল' },
        ],
        answer: 0,
        hint: { en: '255 / 4 = 63.75% CPU.', bn: '২৫৫ / ৪ = ৬৩.৭৫% সিপিইউ।' },
        explanation: {
          en: 'With 4 nodes sharing the 255 traffic units, average CPU stabilized cleanly to 63.75% across 3 cycles.',
          bn: '৪টি নোডে মোট ২৫৫ ইউনিট ট্রাফিক ভাগ হওয়ার পর গড় সিপিইউ চমৎকারভাবে ৬৩.৭৫% এ নেমে আসে যা ৩টি সাইকেল জুড়ে কার্যকর থাকে।',
        },
      },
      {
        id: 'cmp-asg-q3',
        kind: 'mcq',
        topic: 'scale-in-protection-utility',
        question: {
          en: 'What does the "Scale-in Protection" setting on an auto-scaling instance prevent?',
          bn: 'অটো-স্কেলিং ইনস্ট্যান্সে "Scale-in Protection" সক্রিয় থাকলে তা কী প্রতিরোধ করে?',
        },
        options: [
          {
            en: 'It prevents the Auto-scaling Group from terminating that specific instance during a scale-in event, protecting long-running background tasks from abrupt cancellation',
            bn: 'স্কেল-ইন বা সার্ভার কমানোর সময় ASG যেন সেই নির্দিষ্ট সার্ভারটি বন্ধ না করে তা নিশ্চিত করে, যা দীর্ঘমেয়াদী ব্যাকগ্রাউন্ড কাজকে হঠাৎ বন্ধ হওয়া থেকে রক্ষা করে',
          },
          {
            en: 'It prevents the instance from receiving incoming internet connections',
            bn: 'এটি ইনস্ট্যান্সে কোনো ইন্টারনেট কানেকশন প্রবেশ করা বন্ধ করে দেয়',
          },
          {
            en: 'It prevents the computer mouse from moving across the screen',
            bn: 'এটি স্ক্রিনে কম্পিউটারের মাউস নড়াচড়া করা বন্ধ করে দেয়',
          },
          {
            en: 'It encrypts hard drives so that only the CEO can read them',
            bn: 'এটি হার্ড ড্রাইভ এমনভাবে এনক্রিপ্ট করে যেন কেবল সিইও পড়তে পারেন',
          },
        ],
        answer: 0,
        hint: { en: 'Scale-in protection shields active jobs from termination.', bn: 'স্কেল-ইন সুরক্ষা চলমান কাজ শেষ না হওয়া পর্যন্ত সার্ভারকে রক্ষা করে।' },
        explanation: {
          en: 'Scale-in protection guarantees that instances performing active batch jobs or heavy computations are spared when the fleet shrinks.',
          bn: 'স্কেল-ইন সুরক্ষা নিশ্চিত করে যে গুরুত্বপূর্ণ কাজ পরিচালনাকারী সার্ভারগুলো ফ্লিট ছোট করার সময়ও বন্ধ হবে না।',
        },
      },
      {
        id: 'cmp-asg-q4',
        kind: 'predict',
        topic: 'asg-minimum-healthy-setting',
        question: {
          en: 'What property in an Auto-scaling Group defines the smallest number of instances the fleet is ever allowed to shrink to (e.g. minSize)?',
          bn: 'অটো-স্কেলিং গ্রুপে কোন প্রোপার্টি নির্ধারণ করে যে বহরের সার্ভার সংখ্যা সর্বনিম্ন কতটির নিচে কখনই নামবে না (যেমন minSize)?',
        },
        answer: 'minSize',
        accept: ['minSize', 'min', 'minimum', 'MinSize'],
        hint: { en: 'm-i-n-S-i-z-e', bn: 'm-i-n-S-i-z-e' },
        explanation: {
          en: 'minSize establishes the minimum baseline instance count that the auto-scaling group maintains regardless of load.',
          bn: 'minSize হলো অটো-স্কেলিং গ্রুপের সর্বনিম্ন সার্ভার সংখ্যা যা ট্রাফিক শূন্য হলেও সর্বদা সচল রাখা হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-compute-release',
    title: { en: 'The Compute Release', bn: 'কম্পিউট রিলিজ ও ফ্লিট ডিপ্লয়মেন্ট' },
  },
};
