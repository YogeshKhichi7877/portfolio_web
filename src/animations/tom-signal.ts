/** Shared SVG geometry: rendered on the server, interpolated by GSAP on scroll. */
export const SIGNAL_THREADS = 22;
export function signalPoints(stage: number, strand: number) {
  return Array.from({length: 49}, (_, index) => {
    const t=index/48, lane=strand-(SIGNAL_THREADS-1)/2;
    const envelope=Math.sin(t*Math.PI)**2;
    let y=220+lane*8;
    if(stage===0)y+=Math.sin(t*Math.PI*8+strand*.18)*envelope*(24+Math.abs(lane)*3);
    if(stage===1)y=220+lane*8*(1-envelope*.78)+Math.sin(t*Math.PI*2)*envelope*lane*7;
    if(stage===2)y=220+lane*5+(strand<SIGNAL_THREADS/2?-1:1)*envelope*95;
    if(stage===3)y=220+lane*5+envelope*(t<.5?(t-.25)*150:(.75-t)*150);
    return [45+t*610,y];
  });
}
export function signalPath(points: number[][]) {
  return points.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
}
