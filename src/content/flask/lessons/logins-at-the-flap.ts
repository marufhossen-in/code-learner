import type { Lesson } from '../../../lib/types';

export const LoginsAtTheFlapLesson: Lesson = {
  slug: 'logins-at-the-flap',
  tech: 'flask',
  title: {
    en: 'Authentication & Session Security — Werkzeug Hashing, Tokens & Flask-Login',
    bn: 'অথেনটিকেশন ও সেশন সুরক্ষা — Werkzeug হ্যাশিং, টোকেন ও ফ্লাস্ক-লগইন'
  },
  summary: {
    en: 'Securing user identities requires cryptographic password hashing, authenticated session lifecycles, and route gating. In this lesson, you will master Werkzeug password hashing (generate_password_hash and check_password_hash), Flask-Login integration (@login_required and current_user), and session cookie hardening flags.',
    bn: 'ব্যবহারকারীর পরিচয় সুরক্ষিত রাখতে ক্রিপ্টোগ্রাফিক পাসওয়ার্ড হ্যাশিং, অনুমোদিত সেশন ব্যবস্থাপনা এবং রুট সুরক্ষা অপরিহার্য। এই পাঠে আপনি Werkzeug পাসওয়ার্ড হ্যাশিং (generate_password_hash ও check_password_hash), Flask-Login ইন্টিগ্রেশন (@login_required ও current_user) এবং সেশন কুকির সিকিউরিটি ফ্ল্যাগ গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'authentication-architecture-overview',
      text: {
        en: 'The Flask Authentication and Session Architecture',
        bn: 'ফ্লাস্ক অথেনটিকেশন ও সেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you authenticate users in your Flask application, credentials must never be stored as readable plain text. Werkzeug uses salted one-way cryptographic algorithms like Scrypt to hash passwords. Once verified, Flask-Login manages the session lifecycle across HTTP requests using cryptographically signed browser cookies.',
        bn: 'যখন আপনি ফ্লাস্ক অ্যাপ্লিকেশনে ব্যবহারকারীদের অথেনটিকেট করেন, তখন পাসওয়ার্ড কখনোই সাধারণ প্লেইন টেক্সট হিসেবে ডাটাবেজে রাখা যাবে না। Werkzeug স্বয়ংক্রিয় সল্ট সহ Scrypt-এর মতো আধুনিক ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে। পাসওয়ার্ড নিশ্চিত হওয়ার পর Flask-Login ক্রিপ্টোগ্রাফিক্যালি স্বাক্ষরিত ব্রাউজার কুকি ব্যবহারের মাধ্যমে প্রতিটি রিকোয়েস্টে সেশন পরিচালনা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'generate_password_hash()',
          def: {
            en: 'The Werkzeug cryptographic function generating a salted, one-way hash (e.g. scrypt:32768:8:1$...) for safe storage in the database.',
            bn: 'Werkzeug-এর একটি ক্রিপ্টোগ্রাফিক ফাংশন যা ডাটাবেজে নিরাপদে সংরক্ষণের জন্য সল্টযুক্ত ওয়ান-ওয়ে পাসওয়ার্ড হ্যাশ (যেমন scrypt:32768:8:1$...) তৈরি করে।'
          }
        },
        {
          term: 'check_password_hash()',
          def: {
            en: 'The constant-time comparison function verifying whether a user-submitted plaintext password matches the stored cryptographic hash.',
            bn: 'কনস্ট্যান্ট-টাইম তুলনা ফাংশন যা ব্যবহারকারীর পাঠানো প্লেইন টেক্সট পাসওয়ার্ডের সাথে ডাটাবেজের হ্যাশ মিলিয়ে যাচাই করে।'
          }
        },
        {
          term: 'Flask-Login (LoginManager)',
          def: {
            en: 'The standard extension managing user session state, providing the user_loader callback, current_user proxy, and @login_required decorator.',
            bn: 'স্ট্যান্ডার্ড এক্সটেনশন যা ইউজার সেশন পরিচালনা করে এবং user_loader, current_user এবং @login_required ডেকোরেটর সরবরাহ করে।'
          }
        },
        {
          term: 'Cookie Security Flags',
          def: {
            en: 'HTTP flags (HttpOnly, Secure, SameSite) applied to session cookies to neutralize Cross-Site Scripting (XSS) and Request Forgery (CSRF).',
            bn: 'সেশন কুকিতে প্রয়োগ করা নিরাপত্তা ফ্ল্যাগ (HttpOnly, Secure, SameSite) যা টোকেন চুরি ও ক্রস-সাইট আক্রমণ প্রতিহত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'session-cookie-flags-matrix',
      text: {
        en: 'Essential Flask Session Cookie Security Flags Matrix',
        bn: 'অপরিহার্য ফ্লাস্ক সেশন কুকি সিকিউরিটি ফ্ল্যাগ ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Configuration Key', bn: 'কনফিগারেশন কী' },
        { en: 'Recommended Value', bn: 'প্রস্তাবিত মান' },
        { en: 'Security Protection Mechanism', bn: 'নিরাপত্তা সুরক্ষা ভূমিকা' }
      ],
      rows: [
        [
          { en: 'SESSION_COOKIE_HTTPONLY', bn: 'SESSION_COOKIE_HTTPONLY' },
          { en: 'True', bn: 'True' },
          { en: 'Blocks client-side JavaScript (document.cookie) from reading the session token, defeating XSS cookie theft', bn: 'জাভাস্ক্রিপ্ট (document.cookie) দিয়ে সেশন কুকি পড়া বন্ধ করে, ফলে এক্সএসএস টোকেন চুরি রোধ হয়' }
        ],
        [
          { en: 'SESSION_COOKIE_SECURE', bn: 'SESSION_COOKIE_SECURE' },
          { en: 'True', bn: 'True' },
          { en: 'Ensures the browser only transmits the cookie over encrypted HTTPS connections, preventing Wi-Fi packet sniffing', bn: 'ব্রাউজারকে নির্দেশ দেয় যাতে কুকি কেবল এনক্রিপ্টেড এইচটিটিপিএস মাধ্যমেই পাঠানো হয়' }
        ],
        [
          { en: 'SESSION_COOKIE_SAMESITE', bn: 'SESSION_COOKIE_SAMESITE' },
          { en: '"Lax" (or "Strict")', bn: '"Lax" (বা "Strict")' },
          { en: 'Restricts cross-site request cookie transmission, mitigating Cross-Site Request Forgery (CSRF) exploits', bn: 'অন্য সাইট থেকে পাঠানো রিকোয়েস্টে কুকি পাঠানো বন্ধ করে সিএসআরএফ আক্রমণ প্রতিহত করে' }
        ],
        [
          { en: 'PERMANENT_SESSION_LIFETIME', bn: 'PERMANENT_SESSION_LIFETIME' },
          { en: 'timedelta(days=7)', bn: 'timedelta(days=7)' },
          { en: 'Expires stale session cookies automatically, reducing the window of opportunity for stolen session hijacking', bn: 'নির্দিষ্ট সময় পর পুরোনো সেশন অকেজো করে হাইজ্যাকিংয়ের ঝুঁকি কমায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'hashing-and-login-code',
      text: {
        en: 'Working Password Hashing and Login Gate Simulation',
        bn: 'কার্যকরী পাসওয়ার্ড হ্যাশিং ও লগইন গেট সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Werkzeug Salted Password Hashing and Authentication
function mockGeneratePasswordHash(password) {
  // Simulating random salt generation and one-way hashing
  const salt = 'salt481';
  let hashValue = 0;
  const combined = salt + password;
  for (let i = 0; i < combined.length; i++) {
    hashValue = ((hashValue << 5) - hashValue + combined.charCodeAt(i)) | 0;
  }
  return \`scrypt:32768:8:1$\${salt}$\${Math.abs(hashValue).toString(16)}\`;
}

function mockCheckPasswordHash(storedHash, plainPassword) {
  const parts = storedHash.split('$');
  const salt = parts[1];
  let hashValue = 0;
  const combined = salt + plainPassword;
  for (let i = 0; i < combined.length; i++) {
    hashValue = ((hashValue << 5) - hashValue + combined.charCodeAt(i)) | 0;
  }
  const candidate = Math.abs(hashValue).toString(16);
  return parts[2] === candidate;
}

// 1. Simulating user registration
const plaintextPass = 'CorrectBatteryHorse!9';
const hashedPassword = mockGeneratePasswordHash(plaintextPass);

// 2. Simulating login verification
const correctAttempt = mockCheckPasswordHash(hashedPassword, 'CorrectBatteryHorse!9');
const wrongAttempt = mockCheckPasswordHash(hashedPassword, 'wrongPassword123');

console.log('Generated hash starts with scrypt:', hashedPassword.startsWith('scrypt:'));
// -> Generated hash starts with scrypt: true
console.log('Valid password verification result:', correctAttempt);
// -> Valid password verification result: true
console.log('Invalid password verification result:', wrongAttempt);
// -> Invalid password verification result: false`,
      caption: {
        en: 'Werkzeug scrypt hashing producing verified true for valid password and false for invalid',
        bn: 'Werkzeug স্ক্রিপ্ট হ্যাশিং সঠিক পাসওয়ার্ডের জন্য true এবং ভুল পাসওয়ার্ডে false দিচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'login-required-and-flask-login',
      text: {
        en: 'Protecting Endpoints with Flask-Login Decorators',
        bn: 'ফ্লাস্ক-লগইন ডেকোরেটর দিয়ে এন্ডপয়েন্ট সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Flask-Login exposes the @login_required decorator to guard private routes. When an unauthenticated visitor attempts to navigate to a protected endpoint, Flask-Login intercepts the request. It flashes an alert message and redirects the user to the login route, preserving the original destination in the next query parameter.',
        bn: 'ব্যক্তিগত রুট সুরক্ষায় Flask-Login-এর @login_required ডেকোরেটর ব্যবহৃত হয়। কোনো অননুমোদিত ভিজিটর সুরক্ষিত পেজে ঢোকার চেষ্টা করলে Flask-Login রিকোয়েস্ট আটকে দেয়। এটি একটি অ্যালার্ট মেসেজ ফ্লাশ করে ব্যবহারকারীকে লগইন পেজে রিডাইরেক্ট করে এবং next প্যারামিটারে আগের ঠিকানা সংরক্ষণ করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Never Plaintext Passwords: Always hash passwords with generate_password_hash() before persisting to database columns.',
          bn: '১. প্লেইন পাসওয়ার্ড নয়: ডাটাবেজে সেভ করার পূর্বে সর্বদা generate_password_hash() দিয়ে পাসওয়ার্ড হ্যাশ করে নিন।'
        },
        {
          en: '2. Enforce HttpOnly: Set SESSION_COOKIE_HTTPONLY=True to block malicious XSS scripts from accessing session tokens.',
          bn: '২. HttpOnly সক্রিয় রাখুন: ক্ষতিকর জাভাস্ক্রিপ্ট স্ক্রিপ্ট থেকে কুকি চুরি ঠেকাতে SESSION_COOKIE_HTTPONLY=True রাখুন।'
        },
        {
          en: '3. Sanitize "next" Redirects: Verify that the "next" redirect parameter is a safe relative URL to prevent open redirect vulnerabilities.',
          bn: '৩. রিডাইরেক্ট ইউআরএল ফিল্টার: ওপেন রিডাইরেক্ট আক্রমণ প্রতিরোধ করতে "next" প্যারামিটার একটি অভ্যন্তরীণ রিলেটিভ পাথ কিনা তা যাচাই করুন।'
        },
        {
          en: '4. Rate Limit Login Attempts: Use Flask-Limiter to restrict login submissions to 5 attempts per minute per IP address.',
          bn: '৪. লগইন রেট-লিমিট: ব্রুট-ফোর্স আক্রমণ প্রতিরোধে Flask-Limiter দিয়ে প্রতি মিনিটে ৫ বারের বেশি চেষ্টার সুযোগ বন্ধ করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-log-ex1',
      kind: 'mcq',
      topic: 'werkzeug password hashing mechanism',
      question: {
        en: 'Why is comparing passwords with "werkzeug.security.check_password_hash(hash, password)" secure against timing attacks?',
        bn: '"werkzeug.security.check_password_hash(hash, password)" দিয়ে পাসওয়ার্ড যাচাই করা কেন টাইমিং আক্রমণের বিরুদ্ধে সুরক্ষিত?',
      },
      options: [
        {
          en: 'It uses a constant-time comparison algorithm (hmac.compare_digest) so the verification time remains identical regardless of how many initial characters match, preventing attackers from measuring response microsecond differences',
          bn: 'এটি কনস্ট্যান্ট-টাইম তুলনা (hmac.compare_digest) পদ্ধতি ব্যবহার করে, ফলে মিল থাকা অক্ষরের সংখ্যার ওপর সময়ের তারতম্য ঘটে না এবং টাইমিং আক্রমণ প্রতিরোধ হয়'
        },
        {
          en: 'It deletes the database table after every comparison',
          bn: 'এটি প্রতিটি তুলনার পর ডাটাবেজ টেবিল মুছে ফেলে'
        },
        {
          en: 'It sends the password to a remote cloud verification server',
          bn: 'এটি পাসওয়ার্ডটি যাচাইয়ের জন্য রিমোট ক্লাউড সার্ভারে পাঠায়'
        },
        {
          en: 'Timing attacks are impossible on web servers',
          bn: 'ওয়েব সার্ভারে টাইমিং আক্রমণ কখনো সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Constant-time comparison ensures identical execution time regardless of character match.',
        bn: 'কনস্ট্যান্ট-টাইম তুলনার কারণে ইনপুট ঠিক হোক বা ভুল, পরীক্ষা শেষ হতে সর্বদা সমান সময় লাগে।'
      },
      explanation: {
        en: 'Standard string comparisons exit early on the first mismatched character, leaking timing clues. check_password_hash uses constant-time string comparison to neutralize timing attacks.',
        bn: 'সাধারণ স্ট্রিং মিলানোর সময় প্রথম অমিল পেলেই লুপ থেমে যায় যা হ্যাকারদের সময় মাপার সুযোগ দেয়। কনস্ট্যান্ট-টাইম পদ্ধতি সম্পূর্ণ স্ট্রিং পরীক্ষা করে আক্রমণ প্রতিহত করে।'
      }
    },
    {
      id: 'fl-log-ex2',
      kind: 'mcq',
      topic: 'http only cookie flag protection',
      question: {
        en: 'What security vulnerability does setting "SESSION_COOKIE_HTTPONLY = True" in Flask protect against?',
        bn: 'ফ্লাস্কে "SESSION_COOKIE_HTTPONLY = True" কনফিগার করলে কোন নিরাপত্তা দুর্বলতা থেকে সুরক্ষা পাওয়া যায়?'
      },
      options: [
        {
          en: 'Cross-Site Scripting (XSS) session theft: it instructs the browser that the cookie cannot be read or accessed by client-side JavaScript (document.cookie)',
          bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) সেশন চুরি: এটি ব্রাউজারকে নির্দেশ দেয় যেন কোনো ক্লায়েন্ট জাভাস্ক্রিপ্ট (document.cookie) এই কুকি পড়তে বা এক্সেস করতে না পারে'
        },
        {
          en: 'SQL Injection: it prevents malicious SQL commands in form fields',
          bn: 'এসকিউএল ইনজেকশন: এটি ফর্মের ভেতর ক্ষতিকর এসকিউএল কোড আটকাতে সাহায্য করে'
        },
        {
          en: 'Buffer overflow attacks in the C compiler',
          bn: 'সি কম্পাইলারের বাফার ওভারফ্লো আক্রমণ'
        },
        {
          en: 'Hardware overheating of the server CPU',
          bn: 'সার্ভারের সিপিইউ অতিরিক্ত গরম হওয়া প্রতিরোধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'HttpOnly prevents client scripts from accessing session tokens.',
        bn: 'HttpOnly ক্লায়েন্টের ক্ষতিকর স্ক্রিপ্ট দিয়ে সেশন টোকেন পড়া সম্পূর্ণ বন্ধ করে।'
      },
      explanation: {
        en: 'If an application suffers from an XSS flaw, attackers use JavaScript to steal document.cookie. HttpOnly prevents JavaScript from reading the cookie entirely.',
        bn: 'অ্যাপে এক্সএসএস দুর্বলতা থাকলে আক্রমণকারী জাভাস্ক্রিপ্ট দিয়ে কুকি চুরি করে। HttpOnly থাকলে ব্রাউজার জাভাস্ক্রিপ্টকে কুকি পড়তে দেয় না, ফলে অ্যাকাউন্ট সুরক্ষিত থাকে।'
      }
    },
    {
      id: 'fl-log-ex3',
      kind: 'mcq',
      topic: 'flask login user loader callback responsibility',
      question: {
        en: 'What is the responsibility of the "@login_manager.user_loader" callback function in Flask-Login?',
        bn: 'Flask-Login-এ "@login_manager.user_loader" কলব্যাক ফাংশনের মূল দায়িত্ব কী?'
      },
      options: [
        {
          en: 'Given a user ID string stored in the active session cookie, it queries the database and returns the corresponding User model object (or None if missing)',
          bn: 'সেশন কুকিতে থাকা ইউজার আইডি গ্রহণ করে ডাটাবেজ থেকে সংশ্লিষ্ট User মডেল অবজেক্টটি খুঁজে ফেরত দেওয়া (না পেলে None)'
        },
        {
          en: 'It encrypts the HTML template file before rendering',
          bn: 'এটি রেন্ডার করার আগে এইচটিএমএল টেমপ্লেট এনক্রিপ্ট করে'
        },
        {
          en: 'It generates a random username for guest visitors',
          bn: 'এটি অতিথি ব্যবহারকারীদের জন্য একটি কাল্পনিক ইউজারনেম তৈরি করে'
        },
        {
          en: 'It downloads profile pictures from external social networks',
          bn: 'এটি বাহ্যিক সোশ্যাল নেটওয়ার্ক থেকে প্রোফাইল ছবি ডাউনলোড করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The user_loader reloads the user object from the user ID stored in the session.',
        bn: 'user_loader সেশনে থাকা আইডি দিয়ে ডাটাবেজ থেকে আসল ইউজার অবজেক্ট রিলোড করে।'
      },
      explanation: {
        en: 'Flask-Login only stores the user\'s ID in the session. On each subsequent request, user_loader fetches the full User instance and binds it to current_user.',
        bn: 'Flask-Login সেশনে কেবল আইডি জমা রাখে। প্রতিটি রিকোয়েস্টে user_loader সেই আইডি দিয়ে পুরো ইউজার অবজেক্ট এনে current_user-এ বসিয়ে দেয়।'
      }
    },
    {
      id: 'fl-log-ex4',
      kind: 'mcq',
      topic: 'open redirect vulnerability in login forms',
      question: {
        en: 'Why must developers validate the "request.args.get(\'next\')" redirect parameter after user login?',
        bn: 'ইউজার লগইনের পর ডেভেলপারদের কেন "request.args.get(\'next\')" রিডাইরেক্ট প্যারামিটারটি যাচাই করা আবশ্যক?'
      },
      options: [
        {
          en: 'To prevent Open Redirect attacks: an attacker could construct a phishing link "?next=https://evil-site.com" tricking authenticated users into redirecting to an external malicious website',
          bn: 'ওপেন রিডাইরেক্ট আক্রমণ প্রতিরোধে: আক্রমণকারী "?next=https://evil-site.com" দিয়ে ফিশিং লিংক বানাতে পারে যা লগইনের পর ব্যবহারকারীকে ক্ষতিকর সাইটে নিয়ে যাবে'
        },
        {
          en: 'Because Flask crashes if URLs have more than 10 characters',
          bn: 'কারণ ইউআরএলে ১০ অক্ষরের বেশি থাকলে ফ্লাস্ক ক্র্যাশ করে'
        },
        {
          en: 'To verify that the user has sufficient available disk space',
          bn: 'ব্যবহারকারীর হার্ডডিস্কে পর্যাপ্ত জায়গা আছে কিনা তা দেখতে'
        },
        {
          en: 'The next parameter is encrypted with SHA-512',
          bn: 'next প্যারামিটারটি SHA-512 দিয়ে এনক্রিপ্ট করা থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unvalidated redirect targets expose users to external phishing sites.',
        bn: 'রিডাইরেক্ট ঠিকানা ফিল্টার না করলে ব্যবহারকারীকে নকল ফিশিং সাইটে পাঠিয়ে দেওয়া সম্ভব হয়।'
      },
      explanation: {
        en: 'Attackers exploit unvalidated "next" parameters to send users to fraudulent phishing pages. Developers must ensure the target URL is relative (netloc is empty) using url_parse.',
        bn: 'যাচাই না করা next প্যারামিটার দিয়ে হ্যাকাররা নকল লগইন পেজে রিডাইরেক্ট করে তথ্য হাতিয়ে নিতে পারে। তাই ইউআরএলটি লোকাল ও নিরাপদ কিনা তা যাচাই করা জরুরি।'
      }
    }
  ],
  quiz: {
    id: 'logins-at-the-flap-quiz',
    title: {
      en: 'Flask Authentication & Session Security Quiz',
      bn: 'ফ্লাস্ক অথেনটিকেশন ও সেশন সুরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'q-login-required-redirect-behavior',
        kind: 'mcq',
        topic: 'login_required decorator unauthenticated handling',
        question: {
          en: 'When an unauthenticated user attempts to visit an endpoint protected with @login_required, what sequence of actions does Flask-Login take?',
          bn: 'কোনো অননুমোদিত ব্যবহারকারী @login_required দিয়ে সুরক্ষিত পেজে যাওয়ার চেষ্টা করলে Flask-Login কোন পদক্ষেপগুলো গ্রহণ করে?'
        },
        options: [
          {
            en: 'It intercepts the request, flashes a message configured via login_manager.login_message, and redirects the browser to login_manager.login_view with the target path saved in the "next" query argument',
            bn: 'এটি রিকোয়েস্ট আটকে একটি বার্তা ফ্লাশ করে এবং টার্গেট পাথটি "next" কোয়েরি প্যারামিটারে রেখে ব্রাউজারকে login_view রুটে রিডাইরেক্ট করে'
          },
          {
            en: 'It drops the database connection and displays a blank screen',
            bn: 'এটি ডাটাবেজ কানেকশন কেটে দিয়ে খালি সাদা স্ক্রিন দেখায়'
          },
          {
            en: 'It permanently bans the visitor IP address from the network',
            bn: 'এটি নেটওয়ার্ক থেকে ভিজিটরের আইপি অ্যাড্রেস স্থায়ীভাবে ব্যান করে'
          },
          {
            en: 'It generates a guest account with superuser administrative rights',
            bn: 'এটি সুপারইউজার ক্ষমতাসম্পন্ন একটি গেস্ট অ্যাকাউন্ট বানিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Flask-Login flashes an alert and redirects to the configured login endpoint.',
          bn: 'Flask-Login একটি নোটিফিকেশন দিয়ে ব্যবহারকারীকে লগইন পেজে পাঠিয়ে দেয়।'
        },
        explanation: {
          en: 'Flask-Login handles unauthorized access smoothly: it flashes the configured login message and redirects to the login view while storing the original target in request.args["next"].',
          bn: 'অনুমোদনহীন রিকোয়েস্ট এলে Flask-Login সুন্দরভাবে ব্যবহারকারীকে লগইন পেজে পাঠায় এবং আগের গন্তব্য next প্যারামিটারে সংরক্ষণ করে রাখে।'
        }
      },
      {
        id: 'q-session-cookie-samesite-flags',
        kind: 'mcq',
        topic: 'cookie samesite attribute values and csrf protection',
        question: {
          en: 'What is the practical distinction between SESSION_COOKIE_SAMESITE = "Lax" and "Strict" in modern web browsers?',
          bn: 'আধুনিক ওয়েব ব্রাউজারে SESSION_COOKIE_SAMESITE = "Lax" এবং "Strict"-এর মধ্যে বাস্তব পার্থক্য কী?'
        },
        options: [
          {
            en: '"Lax" sends the session cookie on safe top-level cross-site navigations (e.g. following a link from an external search engine), while "Strict" blocks the cookie on all cross-site requests including direct inbound links',
            bn: '"Lax" নিরাপদ বাহ্যিক লিংকে ক্লিক করে এলে কুকি পাঠায় (যেমন সার্চ ইঞ্জিন থেকে লিংকে যাওয়া), আর "Strict" যেকোনো বাহ্যিক লিঙ্ক সহ সব ক্রস-সাইট রিকোয়েস্টে কুকি পাঠানো পুরোপুরি ব্লক করে'
          },
          {
            en: '"Strict" allows any website to read user cookies using JavaScript',
            bn: '"Strict" যেকোনো ওয়েবসাইটকে জাভাস্ক্রিপ্ট দিয়ে কুকি পড়তে দেয়'
          },
          {
            en: '"Lax" disables HTTPS encryption on cookies',
            bn: '"Lax" কুকির ওপর থেকে এইচটিটিপিএস এনক্রিপশন বন্ধ করে দেয়'
          },
          {
            en: 'There is no difference between Lax and Strict',
            bn: 'Lax এবং Strict-এর মাঝে কোনো ধরনের পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lax permits incoming GET links from external sites; Strict blocks cookies even on incoming links.',
          bn: 'Lax অন্য সাইট থেকে সাধারণ ক্লিকে কুকি পাঠাতে দেয়; Strict যেকোনো ক্রস-সাইট ক্লিকেও কুকি বাদ রাখে।'
        },
        explanation: {
          en: 'SameSite=Lax provides a great balance of CSRF defense and user convenience, sending cookies on top-level GET navigations. SameSite=Strict blocks cookies on cross-site clicks, forcing re-authentication.',
          bn: 'Lax সিএসআরএফ প্রতিরোধ ও সুবিধার চমৎকার সমন্বয় করে, কারণ এটি অন্য সাইট থেকে আসলেও লিঙ্ক ঠিক রাখে। Strict অত্যন্ত কঠোর এবং বাহ্যিক ক্লিকেও কুকি পাঠায় না।'
        }
      },
      {
        id: 'q-rate-limiting-brute-force',
        kind: 'mcq',
        topic: 'rate limiting endpoints with flask limiter',
        question: {
          en: 'How does Flask-Limiter defend login endpoints against credential stuffing and automated dictionary attacks?',
          bn: 'Flask-Limiter কীভাবে লগইন এন্ডপয়েন্টকে ক্রেডেনশিয়াল স্টাফিং ও স্বয়ংক্রিয় ডিকশনারি আক্রমণ থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'It tracks request frequencies per client IP (or username) in Redis or memory, returning an HTTP 429 Too Many Requests response if threshold limits (e.g. 5 requests per minute) are exceeded',
            bn: 'এটি মেমরি বা রেডিসে ক্লায়েন্ট আইপির রিকোয়েস্ট সংখ্যা হিসাব রাখে এবং নির্ধারিত সীমা (যেমন মিনিটে ৫ বার) ছাড়ালে এইচটিটিপি ৪২৯ Too Many Requests রেসপন্স পাঠায়'
          },
          {
            en: 'It deletes user accounts after 3 incorrect password attempts',
            bn: 'এটি ৩ বার ভুল পাসওয়ার্ড দিলে ব্যবহারকারীর অ্যাকাউন্ট মুছে দেয়'
          },
          {
            en: 'It shuts down the web server to prevent hardware damage',
            bn: 'এটি সার্ভারের ক্ষতি এড়াতে পুরো ওয়েব সার্ভার বন্ধ করে দেয়'
          },
          {
            en: 'It converts password hashes into random symmetric encryption keys',
            bn: 'এটি পাসওয়ার্ড হ্যাশগুলোকে র্যান্ডম এনক্রিপশন কিতে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rate limiting throttles excessive requests and returns HTTP 429.',
          bn: 'রেট-লিমিটিং অতিরিক্ত রিকোয়েস্টের গতি থামিয়ে দেয় এবং ৪২৯ স্ট্যাটাস পাঠায়।'
        },
        explanation: {
          en: 'Flask-Limiter decorates view functions with limits (e.g. @limiter.limit("5/minute")). Exceeding this rate immediately returns HTTP 429 Too Many Requests, neutralizing brute-force scripts.',
          bn: 'Flask-Limiter ভিউতে নির্দিষ্ট সীমা (@limiter.limit("5/minute")) বসায়। এর বেশি চেষ্টা করলে সার্ভার ৪২৯ রেসপন্স দিয়ে আক্রমণকারী বটকে থামিয়ে দেয়।'
        }
      },
      {
        id: 'q-current-user-proxy-flask-login',
        kind: 'mcq',
        topic: 'current_user proxy behavior in templates and views',
        question: {
          en: 'What does the "current_user" proxy object represent when a user has not logged in (anonymous visitor)?',
          bn: 'কোনো ব্যবহারকারী লগইন না করা অবস্থায় (অতিথি ভিজিটর) "current_user" প্রক্সি অবজেক্টটি কী উপস্থাপন করে?'
        },
        options: [
          {
            en: 'An AnonymousUserMixin instance, where current_user.is_authenticated evaluates to False and current_user.is_anonymous evaluates to True',
            bn: 'একটি AnonymousUserMixin অবজেক্ট, যেখানে current_user.is_authenticated-এর মান False এবং current_user.is_anonymous-এর মান True হয়'
          },
          {
            en: 'A Python NoneType that raises an AttributeError when any property is inspected',
            bn: 'একটি পাইথন NoneType যা কোনো প্রোপার্টি দেখতে গেলেই AttributeError দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'The user model record of the primary superuser administrator',
            bn: 'প্রধান সুপারইউজার অ্যাডমিনের আসল ইউজার মডেল রেকর্ড'
          },
          {
            en: 'A random row selected from the SQLite users table',
            bn: 'ডাটাবেজের ইউজার টেবিল থেকে লটারির মতো বেছে নেওয়া একটি রো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Flask-Login uses the Null Object pattern (AnonymousUserMixin) for unauthenticated visitors.',
          bn: 'লগইন না থাকা ভিজিটরদের জন্য Flask-Login একটি বিশেষ AnonymousUserMixin অবজেক্ট ব্যবহার করে।'
        },
        explanation: {
          en: 'Flask-Login provides an AnonymousUserMixin object for logged-out users. This ensures templates can safely check {% if current_user.is_authenticated %} without throwing errors.',
          bn: 'গেস্ট ব্যবহারকারীদের জন্য Flask-Login একটি ডামি অবজেক্ট দেয়। এর ফলে টেমপ্লেটে কোনো এরর ছাড়াই নিরাপদে current_user.is_authenticated পরীক্ষা করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-stall-opens',
    title: {
      en: 'Production & Deployment — Gunicorn WSGI, Nginx & ProxyFix',
      bn: 'প্রোডাকশন ও ডেপ্লয়মেন্ট — ইউনিকর্ন WSGI, Nginx ও ProxyFix'
    }
  }
};
