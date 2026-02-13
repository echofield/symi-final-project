import type {Metadata} from 'next';
import {buildLocalizedMetadata} from '../../../../lib/schema';
import {legalProfile} from '../../../../lib/legal';

const LAST_UPDATED = '2026-02-13';

export async function generateMetadata({params}: {params: {locale: 'fr' | 'en'}}): Promise<Metadata> {
  return buildLocalizedMetadata({
    locale: params.locale,
    path: '/legal/mentions-legales',
    title: params.locale === 'fr' ? 'SYMI | Mentions legales' : 'SYMI | Legal notice',
    description:
      params.locale === 'fr'
        ? 'Informations legales de l editeur, hebergeur, publication et propriete intellectuelle.'
        : 'Legal information on publisher, hosting provider, publication director, and intellectual property.'
  });
}

export default function MentionsPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const isFr = params.locale === 'fr';

  return (
    <section className="bg-white py-14 sm:py-20 text-black">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <div>
          <h1 className="text-3xl font-light sm:text-4xl">{isFr ? 'Mentions legales' : 'Legal notice'}</h1>
          <p className="mt-2 text-sm">{isFr ? 'Derniere mise a jour' : 'Last updated'}: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-6 leading-7">
          <section>
            <h2 className="text-xl font-light">{isFr ? 'Editeur' : 'Publisher'}</h2>
            <p className="mt-2">{legalProfile.legalEntity}</p>
            <p>{legalProfile.legalForm}</p>
            <p>{isFr ? 'Capital social' : 'Share capital'}: {legalProfile.shareCapital}</p>
            <p>{isFr ? 'RCS / SIREN' : 'Registration number'}: {legalProfile.registrationNumber}</p>
            <p>TVA: {legalProfile.vatNumber}</p>
            <p>{isFr ? 'Siege social' : 'Registered office'}: {legalProfile.registeredOffice}</p>
            <p>{isFr ? 'Contact' : 'Contact'}: {legalProfile.contactEmail}</p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? 'Directeur de la publication' : 'Publication director'}</h2>
            <p className="mt-2">{legalProfile.publicationDirector}</p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? 'Hebergement' : 'Hosting'}</h2>
            <p className="mt-2">{legalProfile.hostingProvider}</p>
            <p>{legalProfile.hostingAddress}</p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? 'Propriete intellectuelle' : 'Intellectual property'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Le site, ses contenus, marques, elements graphiques et documentaires sont proteges. Toute reproduction ou extraction non autorisee est interdite.'
                : 'Website content, brands, visual assets, and documentation are protected. Unauthorized reproduction or extraction is prohibited.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? 'Limitation de responsabilite' : 'Limitation of liability'}</h2>
            <p className="mt-2">
              {isFr
                ? 'SYMI met en oeuvre des moyens raisonnables pour assurer fiabilite et disponibilite du site, sans garantie d interruption continue.'
                : 'SYMI applies reasonable efforts to ensure reliability and availability, without uninterrupted-service guarantee.'}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
