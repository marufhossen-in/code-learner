import type { Lesson } from '../../../lib/types';

export const HelloGoAndToolchainLesson: Lesson = {
  slug: 'hello-go-and-toolchain',
  tech: 'go',
  title: { en: 'Your First Go Program', bn: 'প্রথম Go প্রোগ্রাম' },
  summary: { en: 'package main, func main, fmt.Println — and the three commands you will live in: go run, go build, go vet.', bn: 'package main, func main, fmt.Println — আর যে তিনটি কমান্ডেই দিন কাটবে: go run, go build, go vet।' },
  minutes: 8,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Your First Go Program', bn: 'WHAT — প্রথম Go প্রোগ্রাম' },
    },
    {
      type: 'para',
      text: { en: 'Create a folder, run go mod init example.com/hello, and write main.go. The import line names a package, not a file. fmt is the standard formatting package and Println is exported, which is why the P is capitalized: in Go, uppercase means exported. There is no public keyword and no private keyword; the first letter is the access flag, checked at compile time.', bn: 'একটি ফোল্ডার বানিয়ে go mod init example.com/hello চালান, তারপর main.go লিখুন। import লাইন file-এর নয়, package-এর নাম নেয়। fmt হলো standard formatting package আর Println তার exported function, যার কারণে P বড় হাতের: Go-তে বড় হাতের অক্ষর মানেই exported। public বা private keyword নেই; প্রথম অক্ষরই access নির্ধারণ করে, যা compile-সময়ে যাচাই হয়।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Go files are compiled, not interpreted: you ship one binary with the runtime inside it, so no visitor needs Go installed to run your tool.',
          bn: 'Go file interpret নয়, compile হয়: ভেতরে runtime-সহ একটি binary দিতে হয়, তাই চালাতে কারও Go ইনস্টল লাগে না।',
        },
        {
          en: 'Every file starts with a package clause; package main plus func main is the one shape that makes an executable.',
          bn: 'প্রতিটি file শুরু হয় package দিয়ে; package main + func main — একেই executable বানায়।',
        },
        {
          en: 'The compiler rejects unused imports and variables. That is not strictness for its own sake: it keeps dead code out of the tree.',
          bn: 'ব্যবহৃত হয়নি এমন import/variable compiler নামায় না। এটা কড়াপনা নয়: মৃত কোড গাছ থেকে দূরে রাখে।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'main.go',
      code: `package main

import (
	"fmt"
	"os"
)

func main() {
	names := []string{"Rahim", "Karim"} // 2 names in slice
	for i, n := range names {
		fmt.Printf("[%d] %s says: hi\n", i, n) // prints: [0] Rahim says: hi -> 2 lines
	}
	if len(names) == 0 {
		fmt.Fprintln(os.Stderr, "nobody here") // prints to stderr if 0 items
	}
}`,
      caption: { en: 'One loop, one if, one range. Notice the brace: the opening one must be on the same line as the statement — Go inserts a semicolon automatically at newlines, and this is the price.', bn: 'একটি loop, একটি if, একটি range। বন্ধনী খেয়াল করুন: খোলার বন্ধনী বিবৃতির লাইনেই থাকতে হবে — newline-এ Go নিজেই semicolon বসায়, এটাই তার মূল্য।' },
    },
    {
      type: 'table',
      head: [
        { en: 'command', bn: 'কমান্ড' },
        { en: 'what it does', bn: 'কী করে' },
        { en: 'when to use it', bn: 'কখন চালাবেন' },
      ],
      rows: [
        [
          { en: 'go run .', bn: 'go run .' },
          { en: 'compile to a temp file and execute it', bn: 'temp file-এ compile করে চালায়' },
          { en: 'while iterating', bn: 'লেখার সময়' },
        ],
        [
          { en: 'go build', bn: 'go build' },
          { en: 'produce a real binary in the folder', bn: 'ফোল্ডারে আসল binary তৈরি' },
          { en: 'before shipping', bn: 'ছাড়ার আগে' },
        ],
        [
          { en: 'go vet', bn: 'go vet' },
          {
            en: 'static checks: printf format mismatch, lost lock, self-assignment',
            bn: 'static চেক: printf format-বেমিল, হারানো lock, নিজের-কাছে-assignment',
          },
          { en: 'in CI, and on save', bn: 'CI-তে, আর save-এ' },
        ],
        [
          { en: 'go test ./...', bn: 'go test ./...' },
          { en: 'run every _test.go file in the module', bn: 'module-এর সব _test.go চালান' },
          { en: 'with -race for concurrency', bn: 'concurrency থাকলে -race সহ' },
        ],
        [
          { en: 'gofmt -l .', bn: 'gofmt -l .' },
          { en: 'list files whose formatting is not canonical', bn: 'যেসব file-এর ফরম্যাট মানসম্মত নয় সেগুলোর নাম' },
          { en: 'before committing', bn: 'commit-এর আগে' },
        ],
      ],
      caption: { en: 'These five commands are the whole daily workflow; go mod tidy fixes dependencies, go doc prints a package’s API.', bn: 'দিনের কাজ এই পাঁচটির মধ্যেই; go mod tidy dependency ঠিক করে, go doc package-এর API ছাপে।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'module',
          def: { en: 'A versioned unit of code, named by go.mod, e.g. example.com/hello.', bn: 'go.mod দিয়ে নাম-ঠিক করা সংস্করণযোগ্য কোডের একক, যেমন example.com/hello।' },
        },
        {
          term: 'package',
          def: { en: 'One directory of .go files that compile together and share a name.', bn: 'এক ডিরেক্টরির .go ফাইলগুলো যা একসাথে compile হয় আর নাম শেয়ার করে।' },
        },
        {
          term: 'exported',
          def: { en: 'An identifier starting A–Z; visible outside the package.', bn: 'A–Z দিয়ে শুরু identifier; package-এর বাইরে থেকে দেখা যায়।' },
        },
        {
          term: 'zero value',
          def: { en: 'What a variable holds before you assign: 0, false, "" or nil.', bn: 'assign করার আগে যা থাকে: 0, false, "" বা nil।' },
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
          title: { en: '1. Name the package', bn: '১. package নাম দিন' },
          text: { en: 'package main at the top of every file in the folder.', bn: 'ফোল্ডারের প্রতিটি file-এর শুরুতে package main।' },
        },
        {
          title: { en: '2. Write main()', bn: '২. main() লিখুন' },
          text: { en: 'func main() {} is the entry point; it takes no arguments and returns nothing.', bn: 'func main() {}-ই প্রবেশপথ; argument নেই, ফেরতও নেই।' },
        },
        {
          title: { en: '3. Import what you use', bn: '৩. যা ব্যবহার করব import' },
          text: { en: 'Unimported or unused code is a compile error, not a warning.', bn: 'import না-করা বা অব্যবহৃত কোড warning নয়, compile error।' },
        },
        {
          title: { en: '4. Run, then build', bn: '৪. চালান, তারপর build' },
          text: { en: 'go run . while writing; go build when the folder is worth keeping.', bn: 'লেখার সময় go run .; ফোল্ডার রাখার মতো হলে go build।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Your First Go Program: the moving parts', bn: 'প্রথম Go প্রোগ্রাম: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Your First Go Program">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Name the package</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">package main at the top of every file in the</text>
<text x="352" y="79" font-size="11" fill="currentColor">folder.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Write main()</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">func main() {} is the entry point; it takes no</text>
<text x="352" y="151" font-size="11" fill="currentColor">arguments and returns nothing.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Import what you use</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Unimported or unused code is a compile error,</text>
<text x="352" y="223" font-size="11" fill="currentColor">not a warning.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Run, then build</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">go run . while writing; go build when the</text>
<text x="352" y="295" font-size="11" fill="currentColor">folder is worth keeping.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">One binary, no runtime to install, and a compiler that will not let dead code through.</text>
</svg>`,
      caption: { en: 'One binary, no runtime to install, and a compiler that will not let dead code through.', bn: 'একটি binary, আলাদা করে runtime ইনস্টল করতে হয় না, আর compiler মৃত কোড ঢুকতেই দেয় না — এটাই Go-র দৈনন্দিন সুবিধে।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'One binary, no runtime to install, and a compiler that will not let dead code through.', bn: 'একটি binary, আলাদা করে runtime ইনস্টল করতে হয় না, আর compiler মৃত কোড ঢুকতেই দেয় না — এটাই Go-র দৈনন্দিন সুবিধে।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'A brace on the next line', bn: 'পরের লাইনে বন্ধনী' },
      text: { en: 'func main()\\n{ … } compiles into func main(); { … } — an empty function plus a stray block, and the error message looks nothing like the cause.', bn: 'func main()\\n{ … } লিখলে compile হয় func main(); { … } হয়ে — ফাঁকা function আর একটা বেহালা block, আর error বার্তা কারণের সাথে মেলে না।' },
    },
  ],
  exercises: [
    {
      id: 'hello-go-and-toolchain-ex1',
      kind: 'mcq',
      topic: 'go: Your First Go Program',
      question: { en: 'Why does fmt.Println work from another package but fmt.println would not?', bn: 'fmt.Println অন্য package থেকে চলে, fmt.println চলে না — কেন?' },
      options: [
        { en: 'Println is longer, so it is public', bn: 'Println বড়, তাই public' },
        {
          en: 'Capital first letter means exported; lowercase is package-private',
          bn: 'বড় হাতে শুরু হলেই exported, ছোট হাতেরটা package-এর ভেতরেই সীমাবদ্ধ',
        },
        { en: 'Println is a builtin; println is reserved', bn: 'Println builtin, আর println সংরক্ষিত নাম' },
        { en: 'Only functions with a return value can be exported', bn: 'যার return value আছে, শুধু সেটাই exported' },
      ],
      answer: 1,
      hint: { en: 'Go has no public keyword.', bn: 'Go-তে public keyword নেই।' },
      explanation: { en: 'Exported identifiers begin with an uppercase letter; anything lowercase stays inside the package. The lowercase println does exist in runtime but is not exported for ordinary use.', bn: 'Exported identifier বড় হাতে শুরু হয়; ছোট হাতেরটা package-এর ভিতরেই থাকে। ছোট হাতের println runtime-এ আছে, কিন্তু সাধারণ ব্যবহারের জন্য exported নয়।' },
    },
    {
      id: 'hello-go-and-toolchain-ex2',
      kind: 'mcq',
      topic: 'go: Your First Go Program',
      question: { en: 'Which command both compiles and runs your program in one step?', bn: 'কোন কমান্ডটি একধাপে compile-ও করে, চালায়ও?' },
      options: [
        { en: 'go build .', bn: 'go build .' },
        { en: 'go run .', bn: 'go run .' },
        { en: 'go test .', bn: 'go test .' },
        { en: 'go install .', bn: 'go install .' },
      ],
      answer: 1,
      hint: { en: 'Iterate fast, keep nothing.', bn: 'দ্রুত চালাতে, কিছু না-রাখতে।' },
      explanation: { en: 'go run . compiles to a temporary binary, executes it and deletes it; go build leaves you a file.', bn: 'go run . temp binary বানিয়ে চালিয়ে মুছে ফেলে; go build ফাইল রেখে দেয়।' },
    },
    {
      id: 'hello-go-and-toolchain-ex3',
      kind: 'fill',
      topic: 'go: Your First Go Program',
      question: { en: 'Write the import line this program needs to use fmt.Printf.', bn: 'fmt.Printf ব্যবহার করতে import লাইনটি লিখুন।' },
      answer: 'import "fmt"',
      accept: [
        'import "fmt"',
        'import ( "fmt" )',
      ],
      hint: { en: 'One package, one string.', bn: 'একটি package, একটি string।' },
      explanation: { en: 'Either the single-line form or import ( "fmt" ) — what the compiler demands is that the package is named and actually used.', bn: 'এক-লাইনে হোক বা import ( "fmt" ) — compiler চায় package-এর নাম থাকুক আর সেটা ব্যবহারও হোক।' },
    },
  ],
  quiz: {
    id: 'hello-go-and-toolchain-quiz',
    title: { en: 'Quiz — Your First Go Program', bn: 'কুইজ — প্রথম Go প্রোগ্রাম' },
    questions: [
      {
        id: 'hello-go-and-toolchain-q1',
        kind: 'mcq',
        topic: 'go: Your First Go Program',
        question: { en: 'What makes a Go program an executable rather than a library?', bn: 'Go প্রোগ্রাম library নয়, executable — কোনটি তা ঠিক করে?' },
        options: [
          { en: 'The file is named main.go', bn: 'file-এর নাম main.go' },
          { en: 'package main with a func main()', bn: 'package main with a func main()' },
          { en: 'go.mod contains an [install] section', bn: 'go.mod contains an [install] section' },
          { en: 'It imports os', bn: 'It imports os' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Only package main with func main() produces a runnable binary; every other package is a library imported by name.', bn: 'শুধু package main + func main() চালানোর binary দেয়; বাকি সব package নাম-ধরে import করার library।' },
      },
      {
        id: 'hello-go-and-toolchain-q2',
        kind: 'mcq',
        topic: 'go: Your First Go Program',
        question: { en: 'What is the value of var s string before you touch it?', bn: 'না-ছোঁয়া var s string-এর মান কী?' },
        options: [
          { en: 'nil', bn: 'nil' },
          { en: 'the empty string ""', bn: 'ফাঁকা string, অর্থাৎ ""' },
          { en: 'a compile error until assigned', bn: 'assign না-করা পর্যন্ত compile error' },
          { en: 'undefined', bn: 'undefined' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Go has no uninitialised locals: every type has a zero value, and for string that is "" (0 for numbers, false for bool, nil for pointers, slices and maps).', bn: 'Go-তে uninitialized local নেই: প্রতিটি type-এর zero value আছে, string-এর "" (সংখ্যায় ০, bool-এ false, pointer/slice/map-এ nil)।' },
      },
      {
        id: 'hello-go-and-toolchain-q3',
        kind: 'mcq',
        topic: 'go: Your First Go Program',
        question: { en: 'Why must an opening brace stay on its statement’s line?', bn: 'খোলার বন্ধনী কেন বিবৃতির লাইনেই থাকে?' },
        options: [
          { en: 'Style only; gofmt accepts either', bn: 'শুধু ভঙ্গির কথা; gofmt দুটোই মেনে নেয়' },
          {
            en: 'Go inserts a semicolon at the newline, splitting the statement',
            bn: ' newline-এ Go নিজেই semicolon বসিয়ে বিবৃতি ভেঙে দেয়',
          },
          { en: 'Braces are tokens in Go', bn: 'Go-তে বন্ধনী আলাদা token' },
          { en: 'The parser allows one line per function', bn: 'parser এক function-এর জন্য এক লাইন চায়' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Automatic semicolon insertion ends the statement at the line break, so a brace on the next line becomes a separate empty block.', bn: 'লাইন-ভাঙায় automatic semicolon বসে বিবৃতি শেষ করে দেয়, তাই পরের লাইনের বন্ধনী আলাদা ফাঁকা block হয়ে যায়।' },
      },
      {
        id: 'hello-go-and-toolchain-q4',
        kind: 'mcq',
        topic: 'go: Your First Go Program',
        question: { en: 'Which tool would catch fmt.Printf("%d", "text")?', bn: 'fmt.Printf("%d", "text") কোন টুলটি ধরবে?' },
        options: [
          { en: 'gofmt', bn: 'gofmt' },
          { en: 'go vet', bn: 'go vet' },
          { en: 'go mod tidy', bn: 'go mod tidy' },
          { en: 'go doc', bn: 'go doc' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'go vet checks printf verb/argument agreement (and other real bugs such as copying a lock or forgetting to release it). gofmt only reformats.', bn: 'go vet printf verb আর argument-এর মিল দেখে ( lock কপি বা ছাড়া-ভুলে-গেলেও ধরে)। gofmt শুধু সাজায়।' },
      },
    ],
  },
  nextLesson: {
    slug: 'variables-types-and-casting',
    tech: 'go',
    title: { en: 'Variables, Types and Casting', bn: 'variable, type আর casting' },
  },
};
