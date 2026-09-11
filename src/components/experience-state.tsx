'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
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
  const closeAfter = (action: () => void) => { action(); setExpanded(false); };
  return <>
    <div className={`experience-dock ${expanded ? 'is-expanded' : ''}`} aria-label="Experience controls">
      <button className="experience-dock-toggle" onClick={() => setExpanded(value => !value)} aria-expanded={expanded} aria-label={expanded ? 'Close experience controls' : 'Open experience controls'}><span aria-hidden="true">{expanded ? '×' : '+'}</span></button>
      <span className="eyebrow">EXPERIENCE</span>
      <button tabIndex={expanded ? 0 : -1} className={`dock-option ${mode === 'cinematic' ? 'selected' : ''}`} onClick={() => closeAfter(() => setMode('cinematic'))} aria-pressed={mode === 'cinematic'}>CINEMATIC</button>
      <button tabIndex={expanded ? 0 : -1} className={`dock-option ${mode === 'quick' ? 'selected' : ''}`} onClick={() => closeAfter(() => setMode('quick'))} aria-pressed={mode === 'quick'}>QUICK VIEW</button>
      <button tabIndex={expanded ? 0 : -1} className={`dock-option dock-xray ${xray ? 'selected' : ''}`} onClick={() => closeAfter(toggleXray)} aria-pressed={xray}>[X] {xray ? 'EXIT X-RAY' : 'X-RAY'}</button>
      <button tabIndex={expanded ? 0 : -1} className="dock-option" onClick={() => closeAfter(() => setControlCenter(true))}>SYSTEM CONTROL</button>
      <button tabIndex={expanded ? 0 : -1} className="dock-option" onClick={() => closeAfter(() => setDiagnostics(true))}>DIAGNOSTICS</button>
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
