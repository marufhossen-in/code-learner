import type { LText } from '../../lib/types';

/** Pure load-balancer simulation (Section 11): arrivals → algorithm → servers, tick by tick. */

export interface ServerState {
  id: number;
  name: string;
  capacity: number;
  active: number;
  done: number;
  dropped: number;
  up: boolean;
}
export interface LBState {
  servers: ServerState[];
  tick: number;
  rr: number;
  seed: number;
  totalArrivals: number;
  totalDone: number;
  totalDropped: number;
}

export type Algo = 'round-robin' | 'least-connections' | 'random';

export type Outcome = 'routed' | 'dropped-full' | 'dropped-down';

export interface Assignment {
  serverId: number | null;
  outcome: Outcome;
}

export interface TickResult {
  state: LBState;
  assignments: Assignment[];
  completed: number;
}

export function initialLBState(serverCount = 3, capacity = 10): LBState {
  return {
    servers: Array.from({ length: serverCount }, (_, i) => ({
      id: i + 1,
      name: `app-${i + 1}`,
      capacity,
      active: 0,
      done: 0,
      dropped: 0,
      up: true,
    })),
    tick: 0,
    rr: 0,
    seed: 42,
    totalArrivals: 0,
    totalDone: 0,
    totalDropped: 0,
  };
}

export function throughput(s: ServerState): number {
  return Math.max(1, Math.round(s.capacity / 3));
}

function nextSeed(seed: number): number {
  return (seed * 1103515245 + 12345) % 2147483648;
}

/** Pick a server among the UP ones; returns its id or null when none are up. */
export function pick(algo: Algo, servers: ServerState[], state: LBState): number | null {
  const up = servers.filter((s) => s.up);
  if (up.length === 0) return null;
  switch (algo) {
    case 'round-robin':
      return up[state.rr % up.length].id;
    case 'least-connections': {
      let best = up[0];
      for (const s of up) if (s.active < best.active) best = s;
      return best.id;
    }
    case 'random':
      return up[state.seed % up.length].id;
    default:
      return up[0].id;
  }
}

export function tick(prev: LBState, algo: Algo, arrivals: number): TickResult {
  const s: LBState = structuredClone(prev);
  s.tick += 1;
  const assignments: Assignment[] = [];

  // 1 — route each new request
  for (let i = 0; i < arrivals; i++) {
    s.totalArrivals += 1;
    s.seed = nextSeed(s.seed);
    const chosenId = pick(algo, s.servers, s);
    if (chosenId === null) {
      assignments.push({ serverId: null, outcome: 'dropped-down' });
      s.totalDropped += 1;
      continue;
    }
    const srv = s.servers.find((x) => x.id === chosenId)!;
    if (srv.active >= srv.capacity) {
      assignments.push({ serverId: srv.id, outcome: 'dropped-full' });
      srv.dropped += 1;
      s.totalDropped += 1;
      continue;
    }
    srv.active += 1;
    assignments.push({ serverId: srv.id, outcome: 'routed' });
    if (algo === 'round-robin') s.rr += 1;
  }

  // 2 — servers work through their in-flight requests
  let completed = 0;
  for (const srv of s.servers) {
    if (!srv.up) continue;
    const finish = Math.min(srv.active, throughput(srv));
    srv.active -= finish;
    srv.done += finish;
    s.totalDone += finish;
    completed += finish;
  }

  return { state: s, assignments, completed };
}

export function toggleServer(prev: LBState, id: number): { state: LBState; note: LText } {
  const s: LBState = structuredClone(prev);
  const srv = s.servers.find((x) => x.id === id);
  if (!srv) return { state: s, note: { en: 'No such server.', bn: 'এমন সার্ভার নেই।' } };
  srv.up = !srv.up;
  return {
    state: s,
    note: srv.up
      ? { en: `${srv.name} is HEALTHY again — health checks pass, traffic resumes.`, bn: `${srv.name} আবার সুস্থ — হেলথ চেক পাস, ট্রাফিক ফিরছে।` }
      : { en: `${srv.name} DOWN — the balancer stops sending it traffic; its ${srv.active} in-flight requests are GONE with it.`, bn: `${srv.name} বন্ধ — ব্যালান্সার আর ট্রাফিক পাঠাচ্ছে না; এর ${srv.active}টি চলমান রিকোয়েস্ট সঙ্গে সঙ্গেই হারিয়ে গেল (এই যে বাস্তবতা — চলমান কাজ)।` },
  };
}

export function addServer(prev: LBState, max = 6): { state: LBState; note: LText } {
  const s: LBState = structuredClone(prev);
  if (s.servers.length >= max) {
    return { state: s, note: { en: 'Pool is full for this lab.', bn: 'এই ল্যাবে পুল পূর্ণ।' } };
  }
  const id = Math.max(...s.servers.map((x) => x.id), 0) + 1;
  s.servers.push({ id, name: `app-${id}`, capacity: 10, active: 0, done: 0, dropped: 0, up: true });
  return {
    state: s,
    note: { en: `${`app-${id}`} joined the pool — new traffic flows to it on the next tick (horizontal scaling!).`, bn: `app-${id} পুলে যোগ দিলো — পরের টিক থেকেই নতুন ট্রাফিক পাবে (হরিজন্টাল স্কেলিং!)।` },
  };
}

export const TRAFFIC_RATES = [
  { label: 'trickle', arrivals: 4 },
  { label: 'normal', arrivals: 12 },
  { label: 'flood', arrivals: 40 },
];
