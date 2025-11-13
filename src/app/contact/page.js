import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — Symi System",
  description: "Request a consultation with Symi System to scope your next operations intelligence build.",
};

const copy = {
  eyebrow: "Contact",
  title: "Get in touch",
  subtitle: "Ready to architect your operating system?",
  fields: {
    name: "Name",
    email: "Email",
    company: "Company (optional)",
    projectType: "Project type",
    projectTypePlaceholder: "Select a project type (optional)",
    message: "Message",
  },
  projectOptions: [
    { value: "founders-os", label: "Founder's OS" },
    { value: "portfolio-os", label: "Portfolio OS" },
    { value: "creative-studio-os", label: "Creative Studio OS" },
    { value: "expansion-playbook", label: "Expansion Playbook" },
    { value: "other", label: "Other" },
  ],
  submitLabel: "Request Consultation",
  successMessage: "Thank you. We'll respond within 24-48 hours.",
  errors: {
    generic: "Something went wrong. Please try again.",
    required: "Please complete all required fields.",
    email: "Enter a valid email address.",
  },
  direct: {
    heading: "Direct contact",
    email: "Email: contact@symi.io",
    location: "Based in Paris, France",
    responseTime: "Response time: 24-48 hours",
  },
};

export default function ContactPage() {
  return <ContactForm copy={copy} />;
}
