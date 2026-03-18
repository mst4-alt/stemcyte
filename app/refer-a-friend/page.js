'use client';

import { useRef } from 'react';
import Image from 'next/image';
import s from './page.module.css';

export default function ReferAFriend() {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you! Your referral has been submitted. We will reach out to your friend shortly.');
    formRef.current.reset();
  }

  return (
    <>
      <section className={s.hero} id="hero">
        <Image src="/images/Hero_2.jpeg" alt="StemCyte refer a friend" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className={s.vig}></div>
        <div className={s.ct}>
          <div className={s.lbl}>Referral Program</div>
          <h1>Refer a Friend</h1>
          <p className={s.sub}>Share the gift of stem cell banking — and get rewarded for it.</p>
        </div>
      </section>

      <div className={s.section}>

        <div className={s.howHeader}>
          <h2>How it works</h2>
          <p>Three simple steps to share and earn.</p>
        </div>

        <div className={s.steps}>
          <div className={s.step}>
            <div className={s.stepNum}>1</div>
            <h3>Your info</h3>
            <p>Tell us who you are so we can credit your reward.</p>
          </div>
          <div className={s.step}>
            <div className={s.stepNum}>2</div>
            <h3>Friend&rsquo;s info</h3>
            <p>Share their name and contact so we can reach out.</p>
          </div>
          <div className={s.step}>
            <div className={s.stepNum}>3</div>
            <h3>Pick your reward</h3>
            <p>Choose one year of free storage or $100.</p>
          </div>
        </div>

        <div className={s.rewardBanner}>
          <div className={s.rewardIcon}>
            <svg fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
          </div>
          <div className={s.rewardText}>
            <h3>Your reward, your choice</h3>
            <p>For every successful referral, receive one year of complimentary storage or $100.</p>
          </div>
        </div>

        <div className={s.formCard}>
          <form ref={formRef} onSubmit={handleSubmit}>

            <div className={s.formSectionLabel}>Your information</div>

            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="your-first">First name</label>
                <input type="text" id="your-first" placeholder="Jane" required />
              </div>
              <div className={s.field}>
                <label htmlFor="your-last">Last name</label>
                <input type="text" id="your-last" placeholder="Smith" required />
              </div>
            </div>
            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="your-email">Email</label>
                <input type="email" id="your-email" placeholder="jane@email.com" required />
              </div>
              <div className={s.field}>
                <label htmlFor="your-phone">Phone</label>
                <input type="tel" id="your-phone" placeholder="(555) 555-5555" />
              </div>
            </div>

            <div className={s.formSectionLabel}>Friend&rsquo;s information</div>

            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="friend-first">First name</label>
                <input type="text" id="friend-first" placeholder="Sarah" required />
              </div>
              <div className={s.field}>
                <label htmlFor="friend-last">Last name</label>
                <input type="text" id="friend-last" placeholder="Johnson" required />
              </div>
            </div>
            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="friend-email">Email</label>
                <input type="email" id="friend-email" placeholder="sarah@email.com" required />
              </div>
              <div className={s.field}>
                <label htmlFor="friend-phone">Phone</label>
                <input type="tel" id="friend-phone" placeholder="(555) 555-5555" />
              </div>
            </div>
            <div className={`${s.formRow} ${s.single}`}>
              <div className={s.field}>
                <label htmlFor="friend-due">Expected due date (if known)</label>
                <input type="date" id="friend-due" />
              </div>
            </div>

            <div className={s.formSectionLabel}>Choose your reward</div>

            <div className={s.rewardOptions}>
              <div className={s.rewardOpt}>
                <input type="radio" name="reward" id="reward-storage" value="storage" defaultChecked />
                <label htmlFor="reward-storage">One year free storage</label>
              </div>
              <div className={s.rewardOpt}>
                <input type="radio" name="reward" id="reward-cash" value="cash" />
                <label htmlFor="reward-cash">$100</label>
              </div>
            </div>
            <p className={s.disclaimer}>Referral reward is issued after your friend enrolls and completes payment. Cannot be combined with other promotions.</p>

            <div className={s.submitRow}>
              <button type="submit" className={s.btnSubmit}>Submit referral</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}
