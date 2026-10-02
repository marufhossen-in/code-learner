import { describe, expect, it } from 'vitest';
import type { Algo, LBState } from '../../components/visuals/lbSim';
import { addServer, initialLBState, pick, tick, toggleServer } from '../../components/visuals/lbSim';

function runTicks(state: LBState, n: number, algo: Algo = 'round-robin', arrivals = 12): LBState {
  let s = state;
  for (let i = 0; i < n; i++) s = tick(s, algo, arrivals).state;
  return s;
}

describe('load balancer (Section 11)', () => {
  it('round-robin spreads arrivals evenly across healthy servers', () => {
    const s = tick(initialLBState(), 'round-robin', 30);
    const routed = s.assignments.filter((a) => a.outcome === 'routed');
    expect(routed.filter((a) => a.serverId === 1)).toHaveLength(10);
    expect(routed.filter((a) => a.serverId === 2)).toHaveLength(10);
    expect(routed.filter((a) => a.serverId === 3)).toHaveLength(10);
  });

  it('least-connections prefers the emptiest server', () => {
    let s = initialLBState();
    s.servers[0].active = 8;
    s.servers[1].active = 2;
    // app-3 (0 in-flight) is the emptiest
    expect(pick('least-connections', s.servers, s)).toBe(3);
    const r = tick(s, 'least-connections', 4);
    // nothing should flow to the busiest server
    expect(r.assignments.every((a) => a.outcome !== 'routed' || a.serverId !== 1)).toBe(true);
  });

  it('a killed server receives no new traffic', () => {
    let r = toggleServer(initialLBState(), 1);
    expect(r.state.servers[0].up).toBe(false);
    const s = tick(r.state, 'round-robin', 20);
    expect(s.assignments.every((a) => a.serverId !== 1)).toBe(true);
    expect(r.note.bn).toContain('বন্ধ');
  });

  it('everything is dropped when every server is down', () => {
    let st = initialLBState();
    st = toggleServer(st, 1).state;
    st = toggleServer(st, 2).state;
    st = toggleServer(st, 3).state;
    const r = tick(st, 'round-robin', 5);
    expect(r.assignments.every((a) => a.outcome === 'dropped-down')).toBe(true);
    expect(r.state.totalDropped).toBe(5);
  });

  it('over-capacity arrivals are dropped (503), never queued forever', () => {
    // 25 arrivals at a single 10-slot server: 10 routed, 15 dropped,
    // then the same tick drains by throughput (10/3 ≈ 3).
    const s = tick(initialLBState(1, 10), 'round-robin', 25);
    const droppedFull = s.assignments.filter((a) => a.outcome === 'dropped-full');
    expect(droppedFull).toHaveLength(15);
    expect(s.state.totalDropped).toBe(15);
    expect(s.state.servers[0].active).toBe(7); // 10 routed − 3 processed
  });

  it('servers drain their queues — done grows tick by tick', () => {
    let s = tick(initialLBState(1, 10), 'round-robin', 10).state;
    expect(s.servers[0].active).toBe(7); // 10 in − 3 out, same tick
    const before = s.totalDone;
    s = tick(s, 'round-robin', 0).state; // idle tick: only processing
    expect(s.servers[0].active).toBe(4);
    expect(s.totalDone).toBe(before + 3);
    s = runTicks(s, 5, 'round-robin', 0);
    expect(s.servers[0].active).toBe(0);
    expect(s.totalDone).toBe(10); // everything got served eventually
  });

  it('adding a server joins it into rotation', () => {
    const joined = addServer(initialLBState());
    expect(joined.state.servers).toHaveLength(4);
    const s = tick(joined.state, 'round-robin', 40);
    expect(s.assignments.filter((a) => a.serverId === 4)).toHaveLength(10);
  });

  it('random only routes to healthy servers', () => {
    let st = toggleServer(initialLBState(), 2).state;
    const r = tick(st, 'random', 50);
    expect(r.assignments.every((a) => a.outcome !== 'routed' || (a.serverId !== null && a.serverId !== 2))).toBe(true);
  });
});
