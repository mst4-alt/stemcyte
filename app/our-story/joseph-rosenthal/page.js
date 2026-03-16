'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import s from './page.module.css';

const timeline = [
  { year: 'Education', title: 'Hebrew University, Tel Aviv University & Harvard', desc: 'Earned his bachelor\u2019s degree from Hebrew University in Jerusalem, medical degree from the Sackler School of Medicine at Tel Aviv University, a master\u2019s degree in Health Care Management from Harvard School of Public Health, and a JD from Purdue University.', highlight: false },
  { year: 'Israel', title: 'Pediatric Oncology Faculty', desc: 'Began his medical career in Israel, serving on the Pediatric Hematology/Oncology faculties at Soroka Medical Center in Beer Sheba, Sambur Center at Beilinson Hospital in Petach Tikva, and Rambam Medical Center in Haifa.', highlight: false },
  { year: 'Colorado & CHOC', title: 'Fellowship Training', desc: 'Completed fellowship in Pediatric Hematology/Oncology at the University of Colorado School of Medicine in Denver, followed by Pediatric Cancer Research and Bone Marrow Transplantation at Children\u2019s Hospital of Orange County.', highlight: false },
  { year: '1996', title: 'Joins City of Hope', desc: 'Joined City of Hope as Assistant Professor and Director of the Pediatric Hematopoietic Cell Transplantation Program, beginning what would become over 25 years of transformative leadership at one of America\u2019s premier cancer centers.', highlight: true },
  { year: '2002', title: 'Interim Chair, Department of Pediatrics', desc: 'Promoted to Associate Professor and took on the Interim Chair role for the Department of Pediatrics, guiding the department through a critical growth phase.', highlight: false },
  { year: '2011', title: 'Chair of Pediatrics & Director, Pediatric Hematology/Oncology', desc: 'Named Chair of the Department of Pediatrics and Director of Pediatric Hematology/Oncology. Appointed the Barron Hilton Professor and Chair in Pediatrics\u2014an endowed chair reflecting the highest institutional recognition.', highlight: true },
  { year: '2018', title: '$5.7M CIRM Grant for Sickle Cell Research', desc: 'Awarded a $5.74 million grant from the California Institute for Regenerative Medicine (CIRM) to advance a novel stem cell transplant approach for sickle cell disease using mixed chimerism and CD4+ T-cell depleted donor cells.', highlight: true },
  { year: '2018', title: 'Certified for CAR T-Cell Therapy', desc: 'Led City of Hope\u2019s certification to provide the first FDA-approved CAR T-cell therapy (tisagenlecleucel) for pediatric and young adult patients with relapsed or refractory B-cell ALL.', highlight: true },
  { year: 'Today', title: 'Chief Medical Officer, StemCyte', desc: 'Serves as CMO of StemCyte, bringing decades of clinical transplantation expertise to guide the company\u2019s cord blood product quality, clinical trial design, and medical strategy. Professor Emeritus at City of Hope.', highlight: true },
];

const highlights = [
  { icon: '\uD83C\uDFE5', label: '25+ Years at City of Hope', desc: 'Led the Pediatric Hematology/Oncology program and served as Barron Hilton Chair in Pediatrics at one of America\u2019s top NCI-designated cancer centers', bg: 'highlightIconPlum' },
  { icon: '\uD83D\uDCDD', label: '100+ Publications', desc: 'Authored over 100 scientific publications across hematology, oncology, stem cell transplantation, and regenerative medicine', bg: 'highlightIconSage' },
  { icon: '\uD83D\uDCB5', label: '$5.7M CIRM Grant', desc: 'Awarded California\u2019s largest stem cell research grant for a novel curative approach to sickle cell disease', bg: 'highlightIconGold' },
];

const tags = ['Bone Marrow Transplantation', 'Cord Blood Transplants', 'Pediatric Oncology', 'Sickle Cell Disease', 'CAR T-Cell Therapy', 'Graft-vs-Host Disease', 'Alternative Donor Transplants', 'Gene Therapy', 'Clinical Trials'];

const pubs = [
  { text: 'Real-world evidence of tisagenlecleucel for pediatric ALL and non-Hodgkin lymphoma \u2014 Blood Advances, 2020' },
  { text: 'Preclinical total marrow irradiation conditioning-based bone marrow transplant model for sickle cell disease \u2014 Frontiers in Oncology, 2022' },
  { text: 'Targeted total marrow irradiation as alternative to total body irradiation for hematopoietic cell transplantation \u2014 Biology of Blood and Marrow Transplantation' },
  { text: 'Hematopoietic stem cell transplantation for sickle cell disease using mixed chimerism and CD4+ T-cell depleted grafts \u2014 CIRM-funded research program' },
  { text: 'Multiple publications on infection control, nutrition, and supportive care in pediatric stem cell transplantation' },
];

