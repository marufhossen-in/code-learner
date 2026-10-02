import type { Lesson } from '../../../lib/types';

export const readingWindowLesson: Lesson = {
  slug: 'the-reading-window',
  tech: 'rest',
  title: {
    en: 'The Reading Window: Offset, Keyset & Cursor-Based Pagination',
    bn: 'পাঠ-জানালা: অফসেট, কিসেট ও কার্সর-ভিত্তিক পেজিনেশন'
  },
  summary: {
    en: 'Master collection traversal and pagination architecture across 10 structured topics. Understand why unbounded API lists crash production systems. Compare Offset pagination with Keyset and Cursor-based pagination. Unpack the shifting-rug anomaly of offset pagination during concurrent writes. Explore the deep-paging performance cliff in SQL databases. Implement deterministic multi-field sorting, clean filtering syntax, RFC 8288 Link headers, and production-grade cursor generation.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ডেটা ট্রাভার্সাল এবং পেজিনেশন আর্কিটেকচার আয়ত্ত করুন। সীমাহীন ডেটা লিস্ট কেন প্রোডাকশন সিস্টেম ক্র্যাশ করায় তা জানুন। অফসেট পেজিনেশনের সাথে কিসেট ও কার্সর পেজিনেশনের তুলনা শিখুন। কনকারেন্ট ডেটা পরিবর্তনের সময় অফসেট পেজিনেশনে ডেটা বাদ পড়া ও ডুপ্লিকেট হওয়ার কারণ বুঝুন। ডাটাবেসের ডিপ-পেজিং পারফরম্যান্স সমস্যা সমাধান করুন। মাল্টি-ফিল্ড সর্টিং, পরিচ্ছন্ন ফিল্টারিং, RFC 8288 Link হেডার এবং কার্সর জেনারেটর বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-epoch-ledger',
    tech: 'rest',
    title: {
      en: 'The Epoch Ledger: API Versioning Strategies, Evolution & Deprecation',
      bn: 'যুগ-খাতা: API সংস্করণ কৌশল, বিবর্তন ও অবচয়'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Necessity of the Window: Unbounded List Hazards', bn: '১. জানার প্রয়োজনীয়তা: সীমাহীন ডেটা লিস্টের বিপদ' } },
    {
      type: 'para',
      text: {
        en: 'A database table containing two million rows cannot be delivered in a single HTTP response. Attempting to serialize a 2,000,000-row array exhausts server RAM, locks database connection pools, and chokes network pipelines. Traversal windows (pagination) partition massive datasets into predictable, bite-sized pages.',
        bn: '২,০০০,০০০ রেকর্ডের (২০ লাখ) একটি ডাটাবেস টেবিল কখনোই একটিমাত্র HTTP রেসপন্সে পাঠানো যায় না। ২,০০০,০০০ ডেটা একসাথে জেসনে রূপান্তর করতে গেলে সার্ভারের পুরো র‍্যাম শেষ হয়ে যায়, ডাটাবেস সংযোগ আটকে যায় এবং নেটওয়ার্ক জ্যাম তৈরি হয়। পেজিনেশন এই বিশাল ডেটাসেটকে নির্দিষ্ট আকারের ছোট ছোট পৃষ্ঠায় ভাগ করে পাঠায়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `The Three Pagination Archetypes:
1. Offset / Page-Based: ?page=3&limit=20
   -> Classic, bookmarkable, but vulnerable to drift and slow at depth.
2. Keyset / Seek-Based: ?after_id=8420&limit=20
   -> High-performance index seeks, drift-resistant, requires monotonic sort key.
3. Cursor-Based: ?cursor=ZXlKaGJHY2lPaUpJ...&limit=20
   -> Opaque tokens encoding multi-column position, industry standard for live feeds.`,
      caption: {
        en: 'Selecting the correct pagination architecture depends on dataset mutability and scale.',
        bn: 'ডেটার পরিবর্তনশীলতা এবং পরিমাণের ওপর ভিত্তি করে সঠিক পেজিনেশন পদ্ধতি বেছে নিতে হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Offset-Based Pagination: Simplicity vs Mechanics', bn: '২. অফসেট-ভিত্তিক পেজিনেশন: সহজবোধ্যতা বনাম কৌশল' } },
    {
      type: 'para',
      text: {
        en: 'Offset pagination addresses data by ordinal position: GET /users?page=3&limit=20 or GET /users?offset=40&limit=20. Under the hood, the SQL query translates directly to SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40. Its primary advantage is UI convenience: users can jump directly to page 5 or page 10.',
        bn: 'অফসেট পেজিনেশন ক্রমিক সংখ্যার সাহায্যে পৃষ্ঠার অবস্থান ঠিক করে: GET /users?page=3&limit=20 অথবা GET /users?offset=40&limit=20। ডাটাবেসের ভেতরে এটি সরাসরি SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40 কুয়েরিতে রূপান্তরিত হয়। এর সুবিধা হলো ইউজার সহজেই সরাসরি ৫ বা ১০ নম্বর পৃষ্ঠায় লাফ দিতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Converting page numbers to database limit and offset:
function calculatePagination(page = 1, pageSize = 20) {
  const safePage = Math.max(1, parseInt(page, 10) || 1);
  const safeLimit = Math.max(1, Math.min(100, parseInt(pageSize, 10) || 20));
  const offset = (safePage - 1) * safeLimit;

  return { limit: safeLimit, offset };
}

console.log("Page 1 DB coordinates:", calculatePagination(1, 20)); // { limit: 20, offset: 0 }
console.log("Page 3 DB coordinates:", calculatePagination(3, 20)); // { limit: 20, offset: 40 }`,
      caption: {
        en: 'Offset calculations map linear page numbers into SQL skip and limit parameters.',
        bn: 'অফসেট সূত্র পেজ নম্বরকে ডাটাবেসের স্কিপ এবং লিমিট সংখ্যায় রূপান্তরিত করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Shifting Rug Problem: The Fatal Flaw of Offset', bn: '৩. পরিবর্তনশীল মেঝের সমস্যা: অফসেট পেজিনেশনের মারাত্মক ত্রুটি' } },
    {
      type: 'para',
      text: {
        en: 'Offset pagination assumes a frozen dataset. In active systems where items are continuously added or deleted, offset pagination silently corrupts user traversal. If a new post is inserted while a user navigates from Page 1 to Page 2, every record shifts right by one position. The user sees the last item of Page 1 repeated as the first item of Page 2.',
        bn: 'অফসেট পেজিনেশন তখনই কাজ করে যখন ডেটা স্থির থাকে। যেসব সিস্টেমে প্রতিনিয়ত নতুন ডেটা যোগ বা বিয়োগ হচ্ছে, সেখানে অফসেট পেজিনেশন বিভ্রান্তি তৈরি করে। ইউজার যখন ১ নম্বর পৃষ্ঠা থেকে ২ নম্বর পৃষ্ঠায় যায়, ঠিক সেই মুহূর্তে নতুন পোস্ট যুক্ত হলে সব ডেটা এক ঘর ডানে সরে যায়। ফলে ১ নম্বর পৃষ্ঠার শেষ আইটেমটি ২ নম্বর পৃষ্ঠার শুরুতে পুনরায় দেখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MOMENT 1: User requests Page 1 (offset=0, limit=3)
Database rows: [A, B, C, D, E, F]
User receives: [A, B, C]

MOMENT 2: Another user inserts row 'NEW' at the beginning!
Database rows: [NEW, A, B, C, D, E, F]

MOMENT 3: User requests Page 2 (offset=3, limit=3)
Database skips first 3 rows (NEW, A, B) and takes next 3:
User receives: [C, D, E]

FATAL GLITCH: Item 'C' was duplicated and displayed twice!
If an item was deleted instead, a row would vanish unseen!`,
      caption: {
        en: 'Concurrent mutations cause offset pagination to silently duplicate or drop items.',
        bn: 'ডেটা যোগ বা বিয়োগের সময় অফসেট পেজিনেশন অসাবধানতাবশত ডেটা ডুপ্লিকেট করে বা বাদ দিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Keyset / Seek Pagination: Monotonic Index Traversal', bn: '৪. কিসেট / সিক পেজিনেশন: সূচকভিত্তিক ধারাবাহিক গতি' } },
    {
      type: 'para',
      text: {
        en: 'Keyset pagination eliminates drift by anchoring traversal to a unique, monotonic sorting attribute (such as an auto-incrementing ID or timestamp). Instead of specifying a row offset, the client petitions for items after the last seen identifier: GET /items?after_id=8420&limit=20. The database runs SELECT * FROM items WHERE id > 8420 ORDER BY id ASC LIMIT 20.',
        bn: 'কিসেট পেজিনেশন একটি নির্দিষ্ট ও ক্রমান্বয়ে বৃদ্ধি পাওয়া আইডির ওপর ভর করে ডেটা খোঁজে। ফলে কোনো ডেটা হারিয়ে যাওয়া বা ডুপ্লিকেট হওয়ার সুযোগ থাকে না। অফসেটের বদলে ক্লায়েন্ট সর্বশেষ দেখা আইডির পরের ডেটা চায়: GET /items?after_id=8420&limit=20। ডাটাবেস তখন সরাসরি সূচকের সাহায্যে দ্রুত ডেটা খুঁজে বের করে: SELECT * FROM items WHERE id > 8420 ORDER BY id ASC LIMIT 20।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Keyset traversal logic:
const records = [
  { id: 101, title: "Alpha" },
  { id: 102, title: "Beta" },
  { id: 103, title: "Gamma" }
];

function fetchNextPage(afterId, limit = 2) {
  // Simulating SQL: WHERE id > afterId ORDER BY id ASC LIMIT limit
  return records.filter(r => r.id > afterId).slice(0, limit);
}

const page1 = fetchNextPage(0, 2);
console.log("Page 1 items:", page1.map(p => p.id)); // [101, 102]

const lastId = page1[page1.length - 1].id;
const page2 = fetchNextPage(lastId, 2);
console.log("Page 2 items:", page2.map(p => p.id)); // [103]`,
      caption: {
        en: 'Keyset queries anchor directly to the last processed record, immune to upstream insertions.',
        bn: 'কিসেট কুয়েরি সর্বশেষ আইডির সাথে যুক্ত থাকে, ফলে পূর্বে ডেটা ঢুকলেও কোনো গড়মিল হয় না।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Deep Paging Performance Cliff: O(N) vs O(1)', bn: '৫. ডিপ পেজিং পারফরম্যান্স দেয়াল: O(N) বনাম O(1)' } },
    {
      type: 'para',
      text: {
        en: 'Offset pagination suffers from a devastating performance cliff at scale. When executing OFFSET 1000000 LIMIT 20, the database engine must scan and read all 1,000,020 index rows, only to discard the first million. This takes seconds and consumes massive I/O. In contrast, Keyset pagination executes an immediate B-tree index seek in O(1) time.',
        bn: 'বিশাল ডেটাসেটে অফসেট পেজিনেশন মারাত্মক ধীরগতির হয়ে পড়ে। OFFSET 1000000 LIMIT 20 কুয়েরি দিলে ডাটাবেসকে ১,০০০,০২০টি (১০ লাখ ২০টি) সারি মেমোরিতে পড়তে হয় এবং প্রথম 1000000 ডেটা ফেলে দিতে হয়। এতে প্রচুর I/O ও সময় নষ্ট হয়। পক্ষান্তরে, কিসেট পেজিনেশন B-tree ইনডেক্সে সরাসরি ঢুকে O(1) সময়ে তাত্ক্ষণিক ফলাফল দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `QUERY 1 (Offset pagination at depth):
SELECT * FROM orders ORDER BY id LIMIT 20 OFFSET 5000000;
-> DB must traverse and discard 5,000,000 rows! Execution Time: ~4,200 ms (Crash hazard!)

QUERY 2 (Keyset / Cursor seek at depth):
SELECT * FROM orders WHERE id > 5894102 ORDER BY id LIMIT 20;
-> DB seeks B-tree index directly to value 5894102. Execution Time: ~0.8 ms (Blazing fast!)`,
      caption: {
        en: 'Keyset seek queries maintain sub-millisecond execution times even at billions of rows.',
        bn: 'কোটি কোটি সারির ক্ষেত্রেও কিসেট কুয়েরি ১ মিলিসেকেন্ডের কম সময়ে কাজ শেষ করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'Offset vs Cursor Keyset Pagination Traversal', bn: 'অফসেট বনাম কার্সর কিসেট পেজিনেশন ট্রাভার্সাল' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Offset versus Cursor Keyset Pagination"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="320" height="200" rx="8" fill="none" stroke="#ef4444" stroke-width="1.5"/><text x="175" y="40" text-anchor="middle" font-weight="bold" fill="#ef4444">Offset Pagination (LIMIT 20 OFFSET N)</text><rect x="30" y="55" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="75" font-size="11">Database Scan: O(N) linear time</text><text x="40" y="90" font-size="10" fill="#ef4444">• Must read &amp; discard all prior rows</text><rect x="30" y="105" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="125" font-size="11">Data Drift Vulnerability</text><text x="40" y="140" font-size="10" fill="#ef4444">• Insertions cause duplicate or skipped items</text><rect x="30" y="155" width="290" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="175" font-size="11">Deep Paging Performance Wall</text><text x="40" y="192" font-size="10" fill="#ef4444">• High latency and CPU/IO thrashing</text><rect x="365" y="15" width="320" height="200" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="525" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">Keyset / Cursor Pagination (?after=tok)</text><rect x="380" y="55" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="75" font-size="11">Direct B-Tree Seek: O(1) constant time</text><text x="390" y="90" font-size="10" fill="#10b981">• Jumps straight to anchor coordinates</text><rect x="380" y="105" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="125" font-size="11">Immutable Consistency</text><text x="390" y="140" font-size="10" fill="#10b981">• Immune to concurrent row insertions</text><rect x="380" y="155" width="290" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="175" font-size="11">Infinite Scalability</text><text x="390" y="192" font-size="10" fill="#10b981">• Consistent millisecond latency at depth</text></g></svg>`,
      caption: {
        en: 'Offset pagination reads and discards prior rows, whereas keyset cursors seek directly into the B-tree index.',
        bn: 'অফসেট পেজিনেশন আগের সারিগুলো পড়ে ফেলে দেয়, আর কিসেট কার্সর সরাসরি ইনডেক্স থেকে কাঙ্ক্ষিত ডেটায় পৌঁছায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Cursor-Based Pagination: The Opaque Token Standard', bn: '৬. কার্সর-ভিত্তিক পেজিনেশন: অস্বচ্ছ টোকেনের মানদণ্ড' } },
    {
      type: 'para',
      text: {
        en: 'Modern APIs (such as Stripe, GitHub, and Slack) wrap keyset coordinates into an opaque cursor token: GET /feed?after=cursor_xyz. The cursor is a base64-encoded string containing the sorting values (e.g. timestamp and ID). Clients treat the cursor as an opaque pointer, decoupling client code from internal database column names.',
        bn: 'আধুনিক এপিআইগুলো (যেমন Stripe, GitHub ও Slack) কিসেট মানগুলোকে একটি এনকোড করা কার্সর টোকেনে রূপান্তর করে: GET /feed?after=cursor_xyz। এই কার্সরটি একটি base64 স্ট্রিং যার ভেতরে টাইমস্ট্যাম্প ও ইউনিক আইডি লুকানো থাকে। ক্লায়েন্ট ভেতরের ডাটাবেস কলামের নাম না জেনেই এই টোকেন দিয়ে পরবর্তী পেজে যেতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Minting and decoding opaque cursor tokens:
function encodeCursor(timestamp, id) {
  const payload = JSON.stringify({ t: timestamp, id });
  return Buffer.from(payload).toString("base64url");
}

function decodeCursor(cursorString) {
  const raw = Buffer.from(cursorString, "base64url").toString("utf8");
  return JSON.parse(raw);
}

const cursor = encodeCursor("2026-09-26T12:00:00Z", 94102);
console.log("Opaque cursor token:", cursor);
console.log("Decoded cursor coordinates:", decodeCursor(cursor));
// Output: Decoded cursor coordinates: { t: '2026-09-26T12:00:00Z', id: 94102 }`,
      caption: {
        en: 'Opaque cursors hide internal database implementations behind portable serialized strings.',
        bn: 'অস্বচ্ছ কার্সর ডাটাবেসের ভেতরের খুঁটিনাটি গোপন রেখে নিরাপদ স্ট্রিং হিসেবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Multi-Field Sorting & Deterministic Tie-Breakers', bn: '৭. মাল্টি-ফিল্ড সর্টিং ও টাই-ব্রেকারের অপরিহার্যতা' } },
    {
      type: 'para',
      text: {
        en: 'Sorting must always be deterministic. When sorting by non-unique columns like created_at or priority, multiple rows can share the exact same timestamp. Without a secondary unique tie-breaker (like the primary key id), database sort ordering becomes nondeterministic between page turns, causing rows to shuffle unpredictably.',
        bn: 'সর্টিং সর্বদা নিশ্চিত ও সুনির্দিষ্ট (deterministic) হতে হয়। সাধারণ কলাম (যেমন created_at বা priority) দিয়ে সর্ট করলে একাধিক রেকর্ডের মান এক হতে পারে। এর সাথে একটি অনন্য সেকেন্ডারি টাই-ব্রেকার (যেমন প্রাইমারি কি id) না রাখলে প্রতি পেজে ডেটা এলোমেলো হয়ে যেতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ FLAWED (Nondeterministic Sort):
ORDER BY created_at DESC LIMIT 20;
(Five rows created at 12:00:00 can swap positions randomly across queries!)

✅ DETERMINISTIC COMPOSITE SORT:
ORDER BY created_at DESC, id DESC LIMIT 20;
(The primary key guarantees that every single item possesses a unique sorted coordinate!)`,
      caption: {
        en: 'Always pair non-unique sorting columns with unique primary key tie-breakers.',
        bn: 'সাধারণ সর্টিং কলামের সাথে সর্বদা ইউনিক প্রাইমারি কি টাই-ব্রেকার ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Standard Filtering Grammar: Operators, Equality & Ranges', bn: '৮. স্ট্যান্ডার্ড ফিল্টারিং নিয়মাবলি: অপারেটর, সমতা ও রেঞ্জ' } },
    {
      type: 'para',
      text: {
        en: 'Clean RESTful filtering utilizes predictable query parameter conventions: 1) Simple equality: ?status=published; 2) Multi-value sets: ?category=tech,business; 3) Range expressions: ?created_after=2026-01-01 or bracketed operators ?price[gte]=100&price[lte]=500.',
        bn: 'পরিচ্ছন্ন RESTful ফিল্টারিং সুনির্দিষ্ট নিয়ম মেনে চলে: ১) সরাসরি সমতা: ?status=published; ২) একাধিক মান: ?category=tech,business; ৩) রেঞ্জ বা ব্যবধান: ?created_after=2026-01-01 অথবা ব্র্যাকেট অপারেটর ?price[gte]=100&price[lte]=500।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Parsing query filter parameters in Express:
function parseFilters(query) {
  const filters = {};
  if (query.status) filters.status = query.status;
  if (query.min_price) filters.priceGte = Number(query.min_price);
  if (query.max_price) filters.priceLte = Number(query.max_price);
  return filters;
}

const sampleQuery = { status: "active", min_price: "500", max_price: "2000" };
console.log("Parsed query filters:", parseFilters(sampleQuery));
// Output: Parsed query filters: { status: 'active', priceGte: 500, priceLte: 2000 }`,
      caption: {
        en: 'Explicit query parsing sanitizes inputs and maps URL parameters into safe query filters.',
        bn: 'সরাসরি কুয়েরি পার্সিং ইনপুট যাচাই করে এবং নিরাপদ ফিল্টার অবজেক্টে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. RFC 8288 Web Linking: The Standard Link Header', bn: '৯. RFC 8288 ওয়েব লিংকিং: মানসম্মত Link হেডার' } },
    {
      type: 'para',
      text: {
        en: 'RFC 8288 standardizes pagination hypermedia via the Link HTTP response header. It provides navigational relations: next, prev, first, and last. Automated SDKs and API crawlers follow these standard headers without hardcoding query parameter syntax into client applications.',
        bn: 'RFC 8288 স্ট্যান্ডার্ড Link রেসপন্স হেডারের মাধ্যমে পেজিনেশনের নেভিগেশন লিংক সরবরাহ করে। এতে next, prev, first এবং last রিলেশন থাকে। ক্লায়েন্ট সফটওয়্যার বা এসডিকে এই হেডার পড়ে নিজে থেকেই পরবর্তী পৃষ্ঠা খুঁজে নিতে পারে, ক্লায়েন্টে কোনো বাড়তি লজিক লিখতে হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Content-Type: application/json
Link: <https://api.codeshikhon.com/v1/orders?page=3&limit=20>; rel="next",
      <https://api.codeshikhon.com/v1/orders?page=1&limit=20>; rel="prev",
      <https://api.codeshikhon.com/v1/orders?page=10&limit=20>; rel="last"

/* Clients inspect the Link header to dynamically navigate between pages */`,
      caption: {
        en: 'The Link header advertises standardized hypermedia navigational controls.',
        bn: 'Link হেডার আন্তর্জাতিক স্ট্যান্ডার্ড মেনে পেজ পরিবর্তনের লিংকগুলো সরবরাহ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Production Cursor Paginators in Express', bn: '১০. এক্সপ্রেস-এ পূর্ণাঙ্গ কার্সর পেজিনেটর বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'A production cursor paginator queries one extra record (limit + 1) to determine if a subsequent page exists without running an expensive COUNT(*) query on the database.',
        bn: 'প্রোডাকশন কার্সর পেজিনেটর ডাটাবেসে ব্যয়বহুল COUNT(*) কোয়েরি না চালিয়ে ক্লায়েন্টের চাওয়ার চেয়ে মাত্র ১টি বেশি রেকর্ড (limit + 1) পড়ে পরবর্তী পেজ আছে কিনা তা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// High-performance cursor pagination algorithm:
function paginateCollection(allRecords, afterId, limit = 2) {
  // 1. Fetch limit + 1 records:
  const items = allRecords.filter(r => r.id > afterId).slice(0, limit + 1);

  // 2. Check if a next page exists:
  const hasMore = items.length > limit;
  const pageData = hasMore ? items.slice(0, limit) : items;

  // 3. Generate next cursor:
  const nextCursor = hasMore ? Buffer.from(String(pageData[pageData.length - 1].id)).toString("base64url") : null;

  return {
    data: pageData,
    pagination: { hasMore, nextCursor }
  };
}

const mockDb = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const result = paginateCollection(mockDb, 0, 2);
console.log("Page 1 items:", result.data.map(d => d.id)); // [1, 2]
console.log("Has more pages:", result.pagination.hasMore); // true
console.log("Next cursor generated:", Boolean(result.pagination.nextCursor)); // true`,
      caption: {
        en: 'The limit + 1 technique detects subsequent pages without running heavy COUNT(*) queries.',
        bn: 'limit + 1 কৌশলটি ডাটাবেসে ভারী গণনা ছাড়াই পরবর্তী পেজের উপস্থিতি নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-win-ex1',
      kind: 'predict',
      topic: 'rest: RFC 8288 link header next relation',
      question: {
        en: 'In an RFC 8288 Link header, which standard relation string indicates the link to the subsequent page of results?',
        bn: 'RFC 8288 Link হেডারে কোন স্ট্যান্ডার্ড রিলেশন শব্দটি পরবর্তী পৃষ্ঠার লিংক নির্দেশ করতে ব্যবহৃত হয়?'
      },
      code: `/* Standard relation attribute for the subsequent page: */
/* <https://api.example.com/items?page=2>; rel="____" */`,
      answer: 'next',
      accept: ['next'],
      hint: {
        en: 'The next relation.',
        bn: 'next রিলেশন।'
      },
      explanation: {
        en: 'rel="next" is the standard RFC 8288 link relation specifying the next page in a sequence.',
        bn: 'rel="next" হলো পরবর্তী পৃষ্ঠার লিংক নির্দেশ করার আন্তর্জাতিক RFC ৮২৮৮ স্ট্যান্ডার্ড রিলেশন নাম।'
      }
    },
    {
      id: 'rst-win-ex2',
      kind: 'mcq',
      topic: 'rest: deep paging performance flaw',
      question: {
        en: 'Why does offset pagination (e.g. LIMIT 20 OFFSET 1000000) become extremely slow on large databases?',
        bn: 'বিশাল ডাটাবেসে অফসেট পেজিনেশন (যেমন LIMIT 20 OFFSET 1000000) কেন অত্যন্ত ধীরগতির হয়ে পড়ে?'
      },
      options: [
        { en: 'The database must scan and evaluate all 1,000,020 rows in memory before discarding the first million', bn: 'ডাটাবেসকে মেমোরিতে ১,০০০,০২০টি (১০ লাখ ২০টি) সারি পড়ে প্রথম 1000000 ডেটা ফেলে দিতে হয়' },
        { en: 'Because TCP connections close after 100 items', bn: '১০০ আইটেমের পর TCP কানেকশন বন্ধ হয়ে যায়' },
        { en: 'Because JSON does not support large numbers', bn: 'জেসন বড় সংখ্যা সমর্থন করে না' },
        { en: 'Because browsers limit URL length to 10 characters', bn: 'ব্রাউজার ইউআরআই ১০ অক্ষরে আটকে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'The database must scan and drop earlier rows.',
        bn: 'ডাটাবেসকে আগের সব সারি স্ক্যান করে ফেলে দিতে হয়।'
      },
      explanation: {
        en: 'SQL OFFSET requires scanning all preceding rows from disk or index buffers before returning the requested slice, degrading performance linearly to O(N).',
        bn: 'SQL অফসেট আগের সব ডাটা মেমোরিতে স্ক্যান করে ফেলে দেয়, যার ফলে সময় রৈখিকভাবে বাড়তে থাকে।'
      }
    },
    {
      id: 'rst-win-ex3',
      kind: 'mcq',
      topic: 'rest: cursor pagination advantage',
      question: {
        en: 'What primary problem of offset pagination does Cursor-based pagination completely eliminate?',
        bn: 'অফসেট পেজিনেশনের কোন প্রধান ত্রুটিটি কার্সর-ভিত্তিক পেজিনেশন সম্পূর্ণ দূর করে?'
      },
      options: [
        { en: 'Duplicate and missed items caused by concurrent inserts or deletes during pagination traversal', bn: 'পেজিনেশন চলাকালীন নতুন ডেটা যোগ বা বিয়োগের কারণে ডেটা ডুপ্লিকেট হওয়া বা বাদ পড়ার সমস্যা' },
        { en: 'The need to use HTTPS', bn: 'HTTPS ব্যবহারের প্রয়োজনীয়তা' },
        { en: 'JSON syntax errors', bn: 'জেসন সিনট্যাক্স এরর' },
        { en: 'Having to write HTTP GET verbs', bn: 'HTTP GET মেথড লেখার ঝামেলা' }
      ],
      answer: 0,
      hint: {
        en: 'Prevents phantom duplicates during live writes.',
        bn: 'লাইভ পরিবর্তনের সময় ডেটা ডুপ্লিকেট হওয়া আটকায়।'
      },
      explanation: {
        en: 'Because cursors anchor directly to unique data values rather than shifting row numbers, concurrent insertions cannot cause records to duplicate or be skipped.',
        bn: 'কার্সর নির্দিষ্ট রেকর্ডের ওপর ভিত্তি করে চলায় নতুন ডেটা ঢুকলেও আগের পেজের তথ্য পুনরাবৃত্তি হয় না।'
      }
    }
  ],
  quiz: {
    id: 'rst-win-quiz',
    title: { en: 'REST Pagination & Collection Traversal Quiz', bn: 'REST পেজিনেশন ও কালেকশন ট্রাভার্সাল কুইজ' },
    questions: [
      {
        id: 'rwq1',
        kind: 'mcq',
        topic: 'rest: limit plus one technique',
        question: {
          en: 'Why do high-performance pagination controllers query for (limit + 1) rows instead of running a separate "SELECT COUNT(*)" query?',
          bn: 'উচ্চগতির পেজিনেশন কন্ট্রোলারগুলো আলাদা "SELECT COUNT(*)" না চালিয়ে কেন (limit + 1) সংখ্যক ডেটা কুয়েরি করে?'
        },
        options: [
          { en: 'To confirm whether a subsequent page exists in a single query, avoiding expensive full-table COUNT(*) scans', bn: 'একমাত্র কুয়েরিতেই পরবর্তী পেজ আছে কিনা তা নিশ্চিত করতে, যাতে ব্যয়বহুল পুরো টেবিল COUNT(*) স্ক্যান এড়ানো যায়' },
          { en: 'Because SQL syntax errors occur if you request an even number', bn: 'জোড় সংখ্যা চাইলে এসকিউএল এরর হয়' },
          { en: 'To compress the response with gzip', bn: 'রেসপন্স জিজিপ দিয়ে কম্প্রেস করতে' },
          { en: 'It is a mandatory rule in RFC 9110', bn: 'RFC ৯১১০ তে এটি বাধ্যতামূলক' }
        ],
        answer: 0,
        hint: {
          en: 'Confirms next page existence without full table counting.',
          bn: 'টেবিল গণনা ছাড়াই পরবর্তী পেজের অস্তিত্ব নিশ্চিত করে।'
        },
        explanation: {
          en: 'Running SELECT COUNT(*) on multi-million row tables locks resources and takes seconds. Fetching limit + 1 reveals hasMore instantly with minimal overhead.',
          bn: 'লক্ষ লক্ষ সারির টেবিলে COUNT(*) চালানো চরম সময় নষ্ট করে; limit + 1 কৌশলে নিমিষেই পরবর্তী পেজ চেনা যায়।'
        }
      },
      {
        id: 'rwq2',
        kind: 'mcq',
        topic: 'rest: deterministic sorting necessity',
        question: {
          en: 'What can happen if a paginated query sorts strictly by a non-unique column (like "ORDER BY priority") without a tie-breaker?',
          bn: 'পেজিনেটেড কুয়েরিতে কোনো ইউনিক টাই-ব্রেকার ছাড়া যদি কেবল নন-ইউনিক কলাম (যেমন "ORDER BY priority") দিয়ে সর্ট করা হয়, তবে কী ঘটতে পারে?'
        },
        options: [
          { en: 'Database sort ordering becomes nondeterministic, causing identical-priority rows to swap places and show unpredictably across pages', bn: 'ডাটাবেসের সর্টিং এলোমেলো হয়ে যায়, ফলে একই প্রায়োরিটির রেকর্ডগুলো পৃষ্ঠা পরিবর্তনের সময় স্থান পরিবর্তন করে বিভ্রান্তি তৈরি করে' },
          { en: 'The server shuts down', bn: 'সার্ভার বন্ধ হয়ে যায়' },
          { en: 'The database deletes the priority column', bn: 'ডাটাবেস কলামটি মুছে দেয়' },
          { en: 'All records become null', bn: 'সব ডেটা নাল হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Nondeterministic row swapping across page turns.',
          bn: 'পেজ পরিবর্তনের সময় ডেটার স্থান এলোমেলো পরিবর্তন।'
        },
        explanation: {
          en: 'Without a unique tie-breaker (like the primary key ID), SQL query engines do not guarantee consistent ordering between separate query executions.',
          bn: 'ইউনিক আইডি টাই-ব্রেকার না থাকলে ডাটাবেস প্রতিবার একই ক্রমে ডেটা সাজানোর কোনো গ্যারান্টি দেয় না।'
        }
      },
      {
        id: 'rwq3',
        kind: 'mcq',
        topic: 'rest: RFC 8288 pagination link headers',
        question: {
          en: 'Why is the HTTP "Link" header (RFC 8288) favored by REST purists over in-body pagination envelope links?',
          bn: 'REST বিশেষজ্ঞদের কাছে বডি এনভেলপের বদলে কেন HTTP "Link" হেডার (RFC 8288) বেশি গ্রহণযোগ্য?'
        },
        options: [
          { en: 'It keeps raw payload representations clean and un-enveloped while providing standardized rel="next" and rel="prev" hypermedia links', bn: 'এটি মূল ডেটা পেলোডকে এনভেলপমুক্ত ও পরিচ্ছন্ন রাখে এবং স্ট্যান্ডার্ড rel="next" ও rel="prev" লিংক প্রদান করে' },
          { en: 'Because browsers crash when parsing JSON with links', bn: 'লিংকসহ জেসন পার্স করতে ব্রাউজার ক্র্যাশ করে' },
          { en: 'Link headers allow infinite file uploads', bn: 'লিংক হেডার সীমাহীন ফাইল আপলোড করতে দেয়' },
          { en: 'It replaces TLS encryption', bn: 'এটি টিএলএস এনক্রিপশন প্রতিস্থাপন করে' }
        ],
        answer: 0,
        hint: {
          en: 'Keeps representation payload unpolluted by transport metadata.',
          bn: 'ডেটা পেলোডকে বাহ্যিক মেটাডাটা থেকে মুক্ত রাখে।'
        },
        explanation: {
          en: 'RFC 8288 Link headers advertise navigational relations at the HTTP protocol layer without polluting the domain entity JSON structure.',
          bn: 'RFC ৮২৮৮ লিংক হেডার এইচটিটিপি প্রোটোকল স্তরেই নেভিগেশন নিয়ন্ত্রণ করে, ফলে মূল ডেটা কাঠামো অবিকৃত থাকে।'
        }
      },
      {
        id: 'rwq4',
        kind: 'mcq',
        topic: 'rest: opaque cursor encoding benefit',
        question: {
          en: 'What architectural advantage is gained by encoding cursor coordinates into an opaque URL-safe base64 string?',
          bn: 'কার্সর সমন্বয়কে একটি অস্বচ্ছ base64 স্ট্রিংয়ে এনকোড করার মূল আর্কিটেকচারাল সুবিধা কী?'
        },
        options: [
          { en: 'It prevents clients from guessing or manipulating database columns, keeping internal schema details decoupled from API contracts', bn: 'এটি ক্লায়েন্টকে ডাটাবেসের অভ্যন্তরীণ কলামের নাম অনুমান বা পরিবর্তন করা থেকে বিরত রেখে এপিআইকে স্বাধীন রাখে' },
          { en: 'It reduces SQL query execution time to zero nanoseconds', bn: 'এটি কুয়েরি সময় শূন্য ন্যানোসেকেন্ডে নামিয়ে আনে' },
          { en: 'It compresses the database disk storage', bn: 'এটি ডাটাবেসের ডিস্ক স্পেস বাঁচায়' },
          { en: 'It makes the cursor readable by web spiders only', bn: 'এটি কেবল ওয়েব স্পাইডারের জন্য প্রযোজ্য' }
        ],
        answer: 0,
        hint: {
          en: 'Hides internal database schema implementation details.',
          bn: 'ডাটাবেসের অভ্যন্তরীণ কাঠামোর তথ্য গোপন রাখে।'
        },
        explanation: {
          en: 'Opaque cursors hide database schema coordinates (like created_at and ID), letting engineers alter database storage without breaking external clients.',
          bn: 'অস্বচ্ছ কার্সর ভেতরের ডাটাবেস কলামের নাম গোপন রাখে, যাতে পরবর্তীতে সার্ভার পরিবর্তন করলেও ক্লায়েন্টের কোনো ক্ষতি না হয়।'
        }
      }
    ]
  }
};
