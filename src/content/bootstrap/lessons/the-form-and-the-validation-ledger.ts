import type { Lesson } from '../../../lib/types';

export const TheFormAndTheValidationLedgerLesson: Lesson = {
  slug: 'the-form-and-the-validation-ledger',
  tech: 'bootstrap',
  title: {
    en: 'Accessible Forms, Floating Labels & HTML5 Validation',
    bn: 'অ্যাক্সেসিবল ফর্ম, ফ্লোটিং লেবেল ও এইচটিএমএল-৫ ভ্যালিডেশন'
  },
  summary: {
    en: 'Forms are the essential transactional inputs of web applications, requiring accessible labels, responsive input controls, and immediate validation feedback. Bootstrap 5 standardizes form styling through unified primitives like form-control, form-select, and form-check, eliminating cross-browser visual discrepancies. Its floating labels feature animates text labels upward when fields receive focus, optimizing vertical screen space. Rather than relying on intrusive native browser alert tooltips, Bootstrap leverages a sophisticated CSS-driven validation architecture. By adding the was-validated class upon form submission, Bootstrap evaluates HTML5 constraint validity, rendering green checkmarks and valid-feedback messages for valid inputs, and red borders with invalid-feedback text for errors. In our test simulation of 3 fields, the engine detects 2 valid fields and 1 invalid field.',
    bn: 'ওয়েব অ্যাপ্লিকেশনে যেকোনো তথ্য আদান-প্রদানের প্রধান মাধ্যম হলো ফর্ম, যার জন্য প্রয়োজন স্পষ্ট লেবেল, সুন্দর ইনপুট বক্স এবং তাৎক্ষণিক ভ্যালিডেশন ফিডব্যাক। বুটস্ট্র্যাপ ৫ form-control, form-select এবং form-check ক্লাসের মাধ্যমে বিভিন্ন ব্রাউজারে ইনপুটের চেহারা একরকম রাখে। এর ফ্লোটিং লেবেল ফিচারটি টাইপ শুরু করলে লেবেলকে সুন্দর অ্যানিমেশনে উপরে তুলে দেয়, যা মোবাইল স্ক্রিনে জায়গা বাঁচায়। ব্রাউজারের বিরক্তিকর ডিফল্ট পপআপ এড়িয়ে বুটস্ট্র্যাপ সিএসএস-ভিত্তিক ভ্যালিডেশন ব্যবহার করে। ফর্মে was-validated ক্লাস যুক্ত করলে সঠিক ইনপুটে সবুজ টিকচিহ্ন ও valid-feedback এবং ভুল ইনপুটে লাল বর্ডার ও invalid-feedback প্রদর্শিত হয়। আমাদের ৩টি ফিল্ডের সিমুলেশনে ইঞ্জিনটি ২টি সঠিক এবং ১টি ভুল ফিল্ড সফলভাবে চিহ্নিত করেছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Constraint Validation and Feedback States',
        bn: 'মূল ধারণা: কনস্ট্রেইন্ট ভ্যালিডেশন ও ফিডব্যাক স্টেট'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you design web forms, user input validation requires clear visual signals that guide visitors toward successful submissions. Native browser validation tooltips vary widely between Chrome, Safari, and Firefox, and often fail accessibility standards. Bootstrap decouples validation checking from visual rendering: JavaScript evaluates browser constraint validation APIs, while CSS pseudo-classes drive beautiful feedback messages.',
        bn: 'আপনি যখন ওয়েব ফর্ম তৈরি করেন, তখন ইনপুটের ভুলত্রুটি সুন্দর ও স্পষ্ট সংকেতের মাধ্যমে ব্যবহারকারীকে ধরিয়ে দেওয়া দরকার। ক্রোম, সাফারি বা ফায়ারফক্স ব্রাউজারের নিজস্ব পপআপ মেসেজগুলো একেক রকম দেখায় এবং অনেক সময় অ্যাক্সেসিবিলিটি নিয়ম মানে না। বুটস্ট্র্যাপ কোড ও ডিজাইনকে আলাদা রাখে: জাভাস্ক্রিপ্ট ব্রাউজারের ভ্যালিডেশন নিয়ম পরীক্ষা করে, আর সিএসএস স্বয়ংক্রিয়ভাবে সুন্দর ফিডব্যাক মেসেজ দেখায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Form Primitives (.form-control, .form-select)',
          def: {
            en: 'Standardized input classes providing consistent border-radius, font sizes, focus rings, and dark mode theming across all browsers',
            bn: 'স্ট্যান্ডার্ড ইনপুট ক্লাস যা সব ব্রাউজারে অভিন্ন বর্ডার, ফন্ট সাইজ এবং উজ্জ্বল ফোকাস রিং বজায় রাখে'
          }
        },
        {
          term: 'Floating Labels (.form-floating)',
          def: {
            en: 'An input layout where the text label sits inside the field as a placeholder and animates smoothly upward into a compact title on focus',
            bn: 'একটি আধুনিক লেআউট যেখানে লেবেলটি প্রথমে ভেতরে থাকে এবং টাইপ শুরু করলে সুন্দরভাবে উপরে উঠে যায়'
          }
        },
        {
          term: 'The .was-validated Class',
          def: {
            en: 'A state class added to a form on submit, unlocking CSS pseudo-classes :valid and :invalid to display contextual feedback messages',
            bn: 'ফর্ম সাবমিট হলে যুক্ত হওয়া একটি ক্লাস, যা সঠিক ও ভুল ইনপুটের জন্য সিএসএস ফিডব্যাক বার্তাগুলো প্রদর্শন করায়'
          }
        },
        {
          term: 'Input Groups (.input-group)',
          def: {
            en: 'Flexbox wrappers attaching icons, currency symbols, or dropdown buttons directly to the leading or trailing edges of input fields',
            bn: 'ফ্লেক্সবক্স কন্টেইনার যা ইনপুট বক্সের আগে বা পরে আইকন, টাকার চিহ্ন বা বোতাম সুন্দরভাবে জোড়া লাগায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'validation-flow-table',
      text: {
        en: 'The Bootstrap Validation Architecture',
        bn: 'বুটস্ট্র্যাপ ভ্যালিডেশন আর্কিটেকচার'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Interaction Between HTML5 Constraint API, Classes, and Visual Feedback',
        bn: 'এইচটিএমএল-৫ কনস্ট্রেইন্ট এপিআই, ক্লাস ও ফিডব্যাকের পারস্পরিক সম্পর্ক'
      },
      head: [
        { en: 'Validation Element', bn: 'উপাদান / ক্লাস' },
        { en: 'Trigger Mechanism', bn: 'চালু হওয়ার শর্ত' },
        { en: 'Rendered Visual Style', bn: 'দৃশ্যমান ফলাফল' }
      ],
      rows: [
        [
          { en: '<form novalidate class="was-validated">', bn: '<form novalidate class="was-validated">' },
          { en: 'Added via JavaScript submit event listener after calling form.checkValidity()', bn: 'সাবমিট ইভেন্টে form.checkValidity() চেক করার পর স্ক্রিপ্ট দিয়ে যোগ করা হয়' },
          { en: 'Suppresses browser native popups and activates Bootstrap feedback CSS', bn: 'ব্রাউজারের বাজে পপআপ বন্ধ করে বুটস্ট্র্যাপের নিজস্ব ফিডব্যাক চালু করে' }
        ],
        [
          { en: '.valid-feedback', bn: '.valid-feedback' },
          { en: 'Displayed when parent form has .was-validated and field satisfies constraints', bn: 'ফর্ম ভ্যালিডেটেড হলে এবং ইনপুটের সব তথ্য সঠিক থাকলে দৃশ্যমান হয়' },
          { en: 'Renders positive green feedback text and a green checkmark icon inside input', bn: 'সবুজ রঙের প্রশংসাসূচক বাক্য এবং ইনপুটের ভেতরে সবুজ টিকচিহ্ন দেখায়' }
        ],
        [
          { en: '.invalid-feedback', bn: '.invalid-feedback' },
          { en: 'Displayed when parent form has .was-validated and field violates constraints', bn: 'ফর্ম ভ্যালিডেটেড হলে এবং তথ্যে কোনো ভুল থাকলে স্বয়ংক্রিয়ভাবে ফুটে ওঠে' },
          { en: 'Renders urgent red error text and a red exclamation icon inside input', bn: 'লাল রঙের সতর্কবার্তা এবং ইনপুটের ভেতর লাল সতর্ক সংকেত দেখায়' }
        ],
        [
          { en: '.is-valid / .is-invalid', bn: '.is-valid / .is-invalid' },
          { en: 'Applied directly from backend server templates (e.g. Node/Express, Django, Laravel)', bn: 'সার্ভার থেকে সরাসরি এইচটিএমএল টেমপ্লেটে এই ক্লাস দুটি বসিয়ে দেওয়া যায়' },
          { en: 'Forces validation styling immediately without requiring client JavaScript', bn: 'ক্লায়েন্টের জাভাস্ক্রিপ্ট ছাড়াই সাথে সাথে ভ্যালিডেশনের রঙ দেখায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Form Constraint State Evaluator',
        bn: 'চালনাযোগ্য সিমুলেশন: ফর্ম ভ্যালিডেশন স্টেট মূল্যায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates the evaluation of 3 form fields during a submission event, tabulating valid and invalid input totals:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি সাবমিটের সময় ৩টি ফর্ম ফিল্ডের তথ্য যাচাই করে সঠিক ও ভুল ফিল্ডের মোট সংখ্যা বের করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'bs-form-valid-sim',
      lang: 'javascript',
      code: `// Bootstrap Form Field Validation State Simulator
const formFields = [
  { name: 'username', valid: true },
  { name: 'email', valid: false },
  { name: 'terms', valid: true }
];

const totalFields = formFields.length;
const validCount = formFields.filter(f => f.valid).length;
const invalidCount = formFields.filter(f => !f.valid).length;

console.log('Total form fields evaluated on submit:', totalFields);
// -> Total form fields evaluated on submit: 3

console.log('Count of fields receiving .valid-feedback (green checkmark):', validCount);
// -> Count of fields receiving .valid-feedback (green checkmark): 2

console.log('Count of fields receiving .invalid-feedback (red border):', invalidCount);
// -> Count of fields receiving .invalid-feedback (red border): 1`,
      caption: {
        en: 'Figure 1: Evaluating 3 form fields yields 2 valid fields displaying green checkmarks and 1 invalid field triggering red feedback text',
        bn: 'চিত্র ১: ৩টি ফিল্ড যাচাই করে ২টি সঠিক ফিল্ডে সবুজ টিকচিহ্ন এবং ১টি ভুল ফিল্ডে লাল সতর্কবার্তা প্রদর্শিত হয়েছে'
      }
    },
    {
      type: 'heading',
      id: 'floating-labels-rules',
      text: {
        en: 'The Two Rules of Bootstrap Floating Labels',
        bn: 'বুটস্ট্র্যাপ ফ্লোটিং লেবেলের ২টি নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To ensure smooth CSS peer animations in .form-floating containers, developers must adhere to two strict DOM structural requirements:',
        bn: '.form-floating কন্টেইনারে মসৃণ অ্যানিমেশন পেতে ২টি নির্দিষ্ট নিয়ম নিখুঁতভাবে মেনে চলতে হয়:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Input Must Come First, Label Second',
          def: {
            en: 'In HTML markup, the <input> or <select> must precede the <label> element so the CSS sibling selector (input ~ label) can animate the label',
            bn: 'এইচটিএমএলে অবশ্যই ইনপুট আগে এবং লেবেল পরে থাকতে হবে যাতে সিএসএস সহজে লেবেলটিকে অ্যানিমেট করতে পারে'
          }
        },
        {
          term: 'Rule 2: Placeholder Attribute is Mandatory',
          def: {
            en: 'The input must define a placeholder attribute (even placeholder=" ") so CSS :placeholder-shown can detect whether user text is present',
            bn: 'ইনপুটে অবশ্যই placeholder থাকতে হবে যাতে সিএসএস বুঝতে পারে বক্সে কোনো লেখা আছে কি নেই'
          }
        },
        {
          term: 'Accessible Association (for and id)',
          def: {
            en: 'The label for attribute must strictly match the input id so assistive technologies announce the accessible name correctly',
            bn: 'লেবেলের for এবং ইনপুটের id হুবহু এক হতে হবে যাতে স্ক্রিন রিডার ইনপুটের নাম নির্ভুলভাবে উচ্চারণ করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-form-valid-calc-ex',
      kind: 'mcq',
      topic: 'Tabulating valid and invalid field counts',
      question: {
        en: 'In our form simulation of 3 total fields, how many inputs failed validation and received the red .invalid-feedback styling?',
        bn: 'আমাদের ৩টি ফিল্ডের সিমুলেশনে কয়টি ফিল্ডে ভুল ধরা পড়েছে এবং লাল .invalid-feedback স্টাইল পেয়েছে?'
      },
      options: [
        {
          en: '1 invalid field (the email field)',
          bn: '১টি ভুল ফিল্ড (ইমেইল ফিল্ড)'
        },
        {
          en: '3 invalid fields (all failed)',
          bn: '৩টি ভুল ফিল্ড (সবগুলো ব্যর্থ)'
        },
        {
          en: '0 invalid fields (all passed)',
          bn: '০টি ভুল ফিল্ড (সবগুলো সঠিক)'
        },
        {
          en: '10 invalid fields',
          bn: '১০টি ভুল ফিল্ড'
        }
      ],
      answer: 0,
      hint: {
        en: '2 fields were valid, leaving 1 invalid field.',
        bn: '২টি সঠিক এবং ১টি ভুলের কথা ভাবুন।'
      },
      explanation: {
        en: 'Out of 3 fields evaluated, the username and terms were valid, leaving exactly 1 invalid field (email) for user remediation.',
        bn: 'মোট ৩টি ফিল্ডের মধ্যে ইউজারনেম ও টার্মস সঠিক ছিল, কেবল ইমেইল ফিল্ডটিতে ১টি ভুল ধরা পড়েছিল।'
      }
    },
    {
      id: 'bs-novalidate-purpose-ex',
      kind: 'mcq',
      topic: 'Why novalidate is added to forms using Bootstrap validation',
      question: {
        en: 'Why must the novalidate boolean attribute be added to an HTML <form> when using Bootstrap custom validation styles?',
        bn: 'বুটস্ট্র্যাপের নিজস্ব ভ্যালিডেশন ব্যবহারের সময় এইচটিএমএল <form>-এ কেন novalidate অ্যাট্রিবিউট যোগ করতে হয়?'
      },
      options: [
        {
          en: 'To suppress the browser default validation error bubbles so Bootstrap custom CSS feedback classes can render instead',
          bn: 'ব্রাউজারের ডিফল্ট বাজে পপআপ বন্ধ রাখতে যাতে বুটস্ট্র্যাপের নিজস্ব সিএসএস মেসেজগুলো সুন্দরভাবে দেখা যায়'
        },
        {
          en: 'To permanently prevent forms from submitting to any web server',
          bn: 'সার্ভারে ফর্ম সাবমিট হওয়া চিরতরে বন্ধ করতে'
        },
        {
          en: 'Because HTML forms crash without novalidate',
          bn: 'কারণ novalidate ছাড়া ফর্ম ক্র্যাশ করে'
        },
        {
          en: 'To make all passwords visible in plain text',
          bn: 'সব পাসওয়ার্ড সবার সামনে উন্মুক্ত দেখাতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'novalidate suppresses ugly native browser alert bubbles.',
        bn: 'ব্রাউজারের ডিফল্ট পপআপ বন্ধ করার কথা ভাবুন।'
      },
      explanation: {
        en: 'novalidate tells the browser not to display its native tooltip bubbles, allowing Bootstrap custom .invalid-feedback elements to display.',
        bn: 'novalidate ব্রাউজারের ডিফল্ট পপআপ আটকে দিয়ে বুটস্ট্র্যাপের সুন্দর ফিডব্যাক মেসেজ দেখানোর সুযোগ তৈরি করে।'
      }
    },
    {
      id: 'bs-floating-order-ex',
      kind: 'mcq',
      topic: 'Structural order inside .form-floating containers',
      question: {
        en: 'In a Bootstrap .form-floating container, what is the mandatory DOM ordering between the <input> and <label> elements?',
        bn: 'বুটস্ট্র্যাপ .form-floating কন্টেইনারে <input> এবং <label> উপাদানের সঠিক ক্রম কোনটি?'
      },
      options: [
        {
          en: 'The <input> must appear first, followed immediately by the <label>',
          bn: '<input> অবশ্যই আগে থাকতে হবে এবং ঠিক তার পরে <label> থাকতে হবে'
        },
        {
          en: 'The <label> must appear first, followed by the <input>',
          bn: '<label> আগে এবং <input> পরে থাকতে হবে'
        },
        {
          en: 'Both elements must be placed inside a <table> cell',
          bn: 'উভয় উপাদানকে একটি টেবিল সেলে রাখতে হবে'
        },
        {
          en: 'The order does not matter in CSS',
          bn: 'সিএসএসে কোনো ক্রমের বাধ্যবাধকতা নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Input first, label second for CSS sibling selectors.',
        bn: 'সিএসএস অ্যানিমেশনের জন্য ইনপুট আগে রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'Bootstrap floating labels rely on the CSS sibling selector (input ~ label). Placing the label before the input breaks the animation.',
        bn: 'সিএসএস সিবলিং সিলেক্টর দিয়ে লেবেল উপরে তোলার জন্য ইনপুটকে অবশ্যই লেবেলের আগে লিখতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-form-validation-ledger',
    title: {
      en: 'Bootstrap Forms & Validation Architecture Quiz',
      bn: 'বুটস্ট্র্যাপ ফর্ম ও ভ্যালিডেশন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-bs-server-validation-classes',
        kind: 'mcq',
        topic: 'Server-side validation using .is-valid and .is-invalid',
        question: {
          en: 'When rendering server-side validation errors from backend templates like Node, Django, or Laravel, which classes are applied directly to the inputs?',
          bn: 'নোড বা লারাভেলের মতো ব্যাকএন্ড থেকে সরাসরি ফর্মের ভুলের রঙ দেখাতে ইনপুটে কোন ক্লাসগুলো যোগ করতে হয়?'
        },
        options: [
          {
            en: '.is-valid and .is-invalid',
            bn: '.is-valid এবং .is-invalid'
          },
          {
            en: '.was-validated-always',
            bn: '.was-validated-always'
          },
          {
            en: '.server-error-text',
            bn: '.server-error-text'
          },
          {
            en: '.backend-check-good',
            bn: '.backend-check-good'
          }
        ],
        answer: 0,
        hint: {
          en: '.is-valid and .is-invalid provide instant server-side feedback.',
          bn: '.is-valid এবং .is-invalid ক্লাসের কথা ভাবুন।'
        },
        explanation: {
          en: 'While client-side validation relies on .was-validated on the form, server-side validation applies .is-valid or .is-invalid directly to specific fields.',
          bn: 'সার্ভার থেকে সরাসরি ইনপুটে .is-invalid বসালে ক্লায়েন্টের জাভাস্ক্রিপ্ট ছাড়াই লাল বর্ডার ও ভুলের মেসেজ দেখানো যায়।'
        }
      },
      {
        id: 'q-bs-input-group-text',
        kind: 'mcq',
        topic: 'Creating add-on labels using .input-group-text',
        question: {
          en: 'What is the role of the .input-group-text class inside an .input-group container?',
          bn: '.input-group কন্টেইনারের ভেতরে .input-group-text ক্লাসের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It styles visual add-ons (such as @ symbols, currency signs, or helper icons) attached flush with input controls',
            bn: 'ইনপুট বক্সের গায়ে লাগানো @ চিহ্ন, টাকার সংকেত বা আইকনগুলোকে সুন্দর ফ্লেক্সবক্স স্টাইলে সাজিয়ে দেয়'
          },
          {
            en: 'It encrypts the text input with SHA-256 hash',
            bn: 'এটি লেখার মানকে এনক্রিপ্ট করে'
          },
          {
            en: 'It automatically fills the input with the user name',
            bn: 'এটি ইনপুটে স্বয়ংক্রিয়ভাবে ব্যবহারকারীর নাম বসিয়ে দেয়'
          },
          {
            en: 'It deletes all punctuation marks typed by the user',
            bn: 'এটি ব্যবহারকারীর টাইপ করা যতিচিহ্ন মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Visual prefix or suffix add-on flush with the input.',
          bn: 'ইনপুটের সাথে জোড়া লাগানো চিহ্নের কথা ভাবুন।'
        },
        explanation: {
          en: '.input-group-text provides styled background, padding, and borders for text prefixes or suffixes attached to inputs.',
          bn: 'ইনপুটের সাথে সুন্দর প্রিফিক্স বা সাফিক্স প্রদর্শন করতে .input-group-text ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-bs-form-check-structure',
        kind: 'mcq',
        topic: 'Correct markup for Bootstrap checkboxes and radios',
        question: {
          en: 'Which pair of classes correctly constructs a custom Bootstrap checkbox or radio input with its associated label?',
          bn: 'চেকবক্স বা রেডিও বাটন তৈরির জন্য বুটস্ট্র্যাপের সঠিক ক্লাস জোড়া কোনটি?'
        },
        options: [
          {
            en: '.form-check-input on the input, and .form-check-label on the label',
            bn: 'ইনপুটের জন্য .form-check-input এবং লেবেলের জন্য .form-check-label'
          },
          {
            en: '.checkbox-item on the input, and .text-item on the label',
            bn: 'ইনপুটে .checkbox-item এবং লেবেলে .text-item'
          },
          {
            en: '.btn on the input, and .badge on the label',
            bn: 'ইনপুটে .btn এবং লেবেলে .badge'
          },
          {
            en: '.input-field on both elements',
            bn: 'উভয় উপাদানে .input-field'
          }
        ],
        answer: 0,
        hint: {
          en: 'form-check-input and form-check-label inside .form-check.',
          bn: 'form-check-input ও form-check-label ক্লাসের কথা ভাবুন।'
        },
        explanation: {
          en: 'Wrapping controls in .form-check with .form-check-input and .form-check-label produces cross-browser custom checkboxes and radio buttons.',
          bn: 'এই ক্লাসগুলো সব ব্রাউজারে নিখুঁত ও আধুনিক চেকবক্স এবং রেডিও বাটন উপহার দেয়।'
        }
      },
      {
        id: 'q-bs-form-select-purpose',
        kind: 'mcq',
        topic: 'The purpose of .form-select over unstyled select tags',
        question: {
          en: 'What advantage does the .form-select class provide over a native unstyled HTML <select> dropdown?',
          bn: 'সাধারণ এইচটিএমএল <select> ড্রপডাউনের চেয়ে বুটস্ট্র্যাপের .form-select ক্লাসের সুবিধা কী?'
        },
        options: [
          {
            en: 'It replaces operating system native select styling with custom SVGs for the dropdown arrow, standardizing height and padding across all platforms',
            bn: 'ব্রাউজারের বাজে ডিফল্ট তীর চিহ্নের বদলে কাস্টম এসভিজি তীর চিহ্ন ও সুন্দর প্যাডিং দিয়ে সব প্ল্যাটফর্মে ড্রপডাউনকে একই রকম দেখায়'
          },
          {
            en: 'It limits the user to selecting only the first option in the list',
            bn: 'এটি কেবল প্রথম অপশন সিলেক্ট করার অনুমতি দেয়'
          },
          {
            en: 'It deletes all unselected options permanently from the web page',
            bn: 'এটি বাকি সব অপশন পেজ থেকে মুছে ফেলে'
          },
          {
            en: 'It forces select dropdowns to download as Excel spreadsheets',
            bn: 'এটি ড্রপডাউনকে এক্সেল ফাইলে ডাউনলোড করিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Custom SVG arrows and standardized cross-platform padding.',
          bn: 'কাস্টম তীর চিহ্ন এবং সব প্ল্যাটফর্মে একরকম প্যাডিংয়ের কথা ভাবুন।'
        },
        explanation: {
          en: '.form-select removes inconsistent OS dropdown arrows, injecting a responsive SVG chevron with uniform padding and focus styling.',
          bn: '.form-select বিভিন্ন অপারেটিং সিস্টেমের বিচিত্র ড্রপডাউন চিহ্নের বদলে একটি চমৎকার ও আধুনিক এসভিজি তীর ব্যবহার করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'utilities-and-the-variable-wardrobe',
    tech: 'bootstrap',
    title: {
      en: 'Utilities, The Spacing Ladder & Dark Mode Theming',
      bn: 'ইউটিলিটি, স্পেসিং ল্যাডার ও ডার্ক মোড থিমিং'
    }
  }
};
