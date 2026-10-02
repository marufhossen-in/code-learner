import type { Lesson } from '../../../lib/types';

export const formPressLesson: Lesson = {
  slug: 'the-form-press',
  tech: 'react',
  title: {
    en: 'React Forms & Actions: Controlled Inputs, useActionState & Optimistic UI',
    bn: 'রিঅ্যাক্ট ফর্ম ও অ্যাকশনস: নিয়ন্ত্রিত ইনপুট, useActionState ও অপটিমিস্টিক UI'
  },
  summary: {
    en: 'Master modern React form engineering across 10 structured topics, from controlled inputs to React 19 native form actions. Learn dynamic multi-input handlers, uncontrolled FormData extraction, useActionState, and useOptimistic.',
    bn: 'নিয়ন্ত্রিত ইনপুট থেকে শুরু করে React 19 নেটিভ ফর্ম অ্যাকশন পর্যন্ত 10 টি বিষয়ে আধুনিক ফর্ম ইঞ্জিনিয়ারিং আয়ত্ত করুন। জানুন ডায়নামিক বহু-ইনপুট হ্যান্ডলার, অনিয়ন্ত্রিত FormData সংগ্রহ, useActionState এবং useOptimistic।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-composition-mill',
    title: {
      en: 'React Component Composition: Compound Components, Slots & HOCs',
      bn: 'রিঅ্যাক্ট কম্পোনেন্ট কম্পোজিশন: কম্পাউন্ড কম্পোনেন্ট, স্লট ও HOC'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Form Philosophy: Controlled vs Uncontrolled Components', bn: '১. ফর্ম দর্শন: নিয়ন্ত্রিত বনাম অনিয়ন্ত্রিত কম্পোনেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'React offers two distinct philosophies for managing user inputs: 1) Controlled Components, where form input values are stored in React component state, making React the single source of truth. 2) Uncontrolled Components, where form inputs retain their own internal state in the browser DOM. And values are pulled on demand using `useRef` or `FormData`.',
        bn: 'রিঅ্যাক্টে ফর্মের ডেটা সামলানোর দুটি সুস্পষ্ট দর্শন রয়েছে: 1) Controlled Components, যেখানে ইনপুটের প্রতিটি মান রিঅ্যাক্টের নিজস্ব স্টেটে জমা থাকে এবং রিঅ্যাক্টই তথ্যের একমাত্র সত্য উৎস হয়। 2) Uncontrolled Components, যেখানে ইনপুটগুলো ব্রাউজারের নিজস্ব মেমরিতে মান ধরে রাখে এবং সাবমিটের সময় `useRef` বা `FormData` দিয়ে মান সংগ্রহ করা হয়।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Controlled: React controls every keystroke via state
// Uncontrolled: Browser DOM holds input state until submission

console.log("Form philosophies: Controlled (State-driven) vs Uncontrolled (DOM-driven)");
// Output: Form philosophies: Controlled (State-driven) vs Uncontrolled (DOM-driven)`,
      caption: {
        en: 'Controlled inputs bind values to state; uncontrolled inputs leave state in the DOM.',
        bn: 'নিয়ন্ত্রিত ইনপুট স্টেটের সাথে বাঁধা থাকে; অনিয়ন্ত্রিত ইনপুট ব্রাউজার ডমে মান রাখে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Controlled Inputs: Single Source of Truth', bn: '২. নিয়ন্ত্রিত ইনপুট: তথ্যের একক ও নির্ভুল উৎস' } },
    {
      type: 'para',
      text: {
        en: 'A controlled input pairs two attributes: value={text} reads from state, and onChange={(e) => setText(e.target.value)} writes back to state. This enables immediate keystroke validation, formatting masks (credit cards, phone numbers), and conditionally disabling submit buttons.',
        bn: 'একটি নিয়ন্ত্রিত ইনপুটে দুটি প্রধান অ্যাট্রিবিউট থাকে: value={text} স্টেট থেকে মান পড়ে, এবং onChange={(e) => setText(e.target.value)} প্রতি কী-চাপে নতুন মান স্টেটে পাঠিয়ে দেয়। এর ফলে প্রতিটি অক্ষরের সাথে সাথে ভ্যালিডেশন করা, নির্দিষ্ট ফরম্যাটে লেখা বা বাটন সক্রিয়/নিষ্ক্রিয় করা সম্ভব হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useState } from "react";

function ControlledSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    // Immediate uppercase transformation on input:
    setSearchTerm(e.target.value.toUpperCase());
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="SEARCH CODEBASE"
    />
  );
}

const search = ControlledSearch();
console.log(search.props.placeholder); // "SEARCH CODEBASE"`,
      caption: {
        en: 'Controlled inputs intercept and transform keystrokes before they render to the screen.',
        bn: 'নিয়ন্ত্রিত ইনপুট স্ক্রিনে দেখানোর আগেই প্রতিটি অক্ষরকে রূপান্তর বা যাচাই করতে পারে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Multi-Input Handling: Dynamic Computed Properties', bn: '৩. বহু-ইনপুট হ্যান্ডলিং: ডায়নামিক কম্পিউটেড প্রোপার্টি' } },
    {
      type: 'para',
      text: {
        en: 'Creating 10 individual useState hooks for a 10-field form is cumbersome. Instead, store form fields in a single state object, give every input a name attribute matching the object key, and use ES6 computed property names: setForm({ ...form, [e.target.name]: e.target.value }).',
        bn: '১০টি ফিল্ডের একটি ফর্মের জন্য ১০টি আলাদা useState লেখা ক্লান্তিকর। এর বদলে পুরো ফর্মকে একটি একক অবজেক্ট স্টেটে রেখে প্রতিটি ইনপুটে name অ্যাট্রিবিউট দেওয়া হয়, এবং ES6 কম্পিউটেড প্রোপার্টির সাহায্যে এক লাইনেই আপডেট করা হয়: setForm({ ...form, [e.target.name]: e.target.value })।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "dev_fahim",
    email: "fahim@codeshikhon.com",
    role: "student"
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    // Dynamic property assignment:
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleFieldChange };
}

const reg = RegistrationForm();
console.log(reg.formData.username, reg.formData.role); // "dev_fahim" "student"`,
      caption: {
        en: 'Computed property names allow one change handler to drive an entire form object.',
        bn: 'কম্পিউটেড প্রোপার্টির সাহায্যে একটিমাত্র ফাংশন দিয়ে পুরো ফর্ম নিয়ন্ত্রণ করা যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Textareas and Selects: React’s Unified value Pattern', bn: '৪. টেক্সটেরিয়া ও সিলেক্ট ড্রপডাউন: অভিন্ন value প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'In HTML, textarea places text between opening and closing tags, while select uses the selected attribute on option tags. React normalizes all of these: both <textarea> and <select> take a standard value={state} and onChange prop, making form code completely consistent.',
        bn: 'সাধারণ এইচটিএমএলে textarea-র লেখা দুই ট্যাগের মাঝে লিখতে হয় এবং select-এ অপশনের ভেতর selected লিখতে হয়। রিঅ্যাক্ট এই নিয়মগুলোকে সহজ করে অভিন্ন বানিয়েছে: <textarea> এবং <select> উভয় জায়গাতেই সাধারণ value={state} এবং onChange কাজ করে, যা কোডকে চমৎকার সামঞ্জস্যপূর্ণ রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function FeedbackForm() {
  const [comment, setComment] = useState("Great learning platform!");
  const [rating, setRating] = useState("5");

  return (
    <div>
      {/* React uses value attribute on textarea, NOT children! */}
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />

      {/* React uses value on select, NOT selected on option! */}
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">1 Star</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
}

const fb = FeedbackForm();
console.log("Textarea controlled value:", fb.props.children[0].props.value); // "Great learning platform!"
console.log("Select controlled rating:", fb.props.children[1].props.value);   // "5"`,
      caption: {
        en: 'React normalizes textarea and select to use the same value and onChange props as input.',
        bn: 'রিঅ্যাক্ট টেক্সটেরিয়া ও সিলেক্টের ক্ষেত্রেও সাধারণ ইনপুটের মতো একই value প্রপ ব্যবহার করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Boolean Controls: Checkboxes and Radio Buttons', bn: '৫. বুলিয়ান কন্ট্রোল: চেকবক্স ও রেডিও বাটন গ্রুপ' } },
    {
      type: 'para',
      text: {
        en: 'Checkboxes and radio buttons represent boolean choices. A checkbox binds its state to checked={isChecked} (reading e.target.checked). Radio buttons share the same name attribute and compare their value against the active selection: checked={role === "admin"}.',
        bn: 'চেকবক্স এবং রেডিও বাটন বুলিয়ান বা নির্দিষ্ট পছন্দের প্রতিনিধিত্ব করে। চেকবক্সে value-র বদলে checked={isChecked} ব্যবহার করা হয় (এবং e.target.checked পড়া হয়)। আর রেডিও বাটনগুলো একই name শেয়ার করে এবং নিজস্ব মান মেলায়: checked={role === "admin"}।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function PreferenceToggles() {
  const [newsletter, setNewsletter] = useState(true);
  const [plan, setPlan] = useState("pro");

  return (
    <div>
      {/* Checkbox: bound via checked */}
      <input
        type="checkbox"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />

      {/* Radio Buttons: grouped by name */}
      <input
        type="radio"
        name="plan"
        value="free"
        checked={plan === "free"}
        onChange={(e) => setPlan(e.target.value)}
      />
      <input
        type="radio"
        name="plan"
        value="pro"
        checked={plan === "pro"}
        onChange={(e) => setPlan(e.target.value)}
      />
    </div>
  );
}

const toggles = PreferenceToggles();
console.log("Checkbox state:", toggles.props.children[0].props.checked); // true
console.log("Pro radio state:", toggles.props.children[2].props.checked); // true`,
      caption: {
        en: 'Checkboxes and radio buttons read checked states rather than text values.',
        bn: 'চেকবক্স ও রেডিও বাটন টেক্সটের বদলে checked স্টেট দিয়ে পরিচালিত হয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Uncontrolled Forms: FormData and Fast Extraction', bn: '৬. অনিয়ন্ত্রিত ফর্ম: FormData এবং দ্রুত ডেটা সংগ্রহ' } },
    {
      type: 'para',
      text: {
        en: 'For large forms where you do not need keystroke-by-keystroke re-rendering, Uncontrolled Forms offer superior performance. Inputs manage their own DOM state; on submit, e.preventDefault() passes e.currentTarget to the browser native new FormData(form), extracting all named fields instantly.',
        bn: 'যেসব ফর্মে প্রতি অক্ষরে রেন্ডার করার দরকার নেই, সেখানে Uncontrolled Forms অনেক দ্রুত কাজ করে। ইনপুটগুলো নিজে নিজেই ডমে মান রাখে; সাবমিটের সময় new FormData(e.currentTarget) দিয়ে এক ক্লিকেই ফর্মে থাকা সব ডেটা অবজেক্ট আকারে সংগ্রহ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function FastCheckoutForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const order = {
      address: data.get("address"),
      postalCode: data.get("postal")
    };
    console.log("Extracted order payload:", order);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="address" defaultValue="House 42, Road 7" />
      <input name="postal" defaultValue="1212" />
      <button type="submit">Submit Order</button>
    </form>
  );
}

