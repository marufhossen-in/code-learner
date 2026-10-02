import type { Lesson } from '../../../lib/types';

export const theIncidentWatchtowerLesson: Lesson = {
  slug: 'the-incident-watchtower',
  tech: 'networking',
  title: {
    en: 'The Incident Watchtower — Observability, Metrics, and Network Diagnostics',
    bn: 'ইনসিডেন্ট ওয়াচটাওয়ার: অবজার্ভেবিলিটি, মেট্রিক্স ও নেটওয়ার্ক ডায়াগনস্টিকস'
  },
  summary: {
    en: 'Production network infrastructure must be defended with rigorous observability, disciplined diagnostics, and calm incident response. This capstone lesson covers Google SRE Four Golden Signals: Latency, Traffic, Errors, and Saturation. You will master the arithmetic of Service Level Objectives (SLOs) and Error Budget burn rates, and apply practical packet analysis using tools like tcpdump, traceroute, and curl timing breakdowns. Finally, we explore incident command structures and blameless postmortem cultures that turn production outages into long-term systemic reliability.',
    bn: 'প্রোডাকশন নেটওয়ার্ক অবকাঠামো সুরক্ষিত রাখতে প্রয়োজন গভীর অবজার্ভেবিলিটি, শৃঙ্খলিত ডায়াগনস্টিকস এবং শান্ত ইনসিডেন্ট রেসপন্স। এই সমাপনী পাঠে গুগল এসআরই (Google SRE) এর ফোর গোল্ডেন সিগন্যালস: লেটেন্সি, ট্রাফিক, এরর এবং স্যাচুরেশন আলোচনা করা হয়েছে। এখানে সার্ভিস লেভেল অবজেক্টিভস (SLO) এবং এরর বাজেট বার্ন রেটের গাণিতিক বিশ্লেষণ এবং tcpdump, traceroute ও curl টাইমিং বিশ্লেষণের মতো নেটওয়ার্ক টুলসের ব্যবহার শেখানো হয়েছে। পাশাপাশি ব্ল্যামলেস পোস্টমর্টেম সংস্কৃতির মাধ্যমে সিস্টেমের দীর্ঘমেয়াদী স্থায়িত্ব নিশ্চিত করার কৌশল তুলে ধরা হয়েছে।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'observability-and-golden-signals',
      text: {
        en: 'Network Observability and the Four Golden Signals',
        bn: 'নেটওয়ার্ক অবজার্ভেবিলিটি এবং ফোর গোল্ডেন সিগন্যালস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When unexpected outages strike your production network, you rely on structured observability rather than guesswork to restore services. Observability answers not only whether your system is broken, but why it is failing across thousands of interconnected nodes.',
        bn: 'যখন আপনার প্রোডাকশন নেটওয়ার্কে অপ্রত্যাশিত বিভ্রাট বা বিপর্যয় দেখা দেয়, তখন আপনি অন্ধ অনুমানের বদলে সুশৃঙ্খল অবজার্ভেবিলিটির ওপর ভরসা করেন। অবজার্ভেবিলিটি কেবল সিস্টেম নষ্ট কি না তা বলে না, বরং হাজার হাজার আন্তঃসংযুক্ত নোডের মাঝে কেন ত্রুটি ঘটেছে তাও নির্দেশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Google SRE framework defines Four Golden Signals for monitoring distributed network services. These signals are Latency (request duration, tracking 99th percentile tail spikes), Traffic (demand volume in requests or bandwidth), Errors (explicit failure status codes and dropped packets), and Saturation (fractional utilization of memory, thread pools, and network buffers).',
        bn: 'গুগল এসআরই ফ্রেমওয়ার্ক ডিস্ট্রিবিউটেড নেটওয়ার্ক সার্ভিস পর্যবেক্ষণের জন্য ৪টি সুবর্ণ সংকেত সংজ্ঞায়িত করেছে। সংকেতগুলো হলো: লেটেন্সি (রিকোয়েস্ট প্রসেসিং সময়, বিশেষত ৯৯তম পার্সেন্টাইল টেইল স্পাইক), ট্রাফিক (প্রতি সেকেন্ডে রিকোয়েস্ট সংখ্যা বা মেগাবিট ভলিউম), এরর (ব্যর্থ স্ট্যাটাস কোড ও ড্রপ হওয়া প্যাকেট), এবং স্যাচুরেশন (মেমরি, থ্রেড পুল ও নেটওয়ার্ক ইন্টারফেসের ব্যস্ততার অনুপাত)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'four-golden-signals',
          def: {
            en: 'The primary operational health metrics: Latency, Traffic, Errors, and Saturation.',
            bn: 'সিস্টেমের স্বাস্থ্য পরিমাপের প্রধান চারটি মেট্রিক: লেটেন্সি, ট্রাফিক, এরর এবং স্যাচুরেশন।'
          }
        },
        {
          term: 'error-budget-burn-rate',
          def: {
            en: 'The speed at which a service is consuming its allowable downtime budget during an incident.',
            bn: 'ইনসিডেন্ট চলাকালীন কোনো সার্ভিস তার অনুমোদিত ডাউনটাইম বাজেট কত দ্রুত শেষ করছে তার গতিবেগ।'
          }
        },
        {
          term: 'tail-latency-p99',
          def: {
            en: 'The 99th percentile response time, revealing performance degradation experienced by the slowest 1 percent of users.',
            bn: '৯৯তম পার্সেন্টাইল রেসপন্স টাইম, যা সবচেয়ে ধীরগতির ১ শতাংশ ব্যবহারকারীর অভিজ্ঞতার মান প্রদর্শন করে।'
          }
        },
        {
          term: 'blameless-postmortem',
          def: {
            en: 'A structured retrospection focusing on systemic architecture weaknesses and automated safeguards rather than individual human error.',
            bn: 'একটি মার্জিত পর্যালোচনা যা ব্যক্তির দোষ খোঁজার বদলে সিস্টেমের দুর্বলতা ও স্বয়ংক্রিয় নিরাপত্তা প্রাচীর তৈরিতে গুরুত্ব দেয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'diagnostic-toolbelt-table',
      text: {
        en: 'Diagnostic Toolbelt: Packet and Socket Analysis',
        bn: 'ডায়াগনস্টিক টুলবেল্ট: প্যাকেট ও সকেট বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When debugging live network incidents, engineers use purpose-built Linux diagnostic utilities to isolate whether failures stem from DNS resolution, routing hops, TCP socket queues, or application latency.',
        bn: 'লাইভ নেটওয়ার্ক ইনসিডেন্ট তদন্তের সময় ইঞ্জিনিয়ারিং দল বিভিন্ন বিশেষায়িত লিনাক্স টুলস ব্যবহার করে নিশ্চিত হয় যে সমস্যাটি ডিএনএস রেজোলিউশন, রাউটিং হপ, টিসিপি সকেট কিউ নাকি অ্যাপ্লিকেশন কোডের কারণে ঘটছে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Command Utility', bn: 'কমান্ড ইউটিলিটি' },
        { en: 'Network Layer', bn: 'নেটওয়ার্ক স্তর' },
        { en: 'Diagnostic Inspection Target', bn: 'ডায়াগনস্টিক পরীক্ষার ক্ষেত্র' },
        { en: 'Typical Incident Symptom', bn: 'সাধারণ ইনসিডেন্ট লক্ষণ' }
      ],
      rows: [
        [
          { en: 'dig +trace', bn: 'dig +trace' },
          { en: 'Application (DNS)', bn: 'অ্যাপ্লিকেশন (ডিএনএস)' },
          { en: 'Recursive delegation path from root nameservers to authoritative servers', bn: 'রুট সার্ভার থেকে অথরিটেটিভ সার্ভার পর্যন্ত ডিএনএস কুয়েরি ট্র্যাকিং' },
          { en: 'Domain resolution timeouts, NXDOMAIN, stale CNAME loops', bn: 'ডোমেন রেজোলিউশন টাইমআউট, ভুল CNAME লুপ' }
        ],
        [
          { en: 'mtr / traceroute', bn: 'mtr / traceroute' },
          { en: 'Internet Layer (IP / ICMP)', bn: 'ইন্টারনেট স্তর (আইপি / ICMP)' },
          { en: 'Hop-by-hop latency and packet loss across autonomous system transit links', bn: 'বিভিন্ন ট্রানজিট রাউটারের মধ্য দিয়ে হপ-বাই-হপ লেটেন্সি ও প্যাকেট লস' },
          { en: 'BGP routing blackholes, upstream ISP fiber cuts, severe congestion', bn: 'বিজিপি রাউটিং বিভ্রাট, অপটিক্যাল ফাইবার কাটা, ব্যান্ডউইথ জ্যাম' }
        ],
        [
          { en: 'tcpdump / Wireshark', bn: 'tcpdump / Wireshark' },
          { en: 'Transport Layer (TCP / UDP)', bn: 'ট্রান্সপোর্ট স্তর (টিসিপি / ইউডিপি)' },
          { en: 'Raw packet captures, TCP flag anomalies, window size collapses, RSTs', bn: 'কাঁচা প্যাকেট ক্যাপচার, টিসিপি ফ্ল্যাগ ত্রুটি, উইন্ডো সাইজ সংকোচন, RST' },
          { en: 'TCP handshake drops, silent SYN drops by firewalls, MTU mismatch', bn: 'টিসিপি হ্যান্ডশেক ড্রপ, ফায়ারওয়ালের নীরব SYN ড্রপ, MTU অমিল' }
        ],
        [
          { en: 'ss -tulpn', bn: 'ss -tulpn' },
          { en: 'Host OS Sockets', bn: 'হোস্ট ওএস সকেট' },
          { en: 'Listening ports, active socket states, Recv-Q and Send-Q buffer depths', bn: 'লিসেনিং পোর্ট, সক্রিয় সকেটের অবস্থা, Recv-Q এবং Send-Q বাফার গভীরতা' },
          { en: 'Socket buffer overflow, backlog exhaustion, unaccepted connections', bn: 'সকেট বাফার উপচে পড়া, এক্সেপ্ট না করা কানেকশন কিউ পূর্ণ হওয়া' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-burn-rate-code',
      text: {
        en: 'Executable Golden Signals and Error Budget Burn Rate Monitor',
        bn: 'গোল্ডেন সিগন্যালস এবং এরর বাজেট বার্ন রেট মনিটরের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program analyzes a window of 100 requests to compute error rates, 50th and 99th percentile latencies, and the Error Budget burn rate multiplier.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ১০০টি রিকোয়েস্টের একটি নমুনা উইন্ডো বিশ্লেষণ করে এরর রেট, ৫০তম ও ৯৯তম পার্সেন্টাইল লেটেন্সি এবং এরর বাজেট বার্ন রেট গুণক হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulating Golden Signals Monitoring and Error Budget Burn Rate
interface RequestLog {
  latencyMs: number;
  statusCode: number;
}

class ServiceMonitor {
  private allowedErrorRate: number = 0.001; // 0.1% budget for 99.9% SLO

  analyzeWindow(logs: RequestLog[]) {
    const totalRequests = logs.length;
    const errors = logs.filter(l => l.statusCode >= 500).length;
    const errorRate = errors / totalRequests;

    // Latency percentiles calculation
    const sortedLatencies = logs.map(l => l.latencyMs).sort((a, b) => a - b);
    const p50 = sortedLatencies[Math.floor(totalRequests * 0.5)];
    const p99 = sortedLatencies[Math.floor(totalRequests * 0.99)];

    // Burn rate: observed error rate divided by allowed error rate
    const burnRate = errorRate / this.allowedErrorRate;

    return {
      totalRequests,
      errorRatePct: (errorRate * 100).toFixed(2),
      p50LatencyMs: p50,
      p99LatencyMs: p99,
      burnRateMultiplier: burnRate.toFixed(1)
    };
  }
}

const monitor = new ServiceMonitor();
// Simulate 100 requests: 98 successes and 2 failures (2% error rate)
const sampleLogs: RequestLog[] = [];
for (let i = 0; i < 98; i++) {
  sampleLogs.push({ latencyMs: 25 + (i % 30), statusCode: 200 });
}
sampleLogs.push({ latencyMs: 450, statusCode: 500 });
sampleLogs.push({ latencyMs: 520, statusCode: 503 });

const report = monitor.analyzeWindow(sampleLogs);
console.log('Requests:', report.totalRequests);
console.log('Error Rate:', report.errorRatePct + '%');
console.log('p50 Latency:', report.p50LatencyMs + 'ms');
console.log('p99 Latency:', report.p99LatencyMs + 'ms');
console.log('Burn Rate Multiplier:', report.burnRateMultiplier + 'x');

// prints: Requests: 100
// prints: Error Rate: 2.00%
// prints: p50 Latency: 39ms
// prints: p99 Latency: 520ms
// prints: Burn Rate Multiplier: 20.0x`
    },
    {
      type: 'heading',
      id: 'incident-response-command',
      text: {
        en: 'Incident Command and Blameless Postmortems',
        bn: 'ইনসিডেন্ট কমান্ড এবং দোষমুক্ত পোস্টমর্টেম সংস্কৃতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Effective incident response relies on clear separation of duties. The Incident Commander coordinates the triage process, the Operations Lead executes infrastructure remediations, and the Communications Lead updates customer status pages. Once the outage is mitigated, the team conducts a blameless postmortem. Instead of assigning individual blame, the review investigates systemic root causes: missing automated circuit breakers, inadequate alerting thresholds, or fragile retry policies.',
        bn: 'কার্যকর ইনসিডেন্ট রেসপন্স সুস্পষ্ট দায়িত্ব বণ্টনের ওপর নির্ভর করে। ইনসিডেন্ট কমান্ডার পুরো উদ্ধার কার্যক্রম সমন্বয় করেন, অপারেশনস লিড অবকাঠামোগত সমাধান বাস্তবায়ন করেন এবং কমিউনিকেশনস লিড ব্যবহারকারীদের স্ট্যাটাস পেইজে সঠিক তথ্য আপডেট করেন। বিপর্যয় কাটানোর পর দলটি একটি দোষমুক্ত পোস্টমর্টেম পরিচালনা করে। এখানে ব্যক্তির ওপর দোষ চাপানোর বদলে সিস্টেমের দুর্বলতা তদন্ত করা হয়: যেমন স্বয়ংক্রিয় সার্কিট ব্রেকারের অনুপস্থিতি, সতর্কবার্তার অভাব বা ক্ষতিকর রিট্রাই পলিসি।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Monitor the Four Golden Signals: Track Latency, Traffic, Errors, and Saturation to maintain holistic network visibility.',
          bn: 'ফোর গোল্ডেন সিগন্যালস নজর রাখুন: সম্পূর্ণ দৃশ্যমানতা পেতে লেটেন্সি, ট্রাফিক, এরর এবং স্যাচুরেশন পর্যবেক্ষণ করুন।'
        },
        {
          en: 'Burn rate alerting prevents false alarms: Trigger pages on Error Budget burn rates rather than single transient errors.',
          bn: 'বার্ন রেট অ্যালার্টে সঠিক পেজিং: সাময়িক বিচ্ছিন্ন ভুলের বদলে এরর বাজেট দ্রুত ক্ষয়ের ওপর ভিত্তি করে পেজ বা অ্যালার্ট দিন।'
        },
        {
          en: 'Target p99 tail latency: Averages hide pain; 99th percentile metrics reveal true degradation for edge users.',
          bn: 'p99 টেইল লেটেন্সিতে নজর দিন: গড় হিসাব সমস্যা লুকায়; ৯৯তম পার্সেন্টাইল মেট্রিকই ধীরগতির ব্যবহারকারীদের কষ্ট তুলে ধরে।'
        },
        {
          en: 'Adopt blameless postmortems: Convert incident pain into automated architectural guardrails and durable documentation.',
          bn: 'দোষমুক্ত পোস্টমর্টেম চর্চা করুন: বিপর্যয়ের অভিজ্ঞতাকে কাজে লাগিয়ে সিস্টেমে স্বয়ংক্রিয় গার্ডরেইল ও উন্নত ডকুমেন্টেশন তৈরি করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'watchtower-ex1',
      kind: 'mcq',
      topic: 'golden-signals-saturation',
      question: {
        en: 'In the Google SRE Four Golden Signals, what does the "Saturation" metric measure?',
        bn: 'গুগল এসআরই-এর ফোর গোল্ডেন সিগন্যালস অনুসারে "স্যাচুরেশন" মেট্রিকটি কী পরিমাপ করে?'
      },
      options: [
        {
          en: 'How close the most constrained system resource (such as CPU, memory, socket buffers, or thread pools) is to 100 percent capacity',
          bn: 'সিস্টেমের সবচেয়ে সীমাবদ্ধ সম্পদটি (যেমন সিপিইউ, মেমরি, সকেট বাফার বা থ্রেড পুল) ১০০ শতাংশ পূর্ণ ক্ষমতার কত কাছাকাছি পৌঁছেছে'
        },
        {
          en: 'The color depth of the computer monitor display in bits',
          bn: 'কম্পিউটার মনিটরের ডিসপ্লে রঙের গভীরতা কত বিট'
        },
        {
          en: 'The physical temperature of the outdoor atmosphere in summer',
          bn: 'গ্রীষ্মকালে বাইরের বায়ুমণ্ডলের ফিজিক্যাল তাপমাত্রা কত'
        },
        {
          en: 'The volume level of audio speakers in the data center',
          bn: 'ডাটা সেন্টারের অডিও স্পিকারের শব্দের মাত্রা কত'
        }
      ],
      answer: 0,
      hint: {
        en: 'A service might show low latency now, but if its connection pool is at 98% saturation, the next small traffic surge will cause sudden failure.',
        bn: 'এখন লেটেন্সি কম থাকলেও কানেকশন পুল ৯৮% পূর্ণ থাকলে ট্রাফিকের সামান্য চাপে সিস্টেম সাথে সাথে বিকল হবে।'
      },
      explanation: {
        en: 'Saturation tracks resource fullness before performance falls off a cliff, acting as an early warning for impending exhaustion.',
        bn: 'স্যাচুরেশন রিসোর্স ফুরিয়ে যাওয়ার আগেই আসন্ন বিপদের পূর্বসংকেত প্রদান করে প্রকৌশলীদের সতর্ক করে।'
      }
    },
    {
      id: 'watchtower-ex2',
      kind: 'mcq',
      topic: 'tail-latency-p99-importance',
      question: {
        en: 'Why is tracking 99th percentile (p99) latency far more critical for production reliability than tracking average latency?',
        bn: 'প্রোডাকশনের নির্ভরযোগ্যতা নিশ্চিত করতে গড় লেটেন্সির চেয়ে ৯৯তম পার্সেন্টাইল (p99) লেটেন্সি পর্যবেক্ষণ করা কেন অনেক বেশি গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'Averages mask extreme delays: 95 percent of requests might be fast while the slowest requests suffer multi-second timeouts and blocked threads',
          bn: 'গড় হিসাব চরম লেটেন্সি আড়াল করে রাখে: ৯৫ শতাংশ রিকোয়েস্ট দ্রুত হলেও বাকি রিকোয়েস্টগুলোতে কয়েক সেকেন্ডের টাইমআউট ও ব্লকিং ঘটতে পারে'
        },
        {
          en: 'Because computer math algorithms can only compute percentiles, not averages',
          bn: 'কারণ কম্পিউটার কেবল পার্সেন্টাইল হিসাব করতে পারে, কোনো গড় হিসাব করতে পারে না'
        },
        {
          en: 'Because average latency was banned by international networking standards in 2015',
          bn: 'কারণ ২০১৫ সালে আন্তর্জাতিক স্ট্যান্ডার্ড অনুযায়ী গড় লেটেন্সি ব্যবহার নিষিদ্ধ করা হয়েছে'
        },
        {
          en: 'Because p99 latency automatically increases internet connection speeds',
          bn: 'কারণ p99 লেটেন্সি ইন্টারনেটের ব্যান্ডউইথ গতি স্বয়ংক্রিয়ভাবে বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If 99 requests take 10ms and 1 request takes 10000ms, the average is ~110ms, disguising a catastrophic 10-second freeze.',
        bn: '৯৯টি রিকোয়েস্টে ১০ মিলিসেকেন্ড আর ১টিতে ১০ সেকেন্ড লাগলে গড় দেখাবে সামান্য বেশি, যা ১০ সেকেন্ডের ভয়াবহ জ্যামকে ঢেকে ফেলে।'
      },
      explanation: {
        en: 'p99 latency exposes severe tail outliers, thread pool starvation, and garbage collection freezes that arithmetic means completely hide.',
        bn: 'p99 লেটেন্সি চরম টেইল আউ hisবহারকারীদের ভয়াবহ অভিজ্ঞতা ও সিস্টেমের জ্যাম উন্মোচন করে যা গড় মান আড়াল করে দেয়।'
      }
    },
    {
      id: 'watchtower-ex3',
      kind: 'mcq',
      topic: 'blameless-postmortem-objective',
      question: {
        en: 'What is the foundational philosophy behind conducting a "blameless" postmortem after a major network outage?',
        bn: 'একটি বড় নেটওয়ার্ক বিভ্রাটের পর "দোষমুক্ত" বা ব্ল্যামলেস পোস্টমর্টেম পরিচালনার মূল দর্শন কী?'
      },
      options: [
        {
          en: 'Human error is viewed as a symptom of flawed tools and brittle systems, so the focus is placed on building automated architectural guardrails and better defenses',
          bn: 'মানুষের ভুলকে ত্রুটিপূর্ণ সিস্টেম ও সরঞ্জামের লক্ষণ হিসেবে বিবেচনা করা হয়, তাই ব্যক্তির শাস্তির বদলে সিস্টেমে স্বয়ংক্রিয় গার্ডরেইল ও উন্নত সুরক্ষা ব্যবস্থা তৈরিতে মনোযোগ দেওয়া হয়'
        },
        {
          en: 'To determine which employee should have their salary reduced',
          bn: 'কোন কর্মীর বেতন কেটে নেওয়া উচিত তা নির্ধারণ করতে'
        },
        {
          en: 'To delete all server logs so nobody discovers what broke',
          bn: 'সমস্ত সার্ভার লগ মুছে ফেলতে যাতে কেউ জানতে না পারে কী ভেঙেছিল'
        },
        {
          en: 'To blame the internet service provider and close the investigation',
          bn: 'ইন্টারনেট প্রোভাইডারের ওপর দোষ চাপিয়ে তদন্ত বন্ধ করে দিতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Blaming people fosters fear and concealment. Fixing systemic root causes makes systems permanently resilient.',
        bn: 'ব্যক্তিকে দোষ দিলে তথ্য গোপনের ভয় তৈরি হয়। সিস্টেম ঠিক করলে ভবিষ্যৎ দুর্ঘটনা চিরতরে বন্ধ হয়।'
      },
      explanation: {
        en: 'Blameless cultures encourage transparent disclosure, allowing teams to engineer robust systemic preventions against recurring faults.',
        bn: 'দোষমুক্ত সংস্কৃতি সত্য তথ্য প্রকাশে উৎসাহিত করে এবং পুনরাবৃত্তি ঠেকাতে সিস্টেমে টেকসই সমাধান যোগ করে।'
      }
    },
    {
      id: 'watchtower-ex4',
      kind: 'mcq',
      topic: 'linux-socket-diagnostics-ss',
      question: {
        en: 'When diagnosing a backend server rejecting connections with SYN floods, what does a non-zero Recv-Q on a listening socket in "ss -lnt" indicate?',
        bn: 'একটি ব্যাকএন্ড সার্ভারে কানেকশন রিজেক্ট হওয়ার সমস্যা তদন্তকালে "ss -lnt" কমান্ডে লিসেনিং সকেটের Recv-Q মান শূন্যের বেশি থাকা কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The application accept queue is full because the process cannot accept new completed TCP handshakes fast enough',
          bn: 'অ্যাপ্লিকেশনের এক্সেপ্ট কিউ পূর্ণ হয়ে গেছে কারণ প্রসেসটি পর্যাপ্ত দ্রুত গতিতে নতুন সম্পন্ন হওয়া টিসিপি হ্যান্ডশেক গ্রহণ করতে পারছে না'
        },
        {
          en: 'The computer hard drive is running in reverse',
          bn: 'কম্পিউটারের হার্ড ড্রাইভ উল্টো দিকে ঘুরছে'
        },
        {
          en: 'The network interface card has permanently lost its MAC address',
          bn: 'নেটওয়ার্ক কার্ড তার ম্যাক (MAC) অ্যাড্রেস চিরতরে হারিয়ে ফেলেছে'
        },
        {
          en: 'The operating system kernel has deleted its own routing table',
          bn: 'অপারেটিং সিস্টেম কার্নেল নিজের রাউটিং টেবিল মুছে ফেলেছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'For listening sockets in Linux, Recv-Q indicates the backlog of established TCP connections waiting for accept().',
        bn: 'লিনাক্সে লিসেনিং সকেটের Recv-Q হলো accept() ফাংশনের অপেক্ষায় থাকা সংযোগের কিউ।'
      },
      explanation: {
        en: 'A saturated listen Recv-Q means the application is CPU-bound or blocked, unable to accept connections before the listen backlog overflows.',
        bn: 'লিসেন Recv-Q উপচে পড়া মানে অ্যাপ্লিকেশন ব্লক হয়ে আছে এবং সময়মতো কানেকশন গ্রহণ করতে পারছে না।'
      }
    }
  ],
  quiz: {
    id: 'the-incident-watchtower-quiz',
    title: {
      en: 'Network Observability and Incident Response Quiz',
      bn: 'নেটওয়ার্ক অবজার্ভেবিলিটি ও ইনসিডেন্ট রেসপন্স কুইজ'
    },
    questions: [
      {
        id: 'iw-q1',
        kind: 'mcq',
        topic: 'sli-slo-sla-distinction',
        question: {
          en: 'What is the precise distinction between an SLI, an SLO, and an SLA in production site reliability engineering?',
          bn: 'সাইট রিলায়েবিলিটি ইঞ্জিনিয়ারিংয়ে SLI, SLO এবং SLA এর মধ্যে সুনির্দিষ্ট পার্থক্য কী?'
        },
        options: [
          {
            en: 'SLI is the measured metric; SLO is the internal target objective; SLA is the external legal contract with financial penalties',
            bn: 'SLI হলো পরিমাপকৃত মেট্রিক; SLO হলো অভ্যন্তরীণ নির্ভরযোগ্যতার লক্ষ্য; আর SLA হলো আর্থিক জরিমানা সম্বলিত ক্লায়েন্টের সাথে আইনি চুক্তি'
          },
          {
            en: 'They are three different programming languages used to write web servers',
            bn: 'এগুলো ওয়েব সার্ভার তৈরির জন্য ব্যবহৃত তিনটি ভিন্ন প্রোগ্রামিং ভাষা'
          },
          {
            en: 'SLI, SLO, and SLA are encryption ciphers created by the NSA',
            bn: 'SLI, SLO ও SLA হলো এনএসএ কর্তৃক নির্মিত তিনটি ক্রিপ্টোগ্রাফিক সাইফার'
          },
          {
            en: 'They are physical router cables used in fiber optic networks',
            bn: 'এগুলো অপটিক্যাল ফাইবার নেটওয়ার্কে ব্যবহৃত তিনটি ফিজিক্যাল তার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think: Indicator (measured fact), Objective (internal goal), Agreement (commercial contract).',
          bn: 'মনে রাখুন: Indicator (বাস্তব মান), Objective (অভ্যন্তরীণ লক্ষ্য), Agreement (আইনি চুক্তি)।'
        },
        explanation: {
          en: 'SLIs measure actual behavior, SLOs define engineering reliability targets, and SLAs govern legal business obligations.',
          bn: 'SLI পরিমাপ করে বর্তমান অবস্থা, SLO নির্ধারণ করে ইঞ্জিনিয়ারিং লক্ষ্য, আর SLA রক্ষা করে ব্যবসায়িক চুক্তি।'
        }
      },
      {
        id: 'iw-q2',
        kind: 'mcq',
        topic: 'burn-rate-alerting-rationale',
        question: {
          en: 'Why is alerting on Error Budget burn rates (e.g. 14.4x burn rate over 1 hour) superior to alerting on raw error percentage spikes?',
          bn: 'শুধুমাত্র সাময়িক এরর হারের বদলে এরর বাজেট বার্ন রেটের (যেমন ১ ঘণ্টায় ১৪.৪ গুণ দ্রুত খরচ) ওপর সতর্কতা জারি করা কেন অনেক বেশি কার্যকর?'
        },
        options: [
          {
            en: 'It directly ties alert urgency to the business threat of consuming the entire SLO budget, preventing alert fatigue from small harmless bursts',
            bn: 'এটি সতর্কতার গুরুত্বকে পুরো এসএলও বাজেট শেষ হওয়ার বাস্তব ঝুঁকির সাথে মেলায়, ফলে ক্ষণস্থায়ী ছোটখাটো স্পাইক নিয়ে অহেতুক সতর্কতার ক্লান্তি দূর হয়'
          },
          {
            en: 'Because burn rate alerts require zero network bandwidth to transmit',
            bn: 'কারণ বার্ন রেট অ্যালার্ট পাঠাতে কোনো ব্যান্ডউইথ খরচ হয় না'
          },
          {
            en: 'Because raw error rates cannot be displayed on computer monitors',
            bn: 'কারণ কম্পিউটারের স্ক্রিনে সাধারণ এরর রেট দেখানো সম্ভব নয়'
          },
          {
            en: 'Burn rate alerting was mandated by the United States Congress in 2021',
            bn: '২০২১ সালে মার্কিন কংগ্রেস আইন করে বার্ন রেট অ্যালার্ট বাধ্যতামূলক করেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A 2% error rate for 5 seconds is harmless noise. A 2% error rate sustained for 2 hours consumes the entire monthly budget and requires immediate action.',
          bn: '৫ সেকেন্ডের ২% এররে সমস্যা নেই। কিন্তু ২ ঘণ্টা ধরে ২% এরর চললে পুরো মাসের বাজেট শেষ হয়ে যাবে, তাই তাৎক্ষণিক হস্তক্ষেপ প্রয়োজন।'
        },
        explanation: {
          en: 'Burn rate alerts quantify business impact and time-to-exhaustion, filtering out benign transient spikes while paging on genuine existential outages.',
          bn: 'বার্ন রেট অ্যালার্ট সিস্টেম বিপর্যয়ের প্রকৃত ঝুঁকি নিরূপণ করে অপ্রয়োজনীয় অ্যালার্ট কমায় এবং আসল বিপদে দ্রুত সাড়া দিতে সাহায্য করে।'
        }
      },
      {
        id: 'iw-q3',
        kind: 'mcq',
        topic: 'incident-commander-primary-role',
        question: {
          en: 'During a high-severity production outage, what is the primary responsibility of the Incident Commander (IC)?',
          bn: 'প্রোডাকশনে গুরুতর বিভ্রাট বা দুর্ঘটনার সময় ইনসিডেন্ট কমান্ডারের (IC) প্রধান দায়িত্ব কী?'
        },
        options: [
          {
            en: 'To maintain high-level situational awareness, direct diagnostic delegation, and make mitigation decisions without getting lost in low-level code debugging',
            bn: 'সার্বিক পরিস্থিতির ওপর নজর রাখা, কাজ ভাগ করে দেওয়া এবং মূল সিদ্ধান্ত গ্রহণ করা, নিজে সরাসরি কোড ডিবাগিংয়ে আটকে না গিয়ে সমন্বয় রক্ষা করা'
          },
          {
            en: 'To immediately write and deploy new software code directly to production servers',
            bn: 'সাথে সাথে নিজে কোড লিখে সরাসরি প্রোডাকশন সার্ভারে পুশ করা'
          },
          {
            en: 'To answer telephone support calls from individual angry customers',
            bn: 'ব্যক্তিগতভাবে ক্ষুব্ধ কাস্টমারদের টেলিফোন কলের উত্তর দেওয়া'
          },
          {
            en: 'To restart every database server in the company simultaneously',
            bn: 'কোম্পানির সমস্ত ডেটাবেস সার্ভার একসাথে রিস্টার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'The commander leads the ship from the bridge; if the captain goes down to shovel coal, nobody is steering the ship.',
          bn: 'কমান্ডারের কাজ জাহাজ চালানো; অধিনায়ক নিজে কয়লা তুলতে গেলে জাহাজ চালানোর মতো কেউ থাকবে না।'
        },
        explanation: {
          en: 'The Incident Commander maintains tactical oversight and delegates technical investigation, ensuring coordinated recovery.',
          bn: 'ইনসিডেন্ট কমান্ডার কৌশলগত নজরদারি বজায় রাখেন এবং কাজ বণ্টন করে শৃঙ্খলিত উদ্ধার প্রক্রিয়া পরিচালনা করেন।'
        }
      },
      {
        id: 'iw-q4',
        kind: 'mcq',
        topic: 'curl-timing-breakdown-ttfb',
        question: {
          en: 'When diagnosing web performance using "curl -w", what does high "time_starttransfer" (Time to First Byte / TTFB) accompanied by low "time_connect" indicate?',
          bn: '"curl -w" দিয়ে ওয়েব পারফরম্যান্স বিশ্লেষণের সময় যদি "time_connect" অত্যন্ত দ্রুত হয় কিন্তু "time_starttransfer" (TTFB) অনেক বেশি হয়, তবে তা কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The network transport and TLS handshake were fast, but the backend application server took a long time to process the request and generate the first byte of response',
            bn: 'নেটওয়ার্ক সংযোগ ও টিএলএস হ্যান্ডশেক অত্যন্ত দ্রুত সম্পন্ন হয়েছে, কিন্তু ব্যাকএন্ড অ্যাপ্লিকেশন সার্ভার রিকোয়েস্ট প্রসেস করতে এবং প্রথম বাইট তৈরি করতে দীর্ঘ সময় নিয়েছে'
          },
          {
            en: 'The physical optical fiber cable under the ocean was disconnected',
            bn: 'সমুদ্রের নিচের অপটিক্যাল ফাইবার তারটি বিচ্ছিন্ন হয়ে গেছে'
          },
          {
            en: 'The client computer is missing an operating system',
            bn: 'ক্লায়েন্টের কম্পিউটারে কোনো অপারেটিং সিস্টেম নেই'
          },
          {
            en: 'The DNS root server returned an invalid IP address',
            bn: 'ডিএনএস রুট সার্ভার একটি ভুল আইপি ঠিকানা ফেরত পাঠিয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fast connect means the network pipe is clear. High starttransfer points directly to backend CPU or slow database queries.',
          bn: 'কানেকশন দ্রুত হওয়া মানে পাইপ ফাঁকা; কিন্তু ডাটা আসতে দেরি হওয়া মানে ব্যাকএন্ড ডাটাবেস বা সার্ভার কোড ধীরগতির।'
        },
        explanation: {
          en: 'A high TTFB paired with low connect latency cleanly isolates bottlenecks to backend application execution rather than network transport.',
          bn: 'দ্রুত কানেকশনের পর উচ্চ TTFB নিশ্চিত করে যে সমস্যাটি নেটওয়ার্কে নয়, বরং ব্যাকএন্ড কোড বা ডেটাবেসের ভেতর রয়েছে।'
        }
      }
    ]
  }
};
