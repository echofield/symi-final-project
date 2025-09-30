import Link from 'next/link';
import EngineLivePanel from '../../components/EngineLivePanel';
import {ContactButton} from '../../components/ContactModal';
import {useTranslations} from 'next-intl';

export default function HomeLocalePage() {
  const t = useTranslations();
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Operations Intelligence</p>
          <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">{t('hero.title')}</h1>
          <p className="mt-6 text-lg leading-8 text-black sm:text-xl">{t('hero.subtitle')}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/services" className="btn btn-primary">{t('cta.exploreCases')}</Link>
            <ContactButton className="border border-black bg-white text-black hover:opacity-80" variant="secondary">{t('cta.book')}</ContactButton>
          </div>
          <div className="mt-10"><EngineLivePanel /></div>
        </div>
      </section>
    </>
  );
}


