export const LINKS = {
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
};

export const PROJECTS = [
  {
    id: "baros-erp",
    title: "Baros ERP / Business Dashboard",
    type: "Software / operations system",
    subtitle: "ERP-style dashboard for daily business operations",
    role: "Builder of the internal dashboard concept, workflow structure, and business logic",
    whatBuilt:
      "A practical ERP-style dashboard designed around stock, sales, expenses, customer records, barcode lookup, and business reporting.",
    description:
      "This project connects real business needs to a usable interface: tracking products, understanding daily activity, and reducing manual follow-up across operations.",
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
    type: "Web project",
    subtitle: "Deploy-ready personal portfolio for software and prototype work",
    role: "Designer/developer of the portfolio structure, responsive UI, content model, and deployment setup",
    whatBuilt:
      "A React/Vite portfolio built to present software projects, Unity prototypes, professional experience, and contact information with a clean developer-focused identity.",
    description:
      "The site is structured as a deploy-ready portfolio rather than a temporary preview, with production assets, responsive layouts, and clear project storytelling.",
    techStack: ["React", "Vite", "CSS", "Responsive UI", "Vercel-ready setup"],
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
    type: "Unity prototype",
    subtitle: "Mobile survival prototype with dash-first combat",
    role: "Solo Unity developer: gameplay systems, UI flow, tuning, and reel capture",
    whatBuilt:
      "A top-down cyberpunk survival prototype centered on responsive dashing, enemy pressure, power-up pacing, boss encounters, and readable mobile-first feedback.",
    description:
      "A compact Unity 2D prototype focused on movement feel, survival rhythm, and a presentable gameplay loop.",
    techStack: ["Unity 2D", "C#", "Mobile UI", "Gameplay systems"],
    keyFeatures: [
      "Dash-centered player controller and cooldown rhythm",
      "Enemy and boss progression for survival pacing",
      "Power-ups, combo flow, hit feedback, and screen shake",
      "Mobile-friendly UI states and settings flow",
    ],
    status: "Gameplay reel live / Windows demo coming soon",
    statusTone: "ready",
    video: "/videos/cyber-dash-reel.mp4",
    download: null,
    github: null,
    itch: null,
    category: "unity",
  },
  {
    id: "deadgear",
    title: "DeadGear",
    type: "Unity prototype",
    subtitle: "Zombie survival and defense systems prototype",
    role: "Solo Unity developer: wave logic, survival systems, and demo stabilization",
    whatBuilt:
      "A wave-based zombie defense prototype with spawn control, day/night pressure, resource points, survival loops, and a darker atmospheric presentation.",
    description:
      "A Unity 2D survival prototype designed around readable wave escalation, defense pacing, and a stronger mood than a basic test scene.",
    techStack: ["Unity 2D", "C#", "Wave systems", "Survival loop"],
    keyFeatures: [
      "Wave manager and zombie spawn logic",
      "Day/night cycle supporting tension and pacing",
      "Loot point and survival feedback systems",
      "Demo cleanup pass for smoother presentation",
    ],
    status: "Gameplay reel live / Windows demo coming soon",
    statusTone: "ready",
    video: "/videos/deadgear-reel.mp4",
    download: null,
    github: null,
    itch: null,
    category: "unity",
  },
  {
    id: "vantoryn",
    title: "Vantoryn",
    type: "Unity 3D prototype",
    subtitle: "3D superhero simulator in development",
    role: "Unity 3D prototype owner: traversal, combat direction, and city systems",
    whatBuilt:
      "An early Unity 3D superhero simulator concept focused on flight, city traversal, combat direction, and interactive city behavior.",
    description:
      "A larger prototype direction that remains in development until a stable preview reel is ready.",
    techStack: ["Unity 3D", "C#", "Traversal prototype", "Combat prototype"],
    keyFeatures: [
      "Flight and city traversal direction",
      "Prototype combat and interaction planning",
      "City-system experimentation",
      "Preview reel pending",
    ],
    status: "In development / preview coming soon",
    statusTone: "wip",
    video: null,
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
      "Supported day-to-day Trendyol marketplace operations and helped relaunch a dormant store.",
      "Managed 572+ orders across inventory coordination, shipping flow, customer communication, and tracking.",
      "Worked on product listings, pricing, campaign setup, and marketplace content operations.",
      "Supported product photography, visual editing, and product-page content production.",
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
