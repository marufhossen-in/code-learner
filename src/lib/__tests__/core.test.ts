import { describe, expect, it } from 'vitest';
import { TECHS, CATEGORIES, techBySlug, searchTechs } from '../../data/registry';
import { GLOSSARY, glossaryByTerm } from '../../data/glossary';
import { ROADMAPS } from '../../data/roadmaps';
import { UI } from '../ui-strings';
import { allLessons, getHub, HUBS } from '../../content';
import { EXEC_SCENARIOS } from '../../components/visuals/ExecutionVisualizer';
import { BROWSER_PIPELINE } from '../../components/visuals/Pipeline';
import { tokenize } from '../../components/CodeBlock';

describe('technology registry (Section 2/40)', () => {
  it('has unique slugs', () => {
    const slugs = TECHS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
  it('every tech belongs to a known category', () => {
    const cats = new Set(CATEGORIES.map((c) => c.id));
    for (const t of TECHS) expect(cats.has(t.cat)).toBe(true);
  });
  it('covers all 10 spec categories with every listed technology', () => {
    expect(CATEGORIES.length).toBe(10);
    expect(TECHS.length).toBe(135); // Section-2 catalog + system-design, caching, distributed-systems, REST, GraphQL expect(TECHS.length).toBe(134); // Section-2 catalog + system-design, caching, distributed-systems, REST, GraphQL & Node rows (hubs #22-#28) Node rows (hubs #22-#28) + TanStack Query row (hub #32)
  });
  it('prerequisites reference real technologies', () => {
    for (const t of TECHS) for (const p of t.prereq ?? []) expect(techBySlug(p)).toBeDefined();
  });
  it('search works bilingually', () => {
    expect(searchTechs('javascript').some((t) => t.slug === 'javascript')).toBe(true);
    expect(searchTechs('ব্রাউজারের').some((t) => t.slug === 'javascript')).toBe(true);
    expect(searchTechs('ডেটাবেস').length).toBeGreaterThan(0);
  });
});

describe('bilingual engine (Section 4/36)', () => {
  it('every UI key has both English and Bengali text', () => {
    for (const [k, v] of Object.entries(UI)) {
      expect(v.en.length, `UI key ${k} missing en`).toBeGreaterThan(0);
      expect(v.bn.length, `UI key ${k} missing bn`).toBeGreaterThan(0);
    }
  });
  it('glossary terms are bilingual', () => {
    for (const g of GLOSSARY) {
      expect(g.simpleBn.length).toBeGreaterThan(0);
      expect(g.techBn.length).toBeGreaterThan(0);
    }
    expect(glossaryByTerm('closure')).toBeDefined();
  });
  it('keeps technical keywords in English inside Bengali text', () => {
    const closure = glossaryByTerm('Closure')!;
    expect(closure.simpleBn).toMatch(/ফাংশন|ভেরিয়েবল/);
  });
});

describe('lesson content engine (Section 5/41)', () => {
  it('every lesson has blocks, exercises and a quiz', () => {
    for (const l of allLessons()) {
      expect(l.blocks.length).toBeGreaterThan(5);
      expect(l.exercises.length).toBeGreaterThanOrEqual(3);
      expect(l.quiz.questions.length).toBeGreaterThanOrEqual(3);
    }
  });
  it('covers the deep-structure sections (WHAT..NEXT)', () => {
    const required = ['what', 'why', 'how', 'internal', 'result', 'debug', 'realworld', 'next'];
    for (const l of allLessons()) {
      const ids = l.blocks.filter((b) => b.type === 'heading').map((b) => (b.type === 'heading' ? b.id : ''));
      for (const r of required) expect(ids, `${l.slug} missing section ${r}`).toContain(r);
    }
  });
  it('MCQ answers point at valid options', () => {
    for (const l of allLessons()) {
      for (const e of [...l.exercises, ...l.quiz.questions]) {
        if (e.options && typeof e.answer === 'number') {
          expect(e.answer).toBeGreaterThanOrEqual(0);
          expect(e.answer).toBeLessThan(e.options.length);
        }
      }
    }
  });
});

describe('visualizers', () => {
  it('execution scenarios highlight valid lines', () => {
    for (const sc of Object.values(EXEC_SCENARIOS)) {
      const lines = sc.code.split('\n').length;
      for (const s of sc.steps) {
        expect(s.line).toBeGreaterThanOrEqual(1);
        expect(s.line).toBeLessThanOrEqual(lines);
      }
      expect(sc.steps.length).toBeGreaterThanOrEqual(4);
    }
  });
  it('browser pipeline covers the full URL→Screen journey', () => {
    const labels = BROWSER_PIPELINE.map((s) => s.label);
    for (const need of ['URL', 'DNS', 'TCP', 'TLS', 'HTTP', 'DOM', 'Layout', 'Paint', 'Composite', 'Screen']) {
      expect(labels).toContain(need);
    }
  });
});

describe('syntax highlighter', () => {
  it('tags keywords and strings in JS', () => {
    const toks = tokenize('const s = "hi";', 'js');
    expect(toks.some((t) => t.cls === 'tok-k' && t.text === 'const')).toBe(true);
    expect(toks.some((t) => t.cls === 'tok-s')).toBe(true);
  });
  it('never produces empty output for code', () => {
    expect(tokenize('body { color: red; }', 'css').length).toBeGreaterThan(1);
    expect(tokenize('SELECT * FROM users;', 'sql').some((t) => t.cls === 'tok-k')).toBe(true);
  });
});

describe('roadmaps & hubs', () => {
  it('roadmap slugs resolve or are intentionally open topics', () => {
    for (const r of ROADMAPS) {
      expect(r.stages.length).toBeGreaterThanOrEqual(2);
    }
  });
  it('the javascript hub is the complete reference implementation', () => {
    const js = getHub('javascript');
    expect(js).toBeDefined();
    expect(js!.lessons.length).toBeGreaterThanOrEqual(2);
    expect((js!.reference ?? js!.references)!.length).toBeGreaterThanOrEqual(3);
    expect(js!.interview.length).toBeGreaterThanOrEqual(3);
  });
  it('html and css hubs are published with full structure', () => {
    expect(getHub('html')!.lessons.length).toBeGreaterThanOrEqual(1);
    expect(getHub('css')!.lessons.length).toBeGreaterThanOrEqual(2);
  });
  it('registry availability flags match published hubs exactly', () => {
    const available = TECHS.filter((t) => t.status === 'available')
      .map((t) => t.slug)
      .sort();
    expect(available).toEqual(HUBS.map((h) => h.slug).sort());
  });
});
