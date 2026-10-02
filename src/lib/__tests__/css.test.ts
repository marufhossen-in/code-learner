import { describe, expect, it } from 'vitest';
import { cssHub } from '../../content/css';

const ORDER = [
  'css-cascade-syntax',
  'css-colors-text',
  'box-model',
  'css-position-maps',
  'flexbox',
  'grid',
  'css-responsive',
  'css-motion',
  'css-architecture',
];

// the six deep-cut lessons written under the canonical block ledger
const CANONICAL = [
  'css-cascade-syntax',
  'css-colors-text',
  'css-position-maps',
  'css-responsive',
  'css-motion',
  'css-architecture',
];

// canonical deep-cut section order per the hub's block ledger
const SECTIONS = ['what', 'why', 'how', 'internal', 'result', 'debug', 'realworld', 'next'];

describe('css hub content shape', () => {
  it('stocks all 9 lessons in the lesson ladder order', () => {
    expect(cssHub.lessons).toHaveLength(9);
    expect(cssHub.lessons.map((l) => l.slug)).toEqual(ORDER);
  });

  it('chains every lesson to the next, exiting into javascript closures', () => {
    for (let i = 0; i < cssHub.lessons.length; i++) {
      const l = cssHub.lessons[i];
      const next = l.nextLesson ?? l.next;
      expect(next, `${l.slug} must have a next pointer`).toBeTruthy();
      if (i < cssHub.lessons.length - 1) {
        expect(next!.slug).toBe(ORDER[i + 1]);
      } else {
        expect(next!.slug).toBe('js-syntax-variables');
        expect(next!.tech).toBe('javascript');
      }
    }
  });

  it('every lesson is bilingual, universal floors hold for legacy and new alike', () => {
    for (const l of cssHub.lessons) {
      expect(l.summary.en.length).toBeGreaterThan(80);
      expect(l.summary.bn.length).toBeGreaterThan(80);
      expect(l.quiz.questions.length).toBeGreaterThanOrEqual(4);
      expect(l.exercises.length).toBeGreaterThanOrEqual(3);
      expect(l.minutes).toBeGreaterThanOrEqual(10);
    }
  });

  it('the six deep-cut lessons walk the canonical section ladder', () => {
    for (const slug of CANONICAL) {
      const l = cssHub.lessons.find((x) => x.slug === slug)!;
      const heads = l.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      for (const s of SECTIONS) expect(heads, `${slug} missing section ${s}`).toContain(s);
      expect(l.quiz.questions.some((q) => q.kind === 'fill'), `${slug} needs its carried-sentence fill`).toBe(true);
      expect(l.quiz.questions.length, `${slug} canonical quiz length`).toBeGreaterThanOrEqual(5);
    }
  });

  it('no lesson reuses a quiz id and every quiz id is css-namespaced', () => {
    const ids = cssHub.lessons.map((l) => l.quiz.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^css-/);
  });
});
