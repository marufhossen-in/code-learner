import type { Lesson } from '../../../lib/types';

export const harborCompassLesson: Lesson = {
  slug: 'the-harbor-compass',
  tech: 'web-apis',
  title: {
    en: 'Navigation & Lifecycle APIs — URL, History, sendBeacon, and Page Visibility',
    bn: 'নেভিগেশন ও লাইফসাইকেল এপিআই: URL, হিস্ট্রি, sendBeacon ও পেজ ভিজিবিলিটি'
  },
  summary: {
    en: 'Client-side Single Page Applications require clean routing and dependable lifecycle event handling. In this lesson, you will master modern navigation APIs. Parse and mutate query parameters with URL and URLSearchParams, implement client-side routing with history.pushState() and popstate, and transmit departure analytics via navigator.sendBeacon(). You will also conserve battery with the Page Visibility API and monitor network status. Implement an executable URL routing and search parameter manager in TypeScript.',
    bn: 'ক্লায়েন্ট-সাইড সিঙ্গেল পেজ অ্যাপ্লিকেশন পরিচালনায় নিখুঁত রাউটিং এবং পেজের জীবনচক্র নিয়ন্ত্রণ অত্যন্ত গুরুত্বপূর্ণ। এই পাঠে আপনি আধুনিক নেভিগেশন এপিআইগুলো শিখবেন। URL এবং URLSearchParams দিয়ে কুয়েরি প্যারামিটার পরিচালনা, history.pushState() ও popstate দিয়ে ক্লায়েন্ট রাউটিং এবং navigator.sendBeacon() দিয়ে অ্যানালিটিক্স পাঠানো শিখবেন। এছাড়া পেজ ভিজিবিলিটি এপিআই ও নেটওয়ার্ক স্থিতি পর্যবেক্ষণ বিশদভাবে আলোচনা করা হয়েছে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর URL রাউটিং ও প্যারামিটার ম্যানেজার বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'navigation-architecture-and-spas',
      text: {
        en: 'The Architecture of Navigation: Beyond Server Page Reloads',
        bn: 'নেভিগেশন আর্কিটেকচার: সার্ভার পেজ রিলোডের বাইরে ক্লায়েন্ট রাউটিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern single-page web applications, address bar web addresses (URLs) must update cleanly without causing full page reloads.',
        bn: 'আপনি যখন আধুনিক সিঙ্গেল পেজ ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন পুরো পেজ নতুন করে রিলোড না দিয়েই ব্রাউজারের ওয়েব ঠিকানা (URLs) পরিবর্তন হওয়া অপরিহার্য।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In early web architecture, changing the browser address bar required fetching an entirely new HTML document from the server. Modern frontend frameworks execute client-side routing using the HTML5 History API (pushState and replaceState). Calling "history.pushState(state, \'\', url)" rewrites the browser address bar and pushes a new entry onto the navigation stack without making a network request or flashing a white screen. When the user clicks the browser Back or Forward buttons, the browser dispatches a "popstate" event containing the previously saved state object, allowing JavaScript to re-render the appropriate view instantly. Together with the URL and URLSearchParams APIs, frontend developers gain full programmatic control over web navigation.',
        bn: 'আগে ব্রাউজারের অ্যাড্রেস বারের ঠিকানা বদলাতে হলে সার্ভার থেকে একটি সম্পূর্ণ নতুন এইচটিএমএল পেজ ডাউনলোড করতে হতো। আধুনিক ফ্রন্টএন্ড ফ্রেমওয়ার্কগুলো HTML5 হিস্ট্রি এপিআই (pushState এবং replaceState) ব্যবহার করে ক্লায়েন্ট-সাইড রাউটিং সম্পন্ন করে। "history.pushState(state, \'\', url)" কল করলে কোনো নেটওয়ার্ক রিকোয়েস্ট না পাঠিয়ে এবং স্ক্রিন না কাঁপিয়েই অ্যাড্রেস বারের ঠিকানা বদলে যায় এবং হিস্ট্রি স্ট্যাকে নতুন এন্ট্রি জমা হয়। ব্যবহারকারী যখন ব্রাউজারের ব্যাক বা ফরোয়ার্ড বোতাম চাপেন, তখন ব্রাউজার একটি "popstate" ইভেন্ট পাঠায় যাতে সংরক্ষিত স্টেট অবজেক্ট থাকে, যার মাধ্যমে জাভাস্ক্রিপ্ট মুহূর্তের মধ্যে পেজের সঠিক দৃশ্য প্রদর্শন করে। URL এবং URLSearchParams এপিআইয়ের সাথে মিলিয়ে ডেভেলপাররা ওয়েব নেভিগেশনের ওপর পূর্ণ নিয়ন্ত্রণ লাভ করেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'url-search-params',
          def: {
            en: 'Standard browser interface for parsing, querying, and mutating query string parameters without brittle regular expressions.',
            bn: 'জটিল রেগুলার এক্সপ্রেশন ছাড়াই ইউআরএল কুয়েরি স্ট্রিং সহজে পড়া, খোঁজা এবং পরিবর্তন করার মানসম্মত ব্রাউজার অবজেক্ট।'
          }
        },
        {
          term: 'history-pushstate',
          def: {
            en: 'A History API method adding a new entry to the browser navigation stack and changing the URL bar without reloading the page.',
            bn: 'হিস্ট্রি এপিআইয়ের একটি মেথড যা পেজ রিলোড না করেই ব্রাউজার স্ট্যাকে নতুন ঠিকানা যোগ করে অ্যাড্রেস বার আপডেট করে।'
          }
        },
        {
          term: 'send-beacon',
          def: {
            en: 'An asynchronous method transmitting small telemetry payloads to web servers during page unloading without blocking user navigation.',
            bn: 'একটি নির্ভরযোগ্য মেথড যা ব্যবহারকারী পেজ ছেড়ে যাওয়ার সময় নেভিগেশন আটকে না রেখেই সার্ভারে অ্যানালিটিক্স ডেটা পাঠায়।'
          }
        },
        {
          term: 'page-visibility-api',
          def: {
            en: 'An event-driven interface detecting when a user minimizes a browser window or switches tabs (document.visibilityState).',
            bn: 'একটি ব্রাউজার ইন্টারফেস যা ব্যবহারকারী ট্যাব পরিবর্তন করলে বা উইন্ডো মিনিমাইজ করলে তা শনাক্ত করে সংকেত দেয়।'
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
      id: 'navigation-lifecycle-comparison-table',
      text: {
        en: 'Comparative Architecture: Navigation and Lifecycle APIs',
        bn: 'নেভিগেশন ও লাইফসাইকেল এপিআইসমূহের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern web applications utilize specialized APIs to govern address state, user navigation, and background resource throttling.',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনগুলো ইউআরএল অবস্থা, ব্রাউজিং হিস্ট্রি এবং ব্যাকগ্রাউন্ড রিসোর্স নিয়ন্ত্রণের জন্য বিশেষায়িত এপিআই ব্যবহার করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Web API Interface', bn: 'ওয়েব এপিআই ইন্টারফেস' },
        { en: 'Core Methods & Properties', bn: 'প্রধান মেথড ও প্রপার্টি' },
        { en: 'Primary Architectural Role', bn: 'প্রধান আর্কিটেকচারাল ভূমিকা' },
        { en: 'Key Operational Benefit', bn: 'মূল প্রযুক্তিগত সুবিধা' }
      ],
      rows: [
        [
          { en: 'URL & URLSearchParams', bn: 'URL ও URLSearchParams' },
          { en: 'new URL(href), params.get(), params.set(), params.append()', bn: 'new URL, params.get, params.set, params.append' },
          { en: 'Parsing and mutating query parameters and structured URLs', bn: 'ইউআরএল কুয়েরি প্যারামিটার নির্ভরযোগ্যভাবে পড়া ও পরিবর্তন' },
          { en: 'Automatic URL-encoding (+ vs %20); eliminates brittle string splitting', bn: 'স্বয়ংক্রিয় ইউআরএল এনকোডিং; ম্যানুয়াল স্ট্রিং ভাঙার ঝামেলা দূর করে' }
        ],
        [
          { en: 'History API', bn: 'History API' },
          { en: 'history.pushState, history.replaceState, popstate event', bn: 'history.pushState, replaceState, popstate' },
          { en: 'Single Page Application (SPA) client-side routing', bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনের (SPA) ক্লায়েন্ট-সাইড রাউটিং' },
          { en: 'Updates URL and back/forward stack with zero page reloads', bn: 'কোনো পেজ রিলোড ছাড়াই ব্যাক ও ফরোয়ার্ড স্ট্যাক আপডেট করে' }
        ],
        [
          { en: 'sendBeacon API', bn: 'sendBeacon API' },
          { en: 'navigator.sendBeacon(url, data)', bn: 'navigator.sendBeacon(url, data)' },
          { en: 'Asynchronous session-end analytics and departure telemetry', bn: 'পেজ বন্ধের মুহূর্তে সেশন শেষ এবং অ্যানালিটিক্স ডেটা প্রেরণ' },
          { en: 'Non-blocking: browser guarantees delivery even after page unloads', bn: 'নন-ব্লকিং: ব্রাউজার ট্যাব বন্ধ হয়ে গেলেও সার্ভারে ডেটা পৌঁছানো নিশ্চিত করে' }
        ],
        [
          { en: 'Page Visibility API', bn: 'Page Visibility API' },
          { en: 'document.visibilityState, visibilitychange event', bn: 'document.visibilityState, visibilitychange' },
          { en: 'Battery and CPU conservation when tab is backgrounded', bn: 'ট্যাব ব্যাকগ্রাউন্ডে গেলে ব্যাটারি এবং সিপিইউ সাশ্রয় করা' },
          { en: 'Enables pausing expensive video decoders, canvas loops, and pollers', bn: 'ভিডিও প্লেয়ার, ভারী অ্যানিমেশন ও টাইমার সাময়িকভাবে থামিয়ে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-url-router-code',
      text: {
        en: 'Executable URL Query Parameter and Router Simulation',
        bn: 'URL প্যারামিটার ও রাউটিং সিমুলেশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how modern web applications manipulate query parameters using the URL and URLSearchParams APIs, updating categories and pagination state.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি URL এবং URLSearchParams এপিআই ব্যবহার করে কীভাবে কুয়েরি প্যারামিটার পড়া, নতুন ক্যাটাগরি সেট করা এবং পেজ নম্বর আপডেট করা হয় তা বাস্তবায়ন করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Browser URL and Query Parameter Management

interface UrlStateReport {
  initialCategory: string | null;
  updatedCategory: string | null;
  currentPageNumber: number;
  productTags: string[];
  finalConstructedUrl: string;
}

function processUrlNavigation(baseUri: string): UrlStateReport {
  const url = new URL(baseUri);

  // 1. Inspect existing query parameters
  const initialCategory = url.searchParams.get('category');

  // 2. Mutate parameters cleanly
  url.searchParams.set('category', 'electronics');
  url.searchParams.set('page', '2');
  url.searchParams.append('tag', 'sale');
  url.searchParams.append('tag', 'wireless');

  return {
    initialCategory,
    updatedCategory: url.searchParams.get('category'),
    currentPageNumber: Number(url.searchParams.get('page')),
    productTags: url.searchParams.getAll('tag'),
    finalConstructedUrl: url.toString()
  };
}

const report = processUrlNavigation(
  'https://example.com/products?category=all&sort=price'
);

console.log('Initial category parameter:', report.initialCategory);
console.log('Updated category parameter:', report.updatedCategory);
console.log('Current page number:', report.currentPageNumber);
console.log('Associated product tags:', report.productTags.join(', '));
console.log('Constructed final URL string:', report.finalConstructedUrl);

// prints: Initial category parameter: all
// prints: Updated category parameter: electronics
// prints: Current page number: 2
// prints: Associated product tags: sale, wireless
// prints: Constructed final URL string: https://example.com/products?category=electronics&sort=price&page=2&tag=sale&tag=wireless`
    },
    {
      type: 'heading',
      id: 'telemetry-unload-sendbeacon-vs-fetch',
      text: {
        en: 'Telemetry on Page Unload: sendBeacon vs Fetch',
        bn: 'পেজ ত্যাগের সময় টেলিমেট্রি: sendBeacon বনাম ফেচ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A recurring bug in analytics engineering is sending final session telemetry using standard "fetch()" or synchronous "XMLHttpRequest" inside "window.onunload" handlers. When a user closes a tab or navigates away, the browser immediately destroys the rendering process, aborting all pending in-flight fetch requests. In contrast, "navigator.sendBeacon(url, data)" is a specialized fire-and-forget API: the browser queues the small payload directly into the operating system network courier. The network packet transmits reliably in the background even after the web page has completely vanished from memory, without stalling user navigation.',
        bn: 'ওয়েব অ্যানালিটিক্স তৈরির সময় একটি সাধারণ ভুল হলো পেজ বন্ধের মুহূর্তে "window.onunload"-এর ভেতরে সাধারণ "fetch()" বা সিঙ্ক্রোনাস "XMLHttpRequest" দিয়ে ডেটা পাঠানো। ব্যবহারকারী যখন একটি ট্যাব বন্ধ করেন বা অন্য লিংকে যান, তখন ব্রাউজার পেজের রেন্ডারিং প্রক্রিয়া তাৎক্ষণিকভাবে ধ্বংস করে দেয়, যার ফলে চলমান ফেচ রিকোয়েস্ট মাঝপথে বাতিল হয়ে যায়। এর বিপরীতে "navigator.sendBeacon(url, data)" হলো একটি বিশেষ ফায়ার-অ্যান্ড-ফরগেট এপিআই: ব্রাউজার ডেটাটি সরাসরি অপারেটিং সিস্টেমের নেটিভ নেটওয়ার্ক সারিতে জমা করে নেয়। পেজ মেমরি থেকে পুরোপুরি মুছে যাওয়ার পরেও ব্যাকগ্রাউন্ডে সফলভাবে সার্ভারে ডেটা পৌঁছে যায়, ব্যবহারকারীর পেজ ত্যাগ এতটুকুও আটকে না রেখে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Use URLSearchParams for query parameters: Never use brittle string regex splitting; searchParams handles encoding and lists cleanly.',
          bn: 'প্যারামিটারে URLSearchParams ব্যবহার করুন: ম্যানুয়াল স্ট্রিং ভাঙার বদলে searchParams ব্যবহার করে নির্ভরযোগ্যভাবে কুয়েরি পরিচালনা করুন।'
        },
        {
          en: 'pushState creates history, replaceState edits: Use pushState when switching views and replaceState when updating sorting or filters.',
          bn: 'pushState নতুন হিস্ট্রি যোগ করে আর replaceState এডিট করে: ভিউ বদলালে pushState এবং ফিল্টার বা সর্টিং আপডেটে replaceState ব্যবহার করুন।'
        },
        {
          en: 'Use sendBeacon for exit telemetry: Reliable non-blocking delivery of session analytics during page unload without dropped packets.',
          bn: 'পেজ ত্যাগে sendBeacon ব্যবহার করুন: পেজ বন্ধের সময় কোনো প্যাকেট না হারিয়ে নির্ভরযোগ্যভাবে অ্যানালিটিক্স পাঠাতে এটি সেরা।'
        },
        {
          en: 'Conserve battery with visibilityState: Pause video feeds, animations, and background polling when document.visibilityState is hidden.',
          bn: 'visibilityState দিয়ে ব্যাটারি বাঁচান: ট্যাব ব্যাকগ্রাউন্ডে লুকানো থাকলে ভারী অ্যানিমেশন ও টাইমার সাময়িকভাবে থামিয়ে দিন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-harbor-rehearsal',
    tech: 'web-apis',
    title: {
      en: 'Web APIs Capstone — Building an Offline-First Progressive Application',
      bn: 'ওয়েব এপিআই ক্যাপস্টোন: অফলাইন-ফার্স্ট প্রোগ্রেসিভ অ্যাপ্লিকেশন নির্মাণ'
    }
  },
  exercises: [
    {
      id: 'hcomp-ex1',
      kind: 'mcq',
      topic: 'pushstate-vs-replacestate-distinction',
      question: {
        en: 'What is the architectural difference between history.pushState() and history.replaceState() in Single Page Applications?',
        bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে history.pushState() এবং history.replaceState()-এর মধ্যে প্রধান প্রযুক্তিগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'pushState adds a brand-new entry to the browser navigation history stack (allowing the user to click Back); replaceState overwrites the current history entry in-place without expanding the stack',
          bn: 'pushState ব্রাউজার হিস্ট্রি স্ট্যাকে একটি সম্পূর্ণ নতুন এন্ট্রি যোগ করে (ফলে ব্যবহারকারী ব্যাক বোতাম চাপতে পারেন); আর replaceState হিস্ট্রি না বাড়িয়ে বর্তমান এন্ট্রিটিকেই আপডেট করে দেয়'
        },
        {
          en: 'pushState only works in Chrome while replaceState is strictly for Safari',
          bn: 'pushState কেবল ক্রোমে চলে আর replaceState কেবল সাফারির জন্য'
        },
        {
          en: 'replaceState permanently deletes all browser history back to the year 1990',
          bn: 'replaceState ১৯৯০ সাল পর্যন্ত সমস্ত ব্রাউজার হিস্ট্রি মুছে দেয়'
        },
        {
          en: 'pushState forces the server to format the client operating system hard drive',
          bn: 'pushState সার্ভারকে ক্লায়েন্টের হার্ড ড্রাইভ ফরম্যাট করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Add a new back-button step (pushState) vs update the URL of the current step without creating extra history (replaceState).',
        bn: 'নতুন ধাপ যোগ করা (pushState) বনাম হিস্ট্রি না বাড়িয়ে বর্তমান ইউআরএল শুধরে নেওয়া (replaceState)।'
      },
      explanation: {
        en: 'pushState creates a new history milestone; replaceState mutates the current milestone without creating unwanted Back-button traps.',
        bn: 'pushState নতুন ধাপ তৈরি করে ব্যাক বোতামে সুযোগ দেয়, আর replaceState বর্তমান ধাপটিকেই সুন্দরভাবে আপডেট করে।'
      }
    },
    {
      id: 'hcomp-ex2',
      kind: 'mcq',
      topic: 'sendbeacon-guaranteed-delivery-advantage',
      question: {
        en: 'Why is navigator.sendBeacon() superior to standard fetch() for sending departure telemetry when a user closes a browser tab?',
        bn: 'ব্যবহারকারী যখন ব্রাউজার ট্যাব বন্ধ করেন, তখন প্রস্থান টেলিমেট্রি পাঠাতে সাধারণ fetch()-এর চেয়ে navigator.sendBeacon() কেন অনেক বেশি নির্ভরযোগ্য?'
      },
      options: [
        {
          en: 'sendBeacon queues the payload into the browser native networking process, guaranteeing transmission in the background even after the web page document is completely destroyed',
          bn: 'sendBeacon ডেটাটি ব্রাউজারের নেটিভ নেটওয়ার্ক প্রসেসে জমা করে, ফলে পেজ পুরোপুরি ধ্বংস হয়ে গেলেও ব্যাকগ্রাউন্ডে সার্ভারে ডেটা পৌঁছানো নিশ্চিত হয়'
        },
        {
          en: 'sendBeacon reduces internet subscription costs by 80 percent',
          bn: 'sendBeacon ইন্টারনেটের খরচ ৮০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Because fetch() was declared illegal in HTML5 standards',
          bn: 'কারণ HTML5 স্ট্যান্ডার্ডে fetch() নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'sendBeacon automatically encrypts text into ancient hieroglyphics',
          bn: 'sendBeacon টেক্সটকে প্রাচীন লিপিতে রূপান্তর করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'When a tab closes, all pending fetch calls are killed. sendBeacon survives page death.',
        bn: 'ট্যাব বন্ধ হলে সাধারণ ফেচ মাঝপথে মারা যায়; sendBeacon পেজ মরে গেলেও বেঁচে থেকে ডেটা পাঠায়।'
      },
      explanation: {
        en: 'sendBeacon transfers request ownership to the browser process, ensuring delivery without stalling or getting cancelled during page destruction.',
        bn: 'sendBeacon ব্রাউজারের মূল নেটওয়ার্ক স্তরে কাজ করে, ফলে পেজ ধ্বংসের মুহূর্তেও কোনো ডেটা হারায় না।'
      }
    },
    {
      id: 'hcomp-ex3',
      kind: 'mcq',
      topic: 'page-visibility-battery-saving',
      question: {
        en: 'How do production video streaming and web gaming platforms utilize the Page Visibility API (document.visibilityState) to optimize performance?',
        bn: 'ভিডিও স্ট্রিমিং ও গেমিং প্ল্যাটফর্মগুলো পারফরম্যান্স বাড়াতে কীভাবে Page Visibility API (document.visibilityState) ব্যবহার করে?'
      },
      options: [
        {
          en: 'When visibilityState switches to "hidden", the app pauses video decoding, halts requestAnimationFrame loops, and suspends high-frequency polling, saving device battery and CPU',
          bn: 'visibilityState যখন "hidden" হয়, তখন অ্যাপ ভিডিও প্লেয়ার থামিয়ে দেয়, অ্যানিমেশন লুপ বন্ধ করে এবং সার্ভার পোলিং স্থগিত করে ডিভাইসের ব্যাটারি ও সিপিইউ বাঁচায়'
        },
        {
          en: 'By turning off the user physical computer monitor immediately',
          bn: 'কম্পিউটারের ফিজিক্যাল মনিটর সাথে সাথে বন্ধ করে দিয়ে'
        },
        {
          en: 'Because visibilityState automatically increases internet bandwidth speeds by 400 percent',
          bn: 'কারণ এতে ইন্টারনেটের গতি ৪০০ শতাংশ বেড়ে যায়'
        },
        {
          en: 'Visibility queries delete all user account cookies on tab switch',
          bn: 'ট্যাব বদলালে এটি সব কুকিজ মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the user cannot see the tab, do not waste battery rendering 60 frames per second.',
        bn: 'ব্যবহারকারী যখন ট্যাবটি দেখতেই পাচ্ছেন না, তখন অযথা প্রতি সেকেন্ডে ৬০ ফ্রেম এঁকে ব্যাটারি অপচয় বন্ধ করা।'
      },
      explanation: {
        en: 'Monitoring document.visibilityState allows applications to silence expensive operations when hidden, dramatically improving device battery life.',
        bn: 'ট্যাব আড়ালে থাকলে অপ্রয়োজনীয় কাজ থামিয়ে এটি ডিভাইসের ব্যাটারি ও মেমরি রক্ষা করে।'
      }
    },
    {
      id: 'hcomp-ex4',
      kind: 'mcq',
      topic: 'urlsearchparams-getall-multiple-values',
      question: {
        en: 'If a URL contains repeated query parameter keys (e.g. "?tag=react&tag=node&tag=typescript"), which method retrieves all values as a JavaScript array?',
        bn: 'যদি কোনো ইউআরএলে একই নামের একাধিক কুয়েরি প্যারামিটার থাকে (যেমন "?tag=react&tag=node&tag=typescript"), তবে কোন মেথডটি সমস্ত মান একটি জাভাস্ক্রিপ্ট অ্যারে হিসেবে ফেরত দেয়?'
      },
      options: [
        {
          en: 'url.searchParams.getAll("tag")',
          bn: 'url.searchParams.getAll("tag")'
        },
        {
          en: 'url.searchParams.get("tag")',
          bn: 'url.searchParams.get("tag")'
        },
        {
          en: 'url.splitTags()',
          bn: 'url.splitTags()'
        },
        {
          en: 'window.findArray("tag")',
          bn: 'window.findArray("tag")'
        }
      ],
      answer: 0,
      hint: {
        en: 'get() returns only the first value. getAll() returns all matching values in an array.',
        bn: 'get() কেবল প্রথমটি দেয়; আর getAll() সব মান একটি অ্যারেতে ফেরত দেয়।'
      },
      explanation: {
        en: 'URLSearchParams.prototype.getAll(name) returns an array containing all values associated with the given search parameter name.',
        bn: 'getAll মেথডটি একটি নির্দিষ্ট নামের সাথে যুক্ত সমস্ত মানকে অ্যারে আকারে সরবরাহ করে।'
      }
    }
  ],
  quiz: {
    id: 'harbor-compass-quiz',
    title: {
      en: 'Navigation APIs, History State, and Page Visibility Quiz',
      bn: 'নেভিগেশন এপিআই, হিস্ট্রি স্টেট ও পেজ ভিজিবিলিটি কুইজ'
    },
    questions: [
      {
        id: 'hcq-q1',
        kind: 'mcq',
        topic: 'popstate-event-trigger-mechanism',
        question: {
          en: 'Under which user action does the browser window dispatch a "popstate" event?',
          bn: 'ব্যবহারকারীর কোন কাজের ফলে ব্রাউজার উইন্ডো একটি "popstate" ইভেন্ট সক্রিয় করে?'
        },
        options: [
          {
            en: 'When the user navigates browser history using the Back button, the Forward button, or calling history.back() / history.forward() in script',
            bn: 'ব্যবহারকারী যখন ব্রাউজারের ব্যাক বা ফরোয়ার্ড বোতাম চাপেন অথবা স্ক্রিপ্ট থেকে history.back() বা history.forward() কল করা হয়'
          },
          {
            en: 'Whenever history.pushState() is invoked by JavaScript',
            bn: 'জাভাস্ক্রিপ্ট থেকে যখনই history.pushState() কল করা হয়'
          },
          {
            en: 'When the user types a new web address into the search engine',
            bn: 'ব্যবহারকারী যখন সার্চ ইঞ্জিনে নতুন কোনো ঠিকানা লেখেন'
          },
          {
            en: 'Because popstate only fires when the computer mouse is unplugged',
            bn: 'কারণ মাউস খুলে ফেললেই কেবল popstate কার্যকর হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calling pushState() does NOT fire popstate. Only actual navigation (Back/Forward) fires popstate.',
          bn: 'pushState কল করলে popstate চালু হয় না; কেবল ব্যাক বা ফরোয়ার্ড বোতাম চাপলেই popstate ফায়ার হয়।'
        },
        explanation: {
          en: 'The popstate event fires on active history traversal (Back/Forward); programmatic pushState() does not trigger it.',
          bn: 'হিস্ট্রি জুড়ে যাতায়াত করলেই popstate ফায়ার হয়; pushState কোড নিজে এই ইভেন্ট তৈরি করে না।'
        }
      },
      {
        id: 'hcq-q2',
        kind: 'mcq',
        topic: 'history-scroll-restoration-behavior',
        question: {
          en: 'What does setting "history.scrollRestoration = \'manual\'" accomplish in advanced frontend applications?',
          bn: 'উন্নত ফ্রন্টএন্ড অ্যাপ্লিকেশনে "history.scrollRestoration = \'manual\'" সেট করার উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It prevents the browser from automatically forcing the scroll position to the top or prior location on Back navigation, allowing custom routers to restore scroll positions smoothly',
            bn: 'ব্যাক বোতাম চাপার সময় ব্রাউজার যাতে নিজে থেকেই জোর করে পেজের ওপরে বা পুরনো স্থানে স্ক্রল না করায় তা প্রতিরোধ করে, ফলে কাস্টম রাউটার নিজেই মসৃণভাবে স্ক্রল অবস্থান নিয়ন্ত্রণ করতে পারে'
          },
          {
            en: 'It permanently disables the computer mouse wheel',
            bn: 'এটি মাউসের স্ক্রল চাকা চিরতরে অকেজো করে দেয়'
          },
          {
            en: 'Because manual scroll restoration formats the client solid-state drive',
            bn: 'কারণ এটি হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
          },
          {
            en: 'It was mandated by international maritime conventions in 2020',
            bn: 'কারণ ২০২০ সালে আন্তর্জাতিক নৌ সংস্থা এটি বাধ্যতামূলক করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Auto scroll restoration can fight with single-page app async page rendering. Manual gives full control to your code.',
          bn: 'ব্রাউজারের স্বয়ংক্রিয় স্ক্রল অনেক সময় এসপিএ পেজে সমস্যা তৈরি করে; ম্যানুয়াল রাখলে কোড নিজে এটি নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'Setting scrollRestoration to "manual" stops browser native scroll interference, empowering SPAs to orchestrate scroll positioning.',
          bn: 'স্ক্রল রেস্টোরেশন ম্যানুয়াল করলে ব্রাউজার কোনো বাধা দেয় না এবং ডেভেলপার নিজের মতো করে স্ক্রল হ্যান্ডেল করতে পারেন।'
        }
      },
      {
        id: 'hcq-q3',
        kind: 'mcq',
        topic: 'navigator-online-limitation',
        question: {
          en: 'Why is the boolean property "navigator.onLine === true" considered an imperfect guarantee of actual internet connectivity?',
          bn: '"navigator.onLine === true" থাকা সত্ত্বেও এটি কেন আসল ইন্টারনেট সংযোগ থাকার শতভাগ নির্ভরযোগ্য নিশ্চয়তা নয়?'
        },
        options: [
          {
            en: 'navigator.onLine only verifies that the device is connected to a local LAN or Wi-Fi router; it cannot guarantee that the router has upstream internet access (e.g. captive portals or severed ISP fiber)',
            bn: 'navigator.onLine কেবল পরীক্ষা করে ডিভাইসটি লোকাল ওয়াইফাই বা ল্যান রাউটারের সাথে যুক্ত আছে কি না; রাউটারে ইন্টারনেটের সংযোগ আছে কি না (যেমন ক্যাশ আটকে থাকা বা আইএসপি ফাইবার বিচ্ছিন্ন) তা এটি বুঝতে পারে না'
          },
          {
            en: 'Because navigator.onLine was banned by the W3C standards group in 2021',
            bn: 'কারণ ২০২১ সালে W3C এটি নিষিদ্ধ করেছিল'
          },
          {
            en: 'navigator.onLine permanently formats all client browser storage',
            bn: 'navigator.onLine ব্রাউজারের সমস্ত স্টোরেজ ফরম্যাট করে'
          },
          {
            en: 'It reduces internet connection bandwidth speeds by 50 percent',
            bn: 'এটি ইন্টারনেটের গতি ৫০ শতাংশ কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Connected to local Wi-Fi does not mean the Wi-Fi has working internet access.',
          bn: 'ওয়াইফাই-এর সাথে যুক্ত থাকা মানেই ইন্টারনেট থাকা নয়; রাউটার ইন্টারনেটের সাথে যুক্ত নাও থাকতে পারে।'
        },
        explanation: {
          en: 'navigator.onLine indicates physical link status (connected to network), not end-to-end reachability to remote servers.',
          bn: 'navigator.onLine কেবল লোকাল সংযোগ নির্দেশ করে, দূরবর্তী সার্ভারে সত্যিই পৌঁছানো যাচ্ছে কি না তা নিশ্চিত করে না।'
        }
      },
      {
        id: 'hcq-q4',
        kind: 'mcq',
        topic: 'history-pushstate-origin-boundary',
        question: {
          en: 'What security restriction prevents history.pushState(null, \'\', \'https://google.com\') from executing on a website hosted at "https://myapp.com"?',
          bn: '"https://myapp.com"-এ থাকা কোনো ওয়েবসাইটে history.pushState(null, \'\', \'https://google.com\') চালালে কোন নিরাপত্তা নিয়ম এটি আটকে দেয়?'
        },
        options: [
          {
            en: 'The Same-Origin Security Restriction: pushState URLs must strictly share the identical origin (protocol, domain, and port) as the current document to prevent malicious phishing URL spoofing',
            bn: 'সেইম-অরিজিন নিরাপত্তা বিধি: ক্ষতিকর ফিশিং আক্রমণ ও ভুয়া ঠিকানা প্রদর্শন রোধ করতে pushState-এর ইউআরএল অবশ্যই বর্তমান পেজের ডোমেইন ও প্রোটোকলের সাথে পুরোপুরি এক হতে হয়'
          },
          {
            en: 'Because Google limits all pushState requests to 10 per day',
            bn: 'কারণ গুগল দিনে ১০টির বেশি pushState অনুমোদন করে না'
          },
          {
            en: 'Cross-origin pushState reduces server electricity current by 90 percent',
            bn: 'কারণ এতে সার্ভারের বিদ্যুৎ খরচ ৯০ শতাংশ কমে যায়'
          },
          {
            en: 'pushState was created by the International Maritime Organization',
            bn: 'কারণ আন্তর্জাতিক নৌ সংস্থা pushState তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A website cannot disguise its address bar to look like another website. Origin boundary prevents address spoofing.',
          bn: 'কোনো ওয়েবসাইট নিজের ঠিকানাকে অন্য কোনো ব্যাংকের ঠিকানার মতো সাজাতে পারে না; সেইম-অরিজিন নিয়ম এটি কঠোরভাবে রোধ করে।'
        },
        explanation: {
          en: 'pushState throws a DOMException (SecurityError) if the proposed URL does not match the origin of the active window context.',
          bn: 'ভিন্ন ডোমেইনের ঠিকানা বসানোর চেষ্টা করলে ব্রাউজার সাথে সাথে SecurityError দিয়ে তা রুখে দেয়।'
        }
      }
    ]
  }
};
