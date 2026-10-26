import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="shell narrow-shell">
        <p className="eyebrow">404</p>
        <h1>This page is not part of the framework.</h1>
        <p className="page-intro">Return home or add the route and approved content before linking to it.</p>
        <Link className="button" href="/">Return home</Link>
      </div>
    </section>
  );
}
