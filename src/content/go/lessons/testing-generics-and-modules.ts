import type { Lesson } from '../../../lib/types';

export const TestingGenericsAndModulesLesson: Lesson = {
  slug: 'testing-generics-and-modules',
  tech: 'go',
  title: { en: 'Tests, Generics and Modules', bn: 'test, generics আর module' },
  summary: { en: 'Table-driven tests with -race, generics with constraints, and a module graph that pins versions — the three professional habits that make Go code maintainable.', bn: '-race সহ table-driven test, constraint সহ generics, আর সংস্করণ-আটকানো module graph — Go কোড রক্ষণাবেক্ষণ-যোগ্য করার তিনটি পেশাদার অভ্যাস।' },
  minutes: 14,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Tests, Generics and Modules', bn: 'WHAT — test, generics আর module' },
    },
    {
      type: 'para',
      text: { en: 'Two things keep a Go program alive after the first week: tests that a stranger can run, and code that does not get copied for every new type. This page is go test, table-driven cases, generics for the shared logic, and the module file that pins what you depend on.', bn: 'প্রথম সপ্তাহ পার হওয়ার পর Go প্রোগ্রামকে বাঁচিয়ে রাখে দুটি জিনিস: পরীক্ষা যেগুলো একজন অচেনা মানুষও চালাতে পারবে, আর code যা প্রতিটি নতুন type-এর জন্য নকল করতে হয় না। এই পাতায় go test, টেবিল-চালিত কেস, শেয়ার করা logic-এর জন্য generics, আর কোন সংস্করণের উপর দাঁড়িয়ে আছে তা লিখে রাখার module file।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Tests are ordinary files ending _test.go, functions starting TestXxx(t *testing.T): no framework to install, no DSL to learn.',
          bn: 'test সাধারণ file, শুধু নাম _test.go, function TestXxx(t *testing.T): আলাদা framework নেই, নতুন ভাষা নেই।',
        },
        {
          en: 'Generics arrived with type parameters and constraints (any, comparable, ~int) — enough for containers and algorithms, not a type-system hobby.',
          bn: 'generics এসেছে type parameter আর constraint (any, comparable, ~int) দিয়ে — container/algorithm-এর জন্য যথেষ্ট, type-system-এর শখের জন্য নয়।',
        },
        {
          en: 'go.mod plus go.sum pin exact versions and verify checksums, so a build is reproducible six months later.',
          bn: 'go.mod আর go.sum নির্দিষ্ট সংস্করণ আটকে checksum যাচাই করে, তাই ছয় মাস পরেও build একই রকম।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'slice_test.go',
      code: `package slice_test

import (
	"slices"
	"testing"
)

func TestContains(t *testing.T) {
	cases := []struct {
		name string
		xs   []int
		want bool
	}{
		{"empty", nil, false},
		{"first", []int{7, 8}, true},
		{"missing", []int{1, 2, 3}, false},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := slices.Contains(tc.xs, 7); got != tc.want {
				t.Errorf("Contains(%v, 7) = %v, want %v", tc.xs, got, tc.want)
			}
		})
	}
}

// generic, with a constraint that keeps the operator legal
func Max[T ~int | ~float64](xs []T) (T, bool) {
	var best T
	for i, x := range xs {
		if i == 0 || x > best {
			best = x
		}
	}
	return best, len(xs) > 0
}`,
      caption: { en: 'A table, a subtest per row so the failure name tells you which case died, and one generic function whose constraint is the reason > compiles.', bn: 'একটি টেবিল, প্রতি সারিতে subtest — ব্যর্থতার নামই বলে দেয় কোন কেস, আর একটি generic function যার constraint-ই > চলাবার কারণ।' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'go test -race -cover ./... : race detector plus coverage on every push.',
          bn: 'go test -race -cover ./... : প্রতি push-এ race detector আর coverage।',
        },
        {
          en: 'Benchmarks are TestXxx replaced by BenchmarkXxx(b *testing.B); run with -bench . and keep benchstat for noise.',
          bn: 'benchmark = BenchmarkXxx(b *testing.B); -bench . দিয়ে চালিয়ে, noise দেখতে benchstat রাখুন।',
        },
        {
          en: 'Example functions with // Output: comments are compiled, run and diffed — documentation that cannot rot.',
          bn: '// Output: comment-ওয়ালা Example function compile হয়ে চলে আর মিলিয়ে দেখা হয় — নথি পচে যায় না।',
        },
        {
          en: 'Constraints can be your own interface: type Number interface { ~int | ~int64 | ~float64 }.',
          bn: 'নিজের interface-ও constraint: type Number interface { ~int | ~int64 | ~float64 }।',
        },
        {
          en: 'Type inference means Max([]int{…}) needs no [int] — write the annotation only when it clarifies.',
          bn: 'inference থাকায় Max([]int{…})-এ [int] লাগে না — দরকার হলেই লিখুন।',
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
          title: { en: '1. Write the table first', bn: '১. আগে টেবিল লিখুন' },
          text: { en: 'name, inputs, want. Cases cost one line each, and the loop reports by name.', bn: 'name, input, want। প্রতি কেস এক লাইন, loop নাম-সহ রিপোর্ট করে।' },
        },
        {
          title: { en: '2. Test from outside', bn: '২. বাইরে থেকে পরীক্ষা' },
          text: { en: 'package foo_test forces you through the exported API — the same door users use.', bn: 'package foo_test আপনাকে exported API দিয়েই যেতে বাধ্য করে — ব্যবহারকারীর দরজাই।' },
        },
        {
          title: { en: '3. Run with -race', bn: '৩. -race দিয়ে চালান' },
          text: { en: 'Concurrent code without the race detector is untested code.', bn: 'race detector ছাড়া সমান্তরাল কোড পরীক্ষা-হীন কোড।' },
        },
        {
          title: { en: '4. Pin and tidy', bn: '৪. আটকান, গোছান' },
          text: { en: 'go mod tidy before commit; go get pkg@v1.2.3 to bump; never edit go.sum by hand.', bn: 'commit-এর আগে go mod tidy; বাড়াতে go get pkg@v1.2.3; go.sum হাতে লিখবেন না।' },
        },
      ],
    },
    {
      type: 'visual',
      id: 'pipeline',
      scenario: 'build → test → vet → binary, and where each gate can fail',
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Go’s tooling is the standard library of process: table tests, -race, vet and gofmt replace three config files in most ecosystems.', bn: 'Go-র tooling-ই প্রক্রিয়ার standard library: table test, -race, vet আর gofmt বেশিরভাগ ecosystem-এর তিনটি config file বদলে দেয়।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Forgetting t.Fatal vs t.Error', bn: 't.Fatal আর t.Error-এর তফাত ভোলা' },
      text: { en: 't.Error marks a failure and keeps running — so the next line still dereferences the nil you just checked. Use t.Fatal (or Fatalf) when continuing would be meaningless or unsafe.', bn: 't.Error ব্যর্থতা চিহ্নিত করে চলতে থাকে — পরের লাইন সেই nil-কেই ছুঁয়ে ফেলে। চলানো অর্থহীন/অনিরাপদ হলে t.Fatal (বা Fatalf) ব্যবহার করুন।' },
    },
  ],
  exercises: [
    {
      id: 'testing-generics-and-modules-ex1',
      kind: 'mcq',
      topic: 'go: Tests, Generics and Modules',
      question: { en: 'Which command finds data races in tests?', bn: 'কোন কমান্ড test-এ data race খোঁজে?' },
      options: [
        { en: 'go vet', bn: 'go vet' },
        { en: 'go test -race', bn: 'go test -race' },
        { en: 'go build -s', bn: 'go build -s' },
        { en: 'gofmt -d', bn: 'gofmt -d' },
      ],
      answer: 1,
      hint: { en: 'It is a test flag, not a separate tool.', bn: 'এটি test-এর flag, আলাদা টুল নয়।' },
      explanation: { en: 'go test -race builds with the instrumentation and reports races with stacks; it costs 5–10× slowdown, so keep it on in CI, not in benchmarks.', bn: 'go test -race instrument করে build করে, stack সহ race জানায়; ৫–১০× ধীর হয়, তাই CI-তে রাখুন, benchmark-এ নয়।' },
    },
    {
      id: 'testing-generics-and-modules-ex2',
      kind: 'mcq',
      topic: 'go: Tests, Generics and Modules',
      question: { en: 'What does the constraint [T ~int | ~float64] allow?', bn: '[T ~int | ~float64] constraint কী মঞ্জুর করে?' },
      options: [
        { en: 'only exactly int and float64', bn: 'ঠিক int আর float64' },
        {
          en: 'any type whose underlying type is int or float64',
          bn: 'যে কোনো type, যার underlying type int বা float64',
        },
        { en: 'any comparable type', bn: 'যেকোনো comparable type' },
        { en: 'pointers to numbers', bn: 'সংখ্যার pointer' },
      ],
      answer: 1,
      hint: { en: 'The tilde has a meaning.', bn: 'tilde-এর অর্থ আছে।' },
      explanation: { en: '~int matches named types like type Celsius float64 — matching the underlying type rather than the name.', bn: '~int মানে type Celsius float64-এর মতো নাম-দেওয়া type-ও — নাম নয়, underlying type মিলছে।' },
    },
    {
      id: 'testing-generics-and-modules-ex3',
      kind: 'fill',
      topic: 'go: Tests, Generics and Modules',
      question: { en: 'Write the test function signature the go tool requires.', bn: 'go টুল যে test function স্বাক্ষর চায় তা লিখুন।' },
      answer: 'func TestName(t *testing.T)',
      accept: [
        'func TestName(t *testing.T)',
        'func TestX(t *testing.T)',
        'func Test(t *testing.T)',
      ],
      hint: { en: 'Test + capital + one parameter.', bn: 'Test + বড় হাত + একটি parameter।' },
      explanation: { en: 'func TestXxx(t *testing.T) with an exported name beginning Test; that is the entire registration mechanism.', bn: 'func TestXxx(t *testing.T), নাম Test দিয়ে শুরু ও exported; পুরো নিবন্ধন-পদ্ধতিটুকুই এটাই।' },
    },
  ],
  quiz: {
    id: 'testing-generics-and-modules-quiz',
    title: { en: 'Quiz — Tests, Generics and Modules', bn: 'কুইজ — test, generics আর module' },
    questions: [
      {
        id: 'testing-generics-and-modules-q1',
        kind: 'mcq',
        topic: 'go: Tests, Generics and Modules',
        question: { en: 'Where do Go tests live?', bn: 'Go-র test কোথায় থাকে?' },
        options: [
          { en: 'in a /spec folder', bn: '/spec ফোল্ডারে' },
          { en: 'as _test.go files beside the code', bn: 'কোডের পাশেই _test.go নামে' },
          { en: 'in comments', bn: 'in comments' },
          { en: 'in the module cache', bn: 'module cache-এ' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Same package (or pkg_test for black-box), same directory — no separate tree to configure.', bn: 'একই package (কালো-বাক্স হলে pkg_test), একই ডিরেক্টরি — আলাদা গাছ সাজাতে হয় না।' },
      },
      {
        id: 'testing-generics-and-modules-q2',
        kind: 'mcq',
        topic: 'go: Tests, Generics and Modules',
        question: { en: 'generics in Go are written with…', bn: 'Go-তে generics লেখা হয়…' },
        options: [
          { en: 'angle brackets like C++', bn: 'C++-এর মতো কোণ বন্ধনীতে' },
          {
            en: 'square brackets for type parameters: func F[T any](x T)',
            bn: 'square brackets for type parameters: func F[T any](x T)',
          },
          { en: 'templates plus concepts', bn: 'C++-এর মতো template আর concepts' },
          { en: 'a macro system', bn: 'macro system দিয়ে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Type parameters sit in square brackets after the name; the constraint is the type of the parameter, any being the loosest.', bn: 'নামের পর বর্গ-বন্ধনীতে type parameter; constraint হলো সেই parameter-এর type, সবচেয়ে আলগা any।' },
      },
      {
        id: 'testing-generics-and-modules-q3',
        kind: 'mcq',
        topic: 'go: Tests, Generics and Modules',
        question: { en: 'What is the go.sum file there to do?', bn: 'go.sum ফাইলটি আসলে কী করে?' },
        options: [
          { en: 'list the author’s dependencies for humans', bn: 'মানুষ পড়ার জন্য dependency-এর তালিকা' },
          {
            en: 'record module hashes so downloads are verified',
            bn: 'module-এর hash লিখে রাখে, যাতে download যাচাই করা যায়',
          },
          { en: 'pin the Go version', bn: 'Go-র সংস্করণ স্থির করতে' },
          { en: 'order the import block', bn: 'import block সাজাতে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'It holds cryptographic hashes of each module version; a mismatched or tampered download fails the build.', bn: 'প্রতি module সংস্করণের hash সেখানে; মিল না-হলে বা ছেঁড়া হলে build ব্যর্থ হয়।' },
      },
      {
        id: 'testing-generics-and-modules-q4',
        kind: 'mcq',
        topic: 'go: Tests, Generics and Modules',
        question: { en: 't.Run inside a loop buys you…', bn: 'loop-এর ভিতরে t.Run করলে পাওয়া যায়…' },
        options: [
          { en: 'parallelism by default', bn: 'নিজে থেকেই parallel' },
          {
            en: 'named subtests you can run with -run and read individually',
            bn: 'নাম-দেওয়া subtest, -run দিয়ে আলাদা চালানো ও পড়া যায়',
          },
          { en: 'automatic table generation', bn: 'আপনা থেকেই table তৈরি' },
          { en: 'a retry on failure', bn: 'ব্যর্থ হলে আবার চেষ্টা' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Each subtest gets its own name and output, so a failure says which row died, and go test -run TestX/first isolates it. Real parallelism needs t.Parallel too.', bn: 'প্রতি subtest-এর নিজস্ব নাম-আউটপুট, ব্যর্থতায় বলে দেয় কোন সারি; go test -run TestX/first দিয়ে আলাদাও চালানো যায়। সত্যিকারের সমান্তরাল চাইলে t.Parallel-ও লাগে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'measuring-and-the-garbage-collector',
    tech: 'go',
    title: { en: 'Measuring, Allocation and the Collector', bn: 'মাপা, বরাদ্দ আর garbage collector' },
  },
};
