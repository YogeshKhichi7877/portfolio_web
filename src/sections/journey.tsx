import { ChapterLabel, Label } from '@/components/primitives';
import { System } from '@/sections/system';
import { Skills } from '@/sections/skills';
import { SystemTrace, TraceHandoff } from '@/components/system-trace';
export function Journey() {
  return <>
    <section id="journey" className="chapter journey section-pad">
      <ChapterLabel number="01" title="THE JOURNEY"/>
      <div className="journey-layout"><div><h2 className="display reveal">Curiosity.<br/>Then code.<br/><span className="muted">Then ownership.</span></h2><p className="body-copy reveal">I’m Yogesh, a Computer Science student at IIIT Surat. I build across the stack, connect AI to useful workflows, and take responsibility for what ships.</p><p className="design-conviction">I build the logic. <strong>I shape how it feels.</strong> Through CSS, I use typography, spacing, and purposeful motion to make complex products feel clear and intuitive.</p><div className="education reveal"><Label>EDUCATION / 2024—2028 EXPECTED</Label><p>B.Tech, Computer Science & Engineering</p><span>IIIT Surat · CGPA 8.1 / 10</span></div></div>
      <div className="journey-route" data-trace-host><SystemTrace/><ol className="journey-timeline">{[
        ['01', 'The foundation', 'IIIT Surat', 'Computer science. A place to ask better questions.'],
        ['02', 'The craft', 'Full Stack Development', 'From responsive interfaces to APIs and data.'],
        ['03', 'The practice', 'Production Applications', 'Shipping, maintaining, and learning from real use.'],
        ['04', 'The exploration', 'AI Systems', 'Voice, memory, and permission-gated automation.'],
        ['05', 'The responsibility', 'Technical Leadership', 'Tech Lead at Ruminate — E-Cell, IIIT Surat.'],
      ].map(([n, label, title, text]) => <li className="journey-step" key={n}><span className="timeline-dot" data-trace-node/><Label>{n} / {label.toUpperCase()}</Label><h3>{title}</h3><p>{text}</p></li>)}</ol></div></div><TraceHandoff label="CURIOSITY → CAPABILITY"/>
    </section>
    <Skills/>
    <System/>
  </>;
}
