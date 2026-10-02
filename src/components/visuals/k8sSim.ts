import type { LText } from '../../lib/types';

export interface K8sPod {
  id: string;
  image: string;
  cpu: number;
  mem: number;
  node: string | null;
  phase: 'Pending' | 'Running';
  ready: boolean;
  labels: Record<string, string>;
  tolerations: string[];
}

export interface K8sNode {
  name: string;
  cpuCap: number;
  memCap: number;
  taints: string[];
  ready: boolean;
}

export interface K8sSvc {
  name: string;
  selector: Record<string, string>;
}

export interface K8sDeployment {
  name: string;
  image: string;
  replicas: number;
  cpu: number;
  mem: number;
  labels: Record<string, string>;
  tolerations: string[];
}

export interface K8sState {
  nodes: K8sNode[];
  pods: K8sPod[];
  services: K8sSvc[];
  deployments: K8sDeployment[];
  spilled: number;
  clock: number;
}

export type K8sAction =
  | { type: 'apply'; name: string; image: string; replicas: number; cpu: number; mem: number; labels: Record<string, string>; tolerations?: string[] }
  | { type: 'scale'; name: string; replicas: number }
  | { type: 'schedule' }
  | { type: 'crash'; node: string }
  | { type: 'service'; name: string; selector: Record<string, string> }
  | { type: 'probe'; podId: string; ok: boolean }
  | { type: 'rollout'; name: string; image: string };

export interface K8sResult {
  state: K8sState;
  cmd: string;
  out: string[];
  caption: LText;
  ok: boolean;
}

export function initialK8sState(): K8sState {
  return {
    nodes: [
      { name: 'node-a', cpuCap: 4000, memCap: 8192, taints: [], ready: true },
      { name: 'node-b', cpuCap: 2000, memCap: 4096, taints: [], ready: true },
      { name: 'node-c', cpuCap: 2000, memCap: 8192, taints: ['dedicated=db'], ready: true },
    ],
    pods: [],
    services: [],
    deployments: [],
    spilled: 0,
    clock: 0,
  };
}

export const DEFAULT_DEPLOY = {
  name: 'ledger-api',
  image: 'myapp:1.2',
  replicas: 3,
  cpu: 1000,
  mem: 1024,
  labels: { app: 'ledger-api' },
};

let podSeq = 0;
function spawnPod(d: K8sDeployment): K8sPod {
  podSeq += 1;
  return {
    id: `${d.name}-${podSeq.toString(36).padStart(3, '0')}`,
    image: d.image,
    cpu: d.cpu,
    mem: d.mem,
    node: null,
    phase: 'Pending',
    ready: false,
    labels: { ...d.labels },
    tolerations: [...d.tolerations],
  };
}

export function nodeLoad(st: K8sState, node: string): { cpu: number; mem: number } {
  return st.pods
    .filter((p) => p.node === node && p.phase === 'Running')
    .reduce((a, p) => ({ cpu: a.cpu + p.cpu, mem: a.mem + p.mem }), { cpu: 0, mem: 0 });
}

export function fits(st: K8sState, pod: K8sPod, node: K8sNode): true | string {
  if (!node.ready) return `${node.name}: NotReady — kubelet is unreachable, the node votes for nothing`;
  const taint = node.taints.find((ti) => !pod.tolerations.includes(ti));
  if (taint) return `${node.name}: taint ${taint} repels the pod — no toleration in its manifest`;
  const load = nodeLoad(st, node.name);
  if (load.cpu + pod.cpu > node.cpuCap) return `${node.name}: cpu requests ${load.cpu + pod.cpu}m of ${node.cpuCap}m — the arithmetic refuses`;
  if (load.mem + pod.mem > node.memCap) return `${node.name}: memory requests ${load.mem + pod.mem}Mi of ${node.memCap}Mi — the arithmetic refuses`;
  return true;
}

