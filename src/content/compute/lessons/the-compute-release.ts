import type { Lesson } from '../../../lib/types';

export const TheComputeReleaseLesson: Lesson = {
  slug: 'the-compute-release',
  tech: 'compute',
  title: {
    en: 'The Compute Release — Canary, Blue-Green, and Fleet Rollouts',
    bn: 'কম্পিউট রিলিজ — ক্যানারি, ব্লু-গ্রিন ও ফ্লিট ডিপ্লয়মেন্ট',
  },
  summary: {
    en: 'A foundational overview of production compute fleet releases and zero-downtime rollouts. Master canary routing, blue-green environment flipping, and rolling replacement thresholds, evaluating live error rate telemetry against a 1.00% automated rollback threshold across 10 fleet nodes.',
    bn: 'প্রোডাকশন কম্পিউট ফ্লিট রিলিজ ও ডাউনটাইমহীন ডিপ্লয়মেন্টের মৌলিক ধারণা। ক্যানারি রাউটিং, ব্লু-গ্রিন পরিবেশ পরিবর্তন এবং রোলিং আপডেট থ্রেশহোল্ড আয়ত্ত করা, যেখানে ১০টি ফ্লিট নোডে ১.০০% স্বয়ংক্রিয় রোলব্যাক থ্রেশহোল্ডের বিপরীতে এরর রেট যাচাই করা হয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Fleet deployment patterns, canary shifts, and automated rollback', bn: 'WHAT — ফ্লিট ডিপ্লয়মেন্ট প্যাটার্ন, ক্যানারি শিফট ও স্বয়ংক্রিয় রোলব্যাক' },
    },
    {
      type: 'para',
      text: {
        en: 'When you ship software updates across cloud compute fleets, achieving zero downtime requires rigorous deployment orchestration. Production architectures employ three primary strategies: rolling deployments, blue-green environment swaps, and canary traffic shifts. Rolling updates deploy software in small batches, whereas blue-green architectures switch entire mirror environments instantaneously via load balancer rules. Canary releases route a small fraction of live traffic (like 10.00%) to new instances while evaluating live error telemetry. If metrics breach safety limits, automated rollbacks instantly restore baseline instances to safeguard users.',
        bn: 'যখন আপনি ক্লাউড কম্পিউট ফ্লিট জুড়ে সফটওয়্যার আপডেট প্রকাশ করেন, তখন কোনো ডাউনটাইম ছাড়া রিলিজ সম্পন্ন করতে সুসংগঠিত ডিপ্লয়মেন্ট পদ্ধতির প্রয়োজন হয়। প্রোডাকশন ব্যবস্থায় প্রধানত তিনটি কৌশল ব্যবহৃত হয়: রোলিং ডিপ্লয়মেন্ট, ব্লু-গ্রিন পরিবেশ বদল এবং ক্যানারি ট্রাফিক শিফট। রোলিং আপডেটে নির্দিষ্ট ব্যাচে সার্ভার আপডেট হয়, আর ব্লু-গ্রিন পদ্ধতিতে সম্পূর্ণ নতুন ক্লাস্টারে লোড ব্যালেন্সারের মাধ্যমে নিমেষে ট্রাফিক স্থানান্তর করা হয়। ক্যানারি রিলিজের ক্ষেত্রে বাস্তব ট্রাফিকের একটি ক্ষুদ্র অংশ (যেমন ১০.০০%) নতুন কোডে পাঠিয়ে সরাসরি এরর রেট যাচাই করা হয়। কোনো অস্বাভাবিক ত্রুটি দেখা দিলে স্বয়ংক্রিয় রোলব্যাক সিস্টেম মুহূর্তেই আগের সুস্থ সার্ভারে ট্রাফিক ফিরিয়ে নিয়ে গ্রাহকদের রক্ষা করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Canary traffic routing and automated rollback evaluation', bn: 'ক্যানারি ট্রাফিক রাউটিং ও স্বয়ংক্রিয় রোলব্যাক মূল্যায়ন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Canary Compute Release and Automated Rollback diagram">
<rect x="25" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="160" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Canary Fleet Split (10 nodes)</text>

<rect x="40" y="75" width="240" height="35" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="160" y="93" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">9 Baseline Nodes: v1.0.0 (90.00%)</text>
<text x="160" y="105" text-anchor="middle" font-size="7" fill="#1e40af">900 req/s · 22 ms p95 latency</text>

<rect x="40" y="118" width="240" height="35" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="160" y="136" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">1 Canary Node: v2.0.0 (10.00%)</text>
<text x="160" y="148" text-anchor="middle" font-size="7" fill="#166534">100 req/s · 18 ms p95 latency (+4 ms)</text>

<text x="160" y="175" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Telemetry: 2 errors / 500 requests</text>
<text x="160" y="190" text-anchor="middle" font-size="8" fill="#166534">0.40% error rate (threshold: 1.00%)</text>

<rect x="345" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">Automated Promotion Pipeline</text>

<rect x="360" y="75" width="240" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="480" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Stage 1: Canary 10.00% Validated ✓</text>

<rect x="360" y="112" width="240" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="480" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">Stage 2: Fleet Promotion to 100.00%</text>

<rect x="360" y="150" width="240" height="30" rx="4" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
<text x="480" y="170" text-anchor="middle" font-size="8" font-weight="700" fill="#854d0e">Zero downtime across 10 fleet nodes</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Canary achieves 0.40% error rate (safe under 1.00%), promoting across 2 stages</text>
</svg>`,
      caption: {
        en: 'A 10-node fleet splits into 9 baseline nodes (90.00%) and 1 canary node (10.00%). Canary logs 2 errors across 500 requests (0.40% error rate, threshold: 1.00%), cutting latency from 22 ms to 18 ms (+4 ms improvement across 2 stages).',
        bn: '১০টি নোডের বহর ৯টি বেসলাইন নোড (৯০.০০%) এবং ১টি ক্যানারি নোডে (১০.০০%) বিভক্ত হয়। ক্যানারিতে ৫০০ রিকোয়েস্টে ২টি এরর হয় (০.৪০% এরর রেট, সীমা: ১.০০%), যা লেটেন্সি ২২ ms থেকে ১৮ ms এ কমিয়ে আনে (২টি ধাপে +৪ ms উন্নতি)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Canary Deployment',
          def: {
            en: 'A deployment technique where a software update is exposed to a small percentage of live users to verify error rates before full release.',
            bn: 'ডিপ্লয়মেন্ট পদ্ধতি যেখানে নতুন কোডের নির্ভরযোগ্যতা যাচাই করতে প্রথমে ব্যবহারকারীদের একটি ক্ষুদ্র অংশের কাছে আপডেট উন্মুক্ত করা হয়।',
          },
        },
        {
          term: 'Blue-Green Deployment',
          def: {
            en: 'A release strategy utilizing two identical production environments (Blue and Green) where traffic is switched instantaneously via load balancer rules.',
            bn: 'রিলিজ কৌশল যাতে ২টি অবিকল পরিবেশ (ব্লু ও গ্রিন) বজায় থাকে এবং লোড ব্যালেন্সারের মাধ্যমে এক নিমেষে ট্রাফিক স্থানান্তর করা হয়।',
          },
        },
        {
          term: 'Automated Rollback',
          def: {
            en: 'A safety circuit that immediately reverts traffic to the previous known-good deployment when telemetry alarms breach acceptable error thresholds.',
            bn: 'একটি স্বয়ংক্রিয় সুরক্ষা ব্যবস্থা যা এরর রেট বিপদসীমা অতিক্রম করলে সাথে সাথে ট্রাফিককে আগের স্থিতিশীল সংস্করণে ফিরিয়ে নেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminating release outages and safeguarding user trust', bn: 'কেন — রিলিজজনিত ডাউনটাইম রোধ ও গ্রাহক আস্থা সুরক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent catastrophic outages: canary traffic limits bad software bugs to less than 10.00% of incoming users, shielding the remaining 90.00%.', bn: 'ব্যাপক বিপর্যয় রোধ: ক্যানারি ট্রাফিকের মাধ্যমে কোনো বাগ থাকলে তা সর্বোচ্চ ১০.০০% ব্যবহারকারীর মধ্যে সীমাবদ্ধ থাকে এবং বাকি ৯০.০০% ব্যবহারকারী সম্পূর্ণ নিরাপদ থাকে।' },
        { en: 'Sub-second instantaneous rollback: blue-green routing rules switch 100% of customer traffic back to the proven environment in milliseconds.', bn: 'নিমেষেই নিরাপদ প্রত্যাবর্তন: ব্লু-গ্রিন রাউটিংয়ের মাধ্যমে কোনো সমস্যা হলে কয়েক মিলিসেকেন্ডেই শতভাগ ট্রাফিক পূর্বের সুস্থ পরিবেশে ফিরিয়ে নেওয়া যায়।' },
        { en: 'Continuous deployment confidence: automated metric validation enables engineering teams to release production software dozens of times daily.', bn: 'নির্ভয়ে নিয়মিত ডিপ্লয়মেন্ট: স্বয়ংক্রিয় মেট্রিক যাচাইকরণের মাধ্যমে ডেভেলপমেন্ট দল প্রতিদিন ডজন ডজন বার প্রোডাকশনে কোড পাঠাতে পারে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Executing a canary compute release in 4 steps', bn: 'HOW — ৪টি ধাপে ক্যানারি কম্পিউট রিলিজ বাস্তবায়ন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Launch canary instance', bn: '১. ক্যানারি নোড চালু' }, text: { en: 'Deploy 1 instance running the new release alongside 9 baseline nodes.', bn: '৯টি মূল সার্ভারের পাশাপাশি নতুন কোড চালানো ১টি পরীক্ষামূলক সার্ভার চালু করুন।' } },
        { title: { en: '2. Route 10.00% traffic', bn: '২. ১০.০০% ট্রাফিক স্থানান্তর' }, text: { en: 'Configure ALB weighted routing to direct 10.00% of user requests to canary.', bn: 'লোড ব্যালেন্সারে ওজন নির্ধারণ করে মোট ট্রাফিকের ১০.০০% ক্যানারি সার্ভারে পাঠান।' } },
        { title: { en: '3. Audit error telemetry', bn: '৩. এরর টেলিমেট্রি নিরীক্ষণ' }, text: { en: 'Evaluate HTTP 5xx error rate against the 1.00% automated rollback threshold.', bn: 'সার্ভারের এরর রেট ১.০০% সীমা অতিক্রম করছে কিনা স্বয়ংক্রিয়ভাবে পর্যবেক্ষণ করুন।' } },
        { title: { en: '4. Promote across fleet', bn: '৪. সম্পূর্ণ বহরে কার্যকরকরণ' }, text: { en: 'Promote release across all 10 nodes if canary metrics pass validation checks.', bn: 'ক্যানারি পরীক্ষায় উত্তীর্ণ হলে বহরের বাকি সব নোডে নতুন সংস্করণ সম্পন্ন করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'canary_release_telemetry_sim.js',
      code: `// Simulated Canary compute release, error telemetry, and promotion
const baselineNodes = 9;
const canaryNodes = 1;
const totalFleetNodes = baselineNodes + canaryNodes; // 10

const totalTrafficRps = 1000;
const canaryTrafficPct = 10.00;
const baselineTrafficPct = 90.00;

const canaryRequestsSampled = 500;
const canaryErrors = 2;
const canaryErrorRatePct = Math.round((canaryErrors / canaryRequestsSampled) * 10000) / 100; // 0.40%
const rollbackThresholdPct = 1.00;

const baselineP95Ms = 22;
const canaryP95Ms = 18;
const latencyImprovementMs = baselineP95Ms - canaryP95Ms; // 4 ms

console.log("Canary Compute Release and Telemetry Simulation:");
console.log("Fleet split: " + baselineNodes + " baseline nodes (" + baselineTrafficPct.toFixed(2) + "%) and " + canaryNodes + " canary node (" + canaryTrafficPct.toFixed(2) + "%) across " + totalFleetNodes + " nodes");
console.log("Canary audit: " + canaryErrors + " errors across " + canaryRequestsSampled + " requests (" + canaryErrorRatePct.toFixed(2) + "% error rate, threshold: " + rollbackThresholdPct.toFixed(2) + "%)");
console.log("Latency: canary " + canaryP95Ms + " ms vs baseline " + baselineP95Ms + " ms (+" + latencyImprovementMs + " ms improvement across 2 stages)");

// Output:
// Canary Compute Release and Telemetry Simulation:
// Fleet split: 9 baseline nodes (90.00%) and 1 canary node (10.00%) across 10 nodes
// Canary audit: 2 errors across 500 requests (0.40% error rate, threshold: 1.00%)
// Latency: canary 18 ms vs baseline 22 ms (+4 ms improvement across 2 stages)`,
      caption: {
        en: 'A 10-node fleet splits into 9 baseline nodes (90.00%) and 1 canary node (10.00%). Canary logs 2 errors across 500 requests (0.40% error rate, threshold: 1.00%), cutting latency from 22 ms to 18 ms (+4 ms improvement across 2 stages).',
        bn: '১০টি নোডের বহর ৯টি বেসলাইন নোড (৯০.০০%) এবং ১টি ক্যানারি নোডে (১০.০০%) বিভক্ত হয়। ক্যানারিতে ৫০০ রিকোয়েস্টে ২টি এরর হয় (০.৪০% এরর রেট, সীমা: ১.০০%), যা লেটেন্সি ২২ ms থেকে ১৮ ms এ কমিয়ে আনে (২টি ধাপে +৪ ms উন্নতি)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive canary promotion and rollback lab', bn: 'INSIDE — জীবন্ত ক্যানারি প্রমোশন ও রোলব্যাক ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test canary deployment telemetry. Slicing 10.00% traffic to 1 canary node while keeping 90.00% on 9 baseline nodes protects a 10-node fleet. Auditing 500 requests reveals 2 errors, producing a 0.40% error rate well beneath the 1.00% rollback limit, while latency drops from 22 ms to 18 ms (+4 ms gain). Passing these telemetry checks authorizes fleet-wide promotion across 2 stages.',
        bn: 'ক্যানারি ডিপ্লয়মেন্টের টেলিমেট্রি পরীক্ষা করুন। ১০টি নোডের বহরে ৯টি মূল সার্ভারে ৯০.০০% ট্রাফিক রেখে ১টি ক্যানারি সার্ভারে ১০.০০% ট্রাফিক পাঠানো হয়। ৫০০ রিকোয়েস্টে মাত্র ২টি এরর হওয়ায় এরর রেট দাঁড়ায় ০.৪০%, যা ১.০০% এর বিপদসীমার অনেক নিচে এবং লেটেন্সি ২২ ms থেকে কমে ১৮ ms হয় (+৪ ms লাভ)। এই সন্তোষজনক ফলের ভিত্তিতে ২ ধাপে পুরো ফ্লিটে নতুন কোড পৌঁছে দেওয়া হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Canary lab (verify promotion verdict, press Run)', bn: 'ক্যানারি ল্যাব (প্রমোশন ফলাফল দেখুন, Run)' },
      html: '<h3>Canary Fleet Telemetry Evaluator</h3>\n<pre id="out"></pre>\n<p>Compute canary error rates and latency deltas.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const sampled = 500;\nconst errs = 2;\nconst errRate = ((errs / sampled) * 100).toFixed(2);\nconst thresh = 1.00;\nconst passed = errRate <= thresh;\nconsole.log("canary passed: " + passed);\ndocument.getElementById("out").textContent = "Requests: " + sampled + " · Errors: " + errs + " · Rate: " + errRate + "% · Threshold: " + thresh + "% · Decision: " + (passed ? "PROMOTE FLEET ✓" : "ROLLBACK ✗") + " (10 nodes, 2 stages)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Fleet deployment commandments', bn: 'ফলাফল — ফ্লিট ডিপ্লয়মেন্টের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always automate canary rollback: human operators react in minutes, while automated CloudWatch alarms roll back bad deployments in under 15 seconds.', bn: 'সর্বদা স্বয়ংক্রিয় রোলব্যাক রাখুন: মানুষ বুঝতে বুঝতে কয়েক মিনিট লাগলেও স্বয়ংক্রিয় অ্যালার্ম ১৫ সেকেন্ডের মধ্যে ত্রুটিপূর্ণ কোড প্রত্যাহার করতে পারে।' },
        { en: 'Enforce backwards-compatible database schemas: rolling and canary deployments temporarily run two software versions simultaneously; schemas must support both.', bn: 'পূর্বের সংস্করণের সাথে সামঞ্জস্যপূর্ণ ডেটাবেস স্কিমা তৈরি করুন: রোলিং আপডেটের সময় সাময়িকভাবে দুটি কোড একসাথে চলায় ডেটাবেসকে উভয় সংস্করণের উপযোগী হতে হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common release anti-patterns', bn: 'ডিবাগ — রিলিজের পরিচিত ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Deploying destructive database migrations simultaneously with code', bn: 'কোড রিলিজের সাথে ডেটাবেস কলাম মুছে ফেলার মারাত্মক ভুল' },
      text: {
        en: 'Never drop or rename database columns in the same release that deploys the application code. Baseline instances still serving live traffic will immediately crash when attempting to query the missing column. Always decouple database migrations into multi-phase expand/contract releases.',
        bn: 'কখনোই কোড রিলিজের সাথে সাথে ডেটাবেসের পুরনো কলাম মুছে ফেলবেন না। কারণ পুরানো সার্ভারগুলো যখন সেই কলাম খুঁজতে যাবে তখন মারাত্মক ক্র্যাশ ঘটবে। প্রথমে নতুন কলাম যোগ করুন, কোড আপডেট করুন এবং সবশেষে পুরনো কলাম সরান।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Configuring ALB connection draining timeout', bn: 'লোড ব্যালেন্সারে কানেকশন ড্রেইনিং সময় নির্ধারণ' },
      text: {
        en: 'Configure deregistration_delay.timeout_seconds to at least 30 or 60 seconds on ALB target groups. This gives active HTTP requests ample time to finish executing before the hypervisor powers off retired instances.',
        bn: 'টার্গেট গ্রুপে deregistration_delay কমপক্ষে ৩০ বা ৬০ সেকেন্ড রাখুন। এটি চলমান রিকোয়েস্টগুলোকে নির্বিঘ্নে সম্পন্ন হওয়ার সুযোগ দেয় এবং গ্রাহকের কাছে হঠাৎ এরর পাঠানো বন্ধ করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production release architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল রিলিজ ব্যবস্থা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Netflix Spinnaker: automates multi-region canary deployments with automated statistical canary analysis (Kayenta) scoring release health.', bn: 'নেটফ্লিক্স স্পিন্যাকার: কায়েন্তা অ্যালগরিদমের সাহায্যে স্বয়ংক্রিয়ভাবে পরিসংখ্যান বিচার করে বিশ্বজুড়ে ক্যানারি রিলিজ পরিচালনা করে।' },
        { en: 'AWS CodeDeploy: orchestrates blue-green traffic shifting across EC2 fleets and ECS containers with CloudWatch alarm rollbacks.', bn: 'AWS CodeDeploy: ক্লাউডওয়াচ অ্যালার্মের সাথে মিল রেখে সার্ভার ও কন্টেইনার ফ্লিটে ব্লু-গ্রিন ট্রাফিক স্থানান্তর পরিচালনা করে।' },
        { en: 'Argo Rollouts for Kubernetes: manages advanced progressive delivery including canary weight stepping and automated metric analysis.', bn: 'আর্গো রোলআউটস: কুবারনেটিসে ধীরে ধীরে ক্যানারি ট্রাফিক বাড়িয়ে আধুনিক প্রগ্রেসিভ ডেলিভারি নিশ্চিত করে।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'cmp-rel-ex-1',
      kind: 'mcq',
      topic: 'canary-deployment-concept',
      question: {
        en: 'What is the primary architectural purpose of a Canary Deployment in production compute infrastructure?',
        bn: 'প্রোডাকশন কম্পিউট পরিকাঠামোয় ক্যানারি ডিপ্লয়মেন্টের প্রধান কাঠামোগত উদ্দেশ্য কী?',
      },
      options: [
        {
          en: 'To expose a software release to a small percentage of production traffic to validate error rates and latency before committing to a fleet-wide rollout',
          bn: 'সম্পূর্ণ বহরে রিলিজ করার পূর্বে এরর রেট ও লেটেন্সি যাচাই করতে বাস্তব ট্রাফিকের একটি ক্ষুদ্র অংশের কাছে নতুন কোড উন্মুক্ত করা',
        },
        {
          en: 'To test if yellow canary birds can survive inside datacenter server racks',
          bn: 'ডাটা সেন্টার সার্ভার র্যাকের ভেতরে হলুদ ক্যানারি পাখি বাঁচতে পারে কিনা তা পরীক্ষা করা',
        },
        {
          en: 'To permanently double the RAM price on all active virtual machines',
          bn: 'সব সক্রিয় ভার্চুয়াল মেশিনের র্যামের মূল্য স্থায়ীভাবে দ্বিগুণ করা',
        },
        {
          en: 'To force all users to change their account passwords every ten minutes',
          bn: 'প্রতি দশ মিনিটে সব ব্যবহারকারীকে তাদের অ্যাকাউন্টের পাসওয়ার্ড বদলাতে বাধ্য করা',
        },
      ],
      answer: 0,
      hint: { en: 'Canaries test updates on small slices of live traffic.', bn: 'ক্যানারি বাস্তব ট্রাফিকের সামান্য অংশে নতুন কোড পরীক্ষা করে।' },
      explanation: {
        en: 'Canary releases isolate potential software defects to a small fraction of users, preventing widespread outages.',
        bn: 'ক্যানারি রিলিজের মাধ্যমে কোনো ত্রুটি থাকলে তা কেবল সামান্য কিছু ইউজারের মধ্যে সীমাবদ্ধ রেখে পুরো সিস্টেমের বিপর্যয় রোধ করা হয়।',
      },
    },
    {
      id: 'cmp-rel-ex-2',
      kind: 'mcq',
      topic: 'canary-sim-numbers',
      question: {
        en: 'In our code walkthrough, what was the fleet split (nodes and traffic percentages), how many errors were logged across 500 requests, and what was the resulting error rate compared to the rollback threshold across 2 stages?',
        bn: 'আমাদের কোড আলোচনায় ফ্লিট বিভাজন (নোড ও ট্রাফিক শতাংশ) কত ছিল, ৫০০ রিকোয়েস্টে কতটি এরর পাওয়া গিয়েছিল এবং ২টি ধাপে রোলব্যাক থ্রেশহোল্ডের বিপরীতে এরর রেট কত দাঁড়িয়েছিল?',
      },
      options: [
        {
          en: '9 baseline (90.00%) and 1 canary (10.00%) across 10 nodes; 2 errors in 500 requests (0.40% error rate under 1.00% threshold, +4 ms latency gain across 2 stages)',
          bn: '১০টি নোডে ৯টি বেসলাইন (৯০.০০%) ও ১টি ক্যানারি (১০.০০%); ৫০০ রিকোয়েস্টে ২টি এরর মিলে ০.৪০% এরর রেট (১.০০% সীমার নিচে, ২টি ধাপে +৪ ms উন্নতি)',
        },
        {
          en: '5 baseline (50.00%) and 5 canary (50.00%) across 10 nodes; 50 errors in 500 requests for 10.00% error rate (failed 1.00% threshold across 2 stages)',
          bn: '১০টি নোডে ৫টি বেসলাইন (৫০.০০%) ও ৫টি ক্যানারি (৫০.০০%); ৫০০ রিকোয়েস্টে ৫০টি এরর মিলে ১০.০০% এরর রেট (২টি ধাপে ১.০০% সীমায় ব্যর্থ)',
        },
        {
          en: '0 baseline (0.00%) and 0 canary (0.00%) across 0 nodes; 0 errors in 0 requests for 0.00% error rate (0.00% threshold across 2 stages)',
          bn: '০টি নোডে ০টি বেসলাইন (০.০০%) ও ০টি ক্যানারি (০.০০%); ০ রিকোয়েস্টে ০টি এরর মিলে ০.০০% এরর রেট (২টি ধাপে ০.০০% সীমায়)',
        },
        {
          en: '8 baseline (80.00%) and 2 canary (20.00%) across 10 nodes; 20 errors in 500 requests for 4.00% error rate (failed 1.00% threshold across 2 stages)',
          bn: '১০টি নোডে ৮টি বেসলাইন (৮০.০০%) ও ২টি ক্যানারি (২০.০০%); ৫০০ রিকোয়েস্টে ২০টি এরর মিলে ৪.০০% এরর রেট (২টি ধাপে ১.০০% সীমায় ব্যর্থ)',
        },
      ],
      answer: 0,
      hint: { en: '9 baseline (90.00%), 1 canary (10.00%), 2 errors in 500 = 0.40%.', bn: '৯টি বেসলাইন (৯০.০০%), ১টি ক্যানারি (১০.০০%), ৫০০ তে ২টি এরর = ০.৪০%।' },
      explanation: {
        en: 'The simulation recorded a 9/1 node split (90.00%/10.00%), measuring 2 errors across 500 requests for a safe 0.40% error rate across 2 stages.',
        bn: 'সিমুলেশনটিতে ৯/১ নোড ভাগ (৯০.০০%/১০.০০%) এবং ৫০০ রিকোয়েস্টে ২টি এরর মিলে ০.৪০% এরর রেট পরিমাপ করা হয় যা ২ ধাপে নিরাপদ থাকে।',
      },
    },
    {
      id: 'cmp-rel-ex-3',
      kind: 'mcq',
      topic: 'blue-green-rollback-speed',
      question: {
        en: 'Why does Blue-Green Deployment offer faster rollback recovery than traditional in-place rolling deployments?',
        bn: 'প্রচলিত রোলিং আপডেটের তুলনায় ব্লু-গ্রিন ডিপ্লয়মেন্ট কেন দ্রুততম রোলব্যাক নিশ্চিত করে?',
      },
      options: [
        {
          en: 'Because the original known-good environment (Blue) remains fully provisioned and idle; rolling back requires only an instantaneous DNS or load balancer listener rule switch',
          bn: 'কারণ আগের সুস্থ পরিবেশটি (ব্লু) সম্পূর্ণ প্রস্তুত ও সচল থাকে; ফলে সমস্যা হলে কেবল লোড ব্যালেন্সারের নিয়ম পরিবর্তন করে মুহূর্তেই শতভাগ ট্রাফিক ফিরিয়ে আনা যায়',
        },
        {
          en: 'Because Blue-Green deployments run on optical laser beams',
          bn: 'কারণ ব্লু-গ্রিন ডিপ্লয়মেন্ট অপটিক্যাল লেজার রশ্মির সাহায্যে চলে',
        },
        {
          en: 'Because Blue-Green deployments delete all test databases',
          bn: 'কারণ ব্লু-গ্রিন ডিপ্লয়মেন্ট সমস্ত টেস্ট ডেটাবেস মুছে ফেলে',
        },
        {
          en: 'Because rolling deployments require physical hand delivery of code disks',
          bn: 'কারণ রোলিং আপডেটের জন্য হাতে করে কোডের ডিস্ক পৌঁছে দিতে হয়',
        },
      ],
      answer: 0,
      hint: { en: 'The Blue environment is preserved for instant traffic flipping.', bn: 'ব্লু পরিবেশটি প্রস্তুত থাকায় এক পলকেই ট্রাফিক ফিরিয়ে আনা যায়।' },
      explanation: {
        en: 'In blue-green releases, the idle previous environment is kept alive so rollback is achieved instantly by switching balancer routing.',
        bn: 'ব্লু-গ্রিন পদ্ধতিতে আগের পরিবেশটি নষ্ট না করে রেখে দেওয়ায় লোড ব্যালেন্সারের সুইচ ঘুরিয়ে তাৎক্ষণিক রোলব্যাক করা সম্ভব হয়।',
      },
    },
    {
      id: 'cmp-rel-ex-4',
      kind: 'predict',
      topic: 'canary-traffic-percentage-value',
      question: {
        en: 'In our code walkthrough, what exact percentage of production traffic was routed to the initial canary node (e.g. 10.00)?',
        bn: 'আমাদের কোড আলোচনায় প্রাথমিক ক্যানারি নোডে মোট প্রোডাকশন ট্রাফিকের ঠিক কত শতাংশ পাঠানো হয়েছিল (যেমন 10.00)?',
      },
      answer: '10.00',
      accept: ['10.00', '10%', '10.00%', '10'],
      hint: { en: '10.00%', bn: '১০.০০%' },
      explanation: {
        en: 'The canary node received 10.00% of live traffic (100 req/s out of 1000 req/s total).',
        bn: 'ক্যানারি নোডে বাস্তব ট্রাফিকের ১০.০০% (মোট ১০০০ req/s এর মধ্যে ১০০ req/s) পাঠানো হয়েছিল।',
      },
    },
  ],
  quiz: {
    id: 'the-compute-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-rel-q1',
        kind: 'mcq',
        topic: 'expand-contract-database-pattern',
        question: {
          en: 'How should relational database schema changes be designed to ensure zero downtime during rolling and canary fleet deployments?',
          bn: 'রোলিং ও ক্যানারি ফ্লিট ডিপ্লয়মেন্টের সময় ডাউনটাইম এড়াতে রিলেশনাল ডেটাবেস স্কিমা পরিবর্তন কীভাবে ডিজাইন করা উচিত?',
        },
        options: [
          {
            en: 'Through an expand-and-contract pattern: first add new columns with default nullability (supporting both old and new code), then deploy application code, and finally remove deprecated columns in a subsequent release',
            bn: 'এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট প্যাটার্নের মাধ্যমে: প্রথমে নতুন কলাম যোগ করা (যা পুরানো ও নতুন উভয় কোড সমর্থন করে), এরপর অ্যাপ্লিকেশন ডিপ্লয় করা এবং পরবর্তী রিলিজের পর অপ্রয়োজনীয় কলাম মুছে ফেলা',
          },
          {
            en: 'By dropping the production database tables at 3:00 AM on Monday',
            bn: 'সোমবার ভোর ৩টায় প্রোডাকশন ডেটাবেসের সমস্ত টেবিল মুছে ফেলে',
          },
          {
            en: 'By disabling all SQL queries permanently across the company',
            bn: 'কোম্পানি জুড়ে স্থায়ীভাবে সমস্ত এসকিউএল কুয়েরি নিষিদ্ধ করে দিয়ে',
          },
          {
            en: 'By printing out database tables on thermal receipts',
            bn: 'থার্মাল রসিদে ডেটাবেসের টেবিলগুলো প্রিন্ট করে সংরক্ষণ করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: { en: 'Expand first (additive), deploy code, then contract (cleanup).', bn: 'প্রথমে নতুন কলাম যোগ করুন, কোড ডিপ্লয় করুন, পরে পুরনো কলাম সরান।' },
        explanation: {
          en: 'The expand-and-contract migration strategy ensures that concurrent execution of old and new code versions never encounters broken schemas.',
          bn: 'এক্সপ্যান্ড-কন্ট্রাক্ট পদ্ধতিতে সাময়িকভাবে পুরানো ও নতুন কোড একসাথে চললেও কোনো স্কিমা এরর দেখা দেয় না।',
        },
      },
      {
        id: 'cmp-rel-q2',
        kind: 'mcq',
        topic: 'canary-latency-gain-check',
        question: {
          en: 'In our code walkthrough, what was the latency improvement recorded on the v2.0.0 canary instance compared to baseline across 2 stages?',
          bn: 'আমাদের কোড আলোচনায় ২টি ধাপে মূল সার্ভারের তুলনায় v2.0.0 ক্যানারি ইনস্ট্যান্সে কতটুকু লেটেন্সি উন্নতি দেখা গিয়েছিল?',
        },
        options: [
          { en: '+4 ms improvement (18 ms canary p95 vs 22 ms baseline p95 across 2 stages)', bn: '২টি ধাপে +৪ ms উন্নতি (২২ ms মূল p95 এর তুলনায় ১৮ ms ক্যানারি p95)' },
          { en: '+100 ms improvement across 2 stages', bn: '২টি ধাপে +১০০ ms উন্নতি' },
          { en: '+0 ms improvement across 2 stages', bn: '২টি ধাপে +০ ms উন্নতি' },
          { en: '+10 ms improvement across 2 stages', bn: '২টি ধাপে +১০ ms উন্নতি' },
        ],
        answer: 0,
        hint: { en: '22 - 18 = 4 ms improvement.', bn: '২২ - ১৮ = ৪ ms উন্নতি।' },
        explanation: {
          en: 'Canary p95 latency reached 18 ms versus 22 ms for baseline, achieving a 4 ms latency performance gain across 2 stages.',
          bn: 'ক্যানারির p95 লেটেন্সি ১৮ ms এ নেমে আসে যা মূল ২২ ms এর চেয়ে ৪ ms বেশি দ্রুত ছিল (২টি ধাপে)।',
        },
      },
      {
        id: 'cmp-rel-q3',
        kind: 'mcq',
        topic: 'connection-draining-safety',
        question: {
          en: 'What operational safety hazard occurs if deregistration delay (connection draining) is set to 0 seconds during fleet instance replacements?',
          bn: 'ফ্লিট ইনস্ট্যান্স পরিবর্তনের সময় যদি ডি-রেজিস্ট্রেশন ডিলে (কানেকশন ড্রেইনিং) ০ সেকেন্ড রাখা হয়, তবে কোন বিপত্তি ঘটবে?',
        },
        options: [
          {
            en: 'In-flight customer HTTP requests are instantly severed with TCP Reset (RST) errors, causing user-facing transaction failures and broken file uploads',
            bn: 'চলমান গ্রাহক রিকোয়েস্টগুলো TCP Reset দিয়ে সাথে সাথে বিচ্ছিন্ন হয়ে যায়, যার ফলে ব্যবহারকারীরা এরর দেখতে পায় এবং আপলোড বা পেমেন্ট নষ্ট হয়',
          },
          {
            en: 'The cloud provider charges a fee for zero-second timers',
            bn: 'ক্লাউড প্রোভাইডার শূন্য-সেকেন্ডের টাইমারের জন্য জরিমানা চার্জ করে',
          },
          {
            en: 'The server fan blows cold air into the datacenter hallway',
            bn: 'সার্ভারের ফ্যান ডাটা সেন্টারের বারান্দায় ঠান্ডা বাতাস ছড়ায়',
          },
          {
            en: 'The computer monitors in the office turn inverted purple',
            bn: 'অফিসের সব computer মনিটর উল্টো বেগুনি রঙের হয়ে যায়',
          },
        ],
        answer: 0,
        hint: { en: 'Zero draining delay abruptly severs active TCP sockets.', bn: 'শূন্য ড্রেইনিং চলমান টিসিপি সংযোগ হঠাৎ বিচ্ছিন্ন করে দেয়।' },
        explanation: {
          en: 'Connection draining allows existing client connections to conclude cleanly before an instance is terminated by the deployment manager.',
          bn: 'কানেকশন ড্রেইনিং নিশ্চিত করে যেন কোনো সার্ভার বন্ধ করার আগে বিদ্যমান কাজগুলো সফলভাবে শেষ হওয়ার সময় পায়।',
        },
      },
      {
        id: 'cmp-rel-q4',
        kind: 'predict',
        topic: 'canary-bird-miner-metaphor',
        question: {
          en: 'What progressive release strategy takes its name from coal miners using caged birds to detect toxic gas (e.g. Canary)?',
          bn: 'বিষাক্ত গ্যাস শনাক্ত করতে কয়লা খনি শ্রমিকদের খাঁচায় পাখি ব্যবহারের রূপক থেকে কোন আধুনিক রিলিজ কৌশলটির নামকরণ করা হয়েছে (যেমন Canary)?',
        },
        answer: 'Canary',
        accept: ['Canary', 'canary', 'Canary Deployment', 'Canary Release'],
        hint: { en: 'C-a-n-a-r-y', bn: 'C-a-n-a-r-y' },
        explanation: {
          en: 'Canary deployments derive their name from "canary in a coal mine", alerting engineers to defects on a small user cohort.',
          bn: 'ক্যানারি ডিপ্লয়মেন্ট নামটি কয়লা খনির ক্যানারি পাখি থেকে এসেছে, যা সামান্য ট্রাফিকে যেকোনো সফটওয়্যার ত্রুটির তাৎক্ষণিক সংকেত দেয়।',
        },
      },
    ],
  },
};
