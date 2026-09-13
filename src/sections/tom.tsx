import { ChapterLabel, ExternalLink } from '@/components/primitives';
import { TraceHandoff } from '@/components/system-trace';
import { TomGate } from '@/components/tom-gate';
import { person, tomStages } from '@/data/portfolio';
import { TomExplorer } from '@/components/tom-explorer';
import { SIGNAL_THREADS, signalPath, signalPoints } from '@/animations/tom-signal';


export function Tom() {
  return <section id="tom" className="chapter tom section-pad" data-stage="listen"><ChapterLabel number="05" title="TOM / THE INTELLIGENCE LAYER"/>
    <div className="tom-intro"><div className="tom-wordmark" aria-hidden="true">TOM<span>.</span></div><div><span className="eyebrow">LOCAL-FIRST / WINDOWS AI Agent</span><h2>Your desktop friend that<br/><span>thinks with you.</span></h2><p className="section-deck">Voice becomes context. Context becomes action.<br/>A local-first agentic platform, built around trust.</p></div></div>
    <div className="tom-manifest"><span><i/> ON YOUR MACHINE</span><span>VOICE → MEMORY → ACTION</span><span>PERMISSION BY DESIGN</span></div>
    <div className="tom-loom-heading"><span className="eyebrow">THE SPACE BETWEEN ASKING & DOING</span><h3>A thought.<br/><em>Made useful.</em></h3><p>Follow one signal through the system.<br/>Every step has a purpose.</p></div>
    <div className="tom-scene tom-loom"><div className="tom-system"><div className="tom-system-head"><span className="eyebrow">SIGNAL STUDY / 001</span><span className="tom-phase">01 / LISTEN</span></div>
      <figure className="tom-signal" data-cursor="FOLLOW THE SIGNAL"><svg viewBox="0 0 700 440" aria-hidden="true"><defs><linearGradient id="signal-ink" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#72a8c5"/><stop offset=".5" stopColor="#b9f7d2"/><stop offset="1" stopColor="#77c0b5"/></linearGradient></defs><g className="signal-registration">{[60,160,260,360,460,560,660].map(x=><path key={x} d={`M${x} 28v8M${x} 402v8`}/>)}<path d="M24 220H38M662 220H676"/></g><g className="signal-strands">{Array.from({length:SIGNAL_THREADS},(_,i)=><path key={i} className="signal-strand" d={signalPath(signalPoints(0,i))}/>)}</g><line className="signal-playhead" x1="350" x2="350" y1="50" y2="390"/><text x="45" y="30">INPUT</text><text x="655" y="30" textAnchor="end">OUTCOME</text><text x="350" y="414" textAnchor="middle">LOCAL / PRIVATE / CONNECTED</text></svg><figcaption><span className="nucleus-state">VOICE / INPUT</span><span>SCROLL TO TRANSFORM ↓</span></figcaption></figure>
      <nav className="tom-controls" aria-label="Explore TOM pipeline">{tomStages.map((stage,i)=><a className={`tom-node tom-node-${i}`} key={stage.name} href={`#tom-${stage.name.toLowerCase()}`} data-tom-select={stage.name.toLowerCase()} data-cursor="EXPLORE"><small>0{i+1}</small>{stage.name}</a>)}</nav>
    </div>
    <div className="tom-stages">{tomStages.map((stage,i)=><article className="tom-stage" id={`tom-${stage.name.toLowerCase()}`} key={stage.name} data-tom-stage={stage.name.toLowerCase()}><div className="tom-stage-index" aria-hidden="true">0{i+1}</div><div className="tom-stage-content"><header><span className="eyebrow">{['VOICE INTO DATA','DATA INTO CONTEXT','CONTEXT INTO ACTION','ACTION INTO TRUST'][i]}</span></header><h3>{stage.name}<span>.</span></h3><p>{stage.text}</p><p className="stage-tech eyebrow">{stage.tech}</p><div className="tom-stage-rule"><i/></div></div></article>)}</div></div>
    <div className="tom-boundary"><div><span className="eyebrow">A DELIBERATE BOUNDARY</span><h3>Helpful by design.<br/>Permission comes first.</h3><p>An action should be understood before it runs. Explore that boundary in this small illustration.</p></div><TomGate/></div>
    <div className="tom-lab"><div><span className="eyebrow">UNDER THE SURFACE</span><h3>Explore the system.</h3><p>Look closer at memory, automation, architecture, and diagnostics.</p></div><TomExplorer/></div>
    <div className="tom-bottom"><div className="tom-stat"><strong>48<span>+</span></strong><span className="eyebrow">INTEGRATIONS</span><p>A connected desktop.<br/>One permission boundary.</p></div><div className="tom-stat"><strong>700<span>+</span></strong><span className="eyebrow">AUTOMATED TESTS</span><p>Reliability is built in.</p></div><div className="tom-summary"><p>Built to act.<br/>Engineered to earn trust.</p><ExternalLink href={person.github}>Explore my GitHub</ExternalLink></div></div><TraceHandoff label="INTELLIGENCE → PRODUCTS"/>
  </section>;
}
