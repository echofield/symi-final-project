import { motion } from "framer-motion";
import Button from "../../components/Button";
import { staggerContainer, staggerItem, fadeInLeft } from "../../lib/animations";

export const metadata = {
  title: "Services — Symi System",
  description: "Custom internal software development for specialized industries.",
};

const typicalProjects = [
  "Operations dashboards",
  "Workflow automation",
  "Internal intelligence platforms",
  "Custom CRM and pipeline systems",
];

export default function ServicesPage() {
  return (
    <div>
      <section className="section" style={{ borderBottom: "1px solid var(--black)" }}>
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <motion.div {...fadeInLeft}>
            <p className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
              Services
            </p>
            <h1 style={{ fontSize: "56px", marginBottom: "var(--spacing-md)" }}>Custom Software Development</h1>
            <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
              We design and build internal platforms that capture how your organization actually operates. Every project is
              scoped to your workflow—no off-the-shelf compromises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "var(--spacing-lg)" }}>Typical projects include:</h2>
          <motion.ul
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ display: "grid", gap: "var(--spacing-sm)", fontSize: "18px", color: "var(--gray-700)" }}
          >
            {typicalProjects.map((item) => (
              <motion.li key={item} variants={staggerItem}>
                • {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <motion.div className="card" variants={fadeInLeft} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 style={{ fontSize: "32px", marginBottom: "var(--spacing-md)" }}>Timeline</h2>
            <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
              Engagements typically run 4–16 weeks depending on complexity, integrations, and compliance requirements. We work
              in phases so you see tangible outcomes at the end of each milestone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>Ready to scope your build?</h2>
          <p style={{ fontSize: "18px", color: "var(--gray-700)", marginBottom: "var(--spacing-xl)" }}>
            Share your objectives and existing systems and we’ll outline a phased roadmap.
          </p>
          <Button as="a" href="mailto:contact@symi.io?subject=Project%20Consultation">
            Contact for Project Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
