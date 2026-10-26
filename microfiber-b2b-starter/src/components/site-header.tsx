"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNavigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="button button-small header-cta" href="/request-samples">
          Request samples
        </Link>

        <details className="mobile-menu" key={pathname}>
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {primaryNavigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/request-samples">Request samples</Link>
            <Link href="/start-project">Start a project</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
