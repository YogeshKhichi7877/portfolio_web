export const person = {
  name: 'Yogesh Khinchi', email: 'yogeshkhinchi2005@gmail.com',
  github: 'https://github.com/YogeshKhichi7877',
  linkedin: 'https://linkedin.com/in/yogesh-khinchi-1103j',
  resume: '/Yogesh-Khinchi-Resume.pdf',
};
export const chapters = [
  { id: 'intro', label: 'Initialization' }, { id: 'journey', label: 'About / the journey' },
  { id: 'skills', label: 'Skills / toolchain' }, { id: 'system', label: 'How I build' }, { id: 'principles', label: 'Engineering principles' }, { id: 'tom', label: 'TOM / flagship' },
  { id: 'projects', label: 'Selected work' }, { id: 'ruminate', label: 'Ruminate' },
  { id: 'impact', label: 'Impact' }, { id: 'milestones', label: 'Along the way' }, { id: 'now', label: 'Currently building' },
  { id: 'build', label: 'Behind this portfolio' }, { id: 'contact', label: 'Contact / next' },
];
export const stack = [
  { title: 'The experience', label: '01 / FRONTEND', items: 'React · Next.js · Tailwind CSS · Redux Toolkit', detail: 'Interfaces that make complex systems feel simple.' },
  { title: 'The connection', label: '02 / BACKEND', items: 'Node.js · Express · REST · GraphQL · WebSockets · Socket.io', detail: 'APIs, authentication, and real-time communication.' },
  { title: 'The intelligence', label: '03 / AI SYSTEMS', items: 'Ollama · Gemini API · Faster-Whisper · OpenWakeWord · RAG · MCP', detail: 'Local inference, voice, context, and connected tools.' },
  { title: 'The foundation', label: '04 / DATA & DELIVERY', items: 'MongoDB · SQLite · Qdrant · Firebase · Docker · CI/CD · Playwright', detail: 'Persistence, deployment, and tested behavior.' },
];
export const projects = [
  { id: 'resume-ai', name: 'Resume AI', category: 'AI-POWERED CAREER TOOLKIT', number: '01', type: 'resume', title: 'A better next step.', description: 'A job application deserves more than a guess. An eight-feature toolkit for ATS scoring, job-description matching, resume rewriting, cover letters, and interview preparation.', detail: 'Built with subscription plans, server-side usage limits, UPI payment verification, and offline-ready PWA support.', tech: 'React / Node.js / Express / MongoDB / Groq AI', url: 'https://resume-ai-pearl.vercel.app', metric: '8', metricLabel: 'career tools, one platform' },
  { id: 'paperstack', name: 'PaperStack', category: 'ACADEMIC RESOURCE PLATFORM', number: '02', type: 'papers', title: 'Knowledge, in order.', description: 'Previous-year papers, finally in one place. Built with Asst. Prof. Rachit Nimawat for the IIIT Surat student community.', detail: 'Secure PDF uploads and downloads, nested comments, search filters, authentication with Google login support, and an admin dashboard.', tech: 'React / Express / MongoDB / Cloudinary / Tailwind', url: 'https://paper-stack-beryl.vercel.app', metric: '500+', metricLabel: 'students using the archive' },
  { id: 'learnstack', name: 'LearnStack', category: 'MERN / DIGITAL BOOKSTORE', number: '03', type: 'learnstack', title: 'A better way to discover learning.', description: 'An end-to-end MERN platform for college handbooks, study notes, and kids’ books. I built the website around a visual catalogue that makes it easy to discover the right resource.', detail: 'Distinct student and kids collections, book search, sample previews, and a clear path to Gumroad checkout. Thoughtful CSS, book-led visuals, and responsive layouts connect product discovery to purchase.', tech: 'MongoDB / Express / React / Node.js / Tailwind CSS', url: 'https://www.learnstack.co.in/', metric: 'Production Ready', metricLabel: 'end-to-end development' },
  { id: 'ai-chat-box', name: 'AI Chat Box', category: 'GEMINI API / FIRST-SEMESTER PROJECT', number: '04', type: 'chat', title: 'One interface. Six ways to explore AI.', description: 'Built in my first semester with React, TypeScript, Express, and Google’s Gemini SDKs. Six modes cover text, conversation, code execution, PDF analysis, reasoning, and structured JSON.', detail: 'Dedicated API routes handle chat context, PDF uploads, JSON schemas, and code results. Theme switching, a 3D backdrop, and animated feedback complete the experience.', tech: 'React / TypeScript / Express / Gemini API / Tailwind CSS', url: 'https://github.com/YogeshKhichi7877/AI_chat_box', linkLabel: 'Explore source code', metric: '6', metricLabel: 'purpose-built AI modes' },
  { id: 'expense-tracker', name: 'Expense Tracker', category: 'PERSONAL FINANCE ANALYTICS', number: '05', type: 'expense', title: 'Make sense of spending.', description: 'Turn daily expenses into a clearer picture. A responsive finance dashboard with daily and monthly analytics and category breakdowns.', detail: 'Budget-goal tracking, average daily spend, interactive charts, and CSV export. A calendar-led dashboard connects transactions to category breakdowns and recent spending.', tech: 'React / Express / MongoDB / Chart.js / JWT', url: 'https://expensetracker2-eight.vercel.app', metric: 'Daily', metricLabel: 'details. Monthly perspective.' },
];
export const tomStages = [
  { name: 'Listen', tech: 'Faster-Whisper / OpenWakeWord', text: 'Offline voice interaction starts with a wake word and speech recognition.' },
  { name: 'Understand', tech: 'Ollama / SQLite / Qdrant', text: 'Local inference meets contextual memory, local RAG, and proactive suggestions.' },
  { name: 'Act', tech: 'MCP / Playwright / WebSockets', text: 'Permission-gated automation across Windows, VS Code, browsers, files, and a sandboxed terminal.' },
  { name: 'Verify', tech: '700+ automated tests', text: 'Secure pairing, encrypted credentials, diagnostics, cancellation, and retries.' },
];
