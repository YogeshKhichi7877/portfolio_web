import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
export function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`text-link ${className}`}>{children}<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in new tab)</span></a>;
}
export function ChapterLabel({ number, title }: { number: string; title: string }) {
  return <div className="chapter-label"><span className="tiny-cross" aria-hidden="true">+</span><Label>{number} — {title}</Label></div>;
}
