import type { Metadata, Viewport } from "next";

import { FrameworkBanner } from "@/components/framework-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Custom Microfiber Materials`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: siteConfig.indexingEnabled
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b2a28",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <FrameworkBanner />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
