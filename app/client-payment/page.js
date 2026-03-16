import PageContent from '../../components/PageContent';

export const metadata = {
  title: 'Client Payment | StemCyte',
};

const css = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:'Lato',sans-serif; background:#FAF9F7; color:#2C2A26; -webkit-font-smoothing:antialiased; line-height:1.65; }

/* HERO */
.hero { position:relative; min-height:420px; display:flex; align-items:flex-end; overflow:hidden; }
.hero .bg { position:absolute; inset:0; background-image:url('/images/payment/hero.jpeg'); background-size:cover; background-position:center; }
.hero .vig { position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.72) 100%); }
.hero .ct { position:relative; z-index:2; max-width:1100px; margin:0 auto; padding:160px 48px 56px; width:100%; }
.hero .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#E8A0D0; margin-bottom:12px; }
.hero h1 { font-family:'Playfair Display',serif; font-size:44px; font-weight:400; line-height:1.1; letter-spacing:-1.5px; max-width:680px; margin-bottom:12px; color:#fff; }
.hero .sub { font-size:17px; color:rgba(255,255,255,0.55); max-width:540px; line-height:1.7; }

/* SECTION */
.section { padding:80px 48px; max-width:900px; margin:0 auto; }

/* HELP BOX */
.help-box { background:#F3F0F8; border-radius:12px; padding:24px 32px; margin-bottom:48px; display:flex; align-items:center; gap:16px; }
.help-icon { width:48px; height:48px; border-radius:50%; background:#6C1A55; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.help-icon svg { width:24px; height:24px; }
.help-text h3 { font-size:16px; font-weight:700; margin-bottom:2px; }
.help-text p { font-size:14px; color:#8A857A; line-height:1.6; }
.help-text a { color:#6C1A55; text-decoration:none; font-weight:700; }
.help-text a:hover { text-decoration:underline; }

/* FORM */
.form-card { background:#fff; border-radius:16px; padding:40px; box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03); }
.form-section-label { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:20px; padding-bottom:12px; border-bottom:1px solid #E8E2DC; }
.form-section-label:not(:first-child) { margin-top:32px; }

.form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
.form-row.single { grid-template-columns:1fr; }

.field label { display:block; font-size:13px; font-weight:700; color:#2C2A26; margin-bottom:6px; }
.field input,
.field select,
.field textarea { width:100%; padding:12px 16px; border:1px solid #E8E2DC; border-radius:8px; font-size:15px; font-family:'Lato',sans-serif; color:#2C2A26; background:#FAF9F7; transition:border-color 0.2s, box-shadow 0.2s; outline:none; -webkit-appearance:none; }
.field input:focus,
.field select:focus,
.field textarea:focus { border-color:#C06AA5; box-shadow:0 0 0 3px rgba(192,106,165,0.12); }
.field input::placeholder,
.field textarea::placeholder { color:#B0AB9E; }
.field select { background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A857A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 16px center; padding-right:40px; }
.field textarea { resize:vertical; min-height:80px; }

/* AMOUNT INPUT */
.amount-wrap { position:relative; }
.amount-wrap .dollar { position:absolute; left:16px; top:50%; transform:translateY(-50%); font-size:15px; color:#8A857A; font-weight:700; pointer-events:none; }
.amount-wrap input { padding-left:28px; }

/* PAYMENT MOCK */
.payment-section { margin-top:32px; }
.card-row { display:grid; grid-template-columns:1fr 80px 80px; gap:16px; margin-bottom:16px; }
.secure-note { display:flex; align-items:center; gap:8px; font-size:12px; color:#B0AB9E; margin-top:12px; }
.secure-note svg { width:14px; height:14px; flex-shrink:0; }

/* SUBMIT */
.submit-row { margin-top:32px; text-align:center; }
.btn-submit { background:#6C1A55; color:#fff; padding:16px 48px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:'Lato',sans-serif; transition:all 0.25s; }
.btn-submit:hover { background:#8B3572; }

/* RESPONSIVE */
@media (max-width:900px) {
  .hero .ct { padding:140px 24px 40px; }
  .hero h1 { font-size:32px; }
  .section { padding:64px 24px; }
  .form-row { grid-template-columns:1fr; }
  .card-row { grid-template-columns:1fr 1fr; }
  .help-box { flex-direction:column; text-align:center; }
  .form-card { padding:28px 20px; }
}
@media (max-width:500px) {
  .card-row { grid-template-columns:1fr; }
}
`;

const html = `
<div id="hero" class="hero">
  <div class="bg"></div>
  <div class="vig"></div>
  <div class="ct">
    <div class="lbl">Account</div>
    <h1>Client Payment</h1>
    <p class="sub">Make a payment toward your StemCyte account.</p>
  </div>
</div>

<div class="section">

  <div class="help-box">
    <div class="help-icon">
      <svg fill="none" viewBox="0 0 24 24" stroke="#fff" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    </div>
    <div class="help-text">
      <h3>Questions about your account?</h3>
      <p>Contact our billing team at <a href="mailto:AR@stemcyte.com">AR@stemcyte.com</a> or call <a href="tel:6266462520">(626) 646-2520</a>.</p>
    </div>
  </div>

  <div class="form-card">
    <form id="payment-form">

      <div class="form-section-label">Account information</div>

      <div class="form-row">
        <div class="field">
          <label for="pay-first">First name</label>
          <input type="text" id="pay-first" placeholder="Jane" required />
        </div>
        <div class="field">
          <label for="pay-last">Last name</label>
          <input type="text" id="pay-last" placeholder="Smith" required />
        </div>
      </div>
      <div class="form-row">
        <div class="field">
          <label for="pay-email">Email</label>
          <input type="email" id="pay-email" placeholder="jane@email.com" required />
        </div>
        <div class="field">
          <label for="pay-phone">Phone</label>
          <input type="tel" id="pay-phone" placeholder="(555) 555-5555" required />
        </div>
      </div>
      <div class="form-row">
        <div class="field">
          <label for="pay-account">Account or invoice number (if known)</label>
          <input type="text" id="pay-account" placeholder="e.g. SC-10045 or INV-2026-001" />
        </div>
        <div class="field">
          <label for="pay-reason">Payment reason</label>
          <select id="pay-reason" required>
            <option value="" disabled selected>Select&hellip;</option>
            <option value="annual-storage">Annual storage fee</option>
            <option value="processing">Processing fee</option>
            <option value="installment">Installment payment</option>
            <option value="add-on">Add-on service</option>
            <option value="balance">Outstanding balance</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div class="form-section-label">Payment details</div>

      <div class="form-row">
        <div class="field">
          <label for="pay-amount">Payment amount</label>
          <div class="amount-wrap">
            <span class="dollar">$</span>
            <input type="number" id="pay-amount" placeholder="0.00" min="1" step="0.01" required />
          </div>
        </div>
      </div>

      <div class="payment-section">
        <div class="form-row single">
          <div class="field">
            <label for="pay-card">Card number</label>
            <input type="text" id="pay-card" placeholder="1234 5678 9012 3456" maxlength="19" required />
          </div>
        </div>
        <div class="card-row">
          <div class="field">
            <label for="pay-name">Name on card</label>
            <input type="text" id="pay-name" placeholder="Jane Smith" required />
          </div>
          <div class="field">
            <label for="pay-exp">Expiry</label>
            <input type="text" id="pay-exp" placeholder="MM/YY" maxlength="5" required />
          </div>
          <div class="field">
            <label for="pay-cvc">CVC</label>
            <input type="text" id="pay-cvc" placeholder="123" maxlength="4" required />
          </div>
        </div>
        <div class="secure-note">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <span>Your payment information is encrypted and secure. This form will be replaced by Stripe checkout.</span>
        </div>
      </div>

      <div class="submit-row">
        <button type="submit" class="btn-submit">Submit payment</button>
      </div>
    </form>
  </div>

</div>
`;

const script = `
(function() {
  /* Card number formatting */
  var cardInput = document.getElementById('pay-card');
  if (cardInput) {
    cardInput.addEventListener('input', function(e) {
      var v = e.target.value.replace(/\\D/g, '').substring(0, 16);
      e.target.value = v.replace(/(\\d{4})(?=\\d)/g, '$1 ');
    });
  }

  /* Expiry formatting */
  var expInput = document.getElementById('pay-exp');
  if (expInput) {
    expInput.addEventListener('input', function(e) {
      var v = e.target.value.replace(/\\D/g, '').substring(0, 4);
      if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
      e.target.value = v;
    });
  }

  /* Form submit */
  var form = document.getElementById('payment-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('This is a placeholder. Stripe payment integration coming soon. Please contact AR@stemcyte.com for payment assistance.');
    });
  }
})();
`;

export default function ClientPayment() {
  return <PageContent css={css} html={html} script={script} />;
}
