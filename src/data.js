export const LINKS = {
  fullName: "Mert Baran Yıldırım",
  email: "mertbaran739@gmail.com",
  phone: "+90 535 261 62 92",
  phoneHref: "tel:+905352616292",
  linkedin:
    "https://linkedin.com/in/mert-baran-y%C4%B1ld%C4%B1r%C4%B1m-7757383b6",
  linkedinLabel: "linkedin.com/in/mert-baran-yildirim-7757383b6",
  github: "https://github.com/FBaran7",
  githubLabel: "github.com/FBaran7",
  itch: null,
  itchLabel: "itch.io coming soon",
  cv: "/MERT_BARAN_YILDIRIM_CV.pdf",
  profilePhoto: "/images/profile.jpg",
};

export const PROJECTS = [
  {
    id: "baros-erp",
    title: "Baros ERP / Business Dashboard",
    type: "Business / Internal Tool",
    subtitle: "ERP-style dashboard for daily business operations",
    role: "Builder of the internal dashboard concept, workflow structure, and business logic",
    whatBuilt:
      "A practical ERP-style dashboard designed around stock, sales, expenses, customer records, barcode lookup, and business reporting.",
    description:
      "An ERP-style dashboard for stock, sales, expenses, customer records, barcode lookup, and reporting. Built around daily business operations and simple workflows.",
    techStack: ["Python", "Streamlit", "SQLite", "Business logic", "Reporting"],
    keyFeatures: [
      "Stock, sales, expense, and customer record screens",
      "Barcode lookup flow for faster product checks",
      "Business reporting views for day-to-day decisions",
      "Simple internal-tool structure focused on practical use",
    ],
    status: "Internal tool / in progress",
    statusTone: "wip",
    video: null,
    download: null,
    github: null,
    itch: null,
    category: "software",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    type: "Web / React",
    subtitle: "Deploy-ready personal portfolio for software and prototype work",
    role: "Designer/developer of the portfolio structure, responsive UI, content model, and deployment setup",
    whatBuilt:
      "A React/Vite portfolio built to present software projects, Unity prototypes, professional experience, and contact information with a clean developer-focused identity.",
    description:
      "A deploy-ready React/Vite portfolio for projects, experience, CV, contact information, and selected prototypes.",
    techStack: ["React", "Vite", "CSS", "Responsive UI"],
    keyFeatures: [
      "Professional Work/Profile/Stack/Experience structure",
      "Responsive layouts for desktop, tablet, and mobile",
      "Public asset paths for video reels and CV download",
      "SPA routing support for deployment",
    ],
    status: "Live / deploy-ready",
    statusTone: "ready",
    video: null,
    download: null,
    github: null,
    itch: null,
    category: "web",
  },
  {
    id: "cyber-dash",
    title: "Cyber Dash",
    type: "Unity Prototype",
    subtitle: "Mobile survival prototype with dash-first combat",
    role: "Solo Unity developer: gameplay systems, UI flow, tuning, and reel capture",
    whatBuilt:
      "A top-down cyberpunk survival prototype centered on responsive dashing, enemy pressure, power-up pacing, boss encounters, and readable mobile-first feedback.",
    description:
      "A Unity 2D mobile-style survival prototype focused on dash movement, enemy pressure, and power-ups.",
    techStack: ["Unity 2D", "C#", "Mobile UI", "Gameplay systems"],
    keyFeatures: [
      "Dash-centered player controller and cooldown rhythm",
      "Enemy and boss progression for survival pacing",
      "Power-ups, combo flow, hit feedback, and screen shake",
      "Mobile-friendly UI states and settings flow",
    ],
    status: "Reel live / demo coming soon",
    statusTone: "ready",
    video: "/videos/cyber-dash-reel-web.mp4",
    videoFallback: "/videos/cyber-dash-reel.mp4",
    poster: "/images/cyber-dash-reel-web-poster.jpg",
    aspect: "portrait",
    download: null,
    github: null,
    itch: null,
    category: "unity",
  },
  {
    id: "deadgear",
    title: "DeadGear",
    type: "Unity Prototype",
    subtitle: "Zombie survival and defense systems prototype",
    role: "Solo Unity developer: wave logic, survival systems, and demo stabilization",
    whatBuilt:
      "A wave-based zombie defense prototype with spawn control, day/night pressure, resource points, survival loops, and a darker atmospheric presentation.",
    description:
      "A Unity 2D zombie survival prototype with wave pacing, spawn logic, and survival pressure.",
    techStack: ["Unity 2D", "C#", "Wave systems"],
    keyFeatures: [
      "Wave manager and zombie spawn logic",
      "Day/night cycle supporting tension and pacing",
      "Loot point and survival feedback systems",
      "Demo cleanup pass for smoother presentation",
    ],
    status: "Reel live / demo coming soon",
    statusTone: "ready",
    video: "/videos/deadgear-reel-web.mp4",
    videoFallback: "/videos/deadgear-reel.mp4",
    poster: "/images/deadgear-reel-web-poster.jpg",
    aspect: "portrait",
    download: null,
    github: null,
    itch: null,
    category: "unity",
  },
  {
    id: "vantoryn",
    title: "Vantoryn",
    type: "3D Hero Flight Prototype",
    subtitle: "Unity 3D hero movement and traversal prototype",
    role: "Unity 3D prototype owner: traversal, combat direction, and city systems",
    whatBuilt:
      "A Unity 3D hero prototype focused on flight, city traversal, combat direction, and superhero-style movement.",
    description:
      "A Unity 3D hero prototype focused on flight, city traversal, combat direction, and superhero-style movement.",
    techStack: ["Unity 3D", "C#", "Flight system", "Prototype"],
    keyFeatures: [
      "Flight and city traversal direction",
      "Prototype combat and interaction planning",
      "City-system experimentation",
      "Preview reel available",
    ],
    status: "Preview live / in development",
    statusTone: "ready",
    video: "/videos/vantoryn-preview-web.mp4",
    videoFallback: "/videos/vantoryn-preview.mp4",
    poster: "/images/vantoryn-preview-web-poster.jpg",
    aspect: "landscape",
    download: null,
    github: null,
    itch: null,
    category: "unity",
  },
];

