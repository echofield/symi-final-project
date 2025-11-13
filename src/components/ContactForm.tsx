"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type ProjectOption = {
  value: string;
  label: string;
};

type ContactFormCopy = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  fields: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    projectTypePlaceholder: string;
    message: string;
  };
  projectOptions: ProjectOption[];
  submitLabel: string;
  successMessage: string;
  errors: {
    generic: string;
    required: string;
    email: string;
  };
  direct: {
    heading: string;
    email: string;
    location: string;
    responseTime: string;
  };
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = formState.name.trim();
    const email = formState.email.trim();
    const company = formState.company.trim();
    const projectType = formState.projectType.trim();
    const message = formState.message.trim();

    if (!name || !email || !message) {
      setError(copy.errors.required);
      setStatus("error");
      return;
    }

    if (!emailRegex.test(email)) {
      setError(copy.errors.email);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          projectType: projectType || undefined,
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.message ?? copy.errors.generic);
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormState({ name: "", email: "", company: "", projectType: "", message: "" });
    } catch (err) {
      setError(copy.errors.generic);
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          {copy.eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">{copy.eyebrow}</p>
          ) : null}
          <h1 className="mt-4 text-4xl font-light tracking-tight text-black">{copy.title}</h1>
          <p className="mt-4 text-lg text-black">{copy.subtitle}</p>
        </div>

        {status === "success" ? (
          <div className="mx-auto mt-12 max-w-xl rounded-none border border-black bg-white p-10 text-center">
            <p className="text-lg text-black">{copy.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium uppercase tracking-[0.2em] text-black">
                {copy.fields.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="form-input mt-2 w-full"
                value={formState.name}
                onChange={updateField("name")}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium uppercase tracking-[0.2em] text-black">
                {copy.fields.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-input mt-2 w-full"
                value={formState.email}
                onChange={updateField("email")}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium uppercase tracking-[0.2em] text-black">
                {copy.fields.company}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="form-input mt-2 w-full"
                value={formState.company}
                onChange={updateField("company")}
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium uppercase tracking-[0.2em] text-black">
                {copy.fields.projectType}
              </label>
              <select
                id="projectType"
                name="projectType"
                className="form-input mt-2 w-full"
                value={formState.projectType}
                onChange={updateField("projectType")}
              >
                <option value="">{copy.fields.projectTypePlaceholder}</option>
                {copy.projectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium uppercase tracking-[0.2em] text-black">
                {copy.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="form-textarea mt-2 w-full"
                value={formState.message}
                onChange={updateField("message")}
              />
            </div>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "loading"}>
              {status === "loading" ? `${copy.submitLabel}…` : copy.submitLabel}
            </button>
          </form>
        )}

        <div className="mx-auto mt-16 max-w-xl space-y-2 text-center text-sm text-neutral-600">
          <p className="text-base font-light uppercase tracking-[0.2em] text-black">{copy.direct.heading}</p>
          <p>{copy.direct.email}</p>
          <p>{copy.direct.location}</p>
          <p>{copy.direct.responseTime}</p>
        </div>
      </div>
    </section>
  );
}
