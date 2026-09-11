import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { ChapterLabel } from '@/components/primitives';
import { TraceHandoff } from '@/components/system-trace';
import { skills } from '@/data/skills';
import { person } from '@/data/portfolio';
import { TraceDiagnostic } from '@/components/trace-diagnostic';

const evidence = [
  { label: 'Python in TOM · TypeScript in this portfolio', href: '#tom', link: 'Explore TOM' },
  { label: 'React interfaces for PaperStack & ResumeLens', href: '#projects', link: 'See the interfaces' },
  { label: 'Express APIs & authentication across MERN apps', href: '#projects', link: 'See the applications' },
  { label: 'MongoDB for apps · SQLite & Qdrant for TOM', href: '#tom', link: 'Explore the architecture' },
  { label: 'Local inference, voice & retrieval in TOM', href: '#tom', link: 'Meet the system' },
  { label: 'Playwright checks · GSAP motion in this portfolio', href: '#build', link: 'Behind this portfolio' },
];

export function Skills() {
  return <section id="skills" className="chapter skills section-pad">
    <ChapterLabel number="02" title="CAPABILITIES / IN PRACTICE"/>
    <div className="capability-heading">
      <h2>Technical range.<br/><span>Practical depth.</span></h2>
      <p>A toolkit is only useful when it ships something.<br/>Here’s where mine goes to work.</p>
    </div>
    <div className="capability-layout">
      <aside className="capability-index">
        <div className="capability-file" aria-hidden="true"><span>YK / FIELD NOTES</span><div className="capability-folio"><i/><i/><i/><b>06<span>CONNECTED<br/>DISCIPLINES</span></b></div><span>FULL STACK + AI SYSTEMS</span></div>
        <p>From the first interface<br/>to the system underneath.</p>
        <a className="capability-resume" href={person.resume} target="_blank" rel="noopener noreferrer"><FileText size={17} aria-hidden="true"/> View my résumé <ArrowUpRight size={17} aria-hidden="true"/></a>
        <span className="capability-hint"><ArrowDown size={14} aria-hidden="true"/> Explore the skill sheets</span>
        <TraceDiagnostic source="SKILLS" destination="SYSTEM ARCHITECTURE" state="CONNECTED"/>
      </aside>
      <div className="capability-sheets">
        {skills.map((group,index)=><div className="capability-sheet-wrap" key={group.id}>
          <article className={`skill-group capability-sheet skill-${group.id}`}>
            <div className="sheet-shade" aria-hidden="true"/>
            <header><span className="sheet-number" aria-hidden="true">0{index+1}</span><div><span className="sheet-kicker">{group.purpose}</span><h3>{group.category}</h3></div><span className="sheet-register" aria-hidden="true">+</span></header>
            <ul>{group.technologies.map(tech=><li key={tech.name}><button className="skill-tech" type="button" data-cursor="INSPECT" aria-describedby={`skill-${tech.name.replace(/[^a-z0-9]/gi,'-')}`}>
              {tech.name}<span className="skill-detail" role="tooltip" id={`skill-${tech.name.replace(/[^a-z0-9]/gi,'-')}`}><b>{group.category}</b>{tech.usedIn ? `Used in: ${tech.usedIn}` : tech.note ? `Working knowledge: ${tech.note.toLowerCase()}` : 'Listed in my technical skillset.'}</span>
            </button>{tech.note&&<small className="skill-note">{tech.note}</small>}</li>)}</ul>
            <footer className="sheet-evidence"><div><span>APPLIED IN</span><p>{evidence[index].label}</p></div><a href={evidence[index].href}>{evidence[index].link}<ArrowUpRight size={16} aria-hidden="true"/></a></footer>
          </article>
        </div>)}
      </div>
    </div>
    <div className="capability-footnote"><span>Tools, with context.</span><p>Explore a technology for project context. Basic familiarity is marked explicitly.</p></div>
    <TraceHandoff label="CAPABILITY → ARCHITECTURE"/>
  </section>;
}
