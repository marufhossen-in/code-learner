import type { LText } from '../../lib/types';

/** Pure mini query engine (Section 11): SELECT parsing → planning → execution with row counters. */

export interface UserRow {
  id: number;
  name: string;
  city: string;
  age: number;
}

export const COLUMNS = ['id', 'name', 'city', 'age'] as const;
export type Column = (typeof COLUMNS)[number];

const NAMES = ['Rafi', 'Mitu', 'Joya', 'Sabbir', 'Nusrat', 'Tanvir', 'Ayesha', 'Imran', 'Priya', 'Hasan', 'Luna', 'Arif', 'Diba', 'Rakib', 'Sima', 'Fahim', 'Tara', 'Nabil', 'Ritu', 'Sadman'];
export const CITIES = ['Dhaka', 'Chattogram', 'Khulna', 'Rajshahi', 'Sylhet'];

/** Deterministic 100-row table (seeded, stable across reloads — tests depend on it). */
export function makeUsers(): UserRow[] {
  const rows: UserRow[] = [];
  for (let id = 1; id <= 100; id++) {
    rows.push({
      id,
      name:`${NAMES[(id * 13) % NAMES.length]} ${id}`,
      city: CITIES[(id * 7 + Math.floor(id / 20)) % CITIES.length],
      age: 18 + ((id * 37) % 43),
    });
  }
  return rows;
}

/* ------------------------------------------------------------------ */
/* Parser                                                              */
/* ------------------------------------------------------------------ */

export interface ParsedQuery {
  cols: '*' | string[];
  table: 'users';
  where?: { col: Column; op: '=' | '!=' | '>' | '<' | '>=' | '<='; val: string | number };
  orderBy?: { col: Column; dir: 'asc' | 'desc' };
  limit?: number;
}

type ParseResult = { ok: true; query: ParsedQuery } | { ok: false; error: LText };

