interface Params { params: { locale: 'fr' | 'en'; slug: string } }

const CONTENT = {
  fr: {
    'cabinet-avocats': { title: "Cabinet d’avocats — Veille juridique augmentée", impact: "−30 h/sem sur veille & argumentaires" },
    'asset-manager': { title: 'Asset Manager — Ops immobilières pilotées par la donnée', impact: 'Reporting consolidé, risques juridiques réduits' },
    'promoteur': { title: 'Promoteur — Due diligence & suivi réglementaire', impact: 'Décisions plus rapides, conformité maîtrisée' }
  },
  en: {
    'law-firm': { title: 'Law firm — Augmented legal watch', impact: '−30 h/week on monitoring & briefs' },
    'asset-manager': { title: 'Asset Manager — Data-driven RE ops', impact: 'Consolidated reporting, legal risk reduced' },
    'developer': { title: 'Developer — Due diligence & regulatory tracking', impact: 'Faster decisions, controlled compliance' }
  }
} as const;

export default function CaseStudyPage({ params }: Params) {
  const { locale, slug } = params;
  const dict = CONTENT[locale as 'fr' | 'en'];
  const entry = dict[slug as keyof typeof dict];
  if (!entry) return null;
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light">{entry.title}</h1>
        <p className="mt-4 text-lg">Impact: {entry.impact}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="border border-black p-6">Context — placeholder</div>
          <div className="border border-black p-6">Solution — placeholder</div>
          <div className="border border-black p-6">Stack — placeholder</div>
          <div className="border border-black p-6">Impact — metrics placeholder</div>
        </div>
      </div>
    </section>
  );
}


