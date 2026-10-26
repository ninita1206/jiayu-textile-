import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CallToAction } from "@/components/call-to-action";
import { PageHero } from "@/components/page-hero";
import { pageBySlug, pageDefinitions } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pageDefinitions.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug.get(slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pageBySlug.get(slug);

  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="section">
        <div className="shell content-sections">
          {page.sections.map((section, index) => (
            <article className="content-section" key={section.title}>
              <span className="content-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.checklist ? (
                  <ul className="checklist">
                    {section.checklist.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CallToAction compact />
    </>
  );
}
