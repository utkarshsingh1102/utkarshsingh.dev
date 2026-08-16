export const profile = {
  name: "Utkarsh Singh",
  role: "Data Engineer",
  bio: "I build enterprise data platforms — lineage graphs, Spark pipelines and the web front-ends that make them usable.",
  avatar: "/brand/profile.png",
  avatarHover: "/brand/profile-hover.png",
  cvUrl: "/Utkarsh_Singh_Resume.pdf",
  scheduleUrl:
    "mailto:utkarshsingh1908@gmail.com?subject=Let%E2%80%99s%20schedule%20a%20call",
  details: [
    { icon: "/icons/briefcase.svg", label: "2+ years of experience" },
    {
      icon: "/icons/pin.svg",
      label: "Pune, India",
      href: "https://www.google.com/maps/place/Pune",
    },
    { icon: "/icons/languages.svg", label: "English, Hindi" },
    {
      icon: "/icons/mail.svg",
      label: "utkarshsingh1908@gmail.com",
      href: "mailto:utkarshsingh1908@gmail.com",
    },
    { icon: "/icons/phone.svg", label: "+91 88515 52639" },
  ],
} as const;

export const socials = [
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/iamutkarshsingh/",
  },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/utkarshsingh1102",
  },
] as const;

export const topNav = [
  { label: "utkarsh.info", href: "/" },
  { label: "work.done", href: "/work" },
  { label: "blog.share", href: "/blog" },
] as const;

export const indexNav = [
  { label: "Work", href: "#work" },
  { label: "About me", href: "#about-me" },
  { label: "What I do", href: "#what-i-do" },
  { label: "Tech stack", href: "#tech-stack" },
  { label: "Experience", href: "#awards" },
  { label: "Client’s word", href: "#client-s-word" },
  { label: "Blog", href: "#blog" },
  { label: "Contact me", href: "#contact-me" },
] as const;

export const hero = {
  preTitle: "Hero section",
  titleLead: "Data Engineer &",
  titleTrail: "Platform Builder",
  body: "I design and build end-to-end data platforms — multi-source lineage parsers, Medallion pipelines on Spark, and the interfaces that turn all of it into something a team can actually use.",
} as const;

export const works = [
  {
    title: "Skincare eCommerce",
    href: "/work",
    image: "/work/skincare.png",
    hoverImage: "/work/skincare-hover.png",
  },
  {
    title: "Minimal Form",
    href: "/work",
    image: "/work/minimal-form.png",
    hoverImage: "/work/minimal-form-hover.png",
  },
  {
    title: "Real Estate Website",
    href: "/work",
    image: "/work/real-estate.png",
    hoverImage: "/work/real-estate-hover.png",
  },
  {
    title: "Podcast Landing Page",
    href: "/work",
    image: "/work/podcast.png",
    hoverImage: "/work/podcast-hover.png",
  },
  {
    title: "AI Meets Education",
    href: "/work",
    image: "/work/ai-education.png",
    hoverImage: "/work/ai-education-hover.png",
  },
  {
    title: "Mobile Banking App",
    href: "/work",
    image: "/work/banking.png",
    hoverImage: "/work/banking-hover.png",
  },
] as const;

export const experience = [
  {
    period: "Dec 2025 – present",
    role: "Data Engineer",
    company: "IBM — Data Platform Practice",
  },
  {
    period: "Jun 2024 – Nov 2025",
    role: "Data Engineer",
    company: "NextBigGames",
  },
] as const;

export const aboutImages = [
  "/about/about-3.png",
  "/about/about-2.png",
  "/about/about-4.png",
  "/about/about-1.png",
] as const;

export const services = [
  {
    title: "1. Full Stack Development",
    features: [
      "HTML5 / CSS3 / JavaScript",
      "Next.js & React interfaces",
      "Python services and CLIs",
      "PostgreSQL / MySQL schema design",
      "Docker-based environments",
      "Git workflows & automated tests",
    ],
  },
  {
    title: "2. Design to Code",
    features: [
      "Figma designs built to spec",
      "Responsive, mobile-first layouts",
      "Accessible forms & validation",
      "Cross-browser testing",
      "Migrations off hosted site builders",
      "Asset & load-performance tuning",
    ],
  },
] as const;

