import type { Lesson } from '../../../lib/types';

export const TheOrderTicketsLesson: Lesson = {
  slug: 'the-order-tickets',
  tech: 'express',
  title: {
    en: 'Request Processing — Body Parsers, File Uploads & Schema Validation',
    bn: 'রিকোয়েস্ট প্রসেসিং — বডি পার্সার, ফাইল আপলোড ও স্কিমা ভ্যালিডেশন'
  },
  summary: {
    en: 'Production APIs must reliably decode incoming request bodies, safely accept multipart file uploads, and validate client inputs against strict schemas. In this lesson, you will master built-in Express body parsers, file streaming with Multer, payload byte limitations, and runtime schema validation using Zod.',
    bn: 'প্রোডাকশন এপিআই-তে ক্লায়েন্ট থেকে আসা রিকোয়েস্ট বডি নির্ভুলভাবে পড়া, ফাইল আপলোড নিরাপদে গ্রহণ করা এবং কঠোর স্কিমা দিয়ে ইনপুট যাচাই করা বাধ্যতামূলক। এই পাঠে আপনি এক্সপ্রেসের বিল্ট-ইন বডি পার্সার, মাল্টার দিয়ে ফাইল প্রসেসিং, পেলোড বাইট লিমিট এবং জড দিয়ে রানটাইম স্কিমা ভ্যালিডেশন গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'request-payload-processing',
      text: {
        en: 'The Request Ingestion Pipeline',
        bn: 'রিকোয়েস্ট ইনজেশন পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you accept data from external clients, incoming HTTP payloads arrive as raw byte streams across the network socket. Express requires dedicated parsing middleware to inspect the Content-Type header, assemble the stream chunks into memory, parse JSON or urlencoded data, and populate req.body.',
        bn: 'যখন আপনি ক্লায়েন্টদের থেকে ডাটা গ্রহণ করেন, তখন নেটওয়ার্কের মধ্য দিয়ে ইনকামিং এইচটিটিপি পেলোডগুলো সরাসরি বাইট স্ট্রিম আকারে আসে। এক্সপ্রেস ডেডিকেটেড পার্সিং মিডেলওয়্যার ব্যবহার করে Content-Type হেডার পরীক্ষা করে, বাফার চ্যাঙ্কগুলো জোড়া লাগায় এবং req.body-তে সুন্দরভাবে ডাটা সাজিয়ে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'express.json()',
          def: {
            en: 'Built-in middleware that parses incoming requests with Content-Type: application/json into a JavaScript object on req.body.',
            bn: 'বিল্ট-ইন মিডেলওয়্যার যা Content-Type: application/json রিকোয়েস্টের বডি পার্স করে req.body-তে জাভাস্ক্রিপ্ট অবজেক্ট হিসেবে দেয়।'
          }
        },
        {
          term: 'express.urlencoded()',
          def: {
            en: 'Built-in middleware that parses URL-encoded HTML form bodies, supporting nested objects when extended: true is configured.',
            bn: 'বিল্ট-ইন মিডেলওয়্যার যা এইচটিএমএল ফর্ম ডাটা পার্স করে, extended: true থাকলে নেস্টেড অবজেক্টও সাপোর্ট করে।'
          }
        },
        {
          term: 'Multer',
          def: {
            en: 'A standard Node.js middleware for handling multipart/form-data, primarily used for uploading image, document, and media files.',
            bn: 'multipart/form-data প্রসেস করার জন্য স্ট্যান্ডার্ড নোড.জেএস মিডেলওয়্যার, যা ছবি ও ডকুমেন্ট ফাইল আপলোডে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'Schema Validation (Zod)',
          def: {
            en: 'The practice of verifying incoming client data structures, types, and constraints before passing them to core business services.',
            bn: 'মূল ব্যবসায়িক লজিকে পাঠানোর আগে ইনকামিং ডাটার টাইপ ও শর্ত কঠোরভাবে যাচাই করার প্রক্রিয়া।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'body-parsers-comparison',
      text: {
        en: 'Express Body Parsing Middleware Options',
        bn: 'এক্সপ্রেস বডি পার্সিং মিডেলওয়্যার বিকল্পসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Middleware', bn: 'মিডেলওয়্যার' },
        { en: 'Target Content-Type', bn: 'টার্গেট Content-Type' },
        { en: 'Result on req.body', bn: 'req.body-তে ফলাফল' }
      ],
      rows: [
        [
          { en: 'express.json({ limit: "10kb" })', bn: 'express.json({ limit: "10kb" })' },
          { en: 'application/json', bn: 'application/json' },
          { en: 'Parsed JavaScript Object', bn: 'পার্স করা জাভাস্ক্রিপ্ট অবজেক্ট' }
        ],
        [
          { en: 'express.urlencoded({ extended: true })', bn: 'express.urlencoded({ extended: true })' },
          { en: 'application/x-www-form-urlencoded', bn: 'application/x-www-form-urlencoded' },
          { en: 'Form key-value object (nested)', bn: 'ফর্ম কি-ভ্যালু অবজেক্ট (নেস্টেড)' }
        ],
        [
          { en: 'express.raw({ type: "application/octet-stream" })', bn: 'express.raw({ type: "application/octet-stream" })' },
          { en: 'Binary streams, Webhooks', bn: 'বাইনারি স্ট্রিম, ওয়েবহুক' },
          { en: 'Raw Node.js Buffer', bn: 'র নোড.জেএস বাফার' }
        ],
        [
          { en: 'multer({ storage: memoryStorage() }).single("file")', bn: 'multer({ storage: memoryStorage() }).single("file")' },
          { en: 'multipart/form-data', bn: 'multipart/form-data' },
          { en: 'req.file (Buffer/Path) + req.body (Text fields)', bn: 'req.file (ফাইল বাফার) + req.body (টেক্সট ফিল্ড)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'validation-pipeline-code',
      text: {
        en: 'Working Request Ingestion and Schema Validation Pipeline',
        bn: 'কার্যকরী রিকোয়েস্ট ইনজেশন ও স্কিমা ভ্যালিডেশন পাইপলাইন'
      }
    },
    {
      type: 'code',
      code: `const express = require('express');
const app = express();

// 1. Enforce strict 10kb body payload limits to prevent memory exhaustion DoS
app.use(express.json({ limit: '10kb' }));

// 2. Pure schema validator function simulating Zod validation
function validateCreateUser(body) {
  const errors = [];
  if (!body.email || !body.email.includes('@')) {
    errors.push({ field: 'email', message: 'Valid email is required' });
  }
  if (!body.age || typeof body.age !== 'number' || body.age < 18) {
    errors.push({ field: 'age', message: 'User must be at least 18 years old' });
  }
  return { isValid: errors.length === 0, errors };
}

// 3. Reusable validation middleware factory
const validateSchema = (validator) => (req, res, next) => {
  const result = validator(req.body);
  if (!result.isValid) {
    return res.status(422).json({
      status: 'fail',
      statusCode: 422,
      errors: result.errors
    });
  }
  next();
};

// 4. Protected route consuming validated payload
app.post('/api/users', validateSchema(validateCreateUser), (req, res) => {
  res.status(201).json({ status: 'success', user: req.body });
});

// Verification demonstration
const sampleInput = { email: 'dev@codeshikhon.com', age: 24 };
const audit = validateCreateUser(sampleInput);
console.log('Validation passed status:', audit.isValid);
// -> Validation passed status: true
console.log('Payload errors count:', audit.errors.length);
// -> Payload errors count: 0`,
      caption: {
        en: 'Validating payload structure with 10kb limit and 422 status responses',
        bn: '১০kb সীমা এবং ৪২২ স্ট্যাটাস রেসপন্স সহ পেলোড ভ্যালিডেশন'
      }
    },
    {
      type: 'heading',
      id: 'file-upload-architecture',
      text: {
        en: 'Secure File Upload Architecture with Multer',
        bn: 'মাল্টার দিয়ে নিরাপদ ফাইল আপলোড আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Handling file uploads introduces serious security risks, including disk exhaustion attacks, malicious executable uploads, and memory exhaustion. When configuring Multer, always define explicit file size limits and validate MIME types using a strict fileFilter callback.',
        bn: 'ফাইল আপলোড গ্রহণ করার সময় সার্ভারের ডিস্ক পূর্ণ হয়ে যাওয়া, ক্ষতিকর এক্সিকিউটেবল ফাইল আপলোড বা মেমরি শেষ হয়ে যাওয়ার মতো গুরুতর ঝুঁকি থাকে। মাল্টার কনফিগার করার সময় সর্বদা ফাইলের সর্বোচ্চ সাইজ নির্ধারণ করুন এবং fileFilter কলব্যাক দিয়ে মাইম টাইপ কঠোরভাবে পরীক্ষা করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Set Payload Limits: Configure express.json({ limit: "10kb" }) globally to prevent attackers from sending multi-megabyte JSON bombs.',
          bn: '১. পেলোড সাইজ লিমিট: গ্লোবালি express.json({ limit: "10kb" }) সেট করুন যাতে আক্রমণকারীরা বিশাল সাইজের জেএসন পাঠিয়ে মেমরি নষ্ট না করে।'
        },
        {
          en: '2. Enforce File Limits: Configure Multer with limits: { fileSize: 5 * 1024 * 1024 } to reject files larger than 5 megabytes.',
          bn: '২. ফাইল সাইজ সীমা: মাল্টারে fileSize: 5 * 1024 * 1024 দিয়ে ৫ মেগাবাইটের বেশি বড় ফাইল সরাসরি প্রত্যাখ্যান করুন।'
        },
        {
          en: '3. Filter MIME Types: Verify that file.mimetype matches trusted types (such as image/png or image/jpeg) inside the fileFilter.',
          bn: '৩. মাইম টাইপ ফিল্টার: fileFilter-এ যাচাই করুন যে file.mimetype অনুমোদিত টাইপের (যেমন image/png বা image/jpeg) সাথে মেলে।'
        },
        {
          en: '4. Validate Early: Validate params, queries, and bodies with schemas before invoking database queries to protect internal services.',
          bn: '৪. আগেই ভ্যালিডেশন: ডাটাবেজে হাত দেওয়ার আগেই প্যারামিটার, কোয়েরি ও বডি কঠোর স্কিমা দিয়ে যাচাই করে নিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-req-ex1',
      kind: 'mcq',
      topic: 'express json middleware requirement',
      question: {
        en: 'Why does req.body arrive as undefined when a client sends a valid JSON POST request without express.json() registered?',
        bn: 'ক্লায়েন্ট সঠিক জেএসন POST রিকোয়েস্ট পাঠানো সত্ত্বেও express.json() ছাড়া কেন req.body এর মান undefined থাকে?'
      },
      options: [
        {
          en: 'Node.js streams request data as raw chunks; without express.json(), no middleware assembles or parses the stream into a JavaScript object',
          bn: 'নোড.জেএস ডাটাকে র স্ট্রিম হিসেবে পায়; express.json() ছাড়া কোনো মিডেলওয়্যার এই স্ট্রিমকে জোড়া লাগিয়ে অবজেক্টে রূপান্তর করে না'
        },
        {
          en: 'The client HTTP protocol automatically disables JSON if port 80 is closed',
          bn: 'পোর্ট ৮০ বন্ধ থাকলে ক্লায়েন্ট প্রোটোকল স্বয়ংক্রিয়ভাবে জেএসন বন্ধ করে দেয়'
        },
        {
          en: 'Express requires all JSON requests to be sent using the HTTP HEAD method',
          bn: 'এক্সপ্রেসের নিয়ম হলো সমস্ত জেএসন রিকোয়েস্ট কেবল HTTP HEAD দিয়ে পাঠাতে হবে'
        },
        {
          en: 'The operating system firewall blocks JSON payloads by default',
          bn: 'অপারেটিং সিস্টেমের ফায়ারওয়াল ডিফল্টভাবে জেএসন পেলোড আটকে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Raw network streams must be collected and parsed by body parsing middleware.',
        bn: 'নেটওয়ার্কের র ডাটা স্ট্রিমকে বডি পার্সার দিয়ে সংগ্রহ ও পার্স করতে হয়।'
      },
      explanation: {
        en: 'Express does not parse request bodies by default. The express.json() middleware reads incoming stream chunks, parses the string, and populates req.body.',
        bn: 'এক্সপ্রেস নিজে থেকে বডি পার্স করে না। express.json() মিডেলওয়্যার ইনকামিং বাফার স্ট্রিম পড়ে জেএসন পার্স করে req.body-তে ডাটা সাজিয়ে দেয়।'
      }
    },
    {
      id: 'exp-req-ex2',
      kind: 'mcq',
      topic: 'http 413 payload too large error',
      question: {
        en: 'Which HTTP status code is returned to the client when a request body exceeds the limit specified in express.json({ limit: "10kb" })?',
        bn: 'express.json({ limit: "10kb" })-এর নির্ধারিত সীমা অতিক্রম করলে ক্লায়েন্টকে কোন এইচটিটিপি স্ট্যাটাস কোড ফেরত দেওয়া হয়?'
      },
      options: [
        {
          en: '413 Payload Too Large',
          bn: '৪১৩ পেলোড টু লার্জ'
        },
        {
          en: '404 Not Found',
          bn: '৪০৪ নট ফাউন্ড'
        },
        {
          en: '200 OK',
          bn: '২০০ ওকে'
        },
        {
          en: '304 Not Modified',
          bn: '৩০৪ নট মডিফাইড'
        }
      ],
      answer: 0,
      hint: {
        en: 'The 413 status code specifically denotes entity or payload limit violations.',
        bn: '৪১৩ স্ট্যাটাস কোডটি বিশেষভাবে পেলোডের মাত্রাতিরিক্ত আকার নির্দেশ করে।'
      },
      explanation: {
        en: 'When an incoming stream exceeds the configured byte limit, the body parser halts ingestion and yields an error with status 413 (Payload Too Large).',
        bn: 'ইনকামিং ডাটা কনফিগার করা লিমিট ছাড়ালেই বডি পার্সার রিকোয়েস্ট বন্ধ করে ৪১৩ (পেলোড টু লার্জ) এরর দেয়।'
      }
    },
    {
      id: 'exp-req-ex3',
      kind: 'mcq',
      topic: 'multer storage engine selection',
      question: {
        en: 'When should an Express application choose Multer memoryStorage over diskStorage?',
        bn: 'কোন পরিস্থিতিতে একটি এক্সপ্রেস অ্যাপ্লিকেশনের diskStorage-এর বদলে Multer memoryStorage বেছে নেওয়া উচিত?'
      },
      options: [
        {
          en: 'When the file buffer needs to be forwarded immediately to a cloud bucket (such as AWS S3) or processed in memory without writing to the local server disk',
          bn: 'যখন ফাইল বাফারটি লোকাল ডিস্কে সেভ না করে সরাসরি ক্লাউড স্টোরেজে (যেমন AWS S3) পাঠানো বা মেমরিতে প্রসেস করা প্রয়োজন হয়'
        },
        {
          en: 'When saving 10 gigabyte video files on a small 512MB RAM server',
          bn: '৫১২MB র‍্যামের সার্ভারে ১০ গিগাবাইট ওজনের ভিডিও ফাইল সেভ করার সময়'
        },
        {
          en: 'When serving static CSS files to desktop browsers',
          bn: 'ডেস্কটপ ব্রাউজারে স্ট্যাটিক সিএসএস ফাইল পরিবেশন করার সময়'
        },
        {
          en: 'Memory storage should never be used in any Node.js application',
          bn: 'কোনো নোড.জেএস অ্যাপ্লিকেশনে মেমরি স্টোরেজ কখনোই ব্যবহার করা উচিত নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Memory storage keeps the file as a Buffer in RAM for immediate cloud streaming.',
        bn: 'মেমরি স্টোরেজ ফাইলটিকে র‍্যামে বাফার হিসেবে রাখে যা সরাসরি ক্লাউডে পাঠানো সহজ করে।'
      },
      explanation: {
        en: 'memoryStorage keeps files in RAM as req.file.buffer, making it ideal for direct streaming to S3 without managing temporary files on ephemeral container filesystems.',
        bn: 'memoryStorage ফাইলটিকে সরাসরি র‍্যামে রাখে, ফলে লোকাল ডিস্কে কোনো অস্থায়ী ফাইল তৈরি না করেই সহজে এডব্লিউএস S3-তে পাঠানো যায়।'
      }
    },
    {
      id: 'exp-req-ex4',
      kind: 'mcq',
      topic: 'validation error status code standards',
      question: {
        en: 'Which HTTP status code is recommended by modern REST APIs when the client input fails schema validation checks?',
        bn: 'ইনপুট ডাটা স্কিমা ভ্যালিডেশনে ব্যর্থ হলে আধুনিক REST API-তে কোন এইচটিটিপি স্ট্যাটাস কোড ফেরত দেওয়া মানসম্মত?'
      },
      options: [
        {
          en: '422 Unprocessable Entity (or 400 Bad Request)',
          bn: '৪২২ আনপ্রসেসেবল এন্টিটি (অথবা ৪০০ ব্যাড রিকোয়েস্ট)'
        },
        {
          en: '500 Internal Server Error',
          bn: '৫০০ ইন্টারনাল সার্ভার এরর'
        },
        {
          en: '204 No Content',
          bn: '২০৪ নো কনটেন্ট'
        },
        {
          en: '403 Forbidden',
          bn: '৪০৩ ফরবিডেন'
        }
      ],
      answer: 0,
      hint: {
        en: 'The request was syntactically valid JSON but semantically invalid.',
        bn: 'রিকোয়েস্টের জেএসন সিনট্যাক্স ঠিক থাকলেও তার ভেতরের ডাটা শর্ত পূরণ করেনি।'
      },
      explanation: {
        en: '422 Unprocessable Entity signifies that the server understood the content type and syntax, but the contained instructions or field constraints failed validation.',
        bn: '৪২২ নির্দেশ করে যে সার্ভার রিকোয়েস্ট বুঝতে পেরেছে কিন্তু ইনপুট ফিল্ডের শর্ত বা ডাটা টাইপ ভুল থাকার কারণে তা প্রক্রিয়া করতে পারেনি।'
      }
    }
  ],
  quiz: {
    id: 'the-order-tickets-quiz',
    title: {
      en: 'Request Processing & Validation Quiz',
      bn: 'রিকোয়েস্ট প্রসেসিং ও ভ্যালিডেশন কুইজ'
    },
    questions: [
      {
        id: 'q-content-type-header-mismatch',
        kind: 'mcq',
        topic: 'content type header significance',
        question: {
          en: 'If a client sends JSON text in the request body but specifies "Content-Type: text/plain", how will express.json() behave?',
          bn: 'ক্লায়েন্ট রিকোয়েস্ট বডিতে জেএসন ডাটা পাঠালেও যদি "Content-Type: text/plain" হেডার দেয়, তবে express.json() কী করবে?'
        },
        options: [
          {
            en: 'express.json() ignores the request because its Content-Type does not match application/json, leaving req.body undefined or unparsed',
            bn: 'express.json() রিকোয়েস্টটি এড়িয়ে যাবে কারণ এর হেডার application/json নয়, ফলে req.body পার্স হবে না'
          },
          {
            en: 'express.json() automatically corrects the client HTTP header and reboots the client computer',
            bn: 'express.json() ক্লায়েন্টের হেডার ঠিক করে এবং ক্লায়েন্টের কম্পিউটার রিবুট করে'
          },
          {
            en: 'Express crashes with an uncaught fatal memory exception',
            bn: 'মারাত্মক মেমরি এরর ঘটিয়ে এক্সপ্রেস সাথে সাথে ক্র্যাশ করবে'
          },
          {
            en: 'The server silently converts the request into an SQL database dump',
            bn: 'সার্ভার নিঃশব্দে রিকোয়েস্টটিকে এসকিউএল ডাটাবেজ ডাম্পে রূপান্তর করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Body parsers inspect the Content-Type header before attempting stream deserialization.',
          bn: 'বডি পার্সার ডাটা পার্স করার আগে সর্বদা Content-Type হেডার পরীক্ষা করে।'
        },
        explanation: {
          en: 'express.json() only parses requests where the Content-Type header matches "application/json". If mismatched, the middleware passes control to the next handler without touching req.body.',
          bn: 'express.json() শুধুমাত্র application/json হেডার থাকা রিকোয়েস্টগুলোই পার্স করে। হেডার না মিললে এটি বডি পার্স না করে পরের হ্যান্ডলারে পাঠিয়ে দেয়।'
        }
      },
      {
        id: 'q-extended-true-urlencoded',
        kind: 'mcq',
        topic: 'urlencoded extended option difference',
        question: {
          en: 'What is the architectural difference between express.urlencoded({ extended: false }) and express.urlencoded({ extended: true })?',
          bn: 'express.urlencoded({ extended: false }) এবং express.urlencoded({ extended: true })-এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'extended: false uses the built-in querystring library (flat objects only), whereas extended: true uses the qs library supporting rich nested objects',
            bn: 'extended: false সাধারণ querystring লাইব্রেরি ব্যবহার করে (ফ্ল্যাট অবজেক্ট), আর extended: true জটিল নেস্টেড অবজেক্ট সাপোর্ট করে qs লাইব্রেরি দিয়ে'
          },
          {
            en: 'extended: true forces the server to compress bodies using Brotli',
            bn: 'extended: true ব্রোটলি দিয়ে বডি সংকুচিত করতে বাধ্য করে'
          },
          {
            en: 'extended: false disables all URL decoding across the entire app',
            bn: 'extended: false পুরো অ্যাপে ইউআরএল ডিকোডিং সম্পূর্ণ বন্ধ করে দেয়'
          },
          {
            en: 'extended: true is required for parsing JSON payloads',
            bn: 'জেএসন পেলোড পার্স করার জন্য extended: true থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'The extended option switches between Node core querystring and the qs library.',
          bn: 'extended অপশনটি কোর querystring এবং শক্তিশালী qs লাইব্রেরির মধ্যে পরিবর্তন করে।'
        },
        explanation: {
          en: 'Setting extended: true leverages the qs library, permitting URL-encoded keys with brackets like "user[name]=Alice&user[age]=30" to parse into nested JavaScript objects.',
          bn: 'extended: true দিলে qs লাইব্রেরি সক্রিয় হয়, ফলে "user[name]=Alice"-এর মতো ব্র্যাকেটযুক্ত ফর্ম ডাটা সরাসরি নেস্টেড অবজেক্ট হিসেবে পার্স হতে পারে।'
        }
      },
      {
        id: 'q-dos-json-bomb-prevention',
        kind: 'mcq',
        topic: 'json payload security limits',
        question: {
          en: 'How does configuring a small payload limit (e.g. limit: "10kb") on body parsers protect Express applications from Denial of Service (DoS) attacks?',
          bn: 'বডি পার্সারে ছোট পেলোড লিমিট (যেমন limit: "10kb") নির্ধারণ করা কীভাবে এক্সপ্রেস অ্যাপ্লিকেশনকে DoS আক্রমণ থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'It stops malicious clients from exhausting server memory by flooding the Node.js event loop with multi-megabyte JSON payloads that freeze parsing',
            bn: 'এটি আক্রমণকারীদের বিশাল সাইজের জেএসন পাঠিয়ে নোড.জেএস সার্ভারের র‍্যাম ও ইভেন্ট লুপ জ্যাম করে দেওয়া প্রতিরোধ করে'
          },
          {
            en: 'It prevents clients from using HTTPS encryption protocols',
            bn: 'এটি ক্লায়েন্টকে এইচটিটিপিএস এনক্রিপশন ব্যবহার করতে বাধা দেয়'
          },
          {
            en: 'It enforces two-factor authentication on all HTTP endpoints',
            bn: 'এটি সমস্ত এইচটিটিপি এন্ডপয়েন্টে টু-ফ্যাক্টর অথেনটিকেশন বাধ্যতামূলক করে'
          },
          {
            en: 'It automatically backs up the database to an external tape drive',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ডাটাবেজের ব্যাকআপ টেপ ড্রাইভে সংরক্ষণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'JSON parsing is synchronous and CPU/memory intensive on huge payloads.',
          bn: 'বিশাল পেলোডে জেএসন পার্সিং সম্পূর্ণ সিঙ্ক্রোনাস হওয়ায় তা প্রচুর সিপিইউ ও মেমরি দখল করে।'
        },
        explanation: {
          en: 'JSON.parse() is a synchronous, blocking operation. Parsing huge JSON payloads monopolizes the single-threaded event loop and exhausts RAM. Limiting body size eliminates this vector.',
          bn: 'JSON.parse() সিঙ্ক্রোনাসভাবে কাজ করে। বিশাল জেএসন পার্স করতে গেলে সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ আটকে যায়। বডি সাইজ সীমাবদ্ধ রাখলে সার্ভার সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'q-schema-validation-dry',
        kind: 'mcq',
        topic: 'centralized schema validation middleware pattern',
        question: {
          en: 'What is the primary architectural advantage of creating a reusable schema validation middleware factory rather than writing if-checks inside every controller?',
          bn: 'প্রতিটি কন্ট্রোলারে if-শর্ত না লিখে একটি পুনর্ব্যবহারযোগ্য স্কিমা ভ্যালিডেশন মিডেলওয়্যার ব্যবহারের মূল সুবিধা কী?'
        },
        options: [
          {
            en: 'It centralizes error formatting, guarantees controllers only receive type-safe sanitized data, and keeps controllers focused purely on business logic',
            bn: 'এটি এরর ফরম্যাটিং এক জায়গায় রাখে, কন্ট্রোলারে টাইপ-সেফ ডাটা নিশ্চিত করে এবং কন্ট্রোলারকে কেবল ব্যবসায়িক কাজে নিবদ্ধ রাখে'
          },
          {
            en: 'It makes Node.js compile JavaScript into WebAssembly binaries',
            bn: 'এটি নোড.জেএসকে জাভাস্ক্রিপ্ট কোড ওয়েবঅ্যাসেম্বলিতে রূপান্তর করতে বাধ্য করে'
          },
          {
            en: 'It eliminates the need for an underlying database storage engine',
            bn: 'এটি ডাটাবেজ স্টোরেজ ইঞ্জিনের প্রয়োজনীয়তা সম্পূর্ণ দূর করে'
          },
          {
            en: 'It reduces the number of network hops between client and server',
            bn: 'এটি ক্লায়েন্ট ও সার্ভারের মধ্যকার নেটওয়ার্ক হপের সংখ্যা কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Separation of concerns isolates input verification from domain services.',
          bn: 'কাজের বিভাজন ইনপুট যাচাইকরণকে ব্যবসায়িক লজিক থেকে সম্পূর্ণ আলাদা রাখে।'
        },
        explanation: {
          en: 'Validation middleware enforces the separation of concerns. Controllers can assume valid, clean input and focus entirely on domain workflows and database transactions.',
          bn: 'ভ্যালিডেশন মিডেলওয়্যার ইনপুট যাচাইয়ের দায়িত্ব নিজের কাঁধে নেয়, ফলে কন্ট্রোলার নিশ্চিত থাকতে পারে যে ডাটা সঠিক এবং নির্দ্বিধায় ব্যবসায়িক লজিক চালাতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'plating-answers',
    title: {
      en: 'Response Engineering — HTTP Statuses, Content Negotiation & Cookies',
      bn: 'রেসপন্স ইঞ্জিনিয়ারিং — এইচটিটিপি স্ট্যাটাস, কনটেন্ট নেগোসিয়েশন ও কুকিজ'
    }
  }
};
