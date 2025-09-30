import {useTranslations} from 'next-intl';

export default function ProcessPage() {
  const t = useTranslations();
  const steps = [t('process.step1'), t('process.step2'), t('process.step3'), t('process.step4')];
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light">{t('process.title')}</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s} className="border border-black p-6">{s}</div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="border border-black p-6">{t('process.card.security')}</div>
          <div className="border border-black p-6">{t('process.card.residency')}</div>
          <div className="border border-black p-6">{t('process.card.ip')}</div>
        </div>
      </div>
    </section>
  );
}


