import type { Lesson } from '../../../lib/types';

export const ControlFlowOneLoopLesson: Lesson = {
  slug: 'control-flow-one-loop',
  tech: 'go',
  title: { en: 'Control Flow: One Loop to Rule Them All', bn: 'নিয়ন্ত্রণ: একটাই loop' },
  summary: { en: 'if with an initialiser, switch with no fall-through, and the four faces of for — condition, three-part, infinite and range.', bn: 'init-সহ if, fall-through-ছাড়া switch, আর for-এর চার মুখ — condition, তিন-অংশ, অনন্ত আর range।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Control Flow: One Loop to Rule Them All', bn: 'WHAT — নিয়ন্ত্রণ: একটাই loop' },
    },
    {
      type: 'para',
      text: { en: 'Your program must repeat something until a condition changes, and Go gives you one keyword for all of it: for. No parentheses, no three-part header unless you want it, and a couple of shapes that replace while and do-while entirely. This page is those shapes.', bn: '১টি শর্ত বদলা না-যাওয়া পর্যন্ত কিছু বারবার চালাতে হবে, আর Go তাই মাত্র ১টি keyword দেয়: for। বন্ধনী নেই, চাইলেই ৩ অংশের header নয়, আর কয়েকটি আকৃতিই while ও do-while-এর জায়গা নেয়। সেই আকৃতিগুলোর পাতা এটি।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'for is the only loop keyword. Once you can read its four forms, every Go loop in the wild is familiar.',
          bn: 'loop-এর একমাত্র keyword for। চার রূপ পড়া শিখলেই বাইরের সব Go loop চেনা লাগে।',
        },
        {
          en: 'if v := f(); v > 0 {} scopes the temporary to the branch, which is how Go keeps variable lifetimes obvious.',
          bn: 'if v := f(); v > 0 {} সাময়িক চলকে শাখার মধ্যেই রাখে — এভাবেই Go-র variable lifetime স্পষ্ট থাকে।',
        },
        {
          en: 'switch cases break automatically; fallthrough is a keyword you must write, so a missed break is impossible.',
          bn: 'switch-এর case আপনি থামে; fallthrough লিখতে হয়, তাই break ভুলে যাওয়া অসম্ভব।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'flow.go',
      code: `func classify(n int) string {
	switch {
	case n < 0:
		return "negative"
	case n == 0:
		return "zero"
	case n < 100:
		return "small"
	default:
		return "big"
	}
}

func firstEven(xs []int) (int, bool) {
	for _, x := range xs {        // range form: index and value
		if x%2 == 0 {
			return x, true
		}
	}
	return 0, false
}

func countdown(from int) {
	for i := from; i > 0; i-- {   // three-part form
		fmt.Print(i, " ")
	}
	for len(queue) > 0 {          // condition form, while a loop
		task := queue[0]
		queue = queue[1:]
		_ = task
	}
}`,
      caption: { en: 'A tagless switch reading as an if-chain, an early return instead of a flag variable, and the two loop forms you will write most.', bn: 'tag-ছাড়া switch if-শৃঙ্খলের মতো, flag চলকের বদলে আগেই return, আর সবচেয়ে বেশি লেখা দুটি loop রূপ।' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'for cond {} — Go’s “while”. There is no while keyword.',
          bn: 'for cond {} — Go-র “while”। while keyword বলে কিছু নেই।',
        },
        {
          en: 'for i := 0; i < n; i++ {} — the classic, and the only place semicolons appear in Go.',
          bn: 'for i := 0; i < n; i++ {} — ক্লাসিক, আর Go-তে semicolon দেখা যায় এই জায়গাতেই।',
        },
        {
          en: 'for {} — runs until you break, return or the process dies.',
          bn: 'for {} — break/return না-হলে বা প্রসেস মারা না-গেলো চলতেই থাকে।',
        },
        {
          en: 'for i, v := range coll {} — arrays, slices, maps, strings, channels; blank identifier _ drops what you do not need.',
          bn: 'for i, v := range coll {} — array, slice, map, string, channel; না-লাগলে _ দিয়ে ফেলে দিন।',
        },
        {
          en: 'break label / continue label — out of nested loops without a boolean flag.',
          bn: 'break label / continue label — বুলিয়ান flag ছাড়াই বাসা-ভিতরো loop থেকে বেরোনো।',
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
          title: { en: '1. Return early', bn: '১. আগে ফিরে আসুন' },
          text: { en: 'Guard the bad case first: if err != nil { return err } — the happy path ends up un-indented.', bn: 'খারাপ কেস আগে সামলান: if err != nil { return err } — ভালো পথ অবশেষে বাঁ-দিকে থাকে।' },
        },
        {
          title: { en: '2. Scope in the if', bn: '২. if-এর মধ্যেই রাখুন' },
          text: { en: 'if v, ok := m[k]; ok { use(v) } keeps ok out of the rest of the function.', bn: 'if v, ok := m[k]; ok { use(v) } লিখলে ok বাকি ফাংশনে ছড়ায় না।' },
        },
        {
          title: { en: '3. Switch on nothing', bn: '৩. কিছু-না-ধরে switch' },
          text: { en: 'switch { case a: … } replaces a long if/else if chain and reads better.', bn: 'switch { case a: … } লম্বা if/else if শৃঙ্খলের বদলে চলে, পড়তেও সহজ।' },
        },
        {
          title: { en: '4. Label the escape', bn: '৪. লাবেল দিয়ে বের হন' },
          text: { en: 'outer: for … { if done { break outer } } — no flag variable, no half-broken loop.', bn: 'outer: for … { if done { break outer } } — flag নেই, অর্ধেক-ভাঙা loop নেই।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Control Flow: One Loop to Rule Them All: the moving parts', bn: 'নিয়ন্ত্রণ: একটাই loop: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Control Flow: One Loop to Rule Them All">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Return early</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">Guard the bad case first: if err != nil {</text>
<text x="352" y="79" font-size="11" fill="currentColor">return err } — the happy path ends up un-inde…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Scope in the if</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">if v, ok := m[k]; ok { use(v) } keeps ok out</text>
<text x="352" y="151" font-size="11" fill="currentColor">of the rest of the function.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Switch on nothing</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">switch { case a: … } replaces a long if/else</text>
<text x="352" y="223" font-size="11" fill="currentColor">if chain and reads better.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Label the escape</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">outer: for … { if done { break outer } } — no</text>
<text x="352" y="295" font-size="11" fill="currentColor">flag variable, no half-broken loop.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Early return, small scope, one loop: three habits that make Go code look like Go.</text>
</svg>`,
      caption: { en: 'Early return, small scope, one loop: three habits that make Go code look like Go.', bn: 'আগে return, ছোট scope, একটিই loop — এই তিনটি অভ্যাসই কোডকে “Go-র মতো” দেখায়।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Early return, small scope, one loop: three habits that make Go code look like Go.', bn: 'আগে return, ছোট scope, একটিই loop — এই তিনটি অভ্যাসই কোডকে “Go-র মতো” দেখায়।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Range gives a copy of the element', bn: 'range উপাদানের কপি দেয়' },
      text: { en: 'for _, m := range models { m.Loaded = true } sets a field on a copy — the map/slice keeps the old value. Use the index: for i := range models { models[i].Loaded = true }.', bn: 'for _, m := range models { m.Loaded = true } লিখলে কপি-র field বদলায়, আসল মান থেকে যায়। index নিন: for i := range models { models[i].Loaded = true }।' },
    },
  ],
  exercises: [
    {
      id: 'control-flow-one-loop-ex1',
      kind: 'mcq',
      topic: 'go: Control Flow: One Loop to Rule Them All',
      question: { en: 'What prints? (n = 5)', bn: 'কী ছাপা হয়? (n = ৫)' },
      code: `n := 5
switch {
case n > 3:
	fmt.Print("big ")
case n > 1:
	fmt.Print("mid ")
}`,
      options: [
        { en: 'big mid ', bn: 'big mid ' },
        { en: 'big ', bn: 'big ' },
        { en: 'mid ', bn: 'mid ' },
        { en: 'nothing', bn: 'nothing' },
      ],
      answer: 1,
      hint: { en: 'Does a matched case stop?', bn: 'মেলার পর থামে?' },
      explanation: { en: 'A tagless switch runs only the first true case — no fall-through — so only "big " prints. Writing fallthrough would add the second.', bn: 'tag-ছাড়া switch প্রথম সত্যি case-টাই চালায় — fall-through নেই — তাই শুধু "big "। fallthrough লিখলে দ্বিতীয়টিও আসত।' },
    },
    {
      id: 'control-flow-one-loop-ex2',
      kind: 'mcq',
      topic: 'go: Control Flow: One Loop to Rule Them All',
      question: { en: 'Why does the loop fail to update the slice of structs?', bn: 'slice-এর struct update করতে loop ব্যর্থ হয় কেন?' },
      options: [
        { en: 'Ranges skip index 0', bn: 'range index 0 বাদ দেয়' },
        { en: 'for _, v := range gives a copy of each element', bn: 'for _, v := range gives a copy of each element' },
        { en: 'Slices cannot hold structs', bn: 'slice-এ struct রাখা যায় না' },
        { en: 'The loop must use := for fields', bn: 'The loop must use := for fields' },
      ],
      answer: 1,
      hint: { en: 'What is v bound to?', bn: 'v কী-তে বাঁধে?' },
      explanation: { en: 'The value variable is a copy, so mutations vanish; address the element through its index or use a pointer slice.', bn: 'মান-চলক কপি, তাই বদল হারায়; index দিয়ে উপাদান ঠিকানায় যান, বা pointer-এর slice নিন।' },
    },
    {
      id: 'control-flow-one-loop-ex3',
      kind: 'fill',
      topic: 'go: Control Flow: One Loop to Rule Them All',
      question: { en: 'Write the for form that loops while a queue slice is not empty (no range).', bn: 'queue slice খালি না-হওয়া পর্যন্ত for-টি লিখুন (range ছাড়া)।' },
      answer: 'for len(q) > 0 {',
      accept: [
        'for len(q) > 0 {',
        'for len(q) != 0 {',
        'for len(q) > 0',
      ],
      hint: { en: 'Condition form, no semicolons.', bn: 'condition রূপ, semicolon নেই।' },
      explanation: { en: 'Go writes while loops as for cond {}. The three-part form is only needed when you are counting.', bn: 'Go-র while লেখা for cond {}। তিন-অংশের রূপ শুধু গুনতে হলে দরকার।' },
    },
  ],
  quiz: {
    id: 'control-flow-one-loop-quiz',
    title: { en: 'Quiz — Control Flow: One Loop to Rule Them All', bn: 'কুইজ — নিয়ন্ত্রণ: একটাই loop' },
    questions: [
      {
        id: 'control-flow-one-loop-q1',
        kind: 'mcq',
        topic: 'go: Control Flow: One Loop to Rule Them All',
        question: { en: 'Which keyword does Go not have?', bn: 'Go-তে কোন keyword নেই?' },
        options: [
          { en: 'switch', bn: 'switch' },
          { en: 'while', bn: 'while' },
          { en: 'range', bn: 'range' },
          { en: 'fallthrough', bn: 'fallthrough' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'There is no while (and no do…while); for with a condition fills that role.', bn: 'while নেই (do…while-ও নেই); শর্তসহ for সেই কাজ করে।' },
      },
      {
        id: 'control-flow-one-loop-q2',
        kind: 'mcq',
        topic: 'go: Control Flow: One Loop to Rule Them All',
        question: { en: 'What does this compute? (after: x)', bn: 'এটি কী গণে? (শেষে x)' },
        options: [
          { en: '10', bn: '10' },
          { en: '4', bn: '4' },
          { en: '6', bn: '6' },
          { en: '1', bn: '1' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Adds 1 then 3 (2 and 4 are skipped by continue): x is 4. Careful — 1+3 is 4; the loop ends after i becomes 5, so the answer is 4.', bn: '১ তারপর ৩ যোগ হয় (২, ৪ continue-এ এড়ায়): x = ৪। ঠিক করে দেখুন — ১+৩ = ৪, i ৫ হলেই শেষ।' },
      },
      {
        id: 'control-flow-one-loop-q3',
        kind: 'mcq',
        topic: 'go: Control Flow: One Loop to Rule Them All',
        question: { en: 'The benefit of an if-statement initialiser is…', bn: 'if-এর initialiser-এর সুবিধা…' },
        options: [
          { en: 'It is faster', bn: 'It is faster' },
          { en: 'The temporary lives only in that branch', bn: 'সেই branch-এর ভেতরেই temporary-এর আয়ু' },
          { en: 'It lets you skip the braces', bn: 'বন্ধনী বাদ দেওয়া যায় বলে' },
          { en: 'It allows assignment in a switch too', bn: 'switch-এও assignment চলে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Variables declared in the initialiser are scoped to the if/else chain, which keeps names from leaking and makes the read local.', bn: 'initialiser-এ ঘোষণা করা চলক শুধু সেই if/else শৃঙ্খলে থাকে — নাম ছড়ায় না, পড়া কাছাকাছি থাকে।' },
      },
      {
        id: 'control-flow-one-loop-q4',
        kind: 'mcq',
        topic: 'go: Control Flow: One Loop to Rule Them All',
        question: { en: 'break label; is used to…', bn: 'break label; দিয়ে কী হয়?' },
        options: [
          {
            en: 'Leave a labelled block, usually an outer loop',
            bn: 'নাম-দেওয়া block থেকে বেরিয়ে আসে, সাধারণত বাইরের loop',
          },
          { en: 'Restart the loop', bn: 'loop আবার শুরু করে' },
          { en: 'Break out of a switch only', bn: 'শুধু switch থেকে বেরোয়' },
          { en: 'Abort the function', bn: 'পুরো function-ই থামিয়ে দেয়' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'A label names the outer loop (or any block) so break/continue act on it; without labels Go only breaks the innermost loop or switch.', bn: 'label বাইরের loop (বা যেকোনো block) নামায়, তাই break/continue সেতেই লাগে; label ছাড়া সবচেয়ে ভিতরেরটিতেই লাগে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'functions-defer-and-methods',
    tech: 'go',
    title: { en: 'Functions, defer and Methods', bn: 'function, defer আর method' },
  },
};
