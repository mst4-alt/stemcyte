import PageContent from '../../components/PageContent';

export const metadata = {
  title: 'Why StemCyte | StemCyte',
};

const css = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:'Lato',sans-serif; background:#FAF9F7; color:#2C2A26; -webkit-font-smoothing:antialiased; line-height:1.65; }

/* NAV */

/* HERO */
.hero { position:relative; min-height:540px; display:flex; align-items:flex-end; overflow:hidden; }
.hero .bg { position:absolute; inset:0; background-image:url('/images/tanks_2.png'); background-size:cover; background-position:center; mask-image:none; }
.hero .bg-blur { position:absolute; inset:0; background-image:url('/images/tanks_2.png'); background-size:cover; background-position:center; filter:blur(6px); mask-image:linear-gradient(to bottom, black 0%, transparent 28%, transparent 72%, black 100%); -webkit-mask-image:linear-gradient(to bottom, black 0%, transparent 28%, transparent 72%, black 100%); }
.hero .vig { position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.72) 100%); }
.hero .ct { position:relative; z-index:2; max-width:1100px; margin:0 auto; padding:180px 48px 72px; width:100%; }
.hero .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#E8A0D0; margin-bottom:12px; }
.hero h1 { font-family:'Playfair Display',serif; font-size:48px; font-weight:400; line-height:1.1; letter-spacing:-1.5px; max-width:780px; margin-bottom:16px; color:#fff; }
.hero p { font-size:17px; color:rgba(255,255,255,0.55); max-width:680px; line-height:1.7; }

/* STATS */
.stats-wrap { padding:80px 48px 0; max-width:1100px; margin:0 auto; }
.stats { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.stat { background:#fff; border-radius:12px; padding:28px 20px; text-align:center; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.stat .num { font-family:'Source Serif 4',serif; font-size:36px; color:#6C1A55; font-weight:400; }
.stat .desc { font-size:12px; color:#8A857A; margin-top:4px; }

/* SHARED */
.divider { max-width:1100px; margin:0 auto; padding:0 48px; }
.divider-line { height:1px; background:#E8E2DC; }
.section { padding:80px 48px; max-width:1100px; margin:0 auto; }
.section-full { padding:80px 48px; }
.section-full .inner { max-width:1100px; margin:0 auto; }
.sh { margin-bottom:40px; }
.sh .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.sh h2 { font-family:'Playfair Display',serif; font-size:36px; font-weight:400; letter-spacing:-0.5px; margin-bottom:10px; line-height:1.15; }
.sh p { font-size:16px; color:#8A857A; max-width:520px; line-height:1.7; }

/* SPLIT */
.split { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; margin-bottom:48px; }
.split.rev { direction:rtl; }
.split.rev > * { direction:ltr; }
.split .photo { border-radius:12px; overflow:hidden; height:360px; }
.split .photo img { width:100%; height:100%; object-fit:cover; }
.split .text .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.split .text h2 { font-family:'Playfair Display',serif; font-size:32px; font-weight:400; margin-bottom:16px; line-height:1.2; }
.split .text p { font-size:15px; color:#8A857A; line-height:1.7; margin-bottom:12px; }
.split .text ul { list-style:none; margin-top:12px; }
.split .text ul li { font-size:15px; color:#6B665D; padding:8px 0 8px 20px; position:relative; border-bottom:1px solid #F5EDE6; }
.split .text ul li::before { content:''; position:absolute; left:0; top:14px; width:8px; height:8px; border-radius:50%; border:2px solid #C06AA5; }

/* FEATURE CARDS */
.feat-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
.proof-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
.trust-bg { background:#F3F0F8; }
.feat-card { background:#fff; border-radius:12px; padding:28px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.feat-card .ic { width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
.feat-card h3 { font-size:16px; font-weight:700; margin-bottom:8px; }
.feat-card p { font-size:15px; color:#8A857A; line-height:1.7; }

/* ACCREDITATIONS */
.accred-row { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.accred-badge { background:#fff; border-radius:12px; padding:32px 24px; text-align:center; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.accred-badge .name { font-family:'Source Serif 4',serif; font-size:28px; color:#6C1A55; font-weight:400; margin-bottom:8px; }
.accred-badge .desc { font-size:12px; color:#8A857A; line-height:1.5; }

/* CLINICAL RESEARCH — PIPELINE */
.pipeline-layout { display:grid; grid-template-columns:1fr 300px; gap:40px; }
.pipe-row { padding:24px 0; border-bottom:1px solid #EDEAE6; }
.pipe-row:first-child { border-top:1px solid #EDEAE6; }
.pr-top { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:10px; }
.pr-name { font-size:15px; font-weight:700; }
.pr-phase { font-size:12px; color:#8A857A; font-weight:600; }
.thin-bar-track { height:6px; background:#EDEAE6; border-radius:100px; overflow:hidden; }
.thin-bar-fill { height:100%; border-radius:100px; transition:width 1.4s cubic-bezier(0.23,1,0.32,1); }
.thin-bar-fill.plum { background:#6C1A55; }
.thin-bar-fill.warm-a { background:#AEB5BD; }
.thin-bar-fill.warm-b { background:#DEE2E6; }
.pr-detail { display:flex; gap:24px; margin-top:10px; }
.pr-detail .pd { font-size:11px; color:#8A857A; }
.pr-detail .pd strong { color:#2C2A26; font-weight:700; }
.pr-detail .pd strong.plum-val { color:#6C1A55; }
.pipe-sidebar { display:flex; flex-direction:column; gap:16px; }
.sidebar-card { background:#fff; border-radius:14px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.03); }
.sidebar-card .sc-lbl { font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#8A857A; margin-bottom:12px; }
.sidebar-card .sc-big { font-family:'Source Serif 4',serif; font-size:48px; font-weight:400; line-height:1; margin-bottom:4px; color:#6C1A55; }
.sidebar-card .sc-sub { font-size:13px; color:#6B665D; line-height:1.5; }
.sidebar-card .sc-vs { margin-top:10px; padding-top:10px; border-top:1px solid #F0EEEB; display:flex; align-items:baseline; gap:8px; }
.sidebar-card .sc-vs .vs-num { font-family:'Source Serif 4',serif; font-size:24px; color:#C4BDB4; }
.sidebar-card .sc-vs .vs-label { font-size:11px; color:#B0AB9E; }
.sidebar-card .sc-badges { display:flex; flex-wrap:wrap; gap:6px; margin-top:12px; }
.sidebar-card .sc-badge { padding:3px 10px; border-radius:100px; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; }
.sc-badge-plum { background:#FBF5F9; color:#6C1A55; }
.sc-badge-neutral { background:#F0EEEB; color:#6B665D; }

/* CTA */
.cta-banner { margin:80px 48px; border-radius:16px; background:linear-gradient(160deg,#6C1A55,#3D0F31); padding:80px 64px; text-align:center; position:relative; overflow:hidden; }
.cta-banner::before { content:''; position:absolute; width:500px; height:500px; border-radius:50%; background:rgba(192,106,165,0.08); top:-200px; right:-100px; }
.cta-banner h2 { font-family:'Playfair Display',serif; font-size:36px; color:#fff; margin-bottom:12px; position:relative; }
.cta-banner h2 em { font-style:italic; color:#E8A0D0; }
.cta-banner p { font-size:16px; color:rgba(255,255,255,0.5); margin-bottom:32px; position:relative; }
.cta-banner .btns { display:flex; gap:12px; justify-content:center; position:relative; }
.btn-w { background:#fff; color:#6C1A55; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; }
.btn-gd { background:transparent; color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:1px solid rgba(255,255,255,0.25); cursor:pointer; font-family:'Lato',sans-serif; }

/* FOOTER */

/* ANIMATIONS */
.anim { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
.anim.vis { opacity:1; transform:translateY(0); }

/* RESPONSIVE */
@media (max-width:900px) {
  .hero .ct { padding:140px 24px 48px; }
  .hero h1 { font-size:34px; }
  .stats-wrap { padding:64px 24px 0; }
  .stats { grid-template-columns:1fr 1fr; }
  .section, .section-full, .divider { padding-left:24px; padding-right:24px; }
  .split, .split.rev { grid-template-columns:1fr; gap:32px; direction:ltr; }
  .split .photo { height:260px; }
  .feat-grid { grid-template-columns:1fr; }
  .proof-grid { grid-template-columns:1fr; }
  .accred-row { grid-template-columns:1fr 1fr; }
  .pipeline-layout { grid-template-columns:1fr; }
  .pr-detail { flex-wrap:wrap; gap:12px; }
  .cta-banner { margin:48px 20px; padding:48px 24px; }
}
@media (max-width:600px) {
  .hero h1 { font-size:28px; }
  .stats { grid-template-columns:1fr; }
  .accred-row { grid-template-columns:1fr; }
  .cta-banner .btns { flex-direction:column; align-items:center; }
}
`;

const html = `<!-- HERO -->
<section class="hero" id="hero">
  <div class="bg"></div>
  <div class="bg-blur"></div>
  <div class="vig"></div>
  <div class="ct">
    <div class="lbl">Why StemCyte</div>
    <h1>The most trusted cord blood bank by OBGYN and transplant physicians</h1>
    <p>More transplants shipped than any other private bank. The only hybrid private-public bank. Triple-accredited. There are clear reasons why physicians trust StemCyte.</p>
  </div>
</section>

<!-- STATS -->
<div class="stats-wrap">
  <div class="stats">
    <div class="stat anim"><div class="num" data-target="2300" data-suffix="+">0</div><div class="desc">Transplant units shipped worldwide</div></div>
    <div class="stat anim"><div class="num" data-text="1 in 26">0</div><div class="desc">Of all cord blood transplants use StemCyte</div></div>
    <div class="stat anim"><div class="num" data-target="350" data-suffix="+">0</div><div class="desc">Transplant hospitals in 35 countries</div></div>
    <div class="stat anim"><div class="num" data-target="1997" data-from="1990" data-suffix="" data-noformat="true">0</div><div class="desc">Founded &mdash; 29+ years of experience</div></div>
  </div>
</div>

<div class="divider"><div class="divider-line"></div></div>

<!-- DUAL BANK MODEL -->
<section class="section">
  <div class="split anim">
    <div class="photo"><img src="/images/Hero_4.jpeg" alt=""></div>
    <div class="text">
      <div class="lbl">Structural advantage</div>
      <h2>The only private bank built on a public bank foundation</h2>
      <p>Most private cord blood banks only store cells. StemCyte operates both a private and public bank &mdash; a dual model that creates advantages no storage-only bank can match.</p>
      <p>Our public bank is what produced REGENECYTE&reg;, powered 2,300+ transplants worldwide, and enabled landmark research like the IMPAACT P1107 HIV cure collaboration. Private banks without a public side have no pathway into transplant medicine, clinical trials, or regenerative therapy development &mdash; they&rsquo;re closing the door on the future of cord blood science.</p>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- WHAT YOU GET -->
<section class="section">
  <div class="sh">
    <div class="lbl">What you get</div>
    <h2>Protections and access no other bank offers</h2>
  </div>
  <div class="feat-grid">
    <div class="feat-card anim">
      <div class="ic" style="background:#FBF5F9"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
      <h3>Public Bank Access</h3>
      <p>Add access to StemCyte&rsquo;s entire public cord blood inventory &mdash; plus a global search across all public banks and up to $100,000 toward sourcing if no match is found. No other private bank offers this.</p>
    </div>
    <div class="feat-card anim">
      <div class="ic" style="background:#FBF5F9"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <h3>LifeSaver Guarantee</h3>
      <p>If your newborn&rsquo;s cord blood fails to engraft, StemCyte will refund all fees, pay an additional $50,000, and provide a replacement unit from our donor bank free of charge.</p>
    </div>
    <div class="feat-card anim">
      <div class="ic" style="background:#FDF5EB"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4943E" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
      <h3>Expanded access policy</h3>
      <p>StemCyte provides access to investigational cord blood therapies for patients with serious conditions who have no other treatment options.</p>
    </div>
    <div class="feat-card anim">
      <div class="ic" style="background:#EDF5FF"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
      <h3>24/7 medical courier</h3>
      <p>After collection, our courier picks up your baby&rsquo;s cord blood 24/7 &mdash; weekends and holidays included &mdash; and expedites it to our lab. Free on all plans.</p>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- WHY YOU CAN TRUST IT -->
<section class="section-full trust-bg">
  <div class="inner">
    <div class="sh">
      <div class="lbl">Quality &amp; credentials</div>
      <h2>Why you can trust it</h2>
    </div>
    <div class="proof-grid">
      <div class="feat-card anim">
        <div class="ic" style="background:#F0F7F4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D8B6A" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <h3>100% viability on every unit thawed</h3>
        <p>Every cord blood unit requested and thawed for therapy has been accepted by transplant centers as clinically viable. StemCyte is the only cord blood bank to have disclosed a perfect viability record.</p>
      </div>
      <div class="feat-card anim">
        <div class="ic" style="background:#EDF5FF"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h3>Zero contamination, ever</h3>
        <p>100% contamination-free record on all released units. StemCyte&rsquo;s GMP-compliant facility and rigorous quality protocols ensure every unit meets the highest purity and safety standards.</p>
      </div>
    </div>
    <div class="accred-row" style="margin-top:40px;">
      <div class="accred-badge anim"><div class="name">FACT</div><div class="desc">Foundation for the Accreditation of Cellular Therapy</div></div>
      <div class="accred-badge anim"><div class="name">AABB</div><div class="desc">American Association of Blood Banks</div></div>
      <div class="accred-badge anim"><div class="name">FDA</div><div class="desc">U.S. Food and Drug Administration registered</div></div>
      <div class="accred-badge anim"><div class="name">cGMP</div><div class="desc">Current Good Manufacturing Practices</div></div>
    </div>
  </div>
</section>

<!-- CLINICAL RESEARCH -->
<section class="section-full" style="background:#FAF9F7">
  <div class="inner">
    <div class="sh">
      <div class="lbl">Clinical research</div>
      <h2>From the lab to the patient</h2>
      <p>StemCyte sponsors 3 active clinical trials developing cord blood therapies for conditions beyond traditional transplantation.</p>
    </div>
    <div class="pipeline-layout">
      <div class="pipe-list">
        <div class="pipe-row anim">
          <div class="pr-top">
            <div class="pr-name"><strong>REGENECYTE&reg;</strong> &mdash; Long COVID</div>
            <div class="pr-phase">Phase III / Expanded Access</div>
          </div>
          <div class="thin-bar-track"><div class="thin-bar-fill plum" data-width="88"></div></div>
          <div class="pr-detail">
            <div class="pd"><strong class="plum-val">FDA BLA</strong> approved 2024</div>
            <div class="pd"><strong class="plum-val">RMAT</strong> designated</div>
            <div class="pd"><strong class="plum-val">Expanded Access</strong> 2026</div>
          </div>
        </div>
        <div class="pipe-row anim">
          <div class="pr-top">
            <div class="pr-name">Acute Ischemic Stroke</div>
            <div class="pr-phase">Phase II</div>
          </div>
          <div class="thin-bar-track"><div class="thin-bar-fill warm-a" data-width="55"></div></div>
          <div class="pr-detail">
            <div class="pd">Phase I <strong>published</strong> in Cell Transplantation</div>
            <div class="pd"><strong>Allogeneic</strong> cord blood</div>
          </div>
        </div>
        <div class="pipe-row anim">
          <div class="pr-top">
            <div class="pr-name">Spinal Cord Injury</div>
            <div class="pr-phase">Phase II</div>
          </div>
          <div class="thin-bar-track"><div class="thin-bar-fill warm-b" data-width="50"></div></div>
          <div class="pr-detail">
            <div class="pd">First hybrid bank with <strong>FDA Phase II</strong></div>
            <div class="pd"><strong>HLA-matched</strong> cord blood</div>
          </div>
        </div>
      </div>
      <div class="pipe-sidebar">
        <div class="sidebar-card anim">
          <div class="sc-lbl">Published result</div>
          <div class="sc-big">85%</div>
          <div class="sc-sub">of Long COVID patients treated with REGENECYTE&reg; cord blood therapy saw fatigue resolve</div>
          <div class="sc-vs">
            <div class="vs-num">20%</div>
            <div class="vs-label">control group</div>
          </div>
        </div>
        <div class="sidebar-card anim">
          <div class="sc-lbl">REGENECYTE&reg;</div>
          <div class="sc-sub">StemCyte&rsquo;s FDA-licensed allogeneic HPC cord blood product &mdash; the first from a hybrid bank.</div>
          <div class="sc-badges">
            <span class="sc-badge sc-badge-plum">FDA BLA</span>
            <span class="sc-badge sc-badge-plum">RMAT</span>
            <span class="sc-badge sc-badge-neutral">Expanded Access</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner anim">
  <h2>Your baby's stem cells can only be collected at <em>birth</em></h2>
  <p>Don't let this once-in-a-lifetime opportunity pass.</p>
  <div class="btns">
    <a href="/pricing" class="btn-w" style="display:inline-block;text-decoration:none">View pricing</a>
    <a href="tel:8663894659" class="btn-gd" style="display:inline-block;text-decoration:none">Call (866) 389-4659</a>
  </div>
</section>

`;

const script = `// Init pipeline bars at 0
document.querySelectorAll('[data-width]').forEach(function(bar) { bar.style.width = '0%'; });

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

// Number counters
// Animate pipeline bars on scroll
var barObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var bars = entry.target.querySelectorAll('[data-width]');
      bars.forEach(function(bar) {
        bar.style.width = bar.getAttribute('data-width') + '%';
      });
      barObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
var pipelineEl = document.querySelector('.pipeline-layout');
if (pipelineEl) barObs.observe(pipelineEl);

// Number counters
document.querySelectorAll('.stat .num').forEach(function(el, idx) {
  var textVal = el.dataset.text;
  if (textVal) { el.textContent = textVal; return; }
  var t = parseInt(el.dataset.target) || 0;
  var s = el.dataset.suffix || '';
  var from = parseInt(el.dataset.from) || Math.max(0, t - 10);
  var nf = el.dataset.noformat === 'true';
  el.textContent = (nf ? t : t.toLocaleString()) + s;
  var profiles = [
    { ticks:10, interval:80, startPause:100 },
    { ticks:6, interval:120, startPause:300 },
    { ticks:4, interval:160, startPause:600 },
    { ticks:8, interval:130, startPause:700 }
  ];
  var p = profiles[idx % profiles.length];
  var cobs = new IntersectionObserver(function(ent) {
    if (ent[0].isIntersecting) {
      var current = from;
      el.textContent = (nf ? current : current.toLocaleString()) + s;
      function tick() {
        if (current < t) { current++; el.textContent = (nf ? current : current.toLocaleString()) + s; setTimeout(tick, p.interval); }
      }
      setTimeout(tick, p.startPause);
      cobs.unobserve(el);
    }
  }, { threshold: 0.5 });
  cobs.observe(el);
});`;

export default function Page() {
  return <PageContent css={css} html={html} script={script} transparentNav={true} />;
}
