import type { Lesson } from '../../../lib/types';

export const firstServerLesson: Lesson = {
  slug: 'the-first-server',
  tech: 'node',
  title: {
    en: 'Native HTTP Server, Request-Response Lifecycle, Routing & URL Parsing',
    bn: 'নেটিভ HTTP সার্ভার, রিকোয়েস্ট-রেসপন্স লাইফসাইকেল, রাউটিং ও URL পার্সিং'
  },
  summary: {
    en: 'Master foundational Node.js server architecture across 10 structured topics, from the interactive REPL to native http.createServer. Learn request-response lifecycles, WHATWG URL parsing, POST body streaming, and dispatch routing tables.',
    bn: 'ইন্টারঅ্যাক্টিভ REPL থেকে শুরু করে নেটিভ http.createServer পর্যন্ত 10 টি বিষয়ে Node.js সার্ভার আর্কিটেকচার আয়ত্ত করুন। জানুন রিকোয়েস্ট-রেসপন্স লাইফসাইকেল, WHATWG URL পার্সিং, POST বডি স্ট্রিমিং এবং ডিসপ্যাচ রাউটিং টেবিল।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-module-grain',
    title: {
      en: 'Node.js Module System: CommonJS vs ESM, Loading & Packaging',
      bn: 'Node.js মডিউল সিস্টেম: CommonJS বনাম ESM, লোডিং ও প্যাকেজিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Getting Started: The Node.js REPL Environment', bn: '১. শুরু করা: Node.js REPL এনভায়রনমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The Node.js REPL (Read-Eval-Print Loop) is an interactive shell for rapidly experimenting with JavaScript and testing Node.js methods and interfaces without creating files. Running the bare command "node" in your terminal boots the REPL. Inside the REPL, the special variable "_" stores the result of the most recently evaluated expression.',
        bn: 'Node.js REPL (Read-Eval-Print Loop) হলো একটি ইন্টারঅ্যাক্টিভ শেল যেখানে কোনো ফাইল না খুলেই সরাসরি জাভাস্ক্রিপ্ট এবং Node.js-এর বিভিন্ন মেথড পরীক্ষা করা যায়। টার্মিনালে শুধু "node" লিখে এন্টার দিলেই REPL চালু হয়। REPL-এ "_" ভ্যারিয়েবলটি ঠিক আগের অপারেশনের রেজাল্ট মনে রাখে।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'bash',
      code: `$ node
Welcome to Node.js v20.20.2.
Type ".help" for more information.
> 10 + 25
35
> _ * 2
70
> os.platform()
'linux'
> .exit`,
      caption: {
        en: 'The REPL provides an instant scratchpad for testing runtime APIs and expressions.',
        bn: 'REPL রানটাইম এপিআই ও এক্সপ্রেশন তাৎক্ষণিকভাবে পরীক্ষা করার একটি দ্রুত মাধ্যম।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Native HTTP Module: Anatomy of createServer', bn: '২. নেটিভ HTTP মডিউল: createServer-এর গঠন' } },
    {
      type: 'para',
      text: {
        en: 'Node.js includes a native "http" module capable of handling thousands of concurrent network connections without external libraries. The core factory function is http.createServer((req, res) => { ... }), which registers a listener on the "request" event emitted whenever a client opens an HTTP connection.',
        bn: 'Node.js-এর সাথে নিজস্ব "http" মডিউল যুক্ত থাকে যা কোনো বহিরাগত লাইব্রেরি ছাড়াই হাজার হাজার নেটওয়ার্ক রিকোয়েস্ট সামলাতে পারে। এর মূল ফাংশন http.createServer((req, res) => { ... })। ক্লায়েন্ট যখনই সার্ভারে কোনো রিকোয়েস্ট পাঠায়, তখনই "request" ইভেন্ট সক্রিয় হয়ে কলব্যাকটি এক্সিকিউট হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import http from "http";

// Create native HTTP web server:
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Codeshikhon Native HTTP Server!");
});

// Bind to port 5199:
server.listen(5199, () => {
  console.log("Server listening on http://localhost:5199");
});

// Output:
// Server listening on http://localhost:5199`,
      caption: {
        en: 'http.createServer binds an incoming request listener to create lightweight web servers.',
        bn: 'http.createServer আগত রিকোয়েস্ট লিসেনার যুক্ত করে দ্রুতগতির ওয়েব সার্ভার তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Request Object (req): Method, URL & Headers', bn: '৩. Request অবজেক্ট (req): Method, URL ও Headers' } },
    {
      type: 'para',
      text: {
        en: 'The first parameter "req" is an instance of http.IncomingMessage, which is a Readable Stream. It carries vital client metadata: req.method (e.g. "GET", "POST"), req.url (the raw requested URL path and query), and req.headers (an object containing lowercase HTTP request headers like host, authorization, and user-agent).',
        bn: 'প্রথম প্যারামিটার "req" হলো http.IncomingMessage-এর একটি ইনস্ট্যান্স, যা মূলত একটি Readable Stream। এটি ক্লায়েন্টের গুরুত্বপূর্ণ তথ্য বহন করে: req.method (যেমন "GET", "POST"), req.url (রিকোয়েস্ট করা পাথ ও কোয়েরি) এবং req.headers (হোস্ট, টোকেন ইত্যাদির লোয়ারকেস হেডার্স অবজেক্ট)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Inspecting request properties:
function logRequestMetadata(req) {
  console.log("HTTP Method:", req.method);       // e.g. "GET"
  console.log("Request URL:", req.url);           // e.g. "/api/users?page=1"
  console.log("User Agent:", req.headers["user-agent"]);
  console.log("Client IP:", req.socket.remoteAddress);
}

console.log("req provides access to protocol method, URL string, and headers");
// Output: req provides access to protocol method, URL string, and headers`,
      caption: {
        en: 'The IncomingMessage stream gives immediate access to method, headers, and client network socket.',
        bn: 'IncomingMessage স্ট্রিম মেথড, হেডার্স এবং সকেট তথ্যে তাৎক্ষণিক অ্যাক্সেস দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Response Object (res): Status Codes & res.end()', bn: '৪. Response অবজেক্ট (res): স্ট্যাটাস কোড ও res.end()' } },
    {
      type: 'para',
      text: {
        en: 'The second parameter "res" is an instance of http.ServerResponse, which is a Writable Stream. You configure headers using res.writeHead(statusCode, headers) or res.setHeader(name, value). Crucially, you MUST call res.end() on every request path; forgetting res.end() leaves the client connection hanging open until socket timeout.',
        bn: 'দ্বিতীয় প্যারামিটার "res" হলো http.ServerResponse, যা একটি Writable Stream। res.writeHead(statusCode, headers) দিয়ে স্ট্যাটাস কোড ও রেসপন্স হেডার সেট করা হয়। সবচেয়ে জরুরি বিষয় হলো প্রতিটি রিকোয়েস্টে অবশ্যই res.end() কল করতে হবে; res.end() না দিলে ক্লায়েন্টের ব্রাউজার লোডিং চাকা ঘুরিয়ে ঝুলিয়ে রাখবে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function handleJsonResponse(res, data) {
  // 1. Set HTTP response status code and headers:
  res.writeHead(200, {
    "Content-Type": "application/json",
    "X-Powered-By": "Codeshikhon-Engine"
  });

  // 2. Transmit serialized body and close writable stream:
  res.end(JSON.stringify(data));
}

console.log("Calling res.end() finishes transmission and flushes socket buffers");
// Output: Calling res.end() finishes transmission and flushes socket buffers`,
      caption: {
        en: 'Every incoming request must terminate by calling res.end() to avoid hung HTTP sockets.',
        bn: 'সকেট আটকে থাকা প্রতিরোধ করতে প্রতিটি রিকোয়েস্টে অবশ্যই res.end() কল করতে হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Modern WHATWG URL Parsing & URLSearchParams', bn: '৫. আধুনিক WHATWG URL পার্সিং ও URLSearchParams' } },
    {
      type: 'para',
      text: {
        en: 'Legacy Node.js used url.parse(req.url, true), which is now deprecated. Modern Node.js adopts the standardized WHATWG URL API: new URL(req.url, `http://${req.headers.host}`). It provides direct properties like .pathname to determine routes and .searchParams (URLSearchParams) to inspect query parameters without manual regex parsing.',
        bn: 'আগে url.parse() ব্যবহার করা হতো যা বর্তমানে ডেপ্রিকেটেড। আধুনিক Node.js-এ স্ট্যান্ডার্ড WHATWG URL ক্লাস ব্যবহার করা হয়: new URL(req.url, `http://${req.headers.host}`)। এর মাধ্যমে .pathname দিয়ে রাউটের পাথ এবং .searchParams দিয়ে খুব সহজে কুয়েরি প্যারামিটার পড়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Parsing URL query parameters:
const reqUrl = "/search?topic=node&limit=10&page=2";
const parsedUrl = new URL(reqUrl, "http://localhost:5199");

console.log("Pathname:", parsedUrl.pathname); // "/search"
console.log("Topic param:", parsedUrl.searchParams.get("topic")); // "node"
console.log("Limit param:", Number(parsedUrl.searchParams.get("limit"))); // 10
console.log("Has page query:", parsedUrl.searchParams.has("page")); // true`,
      caption: {
        en: 'WHATWG URL provides robust parsing of pathnames and query search parameters.',
        bn: 'WHATWG URL এপিআই সহজে পাথ ও কুয়েরি প্যারামিটার আলাদা করে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Streaming POST Request Bodies with Size Ceilings', bn: '৬. সাইজ লিমিটসহ POST বডি স্ট্রিমিং' } },
    {
      type: 'para',
      text: {
        en: 'In raw Node.js, the request body is NOT available immediately on req.body; it arrives over time as a stream of Buffer chunks. To parse a JSON payload, listen to the "data" event to accumulate chunks and the "end" event to deserialize. Always enforce a maximum byte limit (e.g. 1MB) to prevent Denial of Service (DoS) memory floods.',
        bn: 'র Node.js-এ রিকোয়েস্ট বডি সরাসরি পাওয়া যায় না; এটি স্ট্রিম হিসেবে টুকরো টুকরো বাফার আকারে আসে। JSON ডেটা পেতে "data" ইভেন্টে বাফারগুলো জমা করতে হয় এবং "end" ইভেন্টে পার্স করতে হয়। সার্ভারকে DoS আক্রমণ থেকে রক্ষা করতে সর্বদা বডির সর্বোচ্চ সাইজ লিমিট (যেমন ১ মেগাবাইট) প্রয়োগ করা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function readJsonBody(req, maxBytes = 1e6) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let receivedBytes = 0;

    req.on("data", (chunk) => {
      receivedBytes += chunk.length;
      if (receivedBytes > maxBytes) {
        req.destroy(new Error("Payload Too Large (413)"));
        return reject(new Error("Max body size exceeded"));
      }
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const rawString = Buffer.concat(chunks).toString("utf8");
        resolve(rawString ? JSON.parse(rawString) : {});
      } catch (err) {
        reject(new Error("Invalid JSON body"));
      }
    });

    req.on("error", reject);
  });
}

console.log("Streaming body collector enforces byte ceiling and parses JSON safely");
// Output: Streaming body collector enforces byte ceiling and parses JSON safely`,
      caption: {
        en: 'Accumulating stream chunks with a byte counter protects servers from malicious memory floods.',
        bn: 'বাইট কাউন্টার দিয়ে স্ট্রিম বাফার সংগ্রহ মেমরি ফ্লাড আক্রমণ থেকে সার্ভার রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Building Native Routing: Dispatch Tables', bn: '৭. নেটিভ রাউটিং তৈরি: ডিসপ্যাচ টেবিল' } },
    {
      type: 'para',
      text: {
        en: 'Without a framework, routing is achieved cleanly using a Dispatch Table: a JavaScript Map or object mapping "METHOD /path" keys to handler functions. When a request arrives, the server checks the table; if no matching route is found, it automatically responds with a standard 404 Not Found response.',
        bn: 'কোনো ফ্রেমওয়ার্ক ছাড়া সরাসরি Node.js-এ পরিচ্ছন্ন রাউটার বানাতে Dispatch Table ব্যবহার করা হয়। এটি মূলত "METHOD /path"-এর একটি Map যেখানে প্রতিটি পাথের জন্য আলাদা হ্যান্ডলার ফাংশন থাকে। কোনো রিকোয়েস্টের সাথে পাথ না মিললে সরাসরি স্ট্যান্ডার্ড 404 Not Found রেসপন্স পাঠিয়ে দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const routes = new Map();

// Register routes:
routes.set("GET /api/status", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "healthy", uptime: process.uptime() }));
});

