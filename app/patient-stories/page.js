'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

export default function Page() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add(s.vis), 150);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(`.${s.anim}`).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className={s.hero} id="hero">
        <Image
          src="/images/Hero_3.jpeg"
          alt="Patient stories"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={s.vig}></div>
        <div className={s.ct}>
          <div className={s.lbl}>Patient Stories</div>
          <h1>It's not about saving blood — it's about saving lives</h1>
          <p className={s.sub}>Real families whose lives were changed by cord blood stem cells. Real physicians who trust StemCyte. Real outcomes.</p>
        </div>
      </section>

      {/* PATIENT STORIES */}
      <section className={s.section}>
        <div className={s.sh}>
          <div className={s.lbl}>Patient Stories</div>
          <h2>When cord blood made the difference</h2>
        </div>

        <div className={`${s.story} ${s.anim}`}>
          <div className={s.storyImg}>
            <Image
              src="/images/bailey.jpg"
              alt="Bailey"
              fill
              sizes="(max-width: 900px) 100vw, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={s.storyInner}>
            <div className={s.tag} style={{ background: '#FBF5F9', color: '#6C1A55' }}>Used her own stem cells</div>
            <h3>Bailey</h3>
            <div className={s.diag}>Diagnosis: Perinatal Stroke</div>
            <p>Bailey was just 3 days old when she suffered a perinatal stroke. Fortunately, her mother Rebecca had banked her cord blood stem cells at birth with StemCyte. Bailey was able to use her own cord blood stem cells as part of her treatment.</p>
            <p>Today, Bailey is 10 years old and living a healthy, normal life.</p>
            <a
              href="https://www.youtube.com/watch?v=qrbCvPtvtWk"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px', fontSize: '14px', fontWeight: 600, color: '#6C1A55', textDecoration: 'none' }}
            >
              Watch Bailey's story →
            </a>
          </div>
        </div>

        <div className={`${s.story} ${s.anim}`}>
          <div className={s.storyImg}>
            <Image
              src="/images/ryden.jpg"
              alt="Ryden"
              fill
              sizes="(max-width: 900px) 100vw, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={s.storyInner}>
            <div className={s.tag} style={{ background: '#F0F7F4', color: '#3D8B6A' }}>Used his brother's stem cells</div>
            <h3>Ryden</h3>
            <div className={s.diag}>Diagnosis: Cerebral Palsy</div>
            <p>Heather was in labor when her uterus ruptured, depriving her fourth child Ryden of oxygen. The MRI showed catastrophic brain damage and a diagnosis of extremely severe cerebral palsy.</p>
            <p>The family banked their fifth child's cord blood with StemCyte and used it for Ryden six months later in a clinical trial for cerebral palsy.</p>
            <a
              href="https://www.youtube.com/watch?v=9TyVpe7Id-4"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px', fontSize: '14px', fontWeight: 600, color: '#6C1A55', textDecoration: 'none' }}
            >
              Watch Ryden's story →
            </a>
          </div>
        </div>

        <div className={`${s.story} ${s.anim}`}>
          <div className={s.storyImg}>
            <Image
              src="/images/itzel.jpg"
              alt="Itzel"
              fill
              sizes="(max-width: 900px) 100vw, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={s.storyInner}>
            <div className={s.tag} style={{ background: '#EDF5FF', color: '#3B6DC4' }}>Used donated stem cells</div>
            <h3>Itzel</h3>
            <div className={s.diag}>Diagnosis: Acute Lymphoblastic Leukemia</div>
            <p>Itzel Cervantes was 6 years old when she underwent a cord blood transplant for ALL. The leukemia kept relapsing after chemotherapy, and the only way to stop it was a stem cell transplant using donated cord blood.</p>
            <p>Itzel remains in full remission from leukemia, 9 years after transplant.</p>
          </div>
        </div>
      </section>

      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* FEATURED QUOTE */}
      <div className={`${s.featQuote} ${s.anim}`}>
        <blockquote>“After doing research, we chose StemCyte because of their dedication to continuous research, clinical trials, and their dedication to helping families by being the only private bank offering public bank access.”</blockquote>
        <cite>Gabrielle Stone</cite>
        <div className={s.role}>Author, Eat Pray FML</div>
      </div>

      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* PHYSICIAN & PARENT QUOTES */}
      <section className={s.section}>
        <div className={s.sh}>
          <div className={s.lbl}>What families & physicians say</div>
          <h2>Trusted by the people who matter most</h2>
        </div>
        <div className={s.quotes}>
          <div className={`${s.quoteCard} ${s.anim}`}>
            <blockquote>“StemCyte really shines. Their experience in delivering valuable and viable stem cells for transplants is amazing. If you're thinking about preserving your baby's cord blood, I highly recommend StemCyte.”</blockquote>
            <cite>Dr. Shahin Ghadir</cite>
            <div className={s.role}>Reproductive Endocrinologist</div>
          </div>
          <div className={`${s.quoteCard} ${s.anim}`}>
            <blockquote>“After a lot of research, that is why we chose StemCyte. This was super important to us and we wanted to make sure we were with the best company to preserve her cord blood for her future.”</blockquote>
            <cite>Gretchen Rossi</cite>
            <div className={s.role}>Real Housewives of OC Alum</div>
          </div>
        </div>
      </section>

      {/* PUBLIC BANK ACCESS QUOTES */}
      <section className={s.sectionFull} style={{ background: '#EDE8F5' }}>
        <div className={s.inner}>
          <div className={s.sh}>
            <div className={s.lbl}>Public bank access stories</div>
            <h2>Why families chose StemCyte's unique protection</h2>
          </div>
          <div className={s.pbaQuotes}>
            <div className={`${s.pbaCard} ${s.anim}`}>
              <blockquote>“Our family is biracial so finding a match could be difficult in the future. Signing up with StemCyte to get public bank access was a no brainer.”</blockquote>
              <cite>Jennifer B.</cite>
              <div className={s.when}>Banked Molly in 2022</div>
            </div>
            <div className={`${s.pbaCard} ${s.anim}`}>
              <blockquote>“As a cancer survivor, I know how important it is to have public bank access. This gives me peace of mind!”</blockquote>
              <cite>Nikki</cite>
              <div className={s.when}>Banked in 2021</div>
            </div>
            <div className={`${s.pbaCard} ${s.anim}`}>
              <blockquote>“Getting another stem cell unit that could save your life is the best gift, not a teddy bear.”</blockquote>
              <cite>Sam M.</cite>
              <div className={s.when}>Banked Jake in 2022</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.ctaBanner} ${s.anim}`}>
        <h2>Your baby's stem cells can only be collected at <em>birth</em></h2>
        <p>Join the families who chose to protect their children's future.</p>
        <div className={s.btns}>
          <Link href="/pricing" className={s.btnW}>View plans & pricing</Link>
          <a href="tel:8663894659" className={s.btnGd}>Call (866) 389-4659</a>
        </div>
      </section>
    </>
  );
}
