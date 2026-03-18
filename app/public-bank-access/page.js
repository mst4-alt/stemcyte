'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

const CheckIcon = () => (
  <span className={s.checkCircle}>
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#3D8B6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const faqItems = [
  { q: 'How is PBA different from private banking?', a: `Private banking stores your baby's own cord blood exclusively for your family. PBA is an add-on that gives your child access to additional matching donor units from StemCyte's public cord blood bank when more stem cells are needed.` },
  { q: `What's the difference between PBA and PBA+?`, a: `PBA covers your child. PBA+ includes everything in PBA and extends coverage to both parents — parents can access StemCyte's public bank for cord blood treatments, even without their own banked cord blood.` },
  { q: 'Is PBA included with any plan?', a: 'PBA is included free when you choose Cord Blood & Tissue banking. For Cord Blood only plans, PBA is a $299 one-time add-on. PBA+ is $699 regardless of plan.' },
  { q: 'Why can only StemCyte offer this?', a: 'StemCyte is the only private cord blood bank that also operates a public cord blood bank. That dual model is what makes it possible to offer private banking customers access to publicly-donated donor units.' },
  { q: `When would donor cells be needed instead of my child's own?`, a: 'For certain cancers and genetic disorders, a child cannot use their own stem cells because the condition may be present in those cells too. Donor cells from a public bank are essential in these cases. PBA also helps when a larger cell volume is needed than a single unit provides.' },
];