function parseVal(raw: string): string | number | null {
  if (!raw) return null;
  if (/^'.*'$/.test(raw) || /^".*"$/.test(raw)) return raw.slice(1, -1);
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

export function parseSelect(sql: string): ParseResult {
  const cleaned = sql.trim().replace(/;$/, '');
  if (!cleaned) return { ok: false, error: { en: 'Empty query.', bn: 'খালি কুয়েরি।' } };
  const re =
    /^select\s+(.+?)\s+from\s+users(?:\s+where\s+(\w+)\s*(=|!=|>=|<=|>|<)\s*(('[^']*')|("[^"]*")|(\S+)))?(?:\s+order\s+by\s+(\w+)(?:\s+(asc|desc))?)?(?:\s+limit\s+(\d+))?$/i;
  const m = cleaned.match(re);
  if (!/^select\s/i.test(cleaned)) {
    return { ok: false, error: { en: 'Only SELECT is supported here — this lab is read-only.', bn: 'এখানে শুধু SELECT চলে — এই ল্যাবটি শুধু-পঠনীয়।' } };
  }
  if (!m || !m[1]) {
    return {
      ok: false,
      error: {
        en: 'Could not parse. Shape: SELECT * FROM users [WHERE col = value] [ORDER BY col] [LIMIT n]',
        bn: 'পার্স করা গেল না। গঠন: SELECT * FROM users [WHERE col = value] [ORDER BY col] [LIMIT n]',
      },
    };
  }
  const q: ParsedQuery = { cols: '*', table: 'users' };
  const colspec = m[1].trim();
  if (colspec !== '*') {
    const cols = colspec.split(',').map((c) => c.trim());
    const bad = cols.find((c) => !COLUMNS.includes(c as Column));
    if (bad) {
      return { ok: false, error: { en: `Unknown column "${bad}". Try: ${COLUMNS.join(', ')}`, bn: `অজানা কলাম "${bad}"। চেষ্টা করুন: ${COLUMNS.join(', ')}` } };
    }
    q.cols = cols;
  }
  if (m[2]) {
    const col = m[2].toLowerCase();
    if (!COLUMNS.includes(col as Column)) {
      return { ok: false, error: { en: `Unknown column in WHERE: "${col}"`, bn: `WHERE-এ অজানা কলাম: "${col}"` } };
    }
    const val = parseVal(m[4] ?? '');
    if (val === null) {
      return { ok: false, error: { en: 'WHERE value must be a number or a quoted string.', bn: 'WHERE মানটি সংখ্যা বা উদ্ধৃত স্ট্রিং হতে হবে।' } };
    }
    q.where = { col: col as Column, op: m[3].toLowerCase() as '=' | '!=' | '>' | '<' | '>=' | '<=', val };
  }
  if (m[8]) {
    const col = m[8].toLowerCase();
    if (!COLUMNS.includes(col as Column)) {
      return { ok: false, error: { en: `Unknown column in ORDER BY: "${col}"`, bn: `ORDER BY-তে অজানা কলাম: "${col}"` } };
    }
    q.orderBy = { col: col as Column, dir: (m[9]?.toLowerCase() as 'asc' | 'desc') ?? 'asc' };
  }
  if (m[10]) q.limit = Number(m[10]);
  return { ok: true, query: q };
}

/* ------------------------------------------------------------------ */
/* Planner                                                             */
/* ------------------------------------------------------------------ */

export interface Plan {
  op: 'SEQ SCAN' | 'INDEX SCAN';
  index?: string;
  explain: { text: string; note?: LText }[];
}

/** The planner's one big decision: is there an index on the WHERE column? */
export function planQuery(q: ParsedQuery, indexes: string[]): Plan {
  const explain: Plan['explain'] = [{ text: `QUERY: SELECT ${q.cols === '*' ? '*' : q.cols.join(', ')} FROM users…` }];
  if (q.where && indexes.includes(q.where.col)) {
    explain.push({
      text: `INDEX SCAN USING idx_${q.where.col}`,
      note: {
        en: 'The planner found a B-tree index — it can JUMP to matching rows instead of reading everything.',
        bn: 'প্ল্যানার B-tree ইনডেক্স পেয়েছে — সব পড়ার বদলে ম্যাচ করা রো-তে সরাসরি লাফাতে পারবে।',
      },
    });
    return { op: 'INDEX SCAN', index: `idx_${q.where.col}`, explain };
  }
  if (q.where) {
    explain.push({
      text: `SEQ SCAN (filter: ${q.where.col} ${q.where.op} …)`,
      note: {
        en: `No index on ${q.where.col} — the only option is reading every single row and testing it.`,
        bn: `${q.where.col}-এ ইনডেক্স নেই — একমাত্র পথ: প্রতিটি রো পড়ে পরীক্ষা করা।`,
      },
    });
  } else {
    explain.push({ text: 'SEQ SCAN (no filter)' });
  }
  if (q.orderBy) explain.push({ text: `SORT (${q.orderBy.col} ${q.orderBy.dir.toUpperCase()})` });
  if (q.limit !== undefined) explain.push({ text: `LIMIT ${q.limit}` });
  return { op: 'SEQ SCAN', explain };
}

/* ------------------------------------------------------------------ */
/* Executor — generates animation steps                                */
/* ------------------------------------------------------------------ */

export interface ExecStep {
  kind: 'plan' | 'scan' | 'index-walk' | 'index-read' | 'sort' | 'limit' | 'done';
  note: LText;
  examined: number; // cumulative rows examined after this step
  matched: number; // cumulative rows matched after this step
  pagesRead: number; // cumulative disk pages read
  rows: number[]; // row ids involved in THIS step (for highlighting)
}

export interface ExecResult {
  steps: ExecStep[];
  result: UserRow[];
  rowsExamined: number;
  rowsMatched: number;
  pagesRead: number;
  plan: Plan;
}

const PAGE = 8; // rows per page

function matches(q: ParsedQuery, r: UserRow): boolean {
  if (!q.where) return true;
  const { col, op, val } = q.where;
  const lhs = r[col];
  const cmp = typeof lhs === 'number' && typeof val === 'number' ? lhs - val : String(lhs).localeCompare(String(val));
  switch (op) {
    case '=': return cmp === 0;
    case '!=': return cmp !== 0;
    case '>': return cmp > 0;
    case '<': return cmp < 0;
    case '>=': return cmp >= 0;
    case '<=': return cmp <= 0;
    default: return false;
  }
}

function cmpRows(col: Column, dir: 'asc' | 'desc') {
  const f = dir === 'asc' ? 1 : -1;
  return (a: UserRow, b: UserRow) => {
    const x = a[col];
    const y = b[col];
    const c = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y));
    return c * f;
  };
}

export function executeQuery(q: ParsedQuery, rows: UserRow[], indexes: string[]): ExecResult {
  const plan = planQuery(q, indexes);
  const steps: ExecStep[] = [
    { kind: 'plan', note: { en: `Plan chosen: ${plan.op}`, bn: `প্ল্যান বাছাই হয়েছে: ${plan.op}` }, examined: 0, matched: 0, pagesRead: 0, rows: [] },
  ];

  let examined = 0;
  let pagesRead = 0;
  let matchedRows: UserRow[] = [];

  if (plan.op === 'INDEX SCAN' && q.where) {
    // B-tree walk: root → internal → leaf (3 page reads)
    pagesRead = 3;
    steps.push({
      kind: 'index-walk', examined: 0, matched: 0, pagesRead,
      note: {
        en: `INDEX WALK: root page → internal page → leaf page (3 page reads, no table touched yet)`,
        bn: `ইনডেক্স ওয়াক: রুট পেজ → অভ্যন্তরীণ পেজ → লিফ পেজ (৩টি পেজ পঠন — টেবিল এখনো ছোঁয়া হয়নি)`,
      },
      rows: [],
    });
    matchedRows = rows.filter((r) => matches(q, r));
    examined = matchedRows.length;
    steps.push({
      kind: 'index-read', examined, matched: matchedRows.length, pagesRead,
      note: {
        en: `Leaf entries point at ${matchedRows.length} row(s) — fetch exactly those, skip the other ${100 - matchedRows.length}.`,
        bn: `লিফ এন্ট্রি ${matchedRows.length}টি রো দেখাচ্ছে — ঠিক সেগুলোই আনা হলো, বাকি ${100 - matchedRows.length}টি বাদ।`,
      },
      rows: matchedRows.map((r) => r.id),
    });
  } else {
    // Full sequential scan in pages, with LIMIT early exit
    for (let i = 0; i < rows.length; i += PAGE) {
      const chunk = rows.slice(i, i + PAGE);
      pagesRead += 1;
      const hits = chunk.filter((r) => matches(q, r));
      examined += chunk.length;
      matchedRows = matchedRows.concat(hits);
      const doneEarly = q.limit !== undefined && matchedRows.length >= q.limit;
      steps.push({
        kind: 'scan', examined, matched: matchedRows.length, pagesRead,
        note: {
          en: `Read page ${Math.floor(i / PAGE) + 1} (rows ${chunk[0].id}–${chunk[chunk.length - 1].id}) — ${hits.length} match(es)${doneEarly ? '; LIMIT reached!' : ''}`,
          bn: `পেজ ${Math.floor(i / PAGE) + 1} পড়া হলো (রো ${chunk[0].id}–${chunk[chunk.length - 1].id}) — ${hits.length}টি ম্যাচ${doneEarly ? '; LIMIT পূরণ!' : ''}`,
        },
        rows: chunk.map((r) => r.id),
      });
      if (doneEarly) {
        steps.push({
          kind: 'limit', examined, matched: matchedRows.length, pagesRead,
          note: {
            en: `STOP: already have ${q.limit} rows — the remaining ${100 - examined} rows are never even read.`,
            bn: `থামো: ${q.limit}টি রো পাওয়া গেছে — বাকি ${100 - examined}টি রো আর পড়াই হলো না।`,
          },
          rows: [],
        });
        break;
      }
    }
  }

  if (q.orderBy) {
    matchedRows = [...matchedRows].sort(cmpRows(q.orderBy.col, q.orderBy.dir));
    steps.push({
      kind: 'sort', examined, matched: matchedRows.length, pagesRead,
      note: {
        en: `SORT: ${matchedRows.length} row(s) reordered in memory by ${q.orderBy.col} (${q.orderBy.dir}).`,
        bn: `SORT: ${matchedRows.length}টি রো মেমরিতে ${q.orderBy.col} অনুযায়ী (${q.orderBy.dir}) সাজানো হলো।`,
      },
      rows: [],
    });
  }
  if (q.limit !== undefined && matchedRows.length > q.limit) {
    matchedRows = matchedRows.slice(0, q.limit);
  }
  const project = (rs: UserRow[]): UserRow[] =>
    q.cols === '*' ? rs : rs.map((r) => {
      const out = { id: r.id, name: '', city: '', age: 0 };
      for (const c of q.cols as Column[]) (out as unknown as Record<string, string | number>)[c] = r[c];
      return out;
    });

  const result = project(matchedRows);
  steps.push({
    kind: 'done', examined, matched: matchedRows.length, pagesRead,
    note: {
      en: `DONE: returned ${result.length} row(s) after examining ${examined} of 100.`,
      bn: `শেষ: ১০০টির মধ্যে ${examined}টি পরীক্ষা করে ${result.length}টি রো ফেরত।`,
    },
    rows: result.map((r) => r.id).filter(Boolean),
  });
  return { steps, result, rowsExamined: examined, rowsMatched: matchedRows.length, pagesRead, plan };
}

export const DB_PRESETS = [
  "SELECT * FROM users WHERE id = 42;",
  "SELECT * FROM users WHERE city = 'Dhaka';",
  "SELECT * FROM users WHERE age >= 40 ORDER BY age DESC LIMIT 5;",
  "SELECT name, city FROM users WHERE city != 'Dhaka' LIMIT 10;",
  "SELECT * FROM users ORDER BY age LIMIT 3;",
];
