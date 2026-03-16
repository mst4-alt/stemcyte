import PageContent from '../../components/PageContent';

export const metadata = {
  title: 'The Science | StemCyte',
};

const css = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:'Lato',sans-serif; background:#FAF9F7; color:#2C2A26; -webkit-font-smoothing:antialiased; line-height:1.65; }

/* ── NAV ── */

/* ── HERO ── */
.hero { position:relative; min-height:540px; display:flex; align-items:flex-end; overflow:hidden; }
.hero .bg { position:absolute; inset:0; background-image:url('/images/Hero_4.jpeg'); background-size:cover; background-position:center; }
.hero .vig { position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.72) 100%); }
.hero .ct { position:relative; z-index:2; max-width:1100px; margin:0 auto; padding:180px 48px 72px; width:100%; }
.hero .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#E8A0D0; margin-bottom:12px; }
.hero h1 { font-family:'Playfair Display',serif; font-size:48px; font-weight:400; line-height:1.1; letter-spacing:-1.5px; max-width:680px; margin-bottom:16px; color:#fff; }
.hero .sub { font-size:17px; color:rgba(255,255,255,0.55); max-width:540px; line-height:1.7; }

/* ── SHARED ── */
.section { padding:80px 48px; max-width:1100px; margin:0 auto; }
.divider { max-width:1100px; margin:0 auto; padding:0 48px; }
.divider-line { height:1px; background:#E8E2DC; }

/* ── ZONE BASE ── */
.zone { padding:80px 48px; position:relative; overflow:hidden; }
.zone .inner { max-width:900px; margin:0 auto; position:relative; z-index:1; }
.zone .tc { text-align:center; margin-bottom:48px; }
.zone .zlbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:10px; }
.zone h2 { font-family:'Playfair Display',serif; font-size:40px; font-weight:400; margin-bottom:16px; line-height:1.15; }
.zone .lead { font-size:17px; color:#6B665D; line-height:1.7; max-width:600px; margin:0 auto; }
.zone .circle-deco { position:absolute; border-radius:50%; opacity:0.3; z-index:0; }

/* ── BLUE ZONE — STEM CELLS ── */
.zone-blue { background:#EDF5FF; }
.zone-blue .zlbl { color:#3B6DC4; }
.zone-blue .circle-deco { width:500px; height:500px; background:#D4E4FF; right:-150px; top:-150px; }
.zone-blue .explain { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; max-width:1100px; margin:0 auto; }
.zone-blue .narrative p { font-size:15px; color:#6B665D; line-height:1.8; margin-bottom:16px; }
.zone-blue .narrative p strong { color:#2C2A26; }
.zone-blue .keypoints { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.zone-blue .keypoints h4 { font-size:14px; font-weight:700; color:#3B6DC4; margin-bottom:16px; }
.zone-blue .kp { display:flex; gap:14px; align-items:flex-start; padding:14px 0; border-bottom:1px solid #F5EDE6; }
.zone-blue .kp:last-child { border:none; padding-bottom:0; }
.zone-blue .kp .dot { width:10px; height:10px; border-radius:50%; margin-top:5px; flex-shrink:0; }
.zone-blue .kp h5 { font-size:14px; font-weight:700; margin-bottom:2px; }
.zone-blue .kp span { font-size:12px; color:#8A857A; line-height:1.5; }

/* ── PLUM ZONE — CORD BLOOD ── */
.zone-plum { background:#FBF5F9; }
.zone-plum .zlbl { color:#6C1A55; }
.zone-plum .circle-deco { width:500px; height:500px; background:#F0E0EB; left:-200px; bottom:-200px; }
.zone-plum .zsp { display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:stretch; max-width:1100px; margin:0 auto; }
.zone-plum .fact-list { display:flex; flex-direction:column; gap:12px; }
.zone-plum .fact { background:#fff; border-radius:12px; padding:20px 24px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); display:flex; gap:18px; align-items:flex-start; flex:1; }
.zone-plum .fact .ic { width:52px; height:52px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.zone-plum .fact h4 { font-size:15px; font-weight:700; margin-bottom:3px; }
.zone-plum .fact span { font-size:13px; color:#8A857A; line-height:1.5; }
.zone-plum .stat-block { background:#fff; border-radius:12px; padding:36px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); display:flex; flex-direction:column; }
.zone-plum .stat-block .big { font-family:'Source Serif 4',serif; font-size:72px; color:#6C1A55; font-weight:400; line-height:1; margin-bottom:6px; }
.zone-plum .stat-block .bl { font-size:16px; font-weight:700; margin-bottom:14px; }
.zone-plum .stat-block .sd { font-size:14px; color:#8A857A; line-height:1.7; margin-bottom:16px; }
.zone-plum .stat-block .mr { display:grid; grid-template-columns:1fr 1fr; gap:12px; padding-top:16px; border-top:1px solid #F5EDE6; }
.zone-plum .stat-block .mi { text-align:center; }
.zone-plum .stat-block .mi .v { font-family:'Source Serif 4',serif; font-size:28px; color:#6C1A55; }
.zone-plum .stat-block .mi .d { font-size:12px; color:#8A857A; }
.zone-plum .stat-block .extra { margin-top:16px; padding-top:16px; border-top:1px solid #F5EDE6; font-size:13px; color:#8A857A; line-height:1.6; }
.zone-plum .stat-block .extra strong { color:#6C1A55; }

/* ── PLUM DEEP — 80+ DISEASES ── */
.zone-plum-deep { background:#F3E8EE; padding:80px 48px; position:relative; overflow:visible; }
.zone-plum-deep .circle-deco { position:absolute; width:400px; height:400px; border-radius:50%; background:#F0E0EB; opacity:0.25; right:-120px; bottom:-120px; z-index:0; }
.zone-plum-deep .inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; }
.zone-plum-deep .tc { text-align:center; margin-bottom:40px; }
.zone-plum-deep .zlbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.zone-plum-deep h2 { font-family:'Playfair Display',serif; font-size:36px; font-weight:400; margin-bottom:10px; line-height:1.15; }
.zone-plum-deep .lead { font-size:16px; color:#6B665D; max-width:520px; margin:0 auto; line-height:1.7; }
.dgrid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.db { border-radius:12px; padding:28px; position:relative; overflow:visible; }
.db .dh { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
.db h4 { font-size:16px; font-weight:700; }
.db .dc { font-family:'Source Serif 4',serif; font-size:24px; font-weight:400; }
.db .dt { display:flex; flex-wrap:wrap; gap:6px; }
.db .dt .tag { background:rgba(255,255,255,0.75); padding:5px 12px; border-radius:100px; font-size:11px; font-weight:600; backdrop-filter:blur(4px); cursor:default; position:relative; }
.db .dt .tag .tip { display:none; position:absolute; bottom:calc(100% + 8px); left:50%; transform:translateX(-50%); background:#2C2A26; color:#fff; padding:10px 14px; border-radius:8px; font-size:11px; font-weight:400; line-height:1.5; width:220px; text-align:left; box-shadow:0 4px 16px rgba(0,0,0,0.15); z-index:100; pointer-events:none; }
.db .dt .tag .tip::after { content:''; position:absolute; top:100%; left:50%; transform:translateX(-50%); border:6px solid transparent; border-top-color:#2C2A26; }
.db .dt .tag:hover .tip { display:block; }
.db .dt .tag:hover { background:rgba(255,255,255,0.95); z-index:50; }
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
.zone-sage .ccard h3 { font-family:'Playfair Display',serif; font-size:24px; font-weight:400; margin-bottom:4px; }
.zone-sage .ccard .ctype { font-size:13px; font-weight:700; margin-bottom:12px; }
.zone-sage .ccard .cstats { display:flex; gap:16px; margin-bottom:12px; }
.zone-sage .ccard .cst { text-align:center; }
.zone-sage .ccard .cst .cv { font-family:'Source Serif 4',serif; font-size:24px; font-weight:400; }
.zone-sage .ccard .cst .cd { font-size:10px; color:#B0AB9E; }
.zone-sage .ccard p { font-size:13px; color:#8A857A; line-height:1.6; }
.zone-sage .ccard-plum .ctag { background:#FBF5F9; color:#6C1A55; }
.zone-sage .ccard-plum .ctype { color:#6C1A55; }
.zone-sage .ccard-plum .cv { color:#6C1A55; }
.zone-sage .ccard-sage .ctag { background:#D4E8DC; color:#2A6B4F; }
.zone-sage .ccard-sage .ctype { color:#3D8B6A; }
.zone-sage .ccard-sage .cv { color:#3D8B6A; }

/* ── SAGE DEEP — CLINICAL TRIALS ── */
.zone-sage-deep { background:#DFF0E6; padding:80px 48px; position:relative; overflow:hidden; }
.zone-sage-deep .circle-deco { position:absolute; width:400px; height:400px; border-radius:50%; background:#D4E8DC; opacity:0.3; left:-120px; top:-120px; z-index:0; }
.zone-sage-deep .inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; }
.zone-sage-deep .tc { text-align:center; margin-bottom:40px; }
.zone-sage-deep .zlbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#3D8B6A; margin-bottom:10px; }
.zone-sage-deep h2 { font-family:'Playfair Display',serif; font-size:36px; font-weight:400; margin-bottom:10px; line-height:1.15; }
.zone-sage-deep .lead { font-size:16px; color:#6B665D; max-width:560px; margin:0 auto; line-height:1.7; }
.trial-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.trial-card { background:#fff; border-radius:12px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.trial-card .phase { display:inline-block; padding:3px 10px; border-radius:100px; font-size:10px; font-weight:700; margin-bottom:12px; background:#F0F7F4; color:#2A6B4F; }
.trial-card h4 { font-size:15px; font-weight:700; margin-bottom:6px; }
.trial-card p { font-size:13px; color:#8A857A; line-height:1.6; }
.trial-card .cell-type { font-size:11px; color:#3D8B6A; font-weight:700; margin-top:10px; }
.trial-stat-row { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
.trial-stat { background:#fff; border-radius:12px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); text-align:center; }
.trial-stat .tv { font-family:'Source Serif 4',serif; font-size:36px; color:#3D8B6A; font-weight:400; line-height:1; }
.trial-stat .td { font-size:12px; color:#8A857A; margin-top:4px; }

/* ── SPLIT + STAKES ── */
.split { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; margin-bottom:48px; }
.split .photo { border-radius:12px; overflow:hidden; height:360px; }
.split .photo img { width:100%; height:100%; object-fit:cover; }
.split .text .slbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.split .text h2 { font-family:'Playfair Display',serif; font-size:32px; font-weight:400; margin-bottom:16px; line-height:1.2; }
.split .text p { font-size:15px; color:#8A857A; line-height:1.7; margin-bottom:12px; }
.stakes { background:#FBF5F9; border-radius:12px; padding:40px; margin-top:48px; }
.stakes h3 { font-family:'Playfair Display',serif; font-size:24px; font-weight:400; margin-bottom:12px; }
.stakes p { font-size:15px; color:#6B665D; line-height:1.7; margin-bottom:12px; }
.stakes .hl { font-size:15px; color:#6C1A55; font-weight:700; }

/* ── CTA ── */
.cta-banner { margin:80px 48px; border-radius:16px; background:linear-gradient(160deg,#6C1A55,#3D0F31); padding:80px 64px; text-align:center; position:relative; overflow:hidden; }
.cta-banner::before { content:''; position:absolute; width:500px; height:500px; border-radius:50%; background:rgba(192,106,165,0.08); top:-200px; right:-100px; }
.cta-banner h2 { font-family:'Playfair Display',serif; font-size:36px; color:#fff; margin-bottom:12px; position:relative; }
.cta-banner h2 em { font-style:italic; color:#E8A0D0; }
.cta-banner p { font-size:16px; color:rgba(255,255,255,0.5); margin-bottom:32px; position:relative; }
.cta-banner .btns { display:flex; gap:12px; justify-content:center; position:relative; }
.btn-w { background:#fff; color:#6C1A55; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; }
.btn-gd { background:transparent; color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:1px solid rgba(255,255,255,0.25); cursor:pointer; font-family:'Lato',sans-serif; }

/* ── FOOTER ── */

/* ── ANIMATIONS ── */
.anim { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
.anim.vis { opacity:1; transform:translateY(0); }

/* ── RESPONSIVE ── */
@media (max-width:900px) {
  .hero .ct { padding:140px 24px 48px; }
  .hero h1 { font-size:34px; }
  .zone, .zone-plum-deep, .zone-sage-deep { padding:64px 24px; }
  .zone-blue .explain { grid-template-columns:1fr; }
  .zone-plum .zsp { grid-template-columns:1fr; }
  .zone-sage .compare-grid { grid-template-columns:1fr; }
  .section, .divider { padding-left:24px; padding-right:24px; }
  .dgrid { grid-template-columns:1fr; }
  .trial-cards, .trial-stat-row { grid-template-columns:1fr; }
  .split { grid-template-columns:1fr; gap:32px; }
  .split .photo { height:240px; }
  .cta-banner { margin:48px 20px; padding:48px 24px; }
  .db .dt .tag .tip { display:none; }
  .db .dt .tag.tip-open .tip { display:block; }
}
@media (max-width:600px) {
  .hero h1 { font-size:28px; }
  .cta-banner .btns { flex-direction:column; align-items:center; }
}
`;

const html = `<!-- HERO -->
<section class="hero" id="hero">
  <div class="bg"></div>
  <div class="vig"></div>
  <div class="ct">
    <div class="lbl">The Science</div>
    <h1>Your baby is born with the power to save a life &mdash; including their own</h1>
    <p class="sub">Your newborn's umbilical cord contains stem cells that treat over 80 diseases today and are being researched for hundreds more.</p>
  </div>
</section>

<!-- ════ BLUE ZONE — STEM CELLS ════ -->
<section class="zone zone-blue">
  <div class="circle-deco"></div>
  <div class="inner" style="max-width:1100px">
    <div class="tc">
      <div class="zlbl">The Science</div>
      <h2>What are cord blood stem cells?</h2>
    </div>
    <div class="explain">
      <div class="narrative anim">
        <p><strong>Stem cells are the body's master cells.</strong> They are unique because they can both renew themselves and transform into specialized cells &mdash; a capability no other cell has.</p>
        <p>The blood remaining in your baby's umbilical cord after birth is rich with <strong>hematopoietic stem cells (HSCs)</strong> &mdash; the same type used in bone marrow transplants for decades. These cells build and regenerate our entire blood and immune system.</p>
        <p>Every red blood cell that carries oxygen, every white blood cell that fights infection, every platelet that helps blood clot &mdash; all originate from these stem cells.</p>
        <p>Your baby's cord blood is a <strong>100% perfect match</strong> for themselves, has a <strong>75% chance</strong> of partial match for siblings, and roughly <strong>20% for parents</strong>. It can only be collected in the minutes after birth.</p>
      </div>
      <div class="keypoints anim">
        <h4>Key facts about cord blood stem cells</h4>
        <div class="kp"><div class="dot" style="background:#6C1A55"></div><div><h5>They rebuild entire systems</h5><span>A single transplant can regenerate a patient's complete blood and immune system from scratch</span></div></div>
        <div class="kp"><div class="dot" style="background:#3B6DC4"></div><div><h5>They're younger and more adaptable</h5><span>Cord blood stem cells are immunologically immature &mdash; less graft-vs-host disease than adult donor cells</span></div></div>
        <div class="kp"><div class="dot" style="background:#3D8B6A"></div><div><h5>They're immediately available</h5><span>Unlike bone marrow donors requiring months of searching, banked cord blood is ready when you need it</span></div></div>
        <div class="kp"><div class="dot" style="background:#C4943E"></div><div><h5>Collection is completely safe</h5><span>Collected after birth, after the cord is clamped and cut. Zero risk to mother or baby.</span></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ════ PLUM ZONE — CORD BLOOD ════ -->
<section class="zone zone-plum">
  <div class="circle-deco"></div>
  <div class="inner" style="max-width:1100px">
    <div class="tc">
      <div class="zlbl">Cord blood</div>
      <h2>Proven today &mdash; treating 80+ diseases</h2>
      <p class="lead">Used in over 60,000 transplants worldwide since 1988. Cord blood stem cells are approved for treating a wide range of serious conditions.</p>
    </div>
    <div class="zsp">
      <div class="fact-list">
        <div class="fact anim">
          <div class="ic" style="background:#FBF5F9"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></div>
          <div><h4>Hematopoietic stem cells (HSCs)</h4><span>The core therapeutic cell &mdash; rebuilds blood and immune systems. Used in every cord blood transplant.</span></div>
        </div>
        <div class="fact anim">
          <div class="ic" style="background:#EDF5FF"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div>
          <div><h4>Progenitor cells</h4><span>Intermediate cells that become specific blood cell types &mdash; red cells, white cells, platelets.</span></div>
        </div>
        <div class="fact anim">
          <div class="ic" style="background:#F0F7F4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D8B6A" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <div><h4>Natural killer cells &amp; T-cells</h4><span>Immune cells that fight infection and recognize cancerous cells. Critical for recovery.</span></div>
        </div>
        <div class="fact anim">
          <div class="ic" style="background:#FDF5EB"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4943E" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
          <div><h4>Growth factors &amp; cytokines</h4><span>Signaling proteins that promote cell growth, tissue repair, and anti-inflammatory responses.</span></div>
        </div>
      </div>
      <div class="stat-block anim">
        <div class="big">80+</div>
        <div class="bl">Treatable diseases and counting</div>
        <div class="sd">Cord blood is used to treat leukemia, lymphoma, sickle cell disease, thalassemia, SCID, Krabbe disease, and dozens more across four major categories: cancers, blood disorders, immune deficiencies, and metabolic conditions.</div>
        <div class="mr">
          <div class="mi"><div class="v">60K+</div><div class="d">Transplants worldwide</div></div>
          <div class="mi"><div class="v">1988</div><div class="d">First successful transplant</div></div>
        </div>
        <div class="mr" style="border-top:none;padding-top:0">
          <div class="mi"><div class="v">100%</div><div class="d">Match for your baby</div></div>
          <div class="mi"><div class="v">75%</div><div class="d">Sibling partial match</div></div>
        </div>
        <div class="extra">A baby's cord blood is a guaranteed perfect match for themselves. Siblings have a 75% chance of partial match, and biological parents roughly 20%. Each unit can be used in one transplant &mdash; which is why banking each child matters.</div>
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
        <div class="dh"><h4>Cancers</h4><div class="dc">14+</div></div>
        <div class="dt">
          <div class="tag">Acute lymphoblastic leukemia<div class="tip">The most common childhood cancer. Transplant replaces cancerous bone marrow with healthy stem cells.</div></div>
          <div class="tag">Acute myeloid leukemia<div class="tip">Fast-growing cancer of blood-forming cells. Cord blood transplant often the best option when chemo fails.</div></div>
          <div class="tag">Chronic myeloid leukemia<div class="tip">Slower-growing blood cancer. Transplant can cure when targeted therapies stop working.</div></div>
          <div class="tag">Hodgkin's lymphoma<div class="tip">Cancer of the lymphatic system. Used for relapsed or resistant cases.</div></div>
          <div class="tag">Non-Hodgkin's lymphoma<div class="tip">Blood cancers in the lymphatic system. Transplant rebuilds the immune system after treatment.</div></div>
          <div class="tag">Myelodysplastic syndromes<div class="tip">Bone marrow fails to produce enough healthy blood cells. Transplant replaces faulty marrow.</div></div>
          <div class="tag">Multiple myeloma<div class="tip">Cancer of plasma cells in bone marrow. Transplant follows high-dose chemo.</div></div>
          <div class="tag">Neuroblastoma<div class="tip">Develops from immature nerve cells, most common in children under 5.</div></div>
          <div class="tag">Retinoblastoma<div class="tip">A rare eye cancer in young children. Stem cells support recovery.</div></div>
          <div class="tag">Juvenile myelomonocytic leukemia<div class="tip">Rare childhood leukemia. Transplant is currently the only known cure.</div></div>
        </div>
      </div>
      <div class="db db-b anim">
        <div class="dh"><h4>Blood disorders</h4><div class="dc">15+</div></div>
        <div class="dt">
          <div class="tag">Sickle cell disease<div class="tip">Red blood cells become rigid and sickle-shaped. Transplant can cure the disease.</div></div>
          <div class="tag">Thalassemia major<div class="tip">Abnormal hemoglobin. Transplant is the only potential cure for severe forms.</div></div>
          <div class="tag">Aplastic anemia<div class="tip">Bone marrow stops making enough blood cells. Transplant replaces damaged marrow.</div></div>
          <div class="tag">Fanconi anemia<div class="tip">Rare inherited condition causing bone marrow failure. Transplant is primary treatment.</div></div>
          <div class="tag">Diamond-Blackfan anemia<div class="tip">Can't make enough red blood cells. Transplant can cure the underlying defect.</div></div>
          <div class="tag">Dyskeratosis congenita<div class="tip">Rare genetic disorder causing bone marrow failure.</div></div>
          <div class="tag">Shwachman-Diamond syndrome<div class="tip">Inherited condition affecting marrow, pancreas, and bones.</div></div>
          <div class="tag">Pure red cell aplasia<div class="tip">Bone marrow stops producing red blood cells.</div></div>
          <div class="tag">Paroxysmal nocturnal hemoglobinuria<div class="tip">Red blood cells break down prematurely. Transplant is the only curative treatment.</div></div>
        </div>
      </div>
      <div class="db db-i anim">
        <div class="dh"><h4>Immune deficiencies</h4><div class="dc">14+</div></div>
        <div class="dt">
          <div class="tag">Severe combined immunodeficiency<div class="tip">"Bubble boy disease." Without transplant, infants cannot survive normal infections.</div></div>
          <div class="tag">Wiskott-Aldrich syndrome<div class="tip">Causes eczema, low platelets, and immune deficiency. Transplant is the only cure.</div></div>
          <div class="tag">Chronic granulomatous disease<div class="tip">White blood cells can't kill certain bacteria and fungi.</div></div>
          <div class="tag">DiGeorge syndrome<div class="tip">Genetic condition causing poor immune function.</div></div>
          <div class="tag">Kostmann syndrome<div class="tip">Severe congenital neutropenia &mdash; dangerously low white blood cells from birth.</div></div>
          <div class="tag">Omenn syndrome<div class="tip">Severe form of SCID with skin inflammation. Transplant is life-saving.</div></div>
          <div class="tag">Bare lymphocyte syndrome<div class="tip">Immune cells lack critical surface molecules.</div></div>
          <div class="tag">Leukocyte adhesion deficiency<div class="tip">White blood cells can't reach infection sites.</div></div>
        </div>
      </div>
      <div class="db db-m anim">
        <div class="dh"><h4>Metabolic disorders</h4><div class="dc">16+</div></div>
        <div class="dt">
          <div class="tag">Hurler syndrome<div class="tip">Can't break down sugar molecules, causing progressive organ damage. Early transplant prevents decline.</div></div>
          <div class="tag">Krabbe disease<div class="tip">Destroys protective myelin coating of nerves. Early transplant can slow progression.</div></div>
          <div class="tag">Adrenoleukodystrophy<div class="tip">Damages brain myelin sheath. Transplant halts progression.</div></div>
          <div class="tag">Gaucher disease<div class="tip">Fat deposits accumulate in organs. Transplant addresses severe forms.</div></div>
          <div class="tag">Niemann-Pick disease<div class="tip">Can't metabolize cholesterol and lipids. Transplant for most severe forms.</div></div>
          <div class="tag">Tay-Sachs disease<div class="tip">Progressive destruction of nerve cells. Research into early intervention ongoing.</div></div>
          <div class="tag">Metachromatic leukodystrophy<div class="tip">Progressive loss of myelin. Early transplant can stabilize the disease.</div></div>
          <div class="tag">Osteopetrosis<div class="tip">Bones become abnormally dense and brittle. Transplant provides cells for proper remodeling.</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ════ SAGE ZONE — CORD TISSUE ════ -->
<section class="zone zone-sage">
  <div class="circle-deco"></div>
  <div class="inner">
    <div class="tc">
      <div class="zlbl">Cord tissue</div>
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

<!-- ════ SAGE DEEP — CLINICAL TRIALS ════ -->
<section class="zone-sage-deep">
  <div class="circle-deco"></div>
  <div class="inner">
    <div class="tc">
      <div class="zlbl">Active clinical research</div>
      <h2>What cord tissue MSCs are being tested for</h2>
      <p class="lead">Over 500 active clinical trials are investigating mesenchymal stem cells worldwide. Here are the conditions where the most promising research is happening.</p>
    </div>
    <div class="trial-cards">
      <div class="trial-card anim"><div class="phase">Phase II</div><h4>Post-COVID syndrome</h4><p>Cord blood stem cells being tested for Long COVID symptoms that persist months or years after infection.</p><div class="cell-type">StemCyte-sponsored</div></div>
      <div class="trial-card anim"><div class="phase">Phase I complete</div><h4>Acute stroke</h4><p>Allogeneic cord blood used to treat acute cerebral stroke. Phase I showed successful outcomes, published in Cell Transplantation.</p><div class="cell-type">StemCyte-sponsored</div></div>
      <div class="trial-card anim"><div class="phase">Phase II</div><h4>Spinal cord injury</h4><p>Using HLA-matched cord blood units for spinal cord injury treatment. First hybrid bank with FDA Phase II approval.</p><div class="cell-type">StemCyte-sponsored</div></div>
      <div class="trial-card anim"><div class="phase">Active trials</div><h4>Cerebral palsy</h4><p>Multiple trials using cord blood to improve motor function and reduce inflammation in children with cerebral palsy.</p><div class="cell-type">Cord blood (HSCs)</div></div>
      <div class="trial-card anim"><div class="phase">Active trials</div><h4>Autism spectrum</h4><p>Investigating whether cord blood stem cells can modulate immune function and improve outcomes in autism.</p><div class="cell-type">Cord blood (HSCs)</div></div>
      <div class="trial-card anim"><div class="phase">MSC trials</div><h4>Heart disease</h4><p>Mesenchymal stem cells researched for heart muscle repair after cardiac events and chronic heart failure.</p><div class="cell-type">Cord tissue (MSCs)</div></div>
      <div class="trial-card anim"><div class="phase">MSC trials</div><h4>Alzheimer's disease</h4><p>Early research into whether MSCs can reduce neuroinflammation and slow cognitive decline.</p><div class="cell-type">Cord tissue (MSCs)</div></div>
      <div class="trial-card anim"><div class="phase">MSC trials</div><h4>Osteoarthritis</h4><p>MSCs being tested for cartilage repair and regeneration, potentially eliminating the need for joint replacement.</p><div class="cell-type">Cord tissue (MSCs)</div></div>
      <div class="trial-card anim"><div class="phase">MSC trials</div><h4>Type 1 diabetes</h4><p>Research into whether MSCs can modulate the immune system to protect insulin-producing cells from autoimmune attack.</p><div class="cell-type">Cord tissue (MSCs)</div></div>
    </div>
    <div class="trial-stat-row">
      <div class="trial-stat anim"><div class="tv">35+</div><div class="td">Countries with active cord blood research</div></div>
      <div class="trial-stat anim"><div class="tv">500+</div><div class="td">Active MSC clinical trials worldwide</div></div>
      <div class="trial-stat anim"><div class="tv">3</div><div class="td">StemCyte-sponsored clinical trials</div></div>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- BANKING OPTIONS -->
<section class="section">
  <div class="split anim">
    <div class="photo"><img src="/images/Hero_5.jpeg" alt="" style="object-position:center 60%"></div>
    <div class="text">
      <div class="slbl">Your options</div>
      <h2>Private banking vs. public donation</h2>
      <p><strong>Private banking</strong> preserves your baby's stem cells exclusively for your family.</p>
      <p><strong>Public donation</strong> makes them available to anyone in need &mdash; free, but you don't retain ownership.</p>
      <p><strong>With StemCyte, you don't have to choose.</strong> As the only hybrid bank, we give you both.</p>
    </div>
  </div>
  <div class="stakes anim">
    <h3>What happens if you don't bank?</h3>
    <p>If your baby's cord blood is not collected at birth, it's discarded as medical waste. There is no way to go back.</p>
    <p class="hl">Your baby's stem cells can only be collected at birth. The decision to bank is the decision to keep that door open.</p>
  </div>
</section>

<section class="cta-banner anim">
  <h2>Ready to protect your baby's <em>future?</em></h2>
  <p>View plans, speak with a specialist, or enroll today.</p>
  <div class="btns"><a href="/pricing" class="btn-w" style="display:inline-block;text-decoration:none">View plans &amp; pricing</a><a href="tel:8663894659" class="btn-gd" style="display:inline-block;text-decoration:none">Call (866) 389-4659</a></div>
</section>

<script>
// Scroll animations
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      setTimeout(function() { entry.target.classList.add('vis'); }, 150);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.anim').forEach(function(el) { obs.observe(el); });
</script>`;

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
}`;

export default function Page() {
  return <PageContent css={css} html={html} script={script} transparentNav={true} />;
}
