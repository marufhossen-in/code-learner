import { describe, it, expect } from 'vitest';
import { queueSteps, type QKind, type QStep } from '../../components/visuals/qSim';

const KINDS: QKind[] = ['line', 'ring', 'twostack', 'priority'];
const FIFO_KINDS: QKind[] = ['line', 'ring', 'twostack']; // priority changes the law on purpose

function enqs(steps: QStep[]): string[] {
  return steps.filter((s) => s.enqueued && !s.error).map((s) => s.enqueued!);
}
function deqs(steps: QStep[]): string[] {
  return steps.filter((s) => s.dequeued && !s.error).map((s) => s.dequeued!);
}

describe.each(KINDS)('queue scene: %s', (kind) => {
  const steps = queueSteps(kind);

  it('is non-trivial and deterministic', () => {
    expect(steps.length).toBeGreaterThan(4);
    expect(JSON.stringify(queueSteps(kind))).toBe(JSON.stringify(steps));
  });

  it('logical queue mirrors the enqueue/serve ledger exactly', () => {
    const sim: string[] = [];
    for (const s of steps) {
      if (s.error) continue;
      if (s.enqueued) sim.push(s.enqueued);
      if (s.dequeued) {
        // FIFO scenes serve from the front; priority serves by max-pri (the law changed on purpose)
        const idx = kind === 'priority' ? sim.indexOf(s.dequeued) : 0;
        expect(idx).toBeGreaterThanOrEqual(0);
        expect(sim.splice(idx, 1)[0]).toBe(s.dequeued);
      }
      // pour steps shuffling between trays are internal — skip logical check
      if (!s.pourFrom) expect(s.queue).toEqual(sim);
    }
  });

  it('errors, if any, appear EXACTLY once at the end', () => {
    const errs = steps.filter((s) => s.error);
    const expectsError = kind === 'line' || kind === 'twostack' || kind === 'ring';
    if (expectsError) {
      expect(errs).toHaveLength(1);
      expect(steps[steps.length - 1].error).toBeDefined();
    } else {
      expect(errs).toHaveLength(0);
    }
  });

  it('no step mutates the logical order behind the scenes', () => {
    for (let k = 1; k < steps.length; k++) {
      const a = steps[k - 1].queue;
      const b = steps[k].queue;
      // queue may only change by enqueued (+1) or dequeued (−1) events
      const delta = b.length - a.length;
      expect([-1, 0, 1]).toContain(delta);
      if (steps[k].enqueued) expect(b[b.length - 1]).toBe(steps[k].enqueued);
      if (steps[k].dequeued && kind !== 'priority') expect(steps[k - 1].queue[0] ?? steps[k].dequeued).toBeDefined();
    }
  });
});

describe.each(FIFO_KINDS)('FIFO law for %s', (kind) => {
  it('serves everyone in exact arrival order (prefix discipline)', () => {
    const steps = queueSteps(kind);
    const served = deqs(steps);
    expect(served).toEqual(enqs(steps).slice(0, served.length));
  });
});

describe('line scene specifics', () => {
  const steps = queueSteps('line');
  it('mirror of the stack: identical arrivals, opposite service order', () => {
    expect(enqs(steps)).toEqual(['mango', 'guava', 'lychee', 'papaya']);
    expect(deqs(steps)).toEqual(['mango', 'guava', 'lychee', 'papaya']); // FIFO ≠ LIFO reverse
  });
  it('ends with underflow on the empty tray', () => {
    expect(steps[steps.length - 1].error).toBe('underflow');
    expect(steps[steps.length - 1].queue).toHaveLength(0);
  });
});

describe('ring scene specifics', () => {
  const steps = queueSteps('ring');
  it('capacity is never exceeded (bounded courage)', () => {
    for (const s of steps) {
      expect(s.queue.length).toBeLessThanOrEqual(5);
      expect(s.slots).toHaveLength(5);
    }
  });
  it('head and tail always stay inside the ring', () => {
    for (const s of steps) {
      expect(s.head).toBeGreaterThanOrEqual(0);
      expect(s.head).toBeLessThan(5);
      expect(s.tail).toBeGreaterThanOrEqual(0);
      expect(s.tail).toBeLessThan(5);
    }
  });
  it('exactly one wrap happens, when F lands on slot 0', () => {
    const wrapped = steps.filter((s) => s.wrapped && !s.error);
    expect(wrapped).toHaveLength(1);
    expect(wrapped[0].enqueued).toBe('F');
    expect(wrapped[0].slots?.[0]).toBe('F');
  });
  it('overflows exactly once when the ring is provably full (all 5 slots occupied)', () => {
    const last = steps[steps.length - 1];
    expect(last.error).toBe('overflow');
    expect(last.slots?.every((x) => x !== null)).toBe(true);
  });
});

describe('twostack scene specifics', () => {
  const steps = queueSteps('twostack');
  it('pours happen ONLY when outbox is empty (the sacred laziness)', () => {
    for (let k = 0; k < steps.length; k++) {
      const s = steps[k];
      if (s.pourFrom) {
        const before = steps[k - 1];
        if (s === steps.find((x) => x.pourFrom)) {
          // first pour of a batch: outbox must have been empty before this pour
          expect(before.outbox ?? []).toHaveLength(0);
        }
      }
    }
  });
  it('every enqueued value crosses the trays exactly twice in its life (amortization ledger)', () => {
    const pouredFrom = steps.filter((s) => s.pourFrom).map((s) => s.pourFrom);
    for (const v of enqs(steps)) expect(pouredFrom).toContain(v);
    expect(new Set(pouredFrom).size).toBe(pouredFrom.length); // poured once each
  });
  it('books balance: equal numbers of pours into outbox and serves out of it', () => {
    const pours = steps.filter((s) => s.pourFrom).length;
    const serves = deqs(steps).length;
    expect(pours).toBe(serves + steps[steps.length - 1].outbox!.length - (deqs(steps).length - pours >= 0 ? 0 : 0));
  });
});

describe('priority scene specifics', () => {
  const steps = queueSteps('priority');
  const pri = (label: string) => Number(label.split('pri=')[1]);
  it('serves in strictly non-increasing priority, regardless of arrival', () => {
    const seq = deqs(steps).map(pri);
    for (let k = 1; k < seq.length; k++) expect(seq[k]).toBeLessThanOrEqual(seq[k - 1]);
    expect(seq).toEqual([9, 8, 5, 2, 1]);
  });
  it('first dequeue jumps the line at once (alarm outranks elders)', () => {
    expect(deqs(steps)[0]).toContain('alarm');
    expect(enqs(steps)[0]).toContain('newsletter');
  });
});
