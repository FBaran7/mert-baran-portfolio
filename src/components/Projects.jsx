import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Download,
  Film,
  Hourglass,
  LayoutDashboard,
  ListChecks,
  MonitorPlay,
  PanelsTopLeft,
  UserRound,
  Wrench,
} from "lucide-react";
import { PROJECTS } from "../data";
import { Btn, Section, StatusBadge, Tag } from "./ui";

const WINDOWS_DEMO_IDS = new Set(["cyber-dash", "deadgear"]);

function VideoPreview({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="media-frame flex aspect-[16/10] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-mist/70">
          <Film size={28} />
          <span className="text-xs font-semibold uppercase tracking-[0.14em]">
            Video coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <video
      className="media-frame aspect-[16/10] w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setFailed(true)}
      title={title}
    />
  );
}

function SoftwareVisual({ project }) {
  const isErp = project.id === "baros-erp";
  const Icon = isErp ? LayoutDashboard : PanelsTopLeft;
  const rows = isErp
    ? ["Stock records", "Sales overview", "Expenses", "Customer lookup"]
    : ["Responsive layout", "Project stories", "Public assets", "Deploy setup"];

  return (
    <div className="media-frame aspect-[16/10] w-full bg-[linear-gradient(135deg,rgba(127,159,211,0.16),rgba(16,23,34,0.96))] p-5">
      <div className="flex h-full flex-col justify-between rounded-lg border border-frost/10 bg-ink/55 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
              {isErp ? "Internal tool preview" : "Website structure preview"}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-frost">
              {project.title}
            </h3>
          </div>
          <Icon size={30} className="text-blue" />
        </div>
        <div className="grid gap-2">
          {rows.map((row) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-md border border-line bg-panel/70 px-3 py-2 text-sm"
            >
              <span className="text-mist">{row}</span>
              <span className="h-2 w-12 rounded-full bg-blue/35" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.video) {
    return <VideoPreview src={project.video} title={`${project.title} preview`} />;
  }
  if (project.id === "vantoryn") {
    return (
      <div className="media-frame flex aspect-[16/10] w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(127,159,211,0.16),rgba(8,13,20,0.95)_62%)]">
        <div className="text-center">
          <Hourglass size={32} className="mx-auto text-blue" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-mist">
            Preview coming soon
          </p>
        </div>
      </div>
    );
  }
  return <SoftwareVisual project={project} />;
}

function StoryBlock({ icon: Icon, label, children }) {
  return (
    <div className="rounded-lg border border-line bg-ink/45 p-4">
      <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
        <Icon size={14} /> {label}
      </div>
      <div className="text-sm leading-6 text-mist">{children}</div>
    </div>
  );
}

function WorkCard({ project, index }) {
  const hasWindowsDemo = WINDOWS_DEMO_IDS.has(project.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.46, delay: index * 0.05 }}
      className="overflow-hidden rounded-xl border border-line bg-panel/85 shadow-card"
    >
      <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="border-b border-line bg-black/25 p-4 lg:border-b-0 lg:border-r">
          <ProjectVisual project={project} />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">
              {String(index + 1).padStart(2, "0")} / {project.type}
            </span>
            <StatusBadge tone={project.statusTone}>{project.status}</StatusBadge>
          </div>

          <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-frost sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
            {project.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-mist">
            {project.description}
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            <StoryBlock icon={UserRound} label="Role">
              {project.role}
            </StoryBlock>
            <StoryBlock icon={BarChart3} label="What I built">
              {project.whatBuilt}
            </StoryBlock>
            <StoryBlock icon={Wrench} label="Tech stack">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </StoryBlock>
            <StoryBlock icon={ListChecks} label="Key features">
              <ul className="grid gap-1.5">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </StoryBlock>
          </div>

          {hasWindowsDemo && (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Btn disabled variant="solid">
                <Download size={15} /> Windows demo coming soon
              </Btn>
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-mist">
                Gameplay reel available
              </span>
            </div>
          )}
          {!project.github && (
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-mist">
              Project link: {project.category === "unity" ? "Link coming soon" : "Private project"}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="01 / Work"
      title="Software, operations systems, and selected Unity prototypes"
    >
      <div className="space-y-7">
        {PROJECTS.map((project, index) => (
          <WorkCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

export function Demos() {
  const unityProjects = PROJECTS.filter((project) => project.category === "unity");
  const playableReels = unityProjects.filter((project) => project.video);
  const waiting = unityProjects.find((project) => project.id === "vantoryn");

  return (
    <Section id="demos" eyebrow="07 / Prototype status" title="Unity reel and demo availability">
      <div className="grid gap-5 md:grid-cols-3">
        {playableReels.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="glass glass-hover overflow-hidden"
          >
            <div className="bg-black/35 p-3">
              <VideoPreview src={project.video} title={`${project.title} reel`} />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-blue">
                <MonitorPlay size={17} />
                <h3 className="font-display text-lg font-semibold text-frost">
                  {project.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-mist">
                Gameplay reel is live. Windows builds remain disabled until
                packaging is ready.
              </p>
              <div className="mt-4">
                <Btn disabled variant="solid">
                  <Download size={15} /> Windows demo coming soon
                </Btn>
              </div>
            </div>
          </motion.div>
        ))}

        {waiting && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="glass flex min-h-[320px] flex-col justify-between p-6"
          >
            <div>
              <Hourglass size={28} className="text-blue" />
              <h3 className="mt-5 font-display text-lg font-semibold text-frost">
                {waiting.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-mist">
                No preview video is present yet, so it remains an
                in-development project with preview coming soon.
              </p>
            </div>
            <StatusBadge tone="wip">Coming soon</StatusBadge>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
