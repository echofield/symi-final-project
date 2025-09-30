import Link from 'next/link';
import { useTranslations } from 'next-intl';

const cases = [
  { slugFr: 'cabinet-avocats', slugEn: 'law-firm', titleFr: "Cabinet d’avocats — Veille juridique augmentée", titleEn: 'Law firm — Augmented legal watch' },
  { slugFr: 'asset-manager', slugEn: 'asset-manager', titleFr: 'Asset Manager — Ops immobilières pilotées par la donnée', titleEn: 'Asset Manager — Data-driven RE ops' },
  { slugFr: 'promoteur', slugEn: 'developer', titleFr: 'Promoteur — Due diligence & suivi réglementaire', titleEn: 'Developer — Due diligence & regulatory follow-up' }
];

export default function CaseStudiesList({ params }: { params: { locale: 'fr' | 'en' }}) {
  const { locale } = params;
  const t = useTranslations();
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light">{t('nav.cases')}</h1>
        <div className="mt-8 space-y-6">
          {cases.map((c) => {
            const slug = locale === 'fr' ? c.slugFr : c.slugEn;
            const title = locale === 'fr' ? c.titleFr : c.titleEn;
            return (
              <div key={slug} className="border border-black p-6">
                <Link href={`/${locale}/case-studies/${slug}`} className="underline">{title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


