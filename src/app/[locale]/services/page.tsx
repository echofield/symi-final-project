import Link from 'next/link';

const offerings = [
  {
    title: "THE FOUNDER'S OS",
    audience: 'For post-raise founders drowning in tool sprawl',
    pricing: '€15-25K | 1-2 week sprint',
    description:
      "A unified dashboard that replaces 10+ SaaS tabs. Your entire business in one beautiful interface. Built for founders who raised Series A/B and need operational clarity NOW.",
  },
  {
    title: "THE PORTFOLIO OS",
    audience: 'For VCs & Family Offices managing complex portfolios',
    pricing: '€20-40K | 2 week intervention sprint',
    description:
      'We embed in your highest-chaos portfolio company and build them an AI-powered operating system. You become the hero. They get leverage.',
  },
  {
    title: "THE CREATIVE STUDIO OS",
    audience: 'For prize-winning designers & creators scaling from artist to business',
    pricing: '€10-20K | 1 week sprint',
    description:
      "You just won €300K and the industry's spotlight. Your job is to create. Our job: build you the system to manage orders, production, and the chaos.",
  },
  {
    title: 'THE EXPANSION PLAYBOOK',
    audience: 'For groups opening new markets/offices/properties',
    pricing: '€25-50K | 2-4 week sprint',
    description:
      "You're expanding to a new geography. We build you the repeatable playbook for setup, operations, and brand consistency across your new territory.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Services</p>
        <h1 className="mt-6 text-4xl font-light">Operations intelligence programs</h1>
        <p className="mt-4 max-w-3xl text-lg">
          Four archetypes that compress months of operational chaos into clarity, leverage, and execution momentum.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {offerings.map((offering) => (
            <div key={offering.title} className="border border-black bg-white p-10">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">{offering.pricing}</p>
              <h2 className="mt-4 text-2xl font-light text-black">{offering.title}</h2>
              <p className="mt-3 text-base font-light uppercase tracking-[0.2em] text-black">{offering.audience}</p>
              <p className="mt-5 text-lg leading-7 text-black">{offering.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 mb-8 text-center text-sm leading-6 text-neutral-500">
          All engagements are scoped project-by-project. Pricing depends on complexity and delivery timeline. Contact us for a
          custom proposal tailored to your specific needs.
        </p>
        <div className="mt-16 rounded-none border border-black bg-white p-10 text-center">
          <h2 className="text-3xl font-light tracking-tight text-black">Ready to scope your next sprint?</h2>
          <p className="mt-4 text-lg text-black">
            Share the operational challenge in front of you and we’ll recommend the archetype or hybrid build that unlocks the most leverage.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">Request Consultation</Link>
        </div>
      </div>
    </div>
  );
}


