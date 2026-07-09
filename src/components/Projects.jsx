import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Film,
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

function frameClasses(aspect) {
  return aspect === "portrait"
    ? "aspect-[9/16] w-full max-w-[220px] sm:max-w-[240px]"
    : "aspect-video w-full";
}

function VideoPreview({ src, fallbackSrc, poster, title, aspect = "landscape" }) {
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
  const frame = frameClasses(aspect);

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
        className={`flex ${frame} items-center justify-center rounded-xl border border-line bg-ink`}
      >
        <div className="text-center text-mist/80">
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
        className={`group relative flex ${frame} items-center justify-center overflow-hidden rounded-xl border border-line bg-frost text-left transition-colors hover:border-blue/45`}
        aria-label={`Load ${title}`}
      >
        {poster && !posterFailed ? (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setPosterFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#2A3547,#141922)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative flex flex-col items-center px-4 text-center">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-blue shadow-card">
            <MonitorPlay size={20} />
          </span>
          <span className="mt-3 block text-sm font-semibold text-white">
            {isDesktop ? "Play preview" : "Tap to load reel"}
          </span>
          <span className="mt-1 block text-xs leading-5 text-white/75">
            {title}
          </span>
        </div>
      </button>
    );
  }

  return (
    <div
      ref={frameRef}
      className={`relative ${frame} overflow-hidden rounded-xl border border-line bg-black`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
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
    </div>
  );
}

function PlaceholderPreview({ project }) {
  const isErp = project.id === "baros-erp";
  const Icon = isErp ? LayoutDashboard : PanelsTopLeft;
  const rows = isErp
    ? ["Stock", "Sales", "Expenses", "Customers"]
    : ["Projects", "Experience", "CV", "Contact"];

  return (
    <div className="aspect-video w-full max-w-full rounded-xl border border-line bg-ink p-3">
      <div className="flex h-full min-w-0 flex-col justify-between rounded-lg border border-line bg-panel p-3 shadow-card">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-blue sm:text-xs">
              {isErp ? "Internal tool preview" : "Site structure"}
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-frost sm:text-base">
              {project.title}
            </p>
          </div>
          <Icon size={20} className="shrink-0 text-blue" />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {rows.map((row) => (
            <span
              key={row}
              className="min-w-0 rounded-md border border-line bg-ink px-2 py-1.5 text-[11px] font-medium text-mist sm:text-xs"
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
        aspect={project.aspect}
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
        <span className="inline-flex min-h-10 max-w-full items-center gap-2 whitespace-normal rounded-lg border border-line bg-ink px-3 py-2.5 text-sm font-medium text-mist sm:px-4">
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
      className="glass glass-hover grid min-w-0 items-start gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(200px,250px)_1fr] lg:gap-6"
    >
      <div className="flex min-w-0 justify-center lg:justify-start">
        <ProjectMedia project={project} />
      </div>

      <div className="min-w-0 overflow-hidden">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">
            {project.type}
          </span>
          <StatusBadge tone={project.statusTone}>{project.status}</StatusBadge>
        </div>

        <h3 className="mt-2.5 font-display text-xl font-semibold text-frost sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-mist sm:text-[15px] sm:leading-7">
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
      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
