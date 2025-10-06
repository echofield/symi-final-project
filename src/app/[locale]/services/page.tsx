import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {title: 'Opportunity Detection Engines', key: 'svc1', bullets: ['Monitor bankruptcies, regulatory changes, tenders, market movements', 'Calibrated to practice area, geography, client base', 'Weekly delivery; real-time urgent alerts']},
    {title: 'Cross-Source Intelligence Integration', key: 'svc2', bullets: ['Official registries, legal databases, research publications, financial filings', 'Normalization, deduplication, entity resolution', 'APIs and connectors into your existing systems']},
    {title: 'Custom Alert & Delivery Systems', key: 'svc3', bullets: ['Scored opportunities with confidence thresholds', 'Delivery via email, dashboards, or your CRM', 'Team-level routing and follow-up workflows']},
    {title: 'Validation & Governance', key: 'svc4', bullets: ['Research-grade verification and source validation', 'False-positive filtering and audit trail', 'Security, privacy, and data residency controls']}
  ];
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light">Intelligence Services</h1>
        <p className="mt-4 max-w-3xl text-lg">We build cross-industry intelligence systems that detect opportunities by correlating signals from legal, regulatory, financial and operational sources—then route them into your workflow.</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.key} className="border border-black bg-white p-8">
              <h3 className="text-xl font-light">{s.title}</h3>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="mt-6"><Link href="/contact" className="btn btn-primary">Request Intelligence Analysis</Link></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


