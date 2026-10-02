import type { Hub } from '../../lib/types';
import { FrontsAndTheFrontLesson } from './lessons/fronts-and-the-front';
import { BacksAndTheBackLesson } from './lessons/backs-and-the-back';
import { RoutesAndTheRouteLesson } from './lessons/routes-and-the-route';
import { HeadersAndTheHeadLesson } from './lessons/headers-and-the-head';
import { CertsAndTheCertLesson } from './lessons/certs-and-the-cert';
import { SessionsAndTheSessionLesson } from './lessons/sessions-and-the-session';
import { HealthsAndTheHealthLesson } from './lessons/healths-and-the-health';
import { TheReverseReleaseLesson } from './lessons/the-reverse-release';

export const reverseProxyHub: Hub = {
  slug: 'reverse-proxy',
  name: 'Reverse Proxy',
  icon: '🔀',
  tagline: {
    en: 'Master reverse proxy engineering: ingress traffic control, upstream load balancing, TLS termination, proxy headers, and zero-downtime release routing.',
    bn: 'রিভার্স প্রক্সি ইঞ্জিনিয়ারিং আয়ত্ত করুন: ইনগ্রেস ট্রাফিক নিয়ন্ত্রণ, আপস্ট্রিম লোড ব্যালেন্সিং, TLS টার্মিনেশন, প্রক্সি হেডার ও ডাউনটাইমহীন রাউটিং।',
  },
  intro: {
    en: 'A reverse proxy sits at the edge of your network between client browsers and backend servers, intercepting requests to provide security, traffic distribution, SSL offloading, and intelligent routing. This track guides you from core proxy mechanics through upstream pool load balancing, SSL/TLS certificate offloading, session affinity, active health probing, and zero-downtime canary deployment orchestration.',
    bn: 'রিভার্স প্রক্সি ক্লায়েন্ট ব্রাউজার এবং ব্যাকএন্ড সার্ভারের মাঝামাঝি নেটওয়ার্কের প্রবেশদ্বারে অবস্থান করে নিরাপত্তা প্রদান, ট্রাফিক বণ্টন, SSL অফলোডিং এবং বুদ্ধিমত্তাভিত্তিক রাউটিং নিশ্চিত করে। এই ট্র্যাকটি প্রাথমিক প্রক্সি মেকানিক্স থেকে শুরু করে আপস্ট্রিম পুল ব্যালেন্সিং, SSL/TLS অফলোডিং, সেশন অ্যাফিনিটি, সক্রিয় হেলথ চেক এবং ডাউনটাইমহীন ক্যানারি ডিপ্লয়মেন্ট বিস্তারিতভাবে শেখাবে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Ingress Routing and Upstream Balancing', bn: 'ধাপ ১ — ইনগ্রেস রাউটিং ও আপস্ট্রিম ব্যালেন্সিং' },
      items: [
        { en: 'Edge front proxies: intercepting inbound client requests, masking origin IPs, and shielding backend networks.', bn: 'এজ ফ্রন্ট প্রক্সি: ক্লায়েন্ট রিকোয়েস্ট গ্রহণ, ব্যাকএন্ড আইপি গোপন রাখা এবং অভ্যন্তরীণ নেটওয়ার্কের সুরক্ষা।' },
        { en: 'Upstream backend pools: round robin, least connections, IP hash balancing, and HTTP keepalive pooling.', bn: 'আপস্ট্রিম ব্যাকএন্ড পুল: রাউন্ড রবিন, লিস্ট কানেকশন, আইপি হ্যাশ এবং এইচটিটিপি কিপ-অ্যালাইভ কানেকশন পুলিং।' },
        { en: 'Path matching and URL rewrites: regex routing rules, prefix stripping, and host header forwarding.', bn: 'পাথ ম্যাচিং ও রিরাইট: রেজেক্স রাউটিং নিয়ম, প্রিফিক্স ছাঁটাই এবং হোস্ট হেডার ফরোয়ার্ডিং।' },
      ],
    },
    {
      title: { en: 'Stage 2 — Security, TLS, and Header Propagation', bn: 'ধাপ ২ — নিরাপত্তা, TLS ও হেডার পরিবহন' },
      items: [
        { en: 'Client identity and proxy headers: X-Forwarded-For, X-Forwarded-Proto, RFC 7239 Forwarded, and trusted proxy CIDRs.', bn: 'ক্লায়েন্ট পরিচিতি ও প্রক্সি হেডার: X-Forwarded-For, X-Forwarded-Proto, RFC 7239 Forwarded এবং বিশ্বস্ত প্রক্সি CIDR।' },
        { en: 'TLS termination and SSL offloading: offloading asymmetric crypto from backends, SNI multiplexing, and mTLS upstreams.', bn: 'TLS টার্মিনেশন ও SSL অফলোডিং: ব্যাকএন্ড থেকে এনক্রিপশনের ভার সরানো, SNI মাল্টিপ্লেক্সিং ও mTLS আপস্ট্রিম।' },
        { en: 'Sticky sessions and session affinity: cookie insertion, IP-based persistence, and graceful worker draining.', bn: 'স্টিকি সেশন ও সেশন অ্যাফিনিটি: কুকি ইনসার্শন, আইপি ভিত্তিক পারসিস্টেন্স এবং সুন্দরভাবে ওয়ার্কার ড্রেন করা।' },
      ],
    },
    {
      title: { en: 'Stage 3 — High Availability and Zero-Downtime Releases', bn: 'ধাপ ৩ — সার্বক্ষণিক প্রাপ্যতা ও ডাউনটাইমহীন রিলিজ' },
      items: [
        { en: 'Active and passive health checking: HTTP probes, failure thresholds, circuit breaking, and bad node eviction.', bn: 'সক্রিয় ও নিষ্ক্রিয় হেলথ চেক: এইচটিটিপি প্রোব, ব্যর্থতার সীমা, সার্কিট ব্রেকিং এবং খারাপ নোড অপসারণ।' },
        { en: 'Zero-downtime fleet deployments: blue-green upstream swapping, canary weighted traffic splitting, and graceful reload.', bn: 'ডাউনটাইমহীন ফ্লিট ডিপ্লয়মেন্ট: ব্লু-গ্রিন আপস্ট্রিম পরিবর্তন, ক্যানারি ওয়েটেড ট্রাফিক বিভাজন ও মসৃণ রিলোড।' },
      ],
    },
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — High-Throughput Edge API Gateway with TLS Termination and Rate Limiting',
        bn: 'প্রজেক্ট ১ — উচ্চ-গতির এজ এপিআই গেটওয়ে ও টিএলএস টার্মিনেশন',
      },
      brief: {
        en: 'Design and deploy an enterprise Nginx edge gateway terminating 100,000 concurrent TLS connections, inspecting client headers, and enforcing token bucket rate limits before routing to backend microservices.',
        bn: 'একটি এন্টারপ্রাইজ Nginx এজ গেটওয়ে তৈরি করুন যা ১,০০,০০০ যুগপৎ TLS সংযোগ গ্রহণ করে, প্রক্সি হেডার যাচাই করে এবং ব্যাকএন্ড মাইক্রোসার্ভিসে পাঠানোর আগে টোকেন বাকেট রেট লিমিট প্রয়োগ করে।',
      },
    },
    {
      title: {
        en: 'Project 2 — Zero-Downtime Blue-Green Canary Ingress Controller',
        bn: 'প্রজেক্ট ২ — ডাউনটাইমহীন ব্লু-গ্রিন ক্যানারি ইনগ্রেস কন্ট্রোলার',
      },
      brief: {
        en: 'Construct a Kubernetes ingress reverse proxy utilizing weighted upstream balancing to route 5% of real user traffic to canary deployments with automated rollback on HTTP 5xx error spikes.',
        bn: 'একটি কুবারনেটিস ইনগ্রেস প্রক্সি তৈরি করুন যা ওয়েটেড ব্যালেন্সিংয়ের মাধ্যমে ৫% বাস্তব ট্রাফিক ক্যানারিতে পাঠিয়ে HTTP 5xx এরর বাড়লে স্বয়ংক্রিয়ভাবে পূর্বের ভার্সনে ফিরে যায়।',
      },
    },
  ],
  realWorld: [
    {
      en: 'High-Throughput Edge API Gateway with TLS Termination and Rate Limiting: an enterprise Nginx and Envoy edge gateway terminating 100,000 concurrent TLS connections, inspecting client headers, and enforcing token bucket rate limits before routing to backend microservices.',
      bn: 'উচ্চ-গতির এজ এপিআই গেটওয়ে ও টিএলএস টার্মিনেশন: একটি এন্টারপ্রাইজ Nginx ও Envoy এজ গেটওয়ে যা ১,০০,০০০ যুগপৎ TLS সংযোগ গ্রহণ করে, প্রক্সি হেডার যাচাই করে এবং ব্যাকএন্ড মাইক্রোসার্ভিসে পাঠানোর আগে টোকেন বাকেট রেট লিমিট প্রয়োগ করে।',
    },
    {
      en: 'Zero-Downtime Blue-Green Canary Ingress Controller: a Kubernetes ingress proxy utilizing weighted upstream balancing to route 5% of real user traffic to canary deployments with automated rollback on HTTP 5xx spikes.',
      bn: 'ডাউনটাইমহীন ব্লু-গ্রিন ক্যানারি ইনগ্রেস কন্ট্রোলার: একটি কুবারনেটিস ইনগ্রেস প্রক্সি যা ওয়েটেড ব্যালেন্সিংয়ের মাধ্যমে ৫% বাস্তব ট্রাফিক ক্যানারিতে পাঠিয়ে HTTP 5xx এরর বাড়লে স্বয়ংক্রিয়ভাবে পূর্বের ভার্সনে ফিরে যায়।',
    },
  ],
  bestPractices: [
    {
      en: 'Configure set_real_ip_from trusted CIDRs: never blindly trust X-Forwarded-For headers from untrusted public internet clients to prevent IP spoofing attacks against rate limiters.',
      bn: 'সর্বদা set_real_ip_from দিয়ে বিশ্বস্ত CIDR নির্ধারণ করুন: পাবলিক ইন্টারনেটের ক্লায়েন্টের পাঠানো X-Forwarded-For হেডার অন্ধভাবে বিশ্বাস করবেন না, যাতে আইপি স্পুফিং আক্রমণ প্রতিরোধ করা যায়।',
    },
    {
      en: 'Enable upstream keepalive connection pooling: maintain persistent HTTP connections to upstream backends to eliminate expensive TCP three-way handshakes and TLS renegotiation delays.',
      bn: 'আপস্ট্রিম কিপ-অ্যালাইভ কানেকশন পুলিং সক্রিয় রাখুন: ব্যাকএন্ড সার্ভারের সাথে স্থায়ী সংযোগ বজায় রাখলে প্রতি রিকোয়েস্টে নতুন TCP হ্যান্ডশেক ও TLS নেগোসিয়েশনের লেটেন্সি দূর হয়।',
    },
    {
      en: 'Offload TLS at the edge with HTTP/2 and TLS 1.3: terminate expensive client TLS handshakes at the edge proxy, forwarding clean unencrypted or lightweight HTTP traffic over secure private subnets.',
      bn: 'এজে TLS 1.3 ও HTTP/2 টার্মিনেট করুন: ক্লায়েন্টের জটিল এনক্রিপশন প্রক্সিতে শেষ করে প্রাইভেট নেটওয়ার্কের ভেতরে দ্রুতগতির লাইটওয়েট এইচটিটিপি ট্রাফিক ফরোয়ার্ড করুন।',
    },
    {
      en: 'Decouple session state into Redis instead of sticky cookies: avoid tying clients to specific backend hosts so reverse proxies can distribute requests evenly across healthy nodes.',
      bn: 'সেশন ডেটা স্টিকি কুকির বদলে রেডিসে রাখুন: ক্লায়েন্টকে নির্দিষ্ট সার্ভারে বেঁধে রাখা পরিহার করুন যাতে রিভার্স প্রক্সি সমস্ত সুস্থ নোডে সমানভাবে ট্রাফিক পাঠাতে পারে।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental architectural difference between a Forward Proxy and a Reverse Proxy?',
        bn: 'ফরওয়ার্ড প্রক্সি এবং রিভার্স প্রক্সির মধ্যে প্রধান কাঠামোগত পার্থক্য কী?',
      },
      a: {
        en: 'A Forward Proxy sits in front of client devices (like a corporate egress gateway) to intercept, filter, and mask outbound requests heading to the public internet. In contrast, a Reverse Proxy sits in front of backend origin servers (like an Nginx ingress gateway) to intercept inbound internet requests, shielding internal network topologies, offloading TLS handshakes, balancing loads, and caching responses.',
        bn: 'ফরওয়ার্ড প্রক্সি ক্লায়েন্ট ডিভাইসের সামনে বসে (যেমন কর্পোরেট অফিসের গেটওয়ে) ইন্টারনেটে পাঠানো বহির্গামী রিকোয়েস্ট ফিল্টার ও মাস্ক করে। অন্যদিকে রিভার্স প্রক্সি ব্যাকএন্ড অরিজিন সার্ভারের সামনে বসে বহিরাগত আগমনী রিকোয়েস্ট গ্রহণ করে, অভ্যন্তরীণ নেটওয়ার্কের নিরাপত্তা দেয়, TLS এনক্রিপশনের ভার লাঘব করে, লোড ব্যালেন্সিং করে এবং রেসপন্স ক্যাশ করে।',
      },
    },
    {
      q: {
        en: 'How can attackers exploit untrusted X-Forwarded-For headers, and how do reverse proxies defend against IP spoofing?',
        bn: 'আক্রমণকারীরা কীভাবে প্রতারণামূলক X-Forwarded-For হেডার অপব্যবহার করতে পারে এবং রিভার্স প্রক্সি কীভাবে আইপি স্পুফিং প্রতিহত করে?',
      },
      a: {
        en: 'Because HTTP headers are plain text sent by clients, a malicious user can inject fake IPs into X-Forwarded-For (e.g., 127.0.0.1) to bypass IP-based firewall whitelists or rate limiters. Secure reverse proxies defend against this by configuring trusted proxy networks (e.g. set_real_ip_from in Nginx). The proxy traverses the header chain from right to left, discarding client-supplied values until it encounters an IP provided by an untrusted external hop.',
        bn: 'যেহেতু এইচটিটিপি হেডার ক্লায়েন্ট দ্বারা প্রেরিত সাধারণ টেক্সট, কোনো আক্রমণকারী সহজেই X-Forwarded-For হেডারে ভুয়া আইপি (যেমন 127.0.0.1) ঢুকিয়ে ফায়ারওয়াল বা রেট লিমিটার ফাঁকি দিতে পারে। নিরাপদ রিভার্স প্রক্সি বিশ্বস্ত নেটওয়ার্ক (যেমন Nginx এর set_real_ip_from) কনফিগার করে এটি রক্ষা করে। প্রক্সি ডান থেকে বামে হেডার চেইন স্ক্যান করে ক্লায়েন্টের পাঠানো ভুয়া মান বর্জন করে প্রকৃত আইপি নির্ধারণ করে।',
      },
    },
    {
      q: {
        en: 'What are the performance advantages and security trade-offs of TLS Termination at the reverse proxy layer?',
        bn: 'রিভার্স প্রক্সি লেয়ারে TLS টার্মিনেশনের পারফরম্যান্স সুবিধা এবং সুরক্ষার ভারসাম্য কী?',
      },
      a: {
        en: 'TLS termination offloads computationally expensive RSA/ECDHE asymmetric cryptographic handshakes from application worker processes, freeing CPU cycles for application business logic. It also enables the proxy to inspect HTTP headers, cache responses, and terminate Layer 7 attacks. The trade-off is that traffic between the reverse proxy and backend servers travels in plaintext unless re-encrypted with internal mutual TLS (mTLS) over trusted isolated VPC subnets.',
        bn: 'TLS টার্মিনেশন ব্যাকএন্ড সার্ভার থেকে জটিল ক্রিপ্টোগ্রাফিক হ্যান্ডশেকের বোঝা সরিয়ে নেয়, ফলে অ্যাপ্লিকেশনের সিপিইউ মুক্ত থাকে। এটি প্রক্সিকে হেডার বিশ্লেষণ, ক্যাশিং এবং লেয়ার ৭ সাইবার আক্রমণ প্রতিহত করার সুযোগ দেয়। এর বিনিময়ে প্রক্সি এবং ব্যাকএন্ডের মধ্যকার ডেটা প্লেইনটেক্সট হিসেবে যায়, যা সুরক্ষিত রাখতে অভ্যন্তরীণ নেটওয়ার্কে mTLS এনক্রিপশন ব্যবহার করা উচিত।',
      },
    },
    {
      q: {
        en: 'How does Nginx achieve zero-downtime configuration reloads without dropping active client TCP connections?',
        bn: 'Nginx কীভাবে চলমান টিসিপি সংযোগ বিচ্ছিন্ন না করেই ডাউনটাইমহীন কনফিগারেশন রিলোড সম্পন্ন করে?',
      },
      a: {
        en: 'When nginx -s reload is invoked, the master process receives a SIGHUP signal and validates the new configuration syntax. If valid, the master spawns a new set of worker processes running the updated configuration to accept new incoming connections. Simultaneously, it sends SIGQUIT to old workers, allowing them to finish serving all in-flight client requests gracefully before shutting down. Not a single packet or connection is dropped.',
        bn: 'যখন nginx -s reload চালানো হয়, তখন মাস্টার প্রসেস একটি SIGHUP সিগন্যাল পেয়ে নতুন কনফিগারেশনের সিনট্যাক্স যাচাই করে। সব ঠিক থাকলে মাস্টার নতুন কনফিগারেশন চালিত একদল নতুন ওয়ার্কার প্রসেস তৈরি করে যারা নতুন কানেকশন গ্রহণ করে। একই সাথে পুরনো ওয়ার্কারদের SIGQUIT পাঠিয়ে চলমান রিকোয়েস্টগুলো সুন্দরভাবে সম্পন্ন করার পর বন্ধ করা হয়। একটি প্যাকেটও নষ্ট হয় না।',
      },
    },
  ],
  lessons: [
    FrontsAndTheFrontLesson,
    BacksAndTheBackLesson,
    RoutesAndTheRouteLesson,
    HeadersAndTheHeadLesson,
    CertsAndTheCertLesson,
    SessionsAndTheSessionLesson,
    HealthsAndTheHealthLesson,
    TheReverseReleaseLesson,
  ],
  references: [],
};
