import type { Lesson } from '../../../lib/types';

export const SubqueriesUnionsAndCtesLesson: Lesson = {
  slug: 'subqueries-unions-and-ctes',
  tech: 'mysql',
  title: { en: 'Subqueries, UNION and CTEs', bn: 'subquery, UNION আর CTE' },
  summary: { en: 'A subquery is a question used as an answer. Learn which shapes MySQL rewrites into a join, when NOT IN bites you with NULL, and how a WITH clause names a step without building a temp table.', bn: 'subquery মানে জবাব হিসেবে ব্যবহৃত একটি প্রশ্ন। কোন আকৃতি MySQL join-এ বদলে ফেলে, NOT IN কখন NULL নিয়ে কামড় দেয়, আর WITH clause কীভাবে সাময়িক সারণী না-বানিয়ে ধাপকে নাম দেয়।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Subqueries, UNION and CTEs', bn: 'WHAT — subquery, UNION আর CTE' },
    },
    {
      type: 'para',
      text: { en: 'Some questions have a number inside them that you do not know yet: which customers spent more than the average — but what is the average? You could run one query, read the figure, and type it into the next. Or you can ask both at once and let the engine hold the number for you.', bn: 'কিছু প্রশ্নের ভেতরে এমন একটা সংখ্যা থাকে যা আপনি এখনো জানেন না: কোন customer গুলো গড়ের বেশি খরচ করেছে — কিন্তু গড় কত? একটি query চালিয়ে সংখ্যাটা পড়ে পরেরটিতে টাইপ করা যেত। অথবা দুটোই একসঙ্গে জিজ্ঞেস করা যায়, সংখ্যাটা engine ধরে রাখবে।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'IN (SELECT ...) is transformed — into a semi-join, an exists test, or a materialised list — so writing it plainly is not the slow option; writing it so the transform cannot apply is.',
          bn: 'IN (SELECT ...) বদলে যায় — semi-join, exists পরীক্ষা, বা তালিকাভুক্ত মান — তাই সহজভাবে লেখা ধীর নয়; যে লেখায় বদলানো যায় না, সেটি ধীর।',
        },
        {
          en: 'UNION removes duplicates by building a distinct set, UNION ALL does not; if you do not need the dedup, pay for it nowhere.',
          bn: 'UNION দ্বৈত সরিয়ে আলাদা সেট বানায়, UNION ALL সরায় না; dedup-এর দরকার না-থাকলে তার খরচও না-দেন।',
        },
        {
          en: 'A CTE is a name, not a table: MySQL may inline it, and a recursive one is the clean way to walk a parent_id tree.',
          bn: 'CTE একটা নাম, table নয়; MySQL সেটি ভেতরে মিশিয়ে দিতে পারে, আর recursive CTE parent_id-এর গাছ হাঁটার পরিষ্কার পথ।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'subqueries.sql',
      code: `-- scalar: one value, used as a number
SELECT id, total FROM orders
 WHERE total > (SELECT AVG(total) FROM orders);

-- semi-join: which customers bought at all
SELECT id, email FROM customer
 WHERE id IN (SELECT customer_id FROM orders WHERE created_at >= '2026-09-01');

-- anti-join that survives NULL
SELECT c.id FROM customer c
 WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);

-- name a step, then use it twice
WITH monthly AS (
  SELECT customer_id, DATE_FORMAT(created_at, '%Y-%m') AS ym, SUM(total) AS spend
    FROM orders GROUP BY customer_id, ym
)
SELECT ym, COUNT(*) AS customers, AVG(spend) AS average
  FROM monthly GROUP BY ym ORDER BY ym DESC;

-- the tree, top down
WITH RECURSIVE path AS (
  SELECT id, name, parent_id, 1 AS depth FROM category WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id, p.depth + 1 FROM category c JOIN path p ON c.parent_id = p.id
  WHERE p.depth < 20
)
SELECT * FROM path ORDER BY depth, name;`,
      caption: { en: 'The recursion guard (WHERE p.depth < 20) matters: a cycle in parent_id would otherwise loop to cte_max_recursion_depth and fail.', bn: 'থামার শর্ত (WHERE p.depth < 20) দরকারি: parent_id-এ চক্র থাকলে নইলে cte_max_recursion_depth পর্যন্ত ঘুরে fail করবে।' },
    },
    {
      type: 'table',
      head: [
        { en: 'shape', bn: 'আকৃতি' },
        { en: 'what the optimizer does', bn: 'optimizer কী করে' },
        { en: 'safe choice', bn: 'নিরাপদ বেছে' },
      ],
      rows: [
        [
          { en: 'col = (subquery)', bn: 'col = (subquery)' },
          { en: 'runs it once, caches the single value', bn: 'একবার চালিয়ে একটাই মান ধরে রাখে' },
          { en: 'fine; must return one row', bn: 'ঠিক আছে; এক সারি ফেরত দিতেই হবে' },
        ],
        [
          { en: 'col IN (subquery)', bn: 'col IN (subquery)' },
          { en: 'semi-join, exists, or materialised list', bn: 'semi-join, exists, বা তালিকা' },
          { en: 'prefer IN; EXISTS when the outer table is small', bn: 'IN বরং; বাইরের table ছোট হলে EXISTS' },
        ],
        [
          { en: 'col NOT IN (subquery)', bn: 'col NOT IN (subquery)' },
          {
            en: 'cannot be a semi-join; NULL in the list kills it',
            bn: 'semi-join হতে পারে না; তালিকায় NULL থাকলে সব উবে যায়',
          },
          { en: 'use NOT EXISTS instead', bn: 'বদলে NOT EXISTS লিখুন' },
        ],
        [
          { en: 'FROM (SELECT ...) d', bn: 'FROM (SELECT ...) d' },
          {
            en: 'merged if it is a plain projection, else materialised',
            bn: 'শুদু projection হলে মিশে যায়, না-হলে সাজানো হয়',
          },
          { en: 'name it and keep it simple', bn: 'নাম দিন, সহজ রাখুন' },
        ],
        [
          { en: 'correlated subquery in SELECT list', bn: 'select তালিকায় correlated subquery' },
          { en: 'runs once per outer row: an N+1 inside SQL', bn: 'বাইরের সারি প্রতি একবার চলে: SQL-এর ভেতরের N+1' },
          { en: 'rewrite as a join with GROUP BY', bn: 'GROUP BY সহ join লিখুন' },
        ],
      ],
      caption: { en: 'Nothing here says subqueries are slow. It says a subquery that repeats per row, or that no rewrite can reach, is slow.', bn: 'এখানে বলা হচ্ছে না subquery ধীর। বলা হচ্ছে যে subquery সারি-প্রতি চলে, বা যেটি কোনো rewriting-এ ধরা দেয় না, সেটিই ধীর।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'semi-join',
          def: { en: 'A join that only asks whether a match exists, so duplicates on the inner side cannot multiply the outer rows.', bn: 'যে জোড়া শুধু জিজ্ঞেস করে মিল আছে কি না, তাই ভেতরের দিকের দ্বৈত বাইরের সারি গুণিত করে না।' },
        },
        {
          term: 'derived table',
          def: { en: 'A subquery in FROM: a result set the query builds, names, and reads again.', bn: 'FROM-এর subquery: query নিজে যে ফলাফল গড়ে নাম দেয় আবার পড়ে।' },
        },
        {
          term: 'common table expression',
          def: { en: 'WITH name AS (...) — a readable step, possibly recursive, without a temp table of its own.', bn: 'WITH name AS (...) — পড়ার মতো এক ধাপ, চাইলে recursive, নিজস্ব temp table ছাড়াই।' },
        },
        {
          term: 'UNION',
          def: { en: 'Stacks result sets of equal column count and type class, removing duplicates unless UNION ALL is written.', bn: 'সমান সংখ্যক-ধরনের column-এর ফল স্তূপ করে, দ্বৈত সরিয়ে দেয় — UNION ALL লিখলে না-সরায়।' },
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
          title: { en: '1. Pick the shape of the question', bn: '১. প্রশ্নের আকৃতি বাছুন' },
          text: { en: 'One number, a list of keys, or a yes/no per row — each has its own construct.', bn: 'একটি সংখ্যা, key-এর তালিকা, নাকি সারি-প্রতি হ্যাঁ/না — প্রতিটির নিজস্ব রূপ আছে।' },
        },
        {
          title: { en: '2. Write the filter so it can be pushed', bn: '২. ছাঁকনি এমনি লিখুন যা সামনে যায়' },
          text: { en: 'Keep the predicate on the inner table’s own columns so MySQL can use its index.', bn: 'শর্ত ভেতরের table-এর নিজের column-এ রাখুন, যাতে MySQL তার index ব্যবহার করতে পারে।' },
        },
        {
          title: { en: '3. Name the middle step', bn: '৩. মাঝের ধাপকে নাম দিন' },
          text: { en: 'A CTE makes a two-stage report readable and lets the same step be used twice.', bn: 'দুই ধাপের report-এ CTE পড়ার মতো করে, আর একই ধাপ দুবার ব্যবহার করা যায়।' },
        },
        {
          title: { en: '4. Guard the recursion', bn: '৪. recursion-এ সীমা দিন' },
          text: { en: 'Depth limit or a cycle test, because a bad parent_id is an infinite walk otherwise.', bn: 'গভীরতার সীমা বা চক্র-পরীক্ষা দিন, নইলে একটি ভুল parent_id অসীম হাঁটা।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Subqueries, UNION and CTEs: the moving parts', bn: 'subquery, UNION আর CTE: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Subqueries, UNION and CTEs">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Pick the shape of the question</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">One number, a list of keys, or a yes/no per</text>
<text x="352" y="79" font-size="11" fill="currentColor">row — each has its own construct.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Write the filter so it can be pus…</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Keep the predicate on the inner table’s own</text>
<text x="352" y="151" font-size="11" fill="currentColor">columns so MySQL can use its index.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Name the middle step</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">A CTE makes a two-stage report readable and</text>
<text x="352" y="223" font-size="11" fill="currentColor">lets the same step be used twice.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Guard the recursion</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">Depth limit or a cycle test, because a bad</text>
<text x="352" y="295" font-size="11" fill="currentColor">parent_id is an infinite walk otherwise.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">The fix for a correlated subquery is almost always a join plus GROUP BY: the engine does the pe…</text>
</svg>`,
      caption: { en: 'The fix for a correlated subquery is almost always a join plus GROUP BY: the engine does the per-row work in one pass with the same answer.', bn: 'correlated subquery-এর প্রায় সব fix-ই join + GROUP BY: একই উত্তর engine এক পাসে বার করে, সারি-প্রতি নয়।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'The fix for a correlated subquery is almost always a join plus GROUP BY: the engine does the per-row work in one pass with the same answer.', bn: 'correlated subquery-এর প্রায় সব fix-ই join + GROUP BY: একই উত্তর engine এক পাসে বার করে, সারি-প্রতি নয়।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'NOT IN with a nullable column', bn: 'nullable column-এ NOT IN' },
      text: { en: 'If the subquery can return NULL, NOT IN (1, 2, NULL) is UNKNOWN for every row and the result is empty — with no error to tell you.', bn: 'subquery NULL দিতে পারে এমন হলে NOT IN (1, 2, NULL) প্রতিটি সারিতে UNKNOWN দেয়, ফলাফল ফাঁকা — আর কোনো errorও নেই।' },
    },
  ],
  exercises: [
    {
      id: 'subqueries-unions-and-ctes-ex1',
      kind: 'mcq',
      topic: 'mysql: Subqueries, UNION and CTEs',
      question: { en: 'Find customers with no orders, safely, on a schema where customer_id can be NULL. Which?', bn: 'যে schema-য় customer_id NULL হতে পারে, সেখানে অর্ডার-বিহীন customer নিরাপদে খুঁজবেন কীভাবে?' },
      options: [
        {
          en: 'WHERE id NOT IN (SELECT customer_id FROM orders)',
          bn: 'WHERE id NOT IN (SELECT customer_id FROM orders)',
        },
        {
          en: 'WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id)',
          bn: 'WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id)',
        },
        { en: 'WHERE (SELECT COUNT(*) FROM orders) = 0', bn: 'WHERE (SELECT COUNT(*) FROM orders) = 0' },
        {
          en: 'WHERE id <> ALL (SELECT customer_id FROM orders)',
          bn: 'WHERE id <> ALL (SELECT customer_id FROM orders)',
        },
      ],
      answer: 1,
      hint: { en: 'EXISTS answers per row and never compares to NULL.', bn: 'EXISTS সারি-প্রতি জবাব দেয়, NULL-এর সাথে তুলনা করে না।' },
      explanation: { en: 'NOT EXISTS is immune to NULL in the subquery result; NOT IN is poisoned by a single NULL. The LEFT JOIN ... IS NULL form is equally correct.', bn: 'subquery-এর ফলে একটি NULL থাকলেই NOT IN Vish হয়ে যায়, NOT EXISTS হয় না। LEFT JOIN ... IS NULLও সমতুল্য।' },
    },
    {
      id: 'subqueries-unions-and-ctes-ex2',
      kind: 'fill',
      topic: 'mysql: Subqueries, UNION and CTEs',
      question: { en: 'Write the clause that stacks two result sets without removing duplicates.', bn: 'দুটি ফলাফল দ্বৈত-সরানো ছাড়া স্তূপ করার অংশটি লিখুন।' },
      answer: 'UNION ALL',
      accept: [
        'UNION ALL',
        'union all',
        'UNION ALL;',
      ],
      hint: { en: 'Two words, the second one is ALL.', bn: '২টি শব্দ, যার ১টি হলো ALL।' },
      explanation: { en: 'UNION ALL keeps every row from both sides and skips the deduplication step, so it is both faster and honest when duplicates are legitimate.', bn: 'UNION ALL দুই পাশের সব সারি রাখে, dedup ধাপটা বাদ দেয় — দ্বৈত বৈধ হলে দ্রুতও, সৎ-ও।' },
    },
    {
      id: 'subqueries-unions-and-ctes-ex3',
      kind: 'mcq',
      topic: 'mysql: Subqueries, UNION and CTEs',
      question: { en: 'A report shows each order with the customer’s order count via a correlated subquery in the select list. Why is that slow?', bn: 'প্রতিটি order-এর পাশে customer-এর মোট অর্ডার সংখ্যা select তালিকার correlated subquery দিয়ে দেখানো হচ্ছে। এটি ধীর কেন?' },
      options: [
        { en: 'Subqueries cannot use indexes', bn: 'subquery-তে index লাগে না' },
        { en: 'It runs once for every outer row', bn: 'বাইরের প্রতিটি সারির জন্য একবার করে চলে' },
        { en: 'COUNT forces a temp table', bn: 'COUNT temp table বাধ্য করে' },
        { en: 'It is only slow before 8.0', bn: 'শুধু ৮.০-এর আগে ধীর' },
      ],
      answer: 1,
      hint: { en: 'Multiply: outer rows x inner cost.', bn: 'গুণ করুন: বাইরের সারি x ভেতরের খরচ।' },
      explanation: { en: 'Correlation means the inner query is re-executed with a new value per row, so a million outer rows is a million lookups — the SQL mirror of the N+1 query pattern.', bn: 'correlated মানে ভেতরের query প্রতি সারিতে নতুন মান নিয়ে আবার চলে; দশ লক্ষ বাইরের সারি মানে দশ লক্ষ খোঁজা — SQL-রূপে সেটিই N+1।' },
    },
  ],
  quiz: {
    id: 'subqueries-unions-and-ctes-quiz',
    title: { en: 'Quiz — Subqueries, UNION and CTEs', bn: 'কুইজ — subquery, UNION আর CTE' },
    questions: [
      {
        id: 'subqueries-unions-and-ctes-q1',
        kind: 'mcq',
        topic: 'mysql: Subqueries, UNION and CTEs',
        question: { en: 'What does the optimizer do with a plain IN (subquery) on an indexed column?', bn: 'index-ওয়ালা column-এ সরল IN (subquery) নিয়ে optimizer কী করে?' },
        options: [
          { en: 'Runs the subquery once per row', bn: 'সারি-প্রতি subquery চালায়' },
          { en: 'Transforms it into a semi-join', bn: 'সেটি semi-join-এ বদলে দেয়' },
          { en: 'Refuses to plan it', bn: 'পরিকল্পনা করতে অস্বীকার করে' },
          { en: 'Materialises the outer table', bn: 'বাইরের table সাজিয়ে ফেলে' },
        ],
        answer: 1,
        hint: { en: 'It is a rewrite, not a loop.', bn: 'এটি rewriting, loop নয়।' },
        explanation: { en: 'MySQL has several transformations for IN subqueries — firstmatch, materialization, exists — and picks by cost; all of them avoid row-at-a-time execution.', bn: 'MySQL-এ IN subquery-এর কয়েকটি রূপান্তর আছে — firstmatch, materialization, exists — খরচ দেখে একটি বেছে নেয়; কোনোটিই সারি-প্রতি চালায় না।' },
      },
      {
        id: 'subqueries-unions-and-ctes-q2',
        kind: 'mcq',
        topic: 'mysql: Subqueries, UNION and CTEs',
        question: { en: 'A derived table containing GROUP BY is best described as what?', bn: 'যে derived table-এর ভেতর GROUP BY আছে, তাকে কী বলা সবচেয়ে ঠিক?' },
        options: [
          { en: 'Merged into the outer query', bn: 'বাইরের query-তে মিশে যায়' },
          {
            en: 'Materialised: a hidden temp result the outer query reads',
            bn: 'সাজানো হয়: বাইরের query যে গোপন সাময়িক ফল পড়ে',
          },
          { en: 'Rejected as ambiguous', bn: 'অস্পষ্ট বলে প্রত্যাখ্যাত' },
          { en: 'Turned into a view automatically', bn: 'আপনা থেকেই view হয়ে যায়' },
        ],
        answer: 1,
        hint: { en: 'Aggregation cannot be pushed into the outer block.', bn: 'aggregate বাইরের ব্লকে ঢোকানো যায় না।' },
        explanation: { en: 'Projection-only derived tables are merged away; once an aggregate, DISTINCT, LIMIT or window function appears, the result must be built, and its size is what you pay for.', bn: 'শুধু column-ছাঁটা derived table মিশে যায়; aggregate, DISTINCT, LIMIT বা window function থাকলে ফল গড়তেই হয়, গড়ার আকারই খরচ।' },
      },
      {
        id: 'subqueries-unions-and-ctes-q3',
        kind: 'mcq',
        topic: 'mysql: Subqueries, UNION and CTEs',
        question: { en: 'Why might WITH be preferred over a nested subquery here?', bn: 'এই অবস্থায় বাসা-ভেতরে-বাসা subquery-এর বদলে WITH কেন পছন্দ?' },
        options: [
          { en: 'It is always faster', bn: 'সবসময় দ্রুত' },
          {
            en: 'One step can be referenced twice and read on its own line',
            bn: 'এক ধাপ দুবার ব্যবহার করা যায়, আলাদা লাইনে পড়াও যায়',
          },
          { en: 'It skips the optimizer', bn: 'optimizer এড়িয়ে যায়' },
          { en: 'It allows ORDER BY inside', bn: 'ভেতরে ORDER BY চলে' },
        ],
        answer: 1,
        hint: { en: 'Naming is the feature.', bn: 'নাম দেওয়াই বৈশিষ্ট্য।' },
        explanation: { en: 'A CTE is a name for a step: same plan quality as the inline form, but the reader sees the stages, and reuse does not duplicate the text.', bn: 'CTE হলো ধাপের নাম: পরিকল্পনা inline-এর মতোই, কিন্তু পাঠক ধাপ দেখেন, বারবার ব্যবহারে লেখা ডুপ্লিকেট হয় না।' },
      },
      {
        id: 'subqueries-unions-and-ctes-q4',
        kind: 'mcq',
        topic: 'mysql: Subqueries, UNION and CTEs',
        question: { en: 'What stops a recursive CTE from running forever?', bn: 'recursive CTE-কে অনন্ত চলা থেকে কী থামায়?' },
        options: [
          { en: 'The query cache', bn: 'query cache সক্রিয় করা' },
          {
            en: 'The recursion ends when a step yields no new rows, plus cte_max_recursion_depth',
            bn: 'এক ধাপে নতুন সারি না-এলে থামে, সাথে cte_max_recursion_depth',
          },
          { en: 'A LIMIT in the inner query, mandatory', bn: 'ভেতরের query-তে বাধ্যতামূলক LIMIT' },
          { en: 'Nothing; it errors after one second', bn: 'কিছু না; এক সেকেন্ডে error দেয়' },
        ],
        answer: 1,
        hint: { en: 'Two brakes, one of them a server variable.', bn: '২টি ব্রেক, যার ১টি হলো server variable।' },
        explanation: { en: 'UNION ALL in a recursive CTE feeds only newly produced rows back, so an empty step ends it; a cycle feeds forever until cte_max_recursion_depth raises an error.', bn: 'recursive CTE-এ UNION ALL শুধু নতুন সারি পিছনে পাঠায়, তাই ফাঁকা ধাপেই শেষ; চক্র থাকলে cte_max_recursion_depth error না-দেওয়া পর্যন্ত চলতে থাকে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'indexes-and-the-b-tree',
    tech: 'mysql',
    title: { en: 'Indexes and the B+Tree', bn: 'index আর B+Tree' },
  },
};
