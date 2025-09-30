export default function PrivacyPage() {
  const updated = new Date().toISOString().slice(0, 10);
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light">Privacy</h1>
        <p className="mt-2 text-sm">Last updated: {updated}</p>
        <div className="mt-6 space-y-4">
          <p>Placeholders conformes RGPD (sans conseil juridique).</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responsable du traitement</li>
            <li>Finalités (prospection B2B, contact)</li>
            <li>Base légale (intérêt légitime/consentement)</li>
            <li>Données traitées, Durées, Droits</li>
            <li>Sous-traitants, Sécurité, Contact DPO</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