function svcSelectorMatches(svc: K8sSvc, pod: K8sPod): boolean {
  return Object.entries(svc.selector).every(([k, v]) => pod.labels[k] === v);
}

export function endpoints(st: K8sState, svcName: string): string[] {
  const svc = st.services.find((s) => s.name === svcName);
  if (!svc) return [];
  return st.pods
    .filter((p) => p.phase === 'Running' && p.ready && svcSelectorMatches(svc, p))
    .map((p) => p.id);
}

function reconcile(st: K8sState, out: string[]): K8sState {
  const next = { ...st, pods: [...st.pods] };
  for (const d of next.deployments) {
    const alive = next.pods.filter((p) => svcSelectorMatches({ name: '', selector: d.labels }, p));
    const deficit = d.replicas - alive.length;
    if (deficit > 0) {
      for (let i = 0; i < deficit; i++) next.pods.push(spawnPod(d));
      out.push(`deployment/${d.name}: observed ${alive.length}/${d.replicas} — the controller files ${deficit} replacement claim(s) with the queue`);
    }
  }
  return next;
}

export function k8sReducer(prev: K8sState, action: K8sAction): K8sResult {
  const clock = prev.clock + 1;
  switch (action.type) {
    case 'apply': {
      if (prev.deployments.some((d) => d.name === action.name)) {
        return {
          state: prev,
          cmd: `kubectl apply -f ${action.name}.yaml`,
          out: [`error: deployment ${action.name} already lives in the register — change its spec and apply again`],
          caption: { en: 'The register refuses a second birth under one name.', bn: 'এক নামে দ্বিতীয় জন্ম রওকদারি দিতে রাজি নয়।' },
          ok: false,
        };
      }
      const d: K8sDeployment = {
        name: action.name,
        image: action.image,
        replicas: action.replicas,
        cpu: action.cpu,
        mem: action.mem,
        labels: { ...action.labels },
        tolerations: [...(action.tolerations ?? [])],
      };
      const pods = Array.from({ length: d.replicas }, () => spawnPod(d));
      const state: K8sState = { ...prev, deployments: [...prev.deployments, d], pods: [...prev.pods, ...pods], clock };
      return {
        state,
        cmd: `kubectl apply -f ${d.name}.yaml`,
        out: [
          `deployment/${d.name} desired state WRITTEN to etcd: ${d.replicas} × ${d.image} (requests ${d.cpu}m/${d.mem}Mi)`,
          `${pods.map((p) => p.id).join(', ')} — filed as records, not yet as processes: every pod Pending`,
        ],
        caption: { en: 'Desire is written; reality has not conceded yet.', bn: 'ইচ্ছা লেখা হলো; বাস্তব এখনো রাজি হয়নি।' },
        ok: true,
      };
    }
    case 'schedule': {
      const out: string[] = [];
      const pods = prev.pods.map((p) => ({ ...p }));
      let bound = 0;
      for (const p of pods) {
        if (p.phase !== 'Pending') continue;
        let landed = false;
        for (const n of prev.nodes) {
          const verdict = fits({ ...prev, pods }, p, n);
          if (verdict === true) {
            p.node = n.name;
            p.phase = 'Running';
            p.ready = true;
            bound += 1;
            out.push(`${p.id} → ${n.name} (requests ${p.cpu}m/${p.mem}Mi reserved against its capacity — the arithmetic conceded)`);
            landed = true;
            break;
          }
        }
        if (!landed) {
          out.push(`${p.id} stays Pending: ${prev.nodes.map((n) => fits({ ...prev, pods }, p, n)).join(' · ')}`);
        }
      }
      if (bound === 0 && !pods.some((p) => p.phase === 'Pending')) out.push('scheduler cycle: nothing pending — the ledger and the fleet already agree');
      const state: K8sState = { ...prev, pods: [...pods], clock };
      return {
        state,
        cmd: '# scheduler cycle (watch: pods unbound → the queue re-tries every beat)',
        out,
        caption: { en: 'The scheduler pays every Pending pod a verdict or a chair.', bn: 'সূচক প্রতি Pending পডকে দেয় একটি রায় নয়তো একটি আসন।' },
        ok: true,
      };
    }
    case 'scale': {
      const d = prev.deployments.find((x) => x.name === action.name);
      if (!d)
        return {
          state: prev,
          cmd: `kubectl scale deployment/${action.name} --replicas=${action.replicas}`,
          out: [`error: ${action.name} not found — scale needs a register row first`],
          caption: { en: 'You cannot rescale a desire that was never written.', bn: 'যে ইচ্ছা কখনো লেখাই হয়নি, তা আকার বদলানো যায় না।' },
          ok: false,
        };
      const deployments = prev.deployments.map((x) => (x.name === d.name ? { ...x, replicas: Math.max(0, action.replicas) } : x));
      const mine = prev.pods.filter((p) => svcSelectorMatches({ name: '', selector: d.labels }, p));
      const surplus = mine.length - Math.max(0, action.replicas);
      let pods = [...prev.pods];
      const out: string[] = [`deployment/${d.name} desired state REWRITTEN: ${mine.length} → ${Math.max(0, action.replicas)}`];
      if (surplus > 0) {
        const doomed = [...mine].sort((a, b) => (a.phase === b.phase ? 0 : a.phase === 'Running' ? -1 : 1)).slice(0, surplus);
        pods = pods.filter((p) => !doomed.some((x) => x.id === p.id));
        out.push(`controller retires (SIGTERM, grace observed): ${doomed.map((x) => x.id).join(', ')}`);
      } else if (surplus < 0) {
        for (let i = 0; i < -surplus; i++) pods.push(spawnPod({ ...d, replicas: action.replicas }));
        out.push(`controller files ${-surplus} new claim(s), all Pending until the next schedule cycle`);
      } else {
        out.push('no delta — desired and observed already sign the same number');
      }
      const state: K8sState = { ...prev, deployments, pods, clock };
      return {
        state,
        cmd: `kubectl scale deployment/${d.name} --replicas=${action.replicas}`,
        out,
        caption: { en: 'Scale is a rewrite of desire; the controller settles the bill.', bn: 'স্কেল হলো ইচ্ছার পুনর্লেখন; হিসাব মেটে কন্ট্রোলার।' },
        ok: true,
      };
    }
    case 'crash': {
      const nodes = prev.nodes.map((n) => (n.name === action.node ? { ...n, ready: false } : n));
      const doomed = prev.pods.filter((p) => p.node === action.node);
      let pods = prev.pods.filter((p) => p.node !== action.node);
      const out: string[] = [
        `${action.node}: kubelet silent for 40s — the node controller votes it NotReady; its pods are ruled feral, not dead`,
      ];
      let st: K8sState = { ...prev, nodes, pods, clock };
      st = reconcile(st, out);
      pods = st.pods;
      if (doomed.length === 0) out.push('no workloads were hosted there — the storm cost nothing but a gray card');
      return {
        state: st,
        cmd: `# node failure (power, kernel, cloud reclaim)`,
        out,
        caption: { en: 'A node dies; the register remembers; the queue re-files.', bn: 'একটি নোড মরে; রওকদারি মনে রাখে; সারি পুনদাখিল করে।' },
        ok: true,
      };
    }
    case 'service': {
      if (prev.services.some((s) => s.name === action.name)) {
        return {
          state: prev,
          cmd: `kubectl apply -f svc-${action.name}.yaml`,
          out: [`error: service ${action.name} already named in the ledger`],
          caption: { en: 'One name, one contract — duplicates refused.', bn: 'একটি নাম, একটি চুক্তি — সদৃশ প্রত্যাখ্যাত।' },
          ok: false,
        };
      }
      const services = [...prev.services, { name: action.name, selector: { ...action.selector } }];
      const state: K8sState = { ...prev, services, clock };
      const eps = endpoints(state, action.name);
      return {
        state,
        cmd: `kubectl apply -f svc-${action.name}.yaml`,
        out: [
          `service/${action.name} born: a STABLE cluster name + virtual IP, selector ${JSON.stringify(action.selector)}`,
          `endpoints now ${eps.length ? '[' + eps.join(', ') + ']' : '[] — an honest empty set until pods prove readiness'}`,
        ],
        caption: { en: 'The name is immortal; the backends are weather.', bn: 'নাম অমর; ব্যাকএন্ডগুলো আবহাওয়া।' },
        ok: true,
      };
    }
    case 'probe': {
      const pods = prev.pods.map((p) => (p.id === action.podId ? { ...p, ready: action.ok } : p));
      const state: K8sState = { ...prev, pods, clock };
      const touched = prev.services.map((svc) => `${svc.name}: [${endpoints(state, svc.name).join(', ')}]`);
      return {
        state,
        cmd: `# readiness probe flips on ${action.podId}`,
        out: [
          `${action.podId} readiness → ${action.ok ? 'true' : 'false'} (kubelet asks the probe every interval; the pod is NOT restarted — only de-listed)`,
          ...touched.map((t) => `endpoints ${t}`),
        ],
        caption: { en: 'Readiness is a subscription to the endpoint list, nothing more.', bn: 'প্রস্তুতি হলো এন্ডপয়েন্ট-তালিকার সাবস্ক্রিপশন, আর কিছু নয়।' },
        ok: true,
      };
    }
    case 'rollout': {
      const d = prev.deployments.find((x) => x.name === action.name);
      if (!d)
        return {
          state: prev,
          cmd: `kubectl set image deployment/${action.name} app=${action.image}`,
          out: [`error: ${action.name} not found`],
          caption: { en: 'No deployment, no rollout.', bn: 'ডিপ্লয়মেন্ট নেই, রোলআউটও নেই।' },
          ok: false,
        };
      const deployments = prev.deployments.map((x) => (x.name === d.name ? { ...x, image: action.image } : x));
      const out: string[] = [`deployment/${d.name} spec image REWRITTEN: ${d.image} → ${action.image} (maxUnavailable 1, maxSurge 1)`];
      let pods = [...prev.pods];
      const mine = pods.filter((p) => svcSelectorMatches({ name: '', selector: d.labels }, p));
      for (const old of mine) {
        const fresh: K8sPod = { ...spawnPod({ ...d, image: action.image }), image: action.image };
        if (old.node) {
          const node = prev.nodes.find((n) => n.name === old.node)!;
          if (node.ready && fits({ ...prev, pods }, { ...fresh, cpu: d.cpu, mem: d.mem }, node) === true) {
            fresh.node = old.node;
            fresh.phase = 'Running';
            fresh.ready = true;
            out.push(`surge: ${fresh.id} (${action.image}) born Ready on ${fresh.node}, THEN ${old.id} retires — capacity never dipped below ${d.replicas}`);
          } else {
            out.push(`${fresh.id} (${action.image}) Pending — no chair yet; ${old.id} keeps serving meanwhile`);
          }
          pods = pods.filter((p) => p.id !== old.id);
          pods.push(fresh);
        } else {
          pods = pods.filter((p) => p.id !== old.id);
          pods.push(fresh);
          out.push(`${old.id} was unbound; ${fresh.id} takes its place in the queue with the new image`);
        }
      }
      const state: K8sState = { ...prev, deployments, pods, clock };
      return {
        state,
        cmd: `kubectl set image deployment/${d.name} app=${action.image}`,
        out,
        caption: { en: 'A rollout is one register rewrite, retired pod by pod.', bn: 'রোলআউট হলো একটি রওকদারি-পুনর্লেখন, পড ধরে অবসরকৃত।' },
        ok: true,
      };
    }
  }
}
