'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import s from './page.module.css';

const timeline = [
  { year: 'Education', title: 'National Defense Medical Center, Taiwan & University of Iowa', desc: 'Earned a pharmacy degree from the National Defense Medical Center in Taipei, then a PhD in Physical Pharmacy from the University of Iowa, laying the scientific foundation for a career spanning drug delivery, pharmaceutical innovation, and life science leadership.', highlight: false },
  { year: 'Bristol-Myers Squibb', title: 'Associate Director, Basic Pharmaceutics', desc: 'Joined the Pharmaceutical Research Institute at Bristol-Myers Squibb, where he advanced drug formulation and delivery technologies as part of the company\u2019s core R&D operation.', highlight: false },
  { year: 'Johnson & Johnson', title: 'VP of Research & Corporate Director, Drug Delivery', desc: 'Rose to Vice President of Research and Technology at J&J Consumer Products and Corporate Director of the Drug Delivery Technology Resource Center. Responsible for new product technology, patent strategy, competitive intelligence, and measurement methodology across J&J\u2019s skin and hair care franchise.', highlight: true },
  { year: 'Johnson Medal', title: 'Highest technical achievement award at J&J', desc: 'Received the Johnson Medal\u2014the most prestigious technical honor at Johnson & Johnson\u2014for inventing one of the company\u2019s breakthrough anti-wrinkle cream technologies. During his J&J tenure, developed more than 10 core technologies and filed over 30 patents.', highlight: true },
  { year: 'Sycamore Ventures', title: 'Partner, Life Sciences & Biotech Investments', desc: 'Joined Sycamore Management Corporation in Princeton, New Jersey, as a partner focused on life sciences and biotechnology investments. Served on J&J Consumer Product Worldwide\u2019s Licensing & Acquisition Committee and was a key driver of several major acquisitions.', highlight: false },
  { year: '2009', title: 'Joins StemCyte', desc: 'Joined StemCyte as COO, bringing decades of pharmaceutical R&D leadership and business development experience to a company that was expanding its global reach in cord blood banking and regenerative medicine.', highlight: true },
  { year: '2011', title: 'Chairman & CEO, StemCyte', desc: 'Became Chairman and CEO, setting the strategic vision for StemCyte\u2019s dual-track approach: strengthening core banking services while advancing clinical development of regenerative cell therapies.', highlight: true },
  { year: 'Today', title: 'Chairman, StemCyte International', desc: 'Leads StemCyte International (TPEX: 4178) as Chairman, overseeing operations across the United States and Taiwan. Under his leadership, StemCyte has shipped 2,300+ transplant units to 350+ hospitals in 35 countries and secured FDA BLA approval for REGENECYTE\u00AE.', highlight: true },
];

const HighlightIcon = ({ type }) => {
  const icons = {
    medal: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4943E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
    patent: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    globe: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  };
  return icons[type] || null;
};

const highlights = [
  { icon: 'medal', label: 'Johnson Medal', desc: 'Highest technical achievement award at Johnson & Johnson, for breakthrough anti-wrinkle technology', bg: 'highlightIconGold' },
  { icon: 'patent', label: '30+ Patents', desc: 'Filed over 30 business-related patents across drug delivery and pharmaceutical technologies', bg: 'highlightIconPlum' },
  { icon: 'globe', label: 'Global Impact', desc: '2,300+ cord blood units shipped under his leadership to 350+ transplant centers in 35 countries', bg: 'highlightIconSage' },
];

const tags = ['Pharmaceutical R&D', 'Drug Delivery', 'Patent Strategy', 'Life Science Investment', 'Cord Blood Banking', 'Regenerative Medicine', 'Business Development', 'GMP Manufacturing'];

export default function JonasWangPage() {
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

      {/* ── HERO ── */}
      <section className={s.hero} id="hero">
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
        <div className={s.orb + ' ' + s.orbA}></div>
        <div className={s.orb + ' ' + s.orbB}></div>
        <div className={s.heroInner}>
          <Image className={s.heroPortrait} src="/images/our%20story/jonas.jpg" alt="Jonas Wang, PhD" width={200} height={200} priority sizes="(max-width: 768px) 140px, 200px" />
          <div className={s.heroText}>
            <Link href="/our-story" className={s.backLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Our Story
            </Link>
            <h1 className={s.heroName}>Jonas Wang, PhD</h1>
            <div className={s.heroRole}>Chairman, StemCyte International</div>
            <p className={s.heroSub}>Over 40 years in pharmaceutical research, drug delivery innovation, and life science leadership. From the Johnson Medal at J&amp;J to building a global cord blood therapeutics company.</p>
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + " " + s.anim} data-anim="" >Background</div>
          <h2 className={s.secH2 + " " + s.anim} >From pharmaceutical R&amp;D to saving lives</h2>
          <p className={s.bodyP + " " + s.anim} data-anim="" >
            Dr. Jonas Wang began his career in pharmaceutical science, earning a PhD in Physical Pharmacy from the University of Iowa after completing his pharmacy degree at the National Defense Medical Center in Taiwan. His early career took him to Bristol-Myers Squibb, where he served as Associate Director of Basic Pharmaceutics, before joining Johnson &amp; Johnson.
          </p>
          <p className={s.bodyP + " " + s.anim} data-anim="" >
            At J&amp;J, Dr. Wang rose to Vice President of Research and Technology for Consumer Products and Corporate Director of the Drug Delivery Technology Resource Center. He was responsible for new product technology, patent strategy, and competitive intelligence across J&amp;J&rsquo;s skin and hair care franchise. During his tenure, he developed more than 10 core technologies and filed over 30 patents. His invention of a breakthrough anti-wrinkle cream technology earned him the Johnson Medal&mdash;the highest technical achievement award at Johnson &amp; Johnson.
          </p>
          <p className={s.bodyP + " " + s.anim} data-anim="" >
            After J&amp;J, Dr. Wang joined Sycamore Management Corporation as a partner specializing in life sciences and biotechnology investments. In 2009, he brought his deep scientific expertise and business acumen to StemCyte, where he has served as Chairman and CEO, guiding the company&rsquo;s transformation into a global leader in cord blood banking and regenerative cell therapy.
          </p>

          <div className={s.insightCard + " " + s.anim} data-anim="" >
            <div className={s.quoteText}>&ldquo;At J&amp;J, I strove to invent the best anti-wrinkle technologies, which contributed to making millions of women feel more beautiful and confident. But as the holder of a PhD in pharmacy, my personal goal has always been to save lives.&rdquo;</div>
            <div className={s.quoteAttr}>Jonas Wang, PhD &mdash; Chairman, StemCyte</div>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── HIGHLIGHT CARDS ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Recognition</div>
          <h2 className={s.secH2}>Career achievements</h2>
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
              <div className={s.statLabel}>Physical Pharmacy, University of Iowa</div>
            </div>
            <div className={s.statCard + " " + s.anim} data-anim="" >
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>PharmD</div>
              <div className={s.statLabel}>National Defense Medical Center, Taiwan</div>
            </div>
            <div className={s.statCard + " " + s.anim} data-anim="" >
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>Alumni</div>
              <div className={s.statLabel}>Distinguished Alumni, University of Iowa &amp; National Defense Medical Center</div>
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
            <Link href="/our-story/tong-young-lee" className={s.otherCard}>
              <Image className={s.otherAvatar} src="/images/our%20story/lee-sm.jpg" alt="Tong-Young Lee, PhD" width={64} height={64} sizes="64px" />
              <div className={s.otherInfo}>
                <h4>Tong-Young Lee, PhD</h4>
                <span>CEO</span>
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
