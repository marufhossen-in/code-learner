import { describe, expect, it } from 'vitest';
import { captionFor, REACT_TREE, reRendered } from '../../components/visuals/reactSim';

const ALL = Object.keys(REACT_TREE);

describe('react re-render model (Section 11)', () => {
  it('the tree is a valid DAG rooted at App', () => {
    expect(REACT_TREE.App.children).toContain('Main');
    for (const [name, node] of Object.entries(REACT_TREE)) {
      expect(node.children).not.toContain(name);
      for (const c of node.children) expect(REACT_TREE[c], `child ${c}`).toBeDefined();
    }
  });

  it('by default, ANY state change re-renders the WHOLE tree', () => {
    for (const change of ['count', 'text'] as const) {
      expect(reRendered(change, new Set()).sort()).toEqual(ALL.sort());
    }
  });

  it('memo shields a node when its props do NOT include the changed state', () => {
    const rr = reRendered('count', new Set(['Item']));
    expect(rr).toContain('App');
    expect(rr).toContain('Counter');
    expect(rr).toContain('List'); // item's parent still runs
    expect(rr).not.toContain('Item'); // but the memoized one does not
  });

  it('memo is pierced when the changed state IS a prop', () => {
    const rr = reRendered('text', new Set(['Item']));
    expect(rr).toContain('Item');
  });

  it('memoizing a parent protects its whole subtree', () => {
    const rr = reRendered('count', new Set(['List']));
    expect(rr).not.toContain('List');
    expect(rr).not.toContain('Item');
  });

  it('memo on nodes without props makes them permanently lazy', () => {
    const rr = reRendered('count', new Set(['Header', 'Footer']));
    expect(rr).toEqual(['App', 'Main', 'Counter', 'List', 'Item']);
  });

  it('magic strings stay in sync with the tree', () => {
    // every prop must be an owned state of SOME ancestor (here, App)
    const owned = new Set(REACT_TREE.App.owns);
    for (const node of Object.values(REACT_TREE)) {
      for (const p of node.props) expect(owned.has(p), `${node.name} prop ${p}`).toBe(true);
    }
  });

  it('captions are bilingual in both branches', () => {
    for (const cap of [captionFor('count', new Set(), []), captionFor('count', new Set(['Item']), reRendered('count', new Set(['Item'])))]) {
      expect(cap.en.length).toBeGreaterThan(0);
      expect(cap.bn.length).toBeGreaterThan(0);
    }
  });
});
