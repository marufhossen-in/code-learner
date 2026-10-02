import type { Hub } from '../../lib/types';

import { harborCharterLesson } from './lessons/the-harbor-charter';
import { cargoManifestLesson } from './lessons/the-cargo-manifest';
import { warehouseDistrictLesson } from './lessons/the-warehouse-district';
import { lighthouseKeepersLesson } from './lessons/the-lighthouse-keepers';
import { tugboatFleetLesson } from './lessons/the-tugboat-fleet';
import { harborServicesLesson } from './lessons/the-harbor-services';
import { harborCompassLesson } from './lessons/the-harbor-compass';
import { harborRehearsalLesson } from './lessons/the-harbor-rehearsal';

export const webApisHub: Hub = {
  slug: 'web-apis',
  name: 'Web APIs',
  icon: '⚓',
  tagline: {
    en: 'The harbor where the browser moors every ship you will ever need: fetch, storage, observers, workers, service workers, and the tide-chart of permissions that governs them all.',
    bn: 'সেই বন্দর, ব্রাউজার আপনার প্রয়োজনীয় প্রতি জাহাজ নোঙর রাখে যেখানে: fetch, স্টোরেজ, অবজারভার, ওয়ার্কার, সার্ভিস-ওয়ার্কার আর পারমিশনের জোয়ার-তালিকা, যা সব শাসন করে।',
  },
  intro: {
    en: 'Web APIs are the browser’s built docks — capabilities constructed by the engine, declared on window and navigator, importable by no one. THIS HARBOR CHARTER sets the waterfront constitution: detection over user-agent gossip, promises over frozen piers, petitions over arrival-demands (lesson 1). THE CARGO MANIFEST teaches fetch in full: request and response as two ledgers, methods and headers as tariffs, CORS as the shore law, streams as bales landed on arrival (lesson 2). THE WAREHOUSE DISTRICT files cargo by shape: localStorage lockers, IndexedDB bonded bays with transactions and indexes, CacheStorage for voyages, and the cookie manifest with its three seals (lesson 3). THE LIGHTHOUSE KEEPERS replace polling with lanterns: Intersection, Resize, Mutation observers — one manifest per watch, batched invoices, disconnect as law (lesson 4). THE TUGBOAT FLEET moves weight off the pier: Web Workers priced in hulls, envelopes and deeds, the Service Worker customs house with its three hearings (install, activate, fetch), offline as statute (lesson 5). THE HARBOR SERVICES gate the utilities: clipboard, geolocation, notifications, credentials, file access (lesson 6). NAVIGATION DOCKS steer the pier itself: URL/URLSearchParams, History, sendBeacon, visibility and online events (lesson 7). THE HARBOR REHEARSAL assembles the whole fleet into one offline-first ledger — the capstone stitch of the hub (lesson 8).',
    bn: 'Web API হলো ব্রাউজারের গড়া ডক — ইঞ্জিন-নির্মিত ক্ষমতা, window-ও-navigator-এ ঘোষিত, কারো আমদানিযোগ্য নয়। এই বন্দর-সনদ ওয়াটারফ্রন্ট-সংবিধান স্থির করে: user-agent-গুজবের বদলে ডিটেকশন, হিম-ঘাটের বদলে প্রতিশ্রুতি, আগমন-দাবির বদলে আবেদন (লেসন ১)। পণ্যপত্র শেখায় fetch পুরোত: দুই খাতার অনুরোধ-উত্তর, শুল্করূপে পদ্ধতি-শিরোলেখ, তীরের আইনরূপে CORS, নামার-সাথে-বোঝারূপে স্ট্রিম (লেসন ২)। গুদাম-মহল্লা পণ্য সংরক্ষণ করে আকৃতিতে: localStorage-লকার, ট্রানজাকশন-সূচকসহ IndexedDB-বন্ডেড-প্রস্থ, যাত্রার জন্য CacheStorage, তিন সীলসহ কুকিজ-পণ্যপত্র (লেসন ৩)। বাতিঘর-পাহারাদার জেরিপ সরিয়ে লণ্ঠন বসায়: Intersection, Resize, Mutation অবজারভার — প্রতি পাহারায় এক ম্যানিফেস্ট, ব্যাচকৃত চালান, আইনরূপে বিচ্ছিন্নকরণ (লেসন ৪)। টানা-নৌকা-বহর ঘাট থেকে ওজন সরায়: কাঠামো-খাম-দলিলে মূল্যকৃত Web Worker, তিন শুনানিসহ Service Worker-শুল্কঘর (install, activate, fetch), সংবিধানে অফলাইন (লেসন ৫)। বন্দর-সেবা ইউটিলিটি বেষ্টন করে: ক্লিপবোর্ড, জিওলোকেশন, নোটিফিকেশন, প্রামাণ্য, ফাইল-প্রবেশ (লেসন ৬)। নেভিগেশন-ডক ঘাট-নিজে চালায়: URL/URLSearchParams, History, sendBeacon, দৃশ্যমানতা ও অনলাইন-ইভেন্ট (লেসন ৭)। বন্দর-মহড়া পুরো বহর জোড়া দেয় এক অফলাইন-ফার্স্ট খাতায় — হাবের চূড়ান্ত সেলাই (লেসন ৮)।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The charter & the manifest', bn: 'ধাপ ১ — সনদ ও পণ্যপত্র' },
      items: [
        { en: 'Feature detection over userAgent; secure contexts; permission petitions (lesson 1)', bn: 'userAgent-এর বদলে ডিটেকশন; সুরক্ষিত-প্রসঙ্গ; পারমিশন-আবেদন (লেসন ১)' },
        { en: 'fetch: two ledgers, res.ok as verdict, body readers once-only (lesson 2)', bn: 'fetch: দুই খাতা, রায়রূপে res.ok, এককালীন বডি-পাঠক (লেসন ২)' },
        { en: 'Methods as tariffs, headers as stamps, FormData boundary law', bn: 'শুল্করূপে পদ্ধতি, মোহররূপে শিরোলেখ, FormData-সীমান্ত-আইন' },
        { en: 'CORS as shore law; streams as landed bales; AbortController recall bell', bn: 'তীরের আইন CORS; নামা-বোঝারূপে স্ট্রিম; ফেরত-ঘণ্টা AbortController' },
      ],
    },
    {
      title: { en: 'Stage 2 — The district & the keepers', bn: 'ধাপ ২ — মহল্লা ও পাহারাদার' },
      items: [
        { en: 'Storage by shape: lockers, bonded bays, customs hold, sealed cookies (lesson 3)', bn: 'আকৃতিতে স্টোরেজ: লকার, বন্ডেড-প্রস্থ, শুল্ক-তিলাঘর, সীলকৃত-কুকিজ (লেসন ৩)' },
        { en: 'Transactions as time-locked leases; indexes as sorting clerks', bn: 'সময়বদ্ধ-ইজারারূপে ট্রানজাকশন; সাজানো-করণিকরূপে সূচক' },
        { en: 'Quota, eviction, persist() and estimate() as tax arithmetic', bn: 'কর-পাটিগণিতরূপে কোটা, উচ্ছেদ, persist() ও estimate()' },
        { en: 'Observers: one manifest per watch; rootMargin horizons; disconnect as law (lesson 4)', bn: 'অবজারভার: প্রতি পাহারায় এক ম্যানিফেস্ট; rootMargin-দিগন্ত; আইনরূপে বিচ্ছিন্নকরণ (লেসন ৪)' },
      ],
    },
    {
      title: { en: 'Stage 3 — The fleet', bn: 'ধাপ ৩ — বহর' },
      items: [
        { en: 'Tow the weight: Web Workers with structured clone pricing (lesson 5)', bn: 'ওজন সরান: structured-clone মূল্যকৃত Web Worker (লেসন ৫)' },
        { en: 'Transferables as deeds: ownership re-registration at rename price', bn: 'দলিলরূপে Transferable: নামান্তর-মূল্যে মালিকানা পুনঃনিবন্ধন' },
        { en: 'Service Worker commissions: install, activate, fetch bylaws', bn: 'Service Worker-কমিশন: install, activate, fetch-উপবিধি' },
        { en: 'Versioned holds + activation sweep + BroadcastChannel ferries', bn: 'সংস্করণিত তিলাঘর + অ্যাক্টিভেশন-ঝাঁটা + BroadcastChannel-ফেরি' },
      ],
    },
    {
      title: { en: 'Stage 4 — Services, steering & the rehearsal', bn: 'ধাপ ৪ — সেবা, চালন ও মহড়া' },
      items: [
        { en: 'Gated utilities: clipboard, geolocation, notifications, passkeys (lesson 6)', bn: 'বেষ্টিত ইউটিলিটি: ক্লিপবোর্ড, জিওলোকেশন, নোটিফিকেশন, পাসকি (লেসন ৬)' },
        { en: 'URL cracking, History steering, sendBeacon last letters (lesson 7)', bn: 'URL-ভাঙন, History-চালন, sendBeacon-শেষচিঠি (লেসন ৭)' },
        { en: 'The Harbor Rehearsal: one offline-first ledger wall (lesson 8)', bn: 'বন্দর-মহড়া: এক অফলাইন-ফার্স্ট খাতা-দেয়াল (লেসন ৮)' },
        { en: 'The graduation recitation: twelve petitions on any new page', bn: 'উত্তীর্ণ-পাঠ: যে-কোনো নতুন পৃষ্ঠায় বারো আবেদন' },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'HarborLedger: the offline-first field notebook', bn: 'হারবারলেজার: অফলাইন-ফার্স্ট মাঠের-খাতা' },
      brief: {
        en: 'Build a field notebook that works with the wire down: consignments filed in IndexedDB with sorting clerks (by-day index), photos queued as Blobs, a sentinel-driven infinite list via IntersectionObserver, and a sync button that ships pending manifests with honest retries. Gates: (a) the ledger opens fully offline after one visit, (b) the quota ledger is read at boot and displayed before big syncs, (c) every interactive deed carries a focus-visible ring, (d) the service worker sweep is present at activate.',
        bn: 'একটি মাঠের-খাতা বানান যা তার-ভাঙা অবস্থায় চলে: IndexedDB-এ দাখিলকৃত চালান, সাজানো-করণিকসহ (দিন-সূচক), Blobরূপে সারিবদ্ধ ছবি, IntersectionObserver-চালিত সেন্টিনেলের অসীম-তালিকা, সৎ-পুনঃচেষ্টাসহ মুলতবি-পণ্যপত্র পাঠানো সিঙ্ক-বোতাম। ফাটক: (ক) এক দর্শনের পর খাতা পুরো অফলাইনে খোলে, (খ) বুটে কোটা-খাতা পঠিত, বড় সিঙ্কের আগে দৃশ্যমান, (গ) প্রতি মিথস্ক্রিয়া-দলিল বহন করে focus-visible-রিং, (ঘ) অ্যাক্টিভেটে service worker-ঝাঁটা আছে।',
      },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'Watchtower Gallery: the battery-quiet media wall', bn: 'পর্যবেক্ষণবাস্তু-গ্যালারি: ব্যাটারি-নিঃশব্দ মিডিয়া-দেয়াল' },
      brief: {
        en: 'Ship a media wall with zero polls: lazy media on a rootMargin horizon, impression accounting at threshold 0.5 logged via sendBeacon on pagehide, an infinite sentinel ordered per-keeper, and a ResizeObserver-driven masonry refit. Deliver the absence list: no scroll listeners, no setInterval measuring, no windowresize-fit hooks. The acceptance gate: performance trace shows zero layout-thrash flashes across a ten-second scroll.',
        bn: 'শূন্য জেরিপে একটি মিডিয়া-দেয়াল চালান করুন: rootMargin-দিগন্তে অলস মিডিয়া, threshold 0.5-এ ইমপ্রেশন-হিসাব, pagehide-এ sendBeacon-লগ, প্রতি-পাহারাদারে-অর্ডারকৃত অসীম-সেন্টিনেল, ResizeObserver-চালিত মেসনরি-পুনঃফিট। অনুপস্থিতি-তালিকা দিন: scroll-শ্রোতা নেই, মাপা setInterval নেই, windowresize-ফিট-হুক নেই। গ্রহণযোগ্যতা-ফাটক: দশ সেকেন্ড স্ক্রলে পারফরম্যান্স-ট্রেস শূন্য লেআউট-থ্র্যাশ-ঝিলিক দেখায়।',
      },
      difficulty: 'advanced',
    },
    {
      title: { en: 'Crane & Customs: the heavyweight pipeline', bn: 'ক্রেন ও শুল্কঘর: হেভিওয়েট-পাইপলাইন' },
      brief: {
        en: 'Build a CSV-to-report pipeline that never stutters: file bytes towed to a worker pool via transferable deeds, parsing chunked with progress posted as stamped envelopes, results filed in the bonded warehouse, and a customs house that serves the report offline with network-first bylaws for the shore API. Gates: (a) assert the transferable deed lawfully read (sender byteLength 0), (b) the two-pressure law holds in the report’s typography, (c) the whole pipeline leaves a ledger trail (voyage, stamp, latency).',
        bn: 'একটি CSV→রিপোর্ট-পাইপলাইন বানান যা কখনোই আটকে না: ট্রান্সফারেবল-দলিলে অয়ার্কার-পুলে ফাইল-বাইট, মোহরকৃত-খামে পোস্টকৃত অগ্রগতিসহ খণ্ডে-পার্সিং, বন্ডেড-গুদামে দাখিলకৃত ফলাফল, আর শুল্কঘর যা রিপোর্ট সেবা করে অফলাইনে, তীর-API-তে network-first-উপবিধিতে। ফাটক: (ক) ট্রান্সফারেবল-দলিল-অ্যাসার্ট মান্য (প্রেরকের byteLength 0), (খ) রিপোর্টের টাইপোগ্রাফি দুই-চাপের আইন মেনে চলে, (গ) পুরো পাইপলাইন খাতা-চিহ্ন রেখে যায় (যাত্রা, মোহর, বিলম্ব)।',
      },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Detect the dock, never the browser: typeof window.fetch === “function” is a receipt; navigator.userAgent is a rumor column.', bn: 'ডক শনাক্ত করুন, ব্রাউজার নয়: typeof window.fetch === “function” হলো রসিদ; navigator.userAgent গুজব-কলাম।' },
    { en: 'Install res.ok as the verdict gate in every loader: HTTP refusals are fulfilled tickets; refusals belong before body reads.', bn: 'প্রতি লোডারে res.ok রায়-ফটকরূপে বসান: HTTP-প্রত্যাখ্যান পূর্ণ টিকিট; প্রত্যাখ্যান বডি-পাঠের আগে।' },
    { en: 'Pick the hold by cargo shape: strings locker, objects bonded, voyages customs, auth papers sealed cookies.', bn: 'পণ্য-আকৃতিতে তিলাঘর বাছুন: স্ট্রিং লকারে, অবজেক্ট বন্ডেডে, যাত্রা শুল্কে, প্রামাণ্য-কাগজ সীলকৃত-কুকিজে।' },
    { en: 'File one manifest per watch: observers replace listeners at frame price — and disconnect files the certificate of darkness.', bn: 'প্রতি পাহারায় এক ম্যানিফেস্ট দাখিল করুন: অবজারভার ফ্রেম-মূল্যে শ্রোতা প্রতিস্থাপন করে — disconnect অন্ধকারের সনদ দাখিল করে।' },
    { en: 'Mount the recall bell on every voyage: AbortController plus timeouts — long voyages without recall are unbudgeted weather.', bn: 'প্রতি যাত্রায় ফেরত-ঘণ্টা লাগান: AbortController সঙ্গে টাইমআউট — প্রত্যাহারহীন দীর্ঘ যাত্রা হলো বাজেটহীন আবহাওয়া।' },
    { en: 'Run the six-motion voyage counter: shape, bell, verdict, three outcomes, honest retry, ledger — every voyage closes a ledger line.', bn: 'ছয়-মোশনের যাত্রা-কাউন্টার চালান: আকৃতি, ঘণ্টা, রায়, তিন ফলাফল, সৎ-পুনঃচেষ্টা, খাতা — প্রতি যাত্রা খাতা-লাইন বন্ধ করে।' },
    { en: 'Version the customs holds explicitly and sweep at activate: offline bugs are constitutional, not tactical.', bn: 'শুল্ক-তিলাঘর স্পষ্টে সংস্করণ করুন, অ্যাক্টিভেটে ঝাঁটা দিন: অফলাইন-ত্রুটি সাংবিধানিক, কৌশলগত নয়।' },
  ],
  interview: [
    {
      q: { en: 'Why does fetch not throw on 404?', bn: 'fetch 404-এ থ্রো করে না কেন?' },
      a: {
        en: 'Because the promise settles the wire court, not the content court. fetch rejects only when the wire itself breaks (network failure, CORS treaty refusal); an HTTP status is an answered petition — the shore spoke. The verdict lives at res.ok (status 200–299): a fulfilled ticket proves contact, not acceptance. This is deliberate: your business logic needs the refusal as data (an empty state, a redirect) rather than as an exception. The discipline: install res.ok as the verdict gate before any body read, and classify in catch only weather (AbortError recalled, TypeError broken wire).',
        bn: 'কারণ প্রতিশ্রুতি তার-আদালত নিষ্পত্তি করে, বিষয়বস্তু আদালত নয়। fetch প্রত্যাখ্যান করে কেবল তার ভাঙলে (নেটওয়ার্ক-ব্যর্থতা, CORS-চুক্তি-প্রত্যাখ্যান); HTTP-স্ট্যাটাস হলো উত্তরকৃত আবেদন — তীর কথা বলেছে। রায় থাকে res.ok-তে (স্ট্যাটাস 200–299): পূর্ণ টিকিট প্রমাণ করে যোগাযোগ, গ্রহণযোগ্যতা নয়। এটি ইচ্ছাকৃত: ব্যবসা-যুক্তির কাছে প্রত্যাখ্যান দরকার ডেটারূপে (খালি-অবস্থা, পুনর্নির্দেশ), ব্যতিক্রমরূপে নয়। শৃঙ্খলা: যে-কোনো বডি-পাঠের আগে res.ok রায়-ফটকরূপে বসান, আর catch-এ বর্গীকরণ করুন শুধু আবহাওয়া (AbortError ফেরত, TypeError ভাঙা তার)।',
      },
    },
    {
      q: { en: 'localStorage vs IndexedDB: how do you choose?', bn: 'localStorage বনাম IndexedDB: বাছবেন কীভাবে?' },
      a: {
        en: 'By cargo shape and lease law, never by habit. localStorage is the brass locker: tiny strings (preferences, draft text), synchronous door that blocks the pier, string-only shelves, ~5MB. IndexedDB is the bonded warehouse: shaped cargo (objects, Blobs), real queries (indexes as sorting clerks), hundreds of MB, async access. The lease laws differ too: lockers persist by origin; warehouse entries navigate a versioned charter, transactions auto-commit when your stack empties (never await inside), and quota is petitionable (persist()) and auditable (estimate()). Governing sentence: strings and tiny → locker; objects and queried → bonded; anything else is usually the customs hold (CacheStorage) or a sealed cookie decision.',
        bn: 'পণ্য-আকৃতি ও ইজারা-আইনে, অভ্যাসে কখনোই নয়। localStorage হলো পিতলের লকার: ক্ষুদ্র স্ট্রিং (পছন্দ, খসড়া), ঘাট-অবরোধকারী সিঙ্ক্রোনাস দরজা, কেবল-স্ট্রিং তাক, ~5MB। IndexedDB হলো বন্ডেড-গুদাম: আকৃতিগত পণ্য (অবজেক্ট, Blob), প্রকৃত কোয়েরি (সাজানো-করণিকরূপে সূচক), শতাধিক MB, অ্যাসিঙ্ক-প্রবেশ। ইজারা-আইনও ভিন্ন: লকার টিকে মূলভূমিতে; গুদাম-এন্ট্রি চলে সংস্করণিত সনদে, ট্রানজাকশন স্ট্যাক ফাঁকা হলে স্বয়ং-সম্পন্ন (ভেতরে await নয় কখনোই), কোটা আবেদনযোগ্য (persist()) ও নিরীক্ষণযোগ্য (estimate())। শাসক বাক্য: স্ট্রিং ও ক্ষুদ্র → লকার; অবজেক্ট ও কোয়েরিকৃত → বন্ডেড; বাকি সব সাধারণত শুল্ক-তিলাঘরের (CacheStorage) বা সীলকৃত-কুকিজের সিদ্ধান্ত।',
      },
    },
    {
      q: { en: 'What is wrong with polling scroll events, and what replaces it?', bn: 'scroll-ইভেন্ট জেরিপে ভুল কী, আর কী তা প্রতিস্থাপন করে?' },
      a: {
        en: 'The poll is a vote billed per-frame: getBoundingClientRect in a scroll handler forces synchronous layout settlement mid-gesture — the layout-thrash tax — per crate, per scroll event. The keeper replaces it: IntersectionObserver files ONE manifest (root, rootMargin, threshold), the engine computes crossings in the same pipeline that paints them, and invoices arrive batched per frame with ratios and rects. The picture-truth bill drops from layout-thrash price to bookkeeping price; rootMargin turns “prepare before visible” into arithmetic; and disconnect()/unobserve() file certificates of darkness so lanterns never bill for closed harbors.',
        bn: 'জেরিপ হলো প্রতি-ফ্রেমে-ধরা ভোট: scroll-হ্যান্ডলারে getBoundingClientRect ভঙ্গি-মাঝে সিঙ্ক্রোনাস-লেআউট স্থিরকরণ বাধ্য করে — লেআউট-থ্র্যাশ-কর — বাক্সপ্রতি, ইভেন্টপ্রতি। পাহারাদার তা প্রতিস্থাপন করে: IntersectionObserver একটি ম্যানিফেস্ট দাখিল করে (root, rootMargin, threshold), ইঞ্জিন পার-হওয়া গণনা করে সেই পাইপলাইনেই, ছবি আঁকে যা, চালান আসে ব্যাচে প্রতি-ফ্রেমে, অনুপাত-রেক্টসহ। ছবি-সত্যের বিল থ্র্যাশ-মূল্য থেকে হিসাবরক্ষণ-মূল্যে নামে; rootMargin "দৃশ্যমানের আগে প্রস্তুতি"-কে পাটিগণিত করে; disconnect()/unobserve() অন্ধকারের সনদ দাখিল করে, বন্ধ বন্দরের জন্য লণ্ঠন যেন বিল না দেয়।',
      },
    },
    {
      q: { en: 'How would you make an app offline-first?', bn: 'অ্যাপ অফলাইন-ফার্স্ট বানাবেন কীভাবে?' },
      a: {
        en: 'Three charters, all versioned. The shell: a service worker commissions its inventory at install (version-named CacheStorage hold, addAll blocked on failure), sweeps old holds at activate, and hears every voyage by bylaws (cache-first for inventory, network-first for weather, stale-while-revalidate for everyday). The cargo: IndexedDB for records (objects via structured clone, indexes for the walk queries) — transactions lease-bound: premises first, synchronous bay calls, awaits outside. The sync: pending manifests queued in the warehouse, workers tow the heavy reconciliation via transferable deeds, BroadcastChannel heralds the ledger version to other tabs, and the tax ledger is read at boot (persist() petitioned, estimate() audited). The critical honesty: version everything — holds, charter, and sweep — because offline bugs are constitutional, not tactical.',
        bn: 'তিনটি সনদ, সব সংস্করণিত। খোল: service worker install-এ তালিকা কমিশন দেয় (সংস্করণ-নামকৃত CacheStorage-তিলাঘর, ব্যর্থতায়-বাধাগ্রস্ত addAll), অ্যাক্টিভেটে পুরনো তিলাঘর ঝাড়ে, প্রতি যাত্রা উপবিধিতে শোনে (তালিকায় cache-first, আবহাওয়ায় network-first, দৈনন্দিনে stale-while-revalidate)। পণ্য: রেকর্ডে IndexedDB (structured clone-অবজেক্ট, ভ্রমণ-কোয়েরিতে সূচক) — ট্রানজাকশন ইজারাবদ্ধ: পূর্বশর্ত আগে, সিঙ্ক্রোনাস প্রস্থ-কল, await বাইরে। সিঙ্ক: মুলতবি-পণ্যপত্র গুদামে সারিবদ্ধ, ট্রান্সফারেবল-দলিলে ওয়ার্কার ভারী মিলন টানে, BroadcastChannel অন্য ট্যাবে খাতা-সংস্করণ ঘোষণা করে, বুটে কর-খাতা পঠিত (persist() আবেদিত, estimate() নিরীক্ষিত)। বড় সততা: সবকিছু সংস্করণ করুন — তিলাঘর, সনদ আর ঝাঁটা — কারণ অফলাইন-ত্রুটি সাংবিধানিক, কৌশলগত নয়।',
      },
    },
    {
      q: { en: 'When do you reach for a Web Worker, and when is it a mistake?', bn: 'Web Worker কখন নেবেন, আর কখন ভুল?' },
      a: {
        en: 'Reach when the crate outweighs the stamps. The arithmetic has three absolute costs: spawn is hull-price (tens of milliseconds plus an isolated heap), envelopes are stamp-price (structured clone, depth-priced), results arrive at async-distance. Honest heft: megabyte parsing, image pipelines, cryptography, 60Hz physics, big indexing. The mistake — the suitcase crane — is towing cheap work at small frequencies: a 3ms parse mailed to a thread arrives slower than the pier’s own patience, and everyone waits on ferries. The counter line is always: show me the weight in milliseconds, the payload in megabytes, and the ferry distance — then I book your crane. And use Transferables for bulk: ownership re-registration at rename price, with byteLength 0 as the lawful receipt.',
        bn: 'বাক্স মোহরের চেয়ে ভারী হলে নিন। পাটিগণিতে তিনটি পরম খরচ: স্পন কাঠামো-মূল্য (কয়েক দশক মিলিসেকেন্ড সঙ্গে বিচ্ছিন্ন হিপ), খাম মোহর-মূল্য (structured clone, গভীরতা-মূল্যকৃত), ফলাফল আসে অ্যাসিঙ্ক-দূরত্বে। সৎ-ভার: মেগাবাইট-পার্সিং, ইমেজ-পাইপলাইন, ক্রিপ্টোগ্রাফি, 60Hz-পদার্থবিদ্যা, বড় সূচিকরণ। ভুল — সুটকেস-ক্রেন — ছোট-কম্পাঙ্কে সস্তা কাজ টানা: থ্রেডে-পাঠানো 3ms পার্স ফিরে আসে ঘাটের-নিজস্ব ধৈর্যের চেয়ে ধীরে, সবাই ফেরির অপেক্ষায় থাকে। কাউন্টার-লাইন সর্বদা: মিলিসেকেন্ডে ওজন দেখান, মেগাবাইটে পেলোড, ফেরি-দূরত্ব — তারপর আপনার ক্রেন বুক করব। আর বাল্কে Transferables নিন: নামান্তর-মূল্যে মালিকানা পুনঃনিবন্ধন, বৈধ-রসিদরূপে byteLength 0 সহ।',
      },
    },
  ],
  realWorld: [
    { en: 'E-commerce checkouts: fetch voyages with recall bells and honest retries; idempotency keyed by deeds; refusal pages that never render as success.', bn: 'ই-কমার্স চেকআউট: ফেরত-ঘণ্টা-সৎ-পুনঃচেষ্টাসহ fetch-যাত্রা; দলিলে-চাবিকৃত নিরপেক্ষতা; প্রত্যাখ্যান-পৃষ্ঠা যা সাফল্যে রেন্ডার হয় না কখনোই।' },
    { en: 'Offline field apps: bonded warehouses for weeks of records, customs houses for shells, tax ledgers read at boot before long syncs.', bn: 'অফলাইন মাঠের-অ্যাপ: সপ্তাহভর রেকর্ডের বন্ডেড-গুদাম, খোলের শুল্কঘর, দীর্ঘ সিঙ্কের আগে বুটে পঠিত কর-খাতা।' },
    { en: 'Media publishers: lighthouse economics on infinite walls, impression accounting at graduated thresholds, zero-scroll-listener performance budgets.', bn: 'মিডিয়া-প্রকাশক: অসীম দেয়ালে বাতিঘর-অর্থনীতি, স্নাতককৃত-থ্রেশহোল্ডে ইমপ্রেশন-হিসাব, শূন্য-scroll-শ্রোতা পারফরম্যান্স-বাজেট।' },
    { en: 'Collaborative tools: ferry heralds across tabs, warehouse custody for drafts, crane pools for reconciliation pipelines.', bn: 'সহযোগী-সরঞ্জাম: ট্যাবে-ট্যাবে ফেরি-ঘোষক, খসড়ার গুদাম-হেফাজত, মিলন-পাইপলাইনের ক্রেন-পুল।' },
    { en: 'Enterprise dashboards: detection-first builds surviving policy-gated hulls, permission UX as a measured funnel, shipped sheets priced on vocabulary breadth.', bn: 'এন্টারপ্রাইজ-ড্যাশবোর্ড: নীতি-বেষ্টিত কাঠামোয়-টিকে-থাকা ডিটেকশন-ফার্স্ট বিল্ড, মাপা-ফানেলরূপে পারমিশন-UX, শব্দভাণ্ডার-বিস্তারে-মূল্যকৃত চালানকৃত-শিট।' },
  ],
  lessons: [harborCharterLesson, cargoManifestLesson, warehouseDistrictLesson, lighthouseKeepersLesson, tugboatFleetLesson, harborServicesLesson, harborCompassLesson, harborRehearsalLesson],
  references: [],
};
