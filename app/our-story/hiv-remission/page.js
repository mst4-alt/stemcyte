'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import s from './page.module.css';

/* ── Metadata is exported from a separate file since this is a client component ── */

// ── Stat card data ──
const stats1 = [
  { count: 18000, suffix: '+', label: 'Cord blood units screened' },
  { count: 300, suffix: '+', label: 'CCR5-\u039432 homozygous units in registry' },
  { count: 6, suffix: '', label: 'Collaborating cord blood banks worldwide' },
];

const stats2 = [
  { count: 55, suffix: ' mo', label: 'Cancer-free post-transplant' },
  { count: 18, suffix: ' mo', label: 'Off antiretroviral therapy with no viral rebound' },
  { count: 100, suffix: '%', label: 'Immune reconstitution by CCR5-\u039432 cord blood cells' },
];

// ── Timeline data ──
const timelineItems = [
  { year: '2007', title: 'The Berlin Patient', desc: 'Timothy Ray Brown becomes the first person cured of HIV through an adult stem cell transplant with CCR5-delta32 donor cells. The procedure nearly kills him and proves almost impossible to replicate.' },
  { year: '2013', title: 'Dr. Petz publishes the cord blood hypothesis', desc: 'Petz et al. publish in Biology of Blood and Marrow Transplantation, proposing that a purpose-built inventory of CCR5-delta32 cord blood units could make HIV cure feasible for far more patients. Reports screening of 18,000 units and identification of 121 homozygous units.' },
  { year: '2015', title: 'IMPAACT P1107 launches', desc: 'The NIH-funded multi-center observational study formally begins, using StemCyte\u2019s pre-screened CCR5-delta32 cord blood units. Petz publishes a progress overview in Stem Cells and Cloning.' },
  { year: 'August 2017', title: 'The transplant', desc: 'The New York Patient receives a haplo-cord transplant at Weill Cornell Medicine: a CCR5-delta32 cord blood unit from StemCyte\u2019s registry combined with haploidentical stem cells from a relative. Neutrophils engraft by day 10.', highlight: true },
  { year: 'November 2018', title: 'First published report', desc: 'The case is presented as an abstract at the American Society of Hematology (ASH) annual meeting, reporting early remission of both AML and HIV at approximately one year post-transplant.' },
  { year: 'February 2022', title: 'Announced at CROI', desc: 'The IMPAACT P1107 team presents the case at the Conference on Retroviruses and Opportunistic Infections. The patient has been cancer-free for 4.5 years and HIV-free for 14 months after stopping antiretroviral therapy. The WHO reports it as the first case of HIV cure in a woman after stem cell transplantation.' },
  { year: 'March 2023', title: 'Published in Cell', desc: 'The full case report is published in Cell, one of the world\u2019s most prestigious scientific journals. The patient remained cancer-free at 55 months and HIV-free for 18 months off antiretroviral therapy, with no detectable replication-competent proviral reservoirs. The paper is dedicated in memory of Dr. Lawrence Petz.', highlight: true },
];

