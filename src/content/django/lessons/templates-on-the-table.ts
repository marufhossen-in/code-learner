import type { Lesson } from '../../../lib/types';

export const TemplatesOnTheTableLesson: Lesson = {
  slug: 'templates-on-the-table',
  tech: 'django',
  title: {
    en: 'Django Templates — DTL Syntax, Inheritance, Filters & Context Processors',
    bn: 'জ্যাঙ্গো টেমপ্লেট — ডিটিএল সিনট্যাক্স, ইনহেরিটেন্স, ফিল্টার ও কনটেক্সট প্রসেসর'
  },
  summary: {
    en: 'Django Template Language (DTL) separates server-side data preparation from HTML presentation. In this lesson, you will master template syntax (variables, tags, filters), modular template inheritance with extends and block, automatic XSS auto-escaping security, and global data injection via context processors.',
    bn: 'জ্যাঙ্গো টেমপ্লেট ল্যাঙ্গুয়েজ (DTL) সার্ভার-সাইড ডাটা প্রসেসিং থেকে এইচটিএমএল প্রেজেন্টেশনকে সম্পূর্ণ আলাদা রাখে। এই পাঠে আপনি টেমপ্লেট সিনট্যাক্স (ভেরিয়েবল, ট্যাগ, ফিল্টার), extends ও block দিয়ে মডিউলার টেমপ্লেট ইনহেরিটেন্স, স্বয়ংক্রিয় এক্সএসএস প্রতিরোধ এবং কনটেক্সট প্রসেসরের মাধ্যমে গ্লোবাল ডাটা ইনজেকশন গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'dtl-architecture-overview',
      text: {
        en: 'The Django Template Language Architecture',
        bn: 'জ্যাঙ্গো টেমপ্লেট ল্যাঙ্গুয়েজ আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you render dynamic web pages with Django, templates provide a clean syntax designed to prevent arbitrary Python code execution inside presentation markup. The Django Template Language (DTL) focuses on presentation logic, offering template inheritance, filters for data formatting, and automatic HTML escaping to defend against Cross-Site Scripting (XSS).',
        bn: 'যখন আপনি জ্যাঙ্গো দিয়ে ডায়নামিক ওয়েবপেজ রেন্ডার করেন, তখন টেমপ্লেট এমন পরিচ্ছন্ন সিনট্যাক্স প্রদান করে যা এইচটিএমএলের ভেতরে সরাসরি জটিল পাইথন কোড লেখা রোধ করে। জ্যাঙ্গো টেমপ্লেট ল্যাঙ্গুয়েজ (DTL) মূলত প্রেজেন্টেশনের ওপর জোর দেয়, যেখানে টেমপ্লেট ইনহেরিটেন্স, ফিল্টার এবং এক্সএসএস আক্রমণ ঠেকানোর জন্য স্বয়ংক্রিয় এইচটিএমএল এসকেপিং অন্তর্ভুক্ত রয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Template Inheritance ({% extends %})',
          def: {
            en: 'The architectural pattern where a child template inherits the master HTML shell from base.html and overrides specific named blocks.',
            bn: 'একটি স্থাপত্য কৌশল যেখানে চাইল্ড টেমপ্লেট base.html থেকে মূল কাঠামো ধার করে এবং কেবল নির্দিষ্ট ব্লকের ভেতরের কনটেন্ট পরিবর্তন করে।'
          }
        },
        {
          term: 'Template Filters ({{ val|filter }})',
          def: {
            en: 'Piped transformations applied to variables in templates, modifying appearance before rendering (such as date formatting or word truncating).',
            bn: 'টেমপ্লেটের ভেরিয়েবলে পাইপ চিহ্নের মাধ্যমে প্রয়োগ করা রূপান্তর, যা ডাটা রেন্ডার হওয়ার আগে প্রদর্শন রূপ বদলে দেয়।'
          }
        },
        {
          term: 'Auto-Escaping Security',
          def: {
            en: 'Django default defense mechanism converting sensitive characters (<, >, &, \', ") into HTML entities to eliminate XSS injection.',
            bn: 'জ্যাঙ্গোর ডিফল্ট নিরাপত্তা ব্যবস্থা যা বিপজ্জনক চিহ্নগুলোকে (<, >, &) স্বয়ংক্রিয়ভাবে এইচটিএমএল এন্টিটিতে রূপান্তর করে XSS ঠেকায়।'
          }
        },
        {
          term: 'Context Processors',
          def: {
            en: 'Python functions that inject global context variables (such as current user or cart total) automatically into every rendered template.',
            bn: 'পাইথন ফাংশন যা প্রতিটি রেন্ডার করা টেমপ্লেটে স্বয়ংক্রিয়ভাবে গ্লোবাল চলক (যেমন বর্তমান ইউজার বা কার্টের আইটেম) যোগ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'dtl-syntax-matrix',
      text: {
        en: 'DTL Core Syntax Construct Matrix',
        bn: 'ডিটিএল মূল সিনট্যাক্স উপাদান ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Construct Type', bn: 'উপাদানের ধরন' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Architectural Duty', bn: 'আর্কিটেকচারাল দায়িত্ব' }
      ],
      rows: [
        [
          { en: 'Variable Interpolation', bn: 'ভেরিয়েবল ইন্টারপোলেশন' },
          { en: '{{ post.title }}', bn: '{{ post.title }}' },
          { en: 'Resolves dot-lookup (dictionary key, attribute, method call, list index)', bn: 'ডট-লুকআপ সমাধান করে (ডিকশনারি কি, অবজেক্ট এট্রিবিউট, মেথড কল)' }
        ],
        [
          { en: 'Control Tag', bn: 'কন্ট্রোল ট্যাগ' },
          { en: '{% for item in items %} ... {% endfor %}', bn: '{% for item in items %} ... {% endfor %}' },
          { en: 'Executes template control loops and conditional branching', bn: 'লুপ চালানো এবং শর্তসাপেক্ষ কনটেন্ট প্রদর্শনের কাজ করে' }
        ],
        [
          { en: 'Security Tag', bn: 'সিকিউরিটি ট্যাগ' },
          { en: '{% csrf_token %}', bn: '{% csrf_token %}' },
          { en: 'Renders a hidden input field containing the CSRF protection token', bn: 'সিএসআরএফ প্রতিরোধের জন্য একটি গোপন ইনপুট ফিল্ড ও টোকেন তৈরি করে' }
        ],
        [
          { en: 'Piped Filter', bn: 'পাইপড ফিল্টার' },
          { en: '{{ post.content|truncatewords:20 }}', bn: '{{ post.content|truncatewords:20 }}' },
          { en: 'Truncates string to 20 words and appends ellipsis automatically', bn: 'লেখাটিকে প্রথম ২০টি শব্দে কেটে শেষে স্বয়ংক্রিয়ভাবে তিনটি ডট যোগ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'template-rendering-code',
      text: {
        en: 'Working Template Inheritance and Context Resolution Simulation',
        bn: 'কার্যকরী টেমপ্লেট ইনহেরিটেন্স ও কনটেক্সট রেজোলিউশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django Template Dot-Lookup and HTML Auto-Escaping
function escapeHtml(unsafeText) {
  return String(unsafeText)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function resolveVariable(context, path) {
  const parts = path.split('.');
  let current = context;
  for (const part of parts) {
    if (current == null) return '';
    current = typeof current[part] === 'function' ? current[part]() : current[part];
  }
  return current;
}

// 1. Simulating context passed to template
const templateContext = {
  user: {
    username: 'developer_alex',
    unreadCount: () => 5
  },
  comment: '<script>alert("xss")</script>'
};

// 2. Rendering and escaping verification
const username = resolveVariable(templateContext, 'user.username');
const unread = resolveVariable(templateContext, 'user.unreadCount');
const safeComment = escapeHtml(templateContext.comment);

console.log('Resolved user unread count:', unread);
// -> Resolved user unread count: 5
console.log('Auto-escaped script tag start:', safeComment.startsWith('&lt;script&gt;'));
// -> Auto-escaped script tag start: true`,
      caption: {
        en: 'Dot-lookup resolving 5 unread and auto-escaping dangerous script tags',
        bn: 'ডট-লুকআপ ৫টি নোটিফিকেশন পড়ছে এবং ক্ষতিকর স্ক্রিপ্ট ট্যাগ এসকেপ করছে'
      }
    },
    {
      type: 'heading',
      id: 'inheritance-and-safety',
      text: {
        en: 'Template Inheritance Structure and XSS Safety Rules',
        bn: 'টেমপ্লেট ইনহেরিটেন্স কাঠামো ও এক্সএসএস নিরাপত্তা নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Template inheritance follows a clean hierarchy: base.html defines the shared header, navigation bar, and footer with named {% block %} sections. Child templates declare {% extends "base.html" %} at line 1 and populate only the necessary blocks, guaranteeing consistency across hundreds of pages without duplicating HTML scaffolding.',
        bn: 'টেমপ্লেট ইনহেরিটেন্স একটি পরিচ্ছন্ন কাঠামো অনুসরণ করে: base.html-এ হেডার, ন্যাভিগেশন বার এবং ফুটার সহ নির্দিষ্ট {% block %} অংশ থাকে। চাইল্ড টেমপ্লেটগুলো ফাইলের ১ নম্বর লাইনে {% extends "base.html" %} লিখে কেবল প্রয়োজনীয় ব্লকগুলো পূরণ করে, যার ফলে কোড বারবার না লিখেও শত শত পেজে অভিন্ন ডিজাইন বজায় থাকে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. {% extends %} Must Be First: The extends tag must strictly be the first line of any child template file.',
          bn: '১. extends ১ম লাইনে: চাইল্ড টেমপ্লেটের একদম প্রথম লাইনেই সর্বদা extends ট্যাগটি থাকতে হবে।'
        },
        {
          en: '2. Auto-Escaping Is On: Django auto-escapes all variables by default; only use the |safe filter on HTML you personally generated.',
          bn: '২. অটো-এসকেপিং সক্রিয়: ডিফল্টভাবে সব ভেরিয়েবল এসকেপ হয়; কেবল নিজের তৈরি নিরাপদ এইচটিএমএলেই |safe ফিল্টার দেবেন।'
        },
        {
          en: '3. Never |safe User Input: Applying |safe to user-submitted forum comments or reviews directly introduces XSS vulnerabilities.',
          bn: '৩. ইউজারের ডাটায় |safe নয়: ব্যবহারকারীর পাঠানো টেক্সটে |safe দিলে আক্রমণকারী সরাসরি ক্ষতিকর জাভাস্ক্রিপ্ট চালাতে পারবে।'
        },
        {
          en: '4. Context Processors for Globals: Use context processors in settings.py to provide site-wide values rather than passing them from every view.',
          bn: '৪. গ্লোবাল ডাটায় কনটেক্সট প্রসেসর: প্রতিটি ভিউ থেকে বারবার ডাটা না পাঠিয়ে সাইটব্যাপী তথ্যের জন্য কনটেক্সট প্রসেসর ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-tmpl-ex1',
      kind: 'mcq',
      topic: 'template inheritance placement rule',
      question: {
        en: 'Where must the {% extends "base.html" %} tag appear in a child Django template file?',
        bn: 'চাইল্ড জ্যাঙ্গো টেমপ্লেট ফাইলে {% extends "base.html" %} ট্যাগটি ঠিক কোথায় থাকতে হবে?'
      },
      options: [
        {
          en: 'Strictly as the very first line of the file, before any other HTML or template tags',
          bn: 'কঠোরভাবে ফাইলের একদম প্রথম লাইনে, অন্য যেকোনো ট্যাগ বা এইচটিএমএল লেখার পূর্বে'
        },
        {
          en: 'Inside the <footer> element at the bottom of the page',
          bn: 'পেজের একদম নিচে <footer> উপাদানের ভেতরে'
        },
        {
          en: 'Inside the <head> element after the title tag',
          bn: '<head> উপাদানের ভেতরে টাইটেল ট্যাগের পরে'
        },
        {
          en: 'Anywhere in the file; the template compiler automatically sorts tags',
          bn: 'ফাইলের যেকোনো জায়গায়; কম্পাইলার নিজে থেকে সাজিয়ে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django parser requires extends to be the first token in the token stream.',
        bn: 'জ্যাঙ্গো পার্সারের নিয়ম অনুযায়ী টেমপ্লেটের প্রথম টোকেনটি অবশ্যই extends হতে হয়।'
      },
      explanation: {
        en: 'Django enforces that {% extends %} must be the very first template tag. Content preceding it will cause a TemplateSyntaxError.',
        bn: 'জ্যাঙ্গোর নিয়ম অনুযায়ী {% extends %} ফাইলের ১ম লাইনেই থাকতে হবে। এর আগে কোনো কোড থাকলে সিনট্যাক্স এরর দেখা দেবে।'
      }
    },
    {
      id: 'dj-tmpl-ex2',
      kind: 'mcq',
      topic: 'safe filter security risk',
      question: {
        en: 'What severe security vulnerability occurs if a developer writes "{{ user_comment|safe }}" in a blog template?',
        bn: 'ব্লগ টেমপ্লেটে কোনো ডেভেলপার "{{ user_comment|safe }}" লিখলে কোন মারাত্মক নিরাপত্তা ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'Cross-Site Scripting (XSS): malicious users can submit raw <script> tags that execute arbitrary JavaScript in the browsers of visiting readers',
          bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): আক্রমণকারীরা কমেন্টে ক্ষতিকর <script> ট্যাগ পাঠিয়ে অন্য পাঠকদের ব্রাউজারে অনাকাঙ্ক্ষিত কোড চালাতে পারবে'
        },
        {
          en: 'SQL Injection: user comments can modify the database table structure',
          bn: 'এসকিউএল ইনজেকশন: কমেন্টগুলো ডাটাবেজের টেবিল মুছে দিতে পারবে'
        },
        {
          en: 'Denial of Service by deleting the Django settings.py file',
          bn: 'জ্যাঙ্গোর settings.py ফাইল মুছে দিয়ে সার্ভার অচল করে দেওয়া'
        },
        {
          en: 'The template will fail to render and crash the Python interpreter',
          bn: 'টেমপ্লেট রেন্ডার হতে ব্যর্থ হয়ে পাইথন ইন্টারপ্রেটার ক্র্যাশ করবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The |safe filter disables Django automatic HTML escaping on that variable.',
        bn: '|safe ফিল্টার ওই ভেরিয়েবলের ওপর জ্যাঙ্গোর স্বয়ংক্রিয় এইচটিএমএল এসকেপিং বন্ধ করে দেয়।'
      },
      explanation: {
        en: 'The safe filter tells Django to trust the string and disable auto-escaping. If applied to untrusted user input, attackers can inject malicious JavaScript (XSS).',
        bn: '|safe দিলে জ্যাঙ্গো স্ট্রিংটিকে নিরাপদ মনে করে এসকেপ করা বন্ধ করে। ইউজারের ইনপুটে এটি দিলে আক্রমণকারী ক্ষতিকর জাভাস্ক্রিপ্ট চালাতে সক্ষম হয়।'
      }
    },
    {
      id: 'dj-tmpl-ex3',
      kind: 'mcq',
      topic: 'context processor execution in django',
      question: {
        en: 'What is the primary role of a Context Processor in the Django template engine?',
        bn: 'জ্যাঙ্গো টেমপ্লেট ইঞ্জিনে কনটেক্সট প্রসেসরের প্রধান কাজ কী?'
      },
      options: [
        {
          en: 'It is a Python function that takes request as an argument and returns a dictionary of variables automatically merged into the context of every rendered template',
          bn: 'এটি একটি পাইথন ফাংশন যা request গ্রহণ করে একটি ডিকশনারি ফেরত দেয়, যা প্রতিটি রেন্ডার হওয়া টেমপ্লেটের কনটেক্সটে স্বয়ংক্রিয়ভাবে যুক্ত হয়'
        },
        {
          en: 'It compresses HTML files into zip archives before sending them to users',
          bn: 'এটি ব্যবহারকারীকে পাঠানোর আগে এইচটিএমএল ফাইল জিপ আর্কাইভে সংকুচিত করে'
        },
        {
          en: 'It compiles CSS stylesheets into Sass syntax',
          bn: 'এটি সিএসএস স্টাইলশিটকে স্যাস সিনট্যাক্সে রূপান্তর করে'
        },
        {
          en: 'It manages physical CPU thread scheduling in the Linux operating system',
          bn: 'এটি লিনাক্স অপারেটিং সিস্টেমে সিপিইউ থ্রেড পরিচালনা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Context processors make shared data globally available across all templates.',
        bn: 'কনটেক্সট প্রসেসর সমস্ত টেমপ্লেটে শেয়ার করা ডাটা সহজে পৌঁছে দেয়।'
      },
      explanation: {
        en: 'Context processors return dictionaries of variables (like request, user, or cart) that Django automatically adds to the context of every template rendered with RequestContext.',
        bn: 'কনটেক্সট প্রসেসর এমন কিছু চলক তৈরি করে যা জ্যাঙ্গোর প্রতিটি টেমপ্লেটে নিজে থেকেই পাওয়া যায়, ভিউ থেকে বারবার পাঠাতে হয় না।'
      }
    },
    {
      id: 'dj-tmpl-ex4',
      kind: 'mcq',
      topic: 'dot lookup resolution order in dtl',
      question: {
        en: 'In what exact order does Django Template Language evaluate the variable expression "{{ user.profile }}"?',
        bn: 'জ্যাঙ্গো টেমপ্লেট ল্যাঙ্গুয়েজ "{{ user.profile }}" এক্সপ্রেশনটি মূল্যায়নের ক্ষেত্রে কোন ক্রমানুসার মেনে চলে?'
      },
      options: [
        {
          en: '1. Dict key lookup, 2. Object attribute access, 3. Callable method execution, 4. List index position',
          bn: '১. ডিকশনারি কি যাচাই, ২. অবজেক্ট এট্রিবিউট এক্সেস, ৩. কলযোগ্য মেথড এক্সিকিউশন, ৪. লিস্টের ইনডেক্স ক্রম'
        },
        {
          en: '1. Database SQL query; 2. Operating system file search',
          bn: '১. ডাটাবেজ এসকিউএল কুয়েরি; ২. ফাইল সিস্টেমে অনুসন্ধান'
        },
        {
          en: '1. CSS class search; 2. HTML tag lookup',
          bn: '১. সিএসএস ক্লাস সার্চ; ২. এইচটিএমএল ট্যাগ অনুসন্ধান'
        },
        {
          en: 'In reverse alphabetical order by method name',
          bn: 'মেথডের নামের বিপরীত বর্ণানুক্রমিক অনুসারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django tries dictionary access first, then attribute, then callable method, then list index.',
        bn: 'জ্যাঙ্গো প্রথমে ডিকশনারি, তারপর এট্রিবিউট, তারপর মেথড এবং শেষে লিস্ট ইনডেক্স মেলায়।'
      },
      explanation: {
        en: 'DTL dot-lookup systematically tries dictionary lookup, attribute lookup, method call, and numeric list index before falling back to string_if_invalid.',
        bn: 'ডিটিএল ডট-লুকআপ প্রথমে ডিকশনারি, তারপর এট্রিবিউট, তারপর কলযোগ্য মেথড এবং সবশেষে লিস্ট ইনডেক্স হিসেবে ডাটা খুঁজে বের করে।'
      }
    }
  ],
  quiz: {
    id: 'templates-on-the-table-quiz',
    title: {
      en: 'Django Templates & DTL Syntax Quiz',
      bn: 'জ্যাঙ্গো টেমপ্লেট ও ডিটিএল সিনট্যাক্স কুইজ'
    },
    questions: [
      {
        id: 'q-csrf-token-tag-form-post',
        kind: 'mcq',
        topic: 'csrf token requirement in post forms',
        question: {
          en: 'What occurs if an HTML form targeting a POST route is submitted without including the {% csrf_token %} tag?',
          bn: 'যদি {% csrf_token %} ট্যাগ ছাড়া কোনো এইচটিএমএল ফর্ম POST রিকোয়েস্টে পাঠানো হয় তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'Django CsrfViewMiddleware intercepts the request and immediately returns an HTTP 403 Forbidden error stating "CSRF verification failed"',
            bn: 'জ্যাঙ্গোর CsrfViewMiddleware রিকোয়েস্ট আটকে দেয় এবং সাথে সাথে "CSRF verification failed" সহ এইচটিটিপি ৪০৩ ফরবিডেন এরর পাঠায়'
          },
          {
            en: 'The server accepts the form and converts the data into an SQL dump',
            bn: 'সার্ভার ফর্মটি গ্রহণ করে ডাটাকে এসকিউএল ডাম্পে রূপান্তর করে'
          },
          {
            en: 'The user password is automatically reset to a random string',
            bn: 'ব্যবহারকারীর পাসওয়ার্ড স্বয়ংক্রিয়ভাবে বদলে যায়'
          },
          {
            en: 'The browser window automatically closes',
            bn: 'ব্রাউজার উইন্ডোটি নিজে থেকেই বন্ধ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Django protects all POST requests by default against Cross-Site Request Forgery.',
          bn: 'জ্যাঙ্গো ডিফল্টভাবে সমস্ত POST রিকোয়েস্টকে সিএসআরএফ আক্রমণ থেকে কঠোরভাবে রক্ষা করে।'
        },
        explanation: {
          en: 'Without {% csrf_token %}, the browser does not send the CSRF cookie token. The middleware detects the missing token and rejects the submission with HTTP 403.',
          bn: '{% csrf_token %} না থাকলে রিকোয়েস্টে সঠিক টোকেন থাকে না। মিডেলওয়্যার এটি শনাক্ত করে সাথে সাথে ৪০৩ ফরবিডেন দিয়ে রিকোয়েস্ট বাতিল করে দেয়।'
        }
      },
      {
        id: 'q-block-super-functionality',
        kind: 'mcq',
        topic: 'block super in template inheritance',
        question: {
          en: 'What does calling {{ block.super }} inside a child template block accomplish?',
          bn: 'চাইল্ড টেমপ্লেটের ব্লকের ভেতরে {{ block.super }} কল করলে কী অর্জিত হয়?'
        },
        options: [
          {
            en: 'It renders the parent template original block content at that exact position rather than completely replacing it',
            bn: 'প্যারেন্ট টেমপ্লেটের আসল কনটেন্ট সম্পূর্ণ মুছে না ফেলে ঠিক ওই স্থানে প্যারেন্টের লেখাকে যুক্ত করে প্রদর্শন করে'
          },
          {
            en: 'It grants the user superuser administrative rights',
            bn: 'এটি ব্যবহারকারীকে সুপারইউজার অ্যাডমিন অধিকার দিয়ে দেয়'
          },
          {
            en: 'It restarts the WSGI server worker process',
            bn: 'এটি WSGI সার্ভার প্রসেসকে রিস্টার্ট করে'
          },
          {
            en: 'It connects the template to a Redis database',
            bn: 'এটি টেমপ্লেটকে একটি রেডিস ডাটাবেজের সাথে সংযুক্ত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of super() in object-oriented programming: it includes the parent definition.',
          bn: 'অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের super()-এর মতো: এটি প্যারেন্টের লেখাকে ধরে রাখে।'
        },
        explanation: {
          en: '{{ block.super }} renders the parent block content, allowing child templates to append or prepend content without duplicating parent markup.',
          bn: '{{ block.super }} প্যারেন্ট ব্লকের কনটেন্ট রেন্ডার করে, ফলে চাইল্ড টেমপ্লেট পুরোনো কোড না মুছে তার সাথে নতুন কোড যুক্ত করতে পারে।'
        }
      },
      {
        id: 'q-custom-template-tags-creation',
        kind: 'mcq',
        topic: 'custom template tags and filters registration',
        question: {
          en: 'Where must custom template tags and filters be placed within a Django app directory to be discoverable by {% load %}?',
          bn: '{% load %} দিয়ে লোড করার জন্য কাস্টম টেমপ্লেট ট্যাগ বা ফিল্টারগুলো অ্যাপ ফোল্ডারের ঠিক কোথায় রাখতে হয়?'
        },
        options: [
          {
            en: 'Inside a package directory named "templatetags" (containing an __init__.py file) at the root of the app',
            bn: 'অ্যাপের রুটে "templatetags" নামের একটি প্যাকেজ ফোল্ডারে (যার ভেতরে __init__.py ফাইল থাকতে হবে)'
          },
          {
            en: 'Inside the static/css directory alongside stylesheets',
            bn: 'static/css ফোল্ডারে স্টাইলশিটের পাশাপাশি'
          },
          {
            en: 'Inside a text file named tags.txt in the project root',
            bn: 'প্রজেক্টের রুটে tags.txt নামের ফাইলে'
          },
          {
            en: 'Custom template tags must be downloaded directly from PyPI',
            bn: 'কাস্টম ট্যাগ কেবল সরাসরি PyPI থেকে ডাউনলোড করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Django specifically scans for the templatetags package inside installed apps.',
          bn: 'জ্যাঙ্গো ইনস্টল করা অ্যাপের ভেতর বিশেষভাবে templatetags প্যাকেজটি খুঁজে বের করে।'
        },
        explanation: {
          en: 'Django looks for a "templatetags" package in each installed app. Custom tags registered with template.Library() in this folder are loaded with {% load %}.',
          bn: 'জ্যাঙ্গো অ্যাপের ভেতরে "templatetags" প্যাকেজ খোঁজে। এই ফোল্ডারে নিবন্ধিত কাস্টম ট্যাগগুলো টেমপ্লেটে {% load %} দিয়ে সরাসরি লোড করা যায়।'
        }
      },
      {
        id: 'q-dtl-security-by-design',
        kind: 'mcq',
        topic: 'why dtl intentionally restricts arbitrary python',
        question: {
          en: 'Why does Django Template Language intentionally restrict developers from executing arbitrary Python code (like import or function calls with arguments) in templates?',
          bn: 'জ্যাঙ্গো টেমপ্লেট ল্যাঙ্গুয়েজ কেন ইচ্ছা করেই টেমপ্লেটে যেকোনো পাইথন কোড লেখা বা আর্গুমেন্ট দিয়ে ফাংশন কল করা নিষিদ্ধ করেছে?'
        },
        options: [
          {
            en: 'To maintain a strict separation of concerns, ensuring business logic stays in Views and Models while frontend designers cannot accidentally execute insecure database operations in templates',
            bn: 'দায়িত্বের স্পষ্ট বিভাজন বজায় রাখতে, যাতে ব্যবসায়িক লজিক ভিউ ও মডেলেই সীমাবদ্ধ থাকে এবং ডিজাইনাররা ভুলে টেমপ্লেটে বিপজ্জনক কোড না চালিয়ে ফেলেন'
          },
          {
            en: 'Python does not allow functions to be called inside strings',
            bn: 'পাইথন কোনো স্ট্রিংয়ের ভেতরে ফাংশন কল করতে দেয় না'
          },
          {
            en: 'It reduces the size of the PostgreSQL database',
            bn: 'এটি পোস্টগ্রেস ডাটাবেজের আকার ছোট করে'
          },
          {
            en: 'Template execution takes up 100 percent of CPU cores',
            bn: 'টেমপ্লেট চললে সিপিইউর ১০০ শতাংশ দখল হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Separation of concerns prevents business logic from polluting presentation templates.',
          bn: 'কাজের বিভাজন ব্যবসায়িক নিয়মকে এইচটিএমএল টেমপ্লেট থেকে সম্পূর্ণ মুক্ত রাখে।'
        },
        explanation: {
          en: 'DTL was deliberately designed to prevent presentation markup from turning into spaghetti code. Business calculations belong in views and models, keeping templates purely visual.',
          bn: 'ডিটিএল ইচ্ছা করেই এমনভাবে তৈরি যাতে টেমপ্লেট জগাখিচুড়ি কোডে পরিণত না হয়। ব্যবসায়িক কাজ ভিউতে সম্পন্ন হয়, ফলে টেমপ্লেট থাকে কেবল ডিজাইনের জন্য।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'models-in-the-larder',
    title: {
      en: 'Models & ORM — QuerySets, Relational Fields & N+1 Optimization',
      bn: 'মডেল ও ওআরএম — কোয়েরিসেট, রিলেশনাল ফিল্ড ও N+1 অপটিমাইজেশন'
    }
  }
};
