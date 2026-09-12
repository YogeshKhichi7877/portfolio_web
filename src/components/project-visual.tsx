import { SafeImage } from '@/components/safe-image';
const screens:Record<string,{id:string;name:string;domain:string;caption:string}>={
  resume:{id:'resume-ai',name:'Resume AI',domain:'resume-ai-pearl.vercel.app',caption:'PUBLIC PRODUCT / NOW BRANDED RESUMELENS'},
  papers:{id:'paperstack',name:'PaperStack',domain:'paper-stack-beryl.vercel.app',caption:'PUBLIC PRODUCT / IIIT SURAT ARCHIVE'},
  expense:{id:'expense-tracker',name:'Expense Tracker',domain:'expensetracker2-eight.vercel.app',caption:'PUBLIC PRODUCT / EXPENSE TRACKER'},
  learnstack:{id:'learnstack',name:'LearnStack',domain:'learnstack.co.in',caption:'LIVE STOREFRONT / STUDENT & KIDS COLLECTIONS'},
};
export function ProjectVisual({type}:{type:string}) {
  const screen=screens[type];
  if(type==='chat')return <figure className="product-screen chat-screen"><div className="product-browser"><span>AI CHAT BOX / CAPABILITY MAP</span><span aria-hidden="true">↗</span></div><div className="chat-capability-map"><span className="eyebrow">BUILT IN SEMESTER 01</span><h3>Ask. Explore.<br/><em>Make something.</em></h3><div className="chat-mode-grid">{[['01','Text'],['02','Multi-turn chat'],['03','Code execution'],['04','PDF analysis'],['05','Reasoning'],['06','Structured JSON']].map(([n,label])=><div key={n}><span>{n}</span>{label}</div>)}</div><div className="chat-api-line"><span>React + TypeScript</span><i>→</i><span>Express</span><i>→</i><span>Gemini</span></div></div><figcaption>CAPABILITY DIAGRAM / BASED ON THE PROJECT SOURCE</figcaption></figure>;
  return <figure className={`product-screen ${type}-screen`} data-cursor="VIEW PROJECT ↗"><div className="product-browser"><span className="browser-dots" aria-hidden="true">•••</span><span>{screen.domain}</span><span aria-hidden="true">↗</span></div><SafeImage src={`/products/${screen.id}.png`} alt={`${screen.name} — ${type==='expense'?'supplied application dashboard':'actual public website screenshot'}`} width={1440} height={1000} sizes="(max-width: 640px) 90vw, 48vw"/><figcaption>{type==='expense'?'APPLICATION DASHBOARD / PROVIDED BY YOGESH':screen.caption}</figcaption></figure>;
}
