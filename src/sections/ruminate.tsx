import { SafeImage } from '@/components/safe-image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ChapterLabel, Label } from '@/components/primitives';
import { SystemTrace } from '@/components/system-trace';

const platforms = [
  { n:'01', domain:'ecelliiitsurat.in', title:'The public face.', label:'PUBLIC PLATFORM', text:'Helped build the official website from scratch. Owned frontend architecture, contributed to backend routes and API integration, and continue to improve the live experience.', scope:'CORE DEVELOPMENT / FRONTEND / PRODUCTION SUPPORT' },
  { n:'02', domain:'teams.ecelliiitsurat.in', title:'The people behind it.', label:'TEAM PLATFORM', text:'Significantly upgraded the team platform’s frontend, CSS, responsive design, and overall visual experience.', scope:'INTERFACE UPGRADE / RESPONSIVENESS / UI POLISH' },
  { n:'03', domain:'portal.ecelliiitsurat.in', title:'The digital doorway.', label:'DIGITAL PORTAL', text:'Personally designed and built the portal — a central part of helping take Ruminate completely online.', scope:'PERSONALLY DESIGNED & BUILT / END-TO-END OWNERSHIP' },
];

export function Ruminate(){
  return <section id="ruminate" className="chapter ruminate section-pad">
    <div className="ruminate-wash" aria-hidden="true"/>
    <ChapterLabel number="07" title="ENGINEERING × LEADERSHIP"/>
    <div className="xray-ecosystem-note" aria-hidden="true"><span className="eyebrow">X-RAY / ECOSYSTEM</span><b>PUBLIC → TEAMS → PORTAL</b><small>Three confirmed surfaces, one connected presence.</small></div>
    <div className="ruminate-heading">
      <h2 className="display">From a college club<br/>to a digital<br/><span>ecosystem.</span></h2>
      <div className="role-label"><span className="role-cross">↗</span><Label>CURRENT ROLE</Label><strong>Tech Lead</strong><p>Ruminate — E-Cell<br/>IIIT Surat</p><Label>TECH TEAM / 2026—PRESENT</Label></div>
    </div>
    <div className="ruminate-lead-feature" data-ruminate-stage="lead">
      <div className="lead-feature-copy"><Label>07.01 / OWNERSHIP IN MOTION</Label><h3>TECH<br/><span>LEAD.</span></h3><p>Turning the engineering layer into a connected public presence — with care for the people, the interfaces, and the system underneath.</p><div className="lead-feature-meta"><span>RUMINATE</span><span>IIIT SURAT</span><span>FRONTEND / SYSTEMS</span></div></div>
      <div className="portrait-frame"><div className="portrait-grid" aria-hidden="true"/><SafeImage src="/yogesh-khinchi-portrait.png" alt="Yogesh Khinchi, Tech Lead at Ruminate — E-Cell IIIT Surat" width={256} height={304} sizes="(max-width: 640px) 78vw, 31vw" className="lead-portrait"/><span className="portrait-corner portrait-corner-tl"/><span className="portrait-corner portrait-corner-br"/><Label className="portrait-caption">YOGESH KHINCHI / TECH LEAD</Label></div>
      <div className="lead-feature-mark" aria-hidden="true"><ArrowDownRight size={46} strokeWidth={.7}/><span>THE PERSON<br/>BEHIND THE SYSTEM</span></div>
    </div>
    <div className="ecosystem-intro"><div className="rumi-brand-lockup"><div className="rumi-logo-frame"><SafeImage src="/brands/rumi_logo.svg" alt="Official Ruminate logo" width={112} height={112} className="rumi-logo"/></div><span>OFFICIAL MARK<br/>E-CELL IIIT SURAT</span></div><div><Label>07.02 / THE DIGITAL ECOSYSTEM</Label><p>Three platforms.<br/>One connected Ruminate.</p></div></div>
    <div className="platforms" data-trace-host><SystemTrace kind="network"/>{platforms.map((p,i)=><a className={`platform platform-${p.n}`} key={p.n} href={`https://${p.domain}`} target="_blank" rel="noopener noreferrer" data-ruminate-platform={i} data-cursor="ENTER ↗">
      <div className="platform-top" data-trace-node><Label><span className="trace-port"/>{p.n} / {p.label}</Label><ArrowUpRight size={25}/></div><div className="platform-surface"><div className="product-browser"><span className="browser-dots" aria-hidden="true">•••</span><span>{p.domain}</span><span aria-hidden="true">↗</span></div><SafeImage src={`/products/${['public','teams','portal'][i]}.png`} alt={`Actual public website: ${p.domain}`} width={1440} height={1000} sizes={i===2?'(max-width: 640px) 90vw, 75vw':'(max-width: 640px) 90vw, 43vw'}/></div><div className="platform-copy"><h3>{p.title}</h3><p>{p.text}</p><span className="platform-domain">{p.domain}</span></div><Label className="platform-scope">{p.scope}</Label><span className="sr-only">Open platform in a new tab</span>
    </a>)}</div>
    <div className="ecosystem-join" aria-hidden="true"><span/><span/><span/></div>
    <div className="ruminate-portal-callout"><Label>07.03 / PORTAL</Label><div><strong>BUILT FROM<br/><span>THE GROUND UP.</span></strong><p>portal.ecelliiitsurat.in<br/><small>TECH LEAD / YOGESH KHINCHI</small></p></div></div>
    <div className="ruminate-resolution"><Label>THREE PLATFORMS. ONE CONNECTED PRESENCE.</Label><p>RUMINATE<span>NOW DIGITAL.</span></p><div><Label>ENGINEERING</Label><span>+</span><Label>OWNERSHIP</Label><span>+</span><Label>LEADERSHIP</Label></div></div>
    <div className="ruminate-exit" aria-hidden="true"><span/><span/><span/></div>
  </section>;
}
