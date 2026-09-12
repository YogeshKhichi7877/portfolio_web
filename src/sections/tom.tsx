import { ChapterLabel, ExternalLink } from '@/components/primitives';
import { TraceHandoff } from '@/components/system-trace';
import { TomGate } from '@/components/tom-gate';
import { person, tomStages } from '@/data/portfolio';
import { TomExplorer } from '@/components/tom-explorer';

function StageGraphic({index}:{index:number}) {
  return <svg viewBox="0 0 480 150" className={`pipeline-graphic pipeline-graphic-${index}`} aria-hidden="true">
    {index===0?<><path className="wave-baseline" d="M0 75H480"/><path className="stage-draw voice-line" d="M0 75H32L38 67L44 83L50 75H70L78 46L84 101L91 75H118L124 58L131 91L138 75H159L167 18L175 130L183 41L191 96L199 75H220L230 47L238 100L246 75H276L284 62L292 90L300 75H323L332 26L340 124L348 61L356 85L365 75H399L407 59L415 87L423 75H480"/></>:
    index===1?<><path className="stage-draw" d="M52 75H240V24M240 75H426M240 75V130"/><circle cx="240" cy="75" r="16"/><circle cx="240" cy="75" r="29" className="context-ring"/><text x="16" y="60">DOCUMENT</text><text x="260" y="27">MEMORY</text><text x="380" y="60">CONTEXT</text><text x="260" y="132">LOCAL RAG</text></>:
    index===2?<><path className="stage-draw" d="M240 135V75H50V24M240 75H430V24M240 75V24M140 75V24M340 75V24"/>{['FILES','VS CODE','BROWSER','TERMINAL','WINDOWS'].map((label,i)=><g key={label}><circle cx={50+i*95} cy="24" r="5"/><text x={50+i*95} y="12" textAnchor="middle">{label}</text></g>)}</>:
    <>{['VOICE / INPUT','PERMISSION / BOUNDARY','CONTEXT / RETRIEVAL'].map((label,i)=><g className="diagnostic-row" key={label}><path d={`M12 ${27+i*44}l6 6 11-13`}/><text x="46" y={30+i*44}>{label}</text><path className="stage-draw" d={`M310 ${26+i*44}H465`}/></g>)}</>}
  </svg>;
}

export function Tom() {
  return <section id="tom" className="chapter tom section-pad" data-stage="listen"><ChapterLabel number="05" title="TOM / THE INTELLIGENCE LAYER"/>
    <div className="tom-intro"><div className="tom-wordmark" aria-hidden="true">TOM<span>.</span></div><div><span className="eyebrow">LOCAL-FIRST / WINDOWS AI Agent</span><h2>Your desktop friend that<br/><span>thinks with you.</span></h2><p className="section-deck">Voice becomes context. Context becomes action.<br/>A local-first agentic platform, built around trust.</p></div></div>
    <div className="tom-manifest"><span><i/> ON YOUR MACHINE</span><span>VOICE → MEMORY → ACTION</span><span>PERMISSION BY DESIGN</span></div>
    <div className="tom-scene"><div className="tom-system" data-cursor="INSPECT"><div className="tom-system-head"><span className="eyebrow">TOM / ARCHITECTURE STUDY</span><span className="tom-phase">01 / LISTEN</span></div>
      <div className="tom-workflow-heading"><div><h3>From intent<br/> to outcome.</h3><p>Four stages. One considered action.</p></div><span className="nucleus-state">VOICE / INPUT</span></div>
      <nav className="tom-controls" aria-label="Explore TOM pipeline">{tomStages.map((stage,i)=><a className={`tom-node tom-node-${i}`} key={stage.name} href={`#tom-${stage.name.toLowerCase()}`} data-tom-select={stage.name.toLowerCase()} data-cursor="RUN"><small>0{i+1}</small>{stage.name}</a>)}</nav>
      <p className="tom-console-note">Select a stage to explore how it works.</p>
    </div>
    <div className="tom-stages">{tomStages.map((stage,i)=><article className="tom-stage" id={`tom-${stage.name.toLowerCase()}`} key={stage.name} data-tom-stage={stage.name.toLowerCase()}><header><span className="eyebrow">0{i+1} / {['VOICE INTO DATA','DATA INTO CONTEXT','CONTEXT INTO ACTION','ACTION INTO TRUST'][i]}</span></header><h3>{stage.name}<span>.</span></h3><StageGraphic index={i}/><p>{stage.text}</p><p className="stage-tech eyebrow">{stage.tech}</p>{i===3&&<span className="eyebrow diagnostics-note">DIAGNOSTIC FLOW ILLUSTRATION</span>}</article>)}</div></div>
    <div className="tom-boundary"><div><span className="eyebrow">A DELIBERATE BOUNDARY</span><h3>Helpful by design.<br/>Permission comes first.</h3><p>An action should be understood before it runs. Explore that boundary in this small illustration.</p></div><TomGate/></div>
    <div className="tom-lab"><div><span className="eyebrow">UNDER THE SURFACE</span><h3>Explore the system.</h3><p>Look closer at memory, automation, architecture, and diagnostics.</p></div><TomExplorer/></div>
    <div className="tom-bottom"><div className="tom-stat"><strong>48<span>+</span></strong><span className="eyebrow">INTEGRATIONS</span><p>A connected desktop.<br/>One permission boundary.</p></div><div className="tom-stat"><strong>700<span>+</span></strong><span className="eyebrow">AUTOMATED TESTS</span><p>Reliability is built in.</p></div><div className="tom-summary"><p>Built to act.<br/>Engineered to earn trust.</p><ExternalLink href={person.github}>Explore my GitHub</ExternalLink></div></div><TraceHandoff label="INTELLIGENCE → PRODUCTS"/>
  </section>;
}
