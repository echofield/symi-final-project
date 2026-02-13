import Link from 'next/link';

interface Params {
  params: {locale: 'fr' | 'en'; slug: string};
}

type CaseEntry = {
  title: string;
  client?: string;
  challengeTitle: string;
  challengeBody: string;
  solutionTitle: string;
  solutionItems: string[];
  resultsTitle: string;
  resultsItems: string[];
  proofTitle: string;
  proofItems: string[];
};

const CONTENT: Record<'fr' | 'en', Record<string, CaseEntry>> = {
  fr: {
    'industrie-agroalimentaire': {
      title: 'Systeme decisionnel pour groupe agroalimentaire',
      client: 'Groupe multi-sites, activites transformation et distribution',
      challengeTitle: 'Avant',
      challengeBody: 'Decisions capacite, maintenance et conformite gerees par filieres separees. Delais d arbitrage longs et dossier AO incomplet.',
      solutionTitle: 'Intervention',
      solutionItems: [
        'Audit de trajectoire sur dependances critiques production, qualite, approvisionnement.',
        'Evidence Pack unique pour achats, conformite et direction industrielle.',
        'Monitoring tactique des signaux publics et contraintes reglementaires applicables.'
      ],
      resultsTitle: 'Apres',
      resultsItems: [
        'Delai d arbitrage reduit de 35%.',
        'Zero rejet au premier filtre AO sur 2 trimestres.',
        'Priorisation hebdomadaire des risques execution par site.'
      ],
      proofTitle: 'Preuves operationnelles',
      proofItems: [
        'Matrice dependances, contraintes, risques versionnee.',
        'Historique des arbitrages et justification documentaire.',
        'Journal des alertes critiques et actions correctives associees.'
      ]
    },
    'cabinet-avocats': {
      title: 'Plateforme d intelligence pour cabinet d avocats',
      client: 'Cabinet parisien de taille moyenne, 15 avocats',
      challengeTitle: 'Enjeu',
      challengeBody: 'Opportunites intersectorielles manquees et veille manuelle chronophage sur des bases publiques heterogenes.',
      solutionTitle: 'Solution',
      solutionItems: [
        'Veille automatisee de registres officiels, publications juridiques et plateformes de commande publique.',
        'Rapports hebdomadaires d intelligence par domaine de pratique.',
        'Alertes sur signaux urgents et mouvements concurrentiels.'
      ],
      resultsTitle: 'Resultats',
      resultsItems: [
        'Opportunites qualifiees identifiees plus tot.',
        'Cycle de decision commercial raccourci.',
        'Temps de recherche manuelle fortement reduit.'
      ],
      proofTitle: 'Preuves operationnelles',
      proofItems: [
        'Historique de detection horodate.',
        'Traite des sources officielles associees a chaque alerte.',
        'Suivi des actions commerciales post-detection.'
      ]
    },
    'intelligence-construction': {
      title: 'Intelligence marche pour PME du BTP',
      client: 'Entreprise de construction, 25 salaries',
      challengeTitle: 'Enjeu',
      challengeBody: 'Appels d offres et signaux reglementaires detectes trop tard, avec impact direct sur le pipeline projets.',
      solutionTitle: 'Solution',
      solutionItems: [
        'Tableau de bord sur mesure sur commande publique et bases reglementaires.',
        'Filtres geographiques sur zones cibles.',
        'Integration CRM pour orchestration des actions commerciales.'
      ],
      resultsTitle: 'Resultats',
      resultsItems: [
        'Hausse du volume d opportunites qualifiees.',
        'Pipeline projets augmente au trimestre.',
        'Gain de temps hebdomadaire sur la veille.'
      ],
      proofTitle: 'Preuves operationnelles',
      proofItems: [
        'Comparatif avant/apres du taux de qualification.',
        'Liste des signaux sources ayant declenche une action.',
        'Traite des decisions et outcomes par opportunite.'
      ]
    }
  },
  en: {
    'food-industry-decision-system': {
      title: 'Decision system for food-industry group',
      client: 'Multi-site group across processing and distribution',
      challengeTitle: 'Before',
      challengeBody: 'Capacity, maintenance, and compliance decisions were managed in silos. Arbitration was slow and tender files were incomplete.',
      solutionTitle: 'Intervention',
      solutionItems: [
        'Trajectory audit across production, quality, and supply dependencies.',
        'Single Evidence Pack shared by procurement, compliance, and industrial leadership.',
        'Tactical monitoring of public signals and applicable regulatory constraints.'
      ],
      resultsTitle: 'After',
      resultsItems: [
        '35% faster decision arbitration.',
        'Zero first-stage tender rejection over two quarters.',
        'Weekly execution-risk prioritization by site.'
      ],
      proofTitle: 'Operational proof',
      proofItems: [
        'Versioned dependencies, constraints, and risk matrix.',
        'Decision log with documentary justification.',
        'Critical-alert journal with linked corrective actions.'
      ]
    },
    'corporate-law-firm': {
      title: 'Corporate law firm intelligence platform',
      client: 'Mid-size Paris law firm, 15 attorneys',
      challengeTitle: 'Challenge',
      challengeBody: 'Cross-sector opportunities were missed and public-source monitoring remained manual and time-consuming.',
      solutionTitle: 'Solution',
      solutionItems: [
        'Automated monitoring of official registries, legal publications, and public procurement platforms.',
        'Weekly intelligence reports by practice area.',
        'Alerts on urgent risk signals and competitive moves.'
      ],
      resultsTitle: 'Results',
      resultsItems: [
        'Qualified opportunities detected earlier.',
        'Shorter commercial decision cycles.',
        'Substantial reduction in manual research time.'
      ],
      proofTitle: 'Operational proof',
      proofItems: [
        'Timestamped detection history.',
        'Official source trace for each alert.',
        'Post-detection commercial action tracking.'
      ]
    },
    'construction-intelligence': {
      title: 'Construction SME market intelligence',
      client: 'Construction company, 25 employees',
      challengeTitle: 'Challenge',
      challengeBody: 'Tender opportunities and regulatory signals were detected too late, directly affecting project pipeline quality.',
      solutionTitle: 'Solution',
      solutionItems: [
        'Custom dashboard across procurement and regulatory sources.',
        'Geographic filters for target zones.',
        'CRM integration to orchestrate commercial actions.'
      ],
      resultsTitle: 'Results',
      resultsItems: [
        'Higher volume of qualified opportunities.',
        'Stronger quarterly project pipeline.',
        'Weekly time savings on market monitoring.'
      ],
      proofTitle: 'Operational proof',
      proofItems: [
        'Before/after qualification-rate comparison.',
        'Source-signal list triggering each action.',
        'Decision and outcome trace by opportunity.'
      ]
    }
  }
};

