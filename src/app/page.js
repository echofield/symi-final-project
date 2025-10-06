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
              Operations Intelligence
            </motion.p>
            <motion.h1 variants={staggerItem} className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
              Cross-Industry Intelligence
            </motion.h1>
            <motion.h2 variants={staggerItem} className="mt-2 text-xl font-light tracking-tight text-black sm:text-2xl">
              Opportunity detection systems for professional services firms
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-6 text-lg leading-8 text-black sm:text-xl">
              Custom intelligence platforms that monitor legal, regulatory, and market signals across industries—surfacing opportunities your competitors miss.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sm font-light uppercase tracking-widest text-black">
              Law Firms • Construction • Finance • Real Estate • Consulting
            </motion.p>
            <motion.div variants={staggerItem} className="mt-4 text-sm leading-relaxed text-black">
              Monitoring official government databases and public registries • 100% legal & verified data • Weekly intelligence delivery
            </motion.div>
            <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn btn-primary">View Sample Report</Link>
              <ContactButton className="border border-black bg-white text-black hover:opacity-80" variant="secondary">Schedule 15-Min Demo</ContactButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">Intelligence Systems Built For Your Industry</h2>
            <p className="mt-4 text-lg text-black">Every engagement starts with understanding what signals matter in your market. We build monitoring systems that correlate data across legal, regulatory, financial, and operational sources—then route opportunities directly to your team.</p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Opportunity Detection Engines</h3>
              <p className="mt-3 text-base leading-7 text-black">Automated monitoring of bankruptcies, regulatory changes, public tenders, and market movements that create new business opportunities.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Cross-Source Intelligence</h3>
              <p className="mt-3 text-base leading-7 text-black">Connect signals from legal databases, government registries, research publications, and financial filings into actionable insights.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Custom Alert Systems</h3>
              <p className="mt-3 text-base leading-7 text-black">Real-time notifications calibrated to your expertise, geography, and client base—delivered to your existing workflow.</p>
            </div>
            <div className="rounded-none border border-black bg-white p-8">
              <h3 className="text-xl font-light text-black">Validated Intelligence</h3>
              <p className="mt-3 text-base leading-7 text-black">Research-grade verification of every signal with confidence scoring, source validation, and false positive filtering.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-black">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest-green)]">Case Study Highlight</p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">Corporate Law Firm Intelligence Platform</h2>
            <p className="mt-4 text-lg text-black">Mid-size Paris law firm, 15 attorneys</p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-black">
              <li>• Automated monitoring of commercial registries, legal publications, and procurement platforms</li>
              <li>• Weekly intelligence reports by practice area</li>
              <li>• Alerts for urgent client risks and competitive movements</li>
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
            <ContactButton>Schedule 15-Min Demo</ContactButton>
          </div>
        </div>
      </section>
    </>
  );
}
