import { Hero } from '@/sections/hero';
import { Journey } from '@/sections/journey';
import { Tom } from '@/sections/tom';
import { Projects } from '@/sections/projects';
import { Ruminate } from '@/sections/ruminate';
import { Ending } from '@/sections/ending';
import { Navigation } from '@/components/navigation';
import { ScrollDirector } from '@/animations/scroll-director';
import { PointerDetail } from '@/components/pointer-detail';
import { Principles } from '@/sections/principles';
import { person, projects } from '@/data/portfolio';
import { ExperienceDock, ExperienceProvider } from '@/components/experience-state';
import { NetworkStatus } from '@/components/network-status';
export default function Page() {
  const structuredData={ '@context':'https://schema.org','@graph':[
    {'@type':'Person',name:person.name,email:person.email,jobTitle:'Full Stack Developer and Tech Lead',sameAs:[person.github,person.linkedin],affiliation:{'@type':'CollegeOrUniversity',name:'IIIT Surat'},knowsAbout:['Full Stack Development','AI-integrated applications','React','Python']},
    ...projects.map(p=>({'@type':'SoftwareSourceCode',name:p.name,description:p.description,url:p.url,author:{'@type':'Person',name:person.name}})),
  ]};
  return <ExperienceProvider><Navigation/><ExperienceDock/><NetworkStatus/><main id="main"><Hero/><Journey/><Principles/><Tom/><Projects/><Ruminate/><Ending/></main><ScrollDirector/><PointerDetail/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/></ExperienceProvider>;
}
