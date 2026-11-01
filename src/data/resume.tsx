import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mark Joshua O. Orcullo",
  initials: "MJO",
  url: "https://github.com/Mark-0909",
  location: "Cavite, Philippines",
  locationLink: "https://www.google.com/maps/place/Cavite,+Philippines",
  description:
    "Software Engineer specializing in AI Systems, Backend APIs, and Workflow Automation. Building dependable data pipelines, full-stack applications, and automated business workflows.",
  headline:
    "Software Engineer specializing in AI Systems, Backend APIs, and Workflow Automation.",
  subheadline:
    "Building dependable data pipelines, full-stack applications, and automated business workflows. Bridging practical software development with operational reliability.",
  summary:
    "Computer Science graduate with practical experience spanning software engineering, automated workflow architecture, and enterprise technical operations. Combines solid engineering fundamentals in object-oriented programming, relational schema design, and backend API integration with diagnostic discipline and strict SLA compliance. Experienced in translating complex requirements into reliable data pipelines, full-stack applications, and automated systems across cross-functional teams.",
  avatarUrl: "/mark.jpg",
  skills: [
    {
      domain: "Software Engineering & Full-Stack",
      categories: [
        {
          name: "Languages",
          items: [
            "Python",
            "JavaScript",
            "TypeScript",
            "C#",
            "Java",
            "PHP",
            "SQL",
          ],
        },
        {
          name: "Frameworks & Libraries",
          items: [
            "FastAPI",
            "React",
            "Next.js",
            "Vite",
            ".NET (WPF)",
            "Spring Boot",
            "CodeIgniter",
            "TailwindCSS",
          ],
        },
        {
          name: "Databases & Data",
          items: [
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "Supabase",
            "Relational Schema Design",
          ],
        },
      ],
    },
    {
      domain: "Automations, APIs & QA",
      categories: [
        {
          name: "Automation & Scraping",
          items: [
            "n8n",
            "Webhooks",
            "RESTful APIs",
            "LLM APIs (Gemini/Claude/OpenAI)",
            "Apify",
          ],
        },
        {
          name: "Testing & Reliability",
          items: [
            "Postman (API Schemas)",
            "Playwright (E2E)",
            "Defect Triage",
            "Automated Regression Testing",
          ],
        },
        {
          name: "Tooling & CI/CD",
          items: ["Git", "GitHub Actions", "Docker", "Linux CLI"],
        },
      ],
    },
    {
      domain: "Enterprise Systems & Infrastructure",
      categories: [
        {
          name: "Systems & Access",
          items: [
            "Active Directory (User Provisioning & RBAC)",
            "Windows 10/11",
            "Azure Fundamentals",
          ],
        },
        {
          name: "Networking & CLI",
          items: [
            "TCP/IP",
            "DNS",
            "DHCP",
            "VPNs",
            "Diagnostics (ping, traceroute, nslookup, ipconfig)",
          ],
        },
        {
          name: "Service Management",
          items: [
            "ITIL® 4 Framework",
            "SLA Compliance",
            "Incident & Service Request Lifecycle",
            "Technical SOP Documentation",
          ],
        },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "orcullomark856@gmail.com",
    tel: "+639951025876",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mark-0909",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mark-joshua-orcullo-950a74290/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=orcullomark856@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Seven Resources Inc.",
      href: "#",
      badges: ["Internship"],
      location: "Metro Manila, Philippines",
      title: "Software Engineering Intern",
      logoUrl: "sevenResources.png",
      start: "August 2025",
      end: "September 2025",
      description:
        "Participated in Agile sprint planning and feature implementation. Diagnosed and resolved frontend and API integration defects, wrote unit and regression test routines, and created structured documentation for software release cycles.",
    },
    {
      company: "Alorica Inc.",
      href: "https://www.alorica.com",
      badges: ["Customer Operations"],
      location: "Metro Manila, Philippines",
      title: "Customer Service Representative",
      logoUrl: "alorica.jpg",
      start: "March 2022",
      end: "July 2022",
      description:
        "Delivered frontline enterprise support under strict SLA resolution targets. Executed identity verification SOPs to protect sensitive policyholder records, maintained accurate CRM ticket documentation, and handled systematic incident triage.",
    },
  ],

  education: [
    {
      school: "Cavite State University - Silang Campus",
      href: "https://cvsu.edu.ph",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      logoUrl: "cvsu.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Philippine Christian University - Dasmariñas Campus",
      href: "https://pcu.edu.ph",
      degree: "Senior High School (STEM)",
      logoUrl: "pcu.png",
      start: "2018",
      end: "2020",
    },
  ],

  certifications: [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      href: "https://drive.google.com/file/d/1jxZfrPklD-NQg6ln4MKIe7-SUGdyWzId/view?usp=sharing",
      logoUrl: "/cisco.svg",
      start: "2026",
      end: "2026",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      href: "https://drive.google.com/file/d/1pLGlDr1uSOvNUBa1hnyKO1JKDJ-9_cei/view?usp=sharing",
      logoUrl: "/cisco.svg",
      start: "2026",
      end: "2026",
    },
    {
      title: "Introduction to ITIL® V4",
      issuer: "Simplilearn",
      href: "https://drive.google.com/file/d/1-_299QQWfL48CmfWigeVbHS8FjchyJKb/view?usp=sharing",
      logoUrl: "/itil.svg",
      start: "2026",
      end: "2026",
    },
  ],

  projects: [
    {
      title: "TrueScope — Multi-Source Bias-Aware Claim Verification",
      href: "https://github.com/true-scope",
      dates: "2025 - 2026",
      active: true,
      featured: true,
      category: "Web",
      description:
        "Architected an end-to-end multi-source claim verification system and browser extension leveraging transformer-based NLP and NLI classification models. Features automated tool calling, bias detection, and structured prompt evaluation guardrails.\n\n**Accolade:** Selected Presenter at CvSU Research Symposium & 3rd Place Best Presenter. Published systematic literature review.",
      technologies: [
        "Python",
        "PyTorch",
        "Transformers (BERT/RoBERTa)",
        "FastAPI",
        "PostgreSQL",
        "Vite",
        "Chrome Extension API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/true-scope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "truescope.png",
      video: "",
    },
    {
      title: "Autonomous AI Job Hunter",
      href: "https://github.com/Mark-0909/ai-automated-job-hunter",
      dates: "October 2026",
      active: true,
      featured: true,
      category: "Automation",
      description:
        "An automated, dual-persona job recruitment pipeline built with n8n. Scrapes live job boards daily, analyzes postings against multiple resumes simultaneously using Google Gemini AI, and automatically categorizes them into a tracking database with custom rate-limit handling.",
      technologies: [
        "n8n",
        "Apify",
        "Google Gemini API",
        "Webhooks",
        "Docker",
        "Automated Scraping",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mark-0909/ai-automated-job-hunter.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "jobtracker.png",
      video: "",
    },
    {
      title: "Inday Room Rental Management",
      href: "https://github.com/Mark-0909/inday-rental-frontend",
      dates: "2026",
      active: true,
      featured: true,
      category: "Web",
      description:
        "A full-stack property management web application for landlords to administer room availability, track tenant leases, and automate dynamic utility and rent invoicing with payment proof verification.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Java (Spring Boot)",
        "MySQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/Mark-0909/inday-rental-frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/Mark-0909/inday-rental-backend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://inday-rental-frontend.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "Rental.png",
      video: "",
    },
    {
      title: "SmartPoultry IoT & Management System",
      href: "https://github.com/Mark-0909/SmartPoultry",
      dates: "2024",
      active: true,
      featured: true,
      category: "Software",
      description:
        "Engineered an automated poultry management platform connecting IoT sensor nodes with a central web dashboard. Built real-time monitoring graphs, automated environmental alerting, and structured MySQL inventory management.\n\n**Note:** Commercially deployed and delivered to client.",
      technologies: [
        "C#",
        ".NET Framework",
        "WPF",
        "SQLite/MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mark-0909/SmartPoultry",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "smartpoultry.png",
      video: "",
    },
    {
      title: "Document Management System (DMS)",
      href: "https://github.com/Mark-0909/doc_tracking",
      dates: "2025",
      active: true,
      featured: true,
      category: "Web",
      description:
        "Architected a secure web-based document management platform for organizing, archiving, and retrieving digital records. Built role-based access control (RBAC), automated document tracking, and optimized SQL search queries.",
      technologies: [
        "CodeIgniter (PHP)",
        "MySQL",
        "Role-Based Access Control (RBAC)",
        "RESTful APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mark-0909/doc_tracking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "document.png",
      video: "",
    },
    {
      title: "Type Wizard: Tower Defense",
      href: "https://github.com/Mark-0909/Type-Wizard-Tower-Defense",
      dates: "2024",
      active: true,
      featured: false,
      category: "Game Dev",
      description:
        "Engineered an interactive typing-mechanic tower defense game. Built custom word-matching input systems, enemy pathfinding AI, wave progression controllers, and projectile combat interactions utilizing object-oriented programming patterns.",
      technologies: [
        "Godot",
        "GDScript",
        "OOP Architecture",
        "Game Physics & AI",
        "State Machines",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mark-0909/Type-Wizard-Tower-Defense",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Itch.io",
          href: "https://mark-orcullo.itch.io/type-wizard-tower-defense",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "tower.png",
      video: "",
    },
    {
      title: "Echo: Soul Saver",
      href: "https://github.com/Mark-0909/Echo-Soul-Saver",
      dates: "2024",
      active: true,
      featured: false,
      category: "Game Dev",
      description:
        "Engineered a 2D rogue-like action-platformer featuring dynamic form-shifting mechanics between ghost and human states. Implemented life-draining transformation balance logic, monster combat AI, soul-gathering mechanics, and floor ascension progression.",
      technologies: [
        "Godot",
        "GDScript",
        "2D Pixel Art & Animation",
        "Game Physics & Mechanics",
        "Rogue-like Systems",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mark-0909/Echo-Soul-Saver",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Itch.io",
          href: "https://mark-orcullo.itch.io/echo-soul-saver",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "echo.png",
      video: "",
    },
    {
      title: "Vectraze — Image to Pixel Art Rasterizer",
      href: "https://github.com/Mark-0909/Vectraze",
      dates: "2024",
      active: true,
      featured: false,
      category: "Software",
      description:
        "Developed a Windows desktop application that converts standard images into customizable pixel art. Implemented dynamic canvas resizing, rasterization algorithms, a direct pixel-editing toolkit, background isolation, and image filter effects.",
      technologies: [
        "C#",
        ".NET",
        "WPF",
        "Image Processing Algorithms",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mark-0909/Vectraze",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "vectraze.png",
      video: "",
    },
    {
      title: "Interactive DFA Visualizer & Simulator",
      href: "https://dfa-simulator67.netlify.app/",
      dates: "2024",
      active: true,
      featured: false,
      category: "Web",
      description:
        "Built an interactive web simulator for Deterministic Finite Automata (DFA). Features a dynamic node-and-edge canvas editor, state machine configuration, self-loop transitions, and step-by-step input string execution.",
      technologies: [
        "React",
        "React Flow",
        "JavaScript",
        "Automata Theory",
        "CSS3",
      ],
      links: [
        {
          type: "Website",
          href: "https://dfa-simulator67.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mark-0909/dfa-simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "dfa.png",
      video: "",
    },
  ],

achievements: [
    {
      title: "Graduated Senior High School with Honors",
      dates: "2020",
      location: "Philippine Christian University - Dasmariñas Campus",
      description:
        "Completed senior high school with academic honors and a strong foundation in STEM, preparing me for advanced work in computer science and applied technology.",
      image: "",
      sticker: "medal",
      links: [],
    },
    {
      title: "CvSU Silang Research Colloquium — 3rd Place Best Presenter",
      dates: "2026",
      location: "Cavite State University - Silang Campus",
      description:
        "Selected to present undergraduate thesis research on transformer-based multi-source claim verification and awarded 3rd Place for Best Presenter among graduating technical cohorts.",
      image: "",
      sticker: "trophy",
      links: [
      ],
    },
    {
      title: "Selected Presenter — CvSU Main University-Wide Research Symposium",
      dates: "2026",
      location: "Cavite State University - Main Campus (Indang)",
      description:
        "Represented the Department of Computer Studies at the university-wide research symposium to present 'TrueScope: Multi-Source Bias-Aware Claim Verification Algorithm'.",
      image: "",
      sticker: "award",
      links: [
        
      ],
    },
    {
      title: "Published Systematic Literature Review on NLP Discourse Analysis",
      dates: "2025",
      location: "Academic Publication",
      description:
        "Authored and published a comprehensive systematic literature review examining natural language processing techniques, semantic similarity models, and transformer architectures across digital discourse datasets.",
      image: "",
      sticker: "book",
      links: [
        {
          title: "Academic Publication",
          icon: <Icons.fileText className="h-3 w-3" />,
          href: "https://fsh-publication.com/storage/file/978-621-8438-22-4.pdf",
        },
      ],
    },
    {
      title: "Commercial Deployment — SmartPoultry Web & IoT Platform",
      dates: "2024",
      location: "Cavite, Philippines",
      description:
        "Successfully engineered, tested, and delivered a production-ready web management and IoT environmental tracking platform directly to a commercial agricultural client.",
      image: "",
      sticker: "rocket",
      links: [
        
      ],
    },
  ],
} as const;