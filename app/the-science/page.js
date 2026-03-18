'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../components/Nav';
import s from './page.module.css';

export default function TheSciencePage() {
  const pageRef = useRef(null);

  /* ── Scroll animations ── */
  useEffect(() => {
    const els = pageRef.current?.querySelectorAll(`.${s.anim}`);
    if (!els || els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add(s.vis), 150);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Mouse physics: scatter-nudge on disease tags ── */
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 900) return;
    const blocks = pageRef.current?.querySelectorAll(`.${s.db}`);
    if (!blocks || blocks.length === 0) return;

    const cleanups = [];

    blocks.forEach((block) => {
      const tags = block.querySelectorAll(`.${s.dt} .tag`);
      let rafId = null;

      const onMouseMove = (e) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = null;
          const mx = e.clientX;
          const my = e.clientY;
          tags.forEach((tag) => {
            if (tag.matches(':hover')) {
              tag.style.transform = '';
              return;
            }
            const tr = tag.getBoundingClientRect();
            const cx = tr.left + tr.width / 2;
            const cy = tr.top + tr.height / 2;
            const dx = cx - mx;
            const dy = cy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150 && dist > 0) {
              const strength = (1 - dist / 150) * 3.5;
              const nx = (dx / dist) * strength;
              const ny = (dy / dist) * strength;
              tag.style.transform = `translate(${nx.toFixed(1)}px,${ny.toFixed(1)}px)`;
            } else {
              tag.style.transform = '';
            }
          });
        });
      };

      const onMouseLeave = () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        tags.forEach((tag) => {
          tag.style.transform = '';
        });
      };

      block.addEventListener('mousemove', onMouseMove);
      block.addEventListener('mouseleave', onMouseLeave);
      cleanups.push(() => {
        block.removeEventListener('mousemove', onMouseMove);
        block.removeEventListener('mouseleave', onMouseLeave);
        if (rafId) cancelAnimationFrame(rafId);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* ── Mobile tap-to-toggle tooltips ── */
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth > 900) return;
    const tags = pageRef.current?.querySelectorAll(`.${s.db} .${s.dt} .tag`);
    if (!tags || tags.length === 0) return;

    const handler = (e) => {
      const tag = e.currentTarget;
      const wasOpen = tag.classList.contains(s.tipOpen);
      // Close all open tips
      pageRef.current.querySelectorAll(`.tag.${s.tipOpen}`).forEach((t) => {
        t.classList.remove(s.tipOpen);
      });
      if (!wasOpen) {
        tag.classList.add(s.tipOpen);
      }
    };

    tags.forEach((tag) => tag.addEventListener('click', handler));
    return () => tags.forEach((tag) => tag.removeEventListener('click', handler));
  }, []);

  return (
    <div ref={pageRef}>
      <Nav transparentHero={true} />

      {/* ══ HERO ══ */}
      <section className={s.hero} id="hero">
        <Image
          src="/images/Hero_4.jpeg"
          alt="The Science of cord blood stem cells"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={s.vig} />
        <div className={s.ct}>
          <div className={s.lbl}>The Science</div>
          <h1>Your baby is born with the power to save a life — including their own</h1>
          <p className={s.sub}>
            Your newborn's umbilical cord contains stem cells that treat over 80 diseases today and are being researched for hundreds more.
          </p>
        </div>
      </section>

      {/* ══ BLUE ZONE — STEM CELLS ══ */}
      <section className={`${s.zone} ${s.zoneBlue}`}>
        <div className={s.circleDeco} />
        <div className={s.sectionBanner}>
          <div className={s.bannerLabel}>The Science</div>
          <div className={s.bannerRule} />
        </div>
        <div className="inner" style={{ maxWidth: 1100 }}>
          <div className="tc">
            <h2>What are cord blood stem cells?</h2>
          </div>
          <p className={`${s.journeyIntro} ${s.anim}`}>
            Think of stem cells as your body's starter kit. They're the original cells that every other cell in your body comes from.
          </p>
          <div className={s.journey}>
            {/* Step 1 */}
            <div className={`${s.journeyStep} ${s.anim}`}>
              <div className={s.journeyCircle} style={{ background: '#D4E4FF' }}>
                <span style={{ color: '#3B6DC4' }}>1</span>
              </div>
              <div className={s.journeyLine} />
              <div className={s.journeyContent}>
                <h4 style={{ color: '#3B6DC4' }}>Your baby is born with them</h4>
                <p>
                  The blood left in your baby's umbilical cord after birth is rich with <strong>stem cells</strong> — the same type used in bone marrow transplants for decades. They build your baby's entire blood and immune system.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className={`${s.journeyStep} ${s.anim}`}>
              <div className={s.journeyCircle} style={{ background: '#F0E0EB' }}>
                <span style={{ color: '#6C1A55' }}>2</span>
              </div>
              <div className={s.journeyLine} />
              <div className={s.journeyContent}>
                <h4 style={{ color: '#6C1A55' }}>They can rebuild what's broken</h4>
                <p>
                  Every red blood cell, white blood cell, and platelet traces back to these stem cells. When someone fights leukemia, sickle cell disease, or an immune deficiency, <strong>a transplant can regenerate their entire blood and immune system</strong>.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className={`${s.journeyStep} ${s.anim}`}>
              <div className={s.journeyCircle} style={{ background: '#D4E8DC' }}>
                <span style={{ color: '#2A6B4F' }}>3</span>
              </div>
              <div className={s.journeyLine} />
              <div className={s.journeyContent}>
                <h4 style={{ color: '#2A6B4F' }}>They're younger and stronger</h4>
                <p>
                  Cord blood stem cells are <strong>more adaptable</strong> than adult bone marrow, cause fewer complications in transplant, and don't require a perfect donor match.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className={`${s.journeyStep} ${s.anim}`}>
              <div className={s.journeyCircle} style={{ background: '#FDF5EB' }}>
                <span style={{ color: '#C4943E' }}>4</span>
              </div>
              <div className={s.journeyContent}>
                <h4 style={{ color: '#C4943E' }}>You have one chance to collect them</h4>
                <p>
                  Collection happens in the minutes after birth, after the cord is clamped and cut. <strong>Zero risk to mother or baby.</strong> If they're not collected, they're discarded forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PLUM ZONE — CORD BLOOD ══ */}
      <section className={`${s.zone} ${s.zonePlum}`}>
        <div className={s.circleDeco} />
        <div className={s.sectionBanner}>
          <div className={s.bannerLabel}>Cord Blood</div>
          <div className={s.bannerRule} />
        </div>
        <div className="inner" style={{ maxWidth: 1100 }}>
          <div className="tc">
            <h2>Proven today — treating 80+ diseases</h2>
          </div>

          {/* Impact hero */}
          <div className={`${s.impactHero} ${s.anim}`}>
            <div className={s.impactLeft}>
              <div className={s.impactBig}>80+</div>
              <div className={s.impactLabel}>diseases treatable today</div>
              <div className={s.impactSublabel}>with cord blood stem cell transplants</div>
            </div>
            <div className={s.impactNarrative}>
              <p>
                Cord blood has been used in over <strong>60,000 transplants worldwide since 1988</strong>. It treats cancers like leukemia and lymphoma, blood disorders like sickle cell disease, inherited immune deficiencies, and metabolic conditions.
              </p>
              <p>These aren't future possibilities — they're treatments happening in hospitals right now, every day.</p>
            </div>
          </div>

          {/* 4 category summary cards */}
          <div className={`${s.catGrid} ${s.anim}`}>
            <div className={s.catCard} style={{ background: '#FBF5F9', borderColor: '#F0E0EB' }}>
              <div className={s.catIcon} style={{ background: '#F0E0EB' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C1A55" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <div className={s.catCount} style={{ color: '#6C1A55' }}>22+</div>
              <h4 style={{ color: '#6C1A55' }}>Cancers</h4>
              <div className={s.catDesc}>Leukemias, lymphomas, myeloma, and more</div>
            </div>
            <div className={s.catCard} style={{ background: '#EDF5FF', borderColor: '#D4E4FF' }}>
              <div className={s.catIcon} style={{ background: '#D4E4FF' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6DC4" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <div className={s.catCount} style={{ color: '#3B6DC4' }}>17+</div>
              <h4 style={{ color: '#3B6DC4' }}>Blood disorders</h4>
              <div className={s.catDesc}>Sickle cell, thalassemia, aplastic anemia</div>
            </div>
            <div className={s.catCard} style={{ background: '#F0F7F4', borderColor: '#D4E8DC' }}>
              <div className={s.catIcon} style={{ background: '#D4E8DC' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A6B4F" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className={s.catCount} style={{ color: '#2A6B4F' }}>30+</div>
              <h4 style={{ color: '#2A6B4F' }}>Immune deficiencies</h4>
              <div className={s.catDesc}>SCID, Wiskott-Aldrich, CGD, and many more</div>
            </div>
            <div className={s.catCard} style={{ background: '#FDF5EB', borderColor: '#F5E6CC' }}>
              <div className={s.catIcon} style={{ background: '#F5E6CC' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4943E" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className={s.catCount} style={{ color: '#C4943E' }}>16+</div>
              <h4 style={{ color: '#C4943E' }}>Metabolic disorders</h4>
              <div className={s.catDesc}>Hurler, Krabbe, ALD, Gaucher, and more</div>
            </div>
          </div>

          {/* 3 match/stat cards */}
          <div className={`${s.matchGrid} ${s.anim}`}>
            <div className={s.matchCard}>
              <div className="mv">100%</div>
              <div className="ml">Match for your baby</div>
              <div className="md">Guaranteed perfect match</div>
            </div>
            <div className={s.matchCard}>
              <div className="mv">75%</div>
              <div className="ml">Sibling partial match</div>
              <div className="md">High likelihood of compatibility</div>
            </div>
            <div className={s.matchCard}>
              <div className="mv">60K+</div>
              <div className="ml">Transplants worldwide</div>
              <div className="md">Since 1988</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PLUM DEEP — 80+ DISEASES ══ */}
      <section className={s.zonePlumDeep}>
        <div className={s.circleDeco} />
        <div className="inner">
          <div className="tc">
            <div className="zlbl">What cord blood treats</div>
            <h2>What these 80+ diseases actually are</h2>
            <p className="lead">Hover over any condition to learn more. These are not future possibilities — these are being treated right now.</p>
          </div>
          <div className={s.dgrid}>
            {/* ── Cancers & malignancies ── */}
            <div className={`${s.db} ${s.dbC} ${s.anim}`}>
              <div className="dh"><h4>Cancers &amp; malignancies</h4><div className="dc">22+</div></div>
              <div className={s.dt}>
                <div className="tag">B-cell ALL<div className="tip">The most common childhood leukemia. Cord blood transplant replaces cancerous bone marrow with healthy stem cells that rebuild the immune system.</div></div>
                <div className="tag">T-cell ALL<div className="tip">An aggressive form of acute lymphoblastic leukemia affecting T-cells. Transplant offers a curative option when chemotherapy alone is insufficient.</div></div>
                <div className="tag">Acute myeloid leukemia<div className="tip">Fast-growing cancer of blood-forming cells in the bone marrow. Cord blood transplant is often the best option when chemotherapy fails or disease relapses.</div></div>
                <div className="tag">Chronic myeloid leukemia<div className="tip">Slower-growing blood cancer caused by an abnormal chromosome. Transplant can cure when targeted therapies like imatinib stop working.</div></div>
                <div className="tag">JMML<div className="tip">Juvenile myelomonocytic leukemia — a rare childhood leukemia. Stem cell transplant is currently the only known cure for this disease.</div></div>
                <div className="tag">Hodgkin lymphoma<div className="tip">Cancer of the lymphatic system characterized by Reed-Sternberg cells. Transplant used for relapsed or treatment-resistant cases.</div></div>
                <div className="tag">DLBCL<div className="tip">Diffuse large B-cell lymphoma — the most common type of non-Hodgkin lymphoma. Transplant rebuilds the immune system after intensive treatment.</div></div>
                <div className="tag">Burkitt lymphoma<div className="tip">A very fast-growing form of non-Hodgkin lymphoma, most common in children. Transplant provides a curative pathway for aggressive cases.</div></div>
                <div className="tag">Multiple myeloma<div className="tip">Cancer of plasma cells in the bone marrow. Transplant follows high-dose chemotherapy to restore healthy blood cell production.</div></div>
                <div className="tag">Mantle cell lymphoma<div className="tip">A rare B-cell lymphoma that tends to recur. Transplant can extend remission and improve long-term outcomes.</div></div>
                <div className="tag">Follicular lymphoma<div className="tip">A slow-growing but often recurring non-Hodgkin lymphoma. Transplant considered for cases that transform or stop responding to treatment.</div></div>
                <div className="tag">Waldenström's<div className="tip">Waldenström's macroglobulinemia — a rare lymphoma producing excess antibody protein. Transplant for aggressive or treatment-resistant disease.</div></div>
              </div>
            </div>

            {/* ── Blood & marrow disorders ── */}
            <div className={`${s.db} ${s.dbB} ${s.anim}`}>
              <div className="dh"><h4>Blood &amp; marrow disorders</h4><div className="dc">17+</div></div>
              <div className={s.dt}>
                <div className="tag">Sickle cell disease<div className="tip">Red blood cells become rigid and sickle-shaped, blocking blood flow and causing pain crises. Transplant can cure the disease by replacing faulty marrow.</div></div>
                <div className="tag">Beta-thalassemia major<div className="tip">Severely abnormal hemoglobin production requiring lifelong transfusions. Transplant is the only potential cure for the most severe form.</div></div>
                <div className="tag">Severe aplastic anemia<div className="tip">Bone marrow stops making enough blood cells, causing dangerous drops in all blood counts. Transplant replaces the damaged marrow entirely.</div></div>
                <div className="tag">Fanconi anemia<div className="tip">Rare inherited condition causing progressive bone marrow failure and cancer predisposition. Transplant is the primary life-saving treatment.</div></div>
                <div className="tag">Diamond-Blackfan anemia<div className="tip">The body cannot make enough red blood cells from birth. Transplant can cure the underlying genetic defect in the bone marrow.</div></div>
                <div className="tag">MDS<div className="tip">Myelodysplastic syndromes — bone marrow fails to produce healthy blood cells properly. Transplant replaces faulty marrow with healthy stem cells.</div></div>
                <div className="tag">Myelofibrosis<div className="tip">Scar tissue replaces healthy bone marrow, disrupting normal blood cell production. Transplant is the only curative treatment available.</div></div>
                <div className="tag">Dyskeratosis congenita<div className="tip">Rare genetic disorder causing bone marrow failure, abnormal skin, and nail changes. Transplant addresses the life-threatening marrow failure.</div></div>
                <div className="tag">Shwachman-Diamond<div className="tip">Inherited condition affecting bone marrow, the pancreas, and skeletal development. Transplant treats the marrow failure component.</div></div>
                <div className="tag">PNH<div className="tip">Paroxysmal nocturnal hemoglobinuria — red blood cells break down prematurely due to a missing surface protein. Transplant is the only curative treatment.</div></div>
              </div>
            </div>

            {/* ── Immune deficiencies ── */}
            <div className={`${s.db} ${s.dbI} ${s.anim}`}>
              <div className="dh"><h4>Immune deficiencies</h4><div className="dc">30+</div></div>
              <div className={s.dt}>
                <div className="tag">SCID<div className="tip">Severe combined immunodeficiency — “bubble boy disease.” Without transplant, infants cannot survive normal infections. Early transplant is life-saving.</div></div>
                <div className="tag">Wiskott-Aldrich<div className="tip">Causes eczema, dangerously low platelets, and progressive immune deficiency. Transplant is the only known cure for this X-linked condition.</div></div>
                <div className="tag">CGD<div className="tip">Chronic granulomatous disease — white blood cells cannot kill certain bacteria and fungi, leading to severe recurrent infections. Transplant restores immune function.</div></div>
                <div className="tag">Complete DiGeorge<div className="tip">The most severe form of DiGeorge syndrome with absent thymus function and no T-cells. Transplant can reconstitute the immune system.</div></div>
                <div className="tag">Omenn syndrome<div className="tip">A severe form of SCID with widespread skin inflammation, enlarged organs, and elevated IgE. Transplant is urgently life-saving.</div></div>
                <div className="tag">Bare lymphocyte syndrome<div className="tip">Immune cells lack critical MHC surface molecules needed to coordinate immune responses. Transplant provides cells with normal surface proteins.</div></div>
                <div className="tag">Leukocyte adhesion deficiency<div className="tip">White blood cells cannot migrate to infection sites in the body. Even minor infections become life-threatening without transplant.</div></div>
                <div className="tag">IPEX syndrome<div className="tip">Immune dysregulation, polyendocrinopathy, enteropathy, X-linked — the immune system attacks the body's own organs. Transplant can reset the immune system.</div></div>
                <div className="tag">HLH<div className="tip">Hemophagocytic lymphohistiocytosis — immune cells become overactivated and attack the body's own tissues. Transplant is curative for the familial form.</div></div>
                <div className="tag">Hyper IgM syndromes<div className="tip">B-cells cannot switch from making IgM to other antibody types, leaving patients vulnerable to infections. Transplant restores normal antibody production.</div></div>
                <div className="tag">+ 20 more SCIDs<div className="tip">Over 20 molecularly defined forms of SCID — including CD45, CD3, ZAP70, Artemis, PNP, and DOCK2 deficiencies — are treatable with cord blood transplant.</div></div>
              </div>
            </div>

            {/* ── Metabolic disorders ── */}
            <div className={`${s.db} ${s.dbM} ${s.anim}`}>
              <div className="dh"><h4>Metabolic disorders</h4><div className="dc">16+</div></div>
              <div className={s.dt}>
                <div className="tag">Hurler syndrome<div className="tip">Cannot break down complex sugar molecules, causing progressive damage to the brain, heart, and organs. Early transplant prevents irreversible decline.</div></div>
                <div className="tag">Krabbe disease<div className="tip">Destroys the protective myelin coating of nerves in the brain and body. Early transplant before symptom onset can slow or halt progression.</div></div>
                <div className="tag">ALD<div className="tip">Adrenoleukodystrophy — damages the myelin sheath protecting brain nerves. Transplant in early stages can halt disease progression and preserve function.</div></div>
                <div className="tag">MLD<div className="tip">Metachromatic leukodystrophy — progressive loss of myelin in the nervous system. Early transplant can stabilize the disease before major symptoms appear.</div></div>
                <div className="tag">Gaucher disease<div className="tip">Fat deposits accumulate in the spleen, liver, and bone marrow. Transplant addresses severe forms that don't respond to enzyme replacement therapy.</div></div>
                <div className="tag">Wolman disease<div className="tip">A severe lipid storage disorder causing organ damage in infancy. Transplant can provide the missing enzyme and prevent fatal organ failure.</div></div>
                <div className="tag">Alpha-mannosidosis<div className="tip">A rare lysosomal storage disorder causing progressive intellectual disability and skeletal abnormalities. Transplant can slow disease progression.</div></div>
                <div className="tag">Maroteaux-Lamy<div className="tip">MPS VI — the body cannot break down certain complex sugars, leading to skeletal deformities and organ damage. Transplant provides the missing enzyme.</div></div>
                <div className="tag">Osteopetrosis<div className="tip">Bones become abnormally dense and brittle due to faulty osteoclasts. Transplant provides healthy cells capable of proper bone remodeling.</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SAGE ZONE — CORD TISSUE ══ */}
      <section className={`${s.zone} ${s.zoneSage}`}>
        <div className={s.circleDeco} />
        <div className={s.sectionBanner}>
          <div className={s.bannerLabel}>Cord Tissue</div>
          <div className={s.bannerRule} />
        </div>
        <div className="inner">
          <div className="tc">
            <h2>The future of regenerative medicine</h2>
            <p className="lead">
              Cord tissue contains mesenchymal stem cells (MSCs) that repair muscle, bone, cartilage, skin, and organs. No HLA matching required — any family member can use them.
            </p>
          </div>
          <div className={s.compareGrid}>
            <div className={`${s.ccard} ${s.ccardPlum} ${s.anim}`}>
              <div className="ctag">Proven today</div>
              <h3>Cord blood</h3>
              <div className="ctype">Hematopoietic stem cells</div>
              <div className="cstats">
                <div className="cst"><div className="cv">80+</div><div className="cd">Approved</div></div>
                <div className="cst"><div className="cv">60K+</div><div className="cd">Transplants</div></div>
              </div>
              <p>Regenerates blood and immune systems. Requires HLA matching. Used in transplants since 1988.</p>
            </div>
            <div className={`${s.ccard} ${s.ccardSage} ${s.anim}`}>
              <div className="ctag">Emerging science</div>
              <h3>Cord tissue</h3>
              <div className="ctype">Mesenchymal stem cells</div>
              <div className="cstats">
                <div className="cst"><div className="cv">500+</div><div className="cd">Active trials</div></div>
                <div className="cst"><div className="cv">Any</div><div className="cd">Family member</div></div>
              </div>
              <p>Repairs muscle, bone, cartilage, skin, organs. No matching required. Massive research potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SAGE DEEP — CLINICAL TRIALS ══ */}
      <section className={s.zoneSageDeep}>
        <div className={s.circleDeco} />
        <div className="inner">
          <div className="tc">
            <div className="zlbl">Active clinical research</div>
            <h2>What's being researched right now</h2>
            <p className="lead">
              StemCyte sponsors 3 clinical trials directly, and over 500 active trials worldwide are investigating cord blood and cord tissue stem cells.
            </p>
          </div>

          <div className={s.trialsSplit}>
            {/* Left: StemCyte trials */}
            <div className={s.anim}>
              <div className={s.trialsColHeader}>
                <h3>StemCyte trials</h3>
                <span className={`${s.trialsBadge} ${s.trialsBadgePlum}`}>Our research</span>
              </div>
              <div className={s.scTrialCard}>
                <div className="phase">Phase II · Expanded Access</div>
                <h4>Long COVID / Post-COVID syndrome</h4>
                <p>Cord blood stem cells for symptoms that persist months or years after COVID-19 infection. Phase II complete; Expanded Access program cleared by FDA in 2026.</p>
                <div className="source">REGENECYTE® · NCT05682560</div>
              </div>
              <div className={s.scTrialCard}>
                <div className="phase">Phase I complete</div>
                <h4>Acute ischemic stroke</h4>
                <p>Allogeneic cord blood for acute cerebral stroke within 10 days of onset. Phase I showed safety and encouraging neurological outcomes.</p>
                <div className="source">Published in Cell Transplantation</div>
              </div>
              <div className={s.scTrialCard}>
                <div className="phase">Phase II</div>
                <h4>Spinal cord injury</h4>
                <p>HLA-matched cord blood units for spinal cord injury treatment. StemCyte is the first hybrid bank with FDA Phase II approval for this indication.</p>
                <div className="source">Program MC001</div>
              </div>
            </div>

            {/* Right: Global research */}
            <div className={s.anim}>
              <div className={s.trialsColHeader}>
                <h3>Global research</h3>
                <span className={`${s.trialsBadge} ${s.trialsBadgeSage}`}>Cord blood &amp; tissue</span>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotInv}`} />
                <div className={s.globalContent}>
                  <h4>Cerebral palsy <span className={`${s.tier} ${s.tierInv}`}>Investigational</span></h4>
                  <p>Both autologous cord blood and allogeneic cord tissue MSCs in active trials for motor function improvement</p>
                </div>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotInv}`} />
                <div className={s.globalContent}>
                  <h4>Hypoxic-ischemic encephalopathy <span className={`${s.tier} ${s.tierInv}`}>Investigational</span></h4>
                  <p>Cord blood for birth-related brain injury (HIE) — time-critical neonatal intervention</p>
                </div>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotInv}`} />
                <div className={s.globalContent}>
                  <h4>Type 1 diabetes <span className={`${s.tier} ${s.tierInv}`}>Investigational</span></h4>
                  <p>Cord tissue MSCs may protect insulin-producing cells from autoimmune attack</p>
                </div>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotInv}`} />
                <div className={s.globalContent}>
                  <h4>Knee osteoarthritis <span className={`${s.tier} ${s.tierInv}`}>Investigational</span></h4>
                  <p>Cord tissue MSCs for cartilage repair — approved in South Korea (Cartistem)</p>
                </div>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotInv}`} />
                <div className={s.globalContent}>
                  <h4>Hypoplastic left heart <span className={`${s.tier} ${s.tierInv}`}>Investigational</span></h4>
                  <p>Autologous cord blood MNCs in pilot studies for congenital heart defects</p>
                </div>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotPre}`} />
                <div className={s.globalContent}>
                  <h4>Alzheimer's &amp; Parkinson's <span className={`${s.tier} ${s.tierPre}`}>Preclinical</span></h4>
                  <p>Both cord blood and cord tissue MSCs showing promise in reducing neuroinflammation</p>
                </div>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotPre}`} />
                <div className={s.globalContent}>
                  <h4>ALS <span className={`${s.tier} ${s.tierPre}`}>Preclinical</span></h4>
                  <p>Early research into MSCs for motor neuron protection and disease progression</p>
                </div>
              </div>
              <div className={s.globalItem}>
                <div className={`${s.globalDot} ${s.globalDotPre}`} />
                <div className={s.globalContent}>
                  <h4>Neonatal conditions <span className={`${s.tier} ${s.tierPre}`}>Preclinical</span></h4>
                  <p>BPD, NEC, retinopathy of prematurity — cord-derived cells in neonatal repair research</p>
                </div>
              </div>
            </div>
          </div>

          <div className={s.trialStatRow}>
            <div className={`${s.trialStat} ${s.anim}`}><div className="tv">35+</div><div className="td">Countries with active cord blood research</div></div>
            <div className={`${s.trialStat} ${s.anim}`}><div className="tv">500+</div><div className="td">Active MSC clinical trials worldwide</div></div>
            <div className={`${s.trialStat} ${s.anim}`}><div className="tv">3</div><div className="td">StemCyte-sponsored clinical trials</div></div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/clinical-trials" style={{ fontSize: 15, fontWeight: 700, color: '#6C1A55', textDecoration: 'none' }}>
              See our clinical trials →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className={`${s.ctaBanner} ${s.anim}`}>
        <h2>What happens if you don't <em>bank?</em></h2>
        <p>If your baby's cord blood is not collected at birth, it's discarded as medical waste. There is no way to go back.</p>
        <div className="btns">
          <Link href="/pricing" className={s.btnW}>View plans &amp; pricing</Link>
          <a href="tel:8663894659" className={s.btnGd}>Call (866) 389-4659</a>
        </div>
      </section>
    </div>
  );
}
