import type { Lesson } from '../../../lib/types';

export const RoutesAndRulesLesson: Lesson = {
  slug: 'routes-and-rules',
  tech: 'flask',
  title: {
    en: 'Routes & URL Rules — Path Converters, Methods & url_for Resolution',
    bn: 'রাউট ও ইউআরএল নিয়ম — পাথ কনভার্টার, মেথডস ও url_for রেজোলিউশন'
  },
  summary: {
    en: 'Flask URL routing maps incoming web paths to Python view functions through Werkzeug rule trees. In this lesson, you will master dynamic variable path converters (int, float, path, uuid), custom converter creation, HTTP verb dispatching, strict slash redirection rules, and reverse URL generation using url_for.',
    bn: 'ফ্লাস্ক ইউআরএল রাউটিং Werkzeug রুল ট্রির মাধ্যমে ইনকামিং ওয়েব পাথগুলোকে পাইথন ভিউ ফাংশনের সাথে ম্যাপ করে। এই পাঠে আপনি ডায়নামিক পাথ কনভার্টার (int, float, path, uuid), কাস্টম কনভার্টার তৈরি, এইচটিটিপি ভার্ব ডিসপ্যাচ, কঠোর স্ল্যাশ রিডাইরেকশন নিয়ম এবং url_for ব্যবহার করে রিভার্স ইউআরএল তৈরি গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'flask-routing-architecture',
      text: {
        en: 'The Flask Routing and Werkzeug URL Map Architecture',
        bn: 'ফ্লাস্ক রাউটিং ও Werkzeug ইউআরএল ম্যাপ আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you declare web routes in Flask, the framework registers a Rule object inside its internal Werkzeug Map data structure. Each rule binds a URL pattern to an endpoint name. When a client request arrives, the router matches the URL, casts typed arguments into Python primitives, and invokes the associated view function.',
        bn: 'যখন আপনি ফ্লাস্কে ওয়েব রুট ঘোষণা করেন, তখন ফ্রেমওয়ার্ক অভ্যন্তরীণ Werkzeug Map ডেটা কাঠামোর ভেতরে একটি Rule অবজেক্ট নিবন্ধন করে। প্রতিটি রুল একটি ইউআরএল প্যাটার্নকে একটি এন্ডপয়েন্ট নামের সাথে যুক্ত করে। ক্লায়েন্টের রিকোয়েস্ট এলে রাউটার পাথ মিলিয়ে আর্গুমেন্টগুলোকে পাইথন টাইপে রূপান্তর করে এবং সংশ্লিষ্ট ভিউ ফাংশন কার্যকর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'URL Map (app.url_map)',
          def: {
            en: 'The central Werkzeug data structure holding all compiled Rule objects and converter definitions for the Flask application.',
            bn: 'কেন্দ্রীয় Werkzeug ডেটা কাঠামো যা ফ্লাস্ক অ্যাপের সমস্ত কম্পাইল করা Rule অবজেক্ট এবং কনভার্টার সংরক্ষণ করে।'
          }
        },
        {
          term: 'Path Converters',
          def: {
            en: 'Dynamic pattern tokens (<converter:variable_name>) that match and cast URL segments into native Python types (int, float, path, uuid).',
            bn: 'ডায়নামিক ইউআরএল টোকেন (<converter:variable_name>) যা পাথের অংশ মিলিয়ে সরাসরি পাইথন টাইপে (int, float, path, uuid) রূপান্তর করে।'
          }
        },
        {
          term: 'url_for() Resolution',
          def: {
            en: 'The reverse URL resolver function that takes an endpoint name and arguments to construct a valid URL path or absolute URL.',
            bn: 'রিভার্স ইউআরএল সমাধানকারী ফাংশন যা এন্ডপয়েন্টের নাম ও আর্গুমেন্ট গ্রহণ করে সঠিক ইউআরএল পাথ বা অ্যাবসোলিউট লিংক তৈরি করে।'
          }
        },
        {
          term: 'Strict Slashes',
          def: {
            en: 'The routing convention where endpoints ending with a trailing slash redirect non-trailing requests via HTTP 308 to maintain clean canonical URLs.',
            bn: 'রাউটিং নিয়ম যেখানে স্ল্যাশযুক্ত এন্ডপয়েন্টে স্ল্যাশ ছাড়া রিকোয়েস্ট এলে ক্যানোনিকাল ইউআরএল রক্ষায় এইচটিটিপি ৩০৮ রিডাইরেক্ট করা হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'path-converters-matrix',
      text: {
        en: 'Flask Built-in Path Converters Matrix',
        bn: 'ফ্লাস্ক বিল্ট-ইন পাথ কনভার্টার ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Converter Syntax', bn: 'কনভার্টার সিনট্যাক্স' },
        { en: 'Matched Pattern', bn: 'যে প্যাটার্ন মেলায়' },
        { en: 'Resulting Python Type', bn: 'প্রাপ্ত পাইথন টাইপ' }
      ],
      rows: [
        [
          { en: '<string:name> (or <name>)', bn: '<string:name> (বা <name>)' },
          { en: 'Default converter; matches any text without slashes', bn: 'ডিফল্ট কনভার্টার; স্ল্যাশ বাদে যেকোনো টেক্সট মেলায়' },
          { en: 'str', bn: 'str' }
        ],
        [
          { en: '<int:id>', bn: '<int:id>' },
          { en: 'Matches positive integers (e.g. 42, 900)', bn: 'ধনাত্মক পূর্ণসংখ্যা মেলায় (যেমন ৪২, ৯০০)' },
          { en: 'int', bn: 'int' }
        ],
        [
          { en: '<float:ratio>', bn: '<float:ratio>' },
          { en: 'Matches positive floating-point numbers (e.g. 3.14)', bn: 'দশমিক সংখ্যা মেলায় (যেমন ৩.১৪)' },
          { en: 'float', bn: 'float' }
        ],
        [
          { en: '<path:filepath>', bn: '<path:filepath>' },
          { en: 'Matches arbitrary strings including directory slashes /', bn: 'স্ল্যাশ / সহ যেকোনো ডিরেক্টরি পাথ টেক্সট মেলায়' },
          { en: 'str', bn: 'str' }
        ],
        [
          { en: '<uuid:id>', bn: '<uuid:id>' },
          { en: 'Matches formatted 32-character UUID strings', bn: 'হাইফেন সহ ৩২ অক্ষরের মানসম্মত UUID স্ট্রিং মেলায়' },
          { en: 'uuid.UUID', bn: 'uuid.UUID' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'routing-code-simulation',
      text: {
        en: 'Working Path Matching and Dynamic URL Dispatch Simulation',
        bn: 'কার্যকরী পাথ ম্যাচিং ও ডায়নামিক ইউআরএল ডিসপ্যাচ সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Werkzeug URL Rule Matching and Converter Coercion
class PathRule {
  constructor(pattern, endpoint, converterType) {
    this.pattern = pattern;
    this.endpoint = endpoint;
    this.converterType = converterType;
  }

  match(urlPath) {
    const regex = new RegExp('^/products/(\\\\d+)$');
    const result = urlPath.match(regex);
    if (result) {
      const rawValue = result[1];
      const typedValue = this.converterType === 'int' ? parseInt(rawValue, 10) : rawValue;
      return { matched: true, endpoint: this.endpoint, params: { id: typedValue } };
    }
    return { matched: false };
  }
}

// 1. Defining route rule
const productRule = new PathRule('/products/<int:id>', 'product_detail', 'int');

// 2. Simulating incoming request
const matchResult = productRule.match('/products/75');

// 3. Simulating url_for reverse generation
function urlFor(endpoint, params) {
  if (endpoint === 'product_detail') {
    return \`/products/\${params.id}\`;
  }
  return '/';
}

const resolvedUrl = urlFor('product_detail', { id: 75 });

console.log('Matched endpoint name:', matchResult.endpoint);
// -> Matched endpoint name: product_detail
console.log('Parsed integer ID:', matchResult.params.id);
// -> Parsed integer ID: 75
console.log('Generated reverse URL:', resolvedUrl);
// -> Generated reverse URL: /products/75`,
      caption: {
        en: 'Matching product 75 with integer converter and resolving reverse URL via url_for',
        bn: 'পূর্ণসংখ্যা কনভার্টার দিয়ে ৭৫ নম্বর প্রোডাক্ট ম্যাচিং এবং url_for দিয়ে রিভার্স ইউআরএল রেজোলিউশন'
      }
    },
    {
      type: 'heading',
      id: 'http-methods-and-strict-slashes',
      text: {
        en: 'HTTP Method Dispatching and Strict Slashes Rules',
        bn: 'এইচটিটিপি মেথড ডিসপ্যাচ ও স্ট্রিক্ট স্ল্যাশ নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'By default, @app.route only listens for HTTP GET requests (and implicitly HEAD and OPTIONS). To process form submissions or REST mutations, you must explicitly declare methods=["GET", "POST"]. Furthermore, Flask strictly enforces URL canonicalization: trailing slashes define directory-like resources, while omitting slashes defines file-like resources.',
        bn: 'ডিফল্টভাবে @app.route কেবল এইচটিটিপি GET রিকোয়েস্ট শোনে (এবং পরোক্ষভাবে HEAD ও OPTIONS)। ফর্ম সাবমিশন বা পরিবর্তন করতে methods=["GET", "POST"] স্পষ্টভাবে উল্লেখ করতে হয়। তাছাড়া ফ্লাস্ক ইউআরএল সমতা নিশ্চিত করতে কঠোর স্ল্যাশ নিয়ম মানে: শেষে স্ল্যাশ থাকলে তা ডিরেক্টরি-ধর্মী রিসোর্স এবং স্ল্যাশ না থাকলে তা ফাইল-ধর্মী রিসোর্স হিসেবে গণ্য হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Always Use url_for: Never hardcode URLs in view redirects or HTML templates; always use url_for("endpoint_name").',
          bn: '১. url_for ব্যবহার বাধ্যতামূলক: ভিউ রিডাইরেক্ট বা এইচটিএমএলে কখনই ফিক্সড ইউআরএল লিখবেন না; সর্বদা url_for("endpoint_name") ব্যবহার করুন।'
        },
        {
          en: '2. Explicit HTTP Methods: Declare methods=["GET", "POST"] on routes processing user data to avoid unhandled 405 Method Not Allowed errors.',
          bn: '২. স্পষ্ট এইচটিটিপি মেথড: ইউজার ডাটা হ্যান্ডল করা রুটে methods=["GET", "POST"] উল্লেখ করুন যাতে অপ্রত্যাশিত ৪০৫ এরর না ঘটে।'
        },
        {
          en: '3. Custom Converters for Regex: Register a BaseConverter subclass in app.url_map.converters when routes demand custom regex matching.',
          bn: '৩. রেজেক্সে কাস্টম কনভার্টার: নির্দিষ্ট রেগুলার এক্সপ্রেশন মেলাতে app.url_map.converters-এ BaseConverter সাব-ক্লাস নিবন্ধন করুন।'
        },
        {
          en: '4. External URLs for Emails: Pass _external=True to url_for when generating absolute URLs for confirmation emails or webhooks.',
          bn: '৪. ইমেইলে এক্সটার্নাল ইউআরএল: কনফার্মেশন ইমেইল বা ওয়েবহুকের জন্য অ্যাবসোলিউট লিংক তৈরি করতে url_for-এ _external=True পাস করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-rot-ex1',
      kind: 'mcq',
      topic: 'flask path converter type casting',
      question: {
        en: 'Given the route definition "@app.route(\'/order/<int:order_id>\')", what type will the "order_id" argument be when passed into the view function?',
        bn: '"@app.route(\'/order/<int:order_id>\')" সংজ্ঞায়িত থাকলে ভিউ ফাংশনে "order_id" আর্গুমেন্টটি কোন টাইপের ডাটা হিসেবে প্রবেশ করবে?',
      },
      options: [
        {
          en: 'Python int: Werkzeug automatically casts the matched digit string into an integer primitive before invoking the view',
          bn: 'পাইথন int: Werkzeug ভিউ ফাংশন কল করার আগেই ডিজিট স্ট্রিংকে স্বয়ংক্রিয়ভাবে পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'Python str: path parameters are always plain strings regardless of converter',
          bn: 'পাইথন str: কনভার্টার যাই হোক পাথ প্যারামিটার সর্বদা সাধারণ টেক্সট স্ট্রিং থাকে'
        },
        {
          en: 'A raw database SQL cursor',
          bn: 'একটি সরাসরি ডাটাবেজ এসকিউএল কার্সর'
        },
        {
          en: 'A floating-point Decimal instance',
          bn: 'একটি ফ্লোটিং-পয়েন্ট ডেসিমাল অবজেক্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'The <int:...> converter converts matched digits to Python int before passing to the view.',
        bn: '<int:...> কনভার্টার ভিউতে পাঠানোর আগেই সংখ্যাটিকে পাইথন পূর্ণসংখ্যায় রূপান্তর করে।'
      },
      explanation: {
        en: 'The int path converter guarantees that only numeric digits match the rule and converts the argument to a native Python integer.',
        bn: 'int কনভার্টার কেবল সংখ্যা মেলায় এবং মানটিকে সরাসরি পাইথনের ইনটিজার টাইপে রূপান্তর করে ভিউতে পাঠায়।'
      }
    },
    {
      id: 'fl-rot-ex2',
      kind: 'mcq',
      topic: 'strict slashes behavior in flask',
      question: {
        en: 'If a route is defined as "@app.route(\'/projects/\')", what occurs when a visitor navigates to "/projects" without the trailing slash?',
        bn: 'যদি একটি রুট "@app.route(\'/projects/\')" হিসেবে তৈরি করা থাকে, তবে ব্যবহারকারী শেষের স্ল্যাশ ছাড়া "/projects"-এ গেলে কী ঘটবে?'
      },
      options: [
        {
          en: 'Flask automatically issues an HTTP 308 permanent redirect sending the browser to the canonical URL "/projects/"',
          bn: 'ফ্লাস্ক স্বয়ংক্রিয়ভাবে একটি এইচটিটিপি ৩০৮ রিডাইরেক্ট পাঠিয়ে ব্রাউজারকে মূল ক্যানোনিকাল ইউআরএল "/projects/"-এ পাঠায়'
        },
        {
          en: 'Flask immediately returns an HTTP 404 Not Found error',
          bn: 'ফ্লাস্ক তৎক্ষণাৎ একটি এইচটিটিপি ৪০৪ নট ফাউন্ড এরর দেয়'
        },
        {
          en: 'The web browser crashes and closes the window',
          bn: 'ওয়েব ব্রাউজার ক্র্যাশ করে উইন্ডো বন্ধ হয়ে যায়'
        },
        {
          en: 'The server restarts the Python WSGI process',
          bn: 'সার্ভার পাইথন WSGI প্রসেস রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flask redirects to the trailing slash version to maintain canonical URLs for search engines.',
        bn: 'সার্চ ইঞ্জিনের জন্য ক্যানোনিকাল ইউআরএল অক্ষুণ্ণ রাখতে ফ্লাস্ক স্ল্যাশযুক্ত ঠিকানায় রিডাইরেক্ট করে।'
      },
      explanation: {
        en: 'Werkzeug routing treats URLs with trailing slashes like filesystem directories. Accessing the path without a slash issues an HTTP redirect to canonicalize the URL.',
        bn: 'শেষে স্ল্যাশ থাকা রুটকে ফ্লাস্ক ফোল্ডারের মতো বিবেচনা করে এবং স্ল্যাশ ছাড়া রিকোয়েস্ট এলে ৩০৮ রিডাইরেক্ট করে স্ল্যাশযুক্ত পাথে পাঠিয়ে দেয়।'
      }
    },
    {
      id: 'fl-rot-ex3',
      kind: 'mcq',
      topic: 'url_for reverse resolution benefits',
      question: {
        en: 'Why is using "url_for(\'user_profile\', username=\'alex\')" superior to hardcoding "/user/alex" in templates and views?',
        bn: 'টেমপ্লেট বা ভিউতে সরাসরি "/user/alex" ফিক্সড না লিখে "url_for(\'user_profile\', username=\'alex\')" ব্যবহার করা কেন শ্রেষ্ঠ?'
      },
      options: [
        {
          en: 'If the route pattern changes from "/user/<username>" to "/profile/<username>", all links update automatically without requiring project-wide string search-and-replace, and special characters are automatically URL-encoded',
          bn: 'পাথ পরিবর্তন হলেও সব লিংক স্বয়ংক্রিয়ভাবে আপডেট হয়ে যায় এবং স্পেশাল ক্যারেক্টারগুলো নিজে থেকেই ইউআরএল-এনকোড হয়'
        },
        {
          en: 'url_for() encrypts the destination IP address with SSL',
          bn: 'url_for() গন্তব্য আইপি অ্যাড্রেসকে এসএসএল দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It accelerates PostgreSQL database query execution by 200 percent',
          bn: 'এটি পোস্টগ্রেস ডাটাবেজের কুয়েরির গতি ২০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It is required because Flask does not support plain HTML strings',
          bn: 'এটি বাধ্যতামূলক কারণ ফ্লাস্ক সাধারণ এইচটিএমএল সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reverse URL routing provides decoupling and automatic URL encoding.',
        bn: 'রিভার্স ইউআরএল রাউটিং কোডের স্বাধীনতা দেয় এবং বিশেষ চিহ্ন স্বতঃস্ফূর্তভাবে এনকোড করে।'
      },
      explanation: {
        en: 'url_for decouples view function implementation from static paths, handles URL escaping, and properly prepends blueprint url_prefixes and application roots.',
        bn: 'url_for কোডকে নির্দিষ্ট পাথ থেকে মুক্ত রাখে, বিশেষ চিহ্ন এনকোড করে এবং ব্লুপ্রিন্ট প্রিফিক্স স্বয়ংক্রিয়ভাবে যোগ করে।'
      }
    },
    {
      id: 'fl-rot-ex4',
      kind: 'mcq',
      topic: 'http method restriction error code',
      question: {
        en: 'If a client transmits an HTTP POST request to a route defined with "@app.route(\'/about\')", what HTTP status code does Flask return by default?',
        bn: 'যদি কোনো ক্লায়েন্ট "@app.route(\'/about\')" রুটে এইচটিটিপি POST রিকোয়েস্ট পাঠায়, তবে ফ্লাস্ক ডিফল্টভাবে কোন স্ট্যাটাস কোড ফেরত দেবে?'
      },
      options: [
        {
          en: 'HTTP 405 Method Not Allowed, because routes only listen for GET (and HEAD/OPTIONS) unless methods=["POST"] is explicitly declared',
          bn: 'এইচটিটিপি ৪০৫ Method Not Allowed, কারণ methods=["POST"] ঘোষণা না করলে রুট কেবল GET মেথড গ্রহণ করে'
        },
        {
          en: 'HTTP 200 OK with an empty response body',
          bn: 'এইচটিটিপি ২০০ ওকে সহ ফাঁকা রেসপন্স বডি'
        },
        {
          en: 'HTTP 500 Internal Server Error',
          bn: 'এইচটিটিপি ৫০০ ইন্টারনাল সার্ভার এরর'
        },
        {
          en: 'HTTP 401 Unauthorized',
          bn: 'এইচটিটিপি ৪০১ আনঅথরাইজড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sending a disallowed HTTP verb triggers status code 405.',
        bn: 'অননুমোদিত এইচটিটিপি ভার্ব পাঠালে ৪০৫ স্ট্যাটাস কোড দেখা দেয়।'
      },
      explanation: {
        en: 'Flask routes default to methods=["GET"]. Submitting an unhandled verb like POST causes Werkzeug to respond with 405 Method Not Allowed.',
        bn: 'ফ্লাস্ক রুট ডিফল্টভাবে কেবল GET গ্রহণ করে। অন্য কোনো মেথড (যেমন POST) পাঠালে Werkzeug সাথে সাথে ৪০৫ Method Not Allowed ফেরত দেয়।'
      }
    }
  ],
  quiz: {
    id: 'routes-and-rules-quiz',
    title: {
      en: 'Flask Routes & URL Rules Quiz',
      bn: 'ফ্লাস্ক রাউট ও ইউআরএল নিয়ম কুইজ'
    },
    questions: [
      {
        id: 'q-custom-path-converter-registration',
        kind: 'mcq',
        topic: 'registering custom path converter in flask',
        question: {
          en: 'How do you register a custom path converter (e.g. RegexConverter) so it can be used in Flask route definitions?',
          bn: 'ফ্লাস্ক রাউটে ব্যবহার করার জন্য একটি কাস্টম পাথ কনভার্টার (যেমন RegexConverter) কীভাবে নিবন্ধন করতে হয়?'
        },
        options: [
          {
            en: 'Create a subclass of werkzeug.routing.BaseConverter and register it in "app.url_map.converters[\'regex\'] = RegexConverter"',
            bn: 'werkzeug.routing.BaseConverter-এর সাব-ক্লাস তৈরি করে "app.url_map.converters[\'regex\'] = RegexConverter" দিয়ে রেজিস্টার করে'
          },
          {
            en: 'Save a regular expression inside a text file named url_patterns.txt',
            bn: 'url_patterns.txt নামের ফাইলে রেগুলার এক্সপ্রেশন লিখে রেখে'
          },
          {
            en: 'Pass regex strings directly into Python sys.path',
            bn: 'পাইথনের sys.path-এ সরাসরি রেজেক্স স্ট্রিং পাস করে'
          },
          {
            en: 'Custom converters are not supported in Flask',
            bn: 'ফ্লাস্কে কাস্টম কনভার্টার সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Werkzeug converters are stored in the app.url_map.converters dictionary.',
          bn: 'Werkzeug কনভার্টারগুলো app.url_map.converters ডিকশনারিতে রাখা হয়।'
        },
      explanation: {
        en: 'Subclassing BaseConverter and registering it on app.url_map.converters allows developers to use custom tokens like <regex("[0-9]{4}"):year>.',
        bn: 'BaseConverter সাব-ক্লাস তৈরি করে app.url_map.converters-এ যুক্ত করলে সহজে <regex("[0-9]{4}"):year> এর মতো কাস্টম টোকেন ব্যবহার করা যায়।'
      }
      },
      {
        id: 'q-url-for-static-files',
        kind: 'mcq',
        topic: 'referencing static assets via url_for',
        question: {
          en: 'What is the standard Flask syntax to generate the correct URL path for a CSS file located at "static/css/style.css"?',
          bn: '"static/css/style.css"-এ থাকা সিএসএস ফাইলের সঠিক ইউআরএল পাথ তৈরির স্ট্যান্ডার্ড ফ্লাস্ক সিনট্যাক্স কোনটি?'
        },
        options: [
          {
            en: 'url_for("static", filename="css/style.css")',
            bn: 'url_for("static", filename="css/style.css")'
          },
          {
            en: 'url_for("css/style.css")',
            bn: 'url_for("css/style.css")'
          },
          {
            en: 'app.get_static_path("style.css")',
            bn: 'app.get_static_path("style.css")'
          },
          {
            en: 'static_link("css/style.css")',
            bn: 'static_link("css/style.css")'
          }
        ],
        answer: 0,
        hint: {
          en: 'Flask creates a built-in endpoint named "static" that accepts a "filename" argument.',
          bn: 'ফ্লাস্কে "static" নামের একটি বিল্ট-ইন এন্ডপয়েন্ট থাকে যা "filename" আর্গুমেন্ট গ্রহণ করে।'
        },
        explanation: {
          en: 'Flask automatically registers a static endpoint. Passing filename="path/to/file" generates the proper public URL.',
          bn: 'ফ্লাস্ক স্বয়ংক্রিয়ভাবে static এন্ডপয়েন্ট তৈরি করে রাখে, যেখানে filename পাস করে যেকোনো অ্যাসেটের সঠিক ইউআরএল পাওয়া যায়।'
        }
      },
      {
        id: 'q-external-url-for-emails',
        kind: 'mcq',
        topic: 'generating absolute urls for emails with _external',
        question: {
          en: 'When generating a password reset link to be sent inside an email, why must you include "_external=True" in url_for?',
          bn: 'ইমেইলে পাসওয়ার্ড রিসেট লিংক পাঠানোর সময় url_for-এ কেন "_external=True" যুক্ত করা আবশ্যক?'
        },
        options: [
          {
            en: 'By default, url_for returns a relative path (e.g. "/reset/token123"); _external=True instructs Flask to generate a full absolute URL including scheme and domain (e.g. "https://example.com/reset/token123")',
            bn: 'ডিফল্টভাবে url_for কেবল রিলেটিভ পাথ (যেমন "/reset/token123") দেয়; _external=True দিলে ফ্লাস্ক ডোমেন সহ পূর্ণাঙ্গ অ্যাবসোলিউট লিংক ("https://example.com/reset/token123") তৈরি করে'
          },
          {
            en: '_external=True bypasses all password reset security checks',
            bn: '_external=True দিলে পাসওয়ার্ড রিসেটের সব নিরাপত্তা বাতিল হয়'
          },
          {
            en: 'It sends the email through an external SMTP server',
            bn: 'এটি একটি বাহ্যিক এসএমটিপি সার্ভারের মাধ্যমে ইমেইল পাঠায়'
          },
          {
            en: 'It converts the URL from ASCII into Unicode characters',
            bn: 'এটি ইউআরএলকে আসকি থেকে ইউনিকোড ক্যারেক্টারে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Relative paths cannot be clicked from an external email client.',
          bn: 'ইমেইল সফটওয়্যার থেকে রিলেটিভ পাথে সরাসরি ক্লিক করা যায় না।'
        },
        explanation: {
          en: 'Emails exist outside the browser application context. Without the scheme and domain host provided by _external=True, links cannot resolve.',
          bn: 'ইমেইল অ্যাপ্লিকেশনের বাইরে থাকে। _external=True না দিলে ডোমেন নাম যুক্ত হয় না, ফলে ইমেইলে থাকা লিংকে ক্লিক করলে পেজ লোড হয় না।'
        }
      },
      {
        id: 'q-endpoint-name-default',
        kind: 'mcq',
        topic: 'endpoint naming convention in flask',
        question: {
          en: 'When registering "@app.route(\'/dashboard\') def show_dashboard(): return \'...\'", what is the default endpoint name assigned by Flask?',
          bn: '"@app.route(\'/dashboard\') def show_dashboard(): return \'...\'" লিখলে ফ্লাস্ক ডিফল্টভাবে কোন এন্ডপয়েন্ট নাম নির্ধারণ করে?'
        },
        options: [
          {
            en: '"show_dashboard": the name of the decorated view function is used as the endpoint string by default',
            bn: '"show_dashboard": ডেকোরেট করা ভিউ ফাংশনের নামই ডিফল্টভাবে এন্ডপয়েন্ট স্ট্রিং হিসেবে ব্যবহৃত হয়'
          },
          {
            en: '"/dashboard": the URL route string is used as the endpoint name',
            bn: '"/dashboard": ইউআরএল পাথের নামই এন্ডপয়েন্ট নাম হিসেবে ব্যবহৃত হয়'
          },
          {
            en: '"endpoint_1": Flask generates numeric identifiers sequentially',
            bn: '"endpoint_1": ফ্লাস্ক ক্রমানুসারে সংখ্যাযুক্ত নাম দেয়'
          },
          {
            en: '"default_view": all views share the same default endpoint name',
            bn: '"default_view": সমস্ত ভিউ একই ডিফল্ট নাম শেয়ার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Flask uses the function __name__ attribute as the default endpoint identifier.',
          bn: 'ফ্লাস্ক ভিউ ফাংশনের নিজস্ব নামকেই (__name__) ডিফল্ট এন্ডপয়েন্ট হিসেবে গ্রহণ করে।'
        },
        explanation: {
          en: 'Unless overridden via endpoint="custom_name" in route(), Flask automatically uses the function name as the endpoint identifier in url_for.',
          bn: 'যদি route()-এ আলাদা করে endpoint নির্ধারণ না করা হয়, তবে ফ্লাস্ক নিজে থেকেই ফাংশনের নামকে এন্ডপয়েন্ট নাম হিসেবে ধরে নেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'requests-in-flight',
    title: {
      en: 'Requests & In-Flight Contexts — Objects, Payloads & LocalProxy',
      bn: 'রিকোয়েস্ট ও ইন-ফ্লাইট কনটেক্সট — অবজেক্ট, পে-লোড ও লোকালপ্রক্সি'
    }
  }
};
