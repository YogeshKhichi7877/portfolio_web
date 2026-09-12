'use client';
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Activity, ArrowUpRight, Compass, Layers, Play, SlidersHorizontal, X, Zap } from 'lucide-react';
import { person } from '@/data/portfolio';

type ExperienceMode = 'cinematic' | 'quick';
type ExperienceContextValue = {
  xray: boolean;
  setXray: (value: boolean) => void;
  toggleXray: () => void;
  mode: ExperienceMode;
  setMode: (value: ExperienceMode) => void;
  diagnostics: boolean;
  setDiagnostics: (value: boolean) => void;
  controlCenter: boolean;
  setControlCenter: (value: boolean) => void;
};
const ExperienceContext = createContext<ExperienceContextValue | null>(null);
export function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) throw new Error('useExperience must be used inside ExperienceProvider');
  return context;
}
export function ExperienceProvider({ children }: { children: React.ReactNode }) {
  const [xray, setXray] = useState(false);
  const [mode, setModeState] = useState<ExperienceMode>('cinematic');
  const [diagnostics, setDiagnostics] = useState(false);
  const [controlCenter, setControlCenter] = useState(false);
  useEffect(() => {
    const saved = window.sessionStorage.getItem('yogesh-experience-mode');
    if (saved === 'quick' || saved === 'cinematic') window.setTimeout(() => setModeState(saved), 0);
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, select, [contenteditable="true"]')) return;
      const key = event.key.toLowerCase();
      if (key === 'x') { event.preventDefault(); setXray(value => !value); }
      if (key === 't') document.querySelector('#tom')?.scrollIntoView({ behavior: 'smooth' });
      if (key === 'g') window.open(person.github, '_blank', 'noopener,noreferrer');
      if (key === 'r') window.open(person.resume, '_blank', 'noopener,noreferrer');
      if (key === 'escape') { setXray(false); setDiagnostics(false); setControlCenter(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.xray = xray ? 'on' : 'off';
    window.dispatchEvent(new CustomEvent('experience-xray', { detail: xray }));
  }, [xray]);
  useEffect(() => {
    document.documentElement.dataset.experienceMode = mode;
    window.sessionStorage.setItem('yogesh-experience-mode', mode);
    window.dispatchEvent(new CustomEvent('experience-mode-change', { detail: mode }));
  }, [mode]);
  const value = useMemo(() => ({ xray, setXray, toggleXray: () => setXray(value => !value), mode, setMode: setModeState, diagnostics, setDiagnostics, controlCenter, setControlCenter }), [xray, mode, diagnostics, controlCenter]);
  return <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>;
}

export function ExperienceDock() {
  const { xray, toggleXray, mode, setMode, setDiagnostics, setControlCenter } = useExperience();
  const [expanded, setExpanded] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!expanded) return;
    // Visibility is animated: focus after the panel settles, or immediately for reduced motion.
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 360;
    const focusTimer = window.setTimeout(() => root.current?.querySelector<HTMLButtonElement>('.dock-option')?.focus({ preventScroll: true }), delay);
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setExpanded(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setExpanded(false); toggle.current?.focus(); } };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { window.clearTimeout(focusTimer); document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [expanded]);
  const closeAfter = (action: () => void) => { setExpanded(false); toggle.current?.focus(); action(); };
  return <>
    <div ref={root} className={`experience-dock ${expanded ? 'is-expanded' : ''}`}>
      <div id="experience-options" className="dock-panel" role="group" aria-label="Experience options" inert={!expanded} data-lenis-prevent>
        <div className="dock-panel-heading"><span>MAKE IT YOURS</span><strong>Your experience.</strong><p>Choose how you explore.</p></div>
        <button className={`dock-option ${mode === 'cinematic' ? 'selected' : ''}`} onClick={() => closeAfter(() => setMode('cinematic'))} aria-pressed={mode === 'cinematic'}><Play size={19}/><span>Cinematic<small>The full motion experience</small></span><i/></button>
        <button className={`dock-option ${mode === 'quick' ? 'selected' : ''}`} onClick={() => closeAfter(() => setMode('quick'))} aria-pressed={mode === 'quick'}><Zap size={19}/><span>Quick View<small>All the work, at your pace</small></span><i/></button>
        <div className="dock-divider"/>
        <button className={`dock-option dock-xray ${xray ? 'selected' : ''}`} onClick={() => closeAfter(toggleXray)} aria-pressed={xray}><Layers size={19}/><span>X-Ray<small>See the project architecture</small></span><i/></button>
        <button className="dock-option" onClick={() => closeAfter(() => setControlCenter(true))}><Compass size={19}/><span>System Control<small>Jump to a chapter</small></span><ArrowUpRight size={14}/></button>
        <button className="dock-option" onClick={() => closeAfter(() => setDiagnostics(true))}><Activity size={19}/><span>Diagnostics<small>Inspect this experience</small></span><ArrowUpRight size={14}/></button>
      </div>
      <button ref={toggle} className="experience-dock-toggle" onClick={() => setExpanded(value => !value)} aria-controls="experience-options" aria-expanded={expanded} aria-label={expanded ? 'Close experience controls' : 'Open experience controls'}>{expanded ? <X size={22}/> : <SlidersHorizontal size={22}/>}<span className="dock-toggle-hint">Experience</span></button>
    </div>
    <ControlCenter/>
    <DiagnosticsPanel/>
  </>;
}

