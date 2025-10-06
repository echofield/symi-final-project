export const metadata = {
  title: "Services — Symi System",
  description: "Cross-industry intelligence and opportunity detection for professional services.",
};

const typicalProjects = [
  "Operations dashboards",
  "Workflow automation",
  "Internal intelligence platforms",
  "Custom CRM and pipeline systems",
];

import { ContactButton } from "../../components/ContactModal";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Services</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl">Intelligence Services</h1>
          <p className="mt-4 text-lg leading-8 text-black">We build cross-industry intelligence systems that detect opportunities by correlating signals from legal, regulatory, financial and operational sources—then route them into your workflow.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Opportunity Detection Engines</h3>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Monitor bankruptcies, regulatory changes, tenders, market movements</li>
                <li>Calibrated to practice area, geography, client base</li>
                <li>Weekly intelligence delivery; real-time urgent alerts</li>
              </ul>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Cross-Source Intelligence Integration</h3>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Official registries, legal databases, research publications, financial filings</li>
                <li>Normalization, deduplication, entity resolution</li>
                <li>APIs/connectors into your existing systems</li>
              </ul>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Custom Alert & Delivery Systems</h3>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Scored opportunities and confidence thresholds</li>
                <li>Delivery via email, dashboards, or your CRM</li>
                <li>Routing and follow-up workflows</li>
              </ul>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Validation & Governance</h3>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Source validation and research-grade verification</li>
                <li>False-positive filtering and audit trail</li>
                <li>Security, privacy, and data residency controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-8">
            <h2 className="text-2xl font-light text-black">Timeline</h2>
            <p className="mt-4 text-lg text-black">
              Engagements typically run 4–16 weeks depending on complexity, integrations, and compliance requirements. We
              work in phases so you see tangible outcomes at the end of each milestone.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-10 text-center">
            <h2 className="text-3xl font-light tracking-tight text-black">Ready to see a sample report?</h2>
            <p className="mt-4 text-lg text-black">Request a free sample intelligence report tailored to your sector.</p>
            <ContactButton className="mt-6">Schedule 15-Min Demo</ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
