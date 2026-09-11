import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** All coordinates are local to a small, unpinned layout container. No page-spanning SVG. */
export function createTraces(reduced: boolean) {
  const disposers: (()=>void)[] = [];
  document.querySelectorAll<HTMLElement>('[data-trace-host]').forEach(host=>{
    const svg=host.querySelector<SVGSVGElement>(':scope > .system-trace');
    if(!svg)return;
    const rest=svg.querySelector<SVGPathElement>('.trace-rest')!;
    const draw=svg.querySelector<SVGPathElement>('.trace-draw')!;
    const packet=svg.querySelector<SVGCircleElement>('.trace-packet')!;
    const nodes=Array.from(host.querySelectorAll<HTMLElement>('[data-trace-node]'));
    let length=1, progress=reduced?1:0, frame=0, velocity=0;
    let thresholds: number[]=[];
    const render=()=>{
      draw.style.strokeDashoffset=String(length*(1-progress));
      const point=draw.getPointAtLength(length*progress);
      const ahead=draw.getPointAtLength(Math.min(length,length*progress+2));
      const angle=Math.atan2(ahead.y-point.y,ahead.x-point.x)*180/Math.PI;
      packet.setAttribute('transform',`translate(${point.x} ${point.y}) rotate(${angle}) scale(${1+velocity*.35} 1)`);
      packet.style.opacity=reduced||progress<=0||progress>=1?'0':'1';
      nodes.forEach((node,i)=>{
        const active=progress>=thresholds[i];
        node.classList.toggle('trace-reached',active);
        const owner=node.closest('.journey-step,.architecture-layer,.skill-group,.tom-stage,.platform,.impact-item');
        owner?.classList.toggle('trace-reached',active);
      });
    };
    const measure=()=>{
      const box=host.getBoundingClientRect();
      if(!box.width||!box.height)return;
      svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);
      const points=nodes.map(node=>{const rect=node.getBoundingClientRect();return {x:rect.left-box.left+(node.classList.contains('trace-port')?rect.width/2:0),y:rect.top-box.top+rect.height/2};});
      if(!points.length)return;
      const network=svg.dataset.traceKind==='network'&&host.classList.contains('skill-map')&&window.innerWidth>640;
      const busX=box.width/2;
      let path=`M ${network?busX:points[0].x} 0`;
      let prev={x:points[0].x,y:0};
      thresholds=[];
      points.forEach(p=>{
        const middle=(prev.y+p.y)/2;
        path+=network?` V ${p.y} H ${p.x}`:` V ${middle} H ${p.x} V ${p.y}`;
        draw.setAttribute('d',path);
        thresholds.push(draw.getTotalLength());
        if(network)path+=` M ${busX} ${p.y}`;
        prev=p;
      });
      path+=` V ${box.height}`;
      rest.setAttribute('d',path);draw.setAttribute('d',path);
      length=Math.max(1,draw.getTotalLength());
      thresholds=thresholds.map(value=>value/length);
      draw.style.strokeDasharray=String(length);
      render();
    };
    measure();
    const trigger=reduced?undefined:ScrollTrigger.create({trigger:host,start:'top 82%',end:'bottom 48%',onUpdate:self=>{progress=self.progress;velocity=Math.min(1,Math.abs(self.getVelocity())/6000);render();},onRefresh:()=>measure()});
    const observer=new ResizeObserver(()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);});
    observer.observe(host);
    disposers.push(()=>{cancelAnimationFrame(frame);observer.disconnect();trigger?.kill();nodes.forEach(n=>n.classList.remove('trace-reached'));});
  });
  // Draw small section handoffs and decision diagrams in the same matchMedia lifecycle.
  if(!reduced){
    gsap.utils.toArray<HTMLElement>('.trace-handoff').forEach(el=>gsap.from(el.querySelector('span'),{scaleY:0,transformOrigin:'top',scrollTrigger:{trigger:el,start:'top 90%',end:'bottom 60%',scrub:true}}));
    gsap.utils.toArray<SVGPathElement>('.logic-active').forEach(path=>{
      const length=path.getTotalLength();gsap.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:path.closest('.principle'),start:'top 78%',end:'bottom 60%',scrub:true}});
    });
  }
  return ()=>disposers.forEach(dispose=>dispose());
}
