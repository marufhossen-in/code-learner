import type { Lesson } from '../../../lib/types';

export const domInventoryLesson: Lesson = {
  slug: 'the-dom-inventory',
  tech: 'typescript',
  title: {
    en: 'TypeScript in the Browser: DOM Elements, Events & Type Casting',
    bn: 'ব্রাউজারে টাইপস্ক্রিপ্ট: DOM এলিমেন্ট, ইভেন্টস ও টাইপ কাস্টিং'
  },
  summary: {
    en: 'Master browser DOM programming with TypeScript across 10 structured topics. Learn the EventTarget-to-HTMLElement inheritance ladder, generic querySelector<T>() queries, and null defenses. Explore specific element subclasses, strongly typed DOM events (MouseEvent, KeyboardEvent), target vs currentTarget, event delegation with instanceof, typed HTMLFormElement processing, NodeListOf<T> iteration, and CustomEvent<T> payloads.',
    bn: '১০টি সুসংগঠিত পয়েন্টে টাইপস্ক্রিপ্ট দিয়ে ব্রাউজার DOM হ্যান্ডলিং আয়ত্ত করুন। EventTarget থেকে HTMLElement ইনহেরিটেন্স সিঁড়ি, জেনেরিক querySelector<T>() কোয়েরি এবং নাল গার্ড শিখুন। নির্দিষ্ট এলিমেন্ট সাবক্লাস, কঠোর ইভেন্ট টাইপ (MouseEvent, KeyboardEvent), target বনাম currentTarget, instanceof দিয়ে ইভেন্ট ডেলিগেশন, টাইপকৃত HTMLFormElement প্রসেসিং, NodeListOf<T> লুপ এবং CustomEvent<T> পেলোড আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-networking-guard',
    title: {
      en: 'TypeScript at Network Boundaries: Fetch, Zod Schemas & Unknown Errors',
      bn: 'নেটওয়ার্ক সীমান্তে টাইপস্ক্রিপ্ট: Fetch, Zod স্কিমা ও অজানা ত্রুটি'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Browser Inheritance Ladder: EventTarget to HTMLElement', bn: '১. ব্রাউজার ইনহেরিটেন্স সিঁড়ি: EventTarget থেকে HTMLElement' } },
    {
      type: 'para',
      text: {
        en: 'The Document Object Model (DOM) is a deep class hierarchy in browser environments. At the root sits EventTarget (which handles addEventListener), inherited by Node (which manages tree relationships), inherited by Element (which handles tag attributes), inherited by HTMLElement (which supports style and innerHTML). Specialized elements (such as an input tag) sit at the bottom, owning unique attributes like value and disabled.',
        bn: 'ব্রাউজার পরিবেশে Document Object Model (DOM) একটি সুনির্দিষ্ট ক্লাস হায়ারার্কি মেনে চলে। শীর্ষে থাকে EventTarget (যা addEventListener পরিচালনা করে), তার নিচে Node (যা নোড ট্রির সম্পর্ক দেখে), তার নিচে Element (যা ট্যাগ অ্যাট্রিবিউট পরিচালনা করে) এবং তার নিচে HTMLElement (যা style ও innerHTML দেয়)। বিশেষায়িত এলিমেন্ট (যেমন ইনপুট ট্যাগ) সবার নিচে থাকে, যার নিজস্ব value ও disabled অ্যাট্রিবিউট থাকে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The DOM Class Hierarchy Ladder',
        bn: 'ডম ক্লাস ইনহেরিটেন্সের সিঁড়ি'
      },
      caption: {
        en: 'Every HTML element inherits capabilities progressively from EventTarget down to specific concrete tags.',
        bn: 'প্রতিটি এইচটিএমএল উপাদান EventTarget থেকে শুরু করে নির্দিষ্ট ট্যাগ পর্যন্ত ধারাবাহিকভাবে বৈশিষ্ট্য লাভ করে।'
      },
      svg: `<svg viewBox="0 0 680 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="160" rx="10" fill="#0f172a"/>
  <rect x="20" y="50" width="110" height="60" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="75" y="75" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">EventTarget</text>
  <text x="75" y="95" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">events</text>
  <path d="M 130 80 L 150 80" stroke="#64748b" stroke-width="2"/>
  <rect x="150" y="50" width="100" height="60" rx="6" fill="#1e293b" stroke="#818cf8" stroke-width="1.5"/>
  <text x="200" y="75" text-anchor="middle" fill="#818cf8" font-size="12" font-weight="bold" font-family="monospace">Node</text>
  <text x="200" y="95" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">childNodes</text>
  <path d="M 250 80 L 270 80" stroke="#64748b" stroke-width="2"/>
  <rect x="270" y="50" width="110" height="60" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="325" y="75" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">Element</text>
  <text x="325" y="95" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">attributes</text>
  <path d="M 380 80 L 400 80" stroke="#64748b" stroke-width="2"/>
  <rect x="400" y="50" width="120" height="60" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="460" y="75" text-anchor="middle" fill="#f472b6" font-size="12" font-weight="bold" font-family="monospace">HTMLElement</text>
  <text x="460" y="95" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">style, innerText</text>
  <path d="M 520 80 L 540 80" stroke="#64748b" stroke-width="2"/>
  <rect x="540" y="50" width="120" height="60" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="600" y="75" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace">HTMLInput</text>
  <text x="600" y="95" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">value, checked</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Inheritance Chain in TypeScript DOM:
// EventTarget -> Node -> Element -> HTMLElement -> HTMLInputElement

const input = document.createElement("input");

console.log(input instanceof HTMLElement);   // true
console.log(input instanceof Element);       // true
console.log(input instanceof EventTarget);   // true
console.log(input instanceof HTMLInputElement); // true`,
      caption: {
        en: 'Browser DOM nodes inherit methods and properties through a strict class chain.',
        bn: 'ব্রাউজার ডম নোডগুলো একটি ধারাবাহিক ক্লাস ইনহেরিটেন্সের মাধ্যমে বৈশিষ্ট্য লাভ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Typed Queries: Generic querySelector vs as Assertions', bn: '২. টাইপকৃত কোয়েরি: জেনেরিক querySelector বনাম as কাস্টিং' } },
    {
      type: 'para',
      text: {
        en: 'By default, document.querySelector returns Element | null. However, TypeScript’s lib.dom.d.ts overloads querySelector with a generic parameter: document.querySelector<HTMLInputElement>("#user-email"). This automatically tells the compiler the exact subtype without resorting to risky type casting.',
        bn: 'ডিফল্টভাবে document.querySelector কেবল Element | null রিটার্ন করে। তবে টাইপস্ক্রিপ্টের বিল্ট-ইন ডম লাইব্রেরিতে জেনেরিক সাপোর্ট রয়েছে: document.querySelector<HTMLInputElement>("#user-email")। এর ফলে কোনো বিপজ্জনক টাইপ কাস্টিং ছাড়াই কম্পাইলার রিটার্নকৃত অবজেক্টের আসল সাবক্লাস চিনে ফেলে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// ✅ Preferred: Generic querySelector parameter
const emailInput = document.querySelector<HTMLInputElement>("#user-email");

// Equivalent using type assertion:
const submitBtn = document.querySelector("#submit-btn") as HTMLButtonElement | null;

if (emailInput) {
  // TypeScript knows value exists on HTMLInputElement!
  emailInput.value = "student@codeshikhon.com";
  console.log("Input value set:", emailInput.value);
}`,
      caption: {
        en: 'Supplying generic type arguments to querySelector provides clean subtype inference.',
        bn: 'querySelector-এ জেনেরিক টাইপ আর্গুমেন্ট দিলে নিখুঁত সাবটাইপ অনুমান পাওয়া যায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Defending Against Absence: Null Checks vs Non-Null !', bn: '৩. শূন্যতার বিরুদ্ধে সুরক্ষা: নাল চেক বনাম নন-নাল ! অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'If an element does not exist on the page, querySelector returns null. Using the non-null assertion operator ! (document.querySelector("#btn")!) silences the compiler, but will crash your application at runtime if the element is absent. Always use explicit if checks or early return guards instead.',
        bn: 'যদি পাতায় কোনো এলিমেন্ট খুঁজে না পাওয়া যায়, querySelector মান দেয় null। নন-নাল অপারেটর ! ব্যবহার করলে (যেমন document.querySelector("#btn")!) কম্পাইলার চুপ থাকে বটে, কিন্তু রানটাইমে এলিমেন্ট না পেলে পুরো অ্যাপ ক্র্যাশ করে। তাই অন্ধের মতো ! না দিয়ে সবসময় if চেক দিয়ে নাল গার্ড করা উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// ❌ DANGEROUS: Silences compiler, crashes at runtime if ID is mistyped
// const badBtn = document.querySelector<HTMLButtonElement>("#misspelled-btn")!;
// badBtn.click(); // TypeError: Cannot read properties of null

// ✅ SAFE & PROFESSIONAL: Explicit invariant guard
const banner = document.querySelector<HTMLDivElement>("#promo-banner");
if (!banner) {
  console.warn("Promo banner element not found in DOM");
} else {
  banner.style.display = "block";
  console.log("Promo banner displayed successfully");
}`,
      caption: {
        en: 'Explicit null guards prevent unhandled browser runtime exceptions.',
        bn: 'স্পষ্ট নাল গার্ড ব্রাউজারে অনাকাঙ্ক্ষিত রানটাইম ক্র্যাশ হওয়া থেকে রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Specialized Elements: HTMLInputElement, Button & Image', bn: '৪. বিশেষায়িত এলিমেন্ট: HTMLInputElement, Button ও Image' } },
    {
      type: 'para',
      text: {
        en: 'Each HTML tag maps to a specific interface: <input> is HTMLInputElement (value, checked, disabled); <button> is HTMLButtonElement (disabled, type); <img> is HTMLImageElement (src, naturalWidth, alt); and <a> is HTMLAnchorElement (href, target). Accessing tag-specific properties on generic HTMLElement triggers compile errors.',
        bn: 'প্রতিটি এইচটিএমএল ট্যাগের জন্য আলাদা ইন্টারফেস রয়েছে: <input> হলো HTMLInputElement (value, checked); <button> হলো HTMLButtonElement (disabled); <img> হলো HTMLImageElement (src, naturalWidth); আর <a> হলো HTMLAnchorElement (href)। সাধারণ HTMLElement-এর ওপর এই বিশেষ প্রোপার্টিগুলো পড়তে গেলে কম্পাইলার সাথে সাথে লাল এরর দেখায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `const avatarImg = document.querySelector<HTMLImageElement>("#avatar");
const checkBox = document.querySelector<HTMLInputElement>("#terms-agree");

if (avatarImg && checkBox) {
  avatarImg.src = "/assets/avatar.png";
  avatarImg.alt = "User profile picture";
  checkBox.checked = true;
  console.log("Image source:", avatarImg.src);
  console.log("Checkbox state:", checkBox.checked);
}`,
      caption: {
        en: 'Tag-specific interfaces expose the exact valid properties supported by that DOM element.',
        bn: 'ট্যাগ-নির্দিষ্ট ইন্টারফেসগুলো ওই উপাদানের আসল বৈধ প্রোপার্টি ব্যবহারের সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Strongly Typed DOM Events: MouseEvent & KeyboardEvent', bn: '৫. কঠোর টাইপকৃত ইভেন্ট: MouseEvent ও KeyboardEvent' } },
    {
      type: 'para',
      text: {
        en: 'Never type event handlers with bare Event. Browser events have specialized classes: "click" emits MouseEvent (clientX, clientY, shiftKey); "keydown" emits KeyboardEvent (key, code, altKey); "submit" emits SubmitEvent. In TypeScript, passing the event name to addEventListener automatically infers the correct event parameter.',
        bn: 'ইভেন্ট হ্যান্ডলারে কখনো সাধারণ Event লিখবেন না। ব্রাউজারের প্রতিটি ইভেন্টের সুনির্দিষ্ট ক্লাস রয়েছে: "click" পাঠায় MouseEvent (clientX, clientY); "keydown" পাঠায় KeyboardEvent (key, code); আর "submit" পাঠায় SubmitEvent। টাইপস্ক্রিপ্টে addEventListener-এ ইভেন্টের নাম লিখলেই প্যারামিটারের টাইপ স্বয়ংক্রিয়ভাবে নির্ধারিত হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `const searchBox = document.querySelector<HTMLInputElement>("#search-box");

if (searchBox) {
  // TypeScript automatically types 'e' as KeyboardEvent!
  searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("Initiating search for:", searchBox.value);
    }
  });

  // Explicit typing for extracted handler functions:
  const handleClick = (e: MouseEvent): void => {
    console.log("Click coordinates:", e.clientX, e.clientY);
  };
  searchBox.addEventListener("click", handleClick);
}`,
      caption: {
        en: 'addEventListener automatically infers specific Event types based on the event name string.',
        bn: 'addEventListener ইভেন্টের নামের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সঠিক টাইপ নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Event Target Nuances: e.target vs e.currentTarget', bn: '৬. ইভেন্ট টার্গেটের পার্থক্য: e.target বনাম e.currentTarget' } },
    {
      type: 'para',
      text: {
        en: 'In DOM bubbling, e.target is the innermost element that triggered the event, while e.currentTarget is the element to which the event listener was attached. In TypeScript, e.currentTarget is automatically typed to the listening element, whereas e.target is typed as EventTarget | null.',
        bn: 'ইভেন্ট বাবলিংয়ের সময় e.target হলো সেই উপাদান যার ওপর সরাসরি ক্লিক করা হয়েছে, আর e.currentTarget হলো সেই মূল উপাদান যার সাথে লিসেনারটি যুক্ত ছিল। টাইপস্ক্রিপ্টে e.currentTarget স্বয়ংক্রিয়ভাবে লিসেনারের আসল টাইপ পায়, কিন্তু e.target কেবল সাধারণ EventTarget | null টাইপ পায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `const container = document.querySelector<HTMLDivElement>("#card-container");

if (container) {
  container.addEventListener("click", (e) => {
    // e.currentTarget is known to be HTMLDivElement!
    console.log("Attached to div id:", e.currentTarget.id);

    // e.target is EventTarget | null; narrow it before using element APIs:
    if (e.target instanceof HTMLElement) {
      console.log("Clicked tag:", e.target.tagName);
    }
  });
}`,
      caption: {
        en: 'e.currentTarget is statically typed to the host element; e.target requires narrowing.',
        bn: 'e.currentTarget হোস্ট এলিমেন্টের টাইপ সরাসরি ধারণ করে; e.target ন্যারো করতে হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Event Delegation & Narrowing: The instanceof Guard', bn: '৭. ইভেন্ট ডেলিগেশন ও ন্যারোয়িং: instanceof গার্ড' } },
    {
      type: 'para',
      text: {
        en: 'Event Delegation attaches a single listener to a parent container to manage dozens of dynamic child buttons. Because e.target can be any nested element (like an <i> icon inside a button), checking e.target instanceof HTMLButtonElement safely narrows the type and confirms the clicked element.',
        bn: 'ইভেন্ট ডেলিগেশনে অভিভাবক উপাদানের সাথে একটিমাত্র লিসেনার লাগিয়ে ভেতরের অনেকগুলো চাইল্ড এলিমেন্ট পরিচালনা করা হয়। যেহেতু e.target যেকোনো ভেতরের উপাদান (যেমন আইকন) হতে পারে, তাই e.target instanceof HTMLButtonElement দিয়ে চেক করলে টাইপটি নিখুঁতভাবে বাটন এলিমেন্টে রূপান্তরিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `const userList = document.querySelector<HTMLUListElement>("#user-list");

if (userList) {
  userList.addEventListener("click", (e) => {
    // Narrow event target:
    if (e.target instanceof HTMLButtonElement) {
      const userId = e.target.dataset.userId;
      console.log("Deleting user ID:", userId);
    }
  });
}`,
      caption: {
        en: 'The instanceof operator functions as a runtime check and static type guard simultaneously.',
        bn: 'instanceof একই সাথে রানটাইম ভ্যালিডেশন এবং কম্পাইল-টাইম টাইপ গার্ড হিসেবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Form Processing: Typing Form Submissions & Controls', bn: '৮. ফর্ম প্রসেসিং: ফর্ম সাবমিশন ও কন্ট্রোলের টাইপিং' } },
    {
      type: 'para',
      text: {
        en: 'When handling form submissions with event.preventDefault(), e.currentTarget is the HTMLFormElement. You can wrap it in FormData to extract strongly typed inputs without querying individual DOM nodes.',
        bn: 'যখন event.preventDefault() দিয়ে ফর্ম সাবমিট হ্যান্ডল করা হয়, তখন e.currentTarget হয় HTMLFormElement। আলাদাভাবে প্রতিটি ইনপুট কুয়েরি না করে ফর্ম অবজেক্টটিকে সরাসরি FormData-তে ঢুকিয়ে সহজে সমস্ত ডেটা বের করে নেওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `const form = document.querySelector<HTMLFormElement>("#registration-form");

if (form) {
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault(); // Stop full-page navigation
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = String(formData.get("email") ?? "");
    const role = String(formData.get("role") ?? "member");

    console.log("Submitting credentials:", { email, role });
  });
}`,
      caption: {
        en: 'FormData pairs with SubmitEvent to safely extract input payloads.',
        bn: 'SubmitEvent ও FormData একসাথে ব্যবহারের মাধ্যমে ফর্মের ডেটা নিরাপদে সংগ্রহ করা হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Iterating Elements: Typing NodeListOf<T> & Collections', bn: '৯. এলিমেন্টে লুপ চালানো: NodeListOf<T> ও কালেকশনস' } },
    {
      type: 'para',
      text: {
        en: 'document.querySelectorAll returns a NodeListOf<Element>. Passing a generic parameter (document.querySelectorAll<HTMLButtonElement>(".action-btn")) yields NodeListOf<HTMLButtonElement>. You can iterate directly using .forEach() or spread it with Array.from() to gain array methods like .map() and .filter().',
        bn: 'document.querySelectorAll মূলত NodeListOf<Element> ফেরত দেয়। জেনেরিক প্যারামিটার দিলে (যেমন document.querySelectorAll<HTMLButtonElement>(".action-btn")) এটি NodeListOf<HTMLButtonElement> প্রদান করে। সরাসরি .forEach() দিয়ে এতে লুপ চালানো যায় অথবা Array.from() দিয়ে সাধারণ অ্যারে বানিয়ে .map() ও .filter() চালানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Querying all active buttons on the page:
const buttons = document.querySelectorAll<HTMLButtonElement>("button.save-btn");

// Direct forEach iteration:
buttons.forEach((btn, index) => {
  btn.disabled = false;
  console.log(\`Button \${index + 1} enabled: \${btn.textContent}\`);
});

// Convert to standard Array for functional transformations:
const buttonTexts = Array.from(buttons).map((btn) => btn.textContent ?? "");
console.log("Total buttons gathered:", buttonTexts.length);`,
      caption: {
        en: 'querySelectorAll supports generic typing for immediate access to subclass properties.',
        bn: 'querySelectorAll জেনেরিক টাইপ সাপোর্ট করায় সহজেই বাটনের নিজস্ব মেথড ব্যবহার করা যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Custom Browser Events: Strongly Typed CustomEvent<T>', bn: '১০. কাস্টম ব্রাউজার ইভেন্ট: টাইপকৃত CustomEvent<T>' } },
    {
      type: 'para',
      text: {
        en: 'Modern component systems communicate across the DOM using CustomEvent. In TypeScript, CustomEvent accepts a generic detail payload: new CustomEvent<CartPayload>("item-added", { detail: { itemId: "42", price: 99 } }). The receiving listener inspects event.detail with 100% type safety.',
        bn: 'আধুনিক কম্পোনেন্ট সিস্টেমে DOM-এর মধ্য দিয়ে তথ্য পাঠাতে CustomEvent ব্যবহৃত হয়। টাইপস্ক্রিপ্টে CustomEvent-এর ভেতর জেনেরিক detail পেলোড দেওয়া যায়: new CustomEvent<CartPayload>("item-added", { detail: { itemId: "42", price: 99 } })। রিসিভ করার সময় event.detail ১০০% নিখুঁত টাইপ নিরাপত্তায় পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `interface NotificationDetail {
  message: string;
  level: "info" | "warning" | "error";
  timestamp: number;
}

// 1. Dispatch custom typed event:
const noticeEvent = new CustomEvent<NotificationDetail>("app:notify", {
  detail: {
    message: "Session token refreshed successfully",
    level: "info",
    timestamp: Date.now()
  }
});
window.dispatchEvent(noticeEvent);

// 2. Listen with typed event parameter:
window.addEventListener("app:notify", (e) => {
  const custom = e as CustomEvent<NotificationDetail>;
  console.log("Notification received:", custom.detail.message, custom.detail.level);
});`,
      caption: {
        en: 'CustomEvent<T> provides typed decoupling between decoupled browser components.',
        bn: 'CustomEvent<T> ব্রাউজারের বিভিন্ন কম্পোনেন্টের মধ্যে টাইপ-সুরক্ষিত যোগাযোগ নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'ts-dom-ex1',
      kind: 'predict',
      topic: 'typescript: Generic querySelector parameter',
      question: {
        en: 'Which syntax enables querySelector to return an HTMLInputElement without requiring an "as" type assertion?',
        bn: '"as" দিয়ে টাইপ কাস্ট না করেই querySelector থেকে সরাসরি HTMLInputElement পেতে কোন সিনট্যাক্সটি ব্যবহৃত হয়?'
      },
      code: `/* Generic querySelector call */
/* const el = document.querySelector<__________________>('#email'); */`,
      answer: 'HTMLInputElement',
      accept: ['HTMLInputElement', 'HTMLInputElement type'],
      hint: {
        en: 'The specific input element interface.',
        bn: 'ইনপুট এলিমেন্টের নিজস্ব সুনির্দিষ্ট ইন্টারফেস।'
      },
      explanation: {
        en: 'Passing the type parameter <HTMLInputElement> informs the compiler of the exact subclass being selected, avoiding runtime casting.',
        bn: 'জেনেরিক প্যারামিটারে <HTMLInputElement> লিখে দিলে কম্পাইলার শুরু থেকেই সঠিক সাবক্লাসটি বুঝে নেয়।'
      }
    },
    {
      id: 'ts-dom-ex2',
      kind: 'mcq',
      topic: 'typescript: event delegation narrowing',
      question: {
        en: 'When implementing event delegation, what operator is used to narrow e.target from EventTarget to HTMLButtonElement at runtime?',
        bn: 'ইভেন্ট ডেলিগেশনের সময় e.target-কে EventTarget থেকে HTMLButtonElement-এ ন্যারো করতে কোন অপারেটরটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'instanceof (e.target instanceof HTMLButtonElement)', bn: 'instanceof (e.target instanceof HTMLButtonElement)' },
        { en: 'typeof (typeof e.target === "button")', bn: 'typeof (typeof e.target === "button")' },
        { en: 'in ("button" in e.target)', bn: 'in ("button" in e.target)' },
        { en: 'as HTMLButtonElement', bn: 'as HTMLButtonElement' }
      ],
      answer: 0,
      hint: {
        en: 'instanceof checks prototype classes at runtime.',
        bn: 'instanceof রানটাইমে ক্লাসের প্রোটোটাইপ পরীক্ষা করে।'
      },
      explanation: {
        en: 'The instanceof operator performs a runtime prototype check while simultaneously narrowing the TypeScript type in that block.',
        bn: 'instanceof অপারেটর রানটাইমে অবজেক্ট যাচাই করে এবং একই সাথে টাইপস্ক্রিপ্ট টাইপকেও সেই নির্দিষ্ট ক্লাসে সংকুচিত করে।'
      }
    },
    {
      id: 'ts-dom-ex3',
      kind: 'mcq',
      topic: 'typescript: target vs currentTarget',
      question: {
        en: 'What is the key difference between e.target and e.currentTarget in TypeScript event listeners?',
        bn: 'টাইপস্ক্রিপ্ট ইভেন্ট লিসেনারে e.target এবং e.currentTarget-এর মধ্যে মূল পার্থক্য কী?'
      },
      options: [
        { en: 'e.currentTarget is statically typed to the listening element, while e.target represents the originating element and is typed as EventTarget | null', bn: 'e.currentTarget স্বয়ংক্রিয়ভাবে লিসেনার যুক্ত এলিমেন্টের টাইপ ধারণ করে, আর e.target ক্লিক হওয়া মূল এলিমেন্টকে বোঝায় যা EventTarget | null টাইপের হয়' },
        { en: 'e.target only works on mobile devices', bn: 'e.target শুধু মোবাইলে কাজ করে' },
        { en: 'e.currentTarget deletes the element', bn: 'e.currentTarget উপাদানটি মুছে ফেলে' },
        { en: 'There is no difference', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'currentTarget is the host element.',
        bn: 'currentTarget হলো হোস্ট এলিমেন্ট।'
      },
      explanation: {
        en: 'TypeScript accurately types e.currentTarget based on the element addEventListener was called on, whereas e.target can be any descendant element.',
        bn: 'টাইপস্ক্রিপ্ট e.currentTarget-এর টাইপ নিশ্চিতভাবে জানে, কিন্তু e.target ভেতরের যেকোনো চাইল্ড হতে পারায় তাকে আলাদাভাবে ন্যারো করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'ts-dom-quiz',
    title: { en: 'TypeScript DOM & Events Quiz', bn: 'টাইপস্ক্রিপ্ট DOM ও ইভেন্টস কুইজ' },
    questions: [
      {
        id: 'tdq1',
        kind: 'mcq',
        topic: 'typescript: non-null assertion risk',
        question: {
          en: 'Why is using the non-null assertion operator (!) on querySelector considered dangerous in production code?',
          bn: 'প্রোডাকশন কোডে querySelector-এর পর নন-নাল অপারেটর (!) ব্যবহার করা কেন ঝুঁকিপূর্ণ?'
        },
        options: [
          { en: 'It silences the compiler, leading to fatal "Cannot read properties of null" runtime crashes if the element is missing from the HTML', bn: 'এটি কম্পাইলারকে চুপ করিয়ে দেয়, যার ফলে এইচটিএমএলে এলিমেন্টটি না থাকলে অ্যাপ রানটাইমে ক্র্যাশ করে' },
          { en: 'It makes the browser freeze', bn: 'ব্রাউজার হ্যাং হয়ে যায়' },
          { en: 'It changes HTML tags to SVG', bn: 'ট্যাগগুলো এসভিজি হয়ে যায়' },
          { en: 'It sends telemetry to Microsoft', bn: 'মাইক্রোসফটে ডেটা পাঠায়' }
        ],
        answer: 0,
        hint: {
          en: 'It causes null pointer exceptions.',
          bn: 'এটি নাল পয়েন্টার ক্র্যাশ তৈরি করে।'
        },
        explanation: {
          en: 'The ! operator tells the compiler to trust you that null cannot happen, removing the compiler’s safety guard without providing any runtime protection.',
          bn: '! অপারেটর কম্পাইলারের সতর্কবার্তা বন্ধ করে দেয় কিন্তু রানটাইমে কোনো নিরাপত্তা দেয় না, ফলে উপাদান না থাকলে অ্যাপ্লিকেশন ক্র্যাশ করে।'
        }
      },
      {
        id: 'tdq2',
        kind: 'mcq',
        topic: 'typescript: CustomEvent payload typing',
        question: {
          en: 'How do you define strongly typed payload data on a browser CustomEvent in TypeScript?',
          bn: 'টাইপস্ক্রিপ্টে ব্রাউজার CustomEvent-এ কীভাবে টাইপ-সুরক্ষিত ডেটা পেলোড নির্ধারণ করা হয়?'
        },
        options: [
          { en: 'By supplying a generic type parameter: new CustomEvent<PayloadType>("event-name", { detail: { ... } })', bn: 'জেনেরিক টাইপ প্যারামিটার দিয়ে: new CustomEvent<PayloadType>("event-name", { detail: { ... } })' },
          { en: 'By converting everything to XML', bn: 'সবকিছুকে এক্সএমএলে রূপান্তর করে' },
          { en: 'By storing the data in cookies', bn: 'কুকিতে ডেটা রেখে' },
          { en: 'CustomEvent does not support TypeScript', bn: 'CustomEvent টাইপস্ক্রিপ্টে কাজ করে না' }
        ],
        answer: 0,
        hint: {
          en: 'Use CustomEvent<T>.',
          bn: 'CustomEvent<T> ব্যবহার করুন।'
        },
        explanation: {
          en: 'Passing a generic argument to CustomEvent<T> strictly types the detail property on both dispatch and receive handlers.',
          bn: 'CustomEvent<T>-তে জেনেরিক টাইপ দিলে detail প্রোপার্টির টাইপ ইভেন্ট পাঠানো ও গ্রহণ উভয় ক্ষেত্রেই পুরোপুরি সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'tdq3',
        kind: 'mcq',
        topic: 'typescript: currentTarget vs target precision',
        question: {
          en: 'What is the key difference between e.target and e.currentTarget in TypeScript event listeners?',
          bn: 'টাইপস্ক্রিপ্ট ইভেন্ট লিসেনারে e.target এবং e.currentTarget-এর মধ্যে প্রধান পার্থক্য কী?'
        },
        options: [
          { en: 'currentTarget is strongly typed to the element listening to the event, while target can be any descendant element in the DOM tree', bn: 'currentTarget যে এলিমেন্টে ইভেন্ট যোগ করা হয়েছে তার নির্দিষ্ট টাইপ নিশ্চিত করে, অন্যদিকে target ভেতরের যেকোনো চাইল্ড এলিমেন্ট হতে পারে' },
          { en: 'target is a string while currentTarget is an object', bn: 'target হলো একটি স্ট্রিং আর currentTarget হলো অবজেক্ট' },
          { en: 'currentTarget only exists on keyboard events', bn: 'currentTarget কেবল কিবোর্ড ইভেন্টেই থাকে' },
          { en: 'There is no difference between them in TypeScript', bn: 'টাইপস্ক্রিপ্টে এ দুটির মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'currentTarget is bound to the element owning the handler.',
          bn: 'currentTarget সরাসরি হ্যান্ডলারের মালিকানাধীন এলিমেন্টের সাথে যুক্ত থাকে।'
        },
        explanation: {
          en: 'TypeScript accurately types e.currentTarget as the element the handler was attached to, while e.target represents the actual clicked element which could be an arbitrary child.',
          bn: 'e.currentTarget সবসময় যে উপাদানে লিসেনার লাগানো হয়েছে তার সঠিক টাইপ নির্দেশ করে, আর e.target যেকোনো চাইল্ড এলিমেন্ট নির্দেশ করতে পারে।'
        }
      },
      {
        id: 'tdq4',
        kind: 'mcq',
        topic: 'typescript: querySelector safe element querying',
        question: {
          en: 'Which approach is safest when querying an HTMLInputElement from the document?',
          bn: 'ডকুমেন্ট থেকে একটি HTMLInputElement কোয়েরি করার সময় কোন পদ্ধতিটি সবচেয়ে নিরাপদ?'
        },
        options: [
          { en: 'document.querySelector<HTMLInputElement>("#email") combined with an if guard checking for null', bn: 'document.querySelector<HTMLInputElement>("#email") ব্যবহার করা এবং নাল চেক নিশ্চিত করা' },
          { en: 'document.querySelector("#email")! as any', bn: 'document.querySelector("#email")! as any ব্যবহার করা' },
          { en: 'Casting the document directly to an HTMLInputElement', bn: 'সরাসরি ডকুমেন্টকে HTMLInputElement-এ রূপান্তর করা' },
          { en: 'Assigning the element to a global window variable', bn: 'এলিমেন্টটিকে উইন্ডো অবজেক্টের গ্লোবাল ভেরিয়েবলে রাখা' }
        ],
        answer: 0,
        hint: {
          en: 'Generic query with runtime null check.',
          bn: 'জেনেরিক কোয়েরির সাথে রানটাইম নাল চেক।'
        },
        explanation: {
          en: 'Supplying the generic HTMLInputElement parameter gives compile-time element typing, while an explicit null check ensures the element exists at runtime before access.',
          bn: 'জেনেরিক প্যারামিটার দিলে সঠিক টাইপ পাওয়া যায় এবং if চেক নিশ্চিত করে যে উপাদানটি ব্রাউজারে না থাকলেও কোড ক্র্যাশ করবে না।'
        }
      }
    ]
  }
};
