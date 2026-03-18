'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

const timeline = [
  { year: 'Education', title: 'National Taiwan University & Harvard Medical School', desc: `Earned a PhD in pathology from National Taiwan University—Taiwan's most prestigious university—then applied to 100 post-doctoral programs in the United States, ultimately joining Harvard Medical School.`, highlight: false },
  { year: '2004–2010', title: 'Research Fellow, Harvard Medical School', desc: `Worked in the legendary cancer angiogenesis research laboratory of Dr. Judah Folkman—known as the father of angiogenesis research—at Harvard Medical School and Children's Hospital Boston. Contributed to the research behind the first three FDA-approved angiogenesis inhibitors: Avastin, Lucentis, and Eylea, which collectively generate over $15 billion in annual sales.`, highlight: true },
  { year: 'Harvard', title: 'Inventor of Fc-endostatin', desc: 'Credited as the inventor of Fc-endostatin, a next-generation long-acting angiogenesis inhibitor designed to improve on the efficacy profile of first-generation angiogenesis-targeted therapies.', highlight: true },
  { year: '2010', title: 'Returns to Taiwan — Chintek / MicroBio Group', desc: `Returned to Taiwan to become Deputy Director at MicroBio, the largest biotech company in Taiwan and StemCyte's biggest shareholder. Joined the Chintek Group, where he contributed to the development of several antibody-based drugs.`, highlight: false },
  { year: 'Fountain Biopharma', title: 'Director — Antibody Drug Discovery', desc: 'Served as Director at Fountain Biopharma, where he generated the largest fully-human antibody library in the Asia-Pacific region and developed the first anti-IL6 monoclonal antibody in that market, securing NT$40 million in government funding.', highlight: false },
  { year: 'FB825', title: 'Contributed to historic $530M licensing deal', desc: 'Participated in the development of the monoclonal antibody drug FB825 at Chintek Group. FB825 was licensed to LEO Pharma (Denmark) in a worldwide exclusive deal valued at up to $530 million—one of the largest out-licensing deals in Taiwanese biotech history.', highlight: true },
  { year: '2016–2021', title: 'Founder & CEO, Celtec Inc.', desc: 'Founded Celtec Inc., a cellular immunotherapy startup developing next-generation universal linker platform technologies for cancer treatment. Also served as VP at Synovel Biosciences and VP at Diamond Biofund. Across 15 years, led product development and corporate governance across four biotech startups through spin-offs, IPOs, and M&A.', highlight: false },
  { year: '2021', title: 'CEO, StemCyte Inc.', desc: 'Appointed CEO of StemCyte, leveraging deep expertise in drug development, biotech operations, and the Asia-Pacific healthcare market. Began transforming StemCyte from a premier cord blood bank into a regenerative cell therapy company.', highlight: true },
  { year: 'Today', title: `Leading StemCyte's next chapter`, desc: `Driving StemCyte's clinical pipeline forward—including REGENECYTE® for Long COVID, acute stroke, cerebral palsy, and spinal cord injury. Secured FDA Expanded Access clearance for REGENECYTE® in Long COVID. Vision: to make StemCyte a leading biotech company in the Asia-Pacific region and globally.`, highlight: true },
];

const HighlightIcon = ({ type }) => {
  const icons = {
    dna: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="M17 6l-2.5 2.5"/><path d="M14 8l-1 1"/><path d="M7 18l2.5-2.5"/><path d="M3.5 14.5l.5-.5"/><path d="M20 9l.5-.5"/><path d="M6.5 12.5l1-1"/><path d="M16.5 10.5l1-1"/></svg>,
    deal: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4943E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    rocket: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  };
  return icons[type] || null;
};

const highlights = [
  { icon: 'dna', label: 'Avastin, Lucentis & Eylea', desc: 'Contributed to research behind the first three FDA-approved angiogenesis inhibitors at Harvard under Dr. Judah Folkman', bg: 'highlightIconPlum' },
  { icon: 'deal', label: '$530M Licensing Deal', desc: `Contributed to the development of FB825, licensed to LEO Pharma in one of Taiwan's largest biotech deals`, bg: 'highlightIconGold' },
  { icon: 'rocket', label: '4 Biotech Startups', desc: 'Led product development and governance through spin-offs, IPOs, listings, and acquisitions across 15 years', bg: 'highlightIconSage' },
];

const tags = ['Angiogenesis', 'Cancer Immunotherapy', 'Antibody Drug Development', 'Cellular Therapy', 'Drug Discovery', 'Cord Blood Banking', 'Regenerative Medicine', 'Clinical Trials', 'Biotech Leadership'];

