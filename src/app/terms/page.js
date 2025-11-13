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
          <p className="mt-2 text-lg text-black">
            All contracts are governed by French law. In case of dispute, parties agree to seek resolution through mediation. If
            mediation fails, disputes shall be settled by arbitration in Paris, France, under the rules of the Paris International
            Arbitration Chamber.
          </p>
          <p className="mt-4 text-lg text-black">
            For international clients, Swiss arbitration (Geneva) may be elected by mutual written agreement prior to contract
            signature.
          </p>
        </div>
      </section>
    </div>
  );
}


