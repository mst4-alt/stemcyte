'use client';

import { useState } from 'react';
import Image from 'next/image';
import Nav from '../../components/Nav';
import s from './page.module.css';

export default function ClientPayment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');

  function handleCardChange(e) {
    const v = e.target.value.replace(/\D/g, '').substring(0, 16);
    setCardNumber(v.replace(/(\d{4})(?=\d)/g, '$1 '));
  }

  function handleExpiryChange(e) {
    let v = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
    setExpiry(v);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('This is a placeholder. Stripe payment integration coming soon. Please contact AR@stemcyte.com for payment assistance.');
  }

  return (
    <>
      <Nav transparentHero={true} />

      <div id="hero" className={s.hero}>
        <Image
          src="/images/payment/hero.jpeg"
          alt="StemCyte client payment"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={s.vig} />
        <div className={s.ct}>
          <div className={s.lbl}>Account</div>
          <h1>Client Payment</h1>
          <p className={s.sub}>Make a payment toward your StemCyte account.</p>
        </div>
      </div>

      <div className={s.section}>

        <div className={s.helpBox}>
          <div className={s.helpIcon}>
            <svg fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className={s.helpText}>
            <h3>Questions about your account?</h3>
            <p>Contact our billing team at <a href="mailto:AR@stemcyte.com">AR@stemcyte.com</a> or call <a href="tel:6266462520">(626) 646-2520</a>.</p>
          </div>
        </div>

        <div className={s.formCard}>
          <form id="payment-form" onSubmit={handleSubmit}>

            <div className={s.formSectionLabel}>Account information</div>

            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="pay-first">First name</label>
                <input type="text" id="pay-first" placeholder="Jane" required />
              </div>
              <div className={s.field}>
                <label htmlFor="pay-last">Last name</label>
                <input type="text" id="pay-last" placeholder="Smith" required />
              </div>
            </div>
            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="pay-email">Email</label>
                <input type="email" id="pay-email" placeholder="jane@email.com" required />
              </div>
              <div className={s.field}>
                <label htmlFor="pay-phone">Phone</label>
                <input type="tel" id="pay-phone" placeholder="(555) 555-5555" required />
              </div>
            </div>
            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="pay-account">Account or invoice number (if known)</label>
                <input type="text" id="pay-account" placeholder="e.g. SC-10045 or INV-2026-001" />
              </div>
              <div className={s.field}>
                <label htmlFor="pay-reason">Payment reason</label>
                <select id="pay-reason" required defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option value="annual-storage">Annual storage fee</option>
                  <option value="processing">Processing fee</option>
                  <option value="installment">Installment payment</option>
                  <option value="add-on">Add-on service</option>
                  <option value="balance">Outstanding balance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={s.formSectionLabel}>Payment details</div>

            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="pay-amount">Payment amount</label>
                <div className={s.amountWrap}>
                  <span className={s.dollar}>$</span>
                  <input type="number" id="pay-amount" placeholder="0.00" min="1" step="0.01" required />
                </div>
              </div>
            </div>

            <div className={s.paymentSection}>
              <div className={`${s.formRow} ${s.single}`}>
                <div className={s.field}>
                  <label htmlFor="pay-card">Card number</label>
                  <input
                    type="text"
                    id="pay-card"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                    value={cardNumber}
                    onChange={handleCardChange}
                  />
                </div>
              </div>
              <div className={s.cardRow}>
                <div className={s.field}>
                  <label htmlFor="pay-name">Name on card</label>
                  <input type="text" id="pay-name" placeholder="Jane Smith" required />
                </div>
                <div className={s.field}>
                  <label htmlFor="pay-exp">Expiry</label>
                  <input
                    type="text"
                    id="pay-exp"
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                    value={expiry}
                    onChange={handleExpiryChange}
                  />
                </div>
                <div className={s.field}>
                  <label htmlFor="pay-cvc">CVC</label>
                  <input type="text" id="pay-cvc" placeholder="123" maxLength="4" required />
                </div>
              </div>
              <div className={s.secureNote}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your payment information is encrypted and secure. This form will be replaced by Stripe checkout.</span>
              </div>
            </div>

            <div className={s.submitRow}>
              <button type="submit" className={s.btnSubmit}>Submit payment</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}
