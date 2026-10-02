import type { Lesson } from '../../../lib/types';

export const frameworkBondLesson: Lesson = {
  slug: 'the-framework-bond',
  tech: 'typescript',
  title: {
    en: 'TypeScript with React: Typed Props, Hooks, Events & Context',
    bn: 'রিঅ্যাক্টে টাইপস্ক্রিপ্ট: টাইপকৃত Props, Hooks, Events ও Context'
  },
  summary: {
    en: 'Master React development with TypeScript across 10 structured topics. Learn explicit component props interfaces, child components with ReactNode, and nullable useState hooks. Explore DOM vs mutable useRef references, useReducer action machines, synthetic event handlers, context providers, ComponentPropsWithRef, generic components, and memoized hooks.',
    bn: '১০টি সুসংগঠিত পয়েন্টে টাইপস্ক্রিপ্ট দিয়ে রিঅ্যাক্ট ডেভেলপমেন্ট আয়ত্ত করুন। স্পষ্ট কম্পোনেন্ট প্রপস ইন্টারফেস, ReactNode দিয়ে চিলড্রেন এবং নাল useState হুক শিখুন। DOM বনাম মিউটেবল useRef রেফারেন্স, useReducer অ্যাকশন মেশিন, সিন্থেটিক ইভেন্ট হ্যান্ডলার, কনটেক্সট প্রোভাইডার, ComponentPropsWithRef, জেনেরিক কম্পোনেন্ট এবং মেমোইজড হুক আয়ত্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-migration-ladder',
    title: {
      en: 'TypeScript Migration & Tooling: Migrating JS, JSDoc & Strict Escalation',
      bn: 'টাইপস্ক্রিপ্ট মাইগ্রেশন ও টুলিং: JS মাইগ্রেশন, JSDoc ও স্ট্রিক্ট স্কেলেশন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Typing Components: Explicit Props Interfaces vs React.FC', bn: '১. কম্পোনেন্ট টাইপিং: স্পষ্ট Props ইন্টারফেস বনাম React.FC' } },
    {
      type: 'para',
      text: {
        en: 'In modern React, the industry standard is to type component props using an explicit interface or type alias directly in the function argument destructuring. The legacy React.FC (or FunctionComponent) wrapper is widely discouraged because it previously injected implicit children and breaks generic parameters.',
        bn: 'আধুনিক রিঅ্যাক্টে সরাসরি ফাংশন আর্গুমেন্টে ইন্টারফেস বা টাইপ অ্যালিয়াসের সাহায্যে প্রপস টাইপ করাই সর্বোত্তম নিয়ম। পুরনো React.FC (বা FunctionComponent) ব্যবহার নিরুৎসাহিত করা হয় কারণ এটি আগে গোপনে অপ্রয়োজনীয় children ঢুকিয়ে দিত এবং জেনেরিক কম্পোনেন্ট তৈরিতে জটিলতা তৈরি করত।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'TypeScript in React Architecture',
        bn: 'রিঅ্যাক্ট ও টাইপস্ক্রিপ্ট স্থাপত্য'
      },
      caption: {
        en: 'Strict interfaces guard props, hooks maintain predictable state, and synthetic events protect UI handlers.',
        bn: 'কঠোর ইন্টারফেস প্রপস রক্ষা করে, হুক ভবিষ্যৎ স্টেট নিশ্চিত করে এবং সিন্থেটিক ইভেন্ট হ্যান্ডলারকে সুরক্ষিত রাখে।'
      },
      svg: `<svg viewBox="0 0 680 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="160" rx="10" fill="#0f172a"/>
  <rect x="25" y="35" width="180" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="115" y="65" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold" font-family="monospace">Props Contract</text>
  <text x="115" y="90" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">interface Props</text>
  <text x="115" y="108" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="monospace">children: ReactNode</text>
  <path d="M 215 80 L 250 80" stroke="#64748b" stroke-width="2"/>
  <rect x="255" y="35" width="170" height="90" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
  <text x="340" y="65" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold" font-family="monospace">Typed Hooks</text>
  <text x="340" y="90" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">useState&lt;User | null&gt;</text>
  <text x="340" y="108" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="monospace">useRef&lt;HTMLInput&gt;</text>
  <path d="M 435 80 L 470 80" stroke="#64748b" stroke-width="2"/>
  <rect x="475" y="35" width="180" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="565" y="65" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="monospace">Safe UI Handlers</text>
  <text x="565" y="90" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">MouseEvent&lt;T&gt;</text>
  <text x="565" y="108" text-anchor="middle" fill="#a7f3d0" font-size="11" font-family="monospace">Zero Any Footprint</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import React from "react";

interface ActionButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick: () => void;
}

// ✅ Recommended: Direct props destructuring with interface
export function ActionButton({
  label,
  variant = "primary",
  disabled = false,
  onClick
}: ActionButtonProps) {
  return (
    <button className={\`btn btn-\${variant}\`} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

// Test render invocation:
console.log(typeof ActionButton); // "function"`,
      caption: {
        en: 'Direct parameter destructuring with an interface provides clean, unpolluted component typing.',
        bn: 'ইন্টারফেস দিয়ে সরাসরি আর্গুমেন্ট টাইপ করলে কোড পরিচ্ছন্ন ও ঝামেলামুক্ত থাকে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Typing Children Slots: React.ReactNode vs ReactElement', bn: '২. চিলড্রেন টাইপিং: React.ReactNode বনাম ReactElement' } },
    {
      type: 'para',
      text: {
        en: 'When a component accepts nested JSX, props must declare children. Use React.ReactNode for open slots: it accepts JSX tags, strings, numbers, fragments, portals, and boolean/null conditionals. Use React.ReactElement only when you strictly require a single rendered JSX element.',
        bn: 'যখন কোনো কম্পোনেন্টের ভেতর অন্যান্য নেস্টেড ট্যাগ ঢোকানো হয়, তখন children টাইপ ঘোষণা করতে হয়। উন্মুক্ত স্লটের জন্য React.ReactNode ব্যবহার করুন: এটি যে কোনো JSX ট্যাগ, টেক্সট স্ট্রিং, সংখ্যা বা নাল ভ্যালু গ্রহণ করে। আর আপনি যদি কঠোরভাবে ঠিক একটিমাত্র JSX এলিমেন্ট চান, তবে React.ReactElement ব্যবহার করবেন।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import React from "react";

interface ModalCardProps {
  title: string;
  children: React.ReactNode; // Accepts text, JSX, or fragments
}

export function ModalCard({ title, children }: ModalCardProps) {
  return (
    <div className="modal-card">
      <h3>{title}</h3>
      <div className="modal-body">{children}</div>
    </div>
  );
}

console.log("ModalCard component initialized with ReactNode slot");
// Output: ModalCard component initialized with ReactNode slot`,
      caption: {
        en: 'React.ReactNode is the universal standard type for components accepting children.',
        bn: 'চিলড্রেন প্রপসের জন্য বিশ্বজনীন আদর্শ টাইপ হলো React.ReactNode।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Typing State Hooks: useState and Nullable Initializers', bn: '৩. স্টেট হুক টাইপিং: useState ও নাল ইনিশিয়ালাইজার' } },
    {
      type: 'para',
      text: {
        en: 'For primitive values, TypeScript infers useState types automatically (const [count, setCount] = useState(0)). However, when state starts as null before an API fetch completes, you must provide an explicit generic union parameter: useState<User | null>(null). Without it, TypeScript infers never or null forever.',
        bn: 'সাধারণ মানের ক্ষেত্রে টাইপস্ক্রিপ্ট নিজে থেকেই useState-এর টাইপ অনুমান করে নেয় (যেমন সংখ্যা বা স্ট্রিং)। কিন্তু এপিআই থেকে ডেটা আসার আগে স্টেট যখন শুরুতে null থাকে, তখন স্পষ্ট জেনেরিক ইউনিয়ন টাইপ দেওয়া আবশ্যক: useState<User | null>(null)। তা না দিলে টাইপস্ক্রিপ্ট চিরকালের জন্য স্টেটকে কেবল null ভেবে বসে থাকবে।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import { useState } from "react";

interface AuthenticatedUser {
  id: string;
  username: string;
  token: string;
}

export function UserSession() {
  // Explicit generic type parameter handles initial null:
  const [user, setUser] = useState<AuthenticatedUser | null>(null);

  const loginUser = () => {
    setUser({ id: "u-101", username: "sakib", token: "jwt-token-xyz" });
  };

  return user ? user.username : "Guest Session";
}

console.log(UserSession()); // "Guest Session"`,
      caption: {
        en: 'useState<T | null>(null) enables type-safe transitions from empty to populated state.',
        bn: 'useState<T | null>(null) ফাঁকা অবস্থা থেকে ডেটাপ্রাপ্ত অবস্থায় নিরাপদ উত্তরণ ঘটায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Reference Hooks: DOM Refs vs Mutable Values with useRef', bn: '৪. রেফারেন্স হুক: DOM রেফ বনাম মিউটেবল মান useRef-এ' } },
    {
      type: 'para',
      text: {
        en: 'useRef serves two distinct purposes with different type signatures: 1) DOM Refs: useRef<HTMLInputElement>(null) creates a readonly ref object managed by React (RefObject<T>). 2) Mutable Value Boxes: useRef<number>(0) creates a mutable container (MutableRefObject<T>) for values like interval IDs that persist across renders without causing re-renders.',
        bn: 'useRef দুটি সম্পূর্ণ ভিন্ন উদ্দেশ্যে ব্যবহৃত হয়: ১) DOM Ref: useRef<HTMLInputElement>(null) একটি রিড-অনলি অবজেক্ট দেয় যা ব্রাউজার এলিমেন্ট ধরে রাখে। ২) Mutable Value: useRef<number>(0) এমন একটি কন্টেইনার দেয় যার .current মান পরিবর্তন করলে কোনো রি-রেন্ডার না ঘটিয়ে টাইমার আইডি বা কাউন্টার সংরক্ষণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import { useRef, useEffect } from "react";

export function AutoFocusInput() {
  // 1. DOM Ref: initial null informs React it manages the node
  const inputRef = useRef<HTMLInputElement>(null);

  // 2. Mutable container: persists timer ID across renders
  const renderCountRef = useRef<number>(0);

  useEffect(() => {
    renderCountRef.current += 1;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef.current ? "Active" : "Pending";
}

console.log("AutoFocusInput ref handlers configured");
// Output: AutoFocusInput ref handlers configured`,
      caption: {
        en: 'Supplying null as initial value creates a RefObject for React DOM binding.',
        bn: 'শুরুতে null পাস করলে রিঅ্যাক্ট ডম বাইন্ডিংয়ের জন্য উপযুক্ত RefObject তৈরি হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Complex State: useReducer with Discriminated Action Unions', bn: '৫. জটিল স্টেট: ডিসক্রিমিনেটেড অ্যাকশন সহ useReducer' } },
    {
      type: 'para',
      text: {
        en: 'When component state involves multiple transitions, useReducer pairs with TypeScript Discriminated Unions. Each action variant carries a type literal discriminant, guaranteeing that payloads match the specific action inside switch statements.',
        bn: 'স্টেট যখন জটিল রূপ নেয়, তখন useReducer-এর সাথে ডিসক্রিমিনেটেড ইউনিয়ন ব্যবহার করা সেরা কৌশল। প্রতিটি অ্যাকশন ভ্যারিয়েন্টে একটি নির্দিষ্ট type ট্যাগ থাকে, যা নিশ্চিত করে যে switch কেসের ভেতর প্রতিটি অ্যাকশনের সাথে কেবল সঠিক পেলোডই ব্যবহৃত হবে।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `type CartAction =
  | { type: "ADD_ITEM"; item: { id: string; price: number } }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "CLEAR_CART" };

interface CartState {
  items: { id: string; price: number }[];
  total: number;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.item],
        total: state.total + action.item.price
      };
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((i) => i.id !== action.id),
        total: state.total // In production, recalculate
      };
    case "CLEAR_CART":
      return { items: [], total: 0 };
  }
}

const state = cartReducer({ items: [], total: 0 }, { type: "ADD_ITEM", item: { id: "a1", price: 15 } });
console.log("Cart total:", state.total); // 15`,
      caption: {
        en: 'Discriminated action unions guarantee exhaustive, strictly-typed reducer transitions.',
        bn: 'ডিসক্রিমিনেটেড অ্যাকশন ইউনিয়ন রিডিউসারে শতভাগ নিরাপদ স্টেট পরিবর্তন নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Synthetic Event Contracts: React.MouseEvent & ChangeEvent', bn: '৬. সিন্থেটিক ইভেন্ট চুক্তি: React.MouseEvent ও ChangeEvent' } },
    {
      type: 'para',
      text: {
        en: 'The UI library normalizes browser interactions into synthetic cross-platform event wrappers. Always import handlers from the library namespace rather than relying on DOM globals: MouseEvent<HTMLButtonElement> for clicks, ChangeEvent<HTMLInputElement> for text/checkbox inputs, and FormEvent<HTMLFormElement> for form submissions.',
        bn: 'রিঅ্যাক্ট ব্রাউজারের নেটিভ ইভেন্টগুলোকে সিন্থেটিক ইভেন্ট দিয়ে একীভূত করে। তাই গ্লোবাল উইন্ডো ইভেন্টের বদলে লাইব্রেরি থেকে টাইপ ইমপোর্ট করা উচিত: ক্লিকের জন্য MouseEvent<HTMLButtonElement>, ইনপুটের জন্য ChangeEvent<HTMLInputElement>, এবং ফর্মের জন্য FormEvent<HTMLFormElement>।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import React, { useState } from "react";

export function SearchField() {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target.value is strongly typed as string!
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting search:", query);
  };

  return { query, handleChange, handleSubmit };
}

const controller = SearchField();
console.log(typeof controller.handleChange); // "function"`,
      caption: {
        en: 'React synthetic event types pair with target element generics for precise event properties.',
        bn: 'রিঅ্যাক্ট সিন্থেটিক ইভেন্ট টাইপগুলো টার্গেট উপাদানের সাথে যুক্ত হয়ে নিখুঁত প্রোপার্টি দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Global Context: createContext and Custom Hook Pattern', bn: '৭. গ্লোবাল কনটেক্সট: createContext ও কাস্টম হুক প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'When creating React Context, initialize with null: createContext<ThemeContextType | null>(null). To avoid checking for null inside every consuming component, author a companion custom hook (useTheme) that throws a descriptive error if called outside the Provider, narrowing the return type to non-null.',
        bn: 'React Context তৈরির সময় শুরুতে null দিয়ে শুরু করা হয়: createContext<ThemeContextType | null>(null)। প্রতিটি কম্পোনেন্টে বারবার নাল চেক করার ঝামেলা এড়াতে একটি কাস্টম হুক (useTheme) লেখা হয় যা প্রোভাইডারের বাইরে থাকলে এরর থ্রো করে এবং অন্যথায় নিশ্চিত নাল-মুক্ত টাইপ রিটার্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import React, { createContext, useContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context; // Type is guaranteed ThemeContextType, NOT null!
}

console.log(typeof useTheme); // "function"`,
      caption: {
        en: 'The custom hook guard pattern strips null from React Context consumer callsites.',
        bn: 'কাস্টম হুক গার্ড প্যাটার্ন কনটেক্সট ব্যবহারের জায়গা থেকে নালের শঙ্কা দূর করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Native Attribute Inheritance: ComponentPropsWithRef', bn: '৮. নেটিভ অ্যাট্রিবিউট ইনহেরিটেন্স: ComponentPropsWithRef' } },
    {
      type: 'para',
      text: {
        en: 'When building design system primitives (like a custom Button or Input), you want to support all standard HTML attributes (disabled, aria-label, tabIndex, autoFocus). Extending React.ComponentPropsWithRef<"button"> inherits all native attributes and forward-ref types automatically.',
        bn: 'যখন কোনো ডিজাইন সিস্টেমের জন্য নিজস্ব বাটন বা ইনপুট বানানো হয়, তখন সাধারণ সব এইচটিএমএল প্রোপার্টি (যেমন disabled, aria-label, autoFocus) সাপোর্ট করার প্রয়োজন পড়ে। React.ComponentPropsWithRef<"button"> এক্সটেন্ড করলে এক লাইনেই সমস্ত নেটিভ অ্যাট্রিবিউট ও ফরোয়ার্ড রেফ টাইপ অর্জিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import React from "react";

interface BaseButtonProps extends React.ComponentPropsWithRef<"button"> {
  isBusy?: boolean;
}

export function BaseButton({ isBusy, disabled, children, ...rest }: BaseButtonProps) {
  return (
    <button disabled={disabled || isBusy} {...rest}>
      {isBusy ? "Loading..." : children}
    </button>
  );
}

console.log("BaseButton inherits all HTML button attributes cleanly");
// Output: BaseButton inherits all HTML button attributes cleanly`,
      caption: {
        en: 'ComponentPropsWithRef merges design-system custom props with native HTML element attributes.',
        bn: 'ComponentPropsWithRef কাস্টম প্রপসের সাথে সমস্ত নেটিভ এইচটিএমএল অ্যাট্রিবিউট যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Generic React Components: Dynamic Dropdowns & Lists', bn: '৯. জেনেরিক রিঅ্যাক্ট কম্পোনেন্ট: ডায়নামিক ড্রপডাউন ও তালিকা' } },
    {
      type: 'para',
      text: {
        en: 'Components like Dropdowns, Tables, and Lists should not be locked to a single data model. Adding generic type parameters (<T,>) allows the component to accept an array of any shape and pass each item to renderItem or onSelect with complete type inference.',
        bn: 'ড্রপডাউন বা টেবিলের মতো কম্পোনেন্টগুলোকে কোনো একটি নির্দিষ্ট ডেটা মডেলে সীমাবদ্ধ রাখা উচিত নয়। জেনেরিক প্যারামিটার (<T,>) ব্যবহারের মাধ্যমে কম্পোনেন্টটি যেকোনো মডেলের অ্যারে গ্রহণ করতে পারে এবং অন-সিলেক্ট বা রেন্ডার আইটেমে তার সঠিক টাইপ বজায় রাখতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import React from "react";

interface ListSelectProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSelect: (item: T) => void;
}

// Notice the trailing comma in <T,> for TSX disambiguation:
export function ListSelect<T>({ items, renderItem, onSelect }: ListSelectProps<T>) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} onClick={() => onSelect(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

console.log(typeof ListSelect); // "function"`,
      caption: {
        en: 'Generic components dynamically adapt their contracts to callers’ data models.',
        bn: 'জেনেরিক কম্পোনেন্ট ব্যবহারকারীর পাঠানো ডেটা মডেল অনুযায়ী নিজেকে খাপ খাইয়ে নেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Memoization Invariants: Typing useMemo and useCallback', bn: '১০. মেমোইজেশন নিরাপত্তা: useMemo ও useCallback টাইপিং' } },
    {
      type: 'para',
      text: {
        en: 'In React, useMemo caches expensive calculated values, while useCallback caches function references. TypeScript infers their return signatures automatically based on the factory function return value, guaranteeing that memoized values stay strictly synchronized with component dependencies.',
        bn: 'রিঅ্যাক্টে useMemo ভারী ক্যালকুলেশন ক্যাশ করে এবং useCallback ফাংশনের রেফারেন্স অক্ষত রাখে। টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে রিটার্ন করা মানের ওপর ভিত্তি করে এদের টাইপ অনুমান করে নেয়, যার ফলে মেমোইজ করা ভ্যালু সবসময় নির্ভরযোগ্য ও টাইপ-নিরাপদ থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `import { useMemo, useCallback } from "react";

export function DataProcessor(items: number[]) {
  // Inferred as number:
  const total = useMemo(() => {
    return items.reduce((acc, curr) => acc + curr, 0);
  }, [items]);

  // Inferred as (factor: number) => number:
  const scale = useCallback((factor: number) => {
    return total * factor;
  }, [total]);

  return { total, scale };
}

const res = DataProcessor([10, 20, 30]);
console.log("Calculated scaled total:", res.scale(2)); // 120`,
      caption: {
        en: 'TypeScript accurately tracks memoized return shapes based on pure dependency derivation.',
        bn: 'টাইপস্ক্রিপ্ট ডিপেন্ডেন্সির ওপর ভিত্তি করে মেমোইজ করা রিটার্ন মান নিখুঁতভাবে ট্র্যাক করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'ts-fra-ex1',
      kind: 'predict',
      topic: 'typescript: React children standard type',
      question: {
        en: 'Which universal React type is standard for typing children props that can accept JSX elements, text strings, numbers, or fragments?',
        bn: 'যেসব চিলড্রেন প্রপস JSX ট্যাগ, টেক্সট, সংখ্যা বা ফ্র্যাগমেন্ট গ্রহণ করতে পারে, তাদের জন্য সর্বজনীন স্ট্যান্ডার্ড টাইপ কোনটি?'
      },
      code: `/* Standard children prop definition */
/* interface CardProps { children: React.___________; } */`,
      answer: 'ReactNode',
      accept: ['ReactNode', 'React.ReactNode'],
      hint: {
        en: 'Node in the React virtual DOM tree.',
        bn: 'ভার্চুয়াল ডম ট্রির রিঅ্যাক্ট নোড।'
      },
      explanation: {
        en: 'React.ReactNode represents any renderable React node (JSX, string, number, fragment, portal, or null).',
        bn: 'React.ReactNode রিঅ্যাক্টের যেকোনো রেন্ডারযোগ্য উপাদান (JSX, স্ট্রিং, সংখ্যা বা নাল) ধারণ করতে পারে।'
      }
    },
    {
      id: 'ts-fra-ex2',
      kind: 'mcq',
      topic: 'typescript: synthetic event typing',
      question: {
        en: 'Which React type correctly types an input text field’s onChange event handler?',
        bn: 'একটি ইনপুট টেক্সট ফিল্ডের onChange ইভেন্ট হ্যান্ডলারের জন্য সঠিক রিঅ্যাক্ট টাইপ কোনটি?'
      },
      options: [
        { en: 'React.ChangeEvent<HTMLInputElement>', bn: 'React.ChangeEvent<HTMLInputElement>' },
        { en: 'React.MouseEvent<HTMLButtonElement>', bn: 'React.MouseEvent<HTMLButtonElement>' },
        { en: 'KeyboardEvent', bn: 'KeyboardEvent' },
        { en: 'Event', bn: 'Event' }
      ],
      answer: 0,
      hint: {
        en: 'Change event parameterized with HTMLInputElement.',
        bn: 'HTMLInputElement দিয়ে জেনেরিক করা ChangeEvent।'
      },
      explanation: {
        en: 'React.ChangeEvent<HTMLInputElement> pairs React’s synthetic change event wrapper with the HTMLInputElement DOM subclass.',
        bn: 'React.ChangeEvent<HTMLInputElement> রিঅ্যাক্ট চেঞ্জ ইভেন্টকে নির্দিষ্ট ইনপুট এলিমেন্টের সাথে সংযুক্ত করে সঠিক টাইপ দেয়।'
      }
    },
    {
      id: 'ts-fra-ex3',
      kind: 'mcq',
      topic: 'typescript: ComponentPropsWithRef utility',
      question: {
        en: 'What is the primary benefit of extending React.ComponentPropsWithRef<"button"> on a custom button component?',
        bn: 'কাস্টম বাটন কম্পোনেন্টে React.ComponentPropsWithRef<"button"> এক্সটেন্ড করার প্রধান সুবিধা কী?'
      },
      options: [
        { en: 'It automatically inherits all native HTML button attributes (disabled, onClick, type, aria-*) and forward-ref types', bn: 'এটি স্বয়ংক্রিয়ভাবে সমস্ত নেটিভ এইচটিএমএল বাটন অ্যাট্রিবিউট (disabled, onClick, type) এবং ফরোয়ার্ড রেফ টাইপ উত্তরাধিকার সূত্রে লাভ করে' },
        { en: 'It changes the button color to green', bn: 'বাটনের রং সবুজ করে' },
        { en: 'It eliminates the need for JavaScript', bn: 'জাভাস্ক্রিপ্টের প্রয়োজন মুছে দেয়' },
        { en: 'It creates a database index', bn: 'ডেটাবেস ইনডেক্স তৈরি করে' }
      ],
      answer: 0,
      hint: {
        en: 'Inherits all native button props and ref.',
        bn: 'সব নেটিভ প্রপস ও রেফ উত্তরাধিকার সূত্রে পায়।'
      },
      explanation: {
        en: 'ComponentPropsWithRef allows custom primitives to accept every standard HTML attribute alongside custom design-system props.',
        bn: 'ComponentPropsWithRef কাস্টম বাটনে সমস্ত স্ট্যান্ডার্ড এইচটিএমএল প্রোপার্টি ব্যবহারের সুযোগ নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'ts-framework-quiz',
    title: { en: 'TypeScript with React Quiz', bn: 'রিঅ্যাক্টে টাইপস্ক্রিপ্ট কুইজ' },
    questions: [
      {
        id: 'tfk1',
        kind: 'mcq',
        topic: 'typescript: custom context hook pattern',
        question: {
          en: 'Why is a custom hook (like useTheme) written to wrap useContext(ThemeContext)?',
          bn: 'useContext(ThemeContext)-কে মুড়ে useTheme-এর মতো কাস্টম হুক কেন লেখা হয়?'
        },
        options: [
          { en: 'To check if the context is null, throw a helpful error if used outside a Provider, and narrow the return type to non-null', bn: 'কনটেক্সট নাল কি না তা যাচাই করে প্রোভাইডারের বাইরে থাকলে এরর থ্রো করতে এবং রিটার্ন টাইপ থেকে নাল চিরতরে দূর করতে' },
          { en: 'To make API calls asynchronously', bn: 'অ্যাসিনক্রোনাস কল চালাতে' },
          { en: 'To avoid importing React', bn: 'React ইমপোর্ট না করতে' },
          { en: 'To render CSS faster', bn: 'সিএসএস দ্রুত রেন্ডার করতে' }
        ],
        answer: 0,
        hint: {
          en: 'Narrows away null and checks Provider presence.',
          bn: 'নাল দূর করে এবং প্রোভাইডার চেক করে।'
        },
        explanation: {
          en: 'The custom hook pattern guarantees that callers receive a non-null context object, moving Provider absence checks out of individual components.',
          bn: 'কাস্টম হুক প্যাটার্ন নিশ্চিত করে যে ব্যবহারকারী নিশ্চিতভাবে ভ্যালু পাবেন এবং আলাদাভাবে প্রতিটি ফাইলে নাল চেক করার ঝামেলা থাকে না।'
        }
      },
      {
        id: 'tfk2',
        kind: 'mcq',
        topic: 'typescript: generic component syntax',
        question: {
          en: 'Why is a trailing comma used when defining a generic component in TSX (e.g. <T,>)?',
          bn: 'TSX ফাইলে জেনেরিক কম্পোনেন্ট লেখার সময় <T,>-তে একটি বাড়তি কমা কেন দেওয়া হয়?'
        },
        options: [
          { en: 'To prevent the compiler from mistaking the opening generic bracket <T> for an HTML JSX tag', bn: 'কম্পাইলার যেন জেনেরিক ব্র্যাকেট <T>-কে ভুল করে কোনো এইচটিএমএল বা JSX ট্যাগ না ভেবে ফেলে তা নিশ্চিত করতে' },
          { en: 'It makes the component execute twice', bn: 'কম্পোনেন্ট দুইবার চালায়' },
          { en: 'It converts numbers to strings', bn: 'সংখ্যাকে স্ট্রিংয়ে রূপান্তর করে' },
          { en: 'It is a mandatory rule in JSON', bn: 'জেসনের বাধ্যতামূলক নিয়ম' }
        ],
        answer: 0,
        hint: {
          en: 'Disambiguates JSX tag from generic type parameter.',
          bn: 'JSX ট্যাগ এবং জেনেরিক টাইপের মধ্যে পার্থক্য স্পষ্ট করে।'
        },
        explanation: {
          en: 'In TSX files, <T> looks identical to an opening JSX element; adding a comma (<T,>) tells the parser it is a generic type parameter list.',
          bn: 'TSX ফাইলে <T> দেখতে সাধারণ JSX ট্যাগের মতো মনে হওয়ায় কমা (<T,>) দিয়ে কম্পাইলারকে স্পষ্ট করা হয় যে এটি একটি জেনেরিক টাইপ।'
        }
      },
      {
        id: 'tfk3',
        kind: 'mcq',
        topic: 'typescript: useRef typing differences',
        question: {
          en: 'What is the crucial difference between useRef<HTMLInputElement>(null) and useRef<number>(0)?',
          bn: 'useRef<HTMLInputElement>(null) এবং useRef<number>(0)-এর মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          { en: 'Passing null with an element creates a read-only RefObject managed by React, while an initial value creates a mutable RefObject whose .current you can write to directly', bn: 'এলিমেন্টের সাথে null দিলে রিঅ্যাক্ট পরিচালিত রিডঅনলি RefObject তৈরি হয়, আর সাধারণ মান দিলে একটি মিউটেবল অবজেক্ট তৈরি হয় যার .current সরাসরি পরিবর্তন করা যায়' },
          { en: 'HTMLInputElement creates a cookie while number creates a session', bn: 'HTMLInputElement কুকি বানায় আর number সেশন বানায়' },
          { en: 'There is no difference in TypeScript', bn: 'টাইপস্ক্রিপ্টে কোনো পার্থক্য নেই' },
          { en: 'One runs on the server and the other runs on the client', bn: 'একটি সার্ভারে চলে আর অন্যটি ক্লায়েন্টে চলে' }
        ],
        answer: 0,
        hint: {
          en: 'DOM refs are read-only to user code; values are mutable.',
          bn: 'ডম রেফ রিঅ্যাক্ট পরিচালনা করে বলে রিডঅনলি থাকে।'
        },
        explanation: {
          en: 'useRef with null gives a RefObject where .current is managed by React during rendering, whereas a mutable value creates a container for storing mutable state.',
          bn: 'useRef-এ null দিলে রিঅ্যাক্ট নিজে ডম নোড সংযুক্ত করে, আর মান দিলে তা একটি সাধারণ মিউটেবল ভ্যারিয়েবল হিসেবে কাজ করে।'
        }
      },
      {
        id: 'tfk4',
        kind: 'mcq',
        topic: 'typescript: ReactNode vs JSX.Element',
        question: {
          en: 'Why is ReactNode preferred over JSX.Element as the type for a component’s children prop?',
          bn: 'কম্পোনেন্টের children প্রপসের জন্য JSX.Element-এর চেয়ে ReactNode কেন বেশি উপযোগী?'
        },
        options: [
          { en: 'ReactNode accepts elements, strings, numbers, fragments, arrays, and null/undefined, covering all valid renderable children', bn: 'ReactNode এলিমেন্ট ছাড়াও স্ট্রিং, সংখ্যা, ফ্র্যাগমেন্ট, অ্যারে এবং null/undefined সমর্থন করে, যা রেন্ডারযোগ্য যেকোনো উপাদানের সাথে মানানসই' },
          { en: 'JSX.Element takes up more memory in the browser', bn: 'JSX.Element ব্রাউজারে বেশি মেমরি ব্যবহার করে' },
          { en: 'ReactNode automatically writes unit tests', bn: 'ReactNode স্বয়ংক্রিয় ইউনিট টেস্ট লেখে' },
          { en: 'JSX.Element was deprecated in older versions', bn: 'পুরনো সংস্করণে JSX.Element বাতিল করা হয়েছিল' }
        ],
        answer: 0,
        hint: {
          en: 'ReactNode covers strings, numbers, fragments, and elements.',
          bn: 'ReactNode স্ট্রিং, নাম্বার ও এলিমেন্ট সহ সব সমর্থন করে।'
        },
        explanation: {
          en: 'ReactNode represents any primitive or element React can render. JSX.Element is too restrictive because it rejects plain strings and numbers as children.',
          bn: 'ReactNode সব ধরনের রেন্ডারযোগ্য ডেটা গ্রহণ করে, অথচ JSX.Element কেবল ট্যাগ গ্রহণ করায় সাধারণ স্ট্রিং বা সংখ্যা দিলে এরর দেয়।'
        }
      }
    ]
  }
};
