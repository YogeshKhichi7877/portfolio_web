'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useExperience } from '@/components/experience-state';

export function PointerDetail() {
  const pointer=useRef<HTMLDivElement>(null),halo=useRef<HTMLDivElement>(null);
  const {mode}=useExperience();
  useEffect(()=>{
    if(mode==='quick')return;
    const media=gsap.matchMedia();
    media.add('(hover: hover) and (pointer: fine) and (min-width: 1000px) and (prefers-reduced-motion: no-preference)',()=>{
      const el=pointer.current!,ring=halo.current!,label=el.querySelector('span')!;
      const x=gsap.quickTo(ring,'x',{duration:.18,ease:'power3.out'}),y=gsap.quickTo(ring,'y',{duration:.18,ease:'power3.out'});
      let lastX=0,lastY=0,visible=false,context='';
      const hide=()=>{visible=false;delete document.documentElement.dataset.cursorReady;gsap.set([el,ring],{opacity:0});};
      const classify=(target:Element|null)=>{
        if(target?.closest('input,textarea,select,[contenteditable="true"],dialog')){hide();return false;}
        const hit=target?.closest<HTMLElement>('[data-cursor],a,button,summary');
        const next=hit?.dataset.cursor??(hit?.matches('button')?'SELECT':hit?'OPEN ↗':'');
        el.dataset.context=String(Boolean(next));ring.dataset.context=String(Boolean(next));
        const warm=String(Boolean(target?.closest('#ruminate')));el.dataset.warm=warm;ring.dataset.warm=warm;
        if(context!==next){context=next;label.textContent=next;gsap.fromTo(label,{y:5,opacity:0},{y:0,opacity:1,duration:.2,overwrite:true});gsap.to(ring,{scale:next?1.55:1,duration:.25,ease:'power2.out',overwrite:'auto'});}
        return true;
      };
      const move=(event:PointerEvent)=>{
        if(event.pointerType!=='mouse'){hide();return;}
        lastX=event.clientX;lastY=event.clientY;
        if(!classify(event.target instanceof Element?event.target:null))return;
        if(!visible){gsap.set(ring,{x:lastX,y:lastY});visible=true;}
        document.documentElement.dataset.cursorReady='true';gsap.set(el,{x:lastX,y:lastY,opacity:1});gsap.set(ring,{opacity:1});x(lastX);y(lastY);
        el.dataset.flip=String(lastX>innerWidth-220);el.dataset.above=String(lastY>innerHeight-65);
      };
      const press=()=>{if(visible)gsap.to(ring,{scale:.65,duration:.12,overwrite:'auto'});};
      const release=()=>{if(visible)gsap.to(ring,{scale:context?1.55:1,duration:.5,ease:'elastic.out(1,.5)',overwrite:'auto'});};
      const scroll=()=>{if(visible)classify(document.elementFromPoint(lastX,lastY));};
      const key=(event:KeyboardEvent)=>{if(event.key==='Tab'||event.key==='Escape')hide();};
      const hidden=()=>{if(document.hidden)hide();};
      window.addEventListener('pointermove',move,{passive:true});window.addEventListener('pointerdown',press);window.addEventListener('pointerup',release);window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('keydown',key);document.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);document.addEventListener('visibilitychange',hidden);
      return ()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerdown',press);window.removeEventListener('pointerup',release);window.removeEventListener('scroll',scroll);window.removeEventListener('keydown',key);document.removeEventListener('pointerleave',hide);window.removeEventListener('blur',hide);document.removeEventListener('visibilitychange',hidden);hide();gsap.killTweensOf([el,ring,label]);};
    });
    return ()=>media.revert();
  },[mode]);
  return <><div ref={halo} className="cursor-halo" aria-hidden="true"/><div ref={pointer} className="precision-pointer" aria-hidden="true"><i/><b className="cursor-arrow">↗</b><span/></div></>;
}
