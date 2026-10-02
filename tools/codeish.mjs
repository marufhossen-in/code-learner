/**
 * One shared answer to “does this string owe the learner a Bengali twin?”.
 *
 * The rule is deliberately narrow. A code fragment, a compiler message, a shell command or an
 * identifier keeps exactly as it is in both languages — translating `var b int64 = int64(a)` or
 * `TypeError: Reduce of empty array` would only make the page harder to read. Natural English
 * prose must arrive in the spec with its Bengali written next to it, in context; nothing here
 * translates anything, it only decides what has to have been authored already.
 */
const letters = (s) => String(s ?? '').replace(/[^A-Za-z\u0980-\u09ff]/g, '').length;
const CODE_MARKS = /[(){}[\]<>|=]|\s\/\s|\.(length|map|filter|reduce|price|includes|compare|substring|split|Is|As|en|bn)\b/;
const COMMANDISH = /^\s*(go|npm|npx|pnpm|yarn|git|docker|kubectl|mysql|mysqldump|psql|sqlite3|sudo|apt|brew|pip|pip3|cargo|rustc|gcc|clang|make|curl|wget|systemctl|service|python|python3|node|java|javac|dotnet|mvn|gradle|php|composer|ruby|gem|cargo|terraform|aws|az|gcloud|kubectl|iptables|ufw|chmod|chown|ssh|scp|ping|dig|nslookup|netstat|ss|top|htop|free|df|du|journalctl|kill|ps|grep|sed|awk|cat|ls|cd|mkdir|rm|cp|mv|echo|touch|find|kill)\s+\S/;

/** Words that are the same characters in any language: SQL keywords and shell verbs. A string made
 * of these is a fragment of the language being taught, not prose about it. */
export const KEYWORDS = new Set(('select from where and or not null is in like between exists case when then else end order by group having limit offset join inner left right full outer cross on using natural union all insert into values update set delete create table alter drop add primary key foreign references constraint check default auto_increment unique index show describe explain analyze engine charset collate ignore replace duplicate load data outfile grant revoke begin commit rollback start transaction lock share for write read only as distinct use uses using count sum avg min max cast interval with recursive over partition rows range uncommitted repeatable serializable isolated commit cascade restrict no action now current_timestamp databases tables views schemas triggers procedures functions variables status processlist engines master slave relay binlog undo redo').split(' '));

const tokensOf = (s) => String(s).match(/[A-Za-z_][A-Za-z_0-9$]*/g) || [];
/** English function words: their presence means somebody is talking *about* the code. */
const STOP = new Set('the a an of to is are was were been being with that this these those it its we you they them their which when how why what must should could would will shall has have had not no nor but or if than so such each every some any other others from into onto over under about after before while because unless at by per via other'.split(' '));
function allKeywordish(t) {
  const toks = tokensOf(t);
  if (!toks.length) return false;
  if (toks.some((w) => STOP.has(w.toLowerCase()) && !KEYWORDS.has(w.toLowerCase()))) return false;   // English prose
  const sql = toks.filter((w) => KEYWORDS.has(w.toLowerCase())).length;
  if (!sql) return false;
  const known = toks.filter((w) => KEYWORDS.has(w.toLowerCase()) || w === w.toUpperCase() || w.length === 1);
  return known.length / toks.length >= 0.6;
}

/** code, a command, or a literal identifier — not prose the learner needs in their own language */
export function isCodeish(s) {
  const t = String(s ?? '').trim();
  if (!t) return true;
  if (CODE_MARKS.test(t) || COMMANDISH.test(t) || allKeywordish(t)) return true;
  const words = t.split(/[\s,.—–"'`]+/).filter(Boolean);
  if (!words.length) return true;
  const plain = words.filter((w) => /^[A-Za-z][A-Za-z''’-]*$/.test(w));
  return plain.length < Math.max(3, Math.ceil(words.length * 0.6));
}

/** the single predicate both the authoring tool and the gate judge by */
export const needsBn = (s) => letters(s) >= 12 && !isCodeish(s);
export { letters };
