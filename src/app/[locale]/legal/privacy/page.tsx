import type {Metadata} from 'next';
import Link from 'next/link';
import {buildLocalizedMetadata} from '../../../../lib/schema';
import {legalProcessors, legalProfile} from '../../../../lib/legal';

const LAST_UPDATED = '2026-02-13';

export async function generateMetadata({params}: {params: {locale: 'fr' | 'en'}}): Promise<Metadata> {
  return buildLocalizedMetadata({
    locale: params.locale,
    path: '/legal/privacy',
    title: params.locale === 'fr' ? 'SYMI | Politique de confidentialite' : 'SYMI | Privacy policy',
    description:
      params.locale === 'fr'
        ? 'Traitement des donnees personnelles, bases legales, sous-traitants, transferts et droits des personnes.'
        : 'Processing of personal data, legal bases, processors, transfers, and data-subject rights.'
  });
}

export default function PrivacyPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const isFr = params.locale === 'fr';

  return (
    <section className="bg-white py-14 sm:py-20 text-black">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <div>
          <h1 className="text-3xl font-light sm:text-4xl">{isFr ? 'Politique de confidentialite' : 'Privacy policy'}</h1>
          <p className="mt-2 text-sm">{isFr ? 'Derniere mise a jour' : 'Last updated'}: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-6 leading-7">
          <section>
            <h2 className="text-xl font-light">{isFr ? '1. Responsable du traitement' : '1. Data controller'}</h2>
            <p className="mt-2">{legalProfile.legalEntity}</p>
            <p>{legalProfile.registeredOffice}</p>
            <p>{isFr ? 'Contact' : 'Contact'}: {legalProfile.contactEmail}</p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '2. Categories de donnees' : '2. Data categories'}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{isFr ? 'Identite et coordonnees professionnelles (nom, email, societe).' : 'Identity and professional contact details (name, email, company).'}</li>
              <li>{isFr ? 'Contenu des demandes et metadonnees de traitement.' : 'Request content and processing metadata.'}</li>
              <li>{isFr ? 'Logs techniques strictement necessaires a la securite et au fonctionnement.' : 'Technical logs strictly required for security and operations.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '3. Finalites et bases legales' : '3. Purposes and legal bases'}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{isFr ? 'Gestion des demandes entrantes: mesures precontractuelles / interet legitime.' : 'Incoming inquiry management: pre-contractual measures / legitimate interest.'}</li>
              <li>{isFr ? 'Execution des prestations: execution contractuelle.' : 'Service execution: contractual necessity.'}</li>
              <li>{isFr ? 'Securite, prevention de fraude et tracabilite: interet legitime.' : 'Security, fraud prevention, and traceability: legitimate interest.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '4. Duree de conservation' : '4. Retention'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les donnees sont conservees pendant la duree necessaire a la finalite, puis archivees selon les obligations legales, fiscales et contractuelles applicables.'
                : 'Data is retained for the duration required by purpose, then archived according to applicable legal, tax, and contractual obligations.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '5. Sous-traitants' : '5. Processors'}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {legalProcessors.map((processor, idx) => (
                <li key={`${idx}-${processor.name}`}>
                  {processor.name} - {isFr ? processor.roleFr : processor.roleEn}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '6. Transferts hors UE' : '6. Transfers outside the EU'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Certains traitements peuvent impliquer des transferts hors UE. Le cas echeant, des garanties appropriees sont appliquees (clauses contractuelles types et mesures de securite complementaires).'
                : 'Some processing may involve transfers outside the EU. Where applicable, appropriate safeguards are used (standard contractual clauses and supplementary security measures).'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '7. Vos droits' : '7. Your rights'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Vous pouvez exercer vos droits d acces, rectification, effacement, opposition, limitation et portabilite en ecrivant a '
                : 'You may exercise access, rectification, erasure, objection, restriction, and portability rights by writing to '}
              {legalProfile.dpoEmail}.
            </p>
            <p className="mt-1 text-sm">
              {isFr
                ? 'Vous pouvez egalement introduire une reclamation aupres de la CNIL.'
                : 'You may also lodge a complaint with your competent supervisory authority (e.g., CNIL in France).'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '8. IA et prise de decision' : '8. AI and decision-making'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les outils IA utilises par SYMI assistent l analyse et la production documentaire. Les decisions engageantes ne reposent pas sur un traitement automatise sans controle humain.'
                : 'AI tools used by SYMI support analysis and documentary production. Binding decisions do not rely on fully automated processing without human oversight.'}
            </p>
          </section>
        </div>

        <p className="text-sm">
          {isFr ? 'Voir aussi: ' : 'See also: '}
          <Link href={`/${params.locale}/legal/terms`} className="underline">
            {isFr ? 'Conditions generales' : 'Terms and conditions'}
          </Link>
        </p>
      </div>
    </section>
  );
}
