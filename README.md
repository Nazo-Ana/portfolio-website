# Nazia Zazai Portfolio

Premium React, TypeScript, Vite, Tailwind CSS, Framer Motion, Three.js, and Recharts portfolio website.

## Open The Website

Do not open `dist/index.html` directly. Chrome blocks Vite JavaScript modules from `file://`, so it can look blank.

Use one of these instead:

```bash
npm run open
```

Then open:

```text
http://127.0.0.1:5173
```

For the production build:

```bash
npm run build
npm run serve
```

Then open:

```text
http://127.0.0.1:4173
```

## Commands

```bash
npm install
npm run open
npm run build
npm run lint
npm run serve
```

## Deploy To GitHub

Create an empty GitHub repository named `nazia-zazai-portfolio`, then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nazia-zazai-portfolio.git
git push -u origin main
```

## Deploy To Vercel

After the GitHub push, go to Vercel and import the GitHub repository.

Vercel settings are already configured:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

You can also deploy with the CLI after logging in:

```bash
npx vercel login
npx vercel --prod
```

## Notes

The CV is available at `public/nazia-zazai-cv.pdf`.
The portrait asset is `src/assets/nazia-portrait.png`.
