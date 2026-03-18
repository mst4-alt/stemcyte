'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

/* ── PRICING DATA ── */
const PRICING = {
  cb: {
    label: 'Cord Blood',
    processing: 725,
    plans: {
      annual: { storage: 200, total: 725, label: 'Annual', savings: 0 },
      '18year': { total: 3560, label: '18-Year Prepaid', savings: 765 },
      lifetime: { total: 5625, label: 'Lifetime', savings: 2300 },
    },
  },
  cbt: {
    label: 'Cord Blood & Tissue',
    processing: 995,
    plans: {
      annual: { storage: 400, total: 995, label: 'Annual', savings: 0 },
      '18year': { total: 6665, label: '18-Year Prepaid', savings: 1530 },
      lifetime: { total: 10795, label: 'Lifetime', savings: 4600 },
    },
  },
};

const ADDONS = {
  pba: { name: 'Public Bank Access', price: 299, prepaidPrice: 299, desc: 'If your child needs more stem cells, StemCyte searches our public bank and all global public banks for a match.' },
  pbaPlus: { name: 'Public Bank Access+', price: 699, prepaidPrice: 699, desc: 'Everything in PBA, plus up to $80,000 toward uncovered medical expenses if a match is not found.' },
  hla: { name: 'HLA Matching', price: 295, prepaidPrice: 195, desc: 'Determines compatibility for transplantation between family members. Important for sibling banking.' },
  nga: { name: 'NGA', price: 399, prepaidPrice: 399, desc: 'Next-generation analysis providing detailed cell quality and viability metrics for your stored sample.' },
};

const ADDON_DISPLAY = { pba: 'PBA', pbaPlus: 'PBA+', hla: 'HLA', nga: 'NGA' };

function fmt(n) {
  return '$' + n.toLocaleString();
}

