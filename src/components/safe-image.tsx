'use client';
import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
export function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  const [original, setOriginal] = useState(false);
  if (failed) return <div className={`image-fallback ${props.className ?? ''}`} role="img" aria-label={`${props.alt} unavailable`}><span className="eyebrow">PREVIEW UNAVAILABLE</span><b>{props.alt}</b><small>The image could not be loaded.</small></div>;
  return <Image {...props} key={original ? 'original' : 'optimized'} unoptimized={original || props.unoptimized} alt={props.alt} onError={() => original || props.unoptimized ? setFailed(true) : setOriginal(true)} />;
}
