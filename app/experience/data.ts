export type Evidence = { title: string; description: string; href?: string; image?: string; label?: string; linkLabel?: string };
export type Story = {
  slug: string; kind: string; title: string; organisation: string; period: string;
  location?: string; headline: string; summary: string; context: string; challenge: string;
  contribution: string[]; approach: string[]; outcome: string[];
  approachStages?: { title: string; items: string[] }[]; learning?: string[];
  stack: string[]; evidence: Evidence[]; caveat?: string; story?: string; bullets?: string[];
};

export const stories: Story[] = [
  {
    slug: "techloset",
    kind: "Software development · AI delivery",
    title: "Full Stack Agentic AI Engineer",
    organisation: "Techloset",
    period: "Nov 2026 – Present",
    location: "Faisalabad, Pakistan",
    headline: "Translate client business requirements into AI-powered software solutions.",
    summary: "I joined Techloset, a software development company in Faisalabad, as a Full Stack Agentic AI Engineer. I work from the client's business problem first, then translate it into technical requirements and solutions. Alongside the engineering team, I work on LLM-integrated workflows from solution development through delivery.",
    context: "The work begins with the client's business challenge and the technical requirements needed to turn it into a software solution.",
    challenge: "The challenge is translating business needs into a practical AI-enabled delivery workflow while working with engineering teams from solution development through implementation.",
    contribution: [
      "Analyse client challenges and turn business needs into technical requirements.",
      "Work with engineering teams on LLM-integrated workflows, from solution development through delivery.",
      "Explore AI-driven workflows and LLM integrations as part of building solutions for clients."
    ],
    approach: [
      "Start from the business problem rather than the technology stack.",
      "Map the client problem into technical requirements and solution flow.",
      "Collaborate with engineering teams on LLM-integrated delivery work."
    ],
    outcome: [
      "Working from client requirements to AI-powered software delivery.",
      "Supporting LLM-integrated workflows as part of client solution development."
    ],
    stack: ["AI workflows", "LLM integrations", "Python", "FastAPI"],
    evidence: [{ title: "Current role context", description: "Current portfolio role record for Techloset.", label: "Role record" }],
    story: "I joined Techloset, a software development company in Faisalabad, as a Full Stack Agentic AI Engineer. I work from the client's business problem first, then translate it into technical requirements and solutions. Alongside the engineering team, I work on LLM-integrated workflows from solution development through delivery.",
    bullets: [
      "Analyse client challenges and turn business needs into technical requirements.",
      "Work with engineering teams on LLM-integrated workflows, from solution development through delivery.",
      "Explore AI-driven workflows and LLM integrations as part of building solutions for clients."
    ]
  },
  {
    slug: "muster-broker-copilot",
    kind: "Product development · Product discovery · Workflow design · Conversational automation",
    title: "Product Engineer",
    organisation: "MUSTER",
    period: "Jan 2026 – Oct 2026",
    location: "Doha, Qatar",
    headline: "Defined and prototyped an AI-powered lead-qualification workflow for real-estate brokers.",
    summary: "At MUSTER I worked on an early-stage product for real-estate lead management. I started with the workflow itself: how leads are qualified, followed up, and booked for property viewings. I turned that into prototypes that demonstrated automated lead qualification, then demoed them to prospective users to validate the use case and gather feedback. In parallel I mapped prospects across Qatar, Pakistan, and selected GCC markets and drafted ideal-customer-profile criteria to decide who to talk to first.",
    context: "Real-estate brokers need a clear lead-qualification workflow before follow-up and viewing coordination can happen.",
    challenge: "The work needed to move beyond a generic chatbot concept and turn real-estate enquiry handling into a product workflow that could be demoed and tested.",
    contribution: [
      "Mapped real-estate workflows (lead qualification, follow-ups, property-viewing coordination) and turned user needs into product functionality.",
      "Designed and developed prototypes demonstrating automated lead qualification.",
      "Ran product demos with prospective users to validate use cases and gather feedback.",
      "Researched and mapped prospects across Qatar, Pakistan, and selected GCC markets, and drafted ideal-customer-profile criteria to prioritise them."
    ],
    approach: [
      "Start with how real-estate leads are actually handled.",
      "Turn business workflow requirements into a reusable product concept.",
      "Prototype the product and test the use case with prospective users."
    ],
    outcome: [
      "Defined and prototyped an AI-powered lead-qualification workflow for real-estate brokers.",
      "Validated the use case through product demos and prospect feedback."
    ],
    stack: ["Product development", "Product discovery", "Workflow design", "Conversational automation"],
    evidence: [
      {
        title: "WhatsApp prospect discussion",
        description: "Customer-facing proof of the lead-qualification workflow and early product discussion with a prospect.",
        image: "/evidence/brokercopilot/whatsapp-prospect-demo.jpg",
        label: "Proof screenshot"
      },
      {
        title: "Market research snapshots",
        description: "Outreach and market mapping used to identify target segments and prioritise outreach in Qatar and nearby GCC markets.",
        image: "/evidence/brokercopilot/market-research-snapshots.png",
        label: "Proof screenshot"
      },
      {
        title: "Broker Copilot qualification demo",
        description: "Browser-based proof of the structured property-enquiry and lead-qualification flow.",
        image: "/evidence/brokercopilot/web-qualification-demo.png",
        href: "https://brokercopilot-ai-dem-fnqn.bolt.host/",
        label: "Live demo"
      },
      {
        title: "Telegram workflow flow",
        description: "Qualification workflow screenshot showing the automation path and status handling for incoming leads.",
        image: "/evidence/brokercopilot/telegram-qualification-flow.jpg",
        label: "Proof screenshot"
      },
      {
        title: "Outreach status snapshots",
        description: "Records of ongoing outreach status and opportunity tracking during product validation.",
        image: "/evidence/brokercopilot/outreach-status-snapshots.png",
        label: "Proof screenshot"
      },
      {
        title: "WhatsApp market roadmap",
        description: "Supporting screenshot showing market research and the product discussion context used to refine the workflow.",
        image: "/evidence/brokercopilot/whatsapp-market-roadmap.jpg",
        label: "Proof screenshot"
      }
    ],
    story: "At MUSTER I worked on an early-stage product for real-estate lead management. I started with the workflow itself: how leads are qualified, followed up, and booked for property viewings. I turned that into prototypes that demonstrated automated lead qualification, then demoed them to prospective users to validate the use case and gather feedback. In parallel I mapped prospects across Qatar, Pakistan, and selected GCC markets and drafted ideal-customer-profile criteria to decide who to talk to first.",
    bullets: [
      "Mapped real-estate workflows (lead qualification, follow-ups, property-viewing coordination) and turned user needs into product functionality.",
      "Designed and developed prototypes demonstrating automated lead qualification.",
      "Ran product demos with prospective users to validate use cases and gather feedback.",
      "Researched and mapped prospects across Qatar, Pakistan, and selected GCC markets, and drafted ideal-customer-profile criteria to prioritise them."
    ]
  },
  {
    slug: "lablab-engineering",
    kind: "Collaborative projects · Hackathons",
    title: "Applied AI Developer",
    organisation: "lablab.ai",
    period: "Aug 2024 – Aug 2026",
    location: "Stockholm, Sweden",
    headline: "Built and demonstrated AI prototypes under hackathon deadlines, including as part of the winning team at the IBM Granite Generative AI Hackathon.",
    summary: "On lablab.ai I built AI prototypes in time-boxed hackathon teams. The work centered on retrieval-augmented generation (document retrieval, embeddings, semantic search) and multi-step agent workflows with task decomposition, structured outputs, and tool integration, each delivered as a working demo. I was part of the winning team at the IBM Granite Generative AI Hackathon.",
    context: "Hackathon teams operate under short delivery windows and need working prototypes to demonstrate value quickly.",
    challenge: "The challenge was to align AI capability with a working application prototype while staying within the constraints of the project timeline.",
    contribution: [
      "Implemented retrieval-augmented generation workflows using document retrieval, embeddings, and semantic search.",
      "Integrated LLM capabilities into application prototypes built with Python, FastAPI, and REST APIs.",
      "Built multi-step agent workflows with task decomposition, structured outputs, and tool integration.",
      "Delivered working demonstrations in time-constrained team projects."
    ],
    approach: [
      "Use retrieval, embeddings, and semantic search to ground the prototype.",
      "Turn model capability into a working application flow.",
      "Ship a demonstrable result under the hackathon deadline."
    ],
    outcome: [
      "Built and demonstrated AI prototypes under hackathon deadlines.",
      "Contributed to the winning team at the IBM Granite Generative AI Hackathon."
    ],
    stack: ["Python", "FastAPI", "RAG", "Semantic search", "Agent workflows"],
    evidence: [{ title: "lablab.ai record", description: "Project and hackathon participation profile.", href: "https://lablab.ai/u/@Faraz_Mubeen", label: "Project profile" }],
    story: "On lablab.ai I built AI prototypes in time-boxed hackathon teams. The work centered on retrieval-augmented generation (document retrieval, embeddings, semantic search) and multi-step agent workflows with task decomposition, structured outputs, and tool integration, each delivered as a working demo. I was part of the winning team at the IBM Granite Generative AI Hackathon.",
    bullets: [
      "Implemented retrieval-augmented generation workflows using document retrieval, embeddings, and semantic search.",
      "Integrated LLM capabilities into application prototypes built with Python, FastAPI, and REST APIs.",
      "Built multi-step agent workflows with task decomposition, structured outputs, and tool integration.",
      "Delivered working demonstrations in time-constrained team projects."
    ]
  },
  {
    slug: "stanford-code-in-place",
    kind: "Teaching · Selection",
    title: "Section Leader",
    organisation: "Stanford Code in Place",
    period: "Jan 2026 – May 2026",
    location: "California, United States",
    headline: "Led weekly live Python sessions for a beginner cohort.",
    summary: "As a Code in Place Section Leader I ran weekly live Python sessions for a beginner cohort. I guided learners through exercises, helped them debug and reason through problems, and gave feedback on their assignments.",
    context: "Introductory learners need practical support and feedback to build confidence while learning core programming concepts.",
    challenge: "The challenge was helping learners reason through exercises and debugging in a live online setting without overwhelming them.",
    contribution: [
      "Guided learners through programming exercises, debugging, and problem-solving.",
      "Explained programming concepts and gave feedback on assignments."
    ],
    approach: [
      "Break down the problem into smaller, understandable steps.",
      "Guide learners through debugging and reasoning rather than only giving the answer.",
      "Give feedback that helps them improve their understanding."
    ],
    outcome: [
      "Ran weekly live Python sessions for a beginner cohort.",
      "Supported learners through exercises, debugging, and assignment feedback."
    ],
    stack: ["Python", "Teaching", "Debugging"],
    evidence: [{ title: "Section Leader announcement", description: "Public LinkedIn post associated with the Code in Place experience.", href: "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7450596499068960769/", label: "Public post" }],
    story: "As a Code in Place Section Leader I ran weekly live Python sessions for a beginner cohort. I guided learners through exercises, helped them debug and reason through problems, and gave feedback on their assignments.",
    bullets: [
      "Guided learners through programming exercises, debugging, and problem-solving.",
      "Explained programming concepts and gave feedback on assignments."
    ]
  },
  {
    slug: "1337-ventures-backend",
    kind: "Project-based experience · Backend development",
    title: "Backend Developer",
    organisation: "1337 Ventures",
    period: "Jun 2025 – Sep 2025",
    location: "Kuala Lumpur, Malaysia",
    headline: "Contributed backend components to an AI automation SaaS MVP during a six-week accelerator sprint.",
    summary: "During a six-week accelerator development sprint at 1337 Ventures, I contributed to the backend of an AI automation SaaS MVP. My part was assigned backend functionality in Python and FastAPI for the AI automation features, plus application workflows for document ingestion and structured-output generation. I worked with the startup team through product development and iteration. This was a project-based engineering contribution.",
    context: "A time-boxed accelerator sprint requires rapid backend contributions that support a product workflow without waiting for a fully settled product specification.",
    challenge: "The challenge was contributing meaningful backend functionality in a short sprint while product needs were still evolving.",
    contribution: [
      "Implemented backend functionality in Python and FastAPI for the MVP's AI automation features.",
      "Contributed to application workflows for document ingestion and structured-output generation.",
      "Worked with the startup team through product development and iteration.",
      "Project-based engineering contribution."
    ],
    approach: [
      "Translate product requirements into backend functionality.",
      "Build data and document workflows required by the MVP.",
      "Support product iteration through a six-week sprint."
    ],
    outcome: [
      "Backend functionality shipped for the AI automation MVP during the sprint.",
      "Worked as a project-based contributor through product development and iteration."
    ],
    stack: ["Python", "FastAPI", "AI automation", "Document workflows"],
    evidence: [{ title: "Experience record", description: "Professional profile and project records can be linked here when a public reference or redacted work sample is available.", href: "https://www.linkedin.com/in/faraz369", label: "LinkedIn profile" }],
    story: "During a six-week accelerator development sprint at 1337 Ventures, I contributed to the backend of an AI automation SaaS MVP. My part was assigned backend functionality in Python and FastAPI for the AI automation features, plus application workflows for document ingestion and structured-output generation. I worked with the startup team through product development and iteration. This was a project-based engineering contribution.",
    bullets: [
      "Implemented backend functionality in Python and FastAPI for the MVP's AI automation features.",
      "Contributed to application workflows for document ingestion and structured-output generation.",
      "Worked with the startup team through product development and iteration.",
      "Project-based engineering contribution."
    ]
  },
  {
    slug: "nic-data-engineering",
    kind: "Professional experience · Data engineering",
    title: "AI / Data Engineer",
    organisation: "NIC Faisalabad",
    period: "Jan 2024 – Aug 2024",
    headline: "Automated KPI reporting for a portfolio of 30+ startups, associated with about 60% less manual analyst time and about 12 hours a week of repetitive spreadsheet work.",
    summary: "At NIC Faisalabad, KPI reporting for a portfolio of 30+ startups depended on repetitive, manual spreadsheet work. I replaced it with Python ETL workflows that process portfolio performance data and generate recurring cohort, retention, and funding reports. I added data-quality checks so the outputs stayed consistent and reliable, and used Jupyter and Papermill so each report could be reproduced. The automation was associated with about 60% less manual analyst time and about 12 hours a week of spreadsheet work removed.",
    context: "Portfolio reporting depended on manual spreadsheet work across a large set of companies and recurring reporting needs.",
    challenge: "The challenge was turning repeated portfolio reporting into a reliable ETL and reporting workflow without sacrificing data quality.",
    contribution: [
      "Built ETL workflows in Python, Pandas, SQLAlchemy, and PostgreSQL to process portfolio performance data.",
      "Automated recurring cohort, retention, and funding reports.",
      "Added data-quality checks to keep reporting outputs consistent and reliable.",
      "Used Jupyter and Papermill to make reports reproducible."
    ],
    approach: [
      "Process portfolio performance data into a consistent ETL flow.",
      "Automate recurring reporting rather than rely on manual spreadsheet work.",
      "Use data-quality checks to keep outputs reliable."
    ],
    outcome: [
      "Automated KPI reporting for a portfolio of 30+ startups.",
      "The workflow was associated with about 60% less manual analyst time and about 12 hours a week of repetitive spreadsheet work."
    ],
    stack: ["Python", "Pandas", "SQLAlchemy", "PostgreSQL", "ETL", "Data validation"],
    evidence: [{ title: "PortfolioPulse · related implementation proof", description: "An independently built backend project demonstrating multi-tenant reporting concepts, organisation-scoped records, CSV ingestion, validation, review workflows and PostgreSQL-backed persistence.", href: "https://github.com/faraz-369/portfoliopulse", label: "GitHub repository" }],
    story: "At NIC Faisalabad, KPI reporting for a portfolio of 30+ startups depended on repetitive, manual spreadsheet work. I replaced it with Python ETL workflows that process portfolio performance data and generate recurring cohort, retention, and funding reports. I added data-quality checks so the outputs stayed consistent and reliable, and used Jupyter and Papermill so each report could be reproduced. The automation was associated with about 60% less manual analyst time and about 12 hours a week of spreadsheet work removed.",
    bullets: [
      "Built ETL workflows in Python, Pandas, SQLAlchemy, and PostgreSQL to process portfolio performance data.",
      "Automated recurring cohort, retention, and funding reports.",
      "Added data-quality checks to keep reporting outputs consistent and reliable.",
      "Used Jupyter and Papermill to make reports reproducible."
    ]
  }
];

