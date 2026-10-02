import type { Lesson } from '../../../lib/types';

export const ValidationAndTheRequestLesson: Lesson = {
  slug: 'validation-and-the-request',
  tech: 'laravel',
  title: {
    en: 'Form Requests, Validation Rules & Error Handling',
    bn: 'ফর্ম রিকোয়েস্ট, ভ্যালিডেশন রুল এবং এরর হ্যান্ডলিং'
  },
  summary: {
    en: 'Master robust request validation in Laravel using inline checks and dedicated Form Request classes. Learn essential rules (required, email, unique, min:18), the bail modifier, Blade error bags, and automated JSON 422 responses.',
    bn: 'লারাভেলে শক্তিশালী রিকোয়েস্ট যাচাইকরণ আয়ত্ত করুন: ইনলাইন ও ডেডিকেটেড ফর্ম রিকোয়েস্ট ক্লাস। সাধারণ ও কাস্টম রুল (required, email, unique, min:18), বেইল স্টপ রুল, ব্লেডে এরর প্রদর্শন এবং স্বয়ংক্রিয় JSON 422 রেসপন্স।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'validation-architecture-heading',
      text: {
        en: 'The Validation Architecture: Controller Validation and Form Request Classes',
        bn: 'ভ্যালিডেশন আর্কিটেকচার: কন্ট্রোলার ভ্যালিডেশন এবং ফর্ম রিকোয়েস্ট ক্লাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel includes an automated validation engine that protects applications from corrupt or malicious input. Simple endpoints can call $request->validate() directly in controller methods. Complex enterprise workflows encapsulate validation logic inside dedicated Form Request classes generated via artisan make:request. Form Requests execute an authorize() check before evaluating the rules() array. If validation fails, Laravel intercepts execution automatically: returning a redirect with flashed errors for web browsers, or an HTTP 422 JSON response for API clients.',
        bn: 'লারাভেল একটি স্বয়ংক্রিয় ভ্যালিডেশন ইঞ্জিন সরবরাহ করে যা অ্যাপ্লিকেশনকে ভুল বা ক্ষতিকর ইনপুট থেকে সম্পূর্ণ সুরক্ষিত রাখে। ছোট এন্ডপয়েন্টে কন্ট্রোলারের ভেতর সরাসরি $request->validate() চালানো যায়। বড় প্রজেক্টে artisan make:request দিয়ে ডেডিকেটেড ফর্ম রিকোয়েস্ট ক্লাস ব্যবহার করা হয়। ফর্ম রিকোয়েস্ট প্রথমে authorize() দিয়ে অনুমতি পরীক্ষা করে এবং এরপর rules() এর শর্তগুলো যাচাই করে। ভ্যালিডেশন ব্যর্থ হলে লারাভেল ওয়েব ব্রাউজারের জন্য এরর সহ রিডাইরেক্ট করে অথবা এপিআই ক্লায়েন্টকে HTTP 422 JSON রেসপন্স পাঠায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Form Request execution pipeline showing authorization, bail rule short-circuiting, and bifurcated error delivery (Web vs API).',
        bn: 'চিত্র ১: ফর্ম রিকোয়েস্টের কার্যপ্রণালী যা অনুমতি যাচাই, বেইল রুল এবং ওয়েব বনাম এপিআই এরর প্রদর্শনের ৫ টি ধাপ দেখায়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">LARAVEL FORM REQUEST VALIDATION PIPELINE</text>

  <!-- Step 1: Ingestion -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Request Ingress</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">POST /register</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Incoming Payload:</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" />
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace">email: "invalid"</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="8" font-family="monospace">age: 15</text>
    <text x="15" y="140" fill="#cbd5e1" font-size="8" font-family="monospace">pass: "123"</text>
    <text x="12" y="195" fill="#38bdf8" font-size="9" font-family="sans-serif">Untrusted Input</text>
  </g>

  <!-- Step 2: Authorize -->
  <g transform="translate(195, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#059669" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Authorize</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">authorize()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">User Permissions:</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="110" fill="#34d399" font-size="8" font-family="monospace">return true;</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">If false =&gt;</text>
    <text x="15" y="145" fill="#f87171" font-size="8" font-family="monospace">HTTP 403 Forbidden</text>
    <text x="12" y="195" fill="#34d399" font-size="9" font-family="sans-serif">Access Confirmed</text>
  </g>

  <!-- Step 3: Rules & Bail -->
  <g transform="translate(360, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Rules &amp; Bail</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">bail Rule</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Field checks:</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="108" fill="#fbbf24" font-size="8" font-family="monospace">email: bail|email</text>
    <text x="15" y="122" fill="#cbd5e1" font-size="8" font-family="monospace">age: min:18</text>
    <text x="15" y="138" fill="#f87171" font-size="8" font-family="monospace">Stops on error</text>
    <text x="12" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif">Schema Validated</text>
  </g>

  <!-- Step 4: Web Redirect -->
  <g transform="translate(525, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#7c3aed" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Web Client</text>
    <text x="12" y="55" fill="#c084fc" font-size="10" font-family="monospace">Redirect Back</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Browser UX:</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" stroke="#8b5cf6" />
    <text x="15" y="110" fill="#c084fc" font-size="8" font-family="monospace">Flashes $errors</text>
    <text x="15" y="128" fill="#cbd5e1" font-size="8" font-family="monospace">Retains old() input</text>
    <text x="15" y="145" fill="#34d399" font-size="8" font-family="monospace">@error('email')</text>
    <text x="12" y="195" fill="#c084fc" font-size="9" font-family="sans-serif">Session Flash Bag</text>
  </g>

  <!-- Step 5: API Egress -->
  <g transform="translate(690, 65)">
    <rect width="125" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="125" height="30" rx="8" fill="#db2777" />
    <text x="62" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. API Client</text>
    <text x="10" y="55" fill="#f472b6" font-size="10" font-family="monospace">HTTP 422</text>
    <text x="10" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">JSON Response:</text>
    <rect x="10" y="90" width="105" height="65" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="12" y="110" fill="#f472b6" font-size="8" font-family="monospace">"message": ...</text>
    <text x="12" y="125" fill="#cbd5e1" font-size="8" font-family="monospace">"errors": {</text>
    <text x="15" y="140" fill="#f472b6" font-size="8" font-family="monospace">  "email": [...]</text>
    <text x="10" y="195" fill="#f472b6" font-size="9" font-family="sans-serif">Clean JSON Map</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'bail-and-blade-errors-heading',
      text: {
        en: 'The bail Stop Rule, Preserving old() Input, and Custom Rules',
        bn: 'বেইল স্টপ রুল, old() ইনপুট সংরক্ষণ এবং কাস্টম ভ্যালিডেশন রুল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'By default, Laravel runs all validation rules on a field even after the first rule fails. Prepending the bail rule (such as "email" => "required|bail|email|unique:users") halts validation for that attribute on the very first failure, avoiding expensive database queries if the format itself is invalid. In Blade views, errors are displayed gracefully using the @error("email") directive, while old("email") repopulates input boxes so users never re-type data. Custom validation logic is authored via artisan make:rule Uppercase.',
        bn: 'ডিফল্টভাবে লারাভেল কোনো ফিল্ডের প্রথম শর্ত ব্যর্থ হলেও বাকি সব শর্ত পরীক্ষা করা চালিয়ে যায়। শর্তের শুরুতে bail রুল যোগ করলে (যেমন "email" => "required|bail|email|unique:users") প্রথম ভুল পাওয়ার সাথে সাথেই ওই ফিল্ডের পরবর্তী পরীক্ষা বন্ধ হয়ে যায়, যার ফলে ভুল ফরম্যাটের জন্য অযথা ডেটাবেসে খোঁজাখুঁজি করতে হয় না। ব্লেড ভিউতে @error("email") ডিরেক্টিভ দিয়ে সুন্দরভাবে ভুলের বার্তা দেখানো যায় এবং old("email") ব্যবহার করে পূর্বের লেখা ইনপুট বক্সে ধরে রাখা হয় যাতে ব্যবহারকারীকে বারবার টাইপ করতে না হয়। কাস্টম শর্ত তৈরির জন্য artisan make:rule কমান্ড ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Laravel Form Request validator with bail short-circuiting and bifurcated HTTP 422 JSON error responses.',
        bn: 'লারাভেল ফর্ম রিকোয়েস্ট ভ্যালিডেটর এবং HTTP 422 JSON এরর রেসপন্সের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Laravel Form Request and Bail validation logic in TypeScript
interface RegistrationInput {
  email: string;
  age: number;
  password?: string;
}

interface ValidationReport {
  isValid: boolean;
  statusCode: number;
  errors: Record<string, string[]>;
}

export class FormRequestSimulator {
  public validate(input: RegistrationInput): ValidationReport {
    const errors: Record<string, string[]> = {};

    // 1. Validate email with simulated 'required|bail|email'
    if (!input.email || input.email.trim() === '') {
      errors['email'] = ['The email field is required.'];
    } else if (!input.email.includes('@')) {
      // Bail stops here without checking database uniqueness!
      errors['email'] = ['The email field must be a valid email address.'];
    }

    // 2. Validate age with 'required|integer|min:18|max:100'
    if (input.age === undefined || input.age === null) {
      errors['age'] = ['The age field is required.'];
    } else if (input.age < 18) {
      errors['age'] = ['The age field must be at least 18.'];
    } else if (input.age > 100) {
      errors['age'] = ['The age field must not be greater than 100.'];
    }

    // 3. Validate password with 'required|min:8'
    if (!input.password || input.password.length < 8) {
      errors['password'] = ['The password field must be at least 8 characters.'];
    }

    const isValid = Object.keys(errors).length === 0;
    return {
      isValid,
      statusCode: isValid ? 200 : 422,
      errors
    };
  }
}

// 2 submissions tested
const validator = new FormRequestSimulator();

// Submission 1: Invalid input triggers 422 with bail
const invalidSubmission: RegistrationInput = {
  email: 'not-an-email',
  age: 15,
  password: 'short'
};

const report1 = validator.validate(invalidSubmission);
console.log('Submission 1 Status:', report1.statusCode); // 422
console.log('Validation Errors Map:', JSON.stringify(report1.errors));

// Submission 2: Clean valid input passes
const validSubmission: RegistrationInput = {
  email: 'dev@codeshikhon.com',
  age: 25,
  password: 'StrongSecretPassword2026'
};

const report2 = validator.validate(validSubmission);
console.log('Submission 2 Status:', report2.statusCode); // 200
console.log('Submission 2 Success:', report2.isValid); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Form Requests',
          def: {
            en: 'Dedicated request classes encapsulating authorization checks and complex validation rule sets away from controllers.',
            bn: 'ডেডিকেটেড ক্লাস যা কন্ট্রোলার থেকে আলাদা করে পারমিশন ও জটিল ভ্যালিডেশন নিয়মগুলোকে সুন্দরভাবে সংজ্ঞায়িত করে।'
          }
        },
        {
          term: 'Bail Rule',
          def: {
            en: 'Validation modifier instructing Laravel to cease validating a specific attribute immediately upon its first failure.',
            bn: 'ভ্যালিডেশন মডিফায়ার যা কোনো নির্দিষ্ট ফিল্ডের প্রথম শর্ত ব্যর্থ হওয়ার সাথে সাথে পরবর্তী পরীক্ষাগুলো বন্ধ করে দেয়।'
          }
        },
        {
          term: 'Error Bag',
          def: {
            en: 'Session-persisted MessageBag instance automatically injected into all Blade views via the $errors variable.',
            bn: 'মেসেজব্যাগ অবজেক্ট যা ভ্যালিডেশন ভুলের তথ্য ধারণ করে স্বয়ংক্রিয়ভাবে সমস্ত ব্লেড ভিউতে $errors আকারে পৌঁছে যায়।'
          }
        },
        {
          term: 'HTTP 422 Response',
          def: {
            en: 'Standard RESTful status code (Unprocessable Content) returned by Laravel when incoming API request payloads fail validation.',
            bn: 'আদর্শ রেসপন্স কোড যা এপিআই রিকোয়েস্টের তথ্য যাচাইকরণে ব্যর্থ হলে লারাভেল স্বয়ংক্রিয়ভাবে ক্লায়েন্টকে প্রদান করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bail-rule-database-saving-ex1',
      kind: 'mcq',
      topic: 'bail-rule-database-optimization',
      question: {
        en: 'Why is adding the bail rule to "email" => "required|bail|email|unique:users" recommended for database performance?',
        bn: '"email" => "required|bail|email|unique:users" শর্তে bail রুল যুক্ত করা ডেটাবেস পারফরম্যান্সের জন্য কেন উপকারী?'
      },
      options: [
        {
          en: 'If the user submits invalid email syntax, validation stops immediately without running the expensive unique:users database SQL query',
          bn: 'ব্যবহারকারী ভুল ফরম্যাটের ইমেইল দিলে প্রথম ধাপে আটকে যায়, ফলে ডেটাবেসে অপ্রয়োজনীয় unique:users কোয়েরি চালানোর দরকার হয় না'
        },
        {
          en: 'It drops the users table if an invalid email is submitted',
          bn: 'ভুল ইমেইল দিলে এটি users টেবিলটি মুছে ফেলে'
        },
        {
          en: 'It sends an SMS text message to the user phone',
          bn: 'এটি ব্যবহারকারীর ফোনে একটি এসএমএস পাঠায়'
        },
        {
          en: 'Bail doubles the server processing speed',
          bn: 'Bail সার্ভারের প্রসেসিং গতি দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bail short-circuits evaluation on the first failure, avoiding subsequent expensive checks.',
        bn: 'Bail প্রথম ত্রুটি পেলেই থেমে যায় এবং পরবর্তী জটিল ডেটাবেস পরীক্ষা বন্ধ রাখে।'
      },
      explanation: {
        en: 'Without bail, Laravel runs all rules including unique database checks; bail avoids wasteful SQL queries on malformed inputs.',
        bn: 'Bail না থাকলে ভুল ফরম্যাট হলেও ডেটাবেস চেক চলত; Bail সেই অপচয় রোধ করে ডেটাবেসকে চাপমুক্ত রাখে।'
      }
    },
    {
      id: 'old-helper-form-repopulation-ex2',
      kind: 'mcq',
      topic: 'old-helper-form-ux',
      question: {
        en: 'What user experience improvement does value="{{ old(\'email\') }}" provide in Blade forms?',
        bn: 'ব্লেড ফর্মে value="{{ old(\'email\') }}" ব্যবহার করলে ব্যবহারকারীর অভিজ্ঞতায় কোন উন্নতি ঘটে?'
      },
      options: [
        {
          en: 'When a form submission fails validation and redirects back, it repopulates the input box with the previously typed text so the user does not have to re-enter it',
          bn: 'ভ্যালিডেশন ব্যর্থ হয়ে পেজ রিডাইরেক্ট হলেও এটি ইনপুট বক্সে ব্যবহারকারীর পূর্বের লেখা ধরে রাখে, ফলে আবার নতুন করে টাইপ করতে হয় না'
        },
        {
          en: 'It fills the input box with the user date of birth',
          bn: 'এটি ইনপুট বক্সে ব্যবহারকারীর জন্ম তারিখ বসিয়ে দেয়'
        },
        {
          en: 'It translates the input text into Bengali automatically',
          bn: 'এটি ইনপুটের টেক্সট স্বয়ংক্রিয়ভাবে বাংলায় অনুবাদ করে'
        },
        {
          en: 'It encrypts the input field using 256-bit keys',
          bn: 'এটি ইনপুট ফিল্ডকে ২৫৬-বিট কি দিয়ে এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The old() helper pulls flashed input data out of the session from the previous request.',
        bn: 'old() হেল্পার পূর্ববর্তী অনুরোধ থেকে সেশনে সংরক্ষিত ইনপুট তথ্য পুনরায় উদ্ধার করে।'
      },
      explanation: {
        en: 'old() restores previous user input, preventing user frustration during form validation corrections.',
        bn: 'old() আগের তথ্য ফিরিয়ে এনে ব্যবহারকারীকে পুনরায় টাইপ করার ঝামেলা থেকে মুক্তি দেয়।'
      }
    },
    {
      id: 'form-request-authorize-method-ex3',
      kind: 'mcq',
      topic: 'form-request-authorize-failure',
      question: {
        en: 'What HTTP response does Laravel return automatically if the authorize() method of a Form Request returns false?',
        bn: 'একটি ফর্ম রিকোয়েস্টের authorize() মেথড যদি false রিটার্ন করে, তবে লারাভেল স্বয়ংক্রিয়ভাবে কোন HTTP রেসপন্স প্রদান করে?'
      },
      options: [
        {
          en: 'HTTP 403 Forbidden, immediately blocking unauthorized users before any validation rules are evaluated',
          bn: 'HTTP 403 Forbidden, যার ফলে কোনো ভ্যালিডেশন চলার আগেই অননুমোদিত ব্যবহারকারীকে আটকে দেওয়া হয়'
        },
        {
          en: 'HTTP 200 OK with an empty array',
          bn: 'একটি ফাঁকা অ্যারে সহ HTTP 200 OK'
        },
        {
          en: 'HTTP 500 Internal Server Crash',
          bn: 'সার্ভার ক্র্যাশ সংক্রান্ত HTTP 500 এরর'
        },
        {
          en: 'It deletes the user account from the database',
          bn: 'এটি ডেটাবেস থেকে ব্যবহারকারীর অ্যাকাউন্ট মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Returning false from authorize() triggers an AuthorizationException, rendering an HTTP 403 status.',
        bn: 'authorize() থেকে false পাঠালে লারাভেল সাথে সাথে একটি 403 Forbidden এরর জারি করে।'
      },
      explanation: {
        en: 'Form Requests enforce authorization first; returning false halts the request with an HTTP 403 response.',
        bn: 'ফর্ম রিকোয়েস্ট আগে অনুমতি পরীক্ষা করে; অনুমতি না থাকলে এটি 403 স্ট্যাটাস কোড দিয়ে অনুরোধ থামিয়ে দেয়।'
      }
    },
    {
      id: 'api-validation-failure-422-ex4',
      kind: 'mcq',
      topic: 'api-validation-failure-status',
      question: {
        en: 'When an incoming API request with an "Accept: application/json" header fails validation, what status code is emitted?',
        bn: '"Accept: application/json" হেডারযুক্ত কোনো এপিআই রিকোয়েস্টের ভ্যালিডেশন ব্যর্থ হলে কোন স্ট্যাটাস কোড প্রদান করা হয়?'
      },
      options: [
        {
          en: 'HTTP 422 Unprocessable Content, accompanied by a JSON object detailing error messages for each invalid attribute',
          bn: 'HTTP 422 Unprocessable Content, যার সাথে প্রতিটি ভুলের বিস্তারিত বার্তা সম্বলিত একটি JSON অবজেক্ট থাকে'
        },
        {
          en: 'HTTP 200 Success',
          bn: 'সফলতা সূচক HTTP 200'
        },
        {
          en: 'HTTP 404 Not Found',
          bn: 'অনুপস্থিতি সূচক HTTP 404'
        },
        {
          en: 'HTTP 301 Permanent Redirect',
          bn: 'স্থায়ী রিডাইরেক্ট সূচক HTTP 301'
        }
      ],
      answer: 0,
      hint: {
        en: 'REST APIs communicate schema validation failures using HTTP 422 rather than browser redirects.',
        bn: 'এপিআই ভ্যালিডেশন ব্যর্থতার জন্য রিডাইরেক্ট না করে সরাসরি HTTP 422 কোড ব্যবহার করে।'
      },
      explanation: {
        en: 'Laravel recognizes API requests and emits a 422 response with a structured JSON error dictionary.',
        bn: 'লারাভেল এপিআই অনুরোধ শনাক্ত করে স্বয়ংক্রিয়ভাবে 422 স্ট্যাটাস সহ সুশৃঙ্খল JSON এরর পাঠায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-validation-and-the-request',
    title: {
      en: 'Laravel Validation & Form Requests Quiz',
      bn: 'লারাভেল ভ্যালিডেশন এবং ফর্ম রিকোয়েস্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-blade-error-directive-syntax',
        kind: 'mcq',
        topic: 'blade-error-directive-message',
        question: {
          en: 'How do you check for and display a validation error message specifically for the "password" field in Blade?',
          bn: 'ব্লেড টেমপ্লেটে "password" ফিল্ডের ভ্যালিডেশন এরর আছে কি না তা পরীক্ষা করে বার্তা দেখানোর সঠিক সিনট্যাক্স কোনটি?'
        },
        options: [
          {
            en: '@error("password") <span class="text-danger">{{ $message }}</span> @enderror',
            bn: '@error("password") <span class="text-danger">{{ $message }}</span> @enderror'
          },
          {
            en: '@if(error) <p>Password Wrong</p> @endif',
            bn: '@if(error) <p>Password Wrong</p> @endif'
          },
          {
            en: '<span class="error"><?php print $error; ?></span>',
            bn: '<span class="error"><?php print $error; ?></span>'
          },
          {
            en: '@checkError("password", $message)',
            bn: '@checkError("password", $message)'
          }
        ],
        answer: 0,
        hint: {
          en: 'The @error directive automatically unpacks the first error message into the local $message variable.',
          bn: '@error ডিরেক্টিভ স্বয়ংক্রিয়ভাবে ভুলের প্রথম বার্তাটিকে $message ভেরিয়েবলে সহজলভ্য করে।'
        },
        explanation: {
          en: '@error cleanly scopes error rendering to the designated field and scopes the localized $message variable.',
          bn: '@error নির্দিষ্ট ফিল্ডের জন্য এরর মেসেজ রেন্ডার করার কাজকে অত্যন্ত সহজ ও সংক্ষিপ্ত করে তোলে।'
        }
      },
      {
        id: 'quiz-unique-rule-ignore-current-id',
        kind: 'mcq',
        topic: 'unique-rule-ignore-record-update',
        question: {
          en: 'When updating an existing user profile, how do you prevent the unique:users,email rule from failing on their own email?',
          bn: 'বিদ্যমান কোনো ব্যবহারকারীর প্রোফাইল আপডেটের সময় unique:users,email নিয়মটি যেন তার নিজস্ব ইমেইলে আটকে না যায়, তা কীভাবে নিশ্চিত করবেন?'
        },
        options: [
          {
            en: 'Use Rule::unique("users")->ignore($user->id) to exclude the current record ID from the uniqueness database query',
            bn: 'Rule::unique("users")->ignore($user->id) ব্যবহার করে বর্তমান রেকর্ডের আইডিটিকে ডেটাবেস ইউনিকনেস পরীক্ষা থেকে বাদ দিয়ে'
          },
          {
            en: 'Delete the user email from the database before updating',
            bn: 'আপডেট করার আগেই ডেটাবেস থেকে ইউজারের ইমেইল মুছে ফেলে'
          },
          {
            en: 'Change the user email to a random string of numbers',
            bn: 'ইউজারের ইমেইল পরিবর্তন করে যেকোনো দৈব সংখ্যা বসিয়ে'
          },
          {
            en: 'Laravel cannot update records that have unique constraints',
            bn: 'ইউনিক শর্তযুক্ত কোনো রেকর্ড লারাভেলে আপডেট করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'The ignore() method instructs the unique SQL query to exclude the target record ID.',
          bn: 'ignore() মেথড এসকিউএল কুয়েরিকে নির্দেশ দেয় নির্দিষ্ট আইডি বাদে বাকিদের মধ্যে ইউনিকনেস খুঁজতে।'
        },
        explanation: {
          en: 'Rule::unique()->ignore($user->id) appends AND id != :id to the validation query, allowing users to save without changing email.',
          bn: 'ignore($user->id) বর্তমান আইডি বাদ দিয়ে পরীক্ষা চালায়, ফলে নিজের ইমেইল অপরিবর্তিত রেখেই প্রোফাইল সেভ করা যায়।'
        }
      },
      {
        id: 'quiz-validated-method-form-request',
        kind: 'mcq',
        topic: 'request-validated-method-security',
        question: {
          en: 'Why is $request->validated() safer to pass into User::create() than $request->all()?',
          bn: 'User::create() মেথডে $request->all() দেওয়ার চেয়ে $request->validated() দেওয়া কেন অনেক বেশি নিরাপদ?'
        },
        options: [
          {
            en: 'It returns an array containing strictly and exclusively the attributes that were explicitly validated by the rules, discarding unexpected malicious fields',
            bn: 'এটি শুধুমাত্র সেই ফিল্ডগুলোই ফেরত দেয় যা ভ্যালিডেশন নিয়মের দ্বারা পরীক্ষিত ও অনুমোদিত হয়েছে, বাকি সব অনাকাঙ্ক্ষিত ফিল্ড ফেলে দেয়'
          },
          {
            en: 'It encrypts the array using AES-128',
            bn: 'এটি অ্যারেটিকে AES-128 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It reduces the size of the database by 50 percent',
            bn: 'এটি ডেটাবেসের আকার ৫০ শতাংশ ছোট করে ফেলে'
          },
          {
            en: 'There is zero difference between validated() and all()',
            bn: 'validated() এবং all() এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'validated() extracts only fields specified in rules(), filtering out rogue extra inputs.',
          bn: 'validated() কেবল ভ্যালিডেশন নিয়মে থাকা ফিল্ডগুলো গ্রহণ করে বাড়তি বা ক্ষতিকর ইনপুট ছেঁকে ফেলে দেয়।'
        },
        explanation: {
          en: 'Using validated() prevents mass-assignment leakage by filtering out unvalidated attributes submitted by callers.',
          bn: 'validated() ব্যবহার করলে ব্যবহারকারীর পাঠানো অতিরিক্ত কোনো ফিল্ড ডেটাবেসে প্রবেশের সুযোগ পায় না।'
        }
      },
      {
        id: 'quiz-sometimes-validation-rule',
        kind: 'mcq',
        topic: 'sometimes-rule-conditional-validation',
        question: {
          en: 'What does the "sometimes" validation rule (e.g. "password" => "sometimes|min:8") perform in Laravel?',
          bn: 'লারাভেলে "sometimes" ভ্যালিডেশন রুল (যেমন "password" => "sometimes|min:8") কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It executes the remaining validation rules on the attribute only if that attribute is actually present in the request payload',
            bn: 'এটি সংশ্লিষ্ট ফিল্ডটির ওপর অন্যান্য ভ্যালিডেশন শর্ত প্রয়োগ করে কেবল তখনই, যদি ফিল্ডটি রিকোয়েস্টে সত্যিই উপস্থিত থাকে'
          },
          {
            en: 'It runs validation on alternating days of the week',
            bn: 'এটি সপ্তাহের একদিন পর পর ভ্যালিডেশন চালায়'
          },
          {
            en: 'It deletes the password field from the HTML view',
            bn: 'এটি এইচটিএমএল ভিউ থেকে পাসওয়ার্ড ফিল্ডটি মুছে ফেলে'
          },
          {
            en: 'It allows passwords with fewer than 2 characters',
            bn: 'এটি ২ অক্ষরের কম পাসওয়ার্ড দেওয়ার সুযোগ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The sometimes rule conditionally triggers validation only when the field exists in the input.',
          bn: 'sometimes নিয়মটি নিশ্চিত করে যে ফিল্ডটি ফর্মে পাঠানো হলেই কেবল বাকি নিয়মগুলো যাচাই করা হবে।'
        },
        explanation: {
          en: '"sometimes" is ideal for optional PATCH requests where a user may update only select fields.',
          bn: '"sometimes" মূলত অপশনাল বা আংশিক আপডেটের ক্ষেত্রে অপরিহার্য যেখানে সব ফিল্ড পাঠানো বাধ্যতামূলক নয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'guards-and-the-auth',
    title: {
      en: 'Authentication, Gates, Policies & Sanctum API Tokens',
      bn: 'প্রমাণীকরণ, গেট, পলিসি এবং স্যাঙ্কটাম এপিআই টোকেন'
    }
  }
};
