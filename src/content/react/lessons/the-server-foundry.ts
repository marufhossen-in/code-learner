import type { Lesson } from '../../../lib/types';

export const serverFoundryLesson: Lesson = {
  slug: 'the-server-foundry',
  tech: 'react',
  title: {
    en: 'React Server Components (RSC): Server Boundaries, Actions & Streaming',
    bn: 'রিঅ্যাক্ট সার্ভার কম্পোনেন্টস (RSC): সার্ভার সীমানা, অ্যাকশন ও স্ট্রিমিং'
  },
  summary: {
    en: 'Master React Server Components (RSC) and modern fullstack React across 10 structured topics, from zero-bundle execution to client boundaries. Learn database queries in components, "use client" directives, Server Actions, and the React Compiler era.',
    bn: 'শূন্য-বান্ডেল এক্সিকিউশন থেকে শুরু করে ক্লায়েন্ট সীমানা পর্যন্ত 10 টি বিষয়ে রিঅ্যাক্ট সার্ভার কম্পোনেন্টস (RSC) আয়ত্ত করুন। জানুন সরাসরি ডেটাবেস কোয়েরি, "use client" ডিরেক্টিভ, সার্ভার অ্যাকশন এবং রিঅ্যাক্ট কম্পাইলারের আধুনিক প্রয়োগ।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-grand-archive',
    title: {
      en: 'React Architecture Masterclass: Profiling, Optimization & Ecosystem',
      bn: 'রিঅ্যাক্ট আর্কিটেকচার মাস্টারক্লাস: প্রোফাইলিং, অপ্টিমাইজেশন ও ইকোসিস্টেম'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Modern Geography: Server Components vs Client Components', bn: '১. আধুনিক ভূগোল: সার্ভার কম্পোনেন্ট বনাম ক্লায়েন্ট কম্পোনেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'In React 19 and modern frameworks like Next.js, components are Server Components by default. They execute exclusively on the server, producing rendered UI trees. Client Components are explicitly designated with "use client" at the top of the file, running on both server (for SSR) and client (for interactivity).',
        bn: 'React 19 এবং Next.js-এর মতো আধুনিক ফ্রেমওয়ার্কে প্রতিটি কম্পোনেন্ট ডিফল্টভাবে Server Component হিসেবে থাকে। এগুলো শুধুমাত্র সার্ভারে রান করে এবং সরাসরি রেন্ডার হওয়া ফলাফল পাঠায়। আর যেগুলোতে ব্যবহারকারীর ইন্টারঅ্যাকশন (যেমন বাটন ক্লিক, useState) দরকার, সেগুলোর উপরে "use client" লিখে সেগুলোকে Client Component বানাতে হয়।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Server Component (Default in App Router):
// Runs on the server; zero JavaScript shipped to the client!
async function ServerProductCatalog() {
  const products = [{ id: 1, name: "Mechanical Keyboard", price: 120 }];
  return (
    <section>
      <h2>Verified Catalog</h2>
      <p>{products[0].name} - \${products[0].price}</p>
    </section>
  );
}

const catalog = await ServerProductCatalog();
console.log(catalog.props.children[0].props.children); // "Verified Catalog"`,
      caption: {
        en: 'Server Components execute on the server, emitting rendered virtual trees without client code.',
        bn: 'সার্ভার কম্পোনেন্ট সার্ভারে রান করে কোনো ক্লায়েন্ট কোড ছাড়াই ফলাফল প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Zero Client Bundle Weight: Ships Zero Bytes to Browser', bn: '২. শূন্য ক্লায়েন্ট বান্ডল: ব্রাউজারে শূন্য বাইট কোড' } },
    {
      type: 'para',
      text: {
        en: 'Server Components do not ship their JavaScript bundle to the browser. Even if a Server Component imports massive 200KB libraries (markdown parsers, date formatters, sanitizers), only the final rendered HTML and JSON description travels over the network, drastically slashing user bundle sizes.',
        bn: 'সার্ভার কম্পোনেন্টের নিজস্ব কোনো জাভাস্ক্রিপ্ট ফাইল ব্রাউজারে পাঠানো হয় না। এমনকি সার্ভার কম্পোনেন্ট যদি ২০০ কিলোবাইটের কোনো ভারী লাইব্রেরি (যেমন মার্কডাউন পার্সার বা গণনার টুল) ব্যবহার করে, ব্রাউজারে কেবল তার প্রস্তুত হওয়া আউটপুট পাঠানো হয়—যার ফলে ব্যবহারকারীর ডাউনলোড সাইজ অভাবনীয় কমে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Imagine this component imports a 150KB markdown parsing library:
// import { parseMarkdown } from "heavy-markdown-parser";

async function ArticleRenderer({ rawMarkdown }) {
  // Heavy computation runs on high-power server:
  const htmlContent = "<h1>Compiled Markdown Title</h1>";
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

console.log("Client bundle impact: 0 KB of JavaScript shipped!");
// Output: Client bundle impact: 0 KB of JavaScript shipped!`,
      caption: {
        en: 'Server-side dependencies are executed on the server, adding zero bytes to the client bundle.',
        bn: 'ভারী লাইব্রেরি সার্ভারেই কার্যকর হওয়ায় ক্লায়েন্টের বান্ডল সাইজ বাড়ে না।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Direct Infrastructure Access: No Need for API Endpoints', bn: '৩. সরাসরি ডেটাবেস সংযোগ: এপিআই রুট বানানোর প্রয়োজন নেই' } },
    {
      type: 'para',
      text: {
        en: 'In traditional single-page apps, components cannot access databases directly, forcing you to create an API route (/api/users) and write a useEffect fetch call. Server Components are async functions that run right beside your database, letting you query SQL or MongoDB directly inside the component.',
        bn: 'সনাতন অ্যাপ্লিকেশনে কম্পোনেন্ট সরাসরি ডেটাবেস ছুঁতে পারে না, তাই আলাদা এপিআই রুট বানিয়ে useEffect দিয়ে ডেটা আনতে হতো। কিন্তু সার্ভার কম্পোনেন্ট সরাসরি সার্ভারে চলায় কোনো বাড়তি এপিআই ছাড়াই কম্পোনেন্টের ভেতরেই সরাসরি SQL বা ডেটাবেস কোয়েরি চালানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Direct database access inside component body:
async function UserList() {
  // Direct database query:
  const users = await Promise.resolve([
    { id: "u-1", name: "Tamim Iqbal", role: "Admin" },
    { id: "u-2", name: "Mushfiqur Rahim", role: "Member" }
  ]);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name} ({u.role})</li>
      ))}
    </ul>
  );
}

const list = await UserList();
console.log(list.props.children.length); // 2 (Loaded directly from database!)`,
      caption: {
        en: 'Server Components query databases directly, eliminating intermediary API plumbing.',
        bn: 'সার্ভার কম্পোনেন্ট সরাসরি ডেটাবেস কোয়েরি করে বাড়তি এপিআইয়ের ঝামেলা দূর করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Network Boundary: The "use client" Directive', bn: '৪. নেটওয়ার্ক সীমানা: "use client" নির্দেশিকা' } },
    {
      type: 'para',
      text: {
        en: 'The "use client" directive placed at the very top of a file does NOT mean "run only on client". It designates the file as the Boundary between server-only and interactive client code. Any component using hooks (useState, useEffect) or browser events (onClick) must be marked with "use client".',
        bn: 'ফাইলের একদম উপরে "use client" লেখা মানে এই নয় যে এটি শুধু ব্রাউজারে চলবে। এটি মূলত সার্ভার এবং ক্লায়েন্টের মধ্যকার সীমানা নির্ধারণ করে। যেসব কম্পোনেন্টে রিঅ্যাক্ট হুক (useState, useEffect) বা ব্রাউজার ইভেন্ট (onClick) দরকার, সেগুলোকে অবশ্যই "use client" হিসেবে চিহ্নিত করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `"use client"; // Marks the boundary into interactive territory

import { useState } from "react";

function InteractiveLikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  return (
    <button onClick={() => setLikes((l) => l + 1)}>
      Likes: {likes}
    </button>
  );
}

console.log(typeof InteractiveLikeButton); // "function"`,
      caption: {
        en: '"use client" marks components that require browser events and reactive hooks.',
        bn: '"use client" সেসব উপাদানকে চিহ্নিত করে যাদের ব্রাউজার ইভেন্ট ও হুক প্রয়োজন।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Serialization Tollgate: Passing Props Across the Wire', bn: '৫. সিরিয়ালাইজেশন দরজা: সীমানা পারাপারে প্রপসের শর্ত' } },
    {
      type: 'para',
      text: {
        en: 'When a Server Component passes props to a Client Component, those props must travel across the network. Therefore, all props passed across the server-client boundary MUST be JSON-serializable (strings, numbers, booleans, plain objects, arrays). Passing JavaScript functions or classes across the boundary throws a serialization error.',
        bn: 'যখন কোনো সার্ভার কম্পোনেন্ট ক্লায়েন্ট কম্পোনেন্টের কাছে প্রপস পাঠায়, তখন সেই প্রপসগুলোকে ইন্টারনেটের তার পেরিয়ে যেতে হয়। তাই সীমানা পার হওয়া প্রতিটি প্রপসকে অবশ্যই JSON-serializable হতে হবে (স্ট্রিং, সংখ্যা, সাধারণ অবজেক্ট বা অ্যারে)। কোনো ফাংশন বা ক্লাস পাস করলে সাথে সাথে সিরিয়ালাইজেশন এরর আসে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// ✅ VALID: Serializable JSON primitives and plain objects
// <ClientProfile user={{ id: 101, name: "Arif" }} isPremium={true} />

// ❌ INVALID: Functions cannot be serialized across network boundary!
// <ClientProfile onClick={() => { console.log("error"); }} />
// Error: Functions cannot be passed directly to Client Components unless they are Server Actions!

console.log("Serialization boundary strictly audited at compile and runtime");
// Output: Serialization boundary strictly audited at compile and runtime`,
      caption: {
        en: 'Props crossing the server-to-client boundary must be serializable over network protocols.',
        bn: 'সার্ভার থেকে ক্লায়েন্টে পাঠানো প্রপসকে নেটওয়ার্কে পাঠানোর উপযোগী হতে হয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Interleaved Composition: Server Components as Children', bn: '৬. মিশ্র কম্পোজিশন: ক্লায়েন্ট কম্পোনেন্টের ভেতরে সার্ভার কম্পোনেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'A client-side file cannot directly import server modules because doing so pulls backend dependencies into browser bundles. However, an interactive parent can accept a server-rendered node as `props.children`. The backend executes first, passing down its serialized output safely.',
        bn: 'একটি ক্লায়েন্ট ফাইল সরাসরি সার্ভার মডিউল ইমপোর্ট করতে পারে না, কারণ এতে ব্রাউজারের বান্ডেলে ব্যাকএন্ডের কোড চলে আসে। তবে কোনো ইন্টারেক্টিভ প্যারেন্ট সার্ভারে তৈরি নোডকে `props.children` হিসেবে গ্রহণ করতে পারে। ফলে সার্ভার আগে রেন্ডার হয়ে নির্বিঘ্নে তার আউটপুট নিচে পাঠাতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Client Component (Provides interactive drawer animation):
// "use client";
function ClientDrawer({ children }) {
  // Receives pre-rendered Server Component output via children!
  return <div className="interactive-drawer">{children}</div>;
}

// Server Component (Parent page combines both):
function PageLayout() {
  return (
    <ClientDrawer>
      {/* Heavy Server Component executed on server: */}
      <ServerProductCatalog />
    </ClientDrawer>
  );
}

console.log("Interleaved pattern allows Server Components inside Client wrappers");
// Output: Interleaved pattern allows Server Components inside Client wrappers`,
      caption: {
        en: 'Passing Server Components via children bypasses the client import constraint.',
        bn: 'children প্রপসের মাধ্যমে ক্লায়েন্ট উপাদানের ভেতরেও সার্ভার কম্পোনেন্ট রাখা যায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Server Actions: Mutating Server State with "use server"', bn: '৭. সার্ভার অ্যাকশনস: "use server" দিয়ে ডেটাবেস পরিবর্তন' } },
    {
      type: 'para',
      text: {
        en: 'Server Actions are asynchronous functions marked with "use server". They execute exclusively on the server, even when invoked from a client form button. React automatically handles the POST request, serialized arguments, and revalidates cached server data with revalidatePath.',
        bn: 'Server Actions হলো "use server" চিহ্নিত কিছু বিশেষ async ফাংশন যা ক্লায়েন্ট থেকে কল করলেও কেবল সার্ভারেই এক্সিকিউট হয়। রিঅ্যাক্ট স্বয়ংক্রিয়ভাবে পেছনের POST রিকোয়েস্ট পাঠায় এবং কাজ শেষ হলে ক্যাশ করা পেজ নতুন করে রিভ্যালিডেট করে সর্বশেষ ডেটা দেখায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Server Action defined with "use server":
async function updateEmailAction(formData) {
  "use server";
  const newEmail = formData.get("email");
  console.log("Writing new email to database:", newEmail);
  return { success: true };
}

function ProfileForm() {
  return (
    <form action={updateEmailAction}>
      <input name="email" defaultValue="dev@codeshikhon.com" />
      <button type="submit">Update Record</button>
    </form>
  );
}

console.log(typeof updateEmailAction); // "function" (Callable server RPC)`,
      caption: {
        en: 'Server actions execute secure mutations on the server with automated client coordination.',
        bn: 'সার্ভার অ্যাকশনস ক্লায়েন্টের সাথে স্বয়ংক্রিয় সমন্বয় রেখে সার্ভারে নিরাপদ কাজ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Progressive Streaming: The React Flight Protocol', bn: '৮. প্রগ্রেসিভ স্ট্রিমিং: রিঅ্যাক্ট ফ্লাইট প্রোটোকল' } },
    {
      type: 'para',
      text: {
        en: 'Server Components stream to the browser using the React Flight protocol: a compact, streamable text format describing the rendered component tree and placeholder slots. The browser parses Flight streams progressively, mounting completed components without waiting for the full response to finish.',
        bn: 'সার্ভার কম্পোনেন্ট ব্রাউজারে ডেটা পাঠাতে React Flight প্রোটোকল ব্যবহার করে: যা একটি বিশেষ স্ট্রিমিং টেক্সট ফরম্যাট। ব্রাউজার পুরো পেজের অপেক্ষা না করে এই স্ট্রিম থেকে একে একে উপাদান গ্রহণ করে পর্দায় সাজাতে থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Conceptual React Flight Stream Output:
// M1:{"id":"./Button.client.js","name":"default"}
// J0:["$","div",null,{"children":[["$","$L1",null,{"title":"Buy Now"}]]}]

console.log("Flight protocol streams UI descriptions and client chunk references");
// Output: Flight protocol streams UI descriptions and client chunk references`,
      caption: {
        en: 'The Flight wire format streams component trees and client module coordinates.',
        bn: 'ফ্লাইট প্রোটোকল কম্পোনেন্ট ট্রি এবং ক্লায়েন্ট মডিউলের অবস্থান স্ট্রিম করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Credential Security: Keeping Secrets on the Server', bn: '৯. তথ্যের নিরাপত্তা: গোপন চাবি সার্ভারে রাখা' } },
    {
      type: 'para',
      text: {
        en: 'In traditional React client applications, environment variables (API keys, database credentials) risk being leaked into public JavaScript bundles. In Server Components, private environment variables (process.env.DB_SECRET) execute on the server and are NEVER exposed to the browser.',
        bn: 'সাধারণ ক্লায়েন্ট রিঅ্যাক্ট অ্যাপে গোপন পাসওয়ার্ড বা এপিআই কি অসাবধানতাবশত জাভাস্ক্রিপ্ট বান্ডলে ফাঁস হয়ে যাওয়ার ভয় থাকে। কিন্তু সার্ভার কম্পোনেন্টে প্রসেস এনভায়রনমেন্টের সমস্ত গোপন ডেটা কেবল সার্ভারেই থাকে এবং ব্রাউজারে কখনো পৌঁছায় না।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `async function PaymentSummary() {
  // Secure server-only environment variable:
  const secretKey = "sk_live_private_key_never_leaked";
  console.log("Server component safely authenticated using secret key length:", secretKey.length);

  return <div>Payment Gateway Verified</div>;
}

const summary = await PaymentSummary();
console.log(summary.props.children); // "Payment Gateway Verified"`,
      caption: {
        en: 'Server components execute in secure backend contexts without exposing credentials.',
        bn: 'সার্ভার কম্পোনেন্ট কোনো গোপন ডেটা ফাঁস না করেই নিরাপদে কাজ সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The React Compiler Era: Automated Memoization', bn: '১০. রিঅ্যাক্ট কম্পাইলারের যুগ: স্বয়ংক্রিয় মেমোইজেশন' } },
    {
      type: 'para',
      text: {
        en: 'The modern React Compiler (formerly React Forget) automatically memoizes components, props, and calculated values at build time. It eliminates the manual mental overhead of writing useMemo, useCallback, and React.memo, optimizing re-render boundaries automatically with mathematical precision.',
        bn: 'আধুনিক React Compiler (আগে যার নাম ছিল React Forget) বিল্ডের সময়ই নিজে থেকে সমস্ত কম্পোনেন্ট, প্রপস এবং হিসাব করা মান মেমোইজ করে ফেলে। ফলে ডেভেলপারকে আর নিজে হাতে useMemo, useCallback বা React.memo লিখে সময় নষ্ট করতে হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// With React Compiler: Write idiomatic, clean JavaScript!
function AutoOptimizedComponent({ items, multiplier }) {
  // Compiler automatically memoizes this expensive transformation:
  const processed = items.map((i) => i * multiplier);

  // Compiler automatically stabilizes this callback reference:
  const handleClick = () => { console.log(processed.length); };

  return <button onClick={handleClick}>Count: {processed.length}</button>;
}

console.log(typeof AutoOptimizedComponent); // "function"`,
      caption: {
        en: 'The React Compiler automates memoization, making manual useMemo and useCallback obsolete.',
        bn: 'রিঅ্যাক্ট কম্পাইলার নিজে থেকেই কোড অপ্টিমাইজ করায় ম্যানুয়াল মেমোইজেশন আর লাগে না।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-ser-ex1',
      kind: 'predict',
      topic: 'react: client component boundary directive',
      question: {
        en: 'What directive must be placed at the very top of a file to declare a component and its imports as a Client Component?',
        bn: 'একটি কম্পোনেন্টকে ক্লায়েন্ট কম্পোনেন্ট হিসেবে ঘোষণা করতে ফাইলের একদম শীর্ষে কোন নির্দেশিকাটি লিখতে হয়?'
      },
      code: `/* Client boundary declaration */
/* "________"; */`,
      answer: 'use client',
      accept: ['use client', '"use client"', "'use client'"],
      hint: {
        en: 'Directive starting with use.',
        bn: 'use দিয়ে শুরু হওয়া নির্দেশিকা।'
      },
      explanation: {
        en: 'The "use client" directive marks the boundary between server and client components in modern React applications.',
        bn: '"use client" আধুনিক রিঅ্যাক্টে সার্ভার এবং ক্লায়েন্ট কম্পোনেন্টের মধ্যকার সীমানা নির্ধারণ করে।'
      }
    },
    {
      id: 'rea-ser-ex2',
      kind: 'mcq',
      topic: 'react: server component bundle weight',
      question: {
        en: 'How much JavaScript does a React Server Component add to the client-side browser bundle?',
        bn: 'একটি React Server Component ব্রাউজারে পাঠানো ক্লায়েন্ট বান্ডলের সাইজে কতটুকু জাভাস্ক্রিপ্ট যোগ করে?'
      },
      options: [
        { en: '0 bytes (Server components execute exclusively on the server and ship no component code to the client)', bn: '০ বাইট (সার্ভার কম্পোনেন্ট কেবল সার্ভারেই চলে এবং ব্রাউজারে কোনো কোড পাঠায় না)' },
        { en: '100 KB per component', bn: 'প্রতি উপাদানে ১০০ কিলোবাইট' },
        { en: '5 MB', bn: '৫ মেগাবাইট' },
        { en: 'Exactly the size of the React library', bn: 'রিঅ্যাক্ট লাইব্রেরির হুবহু সমান' }
      ],
      answer: 0,
      hint: {
        en: 'Zero bytes of JavaScript.',
        bn: 'শূন্য বাইট জাভাস্ক্রিপ্ট।'
      },
      explanation: {
        en: 'Server Components execute only on the server, sending rendered UI descriptions over the wire with zero client JavaScript bundle overhead.',
        bn: 'সার্ভার কম্পোনেন্ট শুধু সার্ভারে রান করায় ক্লায়েন্ট ব্রাউজারে কোনো বাড়তি জাভাস্ক্রিপ্ট কোড ডাউনলোড করতে হয় না।'
      }
    },
    {
      id: 'rea-ser-ex3',
      kind: 'mcq',
      topic: 'react: props serialization across boundary',
      question: {
        en: 'What restriction applies to props passed from a Server Component across the boundary to a Client Component?',
        bn: 'সার্ভার কম্পোনেন্ট থেকে ক্লায়েন্ট কম্পোনেন্টে প্রপস পাঠানোর সময় কোন সীমাবদ্ধতা প্রযোজ্য হয়?'
      },
      options: [
        { en: 'Props must be JSON-serializable primitives or plain objects (functions and classes cannot cross the network boundary)', bn: 'প্রপসগুলোকে অবশ্যই JSON-সিরিয়ালাইজেবল সাধারণ মান বা অবজেক্ট হতে হবে (ফাংশন বা ক্লাস পাঠানো যায় না)' },
        { en: 'Props must only contain numbers', bn: 'শুধু সংখ্যা হতে হবে' },
        { en: 'Props cannot exceed 10 characters', bn: '১০ অক্ষরের বেশি হওয়া যাবে না' },
        { en: 'Props must be encrypted in base64', bn: 'বেস৬৪-এ এনক্রিপ্ট হতে হবে' }
      ],
      answer: 0,
      hint: {
        en: 'Must be JSON-serializable to travel over the wire.',
        bn: 'তারের মধ্য দিয়ে যাওয়ার জন্য JSON-সিরিয়ালাইজেবল হতে হবে।'
      },
      explanation: {
        en: 'Because props cross the network boundary from server to client, they must be serializable into JSON format.',
        bn: 'যেহেতু ডেটা নেটওয়ার্কের মধ্য দিয়ে যায়, তাই প্রপসকে অবশ্যই JSON ফরম্যাটে রূপান্তরযোগ্য হতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'rea-server-quiz',
    title: { en: 'React Server Components Quiz', bn: 'রিঅ্যাক্ট সার্ভার কম্পোনেন্টস কুইজ' },
    questions: [
      {
        id: 'rsq1',
        kind: 'mcq',
        topic: 'react: server actions directive',
        question: {
          en: 'Which directive defines an asynchronous function as a Server Action that can be called from client forms?',
          bn: 'কোন নির্দেশিকাটি একটি async ফাংশনকে Server Action হিসেবে সংজ্ঞায়িত করে যা ক্লায়েন্ট ফর্ম থেকে কল করা যায়?'
        },
        options: [
          { en: '"use server"', bn: '"use server"' },
          { en: '"use client"', bn: '"use client"' },
          { en: '"use action"', bn: '"use action"' },
          { en: '"use backend"', bn: '"use backend"' }
        ],
        answer: 0,
        hint: {
          en: '"use server" marks server actions.',
          bn: '"use server" সার্ভার অ্যাকশন চিহ্নিত করে।'
        },
        explanation: {
          en: 'The "use server" directive declares a server entry point that can be executed directly from the client via automated RPC.',
          bn: '"use server" একটি সার্ভার অ্যাকশন তৈরি করে যা ক্লায়েন্ট থেকে সহজে সার্ভার অপারেশন চালাতে সাহায্য করে।'
        }
      },
      {
        id: 'rsq2',
        kind: 'mcq',
        topic: 'react: react compiler benefit',
        question: {
          en: 'What is the main advantage of the React Compiler (React Forget)?',
          bn: 'রিঅ্যাক্ট কম্পাইলারের (React Forget) প্রধান সুবিধা কোনটি?'
        },
        options: [
          { en: 'It automatically memoizes components and values at compile time, eliminating the need to write manual useMemo and useCallback', bn: 'এটি কম্পাইল করার সময় নিজে থেকেই কোড মেমোইজ করে ফেলে, ফলে ডেভেলপারকে আর নিজে হাতে useMemo ও useCallback লিখতে হয় না' },
          { en: 'It turns JavaScript into Python', bn: 'জাভাস্ক্রিপ্টকে পাইথনে রূপান্তর করে' },
          { en: 'It makes databases free', bn: 'ডেটাবেস ফ্রি করে দেয়' },
          { en: 'It deletes all CSS', bn: 'সব সিএসএস মুছে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Automatic memoization at build time.',
          bn: 'বিল্ড টাইমে স্বয়ংক্রিয় মেমোইজেশন।'
        },
        explanation: {
          en: 'The React Compiler analyzes code semantics to insert fine-grained memoization automatically, simplifying component logic.',
          bn: 'রিঅ্যাক্ট কম্পাইলার কোডের প্রবাহ বিশ্লেষণ করে নিখুঁতভাবে স্বয়ংক্রিয় মেমোইজেশন যোগ করে, ফলে কোড লেখা অনেক সহজ হয়।'
        }
      },
      {
        id: 'rsq3',
        kind: 'mcq',
        topic: 'react: RSC client bundle weight',
        question: {
          en: 'What is the impact of React Server Components on client JavaScript bundle weight?',
          bn: 'ক্লায়েন্ট জাভাস্ক্রিপ্ট বান্ডেল আকারের ওপর React Server Components-এর প্রভাব কী?'
        },
        options: [
          { en: 'They add 0 bytes of JavaScript to the client bundle because they execute entirely on the server', bn: 'ক্লায়েন্ট বান্ডেলে 0 বাইট জাভাস্ক্রিপ্ট যোগ করে কারণ এগুলো সম্পূর্ণ সার্ভারে রান হয়' },
          { en: 'They increase client bundle weight by 50 percent', bn: 'ক্লায়েন্ট বান্ডেল 50 শতাংশ বাড়িয়ে দেয়' },
          { en: 'They require downloading the entire Node.js runtime', bn: 'সম্পূর্ণ Node.js ডাউনলোড করতে হয়' },
          { en: 'They eliminate the need for an internet connection', bn: 'ইন্টারনেট সংযোগের প্রয়োজন মেটায়' }
        ],
        answer: 0,
        hint: {
          en: 'Zero client bundle footprint.',
          bn: 'ক্লায়েন্টে শূন্য বান্ডেল খরচ।'
        },
        explanation: {
          en: 'Because Server Components only emit rendered UI output, their heavy third-party dependencies never get bundled into client assets.',
          bn: 'সার্ভার কম্পোনেন্ট কেবল রেন্ডার হওয়া আউটপুট পাঠায়, যার ফলে তাদের বিশাল ডিপেন্ডেন্সিগুলো কখনো ব্যবহারকারীর ব্রাউজারে ডাউনলোড হয় না।'
        }
      },
      {
        id: 'rsq4',
        kind: 'mcq',
        topic: 'react: RSC serialization boundary',
        question: {
          en: 'Why must props passed from a Server Component to a Client Component be serializable?',
          bn: 'সার্ভার কম্পোনেন্ট থেকে ক্লায়েন্ট কম্পোনেন্টে পাঠানো প্রপস কেন অবশ্যই সিরিয়ালাইজযোগ্য হতে হয়?'
        },
        options: [
          { en: 'Because they cross the network boundary as JSON/Flight streams, so functions and class instances cannot be transmitted', bn: 'কারণ এগুলো নেটওয়ার্কের মধ্য দিয়ে JSON বা ফ্লাইট স্ট্রিমে যায়, ফলে ফাংশন বা ক্লাস ইনস্ট্যান্স সরাসরি পাঠানো যায় না' },
          { en: 'Because browsers only understand numbers', bn: 'কারণ ব্রাউজার শুধু সংখ্যা বোঝে' },
          { en: 'To satisfy CSS stylesheet specifications', bn: 'সিএসএস শর্ত পূরণ করতে' },
          { en: 'Because of HTML doctype rules', bn: 'এইচটিএমএল ডকটাইপ নিয়মের কারণে' }
        ],
        answer: 0,
        hint: {
          en: 'Data crosses network wire as serialized stream.',
          bn: 'ডেটা নেটওয়ার্কের তার দিয়ে স্ট্রিমে প্রবাহিত হয়।'
        },
        explanation: {
          en: 'The client-server boundary is a real network boundary. Non-serializable constructs like event handler closures or database connections cannot cross over the wire.',
          bn: 'সার্ভার ও ক্লায়েন্টের মাঝের সীমানা হলো আসল নেটওয়ার্ক তার। ফাংশন বা অবজেক্টের মতো নন-সিরিয়ালাইজেবল তথ্য তার দিয়ে পাঠানো অসম্ভব।'
        }
      }
    ]
  }
};
