import type { Lesson } from '../../../lib/types';

export const BladeAndTheViewLesson: Lesson = {
  slug: 'blade-and-the-view',
  tech: 'laravel',
  title: {
    en: 'Blade Templating, Layouts & Components',
    bn: 'ব্লেড টেমপ্লেটিং, লেআউট এবং কম্পোনেন্ট'
  },
  summary: {
    en: 'Master Laravel Blade templating: safe variable echoing ({{ $name }}), raw output ({!! $raw !!}), control directives (@if, @foreach, @empty), template layout inheritance (@extends, @yield), modern anonymous Blade components (<x-alert>), and the @csrf security directive.',
    bn: 'লারাভেল ব্লেড টেমপ্লেটিং আয়ত্ত করুন: নিরাপদ ভেরিয়েবল প্রদর্শন ({{ $name }}), কাঁচা আউটপুট ({!! $raw !!}), কন্ট্রোল ডিরেক্টিভ (@if, @foreach, @empty), লেআউট ইনহেরিটেন্স (@extends, @yield), আধুনিক ব্লেড কম্পোনেন্ট (<x-alert>) এবং @csrf সিকিউরিটি ডিরেক্টিভ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'blade-compilation-heading',
      text: {
        en: 'The Blade Compilation Engine and Safe Escaping ({{ $var }})',
        bn: 'ব্লেড কম্পাইলেশন ইঞ্জিন এবং নিরাপদ আউটপুট প্রদর্শন ({{ $var }})'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel includes Blade, a powerful zero-overhead templating engine for PHP. Unlike other template systems that parse custom syntax on every request, Blade compiles views into standard PHP code and caches them in storage/framework/views until modified. Outputting variables with double curly braces ({{ $username }}) automatically applies htmlspecialchars with UTF-8 encoding, neutralizing Cross-Site Scripting (XSS) attacks. Raw unescaped output is explicitly reserved for trusted content using {!! $html !!}.',
        bn: 'লারাভেল পিএইচপির জন্য ব্লেড নামের একটি অত্যন্ত শক্তিশালী ও দ্রুতগতির টেমপ্লেটিং ইঞ্জিন সরবরাহ করে। অন্যান্য ফ্রেমওয়ার্কের মতো প্রতি অনুরোধে সিনট্যাক্স পার্স না করে ব্লেড সরাসরি ভিউগুলোকে সাধারণ পিএইচপি কোডে কম্পাইল করে storage/framework/views ফোল্ডারে ক্যাশ করে রাখে। ডবল কার্লি ব্র্যাকেট ({{ $username }}) দিয়ে ডেটা দেখালে এটি স্বয়ংক্রিয়ভাবে htmlspecialchars প্রয়োগ করে ক্ষতিকর স্ক্রিপ্ট প্রতিরোধ করে। শুধুমাত্র নির্ভরযোগ্য এইচটিএমএল আউটপুটের ক্ষেত্রে সতর্কতার সাথে {!! $html !!} সিনট্যাক্স ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-phase Blade compilation pipeline converting directives into cached native PHP execution files.',
        bn: 'চিত্র ১: ব্লেড ডিরেক্টিভ থেকে শুরু করে ক্যাশড পিএইচপি কোডে রূপান্তরের ৪ টি ধাপের কম্পাইলেশন পাইপলাইন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">BLADE VIEW COMPILATION &amp; CACHING PIPELINE</text>

  <!-- Step 1: Source File -->
  <g transform="translate(30, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Blade Source</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">home.blade.php</text>
    <rect x="10" y="70" width="150" height="110" rx="5" fill="#0f172a" />
    <text x="15" y="90" fill="#f43f5e" font-size="8" font-family="monospace">@extends('app')</text>
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace">&lt;h1&gt;Hello&lt;/h1&gt;</text>
    <text x="15" y="130" fill="#38bdf8" font-size="8" font-family="monospace">{{ $userName }}</text>
    <text x="15" y="150" fill="#fbbf24" font-size="8" font-family="monospace">@csrf</text>
    <text x="15" y="170" fill="#f43f5e" font-size="8" font-family="monospace">@if($admin)...</text>
    <text x="12" y="205" fill="#38bdf8" font-size="9" font-family="sans-serif">Developer Syntax</text>
  </g>

  <!-- Step 2: Compiler Engine -->
  <g transform="translate(230, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#d97706" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Blade Compiler</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">BladeCompiler</text>
    <rect x="10" y="70" width="150" height="110" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="90" fill="#fbbf24" font-size="8" font-family="monospace">Regex replacements:</text>
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace">{{ x }} =&gt; e(x)</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">@csrf =&gt; token()</text>
    <text x="15" y="150" fill="#cbd5e1" font-size="8" font-family="monospace">@if =&gt; &lt;?php if</text>
    <text x="15" y="170" fill="#cbd5e1" font-size="8" font-family="monospace">Translates tree</text>
    <text x="12" y="205" fill="#fbbf24" font-size="9" font-family="sans-serif">AST &amp; Directives</text>
  </g>

  <!-- Step 3: Cached Disk PHP -->
  <g transform="translate(430, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#059669" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Storage Cache</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">storage/views/</text>
    <rect x="10" y="70" width="150" height="110" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="90" fill="#94a3b8" font-size="8" font-family="monospace">3a8f9c1...php</text>
    <text x="15" y="110" fill="#34d399" font-size="8" font-family="monospace">&lt;?php echo e(</text>
    <text x="22" y="125" fill="#34d399" font-size="8" font-family="monospace">  $userName</text>
    <text x="15" y="140" fill="#34d399" font-size="8" font-family="monospace">); ?&gt;</text>
    <text x="15" y="160" fill="#cbd5e1" font-size="8" font-family="monospace">&lt;input hidden...&gt;</text>
    <text x="12" y="205" fill="#34d399" font-size="9" font-family="sans-serif">Pure Compiled PHP</text>
  </g>

  <!-- Step 4: Native Execution -->
  <g transform="translate(630, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#db2777" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Zend &amp; OPcache</text>
    <text x="12" y="55" fill="#f472b6" font-size="10" font-family="monospace">Execution</text>
    <rect x="10" y="70" width="160" height="110" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="15" y="92" fill="#cbd5e1" font-size="8" font-family="monospace">OPcache RAM speed</text>
    <text x="15" y="112" fill="#cbd5e1" font-size="8" font-family="monospace">Zero re-parsing</text>
    <text x="15" y="132" fill="#34d399" font-size="8" font-family="monospace">XSS characters &amp;gt;</text>
    <text x="15" y="152" fill="#34d399" font-size="8" font-family="monospace">Safe HTML egress</text>
    <text x="15" y="172" fill="#cbd5e1" font-size="8" font-family="monospace">Output buffered</text>
    <text x="12" y="205" fill="#f472b6" font-size="9" font-family="sans-serif">Native Server Speed</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'components-and-layouts-heading',
      text: {
        en: 'Layout Inheritance (@extends, @yield) and Modern Blade Components (<x-tag>)',
        bn: 'লেআউট ইনহেরিটেন্স (@extends, @yield) এবং আধুনিক ব্লেড কম্পোনেন্ট (<x-tag>)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For structural consistency, Laravel provides two complementary composition patterns: classic template inheritance and modern component architecture. In layout inheritance, a base template defines shell sections with @yield("content"), while child views extend the layout via @extends("layouts.app") and inject markup inside @section("content"). Modern applications favor autonomous Blade components (<x-alert type="warning">Notice</x-alert>): component templates accept typed parameters through @props(["type" => "info"]) and render arbitrary children via $slot.',
        bn: 'ওয়েব পেজের গঠন সুশৃঙ্খল রাখতে লারাভেলে দুটি পদ্ধতি রয়েছে: ঐতিহ্যবাহী টেমপ্লেট ইনহেরিটেন্স এবং আধুনিক কম্পোনেন্ট আর্কিটেকচার। লেআউট ইনহেরিটেন্সে মূল ফাইলে @yield("content") দিয়ে ফ্রেম তৈরি করা হয় এবং চাইল্ড ভিউ @extends("layouts.app") দিয়ে তা সম্প্রসারিত করে @section("content") এর ভেতর কোড বসায়। অপরদিকে আধুনিক অ্যাপ্লিকেশনগুলোতে স্বয়ংসম্পূর্ণ ব্লেড কম্পোনেন্ট (<x-alert type="warning">Notice</x-alert>) ব্যবহার করা হয়: এগুলো @props(["type" => "info"]) দিয়ে প্যারামিটার গ্রহণ করে এবং $slot এর মাধ্যমে যেকোনো চাইল্ড উপাদান রেন্ডার করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Blade compiler expanding safe echoes, @csrf tokens, and component slots.',
        bn: 'ব্লেড কম্পাইলার ট্রান্সফরমেশন, @csrf টোকেন এবং কম্পোনেন্ট স্লটের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Laravel Blade Compiler and Component Slot Engine in TypeScript
interface ComponentProps {
  title: string;
  count: number;
}

export class BladeEngineSimulator {
  // Simulating Blade automatic escaping: {{ $var }} => htmlspecialchars($var, ENT_QUOTES, 'UTF-8')
  public escape(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Simulating Blade @csrf directive expanding to hidden token input
  public compileCsrf(token32: string): string {
    return '<input type="hidden" name="_token" value="' + this.escape(token32) + '">';
  }

  // Simulating <x-card title="..." :count="..."> $slot </x-card>
  public renderCardComponent(props: ComponentProps, slotContent: string): string {
    const safeTitle = this.escape(props.title);
    const countBadge = '<span class="badge">' + props.count + '</span>';
    return (
      '<div class="card"><div class="card-header">' +
      safeTitle +
      ' ' +
      countBadge +
      '</div><div class="card-body">' +
      slotContent +
      '</div></div>'
    );
  }
}

// 3 compiler simulations executed
const blade = new BladeEngineSimulator();

// 1. Safe escaping prevents XSS
const maliciousInput = '<script>alert("XSS")</script>';
const safeRender = blade.escape(maliciousInput);
console.log('Escaped Output:', safeRender);
// "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"

// 2. CSRF directive expansion with 32-character token
const csrfInput = blade.compileCsrf('a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6');
console.log('Compiled @csrf HTML:', csrfInput);

// 3. Render modern card component with 42 items
const cardHtml = blade.renderCardComponent(
  { title: 'User Notifications', count: 42 },
  '<p>You have new unread messages in your inbox.</p>'
);
console.log('Component Card Rendered:', cardHtml);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Blade Compiler',
          def: {
            en: 'Engine translating concise @directives and {{ }} syntax into optimized plain PHP scripts cached on disk.',
            bn: 'ইঞ্জিন যা সংক্ষিপ্ত ব্লেড ডিরেক্টিভ এবং {{ }} সিনট্যাক্সকে সাধারণ পিএইচপি ফাইলে রূপান্তর করে ডিস্কে ক্যাশ করে।'
          }
        },
        {
          term: 'Automatic Escaping',
          def: {
            en: 'Default behavior of {{ }} wrapping variables in htmlspecialchars to block Cross-Site Scripting (XSS) attacks.',
            bn: 'ব্লেডের স্বভাবজাত সুরক্ষা যা ভেরিয়েবলকে htmlspecialchars দিয়ে এস্কেপ করে ক্ষতিকর স্ক্রিপ্ট প্রদর্শন বন্ধ করে।'
          }
        },
        {
          term: 'Layout Inheritance',
          def: {
            en: 'Composition model where child views extend master shell templates via @extends and @section blocks.',
            bn: 'টেমপ্লেট তৈরির পদ্ধতি যেখানে মূল ফ্রেমের ওপর ভিত্তি করে চাইল্ড ভিউগুলো @extends দিয়ে কাঠামো তৈরি করে।'
          }
        },
        {
          term: 'Blade Components',
          def: {
            en: 'Reusable custom HTML tags (<x-name>) managing isolated UI elements with typed props and flexible slots.',
            bn: 'পুনর্ব্যবহারযোগ্য কাস্টম এইচটিএমএল ট্যাগ (<x-name>) যা নিজস্ব প্যারামিটার ও স্লট দিয়ে ইউজার ইন্টারফেস সাজায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'blade-double-curly-escaping-ex1',
      kind: 'mcq',
      topic: 'blade-auto-escaping',
      question: {
        en: 'What fundamental security guarantee does {{ $comment }} provide compared to {!! $comment !!} in Blade templates?',
        bn: 'ব্লেড টেমপ্লেটে {!! $comment !!} এর তুলনায় {{ $comment }} মূলত কোন অপরিহার্য নিরাপত্তা নিশ্চিত করে?'
      },
      options: [
        {
          en: '{{ }} passes output through htmlspecialchars, converting dangerous HTML characters (<, >) into safe entities to neutralize XSS attacks',
          bn: '{{ }} মানটিকে htmlspecialchars দিয়ে পরিশোধন করে ক্ষতিকর চিহ্নগুলোকে (<, >) নিরাপদ এন্টিটিতে রূপান্তর করে XSS আক্রমণ বন্ধ করে'
        },
        {
          en: '{{ }} translates the comment into English',
          bn: '{{ }} মন্তব্যটিকে ইংরেজি ভাষায় অনুবাদ করে'
        },
        {
          en: '{{ }} increases the database query speed by 50 percent',
          bn: '{{ }} ডেটাবেস কোয়েরির গতি ৫০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: '{{ }} deletes the comment from the server hard drive',
          bn: '{{ }} সার্ভার থেকে মন্তব্যটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Double curlies escape HTML characters; raw curlies output unescaped HTML directly.',
        bn: 'ডবল কার্লি ক্ষতিকর এইচটিএমএল এস্কেপ করে; কাঁচা কার্লি কোনো ফিল্টার ছাড়াই আউটপুট দেখায়।'
      },
      explanation: {
        en: 'Double curly braces sanitize data to prevent malicious scripts from executing in user browsers.',
        bn: 'ডবল কার্লি ব্র্যাকেট ব্যবহারকারীর পাঠানো ক্ষতিকর জাভাস্ক্রিপ্ট কোড কার্যকর হওয়া সম্পূর্ণ আটকে দেয়।'
      }
    },
    {
      id: 'blade-csrf-directive-duty-ex2',
      kind: 'mcq',
      topic: 'blade-csrf-directive',
      question: {
        en: 'What does placing @csrf inside an HTML <form method="POST"> achieve in Laravel?',
        bn: 'লারাভেলে এইচটিএমএল <form method="POST"> এর ভেতরে @csrf ডিরেক্টিভ যুক্ত করলে কী কাজ সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'It outputs a hidden input element containing the current session CSRF security token, satisfying VerifyCsrfToken middleware inspection',
          bn: 'এটি বর্তমান সেশনের গোপন CSRF টোকেন সহ একটি লুকানো ইনপুট তৈরি করে, যা VerifyCsrfToken মিডলওয়্যারের যাচাইকরণ সন্তুষ্ট করে'
        },
        {
          en: 'It encrypts the entire form with an SSL certificate',
          bn: 'এটি সম্পূর্ণ ফর্মটিকে একটি এসএসএল সার্টিফিকেট দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It forces the user to solve a Google reCAPTCHA puzzle',
          bn: 'এটি ব্যবহারকারীকে একটি ক্যাপচা সমাধান করতে বাধ্য করে'
        },
        {
          en: 'It sends an email alert to the website administrator',
          bn: 'এটি ওয়েবসাইট অ্যাডমিনিস্ট্রেটরকে একটি ইমেইল বার্তা পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: '@csrf renders <input type="hidden" name="_token" value="..."> to defeat request forgery.',
        bn: '@csrf লুকানো ইনপুটে টোকেন বসিয়ে ক্ষতিকর রিকোয়েস্ট ফোরজারি আক্রমণ প্রতিরোধ করে।'
      },
      explanation: {
        en: '@csrf injects the hidden CSRF token required by Laravel web middleware for all POST submissions.',
        bn: '@csrf যেকোনো POST ফর্মে লারাভেলের আবশ্যক গোপন সিকিউরিটি টোকেন যুক্ত করে দেয়।'
      }
    },
    {
      id: 'blade-method-spoofing-directive-ex3',
      kind: 'mcq',
      topic: 'blade-method-spoofing',
      question: {
        en: 'Why is @method("PUT") necessary inside an HTML form updating user settings in Laravel?',
        bn: 'লারাভেলে ব্যবহারকারীর তথ্য আপডেট করার ফর্মে @method("PUT") ডিরেক্টিভ ব্যবহার করা আবশ্যক কেন?'
      },
      options: [
        {
          en: 'HTML forms natively only support GET and POST HTTP methods; @method("PUT") generates a hidden _method field instructing Laravel router to handle it as a PUT request',
          bn: 'এইচটিএমএল ফর্ম কেবল GET ও POST সমর্থন করে; @method("PUT") একটি লুকানো _method ফিল্ড দিয়ে লারাভেলকে এটিকে PUT রিকোয়েস্ট হিসেবে বিবেচনা করতে নির্দেশ দেয়'
        },
        {
          en: 'It prevents the form from submitting on Mondays',
          bn: 'এটি সোমবারে ফর্ম সাবমিট করা আটকে দেয়'
        },
        {
          en: 'It converts the form into a PDF document',
          bn: 'এটি ফর্মটিকে একটি পিডিএফ ফাইলে রূপান্তর করে'
        },
        {
          en: 'It renames the database table to "put_requests"',
          bn: 'এটি ডেটাবেস টেবিলের নাম পরিবর্তন করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Method spoofing bridges the gap between browser HTML form limitations and RESTful HTTP verbs.',
        bn: 'মেথড স্পুফিং ব্রাউজারের সীমাবদ্ধতা দূর করে আধুনিক RESTful ভার্ব ব্যবহারের সুযোগ দেয়।'
      },
      explanation: {
        en: 'Browsers cannot issue PUT or DELETE from standard forms; Laravel method spoofing enables clean REST routing.',
        bn: 'ব্রাউজার সরাসরি PUT বা DELETE পাঠাতে পারে না, তাই লারাভেলের এই পদ্ধতি ব্যবহার করা হয়।'
      }
    },
    {
      id: 'blade-component-slots-benefit-ex4',
      kind: 'mcq',
      topic: 'blade-component-slots',
      question: {
        en: 'How does $slot function inside a Blade component template (<x-modal> ... </x-modal>)?',
        bn: 'ব্লেড কম্পোনেন্টে (<x-modal> ... </x-modal>) $slot ভেরিয়েবলটি কীভাবে কাজ করে?'
      },
      options: [
        {
          en: 'It acts as the dynamic placeholder where whatever HTML or text is passed between the component opening and closing tags is rendered',
          bn: 'এটি একটি প্লেসহোল্ডার হিসেবে কাজ করে যার স্থানে কম্পোনেন্টের ওপেনিং ও ক্লোজিং ট্যাগের ভেতরের যেকোনো লেখা বা কোড প্রদর্শিত হয়'
        },
        {
          en: 'It stores a random number between 1 and 100',
          bn: 'এটি ১ থেকে ১০০ এর মধ্যে একটি দৈব সংখ্যা সংরক্ষণ করে'
        },
        {
          en: 'It connects the component to a casino slot machine',
          bn: 'এটি কম্পোনেন্টকে ক্যাসিনোর মেশিনের সাথে যুক্ত করে'
        },
        {
          en: 'It shuts down the web server if errors occur',
          bn: 'ত্রুটি ঘটলে এটি সাথে সাথে ওয়েব সার্ভার বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '$slot captures the child content injected inside the component tags.',
        bn: '$slot কম্পোনেন্ট ট্যাগের ভেতরের চাইল্ড কনটেন্ট গ্রহণ করে প্রদর্শন করে।'
      },
      explanation: {
        en: '$slot is the default insertion point for content nested inside custom component tags.',
        bn: '$slot হলো কম্পোনেন্টের ভেতরের কন্টেন্ট প্রদর্শনের প্রধান স্থান।'
      }
    }
  ],
  quiz: {
    id: 'quiz-blade-and-the-view',
    title: {
      en: 'Laravel Blade Templating & Components Quiz',
      bn: 'লারাভেল ব্লেড টেমপ্লেটিং এবং কম্পোনেন্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-blade-cache-precompilation',
        kind: 'mcq',
        topic: 'blade-view-cache-performance',
        question: {
          en: 'What occurs when php artisan view:cache is executed during a production deployment pipeline?',
          bn: 'প্রোডাকশন ডিপ্লয়মেন্টের সময় php artisan view:cache কমান্ডটি চালালে কী ঘটে?'
        },
        options: [
          {
            en: 'Laravel pre-compiles all Blade templates into native PHP files in storage/framework/views ahead of time, eliminating on-demand compilation latency during user requests',
            bn: 'লারাভেল সমস্ত ব্লেড ফাইলকে আগেই সাধারণ পিএইচপি ফাইলে কম্পাইল করে ডিস্কে ক্যাশ করে রাখে, ফলে ব্যবহারকারীর অনুরোধের সময় আলাদা করে পার্স করার সময় বাঁচে'
          },
          {
            en: 'It deletes all Blade templates from the codebase',
            bn: 'এটি কোডবেস থেকে সমস্ত ব্লেড টেমপ্লেট মুছে ফেলে'
          },
          {
            en: 'It changes the font size of all web pages to 12 pixels',
            bn: 'এটি সমস্ত ওয়েব পেজের ফন্ট সাইজ ১২ পিক্সেলে পরিবর্তন করে'
          },
          {
            en: 'It turns on dark mode across the entire server operating system',
            bn: 'এটি পুরো সার্ভারে ডার্ক মোড সক্রিয় করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pre-compiling views warms the view cache, avoiding disk compilation overhead on first hit.',
          bn: 'আগে থেকেই ভিউ ক্যাশ প্রস্তুত রাখলে প্রথম অনুরোধেও কোনো দেরি হয় না।'
        },
        explanation: {
          en: 'view:cache compiles all templates eagerly, speeding up initial HTTP response times in production.',
          bn: 'view:cache সব টেমপ্লেট আগেভাগেই কম্পাইল করে রাখে, যার ফলে প্রোডাকশনে অ্যাপের গতি লক্ষণীয়ভাবে বৃদ্ধি পায়।'
        }
      },
      {
        id: 'quiz-blade-forelse-directive',
        kind: 'mcq',
        topic: 'blade-forelse-empty-handling',
        question: {
          en: 'What advantage does the @forelse directive provide over a combination of @if(count($items)) and @foreach?',
          bn: '@if(count($items)) এবং @foreach এর সমন্বয়ের চেয়ে @forelse ডিরেক্টিভ ব্যবহারের সুবিধা কী?'
        },
        options: [
          {
            en: 'It loops through items when available, but provides a clean dedicated @empty fallback block when the collection has 0 elements',
            bn: 'উপাদান থাকলে এটি লুপ চালায়, আর তালিকাটিতে ০ টি উপাদান থাকলে পরিচ্ছন্নভাবে বিকল্প @empty ব্লক প্রদর্শন করে'
          },
          {
            en: 'It makes database queries run 5 times faster',
            bn: 'এটি ডেটাবেস কোয়েরিকে ৫ গুণ দ্রুত চালায়'
          },
          {
            en: 'It encrypts every array element with bcrypt',
            bn: 'এটি প্রতিটি অ্যারে উপাদানকে বিক্রিপ্ট দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It prevents loops from executing more than 2 iterations',
            bn: 'এটি লুপকে ২ বারের বেশি চলা থেকে বিরত রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: '@forelse combines iteration and empty-state handling into a single expressive directive.',
          bn: '@forelse একই সাথে লুপ চালানো এবং ফাঁকা তালিকার বিকল্প বার্তা দেখানোর কাজ সম্পন্ন করে।'
        },
        explanation: {
          en: '@forelse combines looping with @empty branches, eliminating redundant conditional wrapper checks.',
          bn: '@forelse কোডকে সংক্ষিপ্ত ও পাঠযোগ্য রাখে এবং বাড়তি if চেকের ঝামেলা দূর করে।'
        }
      },
      {
        id: 'quiz-blade-component-props-typing',
        kind: 'mcq',
        topic: 'blade-component-props-defaults',
        question: {
          en: 'How do you declare default property values inside an anonymous Blade component template?',
          bn: 'একটি অ্যানোনিমাস ব্লেড কম্পোনেন্টে ডিফল্ট প্রপার্টি মান কীভাবে ঘোষণা করা হয়?'
        },
        options: [
          { en: '@props(["type" => "info", "dismissible" => false])', bn: '@props(["type" => "info", "dismissible" => false])' },
          { en: '@declare(type: "info")', bn: '@declare(type: "info")' },
          { en: '$this->setProps(["type" => "info"])', bn: '$this->setProps(["type" => "info"])' },
          { en: 'Anonymous Blade components cannot have default values', bn: 'ব্লেড কম্পোনেন্টে ডিফল্ট মান রাখা অসম্ভব' }
        ],
        answer: 0,
        hint: {
          en: 'The @props directive specifies component attributes and their default values at the top of the file.',
          bn: '@props ডিরেক্টিভ ফাইলের শীর্ষে কম্পোনেন্টের প্যারামিটার ও ডিফল্ট মান সংজ্ঞায়িত করে।'
        },
        explanation: {
          en: '@props defines acceptable input variables and their fallback defaults cleanly.',
          bn: '@props এর মাধ্যমে কম্পোনেন্টের জন্য অনুমোদিত ভেরিয়েবল ও তাদের ডিফল্ট মান নির্দিষ্ট করা যায়।'
        }
      },
      {
        id: 'quiz-blade-named-slots-syntax',
        kind: 'mcq',
        topic: 'blade-named-slots-syntax',
        question: {
          en: 'How do you inject content into a named slot called "header" on a component <x-card>?',
          bn: '<x-card> কম্পোনেন্টের "header" নামের একটি নির্দিষ্ট স্লটে কীভাবে কনটেন্ট প্রবেশ করাবেন?'
        },
        options: [
          { en: '<x-slot:header><h2>Card Title</h2></x-slot>', bn: '<x-slot:header><h2>Card Title</h2></x-slot>' },
          { en: '<header><h2>Card Title</h2></header>', bn: '<header><h2>Card Title</h2></header>' },
          { en: '@slot("header", "<h2>Card Title</h2>")', bn: '@slot("header", "<h2>Card Title</h2>")' },
          { en: '<x-header slot="true"><h2>Card Title</h2></x-header>', bn: '<x-header slot="true"><h2>Card Title</h2></x-header>' }
        ],
        answer: 0,
        hint: {
          en: '<x-slot:name> binds nested markup directly to the $name slot variable.',
          bn: '<x-slot:name> নির্দিষ্ট স্লটে কনটেন্ট পাঠাতে ব্যবহৃত আধুনিক সিনট্যাক্স।'
        },
        explanation: {
          en: '<x-slot:header> populates the $header variable inside the component layout seamlessly.',
          bn: '<x-slot:header> কম্পোনেন্টের ভেতরের $header স্লট ভেরিয়েবলে মান পৌঁছে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'migrations-and-the-schema',
    title: {
      en: 'Database Migrations, Schema Builder & Seeders',
      bn: 'ডেটাবেস মাইগ্রেশন, স্কিমা বিল্ডার এবং সিডার'
    }
  }
};
