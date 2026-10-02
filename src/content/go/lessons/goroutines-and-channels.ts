import type { Lesson } from '../../../lib/types';

export const GoroutinesAndChannelsLesson: Lesson = {
  slug: 'goroutines-and-channels',
  tech: 'go',
  title: { en: 'Goroutines and Channels', bn: 'goroutine আর channel' },
  summary: { en: 'go f() costs a few kilobytes; channels move ownership. Then the three shapes you actually write: worker pool, fan-out, and cancel-with-context.', bn: 'go f()-এর খরচ কয়েক KB; channel মালিকানা হাতবদল করে। তারপর আসলে যা-ই লেখা হয় তিনটি গড়ন: worker pool, fan-out, context দিয়ে বাতিল।' },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Goroutines and Channels', bn: 'WHAT — goroutine আর channel' },
    },
    {
      type: 'para',
      text: { en: 'You must fetch from three services, and each takes 200 ms. Run them one after the other and you wait 600 ms; run them together and you wait 200. Go\'s way of running them together is a goroutine, and its way of not corrupting the result is a channel.', bn: '৩টি service থেকে তথ্য আনতে হবে, প্রতিটি ২০০ মিলিসেকেন্ড নেয়। ১টির পর ১টি চালালে ৬০০ মিলিসেকেন্ড অপেক্ষা; একসঙ্গে চালালে ২০০। একসঙ্গে চালানোর Go-র উপায় goroutine, আর ফল যেন না-নষ্ট হয় তার উপায় channel।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Do not communicate by sharing memory; share memory by communicating — the runtime moves values instead of letting two goroutines write one field.',
          bn: 'memory শেয়ার করে যোগাযোগ নয়; যোগাযোগ করে memory ভাগ করুন — runtime মান সরায়, ২টি goroutine-কে ১টি field লিখতে দেয় না।',
        },
        {
          en: 'An unbuffered channel hands over the value and the responsibility together, so a buffer never holds data nobody owns.',
          bn: 'unbuffered channel মান আর দায়িত্ব একসাথে হাতে দেয়, তাই buffer-এ কারও মালিকানা-ছাড়া তথ্য পড়ে থাকে না।',
        },
        {
          en: 'Goroutines outliving main is the most common Go bug: always give the work a group and a stop signal.',
          bn: 'main-এর চেয়ে বেশি বেঁচে থাকা goroutine সবচেয়ে সাধারণ Go ভুল: কাজে দল আর থামানোর সংকেত দুটোই দিন।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'pipeline.go',
      code: `func pipeline(ctx context.Context, jobs []int) ([]int, error) {
	out := make(chan int, len(jobs))
	var wg sync.WaitGroup

	for _, job := range jobs {              // fan-out: one goroutine per job
		wg.Add(1)
		go func(j int) {
			defer wg.Done()
			select {
			case out <- j * j:              // hand the result over
			case <-ctx.Done():
				return
			}
		}(job)
	}

	go func() {                             // close when every worker is home
		wg.Wait()
		close(out)
	}()

	var got []int
	for v := range out {                    // ends exactly at the close
		got = append(got, v)
	}
	if err := ctx.Err(); err != nil {
		return got, err
	}
	return got, nil
}`,
      caption: { en: 'The close goroutine is the part people forget: a receiver ranging an open channel waits forever, so someone must always close it.', bn: 'close করা goroutine-টাই সবাই ভুলে যায়: খোলা channel-এ range করলে গ্রহীতা চিরকাল অপেক্ষা করে, তাই কেউ-না-কেউ বন্ধ করবেই।' },
    },
    {
      type: 'table',
      head: [
        { en: 'channel', bn: 'channel' },
        { en: 'send blocks when', bn: 'কখন send আটকে' },
        { en: 'receive blocks when', bn: 'কখন receive আটকে' },
      ],
      rows: [
        [
          { en: 'unbuffered', bn: 'unbuffered' },
          { en: 'no receiver is ready', bn: 'গ্রহীতা প্রস্তুত নয়' },
          { en: 'no value has arrived', bn: 'মান আসেনি' },
        ],
        [
          { en: 'buffered, room left', bn: 'buffered, জায়গা আছে' },
          { en: 'never', bn: 'কখনও না' },
          { en: 'buffer is empty', bn: 'buffer খালি' },
        ],
        [
          { en: 'buffered, full', bn: 'buffered, পূর্ণ' },
          { en: 'buffer is full', bn: 'buffer পূর্ণ' },
          { en: 'buffer is empty', bn: 'buffer খালি' },
        ],
        [
          { en: 'closed', bn: 'বন্ধ' },
          { en: 'always (panic)', bn: 'সবসময় (panic)' },
          { en: 'never; yields zero, ok=false', bn: 'কখনও না; zero দেয়, ok=false' },
        ],
        [
          { en: 'nil', bn: 'nil' },
          { en: 'forever', bn: 'চিরকাল' },
          { en: 'forever', bn: 'চিরকাল' },
        ],
      ],
      caption: { en: 'A nil channel blocks on both sides — which is exactly why select with a nil case is a way to switch a clause off.', bn: 'nil channel দুই পাশেই আটকায় — তাই select-এ nil case দিলে সেই শাখা বন্ধ করে দেওয়া যায়।' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Deadlock in one sentence', bn: 'এক লাইনে deadlock' },
      text: { en: 'main returns while a goroutine still waits on a channel, or every goroutine waits on another: the runtime shouts “fatal error: all goroutines are asleep”. Draw the two ends of every channel before you write the third.', bn: 'main ফিরে যায় অথচ goroutine এখনও channel-এ অপেক্ষমান, অথবা সবাই একে-অপরের অপেক্ষায়: runtime চিৎকার করে “fatal error: all goroutines are asleep”। তিনটি লেখার আগে প্রতিটি channel-এর দুই প্রান্ত আঁকুন।' },
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
          title: { en: '1. Decide ownership', bn: '১. মালিকানা ঠিক করুন' },
          text: { en: 'Who creates the value, who consumes it, who closes the channel — one line of comment if it is subtle.', bn: 'মান কে-বানায়, কে-খায়, channel কে-বন্ধ করে — সূক্ষ্ম হলে এক লাইন comment।' },
        },
        {
          title: { en: '2. Group the workers', bn: '২. কর্মী দলে বাঁধুন' },
          text: { en: 'sync.WaitGroup: Add before go, Done in a defer inside the goroutine.', bn: 'sync.WaitGroup: go-এর আগে Add, goroutine-এর ভিতরে defer Done।' },
        },
        {
          title: { en: '3. Make it cancellable', bn: '৩. বাতিল-যোগ্য করুন' },
          text: { en: 'Accept ctx context.Context as the first argument and select on ctx.Done().', bn: 'প্রথম argument হিসেবে ctx context.Context নিন, ctx.Done() নিয়ে select করুন।' },
        },
        {
          title: { en: '4. Close from the sender', bn: '৪. প্রেরকই বন্ধ করুক' },
          text: { en: 'Only the side that sends closes; receivers must never close, and no one closes twice.', bn: 'যে পাঠায় সে-ই বন্ধ করে; গ্রহীতা কখনও বন্ধ করে না, কেউ দুবারও না।' },
        },
      ],
    },
    {
      type: 'visual',
      id: 'pipeline',
      scenario: 'jobs flowing through workers, buffering and back-pressure visible on the chart',
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'The scheduler multiplexes thousands of goroutines onto a few OS threads; you just write blocking code and it stays cheap.', bn: 'scheduler কয়েকটি OS thread-এ হাজারো goroutine চালায়; আপনি ব্লকিং কোড লিখছেন বলে খরচ বাড়ে না।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Loop variable captured by the goroutine', bn: 'goroutine-তে loop চলক ধরা পড়া' },
      text: { en: 'Before Go 1.22, for _, v := range xs { go func() { use(v) }() } made every goroutine see the last element. Go 1.22 gives each iteration its own variable; the fix for old code is to pass it in: go func(v int){…}(v).', bn: 'Go 1.22-এর আগে for _, v := range xs { go func() { use(v) }() } লিখলে সব goroutine শেষ মানই দেখত। 1.22 প্রতিবার নতুন চলক দেয়; পুরোনো কোডে argument করে পাঠান: go func(v int){…}(v)।' },
    },
  ],
  exercises: [
    {
      id: 'goroutines-and-channels-ex1',
      kind: 'mcq',
      topic: 'go: Goroutines and Channels',
      question: { en: 'Who closes the results channel here?', bn: 'এখানে results channel কে বন্ধ করে?' },
      options: [
        { en: 'the receiver, when it has read enough', bn: 'receiver, যখন যথেষ্ট পড়ে নেয়' },
        {
          en: 'the last sender — usually a goroutine that waits for the WaitGroup',
          bn: 'শেষ sender — সাধারণত যে goroutineটি WaitGroup-এর অপেক্ষা করে',
        },
        { en: 'the runtime, at program exit', bn: 'runtime, প্রোগ্রাম শেষ হওয়ার সময়' },
        { en: 'nobody: it is garbage collected', bn: 'কাউকেই নয়; garbage collected হয়ে যায়' },
      ],
      answer: 1,
      hint: { en: 'Closing signals “no more values”.', bn: 'বন্ধ করা বলে “আর মান নেই”।' },
      explanation: { en: 'Only senders close; the fan-in goroutine that waits for all workers and then closes is the standard shape. A receiver closing would make a still-working sender panic.', bn: 'শুধু প্রেরক বন্ধ করে; সব কর্মীর অপেক্ষা করে যে fan-in goroutine বন্ধ করে দেয় — সেটাই রীতি। গ্রহীতা বন্ধ করলে চলতে-থাকা প্রেরক panic করত।' },
    },
    {
      id: 'goroutines-and-channels-ex2',
      kind: 'mcq',
      topic: 'go: Goroutines and Channels',
      question: { en: 'Sending on a closed channel does what?', bn: 'বন্ধ channel-এ send করলে কী হয়?' },
      options: [
        { en: 'blocks forever', bn: 'চিরকালের জন্য ব্লক করে' },
        { en: 'silently drops the value', bn: 'চুপচাপ মান ফেলে দেয়' },
        { en: 'panics', bn: 'panics' },
        { en: 'returns false', bn: 'false ফেরত দেয়' },
      ],
      answer: 2,
      hint: { en: 'One of the two directions is forgiving.', bn: '২ দিকের ১টি ক্ষমাশীল।' },
      explanation: { en: 'Send panics. Receive is forgiving: it gives the zero value with ok == false, which is how range ends.', bn: 'send panic করে। receive ক্ষমাশীল: zero value দেয় ok == false সহ — range এভাবেই শেষ হয়।' },
    },
    {
      id: 'goroutines-and-channels-ex3',
      kind: 'predict',
      topic: 'go: Goroutines and Channels',
      question: { en: 'What is the buffered channel’s length after this?', bn: 'এর পর buffered channel-এর দৈর্ঘ্য কত?' },
      code: `c := make(chan int, 2)
c <- 1
c <- 2
fmt.Print(len(c))`,
      answer: '2',
      accept: [
        '2',
        'two',
      ],
      hint: { en: 'Nothing consumed yet.', bn: 'কেউ কিছু নেয়নি এখনও।' },
      explanation: { en: 'len on a channel is the count of buffered elements: both sends fit, so 2. cap(c) would also be 2 here.', bn: 'channel-এর len হলো buffer-এ থাকা উপাদানের সংখ্যা: দুটোই জায়গা পেয়েছে, ২। এখানে cap(c)ও ২।' },
    },
  ],
  quiz: {
    id: 'goroutines-and-channels-quiz',
    title: { en: 'Quiz — Goroutines and Channels', bn: 'কুইজ — goroutine আর channel' },
    questions: [
      {
        id: 'goroutines-and-channels-q1',
        kind: 'mcq',
        topic: 'go: Goroutines and Channels',
        question: { en: 'A goroutine typically starts with how much stack?', bn: 'একটি goroutine কত স্ট্যাক নিয়ে শুরু হয়?' },
        options: [
          { en: '1 MB', bn: '1 MB' },
          { en: '8 KB, grown as needed', bn: '৮ KB, দরকার হলে বাড়ে' },
          { en: 'the thread’s full stack', bn: 'thread-এর পুরো stack' },
          { en: '64 KB fixed', bn: '64 KB fixed' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'The runtime starts at a few kilobytes and grows the stack by copying, which is what makes hundreds of thousands of goroutines plausible.', bn: 'runtime কয়েক KB দিয়ে শুরু করে, কপি করে স্ট্যাক বাড়ায় — তাই লক্ষ-কোটি goroutine অসম্ভব নয়।' },
      },
      {
        id: 'goroutines-and-channels-q2',
        kind: 'mcq',
        topic: 'go: Goroutines and Channels',
        question: { en: 'A select with a default clause…', bn: 'default থাকা select…' },
        options: [
          { en: 'runs forever', bn: 'runs forever' },
          {
            en: 'never blocks: it falls through immediately if nothing is ready',
            bn: 'কখনো ব্লক করে না: কিছু প্রস্তুত না-থাকলে সঙ্গে সঙ্গে বেরিয়ে আসে',
          },
          { en: 'is invalid Go', bn: 'is invalid Go' },
          { en: 'waits for the slowest case', bn: 'সবচেয়ে ধীর case-এর অপেক্ষা করে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'default makes select a poll instead of a wait — the standard way to implement non-blocking send/receive and priority clauses.', bn: 'default select-কে অপেক্ষার বদলে জিজ্ঞেসা বানায় — non-blocking send/receive আর priority শাখার রীতি।' },
      },
      {
        id: 'goroutines-and-channels-q3',
        kind: 'mcq',
        topic: 'go: Goroutines and Channels',
        question: { en: 'Context exists mainly to…', bn: 'context মূলত কিসের জন্য?' },
        options: [
          {
            en: 'pass request-scoped values and cancellation down a call tree',
            bn: 'একটি call বরাবর request-সম্পর্কিত মান বাতিলসহ পাঠানো',
          },
          { en: 'store the goroutine’s stack', bn: 'goroutine-এর stack রাখতে' },
          { en: 'replace channels', bn: 'channel-এর বদলে চলে' },
          { en: 'lock shared maps', bn: 'ভাগ করা map lock করতে' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'WithTimeout/WithCancel give every callee a Done() channel and a deadline, so one abandoned HTTP request can stop twenty workers instead of leaking them.', bn: 'WithTimeout/WithCancel প্রতিটি callee-কে Done() channel আর deadline দেয়, তাই একটি ছেড়ে-দেওয়া HTTP request কুড়িজন কর্মী থামাতে পারে, ফাঁকা leak নয়।' },
      },
      {
        id: 'goroutines-and-channels-q4',
        kind: 'mcq',
        topic: 'go: Goroutines and Channels',
        question: { en: 'Buffered channels…', bn: 'Buffered channel সম্পর্কে কোনটি ঠিক…' },
        options: [
          { en: 'make concurrency safe by themselves', bn: 'নিজে থেকেই concurrency নিরাপদ করে' },
          {
            en: 'decouple sender and receiver timing; they do not remove races',
            bn: 'লেখা আর পড়ার সময় আলাদা করে রাখে; race কমায় না',
          },
          { en: 'are faster than unbuffered', bn: 'unbuffered-এর চেয়ে দ্রুত' },
          { en: 'must be closed by the receiver', bn: 'receiver-কেই close করতে হয়' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'A buffer is a queue with capacity: it stops the sender blocking for a while. Ownership rules and races are unchanged, and the sender still closes.', bn: 'buffer হলো ধারণক্ষমতা-থাকা সারি: প্রেরক একটু আগে এগোতে পারে। মালিকানার নিয়ম আর race যেমন ছিল তেমনই, বন্ধও প্রেরকই করে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'testing-generics-and-modules',
    tech: 'go',
    title: { en: 'Tests, Generics and Modules', bn: 'test, generics আর module' },
  },
};
