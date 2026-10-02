import { useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { CodeBlock } from '../CodeBlock';

/** DOM tree lab: edit HTML → watch the live object tree the browser builds. */

const PRESETS: Record<string, string> = {
  article: `<article class="post">
  <h1 id="title">DOM Day</h1>
  <p>Text with a <strong>bold</strong> word.</p>
  <img src="cat.jpg" alt="A cat">
</article>`,
  nav: `<nav>
  <a href="/">Home</a>
  <a href="/docs">Docs</a>
</nav>`,
  form: `<form>
  <label for="em">Email</label>
  <input id="em" type="email" required>
  <button>Send</button>
</form>`,
};

interface Stats {
  elements: number;
  texts: number;
  depth: number;
}

function analyze(root: Element): Stats {
  let elements = 0;
  let texts = 0;
  let depth = 0;
  const walk = (n: Node, d: number) => {
    if (n.nodeType === Node.ELEMENT_NODE) {
      elements += 1;
      depth = Math.max(depth, d);
    } else if (n.nodeType === Node.TEXT_NODE && (n.textContent ?? '').trim()) {
      texts += 1;
    }
    n.childNodes.forEach((c) => walk(c, n.nodeType === Node.ELEMENT_NODE ? d + 1 : d));
  };
  walk(root, 1);
  return { elements, texts, depth };
}

function selectorOf(el: Element): string {
  let s = el.tagName.toLowerCase();
  if (el.id) s += `#${el.id}`;
  if (el.classList.length) s += '.' + [...el.classList].join('.');
  return s;
}

function TreeNode({ node }: { node: Node }) {
  if (node.nodeType === Node.TEXT_NODE) {
    const t = (node.textContent ?? '').trim();
    if (!t) return null;
    return (
      <li>
        <span className="rounded bg-elev px-1.5 py-0.5 font-mono text-[11px] text-ok">“{t.length > 28 ? t.slice(0, 28) + '…' : t}”</span>
      </li>
    );
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const el = node as Element;
  const kids = [...el.childNodes].filter(
    (n) => n.nodeType === Node.ELEMENT_NODE || (n.nodeType === Node.TEXT_NODE && (n.textContent ?? '').trim()),
  );
  const attrs = [...el.attributes]
    .filter((a) => a.name !== 'id' && a.name !== 'class')
    .map((a) => `${a.name}="${a.value.length > 14 ? a.value.slice(0, 14) + '…' : a.value}"`);
  return (
    <li>
      {kids.length > 0 ? (
        <details open>
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-accent">
              {selectorOf(el)}
            </span>
            {attrs.length > 0 && (
              <span className="ml-1 font-mono text-[10px] text-muted">{attrs.join(' ')}</span>
            )}
          </summary>
          <ul className="ml-3 space-y-1 border-l border-border pl-3 pt-1">
            {kids.map((k, i) => (
              <TreeNode key={i} node={k} />
            ))}
          </ul>
        </details>
      ) : (
        <span>
          <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-accent">
            {selectorOf(el)}
          </span>
          {attrs.length > 0 && <span className="ml-1 font-mono text-[10px] text-muted">{attrs.join(' ')}</span>}
        </span>
      )}
    </li>
  );
}

export function DomTreeLab() {
  const { T } = useI18n();
  const [preset, setPreset] = useState('article');
  const [html, setHtml] = useState(PRESETS.article);

  const parsed = useMemo(() => {
    try {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return { body: doc.body, stats: analyze(doc.body), error: false };
    } catch {
      return { body: null, stats: null, error: true };
    }
  }, [html]);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          {T({ en: 'Source → live tree', bn: 'সোর্স → জীবন্ত ট্রি' })}
        </span>
        <div className="ml-auto flex gap-1.5">
          {Object.keys(PRESETS).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setPreset(p);
                setHtml(PRESETS[p]);
              }}
              className={`rounded-md border px-2 py-1 font-mono text-[11px] transition ${
                preset === p && html === PRESETS[p]
                  ? 'border-accent bg-accent/15 font-semibold'
                  : 'border-border hover:bg-elev'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-border lg:border-b-0 lg:border-r">
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            spellCheck={false}
            rows={8}
            className="codeblock h-full min-h-40 w-full resize-y rounded-none border-0 p-3 font-mono text-[13px] leading-6 focus:outline-none"
            aria-label="HTML input"
          />
          <div className="border-t border-border px-3 py-2">
            <CodeBlock code="document.querySelector('strong')" lang="js" showLabel={false} />
          </div>
        </div>
        <div className="p-3">
          <div className="mb-2 flex flex-wrap gap-2 text-[11px]">
            {parsed.stats && (
              <>
                <span className="rounded bg-elev px-2 py-1 font-mono">
                  <strong className="text-accent">{parsed.stats.elements}</strong> {T({ en: 'elements', bn: 'এলিমেন্ট' })}
                </span>
                <span className="rounded bg-elev px-2 py-1 font-mono">
                  <strong className="text-ok">{parsed.stats.texts}</strong> {T({ en: 'text nodes', bn: 'টেক্সট নোড' })}
                </span>
                <span className="rounded bg-elev px-2 py-1 font-mono">
                  <strong className="text-accent2">{parsed.stats.depth}</strong> {T({ en: 'deep', bn: 'গভীরতা' })}
                </span>
              </>
            )}
          </div>
          {parsed.body ? (
            <ul className="space-y-1" role="tree" aria-label="DOM tree">
              <TreeNode node={parsed.body} />
            </ul>
          ) : (
            <p className="text-sm text-err">{T({ en: 'Could not parse.', bn: 'পার্স করা গেল না।' })}</p>
          )}
          <p className="mt-3 rounded-lg bg-elev px-3 py-2 text-xs leading-6 text-muted">
            {T({
              en: 'This tree is REAL: it was parsed from your text by the same DOMParser interface browsers use. document.querySelector("strong") would walk to exactly the green node you see.',
              bn: 'এই ট্রি আসল: আপনার টেক্সট থেকে ব্রাউজারের সেই DOMParser ইন্টারফেস দিয়েই পার্স করা। document.querySelector("strong") ঠিক যে সবুজ নোড দেখছেন সেখানেই পৌঁছাবে।',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
