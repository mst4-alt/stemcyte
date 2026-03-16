import PageContent from '../components/PageContent';

export const metadata = {
  title: 'Homepage | StemCyte',
};

const css = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:'Lato',sans-serif; background:#FAF9F7; color:#2C2A26; -webkit-font-smoothing:antialiased; line-height:1.65; }

/* NAV */

/* HERO */
.hero { min-height:100vh; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; text-align:center; }
.hero .bg { position:absolute; inset:0; object-fit:cover; width:100%; height:100%; filter:saturate(0.7); }
.hero .vig { position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.55) 55%,rgba(0,0,0,0.78) 100%); }
.hero .ct { position:relative; z-index:2; max-width:680px; padding:0 24px; margin-top:-60px; }
.hero .badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.15); padding:8px 20px; border-radius:100px; font-size:12px; color:rgba(255,255,255,0.7); margin-bottom:28px; }
.hero .badge::before { content:''; width:6px; height:6px; background:#E8A0D0; border-radius:50%; }
.hero h1 { font-family:'Playfair Display',serif; font-size:58px; font-weight:400; line-height:1.08; letter-spacing:-2px; color:#fff; margin-bottom:16px; }
.hero h1 em { font-style:italic; color:#E8A0D0; }
.hero .sub { font-size:17px; color:rgba(255,255,255,0.55); line-height:1.7; max-width:520px; margin:0 auto 36px; }
.hero .btns { display:flex; gap:12px; justify-content:center; }
.btn-p { background:#6C1A55; color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; transition:all 0.25s; }
.btn-p:hover { background:#5A1548; transform:translateY(-2px); box-shadow:0 8px 24px rgba(108,26,85,0.25); }
.btn-gl { background:rgba(255,255,255,0.12); color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:1px solid rgba(255,255,255,0.2); cursor:pointer; font-family:'Lato',sans-serif; }

/* STATS */
.stats-wrap { padding:0 48px; max-width:1100px; margin:-40px auto 0; position:relative; z-index:3; }
.stats { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.stat { background:#fff; border-radius:12px; padding:28px 20px; text-align:center; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.stat .num { font-family:'Source Serif 4',serif; font-size:36px; color:#6C1A55; font-weight:400; }
.stat .desc { font-size:12px; color:#8A857A; margin-top:4px; }

/* COMMON */
.divider { max-width:1100px; margin:0 auto; padding:0 48px; }
.divider-line { height:1px; background:#E8E2DC; }
.section { padding:80px 48px; max-width:1100px; margin:0 auto; }
.section-full { padding:80px 48px; }
.section-full .inner { max-width:1100px; margin:0 auto; }
.sh { margin-bottom:40px; }
.sh .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.sh h2 { font-family:'Playfair Display',serif; font-size:36px; font-weight:400; letter-spacing:-0.5px; margin-bottom:10px; line-height:1.15; }
.sh p { font-size:16px; color:#8A857A; max-width:520px; line-height:1.7; }

/* VALUE CARDS */
.uv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.uv-card { background:#fff; border-radius:12px; padding:28px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.uv-card .ic { width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
.uv-card h3 { font-size:16px; font-weight:700; margin-bottom:8px; }
.uv-card p { font-size:15px; color:#8A857A; line-height:1.7; }

/* STEPS V2 */
.steps-row { display:flex; align-items:stretch; gap:0; }
.s-card { flex:1; background:#fff; border-radius:12px; padding:28px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.s-top { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
.s-chip { display:inline-flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:8px; background:#FBF5F9; color:#6C1A55; font-family:'Source Serif 4',serif; font-size:18px; flex-shrink:0; }
.s-card h3 { font-size:20px; font-weight:700; }
.s-card p { font-size:15px; color:#8A857A; line-height:1.7; }
.s-conn { display:flex; align-items:center; padding:0 2px; flex-shrink:0; }
.s-ln { width:24px; height:1px; background:#D8D0E0; }

/* PLANS */
.plans-toggle-wrap { text-align:center; margin-bottom:32px; }
.plans-toggle { display:inline-flex; background:#F5EDE6; border-radius:100px; padding:4px; }
.plans-toggle button { padding:10px 24px; border-radius:100px; border:none; font-family:'Lato',sans-serif; font-size:13px; font-weight:700; cursor:pointer; transition:all 0.2s; background:transparent; color:#8A857A; }
.plans-toggle button.active { background:#fff; color:#6C1A55; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.plan-cards { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.plan-card { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); transition:all 0.25s; cursor:pointer; display:flex; flex-direction:column; }
.plan-card:hover { box-shadow:0 0 0 3px rgba(108,26,85,0.12),0 4px 16px rgba(0,0,0,0.06); }
.plan-card.feat { box-shadow:0 0 0 2px #6C1A55,0 1px 3px rgba(0,0,0,0.04); }
.plan-card .tag { display:inline-block; background:#FBF5F9; color:#6C1A55; font-size:10px; font-weight:700; padding:4px 12px; border-radius:100px; margin-bottom:12px; }
.plan-card h3 { font-size:18px; font-weight:700; margin-bottom:4px; }
.plan-card .pd { font-size:15px; color:#8A857A; margin-bottom:16px; line-height:1.6; }
.plan-card .price { font-family:'Source Serif 4',serif; font-size:36px; color:#6C1A55; font-weight:400; }
.plan-card .pdet { font-size:12px; color:#B0AB9E; margin-top:2px; margin-bottom:16px; }
.plan-card .feats { list-style:none; margin-bottom:20px; flex:1; }
.plan-card .feats li { font-size:15px; color:#6B665D; padding:6px 0 6px 20px; position:relative; }
.plan-card .feats li::before { content:''; position:absolute; left:0; top:12px; width:8px; height:8px; border-radius:50%; border:2px solid #C06AA5; }
.plan-card .pbtn { display:block; width:100%; text-align:center; background:#6C1A55; color:#fff; padding:14px; border-radius:100px; font-size:14px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; }
.plan-note { text-align:center; margin-top:24px; font-size:13px; color:#8A857A; }
.plan-note a { color:#6C1A55; text-decoration:none; font-weight:700; }

/* SPLIT */
.split { max-width:1100px; margin:0 auto; padding:80px 48px; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
.split .photo { border-radius:12px; overflow:hidden; height:420px; transition:all 0.3s; }
.split .photo:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.08); }
.split .photo img { width:100%; height:100%; object-fit:cover; }
.split .text .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.split .text h2 { font-family:'Playfair Display',serif; font-size:34px; font-weight:400; margin-bottom:16px; line-height:1.2; }
.split .text p { font-size:15px; color:#8A857A; line-height:1.7; margin-bottom:12px; }

/* TESTIMONIALS */
.test-wrap { background:#EDE8F5; padding:80px 48px; }
.test-in { max-width:1100px; margin:0 auto; }
.test-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:40px; }
.test-card { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.test-card blockquote { font-size:16px; color:#4A4540; line-height:1.7; font-style:italic; margin-bottom:16px; }
.test-card cite { font-style:normal; font-size:14px; font-weight:700; color:#2C2A26; }
.test-card .role { font-size:12px; color:#B0AB9E; }

/* FAQ */
.faq-list { max-width:100%; }
.faq-item { border-bottom:1px solid #E8E2DC; padding:20px 0; cursor:pointer; }
.faq-item summary { font-size:16px; font-weight:700; color:#2C2A26; list-style:none; display:flex; justify-content:space-between; align-items:center; }
.faq-item summary::after { content:'+'; font-size:20px; color:#C06AA5; font-weight:300; transition:transform 0.2s; }
.faq-item[open] summary::after { transform:rotate(45deg); }
.faq-item p { font-size:15px; color:#8A857A; line-height:1.7; margin-top:12px; padding-right:32px; }

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
.fade-in { opacity:0; animation:fadeIn 0.6s ease forwards; }
.fd1 { animation-delay:0.1s; }
.fd2 { animation-delay:0.2s; }
.fd3 { animation-delay:0.3s; }
@keyframes fadeIn { to { opacity:1; } }

/* RESPONSIVE */
@media (max-width:900px) {
  .hero h1 { font-size:40px; }
  .stats-wrap { padding:0 24px; }
  .stats { grid-template-columns:1fr 1fr; }
  .section, .section-full { padding:64px 24px; }
  .uv-grid { grid-template-columns:1fr; }
  .steps-row { flex-direction:column; gap:12px; }
  .s-conn { justify-content:center; padding:4px 0; transform:rotate(90deg); }
  .plan-cards { grid-template-columns:1fr; }
  .split { grid-template-columns:1fr; gap:32px; padding:48px 24px; }
  .split .photo { height:280px; }
  .test-wrap { padding:64px 24px; }
  .test-grid { grid-template-columns:1fr; }
  .cta-banner { margin:48px 20px; padding:48px 24px; }
  .divider { padding:0 24px; }
}
@media (max-width:600px) {
  .hero h1 { font-size:32px; }
  .stats { grid-template-columns:1fr; }
  .hero .btns, .cta-banner .btns { flex-direction:column; align-items:center; }
}
`;

const html = `<!-- HERO -->
<section class="hero" id="hero">
  <video class="bg" autoplay muted loop playsinline poster="/images/hero.jpg">
    <source src="/images/videos/Hero_1.mp4" type="video/mp4">
  </video>
  <div class="vig"></div>
  <div class="ct">
    <h1 class="fade-in fd1">Your baby's stem cells could save a <em>life</em></h1>
    <p class="sub fade-in fd2">The one decision you can't make later.</p>
    <div class="btns fade-in fd3">
      <a href="/pricing" class="btn-p" style="display:inline-block;text-decoration:none">View plans &amp; pricing</a>
      <a href="/the-science" class="btn-gl" style="display:inline-block;text-decoration:none">Why bank cord blood</a>
    </div>
  </div>
</section>

<!-- STATS (no divider after) -->
<div class="stats-wrap">
  <div class="stats">
    <div class="stat anim"><div class="num" data-target="2303" data-suffix="+">0</div><div class="desc">Transplant units shipped</div></div>
    <div class="stat anim"><div class="num" data-target="350" data-suffix="+">0</div><div class="desc">Transplant hospitals served</div></div>
    <div class="stat anim"><div class="num" data-target="35" data-suffix="">0</div><div class="desc">Countries worldwide</div></div>
    <div class="stat anim"><div class="num" data-target="80" data-suffix="+">0</div><div class="desc">Treatable diseases</div></div>
  </div>
</div>

<!-- ADVANTAGE -->
<section class="section">
  <div class="sh">
    <div class="lbl">The StemCyte advantage</div>
    <h2>What no other cord blood bank can offer</h2>
    <p>StemCyte is both a private and public cord blood bank &mdash; the only one that gives your family access to both.</p>
  </div>
  <div class="uv-grid">
    <div class="uv-card anim">
      <div class="ic" style="background:#FBF5F9"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <h3>Public bank access</h3>
      <p>If your child needs more stem cells, StemCyte can provide a matching unit from our public bank &mdash; or search all global public banks. A benefit only StemCyte can offer.</p>
    </div>
    <div class="uv-card anim">
      <div class="ic" style="background:#F0F7F4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D8B6A" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
      <h3>1 in every 26 transplants worldwide</h3>
      <p>StemCyte has shipped over 2,303 units for transplant &mdash; more than any other private cord blood bank. Our closest competitor: fewer than 700.</p>
    </div>
    <div class="uv-card anim">
      <div class="ic" style="background:#FDF5EB"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4943E" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
      <h3>FACT + AABB + FDA accredited</h3>
      <p>Triple-accredited with the gold standard FACT accreditation &mdash; voluntary for private banks and globally recognized as the highest quality benchmark.</p>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- HOW IT WORKS -->
<section class="section-full" style="background:#F3F0F8">
  <div class="inner">
    <div class="sh">
      <div class="lbl">The Science</div>
      <h2>3 simple steps</h2>
      <p>From enrollment to preservation &mdash; the entire process is designed to be effortless for you.</p>
    </div>
    <div class="steps-row anim">
      <div class="s-card">
        <div class="s-top"><div class="s-chip">1</div><h3>Enroll</h3></div>
        <p>Sign up online or by phone. We ship an FDA-approved sterile collection kit to your home. Free shipping.</p>
      </div>
      <div class="s-conn"><div class="s-ln"></div></div>
      <div class="s-card">
        <div class="s-top"><div class="s-chip">2</div><h3>Collect</h3></div>
        <p>Bring the kit to the hospital. Your OB collects after birth &mdash; safe, painless, takes minutes.</p>
      </div>
      <div class="s-conn"><div class="s-ln"></div></div>
      <div class="s-card">
        <div class="s-top"><div class="s-chip">3</div><h3>Store</h3></div>
        <p>Our 24/7 courier picks up. Processing at our FDA-licensed lab. Cryopreserved for life.</p>
      </div>
    </div>
  </div>
</section>

<!-- PRICING CTA -->
<section class="section-full" style="background:#F3F0F8">
  <div style="max-width:1100px;margin:0 auto;text-align:center;padding:20px 0">
    <div class="sh" style="text-align:center;max-width:100%">
      <div class="lbl">Pricing</div>
      <h2>Cord blood banking starts at $725</h2>
      <p style="max-width:520px;margin:0 auto 28px">Build your plan in minutes. Choose your product, storage term, and add-ons &mdash; see your total in real time.</p>
    </div>
    <a href="/pricing" class="btn-p" style="display:inline-block;text-decoration:none">Build your plan &rarr;</a>
  </div>
</section>
<div class="divider"><div class="divider-line"></div></div>

<!-- LIFESAVER -->
<section class="split">
  <div class="photo anim"><img src="/images/Hero_6.jpeg" alt="" style="object-position:center 60%"></div>
  <div class="text anim">
    <div class="lbl">LifeSaver Guarantee</div>
    <h2>The safety net no other bank provides</h2>
    <p>If your newborn's cord blood unit ever fails to engraft, StemCyte will refund all service fees, pay your family an additional $50,000, and provide a replacement unit from our donor bank free of charge.</p>
    <p>Included at no additional cost with every plan.</p>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="test-wrap">
  <div class="test-in">
    <div class="sh">
      <div class="lbl">What families say</div>
      <h2>Trusted by parents and physicians</h2>
    </div>
    <div class="test-grid">
      <div class="test-card anim">
        <blockquote>"We chose StemCyte because of their dedication to continuous research, clinical trials, and their dedication to helping families by being the only private bank offering public bank access."</blockquote>
        <cite>Gabrielle Stone</cite>
        <div class="role">Author, Eat Pray FML</div>
      </div>
      <div class="test-card anim">
        <blockquote>"StemCyte really shines. Their experience in delivering valuable and viable stem cells for transplants is amazing. I highly recommend StemCyte."</blockquote>
        <cite>Dr. Shahin Ghadir</cite>
        <div class="role">Reproductive Endocrinologist</div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ PREVIEW -->
<section class="section">
  <div class="sh">
    <div class="lbl">Frequently asked questions</div>
    <h2>Common questions from expecting parents</h2>
  </div>
  <div class="faq-list">
    <details class="faq-item"><summary>What is cord blood banking?</summary><p>Cord blood banking preserves the stem cells found in your baby's umbilical cord blood after birth. These stem cells can treat over 80 diseases including cancers, blood disorders, and immune disorders. Your newborn's stem cells can only be collected immediately after birth.</p></details>
    <details class="faq-item"><summary>Should I bank both cord blood and cord tissue?</summary><p>Yes! &mdash; they contain different types of stem cells. Cord blood contains hematopoietic stem cells that regenerate blood and immune systems. Cord tissue contains mesenchymal stem cells being researched in over 500 clinical trials for regenerative medicine.</p></details>
    <details class="faq-item"><summary>Is the collection process safe?</summary><p>Completely safe. Cord blood is collected after the baby is born and the umbilical cord has been clamped and cut. It does not interfere with delivery, and no blood is taken from the baby or mother.</p></details>
    <details class="faq-item"><summary>What is public bank access?</summary><p>Unique to StemCyte &mdash; if your child ever needs more stem cells than were stored, we can provide a matching unit from our public cord blood bank, extend the search to all global public banks, or pay up to $80,000 toward uncovered medical expenses.</p></details>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner anim">
  <h2>Your baby's stem cells can only be collected at <em>birth</em></h2>
  <p>Don't let this once-in-a-lifetime opportunity pass.</p>
  <div class="btns">
    <a href="/pricing" class="btn-w" style="display:inline-block;text-decoration:none">Enroll now</a>
    <a href="tel:8663894659" class="btn-gd" style="display:inline-block;text-decoration:none">Call (866) 389-4659</a>
  </div>
</section>

<!-- FOOTER -->
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

// Number counters
document.querySelectorAll('.stat .num').forEach(function(el, idx) {
  var t = parseInt(el.dataset.target) || 0;
  var s = el.dataset.suffix || '';
  el.textContent = t.toLocaleString() + s;
  var profiles = [
    { ticks:10, interval:80,  startPause:100 },
    { ticks:6,  interval:120, startPause:300 },
    { ticks:4,  interval:160, startPause:600 },
    { ticks:8,  interval:130, startPause:700 }
  ];
  var p = profiles[idx % profiles.length];
  var startVal = Math.max(0, t - p.ticks);
  var cobs = new IntersectionObserver(function(ent) {
    if (ent[0].isIntersecting) {
      var current = startVal;
      el.textContent = current.toLocaleString() + s;
      function tick() {
        if (current < t) {
          current++;
          el.textContent = current.toLocaleString() + s;
          setTimeout(tick, p.interval);
        }
      }
      setTimeout(tick, p.startPause);
      cobs.unobserve(el);
    }
  }, { threshold: 0.5 });
  cobs.observe(el);
});

// Plans toggle
function togglePlans(t, b) {
  document.getElementById('plans-cb').style.display = t === 'cb' ? 'block' : 'none';
  document.getElementById('plans-cbt').style.display = t === 'cbt' ? 'block' : 'none';
  document.querySelectorAll('.plans-toggle button').forEach(function(x) {
    x.classList.remove('active');
  });
  b.classList.add('active');
}
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

// Number counters
document.querySelectorAll('.stat .num').forEach(function(el, idx) {
  var t = parseInt(el.dataset.target) || 0;
  var s = el.dataset.suffix || '';
  el.textContent = t.toLocaleString() + s;
  var profiles = [
    { ticks:10, interval:80,  startPause:100 },
    { ticks:6,  interval:120, startPause:300 },
    { ticks:4,  interval:160, startPause:600 },
    { ticks:8,  interval:130, startPause:700 }
  ];
  var p = profiles[idx % profiles.length];
  var startVal = Math.max(0, t - p.ticks);
  var cobs = new IntersectionObserver(function(ent) {
    if (ent[0].isIntersecting) {
      var current = startVal;
      el.textContent = current.toLocaleString() + s;
      function tick() {
        if (current < t) {
          current++;
          el.textContent = current.toLocaleString() + s;
          setTimeout(tick, p.interval);
        }
      }
      setTimeout(tick, p.startPause);
      cobs.unobserve(el);
    }
  }, { threshold: 0.5 });
  cobs.observe(el);
});

// Plans toggle
function togglePlans(t, b) {
  document.getElementById('plans-cb').style.display = t === 'cb' ? 'block' : 'none';
  document.getElementById('plans-cbt').style.display = t === 'cbt' ? 'block' : 'none';
  document.querySelectorAll('.plans-toggle button').forEach(function(x) {
    x.classList.remove('active');
  });
  b.classList.add('active');
}`;

export default function Page() {
  return <PageContent css={css} html={html} script={script} transparentNav={true} />;
}
