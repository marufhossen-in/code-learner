import { describe, expect, it } from 'vitest';
import {
  applyGuard,
  categoryOf,
  displayType,
  narrowEquality,
  narrowIsArray,
  narrowTruthiness,
  narrowTypeof,
  parseUnion,
  simulate,
  TS_SCENARIOS,
} from '../../components/visuals/tsSim';

describe('ts narrowing engine (Section 11)', () => {
  it('parses and displays unions round-trip', () => {
    expect(parseUnion('string | number')).toEqual(['string', 'number']);
    expect(displayType(['string', 'number'])).toBe('string | number');
    expect(displayType([])).toBe('never');
  });

  it('categoryOf classifies primitives, literals, arrays, objects', () => {
    expect(categoryOf('string')).toBe('string');
    expect(categoryOf('"circle"')).toBe('string');
    expect(categoryOf('number')).toBe('number');
    expect(categoryOf('null')).toBe('null');
    expect(categoryOf('undefined')).toBe('undefined');
    expect(categoryOf('string[]')).toBe('array');
    expect(categoryOf('{circle}')).toBe('object');
  });

  it('typeof guards split unions exactly', () => {
    const u = ['string', 'number'];
    expect(narrowTypeof(u, 'string', true)).toEqual(['string']);
    expect(narrowTypeof(u, 'string', false)).toEqual(['number']);
  });

  it('truthiness removes and isolates null/undefined', () => {
    const u = ['string', 'undefined'];
    expect(narrowTruthiness(u, true)).toEqual(['string']);
    expect(narrowTruthiness(u, false)).toEqual(['undefined']);
    expect(narrowTruthiness(['string', 'null', 'undefined'], false)).toEqual(['null', 'undefined']);
  });

  it('equality guards prune literal unions (discriminators)', () => {
    const u = ['{circle}', '{square}'];
    expect(narrowEquality(u, '{circle}', true)).toEqual(['{circle}']);
    expect(narrowEquality(u, '{circle}', false)).toEqual(['{square}']);
  });

  it('Array.isArray keeps/removes array members', () => {
    const u = ['string[]', 'string'];
    expect(narrowIsArray(u, true)).toEqual(['string[]']);
    expect(narrowIsArray(u, false)).toEqual(['string']);
  });

  it('applyGuard dispatches and never returns null', () => {
    expect(applyGuard(['string', 'number'], 'typeof', 'number', true)).toEqual(['number']);
    expect(applyGuard(['string', 'undefined'], 'truthy', undefined, true)).toEqual(['string']);
  });

  it('simulate(): typeof scenario narrows id inside the guard', () => {
    const sc = TS_SCENARIOS.find((s) => s.id === 'typeof-narrow')!;
    const views = simulate(sc);
    const guardView = views.find((v) => v.branch);
    expect(guardView?.branch?.trueBranch.type).toBe('string');
    expect(guardView?.branch?.falseBranch.type).toBe('number');
    // path continues down the TRUE branch
    expect(guardView?.beliefs['id']).toBe('string');
  });

  it('simulate(): discriminated union keeps only circle in the true branch', () => {
    const sc = TS_SCENARIOS.find((s) => s.id === 'discriminated-union')!;
    const views = simulate(sc);
    const guardView = views.find((v) => v.branch);
    expect(guardView?.branch?.trueBranch.type).toBe('{circle}');
    expect(guardView?.branch?.falseBranch.type).toBe('{square}');
  });

  it('every scenario is well-formed: valid lines, bilingual notes, ≥1 guard or error', () => {
    for (const sc of TS_SCENARIOS) {
      expect(sc.title.en.length).toBeGreaterThan(0);
      expect(sc.title.bn.length).toBeGreaterThan(0);
      expect(sc.intro.en.length).toBeGreaterThan(0);
      expect(sc.intro.bn.length).toBeGreaterThan(0);
      const lineCount = sc.code.length;
      const views = simulate(sc);
      expect(views.length).toBe(sc.steps.length);
      for (const v of views) {
        expect(v.line).toBeGreaterThanOrEqual(1);
        expect(v.line).toBeLessThanOrEqual(lineCount);
        if (v.note) {
          expect(v.note.en.length).toBeGreaterThan(0);
          expect(v.note.bn.length).toBeGreaterThan(0);
        }
      }
      expect(views.some((v) => v.branch || v.isError)).toBe(true);
    }
  });
});
