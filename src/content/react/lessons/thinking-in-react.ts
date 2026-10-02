import type { Lesson } from '../../../lib/types';

export const thinkingInReactLesson: Lesson = {
  slug: 'thinking-in-react',
  tech: 'react',
  title: {
    en: 'Thinking in React: JSX, Components, Props, Lists & One-Way Data Flow',
    bn: 'থিঙ্কিং ইন রিঅ্যাক্ট: JSX, কম্পোনেন্ট, Props, লিস্ট ও একমুখী ডেটা প্রবাহ'
  },
  summary: {
    en: 'Master foundational React architecture across 10 structured topics, from declarative rendering to unidirectional data flow. Learn JSX compilation, pure component functions, props.children slots, and list keys.',
    bn: 'ডিক্লারেটিভ রেন্ডারিং থেকে শুরু করে একমুখী ডেটা প্রবাহ পর্যন্ত 10 টি সুসংগঠিত পয়েন্টে রিঅ্যাক্ট আর্কিটেকচার আয়ত্ত করুন। জানুন JSX কম্পাইলেশন, খাঁটি কম্পোনেন্ট ফাংশন, props.children স্লট এবং স্টেবল লিস্ট কি।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'rerender-model',
    title: {
      en: 'The Re-render Model: Reconciliation, Virtual DOM & State Batches',
      bn: 'রি-রেন্ডার মডেল: রিকনসিলিয়েশন, ভার্চুয়াল ডম ও স্টেট ব্যাচিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Core Paradigm: UI = f(State) and Declarative Rendering', bn: '১. মূল ভিত্তি: UI = f(State) এবং ডিক্লারেটিভ রেন্ডারিং' } },
    {
      type: 'para',
      text: {
        en: 'In traditional imperative JavaScript, you manually find DOM (Document Object Model) nodes and mutate them step-by-step (`document.getElementById`, `element.innerText`). React replaces this with Declarative Rendering: you define what the UI should look like for a given state, and React’s engine computes and applies the exact DOM updates needed.',
        bn: 'সনাতন ইম্পারেটিভ জাভাস্ক্রিপ্টে প্রতি ধাপে নিজে নিজে DOM (Document Object Model) খুঁজে পরিবর্তন করতে হয় (যেমন `document.getElementById`, `element.innerText`)। রিঅ্যাক্ট এর বদলে এনেছে Declarative Rendering: আপনি শুধু বলেন নির্দিষ্ট স্টেটে আপনার UI কেমন দেখতে হবে, আর রিঅ্যাক্ট ইঞ্জিন নিজে হিসাব করে প্রয়োজনীয় DOM আপডেট সম্পন্ন করে।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Imperative DOM manipulation vs Declarative React function
// 1. Imperative (Manual step-by-step DOM patching):
// const btn = document.getElementById("cart");
// btn.innerText = "Cart (" + count + ")";

// 2. Declarative React (UI is a direct mathematical projection of state):
function CartBadge({ itemCount }) {
  return <span className="badge">Cart ({itemCount})</span>;
}

// Invocations:
console.log(CartBadge({ itemCount: 3 }).props.children.join(""));
// Output: Cart (3)`,
      caption: {
        en: 'React components mathematically project current state snapshots into UI descriptions.',
        bn: 'রিঅ্যাক্ট কম্পোনেন্ট বর্তমান স্টেটের স্ন্যাপশটকে সরাসরি UI বর্ণনায় রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Demystifying JSX: Syntactic Sugar for React.createElement', bn: '২. JSX উন্মোচন: React.createElement-এর সহজ রূপ' } },
    {
      type: 'para',
      text: {
        en: 'JSX is neither HTML nor a string. It is a JavaScript syntax extension that compilers (Babel, SWC, Vite) transpile directly into React.createElement (or _jsx) calls. Writing <h1 className="title">Hello</h1> creates a lightweight JavaScript virtual DOM object: { type: "h1", props: { className: "title", children: "Hello" } }.',
        bn: 'JSX কোনো এইচটিএমএল বা স্ট্রিং নয়। এটি জাভাস্ক্রিপ্টের একটি সিনট্যাক্স যা কম্পাইলার (Babel, Vite) সরাসরি React.createElement কলে রূপান্তর করে। <h1 className="title">Hello</h1> লিখলে মূলত একটি সাধারণ জাভাস্ক্রিপ্ট অবজেক্ট তৈরি হয়: { type: "h1", props: { className: "title", children: "Hello" } }।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// What you write in JSX:
const element = <div className="greeting">Welcome to CodeShikhon</div>;

// What the compiler outputs under the hood:
// const compiled = React.createElement("div", { className: "greeting" }, "Welcome to CodeShikhon");

console.log(element.type);                // "div"
console.log(element.props.className);       // "greeting"
console.log(element.props.children);        // "Welcome to CodeShikhon"`,
      caption: {
        en: 'JSX tags compile to plain JavaScript objects representing Virtual DOM nodes.',
        bn: 'JSX ট্যাগ কম্পাইল হয়ে সাধারণ জাভাস্ক্রিপ্ট ভার্চুয়াল ডম অবজেক্টে পরিণত হয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Dynamic JSX Expressions: Curly Braces Interpolation', bn: '৩. ডায়নামিক JSX এক্সপ্রেশন: কার্লি ব্র্যাকেট {} ইন্টারপোলেশন' } },
    {
      type: 'para',
      text: {
        en: 'Inside JSX tags, wrapping JavaScript code in single curly braces {} executes that expression and embeds the result into the output tree. Any valid expression—variable lookups, math arithmetic, function calls, template strings—can be evaluated inside {}.',
        bn: 'JSX ট্যাগের ভেতরে যেকোনো জাভাস্ক্রিপ্ট কোডকে কার্লি ব্র্যাকেটে {} রাখলে তা রান করে এবং তার ফলাফল UI-তে দেখায়। যেকোনো বৈধ এক্সপ্রেশন—যেমন ভ্যারিয়েবলের নাম, গাণিতিক হিসাব, ফাংশন কল বা টেমপ্লেট স্ট্রিং—কার্লি ব্র্যাকেটের ভেতর সরাসরি লেখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `const userName = "Nadia";
const unitPrice = 250;
const quantity = 3;

function Invoice() {
  return (
    <div>
      <h3>Customer: {userName.toUpperCase()}</h3>
      <p>Total Due: {unitPrice * quantity} BDT</p>
    </div>
  );
}

const invoice = Invoice();
console.log(invoice.props.children[0].props.children[1]); // "NADIA"
console.log(invoice.props.children[1].props.children[1]); // 750`,
      caption: {
        en: 'Curly braces allow evaluating arbitrary JavaScript expressions directly in layout markup.',
        bn: 'কার্লি ব্র্যাকেট মার্কআপের ভেতরেই যেকোনো জাভাস্ক্রিপ্ট কোডের ফলাফল বসাতে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Components as Pure Functions: The Props Contract', bn: '৪. খাঁটি ফাংশন হিসেবে কম্পোনেন্ট: Props-এর অপরিবর্তনীয় চুক্তি' } },
    {
      type: 'para',
      text: {
        en: 'A React component must act like a Pure Function with respect to its input arguments: given identical parameters, it must always return the exact same JSX. Incoming properties are strictly Read-Only. Modifying values directly inside a child (props.price = 50) mutates parent state and corrupts the reconciliation tree.',
        bn: 'রিঅ্যাক্ট কম্পোনেন্টকে তার ইনপুটের সাপেক্ষে একটি Pure Function বা খাঁটি ফাংশন হতে হয়: অর্থাৎ একই ইনপুট দিলে এটি সবসময় একই JSX রিটার্ন করবে। আগত প্রপার্টিগুলো কঠোরভাবে Read-Only বা অপরিবর্তনীয়। কম্পোনেন্টের ভেতর সরাসরি মান বদলানো (যেমন props.price = 50) রিঅ্যাক্ট সিস্টেমে মারাত্মক বিশৃঙ্খলা ঘটায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// ✅ Pure Component: Never mutates incoming props
function PriceTag({ amount, currency = "USD" }) {
  // props are immutable!
  const formatted = \`\${currency} \${amount.toFixed(2)}\`;
  return <span className="price">{formatted}</span>;
}

const tag = PriceTag({ amount: 49.9 });
console.log(tag.props.children); // "USD 49.90"`,
      caption: {
        en: 'Components must never mutate their incoming props object.',
        bn: 'কম্পোনেন্ট কখনোই তার কাছে আসা প্রপস অবজেক্টের কোনো মান পরিবর্তন করে না।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Props Destructuring and Defaults: Clean Signatures', bn: '৫. প্রপস ডিস্ট্রাকচারিং ও ডিফল্ট মান: পরিচ্ছন্ন সিগনেচার' } },
    {
      type: 'para',
      text: {
        en: 'Modern React code idiomatic standards favor ES6 object destructuring props directly inside the component parameter list. This documents every accepted prop at a glance and allows specifying fallback default values for optional properties.',
        bn: 'আধুনিক রিঅ্যাক্টে ফাংশন প্যারামিটারের ভেতরেই সরাসরি ES6 অবজেক্ট ডিস্ট্রাকচারিং করা হয়। এর ফলে এক নজরেই বোঝা যায় এই কম্পোনেন্ট কী কী প্রপস গ্রহণ করে এবং দরকারমতো ঐচ্ছিক প্রপসের জন্য ডিফল্ট মান সেট করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Destructuring with default fallbacks:
function UserAvatar({ name, size = 48, isOnline = false }) {
  return (
    <div className="avatar-wrapper" style={{ width: size, height: size }}>
      <span className="user-name">{name}</span>
      {isOnline && <span className="status-dot green" />}
    </div>
  );
}

const avatar = UserAvatar({ name: "Alex" });
console.log(avatar.props.style.width); // 48 (Applied from default parameter!)`,
      caption: {
        en: 'Parameter destructuring clarifies prop dependencies and provides instant defaults.',
        bn: 'প্যারামিটার ডিস্ট্রাকচারিং কোডকে পরিষ্কার করে এবং স্বয়ংক্রিয় ডিফল্ট মান দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Flexible Layout Slots: Composing with props.children', bn: '৬. নমনীয় লেআউট স্লট: props.children দিয়ে কম্পোজিশন' } },
    {
      type: 'para',
      text: {
        en: 'Components often do not know their children ahead of time (e.g. Card, Dialog, Sidebar). Everything nested between the opening and closing tags (<Card><button>Submit</button></Card>) is passed to the component as the special props.children prop, enabling flexible UI composition.',
        bn: 'কার্ড বা ডায়ালগের মতো কন্টেইনার কম্পোনেন্টগুলো আগে থেকে জানে না তাদের ভেতরে কী বসবে। শুরুর এবং শেষের ট্যাগের মাঝে যা কিছু লেখা হয় (<Card><button>Submit</button></Card>), তা ওই কম্পোনেন্টের কাছে বিশেষ props.children প্রপ হিসেবে পৌঁছায়, যা নমনীয় লেআউট তৈরিতে সাহায্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function CardContainer({ header, children }) {
  return (
    <section className="card">
      <header className="card-header">{header}</header>
      <main className="card-content">{children}</main>
    </section>
  );
}

// Composition usage:
const card = CardContainer({
  header: "Security Audit",
  children: <p>All certificates are verified.</p>
});

console.log(card.props.children[0].props.children); // "Security Audit"
console.log(card.props.children[1].props.children.props.children); // "All certificates are verified."`,
      caption: {
        en: 'props.children passes arbitrary nested JSX to container components for clean composition.',
        bn: 'props.children কন্টেইনার কম্পোনেন্টের ভেতর যেকোনো নেস্টেড JSX ঢুকিয়ে দিতে পারে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Conditional Rendering Patterns: Ternaries, &&, and Returns', bn: '৭. শর্তাধীন রেন্ডারিং: টার্নারি, && এবং আর্লি রিটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'React provides three standard ways to render conditionally: 1) Early returns before the main JSX for guard clauses (e.g. if (!user) return <Login />); 2) Ternary operator (? :) for binary choices (isLoggedIn ? <Dashboard /> : <Landing />); 3) Logical AND (&&) for rendering an element only when a boolean condition is true.',
        bn: 'রিঅ্যাক্টে শর্তানুসারে রেন্ডার করার ৩টি প্রধান উপায় রয়েছে: ১) মূল কোডের আগেই Early Return করা (যেমন: if (!user) return <Login />); ২) দুটি বিকল্পের মধ্যে বেছে নিতে Ternary (? :) অপারেটর (isLoggedIn ? <Dashboard /> : <Landing />); ৩) কোনো শর্ত সত্য হলেই কেবল কিছু দেখাতে চাইলে Logical AND (&&) ব্যবহার করা।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function NotificationCenter({ count, isMuted }) {
  // 1. Early Return Guard:
  if (isMuted) {
    return <span>Notifications Silenced</span>;
  }

  return (
    <div>
      {/* 2. Ternary Operator: */}
      <h4>Status: {count > 0 ? "New Messages Waiting" : "Inbox Zero"}</h4>

      {/* 3. Logical AND (Beware: ensure condition is boolean, not 0!): */}
      {count > 0 && <span className="unread-pill">{count}</span>}
    </div>
  );
}

const res = NotificationCenter({ count: 5, isMuted: false });
console.log(res.props.children[0].props.children[1]); // "New Messages Waiting"`,
      caption: {
        en: 'Ternaries and boolean logical operators control which subtrees render dynamically.',
        bn: 'টার্নারি ও লজিক্যাল অপারেটর নির্ধারণ করে কোন অংশটি স্ক্রিনে রেন্ডার হবে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Rendering Lists: array.map() and Stable Unique Keys', bn: '৮. তালিকা রেন্ডারিং: array.map() এবং স্টেবল কি' } },
    {
      type: 'para',
      text: {
        en: 'To render arrays, use JavaScript’s array.map() to transform each data record into a JSX element. Every item in a mapped list MUST receive a unique, stable key prop (such as item.id). Never use array index as a key for dynamic lists, as reordering, sorting, or deleting items causes severe state corruption.',
        bn: 'অ্যারে থেকে তালিকা রেন্ডার করতে array.map() দিয়ে প্রতিটি ডেটাকে JSX এলিমেন্টে রূপান্তর করা হয়। তালিকার প্রতিটি উপাদানে অবশ্যই একটি অনন্য ও স্থায়ী key প্রপ দিতে হয় (যেমন item.id)। পরিবর্তনশীল তালিকায় কখনোই অ্যারের ইনডেক্সকে key বানাবেন না, কারণ আইটেম সাজানো বা মুছলে ভেতরের স্টেট উল্টাপাল্টা হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `const topics = [
  { id: "top-1", name: "JavaScript Engine" },
  { id: "top-2", name: "React Reconciliation" },
  { id: "top-3", name: "TypeScript Generics" }
];

function TopicList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        // ✅ Stable ID from data as key:
        <li key={item.id} className="topic-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

const list = TopicList({ items: topics });
console.log(list.props.children.length); // 3 (Rendered 3 list items with stable keys)`,
      caption: {
        en: 'Stable keys from data IDs enable React to track elements across list reorders and mutations.',
        bn: 'ডেটা আইডি থেকে আসা স্থায়ী কি রিঅ্যাক্টকে তালিকায় আইটেমের অবস্থান সঠিকভাবে চিনতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Synthetic Events: Handling Clicks and Inputs', bn: '৯. সিন্থেটিক ইভেন্টস: ক্লিক ও ইনপুট হ্যান্ডলিং' } },
    {
      type: 'para',
      text: {
        en: 'React handles events using camelCase attributes (onClick, onSubmit, onKeyDown) passed as function references, NOT function execution (onClick={handleClick}, NOT onClick={handleClick()}). Event callbacks receive a SyntheticEvent: a cross-browser normalized wrapper around the browser’s native event.',
        bn: 'রিঅ্যাক্টে ইভেন্ট অ্যাট্রিবিউটগুলো camelCase ফরম্যাটে লিখতে হয় (onClick, onSubmit) এবং সেখানে ফাংশনের রেফারেন্স দিতে হয়, কল করে দেওয়া যায় না (onClick={handleClick}, কখনোই onClick={handleClick()} নয়)। এই হ্যান্ডলারগুলো একটি SyntheticEvent পায়, যা বিভিন্ন ব্রাউজারের মধ্যে ইভেন্টের আচরণকে অভিন্ন রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function ActionCard({ title, onSelect }) {
  const handleClick = (event) => {
    event.stopPropagation(); // Stop event bubbling to parents
    onSelect(title);
  };

  return (
    <div className="card">
      <h4>{title}</h4>
      <button onClick={handleClick}>Select Course</button>
    </div>
  );
}

let selectedCourse = "";
const card = ActionCard({
  title: "Fullstack Mastery",
  onSelect: (name) => { selectedCourse = name; }
});

// Simulate synthetic click invocation:
card.props.children[1].props.onClick({ stopPropagation: () => {} });
console.log("Selected course:", selectedCourse); // "Fullstack Mastery"`,
      caption: {
        en: 'Synthetic events normalize browser differences and pass callbacks upward.',
        bn: 'সিন্থেটিক ইভেন্ট বিভিন্ন ব্রাউজারের অসামঞ্জস্য দূর করে এবং প্যারেন্টকে কলব্যাক পাঠায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Unidirectional Flow: Props Flow Down, Events Bubble Up', bn: '১০. একমুখী ডেটা প্রবাহ: Props নিচে নামে, Events উপরে ওঠে' } },
    {
      type: 'para',
      text: {
        en: 'In React, data flows strictly downwards in a one-way street: Parents pass state down to children via props; children communicate changes back to parents by calling callback functions passed to them in props. This prevents two-way binding spaghetti and keeps state predictable and debuggable.',
        bn: 'রিঅ্যাক্টে ডেটা সবসময় একমুখী রাস্তায় প্রবাহিত হয়: অভিভাবক বা প্যারেন্ট কম্পোনেন্ট প্রপসের মাধ্যমে চাইল্ডের কাছে ডেটা পাঠায়; আর চাইল্ড কিছু জানাতে চাইলে প্রপসে পাঠানো কলব্যাক ফাংশনটিকে কল করে। এর ফলে জট পাকানো জটিলতা দূর হয় এবং কোথায় কী পরিবর্তন হচ্ছে তা সহজে ট্র্যাক করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Parent owns state; child triggers callbacks:
function CounterParent() {
  let counter = 10;
  const increment = (step) => { counter += step; };

  // Child component receives value and action callback:
  return ChildStepper({ value: counter, onStep: increment });
}

function ChildStepper({ value, onStep }) {
  return {
    display: \`Value is \${value}\`,
    stepUp: () => onStep(1)
  };
}

const stepper = CounterParent();
console.log(stepper.display); // "Value is 10"
stepper.stepUp(); // Modifies parent state cleanly via callback!`,
      caption: {
        en: 'Unidirectional data flow guarantees that state changes happen at a single authoritative owner.',
        bn: 'একমুখী প্রবাহ নিশ্চিত করে যে ডেটা পরিবর্তনের ক্ষমতা কেবল মূল মালিক কম্পোনেন্টের হাতেই থাকবে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-thi-ex1',
      kind: 'predict',
      topic: 'react: JSX compilation target',
      question: {
        en: 'Under the hood, what native React function does a JSX tag compile into when transpiled by Babel or Vite?',
        bn: 'Babel বা Vite দিয়ে কম্পাইল করার সময় একটি JSX ট্যাগ মূলত কোন নেটিভ রিঅ্যাক্ট ফাংশনে রূপান্তরিত হয়?'
      },
      code: `/* JSX transpilation output */
/* const el = React.____________('div', { id: 'root' }, 'Hello'); */`,
      answer: 'createElement',
      accept: ['createElement', 'React.createElement'],
      hint: {
        en: 'It creates an element object.',
        bn: 'এটি একটি এলিমেন্ট অবজেক্ট তৈরি করে।'
      },
      explanation: {
        en: 'JSX is syntax sugar for React.createElement (or the modern _jsx runtime equivalent), producing Virtual DOM tree descriptor objects.',
        bn: 'JSX মূলত React.createElement-এর একটি সহজ রূপ, যা ভার্চুয়াল ডম অবজেক্ট তৈরি করে।'
      }
    },
    {
      id: 'rea-thi-ex2',
      kind: 'mcq',
      topic: 'react: list key attribute',
      question: {
        en: 'Why should you avoid using the array index as the key prop in dynamic lists?',
        bn: 'পরিবর্তনশীল তালিকায় key প্রপ হিসেবে অ্যারের ইনডেক্স ব্যবহার করা কেন পরিহার করা উচিত?'
      },
      options: [
        { en: 'Reordering, sorting, or deleting items changes indices, confusing React’s reconciliation algorithm and corrupting component state', bn: 'আইটেম সাজানো বা মুছলে ইনডেক্স বদলে যায়, ফলে রিঅ্যাক্ট উপাদান মেলাতে বিভ্রান্ত হয় এবং ভেতরের স্টেট নষ্ট হয়ে যায়' },
        { en: 'Indexes crash the browser completely', bn: 'ইনডেক্স ব্যবহার করলে ব্রাউজার ক্র্যাশ করে' },
        { en: 'React only accepts strings, not numbers', bn: 'রিঅ্যাক্ট শুধু স্ট্রিং গ্রহণ করে, সংখ্যা নয়' },
        { en: 'It makes network downloads slower', bn: 'ডাউনলোড ধীরগতির করে' }
      ],
      answer: 0,
      hint: {
        en: 'Indices shift when lists change.',
        bn: 'তালিকায় পরিবর্তন এলে ইনডেক্স বদলে যায়।'
      },
      explanation: {
        en: 'A key must be a stable identity tied to the data record itself (like item.id), not a positional index that shifts whenever items are inserted or removed.',
        bn: 'key সবসময় ডেটার নিজস্ব স্থায়ী পরিচয় (আইডি) হওয়া উচিত, যাতে তালিকা সাজালেও রিঅ্যাক্ট প্রতিটি আইটেমকে আলাদাভাবে চিনতে পারে।'
      }
    },
    {
      id: 'rea-thi-ex3',
      kind: 'mcq',
      topic: 'react: props mutability',
      question: {
        en: 'What is the golden rule regarding component props in React?',
        bn: 'রিঅ্যাক্ট কম্পোনেন্টের Props সংক্রান্ত সুবর্ণ নিয়মটি কী?'
      },
      options: [
        { en: 'Props are strictly read-only and immutable; components must never modify their own props', bn: 'Props কঠোরভাবে রিড-অনলি এবং অপরিবর্তনীয়; কোনো কম্পোনেন্ট কখনোই তার নিজের প্রপসের মান বদলাতে পারে না' },
        { en: 'Props must always be written in uppercase', bn: 'Props সবসময় বড় হাতের অক্ষরে লিখতে হয়' },
        { en: 'Props can only contain strings', bn: 'Props-এ কেবল স্ট্রিং রাখা যায়' },
        { en: 'Props are deleted after 5 seconds', bn: '৫ সেকেন্ড পর প্রপস মুছে যায়' }
      ],
      answer: 0,
      hint: {
        en: 'Props are immutable pure function inputs.',
        bn: 'Props হলো অপরিবর্তনীয় খাঁটি ফাংশন ইনপুট।'
      },
      explanation: {
        en: 'React components are pure functions with respect to their props. To reflect change, a parent must pass new props down through state updates.',
        bn: 'রিঅ্যাক্ট কম্পোনেন্ট তার প্রপসের সাপেক্ষে একটি খাঁটি ফাংশন। কোনো পরিবর্তন দেখাতে চাইলে অভিভাবককে স্টেট বদলিয়ে নতুন প্রপস পাঠাতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'rea-thinking-quiz',
    title: { en: 'Thinking in React Architecture Quiz', bn: 'থিঙ্কিং ইন রিঅ্যাক্ট আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'rtq1',
        kind: 'mcq',
        topic: 'react: unidirectional data flow',
        question: {
          en: 'How does data flow in a standard React application architecture?',
          bn: 'একটি স্ট্যান্ডার্ড রিঅ্যাক্ট অ্যাপ্লিকেশন আর্কিটেকচারে ডেটা কীভাবে প্রবাহিত হয়?'
        },
        options: [
          { en: 'Unidirectionally: Props flow downwards from parent to child, and events/callbacks flow upwards', bn: 'একমুখীভাবে: Props উপর থেকে নিচে প্যারেন্ট থেকে চাইল্ডে নামে, আর ইভেন্ট বা কলব্যাক নিচ থেকে উপরে ওঠে' },
          { en: 'Circularly between random siblings', bn: 'পাশাপাশি থাকা কম্পোনেন্টে এলোমেলোভাবে' },
          { en: 'Directly from DOM inputs to the cloud server', bn: 'সরাসরি ইনপুট থেকে ক্লাউড সার্ভারে' },
          { en: 'Bidirectionally through global variables', bn: 'গ্লোবাল ভ্যারিয়েবল দিয়ে উভয় দিকে' }
        ],
        answer: 0,
        hint: {
          en: 'Props down, events up.',
          bn: 'প্রপস নিচে নামে, ইভেন্ট উপরে ওঠে।'
        },
        explanation: {
          en: 'Unidirectional data flow maintains a single source of truth, making UI state predictable and straightforward to trace and debug.',
          bn: 'একমুখী ডেটা প্রবাহ নিশ্চিত করে যে প্রতিটি ডেটার একটি নির্দিষ্ট উৎস থাকবে, যার ফলে অ্যাপের আচরণ সহজে অনুমান ও ডিবাগ করা যায়।'
        }
      },
      {
        id: 'rtq2',
        kind: 'mcq',
        topic: 'react: props.children purpose',
        question: {
          en: 'What does the special props.children property represent in a React component?',
          bn: 'রিঅ্যাক্ট কম্পোনেন্টে বিশেষ props.children প্রোপার্টিটি মূলত কী ধারণ করে?'
        },
        options: [
          { en: 'Any nested JSX elements or content placed between the component’s opening and closing tags', bn: 'কম্পোনেন্টের শুরুর এবং শেষের ট্যাগের মাঝে রাখা যেকোনো নেস্টেড JSX উপাদান বা কনটেন্ট' },
          { en: 'The component’s child process ID in Node.js', bn: 'Node.js-এর চাইল্ড প্রসেস আইডি' },
          { en: 'The browser history state', bn: 'ব্রাউজার হিস্ট্রি স্টেট' },
          { en: 'CSS font sizes', bn: 'সিএসএস ফন্ট সাইজ' }
        ],
        answer: 0,
        hint: {
          en: 'Content inside opening and closing tags.',
          bn: 'শুরু ও শেষ ট্যাগের ভেতরের কনটেন্ট।'
        },
        explanation: {
          en: 'props.children enables component composition, allowing wrapper elements to render arbitrary nested content passed to them by callers.',
          bn: 'props.children কম্পোজিশন সুবিধা দেয়, যার ফলে কন্টেইনার কম্পোনেন্ট তার ভেতরে পাঠানো যেকোনো কনটেন্ট দেখাতে পারে।'
        }
      },
      {
        id: 'rtq3',
        kind: 'mcq',
        topic: 'react: key prop in list rendering',
        question: {
          en: 'Why does React require a unique and stable "key" prop on items rendered in an array map?',
          bn: 'অ্যারে ম্যাপের মাধ্যমে রেন্ডার করা উপাদানে রিঅ্যাক্ট কেন একটি অনন্য ও স্থির "key" প্রপ দাবি করে?'
        },
        options: [
          { en: 'To identify which items changed, were added, or were removed across re-renders without re-creating the entire DOM list', bn: 'সম্পূর্ণ DOM তালিকা পুনরায় তৈরি না করে কোন উপাদানটি পরিবর্তিত, যোগ বা বাদ হয়েছে তা শনাক্ত করতে' },
          { en: 'To automatically alphabetize list items', bn: 'তালিকাটি বর্ণানুক্রমিকভাবে সাজাতে' },
          { en: 'To assign CSS z-index layering', bn: 'সিএসএস z-index ঠিক করতে' },
          { en: 'To encrypt array contents on disk', bn: 'অ্যারের বিষয়বস্তু ডিস্কে এনক্রিপ্ট করতে' }
        ],
        answer: 0,
        hint: {
          en: 'Keys give identity to list elements across renders.',
          bn: 'কি প্রতিটি উপাদানকে রেন্ডারজুড়ে নির্দিষ্ট পরিচয় দেয়।'
        },
        explanation: {
          en: 'Keys give elements a stable identity across render passes. Without unique keys, list reordering causes state bugs and forces complete DOM re-creations.',
          bn: 'কি উপাদানগুলোকে একটি স্থায়ী পরিচয় দেয়। এটি না থাকলে তালিকায় পরিবর্তন ঘটলে রিঅ্যাক্ট বিভ্রান্ত হয় এবং পুরো তালিকা নতুন করে আঁকতে গিয়ে কর্মক্ষমতা হারায়।'
        }
      },
      {
        id: 'rtq4',
        kind: 'mcq',
        topic: 'react: JSX compilation',
        question: {
          en: 'What does JSX like <div className="card">Hello</div> compile into before running in the browser?',
          bn: 'ব্রাউজারে চলার আগে <div className="card">Hello</div>-এর মতো JSX কোড কিসে রূপান্তরিত হয়?'
        },
        options: [
          { en: 'A standard JavaScript function call returning a Virtual DOM element object', bn: 'একটি সাধারণ জাভাস্ক্রিপ্ট ফাংশন কল যা একটি ভার্চুয়াল ডম অবজেক্ট তৈরি করে' },
          { en: 'Direct machine binary instructions', bn: 'সরাসরি মেশিন বাইনারি নির্দেশিকা' },
          { en: 'A temporary HTML file written to disk', bn: 'ডিস্কে লেখা সাময়িক এইচটিএমএল ফাইল' },
          { en: 'A WebAssembly binary module', bn: 'একটি ওয়েবঅ্যাসেম্বলি মডিউল' }
        ],
        answer: 0,
        hint: {
          en: 'JSX is syntactic sugar for createElement or jsx runtime calls.',
          bn: 'JSX হলো সাধারণ ফাংশন কলের মিষ্টি বা সহজ রূপ।'
        },
        explanation: {
          en: 'Compilers like Babel or Vite transform JSX into React.createElement or _jsx runtime calls, producing lightweight plain JavaScript objects that describe the UI.',
          bn: 'কম্পাইলার JSX-কে React.createElement বা _jsx কলে বদলে দেয়, যা ব্রাউজারে হালকা জাভাস্ক্রিপ্ট অবজেক্ট তৈরি করে UI বর্ণনা করে।'
        }
      }
    ]
  }
};
