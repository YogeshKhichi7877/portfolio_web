'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useExperience } from '@/components/experience-state';

const systems: Record<string, { label: string; nodes: string[]; note: string }> = {
  resume: { label: 'RESUMELENS / CONFIRMED ARCHITECTURE', nodes: ['PRODUCT UI', 'REACT FRONTEND', 'EXPRESS API', 'MONGODB', 'GROQ AI'], note: 'Confirmed from the project stack and feature description.' },
  papers: { label: 'PAPERSTACK / CONFIRMED ARCHITECTURE', nodes: ['PRODUCT UI', 'REACT FRONTEND', 'EXPRESS API', 'MONGODB', 'CLOUDINARY'], note: 'Confirmed from the project stack and upload/download features.' },
  expense: { label: 'EXPENSE TRACKER / CONFIRMED ARCHITECTURE', nodes: ['DASHBOARD UI', 'REACT FRONTEND', 'EXPRESS API', 'MONGODB', 'CHART.JS'], note: 'Only the confirmed application layers are shown.' },
};

export function ProjectXRay({ type }: { type: string }) {
  const { xray, toggleXray } = useExperience();
  const layer = systems[type] ?? systems.expense;
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!panel.current) return; const context = gsap.context(() => { gsap.timeline().to(panel.current, { autoAlpha: xray ? 1 : 0, y: xray ? 0 : 12, duration: .35, ease: 'power2.out' }); }, panel); return () => context.revert(); }, [xray]);
  return <div className={`project-xray ${xray ? 'is-active' : ''}`}><button className="xray-trigger" type="button" onClick={toggleXray} aria-pressed={xray} data-cursor={xray ? 'EXIT X-RAY' : 'X-RAY'}>[X] {xray ? 'EXIT X-RAY' : 'X-RAY'}</button><div className="xray-panel" ref={panel} aria-hidden={!xray}><span className="eyebrow">{layer.label}</span><div className="xray-layers">{layer.nodes.map((node, index) => <div className="xray-node" key={node}><b>{node}</b>{index < layer.nodes.length - 1 && <i aria-hidden="true"/>}</div>)}</div><p>{layer.note}</p></div></div>;
}
