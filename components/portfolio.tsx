"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  ExternalLink, Code2, Database, Workflow, ShieldCheck, Terminal,
  GraduationCap, Trophy, BriefcaseBusiness, Layers3, Globe2
} from "lucide-react";

const projects = [
  {
    name: "PortfolioPulse",
    type: "Backend application",
    category: "Backend",
    description:
      "A multi-tenant portfolio reporting application built around organisation-scoped data, controlled submissions, and auditable workflows.",
    details: [
      "JWT authentication and role-based access control",
      "CSV ingestion with actionable validation",
      "Submission review, approval, and resubmission history",
      "PostgreSQL constraints, migrations, and automated tests"
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pytest"],
    href: "https://github.com/faraz-369/portfoliopulse",
    label: "View repository",
    featured: true,
    number: "01"
  },
  {
    name: "AgentFault Lab",
    type: "Reliability research prototype",
    category: "Reliability",
    description:
      "A controlled environment for studying failure and recovery behaviour in multi-step agent workflows through fault injection, structured traces, and invariant checks.",
    details: [
      "Simulated timeouts, malformed responses, and exceptions",
      "Compares no-recovery, retry, and state-aware policies",
      "Records structured execution traces and checks invariants",
      "Includes API, CLI, SQLite persistence, and tests"
    ],
    stack: ["Python", "FastAPI", "SQLite", "Pytest", "Docker"],
    href: "https://github.com/faraz-369/agentfault-lab-Web",
    demo: "https://agentfault-lab-web.vercel.app/",
    label: "Explore project",
    featured: true,
    number: "02"
  },
  {
    name: "MUSTER · Broker Copilot",
    type: "Early-stage product development",
    category: "Product",
    description:
      "Exploring how real-estate teams can structure incoming property enquiries, capture qualification requirements, and prepare leads for agent follow-up.",
    details: [
      "Product discovery, market research, and preliminary ICP development",
      "Designed a property-enquiry qualification workflow",
      "Demonstrated conversational automation using n8n",
      "Prepared a browser demonstration and client-facing walkthrough"
    ],
    stack: ["Product development", "Product discovery", "Workflow design", "n8n"],
    href: "https://brokercopilot-ai-dem-fnqn.bolt.host/",
    demo: "https://youtube.com/shorts/lHWRA9EHLfQ?feature=share",
    label: "Open demo",
    featured: true,
    number: "03",
    story: "/experience/muster-broker-copilot"
  },
  {
    name: "RAG Agent Failure Catalog",
    type: "Reproducible engineering catalog",
    category: "AI systems",
    description:
      "A catalogue of failure patterns in retrieval-augmented generation and agent workflows, with minimal reproductions and mitigation ideas.",
    details: [
      "Documents silent failure patterns and likely causes",
      "Provides minimal reproducible examples",
      "Explores detection strategies and mitigations",
      "Includes deterministic offline examples"
    ],
    stack: ["Python", "RAG", "FAISS", "Testing"],
    href: "https://github.com/faraz-369/rag-agent-failure-catalog",
    label: "View repository",
    featured: true,
    number: "04"
  },
  {
    name: "Data Quality Pipeline",
    type: "Data processing application",
    category: "Data",
    description:
      "An interactive application for inspecting uploaded datasets, identifying quality issues, and detecting potential anomalies.",
    details: [
      "CSV ingestion and validation",
      "Missing-value and duplicate analysis",
      "Statistical anomaly detection",
      "Risk classification and downloadable reports"
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "Gradio"],
    href: "https://github.com/faraz-369/data-quality-pipeline",
    demo: "https://huggingface.co/spaces/Faraz618/data-quality-pipeline",
    label: "View project",
    featured: true,
    number: "05"
  },
  {
    name: "ComplianceRAG",
    type: "Document intelligence prototype",
    category: "AI systems",
    description:
      "A document question-answering prototype using semantic retrieval and source-grounded responses.",
    details: ["Document ingestion and chunking", "Embedding-based retrieval", "Source-grounded answer presentation"],
    stack: ["Python", "Sentence Transformers", "FAISS", "Streamlit"],
    href: "https://github.com/faraz-369/ComplianceRAG",
    demo: "https://huggingface.co/spaces/Faraz618/ComplianceRAG",
    label: "View project",
    number: "06"
  },
  {
    name: "HireMind-AI",
    type: "Application prototype",
    category: "AI systems",
    description:
      "A prototype for job-description analysis, resume feedback, and interview preparation.",
    details: ["Job description analysis", "Resume feedback workflows", "Interview preparation support"],
    stack: ["Python", "Streamlit", "Groq API"],
    href: "https://github.com/faraz-369/HireMind-AI",
    label: "View repository",
    number: "07"
  },
  {
    name: "SafeLite",
    type: "Research prototype",
    category: "Research",
    description:
      "A research prototype exploring language-conditioned robotic manipulation in simulation.",
    details: ["Language-conditioned task exploration", "Simulation-based experimentation"],
    stack: ["Python", "MuJoCo", "Meta-World"],
    href: "https://github.com/faraz-369/SafeLite",
    label: "View repository",
    number: "08"
  },
  {
    name: "AdvancedLeadsGeneration-AI",
    type: "Hackathon team project",
    category: "AI systems",
    description:
      "A team-built lead-generation project developed for the IBM Granite Generative AI Hackathon.",
    details: ["Team project by PolyEns", "Recognised as a winning hackathon submission"],
    stack: ["Python", "IBM Granite", "Generative AI"],
    href: "https://github.com/faraz-369/AdvancedLeadsGeneration-AI",
    demo: "https://lablab.ai/ai-hackathons/generative-ai-hackathon-with-ibm-granite/polyens",
    label: "View project",
    number: "09"
  }
];

const experience = [
  {
    slug: "muster-broker-copilot",
    role: "Product Development Engineer",
    org: "MUSTER",
    period: "2026 – Present",
    description:
      "Contributing to the development of Broker Copilot, an early-stage product exploring how real-estate teams can qualify incoming property enquiries through structured conversational workflows.",
    points: ["Product discovery and workflow design", "Market research and preliminary ICP development", "Conversational automation and product demonstrations"]
  },
  {
    slug: "nic-data-engineering",
    role: "AI / Data Engineering Intern",
    org: "NIC Faisalabad",
    period: "Internship",
    description:
      "Contributed to Python-based data processing and reporting workflows supporting the NIC portfolio.",
    points: ["ETL and reporting workflows", "Worked with data associated with 30+ portfolio companies", "Reported impact: approximately 60% less manual analyst effort and 12 hours saved per week"]
  },
  {
    slug: "1337-ventures-backend",
    role: "Backend Development Contributor",
    org: "1337 Ventures",
    period: "Accelerator project",
    description:
      "Contributed to backend development during a six-week accelerator sprint for a SaaS MVP.",
    points: ["FastAPI backend implementation", "Document ingestion and structured-output workflows", "Product development and customer-discovery participation"]
  },
  {
    slug: "stanford-code-in-place",
    role: "Section Leader",
    org: "Stanford Code in Place",
    period: "2025 · 2026",
    description:
      "Selected as a Section Leader for two consecutive program years, facilitating Python learning for an international beginner cohort.",
    points: ["Weekly Python learning sessions", "Programming fundamentals and debugging", "Problem decomposition and learner support"],
    href: "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7450596499068960769/"
  }
  ,{
    slug: "lablab-engineering",
    role: "Software Engineering Contributor · Collaborative Projects",
    org: "lablab.ai",
    period: "2024 – 2025",
    description: "Contributed to collaborative hackathon prototypes involving retrieval, semantic search and LLM application workflows.",
    points: ["Backend-oriented components and integrations", "RAG, embeddings and semantic search", "Multi-step LLM and agent workflow prototypes"]
  }
];

const awards = [
  { slug: "ibm-granite-hackathon", title: "IBM Granite Generative AI Hackathon", note: "Winning team · PolyEns", link: "https://lablab.ai/ai-hackathons/generative-ai-hackathon-with-ibm-granite/polyens", tag: "Team award" },
  { slug: "calico-spring-2025", title: "CALICO Spring 2025", note: "96th place · Team Hawkeye", link: "https://lnkd.in/p/dvSMCMnP", tag: "Team result" },
  { slug: "cs50-puzzle-day", title: "CS50 Puzzle Day", note: "Winning team · Cipher Cracker · 9/9 puzzles", link: "https://lnkd.in/p/dniXjMSN", tag: "Team award" },
  { slug: "stanford-code-in-place", title: "Stanford Code in Place", note: "Section Leader · 2025 and 2026", link: "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7450596499068960769/", tag: "Selection" },
  { slug: "bicon-billbachao", title: "BICON Accelerator", note: "BillBachao selected and continued into incubation", link: "https://lnkd.in/p/dHW92p6b", tag: "Project selection" },
  { slug: "algoverse-scholarship", title: "AlgoVerse Research Program", note: "45% merit scholarship · EOE.ai × Omdena", link: "https://lablab.build/u/%40Faraz_Mubeen", tag: "Scholarship" }
];

const filters = ["All", "Backend", "Reliability", "Data", "Product", "AI systems", "Research"];

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
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const visibleProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

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
          {["About", "Projects", "Experience", "Recognition", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
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
            <div className="availability"><span className="pulse" /> SOFTWARE ENGINEER <span className="availability-sep">/</span> OPEN TO OPPORTUNITIES</div>
            <p className="hero-positioning">SOFTWARE ENGINEER <span>·</span> BACKEND SYSTEMS <span>·</span> DISTRIBUTED SYSTEMS</p>
            <h1>Engineering<br /><span>reliable systems</span><br />for useful products.</h1>
            <p className="hero-subtitle">
              I’m Faraz Mubeen Haider. I build backend applications, APIs, and data-intensive services with Python, FastAPI, and PostgreSQL — focusing on clear interfaces, dependable data flows, and maintainable system behaviour.
            </p>
            <div className="hero-specialties">
              <span><Code2 size={16} /> Backend Engineering</span>
              <i />
              <span><Database size={16} /> APIs & Data</span>
              <i />
              <span><Workflow size={16} /> Distributed Systems</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
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
            <div className="floating-card stack-card">
              <span className="card-kicker">CORE STACK</span>
              <strong>Python <b>·</b> FastAPI</strong>
              <strong>PostgreSQL <b>·</b> SQL</strong>
              <strong>Docker <b>·</b> Pytest</strong>
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
        <div className="proof-item"><strong>02×</strong><span>Code in Place<br />Section Leader</span></div>
        <div className="proof-divider" />
        <div className="proof-item"><strong>30+</strong><span>Portfolio companies<br />in data workflows</span></div>
        <div className="proof-divider" />
        <div className="proof-item"><strong>06 wk</strong><span>Accelerator MVP<br />development sprint</span></div>
        <div className="proof-divider" />
        <div className="proof-item"><strong>9/9</strong><span>CS50 Puzzle Day<br />team result</span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-layout">
          <div>
            <SectionHeading eyebrow="01 / ABOUT" title="Engineering with clarity, not complexity." />
          </div>
          <div className="about-content">
            <p className="about-lead">I’m a Software Engineer focused on backend systems and distributed systems: the services, APIs, and data workflows that make digital products dependable.</p>
            <p>My hands-on work includes Python and FastAPI application development, PostgreSQL-backed data modelling, ingestion and validation workflows, integrations, and reliability experiments. I also have experience exploring applied-AI features as part of wider product workflows.</p>
            <p>I approach engineering from the problem and the system boundary: clarify what the application must do, make data and failure paths explicit, test important behaviour, and keep the implementation maintainable. My portfolio combines independent engineering projects with early-stage product work and collaborative contributions.</p>
            <a className="text-link" href="https://github.com/faraz-369" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section focus-section">
        <SectionHeading eyebrow="02 / ENGINEERING FOCUS" title="What I work on." text="A practical engineering toolkit, with backend application development at the centre." />
        <div className="focus-grid">
          <article className="focus-card"><div className="focus-icon"><Code2 /></div><span className="focus-index">01</span><h3>Backend applications</h3><p>API design, application logic, authentication, integrations, and maintainable service boundaries.</p><div className="tag-list"><span>Python</span><span>FastAPI</span><span>REST APIs</span></div></article>
          <article className="focus-card"><div className="focus-icon"><Database /></div><span className="focus-index">02</span><h3>Data & persistence</h3><p>Relational modelling, SQL, ingestion, validation, and data workflows with traceable outcomes.</p><div className="tag-list"><span>PostgreSQL</span><span>SQLAlchemy</span><span>Pandas</span></div></article>
          <article className="focus-card"><div className="focus-icon"><ShieldCheck /></div><span className="focus-index">03</span><h3>Distributed systems & reliability</h3><p>Service boundaries, failure handling, retries, idempotent operations, observability-minded traces, and testable behaviour.</p><div className="tag-list"><span>Pytest</span><span>Docker</span><span>CI/CD</span></div></article>
          <article className="focus-card"><div className="focus-icon"><Layers3 /></div><span className="focus-index">04</span><h3>Applied AI systems</h3><p>Supporting experience in retrieval workflows, document intelligence, and LLM-powered prototypes.</p><div className="tag-list"><span>RAG</span><span>FAISS</span><span>LangChain</span></div></article>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects built to demonstrate the work." text="Backend applications lead the portfolio. Supporting work in reliability, data workflows, and applied AI shows how I approach adjacent product problems. Open a project to inspect its code, demonstration, or evidence." />
        <div className="project-toolbar">
          <div className="project-count"><span className="count-dot" /> {visibleProjects.length} PROJECTS</div>
          <div className="filter-list" role="group" aria-label="Filter projects">
            {filters.map((f) => <button key={f} onClick={() => setActiveFilter(f)} className={activeFilter === f ? "filter active" : "filter"} aria-pressed={activeFilter === f}>{f}</button>)}
          </div>
        </div>
        <div className="project-grid">
          {visibleProjects.map((p) => (
            <article className={p.featured ? "project-card featured" : "project-card"} key={p.name}>
              <div className="project-top"><span className="project-number">{p.number}</span><span className="project-type">{p.type}</span><a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="project-open"><ArrowUpRight size={19} /></a></div>
              <h3>{p.name}</h3>
              <p className="project-description">{p.description}</p>
              <ul className="project-details">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
              <div className="project-stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
              <div className="project-links"><a href={p.href} target="_blank" rel="noreferrer">{p.label} <ArrowUpRight size={14} /></a>{p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo / walkthrough <ExternalLink size={13} /></a>}{"story" in p && p.story && <a href={p.story}>Case study <ArrowUpRight size={13} /></a>}</div>
            </article>
          ))}
        </div>
        <div className="all-work"><a className="button button-ghost" href="https://github.com/faraz-369?tab=repositories" target="_blank" rel="noreferrer">Browse all repositories <Github size={16} /><ArrowUpRight size={15} /></a></div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionHeading eyebrow="04 / EXPERIENCE" title="Where I've contributed." text="Product development, data workflows, and technical education." />
        <div className="timeline">
          {experience.map((e, i) => (
            <article className="timeline-item" key={e.org}>
              <div className="timeline-marker"><span>{String(i + 1).padStart(2, "0")}</span></div>
              <div className="timeline-main">
                <div className="timeline-meta"><span>{e.period}</span><span className="timeline-line" /></div>
                <h3><a href={`/experience/${e.slug}`}>{e.role}</a></h3><h4><a href={`/experience/${e.slug}`}>{e.org}</a></h4><p>{e.description}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <a className="text-link" href={`/experience/${e.slug}`}>Read the full story <ArrowUpRight size={14} /></a>
                {e.href && <a className="text-link" href={e.href} target="_blank" rel="noreferrer">Selection evidence <ArrowUpRight size={14} /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section recognition-section" id="recognition">
        <SectionHeading eyebrow="05 / RECOGNITION" title="External signals, with context." text="Selections, team results, and program recognition — linked to supporting evidence." />
        <div className="recognition-grid">
          {awards.map((a, i) => (
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
          <div><SectionHeading eyebrow="06 / TOOLKIT" title="Tools I use to build." text="A working toolkit across backend development, data, testing, and applied AI." /></div>
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
          <div><span className="eyebrow">07 / EDUCATION</span><h3>National University of Modern Languages (NUML)</h3><p>Bachelor’s Degree · Software Engineering</p></div>
          <span className="education-date">2022 — 2026</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" />
        <div className="contact-inner">
          <span className="eyebrow">08 / CONTACT</span>
          <h2>Have a backend problem<br /><span>worth solving?</span></h2>
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
