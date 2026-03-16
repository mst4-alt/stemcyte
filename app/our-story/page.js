import PageContent from '../../components/PageContent';

export const metadata = {
  title: 'Our Story | StemCyte',
};

const css = `
*, *::before, *::after {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html {
  scroll-behavior:smooth;
}
body {
  font-family:'Lato',sans-serif;
  background:#FAF9F7;
  color:#2C2A26;
  -webkit-font-smoothing:antialiased;
  line-height:1.65;
}

/* HERO */
.hero {
  position:relative;
  min-height:540px;
  display:flex;
  align-items:flex-end;
  overflow:hidden;
}
.hero .bg {
  position:absolute;
  inset:0;
  background:url('/images/our%20story/hero_ourstory.jpg') center/cover;
  filter:saturate(0.7);
}
.hero .vig {
  position:absolute;
  inset:0;
  background:linear-gradient(180deg,rgba(61,15,49,0.4) 0%,rgba(61,15,49,0.75) 100%);
}
.hero .ct {
  position:relative;
  z-index:2;
  max-width:1100px;
  margin:0 auto;
  padding:180px 48px 72px;
  width:100%;
}
.hero .lbl {
  font-size:11px;
  font-weight:700;
  letter-spacing:1.5px;
  text-transform:uppercase;
  color:#E8A0D0;
  margin-bottom:12px;
}
.hero h1 {
  font-family:'Playfair Display',serif;
  font-size:48px;
  font-weight:400;
  line-height:1.1;
  letter-spacing:-1.5px;
  max-width:600px;
  margin-bottom:16px;
  color:#fff;
}
.hero .sub {
  font-size:17px;
  color:rgba(255,255,255,0.55);
  max-width:540px;
  line-height:1.7;
}

/* SHARED */
.section {
  padding:80px 48px;
  max-width:1100px;
  margin:0 auto;
}
.section-full {
  padding:80px 48px;
}
.section-full .inner {
  max-width:1100px;
  margin:0 auto;
}
.divider {
  max-width:1100px;
  margin:0 auto;
  padding:0 48px;
}
.divider-line {
  height:1px;
  background:#E8E2DC;
}
.sh {
  margin-bottom:40px;
}
.sh .lbl {
  font-size:11px;
  font-weight:700;
  letter-spacing:1.5px;
  text-transform:uppercase;
  color:#6C1A55;
  margin-bottom:10px;
}
.sh h2 {
  font-family:'Playfair Display',serif;
  font-size:36px;
  font-weight:400;
  letter-spacing:-0.5px;
  margin-bottom:10px;
  line-height:1.15;
}
.sh p {
  font-size:16px;
  color:#8A857A;
  max-width:520px;
  line-height:1.7;
}

/* MISSION */
.mission-quote {
  font-family:'Playfair Display',serif;
  font-size:26px;
  font-weight:400;
  line-height:1.35;
  color:#2C2A26;
  max-width:820px;
  margin:0 auto;
  text-align:center;
  letter-spacing:-0.3px;
}
.mission-quote em {
  color:#E8A0D0;
  font-style:italic;
}

/* SPLIT */
.split {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  align-items:center;
}
.split .photo {
  border-radius:12px;
  overflow:hidden;
  height:400px;
}
.split .photo img {
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
.split .text p {
  font-size:15px;
  color:#6B665D;
  line-height:1.7;
  margin-bottom:14px;
}

/* VALUES SCROLL REVEAL */
.values-wrap {
  position:relative;
  padding:0 48px;
}
.values-inner {
  max-width:1100px;
  margin:0 auto;
}
.values-header {
  text-align:center;
  margin-bottom:64px;
}
.values-header .lbl {
  font-size:11px;
  font-weight:700;
  letter-spacing:1.5px;
  text-transform:uppercase;
  color:#6C1A55;
  margin-bottom:10px;
}
.values-header h2 {
  font-family:'Playfair Display',serif;
  font-size:36px;
  font-weight:400;
  letter-spacing:-0.5px;
  line-height:1.15;
}

.val-scene {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  align-items:center;
  min-height:70vh;
  padding:40px 0;
  opacity:0;
  transform:translateY(60px);
  transition:all 0.8s cubic-bezier(0.16,1,0.3,1);
}
.val-scene.vis {
  opacity:1;
  transform:translateY(0);
}
.val-scene:nth-child(even) {
  direction:rtl;
}
.val-scene:nth-child(even) > * {
  direction:ltr;
}

.val-num-side {
  text-align:center;
}
.val-num {
  font-family:'Source Serif 4',serif;
  font-size:120px;
  color:#6C1A55;
  font-weight:400;
  line-height:1;
  opacity:0.12;
  transition:all 0.8s 0.2s;
}
.val-scene.vis .val-num {
  opacity:0.15;
  transform:scale(1);
}
.val-icon {
  width:80px;
  height:80px;
  border-radius:20px;
  background:#FBF5F9;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:16px auto 0;
  opacity:0;
  transform:translateY(20px);
  transition:all 0.6s 0.3s;
}
.val-scene.vis .val-icon {
  opacity:1;
  transform:translateY(0);
}

.val-text h3 {
  font-family:'Playfair Display',serif;
  font-size:28px;
  font-weight:400;
  line-height:1.2;
  margin-bottom:14px;
  letter-spacing:-0.3px;
  opacity:0;
  transform:translateX(30px);
  transition:all 0.7s 0.15s;
}
.val-scene.vis .val-text h3 {
  opacity:1;
  transform:translateX(0);
}
.val-scene:nth-child(even) .val-text h3 {
  transform:translateX(-30px);
}
.val-scene:nth-child(even).vis .val-text h3 {
  transform:translateX(0);
}

.val-text p {
  font-size:15px;
  color:#6B665D;
  line-height:1.8;
  opacity:0;
  transform:translateY(20px);
  transition:all 0.7s 0.3s;
}
.val-scene.vis .val-text p {
  opacity:1;
  transform:translateY(0);
}

.val-text .val-pill {
  display:inline-block;
  background:#FBF5F9;
  color:#6C1A55;
  font-size:12px;
  font-weight:700;
  padding:6px 14px;
  border-radius:100px;
  margin-top:12px;
  opacity:0;
  transition:opacity 0.5s 0.5s;
}
.val-scene.vis .val-text .val-pill {
  opacity:1;
}

/* PROGRESS DOTS */
.val-progress {
  position:sticky;
  top:50%;
  left:48px;
  transform:translateY(-50%);
  z-index:10;
  display:flex;
  flex-direction:column;
  gap:12px;
  width:8px;
  pointer-events:none;
}
.val-dot {
  width:8px;
  height:8px;
  border-radius:50%;
  background:#E8E2DC;
  transition:all 0.4s;
}
.val-dot.active {
  background:#6C1A55;
  transform:scale(1.4);
}

/* TEAM */
.team-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
}
.team-card {
  background:#fff;
  border-radius:12px;
  overflow:hidden;
  box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03);
}
.team-card .avatar {
  width:100%;
  aspect-ratio:1/1;
  object-fit:cover;
  object-position:center 20%;
  display:block;
}
.team-card .info {
  padding:24px 28px 28px;
}
.team-card h3 {
  font-size:18px;
  font-weight:700;
  margin-bottom:4px;
}
.team-card .role {
  font-size:13px;
  color:#6C1A55;
  font-weight:600;
  margin-bottom:12px;
}
.team-card p {
  font-size:14px;
  color:#8A857A;
  line-height:1.7;
}

/* LEGACY */
.legacy {
  position:relative;
  overflow:hidden;
}
.legacy .inner {
  display:grid;
  grid-template-columns:280px 1fr;
  gap:56px;
  align-items:start;
  max-width:1100px;
  margin:0 auto;
}
.legacy .photo-side {
  text-align:center;
}
.legacy .photo-side .portrait {
  width:220px;
  height:220px;
  border-radius:50%;
  object-fit:cover;
  object-position:center 15%;
  display:block;
  margin:0 auto 16px;
  border:4px solid #E8E2DC;
}
.legacy .photo-side .name {
  font-size:18px;
  font-weight:700;
  margin-bottom:2px;
}
.legacy .photo-side .dates {
  font-size:13px;
  color:#8A857A;
}
.legacy .photo-side .dedication {
  font-family:'Playfair Display',serif;
  font-size:14px;
  font-style:italic;
  color:#6B665D;
  margin-top:16px;
  line-height:1.5;
  max-width:240px;
  margin-left:auto;
  margin-right:auto;
}
.legacy .story-side h3 {
  font-family:'Playfair Display',serif;
  font-size:28px;
  font-weight:400;
  line-height:1.2;
  margin-bottom:16px;
  letter-spacing:-0.3px;
}
.legacy .story-side p {
  font-size:15px;
  color:#6B665D;
  line-height:1.7;
  margin-bottom:14px;
}
.legacy .story-side .pub {
  display:inline-flex;
  align-items:center;
  gap:10px;
  background:#fff;
  border:1px solid #E8E2DC;
  border-radius:8px;
  padding:12px 16px;
  margin-top:8px;
  font-size:13px;
  color:#6B665D;
  line-height:1.5;
}
.legacy .story-side .pub strong {
  color:#6C1A55;
}

/* STATS */
.stat-row {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
}
.stat {
  background:#fff;
  border-radius:12px;
  padding:28px 20px;
  text-align:center;
  box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03);
}
.stat .num {
  font-family:'Source Serif 4',serif;
  font-size:36px;
  color:#6C1A55;
  font-weight:400;
}
.stat .desc {
  font-size:12px;
  color:#8A857A;
  margin-top:4px;
}

/* CTA */
.cta-banner {
  margin:80px 48px;
  border-radius:16px;
  background:linear-gradient(160deg,#6C1A55,#3D0F31);
  padding:80px 64px;
  text-align:center;
  position:relative;
  overflow:hidden;
}
.cta-banner::before {
  content:'';
  position:absolute;
  width:500px;
  height:500px;
  border-radius:50%;
  background:rgba(192,106,165,0.08);
  top:-200px;
  right:-100px;
}
.cta-banner h2 {
  font-family:'Playfair Display',serif;
  font-size:36px;
  color:#fff;
  margin-bottom:12px;
  position:relative;
}
.cta-banner h2 em {
  font-style:italic;
  color:#E8A0D0;
}
.cta-banner p {
  font-size:16px;
  color:rgba(255,255,255,0.5);
  margin-bottom:32px;
  position:relative;
}
.cta-banner .btns {
  display:flex;
  gap:12px;
  justify-content:center;
  position:relative;
}
.btn-w {
  background:#fff;
  color:#6C1A55;
  padding:16px 36px;
  border-radius:100px;
  font-size:15px;
  font-weight:700;
  text-decoration:none;
  display:inline-block;
}
.btn-gd {
  color:#fff;
  padding:16px 36px;
  border-radius:100px;
  font-size:15px;
  font-weight:700;
  border:1px solid rgba(255,255,255,0.25);
  text-decoration:none;
  display:inline-block;
}

.anim {
  opacity:0;
  transform:translateY(28px);
  transition:opacity 0.7s ease,transform 0.7s ease;
}
.anim.vis {
  opacity:1;
  transform:translateY(0);
}

@media(max-width:900px) {
  .hero .ct { padding:140px 24px 48px; }
  .hero h1 { font-size:34px; }
  .section, .section-full, .divider, .values-wrap { padding-left:24px; padding-right:24px; }
  .split { grid-template-columns:1fr; gap:32px; }
  .split .photo { height:260px; }
  .team-grid { grid-template-columns:1fr; }
  .stat-row { grid-template-columns:1fr 1fr; }
  .legacy .inner { grid-template-columns:1fr; text-align:center; }
  .legacy .story-side { text-align:left; }
  .val-scene { grid-template-columns:1fr; min-height:auto; gap:24px; padding:32px 0; }
  .val-scene:nth-child(even) { direction:ltr; }
  .val-num { font-size:72px; }
  .val-progress { display:none; }
  .mission-quote { font-size:22px; }
  .cta-banner { margin:48px 20px; padding:48px 24px; }
}
`;

