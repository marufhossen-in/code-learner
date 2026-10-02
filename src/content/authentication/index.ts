import type { Hub } from '../../lib/types';
import { MeetAuthLesson } from './lessons/meet-auth';
import { PasswordsHashingLesson } from './lessons/passwords-hashing';
import { SessionsTokensLesson } from './lessons/sessions-tokens';
import { MfaBasicsLesson } from './lessons/mfa-basics';
import { OauthFlowsLesson } from './lessons/oauth-flows';
import { JwtTokensLesson } from './lessons/jwt-tokens';
import { PasswordlessAuthLesson } from './lessons/passwordless-auth';
import { AuthCapstoneLesson } from './lessons/auth-capstone';

export const authenticationHub: Hub = {
  slug: 'authentication',
  name: 'Authentication',
  icon: '🪪',
  tagline: {
    en: 'Master identity verification: password hashing with Argon2id, stateful sessions, multi-factor TOTP, OAuth 2.0 PKCE flows, and JWT architectures.',
    bn: 'পরিচয় প্রমাণীকরণ আয়ত্ত করুন: Argon2id দিয়ে পাসওয়ার্ড হ্যাশিং, স্টেটফুল সেশন, মাল্টি-ফ্যাক্টর TOTP, OAuth ২.০ PKCE ফ্লো এবং JWT আর্কিটেকচার।'
  },
  intro: {
    en: 'Authentication is the security gateway of modern distributed applications: the cryptographic and protocol discipline of verifying that users and services are genuinely who they claim to be. Moving beyond insecure legacy patterns, modern production systems combine memory-hard password hashing (Argon2id and bcrypt), tamper-proof stateful cookie sessions, Time-Based One-Time Passwords (TOTP), federated identity through OAuth 2.0 and OpenID Connect with PKCE, digitally signed JSON Web Tokens (JWT), and next-generation FIDO2 WebAuthn passkeys. This hub equips engineers to build hardened authentication pipelines that repel credential stuffing, session hijacking, replay attacks, and token forgery.',
    bn: 'অথেনটিকেশন হলো আধুনিক ডিস্ট্রিবিউটেড অ্যাপ্লিকেশনের প্রধান নিরাপত্তা প্রবেশদ্বার: ব্যবহারকারী বা সার্ভিস সত্যিই তাদের দাবিকৃত পরিচয়ের অধিকারী কি না তা ক্রিপ্টোগ্রাফিক ও প্রটোকল নিয়মে প্রমাণ করার বৈজ্ঞানিক পদ্ধতি। অনিরাপদ পুরানো ধারণা বাদ দিয়ে আধুনিক প্রোডাকশন সিস্টেম মেমোরি-হার্ড পাসওয়ার্ড হ্যাশিং (Argon2id ও bcrypt), সুরক্ষিত কুকি সেশন, টাইম-বেসড ওয়ান-টাইম পাসওয়ার্ড (TOTP), OAuth ২.০ ও ওপেনআইডি কানেক্ট (PKCE সহ), ডিজিটাল স্বাক্ষরিত JSON ওয়েব টোকেন (JWT) এবং পরবর্তী প্রজন্মের FIDO2 WebAuthn পাসকি ব্যবহার করে। এই হাবে ক্রেডেনশিয়াল স্টাফিং, সেশন হাইজ্যাকিং, রিপ্লে অ্যাটাক ও টোকেন জালিয়াতি প্রতিরোধে একটি দুর্ভেদ্য পরিচয় যাচাই পাইপলাইন তৈরির পূর্ণাঙ্গ পাঠ দেওয়া হয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Identity Foundations & Password Hashing (L1–L2)',
        bn: 'ধাপ ১ — পরিচয়ের ভিত্তি ও পাসওয়ার্ড হ্যাশিং (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Meet Auth: The 3 factors of authentication, identification vs authentication vs authorization, and brute-force mitigation',
          bn: 'অথেনটিকেশন পরিচিতি: প্রমাণীকরণের ৩ টি ফ্যাক্টর, পরিচিতি বনাম প্রমাণীকরণ বনাম অনুমোদন এবং ব্রুট-ফোর্স প্রতিরোধ'
        },
        {
          en: 'Passwords & Hashing: The evolution from plaintext to Argon2id and bcrypt, cryptographic salts, peppers, and work factors',
          bn: 'পাসওয়ার্ড ও হ্যাশিং: প্লেইনটেক্সট থেকে Argon2id ও bcrypt এর বিবর্তন, ক্রিপ্টোগ্রাফিক সল্ট, পেপার এবং ওয়ার্ক ফ্যাক্টর'
        },
        {
          en: 'Milestone: Build an adaptive password verification engine that defends against GPU rainbow tables',
          bn: 'মাইলফলক: GPU রেইনবো টেবিল আক্রমণ প্রতিহতকারী একটি অ্যাডাপটিভ পাসওয়ার্ড ভেরিফিকেশন ইঞ্জিন তৈরি'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Sessions & Multi-Factor Defenses (L3–L4)',
        bn: 'ধাপ ২ — সেশন ব্যবস্থাপনা ও মাল্টি-ফ্যাক্টর সুরক্ষা (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Stateful Sessions & Cookie Security: HttpOnly, Secure, SameSite cookies, session fixation, and Redis-backed storage',
          bn: 'স্টেটফুল সেশন ও কুকি নিরাপত্তা: HttpOnly, Secure, SameSite কুকি, সেশন ফিক্সেশন এবং রেডিস ব্যাকড স্টোরেজ'
        },
        {
          en: 'Multi-Factor Authentication (MFA): TOTP RFC 6238, authenticator apps, drift windows, and backup recovery codes',
          bn: 'মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA): TOTP RFC ৬২৩৮, অথেনটিকেটর অ্যাপ, টাইম ড্রিফট উইন্ডো এবং ব্যাকআপ রিকভারি কোড'
        },
        {
          en: 'Milestone: Implement a two-factor login workflow with time-synchronized cryptographic OTP generation',
          bn: 'মাইলফলক: সময়-সমন্বিত ক্রিপ্টোগ্রাফিক OTP তৈরির মাধ্যমে একটি টু-ফ্যাক্টর লগইন সিস্টেম বাস্তবায়ন'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Federated Identity & Stateless Tokens (L5–L6)',
        bn: 'ধাপ ৩ — ফেডারেটেড আইডেন্টিটি ও স্টেটলেস টোকেন (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'OAuth 2.0 & OIDC Flows: Authorization code grant with PKCE RFC 7636, scopes, and third-party identity federation',
          bn: 'OAuth ২.০ ও OIDC ফ্লো: PKCE RFC ৭৬৩৬ সহ অথরাইজেশন কোড গ্রান্ট, স্কোপ এবং থার্ড-পার্টি আইডেন্টিটি ফেডারেশন'
        },
        {
          en: 'JSON Web Tokens (JWT): Header, claims, cryptographic signatures, key rotation, algorithm confusion attacks, and revocation',
          bn: 'JSON ওয়েব টোকেন (JWT): হেডার, ক্লেইমস, ডিজিটাল সিগনেচার, কি রোটেশন, অ্যালগরিদম কনফিউশন এবং টোকেন বাতিলকরণ'
        },
        {
          en: 'Milestone: Design an OAuth 2.0 PKCE authentication flow with cryptographically verified JWT issuance',
          bn: 'মাইলফলক: ক্রিপ্টোগ্রাফিক যাচাইযুক্ত JWT প্রদানকারী একটি সম্পূর্ণ OAuth ২.০ PKCE অথেনটিকেশন ফ্লো তৈরি'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Next-Gen Identity & Enterprise Capstone (L7–L8)',
        bn: 'ধাপ ৪ — আধুনিক পাসকি ও এন্টারপ্রাইজ ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Passwordless & Passkeys: WebAuthn, FIDO2 asymmetric public key cryptography, and biometric authentication',
          bn: 'পাসওয়ার্ডলেস ও পাসকি: WebAuthn, FIDO2 অ্যাসিমেট্রিক পাবলিক কি ক্রিপ্টোগ্রাফি এবং বায়োমেট্রিক প্রমাণীকরণ'
        },
        {
          en: 'Authentication Capstone: Production Identity Provider pipeline unifying hashing, sessions, TOTP, and JWT',
          bn: 'অথেনটিকেশন ক্যাপস্টোন: হ্যাশিং, সেশন, TOTP এবং JWT সমন্বিত একটি পূর্ণাঙ্গ প্রোডাকশন আইডেন্টিটি প্রোভাইডার পাইপলাইন'
        },
        {
          en: 'Milestone: Deploy a complete end-to-end identity gateway hardened against credential stuffing and replay attacks',
          bn: 'মাইলফলক: ক্রেডেনশিয়াল স্টাফিং ও রিপ্লে আক্রমণ প্রতিরোধে সক্ষম একটি পূর্ণাঙ্গ আইডেন্টিটি গেটওয়ে স্থাপন'
        },
      ],
    },
  ],
  projects: [
    {
      title: {
        en: 'Adaptive Password Hashing & Brute-Force Shield',
        bn: 'অ্যাডাপটিভ পাসওয়ার্ড হ্যাশিং ও ব্রুট-ফোর্স প্রতিরোধ শিল্ড'
      },
      brief: {
        en: 'Implements Argon2id password hashing with work factor tuning, cryptographic salt generation, and rate limiting.',
        bn: 'ওয়ার্ক ফ্যাক্টর টিউনিং, সল্ট জেনারেশন এবং রেট লিমিটিং সংবলিত Argon2id পাসওয়ার্ড হ্যাশিং ইঞ্জিন তৈরি করুন।'
      },
      difficulty: 'intermediate',
    },
    {
      title: {
        en: 'Time-Synchronized TOTP Two-Factor Authenticator',
        bn: 'সময়-সমন্বিত TOTP টু-ফ্যাক্টর অথেনটিকেটর'
      },
      brief: {
        en: 'Builds an RFC 6238 compliant TOTP engine with secret key generation, QR codes, and time-drift window tolerance.',
        bn: 'গোপন কি, কিউআর কোড এবং টাইম-ড্রিফট উইন্ডো সহনশীলতাসহ একটি RFC ৬২৩৮ সম্মত TOTP ইঞ্জিন তৈরি করুন।'
      },
      difficulty: 'advanced',
    },
    {
      title: {
        en: 'Federated OAuth 2.0 & JWT Identity Provider',
        bn: 'ফেডারেটেড OAuth ২.০ ও JWT আইডেন্টিটি প্রোভাইডার'
      },
      brief: {
        en: 'Implements an OAuth 2.0 Authorization Server with PKCE code challenges, RS256 token signing, and key rotation.',
        bn: 'PKCE কোড চ্যালেঞ্জ, RS256 টোকেন সাইনিং এবং কি রোটেশনযুক্ত একটি OAuth ২.০ অথরাইজেশন সার্ভার তৈরি করুন।'
      },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    {
      en: 'Always use memory-hard hashing algorithms like Argon2id or bcrypt with unique cryptographic salts for passwords; never use fast hashes like MD5 or SHA-256.',
      bn: 'পাসওয়ার্ড সংরক্ষণে সর্বদা ইউনিক সল্টসহ Argon2id বা bcrypt-এর মতো মেমোরি-হার্ড অ্যালগরিদম ব্যবহার করুন; MD5 বা SHA-২৫৬ এর মতো দ্রুত গতির হ্যাশ কখনোই ব্যবহার করবেন না।'
    },
    {
      en: 'Secure browser cookies with HttpOnly, Secure, and SameSite=Strict attributes to prevent JavaScript XSS token theft and CSRF attacks.',
      bn: 'জাভাস্ক্রিপ্ট XSS টোকেন চুরি ও CSRF আক্রমণ রুখতে ব্রাউজার কুকিতে সর্বদা HttpOnly, Secure এবং SameSite=Strict অ্যাট্রিবিউট প্রয়োগ করুন।'
    },
    {
      en: 'Enforce Multi-Factor Authentication using TOTP authenticator apps or FIDO2 hardware keys rather than SMS OTPs vulnerable to SIM swapping.',
      bn: 'সিম সোয়াপিং ঝুঁকিপূর্ণ এসএমএস ওটিপির পরিবর্তে TOTP অথেনটিকেটর অ্যাপ বা FIDO2 হার্ডওয়্যার কি ব্যবহার করে মাল্টি-ফ্যাক্টর অথেনটিকেশন কার্যকর করুন।'
    },
    {
      en: 'Always implement PKCE (Proof Key for Code Exchange) on OAuth 2.0 authorization code flows to prevent code interception on public and mobile clients.',
      bn: 'পাবলিক ও মোবাইল ক্লায়েন্টে অথরাইজেশন কোড চুরি ঠেকাতে OAuth ২.০ অথরাইজেশন কোড ফ্লোতে সর্বদা PKCE (Proof Key for Code Exchange) প্রয়োগ করুন।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental architectural difference between Identification, Authentication, and Authorization?',
        bn: 'আইডেন্টিফিকেশন (পরিচিতি), অথেনটিকেশন (প্রমাণীকরণ) এবং অথরাইজেশনের (অনুমোদন) মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'Identification is claiming who you are (e.g. typing a username or email). Authentication is proving that you truly are who you claim to be (e.g. verifying a password, TOTP code, or passkey). Authorization is determining what actions and resources you are permitted to access after your identity has been successfully authenticated (e.g. verifying role permissions like admin or user).',
        bn: 'আইডেন্টিফিকেশন হলো নিজেকে পরিচয় দেওয়া ( যেমন ইউজারনেম বা ইমেইল টাইপ করা )। অথেনটিকেশন হলো সেই দাবিকৃত পরিচয় সত্য কি না তা প্রমাণ করা ( যেমন পাসওয়ার্ড, TOTP কোড বা পাসকি যাচাই করা )। আর অথরাইজেশন হলো সফলভাবে প্রমাণিত পরিচয়ের ভিত্তিতে সেই ব্যক্তি কোন কোন ডেটা বা অ্যাকশন ব্যবহারের অনুমতি পাবে তা নির্ধারণ করা ( যেমন অ্যাডমিন বা সাধারণ ব্যবহারকারীর পারমিশন )। '
      },
    },
    {
      q: {
        en: 'How does Time-Based One-Time Password (TOTP RFC 6238) generate 6-digit codes without any internet communication between phone and server?',
        bn: 'ফোন এবং সার্ভারের মাঝে কোনো ইন্টারনেট যোগাযোগ ছাড়াই টাইম-বেসড ওয়ান-টাইম পাসওয়ার্ড (TOTP RFC ৬২৩৮) কীভাবে ৬ সংখ্যার কোড তৈরি করে?'
      },
      a: {
        en: 'Both the user phone and the server share a pre-shared cryptographic secret key and agree on the Unix epoch time divided into 30-second time steps. Both sides feed the shared secret and the current time counter into an HMAC-SHA1 algorithm independently. Because their system clocks and shared keys match, both sides calculate the identical 6-digit output without transmitting any verification requests over the network.',
        bn: 'ব্যবহারকারীর ফোন এবং সার্ভার উভয়ের কাছেই একটি গোপন শেয়ার্ড কি থাকে এবং উভয়ই ইউনিক্স টাইমকে ৩০ সেকেন্ডের ধাপে ভাগ করে নেয়। উভয় পক্ষই গোপন চাবি এবং বর্তমান সময় কাউন্টারকে HMAC-SHA1 অ্যালগরিদমে ইনপুট হিসেবে দেয়। তাদের ঘড়ির সময় এবং গোপন চাবি এক হওয়ায় কোনো ইন্টারনেট যোগাযোগ ছাড়াই উভয় প্রান্তে হুবহু একই ৬ সংখ্যার ওটিপি তৈরি হয়।'
      },
    },
    {
      q: {
        en: 'What is the architectural trade-off between Stateful Sessions and Stateless JSON Web Tokens (JWT)?',
        bn: 'স্টেটফুল সেশন এবং স্টেটলেস JSON ওয়েব টোকেনের (JWT) মধ্যে প্রধান আর্কিটেকচারাল সুবিধা ও অসুবিধা কী?'
      },
      a: {
        en: 'Stateful sessions store session data in a central store (like Redis), issuing an opaque random ID to a cookie. This enables instant revocation and logout, but requires database lookups on every request. Stateless JWTs embed signed claims inside the token, allowing microservices to verify identity independently without database queries; however, immediate token revocation is difficult before expiration without maintaining a token denylist.',
        bn: 'স্টেটফুল সেশনে ডেটাবেজ বা রেডিসে সেশন ডাটা সংরক্ষিত থাকে এবং ব্যবহারকারীকে একটি সাধারণ র্যান্ডম কুকি আইডি দেওয়া হয়। এর ফলে তাৎক্ষণিকভাবে যেকোনো সেশন বাতিল করা যায়, তবে প্রতিটি রিকোয়েস্টে ডাটাবেজ অনুসন্ধান করতে হয়। অন্যদিকে স্টেটলেস JWT-এর ভেতরেই সাইন করা তথ্য থাকে, ফলে কোনো ডাটাবেজ ছাড়াই মাইক্রোসার্ভিসগুলো সরাসরি সত্যতা যাচাই করতে পারে; তবে মেয়াদ শেষ হওয়ার আগে তাৎক্ষণিকভাবে টোকেন বাতিল করা কঠিন।'
      },
    },
    {
      q: {
        en: 'Why is PKCE (Proof Key for Code Exchange RFC 7636) mandatory in modern OAuth 2.0 authorization code flows?',
        bn: 'আধুনিক OAuth ২.০ অথরাইজেশন কোড ফ্লোতে PKCE (Proof Key for Code Exchange RFC ৭৬৩৬) কেন বাধ্যতামূলক?'
      },
      a: {
        en: 'In public clients (single-page applications and mobile apps), the client secret cannot be securely protected from decompilation. Attackers or malicious apps can intercept the authorization code returned via the browser redirect URL. PKCE solves this by generating a dynamic cryptographic code verifier and code challenge per transaction, ensuring that only the specific client instance that initiated the request can exchange the code for an access token.',
        bn: 'পাবলিক ক্লায়েন্টে ( মোবাইল অ্যাপ বা সিঙ্গেল পেজ ওয়েব অ্যাপ ) ক্লায়েন্ট সিক্রেট চাবি নিরাপদে লুকিয়ে রাখা অসম্ভব। ব্রাউজারের রিডাইরেক্ট ইউআরএল থেকে আক্রমণকারী অথরাইজেশন কোডটি চুরি করে নিতে পারে। PKCE প্রতি লেনদেনে একটি পরিবর্তনশীল ক্রিপ্টোগ্রাফিক কোড ভেরিফায়ার ও চ্যালেঞ্জ তৈরি করে এই ঝুঁকি দূর করে, যা নিশ্চিত করে যে ক্লায়েন্ট ইনস্ট্যান্স রিকোয়েস্ট শুরু করেছিল কেবল সেই কোড বদলে এক্সেস টোকেন পেতে পারে।'
      },
    },
  ],
  realWorld: [
    {
      en: 'Argon2id & bcrypt: Battle-tested memory-hard hashing algorithms designed specifically to withstand massively parallel GPU and ASIC password-cracking hardware.',
      bn: 'Argon2id এবং bcrypt: অত্যন্ত নির্ভরযোগ্য মেমোরি-হার্ড পাসওয়ার্ড হ্যাশিং অ্যালগরিদম যা আধুনিক প্যারালাল GPU এবং ASIC হার্ডওয়্যার আক্রমণ প্রতিহত করার জন্য নির্মিত।'
    },
    {
      en: 'Redis Session Store: Ultra-low-latency in-memory data store utilized globally for centralizing high-throughput user session state and real-time token revocations.',
      bn: 'রেডিস সেশন স্টোর: উচ্চগতির ইন-মেমোরি ডাটাবেজ যা বিশ্বজুড়ে ব্যবহারকারীদের সেশন সংরক্ষণ এবং রিয়েল-টাইমে সেশন বাতিলের জন্য ব্যাপকভাবে ব্যবহৃত হয়।'
    },
    {
      en: 'OAuth 2.0 & OpenID Connect: The industry-standard identity and authorization federation framework powering Sign in with Google, GitHub, and enterprise single sign-on.',
      bn: 'OAuth ২.০ এবং ওপেনআইডি কানেক্ট: বিশ্বমানের পরিচয় ও অনুমোদন ফ্রেমওয়ার্ক যা গুগল, গিটহাব এবং বাণিজ্যিক এন্টারপ্রাইজ সিঙ্গেল সাইন-অন (SSO) পরিচালনা করে।'
    },
    {
      en: 'FIDO2 & WebAuthn: W3C web standard delivering phishing-resistant biometric authentication and passkeys supported natively across modern browsers and operating systems.',
      bn: 'FIDO2 এবং WebAuthn: W3C অনুমোদিত আধুনিক ওয়েব স্ট্যান্ডার্ড যা ফিঙ্গারপ্রিন্ট, ফেস আনলক বা সিকিউরিটি কি-এর মাধ্যমে ফিশিং-মুক্ত পাসকি অথেনটিকেশন প্রদান করে।'
    },
  ],
  lessons: [
    MeetAuthLesson,
    PasswordsHashingLesson,
    SessionsTokensLesson,
    MfaBasicsLesson,
    OauthFlowsLesson,
    JwtTokensLesson,
    PasswordlessAuthLesson,
    AuthCapstoneLesson,
  ],
};