console.log(typeof FastCheckoutForm); // "function"`,
      caption: {
        en: 'FormData gathers all form inputs on submit without keeping them in React state.',
        bn: 'FormData সাবমিটের সময় রিঅ্যাক্ট স্টেটে না রেখেই সব ইনপুটের ডেটা তুলে আনে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Modern Form Actions: Native <form action={fn}> in React 19', bn: '৭. আধুনিক ফর্ম অ্যাকশনস: React 19 এর <form action={fn}>' } },
    {
      type: 'para',
      text: {
        en: 'React 19 introduces first-class Form Actions. Instead of manually writing onSubmit and calling e.preventDefault(), you pass an async action function directly to the form’s action prop: <form action={updateProfile}>. React automatically passes the populated FormData object and manages transition pending states.',
        bn: 'React 19 ভার্সনে Form Actions যুক্ত হয়েছে। নিজে হাতে onSubmit লিখে e.preventDefault() কল করার বদলে সরাসরি ফর্মের action প্রপে একটি async ফাংশন দেওয়া যায়: <form action={updateProfile}>। রিঅ্যাক্ট নিজে থেকেই FormData অবজেক্ট তৈরি করে ফাংশনটিতে পাঠায় এবং লোডিং অবস্থা সামলায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `async function saveProfile(formData) {
  const name = formData.get("name");
  console.log("Server action received profile update for:", name);
  return { success: true };
}

function ModernForm() {
  return (
    <form action={saveProfile}>
      <input name="name" defaultValue="Sakib Al Hasan" />
      <button type="submit">Save Profile</button>
    </form>
  );
}

console.log(typeof ModernForm); // "function"`,
      caption: {
        en: 'React 19 form actions eliminate onSubmit boilerplate and integrate with server transitions.',
        bn: 'React ১৯ ফর্ম অ্যাকশনস বাড়তি কোড মুছে ফেলে সরাসরি ফর্মের সাথে অ্যাকশন যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Action State Management: The useActionState Hook', bn: '৮. অ্যাকশন স্টেট ব্যবস্থাপনা: useActionState হুক' } },
    {
      type: 'para',
      text: {
        en: 'Managing errors, return values, and pending indicators during form submissions is standardized by React 19’s useActionState hook: const [state, formAction, isPending] = useActionState(actionFn, initialState). It updates state when the action resolves and flags isPending during execution.',
        bn: 'ফর্ম সাবমিটের সময় এরর, ফিরতি মেসেজ এবং লোডিং স্ট্যাটাস সামলানোর জন্য React 19 এ useActionState হুক যুক্ত হয়েছে: const [state, formAction, isPending] = useActionState(actionFn, initialState)। এটি কাজ চলাকালীন isPending চালু রাখে এবং অ্যাকশন শেষ হলে নতুন স্টেট দিয়ে পেজ আপডেট করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useActionState } from "react";

async function subscribeAction(previousState, formData) {
  const email = formData.get("email");
  if (!email.includes("@")) {
    return { error: "Please enter a valid email address" };
  }
  return { success: true, message: \`Subscribed \${email} successfully!\` };
}

function NewsletterBox() {
  const [state, formAction, isPending] = useActionState(subscribeAction, null);

  return { state, formAction, isPending };
}

console.log(typeof NewsletterBox); // "function"`,
      caption: {
        en: 'useActionState encapsulates form return states, errors, and pending flags in one hook.',
        bn: 'useActionState এক হুকের মাধ্যমেই ফর্মের ফলাফল, এরর এবং লোডিং অবস্থা পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Subtree Pending States: The useFormStatus Hook', bn: '৯. সাবট্রির অপেক্ষার নির্দেশক: useFormStatus হুক' } },
    {
      type: 'para',
      text: {
        en: 'Child components rendered inside a <form> often need to know if the parent form is currently submitting (e.g. to disable the submit button and show a spinner). The useFormStatus hook reads the status of the nearest parent form directly without passing props through intermediate layers.',
        bn: '<form>-এর ভেতরের চাইল্ড কম্পোনেন্টগুলোকে প্রায়ই জানতে হয় ফর্মটি সাবমিট হচ্ছে কি না (যেমন বাটন ডিসেবল করা বা স্পিনার দেখানো)। useFormStatus হুক কোনো প্রপস পাস করা ছাড়াই সরাসরি সবচেয়ে কাছের মূল ফর্মটির সাবমিশন স্ট্যাটাস পড়ে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useFormStatus } from "react-dom";

function SubmitButton({ label }) {
  // Inspects the nearest parent <form> without prop drilling!
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : label}
    </button>
  );
}

console.log(typeof SubmitButton); // "function"`,
      caption: {
        en: 'useFormStatus lets buttons and inputs inspect parent form submission states directly.',
        bn: 'useFormStatus বোতাম বা ইনপুটকে কোনো প্রপস ছাড়াই মূল ফর্মের সাবমিট অবস্থা বুঝতে দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Instant Feedback: Optimistic UI with useOptimistic', bn: '১০. তাৎক্ষণিক প্রতিক্রিয়া: useOptimistic দিয়ে অপটিমিস্টিক UI' } },
    {
      type: 'para',
      text: {
        en: 'When a user likes a post or sends a chat message, waiting 500ms for the server to reply feels sluggish. React 19’s useOptimistic hook lets you display the expected successful state instantly. If the server action later fails, React automatically rolls the UI back to the true server state.',
        bn: 'যখন কোনো ব্যবহারকারী পোস্টে লাইক দেন বা চ্যাটে মেসেজ পাঠান, সার্ভার থেকে উত্তরের জন্য 500ms অপেক্ষা করা বিরক্তির কারণ হয়। React 19 এর useOptimistic হুক সাথে সাথে সফল অবস্থা স্ক্রিনে দেখিয়ে দেয়। পরবর্তীতে সার্ভার অ্যাকশন ব্যর্থ হলে রিঅ্যাক্ট স্বয়ংক্রিয়ভাবে আগের সত্য অবস্থায় ফিরে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useOptimistic } from "react";

function MessageThread({ messages, onSendMessage }) {
  // Optimistically appends outgoing message while server request is in-flight:
  const [optimisticMessages, setOptimistic] = useOptimistic(
    messages,
    (current, newMessageText) => [
      ...current,
      { id: "temp-id", text: newMessageText, pending: true }
    ]
  );

  return { optimisticMessages };
}

console.log(typeof MessageThread); // "function"`,
      caption: {
        en: 'useOptimistic renders anticipated success states immediately, rolling back on failure.',
        bn: 'useOptimistic তাৎক্ষণিক সাফল্যের দৃশ্য দেখায় এবং ব্যর্থ হলে স্বয়ংক্রিয়ভাবে আগের অবস্থায় ফেরে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-for-ex1',
      kind: 'predict',
      topic: 'react: controlled input single source of truth',
      question: {
        en: 'In a React Controlled Component, what is the single source of truth that dictates the current value of the input?',
        bn: 'রিঅ্যাক্ট নিয়ন্ত্রিত কম্পোনেন্টে (Controlled Component) ইনপুটের বর্তমান মান নির্ধারণের একক সত্য উৎস কোনটি?'
      },
      code: `/* Controlled input value binding */
/* <input value={_________} onChange={handleChange} /> */`,
      answer: 'state',
      accept: ['state', 'component state', 'React state'],
      hint: {
        en: 'React component memory.',
        bn: 'রিঅ্যাক্ট কম্পোনেন্টের মেমরি বা স্টেট।'
      },
      explanation: {
        en: 'In controlled components, input values are completely driven by React component state, ensuring synchronization.',
        bn: 'নিয়ন্ত্রিত কম্পোনেন্টে ইনপুটের প্রতিটি মান সরাসরি রিঅ্যাক্ট স্টেট দ্বারা নিয়ন্ত্রিত হয়।'
      }
    },
    {
      id: 'rea-for-ex2',
      kind: 'mcq',
      topic: 'react: useFormStatus requirement',
      question: {
        en: 'Where must a component calling useFormStatus be located in the component tree?',
        bn: 'useFormStatus ব্যবহারকারী একটি কম্পোনেন্টকে কম্পোনেন্ট ট্রির ঠিক কোথায় অবস্থিত হতে হবে?'
      },
      options: [
        { en: 'Inside a child component rendered within a <form>, to inspect the parent form’s pending status', bn: 'একটি <form>-এর ভেতরে রেন্ডার হওয়া চাইল্ড কম্পোনেন্টের ভেতর, যাতে প্যারেন্ট ফর্মের অবস্থা পর্যবেক্ষণ করা যায়' },
        { en: 'Outside the HTML body tag', bn: 'HTML বডি ট্যাগের বাইরে' },
        { en: 'Inside package.json', bn: 'package.json-এর ভেতর' },
        { en: 'Directly in the server terminal', bn: 'সার্ভার টার্মিনালে' }
      ],
      answer: 0,
      hint: {
        en: 'Must be rendered as a child of a form.',
        bn: 'একটি ফর্মের চাইল্ড হিসেবে রেন্ডার হতে হবে।'
      },
      explanation: {
        en: 'useFormStatus reads context provided by a parent <form>. It must be invoked from a component rendered inside that form, not the form itself.',
        bn: 'useFormStatus মূল <form>-এর কনটেক্সট থেকে তথ্য নেয়, তাই এটিকে ওই ফর্মের ভেতরের একটি চাইল্ড কম্পোনেন্ট হতে হয়।'
      }
    },
    {
      id: 'rea-for-ex3',
      kind: 'mcq',
      topic: 'react: useOptimistic benefit',
      question: {
        en: 'What user experience improvement does the useOptimistic hook provide in React applications?',
        bn: 'রিঅ্যাক্ট অ্যাপ্লিকেশনে useOptimistic হুক ব্যবহারকারীর অভিজ্ঞতায় কোন বিশেষ উন্নতি আনে?'
      },
      options: [
        { en: 'It displays anticipated successful changes immediately before server confirmation, with automatic rollback if the action fails', bn: 'সার্ভার থেকে উত্তর আসার আগেই তাৎক্ষণিকভাবে সফল পরিবর্তন স্ক্রিনে দেখিয়ে দেয় এবং অ্যাকশন ব্যর্থ হলে স্বয়ংক্রিয়ভাবে পূর্বাবস্থায় ফেরে' },
        { en: 'It makes network packets smaller', bn: 'নেটওয়ার্ক প্যাকেট ছোট করে' },
        { en: 'It turns the page background blue', bn: 'পেজের ব্যাকগ্রাউন্ড নীল করে' },
        { en: 'It disables all CSS', bn: 'সব সিএসএস বন্ধ করে' }
      ],
      answer: 0,
      hint: {
        en: 'Shows expected success instantly with rollback on error.',
        bn: 'তাৎক্ষণিক সাফল্য দেখায় এবং এরর হলে পূর্বাবস্থায় ফেরে।'
      },
      explanation: {
        en: 'useOptimistic provides snappy, zero-latency user feedback by rendering expected outcomes while asynchronous server operations are in-flight.',
        bn: 'useOptimistic ব্যাকগ্রাউন্ডে কাজ চলার সময়ই ব্যবহারকারীকে তাত্ক্ষণিক ফলাফল দেখিয়ে অ্যাপকে অবিশ্বাস্য রকমের দ্রুতগতির অনুভূতি দেয়।'
      }
    }
  ],
  quiz: {
    id: 'rea-forms-quiz',
    title: { en: 'React Forms & Actions Quiz', bn: 'রিঅ্যাক্ট ফর্ম ও অ্যাকশনস কুইজ' },
    questions: [
      {
        id: 'rfq1',
        kind: 'mcq',
        topic: 'react: textarea normalization',
        question: {
          en: 'How does React handle the value of a <textarea> element compared to standard HTML?',
          bn: 'এইচটিএমএলের তুলনায় রিঅ্যাক্ট কীভাবে <textarea> এলিমেন্টের মান পরিচালনা করে?'
        },
        options: [
          { en: 'React normalizes <textarea> to use a value attribute (like a regular input), instead of nesting text as children', bn: 'রিঅ্যাক্ট <textarea>-কে সাধারণ ইনপুটের মতো একটি value অ্যাট্রিবিউট ব্যবহার করতে বাধ্য করে, চিলড্রেন হিসেবে টেক্সট লেখার বদলে' },
          { en: 'React deletes textareas', bn: 'টেক্সটেরিয়া মুছে ফেলে' },
          { en: 'React converts textareas to canvas', bn: 'ক্যানভাসে রূপান্তর করে' },
          { en: 'React only allows 10 characters', bn: 'মাত্র 10 টি অক্ষর লেখার অনুমতি দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'React uses the value prop on textarea.',
          bn: 'রিঅ্যাক্ট টেক্সটেরিয়াতে value প্রপ ব্যবহার করে।'
        },
        explanation: {
          en: 'React provides a consistent API where both input and textarea read their content from the value prop and update via onChange.',
          bn: 'রিঅ্যাক্ট একটি অভিন্ন এপিআই প্রদান করে যাতে input এবং textarea উভয়ই value প্রপ থেকে মান গ্রহণ করে।'
        }
      },
      {
        id: 'rfq2',
        kind: 'mcq',
        topic: 'react: computed property names in multi-input forms',
        question: {
          en: 'Why is [e.target.name]: e.target.value used when updating multi-input form state?',
          bn: 'বহু-ইনপুট ফর্ম স্টেট আপডেটের সময় [e.target.name]: e.target.value কেন ব্যবহার করা হয়?'
        },
        options: [
          { en: 'It dynamically targets the specific field key in the state object matching the input’s name attribute, allowing a single handler to manage all fields', bn: 'ইনপুটের name অ্যাট্রিবিউটের সাথে মিল রেখে স্টেট অবজেক্টের নির্দিষ্ট কি-কে ডায়নামিকালি আপডেট করে, ফলে একটিমাত্র ফাংশন দিয়েই সব ফিল্ড পরিচালনা করা যায়' },
          { en: 'It deletes the field after typing', bn: 'টাইপ করার পর ফিল্ড মুছে দেয়' },
          { en: 'It makes the browser reload', bn: 'ব্রাউজার রিলোড করায়' },
          { en: 'It converts numbers to roman numerals', bn: 'সংখ্যাকে রোমান সংখ্যায় রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Dynamically updates matching key in state.',
          bn: 'স্টেটের নির্দিষ্ট কি-কে ডায়নামিকালি আপডেট করে।'
        },
        explanation: {
          en: 'Computed property names allow one generic change handler to update any field in a state object based on the input element’s name.',
          bn: 'কম্পিউটেড প্রোপার্টির মাধ্যমে ইনপুটের name অনুসারে স্টেটের নির্দিষ্ট ফিল্ডটি সহজেই আপডেট করা যায়।'
        }
      },
      {
        id: 'rfq3',
        kind: 'mcq',
        topic: 'react: useFormStatus hook',
        question: {
          en: 'What is the main benefit of the useFormStatus hook in React 19 form architectures?',
          bn: 'React 19 ফর্ম আর্কিটেকচারে useFormStatus হুক ব্যবহারের প্রধান সুবিধা কী?'
        },
        options: [
          { en: 'It allows child submit buttons to read pending status directly from the parent form without prop drilling', bn: 'প্রপ ড্রিলিং ছাড়াই চাইল্ড সাবমিট বাটন সরাসরি প্যারেন্ট ফর্মের পেন্ডিং স্ট্যাটাস জানতে পারে' },
          { en: 'It validates email addresses automatically', bn: 'স্বয়ংক্রিয়ভাবে ইমেইল যাচাই করে' },
          { en: 'It resets browser network cache', bn: 'ব্রাউজার ক্যাশ রিসেট করে' },
          { en: 'It converts forms to PDF files', bn: 'ফর্মকে পিডিএফে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Child buttons read pending status from the parent form context.',
          bn: 'চাইল্ড বাটন প্যারেন্ট ফর্মের কনটেক্সট থেকে পেন্ডিং অবস্থা পড়ে।'
        },
        explanation: {
          en: 'useFormStatus gives nested components access to form state like pending, data, and method without having to thread callbacks down the component hierarchy.',
          bn: 'useFormStatus নেস্টেড বাটনকে অভিভাবক ফর্মের অবস্থা জানায়, যার ফলে প্রপস পাস না করেই লোডিং স্পিনার বা ডিজেবল স্ট্যাটাস দেখানো যায়।'
        }
      },
      {
        id: 'rfq4',
        kind: 'mcq',
        topic: 'react: useOptimistic purpose',
        question: {
          en: 'What problem does the useOptimistic hook solve in asynchronous user actions?',
          bn: 'অ্যাসিনক্রোনাস ব্যবহারকারী অ্যাকশনে useOptimistic হুক কোন সমস্যাটি সমাধান করে?'
        },
        options: [
          { en: 'It immediately renders the expected successful outcome on screen while the background network mutation completes', bn: 'ব্যাকগ্রাউন্ডে নেটওয়ার্ক রিকোয়েস্ট চলার সময়ই স্ক্রিনে সম্ভাব্য সফল ফলাফল তাত্ক্ষণিক প্রদর্শন করে' },
          { en: 'It automatically retries failed network calls forever', bn: 'ব্যর্থ রিকোয়েস্ট অনন্তকাল পুনরায় চেষ্টা করে' },
          { en: 'It encrypts local storage tokens', bn: 'লোকাল স্টোরেজ টোকেন এনক্রিপ্ট করে' },
          { en: 'It prevents all button clicks', bn: 'সকল বাটন ক্লিক বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Shows instant feedback before server confirmation.',
          bn: 'সার্ভার উত্তরের আগেই তাত্ক্ষণিক ফিডব্যাক দেখায়।'
        },
        explanation: {
          en: 'useOptimistic gives users immediate visual feedback (e.g. like count increments immediately). If the server rejects the request, React seamlessly reverts to the true server state.',
          bn: 'useOptimistic ব্যবহারকারীকে কোনো বিলম্ব ছাড়াই তাৎক্ষণিক ফলাফল দেখিয়ে অ্যাপকে দ্রুতগতির অনুভূতি দেয় এবং সার্ভার ব্যর্থ হলে আগের অবস্থায় ফিরিয়ে আনে।'
        }
      }
    ]
  }
};
