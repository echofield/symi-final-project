import type {Metadata} from 'next';
import Link from 'next/link';
import {buildLocalizedMetadata} from '../../../../lib/schema';
import {legalProfile} from '../../../../lib/legal';

const LAST_UPDATED = '2026-02-13';

export async function generateMetadata({params}: {params: {locale: 'fr' | 'en'}}): Promise<Metadata> {
  return buildLocalizedMetadata({
    locale: params.locale,
    path: '/legal/terms',
    title: params.locale === 'fr' ? 'SYMI | Conditions generales' : 'SYMI | Terms and conditions',
    description:
      params.locale === 'fr'
        ? 'Cadre contractuel des services SYMI: perimetre, responsabilite, confidentialite, IA et droit applicable.'
        : 'Contractual framework for SYMI services: scope, liability, confidentiality, AI use, and governing law.'
  });
}

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
            <h2 className="text-xl font-light">{isFr ? '1. Perimetre' : '1. Scope'}</h2>
            <p className="mt-2">
              {isFr
                ? 'SYMI fournit des prestations d audit decisionnel, de structuration Evidence Pack et de monitoring tactique. Les livrables sont des supports d arbitrage: la decision finale reste sous responsabilite client.'
                : 'SYMI provides decision-audit, Evidence Pack structuring, and tactical monitoring services. Deliverables are decision-support artifacts; final decisions remain under client responsibility.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '2. Contractualisation' : '2. Contracting'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Le detail des livrables, delais, hypotheses, niveaux de service et prix est fixe dans le contrat ou bon de commande. Le contenu du site n a pas valeur contractuelle.'
                : 'Deliverables, timing, assumptions, service levels, and pricing are set in the applicable contract or purchase order. Website content is non-contractual.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '3. Obligations des parties' : '3. Party obligations'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Le client fournit des informations exactes et l acces necessaire. SYMI applique une obligation de moyens, de tracabilite documentaire et de revue humaine sur les livrables critiques.'
                : 'The client provides accurate information and required access. SYMI is bound by best-efforts obligations, documentary traceability, and human review on critical outputs.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '4. Propriete intellectuelle' : '4. Intellectual property'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les methodes et composants SYMI restent sa propriete. Les livrables remis au client sont exploitables dans le cadre des droits definis au contrat.'
                : 'SYMI methods and components remain its property. Client deliverables may be used within the rights defined in contract.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '5. Confidentialite et securite' : '5. Confidentiality and security'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les parties protegent les informations confidentielles. Les obligations de securite, notification d incident et mesures correctives sont traitees contractuellement.'
                : 'Parties protect confidential information. Security duties, incident notification, and corrective measures are handled contractually.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '6. IA et transparence' : '6. AI and transparency'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Des systemes d IA peuvent assister certaines etapes analytiques ou documentaires. Aucune decision client n est automatisee par SYMI sans validation humaine explicite.'
                : 'AI systems may assist selected analytical or documentary stages. No client decision is automated by SYMI without explicit human validation.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '7. Responsabilite' : '7. Liability'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Sauf faute lourde ou dol, la responsabilite totale de SYMI est plafonnee au montant facture au titre de la prestation concernee sur les 12 derniers mois.'
                : 'Except in case of gross negligence or willful misconduct, SYMI total liability is capped at invoiced amounts for the relevant service over the previous 12 months.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '8. Suspension et resiliation' : '8. Suspension and termination'}</h2>
            <p className="mt-2">
              {isFr
                ? 'En cas de manquement grave non corrige dans un delai raisonnable apres notification, la partie non defaillante peut suspendre ou resilier les prestations.'
                : 'In case of material breach not cured within a reasonable notice period, the non-breaching party may suspend or terminate services.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '9. Droit applicable' : '9. Governing law'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Sauf stipulation contraire au contrat, les presentes conditions sont regies par le droit francais. Juridiction competente: ressort du siege social de la societe editrice.'
                : 'Unless otherwise agreed in contract, these terms are governed by French law. Competent jurisdiction: courts of the publisher registered office district.'}
            </p>
          </section>
        </div>

        <div className="border border-black p-5 text-sm leading-7">
          <p>{legalProfile.legalEntity}</p>
          <p>{legalProfile.registeredOffice}</p>
          <p>{isFr ? 'Contact' : 'Contact'}: {legalProfile.contactEmail}</p>
        </div>

        <p className="text-sm">
          {isFr ? 'Voir aussi: ' : 'See also: '}
          <Link href={`/${params.locale}/legal/privacy`} className="underline">
            {isFr ? 'Politique de confidentialite' : 'Privacy policy'}
          </Link>
        </p>
      </div>
    </section>
  );
}
