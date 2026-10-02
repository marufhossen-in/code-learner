// three jobs arrive at t=0, one server takes a fixed time per page. FIFO, no jumps.
const jobs = [
  { name: 'thesis', pages: 40, arrives: 0 },
  { name: 'slides', pages: 6, arrives: 2 },
  { name: 'form', pages: 2, arrives: 3 },
  { name: 'book', pages: 120, arrives: 5 }
];
const rate = 4;                                  // pages printed per minute
let t = 0, waited = 0, max = 0, idle = 0;
for (const j of jobs) {
  if (j.arrives > t) { idle += j.arrives - t; t = j.arrives; }
  const start = t, done = start + j.pages / rate;
  const w = start - j.arrives;
  waited += w; max = Math.max(max, w); t = done;
  console.log(j.name.padEnd(7), 'waits', w.toFixed(1), 'min, prints', (done - start).toFixed(1), 'min, done at', done.toFixed(1));
}
console.log('mean wait', (waited / jobs.length).toFixed(2), 'min | worst wait', max.toFixed(1), 'min | idle', idle.toFixed(1), 'min | busy till', t.toFixed(1));