export const EXPERIENCE = [
  {
    role: "E-Commerce Operations Coordinator",
    company: "BAROS Menswear",
    date: "Feb 2026 - Present",
    location: "Istanbul, Turkey",
    bullets: [
      "Supported day-to-day Trendyol marketplace operations and store relaunch work.",
      "Managed 572+ orders across inventory coordination, shipping flow, customer communication, and tracking.",
      "Worked on listings, pricing, campaign setup, and product content operations.",
    ],
  },
  {
    role: "Sales Representative (Wholesale)",
    company: "Melve Tekstil San. ve Tic. Ltd. Şti.",
    date: "Oct 2019 - Nov 2019",
    location: "Istanbul, Turkey",
    bullets: [
      "Gained field experience in B2B textile sales and warehouse operations in Merter.",
    ],
  },
];

export const SKILLS = [
  {
    group: "Software & Web",
    items: ["React", "JavaScript", "HTML/CSS", "Python", "Streamlit", "SQL basics"],
  },
  {
    group: "Game & Interactive",
    items: ["Unity 2D/3D", "C#", "Gameplay systems", "Prototype development"],
  },
  {
    group: "Business & Operations",
    items: [
      "Trendyol marketplace",
      "Product listing",
      "Stock/order tracking",
      "Customer communication",
    ],
  },
  {
    group: "Workflow",
    items: ["GitHub", "Jira", "Documentation", "QA mindset"],
  },
];

export const EDUCATION = [
  {
    school: "Yeditepe University",
    degree: "B.Sc. Management Information Systems (English)",
    date: "Sep 2023 - Jan 2027 (Expected)",
    note: "Senior Student / GPA: 3.00 / 4.00",
    detail:
      "Relevant courses include 3D Game Design, Advanced Web, Virtualization & Cloud, ERP Systems, and Systems Analysis.",
  },
  {
    school: "Özyeğin University",
    degree: "B.Sc. Interior Architecture & Environmental Design (English)",
    date: "Sep 2020 - Jun 2023",
    note: "Transferred to Yeditepe University",
    detail:
      "Completed English prep and two undergraduate years, building a foundation in design thinking and visual communication.",
  },
];

export const CERTIFICATIONS = [
  "Game Development with Unity - BTK Academy (2026)",
  "SQL Applications - BTK Academy (2026)",
  "Python Programming - BTK Academy (2026)",
  "Introduction to E-Commerce - BTK Academy (2026)",
];
