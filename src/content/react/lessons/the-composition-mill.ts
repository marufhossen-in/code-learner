import type { Lesson } from '../../../lib/types';

export const compositionMillLesson: Lesson = {
  slug: 'the-composition-mill',
  tech: 'react',
  title: {
    en: 'React Component Composition: Compound Components, Slots & HOCs',
    bn: 'রিঅ্যাক্ট কম্পোনেন্ট কম্পোজিশন: কম্পাউন্ড কম্পোনেন্ট, স্লট ও HOC'
  },
  summary: {
    en: 'Master enterprise React component architecture across 10 structured topics, from composition over inheritance to compound component designs. Learn layout slots, props.children shields, custom hook abstraction, and React Router integration.',
    bn: 'ইনহেরিটেন্সের বদলে কম্পোজিশন থেকে শুরু করে কম্পাউন্ড কম্পোনেন্ট ডিজাইন পর্যন্ত 10 টি বিষয়ে রিঅ্যাক্ট আর্কিটেকচার আয়ত্ত করুন। জানুন লেআউট স্লট, props.children রি-রেন্ডার ঢাল, কাস্টম হুক অ্যাবস্ট্রাকশন এবং React Router সংহতি।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-server-foundry',
    title: {
      en: 'React Server Components (RSC): Server Boundaries, Actions & Streaming',
      bn: 'রিঅ্যাক্ট সার্ভার কম্পোনেন্টস (RSC): সার্ভার সীমানা, অ্যাকশন ও স্ট্রিমিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Composition Philosophy: Composition Over Inheritance', bn: '১. কম্পোজিশন দর্শন: ইনহেরিটেন্সের বদলে কম্পোজিশন' } },
    {
      type: 'para',
      text: {
        en: 'In object-oriented programming, classes inherit methods from base classes (e.g. SpecialButton extends Button). In React, code reuse is achieved exclusively through Component Composition: building complex components by combining smaller, self-contained components together via props and children.',
        bn: 'অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ে ক্লাসগুলো মূল ক্লাস থেকে বৈশিষ্ট্য উত্তরাধিকার সূত্রে পায় (যেমন SpecialButton extends Button)। কিন্তু রিঅ্যাক্টে কোড পুনর্ব্যবহার করা হয় কেবল Component Composition-এর মাধ্যমে: ছোট ছোট স্বাধীন উপাদানকে প্রপস এবং চিলড্রেনের সাহায্যে জোড়া লাগিয়ে বড় ও জটিল কম্পোনেন্ট গড়ে তোলা হয়।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Specialization via Composition, NOT class inheritance:
function BaseDialog({ title, message, actionButton }) {
  return (
    <div className="dialog-frame">
      <h3>{title}</h3>
      <p>{message}</p>
      <div className="dialog-actions">{actionButton}</div>
    </div>
  );
}

function DeleteConfirmationDialog({ onConfirm }) {
  // Composes BaseDialog with specialized action button:
  return BaseDialog({
    title: "Delete Account",
    message: "This operation cannot be undone.",
    actionButton: <button onClick={onConfirm} className="danger">Confirm Delete</button>
  });
}

const dlg = DeleteConfirmationDialog({ onConfirm: () => {} });
console.log(dlg.props.children[0].props.children); // "Delete Account"`,
      caption: {
        en: 'React components specialize UI through prop composition rather than class inheritance.',
        bn: 'রিঅ্যাক্ট কম্পোনেন্ট ইনহেরিটেন্সের বদলে প্রপ কম্পোজিশন দিয়ে বৈশিষ্ট্য লাভ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Named Layout Slots: Passing Elements as Props', bn: '২. নামযুক্ত লেআউট স্লট: প্রপস হিসেবে উপাদান পাঠানো' } },
    {
      type: 'para',
      text: {
        en: 'While props.children provides a single default slot, complex page layouts (like dashboards with sidebars, navbars, and action trays) require Multiple Named Slots. Any JSX element can be passed as a regular prop (e.g. leftSlot={<Sidebar />}, rightSlot={<UserMenu />}) for multi-column layouts.',
        bn: 'props.children যেখানে একটিমাত্র সাধারণ স্লট দেয়, ড্যাশবোর্ডের মতো জটিল লেআউটে একাধিক স্লটের প্রয়োজন হয়। যেকোনো JSX উপাদানকে সাধারণ প্রপ হিসেবে পাঠানো যায় (যেমন leftSlot={<Sidebar />}, rightSlot={<UserMenu />}), যার ফলে বহুমুখী লেআউট তৈরি অত্যন্ত সহজ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function AppShell({ topNav, sidebar, content }) {
  return (
    <div className="app-shell">
      <header className="shell-top">{topNav}</header>
      <div className="shell-body">
        <aside className="shell-sidebar">{sidebar}</aside>
        <main className="shell-main">{content}</main>
      </div>
    </div>
  );
}

const shell = AppShell({
  topNav: <span>Header Brand</span>,
  sidebar: <nav>Links</nav>,
  content: <article>Article Text</article>
});

console.log(shell.props.children[0].props.children.props.children); // "Header Brand"`,
      caption: {
        en: 'Passing JSX elements into named props creates flexible, multi-region layout templates.',
        bn: 'নামযুক্ত প্রপসে JSX পাঠালে নমনীয় বহুমুখী লেআউট তৈরি করা সম্ভব হয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Children as a Re-render Shield: Composition Performance', bn: '৩. রি-রেন্ডার প্রতিরোধক হিসেবে Children: কম্পোজিশন দক্ষতা' } },
    {
      type: 'para',
      text: {
        en: 'When a parent component re-renders due to its internal state changing, any child passed into it via props.children DOES NOT re-render! The child was created in the outer scope and its props did not change. This composition trick eliminates the need for premature React.memo optimization.',
        bn: 'কোনো অভিভাবক কম্পোনেন্টের নিজস্ব স্টেট বদলালে তার ভেতর props.children হিসেবে আসা উপাদানটি কিন্তু রি-রেন্ডার হয় না! কারণ চাইল্ডটি বাইরের স্কোপে তৈরি হয়েছিল এবং তার নিজস্ব কোনো প্রপস বদলায়নি। এই কম্পোজিশন কৌশল ব্যবহারের ফলে আগাম React.memo ছাড়াই দুর্দান্ত গতি পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useState } from "react";

// Even if ScrollContainer re-renders 60 times a second on scroll:
function ScrollContainer({ children }) {
  const [scrollY, setScrollY] = useState(0);

  return (
    <div onScroll={(e) => setScrollY(e.currentTarget.scrollTop)}>
      <span>Position: {scrollY}px</span>
      {/* HeavyContent below NEVER re-renders on scroll! */}
      {children}
    </div>
  );
}

console.log("props.children shields nested subtrees from wrapper state changes");
// Output: props.children shields nested subtrees from wrapper state changes`,
      caption: {
        en: 'Nesting elements as children preserves component identity and skips re-renders.',
        bn: 'উপাদানকে children হিসেবে ঢোকালে তা অভিভাবকের স্টেট পরিবর্তনের রি-রেন্ডার থেকে বাঁচে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Compound Components: Implicit Subtree Coordination', bn: '৪. কম্পাউন্ড কম্পোনেন্টস: সাবট্রির অভ্যন্তরীণ সমন্বয়' } },
    {
      type: 'para',
      text: {
        en: 'The Compound Components Pattern allows related components to collaborate implicitly via shared internal context (like <Select><Select.Option /></Select> or HTML <select><option>). Callers gain total control over JSX structure without passing active index props down to every child.',
        bn: 'Compound Components প্যাটার্নে সম্পর্কিত একাধিক উপাদান একটি অভ্যন্তরীণ কনটেক্সটের মাধ্যমে গোপনে পরস্পরের সাথে যোগাযোগ রক্ষা করে (যেমন এইচটিএমএলের <select><option>)। ব্যবহারকারী প্রপস ড্রিলিংয়ের ঝামেলা ছাড়াই নিজের ইচ্ছামতো ট্যাগগুলো সাজানোর পূর্ণ স্বাধীনতা পান।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import React, { createContext, useContext, useState } from "react";

const TabContext = createContext(null);

function Tabs({ defaultTab, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-group">{children}</div>
    </TabContext.Provider>
  );
}

function Tab({ id, label }) {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <button
      className={activeTab === id ? "active" : ""}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );
}

Tabs.Tab = Tab;
console.log(typeof Tabs.Tab); // "function" (Compound sub-component attached)`,
      caption: {
        en: 'Compound components communicate via internal context for clean, expressive caller syntax.',
        bn: 'কম্পাউন্ড কম্পোনেন্টস অভ্যন্তরীণ কনটেক্সট দিয়ে যুক্ত হয়ে সুন্দর ও পাঠযোগ্য কোড উপহার দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Render Props Pattern: Inverting Rendering Control', bn: '৫. রেন্ডার প্রপস প্যাটার্ন: রেন্ডারিংয়ের নিয়ন্ত্রণ প্রদান' } },
    {
      type: 'para',
      text: {
        en: 'The Render Props pattern passes a function as a prop (or as children) to tell a component what to render: <DataFetcher render={(data) => <Chart data={data} />} />. The wrapper handles loading and fetching logic, while the caller decides the exact visual presentation.',
        bn: 'Render Props প্যাটার্নে কোনো কম্পোনেন্টে প্রপস হিসেবে একটি ফাংশন পাঠানো হয় যা ঠিক করে কী রেন্ডার হবে: <DataFetcher render={(data) => <Chart data={data} />} />। মূল কন্টেইনার ডেটা আনা ও লোডিংয়ের কাজ সামলায়, আর ব্যবহারকারী নিজের পছন্দমতো ডিজাইন তৈরি করার ক্ষমতা পান।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 100, y: 250 });

  // Calls the render prop function with internal coordinates:
  return render(pos);
}

const output = MouseTracker({
  render: (coords) => <p>Cursor coordinates: {coords.x}, {coords.y}</p>
});

console.log(output.props.children[1]); // 100
console.log(output.props.children[3]); // 250`,
      caption: {
        en: 'Render props separate stateful mechanics from presentational JSX markup.',
        bn: 'রেন্ডার প্রপস স্টেটের জটিল লজিক থেকে বাহ্যিক রূপকে সম্পূর্ণ আলাদা করে রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Higher-Order Components (HOCs): Decorating Components', bn: '৬. হায়ার-অর্ডার কম্পোনেন্টস (HOC): কম্পোনেন্ট অলংকরণ' } },
    {
      type: 'para',
      text: {
        en: 'A Higher-Order Component is a pure function that takes a component as an argument and returns a new enhanced component (const ProtectedDashboard = withAuth(Dashboard)). While modern React prefers Custom Hooks, HOCs remain widespread in legacy libraries like Redux connect() and Relay.',
        bn: 'Higher-Order Component হলো একটি খাঁটি ফাংশন যা একটি সাধারণ কম্পোনেন্ট গ্রহণ করে এবং বাড়তি ক্ষমতা সহ একটি নতুন উন্নত কম্পোনেন্ট ফেরত দেয় (যেমন: const ProtectedDashboard = withAuth(Dashboard))। আধুনিক কোডে কাস্টম হুক বেশি ব্যবহৃত হলেও পুরনো অনেক লাইব্রেরিতে HOC এখনো বিদ্যমান।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Classic HOC pattern:
function withAuthentication(WrappedComponent) {
  return function AuthenticatedGate(props) {
    const isAuthenticated = true; // Simulated check
    if (!isAuthenticated) {
      return <div>Access Denied: Please Sign In</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

function UserSettings({ user }) {
  return <div>Welcome {user}</div>;
}

const ProtectedSettings = withAuthentication(UserSettings);
console.log(typeof ProtectedSettings); // "function" (Decorated HOC returned)`,
      caption: {
        en: 'HOCs wrap components to inject cross-cutting concerns like security or telemetry.',
        bn: 'HOC কম্পোনেন্টকে ঘিরে রেখে নিরাপত্তা বা নজরদারির মতো সাধারণ নিয়মগুলো কার্যকর করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Forwarding DOM References: forwardRef', bn: '৭. ডম রেফারেন্স ফরোয়ার্ড করা: forwardRef' } },
    {
      type: 'para',
      text: {
        en: 'By default, you cannot pass a ref to a custom component because React reserves ref as an internal keyword. Wrapping your component with forwardRef((props, ref) => ...) allows parent components to access the underlying DOM node (e.g. focusing a custom input).',
        bn: 'ডিফল্টভাবে কাস্টম কম্পোনেন্টে সরাসরি ref পাঠানো যায় না কারণ রিঅ্যাক্ট এটিকে বিশেষ সংরক্ষিত শব্দ মনে করে। forwardRef((props, ref) => ...) দিয়ে কম্পোনেন্ট মুড়ে দিলে অভিভাবক সরাসরি ভেতরের আসল ব্রাউজার DOM নোড অ্যাক্সেস করার অনুমতি পায় (যেমন ইনপুটে ফোকাস করা)।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { forwardRef } from "react";

// Forwarding ref to internal native <input> tag:
const CustomTextInput = forwardRef(function CustomTextInput(props, ref) {
  return <input ref={ref} className="custom-input" {...props} />;
});

console.log(typeof CustomTextInput); // "object" (Special forward_ref type in React 18)`,
      caption: {
        en: 'forwardRef bridges external parent references to internal native DOM elements.',
        bn: 'forwardRef বাইরের অভিভাবকের রেফারেন্সকে ভেতরের আসল DOM উপাদানের সাথে যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Custom Hook Abstraction: Encapsulating Logic', bn: '৮. কাস্টম হুক অ্যাবস্ট্রাকশন: পুনরায় ব্যবহারযোগ্য লজিক' } },
    {
      type: 'para',
      text: {
        en: 'Custom Hooks have largely superseded HOCs and Render Props. A custom hook is any function starting with use that calls other React hooks (e.g. useWindowSize, useFetch). It shares stateful logic between components without adding extra wrappers or DOM nesting.',
        bn: 'আধুনিক রিঅ্যাক্টে কাস্টম হুক HOC এবং Render Props-এর জায়গা দখল করেছে। use দিয়ে শুরু হওয়া যেকোনো সাধারণ ফাংশন যা অন্য হুক ব্যবহার করে, তা-ই কাস্টম হুক (যেমন useWindowSize, useLocalStorage)। এটি কোনো বাড়তি নেস্টিং ছাড়াই বিভিন্ন উপাদানের মধ্যে লজিক শেয়ার করতে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useState, useEffect } from "react";

// Reusable custom hook:
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}

function ToggleComponent() {
  const [isOn, toggleIsOn] = useToggle(true);
  return { isOn, toggleIsOn };
}

const instance = ToggleComponent();
console.log("Toggle initial state:", instance.isOn); // true`,
      caption: {
        en: 'Custom hooks share stateful behavior cleanly without introducing wrapper hell.',
        bn: 'কাস্টম হুক কোনো বাড়তি মোড়ক ছাড়াই একাধিক উপাদানের মাঝে লজিক ভাগ করে নেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Styling Architectures: CSS Modules vs CSS-in-JS', bn: '৯. সিএসএস স্টাইলিং কৌশল: CSS Modules বনাম CSS-in-JS' } },
    {
      type: 'para',
      text: {
        en: 'React teams use three primary styling architectures: 1) CSS Modules (styles.module.css) and preprocessors like Sass and SCSS for scoped style styling; 2) CSS-in-JS (Styled Components) which bind styles directly to component props. 3) Utility CSS (Tailwind) which applies utility classes directly in JSX.',
        bn: 'রিঅ্যাক্ট প্রজেক্টে ৩টি প্রধান সিএসএস কৌশল প্রচলিত: ১) CSS Modules (styles.module.css), যা স্বয়ংক্রিয়ভাবে ক্লাসের নামকে লোকাল স্কোপে আবদ্ধ করে যাতে কনফ্লিক্ট না হয়; ২) CSS-in-JS (Styled Components), যা প্রপসের ওপর ভিত্তি করে ডায়নামিক সিএসএস তৈরি করে। ৩) Utility CSS (Tailwind), যা দ্রুত সরাসরি ক্লাসে স্টাইল দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// 1. CSS Modules (Locally scoped hashed class names):
// import styles from "./Card.module.css";
// <div className={styles.container}>...</div>

// 2. Inline Styles (Dynamic calculations):
function ColorBox({ hexColor }) {
  return <div style={{ backgroundColor: hexColor, width: 40, height: 40 }} />;
}

const box = ColorBox({ hexColor: "#10b981" });
console.log(box.props.style.backgroundColor); // "#10b981"`,
      caption: {
        en: 'CSS Modules prevent global stylesheet collisions by hashing component class names.',
        bn: 'CSS Modules ক্লাসের নাম হ্যাশ করে গ্লোবাল স্টাইল কনফ্লিক্ট চিরতরে বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Client-Side Routing: Single-Page Architecture with React Router', bn: '১০. ক্লায়েন্ট-সাইড রাউটিং: React Router দিয়ে সিঙ্গল-পেজ অ্যাপ' } },
    {
      type: 'para',
      text: {
        en: 'React Router enables Single-Page Application (SPA) navigation without full-page browser reloads. You declare routes declaratively (<Routes><Route path="/about" element={<About />} /></Routes>) and use <Link to="/about"> to intercept clicks and update the URL history via HTML5 pushState.',
        bn: 'React Router কোনো রিলোড ছাড়াই সিঙ্গল-পেজ অ্যাপ্লিকেশনের পেজ পরিবর্তনের সুবিধা দেয়। <Routes><Route path="/about" element={<About />} /></Routes> দিয়ে পথ নির্ধারণ করা হয় এবং <Link to="/about"> দিয়ে ক্লিকে ব্রাউজার রিফ্রেশ না করিয়ে দ্রুত পেজ বদলে ফেলা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Sample Declarative Routing Architecture:
function AppRouter() {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/profile", label: "Profile" }
  ];

  return (
    <nav>
      {routes.map((r) => (
        <a key={r.path} href={r.path}>{r.label}</a>
      ))}
    </nav>
  );
}

const router = AppRouter();
console.log(router.props.children.length); // 3 (Rendered 3 route navigation links)`,
      caption: {
        en: 'Client-side routing intercept URLs to render views without triggering server page roundtrips.',
        bn: 'ক্লায়েন্ট-সাইড রাউটিং সার্ভার রিলোড ছাড়াই নিমেষের মধ্যে পেজের ভিউ বদলে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-com-ex1',
      kind: 'predict',
      topic: 'react: DOM ref forwarding wrapper',
      question: {
        en: 'Which React function wraps a component to allow parent components to pass a ref to its internal DOM node?',
        bn: 'কোন রিঅ্যাক্ট ফাংশন দিয়ে কম্পোনেন্ট মুড়ে দিলে অভিভাবক তার ভেতরের আসল DOM নোডে ref পাঠাতে পারে?'
      },
      code: `/* Forwarding ref to child DOM node */
/* const MyInput = React.____________((props, ref) => <input ref={ref} />); */`,
      answer: 'forwardRef',
      accept: ['forwardRef', 'React.forwardRef'],
      hint: {
        en: 'It forwards the ref.',
        bn: 'এটি রেফ ফরোয়ার্ড করে।'
      },
      explanation: {
        en: 'React.forwardRef allows a component to receive a ref and pass it down to a native DOM child.',
        bn: 'React.forwardRef কম্পোনেন্টকে রেফ গ্রহণ করে ভেতরের আসল ডম উপাদানের সাথে যুক্ত করতে দেয়।'
      }
    },
    {
      id: 'rea-com-ex2',
      kind: 'mcq',
      topic: 'react: composition over inheritance',
      question: {
        en: 'How does React recommend sharing behavior and specialized UI across components?',
        bn: 'বিভিন্ন কম্পোনেন্টের মাঝে আচরণ ও ডিজাইন শেয়ার করতে রিঅ্যাক্ট কোন পদ্ধতিটি ব্যবহারের পরামর্শ দেয়?'
      },
      options: [
        { en: 'Through Component Composition (props, children, and custom hooks), avoiding class inheritance hierarchies', bn: 'কম্পোনেন্ট কম্পোজিশন (props, children ও কাস্টম হুক) ব্যবহারের মাধ্যমে, ক্লাস ইনহেরিটেন্স সম্পূর্ণ এড়িয়ে' },
        { en: 'By inheriting from a GiantBaseComponent class', bn: 'একটি বিশালাকার বেস ক্লাস থেকে ইনহেরিট করে' },
        { en: 'By saving everything in global window variables', bn: 'গ্লোবাল উইন্ডো ভ্যারিয়েবলে রেখে' },
        { en: 'By copying and pasting code into every file', bn: 'প্রতিটি ফাইলে কোড কপি-পেস্ট করে' }
      ],
      answer: 0,
      hint: {
        en: 'Composition over inheritance.',
        bn: 'ইনহেরিটেন্সের বদলে কম্পোজিশন।'
      },
      explanation: {
        en: 'React’s architectural philosophy strongly advocates for composition over inheritance, assembling complex views from modular primitives.',
        bn: 'রিঅ্যাক্ট ইনহেরিটেন্সের বদলে কম্পোজিশনকে সর্বোত্তম মডেল মনে করে, যা ছোট উপাদান দিয়ে বড় অ্যাপ গড়তে সাহায্য করে।'
      }
    },
    {
      id: 'rea-com-ex3',
      kind: 'mcq',
      topic: 'react: CSS modules benefit',
      question: {
        en: 'What is the primary benefit of using CSS Modules (.module.css) in a React project?',
        bn: 'রিঅ্যাক্ট প্রজেক্টে CSS Modules (.module.css) ব্যবহারের প্রধান সুবিধা কী?'
      },
      options: [
        { en: 'It automatically generates unique hashed class names, scoping styles locally to the component and preventing global naming collisions', bn: 'এটি স্বয়ংক্রিয়ভাবে ইউনিক হ্যাশড ক্লাস নাম তৈরি করে স্টাইলকে লোকাল রাখে এবং গ্লোবাল নামের সংঘর্ষ বন্ধ করে' },
        { en: 'It makes images load in 3D', bn: 'ছবি থ্রি-ডিতে লোড করে' },
        { en: 'It compresses HTML by 90%', bn: 'এইচটিএমএল ৯০% কমপ্রেস করে' },
        { en: 'It replaces JavaScript completely', bn: 'জাভাস্ক্রিপ্টের জায়গা দখল করে' }
      ],
      answer: 0,
      hint: {
        en: 'Local class name scoping via hashing.',
        bn: 'হ্যাশিংয়ের মাধ্যমে ক্লাসের নাম লোকাল স্কোপে রাখা।'
      },
      explanation: {
        en: 'CSS Modules scope class names locally by appending unique hashes at compile time, eliminating CSS specificity conflicts.',
        bn: 'CSS Modules কম্পাইল করার সময় ইউনিক হ্যাশ জুড়ে দেয় যার ফলে বিভিন্ন কম্পোনেন্টের সিএসএস ক্লাস একে অপরের সাথে ধাক্কা খায় না।'
      }
    }
  ],
  quiz: {
    id: 'rea-composition-quiz',
    title: { en: 'React Composition & Architecture Quiz', bn: 'রিঅ্যাক্ট কম্পোজিশন ও আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'rcq1',
        kind: 'mcq',
        topic: 'react: children re-render shield',
        question: {
          en: 'Why does passing an expensive component as props.children avoid re-rendering when the parent wrapper’s state changes?',
          bn: 'অভিভাবক কম্পোনেন্টের স্টেট পাল্টালেও তার ভেতর props.children হিসেবে পাঠানো ভারী উপাদানটি কেন রি-রেন্ডার হয় না?'
        },
        options: [
          { en: 'Because the child was instantiated in the outer scope, so its props and identity remain unchanged across the wrapper’s re-renders', bn: 'কারণ চাইল্ড উপাদানটি বাইরের স্কোপে তৈরি হয়েছিল, ফলে অভিভাবক কাঁপলেও চাইল্ডের প্রপস ও রেফারেন্স অপরিবর্তিত থাকে' },
          { en: 'Because React freezes all children permanently', bn: 'কারণ রিঅ্যাক্ট সব চাইল্ডকে চিরতরে ফ্রিজ করে দেয়' },
          { en: 'It is a bug that will be fixed in React 20', bn: 'এটি একটি বাগ যা React 20 এ ঠিক করা হবে' },
          { en: 'Because children don’t have access to the DOM', bn: 'কারণ চাইল্ডের DOM অ্যাক্সেস থাকে না' }
        ],
        answer: 0,
        hint: {
          en: 'Child is created in outer scope; props did not change.',
          bn: 'চাইল্ড বাইরের স্কোপে তৈরি, প্রপস অপরিবর্তিত।'
        },
        explanation: {
          en: 'Elements passed as children are created before the wrapper renders. When the wrapper re-renders, React sees identical element references and reuses them.',
          bn: 'চাইল্ড হিসেবে আসা উপাদানগুলো আগেই তৈরি হয়ে আসে, তাই অভিভাবক রি-রেন্ডার হলেও রিঅ্যাক্ট দেখতে পায় যে চাইল্ডের কিছুই বদলায়নি।'
        }
      },
      {
        id: 'rcq2',
        kind: 'mcq',
        topic: 'react: compound components coordination',
        question: {
          en: 'How do sub-components in a Compound Components pattern share state without explicit prop drilling?',
          bn: 'Compound Components প্যাটার্নে ভেতরের উপাদানগুলো প্রপ ড্রিলিং ছাড়াই কীভাবে নিজেদের মধ্যে স্টেট শেয়ার করে?'
        },
        options: [
          { en: 'Through an internal, shared React Context managed by the root compound component', bn: 'মূল কম্পাউন্ড কম্পোনেন্ট দ্বারা পরিচালিত একটি অভ্যন্তরীণ ও গোপন React Context-এর মাধ্যমে' },
          { en: 'Through browser cookies', bn: 'ব্রাউজার কুকি দিয়ে' },
          { en: 'By sending HTTP requests to the backend', bn: 'সার্ভারে রিকোয়েস্ট পাঠিয়ে' },
          { en: 'Through localStorage events', bn: 'লোকাল স্টোরেজ দিয়ে' }
        ],
        answer: 0,
        hint: {
          en: 'Via internal shared React Context.',
          bn: 'অভ্যন্তরীণ শেয়ার্ড React Context-এর মাধ্যমে।'
        },
        explanation: {
          en: 'Compound components share state implicitly via internal React Context, providing consumers with clean, decoupled markup.',
          bn: 'কম্পাউন্ড কম্পোনেন্টস গোপন কনটেক্সট ব্যবহার করে পরস্পরের সাথে সমন্বয় রক্ষা করে, যা কোডকে চমৎকার পরিচ্ছন্ন ও নমনীয় করে।'
        }
      },
      {
        id: 'rcq3',
        kind: 'mcq',
        topic: 'react: forwardRef in component libraries',
        question: {
          en: 'What is the primary purpose of forwardRef in React component engineering?',
          bn: 'রিঅ্যাক্ট কম্পোনেন্ট ইঞ্জিনিয়ারিংয়ে forwardRef-এর প্রধান উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To let parent components pass a ref down through a custom wrapper component to an underlying native DOM element', bn: 'প্যারেন্ট কম্পোনেন্টকে কোনো কাস্টম মোড়কের ভেতর দিয়ে নিচের আসল নেটিভ DOM উপাদানে ref পাঠানোর সুযোগ দেওয়া' },
          { en: 'To restart the browser rendering engine', bn: 'ব্রাউজার রেন্ডারিং ইঞ্জিন রিস্টার্ট করা' },
          { en: 'To convert functional components into classes', bn: 'ফাংশনাল কম্পোনেন্টকে ক্লাসে রূপান্তর করা' },
          { en: 'To delete unused state from memory', bn: 'মেমোরি থেকে অব্যবহৃত স্টেট মুছে ফেলা' }
        ],
        answer: 0,
        hint: {
          en: 'Forwards refs across custom component boundaries.',
          bn: 'কাস্টম কম্পোনেন্টের সীমানা পেরিয়ে ref এগিয়ে দেয়।'
        },
        explanation: {
          en: 'Normally custom components cannot accept refs. forwardRef exposes the child’s native DOM node to parent callers for focus or measurement.',
          bn: 'সাধারণত কাস্টম কম্পোনেন্টে সরাসরি ref নেওয়া যায় না। forwardRef ভেতরের নেটিভ নোডকে বাইরে উন্মুক্ত করে যাতে ফোকাস বা মাপজোখ করা যায়।'
        }
      },
      {
        id: 'rcq4',
        kind: 'mcq',
        topic: 'react: composition over inheritance benefits',
        question: {
          en: 'Why does React recommend Component Composition over class inheritance?',
          bn: 'ক্লাস ইনহেরিটেন্সের চেয়ে কম্পোনেন্ট কম্পোজিশনকে রিঅ্যাক্ট কেন বেশি অগ্রাধিকার দেয়?'
        },
        options: [
          { en: 'Composition decouples components through explicit props and slots, avoiding rigid and fragile base-class hierarchies', bn: 'কম্পোজিশন প্রপস ও স্লটের সাহায্যে উপাদানগুলোকে বিচ্ছিন্ন রাখে, ফলে ভঙ্গুর বেস-ক্লাসের জটিলতা এড়ানো যায়' },
          { en: 'Inheritance is forbidden by JavaScript standards', bn: 'জাভাস্ক্রিপ্ট স্ট্যান্ডার্ডে ইনহেরিটেন্স নিষিদ্ধ' },
          { en: 'Composition eliminates the need for HTML markup', bn: 'কম্পোজিশন এইচটিএমএলের প্রয়োজনীয়তা দূর করে' },
          { en: 'Inheritance makes Node.js crash', bn: 'ইনহেরিটেন্স Node.js কে ক্র্যাশ করায়' }
        ],
        answer: 0,
        hint: {
          en: 'Flexible composition beats rigid inheritance hierarchies.',
          bn: 'অনমনীয় ইনহেরিটেন্সের চেয়ে নমনীয় কম্পোজিশন অনেক কার্যকর।'
        },
        explanation: {
          en: 'React’s model relies on building complex UIs by combining small, focused components through props.children and explicit configuration rather than multi-level class inheritance trees.',
          bn: 'রিঅ্যাক্টের মূল শক্তি হলো ছোট ছোট উপাদানগুলোকে জোড়া লাগিয়ে বড় রূপ দেওয়া, যা কোডকে যেকোনো পরিবর্তনের জন্য নমনীয় রাখে।'
        }
      }
    ]
  }
};
