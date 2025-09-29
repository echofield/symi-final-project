export default function SiteFooter() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-black sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-black">Symi System</p>
        <p className="max-w-xl leading-relaxed">
          Custom internal software for teams in business services, professional services, and specialized markets.
        </p>
        <a
          href="mailto:contact@symi.system?subject=Project%20Consultation"
          className="text-sm font-medium text-black transition hover:opacity-80"
        >
          contact@symi.system
        </a>
      </div>
    </footer>
  );
}