export default function TongYoungLeePage() {
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
      {/* ── HERO ── */}
      <section className={s.hero} id="hero">
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
        <div className={s.orb + ' ' + s.orbA}></div>
        <div className={s.orb + ' ' + s.orbB}></div>
        <div className={s.heroInner}>
          <Image className={s.heroPortrait} src="/images/our%20story/lee.jpg" alt="Tong-Young Lee, PhD" width={200} height={200} priority sizes="(max-width: 768px) 140px, 200px" />
          <div className={s.heroText}>
            <Link href="/our-story" className={s.backLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Our Story
            </Link>
            <h1 className={s.heroName}>Tong-Young Lee, PhD</h1>
            <div className={s.heroRole}>CEO, StemCyte Inc.</div>
            <p className={s.heroSub}>Trained at Harvard under the father of angiogenesis research. Built biotech companies across three continents. Now leading StemCyte&rsquo;s transformation into a regenerative medicine company.</p>
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + " " + s.anim} data-anim="" >Background</div>
          <h2 className={s.secH2 + " " + s.anim} >From Harvard&rsquo;s angiogenesis lab to the future of cell therapy</h2>
          <p className={s.bodyP + " " + s.anim} data-anim="" >
            Dr. Tong-Young Lee earned his PhD in pathology from National Taiwan University, Taiwan&rsquo;s most prestigious academic institution. He applied to over 100 post-doctoral programs in the United States and was selected to join the legendary laboratory of Dr. Judah Folkman at Harvard Medical School&mdash;widely recognized as the father of angiogenesis research.
          </p>
          <p className={s.bodyP + " " + s.anim} data-anim="" >
            During his six years at Harvard (2004&ndash;2010), Dr. Lee contributed to the research and development of cancer treatments that would become the first three FDA-approved angiogenesis inhibitors: bevacizumab (Avastin), ranibizumab (Lucentis), and aflibercept (Eylea). Combined, these drugs generate over $15 billion in annual sales worldwide. He is also credited as the inventor of Fc-endostatin, a next-generation long-acting angiogenesis inhibitor.
          </p>
          <p className={s.bodyP + " " + s.anim} data-anim="" >
            In 2010, Dr. Lee returned to Taiwan and joined the Chintek Group, where he contributed to the development of several antibody-based drugs, including the monoclonal antibody FB825, which was subsequently licensed to LEO Pharma of Denmark in a deal valued at up to $530 million. Over the next decade, he founded and led multiple biotech startups across immunotherapy, antibody discovery, and cellular therapy, guiding companies through spin-offs, IPOs, and international partnerships.
          </p>
          <p className={s.bodyP + " " + s.anim} data-anim="" >
            Appointed CEO of StemCyte in 2021, Dr. Lee is now steering the company&rsquo;s evolution from a world-class cord blood bank into a regenerative medicine company with an active clinical pipeline targeting Long COVID, stroke, cerebral palsy, and spinal cord injury.
          </p>

          <div className={s.insightCard + " " + s.anim} data-anim="" >
            <div className={s.quoteText}>&ldquo;The vision is for StemCyte to be a leading biotech company in the Asia-Pacific region and eventually globally. We are not just a bank. We are a regenerative medicine company.&rdquo;</div>
            <div className={s.quoteAttr}>Tong-Young Lee, PhD &mdash; CEO, StemCyte</div>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── HIGHLIGHT CARDS ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Impact</div>
          <h2 className={s.secH2}>Defining achievements</h2>
          <div className={s.highlightGrid}>
            {highlights.map((h, i) => (
              <div className={s.highlightCard + ' ' + s.anim} data-anim="" key={i} >
                <div className={s.highlightIcon + ' ' + s[h.bg]}><HighlightIcon type={h.icon} /></div>
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
          <h2 className={s.secH2}>Areas of focus</h2>
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
              <div className={s.tlItem + ' ' + s.anim} data-anim="" key={i} >
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

      {/* ── EDUCATION ── */}
      <section className={s.section + ' ' + s.sectionPlum}>
        <div className={s.inner}>
          <div className={s.secLabel}>Education</div>
          <h2 className={s.secH2}>Academic credentials</h2>
          <div className={s.statRow}>
            <div className={s.statCard + " " + s.anim} data-anim="" >
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>PhD</div>
              <div className={s.statLabel}>Pathology, National Taiwan University</div>
            </div>
            <div className={s.statCard + " " + s.anim} data-anim="" >
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>Post-Doc</div>
              <div className={s.statLabel}>Harvard Medical School, Folkman Lab</div>
            </div>
            <div className={s.statCard + " " + s.anim} data-anim="" >
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>15+ yrs</div>
              <div className={s.statLabel}>Biotech startup leadership across Asia-Pacific</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER LEADERS ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Leadership</div>
          <h2 className={s.secH2}>Meet our team</h2>
          <div className={s.otherLeaders}>
            <Link href="/our-story/jonas-wang" className={s.otherCard}>
              <Image className={s.otherAvatar} src="/images/our%20story/jonas-sm.jpg" alt="Jonas Wang, PhD" width={64} height={64} sizes="64px" />
              <div className={s.otherInfo}>
                <h4>Jonas Wang, PhD</h4>
                <span>Chairman</span>
              </div>
              <svg className={s.otherArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
            <Link href="/our-story/joseph-rosenthal" className={s.otherCard}>
              <Image className={s.otherAvatar} src="/images/our%20story/rosenthal-sm.jpg" alt="Joseph Rosenthal, MD" width={64} height={64} sizes="64px" />
              <div className={s.otherInfo}>
                <h4>Joseph Rosenthal, MD</h4>
                <span>Chief Medical Officer</span>
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
