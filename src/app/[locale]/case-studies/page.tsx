import Link from 'next/link';

const cases = [
  {
    slugFr: 'industrie-agroalimentaire',
    slugEn: 'food-industry-decision-system',
    titleFr: 'Systeme decisionnel pour groupe agroalimentaire',
    titleEn: 'Decision system for food-industry group'
  },
  {
    slugFr: 'cabinet-avocats',
    slugEn: 'corporate-law-firm',
    titleFr: 'Plateforme d intelligence pour cabinet d avocats',
    titleEn: 'Corporate law firm intelligence platform'
  },
  {
    slugFr: 'intelligence-construction',
    slugEn: 'construction-intelligence',
    titleFr: 'Intelligence marche pour PME du BTP',
    titleEn: 'Construction SME market intelligence'
  }
];

export default function CaseStudiesList({params}: {params: {locale: 'fr' | 'en'}}) {
  const isFr = params.locale === 'fr';

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-light">{isFr ? 'Etudes de cas' : 'Case studies'}</h1>
          <p className="mt-4 text-lg leading-8">
            {isFr
              ? 'Cas concrets de reduction du risque decisionnel: decision prise, risque evite, preuve livree.'
              : 'Concrete decision-risk reduction cases: decision made, risk avoided, proof delivered.'}
          </p>
        </div>

        <div className="border border-black bg-white p-8">
          <h2 className="text-2xl font-light">
            {isFr ? 'Cas detaille: groupe agroalimentaire' : 'Detailed case: food-industry group'}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>{isFr ? 'Avant: arbitrages capacite et conformite traites en silos.' : 'Before: capacity and compliance decisions handled in silos.'}</li>
            <li>{isFr ? 'Apres: matrice dependances et evidence pack unique pour COMEX + achats.' : 'After: unified dependency matrix and evidence pack for executive and procurement teams.'}</li>
            <li>{isFr ? 'Impact: delai d arbitrage reduit de 35% et zero rejet au premier filtre AO sur 2 trimestres.' : 'Impact: 35% faster arbitration and zero first-stage tender rejection across two quarters.'}</li>
          </ul>
          <Link href={`/${params.locale}/${isFr ? 'case-studies/industrie-agroalimentaire' : 'case-studies/food-industry-decision-system'}`} className="mt-5 inline-block underline">
            {isFr ? 'Lire le cas detaille' : 'Read full case'}
          </Link>
        </div>

        <div className="space-y-4">
          {cases.map((c) => {
            const slug = isFr ? c.slugFr : c.slugEn;
            const title = isFr ? c.titleFr : c.titleEn;
            return (
              <div key={slug} className="border border-black p-6">
                <Link href={`/${params.locale}/case-studies/${slug}`} className="underline">
                  {title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
