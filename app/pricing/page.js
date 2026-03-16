import PageContent from '../../components/PageContent';

export const metadata = {
  title: 'Pricing | StemCyte',
};

const css = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:'Lato',sans-serif; background:#FAF9F7; color:#2C2A26; -webkit-font-smoothing:antialiased; line-height:1.65; }

/* NAV */

/* LAYOUT */
.page { max-width:1200px; margin:0 auto; padding:100px 48px 80px; display:grid; grid-template-columns:1fr 380px; gap:48px; align-items:start; }
.main { min-width:0; }

/* HEADER */
.page-header { margin-bottom:40px; }
.page-header .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.page-header h1 { font-family:'Playfair Display',serif; font-size:40px; font-weight:400; margin-bottom:8px; line-height:1.15; }
.page-header p { font-size:16px; color:#8A857A; max-width:520px; line-height:1.7; }

/* STEP PROGRESS */
.progress { display:flex; gap:4px; margin-bottom:40px; }
.progress .bar { flex:1; height:4px; border-radius:2px; background:#E8E2DC; transition:background 0.3s; }
.progress .bar.active { background:#6C1A55; }
.progress .bar.done { background:#C06AA5; }

/* STEP SECTIONS */
.step-section { display:none; }
.step-section.active { display:block; }
.step-label { font-size:12px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#8A857A; margin-bottom:6px; }
.step-title { font-family:'Playfair Display',serif; font-size:28px; font-weight:400; margin-bottom:20px; }

/* OPTION CARDS */
.opt-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px; }
.opt-card { background:#fff; border:2px solid #E8E2DC; border-radius:12px; padding:24px; cursor:pointer; transition:all 0.2s; position:relative; }
.opt-card:hover { border-color:#C06AA5; }
.opt-card.selected { border-color:#6C1A55; box-shadow:0 0 0 3px rgba(108,26,85,0.12); }
.opt-card .badge { position:absolute; top:-10px; right:12px; background:#6C1A55; color:#fff; font-size:10px; font-weight:700; padding:3px 10px; border-radius:100px; }
.opt-card .save-badge { position:absolute; top:-10px; right:12px; background:#3D8B6A; color:#fff; font-size:10px; font-weight:700; padding:3px 10px; border-radius:100px; }
.opt-card .free-badge { position:absolute; top:-10px; right:12px; background:#3D8B6A; color:#fff; font-size:10px; font-weight:700; padding:3px 10px; border-radius:100px; }
.opt-card h3 { font-size:16px; font-weight:700; margin-bottom:4px; }
.opt-card .opt-price { font-family:'Source Serif 4',serif; font-size:28px; color:#6C1A55; font-weight:400; margin-bottom:4px; }
.opt-card .opt-det { font-size:12px; color:#B0AB9E; margin-bottom:8px; }
.opt-card .opt-desc { font-size:13px; color:#8A857A; line-height:1.5; }
.opt-card .opt-save { font-size:12px; color:#3D8B6A; font-weight:700; margin-top:6px; }
.opt-card .radio { position:absolute; top:24px; right:24px; width:20px; height:20px; border-radius:50%; border:2px solid #E8E2DC; transition:all 0.2s; }
.opt-card.selected .radio { border-color:#6C1A55; background:#6C1A55; box-shadow:inset 0 0 0 3px #fff; }

/* ADDON CARDS — can select multiple */
.addon-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px; }
.addon-card { background:#fff; border:2px solid #E8E2DC; border-radius:12px; padding:20px; cursor:pointer; transition:all 0.2s; position:relative; }
.addon-card:hover { border-color:#C06AA5; }
.addon-card.selected { border-color:#6C1A55; box-shadow:0 0 0 3px rgba(108,26,85,0.12); }
.addon-card.disabled { opacity:0.4; pointer-events:none; }
.addon-card h4 { font-size:14px; font-weight:700; margin-bottom:2px; }
.addon-card .addon-price { font-family:'Source Serif 4',serif; font-size:22px; color:#6C1A55; font-weight:400; }
.addon-card .addon-det { font-size:12px; color:#8A857A; line-height:1.4; margin-top:4px; }
.addon-card .check-box { position:absolute; top:20px; right:20px; width:20px; height:20px; border-radius:4px; border:2px solid #E8E2DC; transition:all 0.2s; display:flex; align-items:center; justify-content:center; }
.addon-card.selected .check-box { border-color:#6C1A55; background:#6C1A55; }
.addon-card.selected .check-box::after { content:''; display:block; width:6px; height:10px; border:solid #fff; border-width:0 2px 2px 0; transform:rotate(45deg); margin-top:-2px; }

/* PLAN GRID — 5 options, special layout */
.plan-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:12px; }
.plan-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px; }

/* PAYMENT PLAN OPTIONS */
.pay-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }

/* FORM */
.form-section { margin-bottom:24px; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px; }
.form-row.full { grid-template-columns:1fr; }
.form-label { font-size:12px; font-weight:700; color:#6B665D; margin-bottom:4px; display:block; }
.form-input { width:100%; padding:12px 16px; border:1px solid #E8E2DC; border-radius:8px; font-family:'Lato',sans-serif; font-size:14px; color:#2C2A26; background:#fff; transition:border-color 0.2s; }
.form-input:focus { outline:none; border-color:#6C1A55; }
.form-select { width:100%; padding:12px 16px; border:1px solid #E8E2DC; border-radius:8px; font-family:'Lato',sans-serif; font-size:14px; color:#2C2A26; background:#fff; appearance:none; }
.checkbox-row { display:flex; align-items:center; gap:10px; margin-bottom:12px; cursor:pointer; }
.checkbox-row input { width:18px; height:18px; accent-color:#6C1A55; }
.checkbox-row label { font-size:13px; color:#6B665D; cursor:pointer; }

/* PAYMENT MOCK */
.pay-methods { display:flex; gap:12px; margin-bottom:20px; }
.pay-method { flex:1; background:#fff; border:2px solid #E8E2DC; border-radius:12px; padding:16px; text-align:center; cursor:pointer; transition:all 0.2s; font-size:14px; font-weight:700; color:#8A857A; }
.pay-method:hover { border-color:#C06AA5; }
.pay-method.selected { border-color:#6C1A55; color:#6C1A55; }
.card-fields { margin-top:16px; }

/* NAVIGATION BUTTONS */
.step-nav { display:flex; gap:12px; margin-top:32px; }
.btn-next { background:#6C1A55; color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; flex:1; text-align:center; transition:all 0.2s; }
.btn-next:hover { background:#5A1548; }
.btn-back { background:transparent; color:#6C1A55; padding:16px 24px; border-radius:100px; font-size:15px; font-weight:700; border:1px solid #E8E2DC; cursor:pointer; font-family:'Lato',sans-serif; transition:all 0.2s; }
.btn-back:hover { background:#FBF5F9; }

/* ── STICKY SUMMARY ── */
.summary { position:sticky; top:90px; background:#fff; border-radius:16px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); overflow:hidden; }
.summary-head { background:linear-gradient(160deg,#6C1A55,#3D0F31); padding:24px; color:#fff; }
.summary-head h3 { font-size:14px; font-weight:700; letter-spacing:1px; text-transform:uppercase; opacity:0.6; margin-bottom:4px; }
.summary-head .total { font-family:'Source Serif 4',serif; font-size:48px; font-weight:400; line-height:1; }
.summary-head .total-det { font-size:13px; opacity:0.5; margin-top:4px; }
.summary-head .savings { background:rgba(255,255,255,0.15); padding:6px 14px; border-radius:100px; font-size:12px; font-weight:700; display:inline-block; margin-top:12px; }
.summary-body { padding:24px; }
.summary-line { display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #F5EDE6; font-size:13px; }
.summary-line:last-child { border:none; }
.summary-line .sl-label { color:#8A857A; }
.summary-line .sl-value { font-weight:700; }
.summary-line .sl-free { color:#3D8B6A; font-weight:700; }
.summary-line .sl-save { color:#3D8B6A; font-size:11px; font-weight:700; }
.summary-line .sl-empty { color:#B0AB9E; font-style:italic; }
.summary-footer { padding:0 24px 24px; }
.summary-footer .enroll-btn { display:block; width:100%; text-align:center; background:#6C1A55; color:#fff; padding:16px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; transition:all 0.2s; }
.summary-footer .enroll-btn:hover { background:#5A1548; }

/* FOOTER */

@media (max-width:900px) {
  .page { grid-template-columns:1fr; padding:90px 24px 48px; }
  .summary { position:relative; top:0; order:1; margin-bottom:32px; }
  .opt-grid, .addon-grid, .plan-grid, .pay-grid { grid-template-columns:1fr; }
  .plan-grid-2 { grid-template-columns:1fr; }
  .form-row { grid-template-columns:1fr; }
  .pay-methods { flex-direction:column; }
}

/* COMPACT HERO */
.mini-hero { position:relative; min-height:500px; display:flex; align-items:center; overflow:hidden; }
.mini-hero .bg { position:absolute; inset:0; }
.mini-hero .bg img { width:100%; height:100%; object-fit:cover; filter:saturate(0.7) brightness(0.85); }
.mini-hero .vig { position:absolute; inset:0; background:linear-gradient(135deg, rgba(44,10,36,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%); }
.mini-hero .inner { position:relative; z-index:1; max-width:1100px; margin:0 auto; padding:140px 48px 80px; width:100%; }
.mini-hero .frost { background:rgba(255,255,255,0.08); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:48px 52px; max-width:540px; }
.mini-hero .lbl { font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#E8A0D0; margin-bottom:16px; }
.mini-hero h1 { font-family:'Playfair Display',serif; font-size:44px; font-weight:400; color:#fff; line-height:1.1; margin-bottom:14px; letter-spacing:-1px; }
.mini-hero h1 em { font-style:italic; color:#E8A0D0; }
.mini-hero p { font-size:15px; color:rgba(255,255,255,0.5); max-width:420px; line-height:1.7; }

/* HOW IT WORKS SECTION */
.hiw-section { background:#F3F0F8; padding:80px 48px; }
.hiw-section .inner { max-width:1100px; margin:0 auto; }
.sh { margin-bottom:40px; }
.sh .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:10px; }
.sh h2 { font-family:'Playfair Display',serif; font-size:36px; font-weight:400; letter-spacing:-0.5px; margin-bottom:10px; line-height:1.15; }
.sh p { font-size:16px; color:#8A857A; max-width:520px; line-height:1.7; }

/* STEPS V2 */
.steps-row { display:flex; align-items:stretch; gap:0; }
.s-card { flex:1; background:#fff; border-radius:12px; padding:28px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); }
.s-top { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
.s-chip { display:inline-flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:8px; background:#FBF5F9; color:#6C1A55; font-family:'Source Serif 4',serif; font-size:18px; flex-shrink:0; }
.s-card h3 { font-size:20px; font-weight:700; }
.s-card p { font-size:15px; color:#8A857A; line-height:1.7; }
.s-conn { display:flex; align-items:center; padding:0 2px; flex-shrink:0; }
.s-ln { width:24px; height:1px; background:#D8D0E0; }

/* DISCOUNT SECTION */
.disc-section { padding:80px 48px; max-width:1100px; margin:0 auto; }
.disc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
.disc-card { background:#fff; border-radius:12px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.03); display:flex; flex-direction:column; }
.disc-card h4 { font-size:15px; font-weight:700; margin-bottom:6px; }
.disc-card p { font-size:13px; color:#8A857A; line-height:1.6; flex:1; }
.disc-link { display:inline-block; margin-top:12px; font-size:13px; font-weight:700; color:#6C1A55; text-decoration:none; transition:color 0.2s; }
.disc-link:hover { color:#5A1548; }

/* DIVIDER */
.divider { max-width:1100px; margin:0 auto; padding:0 48px; }
.divider-line { height:1px; background:#E8E2DC; }

/* CTA BANNER */
.cta-banner { margin:80px 48px; border-radius:16px; background:linear-gradient(160deg,#6C1A55,#3D0F31); padding:80px 64px; text-align:center; position:relative; overflow:hidden; }
.cta-banner::before { content:''; position:absolute; width:500px; height:500px; border-radius:50%; background:rgba(192,106,165,0.08); top:-200px; right:-100px; }
.cta-banner h2 { font-family:'Playfair Display',serif; font-size:36px; color:#fff; margin-bottom:12px; position:relative; }
.cta-banner h2 em { font-style:italic; color:#E8A0D0; }
.cta-banner p { font-size:16px; color:rgba(255,255,255,0.5); margin-bottom:32px; position:relative; }
.cta-banner .btns { display:flex; gap:12px; justify-content:center; position:relative; }
.btn-w { background:#fff; color:#6C1A55; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; }
.btn-gd { background:transparent; color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:1px solid rgba(255,255,255,0.25); cursor:pointer; font-family:'Lato',sans-serif; }

/* EXTRA RESPONSIVE */
@media (max-width:900px) {
  .mini-hero { min-height:400px; }
  .mini-hero .inner { padding:110px 24px 56px; }
  .mini-hero .frost { padding:32px; max-width:100%; }
  .mini-hero h1 { font-size:32px; }
  .hiw-section { padding:64px 24px; }
  .steps-row { flex-direction:column; gap:12px; }
  .s-conn { justify-content:center; padding:4px 0; transform:rotate(90deg); }
  .disc-section { padding:64px 24px; }
  .disc-grid { grid-template-columns:1fr; }
  .cta-banner { margin:48px 20px; padding:48px 24px; }
}
@media (max-width:600px) {
  .cta-banner .btns { flex-direction:column; align-items:center; }
}
`;

const html = `<!-- COMPACT HERO -->
<section class="mini-hero">
  <div class="bg"><img src="/images/Hero_1.jpeg" alt=""><div class="vig"></div></div>
  <div class="inner">
    <div class="frost">
      <div class="lbl">Pricing</div>
      <h1>Their future, your <em>choice</em></h1>
      <p>Choose your product, plan, and add-ons.</p>
    </div>
  </div>
</section>
<div class="page">
  <div class="main">
    <div class="page-header">
      <div class="lbl">Pricing</div>
      <h1>Build your plan</h1>
      <p>Choose your product, plan, and add-ons. See your total update in real time.</p>
    </div>

    <!-- PROGRESS -->
    <div class="progress" id="progress">
      <div class="bar active"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <!-- STEP 1: PRODUCT -->
    <div class="step-section active" id="step-1">
      <div class="step-label">Step 1 of 6</div>
      <div class="step-title">What would you like to preserve?</div>
      <div class="opt-grid">
        <div class="opt-card" onclick="selectProduct('cb')" id="opt-cb">
          <div class="radio"></div>
          <h3>Cord blood</h3>
          <div class="opt-price">$725</div>
          <div class="opt-det">Processing + first year storage</div>
          <div class="opt-desc">Hematopoietic stem cells (HSCs) that rebuild blood and immune systems. Treats 80+ diseases.</div>
        </div>
        <div class="opt-card" onclick="selectProduct('cbt')" id="opt-cbt">
          <div class="badge">Most comprehensive</div>
          <div class="radio"></div>
          <h3>Cord blood &amp; tissue</h3>
          <div class="opt-price">$995</div>
          <div class="opt-det">Processing + first year storage</div>
          <div class="opt-desc">Both HSCs and mesenchymal stem cells (MSCs). Blood, immune, plus tissue and organ repair. PBA included free.</div>
        </div>
      </div>
      <div class="step-nav">
        <button class="btn-next" onclick="goStep(2)">Continue &rarr;</button>
      </div>
    </div>

    <!-- STEP 2: PLAN -->
    <div class="step-section" id="step-2">
      <div class="step-label">Step 2 of 6</div>
      <div class="step-title">Choose your storage plan</div>
      <div class="opt-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="opt-card" onclick="selectPlan('annual')" id="plan-annual">
          <div class="radio"></div>
          <h3>Annual</h3>
          <div class="opt-price" id="plan-annual-price">$200/yr</div>
          <div class="opt-det">Pay annually for storage</div>
          <div class="opt-desc">Most flexible. Pay year by year.</div>
        </div>
        <div class="opt-card" onclick="selectPlan('18yr')" id="plan-18yr">
          <div class="save-badge" id="plan-18yr-badge">Save $765</div>
          <div class="radio"></div>
          <h3>18-year prepaid</h3>
          <div class="opt-price" id="plan-18yr-price">$3,560</div>
          <div class="opt-det">Processing + 18 years storage</div>
          <div class="opt-save" id="plan-18yr-save">Save $765 vs. annual</div>
        </div>
        <div class="opt-card" onclick="selectPlan('lifetime')" id="plan-lifetime">
          <div class="save-badge" id="plan-lifetime-badge">Best long-term value</div>
          <div class="radio"></div>
          <h3>Lifetime</h3>
          <div class="opt-price" id="plan-lifetime-price">$5,625</div>
          <div class="opt-det">Processing + lifetime storage. Never pay again.</div>
          <div class="opt-save" id="plan-lifetime-save">Save $2,300 vs. annual</div>
        </div>
      </div>
      <div class="step-nav">
        <button class="btn-back" onclick="goStep(1)">&larr; Back</button>
        <button class="btn-next" onclick="goStep(3)">Continue &rarr;</button>
      </div>
    </div>

    <!-- STEP 3: ADD-ONS -->
    <div class="step-section" id="step-3">
      <div class="step-label">Step 3 of 6</div>
      <div class="step-title">Enhance your protection</div>
      <div class="addon-grid">
        <div class="addon-card" onclick="toggleAddon('pba', this)" id="addon-pba">
          <div class="check-box"></div>
          <h4>Public Bank Access</h4>
          <div class="addon-price" id="addon-pba-price">$299</div>
          <div class="addon-det">If your child needs more stem cells, StemCyte searches our public bank and all global public banks for a match.</div>
        </div>
        <div class="addon-card" onclick="toggleAddon('pbaplus', this)" id="addon-pbaplus">
          <div class="check-box"></div>
          <h4>Public Bank Access+</h4>
          <div class="addon-price">$699</div>
          <div class="addon-det">Everything in PBA, plus up to $80,000 toward uncovered medical expenses if a match is not found.</div>
        </div>
        <div class="addon-card" onclick="toggleAddon('hla', this)" id="addon-hla">
          <div class="check-box"></div>
          <h4>HLA Matching</h4>
          <div class="addon-price" id="addon-hla-price">$295</div>
          <div class="addon-det">Determines compatibility for transplantation between family members. Important for sibling banking.</div>
        </div>
        <div class="addon-card" onclick="toggleAddon('nga', this)" id="addon-nga">
          <div class="check-box"></div>
          <h4>NGA</h4>
          <div class="addon-price">$399</div>
          <div class="addon-det">Next-generation analysis providing detailed cell quality and viability metrics for your stored sample.</div>
        </div>
      </div>
      <div class="step-nav">
        <button class="btn-back" onclick="goStep(2)">&larr; Back</button>
        <button class="btn-next" onclick="goStep(4)">Continue &rarr;</button>
      </div>
    </div>

    <!-- STEP 4: PAYMENT PLAN -->
    <div class="step-section" id="step-4">
      <div class="step-label">Step 4 of 6</div>
      <div class="step-title">How would you like to pay?</div>
      <div class="pay-grid">
        <div class="opt-card" onclick="selectPayPlan('1x')" id="pay-1x">
          <div class="radio"></div>
          <h3>Pay in full</h3>
          <div class="opt-price" id="pay-1x-price">$0</div>
          <div class="opt-det">One-time payment</div>
        </div>
        <div class="opt-card" onclick="selectPayPlan('6mo')" id="pay-6mo">
          <div class="radio"></div>
          <h3>6 monthly payments</h3>
          <div class="opt-price" id="pay-6mo-price">$0/mo</div>
          <div class="opt-det">Split into 6 equal payments</div>
        </div>
        <div class="opt-card" onclick="selectPayPlan('12mo')" id="pay-12mo">
          <div class="radio"></div>
          <h3>12 monthly payments</h3>
          <div class="opt-price" id="pay-12mo-price">$0/mo</div>
          <div class="opt-det">Split into 12 equal payments</div>
        </div>
      </div>
      <div class="step-nav">
        <button class="btn-back" onclick="goStep(3)">&larr; Back</button>
        <button class="btn-next" onclick="goStep(5)">Continue &rarr;</button>
      </div>
    </div>

    <!-- STEP 5: INFO -->
    <div class="step-section" id="step-5">
      <div class="step-label">Step 5 of 6</div>
      <div class="step-title">Your information</div>
      <div class="form-section">
        <div class="form-row">
          <div><label class="form-label">First name</label><input class="form-input" type="text" placeholder="Jane"></div>
          <div><label class="form-label">Last name</label><input class="form-input" type="text" placeholder="Smith"></div>
        </div>
        <div class="form-row">
          <div><label class="form-label">Email address</label><input class="form-input" type="email" placeholder="jane@example.com"></div>
          <div><label class="form-label">Phone number</label><input class="form-input" type="tel" placeholder="(555) 123-4567"></div>
        </div>
        <div class="form-row">
          <div><label class="form-label">Due date</label><input class="form-input" type="date"></div>
          <div><label class="form-label">Relationship to baby</label>
            <select class="form-select form-input">
              <option value="">Select...</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Grandparent</option>
              <option>Other family member</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div class="form-row full">
          <div><label class="form-label">Shipping address</label><input class="form-input" type="text" placeholder="123 Main St, Apt 4B"></div>
        </div>
        <div class="form-row">
          <div><label class="form-label">City</label><input class="form-input" type="text" placeholder="Los Angeles"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div><label class="form-label">State</label><input class="form-input" type="text" placeholder="CA"></div>
            <div><label class="form-label">ZIP</label><input class="form-input" type="text" placeholder="90001"></div>
          </div>
        </div>
        <div class="form-row full">
          <div><label class="form-label">Hospital / birth center name</label><input class="form-input" type="text" placeholder="Cedars-Sinai Medical Center"></div>
        </div>
        <div class="form-row full">
          <div><label class="form-label">Hospital city &amp; state</label><input class="form-input" type="text" placeholder="Los Angeles, CA"></div>
        </div>
        <div style="margin-top:16px">
          <div class="checkbox-row"><input type="checkbox" id="add-parent"><label for="add-parent">Add an additional parent / guardian</label></div>
          <div class="checkbox-row"><input type="checkbox" id="surrogate"><label for="surrogate">This is an adoption or surrogate birth</label></div>
        </div>
      </div>
      <div class="step-nav">
        <button class="btn-back" onclick="goStep(4)">&larr; Back</button>
        <button class="btn-next" onclick="goStep(6)">Continue to payment &rarr;</button>
      </div>
    </div>

    <!-- STEP 6: PAYMENT -->
    <div class="step-section" id="step-6">
      <div class="step-label">Step 6 of 6</div>
      <div class="step-title">Payment details</div>
      <div class="pay-methods">
        <div class="pay-method selected" onclick="selectPayMethod(this)">Credit / Debit Card</div>
        <div class="pay-method" onclick="selectPayMethod(this)">Apple Pay</div>
        <div class="pay-method" onclick="selectPayMethod(this)">Google Pay</div>
      </div>
      <div class="card-fields">
        <div class="form-row full">
          <div><label class="form-label">Card number</label><input class="form-input" type="text" placeholder="4242 4242 4242 4242"></div>
        </div>
        <div class="form-row">
          <div><label class="form-label">Expiration</label><input class="form-input" type="text" placeholder="MM / YY"></div>
          <div><label class="form-label">CVC</label><input class="form-input" type="text" placeholder="123"></div>
        </div>
        <div class="form-row full">
          <div><label class="form-label">Name on card</label><input class="form-input" type="text" placeholder="Jane Smith"></div>
        </div>
      </div>
      <div class="step-nav">
        <button class="btn-back" onclick="goStep(5)">&larr; Back</button>
        <button class="btn-next" onclick="alert('This is a demo &mdash; no payment will be processed.')">Complete enrollment &rarr;</button>
      </div>
    </div>
  </div>

  <!-- STICKY SUMMARY -->
  <div class="summary" id="summary">
    <div class="summary-head">
      <h3>Your plan</h3>
      <div class="total" id="sum-total">$0</div>
      <div class="total-det" id="sum-det">Select a product to start</div>
      <div class="savings" id="sum-savings" style="display:none">You save $0</div>
    </div>
    <div class="summary-body" id="sum-body">
      <div class="summary-line"><span class="sl-label">Product</span><span class="sl-empty" id="sum-product">Not selected</span></div>
      <div class="summary-line"><span class="sl-label">Storage plan</span><span class="sl-empty" id="sum-plan">Not selected</span></div>
      <div class="summary-line"><span class="sl-label">Add-ons</span><span class="sl-empty" id="sum-addons">None</span></div>
      <div class="summary-line"><span class="sl-label">Payment</span><span class="sl-empty" id="sum-payment">Not selected</span></div>
    </div>
    <div class="summary-footer">
      <button class="enroll-btn" onclick="goStep(6)">Complete enrollment</button>
      <div class="phone-note">Questions? <a href="tel:8663894659" style="color:#6C1A55;text-decoration:none;font-weight:700">(866) 389-4659</a></div>
    </div>
  </div>
</div>


<!-- HOW IT WORKS -->
<section class="hiw-section">
  <div class="inner">
    <div class="sh">
      <div class="lbl">How it works</div>
      <h2>3 simple steps</h2>
      <p>From enrollment to preservation &mdash; the entire process is designed to be effortless.</p>
    </div>
    <div class="steps-row">
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
        <p>Our 24/7 courier picks up. Processed at our FDA-licensed Baldwin Park lab. Cryopreserved for life.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"><div class="divider-line"></div></div>

<!-- DISCOUNTS -->
<section class="disc-section">
  <div class="sh">
    <div class="lbl">Special programs</div>
    <h2>Discounts and programs for eligible families</h2>
  </div>
  <div class="disc-grid">
    <div class="disc-card">
      <h4>Sibling Donor Program</h4>
      <p>Free cord blood banking for families where a sibling has a diagnosis for which transplantation is standard therapy.</p>
      <a href="tel:8663894659" class="disc-link">Contact us &rarr;</a>
    </div>
    <div class="disc-card">
      <h4>Military &amp; public servant discount</h4>
      <p>Discounts available for active and retired military personnel, police, fire, and EMT professionals.</p>
      <a href="tel:8663894659" class="disc-link">Contact us &rarr;</a>
    </div>
    <div class="disc-card">
      <h4>Medical professional discount</h4>
      <p>Special pricing for healthcare professionals who understand the value of stem cell preservation.</p>
      <a href="tel:8663894659" class="disc-link">Contact us &rarr;</a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <h2>Have questions? We're here to <em>help</em></h2>
  <p>Our cord blood specialists are available 7 days a week to answer any questions.</p>
  <div class="btns">
    <button class="btn-w" onclick="">Call (866) 389-4659</button>
    <a href="tel:8663894659" class="btn-gd" style="display:inline-block;text-decoration:none">Call (866) 389-4659</a>
  </div>
</section>

`;

const script = `// ── STATE ──
var state = {
  product: null,
  plan: null,
  addons: {},
  payPlan: null,
  step: 1
};

// ── PRICING DATA ──
var pricing = {
  cb: {
    base: 725,
    annual_storage: 200,
    plans: {
      annual: { price: 725, label: 'Annual ($200/yr storage)', save: 0 },
      '18yr': { price: 3560, label: '18-year prepaid', save: 765 },
      lifetime: { price: 5625, label: 'Lifetime', save: 2300 }
    }
  },
  cbt: {
    base: 995,
    annual_storage: 400,
    plans: {
      annual: { price: 995, label: 'Annual ($400/yr storage)', save: 0 },
      '18yr': { price: 6665, label: '18-year prepaid', save: 1530 },
      lifetime: { price: 10795, label: 'Lifetime', save: 4600 }
    }
  }
};

var addonPricing = {
  pba: { regular: 299, prepaid: 299, cbt_free: true },
  pbaplus: { regular: 699, prepaid: 699, cbt_free: false },
  hla: { regular: 295, prepaid: 195 },
  nga: { regular: 399, prepaid: 399 }
};

// ── HELPERS ──
function isPrepaid() {
  return state.plan && state.plan !== 'annual';
}

function getAddonPrice(key) {
  var a = addonPricing[key];
  if (key === 'pba' && state.product === 'cbt') return 0;
  return isPrepaid() ? a.prepaid : a.regular;
}

function getTotal() {
  if (!state.product || !state.plan) return 0;
  var p = pricing[state.product].plans[state.plan];
  var total = p.price;
  Object.keys(state.addons).forEach(function(k) {
    if (state.addons[k]) total += getAddonPrice(k);
  });
  return total;
}

function getTotalSavings() {
  if (!state.product || !state.plan) return 0;
  var s = pricing[state.product].plans[state.plan].save;
  if (state.addons.hla && isPrepaid()) s += 100;
  if (state.addons.pba && state.product === 'cbt') s += 299;
  return s;
}

function fmt(n) {
  return '$' + n.toLocaleString();
}

// ── SELECT PRODUCT ──
function selectProduct(type) {
  state.product = type;
  document.getElementById('opt-cb').classList.toggle('selected', type === 'cb');
  document.getElementById('opt-cbt').classList.toggle('selected', type === 'cbt');
  if (state.plan) selectPlan(state.plan);
  updatePlanPrices();
  updateAddonPrices();
  updateSummary();
}

// ── UPDATE PLAN PRICES ──
function updatePlanPrices() {
  if (!state.product) return;
  var plans = pricing[state.product].plans;
  var storage = pricing[state.product].annual_storage;
  document.getElementById('plan-annual-price').textContent = fmt(storage) + '/yr';
  ['18yr','lifetime'].forEach(function(k) {
    var el = document.getElementById('plan-' + k + '-price');
    var sv = document.getElementById('plan-' + k + '-save');
    if (el) el.textContent = fmt(plans[k].price);
    if (sv) sv.textContent = 'Save ' + fmt(plans[k].save) + ' vs. annual';
    var badge = document.getElementById('plan-' + k + '-badge');
    if (badge && k !== 'lifetime') badge.textContent = 'Save ' + fmt(plans[k].save);
  });
  var lb = document.getElementById('plan-lifetime-badge');
  if (lb) lb.textContent = 'Best long-term value';
}

// ── SELECT PLAN ──
function selectPlan(plan) {
  state.plan = plan;
  ['annual','18yr','lifetime'].forEach(function(k) {
    var el = document.getElementById('plan-' + k);
    if (el) el.classList.toggle('selected', k === plan);
  });
  updateAddonPrices();
  updateSummary();
}

// ── UPDATE ADDON PRICES ──
function updateAddonPrices() {
  var pbaEl = document.getElementById('addon-pba');
  var pbaPrice = document.getElementById('addon-pba-price');
  if (state.product === 'cbt') {
    pbaPrice.textContent = 'FREE';
    pbaPrice.style.color = '#3D8B6A';
    if (!document.getElementById('pba-free-badge')) {
      var badge = document.createElement('div');
      badge.className = 'free-badge';
      badge.textContent = 'Free with CB&T';
      badge.id = 'pba-free-badge';
      pbaEl.appendChild(badge);
    }
  } else {
    pbaPrice.textContent = '$299';
    pbaPrice.style.color = '#6C1A55';
    var fb = document.getElementById('pba-free-badge');
    if (fb) fb.remove();
  }
  var hlaPrice = document.getElementById('addon-hla-price');
  if (isPrepaid()) {
    hlaPrice.textContent = '$195';
    if (!document.getElementById('hla-save-badge')) {
      var badge = document.createElement('div');
      badge.className = 'save-badge';
      badge.textContent = 'Save $100 with prepaid';
      badge.id = 'hla-save-badge';
      document.getElementById('addon-hla').appendChild(badge);
    }
  } else {
    hlaPrice.textContent = '$295';
    var hsb = document.getElementById('hla-save-badge');
    if (hsb) hsb.remove();
  }
}

// ── TOGGLE ADDON ──
function toggleAddon(key, el) {
  if (key === 'pba' && state.addons.pbaplus) {
    state.addons.pbaplus = false;
    document.getElementById('addon-pbaplus').classList.remove('selected');
  }
  if (key === 'pbaplus' && state.addons.pba) {
    state.addons.pba = false;
    document.getElementById('addon-pba').classList.remove('selected');
  }
  state.addons[key] = !state.addons[key];
  el.classList.toggle('selected', state.addons[key]);
  updateSummary();
}

// ── SELECT PAY PLAN ──
function selectPayPlan(plan) {
  state.payPlan = plan;
  ['1x','6mo','12mo'].forEach(function(k) {
    document.getElementById('pay-' + k).classList.toggle('selected', k === plan);
  });
  updatePayPrices();
  updateSummary();
}

function updatePayPrices() {
  var total = getTotal();
  document.getElementById('pay-1x-price').textContent = fmt(total);
  document.getElementById('pay-6mo-price').textContent = fmt(Math.ceil(total / 6)) + '/mo';
  document.getElementById('pay-12mo-price').textContent = fmt(Math.ceil(total / 12)) + '/mo';
}

// ── UPDATE SUMMARY ──
function updateSummary() {
  var total = getTotal();
  var savings = getTotalSavings();
  document.getElementById('sum-total').textContent = fmt(total);
  if (state.plan === 'annual' && state.product) {
    var storage = pricing[state.product].annual_storage;
    document.getElementById('sum-det').textContent = 'Processing + ' + fmt(storage) + '/yr storage';
  } else if (state.plan) {
    document.getElementById('sum-det').textContent = pricing[state.product].plans[state.plan].label;
  } else {
    document.getElementById('sum-det').textContent = 'Select a product to start';
  }
  var savEl = document.getElementById('sum-savings');
  if (savings > 0) {
    savEl.style.display = 'inline-block';
    savEl.textContent = 'You save ' + fmt(savings);
  } else {
    savEl.style.display = 'none';
  }
  var prodEl = document.getElementById('sum-product');
  if (state.product === 'cb') { prodEl.textContent = 'Cord blood'; prodEl.className = 'sl-value'; }
  else if (state.product === 'cbt') { prodEl.textContent = 'Cord blood & tissue'; prodEl.className = 'sl-value'; }
  else { prodEl.textContent = 'Not selected'; prodEl.className = 'sl-empty'; }
  var planEl = document.getElementById('sum-plan');
  if (state.plan && state.product) {
    planEl.textContent = pricing[state.product].plans[state.plan].label + ' \\u2014 ' + fmt(pricing[state.product].plans[state.plan].price);
    planEl.className = 'sl-value';
  } else { planEl.textContent = 'Not selected'; planEl.className = 'sl-empty'; }
  var addonsEl = document.getElementById('sum-addons');
  var addonList = [];
  Object.keys(state.addons).forEach(function(k) {
    if (state.addons[k]) {
      var p = getAddonPrice(k);
      var name = { pba:'PBA', pbaplus:'PBA+', hla:'HLA', nga:'NGA' }[k];
      addonList.push(name + (p === 0 ? ' (free)' : ' ' + fmt(p)));
    }
  });
  if (addonList.length) { addonsEl.textContent = addonList.join(', '); addonsEl.className = 'sl-value'; }
  else { addonsEl.textContent = 'None'; addonsEl.className = 'sl-empty'; }
  var payEl = document.getElementById('sum-payment');
  if (state.payPlan === '1x') { payEl.textContent = 'Pay in full'; payEl.className = 'sl-value'; }
  else if (state.payPlan === '6mo') { payEl.textContent = '6 monthly \\u00d7 ' + fmt(Math.ceil(total / 6)); payEl.className = 'sl-value'; }
  else if (state.payPlan === '12mo') { payEl.textContent = '12 monthly \\u00d7 ' + fmt(Math.ceil(total / 12)); payEl.className = 'sl-value'; }
  else { payEl.textContent = 'Not selected'; payEl.className = 'sl-empty'; }
}

// ── STEP NAVIGATION ──
function goStep(n) {
  state.step = n;
  for (var i = 1; i <= 6; i++) {
    document.getElementById('step-' + i).classList.toggle('active', i === n);
  }
  var bars = document.querySelectorAll('.progress .bar');
  bars.forEach(function(bar, idx) {
    bar.classList.remove('active', 'done');
    if (idx < n - 1) bar.classList.add('done');
    if (idx === n - 1) bar.classList.add('active');
  });
  if (n === 4) updatePayPrices();
}

// ── PAY METHOD ──
function selectPayMethod(el) {
  document.querySelectorAll('.pay-method').forEach(function(m) { m.classList.remove('selected'); });
  el.classList.add('selected');
}

// Init
updateSummary();`;

export default function Page() {
  return <PageContent css={css} html={html} script={script} transparentNav={false} />;
}
