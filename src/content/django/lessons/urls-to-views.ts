import type { Lesson } from '../../../lib/types';

export const UrlsToViewsLesson: Lesson = {
  slug: 'urls-to-views',
  tech: 'django',
  title: {
    en: 'URL Dispatching & Views — Path Converters, Namespaces & CBVs',
    bn: 'ইউআরএল ডিসপ্যাচিং ও ভিউ — পাথ কনভার্টার, নেমস্পেস ও সিবিভি'
  },
  summary: {
    en: 'Routing in Django pairs clean URL patterns with view logic responsible for processing requests and returning responses. In this lesson, you will master path converters, modular URL inclusion with app namespaces, reverse URL resolution, HttpRequest and HttpResponse inspection, and Class-Based Views (CBV).',
    bn: 'জ্যাঙ্গোতে রাউটিং সিস্টেম পরিচ্ছন্ন ইউআরএল প্যাটার্নকে ভিউ লজিকের সাথে যুক্ত করে যা রিকোয়েস্ট প্রসেস করে রেসপন্স ফেরত দেয়। এই পাঠে আপনি পাথ কনভার্টার, অ্যাপ নেমস্পেস সহ মডিউলার ইউআরএল ইনক্লুশন, রিভার্স ইউআরএল রেজোলিউশন, HttpRequest ও HttpResponse পরিদর্শন এবং ক্লাস-বেসড ভিউ (CBV) গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'url-dispatching-architecture',
      text: {
        en: 'The URL Dispatching and View Resolution Architecture',
        bn: 'ইউআরএল ডিসপ্যাচিং ও ভিউ রেজোলিউশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications with Django, the framework inspects ROOT_URLCONF to route every incoming HTTP request. Django scans the urlpatterns list from top to bottom, matches the requested path, extracts typed parameters, and invokes the designated view function or class.',
        bn: 'যখন আপনি জ্যাঙ্গো দিয়ে ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন ফ্রেমওয়ার্ক ROOT_URLCONF দেখে প্রতিটি ইনকামিং রিকোয়েস্টের রুট নির্ধারণ করে। জ্যাঙ্গো উপর থেকে নিচে ক্রমানুসারে urlpatterns তালিকা স্ক্যান করে, পাথ মিলিয়ে টাইপড প্যারামিটার বের করে এবং নির্ধারিত ভিউ কার্যকর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Path Converters',
          def: {
            en: 'URL pattern tokens (such as <int:id>, <slug:slug>, <uuid:uid>) that match and automatically cast segments into Python types.',
            bn: 'ইউআরএল টোকেন (যেমন <int:id>, <slug:slug>, <uuid:uid>) যা পাথ মিলিয়ে স্বয়ংক্রিয়ভাবে পাইথন টাইপে রূপান্তর করে।'
          }
        },
        {
          term: 'reverse() Resolution',
          def: {
            en: 'The function that looks up URL paths by their semantic route names, avoiding hardcoded URLs in views and templates.',
            bn: 'এমন একটি ফাংশন যা পাথের নাম দিয়ে সঠিক ইউআরএল বের করে আনে, ফলে কোডে ফিক্সড ইউআরএল লেখার প্রয়োজন হয় না।'
          }
        },
        {
          term: 'App Namespaces',
          def: {
            en: 'A prefix mechanism (e.g. app_name = "blog") preventing naming collisions when multiple apps define identically named routes.',
            bn: 'একটি প্রিফিক্স ব্যবস্থা (যেমন app_name = "blog") যা একাধিক অ্যাপে একই নামের রুট থাকলে সংঘাত তৈরি হওয়া রোধ করে।'
          }
        },
        {
          term: 'Class-Based Views (CBV)',
          def: {
            en: 'Views implemented as Python classes inheriting from View or generic classes (ListView, DetailView) promoting code reuse.',
            bn: 'ভিউ যা ক্লাস হিসেবে লেখা হয় এবং View বা জেনেরিক ক্লাস (ListView, DetailView) থেকে ইনহেরিট করে কোডের পুনর্ব্যবহার নিশ্চিত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'path-converters-table',
      text: {
        en: 'Django Built-in Path Converters Matrix',
        bn: 'জ্যাঙ্গো বিল্ট-ইন পাথ কনভার্টার ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Converter', bn: 'কনভার্টার' },
        { en: 'Matched Pattern', bn: 'যে প্যাটার্ন মেলায়' },
        { en: 'Resulting Python Type', bn: 'প্রাপ্ত পাইথন টাইপ' }
      ],
      rows: [
        [
          { en: '<str:name>', bn: '<str:name>' },
          { en: 'Any non-empty string excluding path separator /', bn: 'স্ল্যাশ / বাদে যেকোনো নন-এম্পটি টেক্সট' },
          { en: 'str (string primitive)', bn: 'str (পাইথন স্ট্রিং)' }
        ],
        [
          { en: '<int:pk>', bn: '<int:pk>' },
          { en: 'One or more digits (e.g. 42, 1001)', bn: 'এক বা একাধিক সংখ্যা (যেমন ৪২, ১০০১)' },
          { en: 'int (Python integer)', bn: 'int (পাইথন পূর্ণসংখ্যা)' }
        ],
        [
          { en: '<slug:slug>', bn: '<slug:slug>' },
          { en: 'Letters, numbers, underscores, and hyphens', bn: 'অক্ষর, সংখ্যা, আন্ডারস্কোর ও হাইফেনযুক্ত স্লাগ' },
          { en: 'str (URL-friendly string)', bn: 'str (ইউআরএল-বান্ধব টেক্সট)' }
        ],
        [
          { en: '<uuid:id>', bn: '<uuid:id>' },
          { en: 'Formatted 32-character UUID with hyphens', bn: 'হাইফেন সহ ৩২ অক্ষরের মানসম্মত UUID' },
          { en: 'uuid.UUID object', bn: 'uuid.UUID অবজেক্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'urls-and-views-code',
      text: {
        en: 'Working URL Resolution and Parameter Dispatching Simulation',
        bn: 'কার্যকরী ইউআরএল রেজোলিউশন ও প্যারামিটার ডিসপ্যাচিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django URL Resolver and View Dispatch
class UrlPattern {
  constructor(pattern, viewFn, name) {
    this.pattern = pattern;
    this.view = viewFn;
    this.name = name;
  }
}

// 1. Defining mock views
function postDetailView(request, postId) {
  return {
    statusCode: 200,
    postId: postId,
    title: 'Django URL Resolution In-Depth'
  };
}

// 2. urlpatterns list definition
const urlpatterns = [
  new UrlPattern('/posts/<int:id>/', postDetailView, 'post_detail')
];

// 3. Simulating request matching and type coercion
function resolveUrl(path) {
  const match = path.match(/^\\/posts\\/(\\d+)\\/$/);
  if (match) {
    const numericId = parseInt(match[1], 10);
    return postDetailView({ method: 'GET' }, numericId);
  }
  return { statusCode: 404, error: 'Not found' };
}

const response = resolveUrl('/posts/101/');
console.log('Resolved view status code:', response.statusCode);
// -> Resolved view status code: 200
console.log('Resolved numeric post ID:', response.postId);
// -> Resolved numeric post ID: 101`,
      caption: {
        en: 'Resolving post 101 with status 200 through simulated URL dispatcher',
        bn: 'সিমুলেটেড ইউআরএল ডিসপ্যাচার দিয়ে ১০১ নম্বর পোস্ট ২০০ স্ট্যাটাসে লোড হচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'fbv-vs-cbv-architecture',
      text: {
        en: 'Function-Based Views Versus Class-Based Views',
        bn: 'ফাংশন-বেসড ভিউ বনাম ক্লাস-বেসড ভিউ তুলনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Function-Based Views (FBVs) are straightforward Python functions accepting an HttpRequest and returning an HttpResponse. Class-Based Views (CBVs) encapsulate HTTP method routing (handling GET and POST in distinct class methods) and provide generic view classes like ListView and DetailView that reduce boilerplate.',
        bn: 'ফাংশন-বেসড ভিউ (FBV) হলো সাধারণ পাইথন ফাংশন যা একটি HttpRequest গ্রহণ করে এবং একটি HttpResponse ফেরত দেয়। অন্যদিকে ক্লাস-বেসড ভিউ (CBV) অবজেক্ট-ওরিয়েন্টেড কাঠামোর মাধ্যমে GET এবং POST আলাদা মেথডে হ্যান্ডল করে এবং ListView ও DetailView-এর মতো জেনেরিক ক্লাসের মাধ্যমে বারবার একই কোড লেখা দূর করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Always Name Routes: Give every path() a unique name (e.g. name="post_detail") to allow reverse() lookups.',
          bn: '১. রুটের নাম দিন: প্রতিটি path()-এ একটি নাম (যেমন name="post_detail") দিন যাতে সহজে reverse() দিয়ে ইউআরএল পাওয়া যায়।'
        },
        {
          en: '2. Modular URLs with include(): Break routing into app-specific urls.py files and include() them in the project urls.py.',
          bn: '২. include() দিয়ে রুট ভাগ: প্রতিটি অ্যাপে আলাদা urls.py ফাইল রাখুন এবং প্রজেক্টের মূল urls.py-তে include() করুন।'
        },
        {
          en: '3. Use get_object_or_404(): Avoid unhandled DoesNotExist exceptions by wrapping model fetches in get_object_or_404().',
          bn: '৩. get_object_or_404() ব্যবহার: ডাটা না পেলে ক্র্যাশ এড়াতে সাধারণ .get()-এর বদলে get_object_or_404() ব্যবহার করুন।'
        },
        {
          en: '4. Prefer Generic CBVs for CRUD: Use ListView, DetailView, and CreateView to eliminate repetitive database query boilerplate.',
          bn: '৪. ক্রাড অপারেশনে জেনেরিক সিবিভি: তালিকা প্রদর্শন ও অবজেক্ট তৈরির কাজে ListView ও DetailView ব্যবহার করে কোড পরিচ্ছন্ন রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-url-ex1',
      kind: 'mcq',
      topic: 'django path converter syntax',
      question: {
        en: 'Which path converter syntax correctly captures an integer primary key named "id" in a Django 4+ URL pattern?',
        bn: 'জ্যাঙ্গো ৪+ ইউআরএল প্যাটার্নে "id" নামের পূর্ণসংখ্যা প্রাইমারি কি গ্রহণের সঠিক সিনট্যাক্স কোনটি?'
      },
      options: [
        {
          en: 'path("posts/<int:id>/", views.post_detail, name="post_detail")',
          bn: 'path("posts/<int:id>/", views.post_detail, name="post_detail")'
        },
        {
          en: 'path("posts/:id/", views.post_detail, name="post_detail")',
          bn: 'path("posts/:id/", views.post_detail, name="post_detail")'
        },
        {
          en: 'path("posts/{id:int}/", views.post_detail, name="post_detail")',
          bn: 'path("posts/{id:int}/", views.post_detail, name="post_detail")'
        },
        {
          en: 'path("posts/[0-9]+/id", views.post_detail, name="post_detail")',
          bn: 'path("posts/[0-9]+/id", views.post_detail, name="post_detail")'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django path converters use angle brackets with converter:variable syntax.',
        bn: 'জ্যাঙ্গো পাথ কনভার্টারে অ্যাঙ্গেল ব্র্যাকেটের ভেতরে <টাইপ:চলক> সিনট্যাক্স ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Django uses <converter:parameter> syntax. For integers, <int:id> matches digits and automatically converts the argument to a Python int.',
        bn: 'জ্যাঙ্গোতে <converter:parameter> সিনট্যাক্স ব্যবহৃত হয়। <int:id> সংখ্যা মেলায় এবং মানটিকে সরাসরি পাইথনের পূর্ণসংখ্যায় রূপান্তর করে।'
      }
    },
    {
      id: 'dj-url-ex2',
      kind: 'mcq',
      topic: 'reverse url resolution benefit',
      question: {
        en: 'Why is using reverse("blog:post_detail", kwargs={"id": 42}) superior to hardcoding "/blog/posts/42/" in views?',
        bn: 'ভিউতে সরাসরি "/blog/posts/42/" ফিক্সড না লিখে reverse("blog:post_detail", kwargs={"id": 42}) ব্যবহার করা কেন শ্রেষ্ঠ?'
      },
      options: [
        {
          en: 'If the URL pattern path changes in urls.py, all links and redirects update automatically without breaking or requiring search-and-replace across files',
          bn: 'যদি urls.py ফাইলে পাথের পরিবর্তন ঘটে, তবে কোড না ভেঙে সমস্ত লিঙ্ক ও রিডাইরেক্ট স্বয়ংক্রিয়ভাবে আপডেট হয়ে যায়'
        },
        {
          en: 'It encrypts the URL string using HTTPS algorithms',
          bn: 'এটি ইউআরএল স্ট্রিংকে এইচটিটিপিএস দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It converts the URL from English to Bengali text',
          bn: 'এটি ইউআরএলকে ইংরেজি থেকে বাংলায় অনুবাদ করে'
        },
        {
          en: 'reverse() makes database queries run 50 percent faster',
          bn: 'reverse() ডাটাবেজ কুয়েরি ৫০ শতাংশ দ্রুত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It adheres to the Don\'t Repeat Yourself (DRY) principle for URL schemas.',
        bn: 'এটি ইউআরএল স্কিমার ক্ষেত্রে DRY নীতি বজায় রেখে কোডকে সুরক্ষিত রাখে।'
      },
      explanation: {
        en: 'Reverse URL resolution decouples code from static paths. You can modify your URL structure in urls.py without breaking any views or templates.',
        bn: 'রিভার্স রেজোলিউশন কোডকে ফিক্সড পাথ থেকে মুক্ত রাখে। ফলে urls.py-তে পাথ বদলালেও ভিউ বা টেমপ্লেটের কোনো লিংক ভাঙে না।'
      }
    },
    {
      id: 'dj-url-ex3',
      kind: 'mcq',
      topic: 'class based view as_view invocation',
      question: {
        en: 'How must a Class-Based View like PostListView be registered in a Django urlpatterns list?',
        bn: 'জ্যাঙ্গো urlpatterns তালিকায় PostListView-এর মতো ক্লাস-বেসড ভিউ কীভাবে যুক্ত করতে হয়?'
      },
      options: [
        {
          en: 'path("posts/", PostListView.as_view(), name="post_list")',
          bn: 'path("posts/", PostListView.as_view(), name="post_list")'
        },
        {
          en: 'path("posts/", new PostListView(), name="post_list")',
          bn: 'path("posts/", new PostListView(), name="post_list")'
        },
        {
          en: 'path("posts/", PostListView.execute(), name="post_list")',
          bn: 'path("posts/", PostListView.execute(), name="post_list")'
        },
        {
          en: 'path("posts/", PostListView.dispatch(), name="post_list")',
          bn: 'path("posts/", PostListView.dispatch(), name="post_list")'
        }
      ],
      answer: 0,
      hint: {
        en: 'Class-Based Views expose an as_view() class method that transforms the class into a callable view function.',
        bn: 'ক্লাস-বেসড ভিউতে as_view() মেথড থাকে যা ক্লাসটিকে একটি কার্যকর ভিউ ফাংশনে রূপান্তর করে।'
      },
      explanation: {
        en: 'The as_view() class method creates an instance of the class and returns a callable function that dispatches HTTP requests to get() or post() methods.',
        bn: 'as_view() মেথড ক্লাসের অবজেক্ট তৈরি করে একটি কলযোগ্য ফাংশন দেয় যা রিকোয়েস্ট মেথড অনুযায়ী get() বা post() মেথড কল করে।'
      }
    },
    {
      id: 'dj-url-ex4',
      kind: 'mcq',
      topic: 'get_object_or_404 helper functionality',
      question: {
        en: 'What occurs when get_object_or_404(Post, id=pk) fails to find a matching record in the database?',
        bn: 'ডাটাবেজে রেকর্ডটি না পাওয়া গেলে get_object_or_404(Post, id=pk) কী আচরণ প্রদর্শন করে?'
      },
      options: [
        {
          en: 'It catches the model DoesNotExist exception and raises an Http404 exception, rendering a standard 404 Not Found response',
          bn: 'এটি DoesNotExist এররটি ধরে একটি Http404 এক্সেপশন ছুড়ে দেয় যা স্ট্যান্ডার্ড ৪০৪ নট ফাউন্ড রেসপন্স তৈরি করে'
        },
        {
          en: 'It returns None and crashes the view with an unhandled TypeError',
          bn: 'এটি None ফেরত দেয় এবং আনহ্যান্ডলড TypeError দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'It automatically creates a blank dummy record in the database',
          bn: 'এটি ডাটাবেজে একটি খালি ডামি রেকর্ড তৈরি করে ফেলে'
        },
        {
          en: 'It redirects the user to the Google search engine',
          bn: 'এটি ব্যবহারকারীকে গুগল সার্চ ইঞ্জিনে রিডাইরেক্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It converts database model exceptions into friendly HTTP 404 errors.',
        bn: 'এটি ডাটাবেজ মডেল এররকে সুন্দর এইচটিটিপি ৪০৪ এররে রূপান্তর করে।'
      },
      explanation: {
        en: 'Instead of raising an unhandled 500 error due to Post.DoesNotExist, get_object_or_404 cleanly converts the failure into an HTTP 404 Not Found response.',
        bn: 'মডেল না পেয়ে ৫০০ এরর ক্র্যাশ করার বদলে get_object_or_404 ব্যর্থতাকে একটি পরিচ্ছন্ন এইচটিটিপি ৪০৪ নট ফাউন্ড রেসপন্সে পরিণত করে।'
      }
    }
  ],
  quiz: {
    id: 'urls-to-views-quiz',
    title: {
      en: 'Django URL Routing & Views Quiz',
      bn: 'জ্যাঙ্গো ইউআরএল রাউটিং ও ভিউ কুইজ'
    },
    questions: [
      {
        id: 'q-app-namespace-collision-prevention',
        kind: 'mcq',
        topic: 'app namespace prevents route name collisions',
        question: {
          en: 'If both a "store" app and a "blog" app define a route named "index", how do app namespaces prevent collisions?',
          bn: 'যদি "store" এবং "blog" উভয় অ্যাপের রুটের নাম "index" হয়, তবে অ্যাপ নেমস্পেস কীভাবে সংঘাত দূর করে?'
        },
        options: [
          {
            en: 'By setting app_name in each app urls.py, allowing templates and views to distinguish between reverse("store:index") and reverse("blog:index")',
            bn: 'প্রতিটি অ্যাপের urls.py-তে app_name দিয়ে, যার ফলে কোডে reverse("store:index") এবং reverse("blog:index") স্পষ্টভাবে আলাদা থাকে'
          },
          {
            en: 'Django deletes the second app from settings.py automatically',
            bn: 'জ্যাঙ্গো সেটিংস থেকে দ্বিতীয় অ্যাপটিকে মুছে ফেলে'
          },
          {
            en: 'It renames the views to index_1 and index_2 in Python memory',
            bn: 'এটি পাইথন মেমরিতে ভিউগুলোর নাম বদলে index_1 ও index_2 করে'
          },
          {
            en: 'Namespaces are only used for CSS stylesheets in Django',
            bn: 'জ্যাঙ্গোতে নেমস্পেস কেবল সিএসএস স্টাইলশিটের জন্য ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Namespaces prefix route names with the application identifier.',
          bn: 'নেমস্পেস রুটের নামের শুরুতে অ্যাপের নাম একটি প্রিফিক্স হিসেবে যুক্ত করে।'
        },
        explanation: {
          en: 'Setting app_name = "blog" creates an application namespace. Routes are then accessed via "app_name:route_name", preventing collisions.',
          bn: 'app_name = "blog" দিলে অ্যাপ নেমস্পেস সক্রিয় হয়। তখন "app_name:route_name" দিয়ে নিখুঁতভাবে সঠিক রুটটি কল করা যায়।'
        }
      },
      {
        id: 'q-http-request-object-attributes',
        kind: 'mcq',
        topic: 'httprequest core properties',
        question: {
          en: 'Which properties on the Django HttpRequest object provide access to HTTP method, query parameters, and uploaded files respectively?',
          bn: 'জ্যাঙ্গো HttpRequest অবজেক্টে মেথড, কোয়েরি প্যারামিটার এবং আপলোড করা ফাইল অ্যাক্সেস করতে কোন প্রোপার্টিগুলো ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'request.method, request.GET, and request.FILES',
            bn: 'request.method, request.GET, এবং request.FILES'
          },
          {
            en: 'request.verb, request.query, and request.uploads',
            bn: 'request.verb, request.query, এবং request.uploads'
          },
          {
            en: 'request.httpType, request.urlParams, and request.blobs',
            bn: 'request.httpType, request.urlParams, এবং request.blobs'
          },
          {
            en: 'request.protocol, request.search, and request.disk',
            bn: 'request.protocol, request.search, এবং request.disk'
          }
        ],
        answer: 0,
        hint: {
          en: 'Django uses uppercase dictionary-like QueryDict attributes for GET, POST, and FILES.',
          bn: 'জ্যাঙ্গো GET, POST ও FILES-এর জন্য বড় হাতের অক্ষরের প্রোপার্টি ব্যবহার করে।'
        },
        explanation: {
          en: 'HttpRequest provides request.method (e.g. "GET", "POST"), request.GET for query parameters, request.POST for form data, and request.FILES for multipart uploads.',
          bn: 'HttpRequest অবজেক্টে মেথডের জন্য request.method, কোয়েরির জন্য request.GET এবং ফাইলের জন্য request.FILES ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-custom-path-converter',
        kind: 'mcq',
        topic: 'register_converter custom path converters',
        question: {
          en: 'How do you register a custom path converter (such as a 4-digit year converter) in Django URL routing?',
          bn: 'জ্যাঙ্গো ইউআরএল রাউটিংয়ে একটি কাস্টম পাথ কনভার্টার (যেমন ৪-সংখ্যার বছর কনভার্টার) কীভাবে নিবন্ধন করতে হয়?'
        },
        options: [
          {
            en: 'Define a class with regex, to_python(), and to_url() methods, then register it via register_converter(FourDigitYearConverter, "yyyy")',
            bn: 'regex, to_python() ও to_url() মেথড সহ ক্লাস তৈরি করে register_converter(FourDigitYearConverter, "yyyy") দিয়ে রেজিস্টার করে'
          },
          {
            en: 'Save a regular expression inside a text file named regex.txt',
            bn: 'regex.txt নামের ফাইলে একটি রেগুলার এক্সপ্রেশন লিখে রেখে'
          },
          {
            en: 'Change the Python compiler settings in the operating system',
            bn: 'অপারেটিং সিস্টেমে পাইথন কম্পাইলারের সেটিংস পরিবর্তন করে'
          },
          {
            en: 'Custom path converters are unsupported; developers must use re_path()',
            bn: 'কাস্টম কনভার্টার অসমর্থিত; ডেভেলপারদের অবশ্যই re_path ব্যবহার করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A path converter class needs regex matching, to_python conversion, and to_url formatting.',
          bn: 'পাথ কনভার্টার ক্লাসে রেজেক্স মিলানো, টাইপ রূপান্তর ও ইউআরএল ফরম্যাটের মেথড থাকতে হয়।'
        },
        explanation: {
          en: 'Custom path converters require a regex attribute and to_python/to_url methods, registered with django.urls.register_converter.',
          bn: 'কাস্টম কনভার্টারে regex এট্রিবিউট এবং to_python/to_url মেথড থাকে যা register_converter দিয়ে সহজে যুক্ত করা যায়।'
        }
      },
      {
        id: 'q-cbv-dispatch-method',
        kind: 'mcq',
        topic: 'class based view dispatch method execution',
        question: {
          en: 'What is the internal responsibility of the dispatch() method inside Django View class?',
          bn: 'জ্যাঙ্গো View ক্লাসের ভেতরে dispatch() মেথডের অভ্যন্তরীণ কাজ কী?'
        },
        options: [
          {
            en: 'It inspects request.method (e.g. GET, POST) and dynamically calls the matching class method (get() or post()), or returns HTTP 405 Method Not Allowed if unsupported',
            bn: 'এটি request.method পরীক্ষা করে মিল থাকা ক্লাস মেথডকে (get() বা post()) কল করে, অথবা মেথড না থাকলে HTTP 405 ফেরত দেয়'
          },
          {
            en: 'It compiles Django templates into HTML string buffers',
            bn: 'এটি জ্যাঙ্গো টেমপ্লেটকে এইচটিএমএল স্ট্রিং বাফারে কম্পাইল করে'
          },
          {
            en: 'It verifies whether the database connection is currently alive',
            bn: 'এটি ডাটাবেজ সংযোগ সক্রিয় আছে কিনা তা পরীক্ষা করে'
          },
          {
            en: 'It restarts the WSGI server worker process',
            bn: 'এটি WSGI সার্ভারের ওয়ার্কার প্রসেস রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The dispatch method routes incoming HTTP verbs to corresponding class methods.',
          bn: 'dispatch মেথড এইচটিটিপি ভার্বগুলোর ওপর ভিত্তি করে সংশ্লিষ্ট ক্লাস মেথডে রিকোয়েস্ট পাঠায়।'
        },
        explanation: {
          en: 'View.dispatch() checks request.method. If the method is GET, it calls self.get(); if POST, it calls self.post(). If the method is not defined, it returns 405 Method Not Allowed.',
          bn: 'dispatch() মেথডটি রিকোয়েস্ট মেথড দেখে get() বা post() চালায়। ক্লাসে মেথডটি না থাকলে এটি সরাসরি ৪০৫ মেথড নট এলাউড ফেরত দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'templates-on-the-table',
    title: {
      en: 'Django Templates — DTL Syntax, Inheritance, Filters & Context Processors',
      bn: 'জ্যাঙ্গো টেমপ্লেট — ডিটিএল সিনট্যাক্স, ইনহেরিটেন্স, ফিল্টার ও কনটেক্সট প্রসেসর'
    }
  }
};
