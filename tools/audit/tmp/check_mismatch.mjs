import fs from 'fs';
const text = fs.readFileSync('src/content/index.ts', 'utf8');
const re = /import\s*\{\s*(\w+)\s*\}\s*from\s*'\.\/([^']+)'/g;
let m;
while ((m = re.exec(text)) !== null) {
  const dir = m[2];
  const indexPath = `src/content/${dir}/index.ts`;
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    const slugMatch = content.match(/slug:\s*'([^']*)'/);
    if (slugMatch && slugMatch[1] !== dir) {
      console.log(`Mismatch: folder "${dir}" has slug "${slugMatch[1]}" (var ${m[1]})`);
    }
  }
}
