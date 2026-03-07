import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export default function SmoothScroll() {
  const { pathname, hash } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;

    if (hash) {
      // Handle hash scroll
      // We use a small timeout to ensure the DOM is ready if navigating from another page
      setTimeout(() => {
        if (lenisRef.current) {
          try {
            lenisRef.current.scrollTo(hash);
          } catch (e) {
            console.warn("Lenis scroll error:", e);
          }
        }
      }, 100);
    } else {
      // Handle page change scroll to top
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash]);

  return null;
}
