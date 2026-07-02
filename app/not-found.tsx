import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-main text-center">
        <h1 className="text-4xl font-bold text-navy">404</h1>
        <p className="mt-4 text-navy/70">Cette page n&apos;existe pas.</p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
