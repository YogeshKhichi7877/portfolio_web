'use client';
import { useState } from 'react';
export function TraceDiagnostic({ source, destination, state }: { source: string; destination: string; state: string }) {
  const [open, setOpen] = useState(false);
  return <div className="trace-diagnostic"><button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} data-cursor="INSPECT"><span className="status-dot"/> SIGNAL / INSPECT</button>{open && <div className="trace-diagnostic-panel" role="status"><span>SOURCE <b>{source}</b></span><span>DESTINATION <b>{destination}</b></span><span>STATE <b>{state}</b></span><small>Conceptual portfolio flow, not backend telemetry.</small></div>}</div>;
}
