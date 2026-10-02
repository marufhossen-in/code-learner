import type { Lesson } from '../../../lib/types';

export const stateVaultLesson: Lesson = {
  slug: 'the-state-vault',
  tech: 'react',
  title: {
    en: 'React State Architecture: useReducer, Context & Global Dispatch',
    bn: 'রিঅ্যাক্ট স্টেট আর্কিটেকচার: useReducer, Context ও গ্লোবাল ডিসপ্যাচ'
  },
  summary: {
    en: 'Master enterprise React state management across 10 structured topics, from scaling beyond useState to useReducer transitions. Learn action modeling, Context provider broadcasting, dual state/dispatch splitting, and state tiering architectures.',
    bn: 'useState-এর সীমাবদ্ধতা অতিক্রম থেকে শুরু করে useReducer ট্রানজিশন পর্যন্ত 10 টি বিষয়ে রিঅ্যাক্ট স্টেট আর্কিটেকচার আয়ত্ত করুন। জানুন অ্যাকশন মডেলিং, Context প্রোভাইডার ব্রডকাস্ট, ডুয়াল স্টেট/ডিসপ্যাচ বিভাজন এবং স্টেট টিয়ারিং কৌশল।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-suspense-gallery',
    title: {
      en: 'React Suspense & Transitions: Concurrent Rendering, Lazy & startTransition',
      bn: 'রিঅ্যাক্ট সাসপেন্স ও ট্রানজিশন: কনকারেন্ট রেন্ডারিং, Lazy ও startTransition'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. State Scaling Limits: When useState Multiplies Fragility', bn: '১. স্টেটের পরিধি বৃদ্ধি: একাধিক useState-এর সীমাবদ্ধতা' } },
    {
      type: 'para',
      text: {
        en: 'When a component manages 4 or 5 related pieces of state (e.g. data, isLoading, isError, errorMessage, selectedIndex), updating them requires calling multiple state setter functions (`setState`) in sequence. If one call is forgotten, the component lands in an impossible contradictory state. When state updates are interdependent, useReducer is the professional solution.',
        bn: 'যখন কোনো কম্পোনেন্টে 4 বা 5 টি সম্পর্কিত স্টেট থাকে (যেমন data, isLoading, isError, error), তখন সেগুলোকে আলাদা useState দিয়ে সামলাতে গেলে প্রায়ই কোনো একটি আপডেট করতে ভুলে যাওয়ার ঝুঁকি থাকে। এর ফলে একই সাথে লোডিং ও এরর হওয়ার মতো পরস্পরবিরোধী অবস্থা তৈরি হয়। যখন একাধিক স্টেট একে অপরের ওপর নির্ভরশীল হয়, তখন useReducer ব্যবহার করাই সবচেয়ে পেশাদার সমাধান।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// ❌ Fragile with 3 useState calls:
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// ✅ Consolidated single-state machine representation:
const initialStatus = { status: "idle", data: null, error: null };
console.log("Unified state architecture initialized:", initialStatus.status);
// Output: Unified state architecture initialized: idle`,
      caption: {
        en: 'Multiple interdependent useState variables signal the need to graduate to useReducer.',
        bn: 'পরস্পর নির্ভরশীল একাধিক useState থাকলে useReducer-এ রূপান্তর করা উচিত।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Reducer Paradigm: Pure State Transitions', bn: '২. রিডিউসার দর্শন: খাঁটি স্টেট ট্রানজিশন (state, action)' } },
    {
      type: 'para',
      text: {
        en: 'A Reducer is a Pure Function that accepts the current state and an action object, returning the next state: (state, action) => nextState. It contains zero side effects, makes zero network requests, and never mutates its arguments. Because it is pure JavaScript, it can be tested in isolation outside of React.',
        bn: 'রিডিউসার হলো একটি খাঁটি ফাংশন (Pure Function) যা বর্তমান স্টেট এবং একটি অ্যাকশন অবজেক্ট গ্রহণ করে পরবর্তী নতুন স্টেট ফেরত দেয়: (state, action) => nextState। এর ভেতর কোনো সাইড ইফেক্ট থাকে না, কোনো নেটওয়ার্ক কল করা হয় না এবং এটি মূল আর্গুমেন্টকে কখনো মিউটেট করে না। সম্পূর্ণ আলাদাভাবে রিঅ্যাক্টের বাইরেও এটিকে টেস্ট করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.step };
    case "DECREMENT":
      return { count: state.count - action.step };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

const s1 = counterReducer({ count: 10 }, { type: "INCREMENT", step: 5 });
const s2 = counterReducer(s1, { type: "DECREMENT", step: 2 });
console.log("Reducer state evolution:", s1.count, s2.count); // 15 13`,
      caption: {
        en: 'Reducers calculate the next state purely based on previous state and dispatched intent.',
        bn: 'রিডিউসার পূর্ববর্তী স্টেট এবং অ্যাকশনের ভিত্তিতে সম্পূর্ণ বিশুদ্ধভাবে নতুন স্টেট হিসাব করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Intentional Actions: Modeling Dispatched Events', bn: '৩. অর্থপূর্ণ অ্যাকশন: উদ্দেশ্যমূলক ডিসপ্যাচ ইভেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'Components dispatch Action Objects representing user events, NOT direct state mutations. An action object contains a descriptive type string (e.g. "ITEM_ADDED") and an optional payload. The component says "what happened" (intent); the reducer decides "how state changes" (execution).',
        bn: 'কম্পোনেন্ট সরাসরি স্টেট না বদলে অ্যাকশন অবজেক্ট পাঠিয়ে জানায় কী ঘটেছে। অ্যাকশন অবজেক্টে একটি স্পষ্ট type স্ট্রিং (যেমন "ITEM_ADDED") এবং প্রয়োজনীয় payload থাকে। কম্পোনেন্টের দায়িত্ব শুধু জানানো "কী ঘটনা ঘটেছে"; আর সেই ঘটনার প্রেক্ষিতে স্টেট কীভাবে বদলাবে তা ঠিক করে রিডিউসার।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useReducer } from "react";

function TaskApp() {
  const [tasks, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, { id: action.id, text: action.text }];
      case "REMOVE_TASK":
        return state.filter((t) => t.id !== action.id);
      default:
        return state;
    }
  }, []);

  // Dispatching declarative intent:
  const addTask = (text) => {
    dispatch({ type: "ADD_TASK", id: "t-1", text });
  };

  return { tasks, addTask };
}

const app = TaskApp();
console.log(typeof app.addTask); // "function"`,
      caption: {
        en: 'Dispatching actions decouples user interaction triggers from state update logic.',
        bn: 'অ্যাকশন ডিসপ্যাচ করার ফলে ইন্টারঅ্যাকশন এবং স্টেটের আপডেট লজিক সম্পূর্ণ আলাদা থাকে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Immutable State Updates: Spreading Objects and Arrays', bn: '৪. অপরিবর্তনীয় স্টেট আপডেট: অবজেক্ট ও অ্যারে স্প্রেডিং' } },
    {
      type: 'para',
      text: {
        en: 'Reducers must NEVER mutate existing state (e.g. state.user.name = "Alex" or state.items.push(item)). React checks object identity (Object.is) to trigger re-renders. Modifying existing memory in place prevents React from seeing the change. Always return brand-new object and array references using the spread operator (...).',
        bn: 'রিডিউসারে কখনোই বিদ্যমান স্টেট সরাসরি বদলানো যাবে না (যেমন state.items.push(item))। রিঅ্যাক্ট মেমরি রেফারেন্স (Object.is) মিলিয়ে দেখে যে স্টেট বদলেছে কি না। সরাসরি ভেতরের মান বদলালে রিঅ্যাক্ট পরিবর্তন দেখতেই পায় না। তাই সবসময় স্প্রেড অপারেটর (...) দিয়ে নতুন অবজেক্ট বা অ্যারে বানিয়ে ফেরত দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `const initialState = {
  user: { name: "Tanvir", preferences: { darkTheme: false } },
  notifications: ["Welcome!"]
};

function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      // ✅ Immutable shallow copy at every level of depth:
      return {
        ...state,
        user: {
          ...state.user,
          preferences: {
            ...state.user.preferences,
            darkTheme: !state.user.preferences.darkTheme
          }
        }
      };
    default:
      return state;
  }
}

const updated = settingsReducer(initialState, { type: "TOGGLE_THEME" });
console.log(updated.user.preferences.darkTheme); // true`,
      caption: {
        en: 'The spread operator constructs fresh top-level references so React detects state mutations.',
        bn: 'স্প্রেড অপারেটর নতুন অবজেক্ট রেফারেন্স তৈরি করে যাতে রিঅ্যাক্ট স্টেট পরিবর্তন শনাক্ত করতে পারে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Lazy Initialization: The init Function Argument', bn: '৫. লেজি ইনিশিয়ালাইজেশন: init ফাংশন আর্গুমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'If calculating initial state is computationally expensive (e.g. reading from localStorage or parsing complex JSON), pass a third init function to useReducer: useReducer(reducer, initialArg, init). The init function runs only on mount, preventing expensive calculations on every render.',
        bn: 'যদি প্রারম্ভিক স্টেট তৈরি করতে ভারী কাজের প্রয়োজন হয় (যেমন localStorage থেকে পড়া বা বড় JSON পার্স করা), তবে useReducer-এ তৃতীয় আর্গুমেন্ট হিসেবে init ফাংশন দিতে হয়: useReducer(reducer, initialArg, init)। এই init ফাংশন কেবল মাউন্টের সময় একবার চলে, ফলে অপ্রয়োজনীয় ধীরগতি এড়ানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function initSavedPreferences(defaultKey) {
  // Executed ONLY once when the component mounts:
  console.log("Reading persistent preferences from disk cache");
  return { activeKey: defaultKey, volume: 80 };
}

function preferencesReducer(state, action) {
  if (action.type === "SET_VOLUME") return { ...state, volume: action.level };
  return state;
}

// Simulated lazy useReducer hook setup:
const prefState = initSavedPreferences("user-pref-v1");
console.log("Initial volume:", prefState.volume); // 80`,
      caption: {
        en: 'The init function guarantees expensive setup calculations execute only on component mount.',
        bn: 'init ফাংশন নিশ্চিত করে যে ভারী কনফিগারেশন কাজ কেবল কম্পোনেন্ট মাউন্টের সময়ই চলবে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Prop Drilling Elimination: The React Context API', bn: '৬. প্রপ ড্রিলিং দূরীকরণ: React Context API' } },
    {
      type: 'para',
      text: {
        en: 'Passing props manually through 5 intermediate layers of components that do not need them just to reach a deeply nested child is called Prop Drilling. React Context teleports data directly from a top-level Provider to any descendant component that requests it, eliminating plumbing boilerplate.',
        bn: 'মাঝের 5 টি মধ্যবর্তী স্তরের কম্পোনেন্টের মধ্য দিয়ে জোর করে প্রপস নিচে পাঠানোর ক্লান্তিকর প্রক্রিয়াকে Prop Drilling বলে। React Context ডেটাকে সরাসরি উপরের একটি Provider থেকে ভেতরের যেকোনো চাইল্ড কম্পোনেন্টের কাছে পাঠিয়ে দেয়, ফলে মাঝে মাঝে প্রপস পাস করার কোনো প্রয়োজন হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import React, { createContext, useContext } from "react";

// 1. Create the Context container:
const ThemeContext = createContext("light");

// 2. Deeply nested leaf component accesses context directly:
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={\`btn btn-\${theme}\`}>Theme: {theme}</button>;
}

// 3. Provider broadcast:
const root = (
  <ThemeContext.Provider value="dark">
    <ThemedButton />
  </ThemeContext.Provider>
);

console.log(ThemedButton({}).props.children[1]); // "light" (Default fallback)`,
      caption: {
        en: 'React Context bypasses intermediate components to deliver data directly to consumers.',
        bn: 'React Context মাঝের উপাদানগুলোকে পাশ কাটিয়ে সরাসরি গ্রাহক কম্পোনেন্টে ডেটা পৌঁছে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The Provider Contract: Broadcasting Subtree State', bn: '৭. প্রোভাইডারের নিয়ম: সাবট্রিতে স্টেট ব্রডকাস্ট করা' } },
    {
      type: 'para',
      text: {
        en: 'The Provider component wraps a subtree and accepts a value prop. Every descendant component calling useContext(MyContext) re-renders whenever the Provider’s value changes. If no Provider is found above the consumer in the tree, useContext returns the default value passed to createContext.',
        bn: 'Provider কম্পোনেন্ট পুরো সাবট্রিকে ঘিরে রাখে এবং একটি value প্রপ গ্রহণ করে। এই প্রোভাইডারের ভেতরের যেকোনো উপাদান useContext কল করলে প্রোভাইডারের মান বদলানোর সাথে সাথে তারা রি-রেন্ডার হয়। গাছে কোনো প্রোভাইডার না থাকলে createContext-এর ডিফল্ট মান ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Provider broadcasting session data:
function AuthProvider({ user, children }) {
  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user) }}>
      {children}
    </AuthContext.Provider>
  );
}

console.log("AuthProvider configured with value broadcast capabilities");
// Output: AuthProvider configured with value broadcast capabilities`,
      caption: {
        en: 'Context.Provider updates trigger re-renders only in components that subscribe via useContext.',
        bn: 'Context.Provider-এর মান বদলালে কেবল useContext ব্যবহারকারী উপাদানগুলোই রি-রেন্ডার হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Dual Context Architecture: Splitting State from Dispatch', bn: '৮. ডুয়াল কনটেক্সট আর্কিটেকচার: স্টেট ও ডিসপ্যাচ আলাদা করা' } },
    {
      type: 'para',
      text: {
        en: 'A classic performance mistake is putting both state and dispatch into a single context: <Context.Provider value={{ state, dispatch }}>. Because state changes frequently, every component that only needs dispatch (like a static Save button) is forced to re-render! Splitting into StateContext and DispatchContext prevents wasted re-renders.',
        bn: 'একটি প্রচলিত পারফরম্যান্স ভুল হলো স্টেট এবং ডিসপ্যাচকে একসাথে একই কনটেক্সটে রাখা: <Context.Provider value={{ state, dispatch }}>। এতে স্টেট পাল্টালেই যেসব কম্পোনেন্টের শুধু dispatch দরকার (যেমন একটি সেভ বাটন) তারাও অনর্থক রি-রেন্ডার হয়! StateContext এবং DispatchContext আলাদা রাখলে এই অপচয় চিরতরে বন্ধ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { createContext } from "react";

// Split into two specialized channels:
const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

console.log("Dual Context: Dispatch reference is 100% stable across all renders");
// Output: Dual Context: Dispatch reference is 100% stable across all renders`,
      caption: {
        en: 'Splitting state and dispatch channels isolates re-renders to components reading state.',
        bn: 'স্টেট ও ডিসপ্যাচ চ্যানেল আলাদা রাখলে বোতামের মতো উপাদানগুলো অনর্থক রি-রেন্ডার থেকে বাঁচে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Custom Hook Guards: Encapsulating Context Subscriptions', bn: '৯. কাস্টম হুক গার্ড: কনটেক্সট সাবস্ক্রিপশন সুরক্ষিত করা' } },
    {
      type: 'para',
      text: {
        en: 'Never export raw Context objects directly. Instead, export custom consumer hooks (e.g. useCartState() and useCartDispatch()). The custom hook checks whether the context is null; if called outside its Provider, it throws an immediate helpful error, preventing silent runtime undefined crashes.',
        bn: 'সরাসরি raw Context অবজেক্ট এক্সপোর্ট না করে কাস্টম হুক (যেমন useCartState() ও useCartDispatch()) এক্সপোর্ট করুন। এই কাস্টম হুক যাচাই করে প্রোভাইডার আছে কি না; প্রোভাইডারের বাইরে এটি কল করা হলে তাৎক্ষণিক সহায়ক এরর থ্রো করে বিভ্রান্তি দূর করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function useCart() {
  const context = useContext(CartStateContext);
  if (context === null) {
    throw new Error("useCart must be executed inside a CartProvider tree!");
  }
  return context;
}

console.log(typeof useCart); // "function"`,
      caption: {
        en: 'Custom context hooks enforce structural usage rules with clear developer errors.',
        bn: 'কাস্টম কনটেক্সট হুক ডেভেলপারকে সঠিক প্রোভাইডার ব্যবহারের নিয়ম কঠোরভাবে জানিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Architectural Boundaries: Local vs Global vs Server State', bn: '১০. স্থাপত্যের সীমানা: লোকাল বনাম গ্লোবাল বনাম সার্ভার স্টেট' } },
    {
      type: 'para',
      text: {
        en: 'Do not put everything in global Context. Structure application state across 3 distinct tiers. First, Local State (useState) handles UI toggles, open dropdowns, and form inputs. Second, Global Client State (Context + useReducer) coordinates themes, user sessions, and cart items. Third, Server Cache State (TanStack Query) handles remote API queries and background refetching.',
        bn: 'সবকিছু অন্ধের মতো গ্লোবাল কনটেক্সটে রাখবেন না। স্টেটকে 3 টি নির্দিষ্ট স্তরে ভাগ করুন। প্রথমত, Local State (useState) ড্রপডাউন খোলা/বন্ধ ও একক ফর্ম ইনপুট নিয়ন্ত্রণ করে। দ্বিতীয়ত, Global Client State (Context + useReducer) থিম, সেশন ও কার্ট ডেটা সমন্বয় করে। তৃতীয়ত, Server Cache State (TanStack Query) রিমোট সার্ভার ক্যাশ ও ব্যাকগ্রাউন্ড রিফেচ পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// The Three Tiers of Production React State:
// Tier 1: Local UI State       -> useState(isDropdownOpen)
// Tier 2: Global Client State  -> Context + useReducer(cartItems)
// Tier 3: Server Cache State   -> useQuery(['posts'], fetchPosts)

console.log("3-Tier State Architecture established cleanly");
// Output: 3-Tier State Architecture established cleanly`,
      caption: {
        en: 'Separating local, global, and server caching state keeps applications scalable.',
        bn: 'লোকাল, গ্লোবাল এবং সার্ভার স্টেট আলাদা রাখলে অ্যাপ দীর্ঘমেয়াদে পরিচ্ছন্ন ও দ্রুত থাকে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-sta-ex1',
      kind: 'predict',
      topic: 'react: useReducer function contract',
      question: {
        en: 'In React useReducer, what are the two arguments passed into the reducer function?',
        bn: 'রিঅ্যাক্ট useReducer-এ রিডিউসার ফাংশনটিতে কোন দুটি আর্গুমেন্ট পাস করা হয়?'
      },
      code: `/* Standard reducer function parameters */
/* function reducer(_____, action) { return nextState; } */`,
      answer: 'state',
      accept: ['state', 'prevState', 'current state'],
      hint: {
        en: 'The current state.',
        bn: 'বর্তমান স্টেট।'
      },
      explanation: {
        en: 'A reducer function always takes (state, action) and returns the calculated nextState without mutating the original state.',
        bn: 'রিডিউসার ফাংশন সবসময় (state, action) গ্রহণ করে এবং কোনো পরিবর্তন ছাড়াই নতুন স্টেট ফেরত দেয়।'
      }
    },
    {
      id: 'rea-sta-ex2',
      kind: 'mcq',
      topic: 'react: dual context architecture',
      question: {
        en: 'Why do production React architectures split state and dispatch into two separate Context Providers?',
        bn: 'প্রোডাকশন রিঅ্যাক্ট আর্কিটেকচারে স্টেট এবং ডিসপ্যাচকে দুটি আলাদা কনটেক্সট প্রোভাইডারে কেন ভাগ করা হয়?'
      },
      options: [
        { en: 'To prevent components that only need dispatch from re-rendering every time the state changes', bn: 'যাতে যেসব কম্পোনেন্টের কেবল ডিসপ্যাচ দরকার, তারা স্টেট পরিবর্তনের সময় অনর্থক রি-রেন্ডার না হয়' },
        { en: 'Because React forbids having more than 1 variable in a Provider', bn: 'কারণ রিঅ্যাক্ট প্রোভাইডারে 1 টির বেশি মান রাখতে দেয় না' },
        { en: 'It makes Node.js restart automatically', bn: 'Node.js নিজে নিজে রিস্টার্ট করে' },
        { en: 'It reduces HTML file size', bn: 'এইচটিএমএল সাইজ কমায়' }
      ],
      answer: 0,
      hint: {
        en: 'Dispatch reference is stable; state is reactive.',
        bn: 'ডিসপ্যাচ রেফারেন্স অপরিবর্তনীয়; স্টেট পরিবর্তনশীল।'
      },
      explanation: {
        en: 'The dispatch function reference never changes. Splitting contexts ensures buttons that only dispatch actions never re-render when state updates.',
        bn: 'ডিসপ্যাচ ফাংশনের রেফারেন্স কখনো বদলায় না। দুটি আলাদা চ্যানেল রাখলে বোতামের মতো উপাদানগুলো অনর্থক রি-রেন্ডার হওয়া থেকে বাঁচে।'
      }
    },
    {
      id: 'rea-sta-ex3',
      kind: 'mcq',
      topic: 'react: reducer purity requirement',
      question: {
        en: 'What is a fundamental requirement of a Reducer function in useReducer?',
        bn: 'useReducer-এর রিডিউসার ফাংশনের একটি অপরিহার্য মৌলিক বৈশিষ্ট্য কী?'
      },
      options: [
        { en: 'It must be a Pure Function with zero side effects, never mutating its arguments directly', bn: 'এটিকে অবশ্যই কোনো সাইড ইফেক্ট ছাড়া একটি খাঁটি ফাংশন হতে হবে যা আর্গুমেন্টকে কখনো সরাসরি পরিবর্তন করে না' },
        { en: 'It must make an asynchronous fetch request on every action', bn: 'প্রতিটি অ্যাকশনে এটি অ্যাসিনক্রোনাস ফেচ রিকোয়েস্ট পাঠাবে' },
        { en: 'It must be written in TypeScript only', bn: 'শুধু টাইপস্ক্রিপ্টেই লিখতে হবে' },
        { en: 'It must return a DOM element', bn: 'এটি একটি DOM উপাদান রিটার্ন করবে' }
      ],
      answer: 0,
      hint: {
        en: 'Must be pure without mutating arguments.',
        bn: 'কোনো আর্গুমেন্ট মিউটেট না করে খাঁটি হতে হবে।'
      },
      explanation: {
        en: 'Reducers must be pure calculations: given the same state and action, they must return the same new state without mutating the existing state object.',
        bn: 'রিডিউসার সম্পূর্ণ খাঁটি হিসাবের ওপর চলে; পূর্বের স্টেটকে না ছুঁয়ে এটি শুধুমাত্র নতুন অবজেক্ট তৈরি করে ফেরত দেয়।'
      }
    }
  ],
  quiz: {
    id: 'rea-state-quiz',
    title: { en: 'React Complex State & Context Quiz', bn: 'রিঅ্যাক্ট জটিল স্টেট ও কনটেক্সট কুইজ' },
    questions: [
      {
        id: 'rsq1',
        kind: 'mcq',
        topic: 'react: custom hook guard in context',
        question: {
          en: 'What is the purpose of authoring a custom hook like useAuth() to wrap useContext(AuthContext)?',
          bn: 'useContext(AuthContext)-কে মুড়ে useAuth()-এর মতো কাস্টম হুক তৈরির মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To verify the context is not null and throw a descriptive error if invoked outside its matching Provider', bn: 'কনটেক্সট নাল কি না তা পরীক্ষা করা এবং প্রোভাইডারের বাইরে কল করা হলে স্পষ্ট এরর ছুড়ে দেওয়া' },
          { en: 'To encrypt context data with AES-256', bn: 'ডেটা এনক্রিপ্ট করতে' },
          { en: 'To delete context after 1 hour', bn: '1 ঘণ্টা পর মুছে দিতে' },
          { en: 'To render CSS faster', bn: 'সিএসএস দ্রুত রেন্ডার করতে' }
        ],
        answer: 0,
        hint: {
          en: 'Throws an error if context is null outside Provider.',
          bn: 'প্রোভাইডারের বাইরে নাল পেলে এরর থ্রো করে।'
        },
        explanation: {
          en: 'The custom hook guard ensures callers are properly nested inside the Provider, preventing silent undefined crashes.',
          bn: 'কাস্টম হুক গার্ড নিশ্চিত করে যে কম্পোনেন্টটি প্রোভাইডারের ভেতরেই আছে, ফলে নীরব ক্র্যাশ হওয়ার সুযোগ থাকে না।'
        }
      },
      {
        id: 'rsq2',
        kind: 'mcq',
        topic: 'react: state tiering',
        question: {
          en: 'Which state tier is best suited for an ephemeral UI modal toggle (isOpen)?',
          bn: 'ক্ষণস্থায়ী UI মডাল খোলা বা বন্ধের টগলের জন্য কোন স্টেট স্তরটি সবচেয়ে উপযুক্ত?'
        },
        options: [
          { en: 'Local Component State (useState)', bn: 'লোকাল কম্পোনেন্ট স্টেট (useState)' },
          { en: 'Global Redux Store', bn: 'গ্লোবাল রিডাক্স স্টোর' },
          { en: 'Server Database Table', bn: 'সার্ভার ডেটাবেস টেবিল' },
          { en: 'Browser Cookie', bn: 'ব্রাউজার কুকি' }
        ],
        answer: 0,
        hint: {
          en: 'Simple ephemeral UI state belongs locally.',
          bn: 'সহজ ক্ষণস্থায়ী UI স্টেট লোকালেই রাখা ভালো।'
        },
        explanation: {
          en: 'UI-specific temporary state like a modal toggle should live locally inside the owning component using useState to avoid unnecessary global re-renders.',
          bn: 'মডাল টগলের মতো ক্ষণস্থায়ী কাজগুলো কম্পোনেন্টের ভেতরেই useState দিয়ে রাখা উচিত যাতে পুরো অ্যাপে অনর্থক রি-রেন্ডার না ছড়ায়।'
        }
      },
      {
        id: 'rsq3',
        kind: 'mcq',
        topic: 'react: splitting state and dispatch in Context',
        question: {
          en: 'Why do production architectures split State and Dispatch into two separate Context Providers?',
          bn: 'প্রোডাকশন আর্কিটেকচারে State এবং Dispatch কে দুটি আলাদা Context প্রোভাইডারে কেন ভাগ করা হয়?'
        },
        options: [
          { en: 'To allow components that only trigger actions to avoid re-rendering whenever state values change', bn: 'যাতে যেসব কম্পোনেন্ট কেবল অ্যাকশন ডিসপ্যাচ করে, তারা স্টেট মান পরিবর্তনের সময় অনর্থক রি-রেন্ডার না হয়' },
          { en: 'Because React forbids multiple variables in a Provider', bn: 'কারণ রিঅ্যাক্ট প্রোভাইডারে একাধিক মান রাখতে দেয় না' },
          { en: 'To compress context state on disk', bn: 'ডিস্কে স্টেট কম্প্রেস করতে' },
          { en: 'To make Node.js restart automatically', bn: 'Node.js স্বয়ংক্রিয় রিস্টার্ট করাতে' }
        ],
        answer: 0,
        hint: {
          en: 'Components that only dispatch do not care about reading state.',
          bn: 'যেসব কম্পোনেন্ট শুধু ডিসপ্যাচ করে তাদের স্টেট পড়ার প্রয়োজন হয় না।'
        },
        explanation: {
          en: 'Splitting state and dispatch means subscriber components only re-render when the specific context they consume changes. Dispatch functions are stable and never trigger renders.',
          bn: 'স্টেট ও ডিসপ্যাচ আলাদা করলে ডিসপ্যাচ গ্রাহক কম্পোনেন্টগুলো স্টেটের পরিবর্তনের সময় অনর্থক কাঁপাকাঁপি বা রেন্ডার এড়িয়ে চলতে পারে।'
        }
      },
      {
        id: 'rsq4',
        kind: 'mcq',
        topic: 'react: useReducer pure state transitions',
        question: {
          en: 'What is the fundamental rule for reducer functions passed to useReducer(reducer, initial)?',
          bn: 'useReducer(reducer, initial)-এ পাঠানো রিডিউসার ফাংশনের মৌলিক নিয়ম কী?'
        },
        options: [
          { en: 'The reducer must be a pure function that calculates and returns next state without mutating the previous state object in-place', bn: 'রিডিউসারকে অবশ্যই একটি খাঁটি ফাংশন হতে হবে যা আগের স্টেট অবজেক্টকে পরিবর্তন না করে নতুন স্টেট অবজেক্ট হিসাব করে ফেরত দেয়' },
          { en: 'The reducer must mutate state directly for speed', bn: 'গতির জন্য সরাসরি স্টেট মিউটেট করতে হবে' },
          { en: 'The reducer must perform HTTP fetch calls', bn: 'রিডিউসারে অবশ্যই এপিআই কল করতে হবে' },
          { en: 'The reducer must touch the DOM tree', bn: 'রিডিউসার সরাসরি DOM স্পর্শ করবে' }
        ],
        answer: 0,
        hint: {
          en: 'Pure function: (state, action) => newState.',
          bn: 'খাঁটি ফাংশন: (state, action) => newState।'
        },
        explanation: {
          en: 'Reducers must remain pure: given identical state and action inputs, they compute the next state predictably without side effects or mutations.',
          bn: 'রিডিউসার ফাংশন সর্বদা খাঁটি হতে হয়: কোনো সাইড ইফেক্ট বা সরাসরি অবজেক্ট মিউটেশন ছাড়া এটি বিশুদ্ধভাবে পরবর্তী স্টেট ফেরত দেয়।'
        }
      }
    ]
  }
};
