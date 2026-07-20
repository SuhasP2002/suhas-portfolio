# Suhas Pai — Portfolio

Full-stack portfolio built with **React (Vite)** on the frontend and
**Node.js / Express** on the backend. Content is pulled from your resume —
edit `client/src/data/content.js` to update anything (projects, experience,
skills, blog posts).

## What's new in this version

- **Redesigned visuals** — refined dark "API console" theme, gradient accents,
  scroll-reveal animations, animated hero terminal, scroll-spy nav, back-to-top
  button, and a top-of-page scroll progress bar.
- **`/github` — Live metrics dashboard.** Pulls your real GitHub contribution
  graph, stats card, and streak stats from free public embeddable services
  (`ghchart.rshah.org`, `github-readme-stats.vercel.app`, `streak-stats.demolab.com`),
  plus a live visitor-count badge (`visitor-badge.laobi.icu`). No API keys
  needed. If any of those services are down or rate-limited, the card fails
  gracefully with a text fallback instead of a broken image.
- **`/lab` — Interactive playground.**
  - *Dev Pulse*: live top-5 stories from Hacker News (public Firebase API,
    no key required).
  - *Debug Challenge*: a bank of programming/logic puzzles in
    `client/src/data/puzzles.js` — one "puzzle of the day" is picked
    deterministically per calendar date, with a shuffle button for more.
    Add your own puzzles any time by extending that file.
- **`/writing`** — a card linking out to your other creative project
  (currently pointed at Ink & Soul). Update the `writing` export in
  `content.js` to change it.
- **Project mockups** — each project card shows a small hand-built abstract
  UI illustration (`ProjectMockup.jsx`) matched to that project's domain, since
  no real screenshots were supplied. Swap these for real `<img>` screenshots
  any time by editing `Projects.jsx`.

## Structure

```
portfolio/
  client/   React app (Vite)
  server/   Express API (handles the contact form)
```

## Run it locally

Open two terminals.

**Terminal 1 — backend**
```bash
cd server
npm install
npm run dev        # http://localhost:4000
```

**Terminal 2 — frontend**
```bash
cd client
npm install
npm run dev         # http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to the Express server, so the
contact form on the page works out of the box.

## Editing content

Everything you'd want to change lives in one place:
`client/src/data/content.js` — your summary, skills, experience, projects,
education, certifications, and blog posts, plus the newer `heroStats`,
`githubUsername` (used to build the GitHub dashboard URLs) and `writing`
fields. There are a few `// TODO` comments marking placeholder links (GitHub
repo URLs, live demo URLs, LinkedIn) — swap those in with your real links.

Your resume PDF is at `client/public/resume.pdf` — replace it any time; the
"download résumé" link in the Contact section points at that file.

## Contact form

Submissions POST to `/api/contact`, get validated, and are appended to
`server/data/messages.json`. That's a simple starting point — to actually
receive emails, wire up an email provider (e.g. `nodemailer` with SMTP, or an
API like Resend/SendGrid) inside `server/routes/contact.js` where the
comment marks the spot.

## Deploying

- **Frontend**: `cd client && npm run build` → deploy the `dist/` folder to
  Vercel, Netlify, or similar.
- **Backend**: deploy the `server/` folder to Render, Railway, Fly.io, or
  similar. Set the frontend's API calls to point at your deployed backend
  URL (or configure a reverse proxy) instead of the local Vite proxy.

## Blog

The blog section currently ships with three sample posts as placeholders.
Replace the entries in `content.js` with your real writing, or extend it
into full post pages/routing later (e.g. with `react-router`) if you want
each post to have its own URL.
