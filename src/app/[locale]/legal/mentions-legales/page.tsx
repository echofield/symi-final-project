const LAST_UPDATED = '2026-02-13';

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
            <h2 className="text-xl font-light">{isFr ? 'Editeur du site' : 'Website publisher'}</h2>
            <p className="mt-2">SYMI</p>
            <p>Contact: contact@symi.io</p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? 'Hebergement' : 'Hosting provider'}</h2>
            <p className="mt-2">Vercel Inc. - 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? 'Propriete intellectuelle' : 'Intellectual property'}</h2>
            <p className="mt-2">
              {isFr
                ? 'Les contenus et elements graphiques du site sont proteges par le droit applicable. Toute reproduction non autorisee est interdite.'
                : 'Website content and visual assets are protected under applicable law. Unauthorized reproduction is prohibited.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light">{isFr ? 'Responsabilite' : 'Liability'}</h2>
            <p className="mt-2">
              {isFr
                ? 'SYMI met en oeuvre des moyens raisonnables pour assurer l exactitude et la disponibilite des informations sans garantie d absence totale d erreur.'
                : 'SYMI uses reasonable efforts to ensure information accuracy and availability, without guaranteeing total absence of errors.'}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
