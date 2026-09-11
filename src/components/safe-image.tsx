'use client';
import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
export function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`image-fallback ${props.className ?? ''}`} role="img" aria-label={`${props.alt} unavailable`}><span className="eyebrow">PREVIEW UNAVAILABLE</span><b>REQUEST FAILED</b><small>Check the connection and try again later.</small></div>;
  return <Image {...props} alt={props.alt} onError={() => setFailed(true)} />;
}
