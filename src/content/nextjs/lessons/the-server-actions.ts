import type { Lesson } from '../../../lib/types';

export const serverActionsLesson: Lesson = {
  slug: 'the-server-actions',
  tech: 'nextjs',
  title: {
    en: 'Server Actions — Forms, Mutations & useOptimistic Updates',
    bn: 'সার্ভার অ্যাকশনস — ফর্ম, মিউটেশন ও useOptimistic আপডেট'
  },
  summary: {
    en: 'Server Actions bring RPC function execution directly to React components without manual API boilerplate. In this lesson, you will master the "use server" directive, build progressively enhanced forms that submit before JavaScript loads, handle server validation errors with useActionState, manage pending states with useFormStatus, and deliver instant UI feedback using useOptimistic.',
    bn: 'সার্ভার অ্যাকশন কোনো বাড়তি এপিআই কোড ছাড়াই সরাসরি রিঅ্যাক্ট কম্পোনেন্ট থেকে সার্ভার ফাংশন চালানোর সুযোগ দেয়। এই পাঠে আপনি "use server" ডিরেক্টিভ, জাভাস্ক্রিপ্ট লোড হওয়ার আগেই কাজ করা প্রগ্রেসিভ ফর্ম, useActionState দিয়ে সার্ভার ভ্যালিডেশন এরর হ্যান্ডলিং, useFormStatus দিয়ে পেন্ডিং স্টেট নিয়ন্ত্রণ এবং useOptimistic দিয়ে তাৎক্ষণিক ইউআই আপডেট গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'server-actions-architecture-overview',
      text: {
        en: 'The Server Actions Execution Architecture',
        bn: 'সার্ভার অ্যাকশনস এক্সিকিউশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you submit a form in modern Next.js, Server Actions allow you to invoke server-side asynchronous functions directly from the client. Marked with the "use server" directive, these functions run exclusively on the backend. Next.js automatically assigns a secure cryptographic endpoint hash to each action, transmitting FormData securely over standard HTTP requests.',
        bn: 'যখন আপনি আধুনিক Next.js-এ কোনো ফর্ম সাবমিট করেন, তখন সার্ভার অ্যাকশনের মাধ্যমে সরাসরি ক্লায়েন্ট থেকে সার্ভার ফাংশন কল করতে পারেন। "use server" ডিরেক্টিভ যুক্ত এই ফাংশনগুলো কেবল ব্যাকএন্ডেই কার্যকর হয়। Next.js স্বয়ংক্রিয়ভাবে প্রতিটি অ্যাকশনকে একটি নিরাপদ ক্রিপ্টোগ্রাফিক হ্যাশ এন্ডপয়েন্ট দেয় এবং স্ট্যান্ডার্ড এইচটিটিপি রিকোয়েস্টের মাধ্যমে ডাটা পাঠায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '"use server" Directive',
          def: {
            en: 'An inline or module-level directive declaring that an asynchronous function runs exclusively on the server.',
            bn: 'একটি ডিরেক্টিভ যা কোনো অ্যাসিনক্রোনাস ফাংশনকে শুধুমাত্র সার্ভারে চলার উপযোগী সার্ভার অ্যাকশন হিসেবে ঘোষণা করে।'
          }
        },
        {
          term: 'Progressive Enhancement',
          def: {
            en: 'The capability of HTML forms to submit data and execute server mutations even if client-side JavaScript has not yet loaded.',
            bn: 'এইচটিএমএল ফর্মের এমন ক্ষমতা যার মাধ্যমে ব্রাউজারে জাভাস্ক্রিপ্ট লোড না হলেও ডাটা সাবমিট হয়ে সার্ভারে কাজ সম্পন্ন হয়।'
          }
        },
        {
          term: 'useActionState (useFormState)',
          def: {
            en: 'A React hook that tracks the return value, form state, and pending execution of a Server Action across submissions.',
            bn: 'একটি রিঅ্যাক্ট হুক যা ফর্ম সাবমিশনের পর সার্ভার অ্যাকশনের ফলাফল, ত্রুটি এবং চলমান অবস্থা পর্যবেক্ষণ করে।'
          }
        },
        {
          term: 'useOptimistic Hook',
          def: {
            en: 'A React hook allowing the client UI to immediately render an anticipated state change before server confirmation arrives.',
            bn: 'একটি রিঅ্যাক্ট হুক যা সার্ভার থেকে উত্তর আসার আগেই স্ক্রিনে তাৎক্ষণিকভাবে সম্ভাব্য পরিবর্তনের ফলাফল দেখিয়ে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'server-actions-hooks-matrix',
      text: {
        en: 'Form Mutation Hooks and Directives Matrix',
        bn: 'ফর্ম মিউটেশন হুক ও ডিরেক্টিভ ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feature / Hook', bn: 'হুক বা ডিরেক্টিভ' },
        { en: 'Component Execution Context', bn: 'কোথায় কার্যকর হয়' },
        { en: 'Primary Architectural Role', bn: 'প্রধান ভূমিকা' }
      ],
      rows: [
        [
          { en: '"use server" action', bn: '"use server" অ্যাকশন' },
          { en: 'Server only (backend environment)', bn: 'কেবলমাত্র সার্ভারে (ব্যাকএন্ড)' },
          { en: 'Executing database writes, billing calls, sending emails', bn: 'ডাটাবেজে নতুন তথ্য লেখা, পেমেন্ট ও ইমেইল পাঠানো' }
        ],
        [
          { en: 'useActionState(action, initial)', bn: 'useActionState(action, initial)' },
          { en: 'Client Component ("use client")', bn: 'ক্লায়েন্ট কম্পোনেন্টে ("use client")' },
          { en: 'Holding server validation errors and form response state', bn: 'সার্ভারের ভ্যালিডেশন এরর ও রেসপন্স স্টেট সংরক্ষণ' }
        ],
        [
          { en: 'useFormStatus()', bn: 'useFormStatus()' },
          { en: 'Client Component inside <form>', bn: 'ফর্মের ভেতরের ক্লায়েন্ট কম্পোনেন্টে' },
          { en: 'Disabling submit buttons while request is pending', bn: 'রিকোয়েস্ট চলাকালীন সাবমিট বাটন নিষ্ক্রিয় রাখা' }
        ],
        [
          { en: 'useOptimistic(state, updateFn)', bn: 'useOptimistic(state, updateFn)' },
          { en: 'Client Component ("use client")', bn: 'ক্লায়েন্ট কম্পোনেন্টে ("use client")' },
          { en: 'Instant UI updates (like toggling likes) before server reply', bn: 'সার্ভার উত্তরের অপেক্ষায় না থেকে সাথে সাথে লাইক বাটন আপডেট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'server-action-simulation-code',
      text: {
        en: 'Working Server Action and Optimistic State Simulation',
        bn: 'কার্যকরী সার্ভার অ্যাকশন ও অপটিমিস্টিক স্টেট সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Server Action Execution with Optimistic UI Update
class MockServerActionDispatcher {
  constructor() {
    this.databaseCart = [{ id: 1, title: 'Ergonomic Desk', quantity: 1 }];
  }

  // 1. Client optimistic update applied immediately
  applyOptimistic(currentItems, newItem) {
    return [...currentItems, { ...newItem, pending: true }];
  }

  // 2. Server Action executes on backend
  async addToCartAction(formData) {
    const title = formData.get('title');
    const quantity = parseInt(formData.get('quantity') || '1', 10);

    if (!title || quantity <= 0) {
      return { success: false, error: 'Invalid product details' };
    }

    const createdRecord = { id: 2, title, quantity };
    this.databaseCart.push(createdRecord);
    return { success: true, item: createdRecord };
  }
}

const dispatcher = new MockServerActionDispatcher();

// Step A: Client triggers optimistic UI update
const optimisticItems = dispatcher.applyOptimistic(dispatcher.databaseCart, {
  id: 2,
  title: 'Monitor Arm',
  quantity: 1
});

// Step B: Server Action completes mutation
const mockFormData = new Map();
mockFormData.set('title', 'Monitor Arm');
mockFormData.set('quantity', '1');

const result = await dispatcher.addToCartAction(mockFormData);

console.log('Optimistic items displayed immediately:', optimisticItems.length);
// -> Optimistic items displayed immediately: 2
console.log('Server action execution success:', result.success);
// -> Server action execution success: true
console.log('Verified database cart items count:', dispatcher.databaseCart.length);
// -> Verified database cart items count: 2
console.log('Newly inserted item identifier:', result.item.id);
// -> Newly inserted item identifier: 2`,
      caption: {
        en: 'Optimistic UI displays 2 items immediately before Server Action confirms item 2 in database',
        bn: 'সার্ভার অ্যাকশন ডাটাবেজে আইটেম ২ নিশ্চিত করার পূর্বেই অপটিমিস্টিক ইউআই তাৎক্ষণিকভাবে ২টি আইটেম প্রদর্শন করছে'
      }
    },
    {
      type: 'heading',
      id: 'server-action-discipline-rules',
      text: {
        en: 'Server Action Security and Form Discipline Rules',
        bn: 'সার্ভার অ্যাকশন সিকিউরিটি ও ফর্ম শৃঙ্খলা নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Treat every Server Action as a public HTTP POST endpoint. Even when called directly from a React component, malicious actors can invoke Server Actions using automated scripts. Always authenticate the current session, authorize the user role, and validate incoming form data using a schema validator like Zod before executing database mutations.',
        bn: 'প্রতিটি সার্ভার অ্যাকশনকে একটি উন্মুক্ত HTTP POST এন্ডপয়েন্ট হিসেবে বিবেচনা করুন। সরাসরি রিঅ্যাক্ট কম্পোনেন্ট থেকে ডাকা হলেও যেকোনো বহিরাগত স্ক্রিপ্ট এটি চালাতে পারে। তাই ডাটাবেজে পরিবর্তনের পূর্বে সর্বদা বর্তমান সেশন অথেনটিকেশন, রোল পারমিশন এবং Zod-এর মতো লাইব্রেরি দিয়ে ইনপুট ডাটা কঠোরভাবে যাচাই করা উচিত।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Validate Inputs with Zod: Never trust raw FormData; parse fields through a strict Zod schema before inserting records into the database.',
          bn: '১. Zod দিয়ে ইনপুট যাচাই: FormData-কে অন্ধভাবে বিশ্বাস করবেন না; ডাটাবেজে সেভ করার পূর্বে Zod স্কিমা দিয়ে সব ফিল্ড পরীক্ষা করুন।'
        },
        {
          en: '2. Check Authorization Inside Action: Verify that the caller possesses sufficient permissions before executing sensitive operations.',
          bn: '২. অ্যাকশনের ভেতর পারমিশন চেক: অ্যাকশনের শুরুতে অবশ্যই যাচাই করুন যে বর্তমান ইউজারের সংশ্লিষ্ট পরিবর্তন করার বৈধ অধিকার আছে কিনা।'
        },
        {
          en: '3. Revalidate Stale Caches: Always call revalidatePath() or revalidateTag() after successful mutations to purge stale cached pages.',
          bn: '৩. ক্যাশ রিভ্যালিডেশন: মিউটেশন সফল হলে তাৎক্ষণিকভাবে revalidatePath বা revalidateTag ডেকে ক্যাশ রিফ্রেশ করুন।'
        },
        {
          en: '4. Button Pending with useFormStatus: Place your submit button in a small client component using useFormStatus to display spinners during submission.',
          bn: '৪. useFormStatus দিয়ে বাটন হ্যান্ডলিং: সাবমিট বাটনে useFormStatus ব্যবহার করে রিকোয়েস্ট চলাকালীন বাটন ডিসেবল ও স্পিনার দেখান।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-act-ex1',
      kind: 'mcq',
      topic: 'purpose of use server directive in server actions',
      question: {
        en: 'What does the "use server" directive declare when placed at the top of an asynchronous function or file?',
        bn: 'কোনো অ্যাসিনক্রোনাস ফাংশন বা ফাইলের শুরুতে "use server" ডিরেক্টিভ দিলে কী বোঝায়?'
      },
      options: [
        {
          en: 'It declares the function as a Server Action that executes exclusively on the server and can be invoked securely from client-side forms or event handlers',
          bn: 'এটি ফাংশনটিকে একটি সার্ভার অ্যাকশন হিসেবে ঘোষণা করে যা কেবল সার্ভারে চলে এবং ক্লায়েন্ট ফর্ম বা ইভেন্ট থেকে সরাসরি ডাকা যায়'
        },
        {
          en: 'It installs a new server operating system on the computer',
          bn: 'এটি কম্পিউটারে একটি নতুন সার্ভার অপারেটিং সিস্টেম ইনস্টল করে'
        },
        {
          en: 'It forces the user browser to turn off JavaScript',
          bn: 'এটি ব্যবহারকারীর ব্রাউজারে জাভাস্ক্রিপ্ট বন্ধ করে দেয়'
        },
        {
          en: 'It converts the Next.js app into a static WordPress site',
          bn: 'এটি নেক্সট.জেএস অ্যাপকে ওয়ার্ডপ্রেস সাইটে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '"use server" marks callable server-side functions called Server Actions.',
        bn: '"use server" সার্ভার-সাইড ফাংশন বা সার্ভার অ্যাকশন নির্দেশ করে।'
      },
      explanation: {
        en: '"use server" marks a function as an entry point for server execution. Next.js creates a behind-the-scenes endpoint allowing client components to invoke it seamlessly.',
        bn: '"use server" কোনো ফাংশনকে সার্ভার অ্যাকশন বানায়। Next.js নেপথ্যে একটি নিরাপদ এন্ডপয়েন্ট তৈরি করে যার ফলে ক্লায়েন্ট থেকে তা সরাসরি কার্যকর হয়।'
      }
    },
    {
      id: 'nx-act-ex2',
      kind: 'mcq',
      topic: 'progressive enhancement in nextjs forms',
      question: {
        en: 'How does passing a Server Action directly to an HTML form (<form action={myAction}>) achieve progressive enhancement?',
        bn: 'একটি এইচটিএমএল ফর্মে সরাসরি সার্ভার অ্যাকশন (<form action={myAction}>) যুক্ত করলে কীভাবে প্রগ্রেসিভ এনহ্যান্সমেন্ট অর্জিত হয়?'
      },
      options: [
        {
          en: 'The form functions seamlessly using native browser HTTP POST navigation even before client JavaScript has finished downloading, and enhances into a smooth background submission once hydrated',
          bn: 'ব্রাউজারে ক্লায়েন্ট জাভাস্ক্রিপ্ট ডাউনলোড না হলেও ফর্মটি সাধারণ ব্রাউজার HTTP POST সাবমিশনের মাধ্যমে কাজ করে, এবং জাভাস্ক্রিপ্ট লোড হলে রিফ্রেশহীন ব্যাকগ্রাউন্ড কলে উন্নীত হয়'
        },
        {
          en: 'It makes the form immune to all computer viruses',
          bn: 'এটি ফর্মটিকে সমস্ত কম্পিউটার ভাইরাস থেকে নিরাপদ করে'
        },
        {
          en: 'It converts the form into a Google Spreadsheet',
          bn: 'এটি ফর্মটিকে গুগল স্প্রেডশিটে বদলে দেয়'
        },
        {
          en: 'Forms cannot submit without JavaScript under any circumstance',
          bn: 'কোনো অবস্থাতেই জাভাস্ক্রিপ্ট ছাড়া ফর্ম সাবমিট করা সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Progressive enhancement ensures core form submissions succeed before JavaScript loads.',
        bn: 'প্রগ্রেসিভ এনহ্যান্সমেন্টের ফলে জাভাস্ক্রিপ্ট লোড হওয়ার আগেও ফর্ম সাবমিশন সফল হয়।'
      },
      explanation: {
        en: 'Next.js Server Actions leverage native HTML form actions. If JavaScript is delayed or disabled, submitting the form performs a standard browser POST request handled by the server.',
        bn: 'সার্ভার অ্যাকশন সাধারণ এইচটিএমএল ফর্মের সক্ষমতা কাজে লাগায়। ধীরগতির ইন্টারনেটে জাভাস্ক্রিপ্ট আসার আগেও ফর্ম সাবমিট করলে সার্ভারে গিয়ে ডাটা নিখুঁতভাবে সেভ হয়।'
      }
    },
    {
      id: 'nx-act-ex3',
      kind: 'mcq',
      topic: 'useFormStatus pending state location requirement',
      question: {
        en: 'Why must the "useFormStatus()" hook be called from inside a child component nested within the <form>, rather than in the component rendering the <form> itself?',
        bn: '"useFormStatus()" হুকটিকে সরাসরি <form> থাকা মূল কম্পোনেন্টে না ডেকে ফর্মের ভেতরের একটি চাইল্ড কম্পোনেন্টে কেন ডাকতে হয়?'
      },
      options: [
        {
          en: 'useFormStatus relies on React Context provided by the parent <form> element; it can only read the pending status when called from a component nested inside that form context',
          bn: 'useFormStatus প্যারেন্ট <form> উপাদান থেকে সরবরাহ করা রিঅ্যাক্ট কনটেক্সটের ওপর নির্ভর করে; তাই ফর্মের ভেতরের চাইল্ড কম্পোনেন্ট থেকেই কেবল এটি পেন্ডিং অবস্থা পড়তে পারে'
        },
        {
          en: 'To prevent CSS stylesheet collisions',
          bn: 'সিএসএস ফাইলের মাঝে সংঘর্ষ এড়ানোর জন্য'
        },
        {
          en: 'Because React 19 removed support for HTML buttons',
          bn: 'কারণ রিঅ্যাক্ট ১৯ এইচটিএমএল বাটন সুবিধা তুলে নিয়েছে'
        },
        {
          en: 'useFormStatus can only be called from Python scripts',
          bn: 'useFormStatus কেবল পাইথন স্ক্রিপ্ট থেকেই কল করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'useFormStatus reads from the React Context created by the parent form.',
        bn: 'useFormStatus প্যারেন্ট ফর্মের রিঅ্যাক্ট কনটেক্সট থেকে তথ্য সংগ্রহ করে।'
      },
      explanation: {
        en: 'Like all context-dependent hooks, useFormStatus must be executed inside the provider subtree. Creating a separate <SubmitButton /> component nested within <form> fulfills this requirement.',
        bn: 'কনটেক্সট হুকগুলো সর্বদা তার প্রোভাইডারের ভেতরে থাকতে হয়। তাই ফর্মের ভেতরে আলাদা <SubmitButton /> চাইল্ড কম্পোনেন্ট বানিয়ে তাতে useFormStatus ডাকা হয়।'
      }
    },
    {
      id: 'nx-act-ex4',
      kind: 'mcq',
      topic: 'useOptimistic instant feedback benefits',
      question: {
        en: 'What architectural problem does the "useOptimistic()" hook solve in user-facing web applications?',
        bn: 'ওয়েব অ্যাপ্লিকেশনে "useOptimistic()" হুকটি ব্যবহারকারীর অভিজ্ঞতার কোন জটিল সমস্যা দূর করে?'
      },
      options: [
        {
          en: 'It eliminates perceivable network latency by rendering the expected mutation result (such as incrementing a like count or adding a message) immediately, before the server finishes processing the request',
          bn: 'এটি নেটওয়ার্ক ল্যাটেন্সির অস্বস্তি দূর করে সার্ভার থেকে কনফার্মেশন আসার আগেই সম্ভাব্য ফলাফল (যেমন লাইক সংখ্যা বাড়ানো বা মেসেজ যোগ) সাথে সাথে স্ক্রিনে প্রদর্শন করে'
        },
        {
          en: 'It automatically fixes all syntax bugs in the code',
          bn: 'এটি নিজে থেকেই কোডের সমস্ত সিনট্যাক্স ভুল ঠিক করে দেয়'
        },
        {
          en: 'It doubles the upload speed of home Wi-Fi routers',
          bn: 'এটি বাসার ওয়াইফাই রাউটারের আপলোড স্পিড দ্বিগুণ করে দেয়'
        },
        {
          en: 'It prevents users from closing their web browsers',
          bn: 'এটি ব্যবহারকারীকে ব্রাউজার বন্ধ করতে বাধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'useOptimistic provides instant UI feedback before server confirmation.',
        bn: 'useOptimistic সার্ভারের উত্তরের অপেক্ষা না করেই চোখের পলকে ইন্টারফেস আপডেট করে।'
      },
      explanation: {
        en: 'useOptimistic updates the client UI optimistically. If the server action succeeds, the real data takes over seamlessly. If it fails, React automatically rolls back to the previous state.',
        bn: 'useOptimistic সাথে সাথে স্ক্রিন আপডেট করে দেয়। ব্যাকএন্ডে কাজ সফল হলে তা বহাল থাকে, আর কোনো কারণে ব্যর্থ হলে রিঅ্যাক্ট নিজে থেকেই আগের অবস্থায় ফিরিয়ে নেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-server-actions-quiz',
    title: {
      en: 'Next.js Server Actions & Form Mutations Quiz',
      bn: 'Next.js সার্ভার অ্যাকশনস ও ফর্ম মিউটেশন কুইজ'
    },
    questions: [
      {
        id: 'q-server-actions-security-threat-model',
        kind: 'mcq',
        topic: 'Server Actions security threat model and CSRF protection',
        question: {
          en: 'Why must developers implement strict authorization checks inside Server Actions even if the invoking UI button is hidden from unauthorized users?',
          bn: 'অননুমোদিত ব্যবহারকারীদের চোখে ইউআই বাটন দৃশ্যমান না থাকলেও সার্ভার অ্যাকশনের ভেতরে কঠোর অথরাইজেশন যাচাই কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'Server Actions generate public HTTP POST endpoints that can be invoked directly by external scripts (e.g. curl or Postman) bypassing the client UI completely; hiding the button does not protect the server endpoint',
            bn: 'সার্ভার অ্যাকশন পাবলিক এইচটিটিপি POST এন্ডপয়েন্ট তৈরি করে যা ব্রাউজার বাটন ছাড়াও সরাসরি স্ক্রিপ্ট বা Postman দিয়ে কল করা যায়; তাই বাটন লুকানো কোনো নিরাপত্তা নয়'
          },
          {
            en: 'Hidden buttons automatically trigger themselves every 10 seconds',
            bn: 'লুকানো বাটন নিজে থেকেই প্রতি ১০ সেকেন্ড পর পর কল হতে থাকে'
          },
          {
            en: 'Next.js exposes all user passwords when buttons are hidden',
            bn: 'বাটন লুকালে Next.js সব পাসওয়ার্ড সবার সামনে ফাঁস করে দেয়'
          },
          {
            en: 'Security checks are completely optional in Next.js applications',
            bn: 'Next.js অ্যাপ্লিকেশনে সিকিউরিটি চেক পুরোপুরি ঐচ্ছিক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Client-side UI visibility offers zero backend security against direct HTTP calls.',
          bn: 'ক্লায়েন্টে বাটন লুকিয়ে রাখলে ব্যাকএন্ডের আসল এন্ডপয়েন্ট সুরক্ষিত থাকে না।'
        },
        explanation: {
          en: 'Server Actions are network-accessible endpoints. Anyone can send a POST request with the action ID. You must verify user identity and permissions inside the action body on every call.',
          bn: 'সার্ভার অ্যাকশন হলো উন্মুক্ত নেটওয়ার্ক এন্ডপয়েন্ট। বাটন না দেখেও যে কেউ সরাসরি রিকোয়েস্ট পাঠাতে পারে। তাই ফাংশনের শুরুতে সেশন ও পারমিশন যাচাই করা অপরিহার্য।'
        }
      },
      {
        id: 'q-react19-useactionstate-pattern',
        kind: 'mcq',
        topic: 'useActionState hook structure in React 19 and Next.js 15',
        question: {
          en: 'What tuple does the "const [state, formAction, isPending] = useActionState(serverAction, initialState);" hook return?',
          bn: '"const [state, formAction, isPending] = useActionState(serverAction, initialState);" হুকটি কী কী মান ফেরত দেয়?'
        },
        options: [
          {
            en: 'The current state returned by the action, the wrapped form action handler to pass to <form action={formAction}>, and a boolean indicating whether the submission is currently in flight',
            bn: 'অ্যাকশন থেকে আসা বর্তমান স্টেট, <form action={formAction}>-এ পাস করার মতো অ্যাকশন হ্যান্ডলার এবং রিকোয়েস্টটি এখনো চলমান আছে কিনা তা নির্দেশকারী বুলিয়ান'
          },
          {
            en: 'Three database connection strings for MongoDB',
            bn: 'মঙ্গোডিবির জন্য ৩টি ডাটাবেজ কানেকশন স্ট্রিং'
          },
          {
            en: 'The user computer hardware serial numbers',
            bn: 'ব্যবহারকারীর কম্পিউটারের হার্ডওয়্যারের সিরিয়াল নম্বর'
          },
          {
            en: 'A list of all CSS class names used in the application',
            bn: 'অ্যাপ্লিকেশনে ব্যবহৃত সমস্ত সিএসএস ক্লাসের নামের একটি তালিকা'
          }
        ],
        answer: 0,
        hint: {
          en: 'useActionState returns [state, formAction, isPending].',
          bn: 'useActionState হুক [state, formAction, isPending] এই ৩টি উপাদান ফেরত দেয়।'
        },
        explanation: {
          en: 'useActionState manages server mutation states in React 19. It provides the action result state, the bound form submission trigger, and an isPending flag for loading spinners.',
          bn: 'রিঅ্যাক্ট ১৯-এর useActionState হুকটি বর্তমান ফলাফল, ফর্ম হ্যান্ডলার এবং লোডিং ট্র্যাকিংয়ের জন্য isPending ফ্ল্যাগ প্রদান করে।'
        }
      },
      {
        id: 'q-server-action-revalidation-coupling',
        kind: 'mcq',
        topic: 'revalidating cached paths and tags inside server actions',
        question: {
          en: 'What occurs when you invoke "revalidatePath(\'/dashboard\')" inside a Server Action right after updating a database record?',
          bn: 'ডাটাবেজে পরিবর্তনের ঠিক পরপরই সার্ভার অ্যাকশনে "revalidatePath(\'/dashboard\')" কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Next.js immediately marks the cached data and rendered HTML for the /dashboard route as stale, ensuring that the very next read renders completely fresh data without manual page refreshes',
            bn: 'Next.js সাথে সাথে /dashboard রুটের ক্যাশড ডাটা ও এইচটিএমএল বাতিল ঘোষণা করে, ফলে কোনো ম্যানুয়াল রিফ্রেশ ছাড়াই ইউজার একদম তাজা ডাটা দেখতে পান'
          },
          {
            en: 'The entire server hard drive is reformatted',
            bn: 'পুরো সার্ভারের হার্ডডিস্ক পুনরায় ফরম্যাট হয়ে যায়'
          },
          {
            en: 'All active users are forcefully logged out of the platform',
            bn: 'সব সক্রিয় ব্যবহারকারীকে প্ল্যাটফর্ম থেকে জোরপূর্বক লগআউট করে দেওয়া হয়'
          },
          {
            en: 'revalidatePath deletes the dashboard page source code file',
            bn: 'revalidatePath ড্যাশবোর্ড পেজের সোর্স কোড ফাইল মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'revalidatePath purges the route cache so the subsequent read displays fresh data.',
          bn: 'revalidatePath রুটের পুরনো ক্যাশ মুছে দিয়ে নতুন ডাটা দেখানোর পথ সুগম করে।'
        },
        explanation: {
          en: 'Calling revalidatePath purges the specified route from Next.js server caches. The client seamlessly re-fetches and displays the freshly updated state in the same roundtrip.',
          bn: 'revalidatePath ক্যাশ খালি করে দেয়। একই রিকোয়েস্ট চক্রে ক্লায়েন্ট নতুন ডাটা গ্রহণ করে স্ক্রিন আপডেট করে নেয়।'
        }
      },
      {
        id: 'q-server-action-client-file-restriction',
        kind: 'mcq',
        topic: 'declaring server actions in separate files with "use server" at top',
        question: {
          en: 'Can you declare an inline Server Action directly inside a Client Component ("use client")?',
          bn: 'আপনি কি কোনো ক্লায়েন্ট কম্পোনেন্টের ("use client") ভেতরে সরাসরি ইনলাইন সার্ভার অ্যাকশন ঘোষণা করতে পারেন?'
        },
        options: [
          {
            en: 'No: Server Actions used in Client Components must be imported from a separate dedicated file that has "use server" at the very top of the module',
            bn: 'না: ক্লায়েন্ট কম্পোনেন্টে ব্যবহারের জন্য সার্ভার অ্যাকশনকে অবশ্যই আলাদা একটি ফাইল থেকে ইমপোর্ট করতে হবে যার শীর্ষে "use server" লেখা থাকে'
          },
          {
            en: 'Yes: You can write inline server actions anywhere in any file without restrictions',
            bn: 'হ্যাঁ: যেকোনো ফাইলের ভেতর যেকোনো জায়গায় কোনো বিধিনিষেধ ছাড়াই ইনলাইন সার্ভার অ্যাকশন লেখা যায়'
          },
          {
            en: 'Yes, but only if the function has fewer than 3 lines of code',
            bn: 'হ্যাঁ, তবে কেবল যদি ফাংশনে ৩ লাইনের কম কোড থাকে'
          },
          {
            en: 'Client Components cannot trigger Server Actions under any circumstance',
            bn: 'ক্লায়েন্ট কম্পোনেন্ট কোনোভাবেই সার্ভার অ্যাকশন চালাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Client Components can only use Server Actions imported from "use server" modules.',
          bn: 'ক্লায়েন্ট কম্পোনেন্টে আলাদা "use server" ফাইল থেকে অ্যাকশন ইমপোর্ট করে নিতে হয়।'
        },
        explanation: {
          en: 'In Client Components, you cannot define inline server actions. You must export them from a dedicated actions file (e.g. actions.ts) with "use server" at the top and import them.',
          bn: 'ক্লায়েন্ট কম্পোনেন্টের ভেতরে সরাসরি ইনলাইন সার্ভার অ্যাকশন লেখা যায় না। এর জন্য আলাদা actions.ts ফাইলে "use server" দিয়ে ফাংশন লিখে ক্লায়েন্টে ইমপোর্ট করতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-emergency-court',
    title: {
      en: 'Error Handling & Fault Boundaries — error.tsx, notFound & Fallbacks',
      bn: 'এরর হ্যান্ডলিং ও ফল্ট বাউন্ডারিজ — error.tsx, notFound ও ফলব্যাক'
    }
  }
};