routes.set("GET /api/users", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify([{ id: 1, name: "Tanvir" }]));
});

// Dispatch handler:
function handleRequest(req, res) {
  const routeKey = \`\${req.method} \${req.url}\`;
  const handler = routes.get(routeKey);

  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route Not Found", code: 404 }));
  }
}

console.log("Dispatch tables provide O(1) route lookup for native Node.js servers");
// Output: Dispatch tables provide O(1) route lookup for native Node.js servers`,
      caption: {
        en: 'A dispatch Map cleanly isolates route endpoints without nested if-else ladders.',
        bn: 'ডিসপ্যাচ ম্যাপ নেস্টেড if-else ছাড়া দ্রুত O(1) গতিতে রাউট খুঁজে হ্যান্ডলারে পাঠায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Serving Static Files with Correct MIME Types', bn: '৮. সঠিক MIME টাইপসহ স্ট্যাটিক ফাইল পরিবেশন' } },
    {
      type: 'para',
      text: {
        en: 'When serving HTML, CSS, JavaScript, or image files, the server must supply the correct "Content-Type" header. Browsers rely on MIME types (e.g. text/html, text/css, application/javascript, image/png) to parse and render received assets correctly instead of guessing from file extensions.',
        bn: 'এইচটিএমএল, সিএসএস, জাভাস্ক্রিপ্ট বা ছবি পাঠানোর সময় সার্ভার থেকে সঠিক "Content-Type" হেডার পাঠানো আবশ্যক। ব্রাউজার ফাইল প্রদর্শনের জন্য MIME টাইপের ওপর নির্ভর করে (যেমন text/html, text/css, image/png)। সঠিক হেডার না পেলে ব্রাউজার ফাইল ভুলভাবে ইন্টারপ্রেট করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import path from "path";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png"
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || "application/octet-stream";
}

console.log("MIME for index.html:", getMimeType("index.html")); // "text/html; charset=utf-8"
console.log("MIME for app.js:", getMimeType("dist/app.js"));     // "application/javascript"`,
      caption: {
        en: 'Mapping file extensions to MIME types ensures browsers properly interpret static assets.',
        bn: 'এক্সটেনশন অনুযায়ী সঠিক MIME টাইপ সেট করলে ব্রাউজার নির্ভুলভাবে ফাইল রেন্ডার করতে পারে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Network Port Binding & Troubleshooting EADDRINUSE', bn: '৯. নেটওয়ার্ক পোর্ট ও EADDRINUSE এরর সমাধান' } },
    {
      type: 'para',
      text: {
        en: 'The server.listen(port, host, callback) call binds the HTTP server to a TCP port. If another process is already listening on that port, Node.js throws the classic "EADDRINUSE" error. Production servers handle this gracefully by catching the server error event or dynamically failing over to an alternative port.',
        bn: 'server.listen(port, host, callback) মেথড সার্ভারকে নির্দিষ্ট TCP পোর্টে যুক্ত করে। যদি ওই পোর্টে ইতিমধ্যে অন্য কোনো অ্যাপ চালু থাকে, তবে Node.js "EADDRINUSE" এরর ছুড়ে দেয়। এটি সার্ভার ক্র্যাশ আটকানোর জন্য server.on("error") দিয়ে হ্যান্ডল করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const testServer = http.createServer();

// Error handling for port collisions:
testServer.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error("Error: Port is already in use by another running process!");
    // Graceful remediation: retry on port + 1 or exit cleanly
  } else {
    console.error("Server network error:", err.message);
  }
});

