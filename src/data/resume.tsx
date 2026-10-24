import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mark Joshua O. Orcullo",
  initials: "MJO",
  url: "https://github.com/Mark-0909",
  location: "Cavite, Philippines",
  locationLink: "https://www.google.com/maps/place/Cavite,+Philippines",
  description:
    "Computer Science graduate specializing in Software Development, Systems Reliability, and Workflow Automation. Building dependable applications, diagnosing complex system issues, and bridging technical development with operational support.",
  headline:
    "Computer Science graduate specializing in Software Development, Systems Reliability, and Workflow Automation.",
  subheadline:
    "Building dependable applications, diagnosing complex system issues, and bridging technical development with operational support.",
  summary:
    "Computer Science graduate (BSCS) with practical experience spanning full-stack application development, automated workflow architecture, and enterprise technical support. Combines solid engineering fundamentals in object-oriented programming, relational databases, and API integration with hands-on diagnostic discipline and strict SLA compliance. Experienced in translating user requirements into scalable software and maintaining stable, secure operating environments across cross-functional teams.",
  avatarUrl: "/mark.jpg",
  skills: [
    {
      domain: "Software Engineering & Web Development",
      categories: [
        {
          name: "Languages",
          items: ["Python", "C#", "Java", "PHP", "JavaScript", "SQL"],
        },
        {
          name: "Frameworks & Libraries",
          items: ["FastAPI", "React", "Vite", ".NET (WPF)", "CodeIgniter"],
        },
        {
          name: "Databases & Architecture",
          items: [
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "Relational Schema Design",
            "Data Normalization",
          ],
        },
      ],
    },
    {
      domain: "Systems, Automation & QA",
      categories: [
        {
          name: "Automation & Integration",
          items: [
            "n8n Workflows",
            "Webhooks",
            "RESTful APIs",
            "LLM API Pipelines (Claude/Gemini/OpenAI)",
          ],
        },
        {
          name: "Testing & Quality Assurance",
          items: [
            "API Inspection (Postman)",
            "Defect Triage",
            "Edge-Case Testing",
            "Test Automation (Playwright)",
          ],
        },
        {
          name: "Version Control & CI/CD",
          items: ["Git", "GitHub", "GitHub Actions"],
        },
      ],
    },
    {
      domain: "Enterprise IT & Infrastructure",
      categories: [
        {
          name: "Operating Systems & Directory",
          items: [
            "Windows 10/11",
            "Active Directory (User Provisioning, RBAC basics)",
            "Azure Fundamentals",
          ],
        },
        {
          name: "Networking & Diagnostics",
          items: [
            "TCP/IP",
            "DNS",
            "DHCP",
            "CLI Diagnostics (ping, nslookup, tracert, ipconfig)",
          ],
        },
        {
          name: "ITSM & Service Operations",
          items: [
            "Incident & Service Request Management",
            "ITIL 4 Concepts",
            "SLA Adherence",
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
      start: "2025",
      end: "2025",
      description:
        "Participated in Agile sprint planning and feature implementation. Diagnosed and resolved frontend and API integration defects, wrote unit and regression test routines, and created structured documentation for software release cycles.",
    },
    {
      company: "Alorica Inc.",
      href: "https://www.alorica.com",
      badges: ["Customer Operations"],
      location: "Metro Manila, Philippines",
      title: "Customer Support Specialist",
      logoUrl: "alorica.jpg",
      start: "2022",
      end: "2022",
      description:
        "Delivered international client support and technical inquiry resolution. Managed clear issue escalation paths, maintained service-level benchmarks, and documented troubleshooting workflows across enterprise support software.",
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

  projects: [
    {
      title: "TrueScope — Multi-Source Bias-Aware Claim Verification",
      href: "https://github.com/true-scope",
      dates: "2025 - 2026",
      active: true,
      category: "Web",
      description:
        "Architected an end-to-end multi-source claim verification system and browser extension leveraging transformer-based NLP and NLI classification models. Features automated tool calling, bias detection, and structured prompt evaluation guardrails.",
      technologies: [
        "Python",
        "PyTorch",
        "Transformers / BERT / RoBERTa",
        "FastAPI",
        "PostgreSQL",
        "Javascript / TypeScript",
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
  category: "Automation",
  description:
    "An automated, dual-persona job recruitment pipeline built with n8n. Scrapes live job boards daily, analyzes postings against multiple resumes simultaneously using Google Gemini AI, and automatically categorizes them into a tracking database with custom rate-limit handling.",
  technologies: [
    "n8n",
    "Apify",
    "Google Gemini API",
    "Google Workspace APIs",
    "Docker",
    "Automated Web Scraping"
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
      title: "SmartPoultry IoT & Management System",
      href: "https://github.com/Mark-0909/SmartPoultry",
      dates: "2024",
      active: true,
      category: "Software",
      description:
        "Engineered an automated poultry management platform connecting IoT sensor nodes with a central web dashboard. Built real-time monitoring graphs, automated environmental alerting, and structured MySQL inventory management.",
      technologies: [
        "C#",
        ".NET Framework",
        "SQLite / MySQL",
        "WPF (Windows Presentation Foundation)",
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
      category: "Web",
      description:
        "Architected a secure web-based document management platform for organizing, archiving, and retrieving digital records. Built role-based access control (RBAC), automated document tracking, and optimized SQL search queries.",
      technologies: [
        "CodeIgniter / PHP",
        "JavaScript",
        "MySQL",
        "RESTful APIs",
        "tailwindCSS",
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
      title: "Inday Room Rental Management",
      href: "https://github.com/Mark-0909/inday-rental-frontend",
      dates: "2026",
      active: true,
      category: "Web",
      description:
        "A modern, intuitive web interface for the Inday Rental management system allowing landlords to easily manage rooms, track tenants, and generate/monitor utility and rent bills. Features dynamic billing and image uploads for proofs. Built primarily through AI-assisted development.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Java",
        "Spring Boot",
        "MySQL",
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
      title: "Type Wizard: Tower Defense",
      href: "https://github.com/Mark-0909/Type-Wizard-Tower-Defense",
      dates: "2024",
      active: true,
      category: "Game Dev",
      description:
        "Engineered an interactive typing-mechanic tower defense game. Built custom word-matching input systems, enemy pathfinding AI, wave progression controllers, and projectile combat interactions utilizing object-oriented programming patterns.",
      technologies: [
        "Godot Engine",
        "Godot Scripting Language (GDScript)",
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
      title: "Vectraze — Image to Pixel Art Rasterizer",
      href: "https://github.com/Mark-0909/Vectraze",
      dates: "2024",
      active: true,
      category: "Software",
      description:
        "Developed a Windows desktop application that converts standard images into customizable pixel art. Implemented dynamic canvas resizing, rasterization algorithms, a direct pixel-editing toolkit, background isolation, and image filter effects.",
      technologies: [
        "C#",
        ".NET Framework",
        "WPF (Windows Presentation Foundation)",
        "Image Processing Algorithms",
        "OOP Architecture",
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
      category: "Web",
      description:
        "Built an interactive web simulator for Deterministic Finite Automata (DFA). Features a dynamic node-and-edge canvas editor, state machine configuration, self-loop transitions, and step-by-step input string execution.",
      technologies: [
        "React",
        "JavaScript",
        "React Flow (@xyflow/react)",
        "Automata Theory",
        "React Router",
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
    {
      title: "Echo: Soul Saver",
      href: "https://github.com/Mark-0909/Echo-Soul-Saver",
      dates: "2024",
      active: true,
      category: "Game Dev",
      description:
        "Engineered a 2D rogue-like action-platformer featuring dynamic form-shifting mechanics between ghost and human states. Implemented life-draining transformation balance logic, monster combat AI, soul-gathering mechanics, and floor ascension progression.",
      technologies: [
        "Godot Engine",
        "Godot Scripting Language (GDScript)",
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