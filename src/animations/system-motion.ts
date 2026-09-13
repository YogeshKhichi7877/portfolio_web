import gsap from 'gsap';
import { createTomRenderer } from './tom-renderer';

/** Distinct scene choreography, registered inside ScrollDirector's media context. */
export function createSystemMotion(desktop: boolean) {
  const blueprint = gsap.timeline({scrollTrigger:{id:'stack-assembly',trigger:'.system-layout',start:'top 88%',end:desktop?'top 12%':'top 30%',scrub:.6}});
  blueprint.from('.blueprint-plane',{x:(index:number)=>(index%2?-1:1)*(desktop?130:45),y:(index:number)=>(index-1.5)*(desktop?55:20),opacity:.2,stagger:.16,duration:1.2,ease:'power3.out'},0);
  const route=document.querySelector<SVGPathElement>('#request-route')!;
  const packet=document.querySelector<SVGCircleElement>('.request-packet')!;
  const length=route.getTotalLength();
  const travel={progress:0};
  blueprint.to(travel,{progress:1,duration:2,ease:'none',onUpdate:()=>{
    const point=route.getPointAtLength(travel.progress*length);
    packet.setAttribute('cx',String(point.x)); packet.setAttribute('cy',String(point.y));
  }},.4).fromTo(packet,{opacity:0},{opacity:1,duration:.1},.4).to(packet,{opacity:0,duration:.2},2.2);
  gsap.utils.toArray<HTMLElement>('.system-specification .architecture-layer').forEach((row,index)=>{
    gsap.from(row.querySelector('div'),{clipPath:`inset(0 ${index%2?0:100}% 0 ${index%2?100:0}%)`,duration:.8,ease:'power3.out',scrollTrigger:{trigger:row,start:'top 86%',toggleActions:'play none none reverse'}});
  });
  gsap.from('.tom-wordmark',{letterSpacing:'.035em',duration:1,ease:'power3.out',scrollTrigger:{trigger:'.tom-intro',start:'top 84%',toggleActions:'play none none reverse'}});
  const disposeSignal=createTomRenderer(desktop);
  const stages=gsap.utils.toArray<HTMLElement>('.tom-stage');
  stages.forEach((stage,index)=>{
    const reveal=gsap.timeline({scrollTrigger:{id:`tom-stage-entrance-${index}`,trigger:stage,start:'top 90%',end:'top 65%',scrub:.18}});
    reveal.from(stage.querySelector('.tom-stage-index'),{y:18,opacity:.45,duration:1},0)
      .from(stage.querySelector('.tom-stage-content'),{y:10,opacity:.7,duration:.8},.1)
      .from(stage.querySelector('.tom-stage-rule i'),{scaleX:0,transformOrigin:'left',duration:1},0);
  });
  // Principles use expanding rules and a sequential decision diagram, not cards.
  gsap.utils.toArray<HTMLElement>('.principle').forEach(row=>gsap.from(row.querySelector('h3'),{wordSpacing:'20px',opacity:.25,duration:.8,scrollTrigger:{trigger:row,start:'top 85%',toggleActions:'play none none reverse'}}));
  // Award impressions land like ink stamps; the colophon assembles a miniature page.
  gsap.utils.toArray<HTMLElement>('.award-note').forEach((note,index)=>{
    const impression=gsap.timeline({scrollTrigger:{trigger:note,start:'top 78%',toggleActions:'play none none reverse'}});
    impression.from(note.querySelector('.award-stamp'),{scale:1.65,rotation:index?28:-32,opacity:0,duration:.55,ease:'power3.in'},0)
      .from(note.querySelector('.award-rule'),{scaleX:0,duration:.65,ease:'power3.out'},.4);
  });
  const cutaway=gsap.timeline({scrollTrigger:{trigger:'.workbench-body',start:'top 88%',end:'top 35%',scrub:.5}});
  cutaway.from('.build-preview',{rotation:-5,y:35,scale:.92,duration:1,ease:'power2.out'},0)
    .from('.preview-cards i',{scaleY:0,transformOrigin:'bottom',stagger:.15,duration:.6},.3)
    .from('.preview-baseline span',{opacity:0,y:8,stagger:.1,duration:.3},.8);
  return disposeSignal;
}
