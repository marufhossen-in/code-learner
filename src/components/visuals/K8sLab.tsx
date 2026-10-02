import { useReducer, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import type { K8sAction, K8sState } from './k8sSim';
import { DEFAULT_DEPLOY, endpoints, initialK8sState, k8sReducer, nodeLoad } from './k8sSim';

/** Kubernetes Visualizer: desire (etcd) → queue → scheduler verdicts → the name contract. */

interface Sim {
  state: K8sState;
  last: { cmd: string; out: string[]; caption: { en: string; bn: string }; ok: boolean } | null;
}

function reducer(s: Sim, a: K8sAction): Sim {
  const r = k8sReducer(s.state, a);
  return { state: r.state, last: { cmd: r.cmd, out: r.out, caption: r.caption, ok: r.ok } };
}

const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface disabled:hover:border-border';

function Bar({ label, used, cap }: { label: string; used: number; cap: number }) {
  const pct = Math.min(100, Math.round((used / cap) * 100));
  return (
    <div className="mt-1">
      <div className="flex justify-between font-mono text-[10px] text-muted">
        <span>{label}</span>
        <span>
          {used} / {cap} ({pct}%)
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded bg-elev">
        <div className={`h-full transition-all duration-500 ${pct > 90 ? 'bg-err' : pct > 60 ? 'bg-warn' : 'bg-ok'}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function K8sLab() {
  const { T } = useI18n();
  const [sim, dispatch] = useReducer(reducer, { state: initialK8sState(), last: null });
  const [probeFlip, setProbeFlip] = useState(0);
  const s = sim.state;
  const act = (a: K8sAction) => () => dispatch(a);

  const applied = s.deployments.length > 0;
  const svc = s.services[0];
  const readyPods = s.pods.filter((p) => p.phase === 'Running');
  const pending = s.pods.filter((p) => p.phase === 'Pending');
  const probeVictim = readyPods[probeFlip % Math.max(1, readyPods.length)];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {sim.last && (
        <p key={sim.last.cmd + s.clock} className={`fade-up border-b border-border px-3 py-2 text-sm ${sim.last.ok ? 'bg-accent/5' : 'bg-err/5'}`}>
          <code className="mr-2 rounded bg-elev px-1.5 py-0.5 font-mono text-xs">{sim.last.cmd}</code>
          {T(sim.last.caption)}
        </p>
      )}

      <div className="grid gap-3 p-3 lg:grid-cols-5">
        {/* control room */}
        <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-3 lg:col-span-2">
          <div className="text-[11px] font-bold uppercase tracking-wide text-muted">
            🎛️ {T({ en: 'control room: desire, queue, verdicts', bn: 'নিয়ন্ত্রণ-কক্ষ: ইচ্ছা, সারি, রায়' })}
          </div>
          <div className="flex flex-wrap gap-2">
            <button className={btn} disabled={applied} onClick={act({ type: 'apply', ...DEFAULT_DEPLOY })}>
              kubectl apply -f ledger-api.yaml
            </button>
            <button className={btn} disabled={!applied || pending.length === 0} onClick={act({ type: 'schedule' })}>
              # scheduler cycle
            </button>
            <button className={btn} disabled={!applied} onClick={act({ type: 'scale', name: 'ledger-api', replicas: 5 })}>
              kubectl scale --replicas=5
            </button>
            <button className={btn} disabled={!applied} onClick={act({ type: 'scale', name: 'ledger-api', replicas: 1 })}>
              kubectl scale --replicas=1
            </button>
            <button className={btn} disabled={!svc && !applied} onClick={svc ? undefined : act({ type: 'service', name: 'ledger-api', selector: { app: 'ledger-api' } })}>
              kubectl apply -f svc.yaml
            </button>
            <button
              className={btn}
              disabled={readyPods.length === 0}
              onClick={() => {
                setProbeFlip((n) => n + 1);
                if (probeVictim) dispatch({ type: 'probe', podId: probeVictim.id, ok: !probeVictim.ready });
              }}
            >
              # probe flips on {probeVictim ? probeVictim.id : '…'}
            </button>
            <button className={btn} disabled={!applied} onClick={act({ type: 'rollout', name: 'ledger-api', image: 'myapp:1.3' })}>
              kubectl set image … myapp:1.3
            </button>
            <button className={btn} disabled={!s.nodes[0].ready} onClick={act({ type: 'crash', node: 'node-a' })}>
              ⚡ crash node-a
            </button>
          </div>
          <div className="rounded-lg border border-dashed border-border p-2 text-xs text-muted">
            {T({
              en: `default manifest: ${DEFAULT_DEPLOY.replicas} replicas × ${DEFAULT_DEPLOY.image}, requests ${DEFAULT_DEPLOY.cpu}m cpu / ${DEFAULT_DEPLOY.mem}Mi mem — change nothing; watch the register, the queue and the endpoints argue it out.`,
              bn: `ডিফল্ট-ম্যানিফেস্ট: ${DEFAULT_DEPLOY.replicas} রেপ্লিকা × ${DEFAULT_DEPLOY.image}, অনুরোধ ${DEFAULT_DEPLOY.cpu}m cpu / ${DEFAULT_DEPLOY.mem}Mi মেম — কিছু বদলাবেন না; রওকদারি, সারি আর এন্ডপয়েন্টের তর্ক দেখুন।`,
            })}
          </div>
          {/* event log */}
          <div className="min-h-32 flex-1 overflow-auto rounded-lg bg-elev p-2 font-mono text-[11px] leading-5">
            {sim.last ? (
              sim.last.out.map((line, i) => (
                <div key={i} className={line.includes('error') || line.includes('NotReady') ? 'text-err' : line.includes('Pending') ? 'text-warn' : ''}>
                  {line}
                </div>
              ))
            ) : (
              <div className="text-muted">
                {T({ en: '# event log — apply the deployment to wake the register', bn: '# ইভেন্ট-লগ — রওকদারি জাগাতে ডিপ্লয়মেন্ট অ্যাপ্লাই করুন' })}
              </div>
            )}
          </div>
        </div>

        {/* cluster board */}
        <div className="flex flex-col gap-2 lg:col-span-3">
          <div className="text-[11px] font-bold uppercase tracking-wide text-muted">
            🏗️ {T({ en: 'the fleet: chairs, claims and the gray card', bn: 'বহর: আসন, দাবি আর ধূসর-কার্ড' })}
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {s.nodes.map((n) => {
              const load = nodeLoad(s, n.name);
              const hosted = s.pods.filter((p) => p.node === n.name);
              return (
                <div key={n.name} className={`rounded-xl border p-2 ${n.ready ? 'border-border bg-surface' : 'border-err/50 bg-err/5 opacity-70'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold">{n.name}</span>
                    <span className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${n.ready ? 'bg-ok/15 text-ok' : 'bg-err/15 text-err'}`}>
                      {n.ready ? 'Ready' : 'NotReady'}
                    </span>
                  </div>
                  {n.taints.length > 0 && (
                    <div className="mt-1 rounded bg-warn/10 px-1.5 py-0.5 font-mono text-[10px] text-warn">⛔ {n.taints.join(', ')}</div>
                  )}
                  <Bar label="cpu" used={n.ready ? load.cpu : 0} cap={n.cpuCap} />
                  <Bar label="mem" used={n.ready ? load.mem : 0} cap={n.memCap} />
                  <div className="mt-2 flex min-h-14 flex-wrap content-start gap-1">
                    {hosted.map((p) => (
                      <span
                        key={p.id}
                        className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${p.ready ? 'bg-ok/15 text-ok' : 'bg-warn/15 text-warn'}`}
                        title={p.image}
                      >
                        {p.id.replace('ledger-api-', '…')}
                      </span>
                    ))}
                    {hosted.length === 0 && <span className="text-[10px] text-muted">{T({ en: 'empty chairs', bn: 'খালি আসন' })}</span>}
                  </div>
                </div>
              );
            })}
          </div>
          {/* pending queue */}
          <div className="rounded-xl border border-dashed border-warn/40 bg-warn/5 p-2">
            <span className="text-[11px] font-bold uppercase tracking-wide text-warn">
              ⏳ {T({ en: 'pending queue: filed claims awaiting a verdict', bn: 'Pending-সারি: রায়ের অপেক্ষায় দাখিলকৃত দাবি' })}
            </span>
            <div className="mt-1 flex flex-wrap gap-1">
              {pending.map((p) => (
                <span key={p.id} className="rounded bg-warn/15 px-1.5 py-0.5 font-mono text-[10px] text-warn">
                  {p.id}
                </span>
              ))}
              {pending.length === 0 && <span className="text-[10px] text-muted">{T({ en: 'empty — desire and reality sign the same number', bn: 'খালি — ইচ্ছা আর বাস্তব একই সংখ্যায় সই করে' })}</span>}
            </div>
          </div>
          {/* endpoints ledger */}
          <div className="rounded-xl border border-border bg-surface p-2">
            <span className="text-[11px] font-bold uppercase tracking-wide text-muted">
              🪪 {T({ en: 'endpoints ledger: the immortal name, the mortal members', bn: 'এন্ডপয়েন্ট-খাতা: অমর নাম, নশ্বর সদস্য' })}
            </span>
            {svc ? (
              <div className="mt-1 font-mono text-xs">
                <div>
                  svc/{svc.name} <span className="text-muted">{JSON.stringify(svc.selector)}</span>
                </div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {endpoints(s, svc.name).map((e) => (
                    <span key={e} className="rounded bg-ok/15 px-1.5 py-0.5 text-[10px] text-ok">
                      {e}
                    </span>
                  ))}
                  {endpoints(s, svc.name).length === 0 && (
                    <span className="text-[10px] text-err">{T({ en: '[] — the name answers, the truth-set is empty', bn: '[] — নাম উত্তর দেয়, সত্য-সেট খালি' })}</span>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-1 text-[10px] text-muted">
                {T({ en: 'apply svc.yaml to mint the stable name over the rotating pods', bn: 'ঘূর্ণায়মান পডের উপর স্থিতিশীল নাম ছাপতে svc.yaml অ্যাপ্লাই করুন' })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
