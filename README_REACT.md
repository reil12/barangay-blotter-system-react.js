# Barangay Blotter System — React frontend

**Stack:** Flask + SQL Server (JSON API) · React 18 + React Router + Vite (all pages) · Chart.js (analytics)

## How it fits together
- `app.py` — only JSON routes under `/api/...`, plus one catch-all that serves the React
  app's `index.html` for every other URL. React Router decides which page to show.
- `frontend/src/pages/` — one React component per old page: login, signup, OTP verification,
  dashboard, my reports, submit, emergency, guide, announcements, all admin pages,
  and the printable certificate.
- `frontend/src/styles/` — the original CSS from each template, loaded only while its page is open.
- `static/react/` — the built app (generated; already included, so Node is NOT needed to run).

Flow: browser → Flask serves `index.html` → React runs → `fetch('/api/...')` → Flask queries SQL Server → JSON → React renders.

## Run the system
    pip install flask flask-mail pyodbc openpyxl
    python app.py          # open http://127.0.0.1:5000

## Change the React code (needs Node.js 18+)
    cd frontend
    npm install
    npm run build          # writes the new app into static/react/
    npm run dev            # optional: hot reload on :5173 (API is proxied to Flask on :5000)

## Routes
| Page | URL | Access |
|---|---|---|
| Login / Sign up / OTP | /login, /signup, /verify-login, /verify-signup | guests |
| Resident pages | /dashboard, /my-reports, /submit, /emergency, /guide, /announcements | residents |
| Admin pages | /admin, /admin/analytics, /admin/users, /admin/announcements, /admin/edit/:id | admin |
| Printable certificate | /admin/certificate/:id | admin |
| Excel export | /api/admin/export (download link in the admin sidebar) | admin |
