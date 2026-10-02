import type { LText } from '../../lib/types';

/** Pure re-render model (Section 11): which components re-render when a state changes? */

export interface ReNode {
  name: string;
  props: string[]; // state names this component RECEIVES as props (empty = none)
  children: string[];
  owns: string[]; // state names OWNED locally by this component (change starts here)
}

/** The demo tree: App owns count+text; props flow down. */
export const REACT_TREE: Record<string, ReNode> = {
  App: { name: 'App', props: [], children: ['Header', 'Main', 'Footer'], owns: ['count', 'text'] },
  Header: { name: 'Header', props: [], children: [], owns: [] },
  Main: { name: 'Main', props: ['count', 'text'], children: ['Counter', 'List'], owns: [] },
  Counter: { name: 'Counter', props: ['count'], children: [], owns: [] },
  List: { name: 'List', props: ['text'], children: ['Item'], owns: [] },
  Item: { name: 'Item', props: ['text'], children: [], owns: [] },
  Footer: { name: 'Footer', props: [], children: [], owns: [] },
};

export type ChangeKind = 'count' | 'text';

/**
 * The React rule, honestly: when a component's state changes, IT re-renders — and
 * then every descendant re-renders TOO, unless wrapped in React.memo AND none of
 * its props changed. memo is skipped entirely if a changed prop flows through.
 */
export function reRendered(change: ChangeKind, memoized: ReadonlySet<string>): string[] {
  const out: string[] = [];
  function walk(name: string, parentRendered: boolean): void {
    const node = REACT_TREE[name];
    const memoSkips = memoized.has(name) && !node.props.includes(change);
    const rendered = name === 'App' || (parentRendered && !memoSkips);
    if (rendered) out.push(name);
    for (const child of node.children) walk(child, rendered);
  }
  walk('App', false);
  return out;
}

export function captionFor(change: ChangeKind, memoized: ReadonlySet<string>, result: string[]): LText {
  const skipped = Object.keys(REACT_TREE).filter((n) => !result.includes(n));
  if (skipped.length === 0) {
    return {
      en: `${change} changed at App. Default rule: the whole tree re-runs. UI = f(state) — React trusts your functions to be pure enough to re-execute.`,
      bn: `App-এর ${change} বদলেছে। ডিফল্ট নিয়ম: পুরো ট্রি আবার চলে। UI = f(state) — React আস্থা রাখে আপনার ফাংশন যথেষ্ট খাঁটি, আবার চালানো যায়।`,
    };
  }
  const saved = skipped
    .filter((n) => memoized.has(n))
    .map((n) => n)
    .join(', ');
  const hostage = skipped.filter((n) => !memoized.has(n));
  return {
    en: `${change} changed. memo(${saved || '…'}) skipped the re-run because its props did not include ${change}${hostage.length ? `; ${hostage.join(', ')} survived because its memoized PARENT hid it (React never even reached it)` : ''}.`,
    bn: `${change} বদলেছে। memo(${saved || '…'}) পুনর্চালনা এড়িয়েছে, কারণ এর props-এ ${change} ছিল না${hostage.length ? `; ${hostage.join(', ')}-ও বেঁচেছে, কারণ memo করা PARENT-ই React সেখানে পৌঁছতেই দেয়নি` : ''}।`,
  };
}
