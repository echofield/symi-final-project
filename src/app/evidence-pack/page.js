import EvidencePackForm from '../../components/EvidencePackForm';

export const metadata = {
  title: 'Evidence Pack — Conformité AI Act, NIS2 & Marchés Publics | SYMI',
  description: 'Production documentaire pour PME : classification AI Act, gap map, dossiers tender-ready. Livré en 10 jours. Demandez un exemple.',
  openGraph: {
    title: 'Evidence Pack — Conformité AI Act, NIS2 & Marchés Publics | SYMI',
    description: 'Production documentaire pour PME : classification AI Act, gap map, dossiers tender-ready. Livré en 10 jours. Demandez un exemple.',
  },
};

export default function EvidencePackPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Evidence Pack</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-black sm:text-5xl">
            Evidence Pack — Conformité &amp; Marchés Publics
          </h1>
          <p className="mt-4 text-lg text-black sm:text-xl">Production documentaire pour PME en transformation digitale</p>
          <p className="mt-6 max-w-3xl text-lg text-black">
            Vous avez fait un diagnostic. Vous avez des recommandations. Mais qui produit les documents qui prouvent votre maturité ?
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a href="#contact" className="btn btn-primary">Demander un exemple de livrable</a>
            <span className="text-sm text-black">Extraits anonymisés, sans engagement.</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Le trou entre le diagnostic et la crédibilité</h2>
          <div className="mt-6 max-w-3xl space-y-6 text-lg text-black">
            <p>
              Après un accompagnement EDIH, un audit cyber, ou une phase de transformation IA, vous repartez avec des recommandations. Mais vos donneurs d&apos;ordre — publics ou privés — veulent des preuves.
            </p>
            <p>
              Sans documentation structurée, vous perdez des marchés. Pas parce que vous n&apos;êtes pas prêts, mais parce que vous ne pouvez pas le démontrer.
            </p>
            <p>
              L&apos;Evidence Pack comble ce trou. En 10 jours ouvrés, vous disposez d&apos;un dossier qui tient la route.
            </p>
            <p className="italic text-black">
              On ne prédit pas votre conformité. On cartographie les contraintes — et on produit les preuves.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Ce que vous recevez</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-6">
              <h3 className="text-xl font-light text-black">Classification AI Act</h3>
              <p className="mt-3 text-base text-black">Analyse de votre niveau de risque probable et des obligations associées.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <h3 className="text-xl font-light text-black">Gap Map priorisé</h3>
              <p className="mt-3 text-base text-black">Ce qui manque, classé par urgence et par impact. Actionnable immédiatement.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <h3 className="text-xl font-light text-black">Kit documentaire</h3>
              <p className="mt-3 text-base text-black">Politiques, registres, gouvernance. Des documents remplis et cohérents — pas des modèles vides.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <h3 className="text-xl font-light text-black">Annexes tender-ready</h3>
              <p className="mt-3 text-base text-black">DC1, DC2, DUME, mémoire technique. Prêts à être joints à vos candidatures.</p>
            </div>
          </div>
          <div className="mt-6 max-w-3xl rounded-none border border-black bg-white px-6 py-4 text-sm text-black">
            Option NIS2 : dossier de maturité cyber + preuves minimales exigibles par vos clients ou acheteurs publics.
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Ce n&apos;est pas une certification ni un conseil juridique. C&apos;est un dossier opérationnel conçu pour passer le premier niveau de scrutin.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Comment ça marche</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">Cadrage (Jour 1–2)</p>
              <p className="mt-3 text-base text-black">
                Appel de 30 minutes. On définit le périmètre : AI Act, NIS2, marchés publics — ou les trois.
              </p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">Production (Jour 3–8)</p>
              <p className="mt-3 text-base text-black">On produit les documents. Vous relisez. On ajuste.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">Livraison (Jour 10)</p>
              <p className="mt-3 text-base text-black">Dossier complet livré. Formats éditables. Vous êtes autonomes pour la suite.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Pour qui</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-none border border-black bg-white p-6">
              <h3 className="text-xl font-light text-black">PME accompagnées</h3>
              <p className="mt-3 text-base text-black">
                Vous sortez d&apos;un parcours EDIH, EEN ou cluster. Vous devez transformer des recommandations en documents concrets.
              </p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <h3 className="text-xl font-light text-black">Candidats aux marchés publics</h3>
              <p className="mt-3 text-base text-black">
                Vous répondez à des appels d&apos;offres et perdez du temps sur l&apos;administratif et la conformité.
              </p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <h3 className="text-xl font-light text-black">Startups IA réglementées</h3>
              <p className="mt-3 text-base text-black">
                Vous développez de l&apos;IA dans un domaine sensible (santé, RH, éducation, finance) et devez prouver votre sérieux avant août 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Exemple de livrable</h2>
          <div className="mt-8 max-w-3xl rounded-none border border-black bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">
              Startup IA santé — 12 personnes — candidature marché public
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-black">
              <li>Analyse de classification AI Act (probable high-risk — dispositif médical)</li>
              <li>Gap map priorisé (gouvernance, documentation technique)</li>
              <li>Dossier tender-ready livré en 8 jours</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#contact" className="btn btn-primary">Demander un exemple de livrable</a>
            <span className="text-sm text-black">Extraits anonymisés, sans engagement.</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Tarification</h2>
          <p className="mt-4 text-lg text-black">Chaque Evidence Pack est cadré sur mesure. Fourchette indicative :</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">Starter</p>
              <p className="mt-4 text-2xl font-light text-black">4 000 € à 8 000 €</p>
              <p className="mt-3 text-base text-black">Classification AI Act + gap map + kit documentaire de base</p>
            </div>
            <div className="rounded-none border border-black bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">Complet</p>
              <p className="mt-4 text-2xl font-light text-black">12 000 € à 20 000 €</p>
              <p className="mt-3 text-base text-black">Pack complet avec annexes tender-ready + option NIS2</p>
            </div>
          </div>
          <p className="mt-6 text-base text-black">Devis sous 48h après l&apos;appel de cadrage.</p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            Prêt à avoir un dossier qui tient la route ?
          </h2>
          <EvidencePackForm />
          <p className="mt-4 text-sm text-black">Réponse sous 24h. Extraits anonymisés, sans engagement.</p>
          <p className="mt-6 text-sm text-black">Ou écrivez-nous directement : <a href="mailto:contact@symi.io" className="underline">contact@symi.io</a></p>
        </div>
      </section>
    </>
  );
}
