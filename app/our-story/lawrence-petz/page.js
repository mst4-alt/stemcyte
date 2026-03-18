'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import s from './page.module.css';

const awards = [
  { side: 'left', year: '1991', title: 'Emily Cooley Memorial Award', org: 'AABB', desc: 'Outstanding scientific and teaching contributions' },
  { side: 'right', year: '1994', title: 'Tibor Greenwalt Scientific Award', org: 'AABB', desc: 'With George Garratty' },
  { side: 'left', year: null, title: 'Morten Grove-Rasmussen Award', org: 'AABB', desc: null },
  { side: 'right', year: null, title: 'NHLBI Transfusion Medicine Academic Award', org: 'National Heart, Lung, and Blood Institute', desc: null },
  { side: 'left', year: '2006', title: 'Landsteiner Award Lectureship', org: 'AABB', desc: 'Research of international significance' },
  { side: 'right', year: '2010', title: 'Lifetime Achievement Medal', org: 'AABB Bernard Fantus Medal', desc: 'Highest honor in the field' },
  { side: 'left', year: null, title: "President\u2019s Award", org: 'AABB', desc: 'Exceptional service and leadership' },
  { side: 'right', year: '2014', title: 'Cord Blood Symposium Leadership Award', org: null, desc: 'For founding & leading the symposium (2003\u20132014)' },
  { side: 'left', year: null, title: 'Owen Thomas & Service Awards', org: 'California Blood Bank Society', desc: null },
];

const careerTimeline = [
  { year: '1955', title: 'University of Illinois College of Medicine', desc: 'Earned his MD, followed by residency at Cook County Hospital and San Francisco General Hospital.', highlight: false },
  { year: 'London', title: 'Hematology Fellowship, Royal Postgraduate Medical School', desc: 'Board certified in Internal Medicine with subspecialty in Hematology.', highlight: false },
  { year: 'Military', title: 'Chief of Medicine, Walker Air Force Base', desc: 'Served as Chief of Medicine during military service.', highlight: false },
  { year: 'City of Hope', title: 'Section Head, Hematology & Blood Transfusion', desc: 'Chairman of the Division of Medicine at the NCI-designated comprehensive cancer center.', highlight: true },
  { year: 'UCLA', title: 'Professor of Pathology & Director of Transfusion Medicine', desc: 'Built UCLA\u2019s transfusion medicine program. President of the California Blood Bank Society.', highlight: true },
  { year: '1983', title: 'Clinical Bone Marrow Transplantation published', desc: 'First textbook on clinical bone marrow transplantation, co-edited with Karl Blume.', highlight: true },
  { year: '2001', title: 'Joins StemCyte as Chief Medical Officer', desc: 'Built StemCyte\u2019s quality framework: 400+ SOPs, AABB/FACT/FDA accreditation.', highlight: true },
  { year: 'Today', title: 'Emeritus Professor & Medical Director', desc: 'Emeritus Professor at UCLA. Medical Director of StemCyte International Cord Blood Bank.', highlight: true },
];

const tags = ['Transfusion Medicine', 'Hematology', 'Bone Marrow Transplantation', 'Cord Blood Banking', 'Cord Blood Transplantation', 'Immune Hemolytic Anemias', 'Immunohematology', 'Quality Systems & SOPs'];

const otherLeaders = [
  { name: 'Jonas Wang, PhD', role: 'Chairman', href: '/our-story/jonas-wang', img: '/images/our%20story/jonas-sm.jpg' },
  { name: 'Tong-Young Lee, PhD', role: 'CEO', href: '/our-story/tong-young-lee', img: '/images/our%20story/lee-sm.jpg' },
  { name: 'Joseph Rosenthal, MD', role: 'Chief Medical Officer', href: '/our-story/joseph-rosenthal', img: '/images/our%20story/rosenthal-sm.jpg' },
];

