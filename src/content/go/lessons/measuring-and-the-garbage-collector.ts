import type { Lesson } from '../../../lib/types';

export const MeasuringAndTheGarbageCollectorLesson: Lesson = {
  slug: 'measuring-and-the-garbage-collector',
  tech: 'go',
  title: { en: 'Measuring, Allocation and the Collector', bn: 'মাপা, বরাদ্দ আর garbage collector' },
  summary: { en: 'Go decides where a value lives and when it may be freed. Both decisions cost time. Learn to measure before you tune, to keep work off the heap, and to use GOGC and GOMEMLIMIT as a last resort rather than a first guess.', bn: 'কোথায় মান থাকবে আর কখন ছাড়া হবে — দুটোই Go ঠিক করে, দুটিরই সময় লাগে। আগে মেপে নিতে শুনুন, heap-এর কাজ কমান, আর GOGC ও GOMEMLIMIT প্রথম অনুমান নয়, শেষ অস্ত্র হিসেবে ব্যবহার করুন।' },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Measuring, Allocation and the Collector', bn: 'WHAT — মাপা, বরাদ্দ আর garbage collector' },
    },
    {
      type: 'para',
      text: { en: 'Your program is fast on a laptop and slow in production, and the difference is usually one number: how much memory the code asks for while it runs. A million small strings can mean a million allocations, and each one is a bill the collector later presents. This page is the measuring, the two knobs, and the fix that is almost always cheaper — allocating less.', bn: 'আপনার প্রোগ্রাম ল্যাপটপে দ্রুত, production-এ ধীর, আর ফারাকটা প্রায় সবসময় ১টি সংখ্যায়: চলতে চলতে কত memory চাওয়া হচ্ছে। অনেক ছোট string মানে অনেক বরাদ্দ, আর প্রতি ১টির হিসাব পরে garbage collector ধরে। এই পাতায় প্রথমে মাপা, ২টি নব, আর যে ঠিকটি প্রায় সবসময় সস্তা — কম বরাদ্দ চাওয়া।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'A value that escapes to the heap must later be found and freed; a value that stays on the stack dies when the function returns, for free. Escape analysis decides which, and -gcflags=-m shows the verdict.',
          bn: 'যে মান heap-এ উঠে যায় তাকে পরে খুঁজে মুক্ত করতে হয়; যে মান stack-এ থাকে সে function ফেরত দিলেই বিনা খরচে শেষ। এটি ঠিক করে escape analysis, আর -gcflags=-m তার রায় দেখায়।',
        },
        {
          en: 'The collector runs when the live heap has roughly doubled (GOGC=100), so a bigger GOGC buys fewer collections with more memory, and GOMEMLIMIT sets a ceiling instead of a ratio.',
          bn: 'live heap প্রায় দ্বিগুণ হলে collector দৌড়ায় (GOGC=100), তাই GOGC বাড়ালে collection কমে ও memory বাড়ে, আর GOMEMLIMIT অনুপাতের বদলে একটা ছাদ ঠিক করে।',
        },
        {
          en: 'A benchmark is the only honest ruler here: two runs of the same function, with -benchmem, reporting nanoseconds and allocations per operation.',
          bn: 'এখানে একমাত্র সৎ মাপকাঠি benchmark: একই function দুবার চালিয়ে -benchmem দিয়ে ন্যানোসেকেন্ড আর প্রতি অপারেশনে বরাদ্দের সংখ্যা দেখা।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'bench_test.go',
      code: `func BenchmarkJoinConcat(b *testing.B) {
    parts := []string{"alpha", "beta", "gamma", "delta"}
    for b.Loop() {                      // Go 1.24: resets timers, not the slice
        var s string
        for _, p := range parts { s += p + "-" }   // a new string per step: 4 allocations
        _ = s
    }
}

func BenchmarkJoinBuilder(b *testing.B) {
    parts := []string{"alpha", "beta", "gamma", "delta"}
    for b.Loop() {
        var sb strings.Builder
        sb.Grow(4 * 6)                  // one allocation, sized up front
        for _, p := range parts { sb.WriteString(p); sb.WriteByte('-') }
        _ = sb.String()
    }
}`,
      caption: { en: 'go test -bench=. -benchmem prints ns/op and B/op and allocs/op. Read allocs/op first: it is the number the collector will charge you for.', bn: 'go test -bench=. -benchmem ছাপে ns/op, B/op আর allocs/op। আগে allocs/op পড়ুন — এটিই সংখ্যাটি collector পরে আদায় করবে।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'escape analysis',
          def: { en: 'A compile-time pass that decides whether a variable can stay on the stack or must live on the heap because something keeps referring to it.', bn: 'কম্পাইল-সময়ের এক পাস যা ঠিক করে একটি variable stack-এ থাকতে পারবে কি না, নাকি কেউ তার ঠিকানা ধরে রাখায় heap-এ থাকতেই হবে।' },
        },
        {
          term: 'GOGC',
          def: { en: 'The percentage the live heap may grow before the next collection; 100 means “when it has doubled”, and off means the collector only runs under memory pressure.', bn: 'পরবর্তী collection-এর আগে live heap শতকরা কত বাড়তে পারে; ১০০ মানে “দ্বিগুণ হলে”, আর off মানে memory চাপ ছাড়া collector দৌড়ায় না।' },
        },
        {
          term: 'GOMEMLIMIT',
          def: { en: 'A soft ceiling in bytes that the runtime tries to stay under by collecting sooner, whichever GOGC says.', bn: 'byte-এ একটি নরম ছাদ, যার নিচে থাকতে runtime দৌড়ে collection এগিয়ে আনে, GOGC যা-ই বলুক।' },
        },
        {
          term: 'pprof',
          def: { en: 'The profiler: import net/http/pprof or runtime/pprof, then ask for a CPU or heap profile to see where the time and the allocations actually come from.', bn: 'profiler: net/http/pprof বা runtime/pprof import করে CPU বা heap profile চাইলে দেখা যায় সময় আর বরাদ্দ আসলে কোথা থেকে আসছে।' },
        },
      ],
    },
    {
      type: 'table',
      head: [
        { en: 'cost', bn: 'খরচ' },
        { en: 'what it looks like', bn: 'কেমন দেখায়' },
        { en: 'the usual fix', bn: 'সাধারণ ঠিক' },
      ],
      rows: [
        [
          { en: 'allocations', bn: 'বরাদ্দ' },
          { en: 'allocs/op of 2 or more in a hot loop', bn: 'গরম loop-এ allocs/op ২ বা তার বেশি' },
          {
            en: 'reuse a buffer, pass a slice in, Grow before writing',
            bn: 'buffer বারবার ব্যবহার করুন, slice ভেতরে দিন, লেখার আগে Grow',
          },
        ],
        [
          { en: 'copying', bn: 'কপি' },
          {
            en: 'a function taking []T by value is fine; returning a sub-slice of a huge slice keeps it alive',
            bn: '[]T মান হিসেবে নেওয়া ঠিক; বিশাল slice-এর sub-slice ফেরত দিলে সেটি বাঁধা থাকে',
          },
          { en: 'copy out the small part, then drop the big one', bn: 'ছোট অংশ আলাদা কপি করে বড়টি ছেড়ে দিন' },
        ],
        [
          { en: 'collection', bn: 'collection' },
          {
            en: 'GC marks show as a % of CPU in a profile, or a sawtooth in RSS',
            bn: 'profile-এ CPU-র শতকরা হিসেবে GC mark, বা RSS-এ দাঁতালার মতো উতরোনমর',
          },
          {
            en: 'allocate less; raise GOGC only if memory is spare',
            bn: 'আগে কম বরাদ্দ; memory ফাঁকা থাকলেই GOGC বাড়াবেন',
          },
        ],
        [
          { en: 'goroutine churn', bn: 'goroutine ওঠাপড়া' },
          { en: 'a new goroutine per request in a tight loop', bn: 'প্রতি request-এ নতুন goroutine, ঘন loop-এ' },
          { en: 'a worker pool, or an errgroup with a limit', bn: 'worker pool, নাকি limit সহ errgroup' },
        ],
      ],
      caption: { en: 'Every fix in the third column is a smaller number in the first two columns. Nothing here makes the collector smarter; it gives it less to do.', bn: 'তৃতীয় কলামের প্রতিটি ঠিক প্রথম দুই কলামের সংখ্যাই ছোট করে। এখানে collector-কে চতুর করা হয় না, তার কাজই কমিয়ে দেওয়া হয়।' },
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
          title: { en: '1. Write the benchmark first', bn: '১. আগে benchmark লিখুন' },
          text: { en: 'A test function named BenchmarkX with the code you suspect, run with -bench=. -benchmem, twice, on the machine that matters.', bn: 'একটি test function যার নাম BenchmarkX, সন্দেহের code-টি দিয়ে, -bench=. -benchmem দিয়ে দুবার চালান, যে মেশিনটি গুরুত্বপূর্ণ সেটিতেই।' },
        },
        {
          title: { en: '2. Look at allocs/op, not ns/op', bn: '২. ns/op নয়, আগে allocs/op দেখুন' },
          text: { en: 'Nanoseconds move with the machine; allocations are a property of your code, and they decide what the collector costs.', bn: 'ন্যানোসেকেন্ড মেশিন অনুসারে বদলায়; বরাদ্দ আপনার code-র বৈশিষ্ট্য, আর collector-এর খরচ সেটিই ঠিক করে।' },
        },
        {
          title: { en: '3. Ask why something escaped', bn: '৩. কী কারণে heap-এ গেল জিজ্ঞেস করুন' },
          text: { en: 'Compile with -gcflags=-m and read the line that names the variable; it says moved to heap and why.', bn: '-gcflags=-m দিয়ে compile করলে যে লাইনে variable-এর নাম থাকে তা বলে “moved to heap” আর কেন বলে।' },
        },
        {
          title: { en: '4. Tune the knobs last', bn: '৪. নব সবশেষে ছুঁয়ে দেখুন' },
          text: { en: 'Only after allocations are down: GOGC higher when memory is spare, GOMEMLIMIT when the container is being killed.', bn: 'বরাদ্দ কমানোর পরেই: memory ফাঁকা থাকলে GOGC উপরে, container মারা হলে GOMEMLIMIT।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Measuring, Allocation and the Collector: the moving parts', bn: 'মাপা, বরাদ্দ আর garbage collector: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Measuring, Allocation and the Collector">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Write the benchmark first</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">A test function named BenchmarkX with the code</text>
<text x="352" y="79" font-size="11" fill="currentColor">you suspect, run with -bench=. -benchmem, twi…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Look at allocs/op, not ns/op</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Nanoseconds move with the machine; allocations</text>
<text x="352" y="151" font-size="11" fill="currentColor">are a property of your code, and they decide …</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Ask why something escaped</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Compile with -gcflags=-m and read the line</text>
<text x="352" y="223" font-size="11" fill="currentColor">that names the variable; it says moved to hea…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Tune the knobs last</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">Only after allocations are down: GOGC higher</text>
<text x="352" y="295" font-size="11" fill="currentColor">when memory is spare, GOMEMLIMIT when the con…</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Optimising without a benchmark is typing: you may be right, but you cannot say so afterwards. T…</text>
</svg>`,
      caption: { en: 'Optimising without a benchmark is typing: you may be right, but you cannot say so afterwards. The number you write down before and after is the whole difference.', bn: 'benchmark ছাড়া optimise করা মানে কেবল টাইপ করা; সঠিক হতেও পারেন, কিন্তু পরে সেটি বলার উপায় থাকে না। আগে-পরে লিখে রাখা সংখ্যাটাই পুরো ফারাক।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Optimising without a benchmark is typing: you may be right, but you cannot say so afterwards. The number you write down before and after is the whole difference.', bn: 'benchmark ছাড়া optimise করা মানে কেবল টাইপ করা; সঠিক হতেও পারেন, কিন্তু পরে সেটি বলার উপায় থাকে না। আগে-পরে লিখে রাখা সংখ্যাটাই পুরো ফারাক।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Raising GOGC to hide an allocation bug', bn: 'বরাদ্দের ভুল ঢাকতে GOGC বাড়ানো' },
      text: { en: 'A larger GOGC makes collections rarer, so the symptom fades while the code still allocates a million strings per request. Memory then grows until the container is killed, and the fix is a month harder to find.', bn: 'GOGC বড় হলে collection বিরল হয়, লক্ষণ মিলিয়ে যায় — অথচ code তখনো প্রতি request-এ দশ লক্ষ string বানাচ্ছে। তারপর memory বাঁতে বাঁতে container মারা যায়, আর ভুল খুঁজে বের করা এক মাস কঠিন হয়ে পড়ে।' },
    },
  ],
  exercises: [
    {
      id: 'measuring-and-the-garbage-collector-ex1',
      kind: 'mcq',
      topic: 'go: Measuring, Allocation and the Collector',
      question: { en: 'A benchmark reports 180 ns/op with 4 allocations, and the improved one 165 ns/op with 1 allocation. Why prefer the second?', bn: 'এক benchmark বলছে ১৮০ ns/op আর ৪টি বরাদ্দ, উন্নতটি ১৬৫ ns/op আর ১টি বরাদ্দ। দ্বিতীয়টি কেন বরং?' },
      options: [
        {
          en: 'Fewer allocations means less collector work, and the gap widens under memory pressure and on bigger inputs',
          bn: 'কম বরাদ্দ মানে collector-এর কম কাজ; memory চাপে আর বড় input-এ ফারাক আরও বাড়ে',
        },
        { en: 'ns/op is the only honest number', bn: 'ns/op-ই একমাত্র সত্য সংখ্যা' },
        {
          en: 'Allocations are freed automatically, so they cost nothing',
          bn: 'বরাদ্দ আপনা থেকেই মুক্ত হয়, খরচ নেই',
        },
        { en: 'The second one has a shorter function body', bn: 'দ্বিতীয়টির function-এর গা ছোট' },
      ],
      answer: 0,
      hint: { en: 'Which number describes your code rather than the machine?', bn: 'কোন সংখ্যাটি মেশিনের নয়, আপনার code-র?' },
      explanation: { en: 'Per-operation allocations are the tax the collector collects later; a small ns/op difference can flip when the heap grows, while four allocations per call stays four.', bn: 'প্রতি অপারেশনে বরাদ্দ পরে collector আদায় করা কর; heap বাড়লে ছোট ns/op ফারাক উল্টে যেতে পারে, আর চারটি বরাদ্দ চারটাই থাকে।' },
    },
    {
      id: 'measuring-and-the-garbage-collector-ex2',
      kind: 'predict',
      topic: 'go: Measuring, Allocation and the Collector',
      question: { en: 'strings.Builder is given no Grow call and writes 1,000 short strings. What happens to allocs/op as the value doubles each time?', bn: 'strings.Builder-কে Grow না-দিয়ে ১,০০০টি ছোট string লেখা হচ্ছে। মান প্রতিবার দ্বিগুণ হলে allocs/op-এ কী হয়?' },
      code: `var sb strings.Builder
for i := 0; i < 1000; i++ { sb.WriteString("ab") }`,
      answer: 'about 10 to 11 allocations',
      accept: [
        '10',
        '11',
        '10 to 11',
        'about 10',
        '10-11',
        'প্রায় ১০টি',
        'প্রায় ১১টি',
        '10 allocations',
        'log2(2000)',
      ],
      hint: { en: 'Geometric growth: count the doublings, not the writes.', bn: 'গুণোত্তর বাড়াবাড়ি: লেখা নয়, দ্বিগুণ হওয়া গনুন।' },
      explanation: { en: 'The buffer doubles when it fills, so 2,000 bytes needs roughly eleven doublings: allocations grow with the logarithm of the size, which is why Builder beats repeated + on a string.', bn: 'ভরে গেলে buffer দ্বিগুণ হয়, তাই ২,০০০ byte-এর জন্য প্রায় ১১ বার দ্বিগুণ হয়; সংখ্যার লগারিদমের সঙ্গে বরাদ্দ বাড়ে — এজন্যই বারবার + এর চেয়ে Builder জয়ী।' },
    },
    {
      id: 'measuring-and-the-garbage-collector-ex3',
      kind: 'mcq',
      topic: 'go: Measuring, Allocation and the Collector',
      question: { en: 'Where does the line “moved to heap: x” come from?', bn: '“moved to heap: x” লাইনটি কোথা থেকে আসে?' },
      options: [
        { en: 'The runtime, at start-up', bn: 'runtime, চালু হওয়ার সময়ে' },
        {
          en: 'The compiler, with -gcflags=-m, from escape analysis',
          bn: 'কম্পাইলার, -gcflags=-m দিয়ে, escape analysis-এর লেখা',
        },
        { en: 'pprof, while sampling', bn: 'pprof, নমুনা নেবার সময়ে' },
        { en: 'go vet', bn: 'go vet' },
      ],
      answer: 1,
      hint: { en: 'It is printed while building, not while running.', bn: 'চলাকালিন নয়, বানানোর সময়ে ছাপা হয়।' },
      explanation: { en: 'Escape analysis is a compile-time decision, and the flag makes the compiler report it per variable — which is how you find the one pointer that drags a whole struct onto the heap.', bn: 'escape analysis কম্পাইল-সময়ের সিদ্ধান্ত, আর ঐ flag কম্পাইলকে variable-প্রতি তা বলতে বাধ্য করে — কোন একটি pointer পুরো struct-কে heap-এ টেনে নেয়, সেটি এভাবেই ধরা পড়ে।' },
    },
  ],
  quiz: {
    id: 'measuring-and-the-garbage-collector-quiz',
    title: { en: 'Quiz — Measuring, Allocation and the Collector', bn: 'কুইজ — মাপা, বরাদ্দ আর garbage collector' },
    questions: [
      {
        id: 'measuring-and-the-garbage-collector-q1',
        kind: 'mcq',
        topic: 'go: Measuring, Allocation and the Collector',
        question: { en: 'What does GOGC=100 actually promise?', bn: 'GOGC=100 ঠিক কীরকম প্রতিশ্রুতি দেয়?' },
        options: [
          { en: 'The heap never exceeds 100 MB', bn: 'heap ১০০ MB ছাড়াবে না' },
          {
            en: 'Collect when the live heap is about double the previous size',
            bn: 'live heap আগের প্রায় দ্বিগুণ হলে collection',
          },
          { en: 'Use 100% of one core for the collector', bn: 'collector-একটি core-এর ১০০% ব্যবহার করবে' },
          { en: 'Free memory every 100 milliseconds', bn: 'প্রতি ১০০ মিলিসেকেন্ডে memory ছাড়া হবে' },
        ],
        answer: 1,
        hint: { en: 'It is a growth target, not a size.', bn: 'এটি বাড়ার লক্ষ্য, আকার নয়।' },
        explanation: { en: 'GOGC is a percentage of growth of the live heap since the last collection, which trades memory for collector CPU; GOMEMLIMIT is the one that speaks in bytes.', bn: 'GOGC হলো গত collection-এর পর live heap কত বাড়বে তার শতকরা, memory দিয়ে collector-এর CPU কেনা; byte-এ কথা বলে GOMEMLIMIT।' },
      },
      {
        id: 'measuring-and-the-garbage-collector-q2',
        kind: 'mcq',
        topic: 'go: Measuring, Allocation and the Collector',
        question: { en: 'Why can returning a sub-slice of a huge slice keep the whole array alive?', bn: 'একটি বিশাল slice-এর sub-slice ফেরত দিলে পুরো array-টিই বাঁধা থাকে কেন?' },
        options: [
          { en: 'Slices copy their elements on return', bn: 'slice ফেরত দেওয়ার সময় উপাদান কপি করে' },
          {
            en: 'A slice is a pointer, length and capacity into the same backing array',
            bn: 'slice মানে একই backing array-এর দিকে pointer, দৈর্ঘ্য আর ধারণক্ষমতা',
          },
          { en: 'The collector ignores sub-slices', bn: 'collector sub-slice উপেক্ষা করে' },
          { en: 'It does not; the runtime copies out', bn: 'থাকে না, runtime আলাদা করে নেয়' },
        ],
        answer: 1,
        hint: { en: 'Nothing is copied when a slice is passed around.', bn: 'slice ঘোরানোর সময়ে কিছুই কপি হয় না।' },
        explanation: { en: 'The slice header points into the array, and the array cannot be freed while any header refers to it; copying the twenty rows you need releases the rest.', bn: 'slice-এর header array-এর দিকে ইশারা করে, আর কোনো header থাকলে array মুক্ত হতে পারে না; দরকারি বিশটি সারি আলাদা কপি করলে বাকিটা ছাড়ে।' },
      },
      {
        id: 'measuring-and-the-garbage-collector-q3',
        kind: 'mcq',
        topic: 'go: Measuring, Allocation and the Collector',
        question: { en: 'Which measurement tells you the most about collector pressure?', bn: 'collector-এর চাপ সম্পর্কে সবচেয়ে বেশি কী মাপলে বোঝা যায়?' },
        options: [
          { en: 'Wall time of one request', bn: 'একটি request-এর দেওয়াল-সময়' },
          { en: 'allocs/op from a benchmark, and a heap profile', bn: 'benchmark-এর allocs/op, আর একটি heap profile' },
          { en: 'The number of goroutines', bn: 'goroutine-এর সংখ্যা' },
          { en: 'Binary size', bn: 'বাইনারির আকার' },
        ],
        answer: 1,
        hint: { en: 'Pressure is allocations, seen from the allocator side.', bn: 'চাপ মানে বরাদ্দ, বরাদ্দকারীর দিক থেকে দেখা।' },
        explanation: { en: 'Allocation count is the input to the collector; a pprof -alloc_objects profile shows which line produced them, which is a far shorter path than guessing.', bn: 'বরাদ্দের সংখ্যাই collector-এর ইনপুট; pprof -alloc_objects দেখায় কোন লাইন থেকে সেগুলো এসেছে — এটি অনুমানের চেয়ে অনেক ছোট পথ।' },
      },
      {
        id: 'measuring-and-the-garbage-collector-q4',
        kind: 'mcq',
        topic: 'go: Measuring, Allocation and the Collector',
        question: { en: 'b.Loop() in a benchmark exists mainly to do what?', bn: 'benchmark-এ b.Loop() মূলত কীসের জন্য?' },
        options: [
          { en: 'Repeat the body a fixed number of times you choose', bn: 'আপনি ঠিক করা সংখ্যকবার গা চালায়' },
          {
            en: 'Time one iteration accurately and stop the compiler removing dead work',
            bn: 'একটি পুনরাবৃত্তি ঠিকভাবে মাপে, আর compiler যাতে নিষ্ক্রিয় কাজ মুছে না ফেলে',
          },
          { en: 'Run parallel benchmarks', bn: 'সমান্তরাল benchmark চালায়' },
          { en: 'Reset the heap', bn: 'heap রিসেট করে' },
        ],
        answer: 1,
        hint: { en: 'It replaced the manual for i := 0; i < b.N loop.', bn: 'হাতে লেখা for i := 0; i < b.N loop-এর জায়গা নিয়েছে।' },
        explanation: { en: 'The loop form also keeps the result live and reports per-iteration timing, which is why older patterns using b.N needed a sink variable to avoid optimisation.', bn: 'এই loop-এর ফলে ফলটি বাঁধা থাকে আর পুনরাবৃত্তি-প্রতি সময় মাপা হয়; পুরোনো b.N পদ্ধতিতে তাই compiler-এর হাত থেকে বাঁচতে একটি sink variable লাগত।' },
      },
    ],
  },
};
