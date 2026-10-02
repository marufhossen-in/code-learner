import type { Lesson } from '../../../lib/types';

/**
 * Seven pages of theirs, one page of ours: naming, casting, sticking text together, the format
 * method, escape characters, what counts as false, and every arithmetic operator including the two
 * that surprise people coming from other languages (floor division and modulo with a negative
 * left side). Each point prints real values; all of them are worked out by hand above the line.
 */
export const textAndNumbersLesson: Lesson = {
  slug: 'python-text-numbers',
  tech: 'python',
  title: {
    en: 'Text and numbers, point by point: names, casting, format, escapes, truth, arithmetic',
    bn: 'লেখা আর সংখ্যা, পয়েন্ট ধরে: নাম, রূপান্তর, ফরম্যাট, escape, সত্যতা, গণিত'
  },
  summary: {
    en: 'Names have rules, and the compiler enforces them. Values have types, and one call moves a value between them. Text has two ways to be built and one way to be aligned. And of the seven arithmetic operators, two behave differently in Python than they do almost everywhere else.',
    bn: 'নামের নিয়ম আছে যা interpreter মানতে বাধ্য করে। মানের ধরন আছে যা এক কলে বদলানো যায়। লেখা বানানোর দুই পথ আছে, সারিবদ্ধ করার একটি। আর সাতটি গাণিতিক operator-এর দুটি Python-এ অন্য জায়গার চেয়ে আলাদা আচরণ করে।'
  },
  minutes: 24,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'What sits on this page', bn: 'এই পাতায় যা আছে' } },
    {
      type: 'para',
      text: {
        en: 'Read the line above a comment, decide what you think prints, then run it. Being wrong here is cheap, and every mistake below is one people make in real files.',
        bn: 'কমেন্টের উপরের লাইনটি পড়ুন, ঠিক করুন কী ছাপা হবে, তারপর চালান। এখানে ভুল করা সস্তা, আর নিচের প্রতিটি ভুলই বাস্তব ফাইলে ঘটে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'identifier', def: { en: 'a name you write for a value, a function or a container', bn: 'যে নাম আপনি কোনো মান, ফাংশন বা ধারকের জন্য লেখেন' } },
        { term: 'explicit conversion', def: { en: 'naming the type you want, instead of trusting the language to pick', bn: 'কোন ধরন চান তা বলে দেওয়া, ভাষাকে বিবেচনা ছেড়ে না দিয়ে' } },
        { term: 'truthy', def: { en: 'a value that counts as true inside an if, without being the word True', bn: 'যে মান if-এর ভেতরে সত্য হিসেবে ধরা হয়, True শব্দটি না হয়েও' } },
        { term: 'floor division', def: { en: 'divide, then round down toward minus infinity rather than toward zero', bn: 'ভাগ করার পর শূন্যের দিকে নয়, ঋণাত্মক অসীমের দিকে নিচে নামানো' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. Variable names: 4 rules, 1 convention', bn: '1. ভেরিয়েবল নাম: 4 টি নিয়ম, 1 টি রীতি' } },
    {
      type: 'para',
      text: {
        en: 'A name may hold letters, digits and underscores, and it may not begin with a digit. Underscores are letters as far as Python is concerned, which is why the language itself uses them.',
        bn: 'একটি নামে অক্ষর, অঙ্ক আর underscore থাকতে পারে, কিন্তু অঙ্ক দিয়ে শুরু হতে পারে না। Python-এর কাছে underscore-ও অক্ষর, তাই ভাষাটি নিজেও এগুলো ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'names.py',
      code: `user_id = 7          # snake_case: the convention for variables and functions
UserName = 'Asha'    # legal, but reserved by convention for classes
_private = 'only a signal'   # nothing is hidden by the underscore, it is a note
_total2 = 12

# 2bad = 1        # SyntaxError: invalid decimal literal
# class = 1       # SyntaxError: invalid syntax   a keyword cannot be a name
# my-name = 1     # parsed as subtraction: my minus name
# def = 1         # keywords: def, class, if, for, while, in, is, not, and, or, None

print(user_id, UserName, _total2)      # 7 Asha 12
print(len('private') > 0, '_x'.isidentifier(), '2x'.isidentifier())   # True True False
print(keyword_count := 35, 'keywords in this language version')        # 35 keywords in this language version`,
      caption: {
        en: 'isidentifier is the honest test when a name comes from user input, and keywords move between versions, so count them rather than memorise the list.',
        bn: 'নাম যদি ব্যবহারকারীর ইনপুট থেকে আসে তবে isidentifier-ই সৎ পরীক্ষা; আর keyword সংখ্যা ভারশনে বদলায়, তাই মুখস্থ না করে গুনে নিন।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Casting: say the type you mean', bn: '২. Casting: কোন ধরন চান বলে দিন' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'casting.py',
      code: `age_text = '42'
print(int(age_text) + 1)              # 43
print(str(43) + ' years')             # 43 years
print(float('3.5'))                   # 3.5
print(int(3.9))                       # 3   truncates toward zero, it does not round
print(int(-3.9))                      # -3  toward zero, so up in this case
print(int('3.0'))                     # ValueError: invalid literal for int() with base 10: '3.0'
print(int(float('3.0')))              # 3   the two-step when the text came from a file

print(bool(0), bool(1), bool(''), bool('0'), bool([]))
# False True False True False   the string '0' is not the number 0`,
      caption: {
        en: 'The two failures people meet are int on text holding a dot, and believing bool of a non-empty string. Both cost an afternoon once.',
        bn: 'দুইটি ব্যর্থতাই সবাই পান: বিন্দু থাকা টেক্সটে int() চালাওয়া, আর খালি নয় এমন string-কে False ভাবা। প্রতিটিতে একবার বিকেল হারায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Concatenating: plus, multiply, join', bn: '৩. জোড়া: plus, গুণ, join' } },
    {
      type: 'para',
      text: {
        en: 'The plus sign welds two strings and refuses a string with a number. For more than two pieces, join is both faster to read and faster to run, because it does not rebuild the result on every step.',
        bn: 'plus চিহ্ন দুটি string জোড়া দেয়, কিন্তু number-এর সঙ্গে দিলে অস্বীকার করে। দুটির বেশি টুকরো হলে join পড়তেও সহজ, চলতেও দ্রুত—প্রতি ধাপে ফলাফল নতুন করে বানায় না বলে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'concat.py',
      code: `first, last = 'Asha', 'Rahman'
print(first + ' ' + last)            # Asha Rahman
print('-' * 12)                      # ------------
print(first + 42)                    # TypeError: can only concatenate str (not "int") to str
print(first + str(42))          # Asha42

words = ['padma', 'bridge', 'at', 'dusk']
print(' '.join(words))               # padma bridge at dusk
print(', '.join(str(n) for n in [1, 2, 3]))    # 1, 2, 3
print(''.join(['a', 'b']))           # ab

# join wants strings, and it is the one that says so
try:
    ' '.join([1, 2])                 # TypeError: sequence item 0: expected str instance, int found
except TypeError as e:
    print('TypeError:', e)`,
      caption: {
        en: 'The error names the item and the type it wanted, which is the clearest sentence Python ever writes. Read it before reaching for plus.',
        bn: 'এই error বলে দেয় কোন উপাদানে কী চাইত—Python-এর লেখা সবচেয়ে স্পষ্ট বাক্যগুলোর একটি। plus নেওয়ার আগে এটি পড়ুন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The format method: width, decimals, signs', bn: '৪. format মেথড: প্রস্থ, দশমিক, চিহ্ন' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'fmt.py',
      code: `print('{} of {}'.format(3, 10))              # 3 of 10
print('{1} before {0}'.format('b', 'a'))     # a before b
print('{name} scored {score}'.format(name='Asha', score=88))   # Asha scored 88

print('[{:>8.2f}]'.format(3.14159))          # [    3.14]  eight wide, right aligned
print('[{:8.2f}]'.format(3.14159))           # [    3.14]  the default is also right
print('[{:<8}]'.format('id'))                # [id      ]  left aligned
print('[{:^8}]'.format('id'))                # [   id   ]  centred
print('{:,}'.format(1234567))                # 1,234,567
print('{:+.1f} {:-.1f}'.format(4.2, -4.2))   # +4.2 -4.2
print('{:.0f} {:.0f}'.format(2.5, 3.5))      # 2 4   ties go to the even neighbour
print('{:#x} {:#b} {:04d}'.format(255, 5, 7))   # 0xff 0b101 0007`,
      caption: {
        en: 'Alignment is what makes a table readable in a terminal. Write the width before you need it, because the numbers that matter are the wide ones.',
        bn: 'টার্মিনালে টেবিল পড়ার যোগ্য করে তোলে সারিবদ্ধতা। প্রস্থ আগেই লিখুন—বড় সংখ্যাই যেখানে সব লাইন নড়িয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Escape characters, and the raw string that skips them', bn: '৫. escape অক্ষর, আর raw string যে সেগুলো এড়ায়' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'escape.py',
      code: `print('a\\tb')                 # a       b   a tab between
print('line1\\nline2')         # two lines
print('back\\\\slash')          # backslash
print('say \\'hi\\'')          # say 'hi'
print('\\x41\\u20ac')          # A€   hex codepoint, then the euro sign
print(len('\\n'))              # 1   the escape is one character, not two

path = r'C:\\Users\\name\\file.txt'
print(path)                   # C:\\Users\\name\\file.txt   raw: backslashes stay put
print(len(path))              # 22
print(r'no\\t' == 'no' + chr(9))   # False  a raw string keeps the letters t
print('tab' + chr(9) + 'here')     # tab<TAB>here`,
      caption: {
        en: 'Windows paths and regular expressions are where raw strings pay for themselves: prefix r and stop doubling every backslash in sight.',
        bn: 'raw string-এর দরকার আসলে Windows path আর regular expression-এ: শুধু r লিখুন, প্রতিটি ব্যাকস্ল্যাশ দুবার লেখা শেষ।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Boolean operations: and, or, not, and what is false', bn: '৬. বুলিয়ান: and, or, not, আর কী মিথ্যা' } },
    {
      type: 'para',
      text: {
        en: 'Only a short list of values is false, and everything else is true, whatever it holds. The second surprise is that and and or return a value, not a verdict.',
        bn: 'ছোট এক তালিকার বাইরে সব মিথ্যা, বাকি সব সত্য—ভেতরে যা-ই থাক। দ্বিতীয় আশ্চর্য: and আর or রায় ফেরত দেয় না, মান ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'truth.py',
      code: `# everything on this line is False
print(bool(0), bool(0.0), bool(''), bool([]), bool({}), bool(set()), bool(None), bool(False))
# False False False False False False False False

print(bool('0'), bool(' '), bool([0]), bool({'a': 0}))   # True True True True

print(0 or 'fallback')        # fallback     the left was false, so the right is returned
print('first' or 'second')    # first        short-circuited, second never looked at
print(1 and 2)                # 2
print([] and 'skipped')       # []
print(not 'a')                # False
print(not 0)                  # True

print(0 == False, 0 is False)      # True False   equal, but not the same object
print(256 is 256, 1000 is 1000)   # True False   small ints are shared, big ones are not`,
      caption: {
        en: 'Use is for None and nothing else. Comparing numbers with is works by accident on the small cached ones and fails politely on the rest.',
        bn: 'is শুধু None-এর জন্য। ছোট সংখ্যা cache-এ শেয়ার হয় বলে is কখনো কাজ করে মনে হয়, বড় সংখ্যায় হার মানে—আর সেটিই আসল আচরণ।'
      }
    },
    {
      type: 'table',
      head: [{ en: 'Operator', bn: 'Operator' }, { en: 'Reads as', bn: 'যা বোঝায়' }, { en: 'Example', bn: 'উদাহরণ' }],
      rows: [
        [{ en: '/', bn: '/' }, { en: 'true division, always a float', bn: 'সত্যিকারের ভাগ, ফল সবসময় float' }, { en: '7 / 2 gives 3.5', bn: '7 / 2 দেয় 3.5' }],
        [{ en: '//', bn: '//' }, { en: 'floor division, down toward minus infinity', bn: 'নিচে-ভাগ, ঋণাত্মক অসীমের দিকে' }, { en: '7 // 2 gives 3, -7 // 2 gives -4', bn: '7 // 2 দেয় 3, -7 // 2 দেয় -4' }],
        [{ en: '%', bn: '%' }, { en: 'remainder, sign follows the right side', bn: 'ভাগশেষ, চিহ্ন ডান পাশ দেখে' }, { en: '-7 % 2 gives 1, 7 % -2 gives -1', bn: '-7 % 2 দেয় 1, 7 % -2 দেয় -1' }],
        [{ en: '**', bn: '**' }, { en: 'power, right associative', bn: 'ঘাত, ডান দিক থেকে যুক্ত হয়' }, { en: '2 ** 3 ** 2 gives 512', bn: '2 ** 3 ** 2 দেয় 512' }],
        [{ en: 'divmod', bn: 'divmod' }, { en: 'both at once, as a pair', bn: 'দুটোই একসঙ্গে, জোড়া হিসেবে' }, { en: 'divmod(7, 2) gives (3, 1)', bn: 'divmod(7, 2) দেয় (3, 1)' }]
      ],
      caption: { en: 'The two rows that bite are the second and third: on most other languages, minus seven over two rounds to minus three.', bn: 'দুই সারি সবচেয়ে কামড়ায়—দ্বিতীয় ও তৃতীয়: অন্য ভাষায় ঋণাত্মক সাত ভাগ দুই সাধারণত ঋণাত্মক তিন হয়।' }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Arithmetic: precedence, and the two odd ones', bn: '৭. গণিত: অগ্রাধিকার, আর দুটি বিস্ময়' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'arith.py',
      code: `print(1 + 2 * 3 ** 2)        # 19   power first, then times, then plus
print((1 + 2) * 3 ** 2)      # 27
print(2 ** 3 ** 2)           # 512  the exponent chain runs right to left: 2 ** 9
print(-2 ** 2)               # -4   unary minus binds looser than power
print(7 / 2, 7 // 2, 7 % 2)  # 3.5 3 1
print(-7 // 2, -7 % 2)       # -4 1     both follow the floor rule
print(divmod(-7, 2))         # (-4, 1)  and the pair multiplies back: -4 * 2 + 1 = -7
print(2 ** -1)               # 0.25   a negative power returns a float
print(abs(-4), round(2.675, 2), round(2.5), round(3.5))   # 4 2.67 2 4
print(0.1 + 0.2 == 0.3)      # False   binary fractions: the sum is 0.30000000000000004
print(round(0.1 + 0.2, 10) == 0.3)   # True  comparing with a tolerance, or a decimal type`,
      caption: {
        en: 'The last three lines answer almost every surprise in a numeric report: rounding is banker style, floats are binary, and equality is the wrong question.',
        bn: 'শেষ তিন লাইনই সংখ্যার প্রতিটি অস্বস্তির উত্তর: round সমান-জোড়া নিয়ম মানে, float দ্বিমূলক, আর সমতা প্রশ্নটাই ভুল।'
      }
    },

    { type: 'heading', id: 'how', text: { en: 'How to decide which form to write', bn: 'কোন ধরনের লেখাটি বসবে কীভাবে ঠিক করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Build one string, one variable', bn: 'একটি string, একটি ভেরিয়েবল' }, text: { en: 'Use an f-string, because the value sits where the reader sees it.', bn: 'f-string ব্যবহার করুন, মানটি ঠিক যেখানে পাঠক দেখবে সেখানেই থাকে।' } },
        { title: { en: 'Build one string, values in a tuple', bn: 'একটি string, মান জোড়ায়' }, text: { en: 'Use the format method or percent style: the template stays reusable in a log line.', bn: 'format মেথড ব্যবহার করুন: ঢাঁচাটি লগ-লাইনে বারবার লাগে।' } },
        { title: { en: 'Many pieces of one string', bn: 'এক string-এর অনেক টুকরো' }, text: { en: 'Use join, since plus rebuilds the whole text on every piece.', bn: 'join দিন, কারণ প্রতিটি টুকরোয় plus পুরো লেখাটি আবার বানায়।' } },
        { title: { en: 'A number arriving as text', bn: 'টেক্সট হয়ে আসা সংখ্যা' }, text: { en: 'Cast once at the edge, then work in numbers, and never format a number you still need to add.', bn: 'প্রান্তে একবারই রূপ দিন, তারপর সংখ্যায় কাজ করুন—যেটিতে যোগ করবেন তাকে ফরম্যাট করবেন না।' } },
        { title: { en: 'A float you must not trust', bn: 'যে float-এ ভরসা রাখা যাবে না' }, text: { en: 'Compare with a tolerance, or reach for the decimal module when money is involved.', bn: 'সহনশীলতা দিয়ে তুলনা করুন, অর্থের ব্যাপার হলে decimal মডিউল নিন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Floor division: where -7 over 2 lands', bn: 'নিচে-ভাগ: -7 // 2 কোথায় পড়ে' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="a number line showing that truncation and flooring differ for negative results"><line x1="40" y1="112" x2="620" y2="112" stroke="currentColor" stroke-width="1.3"/><g font-size="11" fill="currentColor"><text x="90" y="132" text-anchor="middle">-4</text><text x="240" y="132" text-anchor="middle">-3</text><text x="390" y="132" text-anchor="middle">-2</text><text x="540" y="132" text-anchor="middle">-1</text><path d="M315 112 V86" stroke="currentColor" stroke-width="1.2"/><text x="315" y="76" text-anchor="middle">-7 / 2 = -3.5</text></g><g font-size="11" fill="currentColor"><text x="240" y="60" text-anchor="middle">truncation stops here: int(-3.5) = -3</text><path d="M240 66 V104" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/><text x="90" y="42" text-anchor="middle">floor goes down: -7 // 2 = -4</text><path d="M90 48 V104" stroke="currentColor" stroke-width="1.1"/></g><g font-size="10" fill="currentColor" opacity=".8"><text x="40" y="172">remainder follows the sign of the divisor, so -7 % 2 = 1 and -4 * 2 + 1 = -7 exactly.</text></g></svg>`,
      caption: { en: 'Everything about Python integer division is decided by one rule: the result never moves up the number line.', bn: 'পূর্ণসংখ্যা ভাগের সব কিছু এক নিয়মে ঠিক: ফল সংখ্যা-রেখায় কখনো ওপরে যায় না।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: {
        en: 'Three of these points are the ones interviews ask: what bool of a string holding zero gives, what -7 double-slash two gives, and why 0.1 plus 0.2 is not 0.3.',
        bn: '3 টি পয়েন্ট ইন্টারভিউতে আসে: শূন্য ধরা string-এ bool কী দেয়, -7 // 2 কত, আর 0.1 + 0.2 কেন 0.3 নয়।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The mistake that ships', bn: 'যে ভুলটি প্রোডাকশনে যায়' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Casting inside a loop, on the whole file', bn: 'লুপের ভেতর পুরো ফাইল রূপান্তর' },
      text: {
        en: 'Reading a CSV and calling float on every column, every row, even the columns only printed once. Convert at the edge for the fields you compute on, keep text for the fields you only echo, and the script stops spending its time in conversions nobody reads.',
        bn: 'CSV পড়ে প্রতিটি সারির প্রতিটি কলামে float() ডাকা, যে কলামগুলো কেবল একবার ছাপা হয় সেগুলোতেও। গণনা যে কলামে করবেন শুধু সেগুলো প্রান্তে রূপ দিন, শুধু দেখানোর কলাম টেক্সটই রাখুন—তখন স্ক্রিপ্টের সময় রূপান্তরে উড়ে যাওয়া বন্ধ হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'python-text-numbers-ex1', kind: 'predict', topic: 'python: Text and numbers',
      question: { en: 'What do the two prints show?', bn: 'দুটি print কী কী দেখায়?' },
      code: `print(-7 // 2)\nprint(-7 % 2)`,
      answer: '-4 and 1',
      accept: ['-4 and 1', '-4, 1', '-4 1', '-4  1'],
      hint: { en: 'Floor means down the number line, and the pair must multiply back.', bn: 'floor মানে সংখ্যা-রেখায় নিচে, আর জোড়াটি গুণ করলে আগের মান ফিরতে হবে।' },
      explanation: { en: 'Floor division gives minus four, so the remainder is one: minus four times two plus one is minus seven exactly.', bn: 'নিচে-ভাগ দেয় ঋণাত্মক চার, তাই ভাগশেষ এক: ঋণাত্মক চার গুণ দুই যোগ এক = ঋণাত্মক সাত, হুবহু।' }
    },
    {
      id: 'python-text-numbers-ex2', kind: 'mcq', topic: 'python: Text and numbers',
      question: { en: 'Which expression is True?', bn: 'কোনটি True?' },
      options: [
        { en: "bool('0')", bn: "bool('0')" },
        { en: 'bool([])', bn: 'bool([])' },
        { en: 'bool(0.0)', bn: 'bool(0.0)' },
        { en: 'bool(None)', bn: 'bool(None)' }
      ],
      answer: 0,
      hint: { en: 'Emptiness decides, not the character inside.', bn: 'খালি কি না তা দেখা হয়, ভেতরের অক্ষর নয়।' },
      explanation: { en: 'A string with one character in it is not empty, so it is truthy even when that character is zero. The other three are the classic false values.', bn: 'একটি অক্ষর থাকা string খালি নয়, তাই সত্য—অক্ষরটি শূন্য হলেও। বাকি তিনটিই ধ্রুপদী মিথ্যা মান।' }
    },
    {
      id: 'python-text-numbers-ex3', kind: 'predict', topic: 'python: Text and numbers',
      question: { en: 'Fill the format spec so the number prints right aligned in 6 columns with 2 decimals.', bn: 'ফাঁকা জায়গায় কী ফরম্যাট স্পেক লিখলে সংখ্যাটি 6 কলামে ডানে সাজানো 2 ঘর দশমিকে ছাপবে?' },
      code: `print('[{:____}]'.format(3.14159))   # [  3.14]`,
      answer: '>6.2f',
      accept: ['>6.2f', '6.2f', '>6,.2f'],
      hint: { en: 'Width comes after the alignment mark, precision after the dot.', bn: 'প্রস্থ আসে সারিবদ্ধতার পরে, দশমিক-নির্ভুলতা বিন্দুর পরে।' },
      explanation: { en: 'Right alignment is the default for numbers, so 6.2f alone also works. The spec is align, then width, then dot and precision, then the type letter f.', bn: 'সংখ্যার ডানে-সাজানো ডিফল্ট, তাই 6.2f একাই চলবে। ক্রম: সারিবদ্ধতা, প্রস্থ, বিন্দু, নির্ভুলতা, ধরনের অক্ষর।' }
    },
    {
      id: 'python-text-numbers-ex4', kind: 'predict', topic: 'python: Text and numbers',
      question: { en: 'What does the last line print?', bn: 'শেষ লাইনটি কী ছাপে?' },
      code: `print('a' + str(1))\nprint('a' * int('2'))\nprint(int('2') + 1)`,
      answer: '3',
      accept: ['3'],
      hint: { en: 'The third line adds numbers, not letters.', bn: 'তৃতীয় লাইনে যোগ হয় সংখ্যা, অক্ষর নয়।' },
      explanation: { en: 'The first two lines give a1 and aa, and the third gives the integer three. Every cast there happens before the operator runs.', bn: 'প্রথম 2 টি লাইন দেয় a1 আর aa, এবং তৃতীয় লাইন দেয় পূর্ণসংখ্যা 3। প্রতিটি রূপান্তর operator চলার আগেই হয়।' }
    }
  ],
  quiz: {
    id: 'python-text-numbers-quiz',
    title: { en: 'Quiz — text and numbers', bn: 'কুইজ — লেখা আর সংখ্যা' },
    questions: [
      {
        id: 'python-text-numbers-q1', kind: 'mcq', topic: 'python: Text and numbers',
        question: { en: 'Which name is legal in Python?', bn: 'কোন নামটি Python-এ বৈধ?' },
        options: [
          { en: '_score2', bn: '_score2' },
          { en: '2score', bn: '2score' },
          { en: 'my-score', bn: 'my-score' },
          { en: 'class', bn: 'class' }
        ],
        answer: 0,
        hint: { en: 'Leading digit, a hyphen and a keyword each break it.', bn: 'অঙ্ক দিয়ে শুরু, হাইফেন আর একটি keyword—তিনটিই ভাঙে।' },
        explanation: { en: 'Underscores and digits after the first character are fine. A hyphen is read as subtraction, so that line is an expression, not a name.', bn: 'প্রথম চিহ্নের পর underscore ও অঙ্ক চলবে। হাইফেন বিয়োগ হিসেবে পড়া হয়, তাই লাইনটি নাম নয়, অভিব্যক্তি।' }
      },
      {
        id: 'python-text-numbers-q2', kind: 'mcq', topic: 'python: Text and numbers',
        question: { en: 'What is 0.1 + 0.2 == 0.3 in Python?', bn: 'Python-এ 0.1 + 0.2 == 0.3 কী?' },
        options: [
          { en: 'False, because both sides are binary fractions', bn: 'False, দুই পাশই দ্বিমূলক ভগ্নাংশ' },
          { en: 'True, arithmetic is exact', bn: 'True, গণিত নিখুঁত' },
          { en: 'A TypeError', bn: 'TypeError' },
          { en: 'False, because of rounding mode in float addition only', bn: 'False, কারণ float যোগে রাউন্ডিং মোড আছে' }
        ],
        answer: 0,
        hint: { en: 'Ask what one tenth looks like in base two.', bn: 'বেস 2 বা দ্বিমূলকে 1 দশমাংশ কেমন দেখায় ভাবুন।' },
        explanation: { en: 'One tenth has no finite binary form, so the sum carries a tail of four in the seventeenth place. Compare with a tolerance, or use decimal.', bn: 'দশ ভাগের এক ভাগের দ্বিমূলক সসীম রূপ নেই, তাই যোগফলে ১৭তম ঘরে 4 এর একটি অবশেষ থাকে। সহনশীলতা দিয়ে তুলনা করুন, নয়তো decimal নিন।' }
      },
      {
        id: 'python-text-numbers-q3', kind: 'predict', topic: 'python: Text and numbers',
        question: { en: 'What does the print show?', bn: 'print কী দেখায়?' },
        code: `print('{:>4}{}'.format('ab', '!'))`,
        answer: '  ab!',
        accept: ['  ab!', 'ab!', '  ab !'],
        hint: { en: 'Four columns wide, right aligned, then the second value follows at once.', bn: 'চার কলাম প্রস্থ, ডানে সাজানো, তার পরেই দ্বিতীয় মান।' },
        explanation: { en: 'The field is four wide and holds two characters, so two spaces land in front. The empty second spec prints the exclamation directly after it.', bn: 'ক্ষেত্রটির প্রস্থ 4 এবং এটি 2 টি অক্ষর ধরে, তাই সামনে 2 টি ফাঁকা স্পেস পড়ে। ফাঁকা দ্বিতীয় ঢাঁচাটি ঠিক তার পরেই বিস্ময়ক ছাপে।' }
      },
      {
        id: 'python-text-numbers-q4', kind: 'mcq', topic: 'python: Text and numbers',
        question: { en: 'Which path keeps Windows file paths shortest to write?', bn: 'Windows ফাইল-পথ লেখায় কোন পথটি ছোট?' },
        options: [
          { en: 'a raw string: r"path\\to\\file"', bn: 'একটি raw string: r"path\\to\\file"' },
          { en: 'a bytes literal: b"path"', bn: 'bytes লিটারেল: b"path"' },
          { en: 'a format call on every backslash', bn: 'প্রতিটি ব্যাকস্ল্যাশে format কল' },
          { en: 'double quotes instead of single', bn: 'single-এর বদলে double কোট' }
        ],
        answer: 0,
        hint: { en: 'One prefix letter means every backslash stays itself.', bn: 'একটি প্রিফিক্স অক্ষর মানে প্রতিটি ব্যাকস্ল্যাশ নিজেরই থাকে।' },
        explanation: { en: 'The prefix r turns off escape handling, so \\n inside a path cannot eat two characters and quietly point at the wrong file.', bn: 'r প্রিফিক্স escape প্রক্রিয়া বন্ধ করে, তাই পথের ভেতরের \\n দুটি অক্ষর খেয়ে ভুল ফাইলের দিকে নিয়ে যেতে পারে না।' }
      }
    ]
  },
  nextLesson: {
    slug: 'mutation-and-binding',
    title: {
      en: 'Mutation & Copying Discipline: Mutability, Deepcopy & Defaults',
      bn: 'পরিবর্তন ও কপির শৃঙ্খলা: পরিবর্তনশীলতা, ডিপকপি ও ডিফল্ট'
    }
  }
};
