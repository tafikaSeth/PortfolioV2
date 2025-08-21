import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {gsap} from "gsap"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const animatePageIn = () => {
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4")
  ];

  if (banners.every(Boolean)) {
    const tl = gsap.timeline();

    tl.set(banners, { yPercent: -100 })
      .to(banners, {
        yPercent: 0,
        stagger: 0.1,
        ease: "power2.out",
        duration: 0.6,
      })

      .to(banners, {
        yPercent: 100,
        stagger: 0.1,
        ease: "power2.inOut",
        duration: 0.8,
      }, "+=0.2");
  }
};

