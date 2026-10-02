import type { Lesson } from '../../../lib/types';

export const httpDeepLesson: Lesson = {
  slug: 'http-deep',
  tech: 'networking',
  title: {
    en: 'HTTP Deep — Once the pipe exists, HTTP is the spoken language on top',
    bn: 'পাইপ তৈরি হলে HTTP তার ওপরের কথ্য ভাষা: মেথড হলো ক্রিয়া, স্ট্যাটাস'
  },
  summary: {
    en: 'Once the pipe exists, HTTP is the spoken language on top: methods are verbs, status codes are verdicts, headers are the entire hidden contract. Then the protocol keeps renegotiating itself for speed: HTTP/1.1 → 2 → 3.',
    bn: 'পাইপ তৈরি হলে HTTP তার ওপরের কথ্য ভাষা: মেথড হলো ক্রিয়া, স্ট্যাটাস কোড রায়, হেডার পুরো গোপন চুক্তি। তারপর গতির জন্য প্রোটোকল নিজেই ফের ফের আলোচনায় বসে: HTTP/1.1 → 2 → 3।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'WHAT is an HTTP message, really?',
        bn: 'HTTP মেসেজ আসলে কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build or debug web applications, every interaction is governed by the structured rules of the HTTP protocol. A client transmits a request line with an HTTP method, followed by headers and an optional body, and the server returns a status code and response payload.',
        bn: 'যখন আপনি ওয়েব অ্যাপ্লিকেশন তৈরি বা ডিবাগ করেন, তখন প্রতিটি যোগাযোগ এইচটিটিপি প্রোটোকলের সুনির্দিষ্ট নিয়ম মেনে চলে। ক্লায়েন্ট একটি মেথডসহ রিকোয়েস্ট লাইন, প্রয়োজনীয় হেডার ও ঐচ্ছিক বডি পাঠায়, এবং সার্ভার একটি স্ট্যাটাস কোডসহ রেসপন্স ফেরত দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'HTTP methods define standard operational contracts. Safe methods like GET only read data without altering state, while idempotent methods like PUT and DELETE produce the identical state when repeated. In contrast, POST operations create resources and are not inherently safe to retry without safeguards.',
        bn: 'এইচটিটিপি মেথডগুলো কাজের সুনির্দিষ্ট চুক্তি মেনে চলে। নিরাপদ মেথড যেমন GET কোনো পরিবর্তন ছাড়াই ডাটা পড়ে, আর আইডেমপোটেন্ট মেথড যেমন PUT ও DELETE বারবার চালালেও সিস্টেমের অবস্থা অপরিবর্তিত থাকে। অন্যদিকে POST নতুন রিসোর্স তৈরি করে, তাই এটি পুনরায় চালালে বাড়তি ডাটা তৈরির ঝুঁকি থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'safe / idempotent',
          def: {
            en: 'Safe = reads nothing changes; idempotent = N repeats have the effect of one.',
            bn: 'safe = পড়লে কিছু বদলায় না; idempotent = N বার করলে ফল একবারেরই।'
          }
        },
        {
          term: 'header',
          def: {
            en: 'name: value metadata — negotiation, caching, auth, identity all live here.',
            bn: 'name: value মেটাডেটা — আলোচনা, ক্যাশিং, অথ, পরিচয় সব এখানে।'
          }
        },
        {
          term: 'status family',
          def: {
            en: '2xx success, 3xx redirect/cache, 4xx client error, 5xx server error.',
            bn: '2xx সফলতা, 3xx রিডাইরেক্ট/ক্যাশ, 4xx ক্লায়েন্ট ভুল, 5xx সার্ভার ভুল।'
          }
        },
        {
          term: 'HOL blocking',
          def: {
            en: 'Head-of-line: one slow response stalls the queue behind it (HTTP/1.1 disease, TCP-level in HTTP/2).',
            bn: 'হেড-অফ-লাইন: ধীর একটি রেসপন্স পেছনের সারি আটকে রাখে (HTTP/1.1 রোগ, HTTP/2-এ TCP-স্তরে)।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'WHY the web is mostly header negotiation',
        bn: 'কেন ওয়েব হলো মূলত হেডার আলোচনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The rule row: text, url, accept, html, application, json, authorization, bearer — each rule rides on these terms.',
        bn: 'নিয়ম-সারি: পাঠ্য (text), ইউআরএল (url), accept, html, application, json, authorization, bearer — প্রতি নিয়ম এই শব্দেরই উপরে চড়ে।'
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'HOW caching really works (the economy)',
        bn: 'ক্যাশিং আসলে কাজ করে যেভাবে (অর্থনীতি)'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1️⃣ First fetch: full price',
            bn: '1️⃣ প্রথম আনয়ন: পূর্ণ মূল্য'
          },
          text: {
            en: 'Server sends body + a freshness policy (Cache-Control: max-age=N) and/or a fingerprint (ETag).',
            bn: 'সার্ভার বডি + তাজাপন-নীতি (Cache-Control: max-age=N) দেয়, হয়তো সাথে ফিঙ্গারপ্রিন্ট (ETag)।'
          }
        },
        {
          title: {
            en: '2️⃣ Fresh period: zero RTT',
            bn: '2️⃣ তাজা সময়: শূন্য RTT'
          },
          text: {
            en: 'Within max-age, the browser serves from its cache WITHOUT asking anyone. Fastest network is no network.',
            bn: 'max-age-এর ভেতরে ব্রাউজার কারো না জিজ্ঞেস করে ক্যাশ থেকে দেয়। দ্রুততম নেটওয়ার্ক হলো নেটওয়ার্ক-বিহীন।'
          }
        },
        {
          title: {
            en: '3️⃣ Stale period: conditional revalidation',
            bn: '3️⃣ বাসি সময়: শর্তযুক্ত পুনর্যাচাই'
          },
          text: {
            en: 'After expiry, client asks “changed?” with If-None-Match: etag. If no — 304, no body. One RTT instead of the payload.',
            bn: 'মেয়াদের পর ক্লায়েন্ট জিজ্ঞেস করে “বদলেছে?” — If-None-Match: etag। না-হলে 304, বডি নেই। পেলোডের বদলে এক RTT।'
          }
        },
        {
          title: {
            en: '4️⃣ Changed: new fingerprint, new lease',
            bn: '4️⃣ বদলে গেলে: নতুন ফিঙ্গারপ্রিন্ট, নতুন ইজারা'
          },
          text: {
            en: '200 with the new body and a new ETag; the cycle restarts.',
            bn: 'নতুন বডিসহ 200 আর নতুন ETag; চক্র পুনরারম্ভ।'
          }
        }
      ]
    },
    {
      type: 'code',
      code: `// Simulating an HTTP request/response transaction in Node.js
interface HttpResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  body: string;
}

function processHttpRequest(method: string, path: string, ifNoneMatch?: string): HttpResponse {
  const currentETag = '"v2-aa71"';

  if (method === 'GET' && ifNoneMatch === currentETag) {
    return {
      status: 304,
      statusText: 'Not Modified',
      headers: { 'ETag': currentETag, 'Cache-Control': 'max-age=60' },
      body: ''
    };
  }

  const payload = JSON.stringify({ id: 42, name: 'Alice', role: 'admin' });
  return {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': String(Buffer.byteLength(payload)),
      'ETag': currentETag
    },
    body: payload
  };
}

const resFresh = processHttpRequest('GET', '/api/users/42');
const resCached = processHttpRequest('GET', '/api/users/42', '"v2-aa71"');

console.log('Fresh response status =', resFresh.status, 'body bytes =', resFresh.body.length);
console.log('Cached response status =', resCached.status, 'body bytes =', resCached.body.length);

// prints: Fresh response status = 200 body bytes = 39
// prints: Cached response status = 304 body bytes = 0`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'INTERNAL: 1.1 → 2 → 3, one war against head-of-line',
        bn: 'ভেতরের কথা: 1.1 → 2 → 3, হেড-অফ-লাইনের বিরুদ্ধে এক যুদ্ধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Working vocabulary: http, tcp, udp, quic, speaks, one, conversation, per — know the term by the move it makes in the drill.',
        bn: 'কাজের-শব্দ: http, tcp, udp, quic, speaks, one, conversation, per — মহড়ায় যে চাল শব্দ দেয়, সেই-চালে চেনো।'
      }
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'VISUAL: watch the pipe carry speech',
        bn: 'ভিজ্যুয়াল: পাইপে ভাষা বয়ে যেতে দেখুন'
      }
    },
    {
      type: 'visual',
      id: 'network'
    },
    {
      type: 'para',
      text: {
        en: 'Back in the Network Lab, run a journey with the CDN ON and a warm cache: the “server” hop collapses — that IS a 304/edge-hit in disguise, the caching economy made visible. Then run cold with CDN off and count the prelude hops again: every one of them is a round trip HTTP/2 and HTTP/3 were invented to avoid. The lab counts hops; HTTP decides what travels those hops and whether they can be skipped.',
        bn: 'নেটওয়ার্ক ল্যাবে ফিরে গিয়ে CDN চালু ও গরম ক্যাশে যাত্রা চালান: “সার্ভার” হপ সঙ্কুচিত হয়ে যায় — এটিই ছদ্মবেশী 304/এজ-হিট, দৃশ্যমান হওয়া ক্যাশিং অর্থনীতি। তারপর CDN বন্ধ করে ঠাণ্ডায় চালিয়ে ভূমিকা-হপ আবার গুনুন: প্রতিটি এমন রাউন্ড-ট্রিপ যা এড়ানোর জন্যই HTTP/2 আর HTTP/3-এর জন্ম। ল্যাব হপ গোনে; HTTP ঠিক করে সেই হপে কী ভ্রমণ করবে আর কোনটা এড়ানো যায়।'
      }
    },
    {
      type: 'heading',
      id: 'result',
      text: {
        en: 'RESULT: wire-fluency instincts',
        bn: 'ফলাফল: তার-সাবলীলতার সহজাততা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Read any API bug top-down: method promise → status verdict → headers contract → body payload.',
          bn: 'যেকোনো API বাগ পড়ুন উপর থেকে: মেথড-প্রতিশ্রুতি → স্ট্যাটাস-রায় → হেডার-চুক্তি → বডি-পেলোড।'
        },
        {
          en: 'Design for idempotency and caching first; they are free reliability and free speed.',
          bn: 'আগে idempotency আর ক্যাশিংয়ের ডিজাইন; এগুলো বিনামূল্যের নির্ভরযোগ্যতা ও গতি।'
        },
        {
          en: 'A 304, a 404 and a 409 tell three different stories — status codes are API documentation in one byte.',
          bn: '304, 404 আর 409 তিন ভিন্ন গল্প বলে — স্ট্যাটাস কোড এক বাইটের API ডকুমেন্টেশন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'DEBUGGING drill: the duplicate order',
        bn: 'ডিবাগিং অনুশীলন: ডুপ্লিকেট অর্ডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The rule row: post, order, key, idempotent, idempotency, uuid, stripe, symptom — each rule rides on these terms.',
        bn: 'নিয়ম-সারি: পোস্ট (post), ক্রম (order), চাবি (key), idempotent, idempotency, uuid, stripe, symptom — প্রতি নিয়ম এই শব্দেরই উপরে চড়ে।'
      }
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'The ledger line: token, treating, synonyms, missing, expired, answer, valid, wrong — read each term by what it carries here.',
        bn: 'খাতার লাইন: টোকেন (token), treating, synonyms, missing, expired, answer, valid, wrong — প্রতিটি-শব্দ পড়ো সে যা বহন করে তা দিয়ে।'
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'REAL WORLD',
        bn: 'বাস্তব জগত'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'curl -v and the DevTools Network tab both speak this exact wire grammar — two views, one treaty.',
          bn: 'curl -v আর DevTools নেটওয়ার্ক ট্যাব দুজনেই এই তার-ব্যাকরণেই কথা বলে — দুই দৃশ্য, এক চুক্তিপত্র।'
        },
        {
          en: 'Status-code-driven monitoring (429 storms, 5xx spikes) catches outages before users tweet.',
          bn: 'স্ট্যাটাস-কোডচালিত মনিটরিং (429 ঝড়, 5xx স্পাইক) ব্যবহারকারী টুইট করার আগেই বিভ্রাট ধরে।'
        },
        {
          en: 'GraphQL, REST, gRPC-web — all of them are dialects riding this same wire; the treaty below never changes.',
          bn: 'GraphQL, REST, gRPC-web — সবাই এই একই তারে চলা উপভাষা; নিচের চুক্তিপত্র কখনো বদলায় না।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'NEXT: where networks meet engines',
        bn: 'পরবর্তী: নেটওয়ার্ক যেখানে ইঞ্জিনে মেলে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you understand HTTP verbs, status codes, and caching mechanisms, the next step is discovering how client devices locate server IP addresses across the global Internet. The next lesson explores the planetary hierarchy of the Domain Name System.',
        bn: 'এইচটিটিপি মেথড, স্ট্যাটাস কোড এবং ক্যাশিং কৌশল জানার পর পরবর্তী পদক্ষেপ হলো কীভাবে ক্লায়েন্ট ডিভাইসগুলো বিশ্বব্যাপী ইন্টারনেটে সার্ভারের আইপি অ্যাড্রেস খুঁজে বের করে তা বোঝা। পরবর্তী পাঠে ডোমেন নেম সিস্টেমের বৈশ্বিক কাঠামো আলোচনা করা হবে।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-dns-census',
    tech: 'networking',
    title: { en: 'DNS Census — Before a single packet of your request crosses the planet', bn: 'আপনার অনুরোধের একটি প্যাকেট গ্রহ পেরোনোর আগেই একটি নীরব সাম্রাজ্য' }
  },
  exercises: [
    {
      id: 'http-deep-ex1',
      kind: 'mcq',
      topic: 'caching',
      question: {
        en: 'When a client sends an "If-None-Match" header matching the server’s current ETag, what response does the server return?',
        bn: 'ক্লায়েন্ট যখন সার্ভারের বর্তমান ETag এর সাথে মিলে এমন "If-None-Match" হেডার পাঠায়, তখন সার্ভার কী রেসপন্স দেয়?'
      },
      options: [
        {
          en: '304 Not Modified with zero body bytes',
          bn: '৩০৪ নট মডিফাইড (304 Not Modified) কোনো বডি ডাটা ছাড়া'
        },
        {
          en: '200 OK with the full response body',
          bn: '২০০ ওকে সহ সম্পূর্ণ বডি ডাটা'
        },
        {
          en: '404 Not Found error',
          bn: '৪০৪ নট ফাউন্ড এরর'
        },
        {
          en: '500 Internal Server Error',
          bn: '৫০০ ইন্টারনাল সার্ভার এরর'
        }
      ],
      answer: 0,
      hint: {
        en: 'The client already has the identical cached version, so sending the body again wastes bandwidth.',
        bn: 'ক্লায়েন্টের কাছে ইতিমধ্যে একই ফাইল ক্যাশ করা আছে, তাই পুনরায় পুরো ফাইল পাঠানো অপ্রয়োজনীয়।'
      },
      explanation: {
        en: 'An ETag match triggers HTTP 304 Not Modified, saving network bandwidth by omitting the response body.',
        bn: 'ETag মিলে গেলে এইচটিটিপি ৩০৪ স্ট্যাটাস পাঠানো হয় এবং কোনো বডি পাঠানো হয় না, যা ব্যান্ডউইথ সাশ্রয় করে।'
      }
    },
    {
      id: 'http-deep-ex2',
      kind: 'mcq',
      topic: 'methods',
      question: {
        en: 'Which standard HTTP method is NOT idempotent?',
        bn: 'কোন স্ট্যান্ডার্ড এইচটিটিপি মেথডটি আইডেমপোটেন্ট (idempotent) নয়?'
      },
      options: [
        {
          en: 'POST',
          bn: 'POST'
        },
        {
          en: 'GET',
          bn: 'GET'
        },
        {
          en: 'PUT',
          bn: 'PUT'
        },
        {
          en: 'DELETE',
          bn: 'DELETE'
        }
      ],
      answer: 0,
      hint: {
        en: 'Idempotent methods can be retried safely without changing server state beyond the first call.',
        bn: 'আইডেমপোটেন্ট মেথড বারবার চালালেও সার্ভারের ডাটাতে নতুন কোনো পরিবর্তন ঘটে না।'
      },
      explanation: {
        en: 'POST creates new resources and is not idempotent. Repeating a POST request can duplicate orders or records.',
        bn: 'POST নতুন তথ্য তৈরি করে এবং এটি আইডেমপোটেন্ট নয়। একাধিকবার POST চালালে ডুপ্লিকেট ডাটা তৈরি হতে পারে।'
      }
    },
    {
      id: 'http-deep-ex3',
      kind: 'mcq',
      topic: 'http2-framing',
      question: {
        en: 'What major architectural improvement does HTTP/2 introduce over HTTP/1.1 to enable multiplexing over a single TCP connection?',
        bn: 'একটি মাত্র টিসিপি কানেকশনে মাল্টিপ্লেক্সিং সক্ষম করতে HTTP/1.1 এর তুলনায় HTTP/2 কোন মৌলিক স্থাপত্যিক পরিবর্তন আনে?'
      },
      options: [
        {
          en: 'Binary framing layer that splits messages into independent, interleaved binary frames',
          bn: 'বাইনারি ফ্রেমিং স্তর যা মেসেজগুলোকে স্বাধীন এবং ইন্টারলিভড বাইনারি ফ্রেমে বিভক্ত করে'
        },
        {
          en: 'Deleting all HTTP headers',
          bn: 'সমস্ত এইচটিটিপি হেডার মুছে ফেলা'
        },
        {
          en: 'Requiring all websites to run on UDP only',
          bn: 'সমস্ত ওয়েবসাইটকে কেবল ইউডিপিতে চালানো বাধ্যতামূলক করা'
        },
        {
          en: 'Compressing all images into plain text',
          bn: 'সব ছবিকে সাধারণ টেক্সটে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'HTTP/2 breaks requests and responses into binary frames identified by stream IDs.',
        bn: 'HTTP/2 প্রতিটি রিকোয়েস্ট ও রেসপন্সকে স্ট্রিম আইডি বিশিষ্ট ছোট ছোট বাইনারি ফ্রেমে ভাগ করে নেয়।'
      },
      explanation: {
        en: 'HTTP/2 replaces textual parsing with binary frames, allowing multiple concurrent requests on one connection without blocking.',
        bn: 'HTTP/2 সাধারণ টেক্সটের বদলে বাইনারি ফ্রেম ব্যবহার করে একটি কানেকশনে একসাথে অনেক রিকোয়েস্ট পরিচালনা করে।'
      }
    },
    {
      id: 'http-deep-ex4',
      kind: 'mcq',
      topic: 'status-codes',
      question: {
        en: 'Which HTTP status code is returned when a client provides valid authentication credentials but lacks authorization to access the resource?',
        bn: 'যখন ক্লায়েন্ট বৈধ প্রমাণীকরণ প্রদান করে কিন্তু রিসোর্সে প্রবেশের অনুমতি থাকে না, তখন কোন স্ট্যাটাস কোড ফেরত আসে?'
      },
      options: [
        {
          en: '403 Forbidden',
          bn: '৪০৩ ফরবিডেন (403 Forbidden)'
        },
        {
          en: '401 Unauthorized',
          bn: '৪০১ আনঅথরাইজড (401 Unauthorized)'
        },
        {
          en: '404 Not Found',
          bn: '৪০৪ পাওয়া যায়নি (404 Not Found)'
        },
        {
          en: '500 Internal Server Error',
          bn: '৫০০ ইন্টারনাল সার্ভার এরর (500 Internal Server Error)'
        }
      ],
      answer: 0,
      hint: {
        en: '401 means "who are you?", while 403 means "I know who you are, but you are not allowed in".',
        bn: '৪০১ মানে আপনি কে তা স্পষ্ট নয়, আর ৪০৩ মানে আপনার পরিচয় জানা কিন্তু প্রবেশের অনুমতি নেই।'
      },
      explanation: {
        en: 'HTTP 403 Forbidden indicates authenticated identity without sufficient permissions, whereas 401 indicates missing authentication.',
        bn: 'এইচটিটিপি ৪০৩ বোঝায় পরিচয় যাচাই হলেও অ্যাক্সেসের অনুমতি নেই, আর ৪০১ বোঝায় প্রমাণীকরণ সম্পূর্ণ অনুপস্থিত।'
      }
    }
  ],
  quiz: {
    id: 'http-deep-quiz',
    title: {
      en: 'Quiz: wire grammar',
      bn: 'কুইজ: তার-ব্যাকরণ'
    },
    questions: [
      {
        id: 'http-deep-q1',
        kind: 'mcq',
        topic: 'grammar',
        question: {
          en: 'An HTTP request has EXACTLY three parts: request line, headers, …',
          bn: 'HTTP রিকোয়েস্টের ঠিক তিনটি অংশ: রিকোয়েস্ট লাইন, হেডার, …'
        },
        options: [
          {
            en: 'Cookies',
            bn: 'কুকি'
          },
          {
            en: 'Blank line + optional body',
            bn: 'খালি লাইন + ঐচ্ছিক বডি'
          },
          {
            en: 'Encryption key',
            bn: 'এনক্রিপশন কি'
          }
        ],
        answer: 1,
        hint: {
          en: 'Cookies are a header — Cookie: — not a section.',
          bn: 'কুকি একটি হেডার — Cookie: — সেকশন নয়।'
        },
        explanation: {
          en: 'Line, headers, blank, body. Everything else is either a header or payload.',
          bn: 'লাইন, হেডার, খালি, বডি। বাকি সব হয় হেডার নয় পেলোড।'
        }
      },
      {
        id: 'http-deep-q2',
        kind: 'predict',
        topic: 'families',
        question: {
          en: 'Server logs show 4xx rising at noon. Whose fault investigation starts with…',
          bn: 'দুপুরে লগে 4xx বাড়ছে। কার দোষের অনুসন্ধান শুরু হবে…'
        },
        options: [
          {
            en: 'The database server',
            bn: 'ডেটাবেস সার্ভারে'
          },
          {
            en: 'The clients: bad syntax, missing auth, wrong urls — YOUR side of the treaty',
            bn: 'ক্লায়েন্টে: ভুল সিনট্যাক্স, অথ নেই, ভুল ইউআরএল — চুক্তিপত্রের আপনার পাড়'
          },
          {
            en: 'The DNS',
            bn: 'DNS-এ'
          }
        ],
        answer: 1,
        hint: {
          en: '4xx = client error; 5xx = server. First digit points the finger.',
          bn: '4xx = ক্লায়েন্ট ভুল; 5xx = সার্ভার। প্রথম অঙ্কই আঙুল তোলে।'
        },
        explanation: {
          en: '400/401/403/404/409/429 are all WHO-CALLED-WRONG stories. Read them before touching the server room.',
          bn: '400/401/403/404/409/429 সবই কে-ভুল-ডেকেছে-গল্প। সার্ভার রুম ছোঁয়ার আগে পড়ুন।'
        }
      },
      {
        id: 'http-deep-q3',
        kind: 'mcq',
        topic: 'http3',
        question: {
          en: 'HTTP/3’s QUIC solves TCP-level head-of-line blocking by…',
          bn: 'HTTP/3-এর QUIC TCP-স্তরের হেড-অফ-লাইন ব্লকিং সারায়…'
        },
        options: [
          {
            en: 'Bigger packets',
            bn: 'বড় প্যাকেটে'
          },
          {
            en: 'Per-stream ordering: a lost packet stalls only ITS stream, on UDP',
            bn: 'স্ট্রিমপ্রতি ক্রমান্বয়নে: হারানো প্যাকেট আটকায় শুধু তার স্ট্রিম, UDP-র ওপর'
          },
          {
            en: 'Removing encryption',
            bn: 'এনক্রিপশন সরিয়ে'
          }
        ],
        answer: 1,
        hint: {
          en: 'Independence per conversation — and the crypto built INTO the transport.',
          bn: 'সংলাপপ্রতি স্বাধীনতা — আর ক্রিপ্টো ট্রান্সপোর্টের ভেতরই।'
        },
        explanation: {
          en: 'QUIC owns reliability per stream instead of borrowing TCP’s global byte order.',
          bn: 'QUIC TCP-র সার্বিক বাইট-ক্রম ধার না নিয়ে স্ট্রিমপ্রতি নির্ভরযোগ্যতা নিজেই বানায়।'
        }
      },
      {
        id: 'http-deep-q4',
        kind: 'mcq',
        topic: 'idempotency',
        question: {
          en: 'The industry cure for duplicate POSTs on flaky networks is…',
          bn: 'দুর্বল নেটওয়ার্কে ডুপ্লিকেট POST-এর শিল্পমান প্রতিষেধক…'
        },
        options: [
          {
            en: 'Ban retries',
            bn: 'রিট্রাই নিষিদ্ধ করা'
          },
          {
            en: 'Idempotency-Key header + server-side replay — and a unique constraint as backstop',
            bn: 'Idempotency-Key হেডার + সার্ভার-সাইড রিপ্লে — সাথে ব্যাকস্টপ হিসেবে ইউনিক কনস্ট্রেইন্ট'
          },
          {
            en: 'Faster servers',
            bn: 'দ্রুততর সার্ভার'
          }
        ],
        answer: 1,
        hint: {
          en: 'Stripe’s API is the textbook case.',
          bn: 'Stripe-এর API-ই পাঠ্যবইয়ের দৃষ্টান্ত।'
        },
        explanation: {
          en: 'Retries are facts. Idempotency keys make repeats harmless; DB constraints guarantee it even when the key leaks.',
          bn: 'রিট্রাই হলো সত্য। Idempotency কি পুনরাবৃত্তিকে নিরুপদ্রব করে; কি ফাঁস হলেও DB কনস্ট্রেইন্ট জামানত দেয়।'
        }
      }
    ]
  },
  next: {
    slug: 'the-dns-census',
    title: {
      en: 'The DNS Census: the town crier that turns names into numbers',
      bn: 'DNS-গণনা: নামকে সংখ্যায় পরিণতকারী জনকণ্ঠ'
    }
  }
};
