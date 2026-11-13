"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  ExternalLink, GraduationCap, Trophy, Globe2
} from "lucide-react";

const featuredProjects = [
  {
    name: "PortfolioPulse",
    type: "Backend application",
    description: "A multi-tenant portfolio reporting application built around organisation-scoped data, controlled submissions, and auditable workflows.",
    details: [
      "Problem: Multi-organization portfolio reporting needed trustworthy data and clear access boundaries.",
      "System: A multi-tenant app with JWT authentication, role-based access, validated CSV ingestion, submission review history, and PostgreSQL constraints.",
      "Measure: Behavior verified by automated tests and database constraints.",
      "Result: The application is designed to support trustworthy portfolio reporting.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pytest"],
    href: "https://github.com/faraz-369/portfoliopulse",
    label: "View repository",
    number: "01"
  },
  {
    name: "AgentFault Lab",
    type: "Reliability research prototype",
    description: "A controlled environment for studying failure and recovery behaviour in multi-step agent workflows through fault injection, structured traces, and invariant checks.",
    details: [
      "Problem: Multi-step agent workflows fail in ways that are hard to observe and compare.",
      "System: A fault-injection harness that compares no-recovery, retry, and state-aware recovery policies, with structured traces and invariant checks.",
      "Measure: Task completion and invariant violations per policy.",
      "Result: Policy comparisons are evaluated through structured traces and invariant checks.",
      "Reusable: Built as a harness that can run other agent workflows."
    ],
    stack: ["Python", "FastAPI", "SQLite", "Pytest", "Docker"],
    href: "https://github.com/faraz-369/agentfault-lab-Web",
    demo: "https://agentfault-lab-web.vercel.app/",
    label: "Explore project",
    number: "02"
  },
  {
    name: "RAG Agent Failure Catalog",
    type: "Reproducible engineering catalog",
    description: "A catalogue of failure patterns in retrieval-augmented generation and agent workflows, with minimal reproductions and mitigation ideas.",
    details: [
      "Problem: The same RAG and agent failures get rediscovered on every project.",
      "System: Documented failure patterns, each with a minimal reproduction and a mitigation idea.",
      "Measure: An indexed set of documented patterns and reproductions.",
      "Result: The catalog captures repeatable failure patterns for reuse.",
      "Reusable: A catalog to check against before building a new RAG or agent workflow."
    ],
    stack: ["Python", "RAG", "FAISS", "Testing"],
    href: "https://github.com/faraz-369/rag-agent-failure-catalog",
    label: "View repository",
    number: "03"
  },
  {
    name: "Automated portfolio reporting (NIC Faisalabad)",
    type: "Data pipeline",
    description: "A Python ETL and reporting pipeline replacing the manual process used for portfolio reporting across multiple companies.",
    details: [
      "Problem: Analysts spent hours manually preparing reports for 30+ portfolio companies.",
      "System: A Python ETL and reporting pipeline replacing the manual process.",
      "Measure: Analyst effort and weekly hours spent on reporting.",
      "Result: Associated with about 60% less manual analyst time and about 12 hours a week of repetitive spreadsheet work."
    ],
    stack: ["Python", "ETL", "Reporting"],
    number: "04"
  }
];

const howIWork = [
  { title: "Find problems worth solving.", evidence: "Manual analysis across 30+ portfolio companies was where the time went, so I automated it." },
  { title: "Design the whole system.", evidence: "PortfolioPulse covers authentication, role-based access, validated CSV ingestion, review history, and database constraints, designed together rather than bolted on." },
  { title: "Use AI as engineering leverage.", evidence: "I built document-ingestion and structured-output workflows for a SaaS MVP in a six-week sprint." },
  { title: "Build reusable capabilities.", evidence: "AgentFault Lab and the RAG Agent Failure Catalog turn one-off debugging into a harness and a catalog I can reuse." },
  { title: "Make quality measurable.", evidence: "AgentFault Lab scores recovery policies against explicit invariant checks; PortfolioPulse enforces behavior with database constraints and automated tests." },
  { title: "Optimize for cost and outcomes.", evidence: "Associated with about 60% less manual analyst time and about 12 hours a week of repetitive spreadsheet work at NIC Faisalabad." },
  { title: "Improve from real feedback.", evidence: "Broker Copilot's workflow is shaped by product discovery and demos." }
];

