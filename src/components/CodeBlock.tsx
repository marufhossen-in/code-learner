import { useMemo, useState } from 'react';
import { useI18n } from '../lib/i18n';

/** Lightweight dependency-free syntax highlighter. */

type Tok = { text: string; cls: string | null };

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const JS_KW =
  'const|let|var|function|return|if|else|for|while|do|break|continue|new|typeof|instanceof|in|of|class|extends|super|this|null|undefined|true|false|void|delete|async|await|yield|switch|case|default|try|catch|finally|throw|import|export|from|as|static|get|set|console';

function tokenizeJS(src: string): Tok[] {
  const re = new RegExp(
    '(\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)' + // 1 comment
    '|("(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\'|`(?:[^`\\\\]|\\\\.)*`)' + // 2 string
    '|(\\b\\d[\\d_]*(?:\\.\\d+)?(?:[eE][+-]?\\d+)?n?\\b)' + // 3 number
    `|(\\b(?:${JS_KW})\\b)` + // 4 keyword
    '|([A-Za-z_$][\\w$]*(?=\\s*\\())', // 5 function call
    'g',
  );
  const out: Tok[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const clsOf = ['tok-c', 'tok-s', 'tok-n', 'tok-k', 'tok-f'];
  while ((m = re.exec(src))) {
    const gi = m.slice(1).findIndex((g) => g !== undefined);
    if (gi === -1) continue;
    if (m.index > last) out.push({ text: src.slice(last, m.index), cls: null });
    out.push({ text: m[0], cls: clsOf[gi] });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ text: src.slice(last), cls: null });
  return out;
}

function tokenizeHTML(src: string): Tok[] {
  const re = /(<!--[\s\S]*?-->)|("[^"]*"|'[^']*')|(<\/?[A-Za-z][\w:-]*|\/?>|[A-Za-z_:][\w:.-]*(?==))/g;
  const out: Tok[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const clsOf = ['tok-c', 'tok-s', 'tok-t'];
  while ((m = re.exec(src))) {
    const gi = m.slice(1).findIndex((g) => g !== undefined);
    if (gi === -1) continue;
    if (m.index > last) out.push({ text: src.slice(last, m.index), cls: null });
    out.push({ text: m[0], cls: clsOf[gi] });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ text: src.slice(last), cls: null });
  return out;
}

function tokenizeCSS(src: string): Tok[] {
  const re =
    /(\/\*[\s\S]*?\*\/)|("[^"]*"|'[^']*')|(@[A-Za-z-]+|[A-Za-z-]+(?=\s*:)|#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|s|ms|fr|vh|vw)?\b)/g;
  const out: Tok[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const clsOf = ['tok-c', 'tok-s', 'tok-n'];
  while ((m = re.exec(src))) {
    const gi = m.slice(1).findIndex((g) => g !== undefined);
    if (gi === -1) continue;
    if (m.index > last) out.push({ text: src.slice(last, m.index), cls: null });
    out.push({ text: m[0], cls: clsOf[gi] });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ text: src.slice(last), cls: null });
  return out;
}

const SQL_KW =
  'SELECT|FROM|WHERE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|INDEX|PRIMARY|KEY|FOREIGN|REFERENCES|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP|BY|ORDER|LIMIT|OFFSET|HAVING|AS|DISTINCT|COUNT|SUM|AVG|AND|OR|NOT|NULL|IN|LIKE|BETWEEN|UNION|ALTER|DROP|DATABASE|VIEW|TRANSACTION|BEGIN|COMMIT|ROLLBACK';

function tokenizeSQL(src: string): Tok[] {
  const re = new RegExp(
    `(--[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)|('(?:[^'\\\\\\n]|\\\\.)*')|(\\b\\d+(?:\\.\\d+)?\\b)|(\\b(?:${SQL_KW})\\b)`,
    'gi',
  );
  const out: Tok[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const clsOf = ['tok-c', 'tok-s', 'tok-n', 'tok-k'];
  while ((m = re.exec(src))) {
    const gi = m.slice(1).findIndex((g) => g !== undefined);
    if (gi === -1) continue;
    if (m.index > last) out.push({ text: src.slice(last, m.index), cls: null });
    out.push({ text: m[0], cls: clsOf[gi] });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ text: src.slice(last), cls: null });
  return out;
}

