/** A section-owned route. Its director measures real data-trace-node elements. */
export function SystemTrace({ kind = 'bus' }: { kind?: 'bus' | 'chain' | 'network' }) {
  return <svg className="system-trace" data-trace-kind={kind} aria-hidden="true" focusable="false">
    <path className="trace-rest"/><path className="trace-draw"/><circle className="trace-packet" r="3"/>
  </svg>;
}

export function TraceHandoff({ label }: { label: string }) {
  return <div className="trace-handoff" aria-hidden="true"><span/><small>{label}</small><i/></div>;
}
