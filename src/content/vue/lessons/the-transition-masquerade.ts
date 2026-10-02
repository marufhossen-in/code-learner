import type { Lesson } from '../../../lib/types';

export const transitionMasqueradeLesson: Lesson = {
  slug: 'the-transition-masquerade',
  tech: 'vue',
  title: {
    en: 'Transitions, Teleport & KeepAlive — Built-in Dynamic Components',
    bn: 'Transitions, Teleport ও KeepAlive — বিল্ট-ইন ডায়নামিক কম্পোনেন্টস'
  },
  summary: {
    en: 'Vue provides built-in special components designed to solve visual and architectural challenges without external libraries. In this lesson, you will master the 6-class CSS animation lifecycle of Transition, coordinate smooth list reordering with TransitionGroup, escape CSS stacking context traps with Teleport, and preserve in-memory view state with KeepAlive.',
    bn: 'বাইরের কোনো ভারী লাইব্রেরি ছাড়াই ভিজ্যুয়াল ও আর্কিটেকচারাল জটিলতা সমাধান করতে Vue কিছু বিল্ট-ইন বিশেষ কম্পোনেন্ট প্রদান করে। এই পাঠে আপনি Transition-এর ৬টি সিএসএস ক্লাস অ্যানিমেশন লাইফসাইকেল, TransitionGroup দিয়ে তালিকার মসৃণ পুনর্বিন্যাস, Teleport দিয়ে সিএসএস স্ট্যাকিং কনটেক্সট এড়ানো এবং KeepAlive দিয়ে মেমোরিতে ভিউ স্টেট সংরক্ষণ গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'dynamic-components-architecture',
      text: {
        en: 'Built-in Dynamic Components Architecture and Stacking Contexts',
        bn: 'বিল্ট-ইন ডায়নামিক কম্পোনেন্টস আর্কিটেকচার ও স্ট্যাকিং কনটেক্সট'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'Modern user interfaces require polished animations and modal overlays that defy conventional Document Object Model (DOM) hierarchies. Vue provides built-in components to handle these requirements natively: Transition coordinates enter and leave animations, Teleport breaks through CSS overflow boundaries, and KeepAlive caches component instances in memory.',
        bn: 'আধুনিক ওয়েব ইন্টারফেসে মসৃণ অ্যানিমেশন এবং মোডাল পপআপ তৈরি করতে স্বাভাবিক ডম কাঠামোর বাইরে যেতে হয়। এই কাজগুলো সহজে সম্পন্ন করতে Vue কয়েকটি বিল্ট-ইন উপাদান সরবরাহ করে: Transition কম্পোনেন্ট এলিমেন্টের প্রবেশ ও বিদায়ের অ্যানিমেশন নিয়ন্ত্রণ করে, Teleport সিএসএস বাউন্ডারি ভেঙে সরাসরি মূল বডিতে উপাদান পাঠায় এবং KeepAlive মেমোরিতে স্টেট সংরক্ষণ করে রেন্ডারিং দ্রুত রাখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '<Transition>',
          def: {
            en: 'A built-in component applying automatic CSS transition classes when a single element enters or leaves the DOM.',
            bn: 'একটি বিল্ট-ইন কম্পোনেন্ট যা কোনো একক উপাদান ডমে প্রবেশ বা প্রস্থানের সময় স্বয়ংক্রিয়ভাবে সিএসএস অ্যানিমেশন ক্লাস প্রয়োগ করে।'
          }
        },
        {
          term: '<TransitionGroup>',
          def: {
            en: 'A built-in component animating insertions, removals, and FLIP-based position shuffling across list items.',
            bn: 'একটি বিল্ট-ইন কম্পোনেন্ট যা তালিকার যেকোনো উপাদান যোগ, মুছে ফেলা বা অবস্থান পরিবর্তনের সময় মসৃণ অ্যানিমেশন দেয়।'
          }
        },
        {
          term: '<Teleport>',
          def: {
            en: 'A built-in component that teleports its child template into a different DOM container outside parent CSS contexts.',
            bn: 'একটি বিশেষ উপাদান যা তার ভেতরের কোডকে প্যারেন্টের সিএসএস সীমানা পেরিয়ে ডকুমেন্টের যেকোনো অন্য অংশে পাঠিয়ে প্রদর্শন করে।'
          }
        },
        {
          term: '<KeepAlive>',
          def: {
            en: 'A built-in wrapper that caches inactive component instances in memory rather than destroying them.',
            bn: 'একটি বিল্ট-ইন র্যাপার যা ট্যাব বা ভিউ পরিবর্তনের সময় কম্পোনেন্ট ধ্বংস না করে মেমোরিতে জীবিত রাখে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'transition-classes-matrix',
      text: {
        en: 'The 6 Transition CSS Classes Lifecycle Matrix',
        bn: 'ট্রানজিশনের ৬টি সিএসএস ক্লাস লাইফসাইকেল ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'CSS Class Name', bn: 'সিএসএস ক্লাসের নাম' },
        { en: 'Active Phase', bn: 'কোন ধাপে কার্যকর' },
        { en: 'CSS Properties Defined', bn: 'সাধারণ সিএসএস বৈশিষ্ট্য' }
      ],
      rows: [
        [
          { en: 'v-enter-from', bn: 'v-enter-from' },
          { en: 'Start of enter (added before insert, removed 1 frame after)', bn: 'প্রবেশের শুরু (ঢোকার ঠিক আগের ফ্রেম)' },
          { en: 'opacity: 0; transform: translateY(-20px);', bn: 'opacity: 0; transform: translateY(-20px);' }
        ],
        [
          { en: 'v-enter-active', bn: 'v-enter-active' },
          { en: 'Entire enter phase (from insert to animation end)', bn: 'পুরো প্রবেশ সময়কাল (ঢোকা থেকে শেষ পর্যন্ত)' },
          { en: 'transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);', bn: 'transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);' }
        ],
        [
          { en: 'v-enter-to', bn: 'v-enter-to' },
          { en: 'End of enter (removed when transition completes)', bn: 'প্রবেশের শেষ মুহূর্ত (অ্যানিমেশন শেষ হলে মোছে)' },
          { en: 'opacity: 1; transform: translateY(0);', bn: 'opacity: 1; transform: translateY(0);' }
        ],
        [
          { en: 'v-leave-from', bn: 'v-leave-from' },
          { en: 'Start of leave (added as soon as leave is triggered)', bn: 'বিদায়ের শুরু (ট্রিগার হওয়া মাত্র যোগ হয়)' },
          { en: 'opacity: 1; transform: scale(1);', bn: 'opacity: 1; transform: scale(1);' }
        ],
        [
          { en: 'v-leave-active', bn: 'v-leave-active' },
          { en: 'Entire leave phase (controls duration and easing)', bn: 'পুরো বিদায় সময়কাল (সময় ও ইজিং নিয়ন্ত্রণ করে)' },
          { en: 'transition: opacity 0.2s ease-in;', bn: 'transition: opacity 0.2s ease-in;' }
        ],
        [
          { en: 'v-leave-to', bn: 'v-leave-to' },
          { en: 'End of leave (target final state before node removal)', bn: 'বিদায়ের শেষ মুহূর্ত (মুছে ফেলার আগের ফ্রেম)' },
          { en: 'opacity: 0; transform: scale(0.95);', bn: 'opacity: 0; transform: scale(0.95);' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'transition-simulation-code',
      text: {
        en: 'Working Transition Class Pipeline and Teleport Simulation',
        bn: 'কার্যকরী ট্রানজিশন ক্লাস পাইপলাইন ও টেলিপোর্ট সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vue Transition Lifecycle and Teleport DOM Target
class MockTransitionRunner {
  // Simulates applying enter animation classes in sequence
  simulateEnter(name) {
    const classSequence = [];
    
    // Frame 1: Add enter-from and enter-active
    classSequence.push(name + '-enter-from', name + '-enter-active');
    
    // Frame 2: Remove enter-from, add enter-to
    const frame2 = classSequence.filter(c => !c.endsWith('-enter-from'));
    frame2.push(name + '-enter-to');
    
    // Animation End: Remove all transition helper classes
    const finalActiveClasses = [];
    
    return {
      initialClasses: classSequence,
      transitionClasses: frame2,
      totalClassesApplied: classSequence.length + 1
    };
  }

  // Simulates Teleport moving a modal node to document body
  teleportNode(nodeHtml, targetSelector) {
    return {
      sourceComponent: 'UserProfile',
      targetContainer: targetSelector,
      renderedHtml: '<div id="' + targetSelector.replace('#', '') + '">' + nodeHtml + '</div>'
    };
  }
}

const runner = new MockTransitionRunner();

// 1. Run fade transition enter cycle
const fadeAnimation = runner.simulateEnter('fade');

// 2. Teleport modal dialog to document body root
const teleportResult = runner.teleportNode('<div class="modal">Settings</div>', '#modals');

console.log('Initial transition classes attached:', fadeAnimation.initialClasses.join(', '));
// -> Initial transition classes attached: fade-enter-from, fade-enter-active
console.log('Total animation classes applied during cycle:', fadeAnimation.totalClassesApplied);
// -> Total animation classes applied during cycle: 3
console.log('Teleport target container location:', teleportResult.targetContainer);
// -> Teleport target container location: #modals`,
      caption: {
        en: 'Runner manages fade transition classes and teleports modal node to #modals target',
        bn: 'রানার ট্রানজিশন ক্লাস নিয়ন্ত্রণ করে এবং মোডাল নোডটিকে #modals টার্গেটে টেলিপোর্ট করে'
      }
    },
    {
      type: 'heading',
      id: 'transition-discipline-rules',
      text: {
        en: 'Animation and Teleport Engineering Best Practices',
        bn: 'অ্যানিমেশন ও টেলিপোর্ট ব্যবহারের সেরা নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When animating elements between dynamic states, always configure mode="out-in" on your <Transition> wrapper. Without mode="out-in", the entering element and the leaving element exist in the DOM simultaneously, causing visible layout popping and jumping. Additionally, when using <Teleport>, ensure the target DOM container exists before the teleporting component mounts.',
        bn: 'ডায়নামিক কম্পোনেন্ট বা শর্তাধীন উপাদানে অ্যানিমেশন করার সময় সর্বদা <Transition> ট্যাগে mode="out-in" ব্যবহার করুন। এটি না দিলে পুরোনো উপাদানটি মোছার আগেই নতুন উপাদানটি স্ক্রিনে ঢুকে পড়ে লেআউট এলোমেলো করে ফেলে। এছাড়া <Teleport> ব্যবহারের সময় লক্ষ্য রাখুন যে টার্গেট আইডি বা ট্যাগটি আগে থেকেই এইচটিএমএলে বিদ্যমান আছে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Use mode="out-in": Prevent layout shift during component switches by letting the old component leave before the new one enters.',
          bn: '১. mode="out-in" নিশ্চিত করুন: পুরোনো কম্পোনেন্ট প্রস্থান শেষ করার পরেই কেবল নতুন কম্পোনেন্ট প্রবেশ করিয়ে স্ক্রিন সুন্দর রাখুন।'
        },
        {
          en: '2. Always Provide Unique Keys in TransitionGroup: Every list child in <TransitionGroup> must have a unique, non-index key for FLIP animations.',
          bn: '২. ইউনিক কি বাধ্যতামূলক: <TransitionGroup>-এ প্রতিটি উপাদানের জন্য ইউনিক কি দিতে হবে যাতে অবস্থান পরিবর্তনের অ্যানিমেশন ঠিক থাকে।'
        },
        {
          en: '3. Escape Stacking Contexts with Teleport: Mount modals, dialogs, and toasts to <body> to avoid CSS overflow: hidden clipping issues.',
          bn: '৩. টেলিপোর্ট দিয়ে মোডাল মাউন্ট: মোডাল ও নোটিফিকেশনকে <body> ট্যাগে পাঠান যাতে প্যারেন্টের overflow: hidden তা কেটে না ফেলে।'
        },
        {
          en: '4. Limit Cache Memory in KeepAlive: Always set the :max attribute on <KeepAlive :max="10"> to prevent infinite memory growth.',
          bn: '৪. KeepAlive-এ মেমোরি লিমিট: মেমোরি সুরক্ষার জন্য <KeepAlive :max="10"> এভাবে সর্বোচ্চ কয়টি ভিউ ক্যাশ থাকবে তা নির্ধারণ করে দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-tra-ex1',
      kind: 'mcq',
      topic: 'transition mode out-in preventing layout shift',
      question: {
        en: 'Why is setting "mode=\"out-in\"" crucial when transitioning between two dynamic components inside "<Transition>"?',
        bn: '"<Transition>"-এর ভেতর দুটি ডায়নামিক কম্পোনেন্ট বদলানোর সময় "mode=\"out-in\"" দেওয়া কেন অত্যন্ত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'Without mode="out-in", the leaving component and the entering component are both present in the DOM simultaneously, causing the new component to abruptly jump below the old one before it finishes disappearing',
          bn: 'mode="out-in" না দিলে প্রস্থানকারী এবং নতুন প্রবেশকারী উভয় উপাদান একসাথে ডমে থাকে, যার ফলে পুরোনোটি মুছে যাওয়ার আগেই নতুনটি নিচে নেমে এসে স্ক্রিন কাঁপিয়ে দেয়'
        },
        {
          en: 'Because without mode="out-in", the browser deletes all CSS files',
          bn: 'কারণ mode="out-in" না দিলে ব্রাউজার সব সিএসএস ফাইল মুছে ফেলে'
        },
        {
          en: 'The mode attribute converts CSS animations into MP4 video files',
          bn: 'mode অ্যাট্রিবিউট সিএসএস অ্যানিমেশনকে এমপিফোর ভিডিও ফাইলে রূপান্তর করে'
        },
        {
          en: 'Out-in mode is required to establish an HTTPS secure connection',
          bn: 'এইচটিটিপিএস নিরাপদ সংযোগ স্থাপনের জন্য out-in মোড আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'out-in waits for the leaving element to finish animating out before the entering element begins.',
        bn: 'out-in পুরোনো উপাদানটির বিদায় সম্পন্ন হওয়া পর্যন্ত অপেক্ষা করে তবেই নতুনটিকে আনে।'
      },
      explanation: {
        en: 'By default, transitions happen simultaneously. mode="out-in" coordinates the sequence: the leaving component transitions out first, and only when it finishes does the entering component mount.',
        bn: 'ডিফল্টভাবে প্রবেশ ও বিদায় একসাথে ঘটে ফলে লেআউট ভেঙে যায়। mode="out-in" দিলে পুরোনো কম্পোনেন্ট সুন্দরভাবে মুছে যাওয়ার পর নতুনটি মসৃণভাবে পর্দায় ভেসে ওঠে।'
      }
    },
    {
      id: 'vu-tra-ex2',
      kind: 'mcq',
      topic: 'teleport component solving css stacking context traps',
      question: {
        en: 'What major CSS problem does the "<Teleport to=\"body\">" component solve for modal dialogs and notification toasts?',
        bn: 'মোডাল ডায়ালগ এবং নোটিফিকেশন টোস্টের ক্ষেত্রে "<Teleport to=\"body\">" কোন প্রধান সিএসএস সমস্যা সমাধান করে?'
      },
      options: [
        {
          en: 'It escapes parent CSS traps like "overflow: hidden", "z-index" stacking context restrictions, and "transform" coordinate spaces by rendering the physical DOM node directly under document <body>',
          bn: 'এটি প্যারেন্টের "overflow: hidden", "z-index" সীমাবদ্ধতা এবং "transform" স্থানাঙ্ক ফাঁদ এড়িয়ে সরাসরি মূল <body> ট্যাগের নিচে মোডালটি রেন্ডার করে'
        },
        {
          en: 'It downloads the component directly over satellite internet',
          bn: 'এটি স্যাটেলাইট ইন্টারনেটের মাধ্যমে উপাদানটি ডাউনলোড করে'
        },
        {
          en: 'It compresses the image size of the modal popup by 90%',
          bn: 'এটি মোডালের ছবির সাইজ ৯০% সংকুচিত করে দেয়'
        },
        {
          en: 'Teleport disables all JavaScript event listeners on the page',
          bn: 'টেলিপোর্ট পেজের সব জাভাস্ক্রিপ্ট ইভেন্ট লিসেনার বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Teleport mounts DOM elements outside constrained parent CSS stacking contexts.',
        bn: 'টেলিপোর্ট প্যারেন্টের জটিল সিএসএস সীমাবদ্ধতা এড়িয়ে বডিতে উপাদান পাঠায়।'
      },
      explanation: {
        en: 'A parent element with overflow: hidden or transform creates a new stacking context that clips or displaces absolute/fixed modals. <Teleport> moves the DOM element to <body> while keeping Vue reactivity intact.',
        bn: 'প্যারেন্টে overflow: hidden থাকলে মোডাল কেটে যায় বা z-index ঠিকমতো কাজ করে না। <Teleport to="body"> মোডালটিকে সরাসরি বডিতে নিয়ে যায় ফলে কোনো সিএসএস জটিলতা থাকে না।'
      }
    },
    {
      id: 'vu-tra-ex3',
      kind: 'mcq',
      topic: 'keepalive component in-memory caching and lifecycle hooks',
      question: {
        en: 'When a dynamic component is wrapped inside "<KeepAlive>", which lifecycle hooks fire when navigating away and returning to it?',
        bn: '"<KeepAlive>"-এ মোড়ানো ডায়নামিক কম্পোনেন্ট থেকে অন্য পেজে যাওয়া এবং আবার ফিরে আসার সময় কোন লাইফসাইকেল হুকগুলো সক্রিয় হয়?'
      },
      options: [
        {
          en: '"onDeactivated()" fires when navigating away, and "onActivated()" fires when returning (rather than unmounting and re-mounting)',
          bn: 'পেজ ছেড়ে যাওয়ার সময় "onDeactivated()" এবং ফিরে আসার সময় "onActivated()" সক্রিয় হয় (উপাদানটি ধ্বংস বা নতুন করে মাউন্ট না হয়ে)'
        },
        {
          en: 'The computer reboots immediately upon navigation',
          bn: 'পেজ বদলানোর সাথে সাথে কম্পিউটার সঙ্গে সঙ্গে রিবুট হয়ে যায়'
        },
        {
          en: 'onMounted fires 100 times in rapid succession',
          bn: 'onMounted হুক খুব দ্রুত একসাথে ১০০ বার চলতে থাকে'
        },
        {
          en: 'KeepAlive components do not support any lifecycle hooks',
          bn: 'KeepAlive উপাদান কোনো ধরনের লাইফসাইকেল হুক সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'KeepAlive components toggle between activated and deactivated states rather than mounting/unmounting.',
        bn: 'KeepAlive কম্পোনেন্ট ধ্বংস না হয়ে activated ও deactivated হুকের মাধ্যমে ঘুমন্ত বা সচল থাকে।'
      },
      explanation: {
        en: 'Because KeepAlive caches the component instance in memory, it is never destroyed. Moving away triggers onDeactivated(); returning to the view triggers onActivated(), preserving form state.',
        bn: 'KeepAlive উপাদান ধ্বংস হয় না, মেমোরিতে জীবিত থাকে। ফলে ট্যাব বদলালে onDeactivated() এবং ফিরে এলে onActivated() চলে, যা ইনপুটের লেখা বা স্ক্রল পজিশন ধরে রাখে।'
      }
    },
    {
      id: 'vu-tra-ex4',
      kind: 'mcq',
      topic: 'transition-group FLIP animation class v-move',
      question: {
        en: 'In "<TransitionGroup>", what does the special ".v-move" (or ".[name]-move") CSS class control during list reordering?',
        bn: '"<TransitionGroup>"-এ তালিকা পুনর্বিন্যাসের সময় বিশেষ ".v-move" (বা ".[name]-move") সিএসএস ক্লাস কী নিয়ন্ত্রণ করে?'
      },
      options: [
        {
          en: 'It applies a CSS transition to surviving items as they smoothly glide into their new positions using the FLIP (First, Last, Invert, Play) calculation technique',
          bn: 'আইটেম যোগ বা মোছার ফলে তালিকার বাকি উপাদানগুলো যখন সরে নতুন জায়গায় যায়, তখন FLIP কৌশলের সাহায্যে সেগুলো যাতে মসৃণভাবে ভেসে যায় তা নিয়ন্ত্রণ করে'
        },
        {
          en: 'It rotates the webpage 360 degrees on the screen',
          bn: 'এটি স্ক্রিনে পুরো ওয়েবপেজটিকে ৩৬০ ডিগ্রি ঘুরিয়ে দেয়'
        },
        {
          en: 'It forces list items to move only using the keyboard arrow keys',
          bn: 'এটি তালিকার উপাদানগুলোকে কেবল কীবোর্ডের তীর বাটন দিয়ে নড়াচড়া করতে দেয়'
        },
        {
          en: 'The v-move class permanently deletes items that change positions',
          bn: 'v-move ক্লাস স্থান পরিবর্তন করা উপাদানগুলোকে চিরতরে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The move class smoothly animates items whose positions shift due to other items entering or leaving.',
        bn: 'move ক্লাস অন্য আইটেম যোগ বা মোছার কারণে সরে যাওয়া উপাদানগুলোকে মসৃণ অ্যানিমেশন দেয়।'
      },
      explanation: {
        en: 'When a list is modified, Vue uses FLIP animation to calculate position differences. Applying transition: transform to .v-move causes remaining items to smoothly slide into their new slots.',
        bn: 'তালিকায় একটি আইটেম মুছলে নিচের আইটেমগুলো উপরে উঠে আসে। .v-move-এ transition: transform দিলে আইটেমগুলো হুট করে না উঠে অত্যন্ত মসৃণভাবে ভেসে ওঠে।'
      }
    }
  ],
  quiz: {
    id: 'the-transition-masquerade-quiz',
    title: {
      en: 'Vue.js Transitions, Teleport & KeepAlive Quiz',
      bn: 'Vue.js ট্রানজিশন, টেলিপোর্ট ও KeepAlive কুইজ'
    },
    questions: [
      {
        id: 'q-teleport-disabled-prop-responsive',
        kind: 'mcq',
        topic: 'conditional teleportation using the :disabled prop',
        question: {
          en: 'How can developers make "<Teleport>" responsive so that a sidebar is teleported to "#mobile-drawer" on small screens but remains in its normal layout position on desktop?',
          bn: 'ডেভেলপাররা কীভাবে "<Teleport>"-কে রেসপন্সিভ করতে পারেন যাতে ছোট স্ক্রিনে সাইডবার "#mobile-drawer"-এ যায় কিন্তু ডেক্সটপে স্বাভাবিক জায়গায় থাকে?'
        },
        options: [
          {
            en: 'Bind a boolean media query ref to the ":disabled" prop: "<Teleport to=\"#mobile-drawer\" :disabled=\"isDesktop\">"',
            bn: 'মিডিয়া কোয়েরি রেফকে ":disabled" প্রপে বাইন্ড করে: "<Teleport to=\"#mobile-drawer\" :disabled=\"isDesktop\">"'
          },
          {
            en: 'Duplicate the component source code 10 times in different folders',
            bn: 'কম্পোনেন্টের সোর্স কোড ১০ বার আলাদা ফোল্ডারে কপি করে'
          },
          {
            en: 'Teleport cannot be enabled or disabled conditionally',
            bn: 'টেলিপোর্ট শর্তানুযায়ী চালু বা বন্ধ করা অসম্ভব'
          },
          {
            en: 'Change the screen resolution of the user computer monitor',
            bn: 'ব্যবহারকারীর কম্পিউটার মনিটরের স্ক্রিন রেজোলিউশন পরিবর্তন করে'
          }
        ],
        answer: 0,
        hint: {
          en: ':disabled dynamically toggles teleportation without unmounting content.',
          bn: ':disabled দিয়ে টেলিপোর্টেশন চালু বা বন্ধ রেখে সাধারণ অবস্থানে ফিরিয়ে আনা যায়।'
        },
        explanation: {
          en: 'The :disabled prop on <Teleport> dynamically controls whether the content is projected to the target container or stays in place. When disabled is true, it renders in its original DOM hierarchy.',
          bn: ':disabled প্রপের মান true হলে টেলিপোর্ট বাতিল হয়ে মূল স্থানেই কম্পোনেন্ট স্বাভাবিকভাবে থাকে। এটি রেসপন্সিভ ডিজাইন তৈরিতে খুবই কার্যকর।'
        }
      },
      {
        id: 'q-keepalive-max-lru-cache',
        kind: 'mcq',
        topic: 'memory limit management with the max prop in KeepAlive',
        question: {
          en: 'How does "<KeepAlive :max=\"5\">" manage memory consumption when a user navigates between more than 5 distinct views?',
          bn: 'ব্যবহারকারী যখন ৫টির বেশি ভিউতে ঘুরে বেড়ান, তখন "<KeepAlive :max=\"5\">" কীভাবে মেমোরি ব্যবহার নিয়ন্ত্রণ করে?'
        },
        options: [
          {
            en: 'It enforces a Least-Recently-Used (LRU) cache policy: when a 6th component is cached, the component that has not been accessed the longest is destroyed from memory',
            bn: 'এটি একটি Least-Recently-Used (LRU) নীতি মেনে চলে: ৬ নম্বর উপাদানটি এলে দীর্ঘদিন ব্যবহৃত না হওয়া পুরোনো কম্পোনেন্টটি মেমোরি থেকে সম্পূর্ণ মুছে ফেলা হয়'
          },
          {
            en: 'It crashes the browser tab with an out-of-memory error',
            bn: 'এটি মেমোরি শেষ হয়ে যাওয়ার এরর দেখিয়ে ব্রাউজার ট্যাব ক্র্যাশ করিয়ে দেয়'
          },
          {
            en: 'It slows down the CPU clock frequency by 50%',
            bn: 'এটি কম্পিউটারের প্রসেসরের গতি ৫০% কমিয়ে দেয়'
          },
          {
            en: 'The max prop only works with audio player components',
            bn: 'max প্রপ কেবল অডিও প্লেয়ার কম্পোনেন্টেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'KeepAlive uses an LRU cache to evict the oldest component instance when max is exceeded.',
          bn: 'KeepAlive LRU ক্যাশ ব্যবহার করে সীমা ছাড়ালে সবচেয়ে পুরোনো ভিউ ধ্বংস করে দেয়।'
        },
        explanation: {
          en: 'Without a limit, KeepAlive keeps caching components indefinitely, leading to memory leaks. The :max prop enforces an LRU cache, evicting the least recently accessed component when capacity is reached.',
          bn: 'সীমা না দিলে মেমোরিতে সব ভিউ জমে ব্রাউজার ধীর হয়ে যায়। :max দিলে LRU অ্যালগরিদমে সবচেয়ে পুরোনো উপাদান মুছে দিয়ে মেমোরি পরিষ্কার রাখা হয়।'
        }
      },
      {
        id: 'q-javascript-transition-hooks',
        kind: 'mcq',
        topic: 'animating transitions via JavaScript hooks (@before-enter, @enter)',
        question: {
          en: 'When integrating third-party animation libraries like GSAP with Vue, which Transition feature is utilized?',
          bn: 'GSAP-এর মতো থার্ড-পার্টি অ্যানিমেশন লাইব্রেরি Vue-তে ব্যবহারের সময় Transition-এর কোন সুবিধা কাজে লাগানো হয়?'
        },
        options: [
          {
            en: 'JavaScript transition hooks (@before-enter, @enter, @leave) paired with ":css=\"false\"" to tell Vue to skip CSS class detection and let JavaScript handle the animation lifecycle completely',
            bn: '":css=\"false\"" সহ জাভাস্ক্রিপ্ট ট্রানজিশন হুক (@before-enter, @enter, @leave), যা Vue-কে সিএসএস বাদ দিয়ে জাভাস্ক্রিপ্ট দিয়ে অ্যানিমেশন চালানোর নির্দেশ দেয়'
          },
          {
            en: 'A Python background daemon running on the server',
            bn: 'সার্ভারে চলমান একটি ব্যাকগ্রাউন্ড পাইথন ডেমন'
          },
          {
            en: 'Injecting raw Assembly code directly into the browser DOM',
            bn: 'ব্রাউজার ডমে সরাসরি র-অ্যাসেম্বলি কোড ইনজেক্ট করার মাধ্যমে'
          },
          {
            en: 'Third-party animation libraries cannot be used in Vue',
            bn: 'Vue-তে কোনো বহিরাগত অ্যানিমেশন লাইব্রেরি ব্যবহার করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: ':css="false" disables CSS transition sniffing so JavaScript animation libraries take full control.',
          bn: ':css="false" সিএসএস বন্ধ করে জাভাস্ক্রিপ্ট হুকের মাধ্যমে পুরো নিয়ন্ত্রণ লাইব্রেরিকে দেয়।'
        },
        explanation: {
          en: 'Vue Transition emits JavaScript hooks (@enter, @leave). Setting :css="false" prevents CSS interference and improves performance when driving animations via GSAP or Anime.js.',
          bn: ':css="false" দিলে Vue সিএসএস খোঁজ বন্ধ করে সরাসরি @enter বা @leave হুক চালায়। এতে GSAP বা অন্য যেকোনো শক্তিশালী জাভাস্ক্রিপ্ট লাইব্রেরি চমৎকারভাবে কাজ করে।'
        }
      },
      {
        id: 'q-transition-appear-prop',
        kind: 'mcq',
        topic: 'animating the initial component render pass with appear',
        question: {
          en: 'What does adding the "appear" prop to a "<Transition appear>" component accomplish?',
          bn: '"<Transition appear>" উপাদানে "appear" প্রপ যোগ করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It applies transition animations on the initial component render pass when the page first loads, in addition to subsequent conditional renders',
            bn: 'এটি পরবর্তীতে শর্তাধীন রেন্ডারের পাশাপাশি পেজ প্রথমবার লোড হওয়ার সাথে সাথেই প্রবেশ অ্যানিমেশন কার্যকর করে'
          },
          {
            en: 'It makes the element permanently invisible to all users',
            bn: 'এটি উপাদানটিকে সব ব্যবহারকারীর জন্য চিরতরে অদৃশ্য করে দেয়'
          },
          {
            en: 'It forces the browser to request camera and microphone permissions',
            bn: 'এটি ব্রাউজারে ক্যামেরা এবং মাইক্রোফোনের অনুমতি চাইতে বাধ্য করে'
          },
          {
            en: 'The appear prop converts HTML text into Morse code',
            bn: 'appear প্রপ এইচটিএমএল টেক্সটকে মোর্স কোডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'appear triggers transition animations on initial page load.',
          bn: 'appear প্রথম পেজ লোডের সময়ই ট্রানজিশন অ্যানিমেশন চালু করে দেয়।'
        },
        explanation: {
          en: 'By default, <Transition> does not animate elements during the initial render. Adding the appear prop instructs Vue to apply enter transitions right when the component first mounts.',
          bn: 'স্বাভাবিকভাবে প্রথম লোডে ট্রানজিশন চলে না। appear দিলে পেজ খোলার সাথে সাথেই উপাদানগুলো অ্যানিমেশন সহকারে সুন্দরভাবে স্ক্রিনে ফুটে ওঠে।'
        }
      }
    ]
  }
};