export default function HivRemissionPage() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const progressRef = useRef(null);
  const dedRef = useRef(null);
  const statGrid1Ref = useRef(null);
  const statGrid2Ref = useRef(null);
  const animRefs = useRef([]);
  const tlItemRefs = useRef([]);
  const statCard1Refs = useRef([]);
  const statCard2Refs = useRef([]);

  // ── Count-up animation ──
  const countUp = useCallback((el, target, suffix) => {
    const duration = target > 1000 ? 1800 : target > 50 ? 1200 : 800;
    let startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(ease * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, []);

  // ── Hero canvas: floating molecular particles ──
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let particles = [];
    let W, H;
    const connectionDist = 140;
    const coverage = 1.0;
    const PARTICLE_COUNT = 120;
    let animId;

    function coverageBounds() {
      const cw = W * coverage;
      const ch = H * coverage;
      return { x: (W - cw) / 2, y: (H - ch) / 2, w: cw, h: ch };
    }

    function makeParticle() {
      const b = coverageBounds();
      return {
        x: b.x + Math.random() * b.w,
        y: b.y + Math.random() * b.h,
        r: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.05,
      };
    }

    function resize() {
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
      const b = coverageBounds();
      for (let i = 0; i < particles.length; i++) {
        particles[i].x = b.x + Math.random() * b.w;
        particles[i].y = b.y + Math.random() * b.h;
      }
    }

    function init() {
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(makeParticle());
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const offset = (window.scrollY || 0) * 0.15;
      const b = coverageBounds();

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = (particles[i].y - offset) - (particles[j].y - offset);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.06;
            ctx.strokeStyle = 'rgba(192,106,165,' + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y - offset);
            ctx.lineTo(particles[j].x, particles[j].y - offset);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < b.x) { p.x = b.x; p.vx *= -1; }
        if (p.x > b.x + b.w) { p.x = b.x + b.w; p.vx *= -1; }
        if (p.y < b.y) { p.y = b.y; p.vy *= -1; }
        if (p.y > b.y + b.h) { p.y = b.y + b.h; p.vy *= -1; }

        const drawY = p.y - offset;
        if (drawY < -20 || drawY > H + 20) continue;

        ctx.beginPath();
        ctx.arc(p.x, drawY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232,160,208,' + p.opacity + ')';
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // ── Scroll animations for .anim elements ──
  useEffect(() => {
    const els = animRefs.current.filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(s.animVisible);
      });
    }, { threshold: 0.15 });

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── Stat card stagger + count up ──
  useEffect(() => {
    const counted = {};

    function observeGrid(gridRef, cardRefs, id) {
      const grid = gridRef.current;
      if (!grid) return null;

      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || counted[id]) return;
          counted[id] = true;

          const cards = cardRefs.current.filter(Boolean);
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add(s.resultCardVisible);
              const numEl = card.querySelector('[data-count]');
              if (numEl) {
                const target = parseInt(numEl.getAttribute('data-count'));
                const suffix = numEl.getAttribute('data-suffix') || '';
                countUp(numEl, target, suffix);
              }
            }, i * 150);
          });
        });
      }, { threshold: 0.3 });

      io.observe(grid);
      return io;
    }

    const io1 = observeGrid(statGrid1Ref, statCard1Refs, 'stats1');
    const io2 = observeGrid(statGrid2Ref, statCard2Refs, 'stats2');

    return () => {
      io1?.disconnect();
      io2?.disconnect();
    };
  }, [countUp]);

  // ── Timeline draw-in on scroll ──
  useEffect(() => {
    const tl = timelineRef.current;
    const progress = progressRef.current;
    const items = tlItemRefs.current.filter(Boolean);
    if (!tl || !progress || !items.length) return;

    function updateTimeline() {
      const tlRect = tl.getBoundingClientRect();
      const tlTop = tlRect.top;
      const tlHeight = tlRect.height;
      const viewMid = window.innerHeight * 0.65;

      const scrollIntoTl = viewMid - tlTop;
      const pct = Math.max(0, Math.min(1, scrollIntoTl / tlHeight));
      progress.style.height = (pct * 100) + '%';

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemMid = itemRect.top + itemRect.height * 0.3;
        if (itemMid < viewMid) {
          item.classList.add(s.tlItemVisible);
          const dot = item.querySelector('[data-dot]');
          if (dot) {
            const isHighlight = item.getAttribute('data-highlight') === 'true';
            dot.className = `${s.tlDot} ${isHighlight ? s.tlDotHighlightReached : s.tlDotReached}`;
          }
        }
      });
    }

    window.addEventListener('scroll', updateTimeline);
    updateTimeline();
    return () => window.removeEventListener('scroll', updateTimeline);
  }, []);

  // ── Dedication fade ──
  useEffect(() => {
    const ded = dedRef.current;
    if (!ded) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(s.dedContentVisible);
      });
    }, { threshold: 0.4 });

    io.observe(ded);
    return () => io.disconnect();
  }, []);

  // Helper to collect anim refs
  let animIdx = 0;
  function animRef(el) {
    if (el) animRefs.current.push(el);
  }

  // Reset refs on each render
  animRefs.current = [];
  tlItemRefs.current = [];
  statCard1Refs.current = [];
  statCard2Refs.current = [];

  return (
    <>
      <Nav transparentHero={true} />

      {/* HERO */}
      <div className={s.hero} id="hero" ref={heroRef}>
        <canvas className={s.heroBgCanvas} ref={canvasRef} />
        <div className={`${s.orb} ${s.orbA}`} />
        <div className={`${s.orb} ${s.orbB}`} />
        <div className={`${s.orb} ${s.orbC}`} />
        <div className={s.heroInner}>
          <div className={s.overline}>
            <span className={s.dot} /> Published in Cell &middot; March 2023
          </div>
          <h1 className={s.heroH1}>
            The cord blood breakthrough that achieved <em>HIV-1 remission</em>
          </h1>
          <p className={s.heroSub}>
            How a StemCyte scientist&rsquo;s decades-long career in transfusion medicine led to a fundamentally new pathway toward curing HIV &mdash; one that could reach patients the previous approaches never could.
          </p>
          <div className={s.pubBadge}>
            <strong><em>Cell</em>, Vol. 186, Issue 6</strong>
            <span>&mdash; HIV-1 remission and possible cure in a woman after haplo-cord blood transplant</span>
          </div>
        </div>
      </div>

      {/* DR. PETZ BIO */}
      <section className={s.section}>
        <div className={s.inner}>
          <Link href="/our-story" className={s.backLink} ref={animRef}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Back to Our Story
          </Link>

          <div className={s.portraitSection}>
            <div className={s.portraitCol} ref={animRef}>
              <Image src="/images/our%20story/press_release_distribution_0452818_127664.jpg" alt="Dr. Lawrence D. Petz" width={280} height={336} sizes="(max-width: 768px) 200px, 280px" />
              <div className={s.name}>Lawrence D. Petz, MD</div>
              <div className={s.titleText}>Chief Medical Officer, StemCyte<br />Emeritus Professor, UCLA</div>
            </div>
            <div ref={(el) => { animRef(el); }} className={s.animD1}>
              <div className={s.secLabel}>The scientist</div>
              <h2 className={s.secH2}>A career built at the intersection of blood science and transplantation</h2>
              <p className={s.bodyP}>Dr. Lawrence Petz was one of the most distinguished transfusion medicine physicians of his generation. Before joining StemCyte as Chief Medical Officer, he spent decades shaping the field from two of the country&rsquo;s leading institutions.</p>
              <p className={s.bodyP}>At City of Hope National Medical Center, he served as Chairman of the Division of Medicine, Section Head of Hematology, and Director of Clinical and Experimental Immunology. He then moved to UCLA Medical Center, where he was Director of Transfusion Medicine and Professor of Pathology &amp; Laboratory Medicine.</p>
              <p className={s.bodyP}>He authored the first bone marrow transplant textbook &mdash; <em>Clinical Bone Marrow Transplantation</em> (1983) &mdash; along with all three editions of the widely used <em>Clinical Practice of Transfusion Medicine</em> and co-authored <em>Immune Hemolytic Anemias</em>. He published in the <em>New England Journal of Medicine</em>, <em>JAMA</em>, <em>The Lancet</em>, <em>Blood</em>, and hundreds of additional journals.</p>
              <p className={s.bodyP}>The AABB recognized him with its highest honors, including the Emily Cooley Award and the Tibor Greenwalt Memorial Award. The National Heart, Lung, and Blood Institute granted him its Transfusion Medicine Academic Award. At StemCyte, he founded and organized the annual International Symposium on Cord Blood Transplantation.</p>
            </div>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* THE INSIGHT */}
      <section className={`${s.section} ${s.sectionLav}`}>
        <div className={s.inner}>
          <div ref={animRef}>
            <div className={s.secLabel}>The insight</div>
            <h2 className={s.secH2}>A hypothesis that changed everything</h2>
            <p className={s.bodyP}>In 2007, a man named Timothy Ray Brown &mdash; later known as the &ldquo;Berlin Patient&rdquo; &mdash; became the first person cured of HIV. His doctor had transplanted adult stem cells from a donor who carried a rare genetic mutation called CCR5-delta32, which prevents HIV from entering cells. The transplant cured both his leukemia and his HIV.</p>
            <p className={s.bodyP}>It was a landmark moment in medicine. But it was also nearly impossible to repeat. Adult stem cell transplants require a very close HLA match between donor and recipient. Finding a donor who was both a close HLA match <em>and</em> carried two copies of the rare CCR5-delta32 mutation was extraordinarily unlikely. Only about 1% of people of European descent are homozygous for the mutation. In other populations, it is even rarer.</p>
            <p className={s.bodyP}>This meant the Berlin Patient&rsquo;s cure was, for most of the world, out of reach.</p>
          </div>

          <div className={s.insightCard} ref={animRef}>
            <div className={s.quote}>&ldquo;Cure of HIV infections by hematopoietic cell transplantation can be accomplished much more readily using umbilical cord blood stem cells obtained from a modestly sized inventory of cryopreserved CCR5-&Delta;32/&Delta;32 cord blood units.&rdquo;</div>
            <div className={s.attribution}>&mdash; Dr. Lawrence Petz et al., <em>Biology of Blood and Marrow Transplantation</em>, 2013</div>
          </div>

          <div ref={animRef}>
            <p className={s.bodyP}>Dr. Petz recognized something others had missed. Cord blood transplants require significantly less stringent HLA matching than adult stem cell transplants. That meant a relatively small inventory of cord blood units carrying the CCR5-delta32 mutation could provide matches for a much larger and more diverse group of patients.</p>
            <p className={s.bodyP}>The approach had another advantage: cord blood transplants carry a lower risk of graft-versus-host disease, the dangerous immune reaction that nearly killed the Berlin Patient during his treatment. Cord blood was not just an alternative pathway &mdash; it was potentially a better one.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* BUILDING THE REGISTRY */}
      <section className={s.section}>
        <div className={s.inner}>
          <div ref={animRef}>
            <div className={s.secLabel}>Building the registry</div>
            <h2 className={s.secH2}>Screening 18,000 cord blood units to find the needle in the haystack</h2>
            <p className={s.bodyP}>Dr. Petz and his team at StemCyte undertook an enormous screening effort. Working across StemCyte&rsquo;s own inventory and collaborating with cord blood banks at Duke University, MD Anderson Cancer Center, the University of Colorado, St. Louis, Barcelona, and Sydney, they tested approximately 18,000 cord blood units for the CCR5-delta32 mutation.</p>
            <p className={s.bodyP}>They identified 121 homozygous CCR5-delta32 units &mdash; an incidence of roughly 0.7% among the primarily Caucasian units tested. DNA isolation and mutation analysis were conducted at the City of Hope Medical Center. With projected additional screening of 25,000 more units, the goal was to build a purpose-built registry of approximately 300 units.</p>
            <p className={s.bodyP}>That registry &mdash; which now contains more than 300 CCR5-delta32 homozygous cord blood units &mdash; exists nowhere else in the world. It became the critical infrastructure that made the IMPAACT P1107 study possible.</p>
          </div>

          <div className={s.resultGrid} ref={statGrid1Ref}>
            {stats1.map((stat, i) => (
              <div key={i} className={s.resultCard} ref={(el) => { statCard1Refs.current[i] = el; }}>
                <div className={s.num} data-count={stat.count} data-suffix={stat.suffix}>0</div>
                <div className={s.lbl}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* THE STUDY */}
      <section className={`${s.section} ${s.sectionLav}`}>
        <div className={s.inner}>
          <div ref={animRef}>
            <div className={s.secLabel}>The study</div>
            <h2 className={s.secH2}>IMPAACT P1107: From hypothesis to NIH-backed clinical trial</h2>
            <p className={s.bodyP}>In 2015, Dr. Petz&rsquo;s work became the foundation of a formal NIH-funded clinical study: IMPAACT P1107, a multi-center observational trial designed to track outcomes in people living with HIV who receive cord blood transplants carrying the CCR5-delta32 mutation.</p>
            <p className={s.bodyP}>The study was conducted by the International Maternal Pediatric Adolescent AIDS Clinical Trials (IMPAACT) Network, in collaboration with the AIDS Clinical Trials Group (ACTG), the Center for International Blood and Marrow Transplant Research (CIBMTR), and StemCyte. The study used StemCyte&rsquo;s pre-screened CCR5-delta32 cord blood units as the source material.</p>
            <p className={s.bodyP}>Dr. Yvonne Bryson, a distinguished professor at the David Geffen School of Medicine at UCLA, led the study. The transplant team at Weill Cornell Medicine &mdash; led by Drs. Jingmei Hsu and Koen Van Besien &mdash; performed the procedure. Deborah Persaud at Johns Hopkins University led the virological analysis. Dr. Petz served as a collaborator and co-author throughout.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* THE PATIENT */}
      <section className={s.section}>
        <div className={s.inner}>
          <div ref={animRef}>
            <div className={s.secLabel}>The patient</div>
            <h2 className={s.secH2}>The &ldquo;New York Patient&rdquo;</h2>
            <p className={s.bodyP}>In 2013, a middle-aged woman of mixed-race ancestry in New York was diagnosed with HIV-1. She began antiretroviral therapy and achieved viral suppression. Four years later, in 2017, she developed acute myeloid leukemia (AML) &mdash; a life-threatening blood cancer.</p>
            <p className={s.bodyP}>She needed a stem cell transplant to treat her cancer. But she also had HIV. The IMPAACT P1107 team saw an opportunity: could they treat both diseases at once?</p>
            <p className={s.bodyP}>The team identified a CCR5-delta32 homozygous cord blood unit from StemCyte&rsquo;s pre-screened registry. It was a 5/8 HLA match &mdash; partial by adult donor standards, but sufficient for a cord blood transplant. To provide a bridge while the cord blood cells engrafted, they combined it with haploidentical stem cells from one of her relatives.</p>
            <p className={s.bodyP}>In August 2017, at Weill Cornell Medicine in New York, she received the transplant. Her neutrophils engrafted by day 10. By day 100, her immune system had been fully reconstituted by the CCR5-delta32 cord blood cells. Her leukemia was in complete remission. And her HIV remained undetectable.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* TIMELINE */}
      <section className={`${s.section} ${s.sectionPlum}`}>
        <div className={s.inner}>
          <div ref={animRef}>
            <div className={s.secLabel}>How it unfolded</div>
            <h2 className={s.secH2}>From transplant to remission</h2>
          </div>

          <div className={s.tl} ref={timelineRef}>
            <div className={s.tlTrack} />
            <div className={s.tlProgress} ref={progressRef} />

            {timelineItems.map((item, i) => (
              <div
                key={i}
                className={s.tlItem}
                data-highlight={item.highlight ? 'true' : 'false'}
                ref={(el) => { tlItemRefs.current[i] = el; }}
              >
                <div className={s.tlDot} data-dot />
                <div className={s.tlYear}>{item.year}</div>
                <div className={s.tlTitle} dangerouslySetInnerHTML={{ __html: item.title }} />
                <div className={s.tlDesc} dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* THE RESULTS */}
      <section className={s.section}>
        <div className={s.inner}>
          <div ref={animRef}>
            <div className={s.secLabel}>The results</div>
            <h2 className={s.secH2}>A landmark outcome</h2>
            <p className={s.bodyP}>The New York Patient&rsquo;s results, as published in <em>Cell</em>, demonstrated what Dr. Petz had hypothesized a decade earlier: cord blood carrying the CCR5-delta32 mutation could achieve HIV remission &mdash; and possibly cure.</p>
          </div>

          <div className={s.resultGrid} ref={statGrid2Ref}>
            {stats2.map((stat, i) => (
              <div key={i} className={s.resultCard} ref={(el) => { statCard2Refs.current[i] = el; }}>
                <div className={s.num} data-count={stat.count} data-suffix={stat.suffix}>0</div>
                <div className={s.lbl}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div ref={animRef}>
            <p className={s.bodyP}>Correlative viral, immunological, and latent reservoir studies were consistent with the elimination of HIV-1 from her blood. Her cells were tested in the laboratory and found to be resistant to HIV. No replication-competent proviral reservoirs were detected post-transplant while off antiretroviral therapy. Antiretroviral drugs were confirmed absent from her blood plasma, verifying true ART-free remission.</p>
            <p className={s.bodyP}>Notably, she did not experience graft-versus-host disease &mdash; the dangerous immune complication that had severely affected the Berlin Patient. This supported Dr. Petz&rsquo;s reasoning that cord blood&rsquo;s inherently lower immunological risk made it a more practical source for this type of transplant.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* WHY IT MATTERS */}
      <section className={`${s.section} ${s.sectionSage}`}>
        <div className={s.inner}>
          <div ref={animRef}>
            <div className={s.secLabel}>Why it matters</div>
            <h2 className={s.secH2}>Cord blood opened the door for everyone</h2>
            <p className={s.bodyP}>Before this case, every person who had achieved HIV remission through stem cell transplantation was a man who received adult donor cells. This required near-perfect HLA matching from a donor pool that is overwhelmingly white. The approach was functionally unavailable to most of the world&rsquo;s HIV-positive population.</p>
          </div>

          <div className={s.compareGrid} ref={animRef}>
            <div className={s.compareTable}>
              <div className={s.compareHeader}>
                <div></div>
                <div className={s.compareColOld}>Adult donor cells</div>
                <div className={s.compareColNew}>Cord blood</div>
              </div>
              <div className={s.compareRow}>
                <div className={s.compareLabel}>HLA matching</div>
                <div className={s.compareOldVal}>Near-perfect match required</div>
                <div className={s.compareNewVal}>Less stringent matching</div>
              </div>
              <div className={s.compareRow}>
                <div className={s.compareLabel}>Donor diversity</div>
                <div className={s.compareOldVal}>Almost exclusively white donors</div>
                <div className={s.compareNewVal}>Pre-screened registry, diverse access</div>
              </div>
              <div className={s.compareRow}>
                <div className={s.compareLabel}>GVHD risk</div>
                <div className={s.compareOldVal}>Significant</div>
                <div className={s.compareNewVal}>Lower</div>
              </div>
              <div className={s.compareRowLast}>
                <div className={s.compareLabel}>Outcomes</div>
                <div className={s.compareOldVal}>2 men cured in 10+ years</div>
                <div className={s.compareNewVal}>First woman, first diverse patient</div>
              </div>
            </div>
          </div>

          <div ref={animRef}>
            <p className={s.bodyP}>In the United States, only 28% of people living with HIV are Caucasian. The CCR5-delta32 mutation is found almost exclusively in people of European descent. Dr. Petz&rsquo;s insight &mdash; that cord blood&rsquo;s more flexible matching requirements could bypass these limitations &mdash; made a cure pathway available to patients who had none.</p>
            <p className={s.bodyP}>As the study authors wrote in <em>Cell</em>: cord blood-based cell therapy and CCR5-targeted approaches could serve as a model for future efforts to cure HIV in a broader and more diverse population of people living with the virus.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine} /></div>

      {/* DEDICATION */}
      <div className={s.dedication}>
        <div className={s.glow} />
        <div className={s.dedContent} ref={dedRef}>
          <div className={s.dedLine} />
          <div className={s.dedText}>&ldquo;We would like to dedicate this manuscript in memory of Lawrence D. Petz, MD, who recently passed away, a pioneer in the field of cord blood cells.&rdquo;</div>
          <div className={s.dedAttr}>&mdash; Hsu, Van Besien, Glesby et al., <em>Cell</em>, March 2023</div>
        </div>
      </div>

      {/* SOURCES */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.sources}>
            <h4>Sources</h4>
            <ol>
              <li>Hsu J, Van Besien K, Glesby MJ, et al. HIV-1 remission and possible cure in a woman after haplo-cord blood transplant. <em>Cell</em>. 2023;186(6):1115&ndash;1126.e8. <a href="https://doi.org/10.1016/j.cell.2023.02.030" target="_blank" rel="noopener">doi:10.1016/j.cell.2023.02.030</a></li>
              <li>Petz LD, Redei I, Bryson Y, et al. Hematopoietic cell transplantation with cord blood for cure of HIV infections. <em>Biol Blood Marrow Transplant</em>. 2013;19(3):393&ndash;397.</li>
              <li>Petz LD, Burnett JC, Li H, et al. Progress toward curing HIV infection with hematopoietic cell transplantation. <em>Stem Cells Cloning</em>. 2015;8:109&ndash;116. <a href="https://doi.org/10.2147/SCCAA.S56050" target="_blank" rel="noopener">doi:10.2147/SCCAA.S56050</a></li>
              <li>Hsu J, Glesby M, Shore TB, et al. CCR5 delta32 cord &amp; haploidentical grafts: allogeneic stem cell transplant for HIV+/AML patient: a case report from the IMPAACT P1107 observational study. <em>Blood</em>. 2018;132(Supplement 1):2184.</li>
              <li>IMPAACT P1107. Cord Blood Transplantation with CCR5delta32 Donor Cells. ClinicalTrials.gov Identifier: <a href="https://clinicaltrials.gov/study/NCT02140944" target="_blank" rel="noopener">NCT02140944</a></li>
              <li>UCLA Health. UCLA Health at CROI: Presenting the case of a woman with HIV-1 in remission. February 15, 2022.</li>
              <li>World Health Organization. First case of HIV cure in a woman after stem cell transplantation reported at CROI-2022. March 24, 2022.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className={s.ctaBanner}>
        <h2>Learn more about StemCyte&rsquo;s story</h2>
        <p>From a California lab in 1997 to 2,300+ transplants in 35 countries &mdash; and a breakthrough published in <em>Cell</em>.</p>
        <Link href="/our-story" className={s.ctaBtn}>Read our full story</Link>
      </div>
    </>
  );
}
