interface Params { params: { locale: 'fr' | 'en'; slug: string } }

type CaseEntry = {
  title: string;
  client?: string;
  challengeTitle: string;
  challengeBody: string;
  solutionTitle: string;
  solutionItems: string[];
  resultsTitle: string;
  resultsItems: string[];
};

const CONTENT: Record<'fr' | 'en', Record<string, CaseEntry>> = {
  fr: {
    'cabinet-avocats': {
      title: "Plateforme d’intelligence pour cabinet d’avocats",
      client: "Cabinet parisien de taille moyenne, 15 avocats",
      challengeTitle: 'Enjeu',
      challengeBody: "Opportunités intersectorielles manquées : clients entrant en procédures collectives, changements réglementaires impactant les participations, appels d’offres publics nécessitant un conseil juridique spécialisé.",
      solutionTitle: 'Solution',
      solutionItems: [
        "Veille automatisée de bases officielles : registres du commerce, publications juridiques, plateformes de commande publique",
        "Rapports hebdomadaires d’intelligence par domaine de pratique",
        "Système d’alertes pour risques clients urgents et mouvements concurrentiels"
      ],
      resultsTitle: 'Résultats',
      resultsItems: [
        "180 k€+ d’opportunités nouvelles identifiées mensuellement",
        "3–4 missions supplémentaires conclues par trimestre",
        "Aucune recherche manuelle demandée aux avocats"
      ]
    },
    'intelligence-construction': {
      title: 'Intelligence marché pour PME du BTP',
      client: "Entreprise de construction à Lyon, 25 salariés",
      challengeTitle: 'Enjeu',
      challengeBody: "Réactivité insuffisante. Appels d’offres manqués, permis de construire non détectés dans les zones cibles, retard sur mises à jour réglementaires.",
      solutionTitle: 'Solution',
      solutionItems: [
        "Tableau de bord sur mesure : cadastre, commande publique, bases réglementaires",
        "Filtres géographiques pour Rhône-Alpes avec alertes sectorielles",
        "Intégration au CRM interne pour le suivi des opportunités"
      ],
      resultsTitle: 'Résultats',
      resultsItems: [
        "8 appels d’offres qualifiés par mois (vs 2 auparavant)",
        "500 k€+ de pipeline projets dès le premier trimestre",
        "15 h/sem gagnées sur la veille marché"
      ]
    }
  },
  en: {
    'corporate-law-firm': {
      title: 'Corporate Law Firm Intelligence Platform',
      client: 'Mid-size Paris law firm, 15 attorneys',
      challengeTitle: 'Challenge',
      challengeBody: 'Missing cross-industry opportunities: clients entering bankruptcy proceedings, regulatory changes affecting their portfolio companies, and public tenders requiring specialized legal counsel.',
      solutionTitle: 'Solution',
      solutionItems: [
        'Automated monitoring of official government databases including commercial registries, legal publications, and public procurement platforms',
        'Weekly intelligence reports highlighting opportunities by practice area',
        'Alert system for urgent client risks and competitive movements'
      ],
      resultsTitle: 'Results',
      resultsItems: [
        '€180k+ in new business opportunities identified monthly',
        '3-4 additional client engagements closed per quarter',
        'Zero manual research time required from attorneys'
      ]
    },
    'construction-intelligence': {
      title: 'Construction PME Market Intelligence',
      client: 'Lyon-based construction firm, 25 employees',
      challengeTitle: 'Challenge',
      challengeBody: 'Reactive to market changes. Missing public tender opportunities, unaware of new building permits in target zones, late to regulatory updates affecting projects.',
      solutionTitle: 'Solution',
      solutionItems: [
        'Custom dashboard monitoring official land registry, public procurement, and regulatory databases',
        'Geographic filters for Rhône-Alpes region with sector-specific alerts',
        'Integration with internal CRM for opportunity tracking'
      ],
      resultsTitle: 'Results',
      resultsItems: [
        '8 qualified tender opportunities per month (vs 2 previously)',
        '€500k+ in new project pipeline within first quarter',
        '15 hours/week saved on market research'
      ]
    }
  }
};

export default function CaseStudyPage({ params }: Params) {
  const { locale, slug } = params;
  const dict = CONTENT[locale];
  const entry: CaseEntry | undefined = dict[slug];
  if (!entry) return null;
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light">{entry.title}</h1>
        {entry.client && <p className="mt-2 text-lg text-black">{entry.client}</p>}
        <div className="mt-8 grid gap-6">
          <div className="border border-black p-6">
            <h3 className="text-xl font-light">{entry.challengeTitle}</h3>
            <p className="mt-2 text-base leading-7 text-black">{entry.challengeBody}</p>
          </div>
          <div className="border border-black p-6">
            <h3 className="text-xl font-light">{entry.solutionTitle}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {entry.solutionItems.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
          <div className="border border-black p-6">
            <h3 className="text-xl font-light">{entry.resultsTitle}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {entry.resultsItems.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


