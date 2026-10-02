import type { Block, CellKind, LText } from '../lib/types';
import { useI18n } from '../lib/i18n';
import { CodeBlock } from './CodeBlock';
import { EditorLite } from './EditorLite';
import { ExecutionVisualizer } from './visuals/ExecutionVisualizer';
import { EventLoopLab } from './visuals/EventLoopLab';
import { Pipeline, BROWSER_PIPELINE } from './visuals/Pipeline';
import { BoxModelLab } from './visuals/BoxModelLab';
import { FlexboxLab } from './visuals/FlexboxLab';
import { GridLab } from './visuals/GridLab';
import { DomTreeLab } from './visuals/DomTreeLab';
import { FormPlayground } from './visuals/FormPlayground';
import { GitLab } from './visuals/GitLab';
import { RenderLab } from './visuals/RenderLab';
import { DbLab } from './visuals/DbLab';
import { NetworkLab } from './visuals/NetworkLab';
import { SecurityLab } from './visuals/SecurityLab';
import { DockerLab } from './visuals/DockerLab';
import { TypeLab } from './visuals/TypeLab';
import { PyLab } from './visuals/PyLab';
import { DsLab } from './visuals/DsLab';
import { HtLab } from './visuals/HtLab';
import { LlLab } from './visuals/LlLab';
import { StkLab } from './visuals/StkLab';
import { QueueLab } from './visuals/QueueLab';
import { TreeLab } from './visuals/TreeLab';
import { HeapLab } from './visuals/HeapLab';
import { GraphLab } from './visuals/GraphLab';
import { GraphAlgoLab } from './visuals/GraphAlgoLab';
import { SearchLab } from './visuals/SearchLab';
import { SysdLab } from './visuals/SysdLab';
import { CacheLab } from './visuals/CacheLab';
import { DistsysLab } from './visuals/DistsysLab';
import { HttpLab } from './visuals/HttpLab';
import { RestLab } from './visuals/RestLab';
import { GraphqlLab } from './visuals/GraphqlLab';
import { NodeLab } from './visuals/NodeLab';
import { K8sLab } from './visuals/K8sLab';

/** Content-engine block renderer: turns lesson block data into UI. */

const CALLOUT_STYLE: Record<string, { border: string; icon: string }> = {
  info: { border: 'var(--info)', icon: 'ℹ️' },
  tip: { border: 'var(--ok)', icon: '💡' },
  warn: { border: 'var(--warn)', icon: '⚠️' },
  mistake: { border: 'var(--err)', icon: '🐛' },
};

