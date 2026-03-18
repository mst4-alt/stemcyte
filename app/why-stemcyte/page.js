'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

export default function Page() {
  const statsRef = useRef(null);
  const numRefs = useRef([]);
  const pipeRef = useRef(null);
  const barRefs = useRef([]);

  useEffect(() => {
    /* Scroll animations */
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { entry.target.classList.add(s.vis); }, 150);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(`.${s.anim}`).forEach((el) => obs.observe(el));

    /* Pipeline bars */
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          barRefs.current.forEach((bar) => {
            if (bar) bar.style.width = bar.dataset.width + '%';
          });
          barObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    if (pipeRef.current) barObs.observe(pipeRef.current);

    /* Number counters */
    const statData = [
      { target: 2300, suffix: '+', ticks: 10, interval: 80, startPause: 100 },
      { text: '1 in 26', ticks: 6, interval: 120, startPause: 300 },
      { target: 350, suffix: '+', ticks: 4, interval: 160, startPause: 600 },
      { target: 1997, from: 1990, suffix: '', noformat: true, ticks: 8, interval: 130, startPause: 700 },
    ];

    numRefs.current.forEach((el, idx) => {
      if (!el) return;
      const d = statData[idx];
      if (d.text) { el.textContent = d.text; return; }
      const t = d.target;
      const sfx = d.suffix;
      const from = d.from || Math.max(0, t - 10);
      const nf = d.noformat;
      el.textContent = (nf ? t : t.toLocaleString()) + sfx;

      const cobs = new IntersectionObserver((ent) => {
        if (ent[0].isIntersecting) {
          let current = from;
          el.textContent = (nf ? current : current.toLocaleString()) + sfx;
          function tick() {
            if (current < t) { current++; el.textContent = (nf ? current : current.toLocaleString()) + sfx; setTimeout(tick, d.interval); }
          }
          setTimeout(tick, d.startPause);
          cobs.unobserve(el);
        }
      }, { threshold: 0.5 });
      cobs.observe(el);
    });

    return () => { obs.disconnect(); barObs.disconnect(); };
  }, []);

  const arrowSvg = (color = '#6C1A55') => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );

  const learnArrow = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );

  return (
    <>
      {/* HERO */}
      <section className={s.hero} id="hero">
        <Image src="/images/tanks_2.jpg" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="" />
        <div className={s.bgBlur} />
        <div className="vig" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse at center,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.72) 100%)' }} />
        <div className="ct" style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '180px 48px 72px', width: '100%' }}>
          <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#E8A0D0', marginBottom: 12 }}>Why StemCyte</div>
          <h1 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-1.5px', maxWidth: 780, marginBottom: 16, color: '#fff' }}>The most trusted cord blood bank by OBGYN and transplant physicians</h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 680, lineHeight: 1.7 }}>More transplants shipped than any other private bank. The only hybrid private-public bank. Triple-accredited. There are clear reasons why physicians trust StemCyte.</p>
        </div>
      </section>

      {/* STATS */}
      <div className={s.statsWrap} ref={statsRef}>
        <div className={s.stats}>
          {['Transplant units shipped worldwide', 'Of all cord blood transplants use StemCyte', 'Transplant hospitals in 35 countries', 'Founded — 29+ years of experience'].map((desc, i) => (
            <div key={i} className={`${s.stat} ${s.anim}`}>
              <div className="num" ref={(el) => { numRefs.current[i] = el; }} style={{ fontFamily: "var(--font-numbers),'Source Serif 4',serif", fontSize: 36, color: '#6C1A55', fontWeight: 400 }}>0</div>
              <div className="desc" style={{ fontSize: 12, color: '#8A857A', marginTop: 4 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* FDA BLA SPLIT */}
      <section className={s.section}>
        <div className={`${s.split} ${s.anim}`}>
          <div className="text" style={{}}>
            <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>FDA-Licensed Product</div>
            <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 32, fontWeight: 400, marginBottom: 16, lineHeight: 1.2 }}>Reviewed, tested, and licensed by the FDA</h2>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7, marginBottom: 12 }}>Our cord blood product, <strong>REGENECYTE®</strong>, earned an FDA biologics license — the same approval pathway used for vaccines and blood products.</p>
            <Link href="/fda-bla" className={s.learnLink}>Learn what that means {learnArrow}</Link>
          </div>
          <div>
            <div className={s.trackCard}>
              <div className={s.trackBar}>
                <div className={s.trackFill} />
                <div className={`${s.trackPin} gray`} style={{ left: '12%', background: '#D4D0CA' }}>
                  <div className={s.trackPinLabel} style={{ left: '50%', transform: 'translateX(-50%)', color: '#A09A90' }}>Most banks</div>
                </div>
                <div className={`${s.trackPin} plum`} style={{ right: '2%', background: '#6C1A55' }}>
                  <div className={s.trackPinLabel} style={{ right: 0, color: '#6C1A55' }}>REGENECYTE®</div>
                </div>
              </div>
              <div className={s.trackLegend}>
                <div className={s.trackLegendItem}>
                  <div className="title" style={{ fontSize: 13, fontWeight: 700, marginBottom: 3, color: '#A09A90' }}>Registered</div>
                  <p style={{ fontSize: 12, color: '#B0AB9E', lineHeight: 1.5, margin: 0 }}>Notified the FDA they exist</p>
                </div>
                <div className={s.trackLegendItem} style={{ textAlign: 'right' }}>
                  <div className="title" style={{ fontSize: 13, fontWeight: 700, marginBottom: 3, color: '#6C1A55' }}>Licensed</div>
                  <p style={{ fontSize: 12, color: '#B0AB9E', lineHeight: 1.5, margin: 0 }}>Product reviewed and approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* PBA FEATURED SPLIT */}
      <section className={s.section}>
        <div className={`${s.split} ${s.anim}`}>
          <div className="photo" style={{ borderRadius: 12, overflow: 'hidden', height: 360, position: 'relative' }}>
            <Image src="/images/pba_hero_2.jpeg" alt="Public Bank Access" fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="text">
            <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>Only at StemCyte</div>
            <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 32, fontWeight: 400, marginBottom: 16, lineHeight: 1.2 }}>The only private bank with public bank access</h2>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7, marginBottom: 12 }}>StemCyte operates both a private and public cord blood bank. When you add Public Bank Access, your family gets access to donor stem cells if your child ever needs more than their stored unit.</p>
            <Link href="/public-bank-access" className={s.learnLink}>Learn more about PBA {learnArrow}</Link>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* TRANSPLANT EXPERIENCE SPLIT (reversed) */}
      <section className={s.section}>
        <div className={`${s.split} ${s.anim}`} style={{ direction: 'rtl' }}>
          <div className="photo" style={{ borderRadius: 12, overflow: 'hidden', height: 360, position: 'relative', direction: 'ltr' }}>
            <Image src="/images/Hero_5.jpeg" alt="Transplant experience" fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="text" style={{ direction: 'ltr' }}>
            <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>Transplant experience</div>
            <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 32, fontWeight: 400, marginBottom: 16, lineHeight: 1.2 }}>More transplants shipped than any other private bank</h2>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7, marginBottom: 12 }}>StemCyte has shipped over 2,300 transplant units to 350+ hospitals in 35 countries — accounting for 1 in every 26 cord blood transplants worldwide.</p>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7, marginBottom: 12 }}>That experience means our processing, storage, and release protocols have been validated in real clinical outcomes, not just lab tests.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* PROTECTION & GUARANTEES */}
      <section className={s.section}>
        <div className={s.sh}>
          <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>Protection & guarantees</div>
          <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 36, fontWeight: 400, letterSpacing: '-0.5px', marginBottom: 10, lineHeight: 1.15 }}>Safety nets no other bank provides</h2>
        </div>
        <div className={s.featGrid}>
          <Link href="/lifesaver-guarantee" className={`${s.featCard} linked`}>
            <div className="ic" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: '#FBF5F9' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>LifeSaver Guarantee</h3>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7 }}>Full refund, $50,000, and a replacement donor unit if engraftment fails. Included free with every plan.</p>
            <div className={s.cardArrow}>{arrowSvg('#6C1A55')}</div>
          </Link>
          <Link href="/expanded-access-policy" className={`${s.featCard} linked`}>
            <div className="ic" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: '#FDF5EB' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4943E" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Expanded Access Policy</h3>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7 }}>Investigational cord blood therapies for patients with serious conditions who have no other treatment options.</p>
            <div className={s.cardArrow}>{arrowSvg('#C4943E')}</div>
          </Link>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* PROGRAMS & DISCOUNTS */}
      <section className={s.section}>
        <div className={s.sh}>
          <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>Programs & discounts</div>
          <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 36, fontWeight: 400, letterSpacing: '-0.5px', marginBottom: 10, lineHeight: 1.15 }}>Making stem cell banking accessible</h2>
        </div>
        <div className={`${s.featGrid} col3`} style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          <Link href="/special-programs" className={`${s.featCard} linked ${s.anim}`}>
            <div className="ic" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: '#FBF5F9' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Sibling Donor Program</h3>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7 }}>Free banking for families where a sibling needs a transplant.</p>
            <div className={s.cardArrow}>{arrowSvg('#6C1A55')}</div>
          </Link>
          <Link href="/special-programs" className={`${s.featCard} linked ${s.anim}`}>
            <div className="ic" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: '#EDF5FF' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Military & Public Servant</h3>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7 }}>Special pricing for active and retired military, police, fire, and EMT.</p>
            <div className={s.cardArrow}>{arrowSvg('#3B6DC4')}</div>
          </Link>
          <Link href="/special-programs" className={`${s.featCard} linked ${s.anim}`}>
            <div className="ic" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: '#F0F7F4' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D8B6A" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Medical Professional</h3>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7 }}>Special pricing for physicians, nurses, and allied health professionals.</p>
            <div className={s.cardArrow}>{arrowSvg('#3D8B6A')}</div>
          </Link>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* OPERATIONS */}
      <section className={s.section}>
        <div className={s.sh}>
          <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>How we operate</div>
          <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 36, fontWeight: 400, letterSpacing: '-0.5px', marginBottom: 10, lineHeight: 1.15 }}>Built for quality at every step</h2>
        </div>
        <div className={s.featGrid}>
          <div className={`${s.featCard} ${s.anim}`}>
            <div className="ic" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: '#F0F7F4' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D8B6A" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Proprietary processing</h3>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7 }}>StemCyte's processing protocols are developed in-house and optimized over 29 years of operation. Every unit is processed in our Baldwin Park, CA facility under cGMP conditions.</p>
          </div>
          <div className={`${s.featCard} ${s.anim}`}>
            <div className="ic" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: '#EDF5FF' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>24/7 medical courier</h3>
            <p style={{ fontSize: 15, color: '#8A857A', lineHeight: 1.7 }}>After collection, our courier picks up your baby's cord blood 24/7 — weekends and holidays included — and expedites it to our lab. Free on all plans.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* ACCREDITATIONS */}
      <section className={`${s.sectionFull} ${s.trustBg}`}>
        <div className="inner" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className={s.sh}>
            <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>Quality & credentials</div>
            <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 36, fontWeight: 400, letterSpacing: '-0.5px', marginBottom: 10, lineHeight: 1.15 }}>Why you can trust it</h2>
          </div>
          <div className={s.accredRow}>
            {[
              { name: 'FDA', desc: 'U.S. Food and Drug Administration Licensed' },
              { name: 'FACT', desc: 'Foundation for the Accreditation of Cellular Therapy' },
              { name: 'AABB', desc: 'American Association of Blood Banks' },
              { name: 'cGMP', desc: 'Current Good Manufacturing Practices' },
            ].map((badge, i) => (
              <div key={i} className={`${s.accredBadge} ${s.anim}`}>
                <div className="name" style={{ fontFamily: "var(--font-numbers),'Source Serif 4',serif", fontSize: 28, color: '#6C1A55', fontWeight: 400, marginBottom: 8 }}>{badge.name}</div>
                <div className="desc" style={{ fontSize: 12, color: '#8A857A', lineHeight: 1.5 }}>{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL RESEARCH */}
      <section className={s.sectionFull} style={{ background: '#F3F0F8' }}>
        <div className="inner" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className={s.sh}>
            <div className="lbl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6C1A55', marginBottom: 10 }}>Clinical research</div>
            <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 36, fontWeight: 400, letterSpacing: '-0.5px', marginBottom: 10, lineHeight: 1.15 }}>Cord blood is being used to treat <em style={{ fontStyle: 'italic', color: '#6C1A55' }}>real patients</em> today</h2>
            <p style={{ fontSize: 16, color: '#8A857A', maxWidth: 520, lineHeight: 1.7 }}>StemCyte sponsors 3 active clinical trials developing cord blood therapies for conditions beyond traditional transplantation.</p>
          </div>
          <div ref={pipeRef} style={{ marginTop: 40 }}>
            {/* Pipeline row 1 */}
            <div className={`${s.pipeRow} ${s.anim}`}>
              <div className={s.prTop}>
                <div className={s.prName}><strong>REGENECYTE®</strong> — Long COVID</div>
                <div className={s.prPhase}>Phase III / Expanded Access</div>
              </div>
              <div className={s.thinBarTrack}>
                <div className={`${s.thinBarFill} plum`} ref={(el) => { barRefs.current[0] = el; }} data-width="88" style={{ width: '0%', background: '#6C1A55' }} />
              </div>
              <div className={s.prDetail}>
                <div className="pd" style={{ fontSize: 11, color: '#8A857A' }}><strong style={{ color: '#6C1A55', fontWeight: 700 }}>FDA BLA approved 2024</strong></div>
                <div className="pd" style={{ fontSize: 11, color: '#8A857A' }}><strong style={{ color: '#6C1A55', fontWeight: 700 }}>RMAT designated</strong></div>
                <div className="pd" style={{ fontSize: 11, color: '#8A857A' }}><strong style={{ color: '#6C1A55', fontWeight: 700 }}>Expanded Access 2026</strong></div>
              </div>
            </div>

            {/* Pipeline row 2 */}
            <div className={`${s.pipeRow} ${s.anim}`}>
              <div className={s.prTop}>
                <div className={s.prName}>Acute Ischemic Stroke</div>
                <div className={s.prPhase}>Phase II</div>
              </div>
              <div className={s.thinBarTrack}>
                <div className={`${s.thinBarFill} ${s.warmA}`} ref={(el) => { barRefs.current[1] = el; }} data-width="55" style={{ width: '0%' }} />
              </div>
              <div className={s.prDetail}>
                <div className="pd" style={{ fontSize: 11, color: '#8A857A' }}>Phase I <strong style={{ color: '#2C2A26', fontWeight: 700 }}>published</strong> in Cell Transplantation</div>
                <div className="pd" style={{ fontSize: 11, color: '#8A857A' }}><strong style={{ color: '#2C2A26', fontWeight: 700 }}>Allogeneic</strong> cord blood</div>
              </div>
            </div>

            {/* Pipeline row 3 */}
            <div className={`${s.pipeRow} ${s.anim}`}>
              <div className={s.prTop}>
                <div className={s.prName}>Spinal Cord Injury</div>
                <div className={s.prPhase}>Phase II</div>
              </div>
              <div className={s.thinBarTrack}>
                <div className={`${s.thinBarFill} ${s.warmB}`} ref={(el) => { barRefs.current[2] = el; }} data-width="50" style={{ width: '0%' }} />
              </div>
              <div className={s.prDetail}>
                <div className="pd" style={{ fontSize: 11, color: '#8A857A' }}>First hybrid bank with <strong style={{ color: '#2C2A26', fontWeight: 700 }}>FDA Phase II</strong></div>
                <div className="pd" style={{ fontSize: 11, color: '#8A857A' }}><strong style={{ color: '#2C2A26', fontWeight: 700 }}>HLA-matched</strong> cord blood</div>
              </div>
            </div>
          </div>

          {/* REGENECYTE callout */}
          <div className={`${s.bCallout} ${s.anim}`}>
            <div>
              <h3 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 24, fontWeight: 400, lineHeight: 1.25, marginBottom: 10 }}>REGENECYTE® — from our lab to FDA approval</h3>
              <p style={{ fontSize: 15, color: '#6B665D', lineHeight: 1.7, maxWidth: 560 }}>StemCyte developed REGENECYTE®, an FDA-Licensed cord blood therapy now used to treat over 80 conditions. Your baby's cord blood is processed in the same Baldwin Park facility, held to the same standards required to produce a federally licensed biologic.</p>
              <div className={s.crLinkRow}>
                <Link href="/regenecyte" className={s.btnRegen}>Learn about REGENECYTE®</Link>
                <Link href="/the-science" style={{ fontSize: 14, fontWeight: 700, color: '#6C1A55', textDecoration: 'none' }}>See what cord blood treats →</Link>
              </div>
            </div>
            <div className={s.crStat}>
              <div className={s.crBig}>85%</div>
              <div className={s.crNote}>Long COVID fatigue<br/>resolution (Phase II)</div>
            </div>
          </div>

          {/* HIV block */}
          <div className={`${s.hivBlock} ${s.anim}`}>
            <div className={s.decoCircle} />
            <div className={s.hivBadge}>Published in Cell, 2023</div>
            <Link href="/our-story/hiv-remission" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 24, fontWeight: 400, color: '#fff', lineHeight: 1.25, marginBottom: 12 }}>StemCyte cord blood transplant may have cured HIV</h3>
            </Link>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 640 }}>A woman achieved HIV remission after receiving a cord blood stem cell transplant — the first woman and only the third person in history to potentially be cured. StemCyte provided the cord blood unit.</p>
            <p className={s.hivCoda}>What you bank today may enable breakthroughs that don't yet exist.</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/clinical-trials" style={{ fontSize: 15, fontWeight: 700, color: '#6C1A55', textDecoration: 'none' }}>View all clinical trials →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.ctaBanner} ${s.anim}`}>
        <h2 style={{ fontFamily: "var(--font-heading),'Playfair Display',serif", fontSize: 36, color: '#fff', marginBottom: 12, position: 'relative' }}>Your baby's stem cells can only be collected at <em style={{ fontStyle: 'italic', color: '#E8A0D0' }}>birth</em></h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 32, position: 'relative' }}>Don't let this once-in-a-lifetime opportunity pass.</p>
        <div className="btns" style={{ display: 'flex', gap: 12, justifyContent: 'center', position: 'relative' }}>
          <Link href="/pricing" className={s.btnW}>View pricing</Link>
          <a href="tel:8663894659" className={s.btnGd}>Call (866) 389-4659</a>
        </div>
      </section>
    </>
  );
}