console.log("EADDRINUSE event listener prevents unhandled socket startup crashes");
// Output: EADDRINUSE event listener prevents unhandled socket startup crashes`,
      caption: {
        en: 'Listening for EADDRINUSE catches port collisions before they crash the Node.js process.',
        bn: 'EADDRINUSE এরর হ্যান্ডলার পোর্ট কনফ্লিক্টের কারণে সার্ভার ক্র্যাশ হওয়া প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The Architectural Bridge: Why Express Evolved', bn: '১০. আর্কিটেকচারাল প্রেক্ষাপট: Express কেন তৈরি হলো' } },
    {
      type: 'para',
      text: {
        en: 'Raw Node.js provides the powerful bedrock of web servers, but writing routing tables, body parsing streams, cookie sessions, CORS headers, and error middleware by hand in every project becomes repetitive and bug-prone. Express was created to wrap Node.js (req, res) in an elegant pipeline of chainable middleware functions.',
        bn: 'নেটিভ Node.js সার্ভার খুব শক্তিশালী হলেও প্রতি প্রজেক্টে নিজে নিজে রাউটিং, বডি স্ট্রিম পার্সিং, কুকি ও এরর হ্যান্ডলিং লেখা অনেক সময়সাপেক্ষ ও জটিল। তাই ডেভেলপারদের জীবন সহজ করতে Express ফ্রেমওয়ার্ক তৈরি করা হয়েছে, যা Node.js-এর (req, res)-এর ওপর ভিত্তি করে মিডলওয়্যার পাইপলাইনের সাহায্যে চমৎকার সমাধান দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Compare Raw Node vs Express:
// Raw Node:
// http.createServer((req, res) => { /* manual stream parse, manual routing */ });

// Express builds on top of this exact same (req, res):
// import express from 'express';
// const app = express();
// app.use(express.json()); // Automates body stream parsing!
// app.get('/users', (req, res) => res.json({ ok: true }));

console.log("Express sits directly on top of Node.js native HTTP req and res streams");
// Output: Express sits directly on top of Node.js native HTTP req and res streams`,
      caption: {
        en: 'Express decorates Node.js native streams with automatic body parsing and middleware chaining.',
        bn: 'Express সরাসরি Node.js নেটিভ স্ট্রিমের ওপর মিডলওয়্যার চেইনিং সুবিধা যোগ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-srv-ex1',
      kind: 'predict',
      topic: 'node: ending HTTP response',
      question: {
        en: 'Which method must ALWAYS be called on the response object (res) to complete an HTTP transmission and send data to the client?',
        bn: 'ক্লায়েন্টের কাছে ডেটা পাঠিয়ে HTTP রিকোয়েস্ট সমাপ্ত করার জন্য রেসপন্স অবজেক্টে (res) কোন মেথডটি অবশ্যই কল করতে হয়?'
      },
      code: `/* Completing the HTTP response transmission */
/* res.writeHead(200); res.____________("Done"); */`,
      answer: 'end',
      accept: ['end', 'res.end'],
      hint: {
        en: 'Ends the response stream.',
        bn: 'রেসপন্স স্ট্রিম সমাপ্ত করে।'
      },
      explanation: {
        en: 'res.end() signals to the server that all response headers and body have been sent, closing the transmission.',
        bn: 'res.end() সার্ভারকে সংকেত দেয় যে রেসপন্স পাঠানো শেষ হয়েছে এবং সকেট সংযোগ সম্পন্ন করে।'
      }
    },
    {
      id: 'nod-srv-ex2',
      kind: 'mcq',
      topic: 'node: port conflict error code',
      question: {
        en: 'What error code does Node.js throw when a server attempts to bind to a network port that is already in use by another process?',
        bn: 'ইতিমধ্যে অন্য কোনো প্রসেসে চালু থাকা পোর্টে নতুন সার্ভার চালু করতে গেলে Node.js কোন এরর কোড দেয়?'
      },
      options: [
        { en: 'EADDRINUSE', bn: 'EADDRINUSE' },
        { en: 'ECONNRESET', bn: 'ECONNRESET' },
        { en: 'ETIMEDOUT', bn: 'ETIMEDOUT' },
        { en: 'ENOENT', bn: 'ENOENT' }
      ],
      answer: 0,
      hint: {
        en: 'Address already in use.',
        bn: 'ঠিকানা বা পোর্ট ইতিমধ্যে ব্যবহৃত।'
      },
      explanation: {
        en: 'EADDRINUSE stands for "Error: Address already in use", occurring when the chosen TCP port is occupied.',
        bn: 'EADDRINUSE মানে হলো নির্বাচিত পোর্টটি অন্য কোনো সফটওয়্যারে ইতিমধ্যে চালু আছে।'
      }
    },
    {
      id: 'nod-srv-ex3',
      kind: 'mcq',
      topic: 'node: parsing POST request body',
      question: {
        en: 'How does a raw Node.js HTTP server receive the body data of an incoming POST request?',
        bn: 'নেটিভ Node.js HTTP সার্ভার একটি আগত POST রিকোয়েস্টের বডি ডেটা কীভাবে গ্রহণ করে?'
      },
      options: [
        { en: 'As an asynchronous stream of Buffer chunks emitted via "data" and "end" events on req', bn: 'req অবজেক্টের "data" ও "end" ইভেন্টের মাধ্যমে বাফার চাঙ্কের অ্যাসিনক্রোনাস স্ট্রিম হিসেবে' },
        { en: 'Synchronously as a plain string inside req.body immediately on arrival', bn: 'আসার সাথে সাথেই req.body-তে সরাসরি প্লেইন টেক্সট হিসেবে' },
        { en: 'Node.js automatically saves it to a file on disk', bn: 'Node.js নিজে নিজেই এটি হার্ডডিস্কে সেভ করে ফেলে' },
        { en: 'Raw Node.js cannot receive POST requests', bn: 'নেটিভ Node.js দিয়ে POST রিকোয়েস্ট নেওয়া যায় না' }
      ],
      answer: 0,
      hint: {
        en: 'Stream chunks on req object.',
        bn: 'req অবজেক্টের ওপর স্ট্রিম চাঙ্ক।'
      },
      explanation: {
        en: 'In raw Node.js, req is a Readable Stream. Payloads must be collected across "data" chunk events and decoded when "end" fires.',
        bn: 'নেটিভ Node-এ req একটি রিডেবল স্ট্রিম, তাই ডেটা পেতে "data" ইভেন্টে চাঙ্ক সংগ্রহ করে "end" ইভেন্টে প্রসেস করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'nod-srv-quiz',
    title: { en: 'Node.js Native HTTP Server Quiz', bn: 'Node.js নেটিভ HTTP সার্ভার কুইজ' },
    questions: [
      {
        id: 'nsq1',
        kind: 'mcq',
        topic: 'node: WHATWG URL searchParams',
        question: {
          en: 'In modern Node.js, what is the standard recommended class for parsing query strings and pathnames from URLs?',
          bn: 'আধুনিক Node.js-এ URL থেকে কুয়েরি স্ট্রিং ও পাথনেম পার্স করার জন্য কোন স্ট্যান্ডার্ড ক্লাসটি ব্যবহারের সুপারিশ করা হয়?'
        },
        options: [
          { en: 'The global WHATWG URL class and URLSearchParams', bn: 'গ্লোবাল WHATWG URL ক্লাস ও URLSearchParams' },
          { en: 'The deprecated url.parse() function', bn: 'ডেপ্রিকেটেড url.parse() ফাংশন' },
          { en: 'A custom regular expression split on "?"', bn: '"?" দিয়ে কাস্টম রেজেক্স স্প্লিট' },
          { en: 'JSON.parse()', bn: 'JSON.parse()' }
        ],
        answer: 0,
        hint: {
          en: 'WHATWG URL API.',
          bn: 'WHATWG URL এপিআই।'
        },
        explanation: {
          en: 'The WHATWG URL standard provides the new URL() and URLSearchParams classes, replacing the legacy url.parse API.',
          bn: 'WHATWG URL স্ট্যান্ডার্ড আধুনিক ব্রাউজার ও Node.js উভয়ের জন্যই একটি মানসম্মত ও নিরাপদ URL পার্সিং পদ্ধতি।'
        }
      },
      {
        id: 'nsq2',
        kind: 'mcq',
        topic: 'node: Content-Type header importance',
        question: {
          en: 'Why is setting the correct Content-Type header essential when serving static files from a Node.js server?',
          bn: 'Node.js সার্ভার থেকে স্ট্যাটিক ফাইল পরিবেশন করার সময় সঠিক Content-Type হেডার দেওয়া কেন জরুরি?'
        },
        options: [
          { en: 'It informs the client browser how to interpret, parse, and render the received bytes (e.g. as HTML, CSS, or JSON)', bn: 'এটি ক্লায়েন্ট ব্রাউজারকে নির্দেশ দেয় যে প্রাপ্ত বাইটগুলো কীভাবে রেন্ডার করতে হবে (যেমন HTML, CSS বা JSON হিসেবে)' },
          { en: 'Without it, Node.js refuses to send the file', bn: 'এটি না দিলে Node.js ফাইল পাঠাতে অস্বীকৃতি জানায়' },
          { en: 'It encrypts the payload across the network', bn: 'এটি ডেটা এনক্রিপ্ট করে' },
          { en: 'It compresses the file automatically', bn: 'এটি ফাইলকে স্বয়ংক্রিয়ভাবে জিপ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Instructs browser how to render bytes.',
          bn: 'ব্রাউজারকে ডেটা রেন্ডার করার নিয়ম বাতলে দেয়।'
        },
        explanation: {
          en: 'The Content-Type MIME header tells the browser whether to render incoming bytes as an HTML document, CSS stylesheet, or executable script.',
          bn: 'Content-Type হেডার দেখে ব্রাউজার বুঝতে পারে আগত ডেটা টেক্সট, সিএসএস, জেএস নাকি কোনো ছবি।'
        }
      },
      {
        id: 'nsq3',
        kind: 'mcq',
        topic: 'node: EADDRINUSE port binding error',
        question: {
          en: 'What error code is emitted when a Node.js server attempts to listen on a port already in use by another process?',
          bn: 'Node.js সার্ভার অন্য কোনো প্রসেস দ্বারা ব্যবহৃত পোর্টে লিসেন করার চেষ্টা করলে কোন এরর কোড পাওয়া যায়?'
        },
        options: [
          { en: 'EADDRINUSE (Error: Address already in use)', bn: 'EADDRINUSE (এরর: অ্যাড্রেস বা পোর্ট ইতিমধ্যে ব্যবহৃত)' },
          { en: 'ECONNREFUSED', bn: 'ECONNREFUSED' },
          { en: 'ETIMEDOUT', bn: 'ETIMEDOUT' },
          { en: 'ENOTFOUND', bn: 'ENOTFOUND' }
        ],
        answer: 0,
        hint: {
          en: 'Port is already bound by another socket.',
          bn: 'পোর্টটি অন্য কোনো সকেট দ্বারা আটকে রাখা।'
        },
        explanation: {
          en: 'EADDRINUSE occurs when server.listen() fails because another running process or container has already bound to that TCP port on the host.',
          bn: 'EADDRINUSE ঘটে যখন কাঙ্ক্ষিত টিসিপি পোর্টটিতে অন্য কোনো সফটওয়্যার আগে থেকেই যুক্ত থাকে।'
        }
      },
      {
        id: 'nsq4',
        kind: 'mcq',
        topic: 'node: readable stream req body collection',
        question: {
          en: 'Why must incoming POST body data in native http.createServer be assembled using event listeners ("data" and "end")?',
          bn: 'নেটিভ http.createServer-এ ইনকামিং POST বডি ডেটা কেন "data" ও "end" ইভেন্ট লিসেনারের মাধ্যমে সংগ্রহ করতে হয়?'
        },
        options: [
          { en: 'Because the incoming request is a Readable Stream that transmits payload data in asynchronous discrete chunks over TCP', bn: 'কারণ ইনকামিং রিকোয়েস্ট একটি Readable Stream যা নেটওয়ার্ক দিয়ে ধাপে ধাপে খণ্ড খণ্ড চাঙ্কে ডেটা পাঠায়' },
          { en: 'Because Node.js cannot process text files synchronously', bn: 'কারণ Node.js টেক্সট প্রসেস করতে পারে না' },
          { en: 'To automatically encrypt the data', bn: 'ডেটা স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করার জন্য' },
          { en: 'Because HTTP headers are forbidden in POST', bn: 'কারণ POST-এ হেডার নিষেধ' }
        ],
        answer: 0,
        hint: {
          en: 'The request is an asynchronous readable byte stream.',
          bn: 'রিকোয়েস্ট একটি অ্যাসিনক্রোনাস রিডেবল বাইট স্ট্রিম।'
        },
        explanation: {
          en: 'Native Node.js does not buffer the entire request body into memory automatically; it streams chunks via the "data" event, signaling completion with "end".',
          bn: 'নেটিভ Node পুরো বডি একবারে মেমরিতে তোলে না; এটি "data" ইভেন্টের মাধ্যমে চাঙ্ক পাঠায় এবং "end" ইভেন্টে সম্পূর্ণ সমাপ্তি জানায়।'
        }
      }
    ]
  }
};
