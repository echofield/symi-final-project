import Link from 'next/link';

const cases = [
  { slugFr: 'cabinet-avocats', slugEn: 'corporate-law-firm', titleFr: "Plateforme d’intelligence pour cabinet d’avocats", titleEn: 'Corporate Law Firm Intelligence Platform' },
  { slugFr: 'intelligence-construction', slugEn: 'construction-intelligence', titleFr: 'Intelligence marché pour PME du BTP', titleEn: 'Construction PME Market Intelligence' }
];

export default function CaseStudiesList({ params }: { params: { locale: 'fr' | 'en' }}) {
  const { locale } = params;
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light">Case Studies</h1>
        <div className="mt-8 space-y-6">
          {cases.map((c) => {
            const slug = locale === 'fr' ? c.slugFr : c.slugEn;
            const title = locale === 'fr' ? c.titleFr : c.titleEn;
            return (
              <div key={slug} className="border border-black p-6">
                <Link href={`/${locale}/case-studies/${slug}`} className="underline">{title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


