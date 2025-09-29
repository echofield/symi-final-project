import { motion } from "framer-motion";
import Button from "../../components/Button";
import { fadeInLeft, staggerContainer, staggerItem } from "../../lib/animations";

export const metadata = {
  title: "Case Studies — Symi System",
  description: "Sample engagements that show how we build internal software for specialized industries.",
};

const highlights = [
  "Intelligent lead qualification tailored to acquisition criteria",
  "Deal pipeline management with underwriting checkpoints",
  "Automated valuation system aligned to broker playbook",
  "15+ hours weekly time savings for the core team",
];

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="section" style={{ borderBottom: "1px solid var(--black)" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <motion.div {...fadeInLeft}>
            <p className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
              Case Study
            </p>
            <h1 style={{ fontSize: "56px", marginBottom: "var(--spacing-md)" }}>
              Business Brokerage Operations Platform
            </h1>
            <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
              Southeastern US Business Broker (anonymized)
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} style={{ display: "grid", gap: "var(--spacing-2xl)" }}>
            <motion.div variants={staggerItem}>
              <h2 style={{ fontSize: "32px", marginBottom: "var(--spacing-sm)" }}>Outcome</h2>
              <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
                A unified platform that connected lead intake, valuation, and deal management, eliminating manual work and
                surfacing the right opportunities faster.
              </p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h2 style={{ fontSize: "32px", marginBottom: "var(--spacing-sm)" }}>Key capabilities</h2>
              <div style={{ display: "grid", gap: "var(--spacing-xs)", fontSize: "18px", color: "var(--gray-700)" }}>
                {highlights.map((item) => (
                  <span key={item}>• {item}</span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h2 style={{ fontSize: "32px", marginBottom: "var(--spacing-sm)" }}>Impact</h2>
              <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
                The brokerage gained back over 15 hours each week, tightened underwriting discipline, and built a proprietary
                data asset that compounds with every deal.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>Build your next internal platform</h2>
          <p style={{ fontSize: "18px", color: "var(--gray-700)", marginBottom: "var(--spacing-xl)" }}>
            We partner with teams in business services, professional services, and specialized markets to turn complex workflows
            into software.
          </p>
          <Button as="a" href="mailto:contact@symi.io?subject=Project%20Consultation">
            Contact for Project Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
