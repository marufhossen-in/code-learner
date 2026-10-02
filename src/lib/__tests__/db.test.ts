import { describe, expect, it } from 'vitest';
import { executeQuery, makeUsers, parseSelect, planQuery } from '../../components/visuals/dbSim';

const USERS = makeUsers();

describe('SELECT parser', () => {
  it('parses the full grammar', () => {
    const r = parseSelect("SELECT name, city FROM users WHERE age >= 40 ORDER BY age DESC LIMIT 5");
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.query.cols).toEqual(['name', 'city']);
      expect(r.query.where).toEqual({ col: 'age', op: '>=', val: 40 });
      expect(r.query.orderBy).toEqual({ col: 'age', dir: 'desc' });
      expect(r.query.limit).toBe(5);
    }
  });
  it('parses quoted strings and rejects unknown columns', () => {
    const ok = parseSelect("SELECT * FROM users WHERE city = 'Dhaka'");
    expect(ok.ok).toBe(true);
    expect(parseSelect('SELECT * FROM users WHERE planet = 1').ok).toBe(false);
    expect(parseSelect('SELECT gold FROM users').ok).toBe(false);
    expect(parseSelect('DELETE FROM users').ok).toBe(false);
    expect(parseSelect('').ok).toBe(false);
  });
});

describe('planner', () => {
  it('uses the primary-key index for id filters', () => {
    const r = parseSelect('SELECT * FROM users WHERE id = 42');
    if (!r.ok) return expect.unreachable();
    expect(planQuery(r.query, ['id']).op).toBe('INDEX SCAN');
  });
  it('falls back to SEQ SCAN when no index exists on the filter column', () => {
    const r = parseSelect("SELECT * FROM users WHERE city = 'Dhaka'");
    if (!r.ok) return expect.unreachable();
    expect(planQuery(r.query, ['id']).op).toBe('SEQ SCAN');
    expect(planQuery(r.query, ['id', 'city']).op).toBe('INDEX SCAN');
  });
});

describe('executor (Section 11)', () => {
  it('a full scan examines all 100 rows', () => {
    const r = parseSelect("SELECT * FROM users WHERE city = 'Dhaka'");
    if (!r.ok) return expect.unreachable();
    const e = executeQuery(r.query, USERS, ['id']);
    expect(e.rowsExamined).toBe(100);
    expect(e.rowsMatched).toBeGreaterThan(0);
    expect(e.rowsMatched).toBeLessThan(100);
  });
  it('an index scan examines only the matching rows', () => {
    const r = parseSelect("SELECT * FROM users WHERE city = 'Dhaka'");
    if (!r.ok) return expect.unreachable();
    const scan = executeQuery(r.query, USERS, ['id']);
    const idx = executeQuery(r.query, USERS, ['id', 'city']);
    expect(idx.plan.index).toBe('idx_city');
    expect(idx.rowsExamined).toBe(idx.rowsMatched);
    expect(idx.rowsExamined).toBeLessThan(scan.rowsExamined / 2);
    // same answer, less work
    expect(idx.result.length).toBe(scan.result.length);
  });
  it('a primary-key lookup reads exactly one row', () => {
    const r = parseSelect('SELECT * FROM users WHERE id = 42');
    if (!r.ok) return expect.unreachable();
    const e = executeQuery(r.query, USERS, ['id']);
    expect(e.result).toHaveLength(1);
    expect(e.rowsExamined).toBe(1);
    expect(e.result[0].id).toBe(42);
  });
  it('LIMIT stops the sequential scan early', () => {
    const r = parseSelect('SELECT * FROM users LIMIT 1');
    if (!r.ok) return expect.unreachable();
    const e = executeQuery(r.query, USERS, ['id']);
    expect(e.rowsExamined).toBeLessThanOrEqual(8); // first page only
    expect(e.result).toHaveLength(1);
    expect(e.steps.some((s) => s.kind === 'limit')).toBe(true);
  });
  it('ORDER BY sorts the final result', () => {
    const r = parseSelect('SELECT * FROM users ORDER BY age DESC LIMIT 3');
    if (!r.ok) return expect.unreachable();
    const e = executeQuery(r.query, USERS, ['id']);
    expect(e.result).toHaveLength(3);
    expect(e.result[0].age).toBeGreaterThanOrEqual(e.result[1].age);
    expect(e.result[1].age).toBeGreaterThanOrEqual(e.result[2].age);
  });
  it('projection narrows the returned columns', () => {
    const r = parseSelect("SELECT name FROM users WHERE id = 1");
    if (!r.ok) return expect.unreachable();
    const e = executeQuery(r.query, USERS, ['id']);
    expect(e.result[0].name).toBeTruthy();
  });
});
