import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Film,
  Hourglass,
  LayoutDashboard,
  LockKeyhole,
  MonitorPlay,
  PanelsTopLeft,
} from "lucide-react";
import { PROJECTS } from "../data";
import { Btn, Section, StatusBadge, Tag } from "./ui";

const WINDOWS_DEMO_IDS = new Set(["cyber-dash", "deadgear"]);

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, [query]);

  return matches;
}

function useInView() {
  const [node, setNode] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.28 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return [setNode, inView];
}

function VideoPreview({ src, fallbackSrc, poster, title }) {
  const [userStarted, setUserStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc || "");
  const [frameRef, inView] = useInView();
  const videoRef = useRef(null);
  const instanceId = useRef(`video-${Math.random().toString(36).slice(2)}`);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const canAutoPreview = isDesktop && inView;
  const shouldRenderVideo = (canAutoPreview || userStarted) && !failed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView && (isDesktop || userStarted)) {
      const play = video.play();
      play?.catch?.(() => {});
    } else {
      video.pause();
    }
  }, [currentSrc, inView, isDesktop, userStarted]);

  useEffect(() => {
    const pauseOtherPreview = (event) => {
      if (event.detail !== instanceId.current) {
        videoRef.current?.pause();
      }
    };

    window.addEventListener("portfolio-video-play", pauseOtherPreview);
    return () => window.removeEventListener("portfolio-video-play", pauseOtherPreview);
  }, []);

  if ((!src && !fallbackSrc) || failed) {
    return (
      <div
        ref={frameRef}
        className="flex aspect-[16/9] w-full max-w-full items-center justify-center rounded-lg border border-line bg-ink/75"
      >
        <div className="text-center text-mist/75">
          <Film size={24} className="mx-auto" />
          <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.12em]">
            Preview unavailable
          </span>
        </div>
      </div>
    );
  }

  if (!shouldRenderVideo) {
    return (
      <button
        ref={frameRef}
        type="button"
        onClick={() => setUserStarted(true)}
        className="group relative flex aspect-[16/9] w-full max-w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-ink text-left transition-colors hover:border-blue/45"
        aria-label={`Load ${title}`}
      >
        {poster && !posterFailed ? (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setPosterFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(127,159,211,0.12),rgba(16,23,34,0.94))]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
        <div className="relative flex flex-col items-center px-4 text-center">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-frost/15 bg-ink/80 text-blue shadow-card">
            <MonitorPlay size={20} />
          </span>
          <span className="mt-3 block font-display text-sm font-semibold text-frost">
            {isDesktop ? "Project preview" : "Tap to load reel"}
          </span>
          <span className="mt-1 block text-xs leading-5 text-mist">
            {title}
          </span>
        </div>
      </button>
    );
  }

  return (
    <div
      ref={frameRef}
      className="relative w-full max-w-full overflow-hidden rounded-lg border border-line bg-ink"
    >
      <video
        ref={videoRef}
        className="aspect-[16/9] w-full object-cover"
        src={currentSrc}
        autoPlay={canAutoPreview}
        controls={userStarted}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster || undefined}
        onClick={() => setUserStarted(true)}
        onPlay={() => {
          window.dispatchEvent(
            new CustomEvent("portfolio-video-play", { detail: instanceId.current })
          );
        }}
        onError={() => {
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            return;
          }
          setFailed(true);
        }}
        title={title}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3">
        <span className="inline-flex rounded-md bg-ink/75 px-2 py-1 text-xs font-medium text-frost">
          {title}
        </span>
      </div>
    </div>
  );
}

