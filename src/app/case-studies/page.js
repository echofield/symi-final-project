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
      <section className="border-b border-black bg-white py-24 text-black">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Case Study</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl">
            Business Brokerage Operations Platform
          </h1>
          <p className="mt-4 text-lg text-black">Southeastern US Business Broker (anonymized)</p>
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
              {highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-light text-black">Impact</h2>
            <p className="mt-4 text-lg text-black">
              The brokerage gained back over 15 hours each week, tightened underwriting discipline, and built a proprietary
              data asset that compounds with every deal.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-10 text-center">
            <h2 className="text-3xl font-light tracking-tight text-black">Build your next internal platform</h2>
            <p className="mt-4 text-lg text-black">
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
