'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createTraces } from '@/animations/trace-director';
import { createSystemMotion } from '@/animations/system-motion';
import { useExperience } from '@/components/experience-state';

export function ScrollDirector() {
  const { mode } = useExperience();
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const media=gsap.matchMedia();
    media.add({desktop:'(min-width: 1000px) and (min-height: 700px)',mobile:'(max-width: 999px), (max-height: 699px)',reduce:'(prefers-reduced-motion: reduce)'},context=>{
      const {desktop}=context.conditions!;
      const reduce=context.conditions!.reduce || mode === 'quick';
      let alive=true;
      const cleanups:(()=>void)[]=[];
      // Native input stays available for touch, reduced motion and short landscape viewports.
      const lenis=reduce?null:new Lenis({duration:.85,smoothWheel:true,anchors:true,stopInertiaOnNavigate:true});
      if(lenis){
        const tick=(time:number)=>lenis.raf(time*1000);
        lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tick);
        cleanups.push(()=>{gsap.ticker.remove(tick);lenis.destroy();});
      }
      const toScroll=(top:number)=>{if(lenis)lenis.scrollTo(top,{immediate:true});else window.scrollTo(0,top);};
      const tom=document.querySelector<HTMLElement>('#tom')!;
      const stages=['listen','understand','act','verify'];
      const selectStage=(i:number)=>{
        tom.dataset.stage=stages[i];
        tom.querySelector('.tom-phase')!.textContent=`0${i+1} / ${stages[i].toUpperCase()}`;
        tom.querySelector('.nucleus-state')!.textContent=['VOICE / INPUT','MEMORY / CONTEXT','PERMISSION / ACTION','DIAGNOSTICS / TRUST'][i];
        tom.querySelectorAll('[data-tom-select]').forEach((node,index)=>{if(index===i)node.setAttribute('aria-current','step');else node.removeAttribute('aria-current');});
      };
      selectStage(0);
      if(!reduce){
        gsap.to('.reading-progress span',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.documentElement,start:'top top',end:'bottom bottom',scrub:true}});
        const assembly=gsap.timeline({scrollTrigger:{id:'hero-assembly',trigger:'.assembly-hero',start:desktop?'top top':'top 20%',end:desktop?()=>`+=${innerHeight*.9}`:'center 28%',pin:desktop?'.hero-stage':false,scrub:.45,invalidateOnRefresh:true,onUpdate:self=>{const status=document.querySelector('[data-assembly-status]');if(status)status.textContent=self.progress>.92?'SYSTEM / ASSEMBLED':'IDENTITY / ASSEMBLING';}}});
        const route=document.querySelector<SVGPathElement>('.assembly-route')!;
        const routeLength=route.getTotalLength();
        assembly.addLabel('frame').from('.assembly-rule',{scaleX:.12,transformOrigin:'left',opacity:.3,duration:.5},'frame')
          .fromTo(route,{strokeDasharray:routeLength,strokeDashoffset:routeLength},{strokeDashoffset:0,duration:1.8,ease:'none'},'frame')
          .addLabel('name',.15).fromTo('.assembly-word-0 .assembly-letter',{yPercent:(i:number)=>(i%2?1:-1)*(desktop?65:12),rotate:(i:number)=>desktop?(i%2?3:-3):0,clipPath:desktop?'inset(48% 0 48% 0)':'inset(8% 0 8% 0)',opacity:desktop?.035:.06},{yPercent:0,rotate:0,clipPath:'none',opacity:1,stagger:.065,duration:.65,ease:'power2.out'},'name')
          .addLabel('surname',.55).fromTo('.assembly-word-1 .assembly-letter',{yPercent:(i:number)=>(i%2?-1:1)*(desktop?60:12),clipPath:desktop?'inset(45% 0 45% 0)':'inset(8% 0 8% 0)',opacity:desktop?.035:.06},{yPercent:0,clipPath:'none',opacity:1,stagger:.055,duration:.65,ease:'power2.out'},'surname')
          .from('.assembly-identity',{y:18,duration:.4},1.1).from('.assembly-meter i',{scaleX:0,transformOrigin:'left',duration:1.6,ease:'none'},0);
        // Keep final content selectable and unpinned on all mobile layouts.
        gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{y:20,opacity:.6,duration:.6,scrollTrigger:{trigger:el,start:'top 94%',toggleActions:'play none none reverse'}}));
        // Capability sheets open on a physical hinge. The wrapper keeps layout stable
        // while its child rotates; focus immediately settles the sheet for keyboard use.
        gsap.utils.toArray<HTMLElement>('.capability-sheet-wrap').forEach((wrap,index)=>{
          const sheet=wrap.querySelector<HTMLElement>('.capability-sheet')!;
          const unfold=gsap.timeline({scrollTrigger:{id:`capability-sheet-${index}`,trigger:wrap,start:'top 94%',end:desktop?'top 58%':'top 76%',scrub:.45,invalidateOnRefresh:true}});
          unfold.fromTo(sheet,{rotationX:desktop?-42:-14,y:desktop?30:12},{rotationX:0,y:0,duration:1,ease:'power2.out'},0)
            .fromTo(sheet.querySelector('.sheet-shade'),{opacity:desktop?.3:.12},{opacity:0,duration:.8},0)
            .from(sheet.querySelector('.sheet-number'),{rotationX:90,transformOrigin:'50% 100%',duration:.5},.12);
          const settle=()=>{unfold.scrollTrigger?.getTween()?.progress(1);unfold.progress(1);};
          sheet.addEventListener('focusin',settle);
          cleanups.push(()=>sheet.removeEventListener('focusin',settle));
        });
        gsap.from('.capability-folio > i',{rotation:0,x:0,y:0,stagger:.08,scrollTrigger:{trigger:'.capability-layout',start:'top 88%',end:'top 38%',scrub:.5}});
        createSystemMotion(Boolean(desktop));
        if(desktop){
          ScrollTrigger.create({trigger:'.journey-layout',start:'top 125px',end:'bottom 80%',pin:'.journey-layout > div:first-child',pinSpacing:false});
        }
        gsap.from('.integration-fan i',{scaleX:0,transformOrigin:'left',stagger:.07,scrollTrigger:{trigger:'.tom-bottom',start:'top 88%',end:'center 65%',scrub:.3}});
        gsap.from('.test-metric .metric-digit',{yPercent:75,opacity:0,stagger:.08,scrollTrigger:{trigger:'.tom-bottom',start:'top 85%',end:'center 65%',scrub:.3}});
        let travel:gsap.core.Tween|undefined;
        const track=document.querySelector<HTMLElement>('.projects-track')!;
        const viewport=document.querySelector<HTMLElement>('.projects-viewport')!;
        if(desktop){
          travel=gsap.to(track,{x:()=>-(track.scrollWidth-viewport.clientWidth),ease:'none',scrollTrigger:{id:'project-travel',trigger:viewport,start:'top 94px',end:()=>`+=${track.scrollWidth-viewport.clientWidth}`,pin:true,scrub:.35,invalidateOnRefresh:true,anticipatePin:1,onUpdate:self=>{track.style.setProperty('--work-progress',String(self.progress));}}});
          const focus=(event:FocusEvent)=>{
            const slide=event.target instanceof Element?event.target.closest('.project-slide'):null;
            const index=slide?Array.from(track.children).indexOf(slide):-1;
            if(index<0||!travel?.scrollTrigger)return;
            toScroll(travel.scrollTrigger.start+index*viewport.clientWidth);travel.progress(index/Math.max(1,track.children.length-1));
            requestAnimationFrame(()=>{viewport.scrollLeft=0;});
          };
          track.addEventListener('focusin',focus);cleanups.push(()=>track.removeEventListener('focusin',focus));
        }
        gsap.utils.toArray<HTMLElement>('.project-slide').forEach((slide,i)=>{
          const visual=slide.querySelector('.product-screen');
          const trigger=travel?{containerAnimation:travel,trigger:slide,start:'left 95%',end:'left 18%'}:{trigger:slide,start:'top 88%',end:'top 35%'};
          if(visual)gsap.from(visual,{...(i===0?{clipPath:'inset(0 0 90% 0)'}:i===1?{rotation:-5,scale:.85}:{y:40,scale:.96}),scrollTrigger:{...trigger,scrub:.4}});
          gsap.from(slide.querySelector('.project-route span'),{scaleX:0,transformOrigin:'left',scrollTrigger:{...trigger,scrub:true}});
        });
        const orange=gsap.timeline({scrollTrigger:{trigger:'.ruminate',start:'top 92%',end:'top 12%',scrub:.4}});
        orange.from('.ruminate',{backgroundColor:'#090a09',color:'#f2efe7'},0).from('.ruminate-wash',{scaleX:0,transformOrigin:'left',duration:1},0).from('.ruminate-heading',{y:35,duration:.8},.1);
        gsap.from('.lead-portrait',{clipPath:'inset(0 49% 0 49%)',scale:1.06,scrollTrigger:{trigger:'.ruminate-lead-feature',start:'top 80%',end:'center 55%',scrub:.4}});
        gsap.from('.lead-feature-copy h3',{clipPath:'inset(0 80% 0 0)',x:-20,scrollTrigger:{trigger:'.ruminate-lead-feature',start:'top 86%',end:'center 62%',scrub:.4}});
        gsap.from('.lead-feature-meta span',{y:12,opacity:0,stagger:.1,scrollTrigger:{trigger:'.portrait-frame',start:'top 64%',end:'center 50%',scrub:.4}});
        gsap.utils.toArray<HTMLElement>('.platform').forEach((el,i)=>gsap.from(el.querySelector('.platform-surface'),{x:desktop?(i===0?-60:i===1?60:0):0,y:i===2?70:20,rotate:desktop?(i===0?-3:i===1?3:0):0,scale:i===2?.85:.96,scrollTrigger:{trigger:el,start:'top 85%',end:'top 36%',scrub:.45}}));
        gsap.from('.ruminate-portal-callout',{clipPath:'inset(0 0 0 100%)',scrollTrigger:{trigger:'.ruminate-portal-callout',start:'top 90%',end:'top 55%',scrub:.4}});
        gsap.from('.ecosystem-join',{scaleY:0,transformOrigin:'top',scrollTrigger:{trigger:'.ecosystem-join',start:'top 85%',end:'bottom 55%',scrub:true}});
        gsap.from('.ruminate-resolution > p',{letterSpacing:'.03em',scale:.9,scrollTrigger:{trigger:'.ruminate-resolution',start:'top 88%',end:'center 62%',scrub:.3}});
        gsap.to('.ruminate-exit span',{scaleX:0,transformOrigin:'center',stagger:.08,scrollTrigger:{trigger:'.ruminate-exit',start:'top 80%',end:'bottom 25%',scrub:true}});
        gsap.to('.ruminate-wash',{opacity:0,scrollTrigger:{trigger:'.ruminate-exit',start:'top 55%',end:'bottom 5%',scrub:true}});
        gsap.fromTo('.ruminate',{backgroundColor:'#e9854b'},{backgroundColor:'#080909',immediateRender:false,scrollTrigger:{trigger:'.ruminate-exit',start:'top 55%',end:'bottom 5%',scrub:true}});
        gsap.utils.toArray<HTMLElement>('.impact-item').forEach((el,i)=>{
          gsap.from(el.querySelectorAll('.metric-digit'),{...(i===0?{x:25,scale:.6}:i===1?{yPercent:90}:i===2?{scale:1.5,y:15}:{x:-18}),opacity:0,stagger:.07,scrollTrigger:{trigger:el,start:'top 86%',end:'center 67%',scrub:.35}});
        });
        gsap.from('.final-cursor',{scaleY:0,transformOrigin:'bottom',scrollTrigger:{trigger:'.contact',start:'top 80%',end:'top 42%',scrub:.3}});
        gsap.from('.contact-title',{clipPath:'inset(0 0 100% 0)',scrollTrigger:{trigger:'.contact',start:'top 70%',end:'top 24%',scrub:.35}});
      }
      cleanups.push(createTraces(Boolean(reduce)));
      const tomElements=Array.from(tom.querySelectorAll<HTMLElement>('.tom-stage'));
      let activeTom=-1;
      const syncTom=()=>{let index=0;tomElements.forEach((el,i)=>{if(el.getBoundingClientRect().top<=innerHeight*.48)index=i;});if(index!==activeTom){activeTom=index;selectStage(index);}};
      tom.querySelectorAll<HTMLAnchorElement>('[data-tom-select]').forEach(link=>{
        const navigate=(event:MouseEvent)=>{
          if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
          const target=document.querySelector<HTMLElement>(link.hash);
          if(!target)return;
          event.preventDefault();event.stopPropagation();
          const destination=target.getBoundingClientRect().top+window.scrollY-120;
          // Native focus/anchor scrolling may move the viewport before Lenis updates.
          // Synchronize its origin before starting a fresh stage navigation.
          if(lenis){lenis.scrollTo(window.scrollY,{immediate:true,force:true});lenis.scrollTo(destination,{duration:.7,force:true,onComplete:syncTom});}
          else{window.scrollTo({top:destination,behavior:'instant'});syncTom();}
          history.pushState(null,'',link.hash);
        };
        link.addEventListener('click',navigate);
        cleanups.push(()=>link.removeEventListener('click',navigate));
      });
      ScrollTrigger.create({trigger:tom,start:'top bottom',end:'bottom top',onUpdate:syncTom,onRefresh:syncTom});
      ScrollTrigger.sort();
      const dialog=document.querySelector('dialog');
      const sync=()=>{if(document.hidden||dialog?.open)lenis?.stop();else lenis?.start();};
      const observer=new MutationObserver(sync);if(dialog)observer.observe(dialog,{attributes:true,attributeFilter:['open']});
      document.addEventListener('visibilitychange',sync);
      let refreshFrame=0;
      const refresh=()=>{cancelAnimationFrame(refreshFrame);refreshFrame=requestAnimationFrame(()=>{if(alive){lenis?.resize();ScrollTrigger.refresh();ScrollTrigger.update();}});};
      document.fonts.ready.then(refresh);window.addEventListener('load',refresh);window.addEventListener('pageshow',refresh);
      // Existing raster assets reserve dimensions; refresh only on actual image load.
      document.querySelectorAll('img').forEach(img=>{if(!img.complete){img.addEventListener('load',refresh);cleanups.push(()=>img.removeEventListener('load',refresh));}});
      refresh();
      return ()=>{alive=false;cancelAnimationFrame(refreshFrame);observer.disconnect();document.removeEventListener('visibilitychange',sync);window.removeEventListener('load',refresh);window.removeEventListener('pageshow',refresh);cleanups.reverse().forEach(fn=>fn());};
    });
    return ()=>media.revert();
  },[mode]);
  return null;
}
