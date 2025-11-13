import Link from 'next/link';

export default function HomeLocalePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Cross-industry systems</p>
          <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">Operations Intelligence</h1>
          <p className="mt-6 text-lg leading-8 text-black sm:text-xl">Strategic systems for operational clarity</p>
          <p className="mt-4 text-sm font-light uppercase tracking-widest text-black">Venture portfolios • Expansion plays • Creative studios • Post-raise chaos</p>
          <p className="mt-6 text-lg leading-8 text-black sm:text-xl">We architect unified intelligence platforms and autonomous agents for leaders managing complexity at scale.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/services" className="border border-black bg-white text-black hover:opacity-80 btn">Explore Services</Link>
            <Link href="/contact" className="btn btn-primary">Request Consultation</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Operating systems for complex teams</h2>
            <p className="mt-4 text-lg text-black">Every build consolidates fragmented tools, data, and rituals into a single operational nervous system that keeps leadership ahead of the chaos.</p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Unified operations dashboards</h3>
              <p className="mt-3 text-base leading-7 text-black">Live visibility across revenue, delivery, finance, and talent so founders and operators steer decisions from one interface.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Autonomous workflow agents</h3>
              <p className="mt-3 text-base leading-7 text-black">Orchestrated agents manage handoffs, escalate exceptions, and document outcomes so teams stay focused on high-leverage work.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Knowledge-integrated interfaces</h3>
              <p className="mt-3 text-base leading-7 text-black">Institutional knowledge, operating rituals, and real-time data surfaced together to guide decisions in context.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Change-ready architecture</h3>
              <p className="mt-3 text-base leading-7 text-black">Modular systems, source-of-truth governance, and automation guardrails engineered to evolve with each strategic move.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


