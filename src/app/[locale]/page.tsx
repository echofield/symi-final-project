import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function HomeLocalePage() {
  const t = useTranslations();

  const features = [
    {title: t('features.1.title'), body: t('features.1.body')},
    {title: t('features.2.title'), body: t('features.2.body')},
    {title: t('features.3.title'), body: t('features.3.body')},
    {title: t('features.4.title'), body: t('features.4.body')},
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">{t('hero.kicker')}</p>
          <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">{t('hero.title')}</h1>
          <p className="mt-6 text-lg leading-8 text-black sm:text-xl">{t('hero.subtitle')}</p>
          <p className="mt-4 text-sm font-light uppercase tracking-widest text-black">{t('hero.industries')}</p>
          <div className="mt-6 text-sm leading-relaxed text-black">{t('hero.trust')}</div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-primary">{t('cta.viewSampleReport')}</Link>
            <Link href="/contact" className="border border-black bg-white text-black hover:opacity-80 btn">{t('cta.requestAnalysis')}</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">{t('value.title')}</h2>
            <p className="mt-4 text-lg text-black">{t('value.intro')}</p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-none border border-black bg-white p-8">
                <h3 className="text-xl font-light text-black">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-black">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

