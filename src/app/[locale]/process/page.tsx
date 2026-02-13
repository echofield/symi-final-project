import {useTranslations} from 'next-intl';

export default function ProcessPage() {
  const t = useTranslations('process');
  const steps = [t('step1'), t('step2'), t('step3'), t('step4')];
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
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
      </div>
    </section>
  );
}