export default function JosephRosenthalPage() {
  const canvasRef = useRef(null);
  const animRefs = useRef([]);
  const tlItemRefs = useRef([]);

  // ── Gentle rising cell particles canvas ──
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let animId;
    let cells = [];
    const COUNT = 50;

    function resize() {
      c.width = c.offsetWidth * window.devicePixelRatio;
      c.height = c.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function init() {
      resize();
      const W = c.offsetWidth, H = c.offsetHeight;
      cells = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 4 + 2,
        vy: -(Math.random() * 0.3 + 0.1),
        vx: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.12 + 0.04,
        hue: Math.random() > 0.5 ? '232,160,208' : '192,106,165',
      }));
    }

    function draw() {
      const W = c.offsetWidth, H = c.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      for (const cell of cells) {
        cell.x += cell.vx;
        cell.y += cell.vy;
        if (cell.y < -10) { cell.y = H + 10; cell.x = Math.random() * W; }
        if (cell.x < 0 || cell.x > W) cell.vx *= -1;

        // Outer glow
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cell.hue},${cell.opacity * 0.3})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cell.hue},${cell.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener('resize', () => { resize(); });
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  // ── Scroll animations ──
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(s.animVisible); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    animRefs.current.forEach(el => el && obs.observe(el));
    tlItemRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addAnim = (el) => { if (el && !animRefs.current.includes(el)) animRefs.current.push(el); };
  const addTl = (el) => { if (el && !tlItemRefs.current.includes(el)) tlItemRefs.current.push(el); };

  return (
    <>
      <Nav transparentHero={true} />

      {/* ── HERO ── */}
      <section className={s.hero} id="hero">
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
        <div className={s.orb + ' ' + s.orbA}></div>
        <div className={s.orb + ' ' + s.orbB}></div>
        <div className={s.heroInner}>
          <img className={s.heroPortrait} src="/images/our%20story/rosenthal.jpg" alt="Joseph Rosenthal, MD" />
          <div className={s.heroText}>
            <Link href="/our-story" className={s.backLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Our Story
            </Link>
            <h1 className={s.heroName}>Joseph Rosenthal, MD</h1>
            <div className={s.heroRole}>Chief Medical Officer, StemCyte Inc.</div>
            <p className={s.heroSub}>Over 25 years at City of Hope leading pediatric bone marrow transplantation. Author of 100+ publications. A career dedicated to giving children with cancer a second chance.</p>
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>Background</div>
          <h2 className={s.secH2} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s' }}>A career spent fighting for the youngest patients</h2>
          <p className={s.bodyP} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            Dr. Joseph Rosenthal is one of the most experienced pediatric stem cell transplantation specialists in the United States. He earned his medical degree from the Sackler School of Medicine at Tel Aviv University, completed fellowship training at the University of Colorado and Children&rsquo;s Hospital of Orange County, and later obtained a Master&rsquo;s in Health Care Management from Harvard School of Public Health and a JD from Purdue University.
          </p>
          <p className={s.bodyP} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            Beginning his career in Israel at Soroka Medical Center and Rambam Medical Center, Dr. Rosenthal joined City of Hope in 1996 and spent over 25 years transforming its pediatric hematology-oncology and bone marrow transplant programs. He rose to Chair of the Department of Pediatrics, Director of Pediatric Hematology/Oncology, and the Barron Hilton Professor and Chair in Pediatrics&mdash;one of the institution&rsquo;s most distinguished endowed positions.
          </p>
          <p className={s.bodyP} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            At City of Hope, he built a nationally recognized team specializing in transplantation for hematological malignancies, solid tumors, genetic inborn errors of metabolism, and non-malignant marrow failure syndromes. He became an authority on cord blood transplants, haplo-identical donor transplants, and supportive care for transplant patients, and led City of Hope&rsquo;s certification to provide CAR T-cell therapy for pediatric patients.
          </p>
          <p className={s.bodyP} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            In 2018, Dr. Rosenthal secured a $5.74 million grant from CIRM to advance a novel curative approach for sickle cell disease using mixed chimerism and T-cell depleted donor grafts. He has authored over 100 scientific publications and serves as a reviewer for <em>Blood and Bone Marrow Transplantation</em> and on the editorial board of the <em>Journal of Transplantation Technologies &amp; Research</em>.
          </p>

          <div className={s.insightCard} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            <div className={s.quoteText}>&ldquo;City of Hope believes this treatment will improve the quality of life for patients while also reducing the risk for graft-versus-host disease and transplant-related complications. Our hope is that this treatment can eventually be offered to sickle cell disease patients as a curative therapy.&rdquo;</div>
            <div className={s.quoteAttr}>Joseph Rosenthal, MD &mdash; on CIRM-funded sickle cell research</div>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── HIGHLIGHT CARDS ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Distinctions</div>
          <h2 className={s.secH2}>Career milestones</h2>
          <div className={s.highlightGrid}>
            {highlights.map((h, i) => (
              <div className={s.highlightCard + ' ' + s.anim} key={i} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s` }}>
                <div className={s.highlightIcon + ' ' + s[h.bg]}>{h.icon}</div>
                <h4>{h.label}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── FOCUS AREAS ── */}
      <section className={s.section + ' ' + s.sectionLav}>
        <div className={s.inner}>
          <div className={s.secLabel}>Expertise</div>
          <h2 className={s.secH2}>Clinical specialties</h2>
          <div className={s.tagGrid}>
            {tags.map((t, i) => (
              <span className={s.tag} key={i}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Career</div>
          <h2 className={s.secH2}>Professional journey</h2>
          <div className={s.timeline}>
            <div className={s.tlTrack}></div>
            {timeline.map((item, i) => (
              <div className={s.tlItem + ' ' + s.anim} key={i} ref={addTl} style={{ opacity: 0, transform: 'translateY(16px)', transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s` }}>
                <div className={s.tlDot + (item.highlight ? ' ' + s.tlDotHighlight : ' ' + s.tlDotActive)}></div>
                <div className={s.tlYear}>{item.year}</div>
                <div className={s.tlTitle}>{item.title}</div>
                <div className={s.tlDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── SELECTED PUBLICATIONS ── */}
      <section className={s.section + ' ' + s.sectionPlum}>
        <div className={s.inner}>
          <div className={s.secLabel}>Research</div>
          <h2 className={s.secH2}>Selected publications &amp; research</h2>
          <div className={s.pubList}>
            {pubs.map((p, i) => (
              <div className={s.pubItem} key={i} ref={addAnim} style={{ opacity: 0, transform: 'translateY(16px)', transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s` }}>
                <div className={s.pubDot}></div>
                <div className={s.pubText}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Education</div>
          <h2 className={s.secH2}>Academic credentials</h2>
          <div className={s.statRow}>
            <div className={s.statCard} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>MD</div>
              <div className={s.statLabel}>Sackler School of Medicine, Tel Aviv University</div>
            </div>
            <div className={s.statCard} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s' }}>
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>MS</div>
              <div className={s.statLabel}>Health Care Management, Harvard School of Public Health</div>
            </div>
            <div className={s.statCard} ref={addAnim} style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s' }}>
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>JD</div>
              <div className={s.statLabel}>Purdue University</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER LEADERS ── */}
      <section className={s.section + ' ' + s.sectionLav}>
        <div className={s.inner}>
          <div className={s.secLabel}>Leadership</div>
          <h2 className={s.secH2}>Meet our team</h2>
          <div className={s.otherLeaders}>
            <Link href="/our-story/jonas-wang" className={s.otherCard}>
              <img className={s.otherAvatar} src="/images/our%20story/jonas.jpg" alt="Jonas Wang, PhD" />
              <div className={s.otherInfo}>
                <h4>Jonas Wang, PhD</h4>
                <span>Chairman</span>
              </div>
              <svg className={s.otherArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
            <Link href="/our-story/tong-young-lee" className={s.otherCard}>
              <img className={s.otherAvatar} src="/images/our%20story/lee.jpg" alt="Tong-Young Lee, PhD" />
              <div className={s.otherInfo}>
                <h4>Tong-Young Lee, PhD</h4>
                <span>CEO</span>
              </div>
              <svg className={s.otherArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={s.ctaBanner}>
        <h2>Learn how StemCyte protects families</h2>
        <p>Explore our cord blood and cord tissue banking plans.</p>
        <Link href="/pricing" className={s.ctaBtn}>See pricing</Link>
      </section>
    </>
  );
}
