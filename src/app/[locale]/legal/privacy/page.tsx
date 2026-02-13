import Link from 'next/link';

const LAST_UPDATED = '2026-02-13';

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
            <p className="mt-2">
              {isFr
                ? 'Le responsable du traitement est SYMI. Contact: contact@symi.io.'
                : 'The data controller is SYMI. Contact: contact@symi.io.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '2. Donnees traitees' : '2. Data processed'}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{isFr ? 'Identite et coordonnees (nom, email, societe).' : 'Identity and contact details (name, email, company).'}</li>
              <li>{isFr ? 'Contenu des demandes transmises via le formulaire de contact.' : 'Request content submitted via contact form.'}</li>
              <li>{isFr ? 'Donnees techniques minimales de fonctionnement (logs applicatifs).' : 'Minimal technical operation data (application logs).'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '3. Finalites et bases legales' : '3. Purposes and legal bases'}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{isFr ? 'Reponse a une demande commerciale: mesures precontractuelles / interet legitime.' : 'Response to commercial inquiry: pre-contractual steps / legitimate interest.'}</li>
              <li>{isFr ? 'Gestion de la relation client: execution contractuelle.' : 'Client relationship management: contractual necessity.'}</li>
              <li>{isFr ? 'Securite et prevention des abus: interet legitime.' : 'Security and abuse prevention: legitimate interest.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '4. Duree de conservation' : '4. Retention period'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les donnees de contact sont conservees le temps necessaire au traitement de la demande, puis archivees selon les obligations legales et contractuelles applicables.'
                : 'Contact data is retained for the time needed to process the request, then archived according to applicable legal and contractual obligations.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '5. Destinataires et sous-traitants' : '5. Recipients and processors'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les donnees peuvent etre traitees par des prestataires techniques strictement necessaires au service (hebergement, email transactionnel), agissant comme sous-traitants.'
                : 'Data may be processed by technical providers strictly required for service operation (hosting, transactional email), acting as processors.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '6. Vos droits' : '6. Your rights'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Vous disposez des droits d acces, rectification, effacement, opposition, limitation et portabilite selon la reglementation applicable. Exercice des droits: contact@symi.io.'
                : 'You may exercise access, rectification, erasure, objection, restriction, and portability rights under applicable law. Rights requests: contact@symi.io.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? '7. IA, decision assistee et AI Act' : '7. AI-assisted decision support and AI Act'}</h2>
            <p className="mt-2">
              {isFr
                ? 'SYMI peut utiliser des systemes d IA en support de production documentaire et de monitoring. Les resultats ne remplacent pas une revue humaine et ne constituent pas une decision automatisee au sens strict.'
                : 'SYMI may use AI systems to support documentary production and monitoring. Outputs do not replace human review and are not fully automated decisions in the strict legal sense.'}
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