export default function LawrencePetzPage() {
  const canvasRef = useRef(null);

  // ── Floating cell particles canvas ──
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
      cells = Array.from({ length: COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.3 + 0.1;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 4 + 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          opacity: Math.random() * 0.12 + 0.04,
          hue: Math.random() > 0.5 ? '232,160,208' : '192,106,165',
        };
      });
    }
    function draw() {
      const W = c.offsetWidth, H = c.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      for (const cell of cells) {
        cell.x += cell.vx;
        cell.y += cell.vy;
        if (cell.x < -10 || cell.x > W + 10) cell.vx *= -1;
        if (cell.y < -10 || cell.y > H + 10) cell.vy *= -1;
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cell.hue},${cell.opacity * 0.3})`;
        ctx.fill();
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
    const els = document.querySelectorAll("[data-anim]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(s.animVisible); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav transparentHero={true} />

      {/* ── 1. HERO ── */}
      <section className={s.hero} id="hero">
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
        <div className={s.orb + ' ' + s.orbA}></div>
        <div className={s.orb + ' ' + s.orbB}></div>
        <div className={s.heroInner}>
          <Image className={s.heroPortrait} src="/images/our%20story/press_release_distribution_0452818_127664.jpg" alt="Lawrence D. Petz, MD" width={200} height={200} priority sizes="(max-width: 768px) 140px, 200px" />
          <div className={s.heroText}>
            <Link href="/our-story" className={s.backLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Our Story
            </Link>
            <h1 className={s.heroName}>Lawrence D. Petz, MD</h1>
            <div className={s.heroRole}>Founding Medical Director, StemCyte</div>
            <p className={s.heroSub}>Over 60 years in medicine. Author of the first bone marrow transplant textbook. Founding architect of one of the world&rsquo;s most trusted cord blood banks.</p>
          </div>
        </div>
      </section>

      {/* ── 2. BACKGROUND ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Background</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">The physician who built a field</h2>
          <p className={s.bodyP + ' ' + s.anim} data-anim="">
            Dr. Lawrence Petz earned his MD from the University of Illinois College of Medicine in 1955 and completed his residency in Internal Medicine at Cook County Hospital, San Francisco General Hospital, and the SF VA Hospital. He then completed a fellowship in Hematology at the Royal Postgraduate Medical School in London, establishing the foundation for a career that would span transfusion medicine, transplantation science, and cord blood banking.
          </p>
          <p className={s.bodyP + ' ' + s.anim} data-anim="">
            Over the following decades, Dr. Petz held leadership positions at some of the most respected medical institutions in the country. He served as Chief of Medicine at Walker Air Force Base, Section Head of Hematology and Blood Transfusion Services and Chairman of the Division of Medicine at City of Hope Medical Center, and Professor of Pathology and Director of Transfusion Medicine at UCLA Medical Center.
          </p>
          <p className={s.bodyP + ' ' + s.anim} data-anim="">
            In 2001, Dr. Petz joined StemCyte as its founding Medical Director and Chief Medical Officer. Under his clinical leadership, StemCyte achieved AABB, FACT, and FDA accreditation and developed more than 400 proprietary standard operating procedures, establishing the quality framework that has supported over 2,300 transplants worldwide.
          </p>

          <div className={s.insightCard + ' ' + s.anim} data-anim="">
            <div className={s.quoteText}>&ldquo;Our consistently excellent one-year patient survival data continue to point to both the increasing level of transplant physician care as well as to the high degree of efficacy of our cord blood units.&rdquo;</div>
            <div className={s.quoteAttr}>Lawrence D. Petz, MD &mdash; Founding Medical Director, StemCyte</div>
          </div>
        </div>
      </section>

      {/* ── 3. DIVIDER ── */}
      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── 4. AWARDS ALTERNATING TIMELINE ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Awards</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">Honors and recognition</h2>
          <div className={s.awTl}>
            <div className={s.awTrack}></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}>1991</div><div className={s.awTitle}>Emily Cooley Memorial Award</div><div className={s.awOrg}>AABB &mdash; Outstanding scientific and teaching contributions</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}>1994</div><div className={s.awTitle}>Tibor Greenwalt Scientific Award</div><div className={s.awOrg}>AABB &mdash; With George Garratty</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}></div><div className={s.awTitle}>Morten Grove-Rasmussen Award</div><div className={s.awOrg}>AABB</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}></div><div className={s.awTitle}>NHLBI Transfusion Medicine Academic Award</div><div className={s.awOrg}>National Heart, Lung, and Blood Institute</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}>2006</div><div className={s.awTitle}>Landsteiner Award Lectureship</div><div className={s.awOrg}>AABB &mdash; Research of international significance</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}>2010</div><div className={s.awTitle}>Lifetime Achievement Medal</div><div className={s.awOrg}>AABB Bernard Fantus Medal &mdash; Highest honor in the field</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}></div><div className={s.awTitle}>President&rsquo;s Award</div><div className={s.awOrg}>AABB &mdash; Exceptional service and leadership</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}>2014</div><div className={s.awTitle}>Cord Blood Symposium Leadership Award</div><div className={s.awOrg}>For founding &amp; leading the symposium (2003&ndash;2014)</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}></div><div className={s.awTitle}>Owen Thomas &amp; Service Awards</div><div className={s.awOrg}>California Blood Bank Society</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
          </div>
        </div>
      </section>

      {/* ── 5. DIVIDER ── */}
      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── 6. SYMPOSIUM ── */}
      <section className={s.section + ' ' + s.sectionLav}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Convening the field</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">International Cord Blood Symposium</h2>
          <div className={s.syCard + ' ' + s.anim} data-anim="">
            <div className={s.syIcon}>
              <div className={s.syYears}>2003&ndash;2014</div>
              <div className={s.sySub}>Annual symposium at City of Hope</div>
            </div>
            <div>
              <h3>A global gathering of transplant leaders</h3>
              <p className={s.syBody}>Dr. Petz founded and organized the annual International Symposium on Cord Blood Transplantation. The symposium convened 31-member faculty from the United States, France, Japan, Spain, Taiwan, and beyond&mdash;with attendees from over 20 countries sharing advances in cord blood science and clinical practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HIV REMISSION (full-width dark) ── */}
      <section className={s.hivSection}>
        <div className={s.ringWrap}>
          <div className={s.ring}></div>
          <div className={s.ring}></div>
          <div className={s.ring}></div>
          <div className={s.ring}></div>
          <div className={s.ring}></div>
        </div>
        <div className={s.hivInner}>
          <div className={s.hivGrid}>
            <div>
              <div className={s.hivBadge + ' ' + s.anim} data-anim=""><span className={s.hivPDot}></span>Published in Cell &middot; 2023</div>
              <div className={s.hivLabel + ' ' + s.anim} data-anim="">HIV Remission</div>
              <h2 className={s.hivH2 + ' ' + s.anim} data-anim="">The First Potential <em className={s.hivEm}>Cure for HIV</em></h2>
              <p className={s.hivPatient + ' ' + s.anim} data-anim="">The New York Patient became the first woman&mdash;and the first person of mixed-race ancestry&mdash;to achieve HIV remission through a stem cell transplant. A StemCyte cord blood unit made it possible.</p>
              <p className={s.hivDesc + ' ' + s.anim} data-anim="">Through the NIH-funded IMPAACT P1107 study, Dr. Petz helped pioneer a novel approach: combining a CCR5&#916;32 cord blood unit with adult stem cells from a relative. By day 100, the patient&rsquo;s immune system was fully reconstituted by cord blood cells. She has remained off antiretroviral therapy with no viral rebound since.</p>
              <p className={s.hivStemcyte + ' ' + s.anim} data-anim="">The cord blood unit came from StemCyte&rsquo;s registry&mdash;one of over 300 homozygous CCR5&#916;32 units Dr. Petz had identified by screening more than 18,000 donated units for the HIV-resistant mutation.</p>
              <Link href="/our-story/hiv-remission" className={s.hivCta + ' ' + s.anim} data-anim="">Read the full story <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            </div>
            <div className={s.hivRight}>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>7+ yrs</div><div className={s.hivStatLabel}>Post-transplant with no detectable HIV and cancer in remission</div></div>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>100%</div><div className={s.hivStatLabel}>Immune reconstitution by cord blood cells at day 100</div></div>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>18,000+</div><div className={s.hivStatLabel}>Cord blood units screened for the CCR5&#916;32 mutation</div></div>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>300+</div><div className={s.hivStatLabel}>Homozygous CCR5&#916;32 units identified in StemCyte&rsquo;s registry</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TEXTBOOKS ── */}
      <section className={s.section + ' ' + s.sectionPlum}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Textbooks</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">Landmark publications</h2>
          <div className={s.bookGrid}>
            <div className={s.bookCard + ' ' + s.anim} data-anim="">
              <div className={s.bookCover} style={{ background: 'linear-gradient(135deg, #3D0F31, #6C1A55)' }}>
                <div className={s.bookCoverTitle}>Clinical Bone Marrow Transplantation</div>
              </div>
              <div className={s.bookTitle}>Clinical Bone Marrow Transplantation</div>
              <div className={s.bookMeta}>With Karl Blume &middot; Churchill Livingstone &middot; 1983</div>
              <div className={s.bookEdition}>First textbook in the field</div>
            </div>
            <a href="https://www.amazon.com/Immune-Hemolytic-Anemias-Lawrence-Petz/dp/0443085595" target="_blank" rel="noopener noreferrer" className={s.bookCard + ' ' + s.bookCardLink + ' ' + s.anim} data-anim="">
              <div className={s.bookCover} style={{ background: 'linear-gradient(135deg, #8A3030, #C45050)' }}>
                <div className={s.bookCoverTitle}>Immune Hemolytic Anemias</div>
              </div>
              <div className={s.bookTitle}>Immune Hemolytic Anemias</div>
              <div className={s.bookMeta}>With George Garratty &middot; 2 editions &middot; 624 pages</div>
              <div className={s.bookEdition}>Now in its 3rd edition (Petz &amp; Garratty&rsquo;s)</div>
              <div className={s.bookLink}>View on Amazon &#8599;</div>
            </a>
            <a href="https://www.sciencedirect.com/book/9780443085598/immune-hemolytic-anemias" target="_blank" rel="noopener noreferrer" className={s.bookCard + ' ' + s.bookCardLink + ' ' + s.anim} data-anim="">
              <div className={s.bookCover} style={{ background: 'linear-gradient(135deg, #2A6B4F, #3D8B6A)' }}>
                <div className={s.bookCoverTitle}>Clinical Practice of Transfusion Medicine</div>
              </div>
              <div className={s.bookTitle}>Clinical Practice of Transfusion Medicine</div>
              <div className={s.bookMeta}>Co-editor &middot; Churchill Livingstone</div>
              <div className={s.bookEdition}>3 editions</div>
              <div className={s.bookLink}>View on ScienceDirect &#8599;</div>
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. CAREER TIMELINE ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Career</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">Professional journey</h2>
          <div className={s.timeline}>
            <div className={s.tlTrack}></div>
            {careerTimeline.map((item, i) => (
              <div className={s.tlItem + ' ' + s.anim} data-anim="" key={i}>
                <div className={s.tlDot + (item.highlight ? ' ' + s.tlDotHighlight : ' ' + s.tlDotActive)}></div>
                <div className={s.tlYear}>{item.year}</div>
                <div className={s.tlTitle}>{item.title}</div>
                <div className={s.tlDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. DIVIDER ── */}
      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── 11. EXPERTISE TAGS ── */}
      <section className={s.section + ' ' + s.sectionLav}>
        <div className={s.inner}>
          <div className={s.secLabel}>Expertise</div>
          <h2 className={s.secH2}>Areas of focus</h2>
          <div className={s.tagGrid}>
            {tags.map((t, i) => (
              <span className={s.tag} key={i}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. OTHER LEADERS ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Leadership</div>
          <h2 className={s.secH2}>Meet our team</h2>
          <div className={s.otherLeaders}>
            {otherLeaders.map((leader, i) => (
              <Link href={leader.href} className={s.otherCard} key={i}>
                <Image className={s.otherAvatar} src={leader.img} alt={leader.name} width={64} height={64} sizes="64px" />
                <div className={s.otherInfo}>
                  <h4>{leader.name}</h4>
                  <span>{leader.role}</span>
                </div>
                <svg className={s.otherArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. CTA BANNER ── */}
      <section className={s.ctaBanner}>
        <h2>Learn how StemCyte protects families</h2>
        <p>Explore our cord blood and cord tissue banking plans.</p>
        <Link href="/pricing" className={s.ctaBtn}>See pricing</Link>
      </section>
    </>
  );
}
