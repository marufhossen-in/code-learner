import type { Lesson } from '../../../lib/types';

export const problemDocketLesson: Lesson = {
  slug: 'the-problem-docket',
  tech: 'rest',
  title: {
    en: 'The Problem Docket: RFC 7807, RFC 9457 & RESTful Error Architecture',
    bn: 'সমস্যা-দস্তুর: RFC 7807, RFC 9457 ও RESTful এরর আর্কিটেকচার'
  },
  summary: {
    en: 'Master standardized RESTful error handling across 10 structured topics. Eradicate ad-hoc error formats using RFC 7807 and RFC 9457 (application/problem+json). Master the five core problem fields: type, title, status, detail, and instance. Structure multi-field validation errors cleanly. Distinguish 400 Bad Request from 422 Unprocessable Entity and 409 Conflict. Protect backend secrets from stack trace leakage. Implement correlation IDs, client SDK error mapping, and centralized Express error middleware.',
    bn: '১০টি সুসংগঠিত পয়েন্টে মানসম্মত RESTful এরর হ্যান্ডলিং আর্কিটেকচার আয়ত্ত করুন। RFC 7807 এবং RFC 9457 (application/problem+json) স্ট্যান্ডার্ড দিয়ে এলোমেলো এরর ফরম্যাট বন্ধ করুন। সমস্যা দলিলের ৫টি মূল ফিল্ড শিখুন: type, title, status, detail এবং instance। একাধিক ফিল্ডের ভ্যালিডেশন এরর সাজানো শিখুন। ৪০০ Bad Request বনাম ৪২২ Unprocessable Entity ও ৪০৯ Conflict-এর পার্থক্য বুঝুন। স্ট্যাক ট্রেস ফাঁস রোধ, কোরিলেশন আইডি এবং এক্সপ্রেসের সেন্ট্রালাইজড এরর মিডলওয়্যার বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-reading-window',
    tech: 'rest',
    title: {
      en: 'The Reading Window: Offset, Keyset & Cursor-Based Pagination',
      bn: 'পাঠ-জানালা: অফসেট, কিসেট ও কার্সর-ভিত্তিক পেজিনেশন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Chaos of Custom Errors: Why Standardization Matters', bn: '১. নিজস্ব এরর ফরম্যাটের বিশৃঙ্খলা: মানদণ্ডের প্রয়োজনীয়তা' } },
    {
      type: 'para',
      text: {
        en: 'Before formal error specifications, every backend team invented arbitrary JSON error payloads: { error: "Failed" }, { err_msg: "Invalid" }, or { success: false, code: 99 }. This forces client developers to write custom, fragile parsing logic for every third-party API. Standardizing errors transforms API failures into machine-readable contracts.',
        bn: 'আন্তর্জাতিক এরর মানদণ্ড তৈরির পূর্বে প্রতিটি কোম্পানি নিজেদের মতো করে ভুল রেসপন্স তৈরি করত: { error: "Failed" }, { err_msg: "Invalid" } কিংবা { success: false, code: 99 }। ফলে ক্লায়েন্ট ডেভেলপারদের প্রতিটি সার্ভিসের জন্য আলাদা ভঙ্গুর পার্সিং কোড লিখতে হতো। এররকে একটি আন্তর্জাতিক কাঠামোর অধীনে আনলে সফটওয়্যারগুলো নিজে থেকেই ভুল বুঝতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ AD-HOC ERROR FRAGMENTATION:
Service A: { "error": "User not found" }
Service B: { "status": "FAIL", "message": "Record missing", "code": 404 }
Service C: { "errors": ["User not found"], "success": false }

✅ RFC 9457 GLOBAL STANDARD:
Media Type: application/problem+json
Single predictable schema shared across the entire industry ecosystem!`,
      caption: {
        en: 'Standardizing error formats eliminates custom error parsing across client libraries.',
        bn: 'এরর ফরম্যাট মানসম্মত করলে ক্লায়েন্ট লাইব্রেরিতে অতিরিক্ত পার্সিং কোড লেখার ঝামেলা দূর হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Global Standard: RFC 7807 & RFC 9457 Problem Details', bn: '২. আন্তর্জাতিক মানদণ্ড: RFC 7807 ও RFC 9457 সমস্যা দলিল' } },
    {
      type: 'para',
      text: {
        en: 'IETF RFC 9457 (superseding RFC 7807) defines "Problem Details for HTTP APIs" using the media type application/problem+json. It establishes a uniform, extensible schema that bridges human-readable explanations with machine-readable error identifiers.',
        bn: 'IETF RFC 9457 (পূর্ববর্তী RFC 7807) এপিআই ত্রুটি বর্ণনার জন্য application/problem+json মিডিয়া টাইপ প্রতিষ্ঠা করেছে। এটি একটি সার্বজনীন ও সম্প্রসারণযোগ্য কাঠামো তৈরি করে যা মানুষের সহজে বোঝার ব্যাখ্যার সাথে মেশিনের জন্য প্রয়োজনীয় এরর কোডের নিখুঁত সমন্বয় ঘটায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 403 Forbidden
Content-Type: application/problem+json
Content-Language: en

{
  "type": "https://api.codeshikhon.com/errors/insufficient-credit",
  "title": "Insufficient Account Balance",
  "status": 403,
  "detail": "Your balance of 40 BDT is lower than the required 500 BDT fee.",
  "instance": "/accounts/12/transactions/tx_94821"
}`,
      caption: {
        en: 'RFC 9457 Problem Details format provides an unambiguous, self-describing error schema.',
        bn: 'RFC 9457 সমস্যা দলিল একটি স্পষ্ট ও স্ব-বর্ণনামূলক এরর কাঠামো তৈরি করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'RFC 9457 Problem Details Schema Anatomy', bn: 'RFC 9457 প্রবলেম ডিটেইলস স্কিমার গঠন' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="RFC 9457 Problem Details Schema Breakdown"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="670" height="200" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="350" y="38" text-anchor="middle" font-weight="bold">RFC 9457 / RFC 7807: application/problem+json</text><rect x="30" y="55" width="120" height="145" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="90" y="75" text-anchor="middle" font-weight="bold" fill="#ef4444">type</text><text x="90" y="95" text-anchor="middle" font-size="11">URI Identifier</text><text x="90" y="125" text-anchor="middle" font-size="10">Stable error</text><text x="90" y="140" text-anchor="middle" font-size="10">classification link</text><text x="90" y="175" text-anchor="middle" font-size="9" fill="#ef4444">Machine contract</text><rect x="160" y="55" width="120" height="145" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="220" y="75" text-anchor="middle" font-weight="bold" fill="#f59e0b">title</text><text x="220" y="95" text-anchor="middle" font-size="11">Static summary</text><text x="220" y="125" text-anchor="middle" font-size="10">Human-readable</text><text x="220" y="140" text-anchor="middle" font-size="10">category name</text><text x="220" y="175" text-anchor="middle" font-size="9" fill="#f59e0b">Constant per type</text><rect x="290" y="55" width="120" height="145" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="350" y="75" text-anchor="middle" font-weight="bold" fill="#3b82f6">status</text><text x="350" y="95" text-anchor="middle" font-size="11">HTTP Status</text><text x="350" y="125" text-anchor="middle" font-size="10">Matches wire</text><text x="350" y="140" text-anchor="middle" font-size="10">status code</text><text x="350" y="175" text-anchor="middle" font-size="9" fill="#3b82f6">e.g. 400, 422, 404</text><rect x="420" y="55" width="120" height="145" rx="6" fill="none" stroke="#8b5cf6" stroke-width="1"/><text x="480" y="75" text-anchor="middle" font-weight="bold" fill="#8b5cf6">detail</text><text x="480" y="95" text-anchor="middle" font-size="11">Incident detail</text><text x="480" y="125" text-anchor="middle" font-size="10">Specific context</text><text x="480" y="140" text-anchor="middle" font-size="10">for this failure</text><text x="480" y="175" text-anchor="middle" font-size="9" fill="#8b5cf6">Dynamic text</text><rect x="550" y="55" width="120" height="145" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="610" y="75" text-anchor="middle" font-weight="bold" fill="#10b981">instance</text><text x="610" y="95" text-anchor="middle" font-size="11">Trace / URI</text><text x="610" y="125" text-anchor="middle" font-size="10">Correlation ID</text><text x="610" y="140" text-anchor="middle" font-size="10">for server logs</text><text x="610" y="175" text-anchor="middle" font-size="9" fill="#10b981">Telemetry sync</text></g></svg>`,
      caption: {
        en: 'RFC 9457 standardizes error responses with five core members combining machine identifiers and human diagnosis.',
        bn: 'RFC 9457 ৫টি সুনির্দিষ্ট ফিল্ডের মাধ্যমে মেশিনের নির্ভুলতা ও মানুষের বোধগম্যতা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Five Core Problem Fields: Anatomy of a Refusal', bn: '৩. সমস্যা দলিলের পাঁচটি মূল ফিল্ড: প্রত্যাখ্যানের গঠন' } },
    {
      type: 'para',
      text: {
        en: 'An RFC 9457 problem document standardizes five primary members. The type URI categorizes the error. The title provides a static summary. The status mirrors the HTTP code. The detail gives an incident-specific explanation, and instance tracks the occurrence.',
        bn: 'একটি RFC 9457 সমস্যা দলিলে ৫টি প্রধান অংশ থাকে। type URI ভুলের বিভাগ চিহ্নিত করে। title ভুলের সংক্ষিপ্ত শিরোনাম দেয়। status কোড রেসপন্সের সাথে হুবহু মেলে। detail অংশে ভুলের নির্দিষ্ট কারণ থাকে এবং instance ফিল্ড ট্র্যাকিং আইডি প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+-----------+-----------------------------------------------------+-------------------------------------------------------+
| Member    | Definition                                          | Concrete Example                                      |
+-----------+-----------------------------------------------------+-------------------------------------------------------+
| type      | URI identifying problem category                    | https://api.codeshikhon.com/errors/out-of-stock       |
| title     | Static human summary for this problem type          | Product Out of Stock                                  |
| status    | HTTP status code integer                            | 409                                                   |
| detail    | Specific explanation of this exact incident         | Item 'Mechanical Keyboard' has 0 remaining units.     |
| instance  | Unique URI identifier for this refusal incident     | /orders/8842/items/item_991                           |
+-----------+-----------------------------------------------------+-------------------------------------------------------+`,
      caption: {
        en: 'The five core members provide complete forensic diagnostics for every API rejection.',
        bn: 'এই পাঁচটি মূল ফিল্ড যেকোনো এপিআই প্রত্যাখ্যানের পুঙ্খানুপুঙ্খ তথ্য সরবরাহ করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Extension Members: Multi-Field Validation Errors', bn: '৪. এক্সটেনশন ফিল্ড: একাধিক ফিল্ডের ভ্যালিডেশন এরর' } },
    {
      type: 'para',
      text: {
        en: 'When a submitted form contains multiple validation errors, RFC 9457 permits custom extension members. The industry convention attaches an invalid-params array containing the specific field name, validation rule violated, and user-friendly error message.',
        bn: 'যখন কোনো সাবমিট করা ফর্মে একাধিক ভুল থাকে, তখন RFC 9457 কাস্টম এক্সটেনশন ফিল্ড ব্যবহারের সুযোগ দেয়। ইন্ডাস্ট্রির আদর্শ নিয়ম হলো invalid-params নামের একটি অ্যারে যোগ করা যাতে ভুল হওয়া ফিল্ডের নাম, ভুলের নিয়ম এবং সহজ বার্তা সাজানো থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "type": "https://api.codeshikhon.com/errors/validation-failed",
  "title": "Validation Failed",
  "status": 422,
  "detail": "The payload contains 2 invalid fields.",
  "instance": "/users/registration",
  "invalid-params": [
    {
      "name": "email",
      "reason": "Must be a valid RFC 5322 email address"
    },
    {
      "name": "password",
      "reason": "Must contain at least 8 characters including one number"
    }
  ]
}`,
      caption: {
        en: 'The invalid-params extension cleanly details multiple field-level validation failures.',
        bn: 'invalid-params এক্সটেনশনটি ফর্মের প্রতিটি নির্দিষ্ট ফিল্ডের ভুল পরিষ্কারভাবে তুলে ধরে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Semantic Status Codes: 400 vs 409 vs 422', bn: '৫. সঠিক স্ট্যাটাস কোড নির্বাচন: 400 বনাম 409 বনাম 422' } },
    {
      type: 'para',
      text: {
        en: 'Selecting the correct 4xx status code is critical for client error recovery: 1) 400 Bad Request: Syntax error, malformed JSON, or invalid query characters. 2) 409 Conflict: Request is valid, but collides with current server state (e.g. email already registered). 3) 422 Unprocessable Entity: Request is valid JSON, but business logic validation fails (e.g. quantity must be positive).',
        bn: 'সঠিক 4xx স্ট্যাটাস কোড ব্যবহার ক্লায়েন্টকে দ্রুত ভুল সংশোধনে সাহায্য করে: ১) 400 Bad Request: সিনট্যাক্স এরর, ভাঙা জেসন ফাইল বা ভুল কুয়েরি। ২) 409 Conflict: ফরম্যাট ঠিক আছে কিন্তু ডাটাবেসের বর্তমান অবস্থার সাথে সংঘর্ষ হয়েছে (যেমন এই ইমেইলে আগেই একাউন্ট আছে)। ৩) 422 Unprocessable Entity: জেসন সিনট্যাক্স বৈধ কিন্তু ব্যবসায়িক নিয়ম ভঙ্গের কারণে অচল (যেমন পণ্যের সংখ্যা নেগেটিভ)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Choosing the accurate error status code:
function categorizeError(err) {
  if (err.name === "SyntaxError") {
    return 400; // Malformed JSON payload
  }
  if (err.code === "ER_DUP_ENTRY") {
    return 409; // State collision (e.g. duplicate username)
  }
  if (err.name === "ValidationError") {
    return 422; // Well-formed payload failing business constraints
  }
  return 500;   // Unhandled internal server exception
}

console.log("Duplicate email status:", categorizeError({ code: "ER_DUP_ENTRY" })); // 409
console.log("Validation error status:", categorizeError({ name: "ValidationError" })); // 422`,
      caption: {
        en: 'Distinguish syntax errors (400) from state conflicts (409) and semantic errors (422).',
        bn: 'সিনট্যাক্স ত্রুটি (৪০০), স্টেট কনফ্লিক্ট (৪০৯) এবং ব্যবসায়িক নিয়মের ভুল (৪২২)-কে আলাদা রাখুন।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Security in Errors: Preventing Stack Trace & Secret Leaks', bn: '৬. এররে নিরাপত্তা: স্ট্যাক ট্রেস ও সিক্রেট ফাঁস রোধ' } },
    {
      type: 'para',
      text: {
        en: 'Leaking internal database connection strings, SQL queries, or file paths in API error responses is an OWASP Top 10 security vulnerability (Security Misconfiguration). In production environments, internal exceptions must be logged privately to a telemetry system while returning generic problem details to external callers.',
        bn: 'এপিআই এররের ভেতরে ভেতরের ডাটাবেস কোয়েরি, ফাইল পাথ বা কোডের স্ট্যাক ট্রেস উন্মুক্ত করা একটি মারাত্মক OWASP শীর্ষ ১০ নিরাপত্তা ত্রুটি। প্রোডাকশনে সিস্টেমের ভেতরের এররগুলোকে নিজস্ব লগিং সিস্টেমে গোপন রাখতে হয় এবং বাইরের ব্যবহারকারীকে শুধুই নিরাপদ ও পরিচ্ছন্ন বার্তা দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ DANGEROUS SECURITY LEAK:
{
  "error": "Database error: connect ECONNREFUSED 10.0.4.12:5432 at /var/app/db.js:42",
  "stack": "Error: ... at pg.connect (pg.js:104)"
}
(Attackers now know internal IP addresses, database engine, and file paths!)

✅ SECURE PROBLEM DETAILS:
{
  "type": "https://api.codeshikhon.com/errors/internal-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred. Please contact support with trace ID.",
  "instance": "/errors/trace_94812"
}`,
      caption: {
        en: 'Sanitize production errors: log technical details internally and return safe messages.',
        bn: 'প্রোডাকশন এরর নিরাপদ রাখুন: কারিগরি তথ্য নিজস্ব লগে রাখুন এবং নিরাপদ মেসেজ পাঠান।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Traceability: Correlation IDs & The instance Field', bn: '৭. ট্রেসেবিলিটি: কোরিলেশন আইডি ও instance ফিল্ড' } },
    {
      type: 'para',
      text: {
        en: 'When a customer contacts support reporting an error, engineers need to locate the corresponding server logs instantly. The instance field in RFC 9457 provides a unique URI or trace ID for that specific failure. Passing an X-Correlation-ID header across microservices correlates logs end-to-end.',
        bn: 'ইউজার যখন কোনো এররের অভিযোগ জানায়, ইঞ্জিনিয়ারদের তৎক্ষণাৎ সার্ভারের আসল লগটি খুঁজে বের করতে হয়। RFC ৯৪৫৭ এর instance ফিল্ড প্রতিটি ভুলের জন্য একটি ইউনিক ট্র্যাকিং আইডি প্রদান করে। মাইক্রোসার্ভিস জুড়ে X-Correlation-ID হেডার পাস করলে মুহূর্তের মধ্যে সব সার্ভারের লগ মেলানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import crypto from "crypto";

function buildProblemResponse(status, type, title, detail, req) {
  // Generate unique trace ID for log correlation:
  const traceId = req.headers["x-correlation-id"] || crypto.randomUUID();

  return {
    type: \`https://api.codeshikhon.com/errors/\${type}\`,
    title,
    status,
    detail,
    instance: \`/errors/traces/\${traceId}\`
  };
}

console.log("Problem response includes instance trace identifier");
// Output: Problem response includes instance trace identifier`,
      caption: {
        en: 'Correlation IDs bridge client-facing error screens directly to distributed server logs.',
        bn: 'কোরিলেশন আইডি ক্লায়েন্টের এরর স্ক্রিনকে সরাসরি সার্ভারের আসল লগের সাথে সংযুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Machine-Readable type: Driving Client SDK Exception Hierarchies', bn: '৮. মেশিন-পাঠযোগ্য type: ক্লায়েন্ট SDK-র এক্সেপশন ম্যাপিং' } },
    {
      type: 'para',
      text: {
        en: 'Client SDKs should never parse human error message strings (e.g. checking if msg.includes("limit")). Text changes during copywriting or translation will break client logic. Instead, client SDKs evaluate the stable type URI, mapping each distinct type directly to custom strongly-typed exception classes.',
        bn: 'ক্লায়েন্ট সফটওয়্যারে কখনোই মানুষের পড়ার মেসেজ স্ট্রিং মেলানো (যেমন msg.includes("limit")) উচিত নয়। মেসেজের কোনো শব্দ পাল্টালেই ক্লায়েন্ট কোড ভেঙে যাবে। এর বদলে ক্লায়েন্টকে সর্বদা স্থির type URI যাচাই করতে হয়, যা সরাসরি নির্দিষ্ট এক্সেপশন ক্লাসের সাথে যুক্ত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Resilient SDK error mapping driven by RFC 9457 "type":
class InsufficientFundsError extends Error {}
class RateLimitExceededError extends Error {}

function handleApiError(problemJson) {
  switch (problemJson.type) {
    case "https://api.codeshikhon.com/errors/insufficient-credit":
      throw new InsufficientFundsError(problemJson.detail);
    case "https://api.codeshikhon.com/errors/rate-limit-exceeded":
      throw new RateLimitExceededError(problemJson.detail);
    default:
      throw new Error(problemJson.title || "Unknown API Error");
  }
}

console.log("Client SDKs branch on type URIs, never on human message strings");
// Output: Client SDKs branch on type URIs, never on human message strings`,
      caption: {
        en: 'Type URIs enable reliable, machine-readable exception routing across client SDKs.',
        bn: 'টাইপ ইউআরআই ক্লায়েন্ট লাইব্রেরিতে সুনির্দিষ্ট এক্সেপশন তৈরি করার নিশ্চয়তা দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Internationalization (i18n): Translating Errors Safely', bn: '৯. আন্তর্জাতিকীকরণ (i18n): নিরাপদে এরর অনুবাদ করা' } },
    {
      type: 'para',
      text: {
        en: 'APIs can localize error messages by inspecting the client Accept-Language request header. The server translates the title and detail members into the target language (e.g. Bengali) while leaving the type URI and status code completely unchanged so machine automation remains intact.',
        bn: 'ক্লায়েন্টের পাঠানো Accept-Language হেডার দেখে সার্ভার এরর মেসেজ অনুবাদ করতে পারে। সার্ভার title এবং detail অংশগুলোকে বাংলায় রূপান্তর করে দেয়, কিন্তু type URI এবং status কোড অপরিবর্তিত রাখে যাতে কোনো ক্লায়েন্ট সফটওয়্যার নষ্ট না হয়।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `/* Translated RFC 9457 error response in Bengali: */
{
  "type": "https://api.codeshikhon.com/errors/insufficient-credit",
  "title": "হিসাবে পর্যাপ্ত ব্যালেন্স নেই",
  "status": 403,
  "detail": "আপনার বর্তমান ব্যালেন্স ৪০ টাকা, যা প্রয়োজনীয় ৫০০ টাকার চেয়ে কম।",
  "instance": "/errors/traces/tx_94821"
}`,
      caption: {
        en: 'Localized title and detail members provide localized UX while preserving machine contracts.',
        bn: 'অনূদিত শিরোনাম ও বিবরণ চমৎকার ইউজার অভিজ্ঞতা দেয় এবং সফটওয়্যার চুক্তি অক্ষত রাখে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Centralized RFC 9457 Error Middleware in Express', bn: '১০. এক্সপ্রেস-এ সেন্ট্রালাইজড RFC 9457 এরর মিডলওয়্যার তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'A centralized Express error middleware captures all thrown exceptions across routers, formats them into compliant application/problem+json payloads, and suppresses internal stack traces in production.',
        bn: 'একটি সেন্ট্রালাইজড এক্সপ্রেস এরর মিডলওয়্যার অ্যাপ্লিকেশনের সব এররকে এক জায়গায় ধরে, সেগুলোকে আন্তর্জাতিক application/problem+json ফরম্যাটে সাজায় এবং প্রোডাকশনে অপ্রয়োজনীয় স্ট্যাক ট্রেস আটকে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
const app = express();

// Centralized RFC 9457 Error Handler:
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const isProduction = process.env.NODE_ENV === "production";

  const problem = {
    type: err.type || "https://api.codeshikhon.com/errors/internal-error",
    title: err.title || "An unexpected error occurred",
    status,
    detail: err.detail || err.message,
    instance: req.originalUrl,
    ...(!isProduction && { stack: err.stack })
  };

  // Set official problem+json media type:
  res.status(status).type("application/problem+json").json(problem);
});

console.log("Centralized error middleware guarantees compliant problem+json responses");
// Output: Centralized error middleware guarantees compliant problem+json responses`,
      caption: {
        en: 'Centralized error handlers guarantee that every failure returns valid problem+json.',
        bn: 'সেন্ট্রালাইজড এরর হ্যান্ডলার প্রতিটি ব্যর্থতায় সঠিক problem+json রেসপন্স পাঠানোর নিশ্চয়তা দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-prb-ex1',
      kind: 'predict',
      topic: 'rest: RFC 9457 official MIME media type',
      question: {
        en: 'What is the official IANA MIME content-type header for RFC 9457 Problem Details JSON documents?',
        bn: 'RFC 9457 সমস্যা দলিল JSON ফাইলের জন্য অফিসিয়াল IANA MIME কনটেন্ট-টাইপ কোনটি?'
      },
      code: `/* Standard Problem Details Content-Type header */
/* Content-Type: application/__________+json */`,
      answer: 'problem',
      accept: ['problem', 'application/problem+json'],
      hint: {
        en: 'application/problem+json.',
        bn: 'application/problem+json.'
      },
      explanation: {
        en: 'application/problem+json is the standard MIME media type defined by RFC 7807 and RFC 9457.',
        bn: 'application/problem+json হলো RFC 7807 ও RFC 9457 দ্বারা অনুমোদিত স্ট্যান্ডার্ড মিডিয়া টাইপ।'
      }
    },
    {
      id: 'rst-prb-ex2',
      kind: 'mcq',
      topic: 'rest: 422 vs 400 distinction',
      question: {
        en: 'Which HTTP status code is most appropriate when a JSON payload is syntactically valid but fails business logic constraints (e.g. quantity is negative)?',
        bn: 'যখন কোনো জেসন ফাইলের গঠন শতভাগ ঠিক থাকে কিন্তু ভেতরের ব্যবসায়িক নিয়ম ভঙ্গ হয় (যেমন পণ্যের সংখ্যা নেগেটিভ), তখন কোন HTTP স্ট্যাটাস কোডটি সবচেয়ে উপযুক্ত?'
      },
      options: [
        { en: '422 Unprocessable Entity', bn: '422 Unprocessable Entity' },
        { en: '400 Bad Request', bn: '400 Bad Request' },
        { en: '502 Bad Gateway', bn: '502 Bad Gateway' },
        { en: '404 Not Found', bn: '404 Not Found' }
      ],
      answer: 0,
      hint: {
        en: 'Status 422.',
        bn: 'স্ট্যাটাস ৪২২।'
      },
      explanation: {
        en: 'HTTP 422 Unprocessable Entity indicates that the server understands the content syntax but is unable to process the contained semantic instructions.',
        bn: 'HTTP 422 নির্দেশ করে যে সার্ভার জেসন বুঝতে পেরেছে কিন্তু ভেতরের ব্যবসায়িক নিয়ম ভঙ্গের কারণে কাজ করতে পারছে না।'
      }
    },
    {
      id: 'rst-prb-ex3',
      kind: 'mcq',
      topic: 'rest: RFC 9457 type member requirement',
      question: {
        en: 'In an RFC 9457 Problem Details object, what format is strictly required for the "type" property?',
        bn: 'RFC 9457 সমস্যা দলিলের "type" প্রোপার্টিতে বাধ্যতামূলকভাবে কোন ফরম্যাটের মান দিতে হয়?'
      },
      options: [
        { en: 'A URI reference identifying the problem category', bn: 'একটি সুনির্দিষ্ট URI যা ভুলের ধরনকে আন্তর্জাতিকভাবে চিহ্নিত করে' },
        { en: 'An integer number between 1 and 100', bn: '১ থেকে ১০০ এর মধ্যবর্তী কোনো সংখ্যা' },
        { en: 'A Base64 string', bn: 'একটি Base64 স্ট্রিং' },
        { en: 'A CSS class selector', bn: 'একটি সিএসএস ক্লাস' }
      ],
      answer: 0,
      hint: {
        en: 'A URI reference.',
        bn: 'একটি URI রেফারেন্স।'
      },
      explanation: {
        en: 'RFC 9457 mandates that the type member must be a URI reference that identifies the specific problem type classification.',
        bn: 'RFC 9457 অনুযায়ী type ফিল্ডে অবশ্যই ভুলের বিভাগ নির্দেশকারী একটি URI থাকতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'rst-prb-quiz',
    title: { en: 'RESTful Error Architecture & RFC 9457 Quiz', bn: 'RESTful এরর আর্কিটেকচার ও RFC 9457 কুইজ' },
    questions: [
      {
        id: 'rpq1',
        kind: 'mcq',
        topic: 'rest: stack trace security risk',
        question: {
          en: 'Why is leaking database errors and full code stack traces in production API responses considered a severe security vulnerability?',
          bn: 'প্রোডাকশন এপিআই রেসপন্সে ডাটাবেসের অভ্যন্তরীণ এরর এবং কোডের স্ট্যাক ট্রেস প্রকাশ করা কেন মারাত্মক নিরাপত্তা ত্রুটি?'
        },
        options: [
          { en: 'It reveals internal architecture, database versions, SQL queries, and file paths to attackers (OWASP Security Misconfiguration)', bn: 'এটি আক্রমণকারীর কাছে সার্ভারের অভ্যন্তরীণ আর্কিটেকচার, ডাটাবেস ভার্সন, এসকিউএল কোয়েরি ও ফাইল পাথ ফাঁস করে দেয়' },
          { en: 'Because stack traces make the font size smaller', bn: 'ফন্ট সাইজ ছোট হয়ে যায়' },
          { en: 'It slows down DNS lookup times', bn: 'ডিএনএস লুকআপ ধীরগতির হয়' },
          { en: 'It disables TLS certificates', bn: 'টিএলএস সার্টিফিকেট অকেজো করে' }
        ],
        answer: 0,
        hint: {
          en: 'Leaking internal infrastructure details to attackers.',
          bn: 'আক্রমণকারীর কাছে অভ্যন্তরীণ কাঠামোর তথ্য ফাঁস।'
        },
        explanation: {
          en: 'Detailed technical stack traces arm adversaries with exact knowledge of backend frameworks, file hierarchies, and database vulnerabilities.',
          bn: 'স্ট্যাক ট্রেস আক্রমণকারীকে সার্ভারের সব গোপন কাঠামোর সন্ধান দিয়ে দেয়, যা সিস্টেম হ্যাক করার পথ খুলে দেয়।'
        }
      },
      {
        id: 'rpq2',
        kind: 'mcq',
        topic: 'rest: RFC 9457 instance property',
        question: {
          en: 'What is the intended purpose of the "instance" property in an RFC 9457 problem details document?',
          bn: 'RFC 9457 সমস্যা দলিলে "instance" প্রোপার্টির মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To supply a unique URI or trace identifier that points to the specific occurrence of the problem for log correlation', bn: 'একটি অনন্য ট্র্যাকিং URI বা ট্রেস আইডি দেওয়া যার সাহায্যে নির্দিষ্ট এই ঘটনাটির সার্ভার লগ খুঁজে পাওয়া যায়' },
          { en: 'To name the cloud provider company', bn: 'ক্লাউড কোম্পানির নাম দেওয়া' },
          { en: 'To count total website visitors', bn: 'ওয়েবসাইট ভিজিটর গণনা করা' },
          { en: 'To store user passwords', bn: 'পাসওয়ার্ড সেভ রাখা' }
        ],
        answer: 0,
        hint: {
          en: 'Identifies the specific occurrence for log correlation.',
          bn: 'নির্দিষ্ট ঘটনার ট্র্যাকিং ও লগের সাথে মেলানোর জন্য।'
        },
        explanation: {
          en: 'The instance URI points to the specific occurrence of the problem, allowing support engineers to cross-reference customer tickets directly to backend logs.',
          bn: 'instance ইউআরআই নির্দিষ্ট ঘটনাটিকে নির্দেশ করে যাতে কাস্টমার সাপোর্টের অভিযোগের সাথে সার্ভার লগ সরাসরি মেলানো যায়।'
        }
      },
      {
        id: 'rpq3',
        kind: 'mcq',
        topic: 'rest: 429 rate limit retry-after header',
        question: {
          en: 'When a rate limiter responds with "HTTP 429 Too Many Requests", which standard header tells the client how many seconds to wait before retrying?',
          bn: 'রেট লিমিটার যখন "HTTP 429 Too Many Requests" পাঠায়, তখন ক্লায়েন্টকে কত সেকেন্ড অপেক্ষা করতে হবে তা জানাতে কোন স্ট্যান্ডার্ড হেডার ব্যবহার করা হয়?'
        },
        options: [
          { en: 'Retry-After (e.g. Retry-After: 30 or an HTTP date)', bn: 'Retry-After (যেমন Retry-After: 30 অথবা একটি নির্দিষ্ট তারিখ)' },
          { en: 'Wait-Time', bn: 'Wait-Time' },
          { en: 'Pause-Request', bn: 'Pause-Request' },
          { en: 'X-Cooldown-Seconds', bn: 'X-Cooldown-Seconds' }
        ],
        answer: 0,
        hint: {
          en: 'The standard Retry-After header.',
          bn: 'স্ট্যান্ডার্ড Retry-After হেডার।'
        },
        explanation: {
          en: 'The Retry-After HTTP response header instructs throttled clients when they may attempt their request again without being blocked.',
          bn: 'Retry-After হেডার ক্লায়েন্টকে জানিয়ে দেয় ঠিক কত সময় পর রিকোয়েস্ট পাঠালে তা গ্রহণ করা হবে।'
        }
      },
      {
        id: 'rpq4',
        kind: 'mcq',
        topic: 'rest: problem details extension members',
        question: {
          en: 'How does RFC 9457 accommodate domain-specific validation error details, such as multiple form input failures?',
          bn: 'RFC 9457 ফর্মের একাধিক ইনপুট ভ্যালিডেশন ব্যর্থতা বা নির্দিষ্ট ব্যবসায়িক তথ্য পাঠানোর জন্য কোন পদ্ধতি অনুমোদন করে?'
        },
        options: [
          { en: 'By defining extension members (e.g. "invalid-params": [{ name, reason }]) alongside the 5 core standard properties', bn: '৫টি মূল প্রোপার্টির পাশাপাশি এক্সটেনশন মেম্বার (যেমন "invalid-params": [{ name, reason }]) যোগ করে' },
          { en: 'By sending 5 separate HTTP responses', bn: '৫টি পৃথক HTTP রেসপন্স পাঠিয়ে' },
          { en: 'By writing errors in base64 HTML comments', bn: 'বেস৬৪ এইচটিএমএল কমেন্টে লিখে' },
          { en: 'Extension fields are strictly banned by RFC 9457', bn: 'RFC 9457 তে কোনো নতুন ফিল্ড যোগ করা সম্পূর্ণ নিষিদ্ধ' }
        ],
        answer: 0,
        hint: {
          en: 'Allows custom extension members alongside core fields.',
          bn: 'মূল ৫টি ফিল্ডের পাশাপাশি কাস্টম এক্সটেনশন ফিল্ড যোগ করার অনুমতি দেয়।'
        },
        explanation: {
          en: 'RFC 9457 explicitly encourages adding extension members like invalid-params to carry deep validation feedback.',
          bn: 'RFC 9457 মূল কাঠামোর সাথে invalid-params এর মতো অতিরিক্ত ফিল্ড যুক্ত করে বিস্তারিত তথ্য পাঠানোর নির্দেশ দেয়।'
        }
      }
    ]
  }
};
