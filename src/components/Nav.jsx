import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { LINKS } from "../data";

const NAV = [
  { label: "Work", href: "#projects" },
  { label: "Profile", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-frost/10 bg-ink/88 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          <span className="text-frost">Mert Baran</span>
          <span className="ml-2 text-blue">MIS / Software</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-mist transition-colors hover:text-frost"
            >
              {n.label}
            </a>
          ))}
          <a
            href={LINKS.cv}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-frost/15 px-3 py-1.5 text-sm text-frost transition-all hover:border-teal/50 hover:text-teal"
          >
            <FileDown size={15} /> CV
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-frost/10 p-2 text-mist md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 pb-4 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-mist hover:text-frost"
            >
              {n.label}
            </a>
          ))}
          <a
            href={LINKS.cv}
            download
            className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-frost/15 px-3 py-1.5 text-sm text-frost"
          >
            <FileDown size={15} /> Download CV
          </a>
        </div>
      )}
    </motion.header>
  );
}
