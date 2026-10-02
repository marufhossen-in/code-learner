import type { Lesson } from '../../../lib/types';

export const permitBureauLesson: Lesson = {
  slug: 'the-permit-bureau',
  tech: 'angular',
  title: {
    en: 'Reactive Forms & Validation — FormControl, FormGroup & Async Validators',
    bn: 'রিঅ্যাক্টিভ ফর্মস ও ভ্যালিডেশন — FormControl, FormGroup ও অ্যাসিনক্রোনাস ভ্যালিডেটরস'
  },
  summary: {
    en: 'Enterprise web applications rely on robust, predictable form architectures to capture and validate user input. In this lesson, you will master Angular Strictly Typed Reactive Forms: build complex forms with FormControl, FormGroup, and FormBuilder, implement custom synchronous validators, manage async server validation with debounce, and inspect form state transitions.',
    bn: 'এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশনে ব্যবহারকারীর ইনপুট নিখুঁতভাবে সংগ্রহ ও যাচাই করতে একটি সুশৃঙ্খল ফর্ম আর্কিটেকচার প্রয়োজন। এই পাঠে আপনি Angular-এর স্ট্রংলি টাইপড রিঅ্যাক্টিভ ফর্মস শিখবেন: FormControl, FormGroup ও FormBuilder দিয়ে ফর্ম তৈরি, কাস্টম সিঙ্ক্রোনাস ভ্যালিডেটর, ডিবাউন্স সহ অ্যাসিনক্রোনাস সার্ভার ভ্যালিডেশন এবং ফর্ম স্টেট ট্রানজিশন নিয়ন্ত্রণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'reactive-forms-architecture',
      text: {
        en: 'The Strictly Typed Reactive Forms Architecture',
        bn: 'স্ট্রংলি টাইপড রিঅ্যাক্টিভ ফর্মস আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When your application captures sensitive data like financial payments or multi-step registrations, relying on template-driven forms can introduce unpredictable race conditions. Angular Reactive Forms provide an immutable, model-driven approach where form logic lives inside TypeScript. Modern Angular enforces complete TypeScript type safety across controls, groups, and arrays.',
        bn: 'যখন আপনার অ্যাপ্লিকেশনে আর্থিক লেনদেন বা বহু-ধাপ বিশিষ্ট নিবন্ধনের মতো সংবেদনশীল তথ্য সংগ্রহ করতে হয়, তখন টেমপ্লেট-ভিত্তিক ফর্মের ওপর নির্ভর করা ঝুঁকিপূর্ণ। Angular রিঅ্যাক্টিভ ফর্মস একটি মডেল-ভিত্তিক এবং নির্ভরযোগ্য সমাধান প্রদান করে যেখানে ফর্মের সমস্ত যুক্তি সরাসরি টাইপস্ক্রিপ্টে থাকে। আধুনিক Angular-এ প্রতিটি কন্ট্রোল ও গ্রুপের ডাটা টাইপ পুরোপুরি সুরক্ষিত থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'FormControl',
          def: {
            en: 'The atomic building block tracking the value and validation status of an individual form input element.',
            bn: 'একটি একক ইনপুট ফিল্ডের মান এবং ভ্যালিডেশন স্টেট ট্র্যাক করার মৌলিক ভিত্তি।'
          }
        },
        {
          term: 'FormGroup',
          def: {
            en: 'A collection of named FormControls aggregating validity and values into a single parent structure.',
            bn: 'একাধিক FormControl-এর সুসংগঠিত সংগ্রহ যা সবার সম্মিলিত মান ও বৈধতা একক স্থানে প্রকাশ করে।'
          }
        },
        {
          term: 'NonNullableFormBuilder',
          def: {
            en: 'A builder utility creating form controls whose values reset to their initial defaults rather than null.',
            bn: 'একটি সহায়ক বিল্ডার যার মাধ্যমে তৈরি কন্ট্রোল রিসেট করলে মান নাল না হয়ে প্রাথমিক মানে ফিরে যায়।'
          }
        },
        {
          term: 'AsyncValidatorFn',
          def: {
            en: 'A validator returning an Observable or Promise used to verify data against a remote backend database.',
            bn: 'একটি ভ্যালিডেটর যা সার্ভার বা ডাটাবেজে তথ্য যাচাই করতে একটি Observable বা Promise রিটার্ন করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'form-states-matrix',
      text: {
        en: 'Reactive Form States and Status Flags Matrix',
        bn: 'রিঅ্যাক্টিভ ফর্ম স্টেটস ও স্ট্যাটাস ফ্ল্যাগস ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Status Property', bn: 'স্টেট প্রোপার্টি' },
        { en: 'Boolean Condition', bn: 'শর্তাবলী' },
        { en: 'UI Engineering Significance', bn: 'ইউআই ব্যবহারের গুরুত্ব' }
      ],
      rows: [
        [
          { en: 'control.valid / invalid', bn: 'control.valid / invalid' },
          { en: 'true when all attached synchronous and async validators pass', bn: 'সবগুলো ভ্যালিডেটর নিয়ম মেনে সফল হলে সত্য হয়' },
          { en: 'Disables submit button while errors persist: [disabled]="form.invalid"', bn: 'ত্রুটি থাকলে সাবমিট বাটন নিষ্ক্রিয় রাখা: [disabled]="form.invalid"' }
        ],
        [
          { en: 'control.pristine / dirty', bn: 'control.pristine / dirty' },
          { en: 'dirty becomes true the instant the user alters the input value', bn: 'ব্যবহারকারী ইনপুটে হাত দেওয়া মাত্র dirty ফ্ল্যাগ true হয়' },
          { en: 'Warns users about unsaved changes when navigating away', bn: 'পেজ ছেড়ে যাওয়ার সময় অসংরক্ষিত পরিবর্তনের সতর্কবার্তা দিতে' }
        ],
        [
          { en: 'control.untouched / touched', bn: 'control.untouched / touched' },
          { en: 'touched becomes true when the user focuses and blurs out of the field', bn: 'ইনপুট থেকে ফোকাস সরিয়ে নিলে touched ফ্ল্যাগ true হয়' },
          { en: 'Hides error messages until the user finishes interacting with the field', bn: 'ইউজার টাইপ করা বা বের না হওয়া পর্যন্ত অহেতুক লাল এরর না দেখাতে' }
        ],
        [
          { en: 'control.pending', bn: 'control.pending' },
          { en: 'true while an asynchronous validator is actively querying the server', bn: 'সার্ভারে অ্যাসিনক্রোনাস যাচাই চলাকালীন true থাকে' },
          { en: 'Displays a loading spinner next to username availability checks', bn: 'ইউজারনেম খালি আছে কিনা তা দেখার সময় লোডিং স্পিনার দেখাতে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'form-simulation-code',
      text: {
        en: 'Working Reactive Form and Custom Validation Simulation',
        bn: 'কার্যকরী রিঅ্যাক্টিভ ফর্ম ও কাস্টম ভ্যালিডেশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Angular Reactive Form Control, Group, and Validator Pipeline
class MockFormControl {
  constructor(initialValue, validators = []) {
    this.value = initialValue;
    this.validators = validators;
    this.touched = false;
    this.dirty = false;
    this.updateValidity();
  }

  setValue(newValue) {
    this.value = newValue;
    this.dirty = true;
    this.updateValidity();
  }

  markAsTouched() {
    this.touched = true;
  }

  updateValidity() {
    this.errors = null;
    for (const validator of this.validators) {
      const err = validator(this.value);
      if (err) {
        this.errors = err;
        break;
      }
    }
  }

  get valid() {
    return this.errors === null;
  }
}

// Custom Synchronous Validator: Minimum 5 characters
const minLength5 = val => (val && val.length >= 5 ? null : { minLength: { required: 5, actual: val ? val.length : 0 } });

// 1. Instantiate form control with empty string
const usernameControl = new MockFormControl('', [minLength5]);

// 2. User types 3 characters: "dev" (Validation fails)
usernameControl.setValue('dev');
usernameControl.markAsTouched();
const invalidValidState = usernameControl.valid;
const activeErrorRequired = usernameControl.errors.minLength.required;

// 3. User types 8 characters: "frontend" (Validation passes)
usernameControl.setValue('frontend');
const validState = usernameControl.valid;

console.log('Control valid with 3 characters:', invalidValidState);
// -> Control valid with 3 characters: false
console.log('Required character length error:', activeErrorRequired);
// -> Required character length error: 5
console.log('Control valid with 8 characters:', validState);
// -> Control valid with 8 characters: true`,
      caption: {
        en: 'Control rejects 3 characters requiring 5, then validates successfully with 8 characters',
        bn: 'কন্ট্রোল ৩ অক্ষরের ইনপুট প্রত্যাখ্যান করে ৫ দাবি করছে এবং পরে ৮ অক্ষরে সফল হচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'form-discipline-rules',
      text: {
        en: 'Form Architecture Best Practices and Error Display Discipline',
        bn: 'ফর্ম আর্কিটেকচার সেরা অনুশীলন ও এরর প্রদর্শনের নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never display validation error messages immediately on initial page render. Showing aggressive validation warnings before the user has touched the field creates poor usability. Only render error feedback when the control is invalid AND (touched OR dirty). Use NonNullableFormBuilder to ensure control values never accidentally reset to null.',
        bn: 'পেজ লোড হওয়া মাত্রই ব্যবহারকারীকে লাল রঙের ভ্যালিডেশন এরর দেখাবেন না। কোনো ফিল্ডে হাত দেওয়ার আগেই ভুল ধরা ব্যবহারকারীর জন্য অত্যন্ত বিরক্তিকর। এরর মেসেজ কেবল তখনই দেখান যখন ফিল্ডটি invalid এবং ব্যবহারকারী সেটিতে ক্লিক করে বের হয়েছে (touched) অথবা কিছু লিখেছে (dirty)। তাছাড়া মান যাতে ভুলে নাল না হয় সেজন্য NonNullableFormBuilder ব্যবহার করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Guard Error Visibility: Condition error displays on control.invalid && (control.dirty || control.touched).',
          bn: '১. সতর্ক এরর প্রদর্শন: কেবল control.invalid && (control.dirty || control.touched) মিললেই এরর দেখান।'
        },
        {
          en: '2. Use NonNullableFormBuilder: Prefer inject(NonNullableFormBuilder) so form.reset() restores initial default strings.',
          bn: '২. NonNullableFormBuilder ব্যবহার: রিসেট করলে মান যাতে নাল না হয় সেজন্য NonNullableFormBuilder ব্যবহার করুন।'
        },
        {
          en: '3. Debounce Async Validators: Always add debounceTime(300) before backend async validation calls to conserve server resources.',
          bn: '৩. অ্যাসিনক্রোনাস ভ্যালিডেশন ডিবাউন্স: ডাটাবেজে ইউজারনেম যাচাই করার আগে সর্বদা ৩০০ মিলিসেকেন্ড ডিবাউন্স করুন।'
        },
        {
          en: '4. Bind Strongly Typed Forms: Use TypeScript generics FormGroup<{ email: FormControl<string> }> for compile-time safety.',
          bn: '৪. টাইপ-সেফ ফর্ম মডেল: টাইপ সুরক্ষার জন্য জেনেরিক সিনট্যাক্সে FormGroup ও FormControl ডিফাইন করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-per-ex1',
      kind: 'mcq',
      topic: 'touched and dirty conditions for form error display',
      question: {
        en: 'Why do professional Angular developers condition validation error messages with "*ngIf=\"emailControl.invalid && (emailControl.dirty || emailControl.touched)\""?',
        bn: 'পেশাদার Angular ডেভেলপাররা কেন ভ্যালিডেশন এরর মেসেজ প্রদর্শনে "*ngIf=\"emailControl.invalid && (emailControl.dirty || emailControl.touched)\"" শর্ত ব্যবহার করেন?'
      },
      options: [
        {
          en: 'To avoid displaying jarring red validation errors on initial page load before the user has even interacted with or focused on the input field',
          bn: 'ব্যবহারকারী ইনপুট ফিল্ডে হাত দেওয়া বা টাইপ করার পূর্বেই পেজ লোডের সময় অনাকাঙ্ক্ষিত লাল এরর বার্তা প্রদর্শন এড়ানোর জন্য'
        },
        {
          en: 'Because without touched, the browser turns off the monitor display',
          bn: 'কারণ touched শর্ত না দিলে ব্রাউজার মনিটরের ডিসপ্লে বন্ধ হয়ে যায়'
        },
        {
          en: 'To reduce the physical weight of the user computer laptop',
          bn: 'ব্যবহারকারীর ল্যাপটপের ফিজিক্যাল ওজন কমানোর জন্য'
        },
        {
          en: 'Dirty and touched are required to connect to the WiFi router',
          bn: 'ওয়াইফাই রাউটারে সংযোগ স্থাপনের জন্য dirty এবং touched আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Display errors only after the user has interacted with the input field.',
        bn: 'ব্যবহারকারী ইনপুটে ক্লিক করে কাজ করার পরেই কেবল ভুল দেখানো ভদ্র ডিজাইনের নিয়ম।'
      },
      explanation: {
        en: 'A freshly mounted form is pristine and untouched. Checking dirty or touched ensures errors appear only after the user has attempted to fill or navigated away from the field.',
        bn: 'প্রথমবার পেজ খুললে ফর্ম পরিষ্কার থাকে। ইউজার কিছু লিখলে (dirty) বা ফোকাস সরিয়ে নিলে (touched) তবেই এরর দেখানো ইউজার ফ্রেন্ডলি ডিজাইনের মূল নীতি।'
      }
    },
    {
      id: 'ng-per-ex2',
      kind: 'mcq',
      topic: 'non-nullable form builder reset behavior',
      question: {
        en: 'What happens when calling "form.reset()" on a form created with "inject(NonNullableFormBuilder)"?',
        bn: '"inject(NonNullableFormBuilder)" দিয়ে তৈরি কোনো ফর্মে "form.reset()" কল করলে কী ঘটে?'
      },
      options: [
        {
          en: 'Each control resets to its declared initial default value (e.g. empty string ""), whereas standard FormBuilder resets every control value to JavaScript null',
          bn: 'প্রতিটি কন্ট্রোল তার ঘোষিত প্রাথমিক ডিফল্ট মানে (যেমন খালি স্ট্রিং "") ফিরে যায়, যেখানে সাধারণ FormBuilder সব কন্ট্রোলকে জাভাস্ক্রিপ্ট null-এ বদলে দেয়'
        },
        {
          en: 'It permanently formats the user hard drive',
          bn: 'এটি ব্যবহারকারীর হার্ডড্রাইভ স্থায়ীভাবে ফরম্যাট করে দেয়'
        },
        {
          en: 'form.reset() is forbidden in modern Angular applications',
          bn: 'আধুনিক Angular অ্যাপ্লিকেশনে form.reset() কল করা সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'It deletes all user passwords saved in the browser',
          bn: 'এটি ব্রাউজারে সংরক্ষিত সব ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'NonNullableFormBuilder guarantees controls revert to initial values rather than null.',
        bn: 'NonNullableFormBuilder নিশ্চিত করে যে রিসেট করলে মান নাল না হয়ে আগের মান ফিরে পায়।'
      },
      explanation: {
        en: 'Standard FormControl<string> allows null on reset: form.reset() sets value to null. NonNullableFormBuilder enforces NonNullable<T>, resetting values back to the initial configured default.',
        bn: 'সাধারণ ফর্মে রিসেট দিলে স্ট্রিংয়ের বদলে null চলে আসে যা পরবর্তীতে ক্র্যাশ ঘটায়। NonNullableFormBuilder প্রাথমিক খালি স্ট্রিং ঠিক রেখে নিরাপদ রাখে।'
      }
    },
    {
      id: 'ng-per-ex3',
      kind: 'mcq',
      topic: 'async validator execution timing and pending status',
      question: {
        en: 'When an asynchronous validator (such as checking email availability) is executing, what is the status of the form control?',
        bn: 'যখন কোনো অ্যাসিনক্রোনাস ভ্যালিডেটর (যেমন ইমেইল খালি আছে কিনা যাচাই) চলতে থাকে, তখন ফর্ম কন্ট্রোলের স্ট্যাটাস কী থাকে?'
      },
      options: [
        {
          en: 'The control status becomes "PENDING", during which "control.pending" evaluates to true and "control.valid" evaluates to false until the async Observable resolves',
          bn: 'কন্ট্রোলের স্ট্যাটাস "PENDING" হয়ে যায়, যার ফলে "control.pending" সত্য হয় এবং সার্ভার থেকে উত্তর না আসা পর্যন্ত "control.valid" মিথ্যা থাকে'
        },
        {
          en: 'The control status becomes "DESTROYED"',
          bn: 'কন্ট্রোলের স্ট্যাটাস "DESTROYED" হয়ে যায়'
        },
        {
          en: 'The browser freezes and stops accepting keyboard keystrokes',
          bn: 'ব্রাউজার হ্যাং হয়ে যায় এবং কীবোর্ড টাইপিং গ্রহণ করা বন্ধ করে'
        },
        {
          en: 'The control status is permanently set to VALID regardless of the server response',
          bn: 'সার্ভারের উত্তরের তোয়াক্কা না করেই স্ট্যাটাস চিরতরে VALID হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Async validators place the control into a PENDING state while waiting for network responses.',
        bn: 'সার্ভারের উত্তরের জন্য অপেক্ষার সময় কন্ট্রোলটি PENDING অবস্থায় থাকে।'
      },
      explanation: {
        en: 'While an async validator runs, the control enters the PENDING state. During this time, the form is not considered valid, allowing developers to show a spinner and prevent submission.',
        bn: 'সার্ভারে রিকোয়েস্ট পাঠিয়ে উত্তরের অপেক্ষায় থাকা অবস্থায় স্ট্যাটাস PENDING থাকে। এ সময় ইউজার যাতে সাবমিট চাপতে না পারে সেজন্য বাটন নিষ্ক্রিয় রাখা হয়।'
      }
    },
    {
      id: 'ng-per-ex4',
      kind: 'mcq',
      topic: 'custom synchronous validator return contract',
      question: {
        en: 'What is the return contract of a custom synchronous Angular "ValidatorFn"?',
        bn: 'Angular-এ একটি কাস্টম সিঙ্ক্রোনাস "ValidatorFn"-এর রিটার্ন নিয়ম কী?'
      },
      options: [
        {
          en: 'It must return "null" if the input is valid, or an object containing error details ("ValidationErrors", e.g. "{ invalidDomain: true }") if the input is invalid',
          bn: 'ইনপুট বৈধ হলে অবশ্যই "null" রিটার্ন করতে হবে, আর অবৈধ হলে ত্রুটির বিবরণ সহ একটি অবজেক্ট ("ValidationErrors", যেমন "{ invalidDomain: true }") দিতে হবে'
        },
        {
          en: 'It must return a boolean true when valid and throw an exception when invalid',
          bn: 'বৈধ হলে সত্য রিটার্ন করতে হবে এবং অবৈধ হলে এক্সেপশন ছুড়তে হবে'
        },
        {
          en: 'It must return the user bank account number as a string',
          bn: 'এটি ব্যবহারকারীর ব্যাংক অ্যাকাউন্ট নম্বর স্ট্রিং আকারে রিটার্ন করবে'
        },
        {
          en: 'Validator functions cannot return any values and must be void',
          bn: 'ভ্যালিডেটর ফাংশন কোনো মান রিটার্ন করতে পারে না এবং void হতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Angular validators return null for valid inputs and an error object for invalid inputs.',
        bn: 'সঠিক হলে null এবং ভুল হলে এরর অবজেক্ট রিটার্ন করাই ভ্যালিডেটরের নিয়ম।'
      },
      explanation: {
        en: 'An Angular ValidatorFn returns null when valid. Returning an object (ValidationErrors) signifies failure and registers that error key on the control errors dictionary.',
        bn: 'Angular ভ্যালিডেটরে কোনো ভুল না থাকলে null দিতে হয়। আর ভুল থাকলে { এরর_নাম: true } অবজেক্ট রিটার্ন করলেই কন্ট্রোল তা এরর হিসেবে চিহ্নিত করে।'
      }
    }
  ],
  quiz: {
    id: 'the-permit-bureau-quiz',
    title: {
      en: 'Angular Reactive Forms Architecture Quiz',
      bn: 'Angular রিঅ্যাক্টিভ ফর্মস আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-formarray-dynamic-collections',
        kind: 'mcq',
        topic: 'managing dynamic lists of controls with FormArray',
        question: {
          en: 'When should an Angular developer use a "FormArray" instead of a "FormGroup"?',
          bn: 'একজন Angular ডেভেলপার কখন "FormGroup"-এর বদলে "FormArray" ব্যবহার করবেন?'
        },
        options: [
          {
            en: 'When managing a variable, dynamic collection of form controls or groups that can be added, removed, or reordered at runtime (such as an order line-items list or multiple phone numbers)',
            bn: 'যখন রানটাইমে ফর্মের উপাদানের সংখ্যা ব্যবহারকারী ইচ্ছামতো বাড়াতে বা কমাতে পারেন (যেমন একাধিক ফোন নম্বর যোগ করা বা অর্ডারের আইটেম তালিকা)'
          },
          {
            en: 'FormArray is only used for displaying static images',
            bn: 'FormArray কেবলমাত্র স্থির ছবি প্রদর্শনের জন্য ব্যবহৃত হয়'
          },
          {
            en: 'When storing numbers larger than 1000',
            bn: 'যখন ১০০০ এর চেয়ে বড় সংখ্যা সংরক্ষণ করার প্রয়োজন হয়'
          },
          {
            en: 'FormArray replaces all CSS animations in modern Angular',
            bn: 'FormArray আধুনিক Angular-এ সব সিএসএস অ্যানিমেশনের স্থলাভিষিক্ত হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'FormArray manages variable-length dynamic arrays of form controls.',
          bn: 'FormArray পরিবর্তনশীল সংখ্যার ইনপুট ফিল্ড নিয়ন্ত্রণ করার জন্য তৈরি।'
        },
        explanation: {
          en: 'FormGroup manages a fixed set of named controls. FormArray manages an indexed list of controls whose length can grow or shrink dynamically at runtime (push, removeAt).',
          bn: 'ফিক্সড ফিল্ডের জন্য FormGroup ব্যবহার করা হয়। কিন্তু ব্যবহারকারী যদি "Add More" বাটন চেপে নতুন নতুন ফিল্ড যোগ করতে চায়, তবে FormArray ব্যবহার করা আবশ্যক।'
        }
      },
      {
        id: 'q-cross-field-validation-formgroup-level',
        kind: 'mcq',
        topic: 'cross-field validation on FormGroup level',
        question: {
          en: 'Where should a validator that compares two fields (e.g. verifying that "password" and "confirmPassword" match) be registered?',
          bn: 'দুটি ফিল্ডের মাঝে তুলনা করার ভ্যালিডেটর (যেমন পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড মিলানো) কোথায় যুক্ত করা উচিত?'
        },
        options: [
          {
            en: 'At the parent "FormGroup" level: "new FormGroup({ password: ..., confirmPassword: ... }, { validators: [passwordsMatchValidator] })"',
            bn: 'মূল প্যারেন্ট "FormGroup" স্তরে: "new FormGroup({ password: ..., confirmPassword: ... }, { validators: [passwordsMatchValidator] })"'
          },
          {
            en: 'Inside the physical WiFi router configuration page',
            bn: 'ওয়াইফাই রাউটারের কনফিগারেশন পেজের ভেতর'
          },
          {
            en: 'Directly inside the operating system display drivers',
            bn: 'সরাসরি অপারেটিং সিস্টেমের ডিসপ্লে ড্রাইভারের ভেতর'
          },
          {
            en: 'Cross-field validation is impossible in client-side applications',
            bn: 'ক্লায়েন্ট সাইড অ্যাপ্লিকেশনে দুটি ফিল্ড তুলনা করা একেবারেই অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Register multi-field validators on the enclosing FormGroup so both controls can be inspected.',
          bn: 'দুটি ফিল্ডের অ্যাক্সেস পেতে ভ্যালিডেটরটি প্যারেন্ট FormGroup-এ যুক্ত করতে হয়।'
        },
        explanation: {
          en: 'Cross-field validators require access to sibling controls. Registering the validator on the FormGroup allows inspecting group.get("password") and group.get("confirmPassword") together.',
          bn: 'আলাদা কন্ট্রোলে দিলে অন্য ফিল্ডের মান পাওয়া যায় না। তাই পুরো FormGroup-এ ভ্যালিডেটর দিলে দুটি কন্ট্রোলের মান পাশাপাশি তুলনা করে অমিল থাকলে এরর দেওয়া যায়।'
        }
      },
      {
        id: 'q-updateon-blur-or-submit',
        kind: 'mcq',
        topic: 'updateOn option to throttle validation timing (change, blur, submit)',
        question: {
          en: 'How can developers configure a FormControl to validate only when the user loses focus (blurs) rather than on every single keystroke?',
          bn: 'প্রতি অক্ষরে ভ্যালিডেশন না চালিয়ে ইউজার ফিল্ড থেকে বের হলে (blur) তবেই ভ্যালিডেশন সক্রিয় করতে কীভাবে কনফিগার করা হয়?'
        },
        options: [
          {
            en: 'Set the "updateOn" option to "blur": "new FormControl(\'\', { updateOn: \'blur\', validators: [...] })"',
            bn: '"updateOn" অপশনটিকে "blur" হিসেবে নির্ধারণ করে: "new FormControl(\'\', { updateOn: \'blur\', validators: [...] })"'
          },
          {
            en: 'Disconnect the computer keyboard from the USB port',
            bn: 'ইউএসবি পোর্ট থেকে কম্পিউটার কীবোর্ড খুলে ফেলে'
          },
          {
            en: 'Write an infinite while loop calling setTimeout()',
            bn: 'setTimeout() ডেকে একটি অবিরাম হোয়াইল লুপ লিখে'
          },
          {
            en: 'FormControl can only validate on keystroke change events',
            bn: 'FormControl কেবলমাত্র প্রতিটি অক্ষর পরিবর্তনের সময়ই ভ্যালিডেট করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'updateOn: "blur" delays value updates and validation until the input loses focus.',
          bn: 'updateOn: "blur" দিলে ইউজার ফিল্ড থেকে বের না হওয়া পর্যন্ত ভ্যালিডেশন স্থগিত থাকে।'
        },
        explanation: {
          en: 'By default, updateOn is "change" (every keystroke). Setting { updateOn: "blur" } or { updateOn: "submit" } delays updating the control value and running validators until focus leaves or form submits.',
          bn: 'ডিফল্টভাবে প্রতি অক্ষরে ভ্যালিডেশন চলে যা ভারী এপিআই কলের জন্য ক্ষতিকর। updateOn: "blur" দিলে ব্যবহারকারী লেখা শেষ করে বাইরে ক্লিক করলেই কেবল ভ্যালিডেশন হয়।'
        }
      },
      {
        id: 'q-valuestatuschanges-observables',
        kind: 'mcq',
        topic: 'reacting to form changes with valueChanges and statusChanges',
        question: {
          en: 'What streams do Angular FormControls expose to allow reactive subscriptions to input modifications over time?',
          bn: 'সময়ের সাথে সাথে ইনপুটের পরিবর্তন ও ভ্যালিডেশন পর্যবেক্ষণ করতে Angular FormControl কোন স্ট্রিমগুলো উন্মুক্ত করে?'
        },
        options: [
          {
            en: '"control.valueChanges" emits new values on change, and "control.statusChanges" emits the validation state (VALID, INVALID, PENDING, DISABLED)',
            bn: '"control.valueChanges" মান বদলালে নতুন মান সরবরাহ করে এবং "control.statusChanges" ভ্যালিডেশন স্টেট (VALID, INVALID, PENDING, DISABLED) পাঠায়'
          },
          {
            en: 'FormControls only expose static text strings, never streams',
            bn: 'FormControls কেবল সাধারণ টেক্সট স্ট্রিং দেয়, কোনো স্ট্রিম দেয় না'
          },
          {
            en: 'They send continuous audio frequencies through the speakers',
            bn: 'তারা স্পিকারের মাধ্যমে অবিরাম অডিও তরঙ্গ পাঠাতে থাকে'
          },
          {
            en: 'valueChanges can only be read on Sundays',
            bn: 'valueChanges কেবল রবিবারে পড়া সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'valueChanges and statusChanges are RxJS Observables tracking live form state.',
          bn: 'valueChanges এবং statusChanges হলো ফর্মের পরিবর্তনের ওপর নজর রাখার RxJS স্ট্রিম।'
        },
        explanation: {
          en: 'FormControls expose valueChanges and statusChanges as Observables. Developers can pipe these streams into RxJS operators or convert them to Signals with toSignal() for clean reactivity.',
          bn: 'valueChanges দিয়ে ইউজারের টাইপ করা ডাটা রিয়েলটাইমে পর্যবেক্ষণ করা যায়। এটিকে toSignal() দিয়ে সিগন্যালে বদলে অন্য উপাদানে তাৎক্ষণিক ব্যবহার করা সম্ভব।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-template-craftsmen',
    title: {
      en: 'Pipes & Directives — Pure Pipes, Attribute Directives & hostDirectives',
      bn: 'পাইপস ও ডিরেক্টিভস — পিওর পাইপস, অ্যাট্রিবিউট ডিরেক্টিভ ও hostDirectives'
    }
  }
};
