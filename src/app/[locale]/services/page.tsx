import Link from 'next/link';

export default function ServicesPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const isFr = params.locale === 'fr';
  const title = isFr ? 'Services' : 'Services';
  const intro = isFr
    ? 'Trois blocs d’intervention pour réduire le risque décisionnel en contexte industriel et réglementé.'
    : 'Three service tracks to reduce decision risk in regulated industrial contexts.';

  const services = isFr
    ? [
        {
          title: 'Audit de trajectoire industrielle',
          bullets: [
            'Identifier dépendances critiques et points de non-retour',
            'Évaluer robustesse des scénarios d’engagement',
            'Prioriser les arbitrages avant engagement'
          ]
        },
        {
          title: 'Evidence Pack',
          bullets: [
            'Structurer la chaîne de preuve conformité',
            'Préparer des dossiers marchés publics premier filtre',
            'Standardiser la traçabilité documentaire'
          ]
        },
        {
          title: 'Monitoring intelligence',
          bullets: [
            'Suivre les évolutions réglementaires clés',
            'Détecter les signaux publics à impact d’exécution',
            'Alerter les décideurs sur les changements critiques'
          ]
        }
      ]
    : [
        {
          title: 'Industrial trajectory audit',
          bullets: [
            'Identify critical dependencies and no-return points',
            'Assess scenario robustness before commitment',
            'Prioritize executive arbitrations'
          ]
        },
        {
          title: 'Evidence Pack',
          bullets: [
            'Structure a compliance evidence chain',
            'Prepare first-screening public tender dossiers',
            'Standardize documentation traceability'
          ]
        },
        {
          title: 'Intelligence monitoring',
          bullets: [
            'Track major regulatory changes',
            'Detect public signals impacting execution',
            'Alert decision teams on critical shifts'
          ]
        }
      ];

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg">{intro}</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="border border-black bg-white p-8">
              <h2 className="text-xl font-light">{s.title}</h2>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="mt-6"><Link href={`/${params.locale}/contact`} className="btn btn-primary">{isFr ? 'Demander une analyse' : 'Request an analysis'}</Link></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
