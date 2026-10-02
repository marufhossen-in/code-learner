import type { Lesson } from '../../../lib/types';

export const warehouseDistrictLesson: Lesson = {
  slug: 'the-warehouse-district',
  tech: 'web-apis',
  title: {
    en: 'Client-Side Storage — localStorage, sessionStorage, and IndexedDB',
    bn: 'ক্লায়েন্ট-সাইড স্টোরেজ: লোকালস্টোরেজ, সেশনস্টোরেজ ও ইনডেক্সডডিবি'
  },
  summary: {
    en: 'Client-side web applications require local data persistence to support offline capabilities, save user preferences, and maintain session state across page refreshes. In this lesson, you will master the browser client-side storage landscape: Web Storage (`localStorage` and `sessionStorage`), the `StorageEvent` for cross-tab communication, storage quotas (~5MB per origin), and the transactional `IndexedDB` database engine. Dissect the architectural tradeoffs between synchronous key-value strings and asynchronous NoSQL object stores. Understand `QuotaExceededError` handling, structured cloning, and browser eviction policies. Implement an executable client storage manager with quota validation in TypeScript.',
    bn: 'আধুনিক ক্লায়েন্ট-সাইড ওয়েব অ্যাপ্লিকেশনগুলোতে অফলাইন সুবিধা দেওয়া, ব্যবহারকারীর পছন্দ সংরক্ষণ এবং পেজ রিলোডের পরেও সেশন স্টেট ধরে রাখতে লোকাল স্টোরেজ অপরিহার্য। এই পাঠে আপনি ব্রাউজারের ক্লায়েন্ট-সাইড স্টোরেজ আর্কিটেকচার শিখবেন: Web Storage (`localStorage` ও `sessionStorage`), মাল্টি-ট্যাব যোগাযোগের `StorageEvent`, স্টোরেজ কোটা (প্রায় ৫ মেগাবাইট) এবং ট্রানজ্যাকশনভিত্তিক `IndexedDB` ডেটাবেস। সিঙ্ক্রোনাস কি-ভ্যালু স্ট্রিং বনাম অ্যাসিঙ্ক্রোনাস নো-এসকিউএল অবজেক্ট স্টোরের মূল পার্থক্য ব্যবচ্ছেদ করবেন। `QuotaExceededError` প্রতিরোধ, স্ট্রাকচার্ড ক্লোনিং এবং ডেটা মোছার ব্রাউজার পলিসি বিশদভাবে জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর স্টোরেজ ম্যানেজার বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'storage-spectrum-overview',
      text: {
        en: 'The Storage Spectrum: Web Storage vs IndexedDB vs Cookies',
        bn: 'স্টোরেজের ধরন: ওয়েব স্টোরেজ বনাম ইনডেক্সডডিবি বনাম কুকিজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build interactive web applications, persisting user state locally in the browser is essential.',
        bn: 'ইন্টারেক্টিভ ওয়েব অ্যাপ্লিকেশন তৈরি করার সময় ব্রাউজারে ব্যবহারকারীর তথ্য স্থানীয়ভাবে সংরক্ষণ করা অত্যন্ত গুরুত্বপূর্ণ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Browser client-side storage spans 4 distinct technologies: localStorage, sessionStorage, IndexedDB, and HTTP cookies. localStorage provides persistent key-value string storage that survives browser restarts, bounded by a per-origin quota of approximately 5MB. sessionStorage shares the identical key-value API but scopes data strictly to the lifespan of the current browser tab, clearing everything the moment the tab closes. Because Web Storage is synchronous, reading or writing massive strings blocks the main browser UI thread. For larger applications storing gigabytes of structured data, IndexedDB provides an asynchronous, transactional NoSQL database supporting indexes, cursor iterations, and binary Blobs.',
        bn: 'ব্রাউজারের ক্লায়েন্ট-সাইড স্টোরেজ মূলত ৪টি ভিন্ন প্রযুক্তির ওপর দাঁড়িয়ে আছে: localStorage, sessionStorage, IndexedDB এবং HTTP cookies। localStorage হলো একটি স্থায়ী কি-ভ্যালু স্টোর যা ব্রাউজার বন্ধ করলেও তথ্য সংরক্ষণ করে রাখে এবং এর ধারণক্ষমতা ডোমেইনপ্রতি প্রায় ৫ মেগাবাইট। sessionStorage হুবহু একই রকম হলেও এর স্থায়িত্ব কেবল বর্তমান ব্রাউজার ট্যাবটি খোলা থাকা পর্যন্ত; ট্যাব বন্ধ করার সাথে সাথে সমস্ত ডেটা মুছে যায়। মনে রাখতে হবে যে Web Storage পুরোপুরি সিঙ্ক্রোনাস, তাই এতে অতিরিক্ত বড় ডেটা লিখতে গেলে ব্রাউজারের মূল ইউআই আটকে যেতে পারে। এর বিপরীতে বড় আকারের গিগাবাইট ডেটা বা অবজেক্ট সংরক্ষণের জন্য IndexedDB একটি পূর্ণাঙ্গ অ্যাসিঙ্ক্রোনাস নো-এসকিউএল ডেটাবেস হিসেবে কাজ করে যা ইনডেক্স ও লেনদেন সমর্থন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'local-storage',
          def: {
            en: 'Synchronous per-origin key-value string storage that persists permanently across browser restarts until explicitly cleared.',
            bn: 'একটি স্থায়ী সিঙ্ক্রোনাস কি-ভ্যালু স্টোর যা ব্রাউজার রিস্টার্ট হলেও মুছে যায় না এবং প্রতি ডোমেইনে প্রায় ৫ মেগাবাইট জায়গা দেয়।'
          }
        },
        {
          term: 'session-storage',
          def: {
            en: 'Tab-scoped synchronous key-value string storage that is automatically wiped the instant the specific browser tab is closed.',
            bn: 'একটি ক্ষণস্থায়ী সিঙ্ক্রোনাস কি-ভ্যালু স্টোর যা বর্তমান ব্রাউজার ট্যাবটি বন্ধ করার সাথে সাথে নিজে থেকেই মুছে যায়।'
          }
        },
        {
          term: 'indexed-db',
          def: {
            en: 'An asynchronous, transactional client-side NoSQL object store capable of storing gigabytes of structured objects, indexes, and binary blobs.',
            bn: 'ব্রাউজারের একটি শক্তিশালী অ্যাসিঙ্ক্রোনাস নো-এসকিউএল ডেটাবেস যা গিগাবাইট পরিমাণ জটিল অবজেক্ট ও ইনডেক্স দক্ষতার সাথে সংরক্ষণ করতে পারে।'
          }
        },
        {
          term: 'storage-event',
          def: {
            en: 'A browser event fired across all other open tabs of the same origin whenever localStorage is modified, enabling multi-tab synchronization.',
            bn: 'একই ওয়েবসাইটের অন্য ট্যাবগুলোতে সক্রিয় হওয়া একটি ইভেন্ট যা এক ট্যাবের localStorage পরিবর্তন অন্য সব ট্যাবে তাৎক্ষণিকভাবে জানিয়ে দেয়।'
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
      id: 'storage-mechanisms-comparison-table',
      text: {
        en: 'Comparative Architecture: Browser Storage Mechanisms',
        bn: 'ব্রাউজার স্টোরেজ কাঠামোর তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Architects select client storage mechanisms by weighing capacity limits, execution blocking, and lifetime scope.',
        bn: 'ধারণক্ষমতার সীমা, মূল থ্রেড ব্লকিং এবং স্থায়িত্বের পরিধি বিচার করে সঠিক ক্লায়েন্ট স্টোরেজ মাধ্যমটি নির্বাচন করতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Storage Engine', bn: 'স্টোরেজ মাধ্যম' },
        { en: 'Storage Capacity Limit', bn: 'ধারণক্ষমতার সীমা' },
        { en: 'API Execution Model', bn: 'এক্সিকিউশন মডেল' },
        { en: 'Lifetime & Persistence Scope', bn: 'স্থায়িত্ব ও কার্যকাল' }
      ],
      rows: [
        [
          { en: 'localStorage', bn: 'localStorage' },
          { en: 'Approximately 5MB per origin', bn: 'ডোমেইনপ্রতি প্রায় ৫ মেগাবাইট' },
          { en: 'Synchronous (blocks main UI thread during disk reads/writes)', bn: 'সিঙ্ক্রোনাস (ডিস্কে লেখার সময় মূল ইউআই থ্রেড সাময়িক আটকে থাকে)' },
          { en: 'Permanent: survives browser restarts until cleared by script or user', bn: 'স্থায়ী: ব্রাউজার রিস্টার্ট হলেও থাকে, মুছে না ফেলা পর্যন্ত মুছে যায় না' }
        ],
        [
          { en: 'sessionStorage', bn: 'sessionStorage' },
          { en: 'Approximately 5MB per origin', bn: 'ডোমেইনপ্রতি প্রায় ৫ মেগাবাইট' },
          { en: 'Synchronous (blocks main UI thread during disk reads/writes)', bn: 'সিঙ্ক্রোনাস (ডিস্কে লেখার সময় মূল ইউআই থ্রেড সাময়িক আটকে থাকে)' },
          { en: 'Tab-scoped: destroyed immediately when the browser tab is closed', bn: 'ট্যাবকেন্দ্রিক: ব্রাউজার ট্যাব বন্ধ হওয়ার সাথে সাথে ধ্বংস হয়ে যায়' }
        ],
        [
          { en: 'IndexedDB', bn: 'IndexedDB' },
          { en: 'Hundreds of megabytes to gigabytes (bounded by available disk space)', bn: 'শত শত মেগাবাইট থেকে গিগাবাইট (ডিস্কের ফাঁকা জায়গার ওপর নির্ভর করে)' },
          { en: 'Asynchronous (event and Promise-based, non-blocking UI)', bn: 'অ্যাসিঙ্ক্রোনাস (প্রমিস-ভিত্তিক, ইউআই থ্রেড কখনোই আটকে থাকে না)' },
          { en: 'Permanent: persists across restarts; subject to OS storage pressure', bn: 'স্থায়ী: রিস্টার্টেও টিকে থাকে; ডিস্কের চরম চাপে ব্রাউজার খালি করতে পারে' }
        ],
        [
          { en: 'HTTP Cookies', bn: 'HTTP Cookies' },
          { en: 'Strictly 4KB per cookie (maximum ~50 cookies per domain)', bn: 'কুকিপ্রতি কঠোরভাবে ৪ কিলোবাইট (ডোমেইনপ্রতি সর্বোচ্চ ৫০টি)' },
          { en: 'Synchronous via document.cookie; transmitted on every HTTP request', bn: 'সিঙ্ক্রোনাস; প্রতিটি নেটওয়ার্ক রিকোয়েস্টের হেডারের সাথে স্বয়ংক্রিয়ভাবে যায়' },
          { en: 'Configurable expiration via Expires or Max-Age attributes', bn: 'মেয়াদ নির্ধারণযোগ্য: Expires বা Max-Age দিয়ে নিয়ন্ত্রণ করা যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-storage-manager-code',
      text: {
        en: 'Executable Client Storage Manager with Quota Handling',
        bn: 'কোটা হ্যান্ডলিংসহ ক্লায়েন্ট স্টোরেজ ম্যানেজারের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates a typed client storage wrapper that serializes JSON data and tracks byte usage against a 5000-byte quota threshold.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি টাইপড স্টোরেজ ম্যানেজার বাস্তবায়ন করে যা JSON ডেটা সংরক্ষণ করে এবং ৫০০০ বাইটের কোটা সীমার বিপরীতে ব্যবহৃত মেমরি হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Resilient Client Storage Manager with Quota Validation

interface StorageMetrics {
  itemCount: number;
  usedBytes: number;
  maxQuotaBytes: number;
  usagePercentage: string;
}

class ClientStorageManager {
  private storage: Map<string, string>;
  private maxQuotaBytes: number;
  private usedBytes: number = 0;

  constructor(maxQuotaBytes: number = 5000) {
    this.storage = new Map<string, string>();
    this.maxQuotaBytes = maxQuotaBytes;
  }

  setItem<T>(key: string, value: T): void {
    const serialized = JSON.stringify(value);
    // In UTF-16, each character consumes 2 bytes
    const requiredBytes = (key.length + serialized.length) * 2;

    if (this.usedBytes + requiredBytes > this.maxQuotaBytes) {
      throw new Error('QuotaExceededError: Storage quota limit reached');
    }

    this.storage.set(key, serialized);
    this.usedBytes += requiredBytes;
  }

  getItem<T>(key: string): T | null {
    const raw = this.storage.get(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  getMetrics(): StorageMetrics {
    const pct = Math.round((this.usedBytes / this.maxQuotaBytes) * 100);
    return {
      itemCount: this.storage.size,
      usedBytes: this.usedBytes,
      maxQuotaBytes: this.maxQuotaBytes,
      usagePercentage: pct + '%'
    };
  }
}

const manager = new ClientStorageManager(5000);

manager.setItem('user_theme', { mode: 'dark', fontSize: 16 });
manager.setItem('cart_items', ['book-1', 'book-2', 'laptop-bag']);

const stats = manager.getMetrics();

console.log('Total items stored in client storage:', stats.itemCount);
console.log('Storage space used (bytes):', stats.usedBytes);
console.log('Maximum quota limit (bytes):', stats.maxQuotaBytes);
console.log('Storage quota usage percentage:', stats.usagePercentage);

// prints: Total items stored in client storage: 2
// prints: Storage space used (bytes): 162
// prints: Maximum quota limit (bytes): 5000
// prints: Storage quota usage percentage: 3%`
    },
    {
      type: 'heading',
      id: 'cross-tab-sync-and-storage-events',
      text: {
        en: 'Cross-Tab Synchronization via the StorageEvent',
        bn: 'StorageEvent এবং মাল্টি-ট্যাব ডেটা সিনক্রোনাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common challenge in frontend engineering is keeping user state synchronized across multiple open browser tabs (such as reflecting shopping cart updates or immediate user logout). The browser solves this natively with the "storage" event on window. Whenever a script modifies localStorage, the browser dispatches a StorageEvent to all OTHER open tabs of the same origin. The event payload carries key, oldValue, newValue, and the url of the document that made the mutation. The initiating tab does not receive its own event, preventing circular update loops.',
        bn: 'ওয়েব অ্যাপ্লিকেশনে একটি সাধারণ সমস্যা হলো একই ওয়েবসাইটের একাধিক খোলা ট্যাবের মধ্যে ডেটার মিল রাখা (যেমন এক ট্যাবে কার্টে পণ্য যোগ করলে বা লগআউট করলে অন্য ট্যাবেও তা তাৎক্ষণিকভাবে পরিবর্তন হওয়া)। ব্রাউজার এর একটি চমৎকার নেটিভ সমাধান দেয় window-এর "storage" ইভেন্টের মাধ্যমে। যখন কোনো একটি ট্যাব localStorage-এ কোনো পরিবর্তন ঘটায়, তখন ব্রাউজার সাথে সাথে একই ডোমেইনের অন্যান্য সমস্ত খোলা ট্যাবে একটি StorageEvent পাঠিয়ে দেয়। এই ইভেন্টের ভেতরে পরিবর্তিত কি, পুরনো মান (oldValue) এবং নতুন মান (newValue) থাকে। যে ট্যাবটি নিজে পরিবর্তন করেছে সে নিজে কোনো ইভেন্ট পায় না, যার ফলে কোনো ইনফিনিট লুপের সৃষ্টি হয় না।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'localStorage is persistent and synchronous: Bounded by ~5MB per origin; never store massive datasets that block the UI thread.',
          bn: 'localStorage স্থায়ী ও সিঙ্ক্রোনাস: প্রতি ডোমেইনে প্রায় ৫ মেগাবাইট জায়গা থাকে; বড় ডেটা রেখে ইউআই থ্রেড জ্যাম করবেন না।'
        },
        {
          en: 'sessionStorage is scoped to the tab: Automatically cleared upon tab close, making it ideal for multi-step form drafts.',
          bn: 'sessionStorage কেবল নির্দিষ্ট ট্যাবেই থাকে: ট্যাব বন্ধ করলে ডেটা মুছে যায়, যা মাল্টি-স্টেপ ফর্ম ড্রাফটের জন্য সেরা।'
        },
        {
          en: 'Use IndexedDB for high-volume structured data: Asynchronous NoSQL database supporting transactions, indexes, and large blobs.',
          bn: 'বিশাল ডেটার জন্য IndexedDB ব্যবহার করুন: একটি অ্যাসিঙ্ক্রোনাস নো-এসকিউএল ডেটাবেস যা লেনদেন ও জটিল অবজেক্ট ধারণ করে।'
        },
        {
          en: 'Sync tabs with the storage event: Listen to window storage events to update application state when another tab modifies localStorage.',
          bn: 'স্টোরেজ ইভেন্ট দিয়ে ট্যাবগুলো সিঙ্ক করুন: অন্য কোনো ট্যাবে ডেটা পরিবর্তন হলে তা তাৎক্ষণিকভাবে বর্তমান পেজে প্রয়োগ করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-lighthouse-keepers',
    tech: 'web-apis',
    title: {
      en: 'Geolocation & Hardware Sensors — Device Position, Motion, and Permissions',
      bn: 'জিওলোকেশন ও হার্ডওয়্যার সেন্সর: ডিভাইসের অবস্থান, গতি ও পারমিশন'
    }
  },
  exercises: [
    {
      id: 'wd-ex1',
      kind: 'mcq',
      topic: 'localstorage-vs-sessionstorage-scope',
      question: {
        en: 'What is the critical behavioral difference between localStorage and sessionStorage in modern web browsers?',
        bn: 'আধুনিক ব্রাউজারে localStorage এবং sessionStorage-এর মধ্যকার সবচেয়ে গুরুত্বপূর্ণ আচরণগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'localStorage persists permanently across browser restarts until explicitly deleted; sessionStorage data is strictly scoped to the current browser tab and destroyed immediately when the tab closes',
          bn: 'localStorage ব্রাউজার রিস্টার্টের পরেও স্থায়ীভাবে ডেটা সংরক্ষণ করে রাখে; আর sessionStorage-এর স্থায়িত্ব কেবল বর্তমান ব্রাউজার ট্যাবটি খোলা থাকা পর্যন্ত এবং ট্যাব বন্ধ হলেই তা সাথে সাথে মুছে যায়'
        },
        {
          en: 'localStorage only stores numbers while sessionStorage only stores images',
          bn: 'localStorage কেবল সংখ্যা রাখে আর sessionStorage কেবল ছবি সংরক্ষণ করে'
        },
        {
          en: 'sessionStorage formats the user hard drive upon tab close',
          bn: 'sessionStorage ট্যাব বন্ধের সময় কম্পিউটারের হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'localStorage is strictly prohibited by international privacy law',
          bn: 'localStorage আন্তর্জাতিক প্রাইভেসী আইনে পুরোপুরি নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Session storage dies with the tab session. Local storage lives locally on the machine permanently.',
        bn: 'সেশন স্টোরেজের জীবন ট্যাব পর্যন্ত; লোকাল স্টোরেজ চিরকাল ডিভাইসে থেকে যায়।'
      },
      explanation: {
        en: 'localStorage survives browser shutdown; sessionStorage is ephemeral and isolated to the specific top-level browsing context.',
        bn: 'localStorage কম্পিউটার বন্ধ করলেও অক্ষত থাকে; sessionStorage ট্যাব বন্ধের মুহূর্তেই বিলুপ্ত হয়ে যায়।'
      }
    },
    {
      id: 'wd-ex2',
      kind: 'mcq',
      topic: 'quota-exceeded-error-cause',
      question: {
        en: 'What exception is thrown by the browser if your code attempts to call localStorage.setItem() when the ~5MB origin storage limit is exhausted?',
        bn: 'ডোমেইনের প্রায় ৫ মেগাবাইট স্টোরেজ সীমা পূর্ণ হয়ে গেলে localStorage.setItem() কল করলে ব্রাউজার কোন এক্সেপশনটি থ্রো করে?'
      },
      options: [
        {
          en: 'QuotaExceededError (DOMException), which must be handled with a try/catch block to prevent uncaught runtime errors',
          bn: 'QuotaExceededError (DOMException), যা কোড ক্র্যাশ হওয়া এড়াতে অবশ্যই try/catch ব্লকের ভেতরে হ্যান্ডেল করতে হয়'
        },
        {
          en: 'MemoryMeltdownException',
          bn: 'MemoryMeltdownException'
        },
        {
          en: 'The browser restarts the client computer immediately',
          bn: 'ব্রাউজার কম্পিউটারটি সাথে সাথে রিস্টার্ট করে ফেলে'
        },
        {
          en: 'No error is thrown; old data is automatically overwritten silently',
          bn: 'কোনো এরর আসে না; পুরনো ডেটা নিজে থেকেই মুছে গিয়ে নতুন ডেটা বসে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The standard exception is named QuotaExceededError.',
        bn: 'স্ট্যান্ডার্ড এক্সেপশনের নাম হলো QuotaExceededError।'
      },
      explanation: {
        en: 'Exceeding the Web Storage quota throws QuotaExceededError; defensive code must catch this and purge stale cached entries.',
        bn: 'স্টোরেজের সীমা শেষ হলে QuotaExceededError আসে; নিরাপদ কোডে try/catch দিয়ে পুরনো ক্যাশ মুছে জায়গা করতে হয়।'
      }
    },
    {
      id: 'wd-ex3',
      kind: 'mcq',
      topic: 'storage-event-cross-tab-behavior',
      question: {
        en: 'When a user adds an item to their cart in Tab A and localStorage is modified, which browser tabs receive the resulting "storage" event?',
        bn: 'ট্যাব A-তে কোনো ব্যবহারকারী কার্টে পণ্য যোগ করার ফলে যখন localStorage পরিবর্তিত হয়, তখন কোন কোন ব্রাউজার ট্যাব "storage" ইভেন্টটি গ্রহণ করে?'
      },
      options: [
        {
          en: 'All other open tabs of the identical origin receive the storage event; Tab A itself does NOT receive the event',
          bn: 'একই ওয়েবসাইটের খোলা থাকা অন্য সমস্ত ট্যাব এই ইভেন্টটি পায়; কিন্তু পরিবর্তন ঘটানো ট্যাব A নিজে এই ইভেন্ট পায় না'
        },
        {
          en: 'Only Tab A receives the event; all other tabs are kept unaware',
          bn: 'কেবল ট্যাব A ইভেন্টটি পায়; বাকি সব ট্যাব কিছুই জানতে পারে না'
        },
        {
          en: 'Every computer connected to the same Wi-Fi router receives the event',
          bn: 'একই ওয়াইফাই রাউটারে যুক্ত সমস্ত কম্পিউটার ইভেন্টটি পেয়ে যায়'
        },
        {
          en: 'Storage events were banned by browser standards in 2022',
          bn: 'কারণ ২০২২ সালে ব্রাউজার স্ট্যান্ডার্ডে স্টোরেজ ইভেন্ট নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The origin is notified across OTHER tabs so they can synchronize state without creating recursive loops in the initiating tab.',
        bn: 'অন্যান্য ট্যাবগুলোকে জানানো হয় যাতে তারা আপডেট হতে পারে, কিন্তু পরিবর্তনকারী ট্যাব লুপ এড়াতে ইভেন্ট পায় না।'
      },
      explanation: {
        en: 'The storage event dispatches to sibling browsing contexts of the same origin, excluding the window that initiated the modification.',
        bn: 'স্টোরেজ ইভেন্ট অন্য সব ট্যাবে সম্প্রচারিত হয়, ফলে কোনো লুপ তৈরি না করে চমৎকার মাল্টি-ট্যাব সিঙ্ক নিশ্চিত হয়।'
      }
    },
    {
      id: 'wd-ex4',
      kind: 'mcq',
      topic: 'indexeddb-asynchronous-advantage',
      question: {
        en: 'Why is IndexedDB preferred over localStorage when building offline web applications that cache large datasets (e.g. 50MB of offline articles or images)?',
        bn: 'অফলাইন ওয়েব অ্যাপ্লিকেশনে বিশাল ডেটাসেট (যেমন ৫০ মেগাবাইটের অফলাইন নিবন্ধ বা ছবি) ক্যাশ করার ক্ষেত্রে localStorage-এর চেয়ে IndexedDB কেন অনেক বেশি উপযোগী?'
      },
      options: [
        {
          en: 'IndexedDB operates asynchronously using non-blocking background workers, supports gigabytes of data, and allows indexing complex structured objects without blocking the main UI thread',
          bn: 'IndexedDB সম্পূর্ণ অ্যাসিঙ্ক্রোনাসভাবে নন-ব্লকিং পদ্ধতিতে কাজ করে, গিগাবাইট ডেটা সমর্থন করে এবং মূল ইউআই থ্রেডকে এতটুকু না থামিয়েই জটিল অবজেক্ট ও ইনডেক্সিং পরিচালনা করতে পারে'
        },
        {
          en: 'IndexedDB reduces client monthly electricity bills by 80 percent',
          bn: 'IndexedDB ব্যবহারকারীর বিদ্যুৎ বিল ৮০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Because localStorage deletes all data every 10 seconds',
          bn: 'কারণ localStorage প্রতি ১০ সেকেন্ড পরপর সব ডেটা মুছে ফেলে'
        },
        {
          en: 'IndexedDB was created by the International Postal Union',
          bn: 'কারণ আন্তর্জাতিক ডাক সংস্থা IndexedDB উদ্ভাবন করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Synchronous localStorage locks the browser UI when reading megabytes of strings. IndexedDB is asynchronous and scalable.',
        bn: 'localStorage মেগা মেগা ডেটা পড়ার সময় পুরো পেজ হ্যাং করে ফেলে; IndexedDB ব্যাকগ্রাউন্ডে মসৃণভাবে চলে।'
      },
      explanation: {
        en: 'IndexedDB provides non-blocking transactional storage suitable for large payloads, eliminating the UI thread freezing caused by synchronous Web Storage.',
        bn: 'IndexedDB পেজের মসৃণ গতি বজায় রেখে বিশাল ডেটা অ্যাসিঙ্ক্রোনাসভাবে সংরক্ষণ করার আধুনিক ক্লায়েন্ট ডেটাবেস।'
      }
    }
  ],
  quiz: {
    id: 'warehouse-district-quiz',
    title: {
      en: 'Client-Side Storage, Quotas, and IndexedDB Quiz',
      bn: 'ক্লায়েন্ট-সাইড স্টোরেজ, কোটা ও ইনডেক্সডডিবি কুইজ'
    },
    questions: [
      {
        id: 'wdq-q1',
        kind: 'mcq',
        topic: 'localstorage-string-only-serialization',
        question: {
          en: 'What happens if you execute localStorage.setItem("user", { name: "Alice" }) without calling JSON.stringify() first?',
          bn: 'JSON.stringify() না ডেকে সরাসরি localStorage.setItem("user", { name: "Alice" }) চালালে কী ঘটে?'
        },
        options: [
          {
            en: 'The browser implicitly coerces the object to a string by calling Object.prototype.toString(), permanently storing the useless string "[object Object]"',
            bn: 'ব্রাউজার অবজেক্টটিকে নিজে থেকেই স্ট্রিংয়ে বদলে ফেলে এবং স্থায়ীভাবে সম্পূর্ণ অর্থহীন স্ট্রিং "[object Object]" সংরক্ষণ করে'
          },
          {
            en: 'The browser stores the object perfectly with full type fidelity',
            bn: 'ব্রাউজার নিখুঁতভাবে অবজেক্টটি সংরক্ষণ করে'
          },
          {
            en: 'The computer operating system crashes immediately',
            bn: 'অপারেটিং সিস্টেম মুহূর্তের মধ্যে ক্র্যাশ করে'
          },
          {
            en: 'The object is sent as an SMS message to the user phone',
            bn: 'অবজেক্টটি ব্যবহারকারীর ফোনে এসএমএস হিসেবে চলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'localStorage only accepts strings. Non-strings are converted via .toString().',
          bn: 'লোকাল স্টোরেজ কেবল স্ট্রিং বোঝে; অবজেক্ট দিলে তা "[object Object]" হয়ে যায়।'
        },
        explanation: {
          en: 'Web Storage requires string keys and values; storing structured objects requires manual JSON.stringify() and JSON.parse() serialization.',
          bn: 'Web Storage কেবল স্ট্রিং মান গ্রহণ করে; তাই অবজেক্ট জমা রাখতে JSON.stringify() করা আবশ্যক।'
        }
      },
      {
        id: 'wdq-q2',
        kind: 'mcq',
        topic: 'cookies-vs-webstorage-network-overhead',
        question: {
          en: 'Why should developers avoid storing large application state (such as shopping cart items or user preferences) in browser HTTP Cookies?',
          bn: 'ব্রাউজার HTTP Cookies-এর ভেতরে কেন বড় অ্যাপ্লিকেশন স্টেট (যেমন কার্টের পণ্য বা ব্যবহারকারীর পছন্দ) সংরক্ষণ করা এড়িয়ে চলা উচিত?'
        },
        options: [
          {
            en: 'Every single cookie on a domain is automatically attached to the HTTP request headers of every subsequent network request (including images, scripts, and CSS), wasting precious network bandwidth',
            bn: 'ডোমেইনের প্রতিটি কুকি পরবর্তী প্রতিটি নেটওয়ার্ক রিকোয়েস্টের (এমনকি ছবি, স্ক্রিপ্ট ও সিএসএস ফাইলের সাথেও) হেডারে স্বয়ংক্রিয়ভাবে জুড়ে যায়, যা প্রচুর মূল্যবান ব্যান্ডউইথ অপচয় করে'
          },
          {
            en: 'Cookies permanently format user mobile phones',
            bn: 'কুকিজ ব্যবহারকারীর মোবাইল ফোন ফরম্যাট করে ফেলে'
          },
          {
            en: 'Because cookies can only store negative numbers',
            bn: 'কারণ কুকিজ কেবল ঋণাত্মক সংখ্যা সংরক্ষণ করতে পারে'
          },
          {
            en: 'Cookies were declared illegal under international treaties in 2021',
            bn: 'কারণ ২০২১ সালে আন্তর্জাতিক আইনে কুকিজ নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cookies travel over the network on every single HTTP request. Web Storage stays strictly local in the browser.',
          bn: 'কুকিজ প্রতিটি নেটওয়ার্ক কলের সাথে ইন্টারনেটে যায়; ওয়েব স্টোরেজ কেবল ব্রাউজারের ভেতরেই থাকে।'
        },
        explanation: {
          en: 'Cookies inflate HTTP request headers on every asset request; Web Storage remains strictly on the client until explicitly transmitted.',
          bn: 'কুকিজ প্রতিটি রিকোয়েস্টের সাথে অযথা ইন্টারনেটে যাতায়াত করে ব্যান্ডউইথ নষ্ট করে; ওয়েব স্টোরেজ ব্রাউজারের অভ্যন্তরেই শান্ত থাকে।'
        }
      },
      {
        id: 'wdq-q3',
        kind: 'mcq',
        topic: 'sessionstorage-duplicate-tab-behavior',
        question: {
          en: 'If a user right-clicks a link and selects "Open in New Tab" (or duplicates an existing tab), how does sessionStorage behave in the newly opened tab?',
          bn: 'কোনো ব্যবহারকারী যদি একটি লিংকে রাইট-ক্লিক করে "Open in New Tab" নির্বাচন করেন (বা ট্যাব ডুপ্লিকেট করেন), তবে নতুন খোলা ট্যাবে sessionStorage কীভাবে আচরণ করে?'
        },
        options: [
          {
            en: 'The browser copies the existing tab sessionStorage into the new tab as an independent snapshot; subsequent modifications in either tab do NOT affect the other',
            bn: 'ব্রাউজার পুরনো ট্যাবের sessionStorage-এর একটি স্বাধীন অনুলিপি নতুন ট্যাবে কপি করে দেয়; পরবর্তীতে যেকোনো একটি ট্যাবে পরিবর্তন করলে অন্য ট্যাবে কোনো প্রভাব পড়ে না'
          },
          {
            en: 'The new tab starts with completely empty storage on all operating systems',
            bn: 'নতুন ট্যাবটি সমস্ত অপারেটিং সিস্টেমে সম্পূর্ণ খালি অবস্থায় শুরু হয়'
          },
          {
            en: 'Both tabs remain permanently linked and synchronized forever',
            bn: 'উভয় ট্যাব চিরতরে একে অপরের সাথে সিঙ্ক থাকে'
          },
          {
            en: 'The new tab deletes the original tab storage directory',
            bn: 'নতুন ট্যাবটি মূল ট্যাবের সমস্ত ডেটা মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Duplicating a tab clones the session storage, but the two tabs remain completely isolated afterwards.',
          bn: 'ট্যাব ডুপ্লিকেট করলে সেশনের ডেটা কপি হয়, কিন্তু এরপর দুটি ট্যাব সম্পূর্ণ স্বাধীনভাবে চলে।'
        },
        explanation: {
          en: 'Duplicating a tab performs a one-time clone of sessionStorage, creating an autonomous session context for the new tab.',
          bn: 'ট্যাব ডুপ্লিকেট করলে ডেটা কপি হয় কিন্তু তারা পরবর্তীতে একে অপরের সাথে কোনো তথ্য আদান-প্রদান করে না।'
        }
      },
      {
        id: 'wdq-q4',
        kind: 'mcq',
        topic: 'indexeddb-transaction-auto-commit',
        question: {
          en: 'In IndexedDB, what critical rule governs how database transactions auto-commit when performing asynchronous work?',
          bn: 'IndexedDB-তে অ্যাসিঙ্ক্রোনাস কাজ করার সময় ডেটাবেস ট্রানজ্যাকশন কীভাবে স্বয়ংক্রিয়ভাবে কমিট (Auto-commit) হয় তার মূল নিয়মটি কী?'
        },
        options: [
          {
            en: 'An IndexedDB transaction stays active only as long as consecutive requests are placed on it within the same microtask/event loop cycle; if an unlinked async delay (e.g. fetch or setTimeout) occurs, the browser auto-commits the transaction',
            bn: 'একটি IndexedDB ট্রানজ্যাকশন কেবল ততক্ষণ সক্রিয় থাকে যতক্ষণ একই ইভেন্ট লুপ সাইকেলে একের পর এক রিকোয়েস্ট আসে; মাঝখানে কোনো সম্পর্কহীন বিলম্ব (যেমন fetch বা setTimeout) ঘটলে ব্রাউজার নিজে থেকেই ট্রানজ্যাকশন কমিট করে বন্ধ করে দেয়'
          },
          {
            en: 'Transactions only commit when the user closes their computer screen',
            bn: 'ব্যবহারকারী ল্যাপটপের ঢাকনা বন্ধ করলেই কেবল ট্রানজ্যাকশন কমিট হয়'
          },
          {
            en: 'IndexedDB requires developers to write COMMIT; in raw SQL strings',
            bn: 'ডেভেলপারদের ম্যানুয়ালি COMMIT; লিখতে হয়'
          },
          {
            en: 'Transactions never commit and always roll back on page refresh',
            bn: 'ট্রানজ্যাকশন কখনোই কমিট হয় না এবং পেজ রিফ্রেশে সব ডেটা হারিয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'You cannot pause an IndexedDB transaction to do a network fetch. The browser closes idle transactions automatically.',
          bn: 'ট্রানজ্যাকশনের মাঝখানে নেটওয়ার্ক ফেচ করতে গেলে সময় নষ্ট হয় এবং ব্রাউজার ট্রানজ্যাকশন সাথে সাথে বন্ধ করে দেয়।'
        },
        explanation: {
          en: 'IndexedDB transactions auto-commit as soon as the event loop turns with no active pending requests in the transaction scope.',
          bn: 'ইভেন্ট লুপে কোনো কাজ বাকি না থাকলে ব্রাউজার নিজে থেকেই লেনদেনটি সুরক্ষিতভাবে কমিট করে ফেলে।'
        }
      }
    ]
  }
};
