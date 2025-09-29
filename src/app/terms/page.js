export const metadata = { title: 'Terms of Service — Symi System' };

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-light tracking-tight text-black">Terms of Service</h1>
          <h2 className="mt-10 text-2xl font-light text-black">Services</h2>
          <p className="mt-2 text-lg text-black">Consulting and software development services are provided by Symi System.</p>
          <h2 className="mt-10 text-2xl font-light text-black">No Guarantee</h2>
          <p className="mt-2 text-lg text-black">Engagements are scoped project by project. Outcomes depend on client inputs and constraints.</p>
          <h2 className="mt-10 text-2xl font-light text-black">Liability</h2>
          <p className="mt-2 text-lg text-black">Liability is limited to the fees paid for the project.</p>
          <h2 className="mt-10 text-2xl font-light text-black">Governing Law</h2>
          <p className="mt-2 text-lg text-black">SYMI operates internationally. All contracts are governed by the applicable client jurisdiction, with international arbitration available in Geneva, Switzerland.</p>
        </div>
      </section>
    </div>
  );
}


