import type { Lesson } from '../../../lib/types';

export const qualityDeskLesson: Lesson = {
  slug: 'the-quality-desk',
  tech: 'tanstack-query',
  title: {
    en: 'Fine-Grained Reactivity — Structural Sharing, Selectors & notifyOnChangeProps',
    bn: 'সূক্ষ্ম রিঅ্যাক্টিভিটি — স্ট্রাকচারাল শেয়ারিং, সিলেক্টরস ও notifyOnChangeProps'
  },
  summary: {
    en: 'Frequent background refetches are vital for real-time applications, but naively repainting the entire UI on every incoming payload degrades browser responsiveness. When the server returns data, JSON parsing creates brand-new memory references even if the underlying values are unchanged. TanStack Query solves this using structural sharing, an intelligent diff engine enabled by default that walks incoming payloads key-by-key and preserves existing object references for all unchanged fields. For components that only require a subset of a large dataset, the select option extracts the necessary slice and bails out of re-renders if that slice remains structurally identical. Furthermore, TanStack Query v5 automatically tracks property access via notifyOnChangeProps, ensuring that components only re-render when the specific properties they access—such as data or isFetching—actually change.',
    bn: 'রিয়েল-টাইম অ্যাপ্লিকেশনে ঘনঘন ব্যাকগ্রাউন্ড রিফেচ দরকার হলেও প্রতিটি রেসপন্সে পুরো ইউআই পুনরায় রেন্ডার হলে ব্রাউজারের গতি কমে যায়। সার্ভার থেকে তথ্য আসার পর জেএসন পার্সিং মেমোরিতে নতুন রেফারেন্স তৈরি করে, যদিও ভেতরের মান একই থাকে। TanStack Query ডিফল্টভাবে চালু থাকা স্ট্রাকচারাল শেয়ারিংয়ের মাধ্যমে এই সমস্যার সমাধান করে। এটি আগত ডেটার সাথে বিদ্যমান ক্যাশের তুলনা করে অপরিবর্তিত ফিল্ডগুলোর পুরোনো মেমোরি রেফারেন্স অক্ষুণ্ণ রাখে। আবার কোনো কম্পোনেন্টের যদি একটি বিশাল তালিকার সামান্য অংশের প্রয়োজন হয়, তবে select অপশন নির্দিষ্ট অংশ আলাদা করে এবং সেই অংশ অপরিবর্তিত থাকলে রি-রেন্ডার বন্ধ রাখে। অধিকন্তু TanStack Query v5-এ স্বয়ংক্রিয়ভাবে notifyOnChangeProps দিয়ে ট্র্যাক করা হয়, ফলে কম্পোনেন্ট যে প্রপার্টি ব্যবহার করে কেবল সেটি বদলালেই রেন্ডার ট্রিগার হয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Eliminating Unnecessary Re-renders',
        bn: 'মূল ধারণা: অপ্রয়োজনীয় রি-রেন্ডার দূরীকরণ'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'para',
      text: {
        en: 'When you build large React applications with frequent background refetches, every network response threatens to trigger unnecessary component re-renders. Even when the server returns identical database rows, parsing network responses allocates brand-new JavaScript object references in memory. TanStack Query prevents cascade re-renders through three fine-grained reactivity mechanisms: structural sharing, the select transformation option, and tracked property notifications.',
        bn: 'যখন আপনি ঘনঘন ব্যাকগ্রাউন্ড রিফেচ যুক্ত বড় রিঅ্যাক্ট অ্যাপ্লিকেশন তৈরি করেন, তখন প্রতিটি নেটওয়ার্ক রেসপন্স অনাকাঙ্ক্ষিত কম্পোনেন্ট রি-রেন্ডার ঘটাতে পারে। সার্ভার থেকে হুবহু একই ডেটা এলেও নেটওয়ার্ক রেসপন্স পার্স করার সময় মেমোরিতে সম্পূর্ণ নতুন অবজেক্ট রেফারেন্স তৈরি হয়। TanStack Query তিনটি সূক্ষ্ম রিঅ্যাক্টিভিটি কৌশলের মাধ্যমে এই অযথা রি-রেন্ডার বন্ধ করে: স্ট্রাকচারাল শেয়ারিং (structural sharing), সিলেক্টর অপশন (select) এবং ট্র্যাকড প্রপার্টি নোটিফিকেশন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'structuralSharing',
          def: {
            en: 'Built-in recursive diff engine that preserves previous JavaScript object references for unchanged properties',
            bn: 'বিল্ট-ইন রিকার্সিভ ডিভ ইঞ্জিন যা অপরিবর্তিত প্রপার্টির জন্য আগের জাভাস্ক্রিপ্ট অবজেক্ট রেফারেন্স অক্ষুণ্ণ রাখে'
          }
        },
        {
          term: 'select',
          def: {
            en: 'Query option function to subscribe only to a derived, transformed slice of cached query data',
            bn: 'কোয়েরি অপশন ফাংশন যা ক্যাশ করা মূল ডেটার একটি নির্দিষ্ট রূপান্তরিত অংশে সাবস্ক্রাইব করতে ব্যবহৃত হয়'
          }
        },
        {
          term: 'notifyOnChangeProps',
          def: {
            en: 'Reactivity configuration determining which hook property accesses trigger component re-renders',
            bn: 'রিঅ্যাক্টিভিটি কনফিগারেশন যা নির্ধারণ করে হুকের কোন কোন প্রপার্টি পরিবর্তনের ফলে কম্পোনেন্ট পুনরায় রেন্ডার হবে'
          }
        },
        {
          term: 'Referential Identity',
          def: {
            en: 'Strict equality (a === b) in JavaScript comparing memory memory pointer addresses rather than deep value shapes',
            bn: 'জাভাস্ক্রিপ্টে ট্রিপল ইকুয়াল (a === b) দিয়ে মেমোরি পয়েন্টার ঠিকানা তুলনা করার পদ্ধতি'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'structural-sharing-mechanics',
      text: {
        en: 'How Structural Sharing Preserves Memory References',
        bn: 'স্ট্রাকচারাল শেয়ারিং কীভাবে মেমোরি রেফারেন্স সংরক্ষণ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern JavaScript, two distinct objects { id: 7 } and { id: 7 } evaluate to false under strict equality === because they reside at different memory addresses. In standard React components, when a hook returns a new object reference, memoized children wrapped in React.memo and dependency arrays in useMemo or useEffect re-execute regardless of whether the inner data changed.',
        bn: 'আধুনিক জাভাস্ক্রিপ্টে ২ টি পৃথক অবজেক্ট { id: 7 } এবং { id: 7 } মেমোরির ভিন্ন ঠিকানায় অবস্থানের কারণে === দিয়ে তুলনা করলে false দেখায়। রিঅ্যাক্ট কম্পোনেন্টে হুক থেকে নতুন অবজেক্ট রেফারেন্স এলেই React.memo দিয়ে আটকানো চাইল্ড কম্পোনেন্ট এবং useMemo বা useEffect-এর ডিপেন্ডেন্সি অ্যারে পুনরায় রান করে, যদিও ভেতরের তথ্যে কোনো পরিবর্তন ঘটেনি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'TanStack Query solves this by running structural sharing across every completed query fetch. The query client recursively compares incoming fields with the existing cache. If an entire array or nested object has identical values, TanStack Query discards the new allocated object and reuses the old reference. If only one item in an array of 50 records changed, 49 items retain their original reference while only the updated record receives a new identity.',
        bn: 'TanStack Query প্রতিটি সফল ফেচের পর স্ট্রাকচারাল শেয়ারিং চালিয়ে এই সমস্যার সমাধান করে। কোয়েরি ক্লায়েন্ট আগত ডেটার প্রতিটি ফিল্ডের সাথে পূর্বের ক্যাশের রিকার্সিভ তুলনা করে। যদি কোনো অ্যারে বা নেস্টেড অবজেক্টের মান পুরোপুরি একই থাকে, তবে নতুন অবজেক্টটি বাতিল করে পুরোনো মেমোরি রেফারেন্সটিই রেখে দেওয়া হয়। ফলে ৫০ টি রেকর্ডের মধ্যে মাত্র ১ টি বদলালে বাকি ৪৯ টি রেকর্ড তাদের আগের রেফারেন্স ধরে রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For colossal datasets comprising megabytes of deeply nested records, deep structural diffing incurs an O(N) CPU evaluation cost. In rare scenarios where JSON parsing and tree traversal take longer than component rendering, developers can disable this mechanism by passing structuralSharing: false or supply a custom diffing algorithm.',
        bn: 'মেগাবাইট আকারের বিশদ নেস্টেড ডেটাসেটের ক্ষেত্রে রিকার্সিভ ডিফারেন্স বের করতে O(N) সিপিইউ সময় লাগতে পারে। বিরল ক্ষেত্রে যেখানে ট্রি ট্রাভার্সাল করতে কম্পোনেন্ট রেন্ডারের চেয়ে বেশি সময় নষ্ট হয়, সেখানে ডেভেলপাররা structuralSharing: false লিখে এটি বন্ধ করতে পারেন অথবা নিজস্ব কাস্টম অ্যালগরিদম দিতে পারেন।'
      }
    },
    {
      type: 'heading',
      id: 'select-transformation',
      text: {
        en: 'Optimizing Subscriptions with the select Option',
        bn: 'select অপশন দিয়ে সাবস্ক্রিপশন অপ্টিমাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Often, multiple components consume data from the same query key but only care about different slices. For instance, a navigation badge only needs the unread count from an array of 100 notifications. Declaring select: (data) => data.notifications.filter(n => !n.read).length ensures the badge component subscribes exclusively to that single numeric value.',
        bn: 'প্রায়শই একই কোয়েরি কি থেকে একাধিক কম্পোনেন্ট ডেটা ব্যবহার করে, কিন্তু সবার সব তথ্যের প্রয়োজন হয় না। যেমন নেভিগেশন বারের একটি ব্যাজের জন্য ১০০ টি নোটিফিকেশনের মধ্য থেকে কেবল না-পড়া নোটিফিকেশনের সংখ্যা জানা দরকার। select: (data) => data.notifications.filter(n => !n.read).length লিখে দিলে ব্যাজ কম্পোনেন্টটি কেবল সেই একটিমাত্র সংখ্যার ওপর সাবস্ক্রাইব করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'TanStack Query applies structural sharing directly to the result of select. If the background query refetches and updates an unrelated user profile field while the filtered notification count remains 2, the select output is identical. The badge component completely skips re-rendering because its subscribed value did not change.',
        bn: 'TanStack Query সরাসরি select-এর ফলাফলেও স্ট্রাকচারাল শেয়ারিং প্রয়োগ করে। ব্যাকগ্রাউন্ডে কোয়েরি রিফেচ হয়ে যদি ব্যবহারকারীর প্রোফাইল তথ্য পরিবর্তিত হয় কিন্তু না-পড়া নোটিফিকেশনের সংখ্যা অপরিবর্তিত থাকে ২ এ, তবে select-এর আউটপুট একই থাকে। ফলে ব্যাজ কম্পোনেন্টটি সম্পূর্ণভাবে রি-রেন্ডার এড়িয়ে যায় কারণ তার সাবস্ক্রাইব করা মানে কোনো পরিবর্তন হয়নি।'
      }
    },
    {
      type: 'heading',
      id: 'notify-on-change-props',
      text: {
        en: 'Tracked Reactivity with notifyOnChangeProps',
        bn: 'notifyOnChangeProps দিয়ে ট্র্যাকড রিঅ্যাক্টিভিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A useQuery hook returns dozens of state properties including data, error, isFetching, isStale, and isRefetching. In TanStack Query v5, notifyOnChangeProps is set to "auto" by default. During component rendering, JavaScript property getters automatically record which exact fields the component accesses.',
        bn: 'একটি useQuery হুক data, error, isFetching, isStale, এবং isRefetching সহ বহু স্টেট প্রপার্টি ফেরত দেয়। TanStack Query v5-এ notifyOnChangeProps ডিফল্টভাবে "auto" নির্ধারণ করা থাকে। কম্পোনেন্ট রেন্ডার হওয়ার সময় জাভাস্ক্রিপ্ট গেটার স্বয়ংক্রিয়ভাবে রেকর্ড করে নেয় কম্পোনেন্টটি হুকের ঠিক কোন কোন ফিল্ড রিড করেছে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If a component only renders {data.title} and never reads isFetching, background polling transitions where isFetching toggles from false to true and back to false will not trigger a re-render. This eliminates layout flickering during automated window focus or network reconnects.',
        bn: 'যদি কোনো কম্পোনেন্ট কেবল {data.title} রেন্ডার করে এবং কখনো isFetching না পড়ে, তবে ব্যাকগ্রাউন্ড পোলিংয়ের সময় isFetching পরিবর্তিত হলেও কম্পোনেন্টটি নতুন করে রেন্ডার হবে না। এটি উইন্ডো রিফোকাস বা নেটওয়ার্ক রিকানেক্টের সময় অনাকাঙ্ক্ষিত ইউআই ফ্লিকারিং দূর করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Reactivity Optimization Tools',
        bn: 'কাঠামোগত তুলনা: রিঅ্যাক্টিভিটি অপ্টিমাইজেশন টুলস'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feature Mechanism', bn: 'কৌশলগত বৈশিষ্ট্য' },
        { en: 'structuralSharing', bn: 'structuralSharing' },
        { en: 'select Option', bn: 'select অপশন' },
        { en: 'notifyOnChangeProps', bn: 'notifyOnChangeProps' }
      ],
      rows: [
        [
          { en: 'Operational Layer', bn: 'কার্যকারী স্তর' },
          { en: 'Query Cache Storage layer', bn: 'কোয়েরি ক্যাশ স্টোরেজ স্তর' },
          { en: 'Query Observer Subscription layer', bn: 'কোয়েরি অবজারভার সাবস্ক্রিপশন স্তর' },
          { en: 'React Component Hook Render layer', bn: 'রিঅ্যাক্ট কম্পোনেন্ট হুক রেন্ডার স্তর' }
        ],
        [
          { en: 'Default Configuration in v5', bn: 'v5-এ ডিফল্ট কনফিগারেশন' },
          { en: 'true (enabled for all queries)', bn: 'true (সমস্ত কোয়েরির জন্য সক্রিয়)' },
          { en: 'undefined (returns complete dataset)', bn: 'undefined (সম্পূর্ণ ডেটাসেট ফেরত দেয়)' },
          { en: '"auto" (tracks accessed properties)', bn: '"auto" (ব্যবহৃত প্রপার্টি ট্র্যাক করে)' }
        ],
        [
          { en: 'Optimization Objective', bn: 'অপ্টিমাইজেশনের মূল লক্ষ্য' },
          { en: 'Preserves object identity across refetches', bn: 'রিফেচ চলাকালীন অবজেক্টের রেফারেন্স অক্ষুণ্ণ রাখে' },
          { en: 'Isolates rendering to transformed data slices', bn: 'রেন্ডারিংকে কেবল প্রয়োজনীয় ডেটা অংশে সীমাবদ্ধ রাখে' },
          { en: 'Suppresses renders from unread hook status flags', bn: 'অব্যবহৃত হুক স্ট্যাটাস ফ্ল্যাগের পরিবর্তন উপেক্ষা করে' }
        ],
        [
          { en: 'Customization Support', bn: 'কাস্টমাইজেশন সুবিধা' },
          { en: 'Accepts boolean or custom diff function', bn: 'বুলিয়ান অথবা নিজস্ব ডিভ ফাংশন গ্রহণ করে' },
          { en: 'Accepts pure mapping/filtering functions', bn: 'পিওর ম্যাপিং বা ফিল্টারিং ফাংশন গ্রহণ করে' },
          { en: 'Accepts array of property strings or "all"', bn: 'নির্দিষ্ট প্রপার্টি স্ট্রিং অ্যারে বা "all" গ্রহণ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Structural Sharing & Selectors',
        bn: 'বাস্তব কোড সিমুলেশন: স্ট্রাকচারাল শেয়ারিং ও সিলেক্টরস'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query Structural Sharing & Selector Optimization

function deepStructuralSharing(oldData: any, newData: any): any {
  if (oldData === newData) return oldData;
  if (typeof oldData !== 'object' || oldData === null || typeof newData !== 'object' || newData === null) {
    return newData;
  }

  if (Array.isArray(oldData) && Array.isArray(newData)) {
    if (oldData.length === newData.length && oldData.every((item, i) => item === newData[i])) {
      return oldData;
    }
    let hasChanges = false;
    const result = newData.map((newItem, i) => {
      const sharedItem = deepStructuralSharing(oldData[i], newItem);
      if (sharedItem !== oldData[i]) {
        hasChanges = true;
      }
      return sharedItem;
    });
    return (hasChanges || result.length !== oldData.length) ? result : oldData;
  }

  const oldKeys = Object.keys(oldData);
  const newKeys = Object.keys(newData);

  let hasChanges = oldKeys.length !== newKeys.length;
  const result: Record<string, any> = {};

  for (const key of newKeys) {
    const sharedVal = deepStructuralSharing(oldData[key], newData[key]);
    result[key] = sharedVal;
    if (sharedVal !== oldData[key]) {
      hasChanges = true;
    }
  }

  return hasChanges ? result : oldData;
}

// 1. Initial State in Cache
const stateV1 = {
  user: { id: 7, name: 'Alice', role: 'admin' },
  notifications: [
    { id: 101, text: 'Welcome', read: true },
    { id: 102, text: 'Invoice ready', read: false }
  ]
};

// 2. Incoming refetch with identical values (new wire reference)
const wireV2 = JSON.parse(JSON.stringify(stateV1));
const stateV2 = deepStructuralSharing(stateV1, wireV2);

// 3. Incoming refetch where only notification [1] changed
const wireV3 = JSON.parse(JSON.stringify(stateV1));
wireV3.notifications[1].read = true; // marked read
const stateV3 = deepStructuralSharing(stateV2, wireV3);

// 4. Selector: Select only the user object
const selectUser = (state: typeof stateV1) => state.user;
const userFromV1 = selectUser(stateV1);
const userFromV3 = selectUser(stateV3);

console.log('Wire V2 identical payload reference match:', stateV1 === stateV2);
// -> Wire V2 identical payload reference match: true
console.log('Wire V3 modified user object identity preserved:', stateV1.user === stateV3.user);
// -> Wire V3 modified user object identity preserved: true
console.log('Wire V3 unchanged notification [0] identity preserved:', stateV1.notifications[0] === stateV3.notifications[0]);
// -> Wire V3 unchanged notification [0] identity preserved: true
console.log('Wire V3 changed notification [1] identity updated:', stateV1.notifications[1] === stateV3.notifications[1]);
// -> Wire V3 changed notification [1] identity updated: false
console.log('Selector user identity preserved despite notification change:', userFromV1 === userFromV3);
// -> Selector user identity preserved despite notification change: true`,
      caption: {
        en: 'Simulation: structural sharing matches V2 payload; V3 preserves user identity with ID 7 and notification 101 at index 0 while updating notification 102 at index 1',
        bn: 'সিমুলেশন: স্ট্রাকচারাল শেয়ারিং V2 পে-লোড অক্ষুণ্ণ রাখে; V3 আইডি ৭ এর ইউজার ও ইনডেক্স ০ এর ১০১ নোটিফিকেশন ধরে রেখে ইনডেক্স ১ এর ১০২ নোটিফিকেশন আপডেট করে'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Keep select selector functions stable. Because select runs on every render, defining an inline arrow function that produces a brand-new object or array defeats structural sharing; declare the selector outside the component or wrap it in useCallback.',
        bn: 'নিয়ম ১: select ফাংশনকে সর্বদা স্থিতিশীল রাখুন। select প্রতি রেন্ডারে চলে, তাই ইনলাইন অ্যারো ফাংশনে নতুন অবজেক্ট বা অ্যারে বানালে স্ট্রাকচারাল শেয়ারিং নষ্ট হয়; সিলেক্টরকে কম্পোনেন্টের বাইরে ডিক্লেয়ার করুন অথবা useCallback দিয়ে র্যাপ করুন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Do not disable structural sharing unless profiling proves it is a bottleneck. The diffing algorithm is highly optimized in JavaScript; disabling it often saves 2 milliseconds of CPU while causing hundreds of milliseconds in cascading React DOM repaints.',
        bn: 'নিয়ম ২: প্রোফাইলিং করে নিশ্চিত না হয়ে structuralSharing বন্ধ করবেন না। ডিফারেন্সিং অ্যালগরিদম অত্যন্ত দ্রুত কাজ করে; এটি বন্ধ করলে ২ মিলিসেকেন্ড সিপিইউ বাঁচলেও পুরো রিঅ্যাক্ট ডম পুনরায় রেন্ডার হতে শত শত মিলিসেকেন্ড নষ্ট হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Trust notifyOnChangeProps auto tracking. TanStack Query v5 automatically tracks property getters; avoid manually hardcoding string arrays unless creating specialized micro-optimizations for shared dashboard widgets.',
        bn: 'নিয়ম ৩: notifyOnChangeProps-এর অটো ট্র্যাকিংয়ের ওপর আস্থা রাখুন। TanStack Query v5 স্বয়ংক্রিয়ভাবে প্রপার্টি রিড ট্র্যাক করে; বিশেষ প্রয়োজন ছাড়া অযথা হাতে স্ট্রিং অ্যারে লিখে কনফিগার করার দরকার নেই।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Select primitives whenever possible. Subscribing to numbers, booleans, or string values avoids reference equality pitfalls entirely, guaranteeing perfect bail-out behavior across component updates.',
        bn: 'নিয়ম ৪: সম্ভব হলে সিলেক্টরের মাধ্যমে প্রিমিটিভ মান রিটার্ন করুন। সংখ্যা, বুলিয়ান বা স্ট্রিং মানে সাবস্ক্রাইব করলে রেফারেন্স জটিলতা থাকে না এবং রি-রেন্ডার নিখুঁতভাবে নিয়ন্ত্রণ করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'tq-qual-ex1',
      kind: 'mcq',
      topic: 'Structural sharing mechanism and reference equality',
      question: {
        en: 'How does structural sharing in TanStack Query prevent React component re-renders when a refetch yields identical data?',
        bn: 'TanStack Query-র স্ট্রাকচারাল শেয়ারিং কীভাবে হুবহু একই ডেটা রিফেচ হওয়ার পর রিঅ্যাক্ট কম্পোনেন্টের রি-রেন্ডার বন্ধ করে?'
      },
      options: [
        {
          en: 'It compares incoming data with cached data and reuses previous JavaScript object references for all unchanged fields, allowing React memoization to bail out',
          bn: 'এটি আগত ডেটার সাথে ক্যাশ ডেটার তুলনা করে অপরিবর্তিত ফিল্ডে আগের অবজেক্ট রেফারেন্স অক্ষুণ্ণ রাখে, ফলে রিঅ্যাক্ট মেমোইজেশন কাজ করে রি-রেন্ডার বন্ধ করে দেয়'
        },
        {
          en: 'It converts the incoming JSON into WebAssembly bytecode to bypass the V8 runtime',
          bn: 'এটি আগত জেএসনকে ওয়েবঅ্যাসেম্বলিতে রূপান্তর করে ভি৮ রানটাইম বাইপাস করে'
        },
        {
          en: 'It cancels all browser repaint cycles using the canvas API',
          bn: 'এটি ক্যানভাস এপিআই ব্যবহার করে সমস্ত ব্রাউজার পেইন্ট চক্র বাতিল করে দেয়'
        },
        {
          en: 'It forces the React virtual DOM tree to freeze permanently',
          bn: 'এটি রিঅ্যাক্ট ভার্চুয়াল ডম ট্রি-কে স্থায়ীভাবে ফ্রিজ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about referential identity (===) and React.memo bail-outs.',
        bn: 'রেফারেন্সিয়াল আইডেন্টিটি (===) এবং React.memo-র বেইল-আউটের কথা ভাবুন।'
      },
      explanation: {
        en: 'By preserving the exact memory pointer of unchanged objects, strict equality checks evaluate to true, allowing React to skip re-rendering.',
        bn: 'অপরিবর্তিত অবজেক্টের হুবহু একই মেমোরি পয়েন্টার ধরে রাখার মাধ্যমে ট্রিপল ইকুয়াল চেক সত্য হয়, যার ফলে রিঅ্যাক্ট রি-রেন্ডার এড়িয়ে যেতে পারে।'
      }
    },
    {
      id: 'tq-qual-ex2',
      kind: 'mcq',
      topic: 'Stability requirements for the select option',
      question: {
        en: 'What occurs if an unstable inline function producing a new array is passed to the select option on every render?',
        bn: 'প্রতি রেন্ডারে select অপশনে যদি এমন একটি ইনলাইন ফাংশন দেওয়া হয় যা প্রতিবার নতুন অ্যারে তৈরি করে, তবে কী ঘটে?'
      },
      options: [
        {
          en: 'The selector produces a new array reference every render, defeating structural sharing and causing the component to continuously re-render',
          bn: 'সিলেক্টর প্রতিবার নতুন অ্যারে রেফারেন্স তৈরি করে, ফলে স্ট্রাকচারাল শেয়ারিং নষ্ট হয় এবং কম্পোনেন্ট অনবরত রি-রেন্ডার হতে থাকে'
        },
        {
          en: 'TanStack Query automatically deletes the query key from the cache',
          bn: 'TanStack Query ক্যাশ থেকে কোয়েরি কি স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        },
        {
          en: 'The browser triggers an unhandled memory leak warning in the developer console',
          bn: 'ডেভেলপার কনসোলে ব্রাউজার একটি মেমোরি লিক সতর্কবার্তা প্রদর্শন করে'
        },
        {
          en: 'The query function is permanently throttled to 1 request per hour',
          bn: 'কোয়েরি ফাংশনটি প্রতি ঘণ্টায় ১ টি রিকোয়েস্টে স্থায়ীভাবে সীমাবদ্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'select executes on every render pass; new array references mean new memory identities.',
        bn: 'select প্রতি রেন্ডারে চলে; নতুন অ্যারে রেফারেন্স মানেই মেমোরিতে নতুন আইডেন্টিটি।'
      },
      explanation: {
        en: 'Because select runs on every render, returning a newly allocated array reference from an inline function creates a fresh identity, triggering infinite re-render loops unless memoized with useCallback.',
        bn: 'যেহেতু select প্রতি রেন্ডারে চলে, তাই ইনলাইন ফাংশন থেকে নতুন অ্যারে বানালে রেফারেন্স বদলে যায় এবং useCallback দিয়ে না আটকালে অনাকাঙ্ক্ষিত রি-রেন্ডার ঘটতে থাকে।'
      }
    },
    {
      id: 'tq-qual-ex3',
      kind: 'mcq',
      topic: 'notifyOnChangeProps auto tracking behavior',
      question: {
        en: 'How does notifyOnChangeProps: "auto" optimize component performance during background refetches?',
        bn: 'notifyOnChangeProps: "auto" কীভাবে ব্যাকগ্রাউন্ড রিফেচ চলাকালীন কম্পোনেন্টের পারফরম্যান্স উন্নত করে?'
      },
      options: [
        {
          en: 'It tracks which specific hook properties the component accessed during render, preventing re-renders if only unread flags like isFetching change',
          bn: 'কম্পোনেন্ট রেন্ডারের সময় হুকের কোন প্রপার্টি রিড করা হয়েছে তা ট্র্যাক করে, ফলে অব্যবহৃত ফ্ল্যাগ যেমন isFetching বদলালেও রি-রেন্ডার হয় না'
        },
        {
          en: 'It automatically disables JavaScript event bubbling across all HTML buttons',
          bn: 'এটি সমস্ত এইচটিএমএল বাটনে জাভাস্ক্রিপ্ট ইভেন্ট বাবলিং স্বয়ংক্রিয়ভাবে বন্ধ করে দেয়'
        },
        {
          en: 'It compresses HTTP payload responses using gzip before passing them to the component',
          bn: 'এটি কম্পোনেন্টে ডেটা পাঠানোর পূর্বে এইচটিটিপি পে-লোড জিজিপ দিয়ে কম্প্রেস করে'
        },
        {
          en: 'It moves all component state into local storage automatically',
          bn: 'এটি সমস্ত কম্পোনেন্ট স্টেট স্বয়ংক্রিয়ভাবে লোকাল স্টোরেজে স্থানান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about property getters recording access to data vs isFetching.',
        bn: 'data বনাম isFetching প্রপার্টি ব্যবহারের ট্র্যাকিংয়ের কথা ভাবুন।'
      },
      explanation: {
        en: 'Property tracking ensures that if a component only renders data, internal status toggles like isFetching do not trigger re-renders, preventing unwanted flickering.',
        bn: 'প্রপার্টি ট্র্যাকিং নিশ্চিত করে যে কম্পোনেন্ট যদি শুধু data ব্যবহার করে, তবে isFetching-এর মতো অভ্যন্তরীণ স্টেট বদলালেও কম্পোনেন্ট পুনরায় রেন্ডার হয় না।'
      }
    },
    {
      id: 'tq-qual-ex4',
      kind: 'mcq',
      topic: 'Trade-offs of structuralSharing: false',
      question: {
        en: 'Under what specific circumstance should a developer consider disabling structural sharing with structuralSharing: false?',
        bn: 'ঠিক কোন বিশেষ পরিস্থিতিতে একজন ডেভেলপার structuralSharing: false দিয়ে স্ট্রাকচারাল শেয়ারিং বন্ধ করার কথা বিবেচনা করতে পারেন?'
      },
      options: [
        {
          en: 'When consuming colossal, multi-megabyte JSON payloads where recursive diffing CPU time exceeds the component re-render duration',
          bn: 'যখন বহু মেগাবাইট বিশদ জেএসন ডেটা আসে এবং রিকার্সিভ ডিফারেন্স বের করতে কম্পোনেন্ট রি-রেন্ডারের চেয়ে বেশি সময় ব্যয় হয়'
        },
        {
          en: 'When the application is running in an offline mobile environment',
          bn: 'যখন অ্যাপ্লিকেশনটি অফলাইন মোবাইল পরিবেশে চলে'
        },
        {
          en: 'When the query uses HTTP POST instead of HTTP GET',
          bn: 'যখন কোয়েরিতে এইচটিটিপি GET-এর বদলে POST ব্যবহার করা হয়'
        },
        {
          en: 'When the server API returns XML format instead of JSON',
          bn: 'যখন সার্ভার এপিআই জেএসনের বদলে এক্সএমএল ফরম্যাটে ডেটা পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Diffing has a CPU cost proportional to the size of the payload.',
        bn: 'পে-লোডের আকারের ওপর ভিত্তি করে ডিফারেন্সিংয়ের একটি নির্দিষ্ট সিপিইউ খরচ রয়েছে।'
      },
      explanation: {
        en: 'Deep structural comparison requires walking the object tree. For massive payloads, this O(N) traversal may take more time than React takes to repaint, making disabling it worthwhile.',
        bn: 'গভীর স্ট্রাকচারাল তুলনা করতে পুরো অবজেক্ট ট্রি ট্রাভার্স করতে হয়। বিশালাকার ডেটাসেটে এই O(N) যাচাইয়ে রি-রেন্ডারের চেয়েও বেশি সময় নষ্ট হতে পারে, তাই তখন এটি বন্ধ রাখা যুক্তিসঙ্গত।'
      }
    }
  ],
  quiz: {
    id: 'the-quality-desk-quiz',
    title: {
      en: 'Fine-Grained Reactivity & Selectors Quiz',
      bn: 'সূক্ষ্ম রিঅ্যাক্টিভিটি ও সিলেক্টরস কুইজ'
    },
    questions: [
      {
        id: 'q-structural-sharing-mutability',
        kind: 'mcq',
        topic: 'Immutability guarantee of structural sharing',
        question: {
          en: 'Why is it strictly forbidden to mutate objects returned by TanStack Query in-place?',
          bn: 'TanStack Query থেকে প্রাপ্ত অবজেক্ট সরাসরি ইন-প্লেস মিউটেট বা পরিবর্তন করা কেন কঠোরভাবে নিষিদ্ধ?'
        },
        options: [
          {
            en: 'Direct mutation corrupts the cache and causes structural sharing to falsely evaluate modified items as unchanged, breaking UI updates',
            bn: 'সরাসরি মান পরিবর্তন করলে ক্যাশ নষ্ট হয় এবং স্ট্রাকচারাল শেয়ারিং পরিবর্তিত আইটেমকেও অপরিবর্তিত মনে করে, ফলে ইউআই আপডেট পুরোপুরি বন্ধ হয়ে যায়'
          },
          {
            en: 'Direct mutation throws an immediate fatal WebGL shader error',
            bn: 'সরাসরি মান পরিবর্তন করলে সাথে সাথে ওয়েবজিএল শেডার এরর ঘটে'
          },
          {
            en: 'JavaScript engines permanently de-optimize all arithmetic functions after an in-place mutation',
            bn: 'ইন-প্লেস পরিবর্তনের ফলে জাভাস্ক্রিপ্ট ইঞ্জিন সমস্ত পাটিগণিত ফাংশন স্থায়ীভাবে অচল করে দেয়'
          },
          {
            en: 'TanStack Query will delete the entire operating system clipboard',
            bn: 'TanStack Query অপারেটিং সিস্টেমের পুরো ক্লিপবোর্ড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Structural sharing compares old reference values against new wire payloads.',
          bn: 'স্ট্রাকচারাল শেয়ারিং পুরোনো রেফারেন্সের মানের সাথে নতুন আগত ডেটার তুলনা করে।'
        },
        explanation: {
          en: 'If you mutate the cached object, oldData and newData both reflect the mutation. The diff algorithm concludes nothing changed and reuses the corrupted reference, skipping necessary UI updates.',
          bn: 'ক্যাশ অবজেক্ট সরাসরি পরিবর্তন করলে পুরোনো ও নতুন উভয় ডেটাতেই পরিবর্তন প্রতিফলিত হয়। ফলে ডিভ অ্যালগরিদম কিছুই বদলায়নি ভেবে পুরোনো রেফারেন্স রেখে দেয় এবং ইউআই আর আপডেট হয় না।'
        }
      },
      {
        id: 'q-select-structural-sharing-chain',
        kind: 'mcq',
        topic: 'Structural sharing on selector outputs',
        question: {
          en: 'Does TanStack Query apply structural sharing to the value returned by the select function?',
          bn: 'TanStack Query কি select ফাংশন থেকে ফেরত আসা আউটপুটের ওপরও স্ট্রাকচারাল শেয়ারিং প্রয়োগ করে?'
        },
        options: [
          {
            en: 'Yes, TanStack Query runs structural sharing on the transformed selector output, ensuring unchanged slices retain identical references',
            bn: 'হ্যাঁ, TanStack Query রূপান্তরিত সিলেক্টর আউটপুটেও স্ট্রাকচারাল শেয়ারিং চালায়, যাতে অপরিবর্তিত স্লাইস একই রেফারেন্স ধরে রাখতে পারে'
          },
          {
            en: 'No, structural sharing only applies to raw queryFn network responses',
            bn: 'না, স্ট্রাকচারাল শেয়ারিং কেবল সরাসরি queryFn থেকে আসা নেটওয়ার্ক রেসপন্সে চলে'
          },
          {
            en: 'Only if the selector output is a floating point number',
            bn: 'কেবল তখনই যদি সিলেক্টর আউটপুট একটি ফ্লোটিং পয়েন্ট সংখ্যা হয়'
          },
          {
            en: 'Only when running inside React Native applications',
            bn: 'কেবলমাত্র রিঅ্যাক্ট নেটিভ অ্যাপ্লিকেশনে চালানোর সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'TanStack Query optimizes both the raw cache and the derived subscription layer.',
          bn: 'TanStack Query মূল ক্যাশ এবং উদ্ভূত সাবস্ক্রিপশন স্তর উভয় জায়গাতেই অপ্টিমাইজেশন চালায়।'
        },
        explanation: {
          en: 'TanStack Query structures both the cache and observer results. Even if a selector derives a new object, structural sharing verifies if the contents match the previous derivation before notifying the component.',
          bn: 'TanStack Query ক্যাশ এবং অবজারভার উভয় ফলাফলেই স্ট্রাকচারাল শেয়ারিং চালায়। সিলেক্টর নতুন অবজেক্ট বানালেও ভেতরের মান একই থাকলে আগের রেফারেন্স রেখে কম্পোনেন্টকে অযথা রি-রেন্ডার থেকে রক্ষা করে।'
        }
      },
      {
        id: 'q-tracked-reactivity-proxy',
        kind: 'mcq',
        topic: 'Proxy-based property tracking mechanism',
        question: {
          en: 'How does TanStack Query track which properties are accessed by a component under notifyOnChangeProps: "auto"?',
          bn: 'notifyOnChangeProps: "auto" অবস্থায় একটি কম্পোনেন্ট কোন কোন প্রপার্টি ব্যবহার করেছে তা TanStack Query কীভাবে ট্র্যাক করে?'
        },
        options: [
          {
            en: 'It uses JavaScript Object.defineProperties or Proxy getters on the returned result object during the render pass',
            bn: 'রেন্ডারের সময় এটি রিটার্ন করা রেজাল্ট অবজেক্টের ওপর জাভাস্ক্রিপ্ট Object.defineProperties বা Proxy গেটার ব্যবহার করে'
          },
          {
            en: 'It parses component source code using regular expressions in the browser',
            bn: 'এটি ব্রাউজারে রেগুলার এক্সপ্রেশন দিয়ে কম্পোনেন্টের সোর্স কোড বিশ্লেষণ করে'
          },
          {
            en: 'It asks the backend API server to log which fields the user clicked',
            bn: 'এটি ব্যাকএন্ড এপিআই সার্ভারকে ব্যবহারকারীর ক্লিক করা ফিল্ডগুলো লগ করতে বলে'
          },
          {
            en: 'It uses the HTML5 Geolocation API to estimate rendering intent',
            bn: 'এটি রেন্ডারিংয়ের উদ্দেশ্য অনুমান করতে এইচটিএমএল৫ জিওলোকেশন এপিআই ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about runtime property access interceptors in modern JavaScript.',
          bn: 'আধুনিক জাভাস্ক্রিপ্টে রানটাইম প্রপার্টি রিড ইন্টারসেপ্ট করার ব্যবস্থার কথা ভাবুন।'
        },
        explanation: {
          en: 'TanStack Query wraps the returned query result with getters. When the component accesses result.data, the getter records that data is tracked for that component observer.',
          bn: 'TanStack Query কোয়েরির ফলাফলে গেটার যুক্ত করে। যখন কম্পোনেন্ট result.data পড়ে, তখন গেটারটি সংশ্লিষ্ট কম্পোনেন্টের জন্য data প্রপার্টিকে ট্র্যাকড তালিকায় যুক্ত করে।'
        }
      },
      {
        id: 'q-custom-structural-sharing-function',
        kind: 'mcq',
        topic: 'Custom structural sharing implementation',
        question: {
          en: 'What parameters are passed to a custom structuralSharing function in TanStack Query?',
          bn: 'TanStack Query-তে একটি কাস্টম structuralSharing ফাংশনে কোন প্যারামিটারগুলো পাস করা হয়?'
        },
        options: [
          {
            en: 'The previous cached data (oldData) and the newly fetched data (newData)',
            bn: 'পূর্বের ক্যাশ করা ডেটা (oldData) এবং নতুন ফেচ করা ডেটা (newData)'
          },
          {
            en: 'The HTTP status code and the server IP address',
            bn: 'এইচটিটিপি স্ট্যাটাস কোড এবং সার্ভার আইপি ঠিকানা'
          },
          {
            en: 'The current system timestamp and the user authentication token',
            bn: 'বর্তমান সিস্টেম টাইমস্ট্যাম্প এবং ব্যবহারকারীর অথেনটিকেশন টোকেন'
          },
          {
            en: 'The Git commit hash and the branch name',
            bn: 'গিট কমিট হ্যাশ এবং ব্রাঞ্চের নাম'
          }
        ],
        answer: 0,
        hint: {
          en: 'A diffing function requires both the previous state and the incoming state.',
          bn: 'ডিফারেন্সিং ফাংশনে পূর্ববর্তী স্টেট এবং নতুন স্টেট এই দুটি জিনিসের প্রয়োজন হয়।'
        },
        explanation: {
          en: 'A custom structuralSharing function has the signature (oldData: unknown, newData: unknown) => unknown, giving developers complete control over reference retention.',
          bn: 'কাস্টম structuralSharing ফাংশনের সিগনেচার হলো (oldData: unknown, newData: unknown) => unknown, যা ডেভেলপারদের রেফারেন্স ব্যবস্থাপনায় পূর্ণ স্বাধীনতা দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-offline-depot',
    title: {
      en: 'Offline & Persistence — persistQueryClient, Storage Persisters & Network Modes',
      bn: 'অফলাইন ও পারসিস্টেন্স — persistQueryClient, স্টোরেজ পারসিস্টিং ও নেটওয়ার্ক মোডস'
    }
  }
};
