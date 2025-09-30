export const metadata = { title: 'Privacy Policy — Symi System' };

export default function PrivacyPage() {
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO || '';
  return (
    <div className="bg-white">
      <section className="border-b border-black bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-light tracking-tight text-black">Privacy Policy</h1>
          <p className="mt-6 text-lg text-black">Symi System respects your privacy and collects only information you provide via forms.</p>
          <h2 className="mt-10 text-2xl font-light text-black">Data Use</h2>
          <p className="mt-2 text-lg text-black">We use your information only for consultation and project communication.</p>
          <h2 className="mt-10 text-2xl font-light text-black">Storage</h2>
          <p className="mt-2 text-lg text-black">We do not resell or share data with third parties. Data is stored securely.</p>
          <h2 className="mt-10 text-2xl font-light text-black">Contact</h2>
          {toEmail && (
            <p className="mt-2 text-lg text-black">For any data inquiries, email <a href={`mailto:${toEmail}`} className="underline">{toEmail}</a>.</p>
          )}
        </div>
      </section>
    </div>
  );
}


