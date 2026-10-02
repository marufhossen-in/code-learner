import { describe, expect, it } from 'vitest';
import { DEBUG_SCENARIOS, scoreFor } from '../../content/debugScenarios';

describe('debug scenarios data integrity (Section 14)', () => {
  it('ids are unique', () => {
    expect(new Set(DEBUG_SCENARIOS.map((s) => s.id)).size).toBe(DEBUG_SCENARIOS.length);
  });

  it('every scenario is fully bilingual and has broken + fixed code', () => {
    for (const s of DEBUG_SCENARIOS) {
      for (const lt of [s.title, s.symptom, s.explanation, s.realWorld]) {
        expect(lt.en.length, `${s.id} en`).toBeGreaterThan(0);
        expect(lt.bn.length, `${s.id} bn`).toBeGreaterThan(0);
      }
      expect(s.code.trim().length).toBeGreaterThan(0);
      expect(s.fixedCode.trim().length).toBeGreaterThan(0);
      expect(s.fixedCode).not.toBe(s.code);
      expect(s.options.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('exactly one option per scenario is correct', () => {
    for (const s of DEBUG_SCENARIOS) {
      expect(s.options.filter((o) => o.correct), s.id).toHaveLength(1);
    }
  });

  it('option ids are unique and reasons are bilingual', () => {
    for (const s of DEBUG_SCENARIOS) {
      expect(new Set(s.options.map((o) => o.id)).size).toBe(s.options.length);
      for (const o of s.options) {
        expect(o.why.en.length).toBeGreaterThan(0);
        expect(o.why.bn.length).toBeGreaterThan(0);
      }
    }
  });

  it('difficulty maps to a sensible points ladder', () => {
    const pts = Object.fromEntries(DEBUG_SCENARIOS.map((s) => [s.id, s.points]));
    for (const s of DEBUG_SCENARIOS) {
      if (s.difficulty === 'easy') expect(pts[s.id]).toBe(100);
      if (s.difficulty === 'medium') expect(pts[s.id]).toBe(200);
      if (s.difficulty === 'hard') expect(pts[s.id]).toBe(300);
    }
  });
});

describe('debug scoring', () => {
  it('first-attempt solve earns full points', () => {
    expect(scoreFor(200, 1)).toBe(200);
  });
  it('each extra guess costs 50, floored at 25', () => {
    expect(scoreFor(200, 2)).toBe(150);
    expect(scoreFor(200, 3)).toBe(100);
    expect(scoreFor(200, 10)).toBe(25);
    expect(scoreFor(100, 99)).toBe(25);
  });
});
