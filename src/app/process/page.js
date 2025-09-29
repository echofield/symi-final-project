const phases = [
  {
    name: "Discover",
    description:
      "We audit your current workflow, systems, and stakeholders to understand the real friction points before touching code.",
  },
  {
    name: "Design",
    description:
      "Together we map the ideal state with service blueprints, wireframes, and data models so every edge case is accounted for.",
  },
  {
    name: "Develop",
    description:
      "We build in phases with weekly check-ins, transparent backlog, and demos that invite feedback early and often.",
  },
  {
    name: "Deliver",
    description:
      "We deploy, train your team, and provide support as the system becomes part of everyday operations.",
  },
];

export const metadata = {
  title: "Our Approach — Symi System",
  description: "The phased process we use to design, build, and deploy custom internal software.",
};

export default function ProcessPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-br from-purple-100 via-white to-slate-100 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-purple-600">Our Approach</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">How we build</h1>
          <p className="mt-4 text-lg text-slate-600">
            Projects are billed by phase—not by hour—so you know exactly what is being delivered and when. You maintain full
            ownership of the code and assets at each stage.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-8 sm:grid-cols-2">
          {phases.map((phase) => (
            <div key={phase.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">{phase.name}</p>
              <p className="mt-4 text-lg leading-7 text-slate-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-100 via-white to-slate-100 p-10 text-center shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Let’s build in phases</h2>
            <p className="mt-4 text-lg text-slate-600">
              Share where your process is breaking down and we’ll recommend a phased roadmap with clear deliverables.
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
