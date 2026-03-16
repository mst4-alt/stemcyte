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
.hero .bg { position:absolute; inset:0; background-image:url('/images/tanks_new.png'); background-size:cover; background-position:center; }
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
.feat-card { background:#fff; border-radius:12px; padding:28px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.feat-card .ic { width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
.feat-card h3 { font-size:16px; font-weight:700; margin-bottom:8px; }
.feat-card p { font-size:15px; color:#8A857A; line-height:1.7; }

/* ACCREDITATIONS */
.accred-row { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.accred-badge { background:#fff; border-radius:12px; padding:32px 24px; text-align:center; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.accred-badge .name { font-family:'Source Serif 4',serif; font-size:28px; color:#6C1A55; font-weight:400; margin-bottom:8px; }
.accred-badge .desc { font-size:12px; color:#8A857A; line-height:1.5; }

/* CLINICAL RESEARCH */
.cr-grid { display:grid; grid-template-columns:1fr 300px; gap:40px; }
.pipeline-row { padding:24px 0; border-bottom:1px solid #EDEAE6; }
.pipeline-row:first-child { padding-top:0; }
.pipeline-row:last-child { border-bottom:none; }
.pipe-top { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:10px; }
.pipe-name { font-size:15px; font-weight:700; color:#2C2A26; }
.pipe-phase { font-size:12px; color:#8A857A; }
.pipe-bar { height:6px; background:#EDEAE6; border-radius:3px; overflow:hidden; margin-bottom:10px; }
.pipe-bar-fill { height:100%; border-radius:3px; width:0; transition:width 1.4s cubic-bezier(0.23, 1, 0.32, 1); }
.pipe-details { display:flex; flex-wrap:wrap; gap:6px 16px; }
.pipe-details span { font-size:11px; color:#8A857A; }
.pipe-details span b { font-weight:700; }
.pipe-details span.plum-detail { color:#6C1A55; font-weight:700; }
.cr-sidebar { display:flex; flex-direction:column; gap:16px; }
.cr-card { background:#fff; border-radius:14px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.03); }
.cr-card .cr-label { font-size:10px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; color:#8A857A; margin-bottom:12px; }
.cr-card .cr-big { font-family:'Source Serif 4',serif; font-size:48px; color:#6C1A55; font-weight:400; line-height:1; margin-bottom:8px; }
.cr-card .cr-text { font-size:13px; color:#6B665D; line-height:1.6; }
.cr-card .cr-divider { height:1px; background:#EDEAE6; margin:16px 0; }
.cr-card .cr-secondary { font-family:'Source Serif 4',serif; font-size:24px; color:#C4BDB4; font-weight:400; }
.cr-card .cr-secondary-label { font-size:11px; color:#8A857A; margin-top:2px; }
.cr-badges { display:flex; flex-wrap:wrap; gap:6px; margin-top:12px; }
.cr-badge { font-size:9px; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; padding:5px 10px; border-radius:100px; }
.cr-badge.plum { background:#FBF5F9; color:#6C1A55; }
.cr-badge.neutral { background:#F0EEEB; color:#6B665D; }

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
  .accred-row { grid-template-columns:1fr 1fr; }
  .cr-grid { grid-template-columns:1fr; }
  .pipe-details { flex-wrap:wrap; }
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

<!-- PUBLIC BANK ACCESS -->
<section class="section">
  <div class="split anim">
    <div class="photo"><img src="/images/Hero_3.jpeg" alt=""></div>
    <div class="text">
      <div class="lbl">Only at StemCyte</div>
      <h2>Public bank access &mdash; protection no one else offers</h2>
      <p>StemCyte is the only cord blood bank that operates both a private and public bank. When you add public bank access, your family gets:</p>
      <ul>
        <li>Exclusive ownership of your child's stem cells</li>
        <li>Access to StemCyte's entire public cord blood inventory</li>
        <li>Global search across all public banks if additional cells needed</li>
        <li>Up to $80,000 toward uncovered medical expenses if no match</li>
      </ul>
    </div>
  </div>
  <div class="split rev anim">
    <div class="photo"><img src="/images/Hero_5.jpeg" alt="" style="object-position:center 60%;"></div>
    <div class="text">
      <div class="lbl">Transplant experience</div>
      <h2>More transplants than any other private cord blood bank</h2>
      <p>StemCyte has delivered over 2,300 cord blood units to more than 350 transplant centers across 35 countries. Our closest competitor has shipped fewer than 700 units.</p>
      <p>When it matters most, experience is everything.</p>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- GUARANTEES -->
<section class="section">
  <div class="sh">
    <div class="lbl">Quality &amp; protection</div>
    <h2>The safety nets no other bank provides</h2>
  </div>
  <div class="feat-grid">
    <div class="feat-card anim">
      <div class="ic" style="background:#FBF5F9"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <h3>LifeSaver Guarantee</h3>
      <p>If your newborn's cord blood fails to engraft, StemCyte will refund all fees, pay an additional $50,000, and provide a replacement unit from our donor bank free of charge.</p>
    </div>
    <div class="feat-card anim">
      <div class="ic" style="background:#F0F7F4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D8B6A" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
      <h3>Proprietary processing</h3>
      <p>StemCyte's processing methods yield a higher recovery of total nucleated cells compared to standard processing &mdash; more cells means better potential outcomes.</p>
    </div>
    <div class="feat-card anim">
      <div class="ic" style="background:#EDF5FF"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
      <h3>24/7 medical courier</h3>
      <p>After collection, our courier picks up your baby's cord blood 24/7 &mdash; weekends and holidays included &mdash; and expedites it to our lab. Free on all plans.</p>
    </div>
    <div class="feat-card anim">
      <div class="ic" style="background:#FDF5EB"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4943E" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
      <h3>Expanded access policy</h3>
      <p>StemCyte provides access to investigational cord blood therapies for patients with serious conditions who have no other treatment options.</p>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- ACCREDITATIONS -->
<section class="section">
  <div class="sh">
    <div class="lbl">Accreditations</div>
    <h2>Triple-accredited &mdash; the gold standard</h2>
    <p>StemCyte was among the first private cord blood banks to achieve FACT accreditation &mdash; voluntary for private banks and recognized globally as the highest benchmark.</p>
  </div>
  <div class="accred-row">
    <div class="accred-badge anim"><div class="name">FACT</div><div class="desc">Foundation for the Accreditation of Cellular Therapy</div></div>
    <div class="accred-badge anim"><div class="name">AABB</div><div class="desc">American Association of Blood Banks</div></div>
    <div class="accred-badge anim"><div class="name">FDA</div><div class="desc">U.S. Food and Drug Administration registered</div></div>
    <div class="accred-badge anim"><div class="name">cGMP</div><div class="desc">Current Good Manufacturing Practices</div></div>
  </div>
</section>

<!-- CLINICAL RESEARCH -->
<section class="section">
  <div class="sh">
    <div class="lbl">Clinical research</div>
    <h2>From the lab to the patient</h2>
    <p>StemCyte sponsors 3 active clinical trials developing cord blood therapies for conditions beyond traditional transplantation.</p>
  </div>
  <div class="cr-grid">
    <div class="pipelines">
      <div class="pipeline-row anim">
        <div class="pipe-top"><span class="pipe-name">REGENECYTE&reg; &mdash; Long COVID</span><span class="pipe-phase">Phase III / Expanded Access</span></div>
        <div class="pipe-bar"><div class="pipe-bar-fill" data-width="88" style="background:#6C1A55"></div></div>
        <div class="pipe-details"><span class="plum-detail">FDA BLA approved 2024</span><span class="plum-detail">RMAT designated</span><span class="plum-detail">Expanded Access 2026</span></div>
      </div>
      <div class="pipeline-row anim">
        <div class="pipe-top"><span class="pipe-name">Acute Ischemic Stroke</span><span class="pipe-phase">Phase II</span></div>
        <div class="pipe-bar"><div class="pipe-bar-fill" data-width="55" style="background:#AEB5BD"></div></div>
        <div class="pipe-details"><span>Phase I <b>published</b> in Cell Transplantation</span><span><b>Allogeneic</b> cord blood</span></div>
      </div>
      <div class="pipeline-row anim">
        <div class="pipe-top"><span class="pipe-name">Spinal Cord Injury</span><span class="pipe-phase">Phase II</span></div>
        <div class="pipe-bar"><div class="pipe-bar-fill" data-width="50" style="background:#DEE2E6"></div></div>
        <div class="pipe-details"><span>First hybrid bank with <b>FDA Phase II</b></span><span><b>HLA-matched</b> cord blood</span></div>
      </div>
    </div>
    <div class="cr-sidebar">
      <div class="cr-card anim">
        <div class="cr-label">Published result</div>
        <div class="cr-big">85%</div>
        <div class="cr-text">of Long COVID patients treated with REGENECYTE&reg; cord blood therapy saw fatigue resolve</div>
        <div class="cr-divider"></div>
        <div class="cr-secondary">20%</div>
        <div class="cr-secondary-label">control group</div>
      </div>
      <div class="cr-card anim">
        <div class="cr-label">REGENECYTE&reg;</div>
        <div class="cr-text">StemCyte's FDA-licensed allogeneic HPC cord blood product &mdash; the first from a hybrid bank.</div>
        <div class="cr-badges">
          <span class="cr-badge plum">FDA BLA</span>
          <span class="cr-badge plum">RMAT</span>
          <span class="cr-badge neutral">Expanded Access</span>
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

// Pipeline bar animation
var barObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      barObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.pipe-bar-fill').forEach(function(el) { barObs.observe(el); });

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
