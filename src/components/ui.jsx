import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            {eyebrow}
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold text-frost sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="h-px w-full max-w-xs bg-gradient-to-r from-teal/70 via-line to-transparent" />
      </motion.div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function StatusBadge({ tone, children }) {
  const tones = {
    ready: "border-emerald/40 bg-emerald/10 text-emerald",
    wip: "border-blue/40 bg-blue/10 text-blue",
    proto: "border-mist/30 bg-mist/10 text-mist",
    soon: "border-line bg-panel text-mist",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${tones[tone] || tones.proto}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-line bg-ink/70 px-2.5 py-1 text-[11px] font-medium text-mist">
      {children}
    </span>
  );
}

export function Btn({ href, download, variant = "solid", disabled, children, ...rest }) {
  const base =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200";
  const variants = {
    solid:
      "bg-frost text-ink hover:bg-teal hover:shadow-glow active:scale-[0.98]",
    outline:
      "border border-line bg-ink/30 text-frost hover:border-teal/50 hover:text-teal active:scale-[0.98]",
    ghost: "text-mist hover:bg-frost/5 hover:text-frost",
    disabled:
      "border border-line bg-panel/55 text-mist/55 cursor-not-allowed",
  };
  if (disabled) {
    return (
      <span className={`${base} ${variants.disabled}`} {...rest}>
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      download={download}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]}`}
      {...rest}
    >
      {children}
    </a>
  );
}
