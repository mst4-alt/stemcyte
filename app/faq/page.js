import PageContent from '../../components/PageContent';

export const metadata = {
  title: 'FAQ | StemCyte',
};

const css = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:var(--font-lato),'Lato',sans-serif; background:#FAF9F7; color:#2C2A26; -webkit-font-smoothing:antialiased; line-height:1.65; }

/* NAV */

/* HERO */
.hero { position:relative; min-height:540px; display:flex; align-items:flex-end; overflow:hidden; }
.hero .bg { position:absolute; inset:0; background-image:url('/images/Hero_2.jpeg'); background-size:cover; background-position:center; }
.hero .vig { position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.72) 100%); }
.hero .ct { position:relative; z-index:2; max-width:1100px; margin:0 auto; padding:180px 48px 72px; width:100%; }
.hero .lbl { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#E8A0D0; margin-bottom:12px; }
.hero h1 { font-family:var(--font-heading),'Playfair Display',serif; font-size:48px; font-weight:400; line-height:1.1; letter-spacing:-1.5px; max-width:680px; margin-bottom:16px; color:#fff; }
.hero .sub { font-size:17px; color:rgba(255,255,255,0.55); max-width:540px; line-height:1.7; }

/* SHARED */
.section { padding:80px 48px; max-width:1100px; margin:0 auto; }

/* FAQ CATEGORIES */
.faq-category { margin-bottom:64px; }
.faq-category:last-of-type { margin-bottom:0; }
.cat-label { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6C1A55; margin-bottom:20px; }

/* FAQ ACCORDION */
.faq-smooth { border-bottom:1px solid #E8E2DC; overflow:hidden; }
.faq-smooth:last-child { border-bottom:none; }
.faq-smooth .faq-q { padding:20px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center; font-size:16px; font-weight:700; color:#2C2A26; user-select:none; }
.faq-smooth .faq-q .icon { width:24px; height:24px; position:relative; flex-shrink:0; margin-left:16px; }
.faq-smooth .faq-q .icon::before,
.faq-smooth .faq-q .icon::after { content:''; position:absolute; background:#C06AA5; border-radius:1px; transition:transform 0.3s ease; }
.faq-smooth .faq-q .icon::before { width:14px; height:2px; top:11px; left:5px; }
.faq-smooth .faq-q .icon::after { width:2px; height:14px; top:5px; left:11px; }
.faq-smooth.open .faq-q .icon::after { transform:rotate(90deg); }
.faq-smooth .faq-a { max-height:0; overflow:hidden; transition:max-height 0.35s ease, opacity 0.3s ease; opacity:0; }
.faq-smooth.open .faq-a { opacity:1; }
.faq-smooth .faq-a-inner { padding:0 0 20px; font-size:15px; color:#8A857A; line-height:1.7; max-width:720px; }

/* CONTACT BOX */
.contact-box { background:#F3F0F8; border-radius:12px; padding:40px; text-align:center; margin-top:64px; }
.contact-box h3 { font-family:var(--font-heading),'Playfair Display',serif; font-size:24px; font-weight:400; margin-bottom:8px; }
.contact-box p { font-size:15px; color:#8A857A; margin-bottom:20px; }
.contact-box .btns { display:flex; gap:12px; justify-content:center; }
.contact-box .btn-p { background:#6C1A55; color:#fff; padding:14px 32px; border-radius:100px; font-size:14px; font-weight:700; border:none; cursor:pointer; font-family:var(--font-lato),'Lato',sans-serif; }
.contact-box .btn-s { background:transparent; color:#6C1A55; padding:14px 32px; border-radius:100px; font-size:14px; font-weight:700; border:1px solid #E8E2DC; cursor:pointer; font-family:var(--font-lato),'Lato',sans-serif; }

/* FOOTER */

/* RESPONSIVE */
@media (max-width:900px) {
  .hero .ct { padding:140px 24px 48px; }
  .hero h1 { font-size:34px; }
  .section { padding:64px 24px; }
  .contact-box .btns { flex-direction:column; }
}
@media (max-width:600px) {
  .hero h1 { font-size:28px; }
}
`;

const html = `<!-- HERO -->
<section class="hero" id="hero">
  <div class="bg"></div>
  <div class="vig"></div>
  <div class="ct">
    <div class="lbl">FAQ</div>
    <h1>Everything you need to know about cord blood banking</h1>
    <p class="sub">Answers to the most common questions from expecting parents, organized by topic.</p>
  </div>
</section>

<!-- FAQ -->
<section class="section">

  <!-- ABOUT BANKING -->
  <div class="faq-category">
    <div class="cat-label">About cord blood banking</div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">What is cord blood banking?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Cord blood banking preserves the stem cells found in your baby's umbilical cord blood after birth. These stem cells can treat over 80 diseases including cancers, blood disorders, and immune system disorders. Your newborn's stem cells can only be collected immediately after birth.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Should I bank both cord blood and cord tissue?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Yes! &mdash; they contain different types of stem cells with different applications. Cord blood contains hematopoietic stem cells (HSCs) that regenerate blood and immune systems, used in over 60,000 transplants since 1988. Cord tissue contains mesenchymal stem cells (MSCs) being researched in over 500 clinical trials for regenerative medicine including heart disease, Alzheimer's, and osteoarthritis. Banking both provides the most comprehensive protection.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">What diseases can cord blood stem cells treat?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Cord blood stem cells are used to treat over 80 diseases including leukemia, lymphoma, sickle cell disease, thalassemia, severe combined immunodeficiency (SCID), and metabolic disorders like Krabbe disease. Clinical trials are underway for cerebral palsy, autism, type 1 diabetes, spinal cord injuries, stroke, and more.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Is cord blood medical waste if I don't bank it?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Yes. If your baby's cord blood stem cells are not collected at birth, they are discarded as medical waste. This is a one-time opportunity &mdash; there is no way to go back and collect them later.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Can stored cord blood be used for treating anyone in a family?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Your baby's cord blood is a 100% match for themselves. Biological siblings have a 75% chance of being a partial HLA match, and biological parents have about a 20% probability of being a partial match. Each cord blood unit can only be used in one transplant &mdash; once used, it is no longer available for other family members.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Should I bank each child's cord blood?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Yes. Each child's cord blood is unique to them and is the only way to guarantee a 100% match. Physicians use an entire sample in each transplant since more stem cells increase the engraftment rate and overall success. Each cord blood unit can only be used once.</div></div>
    </div>
  </div>

  <!-- ABOUT THE PROCESS -->
  <div class="faq-category">
    <div class="cat-label">About the process</div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Is the collection process safe?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Completely safe. Cord blood is collected after the baby is born and the umbilical cord has been clamped and cut. No blood is taken from the baby or mother. It does not interfere with the delivery process in any way.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Can I do delayed cord clamping and still bank?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Yes. While delayed cord clamping may reduce the volume of cord blood collected, a good amount of stem cells can still be collected and preserved. Many families choose to do both. Discuss with your OB to include both in your birth plan.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">What if I deliver early or unexpectedly?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Call us immediately at (866) 389-4659. Overnight kit shipping is available for $50. Our team can coordinate urgent delivery to most hospitals within 24 hours.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">How long can cord blood be stored?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Research indicates that properly cryopreserved cord blood can last a lifetime. StemCyte recently provided a cord blood unit that was cryopreserved for 18 years to successfully treat a 46-year-old stroke patient &mdash; demonstrating long-term viability.</div></div>
    </div>
  </div>

  <!-- ABOUT PRICING -->
  <div class="faq-category">
    <div class="cat-label">About pricing</div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">How much does cord blood banking cost?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Cord blood processing starts at $725 with annual storage of $200/year. The 18-year prepaid plan is $3,560. Cord blood + tissue starts at $995 processing with $400/year storage. All plans include the LifeSaver Guarantee and free collection kit shipping. Public bank access is available as an add-on.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Are payment plans available?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Yes. You can split your total into 6 or 12 monthly payments. Call (866) 389-4659 to discuss payment options with a specialist. Lifetime storage plans are also available.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">Are there discounts available?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">StemCyte offers discounts for active and retired military personnel, public servants (police, fire, EMT), and medical professionals. A free Sibling Donor Program is available for families where a sibling has a diagnosis for which transplantation is standard therapy.</div></div>
    </div>
  </div>

  <!-- ABOUT STEMCYTE -->
  <div class="faq-category">
    <div class="cat-label">About StemCyte</div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">What makes StemCyte different from other banks?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">StemCyte is the only cord blood bank that operates both a private and public bank, offering families the option to add public bank access. We've shipped over 2,300 transplant units to 350+ hospitals in 35 countries &mdash; more than any other private bank. We're triple-accredited (FACT, AABB, FDA) and sponsor 3 active clinical trials.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">What is public bank access?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">Unique to StemCyte &mdash; if your child ever needs more stem cells than were stored, StemCyte will provide a matching unit from our public cord blood bank, extend the search to all global public banks, or pay up to $80,000 toward uncovered medical expenses if a matching unit is not found. Available as an add-on to any plan.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">What is the LifeSaver Guarantee?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">If your newborn's cord blood unit fails to engraft, StemCyte will refund all service fees paid, pay an additional $50,000, and provide a replacement unit from our donor cord blood bank free of charge. This guarantee is included at no additional cost with every plan.</div></div>
    </div>
    <div class="faq-smooth" onclick="toggleFaq(this)">
      <div class="faq-q">What are StemCyte's accreditations?<div class="icon"></div></div>
      <div class="faq-a"><div class="faq-a-inner">StemCyte is accredited by FACT (Foundation for the Accreditation of Cellular Therapy), AABB (American Association of Blood Banks), and is FDA registered. We also comply with cGMP (Current Good Manufacturing Practices). StemCyte was among the first private cord blood banks to achieve FACT accreditation.</div></div>
    </div>
  </div>

  <!-- CONTACT BOX -->
  <div class="contact-box">
    <h3>Still have questions?</h3>
    <p>Our specialists are available 7 days a week to answer any questions about cord blood banking.</p>
    <div class="btns">
      <a href="tel:8663894659" class="btn-p" style="display:inline-block;text-decoration:none">Call (866) 389-4659</a>
      <a href="mailto:customerservice@stemcyte.com" class="btn-s" style="display:inline-block;text-decoration:none">Email us</a>
    </div>
  </div>

</section>

`;

const script = `// FAQ toggle
function toggleFaq(el) {
  var wasOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-smooth').forEach(function(f) {
    f.classList.remove('open');
    f.querySelector('.faq-a').style.maxHeight = '0';
  });
  if (!wasOpen) {
    el.classList.add('open');
    var a = el.querySelector('.faq-a');
    var inner = el.querySelector('.faq-a-inner');
    a.style.maxHeight = inner.scrollHeight + 'px';
  }
}`;

export default function Page() {
  return <PageContent css={css} html={html} script={script} transparentNav={true} />;
}
