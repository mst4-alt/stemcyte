'use client';

import { useEffect, useRef } from 'react';
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
          <img className={s.heroPortrait} src="/images/our%20story/press_release_distribution_0452818_127664.jpg" alt="Lawrence D. Petz, MD" />
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
          <div className={s.awardsTimeline}>
            <div className={s.awardsTrack}></div>
            {awards.map((a, i) => (
              <div className={`${s.awardItem} ${a.side === 'left' ? s.awardLeft : s.awardRight} ${s.anim}`} data-anim="" key={i}>
                <div className={s.awardDot}></div>
                {a.side === 'right' && <div className={s.awardSpacer}></div>}
                <div className={s.awardContent}>
                  {a.year && <div className={s.awardYear}>{a.year}</div>}
                  <div className={s.awardTitle}>{a.title}</div>
                  {a.org && <div className={s.awardOrg}>{a.org}</div>}
                  {a.desc && <div className={s.awardDesc}>{a.desc}</div>}
                </div>
                {a.side === 'left' && <div className={s.awardSpacer}></div>}
              </div>
            ))}
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
          <div className={s.symposiumCard + ' ' + s.anim} data-anim="">
            <div className={s.symposiumBadge}>
              <div className={s.symposiumBadgeYears}>2003&ndash;14</div>
              <div className={s.symposiumBadgePlace}>City of Hope</div>
            </div>
            <div>
              <h3>A global gathering of transplant leaders</h3>
              <p>Dr. Petz founded and organized the annual International Symposium on Cord Blood Transplantation, convening 31-member faculty from the U.S., France, Japan, Spain, Taiwan, and beyond&mdash;with attendees from over 20 countries sharing advances in cord blood science and clinical practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HIV REMISSION (full-width dark) ── */}
      <div className={s.hivSection}>
        <div className={s.hivRing + ' ' + s.hivRing1}></div>
        <div className={s.hivRing + ' ' + s.hivRing2}></div>
        <div className={s.hivRing + ' ' + s.hivRing3}></div>
        <div className={s.hivRing + ' ' + s.hivRing4}></div>
        <div className={s.hivRing + ' ' + s.hivRing5}></div>
        <div className={s.hivInner}>
          <div>
            <div className={s.hivBadge + ' ' + s.anim} data-anim="">
              <div className={s.hivBadgeDot}></div>
              Published in <em>Cell</em> &middot; 2023
            </div>
            <div className={s.hivLabel + ' ' + s.anim} data-anim="">HIV Remission</div>
            <h2 className={s.hivH2 + ' ' + s.anim} data-anim="">The First Potential <em>Cure for HIV</em></h2>
            <p className={s.hivSubheader + ' ' + s.anim} data-anim="">
              The New York Patient became the first woman&mdash;and the first person of mixed-race ancestry&mdash;to achieve HIV remission through a stem cell transplant. A StemCyte cord blood unit made it possible.
            </p>
            <p className={s.hivBody + ' ' + s.anim} data-anim="">
              Dr. Petz conceived the hypothesis that cord blood units carrying the CCR5&Delta;32 mutation could be used to achieve HIV remission. His work became the foundation of the NIH-funded IMPAACT P1107 clinical study. In 2017, the New York Patient received a haplo-cord transplant combining adult donor cells with a CCR5&Delta;32 cord blood unit from StemCyte&rsquo;s registry. By day 100, her immune system had been fully reconstituted. She achieved complete cancer remission and sustained HIV-1 remission.
            </p>
            <div className={s.hivCallout + ' ' + s.anim} data-anim="">
              <p>StemCyte screened over <strong>18,000+ cord blood units</strong> across its inventory and collaborating banks worldwide, identifying more than <strong>300+ homozygous CCR5&Delta;32 units</strong>&mdash;a purpose-built registry that exists nowhere else in the world.</p>
            </div>
            <Link href="/our-story/hiv-remission" className={s.hivCta + ' ' + s.anim} data-anim="">
              Read the full story &rarr;
            </Link>
          </div>
          <div className={s.hivStats}>
            <div className={s.hivStatCard + ' ' + s.anim} data-anim="">
              <div className={s.hivStatNum}>7+</div>
              <div className={s.hivStatLabel}>Years in sustained HIV remission</div>
            </div>
            <div className={s.hivStatCard + ' ' + s.anim} data-anim="">
              <div className={s.hivStatNum}>100%</div>
              <div className={s.hivStatLabel}>Immune reconstitution from cord blood</div>
            </div>
            <div className={s.hivStatCard + ' ' + s.anim} data-anim="">
              <div className={s.hivStatNum}>18,000+</div>
              <div className={s.hivStatLabel}>Cord blood units screened for CCR5&Delta;32</div>
            </div>
            <div className={s.hivStatCard + ' ' + s.anim} data-anim="">
              <div className={s.hivStatNum}>300+</div>
              <div className={s.hivStatLabel}>Homozygous CCR5&Delta;32 units identified</div>
            </div>
          </div>
        </div>
      </div>

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
                <img className={s.otherAvatar} src={leader.img} alt={leader.name} />
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
