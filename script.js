:root {
  --ink: #101828;
  --muted: #475467;
  --soft: #f5f7fb;
  --line: #d9e1ee;
  --card: #ffffff;
  --brand: #123c69;
  --brand-2: #2f80ed;
  --brand-3: #e9f2ff;
  --accent: #f6c85f;
  --shadow: 0 18px 50px rgba(16, 24, 40, 0.12);
  --radius: 22px;
  --max-width: 1120px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background: #fff;
  line-height: 1.65;
}

a { color: var(--brand-2); text-decoration: none; }
a:hover { text-decoration: underline; }

.hero {
  min-height: 78vh;
  color: white;
  background:
    radial-gradient(circle at 20% 20%, rgba(246, 200, 95, 0.32), transparent 28%),
    radial-gradient(circle at 88% 18%, rgba(47, 128, 237, 0.45), transparent 30%),
    linear-gradient(135deg, rgba(10, 29, 62, 0.94), rgba(18, 60, 105, 0.88)),
    url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80");
  background-size: cover;
  background-position: center;
  padding: 24px;
}

.topbar {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 0;
}

.brand {
  color: white;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 14px 20px;
  font-size: 0.95rem;
}

.nav-links a { color: rgba(255, 255, 255, 0.9); }
.nav-toggle { display: none; }

.hero-content {
  max-width: var(--max-width);
  margin: 90px auto 0;
}

.eyebrow,
.section-label {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  font-weight: 800;
}

.eyebrow { color: var(--accent); }
.section-label { color: var(--brand-2); }

h1, h2, h3 { line-height: 1.1; letter-spacing: -0.045em; }
h1 {
  max-width: 950px;
  margin: 0;
  font-size: clamp(2.4rem, 6vw, 5.4rem);
}
h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 4vw, 3.2rem);
}
h3 { margin: 0 0 10px; font-size: 1.2rem; }

.subtitle {
  max-width: 820px;
  margin: 24px 0 0;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  color: rgba(255, 255, 255, 0.86);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0;
}
.hero-meta span {
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 600;
}

.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  font-weight: 800;
}
.button.primary { color: #10203d; background: var(--accent); }
.button.secondary { color: white; border: 1px solid rgba(255,255,255,0.38); }

.section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 82px 24px;
}
.two-column {
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.6fr);
  gap: 46px;
}
.body-copy p:first-child { margin-top: 0; }

.accent-section {
  max-width: none;
  padding-left: max(24px, calc((100vw - var(--max-width)) / 2 + 24px));
  padding-right: max(24px, calc((100vw - var(--max-width)) / 2 + 24px));
  background: var(--soft);
}

.card-grid,
.people-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 26px;
}

.card,
.person,
.deadline-box {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 24px; }
.card p { margin: 0; color: var(--muted); }

.clean-list,
.paper-list { padding-left: 1.2rem; }
.clean-list li,
.paper-list li { margin-bottom: 10px; }

.deadline-box {
  display: grid;
  gap: 6px;
  margin-top: 24px;
  padding: 20px;
  background: var(--brand-3);
}
.deadline-box strong { color: var(--brand); }

.schedule {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
.schedule-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 24px;
  padding: 22px;
  background: #fff;
  border-bottom: 1px solid var(--line);
}
.schedule-row:last-child { border-bottom: 0; }
.schedule-row time { font-weight: 800; color: var(--brand-2); }
.schedule-row p { margin: 4px 0 0; color: var(--muted); }

.person {
  min-height: 180px;
  padding: 24px;
  color: var(--ink);
  text-align: center;
  transition: transform 160ms ease, box-shadow 160ms ease;
}
.person:hover { transform: translateY(-3px); text-decoration: none; }
.avatar {
  display: grid;
  place-items: center;
  width: 76px;
  height: 76px;
  margin: 0 auto 14px;
  border-radius: 50%;
  color: white;
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  font-weight: 900;
  font-size: 1.8rem;
}
.person strong, .person em { display: block; }
.person em { color: var(--muted); font-style: normal; font-size: 0.94rem; }
.compact .person { min-height: 155px; }

.footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 24px 50px;
  color: var(--muted);
  border-top: 1px solid var(--line);
}

@media (max-width: 900px) {
  .two-column { grid-template-columns: 1fr; gap: 12px; }
  .card-grid, .people-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .nav-toggle {
    display: inline-flex;
    color: white;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 10px;
    padding: 8px 10px;
    font-size: 1.2rem;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 70px;
    left: 24px;
    right: 24px;
    padding: 18px;
    border-radius: 18px;
    background: rgba(10, 29, 62, 0.96);
  }
  .nav-links.open { display: grid; }
}

@media (max-width: 560px) {
  .hero { padding: 18px; }
  .hero-content { margin-top: 58px; }
  .card-grid, .people-grid { grid-template-columns: 1fr; }
  .schedule-row { grid-template-columns: 1fr; gap: 4px; }
  .footer { flex-direction: column; }
}
