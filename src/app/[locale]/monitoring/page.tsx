import Link from 'next/link';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {buildLocalizedMetadata} from '../../../lib/schema';

export async function generateMetadata({params}: {params: {locale: 'fr' | 'en'}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'monitoring'});
  return buildLocalizedMetadata({
    locale: params.locale,
    path: '/monitoring',
    title: t('seo.title'),
    description: t('seo.description')
  });
}

export default async function MonitoringPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'monitoring'});
  const deliverables = t.raw('deliverables.items') as string[];

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--forest-green)]">{t('hero.kicker')}</p>
          <h1 className="mt-4 text-4xl font-light sm:text-5xl">{t('hero.title')}</h1>
          <p className="mt-6 text-lg leading-8">{t('hero.intro')}</p>
        </div>

        <div className="border border-black p-8">
          <h2 className="text-2xl font-light">{t('deliverables.title')}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {deliverables.map((item, idx) => (
              <li key={`${idx}-${item}`}>{item}</li>
            ))}
          </ul>
          <Link href={`/${params.locale}/${t('cta.href')}`} className="btn btn-primary mt-6 inline-block">{t('cta.label')}</Link>
        </div>
      </div>
    </section>
  );
}
