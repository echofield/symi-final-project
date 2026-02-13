import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function ProcessPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const t = useTranslations('process');
  const steps = [t('step1'), t('step2'), t('step3'), t('step4')];
  const governance = t.raw('governance.items') as string[];
  const weekly = t.raw('weekly.items') as string[];
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <h1 className="text-4xl font-light">{t('title')}</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={`${idx}-${s}`} className="border border-black p-6">{s}</div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="border border-black p-6">{t('card.security')}</div>
          <div className="border border-black p-6">{t('card.residency')}</div>
          <div className="border border-black p-6">{t('card.ip')}</div>
        </div>
        <div className="border border-black bg-white p-8">
          <h2 className="text-2xl font-light">{t('governance.title')}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {governance.map((item, idx) => (
              <li key={`${idx}-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-black bg-white p-8">
          <h2 className="text-2xl font-light">{t('weekly.title')}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {weekly.map((item, idx) => (
              <li key={`${idx}-${item}`}>{item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={`/${params.locale}/contact`} className="btn btn-primary">{t('cta.primary')}</Link>
            <Link href={`/${params.locale}/evidence-pack`} className="btn border border-black bg-white text-black hover:opacity-80">{t('cta.secondary')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