export const recognitions: Story[] = [
  { slug: "ibm-granite-hackathon", kind: "Team recognition", title: "IBM Granite Generative AI Hackathon", organisation: "Team PolyEns", period: "2025", headline: "A team win built around an applied generative AI prototype.", summary: "PolyEns was recognised as a winning team in the IBM Granite Generative AI Hackathon. This page records the team achievement and links to the public project entry.", context: "The hackathon challenged teams to build useful applications using generative AI capabilities, with a short cycle from idea to demonstration.", challenge: "The team needed to turn a use case into a demonstrable product workflow and coordinate implementation under hackathon constraints.", contribution: ["Participated as a member of Team PolyEns.", "Contributed to the team's software and AI application work; specific personal ownership should be described against the actual repository contributions."], approach: ["Collaborate on the problem framing and prototype workflow.", "Integrate the required AI capability into a demonstrable application."], outcome: ["Team PolyEns was listed as a winning team in the hackathon."], stack: ["IBM Granite", "Generative AI", "Python"], evidence: [{ title: "PolyEns hackathon project", description: "Public project page for the team submission.", href: "https://lablab.ai/ai-hackathons/generative-ai-hackathon-with-ibm-granite/polyens", label: "Project evidence" }], caveat: "This is a team award. Do not imply an individual award or sole authorship." },
  { slug: "cs50-puzzle-day", kind: "Team achievement", title: "Harvard CS50 Puzzle Day", organisation: "Team Cipher Cracker", period: "2025", headline: "A full-score team result across the puzzle set.", summary: "Team Cipher Cracker completed all nine puzzles in CS50 Puzzle Day 2025, according to the achievement record provided for this portfolio.", context: "Puzzle Day rewards collaborative reasoning, pattern recognition and structured problem solving across a set of challenging puzzles.", challenge: "The team needed to interpret unfamiliar problems, test hypotheses and coordinate its reasoning to reach correct solutions.", contribution: ["Participated as a member of Team Cipher Cracker.", "Contributed to collaborative puzzle-solving and reasoning."], approach: ["Break each puzzle into smaller constraints.", "Compare interpretations and test candidate solutions as a team."], outcome: ["Team result: 9/9 puzzles solved."], stack: ["Analytical reasoning", "Problem solving", "Team collaboration"], evidence: [{ title: "Achievement post", description: "Public post associated with the CS50 Puzzle Day result.", href: "https://lnkd.in/p/dniXjMSN", label: "Public evidence" }], caveat: "This is a team result, not an individual competition ranking." },
  { slug: "bicon-billbachao", kind: "Project selection", title: "BillBachao selected for BICON", organisation: "BICON Accelerator", period: "2025", headline: "A final-year project selected to continue through an accelerator pathway.", summary: "BillBachao, the user's final-year project, was selected for the BICON accelerator pathway. The available record describes project selection and continuation into incubation.", context: "An accelerator selection is an external signal that a project has been considered for further development support.", challenge: "The team needed to present a coherent problem, product concept and development direction for review.", contribution: ["Contributed to the BillBachao final-year project.", "Participated in the project work associated with its accelerator selection."], approach: ["Frame the project around a defined user problem.", "Present the product concept and development direction for programme review."], outcome: ["The project was selected for the BICON accelerator pathway, as stated in the supplied achievement record."], stack: ["Product development", "Project collaboration"], evidence: [{ title: "BICON selection reference", description: "Public post associated with the project selection.", href: "https://lnkd.in/p/dHW92p6b", label: "Public evidence" }], caveat: "Selection is not the same as commercial launch, funding or product-market fit. Verify the exact programme stage and dates before adding stronger claims." },
  { slug: "algoverse-scholarship", kind: "Research programme selection", title: "AlgoVerse Research Program", organisation: "EOE.ai × Omdena", period: "2025", headline: "Accepted with a 45% merit scholarship.", summary: "The user reports acceptance into the AlgoVerse Research Program with a 45% merit scholarship.", context: "Research programmes provide a structured environment for participants to deepen technical skills and work through a guided research experience.", challenge: "The programme required an application and selection process before participation.", contribution: ["Applied to and was accepted into the programme.", "Received a reported 45% merit scholarship."], approach: ["Demonstrated interest and relevant background through the application process."], outcome: ["Accepted with a 45% merit scholarship, according to the supplied record."], stack: ["Research development", "Technical learning"], evidence: [{ title: "Programme profile", description: "Public profile reference associated with the user's programme activity.", href: "https://lablab.build/u/%40Faraz_Mubeen", label: "Profile" }], caveat: "Use the official acceptance or scholarship letter as primary evidence when available. Acceptance and scholarship do not by themselves establish programme completion." }
];

export const allStories = [...stories, ...recognitions];
