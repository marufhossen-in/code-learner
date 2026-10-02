import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '../lib/i18n';
import { tokenize } from './CodeBlock';

/** Browser code playground (Section 13): HTML/CSS/JS tabs, syntax overlay editor, live run, console. */

interface ConsoleEntry {
  kind: 'log' | 'warn' | 'error' | 'info';
  text: string;
}

const DEFAULT_HTML = `<h1 id="title">Hello, CodeShikhon!</h1>
<p>Change the code and press Run.</p>
<button id="btn">Click me</button>`;

const DEFAULT_CSS = `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
  background: #f6f3ff;
  color: #232042;
}

button {
  padding: 8px 16px;
  border: 0;
  border-radius: 8px;
  background: #4f46e5;
  color: #fff;
  cursor: pointer;
}`;

const DEFAULT_JS = `const btn = document.getElementById("btn");
const title = document.getElementById("title");
let clicks = 0;

btn.addEventListener("click", () => {
  clicks += 1;
  title.textContent = "Clicked " + clicks + "×";
  console.log("click #" + clicks);
});

console.log("ready — try the button!");`;

function buildSrcDoc(html: string, css: string, js: string): string {
  const hook = `<script>
(function(){
  function send(kind, args){
    try {
      var text = args.map(function(a){
        if (typeof a === 'object' && a !== null) { try { return JSON.stringify(a); } catch(e){ return String(a); } }
        return String(a);
      }).join(' ');
      parent.postMessage({ __csh: true, kind: kind, text: text }, '*');
    } catch(e){}
  }
  ['log','warn','error','info'].forEach(function(k){
    var orig = console[k];
    console[k] = function(){ send(k, Array.prototype.slice.call(arguments)); orig && orig.apply(console, arguments); };
  });
  window.addEventListener('error', function(e){ send('error', [e.message + ' (line ' + e.lineno + ')']); });
})();
<\/script>`;
  return `<!doctype html><html><head><meta charset="utf-8">${hook}<style>${css}</style></head><body>${html}<script>try{\n${js}\n}catch(err){console.error(String(err));}<\/script></body></html>`;
}

function Editor({
  code,
  lang,
  onChange,
}: {
  code: string;
  lang: string;
  onChange: (v: string) => void;
}) {
  const preRef = useRef<HTMLPreElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const toks = useMemo(() => tokenize(code, lang), [code, lang]);
  const lines = useMemo(() => code.split('\n').length, [code]);

  const sync = useCallback(() => {
    if (preRef.current && taRef.current) {
      preRef.current.scrollTop = taRef.current.scrollTop;
      preRef.current.scrollLeft = taRef.current.scrollLeft;
    }
  }, []);

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = e.currentTarget;
      const s = ta.selectionStart;
      const v = code.slice(0, s) + '  ' + code.slice(ta.selectionEnd);
      onChange(v);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = s + 2;
      });
    }
  };

  return (
    <div className="relative h-full min-h-56 overflow-hidden rounded-b-xl bg-[var(--code-bg)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-10 select-none border-r border-border/60 bg-[var(--code-bg)] pt-3 text-right font-mono text-[13px] leading-6 text-muted/50"
      >
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className="pr-2">
            {i + 1}
          </div>
        ))}
      </div>
      <pre ref={preRef} aria-hidden="true" className="absolute inset-0 overflow-auto p-3 pl-12 font-mono text-[13px] leading-6">
        <code>
          {toks.map((t, i) =>
            t.cls ? (
              <span key={i} className={t.cls}>
                {t.text}
              </span>
            ) : (
              <span key={i}>{t.text}</span>
            ),
          )}
          {'\n'}
        </code>
      </pre>
      <textarea
        ref={taRef}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onScroll={sync}
        onKeyDown={onKey}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        className="absolute inset-0 h-full w-full resize-none overflow-auto bg-transparent p-3 pl-12 font-mono text-[13px] leading-6 text-transparent caret-[var(--accent)] selection:bg-[color-mix(in_srgb,var(--accent)_30%,transparent)] focus:outline-none"
        aria-label={`${lang} editor`}
      />
    </div>
  );
}

