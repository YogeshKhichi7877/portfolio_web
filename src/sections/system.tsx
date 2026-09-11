import { ArrowUpRight } from 'lucide-react';
import { ChapterLabel } from '@/components/primitives';
import { TraceHandoff } from '@/components/system-trace';
import { stack } from '@/data/portfolio';

export function System() {
  return <section id="system" className="chapter system section-pad">
    <ChapterLabel number="03" title="HOW I BUILD / THE CONNECTED STACK"/>
    <div className="system-title"><h2>Built in layers.<br/><span>Connected by design.</span></h2><p>From a person’s intent to a reliable response.<br/>I work on the connections as carefully as the components.</p></div>
    <div className="system-layout">
      <figure className="system-blueprint">
        <div className="blueprint-caption"><span>FIG. 03 / SYSTEM ANATOMY</span><span>EXPLODED VIEW</span></div>
        <svg className="stack-blueprint" viewBox="0 0 580 520" role="img" aria-label="Four connected layers: interface, services, intelligence, and persistence">
          <path className="blueprint-guide" d="M290 25V470M35 360L290 500L550 360M35 390L290 530L550 390"/>
          {[3,2,1,0].map(index=><g key={index} className={`blueprint-plane blueprint-plane-${index}`}>
            <path className="plane-edge" d={`M80 ${105+index*83}L290 ${25+index*83}L500 ${105+index*83}V${120+index*83}L290 ${204+index*83}L80 ${120+index*83}Z`}/>
            <path className="plane-face" d={`M80 ${105+index*83}L290 ${25+index*83}L500 ${105+index*83}L290 ${189+index*83}Z`}/>
            <path className="plane-detail" d={`M145 ${106+index*83}L290 ${51+index*83}L435 ${106+index*83}L290 ${164+index*83}Z`}/>
            <text x="290" y={142+index*83} textAnchor="middle">{['INTERFACE','SERVICES','INTELLIGENCE','PERSISTENCE'][index]}</text>
            <circle className="plane-port" cx="290" cy={169+index*83} r="4"/>
            <text className="plane-index" x="65" y={112+index*83} textAnchor="end">0{index+1}</text>
          </g>)}
          <path id="request-route" className="request-route" d="M290 10C530 10 550 115 500 120S400 200 500 203S550 285 500 286S390 360 290 418"/>
          <circle className="request-packet" cx="0" cy="0" r="5" aria-hidden="true"/>
        </svg>
        <figcaption><span className="status-dot"/> ONE REQUEST. EVERY LAYER.</figcaption>
      </figure>
      <div className="system-specification">{stack.map((layer,index)=><article className="architecture-layer" key={layer.label}>
        <span className="architecture-index">0{index+1}</span><div><span className="eyebrow">{layer.label.split(' / ')[1]}</span><h3>{layer.title}</h3><p className="layer-detail">{layer.detail}</p><p className="stack-items">{layer.items}</p></div>
      </article>)}<a className="system-proof" href="#tom"><span>See the layers working together</span><b>Inside TOM <ArrowUpRight size={18}/></b></a></div>
    </div><TraceHandoff label="ARCHITECTURE → INTENT"/>
  </section>;
}