export function tokenize(src: string, lang: string): Tok[] {
  if (lang === 'js' || lang === 'ts' || lang === 'jsx' || lang === 'tsx') return tokenizeJS(src);
  if (lang === 'html' || lang === 'xml' || lang === 'svg') return tokenizeHTML(src);
  if (lang === 'css') return tokenizeCSS(src);
  if (lang === 'sql') return tokenizeSQL(src);
  return [{ text: src, cls: null }];
}

export function CodeBlock({
  code,
  lang = 'js',
  highlightLine,
  showLabel = true,
  filename,
  lineCls,
}: {
  code: string;
  lang?: string;
  highlightLine?: number;
  showLabel?: boolean;
  /** Optional script/file name shown beside the language chip (rich-lesson metadata). */
  filename?: string;
  /** Per-line tailwind classes keyed by 1-based line number (rich-lesson margins). */
  lineCls?: Record<number, string>;
}) {
  const { ui } = useI18n();
  const [copied, setCopied] = useState(false);
  const toks = useMemo(() => tokenize(code.trimEnd(), lang), [code, lang]);
  const lines = useMemo(() => code.trimEnd().split('\n').length, [code]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code.trimEnd());
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch { /* clipboard unavailable */ }
  };

  // split tokens into lines for per-line highlight
  const lineToks: Tok[][] = useMemo(() => {
    const arr: Tok[][] = [[]];
    for (const t of toks) {
      const parts = t.text.split('\n');
      parts.forEach((p, i) => {
        if (i > 0) arr.push([]);
        if (p) arr[arr.length - 1].push({ text: p, cls: t.cls });
      });
    }
    return arr;
  }, [toks]);

  return (
    <div className="codeblock overflow-hidden rounded-xl border border-border" role="group" aria-label={`${lang} code`}>
      {showLabel && (
        <div className="flex items-center justify-between border-b border-border px-3 py-1.5 text-xs">
          <span className="font-mono uppercase tracking-wide text-muted">
            {lang}
            {filename && <span className="ml-2 normal-case text-muted/70">· {filename}</span>}
          </span>
          <button
            onClick={copy}
            className="rounded-md px-2 py-0.5 text-muted transition hover:bg-elev hover:text-text"
            type="button"
          >
            {copied ? ui('play.copied') : ui('play.copy')}
          </button>
        </div>
      )}
      <pre className="scrolly overflow-x-auto p-3 text-[13px] leading-6 font-mono" tabIndex={0}>
        <code>
          {highlightLine !== undefined || lineCls ? (
            lineToks.map((lt, i) => (
              <span
                key={i}
                className={`block px-1 -mx-1 rounded ${
                  i + 1 === highlightLine ? 'bg-accent/25 shadow-[inset_3px_0_0_var(--accent)]' : ''
                } ${lineCls?.[i + 1] ?? ''}`}
                aria-current={i + 1 === highlightLine ? 'true' : undefined}
              >
                <span className="mr-3 inline-block w-5 select-none text-right text-muted opacity-60">
                  {i + 1}
                </span>
                {lt.length === 0
                  ? ' '
                  : lt.map((t, j) =>
                      t.cls ? (
                        <span key={j} className={t.cls}>
                          {t.text}
                        </span>
                      ) : (
                        <span key={j}>{t.text}</span>
                      ),
                    )}
              </span>
            ))
          ) : (
            <>
              <span
                dangerouslySetInnerHTML={{
                  __html: toks
                    .map((t) => (t.cls ? `<span class="${t.cls}">${esc(t.text)}</span>` : esc(t.text)))
                    .join(''),
                }}
              />
              {lines === 0 ? null : null}
            </>
          )}
        </code>
      </pre>
    </div>
  );
}
