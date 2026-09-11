import { SafeImage } from '@/components/safe-image';
const screens:Record<string,{id:string;name:string;domain:string;caption:string}>={
  resume:{id:'resume-ai',name:'Resume AI',domain:'resume-ai-pearl.vercel.app',caption:'PUBLIC PRODUCT / NOW BRANDED RESUMELENS'},
  papers:{id:'paperstack',name:'PaperStack',domain:'paper-stack-beryl.vercel.app',caption:'PUBLIC PRODUCT / IIIT SURAT ARCHIVE'},
  expense:{id:'expense-tracker',name:'Expense Tracker',domain:'expensetracker2-eight.vercel.app',caption:'PUBLIC PRODUCT / EXPENSE TRACKER'},
};
export function ProjectVisual({type}:{type:string}) {
  const screen=screens[type];
  if(type==='expense')return <figure className="product-screen expense-screen" data-cursor="INSPECT"><div className="product-browser"><span>EXPENSE TRACKER / DATA FLOW</span><span aria-hidden="true">↗</span></div><div className="expense-flow"><span className="eyebrow">FROM DETAIL TO DECISION</span><h3>Record.<br/>Understand.<br/><em>Adjust.</em></h3><div className="expense-routes"><span>TRANSACTIONS</span><i>↓</i><span>CATEGORIES / DAILY + MONTHLY</span><i>↓</i><span>ANALYTICS / BUDGETS / CSV</span></div></div><figcaption>WORKFLOW DIAGRAM / PUBLIC PREVIEW UNAVAILABLE</figcaption></figure>;
  return <figure className={`product-screen ${type}-screen`} data-cursor="VIEW PROJECT ↗"><div className="product-browser"><span className="browser-dots" aria-hidden="true">•••</span><span>{screen.domain}</span><span aria-hidden="true">↗</span></div><SafeImage src={`/products/${screen.id}.png`} alt={`${screen.name} — actual public website screenshot`} width={1440} height={1000} sizes="(max-width: 640px) 90vw, 48vw"/><figcaption>{screen.caption}</figcaption></figure>;
}
