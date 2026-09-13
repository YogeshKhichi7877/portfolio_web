# YOGESH.EXE

A résumé-grounded personal portfolio for Yogesh Khinchi, built as a cinematic systems story. The experience uses Next.js App Router, TypeScript, GSAP ScrollTrigger, Lenis, inline SVG diagrams, and responsive CSS. It runs locally without a database, API keys, or a backend service.

## Run locally

Use Node.js 22.9 or newer.

```powershell
cd C:\Users\Acer\Desktop\new
npm install
npm run dev
```

Open `http://localhost:3000`. For a production check:

```powershell
npm run build
npm start
```

Email actions open the visitor’s mail application. External project and profile links open in a new tab. Set `NEXT_PUBLIC_SITE_URL` in `.env.local` before using a public domain so canonical URLs, metadata, robots, and sitemap entries use the correct origin.

## Experience map

- The hero assembles the name from outlined letter fragments as the reader enters the page.
- Journey, System, and Engineering Principles use section-local “SYSTEM TRACE” diagrams. Paths are measured from the real local anchors, so the trace follows the content at different sizes.
- Skills uses six editorial capability sheets with project evidence and a résumé shortcut. GSAP unfolds each sheet on a perspective hinge with a fading page shadow and rotating index number. Scroll reversal, keyboard focus, Quick View, reduced motion, and no-JavaScript reading are supported. The base system uses E4FD97 lime for structure and FFBE0B amber for emphasis; Ruminate keeps its dedicated orange transition and palette.
- How I Build assembles an isometric SVG stack with a travelling request. TOM's original heading leads into a signal loom: 22 SVG strands deform through voice, context, action routes, and a result, driven by a reversible GSAP scroll timeline. A sticky instrument accompanies open editorial workflow rows. The permission gate is an illustration; it never opens an application or runs a command.
- The Experience launcher is a round button on desktop and mobile. Its animated panel switches Cinematic and Quick View, toggles X-Ray, and opens System Control or Diagnostics. Quick View tears down the cinematic timelines and lays out every project vertically. Optimized images retry their original asset if loading fails. `X`, `T`, `G`, `R`, and Escape are keyboard shortcuts; inputs and text fields are left alone.
- X-Ray progressively separates each project into confirmed UI, frontend, API, data, and service layers. TOM’s Memory, Automation, Architecture, and Diagnostics views are controlled visual explanations, and selected System Trace nodes expose conceptual signal panels.
- Projects appear in this order: Resume AI, PaperStack, LearnStack, AI Chat Box, Expense Tracker. LearnStack uses a public storefront capture. AI Chat Box uses a clearly labelled capability diagram grounded in its public React/TypeScript and Express source: six Gemini modes including conversation, code execution, PDF analysis, reasoning, and structured JSON. Expense Tracker uses the dashboard image supplied by Yogesh.
- The custom desktop cursor pairs a precise lime point with an amber GSAP trailing ring, contextual hover labels, and click feedback. Touch, reduced motion, Quick View, keyboard navigation, and editable fields retain the native pointer. Ruminate's section palette remains independent.
- Ruminate is an editorial Tech Lead feature with the supplied portrait, the exact supplied official club logo, real public screenshots of the three platform surfaces, and a portal feature image.
- Along the Way is an editorial awards spread with stamp impressions and leadership notes. Behind the Portfolio uses a miniature browser cutaway and a three-part explanation of input, motion, and reading preferences. The desktop chapter index expands into horizontal labels on hover or keyboard focus.
- The App Router includes a branded `not-found.tsx`, `error.tsx`, `global-error.tsx`, and lightweight `loading.tsx`. Network status and failed images resolve to non-blocking technical feedback.

## Where to edit

