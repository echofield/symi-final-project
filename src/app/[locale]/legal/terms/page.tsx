import Link from 'next/link';

const LAST_UPDATED = '2026-02-13';

export default function TermsPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const isFr = params.locale === 'fr';

  return (
    <section className="bg-white py-14 sm:py-20 text-black">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <div>
          <h1 className="text-3xl font-light sm:text-4xl">{isFr ? 'Conditions generales' : 'Terms and conditions'}</h1>
          <p className="mt-2 text-sm">{isFr ? 'Derniere mise a jour' : 'Last updated'}: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-6 leading-7">
          <section>
            <h2 className="text-xl font-light">{isFr ? '1. Objet et perimetre' : '1. Scope'}</h2>
            <p className="mt-2">
              {isFr
                ? 'SYMI fournit des prestations d analyse decisionnelle, de structuration documentaire et de monitoring tactique. Les livrables soutiennent la decision mais ne remplacent ni conseil juridique ni decision humaine finale.'
                : 'SYMI provides decision-analysis, documentary structuring, and tactical monitoring services. Deliverables support decision-making but do not replace legal advice or final human decision-making.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '2. Engagements de service' : '2. Service commitments'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les delais, livrables, canaux de communication et niveaux de service sont definis au contrat. Les estimations fournies sur le site sont indicatives.'
                : 'Timelines, deliverables, communication channels, and service levels are defined in the applicable contract. Website estimates are indicative only.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '3. Propriete intellectuelle' : '3. Intellectual property'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les methodes, composants et outillages SYMI restent la propriete de SYMI. Les livrables contractuels remis au client sont utilisables selon les droits definis au contrat.'
                : 'SYMI methods, components, and tooling remain SYMI property. Contractual client deliverables may be used according to the rights defined in the contract.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '4. Confidentialite et securite' : '4. Confidentiality and security'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Chaque partie protege les informations confidentielles de l autre. Les mesures de securite et obligations de notification d incident sont definies contractuellement.'
                : 'Each party protects the other party confidential information. Security measures and incident notification duties are defined contractually.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '5. Usage d IA et limites' : '5. AI use and limitations'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Certaines fonctions peuvent utiliser des systemes d IA pour assister la production. SYMI applique une revue humaine sur les livrables critiques. Aucune decision client n est prise automatiquement par SYMI.'
                : 'Some functions may use AI systems to assist production. SYMI applies human review on critical deliverables. No client decision is made automatically by SYMI.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '6. Responsabilite' : '6. Liability'}</h2>
            <p className="mt-2">
              {isFr
                ? 'SYMI est tenue a une obligation de moyens. Sauf faute lourde, sa responsabilite globale est limitee au montant facture au titre de la prestation concernee.'
                : 'SYMI is bound by a best-efforts obligation. Except in case of gross negligence, total liability is limited to the amount invoiced for the relevant service.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '7. Droit applicable et juridiction' : '7. Governing law and jurisdiction'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Sauf stipulation contraire au contrat, les presentes conditions sont soumises au droit francais. Les litiges relevent des juridictions competentes du ressort du siege social.'
                : 'Unless otherwise agreed in contract, these terms are governed by French law. Disputes are submitted to competent courts in the registered office jurisdiction.'}
            </p>
          </section>
        </div>

        <p className="text-sm">
          {isFr ? 'Pour toute question: ' : 'For any question: '}
          <Link href={`/${params.locale}/contact`} className="underline">contact@symi.io</Link>
        </p>
      </div>
    </section>
  );
}
