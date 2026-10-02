import type { Lesson } from '../../../lib/types';

export const SecurityAtThePassLesson: Lesson = {
  slug: 'security-at-the-pass',
  tech: 'fastapi',
  title: {
    en: 'OAuth2 & JWT Security — Bearer Tokens, Passwords & Scopes',
    bn: 'OAuth2 ও JWT সিকিউরিটি — বেয়ারার টোকেন, পাসওয়ার্ড ও স্কোপ'
  },
  summary: {
    en: 'FastAPI provides first-class support for OAuth2 password flows and stateless JSON Web Token (JWT) authentication. In this lesson, you will master password hashing with Passlib, generating signed JWT tokens with PyJWT, protecting endpoints using OAuth2PasswordBearer, and enforcing granular role scopes with SecurityScopes.',
    bn: 'FastAPI-তে OAuth2 পাসওয়ার্ড ফ্লো এবং স্টেটলেস JSON Web Token (JWT) অথেনটিকেশনের চমৎকার বিল্ট-ইন সমর্থন রয়েছে। এই পাঠে আপনি Passlib দিয়ে পাসওয়ার্ড হ্যাশিং, PyJWT দিয়ে সাইন করা JWT তৈরি, OAuth2PasswordBearer দিয়ে এন্ডপয়েন্ট সুরক্ষা এবং SecurityScopes দিয়ে পারমিশন স্কোপ নিয়ন্ত্রণ গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'fastapi-security-architecture',
      text: {
        en: 'The FastAPI Security and OAuth2 Architecture',
        bn: 'FastAPI সিকিউরিটি ও OAuth2 আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you secure API endpoints with FastAPI, the framework provides modular utilities adhering to the OpenAPI and OAuth2 specifications. Clients authenticate by submitting credentials to a login endpoint, receive a cryptographically signed JSON Web Token (JWT), and transmit that token in the HTTP Authorization header (Bearer token) on subsequent requests.',
        bn: 'যখন আপনি FastAPI দিয়ে এপিআই সুরক্ষিত করেন, তখন ফ্রেমওয়ার্ক OpenAPI এবং OAuth2 স্ট্যান্ডার্ড মেনে চলা মডিউলার টুল সরবরাহ করে। ক্লায়েন্টরা লগইন রুটে তথ্য পাঠিয়ে একটি ক্রিপ্টোগ্রাফিক্যালি স্বাক্ষরিত JSON Web Token (JWT) গ্রহণ করে এবং পরবর্তী প্রতিটি রিকোয়েস্টে এইচটিটিপি Authorization হেডারে বেয়ারার টোকেন আকারে তা পাঠায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'OAuth2PasswordBearer',
          def: {
            en: 'A FastAPI security class that informs OpenAPI that the endpoint expects a Bearer token in the HTTP Authorization header.',
            bn: 'একটি FastAPI সিকিউরিটি ক্লাস যা OpenAPI-কে জানায় যে সংশ্লিষ্ট এন্ডপয়েন্টটি Authorization হেডারে একটি বেয়ারার টোকেন প্রত্যাশা করে।'
          }
        },
        {
          term: 'JSON Web Token (JWT)',
          def: {
            en: 'A compact, URL-safe means of representing claims (user ID, expiration) signed with a secret HMAC key or RSA private key.',
            bn: 'একটি সংকুচিত, ইউআরএল-বান্ধব ফরম্যাট যা গোপন কি দিয়ে স্বাক্ষরিত হয়ে ব্যবহারকারীর পরিচয় ও মেয়াদের তথ্য বহন করে।'
          }
        },
        {
          term: 'CryptContext (Passlib)',
          def: {
            en: 'A password hashing context managing salt generation, hashing algorithms (like bcrypt or argon2), and legacy scheme deprecation.',
            bn: 'একটি পাসওয়ার্ড হ্যাশিং টুল যা স্বয়ংক্রিয় সল্ট তৈরি, অ্যালগরিদম (bcrypt বা argon2) এবং পুরোনো হ্যাশ সংস্করণ পরিচালনা করে।'
          }
        },
        {
          term: 'SecurityScopes',
          def: {
            en: 'A FastAPI dependency argument holding the list of permission scopes required by the current path operation.',
            bn: 'একটি FastAPI ডিপেন্ডেন্সি অবজেক্ট যা বর্তমান রুটে প্রবেশের জন্য প্রয়োজনীয় পারমিশন স্কোপগুলোর তালিকা বহন করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'security-components-matrix',
      text: {
        en: 'Authentication Protocol Components Matrix',
        bn: 'অথেনটিকেশন প্রোটোকল উপাদান ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Component', bn: 'উপাদান' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স' },
        { en: 'Security Role', bn: 'নিরাপত্তা ভূমিকা' }
      ],
      rows: [
        [
          { en: 'Token Scheme Extraction', bn: 'টোকেন স্কিম নিষ্কাশন' },
          { en: 'oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")', bn: 'oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")' },
          { en: 'Enables Authorize button in Swagger UI, extracts Bearer string', bn: 'Swagger UI-তে Authorize বাটন চালু করে এবং হেডার থেকে টোকেন টানে' }
        ],
        [
          { en: 'Password Verification', bn: 'পাসওয়ার্ড যাচাই' },
          { en: 'pwd_context.verify(plain_pass, hashed_pass)', bn: 'pwd_context.verify(plain_pass, hashed_pass)' },
          { en: 'Safely compares credentials in constant time against stored hash', bn: 'কনস্ট্যান্ট-টাইমে ডাটাবেজের হ্যাশের সাথে পাসওয়ার্ডের মিল পরীক্ষা করে' }
        ],
        [
          { en: 'Token Issuance', bn: 'টোকেন প্রদান' },
          { en: 'jwt.encode({"sub": user.id, "exp": exp}, SECRET_KEY)', bn: 'jwt.encode({"sub": user.id, "exp": exp}, SECRET_KEY)' },
          { en: 'Signs payload with HMAC-SHA256, returning compact token', bn: 'HMAC-SHA256 দিয়ে স্বাক্ষর করে স্টেটলেস টোকেন তৈরি করে' }
        ],
        [
          { en: 'Scope Permission Check', bn: 'স্কোপ পারমিশন পরীক্ষা' },
          { en: 'Security(get_current_user, scopes=["items:write"])', bn: 'Security(get_current_user, scopes=["items:write"])' },
          { en: 'Verifies user token claims contain all required permission scopes', bn: 'ব্যবহারকারীর টোকেনে দরকারি সমস্ত পারমিশন স্কোপ আছে কিনা তা দেখে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'jwt-auth-simulation-code',
      text: {
        en: 'Working JWT Generation, Verification and Scope Enforcement Simulation',
        bn: 'কার্যকরী JWT তৈরি, যাচাই ও স্কোপ প্রয়োগ সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of FastAPI OAuth2 Bearer Token and Scopes Verification
class MockAuthSystem {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  // 1. Simulating JWT signing
  generateToken(userId, scopes = ['items:read']) {
    const payload = {
      sub: userId,
      scopes: scopes,
      exp: Math.floor(Date.now() / 1000) + 3600 // Valid for 1 hour
    };
    const encoded = Buffer.from(JSON.stringify(payload)).toString('base64');
    const signature = 'sig_' + encoded.slice(0, 8);
    return \`mockjwt.\${encoded}.\${signature}\`;
  }

  // 2. Simulating token decoding and scope verification
  verifyToken(bearerHeader, requiredScopes = []) {
    if (!bearerHeader || !bearerHeader.startsWith('Bearer ')) {
      return { authenticated: false, error: 'Missing or malformed Authorization header' };
    }
    const token = bearerHeader.split(' ')[1];
    const parts = token.split('.');
    if (parts.length !== 3) return { authenticated: false, error: 'Invalid token structure' };

    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));

    // Check expiration
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return { authenticated: false, error: 'Token has expired' };
    }

    // Verify all required scopes exist in payload
    for (const scope of requiredScopes) {
      if (!payload.scopes.includes(scope)) {
        return { authenticated: false, error: \`Missing required permission scope: \${scope}\` };
      }
    }

    return { authenticated: true, userId: payload.sub, scopes: payload.scopes };
  }
}

const auth = new MockAuthSystem('supersecretkey123');
const token = auth.generateToken(101, ['items:read', 'items:write']);

// Case A: Read endpoint requiring items:read
const readResult = auth.verifyToken(\`Bearer \${token}\`, ['items:read']);

// Case B: Admin endpoint requiring admin:all scope
const adminResult = auth.verifyToken(\`Bearer \${token}\`, ['admin:all']);

console.log('Read endpoint authorized:', readResult.authenticated);
// -> Read endpoint authorized: true
console.log('Authorized subject user ID:', readResult.userId);
// -> Authorized subject user ID: 101
console.log('Admin endpoint authorized:', adminResult.authenticated);
// -> Admin endpoint authorized: false`,
      caption: {
        en: 'JWT token authorized for user 101 with items:read and rejected for admin:all',
        bn: 'ইউজার 101 এর টোকেন items:read এর জন্য সত্য এবং admin:all এর জন্য মিথ্যা রিটার্ন করছে'
      }
    },
    {
      type: 'heading',
      id: 'swagger-ui-authorize-integration',
      text: {
        en: 'Swagger UI Authorization and Security Best Practices',
        bn: 'Swagger UI অথরাইজেশন ও নিরাপত্তা সেরা অনুশীলন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Declaring OAuth2PasswordBearer automatically integrates with Swagger UI by rendering an "Authorize" padlock button at the top of the docs page. Developers can enter their username and password directly in the browser dialog; Swagger calls the token endpoint, captures the access token, and automatically attaches the Bearer header to all subsequent test requests.',
        bn: 'OAuth2PasswordBearer ঘোষণা করলে Swagger UI-এর একদম উপরে স্বয়ংক্রিয়ভাবে একটি "Authorize" তালা বাটন যুক্ত হয়। ডেভেলপাররা ব্রাউজারেই ইউজারনেম ও পাসওয়ার্ড দিলে Swagger নিজে থেকেই টোকেন সংগ্রহ করে এবং পরবর্তী সমস্ত টেস্ট রিকোয়েস্টে স্বয়ংক্রিয়ভাবে বেয়ারার হেডার যুক্ত করে পাঠায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Secret Key from Environment: Never commit SECRET_KEY to source control; load it via os.environ.get("SECRET_KEY").',
          bn: '১. এনভায়রনমেন্ট থেকে সিক্রেট কি: SECRET_KEY কখনো কোডে লিখবেন না; সর্বদা os.environ থেকে গোপন কি লোড করুন।'
        },
        {
          en: '2. Enforce Token Expiry: Always include an "exp" timestamp claim in JWTs to bound the validity window of stolen tokens.',
          bn: '২. টোকেনে মেয়াদের তারিখ: টোকেন চুরির ঝুঁকি কমাতে JWT-তে সর্বদা "exp" মেয়াদের সময়সীমা নির্ধারণ করুন।'
        },
        {
          en: '3. Use SecurityScopes for RBAC: Protect administrative routes by declaring required permissions inside Security(..., scopes=[...]).',
          bn: '৩. রোলে SecurityScopes ব্যবহার: নির্দিষ্ট পারমিশন যাচাই করতে Security(..., scopes=[...]) ব্যবহার করুন।'
        },
        {
          en: '4. HTTPS Only in Production: Transmit JWT bearer tokens exclusively over TLS/HTTPS to prevent network packet eavesdropping.',
          bn: '৪. কেবল HTTPS মাধ্যমে টোকেন পাঠানো: টোকেন চুরি রোধ করতে প্রোডাকশনে সর্বদা এনক্রিপ্টেড এইচটিটিপিএস ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-sec-ex1',
      kind: 'mcq',
      topic: 'oauth2passwordbearer header expectation',
      question: {
        en: 'Which HTTP request header does FastAPI OAuth2PasswordBearer inspect to locate the authentication credentials?',
        bn: 'FastAPI OAuth2PasswordBearer অথেনটিকেশন ক্রেডেনশিয়াল খুঁজে বের করতে কোন এইচটিটিপি রিকোয়েস্ট হেডার পরীক্ষা করে?'
      },
      options: [
        {
          en: 'Authorization header formatted as "Bearer <token>"',
          bn: 'Authorization হেডার যা "Bearer <token>" ফরম্যাটে থাকে'
        },
        {
          en: 'Cookie header named "session_token"',
          bn: 'Cookie হেডার যার নাম "session_token"'
        },
        {
          en: 'Custom header named "X-API-Password"',
          bn: 'কাস্টম হেডার যার নাম "X-API-Password"'
        },
        {
          en: 'The URL query string parameter "?token=<token>"',
          bn: 'ইউআরএল কোয়েরি স্ট্রিং প্যারামিটার "?token=<token>"'
        }
      ],
      answer: 0,
      hint: {
        en: 'OAuth2 specifies the Authorization header with Bearer token scheme.',
        bn: 'OAuth2 স্পেসিফিকেশনে Authorization হেডারে Bearer স্কিম ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'OAuth2PasswordBearer extracts the Bearer token from the standard HTTP Authorization header: Authorization: Bearer <token>.',
        bn: 'OAuth2PasswordBearer প্রমিত এইচটিটিপি Authorization হেডার থেকে Bearer টোকেনটি সংগ্রহ করে।'
      }
    },
    {
      id: 'fa-sec-ex2',
      kind: 'mcq',
      topic: 'jwt claims expiration attribute',
      question: {
        en: 'Which standard claim key inside a JSON Web Token (JWT) payload defines the expiration timestamp?',
        bn: 'একটি JSON Web Token (JWT) পে-লোডের ভেতরে কোন স্ট্যান্ডার্ড কী-টি টোকেনের মেয়াদ শেষের সময় নির্ধারণ করে?'
      },
      options: [
        {
          en: '"exp" (a Unix epoch timestamp integer)',
          bn: '"exp" (একটি ইউনিক্স ইপক টাইমস্ট্যাম্প পূর্ণসংখ্যা)'
        },
        {
          en: '"timeout" (in minutes)',
          bn: '"timeout" (মিনিটের হিসাবে)'
        },
        {
          en: '"valid_until_date"',
          bn: '"valid_until_date"'
        },
        {
          en: '"lifetime_seconds"',
          bn: '"lifetime_seconds"'
        }
      ],
      answer: 0,
      hint: {
        en: 'The RFC 7519 JWT standard uses the 3-letter abbreviation "exp".',
        bn: 'RFC 7519 স্ট্যান্ডার্ডে ৩ অক্ষরের সংক্ষেপ "exp" ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'RFC 7519 defines "exp" as the expiration time claim, represented as a numeric date (seconds since Unix epoch). PyJWT automatically rejects expired tokens.',
        bn: 'RFC 7519 অনুযায়ী "exp" হলো মেয়াদের স্ট্যান্ডার্ড কী। টোকেনের সময় পেরিয়ে গেলে PyJWT স্বয়ংক্রিয়ভাবে তা প্রত্যাখ্যান করে।'
      }
    },
    {
      id: 'fa-sec-ex3',
      kind: 'mcq',
      topic: 'swagger ui authorize button activation',
      question: {
        en: 'How does declaring "oauth2_scheme = OAuth2PasswordBearer(tokenUrl=\'token\')" benefit developer workflows in Swagger UI?',
        bn: '"oauth2_scheme = OAuth2PasswordBearer(tokenUrl=\'token\')" ঘোষণা করলে Swagger UI-তে ডেভেলপারদের কোন সুবিধা হয়?'
      },
      options: [
        {
          en: 'It activates an interactive "Authorize" modal button in Swagger UI, allowing developers to log in and automatically send the Bearer token on all test requests in the browser',
          bn: 'এটি Swagger UI-তে একটি "Authorize" বাটন যুক্ত করে, যার মাধ্যমে ব্রাউজারে লগইন করে প্রতিটি টেস্ট রিকোয়েস্টে স্বয়ংক্রিয়ভাবে বেয়ারার টোকেন পাঠানো যায়'
        },
        {
          en: 'It downloads Postman onto the user desktop automatically',
          bn: 'এটি ব্যবহারকারীর কম্পিউটারে নিজে থেকে Postman ডাউনলোড করে নেয়'
        },
        {
          en: 'It encrypts the entire OpenAPI specification with RSA-4096',
          bn: 'এটি পুরো OpenAPI স্পেসিফিকেশনকে আরএসএ-৪০৯৬ দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It makes all API endpoints public without authentication',
          bn: 'এটি সব এপিআই এন্ডপয়েন্টকে উন্মুক্ত ও নিরাপত্তাহীন করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'OAuth2PasswordBearer tells Swagger where to fetch tokens and adds the Authorize padlock.',
        bn: 'OAuth2PasswordBearer সোয়েগারকে জানায় কোথা থেকে টোকেন নিতে হবে এবং লগইন বাটন যোগ করে।'
      },
      explanation: {
        en: 'FastAPI reflects OAuth2PasswordBearer into the OpenAPI securitySchemes, enabling the built-in Swagger UI authentication dialog and automatic token forwarding.',
        bn: 'FastAPI এটি OpenAPI সিকিউরিটিতে যুক্ত করে, ফলে Swagger UI-তে সুন্দর অথেনটিকেশন ডায়ালগ আসে এবং নিজে থেকেই টোকেন যুক্ত হয়ে যায়।'
      }
    },
    {
      id: 'fa-sec-ex4',
      kind: 'mcq',
      topic: 'stateless nature of jwt authentication',
      question: {
        en: 'Why is JWT-based authentication described as "stateless", and what scaling benefit does it offer over database sessions?',
        bn: 'JWT-ভিত্তিক অথেনটিকেশনকে কেন "স্টেটলেস" বলা হয় এবং ডাটাবেজ সেশনের তুলনায় এটি স্কেলিংয়ে কোন সুবিধা দেয়?'
      },
      options: [
        {
          en: 'The server does not need to store session records in a database; user identity and permissions are verified purely by validating the cryptographic signature on the token, enabling horizontal scaling across multiple servers without shared session stores',
          bn: 'সার্ভারকে ডাটাবেজে সেশন জমা রাখতে হয় না; কেবল ক্রিপ্টোগ্রাফিক স্বাক্ষর যাচাই করেই পরিচয় নিশ্চিত করা যায়, যা সেন্ট্রাল সেশন স্টোর ছাড়াই একাধিক সার্ভারে সহজে স্কেলিং সুবিধা দেয়'
        },
        {
          en: 'JWT tokens can only be used 1 time before being permanently destroyed',
          bn: 'JWT টোকেন চিরতরে মুছে যাওয়ার আগে কেবল ১ বারই ব্যবহার করা যায়'
        },
        {
          en: 'It completely disables network firewalls for maximum speed',
          bn: 'সর্বোচ্চ গতির জন্য এটি নেটওয়ার্ক ফায়ারওয়াল বন্ধ করে দেয়'
        },
        {
          en: 'Stateless means the database can be powered off while the API runs',
          bn: 'স্টেটলেস মানে এপিআই চলার সময় ডাটাবেজ বন্ধ রাখা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stateless tokens carry their own cryptographic proof without server-side lookup.',
        bn: 'স্টেটলেস টোকেন নিজেই নিজের সত্যতার ক্রিপ্টোগ্রাফিক প্রমাণ বহন করে।'
      },
      explanation: {
        en: 'Because JWTs are self-contained and cryptographically signed, any server possessing the secret key can verify the token without querying a centralized session database.',
        bn: 'JWT-এর ভেতর সমস্ত তথ্য ও ক্রিপ্টোগ্রাফিক স্বাক্ষর থাকে। তাই যেকোনো সার্ভার ডাটাবেজ চেক না করেই কেবল সিক্রেট কি দিয়ে টোকেনটি সত্য কিনা তা যাচাই করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'security-at-the-pass-quiz',
    title: {
      en: 'FastAPI Security, OAuth2 & JWT Quiz',
      bn: 'FastAPI সিকিউরিটি, OAuth2 ও JWT কুইজ'
    },
    questions: [
      {
        id: 'q-jwt-revocation-challenge',
        kind: 'mcq',
        topic: 'handling immediate token revocation in stateless jwt systems',
        question: {
          en: 'Because stateless JWTs cannot be easily revoked before their expiration timestamp, what architectural pattern is standard for handling immediate logouts or compromised tokens?',
          bn: 'যেহেতু স্টেটলেস JWT মেয়াদ শেষের আগে সহজে বাতিল করা যায় না, তাই তাৎক্ষণিক লগআউট বা হ্যাক হওয়া টোকেন অকেজো করার আদর্শ আর্কিটেকচারাল প্যাটার্ন কোনটি?'
        },
        options: [
          {
            en: 'Pair short-lived access tokens (e.g. 15 minutes) with long-lived refresh tokens, and maintain a fast in-memory blacklist (such as Redis) for revoked tokens',
            bn: 'স্বল্পমেয়াদী এক্সেস টোকেন (যেমন ১৫ মিনিট) ও দীর্ঘমেয়াদী রিফ্রেশ টোকেন ব্যবহার করা এবং বাতিল টোকেনের জন্য রেডিসে একটি দ্রুতগতির ব্ল্যাকলিস্ট রাখা'
          },
          {
            en: 'Change the SECRET_KEY on every user logout, invalidating all users across the entire platform',
            bn: 'প্রতিটি লগআউটে SECRET_KEY বদলে পুরো সাইটের সব ইউজারের সেশন বাতিল করা'
          },
          {
            en: 'Delete the user account from PostgreSQL immediately',
            bn: 'পোস্টগ্রেস থেকে ব্যবহারকারীর অ্যাকাউন্ট তৎক্ষণাৎ মুছে দেওয়া'
          },
          {
            en: 'Stateless tokens cannot be revoked under any circumstances',
            bn: 'কোনো অবস্থাতেই স্টেটলেস টোকেন বাতিল করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Short-lived access tokens combined with a Redis denylist provide effective revocation.',
          bn: 'স্বল্প সময়ের এক্সেস টোকেন এবং রেডিস ডিনাইলিস্টের সমন্বয়ে নিরাপদ সেশন নিয়ন্ত্রণ করা যায়।'
        },
        explanation: {
          en: 'Standard practice uses short-lived access tokens and longer-lived refresh tokens. To revoke an active token before expiration, its JTI (JWT ID) is stored in a fast Redis blacklist.',
          bn: 'আদর্শ নিয়ম হলো এক্সেস টোকেনের মেয়াদ খুব কম রাখা। জরুরি প্রয়োজনে বাতিল করতে টোকেনের আইডি রেডিসের ব্ল্যাকলিস্টে জমা রাখা হয়।'
        }
      },
      {
        id: 'q-oauth2-password-request-form-content-type',
        kind: 'mcq',
        topic: 'OAuth2PasswordRequestForm form-data requirement',
        question: {
          en: 'Which HTTP Content-Type header must a client send when submitting login credentials to a route using "OAuth2PasswordRequestForm"?',
          bn: '"OAuth2PasswordRequestForm" ব্যবহৃত লগইন রুটে ক্রেডেনশিয়াল পাঠানোর সময় ক্লায়েন্টকে কোন Content-Type হেডারে ডাটা পাঠাতে হয়?'
        },
        options: [
          {
            en: 'application/x-www-form-urlencoded (URL-encoded form data, as mandated by the official OAuth2 specification)',
            bn: 'application/x-www-form-urlencoded (অফিসিয়াল OAuth2 স্পেক অনুযায়ী ইউআরএল-এনকোডেড ফর্ম ডাটা)'
          },
          {
            en: 'application/json',
            bn: 'application/json'
          },
          {
            en: 'text/plain',
            bn: 'text/plain'
          },
          {
            en: 'multipart/encrypted-xml',
            bn: 'multipart/encrypted-xml'
          }
        ],
        answer: 0,
        hint: {
          en: 'The OAuth2 specification strictly mandates form-encoded data for the password grant.',
          bn: 'OAuth2 স্পেসিফিকেশনে পাসওয়ার্ড গ্রান্টের জন্য ফর্ম-এনকোডেড ডাটা পাঠানো বাধ্যতামূলক।'
        },
        explanation: {
          en: 'OAuth2 RFC 6749 requires the token endpoint to receive credentials as application/x-www-form-urlencoded. Sending JSON to OAuth2PasswordRequestForm results in an HTTP 422 error.',
          bn: 'OAuth2 RFC ৬৭৪৯ এর নিয়ম অনুযায়ী টোকেন এন্ডপয়েন্টে ডাটা অবশ্যই ফর্ম-ডাটা হিসেবে পাঠাতে হয়। এতে JSON পাঠালে FastAPI ৪২২ ভ্যালিডেশন এরর দেয়।'
        }
      },
      {
        id: 'q-security-scopes-enforcement-logic',
        kind: 'mcq',
        topic: 'verifying security scopes in dependencies',
        question: {
          en: 'How does a dependency function decorated with "SecurityScopes" enforce permission scopes?',
          bn: '"SecurityScopes" যুক্ত একটি ডিপেন্ডেন্সি ফাংশন কীভাবে পারমিশন স্কোপ পরীক্ষা ও প্রয়োগ করে?'
        },
        options: [
          {
            en: 'It compares "security_scopes.scopes" against the user token scopes; if any required scope is missing, it raises an HTTP 403 Forbidden exception',
            bn: 'এটি "security_scopes.scopes"-এর সাথে ইউজারের টোকেন স্কোপের তুলনা করে; কোনো দরকারি স্কোপ না থাকলে এইচটিটিপি ৪০৩ Forbidden এরর ছুড়ে দেয়'
          },
          {
            en: 'It redirects the user to the Google sign-in page',
            bn: 'এটি ব্যবহারকারীকে গুগল সাইন-ইন পেজে পাঠিয়ে দেয়'
          },
          {
            en: 'It converts the user password into a QR code image',
            bn: 'এটি ব্যবহারকারীর পাসওয়ার্ডকে কিউআর কোডে রূপান্তর করে'
          },
          {
            en: 'It grants access automatically after 10 seconds of delay',
            bn: '১০ সেকেন্ড অপেক্ষার পর নিজে থেকেই এক্সেস দিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Missing permission scopes result in HTTP 403 Forbidden.',
          bn: 'অনুমোদনহীন পারমিশনের ক্ষেত্রে সার্ভার থেকে ৪০৩ Forbidden পাঠানো হয়।'
        },
        explanation: {
          en: 'SecurityScopes exposes the required scopes for the endpoint. If the user\'s token does not include every required scope, the dependency raises HTTPException(status_code=403).',
          bn: 'SecurityScopes এন্ডপয়েন্টের জন্য দরকারি পারমিশন স্কোপ সরবরাহ করে। ইউজারের কাছে পর্যাপ্ত পারমিশন না থাকলে ৪০৩ ফরবিডেন এরর দিয়ে রিকোয়েস্ট আটকে দেওয়া হয়।'
        }
      },
      {
        id: 'q-passlib-cryptcontext-deprecated-scheme',
        kind: 'mcq',
        topic: 'automatic hash upgrading with passlib',
        question: {
          en: 'What is the benefit of Passlib\'s "deprecated=\'auto\'" setting when initializing CryptContext?',
          bn: 'CryptContext তৈরির সময় Passlib-এর "deprecated=\'auto\'" সেটিংস ব্যবহারের সুবিধা কী?'
        },
        options: [
          {
            en: 'When a user logs in with an older, weaker password hash algorithm, Passlib verifies the password and automatically re-hashes it using the newest preferred algorithm transparently',
            bn: 'ব্যবহারকারী পুরোনো দুর্বল অ্যালগরিদমের পাসওয়ার্ড দিয়ে লগইন করলে Passlib তা যাচাই করে স্বয়ংক্রিয়ভাবে নতুন শক্তিশালী অ্যালগরিদম দিয়ে পুনরায় হ্যাশ করে নেয়'
          },
          {
            en: 'It deletes all user passwords that are older than 90 days',
            bn: 'এটি ৯০ দিনের পুরোনো সমস্ত পাসওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'It converts plaintext passwords into MD5 checksums',
            bn: 'এটি পাসওয়ার্ডকে MD5 চেকসামে রূপান্তর করে'
          },
          {
            en: 'It disables password verification entirely',
            bn: 'এটি পাসওয়ার্ড যাচাই প্রক্রিয়া পুরোপুরি বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'It allows seamless, zero-downtime migration of password hashes upon successful login.',
          bn: 'লগইনের সময় ব্যবহারকারীকে ঝামেলায় না ফেলে নিজে থেকেই পাসওয়ার্ডের হ্যাশ আধুনিকায়নে এটি সাহায্য করে।'
        },
        explanation: {
          en: 'Passlib\'s deprecated="auto" detects hashes created with outdated schemes or work factors. Upon successful authentication, pwd_context.needs_update(hash) flags it for transparent re-hashing.',
          bn: 'deprecated="auto" পুরোনো হ্যাশ শনাক্ত করে। লগইন সফল হলে এটি নিজে থেকেই পাসওয়ার্ডটিকে নতুন ও শক্তিশালী অ্যালগরিদমে রূপান্তর করে ডাটাবেজে সেভ করে নেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'databases-on-the-side',
    title: {
      en: 'Async Databases — SQLAlchemy 2.0, asyncpg & Transactions',
      bn: 'অ্যাসিনক্রোনাস ডাটাবেজ — SQLAlchemy ২.০, asyncpg ও ট্রানজেকশন'
    }
  }
};
