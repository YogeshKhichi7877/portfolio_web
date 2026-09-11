export type Technology = { name: string; usedIn?: string; note?: string };
export type SkillGroup = { id: string; category: string; purpose: string; technologies: Technology[] };

// Résumé-backed technologies. Project attribution is explicit, never inferred from a skill alone.
export const skills: SkillGroup[] = [
  {id:'languages',category:'Languages',purpose:'The foundation',technologies:[
    {name:'JavaScript',usedIn:'MERN applications'}, {name:'Python',usedIn:'TOM'}, {name:'TypeScript',usedIn:'This portfolio'},
    {name:'C'}, {name:'C++'}, {name:'HTML5'}, {name:'CSS3'}, {name:'Dart',note:'Basic'}]},
  {id:'frontend',category:'Frontend',purpose:'The human interface',technologies:[
    {name:'React',usedIn:'TOM · Resume AI · PaperStack · Expense Tracker · Ruminate'}, {name:'Next.js',usedIn:'This portfolio'},
    {name:'Tailwind CSS',usedIn:'PaperStack · Expense Tracker · Ruminate'}, {name:'Redux Toolkit'}]},
  {id:'backend',category:'Backend',purpose:'The connection layer',technologies:[
    {name:'Node.js',usedIn:'Resume AI · PaperStack · Expense Tracker'}, {name:'Express',usedIn:'Resume AI · PaperStack · Expense Tracker'},
    {name:'REST APIs'}, {name:'GraphQL'}, {name:'WebSockets',usedIn:'TOM'}, {name:'Socket.io'}, {name:'JWT',usedIn:'Resume AI · PaperStack · Expense Tracker'}, {name:'OAuth 2.0'}]},
  {id:'data',category:'Data',purpose:'Memory that persists',technologies:[
    {name:'MongoDB',usedIn:'Resume AI · PaperStack · Expense Tracker'}, {name:'SQLite',usedIn:'TOM'},
    {name:'Qdrant',usedIn:'TOM'}, {name:'Firebase'}, {name:'Redis',note:'Basic'}]},
  {id:'intelligence',category:'AI systems',purpose:'Context into action',technologies:[
    {name:'Ollama',usedIn:'TOM'}, {name:'Gemini API',usedIn:'Multimodal AI chat'}, {name:'Faster-Whisper',usedIn:'TOM'},
    {name:'OpenWakeWord',usedIn:'TOM'}, {name:'RAG',usedIn:'TOM'}, {name:'MCP',usedIn:'TOM'}, {name:'Prompt Engineering'}]},
  {id:'delivery',category:'Delivery & tools',purpose:'From local to live',technologies:[
    {name:'Git'}, {name:'GitHub'}, {name:'Docker'}, {name:'CI/CD'}, {name:'Linux CLI'}, {name:'Postman'},
    {name:'Vercel'}, {name:'Render'}, {name:'Playwright',usedIn:'TOM · Portfolio QA'}, {name:'GSAP',usedIn:'This portfolio'}, {name:'Lenis',usedIn:'This portfolio'}]},
];
