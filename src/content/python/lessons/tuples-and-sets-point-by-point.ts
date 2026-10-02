import type { Lesson } from '../../../lib/types';

/**
 * Their tutorial spends ten separate pages on tuples and sets: access, update, loop, join and
 * methods for each. This page keeps all ten, one titled point each, in the order a beginner meets
 * them. Every printed value below was worked out by hand from the snippet above it, and the two
 * places where Python makes no promise (set order, and which element pop() takes) are taught as
 * the caveat instead of a fake number.
 */
export const tuplesAndSetsLesson: Lesson = {
  slug: 'python-tuples-sets',
  tech: 'python',
  title: {
    en: 'Tuples and sets, point by point: access, update, loop, join, methods',
    bn: 'টাপল আর সেট, পয়েন্ট ধরে: পড়া, বদলানো, ঘোরা, জোড়া দেওয়া, মেথড'
  },
  summary: {
    en: 'A tuple is a list that refuses to change; a set is a bag that throws away duplicates and has no order at all. Both hide their useful moves behind a handful of methods, and both are worth knowing exactly, because they appear in every real Python file.',
    bn: 'টাপল হলো তালিকা যা বদলাতে চায় না; সেট হলো থলে যেটি কপি বাদ দিয়ে দেয় আর ক্রম রাখেই না। দুটোর কাজের অংশ কয়েকটি মেথডের আড়ালে থাকে, আর দুটোই আসল কোডে বারবার আসে বলে ঠিকমতো জানা দরকার।'
  },
  minutes: 26,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'What these two containers are for', bn: 'এই দুই ধারক কীসের জন্য' } },
    {
      type: 'para',
      text: {
        en: 'Type each snippet, then read the value under it. The first five points are about tuples, the last five about sets, and each one is a whole page of theirs.',
        bn: 'প্রতিটি স্নিপেট লিখুন, তারপর নিচের মানটি পড়ুন। প্রথম পাঁচটি পয়েন্ট টাপলের, শেষ পাঁচটি সেটের—প্রতিটিই তাদের একটি করে পূর্ণ পাতা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'immutable', def: { en: 'cannot be changed after it is built, only replaced by a new one', bn: 'বানার পর বদলানো যায় না, শুধু নতুনটি দিয়ে বদলে দেওয়া যায়' } },
        { term: 'hashable', def: { en: 'has a fixed fingerprint, so it can sit inside a set or act as a key', bn: 'স্থির আঙুলের ছাপ আছে, তাই সেটে বসতে পারে বা চাবি হতে পারে' } },
        { term: 'duplicate collapse', def: { en: 'repeated values become one on the way in, with no warning printed', bn: 'বারবার আসা মান ঢোকার সময়ই একটিতে দাঁড়ায়, কোনো সতর্কতা ছাপা হয় না' } },
        { term: 'no stored order', def: { en: 'the container keeps no position for an item, so loops may differ between runs', bn: 'ধারকে উপাদানের অবস্থান রাখতে হয় না, তাই লুপ দুইবারে আলাদা ক্রম দেখাতে পারে' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. Read a tuple: index, negative index, slice', bn: '১. টাপল পড়া: ইনডেক্স, ঋণাত্মক ইনডেক্স, স্লাইস' } },
    {
      type: 'para',
      text: {
        en: 'A tuple holds positions exactly like a list, so everything you know about counting from zero still applies. Counting from the end uses minus one for the last item.',
        bn: 'টাপল ঠিক তালিকার মতোই অবস্থান ধরে রাখে, তাই শূন্য থেকে গোনার নিয়ম আগের মতোই চলে। শেষ দিক থেকে গুনলে শেষ উপাদানটি হলো minus one।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'tuple-read.py',
      code: `t = ('a', 'b', 'c', 'd', 'e')

print(t[1])        # b
print(t[-2])       # d
print(t[1:4])      # ('b', 'c', 'd')
print(len(t))      # 5
print('a' in t)    # True

try:
    print(t[9])    # IndexError: tuple index out of range
except IndexError as e:
    print('IndexError:', e)

t[0] = 'z'         # TypeError: 'tuple' object does not support item assignment`,
      caption: {
        en: 'A slice never throws on a wide range; an index does. That difference is why reading the last item with t[-1] is safe and t[9] is not.',
        bn: 'প্রশস্ত স্লাইস কখনো error ছোঁড়ে না, নির্দিষ্ট ইনডেক্স ছোঁড়ে। তাই শেষ উপাদান t[-1] দিয়ে পড়া নিরাপদ, t[9] নয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Change a tuple: you rebuild it instead', bn: '২. টাপল বদলানো: আসলে নতুনটি বানানো হয়' } },
    {
      type: 'para',
      text: {
        en: 'There is no way to edit a tuple in place, and that is the point: nothing can change it behind your back. To get a different tuple you build a new one, usually by gluing slices together or taking a walk through a list.',
        bn: 'টাপল জায়গায় বসে বদলানোর কোনো উপায় নেই, আর এটই উদ্দেশ্য: পিছন থেকে কেউ এটিকে নড়াতে পারে না। অন্য টাপল পেতে নতুনটি বানাতে হয়—সাধারণত টুকরো জোড়া দিয়ে বা list-এর ভেতর দিয়ে ঘুরিয়ে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'tuple-update.py',
      code: `t = ('a', 'b', 'c', 'd', 'e')

t = t[:2] + ('x',) + t[2:]
print(t)                     # ('a', 'b', 'x', 'c', 'd', 'e')

items = list(t)              # ['a', 'b', 'x', 'c', 'd', 'e']
items.append('z')
t = tuple(items)
print(t)                     # ('a', 'b', 'x', 'c', 'd', 'e', 'z')
print(len(t))                # 7

single = (42,)               # the comma makes it a tuple, not the brackets
print(type(single), len(single))   # <class 'tuple'> 1
print(type((42)), len((42)))       # <class 'int'> ... TypeError: object of type 'int' has no len()`,
      caption: {
        en: 'The one-item tuple needs its comma: (42) is just the number 42 in brackets, and every bug that starts there takes a while to find.',
        bn: 'এক-উপাদান টাপলে কমা বাধ্যতামূলক: (42) হলো শুধু ব্র্যাকেটে 42 সংখ্যাটি, আর সেখান থেকে শুরু হওয়া ভুল খুঁজে বের করতে সময় লাগে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Loop a tuple, with and without the position', bn: '৩. টাপল ঘোরানো: অবস্থানসহ আর ছাড়া' } },
    {
      type: 'para',
      text: {
        en: 'A for loop walks a tuple front to back in order, always. When the position matters, enumerate hands it over instead of counting by hand.',
        bn: 'for লুপ টাপলকে ক্রমে সামনে থেকে পেছনে হাঁটে, সবসময়। অবস্থান দরকার হলে নিজে না গেনে enumerate সেটি এগিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'tuple-loop.py',
      code: `t = ('a', 'b', 'c')

for item in t:
    print(item, end=' ')         # a b c

for i, item in enumerate(t, start=1):
    print(i, item, end=' | ')    # 1 a | 2 b | 3 c |

for i in range(len(t)):          # the version to avoid: three moves to say one thing
    print(t[i], end=' ')         # a b c

total = 0
for n in (4, 7, 9, 2):
    total += n
print(total)                     # 22`,
      caption: {
        en: 'A tuple built once and looped a thousand times cannot change between the loops, which is one practical reason to prefer it over a list.',
        bn: 'একবার বানানো টাপল হাজারবার ঘুরালেও লুপের মাঝে বদলাতে পারে না—তালিকার বদলে এটি বেছে নেওয়ার 1 টি ব্যবহারিক কারণ এটিই।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Join tuples: plus and multiply', bn: '৪. টাপল জোড়া দেওয়া: plus আর গুণ' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'tuple-join.py',
      code: `left = (1, 2)
right = (3, 4)

print(left + right)          # (1, 2, 3, 4)
print(right + left)          # (3, 4, 1, 2)  order is kept, not sorted
print(left * 3)              # (1, 2, 1, 2, 1, 2)
print(len(left * 3))         # 6

print(left + [5])            # TypeError: can only concatenate tuple (not "list") to a tuple
print(left + tuple([5]))     # (1, 2, 5)

joined = ().join             # there is no join on a tuple; strings own that method
print(','.join(str(n) for n in left))   # 1,2`,
      caption: {
        en: 'Adding two tuples copies both into a new one, so growing a tuple inside a loop costs more each time. Collect into a list, convert once.',
        bn: 'দুটি টাপল জোড়া দিলে দুটোরই কপি নিয়ে নতুনটি বানানো হয়, তাই লুপের ভেতর বারবার বাড়ালে খরচ বাড়ে। আগে list-এ জমিয়ে একবারই রূপান্তর করুন।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The only two tuple methods', bn: '৫. টাপলের মাত্র দুটি মেথড' } },
    {
      type: 'para',
      text: {
        en: 'Because a tuple cannot change, it has almost nothing to do. Two methods, both read-only, are the whole set.',
        bn: 'টাপল বদলাতে না পারায় তার করার বেশি কিছু নেই। দুটি মেথড, দুটোই শুধু পড়ে—এই সবটুকু।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'tuple-methods.py',
      code: `t = (2, 4, 2, 8, 2)

print(t.count(2))            # 3
print(t.index(4))            # 1  the first position holding that value
print(t.index(2))            # 0  not 2: it stops at the first hit

try:
    print(t.index(9))        # ValueError: tuple.index(x): x not in tuple
except ValueError as e:
    print('ValueError:', e)

print(9 in t)                # False  the guard to write before index()`,
      caption: {
        en: 'index() raises where list methods sometimes return a sentinel, so test with in first, or catch ValueError, before assuming the position exists.',
        bn: 'তালিকার মেথড কখনো চিহ্ন ফেরত দেয়, index() দেয় না—উত্তেজনা ছোঁড়ে। তাই আগে in দিয়ে দেখুন, নয়তো ValueError ধরুন।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Add to a set: add one, update many', bn: '৬. সেটে যোগ: একটি add, অনেকগুলো update' } },
    {
      type: 'para',
      text: {
        en: 'A set answers one question fast: is this value in here? To keep that promise it drops duplicates on the way in and takes items in any order it likes.',
        bn: 'সেট একটি প্রশ্নের দ্রুত উত্তর দেয়: এই মানটি কি ভেতরে আছে? সেই দ্রুততা রাখতেই এটি ঢোকার সময় কপি ফেলে দেয় আর যে কোনো ক্রমে উপাদান নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'set-add.py',
      code: `s = {1, 2, 3}
s.add(4)
print(sorted(s))             # [1, 2, 3, 4]

s.add(2)                     # already in: nothing happens, no error
print(len(s))                # 4

s.update([5, 6, 5])          # any iterable, and its duplicates collapse too
print(sorted(s))             # [1, 2, 3, 4, 5, 6]

s.update({'x': 1, 'y': 2})   # a dict contributes its KEYS
print('x' in s, 'y' in s)    # True True

s.update('ab')               # a string is an iterable of characters
print('a' in s, 'ab' in s)   # True False`,
      caption: {
        en: 'The last two lines are the classic surprise: update eats any iterable, so a string arrives as letters and a dict arrives as keys.',
        bn: 'শেষ দুটি লাইনেই পুরোনো আশ্চর্য: update যেকোনো iterable খায়, তাই string অক্ষর হয়ে আসে আর dict চাবি হয়ে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Remove from a set: 4 verbs, 2 temperaments', bn: '7. সেট থেকে বাদ: 4 টি মেথড, 2 টি স্বভাব' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'set-remove.py',
      code: `s = {1, 2, 3}

s.remove(2)                  # gone
print(sorted(s))             # [1, 3]

s.discard(99)                # absent: silent, exactly what you want in cleanup code
print(sorted(s))             # [1, 3]

try:
    s.remove(99)             # KeyError: 99
except KeyError as e:
    print('KeyError:', e)

print(s.pop())               # one element, and which one is not your choice
print(s)                     # the rest; length fell by 1

s.clear()
print(s, len(s))             # set() 0   an empty set literal is NOT {}`,
      caption: {
        en: 'remove() for a value that must be there, discard() for one that may be. pop() is the only way off a set without naming the value, and it picks.',
        bn: 'যে মানটি অবশ্যই থাকবে তার জন্য remove(), হয়তো থাকবে তার জন্য discard()। মান নাম না দিয়ে সেট থেকে বের হওয়ার একমাত্র পথ pop(), আর সেটিই বেছে নেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Loop a set, and why the order is not yours', bn: '৮. সেট ঘোরানো, আর ক্রম কেন আপনার না' } },
    {
      type: 'para',
      text: {
        en: 'Looping a set visits every item once, in an order that depends on hashing, insertion history and the interpreter build. Sort when a human has to read the output, and only then.',
        bn: 'সেট ঘুরালে প্রতিটি উপাদান একবারই আসে, কিন্তু ক্রমটি hash, ঢোকার ইতিহাস আর interpreter-র Build দেখে। মানুষ যখন আউটপুট পড়বে, তখনই sorted লাগান—অন্যথায় না।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'set-loop.py',
      code: `s = {4, 1, 3, 2}

for x in sorted(s):
    print(x, end=' ')            # 1 2 3 4   deterministic, costs a sort

for x in s:
    print(x, end=' ')            # some order, stable for this run, not a promise

flags = {'new', 'old'}
for i, f in enumerate(sorted(flags)):
    print(i, f, end=' | ')       # 0 new | 1 old |

# a set cannot be indexed at all
try:
    first = s[0]                 # TypeError: 'set' object is not subscriptable
except TypeError as e:
    print('TypeError:', e)

print(min(s), max(s), sum(s))    # 1 4 10`,
      caption: {
        en: 'If a position matters, use a list. If membership matters, use a set. Asking a set for its first item is a question with no answer.',
        bn: 'অবস্থান গুরুত্বপূর্ণ হলে list, থাক-না-থাকা গুরুত্বপূর্ণ হলে set। সেটে প্রথমটি চাওয়া মানে এমন প্রশ্ন যার উত্তর নেই।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Join sets: 4 ways 2 sets combine', bn: '9. সেট সংযোগ: 2 টি সেট মিলবার 4 টি পথ' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'set-join.py',
      code: `a = {1, 2, 3, 4}
b = {3, 4, 5}

print(sorted(a | b))             # [1, 2, 3, 4, 5]   union: everything once
print(sorted(a & b))             # [3, 4]             intersection: only shared
print(sorted(a - b))             # [1, 2]             difference: mine, not yours
print(sorted(a ^ b))             # [1, 2, 5]          symmetric: in one, not both

print(len(a | b), len(a & b), len(a - b))    # 5 2 2

a.update(b)                      # in-place union
print(sorted(a))                 # [1, 2, 3, 4, 5]
a.intersection_update(b)
print(sorted(a))                 # [3, 4, 5]

# two sets with nothing in common
print({1, 2}.isdisjoint({3, 4})) # True`,
      caption: {
        en: 'The in-place versions return None, so chaining them onto a print gives you None and an empty-looking bug at the far end of a long line.',
        bn: 'জায়গায় বদলানো সংস্করণ None ফেরত দেয়, তাই print-এর সঙ্গে যুক্ত করলে হাতে থাকে None আর লাইনের শেষে দীর্ঘ খোঁজার ভুল।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The set methods worth memorising', bn: '১০. যে সেট মেথডগুলো মনে রাখার মতো' } },
    {
      type: 'code',
      lang: 'python',
      filename: 'set-methods.py',
      code: `small = {1, 2}
big = {1, 2, 3, 4}

print(small.issubset(big))       # True
print(big.issuperset(small))     # True
print(small < big)               # True: the operator means proper subset

print(small.isdisjoint({5, 6}))  # True
print(len(small), max(small))    # 2 2

copy1 = small.copy()
copy1.add(9)
print(sorted(small))             # [1, 2]   the original did not move
print(sorted(copy1))             # [1, 2, 9]

# sets only hold hashables: no list, no dict, no another set
try:
    {[1, 2]}                     # TypeError: unhashable type: 'list'
except TypeError as e:
    print('TypeError:', e)
print({(1, 2), (3, 4)})          # tuples are fine: they are hashable`,
      caption: {
        en: 'A tuple can sit in a set, a list cannot, because membership needs a fingerprint that never changes. That is the same reason a tuple is hashable at all.',
        bn: 'টাপল সেটে বসতে পারে, তালিকা পারে না—থাকা-পরীক্ষার জন্য বদলা না আসা আঙুলের ছাপ দরকার। টাপল hashable হওয়ার কারণও একই।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why these two exist at all', bn: 'এই দুটি কেনই বা আছে' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'A tuple says to the next reader: this row is data, do not write to it', bn: 'টাপল পরের পাঠককে বলে: এই সারিটি তথ্য, এতে লিখবেন না' },
        { en: 'Returning several values from one function is a tuple, with or without the name', bn: 'এক ফাংশন থেকে কয়েকটি মান ফেরত দেওয়াই টাপল, নাম দিক বা না দিক' },
        { en: 'A set answers “have I seen this” in constant time, a list answers it by scanning', bn: 'সেট স্থির সময়ে বলে “এটি দেখেছি কি না”, তালিকা বলে পুরোটা দেখে' },
        { en: 'Removing duplicates from a sequence is one set call, then a sort if order matters', bn: 'ক্রম থেকে কপি বাদ দেওয়া একটি সেট-কল, তারপর ক্রম দরকার হলে sort' },
        { en: 'Both are hash-aware: hashable items only, which rules out lists and dicts inside them', bn: 'দুটোই hash-সচেতন: hashable জিনিসই ঢোকে, তাই ভেতরে তালিকা বা dict রাখা যায় না' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Property', bn: 'বিষয়' }, { en: 'list', bn: 'list' }, { en: 'tuple', bn: 'tuple' }, { en: 'set', bn: 'set' }],
      rows: [
        [{ en: 'written as', bn: 'যেমন লেখা হয়' }, { en: '[1, 2, 2]', bn: '[1, 2, 2]' }, { en: '(1, 2, 2)', bn: '(1, 2, 2)' }, { en: '{1, 2}', bn: '{1, 2}' }],
        [{ en: 'duplicates', bn: 'কপি' }, { en: 'kept, three items', bn: 'থাকে, তিনটি' }, { en: 'kept, three items', bn: 'থাকে, তিনটি' }, { en: 'collapsed, two items', bn: 'মেলে যায়, দুটি' }],
        [{ en: 'change in place', bn: 'জায়গায় বদল' }, { en: 'yes: append, assign', bn: 'হ্যাঁ: append, বসানো' }, { en: 'no: rebuild instead', bn: 'না: নতুন বানাতে হয়' }, { en: 'yes: add, remove', bn: 'হ্যাঁ: add, remove' }],
        [{ en: 'order on loop', bn: 'লুপে ক্রম' }, { en: 'insertion order', bn: 'যেমন বসানো' }, { en: 'insertion order', bn: 'যেমন বসানো' }, { en: 'not guaranteed', bn: 'কোনো নিশ্চয়তা নেই' }],
        [{ en: 'ask if present', bn: 'আছে কি না জিজ্ঞেস' }, { en: 'scans the items', bn: 'উপাদান দেখে' }, { en: 'scans the items', bn: 'উপাদান দেখে' }, { en: 'one hash lookup', bn: 'একটি hash দেখা' }]
      ],
      caption: { en: 'The last row is the whole reason a set exists: membership costs the same whether it holds ten items or ten million.', bn: 'শেষ সারিটাই সেট থাকার পুরো কারণ: থাকার প্রশ্নের খরচ দশ হলেও এক, দশ লক্ষ হলেও এক।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to pick between them', bn: 'কীভাবে বেছে নেবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Ask about change', bn: 'বদল নিয়ে জিজ্ঞেস করুন' }, text: { en: 'Anything the program writes later is a list or a set. Anything it must not write is a tuple.', bn: 'পরবর্তীতে লেখা হবে এমনটি list বা set, যেন লেখাই না হয় সেটি tuple।' } },
        { title: { en: 'Ask about duplicates', bn: 'কপি নিয়ে জিজ্ঞেস করুন' }, text: { en: 'A tally or a sequence of steps keeps repeats. A roster of who has acted does not, so it is a set.', bn: 'গণনা বা ধাপের ক্রমে বারবার আসা থাকে; কে কে করেছে তার তালিকায় থাকে না, তাই সেটি set।' } },
        { title: { en: 'Ask about position', bn: 'অবস্থান নিয়ে জিজ্ঞেস করুন' }, text: { en: 'If you will ever write index zero, you need a list or a tuple, never a set.', bn: 'কোনোদিন প্রথমটি চাওয়া হবে বুঝলে list বা tuple দরকার, সেট কখনো নয়।' } },
        { title: { en: 'Ask about order in output', bn: 'আউটপুটের ক্রম নিয়ে জিজ্ঞেস করুন' }, text: { en: 'Print sorted(my_set) wherever a person reads the result, or the same script looks different on a colleague machine.', bn: 'যেখানে মানুষ ফল পড়বে সেখানে sorted(s) দিন, না হলে একই স্ক্রিপ্ট সহকর্মীর যন্ত্রে অন্য রকম দেখাবে।' } },
        { title: { en: 'Convert once, at the edge', bn: 'একবারই রূপ দিন, প্রান্তে' }, text: { en: 'Build a list on the way in, hand a tuple out, keep a set for the membership test inside.', bn: 'ঢোকার পথে list, বের হওয়ার সময় tuple, ভেতরে থাকার পরীক্ষার জন্য set রাখুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Three containers, one row of data: what survives', bn: '3 টি ধারক, 1 সারি তথ্য: কী টিকে' },
      svg: `<svg viewBox="0 0 660 210" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="the raw list of five values feeding a list, a tuple and a set, showing five, five and three items"><g font-size="11" fill="currentColor"><rect x="20" y="26" width="200" height="34" rx="7" fill="none" stroke="currentColor"/><text x="120" y="48" text-anchor="middle">raw = [3, 1, 3, 2, 1]</text></g><g stroke="currentColor" stroke-width="1.3" fill="none"><path d="M220 43 H300 V96"/><path d="M300 43 H300 V132"/><path d="M300 43 H300 V168"/></g><g font-size="11" fill="currentColor"><rect x="304" y="80" width="180" height="34" rx="7" fill="none" stroke="currentColor"/><text x="394" y="102" text-anchor="middle">list: 5, order kept</text><rect x="304" y="116" width="180" height="34" rx="7" fill="none" stroke="currentColor"/><text x="394" y="138" text-anchor="middle">tuple: 5, cannot edit</text><rect x="304" y="152" width="180" height="34" rx="7" fill="none" stroke="currentColor"/><text x="394" y="174" text-anchor="middle">set: 3, no order</text></g><g font-size="10" fill="currentColor" opacity=".75"><text x="500" y="98">[3, 1, 3, 2, 1]</text><text x="500" y="134">(3, 1, 3, 2, 1)</text><text x="500" y="170">{1, 2, 3} in any order</text></g></svg>`,
      caption: { en: 'Same five values, three answers. The set is the only one that changes the count, and it is the only one you cannot ask for item zero.', bn: 'একই পাঁচটি মান, তিনটি উত্তর। গণনা যে বদলায় একমাত্র সেটে, আর শূন নম্বরটি চাইলে যা সাড়া দেয় না সেও সেটিই।' }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'one-row.py',
      code: `raw = [3, 1, 3, 2, 1]

print(list(raw))          # [3, 1, 3, 2, 1]   every value, in the order it came
print(tuple(raw))         # (3, 1, 3, 2, 1)   same, but nobody downstream can edit it
print(sorted(set(raw)))   # [1, 2, 3]         the distinct values, order recovered by sorting

seen = set()
kept = []
for x in raw:             # the pattern when order matters and repeats must go
    if x not in seen:
        seen.add(x)
        kept.append(x)
print(kept)               # [3, 1, 2]`,
      caption: {
        en: 'The loop at the bottom is the only one of the four that keeps first-seen order while dropping repeats, which is what a log summary usually wants.',
        bn: 'নিচের লুপটিই চারটির মধ্যে একমাত্র যে প্রথম-দেখা ক্রম রেখে বারবার আসা মান ফেলে দেয়—লাগ সারাংশে প্রায়ই এটিই লাগে।'
      }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: {
        en: 'Two facts carry this whole page: a tuple is built, never edited, and a set is a hash table with no order. Every method here is a consequence of one of those two sentences.',
        bn: 'এই পাতাটি বহন করে দুটি সত্য: টাপল বানানো হয়, বদলানো হয় না; আর set হলো ক্রম-বিহীন একটি hash table। এখানে প্রতিটি মেথডই এই দুইটির একটির পরিণতি।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The mistake that ships', bn: 'যে ভুলটি প্রোডাকশনে যায়' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'set() for the empty case', bn: 'খালি জায়গায় set()' },
      text: {
        en: 'Writing s = {} makes a dict, not a set, and the first s.add(x) fails with AttributeError somewhere far away from the line that caused it. The empty set has to be spelled set(). The same trap catches people who write {}, and then spend an afternoon on the error message.',
        bn: 's = {} লিখলে dict তৈরি হয়, set নয়, আর প্রথম s.add(x) লাইনেই AttributeError আসে—দোষী লাইন থেকে অনেক দূরে। খালি set লেখার ঠিক পথটি set()। একই ফাঁদে {} লেখা মানুষ বিকেল গড়িয়ে উত্তর খোঁজেন।'
      }
    }
  ],
  exercises: [
    {
      id: 'python-tuples-sets-ex1', kind: 'predict', topic: 'python: Tuples and sets',
      question: { en: 'What does the print show?', bn: 'print কী দেখায়?' },
      code: `t = (1, 2, 3)\nt = t + (4,)\nprint(t)`,
      answer: '(1, 2, 3, 4)',
      accept: ['(1, 2, 3, 4)', '1, 2, 3, 4'],
      hint: { en: 'Rebinding a name to a new tuple is not the same as editing the old one.', bn: 'নতুন টাপলের সঙ্গে নাম আবার বাঁধা মানে পুরোনোটি বদলানো নয়।' },
      explanation: { en: 'A new tuple of four items is built and bound to t. The original three-item tuple is untouched; if another name held it, that name still sees three items.', bn: 'চার উপাদানের নতুন টাপল বানানো হয়ে t-তে বাঁধা হয়েছে। তিন-উপাদান পুরোনোটি অটুট; অন্য নামে থাকলে সেটি এখনও তিনটিই দেখে।' }
    },
    {
      id: 'python-tuples-sets-ex2', kind: 'mcq', topic: 'python: Tuples and sets',
      question: { en: 's.discard(9) is called and 9 is not in the set. What happens?', bn: 's.discard(9) ডাকা হলো, সেটে 9 নেই। কী হয়?' },
      options: [
        { en: 'nothing at all, no error', bn: 'কিছুই হয় না, error-ও না' },
        { en: 'KeyError is raised', bn: 'KeyError ওঠে' },
        { en: 'the set is emptied', bn: 'সেট খালি হয়ে যায়' },
        { en: 'None is returned and the set grows by one', bn: 'None ফেরত দেয়, সেটে একটি বাড়ে' }
      ],
      answer: 0,
      hint: { en: 'Two removal verbs differ exactly here.', bn: 'বাদ করার দুই ক্রিয়া ঠিক এখানেই আলাদা।' },
      explanation: { en: 'discard() is the quiet one; remove() is the one that raises KeyError. Choose discard in cleanup code and remove when absence is a bug.', bn: 'discard নীরব; remove KeyError ছোঁড়ে। পরিস্কারের কোডে discard, আর না-থাকা মানেই ভুল হলে remove।' }
    },
    {
      id: 'python-tuples-sets-ex3', kind: 'fill', topic: 'python: Tuples and sets',
      question: { en: 'Fill the blank so the two sets end up holding only their shared values.', bn: 'ফাঁকা জায়গায় লিখুন যাতে দুটি সেট শুধু সাধারণ মান ধরে রাখে।' },
      code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\na.________(b)\nprint(sorted(a))     # [3, 4]`,
      answer: 'intersection_update',
      accept: ['intersection_update', 'intersection_update(b)', 'a = a & b'],
      hint: { en: 'The verb that changes the set in place, not the one that returns a new set.', bn: 'যে ক্রিয়াটি সেটটি জায়গায় বদলায়, নতুন সেট ফেরত দেয় না।' },
      explanation: { en: 'intersection() would return a new set and leave a as it was, so printing a afterwards still shows four items. intersection_update() writes into a.', bn: 'intersection() নতুন সেট ফেরত দিয়ে a-কে যেমন ছিল তেমনই রাখে, তাই পরে print করলে চারটি দেখা যায়। intersection_update() a-তে লেখে।' }
    },
    {
      id: 'python-tuples-sets-ex4', kind: 'predict', topic: 'python: Tuples and sets',
      question: { en: 'A set is built from that list. What does len() print?', bn: 'ওই তালিকা থেকে সেট বানানো হলো। len() কী ছাপে?' },
      code: `raw = [7, 7, 8, 9, 8, 7]\nprint(len(set(raw)))`,
      answer: '3',
      accept: ['3'],
      hint: { en: 'Duplicates collapse on the way in.', bn: 'কপি ঢোকার পথেই মিলে যায়।' },
      explanation: { en: 'Three distinct values survive: 7, 8, and 9 in total. This is the shortest way to count how many different things a column holds.', bn: '3 টি আলাদা মান টিকে: 7, 8, এবং 9 মোট। কোনো কলামে কত ভিন্ন জিনিস আছে গোনার সবচেয়ে ছোট পথ এটিই।' }
    }
  ],
  quiz: {
    id: 'python-tuples-sets-quiz',
    title: { en: 'Quiz — tuples and sets, point by point', bn: 'কুইজ — টাপল আর সেট, পয়েন্ট ধরে' },
    questions: [
      {
        id: 'python-tuples-sets-q1', kind: 'mcq', topic: 'python: Tuples and sets',
        question: { en: 'Which line builds a tuple?', bn: 'কোন লাইনটি টাপল বানায়?' },
        options: [
          { en: 'single = (42,)', bn: 'single = (42,)' },
          { en: 'single = (42)', bn: 'single = (42)' },
          { en: 'single = [42]', bn: 'single = [42]' },
          { en: 'single = {42}', bn: 'single = {42}' }
        ],
        answer: 0,
        hint: { en: 'The comma decides, not the brackets.', bn: 'ব্র্যাকেট নয়, কমা ঠিক করে।' },
        explanation: { en: 'Without the comma the brackets are just grouping, so that line holds an int. The braces hold a set, the square brackets a list.', bn: 'কমা না থাকলে ব্র্যাকেট শুধু গ্রুপিং, তাই লাইনটিতে থাকে একটি int। curly ব্র্যাকেট সেট, square ব্র্যাকেট তালিকা।' }
      },
      {
        id: 'python-tuples-sets-q2', kind: 'mcq', topic: 'python: Tuples and sets',
        question: { en: 'Why can a tuple be a set member while a list cannot?', bn: 'টাপল সেটে থাকতে পারে, তালিকা পারে না—কেন?' },
        options: [
          { en: 'a tuple has a stable hash because nothing in it can change', bn: 'টাপলের ভেতর কিছু বদলায় না বলে তার hash স্থির' },
          { en: 'tuples are smaller in memory', bn: 'টাপল মেমরিতে ছোট' },
          { en: 'lists cannot be looped', bn: 'তালিকা ঘোরানো যায় না' },
          { en: 'sets reject ordered data', bn: 'সেট ক্রম থাকা তথ্য ফিরিয়ে দেয়' }
        ],
        answer: 0,
        hint: { en: 'Membership is a fingerprint lookup.', bn: 'থাকা-না-থাকা দেখা মানে আঙুলের ছাপ খোঁজা।' },
        explanation: { en: 'A set is a hash table, so every member needs a fingerprint that never changes. A list can grow, so its fingerprint cannot be trusted, and Python refuses it.', bn: 'সেট হলো hash table, তাই প্রতিটি সদস্যর দরকার বদলা-না-আসা আঙুলের ছাপ। তালিকা বড় হতে পারে বলে তার ছাপে ভরসা নেই, তাই Python ফিরিয়ে দেয়।' }
      },
      {
        id: 'python-tuples-sets-q3', kind: 'predict', topic: 'python: Tuples and sets',
        question: { en: 'What does the second print show?', bn: 'দ্বিতীয় print কী দেখায়?' },
        code: `a = {1, 2}\nb = a.copy()\nb.add(3)\nprint(sorted(a))\nprint(sorted(b))`,
        answer: '[1, 2, 3]',
        accept: ['[1, 2, 3]', '1, 2, 3'],
        hint: { en: 'copy makes an independent set at the top level.', bn: 'copy উপরের স্তরে স্বাধীন সেট বানায়।' },
        explanation: { en: 'The two sets are separate objects, so adding to one leaves the other with two items. Assignment would have given the same object twice.', bn: '2 টি আলাদা অবজেক্ট, তাই 1 টিতে যোগ করলে অন্যটিতে 2 টি উপাদানই থাকে। সমান চিহ্ন দিলে একই বস্তুটি দুই নামে পেত।' }
      },
      {
        id: 'python-tuples-sets-q4', kind: 'mcq', topic: 'python: Tuples and sets',
        question: { en: 'You need “every value once, in first-seen order”. Which do you write?', bn: '“প্রতিটি মান একবার, প্রথমবার দেখার ক্রমে” চাই। কোনটি লিখবেন?' },
        options: [
          { en: 'loop once, keeping a set for what was seen and a list for the order', bn: 'একবার লুপ, দেখা মানের জন্য set আর ক্রমের জন্য list' },
          { en: 'set(raw), then print it', bn: 'set(raw), তারপর print' },
          { en: 'sorted(set(raw))', bn: 'sorted(set(raw))' },
          { en: 'a tuple built from the list', bn: 'তালিকা থেকে বানানো tuple' }
        ],
        answer: 0,
        hint: { en: 'One of these keeps order, one keeps only distinctness.', bn: 'একটি ক্রম রাখে, একটি শুধু আলাদা-ভাব রাখে।' },
        explanation: { en: 'A set alone loses the order; sorting it imposes a different order, not the first-seen one. The pair of containers keeps both promises.', bn: '1 টি সেট একা ক্রম হারায়; দুটি ধারক মিলিয়েই 2 টি প্রতিশ্রুতির রক্ষা করে।' }
      }
    ]
  },
  nextLesson: {
    slug: 'the-mapping-vault',
    title: {
      en: 'The Mapping Vault: Dictionaries, Sets & Hash Tables',
      bn: 'ম্যাপিং ভল্ট: ডিকশনারি, সেট ও হ্যাশ টেবিল'
    }
  }
};
