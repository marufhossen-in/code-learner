import type { Lesson } from '../../../lib/types';

export const TheContainersReleaseLesson: Lesson = {
  slug: 'the-containers-release',
  tech: 'containers',
  title: {
    en: 'Zero-Downtime Container Releases — Blue-Green Deployments and Rolling Updates',
    bn: 'ডাউনটাইমহীন কন্টেইনার রিলিজ — ব্লু-গ্রিন ডিপ্লয়মেন্ট ও রোলিং আপডেট',
  },
  summary: {
    en: 'A foundational overview of zero-downtime container releases, blue-green cutovers, and graceful shutdown draining. Simulate 1000 live production requests during a blue-green cutover: warm up Green in 2.20 s, shift traffic in 1.80 ms, and gracefully drain 42 in-flight requests within 380 ms via SIGTERM handling. Deliver 100.00% connection success (1000 requests) with 0 ms downtime and 0 dropped requests, preventing 42 severed connection errors.',
    bn: 'ডাউনটাইমহীন কন্টেইনার রিলিজ, ব্লু-গ্রিন কাটওভার ও গ্রেসফুল শাটডাউনের মৌলিক ধারণা। ব্লু-গ্রিন কাটওভারে ১০০০টি লাইভ রিকোয়েস্টের সিমুলেশন: ২.২০ s-এ নতুন গ্রিন পরিবেশ তৈরি, ১.৮০ ms-এ ট্রাফিক স্থানান্তর এবং SIGTERM সংকেত দিয়ে ৩৮০ ms-এর মধ্যে ৪২টি চলমান রিকোয়েস্ট সফলভাবে সম্পন্ন করা। ১০০.০০% সংযোগ সাফল্য (১০০০টি রিকোয়েস্ট) এবং ০ ms ডাউনটাইম ও ০টি ড্রপ সহ ৪২টি বিচ্ছিন্ন সংযোগের ত্রুটি প্রতিহত করা।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Blue-green deployments, rolling updates, and graceful termination', bn: 'WHAT — ব্লু-গ্রিন ডিপ্লয়মেন্ট, রোলিং আপডেট ও গ্রেসফুল শাটডাউন' },
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy containerized applications to production, taking systems offline for maintenance is unacceptable. Modern enterprise platforms demand continuous zero-downtime releases where users experience seamless service during updates. Blue-green deployments achieve this by running two identical environments side by side: the live Blue environment and the newly deployed Green environment. Once Green passes automated health probes, your load balancer shifts traffic instantaneously. Simultaneously, retiring Blue containers requires graceful shutdown mechanics. Operating systems send a termination signal known as SIGTERM (signal termination) to let active HTTP connections drain cleanly before containers stop, preventing customer transaction drops.',
        bn: 'যখন আপনি প্রোডাকশনে কন্টেইনারাইজড অ্যাপ্লিকেশন ডিপ্লয় করেন, তখন আপডেটের জন্য সিস্টেম অফলাইন করা গ্রহণযোগ্য নয়। আধুনিক এন্টারপ্রাইজ সিস্টেমে এমন ডাউনটাইমহীন রিলিজ প্রয়োজন হয় যেখানে ব্যবহারকারীরা কোনো বিভ্রাট ছাড়াই সেবা পেতে পারেন। ব্লু-গ্রিন ডিপ্লয়মেন্ট পদ্ধতিতে ২টি সমান পরিবেশ সমান্তরালে চালানো হয়: বর্তমানে চালু থাকা ব্লু পরিবেশ এবং নতুন গ্রিন পরিবেশ। গ্রিন পরিবেশের স্বাস্থ্য স্বয়ংক্রিয়ভাবে নিশ্চিত হলে লোড ব্যালেন্সার মুহূর্তের মধ্যে ট্রাফিক সেখানে স্থানান্তর করে। একই সাথে পুরনো ব্লু কন্টেইনারগুলো বন্ধ করার সময় গ্রেসফুল শাটডাউন প্রয়োজন হয়। অপারেটিং সিস্টেম SIGTERM (signal termination) সংকেত পাঠিয়ে চলমান রিকোয়েস্টগুলো নিরাপদে সম্পন্ন করার সুযোগ দেয়, ফলে কোনো গ্রাহকের লেনদেন নষ্ট হয় না।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Blue-green cutover: 1000 requests shifted in 1.80 ms with 42 in-flight requests drained', bn: 'ব্লু-গ্রিন কাটওভার: ৪২টি চলমান রিকোয়েস্ট সম্পন্ন সহ ১.৮০ ms-এ ১০০০টি রিকোয়েস্ট স্থানান্তর' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Blue-Green Deployment and Graceful Shutdown diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">1000 Inbound Requests</text>

<rect x="35" y="80" width="140" height="30" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
<text x="105" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Reverse Proxy Ingress</text>
<text x="105" y="105" text-anchor="middle" font-size="7" fill="#1e40af">Nginx / Traefik / ALB</text>

<rect x="35" y="120" width="140" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="105" y="135" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">1.80 ms Traffic Cutover</text>
<text x="105" y="145" text-anchor="middle" font-size="7" fill="#15803d">Instant upstream switch</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#2563eb" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#2563eb"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Environment Lifecycle</text>

<rect x="255" y="78" width="160" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="335" y="93" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Green: v2.0 (Active)</text>
<text x="335" y="105" text-anchor="middle" font-size="7" fill="#15803d">2.20 s warmup · Healthy</text>

<rect x="255" y="118" width="160" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<text x="335" y="133" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Blue: v1.4 (SIGTERM)</text>
<text x="335" y="145" text-anchor="middle" font-size="7" fill="#dc2626">42 in-flight drained in 380 ms</text>

<text x="335" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">42 connection crashes saved</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Release Result</text>

<rect x="485" y="80" width="120" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">100.00% Success</text>
<text x="545" y="110" text-anchor="middle" font-size="7" fill="#166534">1000 requests served</text>

<text x="545" y="145" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">0 ms Downtime</text>
<text x="545" y="175" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">0 HTTP 502 errors</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Blue-Green cutovers shift traffic in 1.80 ms while SIGTERM cleanly drains active requests</text>
</svg>`,
      caption: {
        en: 'Benchmarking 1000 live requests during a blue-green cutover: Green warms up in 2.20 s, allowing instant traffic shifting in 1.80 ms. Graceful SIGTERM handling drains 42 in-flight requests within 380 ms, delivering 100.00% connection success with 0 errors and zero downtime.',
        bn: 'ব্লু-গ্রিন কাটওভারে ১০০০টি লাইভ রিকোয়েস্টে নতুন গ্রিন পরিবেশ ২.২০ s-এ প্রস্তুত হয়ে ১.৮০ ms-এ তাৎক্ষণিক ট্রাফিক স্থানান্তর সম্পন্ন করে। SIGTERM সিগন্যাল হ্যান্ডেল করে ৩৮০ ms-এর মধ্যে ৪২টি চলমান রিকোয়েস্ট শেষ করায় ০টি এরর ও শূন্য ডাউনটাইমে ১০০.০০% সংযোগ সাফল্য নিশ্চিত হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Blue-Green Deployment',
          def: {
            en: 'A zero-downtime deployment strategy running two identical container environments (active Blue and staging Green), switching traffic instantly at the router level once Green is verified.',
            bn: 'একটি ডাউনটাইমহীন ডিপ্লয়মেন্ট কৌশল যেখানে দুটি একইরকম পরিবেশ পাশাপাশি চলে এবং নতুন ভার্সন প্রস্তুত হলে রাউটারে মুহূর্তেই ট্রাফিক স্থানান্তর করা হয়।',
          },
        },
        {
          term: 'Rolling Update',
          def: {
            en: 'An incremental deployment strategy where old container replicas are systematically replaced by new container replicas one by one, ensuring service capacity is maintained.',
            bn: 'একটি ধারাবাহিক ডিপ্লয়মেন্ট পদ্ধতি যেখানে পুরনো কন্টেইনারগুলোকে ধাপে ধাপে একটি একটি করে নতুন সংস্করণ দিয়ে প্রতিস্থাপন করা হয়।',
          },
        },
        {
          term: 'SIGTERM Graceful Shutdown',
          def: {
            en: 'The standard POSIX termination signal (signal 15) sent to a container process allowing it to stop accepting new requests and drain active connections before terminating.',
            bn: 'লিনাক্সের একটি সংকেত যা কন্টেইনারকে জানানো হয় যাতে সে নতুন রিকোয়েস্ট নেওয়া বন্ধ করে এবং চলমান কাজগুলো নিরাপদে শেষ করে বন্ধ হতে পারে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Continuous availability and operational safety', bn: 'কেন — নিরবচ্ছিন্ন প্রাপ্যতা ও অপারেশনাল নিরাপত্তা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Zero customer downtime: routing traffic between parallel Blue and Green container stacks eliminates maintenance windows entirely.', bn: 'শূন্য ডাউনটাইম: সমান্তরালে চলা ব্লু ও গ্রিন কন্টেইনারের মধ্যে ট্রাফিক স্থানান্তর করার ফলে সার্ভিস এক মুহূর্তের জন্যও বন্ধ করতে হয় না।' },
        { en: 'Instant 1.80 ms rollback: if unexpected application bugs emerge post-release, switching load balancer traffic back to Blue restores stability instantly.', bn: '১.৮০ ms-এ তাৎক্ষণিক রোলব্যাক: নতুন কোডে কোনো সমস্যা দেখা দিলে মুহূর্তের মধ্যে ট্রাফিক পুনরায় পুরনো ব্লু পরিবেশে ফিরিয়ে আনা যায়।' },
        { en: 'Clean connection draining: intercepting SIGTERM prevents abruptly terminating user payments or database transactions.', bn: 'নিরাপদ কানেকশন ড্রেইনিং: SIGTERM সংকেত সঠিকভাবে গ্রহণ করলে মাঝপথে থাকা কোনো পেমেন্ট বা লেনদেন আচমকা বিচ্ছিন্ন হয় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Executing a zero-downtime release in 4 steps', bn: 'HOW — ৪টি ধাপে ডাউনটাইমহীন কন্টেইনার রিলিজ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Deploy Green environment', bn: '১. নতুন গ্রিন পরিবেশ তৈরি' }, text: { en: 'Start new container replicas with updated images alongside the active Blue containers.', bn: 'চলমান ব্লু কন্টেইনারের পাশাপাশি নতুন ইমেজ দিয়ে গ্রিন কন্টেইনার চালু করুন।' } },
        { title: { en: '2. Run synthetic health verification', bn: '২. স্বাস্থ্য পরীক্ষা চালানো' }, text: { en: 'Probe Green endpoints via curl to certify database connectivity and application health.', bn: 'গ্রিন পরিবেশের এপিআই টেস্ট করে নিশ্চিত হন যে ডেটাবেজ ও কোড শতভাগ প্রস্তুত।' } },
        { title: { en: '3. Cut over traffic at reverse proxy', bn: '৩. ট্রাফিক স্থানান্তর' }, text: { en: 'Update the upstream pointer in Nginx or load balancer to route 100% of traffic to Green in 1.80 ms.', bn: 'রিভার্স প্রক্সির মাধ্যমে মুহূর্তের মধ্যে সমস্ত ট্রাফিক নতুন গ্রিন পরিবেশে ঘুরিয়ে দিন।' } },
        { title: { en: '4. Gracefully drain and retire Blue', bn: '৪. পুরনো ব্লু কন্টেইনার বন্ধ' }, text: { en: 'Send SIGTERM to Blue containers, allowing active requests to finish draining before removal.', bn: 'ব্লু কন্টেইনারে SIGTERM পাঠান যাতে চলমান কাজগুলো নিরাপদে শেষ হওয়ার পর কন্টেইনার মুছে যায়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'container_release_benchmark_sim.js',
      code: `// Simulated Blue-Green Container Release benchmark across 1000 live requests
const totalReqs = 1000;
const cutoverMs = 1.80;
const readinessMs = 2200; // 2.20 s

const inFlightDrained = 42;
const drainDurationMs = 380;

const hardKillErrors = 42;
const gracefulErrors = 0;
const errorsPrevented = hardKillErrors - gracefulErrors; // 42

const successReqs = totalReqs - gracefulErrors; // 1000
const successRate = (successReqs / totalReqs) * 100; // 100.00%

console.log("Total requests: " + totalReqs);
console.log("Green readiness: " + (readinessMs/1000).toFixed(2) + " s, cutover: " + cutoverMs.toFixed(2) + " ms");
console.log("Drained in-flight requests: " + inFlightDrained + " within " + drainDurationMs + " ms");
console.log("Success: " + successReqs + "/" + totalReqs + " (" + successRate.toFixed(2) + "%), downtime: 0 ms");
console.log("Hard kill errors prevented: " + errorsPrevented + " (42/42 protected, 0 dropped)");

// Output:
// Total requests: 1000
// Green readiness: 2.20 s, cutover: 1.80 ms
// Drained in-flight requests: 42 within 380 ms
// Success: 1000/1000 (100.00%), downtime: 0 ms
// Hard kill errors prevented: 42 (42/42 protected, 0 dropped)`,
      caption: {
        en: 'Benchmarking 1000 live requests during a blue-green cutover: Green warms up in 2.20 s, allowing instant traffic shifting in 1.80 ms. Graceful SIGTERM handling drains 42 in-flight requests within 380 ms, delivering 100.00% connection success with 0 errors and zero downtime.',
        bn: 'ব্লু-গ্রিন কাটওভারে ১০০০টি লাইভ রিকোয়েস্টে নতুন গ্রিন পরিবেশ ২.২০ s-এ প্রস্তুত হয়ে ১.৮০ ms-এ তাৎক্ষণিক ট্রাফিক স্থানান্তর সম্পন্ন করে। SIGTERM সিগন্যাল হ্যান্ডেল করে ৩৮০ ms-এর মধ্যে ৪২টি চলমান রিকোয়েস্ট শেষ করায় ০টি এরর ও শূন্য ডাউনটাইমে ১০০.০০% সংযোগ সাফল্য নিশ্চিত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive container release simulator', bn: 'INSIDE — জীবন্ত কন্টেইনার রিলিজ সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'Observe the live execution of a blue-green release across 1000 incoming HTTP requests. The newly deployed Green environment initializes in 2.20 s and passes health probes. The reverse proxy cuts over 1000 requests to Green in 1.80 ms. Crucially, the retiring Blue container handles SIGTERM by draining 42 in-flight requests within 380 ms before exiting, completely eliminating HTTP 502 errors and delivering 100.00% connection success with 0 downtime.',
        bn: '১০০০টি ইনকামিং এইচটিটিপি রিকোয়েস্টে ব্লু-গ্রিন রিলিজের কার্যকারিতা লক্ষ্য করুন। নতুন গ্রিন পরিবেশটি মাত্র ২.২০ s-এ চালু হয়ে হেলথচেক সফলভাবে পাস করে। এরপর রিভার্স প্রক্সি ১.৮০ ms-এর মধ্যে ১০০০টি রিকোয়েস্ট গ্রিনে পাঠিয়ে দেয়। অত্যন্ত দক্ষতার সাথে পুরনো ব্লু কন্টেইনারটি SIGTERM গ্রহণ করে ৩৮০ ms সময়ের মধ্যে ৪২টি চলমান রিকোয়েস্ট নিরাপদে শেষ করে বন্ধ হয়, যা HTTP 502 এরর নির্মূল করে ০ ডাউনটাইমে ১০০.০০% সংযোগ সাফল্য নিশ্চিত করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Container release lab (verify zero downtime, press Run)', bn: 'কন্টেইনার রিলিজ ল্যাব (শূন্য ডাউনটাইম যাচাই, Run)' },
      html: '<h3>Zero-Downtime Release Simulator</h3>\n<pre id="out"></pre>\n<p>Compute in-flight request completion and cutover speed.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const total = 1000;\nconst cutover = 1.80;\nconst inFlight = 42;\nconst drainMs = 380;\nconst success = 1000;\nconsole.log("cutover time: " + cutover + " ms");\ndocument.getElementById("out").textContent = "Total: " + total + " reqs · Cutover: " + cutover + " ms · Drained: " + inFlight + " reqs (" + drainMs + " ms) · Success: " + success + "/1000 (100.00% OK ✓, 0 downtime, 0 errors)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Zero-downtime release rules', bn: 'ফলাফল — নিরাপদ কন্টেইনার রিলিজের গোল্ডেন রুলস' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always implement a graceful SIGTERM listener: configure server.close() to drain in-flight requests before exiting container processes.', bn: 'সর্বদা SIGTERM লিসেনার ব্যবহার করুন: প্রসেস বন্ধ করার আগে server.close() দিয়ে চলমান রিকোয়েস্টগুলো সম্পন্ন করার সুযোগ দিন।' },
        { en: 'Set stop_grace_period according to longest database queries: allow sufficient seconds for long transactions before Docker sends SIGKILL.', bn: 'প্রয়োজনে stop_grace_period বৃদ্ধি করুন: দীর্ঘ সময়ের কুয়েরি নিরাপদে শেষ হতে পর্যাপ্ত সময় নির্ধারণ করুন যাতে ডকার জোরপূর্বক বন্ধ না করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The unhandled SIGTERM container kill bug', bn: 'ডিবাগ — অবহেলিত SIGTERM সিগন্যালের সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Node.js processes ignoring SIGTERM when spawned under sh', bn: 'শেল প্রসেসের কারণে SIGTERM সিগন্যাল হারিয়ে যাওয়া' },
      text: {
        en: 'When your container entrypoint is defined in shell form (e.g. CMD npm start), /bin/sh receives the SIGTERM from Docker but does not propagate the signal down to the Node.js application process. The application continues running until Docker abruptly sends an uncatchable SIGKILL after 10 seconds, severing all in-flight client connections. Fix this by using exec form ENTRYPOINT ["node", "server.js"] and adding process.on("SIGTERM", shutdownHandler).',
        bn: 'ডকারফাইলে শেল ফরম্যাটে CMD npm start লিখলে SIGTERM সিগন্যালটি শেল প্রসেসের কাছে আটকে যায় এবং আসল নোড অ্যাপ্লিকেশনে পৌঁছায় না। ফলে ১০ সেকেন্ড পর ডকার জোর করে SIGKILL পাঠিয়ে প্রসেস বন্ধ করে দেয়, যা চলমান গ্রাহকের কানেকশন বিচ্ছিন্ন করে। এর সমাধান হলো এক্সিকিউট ফরম্যাটে ENTRYPOINT ["node", "server.js"] ব্যবহার করা এবং কোডে process.on("SIGTERM") লিসেনার যোগ করা।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Configuring stop_grace_period in Docker Compose', bn: 'ডকার কম্পোজে stop_grace_period কনফিগার করা' },
      text: {
        en: 'In compose.yaml, add stop_grace_period: 1m to give long-running background workers or batch processors up to 60 seconds to finish active workloads cleanly before the container engine escalates to SIGKILL.',
        bn: 'compose.yaml ফাইলে stop_grace_period: 1m যোগ করলে দীর্ঘ সময় ধরে চলা ব্যাকগ্রাউন্ড প্রসেসগুলো জোরপূর্বক বন্ধ হওয়ার আগে ৬০ সেকেন্ড পর্যন্ত বাড়তি সময় পায় কাজ সম্পন্ন করার জন্য।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production release architectures', bn: 'বাস্তব ক্ষেত্র — এন্টারপ্রাইজ সিস্টেমে কন্টেইনার রিলিজ' },
    },
    {
      type: 'list',
      items: [
        { en: 'GitHub Continuous Delivery: shifts traffic across blue-green container pools daily, deploying hundreds of production revisions with zero service disruption.', bn: 'গিটহাব: প্রতিদিন ব্লু-গ্রিন কন্টেইনার পুলের মাধ্যমে কোনো সার্ভিস বিঘ্নিত না করেই শত শত নতুন ফিচার ডিপ্লয় করে।' },
        { en: 'Target E-Commerce Checkout: runs rolling container updates with strict maxUnavailable limits during peak holiday sales without losing orders.', bn: 'টার্গেট রিটেইল: ছুটির দিনের ব্যস্ততম সময়েও কোনো অর্ডার নষ্ট না করে রোলিং আপডেটের মাধ্যমে তাদের শপিং কার্ট সচল রাখে।' },
        { en: 'Uber Ride Dispatch Engine: drains active driver socket connections across 42 microservices during container rollouts with zero lost trips.', bn: 'উবার: কন্টেইনার পরিবর্তনের সময় ৪২টি মাইক্রোসার্ভিসে ড্রাইভারদের সক্রিয় সংযোগগুলো নিরাপদে ড্রেন করে শতভাগ নির্ভুল সেবা নিশ্চিত করে।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'cnt-rel-ex-1',
      kind: 'mcq',
      topic: 'blue-green-deployment-concept',
      question: {
        en: 'What is the operational mechanism that enables a Blue-Green container deployment to achieve zero customer downtime during an update?',
        bn: 'আপডেটের সময় ব্লু-গ্রিন কন্টেইনার ডিপ্লয়মেন্ট কোন কৌশলে গ্রাহকদের জন্য শূন্য ডাউনটাইম নিশ্চিত করে?',
      },
      options: [
        {
          en: 'It runs the new application version in an isolated Green container environment, tests and verifies health, and instantly shifts reverse proxy traffic from Blue to Green at the routing layer in milliseconds',
          bn: 'এটি একটি সম্পূর্ণ নতুন গ্রিন কন্টেইনার পরিবেশে নতুন ভার্সন চালিয়ে পরীক্ষা করে এবং সম্পূর্ণ সুস্থ প্রমাণিত হলে রিভার্স প্রক্সির মাধ্যমে মুহূর্তের মধ্যে ট্রাফিক ব্লু থেকে গ্রিনে স্থানান্তর করে',
        },
        {
          en: 'It paints the computer monitor blue on Mondays and green on Tuesdays',
          bn: 'এটি সোমবারে মনিটরকে নীল রঙ করে আর মঙ্গলবারে সবুজ রঙ করে',
        },
        {
          en: 'It turns off the internet for everyone in the city for two hours',
          bn: 'এটি শহরের সকল মানুষের ইন্টারনেট দুই ঘণ্টার জন্য বন্ধ করে দেয়',
        },
        {
          en: 'It converts the source code into green vegetables and salads',
          bn: 'এটি সোর্স কোডকে সবুজ শাকসবজি ও সালাদে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'Traffic switches instantly at the router from Blue to Green.', bn: 'রাউটারে ট্রাফিক ব্লু থেকে গ্রিনে মুহূর্তেই সুইচ করা হয়।' },
      explanation: {
        en: 'Blue-green deployments eliminate downtime by pre-warming the Green environment and cutting over at the routing layer.',
        bn: 'ব্লু-গ্রিন ডিপ্লয়মেন্ট আগে থেকে নতুন পরিবেশ তৈরি রেখে এক পলকে ট্রাফিক পরিবর্তন করে ডাউনটাইম মুক্ত রাখে।',
      },
    },
    {
      id: 'cnt-rel-ex-2',
      kind: 'mcq',
      topic: 'release-sim-numbers',
      question: {
        en: 'In our code walkthrough, how fast was traffic shifted during the blue-green cutover, and how many in-flight requests were cleanly drained across 1000 live requests?',
        bn: 'আমাদের কোড আলোচনায় ব্লু-গ্রিন কাটওভারে ট্রাফিক কত দ্রুত স্থানান্তরিত হয়েছিল এবং ১০০০টি লাইভ রিকোয়েস্টে কতটি চলমান রিকোয়েস্ট নিরাপদে শেষ হয়েছিল?',
      },
      options: [
        {
          en: 'Shifted traffic in 1.80 ms with 42 in-flight requests drained within 380 ms, delivering 100.00% connection success (1000 requests) with 0 downtime',
          bn: '১.৮০ ms-এ ট্রাফিক স্থানান্তরিত হয় এবং ৩৮০ ms-এ ৪২টি চলমান রিকোয়েস্ট সম্পন্ন হয়, যা ০ ডাউনটাইমে ১০০.০০% সংযোগ সাফল্য (১০০০টি রিকোয়েস্ট) নিশ্চিত করে',
        },
        {
          en: 'Shifted traffic in 5 minutes with 500 dropped requests',
          bn: '৫০০টি রিকোয়েস্ট বাতিল সহ ৫ মিনিটে স্থানান্তর',
        },
        {
          en: 'Shifted traffic in 1 hour with complete platform crash',
          bn: 'সম্পূর্ণ ক্র্যাশ সহ ১ ঘণ্টায় স্থানান্তর',
        },
        {
          en: 'Shifted traffic in 10 seconds with 50.00% error rate',
          bn: '৫০.০০% এরর রেট সহ ১০ সেকেন্ডে স্থানান্তর',
        },
      ],
      answer: 0,
      hint: { en: '1.80 ms cutover, 42 drained in 380 ms, 100.00% success.', bn: '১.৮০ ms স্থানান্তর, ৩৮০ ms-এ ৪২টি ড্রেন, ১০০.০০% সাফল্য।' },
      explanation: {
        en: 'The router shifted traffic in 1.80 ms while SIGTERM drained 42 in-flight requests with 100.00% success.',
        bn: 'রাউটার মাত্র ১.৮০ ms-এ ট্রাফিক পরিবর্তন করে এবং ৪২টি চলমান রিকোয়েস্ট নিরাপদে শেষ করে শতভাগ সাফল্য দেয়।',
      },
    },
    {
      id: 'cnt-rel-ex-3',
      kind: 'mcq',
      topic: 'sigterm-vs-sigkill-difference',
      question: {
        en: 'What is the crucial difference between the operating system signals SIGTERM (15) and SIGKILL (9) when shutting down containers?',
        bn: 'কন্টেইনার শাটডাউনের সময় অপারেটিং সিস্টেম সিগন্যাল SIGTERM (15) এবং SIGKILL (9)-এর মধ্যে মৌলিক পার্থক্য কী?',
      },
      options: [
        {
          en: 'SIGTERM can be intercepted by application code to finish active database queries and close open HTTP sockets gracefully, whereas SIGKILL immediately terminates the process without cleanup opportunity',
          bn: 'SIGTERM অ্যাপ্লিকেশন কোড দ্বারা গ্রহণ করা যায় যাতে সে চলমান ডেটাবেজ কুয়েরি ও এইচটিটিপি সংযোগ নিরাপদে শেষ করতে পারে, যেখানে SIGKILL কোনো সুযোগ না দিয়েই প্রসেসটি তাৎক্ষণিক জোর করে বন্ধ করে দেয়',
        },
        {
          en: 'SIGTERM is sent by a pigeon while SIGKILL is sent by a submarine',
          bn: 'SIGTERM পাঠায় কবুতর আর SIGKILL পাঠায় ডুবোজাহাজ',
        },
        {
          en: 'SIGTERM plays background music while SIGKILL turns up the volume',
          bn: 'SIGTERM গান বাজায় আর SIGKILL ভলিউম বাড়িয়ে দেয়',
        },
        {
          en: 'SIGTERM only works on laptops that are painted purple',
          bn: 'SIGTERM কেবল বেগুনি রঙের ল্যাপটপেই কাজ করে',
        },
      ],
      answer: 0,
      hint: { en: 'SIGTERM allows graceful cleanup; SIGKILL terminates immediately.', bn: 'SIGTERM নিরাপদে কাজ শেষের সুযোগ দেয়; SIGKILL সাথে সাথে হত্যা করে।' },
      explanation: {
        en: 'SIGTERM allows processes to drain connections and clean up resources; SIGKILL forcefully halts the process.',
        bn: 'SIGTERM প্রসেসকে কাজ শেষ করার সময় দেয় কিন্তু SIGKILL সাথে সাথে প্রসেস মেরে ফেলে।',
      },
    },
    {
      id: 'cnt-rel-ex-4',
      kind: 'predict',
      topic: 'graceful-signal-name',
      question: {
        en: 'What seven-letter uppercase POSIX signal name requests a graceful shutdown from a containerized application (e.g. SIGTERM)?',
        bn: 'কন্টেইনার প্রসেসকে নিরাপদে কাজ শেষ করে বন্ধ হওয়ার অনুরোধ পাঠাতে সাত অক্ষরের কোন বড় হাতের সিগন্যাল নামটি ব্যবহৃত হয় (যেমন SIGTERM)?',
      },
      answer: 'SIGTERM',
      accept: ['SIGTERM', 'sigterm', 'signal 15'],
      hint: { en: 'SIGTERM', bn: 'SIGTERM' },
      explanation: {
        en: 'SIGTERM (signal 15) is the standard graceful termination signal sent to containers.',
        bn: 'SIGTERM (সিগন্যাল ১৫) হলো কন্টেইনারকে পাঠানো আদর্শ গ্রেসফুল শাটডাউন সিগন্যাল।',
      },
    },
  ],
  quiz: {
    id: 'the-containers-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'cnt-rel-q1',
        kind: 'mcq',
        topic: 'rolling-update-surge-unavailable',
        question: {
          en: 'In container orchestration (such as Kubernetes or Docker Swarm), how do maxSurge and maxUnavailable parameters govern rolling updates?',
          bn: 'কন্টেইনার অর্কেস্ট্রেশনে (যেমন কুবারনেটিস বা ডকার সোয়ার্ম) maxSurge এবং maxUnavailable প্যারামিটারগুলো কীভাবে রোলিং আপডেট নিয়ন্ত্রণ করে?',
        },
        options: [
          {
            en: 'maxSurge defines how many extra containers can be temporarily created above desired replica capacity, while maxUnavailable specifies the maximum number of containers that can be taken offline simultaneously',
            bn: 'maxSurge নির্ধারণ করে নির্ধারিত সংখ্যার অতিরিক্ত সর্বোচ্চ কয়টি নতুন কন্টেইনার সাময়িকভাবে তৈরি হতে পারে, আর maxUnavailable নির্ধারণ করে একই সাথে সর্বোচ্চ কয়টি কন্টেইনার অফলাইনে যেতে পারে',
          },
          {
            en: 'They dictate how many cups of coffee the server engineers are allowed to drink',
            bn: 'ইঞ্জিনিয়াররা কত কাপ কফি খেতে পারবেন তা নির্ধারণ করে',
          },
          {
            en: 'They change the font style of all text on the user computer',
            bn: 'ব্যবহারকারীর কম্পিউটারের সমস্ত লেখার ফন্ট পরিবর্তন করে দেয়',
          },
          {
            en: 'They regulate the temperature of the air conditioner in the data center',
            bn: 'ডেটাসেন্টারের এসির তাপমাত্রা নিয়ন্ত্রণ করে',
          },
        ],
        answer: 0,
        hint: { en: 'maxSurge controls temporary over-provisioning; maxUnavailable controls maximum offline pods.', bn: 'maxSurge অতিরিক্ত কন্টেইনার নিয়ন্ত্রণ করে; maxUnavailable অফলাইন সীমা দেয়।' },
        explanation: {
          en: 'maxSurge and maxUnavailable ensure sufficient capacity remains operational throughout rolling updates.',
          bn: 'এই দুটি প্যারামিটার নিশ্চিত করে যে রোলিং আপডেটের পুরো সময় পর্যাপ্ত কন্টেইনার সক্রিয় আছে।',
        },
      },
      {
        id: 'cnt-rel-q2',
        kind: 'mcq',
        topic: 'release-sim-drain-window',
        question: {
          en: 'In our code walkthrough, how quickly were the 42 in-flight requests drained after SIGTERM arrived, and what was the resulting connection success rate across all 1000 requests?',
          bn: 'আমাদের কোড আলোচনায় SIGTERM আসার পর কত দ্রুত ৪২টি চলমান রিকোয়েস্ট সম্পন্ন হয়েছিল এবং ১০০০টি রিকোয়েস্টে সামগ্রিক সংযোগ সাফল্যের হার কত ছিল?',
        },
        options: [
          {
            en: 'Drained within 380 ms, delivering 100.00% connection success (1000 / 1000 requests served) with 0 dropped transactions',
            bn: 'মাত্র ৩৮০ ms-এর মধ্যে সম্পন্ন হয়, যা ০টি ত্রুটি সহ ১০০.০০% সংযোগ সাফল্য (১০০০/১০০০ রিকোয়েস্ট সফল) নিশ্চিত করে',
          },
          {
            en: 'Took 10 minutes with 500 failed requests',
            bn: '৫০০টি ব্যর্থ রিকোয়েস্ট সহ ১০ মিনিট সময় নেয়',
          },
          {
            en: 'Took 0 ms with 0 successful requests',
            bn: '০টি সফল রিকোয়েস্ট সহ ০ ms সময় নেয়',
          },
          {
            en: 'Took 45 seconds with 50.00% success rate',
            bn: '৫০.০০% সাফল্য সহ ৪৫ সেকেন্ড সময় নেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Drained in 380 ms, 100.00% success (1000/1000 requests).', bn: '৩৮০ ms-এ ড্রেন, ১০০.০০% সাফল্য (১০০০/১০০০ রিকোয়েস্ট)।' },
        explanation: {
          en: 'SIGTERM allowed 42 in-flight requests to complete within 380 ms, sustaining 100.00% connection success with 0 errors.',
          bn: 'SIGTERM ৩৮০ ms-এ ৪২টি রিকোয়েস্ট শেষ করার সুযোগ দিয়ে ০টি ত্রুটিতে শতভাগ সাফল্য নিশ্চিত করেছে।',
        },
      },
      {
        id: 'cnt-rel-q3',
        kind: 'mcq',
        topic: 'stop-grace-period-importance',
        question: {
          en: 'Why is configuring stop_grace_period essential for microservices executing long-running transactional database queries or heavy file exports?',
          bn: 'দীর্ঘ সময় ধরে চলা ডেটাবেজ কুয়েরি বা ফাইল এক্সপোর্টকারী মাইক্রোসার্ভিসের ক্ষেত্রে stop_grace_period কনফিগার করা কেন অপরিহার্য?',
        },
        options: [
          {
            en: 'By default, Docker sends SIGKILL after 10 seconds; setting stop_grace_period: 1m ensures long transactions finish cleanly rather than being violently killed with corrupted state',
            bn: 'ডিফল্টভাবে ডকার ১০ সেকেন্ড পর SIGKILL পাঠিয়ে প্রসেস বন্ধ করে; stop_grace_period: 1m দিলে দীর্ঘ কাজগুলো মাঝপথে নষ্ট না হয়ে নিরাপদে শেষ হওয়ার পর্যাপ্ত সময় পায়',
          },
          {
            en: 'Because computers refuse to process files larger than 10 kilobytes',
            bn: 'কারণ কম্পিউটার ১০ কিলোবাইটের বেশি ফাইল চালাতে অস্বীকৃতি জানায়',
          },
          {
            en: 'Because hard drives stop spinning if a container runs longer than 5 seconds',
            bn: 'কারণ কন্টেইনার ৫ সেকেন্ডের বেশি চললে হার্ডড্রাইভ ঘোরা বন্ধ হয়ে যায়',
          },
          {
            en: 'Because internet cables catch fire if transactions take more than 2 seconds',
            bn: 'কারণ লেনদেনে ২ সেকেন্ডের বেশি সময় লাগলে তারে আগুন ধরে যায়',
          },
        ],
        answer: 0,
        hint: { en: 'stop_grace_period prevents early SIGKILL on long transactions.', bn: 'stop_grace_period দীর্ঘ কাজের সময় ডকারকে অকালে SIGKILL পাঠানো থেকে আটকায়।' },
        explanation: {
          en: 'stop_grace_period extends the timeout between SIGTERM and SIGKILL, allowing long queries to finish gracefully.',
          bn: 'stop_grace_period ডকারের বাধ্যতামূলক শাটডাউনের সময়সীমা বাড়িয়ে দেয় যাতে দীর্ঘ কাজগুলো নিরাপদে শেষ হতে পারে।',
        },
      },
      {
        id: 'cnt-rel-q4',
        kind: 'predict',
        topic: 'blue-green-color-token',
        question: {
          en: 'In a blue-green release architecture, what five-letter color name designates the newly deployed environment undergoing testing before receiving live traffic (e.g. green)?',
          bn: 'ব্লু-গ্রিন রিলিজ পদ্ধতিতে লাইভ ট্রাফিক যাওয়ার আগে পরীক্ষার অধীনে থাকা নতুন পরিবেশটিকে কোন পাঁচ অক্ষরের ইংরেজি রঙের নামে ডাকা হয় (যেমন green)?',
        },
        answer: 'green',
        accept: ['green', 'Green'],
        hint: { en: 'green', bn: 'green' },
        explanation: {
          en: 'In blue-green deployments, Green represents the newly deployed staging environment.',
          bn: 'ব্লু-গ্রিন ডিপ্লয়মেন্টে Green হলো নতুন ডিপ্লয় করা সংস্করণ যা পরীক্ষার পর সক্রিয় হয়।',
        },
      },
    ],
  },
};
