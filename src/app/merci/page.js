import Link from "next/link";

export default function MerciPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl">Merci !</h1>
        <p className="mt-4 text-lg text-black">
          Votre demande a bien été envoyée. Nous vous répondons sous 24h.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn btn-primary">Retour à l&apos;accueil</Link>
        </div>
      </div>
    </section>
  );
}
