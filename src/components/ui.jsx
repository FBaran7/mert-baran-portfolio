import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, children, compact = false }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-4 sm:px-8 ${
        compact ? "py-12" : "py-14 sm:py-16"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            {eyebrow}
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-[clamp(1.45rem,7vw,2rem)] font-semibold text-frost sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="h-px w-full max-w-xs bg-gradient-to-r from-blue/40 via-line to-transparent" />
      </motion.div>
      <div className={compact ? "mt-6" : "mt-8"}>{children}</div>
    </section>
  );
}

export function StatusBadge({ tone, children }) {
  const tones = {
    ready: "border-emerald/30 bg-emerald/10 text-emerald",
    wip: "border-blue/30 bg-blue/10 text-blue",
    proto: "border-line bg-ink text-mist",
    soon: "border-line bg-ink text-mist",
  };
  return (
    <span
      className={`inline-flex max-w-full items-center gap-1.5 whitespace-normal rounded-full border px-2.5 py-1 text-left text-[10px] font-semibold uppercase leading-4 tracking-[0.08em] sm:px-3 sm:text-[11px] sm:tracking-[0.12em] ${tones[tone] || tones.proto}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span className="max-w-full rounded-md border border-line bg-ink px-2.5 py-1 text-[11px] font-medium text-mist">
      {children}
    </span>
  );
}

export function Btn({ href, download, variant = "solid", disabled, children, ...rest }) {
  const base =
    "inline-flex min-h-10 max-w-full items-center justify-center gap-2 whitespace-normal rounded-lg px-3 py-2.5 text-center text-sm font-medium leading-5 transition-all duration-200 sm:px-4";
  const variants = {
    solid:
      "bg-frost text-white hover:bg-blue active:scale-[0.98]",
    outline:
      "border border-frost/20 bg-panel text-frost hover:border-blue hover:text-blue active:scale-[0.98]",
    ghost: "text-mist hover:bg-frost/5 hover:text-frost",
    disabled:
      "border border-line bg-ink text-mist/60 cursor-not-allowed",
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
