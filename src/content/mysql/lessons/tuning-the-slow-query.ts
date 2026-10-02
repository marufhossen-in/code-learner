import type { Lesson } from '../../../lib/types';

export const TuningTheSlowQueryLesson: Lesson = {
  slug: 'tuning-the-slow-query',
  tech: 'mysql',
  title: { en: 'Tuning the Slow Query', bn: 'ধীর query ঠিক করা' },
  summary: { en: 'A method, not a bag of tricks: find it in the slow log, reproduce it, read the plan, cut the work, then measure again with the same ruler.', bn: 'একটি পদ্ধতি, কৌশলের ঝোলা নয়: slow log-এ খুঁজে বের করুন, যেমন ছিল তেমনই চালান, plan পড়ুন, কাজ কমান, তারপর মাপকাটি না-বদলে আবার মেপে নিন।' },
  minutes: 11,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Tuning the Slow Query', bn: 'WHAT — ধীর query ঠিক করা' },
    },
    {
      type: 'para',
      text: { en: 'Somewhere on the site a page takes four seconds, and the log says its query reads 900,000 rows to show twenty. That is not a mystery to argue about. It is one of four problems — too many reads, too much sorting, a temporary table, or too many round trips — and each has a different fix.', bn: 'site-এর এক জায়গায় পাতা চার সেকেন্ড নেয়, আর log বলে তার query বিশটি সারি দেখানোর জন্য ৯০০,০০০টি সারি পড়ছে। এটি নিয়ে তর্কের বিষয় নয়, সমস্যা চারটির একটা — অতিরিক্ত পড়া, অতিরিক্ত সাজানো, সাময়িক টেবিল, নাকি বারবার যাতায়াত — আর প্রতিটির ওষুধ আলাদা।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'A query is slow for one of four reasons: it reads too much, sorts too much, talks too often, or waits — and each has a different cure.',
          bn: 'query ধীর হওয়ার চার কারণের ১টি: অতিরিক্ত পড়ে, অতিরিক্ত সাজায়, বারবার যোগাযোগ করে, বা অপেক্ষা করে — প্রতিটির ওষুধ আলাদা।',
        },
        {
          en: 'The slow log with long_query_time and log_queries_not_using_indexes gives you a list ranked by real time, which beats any hunch from the code.',
          bn: 'long_query_time ও log_queries_not_using_indexes সহ slow log প্রকৃত সময়ে সাজানো তালিকা দেয় — code-এর কোনো ধারণার চেয়ে শ্রেষ্ঠ।',
        },
        {
          en: 'One round trip per page is a client-side bug wearing a database costume: batching, or one query with a join, is often the whole fix.',
          bn: 'প্রতি পেজে এক যাতায়াত client-এর bug, database-এর পোশাকে: দলে ভেঙে বা join-এ এক query-ই প্রায় পুরো সমাধান।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'tune.sql',
      code: `-- 1. catch it
SHOW VARIABLES LIKE 'slow_query_log%';
SET GLOBAL long_query_time = 0.1;
-- also useful: log_slow_extra=ON (8.0.21+) prints rows, lock time and index names

-- 2. measure honestly: run it twice, the second time from a warm buffer pool
SELECT SQL_NO_CACHE COUNT(*) FROM orders WHERE customer_id = 7;

-- 3. cut the work
--    deep page  -> keyset pagination
SELECT id, total FROM orders WHERE customer_id = 7 AND id > ? ORDER BY id LIMIT 20;
--    1000 small selects -> one round trip
SELECT id FROM product WHERE id IN (?, ?, ?, ?);
--    big sort -> let an index provide the order, or select less per row

-- 4. prove it
SELECT NOW(), COUNT(*) FROM performance_schema.events_statements_summary_by_digest
 WHERE DIGEST_TEXT LIKE '%orders%' ORDER BY SUM_TIMER_WAIT DESC LIMIT 5;`,
      caption: { en: 'performance_schema digest tables answer “which statement class ate the time”, which is where tuning should start.', bn: 'performance_schema-এর digest টেবিল বলে “কোন বিবৃতির শ্রেণি সময় খেয়েছে” — ঠিক জায়গা থেকেই tuning শুরু করা উচিত।' },
    },
    {
      type: 'table',
      head: [
        { en: 'symptom in the plan', bn: 'plan-এ লক্ষণ' },
        { en: 'what it costs', bn: 'কী খরচ' },
        { en: 'the cut', bn: 'কেটে ফেলুন' },
      ],
      rows: [
        [
          { en: 'ALL on a large table', bn: 'বড় table-এ ALL' },
          { en: 'every row is read and tested', bn: 'প্রতিটি সারি পড়া ও যাচাই হয়' },
          {
            en: 'an index on the filter, or accept the scan for tiny tables',
            bn: 'যে column-এ ছাঁকা হয় সেখানে index, অথবা ছোট table-এ scan মেনে নিন',
          },
        ],
        [
          { en: 'Using filesort with no LIMIT', bn: 'LIMIT ছাড়া Using filesort' },
          { en: 'the whole set is sorted', bn: 'পুরো সেট সাজানো হয়' },
          { en: 'an index in the wanted order, or a LIMIT to bound it', bn: 'চাওয়া ক্রমে index, অথবা সীমার জন্য LIMIT' },
        ],
        [
          { en: 'Using temporary', bn: 'Using temporary' },
          { en: 'a work table is built, maybe on disk', bn: 'কাজের টেবিল গড়া হয়, সম্ভবত ডিস্কে' },
          { en: 'group by fewer, or by the index prefix', bn: 'কম সংখ্যক column-এ group, বা index-এর prefix' },
        ],
        [
          { en: 'rows estimate far below actual', bn: 'rows আনুমানিক প্রকৃতের অনেক নিচে' },
          { en: 'a bad plan is chosen for the whole query', bn: 'পুরো query-র পরিকল্পনা ভুল বাছাই' },
          { en: 'ANALYZE TABLE; histograms for skewed columns', bn: 'ANALYZE TABLE; একপক্ষ  column-এর histogram' },
        ],
        [
          { en: 'Same short query, thousands of times', bn: 'একই ছোট query হাজারবার' },
          { en: 'round trips dominate', bn: 'যাতায়াতই বেশি খায়' },
          { en: 'IN-list, join, or a cached aggregate table', bn: 'IN-list, join, বা cached aggregate table' },
        ],
        [
          { en: 'Lock waits, not CPU', bn: 'CPU নয়, lock-এর অপেক্ষা' },
          { en: 'time is spent blocked', bn: 'সময় আটকে কাটে' },
          { en: 'shorter transactions, hot rows updated less', bn: 'transaction ছোট, গরম সারি কম বদলান' },
        ],
      ],
      caption: { en: 'Only the last row is not a plan problem; that is why reading the wait event, not just the plan, comes before tuning.', bn: 'শেষ সারিটি ছাড়া বাকি সব plan-এর সমস্যা; তাই tuning-এর আগে plan নয়, wait event পড়া দরকার।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'buffer pool',
          def: { en: 'InnoDB’s cache of data pages; a query that fits it is fast, one that evicts it is a system-wide event.', bn: 'InnoDB-এর data page cache; যে query এতে ধরে সে দ্রুত, যে এটি ঠেলে ফেলে সে সিস্টেম-ব্যাপী ঘটনা।' },
        },
        {
          term: 'digest',
          def: { en: 'The fingerprint of a statement with literals removed, so a thousand variants count as one.', bn: 'ধ্রুবক বাদ দিয়ে বিবৃতির ছাপ, তাই হাজার রূপ এক হিসেবে গনা হয়।' },
        },
        {
          term: 'histogram',
          def: { en: 'ANALYZE TABLE ... UPDATE HISTOGRAM ON col: value distribution for columns that have no index, so the optimizer can see skew.', bn: 'ANALYZE TABLE ... UPDATE HISTOGRAM ON col: index-না-থাকা column-এর মানের বণ্টন, যাতে optimizer একপক্ষ দেখতে পায়।' },
        },
        {
          term: 'covering rewrite',
          def: { en: 'Choosing exactly the columns an index already holds, so the row is never touched.', bn: 'যে column গুলো index-এ আগেই আছে ঠিক সেগুলোই বাছা, ফলে সারি ছোঁয়াই হয় না।' },
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
          title: { en: '1. Find it by time, not by eye', bn: '১. চোখে নয়, সময় মেপে খুঁজুন' },
          text: { en: 'The slow log or the digest table, ordered by total wait time, so the biggest eater is first.', bn: 'slow log বা digest টেবিল, মোট অপেক্ষার সময় অনুসারে সাজানো — সবচেয়ে বড় খেয়ে-দাওয়া আগে।' },
        },
        {
          title: { en: '2. Reproduce it alone', bn: '২. একা চালিয়ে দেখুন' },
          text: { en: 'Run it with the real parameters, twice, and time it; concurrency numbers lie when you have not warmed the cache.', bn: 'আসল মান নিয়ে দুবার চালান, সময় মাপুন; cache গরম না-করা অবস্থায় concurrency-এর সংখ্যা মিথ্যা বলে।' },
        },
        {
          title: { en: '3. Attack the biggest step', bn: '৩. সবচেয়ে বড় ধাপে আঘাত' },
          text: { en: 'Reads, then sort, then temporary, then round trips — in that order of cost.', bn: 'আগে পড়া, তারপর sort, তারপর temporary, তারপর যাতায়াত — খরচের এই ক্রমে।' },
        },
        {
          title: { en: '4. Keep the ruler fixed', bn: '৪. মাপকা স্থির রাখুন' },
          text: { en: 'Same data size, same parameters, same warm state; report milliseconds and rows examined, not how it felt.', bn: 'একই আকারের data, একই মান, একই গরম অবস্থা; কেমন লাগল নয়, মিলিসেকেন্ড আর পরীক্ষা করা সারির সংখ্যা লিখুন।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Tuning the Slow Query: the moving parts', bn: 'ধীর query ঠিক করা: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Tuning the Slow Query">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Find it by time, not by eye</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">The slow log or the digest table, ordered by</text>
<text x="352" y="79" font-size="11" fill="currentColor">total wait time, so the biggest eater is firs…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Reproduce it alone</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Run it with the real parameters, twice, and</text>
<text x="352" y="151" font-size="11" fill="currentColor">time it; concurrency numbers lie when you hav…</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Attack the biggest step</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Reads, then sort, then temporary, then round</text>
<text x="352" y="223" font-size="11" fill="currentColor">trips — in that order of cost.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Keep the ruler fixed</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">Same data size, same parameters, same warm</text>
<text x="352" y="295" font-size="11" fill="currentColor">state; report milliseconds and rows examined,…</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Rows examined and rows sent is the ratio that separates a tuned query from a lucky one; you wan…</text>
</svg>`,
      caption: { en: 'Rows examined and rows sent is the ratio that separates a tuned query from a lucky one; you want it close to one.', bn: 'পরীক্ষা করা সারি বনাম পাঠানো সারির অনুপাতই ঠিক-করা query-কে ভাগ্যের query থেকে আলাদা করে; এটি এক-এর কাছে চাই।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Rows examined and rows sent is the ratio that separates a tuned query from a lucky one; you want it close to one.', bn: 'পরীক্ষা করা সারি বনাম পাঠানো সারির অনুপাতই ঠিক-করা query-কে ভাগ্যের query থেকে আলাদা করে; এটি এক-এর কাছে চাই।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Tuning on an idle laptop', bn: 'খালি ল্যাপটপে tuning' },
      text: { en: 'A billion-row table tested on a thousand rows, or a warm cache measured cold, gives you an index for a workload that does not exist — and a bill on the real server.', bn: 'একশ কোটির table হাজার সারিতে পরীক্ষা, বা ঠাণ্ডা cache গরম করে না-মেপে — এমন workload-এর জন্য index বানানো হয় যেটি নেই, আর আসল server-এ বিল আসে।' },
    },
  ],
  exercises: [
    {
      id: 'tuning-the-slow-query-ex1',
      kind: 'mcq',
      topic: 'mysql: Tuning the Slow Query',
      question: { en: 'A page needs rows 400,000 to 400,020 of a sorted list. What is the right rewrite?', bn: 'এক পেজ ordered list-এর ৪০০,০০০ থেকে ৪০০,০২০ নম্বর সারি চায়। ঠিক rewrite কোনটি?' },
      options: [
        { en: 'LIMIT 400000, 20 with an index', bn: 'index সহ LIMIT 400000, 20' },
        {
          en: 'Remember the last id seen: WHERE id > ? ORDER BY id LIMIT 20',
          bn: 'শেষ দেখা id মনে রাখুন: WHERE id > ? ORDER BY id LIMIT 20',
        },
        { en: 'SELECT the whole set and slice it in the app', bn: 'পুরো সেট SELECT করে app-এ কাটুন' },
        { en: 'Increase max_allowed_packet', bn: 'max_allowed_packet বাড়ান' },
      ],
      answer: 1,
      hint: { en: 'Do not count rows to reach them.', bn: 'সারি গনে পৌঁোনো নয়, সোজা যাওয়া।' },
      explanation: { en: 'Keyset pagination seeks inside the index instead of generating and discarding four hundred thousand rows; the trade is that users cannot jump to an arbitrary page number.', bn: 'keyset pagination index-এর ভেতরে seek করে, চার লক্ষ সারি বানিয়ে ফেলে দেয় না; দেয় বিক্রি হলো যেকোনো পেজ নম্বরে লাফ দেওয়া যায় না।' },
    },
    {
      id: 'tuning-the-slow-query-ex2',
      kind: 'fill',
      topic: 'mysql: Tuning the Slow Query',
      question: { en: 'Which statement makes InnoDB resample index statistics for orders?', bn: 'orders-এর index statistics আবার নমুনা করতে কোন বিবৃতি?' },
      answer: 'ANALYZE TABLE orders',
      accept: [
        'ANALYZE TABLE orders',
        'analyze table orders',
        'ANALYZE TABLE orders;',
      ],
      hint: { en: 'Two words before the table name.', bn: 'table নামের আগে দুটি শব্দ।' },
      explanation: { en: 'ANALYZE TABLE updates the cardinality estimates the optimizer prices with; persistent sampling settings decide how many pages it looks at.', bn: 'ANALYZE TABLE optimizer-এর খরচ-বসানো cardinality আনুমানিক সংখ্যা হালনাগাদ করে; কয়টি পাতা দেখা হবে তা persistent sampling ঠিক করে।' },
    },
    {
      id: 'tuning-the-slow-query-ex3',
      kind: 'mcq',
      topic: 'mysql: Tuning the Slow Query',
      question: { en: 'The dashboard runs 400 tiny queries in a loop. What is the first structural fix?', bn: 'dashboard-এ loop-এ ৪০০টি ছোট query চলে। প্রথম গাঠনিক fix কী?' },
      options: [
        { en: 'Add a query cache', bn: 'query cache যোগ করুন' },
        {
          en: 'Combine them: one query with IN, or one with joins and grouping',
          bn: 'একসাথে করুন: IN সহ একটি query, বা join ও GROUP BY-র একটি',
        },
        { en: 'Raise sort_buffer_size', bn: 'sort_buffer_size বাড়ান' },
        { en: 'Make the loop parallel', bn: 'loop সমান্তরাল করুন' },
      ],
      answer: 1,
      hint: { en: 'Round trips, not work, are the cost here.', bn: 'এখানে খরচ কাজ নয়, যাতায়াত।' },
      explanation: { en: 'MySQL 8 has no query cache; four hundred statements pay four hundred parses, plans and network waits, while one statement pays once. Parallel loops only multiply the same cost louder.', bn: 'MySQL ৮ এ query cache নেই; চার শত বিবৃতি চার শত parse, plan ও network wait দেয়, ১টি বিবৃতি ১ বার দেয়। loop সমান্তরাল করলে সেই খরচ জোরে বাড়ে মাত্র।' },
    },
  ],
  quiz: {
    id: 'tuning-the-slow-query-quiz',
    title: { en: 'Quiz — Tuning the Slow Query', bn: 'কুইজ — ধীর query ঠিক করা' },
    questions: [
      {
        id: 'tuning-the-slow-query-q1',
        kind: 'mcq',
        topic: 'mysql: Tuning the Slow Query',
        question: { en: 'innodb_buffer_pool_size should normally be set to what?', bn: 'innodb_buffer_pool_size সাধারণত কত রাখতে হয়?' },
        options: [
          { en: 'As large as the data directory can ever grow', bn: 'datadir যত বড় হতে পারে তত' },
          {
            en: 'Roughly 60-80% of RAM on a dedicated database host',
            bn: 'দেওয়া-হওয়া database host-এ RAM-এর প্রায় ৬০-৮০%',
          },
          { en: 'One gigabyte, always a safe number', bn: 'এক গিগাবাইট, নিরাপদ সংখ্যা' },
          {
            en: 'Equal to max_connections times a session buffer',
            bn: 'max_connections গুণি একটি session buffer-এর সমান',
          },
        ],
        answer: 1,
        hint: { en: 'The rest of RAM is for OS, connections and sort buffers.', bn: 'বাকি RAM OS, সংযোগ ও sort buffer-এর।' },
        explanation: { en: 'Pages read from disk are the tax on a cold database; sizing the pool to hold the working set is the single highest-leverage setting, provided the operating system still has room.', bn: 'ডিস্ক থেকে পড়া পাতাই ঠাণ্ডা database-এর কর; কাজের অংশ ধরে রাখার মতো pool ঠিক করা একমাত্র সবচেয়ে কার্যকর সেটিং, শর্ত OS-এর জায়গা থাকা।' },
      },
      {
        id: 'tuning-the-slow-query-q2',
        kind: 'mcq',
        topic: 'mysql: Tuning the Slow Query',
        question: { en: 'Which metric shows a query is doing wasted reads?', bn: 'কোন সংখ্যা বলবে query অর্থহীন পড়ছে?' },
        options: [
          { en: 'Rows_examined far above Rows_sent', bn: 'Rows_examined Rows_sent-এর অনেক উপরে' },
          { en: 'Query time under 10 ms', bn: 'সময় ১০ ms-এর নিচে' },
          { en: 'A high value of Threads_cached', bn: 'Threads_cached বেশি' },
          { en: 'Lock time of zero', bn: 'Lock time শূন্য' },
        ],
        answer: 0,
        hint: { en: 'It is the ratio of work to useful work.', bn: 'কাজ বনলে দরকারি কাজের অনুপাত।' },
        explanation: { en: 'Examining a million rows to send twenty is the definition of a missing index; the ratio is per statement in the slow log and per digest in performance_schema.', bn: 'বিশটি সারি পাঠাতে দশ লক্ষ সারি পরীক্ষা করাই index-না-থাকার সংজ্ঞা; slow log-এ বিবৃতি-প্রতি, performance_schema-তে digest-প্রতি এই অনুপাত দেখা যায়।' },
      },
      {
        id: 'tuning-the-slow-query-q3',
        kind: 'mcq',
        topic: 'mysql: Tuning the Slow Query',
        question: { en: 'A query got slower after a table grew a JSON column that is always selected. Why?', bn: 'সবসময় SELECT করা JSON column যোগ হওয়ার পর query ধীর হলো। কেন?' },
        options: [
          { en: 'JSON disables the primary key', bn: 'JSON primary key নিষ্ক্রিয় করে' },
          {
            en: 'Off-page storage and a wider row mean more pages read per row',
            bn: 'বাইরে- রাখা অংশ আর মোটা সারি মানে সারি-প্রতি বেশি পাতা পড়া',
          },
          { en: 'The optimizer refuses JSON in covering indexes', bn: 'covering index-এ optimizer JSON নেয় না' },
          { en: 'It is only the client copying data', bn: 'client data কপি করা ছাড়া নয়' },
        ],
        answer: 1,
        hint: { en: 'Think about bytes moved, and SELECT what you need.', bn: 'কত byte নড়াচড়া করছে ভাবুন, যা দরকার তাই SELECT করুন।' },
        explanation: { en: 'Long values move to overflow pages, and every extra kilobyte per row means fewer rows per 16 KiB page — more reads, more buffer pool churn, more network.', bn: 'লম্বা মান overflow পাতায় চলে যায়, আর প্রতি সারিতে অতিরিক্ত কিলোবাইট মানে ১৬ KiB পাতায় কম সারি — বেশি পড়া, buffer pool-এ বেশি ঘোরা, বেশি network।' },
      },
      {
        id: 'tuning-the-slow-query-q4',
        kind: 'mcq',
        topic: 'mysql: Tuning the Slow Query',
        question: { en: 'What is the point of a histogram on a non-indexed column?', bn: 'index-না-থাকা column-এ histogram-এর কাজ কী?' },
        options: [
          { en: 'It speeds up filtering', bn: 'ছাঁকানো দ্রুত করে' },
          {
            en: 'It tells the optimizer how values are distributed, so range estimates stop lying',
            bn: 'মানের বণ্টন optimizer-কে বলে, তাই range আনুমানিক মিথ্যা বলে না',
          },
          { en: 'It acts like a covering index', bn: 'covering index-এর মতো কাজ করে' },
          { en: 'It caches the rows', bn: 'সারি cache করে' },
        ],
        answer: 1,
        hint: { en: 'It is statistics, not storage.', bn: 'এটি statistics, সংরক্ষণ নয়।' },
        explanation: { en: 'The optimizer otherwise assumes uniformity; a histogram of buckets lets a skewed column be priced honestly, which changes join order and index choice.', bn: 'না-থাকলে optimizer সুষম বণ্টন ধরে নেয়; bucket-এর histogram থাকলে একপক্ষ  column-এর দাম সঠিক বসে, তা join ক্রম ও index বাছাই বদলে দেয়।' },
      },
    ],
  },
  nextLesson: {
    slug: 'transactions-and-locks',
    tech: 'mysql',
    title: { en: 'Transactions and Locks', bn: 'transaction আর lock' },
  },
};
