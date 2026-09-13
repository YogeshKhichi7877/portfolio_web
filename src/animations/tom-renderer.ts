import gsap from 'gsap';
import { SIGNAL_THREADS, signalPoints } from './tom-signal';

/** Precomputed numeric geometry; no path parsing, strings or DOM writes per strand. */
export function createTomRenderer(desktop: boolean) {
  const canvas=document.querySelector<HTMLCanvasElement>('.signal-canvas');
  const figure=canvas?.closest<HTMLElement>('.tom-signal');
  const ctx=canvas?.getContext('2d');
  if(!canvas||!figure||!ctx)return ()=>{};
  const shapes=Array.from({length:4},(_,stage)=>Array.from({length:SIGNAL_THREADS},(_,strand)=>new Float32Array(signalPoints(stage,strand).flat())));
  const state={phase:0};
  let visible=false,alive=true,lastPhase=-1,width=0,gradient:CanvasGradient;
  const draw=()=>{
    if(!alive||!visible||document.hidden||Math.abs(state.phase-lastPhase)<.0005)return;
    lastPhase=state.phase;
    const from=Math.min(2,Math.floor(state.phase)),mix=state.phase-from;
    ctx.clearRect(0,0,700,440);
    ctx.strokeStyle=gradient;
    // Three batches retain the alternating thread weights with only three strokes.
    for(let group=0;group<3;group++){
      ctx.beginPath();ctx.lineWidth=group===0?1.8:1.2;ctx.globalAlpha=group===0?1:.75;
      for(let strand=group;strand<SIGNAL_THREADS;strand+=3){
        const a=shapes[from][strand],b=shapes[from+1][strand];
        ctx.moveTo(a[0],a[1]+(b[1]-a[1])*mix);
        for(let p=2;p<a.length;p+=2)ctx.lineTo(a[p],a[p+1]+(b[p+1]-a[p+1])*mix);
      }
      ctx.stroke();
    }
    ctx.globalAlpha=1;
  };
  const resize=()=>{
    const nextWidth=Math.round(figure.clientWidth*Math.min(devicePixelRatio||1,1.5));
    if(nextWidth===width)return;
    width=nextWidth;canvas.width=width;canvas.height=Math.round(width*440/700);
    ctx.setTransform(canvas.width/700,0,0,canvas.height/440,0,0);
    gradient=ctx.createLinearGradient(45,0,655,0);gradient.addColorStop(0,'#72a8c5');gradient.addColorStop(.5,'#b9f7d2');gradient.addColorStop(1,'#77c0b5');
    lastPhase=-1;draw();
  };
  resize();figure.dataset.signalRenderer='canvas';
  const ro=new ResizeObserver(resize);ro.observe(figure);
  const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible){lastPhase=-1;draw();}},{rootMargin:'50px'});io.observe(figure);
  const visibility=()=>{if(!document.hidden){lastPhase=-1;draw();}};document.addEventListener('visibilitychange',visibility);
  gsap.to(state,{phase:3,ease:'none',scrollTrigger:{id:'tom-signal-loom',trigger:desktop?'.tom-stages':'.tom-signal',start:desktop?'top 65%':'top 80%',end:desktop?'bottom 85%':'bottom 25%',scrub:.22},onUpdate:draw});
  // One transform replaces the SVG attribute updates of the moving scan line.
  gsap.fromTo('.signal-playhead',{x:-305},{x:305,ease:'none',scrollTrigger:{trigger:desktop?'.tom-stages':'.tom-signal',start:desktop?'top 65%':'top 80%',end:desktop?'bottom 85%':'bottom 25%',scrub:.22}});
  return ()=>{alive=false;ro.disconnect();io.disconnect();document.removeEventListener('visibilitychange',visibility);delete figure.dataset.signalRenderer;ctx.clearRect(0,0,700,440);};
}
