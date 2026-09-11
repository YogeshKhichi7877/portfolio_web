'use client';
import { useState } from 'react';
const views = {
  memory: { title: 'MEMORY / CONTEXT', copy: 'Context, memory, and local retrieval stay close to the system.', nodes: ['LOCAL DATA', 'QDRANT', 'RAG', 'CONTEXT'] },
  automation: { title: 'AUTOMATION / PERMISSION', copy: 'Signals leave TOM only through a permission-controlled boundary.', nodes: ['VS CODE', 'BROWSER', 'FILESYSTEM', 'TERMINAL', 'WINDOWS'] },
  architecture: { title: 'ARCHITECTURE / LAYERS', copy: 'Voice input becomes context, then an approved action and a verified result.', nodes: ['LISTEN', 'UNDERSTAND', 'ACT', 'VERIFY'] },
  diagnostics: { title: 'DIAGNOSTICS / TRUST', copy: 'The verified test count is shown as a compact signal, not a wall of rows.', nodes: ['CANCEL', 'RETRY', 'DIAGNOSTICS', '700+ TESTS'] },
} as const;
export function TomExplorer() {
  const [selected, setSelected] = useState<keyof typeof views>('memory'); const view = views[selected];
  return <div className="tom-explorer"><div className="tom-explorer-head"><span className="eyebrow">TOM / SELECT SYSTEM</span><span className="eyebrow">CONTROLLED VIEW</span></div><div className="tom-explorer-tabs">{Object.keys(views).map(key => <button key={key} onClick={() => setSelected(key as keyof typeof views)} className={selected === key ? 'selected' : ''} aria-pressed={selected === key}>{key.toUpperCase()}</button>)}</div><div className="tom-explorer-view" key={selected}><span className="eyebrow">{view.title}</span><p>{view.copy}</p><div className="tom-explorer-nodes">{view.nodes.map((node, index) => <span key={node}><b>{node}</b>{index < view.nodes.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div></div></div>;
}
