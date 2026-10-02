import type { Lesson } from '../../../lib/types';

export const FormsAndTheDoorLesson: Lesson = {
  slug: 'forms-and-the-door',
  tech: 'django',
  title: {
    en: 'Django Forms — ModelForms, Validation, Widgets & CSRF Defense',
    bn: 'জ্যাঙ্গো ফর্ম — মডেলফর্ম, ভ্যালিডেশন, উইজেট ও সিএসআরএফ প্রতিরোধ'
  },
  summary: {
    en: 'Django forms serve as the primary security gateway for processing, validating, and sanitizing user submissions. In this lesson, you will master standard forms, ModelForms, field widgets, the form lifecycle (unbound vs bound), multi-stage validation with clean_<field>() and clean(), and bulletproof CSRF protection.',
    bn: 'জ্যাঙ্গো ফর্ম ব্যবহারকারীর পাঠানো ইনপুট প্রক্রিয়াকরণ, যাচাই এবং পরিশোধন করার প্রধান নিরাপত্তা প্রাচীর হিসেবে কাজ করে। এই পাঠে আপনি স্ট্যান্ডার্ড ফর্ম, মডেলফর্ম, ফিল্ড উইজেট, ফর্মের জীবনচক্র (আনবাউন্ড বনাম বাউন্ড), clean_<field>() ও clean() দিয়ে বহু-স্তরের ভ্যালিডেশন এবং নিরাপদ সিএসআরএফ সুরক্ষা গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'django-forms-architecture',
      text: {
        en: 'The Django Form Processing and Security Architecture',
        bn: 'জ্যাঙ্গো ফর্ম প্রসেসিং ও সিকিউরিটি আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you accept data from end users, raw HTTP form submissions cannot be trusted. Django forms act as an armored gateway: they parse incoming strings, coerce them into native Python types, run comprehensive field and cross-field validators, populate cleaned_data upon success, or return localized error messages on failure.',
        bn: 'যখন আপনি ব্যবহারকারীদের কাছ থেকে ডাটা গ্রহণ করেন, তখন সরাসরি কাঁচা ফর্মের ডাটাকে বিশ্বাস করা ঝুঁকিপূর্ণ। জ্যাঙ্গো ফর্ম একটি সুরক্ষিত ফটকের মতো কাজ করে: এটি স্ট্রিং ডাটা পড়ে পাইথন টাইপে রূপান্তর করে, ফিল্ড ও ক্রস-ফিল্ড ভ্যালিডেশন চালায়, সফল হলে cleaned_data প্রদান করে অথবা ব্যর্থ হলে স্পষ্ট এরর মেসেজ ফেরত পাঠায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ModelForm',
          def: {
            en: 'A helper class that inspects a Django Model definition and automatically builds matching form fields, validation rules, and save() logic.',
            bn: 'একটি বিশেষ ক্লাস যা জ্যাঙ্গো মডেলের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে উপযুক্ত ফর্ম ফিল্ড, ভ্যালিডেশন নিয়ম এবং save() লজিক তৈরি করে দেয়।'
          }
        },
        {
          term: 'cleaned_data',
          def: {
            en: 'The dictionary of thoroughly validated, type-coerced, and sanitized values available on a form instance only after is_valid() returns True.',
            bn: 'সম্পূর্ণরূপে যাচাইকৃত ও পাইথন টাইপে রূপান্তরিত ডাটার ডিকশনারি, যা ফর্মে কেবল is_valid() সফল হওয়ার পরই পাওয়া যায়।'
          }
        },
        {
          term: 'clean_<field>() & clean()',
          def: {
            en: 'Custom validation hooks: clean_<field>() handles single-attribute sanitization, while clean() validates multi-field business rules.',
            bn: 'কাস্টম ভ্যালিডেশন মেথড: clean_<field>() একক ফিল্ড যাচাই করে, আর clean() একাধিক ফিল্ডের পারস্পরিক নিয়ম (যেমন পাসওয়ার্ড নিশ্চিতকরণ) মেলায়।'
          }
        },
        {
          term: 'Form Widgets',
          def: {
            en: 'Django presentation classes (TextInput, PasswordInput, Select) that determine the exact HTML element rendering and CSS classes.',
            bn: 'জ্যাঙ্গো প্রেজেন্টেশন ক্লাস (TextInput, PasswordInput, Select) যা এইচটিএমএল ইনপুট ট্যাগ এবং সিএসএস ক্লাস রেন্ডার করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'form-lifecycle-matrix',
      text: {
        en: 'Django Form Lifecycle State Matrix',
        bn: 'জ্যাঙ্গো ফর্মের জীবনচক্র ও অবস্থা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Lifecycle Stage', bn: 'জীবনচক্রের পর্যায়' },
        { en: 'Code Invocation', bn: 'কোড কল' },
        { en: 'State & Internal Behavior', bn: 'অবস্থা ও অভ্যন্তরীণ আচরণ' }
      ],
      rows: [
        [
          { en: 'Unbound Form (GET)', bn: 'আনবাউন্ড ফর্ম (GET)' },
          { en: 'form = ArticleForm()', bn: 'form = ArticleForm()' },
          { en: 'is_bound is False; renders blank fields or initial defaults with no errors', bn: 'is_bound এর মান False; খালি ইনপুট বা ডিফল্ট মান সহ পেজ রেন্ডার করে' }
        ],
        [
          { en: 'Bound Form (POST)', bn: 'বাউন্ড ফর্ম (POST)' },
          { en: 'form = ArticleForm(request.POST)', bn: 'form = ArticleForm(request.POST)' },
          { en: 'is_bound is True; ties raw input data dictionary to the form instance', bn: 'is_bound এর মান True; রিকোয়েস্টের ডাটা ফর্ম অবজেক্টের সাথে যুক্ত হয়' }
        ],
        [
          { en: 'Validation Trigger', bn: 'ভ্যালিডেশন শুরু' },
          { en: 'if form.is_valid():', bn: 'if form.is_valid():' },
          { en: 'Executes to_python, field validators, clean_<field>, and form clean()', bn: 'to_python, ফিল্ড ভ্যালিডেটর, clean_<field> এবং clean() মেথড চালায়' }
        ],
        [
          { en: 'Persistence (ModelForm)', bn: 'সংরক্ষণ (ModelForm)' },
          { en: 'instance = form.save()', bn: 'instance = form.save()' },
          { en: 'Writes validated fields directly into the database table', bn: 'যাচাইকৃত ডাটা সরাসরি ডাটাবেজ টেবিলে সেভ করে মডেল অবজেক্ট ফেরত দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'form-validation-code',
      text: {
        en: 'Working Form Validation and cleaned_data Simulation',
        bn: 'কার্যকরী ফর্ম ভ্যালিডেশন ও cleaned_data সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django Form Validation Pipeline
class MockUserRegistrationForm {
  constructor(data) {
    this.data = data;
    this.errors = {};
    this.cleaned_data = {};
  }

  is_valid() {
    this.errors = {};
    this.cleaned_data = {};

    // 1. Single field validation (clean_email)
    const email = (this.data.email || '').trim().toLowerCase();
    if (!email.includes('@')) {
      this.errors.email = ['Enter a valid email address.'];
    } else {
      this.cleaned_data.email = email;
    }

    // 2. Cross-field validation (clean)
    const password = this.data.password || '';
    const confirm = this.data.confirm_password || '';
    if (password.length < 8) {
      this.errors.password = ['Password must be at least 8 characters.'];
    } else if (password !== confirm) {
      this.errors.confirm_password = ['Passwords do not match.'];
    } else {
      this.cleaned_data.password = password;
    }

    return Object.keys(this.errors).length === 0;
  }
}

const form = new MockUserRegistrationForm({
  email: '  ALEX@EXAMPLE.COM  ',
  password: 'supersecretpass',
  confirm_password: 'supersecretpass'
});

const isValid = form.is_valid();
console.log('Form validation result:', isValid);
// -> Form validation result: true
console.log('Sanitized lowercase email in cleaned_data:', form.cleaned_data.email);
// -> Sanitized lowercase email in cleaned_data: alex@example.com`,
      caption: {
        en: 'Form cleans and lowercases email to alex@example.com with valid status true',
        bn: 'ফর্ম ইমেইলকে alex@example.com এ রূপান্তর করে true ভ্যালিডেশন স্ট্যাটাস দিচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'modelform-and-security',
      text: {
        en: 'ModelForm Architecture and Post-Redirect-Get Pattern',
        bn: 'মডেলফর্ম আর্কিটেকচার ও পোস্ট-রিডাইরেক্ট-গেট প্যাটার্ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When persisting user submissions, developers follow the Post-Redirect-Get (PRG) pattern: upon successfully saving a form, the view issues an HTTP 302 redirect rather than re-rendering the POST page. This architectural pattern prevents accidental duplicate submissions if the user refreshes their browser window.',
        bn: 'ইউজারের পাঠানো তথ্য সেভ করার সময় ডেভেলপাররা পোস্ট-রিডাইরেক্ট-গেট (PRG) প্যাটার্ন অনুসরণ করেন: ফর্ম সফলভাবে সেভ হলে ভিউটি পেজ পুনরায় রেন্ডার না করে একটি এইচটিটিপি ৩০২ রিডাইরেক্ট পাঠায়। এর ফলে ব্যবহারকারী ব্রাউজার রিফ্রেশ করলেও ডাটাবেজে একাধিকবার একই ডাটা জমা হওয়ার ঝুঁকি থাকে না।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Explicit fields in ModelForm: Always declare fields = ["title", "body"] in Meta; never use fields = "__all__" in public forms.',
          bn: '১. মেটাতে স্পষ্ট fields: মেটা ক্লাসে স্পষ্টভাবে অনুমোদিত ফিল্ডের নাম লিখুন; পাবলিক ফর্মে কখনও fields = "__all__" দেবেন না।'
        },
        {
          en: '2. Always Use CSRF Token: Include {% csrf_token %} in every template form targeting a POST, PUT, or DELETE endpoint.',
          bn: '২. সিএসআরএফ টোকেন ব্যবহার: প্রতিটি ফর্ম টেমপ্লেটে সর্বদা {% csrf_token %} যুক্ত করুন।'
        },
        {
          en: '3. Access cleaned_data Only: Always read sanitized values from form.cleaned_data, never directly from raw request.POST.',
          bn: '৩. cleaned_data থেকে ডাটা গ্রহণ: সরাসরি কাঁচা request.POST থেকে ডাটা না নিয়ে সর্বদা form.cleaned_data থেকে মান পড়ুন।'
        },
        {
          en: '4. Apply PRG Pattern: Always return a redirect() after form.save() to prevent duplicate submissions on browser refresh.',
          bn: '৪. পিআরজি প্যাটার্ন প্রয়োগ: form.save() করার পর ব্রাউজারে ডুপ্লিকেট সাবমিশন এড়াতে সর্বদা redirect() রিটার্ন করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-frm-ex1',
      kind: 'mcq',
      topic: 'post redirect get pattern purpose',
      question: {
        en: 'Why must a Django view return a redirect() response after successfully saving a valid form, rather than rendering the template directly?',
        bn: 'একটি ভ্যালিড ফর্ম সফলভাবে সেভ করার পর সরাসরি টেমপ্লেট রেন্ডার না করে জ্যাঙ্গো ভিউ থেকে কেন redirect() পাঠানো উচিত?'
      },
      options: [
        {
          en: 'Post-Redirect-Get (PRG) ensures that if the user refreshes the browser page, it makes a safe GET request rather than accidentally resubmitting the POST payload a second time',
          bn: 'পোস্ট-রিডাইরেক্ট-গেট (PRG) নিশ্চিত করে যাতে ইউজার পেজ রিফ্রেশ করলে পুনরায় POST ডাটা জমা না হয়ে একটি নিরাপদ GET রিকোয়েস্ট যায়'
        },
        {
          en: 'Django raises a RuntimeError if you render a template after saving a model',
          bn: 'মডেল সেভ করার পর টেমপ্লেট রেন্ডার করলে জ্যাঙ্গো RuntimeError ছুড়ে দেয়'
        },
        {
          en: 'Redirecting deletes the database session token from RAM',
          bn: 'রিডাইরেক্ট করলে মেমরি থেকে ডাটাবেজ সেশন মুছে যায়'
        },
        {
          en: 'Web browsers do not support HTTP POST requests longer than 2 seconds',
          bn: 'ওয়েব ব্রাউজার ২ সেকেন্ডের বেশি দীর্ঘ POST রিকোয়েস্ট সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Refreshing a POST response prompts "Confirm form resubmission" in browsers.',
        bn: 'POST পেজ সরাসরি রিফ্রেশ করলে ব্রাউজার পুনরায় ডাটা পাঠানোর ওয়ার্নিং দেখায়।'
      },
      explanation: {
        en: 'The PRG pattern avoids duplicate form submissions. By issuing an HTTP 302/303 redirect, subsequent browser refreshes simply re-request the destination page via GET.',
        bn: 'পিআরজি প্যাটার্ন ডুপ্লিকেট সাবমিশন রোধ করে। ৩০২ রিডাইরেক্ট করার ফলে ব্রাউজার রিফ্রেশে শুধু একটি সাধারণ GET রিকোয়েস্ট পাঠায়।'
      }
    },
    {
      id: 'dj-frm-ex2',
      kind: 'mcq',
      topic: 'security risk of fields all in modelform',
      question: {
        en: 'Why is defining "fields = \'__all__\'" in a public ModelForm considered a dangerous mass-assignment security vulnerability?',
        bn: 'পাবলিক ModelForm-এ "fields = \'__all__\'" সংজ্ঞায়িত করাকে কেন একটি বিপজ্জনক ম্যাস-অ্যাসাইনমেন্ট নিরাপত্তা ত্রুটি ধরা হয়?'
      },
      options: [
        {
          en: 'Malicious users can forge extra POST parameters (like is_staff or account_balance) that the form will blindly validate and persist directly into the database',
          bn: 'দূষিত আক্রমণকারীরা বাড়তি POST প্যারামিটার (যেমন is_staff বা ব্যালেন্স) তৈরি করে পাঠাতে পারে যা ফর্মটি অন্ধভাবে ডাটাবেজে সেভ করে ফেলবে'
        },
        {
          en: 'It causes the Python compiler to run out of memory',
          bn: 'এটি পাইথন কম্পাইলারের সমস্ত মেমরি শেষ করে দেয়'
        },
        {
          en: 'All database tables are dropped automatically',
          bn: 'ডাটাবেজের সব টেবিল স্বয়ংক্রিয়ভাবে মুছে যায়'
        },
        {
          en: 'It converts the form fields into XML format',
          bn: 'এটি ফর্ম ফিল্ডগুলোকে এক্সএমএল ফরম্যাটে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Restricting fields prevents attackers from modifying administrative model attributes.',
        bn: 'নির্দিষ্ট ফিল্ড উল্লেখ রাখলে আক্রমণকারী অ্যাডমিন সংক্রান্ত গুরুত্বপূর্ণ ফিল্ড বদলাতে পারে না।'
      },
      explanation: {
        en: 'Using __all__ exposes every model field to user input. Attackers can inject sensitive fields (like is_superuser or verified) that were intended to be internal only.',
        bn: '__all__ দিলে মডেলের সব ফিল্ড ইউজারের ইনপুটের জন্য উন্মুক্ত হয়, যার ফলে হ্যাকাররা সিস্টেমের গোপন ফিল্ডও পরিবর্তন করতে পারে।'
      }
    },
    {
      id: 'dj-frm-ex3',
      kind: 'mcq',
      topic: 'custom single field validation method',
      question: {
        en: 'To write custom validation logic specifically for a field named "postal_code", what method name must you define on the Form class?',
        bn: '"postal_code" নামের নির্দিষ্ট ফিল্ডের জন্য কাস্টম ভ্যালিডেশন লিখতে ফর্ম ক্লাসে কোন নামের মেথড সংজ্ঞায়িত করতে হয়?'
      },
      options: [
        {
          en: 'clean_postal_code(self)',
          bn: 'clean_postal_code(self)'
        },
        {
          en: 'validate_postal_code(self)',
          bn: 'validate_postal_code(self)'
        },
        {
          en: 'check_postal_code(self)',
          bn: 'check_postal_code(self)'
        },
        {
          en: 'verify_postal_code(self)',
          bn: 'verify_postal_code(self)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django form cleaning methods strictly follow the clean_<fieldname> naming pattern.',
        bn: 'জ্যাঙ্গো ফর্ম ক্লিনিং মেথডে কঠোরভাবে clean_<fieldname> নামকরণের নিয়ম মানা হয়।'
      },
      explanation: {
        en: 'Django calls clean_<fieldname>() for each field during validation. The method accesses self.cleaned_data["postal_code"] and must return the cleaned value.',
        bn: 'জ্যাঙ্গো ভ্যালিডেশনের সময় স্বয়ংক্রিয়ভাবে clean_<fieldname>() কল করে এবং এই মেথড থেকে পরিশোধিত মান ফেরত দিতে হয়।'
      }
    },
    {
      id: 'dj-frm-ex4',
      kind: 'mcq',
      topic: 'saving modelform with commit false',
      question: {
        en: 'What is the purpose of passing "commit=False" when saving a ModelForm: "post = form.save(commit=False)"?',
        bn: 'ModelForm সেভ করার সময় "post = form.save(commit=False)" লেখার উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It constructs the model instance in Python memory without immediately writing it to the database, allowing you to attach request.user or other server-side fields before calling post.save()',
          bn: 'এটি ডাটাবেজে সাথে সাথে না লিখে মেমরিতে মডেল অবজেক্ট তৈরি করে, যাতে post.save() ডাকার আগে request.user বা অন্য তথ্য যোগ করা যায়'
        },
        {
          en: 'It cancels the form save and deletes the model record',
          bn: 'এটি ফর্ম সেভ বাতিল করে মডেল রেকর্ডটি মুছে দেয়'
        },
        {
          en: 'It converts the database from SQLite to MySQL',
          bn: 'এটি ডাটাবেজকে SQLite থেকে MySQL-এ রূপান্তর করে'
        },
        {
          en: 'It marks the model instance as permanently read-only',
          bn: 'এটি মডেল ইনস্ট্যান্সটিকে চিরতরে রিড-অনলি হিসেবে চিহ্নিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'commit=False returns an unsaved model object ready for extra attribute assignment.',
        bn: 'commit=False ডাটাবেজে না লিখে অবজেক্টটি ফেরত দেয় যাতে বাড়তি ডাটা বসানো যায়।'
      },
      explanation: {
        en: 'form.save(commit=False) returns an unsaved model instance, allowing developers to programmatically set fields (like current logged-in author) before calling .save().',
        bn: 'form.save(commit=False) ডাটাবেজে না পাঠিয়ে অবজেক্টটি দেয়, ফলে কোডের মাধ্যমে লগইন করা ইউজারের আইডি বসিয়ে তারপর .save() কল করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'forms-and-the-door-quiz',
    title: {
      en: 'Django Forms, ModelForms & CSRF Quiz',
      bn: 'জ্যাঙ্গো ফর্ম, মডেলফর্ম ও সিএসআরএফ কুইজ'
    },
    questions: [
      {
        id: 'q-multi-field-cross-validation',
        kind: 'mcq',
        topic: 'cross field validation inside clean method',
        question: {
          en: 'Where should multi-field cross-validation (such as verifying startDate comes before endDate) be implemented in a Django Form?',
          bn: 'জ্যাঙ্গো ফর্মে একাধিক ফিল্ডের পারস্পরিক যাচাই (যেমন startDate যেন endDate-এর পূর্বে হয়) কোথায় বাস্তবায়ন করা উচিত?'
        },
        options: [
          {
            en: 'In the form clean(self) method, inspecting multiple keys inside super().clean() cleaned_data dictionary and raising forms.ValidationError if mismatched',
            bn: 'ফর্মের clean(self) মেথডে, যেখানে super().clean() থেকে প্রাপ্ত cleaned_data ডিকশনারির একাধিক ফিল্ড মিলিয়ে দেখে ValidationError ছুড়ে দেওয়া হয়'
          },
          {
            en: 'Inside the PostgreSQL database trigger functions only',
            bn: 'কেবল পোস্টগ্রেস ডাটাবেজের ট্রিগার ফাংশনের ভেতরে'
          },
          {
            en: 'In the client-side CSS stylesheet media queries',
            bn: 'ক্লায়েন্ট সাইড সিএসএস স্টাইলশিটের মিডিয়া কোয়েরিতে'
          },
          {
            en: 'Inside the project settings.py file',
            bn: 'প্রজেক্টের settings.py ফাইলের ভেতরে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Overriding clean() is where form-wide validation occurs across multiple fields.',
          bn: 'clean() মেথড ওভাররাইড করে একাধিক ফিল্ডের মধ্যকার ব্যবসায়িক নিয়ম পরীক্ষা করা হয়।'
        },
        explanation: {
          en: 'The clean() method is called after individual field validators. It is the designated place for multi-field business logic, raising ValidationError for invalid combinations.',
          bn: 'ফিল্ড ক্লিনিং শেষে clean() মেথড রান হয়। একাধিক ফিল্ড তুলনা করে ত্রুটি পেলে এখান থেকেই ValidationError ছুড়তে হয়।'
        }
      },
      {
        id: 'q-ajax-csrf-token-header',
        kind: 'mcq',
        topic: 'submitting ajax requests with django csrf token',
        question: {
          en: 'When sending asynchronous JSON POST requests via fetch() or Axios to Django, which HTTP header must carry the CSRF cookie value?',
          bn: 'জ্যাঙ্গোতে fetch() বা Axios দিয়ে অ্যাসিনক্রোনাস JSON POST রিকোয়েস্ট পাঠানোর সময় কোন এইচটিটিপি হেডারে CSRF টোকেন পাঠাতে হয়?'
        },
        options: [
          {
            en: 'X-CSRFToken',
            bn: 'X-CSRFToken'
          },
          {
            en: 'Authorization-Token-CSRF',
            bn: 'Authorization-Token-CSRF'
          },
          {
            en: 'Django-Secret-Key',
            bn: 'Django-Secret-Key'
          },
          {
            en: 'X-Requested-With-Django',
            bn: 'X-Requested-With-Django'
          }
        ],
        answer: 0,
        hint: {
          en: 'Django CsrfViewMiddleware inspects the X-CSRFToken header for non-form payloads.',
          bn: 'জ্যাঙ্গো CsrfViewMiddleware হেডার হিসেবে X-CSRFToken নামটিকে যাচাই করে।'
        },
        explanation: {
          en: 'Django looks for the CSRF token in the X-CSRFToken HTTP request header when processing AJAX or API POST requests with JSON payloads.',
          bn: 'অ্যাসিনক্রোনাস এপিআই বা এজ্যাক্স POST রিকোয়েস্টে জ্যাঙ্গো X-CSRFToken হেডারের ভেতরে টোকেনটি খুঁজে নেয়।'
        }
      },
      {
        id: 'q-file-upload-enctype-requirement',
        kind: 'mcq',
        topic: 'multipart form data for file uploads',
        question: {
          en: 'Which HTML form attribute is required for Django to receive uploaded files in request.FILES?',
          bn: 'জ্যাঙ্গো request.FILES-এ আপলোড করা ফাইল পাওয়ার জন্য এইচটিএমএল ফর্ম ট্যাগে কোন এট্রিবিউট থাকা আবশ্যক?'
        },
        options: [
          {
            en: 'enctype="multipart/form-data"',
            bn: 'enctype="multipart/form-data"'
          },
          {
            en: 'enctype="application/x-www-form-urlencoded"',
            bn: 'enctype="application/x-www-form-urlencoded"'
          },
          {
            en: 'type="binary/stream"',
            bn: 'type="binary/stream"'
          },
          {
            en: 'method="FILE_TRANSFER"',
            bn: 'method="FILE_TRANSFER"'
          }
        ],
        answer: 0,
        hint: {
          en: 'File uploads require multipart encoding in HTML forms.',
          bn: 'ফাইল আপলোডের জন্য এইচটিএমএল ফর্মে মাল্টিপার্ট এনকোডিং প্রয়োজন।'
        },
        explanation: {
          en: 'Without enctype="multipart/form-data", browsers transmit only file names as plain text strings. With it, the browser streams actual file chunks into request.FILES.',
          bn: 'enctype="multipart/form-data" না দিলে ব্রাউজার ফাইলের কনটেন্ট না পাঠিয়ে শুধু নাম পাঠায়। এটি দিলে আসল ফাইল request.FILES-এ জমা হয়।'
        }
      },
      {
        id: 'q-widget-styling-bootstrap-tailwind',
        kind: 'mcq',
        topic: 'customizing widget css classes on form fields',
        question: {
          en: 'How can you attach modern CSS classes (such as Bootstrap or Tailwind utility classes) directly to a Django form field widget?',
          bn: 'জ্যাঙ্গো ফর্ম ফিল্ড উইজেটে সরাসরি আধুনিক সিএসএস ক্লাস (যেমন বুটস্ট্র্যাপ বা টেইলউইন্ড) কীভাবে যুক্ত করা যায়?'
        },
        options: [
          {
            en: 'By passing attrs={"class": "form-control rounded-md"} to the field Widget constructor in the Form definition',
            bn: 'ফর্মের ডেফিনিশনে ফিল্ডের Widget কনস্ট্রাক্টরে attrs={"class": "form-control rounded-md"} পাস করে'
          },
          {
            en: 'By writing inline CSS inside the Django database tables',
            bn: 'জ্যাঙ্গো ডাটাবেজ টেবিলের ভেতর ইনলাইন সিএসএস লিখে'
          },
          {
            en: 'By renaming the form class to match the CSS class name',
            bn: 'সিএসএস ক্লাসের নামের সাথে মিল রেখে ফর্মের নাম বদলে দিয়ে'
          },
          {
            en: 'Widgets cannot be styled; HTML output is strictly immutable',
            bn: 'উইজেটে স্টাইল দেওয়া যায় না; এইচটিএমএল আউটপুট অপরিবর্তনযোগ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Widgets accept an attrs dictionary where HTML attributes like class and placeholder are specified.',
          bn: 'উইজেটে attrs ডিকশনারির মাধ্যমে class ও placeholder-এর মতো এইচটিএমএল এট্রিবিউট সেট করা যায়।'
        },
        explanation: {
          en: 'The attrs argument on any Django widget allows developers to define custom HTML attributes, including class names, placeholder text, and data attributes.',
          bn: 'যেকোনো উইজেটে attrs ব্যবহার করে সিএসএস ক্লাস, প্লেসহোল্ডার এবং কাস্টম এইচটিএমএল এট্রিবিউট সহজেই যোগ করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-kitchen-ships',
    title: {
      en: 'Production & Testing — TestCase, Security Hardening, WhiteNoise & Gunicorn',
      bn: 'প্রোডাকশন ও টেস্টিং — টেস্টকেস, সিকিউরিটি হার্ডেনিং, হোয়াইট-নয়েজ ও ইউনিকর্ন'
    }
  }
};
