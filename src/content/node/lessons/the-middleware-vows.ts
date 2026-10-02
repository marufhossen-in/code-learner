import type { Lesson } from '../../../lib/types';

export const middlewareVowsLesson: Lesson = {
  slug: 'the-middleware-vows',
  tech: 'node',
  title: {
    en: 'Express Middleware & REST API Design: Pipeline, Routing & Error Handling',
    bn: 'Express মিডলওয়্যার ও REST API ডিজাইন: পাইপলাইন, রাউটিং ও এরর হ্যান্ডলিং'
  },
  summary: {
    en: 'Master enterprise Express.js architecture across 10 structured topics, from the request-response pipeline to custom middleware. Learn built-in parsers, modular sub-routers, async error forwarding, 4-argument centralized handlers, and REST contracts.',
    bn: 'রিকোয়েস্ট-রেসপন্স পাইপলাইন থেকে শুরু করে কাস্টম মিডলওয়্যার পর্যন্ত 10 টি বিষয়ে Express.js আর্কিটেকচার আয়ত্ত করুন। জানুন বিল্ট-ইন বডি পার্সার, মডুলার সাব-রাউটার, অ্যাসিঙ্ক এরর হ্যান্ডলিং, 4 আর্গুমেন্টের সেন্ট্রালাইজড হ্যান্ডলার এবং RESTful এপিআই চুক্তি।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-first-server',
    title: {
      en: 'The First Server: Bare Registers, HTTP Lifecycles & URL Parsing',
      bn: 'প্রথম সার্ভার: রওকদারি, HTTP লাইফসাইকেল ও URL পার্সিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Express Architecture: The Middleware Pipeline', bn: '১. Express আর্কিটেকচার: মিডলওয়্যার পাইপলাইন' } },
    {
      type: 'para',
      text: {
        en: 'Express is a minimal and flexible Node.js web application framework built on top of the native HTTP module. Internally, an Express application is essentially a sequential FIFO (First-In, First-Out) pipeline of middleware functions. Incoming HTTP requests travel down this chain, where each middleware can inspect the request, modify it, send a response, or pass control to the next handler.',
        bn: 'Express হলো Node.js-এর নেটিভ HTTP মডিউলের ওপর নির্মিত একটি জনপ্রিয় ও দ্রুতগতির ওয়েব ফ্রেমওয়ার্ক। এর মূল ভিত্তি হলো মিডলওয়্যার পাইপলাইন (FIFO - First-In, First-Out)। ক্লায়েন্টের প্রতিটি রিকোয়েস্ট ক্রমানুসারে এই পাইপলাইনের মধ্য দিয়ে যায়, যেখানে প্রতিটি মিডলওয়্যার ডেটা দেখতে পারে, পরিবর্ধন করতে পারে, রেসপন্স পাঠাতে পারে বা পরবর্তী মিডলওয়্যারে পাঠাতে পারে।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";

const app = express();

// Express app instance is ready to mount middleware:
console.log("Express application initialized:", typeof app.use === "function"); // true
console.log("Supported HTTP methods:", typeof app.get === "function"); // true`,
      caption: {
        en: 'An Express application instance is a registry of sequentially executed middleware functions.',
        bn: 'Express অ্যাপ্লিকেশন ইনস্ট্যান্স হলো ক্রমানুসারে চলা মিডলওয়্যার ফাংশনের একটি পাইপলাইন।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Middleware Signature: (req, res, next) & Order', bn: '২. মিডলওয়্যার গঠন: (req, res, next) ও চলাচলের ক্রম' } },
    {
      type: 'para',
      text: {
        en: 'A standard Express middleware function accepts 3 parameters: (req, res, next). Inside the middleware, you must perform 1 of 2 actions: first, end the request by returning a response (res.json(), res.send()); second, call next() to pass control to the subsequent middleware. Forgetting both actions leaves the client socket hung forever.',
        bn: 'একটি সাধারণ Express মিডলওয়্যারের 3 টি প্যারামিটার থাকে: (req, res, next)। মিডলওয়্যারের ভেতর অবশ্যই 1 বা 2 নম্বর কাজের একটি করতে হয়: প্রথমত, রেসপন্স পাঠিয়ে রিকোয়েস্ট সমাপ্ত করা (res.json(), res.send()); দ্বিতীয়ত, next() ডেকে পরবর্তী মিডলওয়্যারে নিয়ন্ত্রণ পাঠানো। দুটোই না করলে ব্রাউজার চিরতরে লোডিংয়ে আটকে থাকবে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Request execution logger middleware:
function requestLogger(req, res, next) {
  const start = Date.now();
  
  // Register response finish event listener:
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(\`[\${req.method}] \${req.url} -> Status \${res.statusCode} (\${duration}ms)\`);
  });

  // CRITICAL: Hand control over to the next middleware in the chain!
  next();
}

console.log("Middleware must invoke next() or complete response transmission");
// Output: Middleware must invoke next() or complete response transmission`,
      caption: {
        en: 'Middleware functions must call next() to prevent requests from stalling permanently.',
        bn: 'রিকোয়েস্ট আটকে থাকা রোধ করতে মিডলওয়্যারে সর্বদা next() কল করা বাধ্যতামূলক।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Built-in Middleware: json, urlencoded & static', bn: '৩. বিল্ট-ইন মিডলওয়্যার: json, urlencoded ও static' } },
    {
      type: 'para',
      text: {
        en: 'Express provides 3 essential built-in middlewares for request handling. First, express.json() parses incoming JSON payloads and populates req.body. Second, express.urlencoded({ extended: true }) parses form submissions. Third, express.static(rootFolder) serves static assets like HTML and CSS directly from a designated directory.',
        bn: 'রিকোয়েস্ট হ্যান্ডলিংয়ের জন্য Express এ 3 টি মূল বিল্ট-ইন মিডলওয়্যার রয়েছে। প্রথমত, express.json() ইনকামিং JSON পার্স করে req.body তে বসায়। দ্বিতীয়ত, express.urlencoded({ extended: true }) ফর্ম ডেটা প্রক্রিয়া করে। তৃতীয়ত, express.static(folder) নির্ধারিত ফোল্ডার থেকে এইচটিএমএল ও সিএসএসের মতো স্ট্যাটিক ফাইল সরাসরি পরিবেশন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";

const app = express();

// 1. Parse JSON bodies automatically:
app.use(express.json({ limit: "2mb" }));

// 2. Parse URL-encoded HTML forms:
app.use(express.urlencoded({ extended: true }));

// 3. Serve public directory assets:
app.use("/static", express.static("./public"));

console.log("Built-in parsers and static handlers mounted successfully");
// Output: Built-in parsers and static handlers mounted successfully`,
      caption: {
        en: 'express.json() parses body streams into native JavaScript objects on req.body.',
        bn: 'express.json() বডি স্ট্রিম পার্স করে req.body-তে সাধারণ অবজেক্ট হিসেবে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Modular Routing with express.Router()', bn: '৪. express.Router() দিয়ে মডুলার রাউটিং' } },
    {
      type: 'para',
      text: {
        en: 'Instead of declaring hundreds of routes directly on the top-level app object, enterprise applications break endpoints into domain routers using express.Router(). Each router acts as a mini-application that can have its own dedicated middleware and route handlers, mounted under specific base path prefixes.',
        bn: 'অ্যাপের সব রুট একটি ফাইলে না লিখে প্রফেশনাল প্রজেক্টে express.Router() দিয়ে মডুলার রাউটার তৈরি করা হয়। প্রতিটি রাউটার একটি সাব-অ্যাপ্লিকেশনের মতো কাজ করে যার নিজস্ব মিডলওয়্যার ও রুট থাকতে পারে এবং এগুলোকে মূল অ্যাপে নির্দিষ্ট প্রিফিক্সে (যেমন /api/users) মাউন্ট করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { Router } from "express";

const userRouter = Router();

// Sub-route: GET /users
userRouter.get("/", (req, res) => {
  res.json({ users: [{ id: 1, name: "Sakib" }] });
});

// Sub-route: GET /users/:id
userRouter.get("/:id", (req, res) => {
  res.json({ id: req.params.id, name: "User Details" });
});

// Mount router under base path in main app:
// app.use("/api/users", userRouter);

console.log("Router creates modular, decoupled endpoint groups for large codebases");
// Output: Router creates modular, decoupled endpoint groups for large codebases`,
      caption: {
        en: 'express.Router groups related endpoints into modular, maintainable controllers.',
        bn: 'express.Router সম্পর্কিত এন্ডপয়েন্টগুলোকে মডুলার কন্ট্রোলারে সংগঠিত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Parameter Extraction: Params, Query & Body', bn: '৫. প্যারামিটার সংগ্রহ: Params, Query ও Body' } },
    {
      type: 'para',
      text: {
        en: 'Express extracts incoming data across three dedicated properties: 1) req.params: captures dynamic route segments defined with a colon (e.g. /posts/:id); 2) req.query: contains parsed URL query string key-value pairs (e.g. ?sort=desc&limit=10); 3) req.body: holds the deserialized JSON or form payload populated by body-parser middleware.',
        bn: 'Express ৩টি প্রধান প্রপার্টিতে ক্লায়েন্টের পাঠানো ডেটা ভাগ করে দেয়: ১) req.params: কোলোন দিয়ে সংজ্ঞায়িত ডায়নামিক রাউট ভ্যালু ধারণ করে (যেমন /posts/:id); ২) req.query: URL-এর কুয়েরি স্ট্রিং ধারণ করে (যেমন ?sort=desc&limit=10). ৩) req.body: express.json() দ্বারা পার্স করা JSON বা ফর্ম ডেটা ধারণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function handleProductSearch(req, res) {
  // 1. Dynamic route parameter:
  const categoryId = req.params.category; // e.g. "electronics"

  // 2. Query string parameters:
  const page = parseInt(req.query.page || "1", 10);
  const search = req.query.q || "";

  // 3. JSON body payload (for POST/PUT):
  const filterOptions = req.body;

  res.json({ categoryId, page, search, filterOptions });
}

console.log("req.params, req.query, and req.body provide seamless parameter access");
// Output: req.params, req.query, and req.body provide seamless parameter access`,
      caption: {
        en: 'Express cleanly segregates path variables, query string options, and payload data.',
        bn: 'Express রাউট প্যারামিটার, কুয়েরি অপশন এবং রিকোয়েস্ট বডি স্পষ্টভাবে আলাদা করে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Asynchronous Middleware & Async Error Boundaries', bn: '৬. অ্যাসিনক্রোনাস মিডলওয়্যার ও এরর বাউন্ডারি' } },
    {
      type: 'para',
      text: {
        en: 'In Express 4, if an async handler throws an error or rejects a Promise without a try/catch block, Express will fail to catch it, causing unhandled promise rejections or indefinitely hung requests. To solve this, wrap async handlers in an error-forwarding helper fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next).',
        bn: 'Express 4 এ কোনো async ফাংশনে try/catch ছাড়া এরর ঘটলে Express তা নিজে থেকে ধরতে পারে না, ফলে রিকোয়েস্ট আটকে থাকে বা প্রসেস আনহ্যান্ডেল্ড এরর দেখায়। এটি সমাধান করতে async হ্যান্ডলারগুলোকে একটি র‍্যাপার ফাংশনে মুড়ে দেওয়া হয় যাতে এরর হলে তা স্বয়ংক্রিয়ভাবে catch(next)-এ চলে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Universal async route wrapper for Express 4:
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage in async route:
const getUser = asyncHandler(async (req, res) => {
  // If database throws, catch(next) forwards it straight to error middleware!
  const user = await Promise.reject(new Error("Database connection dropped"));
  res.json(user);
});

console.log("asyncHandler prevents unhandled promise rejections from hanging requests");
// Output: asyncHandler prevents unhandled promise rejections from hanging requests`,
      caption: {
        en: 'Async wrapper forwards promise rejections directly into the Express error pipeline.',
        bn: 'Async র‍্যাপার প্রমিজের যেকোনো রিজেকশনকে সরাসরি সেন্ট্রাল এরর পাইপলাইনে পৌঁছে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The 4-Argument Centralized Error Middleware', bn: '৭. ৪-আর্গুমেন্টের সেন্ট্রালাইজড এরর মিডলওয়্যার' } },
    {
      type: 'para',
      text: {
        en: 'Express identifies error handling middleware strictly by the function parameter length (arity). A function with exactly four arguments: (err, req, res, next) is treated as an error handler. When any middleware calls next(err) with an argument, Express skips all standard routes and jumps straight to this error handler.',
        bn: 'Express শুধুমাত্র আর্গুমেন্টের সংখ্যা দেখে এরর মিডলওয়্যার শনাক্ত করে। যে ফাংশনের ঠিক ৪টি প্যারামিটার থাকে: (err, req, res, next), তাকেই কেবল এরর হ্যান্ডলার হিসেবে গণ্য করা হয়। কোনো মিডলওয়্যারে next(err) কল করা মাত্র Express অন্য সব সাধারণ রুট এড়িয়ে সরাসরি এই এরর হ্যান্ডলারে চলে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Centralized Error Handling Middleware (must have 4 arguments!):
function globalErrorHandler(err, req, res, next) {
  const statusCode = err.status || 500;
  console.error(\`[ERROR] \${req.method} \${req.url} -> \${err.message}\`);

  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || "Internal Server Error",
      statusCode
    }
  });
}

console.log("4-argument signature (err, req, res, next) activates error mode");
// Output: 4-argument signature (err, req, res, next) activates error mode`,
      caption: {
        en: 'The 4 argument signature (err, req, res, next) catches all errors routed via next(err).',
        bn: '4 টি আর্গুমেন্ট বিশিষ্ট (err, req, res, next) ফাংশন সব এররকে এক জায়গায় সুন্দরভাবে সামলায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Essential Production Middleware: Helmet & Morgan', bn: '৮. গুরুত্বপূর্ণ প্রোডাকশন মিডলওয়্যার: Helmet ও Morgan' } },
    {
      type: 'para',
      text: {
        en: 'Production Express servers should always incorporate standard security and observability middleware. The "helmet" package sets critical HTTP security headers (Content-Security-Policy, X-Frame-Options, HSTS) to protect against XSS and clickjacking. The "morgan" package provides battle-tested HTTP request logging.',
        bn: 'প্রোডাকশন সার্ভারে নিরাপত্তা ও পর্যবেক্ষণের জন্য দুটি জনপ্রিয় প্যাকেজ ব্যবহার করা হয়: "helmet", যা বিভিন্ন সিকিউরিটি হেডার (যেমন XSS ও ক্লিকজ্যাকিং প্রতিরোধ) সেট করে সাইটকে সুরক্ষিত করে। এবং "morgan", যা প্রতিটি আগত রিকোয়েস্টের সুনির্দিষ্ট লগ টার্মিনালে বা ফাইলে সংরক্ষণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Example production middleware configuration:
// import helmet from "helmet";
// import morgan from "morgan";
// import cors from "cors";

// app.use(helmet()); // Sets 11 secure HTTP response headers
// app.use(cors({ origin: "https://codeshikhon.com" })); // Restricts CORS
// app.use(morgan("combined")); // Standard Apache combined log output format

console.log("Helmet, CORS, and Morgan form the standard defensive middleware stack");
// Output: Helmet, CORS, and Morgan form the standard defensive middleware stack`,
      caption: {
        en: 'Helmet hardens response headers while Morgan provides standardized audit logging.',
        bn: 'Helmet হেডার সুরক্ষিত করে এবং Morgan সার্ভারের রিকোয়েস্টের বিস্তারিত লগ নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Rate Limiting & Denial of Service Protection', bn: '৯. রেট লিমিটিং ও ডিনায়াল অফ সার্ভিস (DoS) প্রতিরোধ' } },
    {
      type: 'para',
      text: {
        en: 'Without rate limiting, malicious users or automated bots can overwhelm an Express server with thousands of requests per second. Using "express-rate-limit", you can restrict clients (by IP address) to a specific number of requests within a time window (e.g. 100 requests per 15 minutes), returning an HTTP 429 Too Many Requests response on breach.',
        bn: 'রেট লিমিটিং না থাকলে যেকোনো বট বা আক্রমণকারী সেকেন্ডে হাজার হাজার রিকোয়েস্ট পাঠিয়ে সার্ভার ডাউন করে দিতে পারে। "express-rate-limit" দিয়ে প্রতিটি আইপি-র জন্য নির্দিষ্ট সময়সীমায় রিকোয়েস্ট সংখ্যা বেঁধে দেওয়া যায় (যেমন ১৫ মিনিটে সর্বোচ্চ ১০০ রিকোয়েস্ট), সীমা অতিক্রম করলে সার্ভার সাথে সাথে 429 Too Many Requests পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Mocking rate limiter configuration:
const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100,                  // Limit each IP to 100 requests per window
  standardHeaders: true,     // Return rate limit info in 'RateLimit-*' headers
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." }
};

console.log("Configured windowMs:", rateLimitConfig.windowMs); // 900000
console.log("Max requests ceiling:", rateLimitConfig.max);       // 100`,
      caption: {
        en: 'Rate limiting protects authentication routes and endpoints from brute-force floods.',
        bn: 'রেট লিমিটিং ব্রুট-ফোর্স ও স্প্যাম আক্রমণ থেকে এপিআই এন্ডপয়েন্টগুলোকে সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. REST API Contracts & Standardized JSON Envelopes', bn: '১০. REST API চুক্তি ও স্ট্যান্ডার্ড JSON রেসপন্স এনভেলপ' } },
    {
      type: 'para',
      text: {
        en: 'A professional REST API follows consistent HTTP status codes: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), and 500 (Server Error). Standardize all API responses inside a consistent envelope with success, data, error, and timestamp fields.',
        bn: 'প্রফেশনাল REST API স্ট্যান্ডার্ড স্ট্যাটাস কোড মেনে চলে: ২০০ (সফল), ২০১ (নতুন ডেটা তৈরি), ২০৪ (কোনো কনটেন্ট নেই), ৪০০ (ভুল ইনপুট), ৪০১ (লগইন করা নেই), ৪০৩ (অনুমতি নেই), ৪০৪ (পাওয়া যায়নি) এবং ৫০০ (সার্ভার এরর)। রেসপন্স ফরম্যাট একটি নির্দিষ্ট খামে (success, data, error, timestamp) সাজানো উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function apiResponse(res, statusCode, data = null, error = null) {
  res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300,
    statusCode,
    data,
    error,
    timestamp: new Date().toISOString()
  });
}

// Example usage:
// apiResponse(res, 201, { id: 45, username: "tanvir" });
// apiResponse(res, 400, null, "Email is required");

console.log("Standardized response envelopes create predictable API contracts for frontend clients");
// Output: Standardized response envelopes create predictable API contracts for frontend clients`,
      caption: {
        en: 'Standard JSON response envelopes simplify error handling and data parsing on client applications.',
        bn: 'স্ট্যান্ডার্ড রেসপন্স এনভেলপ ফ্রন্টএন্ড অ্যাপ্লিকেশনের জন্য ডেটা ও এরর হ্যান্ডলিং সহজ করে তোলে।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-mid-ex1',
      kind: 'predict',
      topic: 'node: pass control in middleware',
      question: {
        en: 'Which function must a middleware call to pass control to the next middleware function in the Express pipeline?',
        bn: 'Express পাইপলাইনের পরবর্তী মিডলওয়্যারে নিয়ন্ত্রণ পাঠাতে একটি মিডলওয়্যারের কোন ফাংশনটি কল করা আবশ্যক?'
      },
      code: `/* Passing execution to the next middleware in Express */
/* function logger(req, res, next) { console.log(req.url); ____________(); } */`,
      answer: 'next',
      accept: ['next', 'next()'],
      hint: {
        en: 'Passes to the next handler.',
        bn: 'পরবর্তী হ্যান্ডলারে পাঠায়।'
      },
      explanation: {
        en: 'Calling next() instructs Express to proceed to the next matching middleware in the stack.',
        bn: 'next() কল করলে Express পাইপলাইনের পরবর্তী মিডলওয়্যার ফাংশনে প্রবেশ করে।'
      }
    },
    {
      id: 'nod-mid-ex2',
      kind: 'mcq',
      topic: 'node: error middleware arity',
      question: {
        en: 'How many arguments must an Express middleware function define in its signature for Express to recognize it as an Error Handling middleware?',
        bn: 'Express যেন কোনো মিডলওয়্যারকে এরর হ্যান্ডলিং মিডলওয়্যার হিসেবে শনাক্ত করতে পারে, তার জন্য ফাংশনটিতে কয়টি আর্গুমেন্ট থাকা আবশ্যক?'
      },
      options: [
        { en: 'Exactly 4 arguments: (err, req, res, next)', bn: 'ঠিক ৪টি আর্গুমেন্ট: (err, req, res, next)' },
        { en: 'Exactly 2 arguments: (err, res)', bn: 'ঠিক ২টি আর্গুমেন্ট: (err, res)' },
        { en: 'Exactly 3 arguments: (req, res, next)', bn: 'ঠিক ৩টি আর্গুমেন্ট: (req, res, next)' },
        { en: '1 argument: (err)', bn: '১টি আর্গুমেন্ট: (err)' }
      ],
      answer: 0,
      hint: {
        en: 'Four arguments starting with err.',
        bn: 'err দিয়ে শুরু হওয়া চারটি আর্গুমেন্ট।'
      },
      explanation: {
        en: 'Express inspects fn.length. Only functions declaring exactly 4 arguments (err, req, res, next) are executed during error handling.',
        bn: 'Express প্যারামিটার সংখ্যা গুনে দেখে। ঠিক ৪টি আর্গুমেন্ট থাকলে তবেই Express একে এরর হ্যান্ডলার হিসেবে ব্যবহার করে।'
      }
    },
    {
      id: 'nod-mid-ex3',
      kind: 'mcq',
      topic: 'node: dynamic route params',
      question: {
        en: 'Given the Express route "/users/:userId/posts/:postId", on which object are "userId" and "postId" accessed?',
        bn: '"/users/:userId/posts/:postId" এই Express রাউটে "userId" এবং "postId"-এর মান কোন অবজেক্ট থেকে পাওয়া যাবে?'
      },
      options: [
        { en: 'req.params', bn: 'req.params' },
        { en: 'req.query', bn: 'req.query' },
        { en: 'req.body', bn: 'req.body' },
        { en: 'req.headers', bn: 'req.headers' }
      ],
      answer: 0,
      hint: {
        en: 'Named route parameters are on req.params.',
        bn: 'রাউটের প্যারামিটার থাকে req.params-এ।'
      },
      explanation: {
        en: 'Colon-prefixed path segments are parsed into key-value pairs stored in the req.params object.',
        bn: 'কোলোন যুক্ত ডায়নামিক রাউট ভ্যালুগুলো req.params অবজেক্টে জমা হয়।'
      }
    }
  ],
  quiz: {
    id: 'nod-mid-quiz',
    title: { en: 'Express Middleware & REST API Quiz', bn: 'Express মিডলওয়্যার ও REST API কুইজ' },
    questions: [
      {
        id: 'nmq1',
        kind: 'mcq',
        topic: 'node: middleware ordering significance',
        question: {
          en: 'What happens if authentication middleware is registered AFTER the protected route handler in Express (app.get("/secret", handler); app.use(authMiddleware);)?',
          bn: 'Express-এ সুরক্ষিত রাউটের পরে যদি অথেন্টিকেশন মিডলওয়্যার রেজিস্টার করা হয়, তবে কী ঘটবে?'
        },
        options: [
          { en: 'The protected route executes without authentication, because Express executes middleware in strict top-to-bottom order', bn: 'সুরক্ষিত রাউটটি কোনো যাচাই ছাড়াই রান হয়ে যাবে, কারণ Express ওপর থেকে নিচে ক্রমানুসারে চলে' },
          { en: 'Express automatically reorders them correctly', bn: 'Express নিজে থেকেই ক্রম ঠিক করে নেবে' },
          { en: 'Node.js throws a RouteOrderException', bn: 'Node.js একটি RouteOrderException ছুড়ে দেবে' },
          { en: 'The route becomes permanently unreachable', bn: 'রাউটটিতে কখনোই ঢোকা যাবে না' }
        ],
        answer: 0,
        hint: {
          en: 'Top-to-bottom FIFO order.',
          bn: 'ওপর থেকে নিচে FIFO ক্রম।'
        },
        explanation: {
          en: 'Express middleware runs strictly in the order registered. Handlers declared before authentication will process requests without authorization.',
          bn: 'Express ওপর থেকে নিচে সিরিয়াল অনুযায়ী চলে। অথেন্টিকেশন মিডলওয়্যার পরে থাকলে আগের রাউটগুলো অরক্ষিত থেকে যাবে।'
        }
      },
      {
        id: 'nmq2',
        kind: 'mcq',
        topic: 'node: HTTP 429 status code',
        question: {
          en: 'Which standard HTTP status code is returned by rate limiters when a client exceeds their allocated request quota?',
          bn: 'ক্লায়েন্ট তার জন্য নির্ধারিত রিকোয়েস্ট সীমা অতিক্রম করলে রেট লিমিটার কোন স্ট্যান্ডার্ড HTTP স্ট্যাটাস কোড পাঠায়?'
        },
        options: [
          { en: '429 Too Many Requests', bn: '429 Too Many Requests (অতিরিক্ত রিকোয়েস্ট)' },
          { en: '404 Not Found', bn: '404 Not Found (পাওয়া যায়নি)' },
          { en: '500 Internal Server Error', bn: '500 Internal Server Error (সার্ভার এরর)' },
          { en: '200 OK', bn: '200 OK (সফল)' }
        ],
        answer: 0,
        hint: {
          en: '429 status code.',
          bn: '429 স্ট্যাটাস কোড।'
        },
        explanation: {
          en: 'HTTP 429 indicates that the user has sent too many requests in a given amount of time ("Rate Limit Exceeded").',
          bn: 'HTTP 429 স্ট্যাটাস কোড নির্দেশ করে যে নির্দিষ্ট সময়ের মধ্যে অনুমোদনের চেয়ে বেশি রিকোয়েস্ট পাঠানো হয়েছে।'
        }
      },
      {
        id: 'nmq3',
        kind: 'mcq',
        topic: 'node: centralized error middleware signature',
        question: {
          en: 'How does Express differentiate a centralized error-handling middleware from standard request middleware?',
          bn: 'সাধারণ মিডলওয়্যার থেকে সেন্ট্রালাইজড এরর-হ্যান্ডলিং মিডলওয়্যারকে Express কীভাবে আলাদা করে শনাক্ত করে?'
        },
        options: [
          { en: 'By declaring exactly 4 arguments in the callback function signature: (err, req, res, next)', bn: 'ফাংশনের প্যারামিটারে ঠিক 4 টি আর্গুমেন্ট ঘোষণা করার মাধ্যমে: (err, req, res, next)' },
          { en: 'By giving the function a specific name like errorHandler', bn: 'ফাংশনটিকে errorHandler নাম দিয়ে' },
          { en: 'By placing it at the very top before app.use(express.json())', bn: 'সবার উপরে স্থাপন করে' },
          { en: 'By using TypeScript types only', bn: 'শুধু TypeScript টাইপ ব্যবহার করে' }
        ],
        answer: 0,
        hint: {
          en: 'Arity of 4 arguments (err, req, res, next).',
          bn: '4 টি আর্গুমেন্টের প্যারামিটার সংখ্যা (err, req, res, next)।'
        },
        explanation: {
          en: 'Express inspects function.length. When a middleware accepts 4 arguments, Express treats it exclusively as an error handler invoked when next(err) is called.',
          bn: 'Express ফাংশনের দৈর্ঘ্য যাচাই করে। যখন কোনো মিডলওয়্যারে 4 টি আর্গুমেন্ট থাকে, তখন Express সেটিকে কেবল এরর হ্যান্ডলার হিসেবে গণ্য করে।'
        }
      },
      {
        id: 'nmq4',
        kind: 'mcq',
        topic: 'node: hung request in middleware',
        question: {
          en: 'What happens to a client HTTP request if a custom middleware neither responds nor calls next()?',
          bn: 'একটি কাস্টম মিডলওয়্যার যদি কোনো রেসপন্স না পাঠায় এবং next() কল না করে, তবে ক্লায়েন্ট রিকোয়েস্টের কী হবে?'
        },
        options: [
          { en: 'The connection hangs indefinitely until the client or server TCP socket times out', bn: 'ক্লায়েন্ট বা সার্ভারের সকেট টাইমআউট না হওয়া পর্যন্ত সংযোগটি অনির্দিষ্টকালের জন্য ঝুলে থাকে' },
          { en: 'Express automatically sends a 404 response', bn: 'Express নিজে থেকেই 404 পাঠায়' },
          { en: 'The server restarts automatically', bn: 'সার্ভার নিজে থেকেই রিস্টার্ট হয়' },
          { en: 'The request payload is encrypted', bn: 'রিকোয়েস্ট ডেটা এনক্রিপ্ট হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Every middleware must terminate or pass control.',
          bn: 'প্রতিটি মিডলওয়্যারকে কাজ শেষ করতে হবে নয়তো নিয়ন্ত্রণ ছাড়তে হবে।'
        },
        explanation: {
          en: 'If a middleware fails to either send a response (res.json, res.send) or pass control with next(), the HTTP request cycle remains open and hangs until a timeout occurs.',
          bn: 'রেসপন্স না পাঠিয়ে বা next() না ডেকে বসে থাকলে রিকোয়েস্ট আটকে থাকে এবং ক্লায়েন্ট দীর্ঘক্ষণ অপেক্ষা করে টাইমআউট এরর পায়।'
        }
      }
    ]
  }
};
