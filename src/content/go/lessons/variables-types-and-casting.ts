import type { Lesson } from '../../../lib/types';

export const VariablesTypesAndCastingLesson: Lesson = {
  slug: 'variables-types-and-casting',
  tech: 'go',
  title: { en: 'Variables, Types and Casting', bn: 'variable, type আর casting' },
  summary: { en: 'var vs :=, sized integers, strings that are byte slices you cannot index into by character, and conversions that are always explicit.', bn: 'var বনাম :=, মাপ-ঠিক করা integer, string যেটা byte-এর slice — অক্ষর ধরে index করা যায় না, আর conversion সবসময় খোলাখুলি।' },
  minutes: 11,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Variables, Types and Casting', bn: 'WHAT — variable, type আর casting' },
    },
    {
      type: 'para',
      text: { en: 'Declare with var when you want a zero value and a type of your own choosing; use := inside functions to infer. Types are written after the name — name first, type second, read left to right — which makes even pointer and slice declarations legible: var xs []int, var p *int. The numeric types are honest about size: int8…int64, uint…, float32/float64, plus byte (alias of uint8) and rune (alias of int32, one Unicode code point). Converting is a function call: float64(n) / int(f) — and casting from float to int truncates toward zero, it does not round.', bn: 'নিজে type বাছতে চাইলে আর শূন্য-মান লাগলে var দিয়ে ঘোষণা করুন; function-এর ভিতরে inference-এর জন্য :=। type লেখা হয় নামের পরে — আগে নাম, পরে type, বাঁ থেকে ডানে পড়া যায় — তাই pointer/slice-এর ঘোষণাও পরিষ্কার: var xs []int, var p *int। সংখ্যার type সাইজ নিয়ে সৎ: int8…int64, uint…, float32/float64, সাথে byte (uint8-এর alias) ও rune (int32-এর alias, একটি Unicode code point)। রূপ একটা function call: float64(n) / int(f) — আর float থেকে int-এ নামলে শূন্যের দিকে কেটে যায়, গোল করা হয় না।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'No implicit widening: int32 + int64 is a compile error, because the hidden conversion is where bugs live.',
          bn: 'গোপন widening নেই: int32 + int64 compile error, কারণ লুকানো conversion-এই bug-এর ঘর।',
        },
        {
          en: 'int is 64 bits on a 64-bit machine. Use it for counting, and sized types when the layout is on the wire or on disk.',
          bn: '64-বিট মেশিনে int মানেই 64 বিট। গোনা-গামায় int নিন, wire বা disk-এর layout হলে মাপ-ঠিক করা type নিন।',
        },
        {
          en: 'len(s) counts bytes, not characters — "হ্যালো" is 11 bytes, 5 runes.',
          bn: 'len(s) byte গনে, অক্ষর নয় — "হ্যালো" ১১টি byte, ৫টি rune।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'types.go',
      code: `var count int              // 0, and on a 64-bit machine it is 64 bits wide
var ratio = 3.5            // float64 inferred
big := int64(1) << 40      // 1099511627776; the cast must come first
flag := true               // bool
name := "Bengali"          // string: a read-only slice of bytes
initial := name[0]         // byte 'B' — index gives BYTES

const (                    // iota makes an enum: 0,1,2
	StatusNew iota
	StatusActive
	StatusClosed
)

sum := count + int(len(name))   // len returns int; no implicit conversion
truncated := int(7.9)           // 7, not 8
_ = sum; _ = truncated; _ = big; _ = flag; _ = initial
for i, r := range name {        // range decodes UTF-8: r is a rune
	fmt.Printf("%d:%c ", i, r)
}`,
      caption: { en: 'The last line is the trap: indexing a string gives a byte, ranging it gives a rune. In Bengali text the two disagree immediately.', bn: 'শেষ লাইনটিই ফাঁদ: string-এ index করলে byte পাওয়া যায়, range করলে rune। বাংলা লেখায় দুটো প্রথম অক্ষর থেকেই আলাদা।' },
    },
    {
      type: 'compare',
      title: { en: 'var versus :=', bn: 'var বনাম :=' },
      left: {
        title: { en: 'var name Type = value', bn: 'var name Type = value' },
        points: [
          { en: 'Allowed at package level (globals).', bn: 'package স্তরে (global) চলে।' },
          { en: 'Type is written by you, so int8 stays int8.', bn: 'type আপনি লেখেন, তাই int8 থেকেই থাকে।' },
          { en: 'var x int compiles and holds 0.', bn: 'var x int compile হয়, ০ ধরে রাখে।' },
        ],
      },
      right: {
        title: { en: 'name := value', bn: 'name := value' },
        points: [
          { en: 'Inside functions only; illegal at package level.', bn: 'শুধু function-এর ভিতরে; package স্তরে অবৈধ।' },
          { en: 'Inferred: := 3 is int, not int32.', bn: 'নির্ধারিত: := 3 মানে int, int32 নয়।' },
          {
            en: 'Must introduce a new variable; x := x on a line is a compile error.',
            bn: 'নতুন variable আনতেই হবে; x := x লাইনে compile error।',
          },
        ],
      },
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
          title: { en: '1. Pick a type on purpose', bn: '১. type সচেতনভাবে বাছুন' },
          text: { en: 'int for counts, float64 for measurement, string for text, []byte for wire bytes.', bn: 'গুনে int, মেপে float64, লেখায় string, wire byte-এ []byte।' },
        },
        {
          title: { en: '2. Declare, then assign', bn: '২. আগে ঘোষণা, পরে মান' },
          text: { en: 'var x int is enough when the zero value is already the right answer.', bn: 'শূন্য-মানই সঠিক উত্তর হলে var x int-ই যথেষ্ট।' },
        },
        {
          title: { en: '3. Convert at the edge', bn: '৩. প্রান্তে রূপান্তর' },
          text: { en: 'Do int64(a)+int64(b) rather than mixing widths and hoping for the best.', bn: 'মিশিয়ে কামনা নয়, int64(a)+int64(b) লিখুন।' },
        },
        {
          title: { en: '4. Use strconv for text', bn: '৪. লেখায় strconv' },
          text: { en: 'strconv.Atoi / strconv.FormatInt — number ↔ string is not casting, it is parsing.', bn: 'strconv.Atoi / strconv.FormatInt — সংখ্যা ↔ লেখা casting নয়, parsing।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Variables, Types and Casting: the moving parts', bn: 'variable, type আর casting: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Variables, Types and Casting">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Pick a type on purpose</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">int for counts, float64 for measurement,</text>
<text x="352" y="79" font-size="11" fill="currentColor">string for text, []byte for wire bytes.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Declare, then assign</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">var x int is enough when the zero value is</text>
<text x="352" y="151" font-size="11" fill="currentColor">already the right answer.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Convert at the edge</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Do int64(a)+int64(b) rather than mixing widths</text>
<text x="352" y="223" font-size="11" fill="currentColor">and hoping for the best.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Use strconv for text</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">strconv.Atoi / strconv.FormatInt — number ↔</text>
<text x="352" y="295" font-size="11" fill="currentColor">string is not casting, it is parsing.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Read a declaration right to left: var p *[]int is “p is a pointer to a slice of ints”.</text>
</svg>`,
      caption: { en: 'Read a declaration right to left: var p *[]int is “p is a pointer to a slice of ints”.', bn: 'declaration ডান দিক থেকে বাঁয়ে পড়ুন: var p *[]int মানে “p হলো int-এর slice-এর pointer”。' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Read a declaration right to left: var p *[]int is “p is a pointer to a slice of ints”.', bn: 'declaration ডান দিক থেকে বাঁয়ে পড়ুন: var p *[]int মানে “p হলো int-এর slice-এর pointer”。' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'len(s) as “characters”', bn: 'len(s)-কে “অক্ষর” বলা' },
      text: { en: 'For "হ্যালো" len is 11 because each Bengali letter is three UTF-8 bytes. Use []rune(s), utf8.RuneCountInString(s), or range.', bn: '"হ্যালো"-তে len ১১, কারণ প্রতিটি বাংলা অক্ষর ৩টি UTF-8 byte। []rune(s), utf8.RuneCountInString(s) বা range ব্যবহার করুন।' },
    },
  ],
  exercises: [
    {
      id: 'variables-types-and-casting-ex1',
      kind: 'mcq',
      topic: 'go: Variables, Types and Casting',
      question: { en: 'Which line compiles?', bn: 'কোন লাইনটি compile হয়?' },
      options: [
        { en: 'var a int32 = 1; var b int64 = a', bn: 'var a int32 = 1; var b int64 = a' },
        { en: 'var a int32 = 1; var b int64 = int64(a)', bn: 'var a int32 = 1; var b int64 = int64(a)' },
        { en: 'var a int32 = 1; b := a + int64(2)', bn: 'var a int32 = 1; b := a + int64(2)' },
        { en: 'var a, b int32, int64 = 1, 1', bn: 'var a, b int32, int64 = 1, 1' },
      ],
      answer: 1,
      hint: { en: 'Conversions are never implicit.', bn: 'conversion কখনও গোপন হয় না।' },
      explanation: { en: 'Go requires the explicit conversion int64(a). The other three mix widths without saying so, which the compiler rejects.', bn: 'Go স্পষ্ট conversion int64(a) চায়। বাকি তিনটিতে width মিশিয়ে আছে, তাই compiler নামিয়ে দেয়।' },
    },
    {
      id: 'variables-types-and-casting-ex2',
      kind: 'mcq',
      topic: 'go: Variables, Types and Casting',
      question: { en: 'What does int(−2.7) evaluate to?', bn: 'int(−2.7) কী হয়?' },
      options: [
        { en: '-3', bn: '-3' },
        { en: '-2', bn: '-2' },
        { en: '2.7 rounded up', bn: '2.7 rounded up' },
        { en: 'a compile error', bn: 'compile error — লাইনটি compile-ই হবে না' },
      ],
      answer: 1,
      hint: { en: 'Which way does the cut go?', bn: 'কেটে কোন দিকে যায়?' },
      explanation: { en: 'Conversion from a floating type to an integer truncates toward zero, so -2.7 becomes -2 and 2.7 becomes 2.', bn: 'float থেকে integer-এ নামলে শূন্যের দিকে কাটে, তাই -2.7 হয় -2, আর 2.7 হয় 2।' },
    },
    {
      id: 'variables-types-and-casting-ex3',
      kind: 'fill',
      topic: 'go: Variables, Types and Casting',
      question: { en: 'Write the expression that gives the number of characters in s, not bytes.', bn: 's-এ অক্ষরের সংখ্যা দেওয়ায় expression লিখুন, byte-এর নয়।' },
      answer: 'utf8.RuneCountInString(s)',
      accept: [
        'utf8.RuneCountInString(s)',
        'len([]rune(s))',
      ],
      hint: { en: 'Two answers are idiomatic.', bn: 'দুটোই চলে।' },
      explanation: { en: 'Either convert to []rune and take len, or call utf8.RuneCountInString; both count code points instead of bytes.', bn: '[]rune-এ বদলে len নিন, অথবা utf8.RuneCountInString ধরুন; দুটোই code point গনে, byte নয়।' },
    },
  ],
  quiz: {
    id: 'variables-types-and-casting-quiz',
    title: { en: 'Quiz — Variables, Types and Casting', bn: 'কুইজ — variable, type আর casting' },
    questions: [
      {
        id: 'variables-types-and-casting-q1',
        kind: 'mcq',
        topic: 'go: Variables, Types and Casting',
        question: { en: 'Where in a Go file is x := 5 legal?', bn: 'একটি Go file-এর কোথায় x := 5 বৈধ?' },
        options: [
          { en: 'Anywhere', bn: 'Anywhere' },
          { en: 'Only inside a function body', bn: 'শুধু function body-র ভেতরে' },
          { en: 'Only at package level', bn: 'শুধু package level-এ' },
          { en: 'Only inside a for loop', bn: 'শুধু for loop-এর ভেতরে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Short variable declarations are statement-level sugar; a file-scope declaration must use var (with its explicit type and doc comments).', bn: 'ছোট ঘোষণা statement-স্তরের ছুটো; file স্তরে var দিতেই হয় (স্পষ্ট type আর doc comment-এর জন্য)।' },
      },
      {
        id: 'variables-types-and-casting-q2',
        kind: 'mcq',
        topic: 'go: Variables, Types and Casting',
        question: { en: 'What is a rune in Go?', bn: 'Go-তে rune কী?' },
        options: [
          { en: 'A byte', bn: 'A byte' },
          {
            en: 'An alias for int32 holding one Unicode code point',
            bn: 'int32-এর alias, একটি Unicode code point ধরে রাখে',
          },
          { en: 'A single-character string', bn: 'এক-অক্ষরের string' },
          { en: 'A pointer to a character', bn: 'character-এর pointer' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'type rune = int32. Ranging a string decodes UTF-8 and hands you runes; indexing hands you bytes.', bn: 'type rune = int32। string-এ range করলে UTF-8 decode হয়ে rune আসে; index করলে byte।' },
      },
      {
        id: 'variables-types-and-casting-q3',
        kind: 'mcq',
        topic: 'go: Variables, Types and Casting',
        question: { en: 'iota inside a const block does what?', bn: 'const block-এ iota কী করে?' },
        options: [
          { en: 'Counts bytes', bn: 'Counts bytes' },
          {
            en: 'Starts at 0 and increments per ConstSpec line',
            bn: '০ থেকে শুরু হয়, প্রতি ConstSpec লাইনে এক বেড়ে যায়',
          },
          { en: 'Marks the constant as exported', bn: 'constant-টি exported বলে চিহ্নিত করে' },
          { en: 'Creates an enum type automatically', bn: 'আপনা থেকেই enum type বানিয়ে দেয়' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'iota is the index of the line in the const block; the repeated expression is re-evaluated per line, which is the standard idiom for enumerations. It does not invent a named type — declare one (type State int) if you want one.', bn: 'iota হলো const block-এ লাইনের ক্রম-সংখ্যা; বার-হওয়া expression প্রতি লাইনে বসে, এটাই enum-এর রীতি। নাম-থাকা type বানায় না — চাইলে type State int লিখুন।' },
      },
      {
        id: 'variables-types-and-casting-q4',
        kind: 'mcq',
        topic: 'go: Variables, Types and Casting',
        question: { en: 'strconv.Atoi("42") returns…', bn: 'strconv.Atoi("42") কী ফেরত দেয়?' },
        options: [
          { en: '42', bn: '42' },
          { en: 'an int and an error', bn: 'একটি int আর একটি error' },
          { en: 'a string and an error', bn: 'একটি string আর একটি error' },
          { en: 'a rune slice', bn: 'a rune slice' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Parsing can fail, so every strconv parser returns (value, error). Ignoring the second value is the classic Go bug in input handling.', bn: 'parse ব্যর্থ হতে পারে, তাই strconv-এর সব parser (মান, error) ফেরত দেয়। দ্বিতীয়টি উপেক্ষা করাই input সামলানোর ক্লাসিক Go ভুল।' },
      },
    ],
  },
  nextLesson: {
    slug: 'control-flow-one-loop',
    tech: 'go',
    title: { en: 'Control Flow: One Loop to Rule Them All', bn: 'নিয়ন্ত্রণ: একটাই loop' },
  },
};
