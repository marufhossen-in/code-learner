import type { Lesson } from '../../../lib/types';

export const orchardFormsLesson: Lesson = {
  slug: 'the-orchard-forms',
  tech: 'dom',
  title: {
    en: 'Forms, Inputs, Validation & FormData API',
    bn: 'ফর্ম, ইনপুট, ভ্যালিডেশন ও FormData এপিআই'
  },
  summary: {
    en: 'Handling user input through HTML forms is central to data-driven web applications. Modern JavaScript eliminates manual input queries by utilizing the FormData API. Calling new FormData(form) collects all named inputs into a structured key-value dataset that can be serialized via Object.fromEntries or transmitted directly via fetch without manually configuring multipart boundary headers. Event handling distinguishes between the input event (firing continuously on every keystroke) and the change event (firing only upon commit or blur). For data integrity, the browser Constraint Validation API provides checkValidity, reportValidity, and validity flags (like typeMismatch or valueMissing). For instance, verifying a registration form with 4 fields yields 4 valid fields and 0 invalid fields. This lesson covers form extraction, input events, custom validation, and asynchronous submission.',
    bn: 'এইচটিএমএল ফর্মের মাধ্যমে ব্যবহারকারীর ডেটা সংগ্রহ করা যেকোনো আধুনিক ওয়েব অ্যাপের প্রধান কাজ। আধুনিক জাভাস্ক্রিপ্টে আলাদা করে প্রতি ইনপুট না খুঁজে সরাসরি FormData এপিআই ব্যবহার করা হয়। new FormData(form) কল করলে ফর্মের সমস্ত নামযুক্ত ফিল্ড একবারে সংগ্রহ হয়ে যায়, যা Object.fromEntries দিয়ে সাধারণ অবজেক্টে রূপান্তর করা যায় অথবা কোনো ম্যানুয়াল বাউন্ডারি হেডার ছাড়াই সরাসরি fetch-এর বডি হিসেবে পাঠানো যায়। ইভেন্ট হ্যান্ডলিংয়ের ক্ষেত্রে input ইভেন্ট প্রতি কীবোর্ড ক্লিকে চলে এবং change ইভেন্ট এডিটিং শেষ করে ফোকাস সরিয়ে নিলে রান হয়। তথ্যের নির্ভুলতা নিশ্চিত করতে ব্রাউজারের নিজস্ব Constraint Validation এপিআই checkValidity, reportValidity এবং বিভিন্ন ভ্যালিডিটি ফ্ল্যাগ সরবরাহ করে। যেমন ৪টি ফিল্ডযুক্ত একটি ফর্ম যাচাই করলে ৪টি বৈধ এবং ০টি অবৈধ ফিল্ড পাওয়া যায়। এই পাঠে ফর্ম এক্সট্র্যাকশন, ইনপুট ইভেন্ট, কাস্টম ভ্যালিডেশন ও সাবমিশন বিস্তারিত শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Modern Form Data Pipelines',
        bn: 'মূল ধারণা: আধুনিক ফর্ম ডেটা পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you build web forms in modern JavaScript, you do not need to manually query inputs by ID, extract input.value, or concatenate URL query strings. Modern web standards replace this brittle manual work with the native FormData interface and the browser built-in Constraint Validation engine.',
        bn: 'আপনি যখন আধুনিক জাভাস্ক্রিপ্টে ওয়েব ফর্ম তৈরি করবেন, তখন প্রতিটি ইনপুটের আইডি ধরে value পড়া বা ম্যানুয়ালি কোয়েরি স্ট্রিং তৈরি করার কোনো প্রয়োজন নেই। আধুনিক ওয়েব স্ট্যান্ডার্ডে এই ঝামেলা দূর করে ব্রাউজারের নিজস্ব FormData ইন্টারফেস এবং বিল্ট-ইন কনস্ট্রেইন্ট ভ্যালিডেশন ইঞ্জিন যুক্ত করা হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The FormData API',
          def: {
            en: 'An interface representing form fields and values, automatically serializing inputs, checkboxes, and file uploads',
            bn: 'ফর্মের সমস্ত ইনপুট, চেকবক্স ও ফাইল ডেটাকে একবারে গুছিয়ে রাখা এবং নেটওয়ার্কে পাঠানোর উপযোগী ব্রাউজার ইন্টারফেস'
          }
        },
        {
          term: 'input vs change Events',
          def: {
            en: 'input fires immediately on every keystroke or value mutation; change fires only after the input loses focus (blur) or a selection commits',
            bn: 'input ইভেন্ট প্রতি কীবোর্ড ক্লিকে তৎক্ষণাৎ চলে; change ইভেন্ট এডিটিং শেষ করে ফোকাস সরিয়ে নিলে রান হয়'
          }
        },
        {
          term: 'Constraint Validation API',
          def: {
            en: 'The browser native validation suite providing checkValidity(), reportValidity(), and fine-grained ValidityState flags',
            bn: 'ব্রাউজারের নিজস্ব ভ্যালিডেশন সিস্টেম যা প্রতিটি ফিল্ডের বৈধতা পরীক্ষা এবং ত্রুটি বার্তা প্রদর্শনের সুবিধা দেয়'
          }
        },
        {
          term: 'form.setCustomValidity(message)',
          def: {
            en: 'Injecting custom error messages into the native browser validation bubble, marking the input invalid when non-empty',
            bn: 'ব্রাউজারের ভ্যালিডেশন বুদবুদে নিজের কাস্টম ত্রুটি বার্তা সেট করার মেথড, যা খালি না থাকলে ফিল্ডটিকে অবৈধ হিসেবে চিহ্নিত করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'validity-flags-table',
      text: {
        en: 'The ValidityState Interface Properties',
        bn: 'ValidityState ইন্টারফেসের প্রধান প্রধান প্রপার্টিসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Standard Boolean Flags Provided on input.validity',
        bn: 'input.validity অবজেক্টের বিভিন্ন বুলিয়ান ফ্ল্যাগ'
      },
      head: [
        { en: 'Validity Flag', bn: 'ফ্ল্যাগ' },
        { en: 'Trigger Condition', bn: 'শর্ত' },
        { en: 'HTML Attribute Constraint', bn: 'এইচটিএমএল অ্যাট্রিবিউট' }
      ],
      rows: [
        [
          { en: 'validity.valueMissing', bn: 'validity.valueMissing' },
          { en: 'The field is blank but marked as mandatory', bn: 'ফিল্ডটি খালি কিন্তু এটি পূরণ করা বাধ্যতামূলক' },
          { en: 'required', bn: 'required' }
        ],
        [
          { en: 'validity.typeMismatch', bn: 'validity.typeMismatch' },
          { en: 'Value does not match expected format (e.g. invalid email syntax)', bn: 'ইনপুটটি নির্দিষ্ট ফরম্যাট মেনে চলছে না (যেমন ভুল ইমেইল)' },
          { en: 'type="email" or type="url"', bn: 'type="email" অথবা type="url"' }
        ],
        [
          { en: 'validity.patternMismatch', bn: 'validity.patternMismatch' },
          { en: 'Value does not satisfy the specified regular expression', bn: 'ইনপুটটি নির্দিষ্ট রেগুলার এক্সপ্রেশনের সাথে মিলছে না' },
          { en: 'pattern="[A-Z]{3}"', bn: 'pattern="[A-Z]{3}"' }
        ],
        [
          { en: 'validity.tooShort / tooLong', bn: 'validity.tooShort / tooLong' },
          { en: 'Character length violates minimum or maximum string constraints', bn: 'অক্ষরের সংখ্যা নির্ধারিত ন্যূনতম বা সর্বোচ্চ সীমার বাইরে চলে গেছে' },
          { en: 'minlength="8" or maxlength="64"', bn: 'minlength="8" বা maxlength="64"' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Form Field Extraction & Validation Engine',
        bn: 'চালনাযোগ্য সিমুলেশন: ফর্ম ফিল্ড নিষ্কাশন ও ভ্যালিডেশন গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates extracting and validating a registration form containing 4 fields (username, email, age, newsletter), confirming 4 valid fields and 0 invalid fields:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৪টি ফিল্ডযুক্ত (ইউজারনেম, ইমেইল, বয়স, নিউজলেটার) একটি রেজিস্ট্রেশন ফর্ম থেকে ডেটা বের করে এবং যাচাই করে ৪টি বৈধ ও ০টি অবৈধ ফিল্ড প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'dom-formdata-sim',
      lang: 'javascript',
      code: `// DOM FormData Field Extraction & Constraint Validation Engine
const formFields = [
  { name: 'username', value: 'developer', valid: true },
  { name: 'email', value: 'dev@codeshikhon.com', valid: true },
  { name: 'age', value: '25', valid: true },
  { name: 'newsletter', value: 'true', valid: true }
];

const totalFields = formFields.length;
const validFields = formFields.filter(f => f.valid).length;
const invalidFields = totalFields - validFields;

console.log('Total input fields detected in form:', totalFields);
// -> Total input fields detected in form: 4

console.log('Count of input fields passing validation constraints:', validFields);
// -> Count of input fields passing validation constraints: 4

console.log('Count of input fields failing validation constraints:', invalidFields);
// -> Count of input fields failing validation constraints: 0`,
      caption: {
        en: 'Figure 1: Processing 4 form inputs confirms 4 valid fields and 0 invalid fields across the submission payload',
        bn: 'চিত্র ১: ৪টি ফর্ম ইনপুট প্রসেস করে ৪টি বৈধ এবং ০টি অবৈধ ফিল্ড নিশ্চিত করা হয়েছে'
      }
    },
    {
      type: 'heading',
      id: 'formdata-upload-pattern',
      text: {
        en: 'The FormData File Upload Architecture',
        bn: 'FormData ফাইল আপলোডের সঠিক নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When submitting a form containing binary files with fetch(), never set the Content-Type request header manually. If you assign "multipart/form-data", the browser cannot generate the unique boundary delimiter required to separate payload parts. Simply pass body: new FormData(form) and the browser sets the boundary automatically.',
        bn: 'fetch() দিয়ে ফাইলসহ ফর্ম পাঠানোর সময় হেডার্সে কখনোই নিজে থেকে Content-Type লিখবেন না। আপনি যদি "multipart/form-data" ম্যানুয়ালি লেখেন, তবে ব্রাউজার ফাইলের অংশগুলো আলাদা করার বাউন্ডারি কোড বসাতে পারে না। শুধুমাত্র body: new FormData(form) দিলে ব্রাউজার নিজে থেকেই সঠিক বাউন্ডারি হেডার যোগ করে নেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Object.fromEntries(formData.entries())',
          def: {
            en: 'Serializing a FormData collection directly into a clean plain JavaScript key-value object',
            bn: 'FormData-কে সরাসরি একটি সাধারণ জাভাস্ক্রিপ্ট কি-ভ্যালু অবজেক্টে রূপান্তর করার সহজ পদ্ধতি'
          }
        },
        {
          term: 'form.reportValidity()',
          def: {
            en: 'Evaluating validation constraints and triggering the native browser error bubble UI on the first failing input',
            bn: 'ফর্মের সমস্ত শর্ত যাচাই করা এবং ভুল ইনপুটে ব্রাউজারের নিজস্ব লাল ওয়ার্নিং পপআপ প্রদর্শন করা'
          }
        },
        {
          term: 'focusin & focusout vs focus & blur',
          def: {
            en: 'focusin and focusout bubble up the DOM tree, whereas focus and blur do not bubble',
            bn: 'focusin এবং focusout ইভেন্ট বাবল হয়ে ওপরে ওঠে, কিন্তু focus ও blur ইভেন্ট বাবল হয় না'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-form-valid-calc-ex',
      kind: 'mcq',
      topic: 'Count of valid fields in registration form simulation',
      question: {
        en: 'According to our form simulation, how many valid and invalid fields were counted across the 4 form inputs?',
        bn: 'আমাদের ফর্ম সিমুলেশন অনুযায়ী ৪টি ইনপুটের মধ্যে কয়টি বৈধ এবং কয়টি অবৈধ ফিল্ড পাওয়া গেছে?'
      },
      options: [
        {
          en: '4 valid fields and 0 invalid fields',
          bn: '৪টি বৈধ এবং ০টি অবৈধ ফিল্ড'
        },
        {
          en: '2 valid fields and 2 invalid fields',
          bn: '২টি বৈধ এবং ২টি অবৈধ ফিল্ড'
        },
        {
          en: '0 valid fields and 4 invalid fields',
          bn: '০টি বৈধ এবং ৪টি অবৈধ ফিল্ড'
        },
        {
          en: '3 valid fields and 1 invalid field',
          bn: '৩টি বৈধ এবং ১টি অবৈধ ফিল্ড'
        }
      ],
      answer: 0,
      hint: {
        en: 'All 4 fields passed validation, leaving 0 invalid.',
        bn: 'সব ৪টি ফিল্ড সফলভাবে পাস হওয়ায় ০টি অবৈধ ফিল্ড থাকার কথা ভাবুন।'
      },
      explanation: {
        en: 'All 4 input elements satisfied validation constraints, producing 4 valid fields and 0 invalid fields.',
        bn: 'সব ৪টি ইনপুট ফিল্ডই শর্ত পূরণ করায় ৪টি বৈধ এবং ০টি অবৈধ ফিল্ড রিপোর্ট হয়েছে।'
      }
    },
    {
      id: 'dom-formdata-content-type-ex',
      kind: 'mcq',
      topic: 'Why manual Content-Type header breaks FormData fetch uploads',
      question: {
        en: 'Why should you NOT manually specify headers: { "Content-Type": "multipart/form-data" } when sending a FormData payload with fetch()?',
        bn: 'fetch() দিয়ে FormData পাঠানোর সময় কেন ম্যানুয়ালি "Content-Type": "multipart/form-data" হেডার দেওয়া উচিত নয়?'
      },
      options: [
        {
          en: 'Manually setting the header strips the browser-generated boundary string, causing the backend server to fail to parse multipart payload fields',
          bn: 'ম্যানুয়ালি হেডার দিলে ব্রাউজারের তৈরি করা বাউন্ডারি কোড মুছে যায়, ফলে সার্ভার ফাইলের বিভিন্ন অংশ আলাদা করতে না পেরে ক্র্যাশ করে'
        },
        {
          en: 'FormData only works over WebSockets',
          bn: 'FormData কেবল ওয়েবসকেটে চলে'
        },
        {
          en: 'The browser changes all files into MP3 format',
          bn: 'ব্রাউজার সব ফাইলকে অডিও বানিয়ে দেয়'
        },
        {
          en: 'fetch() throws a SYNTAX_ERR exception',
          bn: 'fetch() একটি সিনট্যাক্স এরর দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The browser needs to append the boundary parameter automatically.',
        bn: 'ব্রাউজার যেন নিজে থেকে বাউন্ডারি প্যারামিটার যোগ করতে পারে সে কথা ভাবুন।'
      },
      explanation: {
        en: 'The browser must generate a dynamic boundary delimiter (e.g. boundary=----WebKitFormBoundary). Omitting Content-Type allows the browser to set it automatically.',
        bn: 'ব্রাউজার নিজে থেকে একটি ইউনিক বাউন্ডারি স্ট্রিং তৈরি করে। হেডার খালি রাখলে ব্রাউজার নিজে থেকেই সঠিক হেডার বসিয়ে দেয়।'
      }
    },
    {
      id: 'dom-input-vs-change-ex',
      kind: 'mcq',
      topic: 'Difference between input and change events',
      question: {
        en: 'When does the "input" event fire on a text field compared to the "change" event?',
        bn: 'টেক্সট ফিল্ডে "change" ইভেন্টের তুলনায় "input" ইভেন্ট কখন কার্যকর হয়?'
      },
      options: [
        {
          en: '"input" fires immediately on every keystroke or character change; "change" fires only after the user commits the value or leaves the field (blur)',
          bn: '"input" প্রতি কীবোর্ড ক্লিকে তৎক্ষণাৎ চলে; আর "change" ব্যবহারকারী লেখা শেষ করে অন্য ফিল্ডে ক্লিক করলে (blur) কার্যকর হয়'
        },
        {
          en: '"input" only works on buttons; "change" works on paragraphs',
          bn: '"input" কেবল বাটনে এবং "change" কেবল প্যারাগ্রাফে চলে'
        },
        {
          en: '"change" fires on every millisecond continuously',
          bn: '"change" প্রতি মিলিসেকেন্ডে অনবরত চলতে থাকে'
        },
        {
          en: 'There is no difference between them',
          bn: 'এদের মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Real-time keystroke feedback versus committed blur event.',
        bn: 'তাত্ক্ষণিক টাইপিং বনাম ফোকাস সরানোর পরের ইভেন্টের কথা ভাবুন।'
      },
      explanation: {
        en: 'The input event provides real-time feedback during typing. The change event fires once input editing is committed.',
        bn: 'input ইভেন্ট প্রতিটি অক্ষরের সাথে সাথে লাইভ ফিডব্যাক দেয়, আর change ইভেন্ট এডিটিং শেষ হওয়া পর্যন্ত অপেক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-orchard-forms',
    title: {
      en: 'DOM Forms & Validation Quiz',
      bn: 'ডম ফর্ম ও ভ্যালিডেশন কুইজ'
    },
    questions: [
      {
        id: 'q-dom-report-validity-action',
        kind: 'mcq',
        topic: 'Function of form.reportValidity',
        question: {
          en: 'What occurs when you invoke form.reportValidity() in JavaScript?',
          bn: 'জাভাস্ক্রিপ্টে form.reportValidity() কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It evaluates all input constraints, returns a boolean, and automatically focuses the first invalid input while showing the native error tooltip bubble',
            bn: 'এটি ফর্মের সমস্ত শর্ত যাচাই করে বুলিয়ান মান দেয় এবং প্রথম ভুল ইনপুটটিতে নিজে থেকেই ফোকাস নিয়ে ব্রাউজারের লাল ত্রুটি বার্তা প্রদর্শন করে'
          },
          {
            en: 'It deletes all user data from the database',
            bn: 'এটি ডাটাবেজ থেকে সব তথ্য মুছে ফেলে'
          },
          {
            en: 'It sends an email notification to the site administrator',
            bn: 'এটি সাইট অ্যাডমিনকে ইমেইল পাঠায়'
          },
          {
            en: 'It reloads the page in incognito mode',
            bn: 'এটি ইনকগনিটো মোডে পেজ রিলোড করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Evaluates validity and displays the native validation tooltip UI.',
          bn: 'বৈধতা যাচাই করে ব্রাউজারের নিজস্ব ওয়ার্নিং বুদবুদ দেখানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'reportValidity checks validity, returns true or false, and triggers native browser error bubbles on invalid elements.',
          bn: 'reportValidity সমস্ত শর্ত যাচাই করে এবং কোনো ইনপুট ভুল থাকলে ব্যবহারকারীকে তা লাল পপআপে দেখিয়ে দেয়।'
        }
      },
      {
        id: 'q-dom-setcustomvalidity-empty',
        kind: 'mcq',
        topic: 'Clearing custom validation errors with setCustomValidity("")',
        question: {
          en: 'How do you mark an input element as valid again after setting a custom error with setCustomValidity("Error message")?',
          bn: 'setCustomValidity("Error message") দিয়ে একটি ইনপুটে ত্রুটি সেট করার পর কীভাবে তাকে আবার বৈধ বা স্বাভাবিক করা যায়?'
        },
        options: [
          {
            en: 'Invoke input.setCustomValidity("") with an empty string',
            bn: 'খালি স্ট্রিং দিয়ে input.setCustomValidity("") কল করে'
          },
          {
            en: 'Set input.valid = true',
            bn: 'input.valid = true সেট করে'
          },
          {
            en: 'Delete the input element and recreate it',
            bn: 'ইনপুটটি ডিলিট করে আবার তৈরি করে'
          },
          {
            en: 'Restart the web browser',
            bn: 'ব্রাউজার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing an empty string ("") clears the error and restores validity.',
          bn: 'একটি খালি স্ট্রিং ("") পাস করে ত্রুটি মুছে ফেলার কথা ভাবুন।'
        },
        explanation: {
          en: 'An input is considered invalid if customError is non-empty. Passing an empty string ("") resets the validity flag.',
          bn: 'খালি স্ট্রিং পাস করলেই কাস্টম ত্রুটি মুছে গিয়ে ফিল্ডটি আবার সাধারণ ও বৈধ অবস্থায় ফিরে আসে।'
        }
      },
      {
        id: 'q-dom-focusin-bubbling',
        kind: 'mcq',
        topic: 'Why focusin is used for event delegation instead of focus',
        question: {
          en: 'Why do developers use the "focusin" event instead of the "focus" event when implementing event delegation on a form?',
          bn: 'ফর্মে ইভেন্ট ডেলিগেশন বাস্তবায়নের সময় ডেভেলপাররা কেন "focus"-এর বদলে "focusin" ইভেন্ট ব্যবহার করেন?'
        },
        options: [
          {
            en: '"focusin" bubbles up to parent ancestors, whereas "focus" does not bubble',
            bn: '"focusin" ইভেন্ট প্যারেন্টদের মধ্য দিয়ে ওপরে বাবল হয়, কিন্তু "focus" ইভেন্ট বাবল হয় না'
          },
          {
            en: '"focus" is deprecated in HTML5',
            bn: '"focus" আধুনিক এইচটিএমএলে বাতিল হয়ে গেছে'
          },
          {
            en: '"focusin" only triggers on submit buttons',
            bn: '"focusin" কেবল সাবমিট বাটনে কাজ করে'
          },
          {
            en: '"focusin" runs faster on mobile devices',
            bn: '"focusin" মোবাইলে দ্রুত রান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'focusin bubbles; focus does not bubble.',
          bn: 'focusin বাবল হয়ে প্যারেন্টে পৌঁছানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Standard focus and blur events do not bubble. The standard focusin and focusout events bubble, enabling delegation.',
          bn: 'focus ইভেন্ট ওপরে ছড়ায় না, কিন্তু focusin বাবল হয়ে প্যারেন্টে ওঠে বলে এটি দিয়ে সহজেই ডেলিগেশন করা যায়।'
        }
      },
      {
        id: 'q-dom-fromentries-serialization',
        kind: 'mcq',
        topic: 'Converting FormData to plain JavaScript object',
        question: {
          en: 'Which one-line JavaScript expression converts a FormData instance named "formData" into a plain key-value JSON object?',
          bn: 'কোন এক লাইনের জাভাস্ক্রিপ্ট কোড "formData" নামের একটি FormData অবজেক্টকে সাধারণ কি-ভ্যালু জেএসন অবজেক্টে রূপান্তর করে?'
        },
        options: [
          {
            en: 'Object.fromEntries(formData.entries());',
            bn: 'Object.fromEntries(formData.entries());'
          },
          {
            en: 'JSON.parse(formData);',
            bn: 'JSON.parse(formData);'
          },
          {
            en: 'formData.toJSON();',
            bn: 'formData.toJSON();'
          },
          {
            en: 'Array.from(formData);',
            bn: 'Array.from(formData);'
          }
        ],
        answer: 0,
        hint: {
          en: 'Object.fromEntries converts iterable key-value pairs into an object.',
          bn: 'Object.fromEntries মেথড ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Object.fromEntries(formData.entries()) constructs a standard JavaScript dictionary from the iterable form entries.',
          bn: 'Object.fromEntries(formData.entries()) সহজেই ফর্মের সমস্ত কি-ভ্যালু জোড়াকে একটি পরিষ্কার অবজেক্টে রূপান্তর করে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-measuring-glass',
    tech: 'dom',
    title: {
      en: 'Layout Thrashing, Reflow & Repaint Optimization',
      bn: 'লেআউট থ্র্যাশিং, রিফ্লো ও রিপেইন্ট অপ্টিমাইজেশন'
    }
  }
};
