import type { Lesson } from '../../../lib/types';

export const TheFirstPlateLesson: Lesson = {
  slug: 'the-first-plate',
  tech: 'nodejs',
  title: {
    en: 'HTTP Servers — Native Request Handling, Routing, and Body Parsing',
    bn: 'এইচটিটিপি সার্ভার: নেটিভ রিকোয়েস্ট হ্যান্ডলিং, রাউটিং এবং বডি পার্সিং'
  },
  summary: {
    en: 'Modern web frameworks such as Express, Fastify, and NestJS build entirely upon the foundation of the native node:http module. Every incoming connection yields an IncomingMessage readable stream representing the client request and a ServerResponse writable stream representing the HTTP response. Because request payloads stream across the network in asynchronous chunks, servers must assemble incoming buffers while enforcing strict byte-length ceilings to block Denial-of-Service memory floods with HTTP status 413. Furthermore, enterprise production deployments must implement graceful shutdowns: upon receiving SIGTERM, the server halts accepting new TCP connections while allowing pending in-flight requests to complete without connection resets.',
    bn: 'এক্সপ্রেস, ফাস্টিফাই এবং নেস্টজেএস এর মতো আধুনিক ওয়েব ফ্রেমওয়ার্কগুলো সম্পূর্ণরূপে নেটিভ node:http মডিউলের ওপর প্রতিষ্ঠিত। প্রতিটি ইনকামিং সংযোগ একটি IncomingMessage রিডেবল স্ট্রিম এবং একটি ServerResponse রাইটেবল স্ট্রিম তৈরি করে। যেহেতু রিকোয়েস্টের বডি নেটওয়ার্কের মধ্য দিয়ে ছোট ছোট খণ্ডে প্রবাহিত হয়ে আসে, তাই মেমরি উপচে পড়া আটকাতে সার্ভারকে নির্দিষ্ট বাইট সীমা অতিক্রম করলেই ৪১৩ স্ট্যাটাস দিয়ে কানেকশন বন্ধ করতে হয়। তাছাড়া প্রোডাকশন সার্ভারে মার্জিত শাটডাউন (graceful shutdown) প্রয়োগ করা অপরিহার্য: সিগটার্ম (SIGTERM) সিগন্যাল আসামাত্র সার্ভার নতুন রিকোয়েস্ট নেওয়া বন্ধ করে এবং চলমান কাজগুলো নিরাপদে শেষ করার সুযোগ দেয়।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-bells-and-alarms',
    tech: 'nodejs',
    title: {
      en: 'EventEmitter and Event-Driven Architecture — Robust Error Handling',
      bn: 'ইভেন্টএমিটার ও ইভেন্ট-চালিত আর্কিটেকচার: নির্ভরযোগ্য এরর হ্যান্ডলিং'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'native-http-architecture',
      text: {
        en: 'The Anatomy of Node.js Native HTTP Servers',
        bn: 'নোড.জেএস নেটিভ এইচটিটিপি সার্ভারের গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications in Node.js, understanding how the native runtime handles HTTP sockets reveals how modern frameworks operate under the hood. The core node:http module provides a high-performance event-driven web server directly on top of libuv network sockets.',
        bn: 'যখন আপনি নোড.জেএসে ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন নেটিভ রানটাইম কীভাবে এইচটিটিপি সকেট পরিচালনা করে তা বোঝা অপরিহার্য। মূল node:http মডিউলটি সরাসরি libuv নেটওয়ার্ক সকেটের ওপর একটি উচ্চক্ষমতাসম্পন্ন ইভেন্ট-চালিত ওয়েব সার্ভার সরবরাহ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Calling http.createServer() registers a listener for new HTTP connections. For every connection, Node instantiates two distinct stream objects. First, an IncomingMessage readable stream delivers request headers and body chunks. Second, a ServerResponse writable stream sends status codes and data back to the client.',
        bn: 'http.createServer() কল করলে প্রতিটি নতুন এইচটিটিপি সংযোগের জন্য একটি লিসেনার যুক্ত হয়। প্রতিটি সংযোগে নোড দুটি পৃথক স্ট্রিম অবজেক্ট সরবরাহ করে। প্রথমটি হলো IncomingMessage রিডেবল স্ট্রিম যা হেডার ও বডি খণ্ড বহন করে। দ্বিতীয়টি হলো ServerResponse রাইটেবল স্ট্রিম যা ক্লায়েন্টকে স্ট্যাটাস কোড ও ডাটা ফেরত পাঠাতে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'incoming-message',
          def: {
            en: 'A Readable stream subclass representing an incoming client HTTP request, headers, and payload.',
            bn: 'একটি রিডেবল স্ট্রিম যা ক্লায়েন্টের আগত এইচটিটিপি রিকোয়েস্ট, হেডার এবং বডি ডাটা ধারণ করে।'
          }
        },
        {
          term: 'server-response',
          def: {
            en: 'A Writable stream subclass used to send HTTP headers, status codes, and chunked body data back to the client.',
            bn: 'একটি রাইটেবল স্ট্রিম যার মাধ্যমে ক্লায়েন্টকে এইচটিটিপি হেডার, স্ট্যাটাস কোড এবং বডি ডাটা ফেরত পাঠানো হয়।'
          }
        },
        {
          term: 'payload-too-large',
          def: {
            en: 'HTTP status code 413 returned when an uploaded request body exceeds the server’s configured memory threshold.',
            bn: 'এইচটিটিপি স্ট্যাটাস কোড ৪১৩, যা আপলোড করা ডাটা নির্ধারিত মেমরি সীমা অতিক্রম করলে পাঠানো হয়।'
          }
        },
        {
          term: 'graceful-shutdown',
          def: {
            en: 'A process termination pattern that finishes pending in-flight HTTP requests before closing server sockets.',
            bn: 'একটি নিয়ন্ত্রিত শাটডাউন কৌশল যা চলমান সমস্ত রিকোয়েস্ট শেষ করার পরই কেবল সার্ভার সম্পূর্ণ বন্ধ করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'http-status-codes-table',
      text: {
        en: 'Common HTTP Status Codes and Production Header Standards',
        bn: 'প্রচলিত এইচটিটিপি স্ট্যাটাস কোড এবং হেডার স্ট্যান্ডার্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Correctly signaling HTTP status codes and response headers ensures API consistency and client compatibility.',
        bn: 'সঠিক এইচটিটিপি স্ট্যাটাস কোড এবং রেসপন্স হেডার নিশ্চিত করলে এপিআইয়ের মান ও ক্লায়েন্ট সামঞ্জস্য বজায় থাকে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'HTTP Status Code & Name', bn: 'এইচটিটিপি স্ট্যাটাস কোড ও নাম' },
        { en: 'Category', bn: 'বিভাগ' },
        { en: 'Meaning in Production', bn: 'প্রোডাকশনে ব্যবহারিক অর্থ' },
        { en: 'Crucial Response Header', bn: 'গুরুত্বপূর্ণ রেসপন্স হেডার' }
      ],
      rows: [
        [
          { en: '200 OK', bn: '200 OK' },
          { en: 'Success (2xx)', bn: 'সাফল্য (2xx)' },
          { en: 'Standard response for successful HTTP requests', bn: 'সফল এইচটিটিপি রিকোয়েস্টের সাধারণ রেসপন্স' },
          { en: 'Content-Type: application/json', bn: 'Content-Type: application/json' }
        ],
        [
          { en: '201 Created', bn: '201 Created' },
          { en: 'Success (2xx)', bn: 'সাফল্য (2xx)' },
          { en: 'New resource successfully created on server', bn: 'সার্ভারে নতুন রিসোর্স সফলভাবে তৈরি হয়েছে' },
          { en: 'Location: /api/v1/resource/123', bn: 'Location: /api/v1/resource/123' }
        ],
        [
          { en: '400 Bad Request', bn: '400 Bad Request' },
          { en: 'Client Error (4xx)', bn: 'ক্লায়েন্ট ত্রুটি (4xx)' },
          { en: 'Invalid JSON body or missing required query parameter', bn: 'ত্রুটিপূর্ণ JSON বা প্রয়োজনীয় প্যারামিটারের ঘাটতি' },
          { en: 'Content-Type: application/json', bn: 'Content-Type: application/json' }
        ],
        [
          { en: '404 Not Found', bn: '404 Not Found' },
          { en: 'Client Error (4xx)', bn: 'ক্লায়েন্ট ত্রুটি (4xx)' },
          { en: 'Requested endpoint URL or resource does not exist', bn: 'অনুরোধকৃত ইউআরএল বা রিসোর্স খুঁজে পাওয়া যায়নি' },
          { en: 'Content-Type: application/json', bn: 'Content-Type: application/json' }
        ],
        [
          { en: '413 Payload Too Large', bn: '413 Payload Too Large' },
          { en: 'Client Error (4xx)', bn: 'ক্লায়েন্ট ত্রুটি (4xx)' },
          { en: 'Request body exceeded maximum byte size limit', bn: 'রিকোয়েস্টের বডি নির্ধারিত মেমরি সাইজ অতিক্রম করেছে' },
          { en: 'Connection: close', bn: 'Connection: close' }
        ],
        [
          { en: '500 Internal Server Error', bn: '500 Internal Server Error' },
          { en: 'Server Error (5xx)', bn: 'সার্ভার ত্রুটি (5xx)' },
          { en: 'Unhandled server exception or database connectivity loss', bn: 'অপ্রত্যাশিত সার্ভার ক্র্যাশ বা ডেটাবেস সংযোগ বিচ্ছিন্ন' },
          { en: 'Content-Type: application/json', bn: 'Content-Type: application/json' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-http-server-code',
      text: {
        en: 'Executable Native HTTP Server with Streaming Body and Limit Protection',
        bn: 'স্ট্রিমিং বডি পার্সিং ও সাইজ লিমিটসহ নেটিভ এইচটিটিপি সার্ভার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program creates an HTTP server that streams incoming request bodies, guards against oversized payloads with HTTP 413, and dispatches JSON responses.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি এইচটিটিপি সার্ভার তৈরি করে যা আগত ডাটা স্ট্রিম করে পড়ে, অতিরিক্ত ডাটা এলে ৪১৩ স্ট্যাটাস দিয়ে সুরক্ষা দেয় এবং JSON রেসপন্স পাঠায়।'
      }
    },
    {
      type: 'code',
      code: `import http from 'node:http';

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'POST' && url === '/api/echo') {
    const chunks = [];
    let receivedBytes = 0;
    const MAX_BYTES = 1024 * 1024; // 1MB limit

    for await (const chunk of req) {
      receivedBytes += chunk.length;
      if (receivedBytes > MAX_BYTES) {
        res.writeHead(413, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload Too Large' }));
        return;
      }
      chunks.push(chunk);
    }

    const body = JSON.parse(Buffer.concat(chunks).toString('utf-8'));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ received: body, bytes: receivedBytes }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
});

console.log('HTTP Server instantiated, max size bound:', 1048576);
// prints: HTTP Server instantiated, max size bound: 1048576
// status code = 200`
    },
    {
      type: 'heading',
      id: 'graceful-shutdown-lifecycle',
      text: {
        en: 'Production Graceful Shutdown Implementation',
        bn: 'প্রোডাকশন গ্রেসিফুল শাটডাউন আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In containerized production clusters (such as Docker and Kubernetes), servers frequently restart during deployments. When Node receives a termination signal (SIGTERM or SIGINT), terminating abruptly drops in-flight client payments and requests. Calling server.close() stops accepting new connections while permitting active requests to finish cleanly. Production systems pair this with a safety timer (e.g. 10 seconds) that forces process.exit() only if lagging sockets refuse to drain.',
        bn: 'ডকার এবং কুবারনেটিসের মতো কনটেইনার ক্লাস্টারে নতুন ডিপ্লয়মেন্টের সময় সার্ভার প্রায়ই রিস্টার্ট হয়। নোড যখন বন্ধ হওয়ার সিগন্যাল (SIGTERM বা SIGINT) পায়, তখন তৎক্ষণাৎ বন্ধ হলে গ্রাহকদের চলমান পেমেন্ট বা রিকোয়েস্ট কেটে যায়। server.close() ডাকলে সার্ভার নতুন সংযোগ নেওয়া বন্ধ করে দেয় এবং চলমান কাজগুলো নিরাপদে শেষ করার সুযোগ দেয়। প্রোডাকশন ব্যবস্থায় এর সাথে একটি ১০ সেকেন্ডের সেফটি টাইমার রাখা হয়, যা কোনো সকেট আটকে থাকলে জোরপূর্বক process.exit() সম্পন্ন করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Streams under the hood: req is an IncomingMessage readable stream; res is a ServerResponse writable stream.',
          bn: 'অভ্যন্তরীণ স্ট্রিম: req হলো একটি IncomingMessage রিডেবল স্ট্রিম এবং res হলো ServerResponse রাইটেবল স্ট্রিম।'
        },
        {
          en: 'Enforce body limits: Always guard streaming body accumulation to return HTTP 413 before memory exhausts.',
          bn: 'বডি সাইজ সীমা: মেমরি ফুরিয়ে যাওয়া ঠেকাতে স্ট্রিম জমা করার সময় অবশ্যই ৪১৩ স্ট্যাটাস দিয়ে সাইজ নিয়ন্ত্রণ করুন।'
        },
        {
          en: 'Headers before body: Always invoke res.writeHead() or res.setHeader() before calling res.write() or res.end().',
          bn: 'বডির পূর্বে হেডার: রেসপন্সের বডি লেখার পূর্বে সর্বদা res.writeHead() বা res.setHeader() নির্ধারণ করুন।'
        },
        {
          en: 'Graceful shutdown: Handle SIGTERM cleanly with server.close() to prevent dropped transactions during deployment.',
          bn: 'মার্জিত শাটডাউন: ডিপ্লয়মেন্টের সময় ট্রানজ্যাকশন কেটে যাওয়া রোধে server.close() দিয়ে SIGTERM হ্যান্ডল করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fp-ex1',
      kind: 'mcq',
      topic: 'streaming-request-body-dos-defense',
      question: {
        en: 'Why is it critical to enforce a maximum byte limit while reading chunks from req in a native Node.js HTTP server?',
        bn: 'একটি নেটিভ নোড.জেএস এইচটিটিপি সার্ভারে req থেকে ডাটা খণ্ড পড়ার সময় সর্বোচ্চ বাইট সীমা প্রয়োগ করা কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'To prevent Denial-of-Service attacks where an attacker sends a multi-gigabyte payload that exhausts server RAM and crashes the Node process',
          bn: 'ডিনায়াল-অব-সার্ভিস আক্রমণ প্রতিহত করতে, যেখানে আক্রমণকারী গিগাবাইট আকারের ডাটা পাঠিয়ে সার্ভারের র‍্যাম ফুরিয়ে ক্র্যাশ ঘটাতে পারে'
        },
        {
          en: 'Because Node.js does not allow files larger than 10 bytes to ever be transmitted',
          bn: 'কারণ নোড.জেএস ১০ বাইটের চেয়ে বড় কোনো ফাইল পাঠানোর অনুমতি দেয় না'
        },
        {
          en: 'Because exceeding limits causes the internet router to disconnect from electricity',
          bn: 'কারণ সীমা অতিক্রম করলে ইন্টারনেট রাউটার বিদ্যুৎ সংযোগ থেকে বিচ্ছিন্ন হয়ে যায়'
        },
        {
          en: 'To make all HTTP requests convert into UDP packets',
          bn: 'সমস্ত এইচটিটিপি রিকোয়েস্টকে ইউডিপি (UDP) প্যাকেটে রূপান্তর করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without a size ceiling, Buffer.concat() will attempt to allocate gigabytes until V8 hits an Out-Of-Memory crash.',
        bn: 'সাইজ সীমা না থাকলে বাফার মেমরি ক্রমাগত বাড়তে বাড়তে মেমরি ক্র্যাশ ঘটাবে।'
      },
      explanation: {
        en: 'Enforcing a byte limit stops memory exhaustion DoS attacks early, allowing the server to reject giant requests with HTTP 413.',
        bn: 'বাইট সীমা প্রয়োগ করলে মেমরি ক্র্যাশ আক্রমণ ঠেকানো যায় এবং সার্ভার সময়মতো ৪১৩ স্ট্যাটাস দিয়ে সংযোগ বন্ধ করতে পারে।'
      }
    },
    {
      id: 'fp-ex2',
      kind: 'mcq',
      topic: 'headers-sent-error-cause',
      question: {
        en: 'What causes the notorious "ERR_HTTP_HEADERS_SENT: Cannot set headers after they are sent to the client" error in Node.js?',
        bn: 'নোড.জেএসে কুখ্যাত "ERR_HTTP_HEADERS_SENT: Cannot set headers after they are sent to the client" ত্রুটিটি কেন ঘটে?'
      },
      options: [
        {
          en: 'Attempting to call res.setHeader() or res.writeHead() after chunks of the response body or res.end() have already been transmitted',
          bn: 'রেসপন্স বডির কিছু অংশ বা res.end() পাঠানো হয়ে যাওয়ার পর পুনরায় res.setHeader() বা res.writeHead() কল করার কারণে'
        },
        {
          en: 'Using the HTTP protocol instead of the FTP protocol',
          bn: 'এফটিপি প্রোটোকলের বদলে এইচটিটিপি প্রোটোকল ব্যবহার করার কারণে'
        },
        {
          en: 'Sending a response on a Tuesday afternoon',
          bn: 'মঙ্গলবার বিকেলে সার্ভার থেকে কোনো রেসপন্স পাঠানোর কারণে'
        },
        {
          en: 'Configuring the server with an SSL certificate',
          bn: 'সার্ভারে একটি এসএসএল সার্টিফিকেট কনফিগার করার কারণে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In HTTP, headers must strictly precede the message body. Once the body starts streaming, headers cannot be altered.',
        bn: 'এইচটিটিপিতে হেডার সর্বদা বডির পূর্বে পাঠাতে হয়। বডি পাঠানো শুরু হলে আর হেডার পরিবর্তন করা যায় না।'
      },
      explanation: {
        en: 'Once HTTP headers are flushed to the network socket, modifying status codes or headers is physically impossible in the HTTP protocol.',
        bn: 'একবার নেটওয়ার্ক সকেটে হেডার চলে যাওয়ার পর প্রোটোকল অনুযায়ী আর নতুন কোনো হেডার বা স্ট্যাটাস যোগ করা যায় না।'
      }
    },
    {
      id: 'fp-ex3',
      kind: 'mcq',
      topic: 'server-close-behavior',
      question: {
        en: 'What does server.close() do when initiated during a graceful shutdown sequence?',
        bn: 'গ্রেসিফুল শাটডাউন প্রক্রিয়ার সময় server.close() ঠিক কী ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It stops the server from accepting new incoming TCP connections while allowing existing in-flight connections to complete naturally',
          bn: 'এটি সার্ভারে নতুন কোনো ইনকামিং টিসিপি সংযোগ নেওয়া বন্ধ করে কিন্তু চলমান সক্রিয় সংযোগগুলোকে স্বাভাবিকভাবে শেষ হতে দেয়'
        },
        {
          en: 'It immediately cuts power to the CPU motherboard',
          bn: 'এটি তাৎক্ষণিকভাবে সিপিইউ মাদারবোর্ডের বিদ্যুৎ বিচ্ছিন্ন করে'
        },
        {
          en: 'It deletes all user records from the production database',
          bn: 'এটি প্রোডাকশন ডেটাবেস থেকে সব ব্যবহারকারীর তথ্য মুছে ফেলে'
        },
        {
          en: 'It crashes the operating system kernel immediately',
          bn: 'এটি তাৎক্ষণিকভাবে অপারেটিং সিস্টেমের কার্নেল ক্র্যাশ করায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'It stops new clients from entering the restaurant, but lets diners who have already ordered finish their meals.',
        bn: 'রেস্তোরাঁয় নতুন কাউকে ঢুকতে দেওয়া হয় না, কিন্তু যাদের খাবার অর্ডার হয়ে গেছে তাদের খাওয়া শেষ করতে দেওয়া হয়।'
      },
      explanation: {
        en: 'server.close() rejects new requests while waiting for current requests to finish, ensuring zero dropped user transactions.',
        bn: 'server.close() নতুন রিকোয়েস্ট বন্ধ করে চলতি রিকোয়েস্টগুলো শেষ হতে দেয়, ফলে গ্রাহকের কোনো কাজ মাঝপথে নষ্ট হয় না।'
      }
    }
  ],
  quiz: {
    id: 'the-first-plate-quiz',
    title: {
      en: 'HTTP Servers Quiz',
      bn: 'এইচটিটিপি সার্ভার কুইজ'
    },
    questions: [
      {
        id: 'fp-q1',
        kind: 'mcq',
        topic: 'incoming-message-stream-type',
        question: {
          en: 'What fundamental Node.js stream type is the req parameter passed into the http.createServer() callback?',
          bn: 'http.createServer() কলব্যাকে আসা req প্যারামিটারটি মূলত কোন ধরনের নোড.জেএস স্ট্রিম?'
        },
        options: [
          {
            en: 'A Readable stream (http.IncomingMessage)',
            bn: 'একটি রিডেবল স্ট্রিম (http.IncomingMessage)'
          },
          {
            en: 'A Writable-only stream',
            bn: 'কেবলমাত্র একটি রাইটেবল স্ট্রিম'
          },
          {
            en: 'A static string with no streaming properties',
            bn: 'একটি সাধারণ স্ট্যাটিক স্ট্রিং যার কোনো স্ট্রিম বৈশিষ্ট্য নেই'
          },
          {
            en: 'A synchronous file pointer',
            bn: 'একটি সিঙ্ক্রোনাস ফাইল পয়েন্টার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Because req is a stream, you can use "for await (const chunk of req)" or listen to "data" events to read the body.',
          bn: 'req একটি স্ট্রিম হওয়ায় আপনি "for await (const chunk of req)" বা "data" ইভেন্ট দিয়ে বডি পড়তে পারেন।'
        },
        explanation: {
          en: 'IncomingMessage inherits from stream.Readable, allowing streaming consumption of client payloads.',
          bn: 'IncomingMessage হলো stream.Readable এর সাবক্লাস, যা ক্লায়েন্ট থেকে আসা ডাটা স্ট্রিম আকারে পড়তে সাহায্য করে।'
        }
      },
      {
        id: 'fp-q2',
        kind: 'mcq',
        topic: 'http-413-status-meaning',
        question: {
          en: 'What HTTP status code specifically signifies that the server refuses to process a request because the payload is larger than configured limits?',
          bn: 'কোন এইচটিটিপি স্ট্যাটাস কোডটি নির্দিষ্ট করে বোঝায় যে আপলোড করা ডাটার আকার সার্ভারের নির্ধারিত সীমা ছাড়িয়ে যাওয়ায় তা প্রত্যাখ্যাত হয়েছে?'
        },
        options: [
          {
            en: '413 Payload Too Large',
            bn: '৪১৩ পেলোড টু লার্জ (413 Payload Too Large)'
          },
          {
            en: '200 OK',
            bn: '২০০ ওকে (200 OK)'
          },
          {
            en: '301 Moved Permanently',
            bn: '৩০১ স্থায়ীভাবে সরানো হয়েছে (301 Moved Permanently)'
          },
          {
            en: '404 Not Found',
            bn: '৪০৪ পাওয়া যায়নি (404 Not Found)'
          }
        ],
        answer: 0,
        hint: {
          en: 'In standard HTTP semantics, 413 tells the client that its request entity was rejected for excessive size.',
          bn: 'এইচটিটিপি মানদণ্ডে ৪১৩ কোডটি ক্লায়েন্টকে জানায় যে তার প্রেরিত তথ্যের আকার মাত্রাতিরিক্ত হওয়ায় তা গৃহীত হয়নি।'
        },
        explanation: {
          en: 'HTTP 413 Payload Too Large is the RFC standard code returned when upload limits are exceeded.',
          bn: 'এইচটিটিপি ৪১৩ (Payload Too Large) হলো মানসম্মত কোড যা অতিরিক্ত বড় সাইজের ফাইল বা রিকোয়েস্টে পাঠানো হয়।'
        }
      },
      {
        id: 'fp-q3',
        kind: 'mcq',
        topic: 'sigterm-signal-handling',
        question: {
          en: 'Why do Kubernetes and Docker containers send the SIGTERM signal to running Node.js applications before terminating them?',
          bn: 'কুবারনেটিস এবং ডকার কনটেইনারগুলো বন্ধ করার আগে চলমান নোড.জেএস অ্যাপ্লিকেশনে কেন SIGTERM সিগন্যাল পাঠায়?'
        },
        options: [
          {
            en: 'To give the application an opportunity to finish active requests, close database pools, and shut down gracefully before SIGKILL forcefully kills it',
            bn: 'অ্যাপ্লিকেশনটিকে যাতে চলমান রিকোয়েস্ট ও ডেটাবেস সংযোগ নিরাপদে বন্ধ করার সুযোগ দেওয়া যায়, জোরপূর্বক SIGKILL পাঠানোর পূর্বে'
          },
          {
            en: 'To permanently wipe the server hard drive',
            bn: 'সার্ভারের হার্ডডিস্ক চিরতরে মুছে ফেলার জন্য'
          },
          {
            en: 'To check the current room temperature of the data center',
            bn: 'ডাটা সেন্টারের ঘরের তাপমাত্রা যাচাই করার জন্য'
          },
          {
            en: 'To speed up network bandwidth by 50 percent',
            bn: 'নেটওয়ার্কের গতি ৫০ শতাংশ বৃদ্ধি করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'SIGTERM is a graceful notice. If the app fails to exit within a grace period (e.g. 30s), SIGKILL follows.',
          bn: 'SIGTERM হলো একটি সতর্কবার্তা যাতে সময়মতো কাজ গুটিয়ে নেওয়া যায়। অন্যথায় SIGKILL এসে জোর করে বন্ধ করে দেয়।'
        },
        explanation: {
          en: 'SIGTERM provides a grace window for clean connection draining. Handling it prevents dropping transactions in production.',
          bn: 'SIGTERM সার্ভারকে নিরাপদে কাজ শেষ করার সুযোগ দেয়, ফলে প্রোডাকশনে কোনো ব্যবহারকারীর ট্রানজ্যাকশন মাঝপথে নষ্ট হয় না।'
        }
      },
      {
        id: 'fp-q4',
        kind: 'mcq',
        topic: 'content-type-json-specification',
        question: {
          en: 'Which HTTP response header must be sent to notify web browsers and API consumers that the response body contains UTF-8 formatted JSON?',
          bn: 'রেসপন্স বডিতে UTF-8 ফরম্যাটের JSON ডাটা রয়েছে তা ব্রাউজার ও এপিআই গ্রাহককে জানাতে কোন এইচটিটিপি হেডারটি পাঠাতে হয়?'
        },
        options: [
          {
            en: 'Content-Type: application/json; charset=utf-8',
            bn: 'Content-Type: application/json; charset=utf-8'
          },
          {
            en: 'File-Format: spreadsheet/excel',
            bn: 'File-Format: spreadsheet/excel'
          },
          {
            en: 'Data-Mode: binary-audio',
            bn: 'Data-Mode: binary-audio'
          },
          {
            en: 'Protocol-Type: video/mp4',
            bn: 'Protocol-Type: video/mp4'
          }
        ],
        answer: 0,
        hint: {
          en: 'Content-Type tells the client how to interpret the raw bytes of the response body.',
          bn: 'Content-Type গ্রাহককে নির্দেশ করে কীভাবে রেসপন্সের কাঁচা বাইটগুলো পড়তে বা পার্স করতে হবে।'
        },
        explanation: {
          en: 'Setting Content-Type to application/json instructs HTTP clients to parse the incoming text as a JSON object.',
          bn: 'Content-Type হিসেবে application/json নির্ধারণ করলে ক্লায়েন্ট আগত লেখাকে অবজেক্ট হিসেবে পার্স করতে পারে।'
        }
      }
    ]
  }
};
