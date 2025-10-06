import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light">{t('about.title')}</h1>
        <p className="mt-4 text-lg">{t('about.intro')}</p>
        <div className="mt-10">
          <h2 className="text-2xl font-light">{t('about.what.title')}</h2>
          <ul className="mt-4 space-y-2 text-lg">
            {t.raw('about.what.items').map((it: string) => (
              <li key={it}>• {it}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-light">{t('about.why.title')}</h2>
          <p className="mt-4 text-lg">{t('about.why.p1')}</p>
          <p className="mt-4 text-lg">{t('about.why.p2')}</p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-light">{t('about.markets.title')}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {t.raw('about.markets.items').map((m: {title: string; desc: string}) => (
              <div key={m.title} className="border border-black p-6">
                <h3 className="text-xl font-light">{m.title}</h3>
                <p className="mt-2 text-base">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


