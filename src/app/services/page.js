export const metadata = {
  title: "Services — Symi System",
  description: "Custom internal software development for specialized industries.",
};

const typicalProjects = [
  "Operations dashboards",
  "Workflow automation",
  "Internal intelligence platforms",
  "Custom CRM and pipeline systems",
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-br from-purple-100 via-white to-slate-100 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-purple-600">Services</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Custom Software Development
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We design and build internal platforms that capture how your organization actually operates. Every project is
            scoped to your workflow—no off-the-shelf compromises.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900">Typical projects include:</h2>
          <ul className="mt-6 space-y-3 text-lg text-slate-600">
            {typicalProjects.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">
              Engagements typically run 4–16 weeks depending on complexity, integrations, and compliance requirements. We
              work in phases so you see tangible outcomes at the end of each milestone.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-100 via-white to-slate-100 p-10 text-center shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Ready to scope your build?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Share your objectives and existing systems and we’ll outline a phased roadmap.
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
