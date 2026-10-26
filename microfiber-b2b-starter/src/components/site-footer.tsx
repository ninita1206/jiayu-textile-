import Link from "next/link";

import { primaryNavigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="footer-copy">
            Replace this block with the approved company description, legal entity, address, and verified contact information.
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <div className="footer-links">
            {primaryNavigation.slice(0, 4).map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-heading">Company</p>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="footer-heading">Legal</p>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. Starter framework.</span>
        <span>English-first · Italian structure reserved for later</span>
      </div>
    </footer>
  );
}
