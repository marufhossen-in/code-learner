import type { Lesson } from '../../../lib/types';

export const corridorPostsLesson: Lesson = {
  slug: 'the-corridor-posts',
  tech: 'angular',
  title: {
    en: 'Angular Router — Functional Guards, Route Inputs & Lazy Loading',
    bn: 'Angular রাউটার — ফাংশনাল গার্ডস, রুট ইনপুটস ও লেজি লোডিং'
  },
  summary: {
    en: 'Client-side routing connects URLs to view component hierarchies without full browser reloads. In this lesson, you will master Angular Router 17+ architecture: configure provideRouter withComponentInputBinding to deliver route params as component inputs, implement functional CanActivateFn guards for authentication, orchestrate nested layouts with router-outlet, and lazy-load views via loadComponent.',
    bn: 'ব্রাউজার রিফ্রেশ ছাড়াই ইউআরএলের সাথে বিভিন্ন ভিউ কম্পোনেন্ট যুক্ত করতে ক্লায়েন্ট-সাইড রাউটিং প্রয়োজন। এই পাঠে আপনি Angular Router 17+ এর আধুনিক আর্কিটেকচার শিখবেন: provideRouter ও withComponentInputBinding দিয়ে রুট প্যারামিটারকে কম্পোনেন্ট ইনপুটে রূপান্তর, প্রমাণীকরণে ফাংশনাল CanActivateFn গার্ড, router-outlet দিয়ে নেস্টেড লেআউট এবং loadComponent দিয়ে ভিউ লেজি-লোড করার কৌশল।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'angular-router-architecture',
      text: {
        en: 'The Modern Angular Router Architecture and Routing Table',
        bn: 'আধুনিক Angular রাউটার আর্কিটেকচার ও রাউটিং টেবিল'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When users navigate between distinct views in a Single-Page Application (SPA), the Angular Router intercepts browser URL changes and swaps component trees without downloading new HTML documents. Modern Angular configures routing via the functional provideRouter() API, decoupling parameter parsing, lazy-loading component chunks on demand, and securing routes with functional guards.',
        bn: 'সিঙ্গেল-পেজ অ্যাপ্লিকেশনে (SPA) ব্যবহারকারী যখন বিভিন্ন ভিউতে চলাচল করেন, তখন Angular রাউটার ইউআরএল পরিবর্তন পর্যবেক্ষণ করে নতুন এইচটিএমএল ডাউনলোড ছাড়াই স্ক্রিন পরিবর্তন করে। আধুনিক Angular-এ provideRouter() দিয়ে রাউটিং সাজানো হয়, যা রুট প্যারামিটার আলাদা করা, প্রয়োজন অনুযায়ী কম্পোনেন্ট লেজি-লোড করা এবং ফাংশনাল গার্ড দিয়ে পেজ সুরক্ষিত করার কাজ সম্পন্ন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'provideRouter()',
          def: {
            en: 'The root application configuration function that registers route definitions and router features in standalone apps.',
            bn: 'স্ট্যান্ডঅ্যালোন অ্যাপ্লিকেশনে রুট সংজ্ঞাসমূহ ও রাউটার ফিচারসমূহ যুক্ত করার প্রধান কনফিগারেশন ফাংশন।'
          }
        },
        {
          term: 'CanActivateFn',
          def: {
            en: 'A modern functional guard signature evaluating authentication before allowing navigation into a route.',
            bn: 'একটি আধুনিক ফাংশনাল গার্ড যা কোনো রুটে প্রবেশের পূর্বে ইউজারের প্রমাণীকরণ ও অনুমতি যাচাই করে।'
          }
        },
        {
          term: 'withComponentInputBinding()',
          def: {
            en: 'A router feature flag mapping route path parameters (:id) directly to component input() signals.',
            bn: 'একটি রাউটার ফিচার যা রুটের ডায়নামিক প্যারামিটারকে (:id) সরাসরি কম্পোনেন্টের input() সিগন্যালে পৌঁছে দেয়।'
          }
        },
        {
          term: 'loadComponent',
          def: {
            en: 'A route property importing standalone components lazily on demand: () => import("./view.component").',
            bn: 'একটি রুট প্রোপার্টি যা ব্যবহারের সময় প্রয়োজন অনুযায়ী কম্পোনেন্টকে লেজি-লোড করে আনে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'router-features-matrix',
      text: {
        en: 'Router Architecture Features and Syntax Matrix',
        bn: 'রাউটার আর্কিটেকচার ফিচার ও সিনট্যাক্স ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Router Feature', bn: 'রাউটার ফিচার' },
        { en: 'Configuration Syntax', bn: 'কনফিগারেশন সিনট্যাক্স' },
        { en: 'Runtime Behavior', bn: 'রানটাইম আচরণ' }
      ],
      rows: [
        [
          { en: 'Lazy-Loaded Route', bn: 'লেজি-লোডেড রুট' },
          { en: '{ path: "admin", loadComponent: () => import("./admin.component") }', bn: '{ path: "admin", loadComponent: () => import("./admin.component") }' },
          { en: 'Downloads JavaScript chunk only when user visits "/admin"', bn: 'ব্যবহারকারী কেবল "/admin"-এ ঢুকলেই কোড চাঙ্কটি ডাউনলোড হয়' }
        ],
        [
          { en: 'Functional Auth Guard', bn: 'ফাংশনাল অথ গার্ড' },
          { en: 'canActivate: [(route, state) => inject(AuthService).isLoggedIn()]', bn: 'canActivate: [(route, state) => inject(AuthService).isLoggedIn()]' },
          { en: 'Blocks unauthenticated visitors or redirects them to login', bn: 'অননুমোদিত ব্যবহারকারীদের আটকে লগইন পেজে রিডাইরেক্ট করে' }
        ],
        [
          { en: 'Route Input Binding', bn: 'রুট ইনপুট বাইন্ডিং' },
          { en: 'provideRouter(routes, withComponentInputBinding())', bn: 'provideRouter(routes, withComponentInputBinding())' },
          { en: 'Binds :id in path "/users/:id" to component readonly id = input<string>()', bn: 'ইউআরএলের :id সরাসরি কম্পোনেন্টের input<string>()-এ পাস করে' }
        ],
        [
          { en: 'Nested Child Outlet', bn: 'নেস্টেড চাইল্ড আউটলেট' },
          { en: '<router-outlet /> inside parent component template', bn: 'প্যারেন্ট কম্পোনেন্ট টেমপ্লেটের ভেতর <router-outlet />' },
          { en: 'Renders child route components without reloading parent layout shell', bn: 'প্যারেন্ট লেআউট ঠিক রেখে কেবল ভেতরের চাইল্ড কম্পোনেন্ট রেন্ডার করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'router-simulation-code',
      text: {
        en: 'Working Functional Guard and Route Input Simulation',
        bn: 'কার্যকরী ফাংশনাল গার্ড ও রুট ইনপুট সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Angular Router 17+ Functional Guard and Input Binding Pipeline
class MockAngularRouter {
  constructor(routes) {
    this.routes = routes;
  }

  // Simulates route transition with functional CanActivateFn guards
  async navigate(url, context) {
    // Parse dynamic segments e.g. /orders/501
    const parts = url.split('/').filter(Boolean);
    const matched = this.routes.find(r => {
      const routeParts = r.path.split('/').filter(Boolean);
      return routeParts.length === parts.length && routeParts[0] === parts[0];
    });

    if (!matched) {
      return { status: 404, error: 'Route not found' };
    }

    // Execute functional CanActivateFn guards
    if (matched.canActivate) {
      for (const guard of matched.canActivate) {
        const allowed = await guard(context);
        if (!allowed) {
          return { status: 403, redirectedTo: '/login', allowed: false };
        }
      }
    }

    // Extract dynamic route param
    const routeParamId = parts[1] ? parseInt(parts[1], 10) : null;

    return {
      status: 200,
      component: matched.componentName,
      boundInputs: { id: routeParamId },
      allowed: true
    };
  }
}

// Define functional guard
const authGuardFn = ctx => ctx.isLoggedIn === true;

const routes = [
  { path: 'login', componentName: 'LoginComponent' },
  { path: 'orders/:id', componentName: 'OrderDetailComponent', canActivate: [authGuardFn] }
];

const router = new MockAngularRouter(routes);

async function runRouterDemo() {
  // 1. Guest user attempts to view Order 501
  const guestResult = await router.navigate('/orders/501', { isLoggedIn: false });

  // 2. Authenticated user navigates to Order 501
  const userResult = await router.navigate('/orders/501', { isLoggedIn: true });

  console.log('Guest navigation status:', guestResult.status);
  // -> Guest navigation status: 403
  console.log('Guest redirected target path:', guestResult.redirectedTo);
  // -> Guest redirected target path: /login
  console.log('Authenticated user navigation status:', userResult.status);
  // -> Authenticated user navigation status: 200
  console.log('Bound dynamic route input ID:', userResult.boundInputs.id);
  // -> Bound dynamic route input ID: 501
}

runRouterDemo();`,
      caption: {
        en: 'Router blocks guest with 403 redirecting to /login, then allows user binding input ID 501',
        bn: 'রাউটার গেস্টকে ৪০৩ দিয়ে /login-এ পাঠায় এবং পরে লগইন করা ইউজারকে আইডি ৫০১ বাইন্ড করে অনুমতি দেয়'
      }
    },
    {
      type: 'heading',
      id: 'routing-discipline-rules',
      text: {
        en: 'Routing Best Practices and Decoupling Discipline',
        bn: 'রাউটিং সেরা অনুশীলন ও ডিকাপলিং নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To keep UI components decoupled and easily testable, never inject ActivatedRoute directly into visual presentational components. Enable withComponentInputBinding() in provideRouter so components receive route parameters as standard input() signals. Lazy-load all route views using loadComponent to minimize initial bundle size.',
        bn: 'কম্পোনেন্টগুলোকে স্বাধীন ও সহজে টেস্টযোগ্য রাখতে ভিজ্যুয়াল কম্পোনেন্টে সরাসরি ActivatedRoute ইনজেক্ট করবেন না। provideRouter-এ withComponentInputBinding() চালু করুন যাতে কম্পোনেন্টগুলো সাধারণ input() সিগন্যাল হিসেবে রুট প্যারামিটার পেতে পারে। এবং প্রাথমিক বান্ডল সাইজ কমাতে loadComponent দিয়ে প্রতিটি রুট পেজ লেজি-লোড করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Enable withComponentInputBinding(): Pass route params and query params directly into component input() signals.',
          bn: '১. withComponentInputBinding() ব্যবহার: ইউআরএল প্যারামিটারগুলোকে সরাসরি কম্পোনেন্টের input() সিগন্যালে গ্রহণ করুন।'
        },
        {
          en: '2. Prefer Functional Guards: Author guards as simple functions matching CanActivateFn rather than verbose class guards.',
          bn: '২. ফাংশনাল গার্ড প্রাধান্য দিন: ক্লাসের বদলে সাধারণ ফাংশন হিসেবে CanActivateFn গার্ড লিখুন।'
        },
        {
          en: '3. Lazy-Load via loadComponent: Keep initial bundle size small by loading standalone views dynamically: () => import(...).',
          bn: '৩. loadComponent দিয়ে লেজি লোডিং: প্রাথমিক লোডিং গতি বাড়াতে ভিউ কম্পোনেন্টগুলোকে ডায়নামিক ইমপোর্ট দিয়ে লোড করুন।'
        },
        {
          en: '4. Prevent Dirty Departures with canDeactivate: Guard unsaved form edits by prompting users with a confirmation modal before leaving.',
          bn: '৪. canDeactivate দিয়ে তথ্য সুরক্ষা: অসম্পূর্ণ ফর্ম পূরণ অবস্থায় পেজ ছেড়ে যাওয়া ঠেকাতে canDeactivate গার্ড ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-cor-ex1',
      kind: 'mcq',
      topic: 'withComponentInputBinding decoupling benefits',
      question: {
        en: 'What architectural decoupling benefit does "withComponentInputBinding()" provide when configuring Angular Router?',
        bn: 'Angular রাউটার কনফিগার করার সময় "withComponentInputBinding()" কোন আর্কিটেকচারাল সুবিধা দেয়?'
      },
      options: [
        {
          en: 'It binds route params (e.g. ":id") and query params directly to component "input()" signals, allowing the component to be reused and unit-tested without depending on the "ActivatedRoute" service',
          bn: 'এটি রুটের প্যারামিটারগুলোকে (যেমন ":id") সরাসরি কম্পোনেন্টের "input()" সিগন্যালে পাস করে, যার ফলে "ActivatedRoute" সার্ভিস ছাড়াই উপাদানটিকে টেস্ট ও অন্য জায়গায় ব্যবহার করা যায়'
        },
        {
          en: 'It disables all URL routing completely across the browser',
          bn: 'এটি ব্রাউজারের সমস্ত ইউআরএল রাউটিং বন্ধ করে দেয়'
        },
        {
          en: 'It forces the browser to request high-resolution satellite imagery',
          bn: 'এটি ব্রাউজারকে স্যাটেলাইট ছবি ডাউনলোড করতে বাধ্য করে'
        },
        {
          en: 'withComponentInputBinding only supports numbers between 0 and 100',
          bn: 'withComponentInputBinding কেবল ০ থেকে ১০০ এর মধ্যকার সংখ্যা সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'withComponentInputBinding turns route parameters into standard component inputs.',
        bn: 'withComponentInputBinding ইউআরএল ডাটাকে সাধারণ কম্পোনেন্ট ইনপুটে রূপান্তর করে।'
      },
      explanation: {
        en: 'Previously, components had to inject ActivatedRoute and subscribe to paramMap. withComponentInputBinding() maps route params directly to input signals, keeping components pure and decoupled.',
        bn: 'আগে ActivatedRoute ইনজেক্ট করে paramMap সাবস্ক্রাইব করতে হতো। এখন withComponentInputBinding দিলে কম্পোনেন্ট নিজে থেকেই সাধারণ ইনপুট হিসেবে আইডি পেয়ে যায়।'
      }
    },
    {
      id: 'ng-cor-ex2',
      kind: 'mcq',
      topic: 'functional CanActivateFn guard advantages over legacy class guards',
      question: {
        en: 'Why did Angular deprecate class-based route guards in favor of functional "CanActivateFn" guards?',
        bn: 'Angular পুরোনো ক্লাস-ভিত্তিক গার্ড বাদ দিয়ে ফাংশনাল "CanActivateFn" গার্ড কেন এনেছে?'
      },
      options: [
        {
          en: 'Functional guards eliminate boilerplate class declarations and allow executing DI lookups directly via "inject()", enabling cleaner, highly composable inline security predicates',
          bn: 'ফাংশনাল গার্ড ক্লাসের অপ্রয়োজনীয় কোড দূর করে এবং সরাসরি "inject()" ব্যবহারের সুযোগ দেয়, ফলে নিরাপত্তা শর্তগুলো পরিষ্কার ও সহজে পুনর্ব্যবহারযোগ্য হয়'
        },
        {
          en: 'Classes were completely deleted from JavaScript specifications',
          bn: 'ক্লাসকে জাভাস্ক্রিপ্ট স্পেসিফিকেশন থেকে পুরোপুরি মুছে ফেলা হয়েছে'
        },
        {
          en: 'Class guards take 10 minutes to compile in modern computers',
          bn: 'আধুনিক কম্পিউটারে ক্লাস গার্ড কমপাইল হতে ১০ মিনিট সময় লাগে'
        },
        {
          en: 'Functional guards can only be written in Python',
          bn: 'ফাংশনাল গার্ড কেবলমাত্র পাইথনে লেখা সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'CanActivateFn guards are pure functions that call inject() to check permissions.',
        bn: 'CanActivateFn সাধারণ ফাংশন যা inject() ডেকে সরাসরি নিরাপত্তা যাচাই করে।'
      },
      explanation: {
        en: 'Class guards required boilerplate (@Injectable, class, canActivate method, constructor injection). Functional guards are single functions that call inject(AuthService), dramatically simplifying auth logic.',
        bn: 'ক্লাস গার্ড বানাতে অনেক অপ্রয়োজনীয় কোড লিখতে হতো। ফাংশনাল গার্ড একটিমাত্র লাইনে inject(AuthService) ডেকে অনুমতি যাচাই করে ফেলে।'
      }
    },
    {
      id: 'ng-cor-ex3',
      kind: 'mcq',
      topic: 'loadComponent code-splitting performance benefits',
      question: {
        en: 'What performance benefit is achieved by configuring route components with "loadComponent: () => import(\'./admin.component\')"?',
        bn: '"loadComponent: () => import(\'./admin.component\')" দিয়ে রুট সাজালে কী ধরনের পারফরম্যান্স উন্নতি হয়?'
      },
      options: [
        {
          en: 'It enables route-level code splitting: the JavaScript bundle for the admin view is only downloaded across the network when the user actually navigates to "/admin", drastically cutting initial load times',
          bn: 'এটি রুট-স্তরের কোড স্প্লিটিং নিশ্চিত করে: ব্যবহারকারী যখন সত্যিই "/admin"-এ যাবে তখনই কেবল ফাইল ডাউনলোড হবে, ফলে প্রাথমিক পেজ লোডের সময় অনেক কমে যায়'
        },
        {
          en: 'It doubles the physical memory RAM of the user computer',
          bn: 'এটি ব্যবহারকারীর কম্পিউটারের ফিজিক্যাল র্যাম দ্বিগুণ করে দেয়'
        },
        {
          en: 'loadComponent deletes all unused images from the web hosting server',
          bn: 'loadComponent ওয়েব সার্ভার থেকে সব অব্যবহৃত ছবি মুছে ফেলে'
        },
        {
          en: 'It disables all network security on the client browser',
          bn: 'এটি ক্লায়েন্ট ব্রাউজারে সমস্ত নেটওয়ার্ক নিরাপত্তা বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'loadComponent downloads route code chunks on demand instead of in the initial bundle.',
        bn: 'loadComponent প্রথম পেজ লোডের সময় কোড না টেনে কেবল প্রয়োজনের সময় নামিয়ে আনে।'
      },
      explanation: {
        en: 'Bundlers create separate chunks for dynamic imports. With loadComponent, heavy views (like admin portals or reporting suites) are deferred until navigation, speeding up initial page loads.',
        bn: 'ডায়নামিক ইমপোর্ট দিলে আলাদা জাভাস্ক্রিপ্ট ফাইল তৈরি হয়। ইউজার যে রুটে যায় কেবল সেই ফাইলের কোড লোড হয়, ফলে অ্যাপ অত্যন্ত দ্রুত খুলে যায়।'
      }
    },
    {
      id: 'ng-cor-ex4',
      kind: 'mcq',
      topic: 'redirecting with UrlTree in modern functional guards',
      question: {
        en: 'How should an Angular "CanActivateFn" guard redirect an unauthenticated visitor to the "/login" page?',
        bn: 'অননুমোদিত ব্যবহারকারীকে "/login" পেজে পাঠাতে কোনো "CanActivateFn" গার্ডে কীভাবে রিডাইরেক্ট করা উচিত?'
      },
      options: [
        {
          en: 'Return a "UrlTree" created via "inject(Router).parseUrl(\'/login\')" or "inject(Router).createUrlTree([\'/login\'])"',
          bn: '"inject(Router).parseUrl(\'/login\')" অথবা "inject(Router).createUrlTree([\'/login\'])"-এর মাধ্যমে তৈরি একটি "UrlTree" রিটার্ন করে'
        },
        {
          en: 'Write an infinite while loop calling window.location.reload()',
          bn: 'window.location.reload() ডেকে একটি অবিরাম হোয়াইল লুপ লিখে'
        },
        {
          en: 'Throw a fatal syntax error to crash the Angular runtime',
          bn: 'Angular রানটাইম ক্র্যাশ করাতে একটি ফ্যাটাল সিনট্যাক্স এরর ছুড়ে'
        },
        {
          en: 'Functional guards cannot redirect; they can only cancel navigation',
          bn: 'ফাংশনাল গার্ড কোনো রিডাইরেক্ট করতে পারে না; কেবল নেভিগেশন বাতিল করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Returning a UrlTree cancels the current navigation and starts a new one to the redirect target.',
        bn: 'UrlTree রিটার্ন করলে বর্তমান নেভিগেশন বাতিল হয়ে রিডাইরেক্ট পেজ লোড হয়।'
      },
      explanation: {
        en: 'Returning a UrlTree is the recommended way to redirect from guards in Angular. It cleanly cancels the active navigation and dispatches a new navigation to the target UrlTree without race conditions.',
        bn: 'Angular-এ রিডাইরেক্টের জন্য UrlTree রিটার্ন করাই আদর্শ নিয়ম। parseUrl("/login") একটি UrlTree দেয় যা বর্তমান রিকোয়েস্ট বন্ধ করে সুন্দরভাবে লগইন পেজ খুলে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-corridor-posts-quiz',
    title: {
      en: 'Angular Router & Navigation Guards Quiz',
      bn: 'Angular রাউটার ও নেভিগেশন গার্ডস কুইজ'
    },
    questions: [
      {
        id: 'q-candeactivate-dirty-form-modal',
        kind: 'mcq',
        topic: 'canDeactivateFn preventing accidental form data loss',
        question: {
          en: 'How does a "CanDeactivateFn" guard protect users from losing unsaved edits when accidentally clicking a navigation link?',
          bn: 'ভুলবশত অন্য পেজের লিংকে ক্লিক করলে অসম্পূর্ণ ফর্ম যাতে নষ্ট না হয়, সেজন্য "CanDeactivateFn" গার্ড কীভাবে সুরক্ষা দেয়?'
        },
        options: [
          {
            en: 'It executes before the user navigates away, allowing the component to inspect form dirty state and display a confirmation prompt; returning false halts the navigation transition',
            bn: 'পেজ পরিবর্তন হওয়ার ঠিক আগে এটি সক্রিয় হয় এবং ফর্মে অসংরক্ষিত ডাটা থাকলে ব্যবহারকারীকে সতর্কবার্তা দেখায়; ব্যবহারকারী বাতিল করলে false রিটার্ন করে নেভিগেশন আটকে দেয়'
          },
          {
            en: 'It permanently disables the computer mouse buttons',
            bn: 'এটি কম্পিউটার মাউসের বাটনগুলো স্থায়ীভাবে অকেজো করে দেয়'
          },
          {
            en: 'It sends an alert to the user internet service provider',
            bn: 'এটি ইন্টারনেট সার্ভিস প্রোভাইডারের কাছে একটি সতর্কতা পাঠায়'
          },
          {
            en: 'CanDeactivate only works when running inside the Firefox browser',
            bn: 'CanDeactivate কেবল ফায়ারফক্স ব্রাউজারে চললেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'CanDeactivateFn intercepts route departures and can return false to cancel navigation.',
          bn: 'CanDeactivateFn পেজ ছেড়ে যাওয়া আটকে ব্যবহারকারীর অমূল্য ডাটা রক্ষা করে।'
        },
        explanation: {
          en: 'CanDeactivate guards inspect the leaving component instance. If form.dirty is true, it prompts the user. If the user cancels, the guard returns false to stay on the page.',
          bn: 'CanDeactivate কম্পোনেন্টের ফর্ম স্টেট পরীক্ষা করে। ডাটা সেভ না থাকলে কনফার্মেশন বার্তা দেখায় এবং false রিটার্ন করে পেজ ছেড়ে যাওয়া প্রতিহত করে।'
        }
      },
      {
        id: 'q-nested-routes-and-router-outlet',
        kind: 'mcq',
        topic: 'nested routes and multi-level router-outlet hierarchy',
        question: {
          en: 'When constructing multi-level dashboard layouts (e.g. /dashboard/analytics, /dashboard/settings), where are sub-route components rendered?',
          bn: 'নেস্টেড ড্যাশবোর্ড লেআউটের ক্ষেত্রে (যেমন /dashboard/analytics বা /dashboard/settings) ভেতরের চাইল্ড কম্পোনেন্টগুলো কোথায় রেন্ডার হয়?'
        },
        options: [
          {
            en: 'Inside the "<router-outlet />" declared in the parent Dashboard component template, preserving the parent layout shell while swapping only the sub-view',
            bn: 'প্যারেন্ট ড্যাশবোর্ড কম্পোনেন্টের ভেতর থাকা "<router-outlet />"-এ, ফলে প্যারেন্টের মূল ফ্রেম ঠিক রেখে কেবল ভেতরের সাব-ভিউটি পরিবর্তিত হয়'
          },
          {
            en: 'Sub-routes are displayed inside browser popup windows',
            bn: 'সাব-রুটগুলো ব্রাউজার পপআপ উইন্ডোর ভেতর প্রদর্শিত হয়'
          },
          {
            en: 'They overwrite the entire HTML head title tag',
            bn: 'তারা পুরো এইচটিএমএল head টাইটেল ট্যাগটিকে ওভাররাইট করে'
          },
          {
            en: 'Angular Router does not support nested route hierarchies',
            bn: 'Angular রাউটার কোনো নেস্টেড রুট হায়ারার্কি সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nested child routes render inside the parent component router-outlet.',
          bn: 'নেস্টেড চাইল্ড রুটগুলো প্যারেন্টের router-outlet ট্যাগের ভেতর প্রদর্শিত হয়।'
        },
        explanation: {
          en: 'Angular supports arbitrary levels of nested routes via children: [...]. The parent component renders a <router-outlet />, allowing sidebar and navigation shells to persist while child content updates.',
          bn: 'জটিল অ্যাপ্লিকেশনে সাইডবার বা মেনু স্থির রেখে কেবল ভেতরের অংশ বদলাতে চাইল্ড রুট ও নেস্টেড <router-outlet /> ব্যবহার করা হয়।'
        }
      },
      {
        id: 'q-routerlinkactive-styling',
        kind: 'mcq',
        topic: 'highlighting active navigation links with routerLinkActive',
        question: {
          en: 'What does the "routerLinkActive" directive accomplish on navigation links: "<a routerLink=\"/users\" routerLinkActive=\"active-nav\">Users</a>"?',
          bn: 'নেভিগেশন লিংকে "routerLinkActive" ডিরেক্টিভ কী কাজ করে: "<a routerLink=\"/users\" routerLinkActive=\"active-nav\">Users</a>"?'
        },
        options: [
          {
            en: 'It automatically toggles the "active-nav" CSS class on the anchor element whenever the browser URL matches the link target path',
            bn: 'ব্রাউজারের বর্তমান ইউআরএল লিংকের ঠিকানার সাথে মিলে গেলে এটি লিংকের ট্যাগে স্বয়ংক্রিয়ভাবে "active-nav" সিএসএস ক্লাস যুক্ত করে'
          },
          {
            en: 'It increases the font size of the entire webpage by 200%',
            bn: 'এটি পুরো ওয়েবপেজের ফন্ট সাইজ ২০০% বাড়িয়ে দেয়'
          },
          {
            en: 'It plays an audio chime sound whenever the link is hovered',
            bn: 'লিংকের ওপর মাউস নিলে এটি একটি অডিও শব্দ বাজায়'
          },
          {
            en: 'routerLinkActive permanently hides all unclicked links',
            bn: 'routerLinkActive ক্লিক না করা সব লিংক চিরতরে লুকিয়ে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'routerLinkActive applies a CSS class to indicate the active navigation route.',
          bn: 'routerLinkActive সক্রিয় পেজের লিংকে নির্দিষ্ট সিএসএস ক্লাস বসিয়ে উজ্জ্বল করে।'
        },
        explanation: {
          en: 'routerLinkActive monitors router state. When the link route matches the current URL, it adds the specified CSS classes, allowing developers to visually highlight the current navigation tab.',
          bn: 'ব্যবহারকারী বর্তমানে কোন পেজে আছে তা বোঝাতে মেনুতে হাইলাইট করা দরকার হয়। routerLinkActive নিজে থেকেই সেই লিংকে ক্লাস যোগ করে সক্রিয় রাখে।'
        }
      },
      {
        id: 'q-route-resolvers-pre-fetching',
        kind: 'mcq',
        topic: 'pre-fetching route data using modern functional ResolveFn',
        question: {
          en: 'What architectural problem does a functional "ResolveFn" resolver solve before a route component is rendered?',
          bn: 'কোনো রুট কম্পোনেন্ট রেন্ডার হওয়ার পূর্বে ফাংশনাল "ResolveFn" রিজলভার কোন আর্কিটেকচারাল সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It pre-fetches critical data from backend APIs before navigation completes, preventing visual layout popping and empty states by ensuring the component mounts with data already available',
            bn: 'নেভিগেশন শেষ হওয়ার আগেই ব্যাকএন্ড থেকে প্রয়োজনীয় ডাটা টেনে আনে, যার ফলে কম্পোনেন্ট মাউন্ট হওয়ার সাথে সাথেই ডাটা পেয়ে যায় এবং খালি স্ক্রিন বা লেআউট কাঁপুনির সৃষ্টি হয় না'
          },
          {
            en: 'It reboots the backend database server',
            bn: 'এটি ব্যাকএন্ড ডাটাবেজ সার্ভার রিবুট করে দেয়'
          },
          {
            en: 'It forces the client to download a 10 GB cache file',
            bn: 'এটি ক্লায়েন্টকে একটি ১০ গিগাবাইট ক্যাশ ফাইল ডাউনলোড করতে বাধ্য করে'
          },
          {
            en: 'Resolvers can only be used with static text files',
            bn: 'রিজলভার কেবলমাত্র স্ট্যাটিক টেক্সট ফাইলের সাথেই ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Resolvers fetch necessary data before the route component is mounted.',
          bn: 'রিজলভার কম্পোনেন্ট স্ক্রিনে আসার আগেই ব্যাকএন্ড থেকে ডাটা নিয়ে প্রস্তুত থাকে।'
        },
        explanation: {
          en: 'Resolvers delay navigation until required data arrives. When the target component renders, the data is already resolved, preventing flash-of-empty-content (FOEC) UI artifacts.',
          bn: 'পেজে ঢোকার পর লোডার ঘুরতে না দিয়ে আগে থেকেই ডাটা এনে পেজ সাজিয়ে ইউজারকে দেখানোই রিজলভারের কাজ। এতে অ্যাপের অভিজ্ঞতা অনেক মসৃণ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-permit-bureau',
    title: {
      en: 'Reactive Forms & Validation — FormControl, FormGroup & Async Validators',
      bn: 'রিঅ্যাক্টিভ ফর্মস ও ভ্যালিডেশন — FormControl, FormGroup ও অ্যাসিনক্রোনাস ভ্যালিডেটরস'
    }
  }
};
