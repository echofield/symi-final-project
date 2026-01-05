import Link from 'next/link';

const approach = [
  {
    name: 'Discover',
    copy: 'Audit your current workflow, systems, and hidden friction points to define the real bottlenecks.',
  },
  {
    name: 'Design',
    copy: 'Translate the ideal future state into wireframes, service blueprints, and implementation roadmap.',
  },
  {
    name: 'Develop',
    copy: 'Ship production-ready software in phases with weekly reviews and stakeholder alignment.',
  },
  {
    name: 'Deliver',
    copy: 'Deploy, train teams, and provide post-launch support so the new system becomes everyday operations.',
  },
];

export default function HomeLocalePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
            Operations Intelligence for Growth-Stage Firms
          </h1>
          <p className="mt-6 text-lg leading-8 text-black sm:text-xl">
            We don't predict satisfactions, desires, or markets. We map the constraints others ignore—and show where they turn into leverage.
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">
            Two systems. One goal: you win more.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-8">
              <h2 className="text-xl font-light text-black">Opportunity Detection</h2>
              <p className="mt-3 text-base leading-7 text-black">
                Intelligence platforms that monitor legal, regulatory, and market signals—surfacing opportunities your competitors miss.
              </p>
              <div className="mt-6">
                <Link href="/intelligence" className="btn btn-primary">Explore Intelligence</Link>
              </div>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h2 className="text-xl font-light text-black">Evidence & Compliance</h2>
              <p className="mt-3 text-base leading-7 text-black">
                Production documentaire pour PME en transformation. Conformité AI Act, NIS2, dossiers marchés publics.
              </p>
              <div className="mt-6">
                <Link href="/evidence-pack" className="btn btn-primary">Voir Evidence Pack</Link>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm font-light uppercase tracking-widest text-black">
            Law Firms • Construction • Finance • Real Estate • Consulting • PME en transformation digitale
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Two Ways We Help You Win</h2>
            <p className="mt-4 text-lg text-black">
              Most firms chase signals. We start somewhere else: the rules of the game, the constraints that shape what's possible, and the gaps where opportunity lives. Whether you need to detect openings or prove you're ready to win them—we build the system.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Opportunity Detection Engines</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-black">
                <li>Automated monitoring of bankruptcies, regulatory changes, public tenders, market movements</li>
                <li>Cross-source intelligence (legal databases, government registries, financial filings)</li>
                <li>Custom alert systems calibrated to your expertise and geography</li>
                <li>Weekly intelligence delivery with confidence scoring</li>
              </ul>
              <p className="mt-4 text-base leading-7 text-black">
                We don't scan for keywords. We model the rule landscape of your industry—then surface what shifts.
              </p>
              <div className="mt-6">
                <a href="mailto:contact@symi.io" className="btn btn-primary">Request Intelligence Analysis</a>
              </div>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Evidence Pack — Conformité & Marchés Publics</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-black">
                <li>Analyse de classification AI Act + gap map (niveau de risque, obligations)</li>
                <li>Kit documentaire réutilisable (politiques, registres, gouvernance)</li>
                <li>Annexes "tender-ready" (DC1, DC2, DUME, mémoire technique)</li>
                <li>Option NIS2 : dossier de maturité + preuves minimales</li>
              </ul>
              <div className="mt-4 space-y-2 text-base leading-7 text-black">
                <p>Livraison : 10 jours ouvrés</p>
                <p>Pour : PME accompagnées par EDIH, EEN, clusters / Candidats marchés publics / Startups AI "high-risk"</p>
                <p>This is not certification or legal advice. It's an operational documentation pack designed to pass first scrutiny.</p>
              </div>
              <p className="mt-4 text-base leading-7 text-black">
                Compliance isn't about checking boxes. It's about proving you understand the constraints before anyone asks.
              </p>
              <div className="mt-6">
                <a href="mailto:contact@symi.io" className="btn btn-primary">Demander un exemple de livrable</a>
                <p className="mt-2 text-sm text-black">Extraits anonymisés, sans engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-black">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">Case Study Highlight</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-8">
              <h2 className="text-2xl font-light">Corporate Law Firm Intelligence Platform</h2>
              <p className="mt-4 text-lg text-black">Mid-size Paris law firm, 15 attorneys</p>
              <ul className="mt-6 space-y-3 text-base leading-7 text-black">
                <li>• Automated monitoring of commercial registries, legal publications, and procurement platforms</li>
                <li>• Weekly intelligence reports by practice area</li>
                <li>• Alerts for urgent client risks and competitive movements</li>
              </ul>
              <div className="mt-8"><Link href="/case-studies" className="btn btn-primary">View Full Case Study</Link></div>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h2 className="text-2xl font-light">Evidence Pack — Startup HealthTech</h2>
              <p className="mt-4 text-lg text-black">Startup IA santé, 12 personnes, candidature marché public</p>
              <ul className="mt-6 space-y-3 text-base leading-7 text-black">
                <li>• Analyse de classification AI Act (probable high-risk — dispositif médical)</li>
                <li>• Gap map priorisé (gouvernance, documentation technique)</li>
                <li>• Dossier tender-ready livré en 8 jours</li>
              </ul>
              <div className="mt-8"><Link href="/case-studies" className="btn btn-primary">Voir l'étude de cas</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">How we work</h2>
            <p className="mt-4 text-lg text-black">
              Every engagement starts by mapping constraints—what's allowed, what's ignored, what's about to shift. The phases below are how we turn that map into systems you own.
            </p>
            <p className="mt-4 text-lg text-black">
              Projects are structured by phase with a typical 4–16 week delivery window depending on complexity. You keep
              full ownership of the codebase and assets produced.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div key={step.name} className="rounded-none border border-black bg-white p-8">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">{step.name}</p>
                <p className="mt-3 text-base leading-7 text-black">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl rounded-none border border-black bg-white px-6 py-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            Prêt à voir les contraintes que vos concurrents ignorent ?
          </h2>
          <p className="mt-4 text-lg text-black">
            Let’s scope your workflow, align on outcomes, and outline a build plan calibrated to your team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/process" className="btn border border-black bg-white text-black hover:opacity-80">
              Our Approach
            </Link>
            <a href="mailto:contact@symi.io" className="btn btn-primary">Request a Structural Analysis</a>
          </div>
        </div>
      </section>
    </>
  );
}
