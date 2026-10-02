import type { Lesson } from '../../../lib/types';

export const ErrorsAndPanicsLesson: Lesson = {
  slug: 'errors-and-panics',
  tech: 'go',
  title: { en: 'Errors, Wrapping and Panic', bn: 'error, wrapping আর panic' },
  summary: { en: 'error is an interface, so build your own with Unwrap; check with errors.Is and errors.As; keep panic for bugs.', bn: 'error একটি interface, তাই Unwrap দিয়ে নিজের বানান; errors.Is ও errors.As দিয়ে যাচাই করুন; panic থাকবে শুধু bug-এর জন্য।' },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Errors, Wrapping and Panic', bn: 'WHAT — error, wrapping আর panic' },
    },
    {
      type: 'para',
      text: { en: 'The file is not there. In Go the function does not stop the program and does not silently return nothing; it hands you a second value and says: deal with this. That is the whole design of error handling here — and the one case where it is deliberately abandoned is a panic.', bn: 'file-টি নেই। Go-তে function প্রোগ্রাম থামায় না, চুপ করে শূন্যও ফেরায় না; দ্বিতীয় মানটি হাতে দিয়ে বলে — এটা সামলাও। এখানে error সামলানোর নকশাই এতটুকু — আর কোথায় এই নিয়ম ইচ্ছেকে ভাঙা হয়, সেটিই panic।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Wrapping preserves the chain (“open config: no such file or directory”), so the message tells the caller where it happened.',
          bn: 'wrap করলে শিকর থাকে (“open config: no such file or directory”), তাই বার্তাই বলে দেয় কোথায় হয়েছিল।',
        },
        {
          en: 'Comparison against a sentinel (ErrNotFound) must use errors.Is, because wrapping breaks ==.',
          bn: 'sentinel-এর সাথে (ErrNotFound) তুলনায় errors.Is দরকার, কারণ wrapping == ভেঙে দেয়।',
        },
        {
          en: 'errors.As finds a concrete type anywhere in the chain — that is how you ask “was this a *fs.PathError?”',
          bn: 'errors.As শিকরের যেকোনো জায়গায় concrete type খুঁজে পায় — “এটা *fs.PathError কি না” জানার উপায়।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'errs.go',
      code: `var ErrNotFound = errors.New("not found") // error 404

type StoreError struct {
	Code  int
	Key   string
	Inner error
}

func (e *StoreError) Error() string {
	return fmt.Sprintf("store error %d for %q: %v", e.Code, e.Key, e.Inner)
}

func (e *StoreError) Unwrap() error { return e.Inner } // makes Is/As walk -> returns Inner

func (s *Store) Get(key string) ([]byte, error) {
	v, ok := s.items[key]
	if !ok {
		return nil, fmt.Errorf("get %s: %w", key, ErrNotFound) // returns error
	}
	return v, nil // returns 1 slice, nil error
}

func Load(key string) error {
	_, err := store.Get(key)
	switch {
	case err == nil:
		return nil // returns nil
	case errors.Is(err, ErrNotFound):
		return fmt.Errorf("seed cache retry 1: %w", err) // returns wrapped error
	default:
		var se *StoreError
		if errors.As(err, &se) {
			log.Printf("code %d bad key %s: %v", se.Code, se.Key, se.Inner)
		}
		return err
	}
}`,
      caption: { en: 'Three tools, three jobs: %w builds the chain, errors.Is asks “is this in it”, errors.As pulls a typed error out of it.', bn: 'তিনটি হাতিয়ার, তিনটি কাজ: %w শিকর গড়ে, errors.Is “এতে আছে কি” জিজ্ঞেস করে, errors.As থেকে ধরা-type-এর error বের করে।' },
    },
    {
      type: 'compare',
      title: { en: 'error versus panic', bn: 'error বনাম panic' },
      left: {
        title: { en: 'error: expected, recoverable', bn: 'error: প্রত্যাশিত, সামলানো যায়' },
        points: [
          {
            en: 'File missing, network timeout, bad user input, 404.',
            bn: 'file নেই, network timeout, খারাপ input, 404।',
          },
          {
            en: 'Travels up the stack as a value; the caller decides.',
            bn: 'মান হিসেবে উপরে ওঠে; সিদ্ধান্ত নেয় caller।',
          },
          {
            en: 'Log it, retry it, wrap it, ignore it — all legal.',
            bn: 'log করুন, আবার চেষ্টা করুন, wrap করুন, উপেক্ষা করুন — সবই বৈধ।',
          },
        ],
      },
      right: {
        title: { en: 'panic: a bug, not a condition', bn: 'panic: এটা bug, অবস্থা নয়' },
        points: [
          {
            en: 'Index out of range, nil dereference, impossible state.',
            bn: 'index সীমার বাইরে, nil dereference, অসম্ভব অবস্থা।',
          },
          {
            en: 'Unwinds to the top; deferred calls run on the way up.',
            bn: 'উপরে পর্যন্ত খুলে যায়; পথে defer গুলো চলে।',
          },
          {
            en: 'recover() is for library boundaries (http servers), not for flow control.',
            bn: 'recover() লাইব্রেরির সীমানার জন্য (http server), flow control-এর জন্য নয়।',
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
          title: { en: '1. Wrap with context', bn: '১. প্রসঙ্গ দিয়ে wrap' },
          text: { en: 'fmt.Errorf("op: %w", err) at every layer that adds information.', bn: 'যে স্তরেই তথ্য যোগ হচ্ছে, সেখানে fmt.Errorf("op: %w", err)।' },
        },
        {
          title: { en: '2. Classify with Is/As', bn: '২. Is/As দিয়ে শ্রেণি' },
          text: { en: 'errors.Is for sentinels, errors.As for typed errors; never strings.Contains(err.Error(), …).', bn: 'sentinel-এ errors.Is, type-ওয়ালায় errors.As; strings.Contains(err.Error(), …) কখনও না।' },
        },
        {
          title: { en: '3. Return early', bn: '৩. আগে ফেরত দিন' },
          text: { en: 'One exit per error; the happy path stays at indentation level one.', bn: 'প্রতি error-এ একবারই ফেরত; ভালো পথ থাকে এক নম্বর indentation-এ।' },
        },
        {
          title: { en: '4. Keep main the only reporter', bn: '৪. reporter থাকুক শুধু main' },
          text: { en: 'Libraries return errors; the program decides whether that is a log line or exit code 1.', bn: 'লাইব্রেরি error ফেরত দেয়; log হবে না exit code ১ — ঠিক করে প্রোগ্রাম।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Errors, Wrapping and Panic: the moving parts', bn: 'error, wrapping আর panic: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Errors, Wrapping and Panic">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Wrap with context</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">fmt.Errorf("op: %w", err) at every layer that</text>
<text x="352" y="79" font-size="11" fill="currentColor">adds information.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Classify with Is/As</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">errors.Is for sentinels, errors.As for typed</text>
<text x="352" y="151" font-size="11" fill="currentColor">errors; never strings.Contains(err.Error(), ……</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Return early</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">One exit per error; the happy path stays at</text>
<text x="352" y="223" font-size="11" fill="currentColor">indentation level one.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Keep main the only reporter</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">Libraries return errors; the program decides</text>
<text x="352" y="295" font-size="11" fill="currentColor">whether that is a log line or exit code 1.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">An error value is data. Treat it like data and Go’s lack of exceptions stops feeling like a mis…</text>
</svg>`,
      caption: { en: 'An error value is data. Treat it like data and Go’s lack of exceptions stops feeling like a missing feature.', bn: 'error value সাধারণ data। data-র মতোই ব্যবহার করলে exception নেওয়াটা আর “কমজায়গা” বলে মনে হয় না।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'An error value is data. Treat it like data and Go’s lack of exceptions stops feeling like a missing feature.', bn: 'error value সাধারণ data। data-র মতোই ব্যবহার করলে exception নেওয়াটা আর “কমজায়গা” বলে মনে হয় না।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'if err != nil { return err } losing the operation', bn: 'কোন operation-এর তা হারানো' },
      text: { en: 'Bare returns give you “connection refused” with no idea which call produced it. Wrap at each layer — one sentence of context per hop is the whole cost.', bn: 'খালি return দিলে “connection refused” দেখে বোঝা যায় না কোন কল। প্রতি স্তরে wrap করুন — এক লাইনের প্রসঙ্গই পুরো খরচ।' },
    },
  ],
  exercises: [
    {
      id: 'errors-and-panics-ex1',
      kind: 'mcq',
      topic: 'go: Errors, Wrapping and Panic',
      question: { en: 'Which verb wraps so that errors.Is still works?', bn: 'কোন verb দিয়ে wrap করলে errors.Is কাজ করে?' },
      options: [
        { en: '%v', bn: '%v' },
        { en: '%s', bn: '%s' },
        { en: '%w', bn: '%w' },
        { en: '%q', bn: '%q' },
      ],
      answer: 2,
      hint: { en: 'One verb means “wrap”.', bn: 'একটি verb মানে “wrap”।' },
      explanation: { en: '%w stores the error inside the new one; the result is a wrapError whose Unwrap gives back ErrNotFound.', bn: '%w ভেতরে error ধরে রাখে; ফল wrapError, যার Unwrap ErrNotFound ফিরিয়ে দেয়।' },
    },
    {
      id: 'errors-and-panics-ex2',
      kind: 'mcq',
      topic: 'go: Errors, Wrapping and Panic',
      question: { en: 'What does this print? (err = ErrNotFound, wrapped twice)', bn: 'কী ছাপে? (ErrNotFound দুবার wrap)' },
      code: `err := fmt.Errorf("step2: %w", fmt.Errorf("step1: %w", ErrNotFound))
fmt.Print(errors.Is(err, ErrNotFound))`,
      options: [
        { en: 'false', bn: 'false' },
        { en: 'true', bn: 'true' },
        { en: 'compile error', bn: 'compile error দেবে' },
        { en: 'panics', bn: 'panics' },
      ],
      answer: 1,
      hint: { en: 'Is walks the chain.', bn: 'Is পুরো শিকর হাঁটে।' },
      explanation: { en: 'errors.Is unwraps repeatedly until it finds the target or hits nil, so depth does not matter.', bn: 'errors.Is বারবার unwrap করে লক্ষ্য বা nil পাওয়া পর্যন্ত, তাই গভীরতার কোনো দাম নেই।' },
    },
    {
      id: 'errors-and-panics-ex3',
      kind: 'fill',
      topic: 'go: Errors, Wrapping and Panic',
      question: { en: 'Write the one line that pulls a *StoreError out of err into a variable named se.', bn: 'err থেকে *StoreError se নামক চলকে বের করার এক লাইনটি লিখুন।' },
      answer: 'errors.As(err, &se)',
      accept: [
        'errors.As(err, &se)',
        'if errors.As(err, &se) {',
        'errors.As(err,&se)',
      ],
      hint: { en: 'The target is a pointer to the variable.', bn: 'লক্ষ্য = চলককে নির্দেশ করা pointer।' },
      explanation: { en: 'errors.As(err, &se) with se declared as *StoreError; it returns true and fills se when the chain contains such an error.', bn: 'se *StoreError হিসেবে থাকলে errors.As(err, &se) true ফেরত দেয় আর se-কে পূরণ করে।' },
    },
  ],
  quiz: {
    id: 'errors-and-panics-quiz',
    title: { en: 'Quiz — Errors, Wrapping and Panic', bn: 'কুইজ — error, wrapping আর panic' },
    questions: [
      {
        id: 'errors-and-panics-q1',
        kind: 'mcq',
        topic: 'go: Errors, Wrapping and Panic',
        question: { en: 'The error interface is defined as…', bn: 'error interface-এর সংজ্ঞা…' },
        options: [
          { en: 'Error() string', bn: 'Error() string' },
          { en: 'type() string', bn: 'type() string' },
          { en: 'String() error', bn: 'String() error' },
          { en: 'Message() string', bn: 'Message() string' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'One method, Error() string. Anything with it is an error — which is why your own struct can be one.', bn: 'একটি method, Error() string। যার তা আছে সে-ই error — তাই নিজের struct-ও হতে পারে।' },
      },
      {
        id: 'errors-and-panics-q2',
        kind: 'mcq',
        topic: 'go: Errors, Wrapping and Panic',
        question: { en: 'A sentinel error like var ErrNotFound = … is compared with…', bn: 'var ErrNotFound-এর মতো sentinel তুলনা হয়…' },
        options: [
          { en: '==, always', bn: '==, always' },
          { en: 'errors.Is, because wrapping breaks equality', bn: 'errors.Is, কারণ wrap করলে সমতা ভেঙে যায়' },
          { en: 'errors.As', bn: 'errors.As' },
          { en: 'strings.EqualFold', bn: 'strings.EqualFold — শুধু বড়-ছোট হাত মিলিয়ে তুলনা' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: '== only works on the exact value returned. Once wrapped, the identity moved inside a chain, and errors.Is is the tool that follows the chain.', bn: '== চলতে শুধু হুবহু সেই মান ফেরত এলে। wrap হলে identity শিকরের ভিতরে চলে যায়, সেটি হাঁটে errors.Is।' },
      },
      {
        id: 'errors-and-panics-q3',
        kind: 'mcq',
        topic: 'go: Errors, Wrapping and Panic',
        question: { en: 'recover() is useful…', bn: 'recover() কখন দরকার?' },
        options: [
          { en: 'to catch any error value', bn: 'যেকোনো error value ধরতে' },
          {
            en: 'inside a deferred function during a panic, at a library boundary',
            bn: 'panic-চলা অবস্থায় deferred function-এর ভেতরে, library-র সীমায়',
          },
          { en: 'to restart a goroutine automatically', bn: 'goroutine আপনা থেকেই আবার চালানোর জন্য' },
          { en: 'in main, for signals', bn: 'main-এ, signal সামলাতে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'recover only has an effect in a function that was deferred while a panic unwound — which is exactly how net/http keeps one bad handler from killing the server.', bn: 'recover কাজ করে শুধু panic-এর সময় defer করা function-এ — net/http ঠিক এভাবেই একটি খারাপ handler-এর জন্য পুরো server না-মারা তার নিশ্চয়তা দেয়।' },
      },
      {
        id: 'errors-and-panics-q4',
        kind: 'mcq',
        topic: 'go: Errors, Wrapping and Panic',
        question: { en: 'Which is idiomatic for a “not found” that callers must branch on?', bn: 'caller যাতে শাখা নিতে পারে এমন “not found”-এর রীতি?' },
        options: [
          { en: 'return nil, nil', bn: 'return nil, nil লিখে দিন' },
          {
            en: 'a typed error with an exported IsNotFound() bool',
            bn: 'a typed error with an exported IsNotFound() bool',
          },
          { en: 'panic("not found")', bn: 'panic("not found")' },
          { en: 'log it and return zero', bn: 'log দিয়ে zero ফেরত দিন' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Either a sentinel with errors.Is or a typed error with a method that says so; both let the caller decide. nil,nil hides the failure, panic is for bugs, and logging in a library duplicates reports.', bn: 'sentinel + errors.Is, বা type-ওয়ালা error যার IsNotFound() bool method আছে — দুটোতেই caller সিদ্ধান্ত নেয়। nil,nil ব্যর্থতা লুকোয়, panic bug-এর, লাইব্রেরিতে log করলে report দ্বিগুণ হয়।' },
      },
    ],
  },
  nextLesson: {
    slug: 'goroutines-and-channels',
    tech: 'go',
    title: { en: 'Goroutines and Channels', bn: 'goroutine আর channel' },
  },
};
