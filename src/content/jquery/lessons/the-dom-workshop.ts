import type { Lesson } from '../../../lib/types';

export const TheDomWorkshopLesson: Lesson = {
  slug: 'the-dom-workshop',
  tech: 'jquery',
  title: {
    en: 'DOM Manipulation, HTML Insertion & Attributes',
    bn: 'ডম ম্যানিপুলেশন, এইচটিএমএল ইনসার্শন ও অ্যাট্রিবিউট'
  },
  summary: {
    en: 'Manipulating document elements is one of the most prominent features of jQuery. Developers insert new markup inside existing elements using append and prepend, or outside them using before and after. Removing elements requires understanding the distinction between remove, empty, and detach. For example, starting with 4 list items, appending 2 new items expands the list to 6 elements, and removing 1 item leaves 5 final children. Furthermore, jQuery handles attributes and live DOM properties cleanly through attr and prop, resolving cross-browser inconsistencies for states like checked and disabled. This lesson explores DOM insertion algorithms, element cleanup, style mutations, and the box model dimension APIs.',
    bn: 'ডকুমেন্টের ভেতরের উপাদান পরিবর্তন ও সংযোজন করা জেকোয়েরির অন্যতম প্রধান ক্ষমতা। append এবং prepend মেথড দিয়ে কোনো উপাদানের ভেতরে শুরুতে বা শেষে এবং before ও after দিয়ে উপাদানের বাইরে নতুন নোড যুক্ত করা হয়। কোনো উপাদান মোছার ক্ষেত্রে remove, empty এবং detach-এর মধ্যে সূক্ষ্ম পার্থক্য বোঝা জরুরি। যেমন শুরুতে ৪টি উপাদান বিশিষ্ট তালিকায় ২টি নতুন নোড যোগ করলে মোট ৬টি উপাদান হয় এবং সেখান থেকে ১টি নোড মুছে ফেললে অবশিষ্ট থাকে ৫টি নোড। এছাড়া attr এবং prop মেথড ব্যবহার করে অ্যাট্রিবিউট ও লাইভ প্রপার্টির তারতম্য দক্ষতার সাথে নিয়ন্ত্রণ করা যায়। এই পাঠে ডম ইনসার্শন, মেমোরি ক্লিনআপ, সিএসএস রূপান্তর এবং বক্স মডেলের মাপজোখ বিশদভাবে আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: DOM Tree Mutation',
        bn: 'মূল ধারণা: ডম ট্রি রূপান্তর'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you build dynamic web interfaces, `jQuery` provides intuitive methods to inject, modify, and delete `DOM` nodes. The library automatically handles cross-browser document fragments and cleans up attached event handlers to safeguard against memory leaks.',
        bn: 'ডায়নামিক ওয়েব ইন্টারফেস তৈরির সময় জেকোয়েরি নোড যুক্ত করা, পরিবর্তন ও মুছে ফেলার অত্যন্ত সহজ মেথড সরবরাহ করে। লাইব্রেরিটি নিজে থেকেই ব্রাউজারের অভ্যন্তরীণ ফ্র্যাগমেন্ট সামলায় এবং মেমোরি লিক রোধ করতে ইভেন্ট হ্যান্ডলার মুছে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Inside Insertion (.append() / .prepend())',
          def: {
            en: 'Injecting nodes inside a container as its last child (.append) or first child (.prepend)',
            bn: 'কন্টেইনারের ভেতরের অংশে একদম শেষে (.append) অথবা একদম শুরুতে (.prepend) নতুন নোড যুক্ত করা'
          }
        },
        {
          term: 'Outside Insertion (.before() / .after())',
          def: {
            en: 'Placing sibling nodes immediately before or after the targeted element in the document tree',
            bn: 'ডম ট্রিতে টার্গেট উপাদানের ঠিক আগে (.before) অথবা ঠিক পরে (.after) সহোদর নোড বসানো'
          }
        },
        {
          term: '.remove() vs .detach()',
          def: {
            en: '.remove() discards nodes and cleans bound events/data; .detach() retains bound events and data for later reinsertion',
            bn: '.remove() নোড মুছে ফেলার সাথে সাথে ইভেন্ট ও ডেটাও ধ্বংস করে; আর .detach() পরবর্তীতে ব্যবহারের জন্য ইভেন্ট বাঁচিয়ে রাখে'
          }
        },
        {
          term: '.attr() vs .prop()',
          def: {
            en: '.attr() accesses the static HTML attribute string; .prop() accesses the dynamic live JavaScript DOM property',
            bn: '.attr() এইচটিএমএলের স্থির স্ট্রিং মান পড়ে; আর .prop() ব্রাউজারের জীবন্ত জাভাস্ক্রিপ্ট ডম মান নিয়ন্ত্রণ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'insertion-methods-table',
      text: {
        en: 'DOM Insertion API Matrix',
        bn: 'ডম ইনসার্শন মেথডের তালিকা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of jQuery DOM Insertion Methods',
        bn: 'জেকোয়েরি ডম ইনসার্শন মেথডসমূহের তুলনামূলক বিবরণ'
      },
      head: [
        { en: 'Method', bn: 'মেথড' },
        { en: 'Target Location', bn: 'স্থাপনের স্থান' },
        { en: 'Inverted Counterpart', bn: 'বিপরীত সিনট্যাক্স' }
      ],
      rows: [
        [
          { en: '.append(content)', bn: '.append(content)' },
          { en: 'Inside target, after all existing children', bn: 'টার্গেটের ভেতরে সমস্ত চাইল্ডের শেষে' },
          { en: '$(content).appendTo(target)', bn: '$(content).appendTo(target)' }
        ],
        [
          { en: '.prepend(content)', bn: '.prepend(content)' },
          { en: 'Inside target, before all existing children', bn: 'টার্গেটের ভেতরে সমস্ত চাইল্ডের শুরুতে' },
          { en: '$(content).prependTo(target)', bn: '$(content).prependTo(target)' }
        ],
        [
          { en: '.after(content)', bn: '.after(content)' },
          { en: 'Outside target, as immediately next sibling', bn: 'টার্গেটের বাইরে ঠিক পরের সহোদর হিসেবে' },
          { en: '$(content).insertAfter(target)', bn: '$(content).insertAfter(target)' }
        ],
        [
          { en: '.before(content)', bn: '.before(content)' },
          { en: 'Outside target, as immediately prior sibling', bn: 'টার্গেটের বাইরে ঠিক আগের সহোদর হিসেবে' },
          { en: '$(content).insertBefore(target)', bn: '$(content).insertBefore(target)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: DOM Element Insertion & Removal Engine',
        bn: 'চালনাযোগ্য সিমুলেশন: ডম উপাদান সংযোজন ও অপসারণ গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates an element lifecycle: starting with 4 initial items, appending 2 new elements to reach 6 total items, and finally removing 1 node to yield 5 remaining items:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ডমের জীবনচক্র প্রদর্শন করে: শুরুতে ৪টি আইটেম নিয়ে শুরু করে ২টি নোড যোগ করায় মোট সংখ্যা হয় ৬টি, এবং পরবর্তীতে ১টি নোড অপসারণ করলে অবশিষ্ট থাকে ৫টি উপাদান:'
      }
    },
    {
      type: 'code',
      id: 'jquery-dom-sim',
      lang: 'javascript',
      code: `// jQuery DOM Element Insertion and Removal Simulation
const initialChildren = 4; // List container begins with 4 child items
const appendedNodes = 2;   // Appending 2 new items via container.append()
const totalAfterAppend = initialChildren + appendedNodes; // 6 items in DOM
const removedNodes = 1;    // Deleting 1 item via item.remove()
const finalChildren = totalAfterAppend - removedNodes; // 5 surviving items

console.log('Initial child count in container element:', initialChildren);
// -> Initial child count in container element: 4

console.log('Total children present after appending 2 items:', totalAfterAppend);
// -> Total children present after appending 2 items: 6

console.log('Final child count remaining after removing 1 item:', finalChildren);
// -> Final child count remaining after removing 1 item: 5`,
      caption: {
        en: 'Figure 1: Initializing 4 child items, appending 2 nodes brings the sum to 6, and deleting 1 item leaves 5 final nodes',
        bn: 'চিত্র ১: শুরুতে ৪টি আইটেম থেকে ২টি নোড যোগ করায় সংখ্যা বেড়ে হয় ৬ এবং ১টি আইটেম মুছে ফেললে অবশিষ্ট থাকে ৫টি নোড'
      }
    },
    {
      type: 'heading',
      id: 'dimension-box-model-guide',
      text: {
        en: 'CSS Box Model Dimensions in jQuery',
        bn: 'জেকোয়েরিতে সিএসএস বক্স মডেলের পরিমাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'jQuery simplifies dimensional geometry calculations across different browsers. Instead of computing offsetWidth or getComputedStyle manually, helper methods calculate exact box boundaries.',
        bn: 'জেকোয়েরি বিভিন্ন ব্রাউজারে উপাদানের আকার পরিমাপের কাজ সহজ করে তোলে। offsetWidth বা getComputedStyle ম্যানুয়ালি হিসাব না করে বিল্ট-ইন মেথড দিয়ে বক্সের নির্ভুল মাপ পাওয়া যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '$(elem).width() / .height()',
          def: {
            en: 'Retrieves or sets content dimensions only, excluding padding, borders, and margins',
            bn: 'প্যাডিং, বর্ডার ও মার্জিন বাদ দিয়ে শুধুমাত্র ভেতরের মূল কন্টেন্টের মাপ দেয় বা সেট করে'
          }
        },
        {
          term: '$(elem).innerWidth() / .innerHeight()',
          def: {
            en: 'Calculates content dimensions plus internal padding boundaries',
            bn: 'মূল কন্টেন্টের সাথে ভেতরের প্যাডিং যুক্ত করে মোট প্রস্থ ও উচ্চতা পরিমাপ করে'
          }
        },
        {
          term: '$(elem).outerWidth() / .outerHeight()',
          def: {
            en: 'Calculates content dimensions plus padding and border thickness (passing true appends margins too)',
            bn: 'কন্টেন্টের সাথে প্যাডিং এবং বর্ডার যোগ করে মাপ দেয় (প্যারামিটারে true দিলে মার্জিনও যুক্ত হয়)'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-dom-final-count-ex',
      kind: 'mcq',
      topic: 'Final element count calculation',
      question: {
        en: 'According to our DOM simulation, when a container with 4 initial items has 2 nodes appended and 1 node removed, how many items remain?',
        bn: 'আমাদের ডম সিমুলেশন অনুযায়ী ৪টি আইটেম থাকা কন্টেইনারে ২টি নোড যুক্ত করে ১টি নোড অপসারণ করলে কয়টি আইটেম অবশিষ্ট থাকে?'
      },
      options: [
        {
          en: '5 items remaining',
          bn: '৫টি আইটেম অবশিষ্ট থাকে'
        },
        {
          en: '6 items',
          bn: '৬টি আইটেম'
        },
        {
          en: '4 items',
          bn: '৪টি আইটেম'
        },
        {
          en: '2 items',
          bn: '২টি আইটেম'
        }
      ],
      answer: 0,
      hint: {
        en: '4 plus 2 equals 6; subtracting 1 leaves 5 items.',
        bn: '৪ এর সাথে ২ যোগ করলে ৬ হয়; সেখান থেকে ১ বিয়োগ করলে ৫ থাকে।'
      },
      explanation: {
        en: 'Initial 4 items plus 2 appended items equals 6, minus 1 removed item leaves 5 final items.',
        bn: 'প্রাথমিক ৪টি উপাদানে ২টি যোগ হয়ে ৬টি হয়, যা থেকে ১টি অপসারণ করলে ৫টি উপাদান টিকে থাকে।'
      }
    },
    {
      id: 'jquery-empty-vs-remove-ex',
      kind: 'mcq',
      topic: 'Difference between .empty() and .remove()',
      question: {
        en: 'How does $(parent).empty() differ from $(parent).remove()?',
        bn: '$(parent).empty() এবং $(parent).remove()-এর মধ্যে পার্থক্য কী?'
      },
      options: [
        {
          en: '.empty() strips all child nodes and text while keeping the parent element intact; .remove() destroys the parent element and everything inside it',
          bn: '.empty() মূল প্যারেন্টকে অক্ষত রেখে কেবল তার ভেতরের চাইল্ড নোডগুলো পরিষ্কার করে; কিন্তু .remove() প্যারেন্টসহ ভেতরের সবকিছু পুরোপুরি ধ্বংস করে দেয়'
        },
        {
          en: '.empty() changes the background color to white',
          bn: '.empty() ব্যাকগ্রাউন্ড সাদা করে'
        },
        {
          en: '.remove() only hides elements with display: none',
          bn: '.remove() কেবল উপাদান লুকিয়ে রাখে'
        },
        {
          en: 'They perform the exact same action',
          bn: 'এরা একদম একই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'empty clears the inside; remove destroys the container itself.',
        bn: 'empty ভেতরের জিনিস খালি করে আর remove পাত্রটাকেই ভেঙে ফেলে।'
      },
      explanation: {
        en: '.empty() empties the child nodes inside the matched element. .remove() tears the matched element out of the document entirely.',
        bn: '.empty() প্যারেন্ট ঠিক রেখে ভেতরের চাইল্ড খালি করে, আর .remove() পুরো প্যারেন্ট নোডটিকেই ডম ট্রি থেকে মুছে দেয়।'
      }
    },
    {
      id: 'jquery-detach-ex',
      kind: 'mcq',
      topic: 'Why use .detach() over .remove()',
      question: {
        en: 'When would an engineer choose $(elem).detach() instead of $(elem).remove()?',
        bn: 'কখন একজন প্রকৌশলী $(elem).remove()-এর পরিবর্তে $(elem).detach() ব্যবহার করবেন?'
      },
      options: [
        {
          en: 'When the element needs to be removed from the DOM temporarily and reinserted later without losing its bound event handlers and data',
          bn: 'যখন কোনো উপাদান সাময়িকভাবে ডম থেকে সরিয়ে পরে আবার লাগাতে হয় এবং তার সাথে যুক্ত ইভেন্ট ও ডেটা অক্ষত রাখতে হয়'
        },
        {
          en: 'When the element has no CSS styling',
          bn: 'যখন উপাদানে কোনো সিএসএস স্টাইল থাকে না'
        },
        {
          en: 'When building mobile-only web pages',
          bn: 'কেবল মোবাইল ওয়েবসাইটের জন্য'
        },
        {
          en: 'To make images load faster from the server',
          bn: 'সার্ভার থেকে দ্রুত ছবি লোড করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preserves event listeners and cached data for future reinsertion.',
        bn: 'ভবিষ্যতে পুনরায় যুক্ত করার জন্য ইভেন্ট এবং ডেটা বাঁচিয়ে রাখার কথা ভাবুন।'
      },
      explanation: {
        en: '.detach() preserves all jQuery data and event handlers associated with the removed elements for seamless reinsertion.',
        bn: '.detach() ডম থেকে উপাদান সরালেও তার মেমোরি ডেটা ও ইভেন্ট হ্যান্ডলার বাঁচিয়ে রাখে যাতে পুনরায় লাগালে তা সঠিকভাবে কাজ করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-dom-workshop',
    title: {
      en: 'DOM Manipulation & Attributes Quiz',
      bn: 'ডম ম্যানিপুলেশন ও অ্যাট্রিবিউট কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-attr-vs-prop',
        kind: 'mcq',
        topic: 'Difference between .attr("checked") and .prop("checked")',
        question: {
          en: 'Why is $("input").prop("checked") preferred over $("input").attr("checked") when checking live checkbox status?',
          bn: 'চেকবক্সের বর্তমান জীবন্ত অবস্থা জানতে কেন $("input").attr("checked")-এর বদলে $("input").prop("checked") ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: '.prop("checked") returns a true/false boolean reflecting live DOM state, whereas .attr("checked") returns the initial HTML serialization string',
            bn: '.prop("checked") বর্তমান সক্রিয় অবস্থার সঠিক ট্রু/ফলস বুলিয়ান মান দেয়, কিন্তু .attr("checked") কেবল এইচটিএমএলের শুরুর স্ট্রিং মানটি প্রতিফলিত করে'
          },
          {
            en: '.prop() is deprecated and will throw an error',
            bn: '.prop() বাতিল হয়ে গেছে'
          },
          {
            en: '.attr() only works on links and buttons',
            bn: '.attr() কেবল লিংকে চলে'
          },
          {
            en: 'There is no difference between attr and prop',
            bn: 'attr এবং prop-এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'prop returns live boolean true/false; attr returns the static HTML markup string.',
          bn: 'prop বর্তমান ট্রু/ফলস বুলিয়ান দেয় আর attr স্থির স্ট্রিং মান দেয়।'
        },
        explanation: {
          en: 'HTML attributes represent initial default values, while DOM properties hold dynamic live runtime states.',
          bn: 'এইচটিএমএল অ্যাট্রিবিউট শুধুমাত্র শুরুর মান মনে রাখে, আর ডম প্রপার্টি ব্রাউজারের জীবন্ত স্টেট ট্র্যাক করে।'
        }
      },
      {
        id: 'q-jquery-outer-width-margin',
        kind: 'mcq',
        topic: 'Calculating outerWidth including margins',
        question: {
          en: 'How do you invoke .outerWidth() so that it includes external CSS margins in its measurement?',
          bn: 'বাইরের সিএসএস মার্জিন অন্তর্ভুক্ত করে পরিমাপ পেতে .outerWidth() কীভাবে কল করতে হয়?'
        },
        options: [
          {
            en: '$(elem).outerWidth(true)',
            bn: 'বুলিয়ান ট্রু সহ $(elem).outerWidth(true)'
          },
          {
            en: '$(elem).outerWidth("margin")',
            bn: 'স্ট্রিং সহ $(elem).outerWidth("margin")'
          },
          {
            en: '$(elem).outerWidth(100)',
            bn: 'সংখ্যা সহ $(elem).outerWidth(100)'
          },
          {
            en: '$(elem).fullWidth()',
            bn: 'ফাংশন $(elem).fullWidth()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pass boolean true as the parameter.',
          bn: 'প্যারামিটারে বুলিয়ান true মান পাঠানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Passing true to .outerWidth(true) instructs jQuery to include exterior margin dimensions alongside padding and borders.',
          bn: '.outerWidth(true)-তে true দিলে জেকোয়েরি প্যাডিং ও বর্ডারের সাথে বাইরের মার্জিনও হিসেবে অন্তর্ভুক্ত করে।'
        }
      },
      {
        id: 'q-jquery-toggle-class',
        kind: 'mcq',
        topic: 'Behavior of .toggleClass()',
        question: {
          en: 'What does $(item).toggleClass("active") execute when the class is already present on the element?',
          bn: 'উপাদানটিতে "active" ক্লাস আগে থেকেই উপস্থিত থাকলে $(item).toggleClass("active") কল করলে কী ঘটবে?'
        },
        options: [
          {
            en: 'It removes the "active" class from the element',
            bn: 'এটি উপাদানটি থেকে "active" ক্লাসটি মুছে ফেলে'
          },
          {
            en: 'It duplicates the class twice',
            bn: 'এটি ক্লাসটিকে দুইবার যোগ করে'
          },
          {
            en: 'It throws a syntax warning',
            bn: 'এটি সিনট্যাক্স এরর দেয়'
          },
          {
            en: 'It deletes the element from the document',
            bn: 'এটি উপাদানটিকে মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Toggles between adding if missing and removing if present.',
          bn: 'থাকলে মুছে ফেলা এবং না থাকলে যোগ করার পরিবর্তনের কথা ভাবুন।'
        },
        explanation: {
          en: '.toggleClass() adds the class if absent, and removes the class if it already exists.',
          bn: '.toggleClass() ক্লাসটি না থাকলে যুক্ত করে এবং আগে থেকে থাকলে তা সরিয়ে দেয়।'
        }
      },
      {
        id: 'q-jquery-html-vs-text',
        kind: 'mcq',
        topic: 'XSS safety difference between .html() and .text()',
        question: {
          en: 'Why is .text(userInput) much safer than .html(userInput) when displaying untrusted data submitted by visitors?',
          bn: 'ব্যবহারকারীর পাঠানো অনিরাপদ তথ্য দেখানোর সময় কেন .html(userInput)-এর চেয়ে .text(userInput) বেশি নিরাপদ?'
        },
        options: [
          {
            en: '.text() escapes HTML markup and inserts content as plain text, preventing malicious Cross-Site Scripting (XSS) script execution',
            bn: '.text() এইচটিএমএল কোড এস্কেপ করে সাধারণ টেক্সট আকারে বসায়, ফলে ক্ষতিকর ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণ রোধ হয়'
          },
          {
            en: '.text() executes faster because it uses WebAssembly',
            bn: '.text() ওয়েবঅ্যাসেম্বলি ব্যবহার করে দ্রুত চলে'
          },
          {
            en: '.html() encrypts all text with SSL',
            bn: '.html() টেক্সট এনক্রিপ্ট করে'
          },
          {
            en: 'Both methods have identical security properties',
            bn: 'উভয় মেথডের নিরাপত্তা সমান'
          }
        ],
        answer: 0,
        hint: {
          en: 'text() sets innerText/textContent, preventing script execution.',
          bn: 'text() সাধারণ টেক্সট হিসেবে বসিয়ে স্ক্রিপ্ট রান হওয়া আটকে দেয়।'
        },
        explanation: {
          en: '.text() safely encodes special characters into plain text, protecting the site against XSS injections.',
          bn: '.text() যেকোনো ট্যাগকে নিরাপদ টেক্সট হিসেবে রেন্ডার করে ক্ষতিকর জাভাস্ক্রিপ্ট চালানো প্রতিহত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'events-and-delegation',
    tech: 'jquery',
    title: {
      en: 'jQuery Events, Event Delegation & Namespacing',
      bn: 'জেকোয়েরি ইভেন্ট, ইভেন্ট ডেলিগেশন ও নেমস্পেসিং'
    }
  }
};