export default function PublicBankAccessPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef({});

  const toggleFaq = useCallback((i) => {
    setOpenIndex(prev => prev === i ? null : i);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(s.visible);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(`.${s.anim}`).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className={s.hero} id="hero">
        <Image src="/images/pba_hero_2.jpeg" alt="Public Bank Access" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className={s.vig}></div>
        <div className={s.ct}>
          <div className={`${s.txt} ${s.anim}`}>
            <div className={s.lbl}>ONLY AT STEMCYTE</div>
            <h1>Protection that goes beyond your baby's own cord blood</h1>
            <p className={s.sub}>StemCyte operates both a private and public cord blood bank — giving your family access to donor stem cells that most banks simply can't provide.</p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className={s.sectionLav}>
        <div className={s.section}>
          <div className={`${s.sectionLabel} ${s.anim}`}>WHY IT MATTERS</div>
          <h2 className={`${s.sectionTitle} ${s.anim}`}>When would your family need Public Bank Access?</h2>
          <div className={s.wimGrid}>
            <div className={`${s.wimCard} ${s.anim}`}>
              <div className={s.wimIcon} style={{ background: '#FBF5F9' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="12" y1="6" x2="12" y2="18" /></svg>
              </div>
              <h3>Expandable conditions</h3>
              <p>Private cells can be ideal for regeneration and acquired conditions. Donor cells are essential for treating certain cancers and genetic disorders where a child cannot use their own. PBA gives your family access to those donor units.</p>
            </div>
            <div className={`${s.wimCard} ${s.anim}`} style={{ transitionDelay: '0.15s' }}>
              <div className={s.wimIcon} style={{ background: '#F0F7F4' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D8B6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
              <h3>More volume when it counts</h3>
              <p>As children grow, volume needs increase. A single privately-banked unit may not be enough. Access to our public inventory ensures even adults can receive effective treatment.</p>
            </div>
            <div className={`${s.wimCard} ${s.anim}`} style={{ transitionDelay: '0.3s' }}>
              <div className={s.wimIcon} style={{ background: '#EDF5FF' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Viability assurance</h3>
              <p>Birth is unpredictable. In the rare event a hospital collection yields low volume or the sample is not usable, PBA provides access to a viable, sterile donor unit as a backup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <div className={s.section}>
        <div className={`${s.sectionLabel} ${s.anim}`}>COMPARE</div>
        <h2 className={`${s.sectionTitle} ${s.anim}`}>Public Bank Access vs Public Bank Access+</h2>
        <p className={`${s.sectionSub} ${s.anim}`}>PBA covers your child. PBA+ extends that coverage to both parents. Both are add-ons to any private banking plan.</p>
        <div className={s.compareWrap}>
          <div className={`${s.compareCard} ${s.standard} ${s.anim}`}>
            <div className={s.compareSublabel}>FOR YOUR CHILD</div>
            <h3>Public Bank Access</h3>
            <div className={s.comparePrice}>$299</div>
            <div className={s.comparePriceNote}>one-time add-on</div>
            <div className={s.compareFree}>Free with Cord Blood & Tissue</div>
            <p className={s.compareDesc}>If your child ever needs additional cord blood stem cells — whether for volume, a different condition, or because the original collection wasn't viable — StemCyte provides a matching donor unit from our public bank.</p>
            <ul className={s.compareChecks}>
              <li><CheckIcon />Covers your child</li>
              <li><CheckIcon />Matching unit from StemCyte's public bank</li>
              <li><CheckIcon />Global public bank search assistance</li>
              <li><CheckIcon />Add-on to any private banking plan</li>
            </ul>
            <Link href="/pricing" className={s.btnGhost}>Add PBA to your plan</Link>
          </div>
          <div className={`${s.compareCard} ${s.plus} ${s.anim}`} style={{ transitionDelay: '0.15s' }}>
            <div className={s.compareBadge}>COVERS PARENTS TOO</div>
            <div className={s.compareSublabel}>FOR YOUR CHILD + PARENTS</div>
            <h3>Public Bank Access+</h3>
            <div className={s.comparePrice}>$699</div>
            <div className={s.comparePriceNote}>one-time add-on</div>
            <p className={s.compareDesc}>Everything in PBA, plus parents gain access to StemCyte's public bank inventory for diseases treatable with cord blood stem cells — even if they didn't bank their own cord blood at birth.</p>
            <ul className={s.compareChecks}>
              <li><CheckIcon />Everything in PBA</li>
              <li><CheckIcon />Extends coverage to both parents</li>
              <li><CheckIcon />Parents don't need their own banked cord blood</li>
              <li><CheckIcon />Cord blood treatments for eligible conditions</li>
            </ul>
            <Link href="/pricing" className={s.btnPlum}>Add PBA+ to your plan</Link>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className={s.sectionLavDeep}>
        <div className={s.section}>
          <h2 className={`${s.sectionTitle} ${s.anim}`}>What families are saying</h2>
          <div className={s.testGrid}>
            <div className={`${s.testCard} ${s.anim}`}>
              <p>“Our family is biracial so finding a match could be difficult in the future. Signing up with StemCyte to get Public Bank Access was a no brainer.”</p>
              <div className={s.name}>Jennifer B.</div>
              <div className={s.detail}>Banked in 2022</div>
            </div>
            <div className={`${s.testCard} ${s.anim}`} style={{ transitionDelay: '0.15s' }}>
              <p>“As a cancer survivor, I know how important it is to have Public Bank Access. This gives me peace of mind!”</p>
              <div className={s.name}>Nikki</div>
              <div className={s.detail}>Banked in 2021</div>
            </div>
            <div className={`${s.testCard} ${s.anim}`} style={{ transitionDelay: '0.3s' }}>
              <p>“Getting another stem cell unit that could save your life is the best gift, not a teddy bear.”</p>
              <div className={s.name}>Sam M.</div>
              <div className={s.detail}>Banked in 2022</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className={s.section}>
        <h2 className={`${s.sectionTitle} ${s.anim}`}>Frequently asked questions</h2>
        <div className={s.faqWrap}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`${s.faqSmooth}${isOpen ? ' ' + s.open : ''}`} key={i} onClick={() => toggleFaq(i)}>
                <div className={s.faqQ}>{item.q}<div className={s.icon}></div></div>
                <div
                  className={s.faqA}
                  ref={el => { if (el) answerRefs.current[i] = el; }}
                  style={{ maxHeight: isOpen ? (answerRefs.current[i]?.scrollHeight || 0) + 'px' : '0' }}
                >
                  <div className={s.faqAInner}>{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA BANNER */}
      <section className={s.ctaBanner}>
        <div className={s.circle}></div>
        <h2>Only StemCyte offers <em>both</em> private and public bank access</h2>
        <p className={s.ctaSub}>Add PBA to your plan starting at $299 — or get it free with Cord Blood & Tissue.</p>
        <div className={s.ctaBtns}>
          <Link href="/pricing" className={s.ctaBtnW}>Build your plan</Link>
          <a href="tel:8663894659" className={s.ctaBtnG}>Call (866) 389-4659</a>
        </div>
      </section>
    </>
  );
}
