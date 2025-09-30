import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light">{t('about.title')}</h1>
        <p className="mt-4 text-lg">{t('about.credo')}</p>
        <div className="mt-8 border border-black p-6">Team section — placeholder</div>
      </div>
    </section>
  );
}


