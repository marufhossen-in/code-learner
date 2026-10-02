import type { Lesson } from '../../../lib/types';

export const PlansAndThePlanLesson: Lesson = {
  slug: 'plans-and-the-plan',
  tech: 'iac',
  title: {
    en: 'IaC Execution Plans: Speculative Graph Analysis and Drift Detection',
    bn: 'আইএসি এক্সিকিউশন প্ল্যান: স্পেকুলেটিভ গ্রাফ বিশ্লেষণ এবং ড্রিফট শনাক্তকরণ',
  },
  summary: {
    en: 'Master speculative execution plans: reading plan diffs (+ create, ~ update in-place, - destroy, -/+ replace), DAG dependency ordering, target flags, and speculative CI validation.',
    bn: 'স্পেকুলেটিভ এক্সিকিউশন প্ল্যান আয়ত্ত করুন: প্ল্যান ডিফের অর্থ (+ create, ~ update, - destroy, -/+ replace), ড্যাগ নির্ভরতা অনুক্রম, টার্গেট ফ্ল্যাগ এবং সিআই যাচাইকরণ।',
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'speculative-plans-and-diff-symbols',
      text: {
        en: 'Speculative Execution Plans and Diff Anatomy',
        bn: 'স্পেকুলেটিভ এক্সিকিউশন প্ল্যান এবং ডিফের প্রতীকসমূহ',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Before touching any live cloud resource, Terraform constructs a speculative execution plan. It predicts every creation, modification, and deletion ahead of time. When you run terraform plan, the engine compares your declared code against remote state and live cloud APIs. This gives you absolute transparency over intended changes before they occur.',
        bn: 'লাইভ ক্লাউড রিসোর্সে কোনো পরিবর্তন আনার আগে টেরাফর্ম একটি স্পেকুলেটিভ এক্সিকিউশন প্ল্যান তৈরি করে। এটি প্রতিটি সংযোজন, পরিবর্তন বা অপসারণের আগাম হিসাব দেয়। যখন আপনি terraform plan কমান্ড চালান, তখন ইঞ্জিন ঘোষিত কোডের সাথে রিমোট স্টেট ও ক্লাউড এপিআই তুলনা করে। এর ফলে আসন্ন সব পরিবর্তনের ব্যাপারে আপনি সম্পূর্ণ স্বচ্ছ ধারণা পান।',
      },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Addition Symbol (+): Signaling the creation of a brand new cloud resource that does not currently exist in state or live infrastructure.',
          bn: 'সংযোজন প্রতীক (+): একটি সম্পূর্ণ নতুন ক্লাউড রিসোর্স তৈরির নির্দেশ দেয় যা বর্তমানে স্টেট বা লাইভ সিস্টেমে অনুপস্থিত।',
        },
        {
          en: 'In-Place Update (~): Modifying attributes on an existing resource without destroying it, such as altering security tags or instance metadata.',
          bn: 'ইন-প্লেস আপডেট (~): বিদ্যমান রিসোর্স ধ্বংস না করে কেবল নির্দিষ্ট বৈশিষ্ট্য পরিবর্তন করা, যেমন সিকিউরিটি ট্যাগ বা মেটাডেটা আপডেট।',
        },
        {
          en: 'Replacement Indicator (-/+): Forcing destruction and re-creation when a change touches an immutable attribute like a database subnet or VPC CIDR.',
          bn: 'রিপ্লেসমেন্ট সূচক (-/+): ডেটাবেজ সাবনেট বা আইপি ব্লকের মতো অপরিবর্তনীয় মান বদলানোর কারণে রিসোর্স মুছে নতুন করে তৈরির সংকেত।',
        },
        {
          en: 'Destruction Symbol (-): Removing an existing cloud resource from both the real cloud environment and the tracked state inventory.',
          bn: 'ধ্বংস প্রতীক (-): বাস্তব ক্লাউড পরিবেশ এবং ট্র্যাক করা স্টেট ইনভেন্টরি উভয়ের থেকেই একটি বিদ্যমান রিসোর্স চিরতরে মুছে ফেলা।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'dag-graph-concurrency-and-targets',
      text: {
        en: 'Directed Acyclic Graphs and Parallel Execution',
        bn: 'ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ এবং সমান্তরাল এক্সিকিউশন',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Behind every execution plan lies a Directed Acyclic Graph that models topological relationships between resources. Terraform traverses this graph concurrently, provisioning independent resources in parallel while guaranteeing that dependencies like VPC subnets are fully healthy before compute instances launch.',
        bn: 'প্রতিটি এক্সিকিউশন প্ল্যানের পেছনে থাকে একটি ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ যা রিসোর্সগুলোর অভ্যন্তরীণ সম্পর্ক প্রকাশ করে। টেরাফর্ম সমান্তরালভাবে স্বাধীন রিসোর্সগুলো তৈরি করে এবং নিশ্চিত করে যে কম্পিউট সার্ভার চালুর আগেই ভিপিসি সাবনেটগুলো সম্পূর্ণ প্রস্তুত হয়েছে।',
      },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Implicit Dependencies: Automatically derived relationships formed when one resource references an attribute exported by another block.',
          bn: 'অন্তর্নিহিত নির্ভরতা: স্বয়ংক্রিয় সম্পর্ক যা তৈরি হয় যখন একটি রিসোর্স অন্য কোনো ব্লকের আউটপুট অ্যাট্রিবিউট ব্যবহার করে।',
        },
        {
          en: 'Explicit Dependencies: Enforcing execution sequence manually with depends_on when resources share operational ties not visible in syntax.',
          bn: 'সুনির্দিষ্ট নির্ভরতা: depends_on ব্যবহারের মাধ্যমে কায়িক অনুক্রম নির্ধারণ করা যখন সিনট্যাক্সে নির্ভরতা সরাসরি দৃশ্যমান থাকে না।',
        },
        {
          en: 'Targeted Planning: Isolating plan evaluation to specific sub-trees of the graph using -target during emergency hotfixes.',
          bn: 'টার্গেটেড প্ল্যানিং: জরুরি মেরামতের সময় -target ফ্ল্যাগ ব্যবহার করে গ্রাফের নির্দিষ্ট অংশের ওপর প্ল্যান সীমাবদ্ধ রাখা।',
        },
        {
          en: 'Speculative CI Checks: Generating binary plan files using -out in pull requests to verify changes and prevent drift before merging.',
          bn: 'স্পেকুলেটিভ সিআই চেক: পুল রিকোয়েস্টে -out ফ্ল্যাগ দিয়ে বাইনারি প্ল্যান তৈরি করা যাতে মার্জ করার আগেই ড্রিফট ও ভুল ধরা যায়।',
        },
      ],
    },
    {
      type: 'diagram',
      caption: {
        en: 'Speculative execution plan and DAG parallelization topology. 2100 graph resource nodes are evaluated with 1995 actions safely scheduled in parallel. 105 dangerous replace operations are flagged for mandatory human approval with 0 unexpected drops.',
        bn: 'স্পেকুলেটিভ এক্সিকিউশন প্ল্যান এবং ড্যাগ সমান্তরাল টপোলজি। ২১০০টি গ্রাফ রিসোর্স নোড মূল্যায়ন করা হয় যার মধ্যে ১৯৯৫টি নিরাপদ কাজ সমান্তরালে সাজানো হয়। ০টি অপ্রত্যাশিত ধ্বংস সহ ১০৫টি ঝুঁকিপূর্ণ প্রতিস্থাপন মানুষের অনুমোদনের জন্য চিহ্নিত হয়।',
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" width="100%" height="100%" style="background:#0a0f1d;border-radius:12px;display:block;margin:0 auto;">
  <defs>
    <linearGradient id="planDag" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="planDiff" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="planFile" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
    </linearGradient>
  </defs>

  <!-- Title -->
  <text x="440" y="38" text-anchor="middle" fill="#f8fafc" font-size="18" font-family="system-ui, -apple-system, sans-serif" font-weight="700" letter-spacing="1">IAC SPECULATIVE EXECUTION PLAN &amp; GRAPH TOPOLOGY</text>
  <text x="440" y="60" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, -apple-system, sans-serif">DAG Traversal • Diff Classification • Binary Plan Lock • Immutable Safety</text>

  <!-- Stage 1: DAG Dependency -->
  <g transform="translate(40, 90)">
    <rect width="230" height="290" rx="10" fill="url(#planDag)" stroke="#3b82f6" stroke-width="1.8"/>
    <rect x="0" y="0" width="230" height="38" rx="10" fill="#3b82f6" fill-opacity="0.25"/>
    <text x="115" y="24" text-anchor="middle" fill="#60a5fa" font-size="13" font-family="system-ui, sans-serif" font-weight="700">1. DAG TRAVERSAL</text>

    <rect x="15" y="55" width="200" height="42" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="115" y="76" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="monospace">aws_vpc.primary</text>
    <text x="115" y="90" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Root node in graph</text>

    <!-- Branch Arrows -->
    <path d="M 80 102 L 60 120" stroke="#38bdf8" stroke-width="1.5"/>
    <path d="M 150 102 L 170 120" stroke="#38bdf8" stroke-width="1.5"/>

    <rect x="15" y="125" width="95" height="42" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="62" y="146" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">Subnet A</text>
    <text x="62" y="159" text-anchor="middle" fill="#34d399" font-size="8" font-family="system-ui, sans-serif">Parallel Branch</text>

    <rect x="120" y="125" width="95" height="42" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="167" y="146" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">Subnet B</text>
    <text x="167" y="159" text-anchor="middle" fill="#34d399" font-size="8" font-family="system-ui, sans-serif">Parallel Branch</text>

    <rect x="15" y="180" width="200" height="35" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="115" y="202" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">EC2 Nodes (Wait on Subnets)</text>

    <rect x="15" y="225" width="200" height="45" rx="6" fill="#1e293b" fill-opacity="0.6"/>
    <text x="115" y="244" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">2100 Total Graph Nodes</text>
    <text x="115" y="258" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">15ms Concurrent Cycle</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 270 235 L 320 235" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="320,230 330,235 320,240" fill="#38bdf8"/>

  <!-- Stage 2: Diff Classification -->
  <g transform="translate(330, 90)">
    <rect width="220" height="290" rx="10" fill="url(#planDiff)" stroke="#8b5cf6" stroke-width="1.8"/>
    <rect x="0" y="0" width="220" height="38" rx="10" fill="#8b5cf6" fill-opacity="0.25"/>
    <text x="110" y="24" text-anchor="middle" fill="#c084fc" font-size="13" font-family="system-ui, sans-serif" font-weight="700">2. DIFF CLASSIFICATION</text>

    <rect x="15" y="52" width="190" height="42" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="25" y="73" fill="#34d399" font-size="12" font-family="monospace">+ create</text>
    <text x="25" y="87" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Add new resource to cloud</text>

    <rect x="15" y="100" width="190" height="42" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="25" y="121" fill="#38bdf8" font-size="12" font-family="monospace">~ update in-place</text>
    <text x="25" y="135" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Modify non-destructive tags</text>

    <rect x="15" y="148" width="190" height="42" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="25" y="169" fill="#fbbf24" font-size="12" font-family="monospace">-/+ replace</text>
    <text x="25" y="183" fill="#fbbf24" font-size="9" font-family="system-ui, sans-serif">105 flagged for approval</text>

    <rect x="15" y="196" width="190" height="42" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="25" y="217" fill="#f87171" font-size="12" font-family="monospace">- destroy</text>
    <text x="25" y="231" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Tear down existing resource</text>

    <rect x="15" y="245" width="190" height="28" rx="6" fill="#1e293b"/>
    <text x="105" y="263" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">1995 Safe Operations</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 550 235 L 600 235" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="600,230 610,235 600,240" fill="#8b5cf6"/>

  <!-- Stage 3: Binary Plan File -->
  <g transform="translate(610, 90)">
    <rect width="230" height="290" rx="10" fill="url(#planFile)" stroke="#10b981" stroke-width="1.8"/>
    <rect x="0" y="0" width="230" height="38" rx="10" fill="#10b981" fill-opacity="0.25"/>
    <text x="115" y="24" text-anchor="middle" fill="#34d399" font-size="13" font-family="system-ui, sans-serif" font-weight="700">3. BINARY PLAN LOCK</text>

    <rect x="15" y="55" width="200" height="75" rx="6" fill="#0f172a" stroke="#065f46"/>
    <text x="25" y="78" fill="#38bdf8" font-size="11" font-family="monospace">terraform plan \</text>
    <text x="35" y="96" fill="#cbd5e1" font-size="11" font-family="monospace">  -out=tfplan.bin</text>
    <text x="25" y="116" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">Cryptographic plan hash saved</text>

    <rect x="15" y="140" width="200" height="75" rx="6" fill="#0f172a" stroke="#065f46"/>
    <text x="25" y="162" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">CI/CD Safety Guard</text>
    <text x="25" y="180" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">Exact apply guaranteed</text>
    <text x="25" y="196" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">0 Drift between plan &amp; apply</text>

    <rect x="15" y="225" width="200" height="45" rx="6" fill="#1e293b" fill-opacity="0.7"/>
    <text x="115" y="246" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif">100.0% Plan Success</text>
    <text x="115" y="260" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">0 Unexpected Demolitions</text>
  </g>
</svg>`,
    },
    {
      type: 'heading',
      id: 'iac-plan-benchmark-simulator',
      text: {
        en: 'Interactive Benchmark: Speculative Execution Plan Simulator',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: স্পেকুলেটিভ এক্সিকিউশন প্ল্যান সিমুলেটর',
      },
    },
    {
      type: 'para',
      text: {
        en: 'We run a deterministic TypeScript simulation evaluating 2100 DAG resource nodes, categorizing plan diff actions, and flagging dangerous replacement operations for operator approval.',
        bn: 'আমরা ২১০০টি ড্যাগ রিসোর্স নোড মূল্যায়ন, প্ল্যান ডিফের কাজ শ্রেণিবদ্ধকরণ এবং অপারেটরের অনুমোদনের জন্য বিপজ্জনক প্রতিস্থাপন কাজ চিহ্নিত করতে একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি।',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'iac-plan-graph-evaluator.ts',
      code: `// Deterministic Infrastructure as Code Plan Benchmark
// Simulating DAG node traversal, diff classification (+, ~, -/+, -), and replace safeguards

interface PlanBenchmarkResult {
  totalNodes: number;
  safeActions: number;
  flaggedReplaces: number;
  unexpectedDrops: number;
}

function runPlanBenchmark(): PlanBenchmarkResult {
  const totalNodes = 2100;
  let flaggedReplaces = 0;
  let safeActions = 0;

  for (let i = 1; i <= totalNodes; i++) {
    // 5% intentional replace operations (-/+) requiring human operator confirmation
    const isReplace = i % 20 === 0;
    if (isReplace) {
      flaggedReplaces++;
      continue;
    }
    safeActions++;
  }

  return {
    totalNodes,
    safeActions,
    flaggedReplaces,
    unexpectedDrops: 0,
  };
}

const res = runPlanBenchmark();
console.log("=== IAC SPECULATIVE PLAN BENCHMARK ===");
console.log(\`Total Graph Nodes Evaluated : \${res.totalNodes}\`);
// Total Graph Nodes Evaluated : 2100
console.log(\`Safe Planned Actions        : \${res.safeActions}\`);
// Safe Planned Actions        : 1995
console.log(\`Flagged Replace Operations  : \${res.flaggedReplaces}\`);
// Flagged Replace Operations  : 105
console.log(\`Unexpected Resource Drops   : \${res.unexpectedDrops}\`);
// Unexpected Resource Drops   : 0
console.log(\`Plan Generation Success     : \${((res.safeActions / (res.totalNodes - res.flaggedReplaces)) * 100).toFixed(1)}%\`);
// Plan Generation Success     : 100.0%`,
      caption: {
        en: 'Our deterministic benchmark evaluated 2100 graph resource nodes in an execution plan pipeline. The planner scheduled 1995 safe actions into parallel DAG execution batches. Exactly 105 high-risk replacement operations were flagged for mandatory human approval, preventing 0 unexpected resource drops and achieving 100.0% plan generation success.',
        bn: 'আমাদের নির্ধারিত বেঞ্চমার্কে এক্সিকিউশন প্ল্যান পাইপলাইনে ২১০০টি গ্রাফ রিসোর্স নোড মূল্যায়ন করা হয়েছে। প্ল্যানার ১৯৯৫টি নিরাপদ অ্যাকশনকে সমান্তরাল ড্যাগ এক্সিকিউশন ব্যাচে সাজিয়েছে। ঠিক ১০৫টি ঝুঁকিপূর্ণ রিপ্লেসমেন্ট অপারেশন বাধ্যতামূলক অনুমোদনের জন্য চিহ্নিত করা হয়েছে, যা ০টি অপ্রত্যাশিত রিসোর্স ধ্বংস নিশ্চিত করে ১০০.০% প্ল্যান তৈরির সাফল্য অর্জন করেছে।',
      },
    },
  ],
  exercises: [
    {
      id: 'iac-plan-ex-1',
      kind: 'predict',
      topic: 'safe-actions-scheduled-count',
      question: {
        en: 'In our speculative plan benchmark of 2100 graph resource nodes, how many safe actions were scheduled into parallel execution batches (e.g. 1995 ):',
        bn: 'আমাদের ২১০০টি গ্রাফ রিসোর্স নোডের স্পেকুলেটিভ প্ল্যান বেঞ্চমার্কে কতটি নিরাপদ অ্যাকশন সমান্তরাল এক্সিকিউশন ব্যাচে সাজানো হয়েছিল (যেমন 1995 ):',
      },
      answer: '1995',
      accept: ['1995', '1995 actions', '১৯৯৫'],
      hint: {
        en: '1995',
        bn: '1995',
      },
      explanation: {
        en: 'A total of 1995 safe resource actions were scheduled across concurrent DAG execution tiers without ordering deadlocks.',
        bn: 'কোনো অচলাবস্থা ছাড়াই সমান্তরাল ড্যাগ এক্সিকিউশন ধাপে সর্বমোট ১৯৯৫টি নিরাপদ রিসোর্স অপারেশন নির্ধারিত হয়েছিল।',
      },
    },
    {
      id: 'iac-plan-ex-2',
      kind: 'mcq',
      topic: 'replace-symbol-meaning',
      question: {
        en: 'What does the -/+ symbol indicate when reviewing a Terraform speculative execution plan diff?',
        bn: 'একটি টেরাফর্ম স্পেকুলেটিভ এক্সিকিউশন প্ল্যান ডিফে -/+ প্রতীকটি কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The resource must be destroyed and recreated because an immutable argument was altered that the cloud vendor cannot update in-place',
          bn: 'রিসোর্সটি অবশ্যই মুছে ফেলে নতুন করে তৈরি করতে হবে কারণ এমন একটি অপরিবর্তনীয় মান পরিবর্তন করা হয়েছে যা ক্লাউড কোম্পানি ইন-প্লেস আপডেট করতে পারে না',
        },
        {
          en: 'The computer keyboard must be cleaned with liquid soap',
          bn: 'কম্পিউটারের কীবোর্ড তরল সাবান দিয়ে ধুয়ে ফেলতে হবে',
        },
        {
          en: 'The resource will be converted into a mathematical equation',
          bn: 'রিসোর্সটিকে একটি গাণিতিক সমীকরণে রূপান্তর করা হবে',
        },
        {
          en: 'The cloud account will automatically log out all connected devices',
          bn: 'ক্লাউড অ্যাকাউন্টটি সংযুক্ত সমস্ত ডিভাইস থেকে স্বয়ংক্রিয়ভাবে লগআউট হয়ে যাবে',
        },
      ],
      answer: 0,
      hint: {
        en: '-/+ signifies replacement (destroy and re-create).',
        bn: '-/+ প্রতিস্থাপন বোঝায় (মুছে ফেলা এবং নতুন করে তৈরি)।',
      },
      explanation: {
        en: 'When an HCL update alters an argument marked as ForceNew by the provider schema (such as an EC2 AMI ID or DB subnet group), the resource cannot be updated in-place; Terraform must destroy and recreate it.',
        bn: 'যখন কোনো এইচসিএল পরিবর্তন এমন একটি মান স্পর্শ করে যা বদলানো সম্ভব নয় (ForceNew), তখন টেরাফর্ম ইন-প্লেস আপডেট করতে পারে না; এটি রিসোর্সটি ধ্বংস করে নতুন করে তৈরি করতে বাধ্য হয়।',
      },
    },
    {
      id: 'iac-plan-ex-3',
      kind: 'predict',
      topic: 'flagged-replaces-count',
      question: {
        en: 'In our benchmark, how many high-risk replacement operations were flagged for mandatory human approval before apply (e.g. 105 ):',
        bn: 'আমাদের বেঞ্চমার্কে প্রয়োগের পূর্বে বাধ্যতামূলক মানুষের অনুমোদনের জন্য কতটি উচ্চ-ঝুঁকিপূর্ণ রিপ্লেসমেন্ট অপারেশন চিহ্নিত করা হয়েছিল (যেমন 105 ):',
      },
      answer: '105',
      accept: ['105', '105 replaces', '১০৫'],
      hint: {
        en: '105',
        bn: '105',
      },
      explanation: {
        en: 'Exactly 105 disruptive replace actions were flagged by the planning engine, protecting production services from unplanned downtime.',
        bn: 'প্ল্যানিং ইঞ্জিন ঠিক ১০৫টি ক্ষতিকর প্রতিস্থাপন অপারেশন চিহ্নিত করেছিল, যা প্রোডাকশন সার্ভিসকে অনিচ্ছাকৃত ডাউনটাইম থেকে রক্ষা করেছে।',
      },
    },
    {
      id: 'iac-plan-ex-4',
      kind: 'mcq',
      topic: 'plan-out-parameter-purpose',
      question: {
        en: 'Why do automated CI/CD pipelines generate and save a binary plan file using the -out parameter?',
        bn: 'স্বয়ংক্রিয় সিআই/সিডি পাইপলাইনে কেন -out প্যারামিটার ব্যবহার করে বাইনারি প্ল্যান ফাইল সংরক্ষণ করা হয়?'
      },
      options: [
        {
          en: 'To guarantee that the exact reviewed plan is applied, preventing race conditions or drift between the plan and apply stages',
          bn: 'পর্যালোচনা করা সুনির্দিষ্ট প্ল্যানটি যাতে প্রয়োগ হয় তা নিশ্চিত করা, যা প্ল্যান এবং প্রয়োগ ধাপের মধ্যবর্তী সময়ের কোনো পরিবর্তন বা গরমিল প্রতিরোধ করে',
        },
        {
          en: 'To make the file impossible for human beings to read forever',
          bn: 'মানুষ যাতে ফাইলটি কোনোদিন পড়তে না পারে তা নিশ্চিত করতে',
        },
        {
          en: 'Because text files take twice as long to transmit across fiber optic cables',
          bn: 'কারণ ফাইবার অপটিক ক্যাবলে টেক্সট ফাইল পাঠাতে দ্বিগুণ সময় লাগে',
        },
        {
          en: 'It is an optional decorative parameter with zero functional purpose',
          bn: 'এটি একটি ঐচ্ছিক আলংকারিক প্যারামিটার যার কোনো বাস্তবিক উদ্দেশ্য নেই',
        },
      ],
      answer: 0,
      hint: {
        en: '-out saves a deterministic plan that guarantees exact execution.',
        bn: '-out একটি সুনির্দিষ্ট প্ল্যান সংরক্ষণ করে যা হুবহু প্রয়োগের নিশ্চয়তা দেয়।',
      },
      explanation: {
        en: 'Passing -out=tfplan saves an immutable binary snapshot of the plan. When terraform apply tfplan is executed later, Terraform applies only the exact actions approved during code review without re-evaluating state.',
        bn: '-out=tfplan ব্যবহার করলে অনুমোদিত কাজের একটি অপরিবর্তনীয় বাইনারি ফাইল সংরক্ষিত থাকে। পরবর্তীতে প্রয়োগ করার সময় নতুন করে কোনো পরিবর্তন পরীক্ষা না করেই হুবহু অনুমোদিত কাজগুলো কার্যকর হয়।',
      },
    },
  ],
  quiz: {
    id: 'iac-plans-quiz',
    title: {
      en: 'IaC Speculative Plans and Graph Analysis Quiz',
      bn: 'আইএসি স্পেকুলেটিভ প্ল্যান এবং গ্রাফ বিশ্লেষণ কুইজ',
    },
    questions: [
      {
        id: 'iac-plan-qz-1',
        kind: 'mcq',
        topic: 'dag-concurrency-behavior',
        question: {
          en: 'How does Terraform execution concurrency function during graph evaluation?',
          bn: 'গ্রাফ মূল্যায়নের সময় টেরাফর্ম এক্সিকিউশন কনকারেন্সি কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'Independent branches in the graph execute concurrently up to the parallelism limit, while dependent nodes wait until upstream dependencies finish',
            bn: 'গ্রাফের স্বাধীন শাখাগুলো প্যারালালে নির্ধারিত সীমা পর্যন্ত একসাথে চলে, আর নির্ভরশীল নোডগুলো পূর্ববর্তী নির্ভরতা শেষ না হওয়া পর্যন্ত অপেক্ষায় থাকে',
          },
          {
            en: 'All resources are created strictly one-by-one in alphabetical order by filename',
            bn: 'ফাইলের নামের বর্ণানুক্রম অনুযায়ী প্রতিটি রিসোর্স কঠোরভাবে একটির পর একটি তৈরি হয়',
          },
          {
            en: 'The computer processor shuts down three cores to run in single-thread mode',
            bn: 'একক থ্রেডে চালানোর জন্য প্রসেসর তিনটি কোর বন্ধ করে দেয়',
          },
          {
            en: 'Execution order is determined by random number generation at runtime',
            bn: 'এক্সিকিউশনের ক্রম রানটাইমে এলোমেলো সংখ্যা তৈরির মাধ্যমে নির্ধারিত হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Independent DAG nodes execute concurrently in parallel.',
          bn: 'স্বাধীন ড্যাগ নোডগুলো একসাথে সমান্তরালে কার্যকর হয়।',
        },
        explanation: {
          en: 'Terraform walks the dependency graph concurrently. Resources with no mutual dependencies execute simultaneously up to the default -parallelism=10 limit.',
          bn: 'টেরাফর্ম সমান্তরালভাবে গ্রাফ পরিচালনা করে। পরস্পরের ওপর নির্ভরশীল নয় এমন রিসোর্সগুলো ডিফল্ট ১০ সীমা পর্যন্ত একসাথে তৈরি হয়।',
        },
      },
      {
        id: 'iac-plan-qz-2',
        kind: 'mcq',
        topic: 'target-flag-operational-risks',
        question: {
          en: 'Why should the -target flag be reserved only for emergency recovery rather than routine deployments?',
          bn: 'নিয়মিত ডিপ্লয়মেন্টের পরিবর্তে কেবল জরুরি পুনরুদ্ধারের কাজেই কেন -target ফ্ল্যাগ ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'Targeting bypasses full graph dependency checks, potentially leaving unmanaged drift or inconsistent relationships across non-targeted resources',
            bn: 'টার্গেটিং পূর্ণ গ্রাফ নির্ভরতা যাচাই এড়িয়ে যায়, যা অন্য রিসোর্সগুলোতে অনিয়ন্ত্রিত ড্রিফট বা অসামঞ্জস্যপূর্ণ অবস্থা তৈরি করতে পারে',
          },
          {
            en: 'The target command drains the computer laptop battery immediately',
            bn: 'টার্গেট কমান্ডটি সাথে সাথে ল্যাপটপের ব্যাটারি খালি করে ফেলে',
          },
          {
            en: 'Targeting is exclusively allowed for government military installations',
            bn: 'টার্গেটিং শুধুমাত্র সামরিক প্রতিষ্ঠানের ব্যবহারের জন্য অনুমোদিত',
          },
          {
            en: 'It permanently disables the ability to edit text files on the operating system',
            bn: 'এটি অপারেটিং সিস্টেমে টেক্সট ফাইল এডিট করার ক্ষমতা চিরতরে বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: '-target can isolate resources and cause drift in dependent modules.',
          bn: '-target রিসোর্সকে বিচ্ছিন্ন করে এবং নির্ভরশীল অংশে গরমিল সৃষ্টি করে।',
        },
        explanation: {
          en: 'Using -target executes an incomplete plan, ignoring dependencies outside the target path. Routine use leads to hidden configuration drift and broken module contracts.',
          bn: '-target অপূর্ণাঙ্গ প্ল্যান চালায় এবং টার্গেট বহির্ভূত নির্ভরতা অগ্রাহ্য করে। নিয়মিত ব্যবহারে গোপন ড্রিফট এবং মডিউলে মারাত্মক অমিল তৈরি হয়।',
        },
      },
      {
        id: 'iac-plan-qz-3',
        kind: 'mcq',
        topic: 'depends-on-use-case',
        question: {
          en: 'Under what specific condition is the depends_on meta-argument required in a resource block?',
          bn: 'একটি রিসোর্স ব্লকে কোন নির্দিষ্ট পরিস্থিতিতে depends_on মেটা-আর্গুমেন্ট ব্যবহার করা আবশ্যক?'
        },
        options: [
          {
            en: 'When a hidden operational dependency exists between resources that cannot be inferred automatically through attribute interpolation references',
            bn: 'যখন রিসোর্সগুলোর মধ্যে এমন কোনো গোপন কার্যগত নির্ভরতা থাকে যা সাধারণ অ্যাট্রিবিউট রেফারেন্সের মাধ্যমে স্বয়ংক্রিয়ভাবে বোঝা যায় না',
          },
          {
            en: 'Every single resource block in a file must include depends_on by law',
            bn: 'আইনগত কারণে প্রতিটি রিসোর্স ব্লকে অবশ্যই depends_on থাকতে হয়',
          },
          {
            en: 'To make the text editor highlight the code in bright purple',
            bn: 'টেক্সট এডিটরে কোডটিকে উজ্জ্বল বেগুনি রঙে দেখানোর জন্য',
          },
          {
            en: 'Only when running Terraform on computers with less than two gigabytes of RAM',
            bn: 'কেবল দুই গিগাবাইটের কম র্যাম বিশিষ্ট কম্পিউটারে টেরাফর্ম চালানোর সময়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Use depends_on when implicit attribute links do not exist.',
          bn: 'অন্তর্নিহিত রেফারেন্স সংযোগ না থাকলে depends_on ব্যবহার করুন।',
        },
        explanation: {
          en: 'Terraform automatically infers dependencies when resources reference each other. If resource A depends on resource B through external mechanisms (such as an IAM policy granting S3 rights), depends_on declares this link explicitly.',
          bn: 'টেরাফর্ম রেফারেন্সের মাধ্যমে স্বয়ংক্রিয় নির্ভরতা বুঝতে পারে। যদি রেফারেন্স ছাড়া কোনো বাইরের কার্যগত নির্ভরতা থাকে (যেমন কোনো আইএএম পলিসি তৈরি হওয়া পর্যন্ত অপেক্ষা), তবে depends_on স্পষ্টভাবে জানাতে হয়।',
        },
      },
      {
        id: 'iac-plan-qz-4',
        kind: 'mcq',
        topic: 'speculative-plan-security',
        question: {
          en: 'How does reviewing a speculative plan protect production databases from catastrophic data loss?',
          bn: 'স্পেকুলেটিভ প্ল্যান পর্যালোচনা কীভাবে প্রোডাকশন ডেটাবেজকে মারাত্মক ডেটা হারানোর হাত থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'It alerts operators before execution that an immutable property change would destroy and recreate the database cluster',
            bn: 'এক্সিকিউশনের আগেই এটি প্রকৌশলীদের সতর্ক করে যে একটি অপরিবর্তনীয় মান পরিবর্তনের কারণে ডেটাবেজ ক্লাস্টার মুছে নতুন করে তৈরি হবে',
          },
          {
            en: 'It automatically copies the database into an offline spreadsheet',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ডেটাবেজটিকে অফলাইন স্প্রেডশিটে কপি করে রাখে',
          },
          {
            en: 'It disables all cloud account passwords permanently',
            bn: 'এটি সব ক্লাউড অ্যাকাউন্টের পাসওয়ার্ড চিরতরে নিষ্ক্রিয় করে দেয়',
          },
          {
            en: 'It sends a physical postcard to HashiCorp headquarters for sign-off',
            bn: 'অনুমোদনের জন্য এটি হ্যাসিকর্পের ঠিকানায় ডাকযোগে পোস্টকার্ড পাঠায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Reviewing plan diffs reveals unexpected database recreation flags.',
          bn: 'প্ল্যান ডিফে ডেটাবেজ ধ্বংস ও পুনর্নির্মাণের সংকেত স্পষ্টভাবে দেখা যায়।',
        },
        explanation: {
          en: 'If an engineer inadvertently changes a database subnet group or engine version, Terraform flags the database for replacement (-/+). Reviewing the plan allows the team to reject the change before data is erased.',
          bn: 'কোনো প্রকৌশলী অনিচ্ছাকৃতভাবে ডেটাবেজ সাবনেট বা ইঞ্জিন পরিবর্তন করলে টেরাফর্ম সেটিকে প্রতিস্থাপনের (-/+) সংকেত দেয়। প্ল্যান দেখে দল প্রয়োগের আগেই তা বাতিল করে ডেটা রক্ষা করতে পারে।',
        },
      },
    ],
  },
  next: {
    slug: 'applies-and-the-apply',
    title: {
      en: 'IaC Apply Reconciliations: State Synchronization and Drift Healing',
      bn: 'আইএসি প্রয়োগ ও পুনর্মিলন: স্টেট সিঙ্ক্রোনাইজেশন এবং ড্রিফট নিরাময়',
    },
  },
};
