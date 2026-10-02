import type { Lesson } from '../../../lib/types';

export const TheEmbeddedScriptLesson: Lesson = {
  slug: 'the-embedded-script',
  tech: 'php',
  title: {
    en: 'PHP Fundamentals & The Web Server Lifecycle',
    bn: 'পিএইচপির মৌলিক ভিত্তি এবং ওয়েব সার্ভার লাইফসাইকেল'
  },
  summary: {
    en: 'Beginner introduction to PHP: explore how web servers execute PHP scripts, understand standard <?php ?> tags and short-echo <?= ?> syntax, master variables ($var), constants, echo versus print, and compare include versus require file inclusion.',
    bn: 'পিএইচপির প্রাথমিক গাইড: ওয়েব সার্ভার কীভাবে পিএইচপি কোড চালায়, আদর্শ <?php ?> ট্যাগ এবং শর্ট-ইকো <?= ?> সিনট্যাক্স, ভেরিয়েবল ($var), কনস্ট্যান্ট, echo বনাম print এবং include বনাম require ফাইলের সংযুক্তি।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'server-lifecycle-heading',
      text: {
        en: 'How PHP Works: The Client, Web Server, and FastCGI Execution Loop',
        bn: 'পিএইচপি কীভাবে কাজ করে: ক্লায়েন্ট, ওয়েব সার্ভার এবং ফাস্ট-সিজিআই এক্সিকিউশন লুপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP is a server-side interpreted scripting language designed specifically for the web. When a client browser requests a page over port 80 or 443, the web server (Nginx or Apache) routes the request to a PHP-FPM (FastCGI Process Manager) worker process. The Zend Engine executes the PHP code enclosed inside <?php ?> tags, renders dynamic text, and streams pure HTML or JSON back to the browser. Once the response completes, PHP completely clears its memory, providing a clean slate for subsequent requests.',
        bn: 'পিএইচপি হলো একটি সার্ভার-সাইড স্ক্রিপ্টিং ভাষা যা বিশেষভাবে ওয়েব অ্যাপ্লিকেশনের জন্য তৈরি। যখন কোনো ক্লায়েন্ট ব্রাউজার ৮০ বা ৪৪৩ পোর্টের মাধ্যমে কোনো পেজের অনুরোধ করে, তখন ওয়েব সার্ভার (Nginx বা Apache) সেই অনুরোধটি PHP-FPM (ফাস্ট-সিজিআই প্রসেস ম্যানেজার) কর্মী প্রসেসে পাঠায়। জেন্ড ইঞ্জিন <?php ?> ট্যাগের ভেতরের কোড এক্সিকিউট করে গতিশীল টেক্সট তৈরি করে এবং ব্রাউজারে কেবল সাধারণ এইচটিএমএল বা JSON পাঠায়। অনুরোধ শেষ হওয়ার সাথে সাথে পিএইচপি তার সম্পূর্ণ মেমোরি পরিষ্কার করে ফেলে, যা পরবর্তী অনুরোধের জন্য সম্পূর্ণ নিরাপদ পরিবেশ নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 5-stage web request lifecycle from browser request to PHP-FPM execution and response delivery.',
        bn: 'চিত্র ১: ব্রাউজারের অনুরোধ থেকে শুরু করে PHP-FPM এক্সিকিউশন পর্যন্ত ৫ টি ধাপের ওয়েব রিকোয়েস্ট লাইফসাইকেল।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP WEB SERVER REQUEST &amp; RESPONSE LIFECYCLE</text>
  
  <!-- Step 1: Browser -->
  <g transform="translate(30, 65)">
    <rect width="135" height="240" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="135" height="30" rx="8" fill="#0284c7" />
    <text x="67" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Client Browser</text>
    
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">HTTP GET /app</text>
    <text x="12" y="75" fill="#cbd5e1" font-size="9" font-family="sans-serif">Port 80 or 443</text>
    <rect x="10" y="90" width="115" height="65" rx="5" fill="#0f172a" />
    <text x="15" y="110" fill="#94a3b8" font-size="8" font-family="monospace">Headers: Host</text>
    <text x="15" y="125" fill="#94a3b8" font-size="8" font-family="monospace">Accept: html</text>
    <text x="15" y="140" fill="#94a3b8" font-size="8" font-family="monospace">Cookie: session</text>
    <text x="12" y="180" fill="#38bdf8" font-size="10" font-family="sans-serif">Sends request</text>
  </g>

  <!-- Step 2: Nginx Web Server -->
  <g transform="translate(195, 65)">
    <rect width="135" height="240" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="135" height="30" rx="8" fill="#059669" />
    <text x="67" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Web Server</text>
    
    <text x="12" y="55" fill="#4ade80" font-size="10" font-family="monospace">Nginx / Apache</text>
    <text x="12" y="75" fill="#cbd5e1" font-size="9" font-family="sans-serif">Static files (.css,.js)</text>
    <text x="12" y="90" fill="#cbd5e1" font-size="9" font-family="sans-serif">served directly</text>
    <rect x="10" y="105" width="115" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="125" fill="#34d399" font-size="8" font-family="monospace">.php routed to</text>
    <text x="15" y="140" fill="#34d399" font-size="8" font-family="monospace">FastCGI socket</text>
    <text x="15" y="155" fill="#94a3b8" font-size="8" font-family="monospace">php-fpm.sock</text>
    <text x="12" y="195" fill="#4ade80" font-size="10" font-family="sans-serif">Reverse Proxy</text>
  </g>

  <!-- Step 3: PHP-FPM Workers -->
  <g transform="translate(360, 65)">
    <rect width="135" height="240" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="135" height="30" rx="8" fill="#d97706" />
    <text x="67" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. PHP-FPM Pool</text>
    
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">Worker Process</text>
    <text x="12" y="75" fill="#cbd5e1" font-size="9" font-family="sans-serif">Spawns isolated</text>
    <text x="12" y="90" fill="#cbd5e1" font-size="9" font-family="sans-serif">worker thread</text>
    <rect x="10" y="105" width="115" height="65" rx="5" fill="#0f172a" />
    <text x="15" y="125" fill="#fbbf24" font-size="8" font-family="monospace">Allocates RAM</text>
    <text x="15" y="140" fill="#fbbf24" font-size="8" font-family="monospace">Sets $_SERVER</text>
    <text x="15" y="155" fill="#fbbf24" font-size="8" font-family="monospace">Sets $_GET/POST</text>
    <text x="12" y="195" fill="#fbbf24" font-size="10" font-family="sans-serif">Share-Nothing</text>
  </g>

  <!-- Step 4: Zend Engine -->
  <g transform="translate(525, 65)">
    <rect width="135" height="240" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="135" height="30" rx="8" fill="#7c3aed" />
    <text x="67" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Zend Engine</text>
    
    <text x="12" y="55" fill="#c084fc" font-size="10" font-family="monospace">Executes Opcodes</text>
    <text x="12" y="75" fill="#cbd5e1" font-size="9" font-family="sans-serif">OPcache check</text>
    <rect x="10" y="90" width="115" height="65" rx="5" fill="#0f172a" />
    <text x="15" y="110" fill="#c084fc" font-size="8" font-family="monospace">&lt;?php code ?&gt;</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="8" font-family="monospace">Echoes HTML</text>
    <text x="15" y="140" fill="#4ade80" font-size="8" font-family="monospace">Hits MySQL PDO</text>
    <text x="12" y="180" fill="#c084fc" font-size="10" font-family="sans-serif">Generates output</text>
  </g>

  <!-- Step 5: Output Stream -->
  <g transform="translate(690, 65)">
    <rect width="120" height="240" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="120" height="30" rx="8" fill="#db2777" />
    <text x="60" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Delivery</text>
    
    <text x="10" y="55" fill="#f472b6" font-size="10" font-family="monospace">HTTP 200 OK</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="9" font-family="sans-serif">Clean HTML/JSON</text>
    <rect x="10" y="90" width="100" height="65" rx="5" fill="#0f172a" />
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace">Zero PHP code</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="8" font-family="monospace">leaves server</text>
    <text x="15" y="140" fill="#4ade80" font-size="8" font-family="monospace">RAM wiped</text>
    <text x="10" y="180" fill="#f472b6" font-size="10" font-family="sans-serif">Returned to User</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'tags-and-inclusions-heading',
      text: {
        en: 'Tags, Echo vs Print, and Include versus Require Mechanics',
        bn: 'ট্যাগ, Echo বনাম Print এবং Include বনাম Require কার্যপ্রণালী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP blocks open with <?php and close with ?>. When inserting simple values into HTML templates, the short-echo tag <?= $name ?> provides a clean shorthand for <?php echo $name; ?>. Unlike print, which is an expression returning 1, echo is a language construct that accepts multiple comma-separated arguments and executes marginally faster. For modularity, include emits an E_WARNING if a file is missing and proceeds, whereas require emits a fatal E_COMPILE_ERROR and stops execution immediately. Using require_once ensures configuration files are loaded only once.',
        bn: 'পিএইচপি কোড শুরু হয় <?php দিয়ে এবং শেষ হয় ?> দিয়ে। এইচটিএমএল ফাইলে সহজে মান প্রদর্শন করতে শর্ট-ইকো ট্যাগ <?= $name ?> ব্যবহার করা হয় যা <?php echo $name; ?> এর সংক্ষিপ্ত রূপ। print যেখানে একটি এক্সপ্রেশন হিসেবে ১ রিটার্ন করে, সেখানে echo কোনো মান রিটার্ন না করে একাধিক কমাযুক্ত আর্গুমেন্ট গ্রহণ করতে পারে এবং তুলনামূলক দ্রুত কাজ করে। ফাইল যুক্ত করার ক্ষেত্রে include ফাইল না পেলে ওয়ার্নিং (E_WARNING) দিয়ে বাকি কোড চালু রাখে, কিন্তু require মারাত্মক ফ্যাটাল এরর দিয়ে সাথে সাথে কাজ বন্ধ করে দেয়। কনফিগারেশন ফাইল একাধিকবার লোড হওয়া এড়াতে require_once ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of the PHP web server template rendering and string interpolation engine.',
        bn: 'পিএইচপি ওয়েব সার্ভার টেমপ্লেট রেন্ডারিং এবং ভেরিয়েবল প্রসেসিংয়ের TypeScript কোড।'
      },
      code: `// Simulation of PHP core execution mechanics in TypeScript
interface ServerContext {
  siteName: string;
  taxRate: number; // 15% tax rate (0.15)
  userRole: string;
}

export function renderPhpTemplate(context: ServerContext, cartItemsCount: number): string {
  // Simulating PHP: define('SITE_NAME', 'CodeShikhon');
  const siteName = context.siteName;

  // Simulating PHP: $taxMultiplier = 1.0 + $taxRate;
  const taxMultiplier = 1.0 + context.taxRate;

  // Simulating PHP: $title = "Welcome to {$siteName}";
  const title = 'Welcome to ' + siteName;

  // Simulating PHP short-echo: <?= "<p>Items: 3 | Total with Tax: 1.15</p>" ?>
  const outputHtml = '<p>Items: ' + cartItemsCount + ' | Tax: ' + taxMultiplier.toFixed(2) + '</p>';

  return title + ' | ' + outputHtml;
}

const mockContext: ServerContext = {
  siteName: 'CodeShikhon',
  taxRate: 0.15,
  userRole: 'admin'
};

// Render user dashboard with 3 cart items
const renderedPage = renderPhpTemplate(mockContext, 3);

console.log('Rendered Server Output:', renderedPage);
// "Welcome to CodeShikhon | <p>Items: 3 | Tax: 1.15</p>"
console.log('Generated Output Character Count:', renderedPage.length); // 52`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Server-Side Scripting',
          def: {
            en: 'Execution paradigm where code runs on the web host before delivering compiled HTML or JSON output to the client browser.',
            bn: 'প্রোগ্রামিং পদ্ধতি যেখানে ক্লায়েন্টের কাছে পাঠানোর আগে সম্পূর্ণ কোড ওয়েব সার্ভারে এক্সিকিউট হয়ে এইচটিএমএল বা JSON আউটপুট তৈরি করে।'
          }
        },
        {
          term: 'Zend Engine',
          def: {
            en: 'The core open-source virtual machine that parses, compiles into opcodes, and executes PHP source code.',
            bn: 'পিএইচপির মূল ওপেন-সোর্স ভার্চুয়াল মেশিন যা সোর্স কোড পার্স করে জেন্ড অপকোডে রূপান্তর এবং এক্সিকিউট করে।'
          }
        },
        {
          term: 'FastCGI Process Manager',
          def: {
            en: 'Daemon managing a high-performance pool of isolated PHP worker processes communicating via FastCGI network sockets.',
            bn: 'সার্ভার ডেমন যা ফাস্ট-সিজিআই নেটওয়ার্ক সকেটের মাধ্যমে স্বাধীন পিএইচপি কর্মী প্রসেসের একটি দ্রুতগতির দল পরিচালনা করে।'
          }
        },
        {
          term: 'Output Buffering',
          def: {
            en: 'Mechanism holding generated script output in server memory before sending complete HTTP headers and payloads to the browser.',
            bn: 'বিশেষ ব্যবস্থা যা ব্রাউজারে তথ্য পাঠানোর আগে তৈরি হওয়া আউটপুট সার্ভারের মেমোরিতে সাময়িকভাবে ধরে রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'include-vs-require-fatal-ex1',
      kind: 'mcq',
      topic: 'include-vs-require-error-handling',
      question: {
        en: 'What occurs when PHP encounters a require statement pointing to a file that does not exist on disk?',
        bn: 'ডিস্কে বিদ্যমান নেই এমন কোনো ফাইলের ক্ষেত্রে পিএইচপি require স্টেটমেন্ট পেলে কী ঘটে?'
      },
      options: [
        {
          en: 'It emits an E_COMPILE_ERROR fatal error and halts script execution immediately, preventing compromised states',
          bn: 'এটি একটি E_COMPILE_ERROR ফ্যাটাল এরর দেয় এবং সাথে সাথে স্ক্রিপ্ট বন্ধ করে দেয়, যাতে কোনো বিপজ্জনক অসম্পূর্ণ অবস্থা তৈরি না হয়'
        },
        {
          en: 'It issues a minor warning and continues running the rest of the application',
          bn: 'এটি একটি সাধারণ ওয়ার্নিং দিয়ে অ্যাপ্লিকেশনের বাকি কোড চালানো অব্যাহত রাখে'
        },
        {
          en: 'It automatically downloads the missing file from the internet',
          bn: 'এটি ইন্টারনেট থেকে নিখোঁজ ফাইলটি স্বয়ংক্রিয়ভাবে ডাউনলোড করে নেয়'
        },
        {
          en: 'It reboots the computer operating system',
          bn: 'এটি কম্পিউটারের অপারেটিং সিস্টেম রিস্টার্ট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Require enforces a hard dependency; execution cannot safely proceed without it.',
        bn: 'Require হলো একটি কঠোর শর্ত; এই ফাইল ছাড়া কোড চালানো নিরাপদ নয়।'
      },
      explanation: {
        en: 'require halts execution with a fatal error; include emits a warning and continues.',
        bn: 'require ফ্যাটাল এরর দিয়ে সাথে সাথে কোড বন্ধ করে; কিন্তু include কেবল ওয়ার্নিং দিয়ে বাকি কোড চালায়।'
      }
    },
    {
      id: 'echo-vs-print-difference-ex2',
      kind: 'mcq',
      topic: 'echo-vs-print-construct-distinction',
      question: {
        en: 'What is a key syntactic distinction between echo and print in PHP?',
        bn: 'পিএইচপিতে echo এবং print এর মধ্যে প্রধান সিনট্যাক্সগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'print is an expression that always returns a value of 1, whereas echo is a void language construct that can accept multiple comma-separated arguments',
          bn: 'print একটি এক্সপ্রেশন যা সর্বদা ১ মান রিটার্ন করে, আর echo কোনো মান রিটার্ন না করে কমা দিয়ে একাধিক আর্গুমেন্ট গ্রহণ করতে পারে'
        },
        {
          en: 'echo only prints numbers, while print only prints letters',
          bn: 'echo কেবল সংখ্যা প্রিন্ট করতে পারে আর print কেবল অক্ষর প্রিন্ট করে'
        },
        {
          en: 'print sends text to a physical office printer via USB cable',
          bn: 'print ইউএসবি তার দিয়ে অফিসের শারীরিক প্রিন্টারে কাগজ প্রিন্ট করে'
        },
        {
          en: 'echo is deprecated and illegal in modern PHP versions',
          bn: 'আধুনিক পিএইচপিতে echo সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Print has a return value of 1; echo has no return value and takes comma-separated inputs.',
        bn: 'Print এর রিটার্ন মান ১; echo কোনো মান রিটার্ন করে না এবং কমাযুক্ত ইনপুট নিতে পারে।'
      },
      explanation: {
        en: 'Because print returns 1, it can be used inside expressions; echo is a language construct with void return.',
        bn: 'print এর মান ১ হওয়ায় এটি এক্সপ্রেশনের ভেতরেও কাজ করতে পারে; echo কোনো মান ফেরত দেয় না।'
      }
    },
    {
      id: 'short-echo-tag-semantics-ex3',
      kind: 'mcq',
      topic: 'short-echo-tag-usage',
      question: {
        en: 'What does the short-echo tag <?= $username ?> represent in modern PHP templates?',
        bn: 'আধুনিক পিএইচপি টেমপ্লেটে শর্ট-ইকো ট্যাগ <?= $username ?> আসলে কী নির্দেশ করে?'
      },
      options: [
        { en: 'An exact syntactic shorthand for <?php echo $username; ?>', bn: '<?php echo $username; ?> এর একটি অবিকল সংক্ষিপ্ত সিনট্যাক্স' },
        { en: 'An assignment operator that sets $username to null', bn: '$username ভেরিয়েবলে null সেট করার একটি অ্যাসাইনমেন্ট অপারেটর' },
        { en: 'A command that deletes the user from the database', bn: 'ডেটাবেস থেকে ব্যবহারকারীকে মুছে ফেলার কমান্ড' },
        { en: 'A tag that can only be executed by Python interpreters', bn: 'এমন একটি ট্যাগ যা কেবল পাইথন ইন্টারপ্রেটারই চালাতে পারে' }
      ],
      answer: 0,
      hint: {
        en: 'It directly echoes the enclosed variable or expression into the rendered HTML stream.',
        bn: 'এটি সরাসরি ভেরিয়েবল বা এক্সপ্রেশনের মান এইচটিএমএলে প্রদর্শন করে।'
      },
      explanation: {
        en: '<?= $var ?> is always enabled in PHP 5.4+ and provides clean, concise view templating.',
        bn: '<?= $var ?> টেমপ্লেটে কোডকে পরিচ্ছন্ন ও সংক্ষিপ্ত রাখার জন্য একটি আদর্শ ও স্বীকৃত পদ্ধতি।'
      }
    },
    {
      id: 'share-nothing-architecture-benefit-ex4',
      kind: 'mcq',
      topic: 'share-nothing-memory-model',
      question: {
        en: 'What is the primary operational benefit of PHP "Share-Nothing" architecture across HTTP requests?',
        bn: 'HTTP অনুরোধগুলোর ক্ষেত্রে পিএইচপির "শেয়ার-নাথিং" আর্কিটেকচারের প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'Memory and variables are completely wiped when each request finishes, preventing memory leaks and state pollution across different users',
          bn: 'প্রতিটি অনুরোধ শেষ হওয়ার সাথে সাথে মেমোরি ও ভেরিয়েবল সম্পূর্ণ মুছে যায়, ফলে ভিন্ন ব্যবহারকারীদের মধ্যে মেমোরি লিক বা তথ্য মিশে যাওয়া অসম্ভব হয়'
        },
        {
          en: 'It cuts the server electricity bill by 90 percent',
          bn: 'এটি সার্ভারের বিদ্যুৎ বিল ৯০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'It requires zero gigabytes of hard drive storage',
          bn: 'এটির জন্য হার্ডডিস্কে কোনো জায়গা লাগে না'
        },
        {
          en: 'It prevents developers from writing functions with more than 3 lines',
          bn: 'এটি ডেভেলপারদের ৩ লাইনের বেশি বড় ফাংশন লিখতে বাধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Every request starts with a clean slate; no lingering global state persists.',
        bn: 'প্রতিটি অনুরোধ একদম শূন্য থেকে শুরু হয়; আগের কোনো তথ্য মেমোরিতে জমে থাকে না।'
      },
      explanation: {
        en: 'Request memory isolation ensures that bugs in one request cannot poison the global state of subsequent user requests.',
        bn: 'মেমোরির বিচ্ছিন্নতার কারণে এক অনুরোধের ত্রুটি অন্য কোনো ব্যবহারকারীর অনুরোধের ওপর প্রভাব ফেলতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-embedded-script',
    title: {
      en: 'PHP Fundamentals & Web Server Lifecycle Quiz',
      bn: 'পিএইচপির মৌলিক ভিত্তি এবং ওয়েব সার্ভার লাইফসাইকেল কুইজ'
    },
    questions: [
      {
        id: 'quiz-require-once-deduplication',
        kind: 'mcq',
        topic: 'require-once-internal-tracking',
        question: {
          en: 'Why is require_once mandatory when loading class definitions and configuration files in legacy architectures?',
          bn: 'ক্লাস ও কনফিগারেশন ফাইল লোড করার সময় require_once ব্যবহার করা কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'It prevents fatal "Cannot declare class X because name is already in use" errors if a file is included multiple times',
            bn: 'একই ফাইল একাধিকবার লোড হলেও এটি "Cannot declare class" সংক্রান্ত মারাত্মক ফ্যাটাল এরর থেকে রক্ষা করে'
          },
          {
            en: 'It accelerates browser rendering engines by 50 percent',
            bn: 'এটি ব্রাউজারের গতি ৫০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'It forces the server to use dark mode',
            bn: 'এটি সার্ভারকে ডার্ক মোড ব্যবহারে বাধ্য করে'
          },
          {
            en: 'It deletes all comments from source code files',
            bn: 'এটি সোর্স কোড থেকে সমস্ত কমেন্ট মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Redeclaring an existing class or function in PHP throws a fatal error.',
          bn: 'একই ক্লাস বা ফাংশন দ্বিতীয়বার ঘোষণা করলে পিএইচপিতে ফ্যাটাল এরর হয়।'
        },
        explanation: {
          en: 'require_once tracks previously loaded files, silently ignoring duplicate inclusions to avoid re-declaration crashes.',
          bn: 'require_once পূর্বে লোড হওয়া ফাইলের হিসাব রেখে ডুপ্লিকেট ঘোষণা প্রতিরোধ করে।'
        }
      },
      {
        id: 'quiz-fastcgi-socket-communication',
        kind: 'mcq',
        topic: 'fastcgi-web-server-protocol',
        question: {
          en: 'How does Nginx communicate with the PHP-FPM process manager when processing dynamic web requests?',
          bn: 'ডাইনামিক ওয়েব রিকোয়েস্ট প্রসেস করার সময় Nginx কীভাবে PHP-FPM প্রসেস ম্যানেজারের সাথে যোগাযোগ করে?'
        },
        options: [
          {
            en: 'Over a high-performance local Unix domain socket (e.g. unix:/run/php/php8.2-fpm.sock) or a local TCP loopback port using the FastCGI binary protocol',
            bn: 'ফাস্ট-সিজিআই বাইনারি প্রোটোকল ব্যবহার করে দ্রুতগতির লোকাল ইউনিক্স ডোমেন সকেট (যেমন unix:/run/php/php8.2-fpm.sock) বা লোকাল টিসিপি পোর্টের মাধ্যমে'
          },
          {
            en: 'By sending email messages to the server administrator',
            bn: 'সার্ভার অ্যাডমিনিস্ট্রেটরকে ইমেইল পাঠানোর মাধ্যমে'
          },
          {
            en: 'By saving text files to a floppy disk drive',
            bn: 'ফ্লপি ডিস্ক ড্রাইভে টেক্সট ফাইল সেভ করার মাধ্যমে'
          },
          {
            en: 'Nginx and PHP-FPM cannot communicate with each other',
            bn: 'Nginx এবং PHP-FPM কখনোই একে অপরের সাথে কথা বলতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'FastCGI binary protocol over Unix domain sockets delivers lowest latency and highest throughput.',
          bn: 'ইউনিক্স ডোমেন সকেটে ফাস্ট-সিজিআই বাইনারি প্রোটোকল সর্বোচ্চ গতি নিশ্চিত করে।'
        },
        explanation: {
          en: 'Nginx proxies PHP requests over FastCGI sockets to persistent worker pools, avoiding process spin-up overhead.',
          bn: 'Nginx ফাস্ট-সিজিআই সকেটের মাধ্যমে সার্বক্ষণিক সচল কর্মী দলের কাছে অনুরোধ পাঠায়।'
        }
      },
      {
        id: 'quiz-magic-constants-introspection',
        kind: 'mcq',
        topic: 'php-magic-constants',
        question: {
          en: 'What does the magic constant __DIR__ resolve to during script execution?',
          bn: 'স্ক্রিপ্ট চলার সময় ম্যাজিক কনস্ট্যান্ট __DIR__ কোন মানটি প্রকাশ করে?'
        },
        options: [
          {
            en: 'The absolute filesystem directory path of the current file being executed',
            bn: 'বর্তমান যে ফাইলটি কার্যকর হচ্ছে তার সম্পূর্ণ ও পরম (absolute) ডিরেক্টরি পাথ'
          },
          {
            en: 'The current year as a 4-digit number',
            bn: '৪ ডিজিটের বর্তমান বছর'
          },
          {
            en: 'The IP address of the client browser',
            bn: 'ক্লায়েন্ট ব্রাউজারের আইপি ঠিকানা'
          },
          {
            en: 'The number of registered users in the database',
            bn: 'ডেটাবেসে নিবন্ধিত ব্যবহারকারীর মোট সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: '__DIR__ provides the directory containing the file, equivalent to dirname(__FILE__).',
          bn: '__DIR__ বর্তমান ফাইলের ফোল্ডার পাথ নির্দেশ করে।'
        },
        explanation: {
          en: '__DIR__ returns the absolute directory path of the script, ensuring robust file path resolution.',
          bn: '__DIR__ ফাইলের আসল ফোল্ডার পাথ দেয়, ফলে নির্ভুলভাবে অন্যান্য ফাইল যুক্ত করা যায়।'
        }
      },
      {
        id: 'quiz-output-buffering-header-protection',
        kind: 'mcq',
        topic: 'output-buffering-headers-already-sent',
        question: {
          en: 'How does Output Buffering (ob_start()) prevent the notorious "Cannot modify header information - headers already sent" error?',
          bn: 'আউটপুট বাফারিং (ob_start()) কীভাবে কুখ্যাত "Cannot modify header information - headers already sent" এরর প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'It holds generated HTML in memory buffer rather than flushing immediately to the network, allowing scripts to send HTTP headers or set cookies at any point',
            bn: 'এটি তৈরি হওয়া এইচটিএমএল সাথে সাথে নেটওয়ার্কে না পাঠিয়ে মেমোরিতে ধরে রাখে, ফলে স্ক্রিপ্টের যেকোনো অংশে নতুন HTTP হেডার বা কুকি সেট করা সম্ভব হয়'
          },
          {
            en: 'It deletes all HTTP headers from the internet',
            bn: 'এটি ইন্টারনেট থেকে সমস্ত HTTP হেডার মুছে ফেলে'
          },
          {
            en: 'It turns all text letters into uppercase',
            bn: 'এটি সমস্ত অক্ষরকে বড় হাতের অক্ষরে বদলে দেয়'
          },
          {
            en: 'Output buffering only works on mobile devices',
            bn: 'আউটপুট বাফারিং কেবল মোবাইলেই কাজ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'HTTP headers must be transmitted before any body bytes leave the server.',
          bn: 'বডির কোনো লেখা যাওয়ার আগেই সমস্ত HTTP হেডার পাঠাতে হয়; বাফারিং বডিকে আটকে রেখে সময় দেয়।'
        },
        explanation: {
          en: 'Buffering prevents premature network flushing, giving code the opportunity to emit session cookies or redirects safely.',
          bn: 'বাফারিং বডির ডেটা আটকে রাখে, ফলে মাঝপথেও রিডাইরেক্ট বা সেশন কুকি পাঠানো যায় নিরাপদে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'types-and-the-loose-engine',
    title: {
      en: 'Type System, Operators & Control Flow',
      bn: 'টাইপ সিস্টেম, অপারেটর এবং কন্ট্রোল ফ্লো'
    }
  }
};
