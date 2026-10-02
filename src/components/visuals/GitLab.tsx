import { useReducer, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import type { Commit, GitAction, GitState } from './gitSim';
import { branchColor, gitReducer, initialGitState } from './gitSim';

/** Interactive Git simulator (Section 11): four zones, real commands, commit graph. */

interface Sim {
  state: GitState;
  last: { cmd: string; out: string; caption: { en: string; bn: string } } | null;
  log: { cmd: string; out: string }[];
}

function reducer(s: Sim, a: GitAction): Sim {
  const r = gitReducer(s.state, a);
  return {
    state: r.state,
    last: { cmd: r.cmd, out: r.out, caption: r.caption },
    log: [...s.log.slice(-5), { cmd: r.cmd || `$ ${a.type}`, out: r.out }],
  };
}

const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface disabled:hover:border-border';

function CommitNode({ c, branchNames, isTip }: { c: Commit; branchNames: string[]; isTip: string[] }) {
  const color = branchColor(c.branch, branchNames);
  return (
    <div className="fade-up flex items-center gap-2 font-mono text-xs" key={c.id}>
      <span
        className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 text-[9px] font-bold"
        style={{ borderColor: color, color }}
        aria-hidden="true"
      >
        ●
      </span>
      <span className="font-bold" style={{ color }}>{c.id}</span>
      <span className="truncate text-text/85">{c.msg}</span>
      {c.parents.length > 1 && (
        <span className="rounded bg-elev px-1 py-0.5 text-[9px] text-muted">⇐ {c.parents.join('+')}</span>
      )}
      {isTip.map((b) => (
        <span key={b} className="rounded-full px-1.5 py-0.5 text-[9px] font-bold text-onaccent" style={{ background: branchColor(b, branchNames) }}>
          {b}
        </span>
      ))}
    </div>
  );
}

function CommitGraph({
  title,
  icon,
  commits,
  branches,
  empty,
}: {
  title: string;
  icon: string;
  commits: Commit[];
  branches: { name: string; tip: string | null }[];
  empty: string;
}) {
  const names = branches.map((b) => b.name);
  const reversed = [...commits].reverse();
  return (
    <div className="flex min-h-52 flex-col rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">
        <span>{icon} {title}</span>
        <span className="rounded bg-elev px-1.5 font-mono normal-case">{commits.length}</span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-2 scrolly">
        {reversed.length === 0 ? (
          <span className="p-2 text-xs italic text-muted">{empty}</span>
        ) : (
          reversed.map((c) => (
            <CommitNode
              key={c.id}
              c={c}
              branchNames={names}
              isTip={branches.filter((b) => b.tip === c.id).map((b) => b.name)}
            />
          ))
        )}
      </div>
    </div>
  );
}

function FileZone({
  title,
  icon,
  files,
  color,
  empty,
}: {
  title: string;
  icon: string;
  files: string[];
  color: string;
  empty: string;
}) {
  return (
    <div className="flex min-h-52 flex-col rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">
        <span>{icon} {title}</span>
        <span className="rounded bg-elev px-1.5 font-mono normal-case">{files.length}</span>
      </div>
      <div className="flex flex-1 flex-wrap content-start gap-1.5 p-2">
        {files.length === 0 ? (
          <span className="p-2 text-xs italic text-muted">{empty}</span>
        ) : (
          files.map((f) => (
            <span key={f} className="fade-up h-fit rounded-md border px-2 py-1 font-mono text-[11px]" style={{ borderColor: color, color }}>
              {f}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export function GitLab() {
  const { T } = useI18n();
  const [sim, dispatch] = useReducer(reducer, {
    state: initialGitState(),
    last: null,
    log: [],
  });
  const [branchName, setBranchName] = useState('feature');
  const s = sim.state;

  const act = (a: GitAction) => () => dispatch(a);

  const branches = s.localBranches.map((b) => b.name);
  const otherBranches = branches.filter((b) => b !== s.head);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <button type="button" className={btn} onClick={act({ type: 'init' })}>git init</button>
        <button type="button" className={btn} onClick={act({ type: 'edit' })} disabled={!s.initialized}>
          ✏️ {T({ en: 'edit files', bn: 'ফাইল বদলান' })}
        </button>
        <button type="button" className={btn} onClick={act({ type: 'add' })} disabled={s.working.length === 0}>git add .</button>
        <button type="button" className={btn} onClick={act({ type: 'commit' })} disabled={s.staged.length === 0}>git commit</button>
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
        <button type="button" className={btn} onClick={act({ type: 'branch', name: branchName || 'feature' })} disabled={s.local.length === 0}>
          git switch -c
        </button>
        <input
          value={branchName}
          onChange={(e) => setBranchName(e.target.value.replace(/\s/g, '-'))}
          className="w-24 rounded-lg border border-border bg-bg px-2 py-1.5 font-mono text-xs"
          aria-label="branch name"
          placeholder="feature"
        />
        {otherBranches.length > 0 && (
          <>
            <button type="button" className={btn} onClick={act({ type: 'switch', name: otherBranches[0] })}>
              git switch {otherBranches[0]}
            </button>
            <button type="button" className={btn} onClick={act({ type: 'merge', name: otherBranches[0] })}>
              git merge {otherBranches[0]}
            </button>
          </>
        )}
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
        <button type="button" className={btn} onClick={act({ type: 'teammate' })} disabled={s.remoteBranches.length === 0 && s.local.length === 0}>
          🧑‍🤝‍🧑 {T({ en: 'teammate pushes', bn: 'সতীর্থ পুশ করছে' })}
        </button>
        <button type="button" className={btn} onClick={act({ type: 'pull' })} disabled={s.remote.length === 0}>git pull</button>
        <button type="button" className={btn} onClick={act({ type: 'push' })} disabled={s.local.length === 0}>git push</button>
        <button type="button" className={`${btn} ml-auto`} onClick={act({ type: 'reset' })}>↺</button>
      </div>

      {/* caption of last action */}
      {sim.last && (
        <p key={sim.last.cmd + sim.last.out} className="fade-up border-b border-border bg-accent/5 px-3 py-2 text-sm">
          <code className="mr-2 rounded bg-elev px-1.5 py-0.5 font-mono text-xs">{sim.last.cmd}</code>
          {T(sim.last.caption)}
        </p>
      )}

      {/* four zones */}
      <div className="grid gap-0">
        <div className="grid gap-3 p-3 lg:grid-cols-2">
          <FileZone
            title={T({ en: 'Working Directory', bn: 'ওয়ার্কিং ডিরেক্টরি' })}
            icon="💾"
            files={s.working}
            color="var(--warn)"
            empty={T({ en: 'clean — nothing modified', bn: 'পরিষ্কার — কিছু বদলায়নি' })}
          />
          <FileZone
            title={T({ en: 'Staging Area', bn: 'স্টেজিং এরিয়া' })}
            icon="📋"
            files={s.staged}
            color="var(--accent2)"
            empty={T({ en: 'nothing staged for the next commit', bn: 'পরবর্তী কমিটের জন্য কিছু নেই' })}
          />
        </div>
        <div className="flex justify-center pb-1" aria-hidden="true">
          <svg width="16" height="20" viewBox="0 0 16 20" className="text-accent">
            <path d="M8 0 V14 M2 9 L8 16 L14 9" stroke="currentColor" strokeWidth="2" fill="none" className="flow-arrow" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="grid gap-3 px-3 pb-3 lg:grid-cols-2">
          <CommitGraph
            title={T({ en: 'Local Repository (.git)', bn: 'লোকাল রিপোজিটরি (.git)' })}
            icon="🏠"
            commits={s.local}
            branches={s.localBranches}
            empty={T({ en: 'no commits yet', bn: 'এখনো কোনো কমিট নেই' })}
          />
          <CommitGraph
            title={T({ en: 'Remote (origin)', bn: 'রিমোট (origin)' })}
            icon="☁️"
            commits={s.remote}
            branches={s.remoteBranches}
            empty={T({ en: 'nothing pushed yet', bn: 'এখনো কিছু পুশ হয়নি' })}
          />
        </div>
      </div>

      {/* terminal */}
      <div className="codeblock border-t border-border p-3 font-mono text-xs leading-6" role="log" aria-label="terminal">
        {sim.log.length === 0 ? (
          <div className="text-muted/60">
            {T({ en: '$ terminal output appears here — try: git init', bn: '$ টার্মিনাল আউটপুট এখানে আসবে — চেষ্টা করুন: git init' })}
          </div>
        ) : (
          sim.log.map((l, i) => (
            <div key={i}>
              <span className="text-accent">$</span> <span className="text-text/90">{l.cmd}</span>
              <div className="pl-3 text-muted">{l.out}</div>
            </div>
          ))
        )}
      </div>
      <p className="border-t border-border px-3 pb-3 pt-2 text-sm text-muted">
        {T({
          en: 'Try the full loop: init → edit → add → commit → switch -c feature → edit → add → commit → switch main → merge feature → teammate pushes → pull → push.',
          bn: 'পুরো চক্রটা চালান: init → edit → add → commit → switch -c feature → edit → add → commit → switch main → merge feature → সতীর্থ পুশ → pull → push।',
        })}
      </p>
    </div>
  );
}
