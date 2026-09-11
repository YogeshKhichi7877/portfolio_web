'use client';
import Link from 'next/link';
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <html lang="en"><body><main className="fallback-screen"><div className="fallback-trace fallback-trace-error"><span/><i/><b>!</b></div><span className="eyebrow">YOGESH.EXE / RECOVERY</span><h1>System<br/><em>error.</em></h1><p>The page could not recover its interface state.</p><div className="fallback-actions"><button onClick={() => reset()}>Try again ↻</button><Link href="/">Return home ↗</Link></div></main></body></html>;
}
