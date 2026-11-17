import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allStories } from "../data";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";

export function generateStaticParams() {
  return allStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = allStories.find((item) => item.slug === slug);
  return { title: story ? `${story.title} | AI Risk & Security Specialist` : "Story not found", description: story?.summary };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = allStories.find((item) => item.slug === slug);
  if (!story) notFound();
  const isMuster = story.slug === "muster-broker-copilot";

  return <main className="story-page">
    <header className="story-nav"><Link className="brand" href="/#home"><span className="brand-mark">FM</span><span>FARAZ<span className="brand-dot">.</span></span></Link><Link className="story-back" href="/#experience"><ArrowLeft size={15}/> Back to portfolio</Link></header>
    <section className="story-hero">
      <div className="story-hero-inner">
        <div className="story-eyebrow">{story.kind} <span>·</span> {story.period}</div>
        <p className="story-org">{story.organisation}</p>
        <h1>{story.title}</h1>
        <p className="story-headline">{story.headline}</p>
        <p className="story-summary">{story.summary}</p>
        <div className="story-tags">{story.stack.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
    </section>
    <div className="story-content">
      <aside className="story-aside"><span className="eyebrow">ON THIS PAGE</span><a href="#context">Context</a><a href="#challenge">The challenge</a><a href="#contribution">My contribution</a><a href="#approach">Approach</a><a href="#outcome">Outcome</a>{story.learning && <a href="#learning">What I learned</a>}<a href="#evidence">Evidence</a></aside>
      <article className="story-article">
        <section id="context"><span className="story-number">01 / CONTEXT</span><h2>{isMuster ? "Understanding the operational problem." : "Where it started."}</h2><p>{story.context}</p></section>
        <section id="challenge"><span className="story-number">02 / THE CHALLENGE</span><h2>{isMuster ? "Turning a broad idea into a demonstrable workflow." : "The problem to work through."}</h2><p>{story.challenge}</p></section>
        <section id="contribution"><span className="story-number">03 / MY CONTRIBUTION</span><h2>{isMuster ? "Taking responsibility for early product development." : "What I was responsible for."}</h2><ul>{story.contribution.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="approach"><span className="story-number">04 / {isMuster ? "DEVELOPMENT APPROACH" : "APPROACH"}</span><h2>{isMuster ? "From operational requirements to a working demonstration." : "How I approached the work."}</h2>{story.approachStages ? <div className="story-process-grid">{story.approachStages.map((stage, index) => <article className="story-process-card" key={stage.title}><span>STAGE 0{index + 1}</span><h3>{stage.title}</h3><ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div> : <ul>{story.approach.map((item) => <li key={item}>{item}</li>)}</ul>}</section>
        <section id="outcome"><span className="story-number">05 / OUTCOME AND PROGRESS</span><h2>{isMuster ? "Moving from product exploration to a demonstrable concept." : "What came out of it."}</h2><ul>{story.outcome.map((item) => <li key={item}>{item}</li>)}</ul>{isMuster && <p className="outcome-boundary">The work remains at an early product-exploration and demonstration stage. The available evidence does not establish live agency deployment, a completed pilot, paying customers, revenue, measurable business impact, or product-market fit.</p>}</section>
        {story.learning && <section id="learning"><span className="story-number">06 / WHAT I LEARNED</span><h2>What early product development taught me.</h2><ul>{story.learning.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        <section id="evidence"><span className="story-number">{story.learning ? "07" : "06"} / EVIDENCE</span><h2>Inspect the proof.</h2><p className="evidence-intro">The story is strongest when the underlying record can be inspected. These links and artefacts are provided to make the claims traceable.</p>
          <div className="story-evidence-grid">{story.evidence.map((item) => <div className="story-evidence" key={item.title}>
            {item.image && <a href={item.image} target="_blank" rel="noreferrer" className="evidence-image-link"><Image src={item.image} alt={item.title} width={1100} height={620} className="evidence-image"/></a>}
            <div className="evidence-card-copy"><span>{item.label ?? "Supporting material"}</span><h3>{item.title}</h3><p>{item.description}</p>{item.href && <a href={item.href} target="_blank" rel="noreferrer">{item.linkLabel ?? "Open source"} <ArrowUpRight size={14}/></a>}</div>
          </div>)}</div>
        </section>
        {story.caveat && <div className="story-integrity"><strong>Claim boundaries</strong><p>{story.caveat}</p></div>}
        <div className="story-bottom"><Link className="button button-ghost" href="/#experience"><ArrowLeft size={15}/> All experience</Link><a className="button button-primary" href="mailto:faraz.outreach8@gmail.com">Discuss this work <ArrowUpRight size={15}/></a></div>
      </article>
    </div>
    <footer className="footer"><Link className="brand" href="/#home"><span className="brand-mark">FM</span><span>FARAZ<span className="brand-dot">.</span></span></Link><span>AI risk &amp; security · Evidence-led engineering stories · © {new Date().getFullYear()}</span><Link href="/#home" className="back-top">HOME ↑</Link></footer>
  </main>;
}
