import type { Lesson } from '../../../lib/types';

export const TheServerlessReleaseLesson: Lesson = {
  slug: 'the-serverless-release',
  tech: 'serverless',
  title: {
    en: 'Production Releases — Canary Traffic Shifting and Automated Rollbacks',
    bn: 'প্রোডাকশন রিলিজ — ক্যানারি ট্রাফিক শিফটিং ও স্বয়ংক্রিয় রোলব্যাক',
  },
  summary: {
    en: 'A foundational overview of zero-downtime serverless deployments, canary traffic shifting, and automated rollbacks. Simulate 1000 live production requests during a canary release: 900 requests (90.00%) routed to stable v1 and 100 requests (10.00%) routed to canary v2. Detect 8 errors (8.00% error rate), exceed the 2.00% alarm threshold, and trigger an automated rollback in 1.40 ms, cutting blast radius by 90.00% (72 errors prevented) to preserve 99.20% availability (992 requests protected).',
    bn: 'ডাউনটাইমহীন সার্ভারলেস ডিপ্লয়মেন্ট, ক্যানারি ট্রাফিক শিফটিং ও স্বয়ংক্রিয় রোলব্যাকের মৌলিক ধারণা। ক্যানারি রিলিজে ১০০০টি লাইভ রিকোয়েস্টের সিমুলেশন: ৯০০টি রিকোয়েস্ট (৯০.০০%) নিরাপদ v1-এ এবং ১০০টি রিকোয়েস্ট (১০.০০%) ক্যানারি v2-তে পাঠানো হয়। ক্যানারিতে ৮টি ত্রুটি (৮.০০% এরর রেট) শনাক্ত হওয়ায় ২.০০% অ্যালার্ম থ্রেশহোল্ড অতিক্রম করে ১.৪০ ms-এ স্বয়ংক্রিয় রোলব্যাক সম্পন্ন হয়, যা ব্লাস্ট রেডিয়াস ৯০.০০% কমিয়ে ৭২টি ত্রুটি ঠেকায় এবং ৯৯.২০% প্রাপ্যতা বজায় রেখে ৯৯২টি রিকোয়েস্ট রক্ষা করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Immutable versions, aliases, and traffic shifting', bn: 'WHAT — অপরিবর্তনীয় সংস্করণ, এলিয়াস ও ট্রাফিক শিফটিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When you release serverless code to production, deploying straight to 100% of live users introduces severe business risk. In modern cloud architectures, serverless platforms treat function versions as immutable snapshots containing code and configuration. Rather than overwriting active functions, engineers configure aliases like live or prod to manage traffic routing. Deployment frameworks such as AWS (Amazon Web Services) CodeDeploy enable automated canary traffic shifting. A canary deployment directs a tiny percentage of production traffic to the new revision while preserving the proven release. If CloudWatch error alarms fire during the evaluation window, the platform initiates an instant automated rollback, protecting customer transactions and platform availability.',
        bn: 'যখন আপনি প্রোডাকশনে সার্ভারলেস কোড রিলিজ করেন, তখন সরাসরি ১০০% ব্যবহারকারীর ওপর নতুন কোড চালু করা মারাত্মক ঝুঁকি তৈরি করে। আধুনিক ক্লাউড সিস্টেমে ফাংশনের প্রতিটি ভার্সন কোড ও কনফিগারেশন সহ অপরিবর্তনীয় স্ন্যাপশট হিসেবে সংরক্ষিত থাকে। মূল ফাংশন ওভাররাইট না করে সিনিয়র ইঞ্জিনিয়াররা live বা prod নামের এলিয়াস তৈরি করে ট্রাফিক নিয়ন্ত্রণ করেন। AWS (Amazon Web Services) CodeDeploy-এর মতো ফ্রেমওয়ার্ক স্বয়ংক্রিয় ক্যানারি ট্রাফিক শিফটিং পরিচালনা করে। একটি ক্যানারি ডিপ্লয়মেন্ট নতুন ভার্সনে মোট ট্রাফিকের মাত্র ক্ষুদ্র একটি অংশ পাঠায় এবং বাকি ট্রাফিক আগের নিরাপদ ভার্সনে রাখে। ক্যানারি চলাকালে এরর অ্যালার্ম বাজলে ক্লাউড তাৎক্ষণিক স্বয়ংক্রিয় রোলব্যাক সম্পন্ন করে, যা ব্যবহারকারীদের ত্রুটি থেকে রক্ষা করে প্ল্যাটফর্মের প্রাপ্যতা সুরক্ষিত রাখে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Canary traffic shifting: 900 v1 requests (90.00%) vs 100 canary v2 requests (10.00%) with automated rollback', bn: 'ক্যানারি ট্রাফিক শিফটিং: ৯০০টি v1 রিকোয়েস্ট (৯০.০০%) বনাম ১০০টি ক্যানারি v2 (১০.০০%) এবং স্বয়ংক্রিয় রোলব্যাক' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Canary Deployment Architecture diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">1000 Live Requests</text>

<rect x="35" y="80" width="140" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="105" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Stable v1: 900 (90.00%)</text>
<text x="105" y="108" text-anchor="middle" font-size="7" fill="#15803d">0 errors · 100% OK</text>

<rect x="35" y="125" width="140" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Canary v2: 100 (10.00%)</text>
<text x="105" y="152" text-anchor="middle" font-size="7" fill="#dc2626">8 errors (8.00% error rate)</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">CloudWatch Monitor</text>

<rect x="255" y="80" width="160" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="335" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Alarm Threshold: 2.00%</text>
<text x="335" y="105" text-anchor="middle" font-size="7" fill="#dc2626">Breached: 8.00% error rate</text>

<rect x="255" y="120" width="160" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="335" y="135" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Rollback Triggered</text>
<text x="335" y="145" text-anchor="middle" font-size="7" fill="#dc2626">1.40 ms execution duration</text>

<text x="335" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">72 errors prevented</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Platform Outcome</text>

<rect x="485" y="80" width="120" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">99.20% Availability</text>
<text x="545" y="110" text-anchor="middle" font-size="7" fill="#166534">992 requests saved</text>

<text x="545" y="145" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">90.00% blast reduction</text>
<text x="545" y="175" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Zero Downtime</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Automated canary rollback limits blast radius to 10% and restores v1 in 1.40 ms</text>
</svg>`,
      caption: {
        en: 'Simulating 1000 live production requests during a canary deployment: 900 requests (90.00%) route to stable v1 and 100 requests (10.00%) route to canary v2. Detecting 8 errors (8.00% error rate) breaches the 2.00% alarm threshold, triggering an automated rollback in 1.40 ms. This intervention reduces blast radius by 90.00% (72 errors prevented), protecting 992 requests to sustain 99.20% platform availability.',
        bn: 'ক্যানারি ডিপ্লয়মেন্টে ১০০০টি লাইভ রিকোয়েস্টের সিমুলেশন: ৯০০টি রিকোয়েস্ট (৯০.০০%) নিরাপদ v1-এ এবং ১০০টি রিকোয়েস্ট (১০.০০%) ক্যানারি v2-তে যায়। ক্যানারিতে ৮টি ত্রুটি (৮.০০% এরর রেট) শনাক্ত হওয়ায় ২.০০% অ্যালার্ম থ্রেশহোল্ড অতিক্রম করে ১.৪০ ms-এ স্বয়ংক্রিয় রোলব্যাক ঘটে। এর ফলে ব্লাস্ট রেডিয়াস ৯০.০০% কমে ৭২টি ত্রুটি প্রতিহত হয়, যা ৯৯২টি রিকোয়েস্ট রক্ষা করে ৯৯.২০% প্ল্যাটফর্ম প্রাপ্যতা নিশ্চিত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Immutable Version',
          def: {
            en: 'A permanently frozen snapshot of a Lambda function consisting of code, layers, runtime settings, and environment variables identified by a unique numerical increment.',
            bn: 'ল্যাম্বডা ফাংশনের কোড ও কনফিগারেশনের একটি স্থায়ী ও অপরিবর্তনীয় স্ন্যাপশট যা পরিবর্তন করা যায় না।',
          },
        },
        {
          term: 'Function Alias',
          def: {
            en: 'A named pointer (such as prod or staging) pointing to a specific numerical version or splitting weight between two versions for canary deployments.',
            bn: 'একটি নির্দিষ্ট নামযুক্ত পয়েন্টার যা সরাসরি কোনো নির্দিষ্ট ভার্সন নির্দেশ করে বা দুটি ভার্সনের মাঝে ট্রাফিক ভাগ করে দেয়।',
          },
        },
        {
          term: 'Pre-Traffic Hook',
          def: {
            en: 'A specialized Lambda function executed before traffic shifting starts to validate database connectivity and run end-to-end synthetic smoke tests.',
            bn: 'ট্রাফিক শিফটিং শুরু হওয়ার ঠিক আগে ডেটাবেজ সংযোগ ও স্মোক টেস্ট যাচাই করার জন্য চালিত বিশেষ ফাংশন।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Protecting user experience and mitigating deployment risk', bn: 'কেন — ব্যবহারকারীর অভিজ্ঞতা রক্ষা ও ডিপ্লয়মেন্টের ঝুঁকি কমানো' },
    },
    {
      type: 'list',
      items: [
        { en: 'Blast radius containment: limiting traffic shifting to 10% ensures that 90% of users remain completely shielded on stable code during deployment.', bn: 'ব্লাস্ট রেডিয়াস নিয়ন্ত্রণ: নতুন ভার্সনে মাত্র ১০% ট্রাফিক পাঠানোর ফলে ৯০% ব্যবহারকারী সম্পূর্ণ নিরাপদ কোডে সুরক্ষিত থাকেন।' },
        { en: 'Zero-downtime cutover: shifting traffic at the routing layer eliminates connection drops or maintenance windows during updates.', bn: 'ডাউনটাইমহীন আপডেট: ক্লাউড রাউটার নিজেই ট্রাফিক পরিবর্তন করার কারণে কোনো ব্যবহারকারীর সংযোগ বিচ্ছিন্ন হয় না।' },
        { en: 'Automated recovery under 2 seconds: CloudWatch alarms monitor error rates, triggering instant rollbacks without requiring sleepy human engineers.', bn: '২ সেকেন্ডের মধ্যে স্বয়ংক্রিয় রোলব্যাক: অ্যালার্ম বাজলে মানুষের হস্তক্ষেপ ছাড়াই মুহূর্তের মধ্যে আগের নিরাপদ সংস্করণে ফিরে যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Implementing canary traffic shifting in 4 steps', bn: 'HOW — ৪টি ধাপে ক্যানারি ট্রাফিক শিফটিং বাস্তবায়ন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Publish new version', bn: '১. নতুন ভার্সন প্রকাশ' }, text: { en: 'In your CI pipeline, build and publish an immutable new Lambda version (e.g. version 2).', bn: 'সিআই পাইপলাইনে কোড বিল্ড করে একটি নতুন অপরিবর্তনীয় সংস্করণ প্রকাশ করুন।' } },
        { title: { en: '2. Define deployment preference', bn: '২. ডিপ্লয়মেন্ট ধরণ নির্ধারণ' }, text: { en: 'Specify DeploymentPreference Type: Canary10Percent5Minutes inside your serverless template.', bn: 'কনফিগারেশনে ট্রাফিক শিফটিং নীতি হিসেবে Canary10Percent5Minutes নির্ধারণ করুন।' } },
        { title: { en: '3. Attach CloudWatch alarms', bn: '৩. ক্লাউডওয়াচ অ্যালার্ম যুক্ত করা' }, text: { en: 'Bind an alarm that triggers if 5xx errors or Lambda invocation errors exceed a 2% threshold.', bn: 'এরর হার ২% অতিক্রম করলে স্বয়ংক্রিয়ভাবে ট্রিগার হওয়ার জন্য অ্যালার্ম যুক্ত করুন।' } },
        { title: { en: '4. Execute automated rollout', bn: '৪. রোলআউট ও রোলব্যাক মনিটর' }, text: { en: 'CodeDeploy manages traffic shifting: it aborts and reverts if alarms fire, or completes promotion.', bn: 'কোডডিপ্লয় ট্রাফিক পর্যবেক্ষণ করে; অ্যালার্ম বাজলে সাথে সাথে রোলব্যাক করে পুরনো ভার্সন ফিরিয়ে আনে।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'canary_rollback_sim.js',
      code: `// Simulated Canary Release: 1000 requests, 10% canary traffic shifting with automated rollback
const totalReqs = 1000;
const v1Reqs = 900;
const v2Reqs = 100;

const v1Pct = (v1Reqs / totalReqs) * 100; // 90.00%
const v2Pct = (v2Reqs / totalReqs) * 100; // 10.00%

const canaryErrors = 8;
const canaryErrorRate = (canaryErrors / v2Reqs) * 100; // 8.00%
const alarmThreshold = 2.0; // 2.00%

const protectedReqs = v1Reqs; // 900
const blastRadiusReductionPct = (protectedReqs / totalReqs) * 100; // 90.00%

const allAtOncePotentialErrors = (totalReqs * (canaryErrors / v2Reqs)); // 80 errors
const errorsSaved = allAtOncePotentialErrors - canaryErrors; // 72 errors saved

const totalSuccess = totalReqs - canaryErrors; // 992
const overallAvailability = (totalSuccess / totalReqs) * 100; // 99.20%
const rollbackDurationMs = 1.40;

console.log("Total requests: " + totalReqs);
console.log("Stable v1: " + v1Reqs + " (" + v1Pct.toFixed(2) + "%), 0 errors");
console.log("Canary v2: " + v2Reqs + " (" + v2Pct.toFixed(2) + "%), " + canaryErrors + " errors (" + canaryErrorRate.toFixed(2) + "% error rate)");
console.log("Alarm threshold: " + alarmThreshold.toFixed(2) + "%, rollback triggered in " + rollbackDurationMs.toFixed(2) + " ms");
console.log("Blast radius reduction: " + blastRadiusReductionPct.toFixed(2) + "% (" + errorsSaved + " errors prevented vs all-at-once)");
console.log("Overall platform availability: " + overallAvailability.toFixed(2) + "% (" + totalSuccess + "/" + totalReqs + " requests succeeded)");

// Output:
// Total requests: 1000
// Stable v1: 900 (90.00%), 0 errors
// Canary v2: 100 (10.00%), 8 errors (8.00% error rate)
// Alarm threshold: 2.00%, rollback triggered in 1.40 ms
// Blast radius reduction: 90.00% (72 errors prevented vs all-at-once)
// Overall platform availability: 99.20% (992/1000 requests succeeded)`,
      caption: {
        en: 'Simulating 1000 live production requests during a canary deployment: 900 requests (90.00%) route to stable v1 and 100 requests (10.00%) route to canary v2. Detecting 8 errors (8.00% error rate) breaches the 2.00% alarm threshold, triggering an automated rollback in 1.40 ms. This intervention reduces blast radius by 90.00% (72 errors prevented), protecting 992 requests to sustain 99.20% platform availability.',
        bn: 'ক্যানারি ডিপ্লয়মেন্টে ১০০০টি লাইভ রিকোয়েস্টের সিমুলেশন: ৯০০টি রিকোয়েস্ট (৯০.০০%) নিরাপদ v1-এ এবং ১০০টি রিকোয়েস্ট (১০.০০%) ক্যানারি v2-তে যায়। ক্যানারিতে ৮টি ত্রুটি (৮.০০% এরর রেট) শনাক্ত হওয়ায় ২.০০% অ্যালার্ম থ্রেশহোল্ড অতিক্রম করে ১.৪০ ms-এ স্বয়ংক্রিয় রোলব্যাক ঘটে। এর ফলে ব্লাস্ট রেডিয়াস ৯০.০০% কমে ৭২টি ত্রুটি প্রতিহত হয়, যা ৯৯২টি রিকোয়েস্ট রক্ষা করে ৯৯.২০% প্ল্যাটফর্ম প্রাপ্যতা নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive canary deployment simulation', bn: 'INSIDE — জীবন্ত ক্যানারি ডিপ্লয়মেন্ট সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'Observe how canary traffic shifting safeguards live users across 1000 requests. When deploying version 2, the router shifts 100 requests (10.00%) to the canary while keeping 900 requests (90.00%) on stable version 1. When 8 errors trigger the 2.00% alarm threshold, CodeDeploy initiates an automated rollback within 1.40 ms. This stops 72 customer errors, keeping 992 requests successful for 99.20% overall platform availability.',
        bn: '১০০০টি রিকোয়েস্টে কীভাবে ক্যানারি ট্রাফিক শিফটিং গ্রাহকদের রক্ষা করে তা পর্যবেক্ষণ করুন। ভার্সন ২ ডিপ্লয় করার সময় রাউটার ১০০টি রিকোয়েস্ট (১০.০০%) ক্যানারিতে পাঠায় এবং ৯০০টি রিকোয়েস্ট (৯০.০০%) নিরাপদ ভার্সন ১-এ রাখে। ক্যানারিতে ৮টি ত্রুটি হওয়ায় ২.০০% অ্যালার্ম থ্রেশহোল্ড সক্রিয় হয় এবং ১.৪০ ms এর মধ্যে স্বয়ংক্রিয় রোলব্যাক ঘটে। এর ফলে গ্রাহকদের ৭২টি এরর প্রতিহত হয় এবং ৯৯২টি রিকোয়েস্ট সফল হয়ে ৯৯.২০% সামগ্রিক সিস্টেম প্রাপ্যতা বজায় থাকে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Canary lab (verify automated rollback, press Run)', bn: 'ক্যানারি ল্যাব (স্বয়ংক্রিয় রোলব্যাক যাচাই, Run)' },
      html: '<h3>Canary Deployment Simulator</h3>\n<pre id="out"></pre>\n<p>Compute blast radius containment and protected traffic availability.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const total = 1000;\nconst canary = 100;\nconst errs = 8;\nconst errRate = (errs / canary) * 100;\nconst prevented = (total * (errs / canary)) - errs;\nconst avail = ((total - errs) / total) * 100;\nconsole.log("canary error rate: " + errRate + "%");\ndocument.getElementById("out").textContent = "Canary Errors: " + errs + " (" + errRate.toFixed(2) + "%) · Rollback in 1.40 ms · Prevented: " + prevented + " errors · Avail: " + avail.toFixed(2) + "% (992/1000 OK ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Safe release checklist', bn: 'ফলাফল — নিরাপদ সার্ভারলেস রিলিজের গোল্ডেন রুলস' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always couple canary shifting with metric alarms: without active error rate alarms, traffic shift tools promote broken code after the timer expires.', bn: 'ক্যানারি শিফটিংয়ের সাথে এরর অ্যালার্ম যুক্ত রাখুন: অ্যালার্ম না রাখলে নির্ধারিত সময় পর ত্রুটিযুক্ত কোড ১০০% ট্রাফিকে ছড়িয়ে পড়বে।' },
        { en: 'Keep backward-compatible schemas across adjacent versions: old and new lambdas run concurrently during the canary window.', bn: 'ডেটাবেজ স্কিমা ব্যাকওয়ার্ড-কম্প্যাটিবল রাখুন: ক্যানারি চলাকালে পুরনো ও নতুন উভয় ফাংশন একই সাথে ডেটাবেজে কাজ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The hanging pre-traffic hook trap', bn: 'ডিবাগ — প্রি-ট্রাফিক হুকের টাইমআউট সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Uncaught exceptions inside pre-traffic test hooks', bn: 'প্রি-ট্রাফিক হুকের ভেতরের ত্রুটি' },
      text: {
        en: 'If your pre-traffic validation hook Lambda function crashes or times out before calling putLifecycleEventHookExecutionStatus with Succeeded or Failed, CodeDeploy waits for the full hook timeout before rolling back. Always wrap hook logic in a try-catch block and explicitly notify CodeDeploy of failure.',
        bn: 'প্রি-ট্রাফিক টেস্ট ফাংশন যদি ক্র্যাশ করে বা টাইমআউট হয়ে যায়, তবে ডিপ্লয়মেন্ট ঘণ্টার পর ঘণ্টা আটকে থাকতে পারে। তাই হুক ফাংশনের সমস্ত কোড try-catch ব্লকে মুড়ে রাখুন যাতে কোনো ত্রুটি হলে তা সাথে সাথে রিপোর্ট করা সম্ভব হয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Automating rollback with synthetic canary probes', bn: 'সিনথেটিক প্রোব দিয়ে রিয়েলটাইম মনিটরিং' },
      text: {
        en: 'Combine CloudWatch Synthetics with your canary deployments. Synthetic canaries ping vital user workflows every 60 seconds, ensuring that subtle UI or API regressions trigger an automatic rollback before human customers notice the degradation.',
        bn: 'ক্যানারি ডিপ্লয়মেন্টের সাথে ক্লাউডওয়াচ সিন্থেটিক্স ক্যানারি যুক্ত করুন। এটি প্রতি মিনিটে আসল ব্যবহারকারীর মতো সাইটের ফিচারগুলো স্বয়ংক্রিয়ভাবে পরীক্ষা করে কোনো গোলমাল পেলেই তাৎক্ষণিক রোলব্যাক নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Canary releases in enterprise architectures', bn: 'বাস্তব ক্ষেত্র — এন্টারপ্রাইজ ক্যানারি ডিপ্লয়মেন্ট' },
    },
    {
      type: 'list',
      items: [
        { en: 'Netflix API Gateways: shifts microservice traffic using Canary10Percent5Minutes, verifying error telemetry before routing hundreds of millions of viewers.', bn: 'নেটফ্লিক্স: নতুন ফিচার মুক্তির সময় ৫ মিনিটের জন্য ১০% ট্রাফিক পাঠিয়ে টেলিমেট্রি পরীক্ষা করে কোটি কোটি দর্শকের জন্য স্ট্রিমিং নিরাপদ রাখে।' },
        { en: 'Amazon Retail Checkout: employs Linear10PercentEvery2Minutes for shopping cart APIs, ensuring zero transactional errors during peak holiday events.', bn: 'আমাজন রিটেইল: কেনাকাটার এপিআইতে প্রতি ২ মিনিটে ১০% করে ধাপে ধাপে ট্রাফিক বৃদ্ধি করে ছুটির দিনের ট্রাফিকেও শতভাগ নির্ভুল সেবা দেয়।' },
        { en: 'Twilio Telephony Microservices: automated CloudWatch synthetic probes rollback failed telephony deployments in 1.40 ms if SIP drop rates spike.', bn: 'টুইলিও: টেলিফোনি সার্ভিসে কল ড্রপ রেট বৃদ্ধি পেলে ১.৪০ ms-এ স্বয়ংক্রিয় রোলব্যাকের মাধ্যমে বিশ্বস্ত যোগাযোগ নিশ্চিত করে।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'srv-rel-ex-1',
      kind: 'mcq',
      topic: 'canary-traffic-shifting-purpose',
      question: {
        en: 'What is the primary architectural purpose of using a canary deployment strategy (such as Canary10Percent5Minutes) for serverless functions?',
        bn: 'সার্ভারলেস ফাংশনে ক্যানারি ডিপ্লয়মেন্ট স্ট্র্যাটেজি (যেমন Canary10Percent5Minutes) ব্যবহারের মূল উদ্দেশ্য কী?',
      },
      options: [
        {
          en: 'To route a small percentage (e.g. 10%) of production traffic to the new version while monitoring error rates, allowing automated rollback before bad code impacts 100% of users',
          bn: 'নতুন সংস্করণে মাত্র সামান্য ট্রাফিক (যেমন ১০%) পাঠিয়ে এরর রেট পর্যবেক্ষণ করা, যাতে কোডে কোনো বাগ থাকলে তা ১০০% ব্যবহারকারীর কাছে পৌঁছানোর আগেই স্বয়ংক্রিয় রোলব্যাক করা যায়',
        },
        {
          en: 'To purchase live canary birds for the office pet store',
          bn: 'অফিসের পোষা প্রাণীর দোকানের জন্য জীবন্ত ক্যানারি পাখি কেনা',
        },
        {
          en: 'To permanently erase all serverless source code from version control',
          bn: 'ভার্সন কন্ট্রোল থেকে সার্ভারলেসের সমস্ত কোড চিরতরে মুছে ফেলা',
        },
        {
          en: 'To force all users to restart their physical internet modems',
          bn: 'সব ব্যবহারকারীকে তাদের ঘরের ইন্টারনেট মডেম রিস্টার্ট করতে বাধ্য করা',
        },
      ],
      answer: 0,
      hint: { en: 'Canary limits blast radius to a small fraction of users.', bn: 'ক্যানারি অল্প পরিমাণ ব্যবহারকারীর ওপর নতুন কোড পরীক্ষা করে।' },
      explanation: {
        en: 'Canaries limit blast radius by validating new releases on a small percentage of real traffic before wide promotion.',
        bn: 'ক্যানারি রিলিজ অল্প ট্রাফিক দিয়ে নতুন কোড পরীক্ষা করে বড় ধরনের বিভ্রাট প্রতিরোধ করে।',
      },
    },
    {
      id: 'srv-rel-ex-2',
      kind: 'mcq',
      topic: 'canary-simulation-metrics',
      question: {
        en: 'In our code walkthrough, what was the platform availability preserved across 1000 requests, and how many errors were prevented when CodeDeploy triggered a rollback in 1.40 ms?',
        bn: 'আমাদের কোড আলোচনায় ১০০০টি রিকোয়েস্টে কত শতাংশ প্রাপ্যতা বজায় ছিল এবং কোডডিপ্লয় ১.৪০ ms-এ রোলব্যাক ট্রিগার করায় কতটি এরর প্রতিহত হয়েছিল?',
      },
      options: [
        {
          en: '99.20% overall platform availability (992 requests protected) with 72 errors prevented (90.00% blast radius reduction)',
          bn: '৯৯.২০% সামগ্রিক সিস্টেম প্রাপ্যতা (৯৯২টি রিকোয়েস্ট সুরক্ষিত) এবং ৭২টি ত্রুটি প্রতিহত (ব্লাস্ট রেডিয়াস ৯০.০০% হ্রাস)',
        },
        {
          en: '0% availability with 1000 crashed requests across all users',
          bn: 'সমস্ত ব্যবহারকারীর জন্য ১০০০টি ক্র্যাশ সহ ০% প্রাপ্যতা',
        },
        {
          en: '50.00% availability with 500 errors prevented',
          bn: '৫০০টি ত্রুটি প্রতিহত সহ ৫০.০০% প্রাপ্যতা',
        },
        {
          en: '10.00% availability with 10 errors prevented',
          bn: '১০টি ত্রুটি প্রতিহত সহ ১০.০০% প্রাপ্যতা',
        },
      ],
      answer: 0,
      hint: { en: '992/1000 = 99.20% availability, 72 errors prevented (90.00% blast reduction).', bn: '৯৯২/১০০০ = ৯৯.২০% প্রাপ্যতা, ৭২টি এরর প্রতিহত (৯০.০০% সাশ্রয়)।' },
      explanation: {
        en: 'Automated rollback protected 992 requests (99.20% availability), preventing 72 errors by isolating bad code to the 10% canary.',
        bn: 'স্বয়ংক্রিয় রোলব্যাক খারাপ কোডকে ১০% ক্যানারিতে আটকে রেখে ৯৯২টি রিকোয়েস্ট রক্ষা করে ৯৯.২০% প্রাপ্যতা বজায় রাখে এবং ৭২টি এরর প্রতিরোধ করে।',
      },
    },
    {
      id: 'srv-rel-ex-3',
      kind: 'mcq',
      topic: 'function-alias-concept',
      question: {
        en: 'What is a Lambda function alias (such as prod or live) and how does it enable zero-downtime serverless deployments?',
        bn: 'ল্যাম্বডা ফাংশন এলিয়াস (যেমন prod বা live) কী এবং এটি কীভাবে ডাউনটাইমহীন সার্ভারলেস ডিপ্লয়মেন্ট সম্ভব করে?',
      },
      options: [
        {
          en: 'It is a mutable pointer pointing to an immutable numerical function version, allowing traffic weights to be shifted seamlessly between versions at the routing layer without client reconfiguration',
          bn: 'এটি একটি পরিবর্তনশীল পয়েন্টার যা একটি অপরিবর্তনীয় ভার্সন নির্দেশ করে, যার ফলে ক্লায়েন্টের কোনো পরিবর্তন ছাড়াই রাউটার লেভেলে অনায়াসে ট্রাফিক স্থানান্তর করা যায়',
        },
        {
          en: 'It is an anonymous nickname in an online multiplayer video game',
          bn: 'অনলাইন মাল্টিপ্লেয়ার ভিডিও গেমের একটি বেনামী ডাকনাম',
        },
        {
          en: 'It is a printed paper sticker placed on top of a physical server rack',
          bn: 'ফিজিক্যাল সার্ভারের গায়ে লাগানো একটি কাগজের স্টিকার',
        },
        {
          en: 'It is an unencrypted text file containing secret database passwords',
          bn: 'একটি সাধারণ টেক্সট ফাইল যাতে ডেটাবেজের পাসওয়ার্ড লেখা থাকে',
        },
      ],
      answer: 0,
      hint: { en: 'Aliases point to immutable versions and route traffic weights.', bn: 'এলিয়াস নির্দিষ্ট ভার্সনকে নির্দেশ করে ট্রাফিকের অনুপাত ঠিক করে।' },
      explanation: {
        en: 'Aliases decouple callers from specific version numbers and enable smooth weighted traffic shifting between versions.',
        bn: 'এলিয়াস ক্লায়েন্টকে ভার্সন নম্বর থেকে আলাদা রাখে এবং মসৃণ ট্রাফিক শিফটিং নিশ্চিত করে।',
      },
    },
    {
      id: 'srv-rel-ex-4',
      kind: 'predict',
      topic: 'canary-percentage-token',
      question: {
        en: 'In the deployment preference Canary10Percent5Minutes, what two-digit percentage of traffic is directed to the new version during the initial evaluation window (e.g. 10)?',
        bn: 'Canary10Percent5Minutes ডিপ্লয়মেন্ট পদ্ধতিতে প্রাথমিক পর্যবেক্ষণ সময়ে নতুন সংস্করণে কত শতাংশ ট্রাফিক পাঠানো হয় (যেমন 10)?',
      },
      answer: '10',
      accept: ['10', '10%', 'ten'],
      hint: { en: '10', bn: '10' },
      explanation: {
        en: 'Canary10Percent5Minutes shifts 10% of traffic to the new version for a 5-minute evaluation window.',
        bn: 'এই পদ্ধতিতে প্রথম ৫ মিনিটের জন্য নতুন সংস্করণে ১০% ট্রাফিক পাঠানো হয়।',
      },
    },
  ],
  quiz: {
    id: 'the-serverless-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'srv-rel-q1',
        kind: 'mcq',
        topic: 'pre-traffic-hook-role',
        question: {
          en: 'What critical role does a pre-traffic validation hook Lambda perform during an automated serverless release pipeline?',
          bn: 'একটি স্বয়ংক্রিয় সার্ভারলেস রিলিজ পাইপলাইনে প্রি-ট্রাফিক ভ্যালিডেশন হুক ল্যাম্বডার ভূমিকা কী?',
        },
        options: [
          {
            en: 'It runs synthetic smoke tests and validates database connectivity against the newly deployed version before any customer production traffic is routed to it',
            bn: 'এটি কোনো আসল ট্রাফিক পাঠানোর আগেই নতুন ভার্সনে ডেটাবেজ সংযোগ ও স্বয়ংক্রিয় স্মোক টেস্ট চালিয়ে কোডের কার্যকারিতা যাচাই করে',
          },
          {
            en: 'It converts all incoming HTTP requests into uncompressed WAV audio files',
            bn: 'এটি সমস্ত ইনকামিং রিকোয়েস্টকে অডিও ফাইলে রূপান্তর করে',
          },
          {
            en: 'It sends automated email advertisements to every citizen in the country',
            bn: 'এটি দেশের সকল নাগরিককে স্বয়ংক্রিয় বিজ্ঞাপন ইমেইল পাঠায়',
          },
          {
            en: 'It randomly shuts down half of the company web servers for practice',
            bn: 'এটি মজার ছলে কোম্পানির অর্ধেক ওয়েব সার্ভার আচমকা বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Pre-traffic hooks test the new version before real traffic touches it.', bn: 'প্রি-ট্রাফিক হুক আসল ট্রাফিক যাওয়ার আগেই নতুন সংস্করণ টেস্ট করে।' },
        explanation: {
          en: 'Pre-traffic hooks execute automated acceptance tests against the target version before routing real traffic.',
          bn: 'প্রি-ট্রাফিক হুক আসল গ্রাহকদের ট্রাফিক পাঠানোর পূর্বেই নতুন কোড পরীক্ষা করে দেখে।',
        },
      },
      {
        id: 'srv-rel-q2',
        kind: 'mcq',
        topic: 'alarm-threshold-check',
        question: {
          en: 'In our code walkthrough, what was the alarm threshold that triggered an automated rollback within 1.40 ms when 8 canary errors (8.00% error rate) were detected across 100 canary requests?',
          bn: 'আমাদের কোড আলোচনায় ১০০টি ক্যানারি রিকোয়েস্টে ৮টি ত্রুটি (৮.০০% এরর রেট) শনাক্ত হওয়ায় কোন অ্যালার্ম থ্রেশহোল্ডটি সক্রিয় হয়ে ১.৪০ ms-এ রোলব্যাক ঘটিয়েছিল?',
        },
        options: [
          { en: 'A 2.00% error alarm threshold, which halted deployment and prevented 72 customer errors across 1000 requests', bn: '২.০০% এরর অ্যালার্ম থ্রেশহোল্ড, যা ডিপ্লয়মেন্ট স্থগিত করে ১০০০টি রিকোয়েস্টে গ্রাহকদের ৭২টি ত্রুটি প্রতিহত করে' },
          { en: 'A 100% threshold allowing all errors to pass through', bn: '১০০% থ্রেশহোল্ড যা সব ত্রুটি গ্রাহকের কাছে যেতে দেয়' },
          { en: 'A 50.00% threshold with 500 errors', bn: '৫০০টি এরর সহ ৫০.০০% থ্রেশহোল্ড' },
          { en: 'A 90.00% threshold with zero rollbacks', bn: 'কোনো রোলব্যাক ছাড়া ৯০.০০% থ্রেশহোল্ড' },
        ],
        answer: 0,
        hint: { en: '2.00% error threshold triggered the 1.40 ms rollback.', bn: '২.০০% এরর থ্রেশহোল্ড ১.৪০ ms-এ রোলব্যাক ট্রিগার করে।' },
        explanation: {
          en: 'An error rate of 8.00% breached the 2.00% threshold, triggering an automated rollback in 1.40 ms.',
          bn: '৮.০০% এরর রেট ২.০০% সীমা অতিক্রম করায় ১.৪০ ms এর মধ্যে স্বয়ংক্রিয় রোলব্যাক ঘটে।',
        },
      },
      {
        id: 'srv-rel-q3',
        kind: 'mcq',
        topic: 'backward-compatibility-requirement',
        question: {
          en: 'Why is backward database compatibility strictly required when executing canary traffic shifting between serverless function versions?',
          bn: 'সার্ভারলেস ভার্সনগুলোর মধ্যে ক্যানারি ট্রাফিক শিফটিং চালানোর সময় ডেটাবেজ ব্যাকওয়ার্ড-কম্প্যাটিবিলিটি থাকা কেন বাধ্যতামূলক?',
        },
        options: [
          {
            en: 'Because both the old version (handling 90% of traffic) and the new canary version (handling 10% of traffic) run concurrently against the same production database',
            bn: 'কারণ পুরনো সংস্করণ (৯০% ট্রাফিক চালিত) এবং নতুন ক্যানারি সংস্করণ (১০% ট্রাফিক চালিত) একই সময়ে একই প্রোডাকশন ডেটাবেজে কাজ করে',
          },
          {
            en: 'Because relational databases cannot store numbers larger than 10',
            bn: 'কারণ ডেটাবেজ ১০-এর চেয়ে বড় কোনো সংখ্যা সেভ করতে পারে না',
          },
          {
            en: 'Because internet cables only transmit data in backwards order',
            bn: 'কারণ ইন্টারনেটের তার দিয়ে ডেটা শুধু পেছনের দিকে প্রবাহিত হয়',
          },
          {
            en: 'Because cloud providers automatically format hard drives on every deployment',
            bn: 'কারণ প্রতিবার কোড আপলোড করলে ক্লাউড প্রোভাইডার হার্ডডিস্ক ফরম্যাট করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Both old and new versions query the database simultaneously during rollout.', bn: 'রোলআউটের সময় পুরনো ও নতুন উভয় কোড একই ডেটাবেজ ব্যবহার করে।' },
        explanation: {
          en: 'During traffic shifting, both versions run side-by-side; schema changes must accommodate both code paths without breaking.',
          bn: 'ক্যানারি চলাকালে দুই সংস্করণের কোডই সমান্তরালে ডেটাবেজে কাজ করে, তাই স্কিমা সামঞ্জস্যপূর্ণ রাখা অত্যাবশ্যক।',
        },
      },
      {
        id: 'srv-rel-q4',
        kind: 'predict',
        topic: 'rollback-action-name',
        question: {
          en: 'What eight-letter English term describes the automated operational action of restoring traffic to the previous known good version when a deployment fails (e.g. rollback)?',
          bn: 'ডিপ্লয়মেন্ট ব্যর্থ হলে ট্রাফিক পুনরায় আগের নিরাপদ সংস্করণে ফিরিয়ে নেওয়ার ৮ অক্ষরের ইংরেজি পরিভাষাটি কী (যেমন rollback)?',
        },
        answer: 'rollback',
        accept: ['rollback', 'roll-back', 'roll back'],
        hint: { en: 'rollback', bn: 'rollback' },
        explanation: {
          en: 'A rollback reverts traffic routing back to the previous stable release.',
          bn: 'রোলব্যাক ট্রাফিক ফিরিয়ে নিয়ে আগের নিরাপদ ভার্সন সক্রিয় করে।',
        },
      },
    ],
  },
};
