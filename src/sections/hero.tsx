import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Label } from '@/components/primitives';
export function Hero() {
  return <section id="intro" className="hero chapter assembly-hero" aria-labelledby="hero-title"><div className="hero-stage">
    <div className="hero-topline"><Label>00 / SYSTEM ASSEMBLY</Label><Label className="assembly-state"><span className="status-dot"/><span data-assembly-status>ENGINEER / DETECTED</span></Label></div>
    <div className="assembly-frame" data-cursor="EXPLORE">
      <svg className="assembly-drawing" viewBox="0 0 1200 580" preserveAspectRatio="none" aria-hidden="true"><path className="assembly-rule" d="M0 24H1200M0 278H1200M0 544H1200M24 0V580M1176 0V580"/><path className="assembly-route" d="M0 24H1080V278H120V544H1176V580"/><path className="assembly-ticks" d="M0 16V32M120 16V32M240 16V32M360 16V32M480 16V32M600 16V32M720 16V32M840 16V32M960 16V32M1080 16V32M1200 16V32"/></svg>
      <div className="assembly-coordinate" aria-hidden="true">FIG. 00 / IDENTITY IN CONSTRUCTION <span data-pointer-coordinate>X 000 · Y 000</span></div>
      <h1 id="hero-title" aria-label="Yogesh Khinchi"><span className="sr-only">Yogesh Khinchi</span>{['YOGESH','KHINCHI.'].map((word,row)=><span className={`assembly-word assembly-word-${row}`} aria-hidden="true" key={word}><span className="assembly-outline">{word}</span><span className="assembly-solid">{word.split('').map((letter,i)=><span className={`assembly-letter ${letter==='.'?'name-period':''}`} key={i}>{letter}</span>)}</span></span>)}</h1>
      <span className="assembly-cross" aria-hidden="true">+</span>
    </div>
    <div className="assembly-identity"><p>From interface<br/>to <em>infrastructure.</em></p><div><span>FULL STACK ENGINEER</span><span>AI SYSTEMS</span><span>TECH LEAD — RUMINATE / IIIT SURAT</span></div><a className="pill-button" href="#projects">Explore the work <ArrowUpRight size={18}/></a></div>
    <div className="hero-footer"><a href="#journey" className="scroll-cue"><span className="scroll-circle"><ArrowDown size={16}/></span><Label>SCROLL TO ASSEMBLE</Label></a><Label className="hero-location">ONE SYSTEM. ONE CONTINUOUS STORY.</Label><div className="assembly-meter" aria-hidden="true"><i/><span>00 — 01</span></div></div>
  </div></section>;
}
