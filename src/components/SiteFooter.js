export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-slate-700">Symi System</p>
        <p className="max-w-xl leading-relaxed">
          Custom internal software for teams in business services, professional services, and specialized markets.
        </p>
        <a
          href="mailto:contact@symi.system?subject=Project%20Consultation"
          className="text-sm font-medium text-purple-600 transition hover:text-purple-700"
        >
          contact@symi.system
        </a>
      </div>
    </footer>
  );
}
