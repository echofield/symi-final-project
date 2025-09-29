"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../lib/animations";

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
              Operations Intelligence
            </motion.p>
            <motion.h1 variants={staggerItem} className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
              Operations Intelligence for Specialized Industries
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-6 text-lg leading-8 text-black sm:text-xl">
              Custom internal software that turns your workflow into competitive advantage. We map your business logic
              into systems that scale execution, insight, and margin.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sm font-light uppercase tracking-widest text-black">
              {industries.join(" • ")}
            </motion.p>
            <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/services" className="btn btn-primary">Explore Services</Link>
              <button type="button" className="btn border border-black bg-white text-black hover:opacity-80" onClick={() => import('../components/ContactModal').then(m => m.useContactModal().open())}>
                Contact for Project Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
              Software built around the way your team operates.
            </h2>
            <p className="mt-4 text-lg text-black">
              Every engagement is designed to capture the nuance of your industry, service delivery, and compliance
              requirements. No templates—just systems that make your expertise easier to deliver.
            </p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-none border border-black bg-white p-8">
                <h3 className="text-xl font-light text-black">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-black">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">Case Study Highlight</p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Business Brokerage Operations Platform
            </h2>
            <p className="mt-4 text-lg text-black">Southeastern US Business Broker</p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-black">
              <li>• Intelligent lead qualification tailored to acquisition criteria</li>
              <li>• Deal pipeline management with underwriting checkpoints</li>
              <li>• Automated valuation system aligned to broker playbook</li>
              <li>• 15+ hours weekly time savings for the core team</li>
            </ul>
            <div className="mt-8"><Link href="/case-studies" className="btn btn-primary">View Full Case Study</Link></div>
          </div>
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
            Ready to build software that mirrors how your business wins?
          </h2>
          <p className="mt-4 text-lg text-black">
            Let’s scope your workflow, align on outcomes, and outline a build plan calibrated to your team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/process" className="btn border border-black bg-white text-black hover:opacity-80">
              Our Approach
            </Link>
            <button type="button" className="btn btn-primary" onClick={() => import('../components/ContactModal').then(m => m.useContactModal().open())}>Contact for Project Consultation</button>
          </div>
        </div>
      </section>
    </>
  );
}
