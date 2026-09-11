'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Command, Search, X } from 'lucide-react';
import { chapters, person } from '@/data/portfolio';
import { useExperience } from '@/components/experience-state';

const commands = [
  ...chapters.map((c, i) => ({ label: c.label, href: `#${c.id}`, meta: `CHAPTER ${String(i).padStart(2, '0')}` })),
  { label: 'GitHub', href: person.github, meta: 'EXTERNAL' }, { label: 'LinkedIn', href: person.linkedin, meta: 'EXTERNAL' },
  { label: 'Download résumé', href: person.resume, meta: 'PDF' }, { label: 'Email Yogesh', href: `mailto:${person.email}`, meta: 'CONTACT' },
  { label: 'System Diagnostics', href: '#diagnostics', meta: 'DEV LAYER' }, { label: 'System Control', href: '#control', meta: 'DEV LAYER' }, { label: 'Toggle X-Ray', href: '#xray', meta: 'X' },
];

export function Navigation() {
  const { toggleXray, setDiagnostics, setControlCenter } = useExperience();
  const [active, setActive] = useState('intro'); const [query, setQuery] = useState('');
  const dialog = useRef<HTMLDialogElement>(null); const trigger = useRef<HTMLButtonElement>(null); const input = useRef<HTMLInputElement>(null);
  const close = () => dialog.current?.close();
  const open = () => { setQuery(''); dialog.current?.showModal(); input.current?.focus(); };
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); if (dialog.current?.open) dialog.current.close(); else open(); } };
    window.addEventListener('keydown', handleKey);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('section.chapter[id]').forEach(section => observer.observe(section));
    return () => { window.removeEventListener('keydown', handleKey); observer.disconnect(); };
  }, []);
  const results = commands.filter(c => `${c.label} ${c.meta}`.toLowerCase().includes(query.toLowerCase()));
  const action = (event: React.MouseEvent<HTMLAnchorElement>, command: (typeof commands)[number]) => {
    if (command.meta !== 'DEV LAYER') { close(); return; }
    event.preventDefault(); close(); if (command.label === 'System Diagnostics') setDiagnostics(true); else if (command.label === 'System Control') setControlCenter(true); else toggleXray();
  };
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a href="#intro" className="wordmark" aria-label="Yogesh dot exe home">YOGESH<span>.EXE</span></a><nav className="primary-nav" aria-label="Main navigation"><a href="#projects" aria-current={active === 'projects' ? 'location' : undefined}>Selected work</a><a href="#ruminate" aria-current={active === 'ruminate' ? 'location' : undefined}>Ruminate</a><a href={person.resume} target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={12}/></a></nav><div className="header-actions"><a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={14}/></a><button ref={trigger} onClick={open} className="command-trigger" aria-label="Open chapter menu and command palette" aria-haspopup="dialog"><Command size={12}/><span>K</span><span className="mobile-menu-label">MENU</span></button></div></header>
    <nav className="chapter-rail" aria-label="Chapter navigation"><span className="rail-caption" aria-hidden="true">TRACE / {String(Math.max(0, chapters.findIndex(c => c.id === active))).padStart(2, '0')}</span>{chapters.map((c, i) => <a key={c.id} href={`#${c.id}`} className={active === c.id ? 'active' : ''} aria-label={`Chapter ${String(i).padStart(2, '0')}: ${c.label}`} aria-current={active === c.id ? 'location' : undefined}><span className="rail-label">{String(i).padStart(2, '0')} / {c.label}</span><span className="rail-line"/></a>)}</nav>
    <div className="reading-progress" aria-hidden="true"><span/></div>
    <dialog ref={dialog} className="command-dialog" aria-labelledby="command-title" onClick={event => { if (event.target === dialog.current) close(); }} onClose={() => trigger.current?.focus()}>
      <div className="command-panel" data-lenis-prevent><div className="command-heading"><h2 id="command-title">Find your next chapter.</h2><button onClick={close} aria-label="Close command palette"><X size={20}/></button></div><div className="command-search"><Search size={18}/><input ref={input} placeholder="Search chapters, links, or résumé…" value={query} onChange={event => setQuery(event.target.value)} aria-label="Search portfolio commands" onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); dialog.current?.querySelector<HTMLAnchorElement>('.command-result')?.focus(); } }}/><kbd>ESC</kbd></div><div className="command-results" onKeyDown={event => { if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return; event.preventDefault(); const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('a')); const i = links.indexOf(document.activeElement as HTMLAnchorElement); links[(i + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length]?.focus(); }}>{results.length ? results.map(command => <a className="command-result" key={command.href} href={command.href} onClick={event => action(event, command)} {...(command.meta === 'EXTERNAL' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...(command.meta === 'PDF' ? { download: true } : {})}><span>{command.label}</span><small>{command.meta}</small><ArrowUpRight size={15}/></a>) : <p className="command-empty">No matches. Try “TOM”, “projects”, or “contact”.</p>}</div><div className="command-footer">↑ ↓ TO NAVIGATE <span>ENTER TO OPEN · X X-RAY · T TOM · R PROJECTS</span></div></div>
    </dialog>
  </>;
}
