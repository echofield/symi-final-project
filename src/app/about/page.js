const expertise = [
  "System architecture and software development",
  "Business process optimization",
  "Industry-specific workflow design",
];

export const metadata = {
  title: "About — Symi System",
  description: "The team behind Symi System and the expertise we bring to specialized industries.",
};

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">About</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl">
            Bridging strategy, systems, and specialized industries
          </h1>
          <p className="mt-4 text-lg leading-8 text-black">
            Symi System brings together operators and technologists who have shipped systems across capital markets,
            professional services, and other specialized environments where off-the-shelf software falls short.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-10">
          <div>
            <h2 className="text-2xl font-light text-black">What we bring</h2>
            <ul className="mt-4 space-y-3 text-lg text-black">
              {expertise.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-light text-black">Why clients work with us</h2>
            <p className="mt-4 text-lg text-black">
              We speak the language of operators. Our work spans capital markets, professional services, and niche
              industries where software has to adapt to existing IP—not the other way around. For teams that need custom
              internal tools, not templatized solutions, we become an extension of your strategic brain.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-none border border-black bg-white p-10 text-center">
            <h2 className="text-3xl font-light tracking-tight text-black">Let’s build the system your team deserves</h2>
            <p className="mt-4 text-lg text-black">
              We collaborate with founders and operators who need software that mirrors their methodology and client
              experience.
            </p>
            <a href="mailto:contact@symi.io" className="btn btn-primary mt-6">Request a Structural Analysis</a>
          </div>
        </div>
      </section>
    </div>
  );
}
