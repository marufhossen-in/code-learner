import type { Lesson } from '../../../lib/types';

export const FormsAndFeedbackLesson: Lesson = {
  slug: 'forms-and-feedback',
  tech: 'accessibility',
  title: {
    en: 'Accessible Forms, Error Recovery & Autocomplete',
    bn: 'অ্যাক্সেসিবল ফর্ম, এরর রিকভারি ও অটোকমপ্লিট'
  },
  summary: {
    en: 'Forms are the primary transactional gateways of the web, powering authentication, e-commerce checkouts, and government services. An inaccessible form prevents disabled users from buying goods or accessing essential civic services. WCAG Success Criterion 3.3.1 requires clear error identification, Criterion 3.3.2 demands clear labels or instructions, and Criterion 3.3.3 mandates actionable error suggestions. In this lesson, you will link form fields to visible label elements, wire up dynamic error messages using aria-invalid and aria-describedby, and implement accessible error summaries with programmatic focus shifts. You will also discover why disabling submit buttons harms accessibility and learn how HTML autocomplete attributes reduce cognitive burden.',
    bn: 'ওয়েবসাইটে যেকোনো লেনদেন, লগইন, কেনাকাটা কিংবা সরকারি সেবা গ্রহণের প্রধান মাধ্যম হলো ফর্ম। একটি ফর্ম অ্যাক্সেসিবল না হলে প্রতিবন্ধী মানুষ প্রয়োজনীয় সেবা থেকে সম্পূর্ণ বঞ্চিত হন। ডব্লিউসিএজি নিয়ম ৩.৩.১ অনুযায়ী ভুলের স্পষ্ট শনাক্তকরণ, ৩.৩.২ অনুযায়ী স্পষ্ট লেবেল ও নির্দেশনা এবং ৩.৩.৩ অনুযায়ী ভুল সংশোধনের পরামর্শ দেওয়া বাধ্যতামূলক। এই পাঠে ইনপুট বক্সের সাথে দৃশ্যমান লেবেল যুক্ত করা, aria-invalid এবং aria-describedby দিয়ে ভুলের বার্তা শোনানো এবং ফর্মের শুরুতে এরর সামারি বানিয়ে ফোকাস পাঠানোর কৌশল শেখানো হয়েছে। এ ছাড়া সাবমিট বাটন ডিসেবল রাখার মারাত্মক অপকারিতা এবং অটোকমপ্লিটের মাধ্যমে মানসিক চাপ কমানোর নিয়ম আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Predictable, Forgiving Form Interactions',
        bn: 'মূল ধারণা: পূর্বাভাসযোগ্য ও ক্ষমাশীল ফর্ম ইন্টারঅ্যাকশন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you build digital forms, complex multi-step inputs create severe barriers for people using screen readers or voice control software. If a form input lacks an explicit label, assistive technology cannot state what information the user must provide. Furthermore, when validation fails, simply tinting an input border red leaves blind visitors completely unaware of what failed or how to correct the mistake.',
        bn: 'আপনি যখন ডিজিটাল ফর্ম তৈরি করেন, জটিল ইনপুট বক্সগুলো স্ক্রিন রিডার বা ভয়েস কন্ট্রোল ব্যবহারকারীদের জন্য বড় বাধা হতে পারে। ইনপুটের সাথে সুনির্দিষ্ট লেবেল না থাকলে ব্যবহারকারী বুঝতেই পারেন না সেখানে কী লিখতে হবে। উপরন্তু ভুল হলে কেবল বর্ডার লাল করে রাখলে দৃষ্টিহীন মানুষ জানতেও পারেন না কোন ফিল্ডে ভুল হয়েছে বা তা কীভাবে সংশোধন করতে হবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Explicit Label Association',
          def: {
            en: 'Pairing an HTML <label for="field-id"> directly with an <input id="field-id"> so clicking the label focuses the field and screen readers announce its title',
            bn: 'এইচটিএমএল লেবেলের for অ্যাট্রিবিউট এবং ইনপুটের id মিলিয়ে দেওয়া, যাতে লেবেলে ক্লিক করলেই ইনপুটে ফোকাস যায় এবং স্ক্রিন রিডার নাম পড়ে'
          }
        },
        {
          term: 'aria-invalid',
          def: {
            en: 'An ARIA state attribute ("true" or "false") indicating whether the current user value passes validation constraints',
            bn: 'একটি অ্যাট্রিবিউট যা মান সঠিক না ভুল তা স্ক্রিন রিডারকে জানিয়ে দেয়'
          }
        },
        {
          term: 'aria-describedby',
          def: {
            en: 'An attribute linking a form control to the element containing helper instructions or inline validation error messages',
            bn: 'একটি অ্যাট্রিবিউট যা ইনপুট বক্সের সাথে সহায়ক নির্দেশ বা ভুলের ব্যাখ্যাকে যুক্ত করে'
          }
        },
        {
          term: 'Error Summary Pattern',
          def: {
            en: 'An accessible banner placed at the top of a failed form listing all validation errors, receiving programmatic focus on submit failure',
            bn: 'ফর্মের শুরুতে তৈরি একটি তালিকা যেখানে সব ভুলের বিবরণ থাকে এবং সাবমিট ব্যর্থ হলে কিবোর্ড ফোকাস সরাসরি সেখানে চলে যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'form-anatomy-table',
      text: {
        en: 'Accessible Form Field Architecture',
        bn: 'অ্যাক্সেসিবল ফর্ম ফিল্ডের কাঠামো'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Three Essential Attributes for Production Form Accessibility',
        bn: 'প্রোডাকশন ফর্মে অ্যাক্সেসিবিলিটির জন্য ৩টি অপরিহার্য অ্যাট্রিবিউট'
      },
      head: [
        { en: 'HTML Attribute', bn: 'এইচটিএমএল অ্যাট্রিবিউট' },
        { en: 'Technical Purpose', bn: 'কারিগরি উদ্দেশ্য' },
        { en: 'Screen Reader User Experience', bn: 'স্ক্রিন রিডারের প্রতিক্রিয়া' }
      ],
      rows: [
        [
          { en: '<label for="email-input">', bn: '<label for="email-input">' },
          { en: 'Establishes the permanent accessible name of the input control', bn: 'ইনপুটের স্থায়ী অ্যাক্সেসিবল নাম নির্ধারণ করে' },
          { en: 'Speaks "Email address, edit text" immediately upon focusing field', bn: 'ফোকাস আসামাত্র উচ্চারণ করে "Email address, edit text"' }
        ],
        [
          { en: 'aria-invalid="true"', bn: 'aria-invalid="true"' },
          { en: 'Signals a validation constraint failure to assistive technology', bn: 'তথ্য ভুল বা অগ্রহণযোগ্য হয়েছে তা নির্দেশ করে' },
          { en: 'Vocalizes "Invalid entry" or triggers an audible error alert chime', bn: 'সতর্ক করে বলে "Invalid entry" বা বিশেষ শব্দ বাজায়' }
        ],
        [
          { en: 'aria-describedby="email-error"', bn: 'aria-describedby="email-error"' },
          { en: 'Connects the input to detailed inline error explanation text', bn: 'ইনপুটের সাথে ভুলের বিস্তারিত বর্ণনামূলক বাক্য যুক্ত করে' },
          { en: 'Reads "Please enter a valid email address with an @ symbol" after name', bn: 'নামের পর ভুলের কারণ পড়ে শোনায়, যেমন "সঠিক ইমেইল ঠিকানা দিন"' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Form Error Recovery & Field Audit',
        bn: 'চালনাযোগ্য সিমুলেশন: ফর্ম এরর রিকভারি ও ফিল্ড অডিট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script evaluates form field validation states, identifying invalid inputs and constructing an accessible error summary payload:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি একটি ফর্মের ফিল্ডগুলো পরীক্ষা করে ভুল ইনপুট শনাক্ত করে এবং একটি অ্যাক্সেসিবল এরর সামারি তৈরি করে:'
      }
    },
    {
      type: 'code',
      id: 'a11y-form-errors-sim',
      lang: 'javascript',
      code: `// Form Validation Error Summary and Audit Simulator
const formFields = [
  { id: 'email', value: 'invalid-email', hasError: true, errorId: 'email-err', errorText: 'Please enter a valid email address' },
  { id: 'password', value: 'secret123', hasError: false, errorId: null, errorText: null }
];

const totalFields = formFields.length;
const invalidFields = formFields.filter(f => f.hasError);
const validFields = formFields.filter(f => !f.hasError);

console.log('Total audited form fields:', totalFields);
// -> Total audited form fields: 2

console.log('Count of invalid inputs requiring user remediation:', invalidFields.length);
// -> Count of invalid inputs requiring user remediation: 1

console.log('Count of valid form inputs passing constraints:', validFields.length);
// -> Count of valid form inputs passing constraints: 1

console.log('Constructed accessible error message payload:', invalidFields[0].errorText);
// -> Constructed accessible error message payload: Please enter a valid email address`,
      caption: {
        en: 'Figure 1: Form audit evaluates 2 total fields, detecting 1 invalid field and 1 valid field while wiring the error payload to aria-describedby',
        bn: 'চিত্র ১: ফর্ম অডিটে মোট ২টি ফিল্ডের মধ্যে ১টি ভুল ও ১টি সঠিক পাওয়া গেছে এবং ভুলের বার্তাটি aria-describedby-তে যুক্ত হয়েছে'
      }
    },
    {
      type: 'heading',
      id: 'disabled-buttons-pitfall',
      text: {
        en: 'Why Disabling Submit Buttons is an Accessibility Trap',
        bn: 'সাবমিট বাটন নিষ্ক্রিয় রাখা কেন একটি অ্যাক্সেসিবিলিটি ট্র্যাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Many web developers write code that keeps the submit button disabled until all required fields are filled. When a user with a cognitive disability or a screen reader fills out the form and makes a minor formatting error, the submit button remains completely non-functional without explaining why. Disabled elements cannot receive keyboard focus or announce tooltips. Instead, keep the submit button enabled, validate on submission, and programmatically guide the user to the invalid inputs.',
        bn: 'অনেক ডেভেলপার সব ঘর পূরণ না হওয়া পর্যন্ত সাবমিট বাটনটি নিষ্ক্রিয় (disabled) করে রাখেন। কিন্তু কোনো ব্যবহারকারী ছোটখাটো ভুল করলে বোতামটি কেন কাজ করছে না তা তিনি বুঝতে পারেন না। নিষ্ক্রিয় বোতামে কিবোর্ড ফোকাস যায় না এবং স্ক্রিন রিডার কোনো সতর্কবার্তাও শোনাতে পারে না। তাই সাবমিট বোতাম সবসময় সক্রিয় রাখা উচিত, যাতে ক্লিকে ভুলগুলো স্পষ্ট হয়ে ওঠে এবং ব্যবহারকারী সহজে তা ঠিক করতে পারেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'HTML autocomplete Attributes',
          def: {
            en: 'Standardized values (email, name, street-address, tel) allowing browsers and password managers to autofill fields, reducing cognitive fatigue',
            bn: 'সুনির্দিষ্ট মান যা ব্রাউজারকে স্বয়ংক্রিয়ভাবে তথ্য পূরণ করতে দেয়, ফলে টাইপিংয়ের কষ্ট ও মানসিক চাপ কমে'
          }
        },
        {
          term: 'WCAG 3.3.8 Accessible Authentication',
          def: {
            en: 'A WCAG 2.2 criterion requiring that login flows must not rely on cognitive function tests like memorizing passwords or solving puzzles',
            bn: 'ডব্লিউসিএজি ২.২-এর নিয়ম যা বলে লগইন করার জন্য জটিল ধাঁধা বা মুখস্থবিদ্যার মতো মানসিক পরীক্ষার উপর নির্ভর করা যাবে না'
          }
        },
        {
          term: 'Accessible Error Recovery',
          def: {
            en: 'Guiding users to fix submission errors with descriptive error text linked directly to the invalid inputs',
            bn: 'ভুল ইনপুটের সাথে সরাসরি বর্ণনামূলক মেসেজ যুক্ত করে ব্যবহারকারীকে সহজে ত্রুটি সংশোধনে সহায়তা করা'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-label-association-ex',
      kind: 'mcq',
      topic: 'Associating form labels with inputs properly',
      question: {
        en: 'Which HTML markup correctly associates a visible text label with an input field for assistive technologies and mobile tap targets?',
        bn: 'কোন এইচটিএমএল কোডটি অ্যাসিস্টিভ ডিভাইসের জন্য এবং সহজে ট্যাপ করার সুবিধার জন্য ইনপুটের সাথে লেবেলকে সঠিকভাবে সংযুক্ত করে?'
      },
      options: [
        {
          en: '<label for="user-email">Email</label><input id="user-email" type="email">',
          bn: '<label for="user-email">Email</label><input id="user-email" type="email">'
        },
        {
          en: '<span>Email</span><input placeholder="Email">',
          bn: '<span>Email</span><input placeholder="Email">'
        },
        {
          en: '<input title="Email" value="Email">',
          bn: '<input title="Email" value="Email">'
        },
        {
          en: '<div class="label">Email</div><input>',
          bn: '<div class="label">Email</div><input>'
        }
      ],
      answer: 0,
      hint: {
        en: 'The label for attribute must exactly match the input id attribute.',
        bn: 'লেবেলের for এবং ইনপুটের id হুবহু এক হতে হবে।'
      },
      explanation: {
        en: 'Matching label for with input id creates an explicit program relationship in the accessibility tree and enlarges the clickable target area.',
        bn: 'for এবং id এক থাকলে স্ক্রিন রিডার নাম চিনতে পারে এবং লেবেলে চাপলেও ইনপুট বক্স সিলেক্ট হয়।'
      }
    },
    {
      id: 'a11y-disabled-button-risk-ex',
      kind: 'mcq',
      topic: 'Accessibility issues caused by disabled submit buttons',
      question: {
        en: 'Why is keeping a form submit button disabled (<button disabled>) until form validity is met considered an accessibility anti-pattern?',
        bn: 'ফর্মের সব তথ্য সঠিক না হওয়া পর্যন্ত সাবমিট বাটন ডিসেবল (<button disabled>) রাখা কেন একটি ভুল পদ্ধতি হিসেবে গণ্য হয়?'
      },
      options: [
        {
          en: 'Disabled buttons cannot receive keyboard focus, leaving blind and cognitive disability users completely unaware of why the form will not submit',
          bn: 'নিষ্ক্রিয় বোতামে কিবোর্ড ফোকাস যায় না, ফলে ফর্মটি কেন সাবমিট হচ্ছে না তা দৃষ্টিহীন বা সাধারণ ব্যবহারকারী বুঝতে পারেন না'
        },
        {
          en: 'Disabled buttons cause the computer screen to turn black',
          bn: 'নিষ্ক্রিয় বোতাম কম্পিউটার স্ক্রিন কালো করে ফেলে'
        },
        {
          en: 'Because HTML buttons cannot be disabled in standard web browsers',
          bn: 'কারণ সাধারণ ব্রাউজারে এইচটিএমএল বোতাম নিষ্ক্রিয় করা অসম্ভব'
        },
        {
          en: 'It increases network bandwidth by 500 percent',
          bn: 'এটি ইন্টারনেটের ডেটা খরচ ৫০০ শতাংশ বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Disabled controls block focus and silence error explanations.',
        bn: 'নিষ্ক্রিয় থাকলে ফোকাস না যাওয়া এবং ভুলের কারণ না জানার কথা ভাবুন।'
      },
      explanation: {
        en: 'An enabled button allows keyboard users to trigger validation, which then announces specific error messages and shifts focus to the first invalid field.',
        bn: 'বোতাম সক্রিয় থাকলে ক্লিকে ভুলগুলো সামনে আসে এবং ব্যবহারকারী তা দেখে সহজেই সংশোধন করতে পারেন।'
      }
    },
    {
      id: 'a11y-aria-describedby-error-ex',
      kind: 'mcq',
      topic: 'Wiring form error messages with aria-describedby',
      question: {
        en: 'When an input field fails validation, what ARIA attribute binds the input directly to the specific error message text below it?',
        bn: 'ইনপুটের তথ্য ভুল হলে কোন এআরআইএ অ্যাট্রিবিউট ইনপুট বক্সটিকে নিচে থাকা ভুলের বর্ণনার সাথে সরাসরি যুক্ত করে?'
      },
      options: [
        {
          en: 'aria-describedby="error-element-id"',
          bn: 'aria-describedby="error-element-id"'
        },
        {
          en: 'aria-hidden="true"',
          bn: 'aria-hidden="true"'
        },
        {
          en: 'aria-live="off"',
          bn: 'aria-live="off"'
        },
        {
          en: 'role="alertdialog"',
          bn: 'role="alertdialog"'
        }
      ],
      answer: 0,
      hint: {
        en: 'aria-describedby links descriptions to interactive inputs.',
        bn: 'সহায়ক বর্ণনা যুক্ত করার অ্যাট্রিবিউটের কথা ভাবুন।'
      },
      explanation: {
        en: 'aria-describedby instructs assistive technology to read the referenced error explanation immediately after vocalizing the input label and invalid state.',
        bn: 'এই অ্যাট্রিবিউট স্ক্রিন রিডারকে লেবেল পড়ার পরপরই ভুলের বাক্যটি পড়ে শোনাতে নির্দেশ দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-forms-and-feedback',
    title: {
      en: 'Accessible Forms & Error Recovery Quiz',
      bn: 'অ্যাক্সেসিবল ফর্ম ও এরর রিকভারি কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-placeholder-myth',
        kind: 'mcq',
        topic: 'Why placeholder text cannot replace HTML label elements',
        question: {
          en: 'Why is relying on input placeholder text as a replacement for an HTML <label> an accessibility failure?',
          bn: 'এইচটিএমএল <label>-এর বদলে কেবল ইনপুটের placeholder টেক্সটের উপর নির্ভর করা কেন একটি ব্যর্থতা?'
        },
        options: [
          {
            en: 'Placeholders disappear as soon as the user starts typing, typically fail color contrast minimums, and are ignored by many screen readers',
            bn: 'টাইপ শুরু করলেই প্লেসহোল্ডার মুছে যায়, এতে প্রয়োজনীয় কনট্রাস্ট থাকে না এবং বহু স্ক্রিন রিডার এটি পড়ে না'
          },
          {
            en: 'Placeholders infect the computer with malicious viruses',
            bn: 'প্লেসহোল্ডার কম্পিউটারে ভাইরাস ছড়ায়'
          },
          {
            en: 'Placeholders prevent users from typing capital letters',
            bn: 'প্লেসহোল্ডার ব্যবহারকারীকে বড় হাতের অক্ষর লিখতে দেয় না'
          },
          {
            en: 'It causes the form to submit to the wrong web server',
            bn: 'এটি ফর্মকে ভুল সার্ভারে সাবমিট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Vanishing text on typing and poor color contrast.',
          bn: 'টাইপ করলে লেখা হারিয়ে যাওয়া এবং হালকা রঙের কথা ভাবুন।'
        },
        explanation: {
          en: 'Placeholders vanish during input, leaving users with memory impairments unable to verify what data the field requested.',
          bn: 'একবার লেখা শুরু করলে প্লেসহোল্ডার মিলিয়ে যায়, ফলে ব্যবহারকারী ভুলে যেতে পারেন সেখানে কী চাওয়া হয়েছিল।'
        }
      },
      {
        id: 'q-a11y-error-summary-focus',
        kind: 'mcq',
        topic: 'Focus management in accessible error summary banners',
        question: {
          en: 'When a user submits a form with multiple errors, how should focus be managed for the error summary container?',
          bn: 'একাধিক ভুলসহ ফর্ম সাবমিট হলে শুরুতে থাকা এরর সামারি বক্সে কিবোর্ড ফোকাস কীভাবে পরিচালনা করা উচিত?'
        },
        options: [
          {
            en: 'Assign tabindex="-1" to the error summary container and invoke errorSummaryElement.focus() via JavaScript so screen readers vocalize the full list of errors',
            bn: 'এরর সামারি বক্সে tabindex="-1" দিয়ে স্ক্রিপ্টের মাধ্যমে focus() পাঠাতে হবে যাতে স্ক্রিন রিডার ভুলের পুরো তালিকা পড়ে শোনায়'
          },
          {
            en: 'Move focus to the browser address bar',
            bn: 'ব্রাউজারের এড্রেস বারে ফোকাস পাঠাতে হবে'
          },
          {
            en: 'Reload the web page and clear all filled inputs',
            bn: 'পেজ রিলোড করে সব ইনপুটের লেখা মুছে দিতে হবে'
          },
          {
            en: 'Keep focus on the submit button permanently',
            bn: 'ফোকাস সবসময় সাবমিট বাটনেই রেখে দিতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Programmatic focus to an error summary using tabindex="-1".',
          bn: 'tabindex="-1" দিয়ে কোডের মাধ্যমে ফোকাস পাঠানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Shifting focus to an error summary immediately alerts keyboard and screen reader visitors that the submission failed and lists all necessary corrections.',
          bn: 'এরর সামারিতে ফোকাস পাঠালে দৃষ্টিহীন ব্যবহারকারী সাথে সাথে জেনে যান ঠিক কী কী ভুল হয়েছে।'
        }
      },
      {
        id: 'q-a11y-autocomplete-attributes',
        kind: 'mcq',
        topic: 'Cognitive benefits of HTML autocomplete attributes',
        question: {
          en: 'Under WCAG 3.3.7 and 3.3.8, how do standardized autocomplete attributes (such as autocomplete="name") support users with cognitive disabilities?',
          bn: 'ডব্লিউসিএজি ৩.৩.৭ এবং ৩.৩.৮ অনুযায়ী autocomplete="name"-এর মতো অ্যাট্রিবিউট মানসিক বা স্মৃতিভ্রমের সমস্যায় আক্রান্ত মানুষদের কীভাবে সাহায্য করে?'
        },
        options: [
          {
            en: 'They allow browsers and assistive tools to auto-fill familiar personal information, minimizing memory recall and manual typing demands',
            bn: 'এগুলো ব্রাউজারকে স্বয়ংক্রিয়ভাবে চেনা তথ্য পূরণ করতে দেয়, ফলে বারবার মুখস্থ করা বা টাইপ করার মানসিক ক্লান্তি দূর হয়'
          },
          {
            en: 'They encrypt personal credit card numbers into bitcoin',
            bn: 'এগুলো ক্রেডিট কার্ডের নম্বরকে বিটকয়েনে রূপান্তর করে'
          },
          {
            en: 'They automatically sign users up for spam email newsletters',
            bn: 'এগুলো অপ্রয়োজনীয় বিজ্ঞাপনী ইমেইলে নাম নিবন্ধন করিয়ে দেয়'
          },
          {
            en: 'They convert English text into hexadecimal machine code',
            bn: 'এগুলো টেক্সটকে মেশিন কোডে পরিবর্তন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Autofill reduces manual typing and memory recall burdens.',
          bn: 'স্বয়ংক্রিয় তথ্য পূরণ এবং টাইপিংয়ের চাপ কমানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Autocomplete relieves cognitive strain and physical typing effort by letting user agents supply saved credentials automatically.',
          bn: 'অটোকমপ্লিট ব্যবহারকারীর মুখস্থ করার চাপ কমিয়ে সহজেই ফর্ম পূরণে সাহায্য করে।'
        }
      },
      {
        id: 'q-a11y-error-field-count',
        kind: 'mcq',
        topic: 'Interpreting form audit results in the simulation',
        question: {
          en: 'In the form audit simulation, out of 2 total fields tested, how many invalid inputs required user correction?',
          bn: 'সিমুলেশনে মোট ২টি ফিল্ড পরীক্ষার পর কয়টি ফিল্ডে ভুল পাওয়া গেছে যা ব্যবহারকারীকে সংশোধন করতে হবে?'
        },
        options: [
          {
            en: '1 invalid input field (email)',
            bn: '১টি ভুল ফিল্ড (ইমেইল)'
          },
          {
            en: '10 invalid input fields',
            bn: '১০টি ভুল ফিল্ড'
          },
          {
            en: '0 invalid input fields (both passed)',
            bn: '০টি ভুল ফিল্ড (উভয়টি পাস করেছে)'
          },
          {
            en: '2 invalid input fields (both failed)',
            bn: '২টি ভুল ফিল্ড (উভয়টি ব্যর্থ হয়েছে)'
          }
        ],
        answer: 0,
        hint: {
          en: '1 field had an error, while 1 field passed.',
          bn: '১টি ফিল্ডে ভুল ছিল এবং ১টি সঠিক ছিল।'
        },
        explanation: {
          en: 'The simulation evaluated 2 fields: the password passed, while the email was invalid, yielding exactly 1 defect for remediation.',
          bn: 'সিমুলেশনে মোট ২টি ফিল্ডের মধ্যে পাসওয়ার্ড সঠিক ছিল কিন্তু ইমেইল ফরম্যাট ভুল হওয়ায় ঠিক ১টি ত্রুটি ধরা পড়ে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-final-inspection',
    tech: 'accessibility',
    title: {
      en: 'Automated Testing, Manual Auditing & Production VPAT Compliance',
      bn: 'অটোমেটেড টেস্টিং, ম্যানুয়াল অডিটিং ও প্রোডাকশন ভিপিএটি কমপ্লায়েন্স'
    }
  }
};
