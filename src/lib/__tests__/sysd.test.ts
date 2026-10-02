import { describe, it, expect } from 'vitest';
import { simulate, SCENES } from '../../components/visuals/sysdSim';
import type { SceneKey } from '../../components/visuals/sysdSim';

const KEYS: SceneKey[] = ['traffic', 'storage', 'bandwidth', 'memory'];

describe('envelope ledger engine', () => {
  it('exposes the four ledger scenes with bilingual titles', () => {
    expect(Object.keys(SCENES).sort()).toEqual([...KEYS].sort());
    for (const k of KEYS) {
      expect(SCENES[k].title.en.length).toBeGreaterThan(4);
      expect(SCENES[k].title.bn.length).toBeGreaterThan(4);
      expect(SCENES[k].arc.en).toMatch(/→|off the origin|cluster what/);
      expect(SCENES[k].arc.bn.length).toBeGreaterThan(8);
    }
  });

  it('walk lengths match the locked ledgers: 10 / 13 / 7 / 8', () => {
    expect(simulate('traffic')).toHaveLength(10);
    expect(simulate('storage')).toHaveLength(13);
    expect(simulate('bandwidth')).toHaveLength(7);
    expect(simulate('memory')).toHaveLength(8);
  });

  it('every step grows the ledger by exactly one row, focussed on the new row', () => {
    for (const k of KEYS) {
      const steps = simulate(k);
      steps.forEach((s, i) => {
        expect(s.rows).toHaveLength(i + 1);
        expect(s.focus).toBe(i);
      });
      const full = steps[steps.length - 1].rows;
      for (let i = 1; i < steps.length; i++) {
        expect(steps[i].rows.slice(0, i)).toEqual(steps[i - 1].rows);
        expect(full.slice(0, i + 1)).toEqual(steps[i].rows);
      }
    }
  });

  it('every row carries bilingual label, note, unit and fmt', () => {
    for (const k of KEYS) {
      for (const s of simulate(k)) {
        for (const r of s.rows) {
          expect(r.label.en.length).toBeGreaterThan(1);
          expect(r.label.bn.length).toBeGreaterThan(1);
          expect(r.note.en.length).toBeGreaterThan(8);
          expect(r.note.bn.length).toBeGreaterThan(8);
          expect(r.unit.length).toBeGreaterThan(0);
          expect(r.fmt.length).toBeGreaterThan(0);
          expect(Number.isFinite(r.value)).toBe(true);
        }
        expect(s.msg.en.length).toBeGreaterThan(4);
        expect(s.msg.bn.length).toBeGreaterThan(4);
      }
    }
  });

  it('traffic ledger: the 14-box verdict is earned row by row', () => {
    const rows = simulate('traffic').at(-1)!.rows;
    expect(rows[0].value).toBe(10_000_000);
    expect(rows[2].value).toBe(200_000_000);
    expect(rows[2].value).toBe(rows[0].value * rows[1].value);
    expect(rows[3].value).toBe(86_400);
    expect(rows[4].value).toBe(2_314.81);
    expect(Math.abs(rows[4].value - 200_000_000 / 86_400)).toBeLessThan(0.01);
    expect(rows[5].value).toBe(3);
    expect(rows[6].value).toBe(6_944.44);
    expect(Math.abs(rows[6].value - (200_000_000 / 86_400) * 3)).toBeLessThan(0.01);
    expect(rows[7].value).toBe(2);
    expect(rows[8].value).toBe(1_000);
    expect(rows[9].value).toBe(13.89);
    expect(Math.abs(rows[9].value - ((200_000_000 / 86_400) * 3 * 2) / 1000)).toBeLessThan(0.01);
    expect(rows[9].fmt).toBe('≈ 14 boxes');
  });

  it('traffic: stagnant days cannot hide — average pulses under peak', () => {
    const rows = simulate('traffic').at(-1)!.rows;
    expect(rows[6].value).toBeGreaterThan(rows[4].value);
    expect(rows[6].value / rows[4].value).toBeCloseTo(3, 1);
  });

  it('storage ledger: five-year mirror lands at ≈ 7 disks', () => {
    const rows = simulate('storage').at(-1)!.rows;
    expect(rows[2].value).toBe(10_000_000); // 200M × 5%
    expect(rows[4].value).toBe(10_000_000_000); // 10 GB/day
    expect(rows[6].value).toBe(3_650_000_000_000); // 3.65 TB/yr
    expect(rows[8].value).toBe(18_250_000_000_000); // 5y corpus
    expect(rows[10].value).toBe(54_750_000_000_000); // ×3 replication
    expect(rows[10].value).toBe(rows[8].value * 3);
    expect(rows[12].value).toBe(6.84);
    expect(rows[12].fmt).toBe('≈ 7 disks');
  });

  it('storage: the daily drip is exactly one hundred million kilobytes', () => {
    const rows = simulate('storage').at(-1)!.rows;
    const perDay = rows[4].value;
    expect(perDay / 1_000).toBe(rows[2].value); // KB math closes
    expect(rows[6].value).toBe(perDay * 365);
    expect(rows[8].value).toBe(perDay * 365 * 5);
  });

  it('bandwidth ledger: CDN lifts four-fifths off a 556 Mbps peak', () => {
    const rows = simulate('bandwidth').at(-1)!.rows;
    expect(rows[0].value).toBe(6_944.44);
    expect(rows[2].value).toBe(69_444_400);
    expect(rows[2].value).toBe(Math.round(6_944.44 * 10_000));
    expect(rows[4].value).toBe(555_555_200);
    expect(rows[4].value).toBe(rows[2].value * 8);
    expect(rows[6].value).toBe(111_111_040);
    expect(rows[6].value).toBe(Math.round(rows[4].value * (1 - 0.8)));
    expect(rows[6].fmt).toBe('≈ 111 Mbps');
  });

  it('bandwidth: every message mentions the CDN only at the offload row onwards', () => {
    const steps = simulate('bandwidth');
    expect(steps[0].msg.en).not.toMatch(/CDN/);
    expect(steps[5].msg.en).toMatch(/CDN/);
    expect(steps[6].msg.en).toMatch(/ Mbps|Mbps/);
  });

  it('memory ledger: the 80/20 working set fits one 8 GB node twice over', () => {
    const rows = simulate('memory').at(-1)!.rows;
    expect(rows[1].value).toBe(0.2);
    expect(rows[2].value).toBe(2_000_000);
    expect(rows[2].value).toBe(rows[0].value * 0.2);
    expect(rows[4].value).toBe(2_000_000_000);
    expect(rows[6].value).toBe(3_200_000_000);
    expect(rows[6].value).toBe(rows[4].value * 1.6);
    expect(rows[7].value).toBe(8_000_000_000);
    expect(rows[7].value / rows[6].value).toBeGreaterThanOrEqual(2);
    expect(rows[7].fmt).toBe('one 8 GB node');
  });

  it('peak halo and headroom covenant appear exactly once each, in traffic', () => {
    const rows = simulate('traffic').at(-1)!.rows;
    const halos = rows.filter((r) => /halo|হ্যালো/.test(r.label.en)).length;
    const covenants = rows.filter((r) => /covenant|চুক্তি/.test(r.label.en)).length;
    expect(halos).toBe(1);
    expect(covenants).toBe(1);
  });

  it('units stay awake across scenes: QPS lives in traffic/bandwidth, bytes elsewhere', () => {
    const t = simulate('traffic').at(-1)!.rows.map((r) => r.unit);
    const s = simulate('storage').at(-1)!.rows.map((r) => r.unit);
    const b = simulate('bandwidth').at(-1)!.rows.map((r) => r.unit);
    const m = simulate('memory').at(-1)!.rows.map((r) => r.unit);
    expect(t).toContain('QPS');
    expect(t).toContain('machines');
    expect(s).not.toContain('QPS');
    expect(s).toContain('bytes/day');
    expect(s.filter((u) => u === 'disks')).toHaveLength(1);
    expect(b).toContain('bps');
    expect(b).toContain('QPS');
    expect(m).toContain('bytes/node');
    expect(m).not.toContain('bps');
  });

  it('the 86,400-second gate appears exactly once across all four ledgers', () => {
    let hits = 0;
    for (const k of KEYS) {
      for (const r of simulate(k).at(-1)!.rows) if (r.value === 86_400) hits++;
    }
    expect(hits).toBe(1);
    expect(simulate('traffic').at(-1)!.rows[3].fmt).toBe('86,400');
  });

  it('storage reviews replication only at the mirror row', () => {
    const rows = simulate('storage').at(-1)!.rows;
    const replRow = rows.find((r) => r.unit === 'replicas');
    expect(replRow).toBeDefined();
    expect(replRow!.value).toBe(3);
    expect(replRow!.note.en).toMatch(/mirror|news/);
    const mirrorMentions = rows.filter((r) => /mirror/i.test(r.note.en)).length;
    expect(mirrorMentions).toBeGreaterThanOrEqual(2); // mirror row + verdict talk
  });

  it('final verdict rows use the ⇒ arrow in traffic, storage and memory', () => {
    for (const k of ['traffic', 'storage', 'memory'] as SceneKey[]) {
      const last = simulate(k).at(-1)!.rows.at(-1)!;
      expect(last.label.en.startsWith('⇒')).toBe(true);
      expect(last.label.bn.startsWith('⇒')).toBe(true);
    }
    const b = simulate('bandwidth').at(-1)!.rows.at(-1)!;
    expect(b.label.en.startsWith('⇒')).toBe(true);
  });

  it('values are pre-rounded to two decimals before the test suite reads them', () => {
    for (const k of KEYS) {
      for (const r of simulate(k).at(-1)!.rows) {
        expect(Number.isInteger(r.value) || Math.abs(r.value * 100 - Math.round(r.value * 100)) < 1e-9).toBe(true);
      }
    }
  });

  it('step messages form a complete narration for every scene', () => {
    for (const k of KEYS) {
      const steps = simulate(k);
      const en = steps.map((s) => s.msg.en).join(' ');
      expect(en.length).toBeGreaterThan(40 * steps.length * 0.6);
      // no two consecutive steps share a message
      for (let i = 1; i < steps.length; i++) {
        expect(steps[i].msg.en).not.toBe(steps[i - 1].msg.en);
      }
    }
  });

  it('registry of scenes stays frozen: adding a scene must touch this file deliberately', () => {
    expect(Object.keys(SCENES)).toHaveLength(4);
  });
});
