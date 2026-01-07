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

// Check for absolute asset paths (should be relative with base: './')
const absoluteAssetPattern = /(src|href)=["']\/(?!\/)(assets|vite|static|favicon|manifest|icon)[^"']*["']/g;
const matches = html.matchAll(absoluteAssetPattern);

for (const match of matches) {
  issues.push(match[0]);
}

if (issues.length > 0) {
  console.error('Found absolute asset references (should be relative paths):\n');
  issues.forEach((issue) => console.error(` - ${issue}`));
  console.error('\nEnsure Vite base is set to "./" for relative paths and rebuild.');
  process.exit(1);
}

console.log('Asset base path check passed: all assets use relative paths.');
