import type { Lesson } from '../../../lib/types';

export const GuardsAndTheAuthLesson: Lesson = {
  slug: 'guards-and-the-auth',
  tech: 'laravel',
  title: {
    en: 'Authentication, Gates, Policies & Sanctum API Tokens',
    bn: 'প্রমাণীকরণ, গেট, পলিসি এবং স্যাঙ্কটাম এপিআই টোকেন'
  },
  summary: {
    en: 'Master the complete Laravel security ecosystem: understand session vs token Guards, authenticate users via Auth::attempt(), enforce authorization using Closure Gates and model Policies ($this->authorize()), and issue scoped personal access tokens using Laravel Sanctum.',
    bn: 'লারাভেলের পূর্ণাঙ্গ নিরাপত্তা ইকোসিস্টেম আয়ত্ত করুন: সেশন বনাম টোকেন গার্ড, Auth::attempt() দিয়ে প্রমাণীকরণ, ক্লোজার গেট ও মডেল পলিসি ($this->authorize()) দিয়ে অনুমতি নির্ধারণ এবং লারাভেল স্যাঙ্কটাম দিয়ে এপিআই টোকেন প্রদান।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'authentication-architecture-heading',
      text: {
        en: 'The Authentication Ecosystem: Guards, Providers, and Auth::attempt()',
        bn: 'প্রমাণীকরণ ইকোসিস্টেম: গার্ড, প্রোভাইডার এবং Auth::attempt()'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel (the web framework) structures authentication into two modular building blocks: Guards and User Providers configured inside config/auth.php. Guards define how credentials are authenticated for each incoming request (such as session cookies for web browsers or Bearer tokens for mobile apps). User Providers define how user records are retrieved from database storage (typically via Eloquent). Calling Auth::attempt($credentials) queries the user by email, verifies the password hash cryptographically, regenerates the session ID to prevent fixation, and stores the user ID in session memory.',
        bn: 'লারাভেল (ওয়েব ফ্রেমওয়ার্ক) প্রমাণীকরণ ব্যবস্থাকে দুটি মডুলার অংশে ভাগ করে পরিচালনা করে: গার্ড এবং ইউজার প্রোভাইডার, যা config/auth.php ফাইলে কনফিগার করা থাকে। গার্ড নির্ধারণ করে প্রতিটি অনুরোধে কীভাবে প্রমাণীকরণ যাচাই করা হবে (যেমন ব্রাউজারের জন্য সেশন কুকি অথবা মোবাইল অ্যাপের জন্য বেয়ারার টোকেন)। অপরদিকে প্রোভাইডার নির্ধারণ করে ডেটাবেস থেকে কীভাবে ব্যবহারকারীর তথ্য লোড করা হবে (সাধারণত এলোকুয়েন্ট মডেলের মাধ্যমে)। Auth::attempt($credentials) কল করলে লারাভেল ইমেইল দিয়ে ইউজার খুঁজে বের করে, ক্রিপ্টোগ্রাফিক পদ্ধতিতে পাসওয়ার্ড পরীক্ষা করে, সেশন ফিক্সেশন ঠেকাতে আইডি পুনর্নবায়ন করে এবং মেমোরিতে ইউজার লগইন সম্পন্ন করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 3 authorization pathways: Gates for global permissions, Policies for model records, and Sanctum tokens for API endpoints.',
        bn: 'চিত্র ১: অনুমোদনের ৩ টি মূল পথ: সাধারণ সুবিধার জন্য গেট, মডেল অবজেক্টের জন্য পলিসি এবং এপিআই এন্ডপয়েন্টের জন্য স্যাঙ্কটাম টোকেন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">LARAVEL AUTHORIZATION ARCHITECTURE: GATES, POLICIES &amp; SANCTUM</text>

  <!-- Ingress -->
  <g transform="translate(30, 65)">
    <rect width="135" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="135" height="30" rx="8" fill="#0284c7" />
    <text x="67" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Request Ingress</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">Auth::user()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Resolved Identity</text>
    <rect x="10" y="90" width="115" height="65" rx="5" fill="#0f172a" />
    <text x="15" y="112" fill="#cbd5e1" font-size="8" font-family="monospace">id: 1</text>
    <text x="15" y="128" fill="#38bdf8" font-size="8" font-family="monospace">role: "author"</text>
    <text x="15" y="145" fill="#cbd5e1" font-size="8" font-family="monospace">session / token</text>
    <text x="12" y="195" fill="#38bdf8" font-size="9" font-family="sans-serif">Authenticated</text>
  </g>

  <!-- Branch 1: Gates -->
  <g transform="translate(195, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Gate (Global Action)</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">Gate::allows()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Non-model actions</text>
    <rect x="10" y="90" width="165" height="65" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="110" fill="#fbbf24" font-size="8" font-family="monospace">Gate::define("admin",</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="8" font-family="monospace">  fn($u) =&gt; $u-&gt;is_admin</text>
    <text x="15" y="142" fill="#fbbf24" font-size="8" font-family="monospace">);</text>
    <text x="12" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif">Dashboard &amp; Settings</text>
  </g>

  <!-- Branch 2: Policies -->
  <g transform="translate(410, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Policy (Model Entity)</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">$this-&gt;authorize()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Model-bound CRUD</text>
    <rect x="10" y="90" width="165" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="110" fill="#34d399" font-size="8" font-family="monospace">PostPolicy::update()</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="8" font-family="monospace">$u-&gt;id === $post-&gt;user_id</text>
    <text x="15" y="142" fill="#34d399" font-size="8" font-family="monospace">Throws 403 on fail</text>
    <text x="12" y="195" fill="#34d399" font-size="9" font-family="sans-serif">Resource Authorization</text>
  </g>

  <!-- Branch 3: Sanctum Tokens -->
  <g transform="translate(625, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#db2777" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Sanctum (API Tokens)</text>
    <text x="12" y="55" fill="#f472b6" font-size="10" font-family="monospace">auth:sanctum</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Mobile &amp; SPA APIs</text>
    <rect x="10" y="90" width="165" height="65" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="15" y="110" fill="#f472b6" font-size="8" font-family="monospace">Bearer 1|abc99xyz...</text>
    <text x="15" y="128" fill="#cbd5e1" font-size="8" font-family="monospace">$u-&gt;tokenCan("write")</text>
    <text x="15" y="145" fill="#38bdf8" font-size="8" font-family="monospace">PersonalAccessTokens</text>
    <text x="12" y="195" fill="#f472b6" font-size="9" font-family="sans-serif">Fine-Grained Scopes</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'gates-policies-sanctum-heading',
      text: {
        en: 'Authorization with Gates, Resource Policies, and Sanctum Tokens',
        bn: 'গেট, রিসোর্স পলিসি এবং স্যাঙ্কটাম টোকেনের মাধ্যমে অনুমতি নির্ধারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While authentication verifies who a user is, authorization dictates what actions they can perform. For non-model actions like viewing administrator panels, Closure Gates registered in service providers (Gate::define("access-admin", ...)) offer lightweight checks. For model entities, dedicated Policy classes (like PostPolicy) encapsulate standard CRUD abilities (view, create, update, delete). Invoking $this->authorize("update", $post) inside a controller checks whether the authenticated user owns the record, automatically throwing an HTTP 403 Forbidden response if unauthorized. For mobile APIs, Laravel Sanctum issues scoped personal access tokens verified via the auth:sanctum middleware.',
        bn: 'প্রমাণীকরণ নিশ্চিত করে ব্যবহারকারীর পরিচয়, আর অনুমোদন নির্ধারণ করে তিনি কোন কোন কাজ সম্পন্ন করতে পারবেন। অ্যাডমিন প্যানেল দেখার মতো সাধারণ কাজের জন্য সার্ভিস প্রোভাইডারে গেট (Gate::define("access-admin", ...)) ব্যবহার করা হয়। ডেটাবেস মডেলের ক্ষেত্রে ডেডিকেটেড পলিসি ক্লাস (যেমন PostPolicy) ভিউ, তৈরি, আপডেট বা ডিলিট সংক্রান্ত প্রতিটি কাজের নিয়ম আলাদাভাবে ধারণ করে। কন্ট্রোলারের ভেতর $this->authorize("update", $post) কল করলে লারাভেল ব্যবহারকারীই ওই পোস্টের আসল মালিক কি না তা যাচাই করে এবং শর্ত না মিললে সাথে সাথে একটি HTTP 403 Forbidden এরর দেয়। মোবাইল অ্যাপ্লিকেশনের জন্য লারাভেল স্যাঙ্কটাম নিখুঁত টোকেন নিরাপত্তা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Laravel Auth authentication, PostPolicy ownership verification, and Sanctum token scopes.',
        bn: 'লারাভেল প্রমাণীকরণ, PostPolicy মালিকানা যাচাই এবং স্যাঙ্কটাম টোকেন স্কোপের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Laravel Auth, Policy, and Sanctum Scopes in TypeScript
interface AuthenticatedUser {
  id: number;
  name: string;
  role: 'author' | 'admin';
}

interface PostModel {
  id: number;
  userId: number;
  title: string;
}

// Simulating Laravel PostPolicy
export class PostPolicySimulator {
  public update(user: AuthenticatedUser, post: PostModel): boolean {
    // Admin can update all posts; authors can only update their own posts
    if (user.role === 'admin') return true;
    return user.id === post.userId;
  }
}

// Simulating Laravel Sanctum token validator
export class SanctumTokenSimulator {
  public tokenCan(userScopes: string[], requiredScope: string): boolean {
    return userScopes.includes(requiredScope) || userScopes.includes('*');
  }
}

// 2 posts tested with user Zubair (id: 1)
const currentUser: AuthenticatedUser = { id: 1, name: 'Zubair', role: 'author' };
const post1: PostModel = { id: 101, userId: 1, title: 'My First Laravel Post' };
const post2: PostModel = { id: 102, userId: 2, title: 'External Author Post' };

const policy = new PostPolicySimulator();

// Test 1: Authorizing owned post succeeds
const canEditPost1 = policy.update(currentUser, post1);
console.log('Authorize Owned Post 1:', canEditPost1); // true

// Test 2: Authorizing post belonging to another user fails (HTTP 403)
const canEditPost2 = policy.update(currentUser, post2);
console.log('Authorize Foreign Post 2:', canEditPost2); // false (HTTP 403)

// Test 3: Sanctum token scope verification
const sanctum = new SanctumTokenSimulator();
const userScopes = ['posts:read', 'posts:write'];
const canCreate = sanctum.tokenCan(userScopes, 'posts:write');
const canDelete = sanctum.tokenCan(userScopes, 'posts:delete');

console.log('Sanctum Token Can Write:', canCreate); // true
console.log('Sanctum Token Can Delete:', canDelete); // false`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Authentication Guards',
          def: {
            en: 'Drivers determining how users are authenticated across requests (e.g. session-based cookies vs stateless bearer tokens).',
            bn: 'লারাভেলের ড্রাইভার যা প্রতিটি অনুরোধে ব্যবহারকারীকে কীভাবে যাচাই করা হবে (সেশন কুকি নাকি বেয়ারার টোকেন) তা নির্ধারণ করে।'
          }
        },
        {
          term: 'User Providers',
          def: {
            en: 'Engines responsible for retrieving user records from persistent database storage based on credentials or identifiers.',
            bn: 'সিস্টেম যা ক্রেডেনশিয়াল বা আইডির ওপর ভিত্তি করে ডেটাবেস থেকে ব্যবহারকারীর রেকর্ড সংগ্রহ করে আনে।'
          }
        },
        {
          term: 'Authorization Policies',
          def: {
            en: 'Classes organizing authorization logic around a specific Eloquent model entity to govern CRUD permissions.',
            bn: 'নির্দিষ্ট মডেল অবজেক্টের বিভিন্ন কাজের (ভিউ, ক্রিয়েট, আপডেট, ডিলিট) অনুমতি নিয়ন্ত্রণের জন্য গঠিত অবজেক্ট-ওরিয়েন্টেড ক্লাস।'
          }
        },
        {
          term: 'Laravel Sanctum',
          def: {
            en: 'First-party package offering a featherweight authentication system for SPAs, mobile apps, and token-based APIs.',
            bn: 'লারাভেলের অফিশিয়াল প্যাকেজ যা সিঙ্গেল পেজ অ্যাপ, মোবাইল অ্যাপ্লিকেশন এবং টোকেন ভিত্তিক এপিআই এর জন্য হালকা প্রমাণীকরণ সুবিধা দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'policy-authorize-failure-403-ex1',
      kind: 'mcq',
      topic: 'policy-authorize-http-status',
      question: {
        en: 'What HTTP status code does $this->authorize("update", $post) emit when the authenticated user is not authorized?',
        bn: 'লগইন থাকা ব্যবহারকারীর অনুমতি না থাকলে $this->authorize("update", $post) স্বয়ংক্রিয়ভাবে কোন HTTP স্ট্যাটাস কোড প্রদান করে?'
      },
      options: [
        {
          en: 'HTTP 403 Forbidden, immediately rejecting the unauthorized user action with an authorization exception',
          bn: 'HTTP 403 Forbidden, যা অননুমোদিত ব্যবহারকারীর অনুরোধকে সাথে সাথে বাতিল করে উপযুক্ত এক্সেপশন ছুড়ে দেয়'
        },
        {
          en: 'HTTP 200 OK with a smile emoji',
          bn: 'একটি হাসিমুখের ইমোজি সহ HTTP 200 OK'
        },
        {
          en: 'HTTP 404 Not Found',
          bn: 'তথ্য না পাওয়ার সূচক HTTP 404 Not Found'
        },
        {
          en: 'HTTP 500 Database Connection Failed',
          bn: 'ডেটাবেস ব্যর্থতার সূচক HTTP 500'
        }
      ],
      answer: 0,
      hint: {
        en: 'Authorization failures indicate forbidden access, corresponding to HTTP status 403.',
        bn: 'অনুমোদন না থাকলে অ্যাক্সেস নিষিদ্ধ বোঝাতে সর্বদা 403 স্ট্যাটাস কোড ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Authorization failures throw AuthorizationException, rendered automatically as an HTTP 403 Forbidden response.',
        bn: 'অনুমোদন ব্যর্থ হলে লারাভেল নিজে থেকেই 403 Forbidden পেজ পরিবেশন করে ব্যবহারকারীকে আটকে দেয়।'
      }
    },
    {
      id: 'auth-attempt-session-fixation-ex2',
      kind: 'mcq',
      topic: 'auth-attempt-session-fixation-protection',
      question: {
        en: 'Why does Auth::attempt() automatically regenerate the session identifier upon successful login?',
        bn: 'লগইন সফল হওয়ার সাথে সাথে Auth::attempt() স্বয়ংক্রিয়ভাবে সেশন আইডি পুনর্নবায়ন করে কেন?'
      },
      options: [
        {
          en: 'It neutralizes session fixation exploits, preventing an attacker who planted a pre-login session ID from accessing the authenticated user account',
          bn: 'এটি সেশন ফিক্সেশন আক্রমণ প্রতিহত করে, ফলে লগইনের পূর্বে আক্রমণকারীর সরবরাহ করা সেশন আইডি দিয়ে আর অ্যাকাউন্টে ঢোকা সম্ভব হয় না'
        },
        {
          en: 'It speeds up fiber optic network traffic by 50 percent',
          bn: 'এটি ফাইবার অপটিক নেটওয়ার্কের গতি ৫০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It deletes all user photos from the hard drive',
          bn: 'এটি হার্ড ড্রাইভ থেকে ব্যবহারকারীর সমস্ত ছবি মুছে ফেলে'
        },
        {
          en: 'It logs out all other users on the internet',
          bn: 'এটি ইন্টারনেটের অন্যান্য সমস্ত ব্যবহারকারীকে লগআউট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Regenerating session IDs on privilege transitions invalidates old tokens.',
        bn: 'লগইনের মতো গুরুত্বপূর্ণ ধাপে নতুন আইডি দিলে পুরোনো অনিরাপদ আইডি অকেজো হয়ে যায়।'
      },
      explanation: {
        en: 'Regenerating the session token severs ties with the pre-authentication session, thwarting fixation attacks.',
        bn: 'সেশন পুনর্নবায়ন পূর্ববর্তী অনিরাপদ সেশনের সম্পর্ক ছিন্ন করে হ্যাকিংয়ের ঝুঁকি পুরোপুরি দূর করে।'
      }
    },
    {
      id: 'blade-can-directive-ui-gating-ex3',
      kind: 'mcq',
      topic: 'blade-can-directive',
      question: {
        en: 'What is the purpose of wrapping an edit button inside @can("update", $post) ... @endcan in a Blade template?',
        bn: 'ব্লেড টেমপ্লেটে একটি এডিট বাটনকে @can("update", $post) ... @endcan এর ভেতর রাখার উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It evaluates the PostPolicy update method for the current user, displaying the edit button only to users who hold permission to update that post',
          bn: 'এটি বর্তমান ইউজারের জন্য PostPolicy এর update মেথড পরীক্ষা করে এবং কেবল অনুমতিপ্রাপ্ত ব্যবহারকারীদের সামনেই এডিট বাটনটি দৃশ্যমান করে'
        },
        {
          en: 'It turns the button color into neon green',
          bn: 'এটি বাটনের রঙ উজ্জ্বল সবুজ রঙে বদলে দেয়'
        },
        {
          en: 'It makes the button invisible to Google Chrome users',
          bn: 'এটি গুগল ক্রোম ব্যবহারকারীদের জন্য বাটনটিকে অদৃশ্য করে দেয়'
        },
        {
          en: 'It deletes the post if the button is clicked twice',
          bn: 'বাটনে দুইবার ক্লিক করলে এটি পোস্টটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: '@can conditionally renders UI elements based on policy evaluations.',
        bn: '@can পলিসির শর্ত সন্তুষ্ট হলেই কেবল ইন্টারফেসের উপাদান প্রদর্শন করে।'
      },
      explanation: {
        en: '@can seamlessly checks policies and gates to conditionally expose UI actions based on user permissions.',
        bn: '@can ডিরেক্টিভ অনুমোদনের ওপর ভিত্তি করে পরিচ্ছন্নভাবে ইন্টারফেসের বাটন ও মেনু প্রদর্শন বা গোপন রাখে।'
      }
    },
    {
      id: 'sanctum-token-scopes-granularity-ex4',
      kind: 'mcq',
      topic: 'sanctum-token-abilities',
      question: {
        en: 'How do token abilities (scopes) in Laravel Sanctum protect mobile and third-party API integrations?',
        bn: 'লারাভেল স্যাঙ্কটামের টোকেন এবিলিটি (স্কোপ) কীভাবে মোবাইল এবং থার্ড-পার্টি এপিআই ইন্টিগ্রেশনকে সুরক্ষিত রাখে?'
      },
      options: [
        {
          en: 'Tokens can be restricted to specific permissions (such as ["orders:create"]), ensuring that a compromised token cannot execute destructive actions like deleting accounts',
          bn: 'টোকেনগুলোকে নির্দিষ্ট সীমার মধ্যে (যেমন ["orders:create"]) আবদ্ধ রাখা যায়, ফলে টোকেন চুরি হলেও হ্যাকার অ্যাকাউন্ট মোছার মতো মারাত্মক কাজ করতে পারে না'
        },
        {
          en: 'Tokens can only be read by software written in C++',
          bn: 'টোকেন কেবল সি++ ভাষায় লেখা সফটওয়্যারই পড়তে পারে'
        },
        {
          en: 'Sanctum tokens expire after exactly 3 seconds',
          bn: 'স্যাঙ্কটাম টোকেনের মেয়াদ ঠিক ৩ সেকেন্ড পরেই শেষ হয়ে যায়'
        },
        {
          en: 'Tokens prevent mobile phones from connecting to WiFi',
          bn: 'টোকেন মোবাইল ফোনকে ওয়াইফাই সংযোগ নিতে বাধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Token abilities adhere to the principle of least privilege by scoping API token powers.',
        bn: 'টোকেন স্কোপ প্রয়োজনের অতিরিক্ত অনুমতি না দিয়ে নিরাপত্তা ঝুঁকি কমিয়ে আনে।'
      },
      explanation: {
        en: 'Sanctum abilities enforce granular authorization bounds, limiting token blast radiuses in the event of theft.',
        bn: 'স্যাঙ্কটামের স্কোপিং টোকেন চুরির ক্ষেত্রেও ক্ষতির আশঙ্কা নির্দিষ্ট কয়েকটি অনুমোদিত কাজের মধ্যে সীমাবদ্ধ রাখে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-guards-and-the-auth',
    title: {
      en: 'Laravel Authentication, Gates & Policies Quiz',
      bn: 'লারাভেল প্রমাণীকরণ, গেট এবং পলিসি কুইজ'
    },
    questions: [
      {
        id: 'quiz-gate-before-superadmin-bypass',
        kind: 'mcq',
        topic: 'gate-before-superadmin-interception',
        question: {
          en: 'What architectural power does registering Gate::before(function ($user, $ability) { ... }) provide in a SaaS application?',
          bn: 'একটি সাস অ্যাপ্লিকেশনে Gate::before(function ($user, $ability) { ... }) নিবন্ধন করলে কোন স্থাপত্যিক সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It intercepts every authorization check beforehand, allowing super-administrators to bypass all granular policy checks globally by returning true immediately',
            bn: 'এটি যেকোনো অনুমোদনের পূর্বে কল হয়, যার ফলে সুপার-অ্যাডমিনদের ক্ষেত্রে সাথে সাথে true রিটার্ন করে সকল সাধারণ পলিসি চেক বাইপাস করা সম্ভব হয়'
          },
          {
            en: 'It deletes all registered user accounts every morning',
            bn: 'এটি প্রতিদিন সকালে সমস্ত নিবন্ধিত ব্যবহারকারীর অ্যাকাউন্ট মুছে ফেলে'
          },
          {
            en: 'It forces users to change their password every hour',
            bn: 'এটি প্রতি ঘণ্টায় ব্যবহারকারীদের পাসওয়ার্ড পরিবর্তন করতে বাধ্য করে'
          },
          {
            en: 'It changes the database collation to Latin1',
            bn: 'এটি ডেটাবেসের কোলাশন ল্যাটিন-১ এ পরিবর্তন করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Gate::before runs prior to all other authorization callbacks and policies.',
          bn: 'Gate::before অন্য যেকোনো পলিসি মেথড চলার আগেই সবার প্রথমে কার্যকর হয়।'
        },
        explanation: {
          en: 'Gate::before provides a centralized hook to grant unrestricted access to super-administrators across all policies.',
          bn: 'Gate::before সুপার-অ্যাডমিনদের প্রতিটি আলাদা পলিসিতে বিশেষ শর্ত না লিখেও বৈশ্বিক পূর্ণ প্রবেশাধিকার দেয়।'
        }
      },
      {
        id: 'quiz-sanctum-plain-text-token-display',
        kind: 'mcq',
        topic: 'sanctum-plain-text-token-security',
        question: {
          en: 'Why is the plainTextToken string returned by $user->createToken("api")->plainTextToken only displayed once to the user upon creation?',
          bn: '$user->createToken("api")->plainTextToken দ্বারা তৈরি প্লেইনটেক্সট টোকেনটি তৈরির সময় কেন কেবল একবারই ব্যবহারকারীকে দেখানো হয়?'
        },
        options: [
          {
            en: 'Laravel only stores a SHA-256 hash of the token in the database; the plain text original cannot be recovered if lost, protecting users if the database is breached',
            bn: 'লারাভেল ডেটাবেসে কেবল টোকেনের একটি SHA-256 হ্যাশ সংরক্ষণ করে; ফলে ডেটাবেস হ্যাক হলেও আসল প্লেইনটেক্সট টোকেন জানা সম্ভব হয় না'
          },
          {
            en: 'The computer forgets the letters of the token',
            bn: 'কম্পিউটার টোকেনের বর্ণগুলো নিজে থেকেই ভুলে যায়'
          },
          {
            en: 'Tokens can only be viewed in dark mode',
            bn: 'টোকেন কেবল ডার্ক মোডেই দেখা সম্ভব'
          },
          {
            en: 'Sanctum deletes the database after showing a token',
            bn: 'স্যাঙ্কটাম টোকেন দেখানোর পর ডেটাবেস সম্পূর্ণ মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Storing only cryptographic hashes protects secret tokens from database dump compromises.',
          bn: 'ডেটাবেসে কেবল ক্রিপ্টোগ্রাফিক হ্যাশ রাখলে ডেটাবেস ফাঁস হলেও আসল টোকেন নিরাপদ থাকে।'
        },
        explanation: {
          en: 'Like passwords, Sanctum tokens are hashed before storage; the plain-text bearer value is never retrievable again.',
          bn: 'পাসওয়ার্ডের মতোই স্যাঙ্কটাম টোকেন হ্যাশ আকারে জমা থাকে, ফলে কখনোই আসল টোকেন পুনরুদ্ধার করা যায় না।'
        }
      },
      {
        id: 'quiz-multi-auth-guards-configuration',
        kind: 'mcq',
        topic: 'multi-auth-guards-configuration',
        question: {
          en: 'How does an e-commerce platform maintain completely isolated login sessions for "customers" and "merchants"?',
          bn: 'একটি ই-কমার্স প্ল্যাটফর্মে "ক্রেতা" এবং "বিক্রেতাদের" জন্য সম্পূর্ণ আলাদা লগইন সেশন কীভাবে নিশ্চিত করা যায়?'
        },
        options: [
          {
            en: 'Configure two separate guards in config/auth.php (e.g. "customer" and "merchant") backed by distinct user providers and session cookies',
            bn: 'config/auth.php ফাইলে দুটি আলাদা গার্ড (যেমন "customer" ও "merchant") কনফিগার করে যা পৃথক প্রোভাইডার ও কুকির মাধ্যমে পরিচালিত হয়'
          },
          {
            en: 'Install two different operating systems on the web server',
            bn: 'সার্ভারে দুটি আলাদা অপারেটিং সিস্টেম ইনস্টল করে'
          },
          {
            en: 'Ban customers from logging in on weekdays',
            bn: 'কাজের দিনে সাধারণ ক্রেতাদের লগইন করা নিষিদ্ধ করে'
          },
          {
            en: 'Multi-guard setups are impossible in Laravel',
            bn: 'লারাভেলে একাধিক গার্ড ব্যবহার করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Laravel multi-auth allows independent guards to isolate sessions across different user tables.',
          bn: 'লারাভেলের মাল্টি-অথ সুবিধা ভিন্ন ভিন্ন ইউজার টেবিলের জন্য স্বাধীন সেশন নিশ্চিত করে।'
        },
        explanation: {
          en: 'Multiple guards permit independent session cookies and authentication states for disparate user roles.',
          bn: 'মাল্টিপল গার্ডের সাহায্যে বিভিন্ন ধরনের ব্যবহারকারীদের জন্য স্বাধীন সেশন ও নিরাপত্তা নিশ্চিত করা যায়।'
        }
      },
      {
        id: 'quiz-policy-auto-discovery-convention',
        kind: 'mcq',
        topic: 'policy-auto-discovery-convention',
        question: {
          en: 'Under Laravel policy auto-discovery, what policy class name automatically maps to the model App\\Models\\Invoice?',
          bn: 'লারাভেলের স্বয়ংক্রিয় পলিসি আবিষ্কারের নিয়ম অনুযায়ী App\\Models\\Invoice মডেলটির পলিসি ক্লাসের নাম কী হবে?'
        },
        options: [
          { en: 'App\\Policies\\InvoicePolicy', bn: 'App\\Policies\\InvoicePolicy' },
          { en: 'App\\Rules\\InvoiceRule', bn: 'App\\Rules\\InvoiceRule' },
          { en: 'App\\Guards\\InvoiceGuard', bn: 'App\\Guards\\InvoiceGuard' },
          { en: 'App\\Gates\\InvoiceGate', bn: 'App\\Gates\\InvoiceGate' }
        ],
        answer: 0,
        hint: {
          en: 'Laravel automatically pairs Model with Policies\\ModelPolicy without manual registration.',
          bn: 'লারাভেল কোনো বাড়তি কনফিগারেশন ছাড়াই Model এর সাথে Policies\\ModelPolicy ক্লাসকে মিলিয়ে নেয়।'
        },
        explanation: {
          en: 'Laravel conventions automatically discover policies placed in the App\\Policies namespace matching the model name.',
          bn: 'লারাভেলের স্ট্যান্ডার্ড নিয়ম অনুসারে মডেলের নামের শেষে Policy যুক্ত ক্লাসটি স্বয়ংক্রিয়ভাবে ম্যাপ হয়ে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'queues-and-the-job',
    title: {
      en: 'Asynchronous Queues, Background Jobs & Task Scheduling',
      bn: 'অ্যাসিনক্রোনাস কিউ, ব্যাকগ্রাউন্ড জব এবং টাস্ক শিডিউলিং'
    }
  }
};