const experiments = [
  { name: "ComplianceRAG", description: "Answers compliance questions with citations to the source document.", href: "https://github.com/faraz-369/ComplianceRAG", label: "View project" },
  { name: "Data Quality Pipeline", description: "Flags missing values, duplicates, and anomalies in CSVs and outputs a risk-classified report.", href: "https://github.com/faraz-369/data-quality-pipeline", label: "View project" },
  { name: "HireMind-AI", description: "Analyzes job descriptions and gives resume feedback and interview prep.", href: "https://github.com/faraz-369/HireMind-AI", label: "View repository" },
  { name: "SafeLite", description: "Research prototype for language-conditioned robotic manipulation in simulation.", href: "https://github.com/faraz-369/SafeLite", label: "View repository" },
  { name: "AdvancedLeadsGeneration-AI", description: "Lead-generation system built for the IBM Granite Generative AI Hackathon; winning submission.", href: "https://github.com/faraz-369/AdvancedLeadsGeneration-AI", label: "View project" },
  { name: "MUSTER Broker Copilot demo", description: "Structures property enquiries and qualifies leads through conversational automation.", href: "https://brokercopilot-ai-dem-fnqn.bolt.host/", label: "Open demo" }
];

const experience = [
  {
    slug: "techloset",
    role: "Full Stack Agentic AI Engineer",
    org: "Techloset",
    period: "Nov 2026 – Present",
    location: "Faisalabad, Pakistan",
    description: "Translate client business requirements into AI-powered software solutions.",
    headline: "Translate client business requirements into AI-powered software solutions.",
    story: "I joined Techloset, a software development company in Faisalabad, as a Full Stack Agentic AI Engineer. I work from the client's business problem first, then translate it into technical requirements and solutions. Alongside the engineering team, I work on LLM-integrated workflows from solution development through delivery.",
    points: [
      "Analyse client challenges and turn business needs into technical requirements.",
      "Work with engineering teams on LLM-integrated workflows, from solution development through delivery.",
      "Explore AI-driven workflows and LLM integrations as part of building solutions for clients."
    ]
  },
  {
    slug: "muster-broker-copilot",
    role: "Product Engineer",
    org: "MUSTER",
    period: "Jan 2026 – Oct 2026",
    location: "Doha, Qatar",
    description: "Defined and prototyped an AI-powered lead-qualification workflow for real-estate brokers.",
    headline: "Defined and prototyped an AI-powered lead-qualification workflow for real-estate brokers.",
    story: "At MUSTER, I worked on an early-stage product concept for real-estate lead management. I mapped how brokers qualify enquiries, translated the workflow into browser and Telegram demonstrations, and prepared a short client-facing walkthrough. Alongside the prototype work, I researched prospects across Qatar, Pakistan, and selected GCC markets and drafted initial ideal-customer-profile criteria.",
    points: [
      "Mapped real-estate workflows (lead qualification, follow-ups, property-viewing coordination) and turned user needs into product functionality.",
      "Designed conversational and browser-based prototypes for automated lead qualification.",
      "Prepared a Telegram workflow and client-facing walkthrough to demonstrate the product concept.",
      "Researched and mapped prospects across Qatar, Pakistan, and selected GCC markets, and drafted ideal-customer-profile criteria to prioritise them."
    ]
  },
  {
    slug: "lablab-engineering",
    role: "Applied AI Developer",
    org: "lablab.ai",
    period: "Aug 2024 – Aug 2026",
    location: "Stockholm, Sweden",
    description: "Built and demonstrated AI prototypes under hackathon deadlines, including as part of the winning team at the IBM Granite Generative AI Hackathon.",
    headline: "Built and demonstrated AI prototypes under hackathon deadlines, including as part of the winning team at the IBM Granite Generative AI Hackathon.",
    story: "On lablab.ai I built AI prototypes in time-boxed hackathon teams. The work centered on retrieval-augmented generation (document retrieval, embeddings, semantic search) and multi-step agent workflows with task decomposition, structured outputs, and tool integration, each delivered as a working demo. I was part of the winning team at the IBM Granite Generative AI Hackathon.",
    points: [
      "Implemented retrieval-augmented generation workflows using document retrieval, embeddings, and semantic search.",
      "Integrated LLM capabilities into application prototypes built with Python, FastAPI, and REST APIs.",
      "Built multi-step agent workflows with task decomposition, structured outputs, and tool integration.",
      "Delivered working demonstrations in time-constrained team projects."
    ]
  },
  {
    slug: "stanford-code-in-place",
    role: "Section Leader",
    org: "Stanford Code in Place",
    period: "Jan 2026 – May 2026",
    location: "California, United States",
    description: "Led weekly live Python sessions for a beginner cohort.",
    headline: "Led weekly live Python sessions for a beginner cohort.",
    story: "As a Code in Place Section Leader I ran weekly live Python sessions for a beginner cohort. I guided learners through exercises, helped them debug and reason through problems, and gave feedback on their assignments.",
    points: [
      "Guided learners through programming exercises, debugging, and problem-solving.",
      "Explained programming concepts and gave feedback on assignments."
    ],
    href: "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7450596499068960769/"
  },
  {
    slug: "1337-ventures-backend",
    role: "Backend Developer",
    org: "1337 Ventures",
    period: "Jun 2025 – Sep 2025",
    location: "Kuala Lumpur, Malaysia",
    description: "Contributed backend components to an AI automation SaaS MVP during a six-week accelerator sprint.",
    headline: "Contributed backend components to an AI automation SaaS MVP during a six-week accelerator sprint.",
    story: "During a six-week accelerator development sprint at 1337 Ventures, I contributed to the backend of an AI automation SaaS MVP. My part was assigned backend functionality in Python and FastAPI for the AI automation features, plus application workflows for document ingestion and structured-output generation. I worked with the startup team through product development and iteration. This was a project-based engineering contribution.",
    points: [
      "Implemented backend functionality in Python and FastAPI for the MVP's AI automation features.",
      "Contributed to application workflows for document ingestion and structured-output generation.",
      "Worked with the startup team through product development and iteration.",
      "Project-based engineering contribution."
    ]
  },
  {
    slug: "nic-data-engineering",
    role: "AI / Data Engineer",
    org: "NIC Faisalabad",
    period: "Jan 2024 – Aug 2024",
    description: "Automated KPI reporting for a portfolio of 30+ startups, associated with about 60% less manual analyst time and about 12 hours a week of repetitive spreadsheet work.",
    headline: "Automated KPI reporting for a portfolio of 30+ startups, associated with about 60% less manual analyst time and about 12 hours a week of repetitive spreadsheet work.",
    story: "At NIC Faisalabad, KPI reporting for a portfolio of 30+ startups depended on repetitive, manual spreadsheet work. I replaced it with Python ETL workflows that process portfolio performance data and generate recurring cohort, retention, and funding reports. I added data-quality checks so the outputs stayed consistent and reliable, and used Jupyter and Papermill so each report could be reproduced. The automation was associated with about 60% less manual analyst time and about 12 hours a week of spreadsheet work removed.",
    points: [
      "Built ETL workflows in Python, Pandas, SQLAlchemy, and PostgreSQL to process portfolio performance data.",
      "Automated recurring cohort, retention, and funding reports.",
      "Added data-quality checks to keep reporting outputs consistent and reliable.",
      "Used Jupyter and Papermill to make reports reproducible."
    ]
  }
];

