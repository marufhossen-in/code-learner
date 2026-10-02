import type { Lesson } from '../../../lib/types';

export const componentCommonsLesson: Lesson = {
  slug: 'the-component-commons',
  tech: 'vue',
  title: {
    en: 'Component Communication — Props, Emits, Slots & provide/inject',
    bn: 'কম্পোনেন্ট যোগাযোগ — Props, Emits, Slots ও provide/inject'
  },
  summary: {
    en: 'Building scalable Vue applications requires structured communication patterns between components. In this lesson, you will master the one-way data flow of defineProps and defineEmits, implement custom component v-model two-way bindings, distribute flexible layouts with named and scoped slots, and bypass prop drilling using provide and inject.',
    bn: 'স্কেলেবল Vue অ্যাপ্লিকেশন তৈরিতে কম্পোনেন্টগুলোর মাঝে সুশৃঙ্খল যোগাযোগ ব্যবস্থা প্রয়োজন। এই পাঠে আপনি defineProps ও defineEmits-এর একমুখী ডাটা প্রবাহ, কম্পোনেন্টে কাস্টম v-model বাইন্ডিং, নামযুক্ত ও স্কোপড স্লট দিয়ে নমনীয় লেআউট এবং provide ও inject দিয়ে প্রপ ড্রিলিং এড়ানোর কৌশল গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'component-communication-architecture',
      text: {
        en: 'The Component Communication and Data Flow Architecture',
        bn: 'কম্পোনেন্ট যোগাযোগ ও ডাটা প্রবাহ আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you organize Vue applications into modular trees, components collaborate through well-defined boundaries. Data flows downward from parents to children through typed props, while notifications flow upward through emitted events. When UI requirements call for deep tree data sharing, provide and inject establish direct communication pipelines without intermediate prop drilling.',
        bn: 'যখন আপনি একটি Vue অ্যাপ্লিকেশনকে বিভিন্ন মডিউলে ভাগ করেন, তখন উপাদানগুলো নির্দিষ্ট নিয়মে পরস্পরের সাথে যুক্ত থাকে। প্যারেন্ট থেকে চাইল্ডের দিকে ডাটা একমুখীভাবে প্রপসের মাধ্যমে নিচে নামে, আর চাইল্ড কোনো ঘটনার খবর প্যারেন্টকে জানাতে ইভেন্ট emit করে। আর অনেক ধাপ গভীরে সরাসরি ডাটা পৌঁছাতে provide এবং inject ব্যবহার করা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'defineProps()',
          def: {
            en: 'A compiler macro declaring the input data properties a child component accepts from its parent.',
            bn: 'একটি কমপাইলার ম্যাক্রো যা নির্ধারণ করে প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কী কী ডাটা গ্রহণ করবে।'
          }
        },
        {
          term: 'defineEmits()',
          def: {
            en: 'A compiler macro specifying the custom events a child component can emit to notify parent listeners.',
            bn: 'একটি কমপাইলার ম্যাক্রো যা চাইল্ড কম্পোনেন্ট থেকে প্যারেন্টকে সংকেত পাঠানোর ইভেন্ট তালিকা ঘোষণা করে।'
          }
        },
        {
          term: 'Scoped Slots',
          def: {
            en: 'A slot mechanism allowing a child component to pass internal data upward into the parent slot template.',
            bn: 'একটি স্লট ব্যবস্থা যার মাধ্যমে চাইল্ড কম্পোনেন্ট তার ভেতরের ডাটা প্যারেন্টের স্লট টেমপ্লেটে ব্যবহারের সুযোগ দেয়।'
          }
        },
        {
          term: 'provide / inject',
          def: {
            en: 'A dependency injection pair passing reactive state directly from an ancestor component to deeply nested descendants.',
            bn: 'একটি ডিপেন্ডেন্সি ইনজেকশন জোড়া যা পূর্বপুরুষ কম্পোনেন্ট থেকে সরাসরি দূরবর্তী বংশধর উপাদানে ডাটা পৌঁছে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'communication-patterns-matrix',
      text: {
        en: 'Component Communication Patterns Matrix',
        bn: 'কম্পোনেন্ট যোগাযোগ কৌশল ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Pattern Name', bn: 'কৌশল' },
        { en: 'Direction of Flow', bn: 'ডাটার প্রবাহের দিক' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' }
      ],
      rows: [
        [
          { en: 'Props Down', bn: 'প্রপস (নিচে)' },
          { en: 'Parent to direct Child', bn: 'প্যারেন্ট থেকে সরাসরি চাইল্ডে' },
          { en: 'defineProps<{ title: string; count?: number }>()', bn: 'defineProps<{ title: string; count?: number }>()' }
        ],
        [
          { en: 'Events Up', bn: 'ইভেন্টস (উপরে)' },
          { en: 'Child to direct Parent', bn: 'চাইল্ড থেকে সরাসরি প্যারেন্টে' },
          { en: 'const emit = defineEmits(["update"]); emit("update", id)', bn: 'const emit = defineEmits(["update"]); emit("update", id)' }
        ],
        [
          { en: 'Scoped Slots', bn: 'স্কোপড স্লট' },
          { en: 'Child data into Parent template', bn: 'চাইল্ডের ডাটা প্যারেন্ট টেমপ্লেটে' },
          { en: '<slot :item="row" /> and <template #default="{ item }">', bn: '<slot :item="row" /> এবং <template #default="{ item }">' }
        ],
        [
          { en: 'provide / inject', bn: 'provide / inject' },
          { en: 'Ancestor to deep Descendants', bn: 'পূর্বপুরুষ থেকে গভীর বংশধরে' },
          { en: 'provide("theme", activeTheme) and const theme = inject("theme")', bn: 'provide("theme", activeTheme) এবং const theme = inject("theme")' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'communication-simulation-code',
      text: {
        en: 'Working Props, Emits and provide/inject Simulation',
        bn: 'কার্যকরী প্রপস, ইমিটস ও provide/inject সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vue Component Tree Communication: Props, Emits & Inject
class MockComponentNode {
  constructor(name, parent = null) {
    this.name = name;
    this.parent = parent;
    this.injectedContext = new Map();
    this.emittedEvents = [];
  }

  // Simulates provide: stores key-value on ancestor
  provide(key, value) {
    this.injectedContext.set(key, value);
  }

  // Simulates inject: walks ancestor tree to locate key
  inject(key) {
    let current = this;
    while (current) {
      if (current.injectedContext.has(key)) {
        return current.injectedContext.get(key);
      }
      current = current.parent;
    }
    return undefined;
  }

  // Simulates emit: sends event to listeners
  emit(eventName, payload) {
    this.emittedEvents.push({ event: eventName, payload });
    return { received: true, event: eventName, payload };
  }
}

// 1. Root dashboard provides active user role
const rootApp = new MockComponentNode('RootApp');
rootApp.provide('currentUserRole', 'admin');

// 2. Child container nested 2 levels deep
const childContainer = new MockComponentNode('UserPanel', rootApp);
const deepWidget = new MockComponentNode('DeleteButton', childContainer);

// 3. Deep widget injects role without prop drilling
const resolvedRole = deepWidget.inject('currentUserRole');

// 4. Widget emits delete event with ID 101
const emitResult = deepWidget.emit('delete-user', { userId: 101 });

console.log('Deeply injected role value:', resolvedRole);
// -> Deeply injected role value: admin
console.log('Event emitted successfully:', emitResult.received);
// -> Event emitted successfully: true
console.log('Target deleted user identifier:', emitResult.payload.userId);
// -> Target deleted user identifier: 101`,
      caption: {
        en: 'Deep widget injects admin role and emits delete-user event with ID 101',
        bn: 'গভীর উইজেট অ্যাডমিন রোল ইনজেক্ট করছে এবং আইডি ১০১ সহ delete-user ইভেন্ট পাঠাচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'communication-discipline-rules',
      text: {
        en: 'Data Flow Discipline and One-Way Binding Rules',
        bn: 'ডাটা প্রবাহ শৃঙ্খলা ও একমুখী বাইন্ডিং নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The golden rule of Vue component architecture is one-way data flow. A child component must never mutate a prop passed to it by a parent. Direct prop mutation introduces unpredictable side effects, making state changes impossible to debug across component trees. Instead, emit an event requesting the parent to update the source data.',
        bn: 'Vue কম্পোনেন্ট আর্কিটেকচারের সবচেয়ে গুরুত্বপূর্ণ নিয়ম হলো একমুখী ডাটা প্রবাহ। একটি চাইল্ড কম্পোনেন্ট কখনোই প্যারেন্ট থেকে পাওয়া প্রপস নিজে থেকে পরিবর্তন করবে না। সরাসরি প্রপস বদলালে অপ্রত্যাশিত সমস্যা তৈরি হয় যা ডিবাগ করা কঠিন। এর বদলে প্যারেন্টকে ইভেন্ট পাঠিয়ে মূল ডাটা পরিবর্তনের অনুরোধ জানানোই সঠিক পদ্ধতি।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Treat Props as Read-Only: Never assign new values to props inside a child component; use computed or emit updates.',
          bn: '১. প্রপস রিড-অনলি: চাইল্ডের ভেতর প্রপসে নতুন মান অ্যাসাইন করবেন না; প্রয়োজনে computed বা emit ব্যবহার করুন।'
        },
        {
          en: '2. Type Macros in script setup: Declare props using TypeScript generics: defineProps<{ id: number; name: string }>().',
          bn: '২. টাইপ ম্যাক্রো ব্যবহার: টাইপ সুরক্ষার জন্য জেনেরিক সিনট্যাক্সে defineProps<{ id: number; name: string }>() লিখুন।'
        },
        {
          en: '3. Custom v-model with defineModel: In modern Vue 3.4+, use the defineModel() macro for clean two-way parent-child binding.',
          bn: '৩. defineModel এর ব্যবহার: আধুনিক Vue ৩.৪+-এ দুটি কম্পোনেন্টের মাঝে মসৃণ দ্বি-মুখী বাইন্ডিংয়ে defineModel() ব্যবহার করুন।'
        },
        {
          en: '4. Readonly Injections: When using provide to share state globally, wrap the provided value in readonly() to prevent child mutations.',
          bn: '৪. নিরাপদ provide/inject: গ্লোবাল ডাটা শেয়ারের সময় provide করা মানকে readonly() দিয়ে মুড়িয়ে দিন যাতে চাইল্ড তা বদলাতে না পারে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-com-ex1',
      kind: 'mcq',
      topic: 'one-way data flow prop mutation rule',
      question: {
        en: 'Why does Vue throw a console warning if a child component directly attempts to reassign a prop: "props.count = 5"?',
        bn: 'কোনো চাইল্ড কম্পোনেন্ট যদি সরাসরি "props.count = 5" এভাবে প্রপসের মান পরিবর্তন করতে চায়, তবে Vue কেন ওয়ার্নিং দেয়?'
      },
      options: [
        {
          en: 'Props strictly adhere to one-way data flow; mutating a prop inside a child corrupts the parent source state and creates unpredictable side effects during parent re-renders',
          bn: 'প্রপস একমুখী ডাটা প্রবাহ মেনে চলে; চাইল্ডের ভেতর প্রপস বদলালে প্যারেন্টের মূল স্টেট নষ্ট হয় এবং পরবর্তীতে পেজ রেন্ডারে অপ্রত্যাশিত ত্রুটি তৈরি হয়'
        },
        {
          en: 'Because count is a reserved keyword in JavaScript',
          bn: 'কারণ count হলো জাভাস্ক্রিপ্টের একটি সংরক্ষিত শব্দ'
        },
        {
          en: 'To force developers to install a third-party prop compiler',
          bn: 'যাতে ডেভেলপাররা বাধ্য হয়ে থার্ড-পার্টি প্রপ কমপাইলার ইনস্টল করে'
        },
        {
          en: 'Child components can only modify strings, never numbers',
          bn: 'চাইল্ড কম্পোনেন্ট কেবল স্ট্রিং পরিবর্তন করতে পারে, সংখ্যা নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Props flow one way from parent to child to ensure predictable state.',
        bn: 'ডাটা প্রবাহ নিয়ন্ত্রিত রাখতে প্রপস সর্বদা একমুখীভাবে নিচে প্রবাহিত হয়।'
      },
      explanation: {
        en: 'Vue enforces one-way data flow. All props form a one-way-down binding between the child and the parent property. The child should emit an event requesting the parent to update.',
        bn: 'Vue কঠোরভাবে একমুখী ডাটা প্রবাহ অনুসরণ করে। কোনো চাইল্ড সরাসরি প্রপস বদলাতে পারে না; পরিবর্তন দরকার হলে প্যারেন্টকে emit করে অনুরোধ জানাতে হয়।'
      }
    },
    {
      id: 'vu-com-ex2',
      kind: 'mcq',
      topic: 'custom events emission with defineEmits',
      question: {
        en: 'How does a child component notify its parent of a user action (such as selecting item ID 10) in Vue 3 script setup?',
        bn: 'Vue ৩ script setup-এ কোনো চাইল্ড কম্পোনেন্ট কীভাবে প্যারেন্টকে ইউজারের কাজের সংকেত (যেমন আইটেম ১০ বাছাই) পাঠায়?'
      },
      options: [
        {
          en: 'Declare emits with "const emit = defineEmits([\'select\']);" and invoke "emit(\'select\', 10);"',
          bn: '"const emit = defineEmits([\'select\']);" দিয়ে ঘোষণা করে "emit(\'select\', 10);" কল করার মাধ্যমে'
        },
        {
          en: 'Write "this.$parent.select(10)" inside a while loop',
          bn: 'হোয়াইল লুপের ভেতর "this.$parent.select(10)" লিখে'
        },
        {
          en: 'Send an email to the parent component URL',
          bn: 'প্যারেন্ট কম্পোনেন্টের ঠিকানায় একটি ইমেইল পাঠিয়ে'
        },
        {
          en: 'Events can only be emitted from the root HTML body tag',
          bn: 'ইভেন্ট কেবল মূল এইচটিএমএল বডি ট্যাগ থেকেই পাঠানো যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use the defineEmits() compiler macro to declare and trigger custom events.',
        bn: 'কাস্টম ইভেন্ট ঘোষণা ও কার্যকর করতে defineEmits() ম্যাক্রো ব্যবহার করুন।'
      },
      explanation: {
        en: 'In <script setup>, defineEmits() returns an emit function. Calling emit("eventName", payload) dispatches a custom event that the parent can listen to via @event-name="handleEvent".',
        bn: 'defineEmits() একটি ফাংশন তৈরি করে। emit("ইভেন্ট", ডাটা) ডাকলে প্যারেন্ট কম্পোনেন্ট @ইভেন্ট দিয়ে তা সহজে শুনে নিজের স্টেট আপডেট করতে পারে।'
      }
    },
    {
      id: 'vu-com-ex3',
      kind: 'mcq',
      topic: 'scoped slots data passing mechanism',
      question: {
        en: 'What is the primary architectural purpose of "Scoped Slots" in Vue component composition?',
        bn: 'Vue কম্পোনেন্ট কম্পোজিশনে "স্কোপড স্লট"-এর মূল আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It enables a child component to pass data upward into the parent slot template, allowing the parent to customize the visual rendering of items while the child controls the logic and state',
          bn: 'এটি চাইল্ড কম্পোনেন্টকে তার ভেতরের ডাটা প্যারেন্টের স্লট টেমপ্লেটে পাঠানোর সুযোগ দেয়, ফলে চাইল্ড লজিক নিয়ন্ত্রণ করলেও প্যারেন্ট নিজের মতো করে ডিজাইন সাজাতে পারে'
        },
        {
          en: 'It limits the webpage viewport to a mobile phone screen width',
          bn: 'এটি ওয়েবপেজের মাপ কেবল মোবাইল ফোনের স্ক্রিন সাইজে সীমাবদ্ধ করে ফেলে'
        },
        {
          en: 'It prevents the parent component from importing CSS files',
          bn: 'এটি প্যারেন্ট কম্পোনেন্টকে সিএসএস ফাইল ইমপোর্ট করা থেকে বিরত রাখে'
        },
        {
          en: 'Scoped slots are only used for playing animated video clips',
          bn: 'স্কোপড স্লট কেবল অ্যানিমেশন ভিডিও চালানোর জন্য ব্যবহৃত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Scoped slots pass child data into parent templates to customize rendering.',
        bn: 'স্কোপড স্লট চাইল্ডের ভেতরের ডাটা প্যারেন্ট টেমপ্লেটে পৌঁছে দিয়ে ডিজাইনে স্বাধীনতা দেয়।'
      },
      explanation: {
        en: 'Scoped slots pass props from the child to the slot template: <slot :item="item" />. In the parent, <template #default="{ item }"> provides custom markup using the child data.',
        bn: 'স্কোপড স্লটের মাধ্যমে চাইল্ড ডাটা পাঠায় এবং প্যারেন্ট সেই ডাটা ধরে ইচ্ছামতো ডিজাইনে সাজিয়ে দেয়। তালিকা বা টেবিল বানাতে এটি বিশ্বজুড়ে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'vu-com-ex4',
      kind: 'mcq',
      topic: 'provide and inject for prop drilling solution',
      question: {
        en: 'What major architectural problem does the "provide" and "inject" pair solve in large component trees?',
        bn: 'বড় কম্পোনেন্ট ট্রির ক্ষেত্রে "provide" এবং "inject" কোন প্রধান আর্কিটেকচারাল সমস্যা দূর করে?'
      },
      options: [
        {
          en: 'It eliminates "prop drilling", allowing an ancestor component to deliver reactive state directly to deep descendants without passing props through every intermediate child level',
          bn: 'এটি "প্রপ ড্রিলিং" সমস্যা দূর করে, যার ফলে প্রতিটি মধ্যবর্তী কম্পোনেন্টে হাত না দিয়েও পূর্বপুরুষ থেকে সরাসরি গভীর বংশধর উপাদানে ডাটা পাঠানো যায়'
        },
        {
          en: 'It allows Vue to run on computers without an operating system',
          bn: 'এটি কোনো অপারেটিং সিস্টেম ছাড়াই কম্পিউটারে Vue চলতে সাহায্য করে'
        },
        {
          en: 'It removes all JavaScript files from the web browser cache',
          bn: 'এটি ওয়েব ব্রাউজার ক্যাশ থেকে সমস্ত জাভাস্ক্রিপ্ট মুছে ফেলে'
        },
        {
          en: 'It automatically translates English text into Spanish',
          bn: 'এটি ইংরেজি লেখাকে স্বয়ংক্রিয়ভাবে স্প্যানিশে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'provide and inject resolve prop drilling by creating a direct data channel down the tree.',
        bn: 'provide এবং inject মাঝের অপ্রয়োজনীয় কম্পোনেন্টগুলো এড়িয়ে সরাসরি ডাটা পৌঁছে দেয়।'
      },
      explanation: {
        en: 'Prop drilling forces intermediate components to pass props they do not need. provide() registers data on an ancestor, and inject() allows any descendant to consume it directly.',
        bn: 'প্রপ ড্রিলিংয়ে মাঝের কম্পোনেন্টগুলোকে অহেতুক ডাটা বয়ে নিয়ে যেতে হতো। provide/inject সেই কষ্ট দূর করে সরাসরি দূরবর্তী উপাদানের সাথে সংযোগ তৈরি করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-component-commons-quiz',
    title: {
      en: 'Vue.js Component Communication & Slots Quiz',
      bn: 'Vue.js কম্পোনেন্ট যোগাযোগ ও স্লটস কুইজ'
    },
    questions: [
      {
        id: 'q-vue34-definemodel-macro',
        kind: 'mcq',
        topic: 'defineModel macro introduced in Vue 3.4',
        question: {
          en: 'How does the "defineModel()" compiler macro simplify two-way component binding in modern Vue 3.4+?',
          bn: 'আধুনিক Vue ৩.৪+-এ "defineModel()" কমপাইলার ম্যাক্রো কীভাবে কম্পোনেন্টের দ্বি-মুখী বাইন্ডিং সহজ করে দিয়েছে?'
        },
        options: [
          {
            en: 'It declares a reactive ref in the child that automatically synchronizes with the parent\'s v-model, eliminating the need to manually declare both a modelValue prop and an update:modelValue emit',
            bn: 'এটি চাইল্ডে একটি রিঅ্যাক্টিভ রেফ তৈরি করে যা নিজে থেকেই প্যারেন্টের v-model-এর সাথে সিঙ্ক থাকে, ফলে আলাদা করে modelValue প্রপ ও update:modelValue ইভেন্ট লেখার ঝামেলা দূর হয়'
          },
          {
            en: 'It connects the component directly to a 3D printer',
            bn: 'এটি কম্পোনেন্টটিকে সরাসরি একটি থ্রিডি প্রিন্টারের সাথে যুক্ত করে'
          },
          {
            en: 'It forces the browser to reload the page every 2 seconds',
            bn: 'এটি প্রতি ২ সেকেন্ড পর পর পেজটি রিলোড হতে বাধ্য করে'
          },
          {
            en: 'defineModel only works on HTML checkbox elements',
            bn: 'defineModel কেবল এইচটিএমএল চেকবক্স উপাদানেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'defineModel() acts as both a prop declaration and an event emitter in a single ref.',
          bn: 'defineModel() একক রেফের ভেতর প্রপ ও ইভেন্টের কাজ একসাথে সম্পন্ন করে।'
        },
        explanation: {
          en: 'Before Vue 3.4, custom v-model required defineProps(["modelValue"]) and defineEmits(["update:modelValue"]). defineModel() replaces all that boilerplate with a single, clean ref.',
          bn: 'আগে কাস্টম v-model করতে প্রপস এবং ইমিট উভয়ই হাতে লিখতে হতো। defineModel() তা এক লাইনে এনে একটি সাধারণ রেফের মতো ব্যবহারের সুযোগ করে দিয়েছে।'
        }
      },
      {
        id: 'q-multiple-v-model-bindings-arguments',
        kind: 'mcq',
        topic: 'binding multiple v-model instances with custom arguments',
        question: {
          en: 'How can a parent component bind multiple independent v-model targets (e.g. first name and last name) to a single child component in Vue 3?',
          bn: 'Vue ৩-এ একটিমাত্র চাইল্ড কম্পোনেন্টে প্যারেন্ট কীভাবে একাধিক স্বাধীন v-model (যেমন নাম ও পদবি) একসাথে যুক্ত করতে পারে?'
        },
        options: [
          {
            en: 'Pass argument names to v-model on the child component: "<UserForm v-model:firstName=\"first\" v-model:lastName=\"last\" />"',
            bn: 'চাইল্ড উপাদানে আর্গুমেন্ট নাম দিয়ে: "<UserForm v-model:firstName=\"first\" v-model:lastName=\"last\" />"'
          },
          {
            en: 'Create 2 separate internet connections on the computer',
            bn: 'কম্পিউটারে ২টি আলাদা ইন্টারনেট সংযোগ তৈরি করে'
          },
          {
            en: 'Multiple v-model bindings on a single component are forbidden in Vue',
            bn: 'একই কম্পোনেন্টে একাধিক v-model ব্যবহার করা Vue-তে সম্পূর্ণ নিষিদ্ধ'
          },
          {
            en: 'Wrap the component in two nested <body> tags',
            bn: 'কম্পোনেন্টটিকে দুটি নেস্টেড <body> ট্যাগে মুড়িয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use v-model:argumentName to declare multiple independent bindings.',
          bn: 'একাধিক বাইন্ডিংয়ের জন্য v-model:আর্গুমেন্টের নাম সিনট্যাক্স ব্যবহার করুন।'
        },
        explanation: {
          en: 'Vue 3 supports multiple v-model bindings by specifying argument names (v-model:title, v-model:content). Each argument maps to its own prop and update:arg emit pair.',
          bn: 'Vue ৩-এ v-model:নাম দিয়ে প্রতিটি ফিল্ডের জন্য আলাদা প্রপ ও ইভেন্ট তৈরি করা যায়, যার ফলে একই ফর্মে একাধিক ফিল্ড নিখুঁতভাবে নিয়ন্ত্রণ করা সম্ভব হয়।'
        }
      },
      {
        id: 'q-injection-keys-symbol-best-practice',
        kind: 'mcq',
        topic: 'using InjectionKey and JavaScript Symbols for provide and inject type safety',
        question: {
          en: 'Why do senior Vue developers use JavaScript "Symbol()" keys or TypeScript "InjectionKey<T>" instead of plain strings for provide and inject?',
          bn: 'সিনিয়র Vue ডেভেলপাররা provide এবং inject-এর ক্ষেত্রে সাধারণ স্ট্রিংয়ের বদলে জাভাস্ক্রিপ্ট "Symbol()" বা "InjectionKey<T>" কেন ব্যবহার করেন?'
        },
        options: [
          {
            en: 'Symbols guarantee globally unique collision-free keys across large codebases and third-party plugins, while InjectionKey provides strict compile-time TypeScript type checking for injected values',
            bn: 'সিম্বল বড় প্রজেক্ট বা প্লাগইনে নামের সংঘর্ষ প্রতিরোধ করে সম্পূর্ণ ইউনিক কি নিশ্চিত করে, আর InjectionKey ইনজেক্ট করা মানের জন্য নিখুঁত টাইপস্ক্রিপ্ট টাইপ সেফটি দেয়'
          },
          {
            en: 'Symbols accelerate JavaScript loop execution by 1000 times',
            bn: 'সিম্বল জাভাস্ক্রিপ্ট লুপের গতি ১০০০ গুণ বাড়িয়ে দেয়'
          },
          {
            en: 'Plain strings are not supported in modern TypeScript compilers',
            bn: 'আধুনিক টাইপস্ক্রিপ্ট কমপাইলার সাধারণ স্ট্রিং সমর্থন করে না'
          },
          {
            en: 'Symbols prevent computer monitors from turning off',
            bn: 'সিম্বল কম্পিউটার মনিটর বন্ধ হওয়া প্রতিরোধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Symbols prevent name collision bugs and InjectionKey enforces TypeScript types.',
          bn: 'সিম্বল নামের সংঘাত বাঁচায় এবং InjectionKey টাইপস্ক্রিপ্টের সঠিক টাইপ নিশ্চিত করে।'
        },
        explanation: {
          en: 'Using plain string keys risks collisions if two libraries use "user" or "theme". Symbols guarantee uniqueness, and InjectionKey<T> provides full type inference for the injected value.',
          bn: 'সাধারণ স্ট্রিং দিলে অন্য প্লাগইনের সাথে নাম মিলে গিয়ে সমস্যা হতে পারে। সিম্বল পুরোপুরি স্বতন্ত্র এবং টাইপস্ক্রিপ্টে সঠিক ডাটা টাইপ নিশ্চিত করে।'
        }
      },
      {
        id: 'q-attrs-fallthrough-behavior',
        kind: 'mcq',
        topic: 'attribute fallthrough behavior in single-root components',
        question: {
          en: 'What is "Attribute Fallthrough" in Vue 3, and where do non-prop attributes (like "class" or "id") land by default?',
          bn: 'Vue ৩-এ "Attribute Fallthrough" কী এবং প্রপস হিসেবে ঘোষণা না করা অ্যাট্রিবিউটগুলো (যেমন "class" বা "id") ডিফল্টভাবে কোথায় গিয়ে বসে?'
        },
        options: [
          {
            en: 'Attributes not declared as props or emits automatically fall through and attach to the single root element of the child component template, merging with existing classes or listeners',
            bn: 'প্রপস বা ইমিট হিসেবে ঘোষণা না করা বাড়তি অ্যাট্রিবিউটগুলো স্বয়ংক্রিয়ভাবে চাইল্ড কম্পোনেন্টের একক রুট এলিমেন্টে গিয়ে বসে এবং বিদ্যমান ক্লাসের সাথে সুন্দরভাবে যুক্ত হয়'
          },
          {
            en: 'Fallthrough attributes are deleted and logged as syntax errors in the browser',
            bn: 'বাড়তি অ্যাট্রিবিউটগুলো মুছে ফেলা হয় এবং ব্রাউজারে সিনট্যাক্স এরর দেখায়'
          },
          {
            en: 'They are transmitted to an external analytics server over WebSockets',
            bn: 'সেগুলো ওয়েবসকেটের মাধ্যমে একটি বহিরাগত অ্যানালিটিক্স সার্ভারে পাঠিয়ে দেওয়া হয়'
          },
          {
            en: 'Fallthrough attributes cause the Vue runtime to reboot',
            bn: 'ফলথ্রু অ্যাট্রিবিউট Vue রানটাইম রিবুট করিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Non-prop attributes fall through to the component single root element by default.',
          bn: 'অঘোষিত অ্যাট্রিবিউটগুলো নিজে থেকেই চাইল্ডের রুট উপাদানে গিয়ে যুক্ত হয়।'
        },
        explanation: {
          en: 'When a component has a single root element, Vue automatically applies undeclared attributes (class, style, id, @click) to that root node. Use inheritAttrs: false to disable this behavior.',
          bn: 'একক রুট থাকা কম্পোনেন্টে বাইরে থেকে দেওয়া ক্লাস বা আইডি নিজে থেকেই মূল ট্যাগে বসে যায়। এটি বন্ধ করতে inheritAttrs: false ব্যবহার করতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-composable-shelf',
    title: {
      en: 'Custom Composables — Composition API, Lifecycle Hooks & Reusability',
      bn: 'কাস্টম কম্পোজেবলস — কম্পোজিশন এপিআই, লাইফসাইকেল হুক ও পুনর্ব্যবহারযোগ্যতা'
    }
  }
};
