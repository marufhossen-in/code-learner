import type { Lesson } from '../../../lib/types';

export const TemplatesWithJinjaLesson: Lesson = {
  slug: 'templates-with-jinja',
  tech: 'flask',
  title: {
    en: 'Jinja2 Templating — Inheritance, Filters, Macros & Escaping',
    bn: 'জিনজা২ টেমপ্লেট — ইনহেরিটেন্স, ফিল্টার, ম্যাক্রো ও এসকেপিং'
  },
  summary: {
    en: 'Flask integrates the Jinja2 template engine to separate presentation logic from server-side routing. In this lesson, you will master template inheritance (extends and block), data formatting filters, reusable component macros, automatic XSS auto-escaping, and flashed alert messages.',
    bn: 'ফ্লাস্ক সার্ভার লজিক থেকে এইচটিএমএল ডিজাইনকে আলাদা রাখতে Jinja2 টেমপ্লেট ইঞ্জিন ব্যবহার করে। এই পাঠে আপনি টেমপ্লেট ইনহেরিটেন্স (extends ও block), ডাটা ফিল্টার, পুনর্ব্যবহারযোগ্য ম্যাক্রো, স্বয়ংক্রিয় এক্সএসএস অটো-এসকেপিং এবং ফ্লাশড মেসেজ অ্যালার্ট গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'jinja-architecture-overview',
      text: {
        en: 'The Jinja2 Templating and Compilation Architecture',
        bn: 'জিনজা২ টেমপ্লেটিং ও কম্পাইলেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you render HTML pages in Flask using the template function, the Jinja2 template engine locates the file inside the templates folder and compiles it into efficient Python bytecode. Jinja2 combines inheritance frames, runs variable filters, auto-escapes dangerous HTML characters to prevent Cross-Site Scripting (XSS), and injects standard global variables.',
        bn: 'যখন আপনি ফ্লাস্কে টেমপ্লেট ফাংশন দিয়ে এইচটিএমএল পেজ রেন্ডার করেন, তখন Jinja2 ইঞ্জিন templates ফোল্ডার থেকে ফাইলটি খুঁজে বের করে দ্রুত কার্যকর পাইথন বাইটকোডে রূপান্তর করে। এটি ইনহেরিটেন্স ফ্রেম সমন্বয় করে, ফিল্টার চালায়, ক্ষতিকর ক্যারেক্টার এসকেপ করে এক্সএসএস আক্রমণ ঠেকায় এবং প্রয়োজনীয় গ্লোবাল চলকগুলো টেমপ্লেটে যুক্ত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Template Inheritance ({% extends %})',
          def: {
            en: 'The master-child layout pattern where child templates extend base.html and override specific named {% block %} sections.',
            bn: 'মাস্টার-চাইল্ড লেআউট যেখানে চাইল্ড টেমপ্লেট base.html থেকে কাঠামো ধার করে এবং কেবল নির্দিষ্ট {% block %} অংশগুলো পরিবর্তন করে।'
          }
        },
        {
          term: 'Jinja Macros ({% macro %})',
          def: {
            en: 'Reusable template functions mimicking Python functions that generate repetitive HTML snippets (like form inputs or modal dialogs).',
            bn: 'টেমপ্লেটের ভেতর পাইথন ফাংশনের মতো পুনর্ব্যবহারযোগ্য কোড ব্লক যা বারবার ব্যবহৃত এইচটিএমএল উপাদান (যেমন ফর্ম ইনপুট) তৈরি করতে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'HTML Auto-Escaping',
          def: {
            en: 'Jinja default security behavior converting sensitive HTML tokens (&, <, >, \', ") into harmless HTML entities to eliminate XSS.',
            bn: 'জিনজার ডিফল্ট নিরাপত্তা ব্যবস্থা যা বিপজ্জনক এইচটিএমএল ক্যারেক্টারগুলোকে (&, <, >) নিরাপদ এন্টিটিতে বদলে দিয়ে XSS আক্রমণ প্রতিরোধ করে।'
          }
        },
        {
          term: 'Message Flashing (flash())',
          def: {
            en: 'A session-backed notification mechanism recording feedback messages in one view and displaying them once to the user in the next rendered template.',
            bn: 'একটি সেশন-ভিত্তিক নোটিফিকেশন ব্যবস্থা যা একটি ভিউতে মেসেজ জমা রাখে এবং পরবর্তী রেন্ডার করা টেমপ্লেটে ব্যবহারকারীকে একবার প্রদর্শন করে মুছে ফেলে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'jinja-syntax-matrix',
      text: {
        en: 'Jinja2 Syntax Construct Matrix',
        bn: 'জিনজা২ সিনট্যাক্স উপাদান ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Construct Type', bn: 'সিনট্যাক্সের ধরন' },
        { en: 'Delimiter Syntax', bn: 'চিহ্ন সিনট্যাক্স' },
        { en: 'Primary Responsibility', bn: 'প্রধান দায়িত্ব' }
      ],
      rows: [
        [
          { en: 'Variable Expression', bn: 'ভেরিয়েবল এক্সপ্রেশন' },
          { en: '{{ user.username }}', bn: '{{ user.username }}' },
          { en: 'Evaluates expressions and prints escaped output to HTML stream', bn: 'এক্সপ্রেশন মূল্যায়ন করে এবং নিরাপদ এইচটিএমএল হিসেবে প্রিন্ট করে' }
        ],
        [
          { en: 'Control Tag', bn: 'কন্ট্রোল ট্যাগ' },
          { en: '{% if user %} ... {% endif %}', bn: '{% if user %} ... {% endif %}' },
          { en: 'Executes control logic, loops, template extensions, and block definitions', bn: 'শর্ত, লুপ, ইনহেরিটেন্স এবং ব্লক সংক্রান্ত লজিক চালায়' }
        ],
        [
          { en: 'Template Comment', bn: 'টেমপ্লেট কমেন্ট' },
          { en: '{# Internal developer note #}', bn: '{# Internal developer note #}' },
          { en: 'Stripped out during compilation; never appears in client HTML output', bn: 'কম্পাইলেশনের সময় বাদ যায়; ব্রাউজারে কখনো দৃশ্যমান হয় না' }
        ],
        [
          { en: 'Piped Filter', bn: 'পাইপড ফিল্টার' },
          { en: '{{ post.title|title }}', bn: '{{ post.title|title }}' },
          { en: 'Applies formatting transformations to variable values prior to output', bn: 'আউটপুট দেখানোর পূর্বে মানের ওপর টেক্সট ফরম্যাটিং প্রয়োগ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'template-rendering-code',
      text: {
        en: 'Working Jinja Variable Escaping and Message Flashing Simulation',
        bn: 'কার্যকরী জিনজা ভেরিয়েবল এসকেপিং ও মেসেজ ফ্ল্যাশিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Jinja2 Variable Interpolation and Auto-Escaping
function escapeHtml(rawString) {
  return String(rawString)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

class MockFlashQueue {
  constructor() {
    this.messages = [];
  }

  flash(message, category = 'message') {
    this.messages.push({ message, category });
  }

  getFlashedMessages() {
    const list = [...this.messages];
    this.messages = []; // Flashed messages are consumed once
    return list;
  }
}

// 1. Simulating message flashing
const sessionStore = new MockFlashQueue();
sessionStore.flash('Profile successfully saved', 'success');

// 2. Simulating auto-escaping of malicious comment
const maliciousInput = '<script>stealTokens()</script>';
const safeEscaped = escapeHtml(maliciousInput);

// 3. Consuming flashed messages in template
const alerts = sessionStore.getFlashedMessages();

console.log('Consumed alert count:', alerts.length);
// -> Consumed alert count: 1
console.log('Flashed alert message:', alerts[0].message);
// -> Flashed alert message: Profile successfully saved
console.log('Auto-escaped script tag:', safeEscaped.startsWith('&lt;script&gt;'));
// -> Auto-escaped script tag: true`,
      caption: {
        en: 'Jinja consuming 1 flashed message and neutralizing dangerous script injection',
        bn: 'জিনজা ১টি ফ্ল্যাশড মেসেজ গ্রহণ করছে এবং ক্ষতিকর স্ক্রিপ্ট ট্যাগ নিরাপদ করছে'
      }
    },
    {
      type: 'heading',
      id: 'template-inheritance-and-macros',
      text: {
        en: 'Template Inheritance Structure and Reusable Macros',
        bn: 'টেমপ্লেট ইনহেরিটেন্স কাঠামো ও রিইউজেবল ম্যাক্রো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Building scalable applications demands avoiding duplicated HTML frames. The base.html layout defines shared assets (stylesheets, navigation headers, footer scripts) with named {% block %} targets. Child templates begin with {% extends "base.html" %} and populate only the specific blocks needed, while macros encapsulate UI widgets like form inputs across views.',
        bn: 'বড় অ্যাপ্লিকেশনে বারবার একই এইচটিএমএল কোড লেখা এড়ানো জরুরি। base.html ফাইলে কমন উপাদানগুলো (স্টাইলশিট, হেডার, ফুটার) নির্দিষ্ট {% block %}-এ সাজানো থাকে। চাইল্ড টেমপ্লেটগুলো ফাইলের শুরুতে {% extends "base.html" %} লিখে কেবল দরকারি ব্লক পরিবর্তন করে, আর ম্যাক্রো পুরো সাইটে ফর্ম ইনপুটের মতো উপাদান পুনর্ব্যবহার করতে সাহায্য করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. {% extends %} on Line 1: In child templates, the extends declaration must strictly be the first line of the file.',
          bn: '১. লাইন 1 এ {% extends %}: চাইল্ড টেমপ্লেটে extends স্টেটমেন্টটি কঠোরভাবে ফাইলের প্রথম লাইনে থাকতে হবে।'
        },
        {
          en: '2. Call super() for Additions: Use {{ super() }} inside child blocks to append content rather than replacing the parent block entirely.',
          bn: '২. প্যারেন্ট কনটেন্টে super(): প্যারেন্টের আসল লেখা না মুছে সাথে নতুন কিছু যোগ করতে {{ super() }} ব্যবহার করুন।'
        },
        {
          en: '3. Never |safe User Input: Applying the |safe filter to untrusted user-submitted text directly enables Cross-Site Scripting (XSS).',
          bn: '৩. ইউজারের ডাটায় |safe নয়: ব্যবহারকারীর পাঠানো লেখায় |safe দিলে আক্রমণকারী সরাসরি ব্রাউজারে ক্ষতিকর জাভাস্ক্রিপ্ট চালাতে পারে।'
        },
        {
          en: '4. Register Custom Filters: Use @app.template_filter() to define application-wide data formatting helpers like date formatting.',
          bn: '৪. কাস্টম ফিল্টার রেজিস্ট্রেশন: তারিখ বা কারেন্সি ফরম্যাট করার সুবিধার্থে @app.template_filter() দিয়ে নিজস্ব ফিল্টার তৈরি করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-tmp-ex1',
      kind: 'mcq',
      topic: 'template inheritance placement rule in jinja2',
      question: {
        en: 'Where must the "{% extends \'base.html\' %}" tag appear in a child Jinja2 template file?',
        bn: 'চাইল্ড জিনজা২ টেমপ্লেট ফাইলে "{% extends \'base.html\' %}" ট্যাগটি ঠিক কোথায় থাকতে হবে?'
      },
      options: [
        {
          en: 'Strictly as the very first line of the child template file, before any HTML or other template tags',
          bn: 'কঠোরভাবে চাইল্ড টেমপ্লেটের একদম প্রথম লাইনে, যেকোনো এইচটিএমএল বা অন্য ট্যাগের পূর্বে'
        },
        {
          en: 'Inside the <footer> tag at the bottom of the page',
          bn: 'পেজের একদম নিচে <footer> ট্যাগের ভেতরে'
        },
        {
          en: 'Inside the <head> element between title and stylesheet links',
          bn: '<head> উপাদানের ভেতরে টাইটেল ও স্টাইলশিটের মাঝে'
        },
        {
          en: 'Anywhere in the template file; position does not matter',
          bn: 'টেমপ্লেট ফাইলের যেকোনো জায়গায়; অবস্থান কোনো প্রভাব ফেলে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The template compiler requires extends to be the first tag in the token stream.',
        bn: 'টেমপ্লেট কম্পাইলারের নিয়ম অনুযায়ী extends ট্যাগটি সবার প্রথমে থাকতে হয়।'
      },
      explanation: {
        en: 'In Jinja2, {% extends %} must be the very first tag in a child template. Preceding HTML or tags will trigger a TemplateSyntaxError.',
        bn: 'Jinja2-তে {% extends %} অবশ্যই ফাইলের প্রথম লাইনে থাকতে হবে। এর আগে কিছু লিখলে সিনট্যাক্স এরর দেখা দেয়।'
      }
    },
    {
      id: 'fl-tmp-ex2',
      kind: 'mcq',
      topic: 'security danger of jinja safe filter',
      question: {
        en: 'What severe web security risk occurs if a developer writes "{{ comment.body|safe }}" on a public comment board?',
        bn: 'পাবলিক কমেন্ট বোর্ডে কোনো ডেভেলপার "{{ comment.body|safe }}" লিখলে কোন মারাত্মক নিরাপত্তা ত্রুটি দেখা দেবে?'
      },
      options: [
        {
          en: 'Cross-Site Scripting (XSS): malicious users can submit raw <script> tags or harmful event handlers that execute arbitrary JavaScript in the browsers of visiting readers',
          bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): আক্রমণকারীরা কমেন্টে ক্ষতিকর <script> ট্যাগ পাঠিয়ে অন্য পাঠকদের ব্রাউজারে অনাকাঙ্ক্ষিত জাভাস্ক্রিপ্ট চালাতে পারবে'
        },
        {
          en: 'SQL Injection: the comment deletes tables in the relational database',
          bn: 'এসকিউএল ইনজেকশন: কমেন্টটি ডাটাবেজের টেবিল মুছে দিতে পারবে'
        },
        {
          en: 'Denial of service by deleting the Flask config dictionary',
          bn: 'ফ্লাস্কের কনফিগ ডিকশনারি মুছে দিয়ে সার্ভার অচল করা'
        },
        {
          en: 'The template compiler crashes with an OutOfMemoryError',
          bn: 'টেমপ্লেট কম্পাইলার মেমরি সংকটে ক্র্যাশ করবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The safe filter tells Jinja2 to disable automatic HTML entity escaping.',
        bn: 'safe ফিল্টার জিনজাকে বলে যে ডাটাটি নিরাপদ এবং এইচটিএমএল এসকেপ করা বন্ধ করতে।'
      },
      explanation: {
        en: 'The |safe filter instructs Jinja2 to bypass auto-escaping. When applied to untrusted user input, attackers can inject malicious JavaScript (XSS).',
        bn: '|safe দিলে জিনজা স্ট্রিংকে এসকেপ করা বন্ধ করে। ব্যবহারকারীর ইনপুটে এটি দিলে হ্যাকাররা সহজে এক্সএসএস স্ক্রিপ্ট চালাতে পারে।'
      }
    },
    {
      id: 'fl-tmp-ex3',
      kind: 'mcq',
      topic: 'flashed messages one time consumption lifecycle',
      question: {
        en: 'How does Flask message flashing ("flash()" and "get_flashed_messages()") behave across client HTTP requests?',
        bn: 'ফ্লাস্কের মেসেজ ফ্ল্যাশিং ("flash()" এবং "get_flashed_messages()") ক্লায়েন্ট রিকোয়েস্টের মাঝে কীভাবে আচরণ করে?'
      },
      options: [
        {
          en: 'flash() stores messages inside the signed client session cookie; get_flashed_messages() retrieves and immediately deletes them so each notification is displayed exactly once',
          bn: 'flash() সেশন কুকিতে মেসেজ রাখে; get_flashed_messages() সেটি পড়ে সাথে সাথে মুছে ফেলে যাতে নোটিফিকেশনটি মাত্র একবারই প্রদর্শিত হয়'
        },
        {
          en: 'Messages are permanently stored in an SQLite table on disk',
          bn: 'মেসেজগুলো ডিস্কে একটি SQLite টেবিলে চিরতরে জমা থাকে'
        },
        {
          en: 'Messages are broadcast to every user currently browsing the website',
          bn: 'মেসেজগুলো ওয়েবসাইটে উপস্থিত সব ভিজিটরের কাছে সম্প্রচারিত হয়'
        },
        {
          en: 'Flashed messages are sent directly to the server terminal console only',
          bn: 'ফ্ল্যাশড মেসেজ কেবল সার্ভারের টার্মিনাল কনসোলে প্রিন্ট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flashed messages are designed for one-time alerts consumed during the next render.',
        bn: 'ফ্ল্যাশড মেসেজ পরবর্তী পেজ রেন্ডারের সময় একবার দেখানোর পরই নিজে থেকে শেষ হয়ে যায়।'
      },
      explanation: {
        en: 'Flash messages are stored in the session cookie. Calling get_flashed_messages() pops them from the session so they do not reappear on refresh.',
        bn: 'ফ্ল্যাশ মেসেজ সেশনে জমা থাকে। get_flashed_messages() কল করলে সেগুলো সেশন থেকে মুছে যায়, ফলে রিফ্রেশে আর দ্বিতীয়বার দেখা যায় না।'
      }
    },
    {
      id: 'fl-tmp-ex4',
      kind: 'mcq',
      topic: 'registering custom jinja filters in flask',
      question: {
        en: 'How do you register a custom filter function (such as format_currency) in a Flask application?',
        bn: 'ফ্লাস্ক অ্যাপ্লিকেশনে একটি কাস্টম ফিল্টার ফাংশন (যেমন format_currency) কীভাবে নিবন্ধন করতে হয়?'
      },
      options: [
        {
          en: '@app.template_filter("currency")\ndef format_currency(value):\n    return f"${value:,.2f}"',
          bn: '@app.template_filter("currency")\ndef format_currency(value):\n    return f"${value:,.2f}"'
        },
        {
          en: 'app.register_html_converter("currency", format_currency)',
          bn: 'app.register_html_converter("currency", format_currency)'
        },
        {
          en: 'window.jinjaFilters.add("currency", format_currency)',
          bn: 'window.jinjaFilters.add("currency", format_currency)'
        },
        {
          en: 'Filters must be written in C language and compiled into shared objects',
          bn: 'ফিল্টারগুলো অবশ্যই সি ভাষায় লিখে বাইনারি অবজেক্টে রূপান্তর করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flask provides the @app.template_filter decorator for filter registration.',
        bn: 'ফ্লাস্কে ফিল্টার নিবন্ধনের জন্য @app.template_filter ডেকোরেটর দেওয়া আছে।'
      },
      explanation: {
        en: 'Using the @app.template_filter() decorator or assigning to app.jinja_env.filters["currency"] makes custom filter functions callable in Jinja templates.',
        bn: '@app.template_filter() ডেকোরেটর বা app.jinja_env.filters ডিকশনারিতে ফাংশন যুক্ত করলে টেমপ্লেটে পাইপ দিয়ে ফিল্টার ব্যবহার করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'templates-with-jinja-quiz',
    title: {
      en: 'Flask Jinja2 Templating & Architecture Quiz',
      bn: 'ফ্লাস্ক জিনজা২ টেমপ্লেটিং ও আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-super-block-jinja-function',
        kind: 'mcq',
        topic: 'super function in template block inheritance',
        question: {
          en: 'What does invoking "{{ super() }}" accomplish inside a child template block?',
          bn: 'চাইল্ড টেমপ্লেটের ব্লকের ভেতরে "{{ super() }}" কল করলে কী অর্জিত হয়?'
        },
        options: [
          {
            en: 'It renders the contents of the parent block at that exact location, allowing the child to append or prepend content without duplicating parent markup',
            bn: 'এটি ওই স্থানে প্যারেন্ট ব্লকের আসল লেখা রেন্ডার করে, ফলে প্যারেন্টের কনটেন্ট না মুছেই নতুন কিছু যোগ করা যায়'
          },
          {
            en: 'It escalates user permissions to superuser administrator',
            bn: 'এটি ইউজারের পারমিশন বাড়িয়ে সুপারইউজার অ্যাডমিন করে দেয়'
          },
          {
            en: 'It forces the web browser to reload the page from scratch',
            bn: 'এটি ব্রাউজারকে পেজ পুনরায় রিফ্রেশ করতে বাধ্য করে'
          },
          {
            en: 'It deletes all CSS styles applied to that element',
            bn: 'এটি ওই উপাদানে প্রয়োগ করা সমস্ত সিএসএস স্টাইল মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'super() includes the parent block definition into the child block.',
          bn: 'super() প্যারেন্ট ব্লকের মূল বিষয়বস্তুকে চাইল্ড ব্লকের সাথে যুক্ত করে।'
        },
        explanation: {
          en: '{{ super() }} executes the parent block code. This is useful for adding stylesheets or scripts in a child template while preserving parent defaults.',
          bn: '{{ super() }} প্যারেন্ট ব্লকের কোড চালায়। প্যারেন্টের ডিফল্ট স্ক্রিপ্ট বা স্টাইল অক্ষুণ্ণ রেখে বাড়তি কোড যোগ করতে এটি ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-jinja-macro-definition-and-import',
        kind: 'mcq',
        topic: 'defining and importing reusable macros',
        question: {
          en: 'How do you import a macro named "render_input" defined inside a template file named "_forms.html"?',
          bn: '"_forms.html" ফাইলের ভেতরে থাকা "render_input" নামের ম্যাক্রো অন্য ফাইলে কীভাবে ইম্পোর্ট করতে হয়?'
        },
        options: [
          {
            en: '{% from "_forms.html" import render_input %}',
            bn: '{% from "_forms.html" import render_input %}'
          },
          {
            en: '<script src="_forms.html#render_input"></script>',
            bn: '<script src="_forms.html#render_input"></script>'
          },
          {
            en: '@import "_forms.html.render_input";',
            bn: '@import "_forms.html.render_input";'
          },
        {
          en: '{% include "_forms.html" with render_input %}',
          bn: '{% include "_forms.html" with render_input %}'
        }
        ],
        answer: 0,
        hint: {
          en: 'Jinja macro import syntax mirrors Python "from module import function" syntax.',
          bn: 'জিনজা ম্যাক্রো ইম্পোর্ট পাইথনের "from module import function" সিনট্যাক্সের সাথে হুবহু মিল রাখে।'
        },
        explanation: {
          en: 'Jinja provides Python-like import syntax: {% from "filename" import macro_name %} or {% import "filename" as forms %}.',
          bn: 'Jinja2-তে পাইথনের মতো সিনট্যাক্স রয়েছে: {% from "filename" import macro_name %} দিয়ে ম্যাক্রো ইম্পোর্ট করে ব্যবহার করা যায়।'
        }
      },
      {
        id: 'q-global-template-context-variables',
        kind: 'mcq',
        topic: 'flask built in global variables in jinja templates',
        question: {
          en: 'Which variables are automatically available in the global context of every template rendered by Flask without explicitly passing them in render_template?',
          bn: 'render_template-এ আলাদা করে না পাঠালেও কোন চলকগুলো ফ্লাস্কের প্রতিটি টেমপ্লেটে স্বয়ংক্রিয়ভাবে পাওয়া যায়?'
        },
        options: [
          {
            en: 'config, request, session, g, and url_for',
            bn: 'config, request, session, g, এবং url_for'
          },
          {
            en: 'database_password and root_ssh_key',
            bn: 'database_password এবং root_ssh_key'
          },
          {
            en: 'only raw_html and plain_text',
            bn: 'কেবল raw_html এবং plain_text'
          },
          {
            en: 'No variables are provided; all variables must be explicitly passed',
            bn: 'কোনো চলক থাকে না; সব ভেরিয়েবল ম্যানুয়ালি পাঠাতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Flask injects request context proxies (request, session, g) and utility helpers (config, url_for).',
          bn: 'ফ্লাস্ক রিকোয়েস্ট কনটেক্সট প্রক্সি (request, session, g) এবং হেল্পার (config, url_for) নিজে থেকেই পাঠায়।'
        },
        explanation: {
          en: 'Flask configures Jinja with standard context processors providing config, request, session, g, url_for, and get_flashed_messages automatically.',
          bn: 'ফ্লাস্ক ডিফল্টভাবে প্রতিটি টেমপ্লেটে config, request, session, g, url_for এবং get_flashed_messages সরবরাহ করে রাখে।'
        }
      },
      {
        id: 'q-context-processor-custom-globals',
        kind: 'mcq',
        topic: 'injecting global variables via template_context_processor',
        question: {
          en: 'How can you make a variable (such as current_year = 2026) accessible across every single Jinja template in a Flask application?',
          bn: 'ফ্লাস্কের প্রতিটি জিনজা টেমপ্লেটে একটি চলক (যেমন current_year = ২০২৬) সহজে পাওয়ার ব্যবস্থা কীভাবে করা যায়?'
        },
        options: [
          {
            en: 'Define a function returning a dictionary and decorate it with @app.context_processor: @app.context_processor def inject_year(): return {"current_year": 2026}',
            bn: 'ডিকশনারি ফেরত দেয় এমন ফাংশনে @app.context_processor ডেকোরেটর বসিয়ে: @app.context_processor def inject_year(): return {"current_year": 2026}'
          },
          {
            en: 'Write the year into the client browser LocalStorage using JavaScript',
            bn: 'জাভাস্ক্রিপ্ট দিয়ে ব্রাউজারের লোকালস্টোরেজে সালটি লিখে রেখে'
          },
          {
            en: 'Hardcode the year in every HTML template file manually',
            bn: 'হাতে ধরে প্রতিটি এইচটিএমএল ফাইলে সাল লিখে'
          },
          {
            en: 'Save the year in the PostgreSQL database configuration file',
            bn: 'পোস্টগ্রেস ডাটাবেজের কনফিগারেশন ফাইলে সালটি লিখে'
          }
        ],
        answer: 0,
        hint: {
          en: '@app.context_processor injects key-value pairs into the global template namespace.',
          bn: '@app.context_processor গ্লোবাল টেমপ্লেটে সরাসরি কি-ভ্যালু পেয়ার যুক্ত করে।'
        },
        explanation: {
          en: 'Context processors are functions that return a dictionary of keys and values merged automatically into the template context on every render.',
          bn: 'কনটেক্সট প্রসেসর ফাংশন একটি ডিকশনারি রিটার্ন করে যা প্রতিটি টেমপ্লেট রেন্ডার হওয়ার সময় স্বয়ংক্রিয়ভাবে যুক্ত হয়ে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'blueprints-and-the-factory',
    title: {
      en: 'Blueprints & Application Factory — Modular Routes & create_app',
      bn: 'ব্লুপ্রিন্ট ও অ্যাপ্লিকেশন ফ্যাক্টরি — মডিউলার রুট ও create_app'
    }
  }
};
