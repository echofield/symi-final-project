import { motion } from "framer-motion";
import Button from "../../components/Button";
import { fadeInLeft, staggerContainer, staggerItem } from "../../lib/animations";

const expertise = [
  "System architecture and software development",
  "Business process optimization",
  "Industry-specific workflow design",
];

export const metadata = {
  title: "About — Symi System",
  description: "The team behind Symi System and the expertise we bring to specialized industries.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="section" style={{ borderBottom: "1px solid var(--black)" }}>
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <motion.div {...fadeInLeft}>
            <p className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
              About
            </p>
            <h1 style={{ fontSize: "56px", marginBottom: "var(--spacing-md)" }}>
              Bridging strategy, systems, and specialized industries
            </h1>
            <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
              Symi System brings together operators and technologists who have shipped systems across capital markets,
              professional services, and other specialized environments where off-the-shelf software falls short.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ display: "grid", gap: "var(--spacing-2xl)" }}
          >
            <motion.div variants={staggerItem}>
              <h2 style={{ fontSize: "32px", marginBottom: "var(--spacing-sm)" }}>What we bring</h2>
              <div style={{ display: "grid", gap: "var(--spacing-xs)", fontSize: "18px", color: "var(--gray-700)" }}>
                {expertise.map((item) => (
                  <span key={item}>• {item}</span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h2 style={{ fontSize: "32px", marginBottom: "var(--spacing-sm)" }}>Why clients work with us</h2>
              <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
                We speak the language of operators. Our work spans capital markets, professional services, and niche industries
                where software has to adapt to existing IP—not the other way around. For teams that need custom internal tools,
                not templatized solutions, we become an extension of your strategic brain.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>Let’s build the system your team deserves</h2>
          <p style={{ fontSize: "18px", color: "var(--gray-700)", marginBottom: "var(--spacing-xl)" }}>
            We collaborate with founders and operators who need software that mirrors their methodology and client experience.
          </p>
          <Button as="a" href="mailto:contact@symi.io?subject=Project%20Consultation">
            Contact for Project Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
