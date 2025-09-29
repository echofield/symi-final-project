import { motion } from "framer-motion";
import Button from "../../components/Button";
import { staggerContainer, staggerItem, fadeInLeft } from "../../lib/animations";

const phases = [
  {
    name: "Discover",
    description:
      "Audit current workflow, systems, and stakeholders to uncover the friction holding execution back.",
  },
  {
    name: "Design",
    description:
      "Translate the ideal future state into wireframes, service blueprints, and technical architecture.",
  },
  {
    name: "Develop",
    description:
      "Build in disciplined phases with weekly reviews, transparent backlog, and measurable deliverables.",
  },
  {
    name: "Deliver",
    description:
      "Deploy, train teams, and support adoption so the system becomes part of everyday operations.",
  },
];

export const metadata = {
  title: "Our Approach — Symi System",
  description: "The phased process we use to design, build, and deploy custom internal software.",
};

export default function ProcessPage() {
  return (
    <div>
      <section className="section" style={{ borderBottom: "1px solid var(--black)" }}>
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <motion.div {...fadeInLeft}>
            <p className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
              Our Approach
            </p>
            <h1 style={{ fontSize: "56px", marginBottom: "var(--spacing-md)" }}>How we build</h1>
            <p style={{ fontSize: "18px", color: "var(--gray-700)" }}>
              Projects are billed by phase—not by hour—so you know exactly what is being delivered and when. You maintain full
              ownership of the code and assets at each stage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <motion.div className="grid-two" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {phases.map((phase) => (
              <motion.div key={phase.name} className="card" variants={staggerItem}>
                <div className="small-caps" style={{ color: "var(--forest-green)", marginBottom: "var(--spacing-sm)" }}>
                  {phase.name}
                </div>
                <p style={{ color: "var(--gray-700)", fontSize: "18px" }}>{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "var(--spacing-md)" }}>Let’s build in phases</h2>
          <p style={{ fontSize: "18px", color: "var(--gray-700)", marginBottom: "var(--spacing-xl)" }}>
            Share where your process is breaking down and we’ll recommend a phased roadmap with clear deliverables.
          </p>
          <Button as="a" href="mailto:contact@symi.io?subject=Project%20Consultation">
            Contact for Project Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
