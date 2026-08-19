# Raveel — Portfolio

A minimal one-page React portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Deploy with git

### Option A: GitHub Pages
1. Create a new repo on GitHub and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In `vite.config.js`, set `base: '/<repo-name>/'`.
3. Build and deploy:
   ```bash
   npm run build
   npm install -D gh-pages
   npx gh-pages -d dist
   ```
4. In the repo's Settings → Pages, set the source to the `gh-pages` branch.

### Option B: Vercel / Netlify
1. Push this project to a GitHub repo (steps above).
2. Import the repo on vercel.com or netlify.com.
3. Build command: `npm run build`, output directory: `dist`. Keep `base: '/'` in `vite.config.js`.
