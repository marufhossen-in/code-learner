import type { Lesson } from '../../../lib/types';

export const ReadingThePlanLesson: Lesson = {
  slug: 'reading-the-plan',
  tech: 'mysql',
  title: { en: 'Reading the Plan: EXPLAIN', bn: 'পরিকল্পনা পড়া: EXPLAIN' },
  summary: { en: 'EXPLAIN is the optimizer telling you what it decided. Read type, key, rows and Extra, then EXPLAIN ANALYZE to see decided against actual — and stop guessing.', bn: 'EXPLAIN হলো optimizer যা ঠিক করেছে তা বলা। type, key, rows আর Extra পড়ুন, তারপর EXPLAIN ANALYZE দিয়ে ঠিক-বনাম-প্রকৃত মেলান — আর অনুমান বন্ধ করুন।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Reading the Plan: EXPLAIN', bn: 'WHAT — পরিকল্পনা পড়া: EXPLAIN' },
    },
    {
      type: 'para',
      text: { en: 'You added the index and the page is still slow. This is where guessing burns the afternoon. The engine has already told you what it decided, if you ask: which index it picked, how many rows it expects to touch, and whether it must sort the result by hand.', bn: 'আপনি index যোগ করেছেন, তবু পাতা ধীর। এই জায়গাতেই অনুমান করে বিকেল পুড়ে যায়। engine আসলে কী ঠিক করেছে, জিজ্ঞেস করলেই বলে দেয়: কোন index বাছল, কতগুলো সারি ছুঁবে ভাবছে, আর ফলাফল হাতে সাজাতে হবে কি না।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'EXPLAIN prints the chosen plan, not the available ones: if the index you built is not in key, the answer is in possible_keys and in the statistics.',
          bn: 'EXPLAIN বাছাই করা plan ছাপে, পাওয়া যাওয়া সব নয়: বানানো index key-এ না-থাকলে উত্তর possible_keys-এ আর statistics-এ।',
        },
        {
          en: 'The access type is a ladder — const, eq_ref, ref, range, index, ALL — and almost every slow query is standing on the bottom two rungs.',
          bn: 'access type একটা সিঁড়ি — const, eq_ref, ref, range, index, ALL — প্রায় সব ধীর query-ই নিচের দুই ধাপে দাঁড়িয়ে।',
        },
        {
          en: 'EXPLAIN ANALYZE actually runs the query and prints real rows and real time per step, so estimates and truth can no longer be confused.',
          bn: 'EXPLAIN ANALYZE query সত্যিই চালিয়ে ধাপ-প্রতি প্রকৃত সারি ও সময় ছাপে, তাই আনুমানিক আর সত্যি আর গোলমাল হয় না।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'plan.sql',
      code: `EXPLAIN SELECT id, total FROM orders WHERE customer_id = 7 AND total > 500;

+----+-------------+--------+-------+---------------------+------------------+---------+------+-------+-----------------------+
| id | select_type | table  | type  | possible_keys       | key              | key_len | ref  | rows  | Extra                 |
+----+-------------+--------+-------+---------------------+------------------+---------+------+-------+-----------------------+
|  1 | SIMPLE      | orders | range | idx_customer_total  | idx_customer_total | 8       | NULL | 143   | Using index condition |
+----+-------------+--------+-------+---------------------+------------------+---------+------+-------+-----------------------+

EXPLAIN ANALYZE SELECT ...;   -- actual time, actual rows, loops
EXPLAIN FORMAT=TREE SELECT ...;  -- the readable form`,
      caption: { en: 'The three columns that matter on the first read: type, key, rows — plus whatever Extra says about filesort and temporary.', bn: 'প্রথম পড়াতে তিনটি column দরকারি: type, key, rows — তার সাথে Extra-র filesort ও temporary সংক্রান্ত লেখা।' },
    },
    {
      type: 'table',
      head: [
        { en: 'type', bn: 'type' },
        { en: 'means', bn: 'অর্থ' },
        { en: 'good?', bn: 'ভালো?' },
      ],
      rows: [
        [
          { en: 'const, system', bn: 'const, system' },
          { en: 'at most one row, matched on a unique key', bn: 'একটির বেশি সারি নয়, unique key-তে মেলে' },
          { en: 'best', bn: 'সেরা' },
        ],
        [
          { en: 'eq_ref', bn: 'eq_ref' },
          { en: 'one row per joined row via a unique index', bn: 'join-এর প্রতি সারিতে এক সারি, unique index দিয়ে' },
          { en: 'excellent', bn: 'চমৎকার' },
        ],
        [
          { en: 'ref', bn: 'ref' },
          { en: 'all rows with one key value', bn: 'এক key-মানের সব সারি' },
          { en: 'normal for a foreign key', bn: 'foreign key-তে স্বাভাবিক' },
        ],
        [
          { en: 'range', bn: 'range' },
          { en: 'a bounded span of an index', bn: 'index-এর এক সীমাবদ্ধ অংশ' },
          { en: 'good, watch how wide', bn: 'ভালো, কত চওড়া দেখুন' },
        ],
        [
          { en: 'index', bn: 'index' },
          { en: 'a full walk of an index, no seek', bn: 'এক index পুরো হাঁটা, seek নেই' },
          { en: 'suspicious unless covering', bn: 'covering না-হলে সন্দেহজনক' },
        ],
        [
          { en: 'ALL', bn: 'ALL' },
          { en: 'full table scan', bn: 'পুরো table স্ক্যান' },
          { en: 'fine for small, bad for big', bn: 'ছোট হলে ঠিক, বড় হলে খারাপ' },
        ],
      ],
      caption: { en: 'Above it all sits EXPLAIN FORMAT=JSON, which adds the cost the optimizer itself is comparing — useful when two plans look equally plausible.', bn: 'এরও উপরে EXPLAIN FORMAT=JSON, যেখানে optimizer-এর নিজের তুলনা করা cost পাওয়া যায় — দুই plan সমান যৌক্তিক লাগলে কাজে লাগে।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Using filesort',
          def: { en: 'The rows must be sorted by hand because no index supplies the order; bounded by sort_buffer_size, spilled to disk when larger.', bn: 'কোনও index ক্রম দেয় না, তাই সারি হাতে সাজাতে হয়; sort_buffer_size-এর সীমায়, বড় হলে ডিস্কে ঝরে।' },
        },
        {
          term: 'Using temporary',
          def: { en: 'A hidden work table backs a group or distinct that the index cannot supply.', bn: 'index যা দিতে পারে না এমন group বা distinct সাময়িক কাজের টেবিলে বসে।' },
        },
        {
          term: 'Using index condition',
          def: { en: 'Index Condition Pushdown: a filter evaluated inside the index scan, before the row is fetched.', bn: 'Index Condition Pushdown: সারি টানার আগে index scan-এর ভেতরেই ছাঁকা চলছে।' },
        },
        {
          term: 'rows',
          def: { en: 'An estimate, from statistics, of how many entries the step touches; compare it with actual rows in EXPLAIN ANALYZE.', bn: 'statistics থেকে আনুমানিক সংখ্যা, ধাপটি কত entry ছুঁবে; EXPLAIN ANALYZE-এর প্রকৃত সারির সাথে মিলিয়ে দেখুন।' },
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
          title: { en: '1. Read the plan before you change it', bn: '১. plan বদলানোর আগে পড়ুন' },
          text: { en: 'EXPLAIN the query as written and note key, rows and Extra.', bn: 'যেমন লেখা আছে তেমনই EXPLAIN করুন, key, rows আর Extra নোট করুন।' },
        },
        {
          title: { en: '2. Find the widest step', bn: '২. সবচেয়ে চওড়া ধাপ খুঁজুন' },
          text: { en: 'The step with the biggest rows estimate is where the time is; everything else is noise.', bn: 'যে ধাপের rows আনুমানিক সবচেয়ে বড়, সময় সেখানেই; বাকি সব কোলাহল।' },
        },
        {
          title: { en: '3. Ask why the index lost', bn: '৩. index হারাল কেন জিজ্ঞেস করুন' },
          text: { en: 'possible_keys non-empty and key NULL usually means a function, a cast, a collation mismatch, or stale statistics.', bn: 'possible_keys পূর্ণ কিন্তু key ফাঁকা — মানে প্রায়-ই function, cast, collation-বেমিল বা পুরোনো statistics।' },
        },
        {
          title: { en: '4. Prove it with actuals', bn: '৪. প্রকৃত সংখ্যা দিয়ে প্রমাণ করুন' },
          text: { en: 'EXPLAIN ANALYZE compares estimated and actual rows and times per node; a tenfold lie is the plan to fix next.', bn: 'EXPLAIN ANALYZE ধাপ-প্রতি আনুমানিক বনাম প্রকৃত rows ও সময় দেখায়; দশ গুণ তফাত হলে পরের সংশোধন সেখানেই।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Reading the Plan: EXPLAIN: the moving parts', bn: 'পরিকল্পনা পড়া: EXPLAIN: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Reading the Plan: EXPLAIN">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Read the plan before you change it</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">EXPLAIN the query as written and note key,</text>
<text x="352" y="79" font-size="11" fill="currentColor">rows and Extra.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Find the widest step</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">The step with the biggest rows estimate is</text>
<text x="352" y="151" font-size="11" fill="currentColor">where the time is; everything else is noise.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Ask why the index lost</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">possible_keys non-empty and key NULL usually</text>
<text x="352" y="223" font-size="11" fill="currentColor">means a function, a cast, a collation mismatc…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Prove it with actuals</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">EXPLAIN ANALYZE compares estimated and actual</text>
<text x="352" y="295" font-size="11" fill="currentColor">rows and times per node; a tenfold lie is the…</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Optimizers do not make mistakes so much as make decisions from a guess: rows and filtered are g…</text>
</svg>`,
      caption: { en: 'Optimizers make decisions based on statistical estimates. Both rows and filtered metrics are guesses. When estimates are wrong, repair the statistics first, reshape the query second, and use index hints only as a last resort.', bn: 'অপ্টিমাইজার অনুমানের ভিত্তিতে সিদ্ধান্ত নেয়। rows এবং filtered উভয় মানই মূলত পূর্বানুমান। এই অনুমান ভুল হলে প্রথমে টেবিল statistics ঠিক করুন, তারপর কুয়েরির গঠন বদলান, এবং সবশেষে নিতান্ত প্রয়োজনে index hint ব্যবহার করুন।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Optimizers make decisions based on statistical estimates. Both rows and filtered metrics are guesses. When estimates are wrong, repair the statistics first, reshape the query second, and use index hints only as a last resort.', bn: 'অপ্টিমাইজার অনুমানের ভিত্তিতে সিদ্ধান্ত নেয়। rows এবং filtered উভয় মানই মূলত পূর্বানুমান। এই অনুমান ভুল হলে প্রথমে টেবিল statistics ঠিক করুন, তারপর কুয়েরির গঠন বদলান, এবং সবশেষে নিতান্ত প্রয়োজনে index hint ব্যবহার করুন।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Fixing the plan with STRIGHT_JOIN', bn: 'STRIGHT_JOIN দিয়ে plan ঠিক করা' },
      text: { en: 'It pins the join order today and, because data grows, breaks the same query next month; the durable fix is an index or updated statistics.', bn: 'আজ join-এর ক্রম আঁটে দেয়, কিন্তু তথ্য বাড়ার সাথে পরের মাসে সেই query ভেঙে যায়; টেকসই সমাধান index বা হালনাগাদ statistics।' },
    },
  ],
  exercises: [
    {
      id: 'reading-the-plan-ex1',
      kind: 'mcq',
      topic: 'mysql: Reading the Plan: EXPLAIN',
      question: { en: 'A query has a usable index, possible_keys names it, but key is NULL. What do you check first?', bn: 'query-র index আছে, possible_keys-তে নাম লেখা, কিন্তু key NULL। প্রথমে কোনটি দেখবেন?' },
      options: [
        {
          en: 'Whether the table is empty enough that a scan is cheaper',
          bn: 'table এত ফাঁকা যে scan-ই সস্তা, কি না',
        },
        {
          en: 'Whether the predicate wraps the column in a function or cast',
          bn: 'predicate column-কে function বা cast-এ মুড়ে দিয়েছে কি না',
        },
        { en: 'Whether the query cache is on', bn: 'query cache চালু আছে কি না' },
        { en: 'Whether another session is writing', bn: 'অন্য session লিখছে কি না' },
      ],
      answer: 1,
      hint: { en: 'A wrapped column cannot be seeked.', bn: 'মুড়ে ফেলা column-তে seek চলে না।' },
      explanation: { en: 'A function, an implicit cast (comparing a VARCHAR to a number, or two collations) or a type mismatch makes the index keys incomparable to the search value; the cost estimate for a scan simply wins.', bn: 'function, অন্তর্নিহিত cast (VARCHAR-কে সংখ্যার সাথে, বা দুই collation মেলানো) বা type-বেমিল খোঁজার মানকে index key-র তুলনাহীন করে দেয়; তাই স্ক্যানের খরচ জিতে যায়।' },
    },
    {
      id: 'reading-the-plan-ex2',
      kind: 'predict',
      topic: 'mysql: Reading the Plan: EXPLAIN',
      question: { en: 'Extra says “Using filesort”. Does that mean the sort happens in a file?', bn: 'Extra বলছে “Using filesort” — মানে কি sort সত্যিই ফাইলে হচ্ছে?' },
      answer: 'no',
      accept: [
        'no',
        'nah',
        'না',
        'No — it may stay in memory',
        'no, not necessarily',
      ],
      hint: { en: 'It means “by hand”, not “on disk”.', bn: 'অর্থ “হাতে”, “ডিস্কে” নয়।' },
      explanation: { en: 'filesort just means MySQL sorts the rows itself rather than reading them in index order; it uses sort_buffer_size and spills to a temporary file only when the rows do not fit.', bn: 'filesort-এর অর্থ index-এর ক্রমে পড়া যায়নি, MySQL নিজে সাজাচ্ছে; sort_buffer_size ব্যবহার করে, না-ধরলে সাময়িক ফাইলে ঝরে।' },
    },
    {
      id: 'reading-the-plan-ex3',
      kind: 'mcq',
      topic: 'mysql: Reading the Plan: EXPLAIN',
      question: { en: 'Estimated rows: 10. Actual rows from EXPLAIN ANALYZE: 1,400,000. What is the first action?', bn: 'আনুমানিক rows ১০, EXPLAIN ANALYZE-এ প্রকৃত ১,৪০০,০০০। প্রথম কাজ?' },
      options: [
        { en: 'Add an index on the sorted column', bn: 'সাজানো column-এ index যোগ' },
        {
          en: 'Refresh statistics with ANALYZE TABLE, and look for a range that is not selective',
          bn: 'ANALYZE TABLE দিয়ে statistics তাজা করুন, আর অবাছাইকরী range খুঁজুন',
        },
        { en: 'Increase sort_buffer_size', bn: 'sort_buffer_size বাড়ান' },
        { en: 'Rewrite as a CTE', bn: 'CTE লিখে ফেলুন' },
      ],
      answer: 1,
      hint: { en: 'A wrong estimate is a statistics problem before it is a shape problem.', bn: 'ভুল আনুমানিকতা আগে statistics-এর সমস্যা, আকৃতির নয়।' },
      explanation: { en: 'A hundred-thousand-fold gap usually means the optimizer is blind to a correlation or a recently loaded range; ANALYZE TABLE fixes the guess, and then the plan is judged on truth.', bn: 'এক লক্ষ গুণ তফাত প্রায়-ই মানে optimizer সম্পর্ক বা সম্প্রতি-ঢোকানো range দেখতে পাচ্ছে না; ANALYZE TABLE অনুমান ঠিক করে, তারপর plan বিচার সত্যি দিয়ে।' },
    },
  ],
  quiz: {
    id: 'reading-the-plan-quiz',
    title: { en: 'Quiz — Reading the Plan: EXPLAIN', bn: 'কুইজ — পরিকল্পনা পড়া: EXPLAIN' },
    questions: [
      {
        id: 'reading-the-plan-q1',
        kind: 'mcq',
        topic: 'mysql: Reading the Plan: EXPLAIN',
        question: { en: 'Which access type is the best possible for a single-row lookup by primary key?', bn: 'primary key দিয়ে এক-সারি খোঁজায় সবচেয়ে ভালো access type কোনটি?' },
        options: [
          { en: 'ref', bn: 'ref' },
          { en: 'const', bn: 'const' },
          { en: 'range', bn: 'range' },
          { en: 'index', bn: 'index' },
        ],
        answer: 1,
        hint: { en: 'The optimizer knows the value before running.', bn: 'চালানোর আগেই মান জানা।' },
        explanation: { en: 'const applies when a unique column is compared to one constant: the row is read during optimisation, so the rest of the query works with it as a literal.', bn: 'unique column একটি ধ্রুবকের সাথে মিললে const হয়: সারিটি optimisation-এর সময়েই পড়া হয়, বাকি query সেটিকে literal ভাবে চেনে।' },
      },
      {
        id: 'reading-the-plan-q2',
        kind: 'mcq',
        topic: 'mysql: Reading the Plan: EXPLAIN',
        question: { en: 'What does “Using join buffer (Block Nested Loop)” tell you?', bn: '“Using join buffer (Block Nested Loop)” কী বলে?' },
        options: [
          { en: 'The join has no usable index on the inner side', bn: 'ভেতরের দিকে join-এ ব্যবহারযোগ্য index নেই' },
          { en: 'The join is already optimal', bn: 'join সর্বোত্তম' },
          { en: 'The result is cached', bn: 'ফল cache হয়েছে' },
          { en: 'A temp table is used for GROUP BY', bn: 'GROUP BY-র জন্য temp table লাগছে' },
        ],
        answer: 0,
        hint: { en: 'It is the plan of despair before a hash join.', bn: 'hash join-এর আগে হতাশার পরিকল্পনা।' },
        explanation: { en: 'Without an index MySQL buffers outer rows and rescans the inner table in blocks; on 8.0.18+ you usually see a hash join instead — both say: add the index.', bn: 'index না-থাকলে MySQL বাইরের সারি buffer করে ভেতরের table ব্লক-ব্লক করে আবার পড়ে; ৮.০.১৮+ সাধারণত hash join দেখায় — দুটোরই বার্তা: index দিন।' },
      },
      {
        id: 'reading-the-plan-q3',
        kind: 'mcq',
        topic: 'mysql: Reading the Plan: EXPLAIN',
        question: { en: 'Why can rows in EXPLAIN be misleading on InnoDB?', bn: 'InnoDB-এ EXPLAIN-এর rows কখনো বিভ্রান্তিকর হয় — কেন?' },
        options: [
          { en: 'It counts only the last page', bn: 'শেষ পাতাটিই গনে' },
          {
            en: 'It is sampled from index statistics, so a small or skewed table can be off by orders',
            bn: 'index statistics থেকে নমুনা, তাই ছোট বা একপক্ষ  table কয়েক ঘাত ভুল হতে পারে',
          },
          { en: 'It is the number of locks', bn: 'সেটি lock-এর সংখ্যা' },
          { en: 'It is exact, always', bn: 'সবসময় হুবহু' },
        ],
        answer: 1,
        hint: { en: 'InnoDB samples 20 pages by default.', bn: 'ডিফল্টে InnoDB ২০টি পাতা নমুনা করে।' },
        explanation: { en: 'Cardinality comes from sampled pages (innodb_stats_persistent_sample_pages), so skewed data or a freshly loaded table misleads it; ANALYZE TABLE or a histogram corrects the guess.', bn: 'cardinality আসে নমুনা-নেওয়া পাতা থেকে (innodb_stats_persistent_sample_pages), তাইঅসম বণ্টন বা নতুন-ঢোকানো table-এ ভুল হয়; ANALYZE TABLE বা histogram ঠিক করে।' },
      },
      {
        id: 'reading-the-plan-q4',
        kind: 'mcq',
        topic: 'mysql: Reading the Plan: EXPLAIN',
        question: { en: 'Which EXPLAIN variant runs the query and prints real timings?', bn: 'কোন EXPLAIN রূপ query চালিয়ে প্রকৃত সময় ছাপে?' },
        options: [
          { en: 'EXPLAIN EXTENDED', bn: 'EXPLAIN EXTENDED' },
          { en: 'EXPLAIN ANALYZE', bn: 'EXPLAIN ANALYZE' },
          { en: 'EXPLAIN FORMAT=JSON', bn: 'EXPLAIN FORMAT=JSON' },
          { en: 'EXPLAIN PARTITIONS', bn: 'EXPLAIN PARTITIONS' },
        ],
        answer: 1,
        hint: { en: 'It came in with 8.0.18.', bn: '৮.০.১৮-এ এসেছে।' },
        explanation: { en: 'EXPLAIN ANALYZE executes and reports actual time, rows and loops per node; because it runs the statement, wrap a write in a transaction you roll back.', bn: 'EXPLAIN ANALYZE চালিয়ে প্রতি node-এর প্রকৃত সময়, rows ও loops জানায়; সত্যিই চলায়, তাই লেখা বিবৃতি rollback-যোগ্য transaction-এ রাখুন।' },
      },
    ],
  },
  nextLesson: {
    slug: 'tuning-the-slow-query',
    tech: 'mysql',
    title: { en: 'Tuning the Slow Query', bn: 'ধীর query ঠিক করা' },
  },
};
