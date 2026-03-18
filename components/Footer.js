import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div>
          <div className="brand">
            <Image src="/images/logos/white_stemcyte.png" alt="StemCyte" width={108} height={20} style={{ opacity: 0.3 }} />
          </div>
          <p className="bd">A global regenerative therapeutics company since 1997.</p>
          <div className="tags"><span>FDA</span><span>FACT</span><span>AABB</span><span>cGMP</span></div>
        </div>
        <div className="col">
          <h4>Learn</h4>
          <Link href="/the-science">The Science</Link>
          <Link href="/why-stemcyte">Why StemCyte</Link>
          <Link href="/regenecyte">REGENECYTE&reg;</Link>
          <Link href="/our-story/hiv-remission">HIV-1 Remission</Link>
          <Link href="/patient-stories">Patient Stories</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="col">
          <h4>Get started</h4>
          <Link href="/pricing">Pricing</Link>
          <Link href="/pricing">Enroll now</Link>
          <Link href="/refer-a-friend">Refer a friend</Link>
          <Link href="/client-payment">Client payment</Link>
        </div>
        <div className="col">
          <h4>Support</h4>
          <Link href="/public-bank-access">Public Bank Access</Link>
          <Link href="/lifesaver-guarantee">LifeSaver Guarantee</Link>
          <Link href="/expanded-access-policy">Expanded Access</Link>
          <Link href="/special-programs">Special Programs</Link>
          <Link href="/refer-a-friend">Refer a Friend</Link>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <Link href="/contact">Contact us</Link>
          <a href="mailto:customerservice@stemcyte.com">customerservice@stemcyte.com</a>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
      <div className="footer-bot">
        <span>&copy; 2026 StemCyte, Inc. All rights reserved.</span>
        <span>FDA Registered &middot; FACT Accredited &middot; AABB Accredited</span>
      </div>
    </footer>
  );
}
