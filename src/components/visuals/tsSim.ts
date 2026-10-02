import type { LText } from '../../lib/types';

/**
 * Type-belief simulator (Section 11 — TypeScript lab).
 * Not a parser: a curated flow model. Each scenario is a linear path of steps;
 * guard steps SPLIT the world into true/false branches (both beliefs are shown),
 * then the path continues through the true branch — exactly how a reader traces
 * narrowing without a compiler.
 */

export type GuardKind = 'typeof' | 'truthy' | 'equals' | 'isArray';

export interface DeclareAction { kind: 'declare'; var: string; declared?: string; valueType: string; note?: LText }
export interface AssignAction { kind: 'assign'; var: string; valueType: string; note?: LText }
export interface GuardAction { kind: 'guard'; var: string; guard: GuardKind; arg?: string; note?: LText }
export interface ErrorAction { kind: 'error-check'; var: string; note: LText }
export type Action = DeclareAction | AssignAction | GuardAction | ErrorAction;

export interface TsStep { line: number; action: Action }
export interface TsScenario {
  id: string;
  title: LText;
  code: string[];
  steps: TsStep[];
  intro: LText;
}

export interface BranchBelief { type: string; members: string[] }
export interface StepView {
  line: number;
  beliefs: Record<string, string>;
  branch?: { trueBranch: BranchBelief; falseBranch: BranchBelief; var: string };
  isError?: boolean;
  note?: LText;
}

/** Map a union member to its typeof category. */
export function categoryOf(member: string): string {
  if (member === 'null') return 'null';
  if (member === 'undefined') return 'undefined';
  if (member.endsWith('[]')) return 'array';
  if (member.startsWith('{')) return 'object';
  if (member === 'string' || member === 'number' || member === 'boolean') return member;
  if (member.startsWith('"')) return 'string'; // string literal
  return 'object';
}

export function parseUnion(type: string): string[] {
  return type.split('|').map((s) => s.trim()).filter(Boolean);
}

export function displayType(members: string[]): string {
  if (members.length === 0) return 'never';
  return members.join(' | ');
}

/** typeof x === T : true keeps members of that category, false removes them. */
export function narrowTypeof(members: string[], typeName: string, truthy: boolean): string[] {
  const match = members.filter((m) => categoryOf(m) === typeName);
  return truthy ? match : members.filter((m) => !match.includes(m));
}

/** if (x) : true-branch removes null/undefined; false-branch keeps only those. */
export function narrowTruthiness(members: string[], truthy: boolean): string[] {
  const falsy: string[] = members.filter((m) => m === 'null' || m === 'undefined');
  return truthy ? members.filter((m) => !falsy.includes(m)) : falsy;
}

/** x === 'literal' : true keeps the literal, false removes it. */
export function narrowEquality(members: string[], literal: string, equal: boolean): string[] {
  return equal ? members.filter((m) => m === literal) : members.filter((m) => m !== literal);
}

/** Array.isArray(x) : true keeps array members, false removes them. */
export function narrowIsArray(members: string[], truthy: boolean): string[] {
  const arr = members.filter((m) => categoryOf(m) === 'array');
  return truthy ? arr : members.filter((m) => !arr.includes(m));
}

export function applyGuard(members: string[], guard: GuardKind, arg: string | undefined, truthy: boolean): string[] {
  if (guard === 'typeof') return narrowTypeof(members, arg ?? 'string', truthy);
  if (guard === 'truthy') return narrowTruthiness(members, truthy);
  if (guard === 'equals') return narrowEquality(members, arg ?? '', truthy);
  return narrowIsArray(members, truthy);
}

function snapshot(beliefs: Record<string, string[]>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(beliefs)) out[k] = displayType(v);
  return out;
}

/** Compute the step-by-step belief timeline for a scenario. */
export function simulate(scenario: TsScenario): StepView[] {
  const beliefs: Record<string, string[]> = {};
  const views: StepView[] = [];
  for (const step of scenario.steps) {
    const a = step.action;
    if (a.kind === 'declare') {
      beliefs[a.var] = parseUnion(a.declared ?? a.valueType);
      views.push({ line: step.line, beliefs: snapshot(beliefs), note: a.note });
    } else if (a.kind === 'assign') {
      beliefs[a.var] = parseUnion(a.valueType);
      views.push({ line: step.line, beliefs: snapshot(beliefs), note: a.note });
    } else if (a.kind === 'guard') {
      const current = beliefs[a.var] ?? ['unknown'];
      const t = applyGuard(current, a.guard, a.arg, true);
      const f = applyGuard(current, a.guard, a.arg, false);
      if (t.length > 0) beliefs[a.var] = t; // path continues down the TRUE branch
      views.push({
        line: step.line,
        beliefs: snapshot(beliefs),
        branch: { trueBranch: { type: displayType(t), members: t }, falseBranch: { type: displayType(f), members: f }, var: a.var },
        note: a.note,
      });
    } else {
      views.push({ line: step.line, beliefs: snapshot(beliefs), isError: true, note: a.note });
    }
  }
  return views;
}

