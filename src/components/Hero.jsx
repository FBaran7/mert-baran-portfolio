import { motion } from "framer-motion";
import {
  ArrowDown,
  Database,
  FileDown,
  Github,
  Linkedin,
  MonitorPlay,
  PanelsTopLeft,
} from "lucide-react";
import { LINKS } from "../data";
import { Btn } from "./ui";

const FOCUS = [
  { value: "React", label: "web interfaces" },
  { value: "Python", label: "business tools" },
  { value: "SQL", label: "data basics" },
  { value: "Unity/C#", label: "interactive prototypes" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-line bg-ink pt-24"
    >
      <video
        className="absolute inset-y-0 right-0 -z-20 hidden h-full w-[52vw] object-cover opacity-22 lg:block"
        src="/videos/cyber-dash-reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-vignette absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 border-l-2 border-blue pl-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            Management Information Systems student
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.98] text-frost sm:text-7xl">
            Building practical software and interactive prototypes.
          </h1>

          <p className="text-balance mt-6 max-w-2xl text-lg leading-8 text-mist">
            I work across React, Python, SQL basics, e-commerce operations, and
            Unity/C# prototypes, turning ideas into usable systems, clean
            interfaces, and presentable project demos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#projects">
              <PanelsTopLeft size={16} /> View work
            </Btn>
            <Btn href={LINKS.cv} download variant="outline">
              <FileDown size={16} /> Download CV
            </Btn>
            <Btn href={LINKS.github} variant="ghost">
              <Github size={16} /> GitHub
            </Btn>
            <Btn href={LINKS.linkedin} variant="ghost">
              <Linkedin size={16} /> LinkedIn
            </Btn>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {FOCUS.map((item) => (
              <div key={item.label} className="bg-ink/80 p-4 backdrop-blur-sm">
                <div className="font-display text-xl font-semibold text-frost">
                  {item.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-mist">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-2xl border border-blue/10 bg-blue/5 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-frost/12 bg-panel shadow-card">
            <div className="grid grid-cols-2 border-b border-line">
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
                  Business system
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-frost">
                  Baros ERP Dashboard
                </p>
                <p className="mt-2 text-sm leading-6 text-mist">
                  Stock, sales, expenses, customers, barcode lookup, and
                  reporting.
                </p>
              </div>
              <div className="border-l border-line p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
                  Technical prototype
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-frost">
                  Cyber Dash Reel
                </p>
                <p className="mt-2 text-sm leading-6 text-mist">
                  Unity 2D, C#, mobile UI, gameplay systems.
                </p>
              </div>
            </div>
            <div className="grid gap-0 lg:grid-cols-[0.72fr_1fr]">
              <div className="grid content-center gap-4 border-b border-line p-6 lg:border-b-0 lg:border-r">
                <div className="rounded-xl border border-line bg-ink/70 p-4">
                  <Database size={22} className="text-blue" />
                  <p className="mt-3 font-display text-lg font-semibold text-frost">
                    MIS + software focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-mist">
                    Real workflows, cleaner interfaces, and projects that can be
                    explained, tested, and improved.
                  </p>
                </div>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-frost"
                >
                  See project details <ArrowDown size={15} />
                </a>
              </div>
              <div className="bg-black/40 p-3">
                <video
                  className="aspect-[16/10] w-full rounded-xl object-cover"
                  src="/videos/cyber-dash-reel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="mt-3 flex items-center gap-2 text-sm text-mist">
                  <MonitorPlay size={16} className="text-blue" />
                  Selected Unity prototype preview
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
