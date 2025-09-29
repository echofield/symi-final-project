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

import { ContactButton } from "../../components/ContactModal";

export default function ProcessPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Our Approach</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl">How we build</h1>
          <p className="mt-4 text-lg text-black">
            Projects are billed by phase—not by hour—so you know exactly what is being delivered and when. You maintain full
            ownership of the code and assets at each stage.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.name} className="rounded-none border border-black bg-white p-8">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">{phase.name}</p>
              <p className="mt-4 text-lg leading-7 text-black">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-10 text-center">
            <h2 className="text-3xl font-light tracking-tight text-black">Let’s build in phases</h2>
            <p className="mt-4 text-lg text-black">
              Share where your process is breaking down and we’ll recommend a phased roadmap with clear deliverables.
            </p>
            <ContactButton className="mt-6">Contact for Project Consultation</ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
