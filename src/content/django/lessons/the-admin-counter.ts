import type { Lesson } from '../../../lib/types';

export const TheAdminCounterLesson: Lesson = {
  slug: 'the-admin-counter',
  tech: 'django',
  title: {
    en: 'Django Admin — ModelAdmin, List Displays, Search, Filters & Inlines',
    bn: 'জ্যাঙ্গো অ্যাডমিন — মডেলঅ্যাডমিন, লিস্ট ডিসপ্লে, সার্চ, ফিল্টার ও ইনলাইন'
  },
  summary: {
    en: 'Django Admin provides an automatic, production-ready administrative back-office generated straight from model definitions. In this lesson, you will master ModelAdmin customization (list_display, search_fields, list_filter), TabularInline and StackedInline editing, custom bulk admin actions, and administrative URL hardening.',
    bn: 'জ্যাঙ্গো অ্যাডমিন সরাসরি মডেল সংজ্ঞা থেকে একটি স্বয়ংক্রিয়, প্রোডাকশন-রেডি অ্যাডমিনিস্ট্রেটিভ ব্যাক-অফিস ইন্টারফেস তৈরি করে। এই পাঠে আপনি ModelAdmin কাস্টমাইজেশন (list_display, search_fields, list_filter), TabularInline ও StackedInline এডিটিং, কাস্টম বাল্ক অ্যাকশন এবং অ্যাডমিন ইউআরএল সিকিউরিটি শক্ত করা গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'django-admin-architecture',
      text: {
        en: 'The Django Admin Back-Office Architecture',
        bn: 'জ্যাঙ্গো অ্যাডমিন ব্যাক-অফিস আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build internal management tools, Django Admin reads model metadata to construct a secure web portal for content administrators. By inheriting from admin.ModelAdmin and registering models with the admin site, teams get full Create, Read, Update, and Delete (CRUD) capabilities without writing manual HTML forms or boilerplate endpoints.',
        bn: 'যখন আপনি অভ্যন্তরীণ ব্যবস্থাপনা টুল তৈরি করেন, তখন জ্যাঙ্গো অ্যাডমিন মডেল মেটাডাটা পড়ে অ্যাডমিনিস্ট্রেটরদের জন্য একটি সুরক্ষিত ওয়েব পোর্টাল তৈরি করে। admin.ModelAdmin থেকে ইনহেরিট করে মডেল রেজিস্টার করলেই আলাদা কোনো এইচটিএমএল ফর্ম বা অতিরিক্ত এন্ডপয়েন্ট না লিখেই সম্পূর্ণ ক্রাড (CRUD) সুবিধা পাওয়া যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ModelAdmin',
          def: {
            en: 'The configuration class defining the presentation, search behavior, filtering, and editing rules of a model inside the Django admin interface.',
            bn: 'এমন একটি কনফিগারেশন ক্লাস যা জ্যাঙ্গো অ্যাডমিন প্যানেলে মডেলের প্রদর্শন, সার্চ ফিল্টার ও এডিটের সমস্ত নিয়ম নির্ধারণ করে।'
          }
        },
        {
          term: 'TabularInline',
          def: {
            en: 'An admin layout that embeds child model records (e.g. order line items) as a compact grid inside the parent model edit page.',
            bn: 'একটি লেআউট যা প্যারেন্ট মডেল পেজের ভেতরেই চাইল্ড মডেলের রেকর্ডগুলোকে (যেমন অর্ডারের পণ্য তালিকা) টেবিল আকারে এডিট করতে দেয়।'
          }
        },
        {
          term: 'Admin Actions',
          def: {
            en: 'Custom Python functions invoked on selected QuerySets from the admin list view to perform bulk updates across multiple rows.',
            bn: 'কাস্টম পাইথন ফাংশন যা অ্যাডমিন লিস্ট ভিউ থেকে চিহ্নিত একাধিক রোতে একসাথে বাল্ক আপডেট পরিচালনা করতে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'list_filter & search_fields',
          def: {
            en: 'Declarative ModelAdmin attributes providing an instant faceted sidebar and a full-text search bar matching specified database columns.',
            bn: 'অ্যাডমিনের ফিল্ড যা তাৎক্ষণিক সাইডবার ফিল্টার এবং নির্দিষ্ট কলামের ওপর টেক্সট সার্চ বার তৈরি করে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'modeladmin-options-matrix',
      text: {
        en: 'Key ModelAdmin Customization Options Matrix',
        bn: 'প্রধান মডেলঅ্যাডমিন কাস্টমাইজেশন অপশন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Option', bn: 'অপশন' },
        { en: 'Purpose', bn: 'উদ্দেশ্য' },
        { en: 'Typical Value Example', bn: 'সাধারণ উদাহরণ' }
      ],
      rows: [
        [
          { en: 'list_display', bn: 'list_display' },
          { en: 'Controls which model columns appear as table headers', bn: 'টেবিলে কোন কোন কলাম কলাম-হেডার হিসেবে দৃশ্যমান হবে' },
          { en: '("title", "author", "status", "created_at")', bn: '("title", "author", "status", "created_at")' }
        ],
        [
          { en: 'search_fields', bn: 'search_fields' },
          { en: 'Enables search bar querying specified columns and relations', bn: 'সার্চ বার চালু করে নির্দিষ্ট কলাম ও সম্পর্কিত টেবিলে খোঁজে' },
          { en: '("title", "body", "author__username")', bn: '("title", "body", "author__username")' }
        ],
        [
          { en: 'list_filter', bn: 'list_filter' },
          { en: 'Adds a filtering sidebar for fast faceted querying', bn: 'দ্রুত ক্যাটাগরিভিত্তিক ডাটা আলাদা করতে সাইডবার ফিল্টার যোগ করে' },
          { en: '("status", "is_featured", "created_at")', bn: '("status", "is_featured", "created_at")' }
        ],
        [
          { en: 'prepopulated_fields', bn: 'prepopulated_fields' },
          { en: 'Auto-generates slug values in real time as title is typed', bn: 'টাইটেল লেখার সাথে সাথে জাভাস্ক্রিপ্ট দিয়ে স্লাগ ফিল্ড পূরণ করে' },
          { en: '{"slug": ("title",)}', bn: '{"slug": ("title",)}' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'admin-action-code',
      text: {
        en: 'Working Bulk Admin Action and List Simulation',
        bn: 'কার্যকরী বাল্ক অ্যাডমিন অ্যাকশন ও লিস্ট সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django Admin Bulk Action Execution
class MockPost {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}

// 1. Initial table state in admin
const dataset = [
  new MockPost(1, 'Django MTV Overview', 'draft'),
  new MockPost(2, 'URL Routing Rules', 'draft'),
  new MockPost(3, 'DTL Template Engine', 'draft')
];

// 2. Custom ModelAdmin bulk action
function publishSelectedPosts(posts) {
  for (const post of posts) {
    post.status = 'published';
  }
  return posts.length;
}

const selectedPosts = dataset.slice(0, 2); // Admin ticks 2 rows
const updatedCount = publishSelectedPosts(selectedPosts);

console.log('Admin bulk updated records count:', updatedCount);
// -> Admin bulk updated records count: 2
console.log('Post 1 new status:', dataset[0].status);
// -> Post 1 new status: published
console.log('Post 3 untouched status:', dataset[2].status);
// -> Post 3 untouched status: draft`,
      caption: {
        en: 'Admin action bulk publishing 2 selected posts while leaving remaining as draft',
        bn: 'অ্যাডমিন অ্যাকশনে নির্বাচিত ২টি পোস্ট প্রকাশিত হলো এবং বাকিটি ড্রাফট রয়ে গেল'
      }
    },
    {
      type: 'heading',
      id: 'admin-security-and-best-practices',
      text: {
        en: 'Admin Hardening and Production Guidelines',
        bn: 'অ্যাডমিন সিকিউরিটি ও প্রোডাকশন নীতিমালা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because Django Admin grants elevated privileges to manage application records, exposing it directly at "/admin/" makes it a frequent target for credential stuffing and brute-force attacks. In production, change the admin URL endpoint to an unguessable path, require Multi-Factor Authentication (MFA), and use readonly_fields to protect sensitive financial records from accidental alteration.',
        bn: 'যেহেতু জ্যাঙ্গো অ্যাডমিন ডেটাবেজ পরিচালনার ক্ষেত্রে উচ্চ ক্ষমতা প্রদান করে, তাই একে সরাসরি ডিফল্ট "/admin/" রুটে রাখা ব্রুট-ফোর্স আক্রমণের ঝুঁকি বাড়ায়। প্রোডাকশনে অ্যাডমিনের ইউআরএল রুটটি গোপন রাখুন, মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA) চালু করুন এবং ভুল পরিবর্তন এড়াতে সংবেদনশীল ফিল্ডে readonly_fields ব্যবহার করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Change Admin Route: Avoid default /admin/; use a custom URL prefix like /secure-portal/ to deflect automated bots.',
          bn: '১. অ্যাডমিন রুট পরিবর্তন: ডিফল্ট /admin/ রুট বদলে /secure-portal/ ব্যবহার করে স্বয়ংক্রিয় আক্রমণ রোধ করুন।'
        },
        {
          en: '2. Enforce Staff vs Superuser: Reserve is_superuser for system architects; give content managers is_staff with fine-grained group permissions.',
          bn: '২. স্টাফ ও সুপারইউজার পৃথকীকরণ: সবাইকে সুপারইউজার না দিয়ে কর্মীদের is_staff এবং নির্দিষ্ট গ্রুপের সীমিত পারমিশন দিন।'
        },
        {
          en: '3. Optimize with list_select_related: Use list_select_related = True on ModelAdmin to prevent N+1 query loops in the admin list view.',
          bn: '৩. list_select_related ব্যবহার: অ্যাডমিন তালিকা পেজে N+1 কোয়েরি সমস্যা রোধ করতে list_select_related ব্যবহার করুন।'
        },
        {
          en: '4. Readonly for Audit Fields: Add created_at and updated_at to readonly_fields so administrative staff cannot alter audit histories.',
          bn: '৪. অডিট ফিল্ডে রিড-অনলি: created_at ও updated_at-এর মতো হিস্ট্রি ফিল্ডগুলো readonly_fields তালিকায় রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-adm-ex1',
      kind: 'mcq',
      topic: 'registering models with admin decorators',
      question: {
        en: 'Which modern syntax correctly registers a Post model with a custom PostAdmin class in Django?',
        bn: 'জ্যাঙ্গোতে কাস্টম PostAdmin ক্লাস সহ Post মডেল রেজিস্টার করার আধুনিক সিনট্যাক্স কোনটি?'
      },
      options: [
        {
          en: '@admin.register(Post)\nclass PostAdmin(admin.ModelAdmin):\n    list_display = ("title", "status")',
          bn: '@admin.register(Post)\nclass PostAdmin(admin.ModelAdmin):\n    list_display = ("title", "status")'
        },
        {
          en: 'admin.create_table(Post, PostAdmin)',
          bn: 'admin.create_table(Post, PostAdmin)'
        },
        {
          en: 'class PostAdmin(Post.AdminView): pass',
          bn: 'class PostAdmin(Post.AdminView): pass'
        },
        {
          en: 'window.djangoAdmin.register(Post)',
          bn: 'window.djangoAdmin.register(Post)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The @admin.register decorator replaces manual admin.site.register() calls.',
        bn: '@admin.register ডেকোরেটরটি সরাসরি ক্লাসের ওপর বসে মডেল রেজিস্টার করে।'
      },
      explanation: {
        en: 'The @admin.register(Model) decorator is the recommended, clean way to pair a Model with its ModelAdmin class.',
        bn: '@admin.register(Model) ডেকোরেটর মডেলের সাথে সংশ্লিষ্ট ModelAdmin ক্লাসকে পরিচ্ছন্নভাবে সংযুক্ত করে।'
      }
    },
    {
      id: 'dj-adm-ex2',
      kind: 'mcq',
      topic: 'difference between tabularinline and stackedinline',
      question: {
        en: 'What is the visual difference between TabularInline and StackedInline when displaying related child records?',
        bn: 'সম্পর্কিত চাইল্ড রেকর্ড প্রদর্শনের ক্ষেত্রে TabularInline এবং StackedInline-এর মধ্যে ভিজ্যুয়াল পার্থক্য কী?'
      },
      options: [
        {
          en: 'TabularInline arranges child fields horizontally in compact table rows, whereas StackedInline renders each child record as a full vertical stack of input fields',
          bn: 'TabularInline চাইল্ড রেকর্ডগুলোকে অনুভূমিকভাবে টেবিলের মতো সাজায়, আর StackedInline প্রতিটি রেকর্ডকে নিচে নিচে উল্লম্বভাবে প্রদর্শন করে'
        },
        {
          en: 'TabularInline is for SQL, while StackedInline is for NoSQL databases',
          bn: 'TabularInline এসকিউএলের জন্য, আর StackedInline নো-এসকিউএল ডাটাবেজের জন্য'
        },
        {
          en: 'StackedInline deletes parent records when children are saved',
          bn: 'StackedInline চাইল্ড সেভ হলে প্যারেন্ট রেকর্ড মুছে ফেলে'
        },
        {
          en: 'TabularInline only supports single-character text fields',
          bn: 'TabularInline কেবল এক অক্ষরের টেক্সট ফিল্ড সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tabular displays rows like a spreadsheet; Stacked stacks field blocks on top of each other.',
        bn: 'Tabular স্প্রেডশীটের মতো রো আকারে সাজায়; আর Stacked একটার নিচে আরেকটা ব্লক আকারে দেখায়।'
      },
      explanation: {
        en: 'TabularInline uses a compact horizontal grid ideal for items with few fields. StackedInline uses a vertical stack suitable for rich models with many fields.',
        bn: 'কম ফিল্ড থাকলে TabularInline টেবিল আকারে খুব সুন্দরভাবে দেখায়, আর বেশি ফিল্ড থাকলে StackedInline উল্লম্বভাবে সাজিয়ে রাখে।'
      }
    },
    {
      id: 'dj-adm-ex3',
      kind: 'mcq',
      topic: 'preventing n plus 1 in django admin list view',
      question: {
        en: 'When an admin list_display includes a ForeignKey field (such as "author"), how do you prevent N+1 database queries on that page?',
        bn: 'যখন অ্যাডমিন list_display-তে ForeignKey ফিল্ড (যেমন "author") থাকে, তখন ওই পেজে N+1 কোয়েরি সমস্যা কীভাবে রোধ করবেন?'
      },
      options: [
        {
          en: 'Set list_select_related = ("author",) or list_select_related = True on the ModelAdmin class',
          bn: 'ModelAdmin ক্লাসে list_select_related = ("author",) অথবা list_select_related = True নির্ধারণ করে'
        },
        {
          en: 'Delete the database indexes on the foreign key column',
          bn: 'ফরেন কি কলামের ডাটাবেজ ইনডেক্স মুছে ফেলে'
        },
        {
          en: 'Set debug = True in production settings',
          bn: 'প্রোডাকশন সেটিংসে debug = True দিয়ে'
        },
        {
          en: 'Disable the admin interface entirely',
          bn: 'অ্যাডমিন ইন্টারফেস পুরোপুরি বন্ধ করে দিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'list_select_related instructs Django admin to join ForeignKey tables in the initial query.',
        bn: 'list_select_related জ্যাঙ্গো অ্যাডমিনকে প্রাথমিক কুয়েরিতেই ফরেন কি টেবিল জয়েন করতে নির্দেশ দেয়।'
      },
      explanation: {
        en: 'list_select_related causes the change list QuerySet to use select_related(), fetching foreign key relations in a single SQL query and avoiding N+1 roundtrips.',
        bn: 'list_select_related অ্যাডমিন কুয়েরিসেটে select_related যুক্ত করে, যা একক কুয়েরিতে ফরেন কি তুলে এনে N+1 সমস্যা দূর করে।'
      }
    },
    {
      id: 'dj-adm-ex4',
      kind: 'mcq',
      topic: 'custom admin action signature',
      question: {
        en: 'What are the required parameters for a custom Django ModelAdmin action function?',
        bn: 'একটি কাস্টম জ্যাঙ্গো ModelAdmin অ্যাকশন ফাংশনের জন্য প্রয়োজনীয় প্যারামিটারগুলো কী কী?'
      },
      options: [
        {
          en: 'modeladmin (or self if a method), request, and queryset',
          bn: 'modeladmin (অথবা মেথড হলে self), request, এবং queryset'
        },
        {
          en: 'only database_password and ip_address',
          bn: 'কেবল database_password এবং ip_address'
        },
        {
          en: 'file_path and line_number',
          bn: 'file_path এবং line_number'
        },
        {
          en: 'html_template and stylesheet_url',
          bn: 'html_template এবং stylesheet_url'
        }
      ],
      answer: 0,
      hint: {
        en: 'An action receives the ModelAdmin instance, current HttpRequest, and the selected QuerySet.',
        bn: 'একটি অ্যাকশন ModelAdmin অবজেক্ট, বর্তমান HttpRequest এবং নির্বাচিত QuerySet গ্রহণ করে।'
      },
      explanation: {
        en: 'A custom action function takes (modeladmin, request, queryset). The queryset contains only the records selected with checkboxes by the administrator.',
        bn: 'কাস্টম অ্যাকশন ফাংশন (modeladmin, request, queryset) গ্রহণ করে। কুয়েরিসেটে কেবল অ্যাডমিনের টিক দেওয়া রেকর্ডগুলো উপস্থিত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'the-admin-counter-quiz',
    title: {
      en: 'Django Admin Customization & Security Quiz',
      bn: 'জ্যাঙ্গো অ্যাডমিন কাস্টমাইজেশন ও সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'q-prepopulated-fields-behavior',
        kind: 'mcq',
        topic: 'prepopulated_fields slug creation',
        question: {
          en: 'How does prepopulated_fields = {"slug": ("title",)} function inside the Django admin edit form?',
          bn: 'জ্যাঙ্গো অ্যাডমিন এডিট ফর্মে prepopulated_fields = {"slug": ("title",)} কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'It uses embedded JavaScript in the browser to automatically convert the typed title into a lowercase, hyphenated URL slug in real time until manually modified',
            bn: 'এটি ব্রাউজারে জাভাস্ক্রিপ্টের মাধ্যমে টাইটেল লেখার সাথে সাথেই স্বয়ংক্রিয়ভাবে ছোট হাতের অক্ষর ও হাইফেনযুক্ত স্লাগ তৈরি করে'
          },
          {
            en: 'It executes a background cron job at midnight to populate slugs',
            bn: 'এটি প্রতি মধ্যরাতে একটি ব্যাকগ্রাউন্ড ক্রন জব চালিয়ে স্লাগ তৈরি করে'
          },
          {
            en: 'It generates slugs using an external third-party API call',
            bn: 'এটি একটি তৃতীয় পক্ষের বাহ্যিক এপিআই কল করে স্লাগ তৈরি করে'
          },
          {
            en: 'It encrypts the post title with MD5 hashing',
            bn: 'এটি পোস্টের টাইটেলকে MD5 হ্যাশ দিয়ে এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It provides real-time client-side slug formatting as the author types.',
          bn: 'টাইপ করার সময় এটি রিয়েল-টাইমে ব্রাউজারে স্বয়ংক্রিয় স্লাগ তৈরি করে দেয়।'
        },
        explanation: {
          en: 'Django admin includes a small JavaScript snippet that mirrors input from the source field (title) into the target field (slug), slugifying characters as you type.',
          bn: 'জ্যাঙ্গো অ্যাডমিন জাভাস্ক্রিপ্ট ব্যবহার করে টাইটেল থেকে সরাসরি স্লাগ ফিল্ডে হাইফেনযুক্ত টেক্সট রূপান্তর করে দেয়।'
        }
      },
      {
        id: 'q-django-admin-honeypot-technique',
        kind: 'mcq',
        topic: 'defending admin from credential stuffing',
        question: {
          en: 'Why do production Django applications often install a honeypot package (like django-admin-honeypot) at "/admin/" while moving the real admin to a secret path?',
          bn: 'প্রোডাকশন জ্যাঙ্গো প্রজেক্টে আসল অ্যাডমিনকে গোপন পাথে রেখে ডিফল্ট "/admin/" রুটে কেন হানিপট প্যাকেজ বসানো হয়?'
        },
        options: [
          {
            en: 'It traps automated vulnerability scanners and brute-force bots, recording their IP addresses and notifying security teams without granting access to real systems',
            bn: 'এটি স্বয়ংক্রিয় বট ও হ্যাকারদের ফাঁদে ফেলে তাদের আইপি অ্যাড্রেস লগ করে এবং মূল সিস্টেমে ঢুকতে না দিয়ে সিকিউরিটি টিমকে সতর্ক করে'
          },
          {
            en: 'It makes the real admin panel load 10 times faster',
            bn: 'এটি আসল অ্যাডমিন প্যানেলের লোডিং স্পিড ১০ গুণ বাড়িয়ে দেয়'
          },
          {
            en: 'It compresses the SQLite database into gzip format',
            bn: 'এটি SQLite ডাটাবেজকে gzip ফরম্যাটে সংকুচিত করে'
          },
          {
            en: 'It allows visitors to edit content without logging in',
            bn: 'এটি সাধারণ ভিজিটরদের লগইন ছাড়াই কনটেন্ট এডিট করতে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Honeypots lure attackers to a fake login page to detect intrusion attempts.',
          bn: 'হানিপট আক্রমণকারীদের একটি নকল লগইন পেজে আটকে অনুপ্রবেশ শনাক্ত করে।'
        },
        explanation: {
          en: 'A honeypot presents a dummy login page at the obvious /admin/ URL. Attempts to log in are logged for forensic security analysis while the real admin stays safe at an unguessable URL.',
          bn: 'হানিপট /admin/-এ নকল পেজ দেখিয়ে আক্রমণকারীর আইপি ও পাসওয়ার্ডের চেষ্টা লগ করে রাখে, আর আসল অ্যাডমিন নিরাপদ গোপন রুটে সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'q-readonly-fields-benefit',
        kind: 'mcq',
        topic: 'readonly fields prevent tampering',
        question: {
          en: 'What is the security and data integrity benefit of adding audit timestamps (e.g. created_at) to readonly_fields in ModelAdmin?',
          bn: 'ModelAdmin-এ অডিট টাইমস্ট্যাম্প (যেমন created_at) readonly_fields-এ রাখার নিরাপত্তা ও ডাটা ইন্টিগ্রিটি সুবিধা কী?'
        },
        options: [
          {
            en: 'It displays the value as plain text in the form and strictly refuses to accept incoming POST modifications, preserving immutable audit trails',
            bn: 'এটি ফর্মে মানটিকে সাধারণ টেক্সট হিসেবে দেখায় এবং POST রিকোয়েস্টে কোনো পরিবর্তন গ্রহণ করে না, ফলে অডিট হিস্ট্রি অপরিবর্তিত থাকে'
          },
          {
            en: 'It deletes the timestamp column from the database schema',
            bn: 'এটি ডাটাবেজ টেবিল থেকে টাইমস্ট্যাম্পের কলামটি মুছে ফেলে'
          },
          {
            en: 'It converts the timestamp from UTC to local browser timezone on the server',
            bn: 'এটি টাইমস্ট্যাম্পকে ইউটিসি থেকে ব্রাউজারের টাইমজোনে রূপান্তর করে'
          },
          {
            en: 'It grants edit rights only to guest users',
            bn: 'এটি কেবল অতিথি ব্যবহারকারীদের এডিট করার অনুমতি দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Readonly fields are excluded from HTML input elements, preventing POST tampering.',
          bn: 'রিড-অনলি ফিল্ডগুলো ইনপুট ফিল্ড হিসেবে থাকে না, ফলে POST রিকোয়েস্টে পরিবর্তন করা অসম্ভব হয়।'
        },
        explanation: {
          en: 'Listing a field in readonly_fields renders it as uneditable text and excludes it from the saved form data, protecting sensitive metadata from unauthorized alterations.',
          bn: 'readonly_fields-এ থাকা ফিল্ডগুলো এডিট করা যায় না এবং সেভ করার সময় বাদ রাখা হয়, ফলে অডিট তথ্য সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'q-superuser-vs-staff-distinction',
        kind: 'mcq',
        topic: 'is_staff vs is_superuser flags',
        question: {
          en: 'In Django built-in auth User model, what is the exact difference between is_staff=True and is_superuser=True?',
          bn: 'জ্যাঙ্গো বিল্ট-ইন অথ ইউজার মডেলে is_staff=True এবং is_superuser=True-এর মধ্যে সুনির্দিষ্ট পার্থক্য কী?'
        },
        options: [
          {
            en: 'is_staff permits access to the admin site URL; is_superuser automatically grants every permission without needing specific group or model role assignments',
            bn: 'is_staff ব্যবহারকারীকে অ্যাডমিন সাইটে ঢোকার অনুমতি দেয়; আর is_superuser আলাদা পারমিশন ছাড়াই প্রতিটি কাজের সর্বময় ক্ষমতা প্রদান করে'
          },
          {
            en: 'is_superuser can only access SQLite, while is_staff can access PostgreSQL',
            bn: 'is_superuser কেবল SQLite অ্যাক্সেস করতে পারে, আর is_staff পোস্টগ্রেস অ্যাক্সেস করতে পারে'
          },
          {
            en: 'is_staff users are deleted automatically after 30 days',
            bn: 'is_staff ইউজাররা ৩০ দিন পর নিজে থেকেই মুছে যায়'
          },
          {
            en: 'There is no difference between the two boolean flags',
            bn: 'এই দুটি বুলিয়ান ফ্ল্যাগের মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'is_staff opens the front door; is_superuser bypasses all permission checks.',
          bn: 'is_staff অ্যাডমিন প্যানেলে ঢুকতে দেয়; আর is_superuser সব পারমিশন বাইপাস করে পুরো সাইটের কর্তৃত্ব পায়।'
        },
        explanation: {
          en: 'is_staff is a boolean determining whether a user can log into the admin interface. is_superuser grants all permissions implicitly without checking individual permissions.',
          bn: 'is_staff কেবল অ্যাডমিন প্যানেলে লগইন করার অনুমতি দেয়। আর is_superuser কোনো পারমিশন পরীক্ষা ছাড়াই সিস্টেমের সব কাজ করার পূর্ণ ক্ষমতা পায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'forms-and-the-door',
    title: {
      en: 'Django Forms — ModelForms, Validation, Widgets & CSRF Defense',
      bn: 'জ্যাঙ্গো ফর্ম — মডেলফর্ম, ভ্যালিডেশন, উইজেট ও সিএসআরএফ প্রতিরোধ'
    }
  }
};