function Overlay({ children, close }: { children: React.ReactNode; close: () => void }) {
  return <div className="system-overlay" role="dialog" aria-modal="true"><button className="overlay-close" onClick={close} aria-label="Close overlay">× ESC</button>{children}</div>;
}
function ControlCenter() {
  const { controlCenter, setControlCenter, mode, xray } = useExperience();
  if (!controlCenter) return null;
  const jump = (id: string) => { setControlCenter(false); document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' }); };
  return <Overlay close={() => setControlCenter(false)}><div className="control-center"><span className="eyebrow">YOGESH.EXE / SYSTEM CONTROL</span><h2>Choose a system layer.</h2><div className="control-status"><span className="status-dot"/> ENGINEERING ACTIVE <span/> {mode.toUpperCase()} <span/> {xray ? 'X-RAY ON' : 'NORMAL'}</div><div className="control-grid">{[['tom','TOM','local-first AI system'],['projects','PROJECTS','shipped applications'],['skills','SKILLS','toolchain network'],['ruminate','RUMINATE','three-platform ecosystem'],['contact','CONTACT','start a conversation']].map(([id,label,detail])=><button key={id} onClick={() => jump(id)}><b>{label}</b><small>{detail}</small><span>↗</span></button>)}</div></div></Overlay>;
}
function DiagnosticsPanel() {
  const { diagnostics, setDiagnostics, xray, mode } = useExperience();
  const [velocity, setVelocity] = useState(0);
  useEffect(() => { if (!diagnostics) return; let previous = window.scrollY; let frame = 0; const loop = () => { const next = window.scrollY; setVelocity(Math.round(next - previous)); previous = next; frame = requestAnimationFrame(loop); }; frame = requestAnimationFrame(loop); return () => cancelAnimationFrame(frame); }, [diagnostics]);
  if (!diagnostics) return null;
  return <Overlay close={() => setDiagnostics(false)}><div className="diagnostics-panel"><span className="eyebrow">YOGESH.EXE / DIAGNOSTICS</span><h2>System status.</h2><dl><dt>FRAMEWORK</dt><dd>NEXT.JS / REACT</dd><dt>LANGUAGE</dt><dd>TYPESCRIPT</dd><dt>MOTION</dt><dd>GSAP / SCROLLTRIGGER</dd><dt>SCROLL</dt><dd>LENIS</dd><dt>TRACE</dt><dd>SVG PATHS / LOCAL ANCHORS</dd><dt>REDUCED MOTION</dt><dd>SUPPORTED</dd><dt>RESPONSIVE</dt><dd>ACTIVE</dd><dt>VIEWPORT</dt><dd>{typeof window === 'undefined' ? '—' : `${window.innerWidth} × ${window.innerHeight}`}</dd><dt>SCROLL VELOCITY</dt><dd>{velocity}px / frame</dd><dt>X-RAY MODE</dt><dd>{xray ? 'ON' : 'OFF'}</dd><dt>EXPERIENCE</dt><dd>{mode.toUpperCase()}</dd></dl><p className="diagnostics-note">Client-side readings describe this portfolio’s current UI state. They are not backend telemetry.</p></div></Overlay>;
}
