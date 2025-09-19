import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from '../logo-loop';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

interface LogoAnimateProps {
    direction?: 'left' | 'right';
    speed?: number;
}

export function LogoAnimate({ direction = 'left', speed = 100 }: LogoAnimateProps) {
  return (
    <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        // speed={120}
        speed={speed}
        direction={direction}
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}