"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../lib/animations";
import { ContactButton } from "../components/ContactModal";

const industries = [
  "Business Services",
  "Professional Services",
  "Specialized Markets",
];

const capabilities = [
  {
    title: "Operations dashboards",
    description:
      "Real-time visibility across deals, teams, and service delivery so leadership can steer with confidence.",
  },
  {
    title: "Workflow automation",
    description:
      "Streamline repetitive steps across intake, execution, and reporting with systems built for your process.",
  },
  {
    title: "Internal intelligence platforms",
    description:
      "Blend data, analytics, and institutional knowledge into one source of truth for decision-makers.",
  },
  {
    title: "Custom CRM & pipeline systems",
    description:
      "Purpose-built relationship and deal management that adapts to niche requirements and complex lifecycles.",
  },
];

const approach = [
  {
    name: "Discover",
    copy: "Audit your current workflow, systems, and hidden friction points to define the real constraints.",
  },
  {
    name: "Design",
    copy: "Translate the ideal future state into wireframes, service blueprints, and implementation roadmap.",
  },
  {
    name: "Develop",
    copy: "Ship production-ready software in phases with weekly reviews and stakeholder alignment.",
  },
  {
    name: "Deliver",
    copy: "Deploy, train teams, and provide post-launch support so the new system becomes everyday operations.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <motion.div className="max-w-3xl" variants={staggerContainer} initial="initial" animate="animate">
            <motion.p variants={staggerItem} className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--forest-green)]">
              Cross-industry systems
            </motion.p>
            <motion.h1 variants={staggerItem} className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
              Operations Intelligence
            </motion.h1>
            <motion.h2 variants={staggerItem} className="mt-2 text-xl font-light tracking-tight text-black sm:text-2xl">
              Strategic Systems for Operational Clarity
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-6 text-lg leading-8 text-black sm:text-xl">
              We architect unified intelligence platforms and autonomous agents for leaders managing complexity at scale.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sm font-light uppercase tracking-widest text-black">
              Venture Portfolios • Expansion Plays • Creative Studios • Post-Raise Chaos
            </motion.p>
            <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/services" className="btn border border-black bg-white text-black hover:opacity-80">Explore Services</Link>
              <Link href="/contact" className="btn btn-primary">Request Consultation</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Operating systems for complex teams</h2>
            <p className="mt-4 text-lg text-black">Every build consolidates fragmented tools, data, and rituals into a single operational nervous system that keeps leadership ahead of the chaos.</p>
          </div>
          <motion.div className="mt-12 grid gap-12 sm:grid-cols-2" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-10%" }}>
            <motion.div variants={staggerItem} className="rounded-none border border-black bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-sm">
              <h3 className="text-xl font-light text-black">Unified operations dashboards</h3>
              <p className="mt-3 text-base leading-7 text-black">Live visibility across revenue, delivery, finance, and talent so founders and operators steer decisions from one interface.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="rounded-none border border-black bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-sm">
              <h3 className="text-xl font-light text-black">Autonomous workflow agents</h3>
              <p className="mt-3 text-base leading-7 text-black">Orchestrated agents manage handoffs, escalate exceptions, and document outcomes so teams stay focused on high-leverage work.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="rounded-none border border-black bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-sm">
              <h3 className="text-xl font-light text-black">Knowledge-integrated interfaces</h3>
              <p className="mt-3 text-base leading-7 text-black">Institutional knowledge, operating rituals, and real-time data surfaced together to guide decisions in context.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="rounded-none border border-black bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-sm">
              <h3 className="text-xl font-light text-black">Change-ready architecture</h3>
              <p className="mt-3 text-base leading-7 text-black">Modular systems, source-of-truth governance, and automation guardrails engineered to evolve with each strategic move.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">How we work</h2>
            <p className="mt-4 text-lg text-black">
              Projects are structured by phase with a typical 4–16 week delivery window depending on complexity. You keep
              full ownership of the codebase and assets produced.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div key={step.name} className="rounded-none border border-black bg-white p-8">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--forest-green)]">{step.name}</p>
                <p className="mt-3 text-base leading-7 text-black">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl rounded-none border border-black bg-white px-6 py-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            Ready to architect your operations intelligence?
          </h2>
          <p className="mt-4 text-lg text-black">
            Let’s audit your operations, align on leverage points, and design a system that keeps your organization ahead of scale.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/process" className="btn border border-black bg-white text-black hover:opacity-80">
              Our Approach
            </Link>
            <Link href="/contact" className="btn btn-primary">Request Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
