'use client';
import { useEffect, useRef, useState } from 'react';
type Status = 'offline' | 'online' | 'slow' | null;
export function NetworkStatus() {
  const [status, setStatus] = useState<Status>(null); const timer = useRef<number | undefined>(undefined); const last = useRef<Status>(null);
  useEffect(() => {
    const show = (next: Status, duration = 6000) => { if (last.current === next && next !== 'offline') return; last.current = next; setStatus(next); window.clearTimeout(timer.current); if (next !== 'offline') timer.current = window.setTimeout(() => setStatus(null), duration); };
    const check = () => { const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection; if (!navigator.onLine) show('offline', 0); else if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') show('slow'); };
    const online = () => show('online'); const offline = () => show('offline', 0);
    check(); window.addEventListener('online', online); window.addEventListener('offline', offline); window.addEventListener('connectionchange', check); const connection = (navigator as Navigator & { connection?: EventTarget }).connection; connection?.addEventListener('change', check);
    return () => { window.clearTimeout(timer.current); window.removeEventListener('online', online); window.removeEventListener('offline', offline); window.removeEventListener('connectionchange', check); connection?.removeEventListener('change', check); };
  }, []);
  if (!status) return null;
  const copy = status === 'offline' ? ['CONNECTION LOST', 'You’re offline. Existing content remains available.'] : status === 'online' ? ['CONNECTION RESTORED', 'System online.'] : ['NETWORK / SLOW', 'Heavy visuals may take longer.'];
  return <div className={`network-toast network-${status}`} role={status === 'offline' ? 'alert' : 'status'} aria-live="polite"><span className="network-pulse"/><div><b>{copy[0]}</b><small>{copy[1]}</small></div>{status !== 'offline' && <button onClick={() => setStatus(null)} aria-label="Dismiss network message">×</button>}</div>;
}
