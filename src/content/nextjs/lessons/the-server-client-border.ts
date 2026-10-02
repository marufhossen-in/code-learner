import type { Lesson } from '../../../lib/types';

export const serverClientBorderLesson: Lesson = {
  slug: 'the-server-client-border',
  tech: 'nextjs',
  title: {
    en: 'Server vs Client Components — The React Server Components Boundary',
    bn: 'সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্টস — রিঅ্যাক্ট সার্ভার কম্পোনেন্টস বাউন্ডারি'
  },
  summary: {
    en: 'React Server Components (RSC) fundamentally transform modern web development. In this lesson, you will master the architectural boundary between Server and Client Components. You will learn why Server Components produce zero client JavaScript bundle, understand the props serialization contract, and use composition to pass Server Components as children into interactive client wrappers.',
    bn: 'রিঅ্যাক্ট সার্ভার কম্পোনেন্টস (RSC) আধুনিক ওয়েব ডেভেলপমেন্টে মৌলিক পরিবর্তন এনেছে। এই পাঠে আপনি সার্ভার ও ক্লায়েন্ট কম্পোনেন্টের মধ্যকার সীমানা গভীরভাবে শিখবেন। সার্ভার কম্পোনেন্টের শূন্য ক্লায়েন্ট বান্ডল সুবিধা, প্রপস সিরিয়ালাইজেশন চুক্তি এবং ক্লায়েন্ট শেলে চিলড্রেন হিসেবে সার্ভার উপাদান পাস করার কম্পোজিশন কৌশল আয়ত্ত করবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'server-client-component-architecture',
      text: {
        en: 'The Server and Client Component Architecture',
        bn: 'সার্ভার ও ক্লায়েন্ট কম্পোনেন্ট আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build components in the Next.js App Router, every component defaults to a React Server Component. Server Components execute exclusively on the server, querying databases and reading files without shipping their library dependencies to the browser. You declare interactive client components by adding the "use client" directive at the top of the file.',
        bn: 'যখন আপনি Next.js অ্যাপ রাউটারে কম্পোনেন্ট তৈরি করেন, তখন প্রতিটি কম্পোনেন্ট ডিফল্টভাবে সার্ভার কম্পোনেন্ট হিসেবে কাজ করে। সার্ভার কম্পোনেন্ট কেবল সার্ভারেই কার্যকর হয় এবং কোনো ভারী লাইব্রেরি ব্রাউজারে না পাঠিয়ে সরাসরি ডাটাবেজ পড়ে। ইন্টারঅ্যাক্টিভ কম্পোনেন্ট তৈরি করতে ফাইলের একদম শুরুতে "use client" ডিরেক্টিভ যোগ করতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'React Server Component (RSC)',
          def: {
            en: 'A React component executed exclusively on the server that sends zero JavaScript bytes to the client browser bundle.',
            bn: 'একটি রিঅ্যাক্ট কম্পোনেন্ট যা কেবল সার্ভারে চলে এবং ক্লায়েন্ট ব্রাউজারে কোনো অতিরিক্ত জাভাস্ক্রিপ্ট বান্ডল পাঠায় না।'
          }
        },
        {
          term: '"use client" Directive',
          def: {
            en: 'A file boundary declaration that marks a module and its imported children for browser hydration and client-side interactivity.',
            bn: 'একটি ফাইল বাউন্ডারি ঘোষণা যা কোনো মডিউল এবং তার চাইল্ড উপাদানগুলোকে ব্রাউজারে হাইড্রেশন ও ইন্টারঅ্যাকশনের উপযোগী করে।'
          }
        },
        {
          term: 'Props Serialization',
          def: {
            en: 'The requirement that data passed across the server-client boundary must be serializable into JSON-compatible wire format.',
            bn: 'সার্ভার থেকে ক্লায়েন্ট কম্পোনেন্টে ডাটা পাঠানোর জন্য সেটিকে JSON-বান্ধব ফরম্যাটে রূপান্তরযোগ্য হওয়ার বাধ্যবাধকতা।'
          }
        },
        {
          term: 'Composition Pattern',
          def: {
            en: 'Nesting Server Components inside Client Components by passing them through the children prop without pulling them into the client bundle.',
            bn: 'সার্ভার কম্পোনেন্টকে ক্লায়েন্ট কম্পোনেন্টের ভেতর children প্রপস হিসেবে পাস করে বান্ডল সাইজ হালকা রাখার কৌশল।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'component-execution-matrix',
      text: {
        en: 'Server versus Client Component Capability Matrix',
        bn: 'সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্টের সক্ষমতা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Capability / Feature', bn: 'ফিচার বা সক্ষমতা' },
        { en: 'Server Component (Default)', bn: 'সার্ভার কম্পোনেন্ট (ডিফল্ট)' },
        { en: 'Client Component ("use client")', bn: 'ক্লায়েন্ট কম্পোনেন্ট ("use client")' }
      ],
      rows: [
        [
          { en: 'Direct Database / File Access', bn: 'ডাটাবেজ ও ফাইল এক্সেস' },
          { en: 'Supported directly with zero security leak', bn: 'সরাসরি সমর্থিত এবং গোপনীয়তা সুরক্ষিত' },
          { en: 'Forbidden (would expose credentials in bundle)', bn: 'নিষিদ্ধ (ক্রেডেনশিয়াল ব্রাউজারে ফাঁস হবে)' }
        ],
        [
          { en: 'React State & Effects (useState, useEffect)', bn: 'রিঅ্যাক্ট স্টেট ও ইফেক্ট' },
          { en: 'Not allowed (stateless server rendering)', bn: 'অননুমোদিত (সার্ভার রেন্ডারিংয়ে স্টেট থাকে না)' },
          { en: 'Fully supported for interactive browser logic', bn: 'ইন্টারঅ্যাক্টিভ ব্রাউজার লজিকের জন্য পুরোপুরি সমর্থিত' }
        ],
        [
          { en: 'Browser APIs (window, localStorage)', bn: 'ব্রাউজার এপিআই' },
          { en: 'Not available on Node/Edge runtime', bn: 'সার্ভার রানটাইমে বিদ্যমান নেই' },
          { en: 'Available inside useEffect and event handlers', bn: 'useEffect ও হ্যান্ডলারে ব্যবহারযোগ্য' }
        ],
        [
          { en: 'Impact on Client JavaScript Bundle', bn: 'ক্লায়েন্ট বান্ডল সাইজের ওপর প্রভাব' },
          { en: '0 KB (zero bytes shipped to browser)', bn: '০ কেবি (ব্রাউজারে কোনো কোড যায় না)' },
          { en: 'Included in browser download bundle', bn: 'ব্রাউজার বান্ডলে যুক্ত হয়ে সাইজ বাড়ায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'bundle-simulation-code',
      text: {
        en: 'Working Serialization Boundary and Bundle Weight Simulation',
        bn: 'কার্যকরী সিরিয়ালাইজেশন বাউন্ডারি ও বান্ডল ওজন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of React Server Component Serialization and Bundle Sizes
class MockSerializationBoundary {
  constructor() {
    this.clientBundleKilobytes = 0;
  }

  // Server Components emit zero client JavaScript
  renderServerComponent(name, dataProps) {
    // Pure HTML string output; no client JS added
    const renderedHtml = '<' + name + '>' + JSON.stringify(dataProps) + '</' + name + '>';
    return { html: renderedHtml, jsSentKb: 0 };
  }

  // Client Components require shipping code to the browser
  renderClientComponent(name, codeSizeKb, props) {
    this.clientBundleKilobytes += codeSizeKb;
    // Validate serializability of props
    for (const [key, value] of Object.entries(props)) {
      if (typeof value === 'function') {
        throw new Error('Cannot serialize function prop: ' + key);
      }
    }
    return { component: name, jsSentKb: codeSizeKb, serializable: true };
  }
}

const boundary = new MockSerializationBoundary();

// 1. Heavy markdown parser on Server: 0 KB shipped to client
const serverResult = boundary.renderServerComponent('PostContent', { id: 101, title: 'RSC Architecture' });

// 2. Interactive like button on Client: 8 KB shipped to client
const clientResult = boundary.renderClientComponent('LikeButton', 8, { initialLikes: 42 });

console.log('Server component client JS payload in KB:', serverResult.jsSentKb);
// -> Server component client JS payload in KB: 0
console.log('Client component JS payload in KB:', clientResult.jsSentKb);
// -> Client component JS payload in KB: 8
console.log('Total client bundle size accumulated in KB:', boundary.clientBundleKilobytes);
// -> Total client bundle size accumulated in KB: 8`,
      caption: {
        en: 'Server component adds 0 KB to client bundle while client button adds 8 KB',
        bn: 'সার্ভার কম্পোনেন্ট ক্লায়েন্ট বান্ডলে ০ কেবি যোগ করে আর ক্লায়েন্ট বাটন ৮ কেবি যোগ করে'
      }
    },
    {
      type: 'heading',
      id: 'composition-pattern-rules',
      text: {
        en: 'The Children Composition Pattern and Interoperability Rules',
        bn: 'চিলড্রেন কম্পোজিশন প্যাটার্ন ও আন্তঃকার্যকারিতা নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent architectural challenge arises when you need an interactive client shell (such as an animated modal) that displays backend data. You cannot import a server module directly into client code. Instead, you import both files into a parent page and pass the data-fetching element through the children prop.',
        bn: 'একটি সাধারণ আর্কিটেকচারাল সমস্যা হলো যখন অ্যানিমেটেড মোডালের মতো ক্লায়েন্ট শেলে সার্ভার থেকে ডাটা দেখাতে হয়। ক্লায়েন্ট কোডের ভেতর সরাসরি সার্ভার মডিউল ইমপোর্ট করা যায় না। এর পরিবর্তে প্যারেন্ট পেজে উভয় ফাইল এনে ডাটা লোড করা অংশটিকে চিলড্রেন প্রপস হিসেবে ক্লায়েন্ট শেলে পাস করতে হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Push "use client" to the Leaves: Keep interactive client components small and positioned at the edges of the component tree.',
          bn: '১. পাতায় "use client" রাখুন: ক্লায়েন্ট কম্পোনেন্টগুলোকে যথাসম্ভব ছোট রাখুন এবং কম্পোনেন্ট ট্রির শেষ প্রান্তে ব্যবহার করুন।'
        },
        {
          en: '2. Zero Secret Leaks: Server Components safely read environment variables with API keys without exposing secrets to client network tabs.',
          bn: '২. গোপনীয়তা রক্ষা: সার্ভার কম্পোনেন্ট এপিআই কি ও সিক্রেট নিরাপদে পড়তে পারে কারণ এগুলো ব্রাউজার নেটওয়ার্কে ফাঁস হয় না।'
        },
        {
          en: '3. Pass Functions via Server Actions: Standard callbacks cannot cross the serialization line; use Server Actions ("use server") instead.',
          bn: '৩. সার্ভার অ্যাকশনে ফাংশন পাস: প্রপস হিসেবে সাধারণ ফাংশন পাঠানো যায় না; প্রয়োজনে "use server" চিহ্নিত সার্ভার অ্যাকশন ব্যবহার করুন।'
        },
        {
          en: '4. Leverage the Children Slot: Pass Server Components through {children} into Client Components to keep heavy server dependencies out of client JS.',
          bn: '৪. চিলড্রেন স্লটের ব্যবহার: ভারী লাইব্রেরি ক্লায়েন্ট বান্ডল থেকে দূরে রাখতে ক্লায়েন্ট মোড়কে {children} দিয়ে সার্ভার কম্পোনেন্ট ঢুকিয়ে দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-scb-ex1',
      kind: 'mcq',
      topic: 'default component execution model in nextjs app router',
      question: {
        en: 'By default, where do React components declared inside the Next.js App Router execute?',
        bn: 'ডিফল্টভাবে Next.js অ্যাপ রাউটারের ভেতরে লেখা রিঅ্যাক্ট কম্পোনেন্টগুলো কোথায় কার্যকর হয়?'
      },
      options: [
        {
          en: 'Exclusively on the server as React Server Components (RSC), sending zero JavaScript bundle weight to the client browser',
          bn: 'কেবলমাত্র সার্ভারে রিঅ্যাক্ট সার্ভার কম্পোনেন্টস হিসেবে, যা ক্লায়েন্ট ব্রাউজারে কোনো অতিরিক্ত জাভাস্ক্রিপ্ট পাঠায় না'
        },
        {
          en: 'In the client browser using WebAssembly',
          bn: 'ওয়েবঅ্যাসেম্বলি ব্যবহার করে ক্লায়েন্ট ব্রাউজারে'
        },
        {
          en: 'On the user local storage drive',
          bn: 'ব্যবহারকারীর লোকাল স্টোরেজ ড্রাইভে'
        },
        {
          en: 'Inside a background Web Worker thread',
          bn: 'একটি ব্যাকগ্রাউন্ড ওয়েব ওয়ার্কার থ্রেডের ভেতর'
        }
      ],
      answer: 0,
      hint: {
        en: 'The App Router defaults to React Server Components unless marked with "use client".',
        bn: 'অ্যাপ রাউটারে "use client" না দিলে প্রতিটি কম্পোনেন্ট ডিফল্টভাবে সার্ভারেই চলে।'
      },
      explanation: {
        en: 'All components in the app directory are React Server Components by default. They render on the server and ship purely rendered markup without inflating client bundle size.',
        bn: 'app ডিরেক্টরির সমস্ত কম্পোনেন্ট ডিফল্টভাবে সার্ভার কম্পোনেন্ট। এগুলো সার্ভারে রেন্ডার হয় এবং ব্রাউজারে বাড়তি জাভাস্ক্রিপ্ট বান্ডল পাঠায় না।'
      }
    },
    {
      id: 'nx-scb-ex2',
      kind: 'mcq',
      topic: 'purpose of use client directive',
      question: {
        en: 'What does adding the "use client" directive at the top of a file actually do in Next.js?',
        bn: 'Next.js-এ কোনো ফাইলের একদম উপরে "use client" ডিরেক্টিভ যোগ করলে প্রকৃতপক্ষে কী ঘটে?'
      },
      options: [
        {
          en: 'It declares a boundary between the server-only module graph and the client module graph, instructing Next.js to package the component and its imports into the client browser bundle',
          bn: 'এটি সার্ভার ও ক্লায়েন্ট মডিউলের মাঝে একটি সীমানা নির্ধারণ করে এবং Next.js-কে কম্পোনেন্টটি ক্লায়েন্ট ব্রাউজার বান্ডলে যুক্ত করার নির্দেশ দেয়'
        },
        {
          en: 'It forces the page to reload every 5 seconds',
          bn: 'এটি প্রতি ৫ সেকেন্ড পর পর পেজটি রিলোড হতে বাধ্য করে'
        },
        {
          en: 'It deletes all CSS files from the project',
          bn: 'এটি প্রজেক্টের সমস্ত সিএসএস ফাইল মুছে ফেলে'
        },
        {
          en: 'It disables server-side HTML pre-rendering completely',
          bn: 'এটি সার্ভার-সাইড এইচটিটিপি প্রি-রেন্ডারিং পুরোপুরি বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '"use client" marks the boundary where client-side JavaScript hydration begins.',
        bn: '"use client" সেই সীমানা নির্ধারণ করে যেখান থেকে ব্রাউজার হাইড্রেশন শুরু হয়।'
      },
      explanation: {
        en: '"use client" acts as a boundary marker. Components below this boundary are bundled for the browser, enabling React hooks (useState, useEffect) and event listeners.',
        bn: '"use client" একটি বাউন্ডারি হিসেবে কাজ করে। এর নিচের কোডগুলো ব্রাউজার বান্ডলে যায়, যার ফলে useState বা ইভেন্ট লিসেনারগুলো কাজ করতে পারে।'
      }
    },
    {
      id: 'nx-scb-ex3',
      kind: 'mcq',
      topic: 'props serialization across boundary',
      question: {
        en: 'Which of the following data types CANNOT be passed directly as a prop from a Server Component to a Client Component?',
        bn: 'নিচের কোন ডাটা টাইপটি সার্ভার কম্পোনেন্ট থেকে ক্লায়েন্ট কম্পোনেন্টে প্রপস হিসেবে সরাসরি পাঠানো অসম্ভব?'
      },
      options: [
        {
          en: 'A JavaScript function or callback (e.g. onClick={() => alert("hi")})',
          bn: 'একটি জাভাস্ক্রিপ্ট ফাংশন বা কলব্যাক (যেমন onClick={() => alert("hi")})'
        },
        {
          en: 'A string representing a user name',
          bn: 'একটি সাধারণ স্ট্রিং যা ইউজারের নাম প্রকাশ করে'
        },
        {
          en: 'A number representing a product price',
          bn: 'একটি পূর্ণসংখ্যা বা ভগ্নাংশ যা পণ্যের দাম প্রকাশ করে'
        },
        {
          en: 'A plain JavaScript array of product identifiers',
          bn: 'পণ্যের আইডির একটি সাধারণ জাভাস্ক্রিপ্ট অ্যারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Functions cannot be serialized into JSON or the RSC flight payload.',
        bn: 'ফাংশনকে টেক্সট বা JSON আকারে রূপান্তর করে নেটওয়ার্কে পাঠানো যায় না।'
      },
      explanation: {
        en: 'Data crossing the boundary must be serializable. Functions, class instances, and complex objects with methods cannot cross because they cannot be transmitted in the RSC protocol.',
        bn: 'সীমানা পার হতে ডাটাকে অবশ্যই সিরিয়ালাইজযোগ্য হতে হয়। ফাংশন বা ক্লাস অবজেক্টকে নেটওয়ার্ক প্রোটোকলে রূপান্তর করা অসম্ভব হওয়ায় এগুলো প্রপস হিসেবে পাস করা যায় না।'
      }
    },
    {
      id: 'nx-scb-ex4',
      kind: 'mcq',
      topic: 'passing server component as children to client component',
      question: {
        en: 'How can you render a Server Component inside an interactive Client Component without converting the Server Component into a client module?',
        bn: 'কোনো সার্ভার কম্পোনেন্টকে ক্লায়েন্ট মডিউলে না বদলে কীভাবে একটি ইন্টারঅ্যাক্টিভ ক্লায়েন্ট কম্পোনেন্টের ভেতর রেন্ডার করা যায়?'
      },
      options: [
        {
          en: 'Pass the Server Component into the Client Component via the "children" prop inside a shared parent Server Component',
          bn: 'একটি প্যারেন্ট সার্ভার কম্পোনেন্টের ভেতর "children" প্রপসের মাধ্যমে সার্ভার কম্পোনেন্টটিকে ক্লায়েন্ট কম্পোনেন্টে পাস করে'
        },
        {
          en: 'Import the Server Component directly at the top of the Client Component file',
          bn: 'ক্লায়েন্ট কম্পোনেন্টের ভেতরে সরাসরি সার্ভার কম্পোনেন্ট ইমপোর্ট করে'
        },
        {
          en: 'Write "use client" inside both files simultaneously',
          bn: 'একসাথে উভয় ফাইলের ভেতর "use client" লিখে'
        },
        {
          en: 'Server Components cannot be nested inside Client Components under any circumstance',
          bn: 'কোনো অবস্থাতেই ক্লায়েন্ট কম্পোনেন্টের ভেতর সার্ভার কম্পোনেন্ট রাখা সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use React component composition via the children prop.',
        bn: 'রিঅ্যাক্টের চিলড্রেন প্রপস কম্পোজিশন কৌশল ব্যবহার করুন।'
      },
      explanation: {
        en: 'By passing the Server Component as children (<ClientModal><ServerFeed /></ClientModal>), the server renders ServerFeed into RSC markup without pulling its code into the client bundle.',
        bn: 'চিলড্রেন প্রপস (<Modal><Feed /></Modal>) দিয়ে পাঠালে Feed সার্ভারেই রেন্ডার হয়ে কেবল তার ভার্চুয়াল ডম ক্লায়েন্টে যায়, ফলে ক্লায়েন্ট বান্ডল ভারী হয় না।'
      }
    }
  ],
  quiz: {
    id: 'the-server-client-border-quiz',
    title: {
      en: 'React Server & Client Components Quiz',
      bn: 'রিঅ্যাক্ট সার্ভার ও ক্লায়েন্ট কম্পোনেন্টস কুইজ'
    },
    questions: [
      {
        id: 'q-server-component-security-secrets',
        kind: 'mcq',
        topic: 'database credentials safety in server components',
        question: {
          en: 'Why is it completely safe to access database connection strings and secret API keys directly inside a Server Component in Next.js?',
          bn: 'Next.js সার্ভার কম্পোনেন্টে সরাসরি ডাটাবেজ কানেকশন স্ট্রিং বা গোপন এপিআই কি ব্যবহার করা কেন পুরোপুরি নিরাপদ?'
        },
        options: [
          {
            en: 'Server Components never ship their source code or private environment variables to the browser; only the final rendered HTML/RSC payload is transmitted',
            bn: 'সার্ভার কম্পোনেন্ট তাদের সোর্স কোড বা প্রাইভেট এনভায়রনমেন্ট ভেরিয়েবল কখনো ব্রাউজারে পাঠায় না; কেবল প্রস্তুতকৃত এইচটিটিপি/আরএসসি পে-লোড পাঠানো হয়'
          },
          {
            en: 'The browser automatically masks all passwords with asterisks',
            bn: 'ব্রাউজার নিজে থেকেই সব পাসওয়ার্ড তারকাচিহ্ন দিয়ে ঢেকে রাখে'
          },
          {
            en: 'Next.js renames all secret variables to random words',
            bn: 'Next.js সব গোপন ভেরিয়েবলকে এলোমেলো নামে বদলে দেয়'
          },
          {
            en: 'Server Components can only run if the database has no password',
            bn: 'সার্ভার কম্পোনেন্ট কেবল তখনই চলে যখন ডাটাবেজে কোনো পাসওয়ার্ড থাকে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Server Component execution remains entirely on the server backend.',
          bn: 'সার্ভার কম্পোনেন্টের সমস্ত কাজকর্ম কেবল সার্ভার ব্যাকএন্ডেই সম্পন্ন হয়।'
        },
        explanation: {
          en: 'Because Server Components execute purely on the backend, sensitive logic and secret keys are never included in the JavaScript bundle downloaded by users.',
          bn: 'যেহেতু সার্ভার কম্পোনেন্ট পুরোপুরি ব্যাকএন্ডেই চলে, তাই কোনো সিক্রেট কোড ব্যবহারকারীর ডাউনলোড করা জাভাস্ক্রিপ্ট বান্ডলে পৌঁছায় না।'
        }
      },
      {
        id: 'q-client-component-server-side-rendering',
        kind: 'mcq',
        topic: 'client components still render to html on server during initial load',
        question: {
          en: 'True or False: Client Components marked with "use client" are only rendered in the browser and never produce initial HTML on the server.',
          bn: 'সত্য নাকি মিথ্যা: "use client" যুক্ত ক্লায়েন্ট কম্পোনেন্টগুলো কেবল ব্রাউজারেই রেন্ডার হয় এবং সার্ভারে কখনো প্রাথমিক এইচটিএমএল তৈরি করে না।'
        },
        options: [
          {
            en: 'False: Client Components are still pre-rendered to static HTML on the server during initial page load, and then hydrated in the browser for interactivity',
            bn: 'মিথ্যা: প্রথমবার পেজ লোডের সময় ক্লায়েন্ট কম্পোনেন্টগুলোও সার্ভারে স্ট্যাটিক এইচটিএমএল আকারে রেন্ডার হয় এবং পরে ব্রাউজারে ইন্টারঅ্যাকশনের জন্য হাইড্রেট হয়'
          },
          {
            en: 'True: "use client" disables all server-side rendering for that component',
            bn: 'সত্য: "use client" দিলে সেই কম্পোনেন্টের জন্য সার্ভার রেন্ডারিং পুরোপুরি বন্ধ হয়ে যায়'
          },
          {
            en: 'True: Client components only render when internet is disconnected',
            bn: 'সত্য: ক্লায়েন্ট কম্পোনেন্ট কেবল নেট বন্ধ থাকলেই রেন্ডার হয়'
          },
          {
            en: 'False: Client components only run inside Node.js command lines',
            bn: 'মিথ্যা: ক্লায়েন্ট কম্পোনেন্ট কেবল নোড.জেএস কমান্ডলাইনে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Client Components are pre-rendered on the server to prevent blank page flashes.',
          bn: 'হোয়াইট স্ক্রিন ফ্ল্যাশ ঠেকাতে ক্লায়েন্ট কম্পোনেন্টও শুরুতে সার্ভার থেকে প্রাথমিক এইচটিএমএল হিসেবে আসে।'
        },
        explanation: {
          en: '"use client" does not mean "client-only". Client components are pre-rendered to HTML on the server for fast initial paint, and then their JavaScript hydrates in the browser.',
          bn: '"use client" মানে কেবল ক্লায়েন্ট নয়। দ্রুত পেজ দেখানোর জন্য সার্ভারেই এর প্রাথমিক রূপ তৈরি হয়, পরে ব্রাউজারে জাভাস্ক্রিপ্ট যুক্ত হয়ে বাটন ও স্টেট সচল হয়।'
        }
      },
      {
        id: 'q-server-only-package-guard',
        kind: 'mcq',
        topic: 'enforcing server-only code with the server-only package',
        question: {
          en: 'How can you guarantee that a utility module containing database logic is never mistakenly imported into a Client Component?',
          bn: 'ডাটাবেজ লজিক থাকা কোনো মডিউল যাতে ভুলবশত কোনো ক্লায়েন্ট কম্পোনেন্টে ইমপোর্ট না হয়, তা কীভাবে সুনিশ্চিত করা যায়?'
        },
        options: [
          {
            en: 'Install and import "import \'server-only\';" at the top of the module, causing Next.js to throw a build-time compile error if imported into a client file',
            bn: 'মডিউলের শুরুতে "import \'server-only\';" যোগ করে, যার ফলে কোনো ক্লায়েন্ট ফাইল এটি ইমপোর্ট করলে বিল্ড-টাইমেই কমপাইল এরর দিয়ে আটকে দেবে'
          },
          {
            en: 'Set the computer file permissions to chmod 400',
            bn: 'কম্পিউটার ফাইলের পারমিশন chmod 400 করে দিয়ে'
          },
          {
            en: 'Rename the file extension from .ts to .txt',
            bn: 'ফাইলের এক্সটেনশন .ts থেকে বদলে .txt করে'
          },
          {
            en: 'There is no way to prevent accidental client imports in Next.js',
            bn: 'Next.js-এ ক্লায়েন্টে ভুল ইমপোর্ট ঠেকানোর কোনো উপায় নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "server-only" npm package triggers a build error upon unauthorized client import.',
          bn: '"server-only" প্যাকেজটি ক্লায়েন্ট কম্পোনেন্টে অবৈধ ইমপোর্ট শনাক্ত করে বিল্ড আটকে দেয়।'
        },
        explanation: {
          en: 'Importing "server-only" instructs the compiler that the module contains sensitive server code. If a Client Component imports it, Next.js aborts the build with a helpful error.',
          bn: '"server-only" ইমপোর্ট করা থাকলে কোনো ক্লায়েন্ট ফাইল এটিকে ডাকলে কমপাইলার সাথে সাথে বিল্ড আটকে দেয়, ফলে অসাবধানতাবশত তথ্য ফাঁসের ঝুঁকি থাকে না।'
        }
      },
      {
        id: 'q-third-party-provider-wrapping',
        kind: 'mcq',
        topic: 'wrapping third party context providers in client components',
        question: {
          en: 'Why do third-party React context providers (like ThemeProvider or QueryClientProvider) need to be wrapped in a "use client" component before being placed in the root layout?',
          bn: 'রুট লেআউটে ব্যবহারের পূর্বে থার্ড-পার্টি রিঅ্যাক্ট কনটেক্সট প্রোভাইডারগুলোকে (যেমন ThemeProvider) কেন একটি "use client" কম্পোনেন্টে মুড়িয়ে নিতে হয়?'
        },
        options: [
          {
            en: 'React Context (createContext, useContext) relies on client-side state and life-cycles, which are unsupported in Server Components like the root layout',
            bn: 'রিঅ্যাক্ট কনটেক্সট (createContext, useContext) ক্লায়েন্ট-সাইড স্টেট ও লাইফসাইকেলের ওপর নির্ভরশীল, যা রুট লেআউটের মতো সার্ভার কম্পোনেন্টে সমর্থিত নয়'
          },
          {
            en: 'Third-party libraries are not allowed on the Internet',
            bn: 'থার্ড-পার্টি লাইব্রেরি ইন্টারনেটে ব্যবহারের অনুমতি নেই'
          },
          {
            en: 'Root layouts cannot render HTML tags directly',
            bn: 'রুট লেআউট সরাসরি এইচটিএমএল ট্যাগ রেন্ডার করতে পারে না'
          },
          {
            en: 'Context providers convert CSS stylesheets into JavaScript arrays',
            bn: 'কনটেক্সট প্রোভাইডার সিএসএস ফাইলকে জাভাস্ক্রিপ্ট অ্যারেতে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'React Context is only available in Client Components.',
          bn: 'রিঅ্যাক্ট কনটেক্সট কেবল ক্লায়েন্ট কম্পোনেন্টেই কাজ করে।'
        },
        explanation: {
          en: 'React Context is fundamentally client-side. Wrapping the provider in a "use client" component creates the necessary client boundary while allowing children to be rendered seamlessly.',
          bn: 'রিঅ্যাক্ট কনটেক্সট কেবল ক্লায়েন্টেই কার্যকর। তাই প্রোভাইডারকে একটি "use client" মোড়কে রেখে রুট লেআউটে ব্যবহার করা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-data-ledger',
    title: {
      en: 'Data Fetching & Caching — force-cache, revalidate & On-Demand Tags',
      bn: 'ডাটা ফেচিং ও ক্যাশিং — force-cache, revalidate ও অন-ডিমান্ড ট্যাগ'
    }
  }
};
