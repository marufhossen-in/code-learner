import type { Lesson } from '../../../lib/types';

export const FunctionsDeferAndMethodsLesson: Lesson = {
  slug: 'functions-defer-and-methods',
  tech: 'go',
  title: { en: 'Functions, defer and Methods', bn: 'function, defer আর method' },
  summary: { en: 'Multiple return values, named results, variadic arguments, first-class functions, defer for cleanup, and methods with a receiver instead of this.', bn: 'একাধিক ফেরত, নাম- দেওয়া result, variadic argument, first-class function, পরিষ্কারের জন্য defer, আর this-এর বদলে receiver-ওয়ালা method।' },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Functions, defer and Methods', bn: 'WHAT — function, defer আর method' },
    },
    {
      type: 'para',
      text: { en: 'You have a file to open and close, and five places in the program that need it. The closing is what people forget, in the error path, ten lines after the opening. Go\'s answer is to put the cleanup next to the thing it cleans — defer — and to attach functions to types, which is how a method is born.', bn: 'একটি file খুলতে হবে আর বন্ধ করতে হবে, আর প্রোগ্রামের পাঁচ জায়গায় এটি দরকার। বন্ধ করার লাইনটাই মানুষ ভুলে যায় — error-এর পথে, খোলার দশ লাইন পরে। Go-র জবাব: পরিচ্ছন্নতার কাজটি ঐ জিনিসের পাশেই রাখুন, defer দিয়ে, আর type-এর সাথে function যুক্ত করা — এভাবেই method জন্মায়।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Go has no exceptions, so the second return value is the error channel for every fallible operation.',
          bn: 'Go-তে exception নেই, তাই ভুল হওয়া-যায় প্রত্যেক কাজের দ্বিতীয় ফেরতটাই error-এর পথ।',
        },
        {
          en: 'defer is how Go closes files, unlocks mutexes and recovers — placed next to the resource it guards, executed at return.',
          bn: 'defer দিয়েই file বন্ধ হয়, mutex খোলে, recover হয় — রিসোর্সের পাশেই লেখা, চলানো return-এর মুখে।',
        },
        {
          en: 'A method is just a function with a receiver, so any type you define gets behaviour without a class.',
          bn: 'method হলো receiver-ওয়ালা function, তাই নতুন type-এর আচরণ বানাতে class লাগে না।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'funcs.go',
      code: `func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("divide by zero")
	}
	return a / b, nil
}

func sum(xs ...int) int {            // variadic: xs is a []int
	total := 0
	for _, x := range xs {
		total += x
	}
	return total
}

type Stack []int

func (s *Stack) Push(v int) {        // pointer receiver: mutates
	*s = append(*s, v)
}

func (s Stack) Peek() (int, bool) {    // value receiver: reads a copy
	if len(s) == 0 {
		return 0, false
	}
	return s[len(s)-1], true
}

func withFile(path string, use func(*os.File) error) (err error) {
	f, err := os.Open(path)
	if err != nil {
		return err
	}
	defer func() { err = errors.Join(err, f.Close()) }()  // runs at return
	return use(f)
}`,
      caption: { en: 'Error as a value, a receiver that copies (Peek) beside one that mutates (Push), and a defer that closes the file even on the early return.', bn: 'মান হিসেবে error, কপি-করা receiver (Peek) আর বদলায়-যাওয়া receiver (Push) পাশাপাশি, আর defer ফাইল বন্ধ করে — আগে-ফেরা return হলেও।' },
    },
    {
      type: 'table',
      head: [
        { en: 'signature', bn: 'signature' },
        { en: 'meaning', bn: 'অর্থ' },
      ],
      rows: [
        [
          { en: 'func f() (int, error)', bn: 'func f() (int, error)' },
          {
            en: 'the usual Go result: a value plus a possible failure',
            bn: 'সাধারণ ফল: একটি মান, সাথে ব্যর্থতার সম্ভাবনা',
          },
        ],
        [
          { en: 'func f() (n int, err error)', bn: 'func f() (n int, err error)' },
          {
            en: 'named results: pre-declared variables, bare return uses them',
            bn: 'নাম-দেওয়া result: আগে-থাকা চলক, খালি return সেগুলোই ফেরত দেয়',
          },
        ],
        [
          { en: 'func f(xs ...int)', bn: 'func f(xs ...int)' },
          {
            en: 'variadic; at the call site pass a slice as f(s...) ',
            bn: 'variadic; ডাকার জায়গায় slice পাঠান f(s...)',
          },
        ],
        [
          { en: 'func (t T) M()', bn: 'func (t T) M()' },
          { en: 'method on a copy of T — fine for reading small values', bn: 'T-র কপির উপর method — ছোট মান পড়তে ঠিক' },
        ],
        [
          { en: 'func (t *T) M()', bn: 'func (t *T) M()' },
          {
            en: 'method on the address: mutation visible, no copy cost',
            bn: 'ঠিকানার উপর method: বদল দেখা যায়, কপি-খরচ নেই',
          },
        ],
        [
          { en: 'var f func(int) int', bn: 'var f func(int) int' },
          {
            en: 'a function value: zero is nil, assign, pass, return freely',
            bn: 'function মান: শূন্য nil, দাও-নও-ফেরত দাও যা খুশি',
          },
        ],
      ],
      caption: { en: 'Named results exist so defer can rewrite the outgoing error — that is the honest reason, not brevity.', bn: 'নাম-দেওয়া result থাকে যাতে defer বেরোনো error বদলে দিতে পারে — এটাই আসল কারণ, সংক্ষিপ্ততা নয়।' },
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
          title: { en: '1. Return the failure', bn: '১. ব্যর্থতা ফেরত দিন' },
          text: { en: 'func …(T, error); the caller decides whether to log, retry or wrap.', bn: 'func …(T, error); log করব, আবার চেষ্টা করব না wrap করব — ঠিক করে caller।' },
        },
        {
          title: { en: '2. Defer beside the resource', bn: '২. রিসোর্সের পাশে defer' },
          text: { en: 'Open then immediately defer Close. Ordering is last-in-first-out, so unlocks precede closes.', bn: 'খোলার সঙ্গে-সঙ্গে defer Close। ক্রম last-in-first-out, তাই unlock আগে, close পরে।' },
        },
        {
          title: { en: '3. Choose the receiver by mutation', bn: '৩. বদলায় কিনা দেখে receiver' },
          text: { en: 'Pointer if it writes or if the struct is big; value if it is a small read-only view.', bn: 'লিখে বা বড় struct হলে pointer; ছোট শুধু-পড়া view হলে value।' },
        },
        {
          title: { en: '4. Accept a function to inject behaviour', bn: '৪. আচরণ ঢোকাতে function নিন' },
          text: { en: 'func WithFile(path, use func(*os.File) error) — no interface needed for one hook.', bn: 'func WithFile(path, use func(*os.File) error) — একটি hook-এর জন্য interface লাগে না।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Functions, defer and Methods: the moving parts', bn: 'function, defer আর method: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Functions, defer and Methods">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Return the failure</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">func …(T, error); the caller decides whether</text>
<text x="352" y="79" font-size="11" fill="currentColor">to log, retry or wrap.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Defer beside the resource</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Open then immediately defer Close. Ordering is</text>
<text x="352" y="151" font-size="11" fill="currentColor">last-in-first-out, so unlocks precede closes.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Choose the receiver by mutation</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Pointer if it writes or if the struct is big;</text>
<text x="352" y="223" font-size="11" fill="currentColor">value if it is a small read-only view.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Accept a function to inject behav…</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">func WithFile(path, use func(*os.File) error)</text>
<text x="352" y="295" font-size="11" fill="currentColor">— no interface needed for one hook.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">No exceptions, no this: results, receivers and defer carry the whole design.</text>
</svg>`,
      caption: { en: 'No exceptions, no this: results, receivers and defer carry the whole design.', bn: 'exception নেই, this নেই — পুরো নকশাটা বহন করে results, receivers আর defer।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'No exceptions, no this: results, receivers and defer carry the whole design.', bn: 'exception নেই, this নেই — পুরো নকশাটা বহন করে results, receivers আর defer।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Arguments in a defer are evaluated at the defer line', bn: 'defer-এর argument defer-লাইনেই মূল্যায়িত' },
      text: { en: 'defer f.Close() copies the current value of f. If you reassign f afterwards, the deferred call still uses the old one. Also defer inside a loop piles up until the function returns.', bn: 'defer f.Close() লিখলে f-এর তখনকার মান কপি হয়। পরে f বদলালেও defer পুরোনোটাই ব্যবহার করে। আর loop-এর ভিতরে defer ধীরে ধীরে জমতে থাকে, function না-ফেরা পর্যন্ত।' },
    },
  ],
  exercises: [
    {
      id: 'functions-defer-and-methods-ex1',
      kind: 'mcq',
      topic: 'go: Functions, defer and Methods',
      question: { en: 'Why is Push declared with *Stack and Peek with Stack?', bn: 'Push কেন *Stack দিয়ে, Peek কেন Stack দিয়ে?' },
      options: [
        { en: 'Push is faster by luck', bn: 'Push দৈবক্রমে দ্রুত' },
        {
          en: 'Push must mutate the caller’s slice header; Peek only reads',
          bn: 'Push বদলায়, তাই caller-এর slice header ধরতে হয়; Peek শুধু পড়ে',
        },
        {
          en: 'Go requires pointers for methods that return values',
          bn: 'যে method value ফেরত দেয়, তার জন্য pointer বাধ্যতামূলক',
        },
        { en: 'Peek is private', bn: 'Peek private, তাই নয়' },
      ],
      answer: 1,
      hint: { en: 'Who has to see the append?', bn: 'append কে দেখতে পাবে?' },
      explanation: { en: 'append may produce a new slice header; only a pointer receiver can write it back into the caller’s value. A read-only method can keep the cheaper value receiver.', bn: 'append নতুন slice header বানাতে পারে; সেটি caller-এর মান-এ লিখে দিতে পারে শুধু pointer receiver। শুধু-পড়া method সস্তা value receiver-ই রাখতে পারে।' },
    },
    {
      id: 'functions-defer-and-methods-ex2',
      kind: 'mcq',
      topic: 'go: Functions, defer and Methods',
      question: { en: 'What does this print? (after the deferred pair)', bn: 'কী ছাপে? (defer-জোড়ার পর)' },
      code: `func f() (x int) {
	defer func() { x++ }()
	defer func() { x += 10 }()
	return 1
}
fmt.Print(f())`,
      options: [
        { en: '11', bn: '11' },
        { en: '12', bn: '12' },
        { en: '2', bn: '2' },
        { en: '1', bn: '1' },
      ],
      answer: 1,
      hint: { en: 'Last deferred, first run.', bn: 'শেষে defer, আগে চলে।' },
      explanation: { en: 'return 1 sets x; then the two deferred functions run in reverse order: +10 then +1 — 12 in total.', bn: 'return ১ x-কে বসায়; তারপর defer করা ২টি function উল্টো ক্রমে চলে: +১০, তারপর +১ — মোট ১২।' },
    },
    {
      id: 'functions-defer-and-methods-ex3',
      kind: 'fill',
      topic: 'go: Functions, defer and Methods',
      question: { en: 'Write the variadic parameter list that lets sum take any number of ints.', bn: 'variadic parameter তালিকা লিখুন যাতে sum যত খুশি int নিতে পারে।' },
      answer: 'xs ...int',
      accept: [
        'xs ...int',
        '...int',
        '(xs ...int)',
      ],
      hint: { en: 'Three dots before the type.', bn: 'type-এর আগে তিন বিন্দু।' },
      explanation: { en: 'func sum(xs ...int) int — inside, xs behaves like a slice; a caller can spread with sum(vals...).', bn: 'func sum(xs ...int) int — ভিতরে xs slice-এর মতো; caller spread করতে পারে sum(vals...)।' },
    },
  ],
  quiz: {
    id: 'functions-defer-and-methods-quiz',
    title: { en: 'Quiz — Functions, defer and Methods', bn: 'কুইজ — function, defer আর method' },
    questions: [
      {
        id: 'functions-defer-and-methods-q1',
        kind: 'mcq',
        topic: 'go: Functions, defer and Methods',
        question: { en: 'Go signals “expected failure” by…', bn: 'Go “প্রত্যাশিত ব্যর্থতা” জানায় কীভাবে?' },
        options: [
          { en: 'throwing an exception', bn: 'exception throw করে' },
          { en: 'returning an error value', bn: 'error value ফেরত দেয়' },
          { en: 'a panic on the stack', bn: 'stack-এ panic তোলে' },
          { en: 'setting a global errno', bn: 'একটি global errno বসায়' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'error is an ordinary interface value returned alongside the result. panic is reserved for programmer mistakes and unrecoverable states.', bn: 'error হলো সাধারণ interface মান, ফলের পাশেই ফেরত আসে। panic থেকে রাখা হয়েছে প্রোগ্রামারের ভুল আর অ-উদ্ধারযোগ্য অবস্থার জন্য।' },
      },
      {
        id: 'functions-defer-and-methods-q2',
        kind: 'mcq',
        topic: 'go: Functions, defer and Methods',
        question: { en: 'When does a deferred call run?', bn: 'defer করা কল কখন চলে?' },
        options: [
          { en: 'Immediately', bn: 'Immediately' },
          {
            en: 'At the enclosing function’s return, LIFO among defers',
            bn: 'যে function-টি defer করেছে সেটি return-এর মুখে, defer-গুলোর মধ্যে LIFO ক্রমে',
          },
          { en: 'At the end of the block that deferred it', bn: 'যে block-ে defer ছিল, সেটি শেষ হলে' },
          { en: 'When the GC runs', bn: 'GC যখন চলে, তখন' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'defers are attached to the function, not the block, and run last-in-first-out just before the return completes — which is why a defer in a loop runs only when the loop’s function exits.', bn: 'defer function-এর সাথে যুক্ত, block-এর সাথে নয়, return শেষ হওয়ার ঠিক আগে LIFO ক্রমে চলে — তাই loop-এর defer সেই function থেকে ফেরার সময়ই চলে।' },
      },
      {
        id: 'functions-defer-and-methods-q3',
        kind: 'mcq',
        topic: 'go: Functions, defer and Methods',
        question: { en: 'A bare return inside (n int, err error) returns…', bn: '(n int, err error) থাকা ফাংশনে খালি return কী ফেরত দেয়?' },
        options: [
          { en: 'nil, nil', bn: 'nil, nil' },
          { en: 'the current values of n and err', bn: 'n আর err-এর সেই মুহূর্তের মান' },
          { en: 'an error', bn: 'an error' },
          { en: 'zero values always', bn: 'সবসময় zero value' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Named results are variables in scope; return without arguments returns whatever they hold at that moment — that is exactly what makes “defer rewrites the error” possible.', bn: 'নাম-দেওয়া result স্কোপে থাকা চলক; argument-ছাড়া return সেই মুহূর্তের মানই ফেরত দেয় — এতেই “defer error বদলে দেয়” সম্ভব।' },
      },
      {
        id: 'functions-defer-and-methods-q4',
        kind: 'mcq',
        topic: 'go: Functions, defer and Methods',
        question: { en: 'Which is a valid method on type Celsius float64?', bn: 'Celsius float64 type-এর বৈধ method কোনটি?' },
        options: [
          {
            en: 'func (c Celsius) F() float64 { return float64(c)*9/5 + 32 }',
            bn: 'func (c Celsius) F() float64 { return float64(c)*9/5 + 32 }',
          },
          { en: 'func (c float64) F() float64', bn: 'func (c float64) F() float64' },
          { en: 'func F(c Celsius) float64 is a method too', bn: 'func F(c Celsius) float64 is a method too' },
          { en: 'methods need a class', bn: 'method-এর জন্য class দরকার' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'The receiver must name your defined type, not its underlying type. The third form is a plain function, not a method.', bn: 'receiver-তে আপনার ঘোষণা-করা type-এর নাম দরকার, underlying type-এর নয়। তৃতীয় রূপটি method নয়, সাধারণ function।' },
      },
    ],
  },
  nextLesson: {
    slug: 'slices-arrays-and-strings',
    tech: 'go',
    title: { en: 'Slices, Arrays and Strings', bn: 'slice, array আর string' },
  },
};