export function EditorLite({
  fullscreenStart = false,
  initialHtml,
  initialCss,
  initialJs,
  compact = false,
  startTab = 'html',
}: {
  fullscreenStart?: boolean;
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  /** compact = lesson-embedded "Try it Yourself" (smaller, preset code, reset restores the preset). */
  compact?: boolean;
  startTab?: 'html' | 'css' | 'js';
}) {
  const { ui } = useI18n();
  const [tab, setTab] = useState<'html' | 'css' | 'js'>(startTab);
  const [html, setHtml] = useState(initialHtml ?? DEFAULT_HTML);
  const [css, setCss] = useState(initialCss ?? DEFAULT_CSS);
  const [js, setJs] = useState(initialJs ?? DEFAULT_JS);
  const [srcDoc, setSrcDoc] = useState('');
  const [consoleOut, setConsoleOut] = useState<ConsoleEntry[]>([]);
  const [showConsole, setShowConsole] = useState(true);
  const [fs, setFs] = useState(fullscreenStart);
  const [copied, setCopied] = useState(false);

  const run = useCallback(() => {
    setConsoleOut([]);
    setSrcDoc(buildSrcDoc(html, css, js));
  }, [html, css, js]);

  useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data as { __csh?: boolean; kind?: ConsoleEntry['kind']; text?: string };
      if (d && d.__csh) {
        setConsoleOut((prev) => [...prev.slice(-199), { kind: d.kind ?? 'log', text: d.text ?? '' }]);
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const reset = () => {
    setHtml(initialHtml ?? DEFAULT_HTML);
    setCss(initialCss ?? DEFAULT_CSS);
    setJs(initialJs ?? DEFAULT_JS);
    setTimeout(run, 0);
  };
  const paneH = compact ? 'h-80' : 'h-105';

  const copyActive = async () => {
    const code = tab === 'html' ? html : tab === 'css' ? css : js;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch { /* ignore */ }
  };

  const download = () => {
    const blob = new Blob([buildSrcDoc(html, css, js).replace(/<script>\n\(function\(\)[\s\S]*?<\/script>/, '')], {
      type: 'text/html',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'playground.html';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const tabs = [
    { id: 'html' as const, label: 'HTML' },
    { id: 'css' as const, label: 'CSS' },
    { id: 'js' as const, label: 'JS' },
  ];

  const activeCode = tab === 'html' ? html : tab === 'css' ? css : js;
  const setActive = tab === 'html' ? setHtml : tab === 'css' ? setCss : setJs;
  const toolBtn =
    'rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium transition hover:bg-elev';

  return (
    <div className={fs ? 'fixed inset-0 z-50 flex flex-col bg-bg p-3' : 'flex flex-col'}>
      <div className={`grid gap-3 lg:grid-cols-2 ${fs ? 'min-h-0 flex-1' : ''}`}>
        {/* editor side */}
        <div className={`flex min-h-0 flex-col rounded-xl border border-border bg-surface ${fs ? '' : paneH}`}>
          <div className="flex items-center gap-1 border-b border-border px-2 py-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`rounded-md px-3 py-1 font-mono text-xs font-semibold transition ${
                  tab === t.id ? 'bg-accent text-onaccent' : 'text-muted hover:bg-elev hover:text-text'
                }`}
                aria-pressed={tab === t.id}
              >
                {t.label}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-1.5">
              <button type="button" onClick={run} className="rounded-md bg-ok px-3 py-1 text-xs font-bold text-white transition hover:opacity-90">
                ▶ {ui('play.run')}
              </button>
              <button type="button" onClick={reset} className={toolBtn}>
                ⟲ {ui('play.reset')}
              </button>
              <button type="button" onClick={copyActive} className={toolBtn}>
                {copied ? ui('play.copied') : '⧉ ' + ui('play.copy')}
              </button>
              <button type="button" onClick={download} className={toolBtn}>
                ⬇ {ui('play.download')}
              </button>
              <button type="button" onClick={() => setFs((v) => !v)} className={toolBtn} aria-pressed={fs}>
                {fs ? '⤡ ' + ui('play.exitfs') : '⤢ ' + ui('play.fullscreen')}
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1">
            <Editor code={activeCode} lang={tab} onChange={setActive} />
          </div>
        </div>

        {/* preview + console side */}
        <div className={`flex min-h-0 flex-col gap-3 ${fs ? '' : paneH}`}>
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface">
            <div className="border-b border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
              {ui('play.preview')}
            </div>
            <iframe
              title="playground-preview"
              sandbox="allow-scripts"
              srcDoc={srcDoc}
              className="min-h-0 flex-1 bg-white"
            />
          </div>
          <div
            className={`flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all ${
              showConsole ? 'min-h-28 flex-[0.45]' : 'flex-none'
            }`}
          >
            <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
              <button
                type="button"
                onClick={() => setShowConsole((s) => !s)}
                className="text-xs font-semibold uppercase tracking-wide text-muted"
                aria-expanded={showConsole}
              >
                {ui('play.console')} {showConsole ? '▾' : '▸'} {consoleOut.length > 0 ? `(${consoleOut.length})` : ''}
              </button>
              {showConsole && (
                <button type="button" onClick={() => setConsoleOut([])} className="text-xs text-muted hover:text-text">
                  {ui('play.clear')}
                </button>
              )}
            </div>
            {showConsole && (
              <div className="codeblock min-h-0 flex-1 overflow-y-auto rounded-none p-2 font-mono text-xs" role="log" aria-live="polite">
                {consoleOut.length === 0 ? (
                  <div className="text-muted/60">▸</div>
                ) : (
                  consoleOut.map((c, i) => (
                    <div key={i} className={`border-b border-border/30 px-1 py-0.5 last:border-0 ${c.kind === 'error' ? 'text-err' : c.kind === 'warn' ? 'text-warn' : ''}`}>
                      {c.kind === 'error' ? '✕ ' : c.kind === 'warn' ? '⚠ ' : '▸ '}
                      {c.text}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
