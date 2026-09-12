import { ChapterLabel, ExternalLink } from '@/components/primitives';
import { SystemTrace, TraceHandoff } from '@/components/system-trace';
import { person } from '@/data/portfolio';

export function Now() {
  return <section id="now" className="chapter now section-pad"><ChapterLabel number="09" title="CURRENTLY"/>
    <div className="now-layout"><h2 className="display">Still building<span className="orange">.</span><br/><span className="muted">Still curious.</span></h2><div className="now-list" data-trace-host><SystemTrace/>
      <article data-trace-node><span className="eyebrow">BUILDING</span><h3>TOM</h3><p>Local-first intelligence. Useful desktop automation.</p></article>
      <article data-trace-node><span className="eyebrow">LEADING</span><h3>Ruminate tech</h3><p>Connected platforms for E-Cell, IIIT Surat.</p></article>
      <article data-trace-node><span className="eyebrow">STUDYING</span><h3>Computer Science</h3><p>B.Tech at IIIT Surat · 2024–2028 expected.</p></article>
    </div></div>
  </section>;
}

export function BehindPortfolio() {
  return <section id="build" className="chapter behind section-pad"><ChapterLabel number="10" title="BEHIND THIS PORTFOLIO"/>
    <div className="build-heading"><h2>This website is<br/>also <em>a project.</em></h2><div><p>Every interaction has a reason.<br/>Here’s what’s beneath the surface.</p><ExternalLink href={person.github}>Explore more on GitHub</ExternalLink></div></div>
    <div className="build-workbench">
      <div className="workbench-toolbar"><span className="workbench-lights" aria-hidden="true"><i/><i/><i/></span><span>portfolio / a closer look</span><span className="workbench-status">BUILT WITH INTENT</span></div>
      <div className="workbench-body"><div className="build-preview" aria-hidden="true"><div className="preview-nav"><b>Y.</b><span>WORK &nbsp; ABOUT &nbsp; CONTACT</span></div><div className="preview-title">Small parts.<br/><em>One experience.</em></div><div className="preview-cards"><i/><i/><i/></div><div className="preview-baseline"><span>LAYOUT</span><span>MOTION</span><span>DETAIL</span></div><span className="preview-corner">↗</span></div><div className="build-recipe"><span className="eyebrow">THE MATERIALS</span><h3>Built to feel good.<br/>Engineered to work.</h3><p>Next.js, React and TypeScript form the structure. CSS shapes the details. GSAP and ScrollTrigger choreograph each scene.</p><div className="build-materials">Next.js <span>/</span> React <span>/</span> TypeScript<br/>GSAP <span>/</span> Lenis <span>/</span> CSS</div></div></div>
      <ol className="build-flow">{[['Your input','Scroll, keyboard or touch. The pace is yours.'],['The choreography','Lenis smooths desktop scrolling. GSAP coordinates the scenes and SVG routes.'],['Your preference','Quick View and reduced motion keep the complete content in a simple reading flow.']].map(([title,body],i)=><li key={title}><span className="flow-number">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
    </div><TraceHandoff label="SYSTEM COMPLETE → YOUR NEXT IDEA"/>
  </section>;
}
