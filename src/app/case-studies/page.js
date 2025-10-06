export const metadata = {
  title: "Case Studies — Symi System",
  description: "Sample engagements that show how we build internal software for specialized industries.",
};

const highlights = [
  "Intelligent lead qualification tailored to acquisition criteria",
  "Deal pipeline management with underwriting checkpoints",
  "Automated valuation system aligned to broker playbook",
  "15+ hours weekly time savings for the core team",
];

const retail = {
  title: 'Retail Intelligence Dashboard',
  client: 'Mid-size retail group with 50+ stores',
  challenge: 'No central visibility over sales, logistics, and stock.',
  solution: 'Integrated POS + logistics into a real-time operations dashboard.',
  results: [
    'Out-of-stock incidents reduced 30%.',
    'Regional managers saved 10+ hours/week on reporting.',
    'Improved forecasting accuracy and margin control.',
  ],
};

import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black bg-white py-24 text-black">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Case Study</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl">Corporate Law Firm Intelligence Platform</h1>
          <p className="mt-4 text-lg text-black">Mid-size Paris law firm, 15 attorneys</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-10">
          <div>
            <h2 className="text-2xl font-light text-black">Outcome</h2>
            <p className="mt-4 text-lg text-black">
              A unified platform that connected lead intake, valuation, and deal management, eliminating manual work and
              surfacing the right opportunities faster.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-light text-black">Key capabilities</h2>
            <ul className="mt-4 space-y-3 text-lg text-black">
              <li>• Automated monitoring of commercial registries, legal publications, and procurement platforms</li>
              <li>• Weekly intelligence reports by practice area</li>
              <li>• Alerts for urgent client risks and competitive movements</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-light text-black">Impact</h2>
            <p className="mt-4 text-lg text-black">€180k+ in new business opportunities identified monthly. 3-4 additional client engagements per quarter. Zero manual research time required from attorneys.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-6">
          <h2 className="text-2xl font-light text-black">Construction PME Market Intelligence</h2>
          <p className="text-lg text-black">Client: Lyon-based construction firm, 25 employees</p>
          <div className="grid gap-4">
            <p className="text-lg text-black"><span className="font-medium">Challenge:</span> Reactive to market changes. Missing public tender opportunities, unaware of new building permits in target zones, late to regulatory updates affecting projects.</p>
            <p className="text-lg text-black"><span className="font-medium">Solution:</span> Custom dashboard monitoring official land registry, public procurement, and regulatory databases. Geographic filters for Rhône-Alpes region with sector-specific alerts. Integration with internal CRM for opportunity tracking.</p>
            <div>
              <p className="text-lg text-black font-medium">Results:</p>
              <ul className="mt-2 list-disc pl-6 text-lg text-black">
                <li>8 qualified tender opportunities per month (vs 2 previously)</li>
                <li>€500k+ in new project pipeline within first quarter</li>
                <li>15 hours/week saved on market research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-10 text-center">
            <h2 className="text-3xl font-light tracking-tight text-black">Build your cross-industry intelligence platform</h2>
            <p className="mt-4 text-lg text-black">We partner with professional services firms to surface opportunities across legal, regulatory, and market signals.</p>
            <Link href="/contact" className="btn btn-primary mt-6">View Sample Report</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
