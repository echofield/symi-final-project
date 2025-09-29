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

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-slate-100">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-purple-200">Case Study</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Business Brokerage Operations Platform
          </h1>
          <p className="mt-4 text-lg text-slate-200">Southeastern US Business Broker (anonymized)</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Outcome</h2>
            <p className="mt-4 text-lg text-slate-600">
              A unified platform that connected lead intake, valuation, and deal management, eliminating manual work and
              surfacing the right opportunities faster.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Key capabilities</h2>
            <ul className="mt-4 space-y-3 text-lg text-slate-600">
              {highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Impact</h2>
            <p className="mt-4 text-lg text-slate-600">
              The brokerage gained back over 15 hours each week, tightened underwriting discipline, and built a proprietary
              data asset that compounds with every deal.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-100 via-white to-slate-100 p-10 text-center shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Build your next internal platform</h2>
            <p className="mt-4 text-lg text-slate-600">
              We partner with teams in business services, professional services, and specialized markets to turn complex
              workflows into software.
            </p>
            <a
              href="mailto:contact@symi.system?subject=Project%20Consultation"
              className="btn btn-primary mt-6"
            >
              Contact for Project Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
