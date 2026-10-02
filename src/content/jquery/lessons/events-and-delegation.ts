import type { Lesson } from '../../../lib/types';

export const EventsAndDelegationLesson: Lesson = {
  slug: 'events-and-delegation',
  tech: 'jquery',
  title: {
    en: 'jQuery Events, Event Delegation & Namespacing',
    bn: 'জেকোয়েরি ইভেন্ট, ইভেন্ট ডেলিগেশন ও নেমস্পেসিং'
  },
  summary: {
    en: 'Browser interaction handling once suffered from severe cross-platform fragmentation. jQuery resolved this through its unified interaction architecture centered on the on and off APIs. Rather than binding separate listeners to hundreds of individual elements, delegation allows attaching a single handler to a parent container. In an interactive table with 1000 dynamic rows, direct binding requires 1000 separate memory allocations, whereas container delegation requires only 1 shared listener. Furthermore, newly created elements injected into the document after initial page load work automatically without re-binding. The library also provides modular namespacing, custom signals, and normalized callback objects. This lesson explores browser normalization, delegation mechanics, memory optimization, and namespaced listener teardowns.',
    bn: 'একসময় বিভিন্ন ব্রাউজারে ব্যবহারকারীর অ্যাকশন নিয়ন্ত্রণের মধ্যে ব্যাপক অমিল ছিল। জেকোয়েরি তার on এবং off ভিত্তিক একীভূত আর্কিটেকচারের মাধ্যমে এই সমস্যার সমাধান করে। শত শত উপাদানে আলাদাভাবে লিসেনার না বসিয়ে ডেলিগেশন পদ্ধতিতে মূল প্যারেন্ট কন্টেইনারে একটিমাত্র হ্যান্ডলার বসানো যায়। যেমন ১০০০টি ডায়নামিক রো বিশিষ্ট টেবিলে সাধারণ পদ্ধতিতে ১০০০টি আলাদা মেমোরি স্লট লাগত, কিন্তু ডেলিগেশন ব্যবহার করলে প্যারেন্টে মাত্র ১টি লিসেনার দিয়েই সমস্ত কাজ সমাধান করা যায়। এর ফলে পেজ লোড হওয়ার পরে আসা নতুন নোডেও ক্লিক কোড নিজে থেকেই কার্যকর হয়। এছাড়াও জেকোয়েরিতে নেমস্পেসিং এবং কাস্টম সিগন্যাল ট্রিগারিং সুবিধা রয়েছে। এই পাঠে ব্রাউজার নরমালাইজেশন, ডেলিগেশন কৌশল, মেমোরি সাশ্রয় এবং নেমস্পেস ম্যানেজমেন্ট বিস্তারিত বোঝানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Normalized Events & Delegation',
        bn: 'মূল ধারণা: নরমালাইজড ইভেন্ট ও ডেলিগেশন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When a user clicks or types, `jQuery` captures the native browser signal and wraps it into a standardized wrapper object. This ensures attributes like `target`, key identifiers, and `preventDefault()` operate consistently across every engine.',
        bn: 'ব্যবহারকারী যখন পেজে কোনো অ্যাকশন করেন, জেকোয়েরি ব্রাউজারের নেটিভ সিগন্যাল ধরে তাকে একটি আদর্শ র্যাপার অবজেক্টে রূপান্তর করে। এর ফলে `target` বা `preventDefault()` প্রতিটি ইঞ্জিনে অবিকল একই রকম নির্ভরযোগ্য আচরণ প্রদর্শন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Event Normalization',
          def: {
            en: 'Standardizing browser-specific differences in mouse coordinates, keyboard keys, and event propagation into a single consistent API',
            bn: 'মাউসের অবস্থান বা কীবোর্ডের কোডের মতো ব্রাউজারভেদে ভিন্ন আচরণগুলোকে একটি অভিন্ন নির্ভরযোগ্য নিয়মে রূপান্তর করা'
          }
        },
        {
          term: 'Event Delegation',
          def: {
            en: 'Attaching one listener to a stable ancestor container that captures bubbling events matching a child selector, supporting dynamic elements',
            bn: 'প্যারেন্ট কন্টেইনারে একটি লিসেনার বসিয়ে বাবলিংয়ের মাধ্যমে নিচে থাকা সন্তান উপাদানগুলোর ইভেন্ট পরিচালনা করার মেমোরি-সাশ্রয়ী পদ্ধতি'
          }
        },
        {
          term: 'Event Namespacing',
          def: {
            en: 'Appending dot suffixes to event types (e.g. click.modal) allowing selective unbinding without affecting unrelated listeners',
            bn: 'ইভেন্টের নামের সাথে ডট দিয়ে ট্যাগ যুক্ত করা (যেমন click.modal), যাতে অন্য ইভেন্ট নষ্ট না করে কেবল নির্দিষ্ট ইভেন্টটি মুছে ফেলা যায়'
          }
        },
        {
          term: '$(elem).one()',
          def: {
            en: 'Registers an event handler that runs exactly once and automatically tears itself down immediately after execution',
            bn: 'এমন একটি ইভেন্ট লিসেনার যা কেবল একবার চলে এবং কাজ শেষ হওয়ার সাথে সাথে নিজে থেকেই আনবাইন্ড হয়ে যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'delegation-comparison-table',
      text: {
        en: 'Direct Binding vs Event Delegation',
        bn: 'সরাসরি বাইন্ডিং বনাম ইভেন্ট ডেলিগেশনের তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Architectural Comparison: Direct Event Binding vs Delegated Event Handling',
        bn: 'সরাসরি ইভেন্ট বাইন্ডিং এবং ডেলিগেটেড ইভেন্ট হ্যান্ডলিংয়ের কাঠামোগত তুলনা'
      },
      head: [
        { en: 'Feature Aspect', bn: 'বৈশিষ্ট্য' },
        { en: 'Direct Binding: $(items).on("click")', bn: 'সরাসরি বাইন্ডিং: $(items).on("click")' },
        { en: 'Delegated: $(parent).on("click", selector)', bn: 'ডেলিগেটেড: $(parent).on("click", selector)' }
      ],
      rows: [
        [
          { en: 'Listener Count', bn: 'লিসেনারের সংখ্যা' },
          { en: 'One dedicated listener per DOM node in memory', bn: 'প্রতিটি নোডের জন্য আলাদা আলাদা লিসেনার মেমোরিতে তৈরি হয়' },
          { en: 'Only one shared listener attached to container', bn: 'কন্টেইনারে মাত্র একটি একক লিসেনার যুক্ত থাকে' }
        ],
        [
          { en: 'Dynamic Future Elements', bn: 'ভবিষ্যতে আসা নতুন উপাদান' },
          { en: 'Ignored; must re-bind listeners manually', bn: 'কাজ করে না; নতুন উপাদানে আলাদাভাবে বাইন্ড করতে হয়' },
          { en: 'Automatically supported without extra code', bn: 'নতুন উপাদানে কোনো কোড ছাড়াই নিজে থেকেই কাজ করে' }
        ],
        [
          { en: 'Memory Footprint', bn: 'মেমোরি খরচ' },
          { en: 'High memory usage on large DOM trees', bn: 'বিশাল ডম ট্রিতে প্রচুর মেমোরি অপচয় ঘটায়' },
          { en: 'Minimal memory footprint regardless of list size', bn: 'তালিকা যত বড়ই হোক মেমোরি খরচ অত্যন্ত নগণ্য থাকে' }
        ],
        [
          { en: 'Teardown Complexity', bn: 'আনবাইন্ড করার ঝামেলা' },
          { en: 'Must traverse all children to detach listeners', bn: 'মুছতে গেলে প্রতিটি চাইল্ড নোড স্ক্যান করতে হয়' },
          { en: 'Detaching container listener cleans everything', bn: 'প্যারেন্ট থেকে সরালে এক নিমিষেই সবকিছু সাফ হয়ে যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Event Listener Allocation in Large Datasets',
        bn: 'চালনাযোগ্য সিমুলেশন: বিশাল ডাটাসেটে ইভেন্ট লিসেনার মেমোরি বরাদ্দ গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates binding events to a virtual list of 1000 items. While direct binding demands 1000 individual listeners, event delegation reduces the requirement to 1 listener on the parent container:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০০টি আইটেমের তালিকায় ইভেন্ট বরাদ্দের তুলনা করে। সরাসরি পদ্ধতিতে ১০০০টি আলাদা লিসেনার প্রয়োজন হলেও ডেলিগেশন পদ্ধতিতে প্যারেন্টে মাত্র ১টি লিসেনার লাগে:'
      }
    },
    {
      type: 'code',
      id: 'jquery-events-sim',
      lang: 'javascript',
      code: `// jQuery Event Delegation Memory Simulation
const dynamicItems = 1000;    // 1000 table rows rendered in UI
const directListeners = 1000; // Direct: $('.row').on('click') allocates 1000 listeners
const delegatedListeners = 1; // Delegated: $('#table').on('click', '.row') uses 1 listener

console.log('Total interactive elements in the document table:', dynamicItems);
// -> Total interactive elements in the document table: 1000

console.log('Listeners allocated using direct binding approach:', directListeners);
// -> Listeners allocated using direct binding approach: 1000

console.log('Listeners allocated using parent delegation pattern:', delegatedListeners);
// -> Listeners allocated using parent delegation pattern: 1`,
      caption: {
        en: 'Figure 1: Handling 1000 dynamic elements via event delegation collapses 1000 separate listeners into 1 shared parent listener',
        bn: 'চিত্র ১: ১০০০টি ডায়নামিক উপাদানের জন্য আলাদা ১০০০টি লিসেনারের পরিবর্তে ডেলিগেশনের মাধ্যমে মাত্র ১টি লিসেনার যথেষ্ট'
      }
    },
    {
      type: 'heading',
      id: 'namespacing-trigger-guide',
      text: {
        en: 'Event Namespacing & Custom Triggers',
        bn: 'ইভেন্ট নেমস্পেসিং ও কাস্টম ট্রিগার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In complex single-page applications, multiple modular widgets bind click listeners to the same element. Using dot namespacing prevents plugins from destroying each other during unbind operations.',
        bn: 'জটিল ওয়েব অ্যাপ্লিকেশনে একাধিক উইজেট একই বাটনে ক্লিক লিসেনার বসাতে পারে। নামের শেষে ডট দিয়ে নেমস্পেস ব্যবহার করলে এক প্লাগইনের কাজ বন্ধ করার সময় অন্য প্লাগইনের ইভেন্ট ক্ষতিগ্রস্ত হয় না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '$(elem).on("click.analytics")',
          def: {
            en: 'Binds a click listener tagged with the analytics namespace for isolated lifecycle management',
            bn: 'অ্যানালিটিক্স নেমস্পেস দিয়ে ক্লিক ইভেন্ট রেজিস্টার করা যাতে এটি আলাদাভাবে নিয়ন্ত্রণ করা যায়'
          }
        },
        {
          term: '$(elem).off("click.analytics")',
          def: {
            en: 'Removes only the click listeners under the analytics namespace, leaving standard button clicks undisturbed',
            bn: 'সাধারণ বাটন ক্লিকের ক্ষতি না করে শুধুমাত্র অ্যানালিটিক্সের ক্লিক লিসেনারটি সরিয়ে ফেলা'
          }
        },
        {
          term: '$(elem).trigger("submit")',
          def: {
            en: 'Simulates the event, bubbles up the DOM, and executes the default browser action',
            bn: 'কৃত্রিমভাবে ইভেন্টটি চালায়, ডম ট্রি বেয়ে ওপরে ওঠে এবং ব্রাউজারের ডিফল্ট আচরণ কার্যকর করে'
          }
        },
        {
          term: '$(elem).triggerHandler("submit")',
          def: {
            en: 'Executes jQuery event handlers on the current element only, without bubbling or executing native defaults',
            bn: 'কেবল বর্তমান উপাদানের কোড চালায়, কোনো বাবলিং করে না এবং ব্রাউজারের আসল ডিফল্ট কাজ বন্ধ রাখে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-listener-savings-ex',
      kind: 'mcq',
      topic: 'Listener count with event delegation',
      question: {
        en: 'In our simulation of 1000 interactive items, how many event listeners are attached to memory when using event delegation on the parent container?',
        bn: 'আমাদের সিমুলেশনে ১০০০টি উপাদানের জন্য প্যারেন্ট কন্টেইনারে ইভেন্ট ডেলিগেশন ব্যবহার করলে মেমোরিতে কয়টি লিসেনার বরাদ্দ হয়?'
      },
      options: [
        {
          en: '1 single listener attached to the parent container',
          bn: 'প্যারেন্ট কন্টেইনারে মাত্র ১টি একক লিসেনার'
        },
        {
          en: '1000 listeners',
          bn: '১০০০টি লিসেনার'
        },
        {
          en: '500 listeners',
          bn: '৫০০টি লিসেনার'
        },
        {
          en: '0 listeners',
          bn: '০টি লিসেনার'
        }
      ],
      answer: 0,
      hint: {
        en: 'Delegation collapses all child listeners into 1 shared parent listener.',
        bn: 'ডেলিগেশন সমস্ত চাইল্ডের বদলে প্যারেন্টে মাত্র ১টি লিসেনার ব্যবহার করে।'
      },
      explanation: {
        en: 'Event delegation places 1 shared listener on the parent element, handling events as they bubble up from child nodes.',
        bn: 'ইভেন্ট ডেলিগেশন প্যারেন্ট নোডে মাত্র ১টি লিসেনার বসায় এবং চাইল্ড থেকে বুদবুদের মতো উঠে আসা ইভেন্ট নিয়ন্ত্রণ করে।'
      }
    },
    {
      id: 'jquery-delegation-future-nodes-ex',
      kind: 'mcq',
      topic: 'Why event delegation handles future elements',
      question: {
        en: 'Why do elements appended to the DOM after initial page load still respond to delegated events?',
        bn: 'পেজ লোডের পর ডমে নতুন কোনো উপাদান যোগ করলেও তা কেন ডেলিগেটেড ইভেন্টে সাড়া দেয়?'
      },
      options: [
        {
          en: 'Because the event listener lives on the existing parent container; when child elements are clicked, the event naturally bubbles up to that parent',
          bn: 'কারণ লিসেনারটি আগে থেকেই থাকা প্যারেন্ট কন্টেইনারে থাকে; চাইল্ডে ক্লিক করলে ইভেন্ট নিজে থেকেই বাবল হয়ে প্যারেন্টে পৌঁছে যায়'
        },
        {
          en: 'Because jQuery scans the entire HTML tree every 10 milliseconds',
          bn: 'কারণ জেকোয়েরি প্রতি ১০ মিলিসেকেন্ড পর পর স্ক্যান করে'
        },
        {
          en: 'Because the browser reloads the web page automatically',
          bn: 'কারণ ব্রাউজার পেজটি রিলোড করে'
        },
        {
          en: 'It does not work on new elements',
          bn: 'নতুন উপাদানে এটি কাজ করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Events bubble upwards from the clicked element to the static ancestor container.',
        bn: 'ক্লিক করা চাইল্ড থেকে প্যারেন্টের দিকে ইভেন্ট বাবল হয়ে ওঠার কথা ভাবুন।'
      },
      explanation: {
        en: 'Browser events bubble up the hierarchy. The parent intercepts the event and checks if the origin matches the child selector.',
        bn: 'ইভেন্ট বাবলিংয়ের কারণে সন্তানের ক্লিক প্যারেন্টে পৌঁছায় এবং প্যারেন্ট যাচাই করে দেখে ক্লিকটি কোন চাইল্ড থেকে এসেছে।'
      }
    },
    {
      id: 'jquery-namespacing-benefit-ex',
      kind: 'mcq',
      topic: 'Purpose of event namespacing',
      question: {
        en: 'What is the main benefit of using namespaced events like $(elem).on("click.modalHandler")?',
        bn: '$(elem).on("click.modalHandler")-এর মতো নেমস্পেসযুক্ত ইভেন্ট ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        {
          en: 'You can remove only your specific listener via $(elem).off("click.modalHandler") without disturbing other click handlers registered on that element',
          bn: 'আপনি $(elem).off("click.modalHandler") দিয়ে কেবল আপনার লিসেনারটি সরাতে পারেন, যা বাটনে থাকা অন্য কোনো ক্লিক লিসেনারের ক্ষতি করে না'
        },
        {
          en: 'It speeds up mouse movement across the screen',
          bn: 'এটি মাউস চলাচলের গতি বাড়ায়'
        },
        {
          en: 'It encrypts the event payload with a security key',
          bn: 'এটি ইভেন্ট ডাটা এনক্রিপ্ট করে'
        },
        {
          en: 'It allows clicking elements with a keyboard',
          bn: 'এটি কীবোর্ড দিয়ে ক্লিকের সুযোগ দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Allows precision unbinding using the namespace tag.',
        bn: 'নেমস্পেস ট্যাগ দিয়ে নির্ভুলভাবে নির্দিষ্ট লিসেনার আনবাইন্ড করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Namespaces allow surgical unbinding with .off("event.namespace") without unintentionally stripping handlers bound by other modules.',
        bn: 'নেমস্পেস ব্যবহারের ফলে অন্য কোডের কোনো ক্ষতি না করে নির্দিষ্ট মডিউলের ইভেন্ট নিরাপদে অপসারণ করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-events-and-delegation',
    title: {
      en: 'jQuery Events & Delegation Quiz',
      bn: 'জেকোয়েরি ইভেন্ট ও ডেলিগেশন কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-prevent-vs-stop',
        kind: 'mcq',
        topic: 'Difference between preventDefault and stopPropagation',
        question: {
          en: 'What is the key difference between event.preventDefault() and event.stopPropagation()?',
          bn: 'event.preventDefault() এবং event.stopPropagation()-এর মধ্যে প্রধান পার্থক্য কী?'
        },
        options: [
          {
            en: 'preventDefault() cancels the browser default action (e.g. following a link); stopPropagation() stops the event from bubbling up the DOM tree',
            bn: 'preventDefault() ব্রাউজারের স্বাভাবিক ডিফল্ট কাজ (যেমন লিংকে যাওয়া) বন্ধ করে; আর stopPropagation() ডম ট্রির ওপরে ইভেন্ট বাবল হওয়া আটকে দেয়'
          },
          {
            en: 'preventDefault() stops bubbling; stopPropagation() stops defaults',
            bn: 'preventDefault বাবলিং থামায় আর stopPropagation ডিফল্ট থামায়'
          },
          {
            en: 'They are identical methods with identical effects',
            bn: 'এরা একদম একই কাজ করে'
          },
          {
            en: 'Both methods close the browser window',
            bn: 'উভয় মেথড উইন্ডো বন্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prevent default stops native actions; stop propagation halts tree bubbling.',
          bn: 'ডিফল্ট অ্যাকশন থামানো বনাম ট্রির ওপরে বাবল হওয়া বন্ধ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'preventDefault halts default behavior (like form submission or hyperlink jumps). stopPropagation prevents ancestor listeners from receiving the event.',
          bn: 'preventDefault লিংকে যাওয়া বা ফর্ম সাবমিট হওয়ার মতো ডিফল্ট কাজ বন্ধ করে, আর stopPropagation প্যারেন্টের দিকে ইভেন্ট ওঠা রোধ করে।'
        }
      },
      {
        id: 'q-jquery-return-false-shortcut',
        kind: 'mcq',
        topic: 'What returning false in a jQuery event handler does',
        question: {
          en: 'In jQuery event handlers, what does executing "return false;" achieve?',
          bn: 'জেকোয়েরি ইভেন্ট হ্যান্ডলারে "return false;" লিখলে কী ঘটে?'
        },
        options: [
          {
            en: 'It automatically invokes both event.preventDefault() and event.stopPropagation() simultaneously',
            bn: 'এটি একসাথে event.preventDefault() এবং event.stopPropagation() উভয়কেই স্বয়ংক্রিয়ভাবে কার্যকর করে'
          },
          {
            en: 'It throws a runtime JavaScript error',
            bn: 'এটি জাভাস্ক্রিপ্ট এরর ছুঁড়ে দেয়'
          },
          {
            en: 'It reloads the current page',
            bn: 'এটি পুরো পেজ রিলোড করে'
          },
          {
            en: 'It turns the button background black',
            bn: 'বাটনের ব্যাকগ্রাউন্ড কালো করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In jQuery, returning false combines preventDefault and stopPropagation.',
          bn: 'জেকোয়েরিতে return false একসাথে উভয় মেথডের কাজ সম্পন্ন করে।'
        },
        explanation: {
          en: 'jQuery treats return false as an umbrella shortcut executing both preventDefault() and stopPropagation().',
          bn: 'জেকোয়েরিতে return false দিলে একাধারে ডিফল্ট আচরণ এবং বাবলিং উভয়ই একসাথে বন্ধ হয়ে যায়।'
        }
      },
      {
        id: 'q-jquery-trigger-vs-trigger-handler',
        kind: 'mcq',
        topic: 'Difference between .trigger() and .triggerHandler()',
        question: {
          en: 'How does $(form).triggerHandler("submit") differ from $(form).trigger("submit")?',
          bn: '$(form).triggerHandler("submit") এবং $(form).trigger("submit")-এর মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'triggerHandler() executes jQuery event handlers on the first element without submitting the form or bubbling; trigger() bubbles and submits the form',
            bn: 'triggerHandler() ফর্ম সাবমিট বা বাবলিং না করে কেবল প্রথম উপাদানের কোড চালায়; কিন্তু trigger() বাবল করে এবং ব্রাউজারে আসল ফর্ম সাবমিট ঘটায়'
          },
          {
            en: 'triggerHandler() submits the form twice',
            bn: 'triggerHandler দুইবার ফর্ম সাবমিট করে'
          },
          {
            en: 'trigger() can only be called on buttons',
            bn: 'trigger কেবল বাটনে চলে'
          },
          {
            en: 'They perform identical actions',
            bn: 'এরা একদম একই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'triggerHandler does not bubble and does not trigger native browser actions.',
          bn: 'triggerHandler বাবলিং করে না এবং ব্রাউজারের আসল ফর্ম সাবমিট হওয়া আটকে রাখে।'
        },
        explanation: {
          en: 'triggerHandler() executes registered JavaScript functions only, suppressing bubbling and the default browser action.',
          bn: 'triggerHandler() শুধুমাত্র জাভাস্ক্রিপ্ট কোড চালায় কিন্তু ব্রাউজারের আসল ডিফল্ট সাবমিট বা বাবলিং বন্ধ রাখে।'
        }
      },
      {
        id: 'q-jquery-one-method',
        kind: 'mcq',
        topic: 'Function of $(elem).one()',
        question: {
          en: 'What is the primary operational behavior of the $(elem).one() method?',
          bn: '$(elem).one() মেথডের প্রধান কার্যকরী বৈশিষ্ট্য কী?'
        },
        options: [
          {
            en: 'It executes the event handler exactly once for the first occurrence and immediately removes the listener',
            bn: 'এটি প্রথম ঘটনার জন্য হ্যান্ডলার কোডটি ঠিক একবার চালায় এবং চলার পর সাথে সাথে লিসেনারটি সরিয়ে নেয়'
          },
          {
            en: 'It limits the user to clicking once every minute',
            bn: 'এটি মিনিটে মাত্র একবার ক্লিকের অনুমতি দেয়'
          },
          {
            en: 'It only works if exactly one element is matched on the page',
            bn: 'পেজে ঠিক একটি উপাদান মিললেই কেবল কাজ করে'
          },
          {
            en: 'It counts the number of mouse clicks',
            bn: 'এটি ক্লিকের সংখ্যা গণনা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Runs once and unbinds itself automatically.',
          bn: 'একবার চলে নিজে থেকেই আনবাইন্ড হয়ে যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: '.one() attaches an event handler that runs a single time and unbinds itself immediately afterward.',
          bn: '.one() এমন ইভেন্ট লিসেনার তৈরি করে যা একবার এক্সিকিউট হওয়ার পরপরই নিজে থেকেই মুছে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'effects-and-the-frame-budget',
    tech: 'jquery',
    title: {
      en: 'jQuery Animation, Effects & The Frame Budget',
      bn: 'জেকোয়েরি অ্যানিমেশন, ইফেক্ট ও ফ্রেম বাজেট'
    }
  }
};
