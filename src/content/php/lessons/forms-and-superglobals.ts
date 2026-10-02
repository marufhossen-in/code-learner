import type { Lesson } from '../../../lib/types';

export const FormsAndSuperglobalsLesson: Lesson = {
  slug: 'forms-and-superglobals',
  tech: 'php',
  title: {
    en: 'Form Handling, Superglobals & Input Validation',
    bn: 'ফর্ম হ্যান্ডলিং, সুপারগ্লোবাল এবং ইনপুট ভ্যালিডেশন'
  },
  summary: {
    en: 'Master PHP web request handling: explore superglobals ($_GET, $_POST, $_SERVER, $_FILES), sanitize raw user input with htmlspecialchars and filter_var, handle multi-part file uploads safely, and secure submissions with CSRF tokens.',
    bn: 'পিএইচপি ওয়েব রিকোয়েস্ট হ্যান্ডলিং আয়ত্ত করুন: সুপারগ্লোবাল ($_GET, $_POST, $_SERVER, $_FILES), htmlspecialchars এবং filter_var দিয়ে ইনপুট স্যানিটাইজেশন, নিরাপদ মাল্টি-পার্ট ফাইল আপলোড এবং CSRF টোকেন সুরক্ষা।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'superglobals-architecture-heading',
      text: {
        en: 'Superglobals and the Request Model: $_GET, $_POST, and $_SERVER',
        bn: 'সুপারগ্লোবাল এবং রিকোয়েস্ট মডেল: $_GET, $_POST এবং $_SERVER'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP (the server scripting runtime) provides built-in associative arrays known as superglobals that are automatically accessible throughout every scope without declaring global variables. The $_SERVER array exposes request headers, server paths, and the HTTP method ($_SERVER["REQUEST_METHOD"]). The $_GET array captures URL query string parameters, making it ideal for bookmarkable filters and paginated searches. For data modifications, logins, and sensitive state changes, the $_POST array securely parses HTTP body payloads.',
        bn: 'পিএইচপি (সার্ভার স্ক্রিপ্টিং রানটাইম) কিছু বিশেষ অ্যাসোসিয়েটিভ অ্যারে সরবরাহ করে যেগুলোকে সুপারগ্লোবাল বলা হয়। এগুলো কোনো global কিওয়ার্ড ছাড়াই কোডের যেকোনো স্থান থেকে স্বয়ংক্রিয়ভাবে অ্যাক্সেস করা যায়। $_SERVER অ্যারেতে রিকোয়েস্ট হেডার, সার্ভারের পাথ এবং ব্যবহৃত HTTP মেথডের তথ্য ($_SERVER["REQUEST_METHOD"]) থাকে। $_GET অ্যারে ইউআরএল কোয়েরি স্ট্রিং থেকে প্যারামিটার সংগ্রহ করে, যা বুকমার্কযোগ্য সার্চ ও পেজিনেশনের জন্য উপযুক্ত। অপরদিকে ডেটা পরিবর্তন, লগইন ও সংবেদনশীল কাজের জন্য $_POST অ্যারে এইচটিটিপি বডির তথ্য নিরাপদে পার্স করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-step secure input validation, CSRF verification, and XSS sanitization pipeline.',
        bn: 'চিত্র ১: ৪ টি ধাপের নিরাপদ ইনপুট যাচাইকরণ, CSRF ভেরিফিকেশন এবং XSS স্যানিটাইজেশন পাইপলাইন।'
      },
      svg: `<svg viewBox="0 0 840 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="320" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP SECURE FORM SUBMISSION &amp; SANITIZATION PIPELINE</text>

  <!-- Step 1: Form Ingestion -->
  <g transform="translate(30, 65)">
    <rect width="170" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Request Parsing</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">POST /submit</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Populates $_POST</text>
    <text x="12" y="90" fill="#94a3b8" font-size="9" font-family="sans-serif">Populates $_SERVER</text>
    <rect x="10" y="105" width="150" height="55" rx="5" fill="#0f172a" />
    <text x="15" y="125" fill="#e2e8f0" font-size="9" font-family="monospace">email: "user@ex.com"</text>
    <text x="15" y="145" fill="#e2e8f0" font-size="9" font-family="monospace">age: "24"</text>
    <text x="12" y="185" fill="#38bdf8" font-size="9" font-family="sans-serif">Raw untrusted data</text>
  </g>

  <!-- Step 2: CSRF Validation -->
  <g transform="translate(230, 65)">
    <rect width="170" height="230" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#d97706" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. CSRF Defense</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">hash_equals()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Timing-safe token</text>
    <text x="12" y="90" fill="#94a3b8" font-size="9" font-family="sans-serif">match with session</text>
    <rect x="10" y="105" width="150" height="55" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="125" fill="#fbbf24" font-size="8" font-family="monospace">$_POST['csrf'] ===</text>
    <text x="15" y="145" fill="#fbbf24" font-size="8" font-family="monospace">$_SESSION['csrf']</text>
    <text x="12" y="185" fill="#fbbf24" font-size="9" font-family="sans-serif">Rejects forged post</text>
  </g>

  <!-- Step 3: Type & Format Filter -->
  <g transform="translate(430, 65)">
    <rect width="170" height="230" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#059669" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Type Validation</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">filter_var()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">FILTER_VALIDATE_</text>
    <text x="12" y="90" fill="#94a3b8" font-size="9" font-family="sans-serif">EMAIL and INT</text>
    <rect x="10" y="105" width="150" height="55" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="125" fill="#34d399" font-size="8" font-family="monospace">age: 18 &lt;= x &lt;= 120</text>
    <text x="15" y="145" fill="#34d399" font-size="8" font-family="monospace">email: valid syntax</text>
    <text x="12" y="185" fill="#34d399" font-size="9" font-family="sans-serif">Enforces clean schema</text>
  </g>

  <!-- Step 4: XSS Output Escape -->
  <g transform="translate(630, 65)">
    <rect width="180" height="230" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#db2777" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. HTML View Escape</text>
    <text x="12" y="55" fill="#f472b6" font-size="10" font-family="monospace">htmlspecialchars()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">ENT_QUOTES, UTF-8</text>
    <rect x="10" y="90" width="160" height="70" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace">&lt;script&gt; converted to</text>
    <text x="15" y="130" fill="#f472b6" font-size="8" font-family="monospace">&amp;lt;script&amp;gt;</text>
    <text x="15" y="145" fill="#cbd5e1" font-size="8" font-family="monospace">Safe to echo in HTML</text>
    <text x="12" y="185" fill="#f472b6" font-size="9" font-family="sans-serif">Zero XSS injection</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'input-sanitization-heading',
      text: {
        en: 'Input Validation, XSS Prevention, and File Upload Handling',
        bn: 'ইনপুট ভ্যালিডেশন, XSS প্রতিরোধ এবং ফাইল আপলোড ব্যবস্থাপনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never trust user input. Rendering raw input directly into HTML templates exposes applications to Cross-Site Scripting (XSS). All dynamic output must be escaped using htmlspecialchars($str, ENT_QUOTES, "UTF-8"), converting characters like < and > into safe HTML entities (&lt; and &gt;). For structured fields, filter_var verifies email formats and integer bounds (such as ages between 18 and 100). When handling multi-part file uploads via $_FILES, verify the file size, check for UPLOAD_ERR_OK, and validate MIME types using finfo_file rather than trusting the user-submitted file extension.',
        bn: 'ব্যবহারকারীর পাঠানো কোনো ইনপুটকে কখনোই অন্ধভাবে বিশ্বাস করবেন না। অপরিশোধিত ইনপুট সরাসরি এইচটিএমএল ভিউতে দেখালে ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণের সুযোগ তৈরি হয়। ভিউতে আউটপুট দেখানোর সময় সর্বদা htmlspecialchars($str, ENT_QUOTES, "UTF-8") ব্যবহার করে < এবং > এর মতো ক্ষতিকর চিহ্নগুলোকে নিরাপদ এইচটিএমএল এন্টিটিতে (&lt; ও &gt;) রূপান্তর করতে হবে। ইমেইল বা বয়সের (যেমন ১৮ থেকে ১০০) মতো তথ্যের জন্য filter_var ব্যবহার করা জরুরি। $_FILES দিয়ে ফাইল আপলোডের ক্ষেত্রে ফাইলের সাইজ, UPLOAD_ERR_OK স্ট্যাটাস এবং finfo_file দিয়ে প্রকৃত MIME টাইপ যাচাই করতে হবে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP form validator: CSRF checking, integer range validation, and HTML entity escaping.',
        bn: 'পিএইচপি ফর্ম ভ্যালিডেশন, CSRF যাচাই এবং এইচটিএমএল এন্টিটি এস্কেপিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP Form Validation and XSS Sanitization in TypeScript
interface FormSubmission {
  csrfToken: string;
  email: string;
  age: number;
  bio: string;
}

interface ValidationResult {
  isValid: boolean;
  sanitizedBio: string;
  errorMessage?: string;
}

export function validateAndSanitizeForm(
  input: FormSubmission,
  expectedCsrfToken: string
): ValidationResult {
  // 1. Simulating CSRF token verification: hash_equals($sessionToken, $postToken)
  if (input.csrfToken !== expectedCsrfToken) {
    return { isValid: false, sanitizedBio: '', errorMessage: 'CSRF token mismatch' };
  }

  // 2. Simulating filter_var($email, FILTER_VALIDATE_EMAIL)
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(input.email)) {
    return { isValid: false, sanitizedBio: '', errorMessage: 'Invalid email address' };
  }

  // 3. Simulating filter_var($age, FILTER_VALIDATE_INT, ['options' => ['min_range' => 18, 'max_range' => 100]])
  if (input.age < 18 || input.age > 100) {
    return { isValid: false, sanitizedBio: '', errorMessage: 'Age must be between 18 and 100' };
  }

  // 4. Simulating htmlspecialchars($bio, ENT_QUOTES, 'UTF-8')
  const safeBio = input.bio
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  return { isValid: true, sanitizedBio: safeBio };
}

// 2 sample submissions (1 valid, 1 malicious script injection)
const sessionCsrf = 'secure_secret_token_123';

const validPost: FormSubmission = {
  csrfToken: 'secure_secret_token_123',
  email: 'dev@codeshikhon.com',
  age: 26,
  bio: 'PHP backend engineer <enthusiast>'
};

const result = validateAndSanitizeForm(validPost, sessionCsrf);
console.log('Valid Form Accepted:', result.isValid); // true
console.log('Sanitized Bio:', result.sanitizedBio);
// "PHP backend engineer &lt;enthusiast&gt;"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Superglobals',
          def: {
            en: 'Built-in auto-global arrays ($_GET, $_POST, $_SERVER, $_SESSION, $_FILES) available throughout all execution scopes.',
            bn: 'বিল্ট-ইন সার্বজনীন অ্যারেসমূহ যা কোনো গ্লোবাল ঘোষণা ছাড়াই স্ক্রিপ্টের যেকোনো প্রান্ত থেকে অ্যাক্সেস করা যায়।'
          }
        },
        {
          term: 'Cross-Site Scripting',
          def: {
            en: 'Security vulnerability where malicious client-side scripts are injected into web pages viewed by other users.',
            bn: 'নিরাপত্তা ত্রুটি যার মাধ্যমে ওয়েবসাইটে ক্ষতিকর জাভাস্ক্রিপ্ট কোড প্রবেশ করিয়ে সাধারণ ব্যবহারকারীদের ব্রাউজারে চালানো হয়।'
          }
        },
        {
          term: 'Cross-Site Request Forgery',
          def: {
            en: 'Exploit tricking an authenticated victim into executing unwanted actions on a trusted web application.',
            bn: 'সাইবার আক্রমণ যেখানে কোনো লগইন থাকা ব্যবহারকারীকে ধোঁকা দিয়ে তার অজান্তেই ক্ষতিকর অনুরোধ পাঠাতে বাধ্য করা হয়।'
          }
        },
        {
          term: 'Input Sanitization',
          def: {
            en: 'Systematic cleaning, type enforcement, and escaping of untrusted external input before processing or rendering.',
            bn: 'বহিরাগত তথ্যের ক্ষতিকর অংশ ছেঁকে নিরাপদ ও ব্যবহারের উপযোগী করে তোলার নিয়মমাফিক প্রক্রিয়া।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'htmlspecialchars-xss-defense-ex1',
      kind: 'mcq',
      topic: 'xss-prevention-htmlspecialchars',
      question: {
        en: 'Why is htmlspecialchars($input, ENT_QUOTES, "UTF-8") necessary when rendering user comments in HTML templates?',
        bn: 'এইচটিএমএল টেমপ্লেটে ব্যবহারকারীর মন্তব্য দেখানোর সময় htmlspecialchars($input, ENT_QUOTES, "UTF-8") ব্যবহার করা কেন আবশ্যক?'
      },
      options: [
        {
          en: 'It converts dangerous characters like <, >, and quotes into inert HTML entities, preventing Cross-Site Scripting (XSS) script injection',
          bn: 'এটি <, > এবং কোটেশনের মতো বিপজ্জনক চিহ্নগুলোকে নিরীহ এইচটিএমএল এন্টিটিতে রূপান্তর করে ক্ষতিকর XSS স্ক্রিপ্ট চালানো বন্ধ করে'
        },
        {
          en: 'It translates the user comments into German',
          bn: 'এটি ব্যবহারকারীর মন্তব্যকে জার্মান ভাষায় অনুবাদ করে'
        },
        {
          en: 'It deletes all punctuation marks from the user sentence',
          bn: 'এটি ব্যবহারকারীর বাক্য থেকে সমস্ত যতিচিহ্ন মুছে ফেলে'
        },
        {
          en: 'It increases the CSS font size of the text by 5 pixels',
          bn: 'এটি টেক্সটের সিএসএস ফন্ট সাইজ ৫ পিক্সেল বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Converting <script> tags to harmless text entities neutralizes browser script execution.',
        bn: '<script> ট্যাগকে অক্ষতিকর টেক্সটে পরিণত করলে ব্রাউজার তা কোড হিসেবে না চালিয়ে সাধারণ লেখা হিসেবে দেখায়।'
      },
      explanation: {
        en: 'Without entity escaping, malicious JavaScript submitted by attackers executes inside victim browsers.',
        bn: 'এস্কেপ না করলে আক্রমণকারীর পাঠানো জাভাস্ক্রিপ্ট সাধারণ ভিজিটরের ব্রাউজারে চালু হয়ে বিপদ ঘটাতে পারে।'
      }
    },
    {
      id: 'csrf-token-session-verification-ex2',
      kind: 'mcq',
      topic: 'csrf-protection-mechanism',
      question: {
        en: 'How does a hidden CSRF token embedded inside an HTML form protect against forged form submissions?',
        bn: 'এইচটিএমএল ফর্মের ভেতরে লুকানো CSRF টোকেন কীভাবে জাল ফর্ম সাবমিশন থেকে অ্যাপ্লিকেশনকে সুরক্ষিত রাখে?'
      },
      options: [
        {
          en: 'The server verifies that the secret token submitted with $_POST exactly matches the token stored in the user authenticated $_SESSION',
          bn: 'সার্ভার পরীক্ষা করে দেখে যে $_POST এ আসা গোপন টোকেনটি ব্যবহারকারীর $_SESSION এ সংরক্ষিত টোকেনের সাথে হুবহু মিলেছে কি না'
        },
        {
          en: 'It disables all mouse clicks on malicious external websites',
          bn: 'এটি ক্ষতিকর বাহ্যিক ওয়েবসাইটে মাউসের সমস্ত ক্লিক নিষ্ক্রিয় করে দেয়'
        },
        {
          en: 'It generates a 6-digit SMS code sent to the user phone',
          bn: 'এটি ব্যবহারকারীর ফোনে একটি ৬ ডিজিটের এসএমএস কোড পাঠায়'
        },
        {
          en: 'It converts the web server database into an Excel spreadsheet',
          bn: 'এটি সার্ভারের ডেটাবেসকে এক্সেল ফাইলে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Attackers on foreign domains cannot read the victim session token due to same-origin policies.',
        bn: 'অন্য ওয়েবসাইটের হ্যাকাররা ব্যবহারকারীর সেশনে সংরক্ষিত টোকেন পড়তে পারে না।'
      },
      explanation: {
        en: 'A unique unpredictable session token proves that the form submission originated from the legitimate application page.',
        bn: 'অপ্রত্যাশিত গোপন টোকেন নিশ্চিত করে যে ফর্মটি আসলেই আপনার ওয়েবসাইট থেকেই পাঠানো হয়েছে।'
      }
    },
    {
      id: 'get-vs-post-idempotency-ex3',
      kind: 'mcq',
      topic: 'http-method-selection',
      question: {
        en: 'Why should state-changing actions like deleting an account or processing a payment never use $_GET?',
        bn: 'অ্যাকাউন্ট ডিলিট বা পেমেন্ট সম্পন্ন করার মতো ডেটা পরিবর্তনকারী কাজে কখনো $_GET ব্যবহার করা উচিত নয় কেন?'
      },
      options: [
        {
          en: 'GET requests are visible in browser history, logged by proxies, pre-fetched by web crawlers, and can be triggered unintentionally via simple image links',
          bn: 'GET রিকোয়েস্ট ব্রাউজার হিস্ট্রি ও প্রক্সিতে সংরক্ষিত থাকে, সার্চ ক্রলার দ্বারা আগে থেকেই ফেচ হতে পারে এবং ছবির লিংকের মাধ্যমে অনিচ্ছাকৃতভাবে চালু হতে পারে'
        },
        {
          en: 'GET requests only work on Linux operating systems',
          bn: 'GET রিকোয়েস্ট কেবল লিনাক্স অপারেটিং সিস্টেমেই কাজ করে'
        },
        {
          en: 'GET requests cannot carry more than 2 bytes of data',
          bn: 'GET রিকোয়েস্টে ২ বাইটের বেশি তথ্য পাঠানো যায় না'
        },
        {
          en: 'The PHP interpreter crashes whenever $_GET is referenced',
          bn: '$_GET ব্যবহার করলেই পিএইচপি ইন্টারপ্রেটার সাথে সাথে ক্র্যাশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'HTTP specifications require GET to be idempotent and safe; mutations belong exclusively in POST.',
        bn: 'HTTP প্রোটোকল অনুযায়ী GET কেবল তথ্য দেখার জন্য নিরাপদ; কোনো তথ্য বদলাতে অবশ্যই POST ব্যবহার করতে হবে।'
      },
      explanation: {
        en: 'Using GET for destructive actions creates severe vulnerabilities where web crawlers or image embeds trigger destructive actions.',
        bn: 'GET দিয়ে ডিলিট বা পরিবর্তনের কাজ করলে ওয়েব ক্রলার বা সাধারণ ছবি লিংকের মাধ্যমেই ব্যবহারকারীর ক্ষতি হয়ে যেতে পারে।'
      }
    },
    {
      id: 'file-upload-mime-type-security-ex4',
      kind: 'mcq',
      topic: 'file-upload-validation',
      question: {
        en: 'Why is trusting $_FILES["doc"]["type"] dangerous when processing file uploads in PHP?',
        bn: 'পিএইচপিতে ফাইল আপলোডের সময় $_FILES["doc"]["type"] কে অন্ধভাবে বিশ্বাস করা বিপজ্জনক কেন?'
      },
      options: [
        {
          en: 'The MIME type in $_FILES is sent by the client browser header and can be effortlessly spoofed by an attacker disguising an executable script as an image',
          bn: '$_FILES এর ভেতরের MIME টাইপ ব্রাউজার হেডার থেকে আসে এবং আক্রমণকারী সহজেই ক্ষতিকর স্ক্রিপ্টকে ছবির নাম দিয়ে ধোঁকা দিতে পারে'
        },
        {
          en: 'PHP deletes any file whose type is longer than 5 letters',
          bn: 'পিএইচপি এমন যেকোনো ফাইল মুছে ফেলে যার টাইপ ৫ অক্ষরের চেয়ে বড়'
        },
        {
          en: 'All uploaded files are automatically converted into PDF documents',
          bn: 'আপলোড করা সমস্ত ফাইল স্বয়ংক্রিয়ভাবে পিডিএফ ফাইলে পরিণত হয়'
        },
        {
          en: 'File uploads require an active Bluetooth connection',
          bn: 'ফাইল আপলোডের জন্য ব্লুটুথ কানেকশন সক্রিয় থাকা বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Always inspect the actual file contents on the server using finfo_file rather than trusting client headers.',
        bn: 'ক্লায়েন্টের কথায় বিশ্বাস না করে সার্ভারে finfo_file দিয়ে ফাইলের আসল ভেতরের গঠন পরীক্ষা করুন।'
      },
      explanation: {
        en: 'Client-reported MIME types and extensions are completely untrusted; inspect binary signatures using finfo_file.',
        bn: 'ক্লায়েন্টের পাঠানো হেডার বিশ্বাসযোগ্য নয়; সার্ভার প্রান্তে ফাইলের বাইনারি সিগনেচার যাচাই করতে finfo_file ব্যবহার করা উচিত।'
      }
    }
  ],
  quiz: {
    id: 'quiz-forms-and-superglobals',
    title: {
      en: 'PHP Forms, Superglobals & Input Security Quiz',
      bn: 'পিএইচপি ফর্ম, সুপারগ্লোবাল এবং ইনপুট সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'quiz-filter-var-email-validation',
        kind: 'mcq',
        topic: 'filter-var-email-flags',
        question: {
          en: 'What does filter_var("invalid-email", FILTER_VALIDATE_EMAIL) evaluate to?',
          bn: 'filter_var("invalid-email", FILTER_VALIDATE_EMAIL) এক্সপ্রেশনের মান কী হয়?'
        },
        options: [
          {
            en: 'false, indicating that the string failed email RFC syntax validation',
            bn: 'false, যা নির্দেশ করে যে প্রদত্ত স্ট্রিংটি বৈধ ইমেইল সিনট্যাক্স শর্ত পূরণ করতে ব্যর্থ হয়েছে'
          },
          {
            en: 'true, because any string is considered an email',
            bn: 'true, কারণ যেকোনো টেক্সটকেই পিএইচপি ইমেইল হিসেবে গণ্য করে'
          },
          {
            en: 'A fatal unhandled exception',
            bn: 'একটি মারাত্মক ফ্যাটাল এক্সেপশন'
          },
          {
            en: 'The integer number 0',
            bn: 'পূর্ণসংখ্যা 0'
          }
        ],
        answer: 0,
        hint: {
          en: 'filter_var returns false on validation failure, or the validated value on success.',
          bn: 'ভ্যালিডেশন ব্যর্থ হলে filter_var false রিটার্ন করে, অন্যথায় সঠিক মানটি ফেরত দেয়।'
        },
        explanation: {
          en: 'filter_var validates input against official RFC email specifications, returning false if invalid.',
          bn: 'সঠিক ইমেইল ফরম্যাট না থাকলে filter_var ফাংশনটি সরাসরি false ফেরত দেয়।'
        }
      },
      {
        id: 'quiz-timing-attack-hash-equals',
        kind: 'mcq',
        topic: 'timing-attacks-hash-equals',
        question: {
          en: 'Why should developers use hash_equals($a, $b) instead of standard equality ($a === $b) when comparing security tokens?',
          bn: 'নিরাপত্তা টোকেন তুলনা করার সময় সাধারণ সমতার ($a === $b) বদলে hash_equals($a, $b) ব্যবহার করা উচিত কেন?'
        },
        options: [
          {
            en: 'hash_equals executes in constant time, preventing timing attacks where attackers guess tokens character-by-character based on CPU comparison latency',
            bn: 'hash_equals সর্বদা সমান সময় নেয় (constant time), যার ফলে প্রসেসরের তুলনার সময় মেপে হ্যাকারদের অক্ষর অনুমান করার টাইমিং আক্রমণ প্রতিরোধ হয়'
          },
          {
            en: 'hash_equals is 100 times faster than the === operator',
            bn: 'hash_equals সাধারণ === অপারেটরের চেয়ে 100 গুণ দ্রুত কাজ করে'
          },
          {
            en: 'hash_equals works without needing any computer memory',
            bn: 'hash_equals কোনো কম্পিউটার মেমোরি ছাড়াই কাজ করতে পারে'
          },
          {
            en: 'Standard === comparisons are forbidden in PHP 8',
            bn: 'পিএইচপি ৮ এ সাধারণ === তুলনা সম্পূর্ণ নিষিদ্ধ করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard string comparisons short-circuit on the first mismatched byte, leaking timing clues.',
          bn: 'সাধারণ তুলনা প্রথম অমিল পেলেই থেমে যায়, যা হ্যাকারদের সময় বিশ্লেষণ করে পাসওয়ার্ড বা টোকেন ভাঙতে সাহায্য করে।'
        },
        explanation: {
          en: 'Constant-time comparison with hash_equals eliminates timing side-channel vulnerabilities during cryptographic verification.',
          bn: 'সবসময় একই সময় নেওয়ায় hash_equals ক্রিপ্টোগ্রাফিক টোকেন পরীক্ষার ক্ষেত্রে সবচেয়ে নিরাপদ পদ্ধতি।'
        }
      },
      {
        id: 'quiz-move-uploaded-file-security',
        kind: 'mcq',
        topic: 'move-uploaded-file-checks',
        question: {
          en: 'Why is move_uploaded_file() mandatory when moving uploaded files from temporary storage to permanent directories?',
          bn: 'আপলোড করা ফাইলকে অস্থায়ী ফোল্ডার থেকে স্থায়ী ডিরেক্টরিতে স্থানান্তরের জন্য move_uploaded_file() ব্যবহার করা বাধ্যতামূলক কেন?'
        },
        options: [
          {
            en: 'It verifies internally that the target file was genuinely uploaded via HTTP POST, preventing malicious arbitrary local file overwrite exploits',
            bn: 'এটি অভ্যন্তরীণভাবে নিশ্চিত করে যে ফাইলটি সত্যিই HTTP POST এর মাধ্যমে আপলোড হয়েছে, ফলে সার্ভারের নিজস্ব লোকাল ফাইল প্রতিস্থাপনের আক্রমণ বন্ধ হয়'
          },
          {
            en: 'It compresses image files into zip archives',
            bn: 'এটি ছবির ফাইলকে জিপ ফাইলে কম্প্রেস করে'
          },
          {
            en: 'It renames the file into an MP3 music track',
            bn: 'এটি ফাইলটির নাম পরিবর্তন করে একটি এমপি৩ গানে রূপান্তর করে'
          },
          {
            en: 'It prevents the file from being downloaded over WiFi',
            bn: 'এটি ওয়াইফাই দিয়ে ফাইল ডাউনলোড হতে বাধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'move_uploaded_file confirms the file is an authentic uploaded payload from the current request.',
          bn: 'move_uploaded_file নিশ্চিত করে ফাইলটি বর্তমান অনুরোধের মাধ্যমেই আপলোড হওয়া আসল ফাইল।'
        },
        explanation: {
          en: 'Standard copy() or rename() functions do not verify upload origin, leaving servers open to arbitrary file manipulation.',
          bn: 'সাধারণ copy() বা rename() ফাইল আপলোডের সত্যতা যাচাই করে না, যা সার্ভারে মারাত্মক নিরাপত্তার ঝুঁকি তৈরি করতে পারে।'
        }
      },
      {
        id: 'quiz-server-request-method-branching',
        kind: 'mcq',
        topic: 'server-superglobal-request-method',
        question: {
          en: 'Which superglobal variable correctly identifies whether an incoming HTTP request is a GET, POST, or DELETE request?',
          bn: 'কোন সুপারগ্লোবাল ভেরিয়েবলের মাধ্যমে আগত HTTP অনুরোধটি GET, POST নাকি DELETE তা সঠিকভাবে জানা যায়?'
        },
        options: [
          { en: '$_SERVER["REQUEST_METHOD"]', bn: '$_SERVER["REQUEST_METHOD"]' },
          { en: '$_GET["METHOD"]', bn: '$_GET["METHOD"]' },
          { en: '$_POST["HTTP_VERB"]', bn: '$_POST["HTTP_VERB"]' },
          { en: '$_ENV["PROTOCOL_ACTION"]', bn: '$_ENV["PROTOCOL_ACTION"]' }
        ],
        answer: 0,
        hint: {
          en: 'The $_SERVER array holds environment and request metadata provided by the web server.',
          bn: '$_SERVER অ্যারেতে ওয়েব সার্ভার থেকে প্রাপ্ত যাবতীয় পরিবেশ ও রিকোয়েস্ট মেটাডেটা সংরক্ষিত থাকে।'
        },
        explanation: {
          en: '$_SERVER["REQUEST_METHOD"] returns the uppercase HTTP verb used by the client for request routing.',
          bn: '$_SERVER["REQUEST_METHOD"] ক্লায়েন্টের ব্যবহৃত বড় হাতের অক্ষরের HTTP মেথড (যেমন GET বা POST) প্রদান করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'functions-and-the-composer',
    title: {
      en: 'Functions, Namespaces, Modern Packaging & Composer',
      bn: 'ফাংশন, নেমস্পেস, আধুনিক প্যাকেজিং এবং কম্পোজার'
    }
  }
};
