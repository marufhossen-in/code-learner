import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const files = [
  'the-residence-vow.ts',
  'the-invalidation-discipline.ts',
  'the-tower-of-layers.ts',
  'the-miss-clerks.ts',
  'the-eviction-court.ts',
  'the-stampede-wall.ts',
  'the-redis-district.ts',
  'the-replication-accords.ts',
  'the-capstone-tribunal.ts'
];

for (const file of files) {
  const filePath = resolve('src/content/caching/lessons', file);
  let content = readFileSync(filePath, 'utf8');

  // Replace Indian numbering comma groups in Bengali to standard groups or clean numbers
  content = content.replace(/১,০০,০০০/g, '১০০,০০০');
  content = content.replace(/১,০০/g, '১০০');
  content = content.replace(/১,৫০০/g, '১৫০০');
  content = content.replace(/১,০০০/g, '১০০০');
  content = content.replace(/১০,০০০/g, '১০০০০');
  content = content.replace(/১৬,৩৮৪/g, '১৬৩৮৪');
  content = content.replace(/২৮,৫০০/g, '২৮৫০০');
  content = content.replace(/৭০,০০০/g, '৭০০০০');
  content = content.replace(/৯৮,৫০০/g, '৯৮৫০০');

  // Also in English:
  content = content.replace(/100,000/g, '100000');
  content = content.replace(/১০০,০০০/g, '১০০০০০');
  content = content.replace(/10,000/g, '10000');
  content = content.replace(/1,000/g, '1000');
  content = content.replace(/1,500/g, '1500');
  content = content.replace(/16,384/g, '16384');
  content = content.replace(/28,500/g, '28500');
  content = content.replace(/70,000/g, '70000');
  content = content.replace(/98,500/g, '98500');

  writeFileSync(filePath, content, 'utf8');
}
console.log('Normalized comma numbers');
