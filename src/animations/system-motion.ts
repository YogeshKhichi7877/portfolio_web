import gsap from 'gsap';

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
  // Iris acquisition is deliberately different from the blueprint and skill hinges.
  const acquisition=gsap.timeline({scrollTrigger:{id:'tom-acquisition',trigger:'.tom-scene',start:'top 90%',end:'top 30%',scrub:.5}});
  acquisition.fromTo('.nucleus-map',{clipPath:'circle(12% at 50% 50%)'},{clipPath:'circle(76% at 50% 50%)',duration:1.4,ease:'power2.inOut'},0)
    .from('.integration-point',{opacity:0,scale:0,svgOrigin:'250 250',stagger:.045,duration:.45},.5)
    .from('.nucleus-arc',{rotation:180,svgOrigin:'250 250',duration:1.6,ease:'power2.out'},0)
    .fromTo('.tom-scanline',{top:'8%',opacity:0},{top:'90%',opacity:.8,duration:1.25,ease:'none'},.15)
    .to('.tom-scanline',{opacity:0,duration:.2},1.4);
  gsap.from('.tom-wordmark',{letterSpacing:'.025em',duration:1,ease:'power3.out',scrollTrigger:{trigger:'.tom-intro',start:'top 84%',toggleActions:'play none none reverse'}});
  const stages=gsap.utils.toArray<HTMLElement>('.tom-stage');
  stages.forEach((stage,index)=>{
    const motion=gsap.timeline({scrollTrigger:{id:`tom-stage-entrance-${index}`,trigger:stage,start:'top 89%',end:'top 55%',scrub:.4}});
    if(index===0) motion.from(stage.querySelector('.voice-line'),{scaleY:.03,transformOrigin:'50% 50%',duration:1,ease:'elastic.out(1,.65)'});
    if(index===1) motion.from(stage.querySelectorAll('text'),{x:(i:number)=>i%2?35:-35,y:(i:number)=>i===1?-22:i===3?22:0,opacity:0,stagger:.08,duration:.7},0).from(stage.querySelectorAll('circle'),{scale:2,svgOrigin:'240 75',opacity:0,duration:1},0);
    if(index===2) {
      const branch=stage.querySelector<SVGPathElement>('.stage-draw')!;
      const distance=branch.getTotalLength();
      motion.fromTo(branch,{strokeDasharray:distance,strokeDashoffset:distance},{strokeDashoffset:0,duration:1,ease:'none'},0)
        .from(stage.querySelectorAll('.pipeline-graphic g'),{y:18,opacity:0,stagger:.13,duration:.35},.35);
    }
    if(index===3) motion.from(stage.querySelectorAll('.diagnostic-row'),{x:24,opacity:0,stagger:.22,duration:.4,ease:'steps(4)'});
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
}
