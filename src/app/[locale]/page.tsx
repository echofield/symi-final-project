import Link from 'next/link';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {buildLocalizedMetadata} from '../../lib/schema';

export async function generateMetadata({params}: {params: {locale: 'fr' | 'en'}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});
  return buildLocalizedMetadata({
    locale: params.locale,
    path: '',
    title: t('seo.title'),
    description: t('seo.description')
  });
}

export default async function HomeLocalePage({params}: {params: {locale: 'fr' | 'en'}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});
  const pillars = t.raw('pillars.items') as Array<{title: string; body: string; href: string; cta: string}>;
  const deliverables = t.raw('deliverables.items') as string[];
  const audience = t.raw('audience.items') as string[];

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--forest-green)]">{t('hero.kicker')}</p>
          <h1 className="mt-4 text-4xl font-light sm:text-5xl">{t('hero.title')}</h1>
          <p className="mt-4 text-xl font-light leading-8">{t('hero.subtitle')}</p>
          <p className="mt-4 text-lg leading-8">{t('hero.intro')}</p>
          <p className="mt-4 text-sm uppercase tracking-widest">{t('hero.trust')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${params.locale}/audit-industriel`} className="btn btn-primary">{t('hero.ctaPrimary')}</Link>
            <Link href={`/${params.locale}/evidence-pack`} className="btn border border-black bg-white text-black hover:opacity-80">{t('hero.ctaSecondary')}</Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <article key={`${idx}-${pillar.title}`} className="border border-black bg-white p-6">
              <h2 className="text-2xl font-light">{pillar.title}</h2>
              <p className="mt-3 text-base leading-7">{pillar.body}</p>
              <Link href={`/${params.locale}/${pillar.href}`} className="mt-4 inline-block underline">{pillar.cta}</Link>
            </article>
          ))}
        </div>

        <div className="border border-black bg-white p-8">
          <h2 className="text-2xl font-light">{t('deliverables.title')}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {deliverables.map((item, idx) => (
              <li key={`${idx}-${item}`}>{item}</li>
            ))}
          </ul>
          <Link href={`/${params.locale}/${t('cta.href')}`} className="btn btn-primary mt-6 inline-block">{t('cta.label')}</Link>
        </div>

        <div className="border border-black bg-white p-8">
          <h2 className="text-2xl font-light">{t('audience.title')}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {audience.map((item, idx) => (
              <li key={`${idx}-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
