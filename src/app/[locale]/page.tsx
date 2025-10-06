import Link from 'next/link';

export default function HomeLocalePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">Cross-Industry Intelligence</p>
          <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">Cross-Industry Intelligence</h1>
          <p className="mt-6 text-lg leading-8 text-black sm:text-xl">Opportunity detection for professional services</p>
          <p className="mt-4 text-sm font-light uppercase tracking-widest text-black">Law Firms • Construction • Finance • Real Estate • Consulting</p>
          <div className="mt-6 text-sm leading-relaxed text-black">Monitoring official government databases and public registries • 100% legal & verified data • Weekly intelligence delivery</div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-primary">View Sample Report</Link>
            <Link href="/contact" className="border border-black bg-white text-black hover:opacity-80 btn" >Request Intelligence Analysis</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Intelligence Systems Built For Your Industry</h2>
            <p className="mt-4 text-lg text-black">Every engagement starts with understanding what signals matter in your market. We build monitoring systems that correlate data across legal, regulatory, financial, and operational sources—then route opportunities directly to your team.</p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Opportunity Detection Engines</h3>
              <p className="mt-3 text-base leading-7 text-black">Automated monitoring of bankruptcies, regulatory changes, public tenders, and market movements that create new business opportunities.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Cross-Source Intelligence</h3>
              <p className="mt-3 text-base leading-7 text-black">Connect signals from legal databases, government registries, research publications, and financial filings into actionable insights.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Custom Alert Systems</h3>
              <p className="mt-3 text-base leading-7 text-black">Real-time notifications calibrated to your expertise, geography, and client base—delivered to your existing workflow.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Validated Intelligence</h3>
              <p className="mt-3 text-base leading-7 text-black">Research-grade verification of every signal with confidence scoring, source validation, and false positive filtering.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


