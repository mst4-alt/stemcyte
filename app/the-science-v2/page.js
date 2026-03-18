import PageContent from '../../components/PageContent';

export const metadata = {
  title: 'The Science | StemCyte',
};

const css = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:var(--font-lato),'Lato',sans-serif; background:#FAF9F7; color:#2C2A26; -webkit-font-smoothing:antialiased; line-height:1.65; }

/* ── DARK CINEMATIC HERO ── */
.hero-dark { position:relative; min-height:100vh; background:linear-gradient(170deg, #0A0412 0%, #1A0714 50%, #2A0E22 100%); overflow:hidden; display:flex; flex-direction:column; }
.hero-dark .ambient-orb { position:absolute; border-radius:50%; pointer-events:none; }
.hero-dark .ambient-orb.a { width:800px; height:800px; background:radial-gradient(circle, rgba(192,106,165,0.12) 0%, transparent 70%); top:-200px; right:-200px; }
.hero-dark .ambient-orb.b { width:600px; height:600px; background:radial-gradient(circle, rgba(108,26,85,0.2) 0%, transparent 70%); bottom:-100px; left:-100px; }
.hero-dark .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; max-width:1100px; margin:0 auto; padding:160px 48px 120px; position:relative; z-index:2; flex:1; }
.hero-dark .hero-text { position:relative; z-index:3; }
.hero-dark .hero-lbl { font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#C06AA5; margin-bottom:16px; display:inline-block; opacity:0; animation:heroFadeUp 0.8s ease 0.2s forwards; }
.hero-dark h1 { font-family:var(--font-heading),'Playfair Display',serif; font-size:48px; font-weight:400; line-height:1.1; letter-spacing:-1.5px; max-width:540px; margin-bottom:16px; color:#fff; opacity:0; animation:heroFadeUp 0.8s ease 0.4s forwards; }
.hero-dark h1 em { font-style:italic; color:#E8A0D0; }
.hero-dark .hero-sub { font-size:17px; color:rgba(255,255,255,0.4); max-width:460px; line-height:1.7; margin-bottom:32px; opacity:0; animation:heroFadeUp 0.8s ease 0.6s forwards; }
.hero-dark .hero-btns { display:flex; gap:12px; opacity:0; animation:heroFadeUp 0.8s ease 0.8s forwards; }
.hero-dark .btn-primary { background:#fff; color:#6C1A55; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:var(--font-lato),'Lato',sans-serif; transition:all 0.25s; text-decoration:none; display:inline-block; }
.hero-dark .btn-primary:hover { background:rgba(255,255,255,0.85); }
.hero-dark .btn-ghost { background:transparent; color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:1px solid rgba(255,255,255,0.25); cursor:pointer; font-family:var(--font-lato),'Lato',sans-serif; transition:all 0.25s; text-decoration:none; display:inline-block; }
.hero-dark .btn-ghost:hover { background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.35); }
.hero-dark .canvas-wrap { position:relative; width:100%; height:100%; min-height:440px; }
.hero-dark .canvas-wrap canvas { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); }

/* Hero stats bar */
.hero-stats-bar { position:relative; z-index:3; border-top:1px solid rgba(255,255,255,0.05); backdrop-filter:blur(12px); background:rgba(255,255,255,0.02); }
.hero-stats-bar .stats-inner { max-width:1200px; margin:0 auto; padding:24px 48px; display:flex; justify-content:center; gap:48px; }
.hero-stat-item { text-align:center; opacity:0; animation:heroFadeUp 0.8s ease forwards; }
.hero-stat-item:nth-child(1) { animation-delay:1.0s; }
.hero-stat-item:nth-child(2) { animation-delay:1.15s; }
.hero-stat-item:nth-child(3) { animation-delay:1.3s; }
.hero-stat-item .stat-val { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:32px; color:#E8A0D0; font-weight:400; line-height:1; }
.hero-stat-item .stat-desc { font-size:11px; color:rgba(255,255,255,0.35); margin-top:6px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; }

@keyframes heroFadeUp {
  from { opacity:0; transform:translateY(24px); }
  to { opacity:1; transform:translateY(0); }
}

/* ── SHARED ── */
.section { padding:80px 48px; max-width:1100px; margin:0 auto; }
.divider { max-width:1100px; margin:0 auto; padding:0 48px; }
.divider-line { height:1px; background:#E8E2DC; }

/* ── ZONE BASE ── */
.zone { padding:80px 48px; position:relative; overflow:hidden; }
.zone .inner { max-width:900px; margin:0 auto; position:relative; z-index:1; }
.zone .tc { text-align:center; margin-bottom:64px; }
.zone .zlbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:10px; }
.zone h2 { font-family:var(--font-heading),'Playfair Display',serif; font-size:40px; font-weight:400; margin-bottom:16px; line-height:1.15; }
.zone .lead { font-size:17px; color:#6B665D; line-height:1.7; max-width:600px; margin:0 auto; }
.zone .circle-deco { position:absolute; border-radius:50%; opacity:0.3; z-index:0; }

/* ── SECTION BANNERS ── */
.section-banner { padding:0 48px; margin-bottom:96px; display:flex; align-items:center; gap:28px; }
.section-banner .banner-label { font-family:var(--font-heading),'Playfair Display',serif; font-size:48px; font-weight:400; letter-spacing:-1.5px; line-height:1; white-space:nowrap; flex-shrink:0; }
.section-banner .banner-rule { height:1px; flex:1; border-radius:0; }
.zone-blue .banner-label { color:#3B6DC4; }
.zone-blue .banner-rule { background:rgba(59,109,196,0.25); }
.zone-plum .banner-label { color:#6C1A55; }
.zone-plum .banner-rule { background:rgba(108,26,85,0.2); }
.zone-sage .banner-label { color:#3D8B6A; }
.zone-sage .banner-rule { background:rgba(61,139,106,0.25); }

/* ── BLUE ZONE — STEM CELLS ── */
.zone-blue { background:#EDF5FF; }
.zone-blue .zlbl { color:#3B6DC4; }
.zone-blue .circle-deco { width:500px; height:500px; background:#D4E4FF; right:-150px; top:-150px; }

/* Journey steps */
.journey-intro { text-align:center; font-size:17px; color:#6B665D; line-height:1.7; max-width:600px; margin:0 auto 48px; }
.journey { max-width:800px; margin:0 auto; position:relative; }
.journey-step { display:flex; gap:32px; align-items:flex-start; position:relative; padding-bottom:48px; }
.journey-step:last-child { padding-bottom:0; }
.journey-step:last-child .journey-line { display:none; }
.journey-circle { width:80px; height:80px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; position:relative; z-index:2; }
.journey-circle span { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:28px; font-weight:400; }
.journey-line { position:absolute; left:40px; top:80px; bottom:0; width:2px; background:#D4E4FF; z-index:1; }
.journey-content { padding-top:16px; flex:1; }
.journey-content h4 { font-size:18px; font-weight:700; margin-bottom:8px; }
.journey-content p { font-size:15px; color:#6B665D; line-height:1.8; }
.journey-content p strong { color:#2C2A26; }

/* ── PLUM ZONE — CORD BLOOD ── */
.zone-plum { background:#FBF5F9; }
.zone-plum .zlbl { color:#6C1A55; }
.zone-plum .circle-deco { width:500px; height:500px; background:#F0E0EB; left:-200px; bottom:-200px; }

/* Impact hero */
.impact-hero { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; max-width:1100px; margin:0 auto 48px; }
.impact-left { text-align:center; }
.impact-big { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:120px; color:#6C1A55; font-weight:400; line-height:1; }
.impact-label { font-size:20px; font-weight:700; color:#2C2A26; margin-top:4px; }
.impact-sublabel { font-size:15px; color:#8A857A; margin-top:4px; }
.impact-narrative p { font-size:15px; color:#6B665D; line-height:1.8; margin-bottom:14px; }
.impact-narrative p strong { color:#2C2A26; }

/* Category summary cards */
.cat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; max-width:1100px; margin:0 auto 32px; }
.cat-card { border-radius:12px; padding:24px; text-align:center; border:1px solid transparent; transition:transform 0.3s ease; }
.cat-card:hover { transform:translateY(-4px); }
.cat-icon { width:48px; height:48px; border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center; }
.cat-count { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:28px; font-weight:400; line-height:1; margin-bottom:4px; }
.cat-card h4 { font-size:14px; font-weight:700; margin-bottom:6px; }
.cat-desc { font-size:12px; color:#8A857A; line-height:1.5; }

/* Match stat cards */
.match-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; max-width:1100px; margin:0 auto; }
.match-card { background:#fff; border-radius:12px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); text-align:center; }
.match-card .mv { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:36px; color:#6C1A55; font-weight:400; line-height:1; }
.match-card .ml { font-size:14px; font-weight:700; color:#2C2A26; margin-top:6px; }
.match-card .md { font-size:12px; color:#8A857A; margin-top:4px; }

/* ── PLUM DEEP — 80+ DISEASES ── */
.zone-plum-deep { background:#F3E8EE; padding:80px 48px; position:relative; overflow:visible; }
.zone-plum-deep .circle-deco { position:absolute; width:400px; height:400px; border-radius:50%; background:#F0E0EB; opacity:0.25; right:-120px; bottom:-120px; z-index:0; }
.zone-plum-deep .inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; }
.zone-plum-deep .tc { text-align:center; margin-bottom:40px; }
.zone-plum-deep .zlbl { font-size:13px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.zone-plum-deep h2 { font-family:var(--font-heading),'Playfair Display',serif; font-size:40px; font-weight:400; margin-bottom:10px; line-height:1.15; }
.zone-plum-deep .lead { font-size:16px; color:#6B665D; max-width:520px; margin:0 auto; line-height:1.7; }
.dgrid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.db { border-radius:12px; padding:28px; position:relative; overflow:visible; }
.db .dh { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
.db h4 { font-size:16px; font-weight:700; }
.db .dc { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:24px; font-weight:400; }
.db .dt { display:flex; flex-wrap:wrap; gap:6px; }
.db .dt .tag { background:rgba(255,255,255,0.75); padding:6px 14px; border-radius:100px; font-size:13px; font-weight:600; backdrop-filter:blur(4px); cursor:default; position:relative; will-change:transform; transition:transform 0.5s cubic-bezier(0.23,1,0.32,1); }
.db .dt .tag:hover { transform:translate(0,0) !important; background:rgba(255,255,255,0.95); z-index:50; }
.db .dt .tag .tip { display:none; position:absolute; bottom:calc(100% + 8px); left:50%; transform:translateX(-50%); background:#2C2A26; color:#fff; padding:10px 14px; border-radius:8px; font-size:11px; font-weight:400; line-height:1.5; width:220px; text-align:left; box-shadow:0 4px 16px rgba(0,0,0,0.15); z-index:100; pointer-events:none; }
.db .dt .tag .tip::after { content:''; position:absolute; top:100%; left:50%; transform:translateX(-50%); border:6px solid transparent; border-top-color:#2C2A26; }
.db .dt .tag:hover .tip { display:block; }
.db-c { background:#FBF5F9; }
.db-c h4, .db-c .dc { color:#6C1A55; }
.db-c .dt .tag { color:#6C1A55; }
.db-b { background:#EDF5FF; }
.db-b h4, .db-b .dc { color:#3B6DC4; }
.db-b .dt .tag { color:#3B6DC4; }
.db-i { background:#F0F7F4; }
.db-i h4, .db-i .dc { color:#3D8B6A; }
.db-i .dt .tag { color:#2A6B4F; }
.db-m { background:#FDF5EB; }
.db-m h4, .db-m .dc { color:#C4943E; }
.db-m .dt .tag { color:#8B6914; }

/* ── SAGE ZONE — CORD TISSUE ── */
.zone-sage { background:#F0F7F4; }
.zone-sage .zlbl { color:#3D8B6A; }
.zone-sage .circle-deco { width:450px; height:450px; background:#D4E8DC; right:-100px; top:50%; transform:translateY(-50%); }
.zone-sage .compare-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; max-width:700px; margin:0 auto; }
.zone-sage .ccard { background:#fff; border-radius:12px; padding:28px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.zone-sage .ccard .ctag { display:inline-block; padding:4px 12px; border-radius:100px; font-size:10px; font-weight:700; margin-bottom:14px; }
.zone-sage .ccard h3 { font-family:var(--font-heading),'Playfair Display',serif; font-size:24px; font-weight:400; margin-bottom:4px; }
.zone-sage .ccard .ctype { font-size:13px; font-weight:700; margin-bottom:12px; }
.zone-sage .ccard .cstats { display:flex; gap:16px; margin-bottom:12px; }
.zone-sage .ccard .cst { text-align:center; }
.zone-sage .ccard .cst .cv { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:24px; font-weight:400; }
.zone-sage .ccard .cst .cd { font-size:10px; color:#B0AB9E; }
.zone-sage .ccard p { font-size:13px; color:#8A857A; line-height:1.6; }
.zone-sage .ccard-plum .ctag { background:#FBF5F9; color:#6C1A55; }
.zone-sage .ccard-plum .ctype { color:#6C1A55; }
.zone-sage .ccard-plum .cv { color:#6C1A55; }
.zone-sage .ccard-sage .ctag { background:#D4E8DC; color:#2A6B4F; }
.zone-sage .ccard-sage .ctype { color:#3D8B6A; }
.zone-sage .ccard-sage .cv { color:#3D8B6A; }

/* ── SAGE DEEP — CLINICAL TRIALS (split layout) ── */
.zone-sage-deep { background:#DFF0E6; padding:80px 48px; position:relative; overflow:hidden; }
.zone-sage-deep .circle-deco { position:absolute; width:400px; height:400px; border-radius:50%; background:#D4E8DC; opacity:0.3; left:-120px; top:-120px; z-index:0; }
.zone-sage-deep .inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; }
.zone-sage-deep .tc { text-align:center; margin-bottom:40px; }
.zone-sage-deep .zlbl { font-size:13px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#3D8B6A; margin-bottom:10px; }
.zone-sage-deep h2 { font-family:var(--font-heading),'Playfair Display',serif; font-size:40px; font-weight:400; margin-bottom:10px; line-height:1.15; }
.zone-sage-deep .lead { font-size:16px; color:#6B665D; max-width:560px; margin:0 auto; line-height:1.7; }

.trials-split { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
.trials-col-header { display:flex; align-items:center; gap:12px; margin-bottom:20px; }
.trials-col-header h3 { font-family:var(--font-heading),'Playfair Display',serif; font-size:24px; font-weight:400; }
.trials-badge { display:inline-block; padding:4px 12px; border-radius:100px; font-size:10px; font-weight:700; }
.trials-badge-plum { background:#FBF5F9; color:#6C1A55; }
.trials-badge-sage { background:#D4E8DC; color:#2A6B4F; }

/* StemCyte trial cards */
.sc-trial-card { background:#fff; border-radius:12px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); margin-bottom:16px; }
.sc-trial-card:last-child { margin-bottom:0; }
.sc-trial-card .phase { display:inline-block; padding:3px 10px; border-radius:100px; font-size:10px; font-weight:700; margin-bottom:12px; background:#FBF5F9; color:#6C1A55; }
.sc-trial-card h4 { font-size:15px; font-weight:700; margin-bottom:6px; }
.sc-trial-card p { font-size:13px; color:#8A857A; line-height:1.6; margin-bottom:8px; }
.sc-trial-card .source { font-size:11px; color:#6C1A55; font-weight:700; }

/* Global research list */
.global-item { display:flex; gap:12px; align-items:flex-start; margin-bottom:20px; }
.global-item:last-child { margin-bottom:0; }
.global-dot { width:10px; height:10px; border-radius:50%; margin-top:5px; flex-shrink:0; }
.global-dot-inv { background:#3D8B6A; }
.global-dot-pre { background:#B8D8C7; }
.global-content h4 { font-size:14px; font-weight:700; margin-bottom:2px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
.global-content .tier { display:inline-block; padding:2px 8px; border-radius:100px; font-size:9px; font-weight:700; }
.tier-inv { background:#F0F7F4; color:#2A6B4F; }
.tier-pre { background:#F5F3F0; color:#8A857A; }
.global-content p { font-size:13px; color:#8A857A; line-height:1.6; }

.trial-stat-row { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
.trial-stat { background:#fff; border-radius:12px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); text-align:center; }
.trial-stat .tv { font-family:var(--font-numbers),'Source Serif 4',serif; font-size:36px; color:#3D8B6A; font-weight:400; line-height:1; }
.trial-stat .td { font-size:12px; color:#8A857A; margin-top:4px; }

/* ── CTA ── */
.cta-banner { margin:80px 48px; border-radius:16px; background:linear-gradient(160deg,#6C1A55,#3D0F31); padding:80px 64px; text-align:center; position:relative; overflow:hidden; }
.cta-banner::before { content:''; position:absolute; width:500px; height:500px; border-radius:50%; background:rgba(192,106,165,0.08); top:-200px; right:-100px; }
.cta-banner h2 { font-family:var(--font-heading),'Playfair Display',serif; font-size:36px; color:#fff; margin-bottom:12px; position:relative; }
.cta-banner h2 em { font-style:italic; color:#E8A0D0; }
.cta-banner p { font-size:16px; color:rgba(255,255,255,0.5); margin-bottom:32px; position:relative; }
.cta-banner .btns { display:flex; gap:12px; justify-content:center; position:relative; }
.btn-w { background:#fff; color:#6C1A55; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:var(--font-lato),'Lato',sans-serif; transition:all 0.25s; }
.btn-w:hover { background:rgba(255,255,255,0.85); }
.btn-gd { background:transparent; color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:1px solid rgba(255,255,255,0.25); cursor:pointer; font-family:var(--font-lato),'Lato',sans-serif; transition:all 0.25s; }
.btn-gd:hover { background:rgba(255,255,255,0.20); border-color:rgba(255,255,255,0.35); }

/* ── ANIMATIONS ── */
.anim { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
.anim.vis { opacity:1; transform:translateY(0); }

/* ── RESPONSIVE ── */
@media (max-width:900px) {
  .hero-dark .hero-grid { grid-template-columns:1fr; padding:140px 24px 48px; }
  .hero-dark .canvas-wrap { display:none; }
  .hero-dark h1 { font-size:34px; }
  .hero-dark .hero-sub { font-size:15px; }
  .hero-dark .hero-btns { flex-wrap:wrap; }
  .hero-stats-bar .stats-inner { padding:20px 24px; gap:24px; flex-wrap:wrap; }
  .hero-stat-item .stat-val { font-size:24px; }
  .zone, .zone-plum-deep, .zone-sage-deep { padding:64px 24px; }
  .section, .divider { padding-left:24px; padding-right:24px; }
  .dgrid { grid-template-columns:1fr; }
  .zone-sage .compare-grid { grid-template-columns:1fr; }
  .impact-hero { grid-template-columns:1fr; text-align:center; }
  .impact-big { font-size:80px; }
  .cat-grid { grid-template-columns:1fr 1fr; }
  .match-grid { grid-template-columns:1fr; }
  .trials-split { grid-template-columns:1fr; }
  .trial-stat-row { grid-template-columns:1fr; }
  .cta-banner { margin:48px 20px; padding:48px 24px; }
  .db .dt .tag .tip { display:none; }
  .db .dt .tag.tip-open .tip { display:block; }
  .section-banner .banner-label { font-size:32px; }
  .section-banner { padding:0 24px; margin-bottom:40px; gap:20px; }
}
@media (max-width:600px) {
  .hero-dark h1 { font-size:28px; }
  .cat-grid { grid-template-columns:1fr; }
  .impact-big { font-size:64px; }
  .cta-banner .btns { flex-direction:column; align-items:center; }
  .hero-dark .hero-btns { flex-direction:column; }
}
`;

const html = `<!-- DARK CINEMATIC HERO -->
<section class="hero-dark" id="hero">
  <div class="ambient-orb a"></div>
  <div class="ambient-orb b"></div>
  <div class="hero-grid">
    <div class="hero-text">
      <div class="hero-lbl">The Science</div>
      <h1>Your baby is born with the power to <em>save a life</em></h1>
      <p class="hero-sub">Your newborn&rsquo;s umbilical cord contains stem cells that treat over 80 diseases today and are being researched for hundreds more.</p>
      <div class="hero-btns">
        <a href="/pricing" class="btn-primary">Build your plan</a>
        <a href="#blue-zone" class="btn-ghost">Explore the science</a>
      </div>
    </div>
    <div class="canvas-wrap">
      <canvas id="cell-canvas"></canvas>
    </div>
  </div>
  <div class="hero-stats-bar">
    <div class="stats-inner">
      <div class="hero-stat-item">
        <div class="stat-val">80+</div>
        <div class="stat-desc">Diseases treatable today</div>
      </div>
      <div class="hero-stat-item">
        <div class="stat-val">60,000+</div>
        <div class="stat-desc">Transplants since 1988</div>
      </div>
      <div class="hero-stat-item">
        <div class="stat-val">500+</div>
        <div class="stat-desc">Active clinical trials</div>
      </div>
    </div>
  </div>
</section>

<!-- ════ BLUE ZONE — STEM CELLS ════ -->
<section class="zone zone-blue" id="blue-zone">
  <div class="circle-deco"></div>
  <div class="section-banner">
    <div class="banner-label">The Science</div>
    <div class="banner-rule"></div>
  </div>
  <div class="inner" style="max-width:1100px">
    <div class="tc">
      <h2>What are cord blood stem cells?</h2>
    </div>
    <p class="journey-intro anim">Think of stem cells as your body&rsquo;s starter kit. They&rsquo;re the original cells that every other cell in your body comes from.</p>
    <div class="journey">
      <div class="journey-step anim">
        <div class="journey-circle" style="background:#D4E4FF">
          <span style="color:#3B6DC4">1</span>
        </div>
        <div class="journey-line"></div>
        <div class="journey-content">
          <h4 style="color:#3B6DC4">Your baby is born with them</h4>
          <p>The blood left in your baby&rsquo;s umbilical cord after birth is rich with <strong>stem cells</strong> &mdash; the same type used in bone marrow transplants for decades. They build your baby&rsquo;s entire blood and immune system.</p>
        </div>
      </div>
      <div class="journey-step anim">
        <div class="journey-circle" style="background:#F0E0EB">
          <span style="color:#6C1A55">2</span>
        </div>
        <div class="journey-line"></div>
        <div class="journey-content">
          <h4 style="color:#6C1A55">They can rebuild what&rsquo;s broken</h4>
          <p>Every red blood cell, white blood cell, and platelet traces back to these stem cells. When someone fights leukemia, sickle cell disease, or an immune deficiency, <strong>a transplant can regenerate their entire blood and immune system</strong>.</p>
        </div>
      </div>
      <div class="journey-step anim">
        <div class="journey-circle" style="background:#D4E8DC">
          <span style="color:#2A6B4F">3</span>
        </div>
        <div class="journey-line"></div>
        <div class="journey-content">
          <h4 style="color:#2A6B4F">They&rsquo;re younger and stronger</h4>
          <p>Cord blood stem cells are <strong>more adaptable</strong> than adult bone marrow, cause fewer complications in transplant, and don&rsquo;t require a perfect donor match.</p>
        </div>
      </div>
      <div class="journey-step anim">
        <div class="journey-circle" style="background:#FDF5EB">
          <span style="color:#C4943E">4</span>
        </div>
        <div class="journey-content">
          <h4 style="color:#C4943E">You have one chance to collect them</h4>
          <p>Collection happens in the minutes after birth, after the cord is clamped and cut. <strong>Zero risk to mother or baby.</strong> If they&rsquo;re not collected, they&rsquo;re discarded forever.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ════ PLUM ZONE — CORD BLOOD ════ -->
<section class="zone zone-plum">
  <div class="circle-deco"></div>
  <div class="section-banner">
    <div class="banner-label">Cord Blood</div>
    <div class="banner-rule"></div>
  </div>
  <div class="inner" style="max-width:1100px">
    <div class="tc">
      <h2>Proven today &mdash; treating 80+ diseases</h2>
    </div>

    <!-- Impact hero -->
    <div class="impact-hero anim">
      <div class="impact-left">
        <div class="impact-big">80+</div>
        <div class="impact-label">diseases treatable today</div>
        <div class="impact-sublabel">with cord blood stem cell transplants</div>
      </div>
      <div class="impact-narrative">
        <p>Cord blood has been used in over <strong>60,000 transplants worldwide since 1988</strong>. It treats cancers like leukemia and lymphoma, blood disorders like sickle cell disease, inherited immune deficiencies, and metabolic conditions.</p>
        <p>These aren&rsquo;t future possibilities &mdash; they&rsquo;re treatments happening in hospitals right now, every day.</p>
      </div>
    </div>

    <!-- 4 category summary cards -->
    <div class="cat-grid anim">
      <div class="cat-card" style="background:#FBF5F9; border-color:#F0E0EB">
        <div class="cat-icon" style="background:#F0E0EB">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
        </div>
        <div class="cat-count" style="color:#6C1A55">22+</div>
        <h4 style="color:#6C1A55">Cancers</h4>
        <div class="cat-desc">Leukemias, lymphomas, myeloma, and more</div>
      </div>
      <div class="cat-card" style="background:#EDF5FF; border-color:#D4E4FF">
        <div class="cat-icon" style="background:#D4E4FF">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
        </div>
        <div class="cat-count" style="color:#3B6DC4">17+</div>
        <h4 style="color:#3B6DC4">Blood disorders</h4>
        <div class="cat-desc">Sickle cell, thalassemia, aplastic anemia</div>
      </div>
      <div class="cat-card" style="background:#F0F7F4; border-color:#D4E8DC">
        <div class="cat-icon" style="background:#D4E8DC">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A6B4F" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="cat-count" style="color:#2A6B4F">30+</div>
        <h4 style="color:#2A6B4F">Immune deficiencies</h4>
        <div class="cat-desc">SCID, Wiskott-Aldrich, CGD, and many more</div>
      </div>
      <div class="cat-card" style="background:#FDF5EB; border-color:#F5E6CC">
        <div class="cat-icon" style="background:#F5E6CC">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4943E" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div class="cat-count" style="color:#C4943E">16+</div>
        <h4 style="color:#C4943E">Metabolic disorders</h4>
        <div class="cat-desc">Hurler, Krabbe, ALD, Gaucher, and more</div>
      </div>
    </div>

    <!-- 3 match/stat cards -->
    <div class="match-grid anim">
      <div class="match-card">
        <div class="mv">100%</div>
        <div class="ml">Match for your baby</div>
        <div class="md">Guaranteed perfect match</div>
      </div>
      <div class="match-card">
        <div class="mv">75%</div>
        <div class="ml">Sibling partial match</div>
        <div class="md">High likelihood of compatibility</div>
      </div>
      <div class="match-card">
        <div class="mv">60K+</div>
        <div class="ml">Transplants worldwide</div>
        <div class="md">Since 1988</div>
      </div>
    </div>
  </div>
</section>

<!-- ════ PLUM DEEP — 80+ DISEASES ════ -->
<section class="zone-plum-deep">
  <div class="circle-deco"></div>
  <div class="inner">
    <div class="tc">
      <div class="zlbl">What cord blood treats</div>
      <h2>What these 80+ diseases actually are</h2>
      <p class="lead">Hover over any condition to learn more. These are not future possibilities &mdash; these are being treated right now.</p>
    </div>
    <div class="dgrid">
      <div class="db db-c anim">
        <div class="dh"><h4>Cancers &amp; malignancies</h4><div class="dc">22+</div></div>
        <div class="dt">
          <div class="tag">B-cell ALL<div class="tip">The most common childhood leukemia. Cord blood transplant replaces cancerous bone marrow with healthy stem cells that rebuild the immune system.</div></div>
          <div class="tag">T-cell ALL<div class="tip">An aggressive form of acute lymphoblastic leukemia affecting T-cells. Transplant offers a curative option when chemotherapy alone is insufficient.</div></div>
          <div class="tag">Acute myeloid leukemia<div class="tip">Fast-growing cancer of blood-forming cells in the bone marrow. Cord blood transplant is often the best option when chemotherapy fails or disease relapses.</div></div>
          <div class="tag">Chronic myeloid leukemia<div class="tip">Slower-growing blood cancer caused by an abnormal chromosome. Transplant can cure when targeted therapies like imatinib stop working.</div></div>
          <div class="tag">JMML<div class="tip">Juvenile myelomonocytic leukemia &mdash; a rare childhood leukemia. Stem cell transplant is currently the only known cure for this disease.</div></div>
          <div class="tag">Hodgkin lymphoma<div class="tip">Cancer of the lymphatic system characterized by Reed-Sternberg cells. Transplant used for relapsed or treatment-resistant cases.</div></div>
          <div class="tag">DLBCL<div class="tip">Diffuse large B-cell lymphoma &mdash; the most common type of non-Hodgkin lymphoma. Transplant rebuilds the immune system after intensive treatment.</div></div>
          <div class="tag">Burkitt lymphoma<div class="tip">A very fast-growing form of non-Hodgkin lymphoma, most common in children. Transplant provides a curative pathway for aggressive cases.</div></div>
          <div class="tag">Multiple myeloma<div class="tip">Cancer of plasma cells in the bone marrow. Transplant follows high-dose chemotherapy to restore healthy blood cell production.</div></div>
          <div class="tag">Mantle cell lymphoma<div class="tip">A rare B-cell lymphoma that tends to recur. Transplant can extend remission and improve long-term outcomes.</div></div>
          <div class="tag">Follicular lymphoma<div class="tip">A slow-growing but often recurring non-Hodgkin lymphoma. Transplant considered for cases that transform or stop responding to treatment.</div></div>
          <div class="tag">Waldenstr&ouml;m&rsquo;s<div class="tip">Waldenstr&ouml;m&rsquo;s macroglobulinemia &mdash; a rare lymphoma producing excess antibody protein. Transplant for aggressive or treatment-resistant disease.</div></div>
        </div>
      </div>
      <div class="db db-b anim">
        <div class="dh"><h4>Blood &amp; marrow disorders</h4><div class="dc">17+</div></div>
        <div class="dt">
          <div class="tag">Sickle cell disease<div class="tip">Red blood cells become rigid and sickle-shaped, blocking blood flow and causing pain crises. Transplant can cure the disease by replacing faulty marrow.</div></div>
          <div class="tag">Beta-thalassemia major<div class="tip">Severely abnormal hemoglobin production requiring lifelong transfusions. Transplant is the only potential cure for the most severe form.</div></div>
          <div class="tag">Severe aplastic anemia<div class="tip">Bone marrow stops making enough blood cells, causing dangerous drops in all blood counts. Transplant replaces the damaged marrow entirely.</div></div>
          <div class="tag">Fanconi anemia<div class="tip">Rare inherited condition causing progressive bone marrow failure and cancer predisposition. Transplant is the primary life-saving treatment.</div></div>
          <div class="tag">Diamond-Blackfan anemia<div class="tip">The body cannot make enough red blood cells from birth. Transplant can cure the underlying genetic defect in the bone marrow.</div></div>
          <div class="tag">MDS<div class="tip">Myelodysplastic syndromes &mdash; bone marrow fails to produce healthy blood cells properly. Transplant replaces faulty marrow with healthy stem cells.</div></div>
          <div class="tag">Myelofibrosis<div class="tip">Scar tissue replaces healthy bone marrow, disrupting normal blood cell production. Transplant is the only curative treatment available.</div></div>
          <div class="tag">Dyskeratosis congenita<div class="tip">Rare genetic disorder causing bone marrow failure, abnormal skin, and nail changes. Transplant addresses the life-threatening marrow failure.</div></div>
          <div class="tag">Shwachman-Diamond<div class="tip">Inherited condition affecting bone marrow, the pancreas, and skeletal development. Transplant treats the marrow failure component.</div></div>
          <div class="tag">PNH<div class="tip">Paroxysmal nocturnal hemoglobinuria &mdash; red blood cells break down prematurely due to a missing surface protein. Transplant is the only curative treatment.</div></div>
        </div>
      </div>
      <div class="db db-i anim">
        <div class="dh"><h4>Immune deficiencies</h4><div class="dc">30+</div></div>
        <div class="dt">
          <div class="tag">SCID<div class="tip">Severe combined immunodeficiency &mdash; &ldquo;bubble boy disease.&rdquo; Without transplant, infants cannot survive normal infections. Early transplant is life-saving.</div></div>
          <div class="tag">Wiskott-Aldrich<div class="tip">Causes eczema, dangerously low platelets, and progressive immune deficiency. Transplant is the only known cure for this X-linked condition.</div></div>
          <div class="tag">CGD<div class="tip">Chronic granulomatous disease &mdash; white blood cells cannot kill certain bacteria and fungi, leading to severe recurrent infections. Transplant restores immune function.</div></div>
          <div class="tag">Complete DiGeorge<div class="tip">The most severe form of DiGeorge syndrome with absent thymus function and no T-cells. Transplant can reconstitute the immune system.</div></div>
          <div class="tag">Omenn syndrome<div class="tip">A severe form of SCID with widespread skin inflammation, enlarged organs, and elevated IgE. Transplant is urgently life-saving.</div></div>
          <div class="tag">Bare lymphocyte syndrome<div class="tip">Immune cells lack critical MHC surface molecules needed to coordinate immune responses. Transplant provides cells with normal surface proteins.</div></div>
          <div class="tag">Leukocyte adhesion deficiency<div class="tip">White blood cells cannot migrate to infection sites in the body. Even minor infections become life-threatening without transplant.</div></div>
          <div class="tag">IPEX syndrome<div class="tip">Immune dysregulation, polyendocrinopathy, enteropathy, X-linked &mdash; the immune system attacks the body&rsquo;s own organs. Transplant can reset the immune system.</div></div>
          <div class="tag">HLH<div class="tip">Hemophagocytic lymphohistiocytosis &mdash; immune cells become overactivated and attack the body&rsquo;s own tissues. Transplant is curative for the familial form.</div></div>
          <div class="tag">Hyper IgM syndromes<div class="tip">B-cells cannot switch from making IgM to other antibody types, leaving patients vulnerable to infections. Transplant restores normal antibody production.</div></div>
          <div class="tag">+ 20 more SCIDs<div class="tip">Over 20 molecularly defined forms of SCID &mdash; including CD45, CD3, ZAP70, Artemis, PNP, and DOCK2 deficiencies &mdash; are treatable with cord blood transplant.</div></div>
        </div>
      </div>
      <div class="db db-m anim">
        <div class="dh"><h4>Metabolic disorders</h4><div class="dc">16+</div></div>
        <div class="dt">
          <div class="tag">Hurler syndrome<div class="tip">Cannot break down complex sugar molecules, causing progressive damage to the brain, heart, and organs. Early transplant prevents irreversible decline.</div></div>
          <div class="tag">Krabbe disease<div class="tip">Destroys the protective myelin coating of nerves in the brain and body. Early transplant before symptom onset can slow or halt progression.</div></div>
          <div class="tag">ALD<div class="tip">Adrenoleukodystrophy &mdash; damages the myelin sheath protecting brain nerves. Transplant in early stages can halt disease progression and preserve function.</div></div>
          <div class="tag">MLD<div class="tip">Metachromatic leukodystrophy &mdash; progressive loss of myelin in the nervous system. Early transplant can stabilize the disease before major symptoms appear.</div></div>
          <div class="tag">Gaucher disease<div class="tip">Fat deposits accumulate in the spleen, liver, and bone marrow. Transplant addresses severe forms that don&rsquo;t respond to enzyme replacement therapy.</div></div>
          <div class="tag">Wolman disease<div class="tip">A severe lipid storage disorder causing organ damage in infancy. Transplant can provide the missing enzyme and prevent fatal organ failure.</div></div>
          <div class="tag">Alpha-mannosidosis<div class="tip">A rare lysosomal storage disorder causing progressive intellectual disability and skeletal abnormalities. Transplant can slow disease progression.</div></div>
          <div class="tag">Maroteaux-Lamy<div class="tip">MPS VI &mdash; the body cannot break down certain complex sugars, leading to skeletal deformities and organ damage. Transplant provides the missing enzyme.</div></div>
          <div class="tag">Osteopetrosis<div class="tip">Bones become abnormally dense and brittle due to faulty osteoclasts. Transplant provides healthy cells capable of proper bone remodeling.</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ════ SAGE ZONE — CORD TISSUE ════ -->
<section class="zone zone-sage">
  <div class="circle-deco"></div>
  <div class="section-banner">
    <div class="banner-label">Cord Tissue</div>
    <div class="banner-rule"></div>
  </div>
  <div class="inner">
    <div class="tc">
      <h2>The future of regenerative medicine</h2>
      <p class="lead">Cord tissue contains mesenchymal stem cells (MSCs) that repair muscle, bone, cartilage, skin, and organs. No HLA matching required &mdash; any family member can use them.</p>
    </div>
    <div class="compare-grid">
      <div class="ccard ccard-plum anim">
        <div class="ctag">Proven today</div>
        <h3>Cord blood</h3>
        <div class="ctype">Hematopoietic stem cells</div>
        <div class="cstats"><div class="cst"><div class="cv">80+</div><div class="cd">Approved</div></div><div class="cst"><div class="cv">60K+</div><div class="cd">Transplants</div></div></div>
        <p>Regenerates blood and immune systems. Requires HLA matching. Used in transplants since 1988.</p>
      </div>
      <div class="ccard ccard-sage anim">
        <div class="ctag">Emerging science</div>
        <h3>Cord tissue</h3>
        <div class="ctype">Mesenchymal stem cells</div>
        <div class="cstats"><div class="cst"><div class="cv">500+</div><div class="cd">Active trials</div></div><div class="cst"><div class="cv">Any</div><div class="cd">Family member</div></div></div>
        <p>Repairs muscle, bone, cartilage, skin, organs. No matching required. Massive research potential.</p>
      </div>
    </div>
  </div>
</section>

<!-- ════ SAGE DEEP — CLINICAL TRIALS (split layout) ════ -->
<section class="zone-sage-deep">
  <div class="circle-deco"></div>
  <div class="inner">
    <div class="tc">
      <div class="zlbl">Active clinical research</div>
      <h2>What&rsquo;s being researched right now</h2>
      <p class="lead">StemCyte sponsors 3 clinical trials directly, and over 500 active trials worldwide are investigating cord blood and cord tissue stem cells.</p>
    </div>

    <div class="trials-split">
      <!-- Left: StemCyte trials -->
      <div class="anim">
        <div class="trials-col-header">
          <h3>StemCyte trials</h3>
          <span class="trials-badge trials-badge-plum">Our research</span>
        </div>
        <div class="sc-trial-card">
          <div class="phase">Phase II &middot; Expanded Access</div>
          <h4>Long COVID / Post-COVID syndrome</h4>
          <p>Cord blood stem cells for symptoms that persist months or years after COVID-19 infection. Phase II complete; Expanded Access program cleared by FDA in 2026.</p>
          <div class="source">REGENECYTE&reg; &middot; NCT05682560</div>
        </div>
        <div class="sc-trial-card">
          <div class="phase">Phase I complete</div>
          <h4>Acute ischemic stroke</h4>
          <p>Allogeneic cord blood for acute cerebral stroke within 10 days of onset. Phase I showed safety and encouraging neurological outcomes.</p>
          <div class="source">Published in Cell Transplantation</div>
        </div>
        <div class="sc-trial-card">
          <div class="phase">Phase II</div>
          <h4>Spinal cord injury</h4>
          <p>HLA-matched cord blood units for spinal cord injury treatment. StemCyte is the first hybrid bank with FDA Phase II approval for this indication.</p>
          <div class="source">Program MC001</div>
        </div>
      </div>

      <!-- Right: Global research -->
      <div class="anim">
        <div class="trials-col-header">
          <h3>Global research</h3>
          <span class="trials-badge trials-badge-sage">Cord blood &amp; tissue</span>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-inv"></div>
          <div class="global-content">
            <h4>Cerebral palsy <span class="tier tier-inv">Investigational</span></h4>
            <p>Both autologous cord blood and allogeneic cord tissue MSCs in active trials for motor function improvement</p>
          </div>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-inv"></div>
          <div class="global-content">
            <h4>Hypoxic-ischemic encephalopathy <span class="tier tier-inv">Investigational</span></h4>
            <p>Cord blood for birth-related brain injury (HIE) &mdash; time-critical neonatal intervention</p>
          </div>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-inv"></div>
          <div class="global-content">
            <h4>Type 1 diabetes <span class="tier tier-inv">Investigational</span></h4>
            <p>Cord tissue MSCs may protect insulin-producing cells from autoimmune attack</p>
          </div>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-inv"></div>
          <div class="global-content">
            <h4>Knee osteoarthritis <span class="tier tier-inv">Investigational</span></h4>
            <p>Cord tissue MSCs for cartilage repair &mdash; approved in South Korea (Cartistem)</p>
          </div>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-inv"></div>
          <div class="global-content">
            <h4>Hypoplastic left heart <span class="tier tier-inv">Investigational</span></h4>
            <p>Autologous cord blood MNCs in pilot studies for congenital heart defects</p>
          </div>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-pre"></div>
          <div class="global-content">
            <h4>Alzheimer&rsquo;s &amp; Parkinson&rsquo;s <span class="tier tier-pre">Preclinical</span></h4>
            <p>Both cord blood and cord tissue MSCs showing promise in reducing neuroinflammation</p>
          </div>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-pre"></div>
          <div class="global-content">
            <h4>ALS <span class="tier tier-pre">Preclinical</span></h4>
            <p>Early research into MSCs for motor neuron protection and disease progression</p>
          </div>
        </div>
        <div class="global-item">
          <div class="global-dot global-dot-pre"></div>
          <div class="global-content">
            <h4>Neonatal conditions <span class="tier tier-pre">Preclinical</span></h4>
            <p>BPD, NEC, retinopathy of prematurity &mdash; cord-derived cells in neonatal repair research</p>
          </div>
        </div>
      </div>
    </div>

    <div class="trial-stat-row">
      <div class="trial-stat anim"><div class="tv">35+</div><div class="td">Countries with active cord blood research</div></div>
      <div class="trial-stat anim"><div class="tv">500+</div><div class="td">Active MSC clinical trials worldwide</div></div>
      <div class="trial-stat anim"><div class="tv">3</div><div class="td">StemCyte-sponsored clinical trials</div></div>
    </div>
    <div style="text-align:center;margin-top:32px;">
      <a href="/clinical-trials" style="font-size:15px;font-weight:700;color:#6C1A55;text-decoration:none;">See our clinical trials &rarr;</a>
    </div>
  </div>
</section>

<section class="cta-banner anim">
  <h2>What happens if you don&rsquo;t <em>bank?</em></h2>
  <p>If your baby&rsquo;s cord blood is not collected at birth, it&rsquo;s discarded as medical waste. There is no way to go back.</p>
  <div class="btns"><a href="/pricing" class="btn-w" style="display:inline-block;text-decoration:none">View plans &amp; pricing</a><a href="tel:8663894659" class="btn-gd" style="display:inline-block;text-decoration:none">Call (866) 389-4659</a></div>
</section>

`;

const script = `// Scroll animations
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      setTimeout(function() { entry.target.classList.add('vis'); }, 150);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.anim').forEach(function(el) { obs.observe(el); });

// Scatter nudge effect on disease tags
if (window.innerWidth > 900) {
  document.querySelectorAll('.db').forEach(function(block) {
    var tags = block.querySelectorAll('.dt .tag');
    var rafId = null;
    block.addEventListener('mousemove', function(e) {
      if (rafId) return;
      rafId = requestAnimationFrame(function() {
        rafId = null;
        var rect = block.getBoundingClientRect();
        var mx = e.clientX;
        var my = e.clientY;
        tags.forEach(function(tag) {
          if (tag.matches(':hover')) {
            tag.style.transform = '';
            return;
          }
          var tr = tag.getBoundingClientRect();
          var cx = tr.left + tr.width / 2;
          var cy = tr.top + tr.height / 2;
          var dx = cx - mx;
          var dy = cy - my;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            var strength = (1 - dist / 150) * 3.5;
            var nx = (dx / dist) * strength;
            var ny = (dy / dist) * strength;
            tag.style.transform = 'translate(' + nx.toFixed(1) + 'px,' + ny.toFixed(1) + 'px)';
          } else {
            tag.style.transform = '';
          }
        });
      });
    });
    block.addEventListener('mouseleave', function() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      tags.forEach(function(tag) { tag.style.transform = ''; });
    });
  });
}

// Tap-to-toggle tooltips on mobile
if (window.innerWidth <= 900) {
  document.querySelectorAll('.db .dt .tag').forEach(function(tag) {
    tag.addEventListener('click', function(e) {
      var wasOpen = this.classList.contains('tip-open');
      document.querySelectorAll('.db .dt .tag.tip-open').forEach(function(t) {
        t.classList.remove('tip-open');
      });
      if (!wasOpen) {
        this.classList.add('tip-open');
      }
    });
  });
}

// ── CELL SPHERE 3D CANVAS ANIMATION ──
(function(){
  var c=document.getElementById('cell-canvas');
  if(!c) return;
  var wrap=c.parentElement;
  if(window.innerWidth<=900) return;
  var ctx=c.getContext('2d');
  var dpr=window.devicePixelRatio||1;

  function initSize(){
    var ww=wrap.clientWidth||500;
    var wh=wrap.clientHeight||500;
    var SIZE=Math.min(ww,wh,720);
    c.width=SIZE*dpr;c.height=SIZE*dpr;
    c.style.width=SIZE+'px';c.style.height=SIZE+'px';
    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(dpr,dpr);
    return SIZE;
  }

  var SIZE=initSize();
  var W=SIZE,H=SIZE,cx=W/2,cy=H/2;
  var R=W*0.32;
  var nR=R*0.28;
  var rotSpeed=0.00015;
  var tilt=0.45;
  var cosT=Math.cos(tilt),sinT=Math.sin(tilt);

  window.addEventListener('resize',function(){
    if(window.innerWidth<=900) return;
    SIZE=initSize();
    W=SIZE;H=SIZE;cx=W/2;cy=H/2;
    R=W*0.32;nR=R*0.28;
    // Rebuild orbital rings with new R
    orbitalRings[0].radius=R*1.35;
    orbitalRings[1].radius=R*1.55;
    orbitalRings[2].radius=R*1.45;
  });

  var tCols=[{r:232,g:160,b:208},{r:123,g:168,b:224},{r:123,g:196,b:165},{r:192,g:106,b:165},{r:196,g:148,b:62},{r:160,g:140,b:200},{r:220,g:180,b:220},{r:180,g:200,b:240}];
  function rgba(c,a){return 'rgba('+c.r+','+c.g+','+c.b+','+a+')';}

  function project(phi,theta,radius,rot){
    var p=phi+rot;
    var x3=radius*Math.cos(theta)*Math.sin(p);
    var y3=radius*Math.sin(theta);
    var z3=radius*Math.cos(theta)*Math.cos(p);
    var y3t=y3*cosT-z3*sinT;
    var z3t=y3*sinT+z3*cosT;
    return {x:cx+x3,y:cy+y3t,z:z3t,depth:(z3t/radius+1)/2};
  }

  // === SURFACE FEATURES ===
  var lipids=[];for(var i=0;i<250;i++) lipids.push({phi:Math.random()*Math.PI*2,theta:(Math.random()-0.5)*Math.PI*0.95});
  var travelers=[];for(var i=0;i<50;i++) travelers.push({phi:Math.random()*Math.PI*2,theta:(Math.random()-0.5)*Math.PI*0.8,speed:(Math.random()*0.001+0.0002)*(Math.random()>0.5?1:-1),r:Math.random()*2.5+1,col:tCols[i%tCols.length],trail:[],trailMax:Math.floor(Math.random()*35)+18,orbitR:0.5+Math.random()*0.4});
  var sparks=[];for(var i=0;i<10;i++) sparks.push({phi:i*(Math.PI*2/10),theta:(Math.random()-0.5)*0.7,speed:Math.random()*0.0012+0.0004,phase:Math.random()*Math.PI*2});
  var pores=[];for(var i=0;i<24;i++) pores.push({phi:(i/24)*Math.PI*2,theta:(Math.random()-0.5)*Math.PI*0.65,phase:Math.random()*Math.PI*2,speed:Math.random()*0.003+0.001});
  var chromatinData=[];for(var i=0;i<20;i++){var pts=[];var sa=Math.random()*Math.PI*2;var st=(Math.random()-0.5)*Math.PI*0.4;var len=Math.floor(Math.random()*10)+6;for(var j=0;j<len;j++) pts.push({phi:sa+j*0.3+(Math.random()-0.5)*0.2,theta:st+(Math.random()-0.5)*0.4});chromatinData.push({pts:pts,col:tCols[i%4],alpha:Math.random()*0.06+0.03});}
  var hotspots=[];for(var i=0;i<10;i++) hotspots.push({phi:Math.random()*Math.PI*2,theta:(Math.random()-0.5)*Math.PI*0.5,r:Math.random()*25+15,d:0.3+Math.random()*0.35,phase:Math.random()*Math.PI*2,speed:Math.random()*0.001+0.0005,col:tCols[Math.floor(Math.random()*tCols.length)]});

  var emitted=[],lastEmit=0;
  var pulseWaves=[],lastPulse=0;
  var flares=[],lastFlare=0;

  // === EXTERIOR FEATURES ===
  var orbitalRings=[
    {tilt:0.3,radius:R*1.35,col:{r:232,g:160,b:208},alpha:0.04,width:1},
    {tilt:-0.5,radius:R*1.55,col:{r:123,g:168,b:224},alpha:0.03,width:0.8},
    {tilt:0.8,radius:R*1.45,col:{r:123,g:196,b:165},alpha:0.025,width:0.6},
  ];

  var orbiters=[];
  for(var i=0;i<20;i++){
    orbiters.push({
      phi:Math.random()*Math.PI*2,
      speed:(Math.random()*0.0008+0.0003)*(Math.random()>0.5?1:-1),
      ringIdx:Math.floor(Math.random()*3),
      r:Math.random()*2+1,
      col:tCols[Math.floor(Math.random()*tCols.length)],
      trail:[],
      trailMax:Math.floor(Math.random()*20)+10
    });
  }

  var arcs=[];var lastArc=0;

  var extParticles=[];
  for(var i=0;i<40;i++){
    var angle=Math.random()*Math.PI*2;
    var dist=R*1.2+Math.random()*R*0.8;
    extParticles.push({
      x:cx+Math.cos(angle)*dist,
      y:cy+Math.sin(angle)*dist,
      vx:(Math.random()-0.5)*0.15,
      vy:(Math.random()-0.5)*0.15,
      r:Math.random()*1.5+0.5,
      col:tCols[Math.floor(Math.random()*tCols.length)],
      alpha:Math.random()*0.06+0.02
    });
  }

  function draw(t){
    ctx.clearRect(0,0,W,H);
    var rot=t*rotSpeed;

    // === AMBIENT GLOW ===
    var g0=ctx.createRadialGradient(cx,cy,R*0.05,cx,cy,R*2.5);
    g0.addColorStop(0,'rgba(108,26,85,0.12)');g0.addColorStop(0.15,'rgba(108,26,85,0.06)');g0.addColorStop(0.4,'rgba(108,26,85,0.02)');g0.addColorStop(1,'rgba(108,26,85,0)');
    ctx.fillStyle=g0;ctx.beginPath();ctx.arc(cx,cy,R*2.5,0,Math.PI*2);ctx.fill();

    // === EXTERIOR AMBIENT PARTICLES ===
    extParticles.forEach(function(ep){
      ep.x+=ep.vx;ep.y+=ep.vy;
      var dx=ep.x-cx,dy=ep.y-cy,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist>R*2.2||dist<R*1.1){ep.vx*=-1;ep.vy*=-1;}
      ctx.beginPath();ctx.arc(ep.x,ep.y,ep.r,0,Math.PI*2);
      ctx.fillStyle=rgba(ep.col,ep.alpha);ctx.fill();
    });

    // === ORBITAL RINGS (behind cell) ===
    orbitalRings.forEach(function(ring,ri){
      ctx.beginPath();
      var ringTilt=ring.tilt+Math.sin(t*0.00005+ri)*0.05;
      var cosR=Math.cos(ringTilt),sinR=Math.sin(ringTilt);
      for(var i=0;i<=120;i++){
        var rotA=(i/120)*Math.PI*2+rot*0.3*(ri+1);
        var fx=cx+ring.radius*Math.cos(rotA);
        var fy=cy+ring.radius*Math.sin(rotA)*cosR*0.35;
        var fz=ring.radius*Math.sin(rotA)*sinR;
        if(fz<0){
          if(i===0)ctx.moveTo(fx,fy);
          else ctx.lineTo(fx,fy);
        }
      }
      ctx.strokeStyle=rgba(ring.col,ring.alpha*0.5);ctx.lineWidth=ring.width;ctx.stroke();
    });

    // === PULSE WAVES ===
    if(t-lastPulse>3500){lastPulse=t;pulseWaves.push({r:nR,maxR:R*1.6,speed:0.35,alpha:0.1});}
    for(var i=pulseWaves.length-1;i>=0;i--){var pw=pulseWaves[i];pw.r+=pw.speed;var life=1-(pw.r-nR)/(pw.maxR-nR);if(life<=0){pulseWaves.splice(i,1);continue;}
    ctx.beginPath();ctx.ellipse(cx,cy,pw.r,pw.r*cosT*0.85,0,0,Math.PI*2);ctx.strokeStyle='rgba(232,160,208,'+(pw.alpha*life*life)+')';ctx.lineWidth=2*life;ctx.stroke();
    ctx.beginPath();ctx.ellipse(cx,cy,pw.r,pw.r*cosT*0.85,0,0,Math.PI*2);ctx.strokeStyle='rgba(255,230,245,'+(0.025*life*life)+')';ctx.lineWidth=8*life;ctx.stroke();}

    // === HOTSPOTS ===
    hotspots.forEach(function(h){var p=project(h.phi,h.theta,R*h.d,rot);if(p.depth<0.2)return;var pulse=0.5+Math.sin(t*h.speed+h.phase)*0.5;var da=p.depth*pulse;var hg=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,h.r*da);hg.addColorStop(0,'rgba('+h.col.r+','+h.col.g+','+h.col.b+','+(0.05*da)+')');hg.addColorStop(1,'rgba('+h.col.r+','+h.col.g+','+h.col.b+',0)');ctx.fillStyle=hg;ctx.beginPath();ctx.arc(p.x,p.y,h.r*da,0,Math.PI*2);ctx.fill();});

    // === SPHERE BODY ===
    var sphereGrad=ctx.createRadialGradient(cx-R*0.25,cy-R*0.2,R*0.1,cx,cy,R);
    sphereGrad.addColorStop(0,'rgba(108,26,85,0.06)');
    sphereGrad.addColorStop(0.5,'rgba(108,26,85,0.03)');
    sphereGrad.addColorStop(0.85,'rgba(60,15,50,0.04)');
    sphereGrad.addColorStop(1,'rgba(40,10,30,0.06)');
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.fillStyle=sphereGrad;ctx.fill();

    // === MEMBRANE ===
    var memLayers=[{w:40,a:0.01},{w:18,a:0.025},{w:8,a:0.055},{w:3.5,a:0.12},{w:1.5,a:0.35}];
    memLayers.forEach(function(l){
      ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);
      ctx.strokeStyle='rgba(232,160,208,'+l.a+')';ctx.lineWidth=l.w;ctx.stroke();
    });

    // Highlight rim
    ctx.beginPath();ctx.arc(cx,cy,R,Math.PI*0.85,Math.PI*1.65);
    ctx.strokeStyle='rgba(255,230,245,0.06)';ctx.lineWidth=3;ctx.stroke();

    // === LIPIDS ===
    lipids.forEach(function(lp){var p=project(lp.phi,lp.theta,R,rot);if(p.depth<0.1)return;ctx.beginPath();ctx.arc(p.x,p.y,1.8*p.depth,0,Math.PI*2);ctx.fillStyle='rgba(232,160,208,'+(p.depth*0.18)+')';ctx.fill();});

    // === SPARKS ===
    sparks.forEach(function(s){s.phi+=s.speed;var p=project(s.phi,s.theta,R,rot);if(p.depth<0.15)return;var b=(0.5+Math.sin(t*0.002+s.phase)*0.4)*p.depth;ctx.beginPath();ctx.arc(p.x,p.y,16*p.depth,0,Math.PI*2);ctx.fillStyle='rgba(232,160,208,'+(0.035*b)+')';ctx.fill();ctx.beginPath();ctx.arc(p.x,p.y,6*p.depth,0,Math.PI*2);ctx.fillStyle='rgba(232,160,208,'+(0.1*b)+')';ctx.fill();ctx.beginPath();ctx.arc(p.x,p.y,2.5*p.depth,0,Math.PI*2);ctx.fillStyle='rgba(255,240,250,'+(0.5*b)+')';ctx.fill();});

    // === CHROMATIN ===
    chromatinData.forEach(function(th){ctx.beginPath();var started=false;th.pts.forEach(function(pt,j){var p=project(pt.phi,pt.theta,nR*0.75,rot);if(p.depth<0.15){started=false;return;}if(!started){ctx.moveTo(p.x,p.y);started=true;}else ctx.lineTo(p.x,p.y);});ctx.strokeStyle='rgba('+th.col.r+','+th.col.g+','+th.col.b+','+(th.alpha*0.5)+')';ctx.lineWidth=5;ctx.lineCap='round';ctx.stroke();ctx.beginPath();started=false;th.pts.forEach(function(pt,j){var p=project(pt.phi,pt.theta,nR*0.75,rot);if(p.depth<0.15){started=false;return;}if(!started){ctx.moveTo(p.x,p.y);started=true;}else ctx.lineTo(p.x,p.y);});ctx.strokeStyle='rgba('+th.col.r+','+th.col.g+','+th.col.b+','+th.alpha+')';ctx.lineWidth=1.2;ctx.stroke();});

    // === INTERIOR TRAVELERS ===
    travelers.forEach(function(tr){tr.phi+=tr.speed;var p=project(tr.phi,tr.theta,R*tr.orbitR,rot);tr.trail.push({x:p.x,y:p.y,d:p.depth});if(tr.trail.length>tr.trailMax)tr.trail.shift();});
    // Connections
    for(var i=0;i<travelers.length;i++){var ti=travelers[i];var pi=ti.trail.length?ti.trail[ti.trail.length-1]:null;if(!pi||pi.d<0.3)continue;for(var j=i+1;j<travelers.length;j++){var tj=travelers[j];var pj=tj.trail.length?tj.trail[tj.trail.length-1]:null;if(!pj||pj.d<0.3)continue;var dx=pi.x-pj.x,dy=pi.y-pj.y,d=Math.sqrt(dx*dx+dy*dy);if(d<55){var alpha=(1-d/55)*0.04*Math.min(pi.d,pj.d);ctx.beginPath();ctx.moveTo(pi.x,pi.y);ctx.lineTo(pj.x,pj.y);ctx.strokeStyle='rgba(232,160,208,'+alpha+')';ctx.lineWidth=0.5;ctx.stroke();}}}
    travelers.forEach(function(tr){if(tr.trail.length>2){ctx.beginPath();var started=false;for(var i=0;i<tr.trail.length;i++){var pt=tr.trail[i];if(pt.d<0.12){started=false;continue;}if(!started){ctx.moveTo(pt.x,pt.y);started=true;}else ctx.lineTo(pt.x,pt.y);}ctx.strokeStyle='rgba('+tr.col.r+','+tr.col.g+','+tr.col.b+',0.04)';ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();ctx.beginPath();started=false;for(var i=0;i<tr.trail.length;i++){var pt=tr.trail[i];if(pt.d<0.12){started=false;continue;}if(!started){ctx.moveTo(pt.x,pt.y);started=true;}else ctx.lineTo(pt.x,pt.y);}ctx.strokeStyle='rgba('+tr.col.r+','+tr.col.g+','+tr.col.b+',0.1)';ctx.lineWidth=1.2;ctx.stroke();}var last=tr.trail[tr.trail.length-1];if(!last||last.d<0.12)return;var dd=last.d;ctx.beginPath();ctx.arc(last.x,last.y,tr.r*5*dd,0,Math.PI*2);ctx.fillStyle='rgba('+tr.col.r+','+tr.col.g+','+tr.col.b+','+(0.03*dd)+')';ctx.fill();ctx.beginPath();ctx.arc(last.x,last.y,tr.r*2*dd,0,Math.PI*2);ctx.fillStyle='rgba('+tr.col.r+','+tr.col.g+','+tr.col.b+','+(0.18*dd)+')';ctx.fill();ctx.beginPath();ctx.arc(last.x,last.y,tr.r*0.6*dd,0,Math.PI*2);ctx.fillStyle='rgba(255,245,252,'+(0.4*dd)+')';ctx.fill();});

    // === EMITTED ===
    if(t-lastEmit>450){lastEmit=t;var ep=Math.random()*Math.PI*2;var et=(Math.random()-0.5)*Math.PI*0.7;var pp=project(ep,et,R,rot);if(pp.depth>0.3){var dx=pp.x-cx,dy=pp.y-cy,dl=Math.sqrt(dx*dx+dy*dy)||1;emitted.push({x:pp.x,y:pp.y,vx:dx/dl*0.5,vy:dy/dl*0.5,life:1,col:tCols[Math.floor(Math.random()*tCols.length)],r:Math.random()*2+1});}}
    for(var i=emitted.length-1;i>=0;i--){var e=emitted[i];e.x+=e.vx;e.y+=e.vy;e.life-=0.004;if(e.life<=0){emitted.splice(i,1);continue;}ctx.beginPath();ctx.arc(e.x,e.y,e.r*10*e.life,0,Math.PI*2);ctx.fillStyle='rgba('+e.col.r+','+e.col.g+','+e.col.b+','+(0.02*e.life)+')';ctx.fill();ctx.beginPath();ctx.arc(e.x,e.y,e.r*3.5*e.life,0,Math.PI*2);ctx.fillStyle='rgba('+e.col.r+','+e.col.g+','+e.col.b+','+(0.08*e.life)+')';ctx.fill();ctx.beginPath();ctx.arc(e.x,e.y,e.r*e.life,0,Math.PI*2);ctx.fillStyle='rgba(255,245,252,'+(0.3*e.life)+')';ctx.fill();}

    // === NUCLEUS ===
    var nPulse=1+Math.sin(t*0.0003)*0.02,nRR=nR*nPulse;
    var nng=ctx.createRadialGradient(cx-nRR*0.2,cy-nRR*0.15,0,cx,cy,nRR*3.5);nng.addColorStop(0,'rgba(108,26,85,0.1)');nng.addColorStop(0.2,'rgba(108,26,85,0.05)');nng.addColorStop(1,'rgba(108,26,85,0)');
    ctx.fillStyle=nng;ctx.beginPath();ctx.arc(cx,cy,nRR*3.5,0,Math.PI*2);ctx.fill();
    var nucGrad=ctx.createRadialGradient(cx-nRR*0.2,cy-nRR*0.15,nRR*0.1,cx,cy,nRR);
    nucGrad.addColorStop(0,'rgba(108,26,85,0.06)');nucGrad.addColorStop(0.7,'rgba(108,26,85,0.03)');nucGrad.addColorStop(1,'rgba(60,15,50,0.05)');
    ctx.beginPath();ctx.arc(cx,cy,nRR,0,Math.PI*2);ctx.fillStyle=nucGrad;ctx.fill();
    var nL=[{w:20,a:0.015},{w:10,a:0.035},{w:5,a:0.07},{w:2.5,a:0.15},{w:1.2,a:0.32}];
    nL.forEach(function(l){ctx.beginPath();ctx.arc(cx,cy,nRR,0,Math.PI*2);ctx.strokeStyle='rgba(232,160,208,'+l.a+')';ctx.lineWidth=l.w;ctx.stroke();});

    // Nucleus highlight rim
    ctx.beginPath();ctx.arc(cx,cy,nRR,Math.PI*0.8,Math.PI*1.6);
    ctx.strokeStyle='rgba(255,230,245,0.05)';ctx.lineWidth=2;ctx.stroke();

    // === FLARES ===
    if(t-lastFlare>2200){lastFlare=t;flares.push({phi:Math.random()*Math.PI*2,theta:(Math.random()-0.5)*0.6,life:1,maxR:25+Math.random()*18});}
    for(var i=flares.length-1;i>=0;i--){var f=flares[i];f.life-=0.008;if(f.life<=0){flares.splice(i,1);continue;}var fp=project(f.phi,f.theta,nRR,rot);if(fp.depth<0.3)continue;var fSize=f.maxR*(1-f.life)*f.life*4*fp.depth;ctx.beginPath();ctx.arc(fp.x,fp.y,fSize,0,Math.PI*2);ctx.fillStyle='rgba(232,160,208,'+(0.06*f.life*fp.depth)+')';ctx.fill();ctx.beginPath();ctx.arc(fp.x,fp.y,fSize*0.4,0,Math.PI*2);ctx.fillStyle='rgba(255,230,245,'+(0.12*f.life*fp.depth)+')';ctx.fill();ctx.beginPath();ctx.arc(fp.x,fp.y,fSize*0.15,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,'+(0.15*f.life*fp.depth)+')';ctx.fill();}

    // === PORES ===
    for(var i=0;i<pores.length;i++){var pp=project(pores[i].phi,pores[i].theta,nRR,rot);if(pp.depth<0.2)continue;var pulse=1+Math.sin(t*pores[i].speed+pores[i].phase)*0.6;var dd=pp.depth;ctx.beginPath();ctx.arc(pp.x,pp.y,9*pulse*dd,0,Math.PI*2);ctx.fillStyle='rgba(232,160,208,'+(0.015*pulse*dd)+')';ctx.fill();ctx.beginPath();ctx.arc(pp.x,pp.y,3.5*dd,0,Math.PI*2);ctx.fillStyle='rgba(232,160,208,'+((0.18+pulse*0.1)*dd)+')';ctx.fill();ctx.beginPath();ctx.arc(pp.x,pp.y,1.3*dd,0,Math.PI*2);ctx.fillStyle='rgba(255,240,250,'+(0.3*pulse*dd)+')';ctx.fill();}

    // === NUCLEOLUS ===
    var nlR=nRR*0.25;
    ctx.beginPath();ctx.arc(cx+5,cy-3,nlR*2.5,0,Math.PI*2);ctx.fillStyle='rgba(232,160,208,0.02)';ctx.fill();
    ctx.beginPath();ctx.arc(cx+5,cy-3,nlR,0,Math.PI*2);ctx.fillStyle='rgba(108,26,85,0.08)';ctx.fill();
    ctx.strokeStyle='rgba(232,160,208,0.15)';ctx.lineWidth=1;ctx.stroke();

    // === ORBITAL RINGS (front half) ===
    orbitalRings.forEach(function(ring,ri){
      ctx.beginPath();
      var ringTilt=ring.tilt+Math.sin(t*0.00005+ri)*0.05;
      var cosR=Math.cos(ringTilt),sinR=Math.sin(ringTilt);
      for(var i=0;i<=120;i++){
        var rotA=(i/120)*Math.PI*2+rot*0.3*(ri+1);
        var fx=cx+ring.radius*Math.cos(rotA);
        var fy=cy+ring.radius*Math.sin(rotA)*cosR*0.35;
        var fz=ring.radius*Math.sin(rotA)*sinR;
        if(fz>=0){
          ctx.moveTo(fx,fy);ctx.lineTo(fx+0.5,fy+0.5);
        }
      }
      ctx.strokeStyle=rgba(ring.col,ring.alpha);ctx.lineWidth=ring.width;ctx.stroke();

      // Glow pass
      ctx.beginPath();
      for(var i=0;i<=120;i++){
        var rotA=(i/120)*Math.PI*2+rot*0.3*(ri+1);
        var fx=cx+ring.radius*Math.cos(rotA);
        var fy=cy+ring.radius*Math.sin(rotA)*cosR*0.35;
        var fz=ring.radius*Math.sin(rotA)*sinR;
        if(fz>=0){
          if(i===0)ctx.moveTo(fx,fy);else ctx.lineTo(fx,fy);
        }
      }
      ctx.strokeStyle=rgba(ring.col,ring.alpha*0.3);ctx.lineWidth=ring.width*4;ctx.stroke();
    });

    // === ORBITERS ===
    orbiters.forEach(function(ob){
      ob.phi+=ob.speed;
      var ring=orbitalRings[ob.ringIdx];
      var ringTilt=ring.tilt;
      var cosR=Math.cos(ringTilt),sinR=Math.sin(ringTilt);
      var rotA=ob.phi+rot*0.3*(ob.ringIdx+1);
      var ox=cx+ring.radius*Math.cos(rotA);
      var oy=cy+ring.radius*Math.sin(rotA)*cosR*0.35;
      var oz=ring.radius*Math.sin(rotA)*sinR;
      var odepth=(oz>0)?1:0.2;

      ob.trail.push({x:ox,y:oy,d:odepth});
      if(ob.trail.length>ob.trailMax)ob.trail.shift();

      if(ob.trail.length>2){
        ctx.beginPath();
        for(var i=0;i<ob.trail.length;i++){
          var pt=ob.trail[i];
          if(pt.d<0.3)continue;
          if(i===0)ctx.moveTo(pt.x,pt.y);else ctx.lineTo(pt.x,pt.y);
        }
        ctx.strokeStyle='rgba('+ob.col.r+','+ob.col.g+','+ob.col.b+','+(0.06*odepth)+')';ctx.lineWidth=3;ctx.lineCap='round';ctx.stroke();
        ctx.beginPath();
        for(var i=0;i<ob.trail.length;i++){
          var pt=ob.trail[i];if(pt.d<0.3)continue;
          if(i===0)ctx.moveTo(pt.x,pt.y);else ctx.lineTo(pt.x,pt.y);
        }
        ctx.strokeStyle='rgba('+ob.col.r+','+ob.col.g+','+ob.col.b+','+(0.15*odepth)+')';ctx.lineWidth=1;ctx.stroke();
      }

      ctx.beginPath();ctx.arc(ox,oy,ob.r*5*odepth,0,Math.PI*2);
      ctx.fillStyle='rgba('+ob.col.r+','+ob.col.g+','+ob.col.b+','+(0.03*odepth)+')';ctx.fill();
      ctx.beginPath();ctx.arc(ox,oy,ob.r*2*odepth,0,Math.PI*2);
      ctx.fillStyle='rgba('+ob.col.r+','+ob.col.g+','+ob.col.b+','+(0.2*odepth)+')';ctx.fill();
      ctx.beginPath();ctx.arc(ox,oy,ob.r*0.6*odepth,0,Math.PI*2);
      ctx.fillStyle='rgba(255,245,252,'+(0.4*odepth)+')';ctx.fill();
    });

    // === ENERGY ARCS ===
    if(t-lastArc>1800){
      lastArc=t;
      var aa=Math.random()*Math.PI*2;
      var sx=cx+Math.cos(aa)*R,sy=cy+Math.sin(aa)*R;
      var ea2=aa+(Math.random()-0.5)*1.5;
      var er=R*1.3+Math.random()*R*0.4;
      var ex=cx+Math.cos(ea2)*er,ey=cy+Math.sin(ea2)*er;
      arcs.push({sx:sx,sy:sy,ex:ex,ey:ey,cpx:(sx+ex)/2+(Math.random()-0.5)*80,cpy:(sy+ey)/2+(Math.random()-0.5)*80,life:1,col:tCols[Math.floor(Math.random()*tCols.length)]});
    }
    for(var i=arcs.length-1;i>=0;i--){
      var arc=arcs[i];arc.life-=0.012;
      if(arc.life<=0){arcs.splice(i,1);continue;}
      var prog=1-arc.life;
      ctx.beginPath();
      ctx.moveTo(arc.sx,arc.sy);
      var steps=30;
      for(var s=0;s<=steps*Math.min(prog*3,1);s++){
        var f=s/steps;
        var x=(1-f)*(1-f)*arc.sx+2*(1-f)*f*arc.cpx+f*f*arc.ex;
        var y=(1-f)*(1-f)*arc.sy+2*(1-f)*f*arc.cpy+f*f*arc.ey;
        ctx.lineTo(x,y);
      }
      ctx.strokeStyle='rgba('+arc.col.r+','+arc.col.g+','+arc.col.b+','+(0.15*arc.life)+')';ctx.lineWidth=1.5;ctx.lineCap='round';ctx.stroke();
      ctx.beginPath();ctx.moveTo(arc.sx,arc.sy);
      for(var s=0;s<=steps*Math.min(prog*3,1);s++){var f=s/steps;var x=(1-f)*(1-f)*arc.sx+2*(1-f)*f*arc.cpx+f*f*arc.ex;var y=(1-f)*(1-f)*arc.sy+2*(1-f)*f*arc.cpy+f*f*arc.ey;ctx.lineTo(x,y);}
      ctx.strokeStyle='rgba('+arc.col.r+','+arc.col.g+','+arc.col.b+','+(0.04*arc.life)+')';ctx.lineWidth=6;ctx.stroke();
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();`;

export default function Page() {
  return <PageContent css={css} html={html} script={script} transparentNav={true} />;
}
