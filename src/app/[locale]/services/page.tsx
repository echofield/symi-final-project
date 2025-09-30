import {useTranslations} from 'next-intl';
import {ContactButton} from '../../../components/ContactModal';

export default function ServicesPage() {
  const t = useTranslations();
  const services = [
    {title: t('services.card1.title'), key: 'svc1', bullets: [t('services.card1.b1'), t('services.card1.b2'), t('services.card1.b3')]},
    {title: t('services.card2.title'), key: 'svc2', bullets: [t('services.card2.b1'), t('services.card2.b2'), t('services.card2.b3')]},
    {title: t('services.card3.title'), key: 'svc3', bullets: [t('services.card3.b1'), t('services.card3.b2'), t('services.card3.b3')]},
    {title: t('services.card4.title'), key: 'svc4', bullets: [t('services.card4.b1'), t('services.card4.b2'), t('services.card4.b3')]}
  ];
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light">{t('services.title')}</h1>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.key} className="border border-black bg-white p-8">
              <h3 className="text-xl font-light">{s.title}</h3>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="mt-6"><ContactButton>Contact</ContactButton></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


