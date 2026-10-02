import type { Lesson } from '../../../lib/types';

export const WidgetsAndTheBuildLesson: Lesson = {
  slug: 'widgets-and-the-build',
  tech: 'dart',
  title: {
    en: 'Declarative Composition & The Build Context',
    bn: 'ডিক্লেয়ারেটিভ কম্পোজিশন এবং বিল্ড কনটেক্সট'
  },
  summary: {
    en: 'Master the foundational declarative UI architecture of Dart and Flutter. Explore how immutable widget trees serve as lightweight declarative configurations, navigate the 3-tree architecture (Widget, Element, RenderObject), understand reconciliation and the role of BuildContext, and contrast StatelessWidget against StatefulWidget.',
    bn: 'Dart এবং Flutter-এর মৌলিক ডিক্লেয়ারেটিভ ইউআই আর্কিটেকচার আয়ত্ত করুন। হালকা কনফিগারেশন হিসেবে অপরিবর্তনীয় উইজেট ট্রি, ৩-ট্রি আর্কিটেকচার (Widget, Element, RenderObject), রিকনসিলিয়েশন ও BuildContext-এর ভূমিকা এবং StatelessWidget বনাম StatefulWidget-এর কার্যপদ্ধতি।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'declarative-ui-and-three-trees-heading',
      text: {
        en: 'Declarative UI Philosophy and the 3-Tree Architecture',
        bn: 'ডিক্লেয়ারেটিভ ইউআই দর্শন এবং ৩-ট্রি আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional mobile user interfaces relied on imperative mutations where developers manually queried UI widgets and altered properties like color and text in place. In Dart (Google\'s client-optimized programming language powering Flutter), architecture is driven by declarative composition where UI is a direct mathematical function of state. To render fluid animations at 60 frames per second without stuttering, Flutter coordinates 3 distinct structural trees. The Widget Tree consists of lightweight, immutable configuration blueprints that are created and discarded cheaply. The Element Tree maintains persistent structural hierarchy and lifecycle state. Finally, the RenderObject Tree manages physical sizing, coordinate layout, and GPU canvas painting.',
        bn: 'প্রথাগত মোবাইল অ্যাপ্লিকেশনে ডেভেলপারদের ম্যানুয়ালি ইউআই উইজেট খুঁজে নিয়ে তাদের টেক্সট বা রঙ পরিবর্তন করতে হতো। কিন্তু Dart (Flutter ফ্রেমওয়ার্কের ইঞ্জিন হিসেবে গুগলের তৈরি ক্লায়েন্ট-অপটিমাইজড ভাষা)-এ আর্কিটেকচার পরিচালিত হয় ডিক্লেয়ারেটিভ কম্পোজিশনের মাধ্যমে, যেখানে ইউআই হলো অ্যাপ স্টেটের একটি গাণিতিক প্রতিচ্ছবি। প্রতি সেকেন্ডে ৬০ ফ্রেমের মসৃণ অ্যানিমেশন অক্ষুণ্ণ রাখতে Flutter মূলত ৩ টি কাঠামোগত ট্রি সমন্বয় করে। প্রথমটি হলো উইজেট ট্রি, যা হালকা ও অপরিবর্তনীয় নকশার সমাহার এবং খুব অল্প খরচে তৈরি ও ধ্বংস করা যায়। দ্বিতীয়টি হলো এলিমেন্ট ট্রি, যা অ্যাপের স্থায়ী কাঠামো ও লাইফসাইকেল স্টেট ধরে রাখে। আর সর্বশেষটি হলো রেন্ডার-অবজেক্ট ট্রি, যা স্ক্রিনের আকার, লেআউট এবং জিপিইউ ক্যানভাস ড্রয়িং পরিচালনা করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 3-Tree Architecture: Lightweight Widget blueprints reconcile with persistent Elements, which drive heavy GPU RenderObjects.',
        bn: 'চিত্র ১: ৩-ট্রি আর্কিটেকচার: হালকা উইজেট ব্লুপ্রিন্ট স্থায়ী এলিমেন্টের সাথে সমন্বয় করে, যা ভারী জিপিইউ রেন্ডার-অবজেক্টকে পরিচালনা করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">FLUTTER &amp; DART 3-TREE RECONCILIATION ARCHITECTURE</text>

  <!-- Tree 1: Widget Tree -->
  <g transform="translate(30, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Widget Tree (Blueprints)</text>

    <rect x="15" y="45" width="200" height="42" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">const Container()</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Immutable configuration</text>

    <rect x="15" y="98" width="200" height="42" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="118" fill="#38bdf8" font-size="10" font-family="monospace">const Text("Hello")</text>
    <text x="25" y="131" fill="#cbd5e1" font-size="9" font-family="sans-serif">Re-instantiated at 60 FPS</text>

    <!-- Characteristics -->
    <rect x="15" y="155" width="200" height="65" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="177" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Lightweight &amp; Disposable:</text>
    <text x="25" y="195" fill="#f8fafc" font-size="9" font-family="sans-serif">Cheaply garbage collected</text>
    <text x="25" y="208" fill="#cbd5e1" font-size="9" font-family="sans-serif">Zero rendering pixels on screen</text>
  </g>

  <!-- Tree 2: Element Tree -->
  <g transform="translate(305, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#d97706" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Element Tree (Skeleton)</text>

    <rect x="15" y="45" width="200" height="42" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">SingleChildRenderObjectElement</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">BuildContext handle</text>

    <rect x="15" y="98" width="200" height="42" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="118" fill="#fbbf24" font-size="10" font-family="monospace">ComponentElement</text>
    <text x="25" y="131" fill="#cbd5e1" font-size="9" font-family="sans-serif">Holds State&lt;T&gt; instance</text>

    <!-- Characteristics -->
    <rect x="15" y="155" width="200" height="65" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="177" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Persistent Structural Spine:</text>
    <text x="25" y="195" fill="#f8fafc" font-size="9" font-family="sans-serif">Reconciles widget diffs</text>
    <text x="25" y="208" fill="#cbd5e1" font-size="9" font-family="sans-serif">Survives widget rebuild cycles</text>
  </g>

  <!-- Tree 3: RenderObject Tree -->
  <g transform="translate(580, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#059669" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Render Tree (GPU Canvas)</text>

    <rect x="15" y="45" width="200" height="42" rx="5" fill="#0f172a" stroke="#059669" />
    <text x="25" y="65" fill="#34d399" font-size="10" font-family="monospace">RenderPadding / RenderBox</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Calculates exact pixel bounds</text>

    <rect x="15" y="98" width="200" height="42" rx="5" fill="#0f172a" stroke="#059669" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">RenderParagraph</text>
    <text x="25" y="131" fill="#cbd5e1" font-size="9" font-family="sans-serif">Text layout &amp; Skia painting</text>

    <!-- Characteristics -->
    <rect x="15" y="155" width="200" height="65" rx="5" fill="#059669" fill-opacity="0.2" stroke="#10b981" />
    <text x="25" y="177" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Heavyweight Painting Core:</text>
    <text x="25" y="195" fill="#f8fafc" font-size="9" font-family="sans-serif">Direct Impeller rasterization</text>
    <text x="25" y="208" fill="#cbd5e1" font-size="9" font-family="sans-serif">Never rebuilt unnecessarily!</text>
  </g>

  <!-- Connectors -->
  <path d="M 260 175 L 305 175" stroke="#38bdf8" stroke-width="2" />
  <path d="M 535 175 L 580 175" stroke="#f59e0b" stroke-width="2" />
</svg>`
    },
    {
      type: 'heading',
      id: 'build-context-and-reconciliation-heading',
      text: {
        en: 'The Build Context, Reconciliation, and Widget Invalidation',
        bn: 'বিল্ড কনটেক্সট, রিকনসিলিয়েশন এবং উইজেট ইনভ্যালিডেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Developers frequently wonder what "BuildContext" physically represents in Dart. The answer is fundamental: BuildContext is the Element itself. In Flutter\'s architecture, every Widget receives a BuildContext handle during its "build()" method, granting safe access to ancestral data (such as Theme.of(context) and MediaQuery.of(context)). When application state mutates via "setState()", the element is flagged as dirty. During the subsequent frame, the framework invokes the widget reconciliation algorithm. If a newly instantiated widget shares the exact same "runtimeType" and "key" as the existing element, Flutter updates the existing element\'s configuration instead of rebuilding the heavy RenderObject underneath, preserving smooth frame rates.',
        bn: 'ডেভেলপাররা প্রায়শই জানতে চান Dart এবং Flutter-এ "BuildContext" শারীরিকভাবে কী প্রকাশ করে। এর আসল উত্তর অত্যন্ত চমকপ্রদ: BuildContext নিজেই হলো মূলত সেই Element। Flutter আর্কিটেকচারে প্রতিটি উইজেট তার "build()" মেথড চলার সময় একটি BuildContext হ্যান্ডেল পায়, যা ওপরের প্যারেন্ট ডেটা (যেমন Theme.of(context) বা MediaQuery.of(context)) নিরাপদে অ্যাক্সেস করার সুবিধা দেয়। "setState()"-এর মাধ্যমে স্টেট বদলে গেলে এলিমেন্টটিকে dirty বা পরিবর্তনযোগ্য হিসেবে চিহ্নিত করা হয়। পরবর্তী ফ্রেমে ফ্রেমওয়ার্ক রিকনসিলিয়েশন অ্যালগরিদম চালায়। নতুন উইজেটের "runtimeType" এবং "key" যদি পুরোনো এলিমেন্টের সাথে হুবহু মিলে যায়, তবে Flutter ভেতরের ভারী RenderObject নতুন করে না বানিয়ে কেবল তার মান আপডেট করে, ফলে ফ্রেমরেট সম্পূর্ণ অক্ষুণ্ণ থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Flutter 3-tree reconciliation: diffing old vs new widgets by runtimeType and key to update persistent Elements without re-allocating RenderObjects.',
        bn: 'Flutter ৩-ট্রি রিকনসিলিয়েশনের TypeScript রূপায়ণ: runtimeType এবং key দ্বারা তুলনা করে নতুন রেন্ডার অবজেক্ট না বানিয়েই স্থায়ী এলিমেন্ট আপডেটের প্রক্রিয়া।'
      },
      code: `// Simulation of Flutter & Dart 3-Tree Architecture and Reconciliation Algorithm

// 1. Immutable Widget Blueprints
export interface SimulatedWidget {
  runtimeType: string;
  key?: string;
  props: Record<string, unknown>;
}

// 2. Heavy GPU RenderObject (Expensive to allocate)
export class SimulatedRenderObject {
  constructor(public layoutDimensions: string) {
    console.log('[Render Tree] Heavy GPU RenderObject allocated:', layoutDimensions);
  }

  public updateProperties(newProps: Record<string, unknown>): void {
    console.log('[Render Tree] In-place property update on existing RenderObject:', JSON.stringify(newProps));
  }
}

// 3. Persistent Element Node (The BuildContext handle!)
export class SimulatedElement {
  public renderObject: SimulatedRenderObject;

  constructor(public widget: SimulatedWidget) {
    console.log('[Element Tree] Persistent Element spawned for:', widget.runtimeType);
    this.renderObject = new SimulatedRenderObject('100x50 Box');
  }

  // Reconciliation: Can this Element reuse its existing RenderObject?
  // Law: widget.runtimeType == oldWidget.runtimeType && widget.key == oldWidget.key
  public updateWidget(newWidget: SimulatedWidget): boolean {
    if (this.widget.runtimeType === newWidget.runtimeType && this.widget.key === newWidget.key) {
      console.log('[Reconciliation] Matching runtimeType & key! Reusing persistent Element & RenderObject.');
      this.widget = newWidget;
      this.renderObject.updateProperties(newWidget.props);
      return true; // Successfully reconciled without new RenderObject allocation!
    }
    console.log('[Reconciliation] Type mismatch! Tearing down old subtree and allocating new Element.');
    return false;
  }
}

// Execution Demonstration
console.log('--- 1. Initial Frame Build (Frame 0) ---');
const initialWidget: SimulatedWidget = {
  runtimeType: 'TextWidget',
  key: 'header_title',
  props: { text: 'Welcome', color: 'blue' }
};

const persistentElement = new SimulatedElement(initialWidget);

console.log('\n--- 2. Subsequent Rebuild (Frame 1: setState() called) ---');
const updatedWidget: SimulatedWidget = {
  runtimeType: 'TextWidget',
  key: 'header_title', // Identical key and runtimeType
  props: { text: 'Welcome Tamim!', color: 'green' }
};

// Reconcile new widget blueprint with existing element
const reconciled = persistentElement.updateWidget(updatedWidget);
console.log('Was RenderObject Reused (Zero GPU Re-allocation)?:', reconciled); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Declarative UI',
          def: {
            en: 'UI paradigm where interfaces are declared as pure functions of state rather than manually mutated in place.',
            bn: 'পদ্ধতি যেখানে ইন্টারফেসকে সরাসরি স্টেটের গাণিতিক রূপ হিসেবে ঘোষণা করা হয়, ম্যানুয়ালি আপডেট করার বদলে।'
          }
        },
        {
          term: '3-Tree Architecture',
          def: {
            en: 'Flutter design partitioning UI into Widget blueprints, Element lifecycles, and RenderObject GPU painting nodes.',
            bn: 'আর্কিটেকচার যা উইজেট নকশা, এলিমেন্ট জীবনচক্র এবং রেন্ডার অবজেক্ট আঁকার কাজকে ৩ ভাগে ভাগ করে চালায়।'
          }
        },
        {
          term: 'BuildContext',
          def: {
            en: 'Handle passed to build() representing the location of a widget in the Element tree, granting inherited tree access.',
            bn: 'হ্যান্ডেল যা এলিমেন্ট ট্রিতে উইজেটের অবস্থান নির্দেশ করে এবং প্যারেন্ট ডেটা পড়ার সুবিধা দেয়।'
          }
        },
        {
          term: 'Widget Reconciliation',
          def: {
            en: 'Algorithm comparing new and old widgets by runtimeType and key to update elements without recreating render objects.',
            bn: 'অ্যালগরিদম যা টাইপ ও কি মিলিয়ে নতুন অবজেক্ট তৈরি না করেই পুরোনো রেন্ডার অবজেক্ট আপডেট করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'three-tree-architecture-roles-ex1',
      kind: 'mcq',
      topic: 'three-tree-architecture-widget-element-renderobject',
      question: {
        en: 'What distinct duties do the Widget Tree, Element Tree, and RenderObject Tree fulfill in Flutter\'s rendering engine?',
        bn: 'Flutter-এর রেন্ডারিং ইঞ্জিনে উইজেট ট্রি, এলিমেন্ট ট্রি এবং রেন্ডার-অবজেক্ট ট্রি কোন পৃথক দায়িত্ব পালন করে?'
      },
      options: [
        {
          en: 'Widgets are lightweight immutable blueprints; Elements manage lifecycle and reconciliation state; RenderObjects calculate pixel layout and paint to the GPU canvas',
          bn: 'উইজেট হলো হালকা অপরিবর্তনীয় নকশা; এলিমেন্ট জীবনচক্র ও রিকনসিলিয়েশন সমন্বয় করে; আর রেন্ডার-অবজেক্ট পিক্সেল লেআউট হিসেব করে জিপিইউ ক্যানভাসে ছবি আঁকে'
        },
        {
          en: 'Widgets compile Dart code into C++, Elements format JSON, and RenderObjects write to SQL databases',
          bn: 'উইজেট কোড C++ এ রূপান্তর করে, এলিমেন্ট জেএসন সাজায় এবং রেন্ডার-অবজেক্ট এসকিউএল ডাটাবেজে লেখে'
        },
        {
          en: 'All 3 trees perform the exact same rendering operation simultaneously',
          bn: '৩ টি ট্রি-ই একসাথে হুবহু একই রেন্ডারিং কাজ সম্পন্ন করে'
        },
        {
          en: 'The 3-tree architecture was replaced by HTML DOM in 2023',
          bn: '২০২৩ সালে ৩-ট্রি আর্কিটেকচার বাদ দিয়ে এইচটিএমএল ডম আনা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Widgets configure; Elements coordinate; RenderObjects paint pixels.',
        bn: 'উইজেটে থাকে নকশা, এলিমেন্টে থাকে নিয়ম আর রেন্ডারে থাকে আঁকার ক্ষমতা।'
      },
      explanation: {
        en: 'Separating lightweight configuration (Widgets) from expensive rendering (RenderObjects) enables Flutter to re-instantiate widgets at 60 FPS without jank.',
        bn: 'এর মাধ্যমে ভারী রেন্ডার অবজেক্ট না ভেঙে প্রতি সেকেন্ডে ৬০ ফ্রেমে দ্রুত উইজেট আপডেট সম্ভব হয়।'
      }
    },
    {
      id: 'buildcontext-physical-identity-ex2',
      kind: 'mcq',
      topic: 'buildcontext-is-the-element-itself',
      question: {
        en: 'What is the physical runtime identity of the "BuildContext" passed into every Widget\'s "build(BuildContext context)" method?',
        bn: 'প্রতিটি উইজেটের "build(BuildContext context)" মেথডে পাঠানো "BuildContext"-এর আসল রানটাইম পরিচয় কী?'
      },
      options: [
        {
          en: 'BuildContext is an interface implemented directly by the persistent Element node associated with that widget in the Element tree',
          bn: 'BuildContext হলো এলিমেন্ট ট্রিতে থাকা সেই উইজেটের সাথে যুক্ত স্থায়ী Element অবজেক্টেরই একটি সরাসরি ইন্টারফেস'
        },
        {
          en: 'BuildContext is a 64-bit integer tracking screen brightness',
          bn: 'BuildContext হলো স্ক্রিনের উজ্জ্বলতা মাপার একটি ৬৪-বিট পূর্ণসংখ্যা'
        },
        {
          en: 'BuildContext is a global variable shared across the entire operating system',
          bn: 'BuildContext হলো পুরো অপারেটিং সিস্টেমে শেয়ার করা একটি গ্লোবাল ভ্যারিয়েবল'
        },
        {
          en: 'BuildContext is an empty placeholder with zero methods',
          bn: 'BuildContext হলো কোনো মেথডহীন একটি খালি প্লেসহোল্ডার'
        }
      ],
      answer: 0,
      hint: {
        en: 'BuildContext is physically the Element managing the widget in the tree.',
        bn: 'এলিমেন্ট অবজেক্টটি নিজেই BuildContext হিসেবে কাজ করে উইজেটকে গাছ চেনার সুযোগ দেয়।'
      },
      explanation: {
        en: 'Because Element implements BuildContext, passing context gives widgets a safe handle to query their exact location and find ancestors via context.dependOnInheritedWidgetOfExactType.',
        bn: 'এর ফলে উইজেট গাছ থেকে সহজেই থিম বা অন্যান্য প্যারেন্ট ডেটা খুঁজে নিতে পারে।'
      }
    },
    {
      id: 'widget-reconciliation-rules-ex3',
      kind: 'mcq',
      topic: 'widget-reconciliation-runtime-type-and-key',
      question: {
        en: 'Under what condition does the Flutter framework reuse an existing Element rather than destroying and re-allocating it during a rebuild?',
        bn: 'কোন শর্তে Flutter ফ্রেমওয়ার্ক রিবিল্ডের সময় পুরোনো এলিমেন্টটি ধ্বংস না করে পুনরায় ব্যবহার করে?'
      },
      options: [
        {
          en: 'When the new widget has the exact same runtimeType and key as the old widget associated with that Element',
          bn: 'যখন নতুন উইজেটের runtimeType এবং key সেই এলিমেন্টের সাথে থাকা পুরোনো উইজেটের সাথে হুবহু মিলে যায়'
        },
        {
          en: 'When the smartphone is plugged into an electrical charger',
          bn: 'যখন স্মার্টফোনটি বিদ্যুতের চার্জারে লাগানো থাকে'
        },
        {
          en: 'When the widget contains more than 100 characters of text',
          bn: 'যখন উইজেটে ১০০ টির বেশি অক্ষরের টেক্সট থাকে'
        },
        {
          en: 'Elements are never reused; they are always destroyed on every frame',
          bn: 'এলিমেন্ট কখনোই পুনর্ব্যবহার হয় না; প্রতি ফ্রেমে ধ্বংস করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reconciliation requires matching runtimeType and key (Widget.canUpdate).',
        bn: 'টাইপ এবং কি মিললেই ফ্রেমওয়ার্ক পুরোনো এলিমেন্টকে বহাল রাখে।'
      },
      explanation: {
        en: 'The Widget.canUpdate static check compares runtimeType and key. If both match, Flutter calls element.update(newWidget), preserving the persistent Element and RenderObject.',
        bn: 'ফলে বাড়তি মেমোরি খরচ না করে সরাসরি পুরোনো অবজেক্টটি আপডেট করা সম্ভব হয়।'
      }
    },
    {
      id: 'stateless-vs-stateful-lifecycle-ex4',
      kind: 'mcq',
      topic: 'stateless-vs-stateful-widget-lifecycle',
      question: {
        en: 'Why does a "StatefulWidget" separate its implementation into 2 classes (the Widget and the State<T> class)?',
        bn: 'কেন একটি "StatefulWidget" তার বাস্তবায়নকে ২টি ক্লাসে (Widget এবং State<T>) বিভক্ত করে?'
      },
      options: [
        {
          en: 'Because Widgets are immutable configurations recreated on every build, while the State object remains persistent across rebuilds to retain dynamic mutable variables',
          bn: 'কারণ উইজেট হলো অপরিবর্তনীয় নকশা যা প্রতি বিল্ডে নতুন তৈরি হয়, আর State অবজেক্টটি স্থায়ী থেকে পরিবর্তনশীল ডেটা মনে রাখে'
        },
        {
          en: 'Because Dart does not allow classes with more than 10 lines of code',
          bn: 'কারণ Dart ১০ লাইনের বেশি কোডযুক্ত ক্লাস সমর্থন করে না'
        },
        {
          en: 'To split execution between the CPU and the hard drive',
          bn: 'সিপিইউ এবং হার্ড ড্রাইভের মাঝে কাজ ভাগ করে দেওয়ার জন্য'
        },
        {
          en: 'Separating widgets into 2 classes was deprecated in Flutter 3',
          bn: 'Flutter ৩-এ উইজেটকে ২ ক্লাসে ভাগ করার নিয়ম বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Widget is disposable configuration; the State object is persistent memory.',
        bn: 'উইজেট বারবার ভেঙে নতুন হতে পারে, কিন্তু State তার ভেতরের মান আজীবন মনে রাখে।'
      },
      explanation: {
        en: 'Separating Widget and State preserves state integrity. When a parent widget rebuilds, the lightweight Widget is recreated, but the existing State object is retained untouched.',
        bn: 'এর ফলে বাইরের পরিবর্তনের মাঝেও ব্যবহারকারীর ইনপুট বা ফর্মের ডেটা নিরাপদে টিকে থাকে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-widgets-and-the-build',
    title: {
      en: 'Declarative Widgets & BuildContext Quiz',
      bn: 'ডিক্লেয়ারেটিভ উইজেট এবং BuildContext কুইজ'
    },
    questions: [
      {
        id: 'quiz-const-constructor-widget-optimization',
        kind: 'mcq',
        topic: 'const-constructor-widget-rebuild-skipping',
        question: {
          en: 'Why does prefixing widget instantiations with "const" (e.g. "const Text(\\"Hello\\")") dramatically improve rendering performance in Flutter?',
          bn: 'উইজেট তৈরির আগে "const" যোগ করলে (যেমন "const Text(\\"Hello\\")") কেন Flutter-এ রেন্ডারিং পারফরম্যান্স নাটকীয়ভাবে বাড়ে?'
        },
        options: [
          {
            en: 'It canonicalizes the widget at compile time, allowing the framework to skip calling build() on that widget subtree when parent widgets rebuild',
            bn: 'এটি কম্পাইল-টাইমেই উইজেটকে ক্যানোনিকালাইজ করে, ফলে প্যারেন্ট উইজেট রিবিল্ড হলেও ফ্রেমওয়ার্ক এই উইজেটটির build() মেথড চালানো সম্পূর্ণ এড়িয়ে যায়'
          },
          {
            en: 'It increases the internet connection speed of the smartphone',
            bn: 'এটি স্মার্টফোনের ইন্টারনেট সংযোগের গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It deletes all unused assets from the APK binary',
            bn: 'এটি এপিকে বাইনারি থেকে অব্যবহৃত ছবি মুছে ফেলে'
          },
          {
            en: 'const widgets cannot be displayed on Android screens',
            bn: 'const উইজেট অ্যান্ড্রয়েড স্ক্রিনে দেখানো যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'const widgets are canonicalized; Flutter skips rebuilding them during frame passes.',
          bn: 'মান না বদলানো পর্যন্ত বারবার রিবিল্ড না করার জন্য const অপরিহার্য।'
        },
        explanation: {
          en: 'When a parent widget calls setState, Flutter checks if child widgets have changed. Since identical const widgets share the same memory pointer, Flutter skips rebuilding them.',
          bn: 'এর ফলে হাজার হাজার অপ্রয়োজনীয় রিবিল্ড বেঁচে গিয়ে অ্যাপের গতি সর্বোচ্চ থাকে।'
        }
      },
      {
        id: 'quiz-inherited-widget-dependency-propagation',
        kind: 'mcq',
        topic: 'inherited-widget-o1-ancestor-lookup',
        question: {
          en: 'How does "InheritedWidget" efficiently distribute state down the widget tree without manual parameter drilling through every constructor?',
          bn: '"InheritedWidget" কীভাবে প্রতিটি কনস্ট্রাক্টরে প্যারামিটার না পাঠিয়েও উইজেট ট্রিতে দক্ষভাবে ডেটা পৌঁছে দেয়?'
        },
        options: [
          {
            en: 'The Element tree maintains a hash map of inherited ancestor elements, allowing child elements to register dependencies and look up state in O(1) time',
            bn: 'এলিমেন্ট ট্রি ওপরের ইনহেরিটেড এলিমেন্টগুলোর একটি হ্যাশ ম্যাপ সংরক্ষণ করে, ফলে নিচের চাইল্ডগুলো O(1) দ্রুততম সময়ে ডেটা খুঁজে নিতে ও সাবস্ক্রাইব করতে পারে'
          },
          {
            en: 'It broadcasts state changes over Bluetooth to local devices',
            bn: 'এটি ব্লুটুথের মাধ্যমে আশেপাশের ডিভাইসে স্টেট সম্প্রচার করে'
          },
          {
            en: 'It saves all state variables in an SQL table on the flash drive',
            bn: 'এটি ফ্ল্যাশ ড্রাইভের একটি এসকিউএল টেবিলে সমস্ত ভ্যারিয়েবল সংরক্ষণ করে'
          },
          {
            en: 'InheritedWidget was deprecated in favor of global variables in 2021',
            bn: '২০২১ সালে InheritedWidget বাদ দিয়ে গ্লোবাল ভ্যারিয়েবল আনা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'InheritedWidget provides O(1) ancestor state lookup via the Element tree.',
          bn: 'এক লাইনেই থিম বা ভাষা পরিবর্তনের ডেটা পুরো স্ক্রিনে পৌঁছে দেওয়ার মূল চাবিকাঠি।'
        },
        explanation: {
          en: 'Framework features like Theme.of(context) and Provider rely on InheritedWidget. The Element tree provides instant O(1) lookup and automatically notifies dependent widgets on updates.',
          bn: 'এর মাধ্যমে কোনো প্যারামিটার ড্রিলিং ছাড়াই পুরো ট্রিতে অনায়াসে স্টেট শেয়ার করা যায়।'
        }
      },
      {
        id: 'quiz-value-keys-state-preservation-lists',
        kind: 'mcq',
        topic: 'value-keys-in-scrollable-lists-reordering',
        question: {
          en: 'Why are "ValueKey"s strictly required when reordering or deleting items inside a dynamic list of stateful widgets in Flutter?',
          bn: 'Flutter-এ স্টেটফুল উইজেটের পরিবর্তনশীল তালিকায় উপাদান ডিলিট বা রি-অর্ডার করার সময় কেন "ValueKey" থাকা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'Without keys, Flutter matches elements positionally by runtimeType alone, causing persistent state (like checkboxes or scroll offsets) to attach to the wrong swapped item',
            bn: 'কি না থাকলে Flutter কেবল পজিশন ও টাইপ মেলায়, যার ফলে চেকবাক্স বা স্ক্রল স্টেটের মতো তথ্যগুলো ভুল উপাদানের সাথে যুক্ত হয়ে মারাত্মক বাগে রূপ নেয়'
          },
          {
            en: 'Because lists without keys crash the device CPU immediately',
            bn: 'কারণ কি ছাড়া লিস্ট ডিভাইসের সিপিইউ তাৎক্ষণিকভাবে ক্র্যাশ করায়'
          },
          {
            en: 'Because keys convert all list items into 32-bit floating point numbers',
            bn: 'কারণ কি সমস্ত উপাদানকে ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'ValueKey is only permitted in Flutter Web applications',
            bn: 'ValueKey কেবল Flutter ওয়েব অ্যাপ্লিকেশনে অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Keys preserve correct State-to-Widget association when lists are reordered.',
          bn: 'উপাদান ওলটপালট হলেও সঠিক ডেটা যাতে সঠিক বক্সেই থাকে, তা নিশ্চিত করে কি।'
        },
        explanation: {
          en: 'When elements move positionally, their runtimeTypes still match. Keys give widgets unique identity, forcing Flutter to move the persistent Element and its State to match the reordered item.',
          bn: 'ফলে আইটেম সাজানোর পরেও চেক করা চেকবাক্স বা ভেতরের টেক্সট নিখুঁতভাবে বহাল থাকে।'
        }
      },
      {
        id: 'quiz-repaint-boundary-raster-caching',
        kind: 'mcq',
        topic: 'repaint-boundary-gpu-raster-cache',
        question: {
          en: 'What optimization does wrapping an animated or complex custom painter inside a "RepaintBoundary" provide?',
          bn: 'একটি অ্যানিমেটেড বা জটিল কাস্টম পেইন্টারকে "RepaintBoundary"-এর ভেতর মুড়ে দিলে কোন অপটিমাইজেশন পাওয়া যায়?'
        },
        options: [
          {
            en: 'It isolates painting into a separate GPU layer, preventing the repaint of the animated subtree from forcing surrounding static widgets to repaint',
            bn: 'এটি ছবি আঁকার কাজকে একটি পৃথক জিপিইউ স্তরে আলাদা করে রাখে, ফলে ভেতরের অ্যানিমেশনের কারণে বাইরের স্থির উইজেটগুলোর অপ্রয়োজনীয় রিবিল্ড ও রি-পেইন্ট বন্ধ হয়'
          },
          {
            en: 'It reduces screen brightness by 50 percent during animations',
            bn: 'অ্যানিমেশন চলাকালে এটি স্ক্রিনের উজ্জ্বলতা ৫০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It converts all vector shapes into JPEG files on disk',
            bn: 'এটি সমস্ত ভেক্টর নকশাকে ডিস্কে জেপেগ ফাইলে রূপান্তর করে'
          },
          {
            en: 'RepaintBoundary was deprecated in Flutter 3.10',
            bn: 'Flutter ৩.১০ সংস্করণে RepaintBoundary বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'RepaintBoundary isolates repaints onto an independent GPU layer.',
          bn: 'শুধু অ্যানিমেশনের অংশটুকু আঁকতে এবং বাকি পুরো স্ক্রিন শান্ত রাখতে এটি ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Repaint boundaries create a separate display list. When the subtree repaints, the framework composites the cached parent texture, saving millions of GPU rasterization cycles.',
          bn: 'এর মাধ্যমে ভারী অ্যানিমেশনের মধ্যেও প্রসেসরের ওপর চাপ কমে এবং মসৃণ ৬০ ফ্রেম পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'states-and-the-stream',
    title: {
      en: 'Reactive Streams & StreamControllers',
      bn: 'রিঅ্যাক্টিভ স্ট্রিম এবং StreamControllers'
    }
  }
};
