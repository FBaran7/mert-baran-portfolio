import { motion } from "framer-motion";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  MapPin,
  PanelsTopLeft,
} from "lucide-react";
import { LINKS } from "../data";
import { Btn } from "./ui";

const FOCUS = [
  "Software & Web",
  "Business Systems",
  "E-Commerce Operations",
  "Unity Prototypes",
];

const SELECTED_WORK = [
  {
    title: "Baros ERP",
    detail: "Business dashboard and internal workflow tool.",
  },
  {
    title: "Portfolio Website",
    detail: "React/Vite site for projects, CV, and contact.",
  },
  {
    title: "Vantoryn",
    detail: "Unity 3D hero flight prototype preview.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-line pt-[4.5rem] sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 sm:px-8 sm:py-14 md:py-16 lg:grid-cols-[1.1fr_0.75fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="min-w-0 max-w-3xl"
        >
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-mist">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-blue" /> Istanbul, Turkey
            </span>
            <span className="text-line">|</span>
            Management Information Systems student
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.2rem,9vw,3.4rem)] font-semibold leading-[1.08] text-frost">
            Hi, I'm {LINKS.fullName}.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-mist sm:text-lg sm:leading-8">
            I study Management Information Systems and build practical software:
            business tools, web interfaces, and a few selected Unity prototypes.
            I care about clear workflows, clean presentation, and projects that
            are easy to understand and use.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-frost/80">
            {FOCUS.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            <Btn href="#projects">
              <PanelsTopLeft size={16} /> View Projects
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
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="grid min-w-0 gap-4"
        >
          <div className="glass min-w-0 overflow-hidden">
            <img
              src={LINKS.profilePhoto}
              alt={LINKS.fullName}
              className="aspect-[5/4] w-full object-cover sm:aspect-[16/10] lg:aspect-[5/4]"
            />
            <div className="border-t border-line p-4 sm:p-5">
              <p className="font-display text-lg font-semibold text-frost">
                {LINKS.fullName}
              </p>
              <p className="mt-1 text-sm leading-6 text-mist">
                MIS senior at Yeditepe University. Hands-on with e-commerce
                operations, React, Python tools, and Unity/C#.
              </p>
            </div>
          </div>

          <div className="grid min-w-0 gap-2.5">
            {SELECTED_WORK.map((item) => (
              <a
                key={item.title}
                href="#projects"
                className="glass glass-hover group flex min-w-0 items-center justify-between gap-3 px-4 py-3"
              >
                <span className="min-w-0">
                  <span className="block font-display text-[15px] font-semibold text-frost">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-5 text-mist">
                    {item.detail}
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-mist transition-all group-hover:translate-x-0.5 group-hover:text-blue"
                />
              </a>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
