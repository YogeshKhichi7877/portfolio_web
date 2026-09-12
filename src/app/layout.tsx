import type { Metadata, Viewport } from 'next';
import './globals.css';
import './experience.css';
import './capabilities.css';
import './systems.css';
import './finishing.css';
import 'lenis/dist/lenis.css';
const origin = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(origin ? { metadataBase: new URL(origin), alternates: { canonical: '/' } } : {}),
  title: 'Yogesh Khinchi — Full Stack Engineer & AI Systems Developer',
  description: 'Full Stack engineer at IIIT Surat and Tech Lead at Ruminate. Explore TOM, a local-first desktop AI platform, and real-world applications.',
  openGraph: { title: 'Yogesh Khinchi — Systems that work.', description: 'Full Stack engineering. Local-first AI. Technical leadership.', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary', title: 'Yogesh Khinchi — Systems that work.', description: 'Full Stack developer, AI systems builder, and Tech Lead at Ruminate.' },
};
export const viewport: Viewport = { themeColor: '#090a09' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
