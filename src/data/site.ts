export const profile = {
  name: "Utkarsh Singh",
  role: "Full-Stack & Cloud Developer",
  bio: "I build software end to end — the app people use, the services behind it, and the cloud it all runs on.",
  avatar: "/brand/profile.png",
  avatarHover: "/brand/profile-hover.png",
  cvUrl: "/Utkarsh_Singh_Resume.pdf",
  scheduleUrl:
    "mailto:utkarshsingh1908@gmail.com?subject=Let%E2%80%99s%20schedule%20a%20call",
  details: [
    { icon: "/icons/briefcase.svg", label: "3.5+ years of experience" },
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
  { label: "Featured work", href: "#work" },
  { label: "About me", href: "#about-me" },
  { label: "What I do", href: "#what-i-do" },
  { label: "Tech stack", href: "#tech-stack" },
  { label: "Experience", href: "#awards" },
  { label: "Client’s word", href: "#client-s-word" },
  { label: "Blog", href: "#blog" },
  { label: "Get in touch", href: "#contact-me" },
] as const;

export const hero = {
  preTitle: "Available for projects",
  titleLead: "Full-Stack &",
  titleTrail: "Cloud Developer",
  body: "I build applications end to end — the interface, the services behind it, and the cloud they run on. Three and a half years of shipping software that has to stay up, stay correct, and keep working when the load arrives.",
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
    period: "2023 – 2024",
    role: "Freelance developer — client sites and portals",
    company: "",
  },
  {
    period: "2024 – 2025",
    role: "First production platform, owned end to end",
    company: "",
  },
  {
    period: "2025 – now",
    role: "Enterprise software, where correctness is the job",
    company: "",
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
    title: "1. Full-Stack Development",
    features: [
      "React & Next.js UIs",
      "Python APIs & jobs",
      "Postgres & MySQL",
      "Auth & validation",
      "Automated CI tests",
      "Docker environments",
    ],
  },
  {
    title: "2. Cloud & Deployment",
    features: [
      "AWS: EC2, S3, Lambda",
      "Azure app hosting",
      "CI/CD pipelines",
      "Containers & Docker",
      "Monitoring & alerts",
      "Cost & perf tuning",
    ],
  },
  {
    title: "3. Design to Code",
    features: [
      "Figma built to spec",
      "Responsive layouts",
      "Accessible forms",
      "Cross-browser tested",
      "Platform migrations",
      "Performance tuning",
    ],
  },
] as const;

// Usage tiers rather than invented percentages — the same field, honest data.
/**
 * Three tiers, one row each. `mono` marks the brands whose official mark is
 * monochrome (Next.js, Java, Kafka, GitHub) — those are painted in the theme's
 * ink instead of a brand colour, so they stay visible in light and dark alike.
 */
export const techRowOne = [
  { name: "Python", level: "daily", logo: "/logos/python.svg" },
  { name: "TypeScript", level: "daily", logo: "/logos/typescript.svg" },
  { name: "JavaScript", level: "daily", logo: "/logos/javascript.svg" },
  { name: "React", level: "daily", logo: "/logos/react.svg" },
  { name: "Next.js", level: "daily", logo: "/logos/nextdotjs.svg", mono: true },
  { name: "PostgreSQL", level: "daily", logo: "/logos/postgresql.svg" },
  { name: "Docker", level: "daily", logo: "/logos/docker.svg" },
  { name: "Git", level: "daily", logo: "/logos/git.svg" },
] as const;

export const techRowTwo = [
  { name: "Java", level: "in production", logo: "/logos/openjdk.svg", mono: true },
  { name: "Node.js", level: "in production", logo: "/logos/nodedotjs.svg" },
  { name: "MySQL", level: "in production", logo: "/logos/mysql.svg" },
  { name: "PySpark", level: "in production", logo: "/logos/pyspark.svg" },
  { name: "Databricks", level: "in production", logo: "/logos/databricks.svg" },
  { name: "Airflow", level: "in production", logo: "/logos/airflow.svg" },
  { name: "Tailwind CSS", level: "in production", logo: "/logos/tailwindcss.svg" },
  { name: "HTML5", level: "in production", logo: "/logos/html5.svg" },
] as const;

export const techRowThree = [
  { name: "Neo4j", level: "working knowledge", logo: "/logos/neo4j.svg" },
  { name: "Snowflake", level: "working knowledge", logo: "/logos/snowflake.svg" },
  { name: "Kafka", level: "working knowledge", logo: "/logos/kafka.svg", mono: true },
  { name: "Figma", level: "working knowledge", logo: "/logos/figma.svg" },
  { name: "GitHub", level: "working knowledge", logo: "/logos/github.svg", mono: true },
] as const;

export const workExperience = [
  {
    role: "Data Engineer",
    company: "IBM",
    team: "Data Platform Practice",
    period: "Dec 2025 – Present",
    stack: "Python · AWS · Docker · Neo4j · pytest · CI/CD",
    highlights: [
      "Build internal platform software used across an enterprise banking estate — the kind of system where a wrong answer is expensive and nobody notices it for a month.",
      "Shipped a tool that automates a migration a team had been doing by hand, with an automated test harness so its output is verified rather than eyeballed.",
      "Track down the defects that pass every existing check, and make the systems observable enough that the next one surfaces on its own.",
    ],
  },
  {
    role: "Data Engineer",
    company: "NextBigGames",
    team: "Market Intelligence",
    period: "Jun 2024 – Nov 2025",
    stack: "Python · Azure · SQL · Docker · CI/CD",
    highlights: [
      "Built and ran the cloud workloads behind the company’s market product — from pulling in external sources to the report the business opened every morning.",
      "Took work analysts were assembling by hand and turned it into software that runs itself on a schedule.",
      "Reconciled three external providers that disagreed on almost everything into one source the whole company could trust.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    team: "Client projects",
    period: "2023 – 2024",
    stack: "HTML · CSS · JavaScript · MySQL · Figma · Git",
    highlights: [
      "Rebuilt a company’s hosted Framer site as a codebase they own — same design, no subscription, no platform lock-in, handed over with version control and a deploy they can run themselves.",
      "Built an event registration portal from Figma: responsive across breakpoints, client-side validation, accessible markup, tested on Chrome, Firefox and Safari.",
      "Sized its backend and database for a ~100k-registration launch window, with connection pooling and query tuning done before the traffic arrived, not after.",
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
    title: "Founder",
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
    title: "Making a Next.js app survive real traffic",
    href: "/blog",
  },
  {
    date: "Jun 23, 2025",
    title: "Moving a client off Framer to a codebase they own",
    href: "/blog",
  },
] as const;

export const footer = {
  note: "Software & cloud applications, built end to end — Pune",
} as const;
