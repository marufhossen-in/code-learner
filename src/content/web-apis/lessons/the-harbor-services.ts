import type { Lesson } from '../../../lib/types';

export const harborServicesLesson: Lesson = {
  slug: 'the-harbor-services',
  tech: 'web-apis',
  title: {
    en: 'Hardware & Gated APIs — Geolocation, Clipboard, Notifications, and Media',
    bn: 'হার্ডওয়্যার ও গেটেড এপিআই: জিওলোকেশন, ক্লিপবোর্ড, নোটিফিকেশন ও মিডিয়া'
  },
  summary: {
    en: 'Modern web applications integrate with native operating system capabilities to deliver rich, desktop-grade user experiences. In this lesson, you will master the browser hardware and gated service APIs: the Geolocation API (`getCurrentPosition` and `watchPosition`), the asynchronous Clipboard API (`writeText` and `readText`), system Notifications (`Notification.requestPermission`), and the File System Access API. Understand the strict browser security barriers protecting sensitive APIs: transient user activation, HTTPS secure contexts, origin binding, and graceful permission handling. Implement an executable hardware and permissions state evaluator in TypeScript.',
    bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনগুলো অপারেটিং সিস্টেমের নেটিভ সুবিধার সাথে যুক্ত হয়ে চমৎকার ডেস্কটপ মানের অভিজ্ঞতা দেয়। এই পাঠে আপনি ব্রাউজারের হার্ডওয়্যার ও সুরক্ষিত সার্ভিস এপিআই শিখবেন: Geolocation API (`getCurrentPosition` ও `watchPosition`), অ্যাসিঙ্ক্রোনাস Clipboard API (`writeText` ও `readText`), সিস্টেম নোটিফিকেশন (`Notification.requestPermission`) এবং ফাইল সিস্টেম এক্সেস এপিআই। ব্যবহারকারীর ক্লিক জেসচার, HTTPS সিকিউর কনটেক্সট এবং পারমিশন হ্যান্ডলিংয়ের মতো ব্রাউজার নিরাপত্তা সুরক্ষা বিশদভাবে জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর হার্ডওয়্যার ও পারমিশন মূল্যায়নকারী বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'gated-hardware-frontier-overview',
      text: {
        en: 'The Gated Hardware Frontier: Why User Consent Governs Device APIs',
        bn: 'সুরক্ষিত হার্ডওয়্যার পরিমণ্ডল: কেন ব্যবহারকারীর অনুমতি অপরিহার্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your web application interacts with physical hardware sensors or private operating system data, browser security policies strictly guard user privacy.',
        bn: 'ওয়েব অ্যাপ্লিকেশন যখন ডিভাইসের হার্ডওয়্যার সেন্সর বা অপারেটিং সিস্টেমের গোপন ডেটার সাথে কাজ করে, তখন ব্রাউজারের নিরাপত্তা নীতি ব্যবহারকারীর গোপনীয়তা কঠোরভাবে রক্ষা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike reading DOM elements or styling CSS, accessing physical device capabilities represents an immediate privacy risk. Geolocation reveals the exact physical latitude and longitude coordinates of the user. The Clipboard can contain sensitive passwords, private credit card numbers, or cryptographic tokens copied from another window. System Notifications can spam the desktop tray and disrupt the operating system. Because of these risks, modern browsers classify device interfaces as Gated APIs. They enforce two mandatory security barriers: First, Secure Contexts (the application must run over HTTPS or localhost). Second, Transient User Activation (the API call must be directly triggered by a physical user click or keypress).',
        bn: 'এইচটিএমএল পড়া বা সিএসএস বদলানোর মতো সাধারণ কাজের চেয়ে ডিভাইসের হার্ডওয়্যার অ্যাক্সেস করা অনেক বেশি সংবেদনশীল। জিওলোকেশন ব্যবহারকারীর ভৌগোলিক অক্ষাংশ ও দ্রাঘিমাংশ সরাসরি প্রকাশ করে দেয়। ক্লিপবোর্ডে অন্য উইন্ডো থেকে কপি করা গোপন পাসওয়ার্ড বা ক্রেডিট কার্ডের তথ্য থাকতে পারে। আবার সিস্টেম নোটিফিকেশন ডেস্কটপে বিরক্তির সৃষ্টি করতে পারে। এই ঝুঁকির কারণে ব্রাউজার এগুলোকে গেটেড এপিআই (Gated APIs) হিসেবে চিহ্নিত করে। ব্রাউজার এতে দুটি বাধ্যতামূলক নিরাপত্তা প্রাচীর নিশ্চিত করে: প্রথমত, সিকিউর কনটেক্সট (অ্যাপ্লিকেশনকে অবশ্যই HTTPS বা লোকালহোস্টে চলতে হবে)। দ্বিতীয়ত, ট্রানজিয়েন্ট ইউজার অ্যাক্টিভেশন (কোনো বোতামে ব্যবহারকারী নিজে ক্লিক বা স্পর্শ করার মুহূর্তেই কেবল এপিআইটি কার্যকর হতে পারবে)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'geolocation-api',
          def: {
            en: 'Standard browser interface accessing GPS hardware, cellular towers, and Wi-Fi networks to report device geographic coordinates.',
            bn: 'ডিভাইসের জিপিএস হার্ডওয়্যার, সেলুলার টাওয়ার ও ওয়াইফাই তথ্য ব্যবহার করে ভৌগোলিক অবস্থান নির্ণয়কারী ব্রাউজার এপিআই।'
          }
        },
        {
          term: 'clipboard-api',
          def: {
            en: 'Modern asynchronous interface reading and writing text and binary images to the system clipboard securely without execCommand.',
            bn: 'অপারেটিং সিস্টেমের ক্লিপবোর্ডে লেখা ও ছবি সুরক্ষিতভাবে কপি ও পেস্ট করার আধুনিক অ্যাসিঙ্ক্রোনাস ব্রাউজার ইন্টারফেস।'
          }
        },
        {
          term: 'notification-api',
          def: {
            en: 'An operating system integration API displaying alert banners outside the browser window even when the page tab is minimized.',
            bn: 'ব্রাউজার উইন্ডোর বাইরে অপারেটিং সিস্টেমের নিজস্ব ট্রেতে অ্যালার্ট ব্যানার প্রদর্শন করার একটি নেটিভ এপিআই।'
          }
        },
        {
          term: 'transient-user-activation',
          def: {
            en: 'A temporary security window granted by the browser engine following a user click or keypress, permitting calls to gated device APIs.',
            bn: 'ব্যবহারকারী কোনো বোতামে ক্লিক বা টাচ করলে ব্রাউজার যে ক্ষণস্থায়ী অনুমোদনের সুযোগ দেয় যার মধ্যে সংবেদনশীল এপিআই কল করা যায়।'
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
      id: 'device-apis-comparison-table',
      text: {
        en: 'Comparative Architecture: Browser Device and Service APIs',
        bn: 'ব্রাউজার ডিভাইস ও সার্ভিস এপিআইয়ের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Device APIs require different levels of user interaction and permission prompts depending on privacy severity.',
        bn: 'গোপনীয়তার মাত্রার ওপর ভিত্তি করে বিভিন্ন ডিভাইস এপিআইয়ের জন্য ভিন্ন ভিন্ন স্তরের অনুমতি ও ইন্টারঅ্যাকশনের প্রয়োজন হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Web API Interface', bn: 'ওয়েব এপিআই ইন্টারফেস' },
        { en: 'Primary Methods', bn: 'প্রধান মেথডসমূহ' },
        { en: 'Browser Permission Prompt', bn: 'অনুমতির ধরন' },
        { en: 'User Gesture Mandated?', bn: 'ক্লিক জেসচার বাধ্যতামূলক?' }
      ],
      rows: [
        [
          { en: 'Geolocation API', bn: 'Geolocation API' },
          { en: 'navigator.geolocation.getCurrentPosition, watchPosition', bn: 'getCurrentPosition, watchPosition' },
          { en: 'One-time browser permission dialogue ("Allow location?")', bn: 'এককালীন ব্রাউজার প্রম্পট ("লোকেশন ব্যবহারের অনুমতি?")' },
          { en: 'Recommended: browser blocks unprompted background calls', bn: 'প্রস্তাবিত: সরাসরি ব্যাকগ্রাউন্ডে কল করলে ব্রাউজার আটকে দেয়' }
        ],
        [
          { en: 'Clipboard API', bn: 'Clipboard API' },
          { en: 'navigator.clipboard.writeText, navigator.clipboard.readText', bn: 'navigator.clipboard.writeText, readText' },
          { en: 'writeText is automatic on click; readText requires explicit prompt', bn: 'ক্লিকের সময় writeText সরাসরি চলে; readText-এ প্রম্পট লাগে' },
          { en: 'Strictly Yes: requires active user gesture and document focus', bn: 'কঠোরভাবে হ্যাঁ: সক্রিয় ব্যবহারকারী ক্লিক ও পেজ ফোকাস থাকা আবশ্যক' }
        ],
        [
          { en: 'Notifications API', bn: 'Notifications API' },
          { en: 'Notification.requestPermission, new Notification(title)', bn: 'Notification.requestPermission, new Notification' },
          { en: 'Explicit system permission prompt ("Show notifications?")', bn: 'সিস্টেম পারমিশন প্রম্পট ("নোটিফিকেশন দেখানোর অনুমতি?")' },
          { en: 'Strictly Yes: requestPermission must be invoked inside user clicks', bn: 'কঠোরভাবে হ্যাঁ: বাটনে ক্লিক করার পরেই রিকোয়েস্ট করতে হয়' }
        ],
        [
          { en: 'File System Access API', bn: 'File System Access API' },
          { en: 'window.showOpenFilePicker, window.showSaveFilePicker', bn: 'showOpenFilePicker, showSaveFilePicker' },
          { en: 'Operating system native file dialogue per file selection', bn: 'প্রতি ফাইল নির্বাচনের সময় অপারেটিং সিস্টেমের নেটিভ ফাইল উইন্ডো' },
          { en: 'Strictly Yes: only callable from direct user button activation', bn: 'কঠোরভাবে হ্যাঁ: ব্যবহারকারীর সক্রিয় বাটন ক্লিক ছাড়া কল করা অসম্ভব' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-hardware-simulation-code',
      text: {
        en: 'Executable Hardware Services Simulator in TypeScript',
        bn: 'হার্ডওয়্যার সার্ভিসেস সিমুলেটরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how modern applications query Geolocation coordinates and evaluate accuracy trade-offs between physical GPS chips and power-efficient Wi-Fi triangulation.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি কীভাবে Geolocation স্থানাঙ্ক পর্যবেক্ষণ করা হয় এবং জিপিএস চিপ বনাম বিদ্যুৎ-সাশ্রয়ী ওয়াইফাই ট্রায়াঙ্গুলেশনের পার্থক্য হিসাব করা হয় তা প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Device Geolocation and Battery Profiles

interface GeolocationResult {
  ok: boolean;
  latitude: number | null;
  longitude: number | null;
  accuracyMeters: number | null;
  powerConsumptionProfile: string;
  errorMessage: string | null;
}

function evaluateLocationFix(
  permission: 'granted' | 'denied',
  enableHighAccuracy: boolean = false
): GeolocationResult {
  if (permission === 'denied') {
    return {
      ok: false,
      latitude: null,
      longitude: null,
      accuracyMeters: null,
      powerConsumptionProfile: 'none',
      errorMessage: 'PERMISSION_DENIED'
    };
  }

  // When highAccuracy is true, the physical GPS receiver is engaged (5m accuracy, high power)
  // When false, cell tower & Wi-Fi triangulation is used (50m accuracy, low power)
  const accuracy = enableHighAccuracy ? 5 : 50;
  const power = enableHighAccuracy
    ? 'high_gps_active'
    : 'low_wifi_triangulated';

  return {
    ok: true,
    latitude: 23.8103,
    longitude: 90.4125,
    accuracyMeters: accuracy,
    powerConsumptionProfile: power,
    errorMessage: null
  };
}

const highAccuracyFix = evaluateLocationFix('granted', true);
const batterySaverFix = evaluateLocationFix('granted', false);
const blockedFix = evaluateLocationFix('denied', true);

console.log('High accuracy location fix ok:', highAccuracyFix.ok);
console.log('High accuracy error margin (meters):', highAccuracyFix.accuracyMeters);
console.log('Battery saver error margin (meters):', batterySaverFix.accuracyMeters);
console.log('Battery saver power consumption profile:', batterySaverFix.powerConsumptionProfile);
console.log('Blocked request error reason:', blockedFix.errorMessage);

// prints: High accuracy location fix ok: true
// prints: High accuracy error margin (meters): 5
// prints: Battery saver error margin (meters): 50
// prints: Battery saver power consumption profile: low_wifi_triangulated
// prints: Blocked request error reason: PERMISSION_DENIED`
    },
    {
      type: 'heading',
      id: 'battery-management-and-watchposition',
      text: {
        en: 'Battery Conservation and ClearWatch Protocols',
        bn: 'ব্যাটারি সাশ্রয় এবং ClearWatch প্রোটোকল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A severe operational bug in mobile web applications is leaving continuous geolocation tracking active indefinitely. Calling "navigator.geolocation.watchPosition()" instructs the mobile operating system to keep the physical GPS satellite chip energized continuously, draining 50% of phone battery within 1 hour. High-performance applications follow two rules. First, use single-shot "getCurrentPosition()" whenever possible. Second, if continuous tracking is required for navigation, store the returned tracking ID and call "navigator.geolocation.clearWatch(watchId)" as soon as tracking ends.',
        bn: 'মোবাইল ওয়েব অ্যাপ্লিকেশনে একটি মারাত্মক ত্রুটি হলো দীর্ঘসময় ধরে অবিরাম জিপিএস ট্র্যাকিং সচল রেখে দেওয়া। "navigator.geolocation.watchPosition()" কল করলে ফোনের ব্যাটারি খরচকারী ফিজিক্যাল জিপিএস চিপটি অবিরাম চালু থাকে, যার ফলে ১ ঘণ্টার মধ্যেই ফোনের ৫০% ব্যাটারি শেষ হয়ে যেতে পারে। উচ্চগতির অ্যাপ্লিকেশনগুলো ২টি নিয়ম মেনে চলে। প্রথমত, কেবল এককালীন অবস্থান জানতে "getCurrentPosition()" ব্যবহার করা। দ্বিতীয়ত, যদি নেভিগেশনের জন্য অবিরাম ট্র্যাকিং প্রয়োজন হয়, তবে কাজ শেষ হওয়ার সাথে সাথে "navigator.geolocation.clearWatch(watchId)" কল করে জিপিএস হার্ডওয়্যারটি বন্ধ করে দেওয়া।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Hardware APIs require user gestures: Always trigger Clipboard, Location, and Notifications from explicit user clicks.',
          bn: 'হার্ডওয়্যার এপিআইতে ক্লিক আবশ্যক: ক্লিপবোর্ড, লোকেশন ও নোটিফিকেশন সর্বদা ব্যবহারকারীর সরাসরি ক্লিকে ট্রিগার করুন।'
        },
        {
          en: 'Clipboard API is asynchronous: Use navigator.clipboard.writeText() instead of legacy document.execCommand() for clean, safe copying.',
          bn: 'ক্লিপবোর্ড এপিআই সম্পূর্ণ অ্যাসিঙ্ক্রোনাস: সেকেলে execCommand বাদ দিয়ে আধুনিক navigator.clipboard.writeText() ব্যবহার করুন।'
        },
        {
          en: 'Always clearWatch to save battery: Terminate GPS tracking with clearWatch(watchId) immediately when tracking is no longer needed.',
          bn: 'ব্যাটারি বাঁচাতে clearWatch করুন: কাজ শেষ হওয়ার সাথে সাথে জিপিএস ট্র্যাকিং বন্ধ করতে clearWatch(watchId) কল করুন।'
        },
        {
          en: 'Respect denied permission states: Provide helpful fallback instructions in your UI when users decline device permissions.',
          bn: 'অনুমতি না দিলে বিকল্প ব্যবস্থা রাখুন: ব্যবহারকারী অনুমতি বাতিল করলে বিরক্ত না করে সহায়ক বিকল্প নির্দেশনা প্রদর্শন করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-harbor-compass',
    tech: 'web-apis',
    title: {
      en: 'Navigation & Lifecycle APIs — URL, History, sendBeacon, and Page Visibility',
      bn: 'নেভিগেশন ও লাইফসাইকেল এপিআই: URL, হিস্ট্রি ও পেজ ভিজিবিলিটি'
    }
  },
  exercises: [
    {
      id: 'hs-ex1',
      kind: 'mcq',
      topic: 'clipboard-writetext-transient-activation',
      question: {
        en: 'Why does calling navigator.clipboard.writeText("hello") inside a setTimeout(..., 5000) callback fail in modern web browsers?',
        bn: 'setTimeout(..., 5000) কলব্যাকের ভেতরে navigator.clipboard.writeText("hello") কল করলে আধুনিক ব্রাউজারে কেন তা ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'The asynchronous 5000ms delay causes the browser Transient User Activation (user gesture) window to expire, blocking clipboard access as an unauthorized background mutation',
          bn: '৫০০০ মিলিসেকেন্ড বিলম্বের কারণে ব্রাউজারের ট্রানজিয়েন্ট ইউজার অ্যাক্টিভেশনের (ক্লিক জেসচার) মেয়াদ শেষ হয়ে যায়, যার ফলে ব্রাউজার এটিকে অননুমোদিত কাজ মনে করে আটকে দেয়'
        },
        {
          en: 'Because writeText only works on numbers, not English words',
          bn: 'কারণ writeText কেবল সংখ্যায় কাজ করে, ইংরেজি শব্দে নয়'
        },
        {
          en: 'setTimeout permanently disables the computer keyboard',
          bn: 'setTimeout কম্পিউটারের কিবোর্ড চিরতরে বন্ধ করে দেয়'
        },
        {
          en: 'The Clipboard API was outlawed by international treaties in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক আইনে ক্লিপবোর্ড নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'User gestures have an expiration window. A long timer decouples the action from the user click.',
        bn: 'ক্লিকের অনুমোদনের একটি ক্ষণস্থায়ী মেয়াদ থাকে; লম্বা টাইমার দিলে ব্রাউজার মনে করে এটি ব্যবহারকারী ছাড়া নিজে নিজে চলছে।'
      },
      explanation: {
        en: 'Writing to the clipboard requires transient user activation; long asynchronous delays cause the browser security token to expire.',
        bn: 'ক্লিপবোর্ডে লেখার জন্য সক্রিয় ব্যবহারকারীর ছোঁয়া দরকার; বিলম্বের কারণে টোকেনের মেয়াদ শেষ হয়ে যায়।'
      }
    },
    {
      id: 'hs-ex2',
      kind: 'mcq',
      topic: 'geolocation-getcurrentposition-vs-watchposition',
      question: {
        en: 'What is the fundamental functional difference between navigator.geolocation.getCurrentPosition() and navigator.geolocation.watchPosition()?',
        bn: 'navigator.geolocation.getCurrentPosition() এবং navigator.geolocation.watchPosition()-এর মধ্যে মূল কার্যকরী পার্থক্য কী?'
      },
      options: [
        {
          en: 'getCurrentPosition fetches the device coordinates exactly once and shuts down the sensor; watchPosition registers an active subscription that fires callbacks continuously as the device moves',
          bn: 'getCurrentPosition কেবল একবারের জন্য ডিভাইসের অবস্থান এনে সেন্সর বন্ধ করে দেয়; আর watchPosition একটি সক্রিয় সাবস্ক্রিপশন চালু রাখে যা ব্যবহারকারী স্থান পরিবর্তনের সাথে সাথে বারবার কলব্যাক চালায়'
        },
        {
          en: 'getCurrentPosition only works on desktop PCs while watchPosition is only for smartwatches',
          bn: 'getCurrentPosition কেবল ডেস্কটপে চলে আর watchPosition কেবল স্মার্টওয়াচে চলে'
        },
        {
          en: 'watchPosition permanently formats client device memory on every movement',
          bn: 'watchPosition নড়াচড়ার সময় মেমরি ফরম্যাট করে দেয়'
        },
        {
          en: 'getCurrentPosition was deprecated in 2023 and replaced by Google Maps',
          bn: 'কারণ ২০২৩ সালে getCurrentPosition বাতিল করে গুগল ম্যাপস বসানো হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'One-time snapshot vs continuous streaming subscription.',
        bn: 'এককালীন অবস্থান বনাম চলমান অবিরাম সাবস্ক্রিপশন।'
      },
      explanation: {
        en: 'getCurrentPosition retrieves a single coordinate snapshot; watchPosition establishes an ongoing sensor feed that must be cleared with clearWatch().',
        bn: 'getCurrentPosition একবারের জন্য ডেটা এনে থামে; watchPosition অবিরাম চলতে থাকে যা clearWatch দিয়ে থামাতে হয়।'
      }
    },
    {
      id: 'hs-ex3',
      kind: 'mcq',
      topic: 'notification-permission-best-practice',
      question: {
        en: 'Why is it considered a major UX anti-pattern to invoke Notification.requestPermission() immediately upon the initial page load of a website?',
        bn: 'ওয়েবসাইটের প্রথম পেজ লোডের সাথে সাথেই Notification.requestPermission() কল করাকে কেন অত্যন্ত বাজে ব্যবহারকারী অভিজ্ঞতা (UX Anti-pattern) হিসেবে গণ্য করা হয়?'
      },
      options: [
        {
          en: 'Users have not yet experienced value from the website and will reflexively click "Block", permanently disabling notifications for that origin unless manually reset in browser settings',
          bn: 'ব্যবহারকারী এখনো ওয়েবসাইটের কোনো সুবিধাই দেখতে পাননি, ফলে তিনি বিরক্ত হয়ে "Block" করে দেবেন এবং ভবিষ্যতে ব্রাউজার সেটিংস ছাড়া আর কখনোই নোটিফিকেশন পাঠানো যাবে না'
        },
        {
          en: 'Page-load notifications cause computer monitors to change screen resolution',
          bn: 'পেজ লোড নোটিফিকেশন মনিটরের রেজোলিউশন বদলে ফেলে'
        },
        {
          en: 'Because requesting notifications immediately shuts down server power supplies',
          bn: 'কারণ সাথে সাথে নোটিফিকেশন চাইলে সার্ভারের বিদ্যুৎ সংযোগ বন্ধ হয়ে যায়'
        },
        {
          en: 'Notification prompts on page load reduce internet speeds by 90 percent',
          bn: 'পেজ লোডে নোটিফিকেশন প্রম্পট ইন্টারনেটের গতি ৯০ শতাংশ কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'A blocked permission is permanent. Ask contextually when the user opts in (e.g. clicking "Notify me of order updates").',
        bn: 'একবার ব্লক করলে তা স্থায়ী হয়ে যায়; তাই ব্যবহারকারী নিজ ইচ্ছায় বাটন ক্লিক করলেই কেবল অনুমতি চাওয়া উচিত।'
      },
      explanation: {
        en: 'Requesting permission in context after demonstrating clear user value dramatically increases opt-in conversion and avoids permanent user blocks.',
        bn: 'কাজের প্রেক্ষাপটে ব্যবহারকারীর সম্মতির সাথে অনুমতি চাইলে গ্রহণযোগ্যতা বাড়ে এবং স্থায়ী ব্লক এড়ানো যায়।'
      }
    },
    {
      id: 'hs-ex4',
      kind: 'mcq',
      topic: 'file-system-access-api-native-handling',
      question: {
        en: 'How does the modern File System Access API (window.showOpenFilePicker) improve web applications compared to legacy <input type="file"> elements?',
        bn: 'সেকেলে <input type="file"> উপাদানের তুলনায় আধুনিক File System Access API (window.showOpenFilePicker) ওয়েব অ্যাপ্লিকেশনকে কীভাবে অনেক বেশি শক্তিশালী করে তোলে?'
      },
      options: [
        {
          en: 'It returns interactive FileSystemFileHandles, allowing web applications to read files, write changes back in-place atomically, and even access whole directories like a native desktop editor',
          bn: 'এটি সরাসরি ইন্টারঅ্যাক্টিভ FileSystemFileHandle ফেরত দেয়, যার ফলে ওয়েব অ্যাপগুলো ফাইল পড়ার পাশাপাশি সরাসরি সেখানেই পরিবর্তন লিখে সেভ করতে পারে এবং ডেস্কটপ সফটওয়্যারের মতো পুরো ফোল্ডার অ্যাক্সেস করতে পারে'
        },
        {
          en: 'It reduces computer operating system storage costs to zero dollars',
          bn: 'এটি অপারেটিং সিস্টেমের স্টোরেজ খরচ শূন্য টাকায় নামিয়ে আনে'
        },
        {
          en: 'Because showOpenFilePicker was created by the International Postal Union',
          bn: 'কারণ আন্তর্জাতিক ডাক সংস্থা এটি তৈরি করেছিল'
        },
        {
          en: 'It automatically translates all text files into Japanese characters',
          bn: 'এটি সব ফাইলকে জাপানি ভাষায় রূপান্তর করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Direct read-and-write file handles turn the browser into a real desktop text/code editor.',
        bn: 'সরাসরি ফাইলে পড়ার ও লেখার ক্ষমতা ব্রাউজারকে একটি পূর্ণাঙ্গ ডেস্কটপ এডিটরে পরিণত করে।'
      },
      explanation: {
        en: 'The File System Access API enables real two-way file workflows (open, edit, save in-place) without forcing awkward download-and-re-upload cycles.',
        bn: 'ফাইল সিস্টেম এক্সেস এপিআই বারবার ডাউনলোড ও আপলোডের ঝামেলা দূর করে সরাসরি ফাইলে কাজ করার সুবিধা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'harbor-services-quiz',
    title: {
      en: 'Hardware APIs, Permissions, and Clipboard Security Quiz',
      bn: 'হার্ডওয়্যার এপিআই, পারমিশন ও ক্লিপবোর্ড নিরাপত্তা কুইজ'
    },
    questions: [
      {
        id: 'hsq-q1',
        kind: 'mcq',
        topic: 'clipboard-readtext-user-security',
        question: {
          en: 'Why does navigator.clipboard.readText() require an explicit browser permission dialogue even if writeText() does not during a user click?',
          bn: 'ব্যবহারকারীর ক্লিকে writeText() সরাসরি কাজ করলেও কেন navigator.clipboard.readText() চালানোর সময় ব্রাউজারে স্পষ্ট অনুমতি প্রম্পটের প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'Reading the clipboard exposes sensitive private data (such as passwords, credit card numbers, or personal notes) that the user may have copied from another application entirely',
            bn: 'ক্লিপবোর্ড পড়ার মাধ্যমে ব্যবহারকারীর অত্যন্ত সংবেদনশীল তথ্য (যেমন অন্য অ্যাপ থেকে কপি করা পাসওয়ার্ড বা ক্রেডিট কার্ড নম্বর) ফাঁস হয়ে যেতে পারে'
          },
          {
            en: 'Because reading text consumes 500 times more battery than writing text',
            bn: 'কারণ টেক্সট পড়তে লেখার চেয়ে ৫০০ গুণ বেশি ব্যাটারি খরচ হয়'
          },
          {
            en: 'Reading clipboard text formats the client hard drive immediately',
            bn: 'ক্লিপবোর্ড পড়লে সাথে সাথে হার্ড ড্রাইভ ফরম্যাট হয়ে যায়'
          },
          {
            en: 'Clipboard reading was declared illegal by the United Nations in 2022',
            bn: 'কারণ ২০২২ সালে জাতিসংঘ ক্লিপবোর্ড পড়া নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pastes are dangerous: the page could steal whatever secrets are currently in your OS clipboard.',
          bn: 'ক্লিপবোর্ডে আপনার ব্যক্তিগত যেকোনো গোপন তথ্য থাকতে পারে, যা কোনো অসৎ সাইট চুরি করতে পারে।'
        },
        explanation: {
          en: 'Clipboard read access poses severe privacy and credential-theft hazards, necessitating explicit user consent and active document focus.',
          bn: 'ব্যবহারকারীর গোপন ডেটা ও পাসওয়ার্ড চুরি হওয়া ঠেকাতে ক্লিপবোর্ড পড়ার জন্য কঠোর অনুমতি প্রয়োজন।'
        }
      },
      {
        id: 'hsq-q2',
        kind: 'mcq',
        topic: 'enablehighaccuracy-gps-tradeoff',
        question: {
          en: 'What is the architectural tradeoff of setting enableHighAccuracy: true when requesting coordinates from navigator.geolocation?',
          bn: 'navigator.geolocation থেকে অবস্থান চাওয়ার সময় enableHighAccuracy: true সেট করার প্রযুক্তিগত আপস কী?'
        },
        options: [
          {
            en: 'It powers on physical device GPS hardware to deliver meter-level accuracy (e.g. ~5 meters), at the direct expense of higher battery drainage and several seconds of satellite acquisition delay',
            bn: 'এটি সুনির্দিষ্ট অবস্থান (যেমন প্রায় ৫ মিটার নির্ভুলতা) দিতে ডিভাইসের ফিজিক্যাল জিপিএস চিপ চালু করে, যার বিনিময়ে ব্যাটারি দ্রুত শেষ হয় এবং স্যাটেলাইট সংযোগে কয়েক সেকেন্ড বেশি সময় লাগে'
          },
          {
            en: 'It increases mobile phone monthly cellular bills by 200 percent',
            bn: 'এটি মোবাইলের মাসিক বিল ২০০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'Because enableHighAccuracy causes computer monitors to lose color',
            bn: 'কারণ এতে মনিটরের রঙ নষ্ট হয়ে যায়'
          },
          {
            en: 'It permanently disables Wi-Fi connections on the client device',
            bn: 'এটি ডিভাইসের ওয়াইফাই সংযোগ চিরতরে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'High accuracy means turning on the GPS satellite chip. Accurate, but battery-heavy and slower.',
          bn: 'উচ্চ নির্ভুলতা মানে জিপিএস স্যাটেলাইট চিপ চালু করা; নির্ভুল কিন্তু ব্যাটারি খরচ বেশি।'
        },
        explanation: {
          en: 'Physical GPS chips consume significant electrical power and require line-of-sight satellite fixes, whereas Wi-Fi/cellular triangulation is fast and power-efficient.',
          bn: 'জিপিএস চিপ প্রচুর ব্যাটারি খরচ করে স্যাটেলাইটের সাথে যুক্ত হয়, আর ওয়াইফাই বা টাওয়ার ভিত্তিক লোকেশন দ্রুত এবং কম ব্যাটারি খরচ করে।'
        }
      },
      {
        id: 'hsq-q3',
        kind: 'mcq',
        topic: 'notification-tag-deduplication',
        question: {
          en: 'In web push notifications, what is the purpose of specifying a "tag" option (e.g. new Notification("New message", { tag: "chat-alice" }))?',
          bn: 'ওয়েব পুশ নোটিফিকেশনে "tag" অপশন ব্যবহারের (যেমন new Notification("New message", { tag: "chat-alice" })) উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'Notification Deduplication: if a previous notification with the same tag is already displayed on the user screen, the new notification cleanly replaces it in-place instead of stacking duplicate alerts',
            bn: 'নোটিফিকেশন ডুপ্লিকেট রোধ: একই ট্যাগের কোনো নোটিফিকেশন স্ক্রিনে আগেই থাকলে নতুন নোটিফিকেশনটি তাকে প্রতিস্থাপন করে, ফলে স্ক্রিনে একাধিক একই বার্তার ভিড় জমে না'
          },
          {
            en: 'Tags permanently encrypt all notification text into secret ciphers',
            bn: 'ট্যাগ সমস্ত নোটিফিকেশনকে গোপন কোডে রূপান্তর করে'
          },
          {
            en: 'Because tags format the client mobile device upon delivery',
            bn: 'কারণ ট্যাগ নোটিফিকেশন পাওয়ার সাথে সাথে ডিভাইস ফরম্যাট করে'
          },
          {
            en: 'It reduces notification delivery fees charged by Google and Apple',
            bn: 'এটি গুগল এবং অ্যাপলের নোটিফিকেশন ফি কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Same tag = replace the old notification instead of popping up 50 annoying bubbles.',
          bn: 'একই ট্যাগ থাকলে আগের নোটিফিকেশনটি আপডেট হয়, ফলে ৫০টি আলাদা পপআপে স্ক্রিন ভরে যায় না।'
        },
        explanation: {
          en: 'The tag attribute coordinates alert replacement, ensuring message streams update cleanly without flooding the user operating system notification tray.',
          bn: 'ট্যাগ অ্যাট্রিবিউট একই ধরনের বার্তাকে সুন্দরভাবে আগেরটির জায়গায় আপডেট করে পরিচ্ছন্ন অভিজ্ঞতা দেয়।'
        }
      },
      {
        id: 'hsq-q4',
        kind: 'mcq',
        topic: 'webauthn-passkeys-phishing-resistance',
        question: {
          en: 'Why are WebAuthn Passkeys (navigator.credentials) mathematically immune to credential phishing attacks that steal traditional passwords?',
          bn: 'যে ফিশিং আক্রমণগুলো সাধারণ পাসওয়ার্ড চুরি করে নেয়, তার বিরুদ্ধে WebAuthn পাসকি (Passkeys) কেন গাণিতিকভাবে শতভাগ নিরাপদ?'
        },
        options: [
          {
            en: 'Passkey cryptographic keypairs are strictly bound to the origin domain; the browser hardware authenticator will refuse to sign authentication challenges sent by an imposter phishing domain',
            bn: 'পাসকি কি-পেয়ারটি কঠোরভাবে নির্দিষ্ট ডোমেইনের সাথে আবদ্ধ থাকে; কোনো ভুয়া বা নকল ফিশিং ডোমেইন থেকে সাইন-ইন রিকোয়েস্ট এলে ব্রাউজারের হার্ডওয়্যার অথেন্টিকেটর তা সরাসরি প্রত্যাখ্যান করে'
          },
          {
            en: 'Because passkeys require users to write passwords on paper',
            bn: 'কারণ পাসকিতে ব্যবহারকারীকে কাগজে পাসওয়ার্ড লিখতে হয়'
          },
          {
            en: 'Passkeys format the hacker computer automatically upon detection',
            bn: 'পাসকি হ্যাকারের কম্পিউটার নিজে থেকেই ফরম্যাট করে দেয়'
          },
          {
            en: 'WebAuthn passkeys were invented by international shipping companies',
            bn: 'কারণ আন্তর্জাতিক শিপিং কোম্পানি পাসকি তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Domain origin binding: a key created for "bank.com" cannot be used on "fake-bank.com".',
          bn: 'ডোমেইন বাইন্ডিং: "bank.com"-এর জন্য তৈরি পাসকি কোনো নকল "fake-bank.com"-এ কখনোই কাজ করবে না।'
        },
        explanation: {
          en: 'WebAuthn keys are scoped cryptographically to the registering origin, preventing malicious lookalike sites from harvesting authentication signatures.',
          bn: 'WebAuthn ক্রিপ্টোগ্রাফিক নিয়ম মেনে নির্দিষ্ট ডোমেইনের বাইরে কোনো স্বাক্ষর দেয় না, ফলে ফিশিং পুরোপুরি অচল হয়ে পড়ে।'
        }
      }
    ]
  }
};
