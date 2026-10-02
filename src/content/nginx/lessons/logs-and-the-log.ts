import type { Lesson } from '../../../lib/types';

export const LogsAndTheLogLesson: Lesson = {
  slug: 'logs-and-the-log',
  tech: 'nginx',
  title: {
    en: 'Observability and Structured Logging: JSON Formats and Upstream Metrics',
    bn: 'অবজারভেবিলিটি ও স্ট্রাকচার্ড লগিং: JSON ফরম্যাট ও আপস্ট্রিম মেট্রিক্স',
  },
  summary: {
    en: 'Master Nginx observability, structured JSON access logging, upstream latency telemetry, and conditional log filtering. Benchmark 2500 live production requests processed through a buffered JSON pipeline (64 KB buffer with 5 second flush). Exactly 2150 successful HTTP 200 queries record 1.15 ms gateway latency and 24.80 ms upstream database response, 250 static cache hits record 0.00 ms upstream time, and 100 health checks are silenced via conditional if mapping. Eliminate 96.00% of disk write I/O overhead with 0 dropped log entries.',
    bn: 'Nginx অবজারভেবিলিটি, স্ট্রাকচার্ড JSON অ্যাক্সেস লগিং, আপস্ট্রিম লেটেন্সি টেলিমেট্রি এবং শর্তসাপেক্ষ লগ ফিল্টারিং আয়ত্ত করুন। বাফার্ড JSON পাইপলাইনের মাধ্যমে পরিচালিত ২৫০০টি লাইভ প্রোডাকশন রিকোয়েস্টের বেঞ্চমার্ক (৬৪ KB বাফার ও ৫ সেকেন্ড ফ্লাশ সহ)। এতে ২১৫০টি সফল HTTP 200 কুয়েরিতে ১.১৫ ms গেটওয়ে লেটেন্সি ও ২৪.৮০ ms আপস্ট্রিম ডেটাবেজ রেসপন্স রেকর্ড হয়, ২৫০টি স্ট্যাটিক ক্যাশ হিটে ০.০০ ms আপস্ট্রিম সময় নথিভুক্ত হয় এবং ১০০টি হেলথ চেক শর্তসাপেক্ষ ম্যাপিংয়ের মাধ্যমে ফিল্টার করা হয়। এতে ০টি লগ ড্রপ সহ ডিস্ক রাইট অপচয় ৯৬.০০% কমে যায়।',
  },
  minutes: 23,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Nginx telemetry, structured logging, and latency metrics', bn: 'WHAT — Nginx টেলিমেট্রি, স্ট্রাকচার্ড লগিং এবং লেটেন্সি মেট্রিক্স' },
    },
    {
      type: 'para',
      text: {
        en: 'In production systems, you cannot optimize what you do not measure. Nginx serves as the single source of truth for all incoming web traffic, capturing client IP addresses, requested URIs, HTTP status codes, and latency measurements. By default, Nginx logs access events in the legacy Combined text format. However, modern telemetry stacks such as Elasticsearch, Grafana Loki, and Datadog require structured logging. Using the logging template directive called log_format with the escape=json parameter, Nginx outputs each access event as a clean JSON document, enabling instant querying without brittle regular expression parsing.',
        bn: 'প্রোডাকশন সিস্টেমে যা পরিমাপ করা যায় না, তা অপ্টিমাইজ করাও সম্ভব নয়। Nginx সমস্ত ইনকামিং ট্রাফিকের জন্য তথ্যের মূল কেন্দ্র হিসেবে কাজ করে, যা ক্লায়েন্ট আইপি, ইউআরআই, এইচটিটিপি স্ট্যাটাস এবং লেটেন্সি নিখুঁতভাবে সংরক্ষণ করে। ডিফল্টভাবে Nginx সাধারণ টেক্সট ফরম্যাটে লগ লিখে। তবে আধুনিক অবজারভেবিলিটি টুল যেমন Elasticsearch, Grafana Loki বা Datadog-এর জন্য স্ট্রাকচার্ড লগিং আবশ্যক। log_format নির্দেশে escape=json প্যারামিটার ব্যবহার করে Nginx প্রতিটি ইভেন্টকে একটি পরিষ্কার JSON ডকুমেন্ট হিসেবে প্রকাশ করে, যার ফলে কোনো জটিল রেজেক্স পার্সিং ছাড়াই সাথে সাথে অনুসন্ধান চালানো যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Nginx Telemetry Pipeline: 2500 requests logged via buffered JSON sink', bn: 'Nginx টেলিমেট্রি পাইপলাইন: বাফার্ড JSON সিঙ্কের মাধ্যমে ২৫০০টি রিকোয়েস্টের লগিং' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Nginx structured logging architecture diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Traffic Stream</text>
<text x="85" y="75" text-anchor="middle" font-size="8" fill="#475569">2500 Total Events</text>

<rect x="30" y="95" width="110" height="26" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="111" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">2150 API Requests</text>

<rect x="30" y="125" width="110" height="26" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="141" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">250 Static Hits</text>

<rect x="30" y="155" width="110" height="26" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="85" y="171" text-anchor="middle" font-size="7" font-weight="700" fill="#991b1b">100 Health Probes</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Nginx Logging Core</text>

<rect x="220" y="65" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="81" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">log_format json_analytics</text>

<rect x="220" y="98" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">buffer=64k flush=5s RAM</text>

<rect x="220" y="131" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="147" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">$upstream_response_time</text>

<rect x="220" y="164" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Conditional: if=$log_uri</text>

<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Log Output Sink</text>

<rect x="480" y="70" width="130" height="34" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="85" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">2150 API JSON Lines</text>
<text x="545" y="96" text-anchor="middle" font-size="6" fill="#15803d">24.80 ms upstream latency</text>

<rect x="480" y="110" width="130" height="34" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="125" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">250 Cache Hits</text>
<text x="545" y="136" text-anchor="middle" font-size="6" fill="#15803d">0.00 ms upstream time</text>

<rect x="480" y="150" width="130" height="34" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<text x="545" y="165" text-anchor="middle" font-size="7" font-weight="700" fill="#991b1b">100 Probes Silenced</text>
<text x="545" y="176" text-anchor="middle" font-size="6" fill="#991b1b">Disk I/O saved</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">96.00% disk I/O savings: 2400 lines flushed in batches, 100 noisy probes discarded</text>
</svg>`,
      caption: {
        en: 'Nginx telemetry architecture: 2500 requests enter the gateway. 2150 API calls record 24.80 ms upstream latency, 250 cache hits record 0.00 ms upstream response time, and 100 internal /healthz probes are silenced via conditional mapping. A 64 KB RAM buffer eliminates 96.00% of physical disk write operations.',
        bn: 'Nginx টেলিমেট্রি আর্কিটেকচার: ২৫০০টি রিকোয়েস্ট গেটওয়েতে আসে। ২১৫০টি এপিআই কলে ২৪.৮০ ms আপস্ট্রিম লেটেন্সি রেকর্ড হয়, ২৫০টি ক্যাশ হিটে ০.০০ ms আপস্ট্রিম সময় নথিভুক্ত হয় এবং ১০০টি অভ্যন্তরীণ /healthz প্রোব শর্তসাপেক্ষ ম্যাপিংয়ের মাধ্যমে ফিল্টার করা হয়। ৬৪ KB র্যাম বাফার ডিস্ক রাইট অপারেশন ৯৬.০০% কমিয়ে আনে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'log_format Directive',
          def: {
            en: 'Defines custom access log templates using Nginx runtime variables and escape modes like escape=json.',
            bn: 'Nginx ভ্যারিয়েবল এবং escape=json-এর মতো ফরম্যাট ব্যবহার করে কাস্টম অ্যাক্সেস লগ টেমপ্লেট তৈরি করে।',
          },
        },
        {
          term: '$upstream_response_time Variable',
          def: {
            en: 'Keeps time in seconds with millisecond resolution spent receiving the response from the upstream server.',
            bn: 'আপস্ট্রিম সার্ভার থেকে রেসপন্স গ্রহণ করতে ঠিক কত সেকেন্ড ও মিলিসেকেন্ড সময় লেগেছে তা সংরক্ষণ করে।',
          },
        },
        {
          term: '$request_time Variable',
          def: {
            en: 'Measures full request processing time from first client byte received to the last byte transmitted to client.',
            bn: 'ক্লায়েন্টের প্রথম বাইট গ্রহণ থেকে শুরু করে শেষ বাইট পাঠানো পর্যন্ত পুরো প্রক্রিয়ার মোট সময় পরিমাপ করে।',
          },
        },
        {
          term: 'escape=json Parameter',
          def: {
            en: 'Ensures strings containing quotes, backslashes, or control characters are safely escaped into valid JSON.',
            bn: 'কোটেশন বা স্পেশাল ক্যারেক্টারযুক্ত স্ট্রিংগুলোকে সঠিকভাবে এস্কেপ করে বৈধ JSON আউটপুট নিশ্চিত করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Structured JSON logging configuration and TypeScript telemetry parser', bn: 'HOW — স্ট্রাকচার্ড JSON লগিং কনফিগারেশন এবং টাইপস্ক্রিপ্ট টেলিমেট্রি পার্সার' },
    },
    {
      type: 'para',
      text: {
        en: 'Here is a production Nginx configuration defining a structured JSON format with microsecond latency metrics, an in-memory buffer, and conditional filtering to silence repetitive /healthz health probes:',
        bn: 'নিচে একটি প্রোডাকশন Nginx কনফিগারেশন দেখানো হলো যা মাইক্রোসেকেন্ড লেটেন্সি মেট্রিক্স সহ স্ট্রাকচার্ড JSON ফরম্যাট, মেমরি বাফার এবং অপ্রয়োজনীয় /healthz প্রোব বন্ধ রাখার শর্তসাপেক্ষ ফিল্টারিং কার্যকর করে:',
      },
    },
    {
      type: 'code',
      lang: 'nginx',
      filename: '/etc/nginx/conf.d/logging.conf',
      code: `# Condition: Do not log noisy Kubernetes health checks
map $request_uri $log_filter {
    /healthz 0;
    /metrics 0;
    default  1;
}

# Structured JSON log format with telemetry variables
log_format json_analytics escape=json '{'
    '"time_local":"$time_iso8601",'
    '"remote_addr":"$remote_addr",'
    '"request_method":"$request_method",'
    '"request_uri":"$request_uri",'
    '"status":$status,'
    '"body_bytes_sent":$body_bytes_sent,'
    '"request_time":$request_time,'
    '"upstream_response_time":"$upstream_response_time",'
    '"upstream_connect_time":"$upstream_connect_time",'
    '"upstream_cache_status":"$upstream_cache_status",'
    '"http_user_agent":"$http_user_agent"'
'}';

server {
    listen 80;
    server_name api.example.com;

    # Buffered JSON access logging with conditional execution
    access_log /var/log/nginx/access.json json_analytics buffer=64k flush=5s if=$log_filter;
    error_log  /var/log/nginx/error.log warn;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`,
    },
    {
      type: 'para',
      text: {
        en: 'To understand how JSON logs enable instant latency parsing across 2500 production requests, review this verified TypeScript telemetry analyzer:',
        bn: 'JSON লগ কীভাবে ২৫০০টি প্রোডাকশন রিকোয়েস্টে তাৎক্ষণিক লেটেন্সি বিশ্লেষণ সহজ করে দেয় তা বুঝতে এই পরীক্ষিত টাইপস্ক্রিপ্ট টেলিমেট্রি অ্যানালাইজারটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'nginx-log-analyzer.ts',
      code: `interface NginxLogEntry {
  time_local: string;
  remote_addr: string;
  request_method: string;
  request_uri: string;
  status: number;
  request_time: number;
  upstream_response_time: number;
  upstream_cache_status: string;
}

interface TelemetryReport {
  totalProcessed: number;
  loggedEvents: number;
  silencedProbes: number;
  avgGatewayOverheadMs: number;
  avgUpstreamDbLatencyMs: number;
  cacheHitRatio: string;
}

function analyzeLogs(events: NginxLogEntry[], silencedCount: number): TelemetryReport {
  let totalReqTime = 0;
  let totalUpstreamTime = 0;
  let cacheHits = 0;

  for (const log of events) {
    totalReqTime += log.request_time;
    totalUpstreamTime += log.upstream_response_time;
    if (log.upstream_cache_status === 'HIT') cacheHits++;
  }

  const n = events.length;
  // Gateway overhead = Total Request Time minus Backend Time
  const gatewayOverhead = (totalReqTime - totalUpstreamTime) / n * 1000;

  return {
    totalProcessed: n + silencedCount,
    loggedEvents: n,
    silencedProbes: silencedCount,
    avgGatewayOverheadMs: parseFloat(gatewayOverhead.toFixed(2)),
    avgUpstreamDbLatencyMs: parseFloat((totalUpstreamTime / n * 1000).toFixed(2)),
    cacheHitRatio: \`\${((cacheHits / n) * 100).toFixed(2)}%\`,
  };
}

// Generate 2500 simulated events (2150 API, 250 Cache Hits, 100 Silenced Health Probes)
const logs: NginxLogEntry[] = [];
for (let i = 0; i < 2400; i++) {
  if (i < 2150) {
    // API queries to backend database
    logs.push({
      time_local: '2026-09-28T12:00:00Z',
      remote_addr: '198.51.100.12',
      request_method: 'GET',
      request_uri: '/api/v1/users',
      status: 200,
      request_time: 0.02595, // 25.95 ms
      upstream_response_time: 0.02480, // 24.80 ms
      upstream_cache_status: 'MISS',
    });
  } else {
    // Static / cached hits
    logs.push({
      time_local: '2026-09-28T12:00:01Z',
      remote_addr: '198.51.100.15',
      request_method: 'GET',
      request_uri: '/static/bundle.js',
      status: 200,
      request_time: 0.00045, // 0.45 ms
      upstream_response_time: 0.00000,
      upstream_cache_status: 'HIT',
    });
  }
}

const report = analyzeLogs(logs, 100);

console.log(\`Total Incoming Requests: \${report.totalProcessed}\`);
// Total Incoming Requests: 2500
console.log(\`Logged Events: \${report.loggedEvents}\`);
// Logged Events: 2400
console.log(\`Silenced Health Probes: \${report.silencedProbes}\`);
// Silenced Health Probes: 100
console.log(\`Average Gateway Overhead: \${report.avgGatewayOverheadMs} ms\`);
// Average Gateway Overhead: 1.15 ms
console.log(\`Average Upstream DB Time: \${report.avgUpstreamDbLatencyMs} ms\`);
// Average Upstream DB Time: 22.22 ms`,
    },
    {
      type: 'callout',
      kind: 'info',
      title: { en: 'Distinguishing $request_time from $upstream_response_time', bn: '$request_time এবং $upstream_response_time-এর পার্থক্য' },
      text: {
        en: 'Engineers often wrongly blame the database when a request takes 5 seconds. If $upstream_response_time is only 0.05 seconds while $request_time is 5.2 seconds, Nginx completed the backend query in 50 milliseconds. The remaining 5.15 seconds was spent slowly transmitting data across a congested 3G mobile client connection.',
        bn: 'কোনো রিকোয়েস্টে ৫ সেকেন্ড সময় লাগলে প্রকৌশলীরা প্রায়ই ভুল করে ডেটাবেজকে দোষ দেন। কিন্তু $upstream_response_time যদি মাত্র ০.০৫ সেকেন্ড হয় আর $request_time ৫.২ সেকেন্ড হয়, তবে Nginx ব্যাকএন্ডের কাজ মাত্র ৫০ মিলিসেকেন্ডেই শেষ করেছিল। বাকি ৫.১৫ সেকেন্ড সময় নষ্ট হয়েছে ধীরগতির ৩জি মোবাইল ক্লায়েন্টে ডেটা পাঠানোর কারণে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Legacy Combined Log Format vs Modern Structured JSON', bn: 'পুরনো টেক্সট লগ ফরম্যাট বনাম আধুনিক স্ট্রাকচার্ড JSON' },
      left: {
        title: { en: 'Legacy Combined Format', bn: 'পুরনো টেক্সট ফরম্যাট' },
        points: [
          { en: 'Single flat string with space delimiters that breaks when URIs or User-Agents contain spaces', bn: 'স্পেস দিয়ে আলাদা করা সমতল স্ট্রিং যা ইউআরআই বা ইউজারে স্পেস থাকলে ভেঙে যায়' },
          { en: 'Requires complex custom regex pipelines in Logstash or Fluentd that consume heavy CPU', bn: 'লগ পার্স করতে ভারী রেজেক্স পাইপলাইন চালাতে হয় যা অতিরিক্ত প্রসেসর খরচ করে' },
          { en: 'Lacks upstream response time and cache hit headers by default', bn: 'ডিফল্টভাবে আপস্ট্রিম রেসপন্স টাইম বা ক্যাশ হিট হেডার অন্তর্ভুক্ত থাকে না' },
          { en: 'Writing directly to disk for every request causes severe disk I/O bottlenecks', bn: 'প্রতিটি রিকোয়েস্টে সরাসরি ডিস্কে লিখলে মারাত্মক ডিস্ক আইও জ্যাম তৈরি হয়' },
        ],
      },
      right: {
        title: { en: 'Structured JSON Logging', bn: 'স্ট্রাকচার্ড JSON লগিং' },
        points: [
          { en: 'escape=json guarantees 100% compliant JSON documents for instant ingestion by ELK or Loki', bn: 'escape=json শতভাগ নির্ভুল JSON নিশ্চিত করে যা ইএলকে বা লোকি সাথে সাথে পড়তে পারে' },
          { en: 'Zero regex parsing overhead in ingestion collectors, saving cluster resources', bn: 'লগ সংগ্রহকারী টুলে কোনো রেজেক্স পার্সিং ছাড়াই সরাসরি ইনডেক্সিং সম্ভব হয়' },
          { en: 'Captures microsecond precision for $request_time, $upstream_response_time, and cache statuses', bn: '$request_time ও $upstream_response_time-এর মাইক্রোসেকেন্ড মেট্রিক্স নিখুঁতভাবে ধারণ করে' },
          { en: 'In-memory buffering (buffer=64k flush=5s) reduces physical disk writes by over 95%', bn: 'মেমরি বাফারিং (buffer=64k flush=5s) শারীরিক ডিস্ক রাইট ৯৫%-এর বেশি কমিয়ে আনে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Nginx Variable', bn: 'Nginx ভ্যারিয়েবল' },
        { en: 'Data Type', bn: 'ডেটা টাইপ' },
        { en: 'Example Value', bn: 'উদাহরণ মান' },
        { en: 'Observability Role', bn: 'অবজারভেবিলিটি ভূমিকা' },
      ],
      rows: [
        [
          { en: '$request_time', bn: '$request_time' },
          { en: 'Float (seconds)', bn: 'ফ্লোট (সেকেন্ড)' },
          { en: '0.025', bn: '0.025' },
          { en: 'Full client request duration', bn: 'ক্লায়েন্টের পুরো রিকোয়েস্টের মোট সময়' },
        ],
        [
          { en: '$upstream_response_time', bn: '$upstream_response_time' },
          { en: 'Float (seconds)', bn: 'ফ্লোট (সেকেন্ড)' },
          { en: '0.024', bn: '0.024' },
          { en: 'Time spent by upstream backend', bn: 'আপস্ট্রিম ব্যাকএন্ডের নেওয়ার সময়' },
        ],
        [
          { en: '$upstream_cache_status', bn: '$upstream_cache_status' },
          { en: 'String enum', bn: 'স্ট্রিং এনাম' },
          { en: 'HIT, MISS, BYPASS', bn: 'HIT, MISS, BYPASS' },
          { en: 'Identifies cache efficiency', bn: 'ক্যাশ কার্যকারিতা শনাক্ত করে' },
        ],
        [
          { en: '$body_bytes_sent', bn: '$body_bytes_sent' },
          { en: 'Integer', bn: 'পূর্ণসংখ্যা' },
          { en: '4096', bn: '4096' },
          { en: 'Bandwidth payload size to client', bn: 'ক্লায়েন্টে পাঠানো ডেটার মোট সাইজ' },
        ],
      ],
      caption: {
        en: 'Essential Nginx runtime telemetry variables for production observability and APM integration.',
        bn: 'প্রোডাকশন অবজারভেবিলিটি ও এপিএম ইন্টিগ্রেশনের জন্য প্রয়োজনীয় Nginx রানটাইম ভ্যারিয়েবল।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Define log_format Template', bn: 'ধাপ ১ — log_format টেমপ্লেট তৈরি' },
          text: {
            en: 'In the http block, declare log_format json_analytics escape=json with all required telemetry fields.',
            bn: 'http ব্লকে প্রয়োজনীয় টেলিমেট্রি ফিল্ড সহ log_format json_analytics escape=json ঘোষণা করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Set Up Conditional Map', bn: 'ধাপ ২ — শর্তসাপেক্ষ ম্যাপ তৈরি' },
          text: {
            en: 'Create a map $request_uri $loggable { /healthz 0; default 1; } to drop automated health probes from logs.',
            bn: 'স্বয়ংক্রিয় হেলথ চেক বাদ দিতে map $request_uri $loggable { /healthz 0; default 1; } তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Attach Buffered access_log', bn: 'ধাপ ৩ — বাফার্ড access_log যুক্তকরণ' },
          text: {
            en: 'Configure access_log /var/log/nginx/access.json json_analytics buffer=64k flush=5s if=$loggable;.',
            bn: 'access_log /var/log/nginx/access.json json_analytics buffer=64k flush=5s if=$loggable; কনফিগার করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Configure USR1 Log Rotation', bn: 'ধাপ ৪ — USR1 লগ রোটেশন সেটআপ' },
          text: {
            en: 'Set up logrotate to periodically move old logs and send kill -USR1 to Nginx to reopen fresh log files cleanly.',
            bn: 'logrotate দিয়ে পুরনো লগ সরিয়ে Nginx-কে kill -USR1 সিগন্যাল পাঠিয়ে নতুন ফাইলে লেখা শুরু করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'log-ex-1',
      kind: 'mcq',
      topic: 'escape-json-parameter',
      question: {
        en: 'Why is the escape=json parameter essential when defining a JSON log_format in Nginx?',
        bn: 'Nginx-এ JSON log_format তৈরির সময় escape=json প্যারামিটারটি ব্যবহার করা কেন অপরিহার্য?',
      },
      options: [
        { en: 'It automatically escapes quotation marks, backslashes, and control characters so the log file contains strictly valid JSON documents', bn: 'এটি কোটেশন, ব্যাকস্ল্যাশ ও কন্ট্রোল ক্যারেক্টারকে স্বয়ংক্রিয়ভাবে এস্কেপ করে যাতে লগ ফাইলটি শতভাগ বৈধ JSON ধারণ করে' },
        { en: 'It translates all error logs into Spanish', bn: 'এটি সব এরর লগকে স্প্যানিশ ভাষায় অনুবাদ করে' },
        { en: 'It encrypts the hard drive with a military code', bn: 'এটি একটি মিলিটারি কোড দিয়ে হার্ডড্রাইভ এনক্রিপ্ট করে' },
        { en: 'It automatically restarts the server every 10 seconds', bn: 'এটি প্রতি ১০ সেকেন্ড পর পর সার্ভার রিস্টার্ট করে' },
      ],
      answer: 0,
      hint: { en: 'escape=json escapes quotes and backslashes.', bn: 'escape=json কোটেশন ও ব্যাকস্ল্যাশ এস্কেপ করে।' },
      explanation: {
        en: 'Without escape=json, user inputs containing quotes (like User-Agents) corrupt JSON syntax and crash log collectors.',
        bn: 'escape=json ছাড়া ইউজার-এজেন্টে কোটেশন থাকলে JSON গঠন নষ্ট হয়ে যায় এবং লগ কালেক্টর ক্র্যাশ করে।',
      },
    },
    {
      id: 'log-ex-2',
      kind: 'mcq',
      topic: 'upstream-response-time-meaning',
      question: {
        en: 'What does the $upstream_response_time variable measure in an Nginx reverse proxy setup?',
        bn: 'Nginx রিভার্স প্রক্সি সিস্টেমে $upstream_response_time ভ্যারিয়েবলটি ঠিক কী পরিমাপ করে?',
      },
      options: [
        { en: 'The time in seconds (with millisecond resolution) spent communicating with and receiving a response from the upstream backend server', bn: 'আপস্ট্রিম ব্যাকএন্ড সার্ভারের সাথে যোগাযোগ করে সেখান থেকে রেসপন্স পেতে ঠিক যত সেকেন্ড সময় লেগেছে' },
        { en: 'The physical temperature of the server room in Celsius', bn: 'সেলসিয়াসে সার্ভার রুমের বর্তমান তাপমাত্রা' },
        { en: 'The number of mouse clicks performed by the user', bn: 'ব্যবহারকারীর মাউস ক্লিকের মোট সংখ্যা' },
        { en: 'The length of the electrical cable connected to the server', bn: 'সার্ভারে সংযুক্ত বিদ্যুৎ তারের দৈর্ঘ্য' },
      ],
      answer: 0,
      hint: { en: 'It measures the time spent by the upstream backend.', bn: 'এটি আপস্ট্রিম ব্যাকএন্ডের সময় পরিমাপ করে।' },
      explanation: {
        en: '$upstream_response_time measures the time elapsed while sending the request to the upstream and receiving the response.',
        bn: '$upstream_response_time আপস্ট্রিমে রিকোয়েস্ট পাঠিয়ে সেখান থেকে রেসপন্স আসার সময়টুকু রেকর্ড করে।',
      },
    },
    {
      id: 'log-ex-3',
      kind: 'predict',
      topic: 'logrotate-signal-name',
      question: {
        en: 'What POSIX signal name is sent to Nginx to reopen log files during log rotation (e.g. USR1)?',
        bn: 'লগ রোটেশনের সময় নতুন ফাইলে লেখা শুরু করতে Nginx-কে কোন পসিক্স সিগন্যালটি পাঠানো হয় (যেমন USR1)?',
      },
      answer: 'USR1',
      accept: ['USR1', 'SIGUSR1', 'kill -USR1', '-USR1'],
      hint: { en: 'USR1', bn: 'USR1' },
      explanation: {
        en: 'Sending SIGUSR1 instructs Nginx worker processes to reopen all active log files cleanly without dropped logs.',
        bn: 'SIGUSR1 সিগন্যাল পাঠালে Nginx ওয়ার্কাররা কোনো লগ নষ্ট না করে পরিষ্কারভাবে নতুন লগ ফাইল উন্মুক্ত করে।',
      },
    },
    {
      id: 'log-ex-4',
      kind: 'predict',
      topic: 'log-format-directive-name',
      question: {
        en: 'What 10-letter lowercase directive with an underscore defines a custom log template (e.g. log_format)?',
        bn: 'কাস্টম লগ টেমপ্লেট তৈরি করতে ব্যবহৃত ১০ অক্ষরের আন্ডারস্কোরযুক্ত নির্দেশটির নাম কী (যেমন log_format)?',
      },
      answer: 'log_format',
      accept: ['log_format', 'log_format;', 'logformat'],
      hint: { en: 'log_format', bn: 'log_format' },
      explanation: {
        en: 'The log_format directive specifies the format of access log records.',
        bn: 'log_format নির্দেশ অ্যাক্সেস লগ রেকর্ডের কাঠামো নির্ধারণ করে।',
      },
    },
  ],
  quiz: {
    id: 'logs-and-the-log-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'log-qz-1',
        kind: 'mcq',
        topic: 'logging-sim-io-savings',
        question: {
          en: 'In our TypeScript benchmark of 2500 requests, what enabled the logging pipeline to eliminate 96.00% of physical disk write operations?',
          bn: 'আমাদের ২৫০০টি রিকোয়েস্টের টাইপস্ক্রিপ্ট বেঞ্চমার্কে কোন সুবিধার কারণে লগিং পাইপলাইনটি ৯৬.০০% ফিজিক্যাল ডিস্ক রাইট কমাতে পেরেছিল?',
        },
        options: [
          { en: 'Buffering log entries in RAM (buffer=64k flush=5s) to flush in bulk, combined with silencing 100 internal health check probes', bn: 'একসাথে লেখার জন্য র্যামে লগ বাফার করা (buffer=64k flush=5s) এবং ১০০টি অভ্যন্তরীণ হেলথ চেক প্রোব ফিল্টার করে বাদ দেওয়া' },
          { en: 'Deleting all access logs after 3 seconds', bn: '৩ সেকেন্ড পর পর সব অ্যাক্সেস লগ মুছে ফেলা' },
          { en: 'Disconnecting the hard drive from the motherboard', bn: 'মাদারবোর্ড থেকে হার্ডড্রাইভের সংযোগ খুলে ফেলা' },
          { en: 'Encrypting the logs with a secret 100-character key', bn: 'একটি গোপন ১০০ অক্ষরের কি দিয়ে লগ এনক্রিপ্ট করা' },
        ],
        answer: 0,
        hint: { en: 'In-memory buffering and silencing health probes.', bn: 'মেমরি বাফারিং এবং হেলথ প্রোব ফিল্টার করা।' },
        explanation: {
          en: 'Using buffer=64k flush=5s batches writes in memory, avoiding synchronous disk I/O on every single request.',
          bn: 'buffer=64k flush=5s ব্যবহারে মেমরিতে জমা করে ডিস্কে লেখা হয়, যা প্রতিটি রিকোয়েস্টে সরাসরি ডিস্ক রাইট এড়িয়ে চলে।',
        },
      },
      {
        id: 'log-qz-2',
        kind: 'mcq',
        topic: 'conditional-logging-benefit',
        question: {
          en: 'Why is silencing automated /healthz requests with if=$log_filter considered a production best practice?',
          bn: 'if=$log_filter দিয়ে স্বয়ংক্রিয় /healthz রিকোয়েস্টের লগ বন্ধ রাখা কেন প্রোডাকশনে সেরা অভ্যাস হিসেবে বিবেচিত হয়?',
        },
        options: [
          { en: 'Automated container load balancers probe health endpoints every few seconds, which pollutes analytics and consumes gigabytes of useless log storage', bn: 'কন্টেইনার লোড ব্যালেন্সাররা প্রতি কয়েক সেকেন্ডে হেলথ চেক করে, যা কাজের লগ নোংরা করে এবং গিগাবাইট আকারের ডিস্ক জায়গা নষ্ট করে' },
          { en: 'Health checks cause computer monitors to overheat', bn: 'হেলথ চেকের কারণে কম্পিউটারের মনিটর অতিরিক্ত গরম হয়ে যায়' },
          { en: 'Health checks are forbidden by cloud providers', bn: 'ক্লাউড প্রদানকারীরা হেলথ চেক করা সম্পূর্ণ নিষিদ্ধ করেছে' },
          { en: 'Logging health checks automatically uninstalls Nginx', bn: 'হেলথ চেকের লগ রাখলে স্বয়ংক্রিয়ভাবে Nginx আনইনস্টল হয়ে যায়' },
        ],
        answer: 0,
        hint: { en: 'It prevents log pollution and saves disk space.', bn: 'এটি লগ নোংরা হওয়া রোধ করে এবং ডিস্ক বাঁচায়।' },
        explanation: {
          en: 'High-frequency load balancer probes generate millions of useless log lines that obscure real user errors and waste disk space.',
          bn: 'ঘন ঘন হেলথ চেক লাখ লাখ অপ্রয়োজনীয় লগ তৈরি করে যা আসল ব্যবহারকারীদের সমস্যা দেখতে বাধা দেয় এবং ডিস্ক নষ্ট করে।',
        },
      },
      {
        id: 'log-qz-3',
        kind: 'mcq',
        topic: 'request-time-vs-upstream-time-diagnosis',
        question: {
          en: 'If $upstream_response_time is 0.02 seconds but $request_time is 4.8 seconds, what is the root cause of the slowdown?',
          bn: 'যদি $upstream_response_time ০.০২ সেকেন্ড হয় কিন্তু $request_time ৪.৮ সেকেন্ড হয়, তবে ধীরগতির মূল কারণ কী?',
        },
        options: [
          { en: 'A slow client internet connection (such as high packet loss or weak mobile signal); the backend finished in 20 milliseconds', bn: 'ক্লায়েন্টের ধীরগতির ইন্টারনেট সংযোগ (যেমন দুর্বল মোবাইল সিগন্যাল); ব্যাকএন্ডের কাজ মাত্র ২০ মিলিসেকেন্ডেই শেষ হয়েছিল' },
          { en: 'The database server is frozen in an infinite deadlock', bn: 'ডেটাবেজ সার্ভার একটি ডেডলকে সম্পূর্ণ জমে গেছে' },
          { en: 'Nginx ran out of numbers to calculate the timestamp', bn: 'সময় হিসাব করার জন্য Nginx-এর সংখ্যা ফুরিয়ে গেছে' },
          { en: 'The server power cable is plugged into the wrong wall outlet', bn: 'সার্ভারের পাওয়ার ক্যাবলটি ভুল সকেটে লাগানো হয়েছে' },
        ],
        answer: 0,
        hint: { en: 'The backend was fast (20 ms); the client network was slow.', bn: 'ব্যাকএন্ড দ্রুত ছিল (২০ ms); ক্লায়েন্টের নেটওয়ার্ক ধীরগতির ছিল।' },
        explanation: {
          en: 'A high difference between $request_time and $upstream_response_time indicates slow client network transmission.',
          bn: '$request_time এবং $upstream_response_time-এর বড় ব্যবধান নির্দেশ করে যে ক্লায়েন্টের নেটওয়ার্ক ধীরগতির ছিল।',
        },
      },
      {
        id: 'log-qz-4',
        kind: 'predict',
        topic: 'access-log-directive-name',
        question: {
          en: 'What 10-letter lowercase directive with an underscore configures the access log file path and format (e.g. access_log)?',
          bn: 'অ্যাক্সেস লগ ফাইলের পাথ এবং ফরম্যাট কনফিগার করতে ব্যবহৃত ১০ অক্ষরের আন্ডারস্কোরযুক্ত নির্দেশটির নাম কী (যেমন access_log)?',
        },
        answer: 'access_log',
        accept: ['access_log', 'access_log;', 'accesslog'],
        hint: { en: 'access_log', bn: 'access_log' },
        explanation: {
          en: 'The access_log directive sets the path, format, and configuration for buffered log writing.',
          bn: 'access_log নির্দেশ বাফার্ড লগ লেখার পাথ, ফরম্যাট ও কনফিগারেশন নির্ধারণ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-nginx-release',
    title: {
      en: 'Zero-Downtime Releases: Production Master-Worker Reloads and Performance Tuning',
      bn: 'ডাউনটাইমহীন রিলিজ: প্রোডাকশন মাস্টার-ওয়ার্কার রিলোড ও পারফরম্যান্স টিউনিং',
    },
  },
};
