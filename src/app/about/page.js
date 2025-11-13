export const metadata = {
  title: "About — Symi System",
  description: "Symi System architects bespoke operations intelligence platforms for high-complexity environments.",
};

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">About</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl">Architects of operations intelligence</h1>
          <p className="mt-4 text-lg leading-8 text-black">
            Founded in Paris, Symi System architects bespoke intelligence platforms for leaders operating in high-complexity
            environments. Our work sits at the intersection of strategic operations, AI systems, and interface design.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-10">
            <h2 className="text-2xl font-light text-black">Operating in the grey space</h2>
            <p className="mt-4 text-lg text-black">
              We partner with founders, investors, and creative leaders navigating expansion, restructuring, and rapid scale.
              Every engagement blends systems architecture, knowledge design, and automation so teams can see, decide, and act
              without friction.
            </p>
            <p className="mt-4 text-lg text-black">
              Our studio assembles strategists, engineers, and designers who thrive in ambiguous environments—where operational
              clarity is the difference between momentum and stagnation.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-10 text-center">
            <h2 className="text-3xl font-light tracking-tight text-black">Let’s build the system your team deserves</h2>
            <p className="mt-4 text-lg text-black">
              Share your operational mandate and we’ll architect the intelligence platform that keeps you ahead of the next
              move.
            </p>
            <Link href="/contact" className="btn btn-primary mt-6">Request Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
