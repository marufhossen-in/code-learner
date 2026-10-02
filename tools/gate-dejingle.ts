import { HUBS } from '../src/content';
const DUP = /([A-Za-z]{3,})-\1\b/g;
const hubs = process.argv.slice(2);
let fail = 0, checked = 0;
const all = HUBS as any[];
const list: any[] = hubs.length ? all.filter((h) => hubs.includes(h.slug)) : all;
for (const hub of list) {
  const slug = hub.slug;
  const L = hub.lessons || [];
  L.forEach((l: any, i: number) => {
    checked++;
    const err = (m: string) => { console.log('FAIL', slug, l.slug, m); fail++; };
    if (!(l.exercises?.length >= 3) && !l.blocks?.some((b: any) => b.type === 'exercise')) err('exercises<3');
    const qz = l.quiz ?? l.blocks?.find((b: any) => b.type === 'quiz');
    if (!(qz?.questions?.length >= 4)) err('quiz<4');
    if (!(l.summary?.en?.length > 60 && l.summary?.bn?.length > 60)) err('summary short');
    if (!/[\u0980-\u09FF]/.test(l.summary?.bn || '')) err('summary bn no-script');
    const heads = (l.blocks || []).filter((b: any) => b.type === 'heading').map((b: any) => b.id);
    if (heads.length >= 6 && !['what', 'why'].every((h) => heads.includes(h))) err('headings odd ' + heads.slice(0, 3).join('/'));
    const chant = (((l.title?.en || '') + (l.summary?.bn || '')).match(DUP) || []).length;
    if (chant >= 2) err('chant residue ' + chant);
    const isLast = i === L.length - 1;
    if (!isLast && !l.nextLesson) err('missing nextLesson');
    if (l.nextLesson && !isLast && l.nextLesson.slug !== L[i + 1].slug) err('chain mismatch ->' + l.nextLesson.slug + ' vs ' + L[i + 1].slug);
  });
}
console.log('HUBS:', list.length, 'LESSONS:', checked, 'FAILURES:', fail);
process.exit(fail ? 1 : 0);
