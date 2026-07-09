import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Rows3,
  Workflow,
} from "lucide-react";
import { LINKS, SKILLS } from "../data";
import { Section } from "./ui";

const GROUP_ICONS = {
  "Software & Web": Code2,
  "Game & Interactive": Boxes,
  "Business & Operations": Rows3,
  Workflow: Workflow,
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Stack" title="Technical stack" compact>
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        {SKILLS.map((group, index) => {
          const Icon = GROUP_ICONS[group.group] || Code2;
          return (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="glass glass-hover min-w-0 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg border border-blue/25 bg-blue/10 p-2 text-blue">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-base font-semibold text-frost">
                  {group.group}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-ink px-3 py-1.5 text-xs font-medium text-mist transition-colors hover:border-blue/40 hover:text-frost"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const CONTACT_CARDS = [
  { icon: Mail, label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
  { icon: Github, label: "GitHub", value: LINKS.githubLabel, href: LINKS.github },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: LINKS.linkedin,
  },
  { icon: Phone, label: "Phone", value: LINKS.phone, href: LINKS.phoneHref },
  { icon: FileDown, label: "CV", value: "Download PDF", href: LINKS.cv, download: true },
  {
    icon: Workflow,
    label: "itch.io",
    value: LINKS.itchLabel,
    href: LINKS.itch,
    disabled: !LINKS.itch,
  },
];

function ContactCard({ card, index }) {
  const Icon = card.icon;
  const className =
    "glass glass-hover flex min-w-0 items-center gap-4 p-5 transition-colors";
  const content = (
    <>
      <span className="rounded-lg border border-blue/25 bg-blue/10 p-2.5 text-blue">
        <Icon size={20} />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-mist">
          {card.label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-frost">
          {card.value}
        </span>
      </span>
    </>
  );

  if (card.disabled) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        className={`${className} opacity-75`}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={card.href}
      download={card.download}
      target={card.href?.startsWith("http") ? "_blank" : undefined}
      rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={className}
    >
      {content}
    </motion.a>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="07 / Contact" title="Contact" compact>
      <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACT_CARDS.map((card, index) => (
          <ContactCard key={card.label} card={card} index={index} />
        ))}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-xs font-medium text-mist">
          © {new Date().getFullYear()} {LINKS.fullName}
        </p>
        <p className="text-xs font-medium text-mist/70">
          MIS, software projects, business systems, and selected Unity prototypes.
        </p>
      </div>
    </footer>
  );
}
