export default function LocaleLoading() {
  return (
    <section className="bg-white py-14 sm:py-20 text-black" aria-live="polite" aria-busy="true">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:space-y-10 sm:px-6">
        <div className="skeleton h-4 w-56" />
        <div className="skeleton h-10 w-full max-w-3xl" />
        <div className="skeleton h-6 w-full max-w-2xl" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="skeleton h-44 w-full" />
          <div className="skeleton h-44 w-full" />
          <div className="skeleton h-44 w-full" />
        </div>
        <div className="skeleton h-56 w-full" />
      </div>
    </section>
  );
}
