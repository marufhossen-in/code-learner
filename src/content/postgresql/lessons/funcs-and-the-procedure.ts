import type { Lesson } from '../../../lib/types';

export const FuncsAndTheProcedureLesson: Lesson = {
  slug: 'funcs-and-the-procedure',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL Server Programming: Functions, Procedures & Triggers',
    bn: 'PostgreSQL সার্ভার প্রোগ্রামিং: ফাংশন, প্রসিডিউর ও ট্রিগার'
  },
  summary: {
    en: 'Master in-database procedural programming, transaction procedures, and reactive trigger pipelines across 10 structured topics. Understand the PL/pgSQL compilation model. Differentiate value-returning Functions from transaction-managing Stored Procedures called with CALL. Optimize query execution plans using function volatility categories (IMMUTABLE, STABLE, VOLATILE). Intercept database mutations using BEFORE and AFTER row-level triggers. Construct automated JSONB change-data-capture audit logs. Enforce security boundaries with SECURITY DEFINER, and trigger reactive Node.js listeners using LISTEN and NOTIFY.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ডাটাবেসের অভ্যন্তরে প্রসিডিউরাল প্রোগ্রামিং, ট্রানজ্যাকশন প্রসিডিউর এবং রিঅ্যাক্টিভ ট্রিগার পাইপলাইন আয়ত্ত করুন। PL/pgSQL কম্পাইলেশন মডেল বুঝুন। মান ফেরত দেওয়া ফাংশন এবং CALL দিয়ে চলা ট্রানজ্যাকশন ম্যানেজিং স্টোর্ড প্রসিডিউরের পার্থক্য জানুন। ফাংশন ভোলাটিলিটি ক্যাটাগরি (IMMUTABLE, STABLE, VOLATILE) দিয়ে কুয়েরি প্ল্যান অপ্টিমাইজ করুন। BEFORE ও AFTER রো-লেভেল ট্রিগার দিয়ে ডেটা পরিবর্তন নিয়ন্ত্রণ করুন। স্বয়ংক্রিয় JSONB অডিট লগ তৈরি করুন। SECURITY DEFINER দিয়ে নিরাপত্তা স্তর নির্ধারণ করুন এবং LISTEN ও NOTIFY সহযোগে Node.js ক্লায়েন্টে ইভেন্ট পাঠান।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'replicas-and-the-wal',
    tech: 'postgresql',
    title: {
      en: 'PostgreSQL High Availability: WAL, Streaming Replication & PITR',
      bn: 'PostgreSQL হাই অ্যাভেইলেবিলিটি: WAL, স্ট্রিমিং রেপ্লিকেশন ও PITR'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. What is PL/pgSQL? In-Database Computation', bn: '১. PL/pgSQL কী? ডাটাবেসের ভেতর গণনা' } },
    {
      type: 'para',
      text: {
        en: 'Moving thousands of rows over network sockets to execute business logic in backend application servers introduces massive latency. PL/pgSQL (Procedural Language / PostgreSQL) executes imperative programming constructs—loops, conditional branches, variables, and error traps—directly inside the database engine, cutting network round-trip overhead to zero.',
        bn: 'অ্যাপ্লিকেশন সার্ভারে ব্যবসায়িক লজিক কার্যকর করার জন্য নেটওয়ার্ক দিয়ে হাজার হাজার রো আদান-প্রদান করলে মারাত্মক লেটেন্সি তৈরি হয়। PL/pgSQL সরাসরি ডাটাবেস ইঞ্জিনের ভেতরেই লুপ, শর্ত, ভেরিয়েবল এবং এক্সেপশন হ্যান্ডলিংয়ের মতো প্রোগ্রামিং লজিক কার্যকর করে, যা নেটওয়ার্কের অযথা কালক্ষেপণ সম্পূর্ণ দূর করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Anonymous PL/pgSQL execution block:
DO $$
DECLARE
  v_counter INT := 0;
  v_total   NUMERIC(10, 2);
BEGIN
  -- Perform in-engine summation:
  SELECT SUM(price) INTO v_total FROM products;
  RAISE NOTICE 'Total inventory valuation calculated: $%', v_total;
END $$;
-- Output: NOTICE: Total inventory valuation calculated: $129.99`,
      caption: {
        en: 'Anonymous code blocks execute procedural algorithms directly inside server memory.',
        bn: 'অ্যানোনিমাস কোড ব্লক মেমরির ভেতরে সরাসরি প্রসিডিউরাল অ্যালগরিদম কার্যকর করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Trigger Pipeline Flow: BEFORE vs AFTER Execution', bn: 'ট্রিগার পাইপলাইন প্রবাহ: BEFORE বনাম AFTER এক্সিকিউশন' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="PostgreSQL Trigger Execution Pipeline">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="130" height="90" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="65" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Client DML</text>
<text x="65" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">INSERT / UPDATE</text>

<path d="M135,65 L195,65" stroke="#38bdf8" stroke-width="2"/>

<rect x="200" y="10" width="140" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
<text x="270" y="35" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">BEFORE Trigger</text>
<text x="270" y="58" font-size="9" fill="#cbd5e1" text-anchor="middle">Validates Input</text>
<text x="270" y="78" font-size="9" fill="#e2e8f0" text-anchor="middle">Can Mutate NEW</text>
<text x="270" y="98" font-size="9" fill="#f87171" text-anchor="middle">Can Return NULL</text>

<path d="M345,65 L405,65" stroke="#10b981" stroke-width="2"/>

<rect x="410" y="20" width="110" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="465" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Table Store</text>
<text x="465" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Row Written</text>

<path d="M525,65 L565,65" stroke="#10b981" stroke-width="2"/>

<rect x="570" y="10" width="100" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
<text x="620" y="35" font-size="10" font-weight="700" fill="#38bdf8" text-anchor="middle">AFTER</text>
<text x="620" y="60" font-size="9" fill="#cbd5e1" text-anchor="middle">Audit Logs</text>
<text x="620" y="80" font-size="9" fill="#cbd5e1" text-anchor="middle">NOTIFY</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Functions vs Stored Procedures: The Transaction Boundary', bn: '২. ফাংশন বনাম স্টোর্ড প্রসিডিউর: ট্রানজ্যাকশন নিয়ন্ত্রণ' } },
    {
      type: 'para',
      text: {
        en: 'Prior to PostgreSQL 11, only User Defined Functions existed. A Function must return a value (or VOID) and always runs inside an existing transaction—it cannot commit or roll back. Introduced in PostgreSQL 11, a Stored Procedure is invoked with CALL, does not return values directly, and possesses the unique ability to commit or roll back transactions mid-execution.',
        bn: 'PostgreSQL ১১ এর আগে শুধুমাত্র ইউজার ডিফাইন্ড ফাংশন ছিল। একটি ফাংশনকে অবশ্যই কোনো মান (বা VOID) ফেরত দিতে হয় এবং এটি সর্বদা একটি চলমান ট্রানজ্যাকশনের অধীনে চলে—মাঝপথে এটি COMMIT বা ROLLBACK করতে পারে না। কিন্তু PostgreSQL ১১ তে আসা স্টোর্ড প্রসিডিউর CALL দিয়ে চালানো হয় এবং এটি অপারেশনের মাঝপথেই ট্রানজ্যাকশন কমিট বা রোলব্যাক করার পূর্ণ ক্ষমতা রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Function (invoked in SELECT expressions):
CREATE OR REPLACE FUNCTION calculate_vat(subtotal NUMERIC)
RETURNS NUMERIC AS $$
BEGIN
  RETURN ROUND(subtotal * 0.15, 2);
END;
$$ LANGUAGE plpgsql;

-- 2. Stored Procedure with mid-stream transaction control:
CREATE OR REPLACE PROCEDURE batch_archive_invoices(batch_limit INT)
LANGUAGE plpgsql AS $$
BEGIN
  DELETE FROM invoices WHERE paid = true AND created_at < NOW() - INTERVAL '1 year'
  LIMIT batch_limit;

  -- Commit batch immediately to release locks:
  COMMIT;
END;
$$;

-- Invoking procedure:
CALL batch_archive_invoices(500);`,
      caption: {
        en: 'Procedures commit transactions incrementally, preventing long-held table locks.',
        bn: 'প্রসিডিউর মাঝপথে ট্রানজ্যাকশন কমিট করে টেবিল লক মুক্ত রাখতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Function Volatility: IMMUTABLE, STABLE & VOLATILE', bn: '৩. ফাংশন ভোলাটিলিটি: IMMUTABLE, STABLE ও VOLATILE' } },
    {
      type: 'para',
      text: {
        en: 'To optimize execution plans, PostgreSQL classifies functions into three volatility tiers: IMMUTABLE functions depend purely on input arguments and never modify state (e.g. math routines), allowing the planner to pre-calculate constants. STABLE functions cannot modify state and return identical results within a single table scan (e.g. current_time). VOLATILE functions can return different results on every row evaluation (e.g. random()).',
        bn: 'কুয়েরি প্ল্যান অপ্টিমাইজ করতে PostgreSQL ফাংশনগুলোকে তিনটি ভোলাটিলিটি স্তরে ভাগ করে: IMMUTABLE ফাংশন শুধুমাত্র প্রদত্ত আর্গুমেন্টের ওপর নির্ভর করে এবং ডাটাবেস পরিবর্তন করে না, ফলে প্ল্যানার আগে থেকেই মান ক্যাশ করতে পারে। STABLE ফাংশন একটি নির্দিষ্ট স্ক্যানে একই ফলাফল দেয় (যেমন current_time)। আর VOLATILE ফাংশন প্রতিটি রো-এর জন্য ভিন্ন ভিন্ন মান তৈরি করতে পারে (যেমন random())।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- IMMUTABLE allows indexing on functional expressions!
CREATE OR REPLACE FUNCTION normalize_slug(raw_title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN LOWER(REGEXP_REPLACE(TRIM(raw_title), '[^a-zA-Z0-9]+', '-', 'g'));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Functional index enabled by IMMUTABLE volatility guarantee:
CREATE INDEX idx_products_slug ON products (normalize_slug(title));`,
      caption: {
        en: 'Only IMMUTABLE functions can be used to construct expression-based indexes.',
        bn: 'শুধুমাত্র IMMUTABLE ফাংশন ব্যবহার করেই এক্সপ্রেশন-ভিত্তিক ইনডেক্স তৈরি করা যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Set-Returning Functions: RETURNS TABLE', bn: '৪. সেট-রিটার্নিং ফাংশন: RETURNS TABLE' } },
    {
      type: 'para',
      text: {
        en: 'Functions can generate dynamic virtual tables by declaring RETURNS TABLE. Inside the function body, RETURN QUERY pipes the output of an internal query directly to the caller, while RETURN NEXT emits dynamically constructed rows on the fly. Callers query the function like a standard relational table in FROM clauses.',
        bn: 'ফাংশনে RETURNS TABLE ঘোষণার মাধ্যমে ডায়নামিক ভার্চুয়াল টেবিল তৈরি করা যায়। ফাংশনের ভেতর RETURN QUERY কোনো অভ্যন্তরীণ কুয়েরির ফলাফল সরাসরি ফেরত দেয় এবং RETURN NEXT তাৎক্ষণিকভাবে তৈরি হওয়া রো একে একে পাঠায়। ব্যবহারকারীরা সাধারণ রিলেশনাল টেবিলের মতো FROM ক্লজে এই ফাংশনটি কল করতে পারেন।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Set-returning function acting as a parameterized virtual view:
CREATE OR REPLACE FUNCTION get_high_value_customers(threshold NUMERIC)
RETURNS TABLE(customer_id BIGINT, total_spent NUMERIC) AS $$
BEGIN
  RETURN QUERY
  SELECT c.id, SUM(o.total_amount)
  FROM customers c
  JOIN orders o ON c.id = o.customer_id
  GROUP BY c.id
  HAVING SUM(o.total_amount) >= threshold;
END;
$$ LANGUAGE plpgsql STABLE;

-- Querying set-returning function in FROM clause:
SELECT * FROM get_high_value_customers(1000.00);`,
      caption: {
        en: 'RETURNS TABLE transforms procedural routines into composable relational data sources.',
        bn: 'RETURNS TABLE প্রসিডিউরাল কোডকে সাধারণ টেবিলের মতো কুয়েরিযোগ্য উৎসে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Trigger Architecture: BEFORE vs AFTER Mechanics', bn: '৫. ট্রিগার আর্কিটেকচার: BEFORE বনাম AFTER মেকানিজম' } },
    {
      type: 'para',
      text: {
        en: 'Triggers execute automatically in response to INSERT, UPDATE, DELETE, or TRUNCATE events. A BEFORE trigger fires prior to saving the row to disk: it can inspect and modify fields in the NEW record or return NULL to abort the write silently. An AFTER trigger fires once the row is written to storage, making it ideal for non-mutating side effects like audit logging.',
        bn: 'INSERT, UPDATE বা DELETE ইভেন্টের প্রতিক্রিয়ায় ট্রিগার নিজে থেকেই কার্যকর হয়। একটি BEFORE ট্রিগার রো ডিস্কে সেভ হওয়ার আগেই চলে: এটি NEW রেকর্ডের মান পরিবর্তন করতে পারে বা NULL ফেরত দিয়ে সেভ বাতিল করতে পারে। আর AFTER ট্রিগার ডেটা ডিস্কে লেখার পরে চলে, যা অডিট লগ রাখা বা ইভেন্ট পাঠানোর মতো কাজের জন্য উপযুক্ত।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Step 1: Trigger function must RETURN TRIGGER:
CREATE OR REPLACE FUNCTION sanitize_user_input()
RETURNS TRIGGER AS $$
BEGIN
  -- Trim whitespace and force lowercase email:
  NEW.email := LOWER(TRIM(NEW.email));
  -- Update modification timestamp automatically:
  NEW.updated_at := NOW();
  RETURN NEW; -- Returns sanitized row to be written!
END;
$$ LANGUAGE plpgsql;

-- Step 2: Bind trigger function to table:
CREATE TRIGGER trg_before_user_mutation
BEFORE INSERT OR UPDATE ON members
FOR EACH ROW
EXECUTE FUNCTION sanitize_user_input();`,
      caption: {
        en: 'BEFORE triggers sanitize or mutate incoming values prior to physical disk writes.',
        bn: 'BEFORE ট্রিগার ডিস্কে লেখার আগেই ইনপুট ডেটা সংশোধন ও ফিল্টার করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Trigger Context Variables: NEW, OLD, and TG_OP', bn: '৬. ট্রিগার ভেরিয়েবল: NEW, OLD ও TG_OP' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL injects context variables into trigger functions. NEW contains the incoming row representation for INSERT or UPDATE. OLD holds the original row values for UPDATE or DELETE. TG_OP indicates the triggering operation as a string (INSERT, UPDATE, or DELETE), allowing a unified trigger function to manage multiple event types cleanly.',
        bn: 'PostgreSQL ট্রিগার ফাংশনের ভেতর স্বয়ংক্রিয় কিছু ভেরিয়েবল সরবরাহ করে। NEW ভেরিয়েবলে নতুন ঢোকা বা পরিবর্তিত রো থাকে। OLD ভেরিয়েবলে পরিবর্তনের আগের আসল রো থাকে। আর TG_OP ভেরিয়েবলটি স্ট্রিং আকারে জানায় কোন অপারেশনটি চলেছে (INSERT, UPDATE নাকি DELETE), ফলে একটিমাত্র ফাংশন দিয়েই সব ইভেন্ট সামলানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Unified trigger function handling multiple operations:
CREATE OR REPLACE FUNCTION track_inventory_delta()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'UPDATE') THEN
    IF (OLD.stock_quantity <> NEW.stock_quantity) THEN
      INSERT INTO inventory_audit (product_id, old_qty, new_qty, changed_at)
      VALUES (NEW.id, OLD.stock_quantity, NEW.stock_quantity, NOW());
    END IF;
    RETURN NEW;
  ELSIF (TG_OP = 'DELETE') THEN
    INSERT INTO inventory_audit (product_id, old_qty, new_qty, changed_at)
    VALUES (OLD.id, OLD.stock_quantity, 0, NOW());
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`,
      caption: {
        en: 'Context variables allow trigger functions to audit exact deltas between OLD and NEW states.',
        bn: 'কনটেক্সট ভেরিয়েবল OLD ও NEW ব্যবহার করে যেকোনো পরিবর্তনের নিখুঁত পার্থক্য ট্র্যাক করা যায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Change Data Capture (CDC): Automated JSONB Auditing', bn: '৭. চেঞ্জ ডেটা ক্যাপচার (CDC): স্বয়ংক্রিয় JSONB অডিটিং' } },
    {
      type: 'para',
      text: {
        en: 'Enterprise compliance mandates auditing every modification made to sensitive tables. By combining AFTER triggers with the to_jsonb() function, developers create a single universal audit table. The trigger serializes OLD and NEW rows into JSONB snapshots, storing actor IDs, timestamps, and row deltas automatically.',
        bn: 'নিয়মমাফিক কাজের জন্য সংবেদনশীল টেবিলের প্রতিটি পরিবর্তনের প্রমাণ রাখা আবশ্যক। AFTER ট্রিগারের সাথে to_jsonb() ফাংশন মিলিয়ে একটি সার্বজনীন অডিট সিস্টেম তৈরি করা যায়। ট্রিগারটি OLD এবং NEW রো-কে JSONB ফরম্যাটে রূপান্তর করে পরিবর্তনকারী ইউজার, সময় এবং মানের পার্থক্য স্বয়ংক্ৰিয়ভাবে সেভ করে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Universal audit table:
CREATE TABLE audit_ledger (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  table_name TEXT NOT NULL,
  operation VARCHAR(10) NOT NULL,
  old_data JSONB,
  new_data JSONB,
  performed_by VARCHAR(50) DEFAULT CURRENT_USER,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Universal auditing trigger function:
CREATE OR REPLACE FUNCTION audit_row_changes()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO audit_ledger (table_name, operation, old_data, new_data)
  VALUES (
    TG_TABLE_NAME,
    TG_OP,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN to_jsonb(OLD) ELSE NULL END,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN to_jsonb(NEW) ELSE NULL END
  );
  RETURN NULL; -- AFTER triggers ignore return value
END;
$$ LANGUAGE plpgsql;`,
      caption: {
        en: 'Universal CDC auditing serializes row states into queryable JSONB historical snapshots.',
        bn: 'সার্বজনীন CDC অডিটিং যেকোনো পরিবর্তনের ইতিহাস পরবর্তীতে কুয়েরিযোগ্য JSONB হিসেবে রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Security Definer vs Invoker: Privilege Escalation', bn: '৮. সিকিউরিটি ডিফায়নার বনাম ইনভোকার: প্রিভিলেজ নিয়ন্ত্রণ' } },
    {
      type: 'para',
      text: {
        en: 'By default, functions execute with the permissions of the calling user (SECURITY INVOKER). If an unprivileged user needs to execute a restricted action (such as resetting a password in a locked table), the function is declared SECURITY DEFINER. This elevates privileges to the function creator while preserving secure input parameters.',
        bn: 'ডিফল্টভাবে ফাংশন কলকারী ইউজারের নিজস্ব পারমিশনে চলে (SECURITY INVOKER)। কোনো সাধারণ ইউজারকে যদি বিশেষ কোনো সুরক্ষিত কাজ করার ক্ষমতা দিতে হয় (যেমন লক থাকা টেবিলে পাসওয়ার্ড রিসেট), তখন ফাংশনটিকে SECURITY DEFINER হিসেবে তৈরি করা হয়। এটি সাময়িকভাবে ফাংশন নির্মাতার প্রিভিলেজ ব্যবহার করে কাজ সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Privilege-elevated function with defensive search_path:
CREATE OR REPLACE FUNCTION admin_reset_api_key(target_account_id BIGINT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
-- CRITICAL SECURITY BEST PRACTICE: Lock search_path to prevent Trojan injection!
SET search_path = public, pg_temp AS $$
DECLARE
  v_new_key TEXT := md5(random()::text || clock_timestamp()::text);
BEGIN
  UPDATE private_credentials SET api_key = v_new_key WHERE account_id = target_account_id;
  RETURN v_new_key;
END;
$$;`,
      caption: {
        en: 'Always lock the search_path inside SECURITY DEFINER functions to prevent path hijacking.',
        bn: 'সিকিউরিটি ডিফায়নার ফাংশনে হাইজ্যাকিং এড়াতে সর্বদা search_path নির্দিষ্ট করে দিন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Event Broadcasting: LISTEN and NOTIFY Pipelines', bn: '৯. ইভেন্ট ব্রডকাস্টিং: LISTEN ও NOTIFY পাইপলাইন' } },
    {
      type: 'para',
      text: {
        en: 'Constantly polling PostgreSQL tables with repeated SELECT queries wastes server CPU. PostgreSQL features native asynchronous pub/sub messaging via LISTEN and NOTIFY. Triggers emit notifications carrying JSON payloads whenever rows change, allowing external microservices to react in real-time without polling loops.',
        bn: 'বারবার SELECT কুয়েরি চালিয়ে টেবিলে নতুন ডেটা খোঁজা প্রসেসরের অপচয় ঘটায়। PostgreSQL-এ নিজস্ব অ্যাসিঙ্ক্রোনাস পাব/সাব সুবিধা রয়েছে যার নাম LISTEN ও NOTIFY। কোনো টেবিলে পরিবর্তন এলে ট্রিগার নিজে থেকেই নোটিফিকেশন পাঠায়, ফলে এক্সটার্নাল মাইক্রোসার্ভিসগুলো কোনো পোলিং লুপ ছাড়াই রিয়েল-টাইমে সাড়া দিতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Trigger function broadcasting new order events:
CREATE OR REPLACE FUNCTION notify_new_order()
RETURNS TRIGGER AS $$
BEGIN
  -- Broadcast event payload to "order_events" channel:
  PERFORM pg_notify(
    'order_events',
    json_build_object('order_id', NEW.id, 'amount', NEW.total_amount)::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_after_order_inserted
AFTER INSERT ON orders
FOR EACH ROW EXECUTE FUNCTION notify_new_order();`,
      caption: {
        en: 'pg_notify turns database row mutations into real-time pub/sub event streams.',
        bn: 'pg_notify ডাটাবেস পরিবর্তনকে তাৎক্ষণিক রিয়েল-টাইম ইভেন্ট ব্রডকাস্টে রূপ দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Real-Time LISTEN in Node.js', bn: '১০. Node.js-এ রিয়েল-টাইম LISTEN বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production event listener in Node.js subscribing to PostgreSQL notifications using a dedicated connection client from node-postgres.',
        bn: 'নিচে node-postgres ব্যবহার করে ডেডিকেটেড ক্লায়েন্ট সংযোগের মাধ্যমে রিয়েল-টাইম ডাটাবেস নোটিফিকেশন শোনার একটি সম্পূর্ণ প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Client } = pg;

// Dedicated client for continuous asynchronous listening:
const subscriber = new Client({
  connectionString: "postgresql://postgres:secret@127.0.0.1:5432/postgres"
});

await subscriber.connect();

// 1. Subscribe to database channel:
await subscriber.query("LISTEN order_events;");

subscriber.on("notification", (msg) => {
  const payload = JSON.parse(msg.payload);
  console.log("Real-time database event captured on channel:", msg.channel, payload);
});

console.log("PostgreSQL asynchronous event listener active");
// Output: PostgreSQL asynchronous event listener active`,
      caption: {
        en: 'A persistent Node.js client listening for PostgreSQL pg_notify event broadcasts.',
        bn: 'PostgreSQL-এর pg_notify ইভেন্ট রিয়েল-টাইমে শোনার জন্য ডেডিকেটেড ক্লায়েন্ট।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-fnc-ex1',
      kind: 'predict',
      topic: 'postgresql: stored procedure invocation keyword',
      question: {
        en: 'Which SQL keyword is used to invoke a PostgreSQL Stored Procedure (created via CREATE PROCEDURE)?',
        bn: 'CREATE PROCEDURE দিয়ে তৈরি একটি PostgreSQL স্টোর্ড প্রসিডিউর চালাতে কোন এসকিউএল কিওয়ার্ডটি ব্যবহৃত হয়?'
      },
      code: `/* Invoking a stored procedure: */
/* ____ batch_archive_invoices(500); */`,
      answer: 'CALL',
      accept: ['CALL', 'call'],
      hint: {
        en: 'The CALL keyword.',
        bn: 'CALL কিওয়ার্ড।'
      },
      explanation: {
        en: 'Unlike functions which are evaluated inside expressions, stored procedures are executed using the CALL statement.',
        bn: 'ফাংশনের মতো কুয়েরির ভেতর নয়, স্টোর্ড প্রসিডিউর চালাতে সরাসরি CALL কমান্ড ব্যবহার করতে হয়।'
      }
    },
    {
      id: 'pg-fnc-ex2',
      kind: 'mcq',
      topic: 'postgresql: functional index volatility requirement',
      question: {
        en: 'Which volatility classification is strictly required for a user function to be utilized in an expression-based functional index?',
        bn: 'একটি ইউজার ফাংশনের ওপর ভিত্তি করে এক্সপ্রেশন ইনডেক্স তৈরি করতে ফাংশনটিকে অবশ্যই কোন ভোলাটিলিটি স্তরের হতে হয়?'
      },
      options: [
        { en: 'IMMUTABLE', bn: 'IMMUTABLE' },
        { en: 'VOLATILE', bn: 'VOLATILE' },
        { en: 'STABLE', bn: 'STABLE' },
        { en: 'DYNAMIC', bn: 'DYNAMIC' }
      ],
      answer: 0,
      hint: {
        en: 'IMMUTABLE volatility.',
        bn: 'IMMUTABLE ভোলাটিলিটি।'
      },
      explanation: {
        en: 'Expression indexes require IMMUTABLE functions because the output must never change for given input parameters.',
        bn: 'ইনডেক্সিংয়ের জন্য IMMUTABLE আবশ্যক কারণ নির্দিষ্ট ইনপুটের জন্য এর মান কখনো পরিবর্তিত হতে পারে না।'
      }
    },
    {
      id: 'pg-fnc-ex3',
      kind: 'mcq',
      topic: 'postgresql: trigger new row context variable',
      question: {
        en: 'Which special record variable represents the newly inserted or updated row values inside a PostgreSQL trigger function?',
        bn: 'একটি PostgreSQL ট্রিগার ফাংশনের ভেতর নতুন ইনসার্ট বা আপডেট হওয়া রো-এর মান কোন বিশেষ ভেরিয়েবলে থাকে?'
      },
      options: [
        { en: 'NEW', bn: 'NEW' },
        { en: 'OLD', bn: 'OLD' },
        { en: 'TARGET', bn: 'TARGET' },
        { en: 'CURRENT', bn: 'CURRENT' }
      ],
      answer: 0,
      hint: {
        en: 'The NEW variable.',
        bn: 'NEW ভেরিয়েবল।'
      },
      explanation: {
        en: 'The NEW record variable holds the incoming row values during INSERT and UPDATE trigger executions.',
        bn: 'INSERT ও UPDATE চলার সময় NEW ভেরিয়েবলে নতুন ডাটা সংরক্ষিত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'pg-fnc-quiz',
    title: { en: 'PostgreSQL Server Programming Quiz', bn: 'PostgreSQL সার্ভার প্রোগ্রামিং কুইজ' },
    questions: [
      {
        id: 'pfncq1',
        kind: 'mcq',
        topic: 'postgresql: function vs procedure capability',
        question: {
          en: 'What unique operational capability distinguishes a Stored Procedure from a standard Function in PostgreSQL?',
          bn: 'PostgreSQL-এ একটি স্টোর্ড প্রসিডিউর এবং সাধারণ ফাংশনের মধ্যে প্রধান কার্যগত পার্থক্য কোনটি?'
        },
        options: [
          { en: 'Procedures can commit and roll back database transactions mid-execution, whereas functions cannot manage transactions', bn: 'প্রসিডিউর কাজের মাঝপথেই ডাটাবেস ট্রানজ্যাকশন COMMIT বা ROLLBACK করতে পারে, যা ফাংশনে সম্ভব নয়' },
          { en: 'Functions can only be written in Python', bn: 'ফাংশন শুধু পাইথনে লেখা যায়' },
          { en: 'Procedures delete all table data upon completion', bn: 'প্রসিডিউর সব ডেটা মুছে ফেলে' },
          { en: 'Functions run on the client while procedures run in the cloud', bn: 'ফাংশন ক্লায়েন্টে চলে' }
        ],
        answer: 0,
        hint: {
          en: 'Transaction control with COMMIT and ROLLBACK.',
          bn: 'COMMIT ও ROLLBACK দিয়ে ট্রানজ্যাকশন নিয়ন্ত্রণ।'
        },
        explanation: {
          en: 'Procedures permit explicit transaction boundary controls (COMMIT/ROLLBACK), making them ideal for large-scale batch jobs.',
          bn: 'প্রসিডিউরে সরাসরি ট্রানজ্যাকশন নিয়ন্ত্রণ করা যায়, যা বড় ব্যাচ অপারেশনের জন্য অত্যন্ত উপযোগী।'
        }
      },
      {
        id: 'pfncq2',
        kind: 'mcq',
        topic: 'postgresql: before trigger capability',
        question: {
          en: 'What unique ability do BEFORE row-level triggers possess that AFTER triggers do not?',
          bn: 'BEFORE রো-লেভেল ট্রিগারের কোন অনন্য ক্ষমতা রয়েছে যা AFTER ট্রিগারে থাকে না?'
        },
        options: [
          { en: 'They can mutate field values in the NEW record or return NULL to silently abort the write operation', bn: 'তারা NEW রেকর্ডের মান সংশোধন করতে পারে অথবা NULL ফেরত দিয়ে ডেটা সেভ বাতিল করতে পারে' },
          { en: 'They can reboot the physical server', bn: 'সার্ভার রিস্টার্ট করতে পারে' },
          { en: 'They run 10 days after the query', bn: '১০ দিন পর চলে' },
          { en: 'They convert table data into audio files', bn: 'অডিও ফাইলে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Can mutate NEW or abort by returning NULL.',
          bn: 'NEW পরিবর্তন করতে পারে বা NULL দিয়ে বাতিল করতে পারে।'
        },
        explanation: {
          en: 'BEFORE triggers evaluate prior to writing the page to disk, allowing data sanitization or silent write cancellations.',
          bn: 'BEFORE ট্রিগার ডিস্কে লেখার আগেই চলে, ফলে ইনপুট পরিবর্তন বা বাতিল করা সম্ভব হয়।'
        }
      },
      {
        id: 'pfncq3',
        kind: 'mcq',
        topic: 'postgresql: security definer search path danger',
        question: {
          en: 'Why is it critical to explicitly set the search_path inside a SECURITY DEFINER function in PostgreSQL?',
          bn: 'PostgreSQL-এ একটি SECURITY DEFINER ফাংশনের ভেতর কেন স্পষ্টভাবে search_path নির্দিষ্ট করে দেওয়া জরুরি?'
        },
        options: [
          { en: 'To prevent malicious users from overriding objects in unprivileged schemas to hijack elevated administrator permissions', bn: 'অসৎ ব্যবহারকারীরা যাতে অনিরাপদ স্কিমায় একই নামের অবজেক্ট বানিয়ে প্রশাসকের অধিকার হাইজ্যাক না করতে পারে' },
          { en: 'To increase the server download speed', bn: 'ডাউনলোড স্পিড বাড়ানোর জন্য' },
          { en: 'Because PostgreSQL crashes without it', bn: 'কারণ এটি ছাড়া ক্র্যাশ করে' },
          { en: 'To encrypt all text with AES', bn: 'টেক্সট এনক্রিপ্ট করার জন্য' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents schema search-path hijacking attacks.',
          bn: 'সার্চ-পাথ হাইজ্যাকিং আক্রমণ প্রতিরোধ করে।'
        },
        explanation: {
          en: 'Without a fixed search_path, a malicious caller could create a rogue function in their public schema that the privileged function inadvertently runs.',
          bn: 'search_path নির্দিষ্ট না থাকলে সাধারণ ইউজার একই নামের ক্ষতিকর কোড বানিয়ে প্রিভিলেজ অপব্যবহার করতে পারে।'
        }
      },
      {
        id: 'pfncq4',
        kind: 'mcq',
        topic: 'postgresql: asynchronous event notification command',
        question: {
          en: 'Which pair of SQL commands powers PostgreSQL native asynchronous event broadcasting and listening?',
          bn: 'PostgreSQL-এর নিজস্ব অ্যাসিঙ্ক্রোনাস ইভেন্ট ব্রডকাস্টিং এবং লিসেনিং চালাতে কোন জোড়া কমান্ড ব্যবহৃত হয়?'
        },
        options: [
          { en: 'LISTEN and NOTIFY', bn: 'LISTEN এবং NOTIFY' },
          { en: 'PUBLISH and SUBSCRIBE', bn: 'PUBLISH এবং SUBSCRIBE' },
          { en: 'BROADCAST and RECEIVE', bn: 'BROADCAST এবং RECEIVE' },
          { en: 'PING and PONG', bn: 'PING এবং PONG' }
        ],
        answer: 0,
        hint: {
          en: 'LISTEN and NOTIFY commands.',
          bn: 'LISTEN এবং NOTIFY কমান্ড।'
        },
        explanation: {
          en: 'LISTEN registers a client interest in a named channel, and NOTIFY broadcasts messages with payloads reactively.',
          bn: 'LISTEN চ্যানেল শোনার জন্য সংযোগ প্রস্তুত করে এবং NOTIFY রিয়েল-টাইমে মেসেজ ব্রডকাস্ট করে।'
        }
      }
    ]
  }
};
