import { describe, expect, it } from 'vitest';
import { htmlHub } from '../../content/html';

const ORDER = [
  'html-skeleton',
  'html-text-formatting',
  'html-links-urls',
  'html-tables-lists',
  'html-media',
  'html-semantics-layout',
  'dom-essentials',
  'forms',
  'html-modern-apis',
];

// canonical deep-cut section order per the hub's block ledger
const SECTIONS = ['what', 'why', 'how', 'visual', 'internal', 'result', 'debug', 'realworld', 'next'];

describe('html hub content shape', () => {
  it('stocks all 9 lessons in the lesson ladder order', () => {
        expect(htmlHub.lessons).toHaveLength(9);
    expect(htmlHub.lessons.map((l) => l.slug)).toEqual(ORDER);
  });

  it('chains every lesson to the next, exiting into the css box model', () => {
    for (let i = 0; i < htmlHub.lessons.length; i++) {
      const l = htmlHub.lessons[i];
      const next = l.nextLesson ?? l.next;
      expect(next, `${l.slug} must have a next pointer`).toBeTruthy();
      if (i < htmlHub.lessons.length - 1) {
        expect(next!.slug).toBe(ORDER[i + 1]);
      } else {
        expect(next!.slug).toBe('box-model');
      }
    }
  });

  it('every lesson is fully bilingual in summary and carries a quiz', () => {
    for (const l of htmlHub.lessons) {
      expect(l.summary.en.length).toBeGreaterThan(80);
      expect(l.summary.bn.length).toBeGreaterThan(80);
      expect(l.quiz.questions.length).toBeGreaterThanOrEqual(4);
      expect(l.exercises.length).toBeGreaterThanOrEqual(3);
      expect(l.minutes).toBeGreaterThanOrEqual(10);
    }
  });

  it('the seven new lessons walk the canonical section ladder', () => {
    const canonical = ['html-skeleton', 'html-text-formatting', 'html-links-urls', 'html-tables-lists', 'html-media', 'html-semantics-layout', 'html-modern-apis'];
    for (const slug of canonical) {
      const l = htmlHub.lessons.find((x) => x.slug === slug)!;
      const heads = l.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      for (const s of SECTIONS) expect(heads, `${slug} missing section ${s}`).toContain(s);
      expect(l.quiz.questions.some((q) => q.kind === 'fill'), `${slug} needs its carried-sentence fill`).toBe(true);
      expect(l.quiz.questions.length, `${slug} canonical quiz length`).toBeGreaterThanOrEqual(5);
    }
  });

  it('no lesson reuses a quiz id and every quiz id is html-namespaced', () => {
    const ids = htmlHub.lessons.map((l) => l.quiz.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^html-/);
  });
});
