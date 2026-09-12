import { ArrowUpRight, Flag, Palette } from 'lucide-react';
import { ChapterLabel } from '@/components/primitives';

export function Milestones() {
  return <section id="milestones" className="chapter milestones section-pad" aria-labelledby="milestones-title">
    <ChapterLabel number="08.1" title="BEYOND THE DELIVERABLE"/>
    <div className="milestone-heading"><h2 id="milestones-title">Along<br/><em>the way.</em></h2><p>Some things you learn by building.<br/>Others, by showing up.</p><span className="milestone-margin" aria-hidden="true">A FEW NOTES FROM THE JOURNEY ↙</span></div>
    <div className="award-spread">
      <article className="award-note"><div className="award-top"><span>01 / HACKATHON</span><span>IIIT SURAT</span></div><div className="award-rank" aria-label="Fourth overall"><span aria-hidden="true">04</span><span className="award-stamp">OVERALL<br/>PLACEMENT</span></div><h3>Reaimaginations<br/>Hackathon</h3><p>Fourth overall. Ideas put to the test.</p><div className="award-rule"/></article>
      <article className="award-note"><div className="award-top"><span>02 / WEB & DESIGN</span><ArrowUpRight size={20} aria-hidden="true"/></div><div className="award-rank" aria-label="Fourth place in each competition"><span aria-hidden="true">04</span><span className="award-stamp">IN EACH<br/>COMPETITION</span></div><h3>WebExperience<br/>& CSS Battle</h3><p>Two competitions. Fourth place in each.</p><div className="award-rule"/></article>
    </div>
    <article className="beyond-note"><div><span className="eyebrow">03 / OFF THE SCREEN</span><h3>A little art.<br/>A lot of teamwork.</h3></div><div className="beyond-details"><p><Palette size={20} aria-hidden="true"/><span><strong>A different kind of canvas.</strong>Art Club member, IIIT Surat.</span></p><p><Flag size={20} aria-hidden="true"/><span><strong>Learning to lead, early.</strong>Former Venus House Captain. Led the Class X cricket team and inter-house sports participation.</span></p></div></article>
  </section>;
}
