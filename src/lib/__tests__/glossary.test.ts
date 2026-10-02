import { describe, expect, it } from 'vitest';
import { GLOSSARY, GLOSSARY_CATS, TERM_CAT } from '../../data/glossary';

describe('glossary (Section 24)', () => {
  it('terms are unique', () => {
    const keys = GLOSSARY.map((g) => g.term.toLowerCase());
    expect(new Set(keys).size).toBe(GLOSSARY.length);
  });

  it('every term is fully bilingual (simple + technical)', () => {
    for (const g of GLOSSARY) {
      for (const [k, v] of Object.entries({ simpleBn: g.simpleBn, simpleEn: g.simpleEn, techBn: g.techBn, techEn: g.techEn })) {
        expect(String(v).length, `${g.term}.${k}`).toBeGreaterThan(0);
      }
      expect(g.related.length).toBeGreaterThan(0);
    }
  });

  it('every term belongs to exactly one known category', () => {
    const valid = new Set(GLOSSARY_CATS.map((c) => c.id));
    for (const g of GLOSSARY) {
      expect(TERM_CAT[g.term], `category missing for ${g.term}`).toBeDefined();
      expect(valid.has(TERM_CAT[g.term]), `unknown category for ${g.term}`).toBe(true);
    }
  });

  it('category map has no orphan keys', () => {
    const terms = new Set(GLOSSARY.map((g) => g.term));
    for (const key of Object.keys(TERM_CAT)) {
      expect(terms.has(key), `TERM_CAT has unknown term ${key}`).toBe(true);
    }
  });

  it('deep links point inside the app and are bilingual', () => {
    for (const g of GLOSSARY) {
      if (!g.link) continue;
      expect(g.link.to, g.term).toMatch(/^\/(learn|labs|debug)/);
      expect(g.link.en.length).toBeGreaterThan(0);
      expect(g.link.bn.length).toBeGreaterThan(0);
    }
  });

  it('hands-on terms link to the lab that teaches them', () => {
    const byTerm = new Map(GLOSSARY.map((g) => [g.term, g]));
    expect(byTerm.get('Flexbox')?.link?.to).toContain('/labs#flexbox');
    expect(byTerm.get('Index')?.link?.to).toContain('/labs#database');
    expect(byTerm.get('Branch')?.link?.to).toContain('/labs#git');
    expect(byTerm.get('Closure')?.link?.to).toContain('/learn/javascript/lessons/closures');
  });
});