const awards = [
  { slug: "ibm-granite-hackathon", title: "IBM Granite Generative AI Hackathon", note: "Winning team · PolyEns", link: "https://lablab.ai/ai-hackathons/generative-ai-hackathon-with-ibm-granite/polyens", tag: "Team award" },
  { slug: "cs50-puzzle-day", title: "CS50 Puzzle Day", note: "Winning team · Cipher Cracker · 9/9 puzzles", link: "https://lnkd.in/p/dniXjMSN", tag: "Team award" },
  { slug: "stanford-code-in-place", title: "Stanford Code in Place", note: "Section Leader · 2025 and 2026", link: "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7450596499068960769/", tag: "Selection" },
  { slug: "bicon-billbachao", title: "BICON Accelerator", note: "BillBachao selected and continued into incubation", link: "https://lnkd.in/p/dHW92p6b", tag: "Project selection" },
  { slug: "algoverse-scholarship", title: "AlgoVerse Research Program", note: "45% merit scholarship · EOE.ai × Omdena", link: "https://lablab.build/u/%40Faraz_Mubeen", tag: "Scholarship" }
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Faraz Mubeen Haider home">
          <span className="brand-mark">FM</span>
          <span>FARAZ<span className="brand-dot">.</span></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={mobileOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {[
            { label: "Work", href: "#work" },
            { label: "How I work", href: "#how-i-work" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" }
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-cta" href="mailto:faraz.outreach8@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> Software Engineer · Intelligent Systems</div>
            <h1>I engineer intelligent systems that continuously create measurable value.</h1>
            <p className="hero-subtitle">
              Backend, data, and applied-AI systems — from defining the problem to the metrics that prove they work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See the work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="mailto:faraz.outreach8@gmail.com"><Mail size={16} /> Contact me</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/faraz-369" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/faraz369" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href="https://huggingface.co/Faraz618" target="_blank" rel="noreferrer"><Globe2 size={16} /> Hugging Face <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-orbit orbit-a" />
            <div className="portrait-orbit orbit-b" />
            <div className="portrait-frame">
              <Image src="/images/faraz-portrait.jpg" alt="Portrait of Faraz Mubeen Haider" fill priority sizes="(max-width: 800px) 70vw, 430px" className="portrait" />
            </div>
            <div className="floating-card code-card">
              <div className="code-dots"><i /><i /><i /></div>
              <code><span>class</span> Backend:</code>
              <code>&nbsp;&nbsp;build(reliable=True)</code>
              <code>&nbsp;&nbsp;ship(with_tests=True)</code>
              <span className="code-cursor">_</span>
            </div>
            <div className="visual-caption"><span className="caption-line" /> ENGINEERING · SYSTEMS · DELIVERY</div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="proof-strip" aria-label="Professional highlights">
        <div className="proof-item"><strong>30+</strong><span>portfolio companies<br />on automated reporting</span></div>
        <div className="proof-divider" />
        <div className="proof-item"><strong>60%</strong><span>less manual analyst effort</span></div>
        <div className="proof-divider" />
        <div className="proof-item"><strong>12 hrs/week</strong><span>of analysis time saved</span></div>
        <div className="proof-divider" />
        <div className="proof-item"><strong>6 weeks</strong><span>accelerator sprint to a SaaS MVP</span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-layout">
          <div>
            <SectionHeading eyebrow="01 / ABOUT" title="Engineering with clarity, not complexity." />
          </div>
          <div className="about-content">
            <p className="about-lead">I start with the problem and the number that should move. Then I design the whole system around it, covering data, failure paths, tests, and cost, and build with AI as leverage rather than a shortcut. I ship, measure, and improve from real use. My work spans backend services, data pipelines, and applied-AI systems.</p>
            <a className="text-link" href="https://github.com/faraz-369" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section how-section" id="how-i-work">
        <SectionHeading eyebrow="02 / HOW I WORK" title="How I work" />
        <div className="how-grid">
          {howIWork.map((item) => (
            <article className="how-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="work">
        <SectionHeading eyebrow="03 / FEATURED WORK" title="Featured work" text="A few case studies that show how I work from problem to measurable outcome." />
        <div className="project-grid">
          {featuredProjects.map((p) => (
            <article className="project-card featured" key={p.name}>
              <div className="project-top">
                <span className="project-number">{p.number}</span>
                <span className="project-type">{p.type}</span>
                {p.href && <a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="project-open"><ArrowUpRight size={19} /></a>}
              </div>
              <h3>{p.name}</h3>
              <p className="project-description">{p.description}</p>
              <ul className="project-details">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
              <div className="project-stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
              <div className="project-links">
                {p.href && <a href={p.href} target="_blank" rel="noreferrer">{p.label} <ArrowUpRight size={14} /></a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo / walkthrough <ExternalLink size={13} /></a>}
              </div>
            </article>
          ))}
        </div>
        <div className="all-work"><a className="button button-ghost" href="https://github.com/faraz-369?tab=repositories" target="_blank" rel="noreferrer">Browse all repositories <Github size={16} /><ArrowUpRight size={15} /></a></div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionHeading eyebrow="04 / EXPERIENCE" title="Where I've contributed." text="Product development, data workflows, and technical education." />
        <div className="timeline">
          {experience.map((e, i) => (
            <article className="timeline-item" key={e.slug}>
              <div className="timeline-marker"><span>{String(i + 1).padStart(2, "0")}</span></div>
              <div className="timeline-main">
                <div className="timeline-meta"><span>{e.period}</span><span className="timeline-line" /></div>
                <h3><a href={`/experience/${e.slug}`}>{e.role}</a></h3>
                <h4><a href={`/experience/${e.slug}`}>{e.org}</a></h4>
                <p className="story-headline">{e.headline}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <p className="story-story">{e.story}</p>
                <a className="text-link" href={`/experience/${e.slug}`}>Read the full story <ArrowUpRight size={14} /></a>
                {e.href && <a className="text-link" href={e.href} target="_blank" rel="noreferrer">Selection evidence <ArrowUpRight size={14} /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experiments-section">
        <SectionHeading eyebrow="05 / EXPERIMENTS" title="Experiments and prototypes" text="One-line snapshots of project work I built to test ideas and learn quickly." />
        <ul className="experiments-list">
          {experiments.map((experiment) => (
            <li key={experiment.name}>
              <strong>{experiment.name}</strong>
              <span> — {experiment.description}</span>
              {experiment.href && <a href={experiment.href} target="_blank" rel="noreferrer">{experiment.label} <ArrowUpRight size={13} /></a>}
            </li>
          ))}
        </ul>
      </section>

      <section className="section recognition-section" id="recognition">
        <SectionHeading eyebrow="06 / RECOGNITION" title="External signals, with context." text="Selections, team results, and program recognition — linked to supporting evidence." />
        <div className="recognition-grid">
          {awards.map((a) => (
            <article className="recognition-card" key={a.title}>
              <div className="recognition-card-top"><Trophy size={17} /><span>{a.tag}</span><ArrowUpRight size={15} /></div>
              <h3>{a.title}</h3><p>{a.note}</p><a className="evidence-link" href={`/experience/${a.slug}`}>Read achievement story <ArrowUpRight size={13} /></a>
              <a className="evidence-link evidence-secondary" href={a.link} target="_blank" rel="noreferrer">Original evidence <ExternalLink size={12}/></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section toolkit-section">
        <div className="toolkit-layout">
          <div><SectionHeading eyebrow="07 / TOOLKIT" title="Toolkit" text="The tools I use to build, ship, and measure." /></div>
          <div className="toolkit-content">
            <div className="toolkit-row"><span>LANGUAGES</span><div><b>Python</b><b>SQL</b><b>TypeScript</b></div></div>
            <div className="toolkit-row"><span>BACKEND</span><div><b>FastAPI</b><b>REST APIs</b><b>SQLAlchemy</b><b>Alembic</b></div></div>
            <div className="toolkit-row"><span>DATA</span><div><b>PostgreSQL</b><b>SQLite</b><b>Pandas</b></div></div>
            <div className="toolkit-row"><span>QUALITY & DELIVERY</span><div><b>Pytest</b><b>Docker</b><b>Git</b><b>GitHub Actions</b></div></div>
            <div className="toolkit-row"><span>APPLIED AI</span><div><b>FAISS</b><b>Sentence Transformers</b><b>LangChain</b><b>Gradio</b></div></div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="education-card">
          <div className="education-icon"><GraduationCap size={24} /></div>
          <div><span className="eyebrow">08 / EDUCATION</span><h3>National University of Modern Languages (NUML)</h3><p>Bachelor’s Degree · Software Engineering</p></div>
          <span className="education-date">2022 — 2026</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" />
        <div className="contact-inner">
          <span className="eyebrow">09 / CONTACT</span>
          <h2>Building AI-enabled software? Tell me the problem your team is working on.</h2>
          <p>I’m interested in software engineering opportunities and collaborations involving backend applications, reliable APIs, and data-driven products.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:faraz.outreach8@gmail.com">Start a conversation <Mail size={16} /></a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/faraz369" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-email">faraz.outreach8@gmail.com</div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">FM</span><span>FARAZ<span className="brand-dot">.</span></span></a>
        <span>Designed around engineering evidence. © {new Date().getFullYear()} Faraz Mubeen Haider.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
