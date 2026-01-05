export default function EvidencePackForm() {
  return (
    <form
      className="mt-8 space-y-5"
      action="https://formspree.io/f/meeodzgz"
      method="POST"
    >
      <div>
        <label className="block text-sm text-black">Nom</label>
        <input className="form-input" type="text" name="name" placeholder="Nom" required />
      </div>
      <div>
        <label className="block text-sm text-black">Email</label>
        <input className="form-input" type="email" name="email" placeholder="Email" required />
      </div>
      <div>
        <label className="block text-sm text-black">Entreprise</label>
        <input className="form-input" type="text" name="company" placeholder="Entreprise" />
      </div>
      <div>
        <label className="block text-sm text-black">Message</label>
        <textarea
          className="form-textarea"
          name="message"
          placeholder="Décrivez brièvement votre situation ou votre besoin"
        />
      </div>
      <input type="hidden" name="_subject" value="Nouvelle demande Evidence Pack — SYMI" />
      <input type="hidden" name="_next" value="https://symi.io/merci" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <button className="btn btn-primary" type="submit">Envoyer ma demande</button>
      </div>
    </form>
  );
}
