#!/usr/bin/env node
/**
 * Cross-platform GitHub Pages deployment script.
 * Solves Windows command-line length limit (ENAMETOOLONG) that breaks the gh-pages npm package.
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir) || !fs.existsSync(path.join(distDir, 'index.html'))) {
  console.log('Building project before deploying...');
  execSync('npm run build', { stdio: 'inherit' });
}

// 1. Ensure .nojekyll exists so GitHub Pages does not ignore underscore files or assets
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

// 2. Ensure 404.html exists for SPA routing on GitHub Pages
if (fs.existsSync(path.join(distDir, 'index.html')) && !fs.existsSync(path.join(distDir, '404.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
}

// 3. Find git remote origin URL
let remoteUrl = '';
try {
  remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
} catch (e) {
  remoteUrl = process.env.GIT_REMOTE || '';
}

console.log('Deploying to gh-pages branch...');

try {
  // Clean any previous git metadata in dist
  const distGit = path.join(distDir, '.git');
  if (fs.existsSync(distGit)) {
    fs.rmSync(distGit, { recursive: true, force: true });
  }

  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync('git config user.name "github-actions[bot]"', { cwd: distDir, stdio: 'ignore' });
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"', { cwd: distDir, stdio: 'ignore' });
  execSync('git checkout -B gh-pages', { cwd: distDir, stdio: 'inherit' });
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
  execSync('git commit -m "Deploy to GitHub Pages"', { cwd: distDir, stdio: 'inherit' });

  if (remoteUrl) {
    console.log(`Pushing to ${remoteUrl} (gh-pages branch)...`);
    execSync(`git push -f "${remoteUrl}" gh-pages`, { cwd: distDir, stdio: 'inherit' });
    console.log('✅ Successfully deployed to gh-pages branch!');
  } else {
    console.log('✅ Prepared dist folder with .nojekyll and 404.html for GitHub Pages.');
    console.log('   (Git remote not configured in local environment; push dist to your remote gh-pages branch)');
  }
} catch (err) {
  console.error('❌ Deployment error:', err.message);
  process.exit(1);
}
