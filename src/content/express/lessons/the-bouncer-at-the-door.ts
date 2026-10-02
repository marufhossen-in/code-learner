import type { Lesson } from '../../../lib/types';

export const TheBouncerAtTheDoorLesson: Lesson = {
  slug: 'the-bouncer-at-the-door',
  tech: 'express',
  title: {
    en: 'Authentication & Authorization — JWT, Sessions & Role-Based Access Control',
    bn: 'অথেনটিকেশন ও অথরাইজেশন — জেডব্লিউটি, সেশন ও রোল-বেসড অ্যাক্সেস কন্ট্রোল'
  },
  summary: {
    en: 'Securing web applications requires distinguishing between identity verification and permission enforcement. In this lesson, you will master password hashing with bcrypt, stateless JSON Web Token issuance, Bearer token extraction in authentication middleware, and declarative Role-Based Access Control gates.',
    bn: 'ওয়েব অ্যাপ্লিকেশন সুরক্ষিত করার জন্য ব্যবহারকারীর পরিচয় যাচাই এবং কাজের অনুমতি প্রয়োগের মধ্যে স্পষ্ট পার্থক্য তৈরি করা আবশ্যক। এই পাঠে আপনি বিক্রিপ্ট দিয়ে পাসওয়ার্ড হ্যাশিং, স্টেটলেস জেডব্লিউটি টোকেন তৈরি, মিডেলওয়্যারে বেয়ারার টোকেন যাচাই এবং রোল-বেসড অ্যাক্সেস কন্ট্রোল গার্ড বাস্তবায়ন গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'auth-architecture-overview',
      text: {
        en: 'The Security Perimeter Pipeline',
        bn: 'সিকিউরিটি পেরিমিটার পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build multi-user backend services, securing endpoints involves two distinct phases: Authentication (verifying who the user is) and Authorization (verifying whether that authenticated user is permitted to perform the requested operation). In Express, these checks are implemented as composable middleware functions guarding protected route handlers.',
        bn: 'যখন আপনি বহু-ব্যবহারকারী বিশিষ্ট ব্যাকএন্ড সার্ভিস তৈরি করেন, তখন রুট সুরক্ষিত করার দুটি ভিন্ন ধাপ থাকে: অথেনটিকেশন (ব্যবহারকারী কে তা যাচাই করা) এবং অথরাইজেশন (সেই ব্যবহারকারীর কাজটি করার অনুমতি আছে কিনা তা পরীক্ষা করা)। এক্সেপ্রেসে এই সুরক্ষা যাচাইগুলো কম্পোজেবল মিডেলওয়্যার ফাংশন হিসেবে সুরক্ষিত রুটের সামনে বসানো হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Authentication (AuthN)',
          def: {
            en: 'The process of validating a user identity credentials via passwords, magic links, or biometric cryptographic keys.',
            bn: 'পাসওয়ার্ড, ম্যাজিক লিংক বা ক্রিপ্টোগ্রাফিক চাবি দিয়ে কোনো ব্যবহারকারীর পরিচয় নিশ্চিত করার প্রক্রিয়া।'
          }
        },
        {
          term: 'Authorization (AuthZ)',
          def: {
            en: 'The process of verifying whether an authenticated user possesses the role or permission to access a specific resource.',
            bn: 'লগইন করা ব্যবহারকারী কোনো নির্দিষ্ট রিসোর্স দেখা বা পরিবর্তনের অধিকার রাখেন কিনা তা নির্ধারণের প্রক্রিয়া।'
          }
        },
        {
          term: 'JSON Web Token (JWT)',
          def: {
            en: 'A compact, cryptographically signed URL-safe string carrying claims about a user identity, verified without database lookups.',
            bn: 'একটি কম্প্যাক্ট ও ক্রিপ্টোগ্রাফিকভাবে স্বাক্ষরিত স্ট্রিং যা ডাটাবেজ না খুলেই ব্যবহারকারীর পরিচয় বিশ্বস্তভাবে নিশ্চিত করে।'
          }
        },
        {
          term: 'Role-Based Access Control (RBAC)',
          def: {
            en: 'A security model where access permissions are assigned to administrative roles (such as admin, editor, or viewer) rather than individuals.',
            bn: 'একটি নিরাপত্তা ব্যবস্থা যেখানে অনুমতিগুলো সরাসরি ব্যক্তিকে না দিয়ে নির্দিষ্ট রোলে (যেমন অ্যাডমিন, এডিটর) বরাদ্দ করা হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'bcrypt-hashing-rules',
      text: {
        en: 'Async Password Hashing Versus hashSync Trap',
        bn: 'অ্যাসিনক্রোনাস পাসওয়ার্ড হ্যাশিং বনাম hashSync ফাঁদ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Method', bn: 'পদ্ধতি' },
        { en: 'Thread Execution Model', bn: 'থ্রেড এক্সিকিউশন মডেল' },
        { en: 'Impact on Node.js Event Loop', bn: 'নোড.জেএস ইভেন্ট লুপের ওপর প্রভাব' }
      ],
      rows: [
        [
          { en: 'bcrypt.hash(password, 12)', bn: 'bcrypt.hash(password, 12)' },
          { en: 'Offloaded to libuv background thread pool', bn: 'libuv ব্যাকগ্রাউন্ড থ্রেড পুলে পরিচালিত হয়' },
          { en: 'Zero blocking; server continues handling requests', bn: 'সম্পূর্ণ নন-ব্লকিং; সার্ভার অন্যান্য রিকোয়েস্ট চালাতে পারে' }
        ],
        [
          { en: 'bcrypt.hashSync(password, 12)', bn: 'bcrypt.hashSync(password, 12)' },
          { en: 'Blocks main JavaScript execution thread', bn: 'মূল জাভাস্ক্রিপ্ট এক্সিকিউশন থ্রেডকে আটকে দেয়' },
          { en: 'Freezes event loop for 100-300ms, stalling all users', bn: '১০০-৩০০ms পর্যন্ত লুপ আটকে থাকে, সব ব্যবহারকারী থেমে যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'jwt-auth-middleware-code',
      text: {
        en: 'Working JWT Verification and Role Authorization Middleware',
        bn: 'কার্যকরী জেডব্লিউটি ভ্যালিডেশন ও রোল অথরাইজেশন মিডেলওয়্যার'
      }
    },
    {
      type: 'code',
      code: `const express = require('express');
const app = express();

// 1. Simulated JWT signature and decode logic
const JWT_SECRET = 'super-secret-key-42';
function simulateVerifyToken(token) {
  if (token === 'valid-admin-jwt') {
    return { id: 101, username: 'admin_alex', role: 'admin' };
  }
  if (token === 'valid-user-jwt') {
    return { id: 102, username: 'user_bob', role: 'viewer' };
  }
  return null;
}

// 2. Authentication guard (AuthN: Who are you?)
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or malformed Authorization header' });
  }
  const token = authHeader.split(' ')[1];
  const decoded = simulateVerifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
  req.user = decoded;
  next();
};

// 3. Authorization guard factory (AuthZ: Are you allowed?)
const requireRoles = (...allowedRoles) => (req, res, next) => {
  if (!req.user || !allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Forbidden: Insufficient privileges' });
  }
  next();
};

// 4. Secure admin endpoint protected by both guards
app.delete('/api/v1/database', authenticateUser, requireRoles('admin'), (req, res) => {
  res.status(200).json({ status: 'purged', initiatedBy: req.user.username });
});

// Verification simulation
const verifiedUser = simulateVerifyToken('valid-admin-jwt');
console.log('Authenticated user ID:', verifiedUser ? verifiedUser.id : 0);
// -> Authenticated user ID: 101
console.log('User role admin status:', verifiedUser ? verifiedUser.role === 'admin' : false);
// -> User role admin status: true`,
      caption: {
        en: 'Two-stage authentication and RBAC authorization pipeline',
        bn: 'দুই-ধাপের অথেনটিকেশন ও আরবিএসি অথরাইজেশন পাইপলাইন'
      }
    },
    {
      type: 'heading',
      id: 'defense-in-depth-rules',
      text: {
        en: 'Production Authentication Architecture Rules',
        bn: 'প্রোডাকশন অথেনটিকেশন আর্কিটেকচার নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Stateless JWT tokens cannot be revoked by default because the signature remains mathematically valid until expiration. Production systems pair short-lived access tokens (15 minutes) with refresh tokens stored in database session registries, allowing instant administrative revocation.',
        bn: 'স্টেটলেস জেডব্লিউটি টোকেন মেয়াদ শেষ হওয়ার আগে নিজে থেকে বাতিল করা যায় না কারণ ক্রিপ্টোগ্রাফিক স্বাক্ষর ঠিক থাকে। প্রোডাকশন সিস্টেমে অল্প মেয়াদের এক্সেস টোকেন (১৫ মিনিট) ব্যবহার করা হয় এবং ডাটাবেজ সেশনে রিফ্রেশ টোকেন রেখে যেকোনো মুহূর্তে অ্যাকাউন্ট ব্লক করার সুবিধা রাখা হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Identity Before Permission: Always run authenticateUser before requireRoles to ensure req.user exists.',
          bn: '১. অনুমতির আগে পরিচয়: req.user নিশ্চিত করতে requireRoles-এর আগে সর্বদা authenticateUser চালান।'
        },
        {
          en: '2. Asynchronous Hashing: Always call await bcrypt.hash(password, 12). Never block the event loop with bcrypt.hashSync.',
          bn: '২. অ্যাসিনক্রোনাস হ্যাশ: সর্বদা await bcrypt.hash ব্যবহার করুন। hashSync দিয়ে ইভেন্ট লুপ আটকাবেন না।'
        },
        {
          en: '3. Short Expirations: Issue access tokens with 15-minute expirations (expiresIn: "15m") to limit the blast radius of stolen tokens.',
          bn: '৩. স্বল্পমেয়াদী টোকেন: চুরি হওয়া টোকেনের ক্ষতি কমাতে এক্সেস টোকেনের মেয়াদ ১৫ মিনিটে (expiresIn: "15m") সীমিত রাখুন।'
        },
        {
          en: '4. Differentiate 401 and 403: Return 401 when the token is missing or expired; return 403 when the user role is unauthorized.',
          bn: '৪. ৪০১ ও ৪০৩-এর তফাত: টোকেন না থাকলে বা মেয়াদ গেলে ৪০১ দিন; আর ইউজারের রোল না মিললে ৪০৩ দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-auth-ex1',
      kind: 'mcq',
      topic: 'authn vs authz distinction',
      question: {
        en: 'What is the precise architectural distinction between Authentication and Authorization in Express security pipelines?',
        bn: 'এক্সপ্রেস সিকিউরিটি পাইপলাইনে অথেনটিকেশন এবং অথরাইজেশনের মধ্যে সঠিক আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'Authentication verifies who the user is (identity); Authorization determines what actions the verified user is allowed to perform (permissions)',
          bn: 'অথেনটিকেশন যাচাই করে ব্যবহারকারী কে (পরিচয়); অথরাইজেশন নির্ধারণ করে সেই ব্যবহারকারী কোন কাজটি করতে পারবে (অনুমতি)'
        },
        {
          en: 'Authentication is only used for MySQL databases, while Authorization is used for MongoDB',
          bn: 'অথেনটিকেশন কেবল মাইএসকিউএলে ব্যবহৃত হয় আর অথরাইজেশন কেবল মঙ্গোডিবিতে'
        },
        {
          en: 'Authentication checks client IP addresses, while Authorization checks browser versions',
          bn: 'অথেনটিকেশন ক্লায়েন্টের আইপি চেক করে আর অথরাইজেশন ব্রাউজার সংস্করণ'
        },
        {
          en: 'There is no difference; they are synonyms for the same middleware function',
          bn: 'উভয়ের মাঝে কোনো তফাত নেই; এগুলো একই মিডেলওয়্যারের সমার্থক শব্দ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think: AuthN answers "Who are you?", AuthZ answers "May you enter here?".',
        bn: 'মনে রাখুন: AuthN উত্তর দেয় "আপনি কে?", আর AuthZ উত্তর দেয় "আপনার অনুমতি আছে কি?".'
      },
      explanation: {
        en: 'Authentication validates identity credentials. Authorization verifies permissions against user roles before permitting resource modifications.',
        bn: 'অথেনটিকেশন পরিচয় যাচাই করে। আর অথরাইজেশন ইউজারের রোলের ওপর ভিত্তি করে নির্দিষ্ট রিসোর্সে প্রবেশের অধিকার দেয়।'
      }
    },
    {
      id: 'exp-auth-ex2',
      kind: 'mcq',
      topic: 'bcrypt hashsync blocking vulnerability',
      question: {
        en: 'Why is invoking bcrypt.hashSync() or bcrypt.compareSync() considered a severe production antipattern in Node.js?',
        bn: 'নোড.জেএস-এ bcrypt.hashSync() বা compareSync() ব্যবহার করা কেন একটি মারাত্মক প্রোডাকশন ক্ষতিকর অভ্যাস?'
      },
      options: [
        {
          en: 'It blocks the single-threaded Node.js event loop for 100-300ms per call, freezing the entire server and stalling all concurrent users',
          bn: 'এটি প্রতিটি কলে ১০০-৩০০ms পর্যন্ত সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ আটকে রাখে, ফলে পুরো সার্ভার জমে গিয়ে সব ইউজারের কাজ আটকে যায়'
        },
        {
          en: 'It saves the user password in unencrypted plain text in the console logs',
          bn: 'এটি কনসোল লগে ব্যবহারকারীর পাসওয়ার্ড সাধারণ টেক্সট আকারে প্রকাশ করে'
        },
        {
          en: 'It forces the client browser to immediately disconnect its internet network',
          bn: 'এটি ক্লায়েন্টের ব্রাউজারকে ইন্টারনেট সংযোগ বিচ্ছিন্ন করতে বাধ্য করে'
        },
        {
          en: 'hashSync is an unsupported feature in Linux operating systems',
          bn: 'লিনাক্স অপারেটিং সিস্টেমে hashSync কোনো সমর্থন পায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bcrypt is intentionally CPU-intensive to thwart brute-force attackers.',
        bn: 'বিক্রিপ্ট ইচ্ছা করেই প্রচুর সিপিইউ ব্যবহার করে যাতে আক্রমণকারীরা অনুমান করতে না পারে।'
      },
      explanation: {
        en: 'Bcrypt hashing is mathematically intense. Synchronous calls freeze the main JavaScript thread, degrading server throughput for all connected clients.',
        bn: 'বিক্রিপ্ট প্রচুর সিপিইউ শক্তি ব্যয় করে। সিঙ্ক্রোনাস কল করলে মূল থ্রেড আটকে যায়, ফলে অন্যান্য সব ইউজারের রিকোয়েস্ট আটকে থাকে।'
      }
    },
    {
      id: 'exp-auth-ex3',
      kind: 'mcq',
      topic: 'standard bearer token authorization header format',
      question: {
        en: 'What is the standard HTTP request header format used by frontend clients to send a JWT to an Express API?',
        bn: 'একটি এক্সপ্রেস এপিআই-তে ক্লায়েন্ট থেকে জেডব্লিউটি টোকেন পাঠানোর মানসম্মত এইচটিটিপি হেডার ফরম্যাট কোনটি?'
      },
      options: [
        {
          en: 'Authorization: Bearer <jwt-token-string>',
          bn: 'Authorization: Bearer <jwt-token-string>'
        },
        {
          en: 'Token-Payload: <jwt-token-string>',
          bn: 'Token-Payload: <jwt-token-string>'
        },
        {
          en: 'X-User-Password: <jwt-token-string>',
          bn: 'X-User-Password: <jwt-token-string>'
        },
        {
          en: 'Cookie-Secret: <jwt-token-string>',
          bn: 'Cookie-Secret: <jwt-token-string>'
        }
      ],
      answer: 0,
      hint: {
        en: 'The RFC 6750 standard designates the Bearer token scheme in the Authorization header.',
        bn: 'RFC 6750 মানদণ্ড Authorization হেডারে Bearer স্কিম ব্যবহারের নির্দেশ দেয়।'
      },
      explanation: {
        en: 'RFC 6750 dictates using the Authorization header with the Bearer prefix (e.g. Authorization: Bearer eyJhbGci...).',
        bn: 'RFC 6750 স্ট্যান্ডার্ড অনুযায়ী Authorization হেডারে Bearer প্রিফিক্স সহ টোকেন পাঠাতে হয়।'
      }
    },
    {
      id: 'exp-auth-ex4',
      kind: 'mcq',
      topic: 'rbac middleware factory execution',
      question: {
        en: 'Why is Role-Based Access Control (RBAC) middleware frequently designed as a higher-order function like requireRoles("admin", "editor")?',
        bn: 'রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) মিডেলওয়্যার কেন প্রায়ই requireRoles("admin", "editor")-এর মতো হায়ার-অর্ডার ফাংশন হিসেবে তৈরি করা হয়?'
      },
      options: [
        {
          en: 'It acts as a configurable factory that closes over the allowed roles array and returns customized middleware for each specific route',
          bn: 'এটি একটি কনফিগারেবল ফ্যাক্টরি হিসেবে অনুমোদিত রোলগুলো মনে রাখে এবং প্রতিটি রুটের জন্য কাস্টমাইজড মিডেলওয়্যার রিটার্ন করে'
        },
        {
          en: 'It allows Express to run without installing the Node.js runtime',
          bn: 'এটি নোড.জেএস রানটাইম ছাড়াই এক্সপ্রেস চালানোর সুযোগ করে দেয়'
        },
        {
          en: 'Higher-order functions run 10x faster in JavaScript V8 engine benchmarks',
          bn: 'হায়ার-অর্ডার ফাংশন V8 ইঞ্জিনে দশ গুণ দ্রুত রান করে'
        },
        {
          en: 'It is the only way to read HTTP request headers in Express',
          bn: 'এক্সেপ্রেসে রিকোয়েস্ট হেডার পড়ার কেবল এটিই একমাত্র উপায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Closures allow you to pass dynamic arguments into standard (req, res, next) middleware.',
        bn: 'ক্লোজার ব্যবহারের মাধ্যমে স্ট্যান্ডার্ড (req, res, next) মিডেলওয়্যারে পছন্দের আর্গুমেন্ট পাঠানো যায়।'
      },
      explanation: {
        en: 'A higher-order function creates a closure containing the permitted roles, returning a standard (req, res, next) handler tailored for that endpoint.',
        bn: 'হায়ার-অর্ডার ফাংশন অনুমোদিত রোলগুলোর একটি ক্লোজার তৈরি করে এবং নির্দিষ্ট এন্ডপয়েন্টের উপযোগী (req, res, next) মিডেলওয়্যার প্রদান করে।'
      }
    }
  ],
  quiz: {
    id: 'the-bouncer-at-the-door-quiz',
    title: {
      en: 'Authentication & Authorization Quiz',
      bn: 'অথেনটিকেশন ও অথরাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'q-jwt-tampering-signature',
        kind: 'mcq',
        topic: 'jwt cryptographic signature tampering detection',
        question: {
          en: 'If a malicious user modifies their user ID or role inside a JWT payload from "viewer" to "admin", what happens when Express verifies the token?',
          bn: 'যদি কোনো আক্রমণকারী তার JWT পেলোডে রোল "viewer" থেকে বদলে "admin" করে দেয়, তবে এক্সপ্রেস যখন টোকেন যাচাই করবে তখন কী ঘটবে?'
        },
        options: [
          {
            en: 'The cryptographic signature check fails because the signature was computed using the server secret key over the original payload, throwing JsonWebTokenError',
            bn: 'ক্রিপ্টোগ্রাফিক সিগনেচার যাচাই ব্যর্থ হবে কারণ স্বাক্ষরটি আসল ডাটার ওপর সার্ভারের গোপন চাবি দিয়ে তৈরি ছিল, ফলে JsonWebTokenError ঘটবে'
          },
          {
            en: 'The server grants administrative access because the payload is decoded automatically',
            bn: 'সার্ভার তাকে অ্যাডমিন এক্সেস দিয়ে দেবে কারণ পেলোড স্বয়ংক্রিয়ভাবে ডিকোড হয়'
          },
          {
            en: 'The server database automatically promotes the user to database administrator',
            bn: 'ডাটাবেজ স্বয়ংক্রিয়ভাবে ব্যবহারকারীকে ডাটাবেজ অ্যাডমিনিস্ট্রেটর বানিয়ে দেবে'
          },
          {
            en: 'The user computer screen changes to red color warning mode',
            bn: 'ইউজারের কম্পিউটার স্ক্রিনে লাল রঙের সতর্কবার্তা প্রদর্শিত হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'JWT signatures are tamper-proof mathematical hashes computed with a secret key.',
          bn: 'জেডব্লিউটি সিগনেচার হলো গোপন চাবি দিয়ে তৈরি গাণিতিক হ্যাশ যা বদলানো অসম্ভব।'
        },
        explanation: {
          en: 'Any change to the payload invalidates the signature. Without the secret key, attackers cannot compute a valid new signature, and jwt.verify throws an error.',
          bn: 'পেলোডে সামান্য পরিবর্তন করলেও সিগনেচার আর মেলে না। গোপন চাবি ছাড়া নতুন সিগনেচার তৈরি অসম্ভব হওয়ায় jwt.verify সাথে সাথে এরর দেয়।'
        }
      },
      {
        id: 'q-refresh-token-rotation',
        kind: 'mcq',
        topic: 'refresh token architecture purpose',
        question: {
          en: 'What architectural security problem do short-lived access tokens combined with long-lived refresh tokens solve in REST APIs?',
          bn: 'অল্প মেয়াদের এক্সেস টোকেন এবং দীর্ঘ মেয়াদের রিফ্রেশ টোকেনের সমন্বয় REST API-তে কোন নিরাপত্তা সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It minimizes the damage of leaked access tokens while enabling immediate user session revocation via database or Redis token invalidation',
            bn: 'এটি চুরি হওয়া টোকেনের ক্ষতির ঝুঁকি কমায় এবং ডাটাবেজ বা রেডিসে টোকেন বাতিল করে যেকোনো মুহূর্তে সেশন বন্ধ করার সুবিধা দেয়'
          },
          {
            en: 'It allows clients to bypass CORS security policies completely',
            bn: 'এটি ক্লায়েন্টকে সম্পূর্ণভাবে CORS সিকিউরিটি বাইপাস করার সুযোগ দেয়'
          },
          {
            en: 'It compresses user passwords by 90 percent before storage',
            bn: 'এটি সংরক্ষণের আগে ইউজারের পাসওয়ার্ড ৯০ শতাংশ সংকুচিত করে'
          },
          {
            en: 'It removes the need for HTTPS encryption across network sockets',
            bn: 'এটি নেটওয়ার্কে এইচটিটিপিএস এনক্রিপশনের প্রয়োজনীয়তা বাতিল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Short-lived tokens limit exposure; refresh tokens provide revocation control.',
          bn: 'স্বল্পমেয়াদী টোকেন ঝুঁকি কমায়; রিফ্রেশ টোকেন সেশন বন্ধ করার ক্ষমতা দেয়।'
        },
        explanation: {
          en: 'Access tokens expire quickly (15 min), minimizing damage if intercepted. Refresh tokens hit the database to get new access tokens, allowing instant account lockouts.',
          bn: 'এক্সেস টোকেনের মেয়াদ কম থাকায় চুরি হলেও ক্ষতি সীমিত থাকে। নতুন টোকেন নিতে রিফ্রেশ টোকেন ডাটাবেজ চেক করে, ফলে প্রয়োজনে সাথে সাথে ইউজারকে ব্লক করা যায়।'
        }
      },
      {
        id: 'q-bcrypt-salt-rounds',
        kind: 'mcq',
        topic: 'bcrypt salt rounds cost factor',
        question: {
          en: 'Why is a cost factor of 12 rounds recommended for bcrypt.hash() in modern production web services?',
          bn: 'আধুনিক প্রোডাকশন ওয়েব সার্ভিসে bcrypt.hash()-এর জন্য ১২ রাউন্ডের কস্ট ফ্যাক্টর কেন সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'It strikes the optimal balance: takes ~250ms of CPU time (fast enough for human users during login, but prohibitively slow for brute-force GPU attackers)',
            bn: 'এটি আদর্শ ভারসাম্য তৈরি করে: লগইনে মানুষের জন্য মাত্র ~২৫০ms সময় নেয় কিন্তু আক্রমণকারীর জিপিইউ ক্র্যাকিংকে অসম্ভব ধীর করে দেয়'
          },
          {
            en: '12 is the only number supported by the Node.js crypto module',
            bn: '১২ হলো নোড.জেএস ক্রিপ্টো মডিউল দ্বারা সমর্থিত একমাত্র সংখ্যা'
          },
          {
            en: 'Setting salt rounds to 12 automatically sends a confirmation SMS to the user',
            bn: '১২ সেট করলে ব্যবহারকারীর মোবাইলে স্বয়ংক্রিয়ভাবে কনফার্মেশন এসএমএস চলে যায়'
          },
          {
            en: 'Higher numbers make the resulting password hash string shorter in length',
            bn: 'বড় সংখ্যা দিলে উৎপন্ন পাসওয়ার্ড হ্যাশ স্ট্রিং আকারে ছোট হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each increment of salt rounds doubles the computational time required to hash.',
          bn: 'সল্ট রাউন্ড ১ বাড়ালে হ্যাশ করতে প্রয়োজনীয় কম্পিউটেশনাল সময় দ্বিগুণ হয়ে যায়।'
        },
        explanation: {
          en: 'Bcrypt work factor 12 takes ~250ms, which is unnoticeable for single user logins but requires centuries of computational power for brute-force rainbow table attacks.',
          bn: '১২ রাউন্ডে প্রায় ২৫০ মিলিসেকেন্ড লাগে যা লগইনের জন্য স্বাভাবিক, কিন্তু কোটি কোটি পাসওয়ার্ড অনুমান করতে যাওয়া আক্রমণকারীর জন্য তা অসম্ভব ধীর।'
        }
      },
      {
        id: 'q-auth-middleware-ordering',
        kind: 'mcq',
        topic: 'middleware ordering security vulnerability',
        question: {
          en: 'What critical security vulnerability arises if requireRoles("admin") is registered BEFORE authenticateUser in a route handler chain?',
          bn: 'যদি কোনো রুটে authenticateUser-এর আগেই requireRoles("admin") মিডেলওয়্যার বসানো হয় তবে কোন মারাত্মক নিরাপত্তা ঝুঁকি দেখা দেয়?'
        },
        options: [
          {
            en: 'req.user is undefined when requireRoles runs, causing an unhandled TypeError crash or failing open to unauthorized callers',
            bn: 'requireRoles চলার সময় req.user থাকবে না, ফলে TypeError ক্র্যাশ ঘটবে অথবা অনিচ্ছাকৃতভাবে অননুমোদিত ইউজার ঢুকে পড়তে পারে'
          },
          {
            en: 'The Express server will delete its own source code repository',
            bn: 'এক্সপ্রেস সার্ভার তার নিজস্ব সোর্স কোড রিপোজিটরি মুছে ফেলবে'
          },
          {
            en: 'The database tables will be converted into SQLite in-memory files',
            bn: 'ডাটাবেজ টেবিলগুলো এসকিউলাইট মেমরি ফাইলে পরিণত হবে'
          },
          {
            en: 'The client IP address is permanently blocked by all internet routers',
            bn: 'ক্লায়েন্টের আইপি অ্যাড্রেস ইন্টারনেটের সমস্ত রাউটারে ব্লক হয়ে যাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'You must verify identity before checking role permissions on that identity.',
          bn: 'ইউজারের রোল যাচাই করার আগে তার আসল পরিচয় নিশ্চিত করা আবশ্যক।'
        },
        explanation: {
          en: 'Ordering is paramount. The authentication middleware must decode the credentials and assign req.user before authorization middleware can inspect req.user.role.',
          bn: 'মিডেলওয়্যারের ক্রম অত্যন্ত গুরুত্বপূর্ণ। আগে ইউজার কে তা নিশ্চিত করে req.user-এ ডাটা রাখতে হবে, তারপর তার রোল পরীক্ষা করতে হবে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-night-shift',
    title: {
      en: 'Production Security & Performance — Helmet, CORS, Rate Limiting & Graceful Shutdown',
      bn: 'প্রোডাকশন সিকিউরিটি ও পারফরম্যান্স — হেলমেট, কর্স, রেট লিমিটিং ও গ্রেসফুল শাটডাউন'
    }
  }
};
