import Link from 'next/link';
export default function NotFound() {
  return <main className="fallback-screen"><div className="fallback-trace"><span/><i/><b>404</b></div><span className="eyebrow">YOGESH.EXE / ROUTE LOST</span><h1>Signal<br/><em>lost.</em></h1><p>The requested route does not exist in this system.</p><div className="fallback-actions"><Link href="/">Return home ↗</Link><Link href="/#projects">View projects ↗</Link></div></main>;
}