export function Blocks({ blocks }: { blocks: Block[] }) {
  const { T } = useI18n();
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'heading':
            return (
              <h2 key={i} id={b.id} className="scroll-mt-24 border-t border-border pt-6 text-xl font-bold tracking-tight first:border-0 first:pt-0">
                {b.text ? T(b.text) : (b.title ? T(b.title) : '')}
              </h2>
            );
          case 'para':
            return (
              <p key={i} className="leading-8 text-text/90">
                {T(b.text)}
              </p>
            );
          case 'code':
            return (
              <figure key={i} className="space-y-1.5">
                {b.caption && (
                  <figcaption className="text-xs font-semibold leading-5 text-muted">{T(b.caption)}</figcaption>
                )}
                <CodeBlock code={b.code} lang={b.lang} filename={b.filename} lineCls={b.lineCls} />
              </figure>
            );
          case 'list':
            return b.ordered ? (
              <ol key={i} className="list-decimal space-y-2 pl-6 leading-7 text-text/90">
                {b.items.map((it, j) => (
                  <li key={j}>{T(it)}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="list-disc space-y-2 pl-6 leading-7 text-text/90 marker:text-accent">
                {b.items.map((it, j) => (
                  <li key={j}>{T(it)}</li>
                ))}
              </ul>
            );
          case 'callout': {
            const st = CALLOUT_STYLE[(b.kind as keyof typeof CALLOUT_STYLE)] ?? CALLOUT_STYLE.info;
            return (
              <aside
                key={i}
                className="rounded-lg border border-border bg-surface p-4"
                style={{ borderLeftWidth: 4, borderLeftColor: st.border }}
                role="note"
              >
                {b.title && (
                  <div className="mb-1 font-semibold">
                    <span aria-hidden="true">{st.icon} </span>
                    {T(b.title)}
                  </div>
                )}
                <p className="text-sm leading-7 text-text/90">{T(b.text)}</p>
              </aside>
            );
          }
          case 'keyterms':
            return (
              <dl key={i} className="grid gap-3 sm:grid-cols-3">
                {b.items.map((kt) => (
                  <div key={kt.term} className="rounded-lg border border-border bg-surface p-3">
                    <dt className="font-mono text-sm font-semibold text-accent">{kt.term}</dt>
                    <dd className="mt-1 text-sm leading-6 text-muted">{kt.def ? T(kt.def) : (kt.desc ? T(kt.desc) : '')}</dd>
                  </div>
                ))}
              </dl>
            );
          case 'table': {
            const CELL_CHIP: Record<string, string> = {
              ok: 'border-ok/40 bg-ok/10 text-ok',
              warn: 'border-warn/40 bg-warn/10 text-warn',
              err: 'border-err/40 bg-err/10 text-err',
              stay: 'border-accent/30 bg-accent/10 text-accent',
              hit: 'border-ok/40 bg-ok/10 text-ok',
              off: 'border-muted/30 bg-muted/10 text-muted',
              heal: 'border-accent/30 bg-accent/10 text-accent',
              flip: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300',
              miss: 'border-err/40 bg-err/10 text-err',
              band: 'border-warn/40 bg-warn/10 text-warn',
              last: 'border-accent/30 bg-accent/10 text-accent',
            };
            const alignCls = (a?: 'l' | 'c' | 'r') => (a === 'c' ? 'text-center' : a === 'r' ? 'text-right' : 'text-left');
            // ledger signature: rows listed in sumRows claim totals; the audit is re-added and
            // written into the screen-reader-only caption (alongside srOnlyHead, if any).
            const audits: string[] = [];
            b.sumRows?.forEach((v, j) => {
              if (typeof v !== 'number') return;
              const tags = b.sumCols ? Object.keys(b.sumCols).filter((t) => (b.sumCols?.[t] ?? []).includes(j)) : [];
              audits.push(
                T({
                  en: `row ${j + 1} totals ${v}${tags.length ? ` (${tags.join(', ')})` : ''}`,
                  bn: `সারি ${j + 1} · মোট ${v}${tags.length ? ` (${tags.join(', ')})` : ''}`,
                }),
              );
            });
            const stripCls = 'sr-only';
            return (
              <figure key={i} className="space-y-1.5">
                {b.caption && <figcaption className="text-xs leading-5 text-muted">{T(b.caption)}</figcaption>}
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className={`w-full ${b.tighten ? 'text-xs' : 'text-sm'}`}>
                    {(b.srOnlyHead || audits.length > 0) && (
                      <caption className={stripCls}>
                        {b.srOnlyHead && T(b.srOnlyHead)}
                        {b.srOnlyHead && audits.length > 0 ? ' — ' : ''}
                        {audits.join(' · ')}
                      </caption>
                    )}
                    <thead>
                      <tr className="bg-elev">
                        {b.head.map((h, j) => (
                          <th key={j} className={`${b.tighten ? 'px-2 py-1.5' : 'px-3 py-2'} font-semibold ${alignCls(b.align?.[j])}`}>
                            {typeof h === 'string' ? h : 'en' in h ? T(h as LText) : (h as { s: string }).s}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, j) => {
                        const pinned = b.sumRows && typeof b.sumRows[j] === 'number';
                        return (
                          <tr key={j} className={`border-t border-border ${pinned ? 'bg-elev/60 font-bold' : ''}`}>
                            {r.map((c, k) => {
                              const ro = typeof c === 'object' && c !== null && !('t' in c) ? (c as { s: string; k?: CellKind; cls?: string; badge?: LText }) : null;
                              const chip = ro?.k ? CELL_CHIP[ro.k] : undefined;
                              const txt = typeof c === 'string' ? c : 't' in (c as LText) ? T(c as LText) : ro!.s;
                              return (
                                <td key={k} className={`${b.tighten ? 'px-2 py-1.5' : 'px-3 py-2'} ${alignCls(b.align?.[k])} ${ro?.cls ?? ''}`}>
                                  <span className={chip ? `inline-block rounded-full border px-2 py-0.5 text-xs font-semibold ${chip}` : ''}>
                                    {txt}
                                  </span>
                                  {ro?.badge && (
                                    <span className={`ml-1 rounded-full px-1.5 py-0.5 text-[9px] font-extrabold ${chip || 'bg-elev text-muted'}`}>
                                      {T(ro.badge)}
                                    </span>
                                  )}
                                </td>
                              );
                            })}
                            {pinned && (
                              <td aria-hidden="true" className={`${b.tighten ? 'px-2 py-1.5' : 'px-3 py-2'} text-xs text-muted`}>
                                Σ {b.sumRows?.[j]}
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {b.captionText && <p className="text-xs leading-5 text-muted">{T(b.captionText)}</p>}
                {b.emptyShell && <p className="text-xs italic leading-5 text-muted">{T(b.emptyShell)}</p>}
                {b.footnotes && (
                  <ul className="space-y-0.5 text-xs leading-5 text-muted">
                    {b.footnotes.map((f, j) => (
                      <li key={j}>
                        <span aria-hidden="true" className="font-mono text-[10px]">^{j + 1} </span>
                        {T(f)}
                      </li>
                    ))}
                  </ul>
                )}
              </figure>
            );
          }
          case 'compare':
            return (
              <div key={i} className="space-y-2">
                {b.title && <h3 className="font-bold">{T(b.title)}</h3>}
                <div className="grid gap-3 md:grid-cols-2">
                  {([b.left, b.right] as const).map((col, ci) => (
                    <div key={ci} className={`rounded-xl border p-4 ${ci === 0 ? 'border-err/40 bg-err/5' : 'border-ok/40 bg-ok/5'}`}>
                      <div className={`mb-2 text-xs font-bold uppercase tracking-wide ${ci === 0 ? 'text-err' : 'text-ok'}`}>
                        {ci === 0 ? '✗ ' : '✓ '}
                        {T(col.title)}
                      </div>
                      <ul className="space-y-2 text-sm leading-6 text-text/85">
                        {col.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span aria-hidden="true" className={ci === 0 ? 'text-err' : 'text-ok'}>
                              {ci === 0 ? '✗' : '✓'}
                            </span>
                            {T(pt)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          case 'steps': {
            const stepItems = b.items ?? b.steps ?? [];
            return (
              <ol key={i} className="relative space-y-4 border-l-2 border-border pl-5">
                {stepItems.map((s: any, j: number) => (
                  <li key={j} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent"
                    />
                    <div className="font-semibold">{s.title ? T(s.title) : ''}</div>
                    <p className="mt-0.5 text-sm leading-7 text-text/85">{s.text ? T(s.text) : ''}</p>
                  </li>
                ))}
              </ol>
            );
          }
          case 'visual':
            if (b.id === 'event-loop' || b.id === 'execution') return <EventLoopLab key={i} />;
            if (b.id === 'pipeline') return <Pipeline key={i} steps={BROWSER_PIPELINE} />;
            if (b.id === 'box-model') return <BoxModelLab key={i} />;
            if (b.id === 'flexbox') return <FlexboxLab key={i} />;
            if (b.id === 'grid') return <GridLab key={i} />;
            if (b.id === 'dom-tree') return <DomTreeLab key={i} />;
            if (b.id === 'form-valid') return <FormPlayground key={i} />;
            if (b.id === 'git') return <GitLab key={i} />;
            if (b.id === 'react-render') return <RenderLab key={i} />;
            if (b.id === 'database') return <DbLab key={i} />;
            if (b.id === 'network') return <NetworkLab key={i} />;
            if (b.id === 'security') return <SecurityLab key={i} />;
            if (b.id === 'docker') return <DockerLab key={i} />;
            if (b.id === 'ts-narrow') return <TypeLab key={i} />;
            if (b.id === 'py') return <PyLab key={i} />;
            if (b.id === 'dsa') return <DsLab key={i} />;
            if (b.id === 'ht') return <HtLab key={i} />;
            if (b.id === 'll') return <LlLab key={i} />;
            if (b.id === 'stk') return <StkLab key={i} />;
            if (b.id === 'queue') return <QueueLab key={i} />;
            if (b.id === 'tree') return <TreeLab key={i} />;
            if (b.id === 'heap') return <HeapLab key={i} />;
            if (b.id === 'graph') return <GraphLab key={i} />;
            if (b.id === 'galg') return <GraphAlgoLab key={i} />;
            if (b.id === 'srch') return <SearchLab key={i} />;
            if (b.id === 'sysd') return <SysdLab key={i} />;
            if (b.id === 'cch') return <CacheLab key={i} />;
            if (b.id === 'dsy') return <DistsysLab key={i} />;
            if (b.id === 'http') return <HttpLab key={i} />;
            if (b.id === 'rest') return <RestLab key={i} />;
            if (b.id === 'gql') return <GraphqlLab key={i} />;
            if (b.id === 'node') return <NodeLab key={i} />;
            if (b.id === 'kubernetes') return <K8sLab key={i} />;
            return <ExecutionVisualizer key={i} scenario={b.scenario} />;
          case 'tryit':
            return (
              <figure key={i} className="space-y-1.5">
                {b.title && (
                  <figcaption className="text-xs font-semibold leading-5 text-muted">
                    ✏️ {T(b.title)}
                  </figcaption>
                )}
                <EditorLite compact initialHtml={b.html} initialCss={b.css} initialJs={b.js} />
              </figure>
            );
          case 'diagram':
            return (
              <figure key={i} className="space-y-1.5">
                {b.title && (
                  <figcaption className="text-xs font-semibold leading-5 text-muted">{T(b.title)}</figcaption>
                )}
                <div
                  className="overflow-x-auto rounded-xl border border-border bg-surface p-4 [&>svg]:mx-auto [&>svg]:max-w-full [&>svg]:text-text"
                  // Authored, static lesson artwork (no scripts, no external refs).
                  dangerouslySetInnerHTML={{ __html: b.svg }}
                />
                {b.caption && <p className="text-xs leading-5 text-muted">{T(b.caption)}</p>}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