- `src/data/portfolio.ts` — identity, links, project descriptions, milestones, and TOM copy.
- `src/data/skills.ts` — grouped technologies and grounded project associations.
- `src/app/capabilities.css` — capability sheet layout and the restrained base accent palette.
- `src/app/systems.css` and `src/animations/system-motion.ts` — the stack blueprint, TOM console and distinct scene animations.
- `src/app/finishing.css`, `src/sections/milestones.tsx`, and `src/sections/now.tsx` — closing chapter designs, Experience panel, chapter index, and Quick View layout.
- `src/app/portfolio-evolution.css` — project additions, recruiter-facing emphasis, and lime/amber refinements.
- `src/app/tom-loom.css`, `src/animations/tom-signal.ts`, and `src/components/pointer-detail.tsx` — signal geometry, TOM layout, and custom cursor.
- `src/sections/` — the narrative chapters (`hero`, `journey`, `skills`, `principles`, `tom`, `projects`, `ruminate`, `ending`, `now`).
- `src/components/project-visual.tsx` — product screenshot and workflow visual treatments.
- `src/components/system-trace.tsx` and `src/animations/trace-director.ts` — measured local trace paths and packet handoffs.
- `src/animations/scroll-director.tsx` — the single GSAP/Lenis lifecycle, pinning, stage sync, refresh, resize, and reduced-motion handling.
- `src/components/navigation.tsx` and `src/components/pointer-detail.tsx` — command navigation, chapter rail, and precision pointer labels.
- `src/app/globals.css` and `src/app/experience.css` — design tokens, layout, responsive behavior, and reduced-motion fallback.
- `public/yogesh-khinchi-portrait.png` and `public/Yogesh-Khinchi-Resume.pdf` — supplied portrait and résumé download.

## Accessibility and motion

Ctrl/Cmd+K opens searchable chapter navigation; Escape closes it and restores focus. The site includes a skip link, native focus states, semantic headings and links, keyboard-accessible skill tooltips, and a real `<dialog>` command palette. Reduced-motion preferences remove smooth scrolling, pinning, travelling packets, and reveal motion while keeping every section and project available in normal document flow. Touch and coarse pointers keep the native cursor.

## Content provenance

Copy and metrics come from the supplied résumé and user-provided project descriptions. The four impact figures are 48+ integrations, 700+ tests, 500+ PaperStack students, and three Ruminate platform surfaces. Product screenshots in `public/products/` are public-page captures except the user-supplied Expense Tracker dashboard. LearnStack's MERN stack and the AI Chat Box first-semester date are user-provided. LearnStack's catalogue, sample previews and Gumroad purchase flow were reviewed at https://www.learnstack.co.in/. AI Chat Box capabilities were reviewed in `server.js`, `src/components/ChatContainer.tsx`, and `package.json` at https://github.com/YogeshKhichi7877/AI_chat_box. The portfolio describes implementation capabilities; no live Gemini requests were run. LearnStack copy does not claim a founder role.

## Checks

`qa/portfolio-evolution-check.cjs` verifies the five projects, image loading, cinematic link visibility, TOM controls, Quick View, and overflow from 320 to 1440 px. `qa/tom-cursor-check.cjs` checks the current signal deformation, reverse scrolling, stage links, custom cursor, and native-pointer fallbacks. Results are saved beside the scripts. Older scripts such as `qa/system-design-check.cjs` refer to earlier TOM designs.

```powershell
npm run typecheck
npm run lint
npm run build
```

The browser QA scripts in `qa/` cover the production preview across 1920, 1440, 1366, 1024, 768, 430, 390, 375, and 360 px; forward/backward scrolling; mid-page refresh; resize and orientation changes; reduced motion; command search and focus restoration; keyboard access to all project links; résumé response type; JavaScript-disabled content; image loading; and console/page errors. `qa/feature-check.cjs` additionally exercises X-Ray, System Control, Diagnostics, TOM subsystem tabs, trace inspection, and Quick View. The final workspace run completed with no recorded errors. Lighthouse scores and cross-browser certification depend on the deployment environment.