function PlaceholderPreview({ project }) {
  const isErp = project.id === "baros-erp";
  const Icon = isErp ? LayoutDashboard : PanelsTopLeft;
  const rows = isErp
    ? ["Stock", "Sales", "Expenses", "Customers"]
    : ["Projects", "Experience", "CV", "Contact"];

  if (project.id === "vantoryn") {
    return (
      <div className="flex aspect-[16/9] w-full max-w-full items-center justify-center rounded-lg border border-line bg-ink/75">
        <div className="text-center text-mist/75">
          <Hourglass size={24} className="mx-auto text-blue" />
          <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.12em]">
            Preview coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[16/9] w-full max-w-full rounded-lg border border-line bg-[linear-gradient(135deg,rgba(127,159,211,0.10),rgba(16,23,34,0.95))] p-3">
      <div className="flex h-full min-w-0 flex-col justify-between rounded-md border border-frost/10 bg-ink/55 p-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">
              {isErp ? "Internal tool preview" : "Site structure preview"}
            </p>
            <p className="mt-1.5 font-display text-base font-semibold text-frost">
              {project.title}
            </p>
          </div>
          <Icon size={22} className="shrink-0 text-blue" />
        </div>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          {rows.map((row) => (
            <span
              key={row}
              className="min-w-0 rounded-md border border-line bg-panel/75 px-2 py-1.5 text-xs font-medium text-mist sm:px-3 sm:py-2"
            >
              {row}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectMedia({ project }) {
  if (project.video || project.videoFallback) {
    return (
      <VideoPreview
        src={project.video}
        fallbackSrc={project.videoFallback}
        poster={project.poster}
        title={`${project.title} reel`}
      />
    );
  }
  return <PlaceholderPreview project={project} />;
}

function ProjectActions({ project }) {
  const hasWindowsDemo = WINDOWS_DEMO_IDS.has(project.id);

  return (
    <div className="mt-3 flex min-w-0 flex-wrap items-center gap-2.5 sm:mt-4">
      {hasWindowsDemo ? (
        <Btn disabled variant="solid">
          <Download size={15} /> Windows demo coming soon
        </Btn>
      ) : null}
      {project.github ? (
        <Btn href={project.github} variant="outline">
          <ExternalLink size={15} /> Open link
        </Btn>
      ) : (
        <span className="inline-flex min-h-10 max-w-full items-center gap-2 whitespace-normal rounded-lg border border-line bg-ink/45 px-3 py-2.5 text-sm font-medium text-mist sm:px-4">
          <LockKeyhole size={15} />
          {project.category === "unity" ? "Link coming soon" : "Private project"}
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.38, delay: index * 0.04 }}
      className="glass glass-hover grid min-w-0 gap-3 p-3 sm:p-4 lg:grid-cols-[minmax(200px,250px)_1fr]"
    >
      <ProjectMedia project={project} />

      <div className="min-w-0 overflow-hidden">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">
            {project.type}
          </span>
          <StatusBadge tone={project.statusTone}>{project.status}</StatusBadge>
        </div>

        <h3 className="mt-2.5 font-display text-lg font-semibold text-frost sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-mist">
          {project.description}
        </p>

        <div className="mt-3 flex min-w-0 flex-wrap gap-2">
          {project.techStack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <ProjectActions project={project} />
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="01 / Work"
      title="Selected projects"
      compact
    >
      <div className="space-y-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

export function Demos() {
  const unityProjects = PROJECTS.filter((project) => project.category === "unity");
  const playableReels = unityProjects.filter(
    (project) => project.video || project.videoFallback
  );
  const waiting = unityProjects.find(
    (project) => project.id === "vantoryn" && !project.video && !project.videoFallback
  );

  return (
    <Section
      id="demos"
      eyebrow="08 / Prototype status"
      title="Unity reels"
      compact
    >
      <div className="grid gap-4 md:grid-cols-3">
        {playableReels.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="glass glass-hover overflow-hidden"
          >
            <div className="p-3">
              <VideoPreview
                src={project.video}
                fallbackSrc={project.videoFallback}
                poster={project.poster}
                title={`${project.title} reel`}
              />
            </div>
            <div className="px-5 pb-5">
              <div className="flex items-center gap-2 text-blue">
                <MonitorPlay size={17} />
                <h3 className="font-display text-lg font-semibold text-frost">
                  {project.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-mist">
                Preview live. Demo downloads and project links remain Coming Soon.
              </p>
            </div>
          </motion.div>
        ))}

        {waiting && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="glass flex min-h-[230px] flex-col justify-between p-5"
          >
            <div>
              <Hourglass size={24} className="text-blue" />
              <h3 className="mt-4 font-display text-lg font-semibold text-frost">
                {waiting.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-mist">
                Preview coming soon.
              </p>
            </div>
            <StatusBadge tone="wip">Coming soon</StatusBadge>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
