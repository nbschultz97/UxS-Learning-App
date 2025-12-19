import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run "npm run build" before this check.');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');
const issues = [];

const absoluteAssetPattern = /(src|href)=["']\/(?!UxS-Learning-App\/)(assets|vite|static|favicon|manifest|icon)[^"']*["']/g;
const matches = html.matchAll(absoluteAssetPattern);

for (const match of matches) {
  issues.push(match[0]);
}

if (issues.length > 0) {
  console.error('Found asset references without the GitHub Pages base path:\n');
  issues.forEach((issue) => console.error(` - ${issue}`));
  console.error('\nEnsure Vite base is set to "/UxS-Learning-App/" and rebuild.');
  process.exit(1);
}

console.log('Asset base path check passed: no root-level asset references detected.');
