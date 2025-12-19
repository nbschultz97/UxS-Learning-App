# UxS Learning App

Mobile-first web learning app for special operations robotics operators. The app delivers modules, role tracks, drills, skills maps, and references aligned to the concept-only constraints. The web client is the primary product; a legacy CLI now lives in `legacy_cli/`.

## Quick start (web app)
1. Install Node.js 18+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Build for static hosting (GitHub Pages or a root-level custom domain):
   ```bash
   npm run build
   ```

Safari note: the build ships a dual modern/legacy bundle via `@vitejs/plugin-legacy` so Safari 13+ can load the site. Always run `npm install` before `npm run build` to ensure the legacy plugin is present.

The site uses hash-based routing and a relative base path so the bundle works on GitHub Pages (project subpath) or a root-level deployment without 404s.

## Legacy CLI
The previous Python CLI now resides under `legacy_cli/`. It remains runnable for reference:
```bash
cd legacy_cli
pip install -e .
python -m uxs_app list
```
The CLI is no longer the primary delivery path and will be superseded by the web experience.

## Roadmap highlights
- Implement markdown-backed lessons, quizzes, and drill checklists.
- Add references ingestion (`/sources`) and validation.
- Track progress and gating across modules and role tracks.
- Deploy continuously to GitHub Pages.