export const techRowOne = [
  { name: "Python", level: "95%", logo: "/logos/python.svg" },
  { name: "PySpark", level: "92%", logo: "/logos/pyspark.svg" },
  { name: "Databricks", level: "84%", logo: "/logos/databricks.svg" },
  { name: "Airflow", level: "78%", logo: "/logos/airflow.svg" },
  { name: "Neo4j", level: "82%", logo: "/logos/neo4j.svg" },
  { name: "Snowflake", level: "76%", logo: "/logos/snowflake.svg" },
] as const;

export const techRowTwo = [
  { name: "PostgreSQL", level: "88%", logo: "/logos/postgresql.svg" },
  { name: "MySQL", level: "85%", logo: "/logos/mysql.svg" },
  { name: "JavaScript", level: "80%", logo: "/logos/javascript.svg" },
  { name: "Docker", level: "78%", logo: "/logos/docker.svg" },
  { name: "Git", level: "90%", logo: "/logos/git.svg" },
  { name: "Figma", level: "72%", logo: "/logos/figma.svg" },
] as const;

export const workExperience = [
  {
    role: "Data Engineer",
    company: "IBM",
    team: "Data Platform Practice",
    period: "Dec 2025 – Present",
    stack: "PySpark · AWS Glue · Neo4j · ANTLR4 · Databricks · Airflow",
    highlights: [
      "Lead R&D and primary development of an enterprise data-lineage platform for a UK banking estate, with multi-source parsers (Tableau, QlikView, TWS, Spark) emitting column- and job-level lineage into a unified Neo4j knowledge graph.",
      "Built an internal Ab Initio–to–PySpark conversion platform: two-layer wrapper architecture, DML-to-PySpark schema conversion and an IR/Neo4j graph store, backed by comprehensive automated test suites.",
      "Hardened PySpark/AWS Glue pipelines and parser layers, resolving lineage-accuracy defects and standing up cross-platform pytest collection for reliable CI validation.",
    ],
  },
  {
    role: "Data Engineer",
    company: "NextBigGames",
    team: "Market Intelligence",
    period: "Jun 2024 – Nov 2025",
    stack: "Azure Data Factory · ADLS · PySpark · Delta Lake · Azure SQL",
    highlights: [
      "Built an end-to-end gaming market-intelligence pipeline on Medallion architecture, ingesting AppMagic, Play Store and App Store data across the Idle, Action and RPG genres.",
      "Developed automated ADF ingestion into the Bronze lakehouse and Silver-layer logic for cleaning, filtering, outlier detection and cross-source normalisation.",
      "Engineered Gold-layer datasets for market trends and competitive benchmarking, and automated a narrative report generator feeding internal dashboards.",
    ],
  },
] as const;

export const certifications = {
  credlyUrl: "https://www.credly.com/users/utkarsh-singh.716e44d0",
  items: [
    { name: "AWS Certified Data Engineer – Associate", code: "DEA-C01" },
    { name: "AWS Certified Machine Learning – Associate", code: "MLA-C01" },
    { name: "AWS Certified AI Practitioner", code: "AIF-C01" },
    { name: "Microsoft Fabric Data Engineer Associate", code: "DP-700" },
    { name: "Microsoft Certified: Azure Data Fundamentals", code: "DP-900" },
    { name: "Microsoft Certified: Azure Fundamentals", code: "AZ-900" },
    { name: "Claude Certified Developer – Foundations", code: "CCDV-F" },
    { name: "Claude Certified Associate – Foundations", code: "CCAO-F" },
  ],
} as const;

export const testimonials = [
  {
    quote:
      "The designs were modern, intuitive, and perfectly aligned with our brand. One of the best UI/UX experts we’ve hired!",
    name: "James P",
    title: "Founder ",
    avatar: "/avatars/james.png",
    reversed: false,
  },
  {
    quote:
      "Not only is the work visually stunning, but it’s also grounded in real usability. A true professional.",
    name: "Ananya Rames",
    title: "Tech Lead at CoreUX Labs",
    avatar: "/avatars/ananya.png",
    reversed: true,
  },
  {
    quote:
      "From Figma to functional code — everything was delivered on time.",
    name: "David K",
    title: "CEO of LaunchFoundry",
    avatar: "/avatars/david.png",
    reversed: false,
  },
] as const;

export const posts = [
  {
    date: "Jul 2, 2025",
    title: "Why framer is the future of web development",
    href: "/blog",
  },
  {
    date: "Jun 23, 2025",
    title: "Landing page tips that drive more bookings",
    href: "/blog",
  },
] as const;

export const footer = {
  note: "Data platforms, pipelines and the web — built end to end",
} as const;
