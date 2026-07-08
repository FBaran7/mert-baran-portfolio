import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../data";
import { Section } from "./ui";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="02 / Profile"
      title="A developer profile shaped by software, systems, and operations"
    >
      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="glass p-7 sm:p-8">
          <p className="text-lg leading-8 text-frost">
            I am a Management Information Systems student focused on building
            usable digital systems. My work combines software development,
            business operations, UI thinking, and prototype development.
          </p>
          <p className="mt-5 leading-7 text-mist">
            I like projects where I can connect a real workflow to a clean
            interface or playable system, then document it clearly enough for
            review, deployment, or handoff.
          </p>
        </div>

        <div className="glass grid content-center gap-5 p-7 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              Current direction
            </p>
            <p className="mt-2 text-sm leading-6 text-mist">
              Software/web projects, Unity prototypes, e-commerce operations,
              documentation, and project workflow with GitHub and Jira.
            </p>
          </div>
          <div className="h-px bg-line" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-display text-2xl font-semibold text-frost">MIS</p>
              <p className="text-xs uppercase tracking-[0.14em] text-mist">
                Senior student
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-frost">3.00</p>
              <p className="text-xs uppercase tracking-[0.14em] text-mist">GPA</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="05 / Experience" title="Business operations experience">
      <div className="relative space-y-6 border-l border-line pl-7">
        {EXPERIENCE.map((job, index) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full border-2 border-blue bg-ink" />
            <div className="glass glass-hover p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-frost">
                  {job.role}
                </h3>
                <span className="text-xs font-medium text-mist">{job.date}</span>
              </div>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                <Briefcase size={14} className="text-blue" />
                <span className="font-medium text-blue">{job.company}</span>
                <span className="flex items-center gap-1 text-mist">
                  <MapPin size={12} /> {job.location}
                </span>
              </p>
              <ul className="mt-4 grid gap-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-mist"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="06 / Education" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {EDUCATION.map((education, index) => (
          <motion.div
            key={education.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: index * 0.08 }}
            className="glass glass-hover p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <GraduationCap size={22} className="shrink-0 text-blue" />
              <span className="text-xs font-medium text-mist">{education.date}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-frost">
              {education.school}
            </h3>
            <p className="mt-1 text-sm text-blue">{education.degree}</p>
            <p className="mt-2 text-xs font-medium text-emerald">
              {education.note}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              {education.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="07 / Training" title="Certificates">
      <div className="grid gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((certification, index) => (
          <motion.div
            key={certification}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="glass glass-hover flex items-center gap-3 p-4"
          >
            <Award size={18} className="shrink-0 text-blue" />
            <span className="text-sm text-mist">{certification}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
