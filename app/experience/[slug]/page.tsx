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
  return { title: story ? `${story.title} | Faraz Mubeen Haider` : "Story not found", description: story?.summary };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = allStories.find((item) => item.slug === slug);
  if (!story) notFound();

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
      <aside className="story-aside"><span className="eyebrow">ON THIS PAGE</span><a href="#context">Context</a><a href="#challenge">Challenge</a><a href="#contribution">My contribution</a><a href="#approach">Approach</a><a href="#outcome">Outcome</a><a href="#evidence">Evidence</a></aside>
      <article className="story-article">
        <section id="context"><span className="story-number">01 / CONTEXT</span><h2>Where it started.</h2><p>{story.context}</p></section>
        <section id="challenge"><span className="story-number">02 / THE CHALLENGE</span><h2>The problem to work through.</h2><p>{story.challenge}</p></section>
        <section id="contribution"><span className="story-number">03 / MY CONTRIBUTION</span><h2>What I was responsible for.</h2><ul>{story.contribution.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="approach"><span className="story-number">04 / APPROACH</span><h2>How I approached the work.</h2><ul>{story.approach.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="outcome"><span className="story-number">05 / OUTCOME</span><h2>What came out of it.</h2><ul>{story.outcome.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="evidence"><span className="story-number">06 / EVIDENCE</span><h2>Inspect the proof.</h2><p className="evidence-intro">The story is strongest when the underlying record can be inspected. These links and artefacts are provided to make the claims traceable.</p>
          <div className="story-evidence-grid">{story.evidence.map((item) => <div className="story-evidence" key={item.title}>
            {item.image && <a href={item.image} target="_blank" rel="noreferrer" className="evidence-image-link"><Image src={item.image} alt={item.title} width={1100} height={620} className="evidence-image"/></a>}
            <div className="evidence-card-copy"><span>{item.label ?? "Supporting material"}</span><h3>{item.title}</h3><p>{item.description}</p>{item.href && <a href={item.href} target="_blank" rel="noreferrer">Open source <ArrowUpRight size={14}/></a>}</div>
          </div>)}</div>
        </section>
        {story.caveat && <div className="story-integrity"><strong>Claim boundaries</strong><p>{story.caveat}</p></div>}
        <div className="story-bottom"><Link className="button button-ghost" href="/#experience"><ArrowLeft size={15}/> All experience</Link><a className="button button-primary" href="mailto:faraz.outreach8@gmail.com">Discuss this work <ArrowUpRight size={15}/></a></div>
      </article>
    </div>
    <footer className="footer"><Link className="brand" href="/#home"><span className="brand-mark">FM</span><span>FARAZ<span className="brand-dot">.</span></span></Link><span>Evidence-led engineering stories · © {new Date().getFullYear()}</span><Link href="/#home" className="back-top">HOME ↑</Link></footer>
  </main>;
}
