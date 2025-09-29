import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeInLeft, staggerContainer, staggerItem } from "../lib/animations";

const industries = ["Business Services", "Professional Services", "Specialized Markets"];

const capabilities = [
  {
    title: "Operations dashboards",
    description:
      "Real-time visibility across deals, teams, and delivery so leadership can steer with confidence.",
  },
  {
    title: "Workflow automation",
    description: "Streamline intake, execution, and reporting with systems that follow your process exactly.",
  },
  {
    title: "Internal intelligence platforms",
    description: "Blend data, analytics, and institutional knowledge into one source of truth for decision-makers.",
  },
  {
    title: "Custom CRM & pipeline systems",
    description: "Purpose-built deal and relationship management for complex, specialized lifecycles.",
  },
];

const approach = [
  {
    name: "Discover",
    copy: "Audit your current workflow and pain points to understand the constraints and opportunities.",
  },
  {
    name: "Design",
    copy: "Map the ideal state with wireframes, data structures, and validation against real scenarios.",
  },
  {
    name: "Develop",
    copy: "Build in phases with weekly reviews so stakeholders can shape the product as it comes together.",
  },
  {
    name: "Deliver",
    copy: "Deploy, train, and support so the software becomes embedded in day-to-day operations.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <motion.div {...fadeInLeft}>
            <p className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
              Operations Intelligence
            </p>
            <h1 style={{ fontSize: "64px", marginBottom: "var(--spacing-md)" }}>
              Operations Intelligence for Specialized Industries
            </h1>
            <motion.p
              {...fadeInLeft}
              transition={{ ...fadeInLeft.transition, delay: 0.2 }}
              style={{
                fontSize: "20px",
                maxWidth: "700px",
                marginBottom: "var(--spacing-xl)",
                fontWeight: 300,
              }}
            >
              Custom internal software that turns your workflow into competitive advantage. We map your business logic into
              systems that scale execution, insight, and margin.
            </motion.p>
            <p className="small-caps" style={{ color: "var(--gray-700)", marginBottom: "var(--spacing-lg)" }}>
              {industries.join(" • ")}
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Button as={Link} href="/services" variant="secondary">
                Explore Services
              </Button>
              <Button
                as="a"
                href="mailto:contact@symi.io?subject=Project%20Consultation"
                variant="primary"
              >
                Contact for Project Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ maxWidth: "720px", marginBottom: "var(--spacing-3xl)" }}>
            <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>
              Software built around how your team operates.
            </h2>
            <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
              Every engagement captures the nuance of your industry, service delivery, and compliance requirements. No
              templates—just systems that make your expertise easier to deliver.
            </p>
          </div>
          <motion.div className="grid-two" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {capabilities.map((item) => (
              <motion.div key={item.title} className="card" variants={staggerItem}>
                <h3 style={{ fontSize: "24px", marginBottom: "var(--spacing-sm)" }}>{item.title}</h3>
                <p style={{ color: "var(--gray-700)" }}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <motion.div {...fadeInLeft}>
            <p className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
              Case Study Highlight
            </p>
            <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>
              Business Brokerage Operations Platform
            </h2>
            <p style={{ fontSize: "18px", color: "var(--gray-700)", marginBottom: "var(--spacing-lg)" }}>
              Southeastern US Business Broker (anonymized)
            </p>
            <div style={{ display: "grid", gap: "var(--spacing-sm)", fontSize: "18px", color: "var(--gray-700)" }}>
              <span>• Intelligent lead qualification tailored to acquisition criteria</span>
              <span>• Deal pipeline management with underwriting checkpoints</span>
              <span>• Automated valuation system aligned to broker playbook</span>
              <span>• 15+ hours weekly time savings for the core team</span>
            </div>
            <div style={{ marginTop: "var(--spacing-xl)" }}>
              <Button as={Link} href="/case-studies" variant="secondary">
                View Full Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ maxWidth: "720px", marginBottom: "var(--spacing-3xl)" }}>
            <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>How we work</h2>
            <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
              Projects are structured by phase with a typical 4–16 week delivery window depending on complexity. You keep full
              ownership of the codebase and assets produced.
            </p>
          </div>
          <motion.div className="grid-four" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {approach.map((step) => (
              <motion.div key={step.name} className="card" variants={staggerItem}>
                <div className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
                  {step.name}
                </div>
                <p style={{ color: "var(--gray-700)" }}>{step.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>
            Ready to build software that mirrors how your business wins?
          </h2>
          <p style={{ fontSize: "18px", color: "var(--gray-700)", marginBottom: "var(--spacing-2xl)" }}>
            Let’s scope your workflow, align on outcomes, and outline a build plan calibrated to your team.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Button as={Link} href="/process" variant="secondary">
              Our Approach
            </Button>
            <Button as="a" href="mailto:contact@symi.io?subject=Project%20Consultation">
              Contact for Project Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
