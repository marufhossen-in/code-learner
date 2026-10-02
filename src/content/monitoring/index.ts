import type { Hub } from '../../lib/types';
import { MetricsAndTheMetricLesson } from './lessons/metrics-and-the-metric';
import { AlertsAndTheAlertLesson } from './lessons/alerts-and-the-alert';
import { DashboardsAndTheDashboardLesson } from './lessons/dashboards-and-the-dashboard';
import { TracesAndTheTraceLesson } from './lessons/traces-and-the-trace';
import { SlisAndTheSliLesson } from './lessons/slis-and-the-sli';
import { SlosAndTheSloLesson } from './lessons/slos-and-the-slo';
import { IncidentsAndTheIncidentLesson } from './lessons/incidents-and-the-incident';
import { TheMonitorReleaseLesson } from './lessons/the-monitor-release';

export const monitoringHub: Hub = {
  slug: 'monitoring',
  name: 'Monitoring',
  icon: '📈',
  tagline: {
    en: 'Unified cloud observability: metrics, alerting, distributed tracing, and incident response.',
    bn: 'সমন্বিত ক্লাউড অবজারভেবিলিটি: মেট্রিক্স, অ্যালার্টিং, ডিস্ট্রিবিউটেড ট্রেসিং এবং ইনসিডেন্ট রেসপন্স।',
  },
  intro: {
    en: 'Master end-to-end production monitoring from basic Prometheus metrics and PromQL to OpenTelemetry distributed tracing, Grafana dashboards, SLO error budgets, and on-call incident response.',
    bn: 'বেসিক প্রমিথিউস মেট্রিক্স ও PromQL থেকে ওপেনটেলিমেট্রি ডিস্ট্রিবিউটেড ট্রেসিং, গ্রাফানা ড্যাশবোর্ড, এসএলও এরর বাজেট এবং অন-কল ইনসিডেন্ট রেসপন্স পর্যন্ত প্রোডাকশন অবজারভেবিলিটি আয়ত্ত করুন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Metrics Foundation, Alerts, and Grafana Dashboards',
        bn: 'ধাপ ১ — মেট্রিক্স ভিত্তি, অ্যালার্ট এবং গ্রাফানা ড্যাশবোর্ড',
      },
      items: [
        {
          en: 'Prometheus metric types: Counters, Gauges, Histograms, and Summaries.',
          bn: 'প্রমিথিউস মেট্রিক্সের ধরন: কাউন্টার, গেজ, হিস্টোগ্রাম এবং সামারি।',
        },
        {
          en: 'PromQL alerting expressions, evaluation duration, and Alertmanager routing.',
          bn: 'PromQL অ্যালার্টিং এক্সপ্রেশন, মূল্যায়ন সময়সীমা এবং অ্যালার্টম্যানেজার রাউটিং।',
        },
        {
          en: 'Grafana visualization panels, variable templating, and executive overviews.',
          bn: 'গ্রাফানা ভিজ্যুয়ালাইজেশন প্যানেল, ভেরিয়েবল টেমপ্লেটিং এবং এক্সিকিউটিভ ওভারভিউ।',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Distributed Tracing, OpenTelemetry, and SLIs',
        bn: 'ধাপ ২ — ডিস্ট্রিবিউটেড ট্রেসিং, ওপেনটেলিমেট্রি এবং এসএলআই',
      },
      items: [
        {
          en: 'OpenTelemetry instrumentation, traces, spans, and W3C context propagation.',
          bn: 'ওপেনটেলিমেট্রি ইন্সট্রুমেন্টেশন, ট্রেস, স্প্যান এবং W3C কনটেক্সট প্রপাগেশন।',
        },
        {
          en: 'Service Level Indicators (SLIs): measuring availability, latency, and throughput.',
          bn: 'সার্ভিস লেভেল ইন্ডিকেটর (SLI): প্রাপ্যতা, লেটেন্সি এবং থ্রুপুট পরিমাপ।',
        },
        {
          en: 'Latency percentiles (p50, p95, p99) and histogram quantile calculation.',
          bn: 'লেটেন্সি পার্সেন্টাইল (p50, p95, p99) এবং হিস্টোগ্রাম কোয়ান্টাইল গণনা।',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — SLO Error Budgets, Incident Response, and Production Observability',
        bn: 'ধাপ ৩ — এসএলও এরর বাজেট, ইনসিডেন্ট রেসপন্স এবং প্রোডাকশন অবজারভেবিলিটি',
      },
      items: [
        {
          en: 'Service Level Objectives (SLOs) and multi-window multi-burn-rate alerting.',
          bn: 'সার্ভিস লেভেল অবজেক্টিভ (SLO) এবং মাল্টি-উইন্ডো মাল্টি-বার্ন-রেট অ্যালার্টিং।',
        },
        {
          en: 'Incident response lifecycle: triage, on-call paging, mitigation, and postmortems.',
          bn: 'ইনসিডেন্ট রেসপন্স চক্র: ট্রায়াজ, অন-কল পেজিং, সমস্যা নিরাময় এবং পোস্টমর্টেম।',
        },
        {
          en: 'OpenTelemetry Collector pipelines, sampling strategies, and high-cardinality control.',
          bn: 'ওপেনটেলিমেট্রি কালেক্টর পাইপলাইন, স্যাম্পলিং কৌশল এবং উচ্চ-কার্ডিনালিটি নিয়ন্ত্রণ।',
        },
      ],
    },
  ],
  lessons: [
    MetricsAndTheMetricLesson,
    AlertsAndTheAlertLesson,
    DashboardsAndTheDashboardLesson,
    TracesAndTheTraceLesson,
    SlisAndTheSliLesson,
    SlosAndTheSloLesson,
    IncidentsAndTheIncidentLesson,
    TheMonitorReleaseLesson,
  ],
  projects: [
    {
      title: {
        en: 'Full-Stack Observability Pipeline: Prometheus, OpenTelemetry, and Grafana',
        bn: 'ফুল-স্ট্যাক অবজারভেবিলিটি পাইপলাইন: প্রমিথিউস, ওপেনটেলিমেট্রি এবং গ্রাফানা',
      },
      brief: {
        en: 'Deploy a microservices observability stack collecting application metrics, distributed traces via OpenTelemetry collector, and centralized Grafana performance dashboards.',
        bn: 'অ্যাপ্লিকেশন মেট্রিক্স, ওপেনটেলিমেট্রি কালেক্টরের মাধ্যমে ডিস্ট্রিবিউটেড ট্রেস এবং সেন্ট্রালাইজড গ্রাফানা ড্যাশবোর্ড সংগ্রহকারী মাইক্রোসার্ভিস অবজারভেবিলিটি স্ট্যাক পরিচালনা করুন।',
      },
    },
    {
      title: {
        en: 'SRE Error Budget & Incident Automation: Multi-Burn-Rate Alerting',
        bn: 'এসআরই এরর বাজেট এবং ইনসিডেন্ট অটোমেশন: মাল্টি-বার্ন-রেট অ্যালার্টিং',
      },
      brief: {
        en: 'Implement mathematical multi-window burn rate alerts linked to PagerDuty webhooks, automating incident triage and deployment freezes when error budgets are threatened.',
        bn: 'পেজারডিউটি ওয়েবহুকের সাথে যুক্ত গাণিতিক মাল্টি-উইন্ডো বার্ন রেট অ্যালার্ট প্রয়োগ করুন, যা এরর বাজেট ঝুঁকিতে পড়লে স্বয়ংক্রিয়ভাবে ডিপ্লয়মেন্ট স্থগিত করে।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Prefer dimensional labels over embedding identifiers in metric names, while strictly avoiding high-cardinality values like user IDs or raw URLs.',
      bn: 'মেট্রিকের নামের মধ্যে আইডি না বসিয়ে ডাইমেনশনাল লেবেল ব্যবহার করুন এবং ইউজার আইডি বা র ইউআরএলের মতো উচ্চ-কার্ডিনালিটি মান কঠোরভাবে পরিহার করুন।',
    },
    {
      en: 'Structure alerting rules around user-facing symptoms like elevated error rates or degraded latency rather than internal causes like temporary CPU spikes.',
      bn: 'সাময়িক সিপিইউ স্পাইকের মতো অভ্যন্তরীণ কারণের চেয়ে ব্যবহারকারীদের প্রভাবিত করে এমন লক্ষণ যেমন ত্রুটির হার বা লেটেন্সির ওপর অ্যালার্ট নির্ধারণ করুন।',
    },
    {
      en: 'Propagate W3C tracecontext headers across every microservice HTTP and gRPC request to maintain unbroken distributed trace spans.',
      bn: 'অবিচ্ছিন্ন ডিস্ট্রিবিউটেড ট্রেস স্প্যান বজায় রাখতে প্রতিটি মাইক্রোসার্ভিস এইচটিটিপি এবং gRPC রিকোয়েস্টে W3C tracecontext হেডার প্রেরণ করুন।',
    },
    {
      en: 'Define objective Service Level Objectives (SLOs) backed by explicit rolling error budgets to arbitrate release velocity versus platform stability.',
      bn: 'রিলিজের গতি এবং সিস্টেমের স্থিতিশীলতার ভারসাম্য বজায় রাখতে নির্দিষ্ট মেয়াদের এরর বাজেট দ্বারা সমর্থিত উদ্দেশ্যভিত্তিক এসএলও (SLO) নির্ধারণ করুন।',
    },
    {
      en: 'Conduct blameless postmortems after production incidents, documenting root causes, timeline milestones, and actionable prevention engineering tasks.',
      bn: 'প্রোডাকশন ইনসিডেন্টের পরে ব্যক্তি-নিরপেক্ষ পোস্টমর্টেম পরিচালনা করুন, যেখানে মূল কারণ, সময়রেখা এবং ভবিষ্যতে প্রতিরোধের সুনির্দিষ্ট পদক্ষেপ লিপিবদ্ধ থাকবে।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental operational difference between a Counter and a Gauge in Prometheus?',
        bn: 'প্রমিথিউসে একটি কাউন্টার (Counter) এবং একটি গেজ (Gauge)-এর মধ্যে মৌলিক পরিচালনগত পার্থক্য কী?',
      },
      a: {
        en: 'A Counter is a cumulative metric that can only increase or reset to zero upon restart (ideal for total HTTP requests), while a Gauge is a metric that can arbitrarily go up and down (ideal for memory usage, active connections, or queue size).',
        bn: 'কাউন্টার হলো একটি ক্রমপুঞ্জিত মেট্রিক যা কেবল বৃদ্ধি পেতে পারে বা রিস্টার্টের সময় শূন্যে রিসেট হতে পারে (যেমন মোট এইচটিটিপি রিকোয়েস্ট), আর গেজ হলো এমন একটি মেট্রিক যা ইচ্ছামতো বাড়তে বা কমতে পারে (যেমন মেমোরি ব্যবহার, সক্রিয় সংযোগ বা কিউ সাইজ)।',
      },
    },
    {
      q: {
        en: 'Why do modern SRE teams prioritize symptom-based alerting over cause-based alerting?',
        bn: 'আধুনিক এসআরই দলগুলো কেন কারণ-ভিত্তিক অ্যালার্টের চেয়ে লক্ষণ-ভিত্তিক অ্যালার্টকে অগ্রাধিকার দেয়?',
      },
      a: {
        en: 'Cause-based alerts (such as CPU exceeding 80%) frequently fire false alarms during normal heavy batch jobs without impacting users. Symptom-based alerts (such as user-facing 5xx errors exceeding 1%) directly protect the customer experience and prevent alert fatigue.',
        bn: 'কারণ-ভিত্তিক অ্যালার্ট (যেমন সিপিইউ ৮০% ছাড়িয়ে যাওয়া) ব্যবহারকারীদের কোনো ক্ষতি না করেই সাধারণ কাজের সময় অযথা বাজতে পারে। লক্ষণ-ভিত্তিক অ্যালার্ট (যেমন গ্রাহকদের ৫০০ ত্রুটির হার ১% ছাড়ানো) সরাসরি ব্যবহারকারীর অভিজ্ঞতা রক্ষা করে এবং অ্যালার্টের ক্লান্তি দূর করে।',
      },
    },
    {
      q: {
        en: 'How does distributed tracing differ from traditional centralized log aggregation?',
        bn: 'প্রচলিত সেন্ট্রালাইজড লগিংয়ের চেয়ে ডিস্ট্রিবিউটেড ট্রেসিং কীভাবে আলাদা?',
      },
      a: {
        en: 'Logs capture isolated events at a single point in time within one service, making cross-boundary troubleshooting difficult. Distributed tracing correlates an end-to-end user request as it traverses dozens of microservices using a unique Trace ID, measuring exact latency breakdown per hop.',
        bn: 'লগ কেবল একটি সার্ভিসের নির্দিষ্ট মুহূর্তের বিচ্ছিন্ন ঘটনা তুলে ধরে, ফলে বহু সার্ভিসের সমস্যা বোঝা কঠিন হয়। ডিস্ট্রিবিউটেড ট্রেসিং একটি ইউনিক ট্রেস আইডি ব্যবহার করে ডজন ডজন মাইক্রোসার্ভিসের মধ্য দিয়ে যাওয়া পুরো রিকোয়েস্টের গতিপথ ও প্রতি ধাপে লেটেন্সি নিখুঁতভাবে পরিমাপ করে।',
      },
    },
    {
      q: {
        en: 'What is a multi-window multi-burn-rate alert, and why is it superior to static threshold alerting?',
        bn: 'মাল্টি-উইন্ডো মাল্টি-বার্ন-রেট অ্যালার্ট কী, এবং এটি কেন স্ট্যাটিক থ্রেশহোল্ড অ্যালার্টের চেয়ে বহুগুণ শ্রেষ্ঠ?',
      },
      a: {
        en: 'Static alerts fail to distinguish between catastrophic outages requiring immediate midnight paging and slow 1% error budget burns that can wait until morning. Multi-burn-rate alerts evaluate short (e.g. 1-hour) and long (e.g. 6-hour) windows simultaneously, firing urgent pages only when significant budget is rapidly consumed.',
        bn: 'স্ট্যাটিক অ্যালার্ট গভীর রাতে তাৎক্ষণিক পেজিং দাবি করা মারাত্মক বিভ্রাট এবং সকালে দেখলেও চলে এমন ধীর গতির ত্রুটির পার্থক্যের ফারাক বুঝতে পারে না। মাল্টি-বার্ন-রেট অ্যালার্ট একসাথে স্বল্প ও দীর্ঘ সময়সীমা মূল্যায়ন করে কেবল বাজেট দ্রুত শেষ হতে থাকলে জরুরি পেজ পাঠায়।',
      },
    },
  ],
  realWorld: [
    {
      en: 'High-traffic e-commerce platform monitoring checkout latencies during holiday flash sales using OpenTelemetry and Prometheus to isolate database bottlenecks.',
      bn: 'ছুটির দিনের ফ্ল্যাশ সেলের সময় ডেটাবেজ জটিলতা চিহ্নিত করতে ওপেনটেলিমেট্রি এবং প্রমিথিউস ব্যবহার করে চেকআউট লেটেন্সি পর্যবেক্ষণকারী হাই-ট্রাফিক ই-কমার্স প্ল্যাটফর্ম।',
    },
    {
      en: 'Financial core banking system utilizing SLO error budgets to halt risky feature deployments when reliability targets are threatened.',
      bn: 'নির্ভরযোগ্যতার লক্ষ্যমাত্রা ঝুঁকিতে পড়লে অনাকাঙ্ক্ষিত নতুন ডিপ্লয়মেন্ট স্থগিত রাখতে এসএলও এরর বাজেট ব্যবহারকারী আর্থিক কোর ব্যাংকিং ব্যবস্থা।',
    },
    {
      en: 'Global cloud SaaS infrastructure automating on-call PagerDuty escalation and incident mitigation during transcontinental network fiber cuts.',
      bn: 'আন্তঃমহাদেশীয় নেটওয়ার্ক অপটিক্যাল ফাইবার বিভ্রাটের সময় স্বয়ংক্রিয় অন-কল পেজারডিউটি ও ইনসিডেন্ট প্রশমন পরিচালনাকারী বৈশ্বিক ক্লাউড সাশ অবকাঠামো।',
    },
  ],
};
