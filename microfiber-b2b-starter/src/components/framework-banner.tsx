import { siteConfig } from "@/content/site";

export function FrameworkBanner() {
  if (!siteConfig.frameworkPreview) return null;

  return (
    <div className="framework-banner" role="status">
      Framework preview: replace starter copy, evidence, images, legal text, and contact details before launch.
    </div>
  );
}
