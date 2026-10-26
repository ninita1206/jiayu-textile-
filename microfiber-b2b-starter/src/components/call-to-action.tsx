import Link from "next/link";

type CallToActionProps = {
  compact?: boolean;
};

export function CallToAction({ compact = false }: CallToActionProps) {
  return (
    <section className={compact ? "cta cta-compact" : "cta"}>
      <div className="shell cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">Next step</p>
          <h2>Turn a material requirement into a development brief.</h2>
          <p>Add verified contact details and connect these actions only after the inquiry flow is tested.</p>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/request-samples">Request samples</Link>
          <Link className="button button-outline-light" href="/start-project">Start a project</Link>
        </div>
      </div>
    </section>
  );
}
