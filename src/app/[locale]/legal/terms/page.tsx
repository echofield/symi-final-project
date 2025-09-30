export default function TermsPage() {
  const updated = new Date().toISOString().slice(0, 10);
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light">Terms</h1>
        <p className="mt-2 text-sm">Last updated: {updated}</p>
        <div className="mt-6 space-y-3">
          <p>Objet, Services, Propriété intellectuelle, Confidentialité, Limitation de responsabilité, Disponibilité, Droit applicable & juridiction, Évolution des CGU.</p>
        </div>
      </div>
    </section>
  );
}