export default function PricingPage() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState(null);
  const [plan, setPlan] = useState(null);
  const [addons, setAddons] = useState({});
  const [payPlan, setPayPlan] = useState(null);
  const [payMethod, setPayMethod] = useState('card');

  const isPrepaid = plan && plan !== 'annual';

  const getAddonPrice = useCallback((key) => {
    if (key === 'pba' && product === 'cbt') return 0;
    return isPrepaid ? ADDONS[key].prepaidPrice : ADDONS[key].price;
  }, [product, isPrepaid]);

  const getTotal = useCallback(() => {
    if (!product || !plan) return 0;
    let total = PRICING[product].plans[plan].total;
    Object.keys(addons).forEach((k) => {
      if (addons[k]) total += getAddonPrice(k);
    });
    return total;
  }, [product, plan, addons, getAddonPrice]);

  const getTotalSavings = useCallback(() => {
    if (!product || !plan) return 0;
    let sav = PRICING[product].plans[plan].savings;
    if (addons.hla && isPrepaid) sav += 100;
    if (addons.pba && product === 'cbt') sav += 299;
    return sav;
  }, [product, plan, addons, isPrepaid]);

  const total = getTotal();
  const savings = getTotalSavings();

  const goStep = useCallback((n) => {
    setStep(n);
  }, []);

  const selectProduct = useCallback((type) => {
    setProduct(type);
  }, []);

  const selectPlan = useCallback((p) => {
    setPlan(p);
  }, []);

  const toggleAddon = useCallback((key) => {
    setAddons((prev) => {
      const next = { ...prev };
      if (key === 'pba' && prev.pbaPlus) next.pbaPlus = false;
      if (key === 'pbaPlus' && prev.pba) next.pba = false;
      next[key] = !prev[key];
      return next;
    });
  }, []);

  const selectPayPlan = useCallback((p) => {
    setPayPlan(p);
  }, []);

  /* Summary helpers */
  const summaryDet = (() => {
    if (plan === 'annual' && product) {
      return 'Processing + ' + fmt(PRICING[product].plans.annual.storage) + '/yr storage';
    }
    if (plan && product) {
      return PRICING[product].plans[plan].label;
    }
    return 'Select a product to start';
  })();

  const addonSummaryText = (() => {
    const list = [];
    Object.keys(addons).forEach((k) => {
      if (addons[k]) {
        const p = getAddonPrice(k);
        list.push(ADDON_DISPLAY[k] + (p === 0 ? ' (free)' : ' ' + fmt(p)));
      }
    });
    return list.length ? list.join(', ') : null;
  })();

  const paymentSummaryText = (() => {
    if (payPlan === 'full') return 'Pay in full';
    if (payPlan === '6mo') return '6 monthly \u00d7 ' + fmt(Math.ceil(total / 6));
    if (payPlan === '12mo') return '12 monthly \u00d7 ' + fmt(Math.ceil(total / 12));
    return null;
  })();

  /* Plan price display helpers */
  const annualStorageLabel = product ? fmt(PRICING[product].plans.annual.storage) + '/yr' : '$200/yr';
  const get18YearPrice = product ? fmt(PRICING[product].plans['18year'].total) : '$3,560';
  const get18YearSavings = product ? PRICING[product].plans['18year'].savings : 765;
  const getLifetimePrice = product ? fmt(PRICING[product].plans.lifetime.total) : '$5,625';
  const getLifetimeSavings = product ? PRICING[product].plans.lifetime.savings : 2300;

  return (
    <>
      {/* HERO */}
      <section className={s.hero} id="hero">
        <Image src="/images/Hero_1.jpeg" alt="Pricing" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className={s.vig} />
        <div className={s.ct}>
          <div className={s.lbl}>Pricing</div>
          <h1>Their future, your <em>choice</em></h1>
          <p className={s.sub}>Choose your product, plan, and add-ons.</p>
        </div>
      </section>

      {/* PAGE GRID */}
      <div className={s.pageGrid}>
        <div className={s.main}>
          <div className={s.pageHeader}>
            <div className={s.lbl}>Pricing</div>
            <h1>Build your plan</h1>
            <p>Choose your product, plan, and add-ons. See your total update in real time.</p>
          </div>

          {/* PROGRESS BAR */}
          <div className={s.progress}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={[
                  s.bar,
                  i < step ? s.barDone : '',
                  i === step ? s.barActive : '',
                ].join(' ')}
              />
            ))}
          </div>

          {/* STEP 1: PRODUCT */}
          <div className={step === 1 ? s.stepSectionActive : s.stepSection}>
            <div className={s.stepLabel}>Step 1 of 6</div>
            <div className={s.stepTitle}>What would you like to preserve?</div>
            <div className={s.optGrid}>
              <div
                className={`${s.optCard} ${product === 'cb' ? s.optCardSelected : ''}`}
                onClick={() => selectProduct('cb')}
              >
                <div className={s.radio} />
                <h3>Cord blood</h3>
                <div className={s.optPrice}>$725</div>
                <div className={s.optDet}>Processing + first year storage</div>
                <div className={s.optDesc}>Hematopoietic stem cells (HSCs) that rebuild blood and immune systems. Treats 80+ diseases.</div>
              </div>
              <div
                className={`${s.optCard} ${product === 'cbt' ? s.optCardSelected : ''}`}
                onClick={() => selectProduct('cbt')}
              >
                <div className={s.badge}>Most comprehensive</div>
                <div className={s.radio} />
                <h3>Cord blood &amp; tissue</h3>
                <div className={s.optPrice}>$995</div>
                <div className={s.optDet}>Processing + first year storage</div>
                <div className={s.optDesc}>Both HSCs and mesenchymal stem cells (MSCs). Blood, immune, plus tissue and organ repair. PBA included free.</div>
              </div>
            </div>
            <div className={s.stepNav}>
              <button className={s.btnNext} onClick={() => goStep(2)}>Continue &rarr;</button>
            </div>
          </div>

          {/* STEP 2: PLAN */}
          <div className={step === 2 ? s.stepSectionActive : s.stepSection}>
            <div className={s.stepLabel}>Step 2 of 6</div>
            <div className={s.stepTitle}>Choose your storage plan</div>
            <div className={s.optGrid3}>
              <div
                className={`${s.optCard} ${plan === 'annual' ? s.optCardSelected : ''}`}
                onClick={() => selectPlan('annual')}
              >
                <div className={s.radio} />
                <h3>Annual</h3>
                <div className={s.optPrice}>{annualStorageLabel}</div>
                <div className={s.optDet}>Pay annually for storage</div>
                <div className={s.optDesc}>Most flexible. Pay year by year.</div>
              </div>
              <div
                className={`${s.optCard} ${plan === '18year' ? s.optCardSelected : ''}`}
                onClick={() => selectPlan('18year')}
              >
                <div className={s.saveBadge}>Save {fmt(get18YearSavings)}</div>
                <div className={s.radio} />
                <h3>18-year prepaid</h3>
                <div className={s.optPrice}>{get18YearPrice}</div>
                <div className={s.optDet}>Processing + 18 years storage</div>
                <div className={s.optSave}>Save {fmt(get18YearSavings)} vs. annual</div>
              </div>
              <div
                className={`${s.optCard} ${plan === 'lifetime' ? s.optCardSelected : ''}`}
                onClick={() => selectPlan('lifetime')}
              >
                <div className={s.saveBadge}>Best long-term value</div>
                <div className={s.radio} />
                <h3>Lifetime</h3>
                <div className={s.optPrice}>{getLifetimePrice}</div>
                <div className={s.optDet}>Processing + lifetime storage. Never pay again.</div>
                <div className={s.optSave}>Save {fmt(getLifetimeSavings)} vs. annual</div>
              </div>
            </div>
            <div className={s.stepNav}>
              <button className={s.btnBack} onClick={() => goStep(1)}>&larr; Back</button>
              <button className={s.btnNext} onClick={() => goStep(3)}>Continue &rarr;</button>
            </div>
          </div>

          {/* STEP 3: ADD-ONS */}
          <div className={step === 3 ? s.stepSectionActive : s.stepSection}>
            <div className={s.stepLabel}>Step 3 of 6</div>
            <div className={s.stepTitle}>Enhance your protection</div>
            <div className={s.addonGrid}>
              {/* PBA */}
              <div
                className={`${s.addonCard} ${addons.pba ? s.addonCardSelected : ''}`}
                onClick={() => toggleAddon('pba')}
              >
                <div className={s.checkBox} />
                <h4>Public Bank Access</h4>
                <div className={`${s.addonPrice} ${product === 'cbt' ? s.addonPriceFree : ''}`}>
                  {product === 'cbt' ? 'FREE' : '$299'}
                </div>
                {product === 'cbt' && <div className={s.freeBadge}>Free with CB&amp;T</div>}
                <div className={s.addonDet}>{ADDONS.pba.desc}</div>
              </div>

              {/* PBA+ */}
              <div
                className={`${s.addonCard} ${addons.pbaPlus ? s.addonCardSelected : ''}`}
                onClick={() => toggleAddon('pbaPlus')}
              >
                <div className={s.checkBox} />
                <h4>Public Bank Access+</h4>
                <div className={s.addonPrice}>$699</div>
                <div className={s.addonDet}>{ADDONS.pbaPlus.desc}</div>
              </div>

              {/* HLA */}
              <div
                className={`${s.addonCard} ${addons.hla ? s.addonCardSelected : ''}`}
                onClick={() => toggleAddon('hla')}
              >
                <div className={s.checkBox} />
                <h4>HLA Matching</h4>
                <div className={s.addonPrice}>{isPrepaid ? '$195' : '$295'}</div>
                {isPrepaid && <div className={s.saveBadge}>Save $100 with prepaid</div>}
                <div className={s.addonDet}>{ADDONS.hla.desc}</div>
              </div>

              {/* NGA */}
              <div
                className={`${s.addonCard} ${addons.nga ? s.addonCardSelected : ''}`}
                onClick={() => toggleAddon('nga')}
              >
                <div className={s.checkBox} />
                <h4>NGA</h4>
                <div className={s.addonPrice}>$399</div>
                <div className={s.addonDet}>{ADDONS.nga.desc}</div>
              </div>
            </div>
            <div className={s.stepNav}>
              <button className={s.btnBack} onClick={() => goStep(2)}>&larr; Back</button>
              <button className={s.btnNext} onClick={() => goStep(4)}>Continue &rarr;</button>
            </div>
          </div>

          {/* STEP 4: PAYMENT PLAN */}
          <div className={step === 4 ? s.stepSectionActive : s.stepSection}>
            <div className={s.stepLabel}>Step 4 of 6</div>
            <div className={s.stepTitle}>How would you like to pay?</div>
            <div className={s.payGrid}>
              <div
                className={`${s.optCard} ${payPlan === 'full' ? s.optCardSelected : ''}`}
                onClick={() => selectPayPlan('full')}
              >
                <div className={s.radio} />
                <h3>Pay in full</h3>
                <div className={s.optPrice}>{fmt(total)}</div>
                <div className={s.optDet}>One-time payment</div>
              </div>
              <div
                className={`${s.optCard} ${payPlan === '6mo' ? s.optCardSelected : ''}`}
                onClick={() => selectPayPlan('6mo')}
              >
                <div className={s.radio} />
                <h3>6 monthly payments</h3>
                <div className={s.optPrice}>{total > 0 ? fmt(Math.ceil(total / 6)) + '/mo' : '$0/mo'}</div>
                <div className={s.optDet}>Split into 6 equal payments</div>
              </div>
              <div
                className={`${s.optCard} ${payPlan === '12mo' ? s.optCardSelected : ''}`}
                onClick={() => selectPayPlan('12mo')}
              >
                <div className={s.radio} />
                <h3>12 monthly payments</h3>
                <div className={s.optPrice}>{total > 0 ? fmt(Math.ceil(total / 12)) + '/mo' : '$0/mo'}</div>
                <div className={s.optDet}>Split into 12 equal payments</div>
              </div>
            </div>
            <div className={s.stepNav}>
              <button className={s.btnBack} onClick={() => goStep(3)}>&larr; Back</button>
              <button className={s.btnNext} onClick={() => goStep(5)}>Continue &rarr;</button>
            </div>
          </div>

          {/* STEP 5: INFO */}
          <div className={step === 5 ? s.stepSectionActive : s.stepSection}>
            <div className={s.stepLabel}>Step 5 of 6</div>
            <div className={s.stepTitle}>Your information</div>
            <div className={s.formSection}>
              <div className={s.formRow}>
                <div><label className={s.formLabel}>First name</label><input className={s.formInput} type="text" placeholder="Jane" /></div>
                <div><label className={s.formLabel}>Last name</label><input className={s.formInput} type="text" placeholder="Smith" /></div>
              </div>
              <div className={s.formRow}>
                <div><label className={s.formLabel}>Email address</label><input className={s.formInput} type="email" placeholder="jane@example.com" /></div>
                <div><label className={s.formLabel}>Phone number</label><input className={s.formInput} type="tel" placeholder="(555) 123-4567" /></div>
              </div>
              <div className={s.formRow}>
                <div><label className={s.formLabel}>Due date</label><input className={s.formInput} type="date" /></div>
                <div>
                  <label className={s.formLabel}>Relationship to baby</label>
                  <select className={`${s.formSelect} ${s.formInput}`}>
                    <option value="">Select...</option>
                    <option>Mother</option>
                    <option>Father</option>
                    <option>Grandparent</option>
                    <option>Other family member</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className={s.formRowFull}>
                <div><label className={s.formLabel}>Shipping address</label><input className={s.formInput} type="text" placeholder="123 Main St, Apt 4B" /></div>
              </div>
              <div className={s.formRow}>
                <div><label className={s.formLabel}>City</label><input className={s.formInput} type="text" placeholder="Los Angeles" /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div><label className={s.formLabel}>State</label><input className={s.formInput} type="text" placeholder="CA" /></div>
                  <div><label className={s.formLabel}>ZIP</label><input className={s.formInput} type="text" placeholder="90001" /></div>
                </div>
              </div>
              <div className={s.formRowFull}>
                <div><label className={s.formLabel}>Hospital / birth center name</label><input className={s.formInput} type="text" placeholder="Cedars-Sinai Medical Center" /></div>
              </div>
              <div className={s.formRowFull}>
                <div><label className={s.formLabel}>Hospital city &amp; state</label><input className={s.formInput} type="text" placeholder="Los Angeles, CA" /></div>
              </div>
              <div style={{ marginTop: '16px' }}>
                <div className={s.checkboxRow}>
                  <input type="checkbox" id="add-parent" />
                  <label htmlFor="add-parent">Add an additional parent / guardian</label>
                </div>
                <div className={s.checkboxRow}>
                  <input type="checkbox" id="surrogate" />
                  <label htmlFor="surrogate">This is an adoption or surrogate birth</label>
                </div>
              </div>
            </div>
            <div className={s.stepNav}>
              <button className={s.btnBack} onClick={() => goStep(4)}>&larr; Back</button>
              <button className={s.btnNext} onClick={() => goStep(6)}>Continue to payment &rarr;</button>
            </div>
          </div>

          {/* STEP 6: PAYMENT */}
          <div className={step === 6 ? s.stepSectionActive : s.stepSection}>
            <div className={s.stepLabel}>Step 6 of 6</div>
            <div className={s.stepTitle}>Payment details</div>
            <div className={s.payMethods}>
              {[
                { key: 'card', label: 'Credit / Debit Card' },
                { key: 'apple', label: 'Apple Pay' },
                { key: 'google', label: 'Google Pay' },
              ].map((m) => (
                <div
                  key={m.key}
                  className={`${s.payMethod} ${payMethod === m.key ? s.payMethodSelected : ''}`}
                  onClick={() => setPayMethod(m.key)}
                >
                  {m.label}
                </div>
              ))}
            </div>
            <div className={s.cardFields}>
              <div className={s.formRowFull}>
                <div><label className={s.formLabel}>Card number</label><input className={s.formInput} type="text" placeholder="4242 4242 4242 4242" /></div>
              </div>
              <div className={s.formRow}>
                <div><label className={s.formLabel}>Expiration</label><input className={s.formInput} type="text" placeholder="MM / YY" /></div>
                <div><label className={s.formLabel}>CVC</label><input className={s.formInput} type="text" placeholder="123" /></div>
              </div>
              <div className={s.formRowFull}>
                <div><label className={s.formLabel}>Name on card</label><input className={s.formInput} type="text" placeholder="Jane Smith" /></div>
              </div>
            </div>
            <div className={s.stepNav}>
              <button className={s.btnBack} onClick={() => goStep(5)}>&larr; Back</button>
              <button className={s.btnNext} onClick={() => alert('This is a demo — no payment will be processed.')}>Complete enrollment &rarr;</button>
            </div>
          </div>
        </div>

        {/* STICKY SUMMARY */}
        <div className={s.summary}>
          <div className={s.summaryHead}>
            <h3>Your plan</h3>
            <div className={s.summaryTotal}>{fmt(total)}</div>
            <div className={s.summaryDet}>{summaryDet}</div>
            {savings > 0 && (
              <div className={s.summarySavings}>You save {fmt(savings)}</div>
            )}
          </div>
          <div className={s.summaryBody}>
            <div className={s.summaryLine}>
              <span className={s.slLabel}>Product</span>
              {product ? (
                <span className={s.slValue}>{PRICING[product].label}</span>
              ) : (
                <span className={s.slEmpty}>Not selected</span>
              )}
            </div>
            <div className={s.summaryLine}>
              <span className={s.slLabel}>Storage plan</span>
              {plan && product ? (
                <span className={s.slValue}>
                  {PRICING[product].plans[plan].label} &mdash; {fmt(PRICING[product].plans[plan].total)}
                </span>
              ) : (
                <span className={s.slEmpty}>Not selected</span>
              )}
            </div>
            <div className={s.summaryLine}>
              <span className={s.slLabel}>Add-ons</span>
              {addonSummaryText ? (
                <span className={s.slValue}>{addonSummaryText}</span>
              ) : (
                <span className={s.slEmpty}>None</span>
              )}
            </div>
            <div className={s.summaryLine}>
              <span className={s.slLabel}>Payment</span>
              {paymentSummaryText ? (
                <span className={s.slValue}>{paymentSummaryText}</span>
              ) : (
                <span className={s.slEmpty}>Not selected</span>
              )}
            </div>
          </div>
          <div className={s.summaryFooter}>
            <button className={s.enrollBtn} onClick={() => goStep(6)}>Complete enrollment</button>
            <div className={s.phoneNote}>Questions? <a href="tel:8663894659">(866) 389-4659</a></div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className={s.hiwSection}>
        <div className={s.hiwInner}>
          <div className={s.sh}>
            <div className={s.lbl}>How it works</div>
            <h2>3 simple steps</h2>
            <p>From enrollment to preservation &mdash; the entire process is designed to be effortless.</p>
          </div>
          <div className={s.stepsRow}>
            <div className={s.sCard}>
              <div className={s.sTop}><div className={s.sChip}>1</div><h3>Enroll</h3></div>
              <p>Sign up online or by phone. We ship an FDA-approved sterile collection kit to your home. Free shipping.</p>
            </div>
            <div className={s.sConn}><div className={s.sLn} /></div>
            <div className={s.sCard}>
              <div className={s.sTop}><div className={s.sChip}>2</div><h3>Collect</h3></div>
              <p>Bring the kit to the hospital. Your OB collects after birth &mdash; safe, painless, takes minutes.</p>
            </div>
            <div className={s.sConn}><div className={s.sLn} /></div>
            <div className={s.sCard}>
              <div className={s.sTop}><div className={s.sChip}>3</div><h3>Store</h3></div>
              <p>Our 24/7 courier picks up. Processed at our cGMP facility. Cryopreserved for life.</p>
            </div>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* DISCOUNTS */}
      <section className={s.discSection}>
        <div className={s.sh}>
          <div className={s.lbl}>Special programs</div>
          <h2>Discounts and programs for eligible families</h2>
        </div>
        <div className={s.discGrid}>
          <div className={s.discCard}>
            <h4>Sibling Donor Program</h4>
            <p>Free cord blood banking for families where a sibling has a diagnosis for which transplantation is standard therapy.</p>
            <a href="tel:8663894659" className={s.discLink}>Contact us &rarr;</a>
          </div>
          <div className={s.discCard}>
            <h4>Military &amp; public servant discount</h4>
            <p>Discounts available for active and retired military personnel, police, fire, and EMT professionals.</p>
            <a href="tel:8663894659" className={s.discLink}>Contact us &rarr;</a>
          </div>
          <div className={s.discCard}>
            <h4>Medical professional discount</h4>
            <p>Special pricing for healthcare professionals who understand the value of stem cell preservation.</p>
            <a href="tel:8663894659" className={s.discLink}>Contact us &rarr;</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaBanner}>
        <h2>Have questions? We&rsquo;re here to <em>help</em></h2>
        <p>Our cord blood specialists are available 7 days a week to answer any questions.</p>
        <div className={s.ctaBtns}>
          <a href="tel:8663894659" className={s.btnW}>Call (866) 389-4659</a>
          <a href="mailto:customerservice@stemcyte.com" className={s.btnGd}>Email us</a>
        </div>
      </section>
    </>
  );
}
