import type { Lesson } from '../../../lib/types';

export const formsLesson: Lesson = {
  slug: 'forms',
  tech: 'html',
  title: { en: 'Forms & Native Validation', bn: 'ফর্ম ও নেটিভ ভ্যালিডেশন' },
  summary: {
    en: 'The web’s oldest interactive element is still its most misunderstood — and the browser will validate it for free.',
    bn: 'ওয়েবের সবচেয়ে পুরোনো ইন্টারঅ্যাক্টিভ এলিমেন্টই আজও সবচেয়ে বেশি ভুল বোঝা হয় — অথচ ব্রাউজার ফ্রিতে ভ্যালিডেট করে দেয়।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — What is a form, really?', bn: 'WHAT — ফর্ম আসলে কী?' },
    },
    {
      type: 'para',
      text: {
        en: 'A <form> is a contract: “when submitted, package my controls’ name=value pairs and send them somewhere.” The controls (<input>, <select>, <textarea>, <button>) each contribute an entry keyed by their name attribute. No name, no data — the browser simply skips that control.',
        bn: '<form> হলো একটি চুক্তি: “সাবমিট হলে আমার কন্ট্রোলগুলোর name=value জোড়া প্যাকেজ করে কোথাও পাঠিয়ে দাও।” প্রতিটি কন্ট্রোল (<input>, <select>, <textarea>, <button>) তার name অ্যাট্রিবিউট অনুযায়ী একটি এন্ট্রি দেয়। name না থাকলে ডেটাও নেই — ব্রাউজার ওই কন্ট্রোল ফেলেই দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Control',
          def: { en: 'Any data-giving widget inside the form.', bn: 'ফর্মের ভেতরে ডেটা-দেওয়া যেকোনো উইজেট।' },
        },
        {
          term: 'name → FormData',
          def: {
            en: 'The key under which a control’s value travels.',
            bn: 'যে কি-তে কন্ট্রোলের মান ভ্রমণ করে।',
          },
        },
        {
          term: 'Constraint',
          def: {
            en: 'A declared rule the browser enforces: required, minlength, pattern, type, min/max.',
            bn: 'ঘোষিত নিয়ম যা ব্রাউজার বাস্তবায়ন করে: required, minlength, pattern, type, min/max।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Why learn native forms in a React world?', bn: 'WHY — React-এর যুগে নেটিভ ফর্ম কেন শিখবেন?' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Accessibility: labels, fieldsets and focus order are free — div-based “forms” must rebuild all of it.',
          bn: 'অ্যাক্সেসিবিলিটি: লেবেল, ফিল্ডসেট, ফোকাস অর্ডার সব ফ্রি — div-ভিত্তিক “ফর্ম”কে সব নতুন করে বানাতে হয়।',
        },
        {
          en: 'Validation without JavaScript: works during slow loads, and when scripts fail entirely.',
          bn: 'জাভাস্ক্রিপ্ট ছাড়াই ভ্যালিডেশন: ধীর লোডেও কাজ করে, স্ক্রিপ্ট মরে গেলেও কাজ করে।',
        },
        {
          en: 'Mobile keyboards adapt: type="email" shows @, type="tel" shows digits.',
          bn: 'মোবাইল কিবোর্ড বদলে যায়: type="email"-এ @ আসে, type="tel"-এ সংখ্যা।',
        },
        {
          en: 'Framework form libraries (react-hook-form & co.) build ON these primitives.',
          bn: 'ফ্রেমওয়ার্কের ফর্ম লাইব্রেরিগুলো (react-hook-form প্রমুখ) এই প্রিমিটিভের উপরই দাঁড়িয়ে।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Labels and constraints', bn: 'HOW — লেবেল আর কনস্ট্রেইন্ট' },
    },
    {
      type: 'code',
      lang: 'html',
      code: `<form action="/signup" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="pw">Password</label>
  <input id="pw" name="password" type="password"
         required minlength="8" />
          <!-- ৮ অক্ষরের কম হলে সাবমিট আটকে যাবে -->

  <label for="age">Age</label>
  <input id="age" name="age" type="number" min="18" max="120" />

  <button>Create account</button>
</form>`,
    },
    {
      type: 'para',
      text: {
        en: 'Notice the label↔input pairing: the for attribute points at the input’s id. Clicking the label now focuses the input — bigger tap target, announced correctly by screen readers. Wrapping the input INSIDE the label also works.',
        bn: 'লক্ষ্য করুন label↔input জুটিটি: for অ্যাট্রিবিউট ইনপুটের id-কে নির্দেশ করে। এখন লেবেলে ক্লিক করলেই ইনপুটে ফোকাস যায় — ট্যাপ টার্গেট বড়, স্ক্রিন রিডারে সঠিক ঘোষণা। ইনপুটকে label-এর ভেতরে রাখলেও কাজ করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INTERNAL — What “submit” actually triggers', bn: 'INTERNAL — “সাবমিট” আসলে কী ঘটায়' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Constraint validation sweep', bn: 'কনস্ট্রেইন্ট যাচাই' },
          text: {
            en: 'The browser checks every control against its constraints. If ANY fails, submission is blocked, the first invalid control is focused, and a localized bubble explains why.',
            bn: 'প্রতিটি কন্ট্রোল তার কনস্ট্রেইন্টে যাচাই হয়। যেকোনোটি ব্যর্থ হলে সাবমিশন আটকে যায়, প্রথম অবৈধ কন্ট্রোলে ফোকাস যায়, স্থানীয় ভাষায় বুদবুদে কারণ দেখায়।',
          },
        },
        {
          title: { en: 'FormData is assembled', bn: 'FormData তৈরি' },
          text: {
            en: 'Successful controls become name=value entries. Disabled controls and unchecked checkboxes contribute NOTHING.',
            bn: 'সফল কন্ট্রোলগুলো name=value এন্ট্রি হয়। নিষ্ক্রিয় (disabled) কন্ট্রোল ও আনচেক করা চেকবক্স কিছুই দেয় না।',
          },
        },
        {
          title: { en: 'Submit event fires', bn: 'submit ইভেন্ট চালু' },
          text: {
            en: 'JavaScript can intercept here (preventDefault) to send via fetch — progress enhancement, not requirement.',
            bn: 'জাভাস্ক্রিপ্ট এখানে বাধা দিতে পারে (preventDefault) fetch দিয়ে পাঠানোর জন্য — এটি সম্প্রসারণ, বাধ্যতা নয়।',
          },
        },
        {
          title: { en: 'Navigation (default)', bn: 'নেভিগেশন (ডিফল্ট)' },
          text: {
            en: 'Otherwise the browser navigates to action= with method= (GET appends to the URL, POST travels in the body).',
            bn: 'নাহলে ব্রাউজার action=-এ method= দিয়ে যায় (GET URL-এ, POST বডিতে পাঠায়)।',
          },
        },
      ],
    },
    {
      type: 'visual',
      id: 'form-valid',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Validation UX for free', bn: 'RESULT — ফ্রিতে ভ্যালিডেশন UX' },
    },
    {
      type: 'para',
      text: {
        en: 'Try the playground above: submit empty, then with a bad email, then correctly. Three different failure messages (value missing, type mismatch, too short) all came from the BROWSER — localized, accessible, focus-managed — with exactly zero lines of JavaScript. CSS even joins in: input:invalid styles bad fields live.',
        bn: 'উপরের প্লেগ্রাউন্ডে দেখুন: খালি রেখে সাবমিট করুন, তারপর ভুল ইমেইল, তারপর ঠিক করে। ৩টি আলাদা ব্যর্থতার বার্তা (খালি, টাইপ অমিল, ছোট) সবই এলো ব্রাউজার থেকে — স্থানীয় ভাষায়, অ্যাক্সেসিবল, ফোকাস-সহ — এক লাইনও JavaScript ছাড়া। CSS-ও যোগ দেয়: input:invalid দিয়ে ভুল ফিল্ড লাইভ স্টাইল হয়।',
      },
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Form bugs everyone hits', bn: 'DEBUG — সবার পড়া ফর্ম বাগ' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: '“My data never arrives” — missing name', bn: '“ডেটাই আসে না” — name নেই' },
      text: {
        en: 'id is for labels and CSS; only name enters FormData. An input with id but no name is INVISIBLE on submit.',
        bn: 'id লেবেল আর CSS-এর জন্য; FormData-তে যায় কেবল name। id আছে কিন্তু name নেই — সাবমিটে সেই ইনপুট অদৃশ্য।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Placeholder as label', bn: 'প্লেসহোল্ডারকে লেবেল বানানো' },
      text: {
        en: 'Placeholders vanish when typing and are inconsistently announced. Always use a real <label> — style it floating if you must.',
        bn: 'টাইপ করলেই প্লেসহোল্ডার উধাও, স্ক্রিন রিডারেও অনিয়মিত। সবসময় আসল <label> ব্যবহার করুন — চাইলে ভাসমান স্টাইল করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Enter key submits forms', bn: 'Enter চাপলে ফর্ম সাবমিট হয়' },
      text: {
        en: 'Users press Enter in text inputs — and your onClick-only handler never runs. Put the logic on the FORM’s submit event, not the button’s click.',
        bn: 'ইউজার টেক্সট ইনপুটে Enter চাপে — আপনার onClick-ভিত্তিক হ্যান্ডলার তখন চলেই না। লজিক রাখুন form-এর submit ইভেন্টে, বাটনের click-এ নয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Where native forms win', bn: 'REAL WORLD — যেখানে নেটিভ ফর্ম জেতে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Login pages on slow networks validate before the JS bundle even arrives.', bn: 'ধীর নেটওয়ার্কে JS বান্ডিল আসার আগেই লগইন পেজ ভ্যালিডেট করে।' },
        { en: 'Checkout forms: type="tel" + inputmode="numeric" measurably lift conversion.', bn: 'চেকআউট ফর্ম: type="tel" + inputmode="numeric" কনভার্সন সত্যিই বাড়ায়।' },
        { en: 'Password managers hook into standard name/autocomplete attributes.', bn: 'পাসওয়ার্ড ম্যানেজার স্ট্যান্ডার্ড name/autocomplete অ্যাট্রিবিউটেই ঝুলে থাকে।' },
        { en: 'Search filters with method="get" give shareable URLs for free.', bn: 'method="get" সার্চ ফিল্টার ফ্রিতে শেয়ারযোগ্য URL দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Keep going', bn: 'NEXT — এগিয়ে যান' },
    },
    {
      type: 'list',
      items: [
        { en: 'CSS :valid / :invalid — style form states live.', bn: 'CSS :valid / :invalid — ফর্মের অবস্থা লাইভ স্টাইল করুন।' },
        { en: 'FormData + fetch — submit without a page reload.', bn: 'FormData + fetch — রিলোড ছাড়া সাবমিট।' },
        { en: 'Accessible forms: fieldset, legend, error summaries.', bn: 'অ্যাক্সেসিবল ফর্ম: fieldset, legend, এরর সামারি।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'html-form-ex1',
      kind: 'mcq',
      topic: 'formdata',
      question: {
        en: 'Which attribute puts a control’s value into the submitted data?',
        bn: 'কোন অ্যাট্রিবিউট কন্ট্রোলের মান সাবমিট হওয়া ডেটায় ঢোকায়?',
      },
      options: [
        { en: 'id', bn: 'id' },
        { en: 'class', bn: 'class' },
        { en: 'name', bn: 'name' },
        { en: 'value', bn: 'value' },
      ],
      answer: 2,
      hint: { en: 'Labels use id; data uses…', bn: 'লেবেল যায় id-তে; ডেটা যায়…' },
      explanation: {
        en: 'FormData is keyed by name. id/class are for labels, CSS and JS hooks.',
        bn: 'FormData name দিয়ে চাবি পায়। id/class হলো লেবেল, CSS ও JS হুকের জন্য।',
      },
    },
    {
      id: 'html-form-ex2',
      kind: 'fill',
      topic: 'labels',
      question: {
        en: 'Connect the label to the input:',
        bn: 'লেবেলটিকে ইনপুটের সাথে যুক্ত করুন:',
      },
      code: `<label ___="em">Email</label>
<input id="em" type="email" name="email" />`,
      answer: 'for',
      accept: ['for'],
      hint: { en: 'The attribute mirrors the input’s id.', bn: 'অ্যাট্রিবিউটটি ইনপুটের id-র আয়না।' },
      explanation: {
        en: 'for="em" links to id="em" — clicking the label focuses the input, screen readers announce the pair.',
        bn: 'for="em" যুক্ত হয় id="em"-এর সাথে — লেবেলে ক্লিকে ইনপুটে ফোকাস, স্ক্রিন রিডার জুটিটি সঠিক পড়ে।',
      },
      solution: 'for',
    },
    {
      id: 'html-form-ex3',
      kind: 'predict',
      topic: 'validation',
      question: {
        en: 'User types "ab" and submits. What does the browser do? (no JavaScript)',
        bn: 'ইউজার "ab" লিখে সাবমিট করে। ব্রাউজার কী করে? (JavaScript ছাড়া)',
      },
      code: `<input name="username" required minlength="3" />`,
      options: [
        { en: 'Submits with the short value', bn: 'ছোট মান নিয়েই সাবমিট করে' },
        { en: 'Blocks submission and shows a “too short” bubble', bn: 'সাবমিশন আটকায় ও “too short” বুদবুদ দেখায়' },
        { en: 'Silently clears the field', bn: 'চুপচাপ ফিল্ড খালি করে' },
        { en: 'Throws a console error', bn: 'কনসোলে এরর দেয়' },
      ],
      answer: 1,
      hint: { en: 'The constraint is checked on submit.', bn: 'কনস্ট্রেইন্ট সাবমিটে যাচাই হয়।' },
      explanation: {
        en: 'minlength is a native constraint: validation runs on submit, blocks it, focuses the field and shows a localized message.',
        bn: 'minlength নেটিভ কনস্ট্রেইন্ট: সাবমিটে যাচাই হয়, আটকায়, ফিল্ডে ফোকাস দেয়, স্থানীয় ভাষায় বার্তা দেখায়।',
      },
    },
    {
      id: 'html-form-ex4',
      kind: 'predict',
      topic: 'behavior',
      question: {
        en: 'Focus is in the email input. The user presses Enter. What happens?',
        bn: 'ফোকাস ইমেইল ইনপুটে। ইউজার Enter চাপলে কী হয়?',
      },
      code: `<form>\n  <input name="email" type="email" required />\n  <button>Join</button>\n</form>`,
      options: [
        { en: 'Nothing — only clicks submit', bn: 'কিছুই না — সাবমিট হয় কেবল ক্লিকে' },
        { en: 'The form is submitted (if valid)', bn: 'ফর্ম সাবমিট হয় (বৈধ হলে)' },
        { en: 'Focus moves to the button', bn: 'ফোকাস বাটনে চলে যায়' },
        { en: 'The input clears', bn: 'ইনপুট খালি হয়' },
      ],
      answer: 1,
      hint: { en: 'Enter inside a form activates submission.', bn: 'ফর্মের ভেতরে Enter সাবমিশন চালু করে।' },
      explanation: {
        en: 'Enter in a text control triggers the form’s submit flow (this is why handlers belong on submit, not click).',
        bn: 'টেক্সট কন্ট্রোলে Enter ফর্মের সাবমিট ফ্লো চালু করে (এজন্যই হ্যান্ডলার থাকা দরকার submit-এ, click-এ নয়)।',
      },
    },
  ],
  quiz: {
    id: 'html-form-quiz',
    title: { en: 'Forms Quiz', bn: 'ফর্ম কুইজ' },
    questions: [
      {
        id: 'html-form-q1',
        kind: 'mcq',
        topic: 'constraints',
        question: {
          en: 'Which is NOT a native browser constraint?',
          bn: 'কোনটি নেটিভ ব্রাউজার কনস্ট্রেইন্ট নয়?',
        },
        options: [
          { en: 'required', bn: 'required' },
          { en: 'pattern', bn: 'pattern' },
          { en: 'minlength', bn: 'minlength' },
          { en: 'isvalid', bn: 'isvalid' },
        ],
        answer: 3,
        hint: { en: 'Three of those compile into HTML attributes directly.', bn: 'তিনটি সরাসরি HTML অ্যাট্রিবিউট হয়।' },
        explanation: {
          en: 'required, pattern and minlength are real attributes. isvalid does not exist (the JS API is checkValidity()).',
          bn: 'required, pattern, minlength আসল অ্যাট্রিবিউট। isvalid নেই (JS API হলো checkValidity())।',
        },
      },
      {
        id: 'html-form-q2',
        kind: 'predict',
        topic: 'formdata',
        question: {
          en: 'This form is submitted. What keys does FormData contain?',
          bn: 'ফর্মটি সাবমিট হলো। FormData-তে কী কী কি থাকবে?',
        },
        code: `<form>\n  <input id="a" value="x" />\n  <input name="b" value="y" disabled />\n  <input name="c" value="z" />\n</form>`,
        options: [
          { en: 'a, b, c', bn: 'a, b, c' },
          { en: 'b, c', bn: 'b, c' },
          { en: 'a, c', bn: 'a, c' },
          { en: 'c only', bn: 'শুধু c' },
        ],
        answer: 3,
        hint: { en: 'id ≠ data, disabled = skipped.', bn: 'id ≠ ডেটা, disabled = বাদ।' },
        explanation: {
          en: 'Only named, successful controls submit: the first lacks name, the second is disabled. Just c=z.',
          bn: 'কেবল নামযুক্ত, সফল কন্ট্রোল যায়: প্রথমটির name নেই, দ্বিতীয়টি disabled। শুধু c=z।',
        },
      },
      {
        id: 'html-form-q3',
        kind: 'mcq',
        topic: 'method',
        question: {
          en: 'method="get" on a search form means the data travels…',
          bn: 'সার্চ ফর্মে method="get" অর্থ ডেটা ভ্রমণ করে…',
        },
        options: [
          { en: 'in the URL query string (shareable)', bn: 'URL কোয়েরি স্ট্রিংয়ে (শেয়ারযোগ্য)' },
          { en: 'encrypted in the body', bn: 'এনক্রিপ্ট হয়ে বডিতে' },
          { en: 'via WebSocket', bn: 'WebSocket দিয়ে' },
          { en: 'only to the server log', bn: 'শুধু সার্ভার লগে' },
        ],
        answer: 0,
        hint: { en: 'Think /search?q=html.', bn: 'ভাবুন: /search?q=html।' },
        explanation: {
          en: 'GET appends name=value pairs to the action URL — bookmarkable, shareable, and visible. POST sends them in the request body.',
          bn: 'GET action URL-এ name=value জোড়ে — বুকমার্ক ও শেয়ারযোগ্য, সবার চোখে। POST পাঠায় রিকোয়েস্ট বডিতে।',
        },
      },
      {
        id: 'html-form-q4',
        kind: 'mcq',
        topic: 'accessibility',
        question: {
          en: 'The accessibility-correct way to group radio buttons is…',
          bn: 'রেডিও বাটন গোষ্ঠীবদ্ধ করার অ্যাক্সেসিবিলিটি-সঠিক উপায়…',
        },
        options: [
          { en: '<div class="group">', bn: '<div class="group">' },
          { en: '<fieldset> + <legend>', bn: '<fieldset> + <legend>' },
          { en: '<ul> only', bn: 'শুধু <ul>' },
          { en: 'Wrapping in a <table>', bn: '<table>-এ মোড়ানো' },
        ],
        answer: 1,
        hint: { en: 'It announces a caption for the whole group.', bn: 'এটি পুরো গোষ্ঠীর শিরোনাম ঘোষণা করে।' },
        explanation: {
          en: '<fieldset> groups controls; <legend> is its accessible name — screen readers announce “Group: payment method, radio 1 of 3”.',
          bn: '<fieldset> কন্ট্রোল গোষ্ঠীবদ্ধ করে; <legend> তার অ্যাক্সেসিবল নাম — স্ক্রিন রিডার বলে “গ্রুপ: পেমেন্ট মেথড, রেডিও ১ (মোট ৩ টির মধ্যে)”।',
        },
      },
    ],
  },
  next: { slug: 'html-modern-apis', title: { en: 'The Modern Shelf: the browser stops being a library', bn: 'আধুনিক তাক: ব্রাউজার আর লাইব্রেরি থাকে না' } },
};
