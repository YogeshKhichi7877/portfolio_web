import { ArrowUpRight } from 'lucide-react';
import { ChapterLabel, ExternalLink, Label } from '@/components/primitives';
import { SystemTrace } from '@/components/system-trace';
import { Now, BehindPortfolio } from '@/sections/now';
import { person } from '@/data/portfolio';
import { Milestones } from '@/sections/milestones';

export function Ending(){return <>
  <section id="impact" className="chapter impact section-pad"><ChapterLabel number="08" title="BUILT. SHIPPED. USED."/><h2 className="display reveal">Real systems.<br/><span className="muted">Real impact.</span></h2><div className="impact-grid" data-trace-host><SystemTrace kind="chain"/>{[
    ['48','+','TOM / INTEGRATIONS','Across the desktop and beyond.','⌁'],['700','+','TOM / AUTOMATED TESTS','Reliability is part of the product.','✓'],['500','+','PAPERSTACK / STUDENTS','Academic resources, within reach.','⋮'],['3','','RUMINATE / PLATFORMS','One connected digital ecosystem.','◇']
  ].map(([value,suffix,label,description,symbol])=><div className="impact-item" key={label}><span className="impact-symbol" data-trace-node aria-hidden="true">{symbol}</span><strong aria-label={`${value}${suffix}`}><span aria-hidden="true">{value.split('').map((n,i)=><span className="metric-digit" key={i}>{n}</span>)}<span>{suffix}</span></span></strong><Label>{label}</Label><p>{description}</p></div>)}</div></section>
  <Milestones/>
  <Now/><BehindPortfolio/>
  <section id="contact" className="chapter contact section-pad"><ChapterLabel number="11" title="THE NEXT CHAPTER"/><span className="final-cursor" aria-hidden="true"/><Label className="contact-availability"><span className="status-dot"/> OPEN TO FULL STACK / SDE INTERNSHIPS</Label><h2 className="contact-title">What should<br/>we build <a href={`mailto:${person.email}`} aria-label="Email Yogesh to discuss what to build next">next<span>↗</span></a>?</h2><div className="contact-bottom"><div><a className="contact-email" href={`mailto:${person.email}`}>Let’s talk <ArrowUpRight size={24}/></a><p>{person.email}</p></div><div className="contact-links"><ExternalLink href={person.github}>GitHub</ExternalLink><ExternalLink href={person.linkedin}>LinkedIn</ExternalLink><a className="text-link" href={person.resume} download>Download résumé <ArrowUpRight size={17}/></a></div></div><p className="contact-complete">SYSTEM JOURNEY COMPLETE / THE NEXT INPUT IS YOURS.</p><footer><a className="wordmark" href="#intro">YOGESH<span>.EXE</span></a><Label>YOGESH KHINCHI / FULL STACK · AI SYSTEMS · TECH LEAD</Label><a className="back-top" href="#intro">BACK TO TOP ↑</a></footer></section>
  </>;}
