'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function PointerDetail() {
  const pointer=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const media=gsap.matchMedia();
    media.add('(hover: hover) and (pointer: fine) and (min-width: 1000px) and (prefers-reduced-motion: no-preference)',()=>{
      const el=pointer.current!;
      const label=el.querySelector('span')!;
      const x=gsap.quickTo(el,'x',{duration:.09,ease:'power2.out'}), y=gsap.quickTo(el,'y',{duration:.09,ease:'power2.out'});
      const frame=document.querySelector<HTMLElement>('.assembly-frame');
      const px=frame?gsap.quickTo(frame,'--assembly-px',{duration:.35}):null,py=frame?gsap.quickTo(frame,'--assembly-py',{duration:.35}):null;
      const move=(event:PointerEvent)=>{
        if(event.pointerType!=='mouse')return;
        const target=event.target instanceof Element?event.target:null;
        const hit=target?.closest<HTMLElement>('[data-cursor],a,button,summary');
        const mode=hit?.dataset.cursor??(hit?.closest('#contact')?'CONNECT ↗':hit?.closest('.platform')?'ENTER ↗':hit?'OPEN ↗':'');
        label.textContent=mode;el.dataset.inspect=String(mode==='INSPECT');el.dataset.context=String(Boolean(mode));
        x(event.clientX);y(event.clientY);el.style.opacity='1';
        if(frame&&target?.closest('.assembly-frame')){
          const bounds=frame.getBoundingClientRect();px?.((event.clientX-bounds.left)/bounds.width*2-1);py?.((event.clientY-bounds.top)/bounds.height*2-1);
          const coord=frame.querySelector('[data-pointer-coordinate]');if(coord)coord.textContent=`X ${Math.round(event.clientX-bounds.left)} · Y ${Math.round(event.clientY-bounds.top)}`;
        }
      };
      const hide=()=>{el.style.opacity='0';label.textContent='';};
      const hidden=()=>{if(document.hidden)hide();};
      window.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);document.addEventListener('visibilitychange',hidden);
      return ()=>{window.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',hide);window.removeEventListener('blur',hide);document.removeEventListener('visibilitychange',hidden);hide();};
    });
    return ()=>media.revert();
  },[]);
  return <div ref={pointer} className="precision-pointer" aria-hidden="true"><i/><span/></div>;
}
