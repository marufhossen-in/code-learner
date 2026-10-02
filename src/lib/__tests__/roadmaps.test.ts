import { describe, expect, it } from 'vitest';
import { HUBS } from '../../content';
import { TECHS } from '../../data/registry';
import { ROADMAPS } from '../../data/roadmaps';

const VALID_LEVELS = new Set(['beginner', 'intermediate', 'advanced', 'pro']);

describe('roadmaps data (Section 25)', () => {
  it('roadmap ids are unique', () => {
    expect(new Set(ROADMAPS.map((r) => r.id)).size).toBe(ROADMAPS.length);
  });

  it('every stage has a level, bilingual duration and a goal', () => {
    for (const r of ROADMAPS) {
      for (const s of r.stages) {
        expect(VALID_LEVELS.has(s.level), `${r.id} stage level`).toBe(true);
        expect(s.weeks.en.length && s.weeks.bn.length, `${r.id} weeks`).toBeGreaterThan(0);
        expect(s.goal.en.length && s.goal.bn.length, `${r.id} goal`).toBeGreaterThan(0);
        expect(s.items.length, `${r.id} items`).toBeGreaterThan(0);
      }
    }
  });

  it('every linked slug exists in the technology registry', () => {
    const valid = new Set(TECHS.map((t) => t.slug));
    for (const r of ROADMAPS) {
      for (const s of r.stages) {
        for (const it of s.items) {
          if (it.slug) expect(valid.has(it.slug), `unknown slug ${it.slug}`).toBe(true);
        }
      }
    }
  });

  it('slugs marked available in hubs resolve to real hubs', () => {
    const hubSlugs = new Set(HUBS.map((h) => h.slug));
    for (const slug of hubSlugs) {
      expect(HUBS.find((h) => h.slug === slug)?.lessons.length).toBeGreaterThan(0);
    }
  });

  it('each roadmap has at least one available hub to start with', () => {
    const hubSlugs = new Set(HUBS.map((h) => h.slug));
    for (const r of ROADMAPS) {
      const linked = r.stages.flatMap((s) => s.items.map((i) => i.slug));
      expect(linked.some((slug) => slug && hubSlugs.has(slug)), `${r.id} has no startable hub`).toBe(true);
    }
  });
});
