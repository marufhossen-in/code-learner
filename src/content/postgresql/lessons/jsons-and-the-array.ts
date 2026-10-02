import type { Lesson } from '../../../lib/types';

export const JsonsAndTheArrayLesson: Lesson = {
  slug: 'jsons-and-the-array',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL Semi-Structured Data: JSON, JSONB & Arrays',
    bn: 'PostgreSQL সেমি-স্ট্রাকচার্ড ডেটা: JSON, JSONB ও অ্যারে'
  },
  summary: {
    en: 'Master PostgreSQL semi-structured document modeling and array operations across 10 structured topics. Store and query native 1-based arrays with unnest and array operators. Contrast textual JSON against binary JSONB storage engines. Navigate documents with arrow extraction operators. Query deep nested structures using the containment operator @>. Modify JSONB objects in-place with jsonb_set. Accelerate containment queries by orders of magnitude with GIN and jsonb_path_ops indexes, and build dynamic JSONB search queries in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে PostgreSQL সেমি-স্ট্রাকচার্ড ডকুমেন্ট মডেলিং এবং অ্যারে অপারেশন আয়ত্ত করুন। ১-ভিত্তিক নেটিভ অ্যারে unnest ও বিভিন্ন অপারেটর দিয়ে কুয়েরি করুন। টেক্সচুয়াল JSON ও বাইনারি JSONB এর মধ্যকার পার্থক্য জানুন। অ্যারো এক্সট্র্যাকশন অপারেটর দিয়ে ডকুমেন্ট নেভিগেট করুন। কনটেইনমেন্ট অপারেটর @> দিয়ে নেস্টেড ডেটা ফিল্টার করুন। jsonb_set দিয়ে ডকুমেন্টের ভেতরের মান পরিবর্তন করুন। GIN ও jsonb_path_ops ইনডেক্স দিয়ে কুয়েরির গতি শতগুণ বাড়িয়ে নিন এবং Node.js-এ ডায়নামিক JSONB সার্চ বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'queries-and-the-cte',
    tech: 'postgresql',
    title: {
      en: 'PostgreSQL Advanced SQL: CTEs, Window Functions & Analytics',
      bn: 'PostgreSQL অ্যাডভান্সড এসকিউএল: CTE, উইন্ডো ফাংশন ও অ্যানালিটিক্স'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Semi-Structured Data in Relational Engines', bn: '১. রিলেশনাল ইঞ্জিনে সেমি-স্ট্রাকচার্ড ডেটা' } },
    {
      type: 'para',
      text: {
        en: 'When you build applications that handle varied attributes like e-commerce specifications or external webhooks, rigid relational tables force you to create dozens of sparse columns. PostgreSQL solves this by providing first-class support for native Arrays, textual JSON, and binary JSONB. Developers gain the flexibility of document stores alongside rock-solid transactional safety.',
        bn: 'যখন আপনি পণ্যের বৈচিত্র্যময় বৈশিষ্ট্য বা এক্সটার্নাল ওয়েবহুক সংরক্ষণের জন্য অ্যাপ্লিকেশন তৈরি করেন, তখন সাধারণ রিলেশনাল টেবিলে অনেকগুলো ফাঁকা কলামের বোঝা তৈরি হয়। PostgreSQL নেটিভ অ্যারে, টেক্সট JSON এবং বাইনারি JSONB সমর্থনের মাধ্যমে এই সমস্যার সমাধান করে। এর ফলে ডেভেলপাররা ডকুমেন্ট ডাটাবেসের নমনীয়তা এবং শতভাগ লেনদেনগত নিরাপত্তা একসাথে পান।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Table combining structured columns with semi-structured JSONB:
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  attributes JSONB NOT NULL DEFAULT '{}'
);

-- Insert record containing both array and JSONB documents:
INSERT INTO products (title, price, tags, attributes)
VALUES (
  'Mechanical Keyboard',
  129.99,
  ARRAY['electronics', 'hardware', 'gaming'],
  '{"brand": "Keychron", "switches": "Brown", "wireless": true, "ports": 2}'::jsonb
);`,
      caption: {
        en: 'PostgreSQL combines strict relational primary keys with flexible semi-structured fields.',
        bn: 'PostgreSQL কঠোর রিলেশনাল কলামের পাশাপাশি নমনীয় সেমি-স্ট্রাকচার্ড ফিল্ড সমর্থন করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'JSONB Decomposed Binary Storage vs GIN Index Lookups', bn: 'JSONB বাইনারি স্টোরেজ ও GIN ইনডেক্স লুকআপ' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="JSONB GIN Index Architecture">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="180" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="90" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">JSONB Document</text>
<text x="90" y="55" font-size="9" fill="#cbd5e1" text-anchor="middle">Parsed Binary Layout</text>
<rect x="15" y="70" width="150" height="25" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="90" y="86" font-size="9" fill="#e2e8f0" text-anchor="middle">"brand": "Keychron"</text>
<rect x="15" y="102" width="150" height="25" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="90" y="118" font-size="9" fill="#e2e8f0" text-anchor="middle">"wireless": true</text>

<path d="M185,75 L255,75" stroke="#38bdf8" stroke-width="2"/>

<rect x="260" y="10" width="220" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="370" y="32" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">GIN Inverted Index</text>
<text x="370" y="55" font-size="9" fill="#cbd5e1" text-anchor="middle">Extracts Key-Value Path Hashes</text>
<rect x="275" y="70" width="190" height="25" rx="4" fill="#0f172a" stroke="#10b981"/>
<text x="370" y="86" font-size="8" fill="#fbbf24" text-anchor="middle">Hash("brand:Keychron") -> [Row 1042]</text>
<rect x="275" y="102" width="190" height="25" rx="4" fill="#0f172a" stroke="#10b981"/>
<text x="370" y="118" font-size="8" fill="#fbbf24" text-anchor="middle">Hash("wireless:true") -> [Row 1042, 2011]</text>

<path d="M485,75 L545,75" stroke="#10b981" stroke-width="2"/>

<rect x="550" y="10" width="110" height="130" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="605" y="35" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Query Engine</text>
<text x="605" y="65" font-size="9" fill="#4ade80" text-anchor="middle">Index Scan</text>
<text x="605" y="90" font-size="8" fill="#cbd5e1" text-anchor="middle">Sub-millisecond</text>
<text x="605" y="115" font-size="8" fill="#94a3b8" text-anchor="middle">Containment @></text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Native Arrays: 1-Based Indexing, unnest() & Slicing', bn: '২. নেটিভ অ্যারে: ১-ভিত্তিক ইনডেক্সিং, unnest() ও স্লাইসিং' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL provides built-in list collections for any valid data type. Crucially, element indexing in SQL begins at 1, not 0. You can append items using array_append or the concatenation operator ||. The unnest() function expands a list into individual relational rows, bridging procedural sequences with relational sets.',
        bn: 'PostgreSQL যেকোনো বৈধ ডেটা টাইপের জন্য নেটিভ লিস্ট সুবিধা দেয়। মনে রাখা জরুরি, এসকিউএল-এ ইনডেক্স ১ থেকে শুরু হয়, ০ থেকে নয়। array_append বা || অপারেটর দিয়ে নতুন উপাদান যোগ করা যায়। unnest() ফাংশন একটি তালিকাকে ভেঙে আলাদা আলাদা রো-তে রূপান্তর করে, যা অ্যারে ও টেবিলের মাঝে সমন্বয় ঘটায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Array indexing (1-based!):
SELECT tags[1] AS first_tag, tags[2:3] AS sliced_tags FROM products;
-- Output: first_tag: 'electronics', sliced_tags: {'hardware', 'gaming'}

-- Expanding an array into independent rows via unnest():
SELECT id, title, unnest(tags) AS individual_tag FROM products;
-- Output:
-- 1 | Mechanical Keyboard | electronics
-- 1 | Mechanical Keyboard | hardware
-- 1 | Mechanical Keyboard | gaming

-- Appending an item to an existing array:
UPDATE products SET tags = array_append(tags, 'usb-c') WHERE id = 1;`,
      caption: {
        en: '1-based array indexing and unnest expand compact lists into relational sets.',
        bn: '১-ভিত্তিক ইনডেক্সিং ও unnest ফাংশন অ্যারেকে স্বাধীন রিলেশনাল রো-তে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Array Filtering Operators: Containment (@>) and Overlap (&&)', bn: '৩. অ্যারে ফিল্টারিং অপারেটর: কনটেইনমেন্ট (@>) ও ওভারল্যাপ (&&)' } },
    {
      type: 'para',
      text: {
        en: 'Querying collections using LIKE or string matching is inefficient. PostgreSQL features dedicated geometric containment operators. The @> symbol tests if the left side contains every element of the right side, while <@ tests if the left is enclosed by the right. Additionally, && confirms whether two collections share overlapping elements.',
        bn: 'LIKE দিয়ে তালিকার ভেতর খোঁজা অত্যন্ত ধীরগতির। PostgreSQL বিশেষ কনটেইনমেন্ট অপারেটর অফার করে। @> অপারেটর দেখে বাম পাশে ডান পাশের সব উপাদান আছে কিনা, আর <@ দেখে বাম পাশ ডানের অন্তর্ভুক্ত কিনা। এছাড়া && অপারেটর নিশ্চিত করে দুটি কালেকশনের মধ্যে কোনো কমন উপাদান আছে কিনা।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Find products containing BOTH 'electronics' AND 'gaming':
SELECT title FROM products WHERE tags @> ARRAY['electronics', 'gaming'];

-- Find products containing EITHER 'gaming' OR 'office':
SELECT title FROM products WHERE tags && ARRAY['gaming', 'office'];

-- Filter where an exact element exists via ANY():
SELECT title FROM products WHERE 'hardware' = ANY(tags);`,
      caption: {
        en: 'Array operators execute set operations natively without relational JOIN overhead.',
        bn: 'অ্যারে অপারেটর কোনো ডাটাবেস জয়েন ছাড়াই মেমরিতে সেট অপারেশন সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. JSON vs JSONB: Text Storage vs Binary Parsing', bn: '৪. JSON বনাম JSONB: টেক্সট স্টোরেজ বনাম বাইনারি পার্সিং' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL provides two document formats. The original JSON type stores raw text directly, keeping whitespace and duplicate keys unchanged. In contrast, the modern JSONB type compiles incoming text into a decomposed binary representation upon insertion. In production systems, JSONB is almost universally preferred for its rapid querying and indexing capabilities.',
        bn: 'PostgreSQL দুটি ডকুমেন্ট ফরম্যাট সমর্থন করে। পুরনো JSON টাইপ কাঁচা টেক্সট সংরক্ষণ করে যেখানে স্পেস ও ডুপ্লিকেট কি অবিকল থাকে। অন্যদিকে আধুনিক JSONB টাইপ ডেটাকে বাইনারিতে কম্পাইল করে মেমরিতে রাখে। দ্রুত অনুসন্ধান ও ইনডেক্স সুবিধার কারণে প্রোডাকশনে JSONB সবচেয়ে বেশি ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `JSON vs JSONB ARCHITECTURAL COMPARISON:
+-------------------+---------------------+---------------------+
| Architectural Trait| json (Textual)      | jsonb (Binary)      |
+-------------------+---------------------+---------------------+
| Storage Format    | Exact textual copy  | Decomposed binary   |
| White-space       | Preserved           | Stripped            |
| Duplicate Keys    | Preserved           | Only last key kept  |
| Insertion Speed   | Faster (no parsing) | Slightly slower     |
| Query Speed       | Slower (re-parsed)  | Blazing fast        |
| Indexing Support  | Functional only     | GIN / GIN-path-ops  |
+-------------------+---------------------+---------------------+`,
      caption: {
        en: 'JSONB trades minor insertion overhead for orders-of-magnitude faster query execution.',
        bn: 'JSONB সামান্য পার্সিং সময় নিলেও কুয়েরি সম্পাদনে শতগুণ বেশি গতি নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. JSONB Access Operators: ->, ->>, #>, and #>>', bn: '৫. JSONB এক্সেস অপারেটর: ->, ->>, #> ও #>>' } },
    {
      type: 'para',
      text: {
        en: 'Extracting values from JSONB documents relies on four core operators. The -> operator extracts a nested property as JSONB, allowing operators to be chained together. Meanwhile, ->> retrieves the property as plain SQL text suitable for WHERE clauses. Similarly, #> navigates deep paths as JSONB, while #>> returns the leaf value as text.',
        bn: 'JSONB থেকে মান বের করতে ৪টি প্রধান অপারেটর ব্যবহৃত হয়। -> অপারেটর মানটিকে JSONB হিসেবে ফেরত দেয় যা চেইনিং করতে সাহায্য করে। আর ->> মানটিকে সাধারণ টেক্সট হিসেবে দেয় যা WHERE ক্লজে ফিল্টারিংয়ের উপযোগী। একইভাবে #> গভীর পাথে গিয়ে JSONB মান দেয় এবং #>> চূড়ান্ত মানটিকে সাধারণ টেক্সট হিসেবে ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Extract field as JSONB (returns "Keychron" with quotes):
SELECT attributes -> 'brand' AS brand_jsonb FROM products WHERE id = 1;

-- Extract field as SQL text (returns Keychron without quotes for filtering):
SELECT attributes ->> 'brand' AS brand_text FROM products WHERE attributes ->> 'brand' = 'Keychron';

-- Deep path extraction using array path:
-- Sample document: {"specs": {"display": {"refresh_rate": 144}}}
SELECT payload #>> '{specs, display, refresh_rate}' AS hz FROM monitors;
-- Output: "144" (as text)`,
      caption: {
        en: 'Use ->> and #>> when comparing against SQL text literals in WHERE clauses.',
        bn: 'WHERE ক্লজে সাধারণ টেক্সটের সাথে মেলাতে সর্বদা ->> এবং #>> ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Containment and Key Existence: @>, ?, ?|, and ?&', bn: '৬. কনটেইনমেন্ট ও কি-র অস্তিত্ব: @>, ?, ?| ও ?&' } },
    {
      type: 'para',
      text: {
        en: 'The containment operator @> checks whether the left JSONB document includes the right document structure. The ? operator checks if a specific top-level string key exists. The ?| operator tests whether any listed key exists, while ?& confirms that all listed keys exist within the document.',
        bn: 'কনটেইনমেন্ট অপারেটর @> পরীক্ষা করে বাম পাশের JSONB ডকুমেন্টে ডান পাশের সম্পূর্ণ ডেটা স্ট্রাকচারটি বিদ্যমান আছে কিনা। ? অপারেটর নির্দিষ্ট কোনো কি আছে কিনা তা যাচাই করে। ?| অপারেটর প্রদত্ত কি-গুলোর যেকোনো একটি আছে কিনা দেখে এবং ?& নিশ্চিত করে যে তালিকার সবগুলো কি ডকুমেন্টে উপস্থিত রয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Check if document contains {"wireless": true, "brand": "Keychron"}:
SELECT title FROM products
WHERE attributes @> '{"wireless": true, "brand": "Keychron"}';

-- Check if key "switches" exists in attributes:
SELECT title FROM products WHERE attributes ? 'switches';

-- Check if either "bluetooth" OR "wireless" key exists:
SELECT title FROM products WHERE attributes ?| array['bluetooth', 'wireless'];

-- Check if BOTH "brand" AND "switches" keys exist:
SELECT title FROM products WHERE attributes ?& array['brand', 'switches'];`,
      caption: {
        en: 'The containment operator @> enables declarative document querying inside relational SQL.',
        bn: 'কনটেইনমেন্ট অপারেটর @> রিলেশনাল এসকিউএল-এর ভেতরেই ডকুমেন্ট কুয়েরি চালাতে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Modifying JSONB Documents: jsonb_set and Concatenation', bn: '৭. JSONB ডকুমেন্ট পরিবর্তন: jsonb_set ও কনক্যাটেনেশন' } },
    {
      type: 'para',
      text: {
        en: 'Unlike standard relational columns that require full updates, JSONB documents can be updated in-place. The jsonb_set function replaces or creates a nested property at a targeted path. The concatenation operator || merges two JSONB objects, overwriting matching keys. The minus operator - deletes specific keys or elements by name.',
        bn: 'সাধারণ কলামের মতো পুরো রো পরিবর্তনের বদলে JSONB ডকুমেন্টের ভেতরের নির্দিষ্ট মান সরাসরি পরিবর্তন করা যায়। jsonb_set ফাংশন নির্দিষ্ট পাথে গিয়ে মান আপডেট বা নতুন তৈরি করে। || অপারেটর দুটি অবজেক্ট একত্রিত করে মিল থাকা কি ওভাররাইট করে। আর মাইনাস (-) অপারেটর দিয়ে সরাসরি নির্দিষ্ট কি মুছে ফেলা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Update a nested property in-place:
UPDATE products
SET attributes = jsonb_set(attributes, '{switches}', '"Blue"')
WHERE id = 1;

-- Merge new keys into attributes object:
UPDATE products
SET attributes = attributes || '{"backlight": "RGB", "warranty_years": 2}'::jsonb
WHERE id = 1;

-- Remove the "ports" key completely:
UPDATE products
SET attributes = attributes - 'ports'
WHERE id = 1;`,
      caption: {
        en: 'jsonb_set and || enable surgical in-place modifications without full document replacement.',
        bn: 'jsonb_set ও || সম্পূর্ণ ডকুমেন্ট না বদলেই নির্দিষ্ট অংশে পরিবর্তন করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Indexing JSONB with GIN: Eliminating Sequential Scans', bn: '৮. GIN দিয়ে JSONB ইনডেক্সিং: সিকোয়েনশিয়াল স্ক্যান দূরীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'Executing @> containment queries without an index triggers a slow Sequential Scan (Seq Scan) across every row in the table. A Generalized Inverted Index (GIN) breaks JSONB documents into individual key-value tokens, building an internal B-Tree lookup structure. Using jsonb_path_ops creates smaller, faster GIN indexes optimized exclusively for @> operations.',
        bn: 'ইনডেক্স ছাড়া @> কুয়েরি চালালে ডাটাবেস টেবিলের প্রতিটি রো একে একে পরীক্ষা করে যা অত্যন্ত ধীরগতির। জেনারেলাইজড ইনভার্টেড ইনডেক্স (GIN) পুরো ডকুমেন্টের কি ও মানগুলোকে আলাদা টোকেনে রূপান্তর করে ইন্টারনাল বি-ট্রি বানায়। jsonb_path_ops অপশনটি ইনডেক্স সাইজ ছোট রাখে এবং @> অপারেশনের গতি আকাশচুম্বী করে তোলে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create standard GIN index (supports @>, ?, ?|, ?&):
CREATE INDEX idx_products_attrs ON products USING GIN (attributes);

-- Create optimized GIN index for containment queries only (3x smaller on disk):
CREATE INDEX idx_products_attrs_path ON products USING GIN (attributes jsonb_path_ops);

-- Verify that PostgreSQL planner uses Bitmap Index Scan:
EXPLAIN ANALYZE
SELECT title FROM products WHERE attributes @> '{"wireless": true}';
-- Output: Bitmap Index Scan on idx_products_attrs_path (Cost: 0.00..8.25, Rows: 1)`,
      caption: {
        en: 'GIN indexes transform complex JSON document lookups into sub-millisecond index scans.',
        bn: 'GIN ইনডেক্স জটিল ডকুমেন্ট কুয়েরিকে কয়েক ন্যানোসেকেন্ডের ইনডেক্স স্ক্যানে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: JSONB vs MongoDB BSON vs SQL Tables', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: JSONB বনাম MongoDB BSON বনাম SQL টেবিল' } },
    {
      type: 'para',
      text: {
        en: 'Choosing between relational normalization and JSONB document storage involves trade-offs: Use normalized SQL tables when entities have fixed attributes, strict typing, and foreign key relations. Use PostgreSQL JSONB when entities have unpredictable attributes, dynamic schemas, and require ACID joins. Use MongoDB when documents scale across horizontal sharding clusters without joins.',
        bn: 'রিলেশনাল টেবিল আর JSONB-এর মাঝে সঠিক সিদ্ধান্ত নেওয়া কাজের প্রকৃতির ওপর নির্ভর করে: যখন তথ্যের গঠন নির্দিষ্ট ও ফরেন কি সম্পর্ক থাকে তখন সাধারণ রিলেশনাল টেবিল ব্যবহার করুন। যখন তথ্যের গঠন পরিবর্তনশীল কিন্তু ট্রানজ্যাকশন ও জয়েন দরকার তখন PostgreSQL JSONB সেরা। আর জয়েন ছাড়া বিশাল ক্লাস্টারে অনুভূমিক স্কেলিং চাইলে MongoDB বেছে নিন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `SEMI-STRUCTURED STORAGE SPECTRUM:
+-------------------+--------------------+--------------------+--------------------+
| Dimension         | Normalized SQL     | PostgreSQL JSONB   | MongoDB (BSON)     |
+-------------------+--------------------+--------------------+--------------------+
| Schema Rigidity   | Strict & Enforced  | Highly Dynamic     | Completely Dynamic |
| ACID Transactions | Full Serializable  | Full Serializable  | Multi-doc Replica  |
| Joins with Other  | Native Foreign Keys| Native SQL JOINs   | $lookup Pipeline   |
| Indexing Engine   | Standard B-Tree    | GIN / GIN-path-ops | Multikey Indexes   |
| Best Use Case     | Core Financials    | Product Attributes | Raw Event Stream   |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'PostgreSQL JSONB provides the ideal middle ground: dynamic document schemas with relational joins.',
        bn: 'PostgreSQL JSONB নিখুঁত ভারসাম্য এনে দেয়: ডায়নামিক ডকুমেন্টের সাথে রিলেশনাল জয়েন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Dynamic JSONB Queries in Node.js', bn: '১০. Node.js-এ ডায়নামিক JSONB কুয়েরি বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production catalog search function in Node.js utilizing node-postgres with parameterized JSONB containment filters and array unnesting.',
        bn: 'নিচে node-postgres ব্যবহার করে প্যারামিটারাইজড JSONB কনটেইনমেন্ট ও অ্যারে ফিল্টারিং সমৃদ্ধ একটি নিরাপদ প্রোডাকশন সার্চ ফাংশন দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Pool } = pg;
const pool = new Pool({ connectionString: "postgresql://postgres:secret@127.0.0.1:5432/postgres" });

async function searchProductsByFilters(filterCriteria, requiredTags = []) {
  const client = await pool.connect();
  try {
    // Parameterized query using JSONB containment (@>) and array overlap (&&):
    const sql = \`
      SELECT id, title, price, tags, attributes
      FROM products
      WHERE ($1::jsonb IS NULL OR attributes @> $1::jsonb)
        AND ($2::text[] IS NULL OR tags && $2::text[])
      ORDER BY price ASC
      LIMIT 10;
    \`;

    const values = [
      Object.keys(filterCriteria).length > 0 ? JSON.stringify(filterCriteria) : null,
      requiredTags.length > 0 ? requiredTags : null
    ];

    const res = await client.query(sql, values);
    return res.rows;
  } finally {
    client.release();
  }
}

const matches = await searchProductsByFilters({ wireless: true }, ["gaming"]);
console.log("Matched products found:", matches.length);
// Output: Matched products found: 1`,
      caption: {
        en: 'Safe parameterized JSONB queries prevent SQL injection while utilizing GIN indexes.',
        bn: 'প্যারামিটারাইজড JSONB কুয়েরি এসকিউএল ইনজেকশন ঠেকিয়ে GIN ইনডেক্সের সর্বোচ্চ সুবিধা দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-jsn-ex1',
      kind: 'predict',
      topic: 'postgresql: default array indexing base',
      question: {
        en: 'What is the starting index number (1-based vs 0-based) for arrays in PostgreSQL SQL queries?',
        bn: 'PostgreSQL এসকিউএল কুয়েরিতে নেটিভ অ্যারের প্রথম উপাদানের ইনডেক্স নম্বর কত (১ নাকি ০)?'
      },
      code: `/* Array first element query: */
/* SELECT (ARRAY['alpha', 'beta'])[__]; -> 'alpha' */`,
      answer: '1',
      accept: ['1', 'one', '1-based'],
      hint: {
        en: 'Array indexing starts at 1 in SQL.',
        bn: 'এসকিউএল-এ অ্যারে ইনডেক্স ১ থেকে শুরু হয়।'
      },
      explanation: {
        en: 'Unlike C or JavaScript which use 0-based indexing, SQL standard arrays in PostgreSQL begin at index 1.',
        bn: 'সি বা জাভাস্ক্রিপ্টের মতো ০ থেকে নয়, এসকিউএল স্ট্যান্ডার্ডে অ্যারে ইনডেক্স ১ থেকে শুরু হয়।'
      }
    },
    {
      id: 'pg-jsn-ex2',
      kind: 'mcq',
      topic: 'postgresql: jsonb containment operator',
      question: {
        en: 'Which operator checks whether the left JSONB document contains all key-value elements specified in the right document?',
        bn: 'বাম পাশের JSONB ডকুমেন্টে ডান পাশের সব কি এবং মান উপস্থিত আছে কিনা তা পরীক্ষা করতে কোন অপারেটরটি ব্যবহৃত হয়?'
      },
      options: [
        { en: '@>', bn: '@>' },
        { en: '<@', bn: '<@' },
        { en: '->>', bn: '->>' },
        { en: '##', bn: '##' }
      ],
      answer: 0,
      hint: {
        en: 'The containment operator @>.',
        bn: 'কনটেইনমেন্ট অপারেটর @>।'
      },
      explanation: {
        en: 'The @> operator checks containment, returning true if the left JSONB structure contains the right document.',
        bn: '@> অপারেটর ডান পাশের সম্পূর্ণ অবজেক্ট স্ট্রাকচার বাম পাশের ডকুমেন্টে আছে কিনা তা দেখে।'
      }
    },
    {
      id: 'pg-jsn-ex3',
      kind: 'mcq',
      topic: 'postgresql: jsonb indexing type',
      question: {
        en: 'Which index type is specifically designed to accelerate JSONB containment queries by creating an inverted token map?',
        bn: 'একটি ইনভার্টেড টোকেন ম্যাপ তৈরি করে JSONB কনটেইনমেন্ট কুয়েরির গতি বাড়াতে কোন বিশেষ ইনডেক্সটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'GIN (Generalized Inverted Index)', bn: 'GIN (জেনারেলাইজড ইনভার্টেড ইনডেক্স)' },
        { en: 'BRIN (Block Range Index)', bn: 'BRIN (ব্লক রেঞ্জ ইনডেক্স)' },
        { en: 'Hash Index', bn: 'হ্যাশ ইনডেক্স' },
        { en: 'Text File Scan', bn: 'টেক্সট ফাইল স্ক্যান' }
      ],
      answer: 0,
      hint: {
        en: 'GIN (Generalized Inverted Index).',
        bn: 'GIN (জেনারেলাইজড ইনভার্টেড ইনডেক্স)।'
      },
      explanation: {
        en: 'GIN indexes map individual keys and values within JSONB documents to row pointers, eliminating table scans.',
        bn: 'GIN ইনডেক্স ডকুমেন্টের প্রতিটি কি ও ভ্যালুর জন্য রো পয়েন্টার সংরক্ষণ করে দ্রুত কুয়েরি নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'pg-jsn-quiz',
    title: { en: 'PostgreSQL Semi-Structured Data Quiz', bn: 'PostgreSQL সেমি-স্ট্রাকচার্ড ডেটা কুইজ' },
    questions: [
      {
        id: 'pjsnq1',
        kind: 'mcq',
        topic: 'postgresql: json vs jsonb difference',
        question: {
          en: 'What is the primary operational benefit of JSONB over textual JSON in PostgreSQL?',
          bn: 'PostgreSQL-এ টেক্সট JSON-এর তুলনায় JSONB ব্যবহারের প্রধান অপারেশনাল সুবিধা কী?'
        },
        options: [
          { en: 'JSONB parses documents into binary format upon write, enabling GIN indexing and sub-millisecond query filtering', bn: 'JSONB লেখার সময় ডেটাকে বাইনারিতে রূপান্তর করে, যার ফলে GIN ইনডেক্সিং ও দ্রুতগতির কুয়েরি ফিল্টারিং সম্ভব হয়' },
          { en: 'JSONB stores data on audio cassettes', bn: 'অডিও ক্যাসেটে ডেটা রাখে' },
          { en: 'JSONB completely disables all SQL queries', bn: 'এসকিউএল কুয়েরি বন্ধ করে দেয়' },
          { en: 'JSONB allows storing infinite gigabytes without using disk space', bn: 'ডিস্ক ছাড়া মেমরি ব্যবহার করে' }
        ],
        answer: 0,
        hint: {
          en: 'Decomposed binary format with GIN indexing.',
          bn: 'GIN ইনডেক্সিং সহ বাইনারি ফরম্যাট।'
        },
        explanation: {
          en: 'JSONB converts JSON into a decomposed binary layout that strips duplicate keys and supports fast GIN index scans.',
          bn: 'JSONB বাইনারি ফরম্যাটে রূপান্তরিত হয় যা ডুপ্লিকেট কি দূর করে এবং GIN ইনডেক্স দিয়ে অতি দ্রুত খোঁজা যায়।'
        }
      },
      {
        id: 'pjsnq2',
        kind: 'mcq',
        topic: 'postgresql: json text extraction operator',
        question: {
          en: 'Which operator extracts a field from a JSONB document as plain SQL text (without surrounding JSON quotation marks)?',
          bn: 'কোন অপারেটরটি JSONB ডকুমেন্ট থেকে একটি ফিল্ডকে উদ্ধৃতি চিহ্ন ছাড়া সাধারণ এসকিউএল টেক্সট হিসেবে তুলে আনে?'
        },
        options: [
          { en: '->>', bn: '->>' },
          { en: '->', bn: '->' },
          { en: '#>', bn: '#>' },
          { en: '@>', bn: '@>' }
        ],
        answer: 0,
        hint: {
          en: '->> operator returns text.',
          bn: '->> অপারেটর টেক্সট ফেরত দেয়।'
        },
        explanation: {
          en: 'The -> operator returns a JSONB value, whereas ->> extracts the value as plain text for SQL comparisons.',
          bn: '-> অপারেটর JSONB ফেরত দেয়, আর ->> মানটিকে উদ্ধৃতি ছাড়া প্লেইন টেক্সট হিসেবে দেয়।'
        }
      },
      {
        id: 'pjsnq3',
        kind: 'mcq',
        topic: 'postgresql: array expanding function',
        question: {
          en: 'Which PostgreSQL function expands an array into individual relational rows (one row per array element)?',
          bn: 'কোন PostgreSQL ফাংশনটি একটি অ্যারেকে ভেঙে প্রতিটি উপাদানের জন্য আলাদা আলাদা রিলেশনাল রো তৈরি করে?'
        },
        options: [
          { en: 'unnest()', bn: 'unnest()' },
          { en: 'array_split()', bn: 'array_split()' },
          { en: 'explode()', bn: 'explode()' },
          { en: 'expand()', bn: 'expand()' }
        ],
        answer: 0,
        hint: {
          en: 'The unnest() function.',
          bn: 'unnest() ফাংশন।'
        },
        explanation: {
          en: 'unnest() transforms an array into a set of rows, allowing developers to query array items with standard SQL aggregation.',
          bn: 'unnest() একটি অ্যারেকে টেবিল রো-তে রূপান্তর করে সাধারণ এসকিউএল দিয়ে প্রসেস করার সুযোগ দেয়।'
        }
      },
      {
        id: 'pjsnq4',
        kind: 'mcq',
        topic: 'postgresql: jsonb in place modification function',
        question: {
          en: 'Which built-in function updates or creates a nested property at a targeted path inside an existing JSONB document?',
          bn: 'একটি বিদ্যমান JSONB ডকুমেন্টের নির্দিষ্ট পাথে গিয়ে কোনো মান আপডেট বা নতুন তৈরি করতে কোন ফাংশনটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'jsonb_set()', bn: 'jsonb_set()' },
          { en: 'json_update()', bn: 'json_update()' },
          { en: 'jsonb_replace()', bn: 'jsonb_replace()' },
          { en: 'json_patch()', bn: 'json_patch()' }
        ],
        answer: 0,
        hint: {
          en: 'jsonb_set() function.',
          bn: 'jsonb_set() ফাংশন।'
        },
        explanation: {
          en: 'jsonb_set(target, path, new_value) surgically updates or inserts values at deep document paths without replacing the document.',
          bn: 'jsonb_set ফাংশন সম্পূর্ণ ডকুমেন্ট না বদলেই নির্দিষ্ট পাথে সরাসরি নতুন মান বসিয়ে দেয়।'
        }
      }
    ]
  }
};