const html = `
<!-- HERO -->
<section class="hero" id="hero">
  <div class="bg"></div>
  <div class="vig"></div>
  <div class="ct">
    <div class="lbl">Our Story</div>
    <h1>Nearly three decades of protecting what matters most</h1>
    <p class="sub">StemCyte was built on a simple belief: every family deserves access to the life-saving potential of their newborn&rsquo;s stem cells.</p>
  </div>
</section>

<!-- MISSION -->
<section class="section">
  <div class="mission-quote anim">
    From the first transplant to the first HIV-1 <em>remission</em> using cord blood &mdash;<br>this is what happens when science serves families.
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- ORIGIN -->
<section class="section">
  <div class="sh">
    <div class="lbl">How it started</div>
    <h2>A California lab with a global mission</h2>
  </div>
  <div class="split anim">
    <div class="photo">
      <img src="/images/our%20story/tanks.png" alt="StemCyte cryogenic storage facility" style="object-position:center center;" />
    </div>
    <div class="text">
      <p>StemCyte opened its doors in 1997 with a bold idea: build the world&rsquo;s most ethnically diverse cord blood bank, and make it accessible to everyone &mdash; not just those who could afford private banking.</p>
      <p>That dual mission &mdash; private banking for families and public donation for patients &mdash; became the foundation of everything we do. Today, we&rsquo;re among the few cord blood banks in the world that operate both.</p>
      <p>From a single lab in California, StemCyte has shipped over 2,303 cord blood units for transplant across 35 countries &mdash; one of the highest clinical track records in the industry.</p>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- DR. PETZ LEGACY -->
<section class="section-full" style="background:#F3F0F8">
  <div class="legacy">
    <div class="inner">
      <div class="photo-side anim">
        <img class="portrait" src="/images/our%20story/press_release_distribution_0452818_127664.jpg" alt="Dr. Lawrence D. Petz">
        <div class="name">Lawrence D. Petz, MD</div>
        <div class="dates">Pioneer in cord blood medicine</div>
        <div class="dedication">&ldquo;A pioneer in the field of cord blood cells&rdquo;<br>&mdash; <em>Cell</em>, 2023</div>
      </div>
      <div class="story-side anim">
        <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#6C1A55;margin-bottom:10px">A legacy that changed medicine</div>
        <h3>The scientist who proved cord blood could achieve HIV-1 remission</h3>
        <p>Dr. Lawrence Petz, a transfusion medicine specialist at StemCyte, conceived a bold hypothesis: that cord blood &mdash; which requires less stringent HLA matching than adult stem cells &mdash; could be used to achieve HIV remission by transplanting units carrying the CCR5&Delta;32 mutation, a rare genetic variant that makes cells resistant to the virus.</p>
        <p>He screened over 18,000 cord blood units across StemCyte&rsquo;s inventory and collaborating banks worldwide, identifying more than 300 homozygous CCR5&Delta;32 units &mdash; a purpose-built registry that exists nowhere else in the world.</p>
        <p>His work became the foundation of the NIH-backed IMPAACT P1107 study. In 2023, the journal <em>Cell</em> published a landmark case report: the first woman &mdash; and the first person of diverse ancestry &mdash; to achieve HIV-1 remission and possible cure, using a CCR5&Delta;32 cord blood unit from StemCyte&rsquo;s registry combined with haploidentical stem cells. She remained cancer-free at 55 months and showed no viral rebound 18 months after stopping antiretroviral therapy.</p>
        <p>Previously, only two men had achieved HIV remission, both through adult stem cell transplants. Dr. Petz&rsquo;s approach using cord blood opened a fundamentally new pathway &mdash; one that could reach far more patients. The <em>Cell</em> paper was dedicated in his memory.</p>
        <div class="pub">
          <strong><em>Cell</em>, March 2023</strong>
          <span>&mdash; &ldquo;HIV-1 remission and possible cure in a woman after haplo-cord blood transplant&rdquo;</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VALUES SCROLL REVEAL -->
<section class="values-wrap" style="padding-top:80px;padding-bottom:40px;position:relative">
  <div class="val-progress" id="val-progress">
    <div class="val-dot active" data-i="0"></div>
    <div class="val-dot" data-i="1"></div>
    <div class="val-dot" data-i="2"></div>
  </div>
  <div class="values-inner">
    <div class="values-header anim">
      <div class="lbl">What drives us</div>
      <h2>Built on science. Driven by families.</h2>
    </div>

    <div class="val-scene" data-val="0">
      <div class="val-num-side">
        <div class="val-num">01</div>
        <div class="val-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
      </div>
      <div class="val-text">
        <h3>Families first</h3>
        <p>Every decision we make &mdash; from processing methods to pricing &mdash; starts with the question: what&rsquo;s best for the family trusting us with their baby&rsquo;s stem cells? We don&rsquo;t upsell. We don&rsquo;t use fear. We give you the science and let you decide.</p>
        <div class="val-pill">2,303+ families served across 35 countries</div>
      </div>
    </div>

    <div class="val-scene" data-val="1">
      <div class="val-num-side">
        <div class="val-num">02</div>
        <div class="val-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="1.5">
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
          </svg>
        </div>
      </div>
      <div class="val-text">
        <h3>Science without shortcuts</h3>
        <p>We sponsor clinical trials. We pursue FDA approvals. We invest in research not because it&rsquo;s easy, but because families deserve therapies backed by evidence &mdash; not marketing claims.</p>
        <div class="val-pill">3 StemCyte-sponsored clinical trials active</div>
      </div>
    </div>

    <div class="val-scene" data-val="2">
      <div class="val-num-side">
        <div class="val-num">03</div>
        <div class="val-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
      </div>
      <div class="val-text">
        <h3>Access for everyone</h3>
        <p>Our public bank exists so patients who need a transplant can find a match &mdash; regardless of ethnicity, income, or geography. It&rsquo;s why we built one of the most diverse cord blood inventories in the industry.</p>
        <div class="val-pill">One of the most ethnically diverse public banks in the world</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- TEAM -->
<section class="section">
  <div class="sh">
    <div class="lbl">The people behind the science</div>
    <h2>Led by researchers, clinicians, and parents</h2>
    <p>Our leadership team brings decades of experience across pharmaceutical research, clinical medicine, and stem cell science.</p>
  </div>
  <div class="team-grid">
    <div class="team-card anim">
      <img class="avatar" src="/images/our%20story/jonas.jpg" alt="Jonas Wang, PhD">
      <div class="info">
        <h3>Jonas Wang, PhD</h3>
        <div class="role">Chairman</div>
        <p>30+ years in pharmaceutical research and business development. Former VP at Johnson &amp; Johnson and Director at Bristol-Myers Squibb. Holds 30+ patents across drug delivery and life science technologies.</p>
      </div>
    </div>
    <div class="team-card anim">
      <img class="avatar" src="/images/our%20story/lee.jpg" alt="Tong-Young Lee, PhD">
      <div class="info">
        <h3>Tong-Young Lee, PhD</h3>
        <div class="role">CEO</div>
        <p>Trained at Harvard Medical School under Dr. Judah Folkman, contributing to the development of Avastin, Lucentis, and Eylea. Led antibody drug development across multiple biotech ventures before joining StemCyte.</p>
      </div>
    </div>
    <div class="team-card anim">
      <img class="avatar" src="/images/our%20story/rosenthal.jpg" alt="Joseph Rosenthal, MD">
      <div class="info">
        <h3>Joseph Rosenthal, MD</h3>
        <div class="role">Chief Medical Officer</div>
        <p>Professor Emeritus at City of Hope with over 25 years at the NCI-designated comprehensive cancer center. Former Barron Hilton Chair in Pediatrics and Director of Pediatric Hematology-Oncology.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- MILESTONES -->
<section class="section">
  <div class="sh">
    <div class="lbl">Milestones</div>
    <h2>The moments that shaped us</h2>
  </div>
  <div class="stat-row">
    <div class="stat anim"><div class="num">1997</div><div class="desc">Founded in California</div></div>
    <div class="stat anim"><div class="num">2001</div><div class="desc">Thalassemia Major cord blood transplant</div></div>
    <div class="stat anim"><div class="num">2006</div><div class="desc">FACT accreditation achieved</div></div>
    <div class="stat anim"><div class="num">2024</div><div class="desc">FDA biologics license for RegeneCyte</div></div>
  </div>
</section>

<!-- ACCREDITATIONS -->
<section class="section-full" style="background:#F3F0F8">
  <div class="inner">
    <div class="sh" style="text-align:center">
      <div class="lbl">Accreditations</div>
      <h2>Held to the highest standards</h2>
      <p style="margin:0 auto">StemCyte maintains every major accreditation in cord blood banking &mdash; including FACT, which is voluntary for private banks and recognized globally as the highest quality benchmark.</p>
    </div>
    <div class="stat-row" style="margin-top:32px">
      <div class="stat anim"><div class="num" style="font-size:28px">FACT</div><div class="desc">Since 2006</div></div>
      <div class="stat anim"><div class="num" style="font-size:28px">AABB</div><div class="desc">Since 2002</div></div>
      <div class="stat anim"><div class="num" style="font-size:28px">FDA</div><div class="desc">Licensed</div></div>
      <div class="stat anim"><div class="num" style="font-size:28px">cGMP</div><div class="desc">Compliant</div></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner anim">
  <h2>Your baby&rsquo;s stem cells can only be collected at <em>birth</em></h2>
  <p>Don&rsquo;t let this once-in-a-lifetime opportunity pass.</p>
  <div class="btns">
    <a href="/pricing" class="btn-w">View pricing</a>
    <a href="tel:8663894659" class="btn-gd">Call (866) 389-4659</a>
  </div>
</section>
`;

const script = `
// Standard anims
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      setTimeout(function() { e.target.classList.add('vis'); }, 150);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.anim').forEach(function(el) { obs.observe(el); });

// Values scroll reveal + progress dots
var valScenes = document.querySelectorAll('.val-scene');
var dots = document.querySelectorAll('.val-dot');

var valObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      var idx = parseInt(e.target.dataset.val);
      dots.forEach(function(d, i) {
        d.classList.toggle('active', i <= idx);
      });
    }
  });
}, { threshold: 0.3 });
valScenes.forEach(function(s) { valObs.observe(s); });
`;

export default function Page() {
  return <PageContent css={css} html={html} script={script} transparentNav={true} />;
}
