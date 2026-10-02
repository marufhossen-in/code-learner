import type { Lesson } from '../../../lib/types';

export const StructsMapsAndInterfacesLesson: Lesson = {
  slug: 'structs-maps-and-interfaces',
  tech: 'go',
  title: { en: 'Structs, Maps and Interfaces', bn: 'struct, map আর interface' },
  summary: { en: 'Compose behaviour with structs and embedding, look things up with maps and the comma-ok idiom, and let interfaces be satisfied implicitly.', bn: 'struct আর embedding দিয়ে আচরণ গড়ুন, map আর comma-ok দিয়ে খুঁজুন, আর interface যেন নিজে-থেকেই পূরণ হয়।' },
  minutes: 13,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Structs, Maps and Interfaces', bn: 'WHAT — struct, map আর interface' },
    },
    {
      type: 'para',
      text: { en: 'You have a user: a name, an email, an age, and the need to pass all four around as one thing. Go gives you a struct for the bundle, a map for the lookups, and interfaces for the moment two different types must answer the same question. This page is all three, and where each stops.', bn: 'আপনার একজন user আছেন: নাম, email, বয়স, আর চারটিকে একসাথে ঘুরিয়ে দেওয়ার দরকার। Go দেয় struct — গোছাটা বেঁধে রাখতে, map — খুঁজে নিতে, আর interface — যখন দুটি আলাদা ধরনের কাছে একই প্রশ্নের জবাব চাই। এই পাতায় তিনটিই, আর কোথায় কোনটির শেষ।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'There is no class, no inheritance: a struct holds data, methods attach to it, and embedding forwards calls.',
          bn: 'class নেই, inheritance নেই: struct-এ তথ্য, তার সাথে method, আর embedding কল এগিয়ে দেয়।',
        },
        {
          en: 'An interface is satisfied by shape, not by declaration — nothing to write on the type, so packages stay decoupled.',
          bn: 'interface গড়ন দিয়ে পূরণ হয়, ঘোষণা দিয়ে নয় — type-এ লিখতে কিছু নেই, তাই package আলাদা থাকে।',
        },
        {
          en: 'A map value of nil reads safely but cannot be written; that is why make, not var, is how you start a map.',
          bn: 'nil map পড়তে নিরাপদ, লিখতে নয়; তাই var নয়, make দিয়ে map শুরু করুন।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'shapes.go',
      code: `type Shape interface { Area() float64 }

type Rect struct { W, H float64 }
func (r Rect) Area() float64 { return r.W * r.H }

type Circle struct{ R float64 }
func (c Circle) Area() float64 { return math.Pi * c.R * c.R }

type Labelled struct {
	Shape            // embedding: Labelled gains Area through the field
	Text string
}

func Total(shapes []Shape) float64 {   // any value with Area() fits
	sum := 0.0
	for _, s := range shapes {
		sum += s.Area()
	}
	return sum
}

func CountWords(text string) map[string]int {
	counts := map[string]int{}            // make-free literal is fine
	for _, w := range strings.Fields(text) {
		counts[w]++                        // missing key starts at zero
	}
	return counts
}

n, ok := counts["missing"]              // comma-ok: absent, not zero`,
      caption: { en: 'Total does not know Rect or Circle; it knows one method. That is the whole trick behind Go’s standard library.', bn: 'Total Rect বা Circle চেনে না; একটি method চেনে। Go-র standard library-র পেছনের কৌশলটুকু এটাই।' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'A struct is a value: copying it copies fields. Embedding a sync.Mutex makes the copy unsafe — use a pointer.',
          bn: 'struct একটি মান: কপি করলে field কপি হয়। sync.Mutex embed করলে কপি অ-নিরাপদ — pointer নিন।',
        },
        {
          en: 'Unexported fields are invisible to encoding/json; use struct tags (json:"name") to name keys.',
          bn: 'Unexported field encoding/json-এর চোখে পড়ে না; key-এর নাম দিয়েতে struct tag (json:"name") ব্যবহার করুন।',
        },
        {
          en: 'map iteration order is deliberately randomised — never rely on it; collect keys and sort.',
          bn: 'map-এর চলার ক্রম ইচ্ছা করে এলোমেলো — ভরসা করবেন না; key একত্র করে sort করুন।',
        },
        {
          en: 'deleting from a map while ranging is safe in Go; the entry may or may not be visited.',
          bn: 'range চলকালে map থেকে মোছা নিরাপদ; উপাদান দেখা যাবে কি না তা নিশ্চিত নয়।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'mechanics',
      text: { en: 'HOW it runs — stage by stage', bn: 'কীভাবে চলে — ধাপে ধাপে' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: '1. Name the data', bn: '১. তথ্যে নাম দিন' },
          text: { en: 'type Rect struct { W, H float64 } — layout first, behaviour after.', bn: 'type Rect struct { W, H float64 } — আগে গড়ন, তারপর আচরণ।' },
        },
        {
          title: { en: '2. Attach methods', bn: '২. method জোড়া দিন' },
          text: { en: 'Value receiver to read, pointer receiver to write. Keep one kind per type.', bn: 'পড়তে value, লিখতে pointer receiver। এক type-এ একটি রকম রাখুন।' },
        },
        {
          title: { en: '3. Complain about shape, not type', bn: '৩. type নয়, গড়ন চান' },
          text: { en: 'func Total(shapes []Shape) — accept the smallest interface you use.', bn: 'func Total(shapes []Shape) — যেটুকু ব্যবহার করবেন ততটুকুই interface নিন।' },
        },
        {
          title: { en: '4. Look up with comma-ok', bn: '৪. comma-ok দিয়ে খুঁজুন' },
          text: { en: 'v, ok := m[k] distinguishes “absent” from “present but zero”.', bn: 'v, ok := m[k] বলে দেয় “নেই” না “আছে, মান শূন্য”।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Structs, Maps and Interfaces: the moving parts', bn: 'struct, map আর interface: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Structs, Maps and Interfaces">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Name the data</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">type Rect struct { W, H float64 } — layout</text>
<text x="352" y="79" font-size="11" fill="currentColor">first, behaviour after.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Attach methods</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Value receiver to read, pointer receiver to</text>
<text x="352" y="151" font-size="11" fill="currentColor">write. Keep one kind per type.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Complain about shape, not type</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">func Total(shapes []Shape) — accept the</text>
<text x="352" y="223" font-size="11" fill="currentColor">smallest interface you use.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Look up with comma-ok</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">v, ok := m[k] distinguishes “absent” from</text>
<text x="352" y="295" font-size="11" fill="currentColor">“present but zero”.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Go has no “implements”: you write the methods, the interface is satisfied at compile time.</text>
</svg>`,
      caption: { en: 'Go has no “implements”: you write the methods, the interface is satisfied at compile time.', bn: 'Go-তে “implements” লেখে না: আপনি method গুলো লিখলেই compile-সময়ে interface পূরণ হয়ে যায়।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Go has no “implements”: you write the methods, the interface is satisfied at compile time.', bn: 'Go-তে “implements” লেখে না: আপনি method গুলো লিখলেই compile-সময়ে interface পূরণ হয়ে যায়।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Storing a struct in a map and editing a field', bn: 'map-এ struct রেখে field বদলানো' },
      text: { en: 'm["a"].N++ does not compile, because the map value is not addressable. Read it, change it, write it back — or store *T.', bn: 'm["a"].N++ compile হয় না, কারণ map-এর মান addressable নয়। পড়ে বদলে আবার লিখুন — অথবা *T রাখুন।' },
    },
  ],
  exercises: [
    {
      id: 'structs-maps-and-interfaces-ex1',
      kind: 'mcq',
      topic: 'go: Structs, Maps and Interfaces',
      question: { en: 'Which type satisfies Shape here?', bn: 'এখানে কোন type Shape পূরণ করে?' },
      options: [
        { en: 'only Rect, because it is declared first', bn: 'শুধু Rect, কারণ সেটি আগে declare করা' },
        { en: 'any type with an Area() float64 method', bn: 'any type with an Area() float64 method' },
        { en: 'types that embed the interface name', bn: 'যে type interface-এর নাম embed করে' },
        { en: 'only structs with two fields', bn: 'শুধু দুই-field-ওয়ালা struct' },
      ],
      answer: 1,
      hint: { en: 'Satisfaction is about shape.', bn: 'পূরণ হয় গড়ন দেখে।' },
      explanation: { en: 'Interfaces are implicit: Circle, Rect, or a type from another package, as long as it has that exact method set.', bn: 'interface নিজে-থেকে পূরণ হয়: Circle, Rect, বা অন্য package-এর type — যার হুবহু সেই method সেট আছে।' },
    },
    {
      id: 'structs-maps-and-interfaces-ex2',
      kind: 'mcq',
      topic: 'go: Structs, Maps and Interfaces',
      question: { en: 'What is v after: m := map[string]int{"a": 0}; v := m["z"]?', bn: 'v কত হবে: m := map[string]int{"a": 0}; v := m["z"]?' },
      options: [
        { en: 'panic', bn: 'panic' },
        { en: '0', bn: '0' },
        { en: 'nil', bn: 'nil' },
        { en: '""', bn: '""' },
      ],
      answer: 1,
      hint: { en: 'Zero value rule again.', bn: 'আবার zero value-এর নিয়ম।' },
      explanation: { en: 'A missing key yields the value type’s zero value — 0 — with ok false. The comma-ok form is how you tell that apart from a real stored zero.', bn: 'না-থাকা key মান-এর type-এর zero value দেয় — ০ — সাথে ok false। সত্যিকারের ০ থেকে আলাদা করাই comma-ok।' },
    },
    {
      id: 'structs-maps-and-interfaces-ex3',
      kind: 'fill',
      topic: 'go: Structs, Maps and Interfaces',
      question: { en: 'Write the line that safely reads a value from cfg and tells you whether it was present.', bn: 'cfg থেকে মান নিরাপদে পড়ে আছে কি না জানার লাইনটি লিখুন।' },
      answer: 'v, ok := cfg["key"]',
      accept: [
        'v, ok := cfg["key"]',
        'v, ok := cfg["name"]',
        'value, ok := cfg[key]',
      ],
      hint: { en: 'Two results from one index.', bn: '১টি index থেকে ২টি ফল।' },
      explanation: { en: 'The comma-ok idiom is the standard way; without it you cannot distinguish absent from zero.', bn: 'comma-ok-ই রীতি; না-থাকলে নেই আর শূন্য আলাদা করা যায় না।' },
    },
  ],
  quiz: {
    id: 'structs-maps-and-interfaces-quiz',
    title: { en: 'Quiz — Structs, Maps and Interfaces', bn: 'কুইজ — struct, map আর interface' },
    questions: [
      {
        id: 'structs-maps-and-interfaces-q1',
        kind: 'mcq',
        topic: 'go: Structs, Maps and Interfaces',
        question: { en: 'Embedding a field in a struct does what?', bn: 'struct-এ field embed করলে কী হয়?' },
        options: [
          { en: 'Grants inheritance of implementation state only', bn: 'উত্তরাধিকারে শুধু state-এর ব্যবহার দেয়' },
          {
            en: 'Promotes the embedded type’s methods to the outer type',
            bn: 'embed করা type-এর method গুলো বাইরের type-এ তুলে দেয়',
          },
          { en: 'Creates a copy constructor', bn: 'copy constructor বানিয়ে দেয়' },
          { en: 'Makes the field exported', bn: 'field-টি exported করে দেয়' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'The outer type gets the inner methods as if they were its own; you can override by defining a method with the same name. No base-class state machine, just forwarding.', bn: 'বাইরের type ভেতরের method নিজের মতো পায়; একই নামে method লিখে override করা যায়। base class-এর state নেই, শুধু forwarding।' },
      },
      {
        id: 'structs-maps-and-interfaces-q2',
        kind: 'mcq',
        topic: 'go: Structs, Maps and Interfaces',
        question: { en: 'Why does the zero value of a map panic on write?', bn: 'map-এর zero value লিখতে গেলে panic কেন?' },
        options: [
          { en: 'Maps are read-only until sorted', bn: 'sort না-করা পর্যন্ত map পড়া-মাত্র' },
          { en: 'The header is nil: there is no bucket array yet', bn: 'header-টি nil: এখনও bucket array-ই নেই' },
          { en: 'Go forbids writes in some packages', bn: 'কিছু package-এ Go লেখা বারণ করে' },
          { en: 'Because you used := instead of new', bn: 'Because you used := instead of new' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'A nil map header has no backing hash table; make(map[K]V) allocates it. Reading from nil is defined as the zero value, so only writes crash.', bn: 'nil map header-এ backing hash table নেই; make(map[K]V) সেটি বানায়। পড়া zero value বলেই সংজ্ঞায়িত, তাই লেখাতেই পড়ে।' },
      },
      {
        id: 'structs-maps-and-interfaces-q3',
        kind: 'mcq',
        topic: 'go: Structs, Maps and Interfaces',
        question: { en: 'Range over a map gives…', bn: 'map-এ range করলে কী পাওয়া যায়?' },
        options: [
          { en: 'keys in insertion order', bn: 'যে ক্রমে বসিয়েছি সেই key ক্রমে' },
          { en: 'values sorted', bn: 'মান অনুসারে সাজানো' },
          { en: 'a randomised order each run', bn: 'প্রতিবার চালালে এলোমেলো ক্রম' },
          { en: 'the zero key first', bn: 'আগে zero key' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Go shuffles map iteration on purpose so programs cannot depend on it; sort the keys if you need determinism.', bn: 'Go ইচ্ছা করে map ক্রম এলোমেলো করে, যাতে কেউ ভরসা না-করে; নির্ধারিত চাইলে key sort করুন।' },
      },
      {
        id: 'structs-maps-and-interfaces-q4',
        kind: 'mcq',
        topic: 'go: Structs, Maps and Interfaces',
        question: { en: 'Struct tags look like…', bn: 'struct tag দেখতে কেমন?' },
        options: [
          { en: '// comment lines above the field', bn: 'field-এর উপরে // comment লাইন' },
          {
            en: 'a string literal after the field name: `json:"id"`',
            bn: 'field নামের পরে একটা string literal, যেমন `json:"id"`',
          },
          { en: 'an attribute in Go 2', bn: 'Go ২ এর attribute' },
          { en: 'a tag inside the type name', bn: 'type নামের ভেতরে লেখা tag' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'A raw string in backticks after each field; encoding/json, gorm and most reflection users read them with reflect.StructTag.', bn: 'প্রতি field-এর পরে backtick-এর raw string; encoding/json, gorm আর reflection ব্যবহারকারীরা সেটা reflect.StructTag দিয়ে পড়ে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'errors-and-panics',
    tech: 'go',
    title: { en: 'Errors, Wrapping and Panic', bn: 'error, wrapping আর panic' },
  },
};