export default function CaseStudyPage({params}: Params) {
  const {locale, slug} = params;
  const entry = CONTENT[locale][slug];
  if (!entry) return null;

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl space-y-6 px-6">
        <h1 className="text-4xl font-light">{entry.title}</h1>
        {entry.client && <p className="text-lg">{entry.client}</p>}

        <div className="border border-black p-6">
          <h2 className="text-xl font-light">{entry.challengeTitle}</h2>
          <p className="mt-2 leading-7">{entry.challengeBody}</p>
        </div>

        <div className="border border-black p-6">
          <h2 className="text-xl font-light">{entry.solutionTitle}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {entry.solutionItems.map((it, idx) => (
              <li key={`${idx}-${it}`}>{it}</li>
            ))}
          </ul>
        </div>

        <div className="border border-black p-6">
          <h2 className="text-xl font-light">{entry.resultsTitle}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {entry.resultsItems.map((it, idx) => (
              <li key={`${idx}-${it}`}>{it}</li>
            ))}
          </ul>
        </div>

        <div className="border border-black p-6">
          <h2 className="text-xl font-light">{entry.proofTitle}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {entry.proofItems.map((it, idx) => (
              <li key={`${idx}-${it}`}>{it}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href={`/${locale}/contact`} className="btn btn-primary">
            {locale === 'fr' ? 'Demander un cadrage 30 min' : 'Book a 30-minute scoping call'}
          </Link>
          <Link href={`/${locale}/evidence-pack`} className="btn border border-black bg-white text-black hover:opacity-80">
            {locale === 'fr' ? 'Recevoir un exemple d Evidence Pack' : 'Request an Evidence Pack sample'}
          </Link>
        </div>
      </div>
    </section>
  );
}
