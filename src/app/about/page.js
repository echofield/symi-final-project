const expertise = [
  "System architecture and software development",
  "Business process optimization",
  "Industry-specific workflow design",
];

export const metadata = {
  title: "About — Symi System",
  description: "The team behind Symi System and the expertise we bring to specialized industries.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-br from-purple-100 via-white to-slate-100 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-purple-600">About</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Bridging strategy, systems, and specialized industries
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Symi System brings together operators and technologists who have shipped systems across capital markets,
            professional services, and other specialized environments where off-the-shelf software falls short.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">What we bring</h2>
            <ul className="mt-4 space-y-3 text-lg text-slate-600">
              {expertise.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Why clients work with us</h2>
            <p className="mt-4 text-lg text-slate-600">
              We speak the language of operators. Our work spans capital markets, professional services, and niche
              industries where software has to adapt to existing IP—not the other way around. For teams that need custom
              internal tools, not templatized solutions, we become an extension of your strategic brain.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-100 via-white to-slate-100 p-10 text-center shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Let’s build the system your team deserves</h2>
            <p className="mt-4 text-lg text-slate-600">
              We collaborate with founders and operators who need software that mirrors their methodology and client
              experience.
            </p>
            <a
              href="mailto:contact@symi.system?subject=Project%20Consultation"
              className="btn btn-primary mt-6"
            >
              Contact for Project Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
