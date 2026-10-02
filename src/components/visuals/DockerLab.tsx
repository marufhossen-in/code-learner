import { useReducer, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { DEFAULT_DOCKERFILE } from './dockerSim';
import type { DockerAction, DockerState } from './dockerSim';
import { dockerReducer, initialDockerState } from './dockerSim';

/** Docker Visualizer (Section 11): Dockerfile → layers/cache → image → container → network. */

interface Sim {
  state: DockerState;
  last: { cmd: string; out: string[]; caption: { en: string; bn: string }; ok: boolean } | null;
}

function reducer(s: Sim, a: DockerAction): Sim {
  const r = dockerReducer(s.state, a);
  return { state: r.state, last: { cmd: r.cmd, out: r.out, caption: r.caption, ok: r.ok } };
}

const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface disabled:hover:border-border';

function Panel({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-surface">
      <div className="border-b border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">
        {icon} {title}
      </div>
      <div className="flex-1 p-2">{children}</div>
    </div>
  );
}

export function DockerLab() {
  const { T } = useI18n();
  const [sim, dispatch] = useReducer(reducer, { state: initialDockerState(), last: null });
  const [dockerfile, setDockerfile] = useState(DEFAULT_DOCKERFILE);
  const [tag, setTag] = useState('myapp:v1');
  const [withVolume, setWithVolume] = useState(false);
  const s = sim.state;

  const act = (a: DockerAction) => () => dispatch(a);
  const running = s.containers.filter((c) => c.status === 'running');
  const lastImage = s.images[s.images.length - 1];
  const totalSize = useMemo(
    () => (lastImage ? lastImage.layers.reduce((sum, l) => sum + l.size, 0) : 0),
    [lastImage],
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* flow hint + caption */}
      {sim.last && (
        <p key={sim.last.cmd + sim.last.out.length} className={`fade-up border-b border-border px-3 py-2 text-sm ${sim.last.ok ? 'bg-accent/5' : 'bg-err/5'}`}>
          <code className="mr-2 rounded bg-elev px-1.5 py-0.5 font-mono text-xs">{sim.last.cmd}</code>
          {T(sim.last.caption)}
        </p>
      )}

      <div className="grid gap-3 p-3 lg:grid-cols-2">
        {/* Dockerfile editor */}
        <Panel title={T({ en: 'Dockerfile (text)', bn: 'Dockerfile (টেক্সট)' })} icon="📄">
          <textarea
            value={dockerfile}
            onChange={(e) => setDockerfile(e.target.value)}
            className="codeblock h-48 w-full resize-y rounded-lg border border-border p-2 font-mono text-xs leading-5 outline-none focus:border-accent/60 scrolly"
            spellCheck={false}
            aria-label="Dockerfile editor"
          />
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value.replace(/\s/g, ''))}
              className="w-28 rounded-lg border border-border bg-bg px-2 py-1.5 font-mono text-xs"
              aria-label="image tag"
            />
            <button type="button" className={btn} onClick={act({ type: 'build', lines: dockerfile.split('\n'), name: tag || 'myapp:latest' })}>
              docker build -t {tag || 'myapp:latest'} .
            </button>
            <button type="button" className={btn} onClick={() => setDockerfile(DEFAULT_DOCKERFILE)}>
              {T({ en: 'reset file', bn: 'রিসেট' })}
            </button>
          </div>
        </Panel>

        {/* terminal */}
        <Panel title={T({ en: 'daemon output', bn: 'ডিমন আউটপুট' })} icon="🖥️">
          <div className="codeblock h-56 overflow-y-auto rounded-lg p-2 font-mono text-[11px] leading-5 scrolly" role="log" aria-label="build output">
            {sim.last ? (
              sim.last.out.map((l, i) => (
                <div key={i} className={l.includes('Using cache') ? 'text-ok' : l.includes('Successfully') ? 'font-bold text-accent' : l.includes('unknown instruction') || l.includes('Error') || l.includes('must be FROM') ? 'text-err' : 'text-text/80'}>
                  {l}
                </div>
              ))
            ) : (
              <span className="text-muted/60">
                {T({ en: '# build output appears here — press docker build', bn: '# বিল্ড আউটপুট এখানে আসবে — docker build চাপুন' })}
              </span>
            )}
          </div>
        </Panel>

        {/* images + layer stack */}
        <Panel title={T({ en: 'images + layer stack', bn: 'ইমেজ + লেয়ার স্তূপ' })} icon="🥞">
          {s.images.length === 0 ? (
            <p className="p-1 text-xs italic text-muted">{T({ en: 'no images yet — build one', bn: 'ইমেজ নেই — বিল্ড করুন' })}</p>
          ) : (
            <>
              <ul className="mb-2 space-y-1">
                {s.images.map((im) => (
                  <li key={im.id} className="flex items-center gap-2 font-mono text-xs">
                    <span className="font-bold text-accent-2">{im.name}</span>
                    <span className="text-muted">({im.id}, {im.layers.length} {T({ en: 'layers', bn: 'লেয়ার' })})</span>
                    <button type="button" className={btn} onClick={act({ type: 'run', image: im.name, withVolume })}>docker run</button>
                    <button type="button" className={btn} onClick={act({ type: 'rmi', id: im.id })}>rmi</button>
                  </li>
                ))}
              </ul>
              {lastImage && (
                <div className="space-y-1 font-mono text-[11px]" aria-label="layer stack">
                  {[...lastImage.layers].reverse().map((l, i) => (
                    <div
                      key={i}
                      className="fade-up flex items-center justify-between rounded-md border px-2 py-1"
                      style={{
                        borderColor: l.cached ? 'var(--ok)' : 'var(--border)',
                        background: l.cached ? 'var(--elev)' : 'transparent',
                        opacity: 1 - i * 0.06,
                      }}
                    >
                      <span className="truncate text-text/85">{l.instruction}</span>
                      <span className="ml-2 shrink-0 text-muted">
                        {l.cached && <span className="mr-1 rounded bg-ok/15 px-1 font-bold" style={{ color: 'var(--ok)' }}>CACHED</span>}
                        {l.size}MB
                      </span>
                    </div>
                  ))}
                  <div className="pt-1 text-right text-muted">
                    {T({ en: 'total', bn: 'মোট' })}: {totalSize}MB · {lastImage.layers.filter((l) => l.cached).length}/{lastImage.layers.length} {T({ en: 'cached', bn: 'ক্যাশড' })}
                  </div>
                </div>
              )}
            </>
          )}
        </Panel>

        {/* containers + network */}
        <Panel title={T({ en: 'docker ps -a', bn: 'docker ps -a' })} icon="📦">
          <label className="mb-2 flex items-center gap-2 font-mono text-[11px] text-muted">
            <input type="checkbox" checked={withVolume} onChange={(e) => setWithVolume(e.target.checked)} />
            -v $(pwd)/data:/app/data
          </label>
          {s.containers.length === 0 ? (
            <p className="p-1 text-xs italic text-muted">{T({ en: 'no containers — run an image', bn: 'কন্টেইনার নেই — ইমেজ রান করুন' })}</p>
          ) : (
            <ul className="space-y-1.5">
              {s.containers.map((c) => (
                <li key={c.id} className="fade-up flex flex-wrap items-center gap-2 rounded-lg border border-border px-2 py-1.5 font-mono text-xs">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: c.status === 'running' ? 'var(--ok)' : 'var(--muted)' }}
                    title={c.status}
                  />
                  <span className="font-bold">{c.name}</span>
                  <span className="text-muted">{c.image}</span>
                  {c.port && <span className="rounded bg-elev px-1">{c.port}</span>}
                  {c.volume && <span className="rounded bg-elev px-1 text-accent-2">📂 volume</span>}
                  <span className={`rounded px-1 text-[10px] font-bold uppercase ${c.status === 'running' ? 'text-ok' : 'text-muted'}`}>{c.status}</span>
                  <span className="ml-auto flex gap-1">
                    {c.status === 'running' ? (
                      <button type="button" className={btn} onClick={act({ type: 'stop', id: c.id })}>stop</button>
                    ) : (
                      <button type="button" className={btn} onClick={act({ type: 'start', id: c.id })}>start</button>
                    )}
                    <button type="button" className={btn} onClick={act({ type: 'rm', id: c.id })}>rm</button>
                  </span>
                </li>
              ))}
            </ul>
          )}
          {/* bridge network */}
          <div className="mt-3 rounded-lg border border-dashed border-border p-2">
            <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted">🌐 bridge network</div>
            {running.length === 0 ? (
              <p className="text-xs italic text-muted">{T({ en: 'empty — start containers', bn: 'খালি — কন্টেইনার চালু করুন' })}</p>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                {running.map((c) => (
                  <span key={c.id} className="rounded-md border border-accent2/50 px-2 py-1 font-mono text-[11px]" style={{ color: 'var(--accent-2)' }}>
                    {c.name}
                  </span>
                ))}
                {running.length >= 2 && (
                  <span className="w-full text-[11px] text-muted">
                    {T({
                      en: `running peers resolve each other BY NAME — e.g. ping ${running[0].name}`,
                      bn: `চলমান কন্টেইনাররা নাম দিয়েই একে অপরকে চেনে — যেমন ping ${running[0].name}`,
                    })}
                  </span>
                )}
              </div>
            )}
          </div>
        </Panel>
      </div>

      <p className="border-t border-border px-3 pb-3 pt-2 text-sm text-muted">
        {T({
          en: 'Try: build → rebuild unchanged (all CACHED) → change one middle line → rebuild (cache breaks from that line) → run twice (two containers, one image) → stop → rm → rmi.',
          bn: 'চেষ্টা করুন: build → অপরিবর্তিত rebuild (সব CACHED) → মাঝের এক লাইন বদলান → rebuild (সেই লাইন থেকে ক্যাশ ভাঙে) → দুইবার run (দুই কন্টেইনার, এক ইমেজ) → stop → rm → rmi।',
        })}
      </p>
    </div>
  );
}
