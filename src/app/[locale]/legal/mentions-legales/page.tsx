export default function MentionsPage() {
  const updated = new Date().toISOString().slice(0, 10);
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light">Mentions légales</h1>
        <p className="mt-2 text-sm">Dernière mise à jour : {updated}</p>
        <div className="mt-6 space-y-2">
          <p>Éditeur — placeholder</p>
          <p>Hébergeur — placeholder</p>
          <p>Directeur de la publication — placeholder</p>
          <p>Contact — placeholder</p>
          <p>RCS — placeholder</p>
        </div>
      </div>
    </section>
  );
}


