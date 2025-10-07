import Link from 'next/link';

export const metadata = { title: 'Sample Report — Symi Intelligence' };

export default function SampleReportPage() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">SYMI INTELLIGENCE</p>
        <h1 className="mt-4 text-center text-3xl font-light sm:text-4xl">Détectez les opportunités juridiques</h1>
        <p className="mt-2 text-center text-base sm:text-lg">8 à 21 jours avant vos concurrents</p>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-light text-[var(--forest-green)]">€180k</p>
            <p className="mt-1 text-xs uppercase tracking-widest">Potentiel total détecté</p>
          </div>
          <div>
            <p className="text-3xl font-light text-[var(--forest-green)]">73%</p>
            <p className="mt-1 text-xs uppercase tracking-widest">Précision de détection</p>
          </div>
          <div>
            <p className="text-3xl font-light text-[var(--forest-green)]">48h</p>
            <p className="mt-1 text-xs uppercase tracking-widest">Délai d'analyse</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="btn btn-primary">Analyse gratuite de votre cabinet →</Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-[120px_1fr]">
          <div>
            <p className="text-5xl font-light">01</p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--forest-green)]">Procédures Collectives</p>
            <p className="mt-2 text-base">Source: Greffes tribunaux de commerce</p>
            <div className="mt-6 h-px w-20 bg-[var(--forest-green)]" />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-none border border-black bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Valeur estimée</p>
                <p className="mt-4 text-3xl font-light text-[var(--forest-green)]">€45,000</p>
                <ul className="mt-4 space-y-1 text-sm">
                  <li>8 entreprises identifiées (septembre–octobre 2025)</li>
                  <li>Détectées entre 8 et 21 jours avant publication BODACC nationale</li>
                </ul>
              </div>
              <div className="rounded-none border border-black bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Détection</p>
                <ul className="mt-4 space-y-1 text-sm">
                  <li>Corrélation BODACC, BOAMP, Légifrance</li>
                  <li>Filtrage par catégorie et juridiction</li>
                  <li>Scoring de confiance et faux positifs écartés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/contact" className="btn btn-primary">Request Intelligence Analysis</Link>
          <Link href="/" className="btn border border-black bg-white text-black hover:opacity-80">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}


