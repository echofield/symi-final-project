import Link from 'next/link';

export default function ServicesPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const isFr = params.locale === 'fr';

  const intro = isFr
    ? 'Trois leviers pour reduire le cout d erreur decisionnelle en environnement industriel et reglemente.'
    : 'Three levers to reduce decision-error cost in regulated industrial environments.';

  const pillars = isFr
    ? [
        {
          title: 'Audit de trajectoire industrielle',
          bullets: [
            'Identifier dependances critiques et points de non-retour.',
            'Mesurer la robustesse des scenarios avant engagement.',
            'Prioriser les arbitrages a impact COMEX.'
          ]
        },
        {
          title: 'Evidence Pack',
          bullets: [
            'Structurer la chaine de preuve conformite et AO.',
            'Produire un dossier tender-ready au premier filtre.',
            'Standardiser la tracabilite documentaire.'
          ]
        },
        {
          title: 'Monitoring intelligence',
          bullets: [
            'Surveiller signaux publics et evolutions reglementaires.',
            'Qualifier les alertes selon impact execution.',
            'Soutenir les arbitrages tactiques recurrents.'
          ]
        }
      ]
    : [
        {
          title: 'Industrial trajectory audit',
          bullets: [
            'Identify critical dependencies and no-return points.',
            'Assess scenario robustness before commitment.',
            'Prioritize executive arbitrations with material impact.'
          ]
        },
        {
          title: 'Evidence Pack',
          bullets: [
            'Structure the compliance and tender proof chain.',
            'Deliver a tender-ready dossier for first-stage screening.',
            'Standardize documentary traceability.'
          ]
        },
        {
          title: 'Monitoring intelligence',
          bullets: [
            'Track public signals and regulatory changes.',
            'Qualify alerts by execution impact.',
            'Support recurring tactical arbitrations.'
          ]
        }
      ];

  const packages = isFr
    ? [
        {
          name: 'Diagnostic industriel',
          duration: '10 jours',
          body: 'Lecture rapide des trajectoires a risque, dependances critiques et decisions a securiser.'
        },
        {
          name: 'Evidence Pack',
          duration: '30 jours',
          body: 'Dossier conforme et opposable pour appels d offres et obligations de controle.'
        },
        {
          name: 'Monitoring continu',
          duration: 'Mensuel',
          body: 'Surveillance tactique, alertes prioritaires et revue d arbitrage avec vos equipes.'
        }
      ]
    : [
        {
          name: 'Industrial diagnostic',
          duration: '10 days',
          body: 'Rapid readout of risky trajectories, critical dependencies, and decisions to secure.'
        },
        {
          name: 'Evidence Pack',
          duration: '30 days',
          body: 'Compliant and auditable dossier for tenders and control obligations.'
        },
        {
          name: 'Continuous monitoring',
          duration: 'Monthly',
          body: 'Tactical monitoring, priority alerts, and arbitration review with your teams.'
        }
      ];

  return (
    <section className="bg-white py-14 sm:py-20 text-black">
      <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12 px-4 sm:px-6">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-light sm:text-4xl">{isFr ? 'Services' : 'Services'}</h1>
          <p className="mt-4 text-lg leading-8">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link href={`/${params.locale}/contact`} className="btn btn-primary w-full text-center sm:w-auto">
              {isFr ? 'Demander un cadrage 30 min' : 'Book a 30-minute scoping call'}
            </Link>
            <Link href={`/${params.locale}/evidence-pack`} className="btn border border-black bg-white text-black hover:opacity-80 w-full text-center sm:w-auto">
              {isFr ? 'Recevoir un exemple d Evidence Pack' : 'Request an Evidence Pack sample'}
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((s, idx) => (
            <div key={`${idx}-${s.title}`} className="border border-black bg-white p-8">
              <h2 className="text-xl font-light">{s.title}</h2>
              <ul className="mt-4 list-disc space-y-1 pl-5">
                {s.bullets.map((b, i) => (
                  <li key={`${i}-${b}`}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border border-black bg-white p-8">
          <h2 className="text-2xl font-light">{isFr ? 'Offre packagee' : 'Packaged offers'}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {packages.map((pack, idx) => (
              <article key={`${idx}-${pack.name}`} className="border border-black p-6">
                <p className="text-sm uppercase tracking-wide text-[var(--forest-green)]">{pack.duration}</p>
                <h3 className="mt-2 text-xl font-light">{pack.name}</h3>
                <p className="mt-3 leading-7">{pack.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
