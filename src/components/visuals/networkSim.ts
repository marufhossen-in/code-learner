import type { LText } from '../../lib/types';

/** Pure network journey planner (Section 11): URL → DNS → TCP → TLS → HTTP → CDN → LB → Server → DB. */

export type NetDir = 'req' | 'res' | 'local';

export interface NetStep {
  node: number; // index into NODES in the UI
  dir: NetDir;
  title: LText;
  detail: LText;
  ms: number;
}

export interface Journey {
  ok: boolean;
  error?: LText;
  steps: NetStep[];
  totalMs: number;
  status: number;
  fromCache: boolean;
}

// node indexes: 0 browser, 1 router, 2 dns, 3 cdn, 4 lb, 5 server, 6 db
const STATIC_RE = /\.(css|js|png|jpe?g|svg|woff2?|ico)$/;
const KNOWN_PAGES = ['/', '/products', '/about'];
const KNOWN_API = ['/api/products', '/api/users'];

interface Opts {
  cached: boolean; // the asset is already in the browser cache
  keepAlive: boolean; // a previous connection exists (reload)
}

export function planJourney(urlStr: string, opts: Opts): Journey {
  let url: URL;
  try {
    url = new URL(urlStr);
  } catch {
    return {
      ok: false,
      error: {
        en: `"${urlStr}" is not a valid URL. Try https://example.com/products`,
        bn: `"${urlStr}" বৈধ URL নয়। চেষ্টা করুন: https://example.com/products`,
      },
      steps: [],
      totalMs: 0,
      status: 0,
      fromCache: false,
    };
  }

  const steps: NetStep[] = [];
  const https = url.protocol === 'https:';
  const path = url.pathname || '/';
  const isStatic = STATIC_RE.test(path);
  const isApi = path.startsWith('/api/');
  const known = isApi ? KNOWN_API.includes(path) : isStatic || KNOWN_PAGES.includes(path);

  // 1 — parse (local)
  steps.push({
    node: 0, dir: 'local', ms: 1,
    title: { en: 'Parse the URL', bn: 'URL পার্সিং' },
    detail: {
      en: `scheme: ${url.protocol.slice(0, -1)} · host: ${url.hostname} · path: ${path} — three decisions, one string.`,
      bn: `scheme: ${url.protocol.slice(0, -1)} · host: ${url.hostname} · path: ${path} — একটি স্ট্রিং, তিনটি সিদ্ধান্ত।`,
    },
  });

  // 2 — browser cache check
  if (isStatic && opts.cached) {
    steps.push({
      node: 0, dir: 'local', ms: 0,
      title: { en: 'Memory cache HIT', bn: 'মেমরি ক্যাশে পাওয়া গেলো' },
      detail: {
        en: 'Cache-Control said this file is fresh. Zero network — not even a request is sent. 200 (from cache).',
        bn: 'Cache-Control বলেছে ফাইলটি তাজা। শূন্য নেটওয়ার্ক — কোনো রিকোয়েস্টই যায়নি। 200 (ক্যাশ থেকে)।',
      },
    });
    const totalMs = steps.reduce((n, s) => n + s.ms, 0);
    return { ok: true, steps, totalMs, status: 200, fromCache: true };
  }
  steps.push({
    node: 0, dir: 'req', ms: 2,
    title: { en: 'Check browser cache', bn: 'ব্রাউজার ক্যাশ যাচাই' },
    detail: {
      en: 'Nothing usable stored — the journey must leave the machine.',
      bn: 'ব্যবহারযোগ্য কিছু জমা নেই — যাত্রাকে মেশিনের বাইরে যেতেই হবে।',
    },
  });

  // 3 — DNS
  steps.push({
    node: 2, dir: 'req', ms: opts.keepAlive ? 3 : 35,
    title: { en: 'DNS lookup', bn: 'DNS লুকআপ' },
    detail: opts.keepAlive
      ? {
          en: `${url.hostname} → 93.184.216.34 — from the OS DNS cache (the first lookup answered this).`,
          bn: `${url.hostname} → 93.184.216.34 — OS ডিএনএস ক্যাশ থেকে (প্রথম লুকআপেই উত্তর পাওয়া গেছে)।`,
        }
      : {
          en: `${url.hostname} → 93.184.216.34 — resolver asks root → .com TLD → authoritative nameserver. Like asking for a phone number you forgot.`,
          bn: `${url.hostname} → 93.184.216.34 — রিজলভার জিজ্ঞেস করে রুট → .com TLD → অথরিটেটিভ নেমসার্ভারকে। ভুলে যাওয়া ফোন নম্বর খোঁজার মতো।`,
        },
  });

  // 4 — TCP handshake (through the router, to the edge)
  steps.push({
    node: 1, dir: 'req', ms: opts.keepAlive ? 8 : 45,
    title: { en: 'TCP three-way handshake', bn: 'TCP থ্রি-ওয়ে হ্যান্ডশেক' },
    detail: opts.keepAlive
      ? {
          en: 'Connection reused (keep-alive) — no new SYN needed. This is why reloads feel faster.',
          bn: 'কানেকশন পুনব্যবহৃত (keep-alive) — নতুন SYN লাগল না। এইজন্যই রিলোড দ্রুত লাগে।',
        }
      : {
          en: 'SYN → SYN-ACK → ACK. Three packets just to say "let us talk reliably, in order".',
          bn: 'SYN → SYN-ACK → ACK। শুধু "চলো নির্ভরযোগ্যভাবে, ধারাবাহিকভাবে কথা বলি" বলতেই তিনটি প্যাকেট।',
        },
  });

  // 5 — TLS
  if (https) {
    steps.push({
      node: 3, dir: 'req', ms: opts.keepAlive ? 20 : 60,
      title: { en: 'TLS 1.3 handshake', bn: 'TLS 1.3 হ্যান্ডশেক' },
      detail: {
        en: 'Certificates verified, session keys derived — from here everything is encrypted. Even the path stays secret from the router.',
        bn: 'সার্টিফিকেট যাচাই, সেশন কী তৈরি — এখন থেকে সব এনক্রিপ্টেড। পাথও রাউটারের থেকে গোপন থাকে।',
      },
    });
  } else {
    steps.push({
      node: 3, dir: 'req', ms: 0,
      title: { en: 'No TLS (http://)', bn: 'TLS নেই (http://)' },
      detail: {
        en: 'Plain text! Every router on the path can READ and MODIFY this traffic. Never use http for real apps.',
        bn: 'প্লেইন টেক্সট! পথের প্রতিটি রাউটার এই ট্রাফিক পড়তেও পারে, বদলাতেও পারে। আসল অ্যাপে কখনো http নয়।',
      },
    });
  }

  // 6 — request reaches the CDN edge
  steps.push({
    node: 3, dir: 'req', ms: 15,
    title: { en: 'HTTP request to the edge', bn: 'এজ সার্ভারে HTTP রিকোয়েস্ট' },
    detail: {
      en: `GET ${path} HTTP/2 + headers (Host, Accept, Cookie…). It arrives at the nearest CDN edge, not the origin.`,
      bn: `GET ${path} HTTP/2 + হেডার (Host, Accept, Cookie…)। পৌঁছে গেল সবচেয়ে কাছের CDN এজে, মূল সার্ভারে নয়।`,
    },
  });

  let status = known ? 200 : 404;

  if (isStatic) {
    steps.push({
      node: 3, dir: 'res', ms: 18,
      title: { en: 'CDN edge HIT', bn: 'CDN এজে পাওয়া গেলো' },
      detail: {
        en: 'The edge already holds this file for popularity — the origin server is never disturbed.',
        bn: 'জনপ্রিয়তার কারণে এজের কাছে ফাইলটি আছেই — মূল সার্ভারকে বিরক্ত করতে হলো না।',
      },
    });
  } else {
    // through to the load balancer
    steps.push({
      node: 4, dir: 'req', ms: 3,
      title: { en: 'Load balancer picks a server', bn: 'লোড ব্যালান্সার সার্ভার বাছলো' },
      detail: {
        en: `Round-robin says: app-server-${(path.length % 3) + 1}. Healthy instances only — a dead one gets skipped.`,
        bn: `রাউন্ড-রবিন বলছে: app-server-${(path.length % 3) + 1}। কেবল সুস্থ ইনস্ট্যান্স — মৃতটিকে বাদ।`,
      },
    });
    steps.push({
      node: 5, dir: 'req', ms: 12,
      title: { en: 'App server handles the route', bn: 'অ্যাপ সার্ভার রুট সামলাচ্ছে' },
      detail: known
        ? { en: `Route ${path} found — handler runs.`, bn: `রুট ${path} পাওয়া গেছে — হ্যান্ডলার চলছে।` }
        : { en: `No route matches ${path} — preparing a 404.`, bn: `${path}-এর সাথে কোনো রুট মেলেনি — ৪০৪ তৈরি হচ্ছে।` },
    });
    if (isApi && known) {
      steps.push({
        node: 6, dir: 'req', ms: 25,
        title: { en: 'Database query', bn: 'ডেটাবেস কুয়েরি' },
        detail: {
          en: `SELECT * FROM ${path.replace('/api/', '')} WHERE … — index used (see the Database tab for why that matters). Data travels back to the app server.`,
          bn: `SELECT * FROM ${path.replace('/api/', '')} WHERE … — ইনডেক্স ব্যবহৃত (কেন জরুরি তা ডেটাবেস ট্যাবে)। ডেটা ফিরলো অ্যাপ সার্ভারে।`,
        },
      });
    }
    steps.push({
      node: 3, dir: 'res', ms: 10,
      title: { en: 'Response passes the edge', bn: 'রেসপন্স এজ পেরোচ্ছে' },
      detail: {
        en: 'The origin answer flows back out; the edge may cache a copy for the next visitor.',
        bn: 'উত্তর বাইরে বেরোচ্ছে; পরের ভিজিটরের জন্য এজ একটি কপি ক্যাশ করতে পারে।',
      },
    });
  }

  // response home + render
  steps.push({
    node: 0, dir: 'res', ms: 25,
    title: { en: `Response ${status} arrives`, bn: `${status} রেসপন্স পৌঁছালো` },
    detail: known
      ? { en: 'Status 200 + body + headers. Scroll of honour: whoosh through router, ISP, back to the tab.', bn: 'Status 200 + বডি + হেডার। রাউটার, ISP পেরিয়ে ট্যাবে ফিরে এলো।' }
      : { en: 'Status 404 — the journey completed perfectly; the answer is simply "not here". A 4xx is not a broken network.', bn: 'Status 404 — যাত্রা নিখুঁতভাবে শেষ; উত্তর শুধু "এখানে নেই"। 4xx মানে নেটওয়ার্ক ভাঙা নয়।' },
  });
  steps.push({
    node: 0, dir: 'local', ms: 15,
    title: { en: 'Render', bn: 'রেন্ডার' },
    detail: {
      en: 'Bytes → tokens → DOM → paint — the Browser Pipeline lab shows this half of the story.',
      bn: 'বাইট → টোকেন → DOM → পেইন্ট — গল্পের এই অংশ ব্রাউজার পাইপলাইন ল্যাবে দেখানো আছে।',
    },
  });

  const totalMs = steps.reduce((n, s) => n + s.ms, 0);
  return { ok: true, steps, totalMs, status, fromCache: false };
}
