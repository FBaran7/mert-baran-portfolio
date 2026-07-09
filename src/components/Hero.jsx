import { motion } from "framer-motion";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  PanelsTopLeft,
  UserRound,
} from "lucide-react";
import { LINKS } from "../data";
import { Btn, Tag } from "./ui";

const CHIPS = [
  "MIS Student",
  "Software & Web",
  "Business Operations",
  "Unity Prototypes",
];

const SELECTED_WORK = [
  {
    title: "Baros ERP Dashboard",
    detail: "Internal tool preview for stock, sales, expenses, and reporting.",
  },
  {
    title: "Portfolio Website",
    detail: "React/Vite portfolio for projects, CV, experience, and contact.",
  },
  {
    title: "Cyber Dash Reel",
    detail: "Selected Unity/C# prototype preview.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-line bg-ink pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(127,159,211,0.11),transparent_34%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-9 sm:gap-8 sm:px-8 sm:py-14 md:py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="min-w-0 max-w-3xl"
        >
          <p className="text-sm font-semibold text-blue">
            Management Information Systems student
          </p>

          <h1 className="mt-3 font-display text-[clamp(2.25rem,11vw,3.25rem)] font-semibold leading-tight text-frost sm:mt-4 sm:text-5xl lg:text-6xl">
            Hi, I'm Mert Baran.
          </h1>

          <p className="mt-4 max-w-2xl font-display text-lg leading-7 text-frost/90 sm:text-2xl sm:leading-8">
            Management Information Systems student building practical software,
            web interfaces, and selected Unity prototypes.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-mist sm:mt-5 sm:text-base sm:leading-7">
            <span className="sm:hidden">
              MIS student focused on software, web interfaces, business tools,
              and selected Unity prototypes.
            </span>
            <span className="hidden sm:inline">
              I focus on turning real workflows into clean interfaces, small
              business tools, and presentable project demos. My work combines
              React, Python, SQL basics, e-commerce operations, and Unity/C#.
            </span>
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {CHIPS.map((chip) => (
              <Tag key={chip}>{chip}</Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
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
            <div className="grid min-w-0 sm:grid-cols-[0.82fr_1fr] lg:grid-cols-1">
              <div className="relative min-w-0 bg-ink">
                <img
                  src={LINKS.profilePhoto}
                  alt="Mert Baran Yildirim"
                  className="aspect-square h-full w-full object-cover sm:aspect-[4/5] lg:aspect-[16/11]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent" />
              </div>

              <div className="min-w-0 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-blue">
                  <UserRound size={18} />
                  <p className="text-xs font-semibold uppercase tracking-[0.12em]">
                    Portfolio profile
                  </p>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-frost sm:text-2xl">
                  Practical software, clear interfaces, and presentable demos.
                </h2>
                <p className="mt-3 text-sm leading-6 text-mist">
                  MIS background with hands-on work across business operations,
                  React interfaces, Python tools, and Unity/C# prototypes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {SELECTED_WORK.map((item) => (
              <a
                key={item.title}
                href="#projects"
                className="glass glass-hover group flex min-w-0 items-start justify-between gap-3 p-4"
              >
                <span className="min-w-0">
                  <span className="block font-display text-base font-semibold text-frost">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-mist">
                    {item.detail}
                  </span>
                </span>
                <ArrowRight
                  size={17}
                  className="mt-1 shrink-0 text-mist transition-colors group-hover:text-blue"
                />
              </a>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
