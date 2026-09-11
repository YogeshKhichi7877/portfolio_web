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
    <div className="behind-layout"><div><h2 className="display">This website<br/>is also <span className="muted">a project.</span></h2><p className="body-copy">The same idea, all the way down: small parts, clear responsibilities, one connected experience.</p><ExternalLink href={person.github}>Explore more on GitHub</ExternalLink></div>
      <div className="build-schematic" data-trace-host><SystemTrace/>{[['01','USER SCROLL','Native input, keyboard, touch'],['02','LENIS','Smooth desktop scrolling'],['03','GSAP / SCROLLTRIGGER','One lifecycle. Section timelines.'],['04','SYSTEM TRACE','Measured SVG routes inside each scene'],['05','THE INTERFACE','Next.js · React · TypeScript · CSS']].map(([n,title,body])=><div data-trace-node key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></div>)}<p className="build-fallback">Reduced motion → static routes, complete content.</p></div>
    </div><TraceHandoff label="SYSTEM COMPLETE → YOUR NEXT IDEA"/>
  </section>;
}
