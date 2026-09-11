import { ChapterLabel, ExternalLink } from '@/components/primitives';
import { SystemTrace, TraceHandoff } from '@/components/system-trace';
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
    <div className="tom-intro"><div className="tom-wordmark" aria-hidden="true">TOM<span>.</span></div><div><span className="eyebrow">LOCAL-FIRST / WINDOWS AI</span><h2>A desktop that<br/><span>thinks with you.</span></h2><p className="section-deck">Voice becomes context. Context becomes action.<br/>A local-first agentic platform, built around trust.</p></div></div>
    <div className="tom-manifest"><span><i/> ON YOUR MACHINE</span><span>VOICE → MEMORY → ACTION</span><span>PERMISSION BY DESIGN</span></div>
    <div className="tom-scene"><div className="tom-system" data-cursor="INSPECT"><div className="tom-system-head"><span className="eyebrow">TOM / ARCHITECTURE STUDY</span><span className="tom-phase">01 / LISTEN</span></div>
      <div className="nucleus-map"><div className="tom-scanline" aria-hidden="true"/>
        <svg className="nucleus-routes" viewBox="0 0 500 500" aria-hidden="true"><circle cx="250" cy="250" r="175"/><circle className="nucleus-arc" cx="250" cy="250" r="134"/><path className="nucleus-spokes" d="M250 75V116M250 384V425M75 250H116M384 250H425M126 126L155 155M345 345L374 374M126 374L155 345M345 155L374 126"/>{Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return <circle className="integration-point" key={i} cx={250+175*Math.cos(a)} cy={250+175*Math.sin(a)} r="3"/>;})}</svg>
        <div className="nucleus-center"><span>TOM<span className="orange">.</span></span><small className="nucleus-state">VOICE / INPUT</small></div>
        <span className="nucleus-label nucleus-label-top">LOCAL INFERENCE</span><span className="nucleus-label nucleus-label-bottom">CONTEXT → EXECUTION</span>
        <div className="nucleus-wave" aria-hidden="true"><StageGraphic index={0}/></div>
      </div>
      <nav className="tom-controls" aria-label="Explore TOM pipeline">{tomStages.map((stage,i)=><a className={`tom-node tom-node-${i}`} key={stage.name} href={`#tom-${stage.name.toLowerCase()}`} data-tom-select={stage.name.toLowerCase()} data-cursor="RUN"><small>0{i+1}</small>{stage.name}</a>)}</nav>
      <p className="tom-console-note">Four stages. One considered action.<br/><span>Scroll to explore, or select a stage.</span></p><div className="tom-principles"><span>LOCAL-FIRST</span><span>PRIVATE</span><span>EXTENSIBLE</span></div>
    </div>
    <div className="tom-stages" data-trace-host><SystemTrace/>{tomStages.map((stage,i)=><article className="tom-stage" id={`tom-${stage.name.toLowerCase()}`} key={stage.name} data-tom-stage={stage.name.toLowerCase()}><header data-trace-node><span className="trace-port"/><span className="eyebrow">0{i+1} / {['VOICE INTO DATA','DATA INTO CONTEXT','CONTEXT INTO ACTION','ACTION INTO TRUST'][i]}</span></header><h3>{stage.name}<span className="orange">.</span></h3><StageGraphic index={i}/><p>{stage.text}</p><p className="stage-tech eyebrow">{stage.tech}</p>{i===2&&<TomGate/>}{i===3&&<span className="eyebrow diagnostics-note">DIAGNOSTIC FLOW ILLUSTRATION</span>}</article>)}</div></div>
    <div className="tom-lab"><div><span className="eyebrow">UNDER THE SURFACE</span><h3>Explore the system.</h3><p>Look closer at memory, automation, architecture, and diagnostics.</p></div><TomExplorer/></div>
    <div className="tom-bottom"><div className="tom-stat"><div className="integration-fan" aria-hidden="true">{Array.from({length:8},(_,i)=><i key={i} style={{rotate:`${i*22.5}deg`}}/>)}</div><strong>48<span>+</span></strong><span className="eyebrow">INTEGRATIONS</span><p>A connected desktop.<br/>One permission boundary.</p></div><div className="tom-stat"><strong className="test-metric">{'700'.split('').map((n,i)=><span className="metric-digit" key={i}>{n}</span>)}<span>+</span></strong><span className="eyebrow">AUTOMATED TESTS</span><p>Reliability is built in.</p></div><div className="tom-summary"><p>Built to act.<br/>Engineered to earn trust.</p><ExternalLink href={person.github}>Explore my GitHub</ExternalLink></div></div><TraceHandoff label="INTELLIGENCE → PRODUCTS"/>
  </section>;
}
