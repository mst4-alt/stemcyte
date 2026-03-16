'use client';

import { useEffect, useRef, useCallback } from 'react';
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

const highlights = [
  { icon: '\uD83C\uDFC6', label: 'Johnson Medal', desc: 'Highest technical achievement award at Johnson & Johnson, for breakthrough anti-wrinkle technology', bg: 'highlightIconGold' },
  { icon: '\uD83D\uDCDC', label: '30+ Patents', desc: 'Filed over 30 business-related patents across drug delivery and pharmaceutical technologies', bg: 'highlightIconPlum' },
  { icon: '\uD83C\uDF0D', label: 'Global Impact', desc: '2,300+ cord blood units shipped under his leadership to 350+ transplant centers in 35 countries', bg: 'highlightIconSage' },
];

const tags = ['Pharmaceutical R&D', 'Drug Delivery', 'Patent Strategy', 'Life Science Investment', 'Cord Blood Banking', 'Regenerative Medicine', 'Business Development', 'GMP Manufacturing'];

export default function JonasWangPage() {
  const canvasRef = useRef(null);
  const animRefs = useRef([]);
  const tlItemRefs = useRef([]);

  // ── Particle canvas: floating molecular dots ──
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let particles = [];
    let W, H, animId;
    const COUNT = 80;
    const CONN = 120;

    function resize() {
      W = c.width = c.offsetWidth * window.devicePixelRatio;
      H = c.height = c.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function init() {
      resize();
      const rW = c.offsetWidth, rH = c.offsetHeight;
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * rW,
        y: Math.random() * rH,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, c.offsetWidth, c.offsetHeight);
      const rW = c.offsetWidth, rH = c.offsetHeight;
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > rW) p.vx *= -1;
        if (p.y < 0 || p.y > rH) p.vy *= -1;
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(192,106,165,${0.08 * (1 - dist / CONN)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,160,208,${0.15 + p.r * 0.05})`;
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
          <img className={s.heroPortrait} src="/images/our%20story/jonas.jpg" alt="Jonas Wang, PhD" />
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
          <div className={s.secLabel + " " + s.anim} ref={addAnim}>Background</div>
          <h2 className={s.secH2 + " " + s.anim} ref={addAnim}>From pharmaceutical R&amp;D to saving lives</h2>
          <p className={s.bodyP + " " + s.anim} ref={addAnim}>
            Dr. Jonas Wang began his career in pharmaceutical science, earning a PhD in Physical Pharmacy from the University of Iowa after completing his pharmacy degree at the National Defense Medical Center in Taiwan. His early career took him to Bristol-Myers Squibb, where he served as Associate Director of Basic Pharmaceutics, before joining Johnson &amp; Johnson.
          </p>
          <p className={s.bodyP + " " + s.anim} ref={addAnim}>
            At J&amp;J, Dr. Wang rose to Vice President of Research and Technology for Consumer Products and Corporate Director of the Drug Delivery Technology Resource Center. He was responsible for new product technology, patent strategy, and competitive intelligence across J&amp;J&rsquo;s skin and hair care franchise. During his tenure, he developed more than 10 core technologies and filed over 30 patents. His invention of a breakthrough anti-wrinkle cream technology earned him the Johnson Medal&mdash;the highest technical achievement award at Johnson &amp; Johnson.
          </p>
          <p className={s.bodyP + " " + s.anim} ref={addAnim}>
            After J&amp;J, Dr. Wang joined Sycamore Management Corporation as a partner specializing in life sciences and biotechnology investments. In 2009, he brought his deep scientific expertise and business acumen to StemCyte, where he has served as Chairman and CEO, guiding the company&rsquo;s transformation into a global leader in cord blood banking and regenerative cell therapy.
          </p>

          <div className={s.insightCard + " " + s.anim} ref={addAnim}>
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
              <div className={s.highlightCard + ' ' + s.anim} key={i} ref={addAnim}>
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
              <div className={s.tlItem + ' ' + s.anim} key={i} ref={addTl}>
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
            <div className={s.statCard + " " + s.anim} ref={addAnim}>
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>PhD</div>
              <div className={s.statLabel}>Physical Pharmacy, University of Iowa</div>
            </div>
            <div className={s.statCard + " " + s.anim} ref={addAnim}>
              <div className={s.statNum} style={{ fontSize: '20px', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>PharmD</div>
              <div className={s.statLabel}>National Defense Medical Center, Taiwan</div>
            </div>
            <div className={s.statCard + " " + s.anim} ref={addAnim}>
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
              <img className={s.otherAvatar} src="/images/our%20story/lee.jpg" alt="Tong-Young Lee, PhD" />
              <div className={s.otherInfo}>
                <h4>Tong-Young Lee, PhD</h4>
                <span>CEO</span>
              </div>
              <svg className={s.otherArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
            <Link href="/our-story/joseph-rosenthal" className={s.otherCard}>
              <img className={s.otherAvatar} src="/images/our%20story/rosenthal.jpg" alt="Joseph Rosenthal, MD" />
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
