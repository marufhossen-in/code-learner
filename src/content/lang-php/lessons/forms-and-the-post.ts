import type { Lesson } from '../../../lib/types';

export const FormsAndThePostLesson: Lesson = {
  slug: 'forms-and-the-post',
  tech: 'lang-php',
  title: {
    en: 'HTTP Superglobals, Input Streams & Sanitization',
    bn: 'এইচটিটিপি সুপারগ্লোবাল, ইনপুট স্ট্রিম এবং স্যানিটাইজেশন'
  },
  summary: {
    en: 'Comprehensive guide to PHP HTTP ingress: inspect superglobals ($_GET, $_POST, $_FILES, $_SERVER), parse raw JSON request payloads via php://input, prevent Cross-Site Scripting (XSS) with htmlspecialchars, and validate types using filter_var.',
    bn: 'পিএইচপি HTTP ইনপুট ব্যবস্থাপনার পূর্ণাঙ্গ গাইড: সুপারগ্লোবাল ($_GET, $_POST, $_FILES, $_SERVER), php://input এর মাধ্যমে JSON পেলোড পার্সিং, htmlspecialchars দিয়ে XSS প্রতিরোধ এবং filter_var দিয়ে ভ্যালিডেশন।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'superglobals-and-raw-streams-heading',
      text: {
        en: 'HTTP Superglobals, Raw JSON Streams, and Multipart Uploads',
        bn: 'এইচটিটিপি সুপারগ্লোবাল, র-জেসন স্ট্রিম এবং মাল্টিপার্ট আপলোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP (the server-side scripting runtime) parses incoming HTTP requests into predefined superglobal arrays. These superglobals are globally accessible from any scope without the global keyword. The $_GET array captures URL query parameters. The $_POST array parses form bodies sent via HTML forms. For modern single-page apps sending raw application/json payloads, $_POST is empty. Developers read the php://input stream via file_get_contents("php://input") and decode it using json_decode().',
        bn: 'পিএইচপি (সার্ভার-সাইড স্ক্রিপ্টিং রানটাইম) আগত HTTP রিকোয়েস্টগুলোকে কিছু পূর্বনির্ধারিত সুপারগ্লোবাল অ্যারেতে পার্স করে। এই সুপারগ্লোবালগুলো কোনো global কিওয়ার্ড ছাড়াই যেকোনো স্কোপ থেকে সরাসরি ব্যবহার করা যায়। $_GET অ্যারে ইউআরএল কোয়েরি প্যারামিটারগুলো গ্রহণ করে। আর $_POST এইচটিএমএল ফর্ম বডির ডেটা প্রক্রিয়া করে। আধুনিক অ্যাপ্লিকেশনের পাঠানো application/json পেলোডের ক্ষেত্রে $_POST খালি থাকে। ফলে ডেভেলপারদের file_get_contents("php://input") দিয়ে ইনপুট স্ট্রিম পড়ে json_decode() দিয়ে ডিকোড করতে হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Complete HTTP request ingress pipeline routing URL queries, JSON payloads, and sanitization filters into PHP.',
        bn: 'চিত্র ১: ইউআরএল কোয়েরি, জেসন পেলোড এবং স্যানিটাইজেশন ফিল্টার সমন্বয়ে পিএইচপি HTTP ইনগ্রেস পাইপলাইনের রূপরেখা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP HTTP INGRESS, SUPERGLOBALS &amp; SANITIZATION PIPELINE</text>

  <!-- Step 1: Client Request -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Client Request</text>

    <rect x="10" y="45" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="70" fill="#38bdf8" font-size="10" font-family="monospace">?page=2&amp;sort=id</text>

    <rect x="10" y="95" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="120" fill="#38bdf8" font-size="9" font-family="monospace">{"email":"a@b.com"}</text>

    <rect x="10" y="145" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="170" fill="#38bdf8" font-size="9" font-family="monospace">upload.pdf (Binary)</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">HTTP Socket Ingress</text>
  </g>

  <!-- Step 2: Zend Parser -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Zend Engine Parser</text>

    <rect x="10" y="45" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="70" fill="#34d399" font-size="11" font-family="monospace">Populates $_GET</text>

    <rect x="10" y="95" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="120" fill="#34d399" font-size="10" font-family="monospace">php://input (JSON)</text>

    <rect x="10" y="145" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="170" fill="#34d399" font-size="11" font-family="monospace">Populates $_FILES</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Global Arrays Ready</text>
  </g>

  <!-- Step 3: Security Sanitization -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Defense &amp; Escaping</text>

    <rect x="10" y="45" width="165" height="45" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="65" fill="#fbbf24" font-size="9" font-family="monospace">filter_var($email,</text>
    <text x="15" y="82" fill="#fbbf24" font-size="8" font-family="monospace">FILTER_VALIDATE_EMAIL)</text>

    <rect x="10" y="100" width="165" height="45" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="120" fill="#fbbf24" font-size="9" font-family="monospace">htmlspecialchars(...,</text>
    <text x="15" y="137" fill="#fbbf24" font-size="8" font-family="monospace">ENT_QUOTES, 'UTF-8')</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero Malicious Payloads</text>
  </g>

  <!-- Step 4: Controller Core -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Application Core</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="70" fill="#c084fc" font-size="10" font-family="monospace">Clean Typed DTO</text>
    <text x="15" y="88" fill="#cbd5e1" font-size="8" font-family="sans-serif">Domain logic</text>

    <rect x="10" y="105" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#34d399" font-size="10" font-family="monospace">PDO Bind &amp; Save</text>
    <text x="15" y="148" fill="#cbd5e1" font-size="8" font-family="sans-serif">Immune to XSS/SQLi</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">200 JSON Response</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'sanitization-and-xss-defense-heading',
      text: {
        en: 'Defending Against Cross-Site Scripting (XSS) and Type Validation',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) প্রতিরোধ এবং ডেটা টাইপ যাচাইকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Echoing user input directly into HTML templates exposes applications to catastrophic Cross-Site Scripting (XSS) attacks. To eliminate this risk, all dynamic strings must be escaped using htmlspecialchars($str, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8"), converting angle brackets (<, >) and quotes into harmless HTML entities (&lt;, &gt;, &quot;). Furthermore, input validation should be enforced using filter_var() with standard flags such as FILTER_VALIDATE_EMAIL and FILTER_VALIDATE_INT.',
        bn: 'ব্যবহারকারীর দেওয়া তথ্য সরাসরি এইচটিএমএল ভিউতে প্রিন্ট করলে অ্যাপ্লিকেশন মারাত্মক ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণের ঝুঁকিতে পড়ে। এই ঝুঁকি পুরোপুরি দূর করতে সমস্ত ডাইনামিক স্ট্রিংকে htmlspecialchars($str, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8") এর মাধ্যমে এস্কেপ করা আবশ্যক, যা ব্র্যাকেট (<, >) এবং কোটেশনকে নিরাপদ এইচটিএমএল এন্টিটিতে রূপান্তর করে। উপরন্তু FILTER_VALIDATE_EMAIL এবং FILTER_VALIDATE_INT এর মতো স্ট্যান্ডার্ড ফ্ল্যাগ সহ filter_var() ব্যবহার করে ইনপুট যাচাই করা উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP superglobals parsing, raw JSON ingress stream, and HTML entity escaping.',
        bn: 'পিএইচপি সুপারগ্লোবাল পার্সিং, কাঁচা জেসন ইনপুট স্ট্রিম এবং এইচটিএমএল এন্টিটি এস্কেপিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP HTTP Request Parsing, Superglobals, and XSS Sanitization

export class PhpHttpSimulator {
  // Simulating PHP: htmlspecialchars($str, ENT_QUOTES, 'UTF-8')
  public static htmlspecialchars(raw: string): string {
    return raw
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Simulating PHP: filter_var($email, FILTER_VALIDATE_EMAIL)
  public static validateEmail(email: string): boolean {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  }

  // Simulating PHP: json_decode(file_get_contents('php://input'), true)
  public static parseRawJson(rawStream: string): Record<string, unknown> | null {
    try {
      return JSON.parse(rawStream);
    } catch {
      return null;
    }
  }
}

// 1. Defending against XSS attack payload
const maliciousInput = '<script>alert("XSS Attack!");</script>';
const safeOutput = PhpHttpSimulator.htmlspecialchars(maliciousInput);
console.log('Safe HTML Output:', safeOutput);
// "&lt;script&gt;alert(&quot;XSS Attack!&quot;);&lt;/script&gt;"

// 2. Validating email input
const userEmail = 'dev@company.com';
const isEmailValid = PhpHttpSimulator.validateEmail(userEmail);
console.log('Is Email Valid:', isEmailValid); // true

// 3. Simulating raw php://input stream ingress
const rawStream = '{"username":"farhan","action":"login"}';
const payload = PhpHttpSimulator.parseRawJson(rawStream);
console.log('Decoded JSON Payload Action:', payload?.action); // "login"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Superglobals',
          def: {
            en: 'Built-in PHP array variables ($_GET, $_POST, $_SERVER, $_FILES) globally accessible across all scopes.',
            bn: 'পিএইচপির বিশেষ বিল্ট-ইন গ্লোবাল অ্যারে যা কোনো ঘোষণা ছাড়াই স্ক্রিপ্টের যেকোনো অংশ থেকে অ্যাক্সেস করা যায়।'
          }
        },
        {
          term: 'php://input Stream',
          def: {
            en: 'Read-only byte stream allowing access to raw, unparsed HTTP request bodies such as JSON payloads.',
            bn: 'পিএইচপির শুধুমাত্র পাঠযোগ্য ইনপুট স্ট্রিম যার মাধ্যমে কাঁচা জেসন পেলোড ও রিকোয়েস্ট বডি সরাসরি পড়া যায়।'
          }
        },
        {
          term: 'Cross-Site Scripting (XSS)',
          def: {
            en: 'Vulnerability where malicious client scripts are injected into web pages viewed by other users due to unescaped output.',
            bn: 'নিরাপত্তা ত্রুটি যেখানে আউটপুট এস্কেপ না করার ফলে ক্ষতিকারক জাভাস্ক্রিপ্ট কোড অন্য ব্যবহারকারীর ব্রাউজারে রান করে।'
          }
        },
        {
          term: 'htmlspecialchars',
          def: {
            en: 'Native PHP function converting special characters to HTML entities to prevent malicious script interpretation.',
            bn: 'পিএইচপির নিজস্ব ফাংশন যা বিশেষ চিহ্নগুলোকে এইচটিএমএল এন্টিটিতে রূপান্তর করে ব্রাউজারকে কোড রান করা থেকে বিরত রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'superglobals-scope-availability-ex1',
      kind: 'mcq',
      topic: 'superglobals-global-scope-rule',
      question: {
        en: 'How does variable scoping apply to PHP superglobals like $_POST, $_GET, and $_SERVER inside a function body?',
        bn: 'ফাংশনের ভেতরে $_POST, $_GET এবং $_SERVER এর মতো সুপারগ্লোবাল অ্যারের ক্ষেত্রে ভেরিয়েবল স্কোপ কীভাবে প্রযোজ্য হয়?'
      },
      options: [
        {
          en: 'Superglobals are automatically available inside all functions and methods without needing the "global" keyword',
          bn: 'কোনো "global" কিওয়ার্ড ছাড়াই সুপারগ্লোবালগুলো সমস্ত ফাংশন এবং মেথডের ভেতরে স্বয়ংক্রিয়ভাবে ব্যবহারযোগ্য থাকে'
        },
        {
          en: 'You must declare global $_POST; at the top of every function',
          bn: 'প্রতিটি ফাংশনের শুরুতে global $_POST; লিখতে হয়'
        },
        {
          en: 'Superglobals can only be read on Apache web servers',
          bn: 'সুপারগ্লোবাল কেবল অ্যাপাচি সার্ভারেই কাজ করে'
        },
        {
          en: 'Accessing superglobals inside a function causes a fatal compiler error',
          bn: 'ফাংশনের ভেতর সুপারগ্লোবাল অ্যাক্সেস করলে মারাত্মক কম্পাইলার এরর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The "super" in superglobal denotes universal availability across all variable scopes.',
        bn: 'সুপারগ্লোবাল মানেই হলো এটি কোনো বাধা ছাড়াই যেকোনো স্কোপে সর্বদা বিদ্যমান।'
      },
      explanation: {
        en: 'Superglobals are automatically present in every scope; no global declaration is required.',
        bn: 'সুপারগ্লোবালসমূহ যেকোনো ফাংশন বা ক্লাসের ভেতর কোনো অতিরিক্ত ঘোষণা ছাড়াই সরাসরি ব্যবহার করা যায়।'
      }
    },
    {
      id: 'reading-raw-json-body-ex2',
      kind: 'mcq',
      topic: 'reading-raw-json-request-stream',
      question: {
        en: 'Why is $_POST completely empty when a client sends an HTTP request with header Content-Type: application/json?',
        bn: 'ক্লায়েন্ট যখন Content-Type: application/json হেডার দিয়ে রিকোয়েস্ট পাঠায় তখন $_POST সম্পূর্ণ খালি থাকে কেন?'
      },
      options: [
        {
          en: '$_POST only parses form URL-encoded and multipart form data; raw JSON must be read from php://input via file_get_contents()',
          bn: '$_POST কেবল ফর্ম ইউআরএল-এনকোডেড এবং মাল্টিপার্ট ডেটা পার্স করে; কাঁচা জেসন php://input থেকে file_get_contents() দিয়ে পড়তে হয়'
        },
        {
          en: 'Because JSON is not supported by PHP',
          bn: 'কারণ পিএইচপিতে জেসন সমর্থন করে না'
        },
        {
          en: 'The web browser deletes the data before transmission',
          bn: 'ওয়েব ব্রাউজার ডাটা পাঠানোর আগেই মুছে ফেলে'
        },
        {
          en: 'JSON requests are permanently illegal in PHP',
          bn: 'পিএইচপিতে জেসন রিকোয়েস্ট পুরোপুরি অবৈধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'PHP built-in POST parser only triggers on standard form media types.',
        bn: 'পিএইচপি স্বয়ংক্রিয়ভাবে কেবল ফর্ম-এনকোডেড ডেটা পার্স করে, জেসনের জন্য php://input পড়তে হয়।'
      },
      explanation: {
        en: 'Non-form MIME types like application/json bypass $_POST and must be fetched via the php://input stream.',
        bn: 'application/json ডেটা সরাসরি $_POST এ না এসে কাঁচা বাইট স্ট্রিম হিসেবে php://input এ সংরক্ষিত থাকে।'
      }
    },
    {
      id: 'html-special-chars-ent-quotes-ex3',
      kind: 'mcq',
      topic: 'htmlspecialchars-quote-flags',
      question: {
        en: 'Why is the ENT_QUOTES flag critical when escaping user input with htmlspecialchars()?',
        bn: 'htmlspecialchars() দিয়ে তথ্য ফিল্টার করার সময় ENT_QUOTES ফ্ল্যাগটি দেওয়া অত্যন্ত গুরুত্বপূর্ণ কেন?'
      },
      options: [
        {
          en: 'It forces conversion of both double quotes (") AND single quotes (\') into HTML entities, preventing attribute breakout XSS',
          bn: 'এটি ডাবল কোট (") এবং সিঙ্গেল কোট (\') উভয়কেই এইচটিএমএল এন্টিটিতে বদলে দেয়, ফলে এট্রিবিউট ব্রেকআউট XSS আক্রমণ ঠেকানো যায়'
        },
        {
          en: 'It deletes all quotation marks from the database',
          bn: 'এটি ডেটাবেস থেকে সমস্ত কোটেশন মার্ক মুছে ফেলে'
        },
        {
          en: 'It encrypts the string with AES-256',
          bn: 'এটি স্ট্রিংটিকে AES-256 দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It compresses the string into a zip file',
          bn: 'এটি স্ট্রিংটিকে জিপ ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without ENT_QUOTES, single quotes are left unescaped, enabling XSS in single-quoted attributes.',
        bn: 'ENT_QUOTES না দিলে সিঙ্গেল কোট এস্কেপ হয় না, ফলে সিঙ্গেল কোটেশনযুক্ত এট্রিবিউটে হ্যাকিংয়ের ঝুঁকি থাকে।'
      },
      explanation: {
        en: 'ENT_QUOTES instructs htmlspecialchars to escape both double and single quotes, securing HTML attribute contexts.',
        bn: 'ENT_QUOTES উভয় ধরনের কোটেশনকে রূপান্তর করে এইচটিএমএল এট্রিবিউটকে নিরাপদ রাখে।'
      }
    },
    {
      id: 'file-upload-temporary-storage-ex4',
      kind: 'mcq',
      topic: 'uploaded-files-temp-directory',
      question: {
        en: 'Where does PHP initially store an uploaded file before move_uploaded_file() is called by the application script?',
        bn: 'অ্যাপ্লিকেশনে move_uploaded_file() কল করার পূর্বে পিএইচপি আপলোড করা ফাইলটিকে প্রাথমিকভাবে কোথায় জমা রাখে?'
      },
      options: [
        {
          en: 'In the system temporary directory specified by upload_tmp_dir, referenced by $_FILES["doc"]["tmp_name"]',
          bn: 'upload_tmp_dir এ নির্ধারিত সিস্টেমের অস্থায়ী ডিরেক্টরিতে, যা $_FILES["doc"]["tmp_name"] দ্বারা নির্দেশিত হয়'
        },
        {
          en: 'Directly in the root public web directory',
          bn: 'সরাসরি পাবলিক ওয়েব ডিরেক্টরির রুট ফোল্ডারে'
        },
        {
          en: 'Inside the client web browser cache',
          bn: 'ক্লায়েন্টের ওয়েব ব্রাউজার ক্যাশে'
        },
        {
          en: 'In an external Amazon S3 bucket automatically',
          bn: 'স্বয়ংক্রিয়ভাবে কোনো আমাজন এস৩ বাকেটে'
        }
      ],
      answer: 0,
      hint: {
        en: 'PHP writes uploads to a temporary path that is automatically purged after request termination if not moved.',
        bn: 'ফাইলটি অস্থায়ী ফোল্ডারে থাকে এবং রিকোয়েস্ট শেষ হলে স্বয়ংক্রিয়ভাবে মুছে যায় যদি না তা স্থানান্তর করা হয়।'
      },
      explanation: {
        en: 'PHP buffers uploads in upload_tmp_dir until moved via move_uploaded_file(), verifying file upload authenticity.',
        bn: 'পিএইচপি ফাইলকে অস্থায়ী ফোল্ডারে রাখে যা move_uploaded_file() দিয়ে মূল ফোল্ডারে সরিয়ে নিতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-forms-and-the-post',
    title: {
      en: 'PHP HTTP Superglobals and Sanitization Quiz',
      bn: 'পিএইচপি HTTP সুপারগ্লোবাল এবং স্যানিটাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-filter-var-email-validation',
        kind: 'mcq',
        topic: 'filter-var-email-validation',
        question: {
          en: 'What does filter_var("invalid-address", FILTER_VALIDATE_EMAIL) evaluate to in PHP?',
          bn: 'পিএইচপিতে filter_var("invalid-address", FILTER_VALIDATE_EMAIL) মূল্যায়ন করলে কোন মানটি পাওয়া যায়?'
        },
        options: [
          {
            en: 'false, indicating that the string does not conform to RFC email address specifications',
            bn: 'false, যা নির্দেশ করে যে স্ট্রিংটি বৈধ ইমেইল ঠিকানার ফরম্যাট মেনে চলে না'
          },
          {
            en: 'true, because any non-empty string is valid',
            bn: 'true, কারণ যেকোনো টেক্সটই বৈধ বলে গণ্য হয়'
          },
          {
            en: 'A fatal TypeError exception',
            bn: 'একটি মারাত্মক TypeError এক্সেপশন'
          },
          {
            en: 'The number 0',
            bn: 'সংখ্যা 0'
          }
        ],
        answer: 0,
        hint: {
          en: 'FILTER_VALIDATE_EMAIL returns false when the string fails email syntax validation.',
          bn: 'ইমেইলের গঠন ঠিক না থাকলে FILTER_VALIDATE_EMAIL সরাসরি false রিটার্ন করে।'
        },
        explanation: {
          en: 'filter_var returns false when validation fails, or returns the sanitized/validated value on success.',
          bn: 'ভ্যালিডেশন ব্যর্থ হলে filter_var সর্বদা false রিটার্ন করে।'
        }
      },
      {
        id: 'quiz-server-request-method-detection',
        kind: 'mcq',
        topic: 'server-request-method-superglobal',
        question: {
          en: 'Which superglobal key retrieves the HTTP verb (GET, POST, PUT, DELETE) used for the incoming request?',
          bn: 'আগত রিকোয়েস্টে ব্যবহৃত HTTP ভার্ব (GET, POST, PUT, DELETE) জানার জন্য কোন সুপারগ্লোবাল কি ব্যবহার করা হয়?'
        },
        options: [
          { en: '$_SERVER["REQUEST_METHOD"]', bn: '$_SERVER["REQUEST_METHOD"]' },
          { en: '$_ENV["HTTP_VERB"]', bn: '$_ENV["HTTP_VERB"]' },
          { en: '$_GET["action"]', bn: '$_GET["action"]' },
          { en: '$_POST["_method"]', bn: '$_POST["_method"]' }
        ],
        answer: 0,
        hint: {
          en: 'The server environment array provides low-level request headers and HTTP verbs.',
          bn: 'সার্ভারের পরিবেশগত তথ্যের ভেতর রিকোয়েস্টের মূল মেথড সংরক্ষিত থাকে।'
        },
        explanation: {
          en: '$_SERVER["REQUEST_METHOD"] exposes the uppercase HTTP verb received by the web server.',
          bn: '$_SERVER["REQUEST_METHOD"] এ আগত রিকোয়েস্টের মূল HTTP মেথড (যেমন POST বা GET) জমা থাকে।'
        }
      },
      {
        id: 'quiz-php-input-re-readability',
        kind: 'mcq',
        topic: 'php-input-stream-seekable',
        question: {
          en: 'Is php://input available when the request body has Content-Type: multipart/form-data?',
          bn: 'রিকোয়েস্ট বডিতে Content-Type: multipart/form-data থাকলে php://input স্ট্রিম কি ব্যবহারযোগ্য থাকে?'
        },
        options: [
          {
            en: 'No, PHP disables php://input for multipart/form-data requests, populating $_POST and $_FILES instead',
            bn: 'না, multipart/form-data এর জন্য পিএইচপি php://input বন্ধ রাখে এবং এর বদলে $_POST ও $_FILES পূরণ করে'
          },
          {
            en: 'Yes, it works identically for all media types',
            bn: 'হ্যাঁ, সব ধরনের মিডিয়ার জন্যই এটি একই রকম কাজ করে'
          },
          {
            en: 'Only on Windows operating systems',
            bn: 'কেবল উইন্ডোজ অপারেটিং সিস্টেমে'
          },
          {
            en: 'Only if the file is smaller than 1 kilobyte',
            bn: 'কেবল ফাইলটি ১ কিলোবাইটের চেয়ে ছোট হলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'PHP streams multipart uploads directly into temporary files, leaving php://input unavailable.',
          bn: 'মাল্টিপার্ট আপলোডের তথ্য পিএইচপি সরাসরি ফাইলে নিয়ে যায়, ফলে php://input খালি থাকে।'
        },
        explanation: {
          en: 'php://input is unavailable with enctype="multipart/form-data"; PHP routes those payloads to $_POST and $_FILES.',
          bn: 'multipart/form-data এর ক্ষেত্রে php://input কাজ করে না; ডেটা সরাসরি $_POST ও $_FILES এ যায়।'
        }
      },
      {
        id: 'quiz-csrf-token-protection-purpose',
        kind: 'mcq',
        topic: 'csrf-protection-token-validation',
        question: {
          en: 'Why should every state-changing HTML form submission validate a cryptographically secure CSRF token?',
          bn: 'যেকোনো পরিবর্তনমূলক এইচটিএমএল ফর্ম সাবমিশনে ক্রিপ্টোগ্রাফিক CSRF টোকেন যাচাই করা আবশ্যক কেন?'
        },
        options: [
          {
            en: 'To ensure the form submission originated from an authorized user session on your application, preventing unauthorized cross-origin requests',
            bn: 'সাবমিশনটি আপনার অ্যাপ্লিকেশনে লগইন থাকা আসল ব্যবহারকারীই পাঠিয়েছেন কি না তা নিশ্চিত করতে এবং বহিরাগত অননুমোদিত রিকোয়েস্ট ঠেকাতে'
          },
          {
            en: 'To compress the form submission using GZIP',
            bn: 'জিজিপ দিয়ে ফর্মের সাইজ ছোট করার জন্য'
          },
          {
            en: 'To convert the database into an Excel spreadsheet',
            bn: 'ডেটাবেসকে এক্সেল শিটে রূপান্তর করার জন্য'
          },
          {
            en: 'CSRF tokens make web pages load 100 times faster',
            bn: 'CSRF টোকেন ওয়েব পেজের গতি ১০০ গুণ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cross-Site Request Forgery tricks authenticated browsers into submitting malicious requests.',
          bn: 'সিএসআরএফ আক্রমণ লগইন থাকা ব্যবহারকারীর অজান্তে ক্ষতিকারক ফর্ম সাবমিট করার চেষ্টা করে।'
        },
        explanation: {
          en: 'CSRF tokens prove request intent originates from the legitimate client application, thwarting cross-site forgery.',
          bn: 'CSRF টোকেন নিশ্চিত করে যে রিকোয়েস্টটি নির্ভরযোগ্য মূল সাইট থেকেই বৈধভাবে পাঠানো হয়েছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'classes-and-the-trait',
    title: {
      en: 'Classes, Properties, Traits & Inheritance',
      bn: 'ক্লাস, প্রপার্টি, ট্রেইট এবং ইনহেরিটেন্স'
    }
  }
};
