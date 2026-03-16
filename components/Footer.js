import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div>
          <div className="brand">
            <img src="/images/logos/white_stemcyte.png" alt="StemCyte" style={{ height: '20px', width: 'auto', opacity: 0.3 }} />
          </div>
          <p className="bd">A global regenerative therapeutics company since 1997.</p>
          <div className="tags"><span>FDA</span><span>FACT</span><span>AABB</span><span>cGMP</span></div>
        </div>
        <div className="col">
          <h4>Learn</h4>
          <Link href="/the-science">The Science</Link>
          <Link href="/why-stemcyte">Why StemCyte</Link>
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
          <h4>Contact</h4>
          <a href="tel:8663894659">(866) 389-4659</a>
          <a href="mailto:customerservice@stemcyte.com">customerservice@stemcyte.com</a>
          <a href="https://maps.google.com/?q=StemCyte+Inc+Baldwin+Park+CA" target="_blank" rel="noopener">Baldwin Park, CA 91706</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
      <div className="footer-bot">
        <span>&copy; 2026 StemCyte, Inc. All rights reserved.</span>
        <span>FDA Registered &middot; FACT Accredited &middot; AABB Accredited</span>
      </div>
    </footer>
  );
}
