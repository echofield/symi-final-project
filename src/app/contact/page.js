import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl">Contact</h1>
        <p className="mt-4 text-lg text-black">
          Tell us about your project and we’ll respond within 24 hours.
        </p>
        <form
          className="mt-8 space-y-5"
          action="https://formspree.io/f/meeodzgz"
          method="POST"
        >
          <div>
            <label className="block text-sm text-black">Full Name</label>
            <input className="form-input" type="text" name="name" placeholder="Full Name" required />
          </div>
          <div>
            <label className="block text-sm text-black">Email</label>
            <input className="form-input" type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <label className="block text-sm text-black">Company</label>
            <input className="form-input" type="text" name="company" placeholder="Company" />
          </div>
          <div>
            <label className="block text-sm text-black">Message</label>
            <textarea className="form-textarea" name="message" placeholder="Briefly describe your need" required />
          </div>
          <input type="hidden" name="_subject" value="Nouvelle demande Contact — SYMI" />
          <input type="hidden" name="_next" value="https://symi.io/merci" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button className="btn btn-primary" type="submit">Request Intelligence Analysis</button>
          </div>
        </form>
        <p className="mt-6 text-sm text-black">
          Or email us directly:{" "}
          <a href="mailto:contact@symi.io" className="underline">
            contact@symi.io
          </a>
        </p>
        <p className="mt-6">
          <Link href="/" className="btn border border-black bg-white text-black hover:opacity-80">
            Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
