import type { Lesson } from '../../../lib/types';

export const ConstraintsAndTheKeyLesson: Lesson = {
  slug: 'constraints-and-the-key',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL Data Integrity: Constraints, Keys & Checks',
    bn: 'PostgreSQL ডেটা ইন্টিগ্রিটি: কনস্ট্রেইন্ট, কি ও চেক'
  },
  summary: {
    en: 'Master relational data integrity, constraint enforcement, and advanced PostgreSQL validation across 10 structured topics. Understand why database-level constraints defeat concurrent race conditions. Define primary keys using modern GENERATED ALWAYS AS IDENTITY. Configure foreign key cascades with ON DELETE CASCADE and prevent deadlock table scans. Validate business logic with CHECK constraints. Handle soft deletes cleanly using partial UNIQUE indexes. Prevent double-booking calendar overlaps using GiST Exclusion constraints. Manage circular dependencies with DEFERRABLE constraints, and trap constraint violation error codes in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে রিলেশনাল ডেটা ইন্টিগ্রিটি এবং উন্নত PostgreSQL ভ্যালিডেশন আয়ত্ত করুন। ডাটাবেস লেভেলের কনস্ট্রেইন্ট কেন সমান্তরাল রেস কন্ডিশন দূর করে তা বুঝুন। আধুনিক GENERATED ALWAYS AS IDENTITY ব্যবহারের মাধ্যমে প্রাইমারি কি তৈরি করার নিয়ম দেখুন। ON DELETE CASCADE সহযোগে ফরেন কি ক্যাসকেড পরিচালনা ও ডেডলক টেবিল স্ক্যান রোধের কৌশল জানুন। CHECK কনস্ট্রেইন্ট প্রয়োগে ব্যবসায়িক নিয়ম যাচাই শেখা যাবে। আংশিক UNIQUE ইনডেক্স ব্যবহারের মাধ্যমে সফট ডিলিট সামলান। GiST এক্সক্লুশন কনস্ট্রেইন্ট ক্যালেন্ডারে ডাবল-বুকিং ওভারল্যাপ ঠেকায়। DEFERRABLE কনস্ট্রেইন্ট অনুসরণে সার্কুলার ডিপেনডেন্সি সমাধান ও Node.js-এ এসকিউএল এরর কোড হ্যান্ডেল করার বাস্তব উপায় জানুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'funcs-and-the-procedure',
    tech: 'postgresql',
    title: {
      en: 'PostgreSQL Server Programming: Functions, Procedures & Triggers',
      bn: 'PostgreSQL সার্ভার প্রোগ্রামিং: ফাংশন, প্রসিডিউর ও ট্রিগার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Why Database-Level Integrity Defeats Race Conditions', bn: '১. ডাটাবেস লেভেলের ইন্টিগ্রিটি কেন রেস কন্ডিশন দূর করে' } },
    {
      type: 'para',
      text: {
        en: 'When applications validate business rules strictly in client code (such as verifying an email is unique before calling INSERT), concurrent requests create race conditions that permit duplicate records. PostgreSQL constraints enforce declarative rules directly at the storage engine level within serializable transaction locks, guaranteeing 100 percent data consistency regardless of client bugs.',
        bn: 'যখন কোনো অ্যাপ্লিকেশন কেবল ক্লায়েন্ট কোডে ব্যবসায়িক নিয়ম যাচাই করে (যেমন INSERT করার আগে ইমেইল ইউনিক কিনা তা খোঁজা), তখন একাধিক সমান্তরাল রিকোয়েস্টে রেস কন্ডিশন তৈরি হয়ে ডুপ্লিকেট ডেটা ঢুকে পড়ে। PostgreSQL কনস্ট্রেইন্ট সরাসরি স্টোরেজ ইঞ্জিনে নিয়ম কার্যকর করে, যা ক্লায়েন্ট কোডে ত্রুটি থাকলেও ১০০ শতাংশ ডেটার নির্ভুলতা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- The client validation race condition:
-- Thread 1: SELECT id FROM users WHERE email = 'alice@example.com'; -> None found
-- Thread 2: SELECT id FROM users WHERE email = 'alice@example.com'; -> None found
-- Thread 1: INSERT INTO users (email) VALUES ('alice@example.com'); -> SUCCESS
-- Thread 2: INSERT INTO users (email) VALUES ('alice@example.com'); -> CORRUPTION!

-- Database constraint solution:
ALTER TABLE users ADD CONSTRAINT uq_users_email UNIQUE (email);
-- Thread 2 now triggers PostgreSQL Error Code 23505 (unique_violation)!`,
      caption: {
        en: 'Database constraints enforce rules atomically, preventing race conditions.',
        bn: 'ডাটাবেস কনস্ট্রেইন্ট পরমাণুসম সুরক্ষা নিশ্চিত করে রেস কন্ডিশন প্রতিরোধ করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Exclusion Constraints: Preventing Temporal Booking Overlaps', bn: 'এক্সক্লুশন কনস্ট্রেইন্ট: সময়ের ওভারল্যাপ প্রতিরোধ' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="PostgreSQL Exclusion Constraint Architecture">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="300" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="150" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Room 101 Booking A (Valid)</text>
<rect x="20" y="55" width="260" height="30" rx="4" fill="#1e293b" stroke="#10b981"/>
<text x="150" y="74" font-size="9" fill="#4ade80" text-anchor="middle">[10:00 AM ---------------- 11:30 AM)</text>
<text x="150" y="115" font-size="9" fill="#cbd5e1" text-anchor="middle">Committed to Database</text>

<path d="M305,70 L345,70" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>

<rect x="350" y="10" width="310" height="130" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
<text x="505" y="32" font-size="11" font-weight="700" fill="#f87171" text-anchor="middle">Room 101 Booking B (Collision!)</text>
<rect x="370" y="55" width="270" height="30" rx="4" fill="#1e293b" stroke="#ef4444"/>
<text x="505" y="74" font-size="9" fill="#f87171" text-anchor="middle">[11:00 AM ----------- 12:00 PM) [OVERLAP]</text>
<text x="505" y="115" font-size="9" fill="#fbbf24" text-anchor="middle">EXCLUDE USING gist rejects with Error 23P01</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Primary Keys & Modern Identity Columns', bn: '২. প্রাইমারি কি ও আধুনিক আইডেন্টিটি কলাম' } },
    {
      type: 'para',
      text: {
        en: 'A primary key uniquely identifies each row and automatically creates an underlying unique B-Tree index. While older PostgreSQL tutorials use the non-standard SERIAL pseudotype, modern SQL standards favor GENERATED ALWAYS AS IDENTITY. Identity columns prevent unintentional manual overrides, ensuring robust surrogate key generation.',
        bn: 'একটি প্রাইমারি কি প্রতিটি রো-কে এককভাবে চিহ্নিত করে এবং পেছনে একটি ইউনিক বি-ট্রি ইনডেক্স তৈরি করে। পুরনো টিউটোরিয়ালে SERIAL টাইপ দেখা গেলেও আধুনিক এসকিউএল স্ট্যান্ডার্ডে GENERATED ALWAYS AS IDENTITY সবচেয়ে বেশি গ্রহণযোগ্য। এটি দুর্ঘটনাবশত ভুল মান ঢোকানো আটকে নির্ভুল অটো-ইনক্রিমেন্ট কি নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Modern SQL standard auto-incrementing primary key:
CREATE TABLE accounts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Attempting manual ID insertion triggers an error:
-- INSERT INTO accounts (id, username) VALUES (1, 'alice');
-- ERROR: cannot insert a non-DEFAULT value into column "id"

-- Correct insertion allowing engine to assign sequence:
INSERT INTO accounts (username) VALUES ('alice') RETURNING id;`,
      caption: {
        en: 'Identity columns enforce sequence integrity, adhering strictly to modern SQL standards.',
        bn: 'আইডেন্টিটি কলাম আধুনিক এসকিউএল মান বজায় রেখে স্বয়ংক্ৰিয় কি-র বিশুদ্ধতা রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Foreign Keys & Cascading Actions: ON DELETE CASCADE', bn: '৩. ফরেন কি ও ক্যাসকেডিং একশন: ON DELETE CASCADE' } },
    {
      type: 'para',
      text: {
        en: 'Foreign keys guarantee referential integrity between child and parent tables. The ON DELETE action specifies behavior when a referenced parent row is deleted: CASCADE purges dependent child records automatically; SET NULL clears the reference; and RESTRICT prevents deletion if child rows exist. Always index foreign key columns to avoid expensive table scans during cascade checks.',
        bn: 'ফরেন কি পিতা ও সন্তানের টেবিলের মধ্যে রেফারেন্সিয়াল সমন্বয় রক্ষা করে। ON DELETE অংশটি ঠিক করে প্যারেন্ট রো মুছে গেলে চাইল্ড রো-এর কী হবে: CASCADE দিলে সংশ্লিষ্ট চাইল্ড রোগুলো নিজে থেকেই মুছে যায়; SET NULL দিলে রেফারেন্স খালি হয়; এবং RESTRICT দিলে চাইল্ড ডেটা থাকলে ডিলিট আটকে দেয়। ক্যাসকেডের সময় গতি ঠিক রাখতে ফরেন কি কলামে ইনডেক্স থাকা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Parent customer table:
CREATE TABLE customers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  company_name VARCHAR(100) NOT NULL
);

-- Child orders table with cascading deletion:
CREATE TABLE orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  total_amount NUMERIC(12, 2) NOT NULL
);

-- CRUCIAL PERFORMANCE RULE: Always index foreign key referencing columns!
CREATE INDEX idx_orders_customer_id ON orders(customer_id);`,
      caption: {
        en: 'Indexing foreign keys prevents full table scans whenever parent records are deleted.',
        bn: 'ফরেন কি কলাম ইনডেক্স করলে প্যারেন্ট রো মোছার সময় পুরো চাইল্ড টেবিল স্ক্যান হতে হয় না।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Business Rules Validation: CHECK Constraints', bn: '৪. ব্যবসায়িক নিয়ম যাচাই: CHECK কনস্ট্রেইন্ট' } },
    {
      type: 'para',
      text: {
        en: 'CHECK constraints evaluate a boolean expression before accepting any INSERT or UPDATE. They validate single-column bounds (such as price > 0) or multi-column relationships (such as delivery_date >= order_date). When a row violates the expression, PostgreSQL rejects the transaction immediately, keeping corrupted states out of storage.',
        bn: 'CHECK কনস্ট্রেইন্ট যেকোনো INSERT বা UPDATE কার্যকর করার আগে একটি শর্ত পরীক্ষা করে। এটি একটিমাত্র কলামের মান যাচাই করতে পারে (যেমন price > 0) অথবা একাধিক কলামের সম্পর্ক যাচাই করতে পারে (যেমন delivery_date >= order_date)। কোনো রো এই শর্ত ভাঙলে PostgreSQL সাথে সাথে ট্রানজ্যাকশন বাতিল করে ডেটাবেসকে সুরক্ষিত রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Enforcing complex domain rules via CHECK constraints:
CREATE TABLE contracts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  monthly_rate NUMERIC(10, 2) NOT NULL,
  discount_percentage NUMERIC(5, 2) NOT NULL DEFAULT 0.00,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,

  -- Rule 1: Monthly rate must be strictly positive
  CONSTRAINT chk_positive_rate CHECK (monthly_rate > 0),

  -- Rule 2: Discount cannot exceed 50 percent
  CONSTRAINT chk_discount_range CHECK (discount_percentage >= 0 AND discount_percentage <= 50),

  -- Rule 3: End date must follow start date
  CONSTRAINT chk_valid_date_range CHECK (end_date >= start_date)
);`,
      caption: {
        en: 'CHECK constraints validate mathematical bounds and multi-column date rules at the engine level.',
        bn: 'CHECK কনস্ট্রেইন্ট ইঞ্জিন লেভেলে গাণিতিক সীমা ও একাধিক তারিখের সম্পর্ক যাচাই করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Partial Unique Indexes for Soft Deletes', bn: '৫. সফট ডিলিটের জন্য আংশিক UNIQUE ইনডেক্স' } },
    {
      type: 'para',
      text: {
        en: 'Modern applications commonly implement soft deletes using a deleted_at timestamp column. However, a standard UNIQUE constraint on email blocks a previously deleted user from re-registering with the same address. A Partial Unique Index enforces uniqueness exclusively across active rows where deleted_at IS NULL, solving the soft-delete conflict.',
        bn: 'আধুনিক অ্যাপ্লিকেশনে ডেটা পুরোপুরি না মুছে deleted_at টাইমস্ট্যাম্প দিয়ে সফট ডিলিট করা হয়। কিন্তু সাধারণ UNIQUE কনস্ট্রেইন্ট থাকলে একবার ডিলিট হওয়া ইউজার সেই একই ইমেইল দিয়ে আর অ্যাকাউন্ট খুলতে পারে না। আংশিক UNIQUE ইনডেক্স কেবল সক্রিয় রোগুলোর (যেখানে deleted_at IS NULL) ওপর ইউনিক নিয়ম প্রয়োগ করে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Table using soft deletion:
CREATE TABLE members (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

-- Standard UNIQUE constraint fails here because it counts soft-deleted rows!
-- Instead, create a Partial Unique Index scoped to active records only:
CREATE UNIQUE INDEX uq_active_member_email
ON members (email)
WHERE deleted_at IS NULL;

-- Two deleted records can now share 'bob@example.com',
-- but only ONE active (deleted_at IS NULL) record is permitted!`,
      caption: {
        en: 'Partial unique indexes allow duplicate values across historical soft-deleted records.',
        bn: 'আংশিক ইউনিক ইনডেক্স সক্রিয় রো ঠিক রেখে সফট ডিলিট হওয়া ডেটাতে ডুপ্লিকেট মান মেনে নেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Temporal Overlaps: GiST Exclusion Constraints', bn: '৬. সময়ের ওভারল্যাপ: GiST এক্সক্লুশন কনস্ট্রেইন্ট' } },
    {
      type: 'para',
      text: {
        en: 'Traditional UNIQUE constraints check scalar equality (a = b). However, hotel reservations, car rentals, and room bookings deal with time ranges where collisions happen if two intervals overlap (a && b). PostgreSQL provides Exclusion Constraints using Generalized Search Trees (GiST), rejecting overlapping reservations at the engine level.',
        bn: 'সাধারণ UNIQUE কনস্ট্রেইন্ট কেবল দুটি মান সমান কিনা (a = b) তা দেখে। কিন্তু হোটেল বা মিটিং রুমের বুকিংয়ে সময়ের ব্যবধান থাকে, যেখানে দুটি সময় পরস্পরকে স্পর্শ বা অতিক্রম করলে (a && b) সংঘর্ষ ঘটে। PostgreSQL-এর GiST এক্সক্লুশন কনস্ট্রেইন্ট সময়ের রেঞ্জ পরীক্ষা করে ইঞ্জিন লেভেলেই ডাবল-বুকিং সম্পূর্ণ প্রতিরোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Enable btree_gist extension for scalar equality + range overlap combinations:
CREATE EXTENSION IF NOT EXISTS btree_gist;

CREATE TABLE room_reservations (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  room_number INT NOT NULL,
  booking_window TSTZRANGE NOT NULL,

  -- Ensure identical room_number (=) CANNOT have overlapping time ranges (&&):
  CONSTRAINT no_overlapping_room_bookings
  EXCLUDE USING gist (room_number WITH =, booking_window WITH &&)
);

-- Insertion 1: SUT 10:00 to 12:00 -> SUCCESS
INSERT INTO room_reservations (room_number, booking_window)
VALUES (101, tstzrange('2026-10-01 10:00:00Z', '2026-10-01 12:00:00Z'));

-- Insertion 2: SUT 11:30 to 13:00 -> REJECTED WITH ERROR 23P01 (exclusion_violation)!`,
      caption: {
        en: 'GiST exclusion constraints prevent double-booking collisions without application locks.',
        bn: 'GiST এক্সক্লুশন কনস্ট্রেইন্ট কোনো অ্যাপ লকিং ছাড়াই ডাবল-বুকিং সংঘর্ষ রোধ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Stored Generated Columns: Computed Virtual Properties', bn: '৭. স্টোর্ড জেনারেটেড কলাম: গণনাকৃত ভার্চুয়াল প্রোপার্টি' } },
    {
      type: 'para',
      text: {
        en: 'Applications often maintain derived attributes, such as full_name concatenated from first and last names, or tax_total calculated from subtotal and tax_rate. Generated Columns (using GENERATED ALWAYS AS ... STORED) compute and save derived values automatically during writes, keeping calculations synchronized without writing custom trigger functions.',
        bn: 'অনেক সময় প্রথম ও শেষ নাম মিলিয়ে পুরো নাম তৈরি বা দাম ও ভ্যাট গুণ করে মোট দাম বের করার মতো হিসাব করতে হয়। জেনারেটেড কলাম (GENERATED ALWAYS AS ... STORED) লেখার সময় নিজে থেকেই এই হিসাব করে ফাইলে জমা রাখে। এর ফলে কোনো ট্রিগার না লিখেই হিসাবগুলো সর্বদা আপ-টু-ডেট ও সিঙ্ক্রোনাইজড থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Automatic tax and total calculations via STORED generated columns:
CREATE TABLE invoice_items (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  unit_price NUMERIC(10, 2) NOT NULL,
  quantity INT NOT NULL,
  tax_rate NUMERIC(4, 2) NOT NULL DEFAULT 0.15,

  -- Generated line subtotal:
  subtotal NUMERIC(12, 2) GENERATED ALWAYS AS (unit_price * quantity) STORED,

  -- Generated line total including tax:
  total_with_tax NUMERIC(12, 2) GENERATED ALWAYS AS (
    (unit_price * quantity) * (1 + tax_rate)
  ) STORED
);`,
      caption: {
        en: 'STORED generated columns compute derived values natively, eliminating trigger boilerplate.',
        bn: 'STORED জেনারেটেড কলাম ট্রিগার ছাড়াই ডেটা লেখার সময় প্রয়োজনীয় হিসাব সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Deferrable Constraints: Resolving Circular References', bn: '৮. ডিফারবল কনস্ট্রেইন্ট: সার্কুলার রেফারেন্স সমাধান' } },
    {
      type: 'para',
      text: {
        en: 'By default, constraints validate immediately after each individual statement. If two tables reference each other in a circular dependency (such as a department having a manager_id pointing to employee, while employee has department_id pointing to department), single-row inserts will fail. Setting DEFERRABLE INITIALLY DEFERRED delays validation until transaction COMMIT.',
        bn: 'ডিফল্টভাবে প্রতিটি কমান্ড চলার সাথে সাথে কনস্ট্রেইন্ট যাচাই হয়। কিন্তু দুটি টেবিল যদি একে অপরকে রেফার করে (যেমন ডিপার্টমেন্টের ম্যানেজার হলো একজন কর্মী, আবার কর্মীর ডিপার্টমেন্ট হলো ওই ডিপার্টমেন্ট), তবে আলাদাভাবে রো ঢোকাতে গেলে ফরেন কি ফেইল করবে। DEFERRABLE INITIALLY DEFERRED নিয়ম দিলে ট্রানজ্যাকশন COMMIT না হওয়া পর্যন্ত যাচাই প্রক্রিয়া পিছিয়ে রাখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Circular constraint deferred until transaction commit:
ALTER TABLE departments
ADD CONSTRAINT fk_dept_manager
FOREIGN KEY (manager_id) REFERENCES employees(id)
DEFERRABLE INITIALLY DEFERRED;

-- Atomic transaction inserting circular records simultaneously:
BEGIN;
INSERT INTO departments (id, name, manager_id) VALUES (10, 'Engineering', 101);
INSERT INTO employees (id, name, department_id) VALUES (101, 'Alice', 10);
COMMIT; -- Constraint verified here, successfully committing both mutually dependent rows!`,
      caption: {
        en: 'Deferred constraints validate at transaction commit, accommodating circular relationships.',
        bn: 'ডিফারবল কনস্ট্রেইন্ট ট্রানজ্যাকশন শেষে যাচাই করে পারস্পরিক সম্পর্কযুক্ত রো সেভ করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: Constraints vs Triggers vs Code', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: কনস্ট্রেইন্ট বনাম ট্রিগার বনাম অ্যাপ কোড' } },
    {
      type: 'para',
      text: {
        en: 'Choosing the right enforcement layer guarantees safety without crippling performance: Use Database Constraints for relational integrity, unique rules, and mathematical ranges. Use Triggers for auditing histories, event logging, and complex cross-table side effects. Use Application Code for user interface feedback and external API network verifications.',
        bn: 'সঠিক স্তরে ভ্যালিডেশন নিয়ম বসানো পারফরম্যান্স ও ডেটার নিরাপত্তার চমৎকার ভারসাম্য রক্ষা করে: সম্পর্কযুক্ত অখণ্ডতা, ইউনিক নিয়ম ও গাণিতিক সীমার জন্য ডাটাবেস কনস্ট্রেইন্ট ব্যবহার করুন। অডিট হিস্টোরি ও অন্যান্য টেবিলের পরিবর্তনের জন্য ট্রিগার ব্যবহার করুন। আর ব্যবহারকারীর ইন্টারফেস ফিডব্যাকের জন্য অ্যাপ্লিকেশন কোড বেছে নিন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `VALIDATION & ENFORCEMENT SPECTRUM:
+-------------------+--------------------+--------------------+--------------------+
| Dimension         | SQL Constraints    | PL/pgSQL Triggers  | Application Code   |
+-------------------+--------------------+--------------------+--------------------+
| Concurrency Safety| 100% Guaranteed    | 100% Guaranteed    | Vulnerable to Race |
| Performance Cost  | Minimal (In-engine)| Moderate (PL logic)| Network Dependent  |
| Expressiveness    | Relational / Ranges| Full Turing Code   | Unlimited          |
| Multi-Client Rule | Enforced Globally  | Enforced Globally  | Bypassed by CLI    |
| Primary Use Case  | Foreign Keys / Uniq| Audit Tables / Logs| UI Form Validation |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'SQL constraints provide the foundational bedrock of reliable enterprise software.',
        bn: 'এসকিউএল কনস্ট্রেইন্ট নির্ভরযোগ্য সফটওয়্যার তৈরির সবচেয়ে মজবুত ভিত্তি প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Handling Constraint Violation Errors in Node.js', bn: '১০. Node.js-এ কনস্ট্রেইন্ট এরর কোড হ্যান্ডেল করা' } },
    {
      type: 'para',
      text: {
        en: 'When a database constraint fails, PostgreSQL emits standardized five-character SQLSTATE error codes. Here is an enterprise error-handling service in Node.js trapping unique collisions (23505), foreign key violations (23503), check failures (23514), and exclusion overlaps (23P01).',
        bn: 'কোনো কনস্ট্রেইন্ট নিয়ম লঙ্ঘিত হলে PostgreSQL একটি নির্দিষ্ট ৫ অক্ষরের SQLSTATE এরর কোড প্রদান করে। নিচে ইউনিক ডুপ্লিকেট (23505), ফরেন কি সমস্যা (23503), চেক ফেইল (23514) এবং এক্সক্লুশন ওভারল্যাপ (23P01) সুশৃঙ্খলভাবে ধরার জন্য তৈরি একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Pool } = pg;
const pool = new Pool({ connectionString: "postgresql://postgres:secret@127.0.0.1:5432/postgres" });

async function createMemberAccount(email, username) {
  const client = await pool.connect();
  try {
    const res = await client.query(
      "INSERT INTO members (email, username) VALUES ($1, $2) RETURNING id;",
      [email, username]
    );
    return { success: true, memberId: res.rows[0].id };
  } catch (err) {
    // PostgreSQL Standard SQLSTATE Error Codes:
    switch (err.code) {
      case "23505": // unique_violation
        return { success: false, reason: "Email is already registered" };
      case "23503": // foreign_key_violation
        return { success: false, reason: "Referenced parent record does not exist" };
      case "23514": // check_violation
        return { success: false, reason: "Data violates business validation rules" };
      case "23P01": // exclusion_violation
        return { success: false, reason: "Time slot reservation overlaps an existing booking" };
      default:
        throw err; // Re-throw unexpected system crashes
    }
  } finally {
    client.release();
  }
}

console.log("Enterprise constraint violation handler initialized");
// Output: Enterprise constraint violation handler initialized`,
      caption: {
        en: 'Mapping PostgreSQL SQLSTATE error codes transforms database rejections into user-friendly responses.',
        bn: 'SQLSTATE এরর কোড ব্যবহারের মাধ্যমে ডাটাবেস এররকে ব্যবহারকারীর উপযোগী বার্তায় রূপান্তর করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-cst-ex1',
      kind: 'predict',
      topic: 'postgresql: unique constraint violation sqlstate code',
      question: {
        en: 'What is the standard five-digit SQLSTATE error code returned by PostgreSQL when a UNIQUE constraint or unique index is violated?',
        bn: 'কোনো UNIQUE কনস্ট্রেইন্ট বা ইউনিক ইনডেক্স ভঙ্গ হলে PostgreSQL কোন স্ট্যান্ডার্ড ৫ ডিজিটের SQLSTATE এরর কোডটি প্রদান করে?'
      },
      code: `/* PostgreSQL Unique Violation SQLSTATE Code: */
/* error.code === '_____' */`,
      answer: '23505',
      accept: ['23505'],
      hint: {
        en: 'SQLSTATE 23505.',
        bn: 'SQLSTATE 23505।'
      },
      explanation: {
        en: 'PostgreSQL returns error code 23505 for unique_violation, identifying duplicate key collision attempts.',
        bn: 'PostgreSQL ডুপ্লিকেট কি-র সংঘর্ষ শনাক্ত করতে 23505 কোডটি প্রদান করে।'
      }
    },
    {
      id: 'pg-cst-ex2',
      kind: 'mcq',
      topic: 'postgresql: exclusion constraint index type',
      question: {
        en: 'Which index access method is required to enforce EXCLUDE constraints that prevent overlapping time ranges or geometric boundaries?',
        bn: 'সময়ের ওভারল্যাপ বা ভৌগোলিক সীমানা সংঘর্ষ রোধ করতে EXCLUDE কনস্ট্রেইন্টে কোন ইনডেক্স পদ্ধতিটি ব্যবহার করতে হয়?'
      },
      options: [
        { en: 'GiST (Generalized Search Tree)', bn: 'GiST (জেনারেলাইজড সার্চ ট্রি)' },
        { en: 'Hash Index', bn: 'হ্যাশ ইনডেক্স' },
        { en: 'B-Tree Index', bn: 'বি-ট্রি ইনডেক্স' },
        { en: 'Sequential Scan', bn: 'সিকোয়েনশিয়াল স্ক্যান' }
      ],
      answer: 0,
      hint: {
        en: 'GiST index method.',
        bn: 'GiST ইনডেক্স পদ্ধতি।'
      },
      explanation: {
        en: 'Exclusion constraints rely on GiST indexes to evaluate range overlap operators (&&) in sub-linear time.',
        bn: 'এক্সক্লুশন কনস্ট্রেইন্ট সময়ের রেঞ্জ ওভারল্যাপ (&&) দ্রুত যাচাই করতে GiST ইনডেক্স ব্যবহার করে।'
      }
    },
    {
      id: 'pg-cst-ex3',
      kind: 'mcq',
      topic: 'postgresql: foreign key missing index penalty',
      question: {
        en: 'What severe performance issue occurs when deleting a parent table row if the child table referencing foreign key column lacks an index?',
        bn: 'চাইল্ড টেবিলের ফরেন কি কলামে ইনডেক্স না থাকলে প্যারেন্ট রো মোছার সময় কোন গুরুতর পারফরম্যান্স সমস্যা দেখা দেয়?'
      },
      options: [
        { en: 'PostgreSQL executes an expensive Sequential Scan across the entire child table, locking it and risking deadlocks', bn: 'PostgreSQL পুরো চাইল্ড টেবিলজুড়ে একটি অত্যন্ত ধীরগতির সিকোয়েনশিয়াল স্ক্যান চালায় এবং টেবিল লক করে ডেডলক সৃষ্টি করতে পারে' },
        { en: 'The database shuts down immediately', bn: 'ডাটাবেস সাথে সাথে বন্ধ হয়ে যায়' },
        { en: 'All data is converted to plaintext CSV', bn: 'সব ডেটা সিএসভিতে রূপ নেয়' },
        { en: 'The query runs 10x faster', bn: 'কুয়েরি ১০ গুণ দ্রুত চলে' }
      ],
      answer: 0,
      hint: {
        en: 'Full sequential scan across child table.',
        bn: 'চাইল্ড টেবিলজুড়ে ফুল সিকোয়েনশিয়াল স্ক্যান।'
      },
      explanation: {
        en: 'To check whether referencing child rows exist, PostgreSQL must scan the child table. Without an index, this triggers a full table scan.',
        bn: 'চাইল্ড রো আছে কিনা দেখতে ইনডেক্স না থাকলে পুরো চাইল্ড টেবিল স্ক্যান করতে হয় যা মারাত্মক ধীরগতির সৃষ্টি করে।'
      }
    }
  ],
  quiz: {
    id: 'pg-cst-quiz',
    title: { en: 'PostgreSQL Constraints & Data Integrity Quiz', bn: 'PostgreSQL কনস্ট্রেইন্ট ও ডেটা ইন্টিগ্রিটি কুইজ' },
    questions: [
      {
        id: 'pcstq1',
        kind: 'mcq',
        topic: 'postgresql: modern identity column syntax',
        question: {
          en: 'What is the modern SQL standard syntax recommended by PostgreSQL for auto-incrementing surrogate primary keys over legacy SERIAL?',
          bn: 'পুরনো SERIAL টাইপের বদলে অটো-ইনক্রিমেন্ট প্রাইমারি কি তৈরির জন্য আধুনিক এসকিউএল স্ট্যান্ডার্ড বাক্যরীতি কোনটি?'
        },
        options: [
          { en: 'BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY', bn: 'BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
          { en: 'INT AUTO_INCREMENT PRIMARY KEY', bn: 'INT AUTO_INCREMENT PRIMARY KEY' },
          { en: 'SERIALIZED_KEY NUMBER UNIQUE', bn: 'SERIALized কি নম্বর' },
          { en: 'UUID MANUAL ASSIGN', bn: 'ম্যানুয়াল UUID প্রদান' }
        ],
        answer: 0,
        hint: {
          en: 'GENERATED ALWAYS AS IDENTITY.',
          bn: 'GENERATED ALWAYS AS IDENTITY।'
        },
        explanation: {
          en: 'Identity columns conform to SQL standards, preventing accidental manual key overrides and avoiding sequence ownership quirks.',
          bn: 'আইডেন্টিটি কলাম আধুনিক এসকিউএল মানদণ্ড মেনে চলে এবং অনাকাঙ্ক্ষিত ম্যানুয়াল এন্ট্রি প্রতিরোধ করে।'
        }
      },
      {
        id: 'pcstq2',
        kind: 'mcq',
        topic: 'postgresql: partial unique index utility',
        question: {
          en: 'Why do production architectures use Partial Unique Indexes (WHERE deleted_at IS NULL) instead of table-level UNIQUE constraints?',
          bn: 'প্রোডাকশন আর্কিটেকচারে টেবিল-লেভেলের UNIQUE কনস্ট্রেইন্টের বদলে কেন আংশিক ইউনিক ইনডেক্স (WHERE deleted_at IS NULL) ব্যবহার করা হয়?'
        },
        options: [
          { en: 'To enforce uniqueness exclusively on active records while allowing previously soft-deleted historical rows to share values', bn: 'শুধুমাত্র সক্রিয় তথ্যের ওপর ইউনিক নিয়ম প্রয়োগ করতে, যাতে সফট ডিলিট হওয়া পুরনো ডেটার সাথে ডুপ্লিকেট না বাধে' },
          { en: 'To delete half of the table automatically', bn: 'অর্ধেক টেবিল মুছে ফেলার জন্য' },
          { en: 'To compress data into ZIP archives', bn: 'জিপ ফাইলে ডেটা কমপ্রেস করতে' },
          { en: 'Because PostgreSQL does not support normal unique keys', bn: 'কারণ রেডিস সাধারণ কি সমর্থন করে না' }
        ],
        answer: 0,
        hint: {
          en: 'Allows soft-deleted historical records.',
          bn: 'সফট ডিলিট হওয়া পুরনো ডেটা সংরক্ষণ করতে দেয়।'
        },
        explanation: {
          en: 'Partial unique indexes scope uniqueness to active rows, permitting re-registration of soft-deleted emails or usernames.',
          bn: 'আংশিক ইনডেক্স কেবল সক্রিয় ডেটার ওপর নিয়ম প্রয়োগ করে সফট ডিলিটের ঝামেলা দূর করে।'
        }
      },
      {
        id: 'pcstq3',
        kind: 'mcq',
        topic: 'postgresql: deferrable constraint timing',
        question: {
          en: 'When does PostgreSQL validate a constraint configured as DEFERRABLE INITIALLY DEFERRED?',
          bn: 'DEFERRABLE INITIALLY DEFERRED হিসেবে কনফিগার করা একটি কনস্ট্রেইন্ট কখন যাচাই করা হয়?'
        },
        options: [
          { en: 'At the end of the transaction upon issuing COMMIT, rather than after each individual statement', bn: 'প্রতিটি কমান্ডের শেষে নয়, বরং ট্রানজ্যাকশন শেষে COMMIT কমান্ড দেওয়ার সময়' },
          { en: 'Never; it disables validation permanently', bn: 'কখনোই নয়' },
          { en: 'Only when the server reboots', bn: 'সার্ভার রিবুট করার সময়' },
          { en: 'Exactly 24 hours later', bn: '২৪ ঘণ্টা পর' }
        ],
        answer: 0,
        hint: {
          en: 'At transaction commit.',
          bn: 'ট্রানজ্যাকশন কমিটের সময়।'
        },
        explanation: {
          en: 'Deferred constraints postpone checking until commit time, enabling mutually dependent circular references to resolve safely.',
          bn: 'ডিফারবল কনস্ট্রেইন্ট কমিটের আগ পর্যন্ত অপেক্ষা করে সার্কুলার রেফারেন্স সমাধানের সুযোগ দেয়।'
        }
      },
      {
        id: 'pcstq4',
        kind: 'mcq',
        topic: 'postgresql: stored generated columns benefit',
        question: {
          en: 'What is the primary benefit of using STORED Generated Columns over application calculation routines?',
          bn: 'অ্যাপ্লিকেশনে হিসাব করার তুলনায় STORED জেনারেটেড কলাম ব্যবহারের প্রধান সুবিধা কোনটি?'
        },
        options: [
          { en: 'The database computes and stores derived values automatically on write, keeping them indexed and synchronized across all clients', bn: 'ডাটাবেস লেখার সময় স্বয়ংক্ৰিয়ভাবে হিসাব করে মান সংরক্ষণ করে, যা সমস্ত ক্লায়েন্টের মাঝে ইনডেক্সযুক্ত ও সিঙ্ক থাকে' },
          { en: 'It reduces disk storage to 0 bytes', bn: 'ডিস্ক স্টোরেজ ০ বাইট করে দেয়' },
          { en: 'It turns off SQL validation rules', bn: 'এসকিউএল ভ্যালিডেশন বন্ধ করে দেয়' },
          { en: 'It eliminates the need for primary keys', bn: 'প্রাইমারি কি-র দরকার হয় না' }
        ],
        answer: 0,
        hint: {
          en: 'Automatic in-database computation and indexing.',
          bn: 'ডাটাবেসের ভেতরে স্বয়ংক্রিয় গণনা ও ইনডেক্সিং।'
        },
        explanation: {
          en: 'Stored generated columns persist derived values, making them directly indexable with B-Trees and available to all consumers.',
          bn: 'জেনারেটেড কলাম গণনাকৃত মান সংরক্ষণ করে, যা সাধারণ কলামের মতোই সরাসরি ইনডেক্স করা যায়।'
        }
      }
    ]
  }
};
