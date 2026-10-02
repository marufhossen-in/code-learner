import fs from 'fs';
const files = fs.readdirSync('src/content/cpp/lessons');
const BN = /\p{Script=Bengali}/u;

for (const file of files) {
  const text = fs.readFileSync('src/content/cpp/lessons/' + file, 'utf8');
  const quizIdx = text.indexOf('quiz:');
  if (quizIdx !== -1) {
    const quizText = text.slice(quizIdx);
    const questions = quizText.split(/id:\s*'/);
    questions.slice(1).forEach((qText, qIdx) => {
      const optIdx = qText.indexOf('options:');
      if (optIdx !== -1) {
        const optBlock = qText.slice(optIdx, qText.indexOf('answer:'));
        const matches = [...optBlock.matchAll(/en:\s*'([^']*)'[\s\S]*?bn:\s*'([^']*)'/g)];
        matches.forEach((m, oIdx) => {
          const en = m[1];
          const bn = m[2];
          if (!BN.test(bn)) {
            console.log("FOUND LACK OF BN IN:", file, "Question:", qIdx + 1, "Option:", oIdx + 1);
            console.log("  EN:", en);
            console.log("  BN:", bn);
          }
        });
      }
    });
  }
}
