import { describe, expect, it } from 'vitest';
import { javascriptHub } from '../../content/javascript';

const ORDER = [
  'js-syntax-variables',
  'js-operators-decisions',
  'js-loops-functions',
  'js-arrays-strings',
  'js-objects-prototypes',
  'js-dom-events',
  'js-async-promises',
  'closures',
  'event-loop',
  'js-the-long-tail',
];

describe('javascript hub content shape', () => {
  it('stocks all 10 lessons in the lesson ladder order', () => {
    expect(javascriptHub.lessons).toHaveLength(10);
    expect(javascriptHub.lessons.map((l) => l.slug)).toEqual(ORDER);
  });

  it('chains every intermediate lesson to the next', () => {
    for (let i = 0; i < javascriptHub.lessons.length - 1; i++) {
      const l = javascriptHub.lessons[i];
      const next = l.nextLesson ?? l.next;
      expect(next, `${l.slug} must have a next pointer`).toBeTruthy();
      expect(next!.slug).toBe(ORDER[i + 1]);
    }
  });

  it('every lesson is bilingual, universal floors hold for legacy and new alike', () => {
    for (const l of javascriptHub.lessons) {
      expect(l.summary.en.length).toBeGreaterThan(80);
      expect(l.summary.bn.length).toBeGreaterThan(80);
      expect(l.quiz.questions.length).toBeGreaterThanOrEqual(4);
      expect(l.exercises.length).toBeGreaterThanOrEqual(3);
      expect(l.minutes).toBeGreaterThanOrEqual(10);
    }
  });

  it('no lesson reuses a quiz id and every quiz id is js-namespaced', () => {
    const ids = javascriptHub.lessons.map((l) => l.quiz.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^js-/);
  });
});
