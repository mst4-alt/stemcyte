'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'The Science', href: '/the-science' },
  { label: 'Why StemCyte', href: '/why-stemcyte' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Patient Stories', href: '/patient-stories' },
  { label: 'Our Story', href: '/our-story' },
];

export default function Nav() {
  const navRef = useRef(null);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const hero = document.getElementById('hero');
    if (!nav) return;

    // If no hero element, start in scrolled (cream) state
    if (!hero) {
      nav.classList.remove('at-top');
      nav.classList.add('scrolled');
      return;
    }

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
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navClass = 'nav at-top';

  return (
    <>
      <nav className={navClass} id="nav" ref={navRef}>
        <Link href="/" className="logo">
          <Image src="/images/logos/white_stemcyte.png" alt="StemCyte" className="logo-white" width={150} height={28} priority />
          <Image src="/images/logos/fullcolor_stemcyte.png" alt="StemCyte" className="logo-color" width={150} height={28} priority />
        </Link>
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
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <>
              <span style={{ transform: 'rotate(45deg) translate(2.5px, 2.5px)' }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ transform: 'rotate(-45deg) translate(2.5px, -2.5px)' }}></span>
            </>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
      </nav>

      {/* Bottom sheet */}
      <div
        className={`sheet-scrim${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div className={`sheet${menuOpen ? ' open' : ''}`}>
        <div className="sheet-handle"></div>
        <div className="sheet-links">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="sheet-cta">
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            Enroll now
          </Link>
        </div>
      </div>
    </>
  );
}
