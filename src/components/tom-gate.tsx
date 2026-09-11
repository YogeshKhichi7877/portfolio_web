'use client';
import { useState } from 'react';
export function TomGate() {
  const [authorized,setAuthorized] = useState(false);
  return <div className="permission-demo" data-authorized={authorized}>
    <span className="eyebrow">PERMISSION GATE / INTERACTIVE ILLUSTRATION</span>
    <div className="permission-flow"><span>REQUEST</span><i/><span className="gate-state" role="status">{authorized?'AUTHORIZED':'AWAITING PERMISSION'}</span><i/><span className="gate-action">{authorized?'ACTION ROUTE OPEN':'ACTION BLOCKED'}</span></div>
    <button type="button" onClick={()=>setAuthorized(!authorized)} data-cursor="RUN">{authorized?'Reset illustration ↺':'Authorize illustration ↗'}</button>
    <small>This illustrates TOM’s permission boundary. No application is opened.</small>
  </div>;
}
