export default function SiteFooter() {
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO || '';
  return (
    <footer className="border-t border-black bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-black">
        <div className="mb-4 rounded-none border border-black bg-white p-4">
          <p>
            We deliver bespoke operations intelligence platforms and autonomous agents that respect your governance requirements and scale with your organization.
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-black sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-black">© 2025 Symi System — All Rights Reserved</p>
          {toEmail && (
            <p className="max-w-xl leading-relaxed">Contact: <a href={`mailto:${toEmail}`} className="underline">{toEmail}</a></p>
          )}
        </div>
        <nav className="flex items-center gap-4">
          <a href="/privacy" className="hover:opacity-80">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:opacity-80">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
