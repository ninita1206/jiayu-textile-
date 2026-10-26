import Link from "next/link";

import { CallToAction } from "@/components/call-to-action";
import { applications, customizationOptions, developmentSteps } from "@/content/site";

const maturityLabels = {
  established: "Established",
  growth: "Growth",
  "co-development": "Co-development",
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">B2B microfiber website starter</p>
            <h1>Custom Microfiber Materials, From Concept to Production.</h1>
            <p className="hero-intro">
              Starter positioning for a design-led, evidence-backed material partner serving footwear, bags, accessories, and new application development.
            </p>
            <div className="button-row">
              <Link className="button" href="/request-samples">Request material samples</Link>
              <Link className="button button-secondary" href="/start-project">Start a custom development</Link>
            </div>
            <p className="starter-note">
              Replace all starter copy with company-approved facts before enabling indexing.
            </p>
          </div>
          <div className="material-stage" aria-label="Placeholder for an approved microfiber material photograph">
            <div className="material-swatch swatch-one" />
            <div className="material-swatch swatch-two" />
            <div className="material-caption">
              <span>IMAGE PLACEHOLDER</span>
              Replace with an owned, approved material macro photograph.
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Starter capability structure">
        <div className="shell proof-grid">
          <span>Design-driven development</span>
          <span>Custom construction</span>
          <span>Product-level evidence</span>
          <span>Manufacturing coordination</span>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Application strategy</p>
              <h2>Lead with proven markets. Develop the next ones together.</h2>
            </div>
            <p>
              The structure separates mature experience from growth and co-development directions, so the site stays ambitious without overstating evidence.
            </p>
          </div>
          <div className="application-grid">
            {applications.map((application, index) => (
              <article className={`application-card application-card-${index + 1}`} key={application.slug}>
                <span className={`status status-${application.maturity}`}>
                  {maturityLabels[application.maturity]}
                </span>
                <h3>{application.title}</h3>
                <p>{application.description}</p>
                <Link href="/applications">Prepare this page <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow eyebrow-light">Custom development</p>
            <h2>Five variables. One controlled development path.</h2>
            <p className="light-copy">
              Every option remains subject to technical feasibility, MOQ, testing requirements, and an approved production sample.
            </p>
            <Link className="text-link-light" href="/custom-development">Open the development framework →</Link>
          </div>
          <ol className="option-list">
            {customizationOptions.map((option, index) => (
              <li key={option}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {option}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Development process</p>
              <h2>Show buyers how an idea becomes production-ready.</h2>
            </div>
            <p>Replace each stage with your verified owners, inputs, review gates, timing, and deliverables.</p>
          </div>
          <ol className="process-grid">
            {developmentSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-stone">
        <div className="shell evidence-grid">
          <div>
            <p className="eyebrow">Evidence before claims</p>
            <h2>Build trust with product-level proof.</h2>
          </div>
          <div className="evidence-card">
            <span className="evidence-number">01</span>
            <h3>Physical performance</h3>
            <p>Connect each published value to a material, construction, test method, condition, date, and report.</p>
          </div>
          <div className="evidence-card">
            <span className="evidence-number">02</span>
            <h3>Chemical compliance</h3>
            <p>Record the tested sample, scope, issuer, holder, date, expiry, and public-use permission.</p>
          </div>
          <div className="evidence-card">
            <span className="evidence-number">03</span>
            <h3>Customer permission</h3>
            <p>Publish names, logos, testimonials, images, and project details only when explicitly authorized.</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
