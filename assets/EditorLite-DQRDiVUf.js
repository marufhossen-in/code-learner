import{_ as e,m as t,p as n,v as r}from"./index-B3nYBV2i.js";import{n as i}from"./CodeBlock-CFl5P5yR.js";var a=r(e(),1),o=t(),s=`<h1 id="title">Hello, CodeShikhon!</h1>
<p>Change the code and press Run.</p>
<button id="btn">Click me</button>`,c=`body {
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
}`,l=`const btn = document.getElementById("btn");
const title = document.getElementById("title");
let clicks = 0;

btn.addEventListener("click", () => {
  clicks += 1;
  title.textContent = "Clicked " + clicks + "×";
  console.log("click #" + clicks);
});

console.log("ready — try the button!");`;function u(e,t,n){return`<!doctype html><html><head><meta charset="utf-8"><script>
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
<\/script><style>${t}</style></head><body>${e}<script>try{\n${n}\n}catch(err){console.error(String(err));}<\/script></body></html>`}function d({code:e,lang:t,onChange:n}){let r=(0,a.useRef)(null),s=(0,a.useRef)(null),c=(0,a.useMemo)(()=>i(e,t),[e,t]),l=(0,a.useMemo)(()=>e.split(`
`).length,[e]),u=(0,a.useCallback)(()=>{r.current&&s.current&&(r.current.scrollTop=s.current.scrollTop,r.current.scrollLeft=s.current.scrollLeft)},[]);return(0,o.jsxs)(`div`,{className:`relative h-full min-h-56 overflow-hidden rounded-b-xl bg-[var(--code-bg)]`,children:[(0,o.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-y-0 left-0 w-10 select-none border-r border-border/60 bg-[var(--code-bg)] pt-3 text-right font-mono text-[13px] leading-6 text-muted/50`,children:Array.from({length:l},(e,t)=>(0,o.jsx)(`div`,{className:`pr-2`,children:t+1},t))}),(0,o.jsx)(`pre`,{ref:r,"aria-hidden":`true`,className:`absolute inset-0 overflow-auto p-3 pl-12 font-mono text-[13px] leading-6`,children:(0,o.jsxs)(`code`,{children:[c.map((e,t)=>e.cls?(0,o.jsx)(`span`,{className:e.cls,children:e.text},t):(0,o.jsx)(`span`,{children:e.text},t)),`
`]})}),(0,o.jsx)(`textarea`,{ref:s,value:e,onChange:e=>n(e.target.value),onScroll:u,onKeyDown:t=>{if(t.key===`Tab`){t.preventDefault();let r=t.currentTarget,i=r.selectionStart;n(e.slice(0,i)+`  `+e.slice(r.selectionEnd)),requestAnimationFrame(()=>{r.selectionStart=r.selectionEnd=i+2})}},spellCheck:!1,autoCapitalize:`off`,autoComplete:`off`,className:`absolute inset-0 h-full w-full resize-none overflow-auto bg-transparent p-3 pl-12 font-mono text-[13px] leading-6 text-transparent caret-[var(--accent)] selection:bg-[color-mix(in_srgb,var(--accent)_30%,transparent)] focus:outline-none`,"aria-label":`${t} editor`})]})}function f({fullscreenStart:e=!1,initialHtml:t,initialCss:r,initialJs:i,compact:f=!1,startTab:p=`html`}){let{ui:m}=n(),[h,g]=(0,a.useState)(p),[_,v]=(0,a.useState)(t??s),[y,b]=(0,a.useState)(r??c),[x,S]=(0,a.useState)(i??l),[C,w]=(0,a.useState)(``),[T,E]=(0,a.useState)([]),[D,O]=(0,a.useState)(!0),[k,A]=(0,a.useState)(e),[j,M]=(0,a.useState)(!1),N=(0,a.useCallback)(()=>{E([]),w(u(_,y,x))},[_,y,x]);(0,a.useEffect)(()=>{N()},[]),(0,a.useEffect)(()=>{let e=e=>{let t=e.data;t&&t.__csh&&E(e=>[...e.slice(-199),{kind:t.kind??`log`,text:t.text??``}])};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},[]);let P=()=>{v(t??s),b(r??c),S(i??l),setTimeout(N,0)},F=f?`h-80`:`h-105`,I=async()=>{let e=h===`html`?_:h===`css`?y:x;try{await navigator.clipboard.writeText(e),M(!0),setTimeout(()=>M(!1),1200)}catch{}},L=()=>{let e=new Blob([u(_,y,x).replace(/<script>\n\(function\(\)[\s\S]*?<\/script>/,``)],{type:`text/html`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`playground.html`,t.click(),URL.revokeObjectURL(t.href)},R=[{id:`html`,label:`HTML`},{id:`css`,label:`CSS`},{id:`js`,label:`JS`}],z=h===`html`?_:h===`css`?y:x,B=h===`html`?v:h===`css`?b:S,V=`rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium transition hover:bg-elev`;return(0,o.jsx)(`div`,{className:k?`fixed inset-0 z-50 flex flex-col bg-bg p-3`:`flex flex-col`,children:(0,o.jsxs)(`div`,{className:`grid gap-3 lg:grid-cols-2 ${k?`min-h-0 flex-1`:``}`,children:[(0,o.jsxs)(`div`,{className:`flex min-h-0 flex-col rounded-xl border border-border bg-surface ${k?``:F}`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-1 border-b border-border px-2 py-1.5`,children:[R.map(e=>(0,o.jsx)(`button`,{type:`button`,onClick:()=>g(e.id),className:`rounded-md px-3 py-1 font-mono text-xs font-semibold transition ${h===e.id?`bg-accent text-onaccent`:`text-muted hover:bg-elev hover:text-text`}`,"aria-pressed":h===e.id,children:e.label},e.id)),(0,o.jsxs)(`div`,{className:`ml-auto flex items-center gap-1.5`,children:[(0,o.jsxs)(`button`,{type:`button`,onClick:N,className:`rounded-md bg-ok px-3 py-1 text-xs font-bold text-white transition hover:opacity-90`,children:[`▶ `,m(`play.run`)]}),(0,o.jsxs)(`button`,{type:`button`,onClick:P,className:V,children:[`⟲ `,m(`play.reset`)]}),(0,o.jsx)(`button`,{type:`button`,onClick:I,className:V,children:j?m(`play.copied`):`⧉ `+m(`play.copy`)}),(0,o.jsxs)(`button`,{type:`button`,onClick:L,className:V,children:[`⬇ `,m(`play.download`)]}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>A(e=>!e),className:V,"aria-pressed":k,children:k?`⤡ `+m(`play.exitfs`):`⤢ `+m(`play.fullscreen`)})]})]}),(0,o.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,o.jsx)(d,{code:z,lang:h,onChange:B})})]}),(0,o.jsxs)(`div`,{className:`flex min-h-0 flex-col gap-3 ${k?``:F}`,children:[(0,o.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface`,children:[(0,o.jsx)(`div`,{className:`border-b border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted`,children:m(`play.preview`)}),(0,o.jsx)(`iframe`,{title:`playground-preview`,sandbox:`allow-scripts`,srcDoc:C,className:`min-h-0 flex-1 bg-white`})]}),(0,o.jsxs)(`div`,{className:`flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all ${D?`min-h-28 flex-[0.45]`:`flex-none`}`,children:[(0,o.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-3 py-1.5`,children:[(0,o.jsxs)(`button`,{type:`button`,onClick:()=>O(e=>!e),className:`text-xs font-semibold uppercase tracking-wide text-muted`,"aria-expanded":D,children:[m(`play.console`),` `,D?`▾`:`▸`,` `,T.length>0?`(${T.length})`:``]}),D&&(0,o.jsx)(`button`,{type:`button`,onClick:()=>E([]),className:`text-xs text-muted hover:text-text`,children:m(`play.clear`)})]}),D&&(0,o.jsx)(`div`,{className:`codeblock min-h-0 flex-1 overflow-y-auto rounded-none p-2 font-mono text-xs`,role:`log`,"aria-live":`polite`,children:T.length===0?(0,o.jsx)(`div`,{className:`text-muted/60`,children:`▸`}):T.map((e,t)=>(0,o.jsxs)(`div`,{className:`border-b border-border/30 px-1 py-0.5 last:border-0 ${e.kind===`error`?`text-err`:e.kind===`warn`?`text-warn`:``}`,children:[e.kind===`error`?`✕ `:e.kind===`warn`?`⚠ `:`▸ `,e.text]},t))})]})]})]})})}export{f as t};