import type { Lesson } from '../../../lib/types';

export const glasshouseMapLesson: Lesson = {
  slug: 'the-glasshouse-map',
  tech: 'dom',
  title: {
    en: 'DOM Tree Architecture, NodeTypes & Elements vs Nodes',
    bn: 'ডম ট্রি আর্কিটেকচার, নোড টাইপ ও এলিমেন্ট বনাম নোড'
  },
  summary: {
    en: 'The Document Object Model (DOM) is an in-memory tree representation of an HTML document created by the browser parsing engine. Every point in this tree is a Node object identified by a numerical nodeType. Here 1 represents an Element node (like a div or button), 3 represents a Text node, 8 represents a Comment, and 9 represents the root Document node. Developers frequently encounter bugs when confusing elements with generic nodes. An HTML container containing 2 child elements (such as an h2 and a p) often contains 5 total child nodes because browser parsers preserve newline whitespace as 3 separate text nodes. Navigating strictly through elements requires properties like children, firstElementChild, and nextElementSibling, whereas childNodes, firstChild, and nextSibling traverse all raw nodes indiscriminately. This lesson teaches tree architecture, node classification, and safe hierarchy traversal.',
    bn: 'ডকুমেন্ট অবজেক্ট মডেল (DOM) হলো ব্রাউজার পার্সিং ইঞ্জিন দ্বারা মেমোরিতে তৈরি হওয়া ওয়েব পেজের একটি হায়ারার্কিক্যাল ট্রি বা গঠন। এই ট্রির প্রতিটি বিন্দু হলো একটি Node অবজেক্ট যা সংখ্যাসূচক nodeType দ্বারা চিহ্নিত হয়। এখানে ১ নির্দেশ করে Element নোড (যেমন div বা বাটন), ৩ নির্দেশ করে Text নোড, ৮ নির্দেশ করে Comment নোড এবং ৯ নির্দেশ করে মূল Document নোড। এলিমেন্ট এবং সাধারণ নোডের পার্থক্য না বুঝলে প্রায়ই কোডে ত্রুটি দেখা দেয়। যেমন ২টি চাইল্ড উপাদান (h2 এবং p) থাকা একটি কন্টেইনারে মোট ৫টি চাইল্ড নোড থাকে, কারণ ব্রাউজার নতুন লাইনের ফাঁকা স্থানগুলোকে ৩টি আলাদা টেক্সট নোড হিসেবে গণ্য করে। শুধুমাত্র এইচটিএমএল উপাদান ট্র্যাক করতে children, firstElementChild এবং nextElementSibling ব্যবহার করতে হয়, যেখানে childNodes বা firstChild সবধরনের নোড একসাথে বের করে আনে। এই পাঠে ডম ট্রি গঠন, নোড শ্রেণিবিভাগ এবং নিরাপদ ট্রাভার্সাল শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: From Raw HTML Strings to Live Objects',
        bn: 'মূল ধারণা: সাধারণ এইচটিএমএল স্ট্রিং থেকে জীবন্ত অবজেক্ট'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When your web browser downloads an HTML file over the network, it does not display the plain text characters directly. Instead, the browser parsing engine tokenizes the markup, constructs tokens into a C++ object graph, and exposes this structure to JavaScript as the Document Object Model (DOM). Every tag, comment, and text snippet becomes a reachable JavaScript object.',
        bn: 'ব্রাউজার যখন কোনো ওয়েব পেজের এইচটিএমএল ফাইল ডাউনলোড করে, তখন এটি সরাসরি টেক্সট স্ক্রিনে দেখায় না। বরং ব্রাউজারের পার্সিং ইঞ্জিন এইচটিএমএল কোডকে বিশ্লেষণ করে মেমোরিতে একটি অবজেক্ট গ্রাফ তৈরি করে এবং জাভাস্ক্রিপ্টে এটি ডকুমেন্ট অবজেক্ট মডেল (DOM) হিসেবে উন্মুক্ত করে। প্রতিটি ট্যাগ, কমেন্ট এবং লেখার টুকরো জাভাস্ক্রিপ্টের জন্য একটি স্বতন্ত্র জীবন্ত অবজেক্টে পরিণত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Document Object Model (DOM)',
          def: {
            en: 'The object-oriented programming interface representing HTML documents as a hierarchical tree of nodes',
            bn: 'এইচটিএমএল ডকুমেন্টকে নোডের অনুক্রমিক ট্রি আকারে প্রকাশকারী অবজেক্ট-ভিত্তিক প্রোগ্রামিং ইন্টারফেস'
          }
        },
        {
          term: 'Node.nodeType Constants',
          def: {
            en: 'Standard numerical values identifying node classification (1: ELEMENT_NODE, 3: TEXT_NODE, 8: COMMENT_NODE, 9: DOCUMENT_NODE)',
            bn: 'নোডের ধরন শনাক্ত করার প্রমিত সংখ্যা (১: এলিমেন্ট নোড, ৩: টেক্সট নোড, ৮: কমেন্ট নোড, ৯: ডকুমেন্ট নোড)'
          }
        },
        {
          term: 'HTMLCollection vs NodeList',
          def: {
            en: 'HTMLCollection stores strictly Element nodes; NodeList can contain all node types including raw text and comments',
            bn: 'HTMLCollection কেবল এইচটিএমএল এলিমেন্টগুলো ধারণ করে, আর NodeList টেক্সট ও কমেন্টসহ সব নোড ধারণ করতে পারে'
          }
        },
        {
          term: 'Whitespace Text Nodes',
          def: {
            en: 'Invisible Text nodes created automatically by HTML parsers whenever source markup includes newlines or indentation between tags',
            bn: 'ট্যাগের মাঝখানের স্পেস ও নতুন লাইনের কারণে ব্রাউজার পার্সার দ্বারা তৈরি হওয়া অদৃশ্য টেক্সট নোড'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'nodetype-reference-table',
      text: {
        en: 'Essential DOM Node Types and Identification',
        bn: 'প্রধান প্রধান ডম নোড টাইপ ও শনাক্তকরণ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Standard W3C DOM Node Types and Corresponding Properties',
        bn: 'ডব্লিউথ্রিসি ডম নোড টাইপ এবং সংশ্লিষ্ট বৈশিষ্ট্যসমূহ'
      },
      head: [
        { en: 'Constant Name', bn: 'ধ্রুবক' },
        { en: 'nodeType Value', bn: 'nodeType মান' },
        { en: 'nodeName Value', bn: 'nodeName মান' },
        { en: 'Typical DOM Representation', bn: 'ডমে বাস্তব উদাহরণ' }
      ],
      rows: [
        [
          { en: 'Node.ELEMENT_NODE', bn: 'Node.ELEMENT_NODE' },
          { en: '1', bn: '১' },
          { en: 'Uppercase tag name (e.g. "DIV")', bn: 'বড় হাতের ট্যাগ নাম (যেমন "DIV")' },
          { en: 'HTML elements that carry attributes and children', bn: 'এইচটিএমএল উপাদান যাতে অ্যাট্রিবিউট ও চাইল্ড থাকে' }
        ],
        [
          { en: 'Node.TEXT_NODE', bn: 'Node.TEXT_NODE' },
          { en: '3', bn: '৩' },
          { en: '"#text"', bn: '"#text"' },
          { en: 'Text characters inside elements or indentation whitespace', bn: 'উপাদানের ভেতরের টেক্সট বা ইন্ডেন্টেশন স্পেস' }
        ],
        [
          { en: 'Node.COMMENT_NODE', bn: 'Node.COMMENT_NODE' },
          { en: '8', bn: '৮' },
          { en: '"#comment"', bn: '"#comment"' },
          { en: 'Developer markup comments (<!-- note -->)', bn: 'ডেভেলপারের কমেন্ট নোট' }
        ],
        [
          { en: 'Node.DOCUMENT_NODE', bn: 'Node.DOCUMENT_NODE' },
          { en: '9', bn: '৯' },
          { en: '"#document"', bn: '"#document"' },
          { en: 'The root window.document entry point for the page', bn: 'পুরো ওয়েব পেজের মূল ডকুমেন্ট অবজেক্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Node Classification and Child Traversal Engine',
        bn: 'চালনাযোগ্য সিমুলেশন: নোড শ্রেণিবিভাগ ও চাইল্ড ট্রাভার্সাল গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates parsing an HTML container containing 2 child elements and 3 whitespace text nodes, calculating the total child node count of 5 alongside nodeType constants 1, 3, 8, and 9:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ২টি চাইল্ড উপাদান এবং ৩টি স্পেস টেক্সট নোডযুক্ত একটি এইচটিএমএল কন্টেইনার পার্স করে নোড টাইপ ১, ৩, ৮ ও ৯ সহ মোট ৫টি চাইল্ড নোড হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'dom-nodetypes-sim',
      lang: 'javascript',
      code: `// DOM Node Classification and Hierarchy Traversal Engine
const nodeTypeElement = 1; // Node.ELEMENT_NODE
const nodeTypeText = 3;    // Node.TEXT_NODE
const nodeTypeComment = 8; // Node.COMMENT_NODE
const nodeTypeDoc = 9;     // Node.DOCUMENT_NODE

// In markup: <div id="card">\n  <h2>Title</h2>\n  <p>Body</p>\n</div>
const elementCount = 2; // <h2> and <p> elements
const textCount = 3;    // 3 newline/indentation text nodes

// Total child nodes in childNodes list
const totalChildNodes = elementCount + textCount;

console.log('Node.ELEMENT_NODE numerical identifier:', nodeTypeElement);
// -> Node.ELEMENT_NODE numerical identifier: 1

console.log('Node.TEXT_NODE numerical identifier:', nodeTypeText);
// -> Node.TEXT_NODE numerical identifier: 3

console.log('Node.COMMENT_NODE numerical identifier:', nodeTypeComment);
// -> Node.COMMENT_NODE numerical identifier: 8

console.log('Node.DOCUMENT_NODE numerical identifier:', nodeTypeDoc);
// -> Node.DOCUMENT_NODE numerical identifier: 9

console.log('Count of HTML Element children:', elementCount);
// -> Count of HTML Element children: 2

console.log('Count of whitespace text nodes:', textCount);
// -> Count of whitespace text nodes: 3

console.log('Total childNodes in container:', totalChildNodes);
// -> Total childNodes in container: 5`,
      caption: {
        en: 'Figure 1: An HTML container with 2 elements and 3 whitespace text nodes contains 5 total child nodes under nodeType constants 1, 3, 8, and 9',
        bn: 'চিত্র ১: ২টি উপাদান এবং ৩টি স্পেস টেক্সট নোডযুক্ত একটি এইচটিএমএল কন্টেইনারে নোড টাইপ ১, ৩, ৮ ও ৯ অনুসারে মোট ৫টি চাইল্ড নোড থাকে'
      }
    },
    {
      type: 'heading',
      id: 'element-vs-node-traversal-guide',
      text: {
        en: 'Safe Traversal: Elements vs Raw Nodes',
        bn: 'নিরাপদ ট্রাভার্সাল: উপাদান বনাম কাঁচা নোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When traversing the DOM in JavaScript, you must choose between element traversal and node traversal. Using firstChild or nextSibling frequently returns empty text nodes containing carriage returns or indentation. For robust UI logic, always prefer element-scoped properties.',
        bn: 'জাভাস্ক্রিপ্টে ডম ট্রাভার্সাল করার সময় উপাদান নাকি কাঁচা নোড খুঁজছেন তা স্পষ্ট রাখা দরকার। firstChild বা nextSibling ব্যবহার করলে প্রায়ই এইচটিএমএল উপাদানের বদলে ফাঁকা স্পেস বা নতুন লাইনের টেক্সট নোড চলে আসে। তাই নির্ভরযোগ্য কোড লিখতে সর্বদা এলিমেন্ট-ভিত্তিক প্রপার্টি ব্যবহার করা উচিত।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'element.children vs element.childNodes',
          def: {
            en: 'children yields an HTMLCollection of Element nodes only, while childNodes returns all nodes including whitespace',
            bn: 'children কেবলমাত্র এইচটিএমএল উপাদান দেয়, আর childNodes স্পেসসহ সমস্ত নোড ফিরিয়ে দেয়'
          }
        },
        {
          term: 'firstElementChild vs firstChild',
          def: {
            en: 'firstElementChild safely targets the first nested HTML element tag, ignoring leading whitespace text nodes',
            bn: 'firstElementChild শুরুর স্পেস এড়িয়ে সরাসরি প্রথম এইচটিএমএল উপাদানটিকে নির্বাচন করে'
          }
        },
        {
          term: 'nextElementSibling vs nextSibling',
          def: {
            en: 'nextElementSibling hops directly to the next HTML tag sibling, whereas nextSibling stops at immediate text nodes',
            bn: 'nextElementSibling মাঝখানের স্পেস বাদ দিয়ে পরের এইচটিএমএল উপাদানে লাফ দেয়, যেখানে nextSibling স্পেস পেলেই থেমে যায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-childnodes-calc-ex',
      kind: 'mcq',
      topic: 'Calculating total child nodes in an indented card',
      question: {
        en: 'According to our tree simulation, how many total child nodes exist in a container with 2 elements and 3 whitespace text nodes?',
        bn: 'আমাদের ট্রি সিমুলেশন অনুযায়ী ২টি উপাদান এবং ৩টি স্পেস টেক্সট নোডযুক্ত একটি কন্টেইনারে মোট কয়টি চাইল্ড নোড থাকে?'
      },
      options: [
        {
          en: '5 total child nodes (2 elements + 3 text nodes)',
          bn: 'মোট ৫টি চাইল্ড নোড (২টি উপাদান + ৩টি টেক্সট নোড)'
        },
        {
          en: '2 child nodes',
          bn: '২টি চাইল্ড নোড'
        },
        {
          en: '3 child nodes',
          bn: '৩টি চাইল্ড নোড'
        },
        {
          en: '1 child node',
          bn: '১টি চাইল্ড নোড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Add 2 element nodes plus 3 whitespace text nodes to get 5.',
        bn: '২টি উপাদান নোড এবং ৩টি টেক্সট নোড যোগ করলে ৫ হয়।'
      },
      explanation: {
        en: 'The childNodes list counts all nodes indiscriminately: 2 elements plus 3 whitespace nodes equals 5 total child nodes.',
        bn: 'childNodes তালিকা সব নোড গণনা করে: ২টি এলিমেন্ট এবং ৩টি স্পেস মিলিয়ে মোট ৫টি নোড তৈরি হয়।'
      }
    },
    {
      id: 'dom-nodetype-element-ex',
      kind: 'mcq',
      topic: 'Numerical value of Node.ELEMENT_NODE',
      question: {
        en: 'What is the numerical value of node.nodeType when inspecting an HTML div or button element?',
        bn: 'একটি এইচটিএমএল div বা button উপাদানের ক্ষেত্রে node.nodeType-এর সংখ্যাসূচক মান কত?'
      },
      options: [
        {
          en: '1 (Node.ELEMENT_NODE)',
          bn: '১ (Node.ELEMENT_NODE)'
        },
        {
          en: '3 (Node.TEXT_NODE)',
          bn: '৩ (Node.TEXT_NODE)'
        },
        {
          en: '8 (Node.COMMENT_NODE)',
          bn: '৮ (Node.COMMENT_NODE)'
        },
        {
          en: '9 (Node.DOCUMENT_NODE)',
          bn: '৯ (Node.DOCUMENT_NODE)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Element nodes carry the identifier number 1.',
        bn: 'এইচটিএমএল এলিমেন্ট নোডের শনাক্তকারী সংখ্যা হলো ১।'
      },
      explanation: {
        en: 'W3C specifications define nodeType 1 as Node.ELEMENT_NODE for standard markup elements.',
        bn: 'ডব্লিউথ্রিসি স্ট্যান্ডার্ড অনুযায়ী সমস্ত এইচটিএমএল ট্যাগের জন্য nodeType এর মান ১ নির্ধারিত।'
      }
    },
    {
      id: 'dom-firstelementchild-ex',
      kind: 'mcq',
      topic: 'Difference between firstChild and firstElementChild',
      question: {
        en: 'Why do front-end engineers prefer element.firstElementChild over element.firstChild when selecting the first visual child?',
        bn: 'প্রথম ভিজ্যুয়াল চাইল্ড সিলেক্ট করার সময় ফ্রন্ট-এন্ড ইঞ্জিনিয়াররা কেন element.firstChild-এর চেয়ে element.firstElementChild বেশি পছন্দ করেন?'
      },
      options: [
        {
          en: 'firstElementChild ignores leading whitespace text nodes caused by code indentation and returns the first actual HTML tag',
          bn: 'firstElementChild ইন্ডেন্টেশনের কারণে তৈরি হওয়া শুরুর ফাঁকা টেক্সট নোড এড়িয়ে সরাসরি প্রথম এইচটিএমএল ট্যাগটি ফিরিয়ে দেয়'
        },
        {
          en: 'firstChild is deprecated and throws an exception in modern browsers',
          bn: 'firstChild আধুনিক ব্রাউজারে এরর দেয়'
        },
        {
          en: 'firstElementChild makes CSS styles load twice as fast',
          bn: 'firstElementChild সিএসএস দ্রুত লোড করে'
        },
        {
          en: 'There is no difference; they are exact aliases',
          bn: 'এদের মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Skips newline and whitespace text nodes to reach the first HTML element.',
        bn: 'ফাঁকা স্পেস বাদ দিয়ে প্রথম আসল এইচটিএমএল উপাদান পাওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'firstChild returns the raw first node, which is usually a whitespace text node. firstElementChild filters strictly for Element nodes.',
        bn: 'firstChild সাধারণ স্পেস নোড ফেরত দিতে পারে, কিন্তু firstElementChild শুধুমাত্র আসল এইচটিএমএল উপাদান খুঁজে নেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-glasshouse-map',
    title: {
      en: 'DOM Tree Architecture & NodeTypes Quiz',
      bn: 'ডম ট্রি গঠন ও নোড টাইপ কুইজ'
    },
    questions: [
      {
        id: 'q-dom-text-node-number',
        kind: 'mcq',
        topic: 'Numerical identifier for Node.TEXT_NODE',
        question: {
          en: 'Which numerical identifier corresponds to Node.TEXT_NODE in the DOM specification?',
          bn: 'ডম স্পেসিফিকেশনে Node.TEXT_NODE-এর সংখ্যাসূচক মান কোনটি?'
        },
        options: [
          {
            en: '3',
            bn: '৩'
          },
          {
            en: '1',
            bn: '১'
          },
          {
            en: '8',
            bn: '৮'
          },
          {
            en: '9',
            bn: '৯'
          }
        ],
        answer: 0,
        hint: {
          en: 'Element is 1; Text is 3.',
          bn: 'এলিমেন্ট ১; টেক্সট হলো ৩।'
        },
        explanation: {
          en: 'Node.TEXT_NODE has a constant value of 3 in all modern browsers.',
          bn: 'সকল আধুনিক ব্রাউজারে টেক্সট নোডের জন্য nodeType এর মান সর্বদা ৩।'
        }
      },
      {
        id: 'q-dom-comment-node-identifier',
        kind: 'mcq',
        topic: 'Numerical identifier for Node.COMMENT_NODE',
        question: {
          en: 'What is the nodeType value of an HTML comment like <!-- configuration flag --> in the DOM tree?',
          bn: 'ডম ট্রিতে <!-- configuration flag -->-এর মতো একটি এইচটিএমএল কমেন্টের nodeType মান কত?'
        },
        options: [
          {
            en: '8 (Node.COMMENT_NODE)',
            bn: '৮ (Node.COMMENT_NODE)'
          },
          {
            en: '1',
            bn: '১'
          },
          {
            en: '3',
            bn: '৩'
          },
          {
            en: '9',
            bn: '৯'
          }
        ],
        answer: 0,
        hint: {
          en: 'Comment nodes are identified by the number 8.',
          bn: 'কমেন্ট নোডের জন্য সংখ্যা ৮ নির্ধারিত।'
        },
        explanation: {
          en: 'W3C DOM specifications assign nodeType 8 to Comment nodes.',
          bn: 'ডব্লিউথ্রিসি ডম নিয়ম অনুযায়ী কমেন্ট নোডের মান হলো ৮।'
        }
      },
      {
        id: 'q-dom-children-vs-childnodes',
        kind: 'mcq',
        topic: 'Difference between children and childNodes collections',
        question: {
          en: 'What is the key functional difference between element.children and element.childNodes?',
          bn: 'element.children এবং element.childNodes-এর মধ্যে প্রধান কার্যকরী পার্থক্য কী?'
        },
        options: [
          {
            en: 'children contains only Element nodes, while childNodes contains all node types including text and comments',
            bn: 'children কেবল এলিমেন্ট নোড ধারণ করে, আর childNodes টেক্সট ও কমেন্টসহ সমস্ত নোড ধারণ করে'
          },
          {
            en: 'children is an array, while childNodes is a string',
            bn: 'children হলো অ্যারে এবং childNodes হলো স্ট্রিং'
          },
          {
            en: 'childNodes contains only buttons, while children contains only paragraphs',
            bn: 'childNodes কেবল বাটন রাখে আর children কেবল প্যারাগ্রাফ রাখে'
          },
          {
            en: 'There is no difference in modern browsers',
            bn: 'আধুনিক ব্রাউজারে এদের কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'children filters for elements only; childNodes keeps everything.',
          bn: 'children কেবল এলিমেন্ট রাখে এবং childNodes সবকিছু অন্তর্ভুক্ত করে।'
        },
        explanation: {
          en: 'children returns an HTMLCollection of element nodes. childNodes returns a NodeList of all nodes including text and comments.',
          bn: 'children শুধু আসল এইচটিএমএল উপাদান ফিল্টার করে, আর childNodes স্পেস ও কমেন্টসহ সব নোড দেয়।'
        }
      },
      {
        id: 'q-dom-document-node-number',
        kind: 'mcq',
        topic: 'Numerical identifier for Node.DOCUMENT_NODE',
        question: {
          en: 'What nodeType value does window.document return?',
          bn: 'window.document অবজেক্টের nodeType মান কত?'
        },
        options: [
          {
            en: '9 (Node.DOCUMENT_NODE)',
            bn: '৯ (Node.DOCUMENT_NODE)'
          },
          {
            en: '1',
            bn: '১'
          },
          {
            en: '3',
            bn: '৩'
          },
          {
            en: '0',
            bn: '০'
          }
        ],
        answer: 0,
        hint: {
          en: 'The root document node is identified by the number 9.',
          bn: 'রুট বা মূল ডকুমেন্ট নোডের সংখ্যা হলো ৯।'
        },
        explanation: {
          en: 'The top-level Document object has nodeType 9 (Node.DOCUMENT_NODE).',
          bn: 'ডম হায়ারার্কির শীর্ষে থাকা মূল ডকুমেন্টের nodeType হলো ৯।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-expedition-orchard',
    tech: 'dom',
    title: {
      en: 'Query Selectors, Traversal & Live Collections',
      bn: 'কোয়েরি সিলেক্টর, ট্রাভার্সাল ও লাইভ কালেকশন'
    }
  }
};
