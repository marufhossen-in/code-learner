import type { Lesson } from '../../../lib/types';

export const routerPostOfficeLesson: Lesson = {
  slug: 'the-router-post-office',
  tech: 'vue',
  title: {
    en: 'Vue Router 4 — SPA Routing, Dynamic Segments & Navigation Guards',
    bn: 'Vue Router ৪ — এসপিএ রাউটিং, ডায়নামিক সেগমেন্টস ও নেভিগেশন গার্ডস'
  },
  summary: {
    en: 'Single-Page Applications require client-side routing to map URLs to view hierarchies without full-page browser reloads. In this lesson, you will master Vue Router 4 history modes, dynamic parameters with props decoupling, nested route layouts with RouterView, and enterprise authentication with global navigation guards.',
    bn: 'ব্রাউজার রিফ্রেশ ছাড়াই ইউআরএলের সাথে বিভিন্ন ভিউ সাজাতে সিঙ্গেল-পেজ অ্যাপ্লিকেশনে ক্লায়েন্ট-সাইড রাউটিং অপরিহার্য। এই পাঠে আপনি Vue Router ৪-এর হিস্টোরি মোড, প্রপস সহ ডায়নামিক প্যারামিটার, RouterView দিয়ে নেস্টেড লেআউট এবং গ্লোবাল নেভিগেশন গার্ড দিয়ে প্রমাণীকরণ ও সুরক্ষা নিয়ন্ত্রণ গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'vue-router-architecture',
      text: {
        en: 'Client-Side SPA Routing Architecture and History Modes',
        bn: 'ক্লায়েন্ট-সাইড এসপিএ রাউটিং আর্কিটেকচার ও হিস্টোরি মোডস'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When building Single-Page Applications (SPAs), client-side routing intercepts browser URL transitions so users navigate smoothly between views without re-downloading HTML pages. Vue Router 4 manages this synchronization through HTML5 (modern browser history API) or Hash mode. It coordinates path matching, nested views with RouterView, and security validation before rendering target components.',
        bn: 'সিঙ্গেল-পেজ অ্যাপ্লিকেশন (SPA) ব্রাউজারের ইউআরএল পরিবর্তন পর্যবেক্ষণ করে যাতে নতুন করে এইচটিএমএল ডাউনলোড ছাড়াই স্ক্রিন পরিবর্তিত হয়। Vue Router ৪ এটি সম্পন্ন করে HTML5 (ব্রাউজারের আধুনিক হিস্টোরি এপিআই) অথবা Hash মোডের সাহায্যে। এটি পাথ ম্যাচিং, RouterView দিয়ে নেস্টেড ভিউ প্রদর্শন এবং সিকিউরিটি গার্ড যাচাই করে তবেই স্ক্রিনে কম্পোনেন্ট দেখায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'createWebHistory()',
          def: {
            en: 'HTML5 History mode producing clean URLs (/users/42) that requires server-side rewrite fallback to index.html.',
            bn: 'HTML5 History মোড যা পরিষ্কার ইউআরএল (/users/42) তৈরি করে এবং সার্ভার সাইডে index.html-এ রিরাইট ফলব্যাক কনফিগারেশনের প্রয়োজন হয়।'
          }
        },
        {
          term: 'createWebHashHistory()',
          def: {
            en: 'Hash mode appending a # symbol before routes (/#/users/42), functioning on static servers without backend configuration.',
            bn: 'হ্যাশ মোড যা ইউআরএলে একটি # চিহ্ন যোগ করে (/#/users/42) এবং কোনো ব্যাকএন্ড কনফিগারেশন ছাড়াই স্ট্যাটিক সার্ভারে চলে।'
          }
        },
        {
          term: 'RouterView',
          def: {
            en: 'A functional outlet component that renders the matched component corresponding to the active URL route.',
            bn: 'একটি কার্যকরী আউটলেট কম্পোনেন্ট যা বর্তমান সক্রিয় ইউআরএলের সাথে মিলে যাওয়া কম্পোনেন্টটিকে স্ক্রিনে রেন্ডার করে।'
          }
        },
        {
          term: 'Navigation Guard',
          def: {
            en: 'Hook functions (such as beforeEach) intercepting route transitions to enforce authentication or redirect unauthenticated users.',
            bn: 'হুক ফাংশন (যেমন beforeEach) যা পেজ পরিবর্তনের মাঝে বাঁধা দিয়ে লগইন যাচাই করে অথবা রিডাইরেক্ট পরিচালনা করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'router-modes-matrix',
      text: {
        en: 'Routing Modes and Navigation Features Matrix',
        bn: 'রাউটিং মোডস ও নেভিগেশন সুবিধা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feature or Mode', bn: 'সুবিধা বা মোড' },
        { en: 'URL Pattern', bn: 'ইউআরএল প্যাটার্ন' },
        { en: 'Server Requirements', bn: 'সার্ভার কনফিগারেশন' }
      ],
      rows: [
        [
          { en: 'HTML5 History Mode', bn: 'HTML5 History মোড' },
          { en: 'https://example.com/dashboard/settings', bn: 'https://example.com/dashboard/settings' },
          { en: 'Requires server rewrite rule routing all 404s to index.html', bn: 'সব রিকোয়েস্ট index.html-এ পাঠানোর রিরাইট রুল আবশ্যক' }
        ],
        [
          { en: 'Hash History Mode', bn: 'Hash History মোড' },
          { en: 'https://example.com/#/dashboard/settings', bn: 'https://example.com/#/dashboard/settings' },
          { en: 'Works out of the box on static hosts (e.g. GitHub Pages)', bn: 'যেকোনো স্ট্যাটিক হোস্টিংয়ে সরাসরি কনফিগারেশন ছাড়াই চলে' }
        ],
        [
          { en: 'Dynamic Segments', bn: 'ডায়নামিক সেগমেন্টস' },
          { en: '/orders/:orderId (captures dynamic ID)', bn: '/orders/:orderId (ডায়নামিক আইডি সংগ্রহ করে)' },
          { en: 'Passes parameters into route.params or component props', bn: 'route.params অথবা কম্পোনেন্ট প্রপসে মান পৌঁছে দেয়' }
        ],
        [
          { en: 'Global Navigation Guard', bn: 'গ্লোবাল নেভিগেশন গার্ড' },
          { en: 'router.beforeEach((to, from) => { ... })', bn: 'router.beforeEach((to, from) => { ... })' },
          { en: 'Validates tokens before navigation completes', bn: 'নেভিগেশন সম্পন্ন হওয়ার আগেই নিরাপত্তা টোকেন পরীক্ষা করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'router-simulation-code',
      text: {
        en: 'Working Route Matching and Navigation Guard Simulation',
        bn: 'কার্যকরী রুট ম্যাচিং ও নেভিগেশন গার্ড সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vue Router 4 Route Matcher and Navigation Guard Pipeline
class MockVueRouter {
  constructor(routes) {
    this.routes = routes;
    this.beforeEachGuards = [];
  }

  beforeEach(guardFn) {
    this.beforeEachGuards.push(guardFn);
  }

  // Resolves target path and checks authentication guards
  async navigate(toPath, authState) {
    const matchedRoute = this.routes.find(r => r.path === toPath);
    if (!matchedRoute) {
      return { status: 404, path: toPath, component: 'NotFound' };
    }

    // Run global beforeEach navigation guards
    for (const guard of this.beforeEachGuards) {
      const decision = await guard(matchedRoute, authState);
      if (decision !== true) {
        return { status: 302, redirectedTo: decision, allowed: false };
      }
    }

    return { status: 200, path: toPath, component: matchedRoute.name, allowed: true };
  }
}

const routes = [
  { path: '/', name: 'HomePage', requiresAuth: false },
  { path: '/dashboard', name: 'DashboardPage', requiresAuth: true },
  { path: '/login', name: 'LoginPage', requiresAuth: false }
];

const router = new MockVueRouter(routes);

// Global Guard: Redirect unauthenticated requests away from protected routes
router.beforeEach((to, authState) => {
  if (to.requiresAuth && !authState.isAuthenticated) {
    return '/login'; // Redirect to login
  }
  return true; // Allow navigation
});

async function runRouterSimulation() {
  // 1. Guest user attempts to access protected dashboard
  const guestResult = await router.navigate('/dashboard', { isAuthenticated: false });

  // 2. Authenticated user accesses protected dashboard
  const authResult = await router.navigate('/dashboard', { isAuthenticated: true });

  console.log('Guest navigation status code:', guestResult.status);
  // -> Guest navigation status code: 302
  console.log('Guest redirected target path:', guestResult.redirectedTo);
  // -> Guest redirected target path: /login
  console.log('Authenticated navigation status code:', authResult.status);
  // -> Authenticated navigation status code: 200
  console.log('Authenticated access granted:', authResult.allowed);
  // -> Authenticated access granted: true
}

runRouterSimulation();`,
      caption: {
        en: 'Router intercepts guest returning 302 to /login, then allows authenticated user with 200',
        bn: 'রাউটার গেস্ট ইউজারকে আটকে ৩০২ দিয়ে /login-এ পাঠায় এবং পরে লগইন করা ইউজারকে ২০০ দিয়ে অনুমতি দেয়'
      }
    },
    {
      type: 'heading',
      id: 'routing-discipline-rules',
      text: {
        en: 'Routing Best Practices and Decoupling Rules',
        bn: 'রাউটিং সেরা অনুশীলন ও ডিকাপলিং নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When constructing routes, decouple your UI components from direct router dependencies. Instead of reading params directly with useRoute().params inside your visual components, configure props: true on the route definition. This allows your components to receive parameters as standard props, making them reusable and trivial to test.',
        bn: 'রুট তৈরির সময় কম্পোনেন্টগুলোকে সরাসরি রাউটারের ওপর নির্ভরশীল না করে আলাদা রাখাই বুদ্ধিমানের কাজ। ভিজ্যুয়াল কম্পোনেন্টে সরাসরি useRoute().params ব্যবহার না করে রুটে props: true লিখুন। এতে কম্পোনেন্টগুলো সাধারণ প্রপস হিসেবে রাউটের প্যারামিটার গ্রহণ করতে পারে, ফলে এগুলো সহজে অন্য যেকোনো স্থানে পুনর্ব্যবহার ও টেস্ট করা যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Decouple with props: true: Pass dynamic route parameters as component props to keep components independent of router APIs.',
          bn: '১. props: true দিয়ে পৃথকীকরণ: কম্পোনেন্টকে সরাসরি রাউটার থেকে স্বাধীন রাখতে প্রপস হিসেবে ডায়নামিক প্যারামিটার পাস করুন।'
        },
        {
          en: '2. Return Navigation Decisions: In Vue Router 4 guards, return true, false, or a redirect route path rather than invoking next().',
          bn: '২. পরিষ্কার রিটার্ন ভ্যালু: Vue Router ৪-এ পুরোনো next() পরিহার করে সরাসরি true, false বা রিডাইরেক্ট পাথ রিটার্ন করুন।'
        },
        {
          en: '3. Lazy-Load Routes: Always import route components asynchronously: component: () => import("./views/Dashboard.vue").',
          bn: '৩. লেজি লোডিং রুট: পেজ লোডিং গতি বাড়াতে ডায়নামিক ইমপোর্ট () => import(...) দিয়ে রুট লেজি-লোড করুন।'
        },
        {
          en: '4. Server Fallback for History: In production Nginx or Apache, ensure all non-file requests fall back to index.html.',
          bn: '৪. সার্ভার ফলব্যাক নিশ্চিতকরণ: History মোডে Nginx বা অ্যাপাচি সার্ভারে সব রিকোয়েস্ট যাতে index.html-এ রিরাইট হয় তা নিশ্চিত করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-rou-ex1',
      kind: 'mcq',
      topic: 'html5 history mode web server fallback configuration',
      question: {
        en: 'Why do SPAs using "createWebHistory()" show a 404 Not Found error when users refresh a page like "https://example.com/users/42" on an unconfigured web server?',
        bn: 'সঠিক সার্ভার কনফিগারেশন না থাকলে "createWebHistory()" ব্যবহার করা এসপিএ-তে "https://example.com/users/42"-এর মতো পেজ রিফ্রেশ করলে কেন ৪০৪ এরর দেখায়?'
      },
      options: [
        {
          en: 'The browser requests the physical file "/users/42" from the web server; because no physical file exists on disk, the server returns 404 unless configured to rewrite all fallback requests back to "/index.html"',
          bn: 'ব্রাউজার সার্ভারের কাছে সরাসরি "/users/42" নামের ফাইল চায়; সার্ভারে এমন কোনো ফাইল না থাকায় সার্ভার ৪০৪ দেয়, যদি না সব রিকোয়েস্ট "/index.html"-এ রিরাইট করার রুল দেওয়া থাকে'
        },
        {
          en: 'The user computer clock is set to the wrong timezone',
          bn: 'ব্যবহারকারীর কম্পিউটারের ঘড়ির টাইমজোন ভুল থাকার কারণে'
        },
        {
          en: 'Vue Router deletes the web application whenever F5 is pressed',
          bn: 'F5 চাপলে Vue Router ওয়েব অ্যাপ্লিকেশনটি মুছে ফেলে'
        },
        {
          en: 'The web browser does not support JavaScript',
          bn: 'ওয়েব ব্রাউজার জাভাস্ক্রিপ্ট সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Physical servers look for real files unless rewritten to index.html.',
        bn: 'সার্ভার ডিস্কে সত্যিকারের ফাইল খুঁজতে যায়, তাই index.html-এ রিরাইট রুল জরুরি।'
      },
      explanation: {
        en: 'In HTML5 History mode, URLs look like standard web paths. When refreshed, the request hits the server. The web server must rewrite all non-static file requests to index.html so Vue Router can parse the path.',
        bn: 'হিস্টোরি মোডে ব্রাউজার সার্ভারে রিকোয়েস্ট পাঠায়। সার্ভারে /users/42 ফাইল না থাকায় ৪০৪ দেয়। তাই Nginx-এ try_files $uri $uri/ /index.html কনফিগার করে দিতে হয়।'
      }
    },
    {
      id: 'vu-rou-ex2',
      kind: 'mcq',
      topic: 'props true decoupling pattern for route params',
      question: {
        en: 'What architectural benefit does enabling "props: true" in a route definition provide to the rendered component?',
        bn: 'রুট সংজ্ঞায় "props: true" যোগ করার মাধ্যমে কম্পোনেন্ট কোন আর্কিটেকচারাল সুবিধা পায়?'
      },
      options: [
        {
          en: 'It passes route params (e.g. ":id") directly into the component as standard input props, allowing the component to be reused and unit-tested without relying directly on "$route" or "useRoute()"',
          bn: 'এটি রুটের প্যারামিটারগুলোকে (যেমন ":id") কম্পোনেন্টে সরাসরি সাধারণ প্রপস হিসেবে পাঠায়, ফলে কম্পোনেন্টটিকে রাউটার লাইব্রেরি ছাড়াই টেস্ট ও অন্য জায়গায় ব্যবহার করা যায়'
        },
        {
          en: 'It prevents hackers from reading the webpage HTML',
          bn: 'এটি হ্যাকারদের ওয়েবপেজের এইচটিএমএল পড়া থেকে বিরত রাখে'
        },
        {
          en: 'It accelerates image loading speeds by 300%',
          bn: 'এটি ছবির লোডিং গতি ৩০০% বাড়িয়ে দেয়'
        },
        {
          en: 'Props: true allows components to be displayed without CSS styles',
          bn: 'Props: true দিলে সিএসএস স্টাইল ছাড়াই কম্পোনেন্ট দেখানো যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'props: true decouples your UI component from the router API.',
        bn: 'props: true কম্পোনেন্টকে রাউটার এপিআই থেকে মুক্ত করে সাধারণ প্রপস হিসেবে মান দেয়।'
      },
      explanation: {
        en: 'Decoupling components from Vue Router via props: true keeps them modular. You can pass props manually in Storybook or unit tests without having to mock the global router instance.',
        bn: 'props: true ব্যবহার করলে কম্পোনেন্ট স্বাধীন থাকে। ইউনিট টেস্ট বা স্টোরিবুকে রাউটার মক না করেই সাধারণ প্রপস পাঠিয়ে কম্পোনেন্ট পরীক্ষা করা সম্ভব হয়।'
      }
    },
    {
      id: 'vu-rou-ex3',
      kind: 'mcq',
      topic: 'vue router 4 guard return value pattern vs legacy next callback',
      question: {
        en: 'In Vue Router 4, what is the recommended way for a "beforeEach" navigation guard to redirect an unauthenticated user to "/login"?',
        bn: 'Vue Router ৪-এ কোনো "beforeEach" নেভিগেশন গার্ডে অপূর্ণাঙ্গ ব্যবহারকারীকে "/login"-এ পাঠাতে সবচেয়ে সঠিক নিয়ম কোনটি?'
      },
      options: [
        {
          en: 'Directly return the path string: "return \'/login\';" (or return an object like "{ name: \'Login\' }")',
          bn: 'সরাসরি পাথের স্ট্রিং রিটার্ন করা: "return \'/login\';" (অথবা অবজেক্ট আকারে "{ name: \'Login\' }")'
        },
        {
          en: 'Invoke "window.location.reload()" 10 times in a loop',
          bn: 'লুপের ভেতর ১০ বার "window.location.reload()" কল করা'
        },
        {
          en: 'Call "throw new Error(\'Access Denied\')"',
          bn: '"throw new Error(\'Access Denied\')" ছুড়ে দেওয়া'
        },
        {
          en: 'Navigation guards cannot redirect in Vue Router 4',
          bn: 'Vue Router ৪-এ নেভিগেশন গার্ড কোনো রিডাইরেক্ট করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Vue Router 4 supports returning false or a redirect path directly from guards.',
        bn: 'Vue Router ৪-এ সরাসরি false বা নতুন ঠিকানার স্ট্রিং রিটার্ন করাই সেরা নিয়ম।'
      },
      explanation: {
        en: 'Vue Router 4 introduced direct return values (return false to cancel, return "/path" to redirect). The legacy next() callback is error-prone and discouraged in modern codebases.',
        bn: 'Vue Router ৪-এ পুরোনো next() কলব্যাক বাদ দিয়ে সরাসরি ভ্যালু রিটার্ন করার ব্যবস্থা এসেছে। return "/login" লিখলেই রাউটার নিজে থেকে রিডাইরেক্ট সম্পন্ন করে।'
      }
    },
    {
      id: 'vu-rou-ex4',
      kind: 'mcq',
      topic: 'nested routes and RouterView hierarchy',
      question: {
        en: 'When constructing nested layouts (e.g., a Dashboard shell with sidebar tabs for /dashboard/profile and /dashboard/analytics), how are child views rendered?',
        bn: 'নেস্টেড লেআউট তৈরির সময় (যেমন সাইডবার সহ /dashboard/profile এবং /dashboard/analytics), কীভাবে ভেতরের চাইল্ড ভিউগুলো প্রদর্শিত হয়?'
      },
      options: [
        {
          en: 'The parent Dashboard component template includes its own "<RouterView />" outlet where child routes defined in the router "children: [...]" array are rendered',
          bn: 'প্যারেন্ট ড্যাশবোর্ড কম্পোনেন্টের ভেতর নিজস্ব একটি "<RouterView />" আউটলেট থাকে, যেখানে "children: [...]" অ্যারেতে বর্ণিত চাইল্ড রুটগুলো প্রদর্শিত হয়'
        },
        {
          en: 'Child routes must be placed in a separate browser popup window',
          bn: 'চাইল্ড রুটগুলো অবশ্যই আলাদা ব্রাউজার পপআপ উইন্ডোতে দেখাতে হয়'
        },
        {
          en: 'All nested routes overwrite the entire HTML head tag',
          bn: 'সব নেস্টেড রুট পুরো এইচটিএমএল head ট্যাগকে ওভাররাইট করে ফেলে'
        },
        {
          en: 'Vue Router only supports a single level of routes',
          bn: 'Vue Router কেবল এক স্তরের রুট সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nested RouterView components render nested children route arrays.',
        bn: 'প্যারেন্টের ভেতরের RouterView ট্যাগ চাইল্ড রুটের উপাদানগুলো রেন্ডার করে।'
      },
      explanation: {
        en: 'Vue Router supports multi-level nested routes. A parent route contains a <RouterView />, which renders the matching sub-route from the parent children configuration array.',
        bn: 'জটিল ড্যাশবোর্ডে প্যারেন্টের লেআউট ঠিক রেখে কেবল ভেতরের অংশ বদলাতে নেস্টেড রুট ও চাইল্ড RouterView ব্যবহার করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-router-post-office-quiz',
    title: {
      en: 'Vue Router 4 Architecture & Guards Quiz',
      bn: 'Vue Router ৪ আর্কিটেকচার ও গার্ডস কুইজ'
    },
    questions: [
      {
        id: 'q-route-lazy-loading-performance',
        kind: 'mcq',
        topic: 'route code splitting and lazy loading performance',
        question: {
          en: 'What architectural performance improvement is achieved by configuring routes with dynamic imports: "component: () => import(\'./views/Analytics.vue\')"?',
          bn: 'ডায়নামিক ইমপোর্ট "component: () => import(\'./views/Analytics.vue\')" দিয়ে রুট সাজালে কী ধরনের পারফরম্যান্স উন্নতি হয়?'
        },
        options: [
          {
            en: 'It enables route-level code splitting: the JavaScript bundle for Analytics is only downloaded across the network when the user actually navigates to that route, reducing the initial bundle size',
            bn: 'এটি রুট-স্তরের কোড স্প্লিটিং নিশ্চিত করে: ব্যবহারকারী যখন সত্যিই ওই পেজে ঢুকবে তখনই কেবল ফাইল ডাউনলোড হবে, ফলে প্রাথমিক পেজ লোডের সাইজ অনেক কমে যায়'
          },
          {
            en: 'It converts all TypeScript code into C++ binary code',
            bn: 'এটি সব টাইপস্ক্রিপ্ট কোডকে সি++ বাইনারি কোডে রূপান্তর করে'
          },
          {
            en: 'It disables all HTTP network caching in the user browser',
            bn: 'এটি ব্যবহারকারীর ব্রাউজারে সমস্ত নেটওয়ার্ক ক্যাশিং বন্ধ করে দেয়'
          },
          {
            en: 'Dynamic imports delete unused CSS styles from external libraries',
            bn: 'ডায়নামিক ইমপোর্ট অন্য লাইব্রেরির অব্যবহৃত সিএসএস মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Route lazy loading cuts initial bundle size by loading code on demand.',
          bn: 'লেজি লোডিং প্রথম পেজ লোডের সময় কমিয়ে কেবল প্রয়োজনের সময় ডাটা টানে।'
        },
        explanation: {
          en: 'Bundlers like Vite split dynamic imports into separate chunks. Users download only the core bundle on first load, fetching view chunks lazily on demand as they navigate.',
          bn: 'Vite বা Webpack ডায়নামিক ইমপোর্ট পেলে আলাদা জাভাস্ক্রিপ্ট ফাইল তৈরি করে। ইউজার যে পেজে যায় শুধু সেই পেজের কোড লোড হয়, ফলে অ্যাপ দ্রুত খুলে যায়।'
        }
      },
      {
        id: 'q-scrollbehavior-smooth-restoration',
        kind: 'mcq',
        topic: 'scrollBehavior option for maintaining scroll position across routes',
        question: {
          en: 'How can developers configure Vue Router 4 to automatically scroll to the top of the page on route changes, but restore previous scroll positions on browser back/forward buttons?',
          bn: 'রুট বদলালে স্ক্রিন যাতে পেজের শুরুতে চলে যায় এবং ব্যাক বাটনে আগের পজিশন ফিরে পায়, সেজন্য Vue Router ৪-এ কীভাবে কনফিগার করা হয়?'
        },
        options: [
          {
            en: 'Provide a "scrollBehavior(to, from, savedPosition)" function to createRouter that returns "savedPosition" if present, or "{ top: 0 }" otherwise',
            bn: 'createRouter-এ "scrollBehavior(to, from, savedPosition)" ফাংশন দিয়ে, যা "savedPosition" থাকলে তা রিটার্ন করে অথবা "{ top: 0 }" দেয়'
          },
          {
            en: 'Write an infinite while loop calling window.scrollTo(0, 0)',
            bn: 'window.scrollTo(0, 0) ডেকে একটি অবিরাম হোয়াইল লুপ লিখে'
          },
          {
            en: 'Scroll behavior cannot be customized in Vue Router',
            bn: 'Vue Router-এ স্ক্রল আচরণ কাস্টমাইজ করা যায় না'
          },
          {
            en: 'Set the CSS overflow property on body to hidden',
            bn: 'বডিতে সিএসএস overflow প্রোপার্টি hidden করে দিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'scrollBehavior coordinates smooth page scrolling and saved position restoration.',
          bn: 'scrollBehavior নতুন পেজে উপরে নেওয়া ও ব্যাক বাটনে পূর্বের স্ক্রল মনে রাখার কাজ করে।'
        },
        explanation: {
          en: 'Vue Router\'s scrollBehavior option receives to, from, and savedPosition (available during popstate browser navigation). Returning { top: 0 } scrolls new pages to the top.',
          bn: 'scrollBehavior দিয়ে সুন্দরভাবে স্ক্রল নিয়ন্ত্রণ করা যায়। ব্যাক বাটন চাপলে savedPosition ফিরিয়ে দিয়ে ব্যবহারকারী যেখানে ছিল সেখানেই ঠিক রেখে দেয়।'
        }
      },
      {
        id: 'q-onbeforerouteleave-dirty-form-check',
        kind: 'mcq',
        topic: 'preventing data loss with onBeforeRouteLeave in composition api',
        question: {
          en: 'How can a form component warn users and prevent accidental navigation if they have unsaved form edits in Vue 3?',
          bn: 'ফর্মের তথ্য সেভ না করে ইউজার যাতে ভুল করে অন্য পেজে চলে না যায়, সেজন্য Vue ৩-এ কীভাবে সতর্কবার্তা দেখানো হয়?'
        },
        options: [
          {
            en: 'Use the "onBeforeRouteLeave((to, from) => { ... })" hook to prompt the user with a confirmation modal, returning false if they cancel to abort the navigation transition',
            bn: '"onBeforeRouteLeave((to, from) => { ... })" হুক ব্যবহার করে নিশ্চিতকরণ বার্তা দেখানো এবং ব্যবহারকারী বাতিল করলে false রিটার্ন করে নেভিগেশন আটকে দেওয়া'
          },
          {
            en: 'Disable the computer mouse right click button',
            bn: 'কম্পিউটার মাউসের ডান পাশের বাটন অকেজো করে দেওয়া'
          },
          {
            en: 'Shut down the web server immediately upon form input',
            bn: 'ফর্মে লেখা শুরু করা মাত্র ওয়েব সার্ভার বন্ধ করে দেওয়া'
          },
          {
            en: 'It is impossible to prevent user navigation in modern browsers',
            bn: 'আধুনিক ব্রাউজারে ইউজারের নেভিগেশন থামানো একেবারেই অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'onBeforeRouteLeave allows components to intercept and cancel departures.',
          bn: 'onBeforeRouteLeave ব্যবহারকারীর পেজ ছেড়ে চলে যাওয়া শনাক্ত করে তা বাতিল করতে পারে।'
        },
        explanation: {
          en: 'The in-component navigation hook onBeforeRouteLeave runs before the user navigates away. Returning false cancels navigation, giving users a chance to save unsaved draft edits.',
          bn: 'onBeforeRouteLeave হুক পেজ পরিবর্তনের আগে চলে। ইউজার যদি কোনো ডাটা সেভ না করে বের হতে চায়, তবে একটি সতর্কবার্তা দিয়ে false রিটার্ন করলেই পেজ পরিবর্তন আটকে যায়।'
        }
      },
      {
        id: 'q-dynamic-routing-addroute-api',
        kind: 'mcq',
        topic: 'dynamic route registration with router.addRoute()',
        question: {
          en: 'How can an application dynamically register administrative routes only after an admin user logs in and role permissions are loaded from the backend?',
          bn: 'ব্যবহারকারী লগইন করার পর এবং রোল যাচাই শেষে ব্যাকএন্ডের তথ্যের ওপর ভিত্তি করে কীভাবে ডায়নামিকভাবে নতুন রুট যোগ করা হয়?'
        },
        options: [
          {
            en: 'Call "router.addRoute(routeDefinition)" dynamically at runtime after role permissions have resolved',
            bn: 'পারমিশন যাচাই শেষে রানটাইমে সরাসরি "router.addRoute(routeDefinition)" কল করার মাধ্যমে'
          },
          {
            en: 'Rewrite the router JavaScript source code on the user hard drive',
            bn: 'ব্যবহারকারীর হার্ডড্রাইভে রাউটারের মূল সোর্স কোড পুনরায় লিখে'
          },
          {
            en: 'Force the user to clear their browser DNS cache',
            bn: 'ব্যবহারকারীকে ব্রাউজারের ডিএনএস ক্যাশ ক্লিয়ার করতে বাধ্য করে'
          },
          {
            en: 'Dynamic route injection is strictly forbidden in single-page apps',
            bn: 'সিঙ্গেল-পেজ অ্যাপে রানটাইমে রুট যোগ করা কঠোরভাবে নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'router.addRoute() dynamically appends routes at runtime.',
          bn: 'router.addRoute() রানটাইমে সরাসরি নতুন রুট সিস্টেমে যুক্ত করতে পারে।'
        },
        explanation: {
          en: 'Vue Router provides router.addRoute() and router.removeRoute() to dynamically register routes based on runtime criteria, such as role-based access control (RBAC) after user authentication.',
          bn: 'router.addRoute() দিয়ে রানটাইমে রুট তৈরি করা যায়। ফলে সাধারণ ব্যবহারকারীদের বান্ডলে অ্যাডমিন রুট লোড না করে কেবল অনুমোদিত ব্যবহারকারীদের জন্যই তা তৈরি করা সম্ভব।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-pinia-treasury',
    title: {
      en: 'Pinia State Management — Stores, Getters, Actions & Plugins',
      bn: 'Pinia স্টেট ম্যানেজমেন্ট — স্টোরস, গেটার্স, অ্যাকশনস ও প্লাগইনস'
    }
  }
};