/** The curated walkthroughs. */
export const TS_SCENARIOS: TsScenario[] = [
  {
    id: 'inference-basics',
    title: { en: 'let vs const: what TS infers', bn: 'let বনাম const: TS কী অনুমান করে' },
    code: [
      'let count = 0;',
      "const name = 'CodeShikhon';",
      'count = 42;',
      "count = 'hello';  // ✗",
      'let user: string | number = 7;',
      "user = 'seven';",
    ],
    steps: [
      {
        line: 1,
        action: {
          kind: 'declare', var: 'count', valueType: 'number',
          note: { en: 'let widens: the value is 0, but the BELIEF is number — let must allow later numbers.', bn: 'let প্রসারিত করে: মান ০, কিন্তু বিশ্বাস হলো number — পরবর্তী number-এর জায়গা রাখতেই হবে।' },
        },
      },
      {
        line: 2,
        action: {
          kind: 'declare', var: 'name', valueType: '"CodeShikhon"',
          note: { en: 'const narrows to the exact literal: it can never change, so the type is the value.', bn: 'const সঙ্কুচিত হয় হুবহু লিটারেলে: বদলাবেই না, তাই টাইপ-ই মান।' },
        },
      },
      {
        line: 3,
        action: {
          kind: 'assign', var: 'count', valueType: '42',
          note: { en: 'Legal: 42 is a number. After assignment, flow analysis believes count: 42 (still assignable to number).', bn: 'বৈধ: ৪২ একটি number। অ্যাসাইনমেন্টের পর ফ্লো-বিশ্লেষণ বিশ্বাস করে count: 42 (number-এরই অধীন)।' },
        },
      },
      {
        line: 4,
        action: {
          kind: 'error-check', var: 'count',
          note: { en: '✗ Compile error, before any JavaScript runs: string is not assignable to number. The type system just moved a runtime bug to line 4 of the editor.', bn: '✗ কম্পাইল এরর — কোনো জাভাস্ক্রিপ্ট চলার আগেই: string, number-এ অ্যাসাইনযোগ্য নয়। টাইপ সিস্টেম রানটাইম-বাগকে টেনে এনেছে এডিটরের ৪ নং লাইনে।' },
        },
      },
      {
        line: 5,
        action: {
          kind: 'declare', var: 'user', declared: 'string | number', valueType: '7',
          note: { en: 'Annotation BEATS inference: the declared union is the belief ceiling, not the current value.', bn: 'অ্যনোটেশন অনুমানকে হারায়: ঘোষিত ইউনিয়ন-ই বিশ্বাসের সিলিং, বর্তমান মান নয়।' },
        },
      },
      {
        line: 6,
        action: {
          kind: 'assign', var: 'user', valueType: '"seven"',
          note: { en: 'Valid: "seven" ⊂ string ⊂ the union. Both members remain possible; TS stays wide.', bn: 'বৈধ: "seven" ⊂ string ⊂ ইউনিয়ন। দুই সদস্য সম্ভাব্য বলেই থাকে; TS প্রশস্তই থাকে।' },
        },
      },
    ],
    intro: {
      en: 'Inference is not guessing — it is a rule: const takes the literal, let widens to the category, annotations override both.',
      bn: 'অনুমান অন্ধ অনুমান নয় — এটি নিয়ম: const নেয় লিটারেল, let প্রসারিত হয় শ্রেণিতে, অ্যালানোটেশন উভয়কে জয় করে।',
    },
  },
  {
    id: 'typeof-narrow',
    title: { en: "typeof guards split the union", bn: 'typeof গার্ড ইউনিয়ন ভাগ করে' },
    code: [
      'function pad(id: string | number) {',
      "  if (typeof id === 'string') {",
      '    return id.toUpperCase();',
      '  }',
      '  return id.toFixed(2);',
      '}',
    ],
    steps: [
      {
        line: 1,
        action: {
          kind: 'declare', var: 'id', declared: 'string | number', valueType: 'string | number',
          note: { en: 'At the boundary TS believes the FULL union: toUpperCase is not callable yet (numbers have none).', bn: 'সীমানায় TS বিশ্বাস করে পূর্ণ ইউনিয়ন: toUpperCase এখনো ডাকা যায় না (number-এর তা নেই)।' },
        },
      },
      {
        line: 2,
        action: {
          kind: 'guard', var: 'id', guard: 'typeof', arg: 'string',
          note: { en: 'The guard SPLITS the world: inside the if, id is string; in the else, TS subtracts string — only number survives.', bn: 'গার্ড জগৎ ভাগ করে: if-এর ভেতরে id হলো string; else-এ TS string বিয়োগ করে — টিকে থাকে শুধু number।' },
        },
      },
      {
        line: 3,
        action: {
          kind: 'error-check', var: 'id',
          note: { en: '…is NOT an error anymore: inside the true branch the belief is exactly string, so .toUpperCase() type-checks. Try the same call at line 1 — squiggle.', bn: '…আর এরর নয়: true-শাখায় বিশ্বাস হুবহু string, তাই .toUpperCase() টাইপ-চেক পায়। ১ নং লাইনে একই কল — লাল দাগ।' },
        },
      },
      {
        line: 5,
        action: {
          kind: 'declare', var: 'id', declared: 'number', valueType: 'number',
          note: { en: 'After the if, control-flow merges only what reaches here: the else-path belief — number — so .toFixed(2) is safe.', bn: 'if-এর পর এখানে পৌঁছায় শুধু else-পথের বিশ্বাস — number — তাই .toFixed(2) নিরাপদ।' },
        },
      },
    ],
    intro: {
      en: 'Narrowing is set subtraction over union members, performed by control flow. No casts needed — just honest checks.',
      bn: 'ন্যারোইং হলো কন্ট্রোল-ফ্লোচালিত ইউনিয়ন-সদস্যের সেট-বিয়োগ। কাস্ট লাগে না — লাগে সৎ পরীক্ষা।',
    },
  },
  {
    id: 'discriminated-union',
    title: { en: 'Discriminated unions: one field decides everything', bn: 'ডিসক্রিমিনেটেড ইউনিয়ন: এক ফিল্ডই সব ঠিক করে' },
    code: [
      'type Shape =',
      "  | { kind: 'circle'; radius: number }",
      "  | { kind: 'square'; size: number };",
      '',
      'function area(s: Shape) {',
      "  if (s.kind === 'circle') {",
      '    return Math.PI * s.radius ** 2;',
      '  }',
      '  return s.size ** 2;',
      '}',
    ],
    steps: [
      {
        line: 5,
        action: {
          kind: 'declare', var: 's', declared: '{circle} | {square}', valueType: '{circle} | {square}',
          note: { en: 's is the UNION of two object shapes; neither radius nor size is safely readable yet.', bn: 's হলো দুই অবজেক্ট-আকৃতির ইউনিয়ন; radius বা size কোনোটিই এখনো নিরাপদে পড়া যায় না।' },
        },
      },
      {
        line: 6,
        action: {
          kind: 'guard', var: 's', guard: 'equals', arg: '{circle}',
          note: { en: "Reading the discriminator (kind) against ONE literal prunes the union: true-branch keeps only the circle shape — radius now exists.", bn: 'ডিসক্রিমিনেটর (kind) এক লিটারেলের সাথে মেলালেই ইউনিয়ন ছাঁট হয়: true-শাখায় টিকে শুধু circle-আকৃতি — radius এবার আছে।' },
        },
      },
      {
        line: 7,
        action: {
          kind: 'error-check', var: 's',
          note: { en: "…NOT an error here: after narrowing, s.radius type-checks. The common field (kind) was the key; the private field (radius) was the prize.", bn: '…এখানে এরর নয়: ন্যারোয়ের পরে s.radius টাইপ-চেক পায়। সাধারণ ফিল্ড (kind) ছিল চাবি; ব্যক্তিগত ফিল্ড (radius) পুরস্কার।' },
        },
      },
      {
        line: 9,
        action: {
          kind: 'declare', var: 's', declared: '{square}', valueType: '{square}',
          note: { en: 'Else-path: TS subtracted circle; square survives with its size. Exhaustive handling = compiler-verified completeness.', bn: 'else-পথ: TS circle বাদ দিয়েছে; টিকে তার size-সহ square। পুঙ্খানুপুঙ্খ হ্যান্ডলিং = কম্পাইলার-প্রত্যয়িত পূর্ণতা।' },
        },
      },
    ],
    intro: {
      en: 'Model states as unions of shapes with a shared literal field; the compiler then PROVES you handled every case.',
      bn: 'অবস্থাগুলো মডেল করুন ভাগ করা লিটারেল-ফিল্ডযুক্ত আকৃতির ইউনিয়নে; কম্পাইলার তখন প্রমাণ করে দেয় আপনি সব অবস্থা সামলেছেন।',
    },
  },
];
