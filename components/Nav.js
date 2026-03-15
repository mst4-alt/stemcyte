'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'The Science', href: '/the-science' },
  { label: 'Why StemCyte', href: '/why-stemcyte' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Patient Stories', href: '/patient-stories' },
  { label: 'FAQ', href: '/faq' },
];

export default function Nav({ transparentHero = true }) {
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!transparentHero) return;

    const nav = navRef.current;
    const hero = document.getElementById('hero');
    if (!nav || !hero) return;

    function ckNav() {
      if (hero.getBoundingClientRect().bottom < 80) {
        nav.classList.remove('at-top');
        nav.classList.add('scrolled');
      } else {
        nav.classList.add('at-top');
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', ckNav);
    ckNav();

    return () => window.removeEventListener('scroll', ckNav);
  }, [transparentHero]);

  const navClass = transparentHero ? 'nav at-top' : 'nav scrolled';

  return (
    <nav className={navClass} id="nav" ref={navRef}>
      <Link href="/" className="logo">Stem<b>Cyte</b></Link>
      <div className="links">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} className={isActive ? 'active' : ''}>
              {label}
            </Link>
          );
        })}
      </div>
      <div className="rg">
        <Link href="/pricing" className="cta">Enroll now</Link>
      </div>
    </nav>
  );
}
