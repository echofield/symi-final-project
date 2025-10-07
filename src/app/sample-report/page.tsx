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

        {/* 02 — Appels d'offres publics */}
        <div className="mt-24 grid gap-8 sm:grid-cols-[120px_1fr]">
          <div>
            <p className="text-5xl font-light">02</p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--forest-green)]">Appels d’offres publics</p>
            <p className="mt-2 text-base">Source: BOAMP • Marchés publics (PLAT’AU)</p>
            <div className="mt-6 h-px w-20 bg-[var(--forest-green)]" />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-none border border-black bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Valeur estimée</p>
                <p className="mt-4 text-3xl font-light text-[var(--forest-green)]">€85,000</p>
                <ul className="mt-4 space-y-1 text-sm">
                  <li>5 AO identifiés (90 jours)</li>
                  <li>Tri par code CPV et juridiction</li>
                  <li>Alertes 48h avant date limite</li>
                </ul>
              </div>
              <div className="rounded-none border border-black bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Détection</p>
                <ul className="mt-4 space-y-1 text-sm">
                  <li>Veille BOAMP + flux opérateurs régionaux</li>
                  <li>Filtrage par taille, catégorie, localisation</li>
                  <li>Routage par domaine de pratique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 03 — Urbanisme / Permis */}
        <div className="mt-24 grid gap-8 sm:grid-cols-[120px_1fr]">
          <div>
            <p className="text-5xl font-light">03</p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--forest-green)]">Urbanisme / Permis</p>
            <p className="mt-2 text-base">Source: Registres d’urbanisme locaux</p>
            <div className="mt-6 h-px w-20 bg-[var(--forest-green)]" />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-none border border-black bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Valeur estimée</p>
                <p className="mt-4 text-3xl font-light text-[var(--forest-green)]">€50,000</p>
                <ul className="mt-4 space-y-1 text-sm">
                  <li>12 dossiers pertinents détectés</li>
                  <li>Analyse par zone géographique (cibles)</li>
                  <li>Correspondance avec portefeuille clients</li>
                </ul>
              </div>
              <div className="rounded-none border border-black bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Détection</p>
                <ul className="mt-4 space-y-1 text-sm">
                  <li>Récupération hebdomadaire des registres</li>
                  <li>Normalisation des adresses et entités</li>
                  <li>Matching propriétaires / sociétés liées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Méthodologie */}
        <div className="mt-28">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">Méthodologie</p>
          <h2 className="mt-3 text-2xl font-light">Comment la détection fonctionne</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-5">
            {[
              ['Sources officielles', 'BODACC, BOAMP, Légifrance, registres locaux'],
              ['Normalisation', 'Nettoyage, déduplication, résolution d’entités'],
              ['Corrélation', 'Rapprochement multi-sources et signaux concordants'],
              ['Validation', 'Scoring de confiance + filtrage faux positifs'],
              ['Livraison', 'Alertes, rapports hebdomadaires, intégrations CRM']
            ].map(([title, desc]) => (
              <div key={title as string} className="rounded-none border border-black bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">{title}</p>
                <p className="mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implémentation */}
        <div className="mt-28">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">Implémentation</p>
          <h2 className="mt-3 text-2xl font-light">Déploiement en semaines, pas en mois</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em]">Semaine 1–2</p>
              <p className="mt-2 text-sm">Cadrage signaux + maquette de rapport, alertes manuelles</p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em]">Semaine 3–6</p>
              <p className="mt-2 text-sm">Intégration sources et automatisation progressive</p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em]">Semaine 7–12</p>
              <p className="mt-2 text-sm">Tableaux de bord, intégrations CRM, tuning des seuils</p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-28 text-center">
          <h3 className="text-2xl font-light">Prêt à détecter des opportunités avant vos concurrents ?</h3>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">Request Intelligence Analysis</Link>
            <Link href="/services" className="btn border border-black bg-white text-black hover:opacity-80">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


