import type { Lesson } from '../../../lib/types';

export const ViewsRoutinesAndTheOpsWindowLesson: Lesson = {
  slug: 'views-routines-and-the-ops-window',
  tech: 'mysql',
  title: {
    en: 'MySQL Views, Stored Routines, Triggers & Operations',
    bn: 'MySQL ভিউ, স্টোর্ড রুটিন, ট্রিগার ও অপারেশনস'
  },
  summary: {
    en: 'Master database programmability, security access control, and operational backups across ten structured topics. Understand SQL View optimization comparing MERGE and TEMPTABLE algorithms. Author transactional Stored Procedures with parameters and SQL exception handlers. Construct deterministic Stored Functions. Build defensive BEFORE INSERT Triggers using NEW column assertions and SIGNAL SQLSTATE 45000. Manage user privileges, host wildcards, and MySQL 8 Roles. Execute consistent zero-downtime backups using mysqldump with single-transaction, and invoke procedures in Node.js.',
    bn: 'দশটি সুসংগঠিত পয়েন্টে ডাটাবেস প্রোগ্রামিং, সিকিউরিটি অ্যাক্সেস কন্ট্রোল এবং ব্যাকআপ অপারেশন আয়ত্ত করুন। MERGE এবং TEMPTABLE অ্যালগরিদম তুলনা করে ভিউ অপ্টিমাইজেশন বুঝুন। প্যারামিটার ও এসকিউএল এক্সেপশন হ্যান্ডলার সহ ট্রানজ্যাকশনাল স্টোর্ড প্রসিডিউর তৈরি করুন। ডিটারমিনিস্টিক স্টোর্ড ফাংশন লিখুন। NEW কলাম ও SIGNAL SQLSTATE ৪৫০০০ ব্যবহার করে মজবুত ট্রিগার বানান। ইউজার পারমিশন, হোস্ট প্যাটার্ন ও MySQL ৮ রোল পরিচালনা করুন। mysqldump দিয়ে সিঙ্গেল-ট্রানজ্যাকশন জিরো-ডাউনটাইম ব্যাকআপ নিন এবং Node.js-এ প্রসিডিউর কল করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. SQL Views Architecture: MERGE vs TEMPTABLE', bn: '১. এসকিউএল ভিউ আর্কিটেকচার: MERGE বনাম TEMPTABLE' } },
    {
      type: 'para',
      text: {
        en: 'A database View is a saved named query, not a physical table of precomputed rows on disk. When a client queries a view, MySQL uses one of two internal algorithms (the merge algorithm or temptable algorithm). Under the merge algorithm, the optimizer combines the view definition directly into the outer query, allowing index scans on underlying tables. Under the temptable algorithm, MySQL materializes rows into an unindexed temporary table first, which prevents index pushdown.',
        bn: 'ডাটাবেস ভিউ হলো একটি সংরক্ষিত কুয়েরি, ডিস্কে থাকা কোনো ফিজিক্যাল টেবিল নয়। যখন ক্লায়েন্ট কোনো ভিউ থেকে ডেটা চায়, MySQL দুটি অভ্যন্তরীণ অ্যালগরিদমের (মার্জ বা টেম্পটেবিল) একটি ব্যবহার করে। মার্জ পদ্ধতিতে অপ্টিমাইজার ভিউটির কোডকে বাইরের মূল কোয়েরির সাথে মিলিয়ে ফেলে, ফলে মূল টেবিলের ইনডেক্স পুরোদমে কাজ করে। কিন্তু টেম্পটেবিল পদ্ধতিতে MySQL প্রথমে ফলাফল মেমরিতে একটি সাময়িক টেবিলে তৈরি করে, যার ফলে ইনডেক্স ব্যবহারের সুযোগ থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create an efficient MERGE view hiding soft-deleted rows:
CREATE OR REPLACE ALGORITHM = MERGE VIEW active_customers AS
  SELECT id, full_name, email, created_at
  FROM customers
  WHERE deleted_at IS NULL;

-- Querying the view leverages the email index directly:
SELECT id, full_name FROM active_customers WHERE email = 'alice@internal.corp';
-- Output: 1 row in set (0.00 sec)

-- Behind the scenes, MySQL merged this into:
-- SELECT id, full_name FROM customers WHERE deleted_at IS NULL AND email = 'alice@internal.corp';`,
      caption: {
        en: 'MERGE views rewrite queries seamlessly, preserving index lookup capabilities.',
        bn: 'MERGE ভিউ কোয়েরিকে মূল টেবিলের সাথে মিলিয়ে সরাসরি ইনডেক্স ব্যবহার করতে দেয়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'MySQL View Execution Algorithms: MERGE vs TEMPTABLE', bn: 'MySQL ভিউ এক্সিকিউশন অ্যালগরিদম: MERGE বনাম TEMPTABLE' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="MySQL Views Execution Diagram">
<g transform="translate(20, 20)">
<rect x="0" y="15" width="200" height="120" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="100" y="38" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Client Query</text>
<text x="100" y="60" font-size="9" fill="#cbd5e1" text-anchor="middle">SELECT * FROM view_v</text>
<text x="100" y="80" font-size="9" fill="#cbd5e1" text-anchor="middle">WHERE customer_id = 42</text>
<text x="100" y="110" font-size="8" fill="#94a3b8" text-anchor="middle">Evaluated by Optimizer</text>

<path d="M205,50 L305,50" stroke="#10b981" stroke-width="2"/>
<text x="255" y="42" font-size="8" fill="#4ade80" text-anchor="middle">MERGE</text>

<path d="M205,100 L305,100" stroke="#ef4444" stroke-width="2"/>
<text x="255" y="92" font-size="8" fill="#f87171" text-anchor="middle">TEMPTABLE</text>

<rect x="310" y="10" width="160" height="60" rx="6" fill="#1e293b" stroke="#10b981"/>
<text x="390" y="32" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">Inline Query Fold</text>
<text x="390" y="52" font-size="8" fill="#cbd5e1" text-anchor="middle">Direct Index Scan (Fast!)</text>

<rect x="310" y="80" width="160" height="60" rx="6" fill="#1e293b" stroke="#ef4444"/>
<text x="390" y="102" font-size="10" font-weight="700" fill="#f87171" text-anchor="middle">Materialize Table</text>
<text x="390" y="122" font-size="8" fill="#cbd5e1" text-anchor="middle">Full Scan Internal Buffer</text>

<path d="M475,40 L545,75" stroke="#10b981" stroke-width="2"/>
<path d="M475,110 L545,75" stroke="#ef4444" stroke-width="2"/>

<rect x="550" y="35" width="120" height="70" rx="6" fill="#0f172a" stroke="#fbbf24"/>
<text x="610" y="60" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Result Set</text>
<text x="610" y="82" font-size="8" fill="#cbd5e1" text-anchor="middle">Returned to Client</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Updatable Views and WITH CHECK OPTION', bn: '২. আপডেটযোগ্য ভিউ ও WITH CHECK OPTION' } },
    {
      type: 'para',
      text: {
        en: 'A view can accept INSERT, UPDATE, and DELETE statements only if there is a 1-to-1 relationship between rows in the view and rows in the underlying base table. Views containing GROUP BY, DISTINCT, UNION, or aggregate functions are strictly read-only. Adding WITH CHECK OPTION prevents clients from inserting or updating rows that violate the view WHERE predicate.',
        bn: 'একটি ভিউতে INSERT, UPDATE এবং DELETE কমান্ড তখনই চালানো যায় যখন ভিউ এবং মূল টেবিলের সারির মধ্যে ১-থেকে-১ সরাসরি মিল থাকে। GROUP BY, DISTINCT, UNION বা এগ্রিগেট ফাংশনযুক্ত ভিউ কঠোরভাবে রিড-অনলি থাকে। WITH CHECK OPTION যোগ করলে ব্যবহারকারী এমন কোনো ডেটা ইনসার্ট করতে পারে না যা ভিউটির WHERE শর্ত ভঙ্গ করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create an updatable view restricted to pending orders:
CREATE VIEW pending_orders AS
  SELECT id, customer_id, total, status
  FROM orders
  WHERE status = 'pending'
WITH CHECK OPTION;

-- Updating total of pending order succeeds:
UPDATE pending_orders SET total = 150.00 WHERE id = 1042;
-- Output: Query OK, 1 row affected (0.01 sec)

-- Attempting to update status to 'shipped' through this view FAILS:
UPDATE pending_orders SET status = 'shipped' WHERE id = 1042;
-- Output: ERROR 1369 (HY000): CHECK OPTION failed 'shop.pending_orders'`,
      caption: {
        en: 'WITH CHECK OPTION enforces schema invariants, blocking updates that contradict view filters.',
        bn: 'WITH CHECK OPTION নিশ্চিত করে কোনো আপডেট যেন ভিউয়ের মূল শর্ত লঙ্ঘন করতে না পারে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Stored Procedures: Transactions and Parameters', bn: '৩. স্টোর্ড প্রসিডিউর: ট্রানজ্যাকশন ও প্যারামিটার' } },
    {
      type: 'para',
      text: {
        en: 'Stored Procedures are compiled routines executed directly inside the database server. They accept IN, OUT, and INOUT parameters, support procedural control logic (IF/ELSE, WHILE loops), and manage transactions. To define a procedure in the interactive shell, you must temporarily change the statement delimiter using DELIMITER // to prevent premature statement execution.',
        bn: 'স্টোর্ড প্রসিডিউর হলো ডাটাবেস সার্ভারের ভেতরে সংরক্ষিত কম্পাইল করা প্রোগ্রামের সেট। এগুলো IN, OUT এবং INOUT প্যারামিটার গ্রহণ করতে পারে, প্রোগ্রামিং লজিক (IF/ELSE, লুপ) চালাতে পারে এবং ট্রানজ্যাকশন পরিচালনা করতে পারে। টার্মিনালে প্রসিডিউর লেখার সময় সেমিকোলন যেন কোড মাঝপথে না থামায়, সেজন্য সাময়িকভাবে DELIMITER // ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `DELIMITER //

CREATE PROCEDURE process_order_payment(
  IN p_order_id BIGINT UNSIGNED,
  IN p_amount DECIMAL(10,2),
  OUT p_status VARCHAR(20)
)
BEGIN
  -- Rollback automatically if any SQL error occurs:
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    SET p_status = 'FAILED';
  END;

  START TRANSACTION;
  
  -- Deduct customer wallet balance:
  UPDATE accounts 
     SET balance = balance - p_amount 
   WHERE id = (SELECT customer_id FROM orders WHERE id = p_order_id);
   
  -- Update order payment state:
  UPDATE orders 
     SET status = 'paid' 
   WHERE id = p_order_id;
   
  COMMIT;
  SET p_status = 'SUCCESS';
END //

DELIMITER ;

-- Invoke procedure:
CALL process_order_payment(1042, 150.00, @result);
SELECT @result;
-- Output: SUCCESS`,
      caption: {
        en: 'Stored procedures encapsulate multi-statement transactions, rolling back cleanly on errors.',
        bn: 'স্টোর্ড প্রসিডিউর একসাথে একাধিক কুয়েরি চালায় এবং এরর ঘটলে নিজে থেকেই রোলব্যাক করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Stored Functions: Deterministic Calculations', bn: '৪. স্টোর্ড ফাংশন: ডিটারমিনিস্টিক ক্যালকুলেশন' } },
    {
      type: 'para',
      text: {
        en: 'Unlike procedures which are called with the CALL keyword and return zero or more result sets, a Stored Function returns a single scalar value and can be embedded directly within SELECT, WHERE, and ORDER BY expressions. Functions must declare their behavior (DETERMINISTIC vs NOT DETERMINISTIC) to allow the query optimizer to plan execution safely.',
        bn: 'CALL কমান্ড দিয়ে ডাকা প্রসিডিউরের বিপরীতে, একটি স্টোর্ড ফাংশন একটিমাত্র মান রিটার্ন করে এবং এটিকে সরাসরি SELECT বা WHERE ক্লজের ভেতরে ব্যবহার করা যায়। কুয়েরি অপ্টিমাইজার যেন নিরাপদে প্ল্যান করতে পারে, সেজন্য ফাংশনটি ডিটারমিনিস্টিক (একই ইনপুটে সর্বদা একই আউটপুট দেয়) কিনা তা ঘোষণা করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `DELIMITER //

CREATE FUNCTION calculate_tax(subtotal DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
NO SQL
BEGIN
  -- Apply 15% standard sales tax:
  RETURN ROUND(subtotal * 0.15, 2);
END //

DELIMITER ;

-- Call function directly within regular SQL statements:
SELECT id, total, calculate_tax(total) AS sales_tax
FROM orders
WHERE id = 1042;
-- Output:
-- +------+--------+-----------+
-- | id   | total  | sales_tax |
-- +------+--------+-----------+
-- | 1042 | 150.00 |     22.50 |
-- +------+--------+-----------+`,
      caption: {
        en: 'Stored functions compute values inline within queries, standardizing business logic.',
        bn: 'স্টোর্ড ফাংশন কুয়েরির লাইনে বসেই হিসাব সম্পন্ন করে বিজনেজ লজিককে সার্বজনীন রূপ দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Database Triggers: Defensive Data Auditing', bn: '৫. ডাটাবেস ট্রিগার: ডেটা অডিট ও সুরক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'Triggers are event handlers bound to a specific table that fire automatically in response to INSERT, UPDATE, or DELETE statements. Inside a trigger, code accesses row states using NEW (incoming values) and OLD (previous values). A BEFORE INSERT trigger can validate attributes and abort invalid transactions by invoking SIGNAL SQLSTATE \'45000\'.',
        bn: 'ট্রিগার হলো টেবিলের সাথে যুক্ত স্বয়ংক্রিয় ইভেন্ট হ্যান্ডলার যা INSERT, UPDATE বা DELETE ঘটলে নিজে নিজেই চালু হয়। ট্রিগারের ভেতরে NEW (নতুন ডেটা) এবং OLD (আগের ডেটা) দিয়ে সারির মান যাচাই করা যায়। BEFORE INSERT ট্রিগার কোনো ভুল ডেটা পেলে সরাসরি SIGNAL SQLSTATE \'৪৫০০০\' পাঠিয়ে ট্রানজ্যাকশন বাতিল করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `DELIMITER //

CREATE TRIGGER validate_order_total_before_insert
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
  -- Reject negative or zero total amounts:
  IF NEW.total <= 0 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Order total must be strictly positive';
  END IF;
  
  -- Enforce default status:
  IF NEW.status IS NULL THEN
    SET NEW.status = 'pending';
  END IF;
END //

DELIMITER ;

-- Test trigger defense against invalid insert:
INSERT INTO orders (customer_id, total) VALUES (42, -50.00);
-- Output: ERROR 1644 (45000): Order total must be strictly positive`,
      caption: {
        en: 'Triggers enforce database-level validation that no rogue application layer can bypass.',
        bn: 'ট্রিগার ডাটাবেসের নিজস্ব স্তরে এমন সুরক্ষা দেয় যা কোনো অ্যাপ্লিকেশনের বাগও ভাঙতে পারে না।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. User Management: Hosts, Authentication & Roles', bn: '৬. ইউজার ম্যানেজমেন্ট: হোস্ট, অথেনটিকেশন ও রোল' } },
    {
      type: 'para',
      text: {
        en: 'In MySQL, a user account identity is defined by a username and host pattern combination: \'app\'@\'localhost\' and \'app\'@\'10.0.%\' represent two distinct accounts with independent privileges. Modern MySQL 8 authenticates using the secure caching_sha2_password plugin. Roles allow administrators to group privileges and assign them to multiple human users simultaneously.',
        bn: 'MySQL-এ ব্যবহারকারীর পরিচয় ইউজারনেম এবং হোস্টের ঠিকানার সমন্বয়ে তৈরি হয়: \'app\'@\'localhost\' এবং \'app\'@\'10.0.%\' সম্পূর্ণ ভিন্ন ২টি অ্যাকাউন্ট যাদের আলাদা পারমিশন থাকে। MySQL ৮ সংস্করণে নিরাপদ caching_sha2_password প্লাগইন দিয়ে পাসওয়ার্ড হ্যাশ করা হয়। রোলের মাধ্যমে একসাথে অনেক ইউজারের জন্য পারমিশনের গ্রুপ তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create a service account restricted to internal private network subnet:
CREATE USER 'billing_app'@'10.0.1.%'
  IDENTIFIED WITH caching_sha2_password BY 'StrongSecretKey2026!';

-- Create and configure a reporting role:
CREATE ROLE 'analytics_reader';
GRANT SELECT ON shop.* TO 'analytics_reader';

-- Assign role to analyst accounts:
GRANT 'analytics_reader' TO 'billing_app'@'10.0.1.%';
SET DEFAULT ROLE 'analytics_reader' TO 'billing_app'@'10.0.1.%';`,
      caption: {
        en: 'Host scoping limits attack vectors by restricting accounts strictly to private subnets.',
        bn: 'হোস্ট নির্ধারণ করে দিলে নির্দিষ্ট প্রাইভেট সাবনেট ছাড়া অন্য কোথাও থেকে লগইন করা যায় না।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Granular Privileges: GRANT, REVOKE and SHOW GRANTS', bn: '৭. পারমিশন নিয়ন্ত্রণ: GRANT, REVOKE ও SHOW GRANTS' } },
    {
      type: 'para',
      text: {
        en: 'Security dictates adhering strictly to the principle of least privilege. Backend microservices should never connect as root or hold DROP TABLE permissions. The GRANT command delegates specific statement permissions on specific databases or tables, while REVOKE strips access rights. You can inspect effective privileges using SHOW GRANTS.',
        bn: 'তথ্য নিরাপত্তায় সর্বনিম্ন অধিকারের (least privilege) নীতি মেনে চলা অত্যন্ত জরুরি। ব্যাকএন্ড অ্যাপ্লিকেশনের কখনো রুট ব্যবহার করা বা টেবিল মোছার পারমিশন রাখা উচিত নয়। GRANT কমান্ড নির্দিষ্ট ডাটাবেসের ওপর নির্দিষ্ট কাজের অধিকার দেয়, আর REVOKE অধিকার কেড়ে নেয়। SHOW GRANTS দিয়ে বর্তমান অধিকারগুলো পরীক্ষা করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Grant specific CRUD permissions on the shop database:
GRANT SELECT, INSERT, UPDATE ON shop.* TO 'billing_app'@'10.0.1.%';

-- Explicitly revoke destructive privileges:
REVOKE DELETE, DROP ON shop.* FROM 'billing_app'@'10.0.1.%';

-- Inspect active granted capabilities:
SHOW GRANTS FOR 'billing_app'@'10.0.1.%';
-- Output:
-- GRANT USAGE ON *.* TO \`billing_app\`@\`10.0.1.%\`
-- GRANT SELECT, INSERT, UPDATE ON \`shop\`.* TO \`billing_app\`@\`10.0.1.%\``,
      caption: {
        en: 'Restricting DELETE and DROP safeguards production tables against accidental application wipes.',
        bn: 'DELETE ও DROP নিষিদ্ধ রাখলে কোনো ভুলের কারণেও প্রোডাকশন টেবিল মুছে যাওয়ার ঝুঁকি থাকে না।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Logical Backups: Zero-Downtime mysqldump', bn: '৮. লজিক্যাল ব্যাকআপ: জিরো-ডাউনটাইম mysqldump' } },
    {
      type: 'para',
      text: {
        en: 'The standard utility for logical database backups is mysqldump. On transactional InnoDB storage engines, passing the --single-transaction flag creates a consistent snapshot without locking tables or interrupting concurrent read/write traffic. Backups should also include stored procedures (--routines) and triggers (--triggers).',
        bn: 'লজিক্যাল ব্যাকআপের জন্য প্রমিত টুল হলো mysqldump। ট্রানজ্যাকশনাল InnoDB ইঞ্জিনে --single-transaction ফ্ল্যাগ দিলে টেবিল লক না করেই এবং কোনো রিড/রাইট বন্ধ না করেই একটি নিখুঁত ব্যাকআপ নেওয়া যায়। ব্যাকআপে প্রসিডিউর ও ট্রিগার অন্তর্ভুক্ত করতে --routines ও --triggers ব্যবহার করা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Execute zero-downtime consistent logical backup of shop database:
mysqldump -h 127.0.0.1 -u root -p \\
  --single-transaction \\
  --quick \\
  --routines \\
  --triggers \\
  --default-character-set=utf8mb4 \\
  shop > shop_backup_2026.sql

# Restore backup file into target MySQL server:
mysql -h 127.0.0.1 -u root -p shop < shop_backup_2026.sql
# Result: Tables, routines, and rows restored cleanly!`,
      caption: {
        en: '--single-transaction leverages MVCC snapshots, allowing online backups while writes proceed.',
        bn: '--single-transaction MVCC ব্যবহার করে সার্ভার চালু রেখেই ব্যাকআপ সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: Logical vs Physical Backups', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: লজিক্যাল বনাম ফিজিক্যাল ব্যাকআপ' } },
    {
      type: 'para',
      text: {
        en: 'Choosing a backup strategy depends on data size and recovery time objectives (RTO). Logical dumps (mysqldump) emit portable human-readable SQL statements ideal for smaller databases (<100 GB) and cross-version migrations. Physical backups (Percona XtraBackup) copy binary disk pages directly, enabling rapid multi-terabyte restores without SQL parsing overhead.',
        bn: 'ব্যাকআপের ধরন নির্বাচন ডাটাবেসের সাইজ এবং পুনরুদ্ধারের সময়ের ওপর নির্ভর করে। লজিক্যাল ব্যাকআপ (mysqldump) পঠনযোগ্য এসকিউএল তৈরি করে যা ছোট ডাটাবেসের (<১০০ জিবি) জন্য আদর্শ। আর ফিজিক্যাল ব্যাকআপ (Percona XtraBackup) সরাসরি ডিস্কের বাইনারি পেজ কপি করে, যা টেরাবাইট আকারের বিশাল ডাটাবেস মুহূর্তের মধ্যে রিস্টোর করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MYSQL BACKUP STRATEGY MATRIX:
+---------------------+-------------------+------------------------------------+
| Dimension           | mysqldump (Logical)| Percona XtraBackup (Physical)      |
+---------------------+-------------------+------------------------------------+
| Backup Format       | Plaintext SQL DDL | Raw InnoDB .ibd pages & Redo Logs  |
| Portability         | Cross-version/OS  | Strict MySQL major version match   |
| Backup Speed        | Moderate (Selects)| High (Raw Disk Block Copy)         |
| Restore Speed       | Slow (Replays SQL)| Instantaneous (Filesystem copy)    |
| Recommended Limit   | Databases < 100 GB| Databases 100 GB - 50+ Terabytes   |
+---------------------+-------------------+------------------------------------+`,
      caption: {
        en: 'Large enterprise databases rely on physical block copies to achieve acceptable recovery times.',
        bn: 'বিশাল এন্টারপ্রাইজ সিস্টেমে দ্রুত রিস্টোর নিশ্চিত করতে ফিজিক্যাল ব্লক কপি ব্যবহৃত হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Calling Stored Procedures in Node.js', bn: '১০. Node.js-এ স্টোর্ড প্রসিডিউর কল করা' } },
    {
      type: 'para',
      text: {
        en: 'Here is a Node.js script using mysql2/promise to execute a stored procedure with input and output parameters, demonstrating procedural result unwrapping.',
        bn: 'নিচে mysql2/promise ব্যবহার করে ইনপুট ও আউটপুট প্যারামিটারসহ স্টোর্ড প্রসিডিউর কল করা এবং ফলাফল সংগ্রহের একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "production_password",
  database: "shop"
});

async function runPaymentProcedure(orderId, amount) {
  // Call procedure setting session variable for the OUT parameter:
  await connection.query("CALL process_order_payment(?, ?, @status);", [orderId, amount]);
  
  // Read back OUT parameter value:
  const [rows] = await connection.query("SELECT @status AS paymentStatus;");
  console.log("Procedure Result Status:", rows[0].paymentStatus);
  return rows[0].paymentStatus;
}

const status = await runPaymentProcedure(1042, 150.00);
console.log("Stored procedure execution completed successfully");
// Output: Stored procedure execution completed successfully`,
      caption: {
        en: 'mysql2 executes stored procedures cleanly, reading back session OUT variables in sequence.',
        bn: 'mysql2 সহজে প্রসিডিউর কল করে এবং সেশন ভেরিয়েবল থেকে আউটপুট সংগ্রহ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'msq-ops-ex1',
      kind: 'predict',
      topic: 'mysql: view query fold algorithm',
      question: {
        en: 'Which MySQL view algorithm seamlessly merges view text directly into the caller query, preserving index access (MERGE vs TEMPTABLE)?',
        bn: 'কোন MySQL ভিউ অ্যালগরিদম ভিউটির টেক্সটকে বাইরের কোয়েরির সাথে একীভূত করে ইনডেক্স ব্যবহারের সুবিধা অক্ষত রাখে (MERGE নাকি TEMPTABLE)?'
      },
      code: `/* View optimization algorithm: */
/* ALGORITHM = _____ */`,
      answer: 'MERGE',
      accept: ['MERGE', 'merge'],
      hint: {
        en: 'MERGE algorithm.',
        bn: 'MERGE অ্যালগরিদম।'
      },
      explanation: {
        en: 'ALGORITHM = MERGE combines view predicates into the outer query, enabling index seeks on base tables.',
        bn: 'MERGE অ্যালগরিদম ভিউয়ের শর্ত মূল কোয়েরিতে যুক্ত করে ইনডেক্স স্ক্যান অব্যাহত রাখে।'
      }
    },
    {
      id: 'msq-ops-ex2',
      kind: 'mcq',
      topic: 'mysql: mysqldump zero-downtime flag',
      question: {
        en: 'Which flag must be supplied to mysqldump to guarantee a consistent backup of InnoDB tables without locking active writes?',
        bn: 'চলমান কোনো রাইট অপারেশন লক না করেই InnoDB টেবিলের সামঞ্জস্যপূর্ণ ব্যাকআপ নিতে mysqldump-এ কোন ফ্ল্যাগটি দিতে হয়?'
      },
      options: [
        { en: '--single-transaction', bn: '--single-transaction' },
        { en: '--lock-all-tables', bn: '--lock-all-tables' },
        { en: '--flush-logs', bn: '--flush-logs' },
        { en: '--no-data', bn: '--no-data' }
      ],
      answer: 0,
      hint: {
        en: '--single-transaction flag.',
        bn: '--single-transaction ফ্ল্যাগ।'
      },
      explanation: {
        en: '--single-transaction creates an isolated repeatable read snapshot, allowing online backups while writes proceed.',
        bn: '--single-transaction একটি আইসোলেটেড স্ন্যাপশট তৈরি করে ব্যাকআপ নেয়, ফলে কোনো ডাউনটাইম লাগে না।'
      }
    },
    {
      id: 'msq-ops-ex3',
      kind: 'mcq',
      topic: 'mysql: trigger row abort sqlstate code',
      question: {
        en: 'Which generic custom user exception SQLSTATE code is passed to SIGNAL inside a trigger to abort a transaction?',
        bn: 'কোনো ভুল ইনসার্ট প্রতিহত করে ট্রানজ্যাকশন বাতিল করতে ট্রিগারের ভেতর SIGNAL কমান্ডের সাথে কোন জেনেরিক SQLSTATE কোডটি ব্যবহার করা হয়?'
      },
      options: [
        { en: '45000', bn: '৪৫০০০' },
        { en: '00000', bn: '০০০০০' },
        { en: '20000', bn: '২০০০০' },
        { en: '99999', bn: '৯৯৯৯৯' }
      ],
      answer: 0,
      hint: {
        en: 'SQLSTATE 45000 (unhandled user exception).',
        bn: 'SQLSTATE ৪৫০০০ (ইউজার এক্সেপশন)।'
      },
      explanation: {
        en: 'SQLSTATE 45000 is the standard ANSI SQL code reserved for user-defined unhandled exceptions in triggers and routines.',
        bn: 'SQLSTATE ৪৫০০০ হলো কাস্টম ইউজার এক্সেপশন পাঠানোর জন্য নির্ধারিত সার্বজনীন স্ট্যান্ডার্ড কোড।'
      }
    }
  ],
  quiz: {
    id: 'msq-ops-quiz',
    title: { en: 'MySQL Views, Routines & Operations Quiz', bn: 'MySQL ভিউ, রুটিন ও অপারেশনস কুইজ' },
    questions: [
      {
        id: 'mopsq1',
        kind: 'mcq',
        topic: 'mysql: with check option enforcement',
        question: {
          en: 'What is the operational consequence of adding "WITH CHECK OPTION" to an updatable MySQL view?',
          bn: 'একটি আপডেটযোগ্য MySQL ভিউতে "WITH CHECK OPTION" যোগ করলে কোন নিরাপত্তা নিয়মটি কার্যকর হয়?'
        },
        options: [
          { en: 'It rejects any INSERT or UPDATE through the view that would produce a row not visible under the view WHERE clause', bn: 'এটি ভিউটির মাধ্যমে এমন কোনো ইনসার্ট বা আপডেট প্রতিহত করে যা ভিউটির WHERE শর্তের সাথে সাংঘর্ষিক' },
          { en: 'It encrypts the view definition with a password', bn: 'পাসওয়ার্ড দিয়ে ভিউ এনক্রিপ্ট করে' },
          { en: 'It turns the view into a physical hard disk table', bn: 'ভিউকে হার্ডডিস্ক টেবিলে রূপান্তর করে' },
          { en: 'It prevents all users from reading the view', bn: 'ভিউ পড়া বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents updates violating the WHERE clause.',
          bn: 'WHERE শর্ত লঙ্ঘনকারী আপডেট প্রতিহত করে।'
        },
        explanation: {
          en: 'WITH CHECK OPTION ensures that clients cannot use the view as a back-door to insert rows that violate the view definition.',
          bn: 'WITH CHECK OPTION নিশ্চিত করে কোনো ইউজার যেন ভিউয়ের বাইরে চলে যাবে এমন ডেটা ইনসার্ট করতে না পারে।'
        }
      },
      {
        id: 'mopsq2',
        kind: 'mcq',
        topic: 'mysql: stored function vs procedure distinction',
        question: {
          en: 'What fundamental capability separates a Stored Function from a Stored Procedure in MySQL?',
          bn: 'MySQL-এ স্টোর্ড ফাংশন এবং স্টোর্ড প্রসিডিউরের মধ্যে মূল পার্থক্য কোনটি?'
        },
        options: [
          { en: 'A function returns a single scalar value and can be called directly inside SELECT statements, while a procedure is called via CALL', bn: 'ফাংশন একটিমাত্র মান রিটার্ন করে সরাসরি SELECT স্টেটমেন্টে ব্যবহার করা যায়, আর প্রসিডিউর CALL দিয়ে চালাতে হয়' },
          { en: 'Procedures can only be written in Python', bn: 'প্রসিডিউর কেবল পাইথনে লেখা যায়' },
          { en: 'Functions do not occupy RAM', bn: 'ফাংশন কোনো র‍্যাম ব্যবহার করে না' },
          { en: 'Procedures cannot update database rows', bn: 'প্রসিডিউর টেবিল আপডেট করতে পারে না' }
        ],
        answer: 0,
        hint: {
          en: 'Functions return scalar values and embed in SELECT.',
          bn: 'ফাংশন স্কেলার মান রিটার্ন করে SELECT-এ ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Functions are scalar expressions usable in SQL queries; procedures are autonomous subroutines executed via CALL.',
          bn: 'ফাংশন কুয়েরির ভেতর সরাসরি মান বের করে, আর প্রসিডিউর আলাদা প্রোগ্রাম হিসেবে CALL দিয়ে চালাতে হয়।'
        }
      },
      {
        id: 'mopsq3',
        kind: 'mcq',
        topic: 'mysql: host scoping security value',
        question: {
          en: 'Why does MySQL separate user permissions by host pattern (such as \'app\'@\'10.0.1.%\' versus \'app\'@\'%\')?',
          bn: 'MySQL কেন হোস্ট প্যাটার্ন অনুযায়ী আলাদা ইউজার পারমিশন নির্ধারণের সুযোগ দেয়?'
        },
        options: [
          { en: 'It limits the network origins authorized to authenticate, preventing stolen credentials from connecting from arbitrary public internet IPs', bn: 'এটি অনুমোদিত নেটওয়ার্ক আইপি সীমাবদ্ধ করে, ফলে পাসওয়ার্ড চুরি হলেও ইন্টারনেটের বাইরে থেকে কেউ লগইন করতে পারে না' },
          { en: 'Because IP addresses make database queries faster', bn: 'আইপি দিলে কুয়েরি দ্রুত চলে' },
          { en: 'Because MySQL cannot understand domain names', bn: 'ডোমেন নাম বুঝতে পারে না' },
          { en: 'It is a deprecated feature', bn: 'এটি অপ্রয়োজনীয় ফিচার' }
        ],
        answer: 0,
        hint: {
          en: 'Restricts valid network login origins.',
          bn: 'লগইনের বৈধ আইপি সীমাবদ্ধ করে।'
        },
        explanation: {
          en: 'Host scoping binds accounts to trusted subnets, blocking credential reuse from unapproved external networks.',
          bn: 'হোস্ট স্পেসিফিকেশন অ্যাকাউন্টকে নির্দিষ্ট নেটওয়ার্কে বেঁধে ফেলে আক্রমণকারীর প্রবেশ ঠেকায়।'
        }
      },
      {
        id: 'mopsq4',
        kind: 'mcq',
        topic: 'mysql: physical versus logical backup advantage',
        question: {
          en: 'What is the primary advantage of a physical backup tool (like Percona XtraBackup) over mysqldump on multi-terabyte databases?',
          bn: 'টেরাবাইট আকারের বিশাল ডাটাবেসে mysqldump-এর তুলনায় ফিজিক্যাল ব্যাকআপ টুলের (যেমন XtraBackup) প্রধান সুবিধা কোনটি?'
        },
        options: [
          { en: 'Physical backups copy raw disk blocks directly, providing near-instantaneous restoration without executing billions of SQL statements', bn: 'ফিজিক্যাল ব্যাকআপ সরাসরি ডিস্ক ব্লক কপি করে, ফলে কোটি কোটি এসকিউএল লাইন না চালিয়ে মুহূর্তের মধ্যে রিস্টোর করা যায়' },
          { en: 'Physical backups use zero bytes of disk space', bn: 'ডিস্কে কোনো জায়গা নেয় না' },
          { en: 'Physical backups do not require MySQL to be installed', bn: 'MySQL ইনস্টল থাকা লাগে না' },
          { en: 'Physical backups can be read using Notepad', bn: 'নোটপ্যাড দিয়ে পড়া যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Copies raw blocks for near-instant restores.',
          bn: 'দ্রুত রিস্টোরের জন্য সরাসরি ব্লক কপি করে।'
        },
        explanation: {
          en: 'Replaying text SQL across terabytes takes days. Physical backups restore directly at the speed of the disk subsystem.',
          bn: 'বিশাল ডাটাবেসে এসকিউএল চালিয়ে রিস্টোর করা অসম্ভব সময়সাপেক্ষ; ফিজিক্যাল ব্লক কপি সরাসরি ড্রাইভের গতিতে রিস্টোর হয়।'
        }
      }
    ]
  }
};
