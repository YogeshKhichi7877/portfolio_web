'use client';
import Link from 'next/link';
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="fallback-screen"><div className="fallback-trace fallback-trace-error"><span/><i/><b>!</b></div><span className="eyebrow">YOGESH.EXE / SYSTEM INTERRUPTED</span><h1>Something<br/><em>broke.</em></h1><p>The interface hit an unexpected state. You can retry the route or return to the main system.</p><div className="fallback-actions"><button onClick={() => reset()}>Try again ↻</button><Link href="/">Return home ↗</Link></div></main>;
}
