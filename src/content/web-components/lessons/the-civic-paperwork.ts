import type { Lesson } from '../../../lib/types';

export const TheCivicPaperworkLesson: Lesson = {
  slug: 'the-civic-paperwork',
  tech: 'web-components',
  title: {
    en: 'Form-Associated Custom Elements — ElementInternals, Validation, and Lifecycle Hooks',
    bn: 'ফর্ম-অ্যাসোসিয়েটেড কাস্টম এলিমেন্টস — ElementInternals, ভ্যালিডেশন এবং লাইফসাইকেল হুক'
  },
  summary: {
    en: 'Standard custom elements placed inside an HTML form cannot naturally submit values or participate in constraint validation. Form-Associated Custom Elements solve this limitation natively using the ElementInternals API. In this lesson, we explore static formAssociated registration, submitting payloads with setFormValue, reporting validation errors with setValidity, and responding to form resets, disables, and state restorations.',
    bn: 'সাধারণ কাস্টম উপাদানগুলো এইচটিএমএল ফর্মের ভেতরে থাকলে স্বাভাবিকভাবে ডেটা সাবমিট বা ভ্যালিডেশন করতে পারে না। ফর্ম-অ্যাসোসিয়েটেড কাস্টম এলিমেন্টস ElementInternals এপিআই ব্যবহার করে এই সমস্যার সমাধান করে। এই পাঠে আমরা static formAssociated ঘোষণা, setFormValue দিয়ে ডেটা প্রেরণ, setValidity দিয়ে ভ্যালিডেশন এরর প্রদান এবং ফর্মের রিসেট ও নিষ্ক্রিয়তা পরিচালনা শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'form-association-overview',
      text: {
        en: 'Participating in Native HTML Forms',
        bn: 'নেটিভ এইচটিএমএল ফর্মে সরাসরি অংশগ্রহণ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build custom inputs such as date-pickers or star ratings, placing an <input> tag inside a shadow root does not submit its value to the parent <form>. The browser requires the host custom element to declare itself as form-associated and manage form participation via ElementInternals.',
        bn: 'কাস্টম ইনপুট যেমন ডেট-পিকার বা স্টার রেটিং উইজেট তৈরির সময় শ্যাডো রুটের ভেতর <input> রাখলে তা পেরেন্ট <form>-এ ডেটা সাবমিট করতে পারে না। এজন্য ব্রাউজার কাস্টম এলিমেন্টটিকে ফর্ম-অ্যাসোসিয়েটেড হিসেবে ঘোষণা করতে এবং ElementInternals দিয়ে ফর্মের সাথে সরাসরি সংযোগ স্থাপন করতে বলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'static formAssociated = true',
          def: {
            en: 'A static class property that announces to the browser that this custom element participates in HTML form lifecycles.',
            bn: 'একটি স্ট্যাটিক ক্লাস প্রোপার্টি যা ব্রাউজারকে নিশ্চিত করে যে এই কাস্টম উপাদানটি এইচটিএমএল ফর্ম লাইফসাইকেলে অংশ নেবে।'
          }
        },
        {
          term: 'ElementInternals',
          def: {
            en: 'An internal controller object issued by this.attachInternals() providing form values, validation flags, and accessibility roles.',
            bn: 'this.attachInternals() দিয়ে পাওয়া একটি অভ্যন্তরীণ কন্ট্রোলার যা ফর্মের মান, ভ্যালিডেশন ও অ্যাক্সেসিবিলিটি পরিচালনা করে।'
          }
        },
        {
          term: 'setFormValue(value)',
          def: {
            en: 'The ElementInternals method that registers the current input value to be included when the form is submitted.',
            bn: 'ElementInternals-এর একটি মেথড যা ফর্ম সাবমিট হওয়ার সময় পাঠানোর জন্য বর্তমান ইনপুট মানটি ব্রাউজারে রেজিস্টার করে।'
          }
        },
        {
          term: 'setValidity(flags, message)',
          def: {
            en: 'The ElementInternals method that sets custom validity errors and integrates with native :valid and :invalid CSS states.',
            bn: 'ElementInternals-এর মেথড যা কাস্টম ভ্যালিডেশন এরর নির্ধারণ করে এবং সিএসএস :valid ও :invalid অবস্থার সাথে সমন্বয় করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'form-lifecycle-callbacks',
      text: {
        en: 'Form Lifecycle Hooks',
        bn: 'ফর্ম লাইফসাইকেল হুকসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Callback Method', bn: 'কলব্যাক মেথড' },
        { en: 'Trigger Condition', bn: 'কখন চালু হয়' },
        { en: 'Action Required', bn: 'করণীয় কাজ' }
      ],
      rows: [
        [
          { en: 'formAssociatedCallback(form)', bn: 'formAssociatedCallback(form)' },
          { en: 'When the element is attached to or detached from a parent <form>', bn: 'যখন উপাদানটি কোনো পেরেন্ট <form>-এ যুক্ত বা বিচ্ছিন্ন হয়' },
          { en: 'Store form reference or update internal submission configuration', bn: 'ফর্মের রেফারেন্স সংরক্ষণ বা সাবমিট কনফিগারেশন আপডেট করা' }
        ],
        [
          { en: 'formResetCallback()', bn: 'formResetCallback()' },
          { en: 'When the user or script triggers form.reset()', bn: 'ব্যবহারকারী বা স্ক্রিপ্ট যখন form.reset() কল করে' },
          { en: 'Revert internal component state to its initial default value', bn: 'কম্পোনেন্টের ভেতরের স্টেটকে প্রাথমিক ডিফল্ট মানে ফিরিয়ে নেওয়া' }
        ],
        [
          { en: 'formDisabledCallback(disabled)', bn: 'formDisabledCallback(disabled)' },
          { en: 'When an ancestor <fieldset disabled> or form status changes', bn: 'যখন কোনো পূর্বপুরুষ <fieldset disabled> বা ফর্ম নিষ্ক্রিয় হয়' },
          { en: 'Update internal styling and disable click event listeners', bn: 'ভেতরের স্টাইল আপডেট করা এবং ক্লিকের ইভেন্ট বন্ধ রাখা' }
        ],
        [
          { en: 'formStateRestoreCallback(state, mode)', bn: 'formStateRestoreCallback(state, mode)' },
          { en: 'During browser back/forward navigation or autofill recovery', bn: 'ব্রাউজারের ব্যাক/ফরোয়ার্ড নেভিগেশন বা অটোফিল পুনরুদ্ধারের সময়' },
          { en: 'Restore saved state from session storage snapshot', bn: 'সেশন হিস্ট্রি থেকে পূর্ববর্তী সংরক্ষিত অবস্থা ফিরিয়ে আনা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Form-Associated Stepper Input',
        bn: 'ব্যবহারিক ফর্ম-অ্যাসোসিয়েটেড স্টেপার ইনপুট'
      }
    },
    {
      type: 'code',
      code: `// 1. Create a Form-Associated Custom Element
class QuantityStepper extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    // Obtain the internal controller
    this.internals = this.attachInternals();
    this.value = 1;

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = \`
      <style>
        :host { display: inline-flex; align-items: center; gap: 6px; }
        :host(:invalid) button { border-color: #ef4444; }
        button { padding: 4px 8px; border-radius: 4px; border: 1px solid #94a3b8; }
      </style>
      <button class="dec">-</button>
      <span class="num">1</span>
      <button class="inc">+</button>
    \`;

    shadow.querySelector('.inc').onclick = () => this.update(this.value + 1);
    shadow.querySelector('.dec').onclick = () => this.update(this.value - 1);
  }

  connectedCallback() {
    this.update(this.value);
  }

  update(val) {
    this.value = Math.max(0, val);
    this.shadowRoot.querySelector('.num').textContent = this.value;

    // 2. Register value for form submission
    this.internals.setFormValue(String(this.value));

    // 3. Enforce validation constraint
    if (this.value < 1) {
      this.internals.setValidity({ rangeUnderflow: true }, 'Quantity must be at least 1');
    } else {
      this.internals.setValidity({}); // Clear validity errors
    }
  }

  formResetCallback() {
    this.update(1); // Reset to default initial value
  }
}

customElements.define('quantity-stepper', QuantityStepper);

// 4. Test within a form
const form = document.createElement('form');
const stepper = document.createElement('quantity-stepper');
stepper.setAttribute('name', 'quantity');
form.appendChild(stepper);
document.body.appendChild(form);

const formData = new FormData(form);
console.log('Form submission value:', formData.get('quantity'));
// -> Form submission value: 1
console.log('Form validity check:', stepper.internals.checkValidity());
// -> Form validity check: true`,
      caption: {
        en: 'Form-associated quantity stepper submitting minimum value 1 with validation',
        bn: 'ভ্যালিডেশনসহ সর্বনিম্ন মান ১ প্রেরণে সক্ষম ফর্ম-অ্যাসোসিয়েটেড স্টেপার'
      }
    },
    {
      type: 'heading',
      id: 'accessibility-and-labels',
      text: {
        en: 'Labels and Accessibility Integration',
        bn: 'লেবেল ও অ্যাক্সেসিবিলিটি সমন্বয়'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Label Association via internals.labels: When an HTML <label for="my-id"> references the custom element, internals.labels returns a live NodeList of all associated labels.',
          bn: '১. internals.labels দিয়ে লেবেল শনাক্তকরণ: যখন <label for="my-id"> কাস্টম উপাদানকে নির্দেশ করে, তখন internals.labels সংশ্লিষ্ট সমস্ত লেবেলের একটি লাইভ তালিকা প্রদান করে।'
        },
        {
          en: '2. Focus Delegation: By configuring delegatesFocus: true in attachShadow({ mode: "open", delegatesFocus: true }), clicking an associated <label> automatically focuses the first focusable child.',
          bn: '২. ফোকাস ডেলিগেশন: attachShadow-এ delegatesFocus: true দিলে সংশ্লিষ্ট <label>-এ ক্লিক করলে স্বয়ংক্রিয়ভাবে ভেতরের প্রথম ফোকাসযোগ্য উপাদানে ফোকাস চলে যায়।'
        },
        {
          en: '3. Constraint Validation Integration: The host component exposes standard validation methods (checkValidity(), reportValidity(), and validationMessage) by delegating to its internals.',
          bn: '৩. কনস্ট্রেইন্ট ভ্যালিডেশন মেথড: হোস্ট কম্পোনেন্ট তার internals-এর ওপর ভিত্তি করে checkValidity(), reportValidity() এবং validationMessage সমর্থন করে।'
        },
        {
          en: '4. Form Attribute Participation: The element naturally responds to the form attribute in HTML, permitting placement anywhere in the document while submitting to a remote form by ID.',
          bn: '৪. ফর্ম অ্যাট্রিবিউট সমর্থন: উপাদানটি এইচটিএমএলের form অ্যাট্রিবিউট সমর্থন করে, যার ফলে পেজের যেকোনো স্থানে থেকেও দূরবর্তী কোনো ফর্মের আইডিতে ডেটা পাঠানো যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'wc-form-ex1',
      kind: 'mcq',
      topic: 'formAssociated requirement',
      question: {
        en: 'What static property must a custom element declare to participate in HTML forms via ElementInternals?',
        bn: 'ElementInternals ব্যবহার করে এইচটিএমএল ফর্মে অংশ নিতে কাস্টম এলিমেন্ট ক্লাসে কোন স্ট্যাটিক প্রোপার্টিটি ঘোষণা করা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'static formAssociated = true;',
          bn: 'static formAssociated = true;'
        },
        {
          en: 'static isInput = true;',
          bn: 'static isInput = true;'
        },
        {
          en: 'static enableFormSubmission = true;',
          bn: 'static enableFormSubmission = true;'
        },
        {
          en: 'static inputType = "text";',
          bn: 'static inputType = "text";'
        }
      ],
      answer: 0,
      hint: {
        en: 'The specification looks for the formAssociated boolean flag on the constructor.',
        bn: 'স্পেসিফিকেশন কনস্ট্রাক্টর ফাংশনে formAssociated নামের বুলিয়ান ফ্ল্যাগটি খোঁজে।'
      },
      explanation: {
        en: 'The HTML standard requires static formAssociated = true. Without this static flag, calling this.attachInternals() throws a NotSupportedError exception when accessing form APIs.',
        bn: 'এইচটিএমএল স্ট্যান্ডার্ডে static formAssociated = true থাকা বাধ্যতামূলক। এটি ছাড়া ফর্ম সংক্রান্ত এপিআই ব্যবহার করতে গেলে NotSupportedError তৈরি হয়।'
      }
    },
    {
      id: 'wc-form-ex2',
      kind: 'mcq',
      topic: 'setFormValue role',
      question: {
        en: 'What is the purpose of this.internals.setFormValue(value)?',
        bn: 'this.internals.setFormValue(value)-এর মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'Setting the submission data that will be sent when the parent form is submitted or serialized via FormData',
          bn: 'পেরেন্ট ফর্মটি সাবমিট হলে বা FormData তৈরি করার সময় যে ডেটা পাঠানো হবে তা ব্রাউজারে সেট করা'
        },
        {
          en: 'Saving input values directly into browser localStorage',
          bn: 'ইনপুট মানগুলোকে সরাসরি ব্রাউজারের localStorage-এ সংরক্ষণ করা'
        },
        {
          en: 'Validating email address regex syntax synchronously',
          bn: 'ইমেইল অ্যাড্রেসের রেজেক্স সিনট্যাক্স সিঙ্ক্রোনাসভাবে যাচাই করা'
        },
        {
          en: 'Triggering an immediate HTTP POST request to the server',
          bn: 'সার্ভারে সাথে সাথে একটি এইচটিটিপি পোস্ট (HTTP POST) রিকোয়েস্ট পাঠানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'It registers the data payload associated with the element name attribute.',
        bn: 'এটি উপাদানের name অ্যাট্রিবিউটের সাথে প্রেরিতব্য ডেটা রেজিস্টার করে।'
      },
      explanation: {
        en: 'setFormValue informs the browser of the value associated with the element. When the form submits, this value is paired with the element name attribute.',
        bn: 'setFormValue ব্রাউজারকে জানিয়ে দেয় উপাদানের মান কত। ফর্ম সাবমিট হলে এই মানটি উপাদানের নামের সাথে সার্ভারে চলে যায়।'
      }
    },
    {
      id: 'wc-form-ex3',
      kind: 'mcq',
      topic: 'clearing validation errors',
      question: {
        en: 'How do you clear all custom validity errors on an ElementInternals instance?',
        bn: 'ElementInternals ইনস্ট্যান্সে থাকা সমস্ত কাস্টম ভ্যালিডেশন এরর কীভাবে পরিষ্কার করতে হয়?'
      },
      options: [
        {
          en: 'By calling this.internals.setValidity({}) with an empty flags object',
          bn: 'একটি খালি ফ্ল্যাগ অবজেক্ট দিয়ে this.internals.setValidity({}) কল করে'
        },
        {
          en: 'By deleting the internals property from the instance',
          bn: 'ইনস্ট্যান্স থেকে internals প্রোপার্টিটি ডিলিট করে দিয়ে'
        },
        {
          en: 'By reloading the webpage using window.location.reload()',
          bn: 'window.location.reload() দিয়ে পুরো ওয়েবপেজ রিলোড করে'
        },
        {
          en: 'By calling this.internals.resetValidityErrors()',
          bn: 'this.internals.resetValidityErrors() মেথড কল করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pass an empty object to setValidity to erase all active error flags.',
        bn: 'সমস্ত এরর মুছতে setValidity-তে খালি একটি অবজেক্ট পাঠান।'
      },
      explanation: {
        en: 'Calling setValidity({}) removes all active validity error flags, restoring the element to a valid state and clearing :invalid pseudo-class styling.',
        bn: 'setValidity({}) কল করলে সমস্ত ত্রুটির ফ্ল্যাগ মুছে যায়, ফলে উপাদানটি বৈধ অবস্থায় ফিরে আসে এবং :invalid সিএসএস স্টাইল অপসারিত হয়।'
      }
    },
    {
      id: 'wc-form-ex4',
      kind: 'mcq',
      topic: 'formResetCallback invocation',
      question: {
        en: 'When is the formResetCallback() lifecycle method invoked by the browser?',
        bn: 'ব্রাউজার কখন formResetCallback() লাইফসাইকেল মেথডটি চালু করে?'
      },
      options: [
        {
          en: 'When the containing form element undergoes a reset event (e.g. form.reset() or clicking a reset button)',
          bn: 'যখন সংশ্লিষ্ট ফর্ম উপাদানে কোনো রিসেট ইভেন্ট ঘটে (যেমন form.reset() বা রিসেট বাটনে ক্লিক)'
        },
        {
          en: 'Every time the user submits the form to the server',
          bn: 'ব্যবহারকারী যখনই ফর্মটি সার্ভারে সাবমিট করে তখন'
        },
        {
          en: 'When the browser tab loses focus or is minimized',
          bn: 'যখন ব্রাউজার ট্যাবটি মিনিমাইজ করা হয় বা ফোকাস হারায়'
        },
        {
          en: 'When the custom element is removed from the DOM',
          bn: 'যখন কাস্টম উপাদানটিকে ডম থেকে মুছে ফেলা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'It gives the custom control an opportunity to reset internal state to defaults.',
        bn: 'এটি কাস্টম উপাদানকে তার ভেতরের মান ডিফল্টে ফিরিয়ে নেওয়ার সুযোগ দেয়।'
      },
      explanation: {
        en: 'formResetCallback is executed during form reset, allowing custom elements to revert internal inputs and values to their initial default states.',
        bn: 'ফর্ম রিসেট হওয়ার সময় formResetCallback চালু হয়, যাতে কাস্টম উপাদান তার ভেতরের মানগুলোকে প্রাথমিক অবস্থায় ফিরিয়ে নিতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'paperwork-quiz',
    title: {
      en: 'Form-Associated Custom Elements Quiz',
      bn: 'ফর্ম-অ্যাসোসিয়েটেড কাস্টম এলিমেন্টস কুইজ'
    },
    questions: [
      {
        id: 'q-inner-input-vs-face',
        kind: 'mcq',
        topic: 'shadow input limitation',
        question: {
          en: 'Why does placing a standard <input name="age"> inside a regular shadow root fail to submit with a parent <form>?',
          bn: 'সাধারণ শ্যাডো রুটের ভেতর <input name="age"> রাখলে তা পেরেন্ট <form>-এর সাথে কেন সাবমিট হতে পারে না?'
        },
        options: [
          {
            en: 'Form submission algorithms only collect form controls present in the light DOM; shadow DOM boundaries isolate inputs from parent forms',
            bn: 'ফর্ম সাবমিশন শুধু লাইট ডমের উপাদানগুলো সংগ্রহ করে; শ্যাডো বাউন্ডারি ভেতরের ইনপুটকে বাইরের ফর্ম থেকে বিচ্ছিন্ন রাখে'
          },
          {
            en: 'Shadow roots automatically convert all input tags into text paragraphs',
            bn: 'শ্যাডো রুট স্বয়ংক্রিয়ভাবে সমস্ত ইনপুট ট্যাগকে সাধারণ টেক্সটে রূপান্তরিত করে'
          },
          {
            en: 'Browsers require a monthly paid subscription to submit shadow inputs',
            bn: 'শ্যাডো ইনপুট সাবমিট করার জন্য ব্রাউজারের কোনো বিশেষ সাবস্ক্রিপশন প্রয়োজন হয়'
          },
          {
            en: 'Shadow DOM does not support numeric or text data types',
            bn: 'শ্যাডো ডম কোনো টেক্সট বা সংখ্যার ডেটা টাইপ সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Parent forms cannot peer across shadow boundaries to find input tags.',
          bn: 'বাইরের ফর্ম শ্যাডো বাউন্ডারি ভেদ করে ভেতরের ইনপুট খুঁজতে পারে না।'
        },
        explanation: {
          en: 'The standard form submission algorithm queries light DOM children of the form. Inputs hidden inside a shadow root are excluded unless the host uses Form-Associated Custom Elements.',
          bn: 'ফর্ম সাবমিশন কেবল সরাসরি পেরেন্ট ফর্মে থাকা উপাদানগুলোকে পড়ে। শ্যাডো রুটের ভেতরের ইনপুটকে গ্রাহ্য করতে হলে হোস্ট উপাদানটিকে ফর্ম-অ্যাসোসিয়েটেড হতে হয়।'
        }
      },
      {
        id: 'q-form-disabled-callback',
        kind: 'mcq',
        topic: 'fieldset disabled inheritance',
        question: {
          en: 'What parameter is passed to formDisabledCallback(disabled)?',
          bn: 'formDisabledCallback(disabled)-এ কোন প্যারামিটারটি পাস করা হয়?'
        },
        options: [
          {
            en: 'A boolean value indicating whether the component or an ancestor <fieldset> has become disabled (true) or enabled (false)',
            bn: 'একটি বুলিয়ান মান যা নির্দেশ করে উপাদানটি বা তার পূর্বপুরুষ <fieldset> নিষ্ক্রিয় (true) নাকি সক্রিয় (false) হয়েছে'
          },
          {
            en: 'A reference to the containing window object',
            bn: 'সংশ্লিষ্ট window অবজেক্টের একটি রেফারেন্স'
          },
          {
            en: 'A string containing the current error message',
            bn: 'বর্তমান এরর মেসেজ ধারণকারী একটি টেক্সট স্ট্রিং'
          },
          {
            en: 'An integer representing remaining network timeout seconds',
            bn: 'অবশিষ্ট নেটওয়ার্ক সময় নির্দেশকারী একটি পূর্ণসংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'The hook receives true when disabled and false when enabled.',
          bn: 'নিষ্ক্রিয় হলে এটি true এবং সক্রিয় হলে false মান পায়।'
        },
        explanation: {
          en: 'formDisabledCallback receives a boolean flag reflecting disabled state changes, allowing custom controls to update styling and disable click interactions.',
          bn: 'formDisabledCallback একটি বুলিয়ান ফ্ল্যাগ পায়, যার সাহায্যে কাস্টম উপাদান তার নিজস্ব বোতাম নিষ্ক্রিয় করতে পারে।'
        }
      },
      {
        id: 'q-report-validity',
        kind: 'mcq',
        topic: 'reportValidity browser popup',
        question: {
          en: 'What does this.internals.reportValidity() do when an element is invalid?',
          bn: 'উপাদানটি অবৈধ বা ইনভ্যালিড হলে this.internals.reportValidity() কী করে?'
        },
        options: [
          {
            en: 'It displays the standard browser validation error bubble to the user and focuses the invalid element',
            bn: 'এটি ব্যবহারকারীকে ব্রাউজারের স্ট্যান্ডার্ড ভ্যালিডেশন এরর বাবল প্রদর্শন করে এবং অবৈধ উপাদানটিতে ফোকাস করে'
          },
          {
            en: 'It reloads the page with an error querystring',
            bn: 'এটি ইউআরএলে এরর কুয়েরিস্ট্রিং যোগ করে পেজ রিলোড করে'
          },
          {
            en: 'It silently logs the error to the server database',
            bn: 'এটি কোনো বার্তা না দিয়ে সার্ভারের ডাটাবেজে এরর লগ করে'
          },
          {
            en: 'It deletes the invalid custom element from the DOM tree',
            bn: 'এটি ডম ট্রি থেকে অবৈধ উপাদানটিকে পুরোপুরি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'reportValidity surfaces the native platform validation popup bubble.',
          bn: 'reportValidity ব্রাউজারের নিজস্ব পপআপ ত্রুটি বার্তা প্রদর্শন করে।'
        },
        explanation: {
          en: 'Unlike checkValidity() which only returns a boolean, reportValidity() triggers the browser native validation bubble UI, informing the user of the constraint violation.',
          bn: 'checkValidity() শুধু সত্য বা মিথ্যা মান দেয়, কিন্তু reportValidity() ব্যবহারকারীকে ব্রাউজারের নিজস্ব পপআপ মেসেজ দেখিয়ে সচেতন করে।'
        }
      },
      {
        id: 'q-delegates-focus',
        kind: 'mcq',
        topic: 'delegatesFocus option',
        question: {
          en: 'How does attachShadow({ mode: "open", delegatesFocus: true }) assist accessibility?',
          bn: 'attachShadow({ mode: "open", delegatesFocus: true }) কীভাবে অ্যাক্সেসিবিলিটিতে সহায়তা করে?'
        },
        options: [
          {
            en: 'When the custom element is clicked or receives focus, browser focus automatically delegates to its first focusable inner child',
            bn: 'কাস্টম উপাদানে ক্লিক বা ফোকাস করা হলে ব্রাউজার স্বয়ংক্রিয়ভাবে তার ভেতরের প্রথম ফোকাসযোগ্য উপাদানে ফোকাস পাঠিয়ে দেয়'
          },
          {
            en: 'It reads element text aloud using computer speech synthesis',
            bn: 'এটি স্পিচ সিন্থেসিস ব্যবহার করে উপাদানের টেক্সট জোরে জোরে পড়ে শোনায়'
          },
          {
            en: 'It automatically translates English labels into Bengali',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ইংরেজি লেবেলকে বাংলায় অনুবাদ করে'
          },
          {
            en: 'It increases font size on high-DPI retina display screens',
            bn: 'এটি হাই-ডিপিআই রেটিনা স্ক্রিনে ফন্টের আকার বৃদ্ধি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Focus transfers smoothly into internal interactive controls.',
          bn: 'ফোকাস মসৃণভাবে ভেতরের ইন্টারেক্টিভ বাটনে স্থানান্তরিত হয়।'
        },
        explanation: {
          en: 'delegatesFocus: true ensures that when a user clicks the host element or associated <label>, focus lands seamlessly on the interactive input inside the shadow root.',
          bn: 'delegatesFocus: true নিশ্চিত করে যে ব্যবহারকারী উপাদানে বা তার লেবেলে ক্লিক করলে ফোকাস সরাসরি ভেতরের মূল ইনপুটে চলে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-charter-vs-the-framework',
    title: {
      en: 'Web Components vs Frameworks — Architecture, Interoperability, and Production Trade-offs',
      bn: 'ওয়েব কম্পোনেন্টস বনাম ফ্রেমওয়ার্ক — আর্কিটেকচার, ইন্টারঅপারেবিলিটি এবং প্রোডাকশন বিবেচনা'
    }
  }
};
