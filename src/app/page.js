import Link from "next/link";

const industries = [
  "Business Services",
  "Professional Services",
  "Specialized Markets",
];

const capabilities = [
  {
    title: "Operations dashboards",
    description:
      "Real-time visibility across deals, teams, and service delivery so leadership can steer with confidence.",
  },
  {
    title: "Workflow automation",
    description:
      "Streamline repetitive steps across intake, execution, and reporting with systems built for your process.",
  },
  {
    title: "Internal intelligence platforms",
    description:
      "Blend data, analytics, and institutional knowledge into one source of truth for decision-makers.",
  },
  {
    title: "Custom CRM & pipeline systems",
    description:
      "Purpose-built relationship and deal management that adapts to niche requirements and complex lifecycles.",
  },
];

const approach = [
  {
    name: "Discover",
    copy: "Audit your current workflow, systems, and hidden friction points to define the real constraints.",
  },
  {
    name: "Design",
    copy: "Translate the ideal future state into wireframes, service blueprints, and implementation roadmap.",
  },
  {
    name: "Develop",
    copy: "Ship production-ready software in phases with weekly reviews and stakeholder alignment.",
  },
  {
    name: "Deliver",
    copy: "Deploy, train teams, and provide post-launch support so the new system becomes everyday operations.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-200 via-white to-slate-100" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-purple-600">
              Operations Intelligence
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Operations Intelligence for Specialized Industries
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Custom internal software that turns your workflow into competitive advantage. We map your business logic
              into systems that scale execution, insight, and margin.
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-slate-500">
              {industries.join(" • ")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <a
                href="mailto:contact@symi.system?subject=Project%20Consultation"
                className="btn border border-slate-300 bg-white text-slate-700 hover:border-purple-300 hover:text-slate-900"
              >
                Contact for Project Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Software built around the way your team operates.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every engagement is designed to capture the nuance of your industry, service delivery, and compliance
              requirements. No templates—just systems that make your expertise easier to deliver.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-200">
              Case Study Highlight
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Business Brokerage Operations Platform
            </h2>
            <p className="mt-4 text-lg text-slate-200">
              Southeastern US Business Broker
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-200">
              <li>• Intelligent lead qualification tailored to acquisition criteria</li>
              <li>• Deal pipeline management with underwriting checkpoints</li>
              <li>• Automated valuation system aligned to broker playbook</li>
              <li>• 15+ hours weekly time savings for the core team</li>
            </ul>
            <div className="mt-8">
              <Link href="/case-studies" className="btn btn-primary">
                View Full Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">How we work</h2>
            <p className="mt-4 text-lg text-slate-600">
              Projects are structured by phase with a typical 4–16 week delivery window depending on complexity. You keep
              full ownership of the codebase and assets produced.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div key={step.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">{step.name}</p>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-100 via-white to-slate-100 px-6 py-16 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Ready to build software that mirrors how your business wins?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Let’s scope your workflow, align on outcomes, and outline a build plan calibrated to your team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/process" className="btn border border-slate-300 bg-white text-slate-700 hover:border-purple-300 hover:text-slate-900">
              Our Approach
            </Link>
            <a
              href="mailto:contact@symi.system?subject=Project%20Consultation"
              className="btn btn-primary"
            >
              Contact for Project Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
