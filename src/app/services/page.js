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
      <section className="border-b border-black bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Services</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl">
            Custom Software Development
          </h1>
          <p className="mt-4 text-lg leading-8 text-black">
            We design and build internal platforms that capture how your organization actually operates. Every project is
            scoped to your workflow—no off-the-shelf compromises.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-light text-black">Typical projects include:</h2>
          <ul className="mt-6 space-y-3 text-lg text-black">
            {typicalProjects.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
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
            <h2 className="text-3xl font-light tracking-tight text-black">
              Ready to scope your build?
            </h2>
            <p className="mt-4 text-lg text-black">
              Share your objectives and existing systems and we’ll outline a phased roadmap.
            </p>
            <button type="button" className="btn btn-primary mt-6" onClick={() => import('../../components/ContactModal').then(m => m.useContactModal().open())}>Contact for Project Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}
